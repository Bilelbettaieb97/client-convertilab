export interface FaqItem {
  question: string;
  answer: string;
}

export interface CaseStudy {
  client: string;
  sector: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial: string;
  author: string;
  role: string;
  photo: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface Sector {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  painPoints: string[];
  solutions: string[];
  features: string[];
  cta: string;
  faqItems: FaqItem[];
  caseStudy: CaseStudy;
  stats: Stat[];
  process: ProcessStep[];
}

export const sectors: Sector[] = [
  {
    slug: "restaurant",
    name: "Restaurant",
    emoji: "🍽️",
    description:
      "Attirez plus de clients dans votre restaurant grâce à un site web moderne avec menu en ligne, réservation et référencement local Google Maps.",
    painPoints: [
      "Pas visible sur Google Maps",
      "Menu non consultable en ligne",
      "Pas de système de réservation",
      "Avis clients non exploités",
    ],
    solutions: [
      "Site vitrine avec menu interactif",
      "Intégration Google My Business",
      "Système de réservation en ligne",
      "Page avis et témoignages",
    ],
    features: [
      "Menu digital responsive",
      "Bouton réservation",
      "Galerie photos plats",
      "Carte Google Maps intégrée",
      "Horaires et coordonnées",
      "SEO local optimisé",
    ],
    cta: "Créer le site de mon restaurant",
    faqItems: [
      {
        question: "Combien coûte un site web pour un restaurant ?",
        answer:
          "Nos sites vitrines pour restaurants démarrent à 500€. Ce tarif inclut le menu en ligne, la galerie photos, le bouton de réservation, l'intégration Google Maps et un an d'hébergement. Pour un système de réservation avancé ou de commande en ligne, comptez un supplément selon vos besoins.",
      },
      {
        question:
          "Avez-vous de l'expérience avec les sites de restaurants ?",
        answer:
          "Oui, nous avons accompagné plus de 15 restaurateurs en Île-de-France. Nous comprenons les enjeux spécifiques : mise en valeur des plats, visibilité locale, gestion des réservations et des avis. Chaque site est pensé pour donner faim et convertir les visiteurs en clients.",
      },
      {
        question: "Mon site aura-t-il un menu en ligne modifiable ?",
        answer:
          "Absolument. Votre menu sera consultable sur mobile et ordinateur, avec photos et descriptions. Vous pourrez le modifier vous-même à tout moment via un panneau d'administration simple, sans aucune compétence technique.",
      },
      {
        question:
          "Le site sera-t-il visible sur Google Maps ?",
        answer:
          "Oui, nous optimisons votre fiche Google My Business et intégrons la carte directement sur votre site. Nous travaillons également le SEO local pour que votre restaurant apparaisse dans les résultats de recherche quand un client cherche un restaurant près de chez lui.",
      },
    ],
    caseStudy: {
      client: "La Table de Marco",
      sector: "Restaurant italien — Paris 11e",
      challenge:
        "Marco recevait 80% de ses clients via le bouche-à-oreille. Son restaurant n'apparaissait pas sur Google Maps et il n'avait aucune présence en ligne. Les tables du midi restaient vides en semaine.",
      solution:
        "Nous avons créé un site vitrine avec menu interactif, galerie photos professionnelle, bouton de réservation et optimisation Google My Business complète. Le SEO local a été travaillé sur les mots-clés 'restaurant italien Paris 11'.",
      results: [
        "+65% de réservations en ligne en 3 mois",
        "1ère page Google sur 'restaurant italien Paris 11'",
        "+40% de couverts le midi en semaine",
        "120 avis Google collectés en 6 mois",
      ],
      testimonial:
        "Depuis que j'ai mon site, je reçois des réservations tous les jours sans rien faire. Le midi, c'est plein maintenant. ConvertiLab a compris exactement ce dont j'avais besoin.",
      author: "Marco Benedetti",
      role: "Gérant, La Table de Marco",
      photo: "/images/testimonials/restaurant.webp",
    },
    stats: [
      {
        value: "72%",
        label: "des clients cherchent un restaurant sur Google avant d'y aller",
      },
      {
        value: "3x",
        label: "plus de réservations avec un site optimisé pour le mobile",
      },
      {
        value: "88%",
        label:
          "des consommateurs consultent les avis en ligne avant de choisir un restaurant",
      },
    ],
    process: [
      {
        step: "01",
        title: "Découverte de votre restaurant",
        desc: "Nous analysons votre carte, votre positionnement, votre clientèle cible et votre zone de chalandise pour créer un site qui vous ressemble.",
      },
      {
        step: "02",
        title: "Design & menu interactif",
        desc: "Création d'un design gourmand qui met en valeur vos plats, avec un menu digital responsive et une galerie photos appétissante.",
      },
      {
        step: "03",
        title: "Réservation & Google Maps",
        desc: "Intégration du système de réservation, optimisation de votre fiche Google My Business et mise en place du SEO local.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à la modification du menu et des photos, et suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "avocat",
    name: "Cabinet d'Avocats",
    emoji: "⚖️",
    description:
      "Renforcez la crédibilité de votre cabinet avec un site professionnel qui inspire confiance et génère des consultations qualifiées.",
    painPoints: [
      "Image en ligne pas à la hauteur",
      "Peu de demandes de consultation",
      "Concurrence forte sur Google",
      "Pas de contenu expert visible",
    ],
    solutions: [
      "Site premium qui inspire confiance",
      "Pages par domaine de compétence",
      "Blog juridique pour le SEO",
      "Formulaire de prise de RDV sécurisé",
    ],
    features: [
      "Design sobre et professionnel",
      "Pages par spécialité",
      "Blog d'expertise juridique",
      "Formulaire de contact sécurisé",
      "Mentions légales conformes",
      "SEO local cabinet",
    ],
    cta: "Créer le site de mon cabinet",
    faqItems: [
      {
        question:
          "Combien coûte un site internet pour un cabinet d'avocats ?",
        answer:
          "Un site vitrine pour cabinet d'avocats démarre à 500€. Ce prix comprend un design professionnel, les pages par domaine de compétence, le formulaire de contact sécurisé, les mentions légales conformes et un an d'hébergement. Un blog juridique ou un espace client sécurisé peut être ajouté en option.",
      },
      {
        question:
          "Le site respectera-t-il la déontologie de la profession ?",
        answer:
          "Oui, nous connaissons les règles déontologiques applicables à la communication des avocats (RIN). Le site respectera les obligations en matière de mentions légales, de confidentialité et de présentation des honoraires. Nous travaillons en étroite collaboration avec vous pour valider chaque élément.",
      },
      {
        question:
          "Pouvez-vous créer des pages par domaine de compétence ?",
        answer:
          "Absolument. Chaque domaine (droit de la famille, droit des affaires, droit pénal, etc.) aura sa propre page optimisée pour le référencement. Cela permet d'attirer des clients qui recherchent un avocat spécialisé dans leur problématique précise.",
      },
      {
        question:
          "Comment le site m'aidera-t-il à obtenir plus de clients ?",
        answer:
          "Grâce au SEO local, votre cabinet apparaîtra dans les recherches type 'avocat + ville + spécialité'. Le blog juridique renforce votre crédibilité et attire du trafic qualifié. Le formulaire de prise de RDV simplifie la conversion des visiteurs en consultations.",
      },
    ],
    caseStudy: {
      client: "Cabinet Renaud & Associés",
      sector: "Cabinet d'avocats en droit des affaires — Neuilly-sur-Seine",
      challenge:
        "Le cabinet avait un site vieillissant qui ne reflétait pas son expertise. Les demandes de consultation provenaient uniquement du réseau personnel. Aucune visibilité sur Google pour les recherches locales.",
      solution:
        "Refonte complète avec un design premium, des pages dédiées par spécialité juridique, un blog d'actualités juridiques et un formulaire de prise de rendez-vous sécurisé. SEO local optimisé sur 'avocat droit des affaires Neuilly'.",
      results: [
        "+80% de demandes de consultation en 4 mois",
        "1ère page Google sur 5 mots-clés cibles",
        "12 articles de blog publiés la première année",
        "Taux de conversion du site : 4,2%",
      ],
      testimonial:
        "Notre ancien site faisait amateur. Depuis la refonte avec ConvertiLab, nous recevons des demandes de consultation qualifiées chaque semaine. L'investissement a été rentabilisé en 2 mois.",
      author: "Maître Sophie Renaud",
      role: "Associée fondatrice, Cabinet Renaud & Associés",
      photo: "/images/testimonials/avocat.webp",
    },
    stats: [
      {
        value: "76%",
        label:
          "des personnes cherchent un avocat sur internet avant de prendre contact",
      },
      {
        value: "5x",
        label:
          "plus de demandes de consultation avec un site optimisé SEO local",
      },
      {
        value: "62%",
        label:
          "des prospects jugent la crédibilité d'un cabinet sur la qualité de son site",
      },
    ],
    process: [
      {
        step: "01",
        title: "Analyse de votre cabinet",
        desc: "Nous étudions vos domaines de compétence, votre positionnement, votre clientèle cible et vos concurrents locaux pour définir la stratégie web.",
      },
      {
        step: "02",
        title: "Design premium & contenu",
        desc: "Création d'un design sobre et professionnel, rédaction des pages par spécialité et mise en place du blog juridique.",
      },
      {
        step: "03",
        title: "SEO & formulaire sécurisé",
        desc: "Optimisation du référencement local, mise en conformité déontologique et intégration du formulaire de prise de RDV sécurisé.",
      },
      {
        step: "04",
        title: "Lancement & accompagnement",
        desc: "Mise en ligne, formation à la gestion du blog et du contenu, suivi SEO et support technique pendant 30 jours.",
      },
    ],
  },
  {
    slug: "artisan",
    name: "Artisan",
    emoji: "🔧",
    description:
      "Montrez votre savoir-faire et recevez des demandes de devis directement depuis votre site web optimisé pour votre zone d'intervention.",
    painPoints: [
      "Dépendant du bouche-à-oreille",
      "Pas de vitrine en ligne",
      "Difficile de montrer ses réalisations",
      "Pas de demandes de devis en ligne",
    ],
    solutions: [
      "Site vitrine avec portfolio photos",
      "Formulaire de demande de devis",
      "SEO local par zone d'intervention",
      "Page Google My Business optimisée",
    ],
    features: [
      "Galerie de réalisations",
      "Formulaire devis en ligne",
      "Zones d'intervention",
      "Témoignages clients",
      "Certifications et labels",
      "SEO local multi-villes",
    ],
    cta: "Créer le site de mon activité",
    faqItems: [
      {
        question:
          "Combien coûte un site internet pour un artisan ?",
        answer:
          "Un site vitrine pour artisan démarre à 500€. Ce tarif inclut la galerie de réalisations, le formulaire de demande de devis, les zones d'intervention, les témoignages clients et un an d'hébergement. C'est un investissement qui se rentabilise dès les premiers chantiers obtenus grâce au site.",
      },
      {
        question:
          "Je ne suis pas à l'aise avec l'informatique, est-ce un problème ?",
        answer:
          "Pas du tout. Nous nous occupons de tout : création, mise en ligne, configuration. Nous vous formons ensuite en 30 minutes pour modifier vos photos et vos textes. L'interface est simple comme un smartphone. Et notre support est là pendant 30 jours si vous avez la moindre question.",
      },
      {
        question:
          "Le site sera-t-il visible dans ma zone d'intervention ?",
        answer:
          "Oui, c'est notre priorité. Nous optimisons votre site pour le SEO local dans toutes les villes où vous intervenez. Chaque zone d'intervention aura sa propre optimisation pour que vous apparaissiez quand un client cherche un artisan près de chez lui.",
      },
      {
        question:
          "Puis-je ajouter mes réalisations moi-même ?",
        answer:
          "Oui, vous pourrez ajouter des photos de vos chantiers terminés directement depuis votre téléphone. L'interface d'administration est conçue pour être utilisée sur mobile, sans aucune compétence technique.",
      },
    ],
    caseStudy: {
      client: "Menuiserie Dupont",
      sector: "Menuisier — Versailles et environs",
      challenge:
        "Laurent Dupont travaillait uniquement grâce au bouche-à-oreille depuis 12 ans. Il n'avait aucun site web et perdait des clients face à des concurrents mieux référencés. Pas de photos de ses réalisations visibles en ligne.",
      solution:
        "Création d'un site vitrine avec une galerie avant/après de ses réalisations, un formulaire de demande de devis, des pages optimisées pour chaque ville d'intervention et une fiche Google My Business complète.",
      results: [
        "+15 demandes de devis par mois via le site",
        "1ère page Google sur 'menuisier Versailles'",
        "3 nouveaux chantiers par mois en moyenne",
        "ROI du site atteint en 6 semaines",
      ],
      testimonial:
        "Je pensais qu'un site ne servait à rien pour un artisan. En 2 mois, j'avais plus de demandes que je ne pouvais en traiter. ConvertiLab a fait un travail remarquable.",
      author: "Laurent Dupont",
      role: "Gérant, Menuiserie Dupont",
      photo: "/images/testimonials/artisan.webp",
    },
    stats: [
      {
        value: "82%",
        label:
          "des particuliers cherchent un artisan sur Google avant de demander un devis",
      },
      {
        value: "4x",
        label:
          "plus de demandes de devis avec un site optimisé pour le SEO local",
      },
      {
        value: "67%",
        label:
          "des artisans sans site web perdent des clients face à la concurrence en ligne",
      },
    ],
    process: [
      {
        step: "01",
        title: "Découverte de votre métier",
        desc: "Nous échangeons sur votre spécialité, vos réalisations phares, votre zone d'intervention et votre clientèle pour concevoir un site sur mesure.",
      },
      {
        step: "02",
        title: "Design & galerie de réalisations",
        desc: "Création d'un design qui met en valeur votre savoir-faire avec des galeries avant/après et des témoignages clients.",
      },
      {
        step: "03",
        title: "SEO local & devis en ligne",
        desc: "Optimisation pour chaque ville d'intervention, intégration du formulaire de demande de devis et configuration Google My Business.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à l'ajout de photos et de réalisations, et suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "immobilier",
    name: "Agence Immobilière",
    emoji: "🏠",
    description:
      "Présentez vos biens, générez des contacts vendeurs et acheteurs avec un site immobilier moderne et performant.",
    painPoints: [
      "Dépendant des portails (SeLoger, Leboncoin)",
      "Pas de marque propre en ligne",
      "Leads non qualifiés",
      "Coût d'acquisition élevé",
    ],
    solutions: [
      "Site vitrine avec catalogue de biens",
      "Landing pages par quartier",
      "SEO local immobilier",
      "Formulaire d'estimation en ligne",
    ],
    features: [
      "Catalogue de biens",
      "Recherche par critères",
      "Pages par quartier",
      "Estimation en ligne",
      "Témoignages vendeurs/acheteurs",
      "SEO local immobilier",
    ],
    cta: "Créer le site de mon agence",
    faqItems: [
      {
        question:
          "Combien coûte un site internet pour une agence immobilière ?",
        answer:
          "Un site vitrine pour agence immobilière démarre à 500€. Il comprend le catalogue de biens, la recherche par critères, les pages par quartier, le formulaire d'estimation et un an d'hébergement. Pour un site avec import automatique depuis votre logiciel métier, un devis personnalisé sera établi.",
      },
      {
        question:
          "Le site peut-il remplacer ma dépendance aux portails immobiliers ?",
        answer:
          "Le site ne remplace pas les portails mais réduit votre dépendance. En développant votre propre marque en ligne avec un bon SEO local, vous générez des contacts directs sans payer de commission. C'est un canal complémentaire qui renforce votre image et réduit vos coûts d'acquisition.",
      },
      {
        question:
          "Puis-je ajouter et modifier mes annonces facilement ?",
        answer:
          "Oui, l'interface d'administration vous permet d'ajouter, modifier et supprimer des annonces en quelques clics. Vous pouvez uploader les photos, renseigner les caractéristiques et publier instantanément. C'est aussi simple que poster sur Leboncoin.",
      },
      {
        question:
          "Le site sera-t-il bien référencé sur les recherches immobilières locales ?",
        answer:
          "Oui, nous créons des pages optimisées par quartier et par type de bien. Chaque page cible des mots-clés comme 'appartement à vendre + quartier' ou 'agence immobilière + ville'. Le SEO local est au coeur de notre stratégie pour votre visibilité.",
      },
    ],
    caseStudy: {
      client: "Immobilier Prestige 92",
      sector: "Agence immobilière — Boulogne-Billancourt",
      challenge:
        "L'agence dépensait 2 000€/mois en abonnements portails avec un coût par lead élevé. Pas de site propre, pas de marque identifiable en ligne. Les mandats exclusifs étaient difficiles à obtenir sans crédibilité web.",
      solution:
        "Création d'un site vitrine avec catalogue de biens, pages par quartier de Boulogne-Billancourt, formulaire d'estimation en ligne et blog immobilier. SEO local ciblé et fiche Google My Business optimisée.",
      results: [
        "+45 contacts qualifiés par mois via le site",
        "Réduction de 30% des dépenses portails",
        "1ère page Google sur 'agence immobilière Boulogne'",
        "+25% de mandats exclusifs en 6 mois",
      ],
      testimonial:
        "Grâce à notre nouveau site, les propriétaires nous trouvent directement sur Google. Nous avons réduit nos dépenses portails tout en augmentant nos mandats. Un vrai game changer.",
      author: "Nathalie Morel",
      role: "Directrice, Immobilier Prestige 92",
      photo: "/images/testimonials/immobilier.webp",
    },
    stats: [
      {
        value: "90%",
        label:
          "des recherches immobilières commencent sur internet",
      },
      {
        value: "3x",
        label:
          "moins cher qu'un lead portail grâce au SEO local",
      },
      {
        value: "58%",
        label:
          "des vendeurs choisissent une agence après avoir visité son site web",
      },
    ],
    process: [
      {
        step: "01",
        title: "Analyse de votre marché local",
        desc: "Nous étudions votre zone de chalandise, vos concurrents, vos quartiers cibles et votre positionnement pour définir la stratégie digitale.",
      },
      {
        step: "02",
        title: "Design & catalogue de biens",
        desc: "Création d'un design professionnel avec catalogue de biens, fiches détaillées, recherche par critères et pages par quartier.",
      },
      {
        step: "03",
        title: "SEO local & estimation en ligne",
        desc: "Optimisation du référencement par quartier, mise en place du formulaire d'estimation et configuration de la fiche Google My Business.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à la gestion des annonces, suivi des leads et support technique pendant 30 jours.",
      },
    ],
  },
  {
    slug: "coach",
    name: "Coach & Consultant",
    emoji: "🎯",
    description:
      "Positionnez-vous comme expert dans votre domaine avec un site personnel qui convertit les visiteurs en clients.",
    painPoints: [
      "Difficulté à se différencier",
      "Pas de preuve de crédibilité",
      "Pas de tunnel de conversion",
      "Dépendant des réseaux sociaux",
    ],
    solutions: [
      "Personal branding fort",
      "Témoignages et études de cas",
      "Réservation de séance en ligne",
      "Blog d'expertise pour le SEO",
    ],
    features: [
      "Page de présentation personnelle",
      "Offres et tarifs clairs",
      "Réservation Calendly intégrée",
      "Témoignages clients",
      "Blog d'expertise",
      "Lead magnet (guide gratuit)",
    ],
    cta: "Créer mon site de coaching",
    faqItems: [
      {
        question:
          "Combien coûte un site internet pour un coach ou consultant ?",
        answer:
          "Un site vitrine pour coach ou consultant démarre à 500€. Il comprend votre page de présentation, vos offres, l'intégration Calendly, les témoignages, le blog et un an d'hébergement. C'est l'investissement le plus rentable pour développer votre activité au-delà du bouche-à-oreille.",
      },
      {
        question:
          "Comment le site m'aidera-t-il à me démarquer de la concurrence ?",
        answer:
          "Votre site sera conçu comme un outil de personal branding. Nous travaillons votre positionnement unique, votre histoire, vos résultats clients et votre expertise pour créer une image forte. Les témoignages et études de cas renforcent votre crédibilité face aux prospects.",
      },
      {
        question:
          "Puis-je intégrer mon système de réservation en ligne ?",
        answer:
          "Oui, nous intégrons Calendly, Cal.com ou tout autre outil de prise de rendez-vous. Vos prospects peuvent réserver une séance découverte directement depuis votre site, 24h/24, sans échange de mails. Le taux de conversion est nettement supérieur.",
      },
      {
        question:
          "Le site inclut-il un lead magnet pour capturer des emails ?",
        answer:
          "Oui, nous mettons en place une page de capture avec un guide gratuit, une checklist ou un mini-cours pour collecter les emails de vos visiteurs. Cela vous permet de construire une liste et de convertir progressivement vos prospects en clients.",
      },
    ],
    caseStudy: {
      client: "Clarity Coaching",
      sector: "Coach en leadership — Paris",
      challenge:
        "Émilie dépendait entièrement d'Instagram et du bouche-à-oreille pour trouver des clients. Pas de site web, pas de crédibilité perçue par les entreprises qu'elle visait. Son tunnel de conversion était inexistant.",
      solution:
        "Création d'un site personnel avec personal branding fort, page d'offres détaillée, intégration Calendly, témoignages vidéo, blog d'expertise et lead magnet (guide gratuit sur le leadership).",
      results: [
        "+200% de demandes de séance découverte en 3 mois",
        "500 téléchargements du guide gratuit",
        "3 contrats entreprise signés grâce au site",
        "Page 1 Google sur 'coach leadership Paris'",
      ],
      testimonial:
        "Mon site est devenu mon meilleur commercial. Les prospects arrivent déjà convaincus après avoir lu mes articles et témoignages. ConvertiLab a transformé mon activité.",
      author: "Émilie Garnier",
      role: "Fondatrice, Clarity Coaching",
      photo: "/images/testimonials/coach.webp",
    },
    stats: [
      {
        value: "74%",
        label:
          "des prospects vérifient le site web d'un coach avant de le contacter",
      },
      {
        value: "6x",
        label:
          "plus de conversions avec un tunnel de vente structuré qu'avec les réseaux sociaux seuls",
      },
      {
        value: "53%",
        label:
          "des coachs sans site perdent des opportunités face à des concurrents mieux positionnés",
      },
    ],
    process: [
      {
        step: "01",
        title: "Définition de votre positionnement",
        desc: "Nous travaillons ensemble votre offre, votre message unique, votre cible idéale et votre personal branding pour un site qui vous ressemble.",
      },
      {
        step: "02",
        title: "Design & tunnel de conversion",
        desc: "Création d'un design impactant avec page d'offres, lead magnet, témoignages et intégration de votre outil de réservation.",
      },
      {
        step: "03",
        title: "Blog & SEO d'expertise",
        desc: "Mise en place du blog, rédaction des premiers articles et optimisation du référencement pour vos mots-clés d'expertise.",
      },
      {
        step: "04",
        title: "Lancement & stratégie de contenu",
        desc: "Mise en ligne, formation à la gestion du blog et du lead magnet, plan de contenu SEO et support pendant 30 jours.",
      },
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    emoji: "🛒",
    description:
      "Lancez ou refondez votre boutique en ligne avec un site e-commerce performant, rapide et optimisé pour la conversion.",
    painPoints: [
      "Taux de conversion trop bas",
      "Site lent qui fait fuir",
      "Pas visible sur Google Shopping",
      "Panier abandonné élevé",
    ],
    solutions: [
      "Boutique rapide et moderne",
      "Tunnel d'achat optimisé",
      "SEO produits et catégories",
      "Campagnes Google Shopping",
    ],
    features: [
      "Catalogue produits",
      "Paiement sécurisé Stripe",
      "Gestion des stocks",
      "Pages catégories SEO",
      "Relance panier abandonné",
      "Analytics e-commerce",
    ],
    cta: "Créer ma boutique en ligne",
    faqItems: [
      {
        question:
          "Combien coûte la création d'une boutique en ligne ?",
        answer:
          "Nos boutiques e-commerce démarrent à 800€. Ce tarif inclut le catalogue produits, le paiement sécurisé Stripe, la gestion des stocks, les pages catégories SEO, la relance panier abandonné et un an d'hébergement. Le prix final dépend du nombre de produits et des fonctionnalités souhaitées.",
      },
      {
        question:
          "Quels moyens de paiement seront disponibles ?",
        answer:
          "Nous intégrons Stripe, qui accepte les cartes bancaires (Visa, Mastercard, American Express), Apple Pay, Google Pay et les virements SEPA. Vos clients pourront payer en toute sécurité avec leur moyen de paiement préféré.",
      },
      {
        question:
          "Puis-je gérer mes produits et commandes facilement ?",
        answer:
          "Oui, l'interface d'administration vous permet de gérer vos produits (ajout, modification, suppression), de suivre vos commandes et vos stocks en temps réel. Tout est conçu pour être intuitif, même sans compétence technique.",
      },
      {
        question:
          "Le site sera-t-il optimisé pour réduire les abandons de panier ?",
        answer:
          "Oui, nous mettons en place un tunnel d'achat optimisé (minimum d'étapes, paiement rapide) et un système de relance automatique par email pour les paniers abandonnés. Ces optimisations peuvent augmenter votre taux de conversion de 20 à 35%.",
      },
    ],
    caseStudy: {
      client: "Maison Aromate",
      sector: "E-commerce épices et thés — France entière",
      challenge:
        "Claire vendait ses épices sur les marchés et via un site Wix lent et peu professionnel. Le taux de conversion était de 0,8%, le panier moyen stagnait et le taux d'abandon dépassait 75%.",
      solution:
        "Création d'une boutique Next.js ultra-rapide avec catalogue structuré, fiches produits optimisées, tunnel d'achat simplifié (3 étapes), relance panier abandonné et SEO catégories ciblé.",
      results: [
        "Taux de conversion passé de 0,8% à 2,4%",
        "+60% de chiffre d'affaires en ligne en 4 mois",
        "Panier moyen en hausse de 35%",
        "Taux d'abandon réduit à 52%",
      ],
      testimonial:
        "Mon ancien site était un frein. Depuis la refonte avec ConvertiLab, les commandes explosent et les clients me disent que le site est un plaisir à utiliser. Meilleur investissement de mon activité.",
      author: "Claire Fontaine",
      role: "Fondatrice, Maison Aromate",
      photo: "/images/testimonials/ecommerce.webp",
    },
    stats: [
      {
        value: "70%",
        label:
          "des paniers sont abandonnés à cause d'un tunnel d'achat trop long",
      },
      {
        value: "2,5x",
        label:
          "plus de ventes avec un site rapide (moins de 2 secondes de chargement)",
      },
      {
        value: "35%",
        label:
          "des revenus e-commerce proviennent des relances panier abandonné",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit de votre catalogue",
        desc: "Nous analysons vos produits, votre positionnement prix, votre cible et vos concurrents pour concevoir la boutique idéale.",
      },
      {
        step: "02",
        title: "Design & fiches produits",
        desc: "Création d'un design conversion-first avec des fiches produits optimisées, un catalogue structuré et des visuels impactants.",
      },
      {
        step: "03",
        title: "Paiement & tunnel d'achat",
        desc: "Intégration Stripe, optimisation du tunnel d'achat en 3 étapes, mise en place de la relance panier abandonné et du SEO produits.",
      },
      {
        step: "04",
        title: "Lancement & optimisation",
        desc: "Mise en ligne, formation à la gestion des produits et commandes, suivi analytics et optimisation continue pendant 30 jours.",
      },
    ],
  },
];

export const getSectorBySlug = (slug: string) =>
  sectors.find((s) => s.slug === slug);
