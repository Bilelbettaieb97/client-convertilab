import { NextRequest, NextResponse } from "next/server";
import { addNoteToLatestDeal } from "@/lib/pipedrive";

export const dynamic = "force-dynamic";
export const maxDuration = 15;

interface QualificationPayload {
  email?: string;
  /** Libellé de la question → réponse choisie. */
  answers?: Record<string, string>;
  /** Contexte de la landing (ex. "Restaurant", "Site vitrine"). */
  context?: string;
  /** formType du lead : sert à viser le bon deal Pipedrive. */
  formType?: string;
}

/**
 * Précisions données par le lead sur l'écran de remerciement, APRÈS que le
 * formulaire a déjà été envoyé. On les rattache en note au deal Pipedrive
 * existant : le lead est déjà capté, ici on enrichit seulement.
 */
export async function POST(req: NextRequest) {
  try {
    const { email, answers, context, formType }: QualificationPayload = await req.json();

    if (!email || !answers || typeof answers !== "object") {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const lines = Object.entries(answers)
      .filter(([, v]) => typeof v === "string" && v.trim() !== "")
      .map(([question, reponse]) => `• ${question} : ${reponse}`);

    if (lines.length === 0) {
      return NextResponse.json({ ok: true, skipped: true });
    }

    const content = [
      "Precisions donnees par le lead (ecran de remerciement)",
      `Date : ${new Date().toLocaleString("fr-FR")}`,
      ...(context ? [`Contexte : ${context}`] : []),
      "",
      ...lines,
    ].join("\n");

    const ok = await addNoteToLatestDeal(
      email.trim().toLowerCase(),
      content,
      formType || "Site Internet (Google Ads)"
    );
    return NextResponse.json({ ok });
  } catch (err) {
    console.error("[lead-qualification] error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
