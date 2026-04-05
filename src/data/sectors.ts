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
  {
    slug: "dentiste",
    name: "Dentiste / Cabinet dentaire",
    emoji: "🦷",
    description:
      "Rassurez vos patients et remplissez votre carnet de rendez-vous grâce à un site web professionnel avec prise de RDV en ligne et présentation de vos soins.",
    painPoints: [
      "Patients anxieux qui ne trouvent pas d'informations rassurantes",
      "Carnet de rendez-vous mal rempli",
      "Aucune visibilité face aux cabinets concurrents",
      "Appels téléphoniques chronophages pour la prise de RDV",
    ],
    solutions: [
      "Site vitrine rassurant avec présentation des soins",
      "Prise de rendez-vous en ligne 24h/24",
      "Pages dédiées par type de soin (implants, orthodontie, esthétique)",
      "SEO local pour apparaître en tête des recherches",
    ],
    features: [
      "Présentation de l'équipe et du cabinet",
      "Prise de RDV en ligne (Doctolib/Calendly)",
      "Pages par spécialité dentaire",
      "Galerie avant/après sourires",
      "FAQ soins et tarifs",
      "SEO local dentiste",
    ],
    cta: "Créer le site de mon cabinet dentaire",
    faqItems: [
      {
        question: "Combien coûte un site web pour un cabinet dentaire ?",
        answer:
          "Un site vitrine pour cabinet dentaire démarre à 500€. Il comprend la présentation du cabinet et de l'équipe, les pages par type de soin, la prise de rendez-vous en ligne, la FAQ patients et un an d'hébergement. Un module de galerie avant/après peut être ajouté en option.",
      },
      {
        question: "Le site peut-il intégrer Doctolib ?",
        answer:
          "Oui, nous intégrons Doctolib, Calendly ou tout autre système de prise de rendez-vous. Le bouton de réservation est placé de manière stratégique sur chaque page pour maximiser les prises de RDV directement depuis votre site.",
      },
      {
        question: "Comment rassurer les patients anxieux via le site ?",
        answer:
          "Nous créons des pages détaillées sur chaque soin avec des explications simples, des photos du cabinet, la présentation de l'équipe souriante et des témoignages patients. Le design est pensé pour être apaisant et professionnel.",
      },
      {
        question: "Le site sera-t-il visible sur Google quand on cherche un dentiste ?",
        answer:
          "Oui, nous optimisons votre site pour le SEO local avec des pages ciblées par soin et par zone géographique. Votre fiche Google My Business sera également optimisée pour apparaître dans le pack local Google Maps.",
      },
    ],
    caseStudy: {
      client: "Cabinet Dentaire du Parc",
      sector: "Cabinet dentaire — Lyon 6e",
      challenge:
        "Le Dr Moreau recevait peu de nouveaux patients et dépendait du bouche-à-oreille. Son cabinet n'avait aucune présence en ligne et les patients potentiels choisissaient des confrères mieux référencés. La secrétaire passait 2h par jour au téléphone pour les RDV.",
      solution:
        "Création d'un site vitrine rassurant avec présentation de l'équipe, pages par soin (implants, blanchiment, orthodontie), intégration Doctolib, galerie avant/après et SEO local optimisé sur 'dentiste Lyon 6'.",
      results: [
        "+55% de nouveaux patients en 4 mois",
        "70% des RDV pris en ligne vs téléphone",
        "1ère page Google sur 'dentiste Lyon 6'",
        "Temps secrétariat réduit de 2h/jour",
      ],
      testimonial:
        "Depuis que notre site est en ligne, ma secrétaire n'est plus submergée d'appels. Les patients arrivent déjà informés sur les soins. ConvertiLab a compris les besoins d'un cabinet dentaire.",
      author: "Dr Julien Moreau",
      role: "Chirurgien-dentiste, Cabinet Dentaire du Parc",
      photo: "/images/testimonials/dentiste.webp",
    },
    stats: [
      {
        value: "78%",
        label: "des patients cherchent un dentiste sur Google avant de prendre RDV",
      },
      {
        value: "3x",
        label: "plus de nouveaux patients avec un site et une fiche Google optimisés",
      },
      {
        value: "65%",
        label: "des patients préfèrent prendre RDV en ligne plutôt que par téléphone",
      },
    ],
    process: [
      {
        step: "01",
        title: "Découverte de votre cabinet",
        desc: "Nous échangeons sur vos spécialités, votre équipe, votre patientèle cible et votre zone géographique pour concevoir un site adapté.",
      },
      {
        step: "02",
        title: "Design rassurant & pages soins",
        desc: "Création d'un design professionnel et apaisant avec présentation de l'équipe, pages détaillées par soin et galerie photos du cabinet.",
      },
      {
        step: "03",
        title: "RDV en ligne & SEO local",
        desc: "Intégration de Doctolib ou Calendly, optimisation du référencement local et configuration de votre fiche Google My Business.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à la gestion du contenu et suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "medecin",
    name: "Médecin / Cabinet médical",
    emoji: "🩺",
    description:
      "Informez vos patients, facilitez la prise de rendez-vous et renforcez la visibilité de votre cabinet médical avec un site web professionnel.",
    painPoints: [
      "Patients mal informés avant la consultation",
      "Standard téléphonique saturé",
      "Pas de visibilité en ligne face aux confrères",
      "Difficulté à communiquer sur les nouveaux services",
    ],
    solutions: [
      "Site informatif avec présentation des consultations",
      "Prise de rendez-vous en ligne intégrée",
      "Pages par spécialité et pathologie",
      "SEO local pour capter de nouveaux patients",
    ],
    features: [
      "Présentation du médecin et du cabinet",
      "Prise de RDV en ligne",
      "Pages par consultation/spécialité",
      "Informations pratiques (horaires, accès)",
      "FAQ patients",
      "SEO local médecin",
    ],
    cta: "Créer le site de mon cabinet médical",
    faqItems: [
      {
        question: "Combien coûte un site web pour un cabinet médical ?",
        answer:
          "Un site vitrine pour cabinet médical démarre à 500€. Il inclut la présentation du praticien, les pages par consultation, la prise de RDV en ligne, les informations pratiques et un an d'hébergement.",
      },
      {
        question: "Le site respectera-t-il les obligations déontologiques du médecin ?",
        answer:
          "Oui, nous connaissons les règles du Conseil de l'Ordre. Le site respectera les obligations en matière de communication médicale, de mentions légales et de protection des données patients (RGPD).",
      },
      {
        question: "Puis-je intégrer Doctolib sur mon site ?",
        answer:
          "Absolument. Nous intégrons Doctolib, Maiia ou tout autre outil de prise de rendez-vous. Le widget est intégré directement sur votre site pour que les patients puissent réserver sans quitter la page.",
      },
      {
        question: "Le site m'aidera-t-il à réduire les appels téléphoniques ?",
        answer:
          "Oui, en mettant en ligne les informations les plus demandées (horaires, documents à apporter, préparation avant consultation) et la prise de RDV en ligne, vous réduisez significativement les appels au cabinet.",
      },
    ],
    caseStudy: {
      client: "Cabinet Médical Saint-Germain",
      sector: "Médecin généraliste — Paris 7e",
      challenge:
        "Le Dr Lambert recevait plus de 40 appels par jour pour des questions simples (horaires, documents). Aucun site web, et les nouveaux arrivants dans le quartier ne le trouvaient pas. Le standard était saturé.",
      solution:
        "Création d'un site informatif avec FAQ patients complète, intégration Doctolib, page d'informations pratiques détaillée et SEO local sur 'médecin généraliste Paris 7'.",
      results: [
        "-40% d'appels téléphoniques au cabinet",
        "+30 nouveaux patients par mois via le site",
        "1ère page Google sur 'médecin Paris 7'",
        "95% des RDV pris via Doctolib intégré",
      ],
      testimonial:
        "Mon secrétariat n'est plus débordé. Les patients trouvent toutes les informations sur le site et prennent RDV en ligne. Simple et efficace.",
      author: "Dr Anne Lambert",
      role: "Médecin généraliste, Cabinet Saint-Germain",
      photo: "/images/testimonials/medecin.webp",
    },
    stats: [
      {
        value: "80%",
        label: "des patients recherchent un médecin en ligne avant de consulter",
      },
      {
        value: "40%",
        label: "de réduction des appels grâce aux informations en ligne",
      },
      {
        value: "71%",
        label: "des patients préfèrent prendre RDV en ligne plutôt que par téléphone",
      },
    ],
    process: [
      {
        step: "01",
        title: "Analyse de votre pratique",
        desc: "Nous échangeons sur vos consultations, votre patientèle et vos besoins pour créer un site conforme et utile.",
      },
      {
        step: "02",
        title: "Design professionnel & contenu médical",
        desc: "Création d'un design sobre avec pages par consultation, FAQ patients et informations pratiques complètes.",
      },
      {
        step: "03",
        title: "RDV en ligne & référencement",
        desc: "Intégration Doctolib, optimisation SEO local et configuration Google My Business pour votre cabinet.",
      },
      {
        step: "04",
        title: "Lancement & suivi",
        desc: "Mise en ligne, formation à la gestion du contenu et suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "coiffeur",
    name: "Salon de coiffure",
    emoji: "💇",
    description:
      "Attirez de nouveaux clients dans votre salon grâce à un site moderne avec galerie de réalisations, tarifs et réservation en ligne.",
    painPoints: [
      "Clients qui ne connaissent pas vos tarifs avant de venir",
      "Pas de galerie de vos réalisations en ligne",
      "Créneaux vides en semaine",
      "Concurrence forte des salons référencés en ligne",
    ],
    solutions: [
      "Site vitrine avec galerie coiffures et colorations",
      "Tarifs clairs et accessibles en ligne",
      "Réservation en ligne pour remplir les créneaux vides",
      "SEO local pour attirer les clients du quartier",
    ],
    features: [
      "Galerie de réalisations (coupes, colorations)",
      "Grille tarifaire en ligne",
      "Réservation en ligne",
      "Présentation de l'équipe",
      "Produits en vente au salon",
      "SEO local salon coiffure",
    ],
    cta: "Créer le site de mon salon de coiffure",
    faqItems: [
      {
        question: "Combien coûte un site web pour un salon de coiffure ?",
        answer:
          "Un site vitrine pour salon de coiffure démarre à 500€. Il comprend la galerie de réalisations, la grille tarifaire, la réservation en ligne, la présentation de l'équipe et un an d'hébergement.",
      },
      {
        question: "Puis-je ajouter des photos de mes réalisations facilement ?",
        answer:
          "Oui, vous pourrez ajouter des photos de coupes et colorations depuis votre téléphone en quelques clics. L'interface est conçue pour être utilisée entre deux clients.",
      },
      {
        question: "La réservation en ligne est-elle vraiment utile pour un salon ?",
        answer:
          "Absolument. 60% des clients préfèrent réserver en ligne plutôt que d'appeler. Cela remplit les créneaux creux de la semaine et réduit les no-shows grâce aux rappels automatiques.",
      },
      {
        question: "Le site montrera-t-il mes tarifs ?",
        answer:
          "Oui, nous créons une grille tarifaire claire et élégante, organisée par type de prestation. Les clients savent exactement à quoi s'attendre avant de venir, ce qui réduit les mauvaises surprises.",
      },
    ],
    caseStudy: {
      client: "L'Atelier de Julie",
      sector: "Salon de coiffure — Bordeaux centre",
      challenge:
        "Julie avait un salon bien situé mais peu visible en ligne. Les créneaux du mardi et mercredi restaient vides. Les clientes ne voyaient ses réalisations que sur Instagram, sans possibilité de réserver.",
      solution:
        "Création d'un site vitrine avec galerie avant/après, grille tarifaire, réservation en ligne et SEO local sur 'salon coiffure Bordeaux centre'. Intégration Instagram automatique.",
      results: [
        "+40% de réservations en semaine",
        "85% des RDV pris en ligne",
        "1ère page Google sur 'coiffeur Bordeaux centre'",
        "+25% de chiffre d'affaires en 3 mois",
      ],
      testimonial:
        "Mes mardis et mercredis sont enfin remplis. Les clientes adorent pouvoir réserver en ligne et voir mes réalisations avant de venir. Merci ConvertiLab !",
      author: "Julie Marin",
      role: "Gérante, L'Atelier de Julie",
      photo: "/images/testimonials/coiffeur.webp",
    },
    stats: [
      {
        value: "60%",
        label: "des clients préfèrent réserver en ligne pour un salon de coiffure",
      },
      {
        value: "2x",
        label: "plus de nouveaux clients avec un site et une galerie de réalisations",
      },
      {
        value: "73%",
        label: "des consommateurs regardent les photos avant de choisir un coiffeur",
      },
    ],
    process: [
      {
        step: "01",
        title: "Découverte de votre salon",
        desc: "Nous échangeons sur votre style, vos prestations, votre clientèle et votre positionnement pour un site qui reflète votre identité.",
      },
      {
        step: "02",
        title: "Design tendance & galerie",
        desc: "Création d'un design élégant avec galerie de réalisations, grille tarifaire et présentation de l'équipe.",
      },
      {
        step: "03",
        title: "Réservation en ligne & SEO",
        desc: "Intégration du système de réservation, optimisation SEO local et configuration de votre fiche Google My Business.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à l'ajout de photos et au suivi des réservations, support pendant 30 jours.",
      },
    ],
  },
  {
    slug: "boulangerie",
    name: "Boulangerie / Pâtisserie",
    emoji: "🥐",
    description:
      "Mettez en valeur vos créations, informez vos clients sur vos horaires et spécialités, et développez la commande en ligne pour votre boulangerie.",
    painPoints: [
      "Clients qui ne connaissent pas vos spécialités",
      "Pas de commande en ligne pour les gâteaux sur mesure",
      "Horaires et fermetures mal communiqués",
      "Pas visible face aux chaînes de boulangerie",
    ],
    solutions: [
      "Site vitrine gourmand avec galerie de créations",
      "Formulaire de commande en ligne (gâteaux, traiteur)",
      "Horaires et actualités toujours à jour",
      "SEO local pour le quartier",
    ],
    features: [
      "Galerie photos des créations",
      "Carte des produits et spécialités",
      "Formulaire de commande en ligne",
      "Horaires et jours de fermeture",
      "Actualités et produits saisonniers",
      "SEO local boulangerie",
    ],
    cta: "Créer le site de ma boulangerie",
    faqItems: [
      {
        question: "Combien coûte un site pour une boulangerie ?",
        answer:
          "Un site vitrine pour boulangerie démarre à 500€. Il comprend la galerie photos, la carte des produits, le formulaire de commande, les horaires et un an d'hébergement.",
      },
      {
        question: "Les clients pourront-ils commander des gâteaux en ligne ?",
        answer:
          "Oui, nous intégrons un formulaire de commande permettant aux clients de commander gâteaux d'anniversaire, pièces montées ou plateaux traiteur avec choix de date et de retrait.",
      },
      {
        question: "Puis-je mettre à jour mes produits saisonniers facilement ?",
        answer:
          "Absolument. L'interface d'administration vous permet de modifier vos produits, ajouter des nouveautés saisonnières et mettre à jour vos horaires en quelques clics, même depuis votre téléphone.",
      },
      {
        question: "Le site sera-t-il visible quand on cherche une boulangerie dans mon quartier ?",
        answer:
          "Oui, nous optimisons le SEO local et votre fiche Google My Business pour que votre boulangerie apparaisse en tête des recherches de proximité.",
      },
    ],
    caseStudy: {
      client: "Maison Lefevre",
      sector: "Boulangerie artisanale — Nantes",
      challenge:
        "La boulangerie Lefevre était connue du quartier mais invisible en ligne. Les commandes de gâteaux se faisaient uniquement par téléphone, avec des erreurs fréquentes. Aucune vitrine web pour les créations pâtissières.",
      solution:
        "Création d'un site gourmand avec galerie de pâtisseries, formulaire de commande en ligne structuré, horaires dynamiques et SEO local sur 'boulangerie artisanale Nantes'.",
      results: [
        "+35% de commandes de gâteaux sur mesure",
        "Zéro erreur de commande grâce au formulaire structuré",
        "1ère page Google sur 'boulangerie Nantes centre'",
        "+20% de fréquentation le week-end",
      ],
      testimonial:
        "Les clients commandent maintenant leurs gâteaux en ligne, c'est plus simple pour eux et pour nous. Et notre galerie de pâtisseries attire de nouveaux clients chaque semaine.",
      author: "Pierre Lefevre",
      role: "Boulanger-pâtissier, Maison Lefevre",
      photo: "/images/testimonials/boulangerie.webp",
    },
    stats: [
      {
        value: "68%",
        label: "des consommateurs cherchent une boulangerie sur Google avant de s'y rendre",
      },
      {
        value: "2x",
        label: "plus de commandes spéciales avec un formulaire en ligne",
      },
      {
        value: "45%",
        label: "des boulangeries artisanales n'ont pas de site web",
      },
    ],
    process: [
      {
        step: "01",
        title: "Découverte de votre boulangerie",
        desc: "Nous échangeons sur vos spécialités, vos créations phares et votre clientèle pour concevoir un site gourmand et authentique.",
      },
      {
        step: "02",
        title: "Design gourmand & galerie",
        desc: "Création d'un design appétissant avec galerie de créations, carte des produits et mise en valeur de votre savoir-faire.",
      },
      {
        step: "03",
        title: "Commande en ligne & SEO",
        desc: "Intégration du formulaire de commande, optimisation SEO local et configuration Google My Business.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à la gestion du contenu et des commandes, support pendant 30 jours.",
      },
    ],
  },
  {
    slug: "photographe",
    name: "Photographe",
    emoji: "📸",
    description:
      "Montrez votre talent avec un portfolio en ligne élégant qui convertit les visiteurs en clients pour vos shootings et reportages.",
    painPoints: [
      "Portfolio uniquement sur Instagram, pas professionnel",
      "Pas de système de réservation de séance",
      "Difficile de montrer ses tarifs sans dévaloriser",
      "Concurrence forte entre photographes",
    ],
    solutions: [
      "Portfolio professionnel avec galeries thématiques",
      "Page tarifs et prestations structurée",
      "Formulaire de réservation de séance",
      "SEO local et par spécialité photo",
    ],
    features: [
      "Portfolio galeries thématiques",
      "Page prestations et tarifs",
      "Formulaire de réservation",
      "Blog coulisses et conseils",
      "Galerie client privée",
      "SEO photographe local",
    ],
    cta: "Créer mon site de photographe",
    faqItems: [
      {
        question: "Combien coûte un site portfolio pour photographe ?",
        answer:
          "Un site portfolio pour photographe démarre à 500€. Il comprend les galeries thématiques, la page tarifs, le formulaire de réservation, le blog et un an d'hébergement. Les galeries clients privées sont disponibles en option.",
      },
      {
        question: "Les photos seront-elles affichées en haute qualité ?",
        answer:
          "Oui, nous optimisons l'affichage pour que vos photos soient magnifiques sur tous les écrans tout en gardant un temps de chargement rapide grâce à l'optimisation Next.js des images.",
      },
      {
        question: "Puis-je créer des galeries privées pour mes clients ?",
        answer:
          "Oui, nous pouvons intégrer un espace client avec galeries protégées par mot de passe où vos clients consultent et téléchargent leurs photos après un shooting.",
      },
      {
        question: "Instagram suffit-il ou ai-je vraiment besoin d'un site ?",
        answer:
          "Instagram est un excellent outil de visibilité mais vous ne le contrôlez pas. Un site professionnel vous appartient, il est trouvable sur Google, et il vous permet de présenter vos tarifs, vos prestations et de convertir les visiteurs en clients.",
      },
    ],
    caseStudy: {
      client: "Léa Photographie",
      sector: "Photographe mariage et portrait — Marseille",
      challenge:
        "Léa utilisait uniquement Instagram pour montrer son travail. Elle recevait beaucoup de DM mais peu de réservations concrètes. Les clients hésitaient car ils ne trouvaient pas ses tarifs ni ses disponibilités.",
      solution:
        "Création d'un portfolio professionnel avec galeries par thème (mariage, portrait, événement), page tarifs transparente, formulaire de réservation et blog SEO sur 'photographe mariage Marseille'.",
      results: [
        "+80% de demandes de devis qualifiées",
        "Taux de conversion visiteur → client passé de 2% à 8%",
        "1ère page Google sur 'photographe mariage Marseille'",
        "+50% de chiffre d'affaires en 6 mois",
      ],
      testimonial:
        "Mon site a changé la donne. Les clients arrivent en sachant exactement ce que je propose et à quel tarif. Fini les DM Instagram sans suite. ConvertiLab a créé le portfolio de mes rêves.",
      author: "Léa Dubois",
      role: "Photographe, Léa Photographie",
      photo: "/images/testimonials/photographe.webp",
    },
    stats: [
      {
        value: "85%",
        label: "des clients vérifient le portfolio en ligne avant de contacter un photographe",
      },
      {
        value: "4x",
        label: "plus de réservations avec un site et des tarifs transparents",
      },
      {
        value: "62%",
        label: "des photographes sans site perdent des clients face à la concurrence",
      },
    ],
    process: [
      {
        step: "01",
        title: "Sélection de vos meilleures images",
        desc: "Nous sélectionnons ensemble vos meilleures photos et définissons les galeries thématiques pour un portfolio impactant.",
      },
      {
        step: "02",
        title: "Design portfolio & prestations",
        desc: "Création d'un design élégant mettant en valeur vos images, avec page tarifs, prestations et formulaire de réservation.",
      },
      {
        step: "03",
        title: "SEO & blog photo",
        desc: "Optimisation du référencement par spécialité et localité, mise en place du blog pour attirer du trafic qualifié.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à l'ajout de galeries et au suivi des demandes, support pendant 30 jours.",
      },
    ],
  },
  {
    slug: "startup",
    name: "Startup / SaaS",
    emoji: "🚀",
    description:
      "Lancez votre produit avec une landing page qui convertit, présentez votre solution et générez des inscriptions ou des démos.",
    painPoints: [
      "Difficulté à expliquer clairement le produit",
      "Taux de conversion landing page trop bas",
      "Pas de crédibilité face aux concurrents établis",
      "Coût d'acquisition utilisateur élevé",
    ],
    solutions: [
      "Landing page conversion-optimized",
      "Section features et bénéfices clairs",
      "Social proof (logos clients, témoignages, chiffres)",
      "Tunnel d'inscription ou de demande de démo optimisé",
    ],
    features: [
      "Hero section avec proposition de valeur",
      "Section fonctionnalités animée",
      "Témoignages et logos clients",
      "Page pricing claire",
      "CTA inscription / démo",
      "Blog et changelog produit",
    ],
    cta: "Créer la landing page de ma startup",
    faqItems: [
      {
        question: "Combien coûte un site web pour une startup SaaS ?",
        answer:
          "Une landing page SaaS démarre à 500€ pour une page unique optimisée conversion. Un site multi-pages avec blog, pricing et changelog démarre à 800€. L'objectif est toujours de maximiser le ratio visiteurs → inscriptions.",
      },
      {
        question: "Le site sera-t-il optimisé pour la conversion ?",
        answer:
          "Absolument. Chaque élément est pensé pour convertir : proposition de valeur claire au-dessus de la ligne de flottaison, social proof, bénéfices avant features, CTA multiples et tunnel d'inscription simplifié.",
      },
      {
        question: "Pouvez-vous intégrer un système de paiement pour les abonnements ?",
        answer:
          "Oui, nous intégrons Stripe pour les abonnements SaaS avec gestion des plans, période d'essai et facturation récurrente. Le tunnel de conversion est optimisé pour minimiser les frictions.",
      },
      {
        question: "Le site peut-il évoluer avec ma startup ?",
        answer:
          "Oui, le site est construit avec Next.js, une stack moderne et scalable. Vous pourrez ajouter des pages, un blog, un changelog, une section intégrations au fur et à mesure de la croissance de votre produit.",
      },
    ],
    caseStudy: {
      client: "FlowTask",
      sector: "SaaS gestion de projet — Paris",
      challenge:
        "FlowTask avait un produit solide mais une landing page qui ne convertissait qu'à 1,2%. La proposition de valeur n'était pas claire, et les visiteurs ne comprenaient pas la différence avec les concurrents.",
      solution:
        "Refonte complète de la landing page avec proposition de valeur retravaillée, démo interactive du produit, social proof (logos clients, métriques), page pricing et tunnel de demande de démo optimisé.",
      results: [
        "Taux de conversion passé de 1,2% à 4,8%",
        "+300% d'inscriptions en essai gratuit",
        "Coût d'acquisition réduit de 45%",
        "Temps moyen sur la page +120%",
      ],
      testimonial:
        "Notre ancienne landing page faisait fuir les visiteurs. Depuis la refonte ConvertiLab, notre taux de conversion a quadruplé. C'est le meilleur investissement marketing qu'on ait fait.",
      author: "Thomas Rivière",
      role: "CEO, FlowTask",
      photo: "/images/testimonials/startup.webp",
    },
    stats: [
      {
        value: "68%",
        label: "des visiteurs quittent une landing page SaaS en moins de 15 secondes",
      },
      {
        value: "4x",
        label: "plus de conversions avec une proposition de valeur claire et du social proof",
      },
      {
        value: "52%",
        label: "des startups perdent des prospects à cause d'un site mal optimisé",
      },
    ],
    process: [
      {
        step: "01",
        title: "Analyse de votre produit et marché",
        desc: "Nous étudions votre produit, votre cible, vos concurrents et votre proposition de valeur unique pour définir le messaging.",
      },
      {
        step: "02",
        title: "Design conversion-first",
        desc: "Création d'une landing page optimisée conversion avec hero percutant, features animées, social proof et CTA stratégiques.",
      },
      {
        step: "03",
        title: "Tunnel d'inscription & analytics",
        desc: "Mise en place du tunnel d'inscription/démo, intégration analytics et A/B testing pour optimiser en continu.",
      },
      {
        step: "04",
        title: "Lancement & itération",
        desc: "Mise en ligne, suivi des métriques de conversion et optimisations itératives pendant 30 jours.",
      },
    ],
  },
  {
    slug: "architecte",
    name: "Architecte",
    emoji: "📐",
    description:
      "Présentez vos projets architecturaux avec un portfolio élégant qui reflète votre vision et attire des clients qualifiés.",
    painPoints: [
      "Portfolio non accessible en ligne",
      "Difficulté à attirer des projets d'envergure",
      "Image qui ne reflète pas la qualité du travail",
      "Concurrence sur les appels d'offres",
    ],
    solutions: [
      "Portfolio en ligne avec études de cas détaillées",
      "Design épuré qui reflète l'expertise architecturale",
      "Pages par type de projet (résidentiel, commercial, rénovation)",
      "SEO local et spécialisé architecture",
    ],
    features: [
      "Portfolio projets avec galeries immersives",
      "Études de cas détaillées",
      "Pages par spécialité architecturale",
      "Section presse et récompenses",
      "Formulaire de contact projet",
      "SEO architecte local",
    ],
    cta: "Créer le site de mon cabinet d'architecture",
    faqItems: [
      {
        question: "Combien coûte un site web pour un cabinet d'architecture ?",
        answer:
          "Un site portfolio pour architecte démarre à 500€. Il comprend les galeries de projets, les études de cas, les pages par spécialité, le formulaire de contact et un an d'hébergement.",
      },
      {
        question: "Comment mes projets seront-ils mis en valeur ?",
        answer:
          "Chaque projet aura sa propre page avec galerie grand format, plans, description du challenge et de la solution architecturale. Le design du site est épuré pour laisser vos réalisations parler d'elles-mêmes.",
      },
      {
        question: "Le site peut-il m'aider à remporter des appels d'offres ?",
        answer:
          "Un site professionnel renforce votre crédibilité auprès des maîtres d'ouvrage. Les études de cas détaillées et la section presse/récompenses démontrent votre expertise et votre expérience.",
      },
      {
        question: "Puis-je ajouter de nouveaux projets moi-même ?",
        answer:
          "Oui, l'interface d'administration vous permet d'ajouter de nouveaux projets avec photos, plans et descriptions en toute autonomie.",
      },
    ],
    caseStudy: {
      client: "Atelier Blanc Architecture",
      sector: "Cabinet d'architecture — Toulouse",
      challenge:
        "L'Atelier Blanc avait un portfolio PDF envoyé par email. Aucune présence web, difficile d'attirer des projets au-delà du réseau personnel. Les prospects ne trouvaient aucune référence en ligne.",
      solution:
        "Création d'un site portfolio minimaliste avec galeries immersives par projet, études de cas détaillées, section récompenses et SEO ciblé sur 'architecte Toulouse'.",
      results: [
        "+60% de demandes de consultation en 5 mois",
        "3 projets d'envergure obtenus via le site",
        "1ère page Google sur 'architecte Toulouse'",
        "Portfolio consulté en moyenne 4 min par visiteur",
      ],
      testimonial:
        "Notre site est devenu notre meilleure carte de visite. Les prospects arrivent en ayant déjà vu nos projets et comprennent notre approche. ConvertiLab a su traduire notre vision en digital.",
      author: "Marc Dupuis",
      role: "Architecte fondateur, Atelier Blanc",
      photo: "/images/testimonials/architecte.webp",
    },
    stats: [
      {
        value: "79%",
        label: "des maîtres d'ouvrage vérifient le site d'un architecte avant de le contacter",
      },
      {
        value: "3x",
        label: "plus de demandes de consultation avec un portfolio en ligne professionnel",
      },
      {
        value: "55%",
        label: "des architectes sans site perdent des projets face à des confrères mieux référencés",
      },
    ],
    process: [
      {
        step: "01",
        title: "Sélection de vos projets phares",
        desc: "Nous sélectionnons vos meilleurs projets et définissons la structure du portfolio pour refléter votre expertise.",
      },
      {
        step: "02",
        title: "Design minimaliste & galeries",
        desc: "Création d'un design épuré avec galeries immersives, études de cas et navigation fluide entre les projets.",
      },
      {
        step: "03",
        title: "SEO & formulaire projet",
        desc: "Optimisation du référencement par spécialité et localité, mise en place du formulaire de contact projet.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à l'ajout de nouveaux projets et suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "comptable",
    name: "Comptable / Expert-comptable",
    emoji: "📊",
    description:
      "Attirez de nouveaux clients avec un site professionnel qui présente clairement vos services comptables et inspire confiance.",
    painPoints: [
      "Image en ligne qui ne reflète pas l'expertise",
      "Difficulté à se démarquer des grands cabinets",
      "Prospects qui ne comprennent pas les offres",
      "Peu de demandes entrantes via le web",
    ],
    solutions: [
      "Site professionnel avec pages par service",
      "Tarification claire et transparente",
      "Blog d'actualités fiscales pour le SEO",
      "Formulaire de demande de devis structuré",
    ],
    features: [
      "Pages par service comptable",
      "Simulateur ou grille tarifaire",
      "Blog actualités fiscales",
      "Formulaire de devis structuré",
      "Témoignages clients entrepreneurs",
      "SEO local expert-comptable",
    ],
    cta: "Créer le site de mon cabinet comptable",
    faqItems: [
      {
        question: "Combien coûte un site web pour un expert-comptable ?",
        answer:
          "Un site vitrine pour cabinet comptable démarre à 500€. Il comprend les pages par service, la grille tarifaire, le blog fiscal, le formulaire de devis et un an d'hébergement.",
      },
      {
        question: "Le blog fiscal est-il vraiment utile pour attirer des clients ?",
        answer:
          "Oui, les entrepreneurs cherchent régulièrement des informations fiscales sur Google. Un blog avec des articles sur les échéances fiscales, les aides et les optimisations attire un trafic qualifié qui se convertit en demandes de devis.",
      },
      {
        question: "Le site respectera-t-il les obligations de l'Ordre des experts-comptables ?",
        answer:
          "Oui, nous connaissons les règles déontologiques de la profession. Le site sera conforme aux obligations en matière de communication, mentions légales et présentation des honoraires.",
      },
      {
        question: "Puis-je afficher mes tarifs en ligne ?",
        answer:
          "Oui, nous créons une grille tarifaire claire ou un formulaire de devis qui permet aux prospects de comprendre votre positionnement tarifaire avant de vous contacter.",
      },
    ],
    caseStudy: {
      client: "Cabinet Gestion Plus",
      sector: "Expert-comptable — Lille",
      challenge:
        "Le cabinet avait un site vieillissant qui ne générait aucune demande. Les prospects ne comprenaient pas les différentes offres. Le cabinet perdait des clients face à des concurrents en ligne plus modernes.",
      solution:
        "Refonte avec pages par service (création d'entreprise, comptabilité courante, paie, fiscalité), grille tarifaire transparente, blog fiscal et SEO local sur 'expert-comptable Lille'.",
      results: [
        "+45% de demandes de devis en 3 mois",
        "12 articles de blog référencés en page 1",
        "1ère page Google sur 'expert-comptable Lille'",
        "30 nouveaux clients par trimestre via le site",
      ],
      testimonial:
        "Notre ancien site ne nous apportait rien. Depuis la refonte, les entrepreneurs nous trouvent sur Google et comprennent immédiatement nos offres. L'investissement a été amorti en 2 mois.",
      author: "Philippe Durand",
      role: "Expert-comptable associé, Cabinet Gestion Plus",
      photo: "/images/testimonials/comptable.webp",
    },
    stats: [
      {
        value: "71%",
        label: "des entrepreneurs cherchent un comptable sur Google",
      },
      {
        value: "4x",
        label: "plus de demandes avec un site présentant clairement les offres et tarifs",
      },
      {
        value: "58%",
        label: "des prospects choisissent le comptable dont le site inspire le plus confiance",
      },
    ],
    process: [
      {
        step: "01",
        title: "Analyse de vos services",
        desc: "Nous étudions vos offres, votre clientèle cible et votre positionnement pour structurer un site clair et professionnel.",
      },
      {
        step: "02",
        title: "Design professionnel & pages services",
        desc: "Création d'un design sobre avec pages par service, grille tarifaire et témoignages clients.",
      },
      {
        step: "03",
        title: "Blog fiscal & SEO",
        desc: "Mise en place du blog d'actualités fiscales, optimisation SEO local et configuration Google My Business.",
      },
      {
        step: "04",
        title: "Lancement & accompagnement",
        desc: "Mise en ligne, formation à la gestion du blog et du contenu, suivi SEO pendant 30 jours.",
      },
    ],
  },
  {
    slug: "fleuriste",
    name: "Fleuriste",
    emoji: "💐",
    description:
      "Mettez en valeur vos créations florales et développez la commande en ligne pour les livraisons et événements.",
    painPoints: [
      "Ventes limitées aux passages devant la boutique",
      "Pas de commande en ligne pour livraisons",
      "Créations florales non visibles sur le web",
      "Concurrence des plateformes de livraison (Interflora)",
    ],
    solutions: [
      "Site vitrine avec catalogue de compositions",
      "Commande en ligne avec livraison",
      "Galerie des créations par événement",
      "SEO local pour capter les recherches de proximité",
    ],
    features: [
      "Catalogue de compositions florales",
      "Commande et livraison en ligne",
      "Galerie par événement (mariage, deuil, fête)",
      "Abonnement floral mensuel",
      "Horaires et localisation",
      "SEO local fleuriste",
    ],
    cta: "Créer le site de ma boutique de fleurs",
    faqItems: [
      {
        question: "Combien coûte un site web pour un fleuriste ?",
        answer:
          "Un site vitrine avec commande en ligne pour fleuriste démarre à 500€. Il comprend le catalogue, la commande en ligne, la galerie par événement et un an d'hébergement.",
      },
      {
        question: "Les clients pourront-ils commander et se faire livrer ?",
        answer:
          "Oui, nous intégrons un système de commande en ligne avec choix de la composition, du message personnalisé et de la date/adresse de livraison. Vous gérez les commandes depuis votre interface admin.",
      },
      {
        question: "Le site peut-il concurrencer les plateformes comme Interflora ?",
        answer:
          "Votre site vous permet de vendre en direct sans commission. Avec le SEO local, les clients de votre zone vous trouvent directement. Vous gardez 100% de la marge et construisez une relation directe avec vos clients.",
      },
      {
        question: "Puis-je proposer des abonnements floraux en ligne ?",
        answer:
          "Oui, nous pouvons intégrer une offre d'abonnement floral mensuel avec paiement récurrent. C'est un excellent moyen de fidéliser vos clients et de générer des revenus prévisibles.",
      },
    ],
    caseStudy: {
      client: "Les Fleurs de Marie",
      sector: "Fleuriste artisanale — Strasbourg",
      challenge:
        "Marie ne vendait qu'aux passants et n'avait aucune commande en ligne. Les mariages et événements allaient à des concurrents mieux référencés. Pas de vitrine web pour ses créations.",
      solution:
        "Création d'un site avec catalogue de compositions, commande en ligne avec livraison, galerie mariage/événement et SEO local sur 'fleuriste Strasbourg'.",
      results: [
        "+50% de chiffre d'affaires grâce aux commandes en ligne",
        "15 mariages décrochés via le site la première année",
        "1ère page Google sur 'fleuriste Strasbourg'",
        "20 abonnés au bouquet mensuel en 3 mois",
      ],
      testimonial:
        "Je ne pensais pas qu'un site pouvait autant transformer mon activité. Les commandes en ligne représentent maintenant la moitié de mon chiffre. Et les mariages arrivent grâce à ma galerie.",
      author: "Marie Schneider",
      role: "Fleuriste, Les Fleurs de Marie",
      photo: "/images/testimonials/fleuriste.webp",
    },
    stats: [
      {
        value: "64%",
        label: "des commandes de fleurs se font désormais en ligne",
      },
      {
        value: "3x",
        label: "plus de commandes avec un site et un catalogue en ligne",
      },
      {
        value: "72%",
        label: "des clients cherchent un fleuriste local sur Google pour les événements",
      },
    ],
    process: [
      {
        step: "01",
        title: "Découverte de vos créations",
        desc: "Nous échangeons sur vos compositions, vos spécialités événementielles et votre clientèle pour un site qui reflète votre art.",
      },
      {
        step: "02",
        title: "Design floral & catalogue",
        desc: "Création d'un design élégant avec catalogue de compositions, galeries par événement et mise en valeur de vos créations.",
      },
      {
        step: "03",
        title: "Commande en ligne & SEO",
        desc: "Intégration du système de commande et livraison, optimisation SEO local et configuration Google My Business.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à la gestion des commandes et du catalogue, support pendant 30 jours.",
      },
    ],
  },
  {
    slug: "salle-de-sport",
    name: "Salle de sport / Fitness",
    emoji: "💪",
    description:
      "Remplissez votre salle de sport avec un site qui présente vos cours, tarifs et coachs, et convertit les visiteurs en abonnés.",
    painPoints: [
      "Prospects qui ne connaissent pas les cours proposés",
      "Tarifs et planning non accessibles en ligne",
      "Difficulté à se différencier des grandes chaînes",
      "Pas de système d'inscription en ligne",
    ],
    solutions: [
      "Site vitrine avec planning des cours interactif",
      "Page tarifs et abonnements claire",
      "Présentation des coachs et de l'ambiance",
      "Formulaire de séance d'essai gratuite",
    ],
    features: [
      "Planning des cours interactif",
      "Page tarifs et abonnements",
      "Présentation des coachs",
      "Galerie photos/vidéos de la salle",
      "Formulaire séance d'essai",
      "SEO local salle de sport",
    ],
    cta: "Créer le site de ma salle de sport",
    faqItems: [
      {
        question: "Combien coûte un site pour une salle de sport ?",
        answer:
          "Un site vitrine pour salle de sport démarre à 500€. Il comprend le planning des cours, les tarifs, la présentation des coachs, la galerie et le formulaire de séance d'essai avec un an d'hébergement.",
      },
      {
        question: "Le planning des cours sera-t-il modifiable facilement ?",
        answer:
          "Oui, vous pourrez modifier le planning des cours, ajouter ou supprimer des créneaux en quelques clics depuis l'interface d'administration. Les changements sont visibles instantanément.",
      },
      {
        question: "Comment attirer des prospects face aux grandes chaînes ?",
        answer:
          "Votre site met en avant ce qui vous différencie : l'ambiance, les coachs, la proximité, la communauté. Le SEO local vous positionne devant les chaînes nationales pour les recherches de proximité.",
      },
      {
        question: "Le site peut-il gérer les inscriptions en ligne ?",
        answer:
          "Oui, nous intégrons un formulaire de demande de séance d'essai et pouvons connecter votre logiciel de gestion d'abonnements pour permettre l'inscription en ligne directement sur le site.",
      },
    ],
    caseStudy: {
      client: "CrossFit Bastille",
      sector: "Salle de CrossFit — Paris 11e",
      challenge:
        "La salle avait une communauté fidèle mais pas de nouveaux inscrits. Pas de site web, le planning était partagé sur Instagram. Les prospects ne trouvaient pas les tarifs et allaient chez des concurrents.",
      solution:
        "Création d'un site dynamique avec planning interactif, page tarifs, présentation des coachs, galerie d'ambiance, formulaire de séance d'essai et SEO local sur 'CrossFit Paris 11'.",
      results: [
        "+35 nouvelles inscriptions par mois",
        "80% des séances d'essai réservées en ligne",
        "1ère page Google sur 'CrossFit Paris 11'",
        "Taux de conversion séance d'essai → abonnement : 65%",
      ],
      testimonial:
        "Avant le site, on comptait sur le bouche-à-oreille. Maintenant, on a un flux constant de nouveaux membres qui nous trouvent sur Google. Le planning en ligne a tout changé.",
      author: "Maxime Leroux",
      role: "Fondateur, CrossFit Bastille",
      photo: "/images/testimonials/salle-de-sport.webp",
    },
    stats: [
      {
        value: "70%",
        label: "des prospects comparent les salles de sport en ligne avant de s'inscrire",
      },
      {
        value: "3x",
        label: "plus d'inscriptions avec un site présentant planning et tarifs",
      },
      {
        value: "56%",
        label: "des prospects abandonnent si les tarifs ne sont pas visibles en ligne",
      },
    ],
    process: [
      {
        step: "01",
        title: "Analyse de votre salle et positionnement",
        desc: "Nous étudions vos cours, vos coachs, votre ambiance et votre différenciation pour créer un site qui attire et convertit.",
      },
      {
        step: "02",
        title: "Design dynamique & planning",
        desc: "Création d'un design énergique avec planning interactif, page tarifs, galerie d'ambiance et présentation des coachs.",
      },
      {
        step: "03",
        title: "Séance d'essai & SEO",
        desc: "Mise en place du formulaire de séance d'essai, optimisation SEO local et configuration Google My Business.",
      },
      {
        step: "04",
        title: "Lancement & suivi",
        desc: "Mise en ligne, formation à la gestion du planning, suivi des inscriptions et support pendant 30 jours.",
      },
    ],
  },
  {
    slug: "institut-beaute",
    name: "Institut de beauté / Spa",
    emoji: "🧖",
    description:
      "Attirez une clientèle fidèle avec un site élégant qui présente vos soins, tarifs et permet la réservation en ligne.",
    painPoints: [
      "Créneaux vides en semaine",
      "Concurrence des chaînes et plateformes de réservation",
      "Prestations et tarifs non visibles en ligne",
      "Image qui ne reflète pas le standing de l'institut",
    ],
    solutions: [
      "Site vitrine luxueux avec carte des soins",
      "Réservation en ligne 24h/24",
      "Galerie ambiance et soins",
      "SEO local et programme de fidélité",
    ],
    features: [
      "Carte des soins et tarifs",
      "Réservation en ligne",
      "Galerie ambiance et institut",
      "Vente de produits en ligne",
      "Chèques cadeaux en ligne",
      "SEO local institut beauté",
    ],
    cta: "Créer le site de mon institut de beauté",
    faqItems: [
      {
        question: "Combien coûte un site web pour un institut de beauté ?",
        answer:
          "Un site vitrine pour institut de beauté démarre à 500€. Il comprend la carte des soins, la réservation en ligne, la galerie, les chèques cadeaux et un an d'hébergement.",
      },
      {
        question: "Le site aura-t-il un aspect luxueux ?",
        answer:
          "Oui, le design sera élégant et raffiné, à l'image de votre institut. Typographies soignées, couleurs douces, animations fluides et galerie immersive pour créer une expérience en ligne qui reflète la qualité de vos soins.",
      },
      {
        question: "Les clientes pourront-elles acheter des chèques cadeaux en ligne ?",
        answer:
          "Oui, nous intégrons un module de chèques cadeaux en ligne avec paiement sécurisé. C'est un excellent générateur de chiffre d'affaires additionnel, surtout pendant les fêtes.",
      },
      {
        question: "La réservation en ligne réduit-elle les no-shows ?",
        answer:
          "Oui, le système de réservation envoie des rappels automatiques par SMS/email, ce qui réduit les no-shows de 30 à 50%. Les clientes peuvent aussi annuler ou reporter facilement.",
      },
    ],
    caseStudy: {
      client: "L'Écrin de Beauté",
      sector: "Institut de beauté et spa — Aix-en-Provence",
      challenge:
        "L'institut avait une bonne réputation mais les créneaux en semaine restaient vides. Pas de présence en ligne, les nouvelles clientes allaient chez des concurrents trouvés sur Google.",
      solution:
        "Création d'un site luxueux avec carte des soins détaillée, réservation en ligne, galerie d'ambiance immersive, chèques cadeaux et SEO local sur 'institut beauté Aix-en-Provence'.",
      results: [
        "+45% de réservations en semaine",
        "200 chèques cadeaux vendus en ligne la première année",
        "1ère page Google sur 'spa Aix-en-Provence'",
        "+30% de chiffre d'affaires en 6 mois",
      ],
      testimonial:
        "Le site est magnifique, à l'image de mon institut. Les clientes réservent en ligne et les chèques cadeaux se vendent tout seuls. ConvertiLab a dépassé mes attentes.",
      author: "Isabelle Fontaine",
      role: "Directrice, L'Écrin de Beauté",
      photo: "/images/testimonials/institut-beaute.webp",
    },
    stats: [
      {
        value: "67%",
        label: "des clientes réservent leurs soins beauté en ligne",
      },
      {
        value: "2,5x",
        label: "plus de réservations avec un site et un système de booking en ligne",
      },
      {
        value: "40%",
        label: "du CA des instituts peut provenir des chèques cadeaux et ventes en ligne",
      },
    ],
    process: [
      {
        step: "01",
        title: "Découverte de votre institut",
        desc: "Nous échangeons sur vos soins, votre ambiance, votre positionnement et votre clientèle pour un site à votre image.",
      },
      {
        step: "02",
        title: "Design luxueux & carte des soins",
        desc: "Création d'un design élégant avec carte des soins, galerie immersive et mise en valeur de l'ambiance de votre institut.",
      },
      {
        step: "03",
        title: "Réservation & chèques cadeaux",
        desc: "Intégration du système de réservation, des chèques cadeaux en ligne et optimisation SEO local.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à la gestion des réservations et du catalogue, support pendant 30 jours.",
      },
    ],
  },
  {
    slug: "agence-voyage",
    name: "Agence de voyage",
    emoji: "✈️",
    description:
      "Faites rêver vos clients et vendez vos voyages en ligne avec un site immersif qui présente vos destinations et formules.",
    painPoints: [
      "Concurrence des plateformes en ligne (Booking, Expedia)",
      "Catalogue de voyages non accessible en ligne",
      "Difficulté à transmettre l'émotion du voyage",
      "Demandes de devis non qualifiées",
    ],
    solutions: [
      "Site immersif avec fiches destinations détaillées",
      "Galerie photos et vidéos inspirantes",
      "Formulaire de demande de voyage sur mesure",
      "Blog voyage pour le SEO et l'inspiration",
    ],
    features: [
      "Fiches destinations immersives",
      "Catalogue de voyages par thème",
      "Formulaire voyage sur mesure",
      "Blog voyage et carnets de route",
      "Témoignages voyageurs",
      "SEO destinations et thématiques",
    ],
    cta: "Créer le site de mon agence de voyage",
    faqItems: [
      {
        question: "Combien coûte un site pour une agence de voyage ?",
        answer:
          "Un site vitrine pour agence de voyage démarre à 500€. Il comprend les fiches destinations, le catalogue par thème, le formulaire sur mesure, le blog voyage et un an d'hébergement.",
      },
      {
        question: "Comment le site peut-il rivaliser avec Booking ou Expedia ?",
        answer:
          "Votre site met en avant votre valeur ajoutée : le conseil personnalisé, le sur-mesure, l'expertise des destinations. Le blog voyage et le SEO vous positionnent sur des recherches d'inspiration où les plateformes sont moins présentes.",
      },
      {
        question: "Les fiches destinations seront-elles immersives ?",
        answer:
          "Oui, chaque destination aura sa page avec photos grand format, vidéos, itinéraire type, budget indicatif et témoignages voyageurs. L'objectif est de faire rêver et de donner envie de demander un devis.",
      },
      {
        question: "Puis-je modifier le catalogue de voyages moi-même ?",
        answer:
          "Oui, vous pourrez ajouter, modifier et archiver des voyages depuis l'interface d'administration. Chaque fiche peut être mise à jour en quelques minutes.",
      },
    ],
    caseStudy: {
      client: "Terres Lointaines",
      sector: "Agence de voyage sur mesure — Nice",
      challenge:
        "L'agence perdait des clients face aux plateformes en ligne. Son site vitrine basique ne transmettait pas l'émotion du voyage. Les demandes de devis étaient rares et non qualifiées.",
      solution:
        "Création d'un site immersif avec fiches destinations grand format, catalogue par thème (aventure, luxe, famille), formulaire sur mesure détaillé et blog voyage SEO.",
      results: [
        "+70% de demandes de voyage sur mesure",
        "Panier moyen en hausse de 25%",
        "1ère page Google sur 'voyage sur mesure Nice'",
        "Blog générant 40% du trafic total",
      ],
      testimonial:
        "Notre site fait maintenant rêver les clients avant même qu'ils nous appellent. Les demandes sont qualifiées et le panier moyen a augmenté. ConvertiLab a compris l'âme du voyage.",
      author: "Sophie Blanc",
      role: "Directrice, Terres Lointaines",
      photo: "/images/testimonials/agence-voyage.webp",
    },
    stats: [
      {
        value: "83%",
        label: "des voyageurs font leurs recherches en ligne avant de réserver",
      },
      {
        value: "3x",
        label: "plus de demandes sur mesure avec un site immersif vs un site basique",
      },
      {
        value: "45%",
        label: "des clients d'agences préfèrent le conseil personnalisé aux plateformes",
      },
    ],
    process: [
      {
        step: "01",
        title: "Analyse de vos destinations et offres",
        desc: "Nous étudions vos destinations phares, vos formules et votre clientèle pour concevoir un site qui fait rêver et convertit.",
      },
      {
        step: "02",
        title: "Design immersif & fiches destinations",
        desc: "Création d'un design grand format avec fiches destinations, galeries immersives et catalogue par thématique.",
      },
      {
        step: "03",
        title: "Formulaire sur mesure & blog SEO",
        desc: "Mise en place du formulaire de voyage sur mesure, création du blog voyage et optimisation SEO par destination.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à la gestion du catalogue et du blog, suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "auto-ecole",
    name: "Auto-école",
    emoji: "🚗",
    description:
      "Remplissez vos plannings de leçons avec un site qui présente vos formules, tarifs et taux de réussite pour attirer de nouveaux élèves.",
    painPoints: [
      "Concurrence forte entre auto-écoles locales",
      "Tarifs et formules non visibles en ligne",
      "Taux de réussite non mis en avant",
      "Inscription uniquement sur place",
    ],
    solutions: [
      "Site vitrine avec formules et tarifs transparents",
      "Mise en avant du taux de réussite",
      "Formulaire d'inscription / demande d'info en ligne",
      "SEO local auto-école par ville",
    ],
    features: [
      "Page formules et tarifs",
      "Taux de réussite mis en avant",
      "Formulaire d'inscription en ligne",
      "Avis et témoignages élèves",
      "Planning des disponibilités",
      "SEO local auto-école",
    ],
    cta: "Créer le site de mon auto-école",
    faqItems: [
      {
        question: "Combien coûte un site pour une auto-école ?",
        answer:
          "Un site vitrine pour auto-école démarre à 500€. Il comprend les formules et tarifs, le formulaire d'inscription, les témoignages élèves, le taux de réussite et un an d'hébergement.",
      },
      {
        question: "Le taux de réussite sera-t-il bien mis en avant ?",
        answer:
          "Oui, c'est un argument clé. Nous le mettons en avant dès la page d'accueil avec des statistiques visuelles et des témoignages d'élèves qui ont obtenu leur permis chez vous.",
      },
      {
        question: "Les élèves pourront-ils s'inscrire en ligne ?",
        answer:
          "Oui, nous intégrons un formulaire de pré-inscription ou de demande d'information qui vous permet de recontacter les prospects rapidement, avant qu'ils n'aillent chez un concurrent.",
      },
      {
        question: "Comment le site m'aidera-t-il face à la concurrence locale ?",
        answer:
          "Avec un site professionnel, des tarifs transparents et un bon SEO local, vous apparaissez devant vos concurrents quand un futur élève cherche une auto-école dans votre ville.",
      },
    ],
    caseStudy: {
      client: "Auto-École Horizon",
      sector: "Auto-école — Montpellier",
      challenge:
        "L'auto-école avait un bon taux de réussite (78%) mais personne ne le savait en ligne. Les prospects choisissaient des concurrents avec des sites modernes. Inscription uniquement sur place.",
      solution:
        "Création d'un site avec formules détaillées, tarifs transparents, taux de réussite en vedette, avis élèves, formulaire d'inscription en ligne et SEO local sur 'auto-école Montpellier'.",
      results: [
        "+50% d'inscriptions en 4 mois",
        "60% des inscriptions via le formulaire en ligne",
        "1ère page Google sur 'auto-école Montpellier'",
        "Taux de réussite affiché : argument décisif pour 70% des inscrits",
      ],
      testimonial:
        "Afficher notre taux de réussite sur le site a tout changé. Les élèves viennent en sachant que notre auto-école est la meilleure du quartier. Merci ConvertiLab.",
      author: "Karim Benali",
      role: "Gérant, Auto-École Horizon",
      photo: "/images/testimonials/auto-ecole.webp",
    },
    stats: [
      {
        value: "75%",
        label: "des futurs conducteurs comparent les auto-écoles en ligne avant de s'inscrire",
      },
      {
        value: "3x",
        label: "plus d'inscriptions quand le taux de réussite est affiché sur le site",
      },
      {
        value: "62%",
        label: "des élèves choisissent l'auto-école avec les tarifs les plus transparents en ligne",
      },
    ],
    process: [
      {
        step: "01",
        title: "Analyse de vos formules et résultats",
        desc: "Nous étudions vos formules, tarifs, taux de réussite et zone de chalandise pour créer un site convaincant.",
      },
      {
        step: "02",
        title: "Design attractif & formules claires",
        desc: "Création d'un design moderne avec formules détaillées, taux de réussite en vedette et témoignages d'élèves.",
      },
      {
        step: "03",
        title: "Inscription en ligne & SEO",
        desc: "Mise en place du formulaire d'inscription, optimisation SEO local et configuration Google My Business.",
      },
      {
        step: "04",
        title: "Lancement & suivi",
        desc: "Mise en ligne, formation à la gestion du contenu et suivi des inscriptions pendant 30 jours.",
      },
    ],
  },
  {
    slug: "traiteur",
    name: "Traiteur / Événementiel",
    emoji: "🍴",
    description:
      "Décrochez plus de contrats événementiels avec un site qui met en valeur vos prestations, menus et réalisations.",
    painPoints: [
      "Pas de vitrine en ligne des prestations passées",
      "Demandes de devis uniquement par bouche-à-oreille",
      "Menus et formules non visibles en ligne",
      "Difficulté à se positionner sur les mariages et événements corporate",
    ],
    solutions: [
      "Site vitrine avec galerie d'événements réalisés",
      "Menus et formules détaillés par type d'événement",
      "Formulaire de demande de devis événementiel",
      "SEO local et par type d'événement",
    ],
    features: [
      "Galerie d'événements réalisés",
      "Menus et formules par occasion",
      "Formulaire de devis événementiel",
      "Témoignages clients",
      "Capacité et zones d'intervention",
      "SEO traiteur local",
    ],
    cta: "Créer le site de mon activité traiteur",
    faqItems: [
      {
        question: "Combien coûte un site pour un traiteur ?",
        answer:
          "Un site vitrine pour traiteur démarre à 500€. Il comprend la galerie d'événements, les menus par occasion, le formulaire de devis, les témoignages et un an d'hébergement.",
      },
      {
        question: "Le site m'aidera-t-il à décrocher des mariages ?",
        answer:
          "Oui, les futurs mariés cherchent un traiteur sur Google et comparent les sites. Une galerie de mariages réalisés, des menus détaillés et des témoignages de mariés sont des arguments décisifs pour être choisi.",
      },
      {
        question: "Puis-je proposer différents menus selon le type d'événement ?",
        answer:
          "Oui, nous structurons vos offres par type d'événement (mariage, corporate, anniversaire, cocktail) avec menus, photos et tarifs indicatifs pour chaque catégorie.",
      },
      {
        question: "Le formulaire de devis sera-t-il adapté à l'événementiel ?",
        answer:
          "Oui, le formulaire demande le type d'événement, la date, le nombre de convives, le budget et les préférences alimentaires. Vous recevez des demandes qualifiées et pouvez répondre rapidement.",
      },
    ],
    caseStudy: {
      client: "Saveurs & Réceptions",
      sector: "Traiteur événementiel — Rennes",
      challenge:
        "Le traiteur travaillait principalement via le réseau personnel. Pas de présence en ligne, pas de photos des événements passés. Les mariages et événements corporate allaient à des concurrents mieux référencés.",
      solution:
        "Création d'un site avec galerie d'événements (mariages, corporate, cocktails), menus détaillés par formule, formulaire de devis qualifié et SEO local sur 'traiteur Rennes mariage'.",
      results: [
        "+40% de demandes de devis en 4 mois",
        "12 mariages décrochés via le site la première année",
        "1ère page Google sur 'traiteur mariage Rennes'",
        "Panier moyen des événements en hausse de 20%",
      ],
      testimonial:
        "Notre galerie en ligne fait tout le travail commercial. Les clients voient nos réalisations et nous contactent déjà convaincus. ConvertiLab a doublé notre carnet de commandes.",
      author: "François Martin",
      role: "Chef traiteur, Saveurs & Réceptions",
      photo: "/images/testimonials/traiteur.webp",
    },
    stats: [
      {
        value: "77%",
        label: "des couples cherchent leur traiteur de mariage sur Google",
      },
      {
        value: "3x",
        label: "plus de demandes de devis avec un site et une galerie d'événements",
      },
      {
        value: "60%",
        label: "des clients choisissent le traiteur dont le site les a le plus fait saliver",
      },
    ],
    process: [
      {
        step: "01",
        title: "Analyse de vos prestations",
        desc: "Nous échangeons sur vos formules, vos spécialités, vos événements phares et votre zone d'intervention.",
      },
      {
        step: "02",
        title: "Design gourmand & galerie événements",
        desc: "Création d'un design appétissant avec galerie d'événements, menus détaillés et mise en scène de vos plats.",
      },
      {
        step: "03",
        title: "Devis en ligne & SEO",
        desc: "Mise en place du formulaire de devis qualifié, optimisation SEO par type d'événement et zone géographique.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à la gestion du contenu et des demandes, support pendant 30 jours.",
      },
    ],
  },
  {
    slug: "electricien",
    name: "Électricien",
    emoji: "⚡",
    description:
      "Recevez des demandes d'intervention et de devis directement depuis votre site, optimisé pour votre zone d'intervention.",
    painPoints: [
      "Dépendant des plateformes de mise en relation",
      "Pas de vitrine professionnelle en ligne",
      "Clients qui ne trouvent pas un électricien de confiance",
      "Pas de système de demande de devis en ligne",
    ],
    solutions: [
      "Site vitrine professionnel avec services détaillés",
      "Formulaire de demande de devis / urgence",
      "SEO local multi-villes pour la zone d'intervention",
      "Page Google My Business optimisée avec avis",
    ],
    features: [
      "Pages par type d'intervention",
      "Formulaire devis et urgence",
      "Zones d'intervention détaillées",
      "Certifications et qualifications",
      "Galerie de réalisations",
      "SEO local électricien",
    ],
    cta: "Créer le site de mon activité d'électricien",
    faqItems: [
      {
        question: "Combien coûte un site pour un électricien ?",
        answer:
          "Un site vitrine pour électricien démarre à 500€. Il comprend les pages par service, le formulaire de devis, les zones d'intervention, les certifications et un an d'hébergement.",
      },
      {
        question: "Le site peut-il remplacer les plateformes comme MesDépanneurs ?",
        answer:
          "Votre site vous permet de recevoir des demandes directes sans payer de commission. Avec un bon SEO local, les clients vous trouvent directement sur Google. C'est un canal complémentaire bien plus rentable.",
      },
      {
        question: "Comment montrer que je suis un électricien de confiance ?",
        answer:
          "Nous mettons en avant vos certifications (Qualifelec, etc.), vos avis clients, vos réalisations et votre assurance décennale. Ces éléments rassurent les prospects et vous différencient des électriciens non qualifiés.",
      },
      {
        question: "Le site couvrira-t-il toute ma zone d'intervention ?",
        answer:
          "Oui, nous créons des pages optimisées pour chaque ville où vous intervenez. Chaque page cible les recherches 'électricien + ville' pour maximiser votre visibilité locale.",
      },
    ],
    caseStudy: {
      client: "Élec Pro Services",
      sector: "Électricien — Grenoble et agglomération",
      challenge:
        "Nicolas payait 300€/mois à une plateforme de mise en relation avec des leads non qualifiés. Pas de site web, pas de visibilité propre sur Google. Les clients n'avaient aucun moyen de vérifier son sérieux en ligne.",
      solution:
        "Création d'un site avec pages par service (installation, dépannage, rénovation), formulaire de devis/urgence, pages par ville d'intervention et mise en avant des certifications Qualifelec.",
      results: [
        "+20 demandes de devis par mois via le site",
        "Arrêt de l'abonnement plateforme (-300€/mois)",
        "1ère page Google sur 'électricien Grenoble'",
        "ROI du site atteint en 5 semaines",
      ],
      testimonial:
        "J'ai arrêté les plateformes grâce à mon site. Les clients me trouvent directement sur Google et voient mes certifications. C'est plus de travail, mieux qualifié, et sans commission.",
      author: "Nicolas Perrin",
      role: "Gérant, Élec Pro Services",
      photo: "/images/testimonials/electricien.webp",
    },
    stats: [
      {
        value: "85%",
        label: "des particuliers cherchent un électricien sur Google en cas de besoin",
      },
      {
        value: "5x",
        label: "plus rentable qu'une plateforme de mise en relation grâce au SEO local",
      },
      {
        value: "73%",
        label: "des clients vérifient les certifications et avis en ligne avant de choisir",
      },
    ],
    process: [
      {
        step: "01",
        title: "Analyse de vos services et zone",
        desc: "Nous étudions vos spécialités, votre zone d'intervention et vos certifications pour concevoir un site crédible et efficace.",
      },
      {
        step: "02",
        title: "Design professionnel & services",
        desc: "Création d'un design de confiance avec pages par service, certifications en avant et galerie de réalisations.",
      },
      {
        step: "03",
        title: "Devis en ligne & SEO multi-villes",
        desc: "Intégration du formulaire devis/urgence, optimisation SEO par ville d'intervention et configuration Google My Business.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à la gestion du contenu et des demandes, support pendant 30 jours.",
      },
    ],
  },
  {
    slug: "plombier",
    name: "Plombier",
    emoji: "🔧",
    description:
      "Recevez des appels et demandes de devis qualifiés grâce à un site professionnel optimisé pour les urgences et le SEO local.",
    painPoints: [
      "Concurrence déloyale des faux plombiers en ligne",
      "Pas de visibilité sur Google pour les urgences",
      "Dépendant des plateformes à commission",
      "Difficulté à inspirer confiance en ligne",
    ],
    solutions: [
      "Site professionnel avec numéro d'urgence visible",
      "Pages par type d'intervention (fuite, débouchage, chauffe-eau)",
      "SEO local optimisé pour les recherches urgentes",
      "Avis clients et certifications mis en avant",
    ],
    features: [
      "Numéro d'urgence en header",
      "Pages par intervention",
      "Formulaire devis rapide",
      "Avis clients et certifications",
      "Zones d'intervention",
      "SEO local plombier urgence",
    ],
    cta: "Créer le site de mon activité de plombier",
    faqItems: [
      {
        question: "Combien coûte un site pour un plombier ?",
        answer:
          "Un site vitrine pour plombier démarre à 500€. Il comprend le numéro d'urgence, les pages par service, le formulaire de devis, les zones d'intervention et un an d'hébergement.",
      },
      {
        question: "Le site sera-t-il visible pour les recherches d'urgence ?",
        answer:
          "Oui, nous ciblons spécifiquement les recherches urgentes comme 'plombier urgence + ville' ou 'fuite d'eau + ville'. Votre numéro de téléphone est visible sur chaque page en un clic.",
      },
      {
        question: "Comment me différencier des faux plombiers en ligne ?",
        answer:
          "Nous mettons en avant vos certifications, votre assurance, vos avis clients vérifiés et vos tarifs transparents. Cela rassure les clients et vous distingue des arnaques.",
      },
      {
        question: "Le site peut-il remplacer les plateformes à commission ?",
        answer:
          "Oui, avec un bon SEO local, votre site génère des appels directs sans commission. Vous gardez 100% de votre marge tout en ayant des clients plus qualifiés.",
      },
    ],
    caseStudy: {
      client: "Plomberie Express 31",
      sector: "Plombier dépannage — Toulouse",
      challenge:
        "Sébastien payait 400€/mois à une plateforme avec des leads partagés entre 3 plombiers. Pas de site propre, les clients tombaient souvent sur des arnaques avant de le trouver.",
      solution:
        "Création d'un site avec numéro d'urgence cliquable, pages par intervention (fuite, débouchage, chauffe-eau), tarifs indicatifs, certifications et SEO local sur 'plombier urgence Toulouse'.",
      results: [
        "+25 appels qualifiés par mois via le site",
        "Arrêt de la plateforme (-400€/mois économisés)",
        "1ère page Google sur 'plombier Toulouse urgence'",
        "Taux de conversion appel → intervention : 80%",
      ],
      testimonial:
        "Mon site me rapporte plus que la plateforme, sans commission. Les clients me font confiance dès le premier appel car ils ont vu mes avis et certifications en ligne.",
      author: "Sébastien Roux",
      role: "Gérant, Plomberie Express 31",
      photo: "/images/testimonials/plombier.webp",
    },
    stats: [
      {
        value: "90%",
        label: "des recherches de plombier se font sur Google, souvent en urgence",
      },
      {
        value: "5x",
        label: "plus rentable qu'une plateforme à commission avec un bon SEO local",
      },
      {
        value: "68%",
        label: "des clients appellent le premier plombier trouvé sur Google avec de bons avis",
      },
    ],
    process: [
      {
        step: "01",
        title: "Analyse de vos services et zone",
        desc: "Nous étudions vos interventions, votre zone de chalandise et vos tarifs pour un site qui génère des appels qualifiés.",
      },
      {
        step: "02",
        title: "Design urgence & confiance",
        desc: "Création d'un design avec numéro d'urgence visible, pages par intervention et mise en avant des certifications.",
      },
      {
        step: "03",
        title: "SEO urgence & local",
        desc: "Optimisation pour les recherches urgentes et locales, configuration Google My Business et collecte d'avis.",
      },
      {
        step: "04",
        title: "Lancement & suivi",
        desc: "Mise en ligne, formation à la gestion du contenu, suivi des appels et support pendant 30 jours.",
      },
    ],
  },
  {
    slug: "osteopathe",
    name: "Ostéopathe / Kiné",
    emoji: "🦴",
    description:
      "Remplissez votre planning de consultations avec un site professionnel qui rassure vos patients et facilite la prise de rendez-vous.",
    painPoints: [
      "Planning de consultations pas assez rempli",
      "Patients qui ne connaissent pas vos spécialités",
      "Pas de visibilité face aux confrères référencés",
      "Trop d'appels pour la prise de RDV",
    ],
    solutions: [
      "Site vitrine avec présentation des soins",
      "Prise de rendez-vous en ligne intégrée",
      "Pages par pathologie et spécialité",
      "SEO local ostéopathe/kiné",
    ],
    features: [
      "Présentation du praticien et du cabinet",
      "Prise de RDV en ligne",
      "Pages par pathologie traitée",
      "Blog conseils santé",
      "Témoignages patients",
      "SEO local praticien",
    ],
    cta: "Créer le site de mon cabinet",
    faqItems: [
      {
        question: "Combien coûte un site pour un ostéopathe ou kiné ?",
        answer:
          "Un site vitrine pour ostéopathe ou kiné démarre à 500€. Il comprend la présentation du praticien, les pages par pathologie, la prise de RDV en ligne, le blog et un an d'hébergement.",
      },
      {
        question: "Les pages par pathologie sont-elles utiles pour le SEO ?",
        answer:
          "Oui, c'est la stratégie la plus efficace. Un patient cherche rarement 'ostéopathe' mais plutôt 'mal de dos ostéopathe + ville'. Chaque page par pathologie cible ces recherches précises.",
      },
      {
        question: "Le site intègre-t-il Doctolib ?",
        answer:
          "Oui, nous intégrons Doctolib, Maiia, Calendly ou tout autre système de prise de rendez-vous. Le bouton est accessible sur chaque page pour faciliter la réservation.",
      },
      {
        question: "Un blog est-il nécessaire pour un praticien ?",
        answer:
          "Un blog avec des conseils santé (exercices, prévention, posture) attire des patients potentiels via Google et renforce votre expertise. C'est un excellent canal d'acquisition à long terme.",
      },
    ],
    caseStudy: {
      client: "Cabinet Ostéo Équilibre",
      sector: "Ostéopathe — Nantes",
      challenge:
        "Le Dr Petit avait des créneaux vides l'après-midi et pas de présence en ligne. Les patients allaient chez des confrères trouvés sur Doctolib ou Google. Aucune page pour ses spécialités (sportif, bébé, femme enceinte).",
      solution:
        "Création d'un site avec pages par spécialité (sport, pédiatrie, périnatalité), intégration Doctolib, blog conseils et SEO local sur 'ostéopathe Nantes'.",
      results: [
        "+40% de consultations en 3 mois",
        "Créneaux après-midi remplis à 85%",
        "1ère page Google sur 'ostéopathe Nantes sportif'",
        "Blog générant 15 nouveaux patients par mois",
      ],
      testimonial:
        "Les pages par pathologie ont tout changé. Les patients sportifs me trouvent directement sur Google. Mon planning est plein et mes créneaux de l'après-midi ne sont plus vides.",
      author: "Dr Alexandre Petit",
      role: "Ostéopathe, Cabinet Ostéo Équilibre",
      photo: "/images/testimonials/osteopathe.webp",
    },
    stats: [
      {
        value: "76%",
        label: "des patients cherchent un ostéopathe ou kiné sur Google",
      },
      {
        value: "4x",
        label: "plus de consultations avec des pages par pathologie optimisées SEO",
      },
      {
        value: "69%",
        label: "des patients préfèrent prendre RDV en ligne plutôt que par téléphone",
      },
    ],
    process: [
      {
        step: "01",
        title: "Analyse de votre pratique",
        desc: "Nous échangeons sur vos spécialités, vos pathologies traitées et votre patientèle pour un site adapté à votre exercice.",
      },
      {
        step: "02",
        title: "Design santé & pages pathologies",
        desc: "Création d'un design professionnel et rassurant avec pages par pathologie, présentation du praticien et blog conseils.",
      },
      {
        step: "03",
        title: "RDV en ligne & SEO santé",
        desc: "Intégration Doctolib, optimisation SEO par pathologie et localité, configuration Google My Business.",
      },
      {
        step: "04",
        title: "Lancement & suivi",
        desc: "Mise en ligne, formation à la gestion du blog et du contenu, suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "garage-automobile",
    name: "Garage automobile",
    emoji: "🔧",
    description:
      "Attirez plus de clients dans votre garage avec un site qui présente vos services, tarifs et facilite la prise de rendez-vous.",
    painPoints: [
      "Concurrence des centres auto et réseaux franchisés",
      "Services et tarifs non visibles en ligne",
      "Pas de système de prise de RDV en ligne",
      "Clients qui ne trouvent pas un garagiste de confiance",
    ],
    solutions: [
      "Site vitrine avec services détaillés et tarifs",
      "Prise de rendez-vous en ligne pour l'entretien",
      "Avis clients et certifications en avant",
      "SEO local garage automobile",
    ],
    features: [
      "Pages par service (entretien, réparation, contrôle)",
      "Grille tarifaire indicative",
      "Prise de RDV en ligne",
      "Avis clients et certifications",
      "Marques et véhicules traités",
      "SEO local garage auto",
    ],
    cta: "Créer le site de mon garage",
    faqItems: [
      {
        question: "Combien coûte un site pour un garage automobile ?",
        answer:
          "Un site vitrine pour garage automobile démarre à 500€. Il comprend les pages par service, la grille tarifaire, la prise de RDV en ligne, les avis clients et un an d'hébergement.",
      },
      {
        question: "Comment me différencier des centres auto franchisés ?",
        answer:
          "Votre site met en avant ce qui fait votre force : la proximité, le conseil personnalisé, les tarifs justes et les avis clients. Le SEO local vous positionne devant les franchises pour les recherches de proximité.",
      },
      {
        question: "Les clients pourront-ils prendre RDV en ligne ?",
        answer:
          "Oui, nous intégrons un formulaire de prise de rendez-vous avec choix du service, du véhicule et du créneau. Vous recevez les demandes par email et pouvez confirmer en un clic.",
      },
      {
        question: "Puis-je afficher mes tarifs en ligne ?",
        answer:
          "Oui, nous créons une grille tarifaire indicative par type de service. La transparence tarifaire est un argument de confiance qui vous différencie de la concurrence.",
      },
    ],
    caseStudy: {
      client: "Garage de la Gare",
      sector: "Garage automobile multimarque — Annecy",
      challenge:
        "Le garage perdait des clients face aux centres auto Norauto et Feu Vert. Pas de présence en ligne, pas de tarifs visibles. Les RDV se prenaient uniquement par téléphone, ce qui faisait perdre des clients.",
      solution:
        "Création d'un site avec pages par service, grille tarifaire, prise de RDV en ligne, avis clients mis en avant et SEO local sur 'garage Annecy' et 'mécanique Annecy'.",
      results: [
        "+30% de clients en 4 mois",
        "50% des RDV pris en ligne",
        "1ère page Google sur 'garage Annecy'",
        "+20% de chiffre d'affaires sur l'entretien",
      ],
      testimonial:
        "Depuis que j'ai mon site, les clients me trouvent sur Google au lieu d'aller chez Norauto. La prise de RDV en ligne a tout changé. Merci ConvertiLab.",
      author: "Jean-Pierre Duval",
      role: "Gérant, Garage de la Gare",
      photo: "/images/testimonials/garage.webp",
    },
    stats: [
      {
        value: "74%",
        label: "des automobilistes cherchent un garage sur Google pour l'entretien",
      },
      {
        value: "3x",
        label: "plus de clients avec un site présentant services et tarifs transparents",
      },
      {
        value: "61%",
        label: "des automobilistes préfèrent prendre RDV en ligne pour leur véhicule",
      },
    ],
    process: [
      {
        step: "01",
        title: "Analyse de vos services",
        desc: "Nous étudions vos prestations, tarifs, marques traitées et zone de chalandise pour un site efficace.",
      },
      {
        step: "02",
        title: "Design confiance & services",
        desc: "Création d'un design professionnel avec pages par service, grille tarifaire et mise en avant des avis clients.",
      },
      {
        step: "03",
        title: "RDV en ligne & SEO local",
        desc: "Intégration de la prise de RDV, optimisation SEO local et configuration Google My Business.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à la gestion du contenu et des rendez-vous, support pendant 30 jours.",
      },
    ],
  },
  {
    slug: "bijouterie",
    name: "Bijouterie / Joaillerie",
    emoji: "💎",
    description:
      "Sublimez vos créations avec un site élégant qui reflète le prestige de votre bijouterie et attire une clientèle exigeante.",
    painPoints: [
      "Image en ligne qui ne reflète pas le standing",
      "Pas de catalogue de créations accessible en ligne",
      "Concurrence des bijouteries en ligne",
      "Difficulté à attirer une clientèle haut de gamme",
    ],
    solutions: [
      "Site vitrine luxueux avec catalogue de collections",
      "Galerie de créations avec zoom haute définition",
      "SEO local et par type de bijou",
      "Formulaire de contact pour créations sur mesure",
    ],
    features: [
      "Catalogue de collections",
      "Galerie HD avec zoom",
      "Page créations sur mesure",
      "Histoire de la maison",
      "Formulaire de contact personnalisé",
      "SEO bijouterie local",
    ],
    cta: "Créer le site de ma bijouterie",
    faqItems: [
      {
        question: "Combien coûte un site pour une bijouterie ?",
        answer:
          "Un site vitrine pour bijouterie démarre à 500€. Il comprend le catalogue de collections, la galerie HD, la page sur mesure, l'histoire de la maison et un an d'hébergement.",
      },
      {
        question: "Le site aura-t-il un aspect luxueux et haut de gamme ?",
        answer:
          "Oui, le design sera raffiné avec typographies élégantes, animations subtiles, fond sombre et galerie haute définition. Chaque détail est pensé pour refléter le prestige de votre maison.",
      },
      {
        question: "Les bijoux seront-ils bien mis en valeur en ligne ?",
        answer:
          "Oui, nous utilisons des galeries avec zoom HD et un éclairage visuel soigné. Les photos de bijoux sont affichées en grand format avec possibilité de voir chaque détail.",
      },
      {
        question: "Puis-je vendre en ligne depuis le site ?",
        answer:
          "Oui, nous pouvons intégrer une boutique en ligne avec paiement sécurisé Stripe si vous souhaitez vendre directement. Sinon, un formulaire de contact sur mesure permet aux clients de vous solliciter pour des créations personnalisées.",
      },
    ],
    caseStudy: {
      client: "Maison Clarisse",
      sector: "Joaillerie artisanale — Paris 1er",
      challenge:
        "La bijouterie avait une clientèle fidèle mais vieillissante. Aucune présence en ligne, les jeunes couples allaient chez des concurrents référencés. Le sur-mesure n'était pas mis en valeur.",
      solution:
        "Création d'un site luxueux avec catalogue de collections, galerie HD, page créations sur mesure avec formulaire, histoire de la maison et SEO local sur 'bijouterie Paris 1er'.",
      results: [
        "+45% de demandes de bagues sur mesure",
        "Clientèle rajeunie de 10 ans en moyenne",
        "1ère page Google sur 'bijouterie Paris 1er'",
        "+30% de CA sur les créations personnalisées",
      ],
      testimonial:
        "Notre site a attiré une nouvelle clientèle qui nous cherchait en ligne. Les demandes de bagues sur mesure ont explosé. ConvertiLab a su traduire l'élégance de notre maison en digital.",
      author: "Clarisse Aubert",
      role: "Créatrice joaillière, Maison Clarisse",
      photo: "/images/testimonials/bijouterie.webp",
    },
    stats: [
      {
        value: "66%",
        label: "des acheteurs de bijoux font des recherches en ligne avant d'acheter en boutique",
      },
      {
        value: "3x",
        label: "plus de demandes sur mesure avec un site qui met en valeur les créations",
      },
      {
        value: "52%",
        label: "des millennials choisissent leur bijoutier en fonction du site web",
      },
    ],
    process: [
      {
        step: "01",
        title: "Découverte de votre maison",
        desc: "Nous échangeons sur vos collections, votre histoire, votre positionnement et votre clientèle pour un site à la hauteur de votre savoir-faire.",
      },
      {
        step: "02",
        title: "Design luxueux & catalogue",
        desc: "Création d'un design raffiné avec catalogue de collections, galerie HD et mise en valeur de l'histoire de la maison.",
      },
      {
        step: "03",
        title: "Sur mesure & SEO",
        desc: "Mise en place du formulaire créations sur mesure, optimisation SEO local et configuration Google My Business.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à la gestion du catalogue et des demandes, support pendant 30 jours.",
      },
    ],
  },
  {
    slug: "ecole-formation",
    name: "École / Formation",
    emoji: "🎓",
    description:
      "Attirez de nouveaux élèves et stagiaires avec un site qui présente vos formations, résultats et facilite l'inscription en ligne.",
    painPoints: [
      "Programmes de formation non visibles en ligne",
      "Processus d'inscription compliqué",
      "Difficulté à se différencier des autres centres",
      "Pas de preuve de la qualité des formations",
    ],
    solutions: [
      "Site vitrine avec catalogue de formations détaillé",
      "Formulaire d'inscription / demande d'information en ligne",
      "Témoignages et taux de réussite / placement",
      "SEO par formation et localité",
    ],
    features: [
      "Catalogue de formations détaillé",
      "Formulaire d'inscription en ligne",
      "Témoignages et résultats",
      "Page équipe pédagogique",
      "Blog actualités et conseils",
      "SEO formation local",
    ],
    cta: "Créer le site de mon centre de formation",
    faqItems: [
      {
        question: "Combien coûte un site pour un centre de formation ?",
        answer:
          "Un site vitrine pour centre de formation démarre à 500€. Il comprend le catalogue de formations, le formulaire d'inscription, les témoignages, la page équipe et un an d'hébergement.",
      },
      {
        question: "Les élèves pourront-ils s'inscrire en ligne ?",
        answer:
          "Oui, nous intégrons un formulaire de pré-inscription ou de demande d'information avec choix de la formation, du calendrier et envoi des documents. Vous traitez les demandes depuis votre interface admin.",
      },
      {
        question: "Comment prouver la qualité de nos formations en ligne ?",
        answer:
          "Nous mettons en avant vos taux de réussite, vos certifications (Qualiopi, etc.), les témoignages d'anciens élèves et les statistiques d'insertion professionnelle. C'est ce qui convainc les prospects.",
      },
      {
        question: "Le site aidera-t-il à remplir les sessions de formation ?",
        answer:
          "Oui, avec un bon SEO par type de formation et localité, votre site attire des prospects qualifiés. Le formulaire simplifie l'inscription et réduit les abandons. Le blog attire du trafic long terme.",
      },
    ],
    caseStudy: {
      client: "Institut Digital Academy",
      sector: "Centre de formation digital — Lyon",
      challenge:
        "Le centre avait des formations de qualité mais des sessions à moitié remplies. Pas de site web digne de ce nom, inscription uniquement par email. Les prospects allaient chez des concurrents avec des sites modernes.",
      solution:
        "Création d'un site avec catalogue de formations détaillé, page par formation avec programme, formulaire d'inscription, témoignages d'anciens et SEO sur 'formation digital Lyon'.",
      results: [
        "+60% d'inscriptions en 4 mois",
        "Sessions remplies à 95% contre 55% avant",
        "1ère page Google sur 'formation digital Lyon'",
        "50% des inscriptions via le formulaire en ligne",
      ],
      testimonial:
        "Nos sessions étaient à moitié vides. Depuis le nouveau site, on refuse du monde. Le catalogue en ligne et les témoignages ont fait toute la différence. Merci ConvertiLab.",
      author: "Caroline Dupont",
      role: "Directrice, Institut Digital Academy",
      photo: "/images/testimonials/ecole-formation.webp",
    },
    stats: [
      {
        value: "81%",
        label: "des personnes cherchent une formation sur Google avant de s'inscrire",
      },
      {
        value: "4x",
        label: "plus d'inscriptions avec un site présentant programmes et résultats",
      },
      {
        value: "67%",
        label: "des prospects choisissent le centre avec les meilleurs témoignages en ligne",
      },
    ],
    process: [
      {
        step: "01",
        title: "Analyse de vos formations",
        desc: "Nous étudions vos programmes, vos résultats, vos certifications et votre positionnement pour concevoir un site convaincant.",
      },
      {
        step: "02",
        title: "Design éducatif & catalogue",
        desc: "Création d'un design moderne avec catalogue de formations, pages détaillées par programme et témoignages d'anciens.",
      },
      {
        step: "03",
        title: "Inscription en ligne & SEO",
        desc: "Mise en place du formulaire d'inscription, optimisation SEO par formation et localité, configuration Google My Business.",
      },
      {
        step: "04",
        title: "Lancement & accompagnement",
        desc: "Mise en ligne, formation à la gestion du catalogue et des inscriptions, suivi des performances pendant 30 jours.",
      },
    ],
  },
];

export const getSectorBySlug = (slug: string) =>
  sectors.find((s) => s.slug === slug);
