import type { FullBlogArticle } from "@/data/blog-articles";

/**
 * Article de fond lié à la sous-page « Visibilité IA » du pôle SEO (/services/seo/visibilite-ia).
 * Faits, méthode et prix repris de la page ; aucune promesse de citation ni de position dans une IA.
 */
export const article: FullBlogArticle = {
  slug: "visibilite-ia-chatgpt-perplexity-geo",
  title: "Visibilité IA (GEO) : comment être cité par ChatGPT et Perplexity",
  excerpt:
    "Robots d'IA autorisés, fichier llms.txt, pages qui répondent en deux phrases, données structurées : ce qu'il faut changer sur votre site pour être cité par ChatGPT, Perplexity et Google.",
  metaDescription:
    "Visibilité IA (GEO) : être cité par ChatGPT, Perplexity et Google AI Overviews. Robots d'IA, llms.txt, contenu citable, mesure. Forfait SEO dès 500 €/mois.",
  image: "/images/blog/visibilite-ia-chatgpt-perplexity-geo.png",
  category: "SEO",
  readTime: "9 min",
  publishedAt: "2026-09-17",
  author: { name: "ConvertiLab" },
  tags: [
    "visibilité ia",
    "référencement ia geo",
    "être cité par chatgpt",
    "seo chatgpt perplexity",
    "fichier llms.txt",
  ],
  faqItems: [
    {
      question: "Pouvez-vous garantir que mon entreprise apparaîtra dans ChatGPT ?",
      answer:
        "Non, et personne ne le peut. Chaque assistant choisit ses sources selon ses propres règles, qui changent souvent, et deux personnes qui posent la même question peuvent recevoir des réponses différentes. Nous nous engageons sur le travail listé au devis, sur la lisibilité de votre site par les robots d'IA et sur un relevé mensuel honnête, jamais sur une position.",
    },
    {
      question: "Faut-il autoriser les robots d'IA sur mon site ?",
      answer:
        "Oui, si vous voulez être cité. GPTBot pour OpenAI, ClaudeBot pour Anthropic et PerplexityBot lisent votre site pour alimenter les réponses, et beaucoup de sites les bloquent sans le savoir. Les AI Overviews de Google reposent sur l'index classique : y être bien indexé reste la première condition. Notre outil gratuit vérifie ces accès en une minute.",
    },
    {
      question: "À quoi sert un fichier llms.txt et est-il obligatoire ?",
      answer:
        "C'est un fichier texte à la racine du site, qui résume votre activité, vos services, vos prix et vos pages importantes dans un format simple pour un modèle de langage. Il n'est pas obligatoire et son usage par chaque assistant n'est pas garanti, mais il est gratuit et clarifie ce que vous faites. Nous en avons un sur notre site.",
    },
    {
      question: "La visibilité IA est-elle utile pour un artisan ou un commerce local ?",
      answer:
        "Oui, dès que vos clients posent des questions précises avant d'acheter : prix, délai, zone, horaires. Un particulier qui demande à un assistant un couvreur disponible dans les Hauts-de-Seine obtient quelques noms, et l'objectif est d'en faire partie. Le travail rejoint celui du référencement local : fiche Google à jour, avis réguliers, coordonnées identiques partout.",
    },
    {
      question: "Combien coûte la visibilité IA avec ConvertiLab ?",
      answer:
        "Rien de plus que le référencement naturel. Elle est incluse dans le forfait SEO, à partir de 500 € par mois, 6 mois minimum puis libre mois par mois, et dans l'audit SEO complet, chiffré sur devis. Une mission ponctuelle (llms.txt, données structurées, pages de questions-réponses) fait l'objet d'un devis écrit à prix fixe, sous 24 h.",
    },
  ],
  content: `Vous êtes artisan, commerçant ou consultant, et vos clients ne cherchent plus seulement sur Google : ils posent leur question à ChatGPT ou à Perplexity, ou lisent le résumé généré en haut des résultats. Ces outils ne renvoient pas dix liens : ils rédigent une réponse à partir de quelques pages et citent leurs sources. Si votre site n'en fait pas partie, vous n'existez pas dans cette réponse. Cet article explique ce que ces assistants regardent, par quoi commencer et comment mesurer ce qui change.

Être cité par ChatGPT ou Perplexity, c'est rendre son site lisible par les robots d'IA, publier des pages qui répondent directement aux questions des clients avec des faits précis, et décrire l'entreprise de la même façon partout, données structurées comprises. C'est le GEO, ou référencement IA. Nous l'appliquons à Rueil-Malmaison, à Paris et en Île-de-France, dans le forfait SEO, sans supplément ni promesse de position.

[[sommaire]]

![Être cité par une IA : des robots d'IA autorisés, une réponse directe en tête de page, une entreprise décrite de façon cohérente et structurée](/images/blog/visibilite-ia-chatgpt-perplexity-geo.png)

## Qu'est-ce que la visibilité IA, ou GEO ?

La visibilité IA, ou GEO (Generative Engine Optimization), consiste à rendre un site lisible et citable par les assistants qui rédigent des réponses : ChatGPT, Perplexity, Claude, Copilot, Gemini et les AI Overviews de Google.

Trois outils à connaître :

- ChatGPT, avec la recherche web, lit des pages en direct et affiche les sites utilisés.
- Perplexity cite toujours ses sources, numérotées, et privilégie les pages qui répondent sans détour.
- Google AI Overviews résume en haut de certains résultats, avec les liens des pages utilisées, à partir de l'index Google classique.

Le GEO vise à faire de votre site l'une de ces sources sur les questions de vos clients : « quel plombier intervient le dimanche à Rueil-Malmaison ? ». Il ne remplace pas le [référencement naturel](/blog/referencement-naturel-tpe-guide-agence-seo), il s'y ajoute : une page bien placée sur Google n'est pas forcément citable, et une page citable sans socle SEO n'est jamais trouvée. Il diffère aussi de l'[intégration d'une IA dans vos outils](/services/integration-ia), où Claude répond à vos devis : ici, il s'agit d'être trouvé, pas d'automatiser.

## Pourquoi votre site n'est-il jamais cité par les IA ?

Trois causes reviennent dans presque tous les sites que nous auditons, et aucune n'est visible depuis votre écran.

- Les robots d'IA sont bloqués sans que vous le sachiez : un réglage de l'hébergeur, une extension de sécurité ou un robots.txt copié d'ailleurs ferment la porte à GPTBot, ClaudeBot ou PerplexityBot. Pour eux, votre site n'existe pas.
- Le contenu ne peut pas être repris : « une équipe passionnée à votre écoute » ne répond à aucune question. Sans prix, délai ni zone d'intervention, une IA n'a rien à citer.
- L'entreprise est mal identifiée : un nom sur le site, un autre sur la fiche Google, une adresse ancienne dans un annuaire. Les assistants recoupent les sources et préfèrent des informations qui concordent.

Un [audit SEO complet](/services/seo/audit) vérifie ces points avec le reste : la lisibilité par les IA en fait partie.

## Par quoi commencer : vos robots d'IA sont-ils autorisés ?

Commencez par vérifier que GPTBot, ClaudeBot et PerplexityBot ont le droit de lire votre site : c'est gratuit, rapide, et c'est le blocage le plus fréquent.

1. Ouvrez votre fichier robots.txt et cherchez les lignes qui interdisent ces robots. Notre guide sur le [fichier robots.txt et le sitemap XML](/blog/generateur-robots-txt-sitemap-xml) explique la syntaxe.
2. Vérifiez le pare-feu de votre hébergeur et vos extensions de sécurité : certains bloquent les robots d'IA par défaut.
3. Publiez un fichier llms.txt à la racine du site : un texte simple qui résume votre activité, vos services, vos prix, votre zone et vos pages importantes. Son usage n'est pas garanti, mais il est gratuit.
4. Assurez-vous que vos pages sont indexées, via la Search Console : c'est le socle des AI Overviews. Sinon, lisez comment [accélérer l'indexation de vos pages](/blog/indexation-google-accelerer).

Si ces fichiers vous sont étrangers, notre [outil SEO gratuit](/seo-check) vérifie en une minute les robots d'IA, les données structurées et les questions-réponses de vos pages, avec un rapport PDF par email.

## Comment écrire une page qu'une IA peut citer ?

Une page citable répond à une vraie question en deux ou trois phrases dès le haut de page, puis développe avec des faits précis : c'est ce passage court que l'assistant reprend.

Pour chaque service :

- Un titre formulé comme la question du client, et une réponse directe juste en dessous.
- Des faits vérifiables : prix ou fourchette, délai, zone, horaires.
- Une FAQ par service, dans le HTML de la page, avec les questions réellement posées avant de signer.
- Des données structurées propres (Organisation, Service, FAQPage, LocalBusiness) : ce balisage schema.org dit aux machines qui vous êtes.
- Les mêmes informations partout : site, fiche Google, annuaires. Le [référencement local](/services/seo/seo-local) et la [fiche Google](/blog/referencement-local-fiche-google-avis-clients) travaillent cette cohérence.

Un exemple pour un restaurant de Rueil-Malmaison : « nous privatisons la salle pour vos événements » n'est pas citable ; « la salle se privatise pour des groupes, en semaine et le samedi midi, sur devis » donne à l'IA une phrase à reprendre. Notre article sur la [rédaction de contenu SEO](/blog/contenu-seo-redaction-optimisee) détaille la méthode, et les [sites que nous créons](/services/sites-web) suivent ces règles dès la livraison.

## Comment savoir si les IA citent votre site ?

On mesure la visibilité IA en posant chaque mois une liste fixe de questions aux assistants et en notant si le site est cité, sur quelle page et avec quelle information.

Trois relevés que vous pouvez contrôler vous-même :

1. Les citations observées : des questions que vos clients pourraient poser, reposées chaque mois à ChatGPT, Perplexity et Google. Cité ou non, quelle page, quelle information.
2. Les passages des robots d'IA : GPTBot, ClaudeBot et PerplexityBot laissent une trace dans les journaux de votre serveur, preuve qu'ils lisent votre site.
3. Vos impressions et clics dans la Search Console : le socle des AI Overviews.

Ce relevé décrit ce que nous observons un jour donné, sans prédire la réponse qu'obtiendra un prospect précis. Nous ne publions aucun résultat chiffré de client dans les IA : les réponses varient d'une personne et d'un jour à l'autre. Ce qui n'est pas repris est retravaillé le mois suivant.

## Combien coûte la visibilité IA et combien de temps faut-il ?

La visibilité IA ne coûte rien de plus que le référencement naturel : elle est incluse dans notre forfait SEO, à partir de 500 € par mois, 6 mois minimum, puis libre mois par mois.

Trois façons d'y accéder :

- Le [forfait SEO](/services/seo/referencement), visibilité IA incluse : technique, contenus, fiche Google, relevé mensuel des citations. Voir [ce que comprend le forfait mensuel](/blog/forfait-seo-mensuel-que-comprend-il).
- L'audit SEO complet, sur devis, avec l'audit de lisibilité IA et un plan d'action priorisé.
- Une mission ponctuelle, sur devis à prix fixe écrit : llms.txt, données structurées ou pages de questions-réponses.

Côté délai, nous ne pouvons pas en donner. Les assistants qui cherchent en direct (Perplexity, ChatGPT avec recherche, AI Overviews) peuvent reprendre une page dès qu'elle est indexée et jugée pertinente ; les modèles entraînés sur un instantané du web mettent des mois. Le travail suit le rythme du forfait : premiers effets mesurables sur Google en général en 3 à 6 mois. Le llms.txt, les données structurées et l'audit restent à vous si vous arrêtez.

## Ce que fait ConvertiLab

Notre prestation de [visibilité IA à Rueil-Malmaison et Paris](/services/seo/visibilite-ia) comprend un audit de lisibilité IA (robots, données structurées, indexation, premières questions aux assistants), la liste des questions à couvrir et la page qui répond à chacune, la réécriture de ces pages pour les rendre citables, avec une FAQ par service et des fiches mises en cohérence, puis un relevé mensuel des citations observées. Tout est inclus dans le forfait SEO dès 500 €/mois, sans supplément ; l'audit et la mission ponctuelle sont sur devis. Vous validez chaque contenu. Elle s'inscrit dans notre [pôle SEO](/services/seo). Plus de 150 clients accompagnés, une note de 4,5/5 sur 14 avis. Pour commencer, [testez gratuitement les robots d'IA de votre site](/seo-check).

## Questions fréquentes

### Pouvez-vous garantir que mon entreprise apparaîtra dans ChatGPT ?

Non, et personne ne le peut. Chaque assistant choisit ses sources selon ses propres règles, qui changent souvent, et deux personnes qui posent la même question peuvent recevoir des réponses différentes. Nous nous engageons sur le travail listé au devis, sur la lisibilité de votre site par les robots d'IA et sur un relevé mensuel honnête, jamais sur une position.

### Faut-il autoriser les robots d'IA sur mon site ?

Oui, si vous voulez être cité. GPTBot pour OpenAI, ClaudeBot pour Anthropic et PerplexityBot lisent votre site pour alimenter les réponses, et beaucoup de sites les bloquent sans le savoir. Les AI Overviews de Google reposent sur l'index classique : y être bien indexé reste la première condition. Notre outil gratuit vérifie ces accès en une minute.

### À quoi sert un fichier llms.txt et est-il obligatoire ?

C'est un fichier texte à la racine du site, qui résume votre activité, vos services, vos prix et vos pages importantes dans un format simple pour un modèle de langage. Il n'est pas obligatoire et son usage par chaque assistant n'est pas garanti, mais il est gratuit et clarifie ce que vous faites. Nous en avons un sur notre site.

### La visibilité IA est-elle utile pour un artisan ou un commerce local ?

Oui, dès que vos clients posent des questions précises avant d'acheter : prix, délai, zone, horaires. Un particulier qui demande à un assistant un couvreur disponible dans les Hauts-de-Seine obtient quelques noms, et l'objectif est d'en faire partie. Le travail rejoint celui du référencement local : fiche Google à jour, avis réguliers, coordonnées identiques partout.

### Combien coûte la visibilité IA avec ConvertiLab ?

Rien de plus que le référencement naturel. Elle est incluse dans le forfait SEO, à partir de 500 € par mois, 6 mois minimum puis libre mois par mois, et dans l'audit SEO complet, chiffré sur devis. Une mission ponctuelle (llms.txt, données structurées, pages de questions-réponses) fait l'objet d'un devis écrit à prix fixe, sous 24 h.

Être cité par ChatGPT, Perplexity ou les AI Overviews ne demande pas un chantier à part : des robots d'IA autorisés, un llms.txt, des pages qui répondent en deux phrases avec des faits précis, des données structurées propres et une entreprise décrite de la même façon partout. Le reste appartient aux assistants, et nous préférons vous le dire. Notre page [visibilité IA](/services/seo/visibilite-ia) détaille la méthode et les prix. Pour faire le point, [écrivez-nous](/contact) : réponse écrite sous 24 h, sans engagement.`,
};
