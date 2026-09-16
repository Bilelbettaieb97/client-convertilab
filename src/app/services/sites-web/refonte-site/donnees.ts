import {
  ArrowLeftRight,
  BadgeEuro,
  ClipboardCheck,
  FileSearch,
  Gauge,
  GraduationCap,
  Inbox,
  KeyRound,
  LayoutTemplate,
  MessageSquareOff,
  PenLine,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
  Timer,
} from "lucide-react";
import { PRICING } from "@/lib/constants";
import { getPole } from "@/data/poles";
import { caseStudies, fullCaseStudies, LIVE_SITES } from "@/data/case-studies";
import type { FaqItem } from "@/lib/faq-schema";
import type {
  Engagement,
  FilArianeElement,
  PainPoint,
  PoleLivrable,
  TimelineEtape,
} from "@/components/pole";

/**
 * Données de la sous-page « Refonte de site internet »
 * (/services/sites-web/refonte-site). Tout le texte visible vit ici, rendu
 * côté serveur par RefonteSiteContent.tsx. Les prix viennent de PRICING, les
 * cas réels de src/data/case-studies.ts, les liens de poles.ts. Aucun chiffre
 * de résultat inventé, aucune garantie, aucune fausse rareté.
 */

export const pole = getPole("sites-web");

export const REFONTE_URL = "/services/sites-web/refonte-site";

export const REFONTE_FIL: FilArianeElement[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: pole.nomCourt, href: pole.href },
  { label: "Refonte de site internet" },
];

/* ── Prix : une seule source, PRICING ───────────────────────────────────── */

export const euros = (montant: number) => `${montant.toLocaleString("fr-FR")}\u00a0€`;
/** « ou 30€/mois » devient « ou 30 €/mois », sans changer le chiffre. */
const mensualite = (texte: string) => texte.replace(/(\d)€/g, "$1\u00a0€");
const ETALE = "paiement étalé, pas d'abonnement";

export const PRIX = {
  refonte: { valeur: euros(PRICING.refonte.from), detail: `${mensualite(PRICING.refonte.monthly)}, ${ETALE}` },
  ecommerce: {
    valeur: `à partir de ${euros(PRICING.ecommerce.from)}`,
    detail: `${mensualite(PRICING.ecommerce.monthly)}, ${ETALE}`,
  },
  vitrine: { valeur: euros(PRICING.vitrine.from), detail: `${mensualite(PRICING.vitrine.monthly)}, ${ETALE}` },
  seo: { valeur: "dès 500 €/mois", detail: "6 mois minimum, en option" },
} as const;

/* ── Sous-pages sœurs et outils, depuis poles.ts ────────────────────────── */

export const PAGES_SOEURS = pole.sousPages.filter((s) => s.href !== REFONTE_URL);

const sousPage = (chemin: string) => {
  const lien = pole.sousPages.find((s) => s.href.endsWith(chemin));
  if (!lien) throw new Error(`Sous-page inconnue : ${chemin}`);
  return lien;
};

export const LIEN_ECOMMERCE = sousPage("/site-ecommerce");
export const LIEN_VITRINE = sousPage("/site-vitrine");
export const OUTIL_ESTIMATION = pole.outils[0];
export const OUTIL_DESIGN = pole.outils[1];
export const LIEN_SEO_FORFAIT = { href: "/services/seo/referencement", label: "Forfait SEO mensuel" };
export const LIEN_SEO_CHECK = { href: "/seo-check", label: "Vérifier le SEO de votre site actuel" };

/* ── Hero : trois points de réassurance, tous tenus plus bas dans la page ── */

export const REASSURANCE_HERO = [
  "Audit de votre site actuel offert",
  "Redirections posées avant la mise en ligne",
  `${PRIX.refonte.valeur}, livrée en 2 semaines`,
] as const;

/** Ce que nous passons en revue sur le site actuel : la carte du hero. */
export const AUDIT_POINTS = [
  { icon: Smartphone, libelle: "Lecture sur téléphone", detail: "Textes, boutons, formulaire" },
  { icon: Gauge, libelle: "Vitesse de chargement", detail: "Mesurée sur mobile" },
  { icon: Search, libelle: "Pages qui reçoivent du trafic", detail: "Search Console, à conserver" },
  { icon: Inbox, libelle: "Chemin vers la demande", detail: "Appel, devis, rendez-vous" },
  { icon: PenLine, libelle: "Contenus à reprendre", detail: "Textes, photos, avis" },
  { icon: ShieldCheck, libelle: "Accès et propriété", detail: "Domaine, hébergement, comptes" },
] as const;

/* ── Le constat : trois douleurs propres à un site qui a vieilli ────────── */

export const CONSTAT: PainPoint[] = [
  {
    icon: Smartphone,
    titre: "Votre site se lit mal sur téléphone",
    texte:
      "Conçu pour un écran d'ordinateur : sur mobile, le texte est minuscule, le menu se cache et le numéro n'est pas cliquable. C'est pourtant là que vos clients vous cherchent.",
  },
  {
    icon: Timer,
    titre: "Il est lent, daté, et ne vous ressemble plus",
    texte:
      "Votre activité a évolué, vos prix et vos photos aussi. Le site montre encore l'entreprise d'il y a cinq ans, et met plusieurs secondes à s'afficher.",
  },
  {
    icon: MessageSquareOff,
    titre: "Il est joli, mais le téléphone ne sonne pas",
    texte:
      "Aucun bouton clair, un formulaire perdu en bas de page, pas d'avis clients. Le visiteur repart sans rien faire.",
  },
];

/* ── Quand faut-il refondre : quatre signaux, sans statistique inventée ──── */

export const SIGNAUX: PoleLivrable[] = [
  {
    icon: Smartphone,
    titre: "Le site n'est pas pensé pour le mobile",
    texte: "Il faut zoomer pour lire et les boutons sont trop petits pour le pouce.",
  },
  {
    icon: Gauge,
    titre: "Le score de vitesse mobile est dans le rouge",
    texte: "Google PageSpeed le mesure gratuitement. Un site lent perd des visiteurs avant d'afficher votre offre.",
  },
  {
    icon: Inbox,
    titre: "Il n'apporte aucune demande",
    texte: "Personne ne vous appelle grâce à lui : ni bouton visible, ni parcours vers le devis.",
  },
  {
    icon: Search,
    titre: "Vous n'apparaissez plus sur Google",
    texte: "Titres absents, pages en double, structure illisible pour les moteurs de recherche.",
  },
];

/* ── Les trois formules de refonte ──────────────────────────────────────── */

export interface FormuleRefonte {
  titre: string;
  cible: string;
  prix: string;
  prixDetail: string;
  delai: string;
  inclus: [string, string, string];
  lien: { href: string; label: string };
  miseEnAvant?: boolean;
  badge?: string;
}

export const FORMULES: FormuleRefonte[] = [
  {
    titre: "Refonte de site vitrine",
    cible: "Votre site vitrine, jusqu'à cinq pages, a vieilli : design, mobile, vitesse, contenus.",
    prix: PRIX.refonte.valeur,
    prixDetail: PRIX.refonte.detail,
    delai: "Livrée en 2 semaines",
    inclus: [
      "Audit de l'existant avant de toucher quoi que ce soit",
      "Nouveau design sur mesure, mobile d'abord",
      "Redirections posées, positions Google suivies",
    ],
    lien: { href: "#formulaire", label: "Demander mon audit de refonte gratuit" },
    miseEnAvant: true,
    badge: "La plus demandée",
  },
  {
    titre: "Refonte de site e-commerce",
    cible: "Votre boutique tourne sur une plateforme dépassée ou son tunnel d'achat perd des clients.",
    prix: PRIX.ecommerce.valeur,
    prixDetail: PRIX.ecommerce.detail,
    delai: "Délai écrit dans le devis",
    inclus: [
      "Catalogue, clients et commandes repris",
      "Paiement sécurisé et tunnel d'achat simplifié",
      "Fiches produit reprises, anciennes adresses redirigées",
    ],
    lien: { href: LIEN_ECOMMERCE.href, label: "Voir la formule site e-commerce" },
  },
  {
    titre: "Refonte et référencement",
    cible: "Vous voulez conserver votre trafic et en gagner sur des requêtes disputées.",
    prix: `${PRIX.refonte.valeur} + ${PRIX.seo.valeur}`,
    prixDetail: "refonte à prix fixe, forfait SEO 6 mois minimum",
    delai: "Refonte en 2 semaines, SEO chaque mois",
    inclus: [
      "Tout ce que comprend la refonte de site vitrine",
      "Audit SEO complet et plan de mots-clés",
      "Contenus travaillés chaque mois",
    ],
    lien: { href: LIEN_SEO_FORFAIT.href, label: "Découvrir le forfait SEO mensuel" },
  },
];

/* ── Notre méthode : cinq repères dans le temps ─────────────────────────── */

export const METHODE: TimelineEtape[] = [
  {
    repere: "Jour 1",
    titre: "Appel de 30 minutes et audit de l'existant",
    texte:
      "Vous nous montrez votre site et ce qui vous gêne. Nous relevons les pages qui reçoivent du trafic, la vitesse, la lecture mobile et le chemin vers la demande.",
    icon: FileSearch,
  },
  {
    repere: "Sous 48 h",
    titre: "Devis fixe et maquette gratuite",
    texte:
      "Un devis écrit au prix affiché ici et une maquette de votre future page d'accueil. Rien n'est codé tant qu'elle n'est pas validée.",
    icon: LayoutTemplate,
  },
  {
    repere: "Semaine 1",
    titre: "Design et contenus",
    texte:
      "Le nouveau site se construit sur un espace séparé, avec vos textes, photos et avis retravaillés. Votre site actuel reste en ligne.",
    icon: PenLine,
  },
  {
    repere: "Semaine 2",
    titre: "Migration, redirections et mise en ligne",
    texte:
      "Chaque ancienne adresse est redirigée vers la nouvelle. Titres, plan du site et données structurées posés, tests sur mobile, mise en ligne sur votre domaine.",
    icon: ArrowLeftRight,
  },
  {
    repere: "Les semaines suivantes",
    titre: "Vérification, formation, corrections",
    texte:
      "Nous vérifions la réindexation dans la Search Console, vous formons à modifier le site vous-même et corrigeons ce qui doit l'être.",
    icon: ClipboardCheck,
  },
];

/* ── Tout est compris dans le prix ──────────────────────────────────────── */

export const INCLUS: PoleLivrable[] = [
  { icon: FileSearch, titre: "Audit de l'existant", texte: "Pages, trafic, vitesse, mobile et parcours vers la demande, avant le devis." },
  { icon: LayoutTemplate, titre: "Design sur mesure", texte: "Pas de gabarit générique : une maquette validée avant la moindre ligne de code." },
  { icon: Smartphone, titre: "Mobile d'abord", texte: "Conçu pour le téléphone, puis adapté à l'ordinateur, numéro cliquable partout." },
  { icon: ArrowLeftRight, titre: "Redirections et SEO de base", texte: "Anciennes adresses redirigées, titres, plan du site, données structurées." },
  { icon: PenLine, titre: "Contenus repris et retravaillés", texte: "Vos textes, photos et avis existants, réécrits pour donner envie d'appeler." },
  { icon: Inbox, titre: "Formulaire relié à notre CRM", texte: "Chaque demande arrive par email et peut déclencher des relances automatiques." },
  { icon: Server, titre: "Hébergement et domaine configurés", texte: "Votre nom de domaine conservé, hébergement et certificat de sécurité configurés." },
  { icon: GraduationCap, titre: "Formation et corrections", texte: "Une session pour modifier le site vous-même, puis les corrections après mise en ligne." },
];

/* ── Cas réels : uniquement des refontes documentées dans case-studies.ts ── */

export interface CasRefonte {
  slug: string;
  nom: string;
  prestation: string;
  probleme: string;
  action: string;
  /** Mots exacts du client (fullCaseStudies[].testimonial ou caseStudies[].testimonial). */
  citation: string;
  href?: string;
  siteHref?: string;
}

/**
 * `citationComplete` : mots du client tirés de fullCaseStudies (version longue),
 * sinon la version courte de caseStudies. Les deux sont les siens.
 */
const casRefonte = (slug: string, prestation: string, probleme: string, action: string, citationComplete = false): CasRefonte[] => {
  const cs = caseStudies.find((c) => c.slug === slug);
  const complet = fullCaseStudies[slug];
  const citation = citationComplete ? (complet?.testimonial ?? cs?.testimonial) : cs?.testimonial;
  if (!cs || !citation) return [];
  return [
    {
      slug,
      nom: cs.client,
      prestation,
      probleme,
      action,
      citation,
      href: complet ? `/etude-de-cas/${slug}` : undefined,
      siteHref: LIVE_SITES[slug],
    },
  ];
};

export const CAS_REELS: CasRefonte[] = [
  ...casRefonte(
    "institut-nomad",
    "Refonte d'un site vitrine institutionnel",
    "Une offre éducative riche mais difficile à comprendre en ligne : l'ancien site ne reflétait pas la qualité de l'accompagnement.",
    "Un site moderne qui structure les pôles éducatifs, des appels à l'action pour les parents et un espace d'administration pour modifier les contenus en autonomie.",
    true
  ),
  ...casRefonte(
    "ah-studio",
    "Nouveau site après plusieurs plateformes testées",
    "Un photographe qui avait essayé plusieurs outils de création de site sans résultat à la hauteur de son travail.",
    "Un site visuel avec un portfolio immersif, des prestations structurées et un parcours clair jusqu'à la prise de rendez-vous."
  ),
];

/* ── Engagements écrits sur le devis ────────────────────────────────────── */

export const ENGAGEMENTS: Engagement[] = [
  { icon: FileSearch, titre: "Audit offert, avis honnête", texte: "Si un simple rafraîchissement suffit, nous vous le disons." },
  { icon: BadgeEuro, titre: "Prix fixe, écrit avant de commencer", texte: `${PRIX.refonte.valeur} pour un site vitrine, ${PRIX.refonte.detail}.` },
  { icon: ArrowLeftRight, titre: "Redirections avant la mise en ligne", texte: "Aucune ancienne adresse ne part dans le vide, réindexation vérifiée après le lancement." },
  { icon: Timer, titre: "Livrée en 2 semaines", texte: "Après validation de la maquette, votre site actuel reste en ligne jusqu'au basculement." },
  { icon: KeyRound, titre: "Vous restez propriétaire", texte: "Domaine, hébergement, textes, images et accès : tout est à votre nom." },
  { icon: GraduationCap, titre: "Formation incluse", texte: "Une session pour modifier textes, photos et avis vous-même." },
];

/* ── Formulaire final : question d'étape 1 propre à la refonte ──────────── */

export const OPTIONS_GENE = [
  { value: "mobile", label: "Il se lit mal sur téléphone", desc: "Texte minuscule, menu caché" },
  { value: "lent-date", label: "Il est lent ou daté", desc: "Il ne me ressemble plus" },
  { value: "aucune-demande", label: "Il n'apporte aucune demande", desc: "Personne n'appelle grâce à lui" },
  { value: "tout-revoir", label: "Je veux tout revoir", desc: "Design, contenus, structure" },
  { value: "je-ne-sais-pas", label: "Je ne sais pas encore", desc: "L'audit le dira" },
] as const;

/* ── FAQ : la même liste alimente le JSON-LD FAQPage dans page.tsx ──────── */

export const REFONTE_FAQ: FaqItem[] = [
  {
    q: "Combien coûte une refonte de site internet ?",
    a: `La refonte d'un site vitrine coûte ${PRIX.refonte.valeur}, ${PRIX.refonte.detail}. La refonte d'un site e-commerce démarre à ${euros(PRICING.ecommerce.from)}, avec un délai écrit dans le devis. Le prix est fixe et écrit avant de commencer : il ne bouge pas en cours de route.`,
  },
  {
    q: "Vais-je perdre mon référencement Google lors de la refonte ?",
    a: "Pas si la refonte est préparée. Avant de toucher au site, nous listons les pages qui reçoivent du trafic dans la Search Console, nous redirigeons chaque ancienne adresse vers la nouvelle et nous vérifions la réindexation après la mise en ligne. Personne ne peut promettre qu'une position ne bougera jamais, mais c'est précisément ce travail qui évite les pertes que l'on voit après une refonte bâclée.",
  },
  {
    q: "Combien de temps dure une refonte de site ?",
    a: "Deux semaines après validation de la maquette pour un site vitrine. Pour un site e-commerce ou une application, le délai dépend du volume de produits et des fonctions à reprendre : il est écrit dans le devis.",
  },
  {
    q: "Mon site actuel reste-t-il en ligne pendant la refonte ?",
    a: "Oui. Le nouveau site est construit sur un espace séparé. Votre site actuel reste visible et fonctionnel jusqu'au jour du basculement, qui se fait en quelques minutes, une fois le nouveau site validé et testé.",
  },
  {
    q: "Refonte ou nouveau site : comment choisir ?",
    a: "Si vous avez un site avec des pages référencées, des contenus et des avis, la refonte les conserve et coûte moins cher qu'un site neuf. Si votre site n'a que deux pages sans trafic, ou s'il tourne sur un outil que vous voulez quitter, un site vitrine neuf est souvent plus simple. L'audit gratuit tranche cette question en trente minutes.",
  },
  {
    q: "Puis-je garder mon nom de domaine, mes contenus et mes avis ?",
    a: "Oui. Votre nom de domaine reste le vôtre et ne change pas. Nous reprenons vos textes, vos photos et vos avis clients, en les retravaillant pour qu'ils se lisent bien sur mobile et donnent envie de vous contacter. Vous ne repartez pas de zéro.",
  },
  {
    q: "Mon site est sur Wix, WordPress ou Shopify : est-ce un problème ?",
    a: "Non. Nous reprenons des sites faits sur toutes les plateformes courantes. Nous exportons vos contenus, nous reconstruisons le site sur une base moderne et rapide, puis nous repointons votre nom de domaine. Vous gardez vos accès à l'ancien outil tant que vous le souhaitez.",
  },
  {
    q: "Pourrai-je modifier le site moi-même après la refonte ?",
    a: "Oui. Une session de formation est comprise dans le prix : textes, photos, avis, horaires, nouvelle page. Vous n'avez plus besoin de repasser par un développeur pour une mise à jour courante. Nous restons joignables pour le reste.",
  },
];
