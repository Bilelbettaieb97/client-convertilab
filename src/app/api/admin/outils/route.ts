import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
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

  const [outilsResult, contacts, newsletters, devis, maquettes, estimations, offres] = await Promise.all([
    supabase.rpc("get_outils_dashboard", { admin_token: ADMIN_TOKEN }),
    supabaseAdmin.from("contact_submissions").select("*").order("created_at", { ascending: false }),
    supabaseAdmin.from("newsletter_subscriptions").select("*").order("created_at", { ascending: false }),
    supabaseAdmin.from("devis_submissions").select("*").order("created_at", { ascending: false }),
    supabaseAdmin.from("mockup_requests").select("*").order("created_at", { ascending: false }),
    supabaseAdmin.from("price_estimations").select("*").order("created_at", { ascending: false }),
    supabaseAdmin.from("offer_reservations").select("*").order("created_at", { ascending: false }),
  ]);

  if (outilsResult.error) {
    console.error("[admin/outils] error:", outilsResult.error);
    return NextResponse.json({ error: outilsResult.error.message }, { status: 500, headers: CORS_HEADERS });
  }

  const d = outilsResult.data as Record<string, unknown[]>;

  return NextResponse.json({
    generated_at: new Date().toISOString(),
    outils: {
      "SEO Check":         { icon: "🔍", leads: d.seo_audits || [],          cols: ["domain", "score_global", "grade"] },
      "Speed Check":       { icon: "⚡", leads: d.speed_audits || [],        cols: ["domain", "score_global", "grade"] },
      "Design Score":      { icon: "🎨", leads: d.design_audits || [],       cols: ["domain", "score_global", "grade"] },
      "Estimateur Ads":    { icon: "📊", leads: d.ads_estimations || [],     cols: ["sector", "budget_monthly", "estimated_roas"] },
      "Comparateur Sites": { icon: "⚖️",  leads: d.site_comparisons || [],   cols: ["domain_a", "domain_b", "winner"] },
      "Robots Generator":  { icon: "⚙️",  leads: d.robots_generations || [],  cols: ["domain", "urls_discovered"] },
      "Rapport Sectoriel": { icon: "📈", leads: d.sector_reports || [],      cols: ["sector_name"] },
      "Mentions Légales":  { icon: "📄", leads: d.mentions_legales || [],    cols: ["company", "company_type", "siret"] },
      "Chatbot Audit":     { icon: "🤖", leads: d.chatbot_leads || [],       cols: ["domain", "score_global", "grade"] },
    },
    formulaires: {
      "Contact":          { icon: "📬", leads: contacts.data || [] },
      "Newsletter":       { icon: "📧", leads: newsletters.data || [] },
      "Devis":            { icon: "💼", leads: devis.data || [] },
      "Demande Maquette": { icon: "🖼️", leads: maquettes.data || [] },
      "Estimation Prix":  { icon: "💰", leads: estimations.data || [] },
      "Offre Spéciale":   { icon: "🎁", leads: offres.data || [] },
    },
  }, { headers: CORS_HEADERS });
}
