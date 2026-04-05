export interface Sector {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  painPoints: string[];
  solutions: string[];
  features: string[];
  cta: string;
}

export const sectors: Sector[] = [
  {
    slug: "restaurant",
    name: "Restaurant",
    emoji: "🍽️",
    description: "Attirez plus de clients dans votre restaurant grâce à un site web moderne avec menu en ligne, réservation et référencement local Google Maps.",
    painPoints: ["Pas visible sur Google Maps", "Menu non consultable en ligne", "Pas de système de réservation", "Avis clients non exploités"],
    solutions: ["Site vitrine avec menu interactif", "Intégration Google My Business", "Système de réservation en ligne", "Page avis et témoignages"],
    features: ["Menu digital responsive", "Bouton réservation", "Galerie photos plats", "Carte Google Maps intégrée", "Horaires et coordonnées", "SEO local optimisé"],
    cta: "Créer le site de mon restaurant",
  },
  {
    slug: "avocat",
    name: "Cabinet d'Avocats",
    emoji: "⚖️",
    description: "Renforcez la crédibilité de votre cabinet avec un site professionnel qui inspire confiance et génère des consultations qualifiées.",
    painPoints: ["Image en ligne pas à la hauteur", "Peu de demandes de consultation", "Concurrence forte sur Google", "Pas de contenu expert visible"],
    solutions: ["Site premium qui inspire confiance", "Pages par domaine de compétence", "Blog juridique pour le SEO", "Formulaire de prise de RDV sécurisé"],
    features: ["Design sobre et professionnel", "Pages par spécialité", "Blog d'expertise juridique", "Formulaire de contact sécurisé", "Mentions légales conformes", "SEO local cabinet"],
    cta: "Créer le site de mon cabinet",
  },
  {
    slug: "artisan",
    name: "Artisan",
    emoji: "🔧",
    description: "Montrez votre savoir-faire et recevez des demandes de devis directement depuis votre site web optimisé pour votre zone d'intervention.",
    painPoints: ["Dépendant du bouche-à-oreille", "Pas de vitrine en ligne", "Difficile de montrer ses réalisations", "Pas de demandes de devis en ligne"],
    solutions: ["Site vitrine avec portfolio photos", "Formulaire de demande de devis", "SEO local par zone d'intervention", "Page Google My Business optimisée"],
    features: ["Galerie de réalisations", "Formulaire devis en ligne", "Zones d'intervention", "Témoignages clients", "Certifications et labels", "SEO local multi-villes"],
    cta: "Créer le site de mon activité",
  },
  {
    slug: "immobilier",
    name: "Agence Immobilière",
    emoji: "🏠",
    description: "Présentez vos biens, générez des contacts vendeurs et acheteurs avec un site immobilier moderne et performant.",
    painPoints: ["Dépendant des portails (SeLoger, Leboncoin)", "Pas de marque propre en ligne", "Leads non qualifiés", "Coût d'acquisition élevé"],
    solutions: ["Site vitrine avec catalogue de biens", "Landing pages par quartier", "SEO local immobilier", "Formulaire d'estimation en ligne"],
    features: ["Catalogue de biens", "Recherche par critères", "Pages par quartier", "Estimation en ligne", "Témoignages vendeurs/acheteurs", "SEO local immobilier"],
    cta: "Créer le site de mon agence",
  },
  {
    slug: "coach",
    name: "Coach & Consultant",
    emoji: "🎯",
    description: "Positionnez-vous comme expert dans votre domaine avec un site personnel qui convertit les visiteurs en clients.",
    painPoints: ["Difficulté à se différencier", "Pas de preuve de crédibilité", "Pas de tunnel de conversion", "Dépendant des réseaux sociaux"],
    solutions: ["Personal branding fort", "Témoignages et études de cas", "Réservation de séance en ligne", "Blog d'expertise pour le SEO"],
    features: ["Page de présentation personnelle", "Offres et tarifs clairs", "Réservation Calendly intégrée", "Témoignages clients", "Blog d'expertise", "Lead magnet (guide gratuit)"],
    cta: "Créer mon site de coaching",
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    emoji: "🛒",
    description: "Lancez ou refondez votre boutique en ligne avec un site e-commerce performant, rapide et optimisé pour la conversion.",
    painPoints: ["Taux de conversion trop bas", "Site lent qui fait fuir", "Pas visible sur Google Shopping", "Panier abandonné élevé"],
    solutions: ["Boutique rapide et moderne", "Tunnel d'achat optimisé", "SEO produits et catégories", "Campagnes Google Shopping"],
    features: ["Catalogue produits", "Paiement sécurisé Stripe", "Gestion des stocks", "Pages catégories SEO", "Relance panier abandonné", "Analytics e-commerce"],
    cta: "Créer ma boutique en ligne",
  },
];

export const getSectorBySlug = (slug: string) => sectors.find((s) => s.slug === slug);
