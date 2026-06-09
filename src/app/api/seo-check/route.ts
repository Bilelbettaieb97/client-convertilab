import { NextRequest, NextResponse } from "next/server";
import { analyzeSite } from "@/lib/seo/analyzer";
import { generateReportHtml } from "@/lib/seo/report-template";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { renderToBuffer } from "@react-pdf/renderer";
import React from "react";
import { SeoAuditPdf } from "@/lib/seo/pdf-template";
import { pushToPipedrive } from "@/lib/pipedrive";
import { scheduleEmailSeries, firstName } from "@/lib/email-series";
import type { SeoAuditResult } from "@/lib/seo/analyzer";

export const maxDuration = 60;
export const dynamic = "force-dynamic";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

async function generatePdf(audit: SeoAuditResult): Promise<Buffer> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const buffer = await renderToBuffer(React.createElement(SeoAuditPdf, { audit }) as any);
  return Buffer.from(buffer);
}

export async function POST(request: NextRequest) {
  const warnings: string[] = [];
  try {
    const body = await request.json();
    const { url, name, email, phone, company } = body;

    if (!url || !name || !email) {
      return NextResponse.json(
        { error: "URL, nom et email sont requis." },
        { status: 400 }
      );
    }

    // 1. Analyze the site
    const audit = await analyzeSite(url);

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
    const supabaseRow = {
      website_url: audit.url,
      domain: audit.domain,
      name,
      email,
      phone: phone || null,
      company: company || null,
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

    // 6. Send email to client
    let emailSent = false;
    try {
      const { error: sendErr } = await resend.emails.send({
        from: "ConvertiLab <bilel@convertilab.com>",
        to: email,
        subject: `Votre Audit SEO — ${audit.domain} — Score : ${audit.scores.global}/100 (${audit.grade})`,
        html: getEmailHtml(name, audit.domain, audit.scores.global, audit.grade, audit.gradeLabel, audit.issues.filter(i => i.priority === "critical").length, audit.strengths.slice(0, 3), !!pdfBuffer),
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
    resend.emails.send({
      from: "ConvertiLab <bilel@convertilab.com>",
      to: ["contact@convertilab.com", "convertilab@gmail.com"],
      subject: `Nouveau lead SEO Check — ${name} — ${audit.domain} (${audit.scores.global}/100)`,
      html: `
        <h2>Nouveau lead via SEO Check</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Tel :</strong> ${phone || "Non renseigne"}</p>
        <p><strong>Entreprise :</strong> ${company || "Non renseigne"}</p>
        <hr>
        <p><strong>Site audite :</strong> ${audit.domain}</p>
        <p><strong>Score :</strong> ${audit.scores.global}/100 (${audit.grade})</p>
        <p><strong>Problemes critiques :</strong> ${audit.issues.filter(i => i.priority === "critical").length}</p>
        <p><strong>Date :</strong> ${new Date().toLocaleString("fr-FR")}</p>
      `,
    }).then(
      () => {},
      (err) => console.error("[SEO Check][email_agency] ERREUR:", err instanceof Error ? err.message : err)
    );

    await pushToPipedrive("SEO Check", name, email, phone, company, {
      domain: audit.domain,
      score_global: audit.scores.global,
      grade: audit.grade,
      critical_count: audit.issues.filter(i => i.priority === "critical").length,
    }).catch((err) => {
      console.error("[SEO Check][pipedrive] ERREUR:", err instanceof Error ? err.message : err);
      warnings.push("pipedrive_failed");
    });

    await scheduleEmailSeries("SEO Check", email, {
      prenom: firstName(name),
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

function getEmailHtml(name: string, domain: string, score: number, grade: string, gradeLabel: string, criticalCount: number, strengths: string[], isPdf: boolean): string {
  const scoreColor = score >= 80 ? "#22c55e" : score >= 60 ? "#eab308" : score >= 40 ? "#f97316" : "#ef4444";

  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;background:#f4f4f8;margin:0;padding:0;">
<div style="max-width:600px;margin:0 auto;padding:20px;">

<div style="background:#0a0a1a;border-radius:16px;padding:40px;text-align:center;color:#fff;">
  <div style="font-size:12px;color:#a29bfe;text-transform:uppercase;letter-spacing:2px;margin-bottom:16px;">Audit SEO Complet</div>
  <h1 style="font-size:28px;margin:0 0 8px;">Votre rapport est pret !</h1>
  <p style="color:#8888aa;font-size:14px;margin:0;">Audit de <strong style="color:#a29bfe;">${domain}</strong></p>
</div>

<div style="background:#fff;border-radius:16px;padding:30px;margin-top:16px;text-align:center;">
  <p style="color:#666;font-size:14px;margin:0 0 20px;">Bonjour <strong>${name}</strong>,</p>
  <p style="color:#666;font-size:14px;margin:0 0 24px;">Voici les resultats de l'analyse SEO de votre site <strong>${domain}</strong>.</p>

  <div style="background:#f8f9fa;border-radius:12px;padding:24px;margin:20px 0;">
    <div style="font-size:48px;font-weight:900;color:${scoreColor};line-height:1;">${score}/100</div>
    <div style="font-size:18px;color:#666;margin-top:4px;">Grade : <strong style="color:${scoreColor};">${grade}</strong> — ${gradeLabel}</div>
  </div>

  ${criticalCount > 0 ? `
  <div style="background:#fff0f0;border-radius:12px;padding:16px;margin:16px 0;border-left:4px solid #ef4444;">
    <p style="color:#ef4444;font-weight:700;margin:0;font-size:14px;">${criticalCount} probleme(s) critique(s) detecte(s)</p>
    <p style="color:#888;font-size:12px;margin:6px 0 0;">Consultez le rapport en piece jointe pour les details et solutions.</p>
  </div>` : ""}

  ${strengths.length > 0 ? `
  <div style="background:#f0fff4;border-radius:12px;padding:16px;margin:16px 0;border-left:4px solid #22c55e;text-align:left;">
    <p style="color:#22c55e;font-weight:700;margin:0 0 8px;font-size:14px;">Points forts</p>
    ${strengths.map(s => `<p style="color:#666;font-size:12px;margin:4px 0;">\u2713 ${s}</p>`).join("")}
  </div>` : ""}

  <p style="color:#888;font-size:13px;margin:20px 0;">Le rapport complet est en <strong>piece jointe</strong> de cet email${isPdf ? "." : ". Ouvrez le fichier HTML dans votre navigateur puis <strong>Cmd+P</strong> pour l'enregistrer en PDF."}</p>
</div>

<div style="background:#1a1040;border-radius:16px;padding:30px;margin-top:16px;text-align:center;color:#fff;">
  <h2 style="font-size:20px;margin:0 0 8px;">Besoin d'aide pour corriger tout ca ?</h2>
  <p style="color:#8888aa;font-size:13px;margin:0 0 20px;">Notre equipe peut prendre en charge toutes les corrections et optimisations.</p>
  <a href="https://www.convertilab.com/contact" style="display:inline-block;background:#6c5ce7;color:#fff;padding:12px 28px;border-radius:10px;text-decoration:none;font-weight:700;font-size:14px;">Prendre rendez-vous gratuit</a>
  <p style="color:#5a5a7a;font-size:11px;margin-top:16px;">
    <a href="https://www.convertilab.com" style="color:#a29bfe;text-decoration:none;">convertilab.com</a> &bull;
    <a href="tel:+33616477245" style="color:#a29bfe;text-decoration:none;">06 16 47 72 45</a> &bull;
    <a href="mailto:contact@convertilab.com" style="color:#a29bfe;text-decoration:none;">contact@convertilab.com</a>
  </p>
</div>

</div>
</body>
</html>`;
}
