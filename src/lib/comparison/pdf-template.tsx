import React from "react";
import { Document, Page, Text, View, Link } from "@react-pdf/renderer";
import {
  base, c, sc, CoverSection, FooterSection, AgencyFooterLine, Sh,
} from "@/lib/tools/shared-pdf-styles";
import type { ComparisonResult } from "./comparator";

function ScoreSideBySide({ result }: { result: ComparisonResult }) {
  const aWins = result.winner === "A";
  const bWins = result.winner === "B";
  const tie = result.winner === "tie";

  return (
    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 16, backgroundColor: c.card, borderRadius: 12, borderWidth: 1, borderColor: c.border, marginBottom: 12 }}>
      {/* Site A */}
      <View style={{ alignItems: "center", flex: 1 }}>
        <Text style={{ fontSize: 8, color: c.text2, marginBottom: 4 }}>{result.siteA.domain}</Text>
        <Text style={{ fontSize: 36, fontWeight: "bold", color: aWins || tie ? sc(result.siteA.scores.global) : c.text3, lineHeight: 1.1 }}>
          {result.siteA.scores.global}
        </Text>
        <View style={{ height: 4 }} />
        <Text style={{ fontSize: 9, color: c.text2 }}>/100</Text>
        <View style={{ height: 4 }} />
        <Text style={{ fontSize: 14, fontWeight: "bold", color: aWins || tie ? sc(result.siteA.scores.global) : c.text3 }}>
          {result.siteA.grade}
        </Text>
        {aWins && (
          <Text style={{ fontSize: 7, fontWeight: "bold", backgroundColor: "rgba(34,197,94,0.2)", color: c.green, paddingVertical: 2, paddingHorizontal: 8, borderRadius: 6, marginTop: 6 }}>
            GAGNANT
          </Text>
        )}
      </View>

      {/* VS */}
      <View style={{ alignItems: "center", marginLeft: 16, marginRight: 16 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: c.accent2 }}>VS</Text>
        {tie && (
          <Text style={{ fontSize: 7, fontWeight: "bold", color: c.yellow, marginTop: 4 }}>EGALITE</Text>
        )}
      </View>

      {/* Site B */}
      <View style={{ alignItems: "center", flex: 1 }}>
        <Text style={{ fontSize: 8, color: c.text2, marginBottom: 4 }}>{result.siteB.domain}</Text>
        <Text style={{ fontSize: 36, fontWeight: "bold", color: bWins || tie ? sc(result.siteB.scores.global) : c.text3, lineHeight: 1.1 }}>
          {result.siteB.scores.global}
        </Text>
        <View style={{ height: 4 }} />
        <Text style={{ fontSize: 9, color: c.text2 }}>/100</Text>
        <View style={{ height: 4 }} />
        <Text style={{ fontSize: 14, fontWeight: "bold", color: bWins || tie ? sc(result.siteB.scores.global) : c.text3 }}>
          {result.siteB.grade}
        </Text>
        {bWins && (
          <Text style={{ fontSize: 7, fontWeight: "bold", backgroundColor: "rgba(34,197,94,0.2)", color: c.green, paddingVertical: 2, paddingHorizontal: 8, borderRadius: 6, marginTop: 6 }}>
            GAGNANT
          </Text>
        )}
      </View>
    </View>
  );
}

function ComparisonTable({ result }: { result: ComparisonResult }) {
  return (
    <View style={[base.card, { marginBottom: 12 }]}>
      {/* Header */}
      <View style={[base.tr, { borderBottomColor: c.border, paddingBottom: 6, marginBottom: 4 }]}>
        <Text style={{ flex: 2, fontSize: 8, fontWeight: "bold", color: c.text }}>Categorie</Text>
        <Text style={{ flex: 1, fontSize: 8, fontWeight: "bold", color: c.text, textAlign: "center" }}>{result.siteA.domain}</Text>
        <Text style={{ flex: 1, fontSize: 8, fontWeight: "bold", color: c.text, textAlign: "center" }}>{result.siteB.domain}</Text>
        <Text style={{ width: 50, fontSize: 8, fontWeight: "bold", color: c.text, textAlign: "center" }}>Ecart</Text>
      </View>

      {/* Rows */}
      {result.categories.map((cat, i) => {
        const aColor = cat.winner === "A" ? c.green : cat.winner === "tie" ? c.yellow : c.red;
        const bColor = cat.winner === "B" ? c.green : cat.winner === "tie" ? c.yellow : c.red;

        return (
          <View key={i} style={[base.tr, { paddingVertical: 5, alignItems: "center" }]}>
            <Text style={{ flex: 2, fontSize: 8, color: c.text }}>{cat.name}</Text>
            <Text style={{ flex: 1, fontSize: 10, fontWeight: "bold", color: aColor, textAlign: "center" }}>{cat.scoreA}</Text>
            <Text style={{ flex: 1, fontSize: 10, fontWeight: "bold", color: bColor, textAlign: "center" }}>{cat.scoreB}</Text>
            <View style={{ width: 50, alignItems: "center" }}>
              {cat.winner !== "tie" ? (
                <Text style={{ fontSize: 7, color: c.text2, backgroundColor: "rgba(255,255,255,0.05)", paddingVertical: 1, paddingHorizontal: 6, borderRadius: 4 }}>
                  {cat.winner === "A" ? `+${cat.gap}` : `-${cat.gap}`}
                </Text>
              ) : (
                <Text style={{ fontSize: 7, color: c.yellow }}>Egal</Text>
              )}
            </View>
          </View>
        );
      })}

      {/* Overall */}
      <View style={{ flexDirection: "row", alignItems: "center", borderTopWidth: 1, borderTopColor: c.border, paddingTop: 8, marginTop: 6 }}>
        <Text style={{ flex: 2, fontSize: 10, fontWeight: "bold", color: c.accent2 }}>Score Global</Text>
        <Text style={{ flex: 1, fontSize: 14, fontWeight: "bold", color: sc(result.siteA.scores.global), textAlign: "center" }}>{result.siteA.scores.global}</Text>
        <Text style={{ flex: 1, fontSize: 14, fontWeight: "bold", color: sc(result.siteB.scores.global), textAlign: "center" }}>{result.siteB.scores.global}</Text>
        <View style={{ width: 50, alignItems: "center" }}>
          <Text style={{ fontSize: 7, fontWeight: "bold", color: result.winner === "A" ? c.green : result.winner === "B" ? c.green : c.yellow }}>
            {result.winner === "tie" ? "Egal" : result.winner === "A" ? `A +${Math.abs(result.siteA.scores.global - result.siteB.scores.global)}` : `B +${Math.abs(result.siteA.scores.global - result.siteB.scores.global)}`}
          </Text>
        </View>
      </View>
    </View>
  );
}

function SiteDetails({ label, site }: { label: string; site: ComparisonResult["siteA"] }) {
  return (
    <View style={[base.card, { marginBottom: 10 }]}>
      <View style={base.cardH}>
        <Text style={base.cardT}>{label} — {site.domain}</Text>
        <Text style={{ fontSize: 14, fontWeight: "bold", color: sc(site.scores.global) }}>{site.scores.global}/100</Text>
      </View>

      {/* Strengths */}
      <View style={{ marginBottom: 8 }}>
        <Text style={{ fontSize: 9, fontWeight: "bold", color: c.green, marginBottom: 4 }}>Points Forts</Text>
        {site.strengths.slice(0, 3).map((s, i) => (
          <Text key={i} style={{ fontSize: 7, color: c.text2, marginBottom: 2 }}>{"\u2713"} {s}</Text>
        ))}
      </View>

      {/* Issues */}
      <View>
        <Text style={{ fontSize: 9, fontWeight: "bold", color: c.red, marginBottom: 4 }}>A Corriger</Text>
        {site.issues.slice(0, 3).map((issue, i) => (
          <Text key={i} style={{ fontSize: 7, color: c.text2, marginBottom: 2 }}>{"\u2717"} {issue}</Text>
        ))}
      </View>
    </View>
  );
}

export function ComparisonPdf({ result }: { result: ComparisonResult }) {
  const date = new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  const winsA = result.categories.filter((c) => c.winner === "A").length;
  const winsB = result.categories.filter((c) => c.winner === "B").length;

  return (
    <Document>
      {/* PAGE 1: Cover + Score Hero */}
      <Page size="A4" style={base.page}>
        <CoverSection
          badge="COMPARATIF SEO"
          title="Votre Site vs La Concurrence"
          subtitle={`${result.siteA.domain} vs ${result.siteB.domain}`}
          date={`Comparaison realisee le ${date}`}
        />

        <ScoreSideBySide result={result} />

        {/* Winner summary */}
        <View style={{ backgroundColor: c.card, borderRadius: 8, borderWidth: 1, borderColor: c.border, padding: 12, textAlign: "center", alignItems: "center" }}>
          {result.winner === "tie" ? (
            <>
              <Text style={{ fontSize: 11, fontWeight: "bold", color: c.yellow }}>Egalite</Text>
              <View style={{ height: 4 }} />
              <Text style={{ fontSize: 8, color: c.text2 }}>Les deux sites obtiennent le meme score global.</Text>
            </>
          ) : (
            <>
              <Text style={{ fontSize: 11, fontWeight: "bold", color: c.green }}>
                {result.winner === "A" ? result.siteA.domain : result.siteB.domain} remporte le comparatif
              </Text>
              <View style={{ height: 4 }} />
              <Text style={{ fontSize: 8, color: c.text2 }}>
                {winsA > winsB ? result.siteA.domain : result.siteB.domain} gagne {Math.max(winsA, winsB)} categories sur {result.categories.length}
              </Text>
            </>
          )}
        </View>

        <AgencyFooterLine />
      </Page>

      {/* PAGE 2: Category comparison table */}
      <Page size="A4" style={base.page}>
        <Sh n="1" t="Comparaison Categorie par Categorie" />
        <ComparisonTable result={result} />

        {/* Category winners summary */}
        <View style={[base.card]}>
          <Text style={{ fontSize: 10, fontWeight: "bold", marginBottom: 8 }}>Resume des Categories</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {result.categories.map((cat, i) => (
              <View key={i} style={{ width: "48%", flexDirection: "row", alignItems: "center", marginBottom: 4, marginRight: "2%" }}>
                <Text style={{ fontSize: 7, fontWeight: "bold", color: cat.winner === "A" ? c.green : cat.winner === "B" ? c.red : c.yellow, width: 10 }}>
                  {cat.winner === "A" ? "\u2713" : cat.winner === "B" ? "\u2717" : "="}
                </Text>
                <Text style={{ fontSize: 7, color: c.text2, flex: 1 }}>{cat.name}: {cat.scoreA} vs {cat.scoreB}</Text>
              </View>
            ))}
          </View>
        </View>

        <FooterSection date={date} />
      </Page>

      {/* PAGE 3: Site details */}
      <Page size="A4" style={base.page}>
        <Sh n="2" t="Analyse Detaillee des Sites" />
        <SiteDetails label="Site A" site={result.siteA} />
        <SiteDetails label="Site B" site={result.siteB} />
        <FooterSection date={date} />
      </Page>

      {/* PAGE 4: Recommendations + CTA */}
      <Page size="A4" style={base.page}>
        <Sh n="3" t="Recommandations" />

        <View style={[base.card, { marginBottom: 12, borderLeftWidth: 3, borderLeftColor: c.accent }]}>
          <Text style={{ fontSize: 11, fontWeight: "bold", color: c.accent2, marginBottom: 8 }}>Actions Prioritaires</Text>

          {result.winner === "B" || result.winner === "tie" ? (
            <>
              <Text style={{ fontSize: 8, color: c.text2, marginBottom: 8, lineHeight: 1.5 }}>
                {result.winner === "B"
                  ? `Votre concurrent (${result.siteB.domain}) obtient un meilleur score. Voici comment rattraper et depasser la concurrence :`
                  : `Les deux sites sont au coude-a-coude. Quelques optimisations peuvent faire la difference :`}
              </Text>
              {result.categories
                .filter((cat) => cat.winner === "B" || cat.winner === "tie")
                .slice(0, 5)
                .map((cat, i) => (
                  <View key={i} style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 6 }}>
                    <Text style={{ fontSize: 8, fontWeight: "bold", color: c.accent, marginRight: 8 }}>{i + 1}.</Text>
                    <View style={{ flex: 1 }}>
                      <Text style={{ fontSize: 8, fontWeight: "bold", color: c.text }}>{cat.name}</Text>
                      <Text style={{ fontSize: 7, color: c.text2, lineHeight: 1.4 }}>
                        Vous etes a {cat.scoreA}/100 contre {cat.scoreB}/100. {cat.gap > 0 ? `Ecart de ${cat.gap} points a combler.` : "Marge d'amelioration disponible."}
                      </Text>
                    </View>
                  </View>
                ))}
            </>
          ) : (
            <>
              <Text style={{ fontSize: 8, color: c.text2, marginBottom: 8, lineHeight: 1.5 }}>
                Votre site ({result.siteA.domain}) est en tete. Voici comment consolider votre avantage :
              </Text>
              {result.categories
                .filter((cat) => cat.winner === "B" || cat.gap < 10)
                .slice(0, 3)
                .map((cat, i) => (
                  <View key={i} style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 6 }}>
                    <Text style={{ fontSize: 8, fontWeight: "bold", color: c.accent, marginRight: 8 }}>{i + 1}.</Text>
                    <View style={{ flex: 1 }}>
                      <Text style={{ fontSize: 8, fontWeight: "bold", color: c.text }}>{cat.name}</Text>
                      <Text style={{ fontSize: 7, color: c.text2, lineHeight: 1.4 }}>
                        Score actuel : {cat.scoreA}/100. {cat.winner === "B" ? `Votre concurrent vous devance ici (${cat.scoreB}/100).` : "Continuez a optimiser cette categorie."}
                      </Text>
                    </View>
                  </View>
                ))}

              {/* Also show areas of strength to maintain */}
              <View style={{ marginTop: 8 }}>
                <Text style={{ fontSize: 8, fontWeight: "bold", color: c.green, marginBottom: 4 }}>Vos avantages a maintenir</Text>
                {result.categories
                  .filter((cat) => cat.winner === "A" && cat.gap >= 10)
                  .slice(0, 3)
                  .map((cat, i) => (
                    <Text key={i} style={{ fontSize: 7, color: c.text2, marginBottom: 2 }}>
                      {"\u2713"} {cat.name}: +{cat.gap} points d&apos;avance
                    </Text>
                  ))}
              </View>
            </>
          )}
        </View>

        {/* CTA */}
        <View style={{ backgroundColor: "#1a1040", borderRadius: 10, borderWidth: 1, borderColor: c.accent, padding: 18, textAlign: "center", marginTop: 8, alignItems: "center" }}>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: c.white, marginBottom: 4, textAlign: "center", lineHeight: 1.2 }}>
            {result.winner === "B"
              ? "On vous met au niveau de votre concurrent — ou au-dessus"
              : "Consolidez votre avantage concurrentiel"}
          </Text>
          <View style={{ height: 4 }} />
          <Text style={{ fontSize: 8, color: c.text2, marginBottom: 10, textAlign: "center" }}>
            L&apos;equipe ConvertiLab peut prendre en charge toutes les optimisations identifiees.
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
