const PIPEDRIVE_TOKEN = process.env.PIPEDRIVE_API_TOKEN;
const PIPEDRIVE_BASE = "https://api.pipedrive.com/v1";

// Premier stage de chaque pipeline
const STAGE_META_ADS    = 1;  // Pipeline "Meta Ads" → Nouveau lead
const STAGE_FORMULAIRES = 12; // Pipeline "Formulaires" → Nouveau
const STAGE_OUTILS      = 16; // Pipeline "Outils" → Nouveau
const STAGE_GOOGLE_ADS  = 22; // Pipeline "Google Ads" → Nouveau lead

/**
 * Les leads issus des landings publicitaires Google ont leur propre pipeline :
 * le volume va monter et ils se travaillent différemment des formulaires du
 * site (trafic payant, intention plus chaude, relance plus rapide).
 */
const GOOGLE_ADS_SOURCES = new Set(["Site Internet (Google Ads)"]);

// Sources qui vont dans le pipeline Meta Ads
const META_ADS_SOURCES = new Set(["promo_lead"]);

// Champ custom "Source" sur les deals
const SOURCE_FIELD_KEY = "5e4c0a430208828f8b265769eb91b4af32c3a205";

/**
 * Champ "Source" sur la PERSONNE : d'où vient ce contact.
 *
 * Une automatisation Pipedrive crée un deal dans le pipeline Meta Ads à chaque
 * nouveau contact, quelle que soit son origine. Sans ce champ, impossible de
 * distinguer un vrai lead Meta d'un visiteur venu du site ou d'un outil.
 * Les leads Meta sont créés par Zapier : c'est lui qui doit y mettre "META".
 */
const PERSON_SOURCE_FIELD_KEY = "3664166e27d8cbc677739c9a4a49f089016b332a";

const PERSON_SOURCE_OPTIONS = {
  META: 85,
  FORMULAIRE: 86,
  OUTIL: 87,
  GOOGLE_ADS: 88,
} as const;

/**
 * Champ "SOURCE DE CANAL" sur le DEAL : même information que sur la personne,
 * mais au niveau du deal — les rapports Pipedrive se construisent sur les
 * deals, c'est donc là qu'il faut le canal pour segmenter les statistiques.
 *
 * À ne pas confondre avec le champ "Source" du deal, plus fin, qui indique
 * quel formulaire ou quel outil précis a été utilisé (SEO Check, Devis…).
 */
const DEAL_CHANNEL_FIELD_KEY = "5d3e9b5db28527e066a6edb21997770d63f2433f";

const DEAL_CHANNEL_OPTIONS = {
  META: 89,
  FORMULAIRE: 90,
  OUTIL: 91,
  GOOGLE_ADS: 92,
} as const;

// Mapping formType → option ID du champ Source
const SOURCE_OPTIONS: Record<string, number> = {
  // Formulaires — Pipeline 2
  "Contact":          61,
  "Newsletter":       62,
  "Devis":            63,
  "Demande Maquette": 64,
  "Estimation Prix":  65,
  "Offre Mensuelle":  66,
  "HeroMiniForm":     67,
  "Offre Speciale":   76,
  // Outils — Pipeline 3
  "Estimateur Ads":   68,
  "Design Score":     69,
  "SEO Check":        70,
  "Comparateur Sites":71,
  "Speed Check":      72,
  "Robots Generator": 73,
  "Mentions Legales": 74,
  "Rapport Sectoriel":75,
  "Chatbot Audit":    77,
};

// Explicit set — ne jamais utiliser slice() sur SOURCE_OPTIONS
const FORMULAIRES_SOURCES = new Set([
  "Contact",
  "Newsletter",
  "Devis",
  "Demande Maquette",
  "Estimation Prix",
  "Offre Mensuelle",
  "Offre Speciale",
  "HeroMiniForm",
]);

// Custom deal field keys (created via API)
const FIELD_DOMAIN    = "43d9aed9b2c3498f85e3a1dd157ab30609c406ef"; // varchar
const FIELD_GRADE     = "ba36aa8159c44a6b32579a2250ef74cc7c274fa5"; // varchar
const FIELD_SCORE     = "4104ebb8631c9fe672a8e7240e14e6795ccad32c"; // double
const FIELD_CRITICAL  = "5da08ebe43bda52c48386dcf3133a36c4ec3b4a5"; // double
const FIELD_SECTOR    = "66df0173eeff6376c4893d7d39ad54515b043fe9"; // varchar
const FIELD_ROAS      = "7181af71caa328c9dd915401cda03384617fa7ea"; // double
const FIELD_BUDGET    = "838db9b0947b27640c671689346d3662a9c90556"; // double
const FIELD_LEADS_MO  = "4409c52e261aa453f0bddaac5510685ce3c5d78c"; // double
const FIELD_SITE_A    = "13fd62cc581f8197dac4162a5ccca1e4e5f29bed"; // varchar
const FIELD_SITE_B    = "9ac7599082e38ed68231541c4cf52bb05f8837c2"; // varchar
const FIELD_WINNER    = "bc30697022e9d94fe831a41d35d0aea02b7b8d41"; // varchar
const FIELD_SIRET     = "e298b82cc05176257da713a810fb4e49e143241e"; // varchar
const FIELD_LEGAL     = "e9225f3686fb55a748638ee855942fa9e1f3ab89"; // varchar

// Maps incoming `fields` keys to Pipedrive custom field keys
const FIELD_MAP: Record<string, string> = {
  domain:          FIELD_DOMAIN,
  grade:           FIELD_GRADE,
  score_global:    FIELD_SCORE,
  critical_count:  FIELD_CRITICAL,
  sector:          FIELD_SECTOR,
  roas:            FIELD_ROAS,
  budget_monthly:  FIELD_BUDGET,
  leads_monthly:   FIELD_LEADS_MO,
  site_a:          FIELD_SITE_A,
  site_b:          FIELD_SITE_B,
  winner:          FIELD_WINNER,
  siret:           FIELD_SIRET,
  company_type:    FIELD_LEGAL,
};

type Canal = "META" | "FORMULAIRE" | "OUTIL" | "GOOGLE_ADS";

/**
 * Canal d'acquisition déduit du formType.
 * Meta n'apparaît pas ici : ces leads sont créés par Zapier, pas par ce code.
 */
function canalDAcquisition(formType: string): Canal {
  if (formType === "Site Internet (Google Ads)") return "GOOGLE_ADS";
  if (META_ADS_SOURCES.has(formType)) return "META";
  if (FORMULAIRES_SOURCES.has(formType) || formType.startsWith("Devis - ")) {
    return "FORMULAIRE";
  }
  return "OUTIL";
}

function formatValue(v: unknown): string {
  if (v === null || v === undefined || v === "") return "—";
  if (typeof v === "boolean") return v ? "Oui" : "Non";
  if (Array.isArray(v)) return v.map(String).join(", ");
  if (typeof v === "object") return JSON.stringify(v);
  return String(v);
}

/**
 * Rattache une note au dernier deal ouvert d'une personne, retrouvée par email.
 *
 * Sert aux précisions envoyées APRÈS la création du lead (écran de
 * remerciement) : on enrichit le deal existant au lieu d'en créer un doublon.
 * Ne throw jamais — un échec ici ne doit pas casser le parcours du lead.
 */
export async function addNoteToLatestDeal(
  email: string,
  content: string,
  titleContains?: string
): Promise<boolean> {
  if (!PIPEDRIVE_TOKEN || !email) return false;

  try {
    const searchRes = await fetch(
      `${PIPEDRIVE_BASE}/persons/search?term=${encodeURIComponent(email)}&fields=email&api_token=${PIPEDRIVE_TOKEN}`
    );
    const searchData = await searchRes.json();
    const personId: number | undefined = searchData.data?.items?.[0]?.item?.id;
    if (!personId) return false;

    const dealsRes = await fetch(
      `${PIPEDRIVE_BASE}/persons/${personId}/deals?status=open&api_token=${PIPEDRIVE_TOKEN}`
    );
    const dealsData = await dealsRes.json();
    const deals: Array<{ id: number; title?: string; add_time?: string }> = dealsData.data || [];
    if (!deals.length) return false;

    const parDateDesc = (
      a: { add_time?: string },
      b: { add_time?: string }
    ) => String(b.add_time ?? "").localeCompare(String(a.add_time ?? ""));

    // On vise le deal issu de CE formulaire (son titre commence par le formType).
    // Sans ce filtre, une automatisation qui crée un deal quelques secondes plus
    // tard (pipeline Meta Ads) recevrait la note à la place.
    const candidats = titleContains
      ? deals.filter((d) => (d.title ?? "").includes(titleContains))
      : deals;

    const deal = [...(candidats.length ? candidats : deals)].sort(parDateDesc)[0];

    const noteRes = await fetch(`${PIPEDRIVE_BASE}/notes?api_token=${PIPEDRIVE_TOKEN}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content, deal_id: deal.id }),
    });
    const noteData = await noteRes.json();
    return Boolean(noteData.success);
  } catch (err) {
    console.error("[pipedrive] addNoteToLatestDeal error:", err);
    return false;
  }
}

export async function pushToPipedrive(
  formType: string,
  name?: string,
  email?: string,
  phone?: string,
  company?: string,
  fields: Record<string, unknown> = {}
) {
  if (!PIPEDRIVE_TOKEN) return;

  try {
    // Find existing person by email
    let personId: number | null = null;
    let personAlreadyExisted = false;
    if (email) {
      const searchRes = await fetch(
        `${PIPEDRIVE_BASE}/persons/search?term=${encodeURIComponent(email)}&fields=email&api_token=${PIPEDRIVE_TOKEN}`
      );
      const searchData = await searchRes.json();
      if (searchData.data?.items?.length > 0) {
        personId = searchData.data.items[0].item.id;
        personAlreadyExisted = true;
      }
    }

    // Create or update person
    if (!personId) {
      // Resolve org_id from company name (org_name is not a valid API field)
      let orgId: number | null = null;
      if (company) {
        const orgSearchRes = await fetch(
          `${PIPEDRIVE_BASE}/organizations/search?term=${encodeURIComponent(company)}&fields=name&api_token=${PIPEDRIVE_TOKEN}`
        );
        const orgSearchData = await orgSearchRes.json();
        if (orgSearchData.data?.items?.length > 0) {
          orgId = orgSearchData.data.items[0].item.id;
        } else {
          const orgRes = await fetch(`${PIPEDRIVE_BASE}/organizations?api_token=${PIPEDRIVE_TOKEN}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: company }),
          });
          const orgData = await orgRes.json();
          orgId = orgData.data?.id ?? null;
        }
      }

      const personBody: Record<string, unknown> = { name: name || email || "Inconnu" };
      if (email) personBody.email = [{ value: email, primary: true }];
      if (phone) personBody.phone = [{ value: phone, primary: true }];
      if (orgId) personBody.org_id = orgId;
      personBody[PERSON_SOURCE_FIELD_KEY] = PERSON_SOURCE_OPTIONS[canalDAcquisition(formType)];

      const personRes = await fetch(`${PIPEDRIVE_BASE}/persons?api_token=${PIPEDRIVE_TOKEN}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(personBody),
      });
      const personData = await personRes.json();
      if (!personData.success) {
        console.error("[pipedrive] person creation failed:", personData.error, personData.error_info);
      }
      personId = personData.data?.id ?? null;
    } else if (phone) {
      // Mettre à jour le téléphone si la personne existe déjà
      await fetch(`${PIPEDRIVE_BASE}/persons/${personId}?api_token=${PIPEDRIVE_TOKEN}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: [{ value: phone, primary: true }] }),
      });
    }

    // Router vers le bon pipeline + champ Source
    // "Devis - vitrine" → "Devis" pour le routage (le formType complet reste dans le titre/la note)
    const routeType = formType.startsWith("Devis - ") ? "Devis" : formType;
    const stageId = GOOGLE_ADS_SOURCES.has(routeType)
      ? STAGE_GOOGLE_ADS
      : META_ADS_SOURCES.has(routeType)
        ? STAGE_META_ADS
        : FORMULAIRES_SOURCES.has(routeType)
          ? STAGE_FORMULAIRES
          : STAGE_OUTILS;
    const sourceOptionId = SOURCE_OPTIONS[routeType] ?? null;
    const isFormulaires = FORMULAIRES_SOURCES.has(routeType);

    // Map known fields to Pipedrive custom field keys
    const customFields: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(fields)) {
      if (v !== null && v !== undefined && v !== "" && FIELD_MAP[k]) {
        customFields[FIELD_MAP[k]] = v;
      }
    }

    // Anti-doublon Meta Ads : si la personne a déjà un deal ouvert dans ce pipeline → on le réutilise
    let dealId: number | null = null;
    if (personAlreadyExisted && personId && META_ADS_SOURCES.has(formType)) {
      const existingDealsRes = await fetch(
        `${PIPEDRIVE_BASE}/persons/${personId}/deals?status=open&api_token=${PIPEDRIVE_TOKEN}`
      );
      const existingDealsData = await existingDealsRes.json();
      const existingDeals: Array<{ id: number; pipeline_id: number }> =
        existingDealsData.data || [];
      const metaDeal = existingDeals.find((d) => d.pipeline_id === 1);
      if (metaDeal) {
        dealId = metaDeal.id;
      }
    }

    if (!dealId) {
      const dealBody: Record<string, unknown> = {
        title: `${formType}${name ? ` — ${name}` : email ? ` — ${email}` : ""}`,
        stage_id: stageId,
        channel: isFormulaires ? 3 : 6,
        ...(personId ? { person_id: personId } : {}),
        ...(sourceOptionId ? { [SOURCE_FIELD_KEY]: sourceOptionId } : {}),
        [DEAL_CHANNEL_FIELD_KEY]: DEAL_CHANNEL_OPTIONS[canalDAcquisition(formType)],
        ...customFields,
      };

      const dealRes = await fetch(`${PIPEDRIVE_BASE}/deals?api_token=${PIPEDRIVE_TOKEN}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dealBody),
      });
      const dealData = await dealRes.json();
      dealId = dealData.data?.id ?? null;
    }

    // Note de synthèse avec tous les détails
    if (dealId) {
      let noteContent: string;

      if (formType === "promo_lead") {
        const lines = [
          `📋 LEAD PROMO SITE WEB — 300€`,
          `📅 ${new Date().toLocaleString("fr-FR")}`,
          ``,
          `👤 ${name || "—"}`,
          `📧 ${email || "—"}`,
          `📞 ${phone || "—"}`,
          ...(fields.entreprise ? [`🏢 ${fields.entreprise}`] : []),
          ``,
          `📍 Situation : ${fields.situation || "—"}`,
          `🎯 Objectif  : ${fields.objectif  || "—"}`,
          ...(fields.infos_supp ? [``, `💬 Infos supplémentaires :`, String(fields.infos_supp)] : []),
          ...(fields.slot_at    ? [``, `📆 RDV réservé : ${new Date(String(fields.slot_at)).toLocaleString("fr-FR")}`] : []),
        ];
        noteContent = lines.join("\n");
      } else {
        const noteLines = Object.entries(fields)
          .filter(([, v]) => v !== null && v !== undefined && v !== "")
          .map(([k, v]) => `• ${k.replace(/_/g, " ")}: ${formatValue(v)}`);
        noteContent = [
          `Source: ${formType}`,
          `Date: ${new Date().toLocaleString("fr-FR")}`,
          ...(noteLines.length ? ["", ...noteLines] : []),
        ].join("\n");
      }

      await fetch(`${PIPEDRIVE_BASE}/notes?api_token=${PIPEDRIVE_TOKEN}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: noteContent, deal_id: dealId }),
      });
    }
  } catch (err) {
    console.error("[pipedrive] error:", err);
  }
}
