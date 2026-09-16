import React from "react";
import { NextRequest, NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { createToolHandler } from "@/lib/tools/shared-api-handler";
import type { LeadInfo } from "@/lib/tools/shared-types";
import { SITE } from "@/lib/constants";
import { getRessource } from "@/lib/lead-magnets/ressources";
import { FORMAT_LIBELLES, type Ressource } from "@/lib/lead-magnets/types";
import { RessourcePdf } from "@/lib/lead-magnets/pdf-template";

export const maxDuration = 60;
export const dynamic = "force-dynamic";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface EntreeLeadMagnet {
  name: string;
  email: string;
  ressource: string;
  page: string;
}

interface ResultatLeadMagnet {
  ressource: Ressource;
  page: string;
  /** PDF rendu dès l'analyse : la pièce jointe garde ainsi un nom de fichier lisible. */
  pdf: Buffer;
}

/** « jean.dupont » devient « Jean Dupont » : nom lisible dans Pipedrive quand le prénom n'est pas donné. */
function nomDepuisEmail(email: string): string {
  const local = email.split("@")[0] ?? "";
  const mots = local.split(/[._-]+/).filter((m) => /^[a-zà-ÿ]+$/i.test(m));
  if (mots.length === 0) return "Visiteur";
  return mots.map((m) => m.charAt(0).toUpperCase() + m.slice(1).toLowerCase()).join(" ");
}

function echapper(texte: string): string {
  return texte.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * Envoi d'une ressource gratuite (lead magnet) : PDF généré depuis le
 * contenu de src/lib/lead-magnets, email au visiteur avec le PDF en pièce
 * jointe, ligne dans lead_magnet_requests, lead Pipedrive (pipeline Outils),
 * alerte interne. Même chaîne que les outils gratuits (createToolHandler).
 */
const traiter = createToolHandler<EntreeLeadMagnet, ResultatLeadMagnet>({
  toolName: "Lead magnet",
  tableName: "lead_magnet_requests",

  validate(body) {
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const prenom = typeof body.prenom === "string" ? body.prenom.trim() : "";
    const ressource = typeof body.ressource === "string" ? body.ressource.trim() : "";
    const page = typeof body.page === "string" ? body.page.trim().slice(0, 200) : "";
    if (!EMAIL.test(email)) throw new Error("Adresse email invalide.");
    if (!ressource || !getRessource(ressource)) throw new Error("Ressource inconnue.");
    if (body.rgpd !== true) throw new Error("Consentement requis.");
    return { name: prenom || nomDepuisEmail(email), email, ressource, page };
  },

  async analyze(input) {
    const ressource = getRessource(input.ressource);
    if (!ressource) throw new Error("Cette ressource n'existe plus.");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pdf = await renderToBuffer(React.createElement(RessourcePdf, { ressource }) as any);
    return { ressource, page: input.page || ressource.page, pdf };
  },

  async generatePdf() {
    // Le PDF est déjà dans le résultat (voir analyze) : rien à générer ici.
    return Buffer.alloc(0);
  },

  buildExtraAttachments(result) {
    return [{ filename: `convertilab-${result.ressource.slug}.pdf`, content: result.pdf }];
  },

  buildEmailSubject(result) {
    return `Votre ${FORMAT_LIBELLES[result.ressource.format].toLowerCase()} : ${result.ressource.titre}`;
  },

  buildEmailHtml(lead: LeadInfo, result) {
    const r = result.ressource;
    const format = FORMAT_LIBELLES[r.format];
    const puces = r.apercu.map((p) => `<li style="margin:0 0 8px;">${echapper(p)}</li>`).join("");
    return `<!DOCTYPE html>
<html lang="fr"><head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;background:#f4f4f8;margin:0;padding:0;">
<div style="max-width:600px;margin:0 auto;padding:20px;">
  <div style="background:#0a0a1a;border-radius:16px;padding:36px;text-align:center;color:#fff;">
    <div style="font-size:12px;color:#a29bfe;text-transform:uppercase;letter-spacing:2px;margin-bottom:14px;">${echapper(format)} · Ressource gratuite</div>
    <h1 style="font-size:24px;margin:0;line-height:1.3;">${echapper(r.titre)}</h1>
  </div>
  <div style="background:#fff;border-radius:16px;padding:28px;margin-top:16px;color:#1a1a2e;font-size:15px;line-height:1.6;">
    <p style="margin:0 0 16px;">Bonjour ${echapper(lead.name)},</p>
    <p style="margin:0 0 16px;">Votre ${echapper(format.toLowerCase())} est en pièce jointe de cet email, au format PDF. ${echapper(r.accroche)}</p>
    <p style="margin:0 0 8px;font-weight:bold;">Ce que vous y trouverez :</p>
    <ul style="margin:0 0 20px;padding-left:20px;color:#4a4a6a;">${puces}</ul>
    <p style="margin:0 0 16px;">Si vous voulez que nous le fassions avec vous, trente minutes suffisent pour savoir par où commencer. Vous parlez au fondateur de l'agence, sans engagement.</p>
    <p style="margin:0 0 24px;"><a href="${SITE.calendly}" style="display:inline-block;background:#6c5ce7;color:#fff;text-decoration:none;padding:12px 22px;border-radius:999px;font-weight:bold;">Réserver 30 minutes avec le fondateur</a></p>
    <p style="margin:0;color:#8888aa;font-size:13px;">ConvertiLab, agence marketing digital à Rueil-Malmaison (92) · ${SITE.phoneDisplay} · <a href="${SITE.url}" style="color:#6c5ce7;">${SITE.url.replace("https://", "")}</a></p>
  </div>
</div>
</body></html>`;
  },

  buildSupabaseRow(_lead, result) {
    return { ressource: result.ressource.slug, page: result.page, pole: result.ressource.pole };
  },

  buildResponsePayload(result) {
    return { ressource: result.ressource.slug };
  },

  buildPipedriveFields(result) {
    return { ressource: result.ressource.titre, page: result.page, pole: result.ressource.pole };
  },
});

export async function POST(request: NextRequest) {
  // Pot de miel : le champ « site_web » est invisible pour les personnes ; rempli, c'est un robot.
  // On lit le corps une fois, puis on le remet dans une requête neuve pour le gestionnaire commun.
  const brut = await request.text();
  let body: Record<string, unknown> = {};
  try {
    body = JSON.parse(brut);
  } catch {
    return NextResponse.json({ error: "Requête illisible." }, { status: 400 });
  }
  if (typeof body.site_web === "string" && body.site_web.trim() !== "") {
    return NextResponse.json({ success: true, emailSent: true });
  }
  const requete = new NextRequest(request.url, { method: "POST", headers: request.headers, body: brut });
  const reponse = await traiter(requete);
  // Le PDF en base64 n'est d'aucune utilité au navigateur ici : on l'enlève de la réponse.
  const json = (await reponse.json()) as Record<string, unknown>;
  delete json.pdfBase64;
  return NextResponse.json(json, { status: reponse.status });
}
