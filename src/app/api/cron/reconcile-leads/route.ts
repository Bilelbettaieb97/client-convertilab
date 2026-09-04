import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { pushToPipedrive } from "@/lib/pipedrive";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const PIPEDRIVE_TOKEN = process.env.PIPEDRIVE_API_TOKEN;
const PIPEDRIVE_BASE = "https://api.pipedrive.com/v1";

/**
 * Fenêtre volontairement courte (48h).
 *
 * Créer une personne dans Pipedrive déclenche l'automatisation qui envoie
 * « votre demande a bien été reçue » par email et SMS. Rattraper un lead
 * vieux de plusieurs semaines enverrait donc cet accusé de réception très en
 * retard, ce qui décrédibilise (constaté le 04/09/2026 : un lead du 20/08
 * rattrapé a reçu l'accusé 15 jours après coup).
 *
 * Ce filet sert aux leads perdus À L'INSTANT par un appel réseau échoué,
 * pas à l'archéologie. Les leads plus anciens se reprennent à la main.
 */
const FENETRE_HEURES = 48;

/** On laisse /api/notify faire son travail avant d'intervenir. */
const MIN_MINUTES = 10;

/**
 * Toutes les tables qui reçoivent des leads. Chaque formulaire écrit dans sa
 * propre table : ne surveiller que `contact_submissions` laisserait passer les
 * demandes de devis et les estimations de prix (c'est ce qui a fait manquer un
 * lead « Estimation Prix » du 17/08/2026).
 *
 * Le formType doit être identique à celui envoyé par le formulaire : c'est lui
 * qui choisit le pipeline Pipedrive et la série email.
 */
const COLONNES_COMMUNES = "name, email, phone, company, created_at";

const SOURCES: Array<{
  table: string;
  formType: string;
  colonnes: string;
  /** Certaines tables reçoivent plusieurs formulaires : on affine au cas par cas. */
  formTypeDe?: (lead: Lead) => string;
}> = [
  { table: "contact_submissions", formType: "Contact", colonnes: COLONNES_COMMUNES },
  {
    table: "devis_submissions",
    formType: "Devis",
    colonnes: `${COLONNES_COMMUNES}, offer`,
    // Le formulaire Offre Mensuelle écrit dans CETTE MÊME table que le formulaire
    // Devis. Sans distinction, un lead Offre Mensuelle rattrapé partait avec la
    // mauvaise source Pipedrive et la mauvaise série email. Seule l'Offre Mensuelle
    // enregistre un tarif récurrent dans `offer` (DevisClient.tsx), et son étape 1
    // est verrouillée tant qu'aucune offre n'est choisie : le repère est fiable.
    formTypeDe: (lead) =>
      String(lead.offer ?? "").includes("€/mois") ? "Offre Mensuelle" : "Devis",
  },
  { table: "price_estimations", formType: "Estimation Prix", colonnes: COLONNES_COMMUNES },
  { table: "offer_reservations", formType: "Offre Speciale", colonnes: COLONNES_COMMUNES },
];

interface Lead {
  name: string | null;
  email: string | null;
  phone: string | null;
  company: string | null;
  created_at: string;
  offer?: string | null;
}

/** La personne existe-t-elle déjà dans Pipedrive ? */
async function existeDansPipedrive(email: string): Promise<boolean> {
  const res = await fetch(
    `${PIPEDRIVE_BASE}/persons/search?term=${encodeURIComponent(email)}&fields=email&exact_match=true&api_token=${PIPEDRIVE_TOKEN}`
  );
  const data = await res.json();
  return Boolean(data.data?.items?.length);
}

/**
 * Filet de sécurité : rattrape les leads présents en base mais absents du CRM.
 *
 * L'appel à /api/notify part du navigateur sans être attendu : si le visiteur
 * ferme son onglet ou perd sa connexion juste après l'envoi, la ligne est bien
 * écrite dans Supabase mais Pipedrive ne reçoit jamais rien, sans la moindre
 * alerte. Deux leads ont été perdus ainsi en août 2026.
 */
export async function GET(request: NextRequest) {
  const auth = request.headers.get("authorization");
  if (process.env.CRON_SECRET && auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!PIPEDRIVE_TOKEN) {
    return NextResponse.json({ error: "PIPEDRIVE_API_TOKEN manquant" }, { status: 500 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const maintenant = Date.now();
  const depuis = new Date(maintenant - FENETRE_HEURES * 60 * 60 * 1000).toISOString();
  const jusqua = new Date(maintenant - MIN_MINUTES * 60 * 1000).toISOString();

  // La recherche Pipedrive est indexée avec un léger retard : sans ce garde-fou,
  // un même email présent dans deux tables créerait deux fiches.
  const dejaTraites = new Set<string>();
  const rattrapes: string[] = [];
  const echecs: string[] = [];
  const tablesIgnorees: string[] = [];
  let analyses = 0;

  for (const source of SOURCES) {
    const { data, error } = await supabase
      .from(source.table)
      .select(source.colonnes)
      .gte("created_at", depuis)
      .lte("created_at", jusqua)
      .order("created_at", { ascending: false });

    if (error) {
      // Table absente ou colonnes différentes : on la signale sans bloquer les autres.
      console.error(`[reconcile-leads] ${source.table}:`, error.message);
      tablesIgnorees.push(source.table);
      continue;
    }

    // Double conversion imposée par PostgREST : la liste de colonnes varie selon la
    // table, donc `select()` reçoit une chaîne non littérale et le client renonce à
    // inférer la ligne. Le contenu réel est bien celui décrit par `Lead`.
    for (const lead of (data ?? []) as unknown as Lead[]) {
      const email = lead.email?.trim().toLowerCase();
      if (!email || dejaTraites.has(email)) continue;
      dejaTraites.add(email);
      analyses++;

      try {
        if (await existeDansPipedrive(email)) continue;

        const formType = source.formTypeDe ? source.formTypeDe(lead) : source.formType;

        await pushToPipedrive(
          formType,
          lead.name ?? undefined,
          email,
          lead.phone ?? undefined,
          lead.company ?? undefined,
          {
            origine: "rattrapage automatique",
            source: source.table,
            recu_le: new Date(lead.created_at).toLocaleString("fr-FR"),
          }
        );
        rattrapes.push(`${email} (${source.table})`);
      } catch (err) {
        console.error(`[reconcile-leads] échec ${email}:`, err);
        echecs.push(email);
      }
    }
  }

  if (rattrapes.length) {
    console.warn(`[reconcile-leads] ${rattrapes.length} lead(s) rattrapé(s):`, rattrapes);
  }

  return NextResponse.json({
    ok: true,
    analyses,
    rattrapes: rattrapes.length,
    echecs: echecs.length,
    details: { rattrapes, echecs, tablesIgnorees },
  });
}
