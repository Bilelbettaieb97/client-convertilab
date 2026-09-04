import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const ADMIN_TOKEN = process.env.ADMIN_DASHBOARD_TOKEN || "convertilab-admin-2026";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  if (token !== ADMIN_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401, headers: CORS_HEADERS });
  }

  const { data, error } = await supabase.rpc("get_outils_dashboard", {
    admin_token: ADMIN_TOKEN,
  });

  if (error) {
    console.error("[admin/outils] error:", error);
    return NextResponse.json({ error: error.message }, { status: 500, headers: CORS_HEADERS });
  }

  const d = data as Record<string, unknown[]>;

  return NextResponse.json({
    generated_at: new Date().toISOString(),
    outils: {
      "SEO Check":         { icon: "🔍", leads: d.seo_audits || [] },
      "Speed Check":       { icon: "⚡", leads: d.speed_audits || [] },
      "Design Score":      { icon: "🎨", leads: d.design_audits || [] },
      "Estimateur Ads":    { icon: "📊", leads: d.ads_estimations || [] },
      "Comparateur Sites": { icon: "⚖️",  leads: d.site_comparisons || [] },
      "Robots Generator":  { icon: "⚙️",  leads: d.robots_generations || [] },
      "Rapport Sectoriel": { icon: "📈", leads: d.sector_reports || [] },
      "Mentions Légales":  { icon: "📄", leads: d.mentions_legales || [] },
      "Chatbot Audit":     { icon: "🤖", leads: d.chatbot_leads || [] },
    },
    formulaires: {
      // Trafic payant : garde sa propre entrée, sinon les leads Google Ads se
      // noient dans le formulaire de contact du site et on ne peut plus mesurer
      // le coût par lead de la campagne.
      "Google Ads":       { icon: "🎯", leads: d.google_ads_leads || [] },
      "Contact":          { icon: "📬", leads: d.contact_submissions || [] },
      "Newsletter":       { icon: "📧", leads: d.newsletter_subscriptions || [] },
      "Devis":            { icon: "💼", leads: d.devis_submissions || [] },
      "Demande Maquette": { icon: "🖼️", leads: d.mockup_requests || [] },
      "Estimation Prix":  { icon: "💰", leads: d.price_estimations || [] },
      "Offre Spéciale":   { icon: "🎁", leads: d.offer_reservations || [] },
    },
  }, { headers: CORS_HEADERS });
}
