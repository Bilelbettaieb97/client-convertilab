import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import FaqPageClient from "@/components/pages/FaqPageClient";
import type { FaqCategory } from "@/components/pages/FaqPageClient";

export const metadata: Metadata = {
  title: "FAQ — Questions fréquentes sur la création de site web",
  description:
    "Toutes les réponses sur la création de site web, les tarifs, les délais, le SEO et nos services. ConvertiLab répond à vos 35 questions les plus fréquentes.",
  alternates: { canonical: `${SITE.url}/faq` },
  openGraph: {
    title: "FAQ ConvertiLab — Vos questions sur la création de site web",
    description:
      "Prix, délais, SEO, propriété du site, support après livraison… Toutes les réponses à vos questions sur nos services de création de site web.",
    url: `${SITE.url}/faq`,
    type: "website",
  },
};

const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "tarifs",
    label: "Tarifs & Budget",
    emoji: "💰",
    questions: [
      {
        question: "Combien coûte la création d'un site web ?",
        answer:
          "Nos tarifs démarrent à 500€ pour un site vitrine ou une landing page. Un site e-commerce démarre à 800€. Le prix dépend du nombre de pages, des fonctionnalités (réservation en ligne, boutique, espace client) et du niveau de personnalisation du design. Nous fournissons un devis détaillé et fixe sous 24h — aucune surprise en cours de projet.",
      },
      {
        question: "Peut-on payer en plusieurs fois ?",
        answer:
          "Oui. Nous proposons un paiement en 3 fois sans frais pour tous nos forfaits, et une option abonnement mensuel à partir de 39€/mois (sans engagement minimum). Dans tous les cas, le paiement se fait en deux parties : 50% à la commande, 50% à la livraison.",
      },
      {
        question: "Y a-t-il des frais cachés après la livraison ?",
        answer:
          "Non. Le devis signé est le prix final. Après la livraison, les seuls coûts récurrents sont le nom de domaine (environ 10€/an) et l'hébergement (à partir de 5€/mois), que vous gérez directement ou via nos forfaits de maintenance. Aucun abonnement obligatoire à notre plateforme.",
      },
      {
        question: "Proposez-vous des offres pour les budgets limités ?",
        answer:
          "Oui. Notre offre mensuelle à 39€/mois permet de démarrer sans apport initial. Elle inclut la création du site, l'hébergement et le support. Nous proposons également des devis adaptés pour les créateurs d'entreprise et les micro-entrepreneurs — n'hésitez pas à nous contacter pour en discuter.",
      },
      {
        question: "La refonte d'un site existant coûte-t-elle moins cher ?",
        answer:
          "Pas nécessairement. Une refonte complète avec nouveau design et nouveau code revient à un prix similaire à la création d'un nouveau site (à partir de 400€). Si vous souhaitez uniquement mettre à jour le contenu ou le design d'un site existant, nous proposons des interventions ponctuelles à partir de 150€.",
      },
    ],
  },
  {
    id: "delais",
    label: "Délais & Process",
    emoji: "⏱️",
    questions: [
      {
        question: "En combien de temps mon site sera-t-il livré ?",
        answer:
          "Un site vitrine est livré en 7 jours ouvrés, une landing page en 5 jours, un site e-commerce en 10 à 14 jours. Ces délais incluent le design (validé par vous avant développement), le développement, l'intégration du contenu et la mise en ligne. Nous respectons toujours les délais annoncés — c'est notre garantie contractuelle.",
      },
      {
        question: "Comment se déroule le projet, étape par étape ?",
        answer:
          "1) Appel de découverte (30 min) pour cadrer le projet. 2) Nous vous envoyons un brief et un devis sous 24h. 3) Après validation et premier paiement, nous créons une maquette visuelle. 4) Vous validez le design avant développement. 5) Développement et intégration du contenu. 6) Vous testez le site sur un lien de preview. 7) Corrections si nécessaires. 8) Mise en ligne officielle et formation.",
      },
      {
        question: "Combien de révisions sont incluses ?",
        answer:
          "Deux tours de révisions sont inclus avant livraison : un sur la maquette design et un sur le site développé. Les révisions couvrent tout ce qui ne correspond pas au brief validé ensemble. Les modifications importantes qui sortent du périmètre initial (nouvelles pages, nouvelles fonctionnalités) sont devisées séparément.",
      },
      {
        question: "Que se passe-t-il si je ne fournis pas mes contenus à temps ?",
        answer:
          "Le délai de livraison démarre à partir du moment où nous recevons tous les éléments nécessaires : textes, photos, logo, informations sur l'entreprise. Si vous avez du mal à rédiger vos textes, nous proposons un service de rédaction SEO en option. Nous fournissons également un guide clair dès le départ pour vous faciliter la tâche.",
      },
    ],
  },
  {
    id: "technique",
    label: "Technique & Propriété",
    emoji: "🔧",
    questions: [
      {
        question: "Est-ce que je suis propriétaire de mon site ?",
        answer:
          "Oui, à 100%. Le code source, le nom de domaine et les fichiers du site vous appartiennent dès la livraison finale. Nous n'utilisons pas de plateforme propriétaire qui vous rendrait dépendant de nos services. Si vous souhaitez changer d'hébergeur ou de prestataire dans 3 ans, vous pouvez le faire librement sans frais de sortie.",
      },
      {
        question: "Quelle technologie utilisez-vous pour créer les sites ?",
        answer:
          "Nous développons avec Next.js (React) pour les sites vitrines et landing pages — c'est la même technologie utilisée par Nike, TikTok et Netflix. Cette stack moderne garantit des scores PageSpeed de 90+ sur mobile, un SEO excellent et une sécurité robuste. Pour les e-commerces, nous intégrons Stripe pour les paiements et Supabase pour la base de données.",
      },
      {
        question: "Mon site sera-t-il rapide sur mobile ?",
        answer:
          "Oui. Tous nos sites obtiennent des scores de 90 à 98 sur 100 sur Google PageSpeed Insights (mobile), grâce à l'optimisation automatique des images en WebP, le rendu côté serveur Next.js et le déploiement sur Vercel avec CDN mondial. Un site rapide, c'est moins de visiteurs perdus et un meilleur classement Google.",
      },
      {
        question: "Est-ce que je peux modifier le site moi-même après livraison ?",
        answer:
          "Oui. Chaque livraison inclut une formation de 30 minutes en visio pour vous montrer comment modifier textes, images et sections courantes. Pour des modifications plus complexes (nouvelles pages, nouvelles fonctionnalités), notre équipe reste disponible à des tarifs horaires clairs.",
      },
      {
        question: "Proposez-vous la maintenance et les mises à jour ?",
        answer:
          "Oui. Nous proposons des forfaits de maintenance mensuelle (à partir de 49€/mois) qui incluent les mises à jour de sécurité, les sauvegardes hebdomadaires, la surveillance de disponibilité et jusqu'à 1h de modifications par mois. Sans forfait, un support technique de 30 jours est inclus après chaque livraison.",
      },
      {
        question: "Mon site sera-t-il sécurisé (HTTPS) ?",
        answer:
          "Oui. Tous nos sites sont livrés avec un certificat SSL (cadenas HTTPS) inclus. Votre connexion et celle de vos visiteurs est chiffrée. Google pénalise les sites sans HTTPS dans ses résultats — c'est un prérequis que nous intégrons systématiquement.",
      },
    ],
  },
  {
    id: "seo",
    label: "SEO & Visibilité Google",
    emoji: "🔍",
    questions: [
      {
        question: "Mon site sera-t-il optimisé pour Google (SEO) ?",
        answer:
          "Oui. Chaque site inclut une optimisation SEO de base : balises title et meta description optimisées par page, H1 ciblé sur vos requêtes, images compressées et nommées correctement, sitemap XML, fichier robots.txt, schémas JSON-LD (LocalBusiness, BreadcrumbList), et fiche Google Business Profile optimisée. Pour un accompagnement SEO avancé (création de contenu, netlinking, suivi mensuel des positions), nous proposons des forfaits dédiés.",
      },
      {
        question: "En combien de temps apparaîtrai-je sur Google ?",
        answer:
          "Les premiers résultats SEO apparaissent en général en 4 à 12 semaines pour des requêtes locales peu compétitives. Google doit d'abord indexer votre site (1 à 4 semaines), puis évaluer la pertinence de vos pages. Nous soumettons votre sitemap à Google Search Console dès la mise en ligne pour accélérer l'indexation.",
      },
      {
        question: "Faites-vous aussi du référencement payant (Google Ads) ?",
        answer:
          "Oui. Nous gérons des campagnes Google Ads et Meta Ads (Facebook/Instagram) pour accélérer l'acquisition de clients en parallèle du SEO naturel. Le SEO prend du temps mais dure — la pub donne des résultats immédiats mais s'arrête dès que vous coupez le budget. Les deux se complètent idéalement.",
      },
      {
        question: "Créez-vous des pages optimisées pour ma ville ?",
        answer:
          "Oui, c'est une de nos spécialités. Nous créons des pages dédiées pour chaque ville et service que vous ciblez. Par exemple : /plombier-versailles, /depannage-plomberie-versailles, etc. Ces pages ciblent des requêtes locales précises avec peu de concurrence et convertissent très bien.",
      },
      {
        question: "Puis-je suivre moi-même mes statistiques Google ?",
        answer:
          "Oui. Nous installons et configurons Google Analytics et Google Search Console sur votre site lors de la livraison. Ces outils gratuits vous permettent de voir combien de visiteurs viennent sur votre site, d'où ils viennent, sur quelles pages ils restent le plus longtemps et quelles requêtes Google vous amènent du trafic.",
      },
    ],
  },
  {
    id: "garanties",
    label: "Garanties & Confiance",
    emoji: "🛡️",
    questions: [
      {
        question: "Que comprend votre garantie satisfait ou remboursé ?",
        answer:
          "Si le site livré ne correspond pas au brief validé ensemble, nous le modifions gratuitement jusqu'à ce qu'il corresponde. Si après 2 tours de révisions vous n'êtes toujours pas satisfait, nous vous remboursons intégralement le montant versé. Cette garantie s'applique uniquement si les modifications demandées respectent le brief initial.",
      },
      {
        question: "Avez-vous des avis clients vérifiés ?",
        answer: `Oui. Nous avons ${SITE.reviews.count} avis sur Trustpilot avec une note de ${SITE.reviews.rating}★. Chaque avis est vérifié par Trustpilot et provient d'un client ayant effectivement commandé chez nous. Vous pouvez les consulter directement sur notre page Trustpilot.`,
      },
      {
        question: "Avez-vous des exemples de sites réalisés ?",
        answer:
          "Oui. Notre portfolio présente plus de 20 réalisations dans différents secteurs : restaurant, coiffeur, artisan, coach, consultant, immobilier. Chaque réalisation inclut le secteur d'activité, les fonctionnalités intégrées et les résultats obtenus par le client.",
      },
      {
        question: "Qui crée le site — une IA ou un humain ?",
        answer:
          "Un humain. Bilel Bettaieb (fondateur de ConvertiLab) et notre équipe créent chaque site manuellement. Nous utilisons des outils de productivité modernes pour travailler vite, mais chaque design est créé spécifiquement pour votre activité, validé avec vous, et développé avec soin. Pas de template générique copié-collé.",
      },
    ],
  },
  {
    id: "services",
    label: "Services & Fonctionnalités",
    emoji: "⚙️",
    questions: [
      {
        question: "Créez-vous des sites e-commerce ?",
        answer:
          "Oui. Nos sites e-commerce incluent un catalogue produits, un panier, un paiement sécurisé par carte bancaire via Stripe, une gestion des stocks, un espace de commande pour les clients et un espace admin pour vous. Ils démarrent à 800€ et sont livrés en 10 à 14 jours.",
      },
      {
        question: "Peut-on intégrer un système de réservation en ligne ?",
        answer:
          "Oui. Nous intégrons des modules de réservation en ligne adaptés à votre secteur : formulaire de rendez-vous avec agenda synchronisé, intégration Calendly, intégration Planity pour les salons de beauté, ou module de réservation de table pour les restaurants. Ces fonctionnalités sont disponibles en option sur tous nos forfaits.",
      },
      {
        question: "Faites-vous aussi des logos et identités visuelles ?",
        answer:
          "Oui. Nous proposons un service de création d'identité visuelle : logo, palette de couleurs, typographies et charte graphique. Ce service est souvent commandé en même temps que le site web pour assurer la cohérence visuelle. Contactez-nous pour un devis dédié.",
      },
      {
        question: "Créez-vous aussi des landing pages pour la publicité ?",
        answer:
          "Oui, c'est même une de nos spécialités. Une landing page est une page unique, sans menu ni distraction, conçue pour convertir un visiteur en prospect ou en client. Elle est particulièrement efficace pour des campagnes Google Ads ou Meta Ads. Nos landing pages démarrent à 500€ et sont livrées en 5 jours.",
      },
      {
        question: "Proposez-vous un blog ou un espace contenu ?",
        answer:
          "Oui. Nous créons des blogs intégrés à votre site avec un espace d'administration pour publier vos articles facilement. Le blog est optimisé pour le SEO dès le départ : structure des articles, balises, sitemap automatique. C'est un levier puissant pour attirer du trafic Google sur le long terme.",
      },
    ],
  },
];

export default function FaqPage() {
  const allQuestions = FAQ_CATEGORIES.flatMap((c) => c.questions);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allQuestions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE.url}/faq` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FaqPageClient categories={FAQ_CATEGORIES} />
    </>
  );
}
