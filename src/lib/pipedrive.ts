const PIPEDRIVE_TOKEN = process.env.PIPEDRIVE_API_TOKEN;
const PIPEDRIVE_BASE = "https://api.pipedrive.com/v1";

// Premier stage de chaque pipeline
const STAGE_FORMULAIRES = 12; // Pipeline "Formulaires" → Nouveau
const STAGE_OUTILS = 16;      // Pipeline "Outils" → Nouveau

// Champ custom "Source" sur les deals
const SOURCE_FIELD_KEY = "5e4c0a430208828f8b265769eb91b4af32c3a205";

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

function formatValue(v: unknown): string {
  if (v === null || v === undefined || v === "") return "—";
  if (typeof v === "boolean") return v ? "Oui" : "Non";
  if (Array.isArray(v)) return v.map(String).join(", ");
  if (typeof v === "object") return JSON.stringify(v);
  return String(v);
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

    // Create person if not found
    if (!personId) {
      const personBody: Record<string, unknown> = { name: name || email || "Inconnu" };
      if (email) personBody.email = [{ value: email, primary: true }];
      if (phone) personBody.phone = [{ value: phone, primary: true }];
      if (company) personBody.org_name = company;

      const personRes = await fetch(`${PIPEDRIVE_BASE}/persons?api_token=${PIPEDRIVE_TOKEN}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(personBody),
      });
      const personData = await personRes.json();
      personId = personData.data?.id ?? null;
    }

    // Router vers le bon pipeline + champ Source
    const stageId = FORMULAIRES_SOURCES.has(formType) ? STAGE_FORMULAIRES : STAGE_OUTILS;
    const sourceOptionId = SOURCE_OPTIONS[formType] ?? null;
    const isFormulaires = FORMULAIRES_SOURCES.has(formType);

    // Map known fields to Pipedrive custom field keys
    const customFields: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(fields)) {
      if (v !== null && v !== undefined && v !== "" && FIELD_MAP[k]) {
        customFields[FIELD_MAP[k]] = v;
      }
    }

    const dealBody: Record<string, unknown> = {
      title: `${formType}${name ? ` — ${name}` : email ? ` — ${email}` : ""}`,
      stage_id: stageId,
      channel: isFormulaires ? 3 : 6,
      ...(personId ? { person_id: personId } : {}),
      ...(sourceOptionId ? { [SOURCE_FIELD_KEY]: sourceOptionId } : {}),
      ...customFields,
    };

    const dealRes = await fetch(`${PIPEDRIVE_BASE}/deals?api_token=${PIPEDRIVE_TOKEN}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dealBody),
    });
    const dealData = await dealRes.json();
    const dealId = dealData.data?.id;

    // Si la personne existait déjà, ajouter une note sur ses deals ouverts précédents
    if (dealId && personAlreadyExisted && personId) {
      const existingDealsRes = await fetch(
        `${PIPEDRIVE_BASE}/persons/${personId}/deals?status=open&api_token=${PIPEDRIVE_TOKEN}`
      );
      const existingDealsData = await existingDealsRes.json();
      const existingDeals: Array<{ id: number }> = existingDealsData.data || [];

      for (const deal of existingDeals) {
        if (deal.id !== dealId) {
          await fetch(`${PIPEDRIVE_BASE}/notes?api_token=${PIPEDRIVE_TOKEN}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              content: `🔔 Ce lead a utilisé l'outil ${formType} le ${new Date().toLocaleString("fr-FR")} — Deal #${dealId}`,
              deal_id: deal.id,
            }),
          });
        }
      }
    }

    // Note de synthèse avec tous les détails non mappés + date
    if (dealId) {
      const noteLines = Object.entries(fields)
        .filter(([, v]) => v !== null && v !== undefined && v !== "")
        .map(([k, v]) => `• ${k.replace(/_/g, " ")}: ${formatValue(v)}`);

      const noteContent = [
        `Source: ${formType}`,
        `Date: ${new Date().toLocaleString("fr-FR")}`,
        ...(noteLines.length ? ["", ...noteLines] : []),
      ].join("\n");

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
