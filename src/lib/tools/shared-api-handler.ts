import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import type { ToolConfig, LeadInfo } from "./shared-types";
import { pushToPipedrive } from "@/lib/pipedrive";
import { scheduleEmailSeries } from "@/lib/email-series";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

const BLOCKED_EMAILS = new Set(
  (process.env.BLOCKED_EMAILS || "").split(",").map((e) => e.trim().toLowerCase()).filter(Boolean)
);

function isBlocked(email: string): boolean {
  return BLOCKED_EMAILS.has(email.toLowerCase());
}

// Identites techniques : le ChatWidget appelle ces memes routes avec une identite
// factice, uniquement pour afficher une analyse dans la conversation. Ce n'est pas
// un lead — on renvoie le resultat sans creer de contact, de deal, ni de serie email.
const IDENTITES_TECHNIQUES = new Set(["chatbot@temp.com"]);

function estAnalyseSeule(email: string): boolean {
  return IDENTITES_TECHNIQUES.has(email.trim().toLowerCase());
}

function log(tool: string, step: string, err: unknown) {
  const msg = err instanceof Error ? err.message : String(err);
  console.error(`[${tool}][${step}] ERREUR: ${msg}`);
}

export function createToolHandler<TInput, TResult>(config: ToolConfig<TInput, TResult>) {
  return async function POST(request: NextRequest) {
    const warnings: string[] = [];

    try {
      const body = await request.json();

      // 1. Validate
      const input = config.validate(body);

      // Blocage silencieux — retourne un succès factice sans rien traiter
      if (isBlocked(input.email)) {
        return NextResponse.json({ success: true, emailSent: true, pdfBase64: null });
      }

      const lead: LeadInfo = {
        name: input.name,
        email: input.email,
        phone: (input as Record<string, unknown>).phone as string | undefined,
        company: (input as Record<string, unknown>).company as string | undefined,
      };

      // 2. Analyze — echec isole du catch fatal : le visiteur doit lire la vraie
      // raison (URL injoignable) et pas un message generique qui l'empeche de corriger.
      let result: TResult;
      try {
        result = await config.analyze(input);
      } catch (err) {
        log(config.toolName, "analyze", err);
        const raison =
          err instanceof Error && err.message
            ? err.message
            : "Analyse impossible. Verifiez l'URL et reessayez.";
        return NextResponse.json({ error: raison }, { status: 400 });
      }

      // Analyse seule (chatbot) — on renvoie le resultat et on s'arrete la : ni email,
      // ni Supabase, ni serie, ni Pipedrive. Place APRES l'analyse protegee pour que
      // le chat recoive lui aussi la vraie raison d'un echec.
      if (estAnalyseSeule(input.email)) {
        return NextResponse.json({
          success: true,
          emailSent: false,
          pdfBase64: null,
          ...config.buildResponsePayload(result),
        });
      }

      // 3. Generate PDF
      let pdfBuffer: Buffer | null = null;
      try {
        pdfBuffer = await config.generatePdf(result);
      } catch (err) {
        log(config.toolName, "PDF", err);
        warnings.push("pdf_generation_failed");
      }

      // 4. Build attachments
      const attachments: { filename: string; content: Buffer }[] = [];
      const hasPdf = pdfBuffer && pdfBuffer.length > 0;

      if (config.buildExtraAttachments) {
        attachments.push(...config.buildExtraAttachments(result));
      } else if (hasPdf) {
        const date = new Date().toISOString().split("T")[0];
        attachments.push({
          filename: `${config.toolName}-${date}.pdf`,
          content: pdfBuffer!,
        });
      }

      // 5. Send email to client
      let emailSent = false;
      try {
        const { error: sendErr } = await resend.emails.send({
          from: "ConvertiLab <bilel@convertilab.com>",
          to: lead.email,
          subject: config.buildEmailSubject(result),
          html: config.buildEmailHtml(lead, result, !!(hasPdf || attachments.length > 0)),
          attachments: attachments.length > 0 ? attachments : undefined,
        });
        if (sendErr) throw sendErr;
        emailSent = true;
      } catch (err) {
        log(config.toolName, "email_client", err);
        warnings.push("email_client_failed");
      }

      // 6. Store in Supabase avec email_sent correct — awaité pour garantir la complétion
      const row = config.buildSupabaseRow(lead, result);
      const { error: insertErr } = await supabase
        .from(config.tableName)
        .insert({
          ...row,
          name: lead.name,
          email: lead.email,
          phone: lead.phone || null,
          company: lead.company || null,
          email_sent: emailSent,
        });
      if (insertErr) {
        log(config.toolName, "supabase_insert", insertErr.message);
        warnings.push("supabase_insert_failed");
      }

      // 7. Schedule email series
      if (config.buildSeriesContext) {
        const ctx = config.buildSeriesContext(result, lead);
        await scheduleEmailSeries(config.toolName, lead.email, ctx).catch((err) =>
          log(config.toolName, "email_series", err)
        );
      }

      // 8. Agency notification (fire-and-forget mais erreurs loggées)
      resend.emails.send({
        from: "ConvertiLab <bilel@convertilab.com>",
        to: ["contact@convertilab.com", "convertilab@gmail.com"],
        subject: `Nouveau lead ${config.toolName} — ${lead.name}`,
        html: `
          <h2>Nouveau lead via ${config.toolName}</h2>
          <p><strong>Nom :</strong> ${lead.name}</p>
          <p><strong>Email :</strong> ${lead.email}</p>
          <p><strong>Tel :</strong> ${lead.phone || "Non renseigne"}</p>
          <p><strong>Entreprise :</strong> ${lead.company || "Non renseigne"}</p>
          <p><strong>Date :</strong> ${new Date().toLocaleString("fr-FR")}</p>
        `,
      }).then(
        () => {},
        (err) => log(config.toolName, "email_agency", err)
      );

      // 9. Pipedrive — awaité pour garantir la complétion, erreurs loggées
      await pushToPipedrive(
        config.toolName,
        lead.name,
        lead.email,
        lead.phone,
        lead.company,
        config.buildPipedriveFields ? config.buildPipedriveFields(result) : {}
      ).catch((err) => {
        log(config.toolName, "pipedrive", err);
        warnings.push("pipedrive_failed");
      });

      // 10. Respond
      return NextResponse.json({
        success: true,
        emailSent,
        ...(warnings.length ? { warnings } : {}),
        pdfBase64: pdfBuffer && pdfBuffer.length > 0 ? pdfBuffer.toString("base64") : null,
        ...config.buildResponsePayload(result),
      });
    } catch (error) {
      log(config.toolName, "fatal", error);
      return NextResponse.json(
        { error: "Une erreur est survenue. Verifiez vos informations et reessayez." },
        { status: 500 }
      );
    }
  };
}
