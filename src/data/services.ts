export interface ServiceItem {
  name: string;
  icon: string;
  description: string;
  features: string[];
  link: string;
}

export interface ServiceCategory {
  id: string;
  icon: string;
  label: string;
  title: string;
  description: string;
  gradient: string;
  lightGradient: string;
  accentColor: string;
  link: string;
  services: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "sites-web",
    icon: "Globe",
    label: "Sites Web",
    title: "Création de Sites Web",
    description: "Des solutions web sur-mesure adaptées à vos objectifs business",
    gradient: "from-violet-500 to-purple-600",
    lightGradient: "from-violet-50 to-purple-50",
    accentColor: "text-violet-600",
    link: "/services/sites-web",
    services: [
      {
        name: "Landing Page",
        icon: "Rocket",
        description: "Page unique optimisée pour la conversion de vos visiteurs en clients",
        features: ["Design responsive", "Optimisation conversion", "Formulaire contact", "Hébergement inclus"],
        link: "/services/sites-web/landing-page",
      },
      {
        name: "Site Vitrine",
        icon: "FileText",
        description: "Présentation complète et professionnelle de votre activité",
        features: ["Multi-pages", "SEO optimisé", "Design personnalisé", "Support inclus"],
        link: "/services/sites-web/site-vitrine",
      },
      {
        name: "Site E-commerce",
        icon: "Store",
        description: "Boutique en ligne performante pour vendre vos produits",
        features: ["Paiement sécurisé", "Gestion stocks", "Formation incluse", "Analytics"],
        link: "/services/sites-web/site-ecommerce",
      },
      {
        name: "Application Web",
        icon: "Code",
        description: "Solutions sur-mesure pour des besoins spécifiques",
        features: ["Développement custom", "API intégrées", "Scalable", "Maintenance"],
        link: "/services/sites-web/application-web",
      },
      {
        name: "Refonte de Site",
        icon: "RefreshCw",
        description: "Modernisez votre présence en ligne existante",
        features: ["Audit complet", "Nouveau design", "Migration données", "SEO préservé"],
        link: "/services/sites-web/refonte-site",
      },
    ],
  },
  {
    id: "seo",
    icon: "Search",
    label: "SEO",
    title: "SEO & Référencement Naturel",
    description: "Dominez les résultats Google et attirez du trafic qualifié",
    gradient: "from-emerald-500 to-teal-600",
    lightGradient: "from-emerald-50 to-teal-50",
    accentColor: "text-emerald-600",
    link: "/services/seo",
    services: [
      {
        name: "Référencement SEO",
        icon: "TrendingUp",
        description: "Stratégie SEO complète pour un positionnement durable sur Google",
        features: ["Optimisation on-page", "Stratégie contenu", "Netlinking", "Suivi positions"],
        link: "/services/seo/referencement",
      },
      {
        name: "Audit SEO",
        icon: "ClipboardCheck",
        description: "Analyse complète de votre visibilité et plan d'action concret",
        features: ["Rapport détaillé", "Analyse concurrence", "Recommandations", "Plan d'action"],
        link: "/services/seo/audit",
      },
      {
        name: "Content Marketing",
        icon: "PenLine",
        description: "Création de contenu optimisé SEO qui attire et convertit",
        features: ["Articles de blog", "Pages piliers", "Stratégie éditoriale", "Maillage interne"],
        link: "/services/seo/referencement",
      },
    ],
  },
  {
    id: "sea",
    icon: "Target",
    label: "Publicité",
    title: "Publicité Digitale (SEA)",
    description: "Générez des leads et des ventes avec des campagnes publicitaires ciblées",
    gradient: "from-amber-500 to-orange-600",
    lightGradient: "from-amber-50 to-orange-50",
    accentColor: "text-amber-600",
    link: "/services/sea",
    services: [
      {
        name: "Google Ads",
        icon: "Search",
        description: "Campagnes Search, Display et Shopping pour capter vos clients au bon moment",
        features: ["Campagnes Search", "Google Shopping", "Display", "Remarketing"],
        link: "/services/sea/google-ads",
      },
      {
        name: "Meta Ads",
        icon: "Megaphone",
        description: "Publicités Facebook et Instagram pour toucher votre audience idéale",
        features: ["Facebook Ads", "Instagram Ads", "Ciblage précis", "Créatifs optimisés"],
        link: "/services/sea/meta-ads",
      },
    ],
  },
  {
    id: "social-media",
    icon: "Share2",
    label: "Social Media",
    title: "Social Media & Community Management",
    description: "Développez votre communauté et engagez votre audience sur les réseaux sociaux",
    gradient: "from-pink-500 to-rose-600",
    lightGradient: "from-pink-50 to-rose-50",
    accentColor: "text-pink-600",
    link: "/services/social-media",
    services: [
      {
        name: "Community Management",
        icon: "Users",
        description: "Gestion quotidienne de vos réseaux sociaux avec du contenu engageant",
        features: ["Calendrier éditorial", "Création de contenu", "Modération", "Reporting mensuel"],
        link: "/services/social-media",
      },
      {
        name: "Stratégie Social Media",
        icon: "BarChart3",
        description: "Plan stratégique pour développer votre présence et votre influence",
        features: ["Audit réseaux", "Benchmark concurrence", "Ligne éditoriale", "KPIs & objectifs"],
        link: "/services/social-media",
      },
      {
        name: "Email Marketing",
        icon: "Mail",
        description: "Campagnes email et automation pour fidéliser et convertir",
        features: ["Séquences automatisées", "Newsletters", "Segmentation", "A/B testing"],
        link: "/services/social-media",
      },
    ],
  },
  {
    id: "design",
    icon: "Palette",
    label: "Branding",
    title: "Branding & Identité Visuelle",
    description: "Une image de marque forte et mémorable qui vous distingue",
    gradient: "from-indigo-500 to-blue-600",
    lightGradient: "from-indigo-50 to-blue-50",
    accentColor: "text-indigo-600",
    link: "/services/design",
    services: [
      {
        name: "Design UI/UX",
        icon: "PenTool",
        description: "Interfaces intuitives qui optimisent l'expérience utilisateur",
        features: ["Wireframes", "Prototypes interactifs", "Tests utilisateurs", "Design system"],
        link: "/services/design/ui-ux",
      },
      {
        name: "Identité Visuelle",
        icon: "Fingerprint",
        description: "Logo et charte graphique pour une image cohérente sur tous vos canaux",
        features: ["Création logo", "Charte graphique", "Déclinaisons supports", "Guide d'utilisation"],
        link: "/services/design/identite-visuelle",
      },
    ],
  },
];
