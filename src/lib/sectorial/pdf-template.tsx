import React from "react";
import { Document, Page, Text, View, Link } from "@react-pdf/renderer";
import {
  base, c, CoverSection, FooterSection, Sh, AgencyFooterLine,
} from "@/lib/tools/shared-pdf-styles";
import type { SectorReportResult } from "./report";

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <View style={{ width: "31%", backgroundColor: c.card, borderRadius: 8, borderWidth: 1, borderColor: c.border, padding: 10, alignItems: "center", marginBottom: 6, marginRight: "2%" }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", color: c.accent2, lineHeight: 1.2 }}>{value}</Text>
      <View style={{ height: 4 }} />
      <Text style={{ fontSize: 6, color: c.text2, textAlign: "center", lineHeight: 1.3 }}>{label}</Text>
    </View>
  );
}

function BulletItem({ text, icon }: { text: string; icon?: string }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 4 }}>
      <Text style={{ fontSize: 8, color: c.accent2, marginRight: 6, width: 10 }}>{icon || "\u2022"}</Text>
      <Text style={{ fontSize: 8, color: c.text2, flex: 1, lineHeight: 1.4 }}>{text}</Text>
    </View>
  );
}

function ChecklistItem({ item, essential }: { item: string; essential: boolean }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 4, paddingVertical: 2 }}>
      <Text style={{ fontSize: 8, marginRight: 6, width: 12 }}>{essential ? "\u2610" : "\u2610"}</Text>
      <Text style={{ fontSize: 7, color: c.text, flex: 1, lineHeight: 1.4 }}>{item}</Text>
      <Text style={[
        {
          fontSize: 6, fontWeight: "bold", paddingVertical: 1, paddingHorizontal: 6, borderRadius: 6,
        },
        essential
          ? { backgroundColor: "rgba(108,92,231,0.2)", color: c.accent2 }
          : { backgroundColor: "rgba(136,136,170,0.15)", color: c.text2 },
      ]}>
        {essential ? "ESSENTIEL" : "RECOMMANDE"}
      </Text>
    </View>
  );
}

export function SectorReportPdf({ report }: { report: SectorReportResult }) {
  const date = new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

  return (
    <Document>
      {/* PAGE 1: Cover + Stats */}
      <Page size="A4" style={base.page}>
        <CoverSection
          badge="RAPPORT SECTORIEL"
          title="L'etat du Digital"
          subtitle={`${report.sector.emoji} ${report.sector.name}`}
          date={`Rapport genere le ${date}`}
        />

        {/* Sector description */}
        <View style={[base.card, { marginBottom: 14 }]}>
          <Text style={{ fontSize: 10, color: c.text, lineHeight: 1.5 }}>
            {report.sector.description}
          </Text>
        </View>

        {/* Key stats */}
        <Sh n="1" t="Chiffres Cles du Secteur" />
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {report.stats.map((stat, i) => (
            <StatCard key={i} value={stat.value} label={stat.label} />
          ))}
        </View>

        <AgencyFooterLine />
      </Page>

      {/* PAGE 2: Diagnostic — Pain Points + Common Mistakes */}
      <Page size="A4" style={base.page}>
        <Sh n="2" t="Diagnostic du Secteur" />

        {/* Pain Points */}
        <View style={[base.card, { marginBottom: 10 }]}>
          <View style={base.cardH}>
            <Text style={base.cardT}>Problemes Frequents</Text>
            <Text style={{ fontSize: 7, color: c.red, fontWeight: "bold" }}>{report.painPoints.length} points identifies</Text>
          </View>
          {report.painPoints.map((pp, i) => (
            <View key={i} style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 6, paddingLeft: 4 }}>
              <Text style={{ fontSize: 10, color: c.red, marginRight: 8, width: 14 }}>{"\u2717"}</Text>
              <Text style={{ fontSize: 9, color: c.text, flex: 1, lineHeight: 1.4 }}>{pp}</Text>
            </View>
          ))}
        </View>

        {/* Common Mistakes */}
        <View style={[base.card, { borderLeftWidth: 3, borderLeftColor: c.orange }]}>
          <View style={base.cardH}>
            <Text style={base.cardT}>Erreurs les Plus Courantes</Text>
            <Text style={{ fontSize: 7, color: c.orange, fontWeight: "bold" }}>A EVITER</Text>
          </View>
          {report.commonMistakes.map((mistake, i) => (
            <View key={i} style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 6, paddingLeft: 4 }}>
              <Text style={{ fontSize: 9, fontWeight: "bold", color: c.orange, marginRight: 8 }}>{i + 1}.</Text>
              <Text style={{ fontSize: 8, color: c.text2, flex: 1, lineHeight: 1.4 }}>{mistake}</Text>
            </View>
          ))}
        </View>

        <FooterSection date={date} />
      </Page>

      {/* PAGE 3: Solutions Recommandees */}
      <Page size="A4" style={base.page}>
        <Sh n="3" t="Solutions Recommandees" />

        {/* Solutions */}
        {report.solutions.map((sol, i) => (
          <View key={i} style={[base.card, { borderLeftWidth: 3, borderLeftColor: c.accent, marginBottom: 8 }]}>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}>
              <Text style={{ fontSize: 9, fontWeight: "bold", color: c.accent2, marginRight: 6 }}>{"\u2713"}</Text>
              <Text style={{ fontSize: 10, fontWeight: "bold", color: c.text }}>{sol.title}</Text>
            </View>
            <Text style={{ fontSize: 8, color: c.text2, lineHeight: 1.4, paddingLeft: 16 }}>{sol.description}</Text>
          </View>
        ))}

        {/* Features */}
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 12, fontWeight: "bold", marginBottom: 8 }}>Fonctionnalites Essentielles</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {report.features.map((feat, i) => (
              <View key={i} style={{ width: "48%", marginBottom: 4, marginRight: "2%" }}>
                <BulletItem text={feat} icon={"\u2713"} />
              </View>
            ))}
          </View>
        </View>

        <FooterSection date={date} />
      </Page>

      {/* PAGE 4: Checklist Digitale + Process */}
      <Page size="A4" style={base.page}>
        <Sh n="4" t="Checklist Digitale" />

        <View style={[base.card, { marginBottom: 12 }]}>
          <View style={base.cardH}>
            <Text style={base.cardT}>Votre Presence en Ligne</Text>
            <Text style={{ fontSize: 7, color: c.accent2 }}>{report.checklist.filter(ci => ci.essential).length} essentiels / {report.checklist.length} total</Text>
          </View>
          {report.checklist.map((item, i) => (
            <ChecklistItem key={i} item={item.item} essential={item.essential} />
          ))}
        </View>

        {/* Process Steps */}
        <Text style={{ fontSize: 12, fontWeight: "bold", marginBottom: 8, marginTop: 4 }}>Notre Processus</Text>
        <View>
          {report.process.map((step, i) => (
            <View key={i} style={[base.tl, { marginBottom: 6 }]}>
              <Text style={base.tlt}>Etape {i + 1} — {step.title}</Text>
              <Text style={base.tlp}>{step.description}</Text>
            </View>
          ))}
        </View>

        <FooterSection date={date} />
      </Page>

      {/* PAGE 5: Etude de Cas + FAQ */}
      <Page size="A4" style={base.page}>
        {report.caseStudy && (
          <>
            <Sh n="5" t="Etude de Cas" />
            <View style={[base.card, { borderLeftWidth: 3, borderLeftColor: c.green, marginBottom: 14 }]}>
              <Text style={{ fontSize: 12, fontWeight: "bold", color: c.green, marginBottom: 8 }}>{report.caseStudy.client}</Text>

              <View style={{ backgroundColor: "rgba(34,197,94,0.05)", borderRadius: 6, padding: 10, marginBottom: 8 }}>
                <Text style={{ fontSize: 9, color: c.text, fontStyle: "italic", lineHeight: 1.5 }}>
                  &quot;{report.caseStudy.quote}&quot;
                </Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 8, color: c.green, fontWeight: "bold", marginRight: 6 }}>RESULTAT :</Text>
                <Text style={{ fontSize: 8, color: c.text2 }}>{report.caseStudy.result}</Text>
              </View>
            </View>
          </>
        )}

        {/* FAQ */}
        <Sh n={report.caseStudy ? "6" : "5"} t="Questions Frequentes" />
        {report.faqItems.slice(0, 4).map((faq, i) => (
          <View key={i} style={[base.cardCompact, { marginBottom: 6 }]}>
            <Text style={{ fontSize: 9, fontWeight: "bold", color: c.accent2, marginBottom: 4, lineHeight: 1.3 }}>{faq.question}</Text>
            <Text style={{ fontSize: 7, color: c.text2, lineHeight: 1.5 }}>{faq.answer}</Text>
          </View>
        ))}

        <FooterSection date={date} />
      </Page>

      {/* PAGE 6: Plan d'action + CTA */}
      <Page size="A4" style={base.page}>
        <Sh n={report.caseStudy ? "7" : "6"} t="Plan d'Action" />

        {/* Timeline */}
        <View style={[base.card, { marginBottom: 14 }]}>
          <Text style={{ fontSize: 11, fontWeight: "bold", marginBottom: 10, color: c.accent2 }}>Votre Feuille de Route Digitale</Text>

          {[
            { period: "Semaine 1-2", title: "Audit & Strategie", desc: "Analyse complete de votre presence digitale actuelle et definition de la strategie adaptee a votre secteur." },
            { period: "Semaine 3-4", title: "Conception & Design", desc: "Creation des maquettes, choix de l'identite visuelle et validation avec vous avant developpement." },
            { period: "Semaine 5-6", title: "Developpement & Contenu", desc: "Developpement du site, redaction du contenu optimise SEO, integration des fonctionnalites." },
            { period: "Semaine 7-8", title: "Lancement & Optimisation", desc: "Mise en ligne, configuration SEO local, Google Business Profile, et formation a l'utilisation." },
            { period: "Mois 2-3", title: "Suivi & Croissance", desc: "Analyse des performances, ajustements, lancement de campagnes publicitaires si necessaire." },
          ].map((step, i) => (
            <View key={i} style={{ flexDirection: "row", marginBottom: 8, paddingLeft: 4 }}>
              <View style={{ width: 70, marginRight: 10 }}>
                <Text style={{ fontSize: 7, fontWeight: "bold", color: c.accent, backgroundColor: "rgba(108,92,231,0.15)", paddingVertical: 2, paddingHorizontal: 6, borderRadius: 4, textAlign: "center" }}>{step.period}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 9, fontWeight: "bold", color: c.text, marginBottom: 2 }}>{step.title}</Text>
                <Text style={{ fontSize: 7, color: c.text2, lineHeight: 1.4 }}>{step.desc}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Custom CTA for sector report */}
        <View style={{ backgroundColor: "#1a1040", borderRadius: 10, borderWidth: 1, borderColor: c.accent, padding: 18, textAlign: "center", marginTop: 8, alignItems: "center" }}>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: c.white, marginBottom: 4, textAlign: "center", lineHeight: 1.2 }}>
            Lancez votre projet digital
          </Text>
          <View style={{ height: 4 }} />
          <Text style={{ fontSize: 8, color: c.text2, marginBottom: 10, textAlign: "center" }}>
            Consultation gratuite de 30 minutes pour definir votre strategie {report.sector.name.toLowerCase()}.
          </Text>
          <Link src="https://convertilab.com/contact" style={{ backgroundColor: c.accent, color: c.white, paddingVertical: 7, paddingHorizontal: 20, borderRadius: 7, fontSize: 9, fontWeight: "bold", textDecoration: "none" }}>
            Prendre rendez-vous gratuit
          </Link>
          <View style={{ height: 6 }} />
          <Text style={{ fontSize: 6, color: c.text3, textAlign: "center" }}>
            convertilab.com {"\u2022"} 06 16 47 72 45 {"\u2022"} contact@convertilab.com
          </Text>
        </View>

        <FooterSection date={date} />
      </Page>
    </Document>
  );
}
