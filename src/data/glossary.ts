export interface GlossaryTerm {
  slug: string;
  term: string;
  definition: string;
  content: string;
  relatedTerms: string[];
  relatedService: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "seo",
    term: "SEO (Search Engine Optimization)",
    definition: "Le SEO, ou référencement naturel, est l'ensemble des techniques qui permettent d'améliorer la position d'un site web dans les résultats de recherche Google, sans payer de publicité.",
    content: "Le SEO repose sur 3 piliers : le contenu de qualité (textes, articles, pages optimisées), la technique (vitesse du site, structure HTML, mobile-friendly) et la popularité (liens entrants depuis d'autres sites). Un bon SEO permet d'attirer du trafic qualifié gratuitement et durablement. Chez ConvertiLab, nous optimisons le SEO de chaque site que nous créons : balises meta, sitemap, vitesse de chargement, et architecture de contenu.",
    relatedTerms: ["sea", "backlink", "sitemap"],
    relatedService: "/services/seo",
  },
  {
    slug: "sea",
    term: "SEA (Search Engine Advertising)",
    definition: "Le SEA est la publicité payante sur les moteurs de recherche. Google Ads est la plateforme SEA la plus utilisée, permettant d'afficher des annonces en haut des résultats de recherche.",
    content: "Contrairement au SEO qui prend du temps, le SEA donne des résultats immédiats. Vous payez au clic (CPC) pour apparaître sur les mots-clés de votre choix. Le SEA est idéal pour lancer un nouveau site, promouvoir une offre, ou tester un marché rapidement. L'optimisation des campagnes (ciblage, enchères, annonces) est essentielle pour un bon ROI.",
    relatedTerms: ["seo", "cpc", "landing-page"],
    relatedService: "/services/sea",
  },
  {
    slug: "landing-page",
    term: "Landing Page (Page d'Atterrissage)",
    definition: "Une landing page est une page web conçue spécifiquement pour convertir les visiteurs en leads ou clients, avec un seul objectif et un appel à l'action clair.",
    content: "Contrairement à un site classique avec plusieurs pages et menus, une landing page est focalisée sur une seule action : remplir un formulaire, acheter un produit, ou prendre rendez-vous. Les éléments clés sont : un titre accrocheur, une proposition de valeur claire, de la preuve sociale (témoignages), et un CTA visible. Les landing pages sont essentielles pour les campagnes Google Ads et Meta Ads.",
    relatedTerms: ["cta", "taux-de-conversion", "sea"],
    relatedService: "/services/sites-web/landing-page",
  },
  {
    slug: "taux-de-conversion",
    term: "Taux de Conversion",
    definition: "Le taux de conversion est le pourcentage de visiteurs d'un site web qui effectuent une action souhaitée (achat, inscription, demande de devis). Un bon taux de conversion se situe entre 2% et 5%.",
    content: "Pour améliorer son taux de conversion, on travaille sur l'UX (expérience utilisateur), la vitesse du site, la clarté du message, la preuve sociale, et la réduction des frictions (formulaires simples, paiement facile). L'A/B testing permet de tester différentes versions d'une page pour identifier celle qui convertit le mieux.",
    relatedTerms: ["landing-page", "cta", "ux"],
    relatedService: "/services/sites-web",
  },
  {
    slug: "responsive-design",
    term: "Responsive Design",
    definition: "Le responsive design est une approche de conception web qui fait en sorte qu'un site s'adapte automatiquement à toutes les tailles d'écran : mobile, tablette et ordinateur.",
    content: "Avec plus de 60% du trafic web provenant des mobiles, un site non responsive perd la majorité de ses visiteurs. Google utilise aussi le 'mobile-first indexing', ce qui signifie qu'il évalue d'abord la version mobile de votre site pour le référencement. Tous les sites créés par ConvertiLab sont 100% responsive.",
    relatedTerms: ["ux", "seo", "site-vitrine"],
    relatedService: "/services/sites-web",
  },
  {
    slug: "site-vitrine",
    term: "Site Vitrine",
    definition: "Un site vitrine est un site web qui présente l'activité, les services et les coordonnées d'une entreprise. Il sert de carte de visite en ligne, sans fonctionnalité e-commerce.",
    content: "Le site vitrine est le type de site le plus courant pour les PME, artisans et professions libérales. Il comprend généralement 3 à 10 pages : accueil, services, à propos, portfolio/réalisations, et contact. Un bon site vitrine doit être moderne, rapide, responsive et optimisé pour le SEO local.",
    relatedTerms: ["landing-page", "responsive-design", "seo"],
    relatedService: "/services/sites-web/site-vitrine",
  },
  {
    slug: "backlink",
    term: "Backlink (Lien Retour)",
    definition: "Un backlink est un lien hypertexte depuis un autre site web qui pointe vers le vôtre. Les backlinks sont l'un des facteurs de ranking les plus importants pour le SEO.",
    content: "Plus vous avez de backlinks de qualité (provenant de sites reconnus et pertinents dans votre domaine), meilleur sera votre positionnement sur Google. Attention : les backlinks de mauvaise qualité (spam, sites douteux) peuvent pénaliser votre site. Les stratégies de netlinking incluent : articles invités, partenariats, inscriptions dans les annuaires professionnels, relations presse.",
    relatedTerms: ["seo", "netlinking"],
    relatedService: "/services/seo/referencement",
  },
  {
    slug: "cta",
    term: "CTA (Call to Action)",
    definition: "Un CTA, ou appel à l'action, est un bouton ou un lien qui incite le visiteur à effectuer une action précise : 'Demander un devis', 'Acheter maintenant', 'Prendre rendez-vous'.",
    content: "Un bon CTA est clair, visible, orienté bénéfice et placé stratégiquement sur la page. Il doit se démarquer visuellement (couleur contrastée, taille suffisante) et utiliser un verbe d'action. Les meilleurs CTAs indiquent ce que le visiteur va obtenir, pas ce qu'il doit faire. Exemple : 'Recevoir mon devis gratuit' plutôt que 'Soumettre le formulaire'.",
    relatedTerms: ["taux-de-conversion", "landing-page", "ux"],
    relatedService: "/services/sites-web/landing-page",
  },
];

export const getTermBySlug = (slug: string) => glossaryTerms.find((t) => t.slug === slug);
