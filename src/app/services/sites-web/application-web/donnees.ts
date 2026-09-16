import {
  CalendarCheck,
  ClipboardList,
  Database,
  FileSignature,
  FolderOpen,
  GraduationCap,
  KeyRound,
  LayoutTemplate,
  MonitorSmartphone,
  Plug,
  Rocket,
  Search,
  ShieldCheck,
  Table2,
  Timer,
  UserRound,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { PRICING } from "@/lib/constants";
import { getPole } from "@/data/poles";
import { caseStudies, fullCaseStudies, LIVE_SITES } from "@/data/case-studies";
import type { FaqItem } from "@/lib/faq-schema";
import type { FilArianeElement, PainPoint, PoleCas, PoleLivrable, TimelineEtape } from "@/components/pole";

/**
 * Données de la sous-page « Application web sur mesure »
 * (/services/sites-web/application-web). Tout le texte visible vit ici et
 * est rendu côté serveur par ApplicationWebContent.tsx.
 *
 * Règles : vouvoiement, « nous », jamais de tiret long, prix depuis PRICING
 * (application = sur devis), cas réels depuis src/data/case-studies.ts
 * uniquement, aucun chiffre de résultat client, aucune garantie.
 */

export const pole = getPole("sites-web");

export const APPLICATION_WEB_URL = "/services/sites-web/application-web";

/** Ancre du formulaire final : cible des CTA de la page et de la barre collante. */
export const ANCRE_FORMULAIRE = "#formulaire";

export const APPLICATION_WEB_FIL: FilArianeElement[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: pole.nomCourt, href: pole.href },
  { label: "Application web sur mesure" },
];

/* ── Prix : une seule source, PRICING ───────────────────────────────────── */

export const PRIX_APPLICATION = {
  valeur: PRICING.application.label,
  detail: "prix fixe par phase, communiqué après le diagnostic gratuit",
} as const;

/* ── Pages sœurs du pôle (les quatre autres formules) ───────────────────── */

const euros = (montant: number) => `${montant.toLocaleString("fr-FR")}\u00a0€`;

/** Prix (PRICING) et délai (brief : 2 semaines, landing 5 à 7 jours, e-commerce délai écrit dans le devis) par formule. */
const REPERES_FORMULES: Record<string, { prix: string; delai: string }> = {
  "/services/sites-web/site-vitrine": { prix: euros(PRICING.vitrine.from), delai: "Livré en 2 semaines" },
  "/services/sites-web/site-ecommerce": { prix: `à partir de ${euros(PRICING.ecommerce.from)}`, delai: "Délai écrit dans le devis" },
  "/services/sites-web/landing-page": { prix: euros(PRICING.landing.from), delai: "Livrée en 5 à 7 jours" },
  "/services/sites-web/refonte-site": { prix: euros(PRICING.refonte.from), delai: "Livrée en 2 semaines" },
};

export const PAGES_SOEURS = pole.sousPages
  .filter((s) => s.href !== APPLICATION_WEB_URL)
  .map((s) => ({ ...s, ...REPERES_FORMULES[s.href] }));

/* ── Hero : chips de réassurance, toutes vraies et tenues sur la page prix ── */

export const CHIPS_HERO: readonly { icon: LucideIcon; label: string }[] = [
  { icon: FileSignature, label: "Prix fixe écrit après le diagnostic" },
  { icon: Timer, label: "Délai écrit dans le devis" },
  { icon: KeyRound, label: "Vous êtes propriétaire du code" },
  { icon: UserRound, label: "Un seul interlocuteur" },
];

/* ── Six cas d'usage : ce qu'une application web fait pour une petite entreprise ── */

export interface CasUsage {
  icon: LucideIcon;
  titre: string;
  texte: string;
  /** Métiers concernés, en une ligne. */
  pourQui: string;
}

export const CAS_USAGE: CasUsage[] = [
  {
    icon: FolderOpen,
    titre: "Portail client",
    texte:
      "Vos clients suivent leur dossier, déposent leurs documents et consultent leurs factures sans vous appeler.",
    pourQui: "Cabinets, agences, gestionnaires, prestataires B2B",
  },
  {
    icon: CalendarCheck,
    titre: "Prise de rendez-vous et réservation",
    texte:
      "Un agenda en ligne relié à votre planning réel, avec confirmation, rappel automatique et acompte si vous le souhaitez.",
    pourQui: "Salons, praticiens, ateliers, locations, restaurants",
  },
  {
    icon: ClipboardList,
    titre: "Devis et configurateur en ligne",
    texte:
      "Le visiteur choisit ses options, obtient une estimation, et vous recevez une demande complète, prête à transformer en devis.",
    pourQui: "Artisans, menuisiers, imprimeurs, prestataires à options",
  },
  {
    icon: GraduationCap,
    titre: "Espace membre et formation",
    texte:
      "Des contenus réservés, des vidéos, des parcours et un suivi de progression, accessibles avec un compte.",
    pourQui: "Formateurs, coachs, associations, clubs",
  },
  {
    icon: Table2,
    titre: "Tableau de bord métier",
    texte:
      "Planning des interventions, suivi de stock, fiches clients, relances : un seul écran pour toute l'équipe, au bureau comme sur le chantier.",
    pourQui: "PME de 3 à 30 personnes, entreprises du bâtiment, commerces",
  },
  {
    icon: Plug,
    titre: "Outil interne relié à vos logiciels",
    texte:
      "L'application lit et écrit dans votre agenda, votre facturation, votre CRM ou vos emails, sans ressaisie.",
    pourQui: "Toute entreprise qui jongle entre plusieurs outils",
  },
];

/* ── Le constat : trois douleurs ────────────────────────────────────────── */

export const CONSTAT: PainPoint[] = [
  {
    icon: Table2,
    titre: "Vos tableurs font office de logiciel",
    texte:
      "Un fichier partagé, des versions qui se croisent, une formule cassée un vendredi soir. À trois personnes, ça passe. Au-delà, chacun vérifie le travail des autres.",
  },
  {
    icon: Search,
    titre: "Le logiciel du marché ne colle pas à votre métier",
    texte:
      "Vous payez quatre ou cinq abonnements, chacun fait une partie du travail, et vous ressaisissez le reste à la main.",
  },
  {
    icon: Workflow,
    titre: "Les demandes se perdent entre le site et vos outils",
    texte:
      "Un devis demandé le soir, un rendez-vous pris par message, un acompte à réclamer : sans lien entre votre site et votre organisation, des clients attendent.",
  },
];

/* ── Ce que vous obtenez : huit livrables concrets ──────────────────────── */

export const LIVRABLES: PoleLivrable[] = [
  {
    icon: MonitorSmartphone,
    titre: "Une application accessible partout",
    texte: "Depuis un navigateur, sur ordinateur, tablette ou téléphone, sans rien installer.",
  },
  {
    icon: Users,
    titre: "Des comptes et des rôles",
    texte: "Vous, vos salariés, vos clients : chacun ne voit que ce qui le concerne.",
  },
  {
    icon: Database,
    titre: "Vos données dans une base à votre nom",
    texte: "Hébergée en Europe, sauvegardée, exportable à tout moment dans un format lisible.",
  },
  {
    icon: Plug,
    titre: "La connexion à vos outils actuels",
    texte: "Agenda Google ou Outlook, facturation, CRM, emails, paiement en ligne.",
  },
  {
    icon: Workflow,
    titre: "Les automatisations utiles",
    texte: "Confirmations, rappels, relances, notifications. Avec notre pôle CRM et son intégration IA quand il faut lire ou rédiger.",
  },
  {
    icon: LayoutTemplate,
    titre: "Des écrans dessinés pour votre métier",
    texte: "Maquettes validées avant le développement, pensées pour un usage rapide sur téléphone.",
  },
  {
    icon: GraduationCap,
    titre: "La formation de votre équipe",
    texte: "Une session de prise en main, un guide court, une réponse sous 24 h les premières semaines.",
  },
  {
    icon: KeyRound,
    titre: "Le code source et tous les accès",
    texte: "Dépôt de code, hébergement, domaine et base de données à votre nom dès la mise en ligne.",
  },
];

/* ── Notre méthode : cinq repères dans le temps ─────────────────────────── */

export const METHODE: TimelineEtape[] = [
  {
    repere: "Jour 1",
    titre: "Diagnostic gratuit de 30 minutes",
    texte:
      "Vous nous montrez comment vous travaillez aujourd'hui : fichiers, emails, ressaisies. Nous listons ce que l'application doit faire. Si un logiciel existant suffit, nous vous le disons.",
    icon: Search,
  },
  {
    repere: "Semaine 1",
    titre: "Cahier des charges court, maquettes et devis",
    texte:
      "Quelques pages, les écrans principaux maquettés, un prix fixe par phase et un délai écrit. Rien ne se code avant votre validation.",
    icon: FileSignature,
  },
  {
    repere: "Phase 1",
    titre: "Une première version utilisable",
    texte:
      "Nous construisons d'abord le flux qui vous coûte le plus de temps. Vous le testez avec de vraies données, puis nous ajoutons le reste.",
    icon: Rocket,
  },
  {
    repere: "Mise en ligne",
    titre: "Formation et remise des accès",
    texte:
      "Application en ligne à votre nom, formation de votre équipe, code et accès remis. Corrections comprises après la mise en ligne.",
    icon: GraduationCap,
  },
  {
    repere: "Chaque mois, si vous le souhaitez",
    titre: "Suivi et évolutions",
    texte:
      "Mises à jour, sauvegardes, nouvelles fonctions. Optionnel, sur devis, sans engagement de durée.",
    icon: ShieldCheck,
  },
];

/* ── Preuve honnête : cas réels (case-studies.ts) et nos propres outils ─── */

const casReel = (slug: string, prestation: string, fait: string): PoleCas[] => {
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return [];
  return [
    {
      nom: cs.client,
      prestation,
      fait,
      href: slug in fullCaseStudies ? `/etude-de-cas/${slug}` : undefined,
      siteHref: LIVE_SITES[slug],
      ancre: `Lire l'étude de cas ${cs.client}`,
    },
  ];
};

/**
 * Trois sites livrés où l'application prend la forme d'un module intégré :
 * devis guidé, espace client, réservation. Faits repris de case-studies.ts,
 * citation de JSM Jardinage mot pour mot, aucun chiffre.
 */
export const CAS_REELS: PoleCas[] = [
  ...casReel(
    "jsm-jardinage",
    "Site vitrine avec demande de devis guidée en 4 étapes",
    "« Depuis que j'ai lancé mon site avec ConvertiLab, j'ai embauché d'autres salariés pour pouvoir satisfaire la demande. » Le parcours de devis en quatre étapes est testable sur le site."
  ),
  ...casReel(
    "funestore",
    "E-commerce B2B avec espace client réservé",
    "Catalogue professionnel, commandes en ligne et espace réservé aux clients du secteur funéraire."
  ),
  ...casReel(
    "la-chasseuse-demotions",
    "Site portfolio avec réservation en ligne",
    "Galeries, déroulement des séances, tarifs détaillés et réservation en ligne."
  ),
];

/** Nos propres applications, que vous pouvez ouvrir maintenant. */
export const NOS_OUTILS: readonly { icon: LucideIcon; titre: string; texte: string; href: string; external?: boolean }[] = [
  {
    icon: ShieldCheck,
    titre: "MerciAvis, notre outil d'avis Google",
    texte: "Cartes NFC et QR au comptoir, tableau de bord, relances : une application web que nous avons conçue et que nous exploitons.",
    href: "https://merciavis.fr",
    external: true,
  },
  {
    icon: Search,
    titre: "Vérification SEO en 60 secondes",
    texte: "L'outil gratuit de ce site analyse une adresse et rend un rapport : une application web, pas une page.",
    href: "/seo-check",
  },
];

/* ── Pour qui, pas pour qui ─────────────────────────────────────────────── */

export const POUR = {
  titre: "C'est fait pour vous si...",
  items: [
    "Votre équipe ressaisit les mêmes informations dans plusieurs outils.",
    "Vos clients vous appellent pour des informations qu'ils pourraient consulter seuls.",
    "Vous suivez un processus précis qu'aucun logiciel du marché ne reproduit.",
    "Quelqu'un chez vous peut consacrer une heure par semaine à tester les écrans.",
  ],
};

export const PAS_POUR = {
  titre: "Ce n'est pas pour vous si...",
  items: [
    "Un logiciel du marché couvre déjà votre besoin : nous vous le dirons au diagnostic.",
    "Vous cherchez une application mobile native à publier sur l'App Store ou Google Play.",
    "Vous voulez cinquante fonctions dès la première version : nous démarrons toujours par un seul flux.",
    "Personne chez vous ne pourra tester les écrans pendant le projet.",
  ],
};

export const ENGAGEMENT_ECRIT = {
  titre: "Notre engagement, écrit noir sur blanc",
  texte: [
    "Un prix fixe par phase et un délai écrits sur le devis, sans supplément en cours de route. Hébergement et suivi mensuel optionnels, chiffrés à part.",
    "Le code, les données et les accès sont à votre nom dès la mise en ligne. Si un logiciel existant suffit, nous vous le disons.",
  ],
};

/* ── Prix et engagement ─────────────────────────────────────────────────── */

export const LIGNES_PRIX = [
  {
    libelle: "Diagnostic de 30 minutes",
    valeur: "Gratuit",
    detail: "En visio ou à Rueil-Malmaison (92), avec un avis honnête à la clé.",
  },
  {
    libelle: "Application web sur mesure",
    valeur: PRIX_APPLICATION.valeur,
    detail: "Prix fixe par phase, communiqué après le diagnostic, délai sur le devis.",
  },
  {
    libelle: "Suivi et évolutions",
    valeur: "Optionnel, sur devis",
    detail: "Mises à jour, sauvegardes, nouvelles fonctions. Sans engagement de durée.",
  },
];

export const ENGAGEMENTS_PRIX = [
  "Un prix fixe par phase, écrit avant de commencer, sans supplément en cours de route",
  "Un délai écrit sur le devis, phase par phase",
  "Le code source, la base de données et les accès à votre nom",
  "Formation de votre équipe et corrections après la mise en ligne comprises",
  "Un seul interlocuteur, le fondateur, du diagnostic à la mise en ligne",
];

/* ── Formulaire final : question d'étape 1 ──────────────────────────────── */

export const OPTIONS_APPLICATION = [
  { value: "portail-client", label: "Portail client", desc: "Dossiers, documents, factures" },
  { value: "rendez-vous", label: "Prise de rendez-vous", desc: "Agenda et réservation en ligne" },
  { value: "devis-en-ligne", label: "Devis ou configurateur", desc: "Estimation automatique" },
  { value: "outil-interne", label: "Outil interne", desc: "Planning, stock, suivi d'équipe" },
  { value: "espace-membre", label: "Espace membre", desc: "Contenus réservés, formation" },
  { value: "je-ne-sais-pas", label: "Je ne sais pas encore", desc: "Nous verrons ensemble" },
] as const;

/* ── FAQ : la même liste alimente le JSON-LD FAQPage dans page.tsx ─────── */

export const APPLICATION_WEB_FAQ: FaqItem[] = [
  {
    q: "Quelle est la différence entre un site internet et une application web ?",
    a: "Un site internet présente votre activité et amène des demandes. Une application web fait travailler des données : comptes utilisateurs, dossiers, réservations, devis, tableaux de bord. Elle s'utilise depuis un navigateur, sans installation, par votre équipe et par vos clients. Souvent, elle prend la forme d'un module ajouté à votre site existant.",
  },
  {
    q: "Combien coûte une application web sur mesure ?",
    a: "Le prix dépend du nombre d'écrans, des rôles utilisateurs et des connexions à vos outils. Nous ne publions pas de tarif unique : un module de réservation et un portail client complet n'ont pas grand-chose en commun. Après le diagnostic gratuit, vous recevez un devis à prix fixe par phase, avec le délai écrit. Vous ne payez que les phases que vous validez.",
  },
  {
    q: "Combien de temps faut-il pour développer une application web ?",
    a: "Le délai est écrit dans le devis. Un module intégré à votre site, comme une demande de devis guidée ou une réservation en ligne, se livre en quelques semaines. Un portail avec plusieurs rôles et des connexions à vos logiciels se livre par phases utilisables, sur plusieurs mois. Vous utilisez la première version sans attendre la dernière.",
  },
  {
    q: "À qui appartiennent l'application, le code et les données ?",
    a: "À vous. Le dépôt de code, l'hébergement, le nom de domaine et la base de données sont créés à votre nom, et vous en recevez les accès à la mise en ligne. Vous pouvez confier les évolutions à qui vous voulez, sans dépendre de nous.",
  },
  {
    q: "Quelles technologies utilisez-vous ?",
    a: "React et Next.js pour les écrans, TypeScript, une base de données PostgreSQL et un hébergement en Europe. Ce sont les technologies de ce site et de nos propres outils, choisies parce qu'elles sont répandues : n'importe quel développeur peut reprendre le projet après nous.",
  },
  {
    q: "Dois-je abandonner mes logiciels actuels ?",
    a: "Non. Nous relions l'application à ce que vous utilisez déjà : agenda Google ou Outlook, logiciel de facturation, CRM, boîte email, paiement en ligne. L'application remplace les ressaisies et les tableurs, pas les outils qui fonctionnent.",
  },
  {
    q: "Mes données et celles de mes clients sont-elles protégées ?",
    a: "Chaque utilisateur a un compte et ne voit que ce qui le concerne. Les échanges sont chiffrés, la base est sauvegardée et hébergée en Europe, et nous prévoyons dès le cahier des charges ce que le RGPD impose : consentement, durée de conservation, export et suppression sur demande.",
  },
  {
    q: "Et si j'ai besoin de nouvelles fonctions après la livraison ?",
    a: "C'est prévu. L'application est construite phase par phase, et chaque nouvelle fonction fait l'objet d'un devis court. Vous pouvez aussi choisir un suivi mensuel optionnel pour les mises à jour et les petites évolutions, sans engagement de durée.",
  },
  {
    q: "Pouvez-vous ajouter une application à mon site existant ?",
    a: "Oui, si votre site le permet techniquement. Une prise de rendez-vous, un devis guidé ou un espace client s'ajoutent souvent à un site en place. Si le site est trop ancien, nous vous proposons de le refondre en même temps, avec un devis séparé pour chaque partie.",
  },
];
