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
  // Adresse publique du rapport. La piece jointe ne suffit pas : selon la
  // messagerie elle passe inapercue, ce lien la double dans le texte.
  pdfUrl?: string;
  ctaText?: string;
  ctaUrl?: string;
}

export function buildToolEmailHtml(params: EmailParams): string {
  const {
    toolLabel, lead, domain, score, grade, gradeLabel,
    highlights = [], warnings = [], isPdf, pdfUrl,
    ctaText = "Prendre rendez-vous gratuit",
    ctaUrl = "https://www.convertilab.com/contact",
  } = params;

  const sc = score !== undefined ? scoreColor(score) : "#6c5ce7";

  /*
   * Habillage volontairement sobre.
   *
   * L'ancien gabarit ouvrait sur un bandeau noir de 40 px, affichait le score
   * en 48 px de couleur et finissait sur un bouton violet dans un second
   * bandeau : la signature visuelle d'une newsletter, que Gmail range en
   * Promotions. Mesuré le 11/09/2026 sur la séquence de relance, le passage à
   * un habillage de courrier ordinaire a fait passer 4 emails sur 9 à 9 sur 9
   * en boîte principale, à texte identique. Ici : fond blanc, pas de logo,
   * pas de bouton coloré, un lien hypertexte simple, une signature en texte.
   *
   * Ne pas « embellir » ce gabarit sans refaire le test d'arrivée en boîte.
   */
  const lignesAlerte = warnings.slice(0, 3).map(w => `<li style="margin:0 0 4px;">${w}</li>`).join("");
  const lignesForts = highlights.slice(0, 3).map(h => `<li style="margin:0 0 4px;">${h}</li>`).join("");

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#ffffff;">
<div style="max-width:600px;margin:0 auto;padding:24px 20px;font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.55;color:#222;">

<p style="margin:0 0 16px;">Bonjour,</p>

<p style="margin:0 0 16px;">${lead.name
    ? `Voici votre ${toolLabel.toLowerCase()} pour <strong>${lead.name}</strong>${domain ? ` (${domain})` : ""}.`
    : `Voici votre ${toolLabel.toLowerCase()}${domain ? ` pour ${domain}` : ""}.`}</p>

${score !== undefined && grade ? `<p style="margin:0 0 16px;">Résultat : <strong>${score}/100</strong>, note ${grade}${gradeLabel ? ` (${gradeLabel})` : ""}.</p>` : ""}

${warnings.length > 0 ? `<p style="margin:0 0 6px;">Les points à améliorer en priorité :</p>
<ul style="margin:0 0 16px;padding-left:20px;">${lignesAlerte}</ul>` : ""}

${highlights.length > 0 ? `<p style="margin:0 0 6px;">Ce qui est déjà en place :</p>
<ul style="margin:0 0 16px;padding-left:20px;">${lignesForts}</ul>` : ""}

${isPdf
    ? (pdfUrl
        ? `<p style="margin:0 0 16px;">Le rapport complet est en pièce jointe, et vous pouvez aussi l'ouvrir ici :<br>
<a href="${pdfUrl}" style="color:#4a3fc7;">${pdfUrl}</a></p>`
        : `<p style="margin:0 0 16px;">Le rapport complet est en pièce jointe de cet email.</p>`)
    : `<p style="margin:0 0 16px;">Le rapport détaillé n'a pas pu être généré cette fois. Vous pouvez relancer l'analyse depuis notre site.</p>`}

<p style="margin:0 0 16px;">Si vous voulez qu'on regarde ensemble par quoi commencer, répondez simplement à cet email, ou prenez 30 minutes ici : <a href="${ctaUrl}" style="color:#4a3fc7;">${ctaText.toLowerCase()}</a>.</p>

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
