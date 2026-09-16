import type { Ressource } from "../types";

/**
 * Ressources gratuites du pôle (sites-web). Une entrée par page qui propose un
 * lead magnet : la page du pôle et chacune de ses sous-pages. Voir types.ts
 * pour les règles d'écriture : concret, actionnable, sans chiffre de résultat
 * inventé, sans garantie, sans tiret long, vouvoiement. Le nombre annoncé dans
 * chaque titre (10 questions, 25 points...) correspond au contenu réel.
 */

const POLE = "sites-web" as const;

/* ── Page du pôle : quel format de site pour quelle activité ────────────── */

const GUIDE_CHOISIR: Ressource = {
  slug: "site-guide-choisir-10-questions",
  titre: "Quel site pour quelle activité : vitrine, landing, e-commerce ou application, en 10 questions",
  accroche:
    "Dix questions à vous poser avant de demander un devis, pour choisir le bon format de site et ne payer que ce dont votre activité a besoin.",
  format: "guide",
  apercu: [
    "Les 10 questions, avec ce que chaque réponse indique",
    "Une grille de lecture : quel format pour quel profil",
    "Les erreurs classiques qui font payer deux fois",
    "La liste de ce qu'il faut préparer avant un devis",
  ],
  sections: [
    {
      titre: "Avant de répondre : les quatre formats en trois repères",
      intro: "Les quatre formats ne servent pas le même but. Les avoir en tête évite de comparer des devis qui ne parlent pas de la même chose.",
      points: [
        "Un site vitrine présente toute votre activité sur plusieurs pages (accueil, prestations, à propos, avis, contact). Il sert à être trouvé sur Google par des personnes qui cherchent votre métier et votre ville.",
        "Une landing page est une page unique, sans menu, qui reçoit des visiteurs venus d'une annonce, d'un email ou d'un QR code et leur propose une seule action : appeler, demander un devis, réserver.",
        "Un site e-commerce vend en ligne : catalogue, panier, paiement, suivi des commandes et des stocks. Une application web fait travailler des données : espace client, prise de rendez-vous, devis automatisé, outil interne.",
      ],
    },
    {
      titre: "Questions 1 à 3 : vos clients et l'action attendue",
      points: [
        "Question 1 : comment vos clients vous trouvent-ils aujourd'hui ? S'ils tapent votre métier et votre ville sur Google, il vous faut d'abord un site vitrine. S'ils viennent du bouche-à-oreille ou des réseaux, une page claire avec vos coordonnées suffit pour commencer.",
        "Question 2 : quelle action précise voulez-vous déclencher ? Un appel, une demande de devis, une réservation, une commande payée en ligne. Une seule réponse doit dominer : elle décide du bouton principal et du format.",
        "Question 3 : combien de prestations différentes proposez-vous ? Une seule offre se raconte sur une page. Trois prestations ou plus méritent chacune leur page, donc un site vitrine.",
      ],
    },
    {
      titre: "Questions 4 à 6 : votre situation actuelle",
      points: [
        "Question 4 : avez-vous déjà un site ? Notez son âge, s'il se lit bien sur téléphone et s'il vous a apporté au moins une demande dans les six derniers mois. Un site existant qui reçoit des visites se refond, il ne se jette pas.",
        "Question 5 : avez-vous déjà une campagne publicitaire, ou un budget prévu pour en lancer une ? Si oui, une landing page dédiée à cette campagne se justifie, même si vous avez déjà un site.",
        "Question 6 : vos demandes arrivent-elles par téléphone, par email, par message ? Si vous passez du temps à ressaisir des devis, à confirmer des rendez-vous ou à relancer, notez-le : c'est le signe qu'une application ou un module automatisé vous ferait gagner des heures.",
      ],
    },
    {
      titre: "Questions 7 et 8 : ce que vous vendez, et comment",
      points: [
        "Question 7 : vendez-vous des produits physiques ou des prestations ? Des produits avec des prix fixes, un stock et une livraison appellent une boutique en ligne. Des prestations sur devis appellent un site vitrine avec un formulaire de demande.",
        "Question 8 : le client peut-il acheter sans vous parler ? Si chaque vente demande un échange (mesures, visite, conseil), le paiement en ligne n'est pas prioritaire : concentrez le site sur la prise de contact et le rendez-vous.",
      ],
    },
    {
      titre: "Questions 9 et 10 : budget, délai et qui s'en occupe",
      points: [
        "Question 9 : quel délai et quel budget avez-vous en tête ? Écrivez les deux avant de demander un devis. Un format qui dépasse votre budget de moitié n'est pas le bon format pour cette année : commencez plus petit, ajoutez ensuite.",
        "Question 10 : qui mettra le site à jour ? Si c'est vous, demandez une formation et un outil simple. Si personne n'a le temps, prévoyez un site avec peu de contenus à faire vivre plutôt qu'un blog ou un catalogue de cent références.",
      ],
    },
    {
      titre: "Lire vos réponses : quel format vous correspond",
      points: [
        "Vos clients vous cherchent sur Google, vous avez plusieurs prestations et vous vendez sur devis : site vitrine, avec un formulaire de demande et la fiche Google reliée.",
        "Vous lancez une campagne pour une offre précise, avec une seule action attendue : landing page dédiée, reliée à votre email ou à votre CRM, avec le comptage des demandes.",
        "Vous vendez des produits avec des prix fixes, un stock et une livraison : site e-commerce, en commençant par les références qui se vendent déjà le mieux.",
        "Votre site existe, reçoit des visites, mais il a vieilli : refonte, en gardant les pages qui apportent du trafic et en posant les redirections.",
        "Vous perdez du temps sur des tâches répétitives (devis, rendez-vous, relances, suivi de dossiers) : application web, ou module ajouté à votre site, chiffré par phase.",
      ],
    },
    {
      titre: "Les erreurs classiques qui font payer deux fois",
      points: [
        "Choisir une boutique en ligne pour dix références et des ventes qui se concluent toujours par téléphone : un site vitrine avec un formulaire aurait suffi.",
        "Envoyer une campagne publicitaire vers la page d'accueil d'un site vitrine : les visiteurs payés se dispersent dans le menu au lieu de demander.",
        "Refaire entièrement un site qui reçoit du trafic sans lister ses pages ni poser de redirections : les positions Google partent avec l'ancien site.",
        "Commander une application avant d'avoir écrit noir sur blanc ce qu'elle doit faire : le devis change en cours de route, le délai aussi.",
        "Payer un design sur mesure sans prévoir le formulaire, le comptage des demandes et la fiche Google : le site est joli, mais il ne vous apprend rien.",
      ],
    },
    {
      titre: "À préparer avant de demander un devis",
      points: [
        "Vos réponses aux dix questions, sur une page, avec le format que vous pensez retenir et vos doutes.",
        "La liste de vos prestations ou de vos produits, avec pour chacun le prix ou la fourchette que vous communiquez déjà.",
        "Vos textes et photos existants, même imparfaits, et les adresses de deux ou trois sites que vous aimez, en notant ce qui vous plaît.",
        "Vos accès actuels : nom de domaine, hébergement, fiche Google, outils de facturation ou de prise de rendez-vous à relier.",
      ],
    },
  ],
  conclusion:
    "Si le format reste flou après ces dix questions, trente minutes avec le fondateur suffisent pour trancher : vous repartez avec un avis écrit, sans engagement.",
  pole: POLE,
  page: "/services/sites-web",
};

/* ── Site vitrine : checklist des 25 points ─────────────────────────────── */

const CHECKLIST_VITRINE: Ressource = {
  slug: "site-vitrine-checklist-25-points",
  titre: "Checklist des 25 points d'un site vitrine qui apporte des demandes",
  accroche:
    "Vingt-cinq vérifications concrètes, page par page, pour savoir si votre site vitrine donne envie d'appeler ou s'il laisse partir vos visiteurs.",
  format: "checklist",
  apercu: [
    "5 points pour la page d'accueil, 4 pour chaque page de prestation",
    "Les preuves qui rassurent avant le premier appel",
    "Le formulaire et le téléphone testés sur mobile",
    "Les bases du référencement local à cocher",
  ],
  sections: [
    {
      titre: "Page d'accueil : ce que le visiteur voit sans défiler",
      points: [
        "Le titre dit votre métier, votre zone et pour qui vous travaillez (« Plombier à Rueil-Malmaison, dépannage et rénovation pour particuliers »), pas un slogan que personne ne tape sur Google.",
        "Le bouton principal (appeler, demander un devis, réserver) est visible sans défiler, sur ordinateur et sur téléphone.",
        "Votre numéro de téléphone est cliquable sur mobile et affiché en haut de chaque page.",
        "Une photo de vous, de votre équipe ou de vos réalisations remplace l'image d'illustration générique.",
        "Vos horaires, votre adresse ou votre zone d'intervention apparaissent sur la page d'accueil, pas seulement sur la page contact.",
      ],
    },
    {
      titre: "Pages de prestations : une par service",
      points: [
        "Chaque prestation importante a sa propre page, avec son titre, son texte et son bouton, plutôt qu'une liste de mots-clés sur une seule page.",
        "Le texte répond aux trois questions que vos clients posent au téléphone : combien ça coûte, combien de temps, comment ça se passe.",
        "Un ordre de prix ou une fourchette est indiqué quand c'est possible : un visiteur qui ne trouve aucun prix appelle un concurrent qui l'affiche.",
        "Chaque page se termine par un appel à l'action précis (« Demander un devis pour ma toiture »), pas un « Contactez-nous » générique.",
      ],
    },
    {
      titre: "Preuve et confiance",
      points: [
        "Vos avis Google sont affichés avec leur nombre et leur note réels, reliés à votre fiche, sans avis inventé ni recopié.",
        "Vos réalisations sont montrées en photo avec une ligne de contexte : lieu, type de chantier ou de prestation, durée.",
        "Vos certifications, assurances ou labels sont nommés (garantie décennale, qualification, diplôme), avec le document consultable si possible.",
        "La page « À propos » montre une vraie personne : nom, parcours, pourquoi vous faites ce métier, en quelques lignes.",
      ],
    },
    {
      titre: "Contact et prise de demande",
      points: [
        "Le formulaire demande trois ou quatre champs maximum (nom, téléphone ou email, message) : chaque champ en plus fait perdre des demandes.",
        "Un test d'envoi a été fait ce mois-ci : le message arrive dans votre boîte, sans passer en spam, et un accusé de réception part au visiteur.",
        "Chaque demande arrive avec sa source (page, campagne) dans votre email ou votre CRM, pour savoir ce qui apporte des clients.",
        "Une alternative existe au formulaire : numéro cliquable, prise de rendez-vous en ligne ou messagerie, selon vos habitudes.",
      ],
    },
    {
      titre: "Mobile et vitesse",
      points: [
        "Le site a été ouvert sur votre propre téléphone : textes lisibles sans zoomer, boutons assez grands, aucun élément coupé.",
        "La page d'accueil s'affiche en moins de trois secondes en 4G ; les photos sont compressées avant d'être mises en ligne.",
        "Le menu mobile fonctionne, avec le téléphone ou le bouton principal accessible depuis ce menu.",
        "Aucune fenêtre surgissante ne bloque l'écran à l'arrivée sur téléphone (hors bandeau de cookies obligatoire).",
      ],
    },
    {
      titre: "Référencement local : les bases",
      points: [
        "Chaque page a un titre unique qui contient le service et la ville, et une description qui donne envie de cliquer depuis Google.",
        "Votre fiche Google est reliée au site, avec la même adresse, le même téléphone et le même nom que sur le site.",
        "Le site est déclaré dans Google Search Console et vous savez y lire le nombre de clics reçus chaque mois.",
        "Les mentions légales, la politique de confidentialité et le bandeau de cookies sont en place : Google et vos clients les vérifient.",
      ],
    },
  ],
  conclusion:
    "Moins de quinze points cochés ? Ce n'est pas une question de design : ce sont les points manquants qui coûtent des demandes. Nous pouvons les reprendre avec vous, ou vous montrer en trente minutes par où commencer.",
  pole: POLE,
  page: "/services/sites-web/site-vitrine",
};

/* ── Site e-commerce : 30 vérifications avant d'ouvrir ──────────────────── */

const CHECKLIST_ECOMMERCE: Ressource = {
  slug: "site-ecommerce-checklist-30-verifications",
  titre: "Checklist de lancement e-commerce : 30 vérifications avant d'ouvrir la boutique",
  accroche:
    "Trente vérifications à cocher avant d'annoncer votre boutique : fiches produits, paiement, livraison, obligations légales et mesure, pour ne pas découvrir les problèmes avec vos premiers clients.",
  format: "checklist",
  apercu: [
    "Six familles de vérifications, cinq points chacune",
    "Le test d'une commande complète, du panier au remboursement",
    "Les mentions obligatoires d'une boutique en France",
    "Ce qu'il faut mesurer dès le premier jour",
  ],
  sections: [
    {
      titre: "Fiches produits",
      points: [
        "Chaque produit a au moins trois photos nettes, sur fond cohérent, dont une en situation ou à l'échelle.",
        "Le titre contient le nom du produit tel que vos clients le cherchent, pas seulement votre référence interne.",
        "La description répond aux questions avant achat : matière, dimensions, entretien, contenu du colis, compatibilités.",
        "Les variantes (taille, couleur, quantité) se choisissent sans quitter la fiche, et chacune affiche son stock et son prix.",
        "Le prix TTC, les frais de port ou leur règle (« offerts dès 60 € ») et le délai d'expédition sont visibles sur la fiche, pas seulement au panier.",
      ],
    },
    {
      titre: "Panier et paiement",
      points: [
        "Une commande de test complète a été passée avec une vraie carte, puis remboursée : vous avez vu ce que le client voit à chaque étape.",
        "Le paiement par carte fonctionne, et un second moyen (PayPal, virement, paiement en plusieurs fois) est proposé si vos clients le demandent.",
        "Le client peut commander sans créer de compte ; la création de compte lui est proposée après la commande.",
        "Les codes promotionnels, s'il y en a, ont été testés : montant, conditions, date de fin.",
        "L'email de confirmation de commande part immédiatement, avec le récapitulatif, le montant, l'adresse de livraison et vos coordonnées.",
      ],
    },
    {
      titre: "Livraison et retours",
      points: [
        "Les modes de livraison proposés (domicile, point relais, retrait en boutique) correspondent à des contrats réellement ouverts chez vos transporteurs.",
        "Les frais de port sont calculés correctement pour un produit léger, un produit lourd et une commande de plusieurs articles.",
        "Le client reçoit un numéro de suivi par email dès l'expédition.",
        "Les conditions de retour (délai de rétractation de 14 jours, état du produit, qui paie le retour) sont écrites sur une page dédiée et rappelées dans le tunnel de commande.",
        "Vous avez prévu les emballages, les étiquettes et le temps de préparation pour les dix premières commandes.",
      ],
    },
    {
      titre: "Obligations légales",
      points: [
        "Les mentions légales indiquent votre raison sociale, votre SIREN ou SIRET, votre adresse, votre email et l'hébergeur du site.",
        "Les conditions générales de vente sont en ligne et le client les accepte par une case non pré-cochée avant de payer.",
        "La politique de confidentialité décrit les données collectées, leur usage et la durée de conservation ; le bandeau de cookies permet de refuser.",
        "Le bouton final de paiement porte une mention sans ambiguïté, du type « Commander et payer ».",
        "Les factures sont générées avec les mentions obligatoires (numéro, date, TVA ou mention de franchise) et envoyées ou téléchargeables.",
      ],
    },
    {
      titre: "Confiance et service client",
      points: [
        "Une page « Qui sommes-nous » présente la personne ou l'équipe derrière la boutique, avec une photo réelle.",
        "Un moyen de contact est visible sur chaque page (email, téléphone, formulaire), avec un délai de réponse annoncé et tenu.",
        "Les avis clients affichés sont réels et datés ; sans avis au lancement, la boutique n'en invente pas.",
        "Une page de questions fréquentes répond sur la livraison, les retours, les tailles ou l'entretien, pour éviter les emails répétitifs.",
        "Le site est en HTTPS partout, avec le cadenas affiché sur les pages de paiement.",
      ],
    },
    {
      titre: "Mesure et lancement",
      points: [
        "Google Analytics (ou un équivalent) est installé, et une commande de test apparaît bien dans les rapports avec son montant.",
        "Les balises de conversion Google Ads et le pixel Meta sont posés et testés, si vous prévoyez de la publicité.",
        "La boutique est déclarée dans Google Search Console et le flux produits est prêt pour Google Merchant Center.",
        "Vous savez où consulter chaque jour : commandes du jour, stock des produits phares, messages clients en attente.",
        "Le jour du lancement, un email ou une publication est prêt pour vos contacts existants, avec ou sans offre de bienvenue.",
      ],
    },
  ],
  conclusion:
    "Chaque case non cochée est un problème que vos premiers clients découvriront à votre place. Si vous voulez que nous passions la liste avec vous avant l'ouverture, trente minutes suffisent.",
  pole: POLE,
  page: "/services/sites-web/site-ecommerce",
};

/* ── Landing page : le plan en 9 blocs ──────────────────────────────────── */

const PLAN_LANDING: Ressource = {
  slug: "site-landing-page-plan-9-blocs",
  titre: "Le plan d'une landing page qui convertit : 9 blocs dans l'ordre, avec des exemples de phrases",
  accroche:
    "Les neuf blocs d'une page de campagne, dans l'ordre où le visiteur les lit, avec une phrase d'exemple pour chacun et les vérifications à faire avant la mise en ligne.",
  format: "plan",
  apercu: [
    "Les 9 blocs, du titre au formulaire, dans l'ordre de lecture",
    "Une phrase d'exemple prête à adapter pour chaque bloc",
    "Les règles d'écriture qui évitent les pages bavardes",
    "La vérification sur téléphone et le test du formulaire",
  ],
  sections: [
    {
      titre: "Avant d'écrire : trois choses à fixer",
      points: [
        "L'action unique attendue : appel, demande de devis, réservation ou inscription. Une page, une action ; tout le reste s'efface.",
        "La promesse de l'annonce, mot pour mot : le visiteur doit retrouver sur la page ce qui l'a fait cliquer, sinon il repart.",
        "Le client visé, en une phrase : « propriétaire d'une maison de plus de vingt ans en Île-de-France, qui veut isoler ses combles avant l'hiver ».",
      ],
    },
    {
      titre: "Les 9 blocs, dans l'ordre de lecture",
      intro: "Chaque bloc a un rôle. Les exemples sont écrits pour une entreprise d'isolation : réécrivez-les avec vos mots et votre offre.",
      points: [
        "Le titre : la promesse de l'annonce, avec le bénéfice et la zone. Exemple : « Isolation des combles à Rueil-Malmaison : devis chiffré sous 48 h, aide de l'État déduite ».",
        "Le sous-titre : pour qui et comment, en une phrase. Exemple : « Pour les propriétaires de maison, visite gratuite et chantier réalisé en une journée ».",
        "Le bouton principal : un verbe et ce que l'on obtient. Exemple : « Recevoir mon devis sous 48 h », placé sous le titre et répété en bas de page.",
        "La preuve rapide : note et nombre d'avis, années d'expérience, certification, juste sous le bouton. Exemple : « Note Google et nombre d'avis réels, entreprise certifiée », avec vos chiffres exacts, jamais arrondis vers le haut.",
        "Le problème : ce que vit le visiteur aujourd'hui, en trois lignes. Exemple : « Des factures de chauffage qui grimpent, une chambre froide sous le toit, et des devis qui n'arrivent jamais ».",
        "L'offre : ce que le client obtient, en trois ou quatre points concrets. Exemple : « Visite et mesure gratuites, devis fixe sous 48 h, chantier en une journée, aide de l'État calculée pour vous ».",
        "La preuve détaillée : deux ou trois avis complets avec prénom et ville, ou des photos avant et après, légendées. Exemple : « Marie L., Nanterre : chantier fait en un jour, aucune poussière », repris mot pour mot d'un avis réel.",
        "Les objections : trois questions auxquelles vous répondez avant qu'elles ne bloquent. Exemple : « Combien ça coûte ? », « Suis-je éligible à l'aide ? », « Et si je ne suis pas satisfait ? ».",
        "Le formulaire : trois champs, le téléphone en alternative, et ce qui se passe ensuite. Exemple : « Nous vous rappelons sous 24 h pour fixer la visite ».",
      ],
    },
    {
      titre: "Écrire chaque bloc : cinq règles",
      points: [
        "Une idée par bloc, un titre lisible en une seconde, un texte de trois lignes maximum : le visiteur balaie, il ne lit pas.",
        "Les mots du client plutôt que les vôtres : reprenez les expressions entendues au téléphone (« ça coûte combien », « vous venez quand »).",
        "Des chiffres réels et vérifiables : vos avis, vos délais, vos années d'expérience ; rien d'arrondi ni de supposé.",
        "Aucun menu, aucun lien vers le reste du site, aucun réseau social : chaque sortie possible est une demande perdue.",
        "Le prix ou l'ordre de prix, s'il peut être annoncé : une page qui le cache fait fuir ceux qui veulent juste savoir.",
      ],
    },
    {
      titre: "Le formulaire et le bouton",
      points: [
        "Trois champs maximum : prénom, téléphone ou email, et une question utile pour qualifier (« surface approximative », « date souhaitée »).",
        "Le libellé du bouton dit ce que l'on obtient (« Recevoir mon devis »), jamais « Envoyer ».",
        "La case de consentement est présente, non pré-cochée, avec un lien vers la politique de confidentialité.",
        "Après l'envoi, un message dit ce qui se passe ensuite et dans quel délai ; le visiteur ne reste pas sur une page vide.",
      ],
    },
    {
      titre: "La version téléphone",
      points: [
        "Le titre, le bouton et la preuve rapide tiennent dans le premier écran d'un téléphone, sans défiler.",
        "Le numéro de téléphone est cliquable et un bouton d'appel reste accessible en bas d'écran.",
        "Les images sont compressées : la page s'ouvre en moins de trois secondes en 4G, car la plupart des clics publicitaires viennent d'un téléphone.",
        "Le formulaire ouvre le bon clavier (numérique pour le téléphone) et les champs sont assez hauts pour le pouce.",
      ],
    },
    {
      titre: "Avant la mise en ligne",
      points: [
        "Un envoi de test du formulaire a été reçu dans votre boîte email ou votre CRM, avec la source de la demande.",
        "Le comptage des demandes fonctionne : la balise Google Ads ou le pixel Meta enregistre bien l'envoi du formulaire et le clic sur le numéro.",
        "La page est exclue de l'indexation Google si elle sert uniquement à la campagne, pour ne pas concurrencer votre site.",
        "Une relecture à voix haute a été faite : chaque phrase se comprend sans connaître votre métier.",
      ],
    },
  ],
  conclusion:
    "Avec ce plan, vous pouvez écrire votre page vous-même. Si vous préférez que nous l'écrivions, la construisions et posions le comptage des demandes, le devis est écrit sous 24 h.",
  pole: POLE,
  page: "/services/sites-web/landing-page",
};

/* ── Refonte : grille d'audit en 20 questions ───────────────────────────── */

const GRILLE_REFONTE: Ressource = {
  slug: "site-refonte-grille-audit-20-questions",
  titre: "Grille d'audit avant refonte : 20 questions pour décider quoi garder, corriger ou refaire",
  accroche:
    "Vingt questions à remplir sur votre site actuel, en une heure, pour savoir ce qui mérite d'être conservé, corrigé ou refait, avant de signer une refonte.",
  format: "modele",
  apercu: [
    "20 questions en cinq familles, à noter garder, corriger ou refaire",
    "Où trouver chaque réponse : Search Console, Analytics, votre téléphone",
    "La lecture de la grille : refonte, rafraîchissement ou site neuf",
    "Ce qu'il faut exiger dans un devis de refonte",
  ],
  sections: [
    {
      titre: "Comment remplir la grille",
      points: [
        "Pour chaque question, répondez en une ligne, puis notez l'une des trois mentions : garder, corriger ou refaire.",
        "Faites l'exercice avec trois outils ouverts : Google Search Console, Google Analytics (ou l'outil de mesure en place) et votre téléphone.",
        "Ne devinez pas : si une réponse manque, notez « inconnu ». Une refonte se décide sur des faits, pas sur une impression.",
      ],
    },
    {
      titre: "Contenus et pages",
      points: [
        "Question 1 : quelles pages reçoivent des visites depuis Google ces douze derniers mois (Search Console, rapport Pages) ? Celles-là se gardent, avec leur adresse.",
        "Question 2 : quelles pages n'ont reçu aucune visite en un an ? Elles se fusionnent, se suppriment ou se réécrivent, avec une redirection vers la page qui les remplace.",
        "Question 3 : les textes disent-ils encore la vérité (prestations, prix, équipe, horaires, zone) ? Listez chaque phrase à corriger.",
        "Question 4 : les photos sont-elles les vôtres, récentes et nettes ? Comptez celles à remplacer avant de parler de design.",
      ],
    },
    {
      titre: "Référencement et trafic",
      points: [
        "Question 5 : sur quelles requêtes le site apparaît-il déjà (Search Console, rapport Requêtes) ? Notez les dix premières : la refonte ne doit pas les perdre.",
        "Question 6 : combien de clics Google le site reçoit-il par mois, et la tendance monte-t-elle ou baisse-t-elle depuis un an ?",
        "Question 7 : quels sites renvoient vers le vôtre (annuaires, partenaires, presse) ? Ces liens pointent vers des adresses précises, qu'il faudra rediriger.",
        "Question 8 : votre fiche Google est-elle reliée au site, avec le même nom, la même adresse et le même téléphone ?",
      ],
    },
    {
      titre: "Technique et vitesse",
      points: [
        "Question 9 : en combien de secondes la page d'accueil s'affiche-t-elle sur votre téléphone en 4G, hors Wi-Fi ?",
        "Question 10 : le site est-il en HTTPS sur toutes ses pages, sans avertissement du navigateur ?",
        "Question 11 : sur quel outil le site est-il construit, et pouvez-vous encore le mettre à jour (accès, version, extensions) ?",
        "Question 12 : le nom de domaine et l'hébergement sont-ils à votre nom, avec les accès en votre possession ?",
      ],
    },
    {
      titre: "Design et mobile",
      points: [
        "Question 13 : sur téléphone, le titre, le bouton principal et le numéro sont-ils visibles sans défiler ?",
        "Question 14 : le menu, les formulaires et les boutons fonctionnent-ils au pouce, sans zoomer ?",
        "Question 15 : le site ressemble-t-il encore à votre activité d'aujourd'hui (logo, couleurs, ton, offre) ?",
        "Question 16 : quelles pages de concurrents vous semblent plus claires que les vôtres, et pourquoi, en une ligne chacune ?",
      ],
    },
    {
      titre: "Demandes et conversion",
      points: [
        "Question 17 : combien de demandes (appels, formulaires, messages) le site a-t-il apportées ces trois derniers mois ? Si vous ne savez pas, c'est la première chose à corriger.",
        "Question 18 : le formulaire a-t-il été testé ce mois-ci, et les messages arrivent-ils bien dans votre boîte ?",
        "Question 19 : chaque page importante se termine-t-elle par un appel à l'action précis, ou seulement par « Contactez-nous » ?",
        "Question 20 : les avis, réalisations et preuves affichés sont-ils à jour et reliés à leur source ?",
      ],
    },
    {
      titre: "Lire votre grille",
      points: [
        "Majorité de « garder » et quelques « corriger » : un rafraîchissement suffit (textes, photos, vitesse, formulaire), pas de refonte complète.",
        "Des pages qui reçoivent du trafic mais un site lent, daté ou illisible sur téléphone : refonte, en conservant les adresses des pages qui rapportent et en posant les redirections.",
        "Peu ou pas de trafic, un outil que plus personne ne sait mettre à jour, des textes faux : un site neuf coûte souvent moins cher qu'une refonte.",
        "Avant de signer, exigez dans le devis la liste des pages conservées, le plan de redirections, le délai, le prix fixe, et la propriété du domaine et des contenus à votre nom.",
      ],
    },
  ],
  conclusion:
    "Envoyez-nous votre grille remplie : nous vous disons par écrit, sous 24 h, si votre site relève d'un rafraîchissement, d'une refonte ou d'un site neuf, et à quel prix.",
  pole: POLE,
  page: "/services/sites-web/refonte-site",
};

/* ── Application web : cahier des charges en 12 rubriques ───────────────── */

const CAHIER_APPLICATION: Ressource = {
  slug: "site-application-cahier-des-charges-12-rubriques",
  titre: "Cahier des charges d'application web : les 12 rubriques à remplir avant un devis",
  accroche:
    "Les douze rubriques qu'un prestataire a besoin de lire pour chiffrer votre application sans surprise, avec un exemple rempli pour une prise de rendez-vous.",
  format: "modele",
  apercu: [
    "12 rubriques, chacune avec ce qu'il faut y écrire",
    "Un exemple rempli de bout en bout",
    "Le tri qui tient le prix : phase 1 ou plus tard",
    "Les vérifications avant d'envoyer le document",
  ],
  sections: [
    {
      titre: "Rubriques 1 à 3 : le contexte",
      points: [
        "Rubrique 1, votre activité : ce que vous faites, pour qui, la taille de l'équipe et le volume traité (nombre de clients, de dossiers, de rendez-vous par mois).",
        "Rubrique 2, le problème à résoudre : la tâche qui prend du temps aujourd'hui, comment elle est faite (tableur, email, papier), combien d'heures par semaine elle coûte, et à qui.",
        "Rubrique 3, le résultat attendu : ce qui doit changer concrètement une fois l'application en place, en une ou deux phrases vérifiables (« plus aucune ressaisie de devis », « rendez-vous confirmés sans appel »).",
      ],
    },
    {
      titre: "Rubriques 4 à 6 : les utilisateurs et les parcours",
      points: [
        "Rubrique 4, qui utilise l'application : chaque type d'utilisateur (vous, un salarié, un client, un partenaire), ce qu'il doit pouvoir faire et ce qu'il ne doit pas voir.",
        "Rubrique 5, les parcours principaux : pour chaque utilisateur, les trois à cinq actions dans l'ordre, du début à la fin (« le client choisit un créneau, renseigne son nom, reçoit une confirmation »).",
        "Rubrique 6, les écrans imaginés : la liste des écrans ou des pages, même dessinés à la main, avec ce que chacun affiche et ce que l'on peut y faire.",
      ],
    },
    {
      titre: "Rubriques 7 à 9 : les données et les connexions",
      points: [
        "Rubrique 7, les données manipulées : la liste des informations (client, dossier, rendez-vous, devis, produit) avec leurs champs, et d'où elles viennent aujourd'hui.",
        "Rubrique 8, les outils à relier : agenda, facturation, CRM, emails, paiement, signature ; pour chacun, le nom exact de l'outil et ce qui doit circuler, dans quel sens.",
        "Rubrique 9, les notifications et les automatismes : qui reçoit quoi, quand (confirmation, rappel la veille, relance d'un devis sans réponse), par email ou dans l'application.",
      ],
    },
    {
      titre: "Rubriques 10 à 12 : contraintes, budget et suite",
      points: [
        "Rubrique 10, les contraintes : données sensibles, accès depuis un téléphone ou une tablette, usage hors connexion, obligations de votre métier, langues.",
        "Rubrique 11, le budget et le délai : une fourchette réaliste, la date à laquelle l'outil doit servir, et ce qui peut attendre une seconde phase.",
        "Rubrique 12, la propriété et la suite : à qui appartiennent le code et les données, qui met à jour l'application, quel suivi vous attendez après la mise en ligne.",
      ],
    },
    {
      titre: "Comment remplir chaque rubrique",
      points: [
        "Écrivez avec vos mots, sans vocabulaire technique : « le client est prévenu la veille » suffit ; le moyen (email, rappel) se décide ensuite.",
        "Séparez l'indispensable de ce qui serait bien : marquez chaque fonction « phase 1 » ou « plus tard ». C'est ce tri qui tient le prix.",
        "Donnez des exemples réels : un vrai devis, un vrai planning, une vraie fiche client, anonymisés si besoin. Un exemple vaut une page d'explications.",
        "Notez les exceptions : ce qui se passe quand un client annule, quand un dossier est incomplet, quand deux personnes modifient la même chose.",
      ],
    },
    {
      titre: "Exemple rempli : prise de rendez-vous pour un cabinet",
      intro: "Cas imaginé pour montrer le niveau de détail attendu, rubrique par rubrique.",
      points: [
        "Contexte (rubriques 1 à 3) : cabinet de trois praticiens, rendez-vous pris au téléphone par une secrétaire, une heure par jour perdue en rappels et en annulations ; résultat attendu : les patients réservent en ligne, reçoivent une confirmation et un rappel la veille, et peuvent annuler ou déplacer sans appeler.",
        "Utilisateurs et parcours (rubriques 4 à 6) : le patient choisit le praticien, le motif et un créneau, puis confirme ; la secrétaire voit le planning, bloque des créneaux et ajoute un rendez-vous manuel ; le praticien consulte sa journée sur son téléphone.",
        "Données et connexions (rubriques 7 à 9) : nom, téléphone, email, motif, praticien, date ; lien avec l'agenda existant des praticiens et l'outil de facturation pour retrouver le patient ; confirmation immédiate et rappel la veille par email.",
        "Contraintes, budget et suite (rubriques 10 à 12) : données de santé hébergées chez un hébergeur agréé, usage sur tablette à l'accueil, phase 1 pour la rentrée, phase 2 (acompte en ligne) plus tard, code et données appartenant au cabinet.",
        "Ce que ce niveau de détail permet : un devis par phase, à prix fixe, sans aller-retour sur ce que « prise de rendez-vous » voulait dire.",
      ],
    },
    {
      titre: "Avant d'envoyer votre cahier des charges",
      points: [
        "Relisez-le avec une personne qui utilisera l'outil au quotidien : elle trouvera l'étape oubliée en cinq minutes.",
        "Vérifiez que chaque rubrique tient en dix lignes : au-delà, c'est le signe que deux applications se cachent dans le même projet.",
        "Joignez vos exemples réels, la liste de vos outils avec leurs accès disponibles ou non, et vos croquis d'écrans.",
        "Demandez au prestataire un devis par phase, à prix fixe, avec ce qui est compris, ce qui ne l'est pas, et à qui appartient le résultat.",
      ],
    },
  ],
  conclusion:
    "Envoyez-nous vos douze rubriques remplies, même incomplètes : nous vous répondons par écrit sous 24 h avec un premier avis et, si le projet tient, un devis par phase.",
  pole: POLE,
  page: "/services/sites-web/application-web",
};

export const RESSOURCES_SITES_WEB: Ressource[] = [
  GUIDE_CHOISIR,
  CHECKLIST_VITRINE,
  CHECKLIST_ECOMMERCE,
  PLAN_LANDING,
  GRILLE_REFONTE,
  CAHIER_APPLICATION,
];
