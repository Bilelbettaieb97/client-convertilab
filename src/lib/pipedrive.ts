const PIPEDRIVE_TOKEN = process.env.PIPEDRIVE_API_TOKEN;
const PIPEDRIVE_BASE = "https://api.pipedrive.com/v1";

// Premier stage de chaque pipeline
const STAGE_FORMULAIRES = 12; // Pipeline "Formulaires" → Nouveau
const STAGE_OUTILS = 16;      // Pipeline "Outils" → Nouveau

// Champ custom "Source" sur les deals
const SOURCE_FIELD_KEY = "5e4c0a430208828f8b265769eb91b4af32c3a205";

// Mapping formType → option ID du champ Source
const SOURCE_OPTIONS: Record<string, number> = {
  "Contact": 61,
  "Newsletter": 62,
  "Devis": 63,
  "Demande Maquette": 64,
  "Estimation Prix": 65,
  "Offre Mensuelle": 66,
  "HeroMiniForm": 67,
  "Estimateur Ads": 68,
  "Design Score": 69,
  "SEO Check": 70,
  "Comparateur Sites": 71,
  "Speed Check": 72,
  "Robots Generator": 73,
  "Mentions Legales": 74,
  "Rapport Sectoriel": 75,
};

const FORMULAIRES_SOURCES = new Set(Object.keys(SOURCE_OPTIONS).slice(0, 7));

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
    if (email) {
      const searchRes = await fetch(
        `${PIPEDRIVE_BASE}/persons/search?term=${encodeURIComponent(email)}&fields=email&api_token=${PIPEDRIVE_TOKEN}`
      );
      const searchData = await searchRes.json();
      if (searchData.data?.items?.length > 0) {
        personId = searchData.data.items[0].item.id;
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

    const dealBody: Record<string, unknown> = {
      title: `${formType}${name ? ` — ${name}` : email ? ` — ${email}` : ""}`,
      stage_id: stageId,
      channel: isFormulaires ? 3 : 6, // 3 = Web forms, 6 = Web visitors
      ...(personId ? { person_id: personId } : {}),
      ...(sourceOptionId ? { [SOURCE_FIELD_KEY]: sourceOptionId } : {}),
    };

    const dealRes = await fetch(`${PIPEDRIVE_BASE}/deals?api_token=${PIPEDRIVE_TOKEN}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dealBody),
    });
    const dealData = await dealRes.json();
    const dealId = dealData.data?.id;

    // Ajouter une note avec tous les détails
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
