export interface PricingPage {
  slug: string;
  name: string;
  description: string;
  price: string;
  priceLabel: string;
  includes: string[];
  notIncludes: string[];
  faqItems: { question: string; answer: string }[];
  deliveryTime: string;
  relatedService: string;
}

export const pricingPages: PricingPage[] = [
  {
    slug: "site-vitrine",
    name: "Site Vitrine",
    description: "Un site vitrine professionnel pour présenter votre activité et attirer de nouveaux clients en ligne.",
    price: "890",
    priceLabel: "à partir de 490€",
    includes: [
      "Design sur-mesure responsive",
      "Jusqu'à 5 pages (Accueil, Services, À propos, Contact, Mentions légales)",
      "Formulaire de contact fonctionnel",
      "Optimisation SEO de base (balises, sitemap, robots.txt)",
      "Hébergement première année inclus",
      "Certificat SSL (HTTPS)",
      "Intégration Google Analytics",
      "Formation à la prise en main du site",
    ],
    notIncludes: [
      "Rédaction de contenu (textes et images à fournir)",
      "Maintenance et mises à jour après livraison",
      "Campagnes publicitaires (SEO avancé, Google Ads)",
    ],
    faqItems: [
      {
        question: "Pourquoi un site vitrine à 490€ alors que d'autres facturent 3000€ ?",
        answer: "Nous utilisons des technologies modernes (Next.js) et des processus optimisés qui réduisent le temps de développement sans sacrifier la qualité. Le résultat est un site performant, rapide et professionnel à un prix accessible.",
      },
      {
        question: "Y a-t-il des frais cachés après les 490€ ?",
        answer: "Non. Le prix inclut la création complète du site et l'hébergement première année. Ensuite, l'hébergement coûte environ 39€/mois ou vous pouvez opter pour un forfait mensuel tout inclus.",
      },
      {
        question: "Puis-je payer en plusieurs fois ?",
        answer: "Oui, nous proposons un paiement en 2 ou 3 fois sans frais. Vous pouvez aussi opter pour notre offre mensuelle à partir de 39€/mois tout inclus.",
      },
      {
        question: "Que se passe-t-il si je veux ajouter des pages supplémentaires ?",
        answer: "Chaque page supplémentaire est facturée entre 50€ et 100€ selon la complexité. Nous établissons un devis précis avant tout travail additionnel.",
      },
    ],
    deliveryTime: "7 à 14 jours",
    relatedService: "/services/sites-web/site-vitrine",
  },
  {
    slug: "site-ecommerce",
    name: "Site E-commerce",
    description: "Une boutique en ligne complète pour vendre vos produits et développer votre chiffre d'affaires sur internet.",
    price: "1490",
    priceLabel: "à partir de 1490€",
    includes: [
      "Design e-commerce sur-mesure responsive",
      "Catalogue produits avec fiches détaillées",
      "Panier d'achat et tunnel de commande optimisé",
      "Paiement sécurisé (Stripe / PayPal)",
      "Gestion des stocks et commandes",
      "Hébergement première année inclus",
      "Certificat SSL (HTTPS)",
      "Formation à la gestion de votre boutique",
    ],
    notIncludes: [
      "Photographie produits (photos à fournir)",
      "Rédaction des descriptions produits",
      "Gestion logistique et expédition",
    ],
    faqItems: [
      {
        question: "1490€ pour un e-commerce, c'est vraiment possible ?",
        answer: "Oui. Grâce à notre stack technique optimisée et nos templates éprouvés, nous livrons des boutiques performantes à ce prix. C'est idéal pour démarrer avec un catalogue de moins de 50 produits.",
      },
      {
        question: "Quelles sont les commissions sur les ventes ?",
        answer: "ConvertiLab ne prend aucune commission sur vos ventes. Seuls les frais de paiement Stripe (1.5% + 0.25€) s'appliquent, comme pour tout site e-commerce.",
      },
      {
        question: "Puis-je ajouter des produits moi-même ?",
        answer: "Oui, nous vous formons à l'ajout et la gestion de vos produits. L'interface d'administration est simple et intuitive.",
      },
      {
        question: "Le site supporte-t-il les variantes de produits (taille, couleur) ?",
        answer: "Absolument. Votre boutique gère les variantes, les prix différents par variante, et les images associées à chaque option.",
      },
    ],
    deliveryTime: "14 à 21 jours",
    relatedService: "/services/sites-web/site-ecommerce",
  },
  {
    slug: "landing-page",
    name: "Landing Page",
    description: "Une page d'atterrissage optimisée pour la conversion, idéale pour vos campagnes publicitaires.",
    price: "490",
    priceLabel: "à partir de 490€",
    includes: [
      "Design conversion-first responsive",
      "Copywriting orienté persuasion",
      "Formulaire de capture de leads",
      "Intégration CRM ou email marketing",
      "A/B testing structure",
      "Hébergement première année inclus",
      "Certificat SSL (HTTPS)",
      "Tracking des conversions (Analytics, Pixel)",
    ],
    notIncludes: [
      "Campagnes publicitaires (Google Ads, Meta Ads)",
      "Création de contenu vidéo",
      "Maintenance et optimisation continue",
    ],
    faqItems: [
      {
        question: "Quelle est la différence entre une landing page et un site vitrine ?",
        answer: "Une landing page est une page unique conçue pour convertir les visiteurs en leads ou clients. Un site vitrine présente votre entreprise sur plusieurs pages. La landing page est idéale pour des campagnes publicitaires ciblées.",
      },
      {
        question: "Quel taux de conversion puis-je espérer ?",
        answer: "Nos landing pages atteignent en moyenne un taux de conversion de 5 à 15%, contre 1 à 3% pour un site classique. Le résultat dépend aussi de votre offre et de votre trafic.",
      },
      {
        question: "La landing page est-elle compatible avec Google Ads ?",
        answer: "Oui, nos landing pages sont optimisées pour obtenir un Quality Score élevé sur Google Ads : temps de chargement rapide, pertinence du contenu, et expérience mobile parfaite.",
      },
      {
        question: "Puis-je modifier le contenu après livraison ?",
        answer: "Oui, nous vous donnons accès au code source. Vous pouvez aussi nous demander des modifications ponctuelles à tarif préférentiel.",
      },
    ],
    deliveryTime: "5 à 10 jours",
    relatedService: "/services/sites-web/landing-page",
  },
  {
    slug: "refonte-site",
    name: "Refonte de Site Web",
    description: "Modernisez votre site existant avec un design actuel, de meilleures performances et un SEO optimisé.",
    price: "690",
    priceLabel: "à partir de 400€",
    includes: [
      "Audit complet du site existant",
      "Nouveau design moderne responsive",
      "Migration du contenu existant",
      "Optimisation des performances (Core Web Vitals)",
      "Redirections 301 pour conserver le SEO",
      "Certificat SSL (HTTPS)",
      "Hébergement première année inclus",
      "Formation à la prise en main",
    ],
    notIncludes: [
      "Création de nouveau contenu",
      "Campagnes marketing post-refonte",
      "Maintenance continue après livraison",
    ],
    faqItems: [
      {
        question: "Vais-je perdre mon référencement Google avec une refonte ?",
        answer: "Non. Nous mettons en place des redirections 301 sur toutes vos anciennes URLs pour préserver votre positionnement. Nous optimisons également le nouveau site pour le SEO.",
      },
      {
        question: "Combien de temps dure une refonte ?",
        answer: "En moyenne 10 à 15 jours selon la taille de votre site actuel. Nous commençons par un audit puis vous proposons une maquette avant développement.",
      },
      {
        question: "Pourquoi refaire mon site plutôt que le modifier ?",
        answer: "Si votre site a plus de 3 ans, les technologies ont évolué. Une refonte complète offre de meilleures performances, un meilleur SEO et une expérience utilisateur moderne que des patchs ne peuvent pas atteindre.",
      },
      {
        question: "Mon site WordPress peut-il être migré vers Next.js ?",
        answer: "Oui, nous migrons régulièrement des sites WordPress vers Next.js. Le résultat est un site 3 à 5 fois plus rapide avec un meilleur référencement naturel.",
      },
    ],
    deliveryTime: "10 à 15 jours",
    relatedService: "/services/sites-web/refonte-site-web",
  },
  {
    slug: "seo",
    name: "Référencement SEO",
    description: "Améliorez votre visibilité sur Google avec une stratégie SEO complète et des résultats mesurables.",
    price: "Sur devis",
    priceLabel: "Sur devis",
    includes: [
      "Audit SEO technique complet",
      "Recherche de mots-clés stratégiques",
      "Optimisation on-page (balises, contenu, maillage)",
      "Stratégie de netlinking",
      "Optimisation Google Business Profile",
      "Rapport mensuel de positionnement",
      "Suivi des KPIs (trafic, positions, conversions)",
      "Recommandations d'amélioration continue",
    ],
    notIncludes: [
      "Rédaction de contenu blog (en option)",
      "Création ou refonte du site web",
      "Campagnes Google Ads",
    ],
    faqItems: [
      {
        question: "Combien coûte une prestation SEO ?",
        answer: "Le prix dépend de la concurrence dans votre secteur, du nombre de mots-clés ciblés et de l'état actuel de votre site. Nous proposons des forfaits à partir de 300€/mois après un audit initial gratuit.",
      },
      {
        question: "En combien de temps vais-je voir des résultats ?",
        answer: "Les premiers résultats SEO apparaissent généralement entre 3 et 6 mois. Le SEO est un investissement long terme qui génère un trafic durable et gratuit.",
      },
      {
        question: "Garantissez-vous la première position Google ?",
        answer: "Personne ne peut garantir la première position. En revanche, nous garantissons une méthodologie éprouvée et un suivi transparent de vos progrès mois après mois.",
      },
      {
        question: "Le SEO est-il plus rentable que Google Ads ?",
        answer: "Sur le long terme, oui. Le SEO génère du trafic gratuit une fois les positions acquises, contrairement aux Ads où vous payez chaque clic. L'idéal est souvent de combiner les deux.",
      },
    ],
    deliveryTime: "Engagement minimum 3 mois",
    relatedService: "/services/seo",
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    description: "Générez des leads qualifiés immédiatement avec des campagnes Google Ads rentables et optimisées.",
    price: "Sur devis",
    priceLabel: "Sur devis",
    includes: [
      "Audit du compte Google Ads existant (si applicable)",
      "Recherche de mots-clés et analyse de la concurrence",
      "Création et structuration des campagnes",
      "Rédaction des annonces optimisées",
      "Configuration du suivi des conversions",
      "Optimisation continue des enchères",
      "Rapport hebdomadaire des performances",
      "A/B testing des annonces",
    ],
    notIncludes: [
      "Budget publicitaire Google (à votre charge)",
      "Création de landing pages (en option)",
      "Référencement naturel SEO",
    ],
    faqItems: [
      {
        question: "Combien coûte la gestion de mes campagnes Google Ads ?",
        answer: "Nos frais de gestion démarrent à 200€/mois pour les budgets publicitaires inférieurs à 1000€/mois. Pour des budgets plus importants, nous facturons un pourcentage du budget media. Devis gratuit sous 24h.",
      },
      {
        question: "Quel budget publicitaire minimum recommandez-vous ?",
        answer: "Nous recommandons un minimum de 500€/mois de budget publicitaire pour obtenir suffisamment de données et de résultats. Le budget optimal dépend de votre secteur et de vos objectifs.",
      },
      {
        question: "En combien de temps les campagnes sont-elles rentables ?",
        answer: "Les premières conversions arrivent souvent dès la première semaine. L'optimisation complète prend 2 à 4 semaines pour atteindre le coût par acquisition optimal.",
      },
      {
        question: "Puis-je arrêter les campagnes quand je veux ?",
        answer: "Oui, il n'y a aucun engagement de durée. Vous pouvez mettre en pause ou arrêter vos campagnes à tout moment. Nous recommandons toutefois 3 mois minimum pour des résultats optimaux.",
      },
    ],
    deliveryTime: "Lancement en 5 à 2 semaines",
    relatedService: "/services/sea",
  },
  {
    slug: "community-management",
    name: "Community Management",
    description: "Développez votre présence sur les réseaux sociaux avec une stratégie de contenu engageante et régulière.",
    price: "Sur devis",
    priceLabel: "Sur devis",
    includes: [
      "Audit de votre présence actuelle sur les réseaux",
      "Stratégie éditoriale personnalisée",
      "Création de 12 à 20 posts par mois",
      "Design graphique des visuels",
      "Planification et publication automatisée",
      "Gestion des commentaires et messages",
      "Rapport mensuel d'engagement",
      "Veille concurrentielle",
    ],
    notIncludes: [
      "Budget publicitaire pour les campagnes sponsorisées",
      "Production vidéo professionnelle",
      "Shooting photo professionnel",
    ],
    faqItems: [
      {
        question: "Combien coûte le community management ?",
        answer: "Nos forfaits démarrent à 300€/mois pour la gestion d'un réseau social. Le tarif varie selon le nombre de réseaux, la fréquence de publication et le niveau de création de contenu souhaité.",
      },
      {
        question: "Sur quels réseaux sociaux intervenez-vous ?",
        answer: "Nous gérons Instagram, Facebook, LinkedIn, TikTok et X (Twitter). Nous vous recommandons les plateformes les plus pertinentes pour votre activité et votre cible.",
      },
      {
        question: "Dois-je fournir les contenus (photos, textes) ?",
        answer: "Non, nous créons l'intégralité du contenu. Nous vous demandons simplement un accès à vos coulisses (photos de produits, équipe, événements) pour un contenu authentique.",
      },
      {
        question: "Combien de temps pour voir des résultats ?",
        answer: "Les premiers résultats en termes d'engagement sont visibles dès le premier mois. La croissance significative de votre communauté se constate généralement après 3 à 6 mois de travail régulier.",
      },
    ],
    deliveryTime: "Démarrage sous 2 semaines",
    relatedService: "/services/social-media",
  },
];
