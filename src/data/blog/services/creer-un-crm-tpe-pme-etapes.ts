import type { FullBlogArticle } from "@/data/blog-articles";

/**
 * Article de fond lié à la sous-page « Création de CRM » (/services/crm/creation-crm).
 * Étapes, livrables et engagements repris de la page ; aucun tarif public (sur devis,
 * diagnostic d'une journée, prix fixe sous 24 h), relances par email uniquement.
 */
export const article: FullBlogArticle = {
  slug: "creer-un-crm-tpe-pme-etapes",
  title: "Créer un CRM pour une TPE ou une PME : les étapes dans l'ordre",
  excerpt:
    "Quand un tableur ne suffit plus, quel CRM choisir, comment dessiner le pipeline, importer des contacts propres et relier le site : les étapes pour créer le CRM d'une TPE ou d'une PME.",
  metaDescription:
    "Créer un CRM pour une TPE ou une PME : choix de l'outil, pipeline, champs, import des contacts, site et campagnes reliés, prix et délai. Guide étape par étape.",
  image: "/images/blog/creer-un-crm-tpe-pme-etapes.png",
  category: "CRM",
  readTime: "9 min",
  publishedAt: "2026-09-17",
  author: { name: "ConvertiLab" },
  tags: ["créer un crm", "crm pour tpe", "crm pme", "mise en place crm", "quel crm choisir"],
  faqItems: [
    {
      question: "Quel CRM choisir quand on est une TPE ou une PME ?",
      answer:
        "Celui que votre équipe remplira vraiment. Pipedrive, HubSpot, Zoho CRM, Brevo, Sellsy, Axonaut ou monday CRM couvrent l'essentiel d'une petite structure : pipeline, champs, relances par email, lien avec le site. Salesforce se justifie au-delà, ou quand un groupe l'impose. Comparez deux ou trois options sur vos cas réels, puis écrivez les raisons du choix.",
    },
    {
      question: "Combien de temps prend la mise en place d'un CRM ?",
      answer:
        "Une journée de diagnostic, un plan écrit avec un prix fixe sous 24 h, puis quelques semaines de mise en place selon le nombre de branchements (formulaires du site, campagnes, import des contacts) et de relances à écrire. Le délai exact figure dans le devis, avant tout engagement. Votre activité continue pendant ce temps : rien n'est coupé.",
    },
    {
      question: "Mes contacts sont éparpillés entre Excel, ma boîte mail et mon téléphone : comment les récupérer ?",
      answer:
        "En rassemblant toutes les sources dans un seul fichier, une ligne par personne, puis en le nettoyant avant l'import : doublons, adresses invalides, colonnes inutiles, téléphones au même format. Vous validez ce fichier avant que quoi que ce soit n'entre dans le CRM. Vos fichiers d'origine restent à vous, et le contenu du CRM reste exportable à tout moment.",
    },
    {
      question: "Le CRM peut-il être relié à mon site et à mes campagnes publicitaires ?",
      answer:
        "Oui, c'est le cœur de la mise en place. Chaque formulaire du site crée une fiche avec sa source et la page d'origine ; les demandes venues de Google Ads ou de Meta Ads arrivent avec le nom de la campagne. Un formulaire WordPress, Wix, Shopify ou sur mesure se relie dans la plupart des cas.",
    },
    {
      question: "Que devient mon CRM si nous arrêtons de travailler ensemble ?",
      answer:
        "Rien ne change pour vous. Le compte, les accès, l'historique et les contacts sont à votre nom dès le premier jour, et l'abonnement est réglé directement à l'éditeur. Nous ne gardons aucune copie de vos données une fois la mise en place terminée. Le suivi mensuel est facultatif et s'arrête quand vous le décidez.",
    },
  ],
  content: `Vous avez un tableur avec vos clients, une boîte mail pleine de devis et un téléphone où dorment des contacts jamais recopiés. Les demandes arrivent du formulaire du site, d'Instagram, d'un appel manqué, parfois d'une campagne Google Ads, et celle de vendredi soir attend toujours mardi. Ce guide vous donne, dans l'ordre, les étapes pour créer un CRM adapté à une TPE ou une PME, du bon moment jusqu'aux erreurs à éviter.

Créer un CRM, c'est d'abord écrire les étapes de votre vente et les informations à noter pour chaque demande, puis choisir l'outil, importer des contacts propres et relier le site et les campagnes pour que chaque demande arrive au même endroit avec sa source. Nous suivons cette méthode à Rueil-Malmaison, à Paris et en Île-de-France, avec plus de 150 clients accompagnés.

[[sommaire]]

![Les quatre temps de la création d'un CRM pour une TPE : diagnostic d'une journée, plan écrit, pipeline et import des contacts, prise en main par l'équipe](/images/blog/creer-un-crm-tpe-pme-etapes.png)

## Quand une TPE ou une PME a-t-elle besoin d'un CRM ?

Une TPE a besoin d'un CRM dès que les demandes arrivent de plusieurs côtés et que personne ne sait plus qui doit relancer qui, ni quand.

Trois signes reviennent chez les petites entreprises que nous rencontrons dans les Hauts-de-Seine et à Paris :

- Trois fichiers, trois versions de la même liste : un tableur, les contacts du téléphone, l'historique de la boîte mail.
- Des demandes qui arrivent partout, sauf au même endroit : formulaire du site, message Instagram, appel manqué, campagne Meta Ads.
- Aucune prochaine action écrite : un devis part, puis plus rien.

Avec quelques demandes par mois traitées le jour même, un tableur bien tenu suffit encore. Le bon moment, c'est celui où le suivi vous échappe. Un artisan qui cherche à [trouver des clients](/blog/trouver-clients-artisan) en perd souvent autant qu'il en gagne, faute de relance.

## Quel CRM choisir pour une petite entreprise ?

Le bon CRM est celui que votre équipe remplira vraiment, pas le plus complet.

Pour une petite structure, Pipedrive, HubSpot, Zoho CRM, Brevo, Sellsy, Axonaut ou monday CRM couvrent l'essentiel : un pipeline, des champs, des relances par email, un lien avec le site. Salesforce se justifie au-delà, ou quand un groupe l'impose. Si vous avez déjà un outil, partez de celui-là.

Quatre critères suffisent en général pour trancher :

- Votre taille : le nombre de personnes qui écriront dedans chaque jour.
- Vos outils actuels : boîte mail, agenda, site, logiciel de devis, campagnes.
- Le coût de l'abonnement, réglé directement à l'éditeur.
- La simplicité de l'écran principal : si faire avancer une carte demande trois clics, elle ne bougera pas.

Notre pôle [CRM et relances automatiques](/services/crm) compare toujours deux ou trois options sur vos cas réels, puis écrit les raisons du choix.

## Par quoi commencer : le pipeline de vente et les champs utiles

Commencez par écrire les étapes réelles de votre vente, de la demande à la décision, avant d'ouvrir le moindre outil.

Un pipeline est une suite de colonnes ; chaque demande est une carte qui avance de gauche à droite, avec une condition d'entrée et de sortie par étape. Exemple chez un artisan :

1. Nouvelle demande : formulaire ou appel reçu.
2. Contact établi : vous avez compris le besoin.
3. Devis envoyé : la date est notée.
4. En réflexion : la personne a répondu, sans décider.
5. Gagné ou perdu, avec un motif si c'est perdu.

Monsieur Arancini, producteur d'arancini artisanaux, travaille avec six étapes dans Pipedrive, de la prise de contact à la vente. Gardez le vôtre court : trop de colonnes, et l'équipe cesse de déplacer les cartes.

Côté champs, gardez ceux que vous relirez pour agir : origine de la demande, prestation, montant du devis, prochaine action datée, motif de perte. Prestation et motif en listes fermées, sinon « SDB » et « salle de bain » deviennent deux prestations. Un seul format de téléphone dès le départ, pour ne pas avoir à [nettoyer votre CRM de ses doublons](/blog/nettoyer-son-crm-doublons-contacts) quelques mois plus tard.

## Comment importer vos contacts sans importer le désordre ?

Rassemblez toutes vos sources dans un seul fichier, une ligne par personne, et nettoyez-le avant que quoi que ce soit n'entre dans le CRM.

Dans l'ordre :

1. Exporter chaque source : tableur, contacts du téléphone, boîte mail, ancien logiciel.
2. Fusionner en un seul fichier, mêmes colonnes partout.
3. Supprimer les doublons, les adresses invalides et les colonnes inutiles.
4. Harmoniser les formats : téléphones, majuscules, villes.
5. Faire valider le fichier par la personne qui connaît les clients.

Vos fichiers d'origine restent à vous, et le contenu du CRM doit rester exportable à tout moment. Si votre base est ancienne, notre prestation de [nettoyage du CRM](/services/crm/nettoyage-crm) dit quoi archiver plutôt qu'importer.

## Comment relier le CRM à votre site et à vos campagnes ?

Chaque formulaire du site doit créer une fiche dans le CRM, avec sa source et la page d'origine, sans ressaisie.

Tant que les demandes sont recopiées à la main, elles sont recopiées tard, ou pas du tout. Les branchements à prévoir :

- Les formulaires du site : une fiche par envoi. WordPress, Wix, Shopify ou sur mesure se relient dans la plupart des cas.
- Les campagnes [Google Ads](/services/sea/google-ads) et [Meta Ads](/services/sea/meta-ads) : la demande arrive avec le nom de la campagne, donc le canal qui amène des clients.

Viennent ensuite les premières relances par email : accusé de réception, relance du devis resté sans réponse quelques jours après l'envoi, rappel de rendez-vous la veille. Notre guide sur le [CRM et les relances automatiques](/blog/crm-relances-automatiques-tpe-pme-guide) détaille ces séquences. Pas encore de site ? [Demandez une maquette gratuite](/demande-maquette), avec un [formulaire de contact bien conçu](/blog/formulaire-contact-efficace-conversions).

## Combien coûte et combien de temps prend la création d'un CRM ?

La création d'un CRM se chiffre sur devis, avec un prix fixe écrit avant de commencer, après une journée de diagnostic.

Aucun tarif public : contacts, canaux et outil diffèrent d'une entreprise à l'autre. Ce qui fait varier le devis : le nombre de branchements, l'état des contacts à importer, le nombre de relances à écrire et la taille de l'équipe à former.

Côté délai, comptez une journée de diagnostic, un plan écrit avec un prix fixe sous 24 h, puis quelques semaines selon les branchements. L'abonnement à l'outil est à part, réglé à l'éditeur, sur un compte à votre nom. Une [stratégie marketing digital de PME](/blog/strategie-marketing-digital-pme) sans suivi des demandes perd une partie de ce qu'elle a payé pour les obtenir.

## Quelles erreurs éviter au lancement d'un CRM ?

L'erreur la plus fréquente : configurer l'outil avant d'avoir écrit le process de vente.

- Un pipeline copié d'un modèle générique, étranger à votre façon de vendre.
- Un import sans nettoyage : les doublons du tableur deviennent ceux du CRM.
- Aucune règle écrite : qui crée la fiche, qui la fait avancer, quel format de téléphone.
- Un compte ouvert au nom du prestataire : exigez que **le compte, les accès et l'historique soient au vôtre** dès le premier jour.
- Tout automatiser dès le premier mois. Commencez par quelques relances par email testées sur de vrais cas ; l'[intégration de l'IA avec Claude](/services/integration-ia) viendra ensuite pour le répétitif (devis reçus la nuit, tri des emails), comme l'explique notre article sur l'[intégration IA pour TPE et PME](/blog/integration-ia-tpe-pme-claude-automatisation).

Vous avez déjà un CRM que personne ne remplit ? C'est le terrain de l'[optimisation du CRM](/services/crm/optimisation-crm), pas de la création.

## Ce que fait ConvertiLab

Notre prestation de [création de CRM pour TPE et PME](/services/crm/creation-crm) commence par un diagnostic d'une journée : d'où viennent vos demandes, où vivent vos contacts, qui traite quoi. Sous 24 h, vous recevez un plan écrit et un prix fixe ; vous pouvez vous arrêter là, le plan reste à vous. Puis nous créons le compte à votre nom sur l'outil retenu, importons vos contacts nettoyés, relions le site et les campagnes, écrivons les premières relances par email et formons votre équipe avec un guide de deux pages. Création sur devis, suivi mensuel facultatif, abonnement réglé à l'éditeur. Plus de 150 clients accompagnés, 4,9/5 sur 15 avis.

## Questions fréquentes

### Quel CRM choisir quand on est une TPE ou une PME ?

Celui que votre équipe remplira vraiment. Pipedrive, HubSpot, Zoho CRM, Brevo, Sellsy, Axonaut ou monday CRM couvrent l'essentiel d'une petite structure : pipeline, champs, relances par email, lien avec le site. Salesforce se justifie au-delà, ou quand un groupe l'impose. Comparez deux ou trois options sur vos cas réels, puis écrivez les raisons du choix.

### Combien de temps prend la mise en place d'un CRM ?

Une journée de diagnostic, un plan écrit avec un prix fixe sous 24 h, puis quelques semaines de mise en place selon le nombre de branchements (formulaires du site, campagnes, import des contacts) et de relances à écrire. Le délai exact figure dans le devis, avant tout engagement. Votre activité continue pendant ce temps : rien n'est coupé.

### Mes contacts sont éparpillés entre Excel, ma boîte mail et mon téléphone : comment les récupérer ?

En rassemblant toutes les sources dans un seul fichier, une ligne par personne, puis en le nettoyant avant l'import : doublons, adresses invalides, colonnes inutiles, téléphones au même format. Vous validez ce fichier avant que quoi que ce soit n'entre dans le CRM. Vos fichiers d'origine restent à vous, et le contenu du CRM reste exportable à tout moment.

### Le CRM peut-il être relié à mon site et à mes campagnes publicitaires ?

Oui, c'est le cœur de la mise en place. Chaque formulaire du site crée une fiche avec sa source et la page d'origine ; les demandes venues de Google Ads ou de Meta Ads arrivent avec le nom de la campagne. Un formulaire WordPress, Wix, Shopify ou sur mesure se relie dans la plupart des cas.

### Que devient mon CRM si nous arrêtons de travailler ensemble ?

Rien ne change pour vous. Le compte, les accès, l'historique et les contacts sont à votre nom dès le premier jour, et l'abonnement est réglé directement à l'éditeur. Nous ne gardons aucune copie de vos données une fois la mise en place terminée. Le suivi mensuel est facultatif et s'arrête quand vous le décidez.

Créer un CRM pour une TPE ou une PME tient à quelques décisions prises dans le bon ordre : le process de vente écrit, l'outil choisi pour de vraies raisons, des champs en listes fermées, des contacts nettoyés avant l'import, un site et des campagnes reliés, puis une équipe formée. Notre page [création de CRM](/services/crm/creation-crm) détaille la prestation, du diagnostic à la remise des clés. Pour parler de vos contacts, [écrivez-nous](/contact) : réponse sous 24 h, sans engagement.`,
};
