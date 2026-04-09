import React from "react";
import { Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import type { SeoAuditResult } from "./analyzer";

const c = {
  bg: "#0a0a1a", card: "#14142b", border: "#2a2a4a",
  text: "#e8e8f0", text2: "#8888aa", text3: "#5a5a7a",
  accent: "#6c5ce7", accent2: "#a29bfe",
  green: "#22c55e", yellow: "#eab308", orange: "#f97316", red: "#ef4444", white: "#ffffff",
};

function sc(s: number) { return s >= 80 ? c.green : s >= 60 ? c.yellow : s >= 40 ? c.orange : c.red; }

const st = StyleSheet.create({
  page: { backgroundColor: c.bg, padding: 30, fontFamily: "Helvetica", color: c.text, fontSize: 9, lineHeight: 1.5 },
  // Section
  sh: { flexDirection: "row", alignItems: "center", marginTop: 18, marginBottom: 10, borderBottomWidth: 1, borderBottomColor: c.border, paddingBottom: 6 },
  sn: { backgroundColor: c.accent, color: c.white, width: 20, height: 20, borderRadius: 5, textAlign: "center", fontSize: 11, fontWeight: "bold", marginRight: 8, paddingTop: 3 },
  stitle: { fontSize: 15, fontWeight: "bold" },
  // Cards
  card: { backgroundColor: c.card, borderRadius: 10, borderWidth: 1, borderColor: c.border, padding: 14, marginBottom: 8 },
  cardH: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10, borderBottomWidth: 1, borderBottomColor: c.border, paddingBottom: 8 },
  cardT: { fontSize: 12, fontWeight: "bold" },
  cardS: { fontSize: 18, fontWeight: "bold" },
  // Table
  thr: { flexDirection: "row", borderBottomWidth: 1, borderBottomColor: c.border, paddingBottom: 4, marginBottom: 2 },
  th: { fontSize: 7, fontWeight: "bold", color: c.text3, textTransform: "uppercase" as const, letterSpacing: 0.5 },
  tr: { flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "rgba(255,255,255,0.03)", paddingVertical: 4 },
  td: { fontSize: 8 },
  // Badge
  b: { fontSize: 7, fontWeight: "bold", paddingVertical: 1, paddingHorizontal: 5, borderRadius: 6 },
  bp: { backgroundColor: "rgba(34,197,94,0.15)", color: c.green },
  bf: { backgroundColor: "rgba(239,68,68,0.15)", color: c.red },
  bw: { backgroundColor: "rgba(234,179,8,0.15)", color: c.yellow },
  // Mustdo
  md: { backgroundColor: c.card, borderRadius: 8, borderWidth: 1, borderColor: c.border, padding: 10, marginBottom: 6, borderLeftWidth: 3 },
  mdh: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 4 },
  mdt: { fontSize: 10, fontWeight: "bold", flex: 1 },
  mdp: { fontSize: 6, fontWeight: "bold", paddingVertical: 1, paddingHorizontal: 6, borderRadius: 8, textTransform: "uppercase" as const, letterSpacing: 0.5 },
  mdw: { fontSize: 7, color: c.text2, padding: 6, borderRadius: 4, marginBottom: 4, borderLeftWidth: 2, borderLeftColor: c.text3 },
  mdf: { fontSize: 7, backgroundColor: c.card, padding: 6, borderRadius: 4, borderWidth: 1, borderColor: c.border },
  // Timeline
  tl: { backgroundColor: c.card, borderRadius: 8, borderWidth: 1, borderColor: c.border, padding: 10, marginBottom: 6, borderLeftWidth: 3, borderLeftColor: c.accent },
  tlt: { fontSize: 10, fontWeight: "bold", color: c.accent2, marginBottom: 3 },
  tlp: { fontSize: 7, color: c.text2, marginBottom: 1 },
  // Glossary
  gg: { flexDirection: "row", flexWrap: "wrap", gap: 5, marginBottom: 12 },
  gi: { width: "48%", backgroundColor: c.card, borderRadius: 6, borderWidth: 1, borderColor: c.border, padding: 6 },
  gt: { fontSize: 8, fontWeight: "bold", color: c.accent2 },
  gd: { fontSize: 6, color: c.text2, marginTop: 1 },
  // CTA
  cta: { backgroundColor: "#1a1040", borderRadius: 12, borderWidth: 1, borderColor: c.accent, padding: 24, textAlign: "center", marginTop: 14, alignItems: "center" },
  // Footer
  ft: { textAlign: "center", borderTopWidth: 1, borderTopColor: c.border, paddingTop: 10, marginTop: 16, fontSize: 7, color: c.text3 },
});

function Badge({ ok, label }: { ok: boolean; label?: string }) {
  return <Text style={[st.b, ok ? st.bp : st.bf]}>{ok ? `✓ ${label || "OK"}` : `✗ ${label || "Probleme"}`}</Text>;
}

function Sh({ n, t }: { n: string; t: string }) {
  return <View style={st.sh}><Text style={st.sn}>{n}</Text><Text style={st.stitle}>{t}</Text></View>;
}

export function SeoAuditPdf({ audit }: { audit: SeoAuditResult }) {
  const { scores, grade, gradeLabel, issues, strengths, homepage, robotsTxt, sitemap, domain } = audit;
  const date = new Date(audit.fetchedAt).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" });

  const cats = [
    { n: "SEO Technique", s: scores.technique, d: "HTTPS, robots, sitemap" },
    { n: "SEO On-Page", s: scores.onPage, d: "Title, meta, headings" },
    { n: "Schema", s: scores.schema, d: "JSON-LD, structured data" },
    { n: "Mobile & UX", s: scores.mobile, d: "Viewport, responsive" },
    { n: "Contenu & E-E-A-T", s: scores.contenu, d: "Experience, expertise" },
    { n: "AI Search / GEO", s: scores.geo, d: "ChatGPT, Perplexity" },
    { n: "Performance", s: scores.performance, d: "Vitesse, optimisation" },
    { n: "Securite", s: scores.securite, d: "HTTPS, lang, a11y" },
  ];

  const criticals = issues.filter(i => i.priority === "critical");
  const importants = issues.filter(i => i.priority === "important");
  const recommended = issues.filter(i => i.priority === "recommended");

  return (
    <Document>
      {/* ===== PAGE 1: Cover + Scores + Points Forts ===== */}
      <Page size="A4" style={st.page}>
        {/* Cover */}
        <View style={{ alignItems: "center", marginBottom: 16, marginTop: 8 }}>
          <Text style={{ backgroundColor: c.accent, color: c.white, paddingVertical: 3, paddingHorizontal: 14, borderRadius: 15, fontSize: 7, fontWeight: "bold", letterSpacing: 2, textTransform: "uppercase" as const, marginBottom: 12 }}>
            AUDIT SEO COMPLET
          </Text>
          <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", lineHeight: 1.2 }}>
            Rapport d&apos;Audit SEO
          </Text>
          <View style={{ height: 10 }} />
          <Text style={{ fontSize: 14, color: c.accent2, fontWeight: "bold", textAlign: "center", lineHeight: 1.2 }}>
            {domain}
          </Text>
          <View style={{ height: 6 }} />
          <Text style={{ fontSize: 9, color: c.text2, textAlign: "center", lineHeight: 1.3 }}>
            {date} — 8 categories • 60+ points de controle
          </Text>
        </View>

        {/* Score hero */}
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 16, backgroundColor: c.card, borderRadius: 12, borderWidth: 1, borderColor: c.border, marginBottom: 12 }}>
          <View style={{ alignItems: "center", marginRight: 40 }}>
            <Text style={{ fontSize: 38, fontWeight: "bold", color: sc(scores.global), lineHeight: 1.1 }}>{scores.global}</Text>
            <View style={{ height: 6 }} />
            <Text style={{ fontSize: 9, color: c.text2, lineHeight: 1.2 }}>sur 100</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 34, fontWeight: "bold", color: sc(scores.global), lineHeight: 1.1 }}>{grade}</Text>
            <View style={{ height: 6 }} />
            <Text style={{ fontSize: 11, color: c.text2, lineHeight: 1.2 }}>{gradeLabel}</Text>
          </View>
        </View>

        {/* Score grid */}
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
          {cats.map(cat => (
            <View key={cat.n} style={{ width: "48.5%", flexDirection: "row", alignItems: "center", gap: 8, backgroundColor: c.card, borderRadius: 8, borderWidth: 1, borderColor: c.border, padding: 8 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: sc(cat.s), width: 36, textAlign: "center" }}>{cat.s}</Text>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 8, fontWeight: "bold" }}>{cat.n}</Text>
                <Text style={{ fontSize: 6, color: c.text2 }}>{cat.d}</Text>
                <View style={{ height: 3, backgroundColor: c.border, borderRadius: 2, marginTop: 3, width: "100%" }}>
                  <View style={{ height: 3, borderRadius: 2, backgroundColor: sc(cat.s), width: `${cat.s}%` }} />
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Points Forts / A Corriger */}
        <View style={{ flexDirection: "row", gap: 8, marginBottom: 14 }}>
          <View style={{ flex: 1, backgroundColor: c.card, borderRadius: 8, borderWidth: 1, borderColor: c.border, borderLeftWidth: 3, borderLeftColor: c.green, padding: 10 }}>
            <Text style={{ fontSize: 10, fontWeight: "bold", marginBottom: 6 }}>Points Forts</Text>
            {strengths.slice(0, 5).map((s, i) => (
              <Text key={i} style={{ fontSize: 7, color: c.text2, marginBottom: 2 }}>✓ {s}</Text>
            ))}
          </View>
          <View style={{ flex: 1, backgroundColor: c.card, borderRadius: 8, borderWidth: 1, borderColor: c.border, borderLeftWidth: 3, borderLeftColor: c.red, padding: 10 }}>
            <Text style={{ fontSize: 10, fontWeight: "bold", marginBottom: 6 }}>A Corriger</Text>
            {issues.slice(0, 5).map((is, i) => (
              <Text key={i} style={{ fontSize: 7, color: c.text2, marginBottom: 2 }}>✗ {is.title}</Text>
            ))}
          </View>
        </View>

        {/* Agency footer */}
        <View style={{ borderTopWidth: 1, borderTopColor: c.border, paddingTop: 10, textAlign: "center" }}>
          <Text style={{ fontSize: 7, color: c.text3 }}>Audit realise par ConvertiLab — Agence Web Paris & Ile-de-France</Text>
          <Text style={{ fontSize: 7, color: c.text3 }}>convertilab.com • contact@convertilab.com • +33 6 16 47 72 45</Text>
        </View>
      </Page>

      {/* ===== PAGE 2: Must-Do + Analyse Technique + On-Page ===== */}
      <Page size="A4" style={st.page}>
        <Sh n="2" t="Must-Do : Actions Prioritaires" />

        {issues.slice(0, 6).map((issue, i) => {
          const bColor = issue.priority === "critical" ? c.red : issue.priority === "important" ? c.orange : c.yellow;
          const pBg = issue.priority === "critical" ? "rgba(239,68,68,0.15)" : issue.priority === "important" ? "rgba(249,115,22,0.15)" : "rgba(234,179,8,0.15)";
          const pLabel = issue.priority === "critical" ? "CRITIQUE" : issue.priority === "important" ? "IMPORTANT" : "RECOMMANDE";
          return (
            <View key={i} style={[st.md, { borderLeftColor: bColor }]}>
              <View style={st.mdh}>
                <Text style={st.mdt}>{i + 1}. {issue.title}</Text>
                <Text style={[st.mdp, { backgroundColor: pBg, color: bColor }]}>{pLabel}</Text>
              </View>
              <View style={st.mdw}><Text><Text style={{ fontWeight: "bold" }}>Pourquoi : </Text>{issue.description}</Text></View>
              <View style={st.mdf}><Text><Text style={{ fontWeight: "bold", color: c.green }}>Corriger : </Text>{issue.fix}</Text></View>
            </View>
          );
        })}

        {/* SEO Technique */}
        <Sh n="3" t="Analyse Detaillee" />
        <View style={st.card}>
          <View style={st.cardH}>
            <Text style={st.cardT}>SEO Technique</Text>
            <Text style={[st.cardS, { color: sc(scores.technique) }]}>{scores.technique}/100</Text>
          </View>
          {[
            { n: "HTTPS", ok: audit.url.startsWith("https"), d: audit.url.startsWith("https") ? "SSL actif" : "Non securise" },
            { n: "robots.txt", ok: robotsTxt.exists, d: robotsTxt.exists ? `Present — ${robotsTxt.blockedPaths.length} chemins bloques` : "Absent" },
            { n: "Sitemap", ok: sitemap.exists, d: sitemap.exists ? `${sitemap.urlCount} URLs` : "Absent" },
            { n: "Canonical", ok: !!homepage.canonical, d: homepage.canonical ? homepage.canonical.substring(0, 50) : "Manquante" },
          ].map((r, i) => (
            <View key={i} style={st.tr}>
              <Text style={[st.td, { width: "22%" }]}>{r.n}</Text>
              <View style={{ width: "18%" }}><Badge ok={r.ok} /></View>
              <Text style={[st.td, { width: "60%", color: c.text2 }]}>{r.d}</Text>
            </View>
          ))}
        </View>

        {/* SEO On-Page */}
        <View style={st.card}>
          <View style={st.cardH}>
            <Text style={st.cardT}>SEO On-Page</Text>
            <Text style={[st.cardS, { color: sc(scores.onPage) }]}>{scores.onPage}/100</Text>
          </View>
          {[
            { n: "Title", ok: !!homepage.title, d: homepage.title ? `"${homepage.title.substring(0, 45)}..." (${homepage.titleLength} car.)` : "Manquant" },
            { n: "Meta desc.", ok: !!homepage.metaDescription, d: `${homepage.metaDescriptionLength} caracteres` },
            { n: "H1", ok: homepage.h1.length === 1, d: homepage.h1.length === 0 ? "Aucun" : `"${homepage.h1[0].substring(0, 40)}..."` },
            { n: "Images alt", ok: homepage.imagesWithoutAlt === 0, d: `${homepage.imagesWithoutAlt}/${homepage.totalImages} sans alt` },
            { n: "Liens internes", ok: homepage.internalLinks >= 3, d: `${homepage.internalLinks} liens` },
            { n: "Open Graph", ok: !!homepage.ogTags["og:title"], d: `${Object.keys(homepage.ogTags).length} balises` },
          ].map((r, i) => (
            <View key={i} style={st.tr}>
              <Text style={[st.td, { width: "22%" }]}>{r.n}</Text>
              <View style={{ width: "18%" }}><Badge ok={r.ok} /></View>
              <Text style={[st.td, { width: "60%", color: c.text2 }]}>{r.d}</Text>
            </View>
          ))}
        </View>
      </Page>

      {/* ===== PAGE 3: Schema + Mobile + GEO + Perf + Securite (compact) ===== */}
      <Page size="A4" style={[st.page, { padding: 26 }]}>
        {/* Schema - compact 2-col layout */}
        <View style={[st.card, { padding: 10, marginBottom: 6 }]}>
          <View style={[st.cardH, { marginBottom: 6, paddingBottom: 6 }]}>
            <Text style={{ fontSize: 11, fontWeight: "bold" }}>Schema / JSON-LD</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: sc(scores.schema) }}>{scores.schema}/100</Text>
          </View>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {homepage.jsonLd.map((j, i) => (
              <View key={i} style={{ flexDirection: "row", alignItems: "center", width: "50%", paddingVertical: 1 }}>
                <Text style={{ fontSize: 7, width: "55%" }}>{j.type}</Text>
                <Text style={[st.b, j.detected ? st.bp : st.bf, { fontSize: 6 }]}>{j.detected ? "✓" : "✗"}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Mobile + Securite side by side */}
        <View style={{ flexDirection: "row", marginBottom: 6 }}>
          <View style={[st.card, { flex: 1, padding: 10, marginBottom: 0, marginRight: 6 }]}>
            <View style={[st.cardH, { marginBottom: 6, paddingBottom: 6 }]}>
              <Text style={{ fontSize: 11, fontWeight: "bold" }}>Mobile & UX</Text>
              <Text style={{ fontSize: 16, fontWeight: "bold", color: sc(scores.mobile) }}>{scores.mobile}/100</Text>
            </View>
            {[
              { n: "Viewport", ok: homepage.viewport, d: homepage.viewport ? "Oui" : "Absent" },
              { n: "CSS", ok: homepage.cssFramework !== "Inconnu", d: homepage.cssFramework },
              { n: "JS", ok: homepage.jsFramework !== "Inconnu", d: homepage.jsFramework },
              { n: "WebP", ok: homepage.hasWebpImages, d: homepage.hasWebpImages ? "Oui" : "Non" },
            ].map((r, i) => (
              <View key={i} style={{ flexDirection: "row", alignItems: "center", paddingVertical: 2 }}>
                <Text style={{ fontSize: 7, width: "30%" }}>{r.n}</Text>
                <Text style={[st.b, r.ok ? st.bp : st.bf, { fontSize: 6 }]}>{r.ok ? "✓" : "✗"}</Text>
                <Text style={{ fontSize: 7, color: c.text2, marginLeft: 4 }}>{r.d}</Text>
              </View>
            ))}
          </View>
          <View style={[st.card, { flex: 1, padding: 10, marginBottom: 0 }]}>
            <View style={[st.cardH, { marginBottom: 6, paddingBottom: 6 }]}>
              <Text style={{ fontSize: 11, fontWeight: "bold" }}>Securite</Text>
              <Text style={{ fontSize: 16, fontWeight: "bold", color: sc(scores.securite) }}>{scores.securite}/100</Text>
            </View>
            {[
              { n: "HTTPS", ok: audit.url.startsWith("https"), d: "SSL" },
              { n: "Lang", ok: !!homepage.lang, d: homepage.lang || "—" },
              { n: "Alt", ok: homepage.imagesWithoutAlt === 0, d: `${homepage.imagesWithoutAlt} manquant` },
            ].map((r, i) => (
              <View key={i} style={{ flexDirection: "row", alignItems: "center", paddingVertical: 2 }}>
                <Text style={{ fontSize: 7, width: "30%" }}>{r.n}</Text>
                <Text style={[st.b, r.ok ? st.bp : st.bf, { fontSize: 6 }]}>{r.ok ? "✓" : "✗"}</Text>
                <Text style={{ fontSize: 7, color: c.text2, marginLeft: 4 }}>{r.d}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* AI/GEO */}
        <View style={[st.card, { padding: 10, marginBottom: 6 }]}>
          <View style={[st.cardH, { marginBottom: 6, paddingBottom: 6 }]}>
            <Text style={{ fontSize: 11, fontWeight: "bold" }}>AI Search / GEO</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: sc(scores.geo) }}>{scores.geo}/100</Text>
          </View>
          <Text style={{ fontSize: 7, color: c.text2, marginBottom: 4 }}>Visibilite sur ChatGPT, Perplexity, Gemini, Claude, Copilot</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {[
              { n: "GPTBot", s: robotsTxt.aiBots.gptbot },
              { n: "ClaudeBot", s: robotsTxt.aiBots.claudebot },
              { n: "PerplexityBot", s: robotsTxt.aiBots.perplexitybot },
              { n: "Google-Extended", s: robotsTxt.aiBots.googleExtended },
            ].map((bot, i) => (
              <View key={i} style={{ flexDirection: "row", alignItems: "center", width: "50%", paddingVertical: 2 }}>
                <Text style={{ fontSize: 7, width: "55%" }}>{bot.n}</Text>
                <Text style={[st.b, bot.s === "allowed" ? st.bp : bot.s === "blocked" ? st.bf : st.bw, { fontSize: 6 }]}>
                  {bot.s === "allowed" ? "✓ Autorise" : bot.s === "blocked" ? "✗ Bloque" : "⚠ ?"}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Performance */}
        <View style={[st.card, { padding: 10, marginBottom: 6 }]}>
          <View style={[st.cardH, { marginBottom: 6, paddingBottom: 6 }]}>
            <Text style={{ fontSize: 11, fontWeight: "bold" }}>Performance</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: sc(scores.performance) }}>{scores.performance}/100</Text>
          </View>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {[
              { n: "Temps reponse", ok: homepage.responseTime < 1500, d: `${(homepage.responseTime / 1000).toFixed(1)}s` },
              { n: "Preconnect", ok: homepage.hasPreconnect, d: homepage.hasPreconnect ? "Oui" : "Non" },
              { n: "Images WebP", ok: homepage.hasWebpImages, d: homepage.hasWebpImages ? "Oui" : "Non" },
              { n: "Framework", ok: homepage.jsFramework !== "Inconnu", d: `${homepage.jsFramework}` },
            ].map((r, i) => (
              <View key={i} style={{ flexDirection: "row", alignItems: "center", width: "50%", paddingVertical: 2 }}>
                <Text style={{ fontSize: 7, width: "40%" }}>{r.n}</Text>
                <Text style={[st.b, r.ok ? st.bp : st.bf, { fontSize: 6 }]}>{r.ok ? "✓" : "✗"}</Text>
                <Text style={{ fontSize: 7, color: c.text2, marginLeft: 4 }}>{r.d}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>

      {/* ===== PAGE 4: Plan + Glossaire + CTA + Footer ===== */}
      <Page size="A4" style={st.page}>
        <Sh n="4" t="Plan d'Action" />
        <View style={st.tl}>
          <Text style={st.tlt}>Semaine 1-2 : Corrections critiques</Text>
          {criticals.length > 0
            ? criticals.slice(0, 4).map((i, idx) => <Text key={idx} style={st.tlp}>• {i.title}</Text>)
            : <Text style={st.tlp}>• Aucun probleme critique detecte !</Text>
          }
        </View>
        <View style={st.tl}>
          <Text style={st.tlt}>Semaine 3-4 : Optimisations importantes</Text>
          {importants.length > 0
            ? importants.slice(0, 4).map((i, idx) => <Text key={idx} style={st.tlp}>• {i.title}</Text>)
            : <Text style={st.tlp}>• Enrichir le contenu et les signaux E-E-A-T</Text>
          }
        </View>
        <View style={st.tl}>
          <Text style={st.tlt}>Mois 2+ : Croissance continue</Text>
          {recommended.slice(0, 3).map((i, idx) => <Text key={idx} style={st.tlp}>• {i.title}</Text>)}
          <Text style={st.tlp}>• Monitorer la visibilite IA avec Otterly.ai ou Peec AI</Text>
          <Text style={st.tlp}>• Analyser les Core Web Vitals via Google Search Console</Text>
        </View>

        <Sh n="5" t="Glossaire SEO" />
        <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 8 }}>
          {[
            { t: "SEO", d: "Optimiser pour apparaitre en haut de Google", slug: "seo" },
            { t: "GEO", d: "Optimiser pour etre cite par les IA", slug: "geo" },
            { t: "E-E-A-T", d: "Experience, Expertise, Autorite, Trust", slug: "e-e-a-t" },
            { t: "JSON-LD", d: "Code invisible pour Google (FAQ, avis)", slug: "json-ld" },
            { t: "Meta desc.", d: "Texte sous le titre dans Google", slug: "meta-description" },
            { t: "Canonical", d: "Indique la page originale a Google", slug: "canonical" },
            { t: "Sitemap", d: "Plan du site pour l'indexation", slug: "sitemap" },
            { t: "robots.txt", d: "Directives pour les robots", slug: "robots-txt" },
            { t: "Alt text", d: "Texte decrivant une image", slug: "alt-text" },
            { t: "Web Vitals", d: "Metriques Google de vitesse", slug: "core-web-vitals" },
            { t: "Backlink", d: "Lien externe = vote de confiance", slug: "backlink" },
            { t: "Rich Snippet", d: "Resultat Google enrichi", slug: "rich-snippet" },
          ].map((g, i) => (
            <View key={i} style={{ width: "33%", paddingVertical: 2, paddingRight: 6 }}>
              <Link src={`https://www.convertilab.com/glossaire/${g.slug}`} style={{ fontSize: 7, fontWeight: "bold", color: c.accent2, textDecoration: "none" }}>{g.t}</Link>
              <Text style={{ fontSize: 6, color: c.text2 }}>{g.d}</Text>
            </View>
          ))}
        </View>

        {/* CTA */}
        <View style={{ backgroundColor: "#1a1040", borderRadius: 10, borderWidth: 1, borderColor: c.accent, padding: 18, textAlign: "center", marginTop: 8, alignItems: "center" }}>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: c.white, marginBottom: 4, textAlign: "center", lineHeight: 1.2 }}>
            Besoin d&apos;aide pour corriger tout ca ?
          </Text>
          <Text style={{ fontSize: 8, color: c.text2, marginBottom: 10, textAlign: "center" }}>
            L&apos;equipe ConvertiLab peut prendre en charge toutes les corrections et optimisations.
          </Text>
          <Link src="https://www.convertilab.com/contact" style={{ backgroundColor: c.accent, color: c.white, paddingVertical: 7, paddingHorizontal: 20, borderRadius: 7, fontSize: 9, fontWeight: "bold", textDecoration: "none" }}>
            Prendre rendez-vous gratuit
          </Link>
          <View style={{ height: 6 }} />
          <Text style={{ fontSize: 6, color: c.text3, textAlign: "center" }}>
            convertilab.com • 06 16 47 72 45 • contact@convertilab.com
          </Text>
        </View>

        {/* Footer - inline, no separate page */}
        <View style={{ textAlign: "center", borderTopWidth: 1, borderTopColor: c.border, paddingTop: 8, marginTop: 10, fontSize: 7, color: c.text3 }}>
          <Text style={{ fontWeight: "bold" }}>Audit SEO realise par ConvertiLab — Agence Web Paris & Ile-de-France</Text>
          <View style={{ height: 3 }} />
          <Text>Document genere le {date} • Ce rapport est confidentiel.</Text>
        </View>
      </Page>
    </Document>
  );
}
