import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import type { ToolConfig, LeadInfo } from "./shared-types";
import { pushToPipedrive } from "@/lib/pipedrive";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export function createToolHandler<TInput, TResult>(config: ToolConfig<TInput, TResult>) {
  return async function POST(request: NextRequest) {
    try {
      const body = await request.json();

      // 1. Validate
      const input = config.validate(body);
      const lead: LeadInfo = {
        name: input.name,
        email: input.email,
        phone: (input as Record<string, unknown>).phone as string | undefined,
        company: (input as Record<string, unknown>).company as string | undefined,
      };

      // 2. Analyze
      const result = await config.analyze(input);

      // 3. Generate PDF
      let pdfBuffer: Buffer | null = null;
      try {
        pdfBuffer = await config.generatePdf(result);
      } catch (err) {
        console.error(`[${config.toolName}] PDF generation failed:`, err);
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
        await resend.emails.send({
          from: "ConvertiLab <bilel@convertilab.com>",
          to: lead.email,
          subject: config.buildEmailSubject(result),
          html: config.buildEmailHtml(lead, result, !!(hasPdf || attachments.length > 0)),
          attachments: attachments.length > 0 ? attachments : undefined,
        });
        emailSent = true;
      } catch (emailError) {
        console.error(`[${config.toolName}] Email failed:`, emailError);
      }

      // 6. Store in Supabase avec email_sent correct — await pour compléter avant return
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
      if (insertErr) console.error(`[${config.toolName}] Supabase insert error:`, insertErr.message);

      // 7. Agency notification (non-blocking) + Pipedrive (awaited)
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
      }).then(() => {}, () => {});

      await pushToPipedrive(
        config.toolName,
        lead.name,
        lead.email,
        lead.phone,
        lead.company,
        config.buildPipedriveFields ? config.buildPipedriveFields(result) : {}
      ).catch(() => {});

      // 8. Respond
      return NextResponse.json({
        success: true,
        emailSent,
        pdfBase64: pdfBuffer && pdfBuffer.length > 0 ? pdfBuffer.toString("base64") : null,
        ...config.buildResponsePayload(result),
      });
    } catch (error) {
      console.error(`[${config.toolName}] Error:`, error);
      return NextResponse.json(
        { error: "Une erreur est survenue. Verifiez vos informations et reessayez." },
        { status: 500 }
      );
    }
  };
}
