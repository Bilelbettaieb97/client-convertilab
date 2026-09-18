/**
 * Contenu propre à chaque ville, pour les pages /agence-web/[ville] qui reçoivent
 * déjà des impressions en page 2 de Google (Search Console, 90 jours au 18/09/2026).
 * Écrit d'après les requêtes réelles de chaque ville : ce que les gens tapent,
 * les quartiers et communes d'où ils viennent, les secteurs qui font l'économie locale.
 * Les villes absentes d'ici gardent le gabarit commun.
 */

export interface DemandeLocale {
  titre: string;
  texte: string;
  href: string;
  lien: string;
}

export interface SecteurLocal {
  nom: string;
  texte: string;
}

export interface ContenuLocal {
  /** Deux ou trois paragraphes, sous le marché local, qui ne parlent que de cette ville. */
  accroche: string[];
  /** Ce que les entreprises de la ville cherchent sur Google, et la page qui y répond. */
  demandes: DemandeLocale[];
  /** Quartiers, zones d'activité et communes voisines d'où viennent les demandes. */
  zones: string[];
  /** Les secteurs qui comptent localement, avec ce que le web change pour chacun. */
  secteurs: SecteurLocal[];
  /** Remplace la FAQ générique de la ville. */
  faq: { question: string; answer: string }[];
}

export const CONTENU_LOCAL: Record<string, ContenuLocal> = {
  rennes: {
    accroche: [
      "À Rennes, le niveau d'exigence est particulier : la ville forme chaque année des milliers de développeurs et de designers, et vos clients comparent votre site à ceux des startups de Cesson-Sévigné ou du centre-ville. Un site lent, daté ou sans réassurance est éliminé en quelques secondes, même si votre savoir-faire est excellent.",
      "Nous travaillons avec les entreprises rennaises à distance, en visio, avec un interlocuteur unique du premier échange à la mise en ligne. La maquette de votre page d'accueil est offerte sous 48 heures, avant tout engagement : vous jugez sur pièce, pas sur une promesse.",
    ],
    demandes: [
      { titre: "Créer un site e-commerce à Rennes", texte: "Épiceries fines, produits bretons, créateurs, boutiques du centre qui veulent vendre au-delà de l'Ille-et-Vilaine : une boutique en ligne avec paiement Stripe, livraison et click and collect, à partir de 1 490 €.", href: "/services/sites-web/site-ecommerce", lien: "Voir l'offre e-commerce" },
      { titre: "Une agence de création de site internet qui répond vite", texte: "Un site vitrine de cinq pages à 890 €, livré en 7 à 14 jours, hébergement première année inclus, avec une maquette gratuite avant de signer.", href: "/services/sites-web/site-vitrine", lien: "Voir l'offre site vitrine" },
      { titre: "Du webmarketing pour trouver des clients à Rennes", texte: "Référencement local sur « votre métier + Rennes », campagnes Google Ads sur l'agglomération, publicités Meta ciblées sur les communes de Rennes Métropole : chaque euro suivi jusqu'à la demande de devis.", href: "/services/seo/seo-local", lien: "Découvrir le référencement local" },
      { titre: "Refaire un site rennais sans perdre son référencement", texte: "Beaucoup de sites d'artisans et de PME bretonnes datent de 2015. La refonte à 690 € garde vos positions Google grâce aux redirections et modernise le design.", href: "/services/sites-web/refonte-site", lien: "Voir l'offre refonte" },
    ],
    zones: ["Centre-ville et Thabor", "Cleunay et Villejean", "Cesson-Sévigné (Atalante)", "Saint-Grégoire", "Chantepie et Vern-sur-Seiche", "Bruz et Chartres-de-Bretagne", "Betton et Pacé", "Saint-Malo et Vitré"],
    secteurs: [
      { nom: "Numérique et ESN", texte: "Un site qui doit inspirer confiance à des acheteurs B2B exigeants : études de cas, pages par expertise, formulaire de contact court, intégration au CRM." },
      { nom: "Agroalimentaire et produits bretons", texte: "Vente en ligne, fiche Google pour la boutique, photos produits qui donnent envie : c'est ce qui fait la différence entre une marque locale et une marque qui expédie partout en France." },
      { nom: "Artisans et BTP d'Ille-et-Vilaine", texte: "Une page par prestation et par commune desservie, photos de chantiers, avis Google : le trio qui fait remonter un plombier ou un menuisier de Bruz sur les recherches locales." },
      { nom: "Commerces et restaurants du centre", texte: "Horaires, carte, réservation, itinéraire depuis la place de la République : les visiteurs viennent de leur téléphone, souvent à pied, et décident en trente secondes." },
    ],
    faq: [
      { question: "Combien coûte la création d'un site internet à Rennes ?", answer: "Nos prix sont les mêmes partout en France : landing page 490 €, site vitrine 890 €, refonte 690 €, site e-commerce à partir de 1 490 €. Le paiement peut être étalé, par exemple 39 € par mois sur 24 mois pour un site vitrine. La première année d'hébergement est incluse." },
      { question: "Êtes-vous installés à Rennes ?", answer: "Non, ConvertiLab est basé à Rueil-Malmaison, près de Paris. Nous accompagnons les entreprises rennaises à distance, en visio, comme nous le faisons pour nos clients dans toute la France. Cela ne change rien à la qualité du site ni au référencement local : ce qui compte, c'est le travail sur votre fiche Google, vos pages et vos avis." },
      { question: "Quel délai pour un site vitrine à Rennes ?", answer: "7 à 14 jours après réception de vos textes et photos pour un site vitrine, 14 à 21 jours pour une boutique en ligne. La maquette de votre page d'accueil vous est proposée sous 48 heures, gratuitement." },
      { question: "Comment apparaître sur « agence web Rennes » ou « plombier Rennes » ?", answer: "Pour les recherches locales, Google affiche d'abord le pack local, les trois fiches d'établissement avec la carte. Nous optimisons votre fiche Google, alignons vos coordonnées partout, collectons des avis régulièrement et créons sur votre site une page par service et par commune. C'est l'objet de notre offre de référencement local." },
      { question: "Pouvez-vous reprendre un site existant fait par une autre agence rennaise ?", answer: "Oui. Nous récupérons vos contenus et votre nom de domaine, posons les redirections pour ne pas perdre vos positions, et livrons un site moderne à 690 €. Vous restez propriétaire de tout." },
    ],
  },

  lille: {
    accroche: [
      "Lille est la capitale française du commerce et de la vente à distance : les sièges de grandes enseignes, l'écosystème e-commerce de Roubaix et des centaines de boutiques du Vieux-Lille à Wazemmes ont habitué les Lillois à des sites rapides, clairs et faciles à commander. Une entreprise du Nord qui présente un site amateur part avec un handicap que ses concurrents belges et parisiens n'ont pas.",
      "Nous travaillons avec les entreprises de la métropole lilloise à distance, en visio, avec un interlocuteur unique. Maquette gratuite sous 48 heures, site vitrine livré en 7 à 14 jours, prix publics et identiques pour tous.",
    ],
    demandes: [
      { titre: "Une agence de création de site internet à Lille, sans abonnement", texte: "Site vitrine de cinq pages à 890 €, hébergement première année inclus, et le site vous appartient. Paiement possible en 24 mensualités de 39 €.", href: "/services/sites-web/site-vitrine", lien: "Voir l'offre site vitrine" },
      { titre: "Un site internet professionnel pour une PME du Nord", texte: "Pages par service, formulaire de devis, avis clients intégrés, vitesse irréprochable sur mobile : ce qu'un acheteur lillois attend avant d'appeler.", href: "/demande-maquette", lien: "Demander une maquette gratuite" },
      { titre: "Créer une boutique e-commerce à Lille", texte: "Mode, décoration, produits régionaux, seconde main : boutique Stripe, livraison Mondial Relay ou Colissimo, click and collect pour votre magasin, à partir de 1 490 €.", href: "/services/sites-web/site-ecommerce", lien: "Voir l'offre e-commerce" },
      { titre: "Des textes qui vendent, rédigés pour vous", texte: "Beaucoup de sites lillois sont bien conçus mais vides. Nous rédigeons vos pages de service et vos articles avec vos mots, pour Google et pour vos clients.", href: "/services/seo/referencement", lien: "Découvrir le référencement naturel" },
    ],
    zones: ["Vieux-Lille et Grand-Place", "Wazemmes et Moulins", "Euralille et Fives", "Vauban et Esquermes", "Villeneuve-d'Ascq", "Roubaix et Tourcoing", "Marcq-en-Barœul et La Madeleine", "Lomme, Lambersart et Loos"],
    secteurs: [
      { nom: "Commerce et e-commerce", texte: "La région a inventé la vente à distance moderne. Une boutique en ligne bien construite, avec un tunnel de commande court et des frais de port clairs, fait la différence dès le premier mois." },
      { nom: "Santé et professions libérales", texte: "Cabinets, kinés, ostéopathes, orthophonistes : une page par soin, la prise de rendez-vous en ligne et une fiche Google soignée remplissent l'agenda." },
      { nom: "Artisans et BTP de la métropole", texte: "Rénovation, plomberie, électricité, toiture : une page par commune desservie et des photos de chantiers réels font remonter votre entreprise sur « plombier Lambersart » ou « rénovation Marcq-en-Barœul »." },
      { nom: "Restauration et sorties", texte: "Estaminets, brasseries, bars à bières : carte lisible sur mobile, horaires exacts, réservation, itinéraire depuis la gare Lille-Flandres." },
    ],
    faq: [
      { question: "Quel est le prix d'un site internet à Lille ?", answer: "Landing page 490 €, site vitrine 890 €, refonte 690 €, e-commerce à partir de 1 490 €. Ces prix sont fixes et publics, sans frais cachés : l'hébergement de la première année est inclus. Paiement en 2 ou 3 fois sans frais, ou étalé sur 24 mois." },
      { question: "Travaillez-vous avec des entreprises de Lille alors que vous êtes en région parisienne ?", answer: "Oui, à distance et en visio. La majorité de nos clients ne sont pas à Rueil-Malmaison. Un projet de site se pilote très bien par écrans partagés : maquette, retours, formation à la prise en main. Vous gardez un interlocuteur unique." },
      { question: "Combien de temps pour créer un site vitrine à Lille ?", answer: "7 à 14 jours après réception de vos contenus. Une boutique en ligne demande 14 à 21 jours. Nous vous proposons une maquette gratuite de la page d'accueil sous 48 heures avant tout engagement." },
      { question: "Que faut-il pour apparaître sur « agence web Lille » ou « plombier Lille » ?", answer: "Une fiche d'établissement Google complète et alimentée en avis, des coordonnées identiques sur tout le web, et des pages de votre site dédiées à chaque service et chaque commune. Google classe les fiches sur la pertinence, la distance et la notoriété : nous travaillons les trois." },
      { question: "Rédigez-vous les textes du site ?", answer: "Les textes et photos sont à fournir dans nos offres de base. Si vous préférez déléguer, nous rédigeons vos pages sur devis, à partir d'un entretien d'une heure sur votre activité et vos clients." },
    ],
  },

  montpellier: {
    accroche: [
      "Montpellier gagne des habitants chaque année, et des entreprises avec eux : cliniques et cabinets autour du CHU, startups de la santé et du numérique, commerces de l'Écusson, agences immobilières de Port Marianne, domaines viticoles à quelques kilomètres. Sur Google, la concurrence locale est plus forte qu'il y a cinq ans, et les premières positions ne s'obtiennent plus avec un site fait sur un gabarit gratuit.",
      "Nous accompagnons les entreprises de Montpellier et de l'Hérault à distance, en visio, avec un interlocuteur unique. Le devis est écrit et détaillé sous 24 heures, la maquette de votre page d'accueil offerte sous 48 heures.",
    ],
    demandes: [
      { titre: "Créer un site e-commerce à Montpellier", texte: "Produits du terroir, vins du Languedoc, cosmétiques, mode, artisanat : boutique Stripe avec livraison et retrait en boutique, à partir de 1 490 €, livrée en 14 à 21 jours.", href: "/services/sites-web/site-ecommerce", lien: "Voir l'offre e-commerce" },
      { titre: "Un devis clair pour un site internet à Montpellier", texte: "Nos prix sont publics : site vitrine 890 €, landing page 490 €, refonte 690 €. Le simulateur vous renvoie un chiffrage écrit sous 24 heures.", href: "/estimation-prix-site-web", lien: "Estimer le prix de mon site" },
      { titre: "Un site vitrine professionnel qui rassure", texte: "Cinq pages, design sur mesure, avis Google intégrés, formulaire court, vitesse mobile irréprochable : ce qu'un patient, un client ou un acheteur montpelliérain attend avant d'appeler.", href: "/services/sites-web/site-vitrine", lien: "Voir l'offre site vitrine" },
      { titre: "Du webmarketing mesuré, pas des promesses", texte: "Référencement local, Google Ads sur l'agglomération, Meta Ads sur les quartiers qui vous intéressent : un tableau de bord, un coût par demande, et un compte publicitaire à votre nom.", href: "/services/sea/google-ads", lien: "Découvrir Google Ads" },
    ],
    zones: ["Écusson et Comédie", "Antigone et Port Marianne", "Odysseum et Millénaire", "Les Arceaux et Boutonnet", "Castelnau-le-Lez et Le Crès", "Lattes et Pérols", "Juvignac et Saint-Jean-de-Védas", "Sète, Béziers et Nîmes"],
    secteurs: [
      { nom: "Santé et bien-être", texte: "Cabinets, cliniques, thérapeutes, salles de sport : prise de rendez-vous en ligne, pages par soin, avis vérifiés et fiche Google à jour font la différence sur un marché très dense." },
      { nom: "Immobilier et gestion locative", texte: "Agences, conciergeries, promoteurs : des pages par quartier, des biens présentés proprement, un formulaire d'estimation qui alimente votre CRM." },
      { nom: "Vin, terroir et restauration", texte: "Domaines du Pic Saint-Loup ou de la Méditerranée, caves, restaurants de l'Écusson : vente en ligne, réservation, photos qui font venir les touristes comme les locaux." },
      { nom: "Numérique et services B2B", texte: "Startups et cabinets de conseil : un site qui explique une offre complexe simplement, avec des études de cas et une prise de contact sans friction." },
    ],
    faq: [
      { question: "Combien coûte un site internet à Montpellier ?", answer: "Landing page 490 €, site vitrine 890 €, refonte 690 €, boutique en ligne à partir de 1 490 €. Hébergement première année inclus, paiement possible en 2 ou 3 fois sans frais ou étalé sur 24 mois. Le devis détaillé est envoyé sous 24 heures." },
      { question: "Peut-on avoir un devis pour un site internet sans engagement ?", answer: "Oui. Le simulateur de prix vous renvoie un chiffrage écrit sous 24 heures, poste par poste. Vous pouvez aussi demander directement une maquette gratuite de votre page d'accueil, livrée sous 48 heures, avant de décider." },
      { question: "Êtes-vous une agence web basée à Montpellier ?", answer: "Non, nous sommes à Rueil-Malmaison, en région parisienne, et nous travaillons à distance avec nos clients de Montpellier et de tout l'Hérault. Visio, écrans partagés, interlocuteur unique : le fonctionnement est le même que pour un client à dix minutes de nos bureaux." },
      { question: "Combien de temps pour un site e-commerce à Montpellier ?", answer: "14 à 21 jours après réception de vos produits, prix et photos. Un site vitrine est livré en 7 à 14 jours." },
      { question: "Comment sortir sur « création site vitrine Montpellier » ou « ostéopathe Montpellier » ?", answer: "Pour une entreprise locale, l'essentiel se joue sur la fiche d'établissement Google et sur des pages de site dédiées à chaque service et chaque quartier. Nous alignons vos coordonnées partout, mettons en place la collecte d'avis et créons ces pages. C'est notre offre de référencement local." },
    ],
  },

  tours: {
    accroche: [
      "À Tours, l'économie tient à la fois au tourisme des châteaux de la Loire, au CHU et à ses professions de santé, aux vignobles de Vouvray et de Montlouis, et à un tissu dense d'artisans et de commerces entre le Vieux-Tours et Tours-Nord. Beaucoup de ces entreprises ont un site, rarement un site qui ramène des clients : les recherches « site internet Tours » et « agence SEO Tours » le montrent, la demande existe et l'offre locale est inégale.",
      "Nous travaillons avec les entreprises tourangelles à distance, en visio, avec un interlocuteur unique et des prix publics. La maquette de votre page d'accueil est offerte sous 48 heures.",
    ],
    demandes: [
      { titre: "Une agence SEO à Tours qui explique ce qu'elle fait", texte: "Audit de votre site et de votre fiche Google, plan d'action écrit, puis référencement local mensuel avec suivi des positions sur « votre métier + Tours ». Aucune promesse de première page, des chiffres chaque mois.", href: "/services/seo/seo-local", lien: "Découvrir le référencement local" },
      { titre: "Créer un site internet à Tours à prix fixe", texte: "Site vitrine de cinq pages à 890 €, livré en 7 à 14 jours, hébergement première année inclus. Refonte d'un site existant à 690 €, sans perdre vos positions.", href: "/services/sites-web/site-vitrine", lien: "Voir l'offre site vitrine" },
      { titre: "Un site web pour un hébergement ou une activité touristique", texte: "Chambres d'hôtes, gîtes, caves, visites : un site rapide en français et en anglais, avec réservation ou demande de disponibilité, et une fiche Google qui remonte auprès des visiteurs de passage.", href: "/demande-maquette", lien: "Demander une maquette gratuite" },
      { titre: "Des services web sans abonnement", texte: "Le site vous appartient, le prix est celui affiché, l'étalement sur 24 mois n'est pas un abonnement. Après la première année, vous choisissez entre un hébergement seul et un forfait mensuel avec mises à jour.", href: "/prix", lien: "Voir tous les prix" },
    ],
    zones: ["Vieux-Tours et Les Halles", "Prébendes et Velpeau", "Tours-Nord et Sainte-Radegonde", "Saint-Cyr-sur-Loire et La Riche", "Joué-lès-Tours et Chambray-lès-Tours", "Saint-Pierre-des-Corps et Saint-Avertin", "Vouvray, Montlouis et Amboise", "Blois et Chinon"],
    secteurs: [
      { nom: "Tourisme et hébergement", texte: "Gîtes, chambres d'hôtes, prestataires de visites : les réservations se prennent sur mobile, souvent la veille. Un site lent ou sans calendrier perd la réservation au profit d'une plateforme qui prend 15 % de commission." },
      { nom: "Santé et paramédical", texte: "Autour du CHU et dans toute l'agglomération : pages par soin, prise de rendez-vous, avis, fiche Google. Les patients cherchent « kiné Tours-Nord », pas « cabinet de kinésithérapie »." },
      { nom: "Vin et produits de Loire", texte: "Domaines et caves : vente en ligne avec expédition, réservation de dégustations, présence sur la carte pour les touristes qui cherchent « cave Vouvray »." },
      { nom: "Artisans et rénovation", texte: "Une page par prestation et par commune (Joué-lès-Tours, Chambray, Saint-Cyr), photos de chantiers réels, devis en un clic : c'est ce qui fait remonter un artisan tourangeau devant les plateformes." },
    ],
    faq: [
      { question: "Combien coûte un site internet à Tours ?", answer: "Landing page 490 €, site vitrine 890 €, refonte 690 €, boutique en ligne à partir de 1 490 €. Prix fixes et publics, hébergement première année inclus, paiement en 2 ou 3 fois sans frais ou étalé sur 24 mois." },
      { question: "Que fait concrètement une agence SEO à Tours ?", answer: "Elle commence par un audit : indexation, vitesse, structure des pages, fiche Google, avis, concurrents locaux. Puis elle corrige, crée les pages qui manquent (une par service, une par commune), met en place la collecte d'avis et suit les positions chaque mois. Nous ne garantissons jamais une position, nous montrons les chiffres." },
      { question: "Êtes-vous installés à Tours ?", answer: "Non, ConvertiLab est basé à Rueil-Malmaison, près de Paris, et travaille à distance avec ses clients de Tours et d'Indre-et-Loire. Visio, maquettes partagées, formation à la prise en main : rien ne nécessite un déplacement." },
      { question: "En combien de temps un site est-il livré ?", answer: "7 à 14 jours pour un site vitrine, 5 à 10 jours pour une landing page, 14 à 21 jours pour une boutique, à compter de la réception de vos contenus. La maquette gratuite arrive sous 48 heures." },
      { question: "Faites-vous des sites en anglais pour le tourisme ?", answer: "Oui. Un site bilingue français-anglais est une option courante pour les hébergements et les activités de la vallée de la Loire. Le supplément dépend du nombre de pages à traduire, il est chiffré dans le devis." },
    ],
  },

  dijon: {
    accroche: [
      "Dijon est une ville de marques : la moutarde, le cassis, les grands crus de la Côte de Nuits à deux pas, la Cité internationale de la gastronomie. Ses entreprises vendent des produits que le monde entier connaît, et pourtant beaucoup de commerces, d'artisans et de domaines de Côte-d'Or ont encore un site qui n'apparaît pas quand on tape « création site internet Dijon » ou « e-commerce Dijon ».",
      "Nous accompagnons les entreprises dijonnaises à distance, en visio, avec un interlocuteur unique. Prix publics, maquette gratuite sous 48 heures, site vitrine livré en 7 à 14 jours.",
    ],
    demandes: [
      { titre: "Créer un site internet à Dijon, à prix connu d'avance", texte: "Site vitrine de cinq pages à 890 €, refonte à 690 €, landing page à 490 €. Hébergement première année inclus, paiement étalé possible.", href: "/services/sites-web/site-vitrine", lien: "Voir l'offre site vitrine" },
      { titre: "Vendre en ligne depuis Dijon", texte: "Épicerie fine, vins de Bourgogne, produits régionaux, créateurs : une boutique avec paiement Stripe, expédition et retrait en boutique, à partir de 1 490 €.", href: "/services/sites-web/site-ecommerce", lien: "Voir l'offre e-commerce" },
      { titre: "Un webmaster à Dijon pour faire vivre le site", texte: "Après la livraison, un forfait mensuel couvre l'hébergement, les mises à jour et les petites modifications. Vous n'avez pas à chercher un webmaster à chaque changement d'horaires.", href: "/offre-mensuelle", lien: "Voir le forfait mensuel" },
      { titre: "Être trouvé sur « votre métier + Dijon »", texte: "Fiche Google optimisée, avis collectés chaque semaine, pages par service et par commune (Chenôve, Quetigny, Talant) : le référencement local qui fait entrer dans le pack local.", href: "/services/seo/seo-local", lien: "Découvrir le référencement local" },
    ],
    zones: ["Centre historique et Darcy", "Toison d'Or et Valmy", "Montchapet et Bourroches", "Chenôve et Longvic", "Quetigny et Saint-Apollinaire", "Talant et Fontaine-lès-Dijon", "Nuits-Saint-Georges et Beaune", "Auxerre et Chalon-sur-Saône"],
    secteurs: [
      { nom: "Vin et gastronomie", texte: "Domaines, cavistes, épiceries fines, restaurants : la vente en ligne et la réservation de dégustations touchent une clientèle bien au-delà de la Bourgogne, à condition d'un site qui expédie et rassure." },
      { nom: "Santé et pharmacie", texte: "Dijon concentre des laboratoires, des cabinets et des officines : pages par prestation, prise de rendez-vous, fiche Google exacte." },
      { nom: "Artisans et rénovation en Côte-d'Or", texte: "Une page par prestation et par commune desservie, photos de chantiers, avis Google : c'est ce qui fait remonter un couvreur de Chenôve ou un menuisier de Quetigny." },
      { nom: "Tourisme et hébergement", texte: "Chambres d'hôtes, gîtes de la route des Grands Crus, visites guidées : site bilingue, calendrier de disponibilités, présence sur la carte." },
    ],
    faq: [
      { question: "Combien coûte la création d'un site internet à Dijon ?", answer: "Landing page 490 €, site vitrine 890 €, refonte 690 €, boutique en ligne à partir de 1 490 €. Les prix sont fixes et publics, l'hébergement de la première année est inclus, et le paiement peut être étalé sur 24 mois." },
      { question: "Proposez-vous un service de webmaster à Dijon ?", answer: "Oui, sous forme de forfait mensuel après la livraison : hébergement, mises à jour techniques, petites modifications de contenu. Vous écrivez, nous mettons en ligne. Sans forfait, vous pouvez aussi modifier vous-même vos textes et vos photos après la formation incluse." },
      { question: "Êtes-vous une agence dijonnaise ?", answer: "Non, ConvertiLab est installé à Rueil-Malmaison, en région parisienne. Nous travaillons à distance avec nos clients de Dijon et de Côte-d'Or, en visio, avec un interlocuteur unique. Le référencement local d'une entreprise dijonnaise se travaille sur sa fiche Google et ses pages, pas depuis un bureau en ville." },
      { question: "Quel délai pour une boutique en ligne à Dijon ?", answer: "14 à 21 jours après réception de vos produits, prix et photos. Un site vitrine est livré en 7 à 14 jours. La maquette gratuite de l'accueil arrive sous 48 heures." },
      { question: "Peut-on vendre du vin en ligne avec votre boutique ?", answer: "Oui. La boutique gère les frais de port au poids et par zone, le retrait au domaine, et l'affichage des mentions obligatoires sur la vente d'alcool. Les droits d'accise et la logistique restent de votre côté ; nous vous indiquons ce que le site doit afficher." },
    ],
  },

  toulouse: {
    accroche: [
      "Toulouse est la quatrième ville de France et l'un de ses marchés les plus concurrentiels pour les agences web : l'aéronautique et le spatial ont fait venir des milliers d'ingénieurs et de sous-traitants, l'Oncopole et le CHU font vivre un pôle santé dense, et le centre-ville, de Saint-Cyprien aux Carmes, compte des milliers de commerces et de restaurants. Les recherches « site internet Toulouse » et « agence web marketing Toulouse » sont parmi les plus nombreuses que nous voyons hors Paris.",
      "Nous travaillons avec les entreprises toulousaines et de Haute-Garonne à distance, en visio, avec un interlocuteur unique et des prix publics. La maquette de votre page d'accueil est offerte sous 48 heures.",
    ],
    demandes: [
      { titre: "Un site internet à Toulouse livré en deux semaines", texte: "Site vitrine de cinq pages à 890 €, design sur mesure, hébergement première année inclus. Refonte d'un site existant à 690 €, landing page à 490 €.", href: "/services/sites-web/site-vitrine", lien: "Voir l'offre site vitrine" },
      { titre: "Une agence web marketing qui suit chaque euro", texte: "Google Ads sur l'agglomération, Meta Ads par quartier, référencement local : un tableau de bord partagé, un coût par demande, un compte publicitaire qui reste à votre nom.", href: "/services/sea/google-ads", lien: "Découvrir Google Ads" },
      { titre: "Un site pour un sous-traitant ou un bureau d'études", texte: "Les donneurs d'ordres de Blagnac et de Labège vérifient un fournisseur sur Google avant de le rappeler : certifications, références, capacités, contact direct. Un site B2B sobre et complet fait gagner des consultations.", href: "/demande-maquette", lien: "Demander une maquette gratuite" },
      { titre: "Refaire un site toulousain sans perdre ses positions", texte: "Redirections, structure conservée, contenus réécrits avec vous : la refonte à 690 € modernise le site sans repartir de zéro sur Google.", href: "/services/sites-web/refonte-site", lien: "Voir l'offre refonte" },
    ],
    zones: ["Capitole, Carmes et Saint-Étienne", "Saint-Cyprien et Les Chalets", "Compans-Caffarelli et Minimes", "Rangueil et Saint-Michel", "Blagnac et Colomiers", "Labège (Innopole) et Ramonville", "Tournefeuille, Balma et L'Union", "Muret, Montauban et Albi"],
    secteurs: [
      { nom: "Aéronautique, spatial et sous-traitance", texte: "Un site B2B qui présente vos capacités, vos certifications et vos références, avec une page par prestation : c'est ce que consultent les acheteurs avant de vous inscrire dans un panel." },
      { nom: "Santé et recherche", texte: "Cabinets, cliniques, laboratoires autour de l'Oncopole et de Purpan : prise de rendez-vous, pages par soin, avis, fiche Google exacte." },
      { nom: "Immobilier et BTP", texte: "Toulouse construit sans arrêt : agences, promoteurs, artisans du bâtiment ont besoin de pages par quartier et par prestation, avec des photos réelles et un formulaire d'estimation." },
      { nom: "Commerces et restauration du centre", texte: "Des Carmes à Saint-Cyprien, la clientèle décide sur mobile : horaires, carte, réservation, itinéraire depuis le métro. Un site lent perd la table." },
    ],
    faq: [
      { question: "Combien coûte un site internet à Toulouse ?", answer: "Landing page 490 €, site vitrine 890 €, refonte 690 €, boutique en ligne à partir de 1 490 €. Prix fixes, publics, hébergement première année inclus. Paiement en 2 ou 3 fois sans frais, ou 39 € par mois sur 24 mois pour un site vitrine." },
      { question: "Êtes-vous une agence web toulousaine ?", answer: "Non, nous sommes basés à Rueil-Malmaison, près de Paris, et nous travaillons à distance avec nos clients de Toulouse et de Haute-Garonne, en visio, avec un interlocuteur unique. La qualité du site et le référencement local ne dépendent pas de l'adresse de l'agence." },
      { question: "Quel délai pour un site vitrine à Toulouse ?", answer: "7 à 14 jours après réception de vos textes et photos. Une landing page prend 5 à 10 jours, une boutique en ligne 14 à 21 jours. La maquette gratuite est livrée sous 48 heures." },
      { question: "Que comprend votre offre de webmarketing à Toulouse ?", answer: "Selon vos objectifs : référencement local (fiche Google, avis, pages par service et par commune), campagnes Google Ads sur vos requêtes exactes, publicités Meta ciblées sur l'agglomération, et un tableau de bord qui suit le coût de chaque demande. Le compte publicitaire est ouvert à votre nom." },
      { question: "Pouvez-vous créer un site B2B pour un sous-traitant aéronautique ?", answer: "Oui. Ce type de site demande de la précision plus que des effets : capacités, certifications, moyens, références, contact direct. Nous construisons la structure avec vous à partir de ce que vos donneurs d'ordres vérifient réellement." },
    ],
  },

  nantes: {
    accroche: [
      "Nantes attire des entreprises depuis quinze ans : numérique sur l'Île de Nantes, agroalimentaire et industrie vers Saint-Herblain et Carquefou, commerces et restaurants du centre à Bouffay, tourisme d'estuaire. Résultat : la concurrence sur Google est devenue nantaise, pas seulement parisienne. Les recherches « agence web Nantes » et « création site e-commerce Nantes » renvoient à des dizaines d'agences, et la différence se fait sur la clarté de l'offre et la vitesse du site.",
      "Nous accompagnons les entreprises nantaises à distance, en visio, avec un interlocuteur unique. Prix publics, maquette gratuite sous 48 heures, site vitrine livré en 7 à 14 jours.",
    ],
    demandes: [
      { titre: "Créer un site e-commerce à Nantes", texte: "Épicerie, mode, créateurs, produits de la région : boutique Stripe avec livraison, click and collect pour votre magasin, à partir de 1 490 €, livrée en 14 à 21 jours.", href: "/services/sites-web/site-ecommerce", lien: "Voir l'offre e-commerce" },
      { titre: "Une agence de création de site internet sans mauvaise surprise", texte: "Site vitrine à 890 €, prix fixe, hébergement première année inclus, le site vous appartient. Maquette gratuite avant de signer.", href: "/services/sites-web/site-vitrine", lien: "Voir l'offre site vitrine" },
      { titre: "Une agence web digitale et marketing, mesurée", texte: "Référencement local, Google Ads sur Nantes Métropole, Meta Ads par commune : un tableau de bord et un coût par demande, pas un rapport de vingt pages.", href: "/services/seo/seo-local", lien: "Découvrir le référencement local" },
      { titre: "Un site pour une startup ou un cabinet de l'Île de Nantes", texte: "Une offre complexe expliquée simplement, des études de cas, un formulaire court relié à votre CRM : le site qui transforme les visites en rendez-vous.", href: "/services/crm", lien: "Découvrir l'offre CRM" },
    ],
    zones: ["Centre-ville et Bouffay", "Île de Nantes", "Chantenay et Zola", "Hauts-Pavés et Saint-Félix", "Saint-Herblain et Orvault", "Rezé et Vertou", "Carquefou et Sainte-Luce-sur-Loire", "Saint-Nazaire, La Baule et Clisson"],
    secteurs: [
      { nom: "Numérique et services B2B", texte: "Studios, ESN, cabinets de conseil : le site doit rendre une offre complexe lisible en une page et amener à un rendez-vous, avec des preuves plutôt que des adjectifs." },
      { nom: "Agroalimentaire et industrie", texte: "De la biscuiterie à la sous-traitance industrielle : catalogue clair, pages par gamme, contact direct pour les acheteurs, et une boutique en ligne quand le produit s'y prête." },
      { nom: "Commerces et restauration", texte: "Bouffay, Talensac, Île de Nantes : la clientèle décide sur mobile. Horaires, carte, réservation, itinéraire en tram." },
      { nom: "Artisans et BTP de Loire-Atlantique", texte: "Une page par prestation et par commune (Rezé, Saint-Herblain, Vertou), photos de chantiers réels, avis Google : ce qui fait remonter un artisan nantais sur les recherches locales." },
    ],
    faq: [
      { question: "Combien coûte un site internet à Nantes ?", answer: "Landing page 490 €, site vitrine 890 €, refonte 690 €, boutique en ligne à partir de 1 490 €. Prix fixes et publics, hébergement première année inclus, paiement en 2 ou 3 fois sans frais ou étalé sur 24 mois." },
      { question: "Quel délai pour un site e-commerce à Nantes ?", answer: "14 à 21 jours après réception de vos produits, prix et photos. Un site vitrine est livré en 7 à 14 jours, une landing page en 5 à 10 jours. La maquette gratuite de l'accueil est envoyée sous 48 heures." },
      { question: "Êtes-vous basés à Nantes ?", answer: "Non, ConvertiLab est à Rueil-Malmaison, en région parisienne. Nous travaillons à distance avec nos clients nantais, en visio et par écrans partagés, avec un interlocuteur unique du devis à la livraison." },
      { question: "Comment sortir dans le pack local Google sur « votre métier + Nantes » ?", answer: "Google classe les fiches sur la pertinence, la distance et la notoriété. Nous choisissons la bonne catégorie, alignons vos coordonnées partout, mettons en place la collecte d'avis chaque semaine et relions la fiche à une page de votre site dédiée à ce service et à cette commune." },
      { question: "Le site est-il relié à un CRM ?", answer: "Oui, sur demande. Les formulaires peuvent alimenter directement un CRM (Pipedrive, HubSpot ou un CRM simple que nous mettons en place), avec des relances automatiques par email. C'est notre offre CRM, utile dès que vous recevez plus de dix demandes par mois." },
    ],
  },

  annecy: {
    accroche: [
      "Annecy vit du lac, de la montagne et de l'industrie : hôtels, restaurants et loueurs qui travaillent avec une clientèle touristique très mobile, marques d'outdoor et de sport, sous-traitants de la mécanique et du décolletage entre Annecy et la vallée de l'Arve, immobilier haut de gamme. Les recherches « agence web Annecy » et « création site internet 74 » sont nombreuses, et une grande partie des sites locaux sont encore lents et peu lisibles sur mobile, là où se prennent les décisions d'un visiteur ou d'un acheteur.",
      "Nous accompagnons les entreprises d'Annecy et de Haute-Savoie à distance, en visio, avec un interlocuteur unique. Prix publics, maquette gratuite sous 48 heures, site vitrine livré en 7 à 14 jours.",
    ],
    demandes: [
      { titre: "Créer un site internet à Annecy ou en Haute-Savoie", texte: "Site vitrine de cinq pages à 890 €, refonte à 690 €, landing page à 490 €. Hébergement première année inclus, paiement étalé possible.", href: "/services/sites-web/site-vitrine", lien: "Voir l'offre site vitrine" },
      { titre: "Un site pour un hôtel, un restaurant ou une activité au bord du lac", texte: "Réservation ou demande de disponibilité, site bilingue, photos qui donnent envie, fiche Google qui remonte auprès des visiteurs de passage : le site qui évite de laisser 15 à 25 % de commission aux plateformes.", href: "/demande-maquette", lien: "Demander une maquette gratuite" },
      { titre: "Une agence webmarketing à Annecy, avec des chiffres", texte: "Référencement local, Google Ads sur le bassin annécien et la Haute-Savoie, Meta Ads en saison : un tableau de bord et un coût par demande, un compte publicitaire à votre nom.", href: "/services/sea/google-ads", lien: "Découvrir Google Ads" },
      { titre: "Vendre en ligne des produits de montagne ou d'outdoor", texte: "Boutique Stripe avec livraison et retrait en magasin, fiches produits soignées, à partir de 1 490 €. Adaptée aux marques, aux artisans et aux commerces qui veulent vendre hors saison.", href: "/services/sites-web/site-ecommerce", lien: "Voir l'offre e-commerce" },
    ],
    zones: ["Vieille ville et Pâquier", "Annecy-le-Vieux et Albigny", "Cran-Gevrier et Seynod", "Meythet et Metz-Tessy", "Argonay et Pringy", "Sevrier, Saint-Jorioz et Talloires", "La Roche-sur-Foron et Cluses", "Chambéry, Genève et Thonon-les-Bains"],
    secteurs: [
      { nom: "Tourisme, hôtellerie et restauration", texte: "Une clientèle qui réserve sur mobile, souvent la veille, en français, en anglais ou en allemand : site bilingue, réservation, horaires exacts, présence sur la carte." },
      { nom: "Outdoor, sport et marques", texte: "Le bassin annécien concentre des marques et des ateliers du sport de montagne : boutique en ligne, fiches produits, contenu qui raconte le produit, référencement sur les requêtes de niche." },
      { nom: "Industrie, mécanique et sous-traitance", texte: "Entre Annecy et la vallée de l'Arve, des centaines d'ateliers travaillent pour des donneurs d'ordres exigeants : un site B2B clair, avec capacités, certifications et contact direct." },
      { nom: "Immobilier et artisans du bâtiment", texte: "Agences, promoteurs, chalets, rénovation : pages par commune et par prestation, photos réelles, formulaire d'estimation, fiche Google soignée." },
    ],
    faq: [
      { question: "Combien coûte un site internet à Annecy ?", answer: "Landing page 490 €, site vitrine 890 €, refonte 690 €, boutique en ligne à partir de 1 490 €. Prix fixes et publics, hébergement première année inclus, paiement en 2 ou 3 fois sans frais ou étalé sur 24 mois." },
      { question: "Intervenez-vous dans toute la Haute-Savoie ?", answer: "Oui, et au-delà : nous travaillons à distance, en visio, avec nos clients d'Annecy, de Haute-Savoie et de toute la France. ConvertiLab est basé à Rueil-Malmaison, en région parisienne. Vous gardez un interlocuteur unique du devis à la mise en ligne." },
      { question: "Faites-vous des sites en anglais pour le tourisme ?", answer: "Oui. Le site bilingue français-anglais est une option courante pour les hébergements, restaurants et activités du lac. Le supplément dépend du nombre de pages à traduire et figure dans le devis." },
      { question: "Quel délai pour un site vitrine à Annecy ?", answer: "7 à 14 jours après réception de vos textes et photos. Une boutique en ligne demande 14 à 21 jours. La maquette gratuite de l'accueil arrive sous 48 heures, avant tout engagement." },
      { question: "Comment sortir sur « agence web Annecy », « hôtel Annecy » ou « chalet Talloires » ?", answer: "Pour une entreprise locale, les résultats se jouent sur la fiche d'établissement Google, la régularité des avis et des pages de site dédiées à chaque service et chaque commune. Nous travaillons ces trois points dans notre offre de référencement local et suivons les positions chaque mois." },
    ],
  },
};

export function getContenuLocal(slug: string): ContenuLocal | null {
  return CONTENU_LOCAL[slug] ?? null;
}
