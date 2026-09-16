import { Globe, Megaphone, Search, Users } from "lucide-react";
import type { FormulaireOption } from "./FormulaireFinal";

/**
 * Les quatre pôles comme réponses de l'étape 1 du formulaire final, sur les
 * pages qui ne sont pas rattachées à un pôle (accueil, hub /services). Les
 * valeurs sont celles de `fields.project` lues par /api/notify et par la
 * série email « Contact » (src/lib/email-series.ts, PROJET_LABELS). Même
 * ordre que src/data/poles.ts.
 */
export const BESOINS_QUATRE_POLES: FormulaireOption[] = [
  { value: "site", label: "Un site internet", desc: "Vitrine, e-commerce, landing page, refonte", icon: <Globe /> },
  { value: "publicite", label: "De la publicité", desc: "Google Ads, Meta Ads, TikTok, Pinterest, LinkedIn", icon: <Megaphone /> },
  { value: "seo-ia", label: "Être trouvé sur Google et dans les IA", desc: "SEO, fiche Google, ChatGPT", icon: <Search /> },
  { value: "crm", label: "Un CRM et des relances automatiques", desc: "HubSpot, Salesforce, Pipedrive, relances, IA", icon: <Users /> },
];
