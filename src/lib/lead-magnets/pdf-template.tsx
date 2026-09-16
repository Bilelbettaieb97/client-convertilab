import React from "react";
import { Document, Font, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { SITE } from "@/lib/constants";
import { FORMAT_LIBELLES, type Ressource } from "./types";

/* Même palette claire que les autres PDF du site (mentions légales) : lisible à l'impression. */
const c = {
  texte: "#1a1a2e",
  texte2: "#4a4a6a",
  texte3: "#8888aa",
  accent: "#6c5ce7",
  accent2: "#a29bfe",
  bord: "#e0e0ea",
  carte: "#f8f8fc",
  blanc: "#ffffff",
};

const s = StyleSheet.create({
  page: { backgroundColor: c.blanc, padding: 44, fontFamily: "Helvetica", color: c.texte, fontSize: 10, lineHeight: 1.55 },
  couverture: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 24 },
  badge: {
    backgroundColor: c.accent,
    color: c.blanc,
    paddingVertical: 5,
    paddingHorizontal: 14,
    borderRadius: 14,
    fontSize: 8,
    fontWeight: "bold",
    letterSpacing: 1.5,
    textTransform: "uppercase" as const,
    marginBottom: 18,
  },
  format: { fontSize: 11, color: c.accent, fontWeight: "bold", marginBottom: 10, letterSpacing: 0.5 },
  titre: { fontSize: 26, fontWeight: "bold", textAlign: "center", lineHeight: 1.2, marginBottom: 14 },
  accroche: { fontSize: 12, color: c.texte2, textAlign: "center", lineHeight: 1.5, maxWidth: 420 },
  auteur: { marginTop: 40, fontSize: 9, color: c.texte3, textAlign: "center", lineHeight: 1.5 },
  section: { marginBottom: 18 },
  sectionEntete: { flexDirection: "row" as const, alignItems: "center", marginBottom: 6 },
  sectionNumero: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: c.accent,
    color: c.blanc,
    fontSize: 9,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 1,
    paddingTop: 6,
    marginRight: 8,
  },
  sectionTitre: { fontSize: 14, fontWeight: "bold", color: c.texte, flex: 1 },
  sectionIntro: { fontSize: 10, color: c.texte2, marginBottom: 8, marginLeft: 30 },
  ligne: { flexDirection: "row" as const, alignItems: "flex-start", marginBottom: 5, marginLeft: 30 },
  case: { width: 10, height: 10, borderWidth: 1, borderColor: c.accent, borderRadius: 2, marginRight: 8, marginTop: 3 },
  puce: { width: 5, height: 5, borderRadius: 3, backgroundColor: c.accent, marginRight: 10, marginTop: 5 },
  numero: { width: 18, fontSize: 9, fontWeight: "bold", color: c.accent, marginTop: 1 },
  point: { flex: 1, fontSize: 10, color: c.texte },
  fin: { marginTop: 10, backgroundColor: c.carte, borderWidth: 1, borderColor: c.bord, borderRadius: 10, padding: 16 },
  finTitre: { fontSize: 13, fontWeight: "bold", marginBottom: 6 },
  finTexte: { fontSize: 10, color: c.texte2, marginBottom: 8 },
  lien: { fontSize: 10, color: c.accent, textDecoration: "none", marginBottom: 3 },
  pied: {
    position: "absolute" as const,
    bottom: 22,
    left: 44,
    right: 44,
    flexDirection: "row" as const,
    justifyContent: "space-between",
    fontSize: 8,
    color: c.texte3,
  },
});

// Pas de césure : « vit-rine » sur la couverture était illisible.
Font.registerHyphenationCallback((mot) => [mot]);

function dateFr() {
  return new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

/**
 * PDF d'une ressource gratuite : couverture, sections numérotées (cases à
 * cocher pour une checklist, étapes numérotées pour un plan, puces sinon),
 * puis un dernier encadré qui dit quoi faire ensuite. Aucun nom de personne :
 * l'auteur est l'agence.
 */
export function RessourcePdf({ ressource }: { ressource: Ressource }) {
  const format = FORMAT_LIBELLES[ressource.format];
  return (
    <Document title={ressource.titre} author={SITE.name} subject={format} language="fr">
      <Page size="A4" style={s.page}>
        <View style={s.couverture}>
          <Text style={s.badge}>ConvertiLab · Ressource gratuite</Text>
          <Text style={s.format}>{format}</Text>
          <Text style={s.titre}>{ressource.titre.replace(/ ([?!:;])/g, "\u00a0$1")}</Text>
          <Text style={s.accroche}>{ressource.accroche}</Text>
          <Text style={s.auteur}>
            Préparé par ConvertiLab, agence marketing digital à Rueil-Malmaison (92), Paris et Île-de-France.{"\n"}
            {dateFr()} · {SITE.url.replace("https://", "")}
          </Text>
        </View>
        <Pied />
      </Page>

      <Page size="A4" style={s.page}>
        {ressource.sections.map((section, i) => (
          <View key={section.titre} style={s.section} wrap={false}>
            <View style={s.sectionEntete}>
              <Text style={s.sectionNumero}>{i + 1}</Text>
              <Text style={s.sectionTitre}>{section.titre}</Text>
            </View>
            {section.intro && <Text style={s.sectionIntro}>{section.intro}</Text>}
            {section.points.map((point, j) => (
              <View key={j} style={s.ligne}>
                {ressource.format === "checklist" ? (
                  <View style={s.case} />
                ) : ressource.format === "plan" ? (
                  <Text style={s.numero}>{j + 1}.</Text>
                ) : (
                  <View style={s.puce} />
                )}
                <Text style={s.point}>{point}</Text>
              </View>
            ))}
          </View>
        ))}

        <View style={s.fin} wrap={false}>
          <Text style={s.finTitre}>Et maintenant ?</Text>
          <Text style={s.finTexte}>
            {ressource.conclusion ??
              "Si vous voulez que nous le fassions avec vous, trente minutes suffisent pour savoir par où commencer. Vous parlez au fondateur de l'agence, sans engagement."}
          </Text>
          <Link src={SITE.calendly} style={s.lien}>
            Réserver 30 minutes avec le fondateur : {SITE.calendly}
          </Link>
          <Link src={SITE.url} style={s.lien}>
            {SITE.url.replace("https://", "")} · {SITE.phoneDisplay}
          </Link>
        </View>
        <Pied />
      </Page>
    </Document>
  );
}

function Pied() {
  return (
    <View style={s.pied} fixed>
      <Text>ConvertiLab · Rueil-Malmaison (92) · {SITE.url.replace("https://", "")}</Text>
      <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
    </View>
  );
}
