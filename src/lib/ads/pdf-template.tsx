import React from "react";
import { Document, Page, Text, View, Link } from "@react-pdf/renderer";
import {
  base,
  c,
  CoverSection,
  AgencyFooterLine,
  FooterSection,
  Sh,
} from "@/lib/tools/shared-pdf-styles";
import type { AdsProjectionResult } from "./calculator";

function formatNum(n: number): string {
  return n.toLocaleString("fr-FR");
}

function formatEur(n: number): string {
  return `${n.toLocaleString("fr-FR")}${"\u00a0"}\u20ac`;
}

function gradeColor(grade: string): string {
  if (grade === "A+" || grade === "A") return c.green;
  if (grade === "B") return c.yellow;
  if (grade === "C") return c.orange;
  return c.red;
}

// ===== PAGE 1: COVER + SUMMARY =====
function PageCover({ data }: { data: AdsProjectionResult }) {
  const date = new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

  return (
    <Page size="A4" style={base.page}>
      <CoverSection
        badge="ESTIMATION ROI ADS"
        title={`Projection publicitaire — ${data.sectorLabel}`}
        subtitle={data.city ? `${data.sectorLabel} a ${data.city}` : data.sectorLabel}
        date={`Rapport genere le ${date}`}
      />

      {/* Summary box */}
      <View style={[base.card, { padding: 18, marginBottom: 14 }]}>
        <View style={base.cardH}>
          <Text style={base.cardT}>Resume de l{"\u0027"}estimation</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 28, fontWeight: "bold", color: gradeColor(data.grade), lineHeight: 1.1 }}>{data.grade}</Text>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 9, color: c.text2, lineHeight: 1.2 }}>{data.gradeLabel}</Text>
              <Text style={{ fontSize: 7, color: c.text3, lineHeight: 1.2 }}>ROAS: {data.monthlyRoas}x</Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {[
            { label: "Budget mensuel", value: formatEur(data.budgetMonthly) },
            { label: "Secteur", value: data.sectorLabel },
            { label: "Plateforme", value: data.platform },
            { label: "CPC moyen", value: formatEur(data.cpc) },
            { label: "Clics/mois", value: formatNum(data.monthlyClicks) },
            { label: "Leads/mois", value: formatNum(data.monthlyLeads) },
            { label: "CA estime/mois", value: formatEur(data.monthlyRevenue) },
            { label: "Panier moyen", value: formatEur(data.avgBasket) },
          ].map((item, i) => (
            <View key={i} style={{ width: "25%", paddingVertical: 6, paddingRight: 8 }}>
              <Text style={{ fontSize: 7, color: c.text3, textTransform: "uppercase" as const, letterSpacing: 0.5, marginBottom: 2 }}>{item.label}</Text>
              <Text style={{ fontSize: 11, fontWeight: "bold", color: c.white }}>{item.value}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Key highlights */}
      <View style={{ flexDirection: "row", marginBottom: 14 }}>
        <View style={[base.card, { flex: 1, marginRight: 6, alignItems: "center", padding: 14 }]}>
          <Text style={{ fontSize: 7, color: c.text3, marginBottom: 4 }}>LEADS MENSUELS</Text>
          <Text style={{ fontSize: 22, fontWeight: "bold", color: c.accent2, lineHeight: 1.1 }}>{data.monthlyLeads}</Text>
          <Text style={{ fontSize: 7, color: c.text2, marginTop: 2 }}>clients potentiels</Text>
        </View>
        <View style={[base.card, { flex: 1, marginRight: 6, alignItems: "center", padding: 14 }]}>
          <Text style={{ fontSize: 7, color: c.text3, marginBottom: 4 }}>CA MENSUEL ESTIME</Text>
          <Text style={{ fontSize: 22, fontWeight: "bold", color: c.green, lineHeight: 1.1 }}>{formatEur(data.monthlyRevenue)}</Text>
          <Text style={{ fontSize: 7, color: c.text2, marginTop: 2 }}>chiffre d{"\u0027"}affaires</Text>
        </View>
        <View style={[base.card, { flex: 1, alignItems: "center", padding: 14 }]}>
          <Text style={{ fontSize: 7, color: c.text3, marginBottom: 4 }}>ROAS</Text>
          <Text style={{ fontSize: 22, fontWeight: "bold", color: gradeColor(data.grade), lineHeight: 1.1 }}>{data.monthlyRoas}x</Text>
          <Text style={{ fontSize: 7, color: c.text2, marginTop: 2 }}>retour sur investissement</Text>
        </View>
      </View>

      <AgencyFooterLine />
    </Page>
  );
}

// ===== PAGE 2: MONTHLY PROJECTION TABLE =====
function PageTable({ data }: { data: AdsProjectionResult }) {
  const headerBg = c.accent;
  const headerText = c.white;
  const cols = [
    { label: "Mois", width: "10%" },
    { label: "Investissement", width: "18%" },
    { label: "Clics", width: "14%" },
    { label: "Leads", width: "14%" },
    { label: "CA estime", width: "20%" },
    { label: "Profit", width: "24%" },
  ];

  return (
    <Page size="A4" style={base.page}>
      <Sh n="1" t="Projection mensuelle detaillee" />

      <View style={[base.card, { padding: 0, overflow: "hidden" }]}>
        {/* Header row */}
        <View style={{ flexDirection: "row", backgroundColor: headerBg, paddingVertical: 6, paddingHorizontal: 8 }}>
          {cols.map((col, i) => (
            <Text key={i} style={{ width: col.width, fontSize: 7, fontWeight: "bold", color: headerText, textAlign: i === 0 ? "left" : "right" }}>
              {col.label}
            </Text>
          ))}
        </View>

        {/* Data rows */}
        {data.monthlyBreakdown.map((row, i) => {
          const isEven = i % 2 === 0;
          const profitColor = row.profit >= 0 ? c.green : c.red;

          return (
            <View key={i} style={{ flexDirection: "row", backgroundColor: isEven ? "rgba(255,255,255,0.02)" : "transparent", paddingVertical: 5, paddingHorizontal: 8, borderBottomWidth: 1, borderBottomColor: "rgba(255,255,255,0.03)" }}>
              <Text style={{ width: "10%", fontSize: 8, fontWeight: "bold", color: c.text }}>
                M{row.month}
              </Text>
              <Text style={{ width: "18%", fontSize: 8, color: c.text2, textAlign: "right" }}>
                {formatEur(row.investment)}
              </Text>
              <Text style={{ width: "14%", fontSize: 8, color: c.text2, textAlign: "right" }}>
                {formatNum(row.clicks)}
              </Text>
              <Text style={{ width: "14%", fontSize: 8, color: c.accent2, textAlign: "right", fontWeight: "bold" }}>
                {formatNum(row.leads)}
              </Text>
              <Text style={{ width: "20%", fontSize: 8, color: c.text, textAlign: "right", fontWeight: "bold" }}>
                {formatEur(row.revenue)}
              </Text>
              <Text style={{ width: "24%", fontSize: 8, color: profitColor, textAlign: "right", fontWeight: "bold" }}>
                {row.profit >= 0 ? "+" : ""}{formatEur(row.profit)}
              </Text>
            </View>
          );
        })}
      </View>

      {/* Learning curve note */}
      <View style={{ marginTop: 10, backgroundColor: c.card, borderRadius: 8, borderWidth: 1, borderColor: c.border, borderLeftWidth: 3, borderLeftColor: c.accent, padding: 10 }}>
        <Text style={{ fontSize: 8, fontWeight: "bold", color: c.accent2, marginBottom: 4 }}>Courbe d{"\u0027"}apprentissage</Text>
        <Text style={{ fontSize: 7, color: c.text2 }}>
          Mois 1 : Performance a 60% (phase d{"\u0027"}apprentissage des algorithmes) {"\u2022"} Mois 2 : Performance a 80% (optimisation en cours) {"\u2022"} Mois 3+ : Performance a 100% (campagnes optimisees)
        </Text>
      </View>

      <View style={{ flex: 1 }} />
      <AgencyFooterLine />
    </Page>
  );
}

// ===== PAGE 3: PROJECTION SUMMARIES + METHODOLOGY =====
function PageProjections({ data }: { data: AdsProjectionResult }) {
  return (
    <Page size="A4" style={base.page}>
      <Sh n="2" t="Projections cumulees" />

      <View style={{ flexDirection: "row", marginBottom: 14 }}>
        {data.projections.map((proj, i) => {
          const isLast = i === data.projections.length - 1;

          return (
            <View key={i} style={[base.card, { flex: 1, marginRight: isLast ? 0 : 8, padding: 14, borderTopWidth: 3, borderTopColor: i === 0 ? c.accent : i === 1 ? c.accent2 : c.green }]}>
              <Text style={{ fontSize: 14, fontWeight: "bold", color: c.white, textAlign: "center", marginBottom: 10 }}>
                {proj.months} mois
              </Text>

              {[
                { label: "Investissement total", value: formatEur(proj.investment), color: c.text },
                { label: "Leads generes", value: formatNum(proj.leads), color: c.accent2 },
                { label: "CA estime", value: formatEur(proj.revenue), color: c.green },
                { label: "ROAS", value: `${proj.roas}x`, color: gradeColor(data.grade) },
                { label: "Profit net", value: `${proj.profit >= 0 ? "+" : ""}${formatEur(proj.profit)}`, color: proj.profit >= 0 ? c.green : c.red },
              ].map((item, j) => (
                <View key={j} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 4, borderBottomWidth: j < 4 ? 1 : 0, borderBottomColor: "rgba(255,255,255,0.05)" }}>
                  <Text style={{ fontSize: 7, color: c.text3 }}>{item.label}</Text>
                  <Text style={{ fontSize: 9, fontWeight: "bold", color: item.color }}>{item.value}</Text>
                </View>
              ))}
            </View>
          );
        })}
      </View>

      {/* Methodology */}
      <Sh n="3" t="Methodologie" />
      <View style={base.card}>
        <View style={base.cardH}>
          <Text style={base.cardT}>Comment sont calculees ces projections ?</Text>
        </View>

        {[
          {
            title: "Donnees sectorielles",
            desc: `Les benchmarks utilises (CPC: ${formatEur(data.cpc)}, CTR: ${(data.ctr * 100).toFixed(1)}%, Taux de conversion: ${(data.conversionRate * 100).toFixed(1)}%) proviennent de moyennes du marche francais pour le secteur "${data.sectorLabel}".`,
          },
          {
            title: "Courbe d'apprentissage",
            desc: "Les plateformes publicitaires (Google/Meta) necessitent une periode d'apprentissage. Les performances du mois 1 sont estimees a 60%, mois 2 a 80%, puis 100% a partir du mois 3.",
          },
          {
            title: "Formule de calcul",
            desc: "Clics = Budget / CPC. Leads = Clics x CTR x Taux de conversion. CA = Leads x Panier moyen. ROAS = CA / Budget. Les valeurs reelles peuvent varier selon la qualite des campagnes.",
          },
          {
            title: "Avertissement",
            desc: "Ces projections sont des estimations basees sur des moyennes sectorielles. Les resultats reels dependent de la qualite des annonces, du ciblage, de la landing page et de la concurrence locale.",
          },
        ].map((item, i) => (
          <View key={i} style={{ marginBottom: i < 3 ? 8 : 0 }}>
            <Text style={{ fontSize: 9, fontWeight: "bold", color: c.accent2, marginBottom: 2 }}>{item.title}</Text>
            <Text style={{ fontSize: 7, color: c.text2, lineHeight: 1.5 }}>{item.desc}</Text>
          </View>
        ))}
      </View>

      <View style={{ flex: 1 }} />
      <AgencyFooterLine />
    </Page>
  );
}

// ===== PAGE 4: ACTION PLAN + CTA =====
function PageAction({ data }: { data: AdsProjectionResult }) {
  const date = new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

  return (
    <Page size="A4" style={base.page}>
      <Sh n="4" t="Plan d'action recommande" />

      {/* Timeline steps */}
      {[
        {
          phase: "Mois 1 — Setup & Lancement",
          color: c.accent,
          items: [
            "Audit de votre site web et landing pages",
            "Creation du compte publicitaire et configuration du tracking",
            `Definition des audiences cibles pour ${data.sectorLabel}${data.city ? ` a ${data.city}` : ""}`,
            "Creation des premieres campagnes et annonces",
            "Mise en place du suivi des conversions (Google Analytics, Pixel Meta)",
            `Budget initial recommande : ${formatEur(data.budgetMonthly)}/mois`,
          ],
        },
        {
          phase: "Mois 2 — Optimisation",
          color: c.accent2,
          items: [
            "Analyse des premieres donnees de performance",
            "Optimisation des mots-cles et audiences",
            "A/B testing des annonces (titres, descriptions, visuels)",
            "Ajustement des encheres et du ciblage geographique",
            "Exclusion des recherches non pertinentes",
            "Performance attendue : ~80% du potentiel",
          ],
        },
        {
          phase: "Mois 3+ — Scaling",
          color: c.green,
          items: [
            "Campagnes a plein regime avec algorithmes optimises",
            "Lancement de campagnes de remarketing",
            "Extension vers de nouvelles audiences similaires",
            `Objectif : ${data.monthlyLeads} leads/mois, ${formatEur(data.monthlyRevenue)} de CA`,
            "Rapports de performance mensuels detailles",
            "Augmentation progressive du budget si ROAS positif",
          ],
        },
      ].map((step, i) => (
        <View key={i} style={[base.tl, { borderLeftColor: step.color, marginBottom: 8 }]}>
          <Text style={[base.tlt, { color: step.color }]}>{step.phase}</Text>
          {step.items.map((item, j) => (
            <Text key={j} style={base.tlp}>{"\u2022"} {item}</Text>
          ))}
        </View>
      ))}

      <View style={{ marginTop: 6 }} />

      {/* CTA */}
      <View style={{ backgroundColor: "#1a1040", borderRadius: 10, borderWidth: 1, borderColor: c.accent, padding: 18, textAlign: "center", marginTop: 8, alignItems: "center" }}>
        <Text style={{ fontSize: 14, fontWeight: "bold", color: c.white, marginBottom: 4, textAlign: "center", lineHeight: 1.2 }}>
          On gere vos campagnes publicitaires
        </Text>
        <Text style={{ fontSize: 8, color: c.text2, marginBottom: 10, textAlign: "center" }}>
          Confiez vos campagnes Google Ads et Meta Ads a notre equipe. 1ere consultation gratuite.
        </Text>
        <Link src="https://convertilab.com/contact" style={{ backgroundColor: c.accent, color: c.white, paddingVertical: 7, paddingHorizontal: 20, borderRadius: 7, fontSize: 9, fontWeight: "bold", textDecoration: "none" }}>
          Prendre rendez-vous gratuit
        </Link>
        <View style={{ height: 6 }} />
        <Text style={{ fontSize: 6, color: c.text3, textAlign: "center" }}>
          convertilab.com {"\u2022"} 06 16 47 72 45 {"\u2022"} contact@convertilab.com
        </Text>
      </View>

      <View style={{ flex: 1 }} />
      <FooterSection date={date} />
    </Page>
  );
}

// ===== MAIN DOCUMENT =====
export function AdsEstimatorPdf({ data }: { data: AdsProjectionResult }) {
  return (
    <Document>
      <PageCover data={data} />
      <PageTable data={data} />
      <PageProjections data={data} />
      <PageAction data={data} />
    </Document>
  );
}
