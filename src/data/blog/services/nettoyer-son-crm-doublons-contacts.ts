import type { FullBlogArticle } from "@/data/blog-articles";

/**
 * Article de fond lié à la sous-page « Nettoyage de CRM » (/services/crm/nettoyage-crm).
 * Règles de fusion, déroulé, engagements et FAQ repris de la page ; aucun chiffre inventé,
 * aucune suppression sans validation, contacts inactifs archivés.
 */
export const article: FullBlogArticle = {
  slug: "nettoyer-son-crm-doublons-contacts",
  title: "Nettoyer son CRM : doublons, contacts inactifs et champs à jour",
  excerpt:
    "Les signes d'un CRM encombré, l'export à faire avant tout, les règles pour fusionner les doublons, le sort des contacts inactifs, la durée, le coût et les habitudes qui gardent la base propre.",
  metaDescription:
    "Nettoyer son CRM : repérer et fusionner les doublons, archiver les contacts inactifs, harmoniser les champs, écrire les règles. La méthode pour TPE et PME.",
  image: "/images/blog/nettoyer-son-crm-doublons-contacts.png",
  category: "CRM",
  readTime: "9 min",
  publishedAt: "2026-09-17",
  author: { name: "ConvertiLab" },
  tags: [
    "nettoyage crm",
    "doublons crm",
    "nettoyer base de contacts",
    "fusionner doublons hubspot pipedrive",
    "qualité des données crm",
  ],
  faqItems: [
    {
      question: "Supprimez-vous des contacts pendant le nettoyage ?",
      answer:
        "Le moins possible, et jamais sans vous. La base entière est exportée dans un fichier daté avant toute action. Les seules suppressions concernent les fiches inutilisables, sans nom, sans email, sans téléphone et sans activité, dans une liste que vous validez. Les contacts inactifs sont archivés, jamais supprimés : ils gardent leur historique.",
    },
    {
      question: "Comment décidez-vous que deux fiches sont un doublon ?",
      answer:
        "Avec des règles écrites avant de commencer et validées par vous. Même email : même contact, sans exception. Même téléphone et même nom de famille : fusion après vérification du prénom. Même téléphone et noms différents : deux personnes à relier, pas à fusionner. La fiche conservée est celle qui a le plus d'historique.",
    },
    {
      question: "Faut-il arrêter de travailler dans le CRM pendant le nettoyage ?",
      answer:
        "Pas complètement. Nous demandons de suspendre les créations de fiches et les imports pendant quelques heures ou quelques jours, le temps des fusions, sinon des doublons réapparaissent. Consulter les fiches, passer des appels et noter des échanges restent possibles. Le créneau est fixé avec vous, hors de vos périodes chargées.",
    },
    {
      question: "Le nettoyage d'un CRM aide-t-il pour le RGPD ?",
      answer:
        "Il y contribue directement : ne garder que les données nécessaires, savoir depuis quand un contact n'a pas été sollicité, documenter les durées de conservation. Nous écrivons les règles d'archivage pour votre registre. Nous ne sommes pas un cabinet juridique : pour une activité sensible, faites relire le dispositif par votre conseil.",
    },
    {
      question: "Travaillez-vous sur tous les CRM ?",
      answer:
        "Oui, sur l'outil que vous avez déjà, sans migration : HubSpot, Salesforce, Pipedrive, Zoho CRM, Brevo, Sellsy, Axonaut ou monday CRM. Les règles de fusion et d'archivage sont les mêmes partout, seuls les réglages changent. Votre compte et votre abonnement restent inchangés, réglés à l'éditeur.",
    },
  ],
  content: `Vous ouvrez votre CRM pour relancer un devis et vous trouvez la même personne trois fois. Votre dernière campagne est partie à moitié dans le vide, et l'origine des demandes est écrite de cinq façons, si bien qu'aucun filtre ne répond juste. C'est le lot de la plupart des TPE et PME après quelques années. Ce guide vous donne la méthode : les signes, l'ordre des opérations, les règles de fusion, le sort des contacts inactifs, la durée, le coût et les habitudes qui gardent la base propre.

Nettoyer son CRM, c'est exporter la base, écrire des règles de doublons et d'archivage, fusionner les fiches en double, archiver les contacts inactifs sans les supprimer, harmoniser les champs, puis compter ce qui a changé. Nous appliquons cette méthode sur HubSpot, Salesforce, Pipedrive, Zoho CRM, Brevo, Sellsy, Axonaut et monday CRM, depuis Rueil-Malmaison, pour des entreprises de Paris et d'Île-de-France.

[[sommaire]]

![Un CRM avant et après nettoyage : doublons fusionnés, contacts inactifs archivés, champs harmonisés, règles écrites](/images/blog/nettoyer-son-crm-doublons-contacts.png)

## Comment savoir si votre CRM a besoin d'un nettoyage ?

Votre CRM a besoin d'un nettoyage dès que vous hésitez à envoyer une campagne parce que vous ne savez plus qui est dans la liste. Quelques signes suffisent :

- La même personne apparaît deux ou trois fois : créée à la main, importée d'un tableur, puis arrivée par un formulaire.
- Vos emails de relance rebondissent, et des prospects muets depuis des années partagent la liste de vos clients actifs.
- La moitié des fiches n'ont ni origine ni prochaine action.
- Une même information est écrite de plusieurs façons : « Google », « Adwords » et « pub » pour la même origine, des téléphones en quatre formats, des statuts inventés au fil de l'eau.

Aucun de ces signes n'est une question de rigueur. Sans règle écrite, une base se salit toute seule : chaque nouvelle source (site, salon, tableur, campagne) apporte sa façon d'écrire. Un artisan qui reçoit ses demandes par téléphone, par son site et par une publicité sur Facebook a trois portes d'entrée, donc trois occasions de créer un doublon.

## Comment fusionner les doublons sans perdre d'historique ?

Deux fiches ne sont fusionnées que selon des règles écrites à l'avance, et la fiche conservée est toujours celle qui a le plus d'historique. Avant la première fusion, la base entière a été exportée dans un fichier daté que vous gardez. Les règles que nous appliquons le plus souvent :

- Même email : même contact, sans exception.
- Même téléphone et même nom de famille : fusion après vérification du prénom.
- Même téléphone et noms différents : deux personnes à relier, pas à fusionner.
- Même nom seul, sans email ni téléphone en commun : pas de fusion. Un homonyme n'est pas un doublon.

Avant chaque fusion, tout ce qui manque sur la fiche conservée est reporté depuis l'autre : second numéro, adresse, notes, affaire en cours. Le travail se fait groupe par groupe : la détection automatique de votre CRM propose, une personne valide. Plus long qu'un bouton « tout fusionner », mais aucun client mélangé.

> Une base propre n'est pas une base petite : c'est une base où chaque fiche a une origine, un propriétaire et une prochaine action.

## Que faire des contacts inactifs et des emails qui rebondissent ?

Un contact inactif s'archive, il ne se supprime pas : il garde son historique, sort des envois et peut revenir le jour où il rappelle. Les seules suppressions concernent les fiches inutilisables, sans nom, sans email, sans téléphone et sans activité, dans une liste que vous validez.

- Les adresses qui rebondissent : marquées invalides et retirées des envois. Continuer à les solliciter abîme la réputation de votre domaine d'envoi, donc la délivrabilité de tous vos emails, devis compris. Notre guide sur [la newsletter et son taux d'ouverture](/blog/email-marketing-newsletter-strategies) le détaille.
- Les prospects sans échange depuis longtemps : archivés avec une étiquette et une date. Le seuil dépend de votre cycle de vente.
- Les affaires abandonnées : fermées avec un motif, pour que le pipeline ne montre que ce qui est vivant.

Ce tri contribue à la conformité RGPD : ne garder que les données nécessaires et documenter les durées de conservation. Pour la partie site, voyez notre guide sur [la conformité RGPD d'un site web](/blog/rgpd-site-web-conformite-guide).

## Comment harmoniser les champs pour retrouver des filtres fiables ?

Harmoniser les champs, c'est décider d'un seul format par information et remplacer le texte libre par des listes fermées. Sans cela, aucun filtre ne répond juste.

- Les téléphones : un seul format, pour que les rappels et les recherches fonctionnent.
- L'origine des demandes : une liste fermée (site, fiche Google, Google Ads, Meta Ads, recommandation, salon), remplie automatiquement par formulaires et campagnes.
- Le statut : quelques valeurs définies avec vous, dans l'ordre de votre cycle de vente.
- Les prestations : les intitulés exacts de votre grille tarifaire, pour compter ce qui se vend.

Une fois l'origine fiabilisée, vous pouvez enfin comparer : combien de demandes viennent de vos [campagnes Google Ads](/services/sea/google-ads), combien de vos [publicités Meta Ads](/services/sea/meta-ads), combien des recommandations, et lesquelles signent. Un [formulaire de contact bien conçu](/blog/formulaire-contact-efficace-conversions) renseigne l'origine dès la première saisie.

## Combien de temps prend un nettoyage de CRM, et combien coûte-t-il ?

La durée dépend du nombre de fiches, de sources et de l'état des champs ; le diagnostic d'une journée sert à la mesurer avant de s'engager. Le déroulé :

1. Le premier jour, le diagnostic sur votre vrai compte : doublons repérés par email puis par téléphone et nom, fiches sans origine ni prochaine action, contacts inactifs, formats. Vous recevez les chiffres de départ.
2. Sous 24 h, les règles écrites et un prix fixe : règles de doublons, d'archivage et de format, périmètre, délai. Vous pouvez vous arrêter là, les règles restent à vous.
3. La semaine du nettoyage : export complet et daté avant toute action, saisies suspendues, suppressions validées, fusions groupe par groupe, archivage, harmonisation, puis un second comptage.
4. Ensuite, les garde-fous et le guide d'équipe, avec un suivi mensuel proposé, jamais imposé.

Il n'y a pas de tarif public : aucune base n'a le même nombre de fiches ni de sources. Le diagnostic a un prix fixe communiqué sous 24 h ; le nettoyage est chiffré sur devis, avec un délai écrit. L'abonnement à votre CRM reste réglé à son éditeur. Si vous partez d'un tableur, la [création de CRM](/services/crm/creation-crm) comprend le nettoyage des fichiers avant l'import.

## Comment garder un CRM propre après le nettoyage ?

Un CRM reste propre grâce à quatre habitudes mises en place dès la fin du nettoyage, et à une personne nommée pour les tenir.

1. Une seule porte d'entrée : formulaires reliés au CRM et saisie directe dans l'outil, plus d'import de tableur sans règles.
2. La détection de doublons de votre CRM activée à la création d'une fiche, à allumer et à régler.
3. Un filtre « fiches incomplètes » revu chaque semaine.
4. Un nettoyage léger chaque trimestre, inscrit au calendrier.

Ces règles tiennent dans un guide de deux pages, rangé dans le CRM. Une base propre est aussi le point de départ des relances automatiques : une séquence d'emails envoyée à des doublons ou à des adresses mortes fait plus de mal que de bien. C'est l'objet de l'[optimisation du CRM](/services/crm/optimisation-crm) et de notre guide sur [les relances et les rappels de rendez-vous](/blog/optimiser-son-crm-relances-rendez-vous). Pour le répétitif qui reste, l'[intégration de Claude à vos outils](/services/integration-ia) prend le relais une fois les données rangées : notre article sur [l'automatisation avec Claude](/blog/integration-ia-tpe-pme-claude-automatisation) explique par quoi commencer.

## Ce que fait ConvertiLab

Notre prestation de [nettoyage de CRM pour TPE et PME](/services/crm/nettoyage-crm) fusionne les doublons, archive les contacts inactifs, harmonise les champs et écrit les règles pour que la base reste propre, sur votre outil actuel. Export complet avant toute action, aucune suppression sans votre validation, comptage avant et après dans une note datée, guide d'équipe de deux pages. Diagnostic d'une journée à prix fixe communiqué sous 24 h, nettoyage chiffré sur devis, suivi mensuel facultatif. La même page propose un analyseur gratuit : collez un export de vos contacts, il compte les doublons, les emails invalides et les téléphones manquants sans envoyer votre fichier. Cette prestation fait partie de notre pôle [CRM et relances automatiques](/services/crm), depuis Rueil-Malmaison, pour Paris, les Hauts-de-Seine et l'Île-de-France. Plus de 150 clients accompagnés, 4,5/5 sur 14 avis.

## Questions fréquentes

### Supprimez-vous des contacts pendant le nettoyage ?

Le moins possible, et jamais sans vous. La base entière est exportée dans un fichier daté avant toute action. Les seules suppressions concernent les fiches inutilisables, sans nom, sans email, sans téléphone et sans activité, dans une liste que vous validez. Les contacts inactifs sont archivés, jamais supprimés : ils gardent leur historique.

### Comment décidez-vous que deux fiches sont un doublon ?

Avec des règles écrites avant de commencer et validées par vous. Même email : même contact, sans exception. Même téléphone et même nom de famille : fusion après vérification du prénom. Même téléphone et noms différents : deux personnes à relier, pas à fusionner. La fiche conservée est celle qui a le plus d'historique.

### Faut-il arrêter de travailler dans le CRM pendant le nettoyage ?

Pas complètement. Nous demandons de suspendre les créations de fiches et les imports pendant quelques heures ou quelques jours, le temps des fusions, sinon des doublons réapparaissent. Consulter les fiches, passer des appels et noter des échanges restent possibles. Le créneau est fixé avec vous, hors de vos périodes chargées.

### Le nettoyage d'un CRM aide-t-il pour le RGPD ?

Il y contribue directement : ne garder que les données nécessaires, savoir depuis quand un contact n'a pas été sollicité, documenter les durées de conservation. Nous écrivons les règles d'archivage pour votre registre. Nous ne sommes pas un cabinet juridique : pour une activité sensible, faites relire le dispositif par votre conseil.

### Travaillez-vous sur tous les CRM ?

Oui, sur l'outil que vous avez déjà, sans migration : HubSpot, Salesforce, Pipedrive, Zoho CRM, Brevo, Sellsy, Axonaut ou monday CRM. Les règles de fusion et d'archivage sont les mêmes partout, seuls les réglages changent. Votre compte et votre abonnement restent inchangés, réglés à l'éditeur.

Un CRM propre ne tient pas à un grand ménage annuel mais à trois choses : un export avant d'agir, des règles écrites et validées, et quelques habitudes tenues par une personne nommée. Notre page [nettoyage de CRM](/services/crm/nettoyage-crm) détaille les livrables et le déroulé ; pour savoir si un diagnostic a du sens chez vous, [écrivez-nous](/contact) : réponse sous 24 h, sans engagement. Pour la suite, notre guide [CRM et relances automatiques](/blog/crm-relances-automatiques-tpe-pme-guide) montre ce qu'une base propre permet.`,
};
