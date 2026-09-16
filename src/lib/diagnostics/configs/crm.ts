import type { Diagnostic } from "../types";

/**
 * Diagnostics interactifs du pôle (crm) : un par page qui en propose un.
 * Voir types.ts pour la forme et les règles d'écriture.
 */
export const DIAGNOSTICS_CRM: Diagnostic[] = [
  /* ------------------------------------------------------------------ */
  /* /services/crm : le suivi des demandes fuit-il ?                     */
  /* ------------------------------------------------------------------ */
  {
    slug: "crm-diagnostic-suivi-demandes",
    type: "questionnaire",
    titre: "Diagnostic CRM : votre suivi des demandes fuit-il ?",
    accroche:
      "Douze questions sur ce que vous faites aujourd'hui d'une demande, de son arrivée à la signature ou au classement. Le résultat s'affiche tout de suite : où le suivi tient, où il fuit, et par quoi commencer.",
    obtenez: [
      "Un score sur les quatre points où un suivi fuit : réception, relances, mesure, outils",
      "Vos trois priorités, avec le geste concret à faire pour chacune",
      "Le rapport complet par email, avec le diagnostic CRM en 25 questions en bonus",
    ],
    axes: [
      { id: "reception", label: "Réception des demandes" },
      { id: "suivi", label: "Suivi et relances" },
      { id: "mesure", label: "Mesure" },
      { id: "outils", label: "Outils" },
    ],
    questions: [
      {
        id: "arrivee",
        texte: "Où atterrissent vos demandes quand elles arrivent ?",
        aide: "Appels, formulaires du site, messages sur les réseaux, emails, recommandations.",
        axe: "reception",
        options: [
          {
            id: "disperse",
            label: "Dans plusieurs boîtes (mail, téléphone, réseaux), sans liste commune",
            points: 0,
            conseil: {
              titre: "Une seule liste d'arrivée",
              texte:
                "Créez une liste unique (un tableur suffit pour commencer) où chaque demande est notée le jour même avec sa source, sa date et le prochain geste prévu. Le canal d'arrivée n'a pas d'importance : ce qui compte est qu'aucune demande ne vive uniquement dans une boîte mail ou dans un téléphone.",
            },
          },
          {
            id: "tableur",
            label: "Dans une boîte mail partagée ou un tableur tenu à la main",
            points: 1,
            conseil: {
              titre: "Reliez vos formulaires à la liste",
              texte:
                "Branchez le formulaire de votre site et vos pages de campagne (connecteur natif, Zapier ou Make) pour que chaque demande crée automatiquement une ligne, avec sa source. Une saisie manuelle finit toujours par être oubliée un jour chargé.",
            },
          },
          {
            id: "crm",
            label: "Dans un CRM, créées automatiquement depuis le site et les campagnes",
            points: 2,
          },
        ],
      },
      {
        id: "hors-horaires",
        texte: "Une demande arrive un soir ou un week-end : que se passe-t-il ?",
        axe: "reception",
        options: [
          {
            id: "rien",
            label: "Rien avant le prochain jour ouvré",
            points: 0,
            conseil: {
              titre: "Un accusé de réception automatique",
              texte:
                "Réglez un email automatique envoyé dès l'arrivée d'une demande : il confirme la réception, annonce quand vous rappellerez et donne votre numéro. La personne sait qu'elle a été entendue et attend votre appel au lieu de contacter quelqu'un d'autre.",
            },
          },
          {
            id: "accuse",
            label: "Un message automatique confirme la réception, sans délai annoncé",
            points: 1,
            conseil: {
              titre: "Annoncez un délai précis de rappel",
              texte:
                "Complétez votre message automatique avec un délai de rappel précis (par exemple « avant midi le prochain jour ouvré ») et un lien pour choisir un créneau. Un délai annoncé et tenu vaut mieux qu'une formule vague.",
            },
          },
          {
            id: "complet",
            label: "Un message automatique confirme, annonce un délai de rappel et propose un créneau",
            points: 2,
          },
        ],
      },
      {
        id: "premiere-reponse",
        texte: "Combien de temps s'écoule entre une demande et votre première réponse personnelle ?",
        aide: "Un appel ou un email écrit par vous, pas le message automatique.",
        axe: "reception",
        options: [
          {
            id: "plusieurs-jours",
            label: "Plus d'une journée, parfois plusieurs",
            points: 0,
            conseil: {
              titre: "Deux créneaux de rappel par jour",
              texte:
                "Bloquez deux créneaux fixes par jour (par exemple 11 h et 17 h) pour rappeler toutes les demandes arrivées depuis le créneau précédent. Avec une notification à chaque nouvelle demande, la première réponse tombe le jour même sans changer votre organisation.",
            },
          },
          {
            id: "journee",
            label: "Dans la journée",
            points: 1,
            conseil: {
              titre: "Visez l'heure aux heures ouvrées",
              texte:
                "Activez une notification (SMS ou application) à l'arrivée de chaque demande et rappelez dès qu'un créneau se libère. Un rappel rapide arrive souvent avant que la personne n'ait contacté d'autres prestataires.",
            },
          },
          {
            id: "heure",
            label: "Dans l'heure aux heures ouvrées",
            points: 2,
          },
        ],
      },
      {
        id: "devis-sans-reponse",
        texte: "Un devis envoyé reste sans réponse : que se passe-t-il ?",
        axe: "suivi",
        options: [
          {
            id: "attente",
            label: "Rien, j'attends que la personne revienne vers moi",
            points: 0,
            conseil: {
              titre: "Une relance à J+3, écrite comme une règle",
              texte:
                "Notez la date d'envoi de chaque devis et relancez trois jours après par un message court qui demande si le devis a bien été reçu et s'il reste une question. Faites-en une règle écrite et appliquée à tous les devis, pas une intention.",
            },
          },
          {
            id: "quand-j-y-pense",
            label: "Je relance quand j'y pense",
            points: 1,
            conseil: {
              titre: "Une date de relance sur chaque devis",
              texte:
                "Ajoutez une date de prochaine relance sur chaque devis envoyé et consultez cette liste chaque matin. Mieux : programmez la relance dans votre CRM ou votre outil d'emailing pour qu'elle parte sans vous.",
            },
          },
          {
            id: "automatique",
            label: "Une relance part automatiquement à date fixe, puis d'autres sur plusieurs semaines",
            points: 2,
          },
        ],
      },
      {
        id: "nombre-relances",
        texte: "Combien de fois relancez-vous une demande restée sans réponse avant de la classer ?",
        axe: "suivi",
        options: [
          {
            id: "une",
            label: "Une fois au plus",
            points: 0,
            conseil: {
              titre: "Trois relances espacées, avec un angle différent",
              texte:
                "Prévoyez au moins trois relances espacées (J+3, J+10, J+30), chacune avec un angle différent : une question, une information utile, une porte de sortie. Une seule relance ne laisse pas le temps à la personne de revenir vers vous.",
            },
          },
          {
            id: "deux-trois",
            label: "Deux ou trois, sans calendrier précis",
            points: 1,
            conseil: {
              titre: "Un calendrier de relance écrit une fois pour toutes",
              texte:
                "Écrivez le calendrier (J+3, J+10, J+30) et le contenu de chaque relance une fois pour toutes, puis appliquez-le à chaque demande. Le rythme se règle ensuite d'après les réponses que vous recevez.",
            },
          },
          {
            id: "trois-plus",
            label: "Au moins trois relances, à dates fixes, avec un message différent à chaque fois",
            points: 2,
          },
        ],
      },
      {
        id: "a-rappeler",
        texte: "Qui sait, à un instant donné, quelles demandes doivent être rappelées aujourd'hui ?",
        axe: "suivi",
        options: [
          {
            id: "personne",
            label: "Personne, cela dépend de la mémoire de chacun",
            points: 0,
            conseil: {
              titre: "Une vue « à rappeler aujourd'hui »",
              texte:
                "Créez une vue (filtre de CRM ou onglet de tableur) qui liste les demandes dont la date de prochain geste est aujourd'hui ou dépassée, et ouvrez-la chaque matin. Une demande absente de cette vue est une demande oubliée.",
            },
          },
          {
            id: "une-personne",
            label: "Une personne, de tête ou avec ses notes",
            points: 1,
            conseil: {
              titre: "Sortez la liste de la tête d'une seule personne",
              texte:
                "Notez le prochain geste et sa date sur chaque demande dans un outil partagé, consultable par une autre personne. Une absence ou un congé ne doit pas suspendre les rappels.",
            },
          },
          {
            id: "liste-partagee",
            label: "Une liste partagée, triée par date de prochain geste, consultée chaque jour",
            points: 2,
          },
        ],
      },
      {
        id: "demandes-par-canal",
        texte: "Savez-vous combien de demandes vous avez reçues le mois dernier, et par quel canal ?",
        axe: "mesure",
        options: [
          {
            id: "non",
            label: "Non, pas précisément",
            points: 0,
            conseil: {
              titre: "Comptez vos demandes par source",
              texte:
                "Ajoutez une colonne « source » (site, Google, Meta, bouche-à-oreille, téléphone) à votre liste de demandes et remplissez-la à l'arrivée de chacune. Au bout d'un mois, vous saurez d'où viennent vos demandes sans aucun outil supplémentaire.",
            },
          },
          {
            id: "total",
            label: "Le total oui, la répartition par canal non",
            points: 1,
            conseil: {
              titre: "Notez la source à l'arrivée, à choix fixe",
              texte:
                "Renseignez la source de chaque demande dès sa création, avec un menu déroulant à choix fixe plutôt qu'un texte libre. C'est la seule donnée qui permet ensuite de savoir quel canal mérite votre temps et votre budget.",
            },
          },
          {
            id: "oui",
            label: "Oui, le total et la répartition par canal, à jour",
            points: 2,
          },
        ],
      },
      {
        id: "transformation",
        texte: "Connaissez-vous votre taux de transformation, c'est-à-dire les devis signés par rapport aux devis envoyés ?",
        axe: "mesure",
        options: [
          {
            id: "non",
            label: "Non",
            points: 0,
            conseil: {
              titre: "Deux compteurs par mois : envoyés, signés",
              texte:
                "Tenez deux compteurs par mois : devis envoyés, devis signés. Le rapport entre les deux est votre taux de transformation ; il suffit à repérer un mois anormal et à mesurer l'effet d'une relance mise en place.",
            },
          },
          {
            id: "approximatif",
            label: "Une idée approximative",
            points: 1,
            conseil: {
              titre: "Un chiffre exact plutôt qu'une impression",
              texte:
                "Enregistrez le statut final de chaque devis (signé, perdu, sans réponse) avec sa date. Un simple tableau par mois vous donne alors un chiffre exact et son évolution.",
            },
          },
          {
            id: "oui",
            label: "Oui, calculé chaque mois à partir des devis enregistrés",
            points: 2,
          },
        ],
      },
      {
        id: "motif-perte",
        texte: "Savez-vous pourquoi les devis non signés ont été perdus ?",
        axe: "mesure",
        options: [
          {
            id: "non",
            label: "Non, je ne le note pas",
            points: 0,
            conseil: {
              titre: "Un motif de perte à choix fixe",
              texte:
                "Ajoutez un champ « motif de perte » à choix fixe (prix, délai, concurrent, sans réponse, projet abandonné) et remplissez-le à chaque devis classé. Après quelques mois, vous saurez sur quoi agir en premier.",
            },
          },
          {
            id: "commentaire",
            label: "Parfois, en commentaire libre",
            points: 1,
            conseil: {
              titre: "Passez du texte libre à une liste que l'on peut compter",
              texte:
                "Remplacez le commentaire libre par une liste de motifs fixes. « Sans réponse » et « trop cher » ne se corrigent pas de la même façon, et seul un motif à choix fixe permet de les compter.",
            },
          },
          {
            id: "oui",
            label: "Oui, un motif à choix fixe est renseigné pour chaque devis perdu",
            points: 2,
          },
        ],
      },
      {
        id: "boite-mail",
        texte: "Votre outil de suivi et votre boîte mail se parlent-ils ?",
        axe: "outils",
        options: [
          {
            id: "non",
            label: "Non, les échanges restent dans les boîtes mail de chacun",
            points: 0,
            conseil: {
              titre: "L'adresse de copie de votre CRM en Cci",
              texte:
                "Beaucoup de CRM fournissent une adresse de copie : mettez-la en Cci de vos emails clients pour que chaque échange s'attache à la fiche. Sans CRM, notez un résumé de deux lignes sur la ligne de la demande après chaque appel ou email important.",
            },
          },
          {
            id: "partiel",
            label: "En partie, les emails importants sont copiés à la main",
            points: 1,
            conseil: {
              titre: "Synchronisez la boîte mail avec le CRM",
              texte:
                "Activez la synchronisation de la boîte mail (Gmail ou Outlook) dans les réglages de votre CRM. L'historique complet apparaît sur chaque fiche sans copier-coller, et personne n'a plus à décider quel email mérite d'être copié.",
            },
          },
          {
            id: "synchro",
            label: "Oui, la boîte mail est synchronisée et l'historique apparaît sur chaque fiche",
            points: 2,
          },
        ],
      },
      {
        id: "rendez-vous",
        texte: "Comment un rendez-vous est-il pris avec une personne qui vous a contacté ?",
        axe: "outils",
        options: [
          {
            id: "echanges",
            label: "Par échanges d'emails ou d'appels pour trouver un créneau",
            points: 0,
            conseil: {
              titre: "Un lien de prise de rendez-vous relié à votre agenda",
              texte:
                "Créez un lien de réservation (Calendly, Google Agenda ou celui de votre CRM) relié à votre agenda et placez-le dans votre accusé de réception et vos relances. La personne choisit son créneau, le rendez-vous se note seul.",
            },
          },
          {
            id: "lien-seul",
            label: "Par un lien de réservation, mais le rendez-vous n'est pas noté dans le suivi",
            points: 1,
            conseil: {
              titre: "Reliez le lien de réservation au suivi",
              texte:
                "Connectez votre outil de réservation au CRM (connecteur natif, Zapier ou Make) pour que chaque rendez-vous pris passe la demande à l'étape « rendez-vous planifié » et déclenche le rappel de la veille.",
            },
          },
          {
            id: "relie",
            label: "Par un lien de réservation relié à l'agenda et au suivi, avec rappel automatique",
            points: 2,
          },
        ],
      },
      {
        id: "recopies",
        texte: "Combien de temps par semaine passez-vous à recopier des informations d'un outil à un autre ?",
        aide: "Un contact du formulaire vers le tableur, un rendez-vous vers le CRM, un devis vers la facturation.",
        axe: "outils",
        options: [
          {
            id: "heures",
            label: "Plusieurs heures",
            points: 0,
            conseil: {
              titre: "Listez les recopies pendant une semaine",
              texte:
                "Pendant une semaine, notez chaque recopie : de quel outil vers quel outil, et combien de fois. Les trois plus fréquentes se branchent presque toujours avec un connecteur natif, Zapier ou Make, sans développement.",
            },
          },
          {
            id: "moins-une-heure",
            label: "Moins d'une heure",
            points: 1,
            conseil: {
              titre: "Automatisez la recopie qui reste",
              texte:
                "Repérez la recopie restante et cherchez le connecteur correspondant dans les intégrations de votre CRM ou de votre formulaire. Une heure par semaine, ce sont plus de quatre heures par mois rendues au commercial.",
            },
          },
          {
            id: "aucune",
            label: "Aucun, les outils sont reliés entre eux",
            points: 2,
          },
        ],
      },
    ],
    verdicts: [
      {
        min: 70,
        titre: "Votre suivi tient : il reste à le rendre plus solide",
        texte:
          "L'essentiel est en place : les demandes arrivent au même endroit, elles sont relancées et vous mesurez ce qui se passe. Les points listés ci-dessous sont des ajustements, pas un chantier. Le rapport complet les détaille et rappelle ce qui est déjà en place, pour ne pas y toucher.",
      },
      {
        min: 40,
        titre: "Votre suivi repose sur des personnes plus que sur un système",
        texte:
          "Les demandes sont traitées, mais une partie dépend de la mémoire, de la disponibilité ou de la bonne volonté de quelqu'un. Les priorités ci-dessous visent d'abord ce qui se règle seul en quelques heures : un accusé de réception, une date de relance sur chaque devis, une vue « à rappeler aujourd'hui ».",
      },
      {
        min: 0,
        titre: "Des demandes se perdent sans que vous le voyiez",
        texte:
          "Peu de choses sont mesurées, et une demande qui arrive au mauvais moment peut ne jamais recevoir de réponse. Ce n'est pas une question de volonté : il manque une liste unique et des règles écrites. Commencez par une seule liste d'arrivée et une règle de relance ; le reste se construit dessus.",
      },
    ],
    ressource: "crm-diagnostic-25-questions",
    pole: "crm",
    page: "/services/crm",
  },

  /* ------------------------------------------------------------------ */
  /* /services/crm/creation-crm : êtes-vous prêt pour un CRM ?           */
  /* ------------------------------------------------------------------ */
  {
    slug: "crm-creation-pret-pour-un-crm",
    type: "questionnaire",
    titre: "Êtes-vous prêt pour un CRM ?",
    accroche:
      "Dix questions sur votre volume de demandes, vos étapes de vente, vos données et votre équipe. Le résultat dit si un CRM se justifie aujourd'hui, ce qu'il faut préparer avant, ou si un tableur bien tenu rend encore plus de services.",
    obtenez: [
      "Un score de préparation sur quatre points : volume, process de vente, outils et données, équipe",
      "Ce qu'il faut régler avant l'outil, et ce qui est déjà prêt",
      "Le rapport complet par email, avec le modèle de pipeline en 6 étapes et 15 champs en bonus",
    ],
    axes: [
      { id: "volume", label: "Volume de demandes" },
      { id: "process", label: "Process de vente" },
      { id: "donnees", label: "Outils et données" },
      { id: "equipe", label: "Équipe" },
    ],
    questions: [
      {
        id: "demandes-par-mois",
        texte: "Combien de demandes recevez-vous par mois ?",
        aide: "Appels, formulaires, messages, recommandations : toute personne qui vous sollicite pour la première fois.",
        axe: "volume",
        options: [
          {
            id: "moins-10",
            label: "Moins de 10",
            points: 0,
            conseil: {
              titre: "Un tableur suffit pour l'instant",
              texte:
                "En dessous d'une dizaine de demandes par mois, un tableur à cinq colonnes (date, nom, source, prochain geste, statut) fait le travail. Tenez-le avec rigueur : c'est lui qui deviendra votre fichier d'import le jour où le volume monte.",
            },
          },
          {
            id: "10-30",
            label: "Entre 10 et 30",
            points: 1,
            conseil: {
              titre: "Le seuil où le tableur commence à craquer",
              texte:
                "À ce volume, notez pendant un mois le nombre de demandes que vous n'avez pas rappelées à temps. Si ce nombre n'est pas zéro, le CRM se justifie ; sinon, gardez votre tableur encore quelques mois et refaites le point.",
            },
          },
          {
            id: "plus-30",
            label: "Plus de 30",
            points: 2,
          },
        ],
      },
      {
        id: "canaux",
        texte: "Par combien de canaux différents arrivent-elles ?",
        axe: "volume",
        options: [
          {
            id: "un",
            label: "Un seul",
            points: 0,
            conseil: {
              titre: "Un canal, une liste, une habitude",
              texte:
                "Avec un seul canal, l'enjeu n'est pas l'outil mais la régularité : notez chaque demande le jour même, avec la date du prochain geste. Le CRM devient utile quand un deuxième canal s'ajoute (campagne, réseaux sociaux, formulaire).",
            },
          },
          {
            id: "deux-trois",
            label: "Deux ou trois",
            points: 1,
            conseil: {
              titre: "Rassemblez déjà les canaux au même endroit",
              texte:
                "Décidez d'un seul endroit où toute demande est notée, quel que soit son canal, avec sa source. Cette habitude est la première chose qu'un CRM automatisera ; prise avant, elle rend la mise en place bien plus simple.",
            },
          },
          {
            id: "quatre-plus",
            label: "Quatre ou plus (site, téléphone, réseaux, campagnes, recommandations)",
            points: 2,
          },
        ],
      },
      {
        id: "cycle",
        texte: "Combien de temps s'écoule entre une demande et sa signature, ou son abandon ?",
        axe: "volume",
        options: [
          {
            id: "jours",
            label: "Quelques jours au plus, sans relance nécessaire",
            points: 0,
            conseil: {
              titre: "Cycle court : mesurez avant d'outiller",
              texte:
                "Quand tout se décide en quelques jours, un CRM sert surtout à mesurer. Commencez par compter demandes et signatures chaque mois dans votre tableur ; passez au CRM si vous voulez relancer les non-signés ou suivre plusieurs personnes.",
            },
          },
          {
            id: "semaines",
            label: "Une à trois semaines, avec une ou deux relances",
            points: 1,
            conseil: {
              titre: "Écrivez votre calendrier de relance dès maintenant",
              texte:
                "Fixez les dates de relance (par exemple J+3 et J+10) et le contenu de chaque message. Un CRM ne fait qu'exécuter un calendrier : s'il existe déjà sur papier, la mise en place en est d'autant plus courte.",
            },
          },
          {
            id: "long",
            label: "Plus de trois semaines, avec plusieurs échanges et relances",
            points: 2,
          },
        ],
      },
      {
        id: "etapes",
        texte: "Vos étapes de vente sont-elles écrites quelque part ?",
        aide: "Par exemple : nouvelle demande, contactée, rendez-vous, devis envoyé, signée ou perdue.",
        axe: "process",
        options: [
          {
            id: "non",
            label: "Non, chacun fait à sa façon",
            points: 0,
            conseil: {
              titre: "Écrivez vos étapes sur une page",
              texte:
                "Listez les étapes par lesquelles passe une demande et ce qui fait passer de l'une à l'autre. Sans cette page, un CRM ne fera que reproduire le flou dans un outil de plus.",
            },
          },
          {
            id: "partiel",
            label: "En partie, dans la tête ou dans un vieux document",
            points: 1,
            conseil: {
              titre: "Mettez à jour et vérifiez sur vos dernières ventes",
              texte:
                "Reprenez ce document, réduisez-le à six étapes au plus et vérifiez-le sur vos dix dernières ventes. Ce sont ces étapes, et non celles d'un modèle générique, qui deviendront votre pipeline.",
            },
          },
          {
            id: "oui",
            label: "Oui, des étapes définies, connues et appliquées",
            points: 2,
          },
        ],
      },
      {
        id: "devis-sans-reponse",
        texte: "Que se passe-t-il quand un devis reste sans réponse ?",
        axe: "process",
        options: [
          {
            id: "rien",
            label: "Rien de prévu",
            points: 0,
            conseil: {
              titre: "Une relance à J+3, même sans outil",
              texte:
                "Décidez d'une règle simple : tout devis sans réponse est relancé trois jours après par un message court. Appliquez-la à la main dès ce mois-ci ; le CRM se contentera ensuite de l'exécuter sans oubli.",
            },
          },
          {
            id: "quelquun",
            label: "Une relance, quand quelqu'un y pense",
            points: 1,
            conseil: {
              titre: "Fixez les dates et le contenu des relances",
              texte:
                "Remplacez « quand on y pense » par un calendrier écrit (J+3, J+10, J+30) et trois messages prêts à l'emploi. Un process qui existe sur papier se transfère dans un CRM sans rien réinventer.",
            },
          },
          {
            id: "date-fixe",
            label: "Une relance à date fixe, avec un message prévu",
            points: 2,
          },
        ],
      },
      {
        id: "devis-comptes",
        texte: "Savez-vous, chaque mois, combien de devis sont envoyés et combien sont signés ?",
        axe: "process",
        options: [
          {
            id: "non",
            label: "Non",
            points: 0,
            conseil: {
              titre: "Deux compteurs par mois",
              texte:
                "Tenez dès maintenant deux compteurs mensuels : devis envoyés, devis signés. Ce sont les deux chiffres qu'un CRM affichera en premier ; les avoir déjà en main permet de vérifier, après la mise en place, que quelque chose a changé.",
            },
          },
          {
            id: "approximatif",
            label: "Approximativement",
            points: 1,
            conseil: {
              titre: "Passez de l'impression au chiffre",
              texte:
                "Notez le statut final de chaque devis (signé, perdu, sans réponse) avec sa date, dans votre tableur. Le CRM reprendra cette colonne telle quelle à l'import.",
            },
          },
          {
            id: "exact",
            label: "Oui, avec des chiffres exacts",
            points: 2,
          },
        ],
      },
      {
        id: "contacts",
        texte: "Où sont vos contacts aujourd'hui ?",
        axe: "donnees",
        options: [
          {
            id: "disperses",
            label: "Dispersés : boîtes mail, téléphones, carnets, factures",
            points: 0,
            conseil: {
              titre: "Rassemblez avant d'importer",
              texte:
                "Exportez chaque source (contacts du téléphone, boîte mail, logiciel de facturation) dans un même tableur, une ligne par personne, avec la source. Un CRM importe un fichier, pas une dispersion : ce rassemblement est la première étape de toute mise en place.",
            },
          },
          {
            id: "tableurs",
            label: "Dans un ou deux tableurs, pas tout à fait à jour",
            points: 1,
            conseil: {
              titre: "Nettoyez le tableur avant l'import",
              texte:
                "Dédoublonnez sur l'email, mettez les téléphones au même format, supprimez les colonnes vides et datez le fichier. Importer une base sale, c'est payer un CRM pour trier du bruit.",
            },
          },
          {
            id: "fichier-unique",
            label: "Dans un fichier unique, à jour, avec email et téléphone renseignés",
            points: 2,
          },
        ],
      },
      {
        id: "formulaires",
        texte: "Vos formulaires (site, pages de campagne) peuvent-ils envoyer leurs données ailleurs que par email ?",
        axe: "donnees",
        options: [
          {
            id: "ne-sais-pas",
            label: "Je ne sais pas",
            points: 0,
            conseil: {
              titre: "Vérifiez la sortie de vos formulaires",
              texte:
                "Ouvrez les réglages de votre formulaire (WordPress, Webflow, Wix, Typeform ou autre) et cherchez « intégrations », « webhook » ou « Zapier ». S'il n'y a rien, notez-le : c'est un point à prévoir avant le CRM, pas un blocage.",
            },
          },
          {
            id: "certains",
            label: "Oui pour certains, pas pour tous",
            points: 1,
            conseil: {
              titre: "Listez les formulaires à brancher",
              texte:
                "Faites la liste de chaque point d'entrée (formulaire du site, pages de campagne, formulaires Meta ou Google) et de ce qu'il sait envoyer. Ceux qui n'ont qu'un email pourront passer par un connecteur ; il faut simplement le savoir avant.",
            },
          },
          {
            id: "tous",
            label: "Oui, tous (webhook, Zapier, Make ou connecteur natif)",
            points: 2,
          },
        ],
      },
      {
        id: "responsable",
        texte: "Qui tiendra le CRM à jour au quotidien ?",
        axe: "equipe",
        options: [
          {
            id: "personne",
            label: "Personne n'est désigné",
            points: 0,
            conseil: {
              titre: "Nommez un responsable de la liste",
              texte:
                "Désignez une personne (vous, le cas échéant) responsable de la liste des demandes : elle vérifie chaque matin que tout est saisi et que les rappels du jour sont faits. Un CRM sans responsable finit par ne plus être ouvert.",
            },
          },
          {
            id: "en-plus",
            label: "Une personne, en plus de tout le reste",
            points: 1,
            conseil: {
              titre: "Bloquez un créneau quotidien",
              texte:
                "Réservez quinze minutes par jour, à heure fixe, pour la revue des demandes. Le CRM ne demandera pas davantage, mais il le demandera chaque jour.",
            },
          },
          {
            id: "designee",
            label: "Une personne désignée, avec un créneau prévu chaque jour",
            points: 2,
          },
        ],
      },
      {
        id: "adoption",
        texte: "Quand un nouvel outil arrive dans l'entreprise, que se passe-t-il ?",
        axe: "equipe",
        options: [
          {
            id: "rarement",
            label: "Il est rarement adopté, chacun garde ses habitudes",
            points: 0,
            conseil: {
              titre: "Partez du problème, pas de l'outil",
              texte:
                "Avant tout CRM, réunissez l'équipe autour d'un cas concret (un devis oublié, un client appelé deux fois) et décidez ensemble de la règle qui l'aurait évité. L'outil vient ensuite pour tenir cette règle, pas l'inverse.",
            },
          },
          {
            id: "insiste",
            label: "Il est adopté si quelqu'un insiste",
            points: 1,
            conseil: {
              titre: "Une seule règle dès le premier jour",
              texte:
                "Fixez une règle unique dès la mise en place : une demande qui n'est pas dans le CRM n'existe pas. Une seule règle tenue vaut mieux que dix fonctionnalités activées.",
            },
          },
          {
            id: "vite",
            label: "Il est adopté vite quand il fait gagner du temps",
            points: 2,
          },
        ],
      },
    ],
    verdicts: [
      {
        min: 70,
        titre: "Vous êtes prêt : un CRM va exécuter ce qui existe déjà",
        texte:
          "Volume, étapes écrites, données rassemblées, personne désignée : les conditions sont réunies. Le risque n'est plus de choisir trop tôt, mais de trop configurer. Partez d'un pipeline de six étapes et des quinze champs du modèle joint au rapport, puis ajoutez le reste au fil des besoins.",
      },
      {
        min: 40,
        titre: "Prêt sous conditions : quelques préalables avant l'outil",
        texte:
          "Le besoin est réel, mais certains fondamentaux manquent : étapes écrites, fichier de contacts propre ou responsable désigné. Réglez-les avant la mise en place. Ce sont eux qui font qu'un CRM est encore utilisé après trois mois, bien plus que la marque de l'outil.",
      },
      {
        min: 0,
        titre: "Un CRM serait prématuré aujourd'hui",
        texte:
          "À ce stade, un tableur tenu avec rigueur et deux règles écrites (où noter chaque demande, quand relancer) rendront plus de services qu'un logiciel. Faites cela pendant deux ou trois mois, puis refaites ce diagnostic : le CRM viendra reprendre une organisation qui tourne déjà.",
      },
    ],
    ressource: "crm-creation-pipeline-6-etapes-15-champs",
    pole: "crm",
    page: "/services/crm/creation-crm",
  },

  /* ------------------------------------------------------------------ */
  /* /services/crm/optimisation-crm : calculateur des demandes perdues  */
  /* ------------------------------------------------------------------ */
  {
    slug: "crm-demandes-perdues",
    type: "calcul",
    titre: "Combien de demandes perdez-vous chaque mois ?",
    accroche:
      "Entrez vos propres chiffres : demandes reçues, part répondue sous 24 h, part relancée, taux de transformation, panier moyen. Le calculateur fait la multiplication et montre ce que représentent les demandes jamais relancées. Aucune statistique de marché, seulement vos données.",
    obtenez: [],
    axes: [],
    questions: [],
    verdicts: [{ min: 0, titre: "", texte: "" }],
    ressource: "crm-optimisation-20-automatisations",
    pole: "crm",
    page: "/services/crm/optimisation-crm",
  },

  /* ------------------------------------------------------------------ */
  /* /services/crm/nettoyage-crm : analyseur de fichier de contacts     */
  /* ------------------------------------------------------------------ */
  {
    slug: "crm-analyse-contacts",
    type: "calcul",
    titre: "Votre fichier de contacts est-il propre ?",
    accroche:
      "Collez un export de votre CRM ou de votre tableur : l'analyseur compte sur place les doublons, les emails invalides, les téléphones manquants et les lignes vides, puis donne un score de propreté. Tout se passe dans votre navigateur, le fichier n'est pas envoyé.",
    obtenez: [],
    axes: [],
    questions: [],
    verdicts: [{ min: 0, titre: "", texte: "" }],
    ressource: "crm-nettoyage-procedure-10-etapes",
    pole: "crm",
    page: "/services/crm/nettoyage-crm",
  },

  /* ------------------------------------------------------------------ */
  /* /services/integration-ia : votre entreprise est-elle prête pour l'IA ? */
  /* ------------------------------------------------------------------ */
  {
    slug: "crm-ia-entreprise-prete",
    type: "questionnaire",
    titre: "Votre entreprise est-elle prête pour l'IA ?",
    accroche:
      "Dix questions sur vos tâches répétitives, vos données, vos règles de validation et le temps que vous pouvez y consacrer. Le résultat dit si une première automatisation peut démarrer, ou ce qu'il faut ranger et écrire avant.",
    obtenez: [
      "Un score de préparation sur quatre points : tâches identifiées, données et outils, règles de validation, temps disponible",
      "Ce qu'il faut ranger ou écrire avant le premier branchement",
      "Le rapport complet par email, avec l'inventaire des 30 tâches à confier à l'IA en bonus",
    ],
    axes: [
      { id: "taches", label: "Tâches répétitives identifiées" },
      { id: "donnees", label: "Données et outils accessibles" },
      { id: "regles", label: "Règles et validation" },
      { id: "temps", label: "Temps disponible" },
    ],
    questions: [
      {
        id: "inventaire",
        texte: "Avez-vous la liste des tâches que vous refaites chaque semaine à l'identique ?",
        aide: "Répondre aux mêmes questions, recopier des informations, relancer, trier, mettre en forme.",
        axe: "taches",
        options: [
          {
            id: "non",
            label: "Non, je ne l'ai jamais dressée",
            points: 0,
            conseil: {
              titre: "Tenez l'inventaire pendant une semaine",
              texte:
                "Pendant cinq jours, notez chaque tâche que vous faites pour la deuxième fois. À la fin, vous avez la liste par laquelle toute automatisation commence ; sans elle, on automatise ce qui est visible, pas ce qui coûte du temps.",
            },
          },
          {
            id: "idee",
            label: "J'en ai une idée, sans l'avoir écrite",
            points: 1,
            conseil: {
              titre: "Passez de l'idée à la liste chiffrée",
              texte:
                "Écrivez la liste avec, pour chaque tâche, sa fréquence et la durée d'une occurrence, puis multipliez. Le classement par temps passé par mois désigne de lui-même la première tâche à confier à l'IA.",
            },
          },
          {
            id: "ecrite",
            label: "Oui, une liste écrite avec la fréquence de chacune",
            points: 2,
          },
        ],
      },
      {
        id: "etapes-fixes",
        texte: "Ces tâches suivent-elles toujours les mêmes étapes, ou changent-elles à chaque fois ?",
        axe: "taches",
        options: [
          {
            id: "changent",
            label: "Elles changent presque à chaque fois",
            points: 0,
            conseil: {
              titre: "Cherchez la partie fixe de chaque tâche",
              texte:
                "Dans une tâche qui semble varier, isolez ce qui ne change pas (la collecte des informations, la mise en forme, l'envoi) et ce qui varie (la décision). L'IA prend la partie fixe ; la décision reste à vous. S'il n'y a aucune partie fixe, la tâche n'est pas candidate.",
            },
          },
          {
            id: "en-partie",
            label: "En partie : le fond est le même, les détails varient",
            points: 1,
            conseil: {
              titre: "Écrivez la marche à suivre comme pour un nouvel employé",
              texte:
                "Rédigez la procédure de la tâche : ce qui entre, les étapes, ce qui doit sortir, et les cas où l'on s'arrête. Cette page est exactement ce qu'il faut pour brancher une IA et vérifier ensuite ce qu'elle produit.",
            },
          },
          {
            id: "memes",
            label: "Oui, les mêmes étapes à chaque fois, que je pourrais expliquer à un nouvel employé",
            points: 2,
          },
        ],
      },
      {
        id: "temps-taches",
        texte: "Combien de temps par semaine passez-vous sur ces tâches répétitives ?",
        axe: "taches",
        options: [
          {
            id: "inconnu",
            label: "Je ne sais pas",
            points: 0,
            conseil: {
              titre: "Mesurez avant d'automatiser",
              texte:
                "Chronométrez la tâche la plus fréquente sur cinq occurrences et multipliez par sa fréquence hebdomadaire. Sans ce chiffre, impossible de dire si une automatisation vaut sa mise en place, ni de vérifier après coup qu'elle a servi.",
            },
          },
          {
            id: "moins-2h",
            label: "Moins de deux heures",
            points: 1,
            conseil: {
              titre: "Ciblez une seule tâche, la plus fréquente",
              texte:
                "À moins de deux heures par semaine, choisissez une seule tâche, la plus fréquente, et automatisez-la complètement. Une automatisation qui tourne vaut mieux que trois à moitié faites.",
            },
          },
          {
            id: "plus-2h",
            label: "Plus de deux heures, mesurées",
            points: 2,
          },
        ],
      },
      {
        id: "infos-outils",
        texte: "Les informations nécessaires à ces tâches sont-elles dans des outils accessibles ?",
        aide: "CRM, agenda, boîte mail, logiciel de devis ou de facturation, base de documents.",
        axe: "donnees",
        options: [
          {
            id: "dispersees",
            label: "Non : dans la tête, sur papier ou dans des fichiers dispersés",
            points: 0,
            conseil: {
              titre: "Rangez chaque information dans un outil",
              texte:
                "Choisissez l'outil où chaque information vit (contacts dans le CRM, rendez-vous dans l'agenda, prix dans le logiciel de devis) et rangez-y ce qui est encore sur papier ou dans la tête. Une IA ne lit que ce qui est enregistré quelque part.",
            },
          },
          {
            id: "en-partie",
            label: "En partie : certaines dans des outils, d'autres dispersées",
            points: 1,
            conseil: {
              titre: "Listez ce qui manque pour la première tâche",
              texte:
                "Pour la tâche que vous visez en premier, notez chaque information dont elle a besoin et où elle se trouve. Ce qui n'est dans aucun outil est à ranger avant le branchement ; le reste est prêt.",
            },
          },
          {
            id: "en-ligne",
            label: "Oui, dans des outils en ligne, à jour",
            points: 2,
          },
        ],
      },
      {
        id: "connecteurs",
        texte: "Vos outils peuvent-ils échanger des données entre eux ?",
        aide: "API, Zapier, Make ou connecteur natif entre deux outils.",
        axe: "donnees",
        options: [
          {
            id: "inconnu",
            label: "Je ne sais pas",
            points: 0,
            conseil: {
              titre: "Vérifiez vos trois outils principaux",
              texte:
                "Pour vos trois outils principaux, cherchez « API », « intégrations » ou « Zapier » dans leurs réglages ou leur aide en ligne. La réponse tient en dix minutes et conditionne tout : un outil fermé impose de le contourner ou de le remplacer.",
            },
          },
          {
            id: "certains",
            label: "Certains oui, d'autres non",
            points: 1,
            conseil: {
              titre: "Contournez ou remplacez l'outil fermé",
              texte:
                "Pour l'outil sans connecteur, regardez s'il exporte au moins un fichier régulier (CSV) ou envoie des emails structurés : ces deux voies suffisent souvent à un branchement. Sinon, notez-le comme à remplacer à terme.",
            },
          },
          {
            id: "tous",
            label: "Oui, tous les outils principaux",
            points: 2,
          },
        ],
      },
      {
        id: "donnees-propres",
        texte: "Vos données clients sont-elles propres ?",
        aide: "Contacts sans doublons, champs remplis de la même façon, emails et téléphones à jour.",
        axe: "donnees",
        options: [
          {
            id: "non",
            label: "Non, ou je n'en sais rien",
            points: 0,
            conseil: {
              titre: "Vérifiez un échantillon de cinquante fiches",
              texte:
                "Ouvrez cinquante fiches au hasard et comptez : doublons, emails manquants, téléphones dans des formats différents, champs vides. Une IA branchée sur une base sale envoie des messages en double ou aux mauvaises personnes ; le nettoyage passe avant.",
            },
          },
          {
            id: "trous",
            label: "Correctes, avec des trous",
            points: 1,
            conseil: {
              titre: "Fixez le format des champs que l'automatisation utilisera",
              texte:
                "Choisissez un format unique pour les champs clés (téléphone, statut, source) et corrigez l'existant sur ces seuls champs. Le reste peut attendre.",
            },
          },
          {
            id: "regles",
            label: "Oui, avec des règles de saisie écrites",
            points: 2,
          },
        ],
      },
      {
        id: "bon-resultat",
        texte: "Pour la tâche que vous voudriez automatiser, sauriez-vous écrire ce qu'est un bon résultat et ce qu'est une erreur ?",
        axe: "regles",
        options: [
          {
            id: "depend",
            label: "Non, cela dépend du cas",
            points: 0,
            conseil: {
              titre: "Annotez cinq exemples passés",
              texte:
                "Prenez cinq occurrences passées de la tâche : pour chacune, notez ce qui a été produit et si c'était bon. Ces exemples annotés définissent le résultat que l'IA doit reproduire ; sans eux, vous ne pourrez pas juger ce qu'elle rend.",
            },
          },
          {
            id: "a-peu-pres",
            label: "À peu près",
            points: 1,
            conseil: {
              titre: "Précisez les cas où il faut s'arrêter",
              texte:
                "Listez les situations où la tâche doit s'interrompre et remonter à une personne : client mécontent, montant inhabituel, demande hors périmètre. C'est cette liste qui sépare une automatisation sûre d'une source d'incidents.",
            },
          },
          {
            id: "exemples",
            label: "Oui, avec des exemples de bons et de mauvais résultats",
            points: 2,
          },
        ],
      },
      {
        id: "validation",
        texte: "Qui valide ce qu'une automatisation envoie à un client ?",
        axe: "regles",
        options: [
          {
            id: "personne",
            label: "Personne, ce serait envoyé directement",
            points: 0,
            conseil: {
              titre: "Une validation humaine au départ",
              texte:
                "Commencez en mode brouillon : l'IA prépare, une personne relit et envoie. Passez à l'envoi direct seulement après une série de sorties sans correction, et gardez la relecture pour tout ce qui engage (prix, délai, engagement contractuel).",
            },
          },
          {
            id: "quand-temps",
            label: "Une relecture, quand il y a le temps",
            points: 1,
            conseil: {
              titre: "Une règle de validation écrite",
              texte:
                "Écrivez ce qui part sans relecture (accusés de réception, rappels de rendez-vous) et ce qui exige une relecture (devis, réponses à une réclamation). Une règle claire évite la relecture au hasard.",
            },
          },
          {
            id: "designee",
            label: "Une personne désignée, selon une règle écrite",
            points: 2,
          },
        ],
      },
      {
        id: "temps-reglages",
        texte: "Combien de temps pouvez-vous consacrer aux réglages des premières semaines ?",
        axe: "temps",
        options: [
          {
            id: "aucun",
            label: "Aucun, tout doit marcher tout seul",
            points: 0,
            conseil: {
              titre: "Prévoyez un créneau de réglage",
              texte:
                "Toute automatisation demande des ajustements les premières semaines : un cas non prévu, un message à reformuler. Bloquez une heure par semaine pendant un mois ; sans ce temps, la première erreur non traitée mène à la désactivation.",
            },
          },
          {
            id: "sans-creneau",
            label: "Quelques heures, sans créneau fixé",
            points: 1,
            conseil: {
              titre: "Inscrivez le créneau au calendrier",
              texte:
                "Inscrivez le créneau (par exemple le vendredi de 9 h à 10 h pendant quatre semaines) dans l'agenda de la personne qui suivra l'automatisation. Ce qui n'est pas au calendrier passe après l'urgence du jour.",
            },
          },
          {
            id: "reserve",
            label: "Un créneau hebdomadaire réservé pendant le premier mois",
            points: 2,
          },
        ],
      },
      {
        id: "referent",
        texte: "Qui sera référent de l'automatisation une fois en place ?",
        aide: "La personne qui reçoit les alertes, vérifie ce qui sort et sait couper.",
        axe: "temps",
        options: [
          {
            id: "personne",
            label: "Personne de désigné",
            points: 0,
            conseil: {
              titre: "Nommez un référent",
              texte:
                "Désignez une personne qui reçoit les alertes, vérifie une fois par semaine ce qui est sorti et sait couper l'automatisation. Sans référent, une erreur peut tourner pendant des semaines sans que personne ne la voie.",
            },
          },
          {
            id: "moi",
            label: "Moi, en plus de tout le reste",
            points: 1,
            conseil: {
              titre: "Réduisez le rôle à trois gestes",
              texte:
                "Limitez le rôle de référent à trois gestes : lire le résumé hebdomadaire, traiter les cas remontés, savoir couper. Réglez les alertes pour que cela tienne en quelques minutes, et prévoyez qui prend le relais en votre absence.",
            },
          },
          {
            id: "designee",
            label: "Une personne désignée, avec un remplaçant en cas d'absence",
            points: 2,
          },
        ],
      },
    ],
    verdicts: [
      {
        min: 70,
        titre: "Votre entreprise est prête : la première automatisation peut démarrer",
        texte:
          "Tâches identifiées, données accessibles, règles de validation et temps prévu : les conditions sont réunies. Choisissez une seule tâche, la plus fréquente, et faites-la tourner en mode brouillon pendant un mois avant d'élargir.",
      },
      {
        min: 40,
        titre: "Prête sur le fond, pas encore sur le terrain",
        texte:
          "Vous savez quoi automatiser, mais une partie du terrain manque : données à ranger, règle de validation à écrire ou temps à bloquer. Ces préalables se règlent seul, avant tout branchement, et évitent l'automatisation qui s'arrête au premier incident.",
      },
      {
        min: 0,
        titre: "Trop tôt pour brancher une IA : commencez par l'inventaire",
        texte:
          "Sans liste des tâches répétitives ni données rangées dans des outils, une automatisation n'aurait rien de fiable sur quoi s'appuyer. Faites l'inventaire d'une semaine et rangez les informations dans vos outils : le reste se décide ensuite, sur des faits.",
      },
    ],
    ressource: "crm-ia-inventaire-30-taches",
    pole: "crm",
    page: "/services/integration-ia",
  },
];
