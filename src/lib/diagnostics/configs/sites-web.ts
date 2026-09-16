import type { Diagnostic } from "../types";

/**
 * Diagnostics interactifs du pôle (sites-web) : un par page qui en propose un.
 * Voir types.ts pour la forme et les règles d'écriture.
 *
 * Quatre questionnaires de douze questions, trois par axe. Sur chaque question,
 * l'option au maximum décrit la situation saine (ou, pour le diagnostic
 * application web, la situation où une application se justifie) ; chaque
 * autre option porte un conseil que la personne peut appliquer seule.
 */

const POLE = "sites-web" as const;

/* ── Site vitrine : apporte-t-il des demandes ? ─────────────────────────── */

const SITE_VITRINE: Diagnostic = {
  slug: "sites-web-site-vitrine",
  type: "questionnaire",
  titre: "Votre site vitrine apporte-t-il des demandes ?",
  accroche:
    "Douze questions sur ce que votre site montre, prouve et permet de faire. Vous répondez selon votre situation réelle, le résultat s'affiche tout de suite.",
  obtenez: [
    "Un score sur 100 et le détail par axe : visibilité, confiance, conversion, contact",
    "Vos trois priorités, avec l'action concrète pour chacune",
    "Le rapport complet par email, avec la checklist des 25 points en bonus",
  ],
  axes: [
    { id: "visibilite", label: "Visibilité" },
    { id: "confiance", label: "Confiance" },
    { id: "conversion", label: "Conversion" },
    { id: "contact", label: "Contact" },
  ],
  questions: [
    {
      id: "google",
      texte: "Quand vous tapez votre métier et votre ville sur Google, où apparaît votre site ?",
      aide: "Faites le test en navigation privée, hors de votre fiche Google.",
      axe: "visibilite",
      options: [
        { id: "p1", label: "Sur la première page", points: 3 },
        {
          id: "p23",
          label: "En deuxième ou troisième page",
          points: 2,
          conseil: {
            titre: "Ciblez une page par prestation et par ville",
            texte:
              "Reprenez chaque page de prestation : mettez le métier et la ville dans le titre de la page (balise title), dans le H1 et dans le premier paragraphe. Une page qui parle d'une seule prestation dans une seule zone remonte plus facilement qu'une page d'accueil qui parle de tout.",
          },
        },
        {
          id: "loin",
          label: "Plus loin que la troisième page",
          points: 1,
          conseil: {
            titre: "Vérifiez que Google connaît bien votre site",
            texte:
              "Tapez site:votredomaine.fr dans Google et comptez les pages qui apparaissent. Créez un compte Google Search Console, ajoutez votre site et envoyez votre plan de site (sitemap). C'est gratuit et cela prend une heure.",
          },
        },
        {
          id: "jamais",
          label: "Je ne le trouve pas, ou je n'ai jamais vérifié",
          points: 0,
          conseil: {
            titre: "Faites le test dès maintenant",
            texte:
              "Ouvrez une fenêtre de navigation privée, tapez votre métier suivi de votre ville, puis notez sur quelle page et à quelle position votre site apparaît. Refaites la mesure chaque mois : c'est le premier chiffre à suivre pour un site vitrine.",
          },
        },
      ],
    },
    {
      id: "fiche",
      texte: "Votre fiche d'établissement Google est-elle complète et reliée à votre site ?",
      axe: "visibilite",
      options: [
        { id: "complete", label: "Oui, complète, avec le lien vers le site et des photos récentes", points: 2 },
        {
          id: "partielle",
          label: "La fiche existe, mais elle est incomplète ou peu à jour",
          points: 1,
          conseil: {
            titre: "Complétez votre fiche Google",
            texte:
              "Ouvrez votre fiche d'établissement et remplissez chaque champ : catégorie principale, horaires, zone desservie, lien vers le site, dix photos récentes de vos réalisations. Ajoutez ensuite vos prestations une par une avec une phrase de description.",
          },
        },
        {
          id: "aucune",
          label: "Je n'ai pas de fiche, ou je ne sais pas",
          points: 0,
          conseil: {
            titre: "Créez votre fiche d'établissement",
            texte:
              "Rendez-vous sur google.com/business, créez la fiche avec le nom exact de votre entreprise, votre adresse ou votre zone d'intervention et votre numéro. Une fois la fiche vérifiée, ajoutez le lien vers votre site : c'est souvent la première source d'appels d'un artisan ou d'un commerce.",
          },
        },
      ],
    },
    {
      id: "pages-prestations",
      texte: "Comment vos prestations sont-elles présentées sur le site ?",
      axe: "visibilite",
      options: [
        { id: "une-par", label: "Une page par prestation principale, avec ses propres textes", points: 2 },
        {
          id: "liste",
          label: "Une seule page « prestations » qui liste tout",
          points: 1,
          conseil: {
            titre: "Séparez vos prestations en pages",
            texte:
              "Créez une page par prestation qui vous rapporte le plus : un titre avec le nom de la prestation, trois paragraphes qui décrivent pour qui, comment et à quel tarif indicatif, deux photos et un bouton de contact. Google et vos visiteurs y trouvent une réponse précise.",
          },
        },
        {
          id: "accueil",
          label: "Elles ne sont décrites que sur la page d'accueil",
          points: 0,
          conseil: {
            titre: "Sortez vos prestations de la page d'accueil",
            texte:
              "Listez vos trois prestations les plus demandées et écrivez pour chacune une page dédiée d'au moins trois cents mots, avec le nom de la prestation dans l'adresse de la page. La page d'accueil renvoie ensuite vers chacune d'elles.",
          },
        },
      ],
    },
    {
      id: "avis",
      texte: "Vos avis clients sont-ils visibles sur le site ?",
      axe: "confiance",
      options: [
        { id: "recents", label: "Oui, des avis récents avec le prénom et la ville, reliés à ma fiche Google", points: 2 },
        {
          id: "anciens",
          label: "Quelques avis anciens ou sans nom",
          points: 1,
          conseil: {
            titre: "Rafraîchissez vos avis",
            texte:
              "Copiez vos trois avis Google les plus récents et les plus précis, avec le prénom, la ville et la date, et ajoutez un lien « Voir tous nos avis » vers votre fiche Google. Demandez un avis à chaque client satisfait dans la semaine qui suit la fin de la prestation.",
          },
        },
        {
          id: "aucun",
          label: "Aucun avis sur le site",
          points: 0,
          conseil: {
            titre: "Affichez trois avis sur la page d'accueil",
            texte:
              "Choisissez trois avis Google qui décrivent une situation concrète (le problème, le résultat, le délai) et placez-les sur la page d'accueil, juste sous vos prestations. Si vous n'avez pas encore d'avis, envoyez le lien de votre fiche Google à vos cinq derniers clients.",
          },
        },
      ],
    },
    {
      id: "visage",
      texte: "Le visiteur peut-il voir qui est derrière l'entreprise ?",
      axe: "confiance",
      options: [
        { id: "photo", label: "Oui : photo réelle de l'équipe ou du dirigeant, prénom, parcours, zone d'intervention", points: 2 },
        {
          id: "texte",
          label: "Un texte de présentation, mais sans photo réelle ni prénom",
          points: 1,
          conseil: {
            titre: "Montrez un visage",
            texte:
              "Ajoutez sur la page d'accueil et sur la page « à propos » une photo réelle de vous ou de votre équipe, prise sur un chantier ou dans vos locaux, avec votre prénom et une phrase sur votre parcours. Les photos de banque d'images n'ont pas cet effet.",
          },
        },
        {
          id: "rien",
          label: "Rien de personnel, ou des photos de banque d'images",
          points: 0,
          conseil: {
            titre: "Créez une page « qui sommes-nous »",
            texte:
              "Rédigez dix lignes : votre prénom, depuis quand vous exercez, ce que vous faites et ne faites pas, votre zone d'intervention. Ajoutez une photo réelle et vos assurances ou certifications. C'est l'une des pages les plus consultées avant un premier appel.",
          },
        },
      ],
    },
    {
      id: "realisations",
      texte: "Vos réalisations (chantiers, projets, résultats) sont-elles montrées ?",
      axe: "confiance",
      options: [
        { id: "legendees", label: "Oui, des photos récentes avec une légende (lieu, prestation, date)", points: 2 },
        {
          id: "sans-legende",
          label: "Quelques photos sans explication",
          points: 1,
          conseil: {
            titre: "Légendez vos réalisations",
            texte:
              "Sous chaque photo, écrivez une ligne : la prestation, la ville, le mois et l'année. Ajoutez une phrase sur le problème de départ. Un visiteur qui se reconnaît dans un projet similaire appelle plus facilement.",
          },
        },
        {
          id: "aucune",
          label: "Aucune réalisation visible",
          points: 0,
          conseil: {
            titre: "Publiez six réalisations",
            texte:
              "Reprenez les photos de vos six derniers projets prises avec votre téléphone, et créez une page « réalisations » avec pour chacune une photo avant et une photo après, le lieu et la prestation. Ajoutez-en une nouvelle par mois.",
          },
        },
      ],
    },
    {
      id: "accueil-mobile",
      texte: "Que voit un visiteur sur votre page d'accueil, sans faire défiler, sur téléphone ?",
      axe: "conversion",
      options: [
        { id: "complet", label: "Ce que je fais, pour qui, dans quelle zone, et un bouton d'action", points: 3 },
        {
          id: "sans-bouton",
          label: "Un titre clair, mais pas de bouton d'action visible",
          points: 2,
          conseil: {
            titre: "Ajoutez un bouton sous le titre",
            texte:
              "Placez, juste sous votre titre principal, un bouton avec une action précise : « Demander un devis », « Prendre rendez-vous » ou « Appeler ». Vérifiez sur votre propre téléphone qu'il est visible sans faire défiler.",
          },
        },
        {
          id: "slogan",
          label: "Un slogan ou un visuel, sans dire ce que je fais ni où",
          points: 1,
          conseil: {
            titre: "Remplacez le slogan par une phrase concrète",
            texte:
              "Réécrivez le titre de la page d'accueil avec trois informations : votre métier, votre zone et pour qui vous travaillez. Par exemple : « Plombier chauffagiste à Rueil-Malmaison, dépannage et installation pour les particuliers ». Le slogan peut rester en dessous.",
          },
        },
        {
          id: "inconnu",
          label: "Je ne sais pas, je ne l'ai pas regardé sur téléphone",
          points: 0,
          conseil: {
            titre: "Regardez votre site sur votre téléphone",
            texte:
              "Ouvrez votre site sur votre téléphone, sans faire défiler, et notez ce que vous voyez : le métier, la zone, un bouton ? Demandez à un proche qui ne connaît pas votre activité de dire en cinq secondes ce que vous faites. Ce test guide toutes les corrections suivantes.",
          },
        },
      ],
    },
    {
      id: "fin-de-page",
      texte: "Chaque page de prestation se termine-t-elle par une invitation à vous contacter ?",
      axe: "conversion",
      options: [
        { id: "partout", label: "Oui, avec un bouton et le numéro sur chaque page", points: 2 },
        {
          id: "contact-seul",
          label: "Seulement sur la page contact",
          points: 1,
          conseil: {
            titre: "Terminez chaque page par un appel à l'action",
            texte:
              "Ajoutez en bas de chaque page de prestation un bloc identique : une phrase (« Parlons de votre projet »), votre numéro cliquable et un bouton vers le formulaire. Le visiteur ne devrait jamais avoir à chercher comment vous joindre.",
          },
        },
        {
          id: "aucun",
          label: "Il n'y a pas de bouton ni de formulaire",
          points: 0,
          conseil: {
            titre: "Créez un formulaire court",
            texte:
              "Ajoutez un formulaire en trois champs (nom, téléphone ou email, message) sur la page contact et un bouton vers ce formulaire en bas de chaque page. Testez-le vous-même : le message doit vous arriver dans la minute.",
          },
        },
      ],
    },
    {
      id: "prix",
      texte: "Vos tarifs, ou au moins une fourchette de prix, sont-ils indiqués ?",
      axe: "conversion",
      options: [
        { id: "fourchettes", label: "Oui, des fourchettes ou des exemples de prix par prestation", points: 2 },
        {
          id: "devis-gratuit",
          label: "Une seule mention du type « devis gratuit »",
          points: 1,
          conseil: {
            titre: "Donnez un repère de prix",
            texte:
              "Ajoutez sur chaque page de prestation une fourchette réaliste (« à partir de », ou « entre tel et tel montant selon la surface ») et ce qui fait varier le prix. Un visiteur sans repère va chercher ailleurs avant de vous appeler.",
          },
        },
        {
          id: "aucun",
          label: "Aucune indication de prix",
          points: 0,
          conseil: {
            titre: "Publiez trois exemples de prestations chiffrées",
            texte:
              "Prenez trois projets réalisés, décrivez-les en deux lignes et indiquez le prix payé. Ces exemples rassurent sans vous engager : précisez que chaque devis dépend du projet.",
          },
        },
      ],
    },
    {
      id: "numero",
      texte: "Sur téléphone, votre numéro est-il cliquable et visible dès le haut de page ?",
      axe: "contact",
      options: [
        { id: "entete", label: "Oui, dans l'en-tête, et un appui lance l'appel", points: 2 },
        {
          id: "recopier",
          label: "Le numéro est écrit, mais il faut le recopier ou aller en bas de page",
          points: 1,
          conseil: {
            titre: "Rendez votre numéro cliquable dans l'en-tête mobile",
            texte:
              "Ajoutez votre numéro dans l'en-tête du site sous forme de lien téléphonique (le format tel: suivi du numéro), pour qu'un appui lance l'appel. Testez sur votre propre téléphone, puis sur celui d'un proche.",
          },
        },
        {
          id: "absent",
          label: "Le numéro n'apparaît que sur la page contact, ou pas du tout",
          points: 0,
          conseil: {
            titre: "Affichez votre numéro sur toutes les pages",
            texte:
              "Placez votre numéro dans l'en-tête et dans le pied de page de chaque page, en lien cliquable, avec vos horaires d'appel. Un visiteur sur téléphone appelle depuis la page où il se trouve, il ne va pas chercher la page contact.",
          },
        },
      ],
    },
    {
      id: "formulaire",
      texte: "Que se passe-t-il quand quelqu'un envoie votre formulaire ?",
      axe: "contact",
      options: [
        { id: "jour-meme", label: "Je reçois un email immédiat et je réponds le jour même", points: 3 },
        {
          id: "plusieurs-jours",
          label: "Je reçois un email, mais je réponds sous plusieurs jours",
          points: 2,
          conseil: {
            titre: "Répondez dans l'heure ouvrée qui suit",
            texte:
              "Activez une notification sur votre téléphone pour l'adresse qui reçoit les demandes, et préparez une réponse type de trois lignes qui confirme la réception et propose un créneau d'appel. Une réponse rapide, même courte, fait la différence pour un visiteur qui a contacté trois prestataires.",
          },
        },
        {
          id: "spams",
          label: "Les demandes arrivent parfois dans les spams, ou je ne suis pas sûr de tout recevoir",
          points: 1,
          conseil: {
            titre: "Testez votre formulaire une fois par mois",
            texte:
              "Envoyez-vous une demande depuis votre téléphone et vérifiez qu'elle arrive dans la boîte principale, avec le nom et le numéro de la personne. Si elle atterrit en spam, faites configurer l'envoi depuis une adresse de votre domaine (SPF et DKIM) par votre hébergeur.",
          },
        },
        {
          id: "aucun",
          label: "Je n'ai pas de formulaire",
          points: 0,
          conseil: {
            titre: "Ajoutez un formulaire de trois champs",
            texte:
              "Un formulaire nom, téléphone, message suffit. Il doit vous envoyer un email avec les réponses et afficher un message de confirmation au visiteur. Placez-le sur la page contact et en bas de chaque page de prestation.",
          },
        },
      ],
    },
    {
      id: "suivi",
      texte: "Suivez-vous le nombre de demandes que votre site vous apporte chaque mois ?",
      axe: "contact",
      options: [
        { id: "compte", label: "Oui, je compte les appels et les formulaires venus du site chaque mois", points: 2 },
        {
          id: "approximatif",
          label: "J'en ai une idée approximative",
          points: 1,
          conseil: {
            titre: "Comptez vos demandes du site",
            texte:
              "Tenez une ligne par demande dans un tableau : date, canal (appel, formulaire, fiche Google), prestation demandée, devis envoyé ou non. Au bout d'un mois, vous savez ce que le site vous apporte et quelle page travaille.",
          },
        },
        {
          id: "aucun",
          label: "Non, je ne sais pas d'où viennent mes demandes",
          points: 0,
          conseil: {
            titre: "Demandez « comment nous avez-vous trouvés ? »",
            texte:
              "Posez la question à chaque nouveau contact et notez la réponse. Ajoutez un champ « comment nous avez-vous connus » dans votre formulaire. En un mois, vous saurez si votre site est une source de demandes ou seulement une carte de visite.",
          },
        },
      ],
    },
  ],
  verdicts: [
    {
      min: 70,
      titre: "Votre site vitrine travaille pour vous",
      texte:
        "Les bases sont en place : on vous trouve, on vous fait confiance et on peut vous joindre. Les priorités ci-dessous portent sur les détails qui restent. Traitez-les une par une, puis mesurez vos demandes chaque mois pour voir ce qui bouge.",
    },
    {
      min: 40,
      titre: "Votre site présente, mais il retient peu",
      texte:
        "Votre site remplit son rôle de carte de visite, mais plusieurs maillons manquent entre la visite et la demande. Les priorités ci-dessous sont classées par points perdus : commencez par la première, elle ne demande souvent qu'une après-midi.",
    },
    {
      min: 0,
      titre: "Votre site laisse partir la plupart de ses visiteurs",
      texte:
        "Plusieurs éléments essentiels manquent : visibilité, preuves, moyen de contact ou suivi. Ce n'est pas une question de design mais de structure. Les priorités ci-dessous vous donnent un ordre de travail réaliste : commencez par les trois premières avant de penser à une refonte.",
    },
  ],
  ressource: "site-vitrine-checklist-25-points",
  pole: POLE,
  page: "/services/sites-web/site-vitrine",
};

/* ── E-commerce : la boutique est-elle prête à vendre ? ─────────────────── */

const SITE_ECOMMERCE: Diagnostic = {
  slug: "sites-web-site-ecommerce",
  type: "questionnaire",
  titre: "Votre boutique est-elle prête à vendre ?",
  accroche:
    "Douze questions sur vos fiches, vos preuves, votre tunnel de paiement et vos sources de visiteurs. Répondez selon la situation réelle de votre boutique, le résultat s'affiche tout de suite.",
  obtenez: [
    "Un score sur 100 et le détail par axe : catalogue, confiance, paiement et livraison, acquisition",
    "Vos trois priorités, avec le réglage ou l'action à faire",
    "Le rapport complet par email, avec la checklist des 30 vérifications en bonus",
  ],
  axes: [
    { id: "catalogue", label: "Catalogue" },
    { id: "confiance", label: "Confiance" },
    { id: "paiement", label: "Paiement et livraison" },
    { id: "acquisition", label: "Acquisition" },
  ],
  questions: [
    {
      id: "fiches",
      texte: "Comment sont vos fiches produits ?",
      axe: "catalogue",
      options: [
        { id: "completes", label: "Chaque produit a sa propre description, plusieurs photos et ses caractéristiques (dimensions, matière, composition)", points: 3 },
        {
          id: "courtes",
          label: "Une description courte et une seule photo par produit",
          points: 2,
          conseil: {
            titre: "Enrichissez vos dix meilleures ventes",
            texte:
              "Commencez par les dix produits qui se vendent le mieux : ajoutez trois photos (produit seul, en situation, détail), les dimensions ou la composition, et un paragraphe qui répond aux questions que l'on vous pose par email.",
          },
        },
        {
          id: "fournisseur",
          label: "La description du fournisseur, copiée telle quelle",
          points: 1,
          conseil: {
            titre: "Réécrivez les descriptions avec vos mots",
            texte:
              "Une description copiée existe sur des dizaines de boutiques : Google en garde une et ignore les autres. Réécrivez celles de vos produits phares en répondant à trois questions : à qui il convient, comment il s'utilise, ce qui le distingue du modèle voisin.",
          },
        },
        {
          id: "vides",
          label: "Beaucoup de produits n'ont ni photo ni description",
          points: 0,
          conseil: {
            titre: "Retirez ou complétez les fiches vides",
            texte:
              "Une fiche sans photo fait douter de toute la boutique. Masquez les produits incomplets, puis complétez-les par lots de dix en commençant par ceux qui ont du stock et une marge correcte.",
          },
        },
      ],
    },
    {
      id: "recherche",
      texte: "Un visiteur qui cherche un produit précis peut-il le trouver en moins d'une minute ?",
      axe: "catalogue",
      options: [
        { id: "filtres", label: "Oui : recherche interne, catégories claires et filtres (taille, prix, couleur)", points: 2 },
        {
          id: "categories",
          label: "Il y a des catégories, mais pas de recherche ni de filtres",
          points: 1,
          conseil: {
            titre: "Ajoutez la recherche et deux filtres",
            texte:
              "Activez la barre de recherche de votre plateforme (Shopify, WooCommerce et PrestaShop l'ont toutes) et ajoutez les deux filtres que vos clients utilisent le plus : le prix et l'attribut principal (taille, couleur, marque).",
          },
        },
        {
          id: "fourre-tout",
          label: "Tout est dans une ou deux catégories fourre-tout",
          points: 0,
          conseil: {
            titre: "Refaites vos catégories comme un rayon de magasin",
            texte:
              "Listez vos produits sur une feuille et regroupez-les par usage, comme le ferait un client : au maximum sept catégories au premier niveau, trois niveaux de profondeur. Chaque produit doit se trouver en deux clics depuis l'accueil.",
          },
        },
      ],
    },
    {
      id: "stock",
      texte: "Le stock affiché correspond-il à ce que vous pouvez livrer ?",
      axe: "catalogue",
      options: [
        { id: "synchro", label: "Oui, le stock est mis à jour automatiquement ou chaque jour", points: 2 },
        {
          id: "ruptures",
          label: "Je mets à jour de temps en temps, il y a parfois des ruptures après commande",
          points: 1,
          conseil: {
            titre: "Bloquez la vente à stock zéro",
            texte:
              "Activez l'option qui empêche la commande d'un produit à stock zéro, et faites une mise à jour de stock à heure fixe chaque matin. Une commande annulée pour rupture coûte un client et un remboursement.",
          },
        },
        {
          id: "non-gere",
          label: "Le stock n'est pas géré sur le site",
          points: 0,
          conseil: {
            titre: "Saisissez le stock de vos produits actifs",
            texte:
              "Entrez la quantité réelle pour chaque produit visible, et activez les messages « plus que quelques exemplaires » et « rupture » de votre plateforme. Si vous vendez aussi en boutique physique, décomptez chaque vente comptoir le soir même.",
          },
        },
      ],
    },
    {
      id: "avis-produits",
      texte: "Les avis clients sont-ils visibles sur les fiches produits ?",
      axe: "confiance",
      options: [
        { id: "sur-fiches", label: "Oui, des avis collectés après chaque commande, affichés sur les fiches", points: 2 },
        {
          id: "accueil",
          label: "Quelques avis sur la page d'accueil seulement",
          points: 1,
          conseil: {
            titre: "Descendez les avis sur les fiches produits",
            texte:
              "Installez un module d'avis produits (le plus souvent gratuit sur votre plateforme) et affichez la note et les commentaires sous le prix. Un avis sur le produit lui-même rassure plus qu'un avis général sur la boutique.",
          },
        },
        {
          id: "aucun",
          label: "Aucun avis",
          points: 0,
          conseil: {
            titre: "Demandez un avis dix jours après la livraison",
            texte:
              "Programmez un email automatique dix jours après la livraison, avec un lien direct vers le formulaire d'avis du produit acheté. Deux lignes suffisent. Commencez par vos vingt derniers clients.",
          },
        },
      ],
    },
    {
      id: "conditions",
      texte: "Vos conditions de livraison, de retour et vos mentions légales sont-elles faciles à trouver ?",
      axe: "confiance",
      options: [
        { id: "claires", label: "Oui : délais et frais dès la fiche produit, politique de retour claire, mentions légales et CGV complètes", points: 2 },
        {
          id: "cachees",
          label: "Les pages existent, mais il faut les chercher ou elles sont incomplètes",
          points: 1,
          conseil: {
            titre: "Affichez les conditions sur la fiche produit",
            texte:
              "Ajoutez sous le bouton d'achat trois lignes fixes : délai de livraison, frais (ou seuil de gratuité), conditions de retour. Reliez le pied de page à vos CGV, à vos mentions légales et à votre politique de confidentialité.",
          },
        },
        {
          id: "manquantes",
          label: "Il manque des pages légales ou une politique de retour",
          points: 0,
          conseil: {
            titre: "Rédigez les pages obligatoires",
            texte:
              "Une boutique doit afficher ses mentions légales, ses CGV, sa politique de confidentialité et le droit de rétractation de quatorze jours. Rédigez-les à partir des modèles de votre plateforme, en indiquant votre raison sociale, votre SIREN et une adresse de contact.",
          },
        },
      ],
    },
    {
      id: "vendeur",
      texte: "Que voit un visiteur pour savoir qui vend ?",
      axe: "confiance",
      options: [
        { id: "a-propos", label: "Une page « à propos » avec l'histoire, une photo réelle, l'adresse et un moyen de contact direct", points: 2 },
        {
          id: "email-seul",
          label: "Une adresse email et un formulaire, mais rien sur qui vous êtes",
          points: 1,
          conseil: {
            titre: "Racontez qui vend en dix lignes",
            texte:
              "Créez une page « à propos » : qui vous êtes, depuis quand, d'où viennent vos produits, une photo de vous ou de votre atelier. Ajoutez un numéro de téléphone et vos horaires de réponse : un visiteur qui hésite veut savoir qu'il y a quelqu'un derrière.",
          },
        },
        {
          id: "rien",
          label: "Aucune information sur le vendeur",
          points: 0,
          conseil: {
            titre: "Ajoutez le nom, l'adresse et un numéro",
            texte:
              "Placez dans le pied de page le nom de votre entreprise, votre ville et un numéro de téléphone, puis créez une page de présentation avec une photo réelle. Sans ces repères, beaucoup de visiteurs n'osent pas payer sur un site qu'ils ne connaissent pas.",
          },
        },
      ],
    },
    {
      id: "etapes",
      texte: "Combien d'étapes entre le panier et la confirmation de commande ?",
      axe: "paiement",
      options: [
        { id: "une-deux", label: "Une ou deux, avec commande possible sans créer de compte", points: 3 },
        {
          id: "trois-quatre",
          label: "Trois ou quatre étapes, compte facultatif",
          points: 2,
          conseil: {
            titre: "Regroupez les étapes du paiement",
            texte:
              "Passez sur le tunnel en une page de votre plateforme si elle le propose : adresse, livraison et paiement sur le même écran. Chaque étape supplémentaire est une occasion d'abandonner.",
          },
        },
        {
          id: "compte",
          label: "Il faut créer un compte pour commander",
          points: 1,
          conseil: {
            titre: "Autorisez la commande en invité",
            texte:
              "Activez la commande sans compte dans les réglages de votre plateforme. Proposez la création de compte après la confirmation, pas avant. L'obligation de compte est l'une des causes d'abandon les plus fréquentes au moment de payer.",
          },
        },
        {
          id: "inconnu",
          label: "Je ne sais pas, je n'ai jamais passé commande sur ma propre boutique",
          points: 0,
          conseil: {
            titre: "Passez une commande test",
            texte:
              "Commandez un produit depuis votre téléphone, comme un client, jusqu'au paiement (puis remboursez-vous). Comptez les écrans, notez ce qui vous a fait hésiter. Ce test de dix minutes révèle plus que n'importe quel audit.",
          },
        },
      ],
    },
    {
      id: "moyens",
      texte: "Quels moyens de paiement proposez-vous ?",
      axe: "paiement",
      options: [
        { id: "plusieurs", label: "Carte bancaire, PayPal ou Apple Pay et Google Pay, et un paiement en plusieurs fois si le panier moyen le justifie", points: 2 },
        {
          id: "carte",
          label: "Carte bancaire uniquement",
          points: 1,
          conseil: {
            titre: "Ajoutez un second moyen de paiement",
            texte:
              "Activez PayPal, ou Apple Pay et Google Pay, dans votre passerelle de paiement (Stripe, PayPlug, Mollie). Sur téléphone, un paiement en un appui évite de ressaisir une carte.",
          },
        },
        {
          id: "virement",
          label: "Virement ou chèque, ou paiement pas encore en place",
          points: 0,
          conseil: {
            titre: "Mettez en place le paiement par carte",
            texte:
              "Ouvrez un compte Stripe ou PayPlug et connectez-le à votre boutique : l'inscription se fait en ligne avec votre SIREN et un RIB. Le paiement par carte immédiat est la condition minimale pour vendre en ligne.",
          },
        },
      ],
    },
    {
      id: "frais",
      texte: "Les frais et délais de livraison sont-ils annoncés avant l'étape de paiement ?",
      axe: "paiement",
      options: [
        { id: "des-la-fiche", label: "Oui, dès la fiche produit et dans le panier", points: 2 },
        {
          id: "au-paiement",
          label: "Seulement au moment de payer",
          points: 1,
          conseil: {
            titre: "Annoncez les frais dès le panier",
            texte:
              "Affichez les frais de port (ou le seuil de gratuité) et le délai sur la fiche produit et dans le panier. Un frais découvert au dernier écran fait abandonner beaucoup de paniers.",
          },
        },
        {
          id: "flous",
          label: "Les frais ne sont pas clairement indiqués",
          points: 0,
          conseil: {
            titre: "Fixez une grille de frais simple",
            texte:
              "Choisissez une règle lisible : un tarif unique, ou la gratuité au-dessus d'un montant. Écrivez-la dans le bandeau du site, sur la fiche produit et dans le panier, avec le délai moyen d'expédition.",
          },
        },
      ],
    },
    {
      id: "sources",
      texte: "D'où viennent vos visiteurs aujourd'hui ?",
      axe: "acquisition",
      options: [
        { id: "mesure", label: "Je le sais : Google, réseaux, publicité et emails, avec la part de chacun", points: 2 },
        {
          id: "approximatif",
          label: "Surtout mes réseaux et le bouche-à-oreille, sans mesure précise",
          points: 1,
          conseil: {
            titre: "Installez la mesure des sources",
            texte:
              "Créez une propriété Google Analytics 4 (gratuite), reliez-la à votre boutique et activez le suivi des achats. En un mois, vous saurez quelle source apporte des ventes et pas seulement des visites.",
          },
        },
        {
          id: "aucune",
          label: "Je n'ai pas d'outil de mesure",
          points: 0,
          conseil: {
            titre: "Commencez par compter",
            texte:
              "Installez Google Analytics 4 et Google Search Console : les deux sont gratuits et se posent en une heure sur toutes les plateformes. Sans ces chiffres, vous ne pouvez pas savoir si un problème vient du trafic ou de la boutique.",
          },
        },
      ],
    },
    {
      id: "google-produits",
      texte: "Vos fiches produits sont-elles trouvables sur Google ?",
      axe: "acquisition",
      options: [
        { id: "merchant", label: "Oui, des produits apparaissent dans Google (résultats classiques ou Shopping) et j'ai un flux Google Merchant", points: 2 },
        {
          id: "indexe",
          label: "Le site est indexé, mais les produits ne ressortent pas",
          points: 1,
          conseil: {
            titre: "Travaillez les titres et connectez Google Merchant",
            texte:
              "Réécrivez les titres de vos fiches avec le nom du produit, la marque et l'attribut cherché (« Sac cabas cuir noir 40 cm »). Créez ensuite un compte Google Merchant Center et envoyez votre flux : les fiches gratuites Shopping sont accessibles sans publicité.",
          },
        },
        {
          id: "inconnu",
          label: "Je ne sais pas",
          points: 0,
          conseil: {
            titre: "Vérifiez l'indexation de vos produits",
            texte:
              "Tapez site:votreboutique.fr dans Google et comptez les pages produits qui apparaissent. Ouvrez Google Search Console pour voir les pages exclues et pourquoi. Les fiches sans description ou en double sont souvent ignorées.",
          },
        },
      ],
    },
    {
      id: "relance",
      texte: "Que faites-vous des paniers abandonnés et des clients passés ?",
      axe: "acquisition",
      options: [
        { id: "les-deux", label: "Email de panier abandonné automatique et une newsletter régulière aux anciens clients", points: 2 },
        {
          id: "un-seul",
          label: "L'un des deux seulement",
          points: 1,
          conseil: {
            titre: "Complétez la relance",
            texte:
              "Si vous relancez les paniers, ajoutez un email mensuel aux clients passés (nouveautés, réassort, conseil d'usage). Si vous envoyez déjà une newsletter, activez l'email de panier abandonné de votre plateforme, envoyé une heure après l'abandon.",
          },
        },
        {
          id: "aucune",
          label: "Aucune relance",
          points: 0,
          conseil: {
            titre: "Activez l'email de panier abandonné",
            texte:
              "Votre plateforme, ou un outil comme Klaviyo ou Brevo, permet d'envoyer automatiquement un rappel une heure après un panier laissé avec une adresse email. Écrivez-le comme un message personnel de trois lignes, sans réduction au premier envoi.",
          },
        },
      ],
    },
  ],
  verdicts: [
    {
      min: 70,
      titre: "Votre boutique est prête à vendre",
      texte:
        "Catalogue, confiance, paiement et acquisition tiennent la route. Ce qui reste relève du réglage fin : traitez les priorités ci-dessous, puis suivez chaque mois votre taux de conversion (commandes divisées par visites) pour voir l'effet de chaque changement.",
    },
    {
      min: 40,
      titre: "Votre boutique vend, mais elle perd des acheteurs en route",
      texte:
        "Les fondations existent, mais plusieurs freins restent entre la fiche produit et le paiement, ou entre Google et votre boutique. Les priorités ci-dessous sont classées par points perdus ; les premières se règlent souvent dans les paramètres de votre plateforme.",
    },
    {
      min: 0,
      titre: "Votre boutique n'est pas encore prête à vendre",
      texte:
        "Plusieurs conditions de base manquent : fiches complètes, pages légales, paiement simple ou mesure des sources. Ce n'est pas une question de trafic : envoyer des visiteurs maintenant coûterait de l'argent pour peu de commandes. Commencez par les trois premières priorités ci-dessous.",
    },
  ],
  ressource: "site-ecommerce-checklist-30-verifications",
  pole: POLE,
  page: "/services/sites-web/site-ecommerce",
};

/* ── Refonte : faut-il refondre votre site ? ────────────────────────────── */

const REFONTE_SITE: Diagnostic = {
  slug: "sites-web-refonte-site",
  type: "questionnaire",
  titre: "Faut-il refondre votre site ?",
  accroche:
    "Douze questions sur l'état réel de votre site : vitesse, mobile, contenus et résultats mesurés. Le score vous dit si des corrections suffisent ou si une refonte se justifie.",
  obtenez: [
    "Un score sur 100 et le détail par axe : technique et vitesse, design et mobile, contenu, résultats",
    "Un avis clair : corriger, refondre en partie ou refondre entièrement",
    "Le rapport complet par email, avec la grille d'audit de 20 questions en bonus",
  ],
  axes: [
    { id: "technique", label: "Technique et vitesse" },
    { id: "design", label: "Design et mobile" },
    { id: "contenu", label: "Contenu" },
    { id: "resultats", label: "Résultats" },
  ],
  questions: [
    {
      id: "vitesse",
      texte: "Combien de temps met votre page d'accueil à s'afficher sur téléphone, en 4G ?",
      aide: "PageSpeed Insights (pagespeed.web.dev) donne la mesure gratuitement.",
      axe: "technique",
      options: [
        { id: "rapide", label: "Moins de trois secondes, mesuré avec PageSpeed Insights", points: 3 },
        {
          id: "moyen",
          label: "Entre trois et six secondes",
          points: 2,
          conseil: {
            titre: "Compressez vos images",
            texte:
              "Passez toutes les images du site au format WebP et limitez leur largeur à 1600 pixels (Squoosh, gratuit, le fait en ligne). Sur la plupart des sites, les images représentent l'essentiel du poids de la page.",
          },
        },
        {
          id: "lent",
          label: "Plus de six secondes, ou l'affichage saccade",
          points: 1,
          conseil: {
            titre: "Identifiez ce qui pèse",
            texte:
              "Lancez PageSpeed Insights sur votre page d'accueil et lisez la section « diagnostics » : images trop lourdes, scripts inutiles, hébergement lent. Traitez les trois premiers points, ou transmettez la liste à votre prestataire.",
          },
        },
        {
          id: "jamais",
          label: "Je n'ai jamais mesuré",
          points: 0,
          conseil: {
            titre: "Mesurez avant de décider",
            texte:
              "Ouvrez pagespeed.web.dev, entrez l'adresse de votre site, onglet mobile. Notez le score de performance et les délais LCP et INP. C'est la mesure de référence pour décider s'il faut corriger ou refaire.",
          },
        },
      ],
    },
    {
      id: "plateforme",
      texte: "Sur quoi repose votre site aujourd'hui, et qui peut le modifier ?",
      axe: "technique",
      options: [
        { id: "a-jour", label: "Une plateforme à jour (WordPress, Webflow, Shopify ou site sur mesure récent) que je peux modifier moi-même", points: 2 },
        {
          id: "figee",
          label: "Une plateforme que je ne mets plus à jour, ou dont seul l'ancien prestataire a les accès",
          points: 1,
          conseil: {
            titre: "Récupérez vos accès et faites les mises à jour",
            texte:
              "Demandez par écrit à votre prestataire les accès administrateur, hébergement et nom de domaine : ils vous appartiennent. Puis mettez à jour la plateforme, le thème et les extensions, après une sauvegarde complète.",
          },
        },
        {
          id: "inconnue",
          label: "Un outil abandonné, ou je ne sais pas comment il est fait",
          points: 0,
          conseil: {
            titre: "Faites l'inventaire technique",
            texte:
              "Utilisez un détecteur comme Wappalyzer ou BuiltWith pour connaître votre plateforme, puis vérifiez sa dernière mise à jour. Notez où est hébergé le site, chez qui est le nom de domaine et sa date d'expiration. Un site sur un outil fermé ne se répare pas, il se migre.",
          },
        },
      ],
    },
    {
      id: "https",
      texte: "Votre site est-il en HTTPS, sans page en erreur, avec des sauvegardes ?",
      axe: "technique",
      options: [
        { id: "sain", label: "Oui : cadenas sur toutes les pages, aucune page en erreur, sauvegarde automatique", points: 2 },
        {
          id: "erreurs",
          label: "HTTPS actif, mais des pages en erreur 404 ou pas de sauvegarde",
          points: 1,
          conseil: {
            titre: "Corrigez les liens morts et activez une sauvegarde",
            texte:
              "Dans Google Search Console, onglet « Pages », listez les adresses en 404 et posez une redirection vers la page la plus proche. Activez ensuite la sauvegarde automatique de votre hébergeur ou une extension dédiée, avec une copie hors de l'hébergement.",
          },
        },
        {
          id: "http",
          label: "Pas de cadenas, ou des avertissements de sécurité",
          points: 0,
          conseil: {
            titre: "Activez le certificat SSL",
            texte:
              "Demandez à votre hébergeur l'activation d'un certificat Let's Encrypt (gratuit chez la plupart) et forcez la redirection de http vers https. Un navigateur qui affiche « non sécurisé » fait fuir avant même la première page.",
          },
        },
      ],
    },
    {
      id: "mobile",
      texte: "Comment se lit votre site sur un téléphone ?",
      axe: "design",
      options: [
        { id: "lisible", label: "Les textes sont lisibles sans zoom, les boutons se touchent facilement, rien ne déborde", points: 3 },
        {
          id: "serre",
          label: "Ça fonctionne, mais certains blocs sont serrés ou les textes petits",
          points: 2,
          conseil: {
            titre: "Corrigez les trois écrans les plus vus sur mobile",
            texte:
              "Ouvrez la page d'accueil, votre page de prestation principale et la page contact sur votre téléphone. Augmentez la taille des textes à seize pixels minimum, espacez les boutons, et vérifiez qu'aucune image ne dépasse de l'écran.",
          },
        },
        {
          id: "zoom",
          label: "Il faut zoomer, ou des éléments dépassent",
          points: 1,
          conseil: {
            titre: "Vérifiez que le thème est adaptatif",
            texte:
              "Testez votre site en mode responsive des outils de développement de votre navigateur, sur 375 pixels de large. Si le thème ne s'adapte pas, changer de thème est souvent plus rapide que de le corriger.",
          },
        },
        {
          id: "jamais",
          label: "Je ne l'ai jamais regardé sur téléphone",
          points: 0,
          conseil: {
            titre: "Faites le test sur votre téléphone",
            texte:
              "Ouvrez chaque page importante sur votre téléphone et notez ce qui gêne : texte trop petit, menu qui ne s'ouvre pas, formulaire impossible à remplir. C'est depuis un téléphone que la plupart de vos visiteurs découvrent votre site.",
          },
        },
      ],
    },
    {
      id: "design-actuel",
      texte: "Le design de votre site correspond-il à votre activité d'aujourd'hui ?",
      axe: "design",
      options: [
        { id: "coherent", label: "Oui : logo, couleurs, photos et offres actuels, cohérents avec mes supports", points: 2 },
        {
          id: "date",
          label: "Le design est daté, mais l'information est juste",
          points: 1,
          conseil: {
            titre: "Rafraîchissez sans tout refaire",
            texte:
              "Trois changements visibles en une journée : remplacez les photos par des images récentes de votre activité, unifiez les couleurs sur deux teintes plus une teinte d'action, et réduisez chaque page à un seul bouton principal. Un thème récent de votre plateforme peut suffire.",
          },
        },
        {
          id: "perime",
          label: "Le site montre d'anciennes offres, un ancien logo ou d'anciennes coordonnées",
          points: 0,
          conseil: {
            titre: "Mettez d'abord les informations à jour",
            texte:
              "Avant tout projet de refonte, corrigez ce qui est faux : coordonnées, horaires, prestations, prix, logo. Un site daté mais exact fait moins de dégâts qu'un site qui renseigne mal.",
          },
        },
      ],
    },
    {
      id: "action",
      texte: "Sur chaque page, un visiteur comprend-il quoi faire ensuite ?",
      axe: "design",
      options: [
        { id: "bouton", label: "Oui : un bouton principal clair par page (appeler, demander un devis, réserver)", points: 2 },
        {
          id: "liens",
          label: "Il y a des liens, mais pas d'action mise en avant",
          points: 1,
          conseil: {
            titre: "Ajoutez un bouton d'action par page",
            texte:
              "Choisissez l'action que vous attendez (appel, devis, rendez-vous) et placez-la en bouton contrasté sous le titre de chaque page et en bas de page. Un seul bouton principal, les autres liens en texte.",
          },
        },
        {
          id: "rien",
          label: "Non, les pages se terminent sans rien proposer",
          points: 0,
          conseil: {
            titre: "Terminez chaque page par une invitation",
            texte:
              "Rédigez un bloc de fin de page réutilisable : une phrase, votre numéro cliquable, un bouton vers le formulaire. Copiez-le en bas de toutes les pages de prestation. Cette seule correction ne demande pas de refonte.",
          },
        },
      ],
    },
    {
      id: "textes",
      texte: "De quand datent les textes de votre site ?",
      axe: "contenu",
      options: [
        { id: "revus", label: "Ils sont revus au moins une fois par an et décrivent mes offres actuelles", points: 2 },
        {
          id: "creation",
          label: "Ils datent de la création du site, avec quelques ajouts",
          points: 1,
          conseil: {
            titre: "Réécrivez la page d'accueil et une page de prestation",
            texte:
              "Prenez vos deux pages les plus visitées et réécrivez-les avec vos mots d'aujourd'hui : pour qui, quel problème, quelle prestation, quel tarif indicatif, comment vous joindre. Le reste peut attendre.",
          },
        },
        {
          id: "jamais",
          label: "Ils n'ont jamais été relus depuis la mise en ligne",
          points: 0,
          conseil: {
            titre: "Relisez chaque page avec un stylo",
            texte:
              "Parcourez chaque page et notez ce qui est faux, flou ou obsolète. Supprimez les pages qui ne servent plus (avec une redirection), corrigez les autres. Cet inventaire est de toute façon la première étape d'une refonte.",
          },
        },
      ],
    },
    {
      id: "search-console",
      texte: "Vos pages sont-elles trouvées sur Google pour votre métier et votre ville ?",
      axe: "contenu",
      options: [
        { id: "suivi", label: "Oui, et je suis les positions et les clics dans Google Search Console", points: 2 },
        {
          id: "sans-suivi",
          label: "Quelques pages ressortent, sans suivi régulier",
          points: 1,
          conseil: {
            titre: "Ouvrez Search Console et regardez ce qui travaille",
            texte:
              "Dans Google Search Console, onglet « Performances », listez les pages qui reçoivent des clics et les requêtes associées. Ces pages sont votre capital : dans une refonte, elles doivent garder la même adresse ou être redirigées.",
          },
        },
        {
          id: "non",
          label: "Non, ou je ne sais pas",
          points: 0,
          conseil: {
            titre: "Vérifiez ce que Google connaît de vous",
            texte:
              "Tapez site:votredomaine.fr, puis votre métier et votre ville, dans Google. Créez un compte Search Console pour voir les pages indexées. Si rien ne ressort, une refonte devra prévoir une page par prestation avec le métier et la ville dans le titre.",
          },
        },
      ],
    },
    {
      id: "preuves",
      texte: "Vos preuves (avis, réalisations, chiffres réels) sont-elles à jour ?",
      axe: "contenu",
      options: [
        { id: "a-jour", label: "Oui : avis récents, réalisations de l'année, informations vérifiées", points: 2 },
        {
          id: "anciennes",
          label: "Il y a des preuves, mais anciennes",
          points: 1,
          conseil: {
            titre: "Ajoutez trois preuves récentes",
            texte:
              "Publiez trois avis Google de moins de six mois avec le prénom et la ville, et trois réalisations de l'année avec une photo et une légende. Retirez ce qui date de plus de trois ans.",
          },
        },
        {
          id: "aucune",
          label: "Aucune preuve visible",
          points: 0,
          conseil: {
            titre: "Rassemblez vos preuves avant de refondre",
            texte:
              "Listez vos avis Google, vos photos de réalisations, vos certifications et vos chiffres réels (années d'activité, projets réalisés). Cette matière est ce qui manque le plus aux sites refondus trop vite : rassemblez-la maintenant, elle servira quel que soit le choix.",
          },
        },
      ],
    },
    {
      id: "demandes",
      texte: "Combien de demandes (appels, formulaires) votre site vous a-t-il apportées ces trois derniers mois ?",
      axe: "resultats",
      options: [
        { id: "comptees", label: "Je les compte : plusieurs par mois, en lien avec mon activité", points: 3 },
        {
          id: "quelques",
          label: "Quelques-unes, sans les compter précisément",
          points: 2,
          conseil: {
            titre: "Comptez pendant un mois",
            texte:
              "Notez chaque demande dans un tableau : date, canal (appel, formulaire, fiche Google), prestation, devis envoyé ou non. Après un mois, vous saurez si le site produit ou s'il sert de carte de visite. Ce chiffre décide de l'ampleur de la refonte.",
          },
        },
        {
          id: "aucune",
          label: "Presque aucune",
          points: 1,
          conseil: {
            titre: "Cherchez d'abord la cause",
            texte:
              "Regardez dans Google Analytics ou Search Console si le site reçoit des visites. S'il n'en reçoit pas, le problème est la visibilité (contenu, référencement). S'il en reçoit sans demandes, c'est la page elle-même (message, preuve, bouton). Les deux ne se corrigent pas de la même façon.",
          },
        },
        {
          id: "inconnu",
          label: "Je ne sais pas",
          points: 0,
          conseil: {
            titre: "Mettez une mesure en place cette semaine",
            texte:
              "Installez Google Analytics 4 et Search Console, ajoutez un champ « comment nous avez-vous connus » à votre formulaire et posez la question au téléphone. Décider d'une refonte sans savoir ce que le site apporte revient à refaire les mêmes erreurs.",
          },
        },
      ],
    },
    {
      id: "mesure",
      texte: "Avez-vous une mesure des visites et de ce que font les visiteurs ?",
      axe: "resultats",
      options: [
        { id: "conversions", label: "Oui : Google Analytics ou équivalent, avec les demandes suivies comme conversions", points: 2 },
        {
          id: "pas-lu",
          label: "Un outil de mesure, mais je ne le regarde pas",
          points: 1,
          conseil: {
            titre: "Regardez trois chiffres par mois",
            texte:
              "Ouvrez votre outil une fois par mois et notez trois chiffres : visites, part venant du mobile, pages les plus vues. Configurez les envois de formulaire et les clics sur le numéro comme événements clés. Dix minutes par mois suffisent.",
          },
        },
        {
          id: "aucune",
          label: "Aucune mesure",
          points: 0,
          conseil: {
            titre: "Installez Google Analytics 4",
            texte:
              "Créez une propriété GA4 (gratuite), posez la balise via votre plateforme ou Google Tag Manager, et déclarez les envois de formulaire comme événement clé. Sans mesure, impossible de savoir si une refonte a servi à quelque chose.",
          },
        },
      ],
    },
    {
      id: "concurrents",
      texte: "Comment votre site se compare-t-il à ceux de vos concurrents directs ?",
      axe: "resultats",
      options: [
        { id: "au-niveau", label: "Il est au niveau ou au-dessus sur le mobile, les preuves et la clarté de l'offre", points: 2 },
        {
          id: "en-retrait",
          label: "Il est en retrait sur un ou deux points",
          points: 1,
          conseil: {
            titre: "Comparez sur cinq critères",
            texte:
              "Ouvrez les sites de trois concurrents sur votre téléphone et notez-les sur cinq points : clarté de l'offre en cinq secondes, preuve visible, prix ou repère, bouton d'action, rapidité. Corrigez d'abord le critère où l'écart est le plus grand.",
          },
        },
        {
          id: "depasse",
          label: "Il est nettement dépassé, ou je n'ai pas regardé",
          points: 0,
          conseil: {
            titre: "Faites le tour des concurrents",
            texte:
              "Listez les trois concurrents qui ressortent sur Google pour votre métier et votre ville, et parcourez leur site sur téléphone. Notez ce qu'ils montrent que vous ne montrez pas. Cette liste devient le cahier des charges de votre refonte, ou de vos corrections.",
          },
        },
      ],
    },
  ],
  verdicts: [
    {
      min: 70,
      titre: "Pas de refonte complète : des corrections ciblées suffisent",
      texte:
        "Votre site tient techniquement, se lit sur mobile et produit des résultats mesurés. Les priorités ci-dessous sont des ajustements que vous pouvez faire sur le site actuel. Gardez vos adresses de pages, elles ont de la valeur.",
    },
    {
      min: 40,
      titre: "Une refonte partielle est à envisager",
      texte:
        "Une partie du site fonctionne, une autre freine : souvent le mobile, la vitesse ou des contenus datés. Avant de tout refaire, listez les pages qui reçoivent du trafic et traitez les priorités ci-dessous. Si plusieurs relèvent de la technique ou du design, une refonte partielle qui conserve ces pages est la voie la plus économique.",
    },
    {
      min: 0,
      titre: "Une refonte est justifiée, à condition de la préparer",
      texte:
        "Le site cumule des freins techniques, de lisibilité et de contenu, et vous n'avez pas les mesures pour savoir ce qu'il apporte. Refondre a du sens, mais pas dans la précipitation : les priorités ci-dessous préparent le terrain (mesure, inventaire des pages, preuves à rassembler) pour que le nouveau site parte sur des bases saines.",
    },
  ],
  ressource: "site-refonte-grille-audit-20-questions",
  pole: POLE,
  page: "/services/sites-web/refonte-site",
};

/* ── Application web : en avez-vous besoin ? ────────────────────────────── */

/**
 * Ici le score mesure à quel point une application se justifie : l'option au
 * maximum décrit la situation où elle apporte le plus (temps perdu mesuré,
 * outils non reliés, volume, données dispersées). Les conseils des autres
 * options disent quoi faire à la place : mesurer, relier, régler l'existant.
 */
const APPLICATION_WEB: Diagnostic = {
  slug: "sites-web-application-web",
  type: "questionnaire",
  titre: "Avez-vous besoin d'une application web ?",
  accroche:
    "Douze questions sur votre organisation réelle : le temps passé à ressaisir, les outils que vous utilisez, votre volume et l'état de vos données. Le score vous dit si une application se justifie ou si des réglages suffisent.",
  obtenez: [
    "Un score sur 100 et le détail par axe : temps perdu, outils actuels, volume et équipe, données",
    "Un avis clair : application sur mesure, automatisation de l'existant ou simple site",
    "Le rapport complet par email, avec le modèle de cahier des charges en 12 rubriques en bonus",
  ],
  axes: [
    { id: "temps", label: "Temps perdu en tâches manuelles" },
    { id: "outils", label: "Outils actuels" },
    { id: "volume", label: "Volume et équipe" },
    { id: "donnees", label: "Données" },
  ],
  questions: [
    {
      id: "ressaisie",
      texte: "Combien de temps par semaine passez-vous, vous ou votre équipe, à ressaisir des informations d'un outil à l'autre ?",
      axe: "temps",
      options: [
        { id: "journee", label: "Plus d'une journée par semaine, et je l'ai mesuré", points: 3 },
        {
          id: "heures",
          label: "Entre deux heures et une journée",
          points: 2,
          conseil: {
            titre: "Reliez vos deux outils les plus utilisés",
            texte:
              "Avant une application, testez une liaison automatique entre les deux outils où vous ressaisissez le plus (formulaire vers tableur, devis vers facturation) avec Zapier ou Make. Une liaison simple se met en place en une heure et vous montre en une semaine ce qu'une automatisation change.",
          },
        },
        {
          id: "peu",
          label: "Moins de deux heures",
          points: 1,
          conseil: {
            titre: "Conservez vos outils et notez les irritants",
            texte:
              "À ce niveau, une application coûterait plus qu'elle ne rapporterait. Tenez pendant un mois une liste des tâches répétitives qui vous agacent, avec leur fréquence. Si la liste s'allonge, refaites ce diagnostic.",
          },
        },
        {
          id: "inconnu",
          label: "Je ne sais pas",
          points: 0,
          conseil: {
            titre: "Chronométrez une semaine type",
            texte:
              "Pendant cinq jours, notez chaque tâche de saisie ou de recopie avec sa durée (un carnet ou un tableur suffisent). Ce total hebdomadaire, multiplié par votre coût horaire, est le chiffre qui décide si une application se justifie.",
          },
        },
      ],
    },
    {
      id: "taches",
      texte: "Quelles tâches répétitives se font encore à la main ?",
      axe: "temps",
      options: [
        { id: "plusieurs", label: "Plusieurs, chaque jour : devis, relances, confirmations, planning, suivi de dossiers", points: 3 },
        {
          id: "une-deux",
          label: "Une ou deux tâches, chaque semaine",
          points: 2,
          conseil: {
            titre: "Automatisez la tâche la plus fréquente",
            texte:
              "Prenez la tâche qui revient le plus souvent et cherchez si votre outil actuel sait la faire seul : rappel automatique de rendez-vous, relance de facture, réponse type. La plupart des outils de facturation, de rendez-vous et de messagerie ont ces options.",
          },
        },
        {
          id: "rien",
          label: "Presque rien de répétitif",
          points: 1,
          conseil: {
            titre: "Vérifiez que rien ne vous échappe",
            texte:
              "Listez ce que vous faites après chaque nouveau client : confirmation, devis, planification, facture, demande d'avis. Si chaque étape est faite à la main mais reste rapide, un site avec un bon formulaire et des modèles d'email suffit.",
          },
        },
        {
          id: "inventaire",
          label: "Je n'ai pas fait l'inventaire",
          points: 0,
          conseil: {
            titre: "Faites l'inventaire de vos tâches récurrentes",
            texte:
              "Écrivez la liste de tout ce que vous faites plus d'une fois par semaine pour un client : qui le fait, avec quel outil, combien de temps. Cet inventaire est la première rubrique d'un cahier des charges, et il vous dira souvent qu'un simple réglage suffit.",
          },
        },
      ],
    },
    {
      id: "erreurs",
      texte: "Les erreurs de saisie (doublons, oublis, informations périmées) vous coûtent-elles du temps ou des clients ?",
      axe: "temps",
      options: [
        { id: "regulierement", label: "Oui, régulièrement : rendez-vous oubliés, devis erronés, relances manquées", points: 2 },
        {
          id: "parfois",
          label: "Parfois, sans conséquence grave",
          points: 1,
          conseil: {
            titre: "Mettez une vérification en place",
            texte:
              "Créez une checklist de fin de journée (rendez-vous confirmés, devis envoyés, factures émises) dans votre outil de tâches ou sur papier. Si les erreurs persistent malgré la checklist, c'est le signe qu'un outil devrait les empêcher à la source.",
          },
        },
        {
          id: "non",
          label: "Non, ou je ne les compte pas",
          points: 0,
          conseil: {
            titre: "Comptez les erreurs pendant un mois",
            texte:
              "Notez chaque erreur liée à une saisie manuelle : date, ce qui s'est passé, temps perdu pour la corriger. Sans ce compte, impossible de savoir si une application, qui vérifie les données à la saisie, vaut son coût.",
          },
        },
      ],
    },
    {
      id: "nombre-outils",
      texte: "Combien d'outils différents utilisez-vous pour suivre un client, de la demande à la facture ?",
      axe: "outils",
      options: [
        { id: "quatre-plus", label: "Quatre ou plus, non reliés entre eux : la même information est saisie plusieurs fois", points: 3 },
        {
          id: "deux-trois",
          label: "Deux ou trois, en partie reliés",
          points: 2,
          conseil: {
            titre: "Terminez de relier vos outils",
            texte:
              "Listez les informations qui passent encore à la main entre vos outils (nom, adresse, prestation, montant) et reliez-les avec Zapier ou Make, ou avec la connexion native de vos outils. Si une liaison est impossible, notez-le : c'est un argument pour une application.",
          },
        },
        {
          id: "un-seul",
          label: "Un seul outil, ou un tableur qui centralise tout",
          points: 1,
          conseil: {
            titre: "Exploitez mieux votre outil actuel",
            texte:
              "Un outil unique bien réglé va loin : activez ses automatisations (rappels, modèles, statuts), partagez-le avec votre équipe et sauvegardez-le. Une application n'apporte un gain que quand cet outil atteint ses limites.",
          },
        },
        {
          id: "variable",
          label: "Je ne sais pas, cela dépend des jours",
          points: 0,
          conseil: {
            titre: "Dessinez le parcours d'un client",
            texte:
              "Sur une feuille, tracez les étapes d'un client de la première demande à la facture, et sous chaque étape l'outil utilisé (email, téléphone, tableur, papier). Ce schéma d'une page révèle les doublons et les trous, et il servira de base au cahier des charges.",
          },
        },
      ],
    },
    {
      id: "limites",
      texte: "Vos outils actuels vous permettent-ils de faire ce dont vous avez besoin ?",
      axe: "outils",
      options: [
        { id: "besoin-precis", label: "Non : j'ai un besoin précis (devis automatisé, espace client, réservation avec des règles) qu'aucun outil du marché ne couvre", points: 3 },
        {
          id: "contournement",
          label: "En partie : je contourne avec des tableurs et des copier-coller",
          points: 2,
          conseil: {
            titre: "Cherchez un outil dédié avant de développer",
            texte:
              "Pour chaque contournement, cherchez un outil spécialisé (réservation, devis, CRM, gestion de projet) : beaucoup coûtent quelques dizaines d'euros par mois et couvrent les besoins courants. Une application sur mesure se justifie quand ce qui vous manque est propre à votre métier.",
          },
        },
        {
          id: "couverts",
          label: "Oui, ils couvrent mes besoins",
          points: 1,
          conseil: {
            titre: "Documentez vos réglages",
            texte:
              "Vos outils font le travail : notez leurs réglages, les automatisations actives et qui a les accès. Ce document vous évitera de repartir de zéro le jour où l'activité change, et un site bien relié à ces outils suffit pour l'instant.",
          },
        },
        {
          id: "pas-cherche",
          label: "Je n'ai pas cherché d'outil",
          points: 0,
          conseil: {
            titre: "Faites un tour des outils existants",
            texte:
              "Avant de faire développer quoi que ce soit, essayez pendant une semaine un outil de réservation, un logiciel de devis et un CRM en version gratuite. Vous saurez vite si le marché couvre votre besoin ou s'il manque quelque chose de spécifique.",
          },
        },
      ],
    },
    {
      id: "demarches-clients",
      texte: "Vos clients peuvent-ils faire seuls certaines démarches (réserver, consulter un devis, suivre une commande) ?",
      axe: "outils",
      options: [
        { id: "non-appels", label: "Non : chaque jour, des appels et des emails pour des demandes que le client pourrait faire seul", points: 3 },
        {
          id: "outils-separes",
          label: "Certaines, via des outils séparés (Calendly, formulaire, email)",
          points: 2,
          conseil: {
            titre: "Regroupez les démarches sur une seule page",
            texte:
              "Créez sur votre site une page « espace client » qui rassemble les liens vers la prise de rendez-vous, le formulaire de demande et vos coordonnées. Ce n'est pas une application, mais cela réduit les appels pour des questions simples.",
          },
        },
        {
          id: "en-ligne",
          label: "Oui, l'essentiel se fait en ligne",
          points: 1,
          conseil: {
            titre: "Mesurez ce qui reste",
            texte:
              "Comptez pendant deux semaines les demandes qui passent encore par téléphone ou email alors qu'elles pourraient se faire en ligne. Si elles sont rares, votre organisation actuelle suffit.",
          },
        },
        {
          id: "aucune-demarche",
          label: "Mes clients n'ont pas de démarches à faire",
          points: 0,
          conseil: {
            titre: "Un site suffit de ce côté",
            texte:
              "Si vos clients n'ont rien à réserver, consulter ou suivre en ligne, une application n'a pas de raison d'être pour eux. Concentrez-vous sur un site clair avec un formulaire de contact efficace.",
          },
        },
      ],
    },
    {
      id: "personnes",
      texte: "Combien de personnes travaillent chaque jour sur ces informations (demandes, planning, dossiers) ?",
      axe: "volume",
      options: [
        { id: "trois-plus", label: "Trois personnes ou plus, qui ont besoin des mêmes informations à jour", points: 3 },
        {
          id: "deux",
          label: "Deux personnes",
          points: 2,
          conseil: {
            titre: "Partagez un outil unique à deux",
            texte:
              "À deux, un tableur partagé (Google Sheets) ou un outil de tâches commun (Notion, Trello) avec des colonnes fixes évite la plupart des doublons. Fixez une règle : une information n'est saisie qu'à un seul endroit.",
          },
        },
        {
          id: "seul",
          label: "Moi seul",
          points: 1,
          conseil: {
            titre: "Organisez-vous avant d'outiller",
            texte:
              "Seul, votre temps est la seule ressource à protéger : un tableur bien tenu, des modèles d'email et un agenda en ligne couvrent l'essentiel. Une application prend son sens quand quelqu'un d'autre doit accéder aux mêmes informations.",
          },
        },
        {
          id: "variable",
          label: "Cela varie, sans rôle défini",
          points: 0,
          conseil: {
            titre: "Définissez qui fait quoi",
            texte:
              "Écrivez pour chaque étape (réception d'une demande, devis, planification, facture) qui en est responsable. Une application ne remplace pas une organisation floue, elle la fige.",
          },
        },
      ],
    },
    {
      id: "dossiers",
      texte: "Combien de demandes, commandes ou dossiers traitez-vous par mois ?",
      axe: "volume",
      options: [
        { id: "dizaines", label: "Plusieurs dizaines ou plus, avec un suivi à chaque étape", points: 3 },
        {
          id: "dix-trente",
          label: "Entre dix et trente",
          points: 2,
          conseil: {
            titre: "Structurez le suivi dans un tableur",
            texte:
              "Un tableau avec une ligne par dossier et une colonne par étape (reçu, devis envoyé, accepté, réalisé, facturé) suffit à ce volume. Ajoutez une colonne « prochaine action » et une date. Quand le tableau devient ingérable, l'application se justifie.",
          },
        },
        {
          id: "moins-dix",
          label: "Moins de dix",
          points: 1,
          conseil: {
            titre: "Gardez un suivi simple",
            texte:
              "À ce volume, une application coûterait plus cher que le temps gagné. Tenez la liste de vos dossiers en cours dans un tableur ou votre outil de facturation, et concentrez vos efforts sur le site pour obtenir plus de demandes.",
          },
        },
        {
          id: "pas-compte",
          label: "Je ne les compte pas",
          points: 0,
          conseil: {
            titre: "Comptez pendant un mois",
            texte:
              "Notez chaque demande entrante avec sa date, son canal et sa suite (devis, vente, sans suite). Le nombre mensuel et le taux de transformation sont les deux chiffres qui décident de l'outil dont vous avez besoin.",
          },
        },
      ],
    },
    {
      id: "pics",
      texte: "Votre activité connaît-elle des pics (saison, campagne, événement) où le traitement manuel ne suit plus ?",
      axe: "volume",
      options: [
        { id: "perdues", label: "Oui, à chaque pic des demandes attendent ou sont perdues", points: 2 },
        {
          id: "gerables",
          label: "Des pics gérables avec un effort supplémentaire",
          points: 1,
          conseil: {
            titre: "Préparez les pics avec des modèles",
            texte:
              "Avant le prochain pic, préparez des réponses types, un formulaire qui pose les bonnes questions dès le départ et un créneau quotidien de traitement. Notez combien de demandes ont attendu plus d'un jour : ce chiffre dit si un outil est nécessaire.",
          },
        },
        {
          id: "reguliere",
          label: "Non, l'activité est régulière",
          points: 0,
          conseil: {
            titre: "Pas d'urgence de ce côté",
            texte:
              "Une activité régulière se gère avec des outils standards. Si un pic arrive un jour (campagne, saison), mesurez le temps de réponse pendant la période et revenez à ce diagnostic.",
          },
        },
      ],
    },
    {
      id: "emplacement-donnees",
      texte: "Où sont vos données clients aujourd'hui ?",
      axe: "donnees",
      options: [
        { id: "dispersees", label: "Dispersées entre emails, tableurs, papier et plusieurs outils, avec des versions différentes", points: 3 },
        {
          id: "deux-outils",
          label: "Dans un ou deux outils, sans lien entre eux",
          points: 2,
          conseil: {
            titre: "Choisissez une source de vérité",
            texte:
              "Désignez un seul outil comme référence pour les fiches clients (votre CRM ou votre logiciel de facturation) et faites pointer les autres vers lui. Exportez une fois par mois en CSV pour garder une copie.",
          },
        },
        {
          id: "centralisees",
          label: "Centralisées dans un seul outil, à jour",
          points: 1,
          conseil: {
            titre: "Sauvegardez et exportez",
            texte:
              "Votre organisation est saine. Vérifiez que vous pouvez exporter vos données à tout moment (CSV) et programmez une sauvegarde mensuelle. Le jour où une application devient utile, l'import sera simple.",
          },
        },
        {
          id: "inconnu",
          label: "Je ne sais pas exactement",
          points: 0,
          conseil: {
            titre: "Faites l'inventaire de vos données",
            texte:
              "Listez où se trouve chaque information client : coordonnées, historique, devis, factures, échanges. Pour chacune, notez l'outil et qui y a accès. Cet inventaire tient sur une page et conditionne tout projet d'application.",
          },
        },
      ],
    },
    {
      id: "question-suivi",
      texte: "Pouvez-vous répondre en moins de cinq minutes à une question comme « quels clients n'ont pas été relancés depuis trois mois » ?",
      axe: "donnees",
      options: [
        { id: "heures", label: "Non, il faudrait des heures de recherche dans plusieurs fichiers", points: 3 },
        {
          id: "tri-manuel",
          label: "Oui, mais après un tri manuel dans un tableur",
          points: 2,
          conseil: {
            titre: "Ajoutez des colonnes de suivi",
            texte:
              "Dans votre tableur, ajoutez une colonne « dernier contact » et une colonne « prochaine action », puis un filtre. Un tableau croisé dynamique répond à la plupart des questions de suivi sans développement.",
          },
        },
        {
          id: "quelques-clics",
          label: "Oui, en quelques clics dans mon outil",
          points: 1,
          conseil: {
            titre: "Utilisez les rapports de votre outil",
            texte:
              "Vos données sont exploitables : créez deux ou trois vues ou rapports enregistrés (à relancer, en attente de devis, factures impayées) et consultez-les chaque lundi. Une application n'apporterait pas mieux sur ce point.",
          },
        },
        {
          id: "pas-pose",
          label: "Je ne me pose pas ce genre de question",
          points: 0,
          conseil: {
            titre: "Choisissez trois questions à suivre",
            texte:
              "Écrivez les trois questions dont la réponse vous ferait gagner de l'argent (qui relancer, quels devis sont en attente, quelles prestations se vendent le mieux). Essayez d'y répondre avec vos fichiers actuels : la difficulté rencontrée vous dira ce qu'il manque.",
          },
        },
      ],
    },
    {
      id: "double-saisie",
      texte: "Les mêmes informations sont-elles saisies plusieurs fois, par vous, votre équipe ou vos clients ?",
      axe: "donnees",
      options: [
        { id: "chaque-etape", label: "Oui, à chaque étape : demande, devis, planning, facture", points: 2 },
        {
          id: "une-deux",
          label: "Une double saisie sur une ou deux étapes",
          points: 1,
          conseil: {
            titre: "Supprimez une double saisie",
            texte:
              "Prenez la double saisie la plus fréquente et cherchez si l'outil de départ peut exporter vers l'outil d'arrivée (import CSV, connexion native, Zapier). Une seule liaison bien faite vous fait souvent gagner plus qu'un nouvel outil.",
          },
        },
        {
          id: "une-fois",
          label: "Non, chaque information est saisie une seule fois",
          points: 0,
          conseil: {
            titre: "Votre circuit est propre",
            texte:
              "Vous n'avez pas de ressaisie : c'est le principal gain qu'une application apporte, et vous l'avez déjà. Investissez plutôt dans le site et dans l'acquisition de demandes.",
          },
        },
      ],
    },
  ],
  verdicts: [
    {
      min: 70,
      titre: "Une application vous ferait gagner du temps",
      texte:
        "Tâches répétitives, outils non reliés, volume et données dispersées : les signes qui justifient une application sont réunis. Prochaine étape avant tout devis : écrire le cahier des charges (le modèle en 12 rubriques est joint au rapport), en commençant par le temps mesuré et le parcours d'un client. Une première version limitée à la tâche la plus coûteuse est la façon la plus sûre de démarrer.",
    },
    {
      min: 40,
      titre: "Commencez par automatiser vos outils actuels",
      texte:
        "Vous perdez du temps sur certaines tâches, mais vos outils et votre volume ne justifient pas encore un développement sur mesure. Les priorités ci-dessous relient et règlent ce que vous avez déjà. Appliquez-les pendant un ou deux mois, mesurez le temps gagné, puis refaites ce diagnostic.",
    },
    {
      min: 0,
      titre: "Trop tôt : un site suffit",
      texte:
        "Votre organisation actuelle absorbe l'activité sans ressaisie lourde ni volume important. Une application coûterait plus qu'elle ne rapporterait. Concentrez-vous sur un site clair, un formulaire efficace et des outils standards bien réglés ; les priorités ci-dessous vous aident à garder la mesure de ce qui change.",
    },
  ],
  ressource: "site-application-cahier-des-charges-12-rubriques",
  pole: POLE,
  page: "/services/sites-web/application-web",
};

export const DIAGNOSTICS_SITES_WEB: Diagnostic[] = [SITE_VITRINE, SITE_ECOMMERCE, REFONTE_SITE, APPLICATION_WEB];
