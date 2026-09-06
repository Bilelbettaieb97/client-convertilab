export interface FAQItem {
  question: string;
  answer: string;
}

export interface PriceLine {
  poste: string;
  prix: string;
  detail: string;
}

export interface DevisService {
  slug: string;
  name: string;
  description: string;
  benefits: string[];
  faqItems: FAQItem[];
  relatedService: string;
  relatedPricing: string;
  // Contenu enrichi (SEO + information gain) — optionnel pour compat.
  intro?: string;
  priceFrom?: string;
  priceBreakdown?: PriceLine[];
  breakdownNote?: string;
  included?: string[];
  priceFactors?: string[];
  steps?: { title: string; desc: string }[];
}

export const devisServices: DevisService[] = [
  {
    slug: "site-vitrine",
    name: "Site Vitrine",
    description: "Présentez votre activité avec un site vitrine professionnel, moderne et optimisé pour le référencement. Design sur-mesure, responsive et rapide.",
    intro: "Un site vitrine est votre carte de visite en ligne, disponible 24h sur 24. Chez ConvertiLab, nous concevons des sites vitrine sur-mesure à partir de 490€, livrés en 2 semaines, pensés pour rassurer vos visiteurs et les transformer en clients. Vous restez propriétaire de votre site, sans abonnement obligatoire ni frais caché. Voici précisément ce que vous obtenez, et comment se décompose le prix.",
    priceFrom: "490€",
    priceBreakdown: [
      { poste: "Design sur-mesure", prix: "200€", detail: "Maquette personnalisée validée avant tout développement, alignée sur votre identité de marque. Révisions incluses." },
      { poste: "Développement (5 pages)", prix: "200€", detail: "Intégration en Next.js : accueil, à propos, services, contact et une page libre. Site rapide, responsive et sécurisé." },
      { poste: "SEO de base + formulaire", prix: "100€", detail: "Balises title et meta optimisées, structure Hn propre, formulaire de contact connecté et intégration Google Maps." },
    ],
    breakdownNote: "Soit 490€ tout compris, hébergement de la première année inclus. Aucune commission, aucun abonnement obligatoire. Paiement en 2 ou 3 fois sans frais possible, ou formule mensuelle à partir de 39€/mois.",
    included: [
      "5 pages sur-mesure (accueil, à propos, services, contact, page libre)",
      "Hébergement de la première année offert",
      "Optimisation SEO de base pour être trouvé sur Google",
      "Formulaire de contact et intégration Google Maps",
      "Interface d'administration simple + formation",
      "30 jours de support après la mise en ligne",
    ],
    priceFactors: [
      "Le nombre de pages supplémentaires (50 à 100€ par page selon la complexité)",
      "Les fonctionnalités avancées (réservation en ligne, blog, espace membre)",
      "La rédaction des contenus si vous souhaitez qu'on s'en charge",
      "Le niveau de personnalisation du design",
    ],
    steps: [
      { title: "Échange et devis", desc: "Un appel de 30 minutes pour comprendre votre activité et vos objectifs. Vous recevez un devis détaillé sous 24h." },
      { title: "Maquette", desc: "Nous concevons la maquette de votre site. Vous la validez avant tout développement, avec révisions incluses." },
      { title: "Développement", desc: "Nous développons votre site en Next.js. Vous suivez l'avancement et testez le résultat." },
      { title: "Mise en ligne", desc: "Livraison en 2 semaines, formation à l'administration et 30 jours de support inclus." },
    ],
    benefits: [
      "Design personnalisé qui reflète votre identité de marque",
      "Optimisation SEO pour être visible sur Google",
      "Responsive parfait sur mobile, tablette et desktop",
      "Formulaire de contact et appels à l'action intégrés"
    ],
    faqItems: [
      {
        question: "Combien coûte un site vitrine ?",
        answer: "Nos sites vitrine démarrent à 490€ tout compris, hébergement de la première année inclus. Le prix varie selon le nombre de pages et les fonctionnalités souhaitées. Vous recevez un devis détaillé sous 24h."
      },
      {
        question: "Y a-t-il des frais cachés après les 490€ ?",
        answer: "Non. Le prix inclut la création complète et l'hébergement de la première année. Ensuite, l'hébergement revient à environ 39€/mois, ou vous optez pour notre formule mensuelle tout inclus. Aucune commission n'est prélevée."
      },
      {
        question: "En combien de temps mon site sera-t-il en ligne ?",
        answer: "Un site vitrine est livré en 2 semaines après validation de la maquette. Si nous dépassons ce délai, un mois de maintenance vous est offert."
      },
      {
        question: "Pourrai-je modifier le contenu moi-même ?",
        answer: "Oui, nous livrons chaque site avec une interface d'administration simple et une formation pour vous rendre autonome dans la gestion de votre contenu."
      }
    ],
    relatedService: "sites-web/site-vitrine",
    relatedPricing: "vitrine"
  },
  {
    slug: "site-ecommerce",
    name: "Site E-commerce",
    description: "Lancez votre boutique en ligne avec un site e-commerce performant. Gestion de catalogue, paiement sécurisé et optimisation des conversions.",
    intro: "Vendre en ligne ne devrait pas coûter une fortune ni vous enfermer dans des commissions sur chaque vente. Chez ConvertiLab, nous créons des boutiques e-commerce à partir de 1490€, sans commission sur votre chiffre d'affaires. Vous ne payez que les frais de paiement Stripe (1,5% + 0,25€), comme tout site marchand. Voici le détail de ce que couvre ce budget.",
    priceFrom: "1490€",
    priceBreakdown: [
      { poste: "Design de la boutique", prix: "250€", detail: "Identité visuelle de votre boutique, pages produits et parcours d'achat pensés pour la conversion." },
      { poste: "Développement e-commerce", prix: "350€", detail: "Catalogue produits, gestion des stocks, variantes, panier et tunnel de commande optimisé." },
      { poste: "Paiement + livraison", prix: "100€", detail: "Intégration Stripe sécurisé (carte, Apple Pay, Google Pay), configuration des frais et zones de livraison." },
      { poste: "SEO produit de base", prix: "100€", detail: "Optimisation des fiches produits et des catégories pour le référencement, structure adaptée à Google Shopping." },
    ],
    breakdownNote: "Soit 1490€ tout compris pour démarrer avec un catalogue de moins de 50 produits. Zéro commission ConvertiLab sur vos ventes. Paiement en plusieurs fois sans frais possible.",
    included: [
      "Boutique complète avec catalogue et gestion des stocks",
      "Paiement sécurisé Stripe (carte, Apple Pay, Google Pay)",
      "Tunnel de commande optimisé pour la conversion",
      "Tableau de bord de suivi des ventes et commandes",
      "Hébergement de la première année offert",
      "30 jours de support après la mise en ligne",
    ],
    priceFactors: [
      "Le nombre de produits et de variantes à intégrer",
      "Le paiement en plusieurs fois (Alma, Klarna)",
      "Les intégrations spécifiques (transporteurs, ERP, marketplace)",
      "La reprise et la mise en forme de votre catalogue existant",
    ],
    steps: [
      { title: "Cadrage du projet", desc: "Nous analysons votre catalogue, vos modes de livraison et de paiement. Devis détaillé sous 24h." },
      { title: "Design", desc: "Maquette de la boutique et des pages produits, validée avant développement." },
      { title: "Développement", desc: "Intégration du catalogue, du paiement Stripe et du tunnel de commande. Tests de bout en bout." },
      { title: "Lancement", desc: "Mise en ligne, formation à la gestion des commandes et support inclus." },
    ],
    benefits: [
      "Catalogue produits illimité avec gestion des stocks",
      "Paiement sécurisé Stripe avec 3D Secure",
      "Tunnel de commande optimisé pour la conversion",
      "Tableau de bord de suivi des ventes et commandes"
    ],
    faqItems: [
      {
        question: "Quel budget prévoir pour un site e-commerce ?",
        answer: "Nos boutiques en ligne démarrent à 1490€ tout compris pour un catalogue de moins de 50 produits. Le prix dépend du nombre de produits, des intégrations de paiement et de livraison, et du niveau de personnalisation."
      },
      {
        question: "Prenez-vous une commission sur mes ventes ?",
        answer: "Non, ConvertiLab ne prélève aucune commission. Seuls les frais de paiement Stripe (1,5% + 0,25€ par transaction) s'appliquent, comme pour tout site e-commerce."
      },
      {
        question: "Quels moyens de paiement sont intégrés ?",
        answer: "Nous intégrons Stripe (carte bancaire, Apple Pay, Google Pay) et pouvons ajouter le paiement en 3 ou 4 fois via Alma ou Klarna."
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
    intro: "Une landing page a un seul objectif : convertir. Pour une campagne Google Ads, Meta Ads ou un lancement de produit, elle fait souvent la différence entre un budget publicitaire rentable et un budget gâché. Chez ConvertiLab, nous créons des landing pages haute conversion à partir de 490€, avec copywriting et design pensés pour l'action. Voici comment se répartit ce budget.",
    priceFrom: "490€",
    priceBreakdown: [
      { poste: "Copywriting et structure CRO", prix: "150€", detail: "Rédaction persuasive, hiérarchie des arguments, gestion des objections et appels à l'action alignés sur votre offre." },
      { poste: "Design de conversion", prix: "150€", detail: "Design percutant orienté action, above-the-fold optimisé, preuves sociales mises en avant." },
      { poste: "Développement rapide", prix: "150€", detail: "Intégration en Next.js avec temps de chargement inférieur à 1 seconde, un facteur clé de conversion." },
      { poste: "Tracking et intégrations", prix: "50€", detail: "Pose du Google Ads et du Meta Pixel, connexion du formulaire, suivi des conversions pour mesurer votre ROI." },
    ],
    breakdownNote: "Soit 490€ tout compris. Une landing page bien conçue se rentabilise vite : elle augmente le taux de conversion de vos campagnes, donc baisse votre coût par lead.",
    included: [
      "Copywriting persuasif orienté conversion",
      "Design percutant et testé (CRO)",
      "Temps de chargement inférieur à 1 seconde",
      "Tracking Google Ads et Meta Pixel intégré",
      "Formulaire connecté à vos outils",
      "Compatible pour l'A/B testing",
    ],
    priceFactors: [
      "Le nombre de variantes à créer pour l'A/B testing",
      "La production de visuels ou de vidéos spécifiques",
      "Les intégrations CRM ou marketing automation",
      "La rédaction si vous fournissez ou non les contenus de base",
    ],
    steps: [
      { title: "Brief conversion", desc: "Nous définissons votre offre, votre audience et l'objectif unique de la page. Devis sous 24h." },
      { title: "Copywriting + design", desc: "Nous rédigeons et concevons la page autour de votre argument principal. Validation avant développement." },
      { title: "Développement + tracking", desc: "Intégration ultra-rapide et pose du tracking publicitaire pour mesurer chaque conversion." },
      { title: "Mise en ligne", desc: "Livraison en quelques jours, prête à recevoir votre trafic publicitaire." },
    ],
    benefits: [
      "Design optimisé pour la conversion (CRO)",
      "Copywriting persuasif qui pousse à l'action",
      "Temps de chargement ultra-rapide (moins d'une seconde)",
      "A/B testing intégré pour améliorer les performances"
    ],
    faqItems: [
      {
        question: "Combien coûte une landing page ?",
        answer: "Nos landing pages démarrent à 490€ tout compris, copywriting, design, développement et tracking inclus. Le prix varie selon le nombre de variantes et la production de visuels."
      },
      {
        question: "Quelle différence entre landing page et site vitrine ?",
        answer: "Une landing page est une page unique focalisée sur un seul objectif de conversion, idéale pour les campagnes publicitaires. Un site vitrine comporte plusieurs pages et présente l'ensemble de votre activité."
      },
      {
        question: "Quel taux de conversion attendre ?",
        answer: "Une landing page optimisée dépasse régulièrement les 8 à 15% de conversion grâce à notre méthodologie CRO, contre 2 à 3% en moyenne pour une page non optimisée."
      },
      {
        question: "La landing page est-elle compatible avec Google Ads ?",
        answer: "Oui, nos landing pages sont conçues pour les campagnes publicitaires. Elles intègrent le tracking Google Ads et Meta Pixel pour mesurer précisément votre ROI."
      }
    ],
    relatedService: "sites-web/landing-page",
    relatedPricing: "landing"
  },
  {
    slug: "refonte-site",
    name: "Refonte de Site",
    description: "Modernisez votre site web avec une refonte complète. Nouveau design, meilleures performances et migration SEO sécurisée pour ne perdre aucun trafic.",
    intro: "Refaire son site fait peur pour une raison : la crainte de perdre son référencement Google durement acquis. Chez ConvertiLab, la refonte démarre à 400€ et la préservation du SEO est notre priorité absolue. Nous migrons votre site avec des redirections 301 sur chaque URL pour conserver, voire améliorer, votre positionnement. Voici le détail.",
    priceFrom: "400€",
    priceBreakdown: [
      { poste: "Audit de l'existant", prix: "100€", detail: "Analyse de vos pages qui rankent, de vos contenus performants et des points techniques à corriger avant migration." },
      { poste: "Migration SEO sécurisée", prix: "150€", detail: "Redirections 301 de chaque ancienne URL, conservation des balises title performantes, re-soumission du sitemap à Google." },
      { poste: "Nouveau design responsive", prix: "150€", detail: "Design moderne, rapide et orienté conversion, avec un score de performance visé à 90+." },
    ],
    breakdownNote: "Soit 400€ pour une refonte de site vitrine. Vous conservez votre nom de domaine et toute votre autorité SEO. Le budget augmente avec le nombre de pages et la complexité des fonctionnalités à reprendre.",
    included: [
      "Audit complet de votre site actuel",
      "Redirections 301 pour préserver le référencement",
      "Nouveau design moderne et responsive",
      "Performance optimisée (score Lighthouse 90+)",
      "Reprise et mise en forme de vos contenus existants",
      "Suivi post-migration pour vérifier le maintien des positions",
    ],
    priceFactors: [
      "Le nombre de pages à reprendre et à rediriger",
      "Le type de site (vitrine, e-commerce, application)",
      "La reprise des contenus ou leur réécriture SEO",
      "Les fonctionnalités à recréer (réservation, blog, espace client)",
    ],
    steps: [
      { title: "Audit", desc: "Nous analysons votre site actuel : ce qui fonctionne en SEO, ce qui doit être préservé et ce qui doit être corrigé." },
      { title: "Nouveau design", desc: "Conception d'une maquette moderne, validée avant développement." },
      { title: "Migration", desc: "Développement du nouveau site et migration SEO avec redirections 301. Votre ancien site reste en ligne jusqu'au basculement." },
      { title: "Suivi", desc: "Mise en ligne puis suivi post-migration pour garantir le maintien de vos positions Google." },
    ],
    benefits: [
      "Migration SEO sécurisée avec redirections 301",
      "Design moderne et responsive qui convertit",
      "Performance optimisée (score Lighthouse 90+)",
      "Architecture repensée pour une meilleure UX"
    ],
    faqItems: [
      {
        question: "Combien coûte une refonte de site ?",
        answer: "Une refonte de site vitrine démarre à 400€. Le prix dépend du nombre de pages à reprendre, du type de site et du travail de migration SEO nécessaire. Devis détaillé sous 24h."
      },
      {
        question: "Vais-je perdre mon référencement Google ?",
        answer: "Non. Nous réalisons une migration SEO rigoureuse avec des redirections 301 sur chaque URL. Votre positionnement est maintenu, voire amélioré grâce aux optimisations techniques."
      },
      {
        question: "Combien de temps dure une refonte ?",
        answer: "Comptez 1 à 2 semaines pour un site vitrine et 3 à 6 semaines pour un site e-commerce, en incluant l'audit, le design, le développement et la migration."
      },
      {
        question: "Puis-je conserver mon nom de domaine et mes contenus ?",
        answer: "Oui, vous conservez votre nom de domaine et toute votre autorité SEO. Nous reprenons vos contenus existants et gérons la migration technique en toute transparence."
      }
    ],
    relatedService: "sites-web",
    relatedPricing: "refonte"
  },
  {
    slug: "seo",
    name: "SEO",
    description: "Améliorez votre visibilité sur Google avec une stratégie SEO sur-mesure. Audit technique, optimisation on-page, contenu et netlinking.",
    intro: "Le SEO est le seul canal qui génère du trafic gratuit et durable une fois les positions acquises. Contrairement à la publicité, vous ne payez pas à chaque visite. Chez ConvertiLab, nous construisons des stratégies SEO sur-mesure, sans engagement piégeux, avec un reporting mensuel transparent. Chaque prestation démarre par un audit et un devis adapté à votre situation.",
    priceFrom: "Sur devis",
    priceBreakdown: [
      { poste: "Audit SEO complet", prix: "Inclus", detail: "Analyse technique, on-page, contenu et autorité de votre site, avec un plan d'action priorisé." },
      { poste: "Optimisation technique et on-page", prix: "Selon périmètre", detail: "Correction des freins techniques, optimisation des balises, de la structure et des contenus existants." },
      { poste: "Contenu et netlinking", prix: "Selon objectifs", detail: "Création de contenu qui attire du trafic qualifié et acquisition de liens pour renforcer votre autorité." },
      { poste: "Suivi mensuel", prix: "Selon formule", detail: "Rapport mensuel des positions, du trafic organique et des actions menées." },
    ],
    breakdownNote: "Le SEO est un investissement sur-mesure : le devis dépend de votre secteur, de la concurrence et de vos objectifs. Nous commençons toujours par un audit gratuit pour évaluer le potentiel avant de vous proposer une stratégie chiffrée.",
    included: [
      "Audit SEO complet avec plan d'action priorisé",
      "Optimisation technique et on-page de vos pages",
      "Stratégie de contenu pour attirer du trafic qualifié",
      "Acquisition de liens pour renforcer votre autorité",
      "Suivi mensuel des positions et du trafic organique",
    ],
    priceFactors: [
      "Le niveau de concurrence de votre secteur",
      "L'état technique et l'autorité actuelle de votre site",
      "Le volume de contenu à produire",
      "L'ambition de vos objectifs de positionnement",
    ],
    steps: [
      { title: "Audit gratuit", desc: "Nous analysons votre site et votre marché pour évaluer le potentiel SEO. Devis adapté sous 24h." },
      { title: "Corrections techniques", desc: "Nous corrigeons les freins qui empêchent Google de bien vous indexer et vous classer." },
      { title: "Contenu et autorité", desc: "Nous produisons du contenu ciblé et renforçons votre autorité par des liens de qualité." },
      { title: "Suivi mensuel", desc: "Reporting transparent des positions, du trafic et des prochaines actions." },
    ],
    benefits: [
      "Audit SEO complet avec plan d'action priorisé",
      "Optimisation technique et on-page de toutes vos pages",
      "Stratégie de contenu pour attirer du trafic qualifié",
      "Suivi mensuel des positions et du trafic organique"
    ],
    faqItems: [
      {
        question: "Combien coûte une prestation SEO ?",
        answer: "Le SEO est un investissement sur-mesure. Le devis dépend de votre secteur, de la concurrence et de vos objectifs. Nous commençons par un audit gratuit pour évaluer le potentiel avant de chiffrer une stratégie."
      },
      {
        question: "Combien de temps pour voir des résultats SEO ?",
        answer: "Les premiers résultats apparaissent entre 3 et 6 mois. Le SEO est un investissement à long terme qui génère un trafic gratuit et durable une fois les positions acquises."
      },
      {
        question: "Le SEO est-il compatible avec Google Ads ?",
        answer: "Oui, SEO et Google Ads sont complémentaires. La publicité génère du trafic immédiat, le SEO construit une visibilité durable. Ensemble, ils maximisent votre présence."
      },
      {
        question: "Que comprend votre prestation SEO ?",
        answer: "Un audit technique complet, l'optimisation on-page de vos contenus, une stratégie de contenu et de netlinking, et un suivi mensuel avec rapport de performance."
      }
    ],
    relatedService: "marketing-digital",
    relatedPricing: "seo"
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    description: "Générez des leads qualifiés avec des campagnes Google Ads rentables. Paramétrage, optimisation et gestion complète de vos campagnes.",
    intro: "Google Ads permet d'apparaître en tête des résultats dès aujourd'hui, face à des personnes qui cherchent activement vos services. Bien gérée, une campagne génère des leads rentables. Mal gérée, elle brûle votre budget. Chez ConvertiLab, nous gérons vos campagnes à partir de 200€/mois de frais de gestion, avec un reporting transparent sur chaque euro investi.",
    priceFrom: "Gestion dès 200€/mois",
    priceBreakdown: [
      { poste: "Frais de gestion", prix: "Dès 200€/mois", detail: "Paramétrage, optimisation continue et reporting de vos campagnes. Distinct de votre budget publicitaire." },
      { poste: "Budget publicitaire", prix: "Dès 300€/mois", detail: "Le montant versé à Google, recommandé au minimum pour obtenir des données exploitables. Vous le maîtrisez à tout moment." },
      { poste: "Configuration du suivi", prix: "Inclus", detail: "Mise en place du suivi de conversion (appels, formulaires, ventes) pour mesurer le retour réel." },
    ],
    breakdownNote: "Les frais de gestion et le budget publicitaire sont séparés : vous gardez le contrôle total de votre investissement média. Le budget optimal dépend de votre secteur et de vos objectifs.",
    included: [
      "Paramétrage complet de vos campagnes",
      "Ciblage précis de votre audience idéale",
      "Optimisation continue pour maximiser le ROI",
      "Suivi de conversion (appels, formulaires, ventes)",
      "Reporting mensuel détaillé et transparent",
    ],
    priceFactors: [
      "Le niveau de concurrence et le coût par clic de votre secteur",
      "Le nombre de campagnes et de zones géographiques",
      "Vos objectifs de volume de leads ou de ventes",
      "La création éventuelle de landing pages dédiées",
    ],
    steps: [
      { title: "Stratégie", desc: "Nous définissons vos objectifs, votre audience et vos mots-clés rentables. Devis sous 24h." },
      { title: "Lancement", desc: "Paramétrage des campagnes, des annonces et du suivi de conversion." },
      { title: "Optimisation", desc: "Ajustement continu des enchères, des mots-clés et des annonces selon les données." },
      { title: "Reporting", desc: "Rapport mensuel avec coût par lead, taux de conversion et retour sur investissement." },
    ],
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
    intro: "Facebook et Instagram permettent de toucher vos futurs clients par centres d'intérêt et comportement, même quand ils ne vous cherchent pas encore. C'est le levier idéal pour faire connaître une offre et créer de la demande. Chez ConvertiLab, nous gérons vos campagnes Meta Ads à partir de 200€/mois de frais de gestion, création des visuels comprise.",
    priceFrom: "Gestion dès 200€/mois",
    priceBreakdown: [
      { poste: "Frais de gestion", prix: "Dès 200€/mois", detail: "Stratégie, ciblage, optimisation des audiences et reporting. Distinct de votre budget publicitaire." },
      { poste: "Budget publicitaire", prix: "Dès 200€/mois", detail: "Le montant versé à Meta pour diffuser vos annonces. Vous le maîtrisez à tout moment." },
      { poste: "Création des visuels", prix: "Incluse", detail: "Conception des visuels, vidéos et textes publicitaires, avec plusieurs variantes testées." },
    ],
    breakdownNote: "Frais de gestion et budget média séparés, pour un contrôle total. Un budget de 200 à 500€/mois permet de démarrer efficacement selon votre objectif.",
    included: [
      "Ciblage par centres d'intérêt et comportement",
      "Création de visuels et vidéos publicitaires",
      "Retargeting des visiteurs de votre site",
      "Test de plusieurs créatives pour identifier les gagnantes",
      "Reporting mensuel transparent",
    ],
    priceFactors: [
      "Le volume et le type de créatives à produire (image, vidéo)",
      "Le nombre d'audiences et de campagnes à gérer",
      "La mise en place du retargeting et du catalogue produits",
      "Vos objectifs de notoriété, de leads ou de ventes",
    ],
    steps: [
      { title: "Stratégie créative", desc: "Nous définissons vos audiences, vos angles et vos objectifs. Devis sous 24h." },
      { title: "Production", desc: "Création des visuels, vidéos et textes publicitaires en plusieurs variantes." },
      { title: "Diffusion", desc: "Lancement des campagnes et du retargeting, avec suivi des performances." },
      { title: "Optimisation", desc: "Ajustement des audiences et des créatives selon les résultats, reporting mensuel." },
    ],
    benefits: [
      "Ciblage ultra-précis par centres d'intérêt et comportement",
      "Création de visuels et vidéos publicitaires impactants",
      "Retargeting des visiteurs de votre site web",
      "Optimisation continue des audiences et créatives"
    ],
    faqItems: [
      {
        question: "Quel budget prévoir pour Meta Ads ?",
        answer: "Un budget publicitaire de 200 à 500€/mois permet de démarrer efficacement. Nos frais de gestion démarrent à 200€/mois. Nous optimisons vos campagnes pour le meilleur coût par lead ou par vente."
      },
      {
        question: "Quelle différence entre Google Ads et Meta Ads ?",
        answer: "Google Ads cible les personnes qui recherchent activement vos services. Meta Ads permet de toucher des audiences par centres d'intérêt, même si elles ne vous cherchent pas encore."
      },
      {
        question: "Créez-vous les visuels publicitaires ?",
        answer: "Oui, notre équipe crée les visuels, vidéos et textes. Nous testons plusieurs variantes pour identifier les créatives les plus performantes."
      }
    ],
    relatedService: "marketing-digital",
    relatedPricing: "meta-ads"
  },
  {
    slug: "community-management",
    name: "Community Management",
    description: "Développez votre présence sur les réseaux sociaux avec une stratégie de contenu professionnelle. Création, planification et gestion de vos communautés.",
    intro: "Être présent sur les réseaux sociaux ne suffit pas : il faut publier régulièrement du contenu qui engage votre audience et renforce votre image. C'est chronophage quand on gère déjà son activité. Chez ConvertiLab, nous prenons en charge votre présence sociale de A à Z, avec un calendrier éditorial validé par vos soins. Chaque formule est adaptée à vos réseaux et à vos objectifs.",
    priceFrom: "Sur devis",
    priceBreakdown: [
      { poste: "Stratégie éditoriale", prix: "Inclus", detail: "Définition de votre ligne éditoriale, de vos thématiques et des réseaux les plus pertinents pour votre activité." },
      { poste: "Création de contenu", prix: "Selon volume", detail: "Visuels, rédaction des publications, stories et reels selon la formule choisie." },
      { poste: "Publication et gestion", prix: "Selon formule", detail: "Calendrier éditorial, publication régulière et animation de votre communauté." },
    ],
    breakdownNote: "Le devis dépend du nombre de réseaux, du volume de publications (de 3 à 7 par semaine) et de la production de contenus. Nous vous recommandons de concentrer les efforts sur 2 ou 3 plateformes vraiment pertinentes.",
    included: [
      "Stratégie de contenu adaptée à votre audience",
      "Création de visuels et rédaction des publications",
      "Calendrier éditorial validé chaque semaine",
      "Publication régulière et gestion de communauté",
      "Suivi de l'engagement et ajustements",
    ],
    priceFactors: [
      "Le nombre de réseaux sociaux à gérer",
      "Le volume de publications par semaine",
      "La production de contenus spécifiques (photo, vidéo, reels)",
      "La gestion ou non des messages et commentaires",
    ],
    steps: [
      { title: "Audit et stratégie", desc: "Nous analysons votre présence actuelle et définissons votre ligne éditoriale. Devis sous 24h." },
      { title: "Calendrier", desc: "Nous préparons un calendrier éditorial que vous validez chaque semaine." },
      { title: "Création", desc: "Production des visuels et rédaction des publications, stories et reels." },
      { title: "Publication et suivi", desc: "Diffusion régulière, animation de la communauté et reporting de l'engagement." },
    ],
    benefits: [
      "Stratégie de contenu adaptée à votre audience",
      "Création de visuels et rédaction de publications",
      "Calendrier éditorial et publication régulière",
      "Gestion de communauté et engagement actif"
    ],
    faqItems: [
      {
        question: "Combien coûte le community management ?",
        answer: "Le tarif dépend du nombre de réseaux, du volume de publications et de la production de contenus. Nous établissons un devis sur-mesure après avoir défini votre stratégie et vos objectifs."
      },
      {
        question: "Sur quels réseaux sociaux travaillez-vous ?",
        answer: "Nous gérons Instagram, Facebook, LinkedIn, TikTok et Pinterest. Nous recommandons les 2 ou 3 plateformes les plus pertinentes pour votre activité et votre audience."
      },
      {
        question: "Combien de publications par semaine ?",
        answer: "Nos formules incluent de 3 à 7 publications par semaine. Nous créons aussi des stories et des reels pour maximiser votre visibilité."
      },
      {
        question: "Puis-je valider les publications avant diffusion ?",
        answer: "Oui, nous soumettons un calendrier éditorial pour validation chaque semaine. Vous approuvez, modifiez ou refusez chaque publication avant sa diffusion."
      }
    ],
    relatedService: "marketing-digital",
    relatedPricing: "community-management"
  },
  {
    slug: "identite-visuelle",
    name: "Identité Visuelle",
    description: "Créez une identité visuelle forte et cohérente pour votre marque. Logo, charte graphique, supports de communication et déclinaisons digitales.",
    intro: "Votre identité visuelle est ce qui vous rend reconnaissable et crédible. Un logo bâclé ou incohérent nuit à la confiance, avant même que le client ne découvre votre offre. Chez ConvertiLab, nous concevons des identités de marque complètes et cohérentes, du logo à la charte graphique, prêtes pour le web comme pour l'impression. Voici ce que couvre la prestation.",
    priceFrom: "Sur devis",
    priceBreakdown: [
      { poste: "Création du logo", prix: "Inclus", detail: "Trois concepts de logo distincts, puis affinage du concept retenu avec deux tours de révisions." },
      { poste: "Charte graphique", prix: "Incluse", detail: "Palette de couleurs, typographies, règles d'usage et déclinaisons du logo." },
      { poste: "Déclinaisons et fichiers", prix: "Selon supports", detail: "Templates réseaux sociaux, supports imprimés et fichiers sources livrés dans tous les formats." },
    ],
    breakdownNote: "Le devis dépend du périmètre : logo seul, identité complète ou déclinaisons sur de nombreux supports. Tous les fichiers sources vous appartiennent.",
    included: [
      "Trois propositions de concepts de logo",
      "Charte graphique complète (couleurs, typographies, usages)",
      "Déclinaisons pour le web et les réseaux sociaux",
      "Fichiers sources livrés dans tous les formats",
      "Deux tours de révisions inclus",
    ],
    priceFactors: [
      "Le périmètre (logo seul ou identité complète)",
      "Le nombre de supports à décliner (cartes, flyers, réseaux)",
      "La création d'illustrations ou de pictogrammes sur-mesure",
      "La refonte d'une identité existante ou une création de zéro",
    ],
    steps: [
      { title: "Brief créatif", desc: "Nous cernons votre positionnement, vos valeurs et vos préférences visuelles. Devis sous 24h." },
      { title: "Concepts", desc: "Nous vous présentons trois concepts de logo différents." },
      { title: "Affinage", desc: "Vous choisissez votre favori, que nous peaufinons avec deux tours de révisions." },
      { title: "Livraison", desc: "Charte graphique complète, déclinaisons et fichiers sources dans tous les formats." },
    ],
    benefits: [
      "Logo professionnel avec 3 propositions de concepts",
      "Charte graphique complète (couleurs, typographies, usages)",
      "Déclinaisons pour le web et les réseaux sociaux",
      "Fichiers sources livrés dans tous les formats"
    ],
    faqItems: [
      {
        question: "Combien coûte une identité visuelle ?",
        answer: "Le tarif dépend du périmètre : logo seul, identité complète ou nombreuses déclinaisons. Nous établissons un devis sur-mesure après le brief créatif."
      },
      {
        question: "Combien de propositions de logo recevrai-je ?",
        answer: "Nous présentons 3 concepts de logo différents. Vous choisissez votre favori et nous le peaufinons avec 2 tours de révisions inclus."
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
    intro: "Quand un site vitrine ne suffit plus, une application web sur-mesure digitalise vos process : espace client, outil métier, tableau de bord, plateforme SaaS. Chaque projet est unique, c'est pourquoi nous partons toujours d'un audit gratuit de vos besoins avant de chiffrer. Nous développons avec une stack moderne et robuste, pensée pour évoluer avec votre croissance.",
    priceFrom: "Sur devis",
    priceBreakdown: [
      { poste: "Cadrage et conception", prix: "Inclus", detail: "Audit de vos besoins, définition des fonctionnalités et des parcours utilisateurs, chiffrage détaillé." },
      { poste: "Design de l'interface", prix: "Selon périmètre", detail: "Interface intuitive et moderne, pensée pour vos utilisateurs et vos process métier." },
      { poste: "Développement sur-mesure", prix: "Selon fonctionnalités", detail: "Développement en Next.js, React, TypeScript et Supabase, avec une architecture évolutive et sécurisée." },
    ],
    breakdownNote: "Une application web est un projet sur-mesure : le devis dépend du nombre de fonctionnalités, des intégrations et de la complexité métier. Nous établissons un planning et un budget précis après l'audit gratuit.",
    included: [
      "Audit et cadrage complet de vos besoins",
      "Interface utilisateur intuitive et moderne",
      "Développement sur-mesure adapté à vos process",
      "Architecture scalable qui évolue avec votre croissance",
      "Hébergement sécurisé et maintenance",
    ],
    priceFactors: [
      "Le nombre et la complexité des fonctionnalités",
      "Les intégrations avec vos outils existants",
      "La gestion des utilisateurs et des droits d'accès",
      "Le niveau de sécurité et de conformité requis",
    ],
    steps: [
      { title: "Audit gratuit", desc: "Nous analysons vos besoins et vos process pour définir le périmètre. Devis détaillé et planning sous 24 à 48h." },
      { title: "Conception", desc: "Design des interfaces et validation des parcours utilisateurs avant développement." },
      { title: "Développement", desc: "Développement par étapes, avec des points réguliers pour suivre l'avancement." },
      { title: "Livraison et suivi", desc: "Mise en ligne, formation et contrat de maintenance et d'évolution." },
    ],
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
        answer: "Oui, nous proposons des contrats de maintenance et d'évolution : mises à jour de sécurité, sauvegardes et développement de nouvelles fonctionnalités."
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
