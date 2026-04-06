export interface ComparisonOption {
  name: string;
  description: string;
  pros: string[];
  cons: string[];
}

export interface Comparison {
  slug: string;
  title: string;
  optionA: ComparisonOption;
  optionB: ComparisonOption;
  verdict: string;
  faqItems: { question: string; answer: string }[];
  relatedService: string;
}

export const comparisons: Comparison[] = [
  {
    slug: "wordpress-vs-nextjs",
    title: "WordPress vs Next.js",
    optionA: {
      name: "WordPress",
      description: "CMS open source le plus utilisé au monde, avec des milliers de thèmes et plugins disponibles.",
      pros: [
        "Écosystème de plugins très riche",
        "Facile à prendre en main pour les débutants",
        "Grande communauté et documentation",
        "Coût initial souvent plus faible",
      ],
      cons: [
        "Performances médiocres sans optimisation poussée",
        "Vulnérabilités de sécurité fréquentes",
        "Mises à jour régulières nécessaires",
        "Sites souvent lents sur mobile",
      ],
    },
    optionB: {
      name: "Next.js",
      description: "Framework React moderne qui génère des sites ultra-rapides avec un SEO natif excellent.",
      pros: [
        "Performances exceptionnelles (100/100 PageSpeed)",
        "SEO natif avec rendu serveur",
        "Sécurité renforcée (pas de base de données exposée)",
        "Expérience utilisateur fluide et moderne",
      ],
      cons: [
        "Nécessite un développeur pour les modifications",
        "Moins de plugins prêts à l'emploi",
        "Courbe d'apprentissage plus élevée",
        "Coût de développement initial plus élevé",
      ],
    },
    verdict: "Pour un site vitrine performant et sécurisé, Next.js est le meilleur choix. WordPress reste pertinent pour les blogs avec beaucoup de contenu à gérer en autonomie. Chez ConvertiLab, nous créons des sites Next.js à partir de 500€ avec des performances imbattables.",
    faqItems: [
      { question: "Puis-je migrer mon site WordPress vers Next.js ?", answer: "Oui, nous réalisons régulièrement des migrations WordPress vers Next.js. Vos contenus, votre SEO et vos URLs sont préservés grâce aux redirections 301." },
      { question: "Next.js est-il bon pour le SEO ?", answer: "Excellent. Next.js offre un rendu côté serveur (SSR) qui permet aux moteurs de recherche d'indexer parfaitement votre contenu, contrairement aux applications React classiques." },
      { question: "WordPress est-il vraiment gratuit ?", answer: "Le CMS est gratuit mais les thèmes premium, plugins, hébergement et maintenance représentent un coût annuel de 200€ à 1000€ minimum." },
    ],
    relatedService: "/services/sites-web",
  },
  {
    slug: "wix-vs-agence",
    title: "Wix vs Agence Web",
    optionA: {
      name: "Wix",
      description: "Plateforme de création de sites en ligne par glisser-déposer, accessible sans compétences techniques.",
      pros: [
        "Création rapide sans code",
        "Templates visuels attractifs",
        "Hébergement inclus",
        "Prix d'entrée bas (14€/mois)",
      ],
      cons: [
        "Performances SEO limitées",
        "Design souvent générique et reconnaissable",
        "Impossible de migrer le site ailleurs",
        "Fonctionnalités avancées coûteuses",
      ],
    },
    optionB: {
      name: "Agence Web",
      description: "Un site sur-mesure créé par des professionnels, optimisé pour vos objectifs business.",
      pros: [
        "Design unique et professionnel",
        "SEO optimisé dès le départ",
        "Performances maximales",
        "Propriété totale du code",
      ],
      cons: [
        "Investissement initial plus élevé",
        "Délai de création plus long",
        "Dépendance pour les modifications complexes",
        "Nécessite un brief clair",
      ],
    },
    verdict: "Wix convient pour un projet personnel ou un test rapide. Pour une entreprise sérieuse qui veut convertir ses visiteurs en clients, un site professionnel fait par une agence est bien plus rentable. Chez ConvertiLab, nos sites démarrent à 500€.",
    faqItems: [
      { question: "Wix est-il suffisant pour une entreprise ?", answer: "Pour démarrer, oui. Mais les limitations SEO et de performance freinent rapidement votre croissance. La plupart de nos clients viennent après avoir atteint les limites de Wix." },
      { question: "Combien coûte un site agence vs Wix sur 3 ans ?", answer: "Wix Premium : environ 504€ sur 3 ans (14€/mois). Un site agence : 500€ + hébergement (environ 40€/mois). Le coût est similaire mais les résultats business sont incomparables." },
      { question: "Puis-je migrer de Wix vers un site pro ?", answer: "Oui, mais le contenu doit être recréé car Wix ne permet pas l'export du code. Nous récupérons vos textes et images pour les intégrer dans votre nouveau site." },
    ],
    relatedService: "/services/sites-web",
  },
  {
    slug: "squarespace-vs-agence",
    title: "Squarespace vs Agence Web",
    optionA: {
      name: "Squarespace",
      description: "Plateforme de création de sites connue pour ses templates design élégants et minimalistes.",
      pros: [
        "Templates au design soigné",
        "Interface intuitive",
        "Hébergement et SSL inclus",
        "Blog intégré performant",
      ],
      cons: [
        "Personnalisation limitée",
        "Performances moyennes sur mobile",
        "SEO basique comparé à une solution sur-mesure",
        "Pas de propriété du code source",
      ],
    },
    optionB: {
      name: "Agence Web",
      description: "Un site entièrement personnalisé, conçu pour refléter votre marque et maximiser vos conversions.",
      pros: [
        "Design 100% personnalisé à votre image",
        "Performances et SEO optimaux",
        "Intégrations sur-mesure (CRM, paiement, etc.)",
        "Propriété complète du site",
      ],
      cons: [
        "Budget initial plus important",
        "Temps de développement plus long",
        "Modifications techniques nécessitent un développeur",
        "Choix de l'hébergement à gérer",
      ],
    },
    verdict: "Squarespace offre de beaux templates mais reste limité pour une stratégie digitale ambitieuse. Un site sur-mesure ConvertiLab vous donne un avantage compétitif réel avec des performances et un SEO supérieurs, à partir de 500€.",
    faqItems: [
      { question: "Squarespace est-il mieux que Wix ?", answer: "Squarespace a de meilleurs templates de base et un blog plus performant. Mais les deux partagent les mêmes limitations : SEO bridé, performances moyennes et absence de propriété du code." },
      { question: "Quel est le coût mensuel de Squarespace ?", answer: "De 16€ à 49€/mois selon le plan. Sur 3 ans, cela représente 576€ à 1764€, sans compter les extensions payantes." },
      { question: "Mon site Squarespace peut-il être migré ?", answer: "Oui, le contenu peut être exporté partiellement. Nous récupérons vos textes, images et structure pour recréer un site performant sur-mesure." },
    ],
    relatedService: "/services/sites-web",
  },
  {
    slug: "shopify-vs-site-sur-mesure",
    title: "Shopify vs Site E-commerce Sur Mesure",
    optionA: {
      name: "Shopify",
      description: "Plateforme e-commerce clé en main, leader mondial avec plus de 4 millions de boutiques actives.",
      pros: [
        "Mise en place rapide",
        "Écosystème d'applications riche",
        "Paiement sécurisé intégré",
        "Support 24/7",
      ],
      cons: [
        "Commission sur chaque vente (0.5% à 2%)",
        "Abonnement mensuel de 32€ à 384€",
        "Personnalisation limitée du tunnel d'achat",
        "Dépendance à la plateforme",
      ],
    },
    optionB: {
      name: "Site E-commerce Sur Mesure",
      description: "Une boutique en ligne créée spécifiquement pour votre activité, sans commission ni limitation.",
      pros: [
        "Aucune commission sur les ventes",
        "Design et UX entièrement personnalisés",
        "Performances optimales (chargement ultra-rapide)",
        "Propriété totale de vos données",
      ],
      cons: [
        "Investissement initial plus élevé",
        "Développement plus long",
        "Moins de plugins prêts à l'emploi",
        "Maintenance à prévoir",
      ],
    },
    verdict: "Shopify est idéal pour tester un concept rapidement. Mais dès que votre CA dépasse 5000€/mois, les commissions et abonnements rendent un site sur-mesure plus rentable. ConvertiLab crée votre e-commerce à partir de 800€, sans commission.",
    faqItems: [
      { question: "Combien coûte Shopify vs un site sur-mesure sur 1 an ?", answer: "Shopify Basic : 384€/an + commissions (~2% du CA). Un site ConvertiLab : 800€ + hébergement (~59€/mois). Dès 2000€/mois de CA, le sur-mesure est plus rentable." },
      { question: "Puis-je migrer de Shopify vers un site sur-mesure ?", answer: "Oui, nous exportons vos produits, clients et commandes. La migration est transparente pour vos clients existants." },
      { question: "Un site sur-mesure est-il aussi sécurisé que Shopify ?", answer: "Oui, nous utilisons Stripe pour le paiement (même niveau de sécurité PCI DSS) et des certificats SSL. Votre boutique est aussi sécurisée, voire plus." },
    ],
    relatedService: "/services/sites-web/site-ecommerce",
  },
  {
    slug: "seo-vs-google-ads",
    title: "SEO vs Google Ads",
    optionA: {
      name: "SEO (Référencement Naturel)",
      description: "Stratégie long terme pour apparaître gratuitement dans les résultats de recherche Google.",
      pros: [
        "Trafic gratuit une fois positionné",
        "Crédibilité et confiance des utilisateurs",
        "Résultats durables dans le temps",
        "ROI croissant sur le long terme",
      ],
      cons: [
        "Résultats lents (3 à 6 mois minimum)",
        "Nécessite un travail continu",
        "Algorithmes Google imprévisibles",
        "Concurrence forte sur certains mots-clés",
      ],
    },
    optionB: {
      name: "Google Ads",
      description: "Publicité payante pour apparaître immédiatement en haut des résultats de recherche.",
      pros: [
        "Résultats immédiats dès l'activation",
        "Ciblage précis (géographique, démographique)",
        "Budget contrôlable et ajustable",
        "Idéal pour tester un marché rapidement",
      ],
      cons: [
        "Coût par clic qui augmente avec la concurrence",
        "Le trafic s'arrête quand vous coupez le budget",
        "Coût croissant sur le long terme",
        "Certains utilisateurs ignorent les annonces",
      ],
    },
    verdict: "L'idéal est de combiner les deux : Google Ads pour des résultats immédiats et le SEO pour construire un trafic durable. Chez ConvertiLab, nous créons des stratégies hybrides adaptées à votre budget et vos objectifs.",
    faqItems: [
      { question: "Par quoi commencer : SEO ou Google Ads ?", answer: "Si vous avez besoin de clients rapidement, commencez par Google Ads. En parallèle, investissez dans le SEO pour réduire progressivement votre dépendance à la publicité payante." },
      { question: "Quel budget prévoir pour le SEO vs Google Ads ?", answer: "SEO : à partir de 300€/mois sur 6 mois minimum. Google Ads : à partir de 500€/mois de budget publicitaire + frais de gestion. Le SEO est plus rentable à long terme." },
      { question: "Peut-on faire du SEO et Google Ads en même temps ?", answer: "Absolument, c'est même recommandé. Les données Google Ads (mots-clés performants) enrichissent votre stratégie SEO et vice versa." },
    ],
    relatedService: "/services/seo",
  },
  {
    slug: "site-vitrine-vs-landing-page",
    title: "Site Vitrine vs Landing Page",
    optionA: {
      name: "Site Vitrine",
      description: "Site multipages qui présente votre entreprise, vos services et votre expertise de manière complète.",
      pros: [
        "Présentation complète de votre activité",
        "Meilleur pour le SEO (plusieurs pages indexées)",
        "Crédibilité et professionnalisme",
        "Adapté à plusieurs cibles",
      ],
      cons: [
        "Taux de conversion plus faible",
        "Navigation qui disperse l'attention",
        "Coût et délai de création supérieurs",
        "Moins efficace pour les campagnes Ads",
      ],
    },
    optionB: {
      name: "Landing Page",
      description: "Page unique focalisée sur un objectif précis : convertir le visiteur en lead ou client.",
      pros: [
        "Taux de conversion élevé (5-15%)",
        "Message clair et direct",
        "Idéale pour les campagnes publicitaires",
        "Création rapide et économique",
      ],
      cons: [
        "SEO limité (une seule page)",
        "Ne présente pas toute votre offre",
        "Moins crédible sans site complet",
        "Durée de vie limitée",
      ],
    },
    verdict: "Les deux sont complémentaires. Le site vitrine est votre vitrine permanente sur le web (SEO, crédibilité). La landing page est votre outil de conversion pour les campagnes. ConvertiLab crée les deux à partir de 500€.",
    faqItems: [
      { question: "Ai-je besoin des deux ?", answer: "Si vous faites de la publicité, oui. Le site vitrine sert de base pour le SEO et la crédibilité, tandis que la landing page maximise les conversions de vos campagnes payantes." },
      { question: "Puis-je utiliser mon site vitrine pour Google Ads ?", answer: "C'est possible mais moins efficace. Un site vitrine a trop de distractions (menu, liens multiples). Une landing page dédiée convertit 2 à 5 fois mieux." },
      { question: "Quel est le délai de création ?", answer: "Landing page : 5 à 10 jours. Site vitrine : 7 à 14 jours. Les deux peuvent être développés en parallèle." },
    ],
    relatedService: "/services/sites-web",
  },
  {
    slug: "agence-vs-freelance",
    title: "Agence Web vs Freelance",
    optionA: {
      name: "Agence Web",
      description: "Une équipe de spécialistes qui couvre tous les aspects de votre projet digital.",
      pros: [
        "Expertise multidisciplinaire (design, dev, SEO, Ads)",
        "Continuité de service garantie",
        "Processus structurés et professionnels",
        "Capacité à gérer des projets complexes",
      ],
      cons: [
        "Tarifs généralement plus élevés",
        "Communication parfois moins directe",
        "Processus plus formalisés",
        "Moins de flexibilité horaire",
      ],
    },
    optionB: {
      name: "Freelance",
      description: "Un indépendant spécialisé qui travaille directement avec vous sur votre projet.",
      pros: [
        "Tarifs souvent plus compétitifs",
        "Contact direct et personnalisé",
        "Flexibilité et réactivité",
        "Spécialisation pointue dans un domaine",
      ],
      cons: [
        "Risque de disponibilité (maladie, vacances)",
        "Compétences limitées à un domaine",
        "Pas de garantie de pérennité",
        "Difficulté à gérer des projets globaux",
      ],
    },
    verdict: "ConvertiLab combine le meilleur des deux : l'expertise et la fiabilité d'une agence avec la réactivité et les tarifs compétitifs d'un freelance. Sites à partir de 500€ avec un interlocuteur dédié.",
    faqItems: [
      { question: "ConvertiLab est-il une agence ou un freelance ?", answer: "ConvertiLab est une agence digitale à taille humaine. Vous bénéficiez d'un interlocuteur unique avec l'expertise d'une équipe complète (développement, design, SEO, publicité)." },
      { question: "Comment choisir entre agence et freelance ?", answer: "Si votre projet nécessite plusieurs compétences (site + SEO + Ads), une agence est préférable. Pour une tâche isolée et ponctuelle, un freelance peut suffire." },
      { question: "Les tarifs agence sont-ils toujours plus chers ?", answer: "Pas nécessairement. ConvertiLab propose des sites à partir de 500€, un tarif compétitif même par rapport aux freelances, avec une qualité et un suivi supérieurs." },
    ],
    relatedService: "/services/sites-web",
  },
  {
    slug: "site-gratuit-vs-professionnel",
    title: "Site Gratuit vs Site Professionnel",
    optionA: {
      name: "Site Gratuit",
      description: "Solutions gratuites type WordPress.com gratuit, Wix Free ou Google Sites pour créer un site sans budget.",
      pros: [
        "Aucun coût initial",
        "Mise en ligne rapide",
        "Pas de compétences techniques requises",
        "Suffisant pour un projet personnel",
      ],
      cons: [
        "Publicités imposées sur votre site",
        "Nom de domaine non professionnel (monsite.wixsite.com)",
        "Fonctionnalités très limitées",
        "SEO quasi inexistant",
      ],
    },
    optionB: {
      name: "Site Professionnel",
      description: "Un site créé par des experts avec votre nom de domaine, un design pro et un SEO optimisé.",
      pros: [
        "Image professionnelle et crédible",
        "Nom de domaine personnalisé",
        "SEO optimisé pour être trouvé sur Google",
        "Performances et sécurité maximales",
      ],
      cons: [
        "Investissement financier nécessaire",
        "Délai de création de 1 à 3 semaines",
        "Hébergement à prévoir annuellement",
        "Modifications complexes par un développeur",
      ],
    },
    verdict: "Un site gratuit peut nuire à votre image et vous fait perdre des clients. Pour 500€ chez ConvertiLab, vous obtenez un site professionnel qui inspire confiance et génère du business. C'est un investissement, pas une dépense.",
    faqItems: [
      { question: "Un site gratuit peut-il quand même fonctionner ?", answer: "Pour un usage personnel ou un test, oui. Mais pour une activité professionnelle, un site avec des pubs imposées et un URL type 'monentreprise.wixsite.com' fait fuir les clients potentiels." },
      { question: "500€ est-il un bon investissement pour un site ?", answer: "Absolument. Un site professionnel qui convertit 1 seul client par mois rembourse largement l'investissement. C'est le support marketing le plus rentable qui existe." },
      { question: "Puis-je commencer gratuit et passer pro ensuite ?", answer: "Oui, mais vous repartirez de zéro car les plateformes gratuites ne permettent pas l'export. Mieux vaut investir directement dans un site pro pour ne pas perdre de temps." },
    ],
    relatedService: "/services/sites-web",
  },
  {
    slug: "facebook-ads-vs-google-ads",
    title: "Facebook Ads vs Google Ads",
    optionA: {
      name: "Facebook Ads (Meta Ads)",
      description: "Publicité sur Facebook et Instagram pour toucher votre audience selon ses centres d'intérêt et comportements.",
      pros: [
        "Ciblage par centres d'intérêt très précis",
        "Formats visuels engageants (vidéo, carrousel)",
        "Coût par clic souvent plus bas",
        "Idéal pour créer de la demande",
      ],
      cons: [
        "Audience moins intentionniste",
        "Fatigue publicitaire rapide",
        "Nécessite des visuels créatifs réguliers",
        "Performances variables selon les mises à jour iOS",
      ],
    },
    optionB: {
      name: "Google Ads",
      description: "Publicité dans les résultats de recherche Google pour capter les utilisateurs qui cherchent activement vos services.",
      pros: [
        "Audience à forte intention d'achat",
        "Taux de conversion généralement supérieur",
        "Pas besoin de visuels créatifs (Search)",
        "ROI mesurable précisément",
      ],
      cons: [
        "Coût par clic plus élevé",
        "Volume de recherche limité",
        "Concurrence féroce sur certains mots-clés",
        "Moins efficace pour les produits inconnus",
      ],
    },
    verdict: "Google Ads capte la demande existante (les gens cherchent déjà). Facebook Ads crée la demande (les gens découvrent). L'idéal est de combiner les deux. ConvertiLab gère vos campagnes sur les deux plateformes.",
    faqItems: [
      { question: "Quelle plateforme choisir pour commencer ?", answer: "Si vos clients cherchent activement votre service sur Google, commencez par Google Ads. Si vous vendez un produit visuel ou innovant, commencez par Facebook/Instagram Ads." },
      { question: "Quel budget minimum pour chaque plateforme ?", answer: "Google Ads : minimum 500€/mois. Facebook Ads : minimum 300€/mois. Ces budgets permettent de collecter suffisamment de données pour optimiser les campagnes." },
      { question: "Peut-on gérer les deux avec le même budget ?", answer: "Nous recommandons de se concentrer sur une plateforme d'abord, puis d'étendre. Avec un budget de 800€/mois, on peut commencer à tester les deux en parallèle." },
    ],
    relatedService: "/services/sea",
  },
  {
    slug: "seo-local-vs-seo-national",
    title: "SEO Local vs SEO National",
    optionA: {
      name: "SEO Local",
      description: "Optimisation pour apparaître dans les recherches géolocalisées et sur Google Maps dans votre zone.",
      pros: [
        "Concurrence plus faible",
        "Résultats plus rapides",
        "Clients de proximité à forte intention",
        "Google Business Profile très visible",
      ],
      cons: [
        "Zone de chalandise limitée",
        "Volume de recherche plus faible",
        "Dépendant des avis Google",
        "Moins pertinent pour le e-commerce",
      ],
    },
    optionB: {
      name: "SEO National",
      description: "Stratégie pour se positionner sur des mots-clés à l'échelle nationale, sans limite géographique.",
      pros: [
        "Volume de trafic potentiel très élevé",
        "Visibilité à l'échelle du pays",
        "Adapté au e-commerce et aux services en ligne",
        "Positionnement d'autorité dans votre secteur",
      ],
      cons: [
        "Concurrence très forte",
        "Résultats longs à obtenir (6-12 mois)",
        "Budget plus important nécessaire",
        "Stratégie de contenu intensive requise",
      ],
    },
    verdict: "Pour une entreprise locale (commerce, artisan, prestataire de services), le SEO local est prioritaire et plus rentable. Le SEO national est idéal pour les entreprises en ligne. ConvertiLab adapte la stratégie à votre marché.",
    faqItems: [
      { question: "Puis-je faire du SEO local et national ?", answer: "Oui, et c'est souvent la meilleure approche. Commencez par dominer votre zone locale, puis étendez progressivement à l'échelle nationale." },
      { question: "Le SEO local fonctionne-t-il pour les services à domicile ?", answer: "C'est même l'un des meilleurs cas d'usage. Les recherches 'plombier près de moi' ou 'coiffeur Rueil-Malmaison' ont un taux de conversion très élevé." },
      { question: "Combien coûte le SEO local vs national ?", answer: "SEO local : à partir de 200€/mois. SEO national : à partir de 500€/mois. Le local offre un ROI plus rapide pour les entreprises de proximité." },
    ],
    relatedService: "/services/seo",
  },
  {
    slug: "refonte-vs-nouveau-site",
    title: "Refonte de Site vs Nouveau Site",
    optionA: {
      name: "Refonte de Site",
      description: "Moderniser votre site existant en conservant votre contenu, votre SEO et votre historique.",
      pros: [
        "Conservation du référencement existant",
        "Coût généralement inférieur",
        "Transition en douceur pour vos clients",
        "Récupération du contenu existant",
      ],
      cons: [
        "Contraintes liées à l'existant",
        "Parfois des compromis techniques",
        "Migration des données complexe",
        "Risque de perte SEO temporaire",
      ],
    },
    optionB: {
      name: "Nouveau Site",
      description: "Repartir de zéro avec un site entièrement neuf, sans contrainte technique héritée.",
      pros: [
        "Liberté totale de conception",
        "Technologies les plus récentes",
        "Architecture optimale dès le départ",
        "Aucune dette technique",
      ],
      cons: [
        "Perte potentielle du SEO existant",
        "Coût plus élevé",
        "Tout le contenu à recréer",
        "Temps de développement plus long",
      ],
    },
    verdict: "Si votre site a un bon référencement, optez pour une refonte (à partir de 400€). Si votre site est obsolète et mal référencé, un nouveau site (à partir de 500€) est plus judicieux. ConvertiLab vous conseille après un audit gratuit.",
    faqItems: [
      { question: "Comment savoir si je dois refondre ou recréer ?", answer: "Demandez-nous un audit gratuit. Si votre site génère du trafic SEO, une refonte est préférable. S'il est invisible sur Google, un nouveau site est plus efficace." },
      { question: "Une refonte coûte-t-elle moins cher qu'un nouveau site ?", answer: "Généralement oui : refonte à partir de 400€ vs nouveau site à partir de 500€. La différence vient de la récupération du contenu existant qui réduit le travail." },
      { question: "Combien de temps mon site sera-t-il hors ligne ?", answer: "Zéro. Nous développons le nouveau site en parallèle et basculons en une fois. Votre ancien site reste en ligne jusqu'à la mise en production du nouveau." },
    ],
    relatedService: "/services/sites-web/refonte-site-web",
  },
];
