import {
  Boxes,
  CalendarCheck,
  ClipboardCheck,
  CreditCard,
  FileSignature,
  GraduationCap,
  Hourglass,
  KeyRound,
  LayoutTemplate,
  Package,
  Percent,
  PhoneCall,
  Rocket,
  Search,
  ShoppingBag,
  ShoppingCart,
  Store,
  Timer,
  Truck,
  UserRound,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { PRICING } from "@/lib/constants";
import { getPole } from "@/data/poles";
import { caseStudies, fullCaseStudies, LIVE_SITES } from "@/data/case-studies";
import type { FaqItem } from "@/lib/faq-schema";
import type { ComparatifColonne, Engagement, FilArianeElement, PainPoint, TimelineEtape } from "@/components/pole";

/**
 * Données de la sous-page « Site e-commerce » (/services/sites-web/site-ecommerce).
 * Tout le texte visible vit ici, rendu côté serveur par SiteEcommerceContent.tsx.
 * Prix depuis PRICING, cas réels depuis src/data/case-studies.ts, liens depuis
 * poles.ts. Aucun chiffre de résultat client, aucune garantie, aucune rareté.
 */

export const pole = getPole("sites-web");

export const URL_SITE_ECOMMERCE = "/services/sites-web/site-ecommerce";

export const FIL_ARIANE_ECOMMERCE: FilArianeElement[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: pole.nomCourt, href: pole.href },
  { label: "Site e-commerce" },
];

/* ── Prix : une seule source, PRICING ───────────────────────────────────── */

const euros = (montant: number) => `${montant.toLocaleString("fr-FR")}\u00a0€`;
/** « ou 65€/mois » devient « ou 65 €/mois », sans changer le chiffre. */
const mensualite = (texte: string) => texte.replace(/(\d)€/g, "$1\u00a0€");

export const PRIX_ECOMMERCE = {
  montant: euros(PRICING.ecommerce.from),
  valeur: `à partir de ${euros(PRICING.ecommerce.from)}`,
  detail: `${mensualite(PRICING.ecommerce.monthly)}, paiement étalé, pas d'abonnement`,
  delai: "Délai écrit dans le devis",
} as const;

/* ── Pages sœurs du pôle (poles.ts), sans la page courante ──────────────── */

export const PAGES_SOEURS = pole.sousPages.filter((s) => s.href !== URL_SITE_ECOMMERCE);

export const OUTIL_ESTIMATION = pole.outils[0];

/* ── Hero : trois repères de réassurance, tous tenus sur la page prix ───── */

/** Quatre chips de réassurance du hero, même gabarit que site-vitrine (toutes tenues sur la page prix). */
export const CHIPS_HERO: readonly { icon: LucideIcon; label: string }[] = [
  { icon: Timer, label: "Devis écrit sous 24 h" },
  { icon: FileSignature, label: "Délai écrit dans le devis" },
  { icon: CalendarCheck, label: "Paiement étalé, pas d'abonnement" },
  { icon: KeyRound, label: "Vous êtes propriétaire de la boutique" },
];

/* ── Pour qui : quatre situations ───────────────────────────────────────── */

export const SITUATIONS = [
  {
    icon: ShoppingBag,
    titre: "Un artisan ou un créateur qui vend en salon ou sur Instagram",
    texte:
      "Vos clients vous demandent « vous avez un site ? ». Une boutique à vous leur permet de commander à toute heure, sans passer par vos messages privés.",
  },
  {
    icon: Store,
    titre: "Un commerce qui veut vendre au-delà de sa rue",
    texte:
      "Épicerie fine, cave, cosmétiques, librairie : votre catalogue en ligne, avec retrait en magasin ou livraison, prolonge votre vitrine.",
  },
  {
    icon: Package,
    titre: "Une marque ou un producteur qui vend en direct",
    texte:
      "Huile d'olive, œuvres d'art, produits de soin : vendre sans intermédiaire, avec votre histoire, vos photos et vos prix.",
  },
  {
    icon: Boxes,
    titre: "Un fournisseur B2B avec des tarifs professionnels",
    texte:
      "Un espace réservé à vos clients professionnels, des tarifs dégressifs et des commandes passées en ligne plutôt que par téléphone.",
  },
] as const;

/* ── Le constat : trois douleurs ────────────────────────────────────────── */

export const CONSTAT: PainPoint[] = [
  {
    icon: Percent,
    titre: "Vous vendez sur une marketplace et vous ne possédez rien",
    texte:
      "Chaque vente laisse une commission, vos clients sont ceux de la plateforme et vos fiches ressemblent à celles du voisin. Quand les règles changent, vous subissez.",
  },
  {
    icon: ShoppingCart,
    titre: "Votre boutique en ligne existe, mais personne n'y achète",
    texte:
      "Gabarit générique, photos mal cadrées, panier qui impose de créer un compte, pages lentes sur téléphone : les visiteurs partent avant de payer.",
  },
  {
    icon: Hourglass,
    titre: "Les commandes vous prennent vos soirées",
    texte:
      "Commandes ressaisies dans un tableur, stock vérifié à la main, clients relancés un par un : la boutique devrait le faire à votre place.",
  },
];

/* ── Ce que contient votre boutique : six livrables ─────────────────────── */

export const LIVRABLES = [
  {
    icon: LayoutTemplate,
    titre: "Un catalogue et des fiches produits à vous",
    texte:
      "Catégories, filtres, variantes (taille, couleur, format), photos mises en valeur et textes écrits pour vendre et être trouvés sur Google.",
  },
  {
    icon: CreditCard,
    titre: "Le paiement sécurisé Stripe ou PayPal",
    texte:
      "Carte bancaire, Apple Pay, Google Pay ou PayPal. L'argent arrive sur votre compte, sans commission de notre part.",
  },
  {
    icon: ShoppingCart,
    titre: "Un panier et un tunnel de commande courts",
    texte:
      "Commande sans créer de compte, adresse et livraison en une page, récapitulatif clair : le moins d'étapes possible avant le paiement.",
  },
  {
    icon: Truck,
    titre: "Commandes, stocks et livraison suivis",
    texte:
      "Chaque commande arrive par email et dans votre espace de gestion. Stock décompté automatiquement, frais de port par zone ou par poids, retrait en magasin possible.",
  },
  {
    icon: Search,
    titre: "Le référencement de vos produits",
    texte:
      "Données structurées produit, plan du site, vitesse, pages catégories rédigées : les bases pour Google et pour Google Shopping le jour où vous faites de la publicité.",
  },
  {
    icon: GraduationCap,
    titre: "Un espace de gestion et une formation",
    texte:
      "Vous ajoutez un produit, changez un prix, traitez une commande ou un remboursement vous-même. Formation à la livraison, et nous restons joignables.",
  },
] as const;

/* ── Méthode : quatre étapes avec repère temporel ───────────────────────── */

export const METHODE: TimelineEtape[] = [
  {
    repere: "Jour 1",
    titre: "Appel de 30 minutes",
    icon: PhoneCall,
    texte:
      "Ce que vous vendez, à qui, combien de références, comment vous livrez. Vous repartez avec un avis franc et un ordre de prix.",
  },
  {
    repere: "Sous 48 h",
    titre: "Maquette gratuite et devis à prix fixe",
    icon: LayoutTemplate,
    texte:
      "Une maquette de votre page d'accueil et un devis écrit : prix fixe, nombre de produits configurés, délai de livraison. Rien n'est construit avant votre validation.",
  },
  {
    repere: "Réalisation",
    titre: "Catalogue, paiement, commandes de test",
    icon: Wrench,
    texte:
      "Nous construisons page par page, configurons vos produits, branchons Stripe ou PayPal et passons des commandes de test avec vous, sur ordinateur et téléphone.",
  },
  {
    repere: "Mise en ligne",
    titre: "Formation, suivi et corrections",
    icon: Rocket,
    texte:
      "Nom de domaine, mise en ligne, formation à votre espace de gestion. Les corrections après la mise en ligne sont comprises.",
  },
];

/* ── Engagements : six, concrets, sans garantie de résultat ─────────────── */

export const ENGAGEMENTS: Engagement[] = [
  {
    icon: FileSignature,
    titre: "Un prix fixe écrit avant de commencer",
    texte: "Le devis détaille ce qui est compris, sans supplément en cours de route.",
  },
  {
    icon: Percent,
    titre: "Aucune commission sur vos ventes",
    texte: "Seuls les frais de votre prestataire de paiement s'appliquent.",
  },
  {
    icon: KeyRound,
    titre: "La boutique, le domaine et les données sont à vous",
    texte: "Accès complets à la livraison, fichiers clients compris.",
  },
  {
    icon: UserRound,
    titre: "Un seul interlocuteur, le fondateur",
    texte: "La même personne du premier appel à la mise en ligne.",
  },
  {
    icon: LayoutTemplate,
    titre: "Une maquette validée avant le code",
    texte: "Vous voyez votre boutique avant qu'elle ne soit construite.",
  },
  {
    icon: ClipboardCheck,
    titre: "Des corrections comprises après la mise en ligne",
    texte: "Ce qui doit être ajusté après les premières commandes l'est, sans nouveau devis.",
  },
];

/* ── Preuve : cas réels depuis case-studies.ts uniquement ───────────────── */

export interface CasReel {
  slug: string;
  nom: string;
  secteur: string;
  probleme: string;
  action: string;
  /** Mots exacts du client (caseStudies[].testimonial). */
  citation: string;
  href?: string;
  siteHref?: string;
}

const casReel = (slug: string, probleme: string, action: string): CasReel[] => {
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs || !cs.testimonial) return [];
  return [
    {
      slug,
      nom: cs.client,
      secteur: cs.sector,
      probleme,
      action,
      citation: cs.testimonial,
      // L'étude de cas n'existe que si fullCaseStudies la décrit (sinon 404).
      href: slug in fullCaseStudies ? `/etude-de-cas/${slug}` : undefined,
      siteHref: LIVE_SITES[slug],
    },
  ];
};

/** Cas mis en avant : une boutique B2B consultable en ligne. */
export const CAS_VEDETTE: CasReel | undefined = casReel(
  "funestore",
  "Un fournisseur d'articles funéraires en B2B traditionnel, sans aucune présence en ligne, dans un secteur feutré.",
  "Une plateforme e-commerce B2B : catalogue pour l'achat rapide, espace réservé aux professionnels avec tarifs dégressifs, design sobre."
)[0];

/** Deux autres boutiques, au format problème / ce que nous avons fait / ce que le client dit. */
export const CAS_REELS: CasReel[] = [
  ...casReel(
    "art-des-roses",
    "Une artiste peintre qui vendait ses œuvres uniquement en exposition, sans galerie en ligne.",
    "Un site e-commerce immersif, un catalogue par collections et un parcours d'achat fluide, fidèle à son univers."
  ),
  ...casReel(
    "ecrin-de-seoul",
    "Une boutique de cosmétiques coréens à Neuilly-sur-Seine qui voulait un site à la hauteur de son univers, orienté vente.",
    "Un site e-commerce raffiné, des produits classés par routine de soin, des fiches détaillées qui mènent de la découverte à l'achat."
  ),
];

/* ── Marketplace ou boutique à vous : comparatif honnête ────────────────── */

export const COMPARATIF: { gauche: ComparatifColonne; droite: ComparatifColonne; note: string } = {
  gauche: {
    titre: "Vendre sur une marketplace",
    items: [
      "Une commission prélevée sur chaque vente.",
      "Vos acheteurs sont les clients de la plateforme, pas les vôtres.",
      "Votre fiche a le gabarit de celle du concurrent affiché à côté.",
      "Frais, classement et règles changent sans vous demander votre avis.",
    ],
  },
  droite: {
    titre: "Votre boutique avec ConvertiLab",
    items: [
      "Aucune commission de notre part, seuls les frais de paiement.",
      "Vos clients, leurs emails et leurs commandes vous appartiennent.",
      "Un design dessiné pour vos produits, sans concurrent à côté.",
      "Vous décidez de vos prix, de vos promotions et de vos conditions de livraison.",
    ],
  },
  note:
    "Une marketplace reste utile pour démarrer ou en complément. Si c'est votre cas, nous vous le disons lors de l'appel.",
};

/* ── Formulaire final : question d'étape 1 propre à cette page ──────────── */

export const OPTIONS_PROJET = [
  { value: "ecommerce-zero", label: "Je pars de zéro", desc: "Pas encore de boutique en ligne" },
  { value: "ecommerce-magasin", label: "Je vends en magasin", desc: "Pas encore en ligne" },
  { value: "ecommerce-marketplace", label: "Je vends sur une marketplace", desc: "Je veux une boutique à moi" },
  { value: "ecommerce-refonte", label: "Ma boutique est à refaire", desc: "Elle existe, mais ne vend pas" },
  { value: "ecommerce-b2b", label: "Je vends à des professionnels", desc: "Tarifs pros, espace réservé" },
  { value: "je-ne-sais-pas", label: "Je ne sais pas encore", desc: "Nous verrons ensemble" },
] as const;

/* ── FAQ : la même liste alimente le JSON-LD FAQPage dans page.tsx ──────── */

export const FAQ_ECOMMERCE: FaqItem[] = [
  {
    q: "Combien coûte la création d'un site e-commerce ?",
    a: `À partir de ${PRIX_ECOMMERCE.montant}, ${mensualite(PRICING.ecommerce.monthly)} en paiement étalé, pas d'abonnement. Le prix exact dépend du nombre de produits, des variantes, des modes de livraison et des fonctions demandées (espace professionnel, retrait en magasin, abonnement produit). Il est écrit sur le devis avant de commencer et ne bouge plus ensuite. Notre estimateur vous donne un ordre de prix en 2 minutes.`,
  },
  {
    q: "En combien de temps ma boutique en ligne est-elle livrée ?",
    a: "Le délai dépend du projet : nombre de références, photos et textes disponibles, connexions à vos outils. Il est écrit dans le devis, avec la date de mise en ligne visée. Un site vitrine est livré en 2 semaines ; une boutique demande en général un peu plus, le temps de configurer le catalogue et de tester les commandes avec vous.",
  },
  {
    q: "Sur quelle plateforme construisez-vous la boutique ?",
    a: "Nous construisons des boutiques sur mesure, avec le paiement Stripe ou PayPal, ce qui permet un design à vous, des pages rapides et un référencement propre. Si vous avez déjà une boutique sur une autre plateforme, nous étudions lors de l'appel s'il vaut mieux la reprendre ou repartir sur une base saine, et nous vous le disons franchement.",
  },
  {
    q: "Combien de produits puis-je vendre ?",
    a: "Le nombre de produits configurés à la livraison est écrit sur le devis. Ensuite, vous en ajoutez autant que vous voulez depuis votre espace de gestion, sans limite et sans nous solliciter : la formation à la livraison sert à cela.",
  },
  {
    q: "Prenez-vous une commission sur mes ventes ?",
    a: "Non. Vous payez la création de la boutique, une fois, en une ou plusieurs mensualités. Les seuls frais par transaction sont ceux de votre prestataire de paiement (Stripe, PayPal), facturés par lui selon sa grille publique, et ils vous seraient facturés sur n'importe quelle boutique.",
  },
  {
    q: "À qui appartiennent la boutique et les données clients ?",
    a: "À vous. Le site, le nom de domaine, le compte de paiement, les fichiers clients et l'historique des commandes sont à votre nom. Vous recevez tous les accès à la livraison et vous restez libre de changer de prestataire quand vous le souhaitez.",
  },
  {
    q: "Comment se gèrent les commandes, le stock et la livraison ?",
    a: "Chaque commande vous arrive par email et dans votre espace de gestion, où vous la préparez, l'expédiez ou la remboursez. Le stock se décompte automatiquement. Les frais de port se règlent par zone, par poids ou par montant de commande, avec retrait en magasin si vous avez un point de vente.",
  },
  {
    q: "Ma boutique sera-t-elle trouvée sur Google ?",
    a: "Elle est livrée avec les bases du référencement : données structurées produit, titres et descriptions, plan du site, vitesse, pages catégories rédigées. C'est suffisant pour votre nom et des recherches précises. Pour aller plus loin, notre pôle SEO propose un forfait mensuel, et notre pôle publicité met en place Google Shopping et Meta Ads.",
  },
  {
    q: "Le paiement en plusieurs fois est-il un abonnement ?",
    a: "Non. Le mensuel affiché est un paiement étalé du prix de la boutique sur 24 mois. La dernière mensualité réglée, vous ne nous devez plus rien et la boutique reste à vous.",
  },
];
