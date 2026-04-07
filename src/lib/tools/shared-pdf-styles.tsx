import React from "react";
import { Text, View, StyleSheet, Link } from "@react-pdf/renderer";

// ===== COLOR PALETTE =====
export const c = {
  bg: "#0a0a1a", card: "#14142b", border: "#2a2a4a",
  text: "#e8e8f0", text2: "#8888aa", text3: "#5a5a7a",
  accent: "#6c5ce7", accent2: "#a29bfe",
  green: "#22c55e", yellow: "#eab308", orange: "#f97316", red: "#ef4444", white: "#ffffff",
};

export function sc(s: number) { return s >= 80 ? c.green : s >= 60 ? c.yellow : s >= 40 ? c.orange : c.red; }

// ===== BASE STYLES =====
export const base = StyleSheet.create({
  page: { backgroundColor: c.bg, padding: 30, fontFamily: "Helvetica", color: c.text, fontSize: 9, lineHeight: 1.5 },
  pageCompact: { backgroundColor: c.bg, padding: 26, fontFamily: "Helvetica", color: c.text, fontSize: 9, lineHeight: 1.5 },
  // Section header
  sh: { flexDirection: "row", alignItems: "center", marginTop: 18, marginBottom: 10, borderBottomWidth: 1, borderBottomColor: c.border, paddingBottom: 6 },
  sn: { backgroundColor: c.accent, color: c.white, width: 20, height: 20, borderRadius: 5, textAlign: "center", fontSize: 11, fontWeight: "bold", marginRight: 8, paddingTop: 3 },
  stitle: { fontSize: 15, fontWeight: "bold" },
  // Card
  card: { backgroundColor: c.card, borderRadius: 10, borderWidth: 1, borderColor: c.border, padding: 14, marginBottom: 8 },
  cardCompact: { backgroundColor: c.card, borderRadius: 10, borderWidth: 1, borderColor: c.border, padding: 10, marginBottom: 6 },
  cardH: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10, borderBottomWidth: 1, borderBottomColor: c.border, paddingBottom: 8 },
  cardHCompact: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 6, borderBottomWidth: 1, borderBottomColor: c.border, paddingBottom: 6 },
  cardT: { fontSize: 12, fontWeight: "bold" },
  cardTSmall: { fontSize: 11, fontWeight: "bold" },
  cardS: { fontSize: 18, fontWeight: "bold" },
  cardSSmall: { fontSize: 16, fontWeight: "bold" },
  // Table
  tr: { flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "rgba(255,255,255,0.03)", paddingVertical: 4 },
  td: { fontSize: 8 },
  // Badge
  b: { fontSize: 7, fontWeight: "bold", paddingVertical: 1, paddingHorizontal: 5, borderRadius: 6 },
  bp: { backgroundColor: "rgba(34,197,94,0.15)", color: c.green },
  bf: { backgroundColor: "rgba(239,68,68,0.15)", color: c.red },
  bw: { backgroundColor: "rgba(234,179,8,0.15)", color: c.yellow },
  // Must-do
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
  // Footer
  ft: { textAlign: "center", borderTopWidth: 1, borderTopColor: c.border, paddingTop: 8, marginTop: 10, fontSize: 7, color: c.text3 },
});

// ===== REUSABLE COMPONENTS =====

export function Badge({ ok, label }: { ok: boolean; label?: string }) {
  return <Text style={[base.b, ok ? base.bp : base.bf]}>{ok ? `\u2713 ${label || "OK"}` : `\u2717 ${label || "Probleme"}`}</Text>;
}

export function BadgeSmall({ ok }: { ok: boolean }) {
  return <Text style={[base.b, ok ? base.bp : base.bf, { fontSize: 6 }]}>{ok ? "\u2713" : "\u2717"}</Text>;
}

export function Sh({ n, t }: { n: string; t: string }) {
  return <View style={base.sh}><Text style={base.sn}>{n}</Text><Text style={base.stitle}>{t}</Text></View>;
}

export function CoverSection({ badge, title, subtitle, date }: { badge: string; title: string; subtitle: string; date: string }) {
  return (
    <View style={{ alignItems: "center", marginBottom: 16, marginTop: 8 }}>
      <Text style={{ backgroundColor: c.accent, color: c.white, paddingVertical: 3, paddingHorizontal: 14, borderRadius: 15, fontSize: 7, fontWeight: "bold", letterSpacing: 2, textTransform: "uppercase" as const, marginBottom: 12 }}>
        {badge}
      </Text>
      <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", lineHeight: 1.2 }}>{title}</Text>
      <View style={{ height: 10 }} />
      <Text style={{ fontSize: 14, color: c.accent2, fontWeight: "bold", textAlign: "center", lineHeight: 1.2 }}>{subtitle}</Text>
      <View style={{ height: 6 }} />
      <Text style={{ fontSize: 9, color: c.text2, textAlign: "center", lineHeight: 1.3 }}>{date}</Text>
    </View>
  );
}

export function ScoreHero({ score, grade, gradeLabel }: { score: number; grade: string; gradeLabel: string }) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 16, backgroundColor: c.card, borderRadius: 12, borderWidth: 1, borderColor: c.border, marginBottom: 12 }}>
      <View style={{ alignItems: "center", marginRight: 40 }}>
        <Text style={{ fontSize: 38, fontWeight: "bold", color: sc(score), lineHeight: 1.1 }}>{score}</Text>
        <View style={{ height: 6 }} />
        <Text style={{ fontSize: 9, color: c.text2, lineHeight: 1.2 }}>sur 100</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 34, fontWeight: "bold", color: sc(score), lineHeight: 1.1 }}>{grade}</Text>
        <View style={{ height: 6 }} />
        <Text style={{ fontSize: 11, color: c.text2, lineHeight: 1.2 }}>{gradeLabel}</Text>
      </View>
    </View>
  );
}

export function ScoreGrid({ categories }: { categories: { name: string; score: number; desc: string }[] }) {
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 14 }}>
      {categories.map(cat => (
        <View key={cat.name} style={{ width: "48.5%", flexDirection: "row", alignItems: "center", backgroundColor: c.card, borderRadius: 8, borderWidth: 1, borderColor: c.border, padding: 8, marginBottom: 6, marginRight: "1.5%" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: sc(cat.score), width: 36, textAlign: "center" }}>{cat.score}</Text>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 8, fontWeight: "bold" }}>{cat.name}</Text>
            <Text style={{ fontSize: 6, color: c.text2 }}>{cat.desc}</Text>
            <View style={{ height: 3, backgroundColor: c.border, borderRadius: 2, marginTop: 3, width: "100%" }}>
              <View style={{ height: 3, borderRadius: 2, backgroundColor: sc(cat.score), width: `${cat.score}%` }} />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

export function StrengthsAndIssues({ strengths, issues }: { strengths: string[]; issues: string[] }) {
  return (
    <View style={{ flexDirection: "row", marginBottom: 14 }}>
      <View style={{ flex: 1, backgroundColor: c.card, borderRadius: 8, borderWidth: 1, borderColor: c.border, borderLeftWidth: 3, borderLeftColor: c.green, padding: 10, marginRight: 8 }}>
        <Text style={{ fontSize: 10, fontWeight: "bold", marginBottom: 6 }}>Points Forts</Text>
        {strengths.slice(0, 5).map((s, i) => (
          <Text key={i} style={{ fontSize: 7, color: c.text2, marginBottom: 2 }}>{"\u2713"} {s}</Text>
        ))}
      </View>
      <View style={{ flex: 1, backgroundColor: c.card, borderRadius: 8, borderWidth: 1, borderColor: c.border, borderLeftWidth: 3, borderLeftColor: c.red, padding: 10 }}>
        <Text style={{ fontSize: 10, fontWeight: "bold", marginBottom: 6 }}>A Corriger</Text>
        {issues.slice(0, 5).map((is, i) => (
          <Text key={i} style={{ fontSize: 7, color: c.text2, marginBottom: 2 }}>{"\u2717"} {is}</Text>
        ))}
      </View>
    </View>
  );
}

export function CtaSection() {
  return (
    <View style={{ backgroundColor: "#1a1040", borderRadius: 10, borderWidth: 1, borderColor: c.accent, padding: 18, textAlign: "center", marginTop: 8, alignItems: "center" }}>
      <Text style={{ fontSize: 14, fontWeight: "bold", color: c.white, marginBottom: 4, textAlign: "center", lineHeight: 1.2 }}>
        Besoin d&apos;aide pour corriger tout ca ?
      </Text>
      <Text style={{ fontSize: 8, color: c.text2, marginBottom: 10, textAlign: "center" }}>
        L&apos;equipe ConvertiLab peut prendre en charge toutes les corrections et optimisations.
      </Text>
      <Link src="https://convertilab.com/contact" style={{ backgroundColor: c.accent, color: c.white, paddingVertical: 7, paddingHorizontal: 20, borderRadius: 7, fontSize: 9, fontWeight: "bold", textDecoration: "none" }}>
        Prendre rendez-vous gratuit
      </Link>
      <View style={{ height: 6 }} />
      <Text style={{ fontSize: 6, color: c.text3, textAlign: "center" }}>
        convertilab.com {"\u2022"} 06 16 47 72 45 {"\u2022"} contact@convertilab.com
      </Text>
    </View>
  );
}

export function FooterSection({ date }: { date: string }) {
  return (
    <View style={{ textAlign: "center", borderTopWidth: 1, borderTopColor: c.border, paddingTop: 8, marginTop: 10, fontSize: 7, color: c.text3 }}>
      <Text style={{ fontWeight: "bold" }}>Audit realise par ConvertiLab — Agence Web Paris & Ile-de-France</Text>
      <View style={{ height: 3 }} />
      <Text>Document genere le {date} {"\u2022"} Ce rapport est confidentiel.</Text>
    </View>
  );
}

export function AgencyFooterLine() {
  return (
    <View style={{ borderTopWidth: 1, borderTopColor: c.border, paddingTop: 10, textAlign: "center" }}>
      <Text style={{ fontSize: 7, color: c.text3 }}>Audit realise par ConvertiLab — Agence Web Paris & Ile-de-France</Text>
      <Text style={{ fontSize: 7, color: c.text3 }}>convertilab.com {"\u2022"} contact@convertilab.com {"\u2022"} +33 6 16 47 72 45</Text>
    </View>
  );
}

export function IssueCard({ index, title, priority, description, fix }: { index: number; title: string; priority: "critical" | "important" | "recommended"; description: string; fix: string }) {
  const bColor = priority === "critical" ? c.red : priority === "important" ? c.orange : c.yellow;
  const pBg = priority === "critical" ? "rgba(239,68,68,0.15)" : priority === "important" ? "rgba(249,115,22,0.15)" : "rgba(234,179,8,0.15)";
  const pLabel = priority === "critical" ? "CRITIQUE" : priority === "important" ? "IMPORTANT" : "RECOMMANDE";

  return (
    <View style={[base.md, { borderLeftColor: bColor }]}>
      <View style={base.mdh}>
        <Text style={base.mdt}>{index}. {title}</Text>
        <Text style={[base.mdp, { backgroundColor: pBg, color: bColor }]}>{pLabel}</Text>
      </View>
      <View style={base.mdw}><Text><Text style={{ fontWeight: "bold" }}>Pourquoi : </Text>{description}</Text></View>
      <View style={base.mdf}><Text><Text style={{ fontWeight: "bold", color: c.green }}>Corriger : </Text>{fix}</Text></View>
    </View>
  );
}

export function GlossaryCompact({ terms }: { terms: { t: string; d: string }[] }) {
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 8 }}>
      {terms.map((g, i) => (
        <View key={i} style={{ width: "33%", paddingVertical: 2, paddingRight: 6 }}>
          <Text style={{ fontSize: 7, fontWeight: "bold", color: c.accent2 }}>{g.t}</Text>
          <Text style={{ fontSize: 6, color: c.text2 }}>{g.d}</Text>
        </View>
      ))}
    </View>
  );
}
