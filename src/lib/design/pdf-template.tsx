import React from "react";
import { Document, Page, Text, View, Link } from "@react-pdf/renderer";
import type { DesignAuditResult } from "./analyzer";
import {
  c, sc, base, Badge,
  CoverSection, ScoreHero, ScoreGrid, StrengthsAndIssues,
  AgencyFooterLine, Sh, IssueCard, GlossaryCompact, CtaSection, FooterSection,
} from "@/lib/tools/shared-pdf-styles";

export function DesignAuditPdf({ audit }: { audit: DesignAuditResult }) {
  const { scores, grade, gradeLabel, issues, strengths, domain } = audit;
  const date = new Date(audit.fetchedAt).toLocaleDateString("fr-FR", {
    year: "numeric", month: "long", day: "numeric",
  });

  const criticals = issues.filter(i => i.priority === "critical");
  const importants = issues.filter(i => i.priority === "important");
  const recommended = issues.filter(i => i.priority === "recommended");

  const categories = [
    { name: "CTA & Conversion", score: scores.cta, desc: "Boutons, formulaires, urgence" },
    { name: "Hierarchie Visuelle", score: scores.hierarchy, desc: "Titres H1-H4, structure" },
    { name: "Signaux de Confiance", score: scores.trust, desc: "Temoignages, avis, legal" },
    { name: "Compatibilite Mobile", score: scores.mobile, desc: "Viewport, responsive" },
    { name: "Images & Medias", score: scores.images, desc: "Alt text, WebP, lazy load" },
    { name: "Navigation & UX", score: scores.navigation, desc: "Nav, footer, breadcrumbs" },
  ];

  return (
    <Document>
      {/* ===== PAGE 1: Cover + Scores + Strengths/Issues ===== */}
      <Page size="A4" style={base.page}>
        <CoverSection
          badge="AUDIT UX/DESIGN"
          title="Rapport Design & UX"
          subtitle={domain}
          date={`${date} — 6 categories • Analyse UX complete`}
        />

        <ScoreHero score={scores.global} grade={grade} gradeLabel={gradeLabel} />

        <ScoreGrid categories={categories} />

        <StrengthsAndIssues
          strengths={strengths.slice(0, 5)}
          issues={issues.slice(0, 5).map(i => i.title)}
        />

        <AgencyFooterLine />
      </Page>

      {/* ===== PAGE 2: Issues + Detailed Analysis ===== */}
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

        <Sh n="3" t="Analyse Detaillee" />

        {/* CTA & Conversion */}
        <View style={base.cardCompact}>
          <View style={base.cardHCompact}>
            <Text style={base.cardTSmall}>CTA & Conversion</Text>
            <Text style={[base.cardSSmall, { color: sc(scores.cta) }]}>{scores.cta}/100</Text>
          </View>
          {[
            { label: "Nombre de CTA", value: `${audit.ctaCount}`, ok: audit.ctaCount >= 1 },
            { label: "Formulaires", value: `${audit.formCount}`, ok: audit.formCount >= 1 },
          ].map((row, i) => (
            <View key={i} style={base.tr}>
              <Text style={[base.td, { width: "45%", fontWeight: "bold" }]}>{row.label}</Text>
              <Text style={[base.td, { width: "25%" }]}>{row.value}</Text>
              <Badge ok={row.ok} />
            </View>
          ))}
        </View>

        {/* Hierarchy */}
        <View style={base.cardCompact}>
          <View style={base.cardHCompact}>
            <Text style={base.cardTSmall}>Hierarchie Visuelle</Text>
            <Text style={[base.cardSSmall, { color: sc(scores.hierarchy) }]}>{scores.hierarchy}/100</Text>
          </View>
          {[
            { label: "Titres H1", value: `${audit.headingsStructure.h1Count}`, ok: audit.headingsStructure.h1Count === 1 },
            { label: "Titres H2", value: `${audit.headingsStructure.h2Count}`, ok: audit.headingsStructure.h2Count >= 3 },
            { label: "Titres H3", value: `${audit.headingsStructure.h3Count}`, ok: audit.headingsStructure.h3Count >= 1 },
            { label: "Ordre correct", value: audit.headingsStructure.hasProperOrder ? "Oui" : "Non", ok: audit.headingsStructure.hasProperOrder },
          ].map((row, i) => (
            <View key={i} style={base.tr}>
              <Text style={[base.td, { width: "45%", fontWeight: "bold" }]}>{row.label}</Text>
              <Text style={[base.td, { width: "25%" }]}>{row.value}</Text>
              <Badge ok={row.ok} />
            </View>
          ))}
        </View>

        {/* Trust + Mobile side by side */}
        <View style={{ flexDirection: "row", marginBottom: 6 }}>
          <View style={[base.cardCompact, { flex: 1, marginBottom: 0, marginRight: 6 }]}>
            <View style={base.cardHCompact}>
              <Text style={base.cardTSmall}>Confiance</Text>
              <Text style={[base.cardSSmall, { color: sc(scores.trust) }]}>{scores.trust}/100</Text>
            </View>
            {[
              { n: "Temoignages", ok: audit.hasTestimonials },
              { n: "Mentions legales", ok: audit.hasLegalLinks },
              { n: "Reseaux sociaux", ok: audit.hasSocialLinks },
            ].map((r, i) => (
              <View key={i} style={{ flexDirection: "row", alignItems: "center", paddingVertical: 2 }}>
                <Text style={{ fontSize: 7, width: "60%" }}>{r.n}</Text>
                <Badge ok={r.ok} />
              </View>
            ))}
          </View>
          <View style={[base.cardCompact, { flex: 1, marginBottom: 0 }]}>
            <View style={base.cardHCompact}>
              <Text style={base.cardTSmall}>Mobile</Text>
              <Text style={[base.cardSSmall, { color: sc(scores.mobile) }]}>{scores.mobile}/100</Text>
            </View>
            {[
              { n: "Viewport", ok: audit.hasViewport },
              { n: "Responsive", ok: audit.hasResponsiveFramework },
            ].map((r, i) => (
              <View key={i} style={{ flexDirection: "row", alignItems: "center", paddingVertical: 2 }}>
                <Text style={{ fontSize: 7, width: "60%" }}>{r.n}</Text>
                <Badge ok={r.ok} />
              </View>
            ))}
          </View>
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
          <Text style={base.tlt}>Semaine 2-3 : Optimisations UX</Text>
          {importants.length > 0
            ? importants.slice(0, 4).map((issue, idx) => <Text key={idx} style={base.tlp}>{"\u2022"} {issue.title}</Text>)
            : <Text style={base.tlp}>{"\u2022"} Ameliorer les signaux de confiance et la structure</Text>
          }
        </View>

        <View style={base.tl}>
          <Text style={base.tlt}>Mois 2+ : Amelioration continue</Text>
          {recommended.length > 0
            ? recommended.slice(0, 3).map((issue, idx) => <Text key={idx} style={base.tlp}>{"\u2022"} {issue.title}</Text>)
            : <Text style={base.tlp}>{"\u2022"} Optimiser les images et l'accessibilite</Text>
          }
          <Text style={base.tlp}>{"\u2022"} Realiser des tests A/B sur les CTA</Text>
          <Text style={base.tlp}>{"\u2022"} Analyser les heatmaps pour optimiser le parcours utilisateur</Text>
        </View>

        <Sh n="5" t="Glossaire UX/Design" />
        <GlossaryCompact terms={[
          { t: "CTA", d: "Call-to-Action — bouton incitant a l'action" },
          { t: "UX", d: "User Experience — experience utilisateur globale" },
          { t: "Above the fold", d: "Zone visible sans scroller" },
          { t: "Trust Signal", d: "Element renfor\u00E7ant la confiance (avis, logos)" },
          { t: "Social Proof", d: "Preuve sociale — temoignages, chiffres" },
          { t: "Responsive", d: "Design adapte a toutes les tailles d'ecran" },
          { t: "A11y", d: "Accessibilite — site utilisable par tous" },
          { t: "Breadcrumb", d: "Fil d'Ariane — chemin de navigation" },
          { t: "Hero Section", d: "Premiere section visible d'une page" },
          { t: "CRO", d: "Conversion Rate Optimization" },
          { t: "Wireframe", d: "Maquette fil de fer — structure de la page" },
          { t: "Heatmap", d: "Carte de chaleur des clics et scrolls" },
        ]} />

        <View style={{ backgroundColor: c.card, borderRadius: 8, borderWidth: 1, borderColor: c.border, padding: 8, marginBottom: 10 }}>
          <Text style={{ fontSize: 6, color: c.text3, fontStyle: "italic", textAlign: "center" }}>
            Analyse basee sur la structure HTML du site. Certains elements visuels (couleurs, typographie, espacement) ne sont pas mesurables depuis le code source uniquement.
          </Text>
        </View>

        <CtaSection />

        <FooterSection date={date} />
      </Page>
    </Document>
  );
}
