import type { LeadInfo } from "./shared-types";
import { scoreColor } from "./shared-types";

interface EmailParams {
  toolLabel: string;
  lead: LeadInfo;
  domain?: string;
  score?: number;
  grade?: string;
  gradeLabel?: string;
  highlights?: string[];
  warnings?: string[];
  // Malgre son nom, ce booleen signifie « une piece jointe accompagne l'email ».
  // Le handler le calcule par !!(hasPdf || attachments.length > 0) : a false, il n'y
  // a AUCUN fichier joint, l'email ne doit donc rien promettre.
  isPdf: boolean;
  ctaText?: string;
  ctaUrl?: string;
}

export function buildToolEmailHtml(params: EmailParams): string {
  const {
    toolLabel, lead, domain, score, grade, gradeLabel,
    highlights = [], warnings = [], isPdf,
    ctaText = "Prendre rendez-vous gratuit",
    ctaUrl = "https://www.convertilab.com/contact",
  } = params;

  const sc = score !== undefined ? scoreColor(score) : "#6c5ce7";

  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;background:#f4f4f8;margin:0;padding:0;">
<div style="max-width:600px;margin:0 auto;padding:20px;">

<div style="background:#0a0a1a;border-radius:16px;padding:40px;text-align:center;color:#fff;">
  <div style="font-size:12px;color:#a29bfe;text-transform:uppercase;letter-spacing:2px;margin-bottom:16px;">${toolLabel}</div>
  <h1 style="font-size:28px;margin:0 0 8px;">${isPdf ? "Votre rapport est pret !" : "Votre analyse est terminee"}</h1>
  ${domain ? `<p style="color:#8888aa;font-size:14px;margin:0;">Analyse de <strong style="color:#a29bfe;">${domain}</strong></p>` : ""}
</div>

<div style="background:#fff;border-radius:16px;padding:30px;margin-top:16px;text-align:center;">
  <p style="color:#666;font-size:14px;margin:0 0 20px;">Bonjour <strong>${lead.name}</strong>,</p>

  ${score !== undefined && grade ? `
  <div style="background:#f8f9fa;border-radius:12px;padding:24px;margin:20px 0;">
    <div style="font-size:48px;font-weight:900;color:${sc};line-height:1;">${score}/100</div>
    <div style="font-size:18px;color:#666;margin-top:4px;">Grade : <strong style="color:${sc};">${grade}</strong> — ${gradeLabel}</div>
  </div>
  ` : ""}

  ${warnings.length > 0 ? `
  <div style="background:#fff0f0;border-radius:12px;padding:16px;margin:16px 0;border-left:4px solid #ef4444;">
    <p style="color:#ef4444;font-weight:700;margin:0;font-size:14px;">${warnings.length} point(s) a ameliorer</p>
    ${warnings.slice(0, 3).map(w => `<p style="color:#888;font-size:12px;margin:4px 0 0;">• ${w}</p>`).join("")}
  </div>` : ""}

  ${highlights.length > 0 ? `
  <div style="background:#f0fff4;border-radius:12px;padding:16px;margin:16px 0;border-left:4px solid #22c55e;text-align:left;">
    <p style="color:#22c55e;font-weight:700;margin:0 0 8px;font-size:14px;">Points forts</p>
    ${highlights.slice(0, 3).map(h => `<p style="color:#666;font-size:12px;margin:4px 0;">\u2713 ${h}</p>`).join("")}
  </div>` : ""}

  ${isPdf
    ? `<p style="color:#888;font-size:13px;margin:20px 0;">Le rapport complet est en <strong>piece jointe</strong>.</p>`
    : `<p style="color:#888;font-size:13px;margin:20px 0;">Le rapport detaille n'a pas pu etre genere cette fois. Vous pouvez relancer l'analyse depuis notre site.</p>`}
</div>

<div style="background:#1a1040;border-radius:16px;padding:30px;margin-top:16px;text-align:center;color:#fff;">
  <h2 style="font-size:20px;margin:0 0 8px;">Besoin d'aide ?</h2>
  <p style="color:#8888aa;font-size:13px;margin:0 0 20px;">Notre equipe peut vous accompagner sur tous ces sujets.</p>
  <a href="${ctaUrl}" style="display:inline-block;background:#6c5ce7;color:#fff;padding:12px 28px;border-radius:10px;text-decoration:none;font-weight:700;font-size:14px;">${ctaText}</a>
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
