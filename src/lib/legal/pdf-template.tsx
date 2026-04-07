import React from "react";
import { Document, Page, Text, View, Link, StyleSheet } from "@react-pdf/renderer";
import type { MentionsLegalesResult } from "./generator";

// Light theme colors for legal document
const lc = {
  bg: "#ffffff",
  text: "#1a1a2e",
  text2: "#4a4a6a",
  text3: "#8888aa",
  accent: "#6c5ce7",
  accent2: "#a29bfe",
  border: "#e0e0ea",
  cardBg: "#f8f8fc",
  white: "#ffffff",
};

const s = StyleSheet.create({
  page: {
    backgroundColor: lc.bg,
    padding: 40,
    fontFamily: "Helvetica",
    color: lc.text,
    fontSize: 9,
    lineHeight: 1.6,
  },
  coverBadge: {
    backgroundColor: lc.accent,
    color: lc.white,
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 15,
    fontSize: 8,
    fontWeight: "bold",
    letterSpacing: 2,
    textTransform: "uppercase" as const,
    marginBottom: 14,
  },
  coverTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: lc.text,
    textAlign: "center",
    lineHeight: 1.2,
  },
  coverSubtitle: {
    fontSize: 14,
    color: lc.accent,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 1.2,
  },
  coverDate: {
    fontSize: 9,
    color: lc.text3,
    textAlign: "center",
    lineHeight: 1.3,
  },
  sectionHeader: {
    flexDirection: "row" as const,
    alignItems: "center",
    marginTop: 18,
    marginBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: lc.accent,
    paddingBottom: 6,
  },
  sectionNumber: {
    backgroundColor: lc.accent,
    color: lc.white,
    width: 20,
    height: 20,
    borderRadius: 5,
    textAlign: "center",
    fontSize: 11,
    fontWeight: "bold",
    marginRight: 8,
    paddingTop: 3,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: lc.text,
  },
  sectionContent: {
    fontSize: 9,
    lineHeight: 1.6,
    color: lc.text2,
    marginBottom: 4,
  },
  ctaBox: {
    backgroundColor: lc.cardBg,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: lc.accent,
    padding: 18,
    textAlign: "center",
    marginTop: 14,
    alignItems: "center",
  },
  ctaTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: lc.text,
    marginBottom: 4,
    textAlign: "center",
    lineHeight: 1.2,
  },
  ctaDesc: {
    fontSize: 8,
    color: lc.text3,
    marginBottom: 10,
    textAlign: "center",
  },
  ctaButton: {
    backgroundColor: lc.accent,
    color: lc.white,
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 7,
    fontSize: 9,
    fontWeight: "bold",
    textDecoration: "none",
  },
  ctaContact: {
    fontSize: 6,
    color: lc.text3,
    textAlign: "center",
  },
  footer: {
    textAlign: "center",
    borderTopWidth: 1,
    borderTopColor: lc.border,
    paddingTop: 8,
    marginTop: 12,
    fontSize: 7,
    color: lc.text3,
  },
});

function SectionBlock({ index, title, content }: { index: number; title: string; content: string }) {
  // Split content by newlines and render each as a separate Text
  const lines = content.split("\n");

  return (
    <View wrap={false}>
      <View style={s.sectionHeader}>
        <Text style={s.sectionNumber}>{index}</Text>
        <Text style={s.sectionTitle}>{title}</Text>
      </View>
      <View style={{ paddingLeft: 4 }}>
        {lines.map((line, i) => (
          <Text key={i} style={s.sectionContent}>
            {line || " "}
          </Text>
        ))}
      </View>
    </View>
  );
}

export function MentionsLegalesPdf({ result }: { result: MentionsLegalesResult }) {
  const { sections, companyName, generatedAt } = result;

  // Split sections: first 2 on page 1, rest on page 2+
  const page1Sections = sections.slice(0, 2);
  const page2Sections = sections.slice(2);

  return (
    <Document>
      {/* PAGE 1: Cover + Editeur + Hebergeur */}
      <Page size="A4" style={s.page}>
        {/* Cover */}
        <View style={{ alignItems: "center", marginBottom: 20, marginTop: 10 }}>
          <Text style={s.coverBadge}>MENTIONS LEGALES</Text>
          <Text style={s.coverTitle}>Mentions Legales</Text>
          <View style={{ height: 10 }} />
          <Text style={s.coverSubtitle}>{companyName}</Text>
          <View style={{ height: 6 }} />
          <Text style={s.coverDate}>Document genere le {generatedAt}</Text>
        </View>

        {/* Divider */}
        <View style={{ height: 1, backgroundColor: lc.border, marginBottom: 10 }} />

        {/* First sections */}
        {page1Sections.map((section, i) => (
          <SectionBlock key={i} index={i + 1} title={section.title} content={section.content} />
        ))}

        <View style={s.footer}>
          <Text style={{ fontWeight: "bold" }}>Document genere par ConvertiLab — Agence Web Paris & Ile-de-France</Text>
          <View style={{ height: 3 }} />
          <Text>convertilab.com {"\u2022"} contact@convertilab.com {"\u2022"} +33 6 16 47 72 45</Text>
        </View>
      </Page>

      {/* PAGE 2+: Remaining sections */}
      <Page size="A4" style={s.page}>
        {page2Sections.map((section, i) => (
          <SectionBlock key={i} index={i + 3} title={section.title} content={section.content} />
        ))}

        {/* CTA */}
        <View style={s.ctaBox}>
          <Text style={s.ctaTitle}>
            Besoin d&apos;aide pour la mise en conformite ?
          </Text>
          <Text style={s.ctaDesc}>
            L&apos;equipe ConvertiLab peut vous accompagner sur le RGPD, les CGV et la conformite legale de votre site.
          </Text>
          <Link src="https://convertilab.com/contact" style={s.ctaButton}>
            Prendre rendez-vous gratuit
          </Link>
          <View style={{ height: 6 }} />
          <Text style={s.ctaContact}>
            convertilab.com {"\u2022"} 06 16 47 72 45 {"\u2022"} contact@convertilab.com
          </Text>
        </View>

        <View style={s.footer}>
          <Text style={{ fontWeight: "bold" }}>Document genere par ConvertiLab — Agence Web Paris & Ile-de-France</Text>
          <View style={{ height: 3 }} />
          <Text>Document genere le {generatedAt} {"\u2022"} Ce document est fourni a titre informatif et ne constitue pas un avis juridique.</Text>
        </View>
      </Page>
    </Document>
  );
}
