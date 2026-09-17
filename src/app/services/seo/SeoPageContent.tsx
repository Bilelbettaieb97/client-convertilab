import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  ChartLine,
  Check,
  ClipboardList,
  Coins,
  EyeOff,
  FileSearch,
  FileText,
  Globe,
  Link2,
  MapPin,
  MessageSquareQuote,
  Search,
  Sparkles,
  Target,
  TrendingDown,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import type { FaqItem } from "@/lib/faq-schema";
import { CHIFFRES_COMMUNS, getPole, getSousPage, LABEL_CALENDLY, SURTITRE_ZONE } from "@/data/poles";
import {
  BoutonLien,
  CtaIntermediaire,
  FilAriane,
  FormulaireFinal,
  DiagnosticInteractif,
  SectionOutil,
  PainPoints,
  PoleAutresPoles,
  PoleCTA,
  PoleFAQ,
  PoleHero,
  PoleSection,
  PourQui,
  StickyCtaBar,
  Timeline,
} from "@/components/pole";
import { Conteneur, Surtitre } from "@/components/pole/pole-ui";
import { getDiagnostic } from "@/lib/diagnostics/configs";
import { BorderBeam, CardBody, CardContainer, CardItem, Reveal } from "@/components/motion";
import SeoOrbite from "./SeoOrbite";
import MockCourbePositions from "./maquettes/MockCourbePositions";
import MockJaugeAudit from "./maquettes/MockJaugeAudit";
import MockPackLocal from "./maquettes/MockPackLocal";
import MockReponseIa from "./maquettes/MockReponseIa";

/**
 * Page pôle « SEO et visibilité IA » : référencement naturel, SEO local et
 * visibilité dans les IA. Composant serveur : le H1, tout le texte et la FAQ
 * sont présents dans le HTML rendu. Les animations (mesh, apparitions,
 * cartes en perspective, orbite) sont des enfants "use client".
 */

export const pole = getPole("seo");
export const URL_PAGE = pole.href;

export const FIL = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: pole.nomCourt },
];

const MERCIAVIS_URL = "https://merciavis.fr";
const OUTIL = pole.outils[0];
const DIAGNOSTIC = getDiagnostic("seo-diagnostic-referencement")!;
/** Sous-pages des volets 2 et 3 (ancres descriptives dans poles.ts). */
const SEO_LOCAL = getSousPage("seo", "/services/seo/seo-local");
const VISIBILITE_IA = getSousPage("seo", "/services/seo/visibilite-ia");

export const FAQ: FaqItem[] = [
  {
    q: "Combien coûte le référencement naturel avec ConvertiLab ?",
    a: "Le forfait commence à 500 € par mois, 6 mois minimum. Le montant exact dépend du nombre de pages, de la concurrence sur vos requêtes et du volume de contenu à produire. Vous recevez un devis écrit avant tout engagement. L'audit SEO complet peut aussi être commandé seul, sur devis.",
  },
  {
    q: "Au bout de combien de temps voit-on les premiers résultats SEO ?",
    a: "Comptez 3 à 6 mois pour les premiers effets mesurables : des pages qui remontent, des impressions qui augmentent dans la Search Console, puis des visites et des demandes. Google met du temps à réévaluer un site.",
  },
  {
    q: "Pourquoi un engagement de 6 mois minimum ?",
    a: "Parce qu'un référencement arrêté au bout de deux mois ne produit presque rien : les corrections, le contenu et les liens s'accumulent, et Google a besoin de plusieurs passages pour en tenir compte. Six mois est la durée minimale pour juger honnêtement. Ensuite, vous décidez mois par mois.",
  },
  {
    q: "Garantissez-vous la première position sur Google ?",
    a: "Non, et personne ne le peut : c'est Google qui classe les pages, et il change ses règles plusieurs fois par an. Une agence qui vous garantit la première position vous vend une promesse qu'elle ne contrôle pas. Nous nous engageons sur ce que nous maîtrisons : le travail réalisé chaque mois, la transparence des rapports et les corrections apportées quand une action ne donne rien.",
  },
  {
    q: "Quelle différence entre l'outil gratuit et l'audit SEO complet ?",
    a: "L'outil gratuit analyse une page en 60 secondes (balises, vitesse, données structurées, mobile, robots d'IA) et rend un score avec un rapport PDF. L'audit complet, réalisé par nous, couvre tout le site, vos positions et vos concurrents, avec un plan d'action priorisé.",
  },
  {
    q: "Qui rédige les contenus, et que devez-vous fournir ?",
    a: "Nous rédigeons les pages et les articles à partir d'un échange avec vous sur votre métier, vos clients et vos prix. Vous relisez et validez chaque contenu avant publication : c'est le seul temps que nous vous demandons, environ une relecture par mois. Photos, chiffres et exemples réels de votre activité rendent les contenus plus crédibles pour Google comme pour les IA.",
  },
  {
    q: "Qu'est-ce que le SEO local, et que faites-vous sur ma fiche Google ?",
    a: "Le référencement local vise les recherches avec une ville ou un « près de moi ». Nous complétons votre fiche d'établissement Google (catégories, services, photos, publications), nous vérifions vos coordonnées sur le web et nous vous aidons à obtenir des avis Google régulièrement avec MerciAvis, notre outil.",
  },
  {
    q: "Pouvez-vous nous faire apparaître dans ChatGPT ou dans les AI Overviews de Google ?",
    a: "Personne ne peut le promettre : ces outils choisissent leurs sources et changent souvent. Nous mettons toutes les chances de votre côté : contenu qui répond aux questions de vos clients, données structurées propres, fichier llms.txt, fiches à jour, robots d'IA autorisés. Inclus dans la méthode, sans supplément.",
  },
  {
    q: "Travaillez-vous seulement à Rueil-Malmaison et à Paris ?",
    a: "Nous sommes installés à Rueil-Malmaison (92) et nous intervenons à Paris, à La Défense et dans toute l'Île-de-France. Le SEO se fait à distance : nous accompagnons aussi des clients partout en France.",
  },
];

/* ------------------------------------------------------------------ */
/* Données de la page                                                  */
/* ------------------------------------------------------------------ */

/** Trois coches du hero partagé (PoleHero n'en affiche jamais plus de trois). */
const REASSURANCE_HERO = [
  "Vérification gratuite en 60 secondes",
  "Devis écrit avant tout engagement",
  "6 mois minimum, puis libre mois par mois",
];

const CONSTAT = [
  {
    icon: EyeOff,
    titre: "Invisible sur vos mots-clés",
    texte:
      "Vos clients tapent votre métier et votre ville. Ils tombent sur vos concurrents ou sur des annuaires, jamais sur vous.",
  },
  {
    icon: TrendingDown,
    titre: "Un trafic qui stagne",
    texte:
      "Le site est en ligne depuis des mois, les visites ne bougent pas et personne ne vous a expliqué pourquoi.",
  },
  {
    icon: Coins,
    titre: "Investi sans résultat",
    texte:
      "Vous avez déjà payé un prestataire ou des publicités, sans voir de demande arriver ni recevoir de rapport lisible.",
  },
];

interface SousPage {
  icon: LucideIcon;
  numero: string;
  titre: string;
  texte: string;
  prix: string;
  points: string[];
  lien: { href: string; label: string };
  /** Maquette d'exemple propre à la sous-page (composants ./maquettes/Mock*, mention « Exemple » portée par la maquette). */
  illustration: ReactNode;
}

/** Les quatre sous-pages du pôle, dans l'ordre de poles.ts (ancres descriptives). */
const SOUS_PAGES: SousPage[] = [
  {
    icon: Search,
    numero: "01",
    titre: "Référencement naturel",
    texte:
      "Technique, contenus, maillage et liens : votre site remonte sur les requêtes que tapent vos clients, à Paris, dans le 92 ou partout en France. Un forfait mensuel, un rapport d'une page.",
    prix: pole.prix,
    points: [
      "Audit complet et plan d'action priorisé",
      "Corrections techniques, vitesse, maillage interne",
      "Contenus rédigés et publiés chaque mois",
    ],
    lien: pole.sousPages[0],
    illustration: <MockCourbePositions compact />,
  },
  {
    icon: FileSearch,
    numero: "02",
    titre: "Audit SEO complet",
    texte:
      "Tout votre site passé au crible : technique, contenu, positions réelles, concurrents, fiche Google, robots d'IA. Un rapport écrit et un plan d'action classé par gravité.",
    prix: "sur devis, inclus au démarrage du forfait",
    points: [
      "Six volets, sur tout le site et pas seulement l'accueil",
      "Plan d'action : cette semaine, ce mois-ci, ce trimestre",
      "Une heure de restitution en visio",
    ],
    lien: pole.sousPages[1],
    illustration: <MockJaugeAudit compact />,
  },
  {
    icon: MapPin,
    numero: "03",
    titre: "SEO local : fiche Google et avis",
    texte:
      "Fiche d'établissement, avis clients, coordonnées cohérentes, pages villes : figurer parmi les trois fiches affichées quand on cherche votre métier dans votre ville.",
    prix: "inclus dans le forfait",
    points: [
      "Fiche Google complétée et suivie chaque mois",
      "Avis Google collectés avec MerciAvis, notre outil",
      "Nom, adresse et téléphone identiques partout",
    ],
    lien: SEO_LOCAL,
    illustration: <MockPackLocal compact />,
  },
  {
    icon: Bot,
    numero: "04",
    titre: "Visibilité dans les IA",
    texte:
      "ChatGPT, Perplexity, Google AI Overviews : un site lisible et citable par les assistants, avec ses sources. Inclus dans la méthode, sans supplément.",
    prix: "inclus, sans supplément",
    points: [
      "Contenu structuré en questions et réponses",
      "Données structurées schema.org complètes",
      "Fichier llms.txt et robots d'IA autorisés",
    ],
    lien: VISIBILITE_IA,
    illustration: <MockReponseIa compact />,
  },
];

const IA_LEVIERS = [
  {
    icon: MessageSquareQuote,
    titre: "Un contenu citable",
    texte: "Des réponses directes aux questions de vos clients, avec des faits, des prix et des délais que l'IA peut reprendre.",
  },
  {
    icon: Sparkles,
    titre: "Des données structurées propres",
    texte: "Organisation, service, FAQ, avis : le balisage schema.org qui aide Google et les IA à comprendre qui vous êtes.",
  },
  {
    icon: FileText,
    titre: "Un fichier llms.txt et des robots autorisés",
    texte:
      "Un résumé de votre activité pour les modèles de langage, et un fichier robots.txt qui laisse entrer les robots de ChatGPT, Claude et Perplexity (GPTBot, ClaudeBot, PerplexityBot).",
  },
  {
    icon: Link2,
    titre: "Des fiches et des mentions cohérentes",
    texte: "Fiche Google, annuaires, réseaux : les mêmes informations partout, pour que l'IA n'ait aucun doute sur votre entreprise.",
  },
];

const ETAPES = [
  {
    repere: "Semaine 1",
    titre: "Audit et point de départ",
    icon: ClipboardList,
    texte: "Technique, contenu, positions actuelles, fiche Google, accès des robots d'IA : vous savez d'où vous partez.",
  },
  {
    repere: "Semaine 2",
    titre: "Mots-clés, pages cibles et devis écrit",
    icon: Target,
    texte:
      "Les requêtes que tapent vraiment vos clients, à Paris ou dans le 92, la page de votre site qui doit répondre à chacune, et le devis qui détaille les actions.",
  },
  {
    repere: "Mois 1",
    titre: "Corrections techniques",
    icon: Wrench,
    texte: "Balises, vitesse, mobile, maillage interne, données structurées, indexation : le socle de tout le reste.",
  },
  {
    repere: "En continu",
    titre: "Contenu, fiche Google, avis et liens",
    icon: FileText,
    texte:
      "Pages de service, articles et questions-réponses écrits pour vos clients, structurés pour Google et pour les IA. Fiche complétée, avis collectés, liens entrants obtenus proprement.",
  },
  {
    repere: "Chaque mois",
    titre: "Rapport et ajustements",
    icon: ChartLine,
    texte: "Positions, impressions, visites, demandes, tirés de votre Search Console. Ce qui ne bouge pas est corrigé, pas caché.",
  },
];

const LIVRABLES = [
  {
    icon: ClipboardList,
    titre: "Un audit écrit et un plan priorisé",
    texte: "Ce qui bloque, ce qui rapporte, dans quel ordre. Le document reste à vous.",
  },
  {
    icon: FileText,
    titre: "Des contenus publiés chaque mois",
    texte: "Pages et articles rédigés, relus avec vous et mis en ligne, balises et données structurées comprises.",
  },
  {
    icon: MapPin,
    titre: "Une fiche Google optimisée et suivie",
    texte: "Catégories, services, photos, publications, réponses aux avis : la fiche vit chaque mois.",
  },
  {
    icon: ChartLine,
    titre: "Un rapport mensuel lisible",
    texte: "Positions, impressions, clics et demandes, tirés de votre Search Console. Une page, pas trente.",
  },
];

const REQUETES_VERIFIABLES = ["facebook ads paris", "agence facebook paris", "agence adwords paris"];

interface Formule {
  titre: string;
  description: string;
  prix: string;
  prixDetail: string;
  points: string[];
  lien: { href: string; label: string };
  recommandee?: boolean;
}

const FORMULES: Formule[] = [
  {
    titre: "Forfait référencement naturel",
    description: "Le forfait mensuel : technique, contenu, fiche Google, avis, visibilité IA et mesure, sur la durée.",
    prix: pole.prix,
    prixDetail: "6 mois minimum, devis écrit avant tout engagement",
    points: [
      "Audit complet et plan d'action au démarrage",
      "Corrections techniques et maillage interne",
      "Contenus rédigés et publiés chaque mois",
      "Fiche Google et avis clients avec MerciAvis",
      "Visibilité dans les IA incluse",
      "Rapport mensuel tiré de votre Search Console",
    ],
    lien: pole.sousPages[0],
    recommandee: true,
  },
  {
    titre: "Audit SEO complet",
    description: "Tout votre site passé au crible, avec un plan d'action à suivre seul ou avec nous.",
    prix: "sur devis",
    prixDetail: "inclus au démarrage du forfait",
    points: [
      "Technique, contenu, positions, concurrents",
      "Fiche Google et accès des robots d'IA",
      "Plan d'action priorisé, en français clair",
    ],
    lien: pole.sousPages[1],
  },
  {
    titre: "Mission sur mesure",
    description: "Un besoin précis, sans forfait : nous chiffrons la mission après un échange de 30 minutes.",
    prix: "sur devis",
    prixDetail: "prix fixe communiqué par écrit",
    points: [
      "Fiche Google et collecte d'avis, en mission ponctuelle",
      "Accompagnement SEO d'une refonte (redirections, balises)",
      "Contenus ou données structurées à la demande",
    ],
    lien: { href: "#formulaire", label: "Décrire votre besoin SEO" },
  },
];

const ENGAGEMENTS = [
  "Un devis écrit, avec le détail des actions, avant tout engagement.",
  "Un rapport chaque mois, tiré de votre Search Console.",
  "Un travail visible chaque mois : corrections, contenus, liens, tous listés dans le rapport.",
  "Accès, contenus, audit et fiche Google restent à vous si vous arrêtez.",
];

const OPTIONS_OBJECTIF = [
  { value: "local", label: "Être trouvé dans ma ville", icon: <MapPin />, desc: "Fiche Google, avis, recherches locales" },
  { value: "organique", label: "Recevoir plus de demandes depuis Google", icon: <Search />, desc: "Référencement naturel, contenu" },
  { value: "ia", label: "Apparaître dans ChatGPT et les IA", icon: <Bot />, desc: "Visibilité IA, contenu citable" },
  { value: "audit", label: "Comprendre pourquoi mon site ne décolle pas", icon: <FileSearch />, desc: "Audit SEO complet" },
];

const lienClasse =
  "font-semibold text-primary-texte underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm";

const carteClasse =
  "rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_18px_36px_-18px_rgba(124,58,237,0.28)] motion-reduce:transition-none";

/* ------------------------------------------------------------------ */
/* Carte de vérification SEO (aside du hero)                           */
/* ------------------------------------------------------------------ */

/**
 * Carte « Votre site, analysé en 60 secondes » : formulaire natif vers
 * /seo-check?url= (aucun JavaScript requis), posée à plat dans l'aside du
 * hero partagé (c'est un formulaire, pas une maquette en perspective).
 * Largeur alignée sur les maquettes des sous-pages (max-w-md, 448 px) : à
 * cette largeur, la carte fait environ 370 px de haut. Fond blanc à 85 %
 * sans backdrop-blur, comme les cartes de chiffres de PoleHero : un filtre
 * posé sur le mesh animé se recalculerait à chaque image.
 */
function CarteVerificationSeo() {
  return (
    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-border bg-white/85 p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(124,58,237,0.25)] sm:p-8">
      <BorderBeam size={90} duration={10} />
      <div className="flex items-center gap-3">
        <span
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-md"
          aria-hidden="true"
        >
          <Search className="h-5 w-5" strokeWidth={2} />
        </span>
        <div>
          <p className="text-lg font-semibold leading-tight text-foreground">Votre site, analysé en 60 secondes</p>
          <p className="text-sm text-muted-foreground">Gratuit, sans engagement, rapport PDF par email.</p>
        </div>
      </div>

      <form action={OUTIL.href} method="get" className="mt-6">
        <label htmlFor="seo-url" className="block text-sm font-medium text-foreground">
          L&apos;adresse de votre site
        </label>
        <div className="mt-1.5 flex flex-col gap-2 sm:flex-row">
          <input
            id="seo-url"
            name="url"
            type="text"
            inputMode="url"
            autoComplete="url"
            placeholder="www.votre-site.fr"
            required
            maxLength={200}
            className="block min-h-11 w-full min-w-0 flex-1 rounded-full border border-border bg-background px-5 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
          <button
            type="submit"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 text-sm font-semibold text-white shadow-md transition-colors hover:from-purple-700 hover:to-pink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Analyser mon site
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </form>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Ce que la vérification analyse">
        {["Balises et titres", "Vitesse", "Mobile", "Données structurées", "Robots d'IA"].map((item) => (
          <li key={item} className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-slate-700">
            {item}
          </li>
        ))}
      </ul>
      {/* Ce que renvoie l'outil : un score, des priorités classées, un rapport. Aucun chiffre de résultat. */}
      <dl className="mt-5 grid grid-cols-3 gap-2" aria-label="Ce que vous recevez">
        {[
          { valeur: "/100", libelle: "un score global" },
          { valeur: "1, 2, 3", libelle: "vos priorités classées" },
          { valeur: "PDF", libelle: "le rapport par email" },
        ].map((c) => (
          <div key={c.libelle} className="rounded-xl border border-border/80 bg-white px-3 py-2.5">
            <dd className="text-base font-bold leading-none tracking-tight text-foreground">{c.valeur}</dd>
            <dt className="mt-1 text-[11px] leading-snug text-muted-foreground">{c.libelle}</dt>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-xs text-muted-foreground">
        Vous préférez une lecture humaine ?{" "}
        <Link href="#formulaire" className={lienClasse}>
          Décrivez votre objectif
        </Link>
        , nous vous répondons sous 24 h.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function SeoPageContent() {
  return (
    <div className="pt-16">
      <FilAriane elements={FIL} />

      {/* ---------------------------------------------------------- Hero */}
      {/* Hero partagé : H1 et texte rendus côté serveur ; à droite, la carte de vérification SEO gratuite,
          à plat (pas de perspective : c'est un formulaire), affichée sous la colonne de texte sur mobile. */}
      <PoleHero
        surtitre={SURTITRE_ZONE}
        titre="Agence SEO à Rueil-Malmaison et Paris : référencement naturel, SEO local et visibilité dans les IA"
        motsCles={["référencement naturel", "SEO local", "SEO", "IA"]}
        texte={[
          "Nous travaillons votre site pour Google, votre fiche pour les résultats locaux et votre contenu pour les réponses de ChatGPT, Perplexity et Google AI Overviews. Un forfait clair à partir de 500 € par mois, un audit complet, des rapports que vous pouvez vérifier vous-même.",
          "Premiers effets en 3 à 6 mois, et aucune position promise : nous vous le disons dès le premier rendez-vous.",
        ]}
        reassurance={REASSURANCE_HERO}
        boutonPrimaire={{ href: "#formulaire", label: "Demander un devis SEO écrit" }}
        boutonSecondaire={{ href: SITE.calendly, label: LABEL_CALENDLY, external: true }}
        chiffres={[...CHIFFRES_COMMUNS, { valeur: "3 à 6 mois", libelle: "avant les premiers effets SEO" }]}
        aside={<CarteVerificationSeo />}
        asideRelief={false}
        asideMobile
      />

      {/* ------------------------------------------------------ Diagnostic */}
      <SectionOutil badge="Diagnostic gratuit" titre={DIAGNOSTIC.titre} accroche={DIAGNOSTIC.accroche} obtenez={DIAGNOSTIC.obtenez}>
        <DiagnosticInteractif diagnostic={DIAGNOSTIC} page={URL_PAGE} />
      </SectionOutil>

      {/* ------------------------------------------------------ Le constat */}
      <Reveal>
        <PainPoints
          id="constat"
          surtitre="Le constat"
          titre="Pourquoi votre site n'apparaît-il pas sur Google ?"
          intro="Trois situations qui reviennent dans presque tous nos premiers rendez-vous. Aucune n'est une fatalité : chacune a une cause que l'audit met à plat."
          points={CONSTAT}
        />
      </Reveal>

      {/* ------------------------------------------------ Quatre sous-pages */}
      <PoleSection
        id="offres"
        surtitre="Nos prestations SEO"
        titre={"Quelles prestations de référencement proposons\u2011nous ?"}
        intro="Une agence de référencement naturel pour les commerces, artisans, cabinets et petites entreprises d'Île-de-France : quatre pages, une seule méthode, l'audit complet comme point de départ. Chaque carte montre, en exemple, ce que vous verrez."
      >
        <ul className="grid gap-6 md:grid-cols-2">
          {SOUS_PAGES.map(({ icon: Icon, numero, titre, texte, prix, points, lien, illustration }, i) => (
            <li key={titre} className="h-full">
              <Reveal delay={i * 0.08} className="h-full">
                <CardContainer containerClassName="h-full" className="h-full w-full" intensite={56}>
                  <CardBody className="flex h-full w-full flex-col rounded-3xl border border-border bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04),0_20px_40px_-24px_rgba(15,23,42,0.2)]">
                    {/* Maquette d'exemple de la sous-page (mention « Exemple » portée par la maquette) : courbe, jauge, pack local ou réponse d'IA. */}
                    <CardItem translateZ={20} className="w-full rounded-t-3xl border-b border-border bg-muted/30 p-4 sm:p-5">
                      {illustration}
                    </CardItem>
                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <CardItem translateZ={24} className="flex w-full items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wide text-purple-700">Sous-page {numero}</span>
                        <span
                          className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15"
                          aria-hidden="true"
                        >
                          <Icon className="h-5 w-5" strokeWidth={1.75} />
                        </span>
                      </CardItem>
                      <CardItem as="h3" translateZ={36} className="mt-4 w-full text-xl font-semibold text-foreground">
                        {titre}
                      </CardItem>
                      <CardItem as="p" translateZ={20} className="mt-2 w-full leading-relaxed text-muted-foreground">
                        {texte}
                      </CardItem>
                      <CardItem as="p" translateZ={28} className="mt-4 w-full text-lg font-bold text-foreground">
                        {prix}
                      </CardItem>
                      <CardItem as="ul" translateZ={16} className="mt-4 w-full space-y-2">
                        {points.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-sm text-foreground">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </CardItem>
                      <CardItem translateZ={20} className="mt-auto w-full pt-6">
                        <BoutonLien {...lien} variante="discret" className="text-sm font-semibold" />
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Pas encore de site, ou un site impossible à optimiser ? Commencez par{" "}
          <Link href="/demande-maquette" className={lienClasse}>
            une maquette gratuite de votre futur site
          </Link>
          . Proche de La Défense ? Voyez ce que nous faisons pour{" "}
          <Link href={pole.pageVille.href} className={lienClasse}>
            les entreprises de La Défense et de Puteaux
          </Link>
          .
        </p>
      </PoleSection>

      {/* --------------------------------------------------------- SEO local */}
      <section id="seo-local" className="scroll-mt-24 bg-muted/30 py-16 sm:py-20">
        <Conteneur>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Surtitre>Référencement local</Surtitre>
              <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                Comment être trouvé dans votre ville grâce à votre fiche Google et vos avis ?
              </h2>
              <div className="mt-4 space-y-3 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Quand on cherche « coiffeur près de moi » ou « expert-comptable Puteaux », Google affiche d&apos;abord
                  trois fiches d&apos;établissement avec leur note. C&apos;est le référencement local, souvent le levier
                  le plus rentable pour un commerce ou un artisan.
                </p>
                <p>
                  Nous complétons votre fiche Google (catégories, services, photos, publications), nous répondons aux avis
                  avec vous et nous vérifions vos coordonnées partout sur le web. Les avis Google comptent double : ils
                  rassurent vos clients et pèsent dans le classement local.
                </p>
              </div>
              <div className="mt-6">
                <BoutonLien href={SEO_LOCAL.href} label={SEO_LOCAL.label} variante="secondaire" />
              </div>
            </div>

            <Reveal className="lg:col-span-5">
              <div className={`${carteClasse} p-6 sm:p-7`}>
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-pink-600 ring-1 ring-pink-100"
                    aria-hidden="true"
                  >
                    <MessageSquareQuote className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-purple-700">Notre outil</p>
                    <h3 className="text-lg font-semibold text-foreground">MerciAvis, pour obtenir des avis Google</h3>
                  </div>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Pour obtenir des avis régulièrement, nous avons créé MerciAvis : une carte NFC ou un QR code au comptoir,
                  et votre client laisse son avis en trente secondes. Proposé à nos clients SEO, il fonctionne aussi seul,
                  sans forfait.
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Carte NFC ou QR code posé au comptoir",
                    "Le client arrive directement sur votre fiche Google",
                    "Suivi des avis reçus dans un tableau de bord",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <a
                    href={MERCIAVIS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-primary-texte underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Découvrir MerciAvis, notre outil d&apos;avis clients
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only"> (ouvre dans un nouvel onglet)</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </Conteneur>
      </section>

      {/* ---------------------------------------------------- Visibilité IA */}
      <section
        id="visibilite-ia"
        className="relative isolate scroll-mt-24 overflow-hidden bg-slate-950 py-16 text-white sm:py-20"
      >
        {/* Un seul accent coloré : halo violet en haut, très discret (même recette que SectionSombre). */}
        <div
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 mx-auto h-80 w-[80%] max-w-3xl rounded-full bg-[radial-gradient(circle,hsl(270_70%_60%_/_0.28),transparent_65%)] blur-3xl"
          aria-hidden="true"
        />
        <Conteneur>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-purple-300">Visibilité dans les IA</p>
              <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Comment apparaître dans les réponses de ChatGPT, Perplexity et Google AI Overviews ?
              </h2>
              <div className="mt-4 space-y-3 text-lg leading-relaxed text-slate-300">
                <p>
                  De plus en plus de vos prospects posent leur question à une IA plutôt qu&apos;à Google : « quel
                  paysagiste dans le 92 ? ». Ces outils citent des sources. Notre travail consiste à rendre votre site
                  lisible et citable par eux : c&apos;est ce qu&apos;on appelle le GEO, ou référencement IA.
                </p>
                <p>
                  Nous nous engageons sur le travail : quatre leviers, appliqués à chaque page que nous produisons, sans
                  supplément.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <SeoOrbite />
              <p className="mt-2 text-center text-xs text-slate-400">
                Google, ChatGPT, Perplexity, AI Overviews, Claude : les outils qui citent des sources, et les signaux
                que nous travaillons pour qu&apos;ils vous trouvent.
              </p>
            </div>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {IA_LEVIERS.map(({ icon: Icon, titre, texte }, i) => (
              <li key={titre} className="h-full">
                <Reveal delay={i * 0.08} className="h-full">
                  <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors duration-300 hover:border-purple-300/40 hover:bg-white/[0.07] motion-reduce:transition-none">
                    <span
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-400/15 text-purple-200"
                      aria-hidden="true"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-4 font-semibold text-white">{titre}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-300">{texte}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BoutonLien href={OUTIL.href} label="Mesurer votre visibilité IA avec l'outil gratuit" variante="secondaire" />
            <BoutonLien
              href={VISIBILITE_IA.href}
              label={VISIBILITE_IA.label}
              variante="discret"
              className="text-purple-200 hover:text-white"
            />
          </div>
        </Conteneur>
      </section>

      {/* ---------------------------------------------------------- Méthode */}
      <PoleSection
        id="methode"
        fond="gris"
        surtitre="Notre méthode"
        titre="Comment travaillons-nous votre référencement, mois après mois ?"
        intro="Un ordre précis, des repères dans le temps, et un rapport chaque mois pour juger sur pièces."
      >
        <Reveal>
          <Timeline etapes={ETAPES} />
        </Reveal>
      </PoleSection>

      {/* -------------------------------------------------------- Livrables */}
      <PoleSection
        id="livrables"
        surtitre="Ce que vous obtenez"
        titre="Que recevez-vous concrètement chaque mois ?"
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LIVRABLES.map(({ icon: Icon, titre, texte }, i) => (
            <li key={titre} className="h-full">
              <Reveal delay={i * 0.08} className="h-full">
                <article className={`${carteClasse} flex h-full flex-col p-6`}>
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 font-semibold text-foreground">{titre}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{texte}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </PoleSection>

      {/* ----------------------------------------------------------- Preuve */}
      <section id="preuve" className="bg-muted/30 py-16 sm:py-20">
        <Conteneur>
          <div className="mx-auto max-w-3xl text-center">
            <Surtitre>Ce que vous pouvez vérifier</Surtitre>
            <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">
              Ce que vous pouvez vérifier vous-même, dès maintenant
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Pas de courbe inventée ni de témoignage écrit pour l&apos;occasion : trois choses que vous pouvez contrôler
              sans nous croire sur parole.
            </p>
          </div>

          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            <li className="h-full">
              <Reveal className="h-full">
                <article className={`${carteClasse} flex h-full flex-col p-6`}>
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"
                    aria-hidden="true"
                  >
                    <Search className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">L&apos;outil gratuit du site</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Il analyse n&apos;importe quelle page en 60 secondes et rend un score sur la technique, le contenu, le
                    mobile, les données structurées et l&apos;accès des robots d&apos;IA, avec un rapport PDF.
                  </p>
                  <div className="mt-auto pt-5">
                    <BoutonLien
                      href={OUTIL.href}
                      label="Lancer la vérification SEO gratuite de votre site"
                      variante="discret"
                      className="text-sm font-semibold"
                    />
                  </div>
                </article>
              </Reveal>
            </li>
            <li className="h-full">
              <Reveal delay={0.08} className="h-full">
                <article className={`${carteClasse} flex h-full flex-col p-6`}>
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"
                    aria-hidden="true"
                  >
                    <Globe className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Nos propres pages</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Sur ces requêtes, notre site apparaît en page 1 ou 2 de Google. Ce sont les méthodes que nous
                    appliquons à vos pages. Tapez-les pour vérifier.
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Requêtes à vérifier sur Google">
                    {REQUETES_VERIFIABLES.map((r) => (
                      <li
                        key={r}
                        className="rounded-full border border-border bg-muted/40 px-3 py-1 font-mono text-xs text-slate-700"
                      >
                        {r}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto pt-5 text-xs text-muted-foreground">
                    Positions moyennes relevées dans notre Search Console sur 90 jours (septembre 2026). Elles évoluent
                    en permanence et ne préjugent pas des résultats de votre site.
                  </p>
                </article>
              </Reveal>
            </li>
            <li className="h-full">
              <Reveal delay={0.16} className="h-full">
                <article className={`${carteClasse} flex h-full flex-col p-6`}>
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"
                    aria-hidden="true"
                  >
                    <FileText className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Cette page elle-même</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Elle applique ce que nous vendons : un seul H1, des questions en H2, une FAQ balisée en données
                    structurées, un fil d&apos;Ariane, un fichier llms.txt et des robots d&apos;IA autorisés. Affichez le
                    code source pour vérifier.
                  </p>
                  <div className="mt-auto pt-5">
                    <BoutonLien href="#faq" label="Voir la FAQ balisée de cette page" variante="discret" className="text-sm font-semibold" />
                  </div>
                </article>
              </Reveal>
            </li>
          </ul>
        </Conteneur>
      </section>

      {/* ------------------------------------------------ CTA intermédiaire */}
      <CtaIntermediaire
        titre="Vous voulez savoir où en est votre site ?"
        texte="Lancez la vérification gratuite, ou décrivez-nous votre objectif : nous vous répondons sous 24 h avec une première lecture, sans engagement."
        bouton={{ href: "#formulaire", label: "Décrire mon objectif SEO" }}
        alternativeLabel="ou appelez-nous au"
      />

      {/* ---------------------------------------------------------- Pour qui */}
      <Reveal>
        <PourQui
          id="transparence"
          fond="gris"
          surtitre="Transparence"
          titre="Nous préférons vous dire non que vous faire perdre six mois"
          intro="Le référencement naturel demande du temps, et un peu du vôtre. Voici, franchement, quand il vaut le coup."
          pour={{
            titre: "C'est fait pour vous si...",
            items: [
              "Vous avez une activité établie et une zone ou un métier précis à viser.",
              "Vous pouvez tenir six mois avant de juger, et lire un rapport par mois.",
              "Quelqu'un chez vous peut relire et valider un contenu par mois.",
              "Vous voulez des demandes régulières sans payer chaque clic.",
            ],
          }}
          pasPour={{
            titre: "Ce n'est pas pour vous si...",
            items: [
              "Votre budget est inférieur à 500 € par mois : commencez par la vérification gratuite et votre fiche Google, puis revenez.",
              "Vous voulez la première position en 30 jours : personne ne peut vous la donner honnêtement.",
              "Personne ne pourra valider les contenus ni répondre à nos questions sur votre métier.",
              "Vous n'avez pas encore de site : la maquette gratuite est le bon point de départ.",
            ],
          }}
          engagement={{
            titre: "Notre engagement, écrit noir sur blanc",
            texte: [
              "Un devis avec le détail des actions avant tout engagement, un rapport chaque mois tiré de votre Search Console, et des corrections quand une action ne donne rien.",
              "Au bout des six mois, si les indicateurs n'ont pas bougé, nous vous le disons tel quel. Vous repartez avec l'audit, les contenus, les accès et la fiche Google : tout reste à vous.",
            ],
          }}
        />
      </Reveal>

      {/* --------------------------------------------------------- Formules */}
      <section id="prix" className="scroll-mt-24 bg-background py-16 sm:py-20">
        <Conteneur>
          <div className="mx-auto max-w-3xl text-center">
            <Surtitre>Prix et engagement</Surtitre>
            <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">
              Combien coûte le SEO avec une agence à <span className="whitespace-nowrap">Rueil-Malmaison</span> ?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Des prix annoncés avant le premier rendez-vous, un engagement limité à ce qu&apos;il faut pour juger du
              résultat.
            </p>
          </div>

          <ul className="mt-10 grid gap-6 lg:grid-cols-3">
            {FORMULES.map((f, i) => (
              <li key={f.titre} className="h-full">
                <Reveal delay={i * 0.1} className="h-full">
                  <article
                    className={
                      f.recommandee
                        ? "relative flex h-full flex-col rounded-3xl border border-primary/40 bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(124,58,237,0.35)] sm:p-7"
                        : `${carteClasse} flex h-full flex-col rounded-3xl p-6 sm:p-7`
                    }
                  >
                    {f.recommandee && (
                      <>
                        <BorderBeam size={100} duration={12} />
                        <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
                          Le plus demandé
                        </span>
                      </>
                    )}
                    <h3 className="text-xl font-semibold text-foreground">{f.titre}</h3>
                    <p className="mt-2 text-muted-foreground">{f.description}</p>
                    <p className="mt-5">
                      <span className="text-2xl font-bold text-foreground">{f.prix}</span>
                      <span className="block text-sm text-muted-foreground">{f.prixDetail}</span>
                    </p>
                    <ul className="mt-5 space-y-2">
                      {f.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-6">
                      {f.recommandee ? (
                        <BoutonLien {...f.lien} variante="primaire" className="w-full" />
                      ) : (
                        <BoutonLien {...f.lien} variante="secondaire" className="w-full" />
                      )}
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal>
            <div className="mx-auto mt-8 grid max-w-5xl gap-6 lg:grid-cols-5">
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 lg:col-span-3">
                <h3 className="font-semibold text-foreground">Ce que nous nous engageons à faire</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {ENGAGEMENTS.map((e) => (
                    <li key={e} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-center rounded-2xl border border-border bg-card p-6 lg:col-span-2">
                <h3 className="font-semibold text-foreground">Pas sûr de la formule ?</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  La vérification gratuite vous donne votre point de départ en 60 secondes. Le devis, lui, est toujours
                  écrit après l&apos;audit.
                </p>
                <div className="mt-4">
                  <BoutonLien href={OUTIL.href} label={OUTIL.label} variante="discret" className="text-sm font-semibold" />
                </div>
              </div>
            </div>
          </Reveal>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-muted-foreground">
            TVA non applicable, art. 293 B du CGI. Le montant du forfait est fixé par écrit après l&apos;audit, selon le
            nombre de pages et la concurrence sur vos requêtes.
          </p>
        </Conteneur>
      </section>

      {/* -------------------------------------------------------------- FAQ */}
      <PoleFAQ
        id="faq"
        surtitre="Vos questions"
        titre="Vos questions sur le référencement naturel, local et IA"
        items={FAQ}
        lien={{ href: "/contact", label: "Poser une autre question à l'agence" }}
      />

      {/* ----------------------------------------------------- Autres pôles */}
      <Reveal>
        <PoleAutresPoles
          id="autres-poles"
          slug="seo"
          surtitre="Les autres leviers"
          titre="Nos trois autres pôles, au même endroit"
        />
      </Reveal>

      {/* ------------------------------------------------- Formulaire final */}
      <FormulaireFinal
        id="formulaire"
        pole="seo"
        page={URL_PAGE}
        surtitre="Parlons de votre référencement"
        titre="Dites-nous votre objectif, nous vous répondons sous 24 h"
        intro="Une question d'abord, vos coordonnées ensuite. Vous recevez une première lecture de votre situation, sans engagement."
        question={{
          libelle: "Votre objectif",
          aide: "Aucune coordonnée demandée à cette étape.",
          options: OPTIONS_OBJECTIF,
        }}
        titreEtape2="Où vous répondre ?"
        boutonLabel="Recevoir ma réponse sous 24 h"
        calendlyLabel="ou réservez 30 min avec le fondateur"
        confirmation={{
          titre: "Merci, votre demande est bien reçue.",
          texte: "Nous revenons vers vous sous 24 h avec une première lecture de votre situation SEO. Si vous préférez en parler de vive voix, réservez un créneau.",
        }}
      />

      {/* ---------------------------------------------------- Dernier appel */}
      <PoleCTA
        id="contact"
        titre="Un projet SEO, une question ?"
        texte="Réservez 30 minutes, c'est gratuit et vous parlez au fondateur."
        calendlyLabel={LABEL_CALENDLY}
        contactLabel="Écrire à l'agence"
        afficherTelephone
      />

      {/* « Vérification » et non « audit » : l'audit SEO complet est une prestation sur devis (FORMULES, FAQ). */}
      <StickyCtaBar
        label="Vérifier mon site en 60 s"
        href={OUTIL.href}
        mentions={["Gratuit", "Sans engagement", "Résultat en 60 secondes"]}
        formulaireId="formulaire"
      />
    </div>
  );
}
