import type { Ressource } from "../types";

/**
 * Ressources gratuites du pôle (seo). Une entrée par page qui propose un
 * lead magnet : la page du pôle et chacune de ses sous-pages. Voir types.ts
 * pour les règles d'écriture : concret, actionnable, sans chiffre de résultat
 * inventé, sans garantie, sans tiret long, vouvoiement. Le nombre annoncé dans
 * chaque titre correspond au contenu (compté dans les tests de lecture du PDF).
 */
export const RESSOURCES_SEO: Ressource[] = [
  /* ------------------------------------------------------------------ */
  /* Page pôle /services/seo : le plan sur 6 mois                        */
  /* ------------------------------------------------------------------ */
  {
    slug: "seo-plan-6-mois-tpe",
    titre: "Plan SEO sur 6 mois pour une TPE : ce qu'il faut faire chaque mois, dans l'ordre",
    accroche:
      "Le calendrier que nous suivons pour un commerce, un artisan ou un cabinet : six mois, une priorité par mois, et à chaque étape ce que vous devez voir bouger dans votre Search Console.",
    format: "plan",
    apercu: [
      "Six mois, une priorité par mois, dans l'ordre où elles produisent leurs effets",
      "Pour chaque mois, les actions à mener et le repère à vérifier dans la Search Console",
      "Les erreurs qui font perdre un mois, et comment les éviter",
      "Une trame réutilisable, que vous travailliez seul, avec votre développeur ou avec une agence",
    ],
    sections: [
      {
        titre: "Avant de commencer : les accès et le point de départ",
        intro: "Une semaine, pas plus. Sans ces cinq points, les six mois se pilotent à l'aveugle.",
        points: [
          "Créez ou récupérez l'accès propriétaire à la Search Console de votre domaine (validation DNS de préférence) : c'est l'outil gratuit de Google qui vous dit ce qu'il voit de votre site.",
          "Relevez trois chiffres de départ sur les 3 derniers mois : impressions, clics, position moyenne. Notez-les dans un tableau, vous y reviendrez au mois 6.",
          "Listez vos 10 requêtes prioritaires sous la forme « métier + ville » ou « prestation + ville », par exemple « plombier Rueil-Malmaison » ou « devis ravalement Nanterre ».",
          "Vérifiez qui possède votre fiche d'établissement Google et votre nom de domaine : si ce n'est pas vous, la récupération passe avant tout le reste.",
          "Choisissez un seul indicateur de réussite pour les six mois : les demandes reçues (appels, formulaires), pas les positions ni le « trafic ».",
        ],
      },
      {
        titre: "Mois 1 : la technique, le socle",
        intro: "Rien de visible pour vos clients, mais tout le reste en dépend.",
        points: [
          "Passez chaque page clé dans PageSpeed Insights : corrigez d'abord les images non compressées et les scripts inutiles, ce sont les gains les plus rapides.",
          "Vérifiez dans la Search Console, rapport « Pages », que vos pages de service sont bien « indexées » et non « explorée, actuellement non indexée ».",
          "Donnez à chaque page un titre unique de 50 à 60 caractères contenant la requête visée, et une meta description de 150 caractères qui donne envie de cliquer.",
          "Assurez-vous qu'il n'y a qu'un seul H1 par page, qu'il reprend la requête, et que les sous-titres sont des H2 en forme de question.",
          "Testez l'affichage mobile de trois pages sur un vrai téléphone : texte lisible sans zoom, boutons cliquables au pouce, aucun bloc coupé.",
          "Posez les données structurées de base (Organization ou LocalBusiness, et FAQPage si vous avez une FAQ) et validez-les avec l'outil de test des résultats enrichis de Google.",
        ],
      },
      {
        titre: "Mois 2 : les requêtes et les pages cibles",
        intro: "Une requête, une page. C'est la règle qui évite de produire du contenu pour rien.",
        points: [
          "Tapez chacune de vos 10 requêtes dans Google en navigation privée et notez qui occupe la première page : annuaires, concurrents, fiches locales.",
          "Attribuez une page de votre site à chaque requête. Deux requêtes proches (« plombier » et « plombier urgence ») peuvent partager une page ; deux prestations différentes, non.",
          "Repérez les requêtes sans page : ce sont vos pages à créer aux mois 4 et 5, classées par nombre de demandes qu'elles peuvent apporter.",
          "Sur chaque page cible existante, ajoutez en tête une réponse directe de deux ou trois phrases à la question que pose la requête : prix, délai, zone.",
          "Supprimez ou fusionnez les pages qui visent la même requête : deux pages en concurrence se neutralisent aux yeux de Google.",
        ],
      },
      {
        titre: "Mois 3 : la fiche Google et le local",
        intro: "Pour un commerce ou un artisan, c'est souvent là que les premières demandes arrivent.",
        points: [
          "Complétez la fiche d'établissement Google à 100 % : catégorie principale exacte, services listés un par un, zone desservie, horaires, jours fériés.",
          "Ajoutez dix photos réelles (extérieur, intérieur, équipe, réalisations) prises au téléphone, sans banque d'images.",
          "Vérifiez que le nom, l'adresse et le téléphone sont écrits à l'identique sur le site, la fiche Google, Pages Jaunes et vos réseaux sociaux.",
          "Mettez en place une routine d'avis : une demande orale ou un QR code en fin de prestation, et une réponse à chaque avis reçu sous 48 h.",
          "Créez la première page ville sur votre site (celle où vous avez le plus de clients), avec des prestations réalisées sur place, et non une copie de la page d'accueil.",
        ],
      },
      {
        titre: "Mois 4 : les contenus, un par semaine",
        intro: "Le rythme compte plus que la longueur : quatre pages utiles valent mieux qu'un dossier de vingt pages publié une fois.",
        points: [
          "Publiez un contenu par semaine sur une requête sans page identifiée au mois 2 : une page de service, une page de question (« combien coûte… »), un article pratique.",
          "Rédigez chaque contenu avec un plan fixe : la réponse en trois phrases, puis le détail, les prix ou fourchettes, les délais, un exemple réel, une FAQ de trois questions.",
          "Ajoutez au moins une photo ou un schéma qui vous appartient par contenu, avec un texte alternatif descriptif.",
          "Reliez chaque nouveau contenu à la page de service concernée et inversement, avec une ancre qui décrit la page (jamais « cliquez ici »).",
          "Demandez l'indexation de chaque nouvelle page dans la Search Console (inspection d'URL) le jour de sa publication.",
        ],
      },
      {
        titre: "Mois 5 : le maillage interne et les premiers liens",
        intro: "Les liens entre vos pages, puis les liens des autres vers vous.",
        points: [
          "Dessinez votre maillage : la page d'accueil pointe vers les services, chaque service vers ses pages villes et ses questions, et retour. Aucune page ne doit rester orpheline.",
          "Ajoutez un fil d'Ariane sur toutes les pages internes, balisé en BreadcrumbList.",
          "Listez 20 sites qui pourraient parler de vous : fournisseurs, partenaires, mairie, presse locale, associations, annuaires de votre métier. Contactez-en cinq par semaine avec une demande précise.",
          "Publiez un contenu que d'autres ont intérêt à citer : un guide de prix de votre métier dans votre ville, un comparatif, une liste de vérification.",
          "Refusez tout achat de liens en masse : un lien depuis un site de votre secteur vaut plus que cent liens depuis des réseaux de sites.",
        ],
      },
      {
        titre: "Mois 6 : le bilan honnête et la suite",
        intro: "Comparer les mêmes chiffres, sur les mêmes requêtes, et décider.",
        points: [
          "Comparez vos trois chiffres de départ aux trois derniers mois : impressions, clics, position moyenne, sur les mêmes requêtes et la même durée.",
          "Comptez les demandes reçues attribuables à Google (formulaire, appel depuis le site ou la fiche) : c'est le seul chiffre qui juge le plan.",
          "Identifiez les pages entre la 11e et la 20e position dans la Search Console : ce sont vos gains les plus proches, à enrichir en priorité au mois 7.",
          "Notez ce qui n'a pas bougé et cherchez la cause avant d'ajouter du contenu : indexation, requête trop concurrentielle, page mal ciblée.",
          "Fixez le plan des six mois suivants : un contenu par semaine, cinq contacts de liens par mois, un point mensuel d'une page sur les mêmes indicateurs.",
        ],
      },
    ],
    conclusion:
      "Ce plan est celui que nous appliquons dans notre forfait de référencement naturel. Si vous préférez que nous le menions pour vous, trente minutes suffisent pour savoir par où commencer : vous parlez au fondateur de l'agence, sans engagement.",
    pole: "seo",
    page: "/services/seo",
  },

  /* ------------------------------------------------------------------ */
  /* /services/seo/referencement : les 30 pages                          */
  /* ------------------------------------------------------------------ */
  {
    slug: "seo-30-pages-site-tpe",
    titre: "Les 30 pages qu'un site de TPE doit avoir pour être trouvé sur Google",
    accroche:
      "La liste des pages qui font un site trouvable, réparties en cinq familles, avec pour chacune la requête à viser et ce qu'elle doit contenir. Des exemples pour les artisans, les commerces, les cabinets et les restaurants.",
    format: "modele",
    apercu: [
      "Les 30 pages, réparties en cinq familles : socle, prestations, villes, questions, confiance",
      "Pour chaque page, le mot clé à viser et ce qu'elle doit contenir",
      "Des exemples pour les artisans, les commerces, les cabinets et les restaurants",
      "L'ordre dans lequel les créer quand on part de zéro",
    ],
    sections: [
      {
        titre: "Les 5 pages socle, que Google lit en premier",
        intro: "À créer avant tout le reste. Elles disent qui vous êtes, où, et ce que vous vendez.",
        points: [
          "Accueil : mot clé « votre métier + votre ville » (ex. « électricien Rueil-Malmaison », « restaurant italien Nanterre »). Une phrase qui dit qui vous êtes, où, pour qui, et un lien vers chaque prestation.",
          "Page « Nos prestations » (ou « La carte », « Nos services ») : mot clé « prestations + métier ». Une liste des services avec un lien vers la page dédiée à chacun.",
          "Page « À propos » : mot clé « votre nom d'entreprise ». Votre histoire, vos qualifications, vos assurances, votre équipe : ce que Google et les IA lisent pour vous identifier.",
          "Page « Contact » : mot clé « métier + ville + contact ». Adresse complète, téléphone cliquable, horaires, carte, formulaire court, données structurées LocalBusiness.",
          "Page « Devis » ou « Réservation » : mot clé « devis + métier + ville ». Un formulaire seul, un délai de réponse écrit, ce qu'il faut préparer.",
        ],
      },
      {
        titre: "Les 8 pages de prestation, une par service vendu",
        intro:
          "Une page par prestation qui a son propre mot clé. Exemples par métier : plombier (dépannage, chauffe-eau, salle de bain), coiffeur (coupe, coloration, mariage), avocat (divorce, licenciement, bail), restaurant (déjeuner, privatisation, traiteur).",
        points: [
          "Prestation principale : mot clé « prestation + ville » (ex. « dépannage plomberie Rueil-Malmaison »). Réponse directe en tête : ce que vous faites, à quel prix, sous quel délai.",
          "Deuxième prestation : mot clé « prestation + ville ». Même plan que la première, avec ses propres photos et sa propre FAQ.",
          "Troisième prestation : mot clé « prestation + ville ». Exemples : « coloration Rueil-Malmaison », « rénovation salle de bain Nanterre », « avocat divorce Boulogne ».",
          "Quatrième prestation : mot clé « prestation + ville ». Si vous avez plus de quatre services, continuez sur le même modèle : chaque service vendu séparément mérite sa page.",
          "Prestation d'urgence ou express, si vous en avez une : mot clé « métier + urgence + ville » (ex. « serrurier urgence Puteaux »). Délai d'intervention et tarif de nuit écrits.",
          "Prestation pour les professionnels : mot clé « métier + entreprises + ville » (ex. « traiteur entreprise La Défense »). Cas d'usage, facturation, références.",
          "Prestation saisonnière ou événementielle : mot clé « prestation + occasion » (ex. « coiffure mariage 92 », « menu de Noël Nanterre »).",
          "Tarifs : mot clé « tarif + métier + ville ». Une grille ou des fourchettes de prix, la page que tout le monde cherche et que presque personne ne publie.",
        ],
      },
      {
        titre: "Les 6 pages villes, une par zone où vous avez des clients",
        intro:
          "Une page par ville réellement desservie, avec un contenu propre : prestations réalisées sur place, accès, délais. Jamais une copie où seul le nom de la ville change.",
        points: [
          "Ville principale : mot clé « métier + ville principale ». Vos réalisations sur place, le quartier, l'accès, un avis client de cette ville.",
          "Deuxième ville : mot clé « métier + ville ». Exemple : « paysagiste Saint-Cloud ». Au moins deux réalisations ou clients de cette ville nommés.",
          "Troisième ville : mot clé « métier + ville ». Choisissez les villes par le nombre de clients réels, pas par leur taille : une page sans réalisation ne se classe pas.",
          "Quatrième ville : mot clé « métier + ville ». Reliez chaque page ville aux prestations que vous y proposez, et chaque prestation aux villes concernées.",
          "Département ou zone : mot clé « métier + numéro de département » (ex. « couvreur 92 », « traiteur Hauts-de-Seine »). La page qui relie toutes les villes.",
          "« Près de moi » : mot clé « métier + près de moi ». Une page qui explique votre zone d'intervention, avec une carte et vos délais de déplacement.",
        ],
      },
      {
        titre: "Les 6 pages de questions, celles que vos clients tapent",
        intro: "Le format le plus simple à classer sur Google et à citer par une IA : une question en titre, la réponse en trois phrases, puis le détail.",
        points: [
          "« Combien coûte + prestation » : mot clé « prix + prestation + année » (ex. « prix ravalement façade 2026 »). Fourchettes réelles, ce qui fait varier le prix.",
          "« Combien de temps dure + prestation » : mot clé « délai + prestation ». Durée d'intervention, délai de rendez-vous, étapes.",
          "« Comment choisir + métier » : mot clé « choisir + métier + ville ». Les questions à poser, les assurances à vérifier, les signes d'un mauvais devis.",
          "« Faut-il + question fréquente » (ex. « faut-il un permis pour une pergola », « faut-il réserver le dimanche ») : mot clé « la question telle que tapée ».",
          "« Prestation A ou prestation B » : mot clé « A ou B » (ex. « PVC ou aluminium », « bilan ou séance découverte »). Un comparatif honnête qui renvoie vers vos deux pages.",
          "« Que faire en cas de + problème » : mot clé « problème + que faire » (ex. « fuite d'eau que faire », « dent cassée que faire »). Les gestes immédiats, puis quand appeler.",
        ],
      },
      {
        titre: "Les 5 pages de confiance, qui font décider",
        intro: "Elles se classent moins, mais elles transforment un visiteur en demande. Google et les IA y lisent aussi vos preuves.",
        points: [
          "Avis clients : mot clé « avis + nom d'entreprise ». Vos avis Google intégrés ou recopiés avec date et prénom, lien vers la fiche Google, réponses visibles.",
          "Réalisations ou galerie : mot clé « réalisations + métier + ville ». Photos avant et après, lieu, durée, prix indicatif pour chaque chantier ou prestation.",
          "Étude de cas ou témoignage détaillé : mot clé « nom du client ou du projet ». Le problème, ce que vous avez fait, le résultat constaté par le client.",
          "Équipe et qualifications : mot clé « métier + certifié + ville » (ex. « électricien Qualifelec Rueil », « ostéopathe diplômé Nanterre »). Diplômes, labels, assurances, avec les numéros.",
          "Zone d'intervention et horaires : mot clé « métier + ouvert dimanche » ou « métier + horaires + ville ». Ce que Google affiche aussi sur la fiche, écrit noir sur blanc sur le site.",
        ],
      },
    ],
    conclusion:
      "Vous n'avez pas besoin des 30 pages le premier mois : commencez par le socle et vos deux prestations principales, puis ajoutez une page par semaine. Si vous voulez que nous rédigions ces pages pour vous, trente minutes suffisent pour fixer la liste et l'ordre, sans engagement.",
    pole: "seo",
    page: "/services/seo/referencement",
  },

  /* ------------------------------------------------------------------ */
  /* /services/seo/audit : la grille en 40 points                        */
  /* ------------------------------------------------------------------ */
  {
    slug: "seo-grille-audit-40-points",
    titre: "Grille d'audit SEO en 40 points, classés par gravité, avec la correction attendue pour chacun",
    accroche:
      "La grille que nous utilisons pour passer un site au crible : cinq niveaux de gravité, du blocage qui rend le site invisible à la finition qui le rend citable par les IA. Pour chaque point, où regarder et quoi corriger.",
    format: "checklist",
    apercu: [
      "40 vérifications classées en cinq niveaux, du bloquant à la finition",
      "Pour chaque point : où regarder, et la correction attendue",
      "Les outils gratuits qui suffisent : Search Console, PageSpeed Insights, un navigateur",
      "Un ordre de traitement : on ne touche pas au niveau 3 tant que le niveau 1 n'est pas réglé",
    ],
    sections: [
      {
        titre: "Niveau 1, bloquant : Google ne peut pas lire ou indexer le site",
        intro: "Un seul de ces points non réglé annule tout le travail des niveaux suivants.",
        points: [
          "Le site répond en HTTPS et le HTTP redirige vers lui (tapez l'adresse en http://). Correction : certificat et redirection 301 côté hébergeur.",
          "Le fichier robots.txt n'interdit pas tout (« Disallow: / ») ni les dossiers utiles. Correction : ne bloquer que l'administration et les pages de recherche interne.",
          "Aucune balise « noindex » sur les pages de service ni sur l'accueil (inspection d'URL dans la Search Console). Correction : retirer la balise ou l'option « décourager les moteurs » du CMS.",
          "Le site n'existe qu'à une seule adresse : avec ou sans www, avec ou sans barre finale, en minuscules. Correction : redirections 301 vers une version unique.",
          "Le sitemap XML existe, est déclaré dans la Search Console et ne liste que des pages qui répondent. Correction : régénérer le sitemap, retirer les pages supprimées.",
          "La Search Console ne signale aucune action manuelle ni problème de sécurité. Correction : traiter l'alerte avant tout autre travail, puis demander un réexamen.",
          "Les pages clés se chargent sans erreur serveur ni délai de plusieurs secondes (Search Console, « Statistiques d'exploration »). Correction : hébergement, cache, extensions fautives.",
          "Le contenu principal est dans le HTML et non chargé uniquement par un script (afficher le code source : le texte doit s'y trouver). Correction : rendu côté serveur ou pré-rendu.",
        ],
      },
      {
        titre: "Niveau 2, grave : Google lit le site mais ne sait pas pour quoi le classer",
        intro: "Le site est indexé, mais aucune page ne porte clairement une requête.",
        points: [
          "Chaque page a un titre unique (balise title) de 50 à 60 caractères qui contient sa requête. Correction : réécrire les titres en double ou génériques (« Accueil », « Page 2 »).",
          "Un seul H1 par page, différent de celui des autres pages. Correction : passer les H1 secondaires en H2, retirer le H1 posé sur le logo.",
          "Chaque prestation vendue a sa propre page, avec sa propre requête. Correction : découper la page « services » fourre-tout en une page par service.",
          "Aucune page en double : même contenu à deux adresses, pages de tri, versions imprimables. Correction : balise canonical ou suppression avec redirection.",
          "Les pages ont un contenu réel : plusieurs paragraphes propres, pas une photo et trois lignes. Correction : enrichir ou fusionner les pages vides.",
          "Les pages importantes sont à moins de trois clics de l'accueil et reçoivent au moins un lien interne. Correction : menu, maillage depuis les pages de service, fil d'Ariane.",
          "Aucune page importante ne renvoie une erreur 404 depuis un lien interne ou externe (rapport « Pages » de la Search Console). Correction : redirection 301 vers la page équivalente.",
          "Les textes sont écrits pour un lecteur, sans répétition mécanique du mot clé ni contenu copié d'un autre site. Correction : réécrire, en gardant la requête dans le titre, le H1 et le premier paragraphe.",
        ],
      },
      {
        titre: "Niveau 3, important : la page se classe, mais mal",
        intro: "Ce qui sépare la page 2 de la page 1, et le clic de l'impression.",
        points: [
          "La meta description fait 150 caractères, contient la requête et un motif de cliquer. Correction : une description par page, sans phrase générique.",
          "Le premier paragraphe répond directement à la question de la requête : prix, délai, zone. Correction : remonter la réponse au-dessus du discours de présentation.",
          "Les sous-titres H2 sont des questions que tapent les clients (« Combien coûte… », « Comment… »). Correction : renommer les H2 décoratifs.",
          "Le score mobile de PageSpeed Insights n'est pas dans le rouge et le plus grand élément s'affiche en moins de 2,5 s. Correction : compresser les images, différer les scripts, alléger la page.",
          "Le site est lisible sur un téléphone : texte sans zoom, boutons espacés, aucun bloc plus large que l'écran. Correction : mise en page adaptative, police d'au moins 16 px.",
          "Les images ont un texte alternatif descriptif et un nom de fichier lisible (« cuisine-renovee-nanterre.jpg »). Correction : renommer et renseigner l'attribut alt.",
          "Les pages ont une date visible et à jour (mise à jour, année dans les prix). Correction : afficher la date de mise à jour et actualiser les chiffres.",
          "Les liens internes utilisent une ancre qui décrit la page cible, jamais « cliquez ici » ou « en savoir plus ». Correction : réécrire les ancres.",
        ],
      },
      {
        titre: "Niveau 4, à améliorer : ce qui manque pour les recherches locales et la confiance",
        intro: "Pour un commerce, un artisan ou un cabinet, c'est ici que se jouent la plupart des demandes.",
        points: [
          "La fiche d'établissement Google existe, est vérifiée et vous en êtes propriétaire. Correction : revendiquer la fiche avec votre compte Google, jamais celui d'un prestataire.",
          "Le nom, l'adresse et le téléphone sont identiques au caractère près sur le site, la fiche Google et les annuaires. Correction : harmoniser, supprimer les fiches en double.",
          "La catégorie principale de la fiche est la plus précise possible (« Plombier » et non « Entreprise de bâtiment »). Correction : choisir la catégorie exacte, ajouter les secondaires.",
          "La fiche a des avis récents (moins de trois mois) et chaque avis a une réponse. Correction : routine de demande d'avis, réponse sous 48 h.",
          "Le site porte des données structurées LocalBusiness ou Organization valides (test des résultats enrichis de Google). Correction : ajouter le balisage JSON-LD sur toutes les pages.",
          "Une page par ville réellement desservie, avec un contenu propre. Correction : créer les pages manquantes, supprimer les pages villes copiées-collées.",
          "Les pages de service affichent des prix, des fourchettes ou un délai. Correction : écrire ce que vous dites au téléphone.",
          "Le site présente des preuves vérifiables : avis avec date, réalisations avec lieu, qualifications avec numéro. Correction : ajouter ce qui manque, retirer les témoignages sans nom.",
        ],
      },
      {
        titre: "Niveau 5, finitions : ce qui rend le site citable par les IA",
        intro: "À traiter en dernier, mais à traiter : ChatGPT, Claude et Perplexity lisent les mêmes pages que Google.",
        points: [
          "Le robots.txt n'interdit pas GPTBot, ClaudeBot, PerplexityBot ni Google-Extended. Correction : retirer les blocages hérités d'un modèle copié.",
          "Un fichier llms.txt à la racine résume l'activité, les services, les prix et les pages importantes. Correction : rédiger le fichier en texte simple, le tenir à jour.",
          "Chaque page de service a une FAQ de trois à cinq questions, dans le HTML, balisée en FAQPage. Correction : ajouter les questions réellement posées par les clients.",
          "Les données structurées Service, FAQPage et BreadcrumbList sont valides et cohérentes avec le texte visible. Correction : corriger les erreurs signalées par le test de Google.",
          "Les faits sont datés et précis (prix 2026, délai en jours, zone en villes) plutôt que « tarifs attractifs » ou « intervention rapide ». Correction : remplacer chaque adjectif par un chiffre.",
          "Une page « À propos » identifie l'entreprise : raison sociale, adresse, SIRET, responsable, assurances. Correction : compléter la page et les mentions légales.",
          "Les balises Open Graph (titre, description, image) sont renseignées pour les partages. Correction : une image par page ou une image par défaut de 1200 × 630 px.",
          "Les journaux du serveur ou l'hébergeur montrent des passages de Googlebot et des robots d'IA sur les pages clés. Correction : si aucun passage, revenir aux niveaux 1 et 2.",
        ],
      },
    ],
    conclusion:
      "Traitez la grille dans l'ordre : un point de niveau 1 non réglé annule le travail des niveaux suivants. Si vous voulez que nous passions votre site au crible avec cette grille, sur tout le site et avec vos positions réelles, trente minutes suffisent pour cadrer l'audit, sans engagement.",
    pole: "seo",
    page: "/services/seo/audit",
  },

  /* ------------------------------------------------------------------ */
  /* /services/seo/seo-local : la fiche Google en 32 points + le script  */
  /* ------------------------------------------------------------------ */
  {
    slug: "seo-local-fiche-google-32-points",
    titre: "Checklist de la fiche Google en 32 points, avec le script pour obtenir des avis",
    accroche:
      "Tout ce qu'une fiche d'établissement Google doit contenir pour sortir dans les trois fiches de votre ville, rubrique par rubrique, puis les mots exacts pour demander un avis sans gêne, au comptoir ou en fin de chantier.",
    format: "checklist",
    apercu: [
      "32 points à cocher, de la propriété de la fiche aux publications mensuelles",
      "Ce qui pèse dans le classement local, et ce qui rassure le client qui hésite à appeler",
      "Le script en cinq répliques pour demander un avis, avec la réponse aux deux objections courantes",
      "Les erreurs qui font suspendre une fiche : faux avis, mots clés dans le nom, adresse de boîte postale",
    ],
    sections: [
      {
        titre: "Propriété et identité (7 points)",
        intro: "Tant que la fiche n'est pas à vous et exacte, rien d'autre n'a d'effet.",
        points: [
          "Vous êtes propriétaire principal de la fiche avec votre compte Google, pas un ancien prestataire ni un salarié parti. Vérifiez dans la rubrique « Utilisateurs » de la fiche.",
          "La fiche est vérifiée (courrier, vidéo ou téléphone) : sans vérification, elle n'apparaît pas dans les trois fiches.",
          "Le nom est votre nom commercial exact, sans ville ni mot clé ajouté (« Boulangerie Martin », pas « Boulangerie Martin Rueil pain artisanal ») : Google suspend les fiches qui trichent.",
          "L'adresse est celle où vous recevez du public ; si vous vous déplacez chez les clients, masquez-la et déclarez une zone desservie. Jamais de boîte postale.",
          "Le numéro de téléphone est une ligne directe que quelqu'un décroche, identique à celui du site.",
          "Le site web renseigné pointe vers votre page d'accueil, ou vers la page ville correspondante si vous avez plusieurs établissements.",
          "La description (750 caractères) dit ce que vous faites, pour qui, où, depuis quand, avec vos prestations principales en toutes lettres.",
        ],
      },
      {
        titre: "Catégories, services et zone (7 points)",
        intro: "C'est avec ces rubriques que Google décide sur quelles recherches vous montrer.",
        points: [
          "La catégorie principale est la plus précise disponible pour votre activité première (« Ostéopathe », pas « Praticien de santé »).",
          "Deux à quatre catégories secondaires couvrent vos autres activités réelles, sans en ajouter pour « ratisser large ».",
          "Chaque service est listé un par un dans la rubrique « Services », avec une description d'une phrase et un prix ou une fourchette quand c'est possible.",
          "La zone desservie liste les villes où vous intervenez vraiment, dix au maximum, sans le département entier.",
          "Les horaires sont exacts et les horaires spéciaux (jours fériés, vacances) sont saisis à l'avance : une fiche « fermé » un jour d'ouverture fait perdre des appels.",
          "Les attributs sont renseignés : accessibilité, moyens de paiement, sur rendez-vous, prestations sur place ou à distance.",
          "Le lien de prise de rendez-vous ou de devis pointe vers la page correspondante du site, pas vers l'accueil.",
        ],
      },
      {
        titre: "Photos et visuels (5 points)",
        intro: "Une fiche vivante se repère à ses photos, par Google comme par vos clients.",
        points: [
          "Le logo et la photo de couverture sont à jour et nets, au format demandé par Google (carré pour le logo).",
          "Au moins dix photos réelles : devanture, intérieur, équipe au travail, réalisations, avant et après, prises au téléphone en lumière du jour.",
          "Une photo nouvelle par mois au minimum.",
          "Aucune image de banque, aucune photo avec texte ou numéro incrusté : elles sont rejetées ou ignorées.",
          "Les photos ajoutées par des clients sont vérifiées chaque mois ; une photo trompeuse ou hors sujet est signalée.",
        ],
      },
      {
        titre: "Avis et réponses (7 points)",
        intro: "La note, le nombre et la fraîcheur des avis pèsent dans le classement local et dans la décision d'appeler.",
        points: [
          "Un avis récent au moins par mois : la régularité compte davantage qu'un pic ponctuel.",
          "Chaque avis, bon ou mauvais, a une réponse signée, personnalisée, en moins de 48 h.",
          "La réponse à un avis négatif reste factuelle et calme, propose un contact direct, et ne révèle rien de personnel sur le client.",
          "Aucun avis acheté, échangé contre une remise ou rédigé par un proche : c'est interdit par Google et par la loi, et la fiche peut être suspendue.",
          "Le lien court d'avis (« Obtenir plus d'avis » dans la fiche) est enregistré et prêt à être envoyé par email ou affiché en QR code.",
          "Les avis qui nomment une prestation et une ville sont les plus utiles : demandez au client de dire ce qu'il a fait faire et où.",
          "Un avis manifestement faux ou hors sujet est signalé à Google avec le motif exact, sans réponse agressive.",
        ],
      },
      {
        titre: "Publications, questions et suivi (6 points)",
        intro: "Ce qui montre à Google que la fiche est tenue, et à vous si elle progresse.",
        points: [
          "Une publication Google par mois au minimum : une réalisation, une offre datée, une nouveauté, avec photo et bouton.",
          "La rubrique « Questions et réponses » contient vos cinq questions les plus fréquentes, que vous avez posées et auxquelles vous avez répondu vous-même.",
          "La messagerie est activée seulement si quelqu'un répond dans l'heure ; sinon, elle reste désactivée.",
          "Les statistiques de la fiche (vues, appels, itinéraires, clics vers le site) sont relevées chaque mois dans un tableau.",
          "Les fiches en double (ancienne adresse, ancien nom) sont fusionnées ou marquées comme fermées définitivement.",
          "Nom, adresse et téléphone sont identiques au caractère près sur le site, Pages Jaunes, Facebook et les annuaires de votre métier.",
        ],
      },
      {
        titre: "Le script pour obtenir un avis après chaque prestation",
        intro:
          "À dire à voix haute au moment où le client est satisfait : fin de prestation, remise des clés, paiement. Cinq répliques, puis les deux objections courantes.",
        points: [
          "Ouvrir sur le résultat, pas sur la demande : « Vous êtes content du résultat ? » Attendez la réponse : si elle est tiède, ne demandez pas d'avis, demandez ce qui manque.",
          "Expliquer l'enjeu en une phrase vraie : « Les avis Google, c'est ce qui fait qu'on nous trouve. Un avis de vous nous aiderait vraiment. »",
          "Rendre le geste immédiat : « Si vous avez trente secondes, approchez votre téléphone de la carte, ça ouvre directement la page » ou « je vous envoie le lien tout de suite ». Ne jamais dire « quand vous aurez le temps ».",
          "Guider le contenu sans le dicter : « Dites simplement ce qu'on a fait, et à quel endroit. » La prestation et la ville : c'est ce que Google et vos futurs clients lisent.",
          "Remercier et répondre : « Merci, je vous réponds dessus dès ce soir. » Puis répondre le jour même. Objection « je n'ai pas de compte Google » : « Un compte Gmail suffit, sinon pas de souci. » Objection « je le ferai plus tard » : « Je vous envoie le lien maintenant, comme ça vous l'avez. »",
        ],
      },
    ],
    conclusion:
      "Une fiche complète et des avis réguliers font l'essentiel du référencement local. Si vous voulez que nous reprenions votre fiche et que nous posions la collecte d'avis avec MerciAvis, notre outil, trente minutes suffisent pour faire le diagnostic, sans engagement.",
    pole: "seo",
    page: "/services/seo/seo-local",
  },

  /* ------------------------------------------------------------------ */
  /* /services/seo/visibilite-ia : 10 questions + modèle de page         */
  /* ------------------------------------------------------------------ */
  {
    slug: "seo-ia-10-questions-modele-page",
    titre:
      "Être cité par ChatGPT et Perplexity : les 10 questions à poser aux IA sur votre métier et le modèle de page qui se fait citer",
    accroche:
      "Un relevé en dix questions pour savoir, aujourd'hui, si les assistants citent votre entreprise ou vos concurrents, puis la structure de page que ces outils reprennent le plus volontiers, bloc par bloc.",
    format: "modele",
    apercu: [
      "Les 10 questions à poser telles quelles à ChatGPT, Perplexity et Google, avec une grille pour noter les réponses",
      "Le modèle de page qui se fait citer : ordre des blocs, longueur, faits à y mettre",
      "Les réglages techniques à vérifier une fois : robots d'IA, données structurées, llms.txt",
      "Un relevé mensuel reproductible, sans outil payant",
    ],
    sections: [
      {
        titre: "Avant de poser les questions : le protocole",
        intro: "Dix minutes, une fois par mois, toujours de la même façon.",
        points: [
          "Utilisez une fenêtre de navigation privée et, sur ChatGPT, activez la recherche web : sans elle, le modèle répond de mémoire et ne cite pas de source.",
          "Posez chaque question à trois outils : ChatGPT avec recherche, Perplexity, et Google (pour voir si un aperçu IA s'affiche en haut des résultats).",
          "Remplacez « métier » et « ville » par vos termes exacts, tels que vos clients les diraient à voix haute : « un plombier à Rueil », pas « prestations de plomberie ».",
          "Notez la date, l'outil, la question, les entreprises citées et les adresses de pages affichées en source : un tableau de cinq colonnes suffit.",
          "Refaites le relevé chaque mois, le même jour, avec les mêmes questions : c'est l'évolution qui compte, pas une réponse isolée.",
        ],
      },
      {
        titre: "Les 10 questions à poser aux IA sur votre métier",
        intro: "À copier telles quelles, en remplaçant les crochets.",
        points: [
          "« Quel est le meilleur [métier] à [ville] ? » : la question la plus posée, celle où les IA citent des noms.",
          "« Combien coûte [prestation] à [ville] en 2026 ? » : les IA cherchent une page qui donne des chiffres.",
          "« [Métier] à [ville] ouvert le dimanche » ou « en urgence » : la question qui teste vos horaires et votre fiche Google.",
          "« Comment choisir un [métier] à [ville] ? » : la question qui teste vos pages de conseil et votre page À propos.",
          "« [Nom de votre entreprise] avis » : ce que l'IA sait de vous, et d'où elle le tient.",
          "« [Nom de votre entreprise] ou [nom d'un concurrent] ? » : une comparaison directe, révélatrice des informations qui manquent sur votre site.",
          "« Quel [métier] recommandez-vous près de [quartier ou ville voisine] ? » : la question de proximité, qui teste vos pages villes.",
          "« Faut-il [question fréquente de vos clients] ? » (ex. « faut-il un devis pour changer un chauffe-eau ») : la question de conseil qui précède l'achat.",
          "« Quel délai pour [prestation] à [ville] ? » : la question qui cherche une page avec des délais écrits.",
          "« [Prestation] à [ville] pour une entreprise » ou « pour un particulier » : la question qui teste si vos cibles sont nommées sur le site.",
        ],
      },
      {
        titre: "Lire les réponses : la grille de notation",
        intro: "Un score pour suivre, et surtout des pages à retravailler.",
        points: [
          "Cité en premier, cité parmi d'autres, non cité : notez 2, 1 ou 0 par question et par outil, et faites le total sur 60.",
          "Pour chaque citation, relevez la page source exacte : est-ce votre site, votre fiche Google, un annuaire, un article de presse ?",
          "Quand un concurrent est cité, ouvrez la page source : repérez ce qu'elle contient et que la vôtre n'a pas (prix, FAQ, adresse, date).",
          "Quand l'IA se trompe sur vous (mauvaise adresse, service que vous ne faites plus), cherchez la source de l'erreur : un ancien annuaire, une fiche en double, une page périmée.",
          "Classez les dix questions par importance commerciale : la première page à retravailler est celle qui répond à la question la plus rentable où vous n'êtes pas cité.",
        ],
      },
      {
        titre: "Le modèle de page qui se fait citer, bloc par bloc",
        intro: "Une page par question importante. Les blocs, dans cet ordre, du haut vers le bas.",
        points: [
          "Bloc 1, le titre : la question telle que tapée, en H1 (« Combien coûte un ravalement de façade à Nanterre en 2026 ? »).",
          "Bloc 2, la réponse directe : deux ou trois phrases juste sous le titre, avec le chiffre, le délai ou le nom de la ville. C'est ce passage que l'IA reprend.",
          "Bloc 3, l'identité : une ligne qui dit qui répond (« Réponse de [entreprise], [métier] à [ville] depuis [année] ») avec un lien vers la page À propos.",
          "Bloc 4, le détail : trois à six sous-titres H2 en forme de question, chacun suivi d'une réponse courte puis du développement.",
          "Bloc 5, le tableau ou la liste : prix par cas, délais par situation, étapes numérotées. Les IA reprennent volontiers les tableaux.",
          "Bloc 6, l'exemple réel : une réalisation datée et localisée, avec une photo qui vous appartient.",
          "Bloc 7, la FAQ : trois à cinq questions voisines, réponses de deux phrases, balisées en FAQPage dans le code.",
          "Bloc 8, la suite : un lien vers la page de service concernée et un lien vers le contact, avec des ancres descriptives. Date de mise à jour visible en bas.",
        ],
      },
      {
        titre: "Les faits à écrire dans la page",
        intro: "Une IA cite ce qu'elle peut vérifier. Chaque adjectif remplacé par un chiffre est une chance de plus.",
        points: [
          "Des prix ou des fourchettes avec l'année : « entre 45 et 70 € de l'heure en 2026 », jamais « tarifs attractifs ».",
          "Des délais en jours ou en heures : « rendez-vous sous 48 h, intervention en 2 h en urgence ».",
          "Une zone en villes nommées : « Rueil-Malmaison, Nanterre, Suresnes, Saint-Cloud », pas « toute l'Île-de-France ».",
          "Des preuves vérifiables : années d'activité, qualification avec son numéro, assurance, nombre d'avis Google avec la note réelle.",
          "Une date de mise à jour et une signature d'entreprise sur chaque page : une IA préfère une source identifiée et récente.",
        ],
      },
      {
        titre: "Le socle technique, à vérifier une fois",
        intro: "Cinq vérifications, sans outil payant.",
        points: [
          "Ouvrez votre-site.fr/robots.txt : aucune ligne ne doit interdire GPTBot, ClaudeBot, PerplexityBot ni Google-Extended.",
          "Créez votre-site.fr/llms.txt : un fichier texte qui résume l'activité, les services, les prix, la zone et la liste de vos pages importantes.",
          "Validez vos données structurées (Organization ou LocalBusiness, Service, FAQPage) avec l'outil de test des résultats enrichis de Google.",
          "Vérifiez dans la Search Console que vos pages de question sont indexées : les aperçus IA de Google reposent sur l'index Google classique.",
          "Contrôlez que le texte de la page est dans le code source (clic droit, afficher la source) et non chargé après coup par un script.",
        ],
      },
    ],
    conclusion:
      "Relevé fait, page rédigée : dans un mois, reposez les dix questions. Si vous voulez que nous menions ce travail sur toutes vos pages, avec un relevé mensuel des citations, il est inclus dans notre forfait SEO, sans supplément. Trente minutes suffisent pour faire le point, sans engagement.",
    pole: "seo",
    page: "/services/seo/visibilite-ia",
  },
];
