import React from "react";
import { Document, Font, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { SITE } from "@/lib/constants";
import type { Diagnostic, ResultatDiagnostic } from "./types";

const c = {
  texte: "#1a1a2e",
  texte2: "#4a4a6a",
  texte3: "#8888aa",
  accent: "#6c5ce7",
  bord: "#e0e0ea",
  carte: "#f8f8fc",
  blanc: "#ffffff",
  vert: "#22c55e",
  orange: "#f97316",
  rouge: "#ef4444",
};

const s = StyleSheet.create({
  page: { backgroundColor: c.blanc, padding: 44, fontFamily: "Helvetica", color: c.texte, fontSize: 10, lineHeight: 1.55 },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: c.accent,
    color: c.blanc,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
    fontSize: 8,
    fontWeight: "bold",
    letterSpacing: 1.5,
    textTransform: "uppercase" as const,
    marginBottom: 12,
  },
  titre: { fontSize: 22, fontWeight: "bold", lineHeight: 1.2, marginBottom: 6 },
  sousTitre: { fontSize: 11, color: c.texte2, marginBottom: 18 },
  scoreBloc: { flexDirection: "row" as const, alignItems: "center", backgroundColor: c.carte, borderWidth: 1, borderColor: c.bord, borderRadius: 12, padding: 16, marginBottom: 16 },
  scoreCercle: { width: 64, height: 64, borderRadius: 32, alignItems: "center", justifyContent: "center", marginRight: 16 },
  scoreTexte: { color: c.blanc, fontSize: 20, fontWeight: "bold" },
  verdictTitre: { fontSize: 14, fontWeight: "bold", marginBottom: 4 },
  verdictTexte: { fontSize: 10, color: c.texte2, flexShrink: 1 },
  h2: { fontSize: 13, fontWeight: "bold", marginTop: 8, marginBottom: 8 },
  axe: { marginBottom: 8 },
  axeEntete: { flexDirection: "row" as const, justifyContent: "space-between", marginBottom: 3, fontSize: 10 },
  barreFond: { height: 6, borderRadius: 3, backgroundColor: c.bord },
  barre: { height: 6, borderRadius: 3 },
  conseil: { flexDirection: "row" as const, marginBottom: 8 },
  conseilNumero: { width: 20, height: 20, borderRadius: 10, backgroundColor: c.accent, color: c.blanc, fontSize: 9, fontWeight: "bold", textAlign: "center", paddingTop: 5, marginRight: 8, lineHeight: 1 },
  conseilTitre: { fontSize: 11, fontWeight: "bold" },
  conseilTexte: { fontSize: 10, color: c.texte2 },
  atout: { fontSize: 10, color: c.texte2, marginBottom: 2 },
  reponse: { flexDirection: "row" as const, marginBottom: 3, fontSize: 9 },
  reponseQ: { width: "58%", color: c.texte2, paddingRight: 8 },
  reponseR: { width: "42%", fontWeight: "bold" },
  fin: { marginTop: 14, backgroundColor: c.carte, borderWidth: 1, borderColor: c.bord, borderRadius: 10, padding: 14 },
  lien: { fontSize: 10, color: c.accent, textDecoration: "none", marginTop: 2 },
  pied: { position: "absolute" as const, bottom: 22, left: 44, right: 44, flexDirection: "row" as const, justifyContent: "space-between", fontSize: 8, color: c.texte3 },
});

Font.registerHyphenationCallback((mot) => [mot]);

/** Espace insécable avant « ? », « ! » et « : » : le signe ne part plus seul à la ligne. */
function insecable(t: string) {
  return t.replace(/ ([?!:;])/g, "\u00a0$1");
}

function couleurScore(score: number) {
  return score >= 70 ? c.vert : score >= 40 ? c.orange : c.rouge;
}

/**
 * Rapport complet d'un diagnostic : score et verdict, score par axe,
 * toutes les recommandations classées, ce qui est déjà en place, le rappel
 * des réponses, puis quoi faire ensuite. Pour un diagnostic « calcul »,
 * `resume` remplace les réponses.
 */
export function RapportDiagnosticPdf({
  diagnostic,
  resultat,
  prenom,
  resume,
}: {
  diagnostic: Diagnostic;
  resultat: ResultatDiagnostic | null;
  prenom: string;
  resume?: string[];
}) {
  const date = new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  return (
    <Document title={`${diagnostic.titre} : votre rapport`} author={SITE.name} language="fr">
      <Page size="A4" style={s.page}>
        <Text style={s.badge}>ConvertiLab · Rapport personnalisé</Text>
        <Text style={s.titre}>{insecable(diagnostic.titre)}</Text>
        <Text style={s.sousTitre}>
          Rapport préparé pour {prenom} le {date}, d&apos;après vos réponses.
        </Text>

        {resultat && (
          <>
            <View style={s.scoreBloc}>
              <View style={[s.scoreCercle, { backgroundColor: couleurScore(resultat.score) }]}>
                <Text style={s.scoreTexte}>{resultat.score}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={s.verdictTitre}>{resultat.verdict.titre}</Text>
                <Text style={s.verdictTexte}>{resultat.verdict.texte}</Text>
              </View>
            </View>

            <Text style={s.h2}>Votre score par axe</Text>
            {resultat.axes.map((a) => (
              <View key={a.id} style={s.axe}>
                <View style={s.axeEntete}>
                  <Text>{a.label}</Text>
                  <Text style={{ fontWeight: "bold" }}>{a.score} / 100</Text>
                </View>
                <View style={s.barreFond}>
                  <View style={[s.barre, { width: `${Math.max(3, a.score)}%`, backgroundColor: couleurScore(a.score) }]} />
                </View>
              </View>
            ))}

            {resultat.conseils.length > 0 && (
              <>
                <Text style={s.h2}>Vos priorités, dans l&apos;ordre</Text>
                {resultat.conseils.map((co, i) => (
                  <View key={i} style={s.conseil} wrap={false}>
                    <Text style={s.conseilNumero}>{i + 1}</Text>
                    <View style={{ flex: 1 }}>
                      <Text style={s.conseilTitre}>{co.titre}</Text>
                      <Text style={s.conseilTexte}>{co.texte}</Text>
                    </View>
                  </View>
                ))}
              </>
            )}

            {resultat.atouts.length > 0 && (
              <>
                <Text style={s.h2}>Ce qui est déjà en place</Text>
                {resultat.atouts.map((a, i) => (
                  <Text key={i} style={s.atout}>
                    · {a}
                  </Text>
                ))}
              </>
            )}

            <Text style={s.h2}>Vos réponses</Text>
            {resultat.reponses.map((r, i) => (
              <View key={i} style={s.reponse} wrap={false}>
                <Text style={s.reponseQ}>{r.question}</Text>
                <Text style={s.reponseR}>{r.reponse}</Text>
              </View>
            ))}
          </>
        )}

        {resume && resume.length > 0 && (
          <>
            <Text style={s.h2}>Votre résultat</Text>
            {resume.map((ligne, i) => (
              <Text key={i} style={s.atout}>
                · {ligne}
              </Text>
            ))}
          </>
        )}

        <View style={s.fin} wrap={false}>
          <Text style={s.verdictTitre}>Et maintenant ?</Text>
          <Text style={s.conseilTexte}>
            Commencez par la première priorité : c&apos;est celle qui pèse le plus dans votre score. Si vous voulez que nous le
            fassions avec vous, trente minutes suffisent pour savoir par où commencer, sans engagement.
          </Text>
          <Link src={SITE.calendly} style={s.lien}>
            Réserver 30 minutes avec le fondateur : {SITE.calendly}
          </Link>
          <Link src={SITE.url} style={s.lien}>
            {SITE.url.replace("https://", "")} · {SITE.phoneDisplay}
          </Link>
        </View>

        <View style={s.pied} fixed>
          <Text>ConvertiLab · Rueil-Malmaison (92) · {SITE.url.replace("https://", "")}</Text>
          <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
        </View>
      </Page>
    </Document>
  );
}
