import type { Diagnostic } from "../types";

/**
 * Diagnostics interactifs du pôle (publicite) : un par page qui en propose un.
 * Voir types.ts pour la forme et les règles d'écriture.
 *
 * Deux entrées de type « calcul » (page pôle et page Meta Ads) décrivent le
 * simulateur de budget (AdsEstimatorForm) ; quatre questionnaires couvrent
 * Google Ads, TikTok Ads, Pinterest Ads et LinkedIn Ads.
 */
export const DIAGNOSTICS_PUBLICITE: Diagnostic[] = [
  /* ------------------------------------------------------------------ */
  /* /services/sea : simulateur de budget (Google Ads, Meta Ads ou les deux) */
  /* ------------------------------------------------------------------ */
  {
    slug: "publicite-simulateur-budget-demandes",
    type: "calcul",
    titre: "Quel budget publicitaire pour combien de demandes ? Simulez-le",
    accroche:
      "Choisissez votre secteur, votre ville et la plateforme (Google Ads, Meta Ads ou les deux), indiquez le budget que vous envisagez et votre panier moyen. Vous voyez tout de suite ce que ce budget peut donner en clics et en demandes.",
    obtenez: [],
    axes: [],
    questions: [],
    verdicts: [{ min: 0, titre: "", texte: "" }],
    ressource: "publicite-comparatif-plateformes-8-criteres",
    pole: "publicite",
    page: "/services/sea",
  },

  /* ------------------------------------------------------------------ */
  /* /services/sea/google-ads : êtes-vous prêt pour Google Ads ?          */
  /* ------------------------------------------------------------------ */
  {
    slug: "publicite-google-ads-pret-pour-google-ads",
    type: "questionnaire",
    titre: "Êtes-vous prêt pour Google Ads ?",
    accroche:
      "Dix questions sur votre activité, votre site et votre suivi. Vous obtenez tout de suite un score par axe et les points à régler avant de payer votre premier clic.",
    obtenez: [
      "Un score sur 100 et un verdict clair : lancer, préparer ou attendre",
      "Vos points forts et vos points faibles sur quatre axes",
      "Les trois premières actions à faire vous-même, puis le rapport complet par email",
    ],
    axes: [
      { id: "demande", label: "Demande existante pour votre métier" },
      { id: "site", label: "Site prêt à convertir" },
      { id: "budget", label: "Budget et suivi" },
      { id: "mesure", label: "Mesure des conversions" },
    ],
    questions: [
      {
        id: "recherche",
        texte: "Vos clients tapent-ils déjà votre prestation dans Google avant de vous contacter ?",
        aide: "Par exemple « plombier Rueil-Malmaison » ou « avocat droit du travail Nanterre ».",
        axe: "demande",
        options: [
          { id: "oui", label: "Oui, la plupart cherchent une prestation précise dans une zone", points: 3 },
          {
            id: "partie",
            label: "Une partie cherche, l'autre vient par le bouche-à-oreille",
            points: 2,
            conseil: {
              titre: "Vérifiez le volume de recherche avant de dépenser",
              texte:
                "Ouvrez l'outil de planification des mots clés de Google Ads et tapez vos trois prestations avec votre ville. Si des recherches mensuelles existent, la campagne a un public ; sinon, gardez le budget pour Meta ou pour le référencement local.",
            },
          },
          {
            id: "rare",
            label: "Rarement, mon offre est nouvelle ou peu connue",
            points: 1,
            conseil: {
              titre: "Ciblez le problème, pas votre solution",
              texte:
                "Quand personne ne tape le nom de votre offre, listez les problèmes qu'elle règle et ce que les gens tapent pour ce problème. Ce sont ces requêtes qui deviennent vos mots clés, avec une annonce qui présente votre solution comme la réponse.",
            },
          },
          {
            id: "inconnu",
            label: "Je ne sais pas",
            points: 0,
            conseil: {
              titre: "Faites le test en dix minutes",
              texte:
                "Tapez dans Google, en navigation privée, ce que dirait un client qui vous cherche. Si des annonces et des concurrents apparaissent, il y a une demande. Notez les cinq requêtes qui affichent le plus d'annonces : ce sont vos premiers mots clés.",
            },
          },
        ],
      },
      {
        id: "urgence",
        texte: "Votre prestation répond-elle à un besoin décidé, ou à une envie qu'il faut d'abord créer ?",
        axe: "demande",
        options: [
          { id: "decide", label: "Un besoin décidé : la personne veut un devis ou un rendez-vous rapidement", points: 3 },
          {
            id: "reflechi",
            label: "Un projet réfléchi sur plusieurs semaines",
            points: 2,
            conseil: {
              titre: "Prévoyez le retour de la personne",
              texte:
                "Un projet réfléchi demande plusieurs contacts. Installez l'audience de remarketing dès le premier jour et proposez un guide ou un devis en ligne plutôt qu'un simple « Contactez-nous », pour garder un lien avec les visiteurs qui ne décident pas tout de suite.",
            },
          },
          {
            id: "envie",
            label: "Une envie qu'il faut d'abord créer",
            points: 0,
            conseil: {
              titre: "Google Ads n'est pas le meilleur point de départ",
              texte:
                "Les gens ne cherchent pas ce qu'ils ne connaissent pas encore. Testez d'abord Meta Ads avec une vidéo qui montre le produit, et réservez Google Ads aux requêtes de marque une fois que l'on vous cherche.",
            },
          },
        ],
      },
      {
        id: "concurrence",
        texte: "Que voyez-vous quand vous tapez votre prestation et votre ville dans Google ?",
        aide: "Faites le test en navigation privée.",
        axe: "demande",
        options: [
          { id: "concurrents", label: "Des annonces de concurrents comparables à moi", points: 3 },
          {
            id: "plateformes",
            label: "Surtout des grandes plateformes et des annuaires",
            points: 2,
            conseil: {
              titre: "Jouez la proximité contre les plateformes",
              texte:
                "Face aux annuaires et aux grandes enseignes, précisez la ville dans le titre de l'annonce, ajoutez l'extension de lieu reliée à votre fiche Google et vos avis. C'est ce que la plateforme ne peut pas montrer.",
            },
          },
          {
            id: "aucune",
            label: "Aucune annonce",
            points: 1,
            conseil: {
              titre: "Vérifiez pourquoi personne n'enchérit",
              texte:
                "Aucune annonce peut vouloir dire une opportunité ou une absence de demande. Contrôlez le volume dans l'outil de planification : s'il existe, vous aurez des clics peu disputés ; s'il est nul, changez de requêtes.",
            },
          },
          {
            id: "pas-teste",
            label: "Je n'ai pas fait le test",
            points: 0,
            conseil: {
              titre: "Faites le test avant toute décision",
              texte:
                "Tapez trois requêtes en navigation privée et notez qui apparaît, en annonce et en résultat naturel. En dix minutes vous saurez si votre marché est disputé et à quel type d'annonce vous serez comparé.",
            },
          },
        ],
      },
      {
        id: "page",
        texte: "Sur quelle page arriverait un visiteur qui clique sur votre annonce ?",
        axe: "site",
        options: [
          { id: "dediee", label: "Une page dédiée à la prestation, avec un formulaire ou un numéro visible", points: 3 },
          {
            id: "contact-bas",
            label: "La page de la prestation, mais le contact est en bas ou dans le menu",
            points: 2,
            conseil: {
              titre: "Remontez le contact dans le premier écran",
              texte:
                "Placez un bouton d'appel et un formulaire court dans le premier écran de la page, y compris sur mobile. Un visiteur payé qui doit chercher comment vous joindre coûte le même prix que celui qui vous appelle.",
            },
          },
          {
            id: "accueil",
            label: "La page d'accueil",
            points: 1,
            conseil: {
              titre: "Créez une page par prestation",
              texte:
                "Une page d'accueil parle de tout et ne répond pas à la requête tapée. Créez une page par prestation avec le même mot clé dans le titre, deux ou trois preuves et un seul appel à l'action.",
            },
          },
          {
            id: "aucune",
            label: "Je n'ai pas de site, ou une page sans contact",
            points: 0,
            conseil: {
              titre: "Une page d'atterrissage avant la campagne",
              texte:
                "Sans page, Google Ads envoie des clics vers nulle part. Une page d'un seul écran suffit : titre avec la prestation et la ville, trois avantages, avis, numéro cliquable et formulaire de trois champs.",
            },
          },
        ],
      },
      {
        id: "mobile",
        texte: "Comment votre site se comporte-t-il sur un téléphone ?",
        aide: "La majorité des clics Google Ads viennent du mobile.",
        axe: "site",
        options: [
          { id: "bon", label: "Il s'affiche vite, le numéro est cliquable et le formulaire se remplit facilement", points: 3 },
          {
            id: "lent",
            label: "Il s'affiche correctement mais il est lent, ou le formulaire est long",
            points: 2,
            conseil: {
              titre: "Allégez le premier écran mobile",
              texte:
                "Compressez les images du haut de page, retirez les vidéos en lecture automatique et réduisez le formulaire à trois champs. Testez le temps de chargement avec PageSpeed Insights sur l'URL exacte de la page d'atterrissage.",
            },
          },
          {
            id: "difficile",
            label: "Il est difficile à lire ou à utiliser sur mobile",
            points: 0,
            conseil: {
              titre: "Corrigez le mobile avant de payer des clics",
              texte:
                "Ouvrez votre page sur votre propre téléphone : texte lisible sans zoomer, boutons de la taille d'un pouce, numéro qui déclenche l'appel. Tant que ces trois points ne sont pas réglés, chaque clic mobile est perdu.",
            },
          },
        ],
      },
      {
        id: "preuve",
        texte: "Que trouve un visiteur pour vous faire confiance sur la page ?",
        axe: "site",
        options: [
          { id: "complet", label: "Des avis récents, des photos de réalisations et une certification ou une assurance affichée", points: 3 },
          {
            id: "partiel",
            label: "Quelques avis ou photos, pas toujours à jour",
            points: 2,
            conseil: {
              titre: "Rafraîchissez vos preuves",
              texte:
                "Ajoutez vos trois derniers avis Google avec leur date et deux photos récentes de réalisations sur la page d'atterrissage. Une preuve datée de plusieurs années rassure moins qu'une preuve du mois dernier.",
            },
          },
          {
            id: "rien",
            label: "Rien de particulier",
            points: 0,
            conseil: {
              titre: "Ajoutez au moins trois preuves",
              texte:
                "Demandez un avis à vos trois derniers clients satisfaits, photographiez deux réalisations et indiquez votre adresse, votre SIRET et vos assurances en bas de page. Un visiteur qui vient d'une annonce ne vous connaît pas encore.",
            },
          },
        ],
      },
      {
        id: "budget",
        texte: "Quel budget mensuel pouvez-vous tenir pendant trois mois sans le remettre en cause ?",
        axe: "budget",
        options: [
          { id: "plus-600", label: "Plus de 600 euros par mois", points: 3 },
          {
            id: "300-600",
            label: "Entre 300 et 600 euros par mois",
            points: 2,
            conseil: {
              titre: "Concentrez le budget sur une seule prestation",
              texte:
                "Avec ce budget, lancez une seule campagne sur votre prestation la plus rentable et une zone de dix à quinze kilomètres. Deux campagnes qui manquent de clics n'apprennent rien ; une campagne bien alimentée montre vite ce qui marche.",
            },
          },
          {
            id: "moins-300",
            label: "Moins de 300 euros par mois",
            points: 1,
            conseil: {
              titre: "Commencez par les requêtes les plus chaudes",
              texte:
                "Limitez-vous aux mots clés en correspondance exacte qui contiennent votre ville et une intention claire (« devis », « urgence », « prix »). Vous aurez peu de clics, mais des clics qui appellent.",
            },
          },
          {
            id: "inconnu",
            label: "Je ne sais pas encore",
            points: 0,
            conseil: {
              titre: "Calculez votre budget à partir d'un client",
              texte:
                "Prenez la marge que vous rapporte un client et divisez-la par le nombre de contacts nécessaires pour en signer un : c'est ce que vous pouvez payer par demande. Multipliez par dix demandes pour obtenir un budget mensuel de départ réaliste.",
            },
          },
        ],
      },
      {
        id: "valeur",
        texte: "Savez-vous combien vous rapporte un client en moyenne ?",
        axe: "budget",
        options: [
          { id: "oui", label: "Oui, je connais mon panier moyen et ma marge", points: 3 },
          {
            id: "environ",
            label: "À peu près",
            points: 2,
            conseil: {
              titre: "Fixez un chiffre, même approximatif",
              texte:
                "Reprenez vos dix dernières factures, faites la moyenne, retirez vos coûts directs. Ce chiffre décide du coût par demande que vous pouvez accepter et vous évite de couper une campagne rentable ou de garder une campagne qui perd.",
            },
          },
          {
            id: "non",
            label: "Non",
            points: 0,
            conseil: {
              titre: "Sans ce chiffre, aucune campagne n'est pilotable",
              texte:
                "Notez pendant un mois chaque vente, son montant et ce qu'elle vous a coûté en matériel ou en temps. Un panier moyen et une marge suffisent pour savoir ce qu'une demande peut vous coûter.",
            },
          },
        ],
      },
      {
        id: "conversions",
        texte: "Que se passe-t-il aujourd'hui quand quelqu'un vous contacte depuis votre site ?",
        axe: "mesure",
        options: [
          { id: "tout", label: "Le formulaire et l'appel sont enregistrés comme conversions dans Google Ads", points: 3 },
          {
            id: "formulaire",
            label: "Seul le formulaire est mesuré, pas les appels",
            points: 2,
            conseil: {
              titre: "Mesurez aussi les appels",
              texte:
                "Activez le suivi des appels depuis l'annonce et posez un numéro de transfert Google sur la page. Pour un artisan ou un cabinet, les appels représentent souvent l'essentiel des demandes : sans eux, la campagne semble perdre alors qu'elle rapporte.",
            },
          },
          {
            id: "analytics",
            label: "Google Analytics est installé, mais aucune conversion n'est définie",
            points: 1,
            conseil: {
              titre: "Définissez une conversion sur la page de remerciement",
              texte:
                "Créez une page « Merci » affichée après l'envoi du formulaire, puis une conversion Google Ads sur cette page. C'est la configuration la plus simple et elle suffit pour piloter les enchères.",
            },
          },
          {
            id: "rien",
            label: "Rien n'est mesuré",
            points: 0,
            conseil: {
              titre: "Installez la mesure avant d'allumer la campagne",
              texte:
                "Posez la balise Google (via Google Tag Manager de préférence), une conversion sur le formulaire et une sur le clic du numéro. Une campagne sans conversion mesurée ne peut pas être optimisée, ni par vous, ni par Google.",
            },
          },
        ],
      },
      {
        id: "suivi",
        texte: "Comment suivez-vous les demandes reçues jusqu'à la vente ?",
        axe: "mesure",
        options: [
          { id: "complet", label: "Chaque demande est notée avec sa source et son issue (signée ou non)", points: 3 },
          {
            id: "sans-source",
            label: "Les demandes sont notées, sans la source",
            points: 2,
            conseil: {
              titre: "Ajoutez la question « comment nous avez-vous connus ? »",
              texte:
                "Ajoutez un champ à votre formulaire et posez la question au téléphone. Notez la réponse dans votre tableau ou votre CRM : au bout d'un mois, vous saurez quelle part de vos ventes vient de la publicité.",
            },
          },
          {
            id: "rien",
            label: "Je ne note rien de particulier",
            points: 0,
            conseil: {
              titre: "Un tableau à cinq colonnes suffit",
              texte:
                "Date, nom, source, prestation, issue. Tenez-le pendant les trois premiers mois de campagne : c'est lui, et non le tableau de bord Google Ads, qui dira si la publicité est rentable.",
            },
          },
        ],
      },
    ],
    verdicts: [
      {
        min: 70,
        titre: "Vous pouvez lancer une première campagne",
        texte:
          "La demande existe, votre site peut recevoir des clics et vous saurez mesurer ce qu'ils rapportent. Commencez par une seule campagne sur votre prestation principale, corrigez les points listés ci-dessous, puis élargissez quand les premières demandes arrivent.",
      },
      {
        min: 40,
        titre: "Préparez le terrain avant de payer vos premiers clics",
        texte:
          "Une partie des bases est là, mais un ou deux axes freineraient la campagne dès le départ. Réglez d'abord les priorités ci-dessous : chacune se corrige en quelques heures et évite de dépenser un budget sans retour.",
      },
      {
        min: 0,
        titre: "Google Ads n'est pas la première étape pour vous aujourd'hui",
        texte:
          "Plusieurs prérequis manquent : la campagne coûterait sans rapporter. Ce n'est pas définitif. Suivez les priorités ci-dessous dans l'ordre, puis refaites ce diagnostic : la plupart des points dépendent de vous, pas de Google.",
      },
    ],
    ressource: "publicite-google-ads-structure-compte-artisan-tpe",
    pole: "publicite",
    page: "/services/sea/google-ads",
  },

  /* ------------------------------------------------------------------ */
  /* /services/sea/meta-ads : simulateur de demandes Meta Ads             */
  /* ------------------------------------------------------------------ */
  {
    slug: "publicite-meta-ads-simulateur-demandes",
    type: "calcul",
    titre: "Combien de demandes pour votre budget Meta Ads ? Simulez-le",
    accroche:
      "Sélectionnez Meta Ads comme plateforme, votre secteur, le budget mensuel que vous envisagez et votre panier moyen. Le simulateur projette les clics et les demandes que ce budget peut générer sur Facebook et Instagram, et ce que cela représente pour votre activité.",
    obtenez: [],
    axes: [],
    questions: [],
    verdicts: [{ min: 0, titre: "", texte: "" }],
    ressource: "publicite-meta-ads-12-scripts-video-20-secondes",
    pole: "publicite",
    page: "/services/sea/meta-ads",
  },

  /* ------------------------------------------------------------------ */
  /* /services/sea/tiktok-ads : TikTok Ads est-il fait pour vous ?        */
  /* ------------------------------------------------------------------ */
  {
    slug: "publicite-tiktok-ads-est-il-fait-pour-vous",
    type: "questionnaire",
    titre: "TikTok Ads est-il fait pour vous ?",
    accroche:
      "Dix questions sur vos clients, vos vidéos, votre offre et le temps dont vous disposez. Vous obtenez tout de suite une réponse argumentée et ce qu'il faudrait changer pour que TikTok vous rapporte.",
    obtenez: [
      "Un score sur 100 et un verdict : TikTok maintenant, plus tard, ou une autre plateforme",
      "Vos points forts et vos freins sur quatre axes",
      "Les trois premières actions à faire vous-même, puis le rapport complet par email",
    ],
    axes: [
      { id: "cible", label: "Votre cible" },
      { id: "contenu", label: "Contenu vidéo disponible" },
      { id: "offre", label: "Offre et parcours" },
      { id: "budget", label: "Budget et temps" },
    ],
    questions: [
      {
        id: "age",
        texte: "Quel âge ont la plupart de vos clients ?",
        axe: "cible",
        options: [
          { id: "moins-35", label: "Moins de 35 ans pour la plupart", points: 3 },
          {
            id: "35-50",
            label: "Entre 35 et 50 ans",
            points: 2,
            conseil: {
              titre: "Vérifiez la taille de votre audience dans TikTok",
              texte:
                "TikTok ne se limite plus aux très jeunes, mais vérifiez avant de dépenser : dans le gestionnaire de publicités, créez une audience avec votre tranche d'âge et votre zone, et regardez la taille estimée. Si elle est trop petite, testez Meta en premier.",
            },
          },
          {
            id: "plus-50",
            label: "Plus de 50 ans",
            points: 1,
            conseil: {
              titre: "Testez avec un petit budget avant de vous engager",
              texte:
                "Votre cible est moins présente sur TikTok. Si vous voulez tester, faites-le avec un budget limité et une seule vidéo, en comparant le coût par demande avec Meta sur la même période.",
            },
          },
          {
            id: "inconnu",
            label: "Je ne sais pas",
            points: 0,
            conseil: {
              titre: "Regardez vos dix derniers clients",
              texte:
                "Reprenez vos dix derniers clients et notez leur tranche d'âge approximative. C'est le premier critère pour choisir entre TikTok, Meta et Google, et cela prend cinq minutes.",
            },
          },
        ],
      },
      {
        id: "type",
        texte: "À qui vendez-vous ?",
        axe: "cible",
        options: [
          { id: "particuliers", label: "À des particuliers", points: 3 },
          {
            id: "mixte",
            label: "À des particuliers et à des professionnels",
            points: 2,
            conseil: {
              titre: "Ne parlez qu'aux particuliers sur TikTok",
              texte:
                "Sur TikTok, tournez vos vidéos pour la partie particuliers de votre activité. Le ciblage professionnel y est presque inexistant ; gardez LinkedIn ou Google pour vos clients entreprises.",
            },
          },
          {
            id: "entreprises",
            label: "Uniquement à des entreprises",
            points: 0,
            conseil: {
              titre: "TikTok Ads n'est pas fait pour le B2B",
              texte:
                "Le ciblage par poste, entreprise ou secteur n'existe pas sur TikTok. Pour une cible professionnelle, regardez LinkedIn Ads (ciblage par fonction) ou Google Ads (intention de recherche) avant TikTok.",
            },
          },
        ],
      },
      {
        id: "zone",
        texte: "Où se trouvent vos clients ?",
        axe: "cible",
        options: [
          { id: "france", label: "Dans toute la France ou en ligne", points: 2 },
          {
            id: "ville",
            label: "Dans une grande ville ou un département",
            points: 1,
            conseil: {
              titre: "Ciblez la zone, pas le pays",
              texte:
                "Dans le ciblage, sélectionnez uniquement votre département ou votre agglomération. Une vidéo diffusée à toute la France pour un salon de coiffure gaspille l'essentiel du budget.",
            },
          },
          {
            id: "quartier",
            label: "Dans un rayon de quelques kilomètres",
            points: 0,
            conseil: {
              titre: "Vérifiez que la zone est assez grande pour diffuser",
              texte:
                "TikTok cible à l'échelle de la ville ou du département, pas du quartier. Regardez la taille d'audience estimée pour votre ville : si elle est faible, la diffusion sera irrégulière et chaque vue coûtera plus cher.",
            },
          },
        ],
      },
      {
        id: "videos",
        texte: "Avez-vous déjà des vidéos verticales de votre activité ?",
        axe: "contenu",
        options: [
          { id: "oui", label: "Oui, plusieurs vidéos tournées au téléphone, en format vertical", points: 3 },
          {
            id: "horizontal",
            label: "Quelques vidéos, mais en format horizontal ou avec un logo animé au début",
            points: 2,
            conseil: {
              titre: "Retournez en vertical, en une prise",
              texte:
                "Une vidéo horizontale recadrée se voit tout de suite dans le fil. Retournez la même scène au téléphone tenu à la verticale, sans logo d'introduction : les trois premières secondes doivent montrer le sujet, pas votre marque.",
            },
          },
          {
            id: "photos",
            label: "Seulement des photos",
            points: 1,
            conseil: {
              titre: "Tournez trois vidéos de vingt secondes cette semaine",
              texte:
                "Avant, pendant, après : filmez une prestation au téléphone en trois plans verticaux, sans montage compliqué. Ajoutez les sous-titres dans TikTok et vous avez votre première publicité.",
            },
          },
          {
            id: "rien",
            label: "Rien du tout",
            points: 0,
            conseil: {
              titre: "Commencez par filmer votre quotidien",
              texte:
                "Filmez une journée : l'arrivée, un geste technique, le résultat, un client qui commente. Vingt secondes suffisent. TikTok récompense le vrai ; une vidéo tournée au téléphone y passe mieux qu'un spot d'agence.",
            },
          },
        ],
      },
      {
        id: "visage",
        texte: "Êtes-vous à l'aise pour apparaître ou parler face caméra ?",
        axe: "contenu",
        options: [
          { id: "oui", label: "Oui, moi ou quelqu'un de l'équipe", points: 2 },
          {
            id: "entrainement",
            label: "Avec un peu d'entraînement",
            points: 1,
            conseil: {
              titre: "Entraînez-vous sur des vidéos non sponsorisées",
              texte:
                "Publiez deux ou trois vidéos organiques avant de sponsoriser : elles vous entraînent et vous montrent ce qui accroche. Parlez comme à un client au comptoir, un point par vidéo, sans script appris par cœur.",
            },
          },
          {
            id: "non",
            label: "Non, personne ne veut apparaître",
            points: 0,
            conseil: {
              titre: "Montrez les mains et le résultat",
              texte:
                "Une vidéo sans visage fonctionne si elle montre un geste, un produit ou une transformation en gros plan, avec une voix off ou du texte à l'écran. Filmez vos mains au travail : c'est souvent ce que les gens regardent le plus.",
            },
          },
        ],
      },
      {
        id: "rythme",
        texte: "Pouvez-vous produire une nouvelle vidéo chaque semaine ?",
        axe: "contenu",
        options: [
          { id: "oui", label: "Oui, c'est facile à intégrer dans mon activité", points: 3 },
          {
            id: "mensuel",
            label: "Une par mois, pas plus",
            points: 2,
            conseil: {
              titre: "Tournez par lot",
              texte:
                "Bloquez deux heures par mois et tournez cinq vidéos différentes d'un coup : une prestation, une question fréquente, une coulisse, un avant-après, un avis client. Une publicité TikTok s'use en quelques semaines ; le lot vous donne de l'avance.",
            },
          },
          {
            id: "non",
            label: "Non, je n'ai pas le temps",
            points: 0,
            conseil: {
              titre: "Sans renouvellement, la campagne s'essouffle",
              texte:
                "Sur TikTok, une même vidéo perd vite son efficacité. Si vous ne pouvez pas en produire régulièrement, confiez le tournage à quelqu'un de l'équipe ou choisissez une plateforme où une seule annonce tient plusieurs mois, comme Google Ads.",
            },
          },
        ],
      },
      {
        id: "prix",
        texte: "Quel est le prix de votre offre principale ?",
        axe: "offre",
        options: [
          { id: "moins-100", label: "Moins de 100 euros, achetable ou réservable sans réfléchir", points: 2 },
          {
            id: "100-500",
            label: "Entre 100 et 500 euros",
            points: 1,
            conseil: {
              titre: "Proposez une première étape simple",
              texte:
                "Sur TikTok, une décision se prend en quelques secondes. Mettez en avant une entrée facile : un diagnostic, une première séance, un échantillon ou une réservation gratuite, plutôt que la prestation complète.",
            },
          },
          {
            id: "plus-500",
            label: "Plus de 500 euros, avec devis",
            points: 0,
            conseil: {
              titre: "Vendez le rendez-vous, pas la prestation",
              texte:
                "Pour un achat réfléchi, l'objectif de la campagne doit être un formulaire court ou une prise de rendez-vous, avec un remarketing derrière. N'attendez pas une vente directe depuis la vidéo.",
            },
          },
        ],
      },
      {
        id: "parcours",
        texte: "Que se passe-t-il quand quelqu'un clique sur votre vidéo ?",
        axe: "offre",
        options: [
          { id: "page", label: "Il arrive sur une page mobile rapide avec une action claire (réserver, acheter, demander)", points: 3 },
          {
            id: "site",
            label: "Il arrive sur mon site, mais l'action n'est pas évidente",
            points: 2,
            conseil: {
              titre: "Une seule action sur la page d'arrivée",
              texte:
                "Créez une page dédiée à la vidéo : le même visuel, une phrase, un bouton. Retirez le menu et les liens secondaires. Le visiteur TikTok décide en quelques secondes ; ne lui laissez qu'un choix.",
            },
          },
          {
            id: "profil",
            label: "Il arrive sur mon profil TikTok ou Instagram",
            points: 1,
            conseil: {
              titre: "Reliez la vidéo à une page ou à un formulaire instantané",
              texte:
                "Un profil ne convertit pas. Utilisez le formulaire instantané de TikTok (trois champs, pré-remplis) ou une page d'atterrissage mobile avec un bouton d'appel ou de réservation.",
            },
          },
          {
            id: "rien",
            label: "Je n'ai pas encore de page ni de site",
            points: 0,
            conseil: {
              titre: "Commencez par le formulaire instantané",
              texte:
                "TikTok propose un formulaire intégré, sans site : nom, téléphone, question. Reliez-le à votre vidéo et rappelez chaque demande dans l'heure. Le site pourra venir ensuite.",
            },
          },
        ],
      },
      {
        id: "budget",
        texte: "Quel budget pouvez-vous consacrer à un test d'un mois ?",
        axe: "budget",
        options: [
          { id: "plus-500", label: "Plus de 500 euros", points: 3 },
          {
            id: "200-500",
            label: "Entre 200 et 500 euros",
            points: 2,
            conseil: {
              titre: "Un seul objectif, deux vidéos",
              texte:
                "Avec ce budget, testez une seule campagne, un objectif (contacts ou trafic) et deux vidéos différentes. Ne changez rien pendant sept jours : TikTok a besoin de cette phase d'apprentissage pour stabiliser sa diffusion.",
            },
          },
          {
            id: "moins-200",
            label: "Moins de 200 euros",
            points: 1,
            conseil: {
              titre: "Commencez par sponsoriser une vidéo qui marche déjà",
              texte:
                "Publiez plusieurs vidéos organiques et sponsorisez seulement celle qui a le plus retenu l'attention. Vous ne payez que pour amplifier un contenu déjà validé par le public.",
            },
          },
          {
            id: "inconnu",
            label: "Je ne sais pas",
            points: 0,
            conseil: {
              titre: "Fixez un budget test avant de commencer",
              texte:
                "Décidez d'un montant que vous acceptez de dépenser pour apprendre, et d'une durée, par exemple un mois. Sans ce cadre, on coupe trop tôt ou l'on continue trop longtemps.",
            },
          },
        ],
      },
      {
        id: "temps",
        texte: "Combien de temps pouvez-vous consacrer à TikTok chaque semaine ?",
        aide: "Tournage, montage, réponses aux commentaires et lecture des chiffres.",
        axe: "budget",
        options: [
          { id: "deux-heures", label: "Deux heures ou plus", points: 3 },
          {
            id: "une-heure",
            label: "Environ une heure",
            points: 2,
            conseil: {
              titre: "Réservez l'heure au tournage",
              texte:
                "Montez directement dans TikTok (sous-titres automatiques, découpe simple), programmez les publications et consultez les chiffres une fois par semaine seulement. Le tournage est la seule étape qui ne se délègue pas à l'application.",
            },
          },
          {
            id: "rien",
            label: "Presque pas de temps",
            points: 0,
            conseil: {
              titre: "Déléguez ou choisissez une autre plateforme",
              texte:
                "TikTok demande de la présence : réponses aux commentaires, nouvelles vidéos, ajustements. Si personne ne peut s'en charger, une campagne Google Ads bien réglée demande moins de temps chaque semaine.",
            },
          },
        ],
      },
    ],
    verdicts: [
      {
        min: 70,
        titre: "TikTok Ads a de bonnes chances de vous convenir",
        texte:
          "Votre cible y est présente, vous pouvez produire des vidéos et votre offre se décide vite. Lancez un test d'un mois avec deux vidéos, un seul objectif et une page d'arrivée simple, puis comparez le coût par demande avec vos autres canaux.",
      },
      {
        min: 40,
        titre: "Possible, à condition de régler quelques points d'abord",
        texte:
          "Une partie des conditions est réunie, mais un ou deux axes freineraient la campagne. Traitez d'abord les priorités ci-dessous, en commençant par le contenu et le parcours : ce sont eux qui font la différence sur TikTok.",
      },
      {
        min: 0,
        titre: "TikTok Ads n'est probablement pas la bonne plateforme aujourd'hui",
        texte:
          "Votre cible, votre offre ou votre capacité à produire des vidéos ne correspondent pas encore à ce que TikTok demande. Ce n'est pas un jugement sur votre activité : une autre plateforme vous rapportera plus vite. Les priorités ci-dessous vous disent laquelle regarder et ce qu'il faudrait changer pour revenir sur TikTok.",
      },
    ],
    ressource: "publicite-tiktok-ads-8-scripts-tpe-crochet-3-secondes",
    pole: "publicite",
    page: "/services/sea/tiktok-ads",
  },

  /* ------------------------------------------------------------------ */
  /* /services/sea/pinterest-ads : Pinterest Ads est-il fait pour vous ?  */
  /* ------------------------------------------------------------------ */
  {
    slug: "publicite-pinterest-ads-est-il-fait-pour-vous",
    type: "questionnaire",
    titre: "Pinterest Ads est-il fait pour vous ?",
    accroche:
      "Dix questions sur votre univers, vos visuels, votre boutique et votre calendrier. Vous obtenez tout de suite une réponse argumentée et ce qu'il faudrait préparer pour que Pinterest vous rapporte.",
    obtenez: [
      "Un score sur 100 et un verdict : Pinterest maintenant, après quelques réglages, ou une autre plateforme",
      "Vos points forts et vos freins sur quatre axes",
      "Les trois premières actions à faire vous-même, puis le rapport complet par email",
    ],
    axes: [
      { id: "secteur", label: "Secteur et visuels" },
      { id: "catalogue", label: "Catalogue ou pages produits" },
      { id: "saison", label: "Saisonnalité" },
      { id: "budget", label: "Budget" },
    ],
    questions: [
      {
        id: "univers",
        texte: "Dans quel univers se situe votre activité ?",
        axe: "secteur",
        options: [
          { id: "pinterest", label: "Décoration, maison, mariage, mode, beauté, cuisine, voyage ou loisirs créatifs", points: 3 },
          {
            id: "visuel",
            label: "Un produit ou un service qui se montre bien en photo, mais hors de ces univers",
            points: 2,
            conseil: {
              titre: "Rattachez votre offre à un univers Pinterest",
              texte:
                "Cherchez dans Pinterest les tendances liées à votre produit (l'outil Pinterest Trends est gratuit). Si vos mots clés apparaissent, épinglez dans ces thèmes : une lampe se vend dans « salon cosy », pas dans « luminaire ».",
            },
          },
          {
            id: "local",
            label: "Un service local ou technique, peu visuel",
            points: 1,
            conseil: {
              titre: "Vérifiez qu'il existe des recherches",
              texte:
                "Tapez vos prestations dans la barre de recherche Pinterest et regardez les suggestions. Sans suggestions ni épingles concurrentes, la plateforme n'a pas de public pour vous ; Google Ads répondra mieux à une demande locale.",
            },
          },
          {
            id: "b2b",
            label: "Une offre B2B ou un logiciel",
            points: 0,
            conseil: {
              titre: "Pinterest n'est pas fait pour le B2B",
              texte:
                "Les utilisateurs de Pinterest cherchent des idées pour leur vie personnelle. Pour une cible professionnelle, LinkedIn Ads (ciblage par fonction) ou Google Ads (intention de recherche) sont de meilleurs points de départ.",
            },
          },
        ],
      },
      {
        id: "photos",
        texte: "De quelles images disposez-vous ?",
        axe: "secteur",
        options: [
          { id: "verticales", label: "Des photos verticales de qualité, en situation, renouvelées régulièrement", points: 3 },
          {
            id: "horizontales",
            label: "De bonnes photos, mais en format carré ou horizontal",
            points: 2,
            conseil: {
              titre: "Passez au format vertical 2:3",
              texte:
                "Recadrez ou retournez vos visuels en 1000 x 1500 pixels : le fil Pinterest est vertical et une image horizontale y perd la moitié de sa place. Ajoutez un texte court sur l'image pour dire ce que c'est.",
            },
          },
          {
            id: "packshot",
            label: "Des photos sur fond blanc, type catalogue",
            points: 1,
            conseil: {
              titre: "Mettez le produit en situation",
              texte:
                "Une photo sur fond blanc informe, une photo en situation inspire. Photographiez votre produit dans un intérieur, porté ou utilisé, à la lumière naturelle. C'est cette image que l'on enregistre dans un tableau.",
            },
          },
          {
            id: "peu",
            label: "Peu ou pas de photos",
            points: 0,
            conseil: {
              titre: "Constituez une base de dix visuels",
              texte:
                "Avant toute campagne, produisez dix photos verticales : cinq produits en situation, trois détails, deux ambiances. Un téléphone récent et une fenêtre suffisent pour commencer.",
            },
          },
        ],
      },
      {
        id: "clientele",
        texte: "Qui achète le plus souvent chez vous ?",
        axe: "secteur",
        options: [
          { id: "femmes", label: "Surtout des femmes de 25 à 55 ans", points: 2 },
          {
            id: "mixte",
            label: "Un public mixte",
            points: 1,
            conseil: {
              titre: "Ciblez la part la plus présente sur Pinterest",
              texte:
                "Le public de Pinterest est majoritairement féminin. Orientez vos épingles et votre ciblage vers cette part de votre clientèle et mesurez-la à part ; vous verrez vite si l'autre moitié vaut une campagne distincte ailleurs.",
            },
          },
          {
            id: "hommes",
            label: "Surtout des hommes, ou je ne sais pas",
            points: 0,
            conseil: {
              titre: "Regardez vos données avant de choisir",
              texte:
                "Ouvrez votre boutique ou votre Google Analytics et notez la répartition de vos acheteurs. Si le public féminin est minoritaire, Pinterest reste possible sur certains thèmes (bricolage, auto, sport), mais testez Meta en priorité.",
            },
          },
        ],
      },
      {
        id: "site",
        texte: "Où un visiteur arrive-t-il en cliquant sur une épingle ?",
        axe: "catalogue",
        options: [
          { id: "fiche", label: "Sur la fiche produit ou la page du service, avec achat ou demande possible", points: 3 },
          {
            id: "categorie",
            label: "Sur une catégorie ou une page générale",
            points: 2,
            conseil: {
              titre: "Reliez chaque épingle à sa page exacte",
              texte:
                "Une épingle montre un produit précis ; le clic doit mener à sa fiche, pas à la collection. Vérifiez chaque lien avant de sponsoriser : c'est la première cause de visites sans achat.",
            },
          },
          {
            id: "accueil",
            label: "Sur ma page d'accueil ou mon profil Instagram",
            points: 1,
            conseil: {
              titre: "Créez une page par produit ou par prestation",
              texte:
                "Sans page de destination précise, l'intérêt suscité par l'épingle se perd. Même pour un service, une page avec la photo, le prix ou le devis et un bouton d'action suffit.",
            },
          },
          {
            id: "rien",
            label: "Je n'ai pas de site marchand ni de page de réservation",
            points: 0,
            conseil: {
              titre: "Une page avant la campagne",
              texte:
                "Pinterest envoie du trafic vers un site. Sans boutique ni page de demande, commencez par une page simple (produit, prix, formulaire ou lien de réservation), puis lancez la campagne.",
            },
          },
        ],
      },
      {
        id: "catalogue",
        texte: "Vos produits existent-ils sous forme de catalogue en ligne ?",
        aide: "Un flux Shopify, WooCommerce, PrestaShop ou un fichier CSV.",
        axe: "catalogue",
        options: [
          { id: "complet", label: "Oui, avec des fiches complètes (photo verticale, prix, stock, description)", points: 3 },
          {
            id: "incomplet",
            label: "Oui, mais les fiches sont incomplètes ou les photos ne sont pas verticales",
            points: 2,
            conseil: {
              titre: "Complétez le flux avant de le connecter",
              texte:
                "Pinterest refuse ou déclasse les fiches sans prix, sans disponibilité ou avec des images trop petites. Complétez ces champs et ajoutez une photo 2:3 par produit : le catalogue devient alors des épingles automatiques.",
            },
          },
          {
            id: "services",
            label: "Non, je vends des services ou des pièces uniques",
            points: 1,
            conseil: {
              titre: "Créez des épingles manuelles par prestation",
              texte:
                "Sans catalogue, préparez une épingle par prestation ou par réalisation, avec un titre descriptif et le lien vers sa page. Cinq à dix épingles suffisent pour une première campagne de trafic.",
            },
          },
          {
            id: "inconnu",
            label: "Je ne sais pas ce qu'est un catalogue",
            points: 0,
            conseil: {
              titre: "Vérifiez votre plateforme de boutique",
              texte:
                "Shopify, WooCommerce et PrestaShop génèrent un flux produit en quelques clics via leur extension Pinterest. Cherchez « Pinterest » dans les extensions de votre boutique : c'est ce flux qui alimente les épingles produits.",
            },
          },
        ],
      },
      {
        id: "tag",
        texte: "Le tag Pinterest est-il installé sur votre site ?",
        axe: "catalogue",
        options: [
          { id: "evenements", label: "Oui, avec les événements d'achat ou de demande", points: 3 },
          {
            id: "sans-evenement",
            label: "Oui, mais sans événement de conversion",
            points: 2,
            conseil: {
              titre: "Ajoutez l'événement qui compte",
              texte:
                "Un tag sans événement ne voit que les visites. Ajoutez l'événement « achat » ou « lead » sur la page de confirmation, via l'extension de votre boutique ou Google Tag Manager, pour que Pinterest optimise vers ce qui rapporte.",
            },
          },
          {
            id: "non",
            label: "Non, ou je ne sais pas",
            points: 0,
            conseil: {
              titre: "Installez le tag avant de dépenser",
              texte:
                "Le tag Pinterest se pose en quelques minutes via l'extension de votre boutique ou Google Tag Manager. Sans lui, vous ne saurez jamais quelle épingle a vendu et la campagne ne pourra pas s'améliorer.",
            },
          },
        ],
      },
      {
        id: "saison",
        texte: "Vos ventes suivent-elles des périodes fortes dans l'année ?",
        axe: "saison",
        options: [
          { id: "connues", label: "Oui, je connais mes pics (fêtes, mariages, rentrée, saisons)", points: 2 },
          {
            id: "floues",
            label: "Un peu, sans que je les aie vraiment mesurés",
            points: 1,
            conseil: {
              titre: "Repérez vos pics sur douze mois",
              texte:
                "Exportez vos ventes mensuelles de l'an dernier et repérez les trois meilleurs mois. Sur Pinterest, il faut publier deux à trois mois avant le pic : les gens planifient longtemps à l'avance.",
            },
          },
          {
            id: "regulieres",
            label: "Non, mes ventes sont régulières toute l'année",
            points: 0,
            conseil: {
              titre: "Appuyez-vous sur les saisons de Pinterest",
              texte:
                "Même sans saisonnalité propre, Pinterest en a une : Noël dès septembre, mariages dès janvier, extérieur au printemps. Consultez Pinterest Trends et calez vos épingles sur ces vagues.",
            },
          },
        ],
      },
      {
        id: "anticipation",
        texte: "Combien de temps à l'avance préparez-vous vos visuels et vos offres ?",
        axe: "saison",
        options: [
          { id: "deux-mois", label: "Deux à trois mois avant chaque temps fort", points: 3 },
          {
            id: "semaines",
            label: "Quelques semaines avant",
            points: 2,
            conseil: {
              titre: "Prenez deux mois d'avance",
              texte:
                "Sur Pinterest, les recherches de Noël démarrent en septembre et celles de mariage en janvier. Une épingle publiée quelques semaines avant arrive quand la décision est déjà prise. Avancez votre calendrier de deux mois.",
            },
          },
          {
            id: "dernier-moment",
            label: "Au dernier moment, ou sans calendrier",
            points: 0,
            conseil: {
              titre: "Fixez un calendrier de contenu sur douze mois",
              texte:
                "Listez vos temps forts et ceux de la plateforme, puis notez pour chacun une date de prise de vue et une date de mise en ligne, deux mois avant. Un tableau d'une page suffit.",
            },
          },
        ],
      },
      {
        id: "budget",
        texte: "Quel budget mensuel pouvez-vous tenir pendant trois mois ?",
        axe: "budget",
        options: [
          { id: "plus-400", label: "Plus de 400 euros par mois", points: 3 },
          {
            id: "150-400",
            label: "Entre 150 et 400 euros par mois",
            points: 2,
            conseil: {
              titre: "Une campagne, un objectif",
              texte:
                "Concentrez le budget sur une seule campagne, sur vos trois meilleurs produits, avec un objectif de conversion si le tag est installé, sinon de trafic. Attendez trois semaines avant de juger : Pinterest agit plus lentement que Meta.",
            },
          },
          {
            id: "moins-150",
            label: "Moins de 150 euros par mois",
            points: 1,
            conseil: {
              titre: "Commencez en organique et sponsorisez l'épingle qui marche",
              texte:
                "Publiez régulièrement pendant un mois, puis sponsorisez seulement l'épingle qui a été le plus enregistrée. Vous investissez sur un visuel déjà validé.",
            },
          },
          {
            id: "inconnu",
            label: "Je ne sais pas",
            points: 0,
            conseil: {
              titre: "Partez de votre marge par commande",
              texte:
                "Calculez ce que vous rapporte une commande après coûts. C'est le maximum que vous pouvez payer pour une vente. Multipliez par le nombre de ventes que vous visez par mois : vous avez votre budget de départ.",
            },
          },
        ],
      },
      {
        id: "patience",
        texte: "Pendant combien de temps acceptez-vous de tester avant de juger ?",
        axe: "budget",
        options: [
          { id: "trois-mois", label: "Trois mois ou plus", points: 3 },
          {
            id: "un-deux-mois",
            label: "Un à deux mois",
            points: 2,
            conseil: {
              titre: "Jugez sur les enregistrements avant les ventes",
              texte:
                "Pinterest agit sur la durée : une épingle continue de circuler des mois après sa mise en ligne. Sur un ou deux mois, regardez d'abord les enregistrements et le trafic ; les ventes suivent souvent après.",
            },
          },
          {
            id: "semaines",
            label: "Quelques semaines",
            points: 0,
            conseil: {
              titre: "Pinterest demande plus de temps que cela",
              texte:
                "Une campagne coupée au bout de deux semaines n'a pas eu le temps de circuler. Si vous avez besoin de résultats rapides, testez Meta ou Google Ads d'abord et revenez sur Pinterest avec un budget de fond.",
            },
          },
        ],
      },
    ],
    verdicts: [
      {
        min: 70,
        titre: "Pinterest Ads correspond bien à votre activité",
        texte:
          "Votre univers, vos visuels et votre site permettent de lancer une campagne. Commencez par une campagne sur vos meilleurs produits, calée sur votre prochain temps fort, et regardez les enregistrements et le trafic avant les ventes.",
      },
      {
        min: 40,
        titre: "Possible, avec quelques réglages avant de commencer",
        texte:
          "Votre activité a sa place sur Pinterest, mais un ou deux axes freineraient la campagne. Traitez d'abord les priorités ci-dessous, en particulier le format des visuels et la page d'arrivée.",
      },
      {
        min: 0,
        titre: "Pinterest Ads n'est pas votre meilleure option aujourd'hui",
        texte:
          "Votre secteur, vos visuels ou votre site ne correspondent pas encore à ce que Pinterest demande. Ce n'est pas définitif : les priorités ci-dessous indiquent ce qui manque et, si une autre plateforme vous convient mieux, laquelle.",
      },
    ],
    ressource: "publicite-pinterest-calendrier-12-mois-decoration-mariage-mode",
    pole: "publicite",
    page: "/services/sea/pinterest-ads",
  },

  /* ------------------------------------------------------------------ */
  /* /services/sea/linkedin-ads : LinkedIn Ads est-il fait pour vous ?    */
  /* ------------------------------------------------------------------ */
  {
    slug: "publicite-linkedin-ads-est-il-fait-pour-vous",
    type: "questionnaire",
    titre: "LinkedIn Ads est-il fait pour vous ?",
    accroche:
      "Onze questions sur vos clients, votre offre, vos preuves et votre budget. Vous obtenez tout de suite une réponse argumentée et ce qu'il faudrait préparer pour que le coût du clic LinkedIn soit absorbable.",
    obtenez: [
      "Un score sur 100 et un verdict : LinkedIn maintenant, après préparation, ou une autre plateforme",
      "Vos points forts et vos freins sur quatre axes",
      "Les trois premières actions à faire vous-même, puis le rapport complet par email",
    ],
    axes: [
      { id: "cible", label: "Cible professionnelle" },
      { id: "offre", label: "Offre B2B et panier" },
      { id: "contenu", label: "Contenu et preuve" },
      { id: "budget", label: "Budget" },
    ],
    questions: [
      {
        id: "clients",
        texte: "À qui vendez-vous ?",
        axe: "cible",
        options: [
          { id: "entreprises-identifiees", label: "À des entreprises, avec un interlocuteur identifié (fonction, service)", points: 3 },
          {
            id: "entreprises-floues",
            label: "À des entreprises, sans savoir précisément qui décide",
            points: 2,
            conseil: {
              titre: "Décrivez votre client type en trois lignes",
              texte:
                "Reprenez vos cinq derniers contrats et notez pour chacun la fonction de la personne qui a signé, la taille de l'entreprise et son secteur. Ce sont exactement les trois critères de ciblage LinkedIn.",
            },
          },
          {
            id: "independants",
            label: "À des indépendants et des très petites structures",
            points: 1,
            conseil: {
              titre: "Vérifiez que votre cible est joignable sur LinkedIn",
              texte:
                "Les indépendants renseignent souvent peu leur profil, ce qui rend le ciblage imprécis. Testez une audience par titre de poste et par secteur et regardez sa taille : si elle est très petite, la diffusion sera chère et irrégulière.",
            },
          },
          {
            id: "particuliers",
            label: "À des particuliers",
            points: 0,
            conseil: {
              titre: "LinkedIn n'est pas fait pour le grand public",
              texte:
                "Le ciblage LinkedIn repose sur le poste, l'entreprise et le secteur. Pour vendre à des particuliers, Meta Ads ou Google Ads coûteront moins cher par contact.",
            },
          },
        ],
      },
      {
        id: "taille",
        texte: "Quelle est la taille de votre audience cible ?",
        aide: "Nombre de personnes qui correspondent à la fonction, au secteur et à la zone visés.",
        axe: "cible",
        options: [
          { id: "plus-50k", label: "Plus de 50 000 personnes", points: 3 },
          {
            id: "10k-50k",
            label: "Entre 10 000 et 50 000",
            points: 2,
            conseil: {
              titre: "Élargissez avec les fonctions voisines",
              texte:
                "Ajoutez les fonctions proches (par exemple « responsable achats » et « directeur des opérations ») et les compétences associées. LinkedIn diffuse mieux au-dessus de quelques dizaines de milliers de personnes.",
            },
          },
          {
            id: "moins-10k",
            label: "Moins de 10 000",
            points: 1,
            conseil: {
              titre: "Passez par une liste de comptes ou un ciblage plus large",
              texte:
                "Une audience trop petite se diffuse mal et coûte cher. Importez une liste d'entreprises cibles (audiences correspondantes) ou élargissez la zone géographique et les secteurs, en gardant le titre de poste comme filtre principal.",
            },
          },
          {
            id: "inconnue",
            label: "Je ne l'ai jamais estimée",
            points: 0,
            conseil: {
              titre: "Estimez-la dans Campaign Manager",
              texte:
                "Créez un compte publicitaire (gratuit) et une campagne brouillon : dès que vous renseignez fonction, secteur et zone, LinkedIn affiche la taille de l'audience. Cela prend dix minutes et décide de la suite.",
            },
          },
        ],
      },
      {
        id: "decideur",
        texte: "Votre interlocuteur habituel est-il celui qui décide et signe ?",
        axe: "cible",
        options: [
          { id: "oui", label: "Oui, c'est le décideur (dirigeant, directeur, responsable de service)", points: 3 },
          {
            id: "influence",
            label: "Il influence, mais quelqu'un d'autre signe",
            points: 2,
            conseil: {
              titre: "Ciblez les deux, avec deux messages",
              texte:
                "Créez deux campagnes : une pour l'utilisateur (le problème du quotidien) et une pour le décideur (le coût, le risque, le retour). Le même message aux deux ne parle vraiment à aucun.",
            },
          },
          {
            id: "inconnu",
            label: "Je ne sais pas qui décide",
            points: 0,
            conseil: {
              titre: "Cartographiez la décision sur vos derniers contrats",
              texte:
                "Pour vos trois derniers clients, écrivez qui a demandé, qui a validé, qui a signé. Vous saurez quelle fonction cibler et quel argument mettre dans l'annonce.",
            },
          },
        ],
      },
      {
        id: "panier",
        texte: "Que vous rapporte un client sur la durée ?",
        axe: "offre",
        options: [
          { id: "plus-5000", label: "Plus de 5 000 euros", points: 3 },
          {
            id: "2000-5000",
            label: "Entre 2 000 et 5 000 euros",
            points: 2,
            conseil: {
              titre: "Visez les contrats les plus rentables",
              texte:
                "Un clic LinkedIn coûte cher : réservez la campagne à votre offre la mieux margée ou aux clients qui restent le plus longtemps, et laissez les petites prestations à Google ou au bouche-à-oreille.",
            },
          },
          {
            id: "moins-2000",
            label: "Moins de 2 000 euros",
            points: 1,
            conseil: {
              titre: "Vérifiez que le coût par contact reste absorbable",
              texte:
                "Calculez ce qu'une demande peut vous coûter en gardant une marge. Comparez-le, dès la première semaine de campagne, au coût réel d'un formulaire LinkedIn dans votre secteur : si l'écart est défavorable, Google Ads ou l'emailing seront plus rentables.",
            },
          },
          {
            id: "inconnu",
            label: "Je ne sais pas",
            points: 0,
            conseil: {
              titre: "Chiffrez la valeur d'un client",
              texte:
                "Prenez vos dix derniers clients, additionnez ce qu'ils ont payé sur un an, divisez par dix. Sans ce chiffre, impossible de dire si un contact à ce prix est une bonne ou une mauvaise affaire.",
            },
          },
        ],
      },
      {
        id: "porte",
        texte: "Que proposez-vous à quelqu'un qui ne vous connaît pas encore ?",
        axe: "offre",
        options: [
          { id: "entree", label: "Une porte d'entrée sans engagement : audit, diagnostic, démonstration ou guide", points: 3 },
          {
            id: "rdv",
            label: "Un rendez-vous ou un devis directement",
            points: 2,
            conseil: {
              titre: "Ajoutez une étape avant le rendez-vous",
              texte:
                "Sur LinkedIn, on n'achète pas au premier contact. Proposez un contenu utile (guide, comparatif, étude) contre un email, puis le rendez-vous en second message. Le formulaire natif LinkedIn se remplit en deux clics.",
            },
          },
          {
            id: "rien",
            label: "Rien de particulier, l'offre complète",
            points: 0,
            conseil: {
              titre: "Créez une offre d'entrée",
              texte:
                "Prenez la première étape de votre prestation (état des lieux, audit, atelier d'une heure) et proposez-la seule, gratuite ou à petit prix. C'est elle que l'annonce vend, pas le contrat complet.",
            },
          },
        ],
      },
      {
        id: "cycle",
        texte: "Combien de temps s'écoule entre un premier contact et la signature ?",
        axe: "offre",
        options: [
          { id: "court", label: "Moins de trois mois, et je sais relancer entre les deux", points: 3 },
          {
            id: "moyen",
            label: "Trois à six mois",
            points: 2,
            conseil: {
              titre: "Organisez la relance sur la durée",
              texte:
                "Un contact LinkedIn se travaille : notez-le dans un CRM, prévoyez trois relances (contenu, cas client, proposition) et un remarketing sur les visiteurs du site. La campagne ne fait que la première étape.",
            },
          },
          {
            id: "long",
            label: "Plus de six mois, ou je ne sais pas",
            points: 0,
            conseil: {
              titre: "Mesurez le cycle et ne jugez pas la campagne trop tôt",
              texte:
                "Notez la date de chaque premier contact et de chaque signature pendant six mois. Avec un cycle long, la campagne se juge sur les rendez-vous qualifiés obtenus, pas sur les contrats du premier mois.",
            },
          },
        ],
      },
      {
        id: "preuve",
        texte: "Que pouvez-vous montrer pour prouver votre expertise ?",
        axe: "contenu",
        options: [
          { id: "cas", label: "Des cas clients chiffrés, des recommandations ou des références nommées", points: 3 },
          {
            id: "temoignages",
            label: "Quelques témoignages, sans chiffres ni noms",
            points: 2,
            conseil: {
              titre: "Demandez un cas client à vos meilleurs clients",
              texte:
                "Proposez à deux clients satisfaits un court cas : situation, ce que vous avez fait, ce que cela a changé, avec leur nom et leur fonction. Sur LinkedIn, une entreprise nommée vaut plus qu'un témoignage anonyme.",
            },
          },
          {
            id: "rien",
            label: "Rien de formalisé",
            points: 0,
            conseil: {
              titre: "Écrivez trois preuves cette semaine",
              texte:
                "Une preuve peut être un chiffre de votre activité, une certification, un logo client (avec son accord) ou un avant-après. Trois preuves suffisent pour une première annonce et une page d'atterrissage crédible.",
            },
          },
        ],
      },
      {
        id: "page",
        texte: "Où arrive un décideur qui clique sur votre annonce ?",
        axe: "contenu",
        options: [
          { id: "dediee", label: "Une page dédiée à l'offre, avec des preuves, un formulaire court ou un lien de rendez-vous", points: 3 },
          {
            id: "generale",
            label: "Une page de service existante, générale",
            points: 2,
            conseil: {
              titre: "Adaptez la page au message de l'annonce",
              texte:
                "Dupliquez la page et alignez-la sur l'annonce : même promesse dans le titre, le cas client cité, un seul formulaire ou un lien de rendez-vous. Un décideur qui ne retrouve pas ce qu'il a cliqué repart.",
            },
          },
          {
            id: "accueil",
            label: "La page d'accueil ou la page LinkedIn de l'entreprise",
            points: 1,
            conseil: {
              titre: "Utilisez le formulaire natif en attendant une page",
              texte:
                "Le Lead Gen Form de LinkedIn pré-remplit nom, poste et email : c'est plus efficace qu'une page d'accueil. Activez-le sur la campagne et construisez la page dédiée en parallèle.",
            },
          },
          {
            id: "rien",
            label: "Je n'ai pas de site professionnel",
            points: 0,
            conseil: {
              titre: "Commencez par le formulaire natif et une page simple",
              texte:
                "Le formulaire LinkedIn se suffit à lui-même pour collecter des contacts. Prévoyez ensuite une page d'un écran : promesse, trois preuves, un lien de rendez-vous.",
            },
          },
        ],
      },
      {
        id: "profil",
        texte: "Votre profil et votre page entreprise LinkedIn sont-ils à jour ?",
        axe: "contenu",
        options: [
          { id: "actifs", label: "Oui, avec des publications régulières et des recommandations", points: 3 },
          {
            id: "passifs",
            label: "À jour, mais peu actifs",
            points: 2,
            conseil: {
              titre: "Publiez trois fois avant de lancer",
              texte:
                "Un décideur qui voit votre annonce visite votre profil. Publiez trois contenus utiles (un cas, un conseil, une coulisse) avant la campagne, pour qu'il trouve autre chose qu'un profil silencieux.",
            },
          },
          {
            id: "non",
            label: "Non, ou pas de page entreprise",
            points: 0,
            conseil: {
              titre: "Créez ou complétez la page entreprise",
              texte:
                "La page entreprise est obligatoire pour faire de la publicité. Complétez-la : logo, bannière, description avec votre cible et votre offre, site web, puis demandez à vos clients de la suivre.",
            },
          },
        ],
      },
      {
        id: "budget",
        texte: "Quel budget mensuel pouvez-vous tenir pendant trois mois ?",
        axe: "budget",
        options: [
          { id: "plus-1500", label: "Plus de 1 500 euros par mois", points: 3 },
          {
            id: "800-1500",
            label: "Entre 800 et 1 500 euros par mois",
            points: 2,
            conseil: {
              titre: "Une seule campagne, une seule audience",
              texte:
                "LinkedIn a un coût d'entrée élevé. Avec ce budget, lancez une seule campagne sur votre meilleure offre et une audience unique ; ajoutez une seconde audience seulement quand la première donne des contacts réguliers.",
            },
          },
          {
            id: "moins-800",
            label: "Moins de 800 euros par mois",
            points: 1,
            conseil: {
              titre: "Commencez par l'organique et une campagne sur une liste de comptes",
              texte:
                "Sous ce seuil, la diffusion est irrégulière. Publiez d'abord en organique, puis testez une campagne de formulaire sur une liste d'entreprises précise : vous payez pour peu de personnes, mais les bonnes.",
            },
          },
          {
            id: "inconnu",
            label: "Je ne sais pas",
            points: 0,
            conseil: {
              titre: "Calculez à partir d'un contrat",
              texte:
                "Prenez la marge d'un contrat et le nombre de contacts nécessaires pour en signer un. Vous obtenez le coût acceptable par contact ; multipliez-le par dix contacts pour un budget mensuel de départ.",
            },
          },
        ],
      },
      {
        id: "duree",
        texte: "Combien de temps pouvez-vous laisser tourner la campagne avant de la juger ?",
        axe: "budget",
        options: [
          { id: "trois-mois", label: "Trois mois, avec un point chaque semaine", points: 2 },
          {
            id: "un-mois",
            label: "Un mois",
            points: 1,
            conseil: {
              titre: "Jugez sur les contacts qualifiés, pas sur les contrats",
              texte:
                "En un mois, un cycle B2B n'a pas le temps d'aboutir. Fixez comme critère le nombre de contacts qui correspondent à votre cible et acceptent un échange, et notez chaque semaine ce que ces contacts vous ont coûté : c'est ce chiffre qui décide de la suite.",
            },
          },
          {
            id: "semaines",
            label: "Quelques semaines, il me faut des résultats vite",
            points: 0,
            conseil: {
              titre: "LinkedIn n'est pas fait pour un résultat en quinze jours",
              texte:
                "Les premières semaines servent à trouver l'audience et le message qui répondent. Si vous avez besoin de demandes rapidement, Google Ads sur des requêtes précises répondra plus vite ; revenez sur LinkedIn avec un budget de fond et trois mois devant vous.",
            },
          },
        ],
      },
    ],
    verdicts: [
      {
        min: 70,
        titre: "LinkedIn Ads est cohérent avec votre activité",
        texte:
          "Votre cible est identifiable, votre panier absorbe le coût du clic et vous avez de quoi convaincre. Lancez une campagne sur une seule offre d'entrée avec le formulaire natif, puis ajustez sur les contacts qualifiés obtenus.",
      },
      {
        min: 40,
        titre: "Possible, mais quelques bases manquent encore",
        texte:
          "Votre cible est professionnelle, mais l'offre, la preuve ou le budget freineraient la campagne. Traitez les priorités ci-dessous avant de lancer : elles évitent de payer des clics chers pour des contacts qui n'aboutissent pas.",
      },
      {
        min: 0,
        titre: "LinkedIn Ads n'est pas la bonne étape aujourd'hui",
        texte:
          "Le coût par contact sur LinkedIn demande une cible précise, un panier suffisant et des preuves solides. Un ou plusieurs de ces points manquent. Les priorités ci-dessous vous disent quoi préparer, et quelle plateforme peut vous convenir entre-temps.",
      },
    ],
    ressource: "publicite-linkedin-ads-modele-ciblage-b2b-6-accroches",
    pole: "publicite",
    page: "/services/sea/linkedin-ads",
  },
];
