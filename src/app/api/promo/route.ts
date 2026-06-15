import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY);

function sb() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

function generateICS(opts: {
  uid: string;
  start: Date;
  end: Date;
  summary: string;
  description: string;
  organizer: { email: string; name: string };
  attendee: { email: string; name: string };
}) {
  const fmt = (d: Date) =>
    d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//ConvertiLab//FR",
    "METHOD:REQUEST",
    "BEGIN:VEVENT",
    `UID:${opts.uid}@convertilab.com`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(opts.start)}`,
    `DTEND:${fmt(opts.end)}`,
    `SUMMARY:${opts.summary}`,
    `DESCRIPTION:${opts.description.replace(/\n/g, "\\n")}`,
    `ORGANIZER;CN="${opts.organizer.name}":mailto:${opts.organizer.email}`,
    `ATTENDEE;CN="${opts.attendee.name}";RSVP=TRUE;PARTSTAT=ACCEPTED:mailto:${opts.attendee.email}`,
    "STATUS:CONFIRMED",
    "TRANSP:OPAQUE",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

function frDate(d: Date) {
  return d.toLocaleString("fr-FR", {
    timeZone: "Europe/Paris",
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  });
}

async function sendICSEmails(
  id: string,
  slot_at: string,
  supabase: ReturnType<typeof sb>
) {
  const { data: lead } = await supabase
    .from("promo_leads")
    .select("prenom, email, telephone, situation, objectif")
    .eq("id", id)
    .single();

  if (!lead?.email) return;

  const start = new Date(slot_at);
  const end   = new Date(start.getTime() + 30 * 60 * 1000);
  const displayTime = frDate(start);
  const prenom = lead.prenom || "vous";

  const description =
    `RDV avec Bilel Bettaieb (ConvertiLab)\n` +
    `Situation : ${lead.situation || "—"}\n` +
    `Objectif  : ${lead.objectif  || "—"}\n` +
    `Téléphone : ${lead.telephone || "—"}`;

  const ics = generateICS({
    uid: id,
    start,
    end,
    summary: `RDV ConvertiLab — ${lead.prenom || lead.email}`,
    description,
    organizer: { email: "bilel@convertilab.com", name: "Bilel · ConvertiLab" },
    attendee:  { email: lead.email, name: lead.prenom || lead.email },
  });

  const attachment = {
    filename: "rdv-convertilab.ics",
    content: Buffer.from(ics, "utf-8"),
  };

  // Email au lead
  void resend.emails.send({
    from: "Bilel · ConvertiLab <bilel@convertilab.com>",
    to: lead.email,
    subject: `✅ Votre RDV est confirmé — ${displayTime}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto">
        <h2 style="color:#1a1a1a">Votre rendez-vous est confirmé 🎉</h2>
        <p>Bonjour ${prenom},</p>
        <p>Votre RDV avec Bilel de ConvertiLab est planifié pour :</p>
        <div style="background:#f4f4f4;border-radius:8px;padding:16px 20px;margin:20px 0;font-size:18px;font-weight:bold">
          📅 ${displayTime.charAt(0).toUpperCase() + displayTime.slice(1)}
        </div>
        <p>Une invitation calendrier est jointe à cet email. Cliquez dessus pour l'ajouter à votre agenda.</p>
        <p>À très bientôt,<br><strong>Bilel — ConvertiLab</strong></p>
        <hr style="border:none;border-top:1px solid #eee;margin:24px 0">
        <p style="font-size:12px;color:#888">Des questions ? Répondez à cet email ou appelez le 06 16 47 72 45.</p>
      </div>
    `,
    attachments: [attachment],
  }).catch(() => {});

  // Notification interne à Bilel
  void resend.emails.send({
    from: "ConvertiLab Notif <bilel@convertilab.com>",
    to: "bilel@convertilab.com",
    subject: `📅 Nouveau RDV — ${lead.prenom || lead.email} — ${displayTime}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto">
        <h2>Nouveau RDV via le funnel promo</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#666">Prénom</td><td><strong>${lead.prenom || "—"}</strong></td></tr>
          <tr><td style="padding:8px 0;color:#666">Email</td><td><strong>${lead.email}</strong></td></tr>
          <tr><td style="padding:8px 0;color:#666">Téléphone</td><td><strong>${lead.telephone || "—"}</strong></td></tr>
          <tr><td style="padding:8px 0;color:#666">Créneau</td><td><strong>${displayTime}</strong></td></tr>
          <tr><td style="padding:8px 0;color:#666">Situation</td><td>${lead.situation || "—"}</td></tr>
          <tr><td style="padding:8px 0;color:#666">Objectif</td><td>${lead.objectif || "—"}</td></tr>
        </table>
      </div>
    `,
    attachments: [attachment],
  }).catch(() => {});
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action } = body;

    const supabase = sb();

    if (action === "track") {
      const { session_id, step, lead_id = null, metadata = {} } = body;
      await supabase.from("promo_events").insert({ session_id, step, lead_id, metadata });

    } else if (action === "update_lead") {
      const { id, infos_supp } = body;
      if (id && infos_supp) {
        await supabase.from("promo_leads").update({ infos_supp }).eq("id", id);
      }

    } else if (action === "update_slot") {
      const { id, slot_at } = body;
      if (id && slot_at) {
        await supabase.from("promo_leads").update({ slot_at }).eq("id", id);
        void sendICSEmails(id, slot_at, supabase);
      }

    } else if (action === "newsletter") {
      const { email } = body;
      if (email) {
        await supabase.from("newsletter_subscriptions").upsert({ email }, { onConflict: "email", ignoreDuplicates: true });
      }

    } else {
      return NextResponse.json({ error: "unknown action" }, { status: 400 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}
