import React from "react";
import { NextRequest, NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { createToolHandler } from "@/lib/tools/shared-api-handler";
import type { LeadInfo } from "@/lib/tools/shared-types";
import { SITE } from "@/lib/constants";
import { getDiagnostic } from "@/lib/diagnostics/configs";
import { calculerResultat, type Diagnostic, type ResultatDiagnostic } from "@/lib/diagnostics/types";
import { RapportDiagnosticPdf } from "@/lib/diagnostics/pdf-rapport";
import { getRessource } from "@/lib/lead-magnets/ressources";
import { RessourcePdf } from "@/lib/lead-magnets/pdf-template";

export const maxDuration = 60;
export const dynamic = "force-dynamic";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Entree {
  name: string;
  email: string;
  slug: string;
  page: string;
  reponses: Record<string, string>;
  resume: string[];
  score?: number;
}

interface Resultat {
  diagnostic: Diagnostic;
  resultat: ResultatDiagnostic | null;
  resume: string[];
  score: number | null;
  page: string;
  rapport: Buffer;
  bonus: { nom: string; pdf: Buffer } | null;
}

function nomDepuisEmail(email: string): string {
  const mots = (email.split("@")[0] ?? "").split(/[._-]+/).filter((m) => /^[a-zà-ÿ]+$/i.test(m));
  return mots.length ? mots.map((m) => m.charAt(0).toUpperCase() + m.slice(1).toLowerCase()).join(" ") : "Visiteur";
}

const echapper = (t: string) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * Rapport complet d'un diagnostic interactif : recalcul côté serveur depuis
 * les réponses (ou résumé envoyé par un calculateur), PDF du rapport, PDF de
 * la ressource bonus, email, ligne dans diagnostic_requests, lead Pipedrive
 * (pipeline Outils). Même chaîne que les outils gratuits.
 */
const traiter = createToolHandler<Entree, Resultat>({
  toolName: "Diagnostic",
  tableName: "diagnostic_requests",

  validate(body) {
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const prenom = typeof body.prenom === "string" ? body.prenom.trim() : "";
    const slug = typeof body.slug === "string" ? body.slug.trim() : "";
    const page = typeof body.page === "string" ? body.page.trim().slice(0, 200) : "";
    if (!EMAIL.test(email)) throw new Error("Adresse email invalide.");
    if (!slug || !getDiagnostic(slug)) throw new Error("Diagnostic inconnu.");
    if (body.rgpd !== true) throw new Error("Consentement requis.");
    const reponses: Record<string, string> = {};
    if (body.reponses && typeof body.reponses === "object") {
      for (const [k, v] of Object.entries(body.reponses as Record<string, unknown>)) {
        if (typeof v === "string" && k.length < 60 && v.length < 60) reponses[k] = v;
      }
    }
    const resume = Array.isArray(body.resume)
      ? (body.resume as unknown[]).filter((l): l is string => typeof l === "string").map((l) => l.slice(0, 300)).slice(0, 40)
      : [];
    const score = typeof body.score === "number" && Number.isFinite(body.score) ? Math.max(0, Math.min(100, Math.round(body.score))) : undefined;
    return { name: prenom || nomDepuisEmail(email), email, slug, page, reponses, resume, score };
  },

  async analyze(input) {
    const diagnostic = getDiagnostic(input.slug);
    if (!diagnostic) throw new Error("Ce diagnostic n'existe plus.");
    const resultat = diagnostic.type === "questionnaire" ? calculerResultat(diagnostic, input.reponses) : null;
    if (diagnostic.type === "questionnaire" && resultat && resultat.reponses.length === 0) {
      throw new Error("Répondez au questionnaire avant de demander le rapport.");
    }
    const rapport = await renderToBuffer(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      React.createElement(RapportDiagnosticPdf, { diagnostic, resultat, prenom: input.name, resume: input.resume }) as any
    );
    let bonus: Resultat["bonus"] = null;
    const ressource = diagnostic.ressource ? getRessource(diagnostic.ressource) : undefined;
    if (ressource) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const pdf = await renderToBuffer(React.createElement(RessourcePdf, { ressource }) as any);
      bonus = { nom: `convertilab-${ressource.slug}.pdf`, pdf };
    }
    return {
      diagnostic,
      resultat,
      resume: input.resume,
      score: resultat ? resultat.score : (input.score ?? null),
      page: input.page || diagnostic.page,
      rapport,
      bonus,
    };
  },

  async generatePdf() {
    return Buffer.alloc(0);
  },

  buildExtraAttachments(r) {
    const pieces = [{ filename: `convertilab-rapport-${r.diagnostic.slug}.pdf`, content: r.rapport }];
    if (r.bonus) pieces.push({ filename: r.bonus.nom, content: r.bonus.pdf });
    return pieces;
  },

  buildEmailSubject(r) {
    return r.score !== null ? `Votre rapport : ${r.diagnostic.titre} (${r.score}/100)` : `Votre rapport : ${r.diagnostic.titre}`;
  },

  buildEmailHtml(lead: LeadInfo, r) {
    const priorites = r.resultat
      ? r.resultat.conseils.slice(0, 3).map((c) => `<li style="margin:0 0 8px;"><strong>${echapper(c.titre)}</strong> : ${echapper(c.texte)}</li>`).join("")
      : r.resume.slice(0, 5).map((l) => `<li style="margin:0 0 8px;">${echapper(l)}</li>`).join("");
    const bonus = r.bonus ? `<p style="margin:0 0 16px;">En bonus, vous trouverez aussi en pièce jointe la ressource liée à ce diagnostic.</p>` : "";
    return `<!DOCTYPE html>
<html lang="fr"><head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;background:#f4f4f8;margin:0;padding:0;">
<div style="max-width:600px;margin:0 auto;padding:20px;">
  <div style="background:#0a0a1a;border-radius:16px;padding:36px;text-align:center;color:#fff;">
    <div style="font-size:12px;color:#a29bfe;text-transform:uppercase;letter-spacing:2px;margin-bottom:14px;">Votre rapport personnalisé</div>
    <h1 style="font-size:24px;margin:0;line-height:1.3;">${echapper(r.diagnostic.titre)}</h1>
    ${r.score !== null ? `<p style="margin:14px 0 0;font-size:40px;font-weight:bold;color:#a29bfe;">${r.score}<span style="font-size:16px;color:#8888aa;"> / 100</span></p>` : ""}
  </div>
  <div style="background:#fff;border-radius:16px;padding:28px;margin-top:16px;color:#1a1a2e;font-size:15px;line-height:1.6;">
    <p style="margin:0 0 16px;">Bonjour ${echapper(lead.name)},</p>
    <p style="margin:0 0 16px;">Votre rapport complet est en pièce jointe (PDF) : score par axe, toutes vos priorités dans l'ordre, ce qui est déjà en place et le rappel de vos réponses.</p>
    ${priorites ? `<p style="margin:0 0 8px;font-weight:bold;">Vos premières priorités :</p><ol style="margin:0 0 20px;padding-left:20px;color:#4a4a6a;">${priorites}</ol>` : ""}
    ${bonus}
    <p style="margin:0 0 16px;">Si vous voulez que nous le fassions avec vous, trente minutes suffisent pour savoir par où commencer. Vous parlez au fondateur de l'agence, sans engagement.</p>
    <p style="margin:0 0 24px;"><a href="${SITE.calendly}" style="display:inline-block;background:#6c5ce7;color:#fff;text-decoration:none;padding:12px 22px;border-radius:999px;font-weight:bold;">Réserver 30 minutes avec le fondateur</a></p>
    <p style="margin:0;color:#8888aa;font-size:13px;">ConvertiLab, agence marketing digital à Rueil-Malmaison (92) · ${SITE.phoneDisplay} · <a href="${SITE.url}" style="color:#6c5ce7;">${SITE.url.replace("https://", "")}</a></p>
  </div>
</div>
</body></html>`;
  },

  buildSupabaseRow(_lead, r) {
    return {
      slug: r.diagnostic.slug,
      page: r.page,
      pole: r.diagnostic.pole,
      score: r.score,
      reponses: r.resultat ? r.resultat.reponses : null,
      resume: r.resume.length ? r.resume.join("\n") : null,
    };
  },

  buildResponsePayload(r) {
    return { slug: r.diagnostic.slug, score: r.score };
  },

  buildPipedriveFields(r) {
    return {
      diagnostic: r.diagnostic.titre,
      score: r.score ?? "",
      page: r.page,
      pole: r.diagnostic.pole,
      priorites: r.resultat ? r.resultat.conseils.slice(0, 3).map((c) => c.titre).join(" ; ") : r.resume.slice(0, 3).join(" ; "),
    };
  },
});

export async function POST(request: NextRequest) {
  const brut = await request.text();
  let body: Record<string, unknown> = {};
  try {
    body = JSON.parse(brut);
  } catch {
    return NextResponse.json({ error: "Requête illisible." }, { status: 400 });
  }
  // Pot de miel : champ invisible « site_web ».
  if (typeof body.site_web === "string" && body.site_web.trim() !== "") {
    return NextResponse.json({ success: true, emailSent: true });
  }
  const reponse = await traiter(new NextRequest(request.url, { method: "POST", headers: request.headers, body: brut }));
  const json = (await reponse.json()) as Record<string, unknown>;
  delete json.pdfBase64;
  return NextResponse.json(json, { status: reponse.status });
}
