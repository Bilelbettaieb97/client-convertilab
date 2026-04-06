import React from "react";
import { Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import type { SeoAuditResult } from "./analyzer";

const colors = {
  bg: "#0a0a1a",
  card: "#14142b",
  border: "#2a2a4a",
  text: "#e8e8f0",
  text2: "#8888aa",
  text3: "#5a5a7a",
  accent: "#6c5ce7",
  accent2: "#a29bfe",
  green: "#22c55e",
  yellow: "#eab308",
  orange: "#f97316",
  red: "#ef4444",
  white: "#ffffff",
};

function scoreColor(s: number) {
  if (s >= 80) return colors.green;
  if (s >= 60) return colors.yellow;
  if (s >= 40) return colors.orange;
  return colors.red;
}

const s = StyleSheet.create({
  page: { backgroundColor: colors.bg, padding: 40, fontFamily: "Helvetica", color: colors.text, fontSize: 10, lineHeight: 1.6 },
  // Cover
  coverBadge: { backgroundColor: colors.accent, color: colors.white, paddingVertical: 4, paddingHorizontal: 16, borderRadius: 20, fontSize: 8, fontWeight: "bold", letterSpacing: 2, textTransform: "uppercase" as const, alignSelf: "center", marginBottom: 20 },
  coverTitle: { fontSize: 32, fontWeight: "bold", textAlign: "center", marginBottom: 6 },
  coverDomain: { fontSize: 18, color: colors.accent2, textAlign: "center", fontWeight: "bold", marginBottom: 4 },
  coverDate: { fontSize: 10, color: colors.text2, textAlign: "center", marginBottom: 30 },
  coverAgency: { borderTopWidth: 1, borderTopColor: colors.border, paddingTop: 16, textAlign: "center", fontSize: 8, color: colors.text3 },
  // Section headers
  sectionHeader: { flexDirection: "row", alignItems: "center", marginTop: 28, marginBottom: 14, borderBottomWidth: 1, borderBottomColor: colors.border, paddingBottom: 8 },
  sectionNumber: { backgroundColor: colors.accent, color: colors.white, width: 22, height: 22, borderRadius: 6, textAlign: "center", lineHeight: 1, fontSize: 12, fontWeight: "bold", marginRight: 10, paddingTop: 4 },
  sectionTitle: { fontSize: 18, fontWeight: "bold" },
  // Score hero
  scoreHero: { flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 30, padding: 30, backgroundColor: colors.card, borderRadius: 14, borderWidth: 1, borderColor: colors.border, marginBottom: 20 },
  scoreNum: { fontSize: 48, fontWeight: "bold", textAlign: "center" },
  scoreSub: { fontSize: 10, color: colors.text2, textAlign: "center" },
  gradeText: { fontSize: 14, color: colors.text2, textAlign: "center" },
  // Score grid
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 16 },
  scoreCard: { width: "48%", flexDirection: "row", alignItems: "center", gap: 10, backgroundColor: colors.card, borderRadius: 10, borderWidth: 1, borderColor: colors.border, padding: 12 },
  scoreCardVal: { fontSize: 22, fontWeight: "bold", width: 40 },
  scoreCardLabel: { fontSize: 9, fontWeight: "bold" },
  scoreCardDesc: { fontSize: 7, color: colors.text2 },
  scoreBar: { height: 4, backgroundColor: colors.border, borderRadius: 2, marginTop: 4, width: "100%" },
  scoreBarFill: { height: 4, borderRadius: 2 },
  // Boxes
  boxRow: { flexDirection: "row", gap: 10, marginBottom: 16 },
  box: { flex: 1, backgroundColor: colors.card, borderRadius: 10, borderWidth: 1, borderColor: colors.border, padding: 14 },
  boxGood: { borderLeftWidth: 3, borderLeftColor: colors.green },
  boxBad: { borderLeftWidth: 3, borderLeftColor: colors.red },
  boxTitle: { fontSize: 11, fontWeight: "bold", marginBottom: 8 },
  boxItem: { fontSize: 8, marginBottom: 3, color: colors.text2 },
  // Must-do
  mustdo: { backgroundColor: colors.card, borderRadius: 10, borderWidth: 1, borderColor: colors.border, padding: 14, marginBottom: 8, borderLeftWidth: 3 },
  mustdoHead: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 6 },
  mustdoTitle: { fontSize: 11, fontWeight: "bold", flex: 1 },
  mustdoPri: { fontSize: 7, fontWeight: "bold", paddingVertical: 2, paddingHorizontal: 8, borderRadius: 10, textTransform: "uppercase" as const, letterSpacing: 1 },
  mustdoWhy: { fontSize: 8, color: colors.text2, backgroundColor: "rgba(255,255,255,0.02)", padding: 8, borderRadius: 5, marginBottom: 6, borderLeftWidth: 2, borderLeftColor: colors.text3 },
  mustdoFix: { fontSize: 8, backgroundColor: colors.card, padding: 8, borderRadius: 5, borderWidth: 1, borderColor: colors.border },
  // Table
  tableHead: { flexDirection: "row", borderBottomWidth: 1, borderBottomColor: colors.border, paddingBottom: 6, marginBottom: 4 },
  tableTh: { fontSize: 7, fontWeight: "bold", color: colors.text3, textTransform: "uppercase" as const, letterSpacing: 1 },
  tableRow: { flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "rgba(255,255,255,0.03)", paddingVertical: 6 },
  tableTd: { fontSize: 8 },
  badge: { fontSize: 7, fontWeight: "bold", paddingVertical: 2, paddingHorizontal: 6, borderRadius: 8 },
  badgePass: { backgroundColor: "rgba(34,197,94,0.15)", color: colors.green },
  badgeFail: { backgroundColor: "rgba(239,68,68,0.15)", color: colors.red },
  badgeWarn: { backgroundColor: "rgba(234,179,8,0.15)", color: colors.yellow },
  // Card
  card: { backgroundColor: colors.card, borderRadius: 12, borderWidth: 1, borderColor: colors.border, padding: 18, marginBottom: 12 },
  cardHead: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12, borderBottomWidth: 1, borderBottomColor: colors.border, paddingBottom: 10 },
  cardTitle: { fontSize: 14, fontWeight: "bold" },
  cardScore: { fontSize: 20, fontWeight: "bold" },
  // Timeline
  tlItem: { backgroundColor: colors.card, borderRadius: 10, borderWidth: 1, borderColor: colors.border, padding: 14, marginBottom: 8, marginLeft: 12, borderLeftWidth: 3, borderLeftColor: colors.accent },
  tlTitle: { fontSize: 11, fontWeight: "bold", color: colors.accent2, marginBottom: 4 },
  tlText: { fontSize: 8, color: colors.text2 },
  // CTA
  cta: { backgroundColor: "#1a1040", borderRadius: 14, borderWidth: 1, borderColor: colors.accent, padding: 30, textAlign: "center", marginTop: 20, marginBottom: 20, alignItems: "center" },
  ctaTitle: { fontSize: 18, fontWeight: "bold", color: colors.white, marginBottom: 8, textAlign: "center" },
  ctaText: { fontSize: 10, color: colors.text2, marginBottom: 16, textAlign: "center", maxWidth: 400 },
  ctaBtn: { backgroundColor: colors.accent, color: colors.white, paddingVertical: 10, paddingHorizontal: 24, borderRadius: 10, fontSize: 11, fontWeight: "bold", textDecoration: "none" },
  ctaInfo: { fontSize: 8, color: colors.text3, marginTop: 14, textAlign: "center" },
  // Footer
  footer: { textAlign: "center", borderTopWidth: 1, borderTopColor: colors.border, paddingTop: 16, marginTop: 24, fontSize: 7, color: colors.text3 },
  // Glossary
  glossGrid: { flexDirection: "row", flexWrap: "wrap", gap: 6, marginBottom: 16 },
  glossItem: { width: "48%", backgroundColor: colors.card, borderRadius: 8, borderWidth: 1, borderColor: colors.border, padding: 8 },
  glossTerm: { fontSize: 9, fontWeight: "bold", color: colors.accent2 },
  glossDef: { fontSize: 7, color: colors.text2, marginTop: 2 },
});

function Badge({ ok, label }: { ok: boolean; label?: string }) {
  return (
    <Text style={[s.badge, ok ? s.badgePass : s.badgeFail]}>
      {ok ? `✓ ${label || "OK"}` : `✗ ${label || "Probleme"}`}
    </Text>
  );
}

function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <View style={s.sectionHeader}>
      <Text style={s.sectionNumber}>{num}</Text>
      <Text style={s.sectionTitle}>{title}</Text>
    </View>
  );
}

export function SeoAuditPdf({ audit }: { audit: SeoAuditResult }) {
  const { scores, grade, gradeLabel, issues, strengths, homepage, robotsTxt, sitemap, domain } = audit;
  const date = new Date(audit.fetchedAt).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" });

  const categories = [
    { name: "SEO Technique", score: scores.technique, desc: "HTTPS, robots, sitemap" },
    { name: "SEO On-Page", score: scores.onPage, desc: "Title, meta, headings" },
    { name: "Schema", score: scores.schema, desc: "JSON-LD, structured data" },
    { name: "Mobile & UX", score: scores.mobile, desc: "Viewport, responsive" },
    { name: "Contenu & E-E-A-T", score: scores.contenu, desc: "Experience, expertise" },
    { name: "AI Search / GEO", score: scores.geo, desc: "ChatGPT, Perplexity" },
    { name: "Performance", score: scores.performance, desc: "Vitesse, optimisation" },
    { name: "Securite", score: scores.securite, desc: "HTTPS, lang, a11y" },
  ];

  const criticals = issues.filter(i => i.priority === "critical");
  const importants = issues.filter(i => i.priority === "important");
  const recommended = issues.filter(i => i.priority === "recommended");

  return (
    <Document>
      {/* PAGE 1: Cover + Scores */}
      <Page size="A4" style={s.page}>
        <View style={{ alignItems: "center", marginBottom: 30, marginTop: 20 }}>
          <Text style={s.coverBadge}>AUDIT SEO COMPLET</Text>
          <Text style={s.coverTitle}>Rapport d&apos;Audit SEO</Text>
          <Text style={s.coverDomain}>{domain}</Text>
          <Text style={s.coverDate}>{date} — 8 categories • 60+ points</Text>
        </View>

        <View style={s.scoreHero}>
          <View style={{ alignItems: "center" }}>
            <Text style={[s.scoreNum, { color: scoreColor(scores.global) }]}>{scores.global}</Text>
            <Text style={s.scoreSub}>sur 100</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={[s.scoreNum, { color: scoreColor(scores.global), fontSize: 42 }]}>{grade}</Text>
            <Text style={s.gradeText}>{gradeLabel}</Text>
          </View>
        </View>

        <View style={s.grid}>
          {categories.map(c => (
            <View key={c.name} style={s.scoreCard}>
              <Text style={[s.scoreCardVal, { color: scoreColor(c.score) }]}>{c.score}</Text>
              <View style={{ flex: 1 }}>
                <Text style={s.scoreCardLabel}>{c.name}</Text>
                <Text style={s.scoreCardDesc}>{c.desc}</Text>
                <View style={s.scoreBar}>
                  <View style={[s.scoreBarFill, { width: `${c.score}%`, backgroundColor: scoreColor(c.score) }]} />
                </View>
              </View>
            </View>
          ))}
        </View>

        <View style={s.boxRow}>
          <View style={[s.box, s.boxGood]}>
            <Text style={s.boxTitle}>Points Forts</Text>
            {strengths.slice(0, 5).map((st, i) => (
              <Text key={i} style={s.boxItem}>✓ {st}</Text>
            ))}
          </View>
          <View style={[s.box, s.boxBad]}>
            <Text style={s.boxTitle}>A Corriger</Text>
            {issues.slice(0, 5).map((is, i) => (
              <Text key={i} style={s.boxItem}>✗ {is.title}</Text>
            ))}
          </View>
        </View>

        <View style={s.coverAgency}>
          <Text>Audit realise par ConvertiLab — Agence Web Paris & Ile-de-France</Text>
          <Text>convertilab.com • contact@convertilab.com • +33 6 16 47 72 45</Text>
        </View>
      </Page>

      {/* PAGE 2: Must-Do */}
      <Page size="A4" style={s.page}>
        <SectionHeader num="2" title="Must-Do : Actions Prioritaires" />

        {issues.slice(0, 7).map((issue, i) => {
          const borderColor = issue.priority === "critical" ? colors.red : issue.priority === "important" ? colors.orange : colors.yellow;
          const priBg = issue.priority === "critical" ? "rgba(239,68,68,0.15)" : issue.priority === "important" ? "rgba(249,115,22,0.15)" : "rgba(234,179,8,0.15)";
          const priColor = issue.priority === "critical" ? colors.red : issue.priority === "important" ? colors.orange : colors.yellow;
          const priLabel = issue.priority === "critical" ? "CRITIQUE" : issue.priority === "important" ? "IMPORTANT" : "RECOMMANDE";

          return (
            <View key={i} style={[s.mustdo, { borderLeftColor: borderColor }]}>
              <View style={s.mustdoHead}>
                <Text style={s.mustdoTitle}>{i + 1}. {issue.title}</Text>
                <Text style={[s.mustdoPri, { backgroundColor: priBg, color: priColor }]}>{priLabel}</Text>
              </View>
              <View style={s.mustdoWhy}>
                <Text><Text style={{ fontWeight: "bold" }}>Pourquoi :</Text> {issue.description}</Text>
              </View>
              <View style={s.mustdoFix}>
                <Text><Text style={{ fontWeight: "bold", color: colors.green }}>Corriger :</Text> {issue.fix}</Text>
              </View>
            </View>
          );
        })}
      </Page>

      {/* PAGE 3: Detail */}
      <Page size="A4" style={s.page}>
        <SectionHeader num="3" title="Analyse Detaillee" />

        {/* Technique */}
        <View style={s.card}>
          <View style={s.cardHead}>
            <Text style={s.cardTitle}>SEO Technique</Text>
            <Text style={[s.cardScore, { color: scoreColor(scores.technique) }]}>{scores.technique}/100</Text>
          </View>
          <View style={s.tableHead}>
            <Text style={[s.tableTh, { width: "25%" }]}>Point</Text>
            <Text style={[s.tableTh, { width: "20%" }]}>Statut</Text>
            <Text style={[s.tableTh, { width: "55%" }]}>Detail</Text>
          </View>
          {[
            { name: "HTTPS", ok: audit.url.startsWith("https"), detail: audit.url.startsWith("https") ? "SSL actif" : "Non securise" },
            { name: "robots.txt", ok: robotsTxt.exists, detail: robotsTxt.exists ? `Present — ${robotsTxt.blockedPaths.length} chemins bloques` : "Absent" },
            { name: "Sitemap", ok: sitemap.exists, detail: sitemap.exists ? `${sitemap.urlCount} URLs` : "Absent" },
            { name: "Canonical", ok: !!homepage.canonical, detail: homepage.canonical || "Manquante" },
          ].map((row, i) => (
            <View key={i} style={s.tableRow}>
              <Text style={[s.tableTd, { width: "25%" }]}>{row.name}</Text>
              <View style={{ width: "20%" }}><Badge ok={row.ok} /></View>
              <Text style={[s.tableTd, { width: "55%", color: colors.text2 }]}>{row.detail}</Text>
            </View>
          ))}
        </View>

        {/* On-Page */}
        <View style={s.card}>
          <View style={s.cardHead}>
            <Text style={s.cardTitle}>SEO On-Page</Text>
            <Text style={[s.cardScore, { color: scoreColor(scores.onPage) }]}>{scores.onPage}/100</Text>
          </View>
          <View style={s.tableHead}>
            <Text style={[s.tableTh, { width: "25%" }]}>Point</Text>
            <Text style={[s.tableTh, { width: "20%" }]}>Statut</Text>
            <Text style={[s.tableTh, { width: "55%" }]}>Detail</Text>
          </View>
          {[
            { name: "Title", ok: !!homepage.title, detail: homepage.title ? `"${homepage.title.substring(0, 50)}..." (${homepage.titleLength} car.)` : "Manquant" },
            { name: "Meta desc.", ok: !!homepage.metaDescription, detail: homepage.metaDescription ? `${homepage.metaDescriptionLength} caracteres` : "Manquante" },
            { name: "H1", ok: homepage.h1.length === 1, detail: homepage.h1.length === 0 ? "Aucun H1" : homepage.h1.length === 1 ? `"${homepage.h1[0].substring(0, 45)}..."` : `${homepage.h1.length} H1 (1 seul recommande)` },
            { name: "Images alt", ok: homepage.imagesWithoutAlt === 0, detail: `${homepage.imagesWithoutAlt}/${homepage.totalImages} sans alt` },
            { name: "Liens internes", ok: homepage.internalLinks >= 3, detail: `${homepage.internalLinks} liens` },
            { name: "Open Graph", ok: !!homepage.ogTags["og:title"], detail: Object.keys(homepage.ogTags).length > 0 ? `${Object.keys(homepage.ogTags).length} balises` : "Absent" },
          ].map((row, i) => (
            <View key={i} style={s.tableRow}>
              <Text style={[s.tableTd, { width: "25%" }]}>{row.name}</Text>
              <View style={{ width: "20%" }}><Badge ok={row.ok} /></View>
              <Text style={[s.tableTd, { width: "55%", color: colors.text2 }]}>{row.detail}</Text>
            </View>
          ))}
        </View>

        {/* Schema */}
        <View style={s.card}>
          <View style={s.cardHead}>
            <Text style={s.cardTitle}>Schema / JSON-LD</Text>
            <Text style={[s.cardScore, { color: scoreColor(scores.schema) }]}>{scores.schema}/100</Text>
          </View>
          {homepage.jsonLd.map((j, i) => (
            <View key={i} style={[s.tableRow, { paddingVertical: 4 }]}>
              <Text style={[s.tableTd, { width: "40%" }]}>{j.type}</Text>
              <Badge ok={j.detected} label={j.detected ? "Detecte" : "Absent"} />
            </View>
          ))}
        </View>
      </Page>

      {/* PAGE 4: GEO + Performance + Plan */}
      <Page size="A4" style={s.page}>
        {/* AI/GEO */}
        <View style={s.card}>
          <View style={s.cardHead}>
            <Text style={s.cardTitle}>AI Search / GEO</Text>
            <Text style={[s.cardScore, { color: scoreColor(scores.geo) }]}>{scores.geo}/100</Text>
          </View>
          <Text style={{ fontSize: 8, color: colors.text2, marginBottom: 10 }}>Visibilite sur ChatGPT, Perplexity, Gemini, Claude, Copilot</Text>
          {[
            { name: "GPTBot (ChatGPT)", status: robotsTxt.aiBots.gptbot },
            { name: "ClaudeBot (Anthropic)", status: robotsTxt.aiBots.claudebot },
            { name: "PerplexityBot", status: robotsTxt.aiBots.perplexitybot },
            { name: "Google-Extended (Gemini)", status: robotsTxt.aiBots.googleExtended },
          ].map((bot, i) => (
            <View key={i} style={s.tableRow}>
              <Text style={[s.tableTd, { width: "50%" }]}>{bot.name}</Text>
              <Text style={[s.badge, bot.status === "allowed" ? s.badgePass : bot.status === "blocked" ? s.badgeFail : s.badgeWarn]}>
                {bot.status === "allowed" ? "✓ Autorise" : bot.status === "blocked" ? "✗ Bloque" : "⚠ Non mentionne"}
              </Text>
            </View>
          ))}
        </View>

        {/* Performance */}
        <View style={s.card}>
          <View style={s.cardHead}>
            <Text style={s.cardTitle}>Performance</Text>
            <Text style={[s.cardScore, { color: scoreColor(scores.performance) }]}>{scores.performance}/100</Text>
          </View>
          {[
            { name: "Temps de reponse", ok: homepage.responseTime < 1500, detail: `${(homepage.responseTime / 1000).toFixed(1)}s` },
            { name: "Preconnect", ok: homepage.hasPreconnect, detail: homepage.hasPreconnect ? "Detecte" : "Absent" },
            { name: "Images WebP", ok: homepage.hasWebpImages, detail: homepage.hasWebpImages ? "Oui" : "Non" },
            { name: "Framework", ok: homepage.jsFramework !== "Inconnu", detail: `${homepage.jsFramework} + ${homepage.cssFramework}` },
          ].map((row, i) => (
            <View key={i} style={s.tableRow}>
              <Text style={[s.tableTd, { width: "30%" }]}>{row.name}</Text>
              <View style={{ width: "20%" }}><Badge ok={row.ok} /></View>
              <Text style={[s.tableTd, { width: "50%", color: colors.text2 }]}>{row.detail}</Text>
            </View>
          ))}
        </View>

        {/* Plan d'action */}
        <SectionHeader num="4" title="Plan d'Action" />
        <View style={s.tlItem}>
          <Text style={s.tlTitle}>Semaine 1-2 : Corrections critiques</Text>
          {criticals.slice(0, 4).map((i, idx) => <Text key={idx} style={s.tlText}>• {i.title}</Text>)}
        </View>
        <View style={s.tlItem}>
          <Text style={s.tlTitle}>Semaine 3-4 : Optimisations importantes</Text>
          {importants.slice(0, 4).map((i, idx) => <Text key={idx} style={s.tlText}>• {i.title}</Text>)}
          {importants.length === 0 && <Text style={s.tlText}>• Enrichir le contenu et les signaux E-E-A-T</Text>}
        </View>
        <View style={s.tlItem}>
          <Text style={s.tlTitle}>Mois 2+ : Croissance continue</Text>
          {recommended.slice(0, 3).map((i, idx) => <Text key={idx} style={s.tlText}>• {i.title}</Text>)}
          <Text style={s.tlText}>• Monitorer la visibilite IA</Text>
        </View>
      </Page>

      {/* PAGE 5: Glossaire + CTA */}
      <Page size="A4" style={s.page}>
        <SectionHeader num="5" title="Glossaire SEO" />
        <View style={s.glossGrid}>
          {[
            { term: "SEO", def: "Optimiser pour apparaitre en haut de Google." },
            { term: "GEO", def: "Optimiser pour etre cite par les IA (ChatGPT, Perplexity)." },
            { term: "E-E-A-T", def: "Experience, Expertise, Autorite, Trust — criteres Google." },
            { term: "Schema JSON-LD", def: "Code invisible qui aide Google a comprendre le contenu." },
            { term: "Meta description", def: "Texte sous le titre dans Google, incite au clic." },
            { term: "Canonical", def: "Dit a Google quelle page est l'originale." },
            { term: "Sitemap XML", def: "Plan du site pour aider Google a tout indexer." },
            { term: "robots.txt", def: "Directives pour les robots (Google, ChatGPT, etc.)." },
            { term: "Alt text", def: "Texte invisible decrivant une image pour le SEO." },
            { term: "Core Web Vitals", def: "3 metriques Google : vitesse, reactivite, stabilite." },
            { term: "Backlink", def: "Lien externe = vote de confiance pour Google." },
            { term: "Rich Snippet", def: "Resultat Google enrichi grace au schema." },
          ].map((g, i) => (
            <View key={i} style={s.glossItem}>
              <Text style={s.glossTerm}>{g.term}</Text>
              <Text style={s.glossDef}>{g.def}</Text>
            </View>
          ))}
        </View>

        {/* CTA */}
        <View style={s.cta}>
          <Text style={s.ctaTitle}>Besoin d&apos;aide pour corriger tout ca ?</Text>
          <Text style={s.ctaText}>L&apos;equipe ConvertiLab peut prendre en charge toutes les corrections et optimisations identifiees dans cet audit.</Text>
          <Link src="https://convertilab.com/contact" style={s.ctaBtn}>
            Prendre rendez-vous gratuit
          </Link>
          <Text style={s.ctaInfo}>convertilab.com • 06 16 47 72 45 • contact@convertilab.com</Text>
        </View>

        {/* Footer */}
        <View style={s.footer}>
          <Text style={{ fontWeight: "bold" }}>Audit SEO realise par ConvertiLab</Text>
          <Text>Agence Web Paris & Ile-de-France</Text>
          <Text style={{ marginTop: 6 }}>Document genere le {date} • Ce rapport est confidentiel.</Text>
        </View>
      </Page>
    </Document>
  );
}
