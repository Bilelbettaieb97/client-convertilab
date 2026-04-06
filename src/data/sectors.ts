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
  {
    slug: "veterinaire",
    name: "Vétérinaire",
    emoji: "🐾",
    description:
      "Rassurez les propriétaires d'animaux avec un site professionnel présentant vos services, vos horaires d'urgence et la prise de rendez-vous en ligne.",
    painPoints: [
      "Pas de prise de RDV en ligne",
      "Horaires d'urgence introuvables",
      "Site vieillissant qui ne rassure pas",
      "Faible visibilité locale sur Google",
    ],
    solutions: [
      "Site moderne avec réservation en ligne",
      "Page urgences et horaires claires",
      "Fiches services détaillées par animal",
      "SEO local vétérinaire optimisé",
    ],
    features: [
      "Prise de RDV en ligne",
      "Page urgences vétérinaires",
      "Fiches par type d'animal",
      "Galerie photos de la clinique",
      "Carte Google Maps intégrée",
      "Blog conseils santé animale",
    ],
    cta: "Créer le site de ma clinique vétérinaire",
    faqItems: [
      {
        question: "Combien coûte un site web pour un vétérinaire ?",
        answer:
          "Nos sites pour vétérinaires démarrent à 500€. Ce tarif inclut la prise de rendez-vous en ligne, les fiches services, la page urgences, l'intégration Google Maps et un an d'hébergement. Un blog santé animale ou un espace client peut être ajouté en option.",
      },
      {
        question: "Les clients pourront-ils prendre RDV en ligne ?",
        answer:
          "Oui, nous intégrons un système de réservation en ligne permettant à vos clients de choisir le créneau, le type de consultation et l'animal concerné. Vous recevez une notification et pouvez gérer votre planning facilement.",
      },
      {
        question: "Peut-on afficher les urgences et les gardes ?",
        answer:
          "Absolument. Une page dédiée aux urgences affiche clairement vos horaires de garde, le numéro à appeler et les consignes. Cette page est optimisée pour apparaître en premier sur Google quand un propriétaire cherche un vétérinaire en urgence.",
      },
      {
        question: "Le site sera-t-il visible sur Google Maps ?",
        answer:
          "Oui, nous optimisons votre fiche Google My Business et le SEO local pour que votre clinique apparaisse dans les résultats de recherche locaux. Les propriétaires d'animaux près de chez vous vous trouveront facilement.",
      },
    ],
    caseStudy: {
      client: "Clinique Vétérinaire des Tilleuls",
      sector: "Vétérinaire — Nantes",
      challenge:
        "La clinique recevait de nombreux appels pour des renseignements basiques (horaires, tarifs). Le site existant était obsolète et ne proposait aucune prise de RDV en ligne, surchargeant l'accueil téléphonique.",
      solution:
        "Nous avons créé un site moderne avec prise de RDV en ligne, fiches détaillées par service, page urgences et blog santé animale. Le SEO local a été optimisé sur 'vétérinaire Nantes'.",
      results: [
        "+80% de RDV pris en ligne en 4 mois",
        "-50% d'appels téléphoniques pour renseignements",
        "1ère page Google sur 'vétérinaire Nantes'",
        "+35% de nouveaux clients en 6 mois",
      ],
      testimonial:
        "Le site a transformé notre quotidien. Les clients prennent RDV en ligne, on passe moins de temps au téléphone et plus de temps avec les animaux. C'est exactement ce qu'il nous fallait.",
      author: "Dr. Sophie Martin",
      role: "Directrice, Clinique des Tilleuls",
      photo: "/images/testimonials/veterinaire.webp",
    },
    stats: [
      {
        value: "78%",
        label: "des propriétaires d'animaux cherchent un vétérinaire sur Google",
      },
      {
        value: "4x",
        label: "plus de RDV avec un système de réservation en ligne",
      },
      {
        value: "65%",
        label: "des urgences vétérinaires commencent par une recherche en ligne",
      },
    ],
    process: [
      {
        step: "01",
        title: "Analyse de votre clinique",
        desc: "Nous étudions vos services, votre clientèle, votre zone de chalandise et vos besoins spécifiques pour concevoir un site adapté.",
      },
      {
        step: "02",
        title: "Design & fiches services",
        desc: "Création d'un design rassurant et professionnel avec fiches détaillées par type d'animal et de consultation.",
      },
      {
        step: "03",
        title: "RDV en ligne & SEO local",
        desc: "Intégration du système de prise de rendez-vous, optimisation Google My Business et référencement local.",
      },
      {
        step: "04",
        title: "Lancement & accompagnement",
        desc: "Mise en ligne, formation à la gestion du planning et suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "notaire",
    name: "Notaire",
    emoji: "📜",
    description:
      "Modernisez l'image de votre étude notariale avec un site sobre et professionnel qui rassure vos clients et facilite la prise de contact.",
    painPoints: [
      "Image en ligne dépassée",
      "Difficulté à attirer de nouveaux clients",
      "Pas de présentation claire des services",
      "Aucun formulaire de prise de contact",
    ],
    solutions: [
      "Site premium qui inspire la confiance",
      "Pages par domaine d'intervention",
      "Formulaire de contact sécurisé",
      "Blog d'actualité juridique et fiscale",
    ],
    features: [
      "Design sobre et institutionnel",
      "Pages par spécialité notariale",
      "Formulaire de prise de RDV",
      "Blog actualité juridique",
      "Présentation de l'équipe",
      "SEO local étude notariale",
    ],
    cta: "Créer le site de mon étude notariale",
    faqItems: [
      {
        question: "Combien coûte un site web pour une étude notariale ?",
        answer:
          "Un site vitrine pour notaire démarre à 500€. Ce prix inclut un design professionnel, les pages par domaine d'intervention, le formulaire de contact sécurisé et un an d'hébergement. Un blog juridique ou un espace documentaire client peut être ajouté en option.",
      },
      {
        question: "Le site respectera-t-il les règles de la profession ?",
        answer:
          "Oui, nous connaissons les obligations déontologiques des notaires en matière de communication. Le site respectera les règles du Conseil Supérieur du Notariat concernant les mentions obligatoires et la présentation de l'étude.",
      },
      {
        question: "Peut-on présenter chaque domaine d'intervention ?",
        answer:
          "Absolument. Immobilier, succession, droit de la famille, droit des sociétés : chaque domaine aura sa propre page optimisée pour le référencement, avec une explication claire et accessible pour vos clients.",
      },
      {
        question: "Les clients pourront-ils prendre RDV en ligne ?",
        answer:
          "Oui, nous intégrons un formulaire de prise de rendez-vous sécurisé. Vos clients choisissent le type d'acte concerné et le créneau souhaité. Vous recevez la demande par email et confirmez le rendez-vous.",
      },
    ],
    caseStudy: {
      client: "Étude Notariale Dumont & Associés",
      sector: "Notaire — Lyon 6e",
      challenge:
        "L'étude n'avait aucun site web et recevait peu de nouveaux clients hors recommandation. Les jeunes acquéreurs immobiliers ne trouvaient pas l'étude sur Google.",
      solution:
        "Création d'un site sobre et professionnel avec pages par domaine d'intervention, présentation de l'équipe, formulaire de contact sécurisé et blog juridique. Le SEO local a été optimisé sur 'notaire Lyon 6'.",
      results: [
        "+55% de demandes de RDV en 3 mois",
        "1ère page Google sur 'notaire Lyon 6'",
        "+30% de nouveaux clients primo-accédants",
        "85% de taux de satisfaction client",
      ],
      testimonial:
        "Notre site reflète enfin le sérieux de notre étude. Les clients nous trouvent facilement et prennent RDV en ligne. C'est un vrai atout pour notre activité.",
      author: "Maître Claire Dumont",
      role: "Notaire associée, Étude Dumont & Associés",
      photo: "/images/testimonials/notaire.webp",
    },
    stats: [
      {
        value: "68%",
        label: "des particuliers cherchent un notaire sur internet",
      },
      {
        value: "2.5x",
        label: "plus de prises de contact avec un site professionnel",
      },
      {
        value: "82%",
        label: "des primo-accédants comparent les études notariales en ligne",
      },
    ],
    process: [
      {
        step: "01",
        title: "Découverte de votre étude",
        desc: "Nous analysons vos domaines d'intervention, votre clientèle cible et votre positionnement pour créer un site à votre image.",
      },
      {
        step: "02",
        title: "Design & contenu juridique",
        desc: "Création d'un design sobre et professionnel avec des pages claires par domaine d'intervention et une présentation de l'équipe.",
      },
      {
        step: "03",
        title: "Formulaire & SEO local",
        desc: "Mise en place du formulaire de contact sécurisé, optimisation Google My Business et référencement local.",
      },
      {
        step: "04",
        title: "Lancement & suivi",
        desc: "Mise en ligne, formation à la gestion du blog et suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "psychologue-therapeute",
    name: "Psychologue / Thérapeute",
    emoji: "🧠",
    description:
      "Créez un espace en ligne rassurant et bienveillant pour vos patients, avec prise de RDV en ligne et présentation de vos spécialités thérapeutiques.",
    painPoints: [
      "Difficile de se faire connaître sans publicité",
      "Pas de prise de RDV en ligne",
      "Absence de présentation claire des approches",
      "Image trop clinique ou pas assez rassurante",
    ],
    solutions: [
      "Site chaleureux qui met en confiance",
      "Prise de RDV en ligne simple",
      "Pages par spécialité thérapeutique",
      "Blog bien-être et ressources",
    ],
    features: [
      "Design apaisant et bienveillant",
      "Prise de RDV en ligne",
      "Pages par approche thérapeutique",
      "Section tarifs et remboursements",
      "Blog ressources et articles",
      "SEO local psychologue",
    ],
    cta: "Créer le site de mon cabinet",
    faqItems: [
      {
        question: "Combien coûte un site web pour un psychologue ?",
        answer:
          "Nos sites pour psychologues et thérapeutes démarrent à 500€. Ce prix inclut un design apaisant, les pages par spécialité, la prise de RDV en ligne, la section tarifs et un an d'hébergement.",
      },
      {
        question: "Le site sera-t-il rassurant pour mes patients ?",
        answer:
          "Oui, nous concevons des sites avec des couleurs douces, une typographie apaisante et un ton bienveillant. L'objectif est que vos futurs patients se sentent en confiance dès la première visite sur votre site.",
      },
      {
        question: "Peut-on présenter les différentes approches thérapeutiques ?",
        answer:
          "Absolument. TCC, psychanalyse, EMDR, thérapie de couple : chaque approche aura sa propre page avec une explication accessible. Cela rassure les patients et améliore votre référencement.",
      },
      {
        question: "Les patients pourront-ils prendre RDV en ligne ?",
        answer:
          "Oui, nous intégrons un système de prise de rendez-vous simple et discret. Vos patients choisissent le type de consultation (individuelle, couple, enfant) et le créneau. Vous gérez votre planning en toute simplicité.",
      },
    ],
    caseStudy: {
      client: "Cabinet Émilie Renard — Psychologue clinicienne",
      sector: "Psychologue — Bordeaux",
      challenge:
        "Émilie venait de s'installer et n'avait aucune visibilité en ligne. Son planning était vide les 3 premiers mois. Elle ne savait pas comment se faire connaître sans publicité agressive.",
      solution:
        "Nous avons créé un site apaisant avec présentation de ses spécialités (anxiété, burnout, thérapie de couple), prise de RDV en ligne, blog bien-être et optimisation SEO local sur 'psychologue Bordeaux'.",
      results: [
        "Planning rempli à 90% en 4 mois",
        "1ère page Google sur 'psychologue Bordeaux centre'",
        "+120 RDV pris en ligne en 6 mois",
        "4.9/5 de satisfaction patients",
      ],
      testimonial:
        "Mon site est devenu mon meilleur allié. Les patients me disent qu'ils m'ont choisie parce que le site les a rassurés. ConvertiLab a compris l'importance du ton et de l'image pour ma profession.",
      author: "Émilie Renard",
      role: "Psychologue clinicienne, Bordeaux",
      photo: "/images/testimonials/psychologue.webp",
    },
    stats: [
      {
        value: "74%",
        label: "des patients cherchent un psychologue sur Google",
      },
      {
        value: "3x",
        label: "plus de prises de RDV avec un site professionnel",
      },
      {
        value: "89%",
        label: "des patients consultent le site avant de prendre RDV",
      },
    ],
    process: [
      {
        step: "01",
        title: "Découverte de votre pratique",
        desc: "Nous échangeons sur vos spécialités, votre approche thérapeutique et votre clientèle cible pour créer un site qui vous ressemble.",
      },
      {
        step: "02",
        title: "Design apaisant & contenu",
        desc: "Création d'un design bienveillant avec des pages claires par spécialité et un ton rassurant adapté à votre profession.",
      },
      {
        step: "03",
        title: "RDV en ligne & référencement",
        desc: "Intégration de la prise de rendez-vous, optimisation Google My Business et SEO local.",
      },
      {
        step: "04",
        title: "Lancement & accompagnement",
        desc: "Mise en ligne, formation à la gestion du blog et suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "agence-immobiliere-luxe",
    name: "Agence immobilière de luxe",
    emoji: "🏛️",
    description:
      "Présentez vos biens d'exception avec un site haut de gamme qui sublime chaque propriété et attire une clientèle exigeante.",
    painPoints: [
      "Site qui ne reflète pas le standing des biens",
      "Pas de présentation immersive des propriétés",
      "Difficulté à toucher les acheteurs internationaux",
      "Concurrence forte des portails immobiliers",
    ],
    solutions: [
      "Site luxe avec design sur-mesure",
      "Pages propriétés immersives avec galeries HD",
      "Version multilingue (FR/EN)",
      "SEO premium immobilier de prestige",
    ],
    features: [
      "Design haut de gamme et élégant",
      "Galeries photos plein écran HD",
      "Fiches propriétés détaillées",
      "Visite virtuelle intégrée",
      "Formulaire de contact qualifié",
      "SEO immobilier de luxe",
    ],
    cta: "Créer le site de mon agence de prestige",
    faqItems: [
      {
        question: "Combien coûte un site pour une agence immobilière de luxe ?",
        answer:
          "Un site sur-mesure pour l'immobilier de luxe démarre à 1500€. Ce prix inclut un design premium, les pages propriétés immersives, les galeries HD, le formulaire de contact qualifié et un an d'hébergement. La version multilingue et les visites virtuelles sont en option.",
      },
      {
        question: "Le site mettra-t-il en valeur nos biens d'exception ?",
        answer:
          "Oui, chaque propriété bénéficie d'une page dédiée avec galerie photos plein écran, description premium, plan interactif et possibilité d'intégrer une visite virtuelle 360°. Le design est pensé pour sublimer chaque bien.",
      },
      {
        question: "Peut-on avoir un site multilingue ?",
        answer:
          "Absolument. Nous créons des sites bilingues (français/anglais) voire trilingues pour toucher la clientèle internationale. Chaque version est optimisée pour le SEO dans la langue concernée.",
      },
      {
        question: "Comment se démarquer des portails immobiliers classiques ?",
        answer:
          "Votre site offrira une expérience unique que les portails ne peuvent pas proposer : un design sur-mesure, une présentation immersive de chaque bien, votre identité de marque et un storytelling qui crée l'émotion chez l'acheteur.",
      },
    ],
    caseStudy: {
      client: "Prestige Properties Paris",
      sector: "Immobilier de luxe — Paris 16e",
      challenge:
        "L'agence avait un site daté qui ne reflétait pas le standing de ses biens à 2M€+. Les acheteurs internationaux ne trouvaient pas l'agence et les mandats exclusifs étaient difficiles à obtenir.",
      solution:
        "Création d'un site haut de gamme bilingue FR/EN avec pages propriétés immersives, galeries plein écran, visites virtuelles intégrées et SEO premium sur 'immobilier luxe Paris 16'.",
      results: [
        "+45% de demandes qualifiées en 3 mois",
        "3 mandats exclusifs obtenus grâce au site",
        "+60% de visiteurs internationaux",
        "Temps moyen sur le site : 4min30",
      ],
      testimonial:
        "Notre site est enfin à la hauteur de nos biens. Les clients nous disent qu'ils ont été séduits avant même la visite. ConvertiLab a compris l'univers du luxe.",
      author: "Alexandre de Montfort",
      role: "Directeur, Prestige Properties Paris",
      photo: "/images/testimonials/immobilier-luxe.webp",
    },
    stats: [
      {
        value: "92%",
        label: "des acheteurs de biens de luxe commencent leur recherche en ligne",
      },
      {
        value: "5x",
        label: "plus de temps passé sur un site immobilier avec galeries immersives",
      },
      {
        value: "67%",
        label: "des acquéreurs internationaux consultent le site avant de contacter l'agence",
      },
    ],
    process: [
      {
        step: "01",
        title: "Immersion dans votre univers",
        desc: "Nous analysons votre positionnement, vos biens phares et votre clientèle cible pour créer un site qui incarne le prestige de votre agence.",
      },
      {
        step: "02",
        title: "Design luxe & pages propriétés",
        desc: "Création d'un design haut de gamme avec galeries plein écran, typographie élégante et pages propriétés immersives.",
      },
      {
        step: "03",
        title: "Multilingue & SEO premium",
        desc: "Traduction professionnelle, optimisation SEO immobilier de luxe et intégration des visites virtuelles.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à l'ajout de propriétés et suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "cave-a-vin-caviste",
    name: "Cave à vin / Caviste",
    emoji: "🍷",
    description:
      "Mettez en valeur votre sélection de vins avec un site élégant proposant catalogue en ligne, conseils d'accords mets-vins et événements dégustation.",
    painPoints: [
      "Catalogue de vins non consultable en ligne",
      "Pas de visibilité sur les événements dégustation",
      "Difficulté à fidéliser la clientèle",
      "Concurrence des sites de vente en ligne",
    ],
    solutions: [
      "Catalogue de vins élégant en ligne",
      "Page événements et dégustations",
      "Newsletter et programme de fidélité",
      "Blog accords mets-vins et conseils",
    ],
    features: [
      "Catalogue de vins avec filtres",
      "Page événements dégustation",
      "Blog accords mets-vins",
      "Newsletter intégrée",
      "Galerie photos de la cave",
      "SEO local caviste",
    ],
    cta: "Créer le site de ma cave à vin",
    faqItems: [
      {
        question: "Combien coûte un site pour un caviste ?",
        answer:
          "Un site pour caviste démarre à 500€. Ce prix inclut le catalogue de vins en ligne, la page événements, le blog accords mets-vins et un an d'hébergement. La vente en ligne avec paiement sécurisé peut être ajoutée en option.",
      },
      {
        question: "Peut-on présenter notre catalogue de vins en ligne ?",
        answer:
          "Oui, nous créons un catalogue élégant avec fiches détaillées par vin (cépage, appellation, notes de dégustation, prix). Vos clients peuvent filtrer par région, couleur ou prix. Vous mettez à jour le catalogue facilement.",
      },
      {
        question: "Peut-on promouvoir nos événements dégustation ?",
        answer:
          "Absolument. Une page dédiée présente vos prochains événements avec inscription en ligne. Nous intégrons aussi une newsletter pour informer vos clients des nouveautés et dégustations à venir.",
      },
      {
        question: "Le blog peut-il aider mon référencement ?",
        answer:
          "Oui, un blog avec des articles sur les accords mets-vins, les régions viticoles et les conseils de dégustation attire du trafic qualifié et renforce votre expertise aux yeux de Google et de vos clients.",
      },
    ],
    caseStudy: {
      client: "La Cave du Marais",
      sector: "Caviste — Paris 3e",
      challenge:
        "La cave avait une clientèle fidèle de quartier mais n'arrivait pas à attirer de nouveaux clients. Les événements dégustation étaient peu connus et le catalogue de 400 références n'était pas consultable en ligne.",
      solution:
        "Création d'un site élégant avec catalogue de vins filtrable, page événements avec inscription, blog accords mets-vins et newsletter mensuelle. SEO local optimisé sur 'caviste Paris 3'.",
      results: [
        "+70% de participants aux dégustations en 3 mois",
        "1ère page Google sur 'caviste Paris 3'",
        "+45% de nouveaux clients en 6 mois",
        "600 abonnés newsletter en 4 mois",
      ],
      testimonial:
        "Le site a donné une nouvelle dimension à ma cave. Les dégustations affichent complet et je touche une clientèle que je n'aurais jamais atteinte sans présence en ligne.",
      author: "François Leblanc",
      role: "Gérant, La Cave du Marais",
      photo: "/images/testimonials/caviste.webp",
    },
    stats: [
      {
        value: "62%",
        label: "des amateurs de vin recherchent un caviste sur Google",
      },
      {
        value: "3x",
        label: "plus de participants aux événements avec promotion en ligne",
      },
      {
        value: "71%",
        label: "des clients consultent le catalogue avant de se déplacer",
      },
    ],
    process: [
      {
        step: "01",
        title: "Découverte de votre cave",
        desc: "Nous analysons votre sélection, vos événements, votre clientèle et votre positionnement pour concevoir un site qui vous ressemble.",
      },
      {
        step: "02",
        title: "Design & catalogue en ligne",
        desc: "Création d'un design élégant avec un catalogue de vins filtrable, des fiches détaillées et une galerie photos de la cave.",
      },
      {
        step: "03",
        title: "Événements & newsletter",
        desc: "Mise en place de la page événements avec inscription, du blog et de la newsletter pour fidéliser votre clientèle.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à la gestion du catalogue et des événements, suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "pizzeria-fast-food",
    name: "Pizzeria / Fast-food",
    emoji: "🍕",
    description:
      "Boostez vos commandes avec un site appétissant proposant menu en ligne, commande à emporter et livraison pour votre pizzeria ou fast-food.",
    painPoints: [
      "Trop dépendant des plateformes de livraison",
      "Commissions élevées sur Uber Eats / Deliveroo",
      "Menu non consultable en ligne",
      "Pas de commande directe possible",
    ],
    solutions: [
      "Site avec commande en ligne directe",
      "Menu digital avec photos appétissantes",
      "Système click & collect intégré",
      "SEO local pour livraison de proximité",
    ],
    features: [
      "Menu digital avec photos",
      "Commande en ligne & click and collect",
      "Intégration paiement en ligne",
      "Zone de livraison affichée",
      "Promotions et offres du moment",
      "SEO local pizzeria",
    ],
    cta: "Créer le site de ma pizzeria",
    faqItems: [
      {
        question: "Combien coûte un site de commande en ligne pour une pizzeria ?",
        answer:
          "Un site avec commande en ligne pour pizzeria démarre à 800€. Ce prix inclut le menu digital, le système de commande, le paiement en ligne sécurisé, le click & collect et un an d'hébergement. Vous économisez les commissions des plateformes de livraison.",
      },
      {
        question: "Peut-on se passer d'Uber Eats et Deliveroo ?",
        answer:
          "Votre site vous permet de recevoir des commandes directement sans commission. Vous gardez 100% de vos marges. Beaucoup de nos clients réduisent progressivement leur dépendance aux plateformes grâce à leur propre site.",
      },
      {
        question: "Les clients peuvent-ils payer en ligne ?",
        answer:
          "Oui, nous intégrons un système de paiement sécurisé (carte bancaire). Vos clients commandent et paient en ligne, vous recevez la commande instantanément et préparez la commande.",
      },
      {
        question: "Peut-on afficher la zone de livraison ?",
        answer:
          "Absolument. Une carte interactive affiche votre zone de livraison. Le client entre son adresse et voit immédiatement s'il peut être livré et en combien de temps.",
      },
    ],
    caseStudy: {
      client: "Pizza Napoli Express",
      sector: "Pizzeria — Marseille 6e",
      challenge:
        "La pizzeria payait 30% de commission sur chaque commande Uber Eats. Le propriétaire voulait recevoir des commandes directes mais n'avait aucun site web.",
      solution:
        "Création d'un site de commande en ligne avec menu photos, paiement sécurisé, click & collect et zone de livraison. SEO local sur 'pizzeria livraison Marseille 6'. Campagne flyers avec QR code vers le site.",
      results: [
        "+200 commandes directes/mois en 3 mois",
        "12 000€ de commissions économisées par an",
        "1ère page Google sur 'pizza livraison Marseille 6'",
        "+25% de panier moyen vs plateformes",
      ],
      testimonial:
        "Avant, je donnais 30% à Uber Eats. Maintenant, la moitié de mes commandes passent par mon site. J'ai récupéré mes marges et mes clients sont contents de commander directement.",
      author: "Karim Bouzid",
      role: "Gérant, Pizza Napoli Express",
      photo: "/images/testimonials/pizzeria.webp",
    },
    stats: [
      {
        value: "30%",
        label: "de commission économisée en moyenne sur les plateformes",
      },
      {
        value: "2x",
        label: "plus de panier moyen sur un site propre vs plateformes",
      },
      {
        value: "76%",
        label: "des clients préfèrent commander directement au restaurant",
      },
    ],
    process: [
      {
        step: "01",
        title: "Analyse de votre carte",
        desc: "Nous étudions votre menu, vos prix, votre zone de livraison et vos objectifs pour concevoir un site de commande performant.",
      },
      {
        step: "02",
        title: "Menu digital & design",
        desc: "Création d'un menu appétissant avec photos, catégories, suppléments et options. Design mobile-first pour commander facilement.",
      },
      {
        step: "03",
        title: "Commande & paiement",
        desc: "Intégration du système de commande, du paiement en ligne sécurisé, du click & collect et de la zone de livraison.",
      },
      {
        step: "04",
        title: "Lancement & promotion",
        desc: "Mise en ligne, création de QR codes pour vos flyers et emballages, et suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "hotel-chambre-hotes",
    name: "Hôtel / Chambre d'hôtes",
    emoji: "🏨",
    description:
      "Attirez des réservations directes avec un site immersif présentant vos chambres, vos tarifs et votre environnement pour réduire la dépendance à Booking.",
    painPoints: [
      "Trop dépendant de Booking et Airbnb",
      "Commissions de 15-20% sur chaque réservation",
      "Pas de réservation directe possible",
      "Site qui ne met pas en valeur l'établissement",
    ],
    solutions: [
      "Site immersif avec réservation directe",
      "Galeries photos immersives des chambres",
      "Moteur de réservation intégré",
      "SEO local hôtellerie optimisé",
    ],
    features: [
      "Galeries photos immersives",
      "Moteur de réservation en ligne",
      "Fiches chambres avec tarifs",
      "Page activités et environs",
      "Avis clients intégrés",
      "SEO local hôtel",
    ],
    cta: "Créer le site de mon établissement",
    faqItems: [
      {
        question: "Combien coûte un site pour un hôtel ou une chambre d'hôtes ?",
        answer:
          "Un site avec réservation en ligne démarre à 800€. Ce prix inclut les galeries photos, les fiches chambres, le moteur de réservation, la page activités et un an d'hébergement. Vous économisez les commissions des OTA (Booking, Airbnb).",
      },
      {
        question: "Peut-on se passer de Booking ?",
        answer:
          "Votre site vous permet de recevoir des réservations directes sans commission. Nos clients réduisent en moyenne de 40% leur dépendance aux OTA après 6 mois. L'objectif est un mix sain entre réservations directes et plateformes.",
      },
      {
        question: "Le site aura-t-il un système de réservation ?",
        answer:
          "Oui, nous intégrons un moteur de réservation permettant de choisir les dates, le type de chambre et de payer en ligne. Vous gérez vos disponibilités et tarifs depuis un panneau d'administration simple.",
      },
      {
        question: "Peut-on mettre en avant les activités de la région ?",
        answer:
          "Absolument. Une page dédiée présente les activités, restaurants et sites touristiques autour de votre établissement. C'est un argument de vente puissant et un excellent levier SEO.",
      },
    ],
    caseStudy: {
      client: "Le Mas des Oliviers",
      sector: "Chambre d'hôtes — Luberon, Provence",
      challenge:
        "Le mas payait 18% de commission à Booking sur chaque réservation. Le site existant était un simple blog sans réservation en ligne et ne reflétait pas le charme du lieu.",
      solution:
        "Création d'un site immersif avec galeries photos professionnelles, fiches chambres, moteur de réservation directe, page activités Luberon et SEO optimisé sur 'chambre d'hôtes Luberon'.",
      results: [
        "60% de réservations directes en 6 mois",
        "8 000€ de commissions économisées par an",
        "1ère page Google sur 'chambre d'hôtes Luberon'",
        "Taux d'occupation +20% en basse saison",
      ],
      testimonial:
        "Les clients nous disent qu'ils ont réservé directement après avoir vu notre site. Les photos et la page sur le Luberon font rêver. On a réduit notre dépendance à Booking de moitié.",
      author: "Isabelle & Pierre Roux",
      role: "Propriétaires, Le Mas des Oliviers",
      photo: "/images/testimonials/hotel.webp",
    },
    stats: [
      {
        value: "18%",
        label: "de commission économisée en moyenne par réservation directe",
      },
      {
        value: "3x",
        label: "plus de réservations directes avec un site immersif",
      },
      {
        value: "85%",
        label: "des voyageurs visitent le site de l'hôtel avant de réserver",
      },
    ],
    process: [
      {
        step: "01",
        title: "Découverte de votre établissement",
        desc: "Nous visitons (ou échangeons en visio) pour comprendre l'ambiance, les chambres, les atouts et la clientèle cible de votre établissement.",
      },
      {
        step: "02",
        title: "Design immersif & galeries",
        desc: "Création d'un design qui fait voyager avec galeries plein écran, fiches chambres détaillées et page activités de la région.",
      },
      {
        step: "03",
        title: "Réservation & SEO",
        desc: "Intégration du moteur de réservation, optimisation SEO local et connexion avec votre channel manager si nécessaire.",
      },
      {
        step: "04",
        title: "Lancement & accompagnement",
        desc: "Mise en ligne, formation à la gestion des disponibilités et tarifs, suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "creche-garde-enfants",
    name: "Crèche / Garde d'enfants",
    emoji: "👶",
    description:
      "Rassurez les parents avec un site chaleureux présentant votre projet pédagogique, votre équipe et un formulaire de pré-inscription en ligne.",
    painPoints: [
      "Les parents ne trouvent pas la crèche en ligne",
      "Pas de pré-inscription en ligne",
      "Projet pédagogique non communiqué",
      "Difficulté à se démarquer des autres structures",
    ],
    solutions: [
      "Site rassurant avec galerie et équipe",
      "Formulaire de pré-inscription en ligne",
      "Page projet pédagogique détaillée",
      "SEO local crèche et garde d'enfants",
    ],
    features: [
      "Design chaleureux et coloré",
      "Page projet pédagogique",
      "Présentation de l'équipe",
      "Formulaire de pré-inscription",
      "Galerie photos des locaux",
      "SEO local crèche",
    ],
    cta: "Créer le site de ma crèche",
    faqItems: [
      {
        question: "Combien coûte un site pour une crèche ?",
        answer:
          "Un site pour crèche ou structure de garde d'enfants démarre à 500€. Ce prix inclut un design chaleureux, la page projet pédagogique, la présentation de l'équipe, le formulaire de pré-inscription et un an d'hébergement.",
      },
      {
        question: "Les parents pourront-ils pré-inscrire leur enfant en ligne ?",
        answer:
          "Oui, un formulaire de pré-inscription détaillé permet aux parents de soumettre leur demande en ligne (âge de l'enfant, dates souhaitées, besoins spécifiques). Vous recevez les demandes par email et pouvez les traiter efficacement.",
      },
      {
        question: "Peut-on présenter notre projet pédagogique ?",
        answer:
          "Absolument. Une page dédiée présente votre approche pédagogique (Montessori, Reggio Emilia, etc.), vos valeurs, votre programme d'activités et vos engagements. C'est un argument décisif pour les parents.",
      },
      {
        question: "Le site sera-t-il rassurant pour les parents ?",
        answer:
          "Oui, le design est pensé pour inspirer confiance : photos des locaux lumineux, présentation de l'équipe avec parcours, témoignages de parents et informations transparentes sur les tarifs et les horaires.",
      },
    ],
    caseStudy: {
      client: "Les Petits Explorateurs",
      sector: "Micro-crèche — Toulouse",
      challenge:
        "La micro-crèche venait d'ouvrir et avait du mal à remplir ses 12 places. Les parents du quartier ne savaient pas qu'elle existait et les inscriptions se faisaient uniquement par téléphone.",
      solution:
        "Création d'un site chaleureux avec projet pédagogique Montessori, galerie photos des locaux, présentation de l'équipe, formulaire de pré-inscription et SEO local sur 'crèche Toulouse'.",
      results: [
        "12 places remplies en 2 mois",
        "Liste d'attente de 15 familles en 4 mois",
        "1ère page Google sur 'micro-crèche Toulouse'",
        "+90% de pré-inscriptions via le site",
      ],
      testimonial:
        "Le site a été notre meilleur investissement. Les parents nous ont découverts en ligne et ont été rassurés par la présentation de notre projet. On a une liste d'attente maintenant !",
      author: "Marie Dupont",
      role: "Directrice, Les Petits Explorateurs",
      photo: "/images/testimonials/creche.webp",
    },
    stats: [
      {
        value: "83%",
        label: "des parents cherchent une crèche sur internet",
      },
      {
        value: "4x",
        label: "plus de pré-inscriptions avec un formulaire en ligne",
      },
      {
        value: "91%",
        label: "des parents consultent le site avant de visiter la crèche",
      },
    ],
    process: [
      {
        step: "01",
        title: "Découverte de votre structure",
        desc: "Nous échangeons sur votre projet pédagogique, votre équipe, vos locaux et votre positionnement pour concevoir un site adapté.",
      },
      {
        step: "02",
        title: "Design chaleureux & contenu",
        desc: "Création d'un design coloré et rassurant avec la page projet pédagogique, la présentation de l'équipe et la galerie photos.",
      },
      {
        step: "03",
        title: "Pré-inscription & SEO",
        desc: "Mise en place du formulaire de pré-inscription, optimisation Google My Business et référencement local.",
      },
      {
        step: "04",
        title: "Lancement & suivi",
        desc: "Mise en ligne, formation à la gestion des demandes et suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "demenageur",
    name: "Déménageur",
    emoji: "📦",
    description:
      "Générez des demandes de devis qualifiées grâce à un site professionnel avec formulaire de devis en ligne, zones d'intervention et témoignages clients.",
    painPoints: [
      "Peu de demandes de devis en dehors du bouche-à-oreille",
      "Concurrence forte des plateformes de devis",
      "Pas de site ou site très basique",
      "Difficulté à rassurer les prospects",
    ],
    solutions: [
      "Site pro avec formulaire de devis en ligne",
      "Page zones d'intervention détaillée",
      "Témoignages et avis clients mis en avant",
      "SEO local déménagement optimisé",
    ],
    features: [
      "Formulaire de devis en ligne détaillé",
      "Page services (particulier, entreprise, piano...)",
      "Zones d'intervention avec carte",
      "Galerie photos de réalisations",
      "Avis clients et témoignages",
      "SEO local déménageur",
    ],
    cta: "Créer le site de mon entreprise de déménagement",
    faqItems: [
      {
        question: "Combien coûte un site pour un déménageur ?",
        answer:
          "Un site vitrine pour déménageur démarre à 500€. Ce prix inclut le formulaire de devis en ligne, les pages services, la zone d'intervention, les témoignages et un an d'hébergement.",
      },
      {
        question: "Le formulaire de devis est-il détaillé ?",
        answer:
          "Oui, le formulaire permet au client de préciser le volume, les étages, la distance, les objets spéciaux (piano, coffre-fort) et la date souhaitée. Vous recevez des demandes qualifiées avec toutes les informations nécessaires pour chiffrer.",
      },
      {
        question: "Peut-on afficher nos zones d'intervention ?",
        answer:
          "Absolument. Une carte interactive affiche vos zones de départ et d'arrivée. Cela rassure le client et améliore votre référencement local sur les villes que vous desservez.",
      },
      {
        question: "Comment se démarquer des plateformes de devis en ligne ?",
        answer:
          "Votre site met en avant votre expertise, vos témoignages et votre professionnalisme. Contrairement aux plateformes, vous n'êtes pas en concurrence directe avec 5 autres devis. Le client vous contacte directement car il a été convaincu.",
      },
    ],
    caseStudy: {
      client: "Déménagements Rapides IDF",
      sector: "Déménagement — Île-de-France",
      challenge:
        "L'entreprise dépensait 800€/mois sur des plateformes de devis avec un taux de conversion faible. Les prospects comparaient systématiquement 5 devis et choisissaient le moins cher.",
      solution:
        "Création d'un site professionnel avec formulaire de devis détaillé, pages par type de déménagement, galerie photos, témoignages vidéo et SEO local sur les principales villes d'IDF.",
      results: [
        "+120 demandes de devis directes/mois",
        "Taux de conversion devis : 45% (vs 15% sur plateforme)",
        "Suppression des plateformes payantes",
        "+35% de chiffre d'affaires en 6 mois",
      ],
      testimonial:
        "Depuis qu'on a notre site, les clients nous contactent directement et sont déjà convaincus. Le taux de conversion a triplé par rapport aux plateformes. Meilleur investissement qu'on ait fait.",
      author: "Thomas Leclerc",
      role: "Gérant, Déménagements Rapides IDF",
      photo: "/images/testimonials/demenageur.webp",
    },
    stats: [
      {
        value: "85%",
        label: "des particuliers cherchent un déménageur sur Google",
      },
      {
        value: "3x",
        label: "meilleur taux de conversion avec un site propre vs plateformes",
      },
      {
        value: "70%",
        label: "des clients choisissent un déménageur après avoir vu son site",
      },
    ],
    process: [
      {
        step: "01",
        title: "Analyse de votre activité",
        desc: "Nous étudions vos services, zones d'intervention, tarifs et clientèle cible pour concevoir un site qui génère des devis qualifiés.",
      },
      {
        step: "02",
        title: "Design & formulaire de devis",
        desc: "Création d'un design professionnel et rassurant avec formulaire de devis détaillé et pages par type de prestation.",
      },
      {
        step: "03",
        title: "Témoignages & SEO local",
        desc: "Mise en avant des avis clients, optimisation Google My Business et référencement local sur vos zones d'intervention.",
      },
      {
        step: "04",
        title: "Lancement & suivi",
        desc: "Mise en ligne, formation à la gestion des demandes de devis et suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "serrurier",
    name: "Serrurier",
    emoji: "🔑",
    description:
      "Soyez trouvé en urgence grâce à un site optimisé pour le SEO local avec numéro cliquable, zones d'intervention et tarifs transparents.",
    painPoints: [
      "Concurrence déloyale sur Google (arnaques)",
      "Difficulté à inspirer confiance",
      "Pas de visibilité en situation d'urgence",
      "Tarifs perçus comme opaques",
    ],
    solutions: [
      "Site rassurant avec tarifs transparents",
      "Numéro cliquable et appel en un clic",
      "Pages par zone d'intervention",
      "SEO local urgence serrurier",
    ],
    features: [
      "Numéro cliquable call-to-action",
      "Grille tarifaire transparente",
      "Pages par ville / quartier",
      "Disponibilité 24h/24 affichée",
      "Avis Google intégrés",
      "SEO local serrurier urgence",
    ],
    cta: "Créer le site de mon entreprise de serrurerie",
    faqItems: [
      {
        question: "Combien coûte un site pour un serrurier ?",
        answer:
          "Un site pour serrurier démarre à 500€. Ce prix inclut le numéro cliquable, la grille tarifaire, les pages par zone d'intervention, les avis clients et un an d'hébergement. Le SEO local est inclus pour apparaître en urgence.",
      },
      {
        question: "Comment inspirer confiance face aux arnaques en ligne ?",
        answer:
          "Votre site affiche clairement vos tarifs, vos certifications, votre numéro SIRET et vos vrais avis clients. Cette transparence vous distingue immédiatement des serruriers frauduleux et rassure les clients en situation de stress.",
      },
      {
        question: "Le site sera-t-il visible en cas d'urgence ?",
        answer:
          "Oui, nous optimisons votre site pour les recherches d'urgence ('serrurier urgence + ville'). Le numéro est cliquable, l'appel se fait en un clic sur mobile. Votre site apparaît quand les clients ont le plus besoin de vous.",
      },
      {
        question: "Peut-on créer des pages par ville ?",
        answer:
          "Absolument. Nous créons une page optimisée pour chaque ville ou quartier que vous desservez. C'est la stratégie la plus efficace pour apparaître sur les recherches locales 'serrurier + nom de ville'.",
      },
    ],
    caseStudy: {
      client: "Serrurier Express Lyon",
      sector: "Serrurerie — Lyon et agglomération",
      challenge:
        "Le serrurier souffrait de la concurrence déloyale sur Google. Les clients avaient du mal à distinguer les vrais professionnels des arnaqueurs. Le bouche-à-oreille ne suffisait plus.",
      solution:
        "Création d'un site transparent avec grille tarifaire, certifications, avis Google, numéro cliquable et pages SEO par arrondissement de Lyon et villes de l'agglomération.",
      results: [
        "+90 appels directs/mois depuis le site",
        "1ère page Google sur 'serrurier Lyon' (6 arrondissements)",
        "+60% de chiffre d'affaires en 6 mois",
        "4.8/5 sur Google avec 200+ avis",
      ],
      testimonial:
        "Mon site me rapporte plus que toutes les publicités que j'ai pu faire. Les clients me disent qu'ils m'ont choisi parce que mes tarifs sont clairs et mes avis sont vrais. Enfin de la confiance !",
      author: "Julien Moreau",
      role: "Gérant, Serrurier Express Lyon",
      photo: "/images/testimonials/serrurier.webp",
    },
    stats: [
      {
        value: "95%",
        label: "des recherches de serrurier sont faites en urgence sur mobile",
      },
      {
        value: "5x",
        label: "plus d'appels avec un numéro cliquable et des tarifs affichés",
      },
      {
        value: "73%",
        label: "des clients choisissent le serrurier avec les meilleurs avis",
      },
    ],
    process: [
      {
        step: "01",
        title: "Analyse de votre activité",
        desc: "Nous étudions vos services, zones d'intervention, tarifs et certifications pour concevoir un site qui inspire confiance.",
      },
      {
        step: "02",
        title: "Design & transparence tarifaire",
        desc: "Création d'un site rassurant avec grille tarifaire claire, certifications visibles et numéro d'appel en un clic.",
      },
      {
        step: "03",
        title: "Pages locales & SEO urgence",
        desc: "Création de pages par ville/quartier, optimisation Google My Business et SEO orienté recherches d'urgence.",
      },
      {
        step: "04",
        title: "Lancement & suivi",
        desc: "Mise en ligne, mise en place du suivi des appels et suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "paysagiste-jardinier",
    name: "Paysagiste / Jardinier",
    emoji: "🌿",
    description:
      "Montrez votre savoir-faire avec un site mettant en valeur vos réalisations paysagères, vos services et un formulaire de devis en ligne.",
    painPoints: [
      "Réalisations non visibles en ligne",
      "Peu de demandes de devis qualifiées",
      "Concurrence forte sur le local",
      "Pas de site ou site très ancien",
    ],
    solutions: [
      "Portfolio avant/après de vos réalisations",
      "Formulaire de devis paysager en ligne",
      "Pages par type de prestation",
      "SEO local paysagiste optimisé",
    ],
    features: [
      "Portfolio avant/après",
      "Formulaire de devis en ligne",
      "Pages par service (création, entretien, élagage...)",
      "Galerie photos de réalisations",
      "Avis clients et témoignages",
      "SEO local paysagiste",
    ],
    cta: "Créer le site de mon entreprise paysagère",
    faqItems: [
      {
        question: "Combien coûte un site pour un paysagiste ?",
        answer:
          "Un site vitrine pour paysagiste démarre à 500€. Ce prix inclut le portfolio avant/après, le formulaire de devis, les pages services, la galerie photos et un an d'hébergement.",
      },
      {
        question: "Peut-on montrer des photos avant/après ?",
        answer:
          "Oui, nous créons un portfolio interactif avec slider avant/après pour chaque réalisation. C'est le format le plus convaincant pour montrer votre savoir-faire et déclencher des demandes de devis.",
      },
      {
        question: "Le formulaire de devis est-il adapté au paysagisme ?",
        answer:
          "Absolument. Le formulaire permet au client de préciser le type de projet (création de jardin, entretien, élagage, terrasse), la surface, le budget estimé et de joindre des photos de leur terrain.",
      },
      {
        question: "Comment apparaître sur Google en tant que paysagiste ?",
        answer:
          "Nous optimisons votre site pour les recherches locales ('paysagiste + ville'), créons des pages par zone d'intervention et optimisons votre fiche Google My Business avec vos photos de réalisations.",
      },
    ],
    caseStudy: {
      client: "Jardins d'Émeraude",
      sector: "Paysagiste — Rennes et alentours",
      challenge:
        "Le paysagiste travaillait uniquement par bouche-à-oreille et perdait des chantiers face à des concurrents qui avaient un site avec portfolio. Ses magnifiques réalisations n'étaient visibles nulle part en ligne.",
      solution:
        "Création d'un site avec portfolio avant/après, formulaire de devis, pages par prestation (création, entretien, élagage) et SEO local sur 'paysagiste Rennes'.",
      results: [
        "+25 demandes de devis/mois en 3 mois",
        "1ère page Google sur 'paysagiste Rennes'",
        "+50% de chiffre d'affaires en 8 mois",
        "Panier moyen +40% grâce au portfolio premium",
      ],
      testimonial:
        "Les clients voient mes réalisations en ligne et arrivent déjà convaincus. Le portfolio avant/après est mon meilleur commercial. Je refuse des chantiers maintenant !",
      author: "Stéphane Legall",
      role: "Gérant, Jardins d'Émeraude",
      photo: "/images/testimonials/paysagiste.webp",
    },
    stats: [
      {
        value: "77%",
        label: "des particuliers cherchent un paysagiste sur Google",
      },
      {
        value: "4x",
        label: "plus de devis avec un portfolio avant/après en ligne",
      },
      {
        value: "68%",
        label: "des clients choisissent le paysagiste après avoir vu ses réalisations",
      },
    ],
    process: [
      {
        step: "01",
        title: "Découverte de votre activité",
        desc: "Nous échangeons sur vos prestations, vos réalisations phares et votre zone d'intervention pour concevoir un site à votre image.",
      },
      {
        step: "02",
        title: "Portfolio & design nature",
        desc: "Création d'un design inspiré par la nature avec portfolio avant/après, galerie photos et pages par type de prestation.",
      },
      {
        step: "03",
        title: "Devis en ligne & SEO",
        desc: "Mise en place du formulaire de devis, optimisation Google My Business et référencement local.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à l'ajout de nouvelles réalisations et suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "peintre-batiment",
    name: "Peintre en bâtiment",
    emoji: "🎨",
    description:
      "Décrochez plus de chantiers avec un site professionnel présentant vos réalisations, vos spécialités et un formulaire de devis en ligne.",
    painPoints: [
      "Pas de portfolio visible en ligne",
      "Difficile de justifier ses tarifs",
      "Concurrence forte sur le local",
      "Bouche-à-oreille insuffisant",
    ],
    solutions: [
      "Portfolio photos de chantiers réalisés",
      "Pages par spécialité (intérieur, extérieur, déco...)",
      "Formulaire de devis en ligne",
      "SEO local peintre en bâtiment",
    ],
    features: [
      "Portfolio avant/après chantiers",
      "Pages par spécialité",
      "Formulaire de devis détaillé",
      "Certifications et assurances affichées",
      "Avis clients vérifiés",
      "SEO local peintre",
    ],
    cta: "Créer le site de mon entreprise de peinture",
    faqItems: [
      {
        question: "Combien coûte un site pour un peintre en bâtiment ?",
        answer:
          "Un site vitrine pour peintre en bâtiment démarre à 500€. Ce prix inclut le portfolio avant/après, le formulaire de devis, les pages par spécialité, les certifications et un an d'hébergement.",
      },
      {
        question: "Comment montrer la qualité de mon travail en ligne ?",
        answer:
          "Nous créons un portfolio avec slider avant/après pour chaque chantier. Les photos de vos réalisations sont votre meilleur argument commercial. Nous vous conseillons aussi sur la prise de photos de chantier.",
      },
      {
        question: "Peut-on détailler mes différentes spécialités ?",
        answer:
          "Oui, peinture intérieure, ravalement de façade, décoration, enduit, laquage : chaque spécialité a sa propre page optimisée avec explications et photos de réalisations correspondantes.",
      },
      {
        question: "Comment rassurer les clients sur mes qualifications ?",
        answer:
          "Votre site affiche clairement vos certifications (Qualibat, RGE), vos assurances décennale et RC Pro, ainsi que vos vrais avis clients. Cette transparence est décisive pour remporter des chantiers.",
      },
    ],
    caseStudy: {
      client: "Peinture Couleurs & Créations",
      sector: "Peinture en bâtiment — Montpellier",
      challenge:
        "L'artisan avait un excellent savoir-faire mais aucune visibilité en ligne. Ses concurrents avec un site captaient les clients qui cherchaient sur Google. Il perdait des chantiers régulièrement.",
      solution:
        "Création d'un site avec portfolio avant/après, pages par spécialité, certifications Qualibat mises en avant, formulaire de devis et SEO local sur 'peintre Montpellier'.",
      results: [
        "+20 demandes de devis/mois en 3 mois",
        "1ère page Google sur 'peintre Montpellier'",
        "+40% de chiffre d'affaires en 6 mois",
        "Panier moyen +30% (clients mieux qualifiés)",
      ],
      testimonial:
        "Les clients arrivent en ayant déjà vu mes chantiers. Ils savent ce que je fais et sont prêts à payer le juste prix. Plus besoin de me battre sur les tarifs.",
      author: "David Fernandez",
      role: "Gérant, Peinture Couleurs & Créations",
      photo: "/images/testimonials/peintre.webp",
    },
    stats: [
      {
        value: "72%",
        label: "des particuliers cherchent un peintre sur internet",
      },
      {
        value: "3x",
        label: "plus de devis avec un portfolio en ligne",
      },
      {
        value: "65%",
        label: "des clients choisissent sur la base des photos de réalisations",
      },
    ],
    process: [
      {
        step: "01",
        title: "Analyse de votre activité",
        desc: "Nous étudions vos spécialités, vos réalisations phares et votre zone d'intervention pour concevoir un site qui valorise votre savoir-faire.",
      },
      {
        step: "02",
        title: "Portfolio & design professionnel",
        desc: "Création d'un portfolio avant/après, pages par spécialité et mise en avant de vos certifications et assurances.",
      },
      {
        step: "03",
        title: "Devis en ligne & SEO",
        desc: "Intégration du formulaire de devis détaillé, optimisation Google My Business et référencement local.",
      },
      {
        step: "04",
        title: "Lancement & suivi",
        desc: "Mise en ligne, formation à l'ajout de nouvelles réalisations et suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "menuisier",
    name: "Menuisier",
    emoji: "🪵",
    description:
      "Valorisez votre artisanat avec un site mettant en lumière vos créations sur-mesure, votre savoir-faire et un formulaire de devis personnalisé.",
    painPoints: [
      "Savoir-faire artisanal invisible en ligne",
      "Difficulté à justifier les prix du sur-mesure",
      "Concurrence de l'industriel et du low-cost",
      "Pas de galerie de réalisations accessible",
    ],
    solutions: [
      "Portfolio de créations sur-mesure",
      "Pages par type de réalisation",
      "Formulaire de devis personnalisé",
      "SEO local menuisier artisan",
    ],
    features: [
      "Galerie de réalisations HD",
      "Pages par spécialité (cuisine, dressing, escalier...)",
      "Formulaire de devis sur-mesure",
      "Section matériaux et essences de bois",
      "Témoignages clients",
      "SEO local menuisier",
    ],
    cta: "Créer le site de mon atelier de menuiserie",
    faqItems: [
      {
        question: "Combien coûte un site pour un menuisier ?",
        answer:
          "Un site vitrine pour menuisier démarre à 500€. Ce prix inclut la galerie de réalisations, le formulaire de devis, les pages par spécialité, la section matériaux et un an d'hébergement.",
      },
      {
        question: "Comment mettre en valeur mes créations sur-mesure ?",
        answer:
          "Nous créons une galerie HD avec des photos de chaque réalisation : cuisines, dressings, escaliers, meubles. Chaque projet est présenté avec les matériaux utilisés et les contraintes relevées. C'est ce qui justifie le prix du sur-mesure.",
      },
      {
        question: "Peut-on présenter les essences de bois utilisées ?",
        answer:
          "Oui, une section dédiée présente vos matériaux de prédilection : chêne, noyer, hêtre, bois exotiques. Cela éduque le client et valorise la qualité de vos créations par rapport à l'industriel.",
      },
      {
        question: "Le formulaire de devis est-il adapté à la menuiserie ?",
        answer:
          "Absolument. Le client précise le type de projet, les dimensions, l'essence de bois souhaitée et peut joindre des photos ou croquis. Vous recevez des demandes détaillées et qualifiées.",
      },
    ],
    caseStudy: {
      client: "Atelier Bois & Créations",
      sector: "Menuiserie sur-mesure — Strasbourg",
      challenge:
        "L'artisan menuisier avait un carnet de commandes irrégulier. Ses créations étaient magnifiques mais invisibles en ligne. Il perdait des clients face à des concurrents industriels moins chers.",
      solution:
        "Création d'un site artisanal avec galerie de réalisations HD, pages par spécialité, section essences de bois, formulaire de devis et SEO local sur 'menuisier Strasbourg'.",
      results: [
        "+15 demandes de devis/mois qualifiées",
        "1ère page Google sur 'menuisier sur-mesure Strasbourg'",
        "Carnet de commandes rempli 3 mois à l'avance",
        "Panier moyen +50% (clients sensibles à la qualité)",
      ],
      testimonial:
        "Les clients comprennent enfin la valeur du sur-mesure en voyant mes réalisations. Je ne me bats plus sur les prix, je travaille avec des gens qui apprécient l'artisanat.",
      author: "Laurent Keller",
      role: "Maître menuisier, Atelier Bois & Créations",
      photo: "/images/testimonials/menuisier.webp",
    },
    stats: [
      {
        value: "69%",
        label: "des particuliers cherchent un menuisier sur internet",
      },
      {
        value: "4x",
        label: "plus de demandes avec une galerie de réalisations en ligne",
      },
      {
        value: "58%",
        label: "des clients du sur-mesure choisissent sur la qualité, pas le prix",
      },
    ],
    process: [
      {
        step: "01",
        title: "Découverte de votre atelier",
        desc: "Nous échangeons sur vos spécialités, vos réalisations phares et votre clientèle pour concevoir un site qui reflète votre artisanat.",
      },
      {
        step: "02",
        title: "Galerie & design artisanal",
        desc: "Création d'un design chaleureux avec galerie HD, pages par spécialité et section essences de bois.",
      },
      {
        step: "03",
        title: "Devis en ligne & SEO",
        desc: "Intégration du formulaire de devis personnalisé, optimisation Google My Business et référencement local.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à l'ajout de nouvelles réalisations et suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "carreleur",
    name: "Carreleur",
    emoji: "🔲",
    description:
      "Attirez des chantiers qualifiés avec un site présentant vos réalisations carrelage, vos spécialités et un formulaire de devis en ligne.",
    painPoints: [
      "Réalisations invisibles en ligne",
      "Concurrence forte des grandes surfaces",
      "Difficulté à trouver des chantiers réguliers",
      "Pas de preuve de qualité accessible",
    ],
    solutions: [
      "Portfolio de réalisations carrelage HD",
      "Pages par type de pose (salle de bain, terrasse, sol...)",
      "Formulaire de devis avec upload photos",
      "SEO local carreleur optimisé",
    ],
    features: [
      "Portfolio avant/après carrelage",
      "Pages par type de pose",
      "Formulaire de devis avec photos",
      "Section matériaux et tendances",
      "Avis clients vérifiés",
      "SEO local carreleur",
    ],
    cta: "Créer le site de mon entreprise de carrelage",
    faqItems: [
      {
        question: "Combien coûte un site pour un carreleur ?",
        answer:
          "Un site vitrine pour carreleur démarre à 500€. Ce prix inclut le portfolio avant/après, le formulaire de devis, les pages par type de pose, les avis clients et un an d'hébergement.",
      },
      {
        question: "Comment montrer la qualité de mes poses ?",
        answer:
          "Nous créons un portfolio avant/après avec des photos HD de vos réalisations : salles de bain, terrasses, sols, crédences. Les finitions et détails sont mis en valeur pour démontrer votre expertise.",
      },
      {
        question: "Peut-on présenter les différents matériaux ?",
        answer:
          "Oui, une section dédiée présente les matériaux que vous maîtrisez : grès cérame, faïence, mosaïque, pierre naturelle, carreaux de ciment. Cela aide le client à choisir et valorise votre polyvalence.",
      },
      {
        question: "Le formulaire de devis est-il adapté au carrelage ?",
        answer:
          "Absolument. Le client précise le type de pièce, la surface, le matériau souhaité et peut joindre des photos du support existant. Vous recevez des demandes précises pour chiffrer rapidement.",
      },
    ],
    caseStudy: {
      client: "Carrelage Pro Côte d'Azur",
      sector: "Carrelage — Nice et alentours",
      challenge:
        "Le carreleur avait un excellent niveau de finition mais aucune présence en ligne. Les particuliers rénovant leur salle de bain cherchaient sur Google et trouvaient ses concurrents.",
      solution:
        "Création d'un site avec portfolio avant/après, pages par type de pose, section matériaux tendances, formulaire de devis et SEO local sur 'carreleur Nice'.",
      results: [
        "+18 demandes de devis/mois en 3 mois",
        "1ère page Google sur 'carreleur Nice'",
        "+45% de chiffre d'affaires en 6 mois",
        "90% des devis acceptés (clients qualifiés)",
      ],
      testimonial:
        "Mon site montre ce que je sais faire mieux que n'importe quel discours. Les clients me contactent en ayant déjà choisi leur style. Les chantiers s'enchaînent sans interruption.",
      author: "Marco Rossi",
      role: "Gérant, Carrelage Pro Côte d'Azur",
      photo: "/images/testimonials/carreleur.webp",
    },
    stats: [
      {
        value: "74%",
        label: "des particuliers en rénovation cherchent un carreleur sur Google",
      },
      {
        value: "3x",
        label: "plus de devis avec un portfolio avant/après",
      },
      {
        value: "62%",
        label: "des clients choisissent sur la base des photos de réalisations",
      },
    ],
    process: [
      {
        step: "01",
        title: "Analyse de votre activité",
        desc: "Nous étudions vos spécialités, réalisations et zone d'intervention pour concevoir un site qui met en valeur votre savoir-faire.",
      },
      {
        step: "02",
        title: "Portfolio & design",
        desc: "Création d'un portfolio avant/après soigné, pages par type de pose et section matériaux tendances.",
      },
      {
        step: "03",
        title: "Devis en ligne & SEO",
        desc: "Intégration du formulaire de devis avec upload photos, optimisation Google My Business et référencement local.",
      },
      {
        step: "04",
        title: "Lancement & suivi",
        desc: "Mise en ligne, formation à l'ajout de nouvelles réalisations et suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "chauffagiste-climatisation",
    name: "Chauffagiste / Climatisation",
    emoji: "🔥",
    description:
      "Générez des demandes d'intervention et de devis grâce à un site professionnel présentant vos services, vos certifications et un numéro d'urgence.",
    painPoints: [
      "Peu visible sur les recherches d'urgence",
      "Difficile de prouver ses certifications (RGE, Qualibat)",
      "Concurrence forte sur le local",
      "Saisonnalité de l'activité difficile à gérer",
    ],
    solutions: [
      "Site avec numéro d'urgence cliquable",
      "Certifications RGE et Qualibat mises en avant",
      "Pages par service (chaudière, clim, pompe à chaleur)",
      "SEO local chauffagiste / climaticien",
    ],
    features: [
      "Numéro d'urgence cliquable",
      "Certifications RGE / Qualibat affichées",
      "Pages par type de service",
      "Formulaire de devis en ligne",
      "Section aides financières (MaPrimeRénov')",
      "SEO local chauffagiste",
    ],
    cta: "Créer le site de mon entreprise de chauffage",
    faqItems: [
      {
        question: "Combien coûte un site pour un chauffagiste ?",
        answer:
          "Un site pour chauffagiste/climaticien démarre à 500€. Ce prix inclut les pages services, les certifications, le formulaire de devis, la section aides financières et un an d'hébergement.",
      },
      {
        question: "Peut-on mettre en avant nos certifications RGE ?",
        answer:
          "Oui, vos certifications RGE, Qualibat et QualiPAC sont affichées de manière visible sur toutes les pages. C'est un critère décisif pour les clients qui veulent bénéficier des aides financières.",
      },
      {
        question: "Peut-on informer sur les aides financières ?",
        answer:
          "Absolument. Une section dédiée présente MaPrimeRénov', les CEE et les aides locales. Les clients comprennent qu'ils peuvent financer une partie des travaux, ce qui déclenche plus de demandes.",
      },
      {
        question: "Le site sera-t-il visible en cas de panne ?",
        answer:
          "Oui, nous optimisons votre site pour les recherches d'urgence ('chauffagiste urgence + ville', 'panne chaudière + ville'). Le numéro est cliquable pour un appel immédiat sur mobile.",
      },
    ],
    caseStudy: {
      client: "Confort Thermique Services",
      sector: "Chauffage & climatisation — Grenoble",
      challenge:
        "L'entreprise avait du mal à remplir son planning en intersaison. Les certifications RGE n'étaient pas visibles et les prospects ne savaient pas qu'ils pouvaient bénéficier d'aides financières.",
      solution:
        "Création d'un site professionnel avec pages par service, certifications mises en avant, section MaPrimeRénov', formulaire de devis et SEO local sur 'chauffagiste Grenoble'.",
      results: [
        "+30 demandes de devis/mois",
        "Planning rempli même en intersaison",
        "1ère page Google sur 'chauffagiste Grenoble'",
        "+55% de chiffre d'affaires en 8 mois",
      ],
      testimonial:
        "La section sur les aides financières a tout changé. Les clients nous contactent en sachant déjà qu'ils peuvent être aidés. Le planning ne désemplit plus, même hors saison.",
      author: "Patrick Girard",
      role: "Gérant, Confort Thermique Services",
      photo: "/images/testimonials/chauffagiste.webp",
    },
    stats: [
      {
        value: "80%",
        label: "des particuliers cherchent un chauffagiste sur Google",
      },
      {
        value: "3x",
        label: "plus de devis avec les aides financières affichées",
      },
      {
        value: "67%",
        label: "des clients vérifient la certification RGE avant de contacter",
      },
    ],
    process: [
      {
        step: "01",
        title: "Analyse de votre activité",
        desc: "Nous étudions vos services, certifications, zone d'intervention et clientèle pour concevoir un site qui génère des demandes qualifiées.",
      },
      {
        step: "02",
        title: "Design & certifications",
        desc: "Création d'un site professionnel avec pages services, certifications visibles et section aides financières.",
      },
      {
        step: "03",
        title: "Devis en ligne & SEO",
        desc: "Intégration du formulaire de devis, optimisation Google My Business et référencement local.",
      },
      {
        step: "04",
        title: "Lancement & suivi",
        desc: "Mise en ligne, formation à la gestion des demandes et suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "agence-de-communication",
    name: "Agence de communication",
    emoji: "📢",
    description:
      "Démontrez votre expertise créative avec un site portfolio percutant présentant vos réalisations, vos services et vos études de cas clients.",
    painPoints: [
      "Site qui ne reflète pas la créativité de l'agence",
      "Portfolio peu mis en valeur",
      "Difficulté à attirer des clients premium",
      "Pas de preuve sociale convaincante",
    ],
    solutions: [
      "Site portfolio créatif et immersif",
      "Études de cas clients détaillées",
      "Pages services par expertise",
      "Blog stratégie & tendances",
    ],
    features: [
      "Portfolio immersif avec filtres",
      "Études de cas détaillées",
      "Pages par expertise (branding, digital, social...)",
      "Blog stratégie communication",
      "Section équipe créative",
      "SEO agence de communication",
    ],
    cta: "Créer le site de mon agence",
    faqItems: [
      {
        question: "Combien coûte un site pour une agence de communication ?",
        answer:
          "Un site portfolio pour agence de communication démarre à 800€. Ce prix inclut le portfolio interactif, les études de cas, les pages par expertise, le blog et un an d'hébergement.",
      },
      {
        question: "Comment le site reflétera-t-il notre créativité ?",
        answer:
          "Nous concevons un site qui EST votre meilleure réalisation. Animations soignées, transitions fluides, galerie immersive : votre site prouve votre talent avant même que le prospect ne lise une ligne.",
      },
      {
        question: "Peut-on présenter des études de cas détaillées ?",
        answer:
          "Oui, chaque étude de cas présente le brief, la stratégie, les livrables et les résultats chiffrés. C'est le format le plus convaincant pour démontrer votre valeur ajoutée et justifier vos tarifs.",
      },
      {
        question: "Le blog peut-il attirer des prospects ?",
        answer:
          "Absolument. Des articles sur les tendances com, le branding, le social media attirent du trafic qualifié et positionnent votre agence comme experte. C'est un excellent levier d'acquisition organique.",
      },
    ],
    caseStudy: {
      client: "Studio Graphène",
      sector: "Agence de communication — Paris",
      challenge:
        "L'agence avait un site daté qui ne reflétait pas la qualité de ses réalisations. Les prospects premium allaient chez des concurrents avec un meilleur site. Le portfolio n'était pas interactif.",
      solution:
        "Création d'un site portfolio immersif avec galerie filtrée par catégorie, études de cas détaillées, animations Framer Motion, blog stratégie et pages par expertise.",
      results: [
        "+60% de demandes prospects premium en 3 mois",
        "Panier moyen client +35%",
        "3 prix créatifs remportés mis en avant",
        "Temps moyen sur site : 3min45",
      ],
      testimonial:
        "Notre site est enfin à la hauteur de notre travail. Les prospects arrivent impressionnés et signent plus vite. ConvertiLab a compris que notre site devait être notre meilleure vitrine.",
      author: "Léa Moreau",
      role: "Directrice créative, Studio Graphène",
      photo: "/images/testimonials/agence-communication.webp",
    },
    stats: [
      {
        value: "87%",
        label: "des clients visitent le site d'une agence avant de la contacter",
      },
      {
        value: "4x",
        label: "plus de demandes avec un portfolio interactif",
      },
      {
        value: "71%",
        label: "des décideurs jugent une agence sur la qualité de son propre site",
      },
    ],
    process: [
      {
        step: "01",
        title: "Immersion dans votre agence",
        desc: "Nous analysons votre positionnement, vos meilleures réalisations et votre clientèle cible pour concevoir un site qui incarne votre créativité.",
      },
      {
        step: "02",
        title: "Design & portfolio immersif",
        desc: "Création d'un design percutant avec portfolio interactif, études de cas et animations qui reflètent votre ADN créatif.",
      },
      {
        step: "03",
        title: "Blog & SEO",
        desc: "Mise en place du blog stratégie, optimisation SEO et intégration des réseaux sociaux.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à l'ajout de projets et études de cas, suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "cabinet-recrutement",
    name: "Cabinet de recrutement",
    emoji: "🤝",
    description:
      "Attirez les meilleurs talents et les entreprises clientes avec un site professionnel présentant vos offres, votre expertise sectorielle et vos résultats.",
    painPoints: [
      "Difficulté à attirer des candidats qualifiés",
      "Site qui ne différencie pas des job boards",
      "Expertise sectorielle peu visible",
      "Pas de preuve de résultats",
    ],
    solutions: [
      "Site double cible (entreprises + candidats)",
      "Pages par secteur d'expertise",
      "Espace offres d'emploi intégré",
      "Études de cas recrutement réussies",
    ],
    features: [
      "Espace offres d'emploi",
      "Formulaire candidature en ligne",
      "Pages par secteur d'expertise",
      "Études de cas placement",
      "Blog RH et emploi",
      "SEO cabinet recrutement",
    ],
    cta: "Créer le site de mon cabinet de recrutement",
    faqItems: [
      {
        question: "Combien coûte un site pour un cabinet de recrutement ?",
        answer:
          "Un site pour cabinet de recrutement démarre à 800€. Ce prix inclut l'espace offres d'emploi, le formulaire candidature, les pages par secteur, les études de cas et un an d'hébergement.",
      },
      {
        question: "Peut-on gérer les offres d'emploi depuis le site ?",
        answer:
          "Oui, un panneau d'administration vous permet de publier, modifier et archiver vos offres d'emploi. Les candidats postulent directement via le site avec CV et lettre de motivation.",
      },
      {
        question: "Comment attirer à la fois candidats et entreprises ?",
        answer:
          "Le site est conçu avec deux parcours distincts : un espace entreprise (expertise, études de cas, formulaire de brief) et un espace candidat (offres, candidature spontanée, conseils carrière).",
      },
      {
        question: "Peut-on publier des articles RH ?",
        answer:
          "Absolument. Un blog RH avec des articles sur le marché de l'emploi, les tendances recrutement et les conseils carrière attire du trafic qualifié et renforce votre position d'expert.",
      },
    ],
    caseStudy: {
      client: "Talent Connect",
      sector: "Cabinet de recrutement IT — Paris",
      challenge:
        "Le cabinet peinait à attirer des candidats tech qualifiés. Le site était générique et ne mettait pas en avant l'expertise IT. Les entreprises clientes ne voyaient pas la différence avec un job board.",
      solution:
        "Création d'un site double parcours (entreprises/candidats) avec offres d'emploi filtrables, pages par expertise tech, études de cas placements réussis et blog RH tech.",
      results: [
        "+200% de candidatures qualifiées en 4 mois",
        "+40% de clients entreprises en 6 mois",
        "Délai moyen de placement réduit de 30%",
        "85% de taux de satisfaction client",
      ],
      testimonial:
        "Notre site attire enfin les bons profils. Les candidats tech postulent directement et les entreprises comprennent notre valeur ajoutée. Le ROI est énorme.",
      author: "Nicolas Petit",
      role: "Fondateur, Talent Connect",
      photo: "/images/testimonials/recrutement.webp",
    },
    stats: [
      {
        value: "78%",
        label: "des candidats consultent le site du cabinet avant de postuler",
      },
      {
        value: "3x",
        label: "plus de candidatures avec un espace emploi bien conçu",
      },
      {
        value: "65%",
        label: "des entreprises choisissent un cabinet après avoir vu son site",
      },
    ],
    process: [
      {
        step: "01",
        title: "Analyse de votre cabinet",
        desc: "Nous étudions vos secteurs d'expertise, votre méthodologie et vos cibles (entreprises et candidats) pour concevoir un site percutant.",
      },
      {
        step: "02",
        title: "Design & double parcours",
        desc: "Création d'un site avec parcours entreprise et candidat, espace offres d'emploi et études de cas.",
      },
      {
        step: "03",
        title: "Blog RH & SEO",
        desc: "Mise en place du blog, optimisation SEO sur vos secteurs d'expertise et intégration des réseaux sociaux.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à la gestion des offres et suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "centre-formation-professionnelle",
    name: "Centre de formation professionnelle",
    emoji: "🎓",
    description:
      "Remplissez vos sessions de formation avec un site présentant votre catalogue, vos certifications Qualiopi et un formulaire d'inscription en ligne.",
    painPoints: [
      "Catalogue de formations peu visible en ligne",
      "Inscription fastidieuse par téléphone/email",
      "Certification Qualiopi peu mise en avant",
      "Difficulté à remplir les sessions",
    ],
    solutions: [
      "Catalogue de formations en ligne filtrable",
      "Formulaire d'inscription en ligne",
      "Certification Qualiopi mise en avant",
      "SEO formation professionnelle",
    ],
    features: [
      "Catalogue formations avec filtres",
      "Fiches formation détaillées",
      "Formulaire d'inscription en ligne",
      "Certification Qualiopi affichée",
      "Section financement (CPF, OPCO)",
      "SEO centre de formation",
    ],
    cta: "Créer le site de mon centre de formation",
    faqItems: [
      {
        question: "Combien coûte un site pour un centre de formation ?",
        answer:
          "Un site pour centre de formation démarre à 800€. Ce prix inclut le catalogue filtrable, les fiches formation, le formulaire d'inscription, la certification Qualiopi et un an d'hébergement.",
      },
      {
        question: "Peut-on présenter chaque formation en détail ?",
        answer:
          "Oui, chaque formation a sa propre page avec programme détaillé, durée, tarif, prérequis, objectifs pédagogiques et modalités d'évaluation. C'est conforme aux exigences Qualiopi et facilite la décision.",
      },
      {
        question: "Comment informer sur les financements possibles ?",
        answer:
          "Une section dédiée explique les dispositifs de financement : CPF, OPCO, Pôle Emploi, plan de formation entreprise. Les stagiaires comprennent qu'ils peuvent financer leur formation, ce qui lève le frein budgétaire.",
      },
      {
        question: "Les stagiaires peuvent-ils s'inscrire en ligne ?",
        answer:
          "Oui, un formulaire d'inscription en ligne permet de choisir la formation, la session et de soumettre sa demande. Vous recevez les inscriptions et pouvez valider ou recontacter le stagiaire.",
      },
    ],
    caseStudy: {
      client: "FormaPro Academy",
      sector: "Formation professionnelle — Lyon",
      challenge:
        "Le centre de formation avait du mal à remplir ses sessions. Le catalogue n'était pas en ligne, les inscriptions se faisaient par téléphone et la certification Qualiopi n'était pas visible.",
      solution:
        "Création d'un site avec catalogue filtrable, fiches formation complètes, formulaire d'inscription, section financement CPF/OPCO et certification Qualiopi mise en avant. SEO sur 'formation professionnelle Lyon'.",
      results: [
        "+75% d'inscriptions en ligne en 4 mois",
        "Taux de remplissage sessions : 95%",
        "1ère page Google sur 5 formations clés",
        "+40% de chiffre d'affaires en 6 mois",
      ],
      testimonial:
        "Nos sessions sont pleines depuis qu'on a le site. Les stagiaires s'inscrivent en ligne, comprennent les financements et arrivent préparés. Un vrai gain de temps pour nous.",
      author: "Nathalie Durand",
      role: "Directrice, FormaPro Academy",
      photo: "/images/testimonials/formation.webp",
    },
    stats: [
      {
        value: "82%",
        label: "des professionnels cherchent une formation sur Google",
      },
      {
        value: "3x",
        label: "plus d'inscriptions avec un catalogue en ligne",
      },
      {
        value: "70%",
        label: "des stagiaires vérifient la certification Qualiopi avant de s'inscrire",
      },
    ],
    process: [
      {
        step: "01",
        title: "Analyse de votre offre",
        desc: "Nous étudions votre catalogue de formations, vos certifications et votre public cible pour concevoir un site efficace.",
      },
      {
        step: "02",
        title: "Catalogue & fiches formation",
        desc: "Création d'un catalogue filtrable avec fiches détaillées par formation, conformes aux exigences Qualiopi.",
      },
      {
        step: "03",
        title: "Inscription & SEO",
        desc: "Intégration du formulaire d'inscription, section financement et optimisation SEO par formation.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à la gestion du catalogue et suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "societe-nettoyage",
    name: "Société de nettoyage",
    emoji: "🧹",
    description:
      "Décrochez des contrats de nettoyage avec un site professionnel présentant vos prestations, vos références clients et un formulaire de devis en ligne.",
    painPoints: [
      "Difficulté à décrocher des contrats B2B",
      "Pas de références clients visibles",
      "Concurrence forte sur les prix",
      "Image de marque peu professionnelle",
    ],
    solutions: [
      "Site pro avec références clients",
      "Pages par type de prestation",
      "Formulaire de devis B2B détaillé",
      "SEO local société de nettoyage",
    ],
    features: [
      "Pages par prestation (bureaux, copro, vitres...)",
      "Références clients et logos",
      "Formulaire de devis B2B",
      "Certifications qualité affichées",
      "Section éco-responsabilité",
      "SEO local nettoyage",
    ],
    cta: "Créer le site de ma société de nettoyage",
    faqItems: [
      {
        question: "Combien coûte un site pour une société de nettoyage ?",
        answer:
          "Un site pour société de nettoyage démarre à 500€. Ce prix inclut les pages prestations, les références clients, le formulaire de devis B2B, les certifications et un an d'hébergement.",
      },
      {
        question: "Peut-on afficher nos références clients ?",
        answer:
          "Oui, une section dédiée affiche les logos de vos clients (avec leur accord), les types de locaux entretenus et les témoignages. C'est l'argument le plus convaincant pour décrocher de nouveaux contrats B2B.",
      },
      {
        question: "Le formulaire de devis est-il adapté au B2B ?",
        answer:
          "Absolument. Le formulaire permet de préciser le type de locaux, la surface, la fréquence souhaitée et les prestations spécifiques. Vous recevez des demandes détaillées pour chiffrer précisément.",
      },
      {
        question: "Peut-on mettre en avant notre démarche éco-responsable ?",
        answer:
          "Oui, une section dédiée présente vos produits écologiques, votre gestion des déchets et vos certifications environnementales. C'est un critère de choix de plus en plus important pour les entreprises.",
      },
    ],
    caseStudy: {
      client: "Net & Clean Pro",
      sector: "Nettoyage professionnel — Lille",
      challenge:
        "L'entreprise dépendait de quelques gros contrats et avait du mal à en décrocher de nouveaux. Le site existant était un simple page web sans références ni preuve de professionnalisme.",
      solution:
        "Création d'un site professionnel avec pages par prestation, logos clients, formulaire de devis B2B, certifications qualité et section éco-responsable. SEO sur 'société nettoyage Lille'.",
      results: [
        "+12 nouveaux contrats B2B en 6 mois",
        "+35% de chiffre d'affaires annuel",
        "1ère page Google sur 'nettoyage bureaux Lille'",
        "Portfolio client diversifié (moins de dépendance)",
      ],
      testimonial:
        "Le site nous a donné une image professionnelle qui correspond à la qualité de notre travail. Les prospects nous prennent au sérieux dès le premier contact. Les contrats arrivent régulièrement.",
      author: "Ahmed Benali",
      role: "Directeur, Net & Clean Pro",
      photo: "/images/testimonials/nettoyage.webp",
    },
    stats: [
      {
        value: "75%",
        label: "des entreprises cherchent un prestataire de nettoyage en ligne",
      },
      {
        value: "3x",
        label: "plus de contrats avec des références clients visibles",
      },
      {
        value: "68%",
        label: "des décideurs vérifient le site avant de demander un devis",
      },
    ],
    process: [
      {
        step: "01",
        title: "Analyse de votre activité",
        desc: "Nous étudions vos prestations, références clients et positionnement pour concevoir un site qui inspire confiance aux décideurs.",
      },
      {
        step: "02",
        title: "Design & références",
        desc: "Création d'un site professionnel avec pages prestations, logos clients, certifications et section éco-responsable.",
      },
      {
        step: "03",
        title: "Devis B2B & SEO",
        desc: "Intégration du formulaire de devis B2B, optimisation Google My Business et référencement local.",
      },
      {
        step: "04",
        title: "Lancement & suivi",
        desc: "Mise en ligne, formation à la gestion des demandes et suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "transport-logistique",
    name: "Transport / Logistique",
    emoji: "🚛",
    description:
      "Attirez de nouveaux clients professionnels avec un site présentant votre flotte, vos services logistiques et un formulaire de demande de devis transport.",
    painPoints: [
      "Pas de visibilité auprès des expéditeurs",
      "Flotte et services peu mis en valeur",
      "Concurrence forte des grandes plateformes",
      "Image de marque pas à la hauteur",
    ],
    solutions: [
      "Site professionnel avec présentation flotte",
      "Pages par service logistique",
      "Formulaire de demande de cotation",
      "SEO transport et logistique",
    ],
    features: [
      "Présentation de la flotte",
      "Pages par service (transport, stockage, dernier km...)",
      "Formulaire de demande de cotation",
      "Certifications et agréments affichés",
      "Section couverture géographique",
      "SEO transport logistique",
    ],
    cta: "Créer le site de mon entreprise de transport",
    faqItems: [
      {
        question: "Combien coûte un site pour une entreprise de transport ?",
        answer:
          "Un site pour entreprise de transport/logistique démarre à 800€. Ce prix inclut la présentation de la flotte, les pages services, le formulaire de cotation, les certifications et un an d'hébergement.",
      },
      {
        question: "Peut-on présenter notre flotte de véhicules ?",
        answer:
          "Oui, une section dédiée présente vos véhicules avec photos, capacités, types de marchandises et certifications (frigorifique, ADR, etc.). Cela rassure les expéditeurs sur votre capacité à traiter leurs envois.",
      },
      {
        question: "Le formulaire de cotation est-il adapté au transport ?",
        answer:
          "Absolument. Le formulaire permet de préciser l'origine, la destination, le type de marchandise, le volume/poids et la date souhaitée. Vous recevez des demandes précises pour chiffrer rapidement.",
      },
      {
        question: "Peut-on afficher notre couverture géographique ?",
        answer:
          "Oui, une carte interactive montre votre couverture géographique (national, régional, international). Les expéditeurs voient immédiatement si vous desservez leur zone.",
      },
    ],
    caseStudy: {
      client: "Trans Express Sud",
      sector: "Transport routier — Marseille",
      challenge:
        "L'entreprise de transport avait une flotte de 25 véhicules mais aucune présence en ligne. Les expéditeurs ne la trouvaient pas et les véhicules roulaient parfois à vide sur certaines lignes.",
      solution:
        "Création d'un site professionnel avec présentation de la flotte, pages par service, formulaire de cotation, couverture géographique et SEO sur 'transport routier Marseille'.",
      results: [
        "+20 demandes de cotation/mois",
        "Taux de remplissage flotte +25%",
        "1ère page Google sur 'transport Marseille'",
        "+30% de chiffre d'affaires en 8 mois",
      ],
      testimonial:
        "Le site nous a ouvert de nouveaux marchés. Des expéditeurs qui ne nous connaissaient pas nous contactent chaque semaine. Les véhicules roulent à plein maintenant.",
      author: "Michel Castaing",
      role: "Directeur, Trans Express Sud",
      photo: "/images/testimonials/transport.webp",
    },
    stats: [
      {
        value: "72%",
        label: "des expéditeurs cherchent un transporteur sur internet",
      },
      {
        value: "3x",
        label: "plus de demandes avec un formulaire de cotation en ligne",
      },
      {
        value: "64%",
        label: "des décideurs logistiques consultent le site avant de contacter",
      },
    ],
    process: [
      {
        step: "01",
        title: "Analyse de votre activité",
        desc: "Nous étudions votre flotte, vos services, votre couverture et vos cibles pour concevoir un site qui attire des expéditeurs qualifiés.",
      },
      {
        step: "02",
        title: "Design & présentation flotte",
        desc: "Création d'un site professionnel avec présentation de la flotte, pages services et couverture géographique.",
      },
      {
        step: "03",
        title: "Cotation & SEO",
        desc: "Intégration du formulaire de cotation, optimisation Google My Business et référencement transport.",
      },
      {
        step: "04",
        title: "Lancement & suivi",
        desc: "Mise en ligne, formation à la gestion des demandes et suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "opticien",
    name: "Opticien",
    emoji: "👓",
    description:
      "Attirez plus de clients dans votre magasin d'optique avec un site moderne présentant vos collections, vos services et la prise de RDV en ligne.",
    painPoints: [
      "Concurrence forte des opticiens en ligne",
      "Collections de montures non visibles sur le web",
      "Pas de prise de RDV en ligne",
      "Faible visibilité locale",
    ],
    solutions: [
      "Catalogue montures en ligne avec photos",
      "Prise de RDV examen de vue en ligne",
      "Page services (lentilles, basse vision, sport...)",
      "SEO local opticien optimisé",
    ],
    features: [
      "Catalogue montures avec filtres",
      "Prise de RDV examen de vue",
      "Pages par service optique",
      "Section mutuelles et remboursements",
      "Galerie photos du magasin",
      "SEO local opticien",
    ],
    cta: "Créer le site de mon magasin d'optique",
    faqItems: [
      {
        question: "Combien coûte un site pour un opticien ?",
        answer:
          "Un site pour opticien démarre à 500€. Ce prix inclut le catalogue montures, la prise de RDV, les pages services, la section mutuelles et un an d'hébergement. La vente en ligne de lentilles peut être ajoutée en option.",
      },
      {
        question: "Peut-on présenter nos collections de montures ?",
        answer:
          "Oui, un catalogue en ligne avec photos, filtres par marque/style/prix permet à vos clients de découvrir vos collections avant de se déplacer. Cela génère du trafic en magasin qualifié.",
      },
      {
        question: "Les clients peuvent-ils prendre RDV pour un examen de vue ?",
        answer:
          "Absolument. Un système de prise de rendez-vous en ligne permet de choisir le type de prestation (examen de vue, adaptation lentilles) et le créneau. Vous gérez votre planning simplement.",
      },
      {
        question: "Peut-on informer sur les remboursements mutuelles ?",
        answer:
          "Oui, une section dédiée explique les remboursements Sécurité sociale et mutuelles, le 100% Santé et les aides possibles. C'est une information très recherchée par les patients.",
      },
    ],
    caseStudy: {
      client: "Optique du Centre",
      sector: "Opticien — Toulouse centre",
      challenge:
        "Le magasin souffrait de la concurrence en ligne et perdait des clients. Les collections n'étaient pas visibles sur le web et les rendez-vous se prenaient uniquement par téléphone.",
      solution:
        "Création d'un site avec catalogue montures filtrable, prise de RDV en ligne, section mutuelles, galerie du magasin et SEO local sur 'opticien Toulouse centre'.",
      results: [
        "+40% de RDV examen de vue en 3 mois",
        "+25% de fréquentation en magasin",
        "1ère page Google sur 'opticien Toulouse centre'",
        "+30% de ventes de montures premium",
      ],
      testimonial:
        "Les clients arrivent en ayant déjà repéré des montures sur notre site. Ils passent moins de temps à choisir et achètent plus de modèles premium. Le site a relancé notre activité.",
      author: "Sophie Fabre",
      role: "Gérante, Optique du Centre",
      photo: "/images/testimonials/opticien.webp",
    },
    stats: [
      {
        value: "70%",
        label: "des porteurs de lunettes cherchent un opticien sur Google",
      },
      {
        value: "3x",
        label: "plus de RDV avec un système de réservation en ligne",
      },
      {
        value: "65%",
        label: "des clients consultent les collections en ligne avant de se déplacer",
      },
    ],
    process: [
      {
        step: "01",
        title: "Découverte de votre magasin",
        desc: "Nous analysons vos collections, services et clientèle pour concevoir un site qui génère du trafic en magasin.",
      },
      {
        step: "02",
        title: "Catalogue & design",
        desc: "Création d'un catalogue montures élégant avec filtres, photos HD et pages par service optique.",
      },
      {
        step: "03",
        title: "RDV en ligne & SEO",
        desc: "Intégration de la prise de RDV, section mutuelles et optimisation SEO local.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à la gestion du catalogue et suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "pharmacie",
    name: "Pharmacie",
    emoji: "💊",
    description:
      "Fidélisez vos patients avec un site présentant vos services, vos horaires de garde, vos spécialités et la possibilité de commander en ligne.",
    painPoints: [
      "Horaires de garde introuvables en ligne",
      "Services spécialisés peu connus",
      "Concurrence des pharmacies en ligne",
      "Pas de relation digitale avec les patients",
    ],
    solutions: [
      "Site avec horaires de garde en temps réel",
      "Pages par service spécialisé",
      "Click & collect ordonnances",
      "SEO local pharmacie optimisé",
    ],
    features: [
      "Horaires et gardes en temps réel",
      "Pages par service (vaccination, orthopédie, nutrition...)",
      "Click & collect ordonnances",
      "Section conseils santé",
      "Présentation de l'équipe",
      "SEO local pharmacie",
    ],
    cta: "Créer le site de ma pharmacie",
    faqItems: [
      {
        question: "Combien coûte un site pour une pharmacie ?",
        answer:
          "Un site pour pharmacie démarre à 500€. Ce prix inclut les horaires de garde, les pages services, le click & collect, la section conseils santé et un an d'hébergement.",
      },
      {
        question: "Peut-on afficher les horaires de garde ?",
        answer:
          "Oui, vos horaires d'ouverture et de garde sont clairement affichés et facilement modifiables. C'est l'information la plus recherchée par les patients et un excellent levier SEO local.",
      },
      {
        question: "Peut-on proposer le click & collect d'ordonnances ?",
        answer:
          "Absolument. Les patients envoient leur ordonnance en photo via le site, vous préparez la commande et ils la récupèrent sans attente. Cela fluidifie le service et fidélise la clientèle.",
      },
      {
        question: "Peut-on présenter nos spécialités ?",
        answer:
          "Oui, vaccination, orthopédie, nutrition, aromathérapie, maintien à domicile : chaque spécialité a sa page dédiée. Cela attire les patients qui recherchent ces services spécifiques.",
      },
    ],
    caseStudy: {
      client: "Pharmacie du Parc",
      sector: "Pharmacie — Annecy",
      challenge:
        "La pharmacie avait développé des services spécialisés (nutrition, aromathérapie, orthopédie) mais les patients n'en avaient pas connaissance. Les gardes étaient introuvables en ligne.",
      solution:
        "Création d'un site avec horaires de garde, pages par spécialité, click & collect ordonnances, conseils santé et SEO local sur 'pharmacie Annecy'.",
      results: [
        "+35% de fréquentation en 4 mois",
        "+60% de patients en nutrition et aromathérapie",
        "1ère page Google sur 'pharmacie Annecy'",
        "150 ordonnances click & collect/mois",
      ],
      testimonial:
        "Nos patients découvrent nos services spécialisés grâce au site. Le click & collect est un succès, les gens adorent ne plus attendre. C'est un vrai plus pour notre officine.",
      author: "Dr. Anne-Marie Petit",
      role: "Pharmacienne titulaire, Pharmacie du Parc",
      photo: "/images/testimonials/pharmacie.webp",
    },
    stats: [
      {
        value: "85%",
        label: "des patients cherchent une pharmacie de garde sur Google",
      },
      {
        value: "3x",
        label: "plus de fréquentation avec des services visibles en ligne",
      },
      {
        value: "72%",
        label: "des patients apprécient le click & collect en pharmacie",
      },
    ],
    process: [
      {
        step: "01",
        title: "Découverte de votre officine",
        desc: "Nous analysons vos services, spécialités et clientèle pour concevoir un site qui fidélise vos patients et en attire de nouveaux.",
      },
      {
        step: "02",
        title: "Design & services",
        desc: "Création d'un site professionnel avec horaires de garde, pages par spécialité et présentation de l'équipe.",
      },
      {
        step: "03",
        title: "Click & collect & SEO",
        desc: "Mise en place du click & collect ordonnances, section conseils santé et optimisation SEO local.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à la gestion des horaires et du click & collect, suivi pendant 30 jours.",
      },
    ],
  },
  {
    slug: "librairie",
    name: "Librairie",
    emoji: "📚",
    description:
      "Faites vivre votre librairie en ligne avec un site présentant vos coups de coeur, vos événements littéraires et la commande de livres en ligne.",
    painPoints: [
      "Concurrence écrasante d'Amazon",
      "Coups de coeur et sélections non visibles",
      "Événements littéraires peu promus",
      "Pas de commande en ligne possible",
    ],
    solutions: [
      "Site avec coups de coeur et sélections",
      "Page événements littéraires",
      "Commande en ligne avec retrait en magasin",
      "Blog chroniques et recommandations",
    ],
    features: [
      "Coups de coeur et sélections thématiques",
      "Page événements (dédicaces, lectures...)",
      "Commande en ligne & retrait magasin",
      "Blog chroniques littéraires",
      "Newsletter recommandations",
      "SEO local librairie",
    ],
    cta: "Créer le site de ma librairie",
    faqItems: [
      {
        question: "Combien coûte un site pour une librairie ?",
        answer:
          "Un site pour librairie démarre à 500€. Ce prix inclut les coups de coeur, la page événements, la commande en ligne avec retrait, le blog et un an d'hébergement.",
      },
      {
        question: "Peut-on concurrencer Amazon avec un site ?",
        answer:
          "L'objectif n'est pas de concurrencer Amazon sur la logistique, mais de proposer ce qu'il ne peut pas : vos conseils personnalisés, vos sélections, vos événements et le lien humain. Votre site valorise cette différence.",
      },
      {
        question: "Les clients peuvent-ils commander et retirer en magasin ?",
        answer:
          "Oui, le système click & collect permet de commander un livre en ligne et de le retirer en magasin. C'est le meilleur compromis entre la commodité du digital et le plaisir de la librairie.",
      },
      {
        question: "Peut-on promouvoir nos événements littéraires ?",
        answer:
          "Absolument. Une page dédiée présente vos prochains événements (dédicaces, lectures, clubs de lecture) avec inscription en ligne. La newsletter informe vos lecteurs fidèles des nouveautés.",
      },
    ],
    caseStudy: {
      client: "Librairie Les Mots Bleus",
      sector: "Librairie indépendante — Aix-en-Provence",
      challenge:
        "La librairie perdait des clients au profit d'Amazon. Les coups de coeur du libraire étaient méconnus et les événements littéraires attiraient peu de monde faute de promotion.",
      solution:
        "Création d'un site avec coups de coeur hebdomadaires, page événements, commande en ligne avec retrait, blog chroniques et newsletter. SEO local sur 'librairie Aix-en-Provence'.",
      results: [
        "+50% de fréquentation en 4 mois",
        "Événements littéraires complets à 90%",
        "1ère page Google sur 'librairie Aix-en-Provence'",
        "800 abonnés newsletter en 6 mois",
      ],
      testimonial:
        "Le site a redonné vie à ma librairie. Les clients viennent pour mes coups de coeur, les événements affichent complet et je reçois des commandes en ligne tous les jours. Amazon ne peut pas offrir ça.",
      author: "Marie-Claire Fontaine",
      role: "Libraire, Les Mots Bleus",
      photo: "/images/testimonials/librairie.webp",
    },
    stats: [
      {
        value: "60%",
        label: "des lecteurs préfèrent acheter dans une librairie indépendante",
      },
      {
        value: "3x",
        label: "plus de fréquentation avec des événements promus en ligne",
      },
      {
        value: "75%",
        label: "des clients fidèles consultent les coups de coeur du libraire",
      },
    ],
    process: [
      {
        step: "01",
        title: "Découverte de votre librairie",
        desc: "Nous échangeons sur votre identité, vos sélections et vos événements pour créer un site qui reflète l'âme de votre librairie.",
      },
      {
        step: "02",
        title: "Design & coups de coeur",
        desc: "Création d'un design chaleureux avec section coups de coeur, sélections thématiques et page événements.",
      },
      {
        step: "03",
        title: "Commande & newsletter",
        desc: "Mise en place de la commande en ligne avec retrait, du blog chroniques et de la newsletter.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à la gestion des coups de coeur et événements, suivi pendant 30 jours.",
      },
    ],
  },
  {
    slug: "maroquinerie-pret-a-porter",
    name: "Maroquinerie / Prêt-à-porter",
    emoji: "👜",
    description:
      "Sublimez vos collections avec un site e-commerce élégant présentant vos créations, votre savoir-faire et une expérience d'achat premium en ligne.",
    painPoints: [
      "Collections non visibles en ligne",
      "Pas de vente en ligne possible",
      "Image de marque pas cohérente sur le web",
      "Concurrence des marketplaces (Zalando, Vinted)",
    ],
    solutions: [
      "Site e-commerce avec design premium",
      "Catalogue collections avec lookbook",
      "Expérience d'achat fluide et élégante",
      "Storytelling marque et savoir-faire",
    ],
    features: [
      "Boutique en ligne élégante",
      "Lookbook et photos lifestyle",
      "Fiches produits détaillées",
      "Paiement sécurisé multi-moyens",
      "Page savoir-faire et histoire",
      "SEO mode et maroquinerie",
    ],
    cta: "Créer la boutique en ligne de ma marque",
    faqItems: [
      {
        question: "Combien coûte un site e-commerce pour la mode ?",
        answer:
          "Un site e-commerce pour maroquinerie ou prêt-à-porter démarre à 1500€. Ce prix inclut la boutique en ligne, le lookbook, les fiches produits, le paiement sécurisé, la page savoir-faire et un an d'hébergement.",
      },
      {
        question: "Le site mettra-t-il en valeur nos créations ?",
        answer:
          "Oui, chaque collection bénéficie d'un lookbook avec photos lifestyle. Les fiches produits présentent chaque pièce avec plusieurs vues, les matières, le guide des tailles et les détails de fabrication.",
      },
      {
        question: "Peut-on raconter l'histoire de notre marque ?",
        answer:
          "Absolument. Une page dédiée raconte votre histoire, votre savoir-faire, vos engagements et vos matières. Le storytelling crée une connexion émotionnelle et justifie le prix de vos créations.",
      },
      {
        question: "Comment se démarquer des marketplaces ?",
        answer:
          "Votre site offre ce que Zalando ne peut pas : votre univers de marque, votre storytelling, une expérience d'achat premium et une relation directe avec vos clients. Vous maîtrisez votre image et vos marges.",
      },
    ],
    caseStudy: {
      client: "Maison Éloïse",
      sector: "Maroquinerie artisanale — Paris",
      challenge:
        "La créatrice vendait uniquement en boutique et sur des marchés. Ses sacs en cuir artisanaux n'étaient pas visibles en ligne. Elle perdait des ventes face à des marques avec un e-commerce.",
      solution:
        "Création d'un site e-commerce premium avec lookbook, fiches produits détaillées, page savoir-faire artisanal, paiement Stripe et SEO sur 'maroquinerie artisanale Paris'.",
      results: [
        "+150 ventes en ligne en 6 mois",
        "35% du CA généré par le site",
        "1ère page Google sur 'sac cuir artisanal Paris'",
        "Panier moyen en ligne : 280€",
      ],
      testimonial:
        "Mon site a transformé mon activité. Des clientes du monde entier découvrent mes créations et commandent en ligne. Le lookbook et la page savoir-faire font toute la différence.",
      author: "Éloïse Marchand",
      role: "Créatrice, Maison Éloïse",
      photo: "/images/testimonials/maroquinerie.webp",
    },
    stats: [
      {
        value: "80%",
        label: "des achats mode commencent par une recherche en ligne",
      },
      {
        value: "4x",
        label: "plus de ventes avec un lookbook et des photos lifestyle",
      },
      {
        value: "68%",
        label: "des clients premium achètent sur le site de la marque directement",
      },
    ],
    process: [
      {
        step: "01",
        title: "Immersion dans votre univers",
        desc: "Nous analysons votre marque, vos collections et votre clientèle pour créer un site e-commerce qui incarne votre identité.",
      },
      {
        step: "02",
        title: "Design & lookbook",
        desc: "Création d'un design premium avec lookbook, fiches produits, page savoir-faire et photos lifestyle.",
      },
      {
        step: "03",
        title: "E-commerce & paiement",
        desc: "Intégration de la boutique en ligne, du paiement Stripe sécurisé et des options de livraison.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à la gestion des produits et commandes, suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "association-don-sang",
    name: "Association & ONG",
    emoji: "🤝",
    description:
      "Créez un site professionnel pour votre association : collecte de dons en ligne, agenda des événements, recrutement de bénévoles et communication engageante pour fédérer votre communauté.",
    painPoints: [
      "Pas de visibilité en ligne pour les collectes",
      "Difficulté à recruter des bénévoles",
      "Communication peu engageante sur les réseaux",
      "Pas de système de don en ligne",
    ],
    solutions: [
      "Site vitrine engageant avec appels à l'action clairs",
      "Agenda des événements et collectes à venir",
      "Formulaire de don et d'inscription bénévole",
      "Espace actualités et témoignages",
    ],
    features: [
      "Page d'accueil engageante",
      "Agenda des événements",
      "Formulaire de don en ligne",
      "Inscription bénévole",
      "Galerie photos événements",
      "SEO local association",
    ],
    cta: "Créer le site de mon association",
    faqItems: [
      {
        question: "Combien coûte un site web pour une association ?",
        answer:
          "Nos sites pour associations démarrent à 500€. Ce tarif inclut le design engageant, l'agenda des événements, le formulaire de don, l'espace bénévole et un an d'hébergement. Nous proposons des tarifs adaptés aux structures associatives.",
      },
      {
        question: "Peut-on intégrer un système de don en ligne ?",
        answer:
          "Oui, nous intégrons un formulaire de don sécurisé sur votre site, avec possibilité de paiement par carte bancaire via Stripe. Vous pouvez aussi proposer des dons récurrents et émettre des reçus fiscaux.",
      },
      {
        question: "Le site peut-il afficher un calendrier d'événements ?",
        answer:
          "Absolument. Nous créons un agenda interactif qui affiche vos prochaines collectes, réunions et événements. Vous pouvez le mettre à jour facilement via le panneau d'administration.",
      },
      {
        question: "Comment recruter des bénévoles via le site ?",
        answer:
          "Nous intégrons un formulaire d'inscription bénévole avec les informations nécessaires. Les visiteurs peuvent s'inscrire directement et vous recevez une notification par email à chaque inscription.",
      },
    ],
    caseStudy: {
      client: "ADSB Wissembourg",
      sector: "Association de donneurs de sang — Alsace",
      challenge:
        "L'association n'avait aucune présence en ligne et communiquait uniquement par affichage papier. Les collectes étaient peu fréquentées et le recrutement de nouveaux donneurs stagnait.",
      solution:
        "Nous avons créé un site vitrine engageant avec un agenda des collectes, un espace d'information sur le don de sang, des appels à l'action clairs et une galerie photos des événements.",
      results: [
        "+80% de visibilité sur les collectes locales",
        "Agenda en ligne consulté par 200+ personnes/mois",
        "+35% de nouveaux donneurs inscrits",
        "Communication digitale professionnelle",
      ],
      testimonial:
        "Le site nous a permis de toucher une audience bien plus large. Les gens découvrent nos collectes en ligne et viennent donner leur sang. C'est un outil indispensable pour notre association.",
      author: "Président ADSB",
      role: "Président, ADSB Wissembourg",
      photo: "/images/testimonials/association.webp",
    },
    stats: [
      {
        value: "68%",
        label: "des donateurs recherchent les collectes en ligne avant de se déplacer",
      },
      {
        value: "2x",
        label: "plus de bénévoles recrutés avec un site professionnel",
      },
      {
        value: "75%",
        label: "des associations visibles en ligne augmentent leurs dons",
      },
    ],
    process: [
      {
        step: "01",
        title: "Comprendre votre mission",
        desc: "Nous analysons votre association, votre mission, votre public cible et vos besoins de communication pour créer un site engageant.",
      },
      {
        step: "02",
        title: "Design engageant",
        desc: "Création d'un design qui inspire confiance avec des visuels forts, un agenda d'événements et des appels à l'action clairs.",
      },
      {
        step: "03",
        title: "Dons & bénévolat",
        desc: "Intégration des formulaires de don en ligne, d'inscription bénévole et de l'agenda des collectes et événements.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à la gestion de l'agenda et des contenus, suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "securite-incendie",
    name: "Sécurité & Protection Incendie",
    emoji: "🔥",
    description:
      "Positionnez votre entreprise de sécurité incendie avec un site professionnel qui met en avant votre expertise : extincteurs, formations, audits de conformité et interventions rapides.",
    painPoints: [
      "Image en ligne pas à la hauteur de l'expertise",
      "Peu de demandes de devis en ligne",
      "Concurrence forte sur les mots-clés locaux",
      "Services techniques mal présentés",
    ],
    solutions: [
      "Site professionnel avec structuration des services",
      "Pages dédiées par type d'intervention",
      "Formulaire de demande de devis rapide",
      "Mise en avant certifications et conformité",
    ],
    features: [
      "Pages services structurées",
      "Formulaire devis rapide",
      "Certifications mises en avant",
      "Galerie interventions",
      "Zone d'intervention géolocalisée",
      "SEO local sécurité incendie",
    ],
    cta: "Créer le site de mon entreprise sécurité",
    faqItems: [
      {
        question: "Combien coûte un site web pour une entreprise de sécurité incendie ?",
        answer:
          "Nos sites pour entreprises de sécurité incendie démarrent à 500€. Ce tarif inclut la structuration de vos services, le formulaire de devis, la mise en avant de vos certifications et un an d'hébergement.",
      },
      {
        question: "Peut-on mettre en avant nos certifications et agréments ?",
        answer:
          "Oui, nous créons une section dédiée à vos certifications (APSAD, NF, etc.), agréments et qualifications. Ces éléments sont mis en avant sur la page d'accueil pour rassurer immédiatement les visiteurs.",
      },
      {
        question: "Le site peut-il générer des demandes de devis ?",
        answer:
          "Absolument. Nous intégrons un formulaire de demande de devis détaillé avec choix du type d'intervention, et des boutons d'appel à l'action sur chaque page service pour maximiser les conversions.",
      },
      {
        question: "Peut-on présenter les différents types de services ?",
        answer:
          "Oui, nous créons des pages dédiées pour chaque service : installation d'extincteurs, formation incendie, audit de conformité, maintenance des systèmes de sécurité, etc. Chaque page est optimisée pour le SEO.",
      },
    ],
    caseStudy: {
      client: "Alliance Sécurité Incendie",
      sector: "Sécurité incendie — Île-de-France",
      challenge:
        "Alliance Sécurité Incendie gérait plus de 150 copropriétés mais n'avait aucun site web. L'entreprise perdait des opportunités face à des concurrents mieux référencés en ligne.",
      solution:
        "Nous avons créé un site professionnel B2B avec une structuration claire des services techniques, des pages dédiées par type d'intervention, un formulaire de devis optimisé et une mise en avant de l'expertise.",
      results: [
        "+60% de demandes de devis en ligne",
        "Positionnement expert renforcé",
        "1ère page Google sur les mots-clés locaux",
        "+40% de nouveaux contrats en 6 mois",
      ],
      testimonial:
        "Le site reflète parfaitement notre expertise et nous aide à présenter efficacement nos services. Les demandes de devis ont augmenté significativement.",
      author: "Alliance Sécurité Incendie",
      role: "Dirigeant, Alliance Sécurité Incendie",
      photo: "/images/testimonials/securite.webp",
    },
    stats: [
      {
        value: "85%",
        label: "des entreprises cherchent un prestataire sécurité incendie en ligne",
      },
      {
        value: "3x",
        label: "plus de demandes de devis avec un site professionnel structuré",
      },
      {
        value: "92%",
        label: "des décideurs consultent le site web avant de choisir un prestataire",
      },
    ],
    process: [
      {
        step: "01",
        title: "Analyse de vos services",
        desc: "Nous analysons vos services, vos certifications, votre zone d'intervention et vos clients cibles pour créer un site qui inspire confiance.",
      },
      {
        step: "02",
        title: "Design professionnel B2B",
        desc: "Création d'un design sobre et professionnel avec structuration claire des services, certifications et références clients.",
      },
      {
        step: "03",
        title: "Devis & conversion",
        desc: "Intégration du formulaire de devis, des pages services optimisées SEO et des appels à l'action stratégiques.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à la gestion du contenu et des demandes, suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "recyclage-evenementiel",
    name: "Recyclage & Environnement",
    emoji: "♻️",
    description:
      "Valorisez votre engagement écologique avec un site professionnel pour votre entreprise de tri, recyclage et gestion des déchets. Mettez en avant votre démarche RSE et attirez de nouveaux clients.",
    painPoints: [
      "Engagement écologique peu visible en ligne",
      "Difficulté à se démarquer de la concurrence",
      "Services de tri et recyclage mal présentés",
      "Pas de système de demande de devis en ligne",
    ],
    solutions: [
      "Site éco-responsable avec positionnement vert",
      "Pages dédiées par type de service (tri, collecte, recyclage)",
      "Mise en avant des chiffres et engagements RSE",
      "Formulaire de demande de devis et contact rapide",
    ],
    features: [
      "Design éco-responsable",
      "Pages services détaillées",
      "Chiffres clés et impact RSE",
      "Formulaire devis gratuit",
      "Galerie interventions",
      "SEO local recyclage",
    ],
    cta: "Créer le site de mon entreprise recyclage",
    faqItems: [
      {
        question: "Combien coûte un site web pour une entreprise de recyclage ?",
        answer:
          "Nos sites pour entreprises de recyclage et environnement démarrent à 500€. Ce tarif inclut un design éco-responsable, la structuration de vos services, le formulaire de devis et un an d'hébergement.",
      },
      {
        question: "Le design reflétera-t-il notre engagement écologique ?",
        answer:
          "Oui, nous créons un design avec une identité visuelle verte et éco-responsable qui reflète vos valeurs. Les couleurs, les visuels et le contenu sont pensés pour communiquer votre engagement environnemental.",
      },
      {
        question: "Peut-on afficher nos chiffres d'impact environnemental ?",
        answer:
          "Absolument. Nous mettons en avant vos chiffres clés (tonnes recyclées, taux de valorisation, etc.) avec des visuels impactants pour démontrer votre engagement concret.",
      },
      {
        question: "Le site peut-il cibler les entreprises (B2B) ?",
        answer:
          "Oui, nous structurons le site pour cibler à la fois les particuliers et les entreprises. Des pages dédiées aux solutions B2B avec formulaire de demande de devis personnalisé permettent de générer des leads qualifiés.",
      },
    ],
    caseStudy: {
      client: "Tri Event",
      sector: "Recyclage événementiel — France",
      challenge:
        "Tri Event, spécialisée dans le tri et recyclage lors d'événements, n'avait pas de site web pour présenter son activité. L'entreprise communiquait uniquement par le bouche-à-oreille et perdait des marchés.",
      solution:
        "Nous avons créé un site vitrine éco-responsable avec un positionnement vert fort, une structuration claire de l'offre tri/recyclage événementiel, des CTAs pour les demandes de devis et une mise en avant de l'impact écologique.",
      results: [
        "+70% de visibilité en ligne",
        "Positionnement écologique renforcé",
        "+50% de demandes de devis en 3 mois",
        "Image professionnelle et engagée",
      ],
      testimonial:
        "Le site reflète parfaitement notre engagement écologique et notre activité. Le rendu est professionnel, clair et nous amène de nouveaux clients.",
      author: "Tri Event",
      role: "Fondateur, Tri Event",
      photo: "/images/testimonials/recyclage.webp",
    },
    stats: [
      {
        value: "78%",
        label: "des organisateurs d'événements cherchent un prestataire recyclage en ligne",
      },
      {
        value: "2.5x",
        label: "plus de contrats avec une présence digitale professionnelle",
      },
      {
        value: "90%",
        label: "des entreprises vérifient l'engagement RSE d'un prestataire avant de le choisir",
      },
    ],
    process: [
      {
        step: "01",
        title: "Comprendre votre activité",
        desc: "Nous analysons vos services de tri et recyclage, votre positionnement écologique et vos clients cibles pour créer un site engageant.",
      },
      {
        step: "02",
        title: "Design éco-responsable",
        desc: "Création d'un design vert et moderne avec mise en avant de vos engagements, chiffres d'impact et services détaillés.",
      },
      {
        step: "03",
        title: "Devis & impact RSE",
        desc: "Intégration du formulaire de devis, des pages services optimisées et des sections chiffres clés et impact environnemental.",
      },
      {
        step: "04",
        title: "Lancement & formation",
        desc: "Mise en ligne, formation à la gestion du contenu et suivi des performances pendant 30 jours.",
      },
    ],
  },
  {
    slug: "spectacle-evenementiel",
    name: "Spectacle & Événementiel",
    emoji: "🎭",
    description:
      "Promouvez vos spectacles et événements avec un site immersif : billetterie en ligne, galerie artistes, calendrier des représentations et design dynamique qui donne envie.",
    painPoints: [
      "Spectacles peu visibles en ligne",
      "Pas de système de billetterie intégré",
      "Communication dispersée sur les réseaux",
      "Pas de calendrier des représentations",
    ],
    solutions: [
      "Site immersif avec design dynamique et visuel",
      "Billetterie en ligne intégrée",
      "Calendrier des représentations et tournées",
      "Galerie artistes, photos et vidéos",
    ],
    features: [
      "Design immersif et dynamique",
      "Billetterie en ligne",
      "Calendrier représentations",
      "Galerie photos et vidéos",
      "Pages artistes dédiées",
      "SEO événementiel local",
    ],
    cta: "Créer le site de mon spectacle",
    faqItems: [
      {
        question: "Combien coûte un site web pour un spectacle ou un événement ?",
        answer:
          "Nos sites pour le spectacle et l'événementiel démarrent à 500€. Ce tarif inclut le design immersif, la billetterie en ligne, le calendrier des représentations et un an d'hébergement.",
      },
      {
        question: "Peut-on intégrer une billetterie en ligne ?",
        answer:
          "Oui, nous intégrons un système de billetterie en ligne sécurisé avec paiement par carte bancaire. Vous pouvez gérer les places, les tarifs et les promotions directement depuis votre panneau d'administration.",
      },
      {
        question: "Le site peut-il afficher un calendrier de tournée ?",
        answer:
          "Absolument. Nous créons un calendrier interactif avec les dates, lieux et liens de réservation pour chaque représentation. Le calendrier est facilement modifiable à tout moment.",
      },
      {
        question: "Comment mettre en valeur les artistes et le spectacle ?",
        answer:
          "Nous créons des pages dédiées avec biographies, photos, vidéos extraits et revue de presse. Le design immersif plonge le visiteur dans l'univers du spectacle pour lui donner envie de réserver.",
      },
    ],
    caseStudy: {
      client: "Spectacle",
      sector: "Spectacle vivant — France",
      challenge:
        "La compagnie n'avait qu'une page Facebook pour communiquer sur ses spectacles. Sans site web dédié, la billetterie passait uniquement par des plateformes tierces qui prenaient de grosses commissions.",
      solution:
        "Nous avons créé une landing page immersive avec un design dynamique, une présentation percutante du spectacle, une billetterie en ligne intégrée et un calendrier des représentations.",
      results: [
        "+90% de réservations en ligne directes",
        "Suppression des commissions plateformes tierces",
        "+60% de visibilité sur Google",
        "Image artistique professionnelle",
      ],
      testimonial:
        "Le site met parfaitement en valeur notre spectacle. Il est dynamique, immersif et donne immédiatement envie de réserver. Un vrai outil de promotion.",
      author: "Directeur artistique",
      role: "Directeur artistique, Compagnie",
      photo: "/images/testimonials/spectacle.webp",
    },
    stats: [
      {
        value: "82%",
        label: "des spectateurs réservent leurs places en ligne",
      },
      {
        value: "3x",
        label: "plus de ventes de billets avec un site dédié vs réseaux sociaux seuls",
      },
      {
        value: "70%",
        label: "des spectateurs découvrent un spectacle via une recherche Google",
      },
    ],
    process: [
      {
        step: "01",
        title: "Immersion dans votre univers",
        desc: "Nous découvrons votre spectacle, vos artistes, votre public cible et vos besoins pour créer un site qui transmet l'émotion.",
      },
      {
        step: "02",
        title: "Design immersif",
        desc: "Création d'un design dynamique avec visuels percutants, vidéos extraits, galerie artistes et ambiance qui donne envie.",
      },
      {
        step: "03",
        title: "Billetterie & calendrier",
        desc: "Intégration de la billetterie en ligne sécurisée, du calendrier de tournée et des liens de réservation.",
      },
      {
        step: "04",
        title: "Lancement & promotion",
        desc: "Mise en ligne, formation à la gestion de la billetterie et du calendrier, suivi des performances pendant 30 jours.",
      },
    ],
  },
];

export const getSectorBySlug = (slug: string) =>
  sectors.find((s) => s.slug === slug);
