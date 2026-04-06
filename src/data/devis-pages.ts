export interface FAQItem {
  question: string;
  answer: string;
}

export interface DevisService {
  slug: string;
  name: string;
  description: string;
  benefits: string[];
  faqItems: FAQItem[];
  relatedService: string;
  relatedPricing: string;
}

export const devisServices: DevisService[] = [
  {
    slug: "site-vitrine",
    name: "Site Vitrine",
    description: "Présentez votre activité avec un site vitrine professionnel, moderne et optimisé pour le référencement. Design sur-mesure, responsive et rapide.",
    benefits: [
      "Design personnalisé qui reflète votre identité de marque",
      "Optimisation SEO pour être visible sur Google",
      "Responsive parfait sur mobile, tablette et desktop",
      "Formulaire de contact et appels à l'action intégrés"
    ],
    faqItems: [
      {
        question: "Combien coûte un site vitrine ?",
        answer: "Nos sites vitrine démarrent à 500€. Le prix varie selon le nombre de pages, les fonctionnalités et le niveau de personnalisation souhaité. Nous vous envoyons un devis détaillé sous 24h."
      },
      {
        question: "En combien de temps mon site sera-t-il en ligne ?",
        answer: "Un site vitrine est généralement livré en 1 à 2 semaines après validation de la maquette. Nous proposons aussi des livraisons express en 5 jours ouvrés."
      },
      {
        question: "Pourrai-je modifier le contenu moi-même ?",
        answer: "Oui, nous livrons chaque site avec une interface d'administration simple. Nous incluons aussi une formation pour vous rendre autonome dans la gestion de votre contenu."
      }
    ],
    relatedService: "sites-web/site-vitrine",
    relatedPricing: "vitrine"
  },
  {
    slug: "site-ecommerce",
    name: "Site E-commerce",
    description: "Lancez votre boutique en ligne avec un site e-commerce performant. Gestion de catalogue, paiement sécurisé et optimisation des conversions.",
    benefits: [
      "Catalogue produits illimité avec gestion des stocks",
      "Paiement sécurisé Stripe avec 3D Secure",
      "Tunnel de commande optimisé pour la conversion",
      "Tableau de bord de suivi des ventes et commandes"
    ],
    faqItems: [
      {
        question: "Quel budget prévoir pour un site e-commerce ?",
        answer: "Nos boutiques en ligne démarrent à 800€. Le prix dépend du nombre de produits, des intégrations (paiement, livraison) et du niveau de personnalisation."
      },
      {
        question: "Quels moyens de paiement sont intégrés ?",
        answer: "Nous intégrons Stripe (carte bancaire, Apple Pay, Google Pay) et PayPal. Nous pouvons aussi ajouter le paiement en 3-4 fois via Alma ou Klarna."
      },
      {
        question: "Puis-je gérer mes produits facilement ?",
        answer: "Oui, vous disposez d'un panel d'administration intuitif pour ajouter, modifier et supprimer vos produits, gérer les stocks et suivre les commandes."
      }
    ],
    relatedService: "sites-web/site-ecommerce",
    relatedPricing: "ecommerce"
  },
  {
    slug: "landing-page",
    name: "Landing Page",
    description: "Convertissez vos visiteurs en clients avec une landing page optimisée. Design percutant, copywriting persuasif et taux de conversion maximisé.",
    benefits: [
      "Design optimisé pour la conversion (CRO)",
      "Copywriting persuasif qui pousse à l'action",
      "Temps de chargement ultra-rapide (<1 seconde)",
      "A/B testing intégré pour améliorer les performances"
    ],
    faqItems: [
      {
        question: "Quelle différence entre landing page et site vitrine ?",
        answer: "Une landing page est une page unique focalisée sur un seul objectif de conversion, idéale pour les campagnes publicitaires. Un site vitrine comporte plusieurs pages et présente l'ensemble de votre activité."
      },
      {
        question: "Quel taux de conversion attendre ?",
        answer: "Nos landing pages atteignent régulièrement 8 à 15% de taux de conversion grâce à notre méthodologie CRO, contre 2-3% en moyenne dans le marché."
      },
      {
        question: "La landing page est-elle compatible avec Google Ads ?",
        answer: "Absolument, nos landing pages sont conçues spécifiquement pour les campagnes publicitaires. Elles intègrent le tracking Google Ads et Meta Pixel pour mesurer précisément votre ROI."
      }
    ],
    relatedService: "sites-web/landing-page",
    relatedPricing: "landing"
  },
  {
    slug: "refonte-site",
    name: "Refonte de Site",
    description: "Modernisez votre site web avec une refonte complète. Nouveau design, meilleures performances et migration SEO sécurisée pour ne perdre aucun trafic.",
    benefits: [
      "Migration SEO sécurisée avec redirections 301",
      "Design moderne et responsive qui convertit",
      "Performance optimisée (score Lighthouse 90+)",
      "Architecture repensée pour une meilleure UX"
    ],
    faqItems: [
      {
        question: "Vais-je perdre mon référencement Google ?",
        answer: "Non, nous réalisons une migration SEO rigoureuse avec des redirections 301 pour chaque URL. Votre positionnement est maintenu, voire amélioré grâce aux optimisations techniques."
      },
      {
        question: "Combien de temps dure une refonte ?",
        answer: "Comptez 2 à 4 semaines pour un site vitrine et 4 à 6 semaines pour un site e-commerce, incluant l'audit de l'existant, le design, le développement et la migration."
      },
      {
        question: "Puis-je conserver mon nom de domaine ?",
        answer: "Oui, vous conservez votre nom de domaine et toute votre autorité SEO. Nous nous chargeons de la migration technique en toute transparence."
      }
    ],
    relatedService: "sites-web",
    relatedPricing: "refonte"
  },
  {
    slug: "seo",
    name: "SEO",
    description: "Améliorez votre visibilité sur Google avec une stratégie SEO sur-mesure. Audit technique, optimisation on-page, contenu et netlinking.",
    benefits: [
      "Audit SEO complet avec plan d'action priorisé",
      "Optimisation technique et on-page de toutes vos pages",
      "Stratégie de contenu pour attirer du trafic qualifié",
      "Suivi mensuel des positions et du trafic organique"
    ],
    faqItems: [
      {
        question: "Combien de temps pour voir des résultats SEO ?",
        answer: "Les premiers résultats apparaissent entre 3 et 6 mois. Le SEO est un investissement à long terme qui génère un trafic gratuit et durable une fois les positions acquises."
      },
      {
        question: "Le SEO est-il compatible avec Google Ads ?",
        answer: "Oui, SEO et SEA sont complémentaires. Google Ads génère du trafic immédiat tandis que le SEO construit une visibilité durable. Ensemble, ils maximisent votre présence."
      },
      {
        question: "Que comprend votre prestation SEO ?",
        answer: "Notre prestation inclut un audit technique complet, l'optimisation on-page de vos contenus, une stratégie de netlinking et un suivi mensuel avec rapport de performance."
      }
    ],
    relatedService: "marketing-digital",
    relatedPricing: "seo"
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    description: "Générez des leads qualifiés avec des campagnes Google Ads rentables. Paramétrage, optimisation et gestion complète de vos campagnes.",
    benefits: [
      "Résultats immédiats dès le lancement des campagnes",
      "Ciblage précis de votre audience idéale",
      "Optimisation continue pour maximiser le ROI",
      "Reporting mensuel détaillé et transparent"
    ],
    faqItems: [
      {
        question: "Quel budget minimum pour Google Ads ?",
        answer: "Nous recommandons un budget publicitaire minimum de 300€/mois. Nos frais de gestion démarrent à 200€/mois. Le budget optimal dépend de votre secteur et de vos objectifs."
      },
      {
        question: "Combien de temps pour voir des résultats ?",
        answer: "Les premiers résultats sont visibles dès les premières heures. L'optimisation complète nécessite 2 à 4 semaines de données pour affiner le ciblage et maximiser le ROI."
      },
      {
        question: "Comment mesurez-vous le retour sur investissement ?",
        answer: "Nous configurons un suivi de conversion précis (appels, formulaires, ventes) et vous fournissons un reporting mensuel avec le coût par lead, le taux de conversion et le ROAS."
      }
    ],
    relatedService: "marketing-digital",
    relatedPricing: "google-ads"
  },
  {
    slug: "meta-ads",
    name: "Meta Ads",
    description: "Développez votre visibilité avec des campagnes Facebook et Instagram Ads ciblées. Création de visuels, ciblage et optimisation pour un maximum de conversions.",
    benefits: [
      "Ciblage ultra-précis par centres d'intérêt et comportement",
      "Création de visuels et vidéos publicitaires impactants",
      "Retargeting des visiteurs de votre site web",
      "Optimisation continue des audiences et créatives"
    ],
    faqItems: [
      {
        question: "Quelle différence entre Google Ads et Meta Ads ?",
        answer: "Google Ads cible les personnes qui recherchent activement vos services. Meta Ads (Facebook/Instagram) permet de toucher des audiences par centres d'intérêt, même si elles ne vous cherchent pas encore."
      },
      {
        question: "Quel budget prévoir pour Meta Ads ?",
        answer: "Un budget de 200-500€/mois permet de démarrer efficacement. Nous optimisons vos campagnes pour obtenir le meilleur coût par lead ou par vente selon votre objectif."
      },
      {
        question: "Créez-vous les visuels publicitaires ?",
        answer: "Oui, notre équipe crée les visuels, vidéos et textes publicitaires. Nous testons plusieurs variantes pour identifier les créatives les plus performantes."
      }
    ],
    relatedService: "marketing-digital",
    relatedPricing: "meta-ads"
  },
  {
    slug: "community-management",
    name: "Community Management",
    description: "Développez votre présence sur les réseaux sociaux avec une stratégie de contenu professionnelle. Création, planification et gestion de vos communautés.",
    benefits: [
      "Stratégie de contenu adaptée à votre audience",
      "Création de visuels et rédaction de publications",
      "Calendrier éditorial et publication régulière",
      "Gestion de communauté et engagement actif"
    ],
    faqItems: [
      {
        question: "Sur quels réseaux sociaux travaillez-vous ?",
        answer: "Nous gérons Instagram, Facebook, LinkedIn, TikTok et Pinterest. Nous vous recommandons les 2-3 plateformes les plus pertinentes pour votre activité et votre audience."
      },
      {
        question: "Combien de publications par semaine ?",
        answer: "Nos forfaits incluent de 3 à 7 publications par semaine selon la formule. Nous créons aussi des stories et des reels pour maximiser votre visibilité."
      },
      {
        question: "Puis-je valider les publications avant diffusion ?",
        answer: "Oui, nous soumettons un calendrier éditorial pour validation chaque semaine. Vous pouvez approuver, modifier ou refuser chaque publication avant sa diffusion."
      }
    ],
    relatedService: "marketing-digital",
    relatedPricing: "community-management"
  },
  {
    slug: "identite-visuelle",
    name: "Identité Visuelle",
    description: "Créez une identité visuelle forte et cohérente pour votre marque. Logo, charte graphique, supports de communication et déclinaisons digitales.",
    benefits: [
      "Logo professionnel avec 3 propositions de concepts",
      "Charte graphique complète (couleurs, typographies, usages)",
      "Déclinaisons pour le web et les réseaux sociaux",
      "Fichiers sources livrés dans tous les formats"
    ],
    faqItems: [
      {
        question: "Combien de propositions de logo recevrai-je ?",
        answer: "Nous vous présentons 3 concepts de logo différents. Vous choisissez votre favori et nous le peaufinons avec 2 tours de révisions inclus."
      },
      {
        question: "Que comprend la charte graphique ?",
        answer: "La charte inclut le logo et ses déclinaisons, la palette de couleurs, les typographies, les règles d'usage, les templates pour les réseaux sociaux et les supports imprimés."
      },
      {
        question: "En combien de temps est livrée l'identité visuelle ?",
        answer: "Comptez 1 à 2 semaines pour le logo et la charte graphique complète. Les déclinaisons sur les supports sont livrées dans la foulée."
      }
    ],
    relatedService: "branding",
    relatedPricing: "identite-visuelle"
  },
  {
    slug: "application-web",
    name: "Application Web",
    description: "Développez une application web sur-mesure pour digitaliser votre activité. Dashboard, SaaS, outil métier : nous concevons des solutions performantes et évolutives.",
    benefits: [
      "Développement sur-mesure adapté à vos process métier",
      "Interface utilisateur intuitive et moderne",
      "Architecture scalable qui évolue avec votre croissance",
      "Hébergement sécurisé et maintenance incluse"
    ],
    faqItems: [
      {
        question: "Quel budget prévoir pour une application web ?",
        answer: "Le budget dépend de la complexité du projet. Nous réalisons un audit gratuit de vos besoins et vous fournissons un devis détaillé avec un planning de développement précis."
      },
      {
        question: "Quelles technologies utilisez-vous ?",
        answer: "Nous développons avec Next.js, React, TypeScript et Supabase. Cette stack moderne garantit des performances optimales, une excellente maintenabilité et une sécurité renforcée."
      },
      {
        question: "Proposez-vous un accompagnement après la livraison ?",
        answer: "Oui, nous proposons des contrats de maintenance et d'évolution. Nous assurons les mises à jour de sécurité, les sauvegardes et le développement de nouvelles fonctionnalités."
      }
    ],
    relatedService: "sites-web",
    relatedPricing: "application"
  }
];

export function getDevisServiceBySlug(slug: string): DevisService | undefined {
  return devisServices.find((s) => s.slug === slug);
}

export function getAllDevisServiceSlugs(): string[] {
  return devisServices.map((s) => s.slug);
}
