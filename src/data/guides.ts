export interface GuideStep {
  title: string;
  content: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  steps: GuideStep[];
  tips: string[];
  faqItems: FAQItem[];
  relatedService: string;
  relatedDevis: string;
}

export const guides: Guide[] = [
  {
    slug: "creer-site-internet",
    title: "Créer un Site Internet Professionnel",
    description: "Guide complet pour créer un site internet professionnel en 2024. Découvrez les étapes clés, les erreurs à éviter et nos conseils d'experts pour un site performant.",
    steps: [
      {
        title: "Définir vos objectifs et votre cible",
        content: "Avant de vous lancer dans la création de votre site internet, il est essentiel de définir clairement vos objectifs business. Souhaitez-vous générer des leads, vendre en ligne, ou simplement présenter votre activité ? Identifiez précisément votre audience cible : âge, localisation, habitudes de navigation, problèmes à résoudre. Cette étape fondamentale conditionnera toutes les décisions suivantes, du design au contenu en passant par les fonctionnalités. Prenez le temps de rédiger un cahier des charges synthétique qui servira de feuille de route tout au long du projet. N'hésitez pas à analyser les sites de vos concurrents pour identifier ce qui fonctionne dans votre secteur et ce que vous pouvez améliorer."
      },
      {
        title: "Choisir la bonne technologie",
        content: "Le choix technologique est déterminant pour la performance et l'évolutivité de votre site. WordPress convient pour des sites simples avec beaucoup de contenu éditorial. Pour un site sur-mesure performant, les frameworks modernes comme Next.js offrent des temps de chargement ultra-rapides et un excellent SEO natif. Shopify ou WooCommerce sont adaptés au e-commerce. Évaluez vos besoins en termes de personnalisation, de performance et de budget. Un site rapide améliore l'expérience utilisateur et votre positionnement Google. Chez ConvertiLab, nous utilisons Next.js et Tailwind CSS pour créer des sites qui se chargent en moins d'une seconde, avec un score Lighthouse supérieur à 90."
      },
      {
        title: "Concevoir l'architecture et le design",
        content: "L'architecture de votre site doit être intuitive et pensée pour la conversion. Commencez par un wireframe qui définit la structure de chaque page : header, sections principales, appels à l'action, footer. Le design doit refléter votre identité de marque avec une charte graphique cohérente : couleurs, typographies, iconographie. Adoptez une approche mobile-first car plus de 60% du trafic web provient des smartphones. Chaque page doit avoir un objectif clair et un CTA visible. La navigation doit permettre d'accéder à n'importe quelle page en moins de 3 clics. Utilisez des espaces blancs pour aérer le contenu et guider le regard de vos visiteurs vers les éléments importants."
      },
      {
        title: "Rédiger le contenu optimisé SEO",
        content: "Le contenu est le pilier de votre visibilité en ligne. Rédigez des textes clairs, engageants et optimisés pour les moteurs de recherche. Chaque page doit cibler un mot-clé principal et des mots-clés secondaires pertinents. Structurez vos textes avec des titres H1, H2, H3 pour faciliter la lecture et le crawl Google. Rédigez des meta titles de moins de 60 caractères et des meta descriptions de moins de 155 caractères. Intégrez des images optimisées avec des attributs alt descriptifs. Le contenu de votre page d'accueil doit immédiatement communiquer votre proposition de valeur. N'oubliez pas les pages légales obligatoires : mentions légales, politique de confidentialité, CGV si applicable."
      },
      {
        title: "Développer et intégrer les fonctionnalités",
        content: "Le développement doit suivre les meilleures pratiques : code propre, composants réutilisables, responsive design. Intégrez un formulaire de contact fonctionnel avec validation des champs et confirmation par email. Ajoutez Google Analytics et Google Search Console pour suivre vos performances. Configurez un certificat SSL pour sécuriser votre site (HTTPS). Optimisez les images avec des formats modernes comme WebP et le lazy loading. Implémentez le schema markup pour enrichir vos résultats Google. Testez chaque fonctionnalité sur différents navigateurs et appareils. Assurez-vous que les temps de chargement sont inférieurs à 3 secondes sur mobile."
      },
      {
        title: "Tester et optimiser avant le lancement",
        content: "Avant la mise en ligne, réalisez une batterie de tests exhaustive. Vérifiez le responsive sur mobile, tablette et desktop. Testez tous les formulaires et parcours utilisateur. Utilisez Google PageSpeed Insights pour mesurer la performance et corriger les problèmes identifiés. Vérifiez l'accessibilité avec des outils comme Lighthouse. Testez la compatibilité navigateurs (Chrome, Firefox, Safari, Edge). Relisez tout le contenu pour éliminer les fautes. Configurez les redirections 301 si vous migrez depuis un ancien site. Préparez votre plan de lancement : annonce sur les réseaux sociaux, emailing à votre base de contacts, Google My Business."
      },
      {
        title: "Lancer et suivre les performances",
        content: "Le lancement n'est que le début de l'aventure. Soumettez votre sitemap à Google Search Console pour accélérer l'indexation. Surveillez vos métriques clés : trafic, taux de rebond, temps passé sur le site, taux de conversion. Analysez le comportement des utilisateurs avec des heatmaps pour identifier les zones d'amélioration. Planifiez une stratégie de contenu régulière (blog, actualités) pour améliorer votre SEO. Mettez à jour régulièrement votre site pour maintenir la sécurité et les performances. Après 3 mois, réalisez un premier audit complet pour ajuster votre stratégie et optimiser les pages sous-performantes."
      }
    ],
    tips: [
      "Investissez dans un nom de domaine professionnel qui reflète votre marque et est facile à mémoriser.",
      "Privilégiez la qualité du contenu à la quantité : une page bien rédigée vaut mieux que dix pages bâclées.",
      "Pensez mobile-first : testez systématiquement chaque modification sur smartphone avant desktop."
    ],
    faqItems: [
      {
        question: "Combien coûte la création d'un site internet professionnel ?",
        answer: "Le coût varie selon la complexité : de 500€ pour une landing page à plusieurs milliers d'euros pour un site e-commerce. Chez ConvertiLab, nos sites vitrine démarrent à 500€ avec un accompagnement complet."
      },
      {
        question: "Combien de temps faut-il pour créer un site internet ?",
        answer: "En moyenne, comptez 1 à 2 semaines pour un site vitrine et 3 à 4 semaines pour un site e-commerce. Nous proposons aussi des délais express pour les projets urgents."
      },
      {
        question: "Faut-il des compétences techniques pour gérer son site ?",
        answer: "Non, nous livrons des sites avec une interface d'administration simple et intuitive. Nous formons également nos clients à la gestion de leur contenu."
      }
    ],
    relatedService: "sites-web",
    relatedDevis: "site-vitrine"
  },
  {
    slug: "creer-boutique-en-ligne",
    title: "Créer une Boutique en Ligne Rentable",
    description: "Guide étape par étape pour créer une boutique en ligne performante. Choix de plateforme, design, paiement, logistique et stratégies pour vendre en ligne.",
    steps: [
      {
        title: "Valider votre marché et vos produits",
        content: "Avant de créer votre boutique en ligne, validez la demande pour vos produits. Analysez la concurrence en ligne : qui vend des produits similaires, à quels prix, avec quelle proposition de valeur ? Utilisez des outils comme Google Trends et Ubersuggest pour évaluer le volume de recherche. Définissez votre positionnement prix et votre avantage concurrentiel. Testez votre concept avec une landing page simple et des publicités ciblées avant d'investir dans un site complet. Identifiez vos 20% de produits qui génèreront 80% de votre chiffre d'affaires. Préparez des fiches produits détaillées avec descriptions, caractéristiques techniques, photos haute qualité et avis clients si disponibles."
      },
      {
        title: "Choisir la plateforme e-commerce adaptée",
        content: "Le choix de la plateforme conditionne vos possibilités et vos coûts. Shopify est idéal pour démarrer rapidement avec un abonnement mensuel tout-en-un. WooCommerce sur WordPress offre plus de flexibilité mais nécessite plus de maintenance. Pour un e-commerce sur-mesure et ultra-performant, un développement custom avec Next.js et une base de données comme Supabase permet une personnalisation totale. Évaluez les critères essentiels : facilité de gestion du catalogue, options de paiement, gestion des stocks, frais de transaction, personnalisation du design, capacité à évoluer avec votre croissance. Chez ConvertiLab, nous recommandons des solutions adaptées à votre volume de ventes et votre budget."
      },
      {
        title: "Concevoir l'expérience d'achat",
        content: "L'expérience utilisateur est le facteur numéro un de conversion en e-commerce. Votre page d'accueil doit immédiatement présenter vos meilleures offres et catégories. Les fiches produits doivent inclure des photos de qualité professionnelle sous plusieurs angles, une description détaillée, les variantes disponibles et les avis clients. Le panier doit être accessible en un clic depuis n'importe quelle page. Simplifiez le tunnel de commande : idéalement 3 étapes maximum (panier, informations, paiement). Proposez la commande en tant qu'invité sans création de compte obligatoire. Affichez clairement les frais de livraison dès le panier pour éviter les abandons. Ajoutez des éléments de réassurance : logos de paiement sécurisé, politique de retour, avis clients vérifiés."
      },
      {
        title: "Configurer les paiements et la logistique",
        content: "Intégrez des solutions de paiement fiables et diversifiées. Stripe est la référence pour les paiements par carte bancaire avec des frais compétitifs. Ajoutez PayPal pour rassurer les acheteurs habitués à cette solution. Proposez le paiement en 3 ou 4 fois via Alma ou Klarna pour augmenter le panier moyen. Pour la logistique, choisissez entre l'expédition depuis votre stock, le dropshipping, ou un prestataire logistique. Configurez des zones de livraison avec des tarifs clairs. Offrez la livraison gratuite à partir d'un certain montant pour augmenter la valeur du panier. Préparez des modèles d'emails transactionnels professionnels : confirmation de commande, expédition, demande d'avis."
      },
      {
        title: "Optimiser le SEO e-commerce",
        content: "Le référencement naturel est une source de trafic gratuite et durable pour votre boutique. Optimisez chaque fiche produit avec un title unique, une meta description attractive et des URLs propres. Utilisez le balisage schema.org Product pour afficher les prix et avis directement dans Google. Créez des pages de catégories optimisées qui ciblent des mots-clés commerciaux. Rédigez un blog avec des guides d'achat et des comparatifs pour attirer du trafic informationnel. Travaillez les images avec des noms de fichiers descriptifs et des balises alt. Évitez le contenu dupliqué entre les variantes de produits. Soumettez un sitemap spécifique aux produits dans Google Search Console."
      },
      {
        title: "Lancer et acquérir vos premiers clients",
        content: "Préparez votre lancement avec une stratégie d'acquisition multicanale. Configurez Google Ads avec des campagnes Shopping pour apparaître dans les résultats de recherche avec vos produits et prix. Lancez des campagnes Meta Ads ciblées sur votre audience idéale avec des visuels attrayants. Activez le retargeting pour relancer les visiteurs qui n'ont pas acheté. Créez des offres de lancement attractives : code promo, livraison offerte, cadeau avec la première commande. Développez votre présence sur les réseaux sociaux en publiant régulièrement du contenu engageant. Inscrivez votre boutique sur Google Merchant Center pour apparaître dans Google Shopping gratuitement."
      }
    ],
    tips: [
      "Commencez avec un catalogue restreint de 10-20 produits phares plutôt que de vouloir tout vendre dès le départ.",
      "Investissez dans des photos produits professionnelles : elles sont le premier critère de décision d'achat en ligne.",
      "Mettez en place des emails automatiques de relance de panier abandonné — ils récupèrent en moyenne 10-15% des ventes perdues."
    ],
    faqItems: [
      {
        question: "Quel budget prévoir pour créer une boutique en ligne ?",
        answer: "Comptez à partir de 800€ pour une boutique e-commerce fonctionnelle. Le budget varie selon le nombre de produits, les intégrations nécessaires et le niveau de personnalisation du design."
      },
      {
        question: "Peut-on créer un e-commerce sans stock ?",
        answer: "Oui, le dropshipping permet de vendre sans stock. Le fournisseur expédie directement au client. C'est un bon moyen de tester un marché avec un investissement minimal."
      },
      {
        question: "Comment sécuriser les paiements sur ma boutique en ligne ?",
        answer: "Nous intégrons Stripe, la solution de paiement la plus sécurisée du marché, avec certificat SSL, conformité PCI DSS et 3D Secure pour protéger vos clients."
      }
    ],
    relatedService: "sites-web",
    relatedDevis: "site-ecommerce"
  },
  {
    slug: "creer-landing-page",
    title: "Créer une Landing Page qui Convertit",
    description: "Guide expert pour créer une landing page à fort taux de conversion. Structure, copywriting, design et optimisation pour transformer vos visiteurs en clients.",
    steps: [
      {
        title: "Définir un objectif de conversion unique",
        content: "Une landing page efficace ne poursuit qu'un seul objectif : inscription à une newsletter, demande de devis, achat d'un produit, téléchargement d'un ebook. Chaque élément de la page doit servir cet objectif unique. Évitez la tentation d'ajouter plusieurs CTA différents qui diluent l'attention du visiteur. Définissez clairement votre proposition de valeur en une phrase : quel problème résolvez-vous et pour qui ? Identifiez les objections principales de votre audience cible et préparez des réponses pour chacune d'elles. Cette clarté d'intention guidera toutes vos décisions de design et de contenu. Analysez les landing pages de vos concurrents pour comprendre ce qui fonctionne dans votre marché."
      },
      {
        title: "Rédiger un copywriting persuasif",
        content: "Le texte est l'élément le plus important de votre landing page. Commencez par un titre accrocheur qui communique votre bénéfice principal en moins de 10 mots. Le sous-titre développe la promesse et suscite la curiosité. Utilisez la formule AIDA : Attention (titre), Intérêt (problème), Désir (solution + bénéfices), Action (CTA). Rédigez des bullet points pour lister les bénéfices concrets, pas les fonctionnalités. Utilisez des chiffres précis pour crédibiliser vos arguments : « +47% de conversions » plutôt que « plus de conversions ». Adressez directement votre lecteur avec le « vous ». Créez un sentiment d'urgence avec des offres limitées dans le temps ou en quantité."
      },
      {
        title: "Structurer la page pour la conversion",
        content: "La structure de votre landing page suit un ordre psychologique précis. En haut : le hero avec titre, sous-titre, visuel et CTA principal au-dessus de la ligne de flottaison. Ensuite, la preuve sociale (logos clients, nombre d'utilisateurs, avis). Puis les bénéfices détaillés avec des icônes et du texte court. Ajoutez une section « Comment ça marche » en 3 étapes simples. Intégrez des témoignages clients avec photo, nom et résultat concret. Terminez par une section FAQ pour lever les dernières objections et un CTA final identique au premier. La page ne doit contenir aucun lien de navigation externe : pas de menu, pas de footer complet, uniquement des liens vers votre objectif de conversion."
      },
      {
        title: "Designer pour l'impact visuel",
        content: "Le design de votre landing page doit guider le regard vers le CTA. Utilisez une hiérarchie visuelle claire : les éléments les plus importants sont les plus grands et les plus contrastés. Le bouton CTA doit avoir une couleur qui contraste fortement avec le reste de la page. Limitez votre palette à 2-3 couleurs maximum. Utilisez beaucoup d'espace blanc pour aérer le contenu et éviter la surcharge cognitive. Les images doivent montrer le résultat final ou le produit en situation d'utilisation. Évitez les photos de stock génériques qui nuisent à la crédibilité. Sur mobile, chaque section doit être lisible sans zoom et le CTA doit être accessible avec le pouce. Ajoutez des micro-animations subtiles pour guider l'attention."
      },
      {
        title: "Optimiser la vitesse de chargement",
        content: "La vitesse de chargement impacte directement votre taux de conversion : chaque seconde supplémentaire réduit les conversions de 7%. Optimisez vos images en WebP avec compression sans perte visible. Minifiez le CSS et JavaScript. Utilisez le lazy loading pour les éléments sous la ligne de flottaison. Hébergez votre landing page sur un CDN performant comme Vercel pour des temps de réponse inférieurs à 100ms partout dans le monde. Évitez les scripts tiers inutiles qui alourdissent la page. Visez un score Lighthouse supérieur à 90 sur mobile. Le premier affichage significatif (LCP) doit intervenir en moins de 2,5 secondes. Testez régulièrement la performance avec Google PageSpeed Insights."
      },
      {
        title: "Mettre en place le tracking et les tests A/B",
        content: "Sans mesure, pas d'amélioration. Configurez Google Analytics 4 avec des événements de conversion personnalisés. Installez le pixel Meta et le tag Google Ads si vous utilisez la publicité payante. Utilisez des heatmaps (Hotjar ou Microsoft Clarity) pour visualiser le comportement des visiteurs. Lancez des tests A/B sur les éléments clés : titre, CTA, couleur du bouton, visuel hero. Ne testez qu'un seul élément à la fois pour identifier clairement ce qui fonctionne. Attendez d'avoir au moins 100 conversions avant de tirer des conclusions statistiquement significatives. Documentez chaque test et ses résultats pour capitaliser sur vos apprentissages."
      }
    ],
    tips: [
      "Votre CTA doit être visible sans scroller sur mobile et desktop — c'est la règle numéro un.",
      "Ajoutez des témoignages vidéo si possible : ils convertissent 2 à 3 fois mieux que les témoignages texte.",
      "Testez votre landing page auprès de 5 personnes de votre cible avant de lancer vos campagnes publicitaires."
    ],
    faqItems: [
      {
        question: "Quelle est la différence entre un site vitrine et une landing page ?",
        answer: "Un site vitrine comporte plusieurs pages et présente l'ensemble de votre activité. Une landing page est une page unique focalisée sur un seul objectif de conversion, idéale pour les campagnes publicitaires."
      },
      {
        question: "Quel taux de conversion attendre d'une landing page ?",
        answer: "Un bon taux de conversion se situe entre 3% et 10% selon le secteur. Nos landing pages optimisées atteignent régulièrement 8 à 15% grâce à notre méthodologie CRO."
      },
      {
        question: "Peut-on modifier une landing page après sa création ?",
        answer: "Absolument, et c'est même recommandé. L'optimisation continue via des tests A/B est la clé pour améliorer les performances. Nous livrons des pages facilement modifiables."
      }
    ],
    relatedService: "sites-web",
    relatedDevis: "landing-page"
  },
  {
    slug: "refonte-site-web",
    title: "Réussir la Refonte de votre Site Web",
    description: "Guide complet pour réussir la refonte de votre site web sans perdre votre référencement. Audit, migration, design moderne et optimisation des performances.",
    steps: [
      {
        title: "Auditer votre site actuel",
        content: "Avant toute refonte, réalisez un audit complet de votre site existant. Analysez vos métriques dans Google Analytics : pages les plus visitées, sources de trafic, taux de rebond par page, parcours utilisateur. Identifiez les pages qui génèrent le plus de conversions pour les préserver. Réalisez un audit SEO avec Google Search Console : mots-clés positionnés, pages indexées, erreurs techniques. Listez les URLs existantes avec leur trafic pour planifier les redirections. Évaluez la performance technique avec Lighthouse : vitesse de chargement, accessibilité, bonnes pratiques. Recueillez les retours de vos clients et utilisateurs : qu'est-ce qui les frustre, que cherchent-ils sans trouver ?"
      },
      {
        title: "Définir les objectifs de la refonte",
        content: "Une refonte n'est pas juste un changement de design. Définissez des objectifs mesurables : augmenter le taux de conversion de X%, réduire le taux de rebond, améliorer le temps de chargement, repositionner votre marque. Identifiez les problèmes prioritaires à résoudre : design daté, navigation confuse, site non responsive, contenu obsolète, performance médiocre. Établissez un benchmark avec vos métriques actuelles pour mesurer l'impact de la refonte. Définissez votre nouveau positionnement de marque et l'image que vous souhaitez véhiculer. Créez un cahier des charges détaillé avec les nouvelles fonctionnalités souhaitées, les pages à conserver, modifier ou supprimer."
      },
      {
        title: "Planifier la migration SEO",
        content: "La migration SEO est l'étape la plus critique d'une refonte. Une mauvaise gestion peut faire chuter votre trafic de 50% ou plus. Cartographiez toutes vos URLs actuelles et définissez les correspondances avec les nouvelles URLs. Préparez un fichier de redirections 301 exhaustif : chaque ancienne URL doit pointer vers la nouvelle page correspondante. Conservez vos balises title et meta description performantes. Ne modifiez pas les URLs des pages qui rankent bien sauf nécessité absolue. Prévenez Google du changement en soumettant le nouveau sitemap dès la mise en ligne. Surveillez Google Search Console quotidiennement pendant les 4 semaines suivant la migration pour détecter les erreurs 404."
      },
      {
        title: "Moderniser le design et l'UX",
        content: "Le nouveau design doit être à la fois moderne et fonctionnel. Adoptez les tendances actuelles : design épuré, typographies grandes et lisibles, couleurs vives mais harmonieuses, micro-animations subtiles. Repensez la navigation pour la simplifier : menu clair, arborescence logique, fil d'Ariane. Améliorez l'expérience mobile qui représente désormais plus de 60% du trafic. Optimisez les parcours utilisateur en réduisant le nombre de clics vers la conversion. Utilisez des composants UI modernes : cards, accordéons, onglets pour organiser l'information. Intégrez des éléments de confiance visibles : avis clients, logos partenaires, certifications. Testez le nouveau design avec des utilisateurs réels avant le développement complet."
      },
      {
        title: "Développer avec les technologies modernes",
        content: "Profitez de la refonte pour adopter une stack technique performante. Next.js offre un rendu serveur optimal pour le SEO et des temps de chargement ultra-rapides. Tailwind CSS permet un design responsive cohérent et maintenable. Utilisez des composants réutilisables pour faciliter les futures mises à jour. Implémentez le lazy loading, l'optimisation automatique des images et la mise en cache intelligente. Configurez un CMS headless si le client doit gérer son contenu régulièrement. Assurez l'accessibilité WCAG 2.1 niveau AA minimum. Mettez en place des tests automatisés pour garantir la qualité lors des mises à jour futures."
      },
      {
        title: "Tester, lancer et surveiller",
        content: "Réalisez des tests exhaustifs avant le lancement : responsive, cross-browser, formulaires, liens, performance, accessibilité. Vérifiez que toutes les redirections 301 fonctionnent correctement. Testez le site sur de vrais appareils, pas uniquement les simulateurs. Planifiez le lancement en période de faible trafic pour minimiser l'impact en cas de problème. Après le lancement, surveillez quotidiennement : trafic, erreurs 404, positionnements SEO, taux de conversion. Comparez les métriques avec votre benchmark pour valider l'atteinte des objectifs. Prévoyez un mois de stabilisation pour corriger les ajustements nécessaires. Communiquez le nouveau site à vos clients via newsletter et réseaux sociaux."
      }
    ],
    tips: [
      "Ne lancez jamais une refonte sans un plan de redirections 301 exhaustif — c'est la cause numéro un de perte de trafic.",
      "Conservez le contenu qui performe bien en SEO et concentrez-vous sur l'amélioration du design et de l'UX.",
      "Prévoyez un budget de suivi post-lancement de 2-4 semaines pour corriger les inévitables ajustements."
    ],
    faqItems: [
      {
        question: "Vais-je perdre mon référencement Google avec une refonte ?",
        answer: "Pas si la migration SEO est correctement planifiée. Avec des redirections 301 bien configurées et une conservation du contenu performant, vous maintiendrez voire améliorerez votre positionnement."
      },
      {
        question: "Combien de temps dure une refonte de site web ?",
        answer: "Comptez 2 à 4 semaines pour un site vitrine et 4 à 8 semaines pour un site e-commerce, incluant l'audit, le design, le développement et les tests."
      },
      {
        question: "Faut-il changer de nom de domaine lors d'une refonte ?",
        answer: "Non, conservez votre nom de domaine existant pour préserver votre autorité SEO. Un changement de domaine est une opération à part, beaucoup plus risquée."
      }
    ],
    relatedService: "sites-web",
    relatedDevis: "refonte-site"
  },
  {
    slug: "choisir-agence-web",
    title: "Comment Choisir son Agence Web",
    description: "Les critères essentiels pour choisir la bonne agence web. Portfolio, expertise, tarifs, méthodologie : tout ce qu'il faut vérifier avant de signer.",
    steps: [
      {
        title: "Définir vos besoins précisément",
        content: "Avant de contacter des agences, clarifiez vos besoins. Quel type de site souhaitez-vous : vitrine, e-commerce, application web ? Quelles fonctionnalités sont essentielles : formulaire de contact, espace client, blog, réservation en ligne ? Quel est votre budget réaliste ? Quel est votre calendrier ? Avez-vous besoin d'un accompagnement SEO et marketing en plus du développement ? Rédigez un brief synthétique d'une page qui résume votre projet, vos objectifs business et vos contraintes. Ce document vous permettra de comparer les réponses des différentes agences sur une base commune et d'évaluer leur compréhension de vos enjeux."
      },
      {
        title: "Évaluer le portfolio et les références",
        content: "Le portfolio est le meilleur indicateur de la qualité d'une agence. Examinez les sites réalisés : sont-ils modernes, rapides, bien conçus ? Testez-les sur mobile. Vérifiez leur performance avec Google PageSpeed Insights. L'agence a-t-elle de l'expérience dans votre secteur d'activité ? Demandez des études de cas avec des résultats concrets : augmentation du trafic, amélioration du taux de conversion, ROI. Contactez d'anciens clients pour recueillir leur retour d'expérience. Vérifiez les avis Google et les témoignages. Méfiez-vous des portfolios trop beaux qui ne montrent que des maquettes : demandez les URLs des sites en production pour les tester vous-même."
      },
      {
        title: "Vérifier l'expertise technique",
        content: "L'expertise technique détermine la qualité et la pérennité de votre site. Demandez quelles technologies l'agence utilise et pourquoi. Les agences modernes utilisent des frameworks comme Next.js ou Nuxt.js plutôt que des CMS lourds. Évaluez leur maîtrise du SEO technique : balisage sémantique, performance, Core Web Vitals. Vérifiez qu'ils suivent les bonnes pratiques d'accessibilité et de sécurité. Demandez comment ils gèrent l'hébergement et la maintenance. Une bonne agence propose un accompagnement technique post-livraison. Posez des questions sur leur processus de développement : utilisent-ils Git, des environnements de staging, des tests automatisés ?"
      },
      {
        title: "Comparer les méthodologies de travail",
        content: "La méthodologie de travail impacte directement la réussite de votre projet. Une bonne agence suit un processus structuré : brief, maquettes, validation, développement, tests, livraison. Demandez comment se passent les validations intermédiaires : aurez-vous accès à une version de prévisualisation ? Combien de révisions sont incluses ? Quel est le processus de gestion des modifications en cours de projet ? Comment communiquent-ils : réunions régulières, outil de gestion de projet, interlocuteur dédié ? Évaluez leur réactivité dès les premiers échanges : une agence qui met une semaine à répondre à votre demande initiale ne sera pas plus réactive pendant le projet."
      },
      {
        title: "Analyser les devis et conditions",
        content: "Comparez les devis en détail, pas uniquement le prix total. Vérifiez ce qui est inclus : nombre de pages, responsive, SEO de base, formulaires, hébergement, maintenance. Attention aux prix trop bas qui cachent souvent des compromis sur la qualité ou des coûts cachés. Demandez un échéancier de paiement clair : un acompte de 30-50% au démarrage est standard. Vérifiez les conditions de propriété du code : vous devez être propriétaire de votre site et de son code source. Clarifiez les coûts récurrents : hébergement, maintenance, mises à jour. Demandez ce qui se passe si le projet prend du retard ou si vous souhaitez ajouter des fonctionnalités."
      },
      {
        title: "Vérifier l'accompagnement post-livraison",
        content: "La relation avec votre agence ne s'arrête pas à la livraison du site. Vérifiez les garanties post-livraison : corrections de bugs, support technique, période de garantie. Demandez si l'agence propose des services complémentaires : SEO, publicité en ligne, community management. Un bon partenaire web vous accompagne dans la durée pour faire évoluer votre site et votre visibilité en ligne. Évaluez leur offre de maintenance : mises à jour de sécurité, sauvegardes, monitoring. Demandez comment sont gérées les demandes d'évolution après la livraison : délais, tarification. Choisissez une agence qui se positionne comme un partenaire à long terme, pas un simple prestataire."
      }
    ],
    tips: [
      "Demandez toujours au moins 3 devis pour comparer les approches et les tarifs.",
      "Méfiez-vous des agences qui promettent la première page Google en 1 mois — le SEO est un travail de long terme.",
      "Privilégiez une agence locale ou facilement joignable pour des échanges fluides tout au long du projet."
    ],
    faqItems: [
      {
        question: "Freelance ou agence web : que choisir ?",
        answer: "Un freelance est souvent moins cher mais travaille seul, ce qui peut poser des problèmes de disponibilité. Une agence offre une équipe pluridisciplinaire (design, développement, SEO) et une continuité de service."
      },
      {
        question: "Comment vérifier la fiabilité d'une agence web ?",
        answer: "Vérifiez les avis Google, contactez d'anciens clients, testez leurs réalisations en ligne et évaluez leur réactivité dès les premiers échanges."
      },
      {
        question: "Quel budget prévoir pour une agence web de qualité ?",
        answer: "Un site vitrine professionnel coûte entre 500€ et 3000€ selon la complexité. Méfiez-vous des offres à moins de 300€ qui impliquent souvent des templates non personnalisés."
      }
    ],
    relatedService: "sites-web",
    relatedDevis: "site-vitrine"
  },
  {
    slug: "ameliorer-seo",
    title: "Améliorer le SEO de votre Site Web",
    description: "Guide pratique pour améliorer le référencement naturel de votre site. Audit SEO, optimisation technique, contenu, netlinking et suivi des résultats.",
    steps: [
      {
        title: "Réaliser un audit SEO complet",
        content: "Commencez par un état des lieux de votre référencement actuel. Utilisez Google Search Console pour identifier vos mots-clés positionnés, les pages indexées et les erreurs techniques. Analysez votre trafic organique dans Google Analytics : quelles pages reçoivent du trafic SEO, quels mots-clés convertissent ? Utilisez des outils comme Screaming Frog pour crawler votre site et détecter les problèmes techniques : erreurs 404, redirections en chaîne, pages sans meta description, contenu dupliqué. Évaluez vos Core Web Vitals avec PageSpeed Insights. Analysez votre profil de liens avec Ahrefs ou SEMrush. Cet audit vous donnera une feuille de route priorisée des optimisations à réaliser."
      },
      {
        title: "Optimiser le SEO technique",
        content: "Le SEO technique est le socle de votre visibilité. Assurez-vous que votre site est en HTTPS avec un certificat SSL valide. Optimisez la vitesse de chargement : compressez les images en WebP, activez la mise en cache, minifiez le CSS et JavaScript. Soumettez un sitemap XML à jour dans Google Search Console. Configurez un fichier robots.txt qui autorise le crawl des pages importantes. Implémentez le balisage schema.org pour enrichir vos résultats de recherche. Assurez-vous que votre site est entièrement responsive et mobile-friendly. Corrigez les erreurs 404 avec des redirections 301. Utilisez des URLs courtes et descriptives avec vos mots-clés cibles. Vérifiez que chaque page a un seul H1 unique."
      },
      {
        title: "Optimiser le contenu on-page",
        content: "Le contenu de qualité est le facteur de ranking le plus important. Chaque page doit cibler un mot-clé principal et des mots-clés secondaires sémantiquement liés. Rédigez des balises title de moins de 60 caractères incluant votre mot-clé principal. Les meta descriptions de moins de 155 caractères doivent inciter au clic. Structurez votre contenu avec des H2 et H3 qui reprennent des variantes de vos mots-clés. Rédigez un contenu approfondi et utile : Google favorise les pages qui répondent complètement à l'intention de recherche de l'utilisateur. Optimisez les images avec des balises alt descriptives. Ajoutez des liens internes pertinents vers vos autres pages. Mettez à jour régulièrement votre contenu existant pour le garder frais et pertinent."
      },
      {
        title: "Créer une stratégie de contenu",
        content: "Un blog alimenté régulièrement est un levier SEO puissant. Identifiez les questions que se pose votre audience cible avec des outils comme AnswerThePublic ou People Also Ask. Créez un calendrier éditorial avec au minimum 2 articles par mois. Chaque article doit cibler un mot-clé de longue traîne avec un volume de recherche suffisant. Rédigez des guides complets de 1500 à 3000 mots qui font autorité sur leur sujet. Variez les formats : guides pratiques, listes, études de cas, comparatifs. Optimisez chaque article avec un maillage interne vers vos pages commerciales. Ajoutez des FAQ en fin d'article pour cibler les questions des utilisateurs. Promouvez chaque article sur vos réseaux sociaux et votre newsletter."
      },
      {
        title: "Développer le netlinking",
        content: "Les backlinks restent un facteur de ranking majeur. Concentrez-vous sur la qualité plutôt que la quantité : un lien d'un site d'autorité vaut plus que 100 liens de sites de faible qualité. Créez du contenu linkable : études originales, infographies, outils gratuits, guides de référence. Inscrivez votre entreprise dans les annuaires professionnels pertinents et Google My Business. Proposez des articles invités sur des blogs de votre secteur. Développez des partenariats avec des entreprises complémentaires pour des échanges de liens naturels. Surveillez vos mentions de marque sans lien et contactez les sites pour demander l'ajout d'un lien. Évitez absolument l'achat de liens de mauvaise qualité qui peut entraîner une pénalité Google."
      },
      {
        title: "Suivre et ajuster votre stratégie",
        content: "Le SEO est un travail continu qui nécessite un suivi régulier. Configurez un tableau de bord avec vos KPIs principaux : positions sur vos mots-clés cibles, trafic organique, taux de clic, conversions SEO. Surveillez vos positions hebdomadairement avec un outil de suivi de ranking. Analysez les pages qui gagnent ou perdent du trafic pour identifier les opportunités et les problèmes. Réalisez un audit technique trimestriel pour détecter les nouvelles erreurs. Adaptez votre stratégie de contenu en fonction des résultats : doublez les efforts sur ce qui fonctionne. Restez informé des mises à jour de l'algorithme Google qui peuvent impacter vos positions. Les premiers résultats SEO significatifs apparaissent généralement après 3 à 6 mois d'efforts constants."
      }
    ],
    tips: [
      "Concentrez-vous d'abord sur les mots-clés de longue traîne moins concurrentiels pour obtenir des résultats rapides.",
      "Optimisez vos Core Web Vitals : Google les utilise comme facteur de ranking depuis 2021.",
      "Créez du contenu qui répond mieux aux questions des utilisateurs que tout ce qui existe déjà sur le sujet."
    ],
    faqItems: [
      {
        question: "Combien de temps faut-il pour voir des résultats SEO ?",
        answer: "Les premiers résultats apparaissent généralement entre 3 et 6 mois. Le SEO est un investissement à long terme qui génère un trafic gratuit et durable une fois les positions acquises."
      },
      {
        question: "Le SEO est-il compatible avec la publicité payante ?",
        answer: "Absolument, les deux stratégies sont complémentaires. La publicité génère du trafic immédiat tandis que le SEO construit une visibilité durable. Ensemble, ils maximisent votre présence en ligne."
      },
      {
        question: "Puis-je faire le SEO de mon site moi-même ?",
        answer: "Vous pouvez gérer les bases (contenu, meta tags), mais un audit technique approfondi et une stratégie de netlinking nécessitent une expertise spécialisée pour éviter les erreurs pénalisantes."
      }
    ],
    relatedService: "marketing-digital",
    relatedDevis: "seo"
  },
  {
    slug: "premiere-campagne-google-ads",
    title: "Lancer sa Première Campagne Google Ads",
    description: "Guide pas à pas pour créer votre première campagne Google Ads rentable. Paramétrage, mots-clés, annonces, budget et optimisation pour un ROI maximum.",
    steps: [
      {
        title: "Définir votre objectif et votre budget",
        content: "Avant de créer votre campagne Google Ads, définissez un objectif précis et mesurable. Souhaitez-vous générer des appels téléphoniques, des demandes de devis, des ventes en ligne ou du trafic vers votre site ? Chaque objectif nécessite un type de campagne différent. Définissez votre budget quotidien en fonction de votre capacité d'investissement. Commencez avec un budget test de 10-20€ par jour pendant 2 semaines pour collecter des données. Calculez votre coût d'acquisition client maximum acceptable : si un client vous rapporte 500€, vous pouvez investir jusqu'à 50-100€ pour l'acquérir. Configurez le suivi des conversions dès le départ, c'est indispensable pour mesurer votre ROI."
      },
      {
        title: "Rechercher et sélectionner vos mots-clés",
        content: "La sélection des mots-clés est le facteur clé de succès de votre campagne. Utilisez Google Keyword Planner pour identifier les mots-clés pertinents avec leur volume de recherche et leur coût par clic estimé. Privilégiez les mots-clés à intention commerciale : « agence web Paris », « devis site internet », « création boutique en ligne ». Évitez les mots-clés trop génériques et chers comme « site internet » seul. Utilisez les correspondances de mots-clés : expression exacte et mot-clé exact sont plus précis que la correspondance large. Créez une liste de mots-clés négatifs pour exclure les recherches non pertinentes : « gratuit », « formation », « emploi ». Organisez vos mots-clés en groupes d'annonces thématiques de 5 à 15 mots-clés."
      },
      {
        title: "Rédiger des annonces qui convertissent",
        content: "Vos annonces doivent capter l'attention et inciter au clic. Rédigez des titres percutants qui incluent votre mot-clé principal et votre proposition de valeur unique. Utilisez des chiffres concrets : « Devis en 24h », « À partir de 500€ », « +150 sites livrés ». Ajoutez un appel à l'action clair : « Demandez votre devis gratuit », « Réservez votre consultation ». Rédigez au moins 3 variantes d'annonces par groupe d'annonces pour tester ce qui fonctionne le mieux. Utilisez les extensions d'annonces pour maximiser la visibilité : extensions de liens annexes, d'accroche, d'appel, de lieu. Les extensions augmentent le taux de clic de 10 à 15% en moyenne. Respectez les politiques Google Ads pour éviter la désapprobation de vos annonces."
      },
      {
        title: "Configurer le ciblage et les enchères",
        content: "Le ciblage détermine qui verra vos annonces. Ciblez géographiquement les zones où se trouvent vos clients potentiels : ville, département, rayon autour de votre adresse. Configurez les horaires de diffusion en fonction des moments où votre audience est la plus active. Pour les enchères, commencez avec la stratégie « Maximiser les clics » avec un CPC maximum pour contrôler vos coûts. Une fois que vous avez accumulé suffisamment de données de conversion, passez à « Maximiser les conversions » ou « CPA cible ». Excluez les emplacements non pertinents pour les campagnes Display. Configurez le remarketing pour cibler les visiteurs qui n'ont pas converti lors de leur première visite."
      },
      {
        title: "Optimiser votre landing page",
        content: "La qualité de votre landing page impacte directement vos résultats et vos coûts. Google évalue la pertinence et la qualité de votre page de destination dans le Quality Score. Un Quality Score élevé réduit votre coût par clic et améliore votre position. Votre landing page doit reprendre le message de votre annonce pour une cohérence parfaite. Le contenu doit répondre directement à l'intention de recherche du mot-clé ciblé. Assurez-vous que la page se charge en moins de 3 secondes sur mobile. Le formulaire de contact ou le CTA doit être visible sans scroller. Testez différentes versions de votre landing page pour améliorer le taux de conversion. N'envoyez jamais le trafic Ads vers votre page d'accueil générique."
      },
      {
        title: "Analyser et optimiser vos résultats",
        content: "L'optimisation continue est ce qui différencie une campagne rentable d'un gaspillage de budget. Analysez vos métriques quotidiennement pendant les 2 premières semaines : impressions, clics, CTR, conversions, coût par conversion. Identifiez les mots-clés qui génèrent des conversions et augmentez leur enchère. Mettez en pause les mots-clés qui consomment du budget sans convertir. Analysez le rapport sur les termes de recherche pour ajouter des mots-clés négatifs et découvrir de nouvelles opportunités. Testez de nouvelles variantes d'annonces toutes les 2 semaines. Ajustez les enchères par appareil, localisation et heure de la journée en fonction des performances. Visez un ROAS (retour sur investissement publicitaire) minimum de 3:1."
      }
    ],
    tips: [
      "Activez toujours le suivi des conversions AVANT de lancer votre campagne — sans données de conversion, vous optimisez à l'aveugle.",
      "Commencez avec un budget test modeste et augmentez progressivement une fois que vous avez identifié ce qui fonctionne.",
      "La qualité de votre landing page impacte autant vos résultats que la qualité de vos annonces."
    ],
    faqItems: [
      {
        question: "Quel budget minimum pour Google Ads ?",
        answer: "Nous recommandons un budget minimum de 300€/mois pour obtenir suffisamment de données. Le CPC moyen varie de 0,50€ à 5€ selon le secteur et la concurrence."
      },
      {
        question: "Google Ads est-il rentable pour les petites entreprises ?",
        answer: "Oui, Google Ads est particulièrement efficace pour les TPE/PME car vous ne payez que quand quelqu'un clique. Avec un ciblage précis, même un petit budget peut générer des leads qualifiés."
      },
      {
        question: "Combien de temps pour voir des résultats avec Google Ads ?",
        answer: "Les premiers résultats sont visibles dès les premières heures. L'optimisation complète nécessite 2 à 4 semaines de données pour affiner le ciblage et maximiser le ROI."
      }
    ],
    relatedService: "marketing-digital",
    relatedDevis: "google-ads"
  },
  {
    slug: "reseaux-sociaux-entreprise",
    title: "Réseaux Sociaux pour votre Entreprise",
    description: "Guide complet pour développer la présence de votre entreprise sur les réseaux sociaux. Stratégie, contenu, calendrier éditorial et mesure des résultats.",
    steps: [
      {
        title: "Choisir les bons réseaux sociaux",
        content: "Vous n'avez pas besoin d'être présent partout. Choisissez 2 à 3 plateformes où se trouve votre audience cible. LinkedIn est incontournable pour le B2B et les services professionnels. Instagram est idéal pour les entreprises visuelles : restaurants, mode, décoration, immobilier. Facebook reste pertinent pour les commerces locaux et les entreprises ciblant les 35+ ans. TikTok touche les 18-35 ans avec du contenu vidéo court et engageant. Pinterest fonctionne pour la décoration, la mode, la cuisine et le DIY. Analysez où vos concurrents sont actifs et où ils obtiennent le plus d'engagement. Il vaut mieux exceller sur 2 plateformes que d'être médiocre sur 5."
      },
      {
        title: "Définir votre stratégie de contenu",
        content: "Votre contenu doit apporter de la valeur à votre audience, pas uniquement promouvoir vos produits. Appliquez la règle 80/20 : 80% de contenu utile, éducatif ou divertissant, 20% de contenu promotionnel. Définissez vos piliers de contenu : 3 à 5 thématiques récurrentes qui reflètent votre expertise. Par exemple pour une agence web : conseils design, astuces SEO, coulisses de projets, témoignages clients, tendances web. Adaptez le format au réseau : carrousels sur Instagram et LinkedIn, vidéos courtes sur TikTok et Reels, articles longs sur LinkedIn. Créez une charte graphique pour vos publications : couleurs, typographies, style photographique. La cohérence visuelle renforce la reconnaissance de votre marque."
      },
      {
        title: "Créer un calendrier éditorial",
        content: "Un calendrier éditorial est essentiel pour maintenir une présence régulière et organisée. Planifiez vos publications au moins 2 semaines à l'avance. Définissez une fréquence réaliste et tenable : 3 à 5 publications par semaine sur Instagram, 2 à 3 sur LinkedIn, 1 par jour sur TikTok. Identifiez les meilleurs horaires de publication pour votre audience : testez différents créneaux et analysez les résultats. Préparez un mix de formats : images, carrousels, vidéos, stories, reels. Intégrez les dates importantes de votre secteur et les marronniers : fêtes, événements, journées mondiales. Utilisez un outil de planification comme Buffer ou Hootsuite pour programmer vos publications. Gardez de la flexibilité pour réagir à l'actualité et aux tendances du moment."
      },
      {
        title: "Produire du contenu de qualité",
        content: "La qualité du contenu détermine votre engagement et votre croissance. Investissez dans un bon smartphone et un éclairage correct pour vos photos et vidéos. Utilisez Canva pour créer des visuels professionnels facilement, même sans compétences en design. Rédigez des légendes engageantes qui commencent par un hook accrocheur pour stopper le scroll. Posez des questions en fin de publication pour encourager les commentaires. Utilisez les hashtags stratégiquement : 5 à 10 hashtags pertinents sur Instagram, 3 à 5 sur LinkedIn. Créez des séries de contenu récurrentes que votre audience attend : « Conseil du mardi », « Avant/Après ». Repurposez votre contenu : un article de blog peut devenir un carrousel, une infographie et 3 posts."
      },
      {
        title: "Engager votre communauté",
        content: "Les réseaux sociaux sont un canal de conversation, pas de diffusion unilatérale. Répondez à chaque commentaire et message privé dans les 24 heures. Engagez proactivement avec les comptes de votre audience cible : likez, commentez, partagez leur contenu. Créez des opportunités d'interaction : sondages en stories, questions ouvertes, concours. Identifiez et remerciez vos ambassadeurs les plus actifs. Collaborez avec des micro-influenceurs de votre secteur pour toucher de nouvelles audiences. Gérez les avis négatifs avec professionnalisme et transparence. Créez un groupe Facebook ou une communauté LinkedIn pour fédérer votre audience autour de votre expertise. L'engagement génère de la visibilité algorithmique qui attire de nouveaux abonnés organiquement."
      },
      {
        title: "Mesurer et optimiser vos résultats",
        content: "Sans mesure, pas d'amélioration. Suivez vos KPIs mensuellement : croissance des abonnés, taux d'engagement, portée des publications, clics vers votre site, conversions. Utilisez les statistiques natives de chaque plateforme et Google Analytics pour le trafic social. Identifiez vos publications les plus performantes et analysez pourquoi elles fonctionnent : sujet, format, heure de publication, type de hook. Doublez les efforts sur ce qui marche et abandonnez ce qui ne génère pas de résultats. Ajustez votre calendrier éditorial en fonction des données. Comparez vos performances avec celles de vos concurrents pour vous situer. Réalisez un bilan trimestriel complet pour ajuster votre stratégie globale."
      }
    ],
    tips: [
      "La régularité est plus importante que la fréquence : mieux vaut 3 posts de qualité par semaine que 7 posts médiocres.",
      "Les vidéos courtes (Reels, TikTok) obtiennent en moyenne 2 à 3 fois plus de portée que les images statiques.",
      "Répondez à chaque commentaire dans l'heure suivant la publication pour booster l'algorithme et montrer que vous êtes actif."
    ],
    faqItems: [
      {
        question: "Combien de temps consacrer aux réseaux sociaux ?",
        answer: "Comptez 5 à 10 heures par semaine pour une présence professionnelle sur 2-3 plateformes. Un community manager peut gérer cela pour vous à partir de 300€/mois."
      },
      {
        question: "Faut-il payer pour être visible sur les réseaux sociaux ?",
        answer: "La portée organique a diminué, mais un contenu de qualité reste visible. Un budget publicitaire de 100-300€/mois permet de booster vos meilleurs contenus et d'accélérer votre croissance."
      },
      {
        question: "Quels résultats attendre des réseaux sociaux ?",
        answer: "Les réseaux sociaux développent la notoriété, la confiance et génèrent du trafic. Les résultats concrets (leads, ventes) apparaissent après 3-6 mois de présence régulière et stratégique."
      }
    ],
    relatedService: "marketing-digital",
    relatedDevis: "community-management"
  },
  {
    slug: "site-web-qui-convertit",
    title: "Créer un Site Web qui Convertit",
    description: "Les techniques CRO pour transformer votre site en machine à leads. Psychologie, design, copywriting et optimisation pour maximiser vos conversions.",
    steps: [
      {
        title: "Comprendre la psychologie de conversion",
        content: "La conversion repose sur des principes psychologiques éprouvés. Le principe de réciprocité : offrez de la valeur gratuite (guide, consultation, outil) avant de demander quelque chose en retour. La preuve sociale : les témoignages, avis clients et chiffres rassurent les visiteurs indécis. L'urgence et la rareté : les offres limitées dans le temps ou en quantité poussent à l'action. L'autorité : les logos de clients connus, certifications et expertises renforcent la crédibilité. La cohérence : un visiteur qui a fait un petit premier pas (clic, scroll) est plus enclin à faire le suivant. Comprenez le parcours émotionnel de votre visiteur : il arrive avec un problème, découvre votre solution, évalue votre crédibilité, puis passe à l'action."
      },
      {
        title: "Optimiser votre proposition de valeur",
        content: "Votre proposition de valeur doit être immédiatement claire dès l'arrivée sur votre site. En 5 secondes, un visiteur doit comprendre ce que vous faites, pour qui et pourquoi vous êtes différent. Formulez-la en une phrase simple : « Nous aidons [cible] à [résultat] grâce à [méthode unique] ». Placez-la en gros dans votre hero section avec un sous-titre qui développe les bénéfices. Évitez le jargon technique et les phrases creuses comme « solution innovante » ou « approche unique ». Utilisez le langage de vos clients : les mots qu'ils utilisent pour décrire leur problème. Testez plusieurs versions de votre proposition de valeur avec des tests A/B pour identifier celle qui résonne le mieux avec votre audience."
      },
      {
        title: "Structurer le parcours de conversion",
        content: "Chaque page de votre site doit guider le visiteur vers une action précise. Définissez un parcours de conversion clair : page d'atterrissage, page de détail, page de conversion. Réduisez les frictions à chaque étape : moins de champs dans les formulaires, moins de clics pour atteindre l'objectif, moins de distractions visuelles. Placez votre CTA principal au-dessus de la ligne de flottaison et répétez-le après chaque section convaincante. Utilisez des micro-conversions pour engager progressivement : télécharger un guide avant de demander un devis. Créez des pages de destination spécifiques pour chaque source de trafic : une page pour Google Ads, une autre pour les réseaux sociaux. Supprimez les liens et éléments de navigation qui éloignent du parcours de conversion."
      },
      {
        title: "Rédiger un copywriting orienté action",
        content: "Le copywriting est l'art de vendre avec les mots. Commencez chaque page par le problème de votre client, pas par votre solution. Utilisez la structure PAS : Problème (identifiez la douleur), Agitation (amplifiez les conséquences), Solution (présentez votre offre). Rédigez des titres qui communiquent un bénéfice concret, pas une fonctionnalité. « Doublez vos ventes en ligne » plutôt que « Solution e-commerce avancée ». Utilisez des bullet points pour les listes de bénéfices : ils sont plus lisibles et plus convaincants. Ajoutez des preuves à chaque affirmation : chiffres, témoignages, études de cas. Vos CTA doivent être spécifiques et orientés bénéfice : « Recevez votre devis gratuit » plutôt que « Soumettre ». Créez un sentiment d'urgence naturel sans être agressif."
      },
      {
        title: "Optimiser le design pour la conversion",
        content: "Le design influence directement le taux de conversion. Utilisez une hiérarchie visuelle claire : les éléments importants sont les plus grands et les plus visibles. Votre bouton CTA doit avoir une couleur qui contraste fortement avec le reste de la page. Utilisez des flèches, regards et lignes directrices pour guider l'oeil vers le CTA. Les espaces blancs améliorent la lisibilité et réduisent la surcharge cognitive. Les couleurs chaudes (orange, rouge) créent l'urgence, les couleurs froides (bleu, vert) créent la confiance. Utilisez des photos de vraies personnes plutôt que des illustrations génériques pour humaniser votre site. Assurez-vous que la taille de police est suffisante : minimum 16px pour le texte courant. Sur mobile, les boutons doivent mesurer au minimum 44x44 pixels pour être facilement cliquables."
      },
      {
        title: "Mesurer et améliorer en continu",
        content: "L'optimisation des conversions est un processus itératif sans fin. Installez Google Analytics 4 avec des objectifs de conversion configurés. Utilisez des heatmaps (Hotjar, Microsoft Clarity) pour comprendre le comportement réel de vos visiteurs. Identifiez les pages avec un taux de rebond élevé et un faible taux de conversion : ce sont vos priorités d'optimisation. Lancez des tests A/B sur un seul élément à la fois : titre, CTA, couleur, image, formulaire. Attendez d'avoir un volume statistiquement significatif avant de conclure (minimum 100 conversions par variante). Documentez chaque test et ses résultats pour constituer une base de connaissances. Optimisez en priorité les pages qui reçoivent le plus de trafic pour un impact maximum. Visez une amélioration de 10-20% par trimestre."
      },
      {
        title: "Exploiter le remarketing et l'email",
        content: "97% des visiteurs ne convertissent pas lors de leur première visite. Le remarketing permet de les relancer avec des publicités ciblées sur Google et les réseaux sociaux. Configurez le pixel Meta et le tag Google Ads pour créer des audiences de remarketing. Segmentez vos audiences : visiteurs de la page prix, abandonneurs de formulaire, lecteurs de blog. Proposez un lead magnet (ebook, checklist, consultation gratuite) en échange de l'email pour constituer votre liste. Envoyez une séquence d'emails automatisée qui éduque, rassure et pousse à l'action. Personnalisez vos emails en fonction du comportement du visiteur sur votre site. Le remarketing combiné à l'email marketing peut multiplier votre taux de conversion global par 2 à 3."
      }
    ],
    tips: [
      "Simplifiez vos formulaires au maximum : chaque champ supplémentaire réduit le taux de complétion de 10%.",
      "Ajoutez des témoignages clients à proximité de vos formulaires de contact — ils rassurent au moment critique de la décision.",
      "Testez un seul élément à la fois dans vos tests A/B pour identifier clairement ce qui améliore les conversions."
    ],
    faqItems: [
      {
        question: "Qu'est-ce qu'un bon taux de conversion pour un site web ?",
        answer: "Le taux de conversion moyen est de 2-3%. Un site bien optimisé atteint 5-10%. Nos sites ConvertiLab visent un taux minimum de 5% grâce à notre méthodologie CRO."
      },
      {
        question: "Combien coûte l'optimisation des conversions ?",
        answer: "L'optimisation CRO est incluse dans notre processus de création. Pour un site existant, un audit CRO avec recommandations démarre à 500€."
      },
      {
        question: "Quels outils utiliser pour mesurer les conversions ?",
        answer: "Google Analytics 4 pour le suivi quantitatif, Hotjar ou Microsoft Clarity pour les heatmaps qualitatives, et Google Optimize ou VWO pour les tests A/B."
      }
    ],
    relatedService: "sites-web",
    relatedDevis: "site-vitrine"
  },
  {
    slug: "devis-site-web",
    title: "Obtenir un Devis Site Web Juste",
    description: "Comment obtenir un devis site web réaliste et comparer les offres. Comprendre les tarifs, les postes de coûts et éviter les pièges des devis trop bas.",
    steps: [
      {
        title: "Préparer votre demande de devis",
        content: "Un bon devis commence par une bonne demande. Préparez un brief clair qui présente votre entreprise, votre secteur d'activité et vos objectifs business. Décrivez le type de site souhaité : vitrine, e-commerce, application web. Listez les fonctionnalités essentielles : nombre de pages, formulaire de contact, blog, espace client, e-commerce. Précisez si vous avez déjà un site à refondre ou s'il s'agit d'une création. Indiquez votre budget approximatif : cela permet aux prestataires d'adapter leur proposition. Partagez des exemples de sites qui vous plaisent pour illustrer vos attentes visuelles. Précisez votre calendrier : date de lancement souhaitée, contraintes éventuelles. Plus votre brief est détaillé, plus le devis sera précis et comparable."
      },
      {
        title: "Comprendre les postes de coûts",
        content: "Un devis de site web se compose de plusieurs postes. Le design comprend la maquette graphique, l'UX et les déclinaisons responsive. Le développement couvre l'intégration du design, les fonctionnalités et les tests. Le contenu inclut la rédaction des textes, l'optimisation SEO et la sélection des visuels. L'hébergement et le nom de domaine sont des coûts récurrents annuels. La maintenance comprend les mises à jour de sécurité, les sauvegardes et le support technique. Les fonctionnalités spécifiques comme un e-commerce, une réservation en ligne ou un espace membre ajoutent des coûts supplémentaires. Demandez un devis détaillé par poste pour comprendre où va votre investissement et identifier les éventuels extras non inclus."
      },
      {
        title: "Comparer les devis intelligemment",
        content: "Ne comparez pas uniquement les prix finaux. Vérifiez ce qui est inclus dans chaque devis : nombre de pages, responsive, SEO de base, formulaires, formation à la gestion du contenu. Comparez les technologies utilisées : un site WordPress à 500€ et un site Next.js à 500€ n'offrent pas les mêmes performances. Évaluez la qualité du portfolio de chaque prestataire. Vérifiez les conditions de propriété : êtes-vous propriétaire du code source et du design ? Comparez les coûts récurrents : certains prestataires proposent un prix initial bas mais des frais mensuels élevés. Demandez ce qui se passe en cas de dépassement du budget prévu. Attention aux devis qui ne mentionnent pas certains postes : ils les factureront en supplément."
      },
      {
        title: "Identifier les signaux d'alerte",
        content: "Certains signaux doivent vous alerter lors de la comparaison de devis. Un prix anormalement bas (site vitrine à 200€) implique généralement un template non personnalisé, pas de SEO et un support inexistant. Un devis sans détail des postes cache souvent des surprises. L'absence de mentions sur la propriété du code signifie que le prestataire pourrait la conserver. Pas de délai de livraison précis est un signe de mauvaise organisation. Un acompte supérieur à 50% du total est inhabituel et risqué. L'absence de portfolio vérifiable doit susciter la méfiance. Méfiez-vous aussi des promesses irréalistes : « premier sur Google en 1 mois » ou « 10 000 visiteurs garantis ». Un bon prestataire est transparent sur ses limites et ses délais."
      },
      {
        title: "Négocier et valider le devis",
        content: "La négociation est normale et saine dans une relation commerciale. Plutôt que de négocier le prix à la baisse, négociez la valeur à la hausse : demandez des pages supplémentaires, plus de révisions ou un mois de maintenance offert. Si le budget est serré, proposez un paiement échelonné ou une réduction du périmètre initial avec des options d'évolution ultérieure. Demandez un contrat clair qui précise les livrables, le calendrier, les conditions de paiement et les garanties. Vérifiez les clauses de résiliation et de propriété intellectuelle. Assurez-vous que le devis inclut une période de garantie post-livraison pour les corrections de bugs. Validez par écrit chaque modification du périmètre initial pour éviter les malentendus."
      },
      {
        title: "Maximiser le retour sur investissement",
        content: "Votre site web est un investissement, pas une dépense. Pour maximiser le ROI, choisissez un prestataire qui comprend vos objectifs business, pas uniquement vos besoins techniques. Investissez dans le SEO dès la création pour générer du trafic organique gratuit à long terme. Prévoyez un budget pour la promotion de votre site : publicité Google Ads, réseaux sociaux. Mesurez les résultats avec Google Analytics : trafic, leads, conversions, chiffre d'affaires généré. Un site qui génère 5 leads par mois à 200€ de valeur moyenne se rentabilise en quelques semaines. Planifiez des évolutions régulières : nouvelles pages, nouvelles fonctionnalités, amélioration continue des conversions. Le coût d'un bon site web est toujours inférieur au coût d'un mauvais site refait dans 6 mois."
      }
    ],
    tips: [
      "Demandez systématiquement un devis détaillé par poste, pas un prix global sans explication.",
      "Vérifiez toujours la clause de propriété du code source et du design dans le contrat.",
      "Un bon site web se rentabilise : calculez le coût par lead ou par vente pour évaluer votre ROI."
    ],
    faqItems: [
      {
        question: "Comment obtenir un devis rapide et fiable ?",
        answer: "Chez ConvertiLab, nous envoyons un devis détaillé sous 24h après réception de votre brief. Vous pouvez aussi utiliser notre estimateur en ligne pour une estimation instantanée."
      },
      {
        question: "Un devis engage-t-il à quelque chose ?",
        answer: "Non, nos devis sont gratuits et sans engagement. Ils sont valables 30 jours et vous êtes libre de comparer avec d'autres prestataires."
      },
      {
        question: "Peut-on modifier le devis en cours de projet ?",
        answer: "Oui, les ajustements sont possibles. Nous établissons un avenant au devis initial qui précise les modifications, leur coût et leur impact sur le calendrier."
      }
    ],
    relatedService: "sites-web",
    relatedDevis: "site-vitrine"
  }
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return guides.map((g) => g.slug);
}
