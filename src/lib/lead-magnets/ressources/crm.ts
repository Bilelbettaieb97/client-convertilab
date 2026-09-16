import type { Ressource } from "../types";

/**
 * Ressources gratuites du pôle (crm). Une entrée par page qui propose un
 * lead magnet : la page du pôle et chacune de ses sous-pages. Voir types.ts
 * pour les règles d'écriture.
 *
 * Cinq ressources : le diagnostic en 25 questions (page pôle), le modèle de
 * pipeline (création), les 20 automatisations (optimisation), la procédure
 * de nettoyage (nettoyage) et l'inventaire des tâches IA (intégration IA).
 * Aucun chiffre de résultat, aucune promesse : chaque point est un geste,
 * une vérification ou une règle à écrire, valable quel que soit le CRM.
 */
export const RESSOURCES_CRM: Ressource[] = [
  {
    slug: "crm-diagnostic-25-questions",
    titre: "Diagnostic CRM en 25 questions : savoir en 15 minutes si votre suivi des demandes fuit, et où",
    accroche:
      "Vingt-cinq vérifications à faire vous-même, sur vos vrais outils, pour repérer l'endroit exact où les demandes se perdent avant de choisir un CRM.",
    format: "checklist",
    apercu: [
      "Six parties : les canaux, la boîte de réception, le traitement, les devis, les contacts, les chiffres",
      "Chaque question vient avec la vérification à faire et ce qu'un « non » signifie",
      "Un mode d'emploi pour lire le résultat : par où commencer, sans changer d'outil pour le principe",
    ],
    sections: [
      {
        titre: "D'où viennent vos demandes",
        intro: "Une demande qu'on ne sait pas d'où elle vient est une demande qu'on ne saura pas relancer.",
        points: [
          "Listez tous les canaux par lesquels une demande peut arriver : formulaire du site, téléphone, email direct, messages Instagram ou Facebook, Google Ads, Meta Ads, bouche-à-oreille. Si vous hésitez sur un canal, c'est qu'il n'est surveillé par personne.",
          "Pour chaque canal, notez le nom de la personne qui reçoit la demande en premier. Un canal sans nom en face est une demande qui attend.",
          "Vérifiez qu'une demande venue d'une campagne payante est reconnaissable comme telle (source notée quelque part). Sinon, vous ne saurez jamais ce que la campagne rapporte.",
          "Prenez les dix dernières demandes reçues : pouvez-vous dire d'où venait chacune ? Si vous en perdez trois, votre suivi des sources fuit.",
        ],
      },
      {
        titre: "Où elles atterrissent",
        points: [
          "Ouvrez la boîte mail qui reçoit les formulaires du site : combien de demandes non lues ou sans réponse datent de plus de deux jours ?",
          "Cherchez une demande reçue il y a un mois : la retrouvez-vous en moins d'une minute, avec ce qui a été répondu ? Si non, il n'y a pas d'historique.",
          "Une demande téléphonique prise par un collègue est-elle écrite quelque part que vous pouvez consulter ? Le carnet personnel ne compte pas.",
          "Les messages reçus sur Instagram, Facebook ou Google sont-ils recopiés au même endroit que les autres demandes ? Sinon, comptez-les à part : ce sont vos demandes invisibles.",
        ],
      },
      {
        titre: "Qui les traite, et quand",
        points: [
          "Mesurez le délai entre la réception d'une demande et la première réponse, sur les cinq dernières. Notez le pire des cinq : c'est celui que vos prospects retiennent.",
          "Que se passe-t-il pour une demande reçue le vendredi à 19 h ? Écrivez la réponse exacte : si c'est « on la voit lundi », le prospect a déjà appelé un concurrent.",
          "Quand la personne qui traite les demandes est absente, quelqu'un d'autre voit-il les demandes en attente sans avoir à lui demander ?",
          "Chaque demande a-t-elle une « prochaine action » écrite (rappeler, envoyer le devis, attendre la réponse) avec une date ? Sans date, il n'y a pas de suivi, seulement des intentions.",
        ],
      },
      {
        titre: "Les devis et leur suite",
        intro: "C'est presque toujours ici que la fuite est la plus coûteuse.",
        points: [
          "Comptez les devis envoyés sur les trois derniers mois, puis ceux restés sans aucune réponse. Si vous ne pouvez pas compter, c'est la première fuite.",
          "Pour un devis sans réponse, qui relance, au bout de combien de jours, et par quel moyen ? Si la réponse est « ça dépend », personne ne relance.",
          "Vérifiez qu'un devis relancé une fois l'est une seconde fois : beaucoup de réponses arrivent après la deuxième ou la troisième relance, pas après la première.",
          "Savez-vous pourquoi les devis perdus ont été perdus (prix, délai, concurrent, silence) ? Un motif noté par devis perdu, sinon vous ne pouvez rien corriger.",
          "Vos rendez-vous reçoivent-ils un rappel la veille ? Notez le nombre de rendez-vous manqués le mois dernier.",
        ],
      },
      {
        titre: "Vos contacts et vos données",
        points: [
          "Où vivent vos contacts : tableur, boîte mail, téléphone, ancien outil ? S'il y a plus d'un endroit, il y a des doublons et des versions contradictoires.",
          "Prenez dix contacts au hasard : pour combien avez-vous un email valide, un téléphone au même format et la date du dernier échange ?",
          "Un client qui a signé il y a deux ans est-il distinguable d'un prospect qui n'a jamais répondu ? Si tout le monde a le même statut, vous ne pouvez ni relancer ni fidéliser.",
          "Le fichier de contacts est-il à votre nom, exportable en un clic, et sauvegardé ailleurs que sur un seul ordinateur ?",
        ],
      },
      {
        titre: "Ce que vous savez de vos canaux",
        points: [
          "Pour chaque canal, pouvez-vous dire combien de demandes il a apportées le mois dernier ? Sans ce chiffre, tout budget marketing est une intuition.",
          "Pouvez-vous relier une vente à la demande qui l'a précédée, et donc au canal d'origine ?",
          "Connaissez-vous le délai habituel entre la première demande et la signature chez vous ? C'est lui qui fixe la durée de vos relances.",
          "Regardez le mois dernier : combien de demandes se sont terminées sans décision, ni signées, ni perdues, ni relancées ? C'est le chiffre à afficher dans votre CRM dès le premier jour.",
        ],
      },
    ],
    conclusion:
      "Comptez vos « non ». Trois ou plus dans une même partie, et c'est par là que vos demandes fuient : commencez par cette partie, pas par le choix de l'outil. Si vous voulez que nous fassions ce diagnostic avec vous, sur vos outils réels, une journée suffit et le plan écrit reste à vous.",
    pole: "crm",
    page: "/services/crm",
  },

  {
    slug: "crm-creation-pipeline-6-etapes-15-champs",
    titre: "Modèle de pipeline de vente en 6 étapes et les 15 champs à créer dans votre CRM, quel qu'il soit",
    accroche:
      "Le pipeline et les champs que nous mettons en place chez nos clients, à recopier tels quels dans HubSpot, Salesforce, Pipedrive, Zoho CRM, Brevo, Sellsy, Axonaut ou monday CRM.",
    format: "modele",
    apercu: [
      "Les 6 étapes, avec la condition d'entrée et de sortie de chacune",
      "Les 15 champs, répartis entre le contact, l'affaire et le suivi, avec leur type",
      "Les règles de passage pour qu'une carte n'attende jamais sans action datée",
      "La préparation de l'import de vos contacts, colonne par colonne, et où créer les champs selon votre CRM",
    ],
    sections: [
      {
        titre: "Les 6 étapes du pipeline",
        intro: "Une étape se définit par ce qui y fait entrer une demande et ce qui l'en fait sortir. Sans ces deux conditions, les cartes s'entassent.",
        points: [
          "Étape 1, Nouvelle demande. Entrée : toute demande reçue, quel que soit le canal, créée dans la journée. Sortie : premier contact établi (appel, email de réponse), ou demande hors cible fermée avec un motif.",
          "Étape 2, Premier contact. Entrée : un échange a eu lieu. Sortie : le besoin est compris et écrit dans la fiche, et la date du rendez-vous ou de l'envoi du devis est fixée.",
          "Étape 3, Besoin qualifié. Entrée : prestation, lieu, délai et budget connus. Sortie : devis rédigé et envoyé, ou demande fermée parce qu'elle ne correspond pas à ce que vous vendez.",
          "Étape 4, Devis envoyé. Entrée : le devis est parti, avec sa date et son montant renseignés. Sortie : réponse reçue, ou trois jours écoulés sans réponse.",
          "Étape 5, Relance en cours. Entrée : première relance envoyée après trois jours sans réponse. Sortie : réponse du prospect, ou fin de la séquence de relance prévue.",
          "Étape 6, Décision prise. Gagné si le devis est accepté par écrit : la fiche passe en client et la prestation démarre. Perdu sinon, avec un motif obligatoire (prix, délai, concurrent, sans réponse, hors cible) : sans motif, la carte ne peut pas être fermée.",
        ],
      },
      {
        titre: "Les 5 champs sur le contact",
        points: [
          "Prénom et nom, en deux champs séparés : un seul champ « Nom » interdit tout tri et toute personnalisation des emails.",
          "Email, au format vérifié à la saisie (le CRM refuse une adresse sans arobase) : c'est le champ des relances automatiques.",
          "Téléphone, dans un seul format choisi une fois pour toutes (par exemple +33 6 12 34 56 78) et écrit dans le guide d'équipe.",
          "Entreprise ou établissement (en B2B), relié à une fiche organisation si votre CRM le permet, pour regrouper plusieurs contacts d'une même société.",
          "Origine du contact : liste fermée (site, téléphone, Google Ads, Meta Ads, recommandation, réseaux sociaux, autre). Jamais de texte libre, sinon vous aurez « google », « Google » et « G. Ads ».",
        ],
      },
      {
        titre: "Les 5 champs sur l'affaire",
        intro: "L'affaire, c'est la demande elle-même : un contact peut en avoir plusieurs au fil du temps.",
        points: [
          "Prestation demandée : liste fermée de vos prestations, avec les intitulés exacts de votre site ou de votre grille de prix.",
          "Montant du devis, en nombre (pas en texte), rempli au passage en « Devis envoyé » : il rend la valeur du pipeline lisible d'un coup d'œil.",
          "Date d'envoi du devis, automatique si votre CRM le permet, sinon saisie à la main : c'est elle qui déclenche la relance.",
          "Délai souhaité par le client (liste : urgent, sous un mois, sous trois mois, pas de date) : il fixe la cadence des relances.",
          "Motif de perte, liste fermée obligatoire à la fermeture (prix, délai, concurrent, sans réponse, hors cible, projet abandonné).",
        ],
      },
      {
        titre: "Les 5 champs de suivi",
        points: [
          "Prochaine action : liste courte (appeler, envoyer le devis, relancer, attendre la réponse, rendez-vous). Une carte sans prochaine action est une carte oubliée.",
          "Date de la prochaine action : obligatoire dès l'étape 2. C'est la colonne que vous triez chaque matin.",
          "Responsable : la personne qui doit faire la prochaine action, même si vous êtes seul aujourd'hui (le champ servira le jour où vous ne l'êtes plus).",
          "Date du dernier échange, mise à jour automatiquement par les emails et appels enregistrés, sinon à la main : elle servira au nettoyage plus tard.",
          "Consentement et préférence de contact : la personne accepte-t-elle les relances par email, et à quelle adresse ? Un champ oui/non, daté.",
        ],
      },
      {
        titre: "Les règles de passage entre étapes",
        points: [
          "Une carte ne peut pas entrer dans « Devis envoyé » sans montant ni date d'envoi : configurez ces deux champs comme obligatoires à cette étape.",
          "Une carte ne reste jamais plus de sept jours dans une étape sans prochaine action datée : un rappel automatique, ou un filtre « sans action » consulté chaque matin, vous le signale.",
          "Passage en « Relance en cours » au troisième jour sans réponse après le devis : automatique si votre CRM sait déclencher sur une date, sinon un filtre « devis envoyé depuis plus de trois jours » à ouvrir chaque matin.",
          "Aucune fermeture sans motif : rendez le champ « motif de perte » obligatoire au passage en Perdu. C'est ce champ qui vous dira, dans six mois, quoi corriger.",
        ],
      },
      {
        titre: "Préparer l'import de vos contacts",
        points: [
          "Rassemblez toutes les sources (tableur, export de la boîte mail, contacts du téléphone, ancien outil) dans un seul fichier : une ligne par personne, une colonne par champ ci-dessus.",
          "Supprimez les colonnes que vous n'utiliserez pas : un champ importé « au cas où » est un champ que personne ne remplira plus jamais.",
          "Dédoublonnez sur l'email d'abord, puis sur le couple téléphone et nom : gardez la ligne la plus complète, reportez-y ce qui manque depuis l'autre.",
          "Mettez les téléphones au format choisi et les origines dans les valeurs exactes de votre liste fermée avant l'import : le CRM ne corrigera rien à votre place.",
          "Importez d'abord dix lignes, vérifiez-les fiche par fiche, puis importez le reste. Gardez le fichier d'origine, daté, pendant six mois.",
        ],
      },
      {
        titre: "Où créer ces champs selon votre CRM",
        points: [
          "HubSpot : Paramètres, puis Propriétés, en distinguant les propriétés de contact, d'entreprise et de transaction ; le pipeline se règle dans Objets, puis Transactions.",
          "Pipedrive : Paramètres, puis Champs personnalisés (personne, organisation, affaire) ; les étapes dans Paramètres, puis Pipelines ; les champs obligatoires par étape dans les options du pipeline.",
          "Salesforce : Configuration, puis Gestionnaire d'objets, avec un administrateur ; ne créez aucun champ sans écrire à quoi il sert dans sa description.",
          "Zoho CRM, Brevo, Sellsy, Axonaut, monday CRM : chacun a un écran « champs personnalisés » et un écran « étapes ». Le principe est le même ; cherchez d'abord le type « liste de sélection » pour les champs à valeurs fermées.",
          "Dans tous les cas, créez les champs avant d'importer les contacts, et faites une capture d'écran de chaque écran de réglage : c'est votre documentation.",
        ],
      },
    ],
    conclusion:
      "Recopiez les six étapes et les quinze champs dans votre CRM avant d'importer le moindre contact : c'est une heure de réglage qui vous évite des mois de fiches incomplètes. Si vous préférez que nous le fassions avec vous, sur votre outil, dites-le nous : le prix fixe est écrit avant de commencer.",
    pole: "crm",
    page: "/services/crm/creation-crm",
  },

  {
    slug: "crm-optimisation-20-automatisations",
    titre: "Les 20 automatisations CRM classées par temps gagné, avec la règle de déclenchement de chacune",
    accroche:
      "De celle qui rend le plus de temps à la plus accessoire : ce que chaque automatisation déclenche, quand, et comment elle s'arrête. Valable sur HubSpot, Salesforce, Pipedrive, Zoho CRM, Brevo, Sellsy, Axonaut ou monday CRM.",
    format: "guide",
    apercu: [
      "Les 20 automatisations, classées de la plus utile à la plus accessoire, en cinq familles",
      "Pour chacune : le déclencheur, l'action et la condition d'arrêt",
      "Les quatre garde-fous à écrire avant d'activer quoi que ce soit",
      "Relances par email et rappels uniquement : rien qui demande un canal supplémentaire",
    ],
    sections: [
      {
        titre: "Rangs 1 à 5 : les relances de devis",
        intro:
          "Le classement vient de ce que nous observons chez nos clients : il vaut comme ordre de priorité, pas comme mesure. Ces cinq automatisations rendent le plus de temps parce qu'elles remplacent une tâche que personne ne fait.",
        points: [
          "1. Relance à J+3 après un devis sans réponse. Déclencheur : le champ « date d'envoi du devis » a trois jours et aucune réponse n'est enregistrée. Action : un email court, dans votre ton, qui demande si le devis est bien arrivé et s'il reste une question. Arrêt : toute réponse, ou tout changement d'étape.",
          "2. Relance à J+7. Déclencheur : quatre jours après la première relance, toujours sans réponse. Action : un email qui apporte un élément nouveau (une précision, un exemple de réalisation, une réponse à l'objection la plus fréquente), jamais une répétition du premier.",
          "3. Relances à J+14 puis J+30. Déclencheur : même logique, sur les dates suivantes. Action : la dernière propose de clore le dossier et demande le motif ; la réponse remplit le champ « motif de perte ».",
          "4. Passage automatique en « Perdu, sans réponse » après la dernière relance. Déclencheur : fin de la séquence sans réponse. Action : étape changée, motif rempli, tâche de reprise de contact créée à six mois.",
          "5. Arrêt de la séquence dès qu'une réponse arrive. Déclencheur : email reçu du contact, appel enregistré, ou étape changée à la main. Action : toutes les relances programmées sont annulées. C'est l'automatisation à tester en premier : sans elle, les quatre autres vous font passer pour une machine.",
        ],
      },
      {
        titre: "Rangs 6 à 8 : les rendez-vous",
        points: [
          "6. Rappel de rendez-vous la veille, par email. Déclencheur : rendez-vous dans l'agenda relié au CRM, vingt-quatre heures avant. Action : email avec la date, l'heure, le lieu ou le lien de visio, et un moyen simple de reporter.",
          "7. Confirmation immédiate à la prise de rendez-vous. Déclencheur : créneau réservé (Calendly, Google Agenda, module de votre CRM). Action : email de confirmation, puis création ou mise à jour de la fiche dans le CRM avec la date du rendez-vous.",
          "8. Suivi après le rendez-vous. Déclencheur : rendez-vous passé depuis deux heures sans changement d'étape. Action : tâche « noter le compte rendu et la prochaine action » assignée au responsable.",
        ],
      },
      {
        titre: "Rangs 9 à 12 : l'arrivée des demandes",
        points: [
          "9. Création d'une fiche à chaque formulaire du site. Déclencheur : envoi du formulaire. Action : contact et affaire créés en « Nouvelle demande », origine « site » et page d'origine renseignées, sans saisie.",
          "10. Accusé de réception au prospect. Déclencheur : fiche créée depuis le site ou une campagne. Action : email qui dit ce qui va se passer et sous quel délai, signé d'une personne et non d'un service.",
          "11. Alerte interne immédiate. Déclencheur : nouvelle demande. Action : notification (email ou application) à la personne responsable, avec le lien de la fiche ; une seconde alerte si la fiche n'a pas bougé après vingt-quatre heures.",
          "12. Attribution de la source des campagnes. Déclencheur : demande venue de Google Ads ou de Meta Ads (paramètres d'URL ou formulaire natif de la plateforme). Action : champs origine et nom de campagne remplis automatiquement.",
        ],
      },
      {
        titre: "Rangs 13 à 16 : le suivi interne",
        points: [
          "13. Rappel de prochaine action en retard. Déclencheur : date de prochaine action dépassée. Action : tâche remontée en haut de la liste du responsable, puis alerte au dirigeant après trois jours.",
          "14. Carte immobile. Déclencheur : aucune activité sur une affaire depuis sept jours. Action : tâche « décider : relancer, reporter ou fermer avec motif ».",
          "15. Résumé du lundi. Déclencheur : chaque lundi à 8 h. Action : email interne avec les devis en attente, les relances prévues cette semaine et les cartes sans prochaine action.",
          "16. Champ obligatoire manquant. Déclencheur : passage d'étape sans montant, sans date ou sans motif. Action : passage refusé, ou tâche de complément créée, selon ce que permet votre CRM.",
        ],
      },
      {
        titre: "Rangs 17 à 20 : après la vente",
        points: [
          "17. Email de bienvenue au nouveau client. Déclencheur : affaire gagnée. Action : email qui récapitule ce qui a été convenu, les prochaines étapes et le nom de l'interlocuteur.",
          "18. Demande d'avis après la prestation. Déclencheur : prestation marquée terminée, ou date de fin plus quelques jours. Action : email avec le lien direct vers votre fiche Google, envoyé une seule fois.",
          "19. Reprise de contact à date. Déclencheur : six ou douze mois après la vente, selon votre métier. Action : tâche ou email pour proposer l'entretien, le renouvellement ou la prestation suivante.",
          "20. Réveil des perdus « sans réponse ». Déclencheur : six mois après la fermeture pour silence. Action : un seul email qui demande si le projet est toujours d'actualité ; une réponse positive crée une nouvelle affaire.",
        ],
      },
      {
        titre: "Avant d'activer : cinq garde-fous",
        points: [
          "Un moyen simple de demander l'arrêt dans chaque email automatique, et l'arrêt effectif de toute la séquence dès que la personne le demande.",
          "Un test sur cinq anciens dossiers avant chaque mise en service : lisez les emails qui seraient partis, avec les vrais prénoms et les vrais montants.",
          "Un journal : qui a reçu quoi, quand, déclenché par quelle règle. Sans journal, vous ne pourrez pas comprendre une plainte ni corriger une règle.",
          "Une personne nommée pour relire les automatisations chaque mois et couper celles qui ne servent plus.",
          "Une adresse d'expéditeur réelle, relevée chaque jour : une réponse à un email automatique doit arriver à quelqu'un, jamais dans une boîte que personne ne lit.",
        ],
      },
    ],
    conclusion:
      "Activez les cinq premières, et rien d'autre, pendant un mois. Quand l'arrêt sur réponse fonctionne sans faute, ajoutez les rendez-vous, puis l'arrivée des demandes. Si vous voulez que nous écrivions et testions ces règles sur votre CRM, le prix fixe est communiqué sous 24 h.",
    pole: "crm",
    page: "/services/crm/optimisation-crm",
  },

  {
    slug: "crm-nettoyage-procedure-10-etapes",
    titre: "Procédure de nettoyage de CRM en 10 étapes, avec les règles de doublons et d'archivage à écrire",
    accroche:
      "La procédure que nous suivons avant chaque import et à chaque nettoyage, avec les règles à recopier dans le guide de votre équipe pour que la base reste propre après nous.",
    format: "plan",
    apercu: [
      "Les 10 étapes, dans l'ordre, de la sauvegarde à la remise à l'équipe",
      "Les règles de doublons : quand fusionner, quelle fiche garder, quoi reporter",
      "Les règles d'archivage : à partir de quand un contact est inactif, et où il va",
      "Les formats à harmoniser et les gestes du quotidien pour ne pas recommencer dans six mois",
    ],
    sections: [
      {
        titre: "Avant de commencer",
        points: [
          "Exportez toute la base (contacts, organisations, affaires, historique) dans un fichier daté, stocké hors du CRM. Aucun nettoyage sans cette copie.",
          "Délimitez le périmètre : les contacts seulement, ou aussi les affaires et les organisations ? Écrivez-le. Un nettoyage qui s'étend en cours de route ne se termine pas.",
          "Prévenez l'équipe de la date et suspendez les saisies pendant le nettoyage, sinon les doublons reviennent pendant que vous les fusionnez.",
        ],
      },
      {
        titre: "Les 10 étapes, dans l'ordre",
        points: [
          "Comptez : nombre de contacts, d'organisations, d'affaires ouvertes, et part des fiches sans email ni téléphone. Ces chiffres servent de point de départ et de preuve à la fin.",
          "Supprimez les fiches vides ou inutilisables : ni email, ni téléphone, ni nom, aucune activité. Listez-les avant de supprimer et faites valider la liste.",
          "Corrigez les emails invalides (sans arobase, domaine mal orthographié, adresse de test) et marquez ceux qui ont rebondi lors des derniers envois.",
          "Harmonisez les formats : téléphones au format international, noms avec la majuscule initiale, villes et pays dans une liste fermée.",
          "Repérez les doublons sur l'email exact, puis sur téléphone et nom, puis sur nom et entreprise. Traitez chaque groupe avec les règles de la partie suivante.",
          "Fusionnez les doublons, groupe par groupe, en reportant sur la fiche conservée ce qui manque : téléphone, historique, affaires liées.",
          "Remplissez les champs clés manquants quand l'information existe ailleurs : l'origine dans l'historique des emails, l'entreprise dans le domaine de l'adresse.",
          "Appliquez les règles d'archivage : contacts inactifs archivés, jamais supprimés, avec la date et le motif.",
          "Fermez les affaires abandonnées : toute affaire ouverte sans activité depuis la durée que vous avez fixée passe en Perdu avec le motif « sans réponse ».",
          "Recomptez, comparez avec l'étape 1, écrivez le résultat dans une note datée et présentez-le à l'équipe avec les règles du quotidien.",
        ],
      },
      {
        titre: "Les règles de doublons à écrire",
        points: [
          "Deux fiches avec le même email sont le même contact, sans exception : fusion obligatoire.",
          "Même téléphone et même nom de famille : fusion après vérification du prénom. Même téléphone et noms différents : deux personnes d'un même foyer ou d'une même entreprise, à relier, pas à fusionner.",
          "La fiche conservée est celle qui a le plus d'historique (échanges, affaires), pas la plus récente ; la date de création la plus ancienne est reportée dessus.",
          "Tout ce qui manque sur la fiche conservée est reporté depuis l'autre avant la suppression : téléphone, entreprise, origine, consentement, notes.",
          "Après le nettoyage, activez la détection de doublons de votre CRM à la création (HubSpot, Pipedrive, Zoho CRM et Salesforce la proposent) et refusez tout import de fichier sans dédoublonnage préalable.",
        ],
      },
      {
        titre: "Les règles d'archivage à écrire",
        points: [
          "Définissez « inactif » par une durée depuis le dernier échange, adaptée à votre cycle de vente : douze mois pour une prestation ponctuelle, vingt-quatre pour un contrat pluriannuel. Écrivez la durée choisie.",
          "Un contact inactif est archivé, ou étiqueté « inactif », jamais supprimé : il garde son historique et peut revenir.",
          "Un client, même inactif, garde le statut client : l'archivage ne s'applique qu'aux prospects sans affaire gagnée.",
          "Une personne qui a demandé l'arrêt des sollicitations est archivée avec ce motif et exclue de tout envoi, sans limite de durée.",
          "Programmez l'archivage une fois par trimestre, avec une liste à valider avant application, jamais un automatisme silencieux.",
        ],
      },
      {
        titre: "Les formats à harmoniser",
        points: [
          "Téléphone : un seul format (par exemple +33 6 12 34 56 78), appliqué à l'import et à la saisie ; la plupart des CRM savent le forcer.",
          "Origine : une liste fermée de six à huit valeurs, identiques à celles de vos formulaires et de vos campagnes.",
          "Statut : prospect, client, ancien client, partenaire, inactif, ne plus contacter. Six valeurs, pas vingt.",
          "Prestation demandée : les intitulés exacts de votre grille de prix, rien d'autre.",
          "Texte libre : un seul champ « notes ». Tout le reste doit être une valeur de liste, un nombre ou une date.",
        ],
      },
      {
        titre: "Après le nettoyage : garder le CRM propre",
        points: [
          "Une seule porte d'entrée pour les nouveaux contacts : les formulaires reliés et la saisie dans le CRM. Plus aucun import de tableur sans passage par les règles ci-dessus.",
          "Un filtre « fiches incomplètes » (sans origine, sans prochaine action, sans email) revu chaque semaine par une personne nommée.",
          "Un nettoyage léger chaque trimestre (doublons, rebonds, archivage) et un complet chaque année, inscrits au calendrier.",
          "Le guide d'équipe, deux pages au plus, avec ces règles, accessible depuis le CRM : une règle non écrite n'existe pas.",
        ],
      },
    ],
    conclusion:
      "Faites l'export, puis les dix étapes dans l'ordre, sur une demi-journée bloquée. Les règles des parties 3 à 5 vont dans le guide de votre équipe le jour même. Si vous préférez que nous menions ce nettoyage avec vous, sur votre CRM, le prix fixe est communiqué sous 24 h après un échange.",
    pole: "crm",
    page: "/services/crm/nettoyage-crm",
  },

  {
    slug: "crm-ia-inventaire-30-taches",
    titre: "Inventaire des tâches à confier à l'IA : 30 tâches courantes d'une TPE, à trier en 20 minutes",
    accroche:
      "Le tableau que nous remplissons lors du diagnostic IA, et les trente tâches que nous retrouvons le plus souvent, pour savoir avant tout devis ce qu'une IA comme Claude pourrait reprendre chez vous.",
    format: "modele",
    apercu: [
      "Les six colonnes du tableau et la façon de les remplir en vingt minutes, par personne",
      "Les 30 tâches les plus courantes, classées en quatre domaines, à cocher si elles existent chez vous",
      "Les trois questions pour trier ce qui se confie à l'IA et ce qui reste humain",
      "Le calcul, à partir de vos propres chiffres, du temps que chaque tâche prend chaque semaine",
    ],
    sections: [
      {
        titre: "Comment remplir le tableau",
        points: [
          "Une ligne par tâche, six colonnes : la tâche, qui la fait, combien de fois par semaine, combien de minutes à chaque fois, ce qui se passe si elle est mal faite, les données qu'elle demande.",
          "Remplissez par personne, pas par service : demandez à chacun de lister ce qu'il fait « toujours pareil ». Cinq à dix lignes par personne suffisent.",
          "Multipliez la fréquence par la durée pour obtenir les minutes par semaine, puis triez le tableau sur cette colonne : le haut du tableau est votre priorité.",
          "Dans la colonne « si mal faite », écrivez la conséquence réelle (un client perdu, une facture fausse, rien de grave) : c'est elle qui décidera de la validation humaine.",
          "Dans la colonne « données », notez d'où vient l'information (boîte mail, agenda, logiciel de devis, CRM) : une tâche dont les données sont dans la tête de quelqu'un ne s'automatise pas encore.",
        ],
      },
      {
        titre: "Demandes, devis et relances",
        intro: "Sept tâches, presque toujours en haut du tableau.",
        points: [
          "Lire une demande reçue par le formulaire du site ou par email et préparer une réponse dans votre ton, à valider avant envoi.",
          "Qualifier une demande (prestation, lieu, urgence, budget indiqué) et remplir la fiche CRM correspondante.",
          "Préparer un devis à partir de votre grille de prix et des éléments de la demande, dans votre modèle habituel.",
          "Rédiger la relance d'un devis sans réponse en reprenant les éléments propres au dossier, dans la séquence déjà planifiée par le CRM.",
          "Répondre aux questions répétitives avant devis (délais, zone d'intervention, modalités de paiement) à partir de vos réponses habituelles.",
          "Résumer l'historique d'un prospect avant un appel : demandes, devis, échanges, dernier contact.",
          "Rédiger le message de clôture d'un devis perdu et enregistrer le motif dans le CRM.",
        ],
      },
      {
        titre: "Emails, messages et rendez-vous",
        intro: "Huit tâches, souvent faites le soir.",
        points: [
          "Trier la boîte mail chaque matin en quatre piles (urgent, à répondre, à classer, publicité), avec une proposition de réponse pour la deuxième pile.",
          "Répondre aux messages reçus sur Instagram, Facebook ou Google (horaires, prix, disponibilités) à partir de vos informations à jour.",
          "Proposer des créneaux de rendez-vous en lisant votre agenda, puis confirmer une fois le créneau choisi.",
          "Envoyer le rappel de rendez-vous la veille, avec les informations pratiques du dossier.",
          "Reporter ou annuler un rendez-vous à la demande du client, et mettre l'agenda et le CRM à jour.",
          "Rédiger le compte rendu d'un rendez-vous à partir de vos notes dictées, et l'enregistrer dans la fiche.",
          "Reformuler ou traduire un email pour un client étranger, en gardant votre ton.",
          "Repérer les emails restés sans réponse depuis plus de deux jours et vous en faire la liste.",
        ],
      },
      {
        titre: "Avis, réseaux et contenus",
        intro: "Six tâches, souvent repoussées faute de temps.",
        points: [
          "Préparer la réponse à chaque avis Google, positif ou négatif, dans votre ton, à valider avant publication.",
          "Repérer un avis négatif dès sa publication et vous alerter avec une proposition de réponse.",
          "Rédiger la demande d'avis envoyée après une prestation, personnalisée avec la prestation réalisée.",
          "Écrire les publications hebdomadaires de vos réseaux à partir de vos photos et de vos réalisations, à valider.",
          "Mettre à jour les textes de votre fiche Google et de votre site quand une prestation, un horaire ou un prix change.",
          "Rédiger la page « question fréquente » à partir des questions réellement reçues ce mois-ci.",
        ],
      },
      {
        titre: "Administratif, facturation et documents",
        intro: "Neuf tâches, celles qui prennent les samedis matin.",
        points: [
          "Préparer la facture à partir du devis accepté, dans votre outil de facturation, à valider avant envoi.",
          "Relancer une facture impayée à J+7, J+15 et J+30, avec un ton qui monte progressivement, et s'arrêter au paiement.",
          "Extraire les informations d'un document reçu (pièce d'identité, extrait Kbis, attestation, bon de commande) et les saisir dans la fiche.",
          "Vérifier qu'un dossier client est complet avant le démarrage, lister ce qui manque et préparer l'email de demande.",
          "Classer les pièces jointes reçues (devis signés, factures fournisseurs, contrats) dans le bon dossier avec un nom normalisé.",
          "Préparer le tableau de suivi mensuel (devis envoyés, signés, facturés, encaissés) à partir de vos outils.",
          "Rédiger les courriers répétitifs : attestation, confirmation de commande, réponse à une réclamation simple.",
          "Préparer l'ordre du jour et le compte rendu de la réunion d'équipe hebdomadaire.",
          "Saisir les notes de frais et les heures à partir des photos et des messages envoyés par l'équipe, à valider.",
        ],
      },
      {
        titre: "Trier et décider",
        points: [
          "Question 1 : la tâche se décrit-elle en règles que vous pourriez expliquer à un nouveau salarié en dix minutes ? Si non, elle n'est pas prête pour l'IA.",
          "Question 2 : une erreur coûte-t-elle cher (client perdu, engagement financier, sujet sensible) ? Si oui, l'IA prépare et une personne valide. Si non, l'IA peut agir seule, avec un journal de ce qu'elle a fait.",
          "Question 3 : les données nécessaires sont-elles dans un outil relié (boîte mail, agenda, CRM, facturation) ? Si elles sont sur papier ou dans une tête, commencez par les y mettre.",
          "Restent humains, quoi qu'il arrive : la négociation d'un prix, l'annonce d'une mauvaise nouvelle, la décision d'accepter ou de refuser un client, et tout ce qui touche à la santé ou à la situation personnelle d'une personne.",
          "Retenez les trois tâches en haut du tableau qui passent les trois questions : c'est le premier flux à mettre en service. Les autres attendront de l'avoir vu tourner un mois.",
        ],
      },
    ],
    conclusion:
      "Remplissez le tableau avec votre équipe, triez-le, gardez trois lignes. Si vous voulez que nous fassions cet inventaire avec vous, sur place ou à distance, c'est l'objet du diagnostic IA d'une journée : vous repartez avec le tableau rempli, le plan écrit et un prix fixe sous 24 h.",
    pole: "crm",
    page: "/services/integration-ia",
  },
];
