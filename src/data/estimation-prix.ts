import { PRICING } from "@/lib/constants";

/**
 * Grille du simulateur de prix (/estimation-prix-site-web).
 * La base de chaque type vient de PRICING (constants.ts, seule source de vérité des prix
 * publics). Les suppléments par option ci-dessous sont indicatifs : ils servent à afficher
 * une fourchette à l'écran avant la demande de coordonnées. Le devis écrit envoyé sous
 * 24 h reste la référence. À ajuster ici si la politique tarifaire change.
 */

export const SUPPLEMENTS: Record<string, number> = {
  // Site vitrine
  seo: 0, // optimisation de base incluse
  "one-page": 0,
  "multi-pages": 0,
  blog: 150,
  "contact-form": 0, // inclus
  rdv: 150,
  multilingue: 300,
  "design-sur-mesure": 0, // inclus
  "reseaux-sociaux": 50,
  vitesse: 0, // inclus
  hebergement: 0, // première année incluse, forfait mensuel ensuite
  // E-commerce
  paiement: 0, // inclus
  produits: 0, // inclus
  commandes: 0, // inclus
  livraison: 100,
  promo: 100,
  "compte-client": 200,
  avis: 100,
  "seo-ecommerce": 200,
  // Landing page
  "design-premium": 100,
  copywriting: 150,
  tracking: 100,
  "formulaire-avance": 100,
  crm: 200,
};

/** Pages au-delà des 5 incluses : entre 50 et 100 € la page (FAQ publique de l'offre). */
export const SUPPLEMENT_PAGES: Record<string, number> = { "1": 0, "2-5": 0, "5-10": 250, "10+": 500 };
/** Catalogue : au-delà de 50 produits, import et structuration en plus. */
export const SUPPLEMENT_PRODUITS: Record<string, number> = { "1-10": 0, "10-50": 0, "50-200": 200, "200+": 500 };
/** Refonte : chaque axe d'amélioration au-delà du design ajoute du travail. */
export const SUPPLEMENT_REFONTE_AXE = 100;

export interface Fourchette {
  min: number;
  max: number;
  base: number;
  libelle: string;
}

export function estimerFourchette(form: {
  site_type: string;
  options: string[];
  page_count: string;
  product_count: string;
  refonte_improvements: string[];
}): Fourchette | null {
  let base = 0;
  let libelle = "";
  if (form.site_type === "vitrine") { base = PRICING.vitrine.from; libelle = "Site vitrine"; }
  else if (form.site_type === "ecommerce") { base = PRICING.ecommerce.from; libelle = "Site e-commerce"; }
  else if (form.site_type === "landing") { base = PRICING.landing.from; libelle = "Landing page"; }
  else if (form.site_type === "refonte") { base = PRICING.refonte.from; libelle = "Refonte de site"; }
  else return null;

  let supplements = form.options.reduce((s, o) => s + (SUPPLEMENTS[o] ?? 0), 0);
  if (form.site_type === "vitrine") supplements += SUPPLEMENT_PAGES[form.page_count] ?? 0;
  if (form.site_type === "ecommerce") supplements += SUPPLEMENT_PRODUITS[form.product_count] ?? 0;
  if (form.site_type === "refonte") supplements += Math.max(0, form.refonte_improvements.length - 1) * SUPPLEMENT_REFONTE_AXE;

  const min = base + supplements;
  // Marge haute de 20 % arrondie à la dizaine : couvre les contenus à rédiger ou les intégrations à préciser.
  const max = Math.ceil((min * 1.2) / 10) * 10;
  return { min, max, base, libelle };
}

export function formatEuros(n: number): string {
  return n.toLocaleString("fr-FR") + " €";
}
