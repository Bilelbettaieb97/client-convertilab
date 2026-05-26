const PIPEDRIVE_TOKEN = process.env.PIPEDRIVE_API_TOKEN;
const PIPEDRIVE_BASE = "https://api.pipedrive.com/v1";

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

    // Build note from extra fields
    const noteLines = Object.entries(fields)
      .filter(([, v]) => v !== null && v !== undefined && v !== "")
      .map(([k, v]) => `• ${k.replace(/_/g, " ")}: ${formatValue(v)}`);

    const noteContent = [
      `Source: ${formType}`,
      `Date: ${new Date().toLocaleString("fr-FR")}`,
      ...(noteLines.length ? ["", ...noteLines] : []),
    ].join("\n");

    // Create lead
    const leadBody: Record<string, unknown> = {
      title: `${formType}${name ? ` — ${name}` : email ? ` — ${email}` : ""}`,
      ...(personId ? { person_id: personId } : {}),
    };

    const leadRes = await fetch(`${PIPEDRIVE_BASE}/leads?api_token=${PIPEDRIVE_TOKEN}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leadBody),
    });
    const leadData = await leadRes.json();
    const leadId = leadData.data?.id;

    // Add note to lead
    if (leadId) {
      await fetch(`${PIPEDRIVE_BASE}/notes?api_token=${PIPEDRIVE_TOKEN}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: noteContent, lead_id: leadId }),
      });
    }
  } catch (err) {
    console.error("[pipedrive] error:", err);
  }
}
