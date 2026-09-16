import { PRICING } from "@/lib/constants";
import type { FaqItem } from "@/lib/faq-schema";

/** « 1490 » devient « 1 490 € » (typographie française, comme sur les pages pôles). */
const euros = (montant: number) => `${montant.toLocaleString("fr-FR")} €`;
/** « ou 45€/mois sur 12 mois » devient « 45 €/mois sur 12 mois » dans une phrase. */
const mensuel = (m: string) => m.replace(/^ou /, "").replace(/(\d)€/g, "$1 €");

/**
 * FAQ de la page d'accueil, mise à jour le 16/09/2026 pour les quatre pôles
 * (site, publicité, SEO et visibilité IA, CRM et relances automatiques). Une seule liste
 * alimente le HTML (PoleFAQ, rendu côté serveur) et le JSON-LD FAQPage
 * (faqPageSchema). Prix depuis PRICING, aucun chiffre de résultat, aucune
 * garantie, aucune fausse rareté.
 */
export const ACCUEIL_FAQ: FaqItem[] = [
  {
    q: "Que fait exactement ConvertiLab ?",
    a: "Quatre choses, pensées ensemble : votre site internet, votre publicité en ligne (Google, Meta, TikTok, Pinterest, LinkedIn), votre référencement sur Google et dans les IA, et votre CRM avec des relances automatiques, l'IA prenant le travail répétitif. Vous pouvez venir pour une seule de ces quatre briques.",
  },
  {
    q: "Combien coûte un site internet ?",
    a: `Landing page ${euros(PRICING.landing.from)}, site vitrine ${euros(PRICING.vitrine.from)}, refonte ${euros(PRICING.refonte.from)}, e-commerce à partir de ${euros(PRICING.ecommerce.from)}, application sur devis. Le prix est fixe et écrit dans le devis avant de commencer : pas de ligne surprise à la fin.`,
  },
  {
    q: "Puis-je payer en plusieurs fois ?",
    a: `Oui : site vitrine ${mensuel(PRICING.vitrine.monthly)}, landing page ${mensuel(PRICING.landing.monthly)}, refonte ${mensuel(PRICING.refonte.monthly)}, e-commerce ${mensuel(PRICING.ecommerce.monthly)}. C'est un paiement étalé, pas un abonnement : une fois la dernière mensualité réglée, vous ne devez plus rien.`,
  },
  {
    q: "En combien de temps mon site est-il en ligne ?",
    a: "Une maquette gratuite sous 48 h, puis le site livré en 2 semaines après validation de la maquette. Une landing page prend 5 à 7 jours. Pour une boutique ou une application, le délai est écrit dans le devis.",
  },
  {
    q: "Qui fait le travail sur mon projet ?",
    a: "Le fondateur de l'agence, à Rueil-Malmaison. La personne qui vous répond au premier appel est celle qui réalise votre site, vos campagnes ou votre CRM, du devis à la mise en ligne, puis pendant le suivi.",
  },
  {
    q: "Quel budget prévoir pour la publicité en ligne ?",
    a: "Deux lignes : nos frais de gestion, sur devis, et le budget média versé directement à la plateforme, dès 500 € par mois et par plateforme. Le compte publicitaire est créé à votre nom : vous gardez l'historique et les données si nous nous arrêtons. Sans engagement de durée, trois mois conseillés pour lire des résultats.",
  },
  {
    q: "Sur quelles plateformes faites-vous de la publicité ?",
    a: "Google Ads pour les gens qui cherchent déjà votre métier, Meta Ads (Facebook et Instagram) pour créer la demande, TikTok Ads pour les moins de 35 ans, Pinterest Ads pour la décoration, le mariage et la mode, LinkedIn Ads pour les clients professionnels. Nous vous disons dès le diagnostic laquelle a du sens pour vous, et lesquelles n'en ont pas.",
  },
  {
    q: "Quand le SEO donne-t-il des résultats ?",
    a: "Comptez trois à six mois pour le référencement naturel, souvent moins en local avec une fiche Google bien tenue et des avis réguliers. Forfait SEO dès 500 € par mois, 6 mois minimum, puis mois par mois. La visibilité dans les IA (ChatGPT, Perplexity, Google AI Overviews) est incluse dans la méthode, sans promesse de position.",
  },
  {
    q: "Que comprend le pôle CRM et relances automatiques ?",
    a: "La mise en place de votre CRM, sur l'outil de votre choix (HubSpot, Salesforce, Pipedrive, Zoho CRM, Brevo, Sellsy, Axonaut ou monday CRM, ou celui que vous utilisez déjà), le branchement de vos formulaires et de vos campagnes dessus, puis des relances automatiques par email : devis sans réponse relancé à J+3, rappel de rendez-vous la veille. L'IA, Claude d'Anthropic, prend ensuite le travail répétitif : réponse aux devis reçus la nuit, avis Google, rédaction. Un diagnostic d'une journée, un prix fixe communiqué sous 24 h, vos données restent chez vous.",
  },
  {
    q: "Vous êtes à Paris ou à Rueil-Malmaison ?",
    a: "À Rueil-Malmaison (92), dans les Hauts-de-Seine, près de La Défense. Nous intervenons à Paris et dans toute l'Île-de-France, sur place ou en visio, et nous travaillons à distance avec des clients partout en France : un photographe à Caen, une association à Wissembourg.",
  },
  {
    q: "Vous occupez-vous des textes et des visuels ?",
    a: "Oui. Nous rédigeons les textes, optimisés pour Google, et nous choisissons les visuels avec vous, à partir de vos photos quand vous en avez. Vous relisez et validez chaque page avant la mise en ligne.",
  },
  {
    q: "Le site m'appartient-il une fois livré ?",
    a: "Oui, entièrement. Le nom de domaine est à votre nom, vous avez tous les accès, et vous restez libre de le faire évoluer avec qui vous voulez, paiement étalé compris. Après la mise en ligne, nous restons joignables pour les corrections et les évolutions.",
  },
];
