import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const ADMIN_TOKEN = process.env.ADMIN_DASHBOARD_TOKEN || "convertilab-admin-2026";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  if (token !== ADMIN_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const [
    seoAudits,
    speedAudits,
    designAudits,
    adsEstimations,
    siteComparisons,
    robotsGenerations,
    sectorReports,
    mentionsLegales,
    chatbotLeads,
  ] = await Promise.all([
    supabase.from("seo_audits").select("id,name,email,phone,company,domain,score_global,grade,email_sent,created_at,report_html").order("created_at", { ascending: false }),
    supabase.from("speed_audits").select("id,name,email,phone,company,domain,score_global,grade,email_sent,created_at,report_html").order("created_at", { ascending: false }),
    supabase.from("design_audits").select("id,name,email,phone,company,domain,score_global,grade,email_sent,created_at,report_html").order("created_at", { ascending: false }),
    supabase.from("ads_estimations").select("id,name,email,phone,company,sector,budget_monthly,estimated_roas,email_sent,created_at").order("created_at", { ascending: false }),
    supabase.from("site_comparisons").select("id,name,email,phone,company,domain_a,domain_b,score_a,score_b,winner,email_sent,created_at,report_html").order("created_at", { ascending: false }),
    supabase.from("robots_generations").select("id,name,email,phone,company,domain,urls_discovered,email_sent,created_at").order("created_at", { ascending: false }),
    supabase.from("sector_reports").select("id,name,email,phone,company,sector_name,email_sent,created_at").order("created_at", { ascending: false }),
    supabase.from("mentions_legales").select("id,name,email,phone,company,company_type,siret,email_sent,created_at").order("created_at", { ascending: false }),
    supabase.from("chatbot_leads").select("id,name,email,phone,domain,score_global,grade,email_sent,created_at").order("created_at", { ascending: false }),
  ]);

  return NextResponse.json({
    generated_at: new Date().toISOString(),
    outils: {
      "SEO Check":         { icon: "🔍", leads: seoAudits.data || [],         cols: ["domain", "score_global", "grade"] },
      "Speed Check":       { icon: "⚡", leads: speedAudits.data || [],       cols: ["domain", "score_global", "grade"] },
      "Design Score":      { icon: "🎨", leads: designAudits.data || [],      cols: ["domain", "score_global", "grade"] },
      "Estimateur Ads":    { icon: "📊", leads: adsEstimations.data || [],    cols: ["sector", "budget_monthly", "estimated_roas"] },
      "Comparateur Sites": { icon: "⚖️",  leads: siteComparisons.data || [],  cols: ["domain_a", "domain_b", "winner"] },
      "Robots Generator":  { icon: "⚙️",  leads: robotsGenerations.data || [], cols: ["domain", "urls_discovered"] },
      "Rapport Sectoriel": { icon: "📈", leads: sectorReports.data || [],     cols: ["sector_name"] },
      "Mentions Légales":  { icon: "📄", leads: mentionsLegales.data || [],   cols: ["company", "company_type", "siret"] },
      "Chatbot Audit":     { icon: "🤖", leads: chatbotLeads.data || [],      cols: ["domain", "score_global", "grade"] },
    },
  });
}
