export interface CaseStudyMetric {
  label: string;
  value: string;
  icon: "TrendingUp" | "Star" | "Clock" | "Users";
}

export interface CaseStudy {
  icon: string;
  iconColor: string;
  sector: string;
  client: string;
  title: string;
  description: string;
  image: string;
  metrics: CaseStudyMetric[];
  technologies: string[];
  results: string;
  testimonial: string;
  author: string;
  slug: string;
  category: "site-vitrine" | "landing-page" | "e-commerce" | "portfolio";
}

export const caseStudies: CaseStudy[] = [
  {
    icon: "Utensils",
    iconColor: "text-orange-600",
    sector: "Restauration",
    client: "Monsieur Arancini",
    title: "Site vitrine premium pour artisan sicilien",
    description: "Création de site web vitrine avec design UI/UX premium, optimisation mobile et structuration de l'offre produit.",
    image: "/images/portfolio/portfolio-arancini-hero.webp",
    metrics: [
      { label: "Crédibilité", value: "+100%", icon: "TrendingUp" },
      { label: "Saveurs", value: "15+", icon: "Star" },
      { label: "Certifié", value: "HACCP", icon: "Star" },
    ],
    technologies: ["Site Vitrine", "Design UI/UX", "Branding"],
    results: "Image de marque premium",
    testimonial: "Très sérieux et réactifs, ils m'ont fait un très joli site web avec de bons conseils et du professionnalisme. Je recommande vivement !",
    author: "Monsieur Arancini",
    slug: "monsieur-arancini",
    category: "site-vitrine",
  },
  {
    icon: "ShoppingCart",
    iconColor: "text-purple-600",
    sector: "E-commerce B2B",
    client: "Funestore",
    title: "E-commerce B2B pour le secteur funéraire",
    description: "Création de site e-commerce avec catalogue professionnel, parcours d'achat optimisé et espace client réservé.",
    image: "/images/portfolio/portfolio-funestore-hero.webp",
    metrics: [
      { label: "Catalogue", value: "24/7", icon: "Clock" },
      { label: "Commandes", value: "En ligne", icon: "TrendingUp" },
      { label: "Réductions", value: "-30%", icon: "Star" },
    ],
    technologies: ["E-commerce", "UX Design", "B2B"],
    results: "Digitalisation complète",
    testimonial: "Billel a pris le temps de bien comprendre notre écosystème et de proposer un magnifique site dans un domaine assez feutré et confidentiel.",
    author: "Funestore",
    slug: "funestore",
    category: "e-commerce",
  },
  {
    icon: "BookOpen",
    iconColor: "text-indigo-600",
    sector: "Formation / Infoproduit",
    client: "PapaPrêt",
    title: "Landing page haute conversion pour formation",
    description: "Landing page avec tunnel de vente, copywriting persuasif et design UX optimisé pour la conversion.",
    image: "/images/portfolio/portfolio-papapret-hero.webp",
    metrics: [
      { label: "Papas formés", value: "15K+", icon: "Users" },
      { label: "Note", value: "4.9/5", icon: "Star" },
      { label: "Livraison", value: "24h", icon: "Clock" },
    ],
    technologies: ["Landing Page", "Copywriting", "UX Conversion"],
    results: "Tunnel de vente optimisé",
    testimonial: "Un vrai partenaire très réactif qui pense votre projet pour enclencher une compréhension immédiate et un passage à l'acte d'achat.",
    author: "Gilles",
    slug: "papapret",
    category: "landing-page",
  },
  {
    icon: "Home",
    iconColor: "text-orange-600",
    sector: "BTP / Rénovation",
    client: "ACB Rénovation",
    title: "Site vitrine BTP avec génération de devis",
    description: "Site professionnel avec structuration des services, optimisation UX pour leads et appels à l'action devis gratuit.",
    image: "/images/portfolio/portfolio-acb-hero.webp",
    metrics: [
      { label: "Expérience", value: "12+ ans", icon: "Star" },
      { label: "Devis", value: "Gratuit", icon: "TrendingUp" },
      { label: "Garantie", value: "Décennale", icon: "Star" },
    ],
    technologies: ["Site Vitrine", "SEO Local", "UX Leads"],
    results: "Présence digitale pro",
    testimonial: "Réactivité impressionnante et compréhension de mes besoins. Le site a été fait dans la journée. Déjà 2 collègues vont travailler avec lui.",
    author: "ACB Rénovation",
    slug: "acb-renovation",
    category: "site-vitrine",
  },
  {
    icon: "Home",
    iconColor: "text-amber-700",
    sector: "Conciergerie / Immobilier",
    client: "Eleva Conciergerie",
    title: "Site premium pour conciergerie locative",
    description: "Site haut de gamme avec estimation gratuite, tunnel de conversion et design luxueux pour conciergerie de location courte durée.",
    image: "/images/portfolio/portfolio-eleva-hero.webp",
    metrics: [
      { label: "Propriétaires", value: "+50", icon: "Users" },
      { label: "Note", value: "4.9/5", icon: "Star" },
      { label: "Réponse", value: "24h", icon: "Clock" },
    ],
    technologies: ["Site Vitrine", "UX Premium", "Conversion"],
    results: "Positionnement premium",
    testimonial: "Le site est incroyable, très professionnel et surtout pensé pour vendre. Le rendu est premium et optimisé pour convertir.",
    author: "Eleva Conciergerie",
    slug: "eleva-conciergerie",
    category: "site-vitrine",
  },
  {
    icon: "Users",
    iconColor: "text-red-600",
    sector: "Association",
    client: "ADSB Wissembourg",
    title: "Site vitrine pour association de donneurs de sang",
    description: "Site web avec design engageant, structuration des collectes et appels à l'action pour le don de sang.",
    image: "/images/portfolio/portfolio-adsb-hero.webp",
    metrics: [
      { label: "Mission", value: "Sauver", icon: "Star" },
      { label: "Collectes", value: "Agenda", icon: "Clock" },
      { label: "Dons", value: "En ligne", icon: "TrendingUp" },
    ],
    technologies: ["Site Vitrine", "UX Design", "Engagement"],
    results: "Visibilité digitale",
    testimonial: "Un travail très professionnel sur un projet technique complexe. Le site est clair, moderne et permet de présenter efficacement notre solution.",
    author: "ADSB Wissembourg",
    slug: "adsb-wissembourg",
    category: "site-vitrine",
  },
  {
    icon: "Briefcase",
    iconColor: "text-red-600",
    sector: "Sécurité Incendie",
    client: "Alliance Sécurité Incendie",
    title: "Site vitrine B2B sécurité incendie",
    description: "Site professionnel avec structuration des services techniques, génération de leads et mise en avant de l'expertise.",
    image: "/images/portfolio/portfolio-asi-hero.webp",
    metrics: [
      { label: "Copropriétés", value: "150+", icon: "Users" },
      { label: "Conformité", value: "98%", icon: "Star" },
      { label: "Intervention", value: "24h", icon: "Clock" },
    ],
    technologies: ["Site Vitrine", "UX B2B", "Génération Leads"],
    results: "Positionnement expert",
    testimonial: "Un site très professionnel qui reflète parfaitement notre expertise et nous aide à présenter efficacement nos services.",
    author: "Alliance Sécurité Incendie",
    slug: "alliance-securite-incendie",
    category: "site-vitrine",
  },
  {
    icon: "Sparkles",
    iconColor: "text-green-600",
    sector: "Recyclage / Événementiel",
    client: "Tri Event",
    title: "Site vitrine éco-responsable recyclage événementiel",
    description: "Site moderne avec positionnement écologique, structuration de l'offre tri/recyclage et CTAs pour devis.",
    image: "/images/portfolio/portfolio-trievent-hero.webp",
    metrics: [
      { label: "Engagement", value: "Éco", icon: "Star" },
      { label: "Services", value: "Complet", icon: "TrendingUp" },
      { label: "Devis", value: "Gratuit", icon: "Clock" },
    ],
    technologies: ["Site Vitrine", "Design Éco", "UX"],
    results: "Positionnement écologique",
    testimonial: "Le site reflète parfaitement notre engagement écologique et notre activité. Le rendu est professionnel et clair.",
    author: "Tri Event",
    slug: "trievent",
    category: "site-vitrine",
  },
  {
    icon: "Sparkles",
    iconColor: "text-amber-600",
    sector: "Bien-être / Massage",
    client: "Le Temple de l'Énergie",
    title: "Site vitrine immersif pour espace bien-être",
    description: "Site apaisant avec design zen premium, structuration des prestations et optimisation pour la prise de rendez-vous.",
    image: "/images/portfolio/portfolio-templezen-hero.webp",
    metrics: [
      { label: "Ambiance", value: "Premium", icon: "Star" },
      { label: "Prestations", value: "Claires", icon: "TrendingUp" },
      { label: "Réservation", value: "En ligne", icon: "Clock" },
    ],
    technologies: ["Site Vitrine", "Design Zen", "UX Booking"],
    results: "Image haut de gamme",
    testimonial: "Le site reflète parfaitement l'univers que je voulais transmettre. C'est élégant, apaisant et très professionnel.",
    author: "Le Temple de l'Énergie",
    slug: "temple-zen",
    category: "site-vitrine",
  },
  {
    icon: "BookOpen",
    iconColor: "text-yellow-600",
    sector: "Éducation / Pédagogie",
    client: "Institut Nomad",
    title: "Site vitrine pour accompagnement éducatif alternatif",
    description: "Site institutionnel moderne avec structuration d'une offre éducative complexe et optimisation UX pour prise de contact.",
    image: "/images/portfolio/portfolio-institut-nomad-hero.webp",
    metrics: [
      { label: "Pôles", value: "3", icon: "Star" },
      { label: "Satisfaction", value: "95%", icon: "TrendingUp" },
      { label: "Autonomie", value: "Admin", icon: "Users" },
    ],
    technologies: ["Site Vitrine", "Design Institutionnel", "UX Contact"],
    results: "Positionnement éducatif unique",
    testimonial: "Convertilab a compris rapidement ce que je souhaitais mettre en avant. Il a rendu mon site plus professionnel avec une grande autonomie de gestion.",
    author: "Institut Nomad",
    slug: "institut-nomad",
    category: "site-vitrine",
  },
  {
    icon: "Sparkles",
    iconColor: "text-rose-600",
    sector: "Photographie / Branding",
    client: "AH Studio Caen",
    title: "Site vitrine portfolio pour photographe professionnel",
    description: "Site visuel premium avec portfolio photo, structuration des offres shooting et optimisation pour la prise de rendez-vous.",
    image: "/images/portfolio/portfolio-ahstudio-hero.webp",
    metrics: [
      { label: "Portfolio", value: "Premium", icon: "Star" },
      { label: "Prestations", value: "Claires", icon: "TrendingUp" },
      { label: "Réservation", value: "En ligne", icon: "Clock" },
    ],
    technologies: ["Site Vitrine", "Design Visuel", "UX Portfolio"],
    results: "Image professionnelle renforcée",
    testimonial: "De l'idée à la finition, Bilel nous accompagne tout le long. Disponible et accessible, mon expérience client est plus que parfaite.",
    author: "AH Studio Caen",
    slug: "ah-studio",
    category: "portfolio",
  },
  {
    icon: "Sparkles",
    iconColor: "text-blue-600",
    sector: "Tourisme de Luxe",
    client: "Vinoboat Prestige",
    title: "Landing page premium pour expérience nautique de luxe",
    description: "Landing page haut de gamme avec design immersif, copywriting émotionnel et optimisation UX pour la réservation.",
    image: "/images/portfolio/portfolio-vinoboat-hero.webp",
    metrics: [
      { label: "Note", value: "4.9/5", icon: "Star" },
      { label: "Clients", value: "500+", icon: "Users" },
      { label: "Réservation", value: "En ligne", icon: "Clock" },
    ],
    technologies: ["Landing Page", "Design Luxe", "UX Booking"],
    results: "Positionnement premium exclusif",
    testimonial: "Le site est exactement à l'image de notre service : élégant, premium et immersif.",
    author: "Vinoboat Prestige",
    slug: "vinoboat",
    category: "landing-page",
  },
  {
    icon: "Sparkles",
    iconColor: "text-amber-500",
    sector: "Coiffure / Beauté",
    client: "Couleur Sable by K",
    title: "Site vitrine premium pour salon de coiffure",
    description: "Site élégant avec mise en valeur du savoir-faire, structuration des prestations et optimisation pour la prise de rendez-vous.",
    image: "/images/portfolio/portfolio-couleursable-hero.webp",
    metrics: [
      { label: "Expérience", value: "35+ ans", icon: "Star" },
      { label: "Produits", value: "100% naturels", icon: "TrendingUp" },
      { label: "Réservation", value: "En ligne", icon: "Clock" },
    ],
    technologies: ["Site Vitrine", "Design Beauté", "UX Booking"],
    results: "Image salon premium",
    testimonial: "Le site reflète parfaitement l'image de mon salon. Il est élégant, clair et met vraiment en valeur mon travail.",
    author: "Couleur Sable by K",
    slug: "couleur-sable",
    category: "site-vitrine",
  },
  {
    icon: "Sparkles",
    iconColor: "text-orange-500",
    sector: "Production Vidéo",
    client: "FilmReel Gallery",
    title: "Site portfolio cinématographique pour agence créative",
    description: "Site immersif avec design cinématographique, showreel vidéo et portfolio créatif premium.",
    image: "/images/portfolio/portfolio-filmreel-hero.webp",
    metrics: [
      { label: "Impact", value: "Wow", icon: "Star" },
      { label: "Projets", value: "Portfolio", icon: "TrendingUp" },
      { label: "Booking", value: "En ligne", icon: "Clock" },
    ],
    technologies: ["Site Portfolio", "Design Ciné", "Motion"],
    results: "Image ultra premium",
    testimonial: "Le site met parfaitement en valeur mon univers créatif. L'effet visuel est incroyable.",
    author: "FilmReel Gallery",
    slug: "filmreel-gallery",
    category: "portfolio",
  },
  {
    icon: "Sparkles",
    iconColor: "text-rose-700",
    sector: "E-commerce / Art",
    client: "Art des Roses",
    title: "E-commerce artistique pour vente d'oeuvres",
    description: "Site e-commerce avec design artistique immersif, catalogue d'oeuvres et parcours d'achat optimisé.",
    image: "/images/portfolio/portfolio-artdesroses-hero.webp",
    metrics: [
      { label: "Galerie", value: "24/7", icon: "Clock" },
      { label: "Oeuvres", value: "En ligne", icon: "TrendingUp" },
      { label: "Ventes", value: "Direct", icon: "Star" },
    ],
    technologies: ["E-commerce", "Design Art", "UX Achat"],
    results: "Digitalisation des ventes",
    testimonial: "Le site met parfaitement en valeur mes oeuvres et me permet enfin de les vendre en ligne.",
    author: "Art des Roses",
    slug: "art-des-roses",
    category: "e-commerce",
  },
  {
    icon: "Sparkles",
    iconColor: "text-yellow-700",
    sector: "E-commerce Premium",
    client: "Segermès",
    title: "E-commerce premium pour huile d'olive haut de gamme",
    description: "Site e-commerce luxe avec storytelling de marque, catalogue produits et parcours d'achat premium.",
    image: "/images/portfolio/portfolio-segermes-hero.webp",
    metrics: [
      { label: "Depuis", value: "1950", icon: "Star" },
      { label: "Qualité", value: "Bio", icon: "TrendingUp" },
      { label: "Ventes", value: "En ligne", icon: "Clock" },
    ],
    technologies: ["E-commerce", "Design Luxe", "Storytelling"],
    results: "Positionnement premium",
    testimonial: "Le site reflète parfaitement la qualité et le positionnement premium de notre marque.",
    author: "Segermès",
    slug: "segermes",
    category: "e-commerce",
  },
  {
    icon: "Sparkles",
    iconColor: "text-pink-500",
    sector: "Événementiel / Spectacle",
    client: "Spectacle",
    title: "Landing page événementielle pour spectacle",
    description: "Landing page immersive avec design dynamique, présentation du spectacle et optimisation pour la réservation.",
    image: "/images/portfolio/portfolio-spectacle-hero.webp",
    metrics: [
      { label: "Impact", value: "Immersif", icon: "Star" },
      { label: "Réservation", value: "En ligne", icon: "TrendingUp" },
      { label: "Promotion", value: "Digital", icon: "Clock" },
    ],
    technologies: ["Landing Page", "Design Événementiel", "UX Conversion"],
    results: "Promotion digitale réussie",
    testimonial: "Le site met parfaitement en valeur notre spectacle. Il est dynamique et donne immédiatement envie.",
    author: "Spectacle",
    slug: "spectacle",
    category: "landing-page",
  },
  {
    icon: "Sparkles",
    iconColor: "text-rose-400",
    sector: "Cosmétique / K-Beauty",
    client: "L'Écrin de Séoul",
    title: "Site e-commerce pour boutique cosmétique coréenne",
    description: "Site vitrine e-commerce avec design K-beauty raffiné, catalogue produits skincare et parcours d'achat optimisé.",
    image: "/images/portfolio/portfolio-ecrindeseoul-hero.webp",
    metrics: [
      { label: "Niche", value: "K-Beauty", icon: "Star" },
      { label: "Produits", value: "En ligne", icon: "TrendingUp" },
      { label: "UX", value: "Premium", icon: "Clock" },
    ],
    technologies: ["E-commerce", "Design Beauté", "Branding K-Beauty"],
    results: "Positionnement K-beauty moderne",
    testimonial: "Le site reflète parfaitement l'univers de la K-beauty. Il est moderne, clair et donne vraiment envie de découvrir les produits.",
    author: "L'Écrin de Séoul",
    slug: "ecrin-de-seoul",
    category: "e-commerce",
  },
];

export const getCaseStudiesByCategory = (category: CaseStudy["category"]) => {
  return caseStudies.filter((c) => c.category === category);
};

export const getCaseStudyBySlug = (slug: string) => {
  return caseStudies.find((c) => c.slug === slug);
};

export const portfolioCategories = [
  { id: "all", label: "Tous", icon: "LayoutGrid" },
  { id: "site-vitrine", label: "Sites Vitrine", icon: "Globe" },
  { id: "e-commerce", label: "E-commerce", icon: "ShoppingCart" },
  { id: "landing-page", label: "Landing Pages", icon: "Rocket" },
  { id: "portfolio", label: "Portfolios", icon: "Camera" },
] as const;

/* ── Extended case study data for /etude-de-cas/[slug] page ── */

export interface FullCaseStudy {
  sector: string;
  client: string;
  title: string;
  subtitle: string;
  image: string;
  gallery: Array<{ src: string; alt: string; caption: string }>;
  chartData: Array<{ name: string; before: number; after: number }>;
  challenge: string;
  solution: string;
  metrics: Array<{ label: string; value: string; description: string }>;
  technologies: string[];
  timeline: Array<{ phase: string; duration: string; description: string }>;
  results: string;
  testimonial: string;
  author: string;
  role: string;
}

function buildFullStudy(cs: CaseStudy, extra: Omit<FullCaseStudy, "sector" | "client" | "title" | "technologies">): FullCaseStudy {
  return {
    sector: cs.sector,
    client: cs.client,
    title: cs.title,
    technologies: cs.technologies,
    ...extra,
  };
}

// Helper to get the simple study by slug
function getSimple(slug: string): CaseStudy {
  return caseStudies.find((c) => c.slug === slug)!;
}

export const fullCaseStudies: Record<string, FullCaseStudy> = {
  "monsieur-arancini": buildFullStudy(getSimple("monsieur-arancini"), {
    subtitle: "Creation d'un site web vitrine haut de gamme pour une marque d'arancini artisanaux",
    image: "/images/portfolio/portfolio-arancini-hero.webp",
    gallery: [
      { src: "/images/gallery/gallery-arancini-fullpage-1.webp", alt: "Site vitrine restaurant Monsieur Arancini", caption: "Vue complete du site : accueil, histoire, catalogue Mini Arancini" },
      { src: "/images/gallery/gallery-arancini-fullpage-2.webp", alt: "Creation site vitrine restauration", caption: "Vue complete : creations exclusives, galerie, contact et footer" },
    ],
    chartData: [{ name: "Credibilite", before: 20, after: 95 }, { name: "Visibilite", before: 10, after: 70 }, { name: "Demandes", before: 5, after: 30 }],
    challenge: "Monsieur Arancini, artisan specialise dans les arancini siciliens certifies HACCP, n'avait aucune presence en ligne. L'entreprise avait besoin d'une image de marque premium pour se positionner aupres des professionnels et developper sa clientele.",
    solution: "Nous avons cree un site vitrine premium avec un design UI/UX oriente conversion, une structuration claire de l'offre produit, une optimisation mobile complete et une integration de contenu visuel mettant en valeur l'authenticite sicilienne.",
    metrics: [{ label: "Image de marque", value: "Premium", description: "Positionnement haut de gamme" }, { label: "Offre structuree", value: "15+ saveurs", description: "Catalogue clair et attractif" }, { label: "Certification", value: "HACCP", description: "Mise en avant de la qualite" }, { label: "Mobile", value: "100%", description: "Responsive et optimise" }],
    timeline: [{ phase: "Strategie", duration: "1 semaine", description: "Analyse du marche et positionnement de marque" }, { phase: "Design", duration: "2 semaines", description: "Creation du design premium et de l'identite visuelle" }, { phase: "Developpement", duration: "3 semaines", description: "Integration du site et optimisation mobile" }, { phase: "Lancement", duration: "1 semaine", description: "Mise en ligne et accompagnement" }],
    results: "Monsieur Arancini dispose desormais d'une image de marque premium et professionnelle, avec une presentation claire de son offre qui facilite le developpement commercial aupres des partenaires B2B.",
    testimonial: "Je suis tres content d'avoir travaille avec cette compagnie, tres serieux et reactifs. Ils m'ont fait un tres joli site web avec de bons conseils et du professionnalisme. Je recommande vivement !",
    author: "Monsieur Arancini",
    role: "Fondateur",
  }),
  "funestore": buildFullStudy(getSimple("funestore"), {
    subtitle: "Creation d'une plateforme e-commerce professionnelle pour les articles funeraires",
    image: "/images/portfolio/portfolio-funestore-hero.webp",
    gallery: [{ src: "/images/gallery/gallery-funestore-fullpage-1.webp", alt: "Site e-commerce B2B Funestore", caption: "Accueil, services, espace professionnel et selection de produits" }],
    chartData: [{ name: "Visibilite", before: 15, after: 85 }, { name: "Commandes", before: 0, after: 100 }, { name: "Temps gagne", before: 20, after: 80 }],
    challenge: "Funestore operait uniquement en B2B traditionnel sans aucune presence digitale.",
    solution: "Nous avons concu une plateforme e-commerce B2B complete avec un design professionnel adapte a ce secteur sensible, un catalogue structure pour l'achat rapide, un espace client reserve aux professionnels avec tarifs degressifs.",
    metrics: [{ label: "Digitalisation", value: "100%", description: "Passage complet au digital" }, { label: "Catalogue", value: "24/7", description: "Accessible en permanence" }, { label: "Reductions", value: "-30%", description: "Tarifs competitifs pour pros" }, { label: "Commandes", value: "En ligne", description: "Gain de temps operationnel" }],
    timeline: [{ phase: "Analyse", duration: "2 semaines", description: "Comprehension de l'ecosysteme funeraire" }, { phase: "Design", duration: "3 semaines", description: "Design professionnel adapte" }, { phase: "Developpement", duration: "5 semaines", description: "Plateforme e-commerce avec espace pro" }, { phase: "Lancement", duration: "1 semaine", description: "Mise en ligne et formation" }],
    results: "Funestore a reussi sa digitalisation complete, offrant un catalogue accessible 24/7 aux professionnels.",
    testimonial: "Reactivite, competence, flexibilite. J'ai adore travailler avec ConvertiLab. Billel a pris le temps de bien comprendre notre ecosysteme.",
    author: "Funestore",
    role: "Dirigeant",
  }),
  "papapret": buildFullStudy(getSimple("papapret"), {
    subtitle: "Creation d'une landing page avec tunnel de vente optimise pour une formation destinee aux futurs papas",
    image: "/images/portfolio/portfolio-papapret-hero.webp",
    gallery: [{ src: "/images/gallery/gallery-papapret-fullpage-1.webp", alt: "Landing page formation PapaPret", caption: "Accueil, promesse et statistiques" }],
    chartData: [{ name: "Engagement", before: 15, after: 75 }, { name: "Conversion", before: 2, after: 12 }, { name: "Credibilite", before: 30, after: 95 }],
    challenge: "PapaPret proposait une formation unique pour les futurs papas mais manquait d'un support digital impactant pour convertir les visiteurs en inscrits.",
    solution: "Nous avons cree une landing page haute conversion avec une structure marketing eprouvee, un copywriting oriente vente, des sections persuasives avec preuves sociales.",
    metrics: [{ label: "Papas formes", value: "15K+", description: "Communaute grandissante" }, { label: "Satisfaction", value: "4.9/5", description: "Note moyenne" }, { label: "Livraison", value: "24h", description: "Projet livre en un temps record" }, { label: "Prix", value: "150eur", description: "Formation accessible" }],
    timeline: [{ phase: "Strategie", duration: "1 jour", description: "Comprehension du marche" }, { phase: "Copywriting", duration: "1 jour", description: "Redaction persuasive" }, { phase: "Design & Dev", duration: "1 jour", description: "Creation et integration" }, { phase: "Optimisation", duration: "En continu", description: "Tests et optimisation" }],
    results: "PapaPret dispose d'un tunnel de vente structure et impactant.",
    testimonial: "Bilel est un pro qui comprend votre projet. Il a realise mon projet en 24 heures, un resultat qui correspond a 100% a mes attentes.",
    author: "Gilles",
    role: "Fondateur PapaPret",
  }),
};

// Helper function for the case study page (full version with gallery, charts, etc.)
export function getFullCaseStudyBySlug(slug: string) {
  return fullCaseStudies[slug] as FullCaseStudy | undefined;
}

// Also provide projectOrder for navigation
export const projectOrder = [
  "monsieur-arancini",
  "funestore",
  "papapret",
  ...caseStudies.filter(c => !["monsieur-arancini", "funestore", "papapret"].includes(c.slug)).map(c => c.slug),
];
