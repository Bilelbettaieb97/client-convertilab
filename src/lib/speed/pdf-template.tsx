import React from "react";
import { Document, Page, Text, View, Link } from "@react-pdf/renderer";
import type { SpeedAuditResult } from "./analyzer";
import {
  c, sc, base,
  CoverSection, ScoreHero, ScoreGrid, StrengthsAndIssues,
  AgencyFooterLine, Sh, IssueCard, GlossaryCompact, CtaSection, FooterSection,
} from "@/lib/tools/shared-pdf-styles";

export function SpeedAuditPdf({ audit }: { audit: SpeedAuditResult }) {
  const { scores, grade, gradeLabel, issues, strengths, domain } = audit;
  const date = new Date(audit.fetchedAt).toLocaleDateString("fr-FR", {
    year: "numeric", month: "long", day: "numeric",
  });

  const criticals = issues.filter(i => i.priority === "critical");
  const importants = issues.filter(i => i.priority === "important");
  const recommended = issues.filter(i => i.priority === "recommended");

  const categories = [
    { name: "Temps Serveur", score: scores.server, desc: "TTFB, temps de reponse" },
    { name: "Poids Page", score: scores.weight, desc: "Taille HTML, ressources" },
    { name: "Assets", score: scores.assets, desc: "Images, compression, fonts" },
    { name: "Render Blocking", score: scores.blocking, desc: "Scripts, CSS critique" },
    { name: "Bonnes Pratiques", score: scores.practices, desc: "Viewport, preconnect, DOM" },
  ];

  return (
    <Document>
      {/* ===== PAGE 1: Cover + Scores + Strengths/Issues ===== */}
      <Page size="A4" style={base.page}>
        <CoverSection
          badge="AUDIT VITESSE"
          title="Rapport de Vitesse"
          subtitle={domain}
          date={`${date} — 5 categories • 20+ points de controle`}
        />

        <ScoreHero score={scores.global} grade={grade} gradeLabel={gradeLabel} />

        <ScoreGrid categories={categories} />

        <StrengthsAndIssues
          strengths={strengths.slice(0, 5)}
          issues={issues.slice(0, 5).map(i => i.title)}
        />

        <AgencyFooterLine />
      </Page>

      {/* ===== PAGE 2: Issues + Detailed Metrics ===== */}
      <Page size="A4" style={base.page}>
        <Sh n="2" t="Actions Prioritaires" />

        {issues.slice(0, 6).map((issue, i) => (
          <IssueCard
            key={i}
            index={i + 1}
            title={issue.title}
            priority={issue.priority}
            description={issue.description}
            fix={issue.fix}
          />
        ))}

        <Sh n="3" t="Metriques Detaillees" />
        <View style={base.card}>
          <View style={base.cardH}>
            <Text style={base.cardT}>Resultats Techniques</Text>
            <Text style={[base.cardS, { color: sc(scores.global) }]}>{scores.global}/100</Text>
          </View>
          {[
            { label: "Temps de reponse", value: `${(audit.responseTime / 1000).toFixed(2)}s`, ok: audit.responseTime < 1000 },
            { label: "Poids de la page", value: `${Math.round(audit.pageWeight / 1024)} Ko`, ok: audit.pageWeight / 1024 < 500 },
            { label: "Nombre d'images", value: `${audit.totalImages}`, ok: audit.totalImages <= 20 },
            { label: "Images sans lazy loading", value: `${audit.imagesWithoutLazy}`, ok: audit.imagesWithoutLazy === 0 },
            { label: "Scripts bloquants", value: `${audit.scriptsBlocking}`, ok: audit.scriptsBlocking <= 1 },
            { label: "Scripts async", value: `${audit.scriptsAsync}`, ok: true },
            { label: "Scripts defer", value: `${audit.scriptsDefer}`, ok: true },
            { label: "Compression", value: audit.compressionType, ok: audit.hasCompression },
            { label: "Format WebP", value: audit.hasWebp ? "Oui" : "Non", ok: audit.hasWebp },
            { label: "Lazy loading", value: audit.imagesWithoutLazy < audit.totalImages ? "Partiel" : audit.totalImages === 0 ? "N/A" : "Non", ok: audit.imagesWithoutLazy === 0 },
            { label: "Preconnect", value: audit.hasPreconnect ? "Oui" : "Non", ok: audit.hasPreconnect },
            { label: "Font preload", value: audit.hasFontPreload ? "Oui" : "Non", ok: audit.hasFontPreload },
            { label: "Framework", value: audit.framework, ok: audit.framework !== "Inconnu" },
          ].map((row, i) => (
            <View key={i} style={base.tr}>
              <Text style={[base.td, { width: "45%", fontWeight: "bold" }]}>{row.label}</Text>
              <Text style={[base.td, { width: "25%", color: row.ok ? c.green : c.red }]}>{row.value}</Text>
              <Text style={[{ fontSize: 7, paddingVertical: 1, paddingHorizontal: 5, borderRadius: 6, fontWeight: "bold" }, row.ok ? { backgroundColor: "rgba(34,197,94,0.15)", color: c.green } : { backgroundColor: "rgba(239,68,68,0.15)", color: c.red }]}>
                {row.ok ? "\u2713 OK" : "\u2717 A corriger"}
              </Text>
            </View>
          ))}
        </View>
      </Page>

      {/* ===== PAGE 3: Plan d'action + Glossary + CTA ===== */}
      <Page size="A4" style={base.page}>
        <Sh n="4" t="Plan d'Action" />

        <View style={base.tl}>
          <Text style={base.tlt}>Semaine 1 : Corrections critiques</Text>
          {criticals.length > 0
            ? criticals.slice(0, 4).map((issue, idx) => <Text key={idx} style={base.tlp}>{"\u2022"} {issue.title}</Text>)
            : <Text style={base.tlp}>{"\u2022"} Aucun probleme critique detecte !</Text>
          }
        </View>

        <View style={base.tl}>
          <Text style={base.tlt}>Semaine 2-3 : Optimisations importantes</Text>
          {importants.length > 0
            ? importants.slice(0, 4).map((issue, idx) => <Text key={idx} style={base.tlp}>{"\u2022"} {issue.title}</Text>)
            : <Text style={base.tlp}>{"\u2022"} Optimiser les images et activer le lazy loading</Text>
          }
        </View>

        <View style={base.tl}>
          <Text style={base.tlt}>Mois 2+ : Amelioration continue</Text>
          {recommended.length > 0
            ? recommended.slice(0, 3).map((issue, idx) => <Text key={idx} style={base.tlp}>{"\u2022"} {issue.title}</Text>)
            : <Text style={base.tlp}>{"\u2022"} Monitorer les Core Web Vitals</Text>
          }
          <Text style={base.tlp}>{"\u2022"} Tester regulierement avec Google PageSpeed Insights</Text>
          <Text style={base.tlp}>{"\u2022"} Mettre en place un budget performance</Text>
        </View>

        <Sh n="5" t="Glossaire Vitesse" />
        <GlossaryCompact terms={[
          { t: "TTFB", d: "Time to First Byte — temps avant le 1er octet recu" },
          { t: "FCP", d: "First Contentful Paint — 1er element visible" },
          { t: "LCP", d: "Largest Contentful Paint — plus gros element visible" },
          { t: "CLS", d: "Cumulative Layout Shift — stabilite visuelle" },
          { t: "WebP", d: "Format image 25-35% plus leger que JPEG/PNG" },
          { t: "Lazy Loading", d: "Chargement differe des images hors ecran" },
          { t: "CDN", d: "Content Delivery Network — serveurs proches des visiteurs" },
          { t: "Minification", d: "Suppression du code inutile (espaces, commentaires)" },
          { t: "Gzip/Brotli", d: "Compression des fichiers envoyes au navigateur" },
          { t: "Preconnect", d: "Connexion anticipee aux serveurs tiers" },
          { t: "Critical CSS", d: "CSS inline pour le contenu visible immediatement" },
          { t: "Render Blocking", d: "Ressources qui bloquent l'affichage de la page" },
        ]} />

        <CtaSection />

        <FooterSection date={date} />
      </Page>
    </Document>
  );
}
