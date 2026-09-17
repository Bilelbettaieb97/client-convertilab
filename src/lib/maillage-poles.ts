import type { PoleCle } from "@/components/internal-links/RelatedServicesSection";

/**
 * Maillage des pages automatisées (villes, secteurs, glossaire, guides) vers
 * les quatre pôles et les articles du blog : pour chaque famille, les pôles à
 * mettre en avant et les thèmes qui sélectionnent les articles suggérés.
 * Aucune donnée client : uniquement des liens.
 */
export interface Maillage {
  poles: PoleCle[];
  themes: string[];
}

/** Familles de secteurs : chaque slug de src/data/sectors.ts est rattaché à une famille. */
const FAMILLES_SECTEURS: Record<string, Maillage> = {
  boutique: { poles: ["site", "publicite", "seo", "crm"], themes: ["boutique en ligne", "e-commerce", "pinterest", "meta ads", "site internet"] },
  artisan: { poles: ["site", "seo", "publicite", "crm"], themes: ["site vitrine", "referencement local", "fiche google", "google ads", "creation de site"] },
  sante: { poles: ["site", "seo", "crm", "publicite"], themes: ["site vitrine", "referencement local", "fiche google", "avis clients", "rendez-vous", "crm"] },
  restauration: { poles: ["site", "seo", "publicite", "crm"], themes: ["site vitrine", "referencement local", "meta ads", "instagram", "avis clients"] },
  b2b: { poles: ["site", "crm", "publicite", "seo"], themes: ["linkedin ads", "crm", "relances", "landing page", "google ads", "site vitrine"] },
};

const SECTEUR_FAMILLE: Record<string, keyof typeof FAMILLES_SECTEURS> = {
  ecommerce: "boutique", bijouterie: "boutique", "maroquinerie-pret-a-porter": "boutique", librairie: "boutique", "cave-a-vin-caviste": "boutique", fleuriste: "boutique", opticien: "boutique", pharmacie: "boutique",
  artisan: "artisan", electricien: "artisan", plombier: "artisan", serrurier: "artisan", "paysagiste-jardinier": "artisan", "peintre-batiment": "artisan", menuisier: "artisan", carreleur: "artisan", "chauffagiste-climatisation": "artisan", demenageur: "artisan", "societe-nettoyage": "artisan", "garage-automobile": "artisan", "securite-incendie": "artisan", "recyclage-evenementiel": "artisan", "transport-logistique": "artisan",
  dentiste: "sante", medecin: "sante", osteopathe: "sante", "psychologue-therapeute": "sante", veterinaire: "sante", coiffeur: "sante", "institut-beaute": "sante", "salle-de-sport": "sante", "auto-ecole": "sante", "creche-garde-enfants": "sante",
  restaurant: "restauration", boulangerie: "restauration", traiteur: "restauration", "pizzeria-fast-food": "restauration", "hotel-chambre-hotes": "restauration",
  avocat: "b2b", comptable: "b2b", notaire: "b2b", immobilier: "b2b", "agence-immobiliere-luxe": "b2b", architecte: "b2b", startup: "b2b", coach: "b2b", "ecole-formation": "b2b", "centre-formation-professionnelle": "b2b", "cabinet-recrutement": "b2b", "agence-de-communication": "b2b", "agence-voyage": "b2b", "association-don-sang": "b2b", "spectacle-evenementiel": "b2b", photographe: "b2b",
};

export function maillageSecteur(slug: string): Maillage {
  return FAMILLES_SECTEURS[SECTEUR_FAMILLE[slug] ?? "artisan"];
}

/** Pages villes : un site, le référencement local, Google Ads, puis le CRM. */
export const MAILLAGE_VILLE: Maillage = {
  poles: ["site", "seo", "publicite", "crm"],
  themes: ["site internet", "site vitrine", "referencement local", "google ads", "creation de site"],
};

/** Termes du glossaire : thèmes d'articles et pôles selon le sujet du terme. */
const GLOSSAIRE: Record<string, Maillage> = {
  seo: { poles: ["seo", "site"], themes: ["referencement naturel", "seo", "audit seo"] },
  backlink: { poles: ["seo", "site"], themes: ["referencement naturel", "seo", "forfait seo"] },
  netlinking: { poles: ["seo", "site"], themes: ["referencement naturel", "seo", "forfait seo"] },
  indexation: { poles: ["seo", "site"], themes: ["audit seo", "seo", "referencement naturel"] },
  "meta-tags": { poles: ["seo", "site"], themes: ["audit seo", "seo", "referencement naturel"] },
  "core-web-vitals": { poles: ["site", "seo"], themes: ["refonte", "audit seo", "site internet"] },
  "referencement-local": { poles: ["seo", "site", "crm"], themes: ["referencement local", "fiche google", "avis clients"] },
  sea: { poles: ["publicite", "site"], themes: ["google ads", "publicite en ligne", "landing page"] },
  "google-ads": { poles: ["publicite", "site"], themes: ["google ads", "publicite en ligne", "landing page"] },
  "meta-ads": { poles: ["publicite", "site"], themes: ["meta ads", "facebook", "instagram"] },
  "landing-page": { poles: ["site", "publicite"], themes: ["landing page", "conversion", "google ads"] },
  "taux-de-conversion": { poles: ["site", "publicite", "crm"], themes: ["landing page", "conversion", "site vitrine"] },
  cta: { poles: ["site", "publicite"], themes: ["landing page", "conversion", "site vitrine"] },
  "tunnel-de-conversion": { poles: ["site", "crm", "publicite"], themes: ["landing page", "conversion", "crm"] },
  "a-b-testing": { poles: ["site", "publicite"], themes: ["landing page", "conversion", "google ads"] },
  "taux-de-rebond": { poles: ["site", "seo"], themes: ["site internet", "refonte", "audit seo"] },
  roi: { poles: ["publicite", "crm", "site"], themes: ["google ads", "publicite en ligne", "crm"] },
  "google-analytics": { poles: ["seo", "publicite"], themes: ["audit seo", "google ads", "seo"] },
  "site-vitrine": { poles: ["site", "seo"], themes: ["site vitrine", "creation de site", "site internet"] },
  cms: { poles: ["site"], themes: ["creation de site", "site internet", "refonte"] },
  "hebergement-web": { poles: ["site"], themes: ["creation de site", "site internet", "refonte"] },
  "nom-de-domaine": { poles: ["site", "seo"], themes: ["creation de site", "site internet", "refonte"] },
  "https-ssl": { poles: ["site", "seo"], themes: ["refonte", "site internet", "audit seo"] },
  "responsive-design": { poles: ["site", "seo"], themes: ["site internet", "refonte", "creation de site"] },
  ux: { poles: ["site"], themes: ["site vitrine", "landing page", "refonte"] },
  ui: { poles: ["site"], themes: ["site vitrine", "landing page", "refonte"] },
  "e-commerce": { poles: ["site", "publicite", "seo"], themes: ["boutique en ligne", "e-commerce", "pinterest"] },
  "mailing-newsletter": { poles: ["crm", "site"], themes: ["crm", "relances", "optimiser son crm"] },
};

export function maillageGlossaire(slug: string): Maillage {
  return GLOSSAIRE[slug] ?? { poles: ["site", "seo", "publicite", "crm"], themes: ["site internet", "seo"] };
}

/** Guides : le pôle du guide, puis les articles du même sujet. */
const GUIDES: Record<string, Maillage> = {
  "creer-site-internet": { poles: ["site", "seo"], themes: ["creation de site", "site vitrine", "site internet"] },
  "creer-boutique-en-ligne": { poles: ["site", "publicite"], themes: ["boutique en ligne", "e-commerce", "pinterest"] },
  "creer-landing-page": { poles: ["site", "publicite"], themes: ["landing page", "google ads", "conversion"] },
  "refonte-site-web": { poles: ["site", "seo"], themes: ["refonte", "referencement naturel", "site internet"] },
  "choisir-agence-web": { poles: ["site", "seo", "publicite", "crm"], themes: ["creation de site", "site vitrine", "publicite en ligne"] },
  "ameliorer-seo": { poles: ["seo", "site"], themes: ["referencement naturel", "audit seo", "referencement local"] },
  "premiere-campagne-google-ads": { poles: ["publicite", "site"], themes: ["google ads", "landing page", "publicite en ligne"] },
  "reseaux-sociaux-entreprise": { poles: ["publicite", "site"], themes: ["meta ads", "tiktok", "pinterest"] },
  "site-web-qui-convertit": { poles: ["site", "crm", "publicite"], themes: ["landing page", "conversion", "crm"] },
  "devis-site-web": { poles: ["site"], themes: ["creation de site", "site vitrine", "boutique en ligne"] },
};

export function maillageGuide(slug: string): Maillage {
  return GUIDES[slug] ?? { poles: ["site", "seo", "publicite", "crm"], themes: ["site internet"] };
}
