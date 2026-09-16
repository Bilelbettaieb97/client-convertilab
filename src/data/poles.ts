import { Globe, Megaphone, Search, Users, type LucideIcon } from "lucide-react";
import { PRICING, SITE } from "@/lib/constants";

/**
 * Les quatre pôles de ConvertiLab, à égalité, jamais plus.
 * Source unique pour l'accueil, les pages pôles, le menu et le pied de page.
 *
 * Règles d'écriture : vouvoiement, « nous », pas de tiret long. Le seul
 * chiffre de clients autorisé, « 150+ clients accompagnés », vit dans
 * CHIFFRES_COMMUNS ci-dessous. Les prix des sites viennent de PRICING
 * (src/lib/constants.ts).
 */

export type PoleSlug = "sites-web" | "publicite" | "seo" | "crm";

export interface PoleLien {
  href: string;
  /** Ancre descriptive (jamais « en savoir plus »). */
  label: string;
  /** Une phrase concrète sur ce que couvre la sous-page (hub /services). */
  description?: string;
  /** Prix d'entrée de la sous-page, tel qu'affiché (« dès 890 € »), s'il est fixe. */
  prix?: string;
}

/** Cas d'usage concret d'un pôle sans grille de prix (pôle CRM). */
export interface CasUsage {
  label: string;
  description: string;
}

export interface Pole {
  slug: PoleSlug;
  numero: "01" | "02" | "03" | "04";
  /** Nom court, pour le menu et les cartes. */
  nomCourt: string;
  /** Description d'une ligne pour le menu de navigation. */
  descriptionCourte: string;
  /** Titre bénéfice, pour les cartes de l'accueil. */
  titre: string;
  /** Deux lignes de description, courtes et concrètes. */
  lignes: [string, string];
  /** Prix d'entrée affiché tel quel, ou « sur devis ». */
  prix: string;
  /** Précision sur le prix (paiement étalé, budget média, durée). */
  prixDetail?: string;
  /** Page du pôle. */
  href: string;
  /** Ancre descriptive du lien vers la page du pôle. */
  ancre: string;
  /** Sous-pages existantes du pôle. */
  sousPages: PoleLien[];
  /** Outils gratuits liés au pôle (ou le diagnostic pour le CRM). */
  outils: PoleLien[];
  /** Cas d'usage montrés en plus des sous-pages (pôle CRM). */
  casUsage?: CasUsage[];
  /** Page ville à relier depuis la page du pôle. */
  pageVille: PoleLien;
  icon: LucideIcon;
}

export const POLES: readonly Pole[] = [
  {
    slug: "sites-web",
    numero: "01",
    nomCourt: "Création de site internet",
    descriptionCourte: "Vitrine, e-commerce, landing page, refonte, application",
    titre: "Un site qui apporte des demandes, pas juste une vitrine",
    lignes: [
      "Site vitrine, e-commerce, landing page, refonte ou application, livré en 2 semaines.",
      "Prise de rendez-vous, devis et relances automatiques intégrables dès le départ.",
    ],
    // Deux prix d'entrée distincts : 490 € est celui de la landing page, pas d'un site vitrine.
    prix: `landing page ${PRICING.landing.from} €, site vitrine ${PRICING.vitrine.from} €`,
    prixDetail: "paiement étalé, pas d'abonnement",
    href: "/services/sites-web",
    ancre: "Création de site internet à Rueil-Malmaison et Paris",
    sousPages: [
      {
        href: "/services/sites-web/site-vitrine",
        label: "Site vitrine professionnel",
        description: "Jusqu'à cinq pages, design sur mesure, pages optimisées pour le référencement local, livré en 2 semaines.",
        prix: `${PRICING.vitrine.from} €`,
      },
      {
        href: "/services/sites-web/site-ecommerce",
        label: "Site e-commerce",
        description: "Catalogue configuré avec vos produits, paiement sécurisé, suivi des stocks et des commandes.",
        prix: `dès ${PRICING.ecommerce.from.toLocaleString("fr-FR")} €`,
      },
      {
        href: "/services/sites-web/landing-page",
        label: "Landing page orientée conversion",
        description: "Une page, un objectif : la demande de contact. Conçue pour Google Ads et Meta Ads.",
        prix: `${PRICING.landing.from} €`,
      },
      {
        href: "/services/sites-web/refonte-site",
        label: "Refonte de site internet",
        description: "Audit de l'existant, redirections posées et positions Google conservées, design et vitesse remis à niveau.",
        prix: `${PRICING.refonte.from} €`,
      },
      {
        href: "/services/sites-web/application-web",
        label: "Application web sur mesure",
        description: "Espace client, prise de rendez-vous, devis automatisés, connectée à vos outils existants.",
        prix: "sur devis",
      },
    ],
    outils: [
      { href: "/estimation-prix-site-web", label: "Estimer le prix de votre site en 2 minutes" },
      { href: "/design-score", label: "Tester le design de votre site actuel" },
    ],
    pageVille: { href: "/agence-web/rueil-malmaison", label: "Agence web à Rueil-Malmaison" },
    icon: Globe,
  },
  {
    slug: "publicite",
    numero: "02",
    nomCourt: "Publicité en ligne",
    descriptionCourte: "Google Ads, Meta Ads, TikTok, Pinterest et LinkedIn Ads",
    titre: "Des campagnes qui coûtent moins qu'elles ne rapportent",
    lignes: [
      "Google Ads, Meta Ads (Facebook, Instagram), TikTok, Pinterest et LinkedIn Ads.",
      "Nous testons nos méthodes sur nos propres campagnes avant de les appliquer aux vôtres.",
    ],
    prix: "sur devis",
    prixDetail: "budget média conseillé dès 500 €/mois par plateforme, frais de gestion en plus",
    href: "/services/sea",
    ancre: "Agence Google Ads, Meta Ads et Social Ads à Paris",
    // Ordre à conserver : les pages du pôle lisent [googleAds, metaAds] par destructuration.
    sousPages: [
      {
        href: "/services/sea/google-ads",
        label: "Agence Google Ads Paris",
        description: "Être vu au moment où l'on cherche votre métier : campagnes Search, mots clés triés, suivi des demandes reçues.",
      },
      {
        href: "/services/sea/meta-ads",
        label: "Agence Meta Ads (Facebook et Instagram)",
        description: "Créer la demande avec des vidéos et des formulaires, pour toucher des particuliers qui ne vous cherchaient pas encore.",
      },
      {
        href: "/services/sea/tiktok-ads",
        label: "Agence TikTok Ads Paris",
        description: "Toucher les moins de 35 ans avec des vidéos courtes, testées et remplacées vite.",
      },
      {
        href: "/services/sea/pinterest-ads",
        label: "Agence Pinterest Ads (épingles sponsorisées)",
        description: "Décoration, mariage, mode, maison : des épingles qui continuent d'apporter des visites après la campagne.",
      },
      {
        href: "/services/sea/linkedin-ads",
        label: "Agence LinkedIn Ads Paris (publicité B2B)",
        description: "Cibler des professionnels par poste, secteur et taille d'entreprise, pour des demandes qualifiées.",
      },
    ],
    outils: [{ href: "/estimateur-ads", label: "Estimer votre budget publicitaire" }],
    pageVille: { href: "/agence-web/paris", label: "Agence web à Paris" },
    icon: Megaphone,
  },
  {
    slug: "seo",
    numero: "03",
    nomCourt: "SEO et visibilité IA",
    descriptionCourte: "Référencement naturel, SEO local et visibilité dans les IA",
    titre: "Être trouvé sur Google, et cité par les IA",
    lignes: [
      "Référencement naturel, SEO local (fiche Google, avis clients) et visibilité dans ChatGPT, Perplexity et Google AI Overviews.",
      "Un forfait mensuel clair, un audit complet, et un outil gratuit pour mesurer votre point de départ.",
    ],
    prix: "à partir de 500 €/mois",
    prixDetail: "6 mois minimum, visibilité IA incluse dans la méthode",
    href: "/services/seo",
    ancre: "Agence SEO à Rueil-Malmaison et Paris : référencement, local, IA",
    // Ordre à conserver : les pages du pôle lisent [referencement, audit] par destructuration.
    sousPages: [
      {
        href: "/services/seo/referencement",
        label: "Référencement naturel et forfait SEO",
        description: "Contenus, technique et suivi des positions chaque mois, avec un rapport lisible.",
        prix: "dès 500 €/mois",
      },
      {
        href: "/services/seo/audit",
        label: "Audit SEO complet",
        description: "Ce qui freine votre site sur Google, classé par priorité, avec un plan d'action.",
      },
      {
        href: "/services/seo/seo-local",
        label: "Référencement local : fiche Google et avis clients",
        description: "Fiche Google tenue, avis réguliers, pages locales : être trouvé près de chez vous.",
      },
      {
        href: "/services/seo/visibilite-ia",
        label: "Visibilité IA : être cité par ChatGPT et Perplexity",
        description: "Contenus structurés pour être repris par ChatGPT, Perplexity et Google AI Overviews.",
      },
    ],
    outils: [{ href: "/seo-check", label: "Vérifier le SEO de votre site en 60 secondes" }],
    pageVille: { href: "/agence-web/la-defense-puteaux", label: "Agence web à La Défense et Puteaux" },
    icon: Search,
  },
  {
    slug: "crm",
    numero: "04",
    nomCourt: "CRM et relances automatiques",
    descriptionCourte: "Un CRM en place, chaque demande relancée, l'IA pour le répétitif",
    titre: "Chaque demande suivie, relancée et transformée en client",
    lignes: [
      "Mise en place de votre CRM, quel qu'il soit (HubSpot, Salesforce, Pipedrive, Zoho, Brevo, Sellsy, Axonaut, monday CRM ou celui que vous avez déjà), formulaires du site et campagnes reliés, relances automatiques par email.",
      "L'IA prend le travail répétitif : réponse aux devis reçus la nuit, avis Google, rendez-vous, rédaction.",
    ],
    prix: "sur devis",
    prixDetail: "mise en place à prix fixe, suivi mensuel facultatif",
    href: "/services/crm",
    ancre: "CRM et relances automatiques pour TPE et PME : HubSpot, Salesforce, Pipedrive",
    // Trois sous-pages CRM (décision Bilel du 16/09/2026), puis la page intégration IA existante, devenue sous-page.
    sousPages: [
      {
        href: "/services/crm/creation-crm",
        label: "Création de CRM : mise en place complète",
        description: "Choix de l'outil, pipeline de vente, champs utiles, import de vos contacts, formulaires et campagnes reliés, prise en main avec vous.",
      },
      {
        href: "/services/crm/optimisation-crm",
        label: "Optimisation du CRM : relances et automatisations",
        description: "Un CRM déjà en place mais sous-utilisé : étapes revues, relances automatiques, rappels de rendez-vous, tableau de bord lisible.",
      },
      {
        href: "/services/crm/nettoyage-crm",
        label: "Nettoyage du CRM : doublons, contacts morts, données à jour",
        description: "Doublons fusionnés, contacts inactifs archivés, champs harmonisés, règles écrites pour que le CRM reste propre.",
      },
      {
        href: "/services/integration-ia",
        label: "Intégration IA : automatiser avec Claude",
        description: "Réponse aux devis reçus la nuit, avis Google, rédaction, tri des emails : Claude branché sur vos outils, avec vos règles et votre ton.",
      },
    ],
    casUsage: [
      { label: "Mise en place du CRM", description: "Pipeline de vente, champs utiles, import de vos contacts, prise en main avec vous." },
      { label: "Relances automatiques", description: "Devis sans réponse relancé à J+3, séquence d'emails sur plusieurs semaines, rappel de rendez-vous la veille." },
      { label: "Site et campagnes reliés", description: "Chaque formulaire du site, chaque demande venue de Google ou Meta arrive dans le CRM avec sa source." },
    ],
    outils: [{ href: "/contact", label: "Demander un diagnostic CRM d'une journée" }],
    pageVille: { href: "/agence-web/paris", label: "Agence web à Paris" },
    icon: Users,
  },
];

export function getPole(slug: PoleSlug): Pole {
  const pole = POLES.find((p) => p.slug === slug);
  if (!pole) throw new Error(`Pôle inconnu : ${slug}`);
  return pole;
}

/** Une sous-page d'un pôle par son chemin (lien et ancre descriptive), sans dépendre de l'ordre du tableau. */
export function getSousPage(slug: PoleSlug, href: string): PoleLien {
  const lien = getPole(slug).sousPages.find((s) => s.href === href);
  if (!lien) throw new Error(`Sous-page inconnue pour le pôle ${slug} : ${href}`);
  return lien;
}

/** Les trois autres pôles, dans l'ordre 01 à 04, pour le maillage interne. */
export function autresPoles(slug: PoleSlug): Pole[] {
  return POLES.filter((p) => p.slug !== slug);
}

/** Surtitre de zone, identique sur l'accueil, /services et les quatre pages pôles. */
export const SURTITRE_ZONE = "Rueil-Malmaison · Paris · Île-de-France";

/** Libellé du bouton Calendly : jamais le prénom du fondateur. */
export const LABEL_CALENDLY = "Réserver 30 min avec le fondateur";

/**
 * Les deux chiffres communs à toutes les pages. Seul chiffre de clients
 * autorisé : « 150+ clients accompagnés ». Chaque page ajoute son troisième
 * chiffre propre (délai, budget, durée du diagnostic).
 */
export const CHIFFRES_COMMUNS: readonly { valeur: string; libelle: string }[] = [
  { valeur: "150+", libelle: "clients accompagnés" },
  { valeur: `${SITE.reviews.rating.replace(".", ",")}/5`, libelle: `sur ${SITE.reviews.count} avis` },
];

/** Étapes de travail communes aux quatre pôles (accueil, section « Comment nous travaillons »). */
export const ETAPES_COMMUNES: readonly { titre: string; texte: string }[] = [
  {
    titre: "Diagnostic gratuit",
    texte: "Trente minutes avec le fondateur pour comprendre votre activité, vos clients et ce qui bloque aujourd'hui.",
  },
  {
    titre: "Plan et devis clair",
    texte: "Un plan d'action écrit, un prix fixe et un délai, avant tout engagement.",
  },
  {
    titre: "Réalisation",
    texte: "Nous produisons, vous validez à chaque étape. Vous parlez toujours à la même personne.",
  },
  {
    titre: "Suivi et mesure",
    texte: "Demandes reçues, appels, ventes : nous mesurons ce qui compte et nous ajustons.",
  },
];
