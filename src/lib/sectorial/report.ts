import { sectors, type Sector } from "@/data/sectors";

// ============ TYPES ============

export interface SectorReportResult {
  sector: { slug: string; name: string; emoji: string; description: string };
  painPoints: string[];
  solutions: { title: string; description: string }[];
  features: string[];
  caseStudy?: { client: string; quote: string; result: string };
  stats: { label: string; value: string }[];
  process: { title: string; description: string }[];
  faqItems: { question: string; answer: string }[];
  checklist: { item: string; essential: boolean }[];
  commonMistakes: string[];
}

// ============ CHECKLIST GENERATOR ============

function buildChecklist(sector: Sector): { item: string; essential: boolean }[] {
  const base: { item: string; essential: boolean }[] = [
    { item: "Site web responsive et rapide (< 3s)", essential: true },
    { item: "SEO local optimise (balises title, meta, H1)", essential: true },
    { item: "Fiche Google Business Profile complete et verifiee", essential: true },
    { item: "Presence sur les reseaux sociaux (minimum 2 plateformes)", essential: true },
    { item: "Formulaire de contact fonctionnel", essential: true },
    { item: "Mentions legales et politique de confidentialite (RGPD)", essential: true },
    { item: "Photos professionnelles de qualite", essential: true },
    { item: "Avis clients affiches et geres (Google, Trustpilot...)", essential: true },
    { item: "HTTPS / certificat SSL actif", essential: true },
    { item: "Pages de services detaillees", essential: false },
    { item: "Blog ou section actualites", essential: false },
    { item: "Schema.org / donnees structurees", essential: false },
    { item: "Strategie de contenu reguliere", essential: false },
    { item: "Campagnes Google Ads ou Meta Ads", essential: false },
    { item: "Newsletter ou capture d'emails", essential: false },
  ];

  // Sector-specific additions
  const slug = sector.slug;

  const bookingSectors = [
    "restaurant", "coiffeur", "dentiste", "medecin", "osteopathe",
    "institut-beaute", "hotel-chambre-hotes", "salle-de-sport",
    "coach", "auto-ecole", "veterinaire", "psychologue-therapeute",
  ];
  if (bookingSectors.includes(slug)) {
    base.splice(5, 0, { item: "Systeme de reservation / prise de RDV en ligne", essential: true });
  }

  const ecommerceSectors = ["ecommerce", "bijouterie", "fleuriste", "cave-a-vin-caviste", "librairie", "maroquinerie-pret-a-porter"];
  if (ecommerceSectors.includes(slug)) {
    base.splice(5, 0, { item: "Boutique en ligne avec paiement securise", essential: true });
    base.push({ item: "Fiches produits optimisees avec photos HD", essential: true });
  }

  const localSectors = [
    "restaurant", "boulangerie", "pizzeria-fast-food", "coiffeur",
    "plombier", "electricien", "serrurier", "paysagiste-jardinier",
    "garage-automobile", "opticien", "pharmacie",
  ];
  if (localSectors.includes(slug)) {
    base.push({ item: "Carte Google Maps integree sur le site", essential: true });
    base.push({ item: "Horaires d'ouverture affichees et a jour", essential: true });
  }

  return base;
}

// ============ COMMON MISTAKES GENERATOR ============

function buildCommonMistakes(sector: Sector): string[] {
  const generic = [
    `Ne pas avoir de site web en ${new Date().getFullYear()} — les clients cherchent sur Google avant tout`,
    "Negliger le mobile — plus de 60% du trafic vient du smartphone",
    "Ignorer les avis Google — ils influencent fortement la decision d'achat",
    "Ne pas mettre a jour son contenu — un site abandonne repousse les visiteurs",
    "Oublier les mentions legales et le RGPD — risque d'amende",
  ];

  const sectorMap: Record<string, string[]> = {
    restaurant: [
      "Menu uniquement en PDF non consultable sur mobile",
      "Pas de photos de plats — le visuel est decisif dans la restauration",
      "Horaires non mis a jour (jours feries, conges)",
      "Pas de bouton de reservation visible des la page d'accueil",
      "Ignorer les avis negatifs au lieu d'y repondre professionnellement",
    ],
    avocat: [
      "Utiliser un jargon juridique complexe qui fait fuir les prospects",
      "Ne pas detailler ses domaines de competence sur des pages dediees",
      "Pas de photo professionnelle — la confiance passe par le visuel",
      "Formulaire de contact trop long ou trop intrusif",
      "Oublier les contraintes deontologiques de communication",
    ],
    ecommerce: [
      "Fiches produits sans photos de qualite ni descriptions detaillees",
      "Processus d'achat trop complexe (trop d'etapes)",
      "Frais de livraison non affiches clairement avant le panier",
      "Pas de politique de retour visible",
      "Ignorer le remarketing sur les paniers abandonnes",
    ],
    artisan: [
      "Pas de portfolio de realisations — les clients veulent voir des preuves",
      "Zone d'intervention non precisee sur le site",
      "Devis uniquement par telephone — pas de formulaire en ligne",
      "Pas de certifications ou labels affiches (RGE, Qualibat...)",
      "Site non optimise pour les recherches locales urgentes",
    ],
  };

  // Try exact match, then fallback for similar sectors
  if (sectorMap[sector.slug]) return sectorMap[sector.slug];

  // Map similar sectors to known templates
  const categoryMap: Record<string, string> = {
    dentiste: "avocat", medecin: "avocat", osteopathe: "avocat",
    notaire: "avocat", comptable: "avocat", psychologue_therapeute: "avocat",
    coiffeur: "restaurant", boulangerie: "restaurant",
    "pizzeria-fast-food": "restaurant", traiteur: "restaurant",
    "cave-a-vin-caviste": "restaurant",
    plombier: "artisan", electricien: "artisan", serrurier: "artisan",
    paysagiste_jardinier: "artisan", "peintre-batiment": "artisan",
    menuisier: "artisan", carreleur: "artisan", "chauffagiste-climatisation": "artisan",
    demenageur: "artisan",
    bijouterie: "ecommerce", fleuriste: "ecommerce", librairie: "ecommerce",
    "maroquinerie-pret-a-porter": "ecommerce",
  };

  const mapped = categoryMap[sector.slug];
  if (mapped && sectorMap[mapped]) return sectorMap[mapped];

  return generic;
}

// ============ MAIN GENERATOR ============

export function generateSectorReport(sectorSlug: string): SectorReportResult {
  const sector = sectors.find((s) => s.slug === sectorSlug);
  if (!sector) {
    throw new Error(`Secteur introuvable : ${sectorSlug}`);
  }

  // Build solutions with descriptions from the sector data
  const solutions = sector.solutions.map((sol, i) => ({
    title: sol,
    description: sector.features[i] || `Solution adaptee aux besoins specifiques du secteur ${sector.name}.`,
  }));

  // Build process with simplified structure
  const process = sector.process.map((p) => ({
    title: p.title,
    description: p.desc,
  }));

  // Build case study if available
  const caseStudy = sector.caseStudy
    ? {
        client: sector.caseStudy.client,
        quote: sector.caseStudy.testimonial,
        result: sector.caseStudy.results[0] || "Amelioration significative des resultats",
      }
    : undefined;

  // Build stats
  const stats = sector.stats.map((s) => ({
    label: s.label,
    value: s.value,
  }));

  return {
    sector: {
      slug: sector.slug,
      name: sector.name,
      emoji: sector.emoji,
      description: sector.description,
    },
    painPoints: sector.painPoints,
    solutions,
    features: sector.features,
    caseStudy,
    stats,
    process,
    faqItems: sector.faqItems,
    checklist: buildChecklist(sector),
    commonMistakes: buildCommonMistakes(sector),
  };
}
