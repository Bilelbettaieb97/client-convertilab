import type { FullBlogArticle } from "@/data/blog-articles";

/**
 * Article lié à la page de service /services/sea/tiktok-ads (pôle publicité).
 * Angle : TikTok Ads vu par un commerce ou une marque, piloté au coût par demande.
 * Prix, repères et engagements repris de la page ; aucun chiffre inventé, aucune garantie.
 */
export const article: FullBlogArticle = {
  slug: "tiktok-ads-guide-entreprise",
  title: "TikTok Ads pour une entreprise : le guide de la première campagne",
  seoTitle: "TikTok Ads pour les entreprises : le guide",
  excerpt:
    "TikTok Ads apporte des demandes à un restaurant, un salon ou une boutique dont les clients ont moins de 35 ans, à condition de tester les vidéos et de suivre le coût par demande. Le guide.",
  metaDescription:
    "TikTok Ads pour une entreprise : à qui ça convient, quel budget (dès 500 €/mois), quoi installer avant le premier euro, quelles vidéos tester. Guide pratique.",
  image: "/images/blog/tiktok-ads-guide-entreprise.png",
  category: "Publicité",
  readTime: "9 min",
  publishedAt: "2026-09-17",
  author: { name: "ConvertiLab" },
  tags: [
    "tiktok ads entreprise",
    "publicité tiktok",
    "budget tiktok ads",
    "spark ads tiktok",
    "agence tiktok ads paris",
  ],
  faqItems: [
    {
      question: "Faut-il déjà publier sur TikTok pour faire de la publicité ?",
      answer:
        "Non pour des publicités classiques : un compte TikTok Ads Manager suffit, sans compte public ni abonnés. Oui pour les Spark Ads, qui sponsorisent une vidéo déjà publiée depuis votre compte ou celui d'un créateur avec son accord. On démarre en général en classique, les Spark Ads viennent ensuite.",
    },
    {
      question: "Qui réalise les vidéos de la campagne ?",
      answer:
        "Nous écrivons les scripts, puis nous montons et sous-titrons les vidéos à partir de vos rushs ou d'un tournage au téléphone, dans votre boutique, votre atelier ou votre cuisine. Le nombre de vidéos par mois est écrit sur le devis. Vous n'avez pas besoin de savoir filmer, seulement d'accepter que l'on montre votre produit.",
    },
    {
      question: "Au bout de combien de temps voit-on des demandes ou des commandes ?",
      answer:
        "Les premières demandes ou commandes se lisent en général à partir de la deuxième ou troisième semaine, une fois qu'une vidéo se détache. Il faut ensuite un ou deux cycles de nouvelles vidéos pour stabiliser le coût par demande, d'où les trois mois conseillés avant de juger.",
    },
    {
      question: "Le compte TikTok Ads et le pixel restent-ils à mon nom ?",
      answer:
        "Oui. Le compte TikTok Ads Manager, le pixel, les événements et les audiences sont créés avec vos identifiants. Nous y travaillons avec un accès partenaire, sans en être propriétaires. Si vous arrêtez, nous retirons nos accès et vous conservez l'historique des campagnes, les audiences et toutes les vidéos produites.",
    },
    {
      question: "TikTok Ads fonctionne-t-il pour une entreprise qui vend à des professionnels ?",
      answer:
        "Rarement. Quand la décision d'achat implique plusieurs personnes et un devis, le fil TikTok touche peu de décideurs au bon moment. LinkedIn Ads, qui cible par poste, secteur et taille d'entreprise, ou Google Ads, qui capte ceux qui cherchent déjà votre prestation, donnent le plus souvent un meilleur coût par demande.",
    },
  ],
  content: `Vous tenez un restaurant, un salon, une boutique ou une marque vendue en ligne, et une bonne partie de vos clients a moins de 35 ans. Vous avez peut-être « boosté » une vidéo avec le bouton Promouvoir : des vues, quelques likes, mais aucune commande rattachée à cette dépense. Ce guide vous donne ce qu'il faut vérifier avant de lancer une campagne TikTok Ads : votre clientèle, le budget, les réglages techniques, les vidéos à tourner et la lecture des résultats.

Une campagne TikTok Ads rentable pour une entreprise repose sur trois conditions : une clientèle présente sur TikTok, des vidéos verticales testées par petites vagues et remplacées vite, et un pixel installé avant toute dépense pour suivre un seul chiffre, le coût par demande ou par commande. C'est la méthode que nous appliquons à Rueil-Malmaison, à Paris et en Île-de-France.

[[sommaire]]

![Une campagne TikTok Ads en trois conditions : clientèle vérifiée, vidéos verticales testées par vagues, pixel installé avant le premier euro](/images/blog/tiktok-ads-guide-entreprise.png)

## TikTok Ads est-il fait pour votre entreprise ?

TikTok Ads convient d'abord aux entreprises dont les clients ont moins de 35 ans et dont le produit se découvre par l'image, avec une décision d'achat rapide.

La plateforme est à son avantage pour :

- un restaurant, un food truck, une pâtisserie : le plat se filme, l'adresse se partage ;
- un salon de coiffure, un institut, un barbier : le résultat se voit en quelques secondes ;
- une boutique de mode, de cosmétique ou de décoration, une salle de sport, une marque e-commerce.

À l'inverse, si votre clientèle a surtout plus de 50 ans, si vous vendez à des entreprises ou si vous n'avez rien à montrer en vidéo, [Meta Ads sur Facebook et Instagram](/services/sea/meta-ads), [Google Ads](/services/sea/google-ads) pour ceux qui cherchent déjà votre métier, ou la [publicité LinkedIn pour le B2B](/services/sea/linkedin-ads) touchent mieux vos clients. Notre guide de la [publicité en ligne pour une TPE](/blog/publicite-en-ligne-tpe-guide-google-meta-ads) aide à trancher.

## Quel budget prévoir pour une campagne TikTok Ads ?

Prévoyez un budget média d'au moins 500 € par mois, réglé directement à TikTok depuis votre compte, auquel s'ajoutent les frais de gestion si vous passez par une agence.

En dessous de ce seuil, l'algorithme manque de données pour apprendre et le coût par demande varie d'une semaine à l'autre. Le devis se lit sur deux lignes :

- le budget média, qui va à TikTok et que vous réglez vous-même ;
- les frais de gestion, qui couvrent pilotage, scripts, montage et sous-titres. Chez nous, ils sont fixés sur devis selon le nombre de vidéos par mois, sans commission sur le budget média.

Prévoyez aussi une durée : trois mois est le repère que nous conseillons, le temps d'un ou deux cycles de vidéos. Pour comparer avec les autres plateformes, lisez [combien investir en publicité en ligne](/blog/budget-publicite-en-ligne-combien), puis [estimez votre budget publicitaire](/estimateur-ads) gratuitement.

## Que préparer avant de dépenser le premier euro ?

Avant toute dépense, il faut un compte TikTok Ads Manager à votre nom, un pixel installé et testé, et une page qui se lit bien sur téléphone.

1. Le compte TikTok Ads Manager, créé avec vos identifiants. Nous y travaillons avec un accès partenaire.
2. Le pixel TikTok et les Events API, avec les événements qui comptent : demande de contact, ajout au panier, commande. Sans eux, rien ne s'optimise.
3. Les audiences de retargeting, créées à votre nom dès le départ, pour rediffuser auprès de ceux qui ont regardé sans agir ([le retargeting expliqué](/blog/retargeting-remarketing-guide)).
4. La page d'arrivée, lue sur téléphone : si elle charge lentement ou cache le bouton d'appel, la vidéo aura travaillé pour rien. Une [landing page dédiée](/services/sites-web/landing-page), avec une seule action, est souvent le bon choix.
5. Une offre dite en une phrase : ce que l'on achète, à quel prix, et ce qui se passe après le clic.

## Quelle vidéo fonctionne dans le fil TikTok ?

Une vidéo qui fonctionne sur TikTok ressemble à un contenu du fil, pas à une publicité : verticale, sous-titrée, avec une accroche dès la première seconde et un vrai produit à l'écran.

Ce qui retient l'attention, c'est votre quotidien, filmé simplement :

- une accroche différente par vidéo : une question, un avant-après, un prix, une objection ;
- votre produit, votre lieu ou votre équipe, filmés au téléphone dans votre cuisine, votre atelier ou votre boutique ;
- une seule idée par vidéo et une seule action demandée à la fin.

La règle qui compte le plus : ne pas parier sur une seule vidéo. Trois à cinq vidéos par vague tournent en parallèle avec un budget limité, et les chiffres désignent la gagnante. Ces vidéos se réutilisent ensuite en Reels, comme le détaille notre [guide Meta Ads pour une TPE](/blog/meta-ads-facebook-instagram-guide-tpe).

## Qu'est-ce qu'une Spark Ad et quand l'utiliser ?

Une Spark Ad est une publicité qui sponsorise une vidéo déjà publiée depuis votre compte TikTok, ou depuis celui d'un créateur avec son accord, en gardant le nom du compte, les likes et les commentaires.

C'est le format le moins perçu comme une publicité, donc souvent le plus regardé. Il suppose un compte qui publie et une autorisation Spark Ads. Deux situations reviennent :

- Vous ne publiez pas encore : commencez par des publicités classiques, un compte TikTok Ads Manager suffit.
- Vous publiez déjà : les vidéos qui ont retenu l'attention deviennent des Spark Ads, commentaires compris.

Un créateur qui parle de votre boutique peut aussi vous autoriser à sponsoriser sa vidéo, qui garde son nom et sa crédibilité. Nous ajoutons en général les Spark Ads une fois que le compte a des vidéos qui fonctionnent.

## Comment se déroulent les 90 premiers jours ?

Les 90 premiers jours suivent cinq repères, toujours dans le même ordre : diagnostic, mise en place technique, première vague de tests, renouvellement des vidéos, rapport mensuel.

1. Jour 1, le diagnostic : trente minutes sur l'âge de vos clients, votre produit et ce que vous pouvez filmer.
2. Semaine 1 : compte, pixel et événements testés, trois à cinq scripts, puis les vidéos montées et sous-titrées.
3. Semaines 2 à 4 : les vidéos tournent en parallèle avec un budget limité, et on coupe celles qui ne tiennent pas.
4. Mois 2 et 3 : une publicité s'use vite sur TikTok, de nouvelles accroches partent toutes les deux à trois semaines.
5. Chaque mois : un rapport d'une page et une décision, continuer, augmenter ou arrêter.

Les premières demandes se lisent en général à partir de la deuxième ou troisième semaine, une fois qu'une vidéo se détache. C'est la méthode de tout notre [pôle publicité](/services/sea).

## Quelles erreurs font perdre de l'argent sur TikTok ?

L'erreur la plus coûteuse consiste à dépenser sans pixel : on voit des vues, jamais ce qu'une commande a coûté.

Les autres erreurs les plus fréquentes :

- Booster une vidéo depuis l'application, sans événement de conversion ni page adaptée : l'argent part, rien ne se mesure.
- Diffuser une publicité qui ressemble à une publicité : logo animé, slogan, musique de stock, passés en moins d'une seconde.
- Garder la même vidéo pendant des mois : l'accroche s'use et le coût remonte.
- Lancer plusieurs plateformes à la fois, TikTok, Meta et [Pinterest pour la décoration ou la mode](/services/sea/pinterest-ads), au lieu d'en rendre une rentable d'abord.
- Laisser les demandes sans suite : un message rappelé trois jours plus tard est souvent perdu. Un [CRM avec relances automatiques](/services/crm) règle ce point.

Comparez les plateformes sur le coût par demande, jamais sur les vues : notre guide pour [estimer le retour de ses campagnes](/blog/estimer-roi-google-ads-meta-ads) donne la méthode.

## Ce que fait ConvertiLab

Notre [agence TikTok Ads à Paris et Rueil-Malmaison](/services/sea/tiktok-ads) écrit les scripts, monte et sous-titre vos vidéos verticales à partir de vos rushs ou d'un tournage au téléphone. Nous les testons par vagues de trois à cinq, configurons les Spark Ads depuis votre compte et installons le pixel et les événements avant le premier euro dépensé. Compte TikTok Ads Manager, pixel et audiences créés à votre nom. Frais de gestion sur devis, selon le nombre de vidéos par mois ; budget média conseillé dès 500 €/mois, réglé directement à TikTok ; sans engagement de durée, trois mois conseillés, rapport mensuel d'une page. Plus de 150 clients accompagnés, 4,5/5 sur 14 avis. Si TikTok n'est pas fait pour vous, le diagnostic gratuit vous le dit. Vous pouvez déjà [estimer votre budget publicitaire](/estimateur-ads).

## Questions fréquentes

### Faut-il déjà publier sur TikTok pour faire de la publicité ?

Non pour des publicités classiques : un compte TikTok Ads Manager suffit, sans compte public ni abonnés. Oui pour les Spark Ads, qui sponsorisent une vidéo déjà publiée depuis votre compte ou celui d'un créateur avec son accord. On démarre en général en classique, les Spark Ads viennent ensuite.

### Qui réalise les vidéos de la campagne ?

Nous écrivons les scripts, puis nous montons et sous-titrons les vidéos à partir de vos rushs ou d'un tournage au téléphone, dans votre boutique, votre atelier ou votre cuisine. Le nombre de vidéos par mois est écrit sur le devis. Vous n'avez pas besoin de savoir filmer, seulement d'accepter que l'on montre votre produit.

### Au bout de combien de temps voit-on des demandes ou des commandes ?

Les premières demandes ou commandes se lisent en général à partir de la deuxième ou troisième semaine, une fois qu'une vidéo se détache. Il faut ensuite un ou deux cycles de nouvelles vidéos pour stabiliser le coût par demande, d'où les trois mois conseillés avant de juger.

### Le compte TikTok Ads et le pixel restent-ils à mon nom ?

Oui. Le compte TikTok Ads Manager, le pixel, les événements et les audiences sont créés avec vos identifiants. Nous y travaillons avec un accès partenaire, sans en être propriétaires. Si vous arrêtez, nous retirons nos accès et vous conservez l'historique des campagnes, les audiences et toutes les vidéos produites.

### TikTok Ads fonctionne-t-il pour une entreprise qui vend à des professionnels ?

Rarement. Quand la décision d'achat implique plusieurs personnes et un devis, le fil TikTok touche peu de décideurs au bon moment. LinkedIn Ads, qui cible par poste, secteur et taille d'entreprise, ou Google Ads, qui capte ceux qui cherchent déjà votre prestation, donnent le plus souvent un meilleur coût par demande.

Une campagne TikTok Ads se juge sur un seul chiffre, le coût par demande ou par commande, et se prépare avant le premier euro : clientèle vérifiée, pixel installé, vidéos testées par vagues. Si vos clients ont moins de 35 ans et que votre produit se montre en vidéo, notre page [TikTok Ads](/services/sea/tiktok-ads) détaille la prestation et le devis. Pour savoir si TikTok est fait pour votre activité, [écrivez-nous](/contact) : réponse écrite sous 24 h, sans engagement.`,
};
