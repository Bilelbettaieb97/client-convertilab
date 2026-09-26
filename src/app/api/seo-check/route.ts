import { NextRequest, NextResponse } from "next/server";
import { analyzeSite } from "@/lib/seo/analyzer";
import { generateReportHtml } from "@/lib/seo/report-template";
import { createClient } from "@supabase/supabase-js";
import { getResend } from "@/lib/resend";
import { renderToBuffer } from "@react-pdf/renderer";
import React from "react";
import { SeoAuditPdf } from "@/lib/seo/pdf-template";
import { pushToPipedrive } from "@/lib/pipedrive";
import { scheduleEmailSeries, nomDappel } from "@/lib/email-series";
import { baliserLiens } from "@/lib/utm";
import { deposerRapport } from "@/lib/tools/upload-rapport";
import { htmlVersTexte, entetesDesinscription } from "@/lib/tools/email-delivrabilite";
import { notifierAgence } from "@/lib/tools/notifier-agence";
import type { SeoAuditResult } from "@/lib/seo/analyzer";

export const maxDuration = 60;
export const dynamic = "force-dynamic";

const BLOCKED_EMAILS = new Set(
  (process.env.BLOCKED_EMAILS || "").split(",").map((e) => e.trim().toLowerCase()).filter(Boolean)
);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

async function generatePdf(audit: SeoAuditResult): Promise<Buffer> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const buffer = await renderToBuffer(React.createElement(SeoAuditPdf, { audit }) as any);
  return Buffer.from(buffer);
}

export async function POST(request: NextRequest) {
  const warnings: string[] = [];
  try {
    const body = await request.json();
    const { url, name, email, phone, company, source } = body;

    if (!url || !name || !email) {
      return NextResponse.json(
        { error: "URL, nom et email sont requis." },
        { status: 400 }
      );
    }

    // Blocage silencieux — faux succès sans rien traiter
    if (BLOCKED_EMAILS.has(email.toLowerCase())) {
      return NextResponse.json({ success: true, emailSent: true });
    }

    // 1. Analyze the site — echec isole du catch fatal pour renvoyer au visiteur
    // la vraie raison (site injoignable) plutot qu'un message generique.
    let audit;
    try {
      audit = await analyzeSite(url);
    } catch (err) {
      console.error("[SEO Check][analyze] ERREUR:", err instanceof Error ? err.message : err);
      const raison =
        err instanceof Error && err.message
          ? err.message
          : "Analyse impossible. Verifiez l'URL et reessayez.";
      return NextResponse.json({ error: raison }, { status: 400 });
    }

    // 2. Generate HTML report
    const reportHtml = generateReportHtml(audit);

    // 3. Generate PDF
    let pdfBuffer: Buffer | null = null;
    try {
      pdfBuffer = await generatePdf(audit);
    } catch (err) {
      console.error("PDF generation failed, fallback to HTML:", err);
    }

    // 4. Préparer l'objet à insérer (email_sent sera mis à jour après envoi)
    const visitorIp =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      request.headers.get("x-real-ip") ||
      null;

    const supabaseRow = {
      website_url: audit.url,
      domain: audit.domain,
      name,
      email,
      phone: phone || null,
      company: company || null,
      ip: visitorIp,
      score_global: audit.scores.global,
      score_technique: audit.scores.technique,
      score_onpage: audit.scores.onPage,
      score_schema: audit.scores.schema,
      score_mobile: audit.scores.mobile,
      score_contenu: audit.scores.contenu,
      score_geo: audit.scores.geo,
      score_performance: audit.scores.performance,
      score_securite: audit.scores.securite,
      grade: audit.grade,
      issues_count: audit.issues.length,
      critical_count: audit.issues.filter(i => i.priority === "critical").length,
      report_html: reportHtml,
      source: source || null,
    };

    // 5. Build attachment (PDF if available, HTML fallback)
    const attachment = pdfBuffer
      ? {
          filename: `audit-seo-${audit.domain}-${new Date().toISOString().split("T")[0]}.pdf`,
          content: pdfBuffer,
        }
      : {
          filename: `audit-seo-${audit.domain}-${new Date().toISOString().split("T")[0]}.html`,
          content: Buffer.from(reportHtml, "utf-8"),
        };

    // 5 bis. Déposer le rapport et récupérer son adresse publique : la pièce
    // jointe passe inaperçue dans certaines messageries, le lien la double.
    const rapportUrl = (await deposerRapport(
      attachment.filename,
      attachment.content,
      pdfBuffer ? "application/pdf" : "text/html"
    )) || undefined;

    // 6. Send email to client
    let emailSent = false;
    try {
      const corpsHtml = baliserLiens(
        getEmailHtml(name, audit.domain, audit.scores.global, audit.grade, audit.gradeLabel, audit.issues.filter(i => i.priority === "critical").length, audit.strengths.slice(0, 3), !!pdfBuffer, rapportUrl),
        { medium: "rapport", campaign: "seo-check", content: "immediat" }
      );
      const { error: sendErr } = await getResend().emails.send({
        from: "ConvertiLab <contact@convertilab.com>",
        to: email,
        subject: `Votre audit SEO de ${audit.domain} : ${audit.scores.global}/100`,
        html: corpsHtml,
        text: htmlVersTexte(corpsHtml),
        headers: entetesDesinscription(email),
        attachments: [attachment],
      });
      if (sendErr) throw sendErr;
      emailSent = true;
    } catch (emailError) {
      console.error("[SEO Check][email_client] ERREUR:", emailError instanceof Error ? emailError.message : emailError);
      warnings.push("email_client_failed");
    }

    // Insérer en Supabase avec email_sent correct — await pour compléter avant return
    const { error: insertErr } = await supabase.from("seo_audits")
      .insert({ ...supabaseRow, email_sent: emailSent });
    if (insertErr) {
      console.error("[SEO Check][supabase_insert] ERREUR:", insertErr.message);
      warnings.push("supabase_insert_failed");
    }

    // 7. Agency notification (non-blocking) + Pipedrive (awaited)
    notifierAgence(
      `Nouveau lead SEO Check — ${name} — ${audit.domain} (${audit.scores.global}/100)`,
      `
        <h2>Nouveau lead via SEO Check</h2>
        <p><strong>Entreprise :</strong> ${name || "non renseignée"}</p>
        <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Site audité :</strong> <a href="https://${audit.domain}">${audit.domain}</a></p>
        <p><strong>Score :</strong> ${audit.scores.global}/100 (${audit.grade})</p>
        <p><strong>Problèmes critiques :</strong> ${audit.issues.filter(i => i.priority === "critical").length}</p>
        <p><strong>Origine :</strong> ${source || "inconnue"}</p>
        <p><strong>Date :</strong> ${new Date().toLocaleString("fr-FR")}</p>
      `,
      "SEO Check"
    );

    // origine : pose par le ChatWidget, liste blanche car la route est publique.
    // Le lead garde la serie SEO Check, seule la note du deal signale le chat.
    const origine = body.origine === "chatbot" ? "chatbot" : null;

    await pushToPipedrive("SEO Check", name, email, phone, company, {
      domain: audit.domain,
      score_global: audit.scores.global,
      grade: audit.grade,
      critical_count: audit.issues.filter(i => i.priority === "critical").length,
      ...(origine ? { origine } : {}),
    }).catch((err) => {
      console.error("[SEO Check][pipedrive] ERREUR:", err instanceof Error ? err.message : err);
      warnings.push("pipedrive_failed");
    });

    await scheduleEmailSeries("SEO Check", email, {
      prenom: nomDappel(name, company),
      domaine: audit.domain,
      score: String(audit.scores.global),
      grade: audit.grade,
      critiques: String(audit.issues.filter(i => i.priority === "critical").length),
    }).catch((err) =>
      console.error("[SEO Check][email_series] ERREUR:", err instanceof Error ? err.message : err)
    );

    // 8. Return results to frontend
    return NextResponse.json({
      success: true,
      emailSent,
      ...(warnings.length ? { warnings } : {}),
      pdfBase64: pdfBuffer && pdfBuffer.length > 0 ? pdfBuffer.toString("base64") : null,
      audit: {
        domain: audit.domain,
        scores: audit.scores,
        grade: audit.grade,
        gradeLabel: audit.gradeLabel,
        issues: audit.issues.slice(0, 5),
        strengths: audit.strengths.slice(0, 5),
        totalIssues: audit.issues.length,
        criticalIssues: audit.issues.filter(i => i.priority === "critical").length,
      },
    });
  } catch (error) {
    console.error("[SEO Check][fatal] ERREUR:", error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'analyse. Verifiez l'URL et reessayez." },
      { status: 500 }
    );
  }
}

/**
 * L'email de l'audit SEO, en courrier ordinaire.
 *
 * Même règle que le gabarit partagé (lib/tools/shared-email-template.ts) :
 * fond blanc, pas de bandeau sombre, pas de bouton coloré, un lien simple,
 * une signature en texte. C'est ce qui a fait passer 4 emails sur 9 à 9 sur 9
 * en boîte principale le 11/09/2026, à texte identique. Ne pas rhabiller sans
 * refaire le test d'arrivée en boîte.
 */
function getEmailHtml(name: string, domain: string, score: number, grade: string, gradeLabel: string, criticalCount: number, strengths: string[], isPdf: boolean, rapportUrl?: string): string {
  const forts = strengths.slice(0, 3).map(s => `<li style="margin:0 0 4px;">${s}</li>`).join("");

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#ffffff;">
<div style="max-width:600px;margin:0 auto;padding:24px 20px;font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.55;color:#222;">

<p style="margin:0 0 16px;">Bonjour,</p>

<p style="margin:0 0 16px;">${name
    ? `Voici l'audit SEO de <strong>${domain}</strong>, demandé pour ${name}.`
    : `Voici l'audit SEO de <strong>${domain}</strong>.`}</p>

<p style="margin:0 0 16px;">Résultat : <strong>${score}/100</strong>, note ${grade} (${gradeLabel}).${criticalCount > 0 ? ` ${criticalCount} problème${criticalCount > 1 ? "s" : ""} critique${criticalCount > 1 ? "s" : ""} ${criticalCount > 1 ? "sont détectés" : "est détecté"}, c'est par là qu'il faut commencer.` : " Aucun problème critique détecté."}</p>

${strengths.length > 0 ? `<p style="margin:0 0 6px;">Ce qui est déjà en place :</p>
<ul style="margin:0 0 16px;padding-left:20px;">${forts}</ul>` : ""}

${rapportUrl
    ? `<p style="margin:0 0 16px;">Le rapport complet est en pièce jointe${isPdf ? " (PDF)" : ""}, et vous pouvez aussi l'ouvrir ici :<br>
<a href="${rapportUrl}" style="color:#4a3fc7;">${rapportUrl}</a></p>`
    : `<p style="margin:0 0 16px;">Le rapport complet est en pièce jointe de cet email${isPdf ? "." : ". Ouvrez le fichier HTML dans votre navigateur, puis Cmd+P pour l'enregistrer en PDF."}</p>`}

<p style="margin:0 0 16px;">Il détaille les 60 points vérifiés, classés par priorité, avec la correction à appliquer pour chacun.</p>

<p style="margin:0 0 16px;">Si vous voulez qu'on regarde ensemble par quoi commencer, répondez simplement à cet email, ou prenez 30 minutes ici : <a href="https://calendly.com/convertilab-5bsc/30min" style="color:#4a3fc7;">calendly.com/convertilab-5bsc/30min</a>.</p>

<p style="margin:24px 0 0;color:#444;">
Bilel Bettaieb<br>
Fondateur, ConvertiLab<br>
06 16 47 72 45<br>
<a href="https://www.convertilab.com" style="color:#4a3fc7;">convertilab.com</a>
</p>

</div>
</body>
</html>`;
}
