import type { SeoAuditResult, AuditIssue } from "./analyzer";

function scoreColor(score: number): string {
  if (score >= 80) return "#22c55e";
  if (score >= 60) return "#eab308";
  if (score >= 40) return "#f97316";
  return "#ef4444";
}

function scoreColorClass(score: number): string {
  if (score >= 80) return "pass";
  if (score >= 60) return "warn";
  return "fail";
}

function priorityLabel(p: AuditIssue["priority"]): string {
  if (p === "critical") return "CRITIQUE";
  if (p === "important") return "IMPORTANT";
  return "RECOMMANDE";
}

function priorityColor(p: AuditIssue["priority"]): string {
  if (p === "critical") return "#ef4444";
  if (p === "important") return "#f97316";
  return "#eab308";
}

function statusBadge(ok: boolean, label?: string): string {
  if (ok) return `<span class="badge pass">\u2713 ${label || "OK"}</span>`;
  return `<span class="badge fail">\u2717 ${label || "Probleme"}</span>`;
}

function checkRow(name: string, ok: boolean, detail: string): string {
  return `<tr><td>${name}</td><td>${statusBadge(ok)}</td><td>${detail}</td></tr>`;
}

function dashOffset(score: number): number {
  const circumference = 2 * Math.PI * 90; // ~565
  return circumference - (score / 100) * circumference;
}

export function generateReportHtml(audit: SeoAuditResult): string {
  const { scores, grade, gradeLabel, issues, strengths, homepage, robotsTxt, sitemap, domain } = audit;
  const date = new Date(audit.fetchedAt).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" });
  const detectedSchemas = homepage.jsonLd.filter(j => j.detected);

  const categories = [
    { name: "SEO Technique", score: scores.technique, desc: "HTTPS, robots.txt, sitemap, canonicals" },
    { name: "SEO On-Page", score: scores.onPage, desc: "Titles, metas, headings, images alt" },
    { name: "Schema / Structured Data", score: scores.schema, desc: "JSON-LD, Organization, FAQ, Service" },
    { name: "Mobile & UX", score: scores.mobile, desc: "Viewport, responsive, frameworks" },
    { name: "Contenu & E-E-A-T", score: scores.contenu, desc: "Experience, Expertise, Autorite, Fiabilite" },
    { name: "AI Search / GEO", score: scores.geo, desc: "Visibilite ChatGPT, Perplexity, Gemini" },
    { name: "Performance", score: scores.performance, desc: "Vitesse, compression, optimisation assets" },
    { name: "Securite & Accessibilite", score: scores.securite, desc: "HTTPS, lang, headers, ARIA" },
  ];

  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Audit SEO — ${domain}</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
:root{--bg:#0a0a1a;--card:#12122a;--card2:#1a1a3a;--border:#2a2a4a;--text:#e8e8f0;--text2:#8888aa;--text3:#5a5a7a;--accent:#6c5ce7;--accent2:#a29bfe;--green:#22c55e;--yellow:#eab308;--orange:#f97316;--red:#ef4444;--blue:#4da6ff}
body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--text);line-height:1.7;font-size:14px}
.container{max-width:1050px;margin:0 auto;padding:40px 28px}
.cover{text-align:center;padding:70px 40px;background:linear-gradient(135deg,#0a0a1a,#1a1040,#0a0a1a);border-bottom:2px solid var(--accent);margin-bottom:50px;position:relative}
.cover-badge{display:inline-block;background:var(--accent);color:#fff;padding:5px 18px;border-radius:50px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:24px}
.cover h1{font-size:38px;font-weight:900;margin-bottom:8px;letter-spacing:-1px}
.cover h1 span{background:linear-gradient(135deg,var(--accent2),#e056a0);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.cover .domain{font-size:22px;color:var(--accent2);font-weight:600;margin-bottom:6px}
.cover .date{color:var(--text2);font-size:13px}
.cover .agency{margin-top:35px;padding-top:25px;border-top:1px solid var(--border);color:var(--text3);font-size:12px}
.cover .agency strong{color:var(--text2)}
.cover .agency a{color:var(--accent2);text-decoration:none}
h2{font-size:24px;font-weight:800;margin:50px 0 22px;padding-bottom:12px;border-bottom:2px solid var(--border)}
.sn{display:inline-block;background:var(--accent);color:#fff;width:32px;height:32px;line-height:32px;text-align:center;border-radius:9px;font-weight:700;font-size:15px;margin-right:12px;vertical-align:middle}
h3{font-size:18px;font-weight:700;margin:28px 0 12px;color:var(--accent2)}
.score-hero{display:flex;align-items:center;justify-content:center;gap:40px;padding:45px;background:var(--card);border:1px solid var(--border);border-radius:18px;margin:24px 0 40px}
.score-circle{position:relative;width:180px;height:180px}
.score-circle svg{transform:rotate(-90deg)}
.sc-bg{fill:none;stroke:var(--border);stroke-width:10}
.sc-fill{fill:none;stroke-width:10;stroke-linecap:round;stroke-dasharray:565}
.score-txt{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center}
.score-num{font-size:52px;font-weight:900;line-height:1}
.score-lbl{font-size:13px;color:var(--text2);margin-top:3px}
.grade-letter{font-size:72px;font-weight:900;line-height:1}
.grade-text{font-size:16px;color:var(--text2);font-weight:500}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:24px 0}
.score-item{background:var(--card);border:1px solid var(--border);border-radius:13px;padding:18px 20px;display:flex;align-items:center;gap:14px}
.si-val{font-size:28px;font-weight:800;min-width:52px}
.si-info{flex:1}.si-info h4{margin:0;font-size:14px;font-weight:600}.si-info p{margin:0;font-size:11px;color:var(--text2)}
.bar{width:100%;height:5px;background:var(--border);border-radius:3px;margin-top:6px;overflow:hidden}
.bar-fill{height:100%;border-radius:3px}
.box{background:var(--card);border:1px solid var(--border);border-radius:13px;padding:22px}
.box.good{border-left:4px solid var(--green)}.box.bad{border-left:4px solid var(--red)}
.box h4{margin:0 0 14px;font-size:15px}
.box ul{list-style:none;padding:0}.box li{padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.04);font-size:13px;display:flex;align-items:flex-start;gap:7px}
.box li:last-child{border-bottom:none}
.card{background:var(--card);border:1px solid var(--border);border-radius:15px;padding:26px;margin:20px 0}
.card-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;padding-bottom:14px;border-bottom:1px solid var(--border)}
.card-head h3{margin:0;font-size:18px;color:var(--text)}
.card-score{font-size:26px;font-weight:800}
table{width:100%;border-collapse:collapse;margin:14px 0}
th{text-align:left;font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--text3);padding:9px 12px;border-bottom:1px solid var(--border);font-weight:600}
td{padding:10px 12px;border-bottom:1px solid rgba(255,255,255,0.03);font-size:13px;vertical-align:top}
tr:last-child td{border-bottom:none}
.badge{display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:18px;font-size:11px;font-weight:600;white-space:nowrap}
.badge.pass{background:rgba(34,197,94,0.1);color:var(--green)}
.badge.warn{background:rgba(234,179,8,0.1);color:var(--yellow)}
.badge.fail{background:rgba(239,68,68,0.1);color:var(--red)}
.badge.info{background:rgba(77,166,255,0.1);color:var(--blue)}
.mustdo{background:var(--card);border:1px solid var(--border);border-radius:13px;padding:22px;margin:14px 0;position:relative;overflow:hidden}
.mustdo::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px}
.mustdo.cr::before{background:var(--red)}.mustdo.im::before{background:var(--orange)}.mustdo.re::before{background:var(--yellow)}
.mustdo-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}
.mustdo-title{font-weight:700;font-size:15px}
.mustdo-pri{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;padding:3px 10px;border-radius:18px}
.pri-cr{background:rgba(239,68,68,0.1);color:var(--red)}.pri-im{background:rgba(249,115,22,0.1);color:var(--orange)}.pri-re{background:rgba(234,179,8,0.1);color:var(--yellow)}
.mustdo-why{font-size:12px;color:var(--text2);margin-bottom:8px;padding:8px 12px;background:rgba(255,255,255,0.02);border-radius:7px;border-left:2px solid var(--text3)}
.mustdo-fix{font-size:12px;padding:10px 12px;background:var(--card2);border-radius:7px;border:1px solid var(--border)}
.mustdo-fix strong{color:var(--green)}
.timeline{position:relative;padding-left:28px;margin:24px 0}
.timeline::before{content:'';position:absolute;left:7px;top:0;bottom:0;width:2px;background:var(--border)}
.tl-item{position:relative;margin-bottom:24px;padding:18px 20px;background:var(--card);border:1px solid var(--border);border-radius:11px}
.tl-item::before{content:'';position:absolute;left:-24px;top:22px;width:12px;height:12px;border-radius:50%;background:var(--accent);border:3px solid var(--bg)}
.tl-item h4{margin:0 0 6px;color:var(--accent2);font-size:14px}.tl-item p{font-size:13px;color:var(--text2);margin:0}
.tl-item ul{margin:6px 0 0;padding-left:16px;font-size:13px;color:var(--text2)}.tl-item li{margin-bottom:3px}
.cta{background:linear-gradient(135deg,#1a1040,#2a1060);border:1px solid var(--accent);border-radius:18px;padding:45px;text-align:center;margin:50px 0 35px}
.cta h2{border:none;margin:0 0 10px;padding:0;font-size:26px;color:#fff}
.cta p{color:var(--text2);font-size:15px;margin-bottom:25px;max-width:550px;margin-left:auto;margin-right:auto}
.cta-btns{display:flex;justify-content:center;gap:14px;flex-wrap:wrap}
.btn{display:inline-block;padding:13px 28px;border-radius:11px;font-weight:700;font-size:14px;text-decoration:none}
.btn-pri{background:var(--accent);color:#fff}.btn-sec{background:transparent;color:var(--accent2);border:1px solid var(--accent)}
.cta-info{margin-top:20px;font-size:12px;color:var(--text3)}
.cta-info a{color:var(--accent2);text-decoration:none}
.gloss-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:18px 0}
.gloss-item{padding:12px 16px;background:var(--card);border:1px solid var(--border);border-radius:9px}
.gloss-item strong{color:var(--accent2);font-size:13px}
.gloss-item p{font-size:11px;color:var(--text2);margin:3px 0 0}
.footer{text-align:center;padding:35px 0 18px;border-top:1px solid var(--border);margin-top:50px;color:var(--text3);font-size:11px}
.footer a{color:var(--accent2);text-decoration:none}
@media print{
  body{background:#fff;color:#1a1a2e;font-size:10px}
  .container{padding:15px}
  .cover{background:#fff;border-bottom-color:#6c5ce7;padding:30px 15px}
  .cover h1,.grade-letter,.score-num{color:#6c5ce7!important;-webkit-text-fill-color:#6c5ce7!important}
  .score-hero,.card,.box,.mustdo,.tl-item,.gloss-item{background:#f8f9fa;border-color:#dee2e6}
  .cta{background:#f0f0ff}
  h2{border-bottom-color:#dee2e6}
  td{border-bottom-color:#eee}
  .bar{background:#ddd}
  @page{margin:1.2cm;size:A4}
}
</style>
</head>
<body>
<div class="container">

<!-- COVER -->
<div class="cover">
<div class="cover-badge">Audit SEO Complet</div>
<h1>Rapport d'Audit <span>SEO</span></h1>
<div class="domain">${domain}</div>
<div class="date">${date} — 8 categories &bull; 60+ points de controle</div>
<div class="agency">
Audit realise par <strong>ConvertiLab</strong> — Agence Web Paris & Ile-de-France<br>
<a href="https://convertilab.com">convertilab.com</a> &bull; contact@convertilab.com &bull; +33 6 16 47 72 45
</div>
</div>

<!-- 1. RESUME -->
<h2><span class="sn">1</span> Resume Executif</h2>

<div class="score-hero">
<div class="score-circle">
<svg width="180" height="180" viewBox="0 0 200 200">
<circle class="sc-bg" cx="100" cy="100" r="90"/>
<circle class="sc-fill" cx="100" cy="100" r="90" style="stroke:${scoreColor(scores.global)};stroke-dashoffset:${dashOffset(scores.global)}"/>
</svg>
<div class="score-txt">
<div class="score-num" style="color:${scoreColor(scores.global)}">${scores.global}</div>
<div class="score-lbl">sur 100</div>
</div>
</div>
<div style="text-align:center">
<div class="grade-letter" style="color:${scoreColor(scores.global)}">${grade}</div>
<div class="grade-text">${gradeLabel}</div>
</div>
</div>

<!-- SCORE GRID -->
<div class="grid2">
${categories.map(c => `
<div class="score-item">
<div class="si-val" style="color:${scoreColor(c.score)}">${c.score}</div>
<div class="si-info">
<h4>${c.name}</h4>
<p>${c.desc}</p>
<div class="bar"><div class="bar-fill" style="width:${c.score}%;background:${scoreColor(c.score)}"></div></div>
</div>
</div>`).join("")}
</div>

<!-- POINTS FORTS / FAIBLES -->
<div class="grid2">
<div class="box good">
<h4>&#9679; Points Forts</h4>
<ul>
${strengths.slice(0, 6).map(s => `<li><span style="color:var(--green);">\u2713</span> ${s}</li>`).join("")}
</ul>
</div>
<div class="box bad">
<h4>&#9679; Points a Corriger</h4>
<ul>
${issues.slice(0, 6).map(i => `<li><span style="color:var(--red);">\u2717</span> ${i.title}</li>`).join("")}
</ul>
</div>
</div>

<!-- 2. MUST-DO -->
<h2><span class="sn">2</span> Must-Do : Actions Prioritaires</h2>
<p style="color:var(--text2);margin-bottom:20px;font-size:13px;">Classees par impact. Commencez par le haut pour un maximum de resultats.</p>

${issues.slice(0, 8).map((issue, i) => {
  const cls = issue.priority === "critical" ? "cr" : issue.priority === "important" ? "im" : "re";
  const priCls = `pri-${cls}`;
  return `
<div class="mustdo ${cls}">
<div class="mustdo-head">
<div class="mustdo-title">${i + 1}. ${issue.title}</div>
<span class="mustdo-pri ${priCls}">${priorityLabel(issue.priority)}</span>
</div>
<div class="mustdo-why"><strong>Pourquoi :</strong> ${issue.description}</div>
<div class="mustdo-fix"><strong>Comment corriger :</strong> ${issue.fix}</div>
</div>`;
}).join("")}

<!-- 3. DETAIL PAR CATEGORIE -->
<h2><span class="sn">3</span> Analyse Detaillee</h2>

<!-- Technique -->
<div class="card">
<div class="card-head"><h3>3.1 — SEO Technique</h3><div class="card-score" style="color:${scoreColor(scores.technique)}">${scores.technique}/100</div></div>
<table>
<thead><tr><th>Point</th><th>Statut</th><th>Detail</th></tr></thead>
<tbody>
${checkRow("HTTPS", audit.url.startsWith("https"), audit.url.startsWith("https") ? "Certificat SSL actif" : "Le site n'est pas en HTTPS !")}
${checkRow("robots.txt", robotsTxt.exists, robotsTxt.exists ? `Present — ${robotsTxt.blockedPaths.length} chemins bloques` : "Fichier absent")}
${checkRow("Sitemap XML", sitemap.exists, sitemap.exists ? `${sitemap.urlCount} URLs indexees` : "Fichier absent")}
${checkRow("Canonical", !!homepage.canonical, homepage.canonical ? `<code>${homepage.canonical}</code>` : "Balise manquante")}
${checkRow("URLs propres", !audit.url.includes("?"), "Structure logique sans parametres inutiles")}
</tbody>
</table>
</div>

<!-- On-Page -->
<div class="card">
<div class="card-head"><h3>3.2 — SEO On-Page</h3><div class="card-score" style="color:${scoreColor(scores.onPage)}">${scores.onPage}/100</div></div>
<table>
<thead><tr><th>Point</th><th>Statut</th><th>Detail</th></tr></thead>
<tbody>
${checkRow("Title", !!homepage.title, homepage.title ? `"${homepage.title}" (${homepage.titleLength} car.)` : "Balise title manquante !")}
${checkRow("Meta description", !!homepage.metaDescription, homepage.metaDescription ? `${homepage.metaDescriptionLength} caracteres` : "Manquante")}
${checkRow("H1", homepage.h1.length === 1, homepage.h1.length === 0 ? "Aucun H1 detecte" : homepage.h1.length === 1 ? `"${homepage.h1[0].substring(0, 60)}..."` : `${homepage.h1.length} H1 detectes (1 seul recommande)`)}
${checkRow("Images alt", homepage.imagesWithoutAlt === 0, homepage.imagesWithoutAlt > 0 ? `${homepage.imagesWithoutAlt}/${homepage.totalImages} images sans alt` : `${homepage.totalImages} images — toutes avec alt`)}
${checkRow("Liens internes", homepage.internalLinks >= 3, `${homepage.internalLinks} liens internes detectes`)}
${checkRow("Open Graph", !!homepage.ogTags["og:title"], Object.keys(homepage.ogTags).length > 0 ? `${Object.keys(homepage.ogTags).length} balises OG` : "Balises manquantes")}
${checkRow("Twitter Card", !!homepage.twitterCard["twitter:card"], homepage.twitterCard["twitter:card"] || "Non configure")}
</tbody>
</table>
</div>

<!-- Schema -->
<div class="card">
<div class="card-head"><h3>3.3 — Schema / Structured Data</h3><div class="card-score" style="color:${scoreColor(scores.schema)}">${scores.schema}/100</div></div>
<table>
<thead><tr><th>Type Schema</th><th>Statut</th></tr></thead>
<tbody>
${homepage.jsonLd.map(j => `<tr><td>${j.type}</td><td>${j.detected ? '<span class="badge pass">\u2713 Detecte</span>' : '<span class="badge fail">\u2717 Absent</span>'}</td></tr>`).join("")}
</tbody>
</table>
<p style="margin-top:12px;font-size:11px;color:var(--text3)"><em>Note : Le schema injecte via JavaScript cote client n'est pas detecte par cette analyse.</em></p>
</div>

<!-- Mobile -->
<div class="card">
<div class="card-head"><h3>3.4 — Mobile & UX</h3><div class="card-score" style="color:${scoreColor(scores.mobile)}">${scores.mobile}/100</div></div>
<table>
<thead><tr><th>Point</th><th>Statut</th><th>Detail</th></tr></thead>
<tbody>
${checkRow("Viewport", homepage.viewport, homepage.viewport ? "width=device-width, initial-scale=1" : "Balise viewport manquante !")}
${checkRow("CSS Framework", homepage.cssFramework !== "Inconnu", homepage.cssFramework)}
${checkRow("JS Framework", homepage.jsFramework !== "Inconnu", homepage.jsFramework)}
${checkRow("Images WebP", homepage.hasWebpImages, homepage.hasWebpImages ? "Format WebP detecte" : "Pas de WebP detecte")}
</tbody>
</table>
</div>

<!-- Contenu -->
<div class="card">
<div class="card-head"><h3>3.5 — Contenu & E-E-A-T</h3><div class="card-score" style="color:${scoreColor(scores.contenu)}">${scores.contenu}/100</div></div>
<table>
<thead><tr><th>Point</th><th>Statut</th><th>Detail</th></tr></thead>
<tbody>
${checkRow("Volume de contenu", homepage.wordCount >= 300, `${homepage.wordCount} mots sur la page d'accueil`)}
${checkRow("Hierarchie titres", homepage.h2.length > 0, `${homepage.h2.length} H2 et ${homepage.h3.length} H3 detectes`)}
${checkRow("Schema Person/Author", !!homepage.jsonLd.find(j => j.type === "Person")?.detected, homepage.jsonLd.find(j => j.type === "Person")?.detected ? "Auteur identifie en schema" : "Pas de schema auteur")}
${checkRow("Langue declaree", !!homepage.lang, homepage.lang ? `lang="${homepage.lang}"` : "Attribut lang manquant")}
</tbody>
</table>
</div>

<!-- GEO -->
<div class="card">
<div class="card-head"><h3>3.6 — AI Search / GEO</h3><div class="card-score" style="color:${scoreColor(scores.geo)}">${scores.geo}/100</div></div>
<p style="color:var(--text2);font-size:12px;margin-bottom:16px">Optimisation pour etre cite par ChatGPT, Perplexity, Gemini, Claude et Copilot.</p>
<table>
<thead><tr><th>Bot IA</th><th>Statut</th></tr></thead>
<tbody>
<tr><td>GPTBot (ChatGPT)</td><td><span class="badge ${robotsTxt.aiBots.gptbot === "allowed" ? "pass" : robotsTxt.aiBots.gptbot === "blocked" ? "fail" : "warn"}">${robotsTxt.aiBots.gptbot === "allowed" ? "\u2713 Autorise" : robotsTxt.aiBots.gptbot === "blocked" ? "\u2717 Bloque" : "\u26A0 Non mentionne"}</span></td></tr>
<tr><td>ClaudeBot (Anthropic)</td><td><span class="badge ${robotsTxt.aiBots.claudebot === "allowed" ? "pass" : robotsTxt.aiBots.claudebot === "blocked" ? "fail" : "warn"}">${robotsTxt.aiBots.claudebot === "allowed" ? "\u2713 Autorise" : robotsTxt.aiBots.claudebot === "blocked" ? "\u2717 Bloque" : "\u26A0 Non mentionne"}</span></td></tr>
<tr><td>PerplexityBot</td><td><span class="badge ${robotsTxt.aiBots.perplexitybot === "allowed" ? "pass" : robotsTxt.aiBots.perplexitybot === "blocked" ? "fail" : "warn"}">${robotsTxt.aiBots.perplexitybot === "allowed" ? "\u2713 Autorise" : robotsTxt.aiBots.perplexitybot === "blocked" ? "\u2717 Bloque" : "\u26A0 Non mentionne"}</span></td></tr>
<tr><td>Google-Extended (Gemini)</td><td><span class="badge ${robotsTxt.aiBots.googleExtended === "allowed" ? "pass" : robotsTxt.aiBots.googleExtended === "blocked" ? "fail" : "warn"}">${robotsTxt.aiBots.googleExtended === "allowed" ? "\u2713 Autorise" : robotsTxt.aiBots.googleExtended === "blocked" ? "\u2717 Bloque" : "\u26A0 Non mentionne"}</span></td></tr>
</tbody>
</table>
<h4 style="margin-top:18px;font-size:14px;color:var(--text)">Methodes Princeton (GEO)</h4>
<table>
<thead><tr><th>Methode</th><th>Impact</th><th>Statut</th></tr></thead>
<tbody>
<tr><td>FAQPage schema</td><td>+40% visibilite IA</td><td>${homepage.jsonLd.find(j => j.type === "FAQPage")?.detected ? '<span class="badge pass">\u2713 Present</span>' : '<span class="badge fail">\u2717 Absent</span>'}</td></tr>
<tr><td>Ton autoritaire</td><td>+25% visibilite IA</td><td><span class="badge info">A verifier manuellement</span></td></tr>
<tr><td>Clarte / Simplicite</td><td>+20% visibilite IA</td><td><span class="badge info">A verifier manuellement</span></td></tr>
<tr><td>Termes techniques</td><td>+18% visibilite IA</td><td><span class="badge info">A verifier manuellement</span></td></tr>
</tbody>
</table>
</div>

<!-- Performance -->
<div class="card">
<div class="card-head"><h3>3.7 — Performance</h3><div class="card-score" style="color:${scoreColor(scores.performance)}">${scores.performance}/100</div></div>
<table>
<thead><tr><th>Point</th><th>Statut</th><th>Detail</th></tr></thead>
<tbody>
${checkRow("Temps de reponse", homepage.responseTime < 1500, `${(homepage.responseTime / 1000).toFixed(1)}s (ideal : < 0.6s)`)}
${checkRow("Preconnect/Prefetch", homepage.hasPreconnect || homepage.hasPrefetch, homepage.hasPreconnect ? "Preconnect detecte" : "Aucun preconnect")}
${checkRow("Font preload", homepage.fontPreload, homepage.fontPreload ? "Fonts preloaded en WOFF2" : "Pas de preload fonts")}
${checkRow("Scripts optimises", homepage.scriptsBlocking <= 2, `${homepage.scriptsAsync} async, ${homepage.scriptsDefer} defer, ${homepage.scriptsBlocking} bloquants`)}
${checkRow("Images WebP", homepage.hasWebpImages, homepage.hasWebpImages ? "Format WebP detecte" : "Pas de WebP")}
</tbody>
</table>
</div>

<!-- Securite -->
<div class="card">
<div class="card-head"><h3>3.8 — Securite & Accessibilite</h3><div class="card-score" style="color:${scoreColor(scores.securite)}">${scores.securite}/100</div></div>
<table>
<thead><tr><th>Point</th><th>Statut</th><th>Detail</th></tr></thead>
<tbody>
${checkRow("HTTPS", audit.url.startsWith("https"), audit.url.startsWith("https") ? "Certificat SSL valide" : "Non securise !")}
${checkRow("Attribut lang", !!homepage.lang, homepage.lang ? `lang="${homepage.lang}"` : "Manquant")}
${checkRow("Images alt (a11y)", homepage.imagesWithoutAlt === 0, homepage.imagesWithoutAlt > 0 ? `${homepage.imagesWithoutAlt} images sans alt` : "Toutes les images ont un alt")}
</tbody>
</table>
</div>

<!-- 4. PLAN D'ACTION -->
<h2><span class="sn">4</span> Plan d'Action</h2>
<div class="timeline">
<div class="tl-item">
<h4>Semaine 1-2 : Corrections critiques</h4>
<ul>
${issues.filter(i => i.priority === "critical").slice(0, 4).map(i => `<li>${i.title}</li>`).join("")}
</ul>
</div>
<div class="tl-item">
<h4>Semaine 3-4 : Optimisations importantes</h4>
<ul>
${issues.filter(i => i.priority === "important").slice(0, 4).map(i => `<li>${i.title}</li>`).join("")}
${issues.filter(i => i.priority === "important").length === 0 ? "<li>Enrichir le contenu et les signaux E-E-A-T</li>" : ""}
</ul>
</div>
<div class="tl-item">
<h4>Mois 2+ : Croissance continue</h4>
<ul>
${issues.filter(i => i.priority === "recommended").slice(0, 3).map(i => `<li>${i.title}</li>`).join("")}
<li>Monitorer la visibilite IA avec Otterly.ai ou Peec AI</li>
<li>Analyser les Core Web Vitals via Google Search Console</li>
</ul>
</div>
</div>

<!-- 5. GLOSSAIRE -->
<h2><span class="sn">5</span> Glossaire SEO</h2>
<div class="gloss-grid">
<div class="gloss-item"><strong>SEO</strong><p>Optimiser un site pour apparaitre en haut des resultats Google.</p></div>
<div class="gloss-item"><strong>GEO</strong><p>Optimiser pour etre cite par les IA (ChatGPT, Perplexity, Gemini).</p></div>
<div class="gloss-item"><strong>E-E-A-T</strong><p>Experience, Expertise, Autorite, Trust — les criteres de qualite de Google.</p></div>
<div class="gloss-item"><strong>Schema JSON-LD</strong><p>Code invisible qui aide Google a comprendre le contenu (FAQ, avis, etc.).</p></div>
<div class="gloss-item"><strong>Meta description</strong><p>Texte sous le titre dans Google. Donne envie de cliquer.</p></div>
<div class="gloss-item"><strong>Canonical</strong><p>Dit a Google "cette page est l'originale" pour eviter le contenu duplique.</p></div>
<div class="gloss-item"><strong>Sitemap XML</strong><p>Plan du site pour aider Google a trouver toutes les pages.</p></div>
<div class="gloss-item"><strong>robots.txt</strong><p>Fichier qui dit aux robots quelles pages visiter.</p></div>
<div class="gloss-item"><strong>Alt text (images)</strong><p>Texte invisible decrivant une image pour Google et les malvoyants.</p></div>
<div class="gloss-item"><strong>Core Web Vitals</strong><p>3 metriques Google mesurant vitesse, reactivite et stabilite.</p></div>
<div class="gloss-item"><strong>Backlink</strong><p>Lien depuis un autre site = "vote de confiance" pour Google.</p></div>
<div class="gloss-item"><strong>Rich Snippet</strong><p>Resultat Google enrichi (etoiles, FAQ, images) grace au schema.</p></div>
</div>

<!-- CTA -->
<div class="cta">
<h2>Besoin d'aide pour corriger tout ca ?</h2>
<p>L'equipe ConvertiLab peut prendre en charge l'ensemble des corrections et optimisations identifiees dans cet audit.</p>
<div class="cta-btns">
<a href="https://convertilab.com/contact" class="btn btn-pri">Prendre rendez-vous gratuit</a>
<a href="https://convertilab.com/services/seo" class="btn btn-sec">Nos services SEO</a>
</div>
<div class="cta-info">
<a href="tel:+33616477245">+33 6 16 47 72 45</a> &bull;
<a href="mailto:contact@convertilab.com">contact@convertilab.com</a> &bull;
<a href="https://convertilab.com">convertilab.com</a>
</div>
</div>

<!-- FOOTER -->
<div class="footer">
<p><strong>Audit SEO realise par ConvertiLab</strong><br>
Agence Web Paris & Ile-de-France<br>
<a href="https://convertilab.com">convertilab.com</a> &bull;
<a href="mailto:contact@convertilab.com">contact@convertilab.com</a></p>
<p style="margin-top:10px">Document genere le ${date} &bull; Ce rapport est confidentiel.</p>
</div>

</div>
</body>
</html>`;
}
