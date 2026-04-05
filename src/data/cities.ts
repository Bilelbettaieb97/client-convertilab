export interface CityTestimonial {
  text: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  photo: string;
}

export interface CityFaqItem {
  question: string;
  answer: string;
}

export interface CityStats {
  entreprises: string;
  searches: string;
}

export interface City {
  slug: string;
  name: string;
  department: string;
  region: string;
  postalCode: string;
  lat: string;
  lng: string;
  population: string;
  description: string;
  faqItems: CityFaqItem[];
  testimonials: CityTestimonial[];
  stats: CityStats;
  keywords: string[];
}

export const cities: City[] = [
  {
    slug: "paris",
    name: "Paris",
    department: "Paris",
    region: "Île-de-France",
    postalCode: "75000",
    lat: "48.8566",
    lng: "2.3522",
    population: "2.1 millions",
    description:
      "Capitale de la France et centre économique européen, Paris regroupe des milliers d'entreprises qui ont besoin d'une présence digitale forte pour se démarquer.",
    stats: {
      entreprises: "2.1M d'entreprises",
      searches: "45 000 recherches/mois pour 'site web Paris'",
    },
    keywords: [
      "agence web Paris",
      "création site internet Paris",
      "SEO Paris",
    ],
    faqItems: [
      {
        question: "Combien coûte un site web à Paris ?",
        answer:
          "Chez ConvertiLab, un site vitrine professionnel à Paris démarre à partir de 500€ et un site e-commerce à partir de 800€. Chaque projet est sur-mesure : nous adaptons le devis à vos besoins exacts après un audit gratuit de 30 minutes.",
      },
      {
        question: "Pourquoi choisir ConvertiLab comme agence web à Paris ?",
        answer:
          "Nous combinons expertise technique (Next.js, SEO, Ads) et connaissance du marché parisien. Avec plus de 150 entreprises accompagnées en Île-de-France et une note de 4.9/5, nous livrons des sites performants en 7 jours avec un suivi personnalisé.",
      },
      {
        question: "En combien de temps mon site sera-t-il livré à Paris ?",
        answer:
          "Nous livrons votre site en 7 jours ouvrés, garanti. Ce délai inclut le design sur-mesure, le développement, l'optimisation SEO et la mise en ligne. Pour les projets e-commerce plus complexes, comptez 10 à 14 jours.",
      },
      {
        question:
          "Travaillez-vous avec des entreprises de tous secteurs à Paris ?",
        answer:
          "Oui, nous accompagnons des entreprises parisiennes de tous secteurs : restaurants, cabinets médicaux, agences immobilières, startups, commerces de proximité, consultants, artisans... Chaque site est adapté à votre secteur d'activité.",
      },
      {
        question: "Proposez-vous le référencement SEO local pour Paris ?",
        answer:
          "Absolument. Le SEO local est essentiel à Paris où la concurrence est forte. Nous optimisons votre fiche Google Business, vos mots-clés locaux, votre contenu et vos balises pour que vos clients parisiens vous trouvent en première page.",
      },
    ],
    testimonials: [
      {
        text: "ConvertiLab a transformé notre présence en ligne. En 3 mois, notre site génère 40% de nos nouveaux clients. L'équipe comprend vraiment les enjeux du marché parisien.",
        author: "Sophie Laurent",
        role: "Fondatrice",
        company: "Atelier Beauté Paris",
        metric: "+40% de clients via le site",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
      },
      {
        text: "Site livré en 6 jours, exactement comme promis. Le SEO local nous a fait passer de la page 3 à la page 1 sur Google pour 'architecte intérieur Paris'. Résultat concret et rapide.",
        author: "Thomas Mercier",
        role: "Directeur",
        company: "Studio TM Architecture",
        metric: "Page 1 Google en 2 mois",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      },
    ],
  },
  {
    slug: "rueil-malmaison",
    name: "Rueil-Malmaison",
    department: "Hauts-de-Seine",
    region: "Île-de-France",
    postalCode: "92500",
    lat: "48.8769",
    lng: "2.1894",
    population: "80 000",
    description:
      "Ville dynamique des Hauts-de-Seine, Rueil-Malmaison accueille de nombreuses PME et professions libérales qui cherchent à développer leur visibilité en ligne.",
    stats: {
      entreprises: "4 800 entreprises",
      searches: "1 200 recherches/mois pour 'site web Rueil-Malmaison'",
    },
    keywords: [
      "agence web Rueil-Malmaison",
      "création site internet Rueil-Malmaison",
      "SEO Rueil-Malmaison",
    ],
    faqItems: [
      {
        question: "Combien coûte un site web à Rueil-Malmaison ?",
        answer:
          "Un site vitrine professionnel à Rueil-Malmaison commence à partir de 500€ et un site e-commerce à partir de 800€. En tant qu'agence basée à Rueil-Malmaison, nous offrons un accompagnement de proximité avec un rapport qualité-prix imbattable.",
      },
      {
        question:
          "Pourquoi choisir ConvertiLab à Rueil-Malmaison ?",
        answer:
          "ConvertiLab est basé à Rueil-Malmaison. Nous connaissons parfaitement le tissu économique local, les attentes des habitants et les spécificités du marché des Hauts-de-Seine. Vous bénéficiez d'un interlocuteur local disponible et réactif.",
      },
      {
        question:
          "En combien de temps mon site sera-t-il livré à Rueil-Malmaison ?",
        answer:
          "Votre site est livré en 7 jours ouvrés. Étant basés à Rueil-Malmaison, nous pouvons même organiser des rencontres en personne pour affiner votre projet et accélérer les validations.",
      },
      {
        question:
          "Travaillez-vous avec des entreprises de Rueil-Malmaison ?",
        answer:
          "Bien sûr, c'est notre ville ! Nous accompagnons déjà des commerces du centre-ville, des professions libérales du quartier Buzenval, des PME de la zone d'activité et des indépendants ruellois dans leur transformation digitale.",
      },
      {
        question:
          "Proposez-vous le SEO local pour Rueil-Malmaison ?",
        answer:
          "Oui, le SEO local est notre spécialité. Nous optimisons votre visibilité sur les recherches 'à Rueil-Malmaison' et dans les Hauts-de-Seine : fiche Google Business, mots-clés géolocalisés, avis clients, citations locales.",
      },
    ],
    testimonials: [
      {
        text: "En tant que cabinet dentaire à Rueil, nous avions besoin d'un site rassurant et bien référencé. ConvertiLab a livré un site magnifique qui nous amène 8 nouveaux patients par mois via Google.",
        author: "Dr. Marie Dubois",
        role: "Chirurgien-dentiste",
        company: "Cabinet Dentaire Rueil Centre",
        metric: "+8 nouveaux patients/mois",
        photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face",
      },
      {
        text: "Agence locale, réactive et professionnelle. Notre site de plomberie est passé en première page Google pour 'plombier Rueil-Malmaison' en seulement 6 semaines. Le téléphone n'arrête pas de sonner !",
        author: "Karim Benali",
        role: "Gérant",
        company: "KB Plomberie Rueil",
        metric: "Page 1 Google en 6 semaines",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face",
      },
    ],
  },
  {
    slug: "boulogne-billancourt",
    name: "Boulogne-Billancourt",
    department: "Hauts-de-Seine",
    region: "Île-de-France",
    postalCode: "92100",
    lat: "48.8397",
    lng: "2.2399",
    population: "120 000",
    description:
      "Deuxième ville d'Île-de-France par sa population, Boulogne-Billancourt est un pôle économique majeur avec un tissu dense de PME et startups.",
    stats: {
      entreprises: "12 000 entreprises",
      searches: "2 800 recherches/mois pour 'site web Boulogne-Billancourt'",
    },
    keywords: [
      "agence web Boulogne-Billancourt",
      "création site internet Boulogne-Billancourt",
      "SEO Boulogne-Billancourt",
    ],
    faqItems: [
      {
        question: "Combien coûte un site web à Boulogne-Billancourt ?",
        answer:
          "Un site vitrine à Boulogne-Billancourt démarre à 500€ et un site e-commerce à 800€. Nos tarifs sont transparents et fixes : pas de surprise en cours de projet. Le devis est gratuit et détaillé.",
      },
      {
        question:
          "Pourquoi choisir ConvertiLab à Boulogne-Billancourt ?",
        answer:
          "Boulogne-Billancourt est un marché très concurrentiel avec plus de 12 000 entreprises. Nous créons des sites qui se démarquent grâce à un design premium, un SEO local poussé et des performances techniques supérieures (score Google 90+).",
      },
      {
        question:
          "En combien de temps mon site sera-t-il livré à Boulogne-Billancourt ?",
        answer:
          "7 jours ouvrés pour un site vitrine, 10 à 14 jours pour un e-commerce. Nous sommes basés à proximité immédiate de Boulogne-Billancourt, ce qui facilite les échanges et accélère les validations.",
      },
      {
        question:
          "Travaillez-vous avec des entreprises de Boulogne-Billancourt ?",
        answer:
          "Oui, nous accompagnons de nombreuses entreprises boulonnaises : startups du quartier du Trapèze, commerces de la rue de Paris, cabinets de conseil, agences de communication, restaurateurs et commerçants locaux.",
      },
      {
        question:
          "Proposez-vous le SEO local pour Boulogne-Billancourt ?",
        answer:
          "Absolument. Nous optimisons votre référencement local pour apparaître dans les recherches 'à Boulogne-Billancourt' : Google Maps, fiche Google Business, mots-clés géolocalisés, contenu optimisé et backlinks locaux.",
      },
    ],
    testimonials: [
      {
        text: "Notre startup avait besoin d'un site moderne et rapide pour lever des fonds. ConvertiLab a livré en 5 jours un site qui a impressionné nos investisseurs. Le design est exactement ce qu'on voulait.",
        author: "Alexandre Chen",
        role: "CEO & Co-fondateur",
        company: "NovaTech Solutions",
        metric: "Site livré en 5 jours",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      },
      {
        text: "Depuis notre nouveau site, notre restaurant reçoit 3 fois plus de réservations en ligne. Le SEO local fonctionne à merveille, on apparaît dans le top 3 pour 'restaurant italien Boulogne'.",
        author: "Isabella Romano",
        role: "Gérante",
        company: "Trattoria Bella Boulogne",
        metric: "x3 réservations en ligne",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      },
    ],
  },
  {
    slug: "nanterre",
    name: "Nanterre",
    department: "Hauts-de-Seine",
    region: "Île-de-France",
    postalCode: "92000",
    lat: "48.8924",
    lng: "2.2071",
    population: "96 000",
    description:
      "Préfecture des Hauts-de-Seine et porte de La Défense, Nanterre concentre entreprises et commerces qui bénéficient d'une stratégie digitale locale.",
    stats: {
      entreprises: "7 500 entreprises",
      searches: "1 800 recherches/mois pour 'site web Nanterre'",
    },
    keywords: [
      "agence web Nanterre",
      "création site internet Nanterre",
      "SEO Nanterre",
    ],
    faqItems: [
      {
        question: "Combien coûte un site web à Nanterre ?",
        answer:
          "Un site vitrine professionnel à Nanterre commence à 500€, un site e-commerce à 800€. Nous proposons aussi des facilités de paiement (mensualités à partir de 39€/mois) pour les entrepreneurs nanterriens.",
      },
      {
        question: "Pourquoi choisir ConvertiLab à Nanterre ?",
        answer:
          "Nanterre est aux portes de La Défense, un bassin d'activité immense. Nous créons des sites qui captent cette clientèle B2B et locale, avec un SEO ciblé et des landing pages optimisées pour la conversion.",
      },
      {
        question:
          "En combien de temps mon site sera-t-il livré à Nanterre ?",
        answer:
          "Livraison en 7 jours ouvrés pour un site vitrine. Nous sommes situés à quelques minutes de Nanterre, ce qui permet des rendez-vous rapides pour valider les étapes clés du projet.",
      },
      {
        question:
          "Travaillez-vous avec des entreprises de Nanterre ?",
        answer:
          "Oui, nous travaillons avec des entreprises de Nanterre et du quartier de La Défense : PME locales, prestataires de services, commerces du centre-ville, professions libérales et entreprises du tertiaire.",
      },
      {
        question: "Proposez-vous le SEO local pour Nanterre ?",
        answer:
          "Bien sûr. Nous positionnons votre site sur les recherches locales : 'votre métier + Nanterre', 'votre métier + La Défense', Google Maps, annuaires locaux. Une stratégie SEO ciblée pour capter les clients de votre zone.",
      },
    ],
    testimonials: [
      {
        text: "Notre cabinet comptable avait un site vieillissant qui ne générait aucun contact. ConvertiLab nous a créé un site moderne avec formulaire de prise de RDV. Résultat : 12 nouveaux clients en 2 mois.",
        author: "Philippe Martin",
        role: "Expert-comptable associé",
        company: "Cabinet Martin & Associés",
        metric: "+12 clients en 2 mois",
        photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
      },
      {
        text: "Excellent travail ! Notre salon de coiffure est maintenant en première page Google pour 'coiffeur Nanterre'. Les prises de rendez-vous en ligne ont explosé. Merci ConvertiLab !",
        author: "Fatima El Amrani",
        role: "Gérante",
        company: "Salon Élégance Nanterre",
        metric: "+65% de RDV en ligne",
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
      },
    ],
  },
  {
    slug: "neuilly-sur-seine",
    name: "Neuilly-sur-Seine",
    department: "Hauts-de-Seine",
    region: "Île-de-France",
    postalCode: "92200",
    lat: "48.8847",
    lng: "2.2690",
    population: "62 000",
    description:
      "Ville résidentielle haut de gamme, Neuilly-sur-Seine abrite de nombreux cabinets, professions libérales et commerces premium qui ont besoin d'un site web à la hauteur de leur image.",
    stats: {
      entreprises: "5 200 entreprises",
      searches: "1 500 recherches/mois pour 'site web Neuilly-sur-Seine'",
    },
    keywords: [
      "agence web Neuilly-sur-Seine",
      "création site internet Neuilly-sur-Seine",
      "SEO Neuilly-sur-Seine",
    ],
    faqItems: [
      {
        question: "Combien coûte un site web à Neuilly-sur-Seine ?",
        answer:
          "Un site vitrine haut de gamme à Neuilly-sur-Seine démarre à 500€ et un site e-commerce à 800€. Pour une clientèle premium comme celle de Neuilly, nous soignons particulièrement le design et l'expérience utilisateur.",
      },
      {
        question:
          "Pourquoi choisir ConvertiLab à Neuilly-sur-Seine ?",
        answer:
          "Neuilly-sur-Seine est une ville exigeante, et vos clients le sont aussi. Nous créons des sites élégants, rapides et parfaitement optimisés qui reflètent le positionnement haut de gamme de votre activité.",
      },
      {
        question:
          "En combien de temps mon site sera-t-il livré à Neuilly-sur-Seine ?",
        answer:
          "Votre site est livré en 7 jours ouvrés. Nous sommes à proximité immédiate de Neuilly-sur-Seine pour des échanges fluides. Possibilité de rendez-vous en présentiel pour valider chaque étape.",
      },
      {
        question:
          "Travaillez-vous avec des entreprises de Neuilly-sur-Seine ?",
        answer:
          "Oui, nous accompagnons des cabinets d'avocats, médecins spécialistes, consultants, agences immobilières de prestige, boutiques haut de gamme et professions libérales installés à Neuilly-sur-Seine.",
      },
      {
        question:
          "Proposez-vous le SEO local pour Neuilly-sur-Seine ?",
        answer:
          "Oui, nous optimisons votre visibilité locale : positionnement sur les requêtes 'à Neuilly-sur-Seine', Google Maps, fiche Google Business optimisée, avis clients et contenu géolocalisé pour attirer une clientèle locale qualifiée.",
      },
    ],
    testimonials: [
      {
        text: "Notre cabinet d'avocats avait besoin d'un site sobre, élégant et rassurant. ConvertiLab a parfaitement compris notre positionnement. Le site reflète notre expertise et génère des demandes de consultation qualifiées.",
        author: "Maître Claire Fontaine",
        role: "Avocate associée",
        company: "Cabinet Fontaine & Partners",
        metric: "+25 consultations/mois via le site",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face",
      },
      {
        text: "Site impeccable pour notre agence immobilière de prestige. Design luxueux, chargement instantané, et nos biens apparaissent magnifiquement. Les demandes de visites ont augmenté de 50%.",
        author: "Nicolas de Villepin",
        role: "Directeur",
        company: "Immobilier Prestige Neuilly",
        metric: "+50% de demandes de visites",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=face",
      },
    ],
  },
];

export const getCityBySlug = (slug: string) =>
  cities.find((c) => c.slug === slug);
