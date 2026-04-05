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
  {
    slug: "lyon",
    name: "Lyon",
    department: "Rhône",
    region: "Auvergne-Rhône-Alpes",
    postalCode: "69000",
    lat: "45.7640",
    lng: "4.8357",
    population: "522 000",
    description:
      "Capitale de la gastronomie et deuxième pôle économique de France, Lyon est un hub d'innovation avec un écosystème tech florissant et des milliers de PME dynamiques.",
    stats: {
      entreprises: "75 000 entreprises",
      searches: "12 000 recherches/mois pour 'site web Lyon'",
    },
    keywords: [
      "agence web Lyon",
      "création site internet Lyon",
      "SEO Lyon",
    ],
    faqItems: [
      {
        question: "Combien coûte un site web à Lyon ?",
        answer:
          "Un site vitrine professionnel à Lyon démarre à 500€ et un site e-commerce à 800€. Lyon étant un marché très concurrentiel, nous misons sur un design premium et un SEO local poussé pour vous démarquer dans le Rhône.",
      },
      {
        question: "Pourquoi choisir ConvertiLab comme agence web à Lyon ?",
        answer:
          "Nous connaissons le tissu économique lyonnais : startups de la Part-Dieu, commerces de la Presqu'île, restaurants gastronomiques, entreprises du quartier Confluence. Nous créons des sites adaptés à chaque secteur avec un SEO ciblé sur Lyon et sa métropole.",
      },
      {
        question: "En combien de temps mon site sera-t-il livré à Lyon ?",
        answer:
          "Votre site est livré en 7 jours ouvrés. Pour les projets e-commerce plus complexes, comptez 10 à 14 jours. Nous travaillons en visioconférence ou en présentiel pour les entreprises lyonnaises.",
      },
      {
        question: "Travaillez-vous avec des entreprises de tous secteurs à Lyon ?",
        answer:
          "Oui, nous accompagnons des entreprises lyonnaises variées : restaurants et bouchons lyonnais, startups tech, cabinets médicaux, artisans, commerces de la Presqu'île, agences immobilières et industries de la vallée de la chimie.",
      },
      {
        question: "Proposez-vous le référencement SEO local pour Lyon ?",
        answer:
          "Absolument. Nous optimisons votre visibilité sur les recherches locales à Lyon et dans la métropole : fiche Google Business, mots-clés géolocalisés, contenu optimisé pour le Rhône et backlinks locaux lyonnais.",
      },
    ],
    testimonials: [
      {
        text: "ConvertiLab a créé notre site de restaurant gastronomique en une semaine. Le design reflète parfaitement notre identité. Nos réservations en ligne ont augmenté de 60% depuis la mise en ligne.",
        author: "Émilie Durand",
        role: "Gérante",
        company: "Brasserie des Lumières Lyon",
        metric: "+60% de réservations en ligne",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
      },
      {
        text: "Notre startup SaaS avait besoin d'un site moderne pour convaincre nos prospects B2B. ConvertiLab a livré un site impeccable, rapide et optimisé. Le taux de conversion a doublé en 2 mois.",
        author: "Julien Morel",
        role: "CEO",
        company: "DataFlow Solutions Lyon",
        metric: "Taux de conversion x2",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      },
    ],
  },
  {
    slug: "marseille",
    name: "Marseille",
    department: "Bouches-du-Rhône",
    region: "Provence-Alpes-Côte d'Azur",
    postalCode: "13000",
    lat: "43.2965",
    lng: "5.3698",
    population: "873 000",
    description:
      "Deuxième ville de France et premier port de Méditerranée, Marseille possède un tissu économique diversifié entre commerce maritime, tourisme, tech et industries créatives.",
    stats: {
      entreprises: "90 000 entreprises",
      searches: "9 500 recherches/mois pour 'site web Marseille'",
    },
    keywords: [
      "agence web Marseille",
      "création site internet Marseille",
      "SEO Marseille",
    ],
    faqItems: [
      {
        question: "Combien coûte un site web à Marseille ?",
        answer:
          "Un site vitrine professionnel à Marseille commence à 500€ et un site e-commerce à 800€. Nous adaptons chaque projet au marché marseillais avec un design méditerranéen et un SEO ciblé sur les Bouches-du-Rhône.",
      },
      {
        question: "Pourquoi choisir ConvertiLab comme agence web à Marseille ?",
        answer:
          "Nous comprenons les spécificités du marché marseillais : tourisme, commerce maritime, restauration, services aux entreprises. Nous créons des sites performants qui captent la clientèle locale et touristique de la cité phocéenne.",
      },
      {
        question: "En combien de temps mon site sera-t-il livré à Marseille ?",
        answer:
          "Livraison en 7 jours ouvrés pour un site vitrine, 10 à 14 jours pour un e-commerce. Nous collaborons à distance avec les entreprises marseillaises via visioconférence pour un suivi réactif.",
      },
      {
        question: "Travaillez-vous avec des entreprises de tous secteurs à Marseille ?",
        answer:
          "Oui : restaurants du Vieux-Port, boutiques du Panier, entreprises d'Euroméditerranée, cabinets médicaux, agences immobilières, entreprises de tourisme et activités nautiques. Chaque site est adapté à votre secteur.",
      },
      {
        question: "Proposez-vous le référencement SEO local pour Marseille ?",
        answer:
          "Oui, le SEO local est essentiel à Marseille. Nous optimisons votre positionnement sur les recherches locales dans les Bouches-du-Rhône : Google Maps, fiche Google Business, mots-clés géolocalisés et contenu adapté.",
      },
    ],
    testimonials: [
      {
        text: "Notre restaurant sur le Vieux-Port attire maintenant des touristes grâce à notre site multilingue créé par ConvertiLab. Les réservations en ligne représentent 45% de notre chiffre d'affaires.",
        author: "Nadia Khelifi",
        role: "Propriétaire",
        company: "La Table du Port Marseille",
        metric: "45% du CA via le site",
        photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face",
      },
      {
        text: "ConvertiLab a modernisé notre site d'agence immobilière. Le SEO local nous positionne en top 3 pour 'immobilier Marseille 8ème'. Nos demandes d'estimation ont triplé.",
        author: "Marc Castellan",
        role: "Directeur",
        company: "Provence Immobilier Marseille",
        metric: "x3 demandes d'estimation",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face",
      },
    ],
  },
  {
    slug: "bordeaux",
    name: "Bordeaux",
    department: "Gironde",
    region: "Nouvelle-Aquitaine",
    postalCode: "33000",
    lat: "44.8378",
    lng: "-0.5792",
    population: "260 000",
    description:
      "Métropole dynamique du Sud-Ouest, Bordeaux allie patrimoine viticole, tourisme et un écosystème tech en pleine croissance autour de Darwin et de l'Euratlantique.",
    stats: {
      entreprises: "45 000 entreprises",
      searches: "7 200 recherches/mois pour 'site web Bordeaux'",
    },
    keywords: [
      "agence web Bordeaux",
      "création site internet Bordeaux",
      "SEO Bordeaux",
    ],
    faqItems: [
      {
        question: "Combien coûte un site web à Bordeaux ?",
        answer:
          "Un site vitrine à Bordeaux démarre à 500€ et un site e-commerce à 800€. Bordeaux étant une ville en plein essor numérique, nous créons des sites modernes adaptés au marché girondin.",
      },
      {
        question: "Pourquoi choisir ConvertiLab comme agence web à Bordeaux ?",
        answer:
          "Nous comprenons l'écosystème bordelais : domaines viticoles, startups de Darwin, commerces des Chartrons, restaurateurs et entreprises touristiques. Nos sites sont conçus pour performer dans la Gironde.",
      },
      {
        question: "En combien de temps mon site sera-t-il livré à Bordeaux ?",
        answer:
          "Votre site est livré en 7 jours ouvrés. Pour les projets e-commerce (caves à vin en ligne, boutiques), comptez 10 à 14 jours. Suivi réactif par visioconférence.",
      },
      {
        question: "Travaillez-vous avec des entreprises de tous secteurs à Bordeaux ?",
        answer:
          "Oui : domaines viticoles, restaurants, agences immobilières, startups tech, boutiques des Chartrons, cabinets de conseil, artisans et professions libérales de la métropole bordelaise.",
      },
      {
        question: "Proposez-vous le référencement SEO local pour Bordeaux ?",
        answer:
          "Absolument. Nous optimisons votre visibilité sur Bordeaux et la Gironde : fiche Google Business, mots-clés locaux, Google Maps, contenu géolocalisé pour capter les clients bordelais.",
      },
    ],
    testimonials: [
      {
        text: "Notre domaine viticole avait besoin d'un site élégant pour vendre en ligne. ConvertiLab a créé une boutique e-commerce magnifique. Les ventes en ligne représentent maintenant 30% de notre chiffre.",
        author: "Catherine Lefèvre",
        role: "Propriétaire",
        company: "Château Bel Air Saint-Émilion",
        metric: "30% du CA en vente en ligne",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      },
      {
        text: "Site livré en 6 jours pour notre agence d'architecture. Design minimaliste parfait, SEO au top. On est premier sur 'architecte Bordeaux centre' en 3 mois.",
        author: "Antoine Duprat",
        role: "Architecte fondateur",
        company: "Studio Duprat Architecture",
        metric: "Page 1 Google en 3 mois",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      },
    ],
  },
  {
    slug: "toulouse",
    name: "Toulouse",
    department: "Haute-Garonne",
    region: "Occitanie",
    postalCode: "31000",
    lat: "43.6047",
    lng: "1.4442",
    population: "504 000",
    description:
      "Capitale européenne de l'aéronautique et ville étudiante majeure, Toulouse dispose d'un écosystème technologique riche porté par Airbus, le spatial et les startups.",
    stats: {
      entreprises: "65 000 entreprises",
      searches: "8 000 recherches/mois pour 'site web Toulouse'",
    },
    keywords: [
      "agence web Toulouse",
      "création site internet Toulouse",
      "SEO Toulouse",
    ],
    faqItems: [
      {
        question: "Combien coûte un site web à Toulouse ?",
        answer:
          "Un site vitrine professionnel à Toulouse démarre à 500€ et un site e-commerce à 800€. Nous proposons des solutions adaptées aux entreprises toulousaines, de la startup tech au commerce de quartier.",
      },
      {
        question: "Pourquoi choisir ConvertiLab comme agence web à Toulouse ?",
        answer:
          "Toulouse est une ville d'ingénieurs et d'innovateurs. Nous créons des sites techniquement irréprochables, avec un design moderne et un SEO local ciblé sur la Haute-Garonne et l'Occitanie.",
      },
      {
        question: "En combien de temps mon site sera-t-il livré à Toulouse ?",
        answer:
          "7 jours ouvrés pour un site vitrine, 10 à 14 jours pour un e-commerce. Collaboration fluide à distance avec les entrepreneurs toulousains.",
      },
      {
        question: "Travaillez-vous avec des entreprises de tous secteurs à Toulouse ?",
        answer:
          "Oui : sous-traitants aéronautiques, startups tech, restaurants de la place du Capitole, commerces de Saint-Cyprien, cabinets médicaux, professions libérales et artisans de la Ville Rose.",
      },
      {
        question: "Proposez-vous le référencement SEO local pour Toulouse ?",
        answer:
          "Oui, nous optimisons votre référencement local à Toulouse : Google Maps, fiche Google Business, mots-clés géolocalisés pour la Haute-Garonne et contenu optimisé pour le marché occitan.",
      },
    ],
    testimonials: [
      {
        text: "En tant que sous-traitant aéronautique, notre site devait inspirer confiance. ConvertiLab a livré un site corporate impeccable qui nous a aidés à décrocher 3 nouveaux contrats B2B.",
        author: "Pierre Gauthier",
        role: "Directeur commercial",
        company: "AéroTech Industries Toulouse",
        metric: "3 nouveaux contrats B2B",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      },
      {
        text: "Notre boutique de violettes de Toulouse a enfin un site e-commerce digne de ce nom. Les commandes en ligne ont explosé, surtout pendant les fêtes. Merci ConvertiLab !",
        author: "Marie-Claire Roux",
        role: "Gérante",
        company: "Maison de la Violette",
        metric: "+80% de commandes en ligne",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
      },
    ],
  },
  {
    slug: "nice",
    name: "Nice",
    department: "Alpes-Maritimes",
    region: "Provence-Alpes-Côte d'Azur",
    postalCode: "06000",
    lat: "43.7102",
    lng: "7.2620",
    population: "342 000",
    description:
      "Capitale de la Côte d'Azur, Nice est un pôle touristique international avec un tissu économique diversifié entre hôtellerie, tech, santé et services aux entreprises.",
    stats: {
      entreprises: "42 000 entreprises",
      searches: "6 500 recherches/mois pour 'site web Nice'",
    },
    keywords: [
      "agence web Nice",
      "création site internet Nice",
      "SEO Nice",
    ],
    faqItems: [
      {
        question: "Combien coûte un site web à Nice ?",
        answer:
          "Un site vitrine professionnel à Nice démarre à 500€ et un site e-commerce à 800€. Pour les entreprises touristiques de la Côte d'Azur, nous proposons des sites multilingues optimisés.",
      },
      {
        question: "Pourquoi choisir ConvertiLab comme agence web à Nice ?",
        answer:
          "Nice est une ville internationale. Nous créons des sites multilingues, optimisés pour le tourisme et le marché azuréen, avec un design premium qui reflète le standing de la Côte d'Azur.",
      },
      {
        question: "En combien de temps mon site sera-t-il livré à Nice ?",
        answer:
          "Livraison en 7 jours ouvrés. Pour les sites multilingues ou e-commerce, 10 à 14 jours. Suivi personnalisé à distance pour les entreprises niçoises.",
      },
      {
        question: "Travaillez-vous avec des entreprises de tous secteurs à Nice ?",
        answer:
          "Oui : hôtels et résidences de la Promenade des Anglais, restaurants du Vieux-Nice, agences immobilières de luxe, cabinets médicaux, entreprises tech de Sophia Antipolis et commerces locaux.",
      },
      {
        question: "Proposez-vous le référencement SEO local pour Nice ?",
        answer:
          "Absolument. Nous optimisons votre visibilité sur Nice et les Alpes-Maritimes : SEO local, Google Maps, fiche Google Business, mots-clés touristiques multilingues et contenu géolocalisé.",
      },
    ],
    testimonials: [
      {
        text: "Notre hôtel-boutique sur la Promenade des Anglais avait besoin d'un site à la hauteur. ConvertiLab a créé un site élégant avec réservation intégrée. Les réservations directes ont augmenté de 35%.",
        author: "Isabelle Marchetti",
        role: "Directrice",
        company: "Hôtel Azur Promenade Nice",
        metric: "+35% de réservations directes",
        photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face",
      },
      {
        text: "Nous sommes une startup de Sophia Antipolis et ConvertiLab nous a livré un site SaaS moderne en 7 jours. Le design est professionnel et le SEO nous amène des leads qualifiés chaque semaine.",
        author: "Romain Blanc",
        role: "CTO",
        company: "SmartData Sophia Antipolis",
        metric: "+20 leads qualifiés/mois",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face",
      },
    ],
  },
  {
    slug: "nantes",
    name: "Nantes",
    department: "Loire-Atlantique",
    region: "Pays de la Loire",
    postalCode: "44000",
    lat: "47.2184",
    lng: "-1.5536",
    population: "320 000",
    description:
      "Métropole créative et numérique de l'Ouest, Nantes se distingue par son dynamisme entrepreneurial, sa French Tech et son écosystème culturel unique.",
    stats: {
      entreprises: "40 000 entreprises",
      searches: "5 800 recherches/mois pour 'site web Nantes'",
    },
    keywords: [
      "agence web Nantes",
      "création site internet Nantes",
      "SEO Nantes",
    ],
    faqItems: [
      {
        question: "Combien coûte un site web à Nantes ?",
        answer:
          "Un site vitrine professionnel à Nantes démarre à 500€ et un site e-commerce à 800€. Nantes étant une ville très numérique, nous misons sur la performance et le design pour vous démarquer en Loire-Atlantique.",
      },
      {
        question: "Pourquoi choisir ConvertiLab comme agence web à Nantes ?",
        answer:
          "Nantes est une capitale French Tech. Nous créons des sites à la hauteur de cet écosystème innovant, avec des technologies modernes (Next.js, Tailwind) et un SEO ciblé sur la métropole nantaise.",
      },
      {
        question: "En combien de temps mon site sera-t-il livré à Nantes ?",
        answer:
          "7 jours ouvrés pour un site vitrine, 10 à 14 jours pour un e-commerce. Collaboration à distance fluide avec les entrepreneurs nantais.",
      },
      {
        question: "Travaillez-vous avec des entreprises de tous secteurs à Nantes ?",
        answer:
          "Oui : startups de l'île de Nantes, commerces du passage Pommeraye, restaurants, cabinets de conseil, artisans, agences immobilières et entreprises du numérique de la métropole nantaise.",
      },
      {
        question: "Proposez-vous le référencement SEO local pour Nantes ?",
        answer:
          "Oui, nous optimisons votre référencement local à Nantes et en Loire-Atlantique : Google Maps, fiche Google Business, mots-clés géolocalisés et contenu optimisé pour le marché nantais.",
      },
    ],
    testimonials: [
      {
        text: "Notre agence de design sur l'île de Nantes avait besoin d'un portfolio en ligne percutant. ConvertiLab a livré un site créatif et ultra-rapide. Nous recevons 3 fois plus de demandes de devis.",
        author: "Camille Bertrand",
        role: "Directrice artistique",
        company: "Studio Graphik Nantes",
        metric: "x3 demandes de devis",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      },
      {
        text: "ConvertiLab a créé notre site de pâtisserie artisanale avec un e-commerce intégré. Les commandes en ligne ont décollé, surtout pour nos gâteaux nantais. Service impeccable.",
        author: "François Legendre",
        role: "Artisan pâtissier",
        company: "Pâtisserie Legendre Nantes",
        metric: "+45% de ventes en ligne",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      },
    ],
  },
  {
    slug: "strasbourg",
    name: "Strasbourg",
    department: "Bas-Rhin",
    region: "Grand Est",
    postalCode: "67000",
    lat: "48.5734",
    lng: "7.7521",
    population: "287 000",
    description:
      "Capitale européenne et carrefour franco-allemand, Strasbourg bénéficie d'un positionnement stratégique avec un tissu économique tourné vers l'international et les institutions.",
    stats: {
      entreprises: "35 000 entreprises",
      searches: "4 800 recherches/mois pour 'site web Strasbourg'",
    },
    keywords: [
      "agence web Strasbourg",
      "création site internet Strasbourg",
      "SEO Strasbourg",
    ],
    faqItems: [
      {
        question: "Combien coûte un site web à Strasbourg ?",
        answer:
          "Un site vitrine professionnel à Strasbourg démarre à 500€ et un site e-commerce à 800€. Pour les entreprises transfrontalières, nous proposons des sites bilingues français-allemand.",
      },
      {
        question: "Pourquoi choisir ConvertiLab comme agence web à Strasbourg ?",
        answer:
          "Strasbourg est une ville européenne par excellence. Nous créons des sites bilingues ou multilingues adaptés au marché alsacien et transfrontalier, avec un SEO ciblé sur le Bas-Rhin et le Grand Est.",
      },
      {
        question: "En combien de temps mon site sera-t-il livré à Strasbourg ?",
        answer:
          "7 jours ouvrés pour un site vitrine, 10 à 14 jours pour un e-commerce ou un site multilingue. Collaboration fluide à distance avec les entreprises strasbourgeoises.",
      },
      {
        question: "Travaillez-vous avec des entreprises de tous secteurs à Strasbourg ?",
        answer:
          "Oui : winstubs et restaurants alsaciens, institutions européennes, entreprises transfrontalières, commerces de la Petite France, cabinets médicaux, startups et artisans du Grand Est.",
      },
      {
        question: "Proposez-vous le référencement SEO local pour Strasbourg ?",
        answer:
          "Absolument. Nous optimisons votre visibilité sur Strasbourg, le Bas-Rhin et le marché transfrontalier : SEO bilingue, Google Maps, fiche Google Business et mots-clés géolocalisés.",
      },
    ],
    testimonials: [
      {
        text: "Notre winstub dans la Petite France avait besoin d'un site bilingue pour attirer les touristes allemands. ConvertiLab a livré un site magnifique. Nos réservations étrangères ont doublé.",
        author: "Hans Müller",
        role: "Gérant",
        company: "Winstub Au Pont Saint-Martin",
        metric: "x2 réservations internationales",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      },
      {
        text: "Site professionnel livré en 7 jours pour notre cabinet d'avocats spécialisé en droit européen. Le SEO local nous positionne en première page pour 'avocat droit européen Strasbourg'.",
        author: "Claire Weiss",
        role: "Avocate associée",
        company: "Cabinet Weiss & Associés Strasbourg",
        metric: "Page 1 Google en 2 mois",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
      },
    ],
  },
  {
    slug: "lille",
    name: "Lille",
    department: "Nord",
    region: "Hauts-de-France",
    postalCode: "59000",
    lat: "50.6292",
    lng: "3.0573",
    population: "236 000",
    description:
      "Capitale des Hauts-de-France et carrefour européen, Lille est un pôle commercial et universitaire dynamique avec un tissu de PME et de startups en plein essor.",
    stats: {
      entreprises: "32 000 entreprises",
      searches: "5 500 recherches/mois pour 'site web Lille'",
    },
    keywords: [
      "agence web Lille",
      "création site internet Lille",
      "SEO Lille",
    ],
    faqItems: [
      {
        question: "Combien coûte un site web à Lille ?",
        answer:
          "Un site vitrine professionnel à Lille démarre à 500€ et un site e-commerce à 800€. Lille étant un marché dynamique, nous créons des sites performants adaptés au tissu économique du Nord.",
      },
      {
        question: "Pourquoi choisir ConvertiLab comme agence web à Lille ?",
        answer:
          "Nous connaissons le marché lillois : commerces du Vieux-Lille, entreprises d'Euralille, startups de Lille French Tech, industries textiles et agroalimentaires du Nord. Nos sites sont conçus pour performer localement.",
      },
      {
        question: "En combien de temps mon site sera-t-il livré à Lille ?",
        answer:
          "7 jours ouvrés pour un site vitrine, 10 à 14 jours pour un e-commerce. Nous travaillons efficacement à distance avec les entreprises lilloises.",
      },
      {
        question: "Travaillez-vous avec des entreprises de tous secteurs à Lille ?",
        answer:
          "Oui : commerces du Vieux-Lille, estaminets, entreprises de la métropole lilloise, startups, cabinets médicaux, agences immobilières, artisans et professions libérales du Nord.",
      },
      {
        question: "Proposez-vous le référencement SEO local pour Lille ?",
        answer:
          "Oui, nous optimisons votre SEO local sur Lille et la métropole lilloise : fiche Google Business, Google Maps, mots-clés géolocalisés pour le Nord et contenu optimisé.",
      },
    ],
    testimonials: [
      {
        text: "Notre boutique de mode dans le Vieux-Lille a enfin un site e-commerce à la hauteur. Les ventes en ligne complètent parfaitement notre boutique physique. +50% de chiffre d'affaires global.",
        author: "Léa Vandenberghe",
        role: "Fondatrice",
        company: "Maison Vandenberghe Lille",
        metric: "+50% de CA global",
        photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face",
      },
      {
        text: "ConvertiLab a créé notre site d'agence d'intérim spécialisée. Le formulaire d'inscription en ligne et le SEO local nous amènent 40 nouveaux candidats par mois.",
        author: "Maxime Delattre",
        role: "Directeur",
        company: "Nord Intérim Solutions",
        metric: "+40 candidats/mois",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face",
      },
    ],
  },
  {
    slug: "montpellier",
    name: "Montpellier",
    department: "Hérault",
    region: "Occitanie",
    postalCode: "34000",
    lat: "43.6108",
    lng: "3.8767",
    population: "295 000",
    description:
      "Ville la plus dynamique du Sud en termes de croissance démographique, Montpellier est un pôle universitaire, médical et numérique majeur de l'Occitanie.",
    stats: {
      entreprises: "38 000 entreprises",
      searches: "5 200 recherches/mois pour 'site web Montpellier'",
    },
    keywords: [
      "agence web Montpellier",
      "création site internet Montpellier",
      "SEO Montpellier",
    ],
    faqItems: [
      {
        question: "Combien coûte un site web à Montpellier ?",
        answer:
          "Un site vitrine professionnel à Montpellier démarre à 500€ et un site e-commerce à 800€. Nous proposons des sites adaptés au marché héraultais avec un excellent rapport qualité-prix.",
      },
      {
        question: "Pourquoi choisir ConvertiLab comme agence web à Montpellier ?",
        answer:
          "Montpellier est une ville en pleine croissance numérique. Nous créons des sites modernes avec les dernières technologies, adaptés aux secteurs forts de la ville : santé, tech, tourisme et enseignement.",
      },
      {
        question: "En combien de temps mon site sera-t-il livré à Montpellier ?",
        answer:
          "7 jours ouvrés pour un site vitrine, 10 à 14 jours pour un e-commerce. Suivi personnalisé à distance pour les entrepreneurs montpelliérains.",
      },
      {
        question: "Travaillez-vous avec des entreprises de tous secteurs à Montpellier ?",
        answer:
          "Oui : cliniques et cabinets médicaux, startups de l'Antigone, restaurants de l'Écusson, commerces du centre historique, agences immobilières, entreprises viticoles de l'Hérault et prestataires touristiques.",
      },
      {
        question: "Proposez-vous le référencement SEO local pour Montpellier ?",
        answer:
          "Absolument. Nous optimisons votre visibilité sur Montpellier et l'Hérault : Google Maps, fiche Google Business, mots-clés géolocalisés et contenu optimisé pour l'Occitanie.",
      },
    ],
    testimonials: [
      {
        text: "Notre clinique dentaire avait besoin d'un site rassurant et bien référencé. ConvertiLab a livré un site parfait. Nous recevons 15 nouveaux patients par mois via Google.",
        author: "Dr. Sophie Mercier",
        role: "Chirurgien-dentiste",
        company: "Centre Dentaire Antigone Montpellier",
        metric: "+15 patients/mois via le web",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      },
      {
        text: "Notre startup edtech a décollé grâce au site créé par ConvertiLab. Design moderne, tunnel de conversion optimisé, SEO performant. 200 inscriptions le premier mois.",
        author: "Yann Delmas",
        role: "CEO",
        company: "LearnUp Montpellier",
        metric: "200 inscriptions en 1 mois",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      },
    ],
  },
  {
    slug: "rennes",
    name: "Rennes",
    department: "Ille-et-Vilaine",
    region: "Bretagne",
    postalCode: "35000",
    lat: "48.1173",
    lng: "-1.6778",
    population: "222 000",
    description:
      "Capitale de la Bretagne et pôle numérique majeur, Rennes est reconnue pour son écosystème tech, ses universités et son dynamisme entrepreneurial.",
    stats: {
      entreprises: "28 000 entreprises",
      searches: "4 500 recherches/mois pour 'site web Rennes'",
    },
    keywords: [
      "agence web Rennes",
      "création site internet Rennes",
      "SEO Rennes",
    ],
    faqItems: [
      {
        question: "Combien coûte un site web à Rennes ?",
        answer:
          "Un site vitrine professionnel à Rennes démarre à 500€ et un site e-commerce à 800€. Rennes étant un pôle numérique, nous créons des sites techniquement excellents pour le marché breton.",
      },
      {
        question: "Pourquoi choisir ConvertiLab comme agence web à Rennes ?",
        answer:
          "Rennes est la capitale numérique de la Bretagne avec Digital Saint-Malo et Rennes French Tech. Nous créons des sites performants adaptés à cet écosystème innovant et au marché d'Ille-et-Vilaine.",
      },
      {
        question: "En combien de temps mon site sera-t-il livré à Rennes ?",
        answer:
          "7 jours ouvrés pour un site vitrine, 10 à 14 jours pour un e-commerce. Collaboration efficace à distance avec les entreprises rennaises.",
      },
      {
        question: "Travaillez-vous avec des entreprises de tous secteurs à Rennes ?",
        answer:
          "Oui : startups de la French Tech Rennes, crêperies et restaurants, commerces du centre historique, entreprises agroalimentaires bretonnes, cabinets de conseil et professions libérales.",
      },
      {
        question: "Proposez-vous le référencement SEO local pour Rennes ?",
        answer:
          "Oui, nous optimisons votre SEO local sur Rennes et l'Ille-et-Vilaine : Google Maps, fiche Google Business, mots-clés bretons géolocalisés et contenu adapté au marché rennais.",
      },
    ],
    testimonials: [
      {
        text: "Notre crêperie du centre de Rennes avait un vieux site qui ne ramenait personne. ConvertiLab a tout refait et maintenant nous sommes en top 3 pour 'crêperie Rennes'. Les réservations ont explosé.",
        author: "Gwenaëlle Le Bihan",
        role: "Gérante",
        company: "Crêperie Ty Breizh Rennes",
        metric: "Top 3 Google + x2 réservations",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
      },
      {
        text: "Site professionnel pour notre ESN rennaise, livré en une semaine. Le design inspire confiance et le SEO nous génère des demandes de devis régulières. Excellent travail.",
        author: "Erwan Kermarrec",
        role: "Directeur général",
        company: "BreizhTech Services",
        metric: "+30 demandes de devis/mois",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      },
    ],
  },
  {
    slug: "versailles",
    name: "Versailles",
    department: "Yvelines",
    region: "Île-de-France",
    postalCode: "78000",
    lat: "48.8014",
    lng: "2.1301",
    population: "85 000",
    description:
      "Ville royale et préfecture des Yvelines, Versailles allie prestige historique et dynamisme économique avec de nombreuses professions libérales et commerces haut de gamme.",
    stats: {
      entreprises: "6 500 entreprises",
      searches: "2 200 recherches/mois pour 'site web Versailles'",
    },
    keywords: [
      "agence web Versailles",
      "création site internet Versailles",
      "SEO Versailles",
    ],
    faqItems: [
      {
        question: "Combien coûte un site web à Versailles ?",
        answer:
          "Un site vitrine professionnel à Versailles démarre à 500€ et un site e-commerce à 800€. Pour une ville au standing de Versailles, nous soignons particulièrement le design et l'élégance du site.",
      },
      {
        question: "Pourquoi choisir ConvertiLab comme agence web à Versailles ?",
        answer:
          "Versailles est une ville exigeante avec une clientèle haut de gamme. Nous créons des sites élégants et performants qui reflètent le prestige de votre activité dans les Yvelines.",
      },
      {
        question: "En combien de temps mon site sera-t-il livré à Versailles ?",
        answer:
          "7 jours ouvrés pour un site vitrine, 10 à 14 jours pour un e-commerce. Proximité immédiate avec Versailles pour des échanges fluides.",
      },
      {
        question: "Travaillez-vous avec des entreprises de tous secteurs à Versailles ?",
        answer:
          "Oui : boutiques du quartier Saint-Louis, professions libérales, cabinets médicaux, agences immobilières de prestige, restaurants gastronomiques et commerces du centre-ville de Versailles.",
      },
      {
        question: "Proposez-vous le référencement SEO local pour Versailles ?",
        answer:
          "Absolument. Nous optimisons votre visibilité sur Versailles et les Yvelines : fiche Google Business, Google Maps, mots-clés géolocalisés et contenu premium adapté au marché versaillais.",
      },
    ],
    testimonials: [
      {
        text: "Notre galerie d'art à Versailles avait besoin d'un site à la hauteur de nos oeuvres. ConvertiLab a créé un portfolio en ligne magnifique. Les visites en galerie ont augmenté de 40%.",
        author: "Béatrice de Montfort",
        role: "Galeriste",
        company: "Galerie Montfort Versailles",
        metric: "+40% de visites en galerie",
        photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face",
      },
      {
        text: "Site impeccable pour notre cabinet notarial. Design sobre et rassurant, parfaitement adapté à notre clientèle versaillaise. Les prises de rendez-vous en ligne ont simplifié notre quotidien.",
        author: "Maître Henri Delacroix",
        role: "Notaire associé",
        company: "Office Notarial Delacroix Versailles",
        metric: "+55% de RDV en ligne",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face",
      },
    ],
  },
  {
    slug: "saint-germain-en-laye",
    name: "Saint-Germain-en-Laye",
    department: "Yvelines",
    region: "Île-de-France",
    postalCode: "78100",
    lat: "48.8986",
    lng: "2.0935",
    population: "46 000",
    description:
      "Ville résidentielle prestigieuse des Yvelines, Saint-Germain-en-Laye accueille de nombreux commerces haut de gamme, professions libérales et cadres supérieurs.",
    stats: {
      entreprises: "3 800 entreprises",
      searches: "1 400 recherches/mois pour 'site web Saint-Germain-en-Laye'",
    },
    keywords: [
      "agence web Saint-Germain-en-Laye",
      "création site internet Saint-Germain-en-Laye",
      "SEO Saint-Germain-en-Laye",
    ],
    faqItems: [
      {
        question: "Combien coûte un site web à Saint-Germain-en-Laye ?",
        answer:
          "Un site vitrine professionnel à Saint-Germain-en-Laye démarre à 500€ et un site e-commerce à 800€. Nous créons des sites premium adaptés au positionnement haut de gamme de la ville.",
      },
      {
        question: "Pourquoi choisir ConvertiLab à Saint-Germain-en-Laye ?",
        answer:
          "Saint-Germain-en-Laye est une ville de standing avec une clientèle exigeante. Nous créons des sites élégants, rapides et parfaitement optimisés pour attirer les habitants des Yvelines.",
      },
      {
        question: "En combien de temps mon site sera-t-il livré à Saint-Germain-en-Laye ?",
        answer:
          "7 jours ouvrés pour un site vitrine. Nous sommes basés en Île-de-France, à proximité de Saint-Germain-en-Laye, pour un accompagnement réactif.",
      },
      {
        question: "Travaillez-vous avec des entreprises de Saint-Germain-en-Laye ?",
        answer:
          "Oui : boutiques de la rue au Pain, restaurants, cabinets médicaux, professions libérales, agences immobilières et commerces de luxe du centre-ville de Saint-Germain-en-Laye.",
      },
      {
        question: "Proposez-vous le SEO local pour Saint-Germain-en-Laye ?",
        answer:
          "Oui, nous optimisons votre visibilité locale sur Saint-Germain-en-Laye et les Yvelines : Google Maps, fiche Google Business, mots-clés géolocalisés et contenu adapté.",
      },
    ],
    testimonials: [
      {
        text: "Notre institut de beauté à Saint-Germain avait un site vieillissant. ConvertiLab a créé un site moderne avec prise de RDV en ligne. Notre clientèle a rajeuni et les réservations ont doublé.",
        author: "Audrey Laroche",
        role: "Directrice",
        company: "Institut Laroche Saint-Germain",
        metric: "x2 réservations en ligne",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
      },
      {
        text: "Excellent travail pour notre cabinet de kinésithérapie. Le site est clair, rassurant et bien référencé. Nos patients nous trouvent facilement sur Google.",
        author: "Thierry Bonnard",
        role: "Kinésithérapeute",
        company: "Cabinet Kiné Saint-Germain Centre",
        metric: "+10 nouveaux patients/mois",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      },
    ],
  },
  {
    slug: "levallois-perret",
    name: "Levallois-Perret",
    department: "Hauts-de-Seine",
    region: "Île-de-France",
    postalCode: "92300",
    lat: "48.8934",
    lng: "2.2882",
    population: "65 000",
    description:
      "Commune la plus densément peuplée d'Europe, Levallois-Perret est un pôle d'entreprises dynamique avec de nombreux sièges sociaux et PME innovantes.",
    stats: {
      entreprises: "8 500 entreprises",
      searches: "1 800 recherches/mois pour 'site web Levallois-Perret'",
    },
    keywords: [
      "agence web Levallois-Perret",
      "création site internet Levallois-Perret",
      "SEO Levallois-Perret",
    ],
    faqItems: [
      {
        question: "Combien coûte un site web à Levallois-Perret ?",
        answer:
          "Un site vitrine professionnel à Levallois-Perret démarre à 500€ et un site e-commerce à 800€. Levallois étant un pôle d'entreprises majeur, nous créons des sites à forte valeur ajoutée.",
      },
      {
        question: "Pourquoi choisir ConvertiLab à Levallois-Perret ?",
        answer:
          "Levallois-Perret concentre plus de 8 500 entreprises sur une petite superficie. Se démarquer est crucial. Nous créons des sites performants avec un SEO local poussé pour vous rendre visible dans les Hauts-de-Seine.",
      },
      {
        question: "En combien de temps mon site sera-t-il livré à Levallois-Perret ?",
        answer:
          "7 jours ouvrés pour un site vitrine. Nous sommes à proximité immédiate de Levallois-Perret pour un accompagnement fluide et réactif.",
      },
      {
        question: "Travaillez-vous avec des entreprises de Levallois-Perret ?",
        answer:
          "Oui : sièges sociaux, agences de communication, startups, commerces de proximité, professions libérales et entreprises de services installées à Levallois-Perret.",
      },
      {
        question: "Proposez-vous le SEO local pour Levallois-Perret ?",
        answer:
          "Absolument. Nous optimisons votre visibilité locale sur Levallois-Perret et les Hauts-de-Seine : Google Maps, fiche Google Business, mots-clés géolocalisés et contenu ciblé.",
      },
    ],
    testimonials: [
      {
        text: "Notre agence de communication à Levallois avait besoin d'un site vitrine impactant. ConvertiLab a livré en 5 jours un site qui impressionne nos prospects. Le design est exactement ce qu'il nous fallait.",
        author: "Sarah Cohen",
        role: "Directrice associée",
        company: "Agence Horizon Levallois",
        metric: "+35% de prospects qualifiés",
        photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face",
      },
      {
        text: "Site e-commerce performant pour notre boutique de cosmétiques bio. L'interface est intuitive et le SEO nous positionne en première page. Nos ventes en ligne ont triplé.",
        author: "David Petit",
        role: "Fondateur",
        company: "BioBeauté Levallois",
        metric: "x3 ventes en ligne",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      },
    ],
  },
  {
    slug: "courbevoie",
    name: "Courbevoie",
    department: "Hauts-de-Seine",
    region: "Île-de-France",
    postalCode: "92400",
    lat: "48.8966",
    lng: "2.2566",
    population: "82 000",
    description:
      "Aux portes de La Défense, Courbevoie est un pôle d'activité majeur des Hauts-de-Seine avec de nombreux sièges sociaux et un tissu de PME dynamiques.",
    stats: {
      entreprises: "9 000 entreprises",
      searches: "1 600 recherches/mois pour 'site web Courbevoie'",
    },
    keywords: [
      "agence web Courbevoie",
      "création site internet Courbevoie",
      "SEO Courbevoie",
    ],
    faqItems: [
      {
        question: "Combien coûte un site web à Courbevoie ?",
        answer:
          "Un site vitrine professionnel à Courbevoie démarre à 500€ et un site e-commerce à 800€. Nous proposons des solutions digitales adaptées aux entreprises courbevoisien, du commerce local au prestataire B2B.",
      },
      {
        question: "Pourquoi choisir ConvertiLab à Courbevoie ?",
        answer:
          "Courbevoie est stratégiquement positionnée entre Paris et La Défense. Nous créons des sites qui captent à la fois la clientèle locale et les professionnels du quartier d'affaires, avec un SEO ciblé sur les Hauts-de-Seine.",
      },
      {
        question: "En combien de temps mon site sera-t-il livré à Courbevoie ?",
        answer:
          "7 jours ouvrés pour un site vitrine, 10 à 14 jours pour un e-commerce. Proximité directe avec Courbevoie pour des échanges rapides.",
      },
      {
        question: "Travaillez-vous avec des entreprises de Courbevoie ?",
        answer:
          "Oui : entreprises du quartier Charras, commerces du centre-ville, prestataires B2B proches de La Défense, professions libérales, restaurants et artisans de Courbevoie.",
      },
      {
        question: "Proposez-vous le SEO local pour Courbevoie ?",
        answer:
          "Oui, nous optimisons votre référencement local sur Courbevoie et La Défense : Google Maps, fiche Google Business, mots-clés géolocalisés Hauts-de-Seine et contenu ciblé.",
      },
    ],
    testimonials: [
      {
        text: "Notre cabinet de conseil en management à Courbevoie avait besoin d'un site corporate. ConvertiLab a livré un site élégant qui rassure nos clients grands comptes. Les demandes de contact ont augmenté de 45%.",
        author: "Nathalie Girard",
        role: "Associée",
        company: "Girard Consulting Courbevoie",
        metric: "+45% de demandes de contact",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      },
      {
        text: "Site vitrine parfait pour notre boulangerie artisanale. Le SEO local nous place en tête des résultats pour 'boulangerie Courbevoie'. Nos ventes du samedi ont bondi de 30%.",
        author: "Mathieu Fournier",
        role: "Boulanger",
        company: "Fournier Boulangerie Courbevoie",
        metric: "+30% de ventes le week-end",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      },
    ],
  },
  {
    slug: "la-defense-puteaux",
    name: "La Défense (Puteaux)",
    department: "Hauts-de-Seine",
    region: "Île-de-France",
    postalCode: "92800",
    lat: "48.8920",
    lng: "2.2379",
    population: "45 000",
    description:
      "Premier quartier d'affaires européen, La Défense concentre des milliers d'entreprises, de startups et de prestataires de services B2B sur le territoire de Puteaux.",
    stats: {
      entreprises: "15 000 entreprises",
      searches: "3 200 recherches/mois pour 'site web La Défense'",
    },
    keywords: [
      "agence web La Défense",
      "création site internet Puteaux",
      "SEO La Défense",
    ],
    faqItems: [
      {
        question: "Combien coûte un site web à La Défense ?",
        answer:
          "Un site vitrine professionnel à La Défense démarre à 500€ et un site e-commerce à 800€. Pour les entreprises du quartier d'affaires, nous créons des sites corporate haut de gamme avec un focus B2B.",
      },
      {
        question: "Pourquoi choisir ConvertiLab à La Défense ?",
        answer:
          "La Défense est le premier quartier d'affaires d'Europe. Nous créons des sites corporate premium, des landing pages B2B et des plateformes optimisées pour la génération de leads auprès des décideurs.",
      },
      {
        question: "En combien de temps mon site sera-t-il livré à La Défense ?",
        answer:
          "7 jours ouvrés pour un site vitrine corporate. Nous sommes à quelques minutes de La Défense pour des rendez-vous rapides et un suivi réactif.",
      },
      {
        question: "Travaillez-vous avec des entreprises de La Défense ?",
        answer:
          "Oui : cabinets de conseil, ESN, startups des tours, prestataires B2B, entreprises de services, commerces de Puteaux et professions libérales du quartier d'affaires.",
      },
      {
        question: "Proposez-vous le SEO local pour La Défense ?",
        answer:
          "Absolument. Nous optimisons votre visibilité sur La Défense et Puteaux : SEO B2B, Google Maps, fiche Google Business, mots-clés corporate et contenu ciblé décideurs.",
      },
    ],
    testimonials: [
      {
        text: "Notre ESN à La Défense avait besoin d'un site qui inspire confiance aux grands comptes. ConvertiLab a créé un site corporate premium. Nous avons signé 5 nouveaux contrats grâce au site.",
        author: "Olivier Dumas",
        role: "Directeur commercial",
        company: "NexIT Services La Défense",
        metric: "5 nouveaux contrats signés",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face",
      },
      {
        text: "Landing page de génération de leads pour notre cabinet de recrutement. ConvertiLab a optimisé le tunnel de conversion. Nous générons 60 leads qualifiés par mois via le site.",
        author: "Amélie Rousseau",
        role: "Fondatrice",
        company: "TalentFirst Recrutement",
        metric: "60 leads qualifiés/mois",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
      },
    ],
  },
  {
    slug: "cannes",
    name: "Cannes",
    department: "Alpes-Maritimes",
    region: "Provence-Alpes-Côte d'Azur",
    postalCode: "06400",
    lat: "43.5528",
    lng: "7.0174",
    population: "75 000",
    description:
      "Ville internationale connue pour son festival, Cannes est un pôle touristique et événementiel de premier plan avec une économie tournée vers le luxe et l'hôtellerie.",
    stats: {
      entreprises: "9 500 entreprises",
      searches: "3 000 recherches/mois pour 'site web Cannes'",
    },
    keywords: [
      "agence web Cannes",
      "création site internet Cannes",
      "SEO Cannes",
    ],
    faqItems: [
      {
        question: "Combien coûte un site web à Cannes ?",
        answer:
          "Un site vitrine professionnel à Cannes démarre à 500€ et un site e-commerce à 800€. Pour les entreprises cannoises du luxe et du tourisme, nous créons des sites premium multilingues.",
      },
      {
        question: "Pourquoi choisir ConvertiLab comme agence web à Cannes ?",
        answer:
          "Cannes est une ville de standing international. Nous créons des sites élégants, multilingues et optimisés pour le tourisme haut de gamme, l'événementiel et l'hôtellerie de luxe des Alpes-Maritimes.",
      },
      {
        question: "En combien de temps mon site sera-t-il livré à Cannes ?",
        answer:
          "7 jours ouvrés pour un site vitrine, 10 à 14 jours pour un site multilingue ou e-commerce. Suivi réactif pour les entreprises cannoises.",
      },
      {
        question: "Travaillez-vous avec des entreprises de tous secteurs à Cannes ?",
        answer:
          "Oui : hôtels de la Croisette, restaurants, boutiques de luxe, agences immobilières de prestige, sociétés événementielles, yachting et entreprises touristiques de la Côte d'Azur.",
      },
      {
        question: "Proposez-vous le référencement SEO local pour Cannes ?",
        answer:
          "Oui, nous optimisons votre visibilité sur Cannes et les Alpes-Maritimes : SEO multilingue, Google Maps, fiche Google Business et contenu optimisé pour le marché touristique international.",
      },
    ],
    testimonials: [
      {
        text: "Notre hôtel 5 étoiles sur la Croisette avait besoin d'un site luxueux avec réservation intégrée. ConvertiLab a livré un site sublime. Les réservations directes ont augmenté de 40%, réduisant notre dépendance aux OTA.",
        author: "Philippe Moretti",
        role: "Directeur général",
        company: "Grand Hôtel de la Croisette",
        metric: "+40% de réservations directes",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      },
      {
        text: "Site multilingue parfait pour notre agence de location de yachts. Design premium, photos plein écran, formulaire de devis intégré. Nos demandes internationales ont doublé.",
        author: "Marina Andretti",
        role: "Directrice commerciale",
        company: "Azur Yacht Charter Cannes",
        metric: "x2 demandes internationales",
        photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face",
      },
    ],
  },
  {
    slug: "aix-en-provence",
    name: "Aix-en-Provence",
    department: "Bouches-du-Rhône",
    region: "Provence-Alpes-Côte d'Azur",
    postalCode: "13100",
    lat: "43.5297",
    lng: "5.4474",
    population: "145 000",
    description:
      "Ville d'art et de culture, Aix-en-Provence est aussi un pôle économique majeur avec son technopôle de l'Arbois, ses cabinets juridiques et son tourisme culturel.",
    stats: {
      entreprises: "18 000 entreprises",
      searches: "3 800 recherches/mois pour 'site web Aix-en-Provence'",
    },
    keywords: [
      "agence web Aix-en-Provence",
      "création site internet Aix-en-Provence",
      "SEO Aix-en-Provence",
    ],
    faqItems: [
      {
        question: "Combien coûte un site web à Aix-en-Provence ?",
        answer:
          "Un site vitrine professionnel à Aix-en-Provence démarre à 500€ et un site e-commerce à 800€. Nous créons des sites élégants adaptés au marché aixois et au standing de la ville.",
      },
      {
        question: "Pourquoi choisir ConvertiLab comme agence web à Aix-en-Provence ?",
        answer:
          "Aix-en-Provence est une ville de prestige avec un marché exigeant. Nous créons des sites qui reflètent cette qualité : design soigné, SEO local poussé sur les Bouches-du-Rhône et performances optimales.",
      },
      {
        question: "En combien de temps mon site sera-t-il livré à Aix-en-Provence ?",
        answer:
          "7 jours ouvrés pour un site vitrine, 10 à 14 jours pour un e-commerce. Collaboration fluide à distance avec les entreprises aixoises.",
      },
      {
        question: "Travaillez-vous avec des entreprises de tous secteurs à Aix-en-Provence ?",
        answer:
          "Oui : cabinets d'avocats du cours Mirabeau, restaurants, entreprises du technopôle de l'Arbois, boutiques du centre historique, domaines viticoles de la région et professions libérales.",
      },
      {
        question: "Proposez-vous le référencement SEO local pour Aix-en-Provence ?",
        answer:
          "Absolument. Nous optimisons votre visibilité sur Aix-en-Provence et les Bouches-du-Rhône : Google Maps, fiche Google Business, mots-clés locaux et contenu géolocalisé provençal.",
      },
    ],
    testimonials: [
      {
        text: "Notre cabinet d'avocats sur le cours Mirabeau a enfin un site digne de notre réputation. ConvertiLab a compris notre besoin d'élégance et de sérieux. Les demandes de consultation ont augmenté de 30%.",
        author: "Maître Valérie Arnaud",
        role: "Avocate associée",
        company: "Cabinet Arnaud & Partenaires Aix",
        metric: "+30% de consultations",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      },
      {
        text: "Site e-commerce pour notre domaine viticole près d'Aix. Le design met en valeur nos vins et les commandes en ligne affluent, surtout de clients étrangers. Un investissement rentabilisé en 2 mois.",
        author: "Jean-Marc Castellane",
        role: "Vigneron",
        company: "Domaine Castellane Provence",
        metric: "ROI en 2 mois",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      },
    ],
  },
  {
    slug: "grenoble",
    name: "Grenoble",
    department: "Isère",
    region: "Auvergne-Rhône-Alpes",
    postalCode: "38000",
    lat: "45.1885",
    lng: "5.7245",
    population: "158 000",
    description:
      "Capitale des Alpes et pôle d'innovation scientifique et technologique, Grenoble concentre des laboratoires de recherche, des startups deep tech et un écosystème montagne dynamique.",
    stats: {
      entreprises: "22 000 entreprises",
      searches: "4 200 recherches/mois pour 'site web Grenoble'",
    },
    keywords: [
      "agence web Grenoble",
      "création site internet Grenoble",
      "SEO Grenoble",
    ],
    faqItems: [
      {
        question: "Combien coûte un site web à Grenoble ?",
        answer:
          "Un site vitrine professionnel à Grenoble démarre à 500€ et un site e-commerce à 800€. Grenoble étant un pôle tech, nous créons des sites techniquement excellents adaptés au marché isérois.",
      },
      {
        question: "Pourquoi choisir ConvertiLab comme agence web à Grenoble ?",
        answer:
          "Grenoble est une ville d'innovation avec le CEA, le CNRS et des centaines de startups. Nous créons des sites performants pour les entreprises tech, les commerces de montagne et les professions libérales de l'Isère.",
      },
      {
        question: "En combien de temps mon site sera-t-il livré à Grenoble ?",
        answer:
          "7 jours ouvrés pour un site vitrine, 10 à 14 jours pour un e-commerce. Collaboration efficace à distance avec les entreprises grenobloises.",
      },
      {
        question: "Travaillez-vous avec des entreprises de tous secteurs à Grenoble ?",
        answer:
          "Oui : startups deep tech, entreprises de sport et montagne, commerces du centre-ville, cabinets médicaux du CHU, professions libérales, restaurants et acteurs du tourisme alpin.",
      },
      {
        question: "Proposez-vous le référencement SEO local pour Grenoble ?",
        answer:
          "Oui, nous optimisons votre SEO local sur Grenoble et l'Isère : Google Maps, fiche Google Business, mots-clés géolocalisés pour les Alpes et contenu adapté au marché grenoblois.",
      },
    ],
    testimonials: [
      {
        text: "Notre magasin de ski à Grenoble avait besoin d'un e-commerce performant pour la saison d'hiver. ConvertiLab a livré un site rapide avec gestion de stock. Nos ventes en ligne ont atteint 25% du CA.",
        author: "Lucas Perrin",
        role: "Gérant",
        company: "Alpes Ski Shop Grenoble",
        metric: "25% du CA en ligne",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face",
      },
      {
        text: "Site vitrine pour notre laboratoire de recherche spin-off. Le design scientifique et professionnel nous a aidés à lever 500K€. ConvertiLab comprend le monde de la deep tech.",
        author: "Dr. Aline Faure",
        role: "CEO",
        company: "NanoLab Grenoble",
        metric: "Levée de 500K€ facilitée",
        photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face",
      },
    ],
  },
  {
    slug: "dijon",
    name: "Dijon",
    department: "Côte-d'Or",
    region: "Bourgogne-Franche-Comté",
    postalCode: "21000",
    lat: "47.3220",
    lng: "5.0415",
    population: "160 000",
    description:
      "Capitale de la Bourgogne et ville gastronomique classée UNESCO, Dijon allie patrimoine, tourisme oenologique et un tissu économique diversifié en Côte-d'Or.",
    stats: {
      entreprises: "18 000 entreprises",
      searches: "3 500 recherches/mois pour 'site web Dijon'",
    },
    keywords: [
      "agence web Dijon",
      "création site internet Dijon",
      "SEO Dijon",
    ],
    faqItems: [
      {
        question: "Combien coûte un site web à Dijon ?",
        answer:
          "Un site vitrine professionnel à Dijon démarre à 500€ et un site e-commerce à 800€. Nous créons des sites adaptés au marché bourguignon avec un design soigné et un SEO local efficace.",
      },
      {
        question: "Pourquoi choisir ConvertiLab comme agence web à Dijon ?",
        answer:
          "Dijon est une ville au patrimoine riche avec un tourisme oenologique en plein essor. Nous créons des sites qui mettent en valeur votre activité en Côte-d'Or, qu'il s'agisse de gastronomie, vin ou commerce local.",
      },
      {
        question: "En combien de temps mon site sera-t-il livré à Dijon ?",
        answer:
          "7 jours ouvrés pour un site vitrine, 10 à 14 jours pour un e-commerce. Suivi personnalisé à distance pour les entreprises dijonnaises.",
      },
      {
        question: "Travaillez-vous avec des entreprises de tous secteurs à Dijon ?",
        answer:
          "Oui : domaines viticoles de Bourgogne, restaurants gastronomiques, moutarderies, commerces de la rue de la Liberté, cabinets médicaux, professions libérales et acteurs du tourisme en Côte-d'Or.",
      },
      {
        question: "Proposez-vous le référencement SEO local pour Dijon ?",
        answer:
          "Absolument. Nous optimisons votre visibilité sur Dijon et la Côte-d'Or : Google Maps, fiche Google Business, mots-clés oenologiques et gastronomiques, contenu géolocalisé bourguignon.",
      },
    ],
    testimonials: [
      {
        text: "Notre maison de négoce en vins de Bourgogne avait besoin d'un site e-commerce élégant. ConvertiLab a créé une boutique en ligne magnifique. Les commandes internationales ont augmenté de 55%.",
        author: "Bernard Chauvot",
        role: "Directeur",
        company: "Maison Chauvot Vins de Bourgogne",
        metric: "+55% de commandes internationales",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      },
      {
        text: "Site vitrine pour notre restaurant étoilé à Dijon. Le design gastronomique est parfait, les photos sont sublimées et les réservations en ligne ont doublé. Merci ConvertiLab !",
        author: "Charlotte Moreau",
        role: "Chef propriétaire",
        company: "La Table Bourguignonne Dijon",
        metric: "x2 réservations en ligne",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
      },
    ],
  },
  {
    slug: "annecy",
    name: "Annecy",
    department: "Haute-Savoie",
    region: "Auvergne-Rhône-Alpes",
    postalCode: "74000",
    lat: "45.8992",
    lng: "6.1294",
    population: "130 000",
    description:
      "Surnommée la Venise des Alpes, Annecy est un joyau touristique et un pôle économique dynamique de Haute-Savoie, entre tourisme, outdoor et industries de précision.",
    stats: {
      entreprises: "15 000 entreprises",
      searches: "3 200 recherches/mois pour 'site web Annecy'",
    },
    keywords: [
      "agence web Annecy",
      "création site internet Annecy",
      "SEO Annecy",
    ],
    faqItems: [
      {
        question: "Combien coûte un site web à Annecy ?",
        answer:
          "Un site vitrine professionnel à Annecy démarre à 500€ et un site e-commerce à 800€. Pour les entreprises touristiques de Haute-Savoie, nous proposons des sites multilingues et performants.",
      },
      {
        question: "Pourquoi choisir ConvertiLab comme agence web à Annecy ?",
        answer:
          "Annecy est une ville touristique internationale avec un marché outdoor et montagne unique. Nous créons des sites qui captent cette clientèle touristique et locale, avec un SEO optimisé pour la Haute-Savoie.",
      },
      {
        question: "En combien de temps mon site sera-t-il livré à Annecy ?",
        answer:
          "7 jours ouvrés pour un site vitrine, 10 à 14 jours pour un e-commerce. Collaboration fluide à distance avec les entrepreneurs annéciens.",
      },
      {
        question: "Travaillez-vous avec des entreprises de tous secteurs à Annecy ?",
        answer:
          "Oui : hôtels et locations saisonnières, restaurants de la vieille ville, moniteurs et écoles de sports outdoor, commerces du centre, industries de décolletage et entreprises touristiques du lac d'Annecy.",
      },
      {
        question: "Proposez-vous le référencement SEO local pour Annecy ?",
        answer:
          "Oui, nous optimisons votre visibilité sur Annecy et la Haute-Savoie : Google Maps, fiche Google Business, mots-clés touristiques, contenu multilingue et référencement outdoor/montagne.",
      },
    ],
    testimonials: [
      {
        text: "Notre école de parapente au-dessus du lac d'Annecy avait besoin d'un site multilingue pour attirer les touristes. ConvertiLab a livré un site spectaculaire. Les réservations étrangères ont augmenté de 70%.",
        author: "Sébastien Revel",
        role: "Moniteur fondateur",
        company: "Annecy Parapente Aventure",
        metric: "+70% de réservations étrangères",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      },
      {
        text: "Site e-commerce pour notre fromagerie artisanale. Le design met en valeur nos produits de Haute-Savoie et les commandes en ligne affluent de toute la France. Investissement rentabilisé en 6 semaines.",
        author: "Marie-Josée Dufour",
        role: "Fromagère artisanale",
        company: "Fromagerie du Lac Annecy",
        metric: "ROI en 6 semaines",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      },
    ],
  },
];

export const getCityBySlug = (slug: string) =>
  cities.find((c) => c.slug === slug);
