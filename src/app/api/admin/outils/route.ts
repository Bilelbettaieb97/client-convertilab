import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { timingSafeEqual } from "node:crypto";

export const dynamic = "force-dynamic";

// La RPC get_outils_dashboard renvoie toutes les tables de leads : depuis le
// 24/09/2026 elle n'est plus exécutable par `anon`, donc cette route doit
// passer par la service role key et non plus par la clé anon publique.
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// Comparaison à temps constant : sans elle, le temps de réponse laisse deviner
// le jeton caractère par caractère.
function tokenMatches(candidate: string | null, expected: string): boolean {
  if (!candidate) return false;
  const a = Buffer.from(candidate);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

export async function GET(request: NextRequest) {
  // Aucune valeur de repli : un jeton codé en dur ici finirait publié avec le
  // code. Variable absente = la route refuse de servir.
  const expected = process.env.ADMIN_DASHBOARD_TOKEN;
  if (!expected) {
    console.error("[admin/outils] ADMIN_DASHBOARD_TOKEN manquant");
    return NextResponse.json(
      { error: "Server misconfigured" },
      { status: 500, headers: CORS_HEADERS }
    );
  }

  // En-tête Authorization de préférence ; ?token= reste accepté pour les
  // dashboards HTML existants, mais il fuite dans les logs et le Referer.
  const bearer = request.headers.get("authorization")?.replace(/^Bearer /, "") ?? null;
  const token = bearer ?? request.nextUrl.searchParams.get("token");

  if (!tokenMatches(token, expected)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401, headers: CORS_HEADERS });
  }

  const { data, error } = await supabase.rpc("get_outils_dashboard", {
    admin_token: expected,
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
      // Pages de service (16/09/2026) : ressource PDF après le hero, diagnostic interactif avec score.
      "Lead magnet":       { icon: "📘", leads: d.lead_magnet_requests || [] },
      "Diagnostic":        { icon: "🩺", leads: d.diagnostic_requests || [] },
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
      // Page /promo-site-web : le formulaire écrit dans promo_leads (RPC upsert_promo_lead),
      // plus dans offer_reservations, vide depuis la refonte de la page.
      "Offre Spéciale":   { icon: "🎁", leads: d.promo_leads || [] },
    },
  }, { headers: CORS_HEADERS });
}
