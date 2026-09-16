import React from "react";
import { NextRequest, NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { getRessource, RESSOURCES } from "@/lib/lead-magnets/ressources";
import { RessourcePdf } from "@/lib/lead-magnets/pdf-template";

export const dynamic = "force-dynamic";

/**
 * Aperçu d'un PDF de ressource, en développement uniquement :
 * GET /api/lead-magnet/apercu?slug=… renvoie le PDF, sans email ni lead.
 * Sans slug : la liste des ressources connues. En production : 404.
 */
export async function GET(request: NextRequest) {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Introuvable." }, { status: 404 });
  }
  const slug = request.nextUrl.searchParams.get("slug");
  if (!slug) {
    return NextResponse.json({ ressources: RESSOURCES.map((r) => ({ slug: r.slug, titre: r.titre, page: r.page })) });
  }
  const ressource = getRessource(slug);
  if (!ressource) return NextResponse.json({ error: `Ressource inconnue : ${slug}` }, { status: 404 });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pdf = await renderToBuffer(React.createElement(RessourcePdf, { ressource }) as any);
  return new NextResponse(new Uint8Array(pdf), {
    headers: { "Content-Type": "application/pdf", "Content-Disposition": `inline; filename="convertilab-${slug}.pdf"` },
  });
}
