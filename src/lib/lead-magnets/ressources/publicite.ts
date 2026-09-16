import type { Ressource } from "../types";

/**
 * Ressources gratuites du pôle (publicite). Une entrée par page qui propose un
 * lead magnet : la page du pôle et chacune de ses sous-pages. Voir types.ts
 * pour les règles d'écriture.
 *
 * Aucun chiffre de résultat : seulement des réglages, des vérifications et des
 * ordres de grandeur de plateforme déjà tenus sur les pages (budget média dès
 * 500 € par mois et par plateforme, environ 1 000 € sur LinkedIn).
 */
export const RESSOURCES_PUBLICITE: Ressource[] = [
  {
    slug: "publicite-comparatif-plateformes-8-criteres",
    titre:
      "Quelle plateforme publicitaire pour votre activité : Google, Meta, TikTok, Pinterest ou LinkedIn, le comparatif en 8 critères",
    accroche:
      "Huit questions à vous poser avant de dépenser le premier euro, avec la réponse pour chacune des cinq plateformes, pour choisir celle par laquelle commencer.",
    format: "guide",
    apercu: [
      "Les 8 critères qui décident de la plateforme de départ, dans l'ordre où les poser",
      "Pour chaque critère, ce que valent Google Ads, Meta Ads, TikTok Ads, Pinterest Ads et LinkedIn Ads",
      "Comment compter les points pour trancher en dix minutes, pour votre propre activité",
      "Les erreurs qui font choisir la mauvaise plateforme",
    ],
    sections: [
      {
        titre: "Vos clients cherchent-ils déjà votre offre ?",
        intro: "C'est le premier critère, et le seul qui élimine des plateformes d'office.",
        points: [
          "Google Ads : oui, c'est son terrain. L'annonce s'affiche quand quelqu'un tape « plombier Rueil-Malmaison ». Si personne ne tape votre métier, la campagne n'aura rien à afficher : vérifiez le volume dans l'outil de planification des mots clés avant de lancer.",
          "Meta Ads : non. Facebook et Instagram montrent votre offre à des personnes qui ne cherchaient rien. Il faut donc une offre qui se comprend en une image ou une vidéo de vingt secondes.",
          "TikTok Ads : non, même logique que Meta, avec un public plus jeune et un format vidéo obligatoire.",
          "Pinterest Ads : entre les deux. La personne cherche des idées (« salle de bain bois et blanc ») sans avoir choisi de marque. Votre épingle entre dans son projet, souvent des semaines avant l'achat.",
          "LinkedIn Ads : non. Un dirigeant ne cherche pas votre offre sur LinkedIn ; vous la lui présentez parce que son poste et son secteur correspondent.",
        ],
      },
      {
        titre: "À qui vendez-vous : des particuliers ou des entreprises ?",
        points: [
          "Google Ads : les deux, à condition que la recherche existe. Pour le B2B, comptez des clics plus chers et ajoutez « emploi », « formation », « gratuit » aux exclusions dès le premier jour.",
          "Meta Ads : surtout des particuliers et des petites entreprises locales. Le ciblage par poste ou par taille de société n'existe pas.",
          "TikTok Ads : des particuliers, surtout de moins de 35 ans. Pour vendre à des entreprises, passez votre chemin.",
          "Pinterest Ads : des particuliers qui préparent un achat réfléchi : décoration, mariage, mode, cadeaux, alimentaire.",
          "LinkedIn Ads : des entreprises uniquement. C'est la seule plateforme qui laisse choisir le poste, le secteur et la taille de l'entreprise de la personne qui verra l'annonce.",
        ],
      },
      {
        titre: "Combien vous rapporte un client ?",
        intro: "Le coût d'une demande n'a de sens que comparé à ce qu'un client vous rapporte.",
        points: [
          "Google Ads : un clic coûte de moins d'un euro à plusieurs dizaines d'euros selon le métier et la ville. Calculez avec votre taux de signature réel : si une demande sur trois signe, le coût d'une demande doit rester nettement sous le tiers de votre marge par client.",
          "Meta Ads : des clics souvent moins chers, mais des demandes parfois moins qualifiées. Prévoyez du temps pour rappeler vite et trier.",
          "TikTok Ads : adapté aux offres qui se décident vite, sans devis : un plat, un soin, un produit à petit prix. Un contrat de plusieurs milliers d'euros s'y vend rarement.",
          "Pinterest Ads : rentable quand la marge par commande absorbe un coût d'acquisition de plusieurs dizaines d'euros, et quand l'achat se prépare longtemps.",
          "LinkedIn Ads : le clic se paie souvent plusieurs euros, parfois plus de dix. Réservez-le aux contrats qui se chiffrent en milliers d'euros ou aux abonnements récurrents.",
        ],
      },
      {
        titre: "Que pouvez-vous montrer ?",
        points: [
          "Google Ads : du texte suffit pour une campagne Search : trois titres, deux descriptions, des extensions. Google Shopping demande en plus une photo produit et un prix.",
          "Meta Ads : une image ou une vidéo courte, prise au téléphone, avec votre travail réel : avant / après, coulisses, produit en main. Un visuel de banque d'images passe inaperçu.",
          "TikTok Ads : une vidéo verticale, filmée simplement, qui montre le produit ou le lieu dans les trois premières secondes. Un logo animé et un slogan ne suffisent pas.",
          "Pinterest Ads : des visuels verticaux soignés, proches d'une photo de magazine, avec un titre lisible. Les photos produit sur fond blanc conviennent au catalogue.",
          "LinkedIn Ads : une image sobre ou un document (PDF, carrousel) avec une promesse professionnelle claire, signé par votre entreprise.",
        ],
      },
      {
        titre: "En combien de temps voulez-vous des demandes ?",
        points: [
          "Google Ads : les premières visites arrivent dès l'activation, les premières demandes généralement sous deux semaines. Comptez quatre à huit semaines de tests pour un coût par demande stable.",
          "Meta Ads : diffusion le jour même après validation. Les premières demandes se lisent dès la deuxième semaine, le coût se stabilise après quatre à huit semaines.",
          "TikTok Ads : premières vues immédiates, premières commandes quand une vidéo se détache, souvent la deuxième ou troisième semaine. Prévoyez de renouveler les vidéos toutes les deux à trois semaines.",
          "Pinterest Ads : la plus lente des cinq. Les premiers clics arrivent vite, les commandes après plusieurs semaines, et une épingle continue de travailler après la fin de la diffusion payante.",
          "LinkedIn Ads : audiences plus petites et décisions plus longues. Premières demandes à partir de la deuxième ou troisième semaine, un à deux mois pour stabiliser le coût.",
        ],
      },
      {
        titre: "Quel budget média pouvez-vous tenir pendant trois mois ?",
        intro: "Le budget média est réglé à la plateforme depuis votre compte ; les frais de gestion d'une agence s'y ajoutent.",
        points: [
          "Google Ads : au moins 500 € par mois. En dessous, trop peu de clics pour distinguer les mots clés qui rapportent de ceux qui coûtent.",
          "Meta Ads : au moins 500 € par mois également. L'algorithme a besoin de conversions pour apprendre, sinon les résultats restent aléatoires.",
          "TikTok Ads : au moins 500 € par mois, plus le coût de production de nouvelles vidéos chaque mois, à prévoir dans le budget global.",
          "Pinterest Ads : au moins 500 € par mois, avec un catalogue à jour si vous vendez en ligne : une épingle produit sans stock coûte pour rien.",
          "LinkedIn Ads : un ordre de grandeur de 1 000 € par mois, le clic coûtant plus cher. Trois mois de tests sont le minimum pour juger.",
        ],
      },
      {
        titre: "Votre site est-il prêt à recevoir ce trafic ?",
        points: [
          "Google Ads : indispensable. Une page rapide, qui parle de la recherche tapée, avec un numéro cliquable et un formulaire court. La page d'accueil générique gaspille les clics.",
          "Meta Ads : un formulaire instantané dans Facebook ou Instagram peut remplacer le site au départ. Reliez-le à votre boîte mail ou à votre CRM pour rappeler dans l'heure.",
          "TikTok Ads : presque tout le trafic vient d'un téléphone. Testez votre page sur mobile, avec une connexion moyenne, avant de lancer.",
          "Pinterest Ads : chaque épingle doit mener à la fiche produit exacte, pas à la page d'accueil. Vérifiez que le tag Pinterest est posé et qu'il compte les achats.",
          "LinkedIn Ads : le Lead Gen Form pré-rempli évite le site, mais un dirigeant vérifiera votre page avant de répondre. Elle doit expliquer ce que vous faites en dix secondes.",
        ],
      },
      {
        titre: "Pouvez-vous mesurer une demande, et la rappeler vite ?",
        intro: "Sans mesure, aucune plateforme ne s'améliore. Sans rappel rapide, aucune demande ne devient un client.",
        points: [
          "Google Ads : installez le suivi des conversions (appels, formulaires) avant le premier euro. Sans lui, Google optimise sur des clics et vous ne saurez jamais ce que coûte une demande.",
          "Meta Ads : pixel et API de conversions sur le site, ou formulaire relié au CRM. Une demande rappelée dans l'heure répond ; trois jours plus tard, elle a souvent choisi ailleurs.",
          "TikTok Ads : pixel TikTok et événements (demande, ajout au panier, commande) installés et testés. Le bouton « Promouvoir » sans pixel ne vous apprendra rien.",
          "Pinterest Ads : tag Pinterest avec les événements achat et ajout au panier. Distinguez les conversions après clic de celles après simple vue de l'épingle.",
          "LinkedIn Ads : Insight Tag posé sur le site et conversions définies. Suivez ce que devient chaque demande dans votre cycle de vente, pas seulement son coût.",
        ],
      },
    ],
    conclusion:
      "Comptez un point par plateforme à chaque critère où elle vous convient. Démarrez par celle qui en totalise le plus, une seule, et n'en ajoutez une deuxième que lorsque la première a trouvé un coût par demande stable. Si vous hésitez encore entre deux, trente minutes suffisent pour trancher avec le fondateur de l'agence.",
    pole: "publicite",
    page: "/services/sea",
  },

  {
    slug: "publicite-google-ads-structure-compte-artisan-tpe",
    titre:
      "Structure d'un compte Google Ads pour artisan et TPE : campagnes, groupes d'annonces, 40 mots clés négatifs à exclure dès le premier jour",
    accroche:
      "Le modèle que nous suivons pour monter un compte Google Ads lisible, à recopier campagne par campagne, avec la liste d'exclusions qui évite de payer des clics hors sujet.",
    format: "modele",
    apercu: [
      "L'arborescence complète : combien de campagnes, quels groupes d'annonces, quels mots clés",
      "Les réglages à vérifier avant d'activer : zone, horaires, réseau, suivi des conversions",
      "40 mots clés négatifs classés en huit familles, à coller dans une liste d'exclusions partagée",
      "Un modèle d'annonce responsive : titres, descriptions et extensions à adapter",
    ],
    sections: [
      {
        titre: "Avant de créer la première campagne",
        points: [
          "Créez le compte à votre nom, avec votre adresse email, et donnez un accès administrateur à votre prestataire plutôt que l'inverse : l'historique vous appartient.",
          "Installez le suivi des conversions avant tout lancement : appels depuis l'annonce, appels depuis le site, formulaires envoyés. Testez chaque conversion en envoyant une vraie demande.",
          "Reliez votre fiche d'établissement Google au compte : elle alimente les extensions de lieu et les annonces sur Google Maps.",
          "Listez vos trois prestations les plus rentables et vos trois villes ou quartiers prioritaires : ce sont eux qui structurent le compte, pas le catalogue complet.",
          "Notez ce que vous rapporte un client moyen : c'est la référence pour juger le coût par demande dès le premier rapport.",
        ],
      },
      {
        titre: "Les campagnes : une par intention, pas une par ville",
        points: [
          "Campagne 1 « Dépannage » (ou l'urgence de votre métier) : mots clés d'intention immédiate, enchère plus élevée, extension d'appel en tête, horaires étendus.",
          "Campagne 2 « Travaux et devis » : les prestations planifiées (rénovation, installation, création), enchère plus mesurée, formulaire de devis en page d'arrivée.",
          "Campagne 3 « Marque » : votre propre nom et ses fautes de frappe, budget faible, pour que la première réponse à votre nom soit vous et non un concurrent.",
          "Une seule zone géographique par campagne, réglée sur « présence » et non « présence ou intérêt » : sinon vous payez des clics de personnes qui parlent de votre ville sans y être.",
          "Réseau de recherche uniquement au départ : décochez le réseau Display et les partenaires de recherche, qui diluent le budget.",
        ],
      },
      {
        titre: "Les groupes d'annonces : un thème serré, cinq à quinze mots clés",
        points: [
          "Un groupe = une prestation précise : « fuite d'eau », « chauffe-eau », « débouchage », pas un groupe « plomberie » fourre-tout.",
          "Cinq à quinze mots clés par groupe, en expression (entre guillemets) et en mot clé exact (entre crochets). Évitez la requête large au départ : elle déclenche des recherches que vous ne contrôlez pas.",
          "Chaque groupe a sa page d'arrivée : l'annonce « chauffe-eau » mène à la page chauffe-eau, jamais à l'accueil.",
          "Deux annonces responsives par groupe, pour laisser Google comparer, plus une extension d'accroche propre au thème.",
          "Nommez les groupes avec le même modèle partout (« Prestation | Ville ») : le rapport mensuel se lit en une minute.",
        ],
      },
      {
        titre: "Les annonces et les extensions",
        points: [
          "Titres : le métier et la ville dans le premier, la preuve dans le deuxième (« Devis écrit avant travaux »), l'action dans le troisième (« Rappel dans l'heure », si vous le tenez).",
          "Descriptions : la prestation, la zone, un délai réaliste et une phrase qui rassure (assurance décennale, artisan local, avis Google visibles).",
          "Extension d'appel avec votre numéro portable si vous répondez en déplacement, sinon le fixe qui sonne au bureau.",
          "Extensions de liens annexes vers vos pages tarifs, réalisations, avis et contact : quatre liens minimum, chacun avec deux lignes de description.",
          "Extension de lieu depuis la fiche Google et extension de prix pour vos prestations à tarif fixe : elles prennent de la place à l'écran, sans surcoût.",
        ],
      },
      {
        titre: "40 mots clés négatifs à exclure dès le premier jour",
        intro:
          "Ajoutez-les dans une liste d'exclusions partagée au niveau du compte, puis appliquez-la à toutes les campagnes. Complétez-la chaque semaine avec les termes de recherche réels.",
        points: [
          "Emploi et carrière : emploi, recrutement, salaire, offre d'emploi, CV. Ces recherches viennent de candidats, pas de clients.",
          "Formation et diplômes : formation, cours, école, CAP, apprentissage. Des futurs confrères, pas des chantiers.",
          "Faire soi-même : gratuit, tuto, tutoriel, soi-même, comment faire. La personne veut apprendre, pas commander.",
          "Matériel et fournitures : pièce détachée, fournisseur, grossiste, occasion, leboncoin. Elle cherche un produit, pas un artisan.",
          "Grandes enseignes : leroy merlin, castorama, brico dépôt, amazon, ikea. Vous paieriez un clic pour une personne qui cherche un magasin.",
          "Curiosité et définitions : définition, wikipedia, forum, que veut dire, histoire. Aucune intention d'achat.",
          "Hors zone : marseille, lyon, bordeaux, lille, belgique. Remplacez par les villes où vous n'intervenez pas, et complétez au fil des termes de recherche.",
          "Hors cible : association, bénévole, stage, alternance, logiciel. Des demandes qui ne deviendront jamais un devis.",
        ],
      },
      {
        titre: "Avant d'activer : la vérification finale",
        points: [
          "Budget quotidien = budget mensuel divisé par 30,4, réparti par exemple à 60 % sur la campagne d'urgence, 30 % sur les travaux, 10 % sur la marque, puis ajusté selon les demandes reçues.",
          "Stratégie d'enchères « Maximiser les clics » avec un CPC maximal les deux premières semaines, puis « Maximiser les conversions » seulement quand une trentaine de conversions ont été comptées.",
          "Calendrier de diffusion réglé sur vos heures de réponse réelles : une annonce qui sonne dans le vide à 23 h coûte le même prix.",
          "Le premier rapport de termes de recherche lu au bout de sept jours : chaque terme hors sujet rejoint la liste d'exclusions.",
          "Un tableau à trois colonnes tenu chaque semaine : budget dépensé, demandes reçues, coût par demande. Rien d'autre n'est nécessaire pour décider.",
        ],
      },
    ],
    conclusion:
      "Ce modèle tient pour un artisan ou une petite entreprise avec deux ou trois prestations phares. Si votre compte existe déjà, l'audit offert le compare à cette structure et vous dit ce qui fuit, sans obligation de nous le confier.",
    pole: "publicite",
    page: "/services/sea/google-ads",
  },

  {
    slug: "publicite-meta-ads-12-scripts-video-20-secondes",
    titre: "12 scripts de vidéos Meta Ads de 20 secondes, prêts à tourner au téléphone",
    accroche:
      "Douze vidéos à filmer vous-même dans votre atelier, votre boutique ou votre cabinet, écrites seconde par seconde pour amener une personne à laisser ses coordonnées.",
    format: "modele",
    apercu: [
      "12 scripts découpés en trois temps : accroche, démonstration, appel à remplir le formulaire",
      "Trois familles : obtenir un devis, montrer le travail, répondre à une objection",
      "Ce qu'il faut préparer avant de tourner, et les réglages du téléphone",
      "Le formulaire instantané à relier derrière la vidéo, question par question",
    ],
    sections: [
      {
        titre: "Avant de tourner",
        points: [
          "Filmez en vertical (9:16), téléphone tenu à deux mains ou posé sur un support, à hauteur des yeux ou de l'objet.",
          "Lumière naturelle de face, jamais dans le dos : près d'une fenêtre, ou dehors à l'ombre.",
          "Son : parlez à moins d'un mètre du téléphone, dans un lieu calme. Un micro cravate à quelques dizaines d'euros change tout.",
          "Une seule idée par vidéo, dite avec les mots de vos clients, pas ceux de votre métier.",
          "Prévoyez les sous-titres : la plupart des vidéos sont vues sans le son dans le fil.",
        ],
      },
      {
        titre: "Quatre scripts « obtenir un devis »",
        intro: "Chaque script se lit en trois temps : 0 à 3 s, 3 à 15 s, 15 à 20 s. Les phrases entre guillemets se disent face caméra ou s'écrivent à l'écran.",
        points: [
          "Script 1, « Le devis écrit » : 0 à 3 s, face caméra dans votre atelier : « Vous attendez un devis depuis dix jours ? » ; 3 à 15 s, montrez un devis imprimé, page par page : « Chez nous, il est écrit, détaillé, et envoyé sous 48 heures » (ou votre délai réel) ; 15 à 20 s : « Laissez vos coordonnées, nous vous rappelons aujourd'hui. »",
          "Script 2, « La question qui bloque » : 0 à 3 s : « Vous ne savez pas combien ça coûte ? » ; 3 à 15 s, listez à l'écran les trois éléments qui font varier le prix, en les montrant sur un vrai chantier ; 15 à 20 s : « Remplissez le formulaire, vous recevez une fourchette de prix dans la journée. »",
          "Script 3, « Le rappel dans l'heure » (à n'utiliser que si vous le tenez) : 0 à 3 s : « Vous avez appelé trois artisans, personne n'a rappelé ? » ; 3 à 15 s, votre téléphone qui sonne, vous qui décrochez, puis votre carnet de rendez-vous ; 15 à 20 s : « Testez-nous : laissez votre numéro dans le formulaire. »",
          "Script 4, « La visite gratuite » : 0 à 3 s : « Avant de signer quoi que ce soit, nous passons voir » ; 3 à 15 s, filmez-vous en train de mesurer et de prendre des notes chez un client, avec son accord ; 15 à 20 s : « La visite est gratuite : demandez-la en trente secondes. »",
        ],
      },
      {
        titre: "Quatre scripts « montrer le travail »",
        points: [
          "Script 5, « Avant / après » : 0 à 3 s, l'état avant, plein cadre, sans commentaire ; 3 à 15 s, le chantier en accéléré puis le résultat ; 15 à 20 s : « Le vôtre pourrait ressembler à ça : demandez un devis. »",
          "Script 6, « Une journée avec nous » : 0 à 3 s : « 7 h 30, on charge le camion » ; 3 à 15 s, trois plans courts de la journée (arrivée, geste technique, remise des clés) ; 15 à 20 s : « Vous voulez que nous passions chez vous ? Le formulaire est juste en dessous. »",
          "Script 7, « Le geste que personne ne montre » : 0 à 3 s, gros plan sur un détail technique : « Ça, c'est ce qui fait la différence dans dix ans » ; 3 à 15 s, expliquez le geste en le faisant ; 15 à 20 s : « Pour un travail fait comme ça, laissez vos coordonnées. »",
          "Script 8, « Le client parle » : 0 à 3 s, un client réel, chez lui, avec son accord écrit : « Je les ai choisis parce que… » ; 3 à 15 s, il montre ce qui a été fait ; 15 à 20 s, vous reprenez : « Vous aussi ? Demandez votre devis. »",
        ],
      },
      {
        titre: "Quatre scripts « répondre à une objection »",
        points: [
          "Script 9, « C'est trop cher » : 0 à 3 s : « Oui, nous ne sommes pas les moins chers » ; 3 à 15 s, montrez ce qui est compris dans le prix (garantie, matériaux, nettoyage, suivi) ; 15 à 20 s : « Comparez avec un devis détaillé : demandez-le. »",
          "Script 10, « Je n'ai pas le temps » : 0 à 3 s : « Vous n'avez pas le temps de gérer des travaux ? » ; 3 à 15 s, montrez comment vous prenez tout en charge (rendez-vous, fournitures, coordination) ; 15 à 20 s : « Une seule chose à faire : remplir ce formulaire. »",
          "Script 11, « Je ne vous connais pas » : 0 à 3 s, face caméra, prénom et métier : « Vous ne me connaissez pas, c'est normal » ; 3 à 15 s, votre atelier, votre équipe, vos avis Google à l'écran ; 15 à 20 s : « Parlons-en, sans engagement : laissez votre numéro. »",
          "Script 12, « Ce n'est pas urgent » : 0 à 3 s : « Vous y pensez depuis un moment ? » ; 3 à 15 s, montrez ce que ça donne quand on attend trop (dégât, surcoût), puis la solution ; 15 à 20 s : « Un premier avis ne coûte rien : demandez-le aujourd'hui. »",
        ],
      },
      {
        titre: "Le formulaire instantané derrière la vidéo",
        points: [
          "Trois champs pré-remplis (prénom, email, téléphone) et une seule question de qualification à choix, pas plus : « Votre projet concerne : rénovation / dépannage / installation ».",
          "Une phrase d'introduction qui répète la promesse de la vidéo : la personne doit retrouver ce qu'elle vient d'entendre.",
          "Une page de confirmation qui annonce la suite précise : « Nous vous rappelons aujourd'hui entre 9 h et 18 h. »",
          "Formulaire relié à votre boîte mail ou à votre CRM dès la création : une demande découverte trois jours plus tard dans l'application Meta est souvent perdue.",
          "Rappel dans l'heure pendant vos horaires : c'est le réglage le plus utile de toute la campagne, et il ne coûte rien.",
        ],
      },
      {
        titre: "Après la mise en ligne",
        points: [
          "Lancez trois scripts en parallèle avec le même budget, et laissez tourner sept jours avant tout jugement.",
          "Comparez le coût par formulaire, pas les vues ni les mentions J'aime.",
          "Coupez la vidéo la plus chère, gardez les deux autres, tournez-en une nouvelle sur le même thème que la meilleure.",
          "Remplacez chaque vidéo au bout de trois à quatre semaines, avant que le coût par demande ne remonte.",
        ],
      },
    ],
    conclusion:
      "Ces douze scripts couvrent les trois raisons pour lesquelles une personne laisse ses coordonnées : elle a un projet, elle a vu votre travail, elle a levé un doute. Tournez-en trois, lancez-les, et si vous voulez que nous montions le compte, le pixel et le formulaire avec vous, réservez trente minutes.",
    pole: "publicite",
    page: "/services/sea/meta-ads",
  },

  {
    slug: "publicite-tiktok-ads-8-scripts-tpe-crochet-3-secondes",
    titre: "8 scripts TikTok Ads pour TPE, avec le crochet des trois premières secondes",
    accroche:
      "Huit vidéos verticales écrites pour le fil, chacune avec son accroche des trois premières secondes, à filmer au téléphone dans votre restaurant, votre salon ou votre boutique.",
    format: "modele",
    apercu: [
      "Les 6 règles du crochet : ce qui arrête le pouce, ce qui le fait glisser",
      "8 scripts complets, seconde par seconde, pour un commerce, un restaurant, un salon ou une boutique en ligne",
      "Comment tourner, sous-titrer et monter sans matériel",
      "La vérification avant de publier et de sponsoriser : pixel, bouton, page mobile",
    ],
    sections: [
      {
        titre: "Le crochet des trois premières secondes : six règles",
        points: [
          "Commencez par le produit ou le lieu, plein cadre, en mouvement : jamais par un logo, un titre ou un « Bonjour à tous ».",
          "Dites ou écrivez à l'écran une phrase que votre client pourrait dire lui-même : « Je cherche un resto pour samedi soir », « Mes cheveux ne tiennent jamais ».",
          "Une seule question ou une seule affirmation dans les trois premières secondes ; le reste attendra.",
          "Le texte à l'écran tient en six mots maximum, en haut ou au centre, jamais dans la zone des boutons.",
          "Le son démarre tout de suite : une voix, un bruit d'atelier, une poêle qui chauffe. Le silence fait glisser.",
          "Testez chaque crochet séparément : même vidéo, trois premières secondes différentes, et le coût par demande départage.",
        ],
      },
      {
        titre: "Quatre scripts pour un lieu : restaurant, salon, boutique",
        intro: "Chaque script se lit en quatre temps : 0 à 3 s, 3 à 15 s, 15 à 25 s, puis le bouton de fin.",
        points: [
          "Script 1, « La sortie de cuisine » : 0 à 3 s, le plat qui arrive plein cadre, fumant, texte « Samedi soir, c'est ça » ; 3 à 15 s, trois plats de la carte, dressés, deux secondes chacun ; 15 à 25 s, adresse et quartier à l'écran ; fin : bouton « Réserver une table ».",
          "Script 2, « Avant / après en 20 secondes » : 0 à 3 s, la cliente de dos, cheveux avant, texte « Elle voulait changer » ; 3 à 15 s, quatre gestes du soin ou de la coupe ; 15 à 25 s, le résultat de face, avec son accord ; fin : bouton « Prendre rendez-vous ».",
          "Script 3, « Le déballage » : 0 à 3 s, des mains qui ouvrent un colis ou un sachet, texte « Nouvelle arrivée » ; 3 à 15 s, le produit sous trois angles, en main, à l'échelle ; 15 à 25 s, le prix et la disponibilité à l'écran ; fin : bouton « Commander ».",
          "Script 4, « Une heure chez nous » : 0 à 3 s, la porte qui s'ouvre, texte « Vous n'êtes jamais venu ? » ; 3 à 15 s, quatre plans : l'accueil, le geste, le produit, le sourire d'un client ; 15 à 25 s, horaires et adresse ; fin : bouton « Itinéraire ».",
        ],
      },
      {
        titre: "Quatre scripts pour vendre en ligne ou faire réserver",
        points: [
          "Script 5, « Le problème dit tout haut » : 0 à 3 s, face caméra : « Vous aussi, votre [objet] casse au bout de trois mois ? » ; 3 à 15 s, votre produit qui résiste au test que vous filmez ; 15 à 25 s, le prix et ce qui est compris ; fin : bouton « Commander ».",
          "Script 6, « Le test en direct » : 0 à 3 s, gros plan sur l'action : verser, appliquer, plier ; 3 à 15 s, le résultat, sans commentaire, avec le bruit réel ; 15 à 25 s, texte « Livré en [délai réel] » ; fin : bouton « Voir le produit ».",
          "Script 7, « Les trois erreurs » : 0 à 3 s, texte « Trois erreurs avec [votre catégorie] » ; 3 à 15 s, chaque erreur en un plan de quatre secondes, avec la correction ; 15 à 25 s, votre offre comme réponse à la troisième erreur ; fin : bouton « Découvrir ».",
          "Script 8, « Le client fait la vidéo » : 0 à 3 s, un client filme lui-même le produit reçu, avec son accord écrit ; 3 à 15 s, il l'utilise ; 15 à 25 s, vous reprenez avec le prix ; fin : bouton « Commander ». À diffuser en Spark Ad depuis son compte ou le vôtre.",
        ],
      },
      {
        titre: "Tourner au téléphone, sans matériel",
        points: [
          "Vertical, 9:16, en 1080p, stabilisation activée ; objectif essuyé avant chaque prise.",
          "Plans de deux à quatre secondes maximum : filmez dix plans courts plutôt qu'un long.",
          "Lumière de face, naturelle si possible ; en cuisine ou en atelier, ajoutez une lampe à côté du téléphone.",
          "Gardez les bruits réels (poêle, machine, ciseaux) : ils tiennent l'attention mieux qu'une musique de banque.",
          "Trois prises de chaque plan, puis choisissez la plus nette au montage.",
        ],
      },
      {
        titre: "Sous-titres, texte à l'écran et montage",
        points: [
          "Sous-titres automatiques relus mot à mot : une faute décrédibilise un commerce.",
          "Texte à l'écran dans le tiers supérieur ou au centre, jamais dans les 20 % du bas ni sur la colonne des boutons à droite.",
          "Coupe sèche entre les plans, sans transition ; la vidéo doit se comprendre sans le son.",
          "Durée totale entre 15 et 25 secondes ; si vous hésitez à couper, coupez.",
        ],
      },
      {
        titre: "Avant de publier et de sponsoriser",
        points: [
          "Pixel TikTok installé et événement testé (demande, ajout au panier, commande) : sans lui, aucune optimisation possible.",
          "Bouton adapté à l'action réelle : « Réserver », « Commander », « Itinéraire » ; jamais un bouton vague.",
          "Page d'arrivée testée sur téléphone, en 4G : ce qui met plus de trois secondes à s'afficher perd la personne.",
          "Trois vidéos lancées en parallèle, sept jours, puis la plus chère coupée et remplacée par une nouvelle accroche.",
        ],
      },
    ],
    conclusion:
      "Sur TikTok, une vidéo s'use en deux à trois semaines : ces huit scripts sont un premier cycle, pas une réserve pour l'année. Si vous voulez que nous installions le pixel, montions les vidéos et pilotions le budget avec vous, réservez trente minutes.",
    pole: "publicite",
    page: "/services/sea/tiktok-ads",
  },

  {
    slug: "publicite-pinterest-calendrier-12-mois-decoration-mariage-mode",
    titre: "Calendrier Pinterest sur 12 mois pour la décoration, le mariage et la mode",
    accroche:
      "Mois par mois, les thèmes que vos clients recherchent sur Pinterest bien avant d'acheter, pour préparer vos épingles et vos campagnes au bon moment, dans trois secteurs.",
    format: "plan",
    apercu: [
      "Les 12 mois, avec pour chacun les thèmes à épingler en décoration, en mariage et en mode",
      "La règle des six à huit semaines d'avance propre à Pinterest",
      "Ce qu'il faut préparer avant de commencer : compte, tag, catalogue, tableaux",
      "La routine mensuelle et trimestrielle pour mesurer et renouveler sans y passer ses soirées",
    ],
    sections: [
      {
        titre: "Avant de commencer : le socle",
        points: [
          "Passez le compte en compte professionnel à votre nom, revendiquez votre site et posez le tag Pinterest avec les événements achat et ajout au panier.",
          "Reliez votre catalogue (Shopify, WooCommerce, PrestaShop ou un fichier) : chaque fiche produit devient une épingle avec prix et disponibilité.",
          "Créez cinq à huit tableaux nommés comme vos clients cherchent (« Salle de bain bois et blanc », « Mariage champêtre », « Tenues de bureau printemps »), pas comme vos catégories internes.",
          "Préparez un gabarit d'épingle vertical (2:3, 1000 × 1500 px) avec votre logo discret et une zone de titre lisible sur téléphone.",
          "Adoptez la règle d'avance : Pinterest sert à préparer un achat, publiez chaque thème six à huit semaines avant le moment où l'on achète.",
        ],
      },
      {
        titre: "Janvier à mars : rangement, projets et premières lumières",
        points: [
          "Janvier. Décoration : rangement, bureau à la maison, chambre d'enfant, tons clairs. Mariage : les fiançailles de Noël lancent la recherche de lieu, de date et de style. Mode : tenues de bureau, manteaux en promotion, capsule d'hiver.",
          "Février. Décoration : salle de bain et chambre, Saint-Valentin en petites touches, plantes d'intérieur. Mariage : robes, alliances, faire-part, les couples de l'été suivant choisissent maintenant. Mode : Saint-Valentin, premières pièces de mi-saison.",
          "Mars. Décoration : printemps, jardin et balcon, cuisine, ménage de printemps. Mariage : fleurs, décoration de table, tenue des invités. Mode : trench, baskets, couleurs claires, préparation des mariages d'été.",
        ],
      },
      {
        titre: "Avril à juin : extérieur, mariages et lumière",
        points: [
          "Avril. Décoration : terrasse, jardin, mobilier d'extérieur, Pâques. Mariage : coiffure et maquillage, cadeaux d'invités, enterrement de vie de jeune fille. Mode : robes de printemps, tenues de cérémonie, lunettes de soleil.",
          "Mai. Décoration : fête des mères, salon lumineux, rénovation d'été. Mariage : derniers détails des mariages de juin, épingles « le jour J ». Mode : tenues d'invitée de mariage, jupes longues, sandales.",
          "Juin. Décoration : fête des pères, cuisine d'été, chambre d'amis pour les vacances. Mariage : la saison bat son plein, photos, playlists, discours. Mode : maillots, robes légères, valise de vacances.",
        ],
      },
      {
        titre: "Juillet à septembre : vacances, rentrée et premières idées d'automne",
        points: [
          "Juillet. Décoration : intérieur d'été, ventilation, extérieur bohème, préparation de la rentrée. Mariage : mariages d'automne en préparation, épingles de lieux. Mode : soldes d'été, tenues de vacances, chapeaux.",
          "Août. Décoration : rentrée, bureau, chambre d'étudiant, rangement d'entrée. Mariage : les couples fiancés pendant l'été font leurs premières recherches. Mode : tenues de rentrée, sacs, superpositions légères.",
          "Septembre. Décoration : automne, tons chauds, textiles, cheminée. Mariage : mariages d'hiver et premiers plans pour l'année suivante. Mode : manteaux, bottes, garde-robe d'automne. C'est aussi le mois où l'on prépare Noël sur Pinterest.",
        ],
      },
      {
        titre: "Octobre à décembre : Halloween, fêtes et cadeaux",
        points: [
          "Octobre. Décoration : Halloween, cocooning, éclairage, première décoration de Noël. Mariage : mariages d'hiver, demandes en mariage de fin d'année. Mode : Halloween, pulls, tenues de soirée d'automne.",
          "Novembre. Décoration : Noël, sapin, table, calendrier de l'Avent, cadeaux faits main. Mariage : idées de cadeaux pour les mariés et les témoins, mariages de Noël. Mode : Black Friday, tenues de fêtes, idées de cadeaux mode.",
          "Décembre. Décoration : table de fêtes, Nouvel An, rangement après Noël, projets maison de l'année. Mariage : les demandes de fin d'année lancent le cycle de janvier. Mode : tenues de réveillon, soldes d'hiver à préparer, capsule de janvier.",
        ],
      },
      {
        titre: "Chaque mois, quel que soit le mois",
        points: [
          "Publiez cinq à dix épingles neuves par semaine sur les thèmes du mois plus deux, sans rien répéter d'une semaine à l'autre.",
          "Écrivez un titre et une description avec les mots recherchés (« salle de bain bois et blanc »), pas des noms de collection.",
          "Reliez chaque épingle à la page exacte du produit ou à la page projet, jamais à l'accueil.",
          "Sponsorisez les trois épingles organiques les plus enregistrées du mois précédent plutôt que de créer des visuels à part.",
          "Vérifiez la disponibilité des produits épinglés : une épingle sponsorisée vers un produit en rupture coûte pour rien.",
        ],
      },
      {
        titre: "Chaque trimestre : mesurer et ajuster",
        points: [
          "Lisez dans le tag les commandes ou demandes attribuées après clic et après simple vue, séparément.",
          "Comparez le coût par commande des campagnes sponsorisées à votre marge par commande, et coupez ce qui dépasse.",
          "Archivez les tableaux et les épingles hors saison plutôt que de les supprimer : elles reprendront l'année suivante.",
          "Préparez les gabarits des deux mois suivants : sur Pinterest, ce qui se vend en décembre s'épingle en septembre et en octobre.",
        ],
      },
    ],
    conclusion:
      "Ce calendrier vaut pour la France métropolitaine et trois secteurs ; adaptez-le à vos saisons réelles (soldes, salons, collections). Si vous voulez que nous reliions le catalogue, posions le tag et pilotions les campagnes avec vous, réservez trente minutes.",
    pole: "publicite",
    page: "/services/sea/pinterest-ads",
  },

  {
    slug: "publicite-linkedin-ads-modele-ciblage-b2b-6-accroches",
    titre: "Modèle de ciblage LinkedIn Ads B2B et 6 messages d'accroche par secteur",
    accroche:
      "Le réglage d'audience à recopier dans Campaign Manager, critère par critère, et six premières phrases d'annonce prêtes à adapter selon le secteur que vous visez.",
    format: "modele",
    apercu: [
      "La fiche de votre client type à remplir avant d'ouvrir Campaign Manager",
      "Le ciblage critère par critère : zone, fonction, secteur, taille, et les exclusions",
      "6 messages d'accroche : cabinets, industrie, services, formation, logiciels, recrutement",
      "Le Lead Gen Form et les vérifications avant de lancer",
    ],
    sections: [
      {
        titre: "La fiche du client type",
        points: [
          "Écrivez le poste exact de la personne qui signe, et celui de la personne qui vous découvre en premier : ce sont souvent deux personnes, donc deux campagnes.",
          "Notez le secteur et la taille de vos dix derniers clients gagnés : votre audience est là, pas dans ce que vous aimeriez vendre.",
          "Chiffrez ce que rapporte un client moyen sur un an : c'est ce montant qui dit si un clic à plusieurs euros est acceptable.",
          "Listez trois problèmes que ce client vous a décrits avec ses mots lors du premier rendez-vous : ce sont vos accroches.",
          "Décidez de l'action attendue : un échange de trente minutes, un document à télécharger, une démonstration. Une seule par campagne.",
        ],
      },
      {
        titre: "Le ciblage dans Campaign Manager, critère par critère",
        points: [
          "Zone : la région ou les départements où vous pouvez réellement intervenir, en « emplacement permanent » plutôt que « récent ».",
          "Fonction et niveau hiérarchique : combinez la fonction (finance, ressources humaines, direction générale) avec le niveau (directeur, propriétaire, VP) plutôt que des intitulés de poste, trop variables d'une entreprise à l'autre.",
          "Secteur d'activité : trois à cinq secteurs proches, jamais « tous ». Un message écrit pour l'industrie ne parle pas à un cabinet.",
          "Taille d'entreprise : la tranche de vos clients réels (par exemple 11 à 200 salariés). Les tranches « 1 » et « 2 à 10 » cliquent souvent sans budget.",
          "Audience visée : quelques dizaines de milliers de membres pour une campagne de démarrage. En dessous, la diffusion s'essouffle ; bien au-dessus, le message se dilue.",
          "Décochez l'extension d'audience et le réseau d'audience LinkedIn au départ : ils élargissent la diffusion hors des critères que vous venez de régler.",
        ],
      },
      {
        titre: "Les exclusions qui économisent le budget",
        points: [
          "Excluez les fonctions et niveaux « étudiant », « stagiaire » et « débutant ».",
          "Excluez les secteurs qui vous consultent sans acheter : agences, cabinets de recrutement, indépendants concurrents.",
          "Excluez vos clients actuels et vos concurrents en important une liste d'entreprises (audience par comptes).",
          "Excluez les membres qui ont déjà rempli votre formulaire, dès la première demande reçue.",
          "Relisez les données démographiques de la campagne chaque semaine : tout poste qui clique sans demander rejoint les exclusions.",
        ],
      },
      {
        titre: "Six messages d'accroche par secteur",
        intro: "La première phrase de l'annonce, puis ce qui doit suivre. À réécrire avec les mots de vos propres clients.",
        points: [
          "Cabinets d'expertise comptable et d'avocats : « Vos clients vous demandent des conseils que vous n'avez pas le temps de facturer ? » Suivi d'un exemple tiré de votre propre pratique, jamais d'une statistique de marché.",
          "Industrie et fabrication : « Une machine à l'arrêt coûte plus cher qu'une visite préventive. » Puis ce que vous faites en une phrase, avec la zone couverte.",
          "Services aux entreprises (nettoyage, sécurité, informatique) : « Combien de prestataires avez-vous changés en trois ans ? » Puis votre engagement contractuel concret.",
          "Organismes de formation : « Votre plan de formation 2027 est-il déjà budgété ? » Puis le format (intra, distanciel), la durée et la prise en charge possible.",
          "Éditeurs de logiciels et SaaS : « Votre équipe ressaisit encore les mêmes données dans deux outils ? » Puis la démonstration proposée, en vingt minutes.",
          "Recrutement et ressources humaines : « Le poste est ouvert depuis plus de deux mois ? » Puis ce que vous proposez de différent des sites d'emploi, et un délai réaliste.",
        ],
      },
      {
        titre: "Le Lead Gen Form",
        points: [
          "Champs pré-remplis uniquement : prénom, nom, email professionnel, entreprise, poste. Chaque champ ajouté fait baisser le nombre de demandes.",
          "Une question personnalisée au maximum, à choix, qui qualifie : « Effectif de votre entreprise » ou « Échéance du projet ».",
          "Titre du formulaire qui répète l'accroche de l'annonce, texte de confidentialité relié à votre politique réelle.",
          "Page de remerciement qui dit ce qui se passe ensuite et quand : « Nous vous appelons sous 24 h ouvrées. »",
          "Demandes exportées automatiquement vers votre CRM ou votre boîte mail : LinkedIn ne les conserve que 90 jours.",
        ],
      },
      {
        titre: "Avant de lancer",
        points: [
          "Insight Tag posé sur le site et conversion « demande envoyée » définie, même si vous utilisez le Lead Gen Form.",
          "Deux annonces par audience, une image et un document ou un carrousel, pour que la plateforme compare.",
          "Budget quotidien réparti sur deux audiences au maximum, avec un ordre de grandeur de 1 000 € par mois au total.",
          "Un rendez-vous hebdomadaire de quinze minutes dans votre agenda pour lire le coût par demande et la qualité des contacts, et rien d'autre.",
        ],
      },
    ],
    conclusion:
      "Si, en remplissant la fiche du client type, le montant d'un client ne justifie pas un clic à plusieurs euros, LinkedIn n'est pas la bonne plateforme : Google Ads ou Meta Ads seront plus rentables. Dans le doute, trente minutes suffisent pour trancher avec le fondateur de l'agence.",
    pole: "publicite",
    page: "/services/sea/linkedin-ads",
  },
];
