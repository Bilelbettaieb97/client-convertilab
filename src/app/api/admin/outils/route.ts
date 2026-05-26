import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const ADMIN_TOKEN = process.env.ADMIN_DASHBOARD_TOKEN || "convertilab-admin-2026";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  if (token !== ADMIN_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data, error } = await supabase.rpc("get_outils_dashboard", {
    admin_token: ADMIN_TOKEN,
  });

  if (error) {
    console.error("[admin/outils] error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const d = data as Record<string, unknown[]>;

  return NextResponse.json({
    generated_at: new Date().toISOString(),
    outils: {
      "SEO Check":         { icon: "🔍", leads: d.seo_audits || [],         cols: ["domain", "score_global", "grade"] },
      "Speed Check":       { icon: "⚡", leads: d.speed_audits || [],       cols: ["domain", "score_global", "grade"] },
      "Design Score":      { icon: "🎨", leads: d.design_audits || [],      cols: ["domain", "score_global", "grade"] },
      "Estimateur Ads":    { icon: "📊", leads: d.ads_estimations || [],    cols: ["sector", "budget_monthly", "estimated_roas"] },
      "Comparateur Sites": { icon: "⚖️",  leads: d.site_comparisons || [],  cols: ["domain_a", "domain_b", "winner"] },
      "Robots Generator":  { icon: "⚙️",  leads: d.robots_generations || [], cols: ["domain", "urls_discovered"] },
      "Rapport Sectoriel": { icon: "📈", leads: d.sector_reports || [],     cols: ["sector_name"] },
      "Mentions Légales":  { icon: "📄", leads: d.mentions_legales || [],   cols: ["company", "company_type", "siret"] },
      "Chatbot Audit":     { icon: "🤖", leads: d.chatbot_leads || [],      cols: ["domain", "score_global", "grade"] },
    },
  });
}
