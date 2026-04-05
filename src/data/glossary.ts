export interface FAQItem {
  question: string;
  answer: string;
}

export interface GlossaryTerm {
  slug: string;
  term: string;
  definition: string;
  content: string;
  importance: string;
  examples: string[];
  faqItems: FAQItem[];
  lastUpdated: string;
  relatedTerms: string[];
  relatedService: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "seo",
    term: "SEO (Search Engine Optimization)",
    definition:
      "Le SEO, ou référencement naturel, est l'ensemble des techniques qui permettent d'améliorer la position d'un site web dans les résultats de recherche Google, sans payer de publicité.",
    content: `## Les 3 piliers du SEO

Le référencement naturel repose sur trois piliers fondamentaux qui, combinés, déterminent la visibilité de votre site dans les résultats de recherche.

Le **SEO technique** concerne l'infrastructure de votre site : vitesse de chargement (un site qui se charge en moins de 2 secondes a un taux de rebond 9% inférieur à un site qui met 5 secondes), compatibilité mobile, structure HTML propre avec des balises Hn correctement hiérarchisées, certificat SSL, fichier robots.txt et sitemap XML. Google utilise le mobile-first indexing depuis 2019 : c'est la version mobile de votre site qui est analysée en priorité.

Le **SEO on-page** porte sur le contenu. Chaque page doit cibler un mot-clé principal et des mots-clés secondaires. Les balises title (60 caractères max), meta description (155 caractères max), et les balises Hn structurent l'information pour Google. Le contenu doit répondre à l'intention de recherche de l'internaute : informationnelle, transactionnelle ou navigationnelle.

Le **SEO off-page** englobe tout ce qui se passe en dehors de votre site, principalement les backlinks. Un lien depuis un site à forte autorité (DA 50+) vaut plus que 100 liens depuis des annuaires de faible qualité. Le netlinking reste le facteur de ranking le plus difficile à maîtriser.

## Pourquoi le SEO est un investissement rentable

Selon une étude BrightEdge, 53% du trafic web mondial provient de la recherche organique. Contrairement au SEA où vous payez chaque clic (entre 1€ et 15€ selon le secteur), le trafic SEO est gratuit une fois les positions acquises. Un site bien référencé sur un mot-clé à 1 000 recherches mensuelles avec un taux de clic de 25% en position 1 génère 250 visites gratuites par mois, soit 3 000 visites par an.

Le ROI du SEO se mesure sur 6 à 12 mois. Les premiers résultats apparaissent généralement après 3 mois de travail, mais l'effet cumulatif est puissant : chaque page optimisée continue d'attirer du trafic pendant des années.

## Les erreurs SEO les plus courantes

Beaucoup d'entreprises commettent des erreurs qui sabotent leur référencement sans le savoir : contenu dupliqué entre les pages, absence de balises alt sur les images, pages trop lentes à cause d'images non compressées, absence de maillage interne, et négligence du SEO local pour les entreprises physiques.

## Le SEO local : incontournable pour les PME

Pour les entreprises qui servent une zone géographique, le SEO local est crucial. Cela inclut l'optimisation de la fiche Google Business Profile, la cohérence NAP (Nom, Adresse, Téléphone) sur tous les annuaires, et la collecte d'avis Google. 46% des recherches Google ont une intention locale, et 76% des personnes qui recherchent un commerce local sur leur téléphone le visitent dans la journée.

Chez ConvertiLab, nous intégrons le SEO dès la conception de chaque site : architecture de contenu, balises meta, sitemap, vitesse de chargement optimisée, et stratégie de mots-clés adaptée à votre secteur.`,
    importance:
      "Le SEO est le canal d'acquisition le plus rentable à long terme. Il génère un trafic qualifié et gratuit qui alimente votre business 24h/24. Sans SEO, votre site est invisible pour les 93% d'expériences en ligne qui commencent par un moteur de recherche.",
    examples: [
      "Un plombier à Lyon optimise sa fiche Google Business Profile et ses pages de service pour 'plombier Lyon urgence' — il passe de 0 à 40 appels par mois en 4 mois.",
      "Un e-commerce de cosmétiques bio crée un blog avec 50 articles optimisés sur des requêtes longue traîne — le trafic organique passe de 500 à 8 000 visites/mois en 8 mois.",
      "Un cabinet d'avocats restructure l'architecture de son site avec un maillage interne par thématique — ses pages services gagnent en moyenne 15 positions sur Google en 3 mois.",
    ],
    faqItems: [
      {
        question: "Combien de temps faut-il pour voir les résultats du SEO ?",
        answer:
          "Les premiers résultats SEO apparaissent généralement entre 3 et 6 mois après le début de l'optimisation. Les résultats significatifs (top 3 sur des mots-clés concurrentiels) demandent souvent 6 à 12 mois de travail régulier. C'est un investissement à long terme dont les effets s'accumulent avec le temps.",
      },
      {
        question: "Quel budget prévoir pour le SEO ?",
        answer:
          "Le budget SEO varie selon la concurrence de votre secteur et vos objectifs. Pour une PME locale, comptez entre 500€ et 1 500€/mois. Pour un site national ou un e-commerce, entre 1 500€ et 5 000€/mois. L'important est la régularité : mieux vaut un budget modeste sur 12 mois qu'un gros investissement ponctuel.",
      },
      {
        question: "Le SEO est-il toujours utile avec l'arrivée de l'IA dans les recherches ?",
        answer:
          "Oui, le SEO reste indispensable. Les réponses IA de Google (SGE) et les moteurs comme Perplexity s'appuient sur les contenus les mieux référencés. Un bon SEO est la base pour être cité par les IA. En 2026, le trafic organique représente toujours plus de 50% du trafic web mondial.",
      },
    ],
    lastUpdated: "6 avril 2026",
    relatedTerms: ["sea", "backlink", "sitemap"],
    relatedService: "/services/seo",
  },
  {
    slug: "sea",
    term: "SEA (Search Engine Advertising)",
    definition:
      "Le SEA est la publicité payante sur les moteurs de recherche. Google Ads est la plateforme SEA la plus utilisée, permettant d'afficher des annonces en haut des résultats de recherche.",
    content: `## Comment fonctionne le SEA

Le SEA repose sur un système d'enchères en temps réel. Lorsqu'un internaute tape une requête dans Google, un algorithme détermine en quelques millisecondes quelles annonces afficher, dans quel ordre, et à quel prix. Vous définissez un budget quotidien, un coût par clic maximum (CPC max), et Google affiche vos annonces tant que votre budget n'est pas épuisé.

Le Quality Score (score de qualité de 1 à 10) est un facteur déterminant. Il prend en compte la pertinence de votre annonce par rapport au mot-clé, la qualité de votre page de destination, et le taux de clic attendu. Un Quality Score élevé (7+) vous permet de payer moins cher tout en obtenant de meilleures positions. C'est pourquoi l'optimisation des landing pages est indissociable d'une bonne stratégie SEA.

## Les formats d'annonces disponibles

Google Ads propose plusieurs formats selon vos objectifs. Les **annonces Search** (textuelles) apparaissent dans les résultats de recherche et ciblent des intentions d'achat actives. Les **annonces Display** (bannières visuelles) touchent les internautes sur les 2 millions de sites du réseau Display de Google. Les **annonces Shopping** affichent vos produits avec photo et prix directement dans Google. Les **annonces YouTube** (vidéo) permettent de capter l'attention avec du contenu visually engaging. Enfin, les **campagnes Performance Max** utilisent l'IA de Google pour diffuser sur tous les canaux simultanément.

## Les métriques clés du SEA

Pour piloter une campagne SEA, vous devez surveiller plusieurs indicateurs. Le **CPC moyen** (coût par clic) varie de 0,50€ pour des secteurs peu concurrentiels à 15€+ pour l'assurance ou le juridique. Le **CTR** (taux de clic) moyen est de 3,17% sur le Search — un CTR inférieur à 2% indique un problème d'annonce ou de ciblage. Le **taux de conversion** moyen est de 3,75% sur le Search. Le **CPA** (coût par acquisition) est la métrique ultime : combien vous coûte chaque lead ou vente.

## SEA vs SEO : complémentarité, pas opposition

Le SEA donne des résultats immédiats dès le premier jour, tandis que le SEO prend 3 à 6 mois. La meilleure stratégie combine les deux : le SEA pour les résultats rapides et les lancements, le SEO pour construire un trafic durable et réduire la dépendance aux campagnes payantes. Les données SEA (mots-clés qui convertissent le mieux) alimentent aussi la stratégie SEO.

## Les erreurs coûteuses en SEA

Sans expertise, le SEA peut brûler votre budget rapidement. Les erreurs les plus fréquentes sont : ne pas utiliser de mots-clés négatifs (vous payez pour des clics non pertinents), envoyer le trafic vers la page d'accueil au lieu d'une landing page dédiée, ne pas configurer le suivi des conversions, et utiliser uniquement les enchères automatiques sans stratégie. Une campagne mal optimisée peut gaspiller 30 à 60% du budget.

Chez ConvertiLab, nous gérons vos campagnes Google Ads et Meta Ads avec un reporting mensuel transparent et une optimisation continue pour maximiser votre retour sur investissement.`,
    importance:
      "Le SEA est le moyen le plus rapide de générer du trafic qualifié et des leads. C'est l'outil idéal pour tester un marché, lancer un nouveau produit ou générer des résultats immédiats pendant que le SEO se met en place.",
    examples: [
      "Un dentiste lance une campagne Google Ads ciblant 'dentiste urgence + sa ville' — il génère 25 nouveaux patients par mois avec un CPA de 35€ et un ROI de 10x.",
      "Un SaaS B2B utilise des campagnes Search sur des mots-clés d'intention d'achat ('logiciel gestion projet') combinées à du remarketing Display — le coût par lead passe de 120€ à 45€ en 3 mois.",
      "Un e-commerce de mode lance des campagnes Shopping avec des flux produits optimisés — le ROAS (retour sur dépense publicitaire) atteint 6x en période de soldes.",
    ],
    faqItems: [
      {
        question: "Quel budget minimum pour lancer des campagnes Google Ads ?",
        answer:
          "Pour une PME locale, un budget de 500€ à 1 000€/mois sur Google Ads est un bon point de départ, hors frais de gestion. Cela permet de collecter suffisamment de données pour optimiser les campagnes. En dessous de 300€/mois, il est difficile d'obtenir des résultats significatifs.",
      },
      {
        question: "Google Ads ou Meta Ads : lequel choisir ?",
        answer:
          "Google Ads capte une intention d'achat active (l'internaute cherche votre produit/service), tandis que Meta Ads crée la demande (publicité dans le fil d'actualité). Pour du B2B ou des services locaux, Google Ads est souvent plus performant. Pour du B2C, du e-commerce ou de la notoriété, Meta Ads est redoutable. L'idéal est de combiner les deux.",
      },
      {
        question: "Comment savoir si mes campagnes SEA sont rentables ?",
        answer:
          "La rentabilité se mesure via le ROAS (retour sur dépense publicitaire) ou le CPA (coût par acquisition). Si votre panier moyen est de 100€ et votre CPA de 20€, votre ROAS est de 5x. Configurez le suivi des conversions dans Google Ads et Google Analytics pour mesurer précisément chaque euro dépensé.",
      },
    ],
    lastUpdated: "6 avril 2026",
    relatedTerms: ["seo", "cpc", "landing-page"],
    relatedService: "/services/sea",
  },
  {
    slug: "landing-page",
    term: "Landing Page (Page d'Atterrissage)",
    definition:
      "Une landing page est une page web conçue spécifiquement pour convertir les visiteurs en leads ou clients, avec un seul objectif et un appel à l'action clair.",
    content: `## Qu'est-ce qu'une landing page exactement ?

Contrairement à une page classique de site web qui offre de multiples liens et menus de navigation, une landing page est construite autour d'un seul objectif : la conversion. Elle supprime toutes les distractions (menu, footer complet, liens sortants) pour guider le visiteur vers une action unique : remplir un formulaire, acheter un produit, s'inscrire à un webinaire, ou télécharger un document.

La landing page est la destination finale d'une campagne marketing. Elle reçoit le trafic provenant de Google Ads, Meta Ads, emails marketing, ou publications sur les réseaux sociaux. Son taux de conversion moyen est de 5,89% tous secteurs confondus, contre 2,35% pour une page de site classique. Les meilleures landing pages atteignent des taux de conversion de 11% à 25%.

## Les éléments essentiels d'une landing page performante

Une landing page qui convertit respecte une structure éprouvée. Le **titre (H1)** doit capter l'attention en moins de 3 secondes et exprimer clairement la proposition de valeur. Le **sous-titre** développe le bénéfice principal. La **hero section** inclut souvent une image ou vidéo qui illustre le résultat.

Le **corps de page** détaille les bénéfices (pas les fonctionnalités), utilise des bullet points pour faciliter la lecture, et inclut de la **preuve sociale** : témoignages clients avec photo et nom réel, logos de clients, chiffres clés ("+500 clients satisfaits"), notes et avis. La preuve sociale augmente les conversions de 15 à 30% en moyenne.

Le **CTA (Call to Action)** doit être visible au-dessus de la ligne de flottaison et répété 2 à 3 fois dans la page. Le texte du bouton doit exprimer le bénéfice : "Recevoir mon devis gratuit" convertit 30% mieux que "Envoyer".

## Le formulaire : moins = plus

Le nombre de champs du formulaire impacte directement le taux de conversion. Passer de 4 champs à 3 peut augmenter les conversions de 25%. Pour une landing page de génération de leads, limitez-vous au strict nécessaire : nom, email, et éventuellement téléphone. Les formulaires multi-étapes (wizard) fonctionnent particulièrement bien : l'utilisateur commence par des questions simples avant de donner ses coordonnées.

## Landing page et SEA : le duo gagnant

La landing page est indissociable d'une stratégie SEA performante. Google Ads évalue la qualité de votre page de destination dans son Quality Score. Une landing page cohérente avec l'annonce (même message, même promesse) obtient un Quality Score plus élevé, ce qui réduit votre CPC de 20 à 50%.

Chaque campagne publicitaire devrait avoir sa propre landing page avec un message adapté. Un visiteur qui clique sur une annonce "Refonte de site web" ne doit pas atterrir sur votre page d'accueil, mais sur une page dédiée à la refonte avec des exemples de réalisations.

## Tester et optimiser en continu

Les meilleures équipes marketing pratiquent l'A/B testing sur leurs landing pages. Testez un élément à la fois : titre, CTA, image hero, longueur du formulaire. Des outils comme Google Optimize ou VWO permettent de diviser le trafic entre deux versions et de mesurer les résultats. Une optimisation de 1% du taux de conversion peut générer des milliers d'euros de revenus supplémentaires sur une année.

Chez ConvertiLab, nous créons des landing pages sur mesure, optimisées pour la conversion et le Quality Score Google Ads. Chaque page est testée, mesurée et améliorée en continu.`,
    importance:
      "La landing page est le maillon le plus critique de votre tunnel de conversion. Sans landing page optimisée, vos campagnes publicitaires gaspillent leur budget. C'est la différence entre un site qui coûte de l'argent et un site qui en rapporte.",
    examples: [
      "Une agence immobilière crée une landing page 'Estimation gratuite de votre bien' avec un formulaire en 3 étapes — le taux de conversion passe de 1,8% à 8,5%, générant 120 leads qualifiés par mois.",
      "Un coach sportif lance une landing page pour son programme en ligne avec une vidéo témoignage en hero — le taux de conversion atteint 12% et il vend 50 programmes par mois à 197€.",
      "Un éditeur SaaS A/B teste deux versions de son titre de landing page — la version orientée bénéfice ('Gagnez 5h par semaine') surpasse la version orientée fonctionnalité ('Automatisez vos tâches') de 40%.",
    ],
    faqItems: [
      {
        question:
          "Quelle est la différence entre une landing page et un site web ?",
        answer:
          "Un site web a plusieurs pages, un menu de navigation et des objectifs multiples (informer, présenter, vendre). Une landing page est une page unique sans menu, conçue pour un seul objectif de conversion. Elle supprime toutes les distractions pour maximiser le taux de conversion.",
      },
      {
        question: "Combien coûte la création d'une landing page ?",
        answer:
          "Le coût d'une landing page professionnelle varie de 800€ à 3 000€ selon la complexité, le design et les intégrations nécessaires (formulaire, paiement, CRM). Chez ConvertiLab, nos landing pages sont livrées clé en main, optimisées SEO et prêtes pour vos campagnes publicitaires.",
      },
      {
        question: "Quel est un bon taux de conversion pour une landing page ?",
        answer:
          "Le taux de conversion moyen d'une landing page est de 5,89%. Un taux entre 5% et 10% est considéré comme bon. Au-dessus de 10%, votre page est excellente. En dessous de 3%, il faut optimiser le message, le CTA ou la preuve sociale. Le taux varie aussi selon le secteur et la source de trafic.",
      },
    ],
    lastUpdated: "6 avril 2026",
    relatedTerms: ["cta", "taux-de-conversion", "sea"],
    relatedService: "/services/sites-web/landing-page",
  },
  {
    slug: "taux-de-conversion",
    term: "Taux de Conversion",
    definition:
      "Le taux de conversion est le pourcentage de visiteurs d'un site web qui effectuent une action souhaitée (achat, inscription, demande de devis). Un bon taux de conversion se situe entre 2% et 5%.",
    content: `## Comment calculer le taux de conversion

Le taux de conversion se calcule avec une formule simple : (nombre de conversions / nombre de visiteurs) x 100. Si votre site reçoit 1 000 visiteurs par mois et que 30 remplissent votre formulaire de contact, votre taux de conversion est de 3%. Cette métrique est la plus importante en marketing digital car elle traduit directement l'efficacité de votre site à transformer des visiteurs en clients.

Il existe plusieurs types de conversions à mesurer. La **macro-conversion** est l'objectif final (achat, demande de devis, prise de rendez-vous). Les **micro-conversions** sont les étapes intermédiaires (ajout au panier, inscription newsletter, téléchargement d'un guide). Suivre les micro-conversions aide à identifier les points de friction dans votre tunnel de vente.

## Les benchmarks par secteur

Les taux de conversion varient considérablement selon le secteur d'activité et le type de conversion. En e-commerce, le taux moyen est de 2,5% à 3%. Pour la génération de leads B2B, il se situe entre 2% et 5%. Les sites SaaS ont un taux moyen de 3% à 7% pour l'inscription gratuite. Le secteur de la finance atteint des taux de 5% à 11% grâce à des offres très ciblées. Ces chiffres servent de point de comparaison, mais votre objectif devrait être d'améliorer votre propre taux mois après mois.

## Les leviers d'optimisation du taux de conversion (CRO)

Le CRO (Conversion Rate Optimization) est une discipline à part entière. Elle repose sur l'analyse des données (Google Analytics, heatmaps, enregistrements de sessions) pour comprendre le comportement des visiteurs et identifier les blocages.

La **vitesse de chargement** est le premier levier : chaque seconde supplémentaire de chargement réduit les conversions de 7%. Amazon a calculé qu'une latence de 100ms lui coûte 1% de ventes, soit des milliards de dollars.

L'**UX design** (expérience utilisateur) influence directement la conversion. Un parcours clair, des boutons visibles, un formulaire simple, une navigation intuitive. Les sites avec un design professionnel inspirent confiance : 94% des premières impressions sont liées au design.

La **preuve sociale** (témoignages, avis, logos clients) réduit l'anxiété d'achat. Afficher des avis augmente les conversions de 18% en moyenne. Les témoignages vidéo sont 2x plus efficaces que les témoignages texte.

La **réduction des frictions** dans le tunnel de conversion est essentielle. Chaque étape supplémentaire dans le processus d'achat perd environ 10% des utilisateurs. Le paiement en un clic, l'auto-complétion des formulaires, et la suppression des champs inutiles sont des optimisations à fort impact.

## L'A/B testing : la méthode scientifique

L'A/B testing consiste à créer deux versions d'une page (A et B) qui ne diffèrent que par un élément (titre, couleur du bouton, image, texte du CTA), puis à diviser le trafic entre les deux versions pour mesurer laquelle convertit le mieux. La version gagnante est déployée, puis un nouveau test est lancé sur un autre élément. Cette approche itérative peut doubler votre taux de conversion en quelques mois.

Règle d'or : ne testez qu'un seul élément à la fois, et attendez d'avoir un minimum de 1 000 visiteurs par version avant de tirer des conclusions (significativité statistique).

## L'impact business concret

Améliorer votre taux de conversion de 1% a un impact direct sur votre chiffre d'affaires. Si votre site génère 10 000 visiteurs/mois avec un taux de conversion de 2% et un panier moyen de 500€, vous réalisez 100 000€/mois. En passant à 3%, vous gagnez 50 000€ supplémentaires par mois sans dépenser un euro de plus en publicité.

Chez ConvertiLab, l'optimisation de la conversion est au cœur de chaque projet. Chaque site que nous créons est conçu pour maximiser le taux de conversion grâce à un design orienté UX, des CTA stratégiques et un parcours utilisateur fluide.`,
    importance:
      "Le taux de conversion est la métrique qui transforme votre trafic en revenus. Améliorer votre taux de conversion de 1 point peut doubler votre chiffre d'affaires sans augmenter votre budget publicitaire. C'est le levier le plus rentable du marketing digital.",
    examples: [
      "Un site e-commerce simplifie son tunnel de paiement de 5 étapes à 2 étapes — le taux de conversion passe de 1,8% à 3,2%, soit +78% de ventes sans trafic supplémentaire.",
      "Un cabinet de conseil ajoute des témoignages vidéo clients sur sa landing page — le taux de conversion du formulaire de contact passe de 4% à 7,5%.",
      "Un SaaS remplace son CTA 'S'inscrire' par 'Essayer gratuitement pendant 14 jours' — le taux d'inscription augmente de 35%.",
    ],
    faqItems: [
      {
        question: "Comment mesurer le taux de conversion de mon site ?",
        answer:
          "Configurez des objectifs dans Google Analytics 4 (GA4) : formulaire soumis, achat complété, appel téléphonique, etc. GA4 calculera automatiquement votre taux de conversion. Vous pouvez aussi utiliser des outils comme Hotjar pour comprendre le comportement des visiteurs via des heatmaps et des enregistrements de sessions.",
      },
      {
        question:
          "Mon taux de conversion est de 1%, c'est normal ?",
        answer:
          "Un taux de 1% est en dessous de la moyenne pour la plupart des secteurs. Les causes possibles sont multiples : site lent, message peu clair, absence de preuve sociale, formulaire trop long, ou trafic non qualifié. Un audit CRO permet d'identifier les points de friction et d'établir un plan d'amélioration.",
      },
      {
        question: "Quel est l'impact de la vitesse du site sur la conversion ?",
        answer:
          "L'impact est majeur. Un site qui charge en 1 seconde a un taux de conversion 3x supérieur à un site qui charge en 5 secondes. Google recommande un temps de chargement inférieur à 2,5 secondes (métrique Largest Contentful Paint). Compressez vos images, utilisez un CDN, et optimisez votre code pour gagner en vitesse.",
      },
    ],
    lastUpdated: "6 avril 2026",
    relatedTerms: ["landing-page", "cta", "ux"],
    relatedService: "/services/sites-web",
  },
  {
    slug: "responsive-design",
    term: "Responsive Design",
    definition:
      "Le responsive design est une approche de conception web qui fait en sorte qu'un site s'adapte automatiquement à toutes les tailles d'écran : mobile, tablette et ordinateur.",
    content: `## Le principe du responsive design

Le responsive design utilise des techniques CSS (media queries, flexbox, grid) pour adapter la mise en page d'un site à la taille de l'écran de l'utilisateur. Un même site affiche son contenu différemment sur un écran de 27 pouces, une tablette de 10 pouces, et un smartphone de 6 pouces, sans jamais perdre en lisibilité ni en fonctionnalité.

L'approche **mobile-first** consiste à concevoir d'abord la version mobile, puis à enrichir l'expérience pour les écrans plus grands. C'est l'inverse de l'approche traditionnelle qui partait du desktop. Cette méthode est devenue le standard car plus de 60% du trafic web mondial provient des mobiles (Statista, 2025). En France, ce chiffre atteint 65% pour les sites B2C.

## Pourquoi Google exige un site responsive

Depuis mars 2021, Google utilise exclusivement le **mobile-first indexing** : c'est la version mobile de votre site qui est analysée pour le référencement. Si votre site n'est pas responsive ou si la version mobile offre une expérience dégradée (texte trop petit, boutons trop rapprochés, contenu masqué), votre positionnement Google en souffre directement.

Les **Core Web Vitals** de Google incluent des métriques qui pénalisent les sites non optimisés mobile : le LCP (Largest Contentful Paint) doit être inférieur à 2,5 secondes, le FID (First Input Delay) inférieur à 100ms, et le CLS (Cumulative Layout Shift) inférieur à 0,1. Un site responsive bien conçu respecte naturellement ces seuils.

## Les éléments clés d'un design responsive réussi

La **typographie responsive** utilise des unités relatives (rem, em, vw) plutôt que des pixels fixes. Un titre en 48px sur desktop devient 28px sur mobile pour rester lisible sans zoom. L'espacement (padding, margin) s'adapte aussi proportionnellement.

Les **images responsives** utilisent l'attribut srcset et le composant Image de Next.js pour servir la bonne résolution selon l'appareil. Une image de 2000px de large sur desktop serait inutilement lourde sur mobile. Le format WebP ou AVIF réduit le poids des images de 30 à 50% par rapport au JPEG.

La **navigation mobile** remplace le menu horizontal par un menu hamburger ou un menu bottom-bar. Les boutons et zones cliquables doivent mesurer au minimum 44x44 pixels (recommandation Apple) pour être facilement utilisables au doigt.

Les **formulaires mobiles** nécessitent une attention particulière : champs de saisie suffisamment grands, clavier adapté au type de champ (numérique pour un téléphone, email pour un email), auto-complétion activée, et bouton de soumission accessible sans scroll excessif.

## L'impact sur le taux de conversion

Un site non responsive fait fuir 61% des utilisateurs mobiles qui ne reviendront jamais. Le taux de rebond mobile est en moyenne 10 à 20% plus élevé que sur desktop, et cette différence s'amplifie considérablement pour les sites non optimisés. À l'inverse, une expérience mobile fluide peut augmenter les conversions mobiles de 30 à 50%.

## Responsive vs application mobile

Pour la majorité des entreprises, un site responsive suffit. Une application mobile native (iOS/Android) n'est justifiée que si vous proposez des fonctionnalités avancées (géolocalisation en temps réel, notifications push critiques, mode hors-ligne). Les PWA (Progressive Web Apps) offrent un compromis intéressant : elles combinent les avantages du web (pas d'installation) et du natif (mode offline, icône sur l'écran d'accueil).

Chez ConvertiLab, tous les sites que nous créons sont 100% responsive et optimisés mobile-first. Nous testons sur une dizaine d'appareils différents pour garantir une expérience parfaite sur tous les écrans.`,
    importance:
      "Avec 65% du trafic web provenant des mobiles, un site non responsive perd la majorité de ses visiteurs et est pénalisé par Google. Le responsive design n'est plus une option, c'est une exigence fondamentale pour tout site web professionnel.",
    examples: [
      "Un restaurant refait son site en responsive avec menu accessible et bouton 'Réserver' visible sur mobile — les réservations en ligne augmentent de 85% en un mois.",
      "Un e-commerce optimise son tunnel d'achat mobile (boutons plus grands, paiement Apple Pay) — le taux de conversion mobile passe de 0,8% à 2,1%.",
      "Un cabinet comptable passe d'un site desktop-only à un site mobile-first — le taux de rebond mobile chute de 78% à 42% et les demandes de devis doublent.",
    ],
    faqItems: [
      {
        question: "Comment savoir si mon site est responsive ?",
        answer:
          "Utilisez l'outil gratuit Google Mobile-Friendly Test (search.google.com/test/mobile-friendly) ou le mode responsive de Chrome DevTools (F12 puis Ctrl+Shift+M). Testez aussi manuellement sur un smartphone réel : vérifiez la lisibilité, la navigation et les formulaires.",
      },
      {
        question:
          "Faut-il refaire tout mon site pour le rendre responsive ?",
        answer:
          "Si votre site a été créé avant 2015 ou avec une technologie obsolète, une refonte complète est souvent plus efficace qu'un patch. Avec les frameworks modernes comme Next.js et Tailwind CSS, un site responsive est livré en 2 à 4 semaines. L'investissement est rapidement rentabilisé par l'augmentation du trafic et des conversions mobiles.",
      },
      {
        question:
          "Quelle est la différence entre responsive et adaptive design ?",
        answer:
          "Le responsive design utilise des layouts fluides qui s'adaptent en continu à toutes les tailles d'écran. L'adaptive design utilise des layouts fixes à des breakpoints spécifiques (320px, 768px, 1024px). Le responsive est le standard actuel car il couvre tous les écrans, y compris les nouvelles tailles (tablettes pliables, montres connectées).",
      },
    ],
    lastUpdated: "6 avril 2026",
    relatedTerms: ["ux", "seo", "site-vitrine"],
    relatedService: "/services/sites-web",
  },
  {
    slug: "site-vitrine",
    term: "Site Vitrine",
    definition:
      "Un site vitrine est un site web qui présente l'activité, les services et les coordonnées d'une entreprise. Il sert de carte de visite en ligne, sans fonctionnalité e-commerce.",
    content: `## À quoi sert un site vitrine ?

Le site vitrine est le type de site le plus répandu pour les PME, artisans, professions libérales et indépendants. Son rôle est de présenter votre entreprise, vos services, votre expertise et vos coordonnées aux internautes qui vous recherchent. C'est votre carte de visite digitale, accessible 24h/24 et 7j/7 à tous vos prospects.

En 2026, 81% des consommateurs recherchent une entreprise en ligne avant de la contacter. Ne pas avoir de site vitrine professionnel, c'est laisser vos concurrents capter ces prospects. Un site vitrine bien conçu inspire confiance, crédibilise votre activité et génère des demandes de contact qualifiées.

## Les pages essentielles d'un site vitrine

Un site vitrine professionnel comporte généralement 5 à 10 pages. La **page d'accueil** est la plus importante : elle doit communiquer en 3 secondes qui vous êtes, ce que vous faites et pourquoi le visiteur devrait vous choisir. Elle contient un hero attractif, vos principaux services, des témoignages et un CTA clair.

La **page Services** détaille chaque prestation avec ses bénéfices, son processus et un CTA. Créez une sous-page par service pour optimiser le SEO sur des requêtes spécifiques ("plombier dépannage Paris", "avocat droit du travail Lyon").

La **page À propos** humanise votre entreprise. Photos de l'équipe, histoire, valeurs, certifications. Les visiteurs achètent à des personnes, pas à des entreprises anonymes. Une page À propos avec des photos réelles génère 35% plus de confiance qu'une page sans visuel humain.

La **page Réalisations/Portfolio** prouve votre expertise par l'exemple. Présentez vos meilleurs projets avec des photos avant/après, des chiffres de résultat, et des témoignages clients. C'est l'argument de vente le plus puissant.

La **page Contact** doit contenir un formulaire simple (nom, email, message), votre adresse, téléphone, email, carte Google Maps, et vos horaires. Plus vous êtes accessible, plus vous générez de contacts.

## Le coût d'un site vitrine professionnel

Le prix d'un site vitrine varie de 1 500€ à 8 000€ selon le nombre de pages, la complexité du design et les fonctionnalités (blog, multilingue, système de réservation). Les plateformes DIY (Wix, Squarespace) coûtent moins cher (20-40€/mois) mais offrent des résultats limités en termes de SEO, performance et personnalisation.

Un site vitrine professionnel créé sur mesure avec Next.js obtient un score PageSpeed de 95+ sur mobile, contre 50-70 pour un site Wix moyen. Cette différence impacte directement le référencement Google et l'expérience utilisateur.

## SEO local et site vitrine

Pour les entreprises qui servent une zone géographique, le SEO local est indissociable du site vitrine. Cela inclut l'optimisation de la fiche Google Business Profile, l'insertion de mots-clés géolocalisés dans les contenus ("plombier Rueil-Malmaison"), la création de pages locales, et la cohérence NAP sur tous les annuaires.

Les résultats locaux de Google (map pack) captent 42% des clics pour les recherches locales. Un site vitrine optimisé SEO local peut apparaître dans ce pack et générer un flux constant de prospects sans publicité.

## Les tendances 2026 pour les sites vitrine

Les sites vitrine modernes intègrent des éléments qui étaient réservés aux grands sites : animations subtiles (Framer Motion), chatbots IA pour qualifier les leads 24h/24, formulaires intelligents avec auto-complétion, et design immersif avec du scroll storytelling. La vidéo en hero section augmente le temps passé sur la page de 88%.

Chez ConvertiLab, nous créons des sites vitrine haut de gamme avec Next.js, Tailwind CSS et Framer Motion. Chaque site est optimisé SEO, ultra-rapide et conçu pour convertir vos visiteurs en clients.`,
    importance:
      "Le site vitrine est souvent le premier point de contact entre votre entreprise et vos futurs clients. 81% des consommateurs consultent un site web avant de contacter une entreprise. Un site vitrine professionnel crédibilise votre activité et génère des leads qualifiés en continu.",
    examples: [
      "Un artisan menuisier crée un site vitrine avec portfolio de ses réalisations — il reçoit 15 demandes de devis par mois au lieu de 2, et sélectionne les meilleurs chantiers.",
      "Un cabinet d'architecte lance un site vitrine immersif avec scroll parallax et galerie de projets — son taux de prise de contact augmente de 200% et il attire des clients premium.",
      "Un coach en développement personnel crée un site vitrine avec blog SEO et formulaire de découverte — il remplit son agenda de consultations 3 semaines à l'avance.",
    ],
    faqItems: [
      {
        question: "Combien de temps faut-il pour créer un site vitrine ?",
        answer:
          "Un site vitrine professionnel de 5 à 8 pages est livré en 2 à 4 semaines. Cela inclut la conception du design, le développement, l'intégration du contenu, l'optimisation SEO et les tests. Les projets plus complexes (multilingue, blog, système de réservation) prennent 4 à 6 semaines.",
      },
      {
        question:
          "Un site vitrine peut-il générer des clients ?",
        answer:
          "Absolument. Un site vitrine optimisé pour la conversion et le SEO local génère en moyenne 10 à 50 demandes de contact qualifiées par mois selon le secteur et la zone géographique. C'est un commercial qui travaille 24h/24 sans salaire. L'investissement est rentabilisé en quelques semaines pour la plupart des activités.",
      },
      {
        question:
          "Dois-je choisir entre un site vitrine et les réseaux sociaux ?",
        answer:
          "Les deux sont complémentaires. Les réseaux sociaux développent votre notoriété et créent du lien, mais vous ne possédez pas la plateforme (algorithmes changeants, comptes suspendus). Votre site vitrine est votre propriété : il apparaît sur Google, vous contrôlez le message, et il reste accessible quoi qu'il arrive sur les réseaux.",
      },
    ],
    lastUpdated: "6 avril 2026",
    relatedTerms: ["landing-page", "responsive-design", "seo"],
    relatedService: "/services/sites-web/site-vitrine",
  },
  {
    slug: "backlink",
    term: "Backlink (Lien Retour)",
    definition:
      "Un backlink est un lien hypertexte depuis un autre site web qui pointe vers le vôtre. Les backlinks sont l'un des facteurs de ranking les plus importants pour le SEO.",
    content: `## Pourquoi les backlinks sont essentiels pour le SEO

Les backlinks sont considérés par Google comme des "votes de confiance" d'un site vers un autre. Plus vous recevez de liens depuis des sites de qualité et pertinents, plus Google considère votre site comme une source fiable et le positionne en haut des résultats. Selon une étude Ahrefs portant sur 1 milliard de pages, il existe une corrélation forte entre le nombre de domaines référents et le trafic organique : les pages en position 1 ont en moyenne 3,8x plus de backlinks que les pages en positions 2 à 10.

Mais attention : tous les backlinks ne se valent pas. Google a considérablement affiné son algorithme depuis les mises à jour Penguin. Un seul lien depuis Le Monde, un site gouvernemental (.gouv.fr), ou un média reconnu de votre secteur vaut plus que 1 000 liens depuis des annuaires de faible qualité ou des fermes de liens.

## Les critères d'un backlink de qualité

L'**autorité du domaine** (Domain Authority / Domain Rating) est le premier critère. Un lien depuis un site à DA 60+ a un impact significatif sur votre référencement. Vérifiez l'autorité d'un domaine avec des outils comme Ahrefs, Moz ou Semrush.

La **pertinence thématique** est le deuxième critère. Un lien depuis un blog de cuisine vers un site de plomberie a peu de valeur. Google analyse le contexte sémantique du lien. Un article sur la rénovation de salle de bain qui pointe vers un plombier : c'est pertinent et puissant.

Le **texte d'ancrage** (anchor text) est le texte cliquable du lien. Un ancre naturel et varié est idéal : nom de marque, URL, texte descriptif. Évitez les ancres suroptimisées ("meilleur plombier Paris pas cher") qui peuvent déclencher une pénalité Penguin.

La **position du lien** dans la page compte aussi. Un lien dans le corps d'un article (lien éditorial) a plus de valeur qu'un lien dans le footer ou la sidebar. Les liens en dofollow transmettent du "jus SEO" (link juice), contrairement aux liens nofollow.

## Les stratégies de netlinking efficaces

Le **guest blogging** (articles invités) consiste à rédiger un article de qualité pour un blog ou média de votre secteur en échange d'un lien retour. C'est la stratégie la plus courante et la plus naturelle. Ciblez des sites avec un DA supérieur au vôtre pour maximiser l'impact.

Le **linkbaiting** consiste à créer du contenu tellement utile ou original qu'il attire naturellement des liens : études statistiques, infographies, outils gratuits, guides complets. Un contenu de référence dans votre domaine peut générer des dizaines de backlinks organiques.

Les **relations presse digitales** (digital PR) consistent à contacter des journalistes et blogueurs pour proposer des expertises, des données exclusives ou des commentaires sur l'actualité de votre secteur. Un article presse avec un lien a un impact SEO et notoriété considérable.

Les **annuaires professionnels** de qualité (Pages Jaunes, Yelp, annuaires de chambres de commerce) sont une base solide pour le SEO local. Ils fournissent des liens et renforcent la cohérence NAP (Nom, Adresse, Téléphone).

## Les pratiques à éviter absolument

Google pénalise les pratiques de link building artificielles. L'**achat de liens** massif, les **échanges de liens** réciproques à grande échelle, les **commentaires de blog spam**, et les **PBN** (Private Blog Networks) sont des techniques risquées qui peuvent entraîner une pénalité manuelle de Google, avec une chute de 50 à 90% du trafic organique.

La règle d'or : si un lien peut être obtenu trop facilement, il a probablement peu de valeur. Le netlinking de qualité demande du temps et des efforts, mais les résultats sont durables.

## Auditer son profil de backlinks

Analysez régulièrement votre profil de backlinks avec Google Search Console (gratuit) ou Ahrefs. Identifiez les liens toxiques (sites spam, annuaires douteux) et utilisez l'outil de désaveu de Google si nécessaire. Surveillez aussi les backlinks de vos concurrents pour identifier des opportunités.

Chez ConvertiLab, nous intégrons une stratégie de netlinking à nos prestations SEO, avec des backlinks de qualité obtenus via des articles invités, des partenariats média et du contenu linkable.`,
    importance:
      "Les backlinks restent le facteur de ranking le plus influent après le contenu. Sans backlinks de qualité, même le meilleur contenu aura du mal à atteindre le top 3 de Google. C'est le nerf de la guerre du SEO off-page.",
    examples: [
      "Un site e-commerce de produits artisanaux obtient un article dans un magazine lifestyle en ligne (DA 55) — la page produit mentionnée gagne 22 positions sur Google en 3 semaines.",
      "Une agence web publie une étude statistique sur les tendances web design — l'étude est reprise par 35 blogs tech et génère 50 backlinks naturels en 2 mois.",
      "Un restaurant obtient des liens depuis TripAdvisor, Le Fooding et le guide local de sa ville — sa fiche Google Business Profile remonte en position 1 du map pack.",
    ],
    faqItems: [
      {
        question: "Combien de backlinks faut-il pour être bien référencé ?",
        answer:
          "Il n'y a pas de nombre magique. La qualité prime sur la quantité. Pour un mot-clé peu concurrentiel, 10-20 backlinks de qualité peuvent suffire. Pour des requêtes très concurrentielles, il en faut des centaines. Analysez les backlinks des pages en position 1 sur vos mots-clés cibles pour estimer l'effort nécessaire.",
      },
      {
        question: "L'achat de backlinks est-il risqué ?",
        answer:
          "Oui, très risqué. Google interdit explicitement l'achat et la vente de liens dans ses guidelines. Une pénalité manuelle peut faire chuter votre trafic de 50 à 90% du jour au lendemain. Investissez plutôt dans la création de contenu de qualité et les relations presse digitales pour obtenir des liens naturels et durables.",
      },
      {
        question:
          "Comment obtenir des backlinks quand on débute ?",
        answer:
          "Commencez par les bases : inscrivez-vous dans les annuaires professionnels de qualité, créez un profil Google Business Profile, et demandez à vos partenaires et fournisseurs de vous mentionner. Ensuite, créez du contenu expert (guides, études, outils gratuits) et proposez des articles invités à des blogs de votre secteur.",
      },
    ],
    lastUpdated: "6 avril 2026",
    relatedTerms: ["seo", "netlinking"],
    relatedService: "/services/seo/referencement",
  },
  {
    slug: "cta",
    term: "CTA (Call to Action)",
    definition:
      "Un CTA, ou appel à l'action, est un bouton ou un lien qui incite le visiteur à effectuer une action précise : 'Demander un devis', 'Acheter maintenant', 'Prendre rendez-vous'.",
    content: `## Le rôle central du CTA dans la conversion

Le CTA est l'élément le plus important de toute page web orientée conversion. C'est le pont entre l'intérêt du visiteur et l'action souhaitée. Sans CTA clair et visible, même le meilleur contenu ne génère pas de résultat. Selon une étude HubSpot, les pages avec un CTA personnalisé convertissent 202% mieux que les pages avec un CTA générique. Les CTAs sous forme de bouton ont un taux de clic 45% supérieur aux CTAs sous forme de lien texte.

Un CTA efficace répond à trois questions dans l'esprit du visiteur : "Qu'est-ce que je vais obtenir ?", "Est-ce que ça vaut le coup ?" et "Qu'est-ce que je dois faire maintenant ?". Si votre CTA répond à ces trois questions en moins de 5 mots, il est bien formulé.

## Les principes d'un CTA performant

Le **texte du CTA** doit être orienté bénéfice, pas action. "Recevoir mon devis gratuit" fonctionne 30% mieux que "Envoyer le formulaire". "Commencer mon essai gratuit" surpasse "S'inscrire". Le visiteur doit comprendre ce qu'il va obtenir, pas ce qu'il doit faire. Utilisez la première personne ("mon", "mes") pour créer un sentiment d'appropriation.

La **couleur** du bouton doit créer un contraste fort avec le fond de la page. Il n'y a pas de couleur magique universelle (le débat "bouton vert vs bouton rouge" est un mythe), mais le contraste est essentiel. Un bouton orange sur un fond bleu se démarque. Un bouton gris sur un fond blanc se noie. Testez différentes couleurs avec de l'A/B testing pour trouver celle qui fonctionne pour votre audience.

La **taille** doit être suffisante pour attirer l'attention sans être agressive. Sur mobile, un bouton de 48px de hauteur minimum est recommandé. Sur desktop, un bouton qui occupe toute la largeur d'une colonne est souvent plus performant qu'un petit bouton aligné à gauche.

Le **placement** est stratégique. Le CTA principal doit être visible au-dessus de la ligne de flottaison (sans scroller). Un deuxième CTA doit apparaître après la section de bénéfices ou de preuve sociale. Un troisième CTA peut fermer la page. Les pages longues bénéficient d'un CTA flottant (sticky) visible en permanence.

## Les différents types de CTA

Le **CTA primaire** est votre action principale : "Demander un devis", "Acheter maintenant", "Prendre rendez-vous". Il doit être le plus visible de la page, en couleur forte et en gros caractères.

Le **CTA secondaire** offre une alternative pour les visiteurs pas encore prêts : "En savoir plus", "Voir nos réalisations", "Télécharger le guide". Il est en style outline ou en couleur plus discrète. Le ratio idéal est de 1 CTA primaire pour 1-2 CTAs secondaires.

Le **CTA d'urgence** utilise la rareté ou le temps limité : "Offre valable jusqu'à dimanche", "Plus que 3 places disponibles". L'urgence augmente les conversions de 10 à 30%, mais elle doit être authentique. La fausse urgence érode la confiance.

## L'impact du contexte autour du CTA

Le CTA ne fonctionne pas seul. Le texte qui le précède (le "pre-CTA copy") est crucial. Avant le bouton, résumez le bénéfice principal et réduisez l'anxiété : "Sans engagement", "Gratuit", "En 2 minutes", "Réponse sous 24h". Ces éléments de réassurance augmentent le taux de clic de 15 à 25%.

Les **micro-engagements** avant le CTA principal fonctionnent aussi bien. Posez une question simple ("Vous souhaitez augmenter vos ventes ?") suivie d'un bouton "Oui, je veux en savoir plus". Cette technique exploite le biais de cohérence et peut doubler le taux de clic.

## Mesurer et optimiser ses CTAs

Chaque CTA doit être trackable. Configurez des événements dans Google Analytics 4 pour mesurer le taux de clic de chaque bouton. Les heatmaps (Hotjar, Microsoft Clarity) montrent visuellement où les visiteurs cliquent et permettent d'identifier si votre CTA est vu et cliqué.

L'A/B testing est la méthode la plus fiable pour optimiser un CTA. Testez un élément à la fois : texte, couleur, taille, position. Des changements apparemment mineurs (ajouter "gratuit" au texte, changer la couleur, déplacer le bouton) peuvent augmenter les conversions de 20 à 50%.

Chez ConvertiLab, chaque site est conçu avec des CTAs stratégiques testés et optimisés. Nous plaçons les bons boutons, au bon endroit, avec le bon message, pour maximiser votre taux de conversion.`,
    importance:
      "Le CTA est le déclencheur de toute conversion sur votre site. Sans CTA clair et bien placé, vos visiteurs repartent sans agir. Optimiser vos CTAs est le moyen le plus rapide d'augmenter vos leads et ventes sans modifier le reste de votre site.",
    examples: [
      "Un site de formation en ligne remplace 'S'inscrire' par 'Commencer ma formation gratuite' — le taux d'inscription augmente de 45%.",
      "Un e-commerce ajoute un CTA sticky 'Ajouter au panier' visible en permanence sur mobile — le taux d'ajout au panier augmente de 28%.",
      "Un cabinet comptable ajoute 'Réponse sous 2h' sous son bouton 'Demander un devis gratuit' — les demandes de devis augmentent de 60% en un mois.",
    ],
    faqItems: [
      {
        question: "Combien de CTAs mettre sur une page ?",
        answer:
          "Une page doit avoir un seul objectif principal, donc un seul type de CTA primaire (répété 2 à 3 fois sur la page). Vous pouvez ajouter 1-2 CTAs secondaires pour les visiteurs pas encore prêts à convertir. Évitez de proposer trop d'actions différentes : cela dilue l'attention et réduit les conversions.",
      },
      {
        question: "Quelle couleur choisir pour un bouton CTA ?",
        answer:
          "Il n'y a pas de couleur universellement meilleure. L'essentiel est le contraste avec le fond de la page. Le bouton doit immédiatement attirer le regard. Testez différentes couleurs avec de l'A/B testing pour votre audience spécifique. En règle générale, les couleurs vives (orange, vert, rouge) surpassent les couleurs froides (gris, bleu clair).",
      },
      {
        question:
          "Quel texte mettre sur un bouton CTA pour maximiser les clics ?",
        answer:
          "Utilisez un verbe d'action orienté bénéfice avec la première personne : 'Recevoir mon devis gratuit', 'Commencer mon essai', 'Télécharger mon guide'. Ajoutez un élément de réassurance juste en dessous du bouton : 'Sans engagement', 'En 2 minutes', 'Gratuit'. Évitez les textes vagues comme 'Soumettre', 'Cliquer ici' ou 'Envoyer'.",
      },
    ],
    lastUpdated: "6 avril 2026",
    relatedTerms: ["taux-de-conversion", "landing-page", "ux"],
    relatedService: "/services/sites-web/landing-page",
  },
];

export const getTermBySlug = (slug: string) =>
  glossaryTerms.find((t) => t.slug === slug);
