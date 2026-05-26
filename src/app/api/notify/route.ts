import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";
export const maxDuration = 10;

const resend = new Resend(process.env.RESEND_API_KEY);
const PIPEDRIVE_TOKEN = process.env.PIPEDRIVE_API_TOKEN;
const PIPEDRIVE_BASE = "https://api.pipedrive.com/v1";

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

async function pushToPipedrive(
  formType: string,
  name?: string,
  email?: string,
  phone?: string,
  company?: string,
  fields: Record<string, string | number | boolean | null | undefined> = {}
) {
  if (!PIPEDRIVE_TOKEN) return;

  // Search for existing person by email
  let personId: number | null = null;

  if (email) {
    const searchRes = await fetch(
      `${PIPEDRIVE_BASE}/persons/search?term=${encodeURIComponent(email)}&fields=email&api_token=${PIPEDRIVE_TOKEN}`,
      { method: "GET" }
    );
    const searchData = await searchRes.json();
    if (searchData.data?.items?.length > 0) {
      personId = searchData.data.items[0].item.id;
    }
  }

  // Create person if not found
  if (!personId) {
    const personBody: Record<string, unknown> = { name: name || email || "Inconnu" };
    if (email) personBody.email = [{ value: email, primary: true }];
    if (phone) personBody.phone = [{ value: phone, primary: true }];
    if (company) personBody.org_name = company;

    const personRes = await fetch(`${PIPEDRIVE_BASE}/persons?api_token=${PIPEDRIVE_TOKEN}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(personBody),
    });
    const personData = await personRes.json();
    personId = personData.data?.id ?? null;
  }

  // Build lead note from extra fields
  const noteLines = Object.entries(fields)
    .filter(([, v]) => v !== null && v !== undefined && v !== "")
    .map(([k, v]) => `• ${k.replace(/_/g, " ")}: ${formatValue(v)}`);
  const noteContent = [
    `Source: ${formType}`,
    `Date: ${new Date().toLocaleString("fr-FR")}`,
    ...(noteLines.length ? ["", ...noteLines] : []),
  ].join("\n");

  // Create lead
  const leadBody: Record<string, unknown> = {
    title: `${formType}${name ? ` — ${name}` : email ? ` — ${email}` : ""}`,
    ...(personId ? { person_id: personId } : {}),
  };

  const leadRes = await fetch(`${PIPEDRIVE_BASE}/leads?api_token=${PIPEDRIVE_TOKEN}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(leadBody),
  });
  const leadData = await leadRes.json();
  const leadId = leadData.data?.id;

  // Add note to the lead
  if (leadId) {
    await fetch(`${PIPEDRIVE_BASE}/notes?api_token=${PIPEDRIVE_TOKEN}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: noteContent, lead_id: leadId }),
    });
  }
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

    // Email + Pipedrive en parallèle
    await Promise.all([
      resend.emails.send({
        from: "ConvertiLab <bilel@convertilab.com>",
        to: ["contact@convertilab.com", "convertilab@gmail.com"],
        replyTo: email,
        subject,
        html,
      }),
      pushToPipedrive(formType, name, email, phone, company, fields),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[notify] error:", error);
    return NextResponse.json({ error: "Notification failed" }, { status: 500 });
  }
}
