import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { pushToPipedrive } from "@/lib/pipedrive";
import { scheduleEmailSeries, buildFormSeriesContext } from "@/lib/email-series";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

const resend = new Resend(process.env.RESEND_API_KEY);

interface NotifyPayload {
  formType: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  fields?: Record<string, string | number | boolean | null | undefined>;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatValue(v: unknown): string {
  if (v === null || v === undefined || v === "") return "—";
  if (typeof v === "boolean") return v ? "Oui" : "Non";
  if (Array.isArray(v)) return v.map(String).join(", ");
  if (typeof v === "object") return JSON.stringify(v);
  return String(v);
}


export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as NotifyPayload;
    const { formType, name, email, phone, company, fields = {} } = body;

    if (!formType) {
      return NextResponse.json({ error: "formType is required" }, { status: 400 });
    }

    const rows: string[] = [];
    if (name) rows.push(`<tr><td style="padding:8px;border-bottom:1px solid #eee;"><strong>Nom :</strong></td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(name)}</td></tr>`);
    if (email) rows.push(`<tr><td style="padding:8px;border-bottom:1px solid #eee;"><strong>Email :</strong></td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>`);
    if (phone) rows.push(`<tr><td style="padding:8px;border-bottom:1px solid #eee;"><strong>Telephone :</strong></td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td></tr>`);
    if (company) rows.push(`<tr><td style="padding:8px;border-bottom:1px solid #eee;"><strong>Entreprise :</strong></td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(company)}</td></tr>`);

    for (const [key, value] of Object.entries(fields)) {
      if (value === undefined || value === null || value === "") continue;
      const label = key.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
      rows.push(
        `<tr><td style="padding:8px;border-bottom:1px solid #eee;vertical-align:top;"><strong>${escapeHtml(label)} :</strong></td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(formatValue(value))}</td></tr>`
      );
    }

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;background:#f4f4f8;margin:0;padding:20px;">
<div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;">
  <div style="background:#6c5ce7;color:#fff;padding:20px 24px;">
    <h2 style="margin:0;font-size:18px;">Nouveau lead via ${escapeHtml(formType)}</h2>
    <p style="margin:4px 0 0;font-size:12px;opacity:0.85;">convertilab.com</p>
  </div>
  <div style="padding:24px;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;color:#333;">
      ${rows.join("")}
      <tr><td style="padding:8px;"><strong>Date :</strong></td><td style="padding:8px;">${new Date().toLocaleString("fr-FR")}</td></tr>
    </table>
    <div style="margin-top:20px;padding:12px;background:#f8f9fa;border-radius:8px;font-size:12px;color:#666;">
      Ce lead a ete stocke dans Supabase et Pipedrive.
    </div>
  </div>
</div>
</body>
</html>`;

    const subject = `[ConvertiLab] Nouveau lead ${formType}${name ? ` — ${name}` : ""}`;

    // Email + Pipedrive en parallèle.
    // ATTENTION : le SDK Resend ne throw pas, il retourne { error } — il faut
    // vérifier le retour, sinon l'échec est silencieux et le lead est perdu.
    const [emailResult] = await Promise.all([
      resend.emails.send({
        from: "ConvertiLab <bilel@convertilab.com>",
        to: ["contact@convertilab.com", "convertilab@gmail.com"],
        replyTo: email,
        subject,
        html,
      }),
      pushToPipedrive(formType, name, email, phone, company, fields),
    ]);

    if (emailResult?.error) {
      // Cause fréquente : replyTo invalide (email mal saisi par le lead).
      // On renvoie sans replyTo — la notification interne ne doit jamais sauter.
      console.error("[notify] resend error, retry sans replyTo:", emailResult.error);
      const retry = await resend.emails.send({
        from: "ConvertiLab <bilel@convertilab.com>",
        to: ["contact@convertilab.com", "convertilab@gmail.com"],
        subject: `${subject} (email lead invalide : ${email ?? "absent"})`,
        html,
      });
      if (retry.error) {
        console.error("[notify] resend retry failed:", retry.error);
      }
    }

    // Séries email — AWAITÉ, jamais en fire-and-forget.
    //
    // Sur Vercel, la fonction peut être gelée dès la réponse renvoyée : une
    // écriture encore en vol est alors perdue, et toute la séquence de relances
    // n'est jamais programmée, sans la moindre trace. Mesuré le 04/09/2026 :
    // les lignes arrivaient jusqu'à plusieurs secondes APRÈS le `success: true`.
    // L'attente ne coûte rien côté visiteur : l'appel part du navigateur en
    // keepalive et son écran n'attend pas cette réponse.
    if (email) {
      const ctx = buildFormSeriesContext(formType, name, company, fields as Record<string, unknown>);
      await scheduleEmailSeries(formType, email, ctx).catch((err) =>
        console.error("[notify][email_series]", err instanceof Error ? err.message : err)
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[notify] error:", error);
    return NextResponse.json({ error: "Notification failed" }, { status: 500 });
  }
}
