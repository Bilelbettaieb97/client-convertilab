import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

function sb() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
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
