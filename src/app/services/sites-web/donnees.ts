import {
  BarChart3,
  CalendarCheck,
  ClipboardCheck,
  GraduationCap,
  Inbox,
  KeyRound,
  LayoutTemplate,
  MessageSquareOff,
  PenLine,
  PhoneCall,
  Rocket,
  Search,
  Server,
  Smartphone,
  Timer,
  Wrench,
} from "lucide-react";
import { PRICING } from "@/lib/constants";
import { getPole } from "@/data/poles";
import { caseStudies, fullCaseStudies, LIVE_SITES } from "@/data/case-studies";
import type { FaqItem } from "@/lib/faq-schema";
import type { FilArianeElement, PainPoint, TimelineEtape } from "@/components/pole";

/**
 * Données de la page pôle « Création de site internet » (/services/sites-web).
 * Tout le texte visible vit ici, rendu côté serveur par SitesWebContent.tsx.
 * Les prix viennent de PRICING, les cas réels de src/data/case-studies.ts,
 * les liens de poles.ts. Aucun chiffre inventé, aucune garantie.
 */

export const pole = getPole("sites-web");

export const SITES_WEB_URL = pole.href;

export const SITES_WEB_FIL: FilArianeElement[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: pole.nomCourt },
];

/* ── Prix : une seule source, PRICING ───────────────────────────────────── */

export const euros = (montant: number) => `${montant.toLocaleString("fr-FR")}\u00a0€`;
/** « ou 45€/mois » devient « ou 45 €/mois », sans changer le chiffre. */
const mensualite = (texte: string) => texte.replace(/(\d)€/g, "$1\u00a0€");
const ETALE = "paiement étalé, pas d'abonnement";

export const PRIX = {
  landing: { valeur: euros(PRICING.landing.from), detail: `${mensualite(PRICING.landing.monthly)}, ${ETALE}` },
  vitrine: { valeur: euros(PRICING.vitrine.from), detail: `${mensualite(PRICING.vitrine.monthly)}, ${ETALE}` },
  refonte: { valeur: euros(PRICING.refonte.from), detail: `${mensualite(PRICING.refonte.monthly)}, ${ETALE}` },
  ecommerce: {
    valeur: `à partir de ${euros(PRICING.ecommerce.from)}`,
    detail: `${mensualite(PRICING.ecommerce.monthly)}, ${ETALE}`,
  },
  application: { valeur: "sur devis", detail: "prix fixe communiqué après le diagnostic" },
} as const;

/* ── Sous-pages, dans l'ordre de poles.ts ───────────────────────────────── */

const sousPage = (chemin: string) => {
  const lien = pole.sousPages.find((s) => s.href.endsWith(chemin));
  if (!lien) throw new Error(`Sous-page inconnue : ${chemin}`);
  return lien;
};

/* ── Hero : chips de réassurance ────────────────────────────────────────── */

export const CHIPS_HERO = [
  { icon: Timer, label: "Devis sous 24 h" },
  { icon: Rocket, label: "Livré en 2 semaines" },
  { icon: CalendarCheck, label: "Paiement étalé, pas d'abonnement" },
  { icon: KeyRound, label: "Vous êtes propriétaire du site" },
] as const;

/* ── Le constat : trois douleurs ────────────────────────────────────────── */

export const CONSTAT: PainPoint[] = [
  {
    icon: Search,
    titre: "Personne ne vous trouve",
    texte:
      "Vos clients tapent votre métier et votre ville sur Google, et tombent sur vos concurrents ou sur une page Facebook. Sans site, votre activité n'a pas d'adresse en ligne.",
  },
  {
    icon: MessageSquareOff,
    titre: "Votre site ne vous apporte rien",
    texte:
      "Il existe depuis des années, il est joli, mais le téléphone n'a jamais sonné grâce à lui. Il se lit mal sur téléphone, charge lentement et ne dit pas quoi faire ensuite.",
  },
  {
    icon: Inbox,
    titre: "Les demandes se perdent",
    texte:
      "Devis ressaisis à la main, rendez-vous pris au téléphone, relances oubliées : chaque semaine, des heures partent dans des tâches que le site pourrait faire à votre place.",
  },
];

/* ── Les cinq formules ──────────────────────────────────────────────────── */

export interface Formule {
  titre: string;
  /** Pour qui, en une phrase (« Pour vous si... »). */
  cible: string;
  prix: string;
  prixDetail: string;
  delai: string;
  /** Trois points inclus, concrets. */
  inclus: [string, string, string];
  /** Sous-page détaillée, avec son ancre descriptive. */
  lien: { href: string; label: string };
  /** Bouton « Chiffrer » : estimateur gratuit ou formulaire. */
  chiffrer: { href: string; label: string };
  /** Carte mise en avant (bordure lumineuse). */
  miseEnAvant?: boolean;
  badge?: string;
}

const CHIFFRER_ESTIMATEUR = { href: pole.outils[0].href, label: "Chiffrer ce projet" };

export const FORMULES: Formule[] = [
  {
    titre: "Site vitrine professionnel",
    cible:
      "Vous n'avez pas encore de site, ou une simple page Facebook, et vos clients vous cherchent sur Google.",
    prix: PRIX.vitrine.valeur,
    prixDetail: PRIX.vitrine.detail,
    delai: "Livré en 2 semaines",
    inclus: [
      "Jusqu'à cinq pages : accueil, services, à propos, avis, contact",
      "Design sur mesure, pensé mobile d'abord",
      "Pages optimisées pour le référencement local",
    ],
    lien: sousPage("/site-vitrine"),
    chiffrer: CHIFFRER_ESTIMATEUR,
    miseEnAvant: true,
    badge: "Formule complète",
  },
  {
    titre: "Landing page",
    cible: "Vous lancez une campagne Google Ads ou Meta Ads et il vous faut une page qui transforme les clics en demandes.",
    prix: PRIX.landing.valeur,
    prixDetail: PRIX.landing.detail,
    delai: "Livrée en 5 à 7 jours",
    inclus: [
      "Une page, un objectif : la demande de contact",
      "Formulaire et comptage des demandes reçues",
      "Conçue pour Google Ads et Meta Ads",
    ],
    lien: sousPage("/landing-page"),
    chiffrer: CHIFFRER_ESTIMATEUR,
  },
  {
    titre: "Refonte de site internet",
    cible: "Votre site a vieilli : il se lit mal sur téléphone, charge lentement ou ne vous ressemble plus.",
    prix: PRIX.refonte.valeur,
    prixDetail: PRIX.refonte.detail,
    delai: "Livrée en 2 semaines",
    inclus: [
      "Audit de l'existant avant de toucher quoi que ce soit",
      "Redirections posées, positions Google conservées",
      "Design actuel, vitesse et mobile remis à niveau",
    ],
    lien: sousPage("/refonte-site"),
    chiffrer: CHIFFRER_ESTIMATEUR,
  },
  {
    titre: "Site e-commerce",
    cible: "Vous voulez vendre vos produits en ligne, avec un catalogue à vous et non un gabarit générique.",
    prix: PRIX.ecommerce.valeur,
    prixDetail: PRIX.ecommerce.detail,
    delai: "Délai fixé sur le devis",
    inclus: [
      "Catalogue configuré avec vos produits",
      "Paiement sécurisé Stripe ou PayPal",
      "Suivi des stocks et des commandes",
    ],
    lien: sousPage("/site-ecommerce"),
    chiffrer: CHIFFRER_ESTIMATEUR,
  },
  {
    titre: "Application web sur mesure",
    cible: "Vous perdez du temps sur des tâches manuelles : devis ressaisis, rendez-vous par téléphone, relances oubliées.",
    prix: PRIX.application.valeur,
    prixDetail: PRIX.application.detail,
    delai: "Délai fixé après le diagnostic",
    inclus: [
      "Espace client, prise de rendez-vous, devis automatisés",
      "Connectée à vos outils existants",
      "Utilisable par votre équipe et vos clients",
    ],
    lien: sousPage("/application-web"),
    chiffrer: { href: "#formulaire", label: "Demander un devis" },
  },
];

/* ── Méthode : quatre étapes avec repère temporel ───────────────────────── */

export const METHODE: TimelineEtape[] = [
  {
    repere: "Jour 1",
    titre: "Appel de 30 minutes",
    icon: PhoneCall,
    texte:
      "Votre métier, vos clients et ce que le site doit déclencher : appels, devis, rendez-vous ou ventes. Vous repartez avec un avis clair et un ordre de prix.",
  },
  {
    repere: "Sous 48 h",
    titre: "Maquette gratuite, validée avant le code",
    icon: LayoutTemplate,
    texte:
      "Vous recevez une maquette de votre page d'accueil et un devis écrit à prix fixe. Rien n'est construit tant que vous n'avez pas validé le design.",
  },
  {
    repere: "Semaines 1 et 2",
    titre: "Réalisation et contenus",
    icon: Wrench,
    texte:
      "Pages, textes, photos, formulaire, prise de rendez-vous, référencement technique : nous construisons, vous validez chaque page.",
  },
  {
    repere: "Mise en ligne",
    titre: "Formation et suivi",
    icon: Rocket,
    texte:
      "Nom de domaine, mise en ligne, formation pour modifier vos contenus, puis suivi des demandes reçues pour ajuster ce qui doit l'être.",
  },
];

/* ── Tout est compris dans le prix : huit items vrais ───────────────────── */

export const INCLUS = [
  {
    icon: Smartphone,
    titre: "Design sur mesure, mobile d'abord",
    texte: "Pas de gabarit acheté : une mise en page dessinée pour votre activité et lisible sur téléphone.",
  },
  {
    icon: PenLine,
    titre: "Textes écrits avec vos mots",
    texte: "Vos pages rédigées à partir du diagnostic et des questions que vos clients posent vraiment. Vous relisez, vous validez.",
  },
  {
    icon: Search,
    titre: "Référencement de base",
    texte: "Titres, balises, vitesse, plan du site, données structurées, fiche Google reliée : les bases pour être trouvé sur votre ville.",
  },
  {
    icon: Inbox,
    titre: "Formulaire relié à votre email ou à votre CRM",
    texte: "Les demandes arrivent au bon endroit, avec prise de rendez-vous en ligne et relances automatiques si vous le souhaitez.",
  },
  {
    icon: Server,
    titre: "Hébergement et nom de domaine configurés",
    texte: "Mise en ligne sur un hébergement et un nom de domaine à votre nom, prêts le jour de la livraison.",
  },
  {
    icon: BarChart3,
    titre: "La mesure de ce qui compte",
    texte: "Google Analytics et Search Console installés : vous savez combien de demandes le site vous apporte.",
  },
  {
    icon: GraduationCap,
    titre: "Formation pour modifier vos contenus",
    texte: "Une courte formation à la livraison : vous changez vos textes et vos photos vous-même.",
  },
  {
    icon: ClipboardCheck,
    titre: "Propriété et corrections après la mise en ligne",
    texte: "Le site, le nom de domaine et les contenus sont à vous. Les corrections après la mise en ligne sont comprises.",
  },
] as const;

/* ── Preuve : cas réels depuis case-studies.ts uniquement ───────────────── */

export interface CasReel {
  slug: string;
  nom: string;
  prestation: string;
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
      prestation: cs.title,
      probleme,
      action,
      citation: cs.testimonial,
      // L'étude de cas n'existe que si fullCaseStudies la décrit (sinon 404).
      href: slug in fullCaseStudies ? `/etude-de-cas/${slug}` : undefined,
      siteHref: LIVE_SITES[slug],
    },
  ];
};

/** Cas mis en avant : le témoignage réel de JSM Jardinage, sans chiffre d'affaires (pas d'accord du client). */
export const CAS_VEDETTE: CasReel | undefined = casReel(
  "jsm-jardinage",
  "Un paysagiste qui couvre Paris et l'Île-de-France, sans site pour recevoir ses demandes de devis.",
  "Un site vitrine avec une demande de devis guidée en quatre étapes, la mise en avant de l'aide d'État de 50 % et un référencement local sur sa zone."
)[0];

/** Trois cas au format problème / ce que nous avons fait / ce que le client dit. */
export const CAS_REELS: CasReel[] = [
  ...casReel(
    "acb-renovation",
    "Une entreprise de couverture, charpente et rénovation, plus de douze ans d'expérience, et aucune présence en ligne : impossible de découvrir ses services ni de demander un devis.",
    "Un site vitrine adapté au bâtiment, des services structurés, des appels à l'action orientés devis et la garantie décennale mise en avant."
  ),
  ...casReel(
    "monsieur-arancini",
    "Un artisan spécialisé dans les arancini siciliens, sans présence en ligne, qui devait se positionner auprès des professionnels.",
    "Un site vitrine premium, une offre produit structurée, une version mobile complète et des visuels qui mettent en avant l'authenticité sicilienne."
  ),
  ...casReel(
    "art-des-roses",
    "Une artiste peintre qui vendait ses œuvres uniquement en exposition, sans galerie en ligne pour toucher un public plus large.",
    "Un site e-commerce avec un catalogue par collections, un parcours d'achat fluide et une mise en valeur des œuvres fidèle à son univers."
  ),
];

/** Autres sites consultables, présentés sur cette page. */
export const AUTRES_SITES = ["adsb-wissembourg", "funestore", "trievent", "ah-studio"].flatMap((slug) => {
  const cs = caseStudies.find((c) => c.slug === slug);
  const siteHref = LIVE_SITES[slug];
  if (!cs || !siteHref) return [];
  return [{ slug, nom: cs.client, secteur: cs.sector, siteHref }];
});

/* ── Formulaire final : question d'étape 1 propre à ce pôle ─────────────── */

export const OPTIONS_PROJET = [
  { value: "site-vitrine", label: "Site vitrine", desc: "Présenter mon activité" },
  { value: "landing-page", label: "Landing page", desc: "Pour ma campagne" },
  { value: "refonte", label: "Refonte", desc: "Mon site a vieilli" },
  { value: "ecommerce", label: "E-commerce", desc: "Vendre en ligne" },
  { value: "application", label: "Application web", desc: "Un outil sur mesure" },
  { value: "je-ne-sais-pas", label: "Je ne sais pas encore", desc: "Nous verrons ensemble" },
] as const;

/* ── FAQ : la même liste alimente le JSON-LD dans page.tsx ──────────────── */

export const SITES_WEB_FAQ: FaqItem[] = [
  {
    q: "Combien coûte la création d'un site internet ?",
    a: `Une landing page coûte ${PRIX.landing.valeur}, un site vitrine professionnel ${PRIX.vitrine.valeur}, une refonte ${PRIX.refonte.valeur}, un site e-commerce à partir de ${euros(PRICING.ecommerce.from)}, une application web sur devis. Ces prix sont fixes et écrits avant de commencer. Notre estimateur vous donne un ordre de prix en 2 minutes.`,
  },
  {
    q: "En combien de temps mon site est-il livré ?",
    a: "Site vitrine et refonte sont livrés en 2 semaines après validation de la maquette, une landing page en 5 à 7 jours. Pour un e-commerce ou une application web, le délai dépend du projet et figure sur le devis.",
  },
  {
    q: "Le paiement en plusieurs fois est-il un abonnement ?",
    a: "Non. Le mensuel affiché est un paiement étalé du prix du site, sur 12 ou 24 mois selon la formule. La dernière mensualité réglée, vous ne nous devez plus rien et le site reste à vous.",
  },
  {
    q: "À qui appartient le site une fois livré ?",
    a: "À vous. Le site, le nom de domaine, les textes et les images sont votre propriété. Vous recevez les accès à la livraison et vous restez libre de changer de prestataire quand vous le souhaitez.",
  },
  {
    q: "Qui réalise mon site concrètement ?",
    a: "Le fondateur de l'agence, à Rueil-Malmaison. Vous parlez à la même personne du premier appel à la mise en ligne, et c'est elle qui conçoit, écrit et construit votre site. Pas de commercial ni d'intermédiaire.",
  },
  {
    q: "Et si je n'ai ni textes ni photos ?",
    a: "Ce n'est pas un problème. Nous rédigeons les textes à partir du diagnostic et de quelques questions, puis vous les relisez. Pour les images, nous utilisons vos photos si vous en avez, sinon des visuels choisis pour votre secteur.",
  },
  {
    q: "Mon site sera-t-il trouvé sur Google ?",
    a: "Chaque site est livré avec les bases du référencement : titres, balises, vitesse, plan du site, données structurées, fiche Google reliée. C'est suffisant pour votre nom et des requêtes locales peu disputées. Pour aller plus loin, notre pôle SEO propose un forfait mensuel et un audit.",
  },
  {
    q: "Une refonte de site fait-elle perdre le référencement ?",
    a: "Pas si elle est préparée. Avant de toucher au site, nous listons les pages qui reçoivent du trafic, nous posons les redirections vers les nouvelles adresses et nous vérifions après la mise en ligne.",
  },
  {
    q: "Travaillez-vous en dehors de Rueil-Malmaison et de Paris ?",
    a: "Oui. Notre agence est à Rueil-Malmaison (92), la plupart de nos clients sont à Paris et en Île-de-France, et nous travaillons partout en France en visio : ADSB Wissembourg, présenté sur cette page, est en Alsace.",
  },
];
