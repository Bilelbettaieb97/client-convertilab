import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { marquerSerieFinie } from "@/lib/pipedrive";
import { tailleDeSerie } from "@/lib/email-series";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const resend = new Resend(process.env.RESEND_API_KEY);

interface QueueRow {
  id: string;
  lead_email: string;
  subject: string;
  html_body: string;
  form_type: string;
  series_index: number;
}

export async function GET(request: NextRequest) {
  // Vercel cron injects Authorization: Bearer {CRON_SECRET}
  const auth = request.headers.get("authorization");
  if (process.env.CRON_SECRET && auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  // Fetch up to 50 emails due right now
  const { data: rows, error: fetchErr } = await supabase
    .from("email_queue")
    .select("id, lead_email, subject, html_body, form_type, series_index")
    .eq("status", "pending")
    .lte("send_at", new Date().toISOString())
    .order("send_at", { ascending: true })
    .limit(50);

  if (fetchErr) {
    console.error("[cron/send-emails] fetch error:", fetchErr.message);
    return NextResponse.json({ error: fetchErr.message }, { status: 500 });
  }

  if (!rows || rows.length === 0) {
    return NextResponse.json({ sent: 0 });
  }

  let sent = 0;
  let failed = 0;
  let seriesTerminees = 0;

  for (const row of rows as QueueRow[]) {
    try {
      const { error: sendErr } = await resend.emails.send({
        from: "Bilel · ConvertiLab <bilel@convertilab.com>",
        to: row.lead_email,
        subject: row.subject,
        html: row.html_body,
      });

      if (sendErr) throw sendErr;

      await supabase
        .from("email_queue")
        .update({ status: "sent", sent_at: new Date().toISOString() })
        .eq("id", row.id);

      sent++;

      // Etait-ce la derniere relance de cette serie pour ce lead ?
      //
      // La longueur de la serie est connue sans requete : tant qu'on n'envoie pas
      // le dernier index, inutile d'interroger la base. Le cron traite jusqu'a 50
      // emails par passage, ce court-circuit lui evite autant d'aller-retours.
      const taille = tailleDeSerie(row.form_type);
      if (taille > 0 && row.series_index >= taille - 1) {
        // Confirmation en base : un rattrapage ou une reprogrammation peut avoir
        // laisse d'autres relances en attente pour ce meme lead.
        const { count: restants, error: resteErr } = await supabase
          .from("email_queue")
          .select("id", { count: "exact", head: true })
          .eq("lead_email", row.lead_email)
          .eq("form_type", row.form_type)
          .eq("status", "pending");

        if (!resteErr && restants === 0) {
          const issue = await marquerSerieFinie(row.lead_email, row.form_type);
          if (issue === "deplace") seriesTerminees++;
        }
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`[cron/send-emails] failed for ${row.id}:`, msg);

      await supabase
        .from("email_queue")
        .update({ status: "failed", error_msg: msg })
        .eq("id", row.id);

      failed++;
    }
  }

  console.log(
    `[cron/send-emails] sent=${sent} failed=${failed} seriesTerminees=${seriesTerminees}`
  );
  return NextResponse.json({ sent, failed, seriesTerminees, total: rows.length });
}
