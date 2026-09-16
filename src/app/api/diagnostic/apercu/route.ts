import React from "react";
import { NextRequest, NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { DIAGNOSTICS, getDiagnostic } from "@/lib/diagnostics/configs";
import { calculerResultat } from "@/lib/diagnostics/types";
import { RapportDiagnosticPdf } from "@/lib/diagnostics/pdf-rapport";

export const dynamic = "force-dynamic";

/**
 * Aperçu d'un rapport de diagnostic, en développement uniquement :
 * GET /api/diagnostic/apercu?slug=…&profil=pire|milieu|meilleur renvoie le
 * PDF avec des réponses automatiques (par défaut « milieu » : l'option du
 * milieu de chaque question). Sans slug : la liste des diagnostics, avec le
 * nombre de questions et de conseils. En production : 404.
 */
export async function GET(request: NextRequest) {
  if (process.env.NODE_ENV === "production") return NextResponse.json({ error: "Introuvable." }, { status: 404 });
  const slug = request.nextUrl.searchParams.get("slug");
  if (!slug) {
    return NextResponse.json({
      diagnostics: DIAGNOSTICS.map((d) => ({
        slug: d.slug,
        type: d.type,
        titre: d.titre,
        page: d.page,
        questions: d.questions.length,
        conseils: d.questions.reduce((n, q) => n + q.options.filter((o) => o.conseil).length, 0),
        ressource: d.ressource ?? null,
      })),
    });
  }
  const d = getDiagnostic(slug);
  if (!d) return NextResponse.json({ error: `Diagnostic inconnu : ${slug}` }, { status: 404 });
  const profil = request.nextUrl.searchParams.get("profil") ?? "milieu";
  const reponses: Record<string, string> = {};
  for (const q of d.questions) {
    const tri = [...q.options].sort((a, b) => a.points - b.points);
    const o = profil === "pire" ? tri[0] : profil === "meilleur" ? tri[tri.length - 1] : tri[Math.floor(tri.length / 2)];
    reponses[q.id] = o.id;
  }
  const resultat = d.type === "questionnaire" ? calculerResultat(d, reponses) : null;
  const resume = d.type === "calcul" ? ["Ligne de résumé d'exemple 1", "Ligne de résumé d'exemple 2"] : undefined;
  const pdf = await renderToBuffer(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    React.createElement(RapportDiagnosticPdf, { diagnostic: d, resultat, prenom: "Camille", resume }) as any
  );
  return new NextResponse(new Uint8Array(pdf), {
    headers: { "Content-Type": "application/pdf", "Content-Disposition": `inline; filename="rapport-${slug}-${profil}.pdf"` },
  });
}
