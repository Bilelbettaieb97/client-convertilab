import Link from "next/link";
import {
  Bot,
  ChartLine,
  Check,
  CircleHelp,
  ClipboardList,
  Coins,
  FileSearch,
  FileText,
  Globe,
  KeyRound,
  Link2,
  MapPin,
  MessageSquareOff,
  Network,
  PenLine,
  Search,
  ShieldCheck,
  Target,
  TrendingDown,
  UserRound,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import type { FaqItem } from "@/lib/faq-schema";
import { CHIFFRES_COMMUNS, getPole, LABEL_CALENDLY, SURTITRE_ZONE } from "@/data/poles";
import {
  Comparatif,
  CtaIntermediaire,
  Engagements,
  FilAriane,
  FormulaireFinal,
  SectionOutil,
  LienDiscret,
  PainPoints,
  PoleAutresPoles,
  PoleCTA,
  PoleFAQ,
  PoleHero,
  PoleLivrables,
  PolePreuve,
  PolePrix,
  PoleSection,
  SectionSombre,
  StickyCtaBar,
  Timeline,
  type FilArianeElement,
} from "@/components/pole";
import CarteSeoCheck from "../CarteSeoCheck";
import { BorderBeam, Reveal } from "@/components/motion";
import MockCourbePositions from "../maquettes/MockCourbePositions";

/**
 * Sous-page « Référencement naturel » du pôle SEO : le forfait mensuel
 * (audit, technique, contenus, maillage, liens, SEO local et visibilité IA
 * inclus). Composant serveur : le H1, tout le texte et la FAQ sont dans le
 * HTML rendu. Le hero est le composant partagé PoleHero (mesh, mots clés en
 * dégradé, carte en perspective) ; les autres animations (apparitions,
 * faisceau) sont des enfants "use client" importés depuis src/components/motion.
 */

export const pole = getPole("seo");
export const URL_PAGE = "/services/seo/referencement";

export const FIL: FilArianeElement[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: pole.nomCourt, href: pole.href },
  { label: "Référencement naturel" },
];

const OUTIL = pole.outils[0];
const AUDIT = pole.sousPages[1];
const SEO_LOCAL = { href: "/services/seo/seo-local", label: "Référencement local : fiche Google et avis clients" };
const VISIBILITE_IA = { href: "/services/seo/visibilite-ia", label: "Visibilité IA : être cité par ChatGPT et Perplexity" };

/** Ancre du formulaire final : cible des CTA de la page et de la barre collante. */
const ANCRE_FORMULAIRE = "#formulaire";

export const FAQ: FaqItem[] = [
  {
    q: "Combien coûte une prestation de référencement naturel ?",
    a: "Notre forfait démarre à 500 € par mois, 6 mois minimum. Le montant exact dépend de la concurrence sur vos requêtes, du nombre de pages à travailler et du volume de contenu à produire chaque mois. Vous recevez un devis écrit, avec le détail des actions, avant tout engagement. L'audit SEO complet peut aussi être commandé seul, sur devis.",
  },
  {
    q: "Au bout de combien de temps voit-on des résultats en SEO ?",
    a: "Les corrections techniques sont visibles en quelques semaines dans votre Search Console. Les positions commencent en général à bouger entre le deuxième et le troisième mois. Comptez 3 à 6 mois pour des effets mesurables : pages qui remontent, impressions en hausse, puis visites et demandes. Google met du temps à réévaluer un site, et chaque action s'ajoute aux précédentes.",
  },
  {
    q: "Pourquoi un engagement de 6 mois minimum ?",
    a: "Parce qu'un référencement arrêté au bout de deux mois ne produit presque rien : les corrections, les contenus et les liens s'accumulent, et Google a besoin de plusieurs passages pour en tenir compte. Six mois est la durée minimale pour juger honnêtement du travail. Ensuite, vous décidez mois par mois, sans préavis compliqué.",
  },
  {
    q: "Garantissez-vous la première page ou la première position sur Google ?",
    a: "Non, et personne ne le peut : c'est Google qui classe les pages, et il modifie ses règles plusieurs fois par an. Une agence qui vous garantit une position vous vend une promesse qu'elle ne contrôle pas. Nous nous engageons sur ce que nous maîtrisons : le travail réalisé chaque mois, la transparence des rapports et les corrections apportées quand une action ne donne rien.",
  },
  {
    q: "Que comprend votre travail sur les liens entrants (netlinking) ?",
    a: "Nous cherchons des liens depuis des sites en rapport avec votre métier ou votre ville : annuaires professionnels utiles, partenaires, fournisseurs, presse locale, articles invités. Nous n'achetons pas de liens en masse sur des réseaux de sites : Google les repère et les pénalise. Chaque lien obtenu est listé dans votre rapport mensuel.",
  },
  {
    q: "Qui rédige les contenus, et que devez-vous fournir ?",
    a: "Nous rédigeons les pages et les articles à partir d'un échange avec vous sur votre métier, vos clients et vos prix. Vous relisez et validez chaque contenu avant publication : c'est le seul temps que nous vous demandons, environ une relecture par mois. Vos photos, vos chiffres et vos exemples réels rendent les contenus plus crédibles pour Google comme pour les IA.",
  },
  {
    q: "La création d'un site ConvertiLab inclut-elle déjà le référencement ?",
    a: "Chaque site que nous livrons intègre le SEO de base : balises title et description, structure des titres, données structurées, sitemap, robots.txt, vitesse et affichage mobile. Le référencement continu, contenus et liens chaque mois, fait l'objet de ce forfait mensuel séparé, parce qu'il demande un travail régulier sur la durée.",
  },
  {
    q: "Quelle différence entre l'outil gratuit et l'audit SEO complet ?",
    a: "L'outil gratuit analyse une page en 60 secondes (balises, vitesse, données structurées, mobile, robots d'IA) et rend un score avec un rapport PDF. L'audit complet, réalisé par nous, couvre tout le site, vos positions actuelles, vos concurrents et votre fiche Google, avec un plan d'action priorisé. Il est inclus au démarrage du forfait.",
  },
  {
    q: "Travaillez-vous seulement à Paris et à Rueil-Malmaison ?",
    a: "Nous sommes installés à Rueil-Malmaison (92) et nous intervenons à Paris, à La Défense et dans toute l'Île-de-France. Le référencement naturel se fait à distance : nous accompagnons aussi des commerces, artisans et cabinets partout en France, avec les mêmes rapports et le même interlocuteur.",
  },
];

/* ------------------------------------------------------------------ */
/* Données de la page                                                  */
/* ------------------------------------------------------------------ */

const REASSURANCE_HERO = [
  "Audit complet au démarrage",
  "Devis écrit avant tout engagement",
  "6 mois minimum, puis libre mois par mois",
  "Un seul interlocuteur : le fondateur",
];

const CONSTAT = [
  {
    icon: Coins,
    titre: "Vous payez chaque clic, parce que le naturel n'apporte rien",
    texte:
      "Vos demandes viennent de la publicité ou du bouche-à-oreille. Dès que le budget s'arrête, le téléphone aussi. Google, lui, ne vous envoie personne.",
  },
  {
    icon: MessageSquareOff,
    titre: "Du contenu publié, sans stratégie ni mots-clés",
    texte:
      "Des articles écrits au hasard, des pages de service qui se ressemblent, aucune requête précise visée : Google ne sait pas pour quoi vous classer.",
  },
  {
    icon: TrendingDown,
    titre: "Un ancien prestataire, des rapports illisibles",
    texte:
      "Des tableaux de trente pages, des positions sur des mots que personne ne tape, et toujours aucune demande.",
  },
];

interface Levier {
  icon: LucideIcon;
  titre: string;
  texte: string;
  points: string[];
  miseEnAvant?: boolean;
}

const LEVIERS: Levier[] = [
  {
    icon: Wrench,
    titre: "Technique et vitesse",
    texte:
      "Un site que Google peut lire, indexer et charger vite. C'est le socle : sans lui, le meilleur contenu reste invisible.",
    points: [
      "Balises title, description et structure des titres sur chaque page clé",
      "Vitesse, affichage mobile et Core Web Vitals corrigés",
      "Données structurées schema.org, sitemap, robots.txt, indexation suivie",
    ],
  },
  {
    icon: PenLine,
    titre: "Contenus rédigés chaque mois",
    texte:
      "Des pages de service et des articles qui répondent aux questions que vos clients tapent réellement, relus et validés par vous avant publication.",
    points: [
      "Recherche des requêtes de vos clients, à Paris, dans le 92 ou dans votre ville",
      "Une page cible par requête importante, structurée en questions et réponses",
      "Textes rédigés avec vos prix, vos délais et vos exemples réels",
    ],
    miseEnAvant: true,
  },
  {
    icon: Network,
    titre: "Architecture et maillage interne",
    texte:
      "Les liens entre vos propres pages transmettent l'autorité de vos pages fortes vers vos pages faibles et aident Google à comprendre votre site.",
    points: ["Pages piliers et sous-pages reliées entre elles", "Ancres descriptives, fil d'Ariane, pages orphelines supprimées"],
  },
  {
    icon: Link2,
    titre: "Liens entrants obtenus proprement",
    texte:
      "Des sites en rapport avec votre métier ou votre ville qui parlent de vous : annuaires utiles, partenaires, presse locale, articles invités.",
    points: ["Aucun lien acheté en masse sur des réseaux de sites", "Chaque lien obtenu listé dans le rapport mensuel"],
  },
  {
    icon: MapPin,
    titre: "Local et IA, inclus",
    texte:
      "Votre fiche Google, vos avis clients et un contenu que ChatGPT, Perplexity et Google AI Overviews peuvent citer, sans supplément.",
    points: ["Fiche d'établissement complétée et suivie, avis collectés avec MerciAvis", "Fichier llms.txt, robots d'IA autorisés, FAQ balisées"],
  },
];

const ETAPES = [
  {
    repere: "Jour 1",
    titre: "Appel de 30 minutes et devis écrit",
    icon: ClipboardList,
    texte:
      "Votre activité, votre zone, vos clients, votre site actuel. Sous 24 h, un devis écrit avec le détail des actions et le prix mensuel. Si le SEO n'est pas le bon levier pour vous, nous vous le disons.",
  },
  {
    repere: "Semaines 1 et 2",
    titre: "Audit complet et pages cibles",
    icon: FileSearch,
    texte:
      "Technique, contenu, positions actuelles, concurrents, fiche Google, accès des robots d'IA. Puis la liste des requêtes que tapent vos clients et la page de votre site qui doit répondre à chacune, validée avec vous.",
  },
  {
    repere: "Mois 1",
    titre: "Corrections techniques",
    icon: Wrench,
    texte:
      "Balises, vitesse, mobile, maillage interne, données structurées, indexation. Le socle est posé avant de produire le moindre contenu.",
  },
  {
    repere: "En continu",
    titre: "Contenus, liens, fiche Google",
    icon: FileText,
    texte:
      "Pages de service et articles rédigés, relus avec vous et publiés. Liens entrants obtenus proprement. Fiche Google complétée, avis collectés. Contenu structuré pour Google et pour les IA.",
  },
  {
    repere: "Chaque mois",
    titre: "Rapport d'une page et ajustements",
    icon: ChartLine,
    texte:
      "Positions, impressions, clics et demandes, tirés de votre Search Console, avec la liste de ce qui a été fait. Ce qui ne bouge pas est corrigé, pas caché.",
  },
];

const LIVRABLES = [
  {
    icon: ClipboardList,
    titre: "Un audit écrit et un plan priorisé",
    texte: "Ce qui bloque, ce qui rapporte, dans quel ordre. Le document reste à vous, même si vous continuez seul.",
  },
  {
    icon: Target,
    titre: "La liste de vos requêtes cibles",
    texte: "Les recherches que tapent vos clients, la page qui répond à chacune, et leur suivi mois après mois.",
  },
  {
    icon: FileText,
    titre: "Des contenus publiés chaque mois",
    texte: "Pages et articles rédigés, relus avec vous et mis en ligne, balises et données structurées comprises.",
  },
  {
    icon: Link2,
    titre: "Des liens entrants listés",
    texte: "Chaque lien obtenu, avec sa source et sa date, dans le rapport. Rien d'acheté en masse.",
  },
  {
    icon: MapPin,
    titre: "Une fiche Google et des avis suivis",
    texte: "Catégories, photos, publications, réponses aux avis, collecte avec MerciAvis : le référencement local compris.",
  },
  {
    icon: ChartLine,
    titre: "Un rapport mensuel d'une page",
    texte: "Positions, impressions, clics et demandes, tirés de votre Search Console. Une page, pas trente.",
  },
];

const REQUETES_VERIFIABLES = ["facebook ads paris", "agence facebook paris", "agence adwords paris"];

const ENGAGEMENTS = [
  {
    icon: FileText,
    titre: "Un devis écrit avant tout engagement",
    texte: "Le détail des actions, le prix mensuel et la durée, noir sur blanc, avant de commencer.",
  },
  {
    icon: ShieldCheck,
    titre: "Aucune position promise",
    texte: "Nous nous engageons sur le travail et sur les corrections, jamais sur un classement que Google décide seul.",
  },
  {
    icon: KeyRound,
    titre: "Tout reste à vous",
    texte: "Accès, audit, contenus, liens, fiche Google : à votre nom, avec vos identifiants, même si vous arrêtez.",
  },
  {
    icon: UserRound,
    titre: "Un avis honnête avant de signer",
    texte: "Si le référencement a peu de chances de vous rapporter, nous vous le disons dès le premier appel.",
  },
];

const OPTIONS_OBJECTIF = [
  {
    value: "demandes-google",
    label: "Recevoir des demandes depuis Google",
    icon: <Search className="h-5 w-5" />,
    desc: "Référencement naturel, contenus, liens",
  },
  {
    value: "local",
    label: "Être trouvé dans ma ville",
    icon: <MapPin className="h-5 w-5" />,
    desc: "Fiche Google, avis, recherches locales",
  },
  {
    value: "ia",
    label: "Apparaître dans ChatGPT et les IA",
    icon: <Bot className="h-5 w-5" />,
    desc: "Visibilité IA, contenu citable",
  },
  {
    value: "je-ne-sais-pas",
    label: "Je ne sais pas par où commencer",
    icon: <CircleHelp className="h-5 w-5" />,
    desc: "Nous regardons ensemble",
  },
];

const lienClasse =
  "font-semibold text-primary-texte underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm";

const carteClasse =
  "rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_18px_36px_-18px_rgba(124,58,237,0.28)] motion-reduce:transition-none";

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function ReferencementContent() {
  return (
    <div className="pt-16">
      <FilAriane elements={FIL} />

      {/* ---------------------------------------------------------- Hero */}
      <PoleHero
        surtitre={SURTITRE_ZONE}
        titre="Référencement SEO à Paris et Rueil-Malmaison : un forfait mensuel pour être trouvé sur Google, durablement"
        motsCles={["Référencement SEO", "Google"]}
        texte={[
          "Le référencement naturel, c'est le travail qui fait apparaître votre site quand vos clients tapent votre métier dans Google, sans payer chaque clic. Technique, contenus, maillage, liens entrants, fiche Google et visibilité dans les IA : tout est compris dans un forfait à partir de 500 € par mois.",
          "Premiers effets en 3 à 6 mois, un rapport d'une page chaque mois, et aucune position promise : nous vous le disons dès le premier appel.",
        ]}
        reassurance={REASSURANCE_HERO.slice(0, 3)}
        boutonPrimaire={{ href: ANCRE_FORMULAIRE, label: "Demander mon devis SEO écrit" }}
        boutonSecondaire={{ href: SITE.calendly, label: LABEL_CALENDLY, external: true }}
        mention={
          <>
            Vous voulez d&apos;abord un état des lieux ?{" "}
            <Link href={OUTIL.href} className={lienClasse}>
              Vérifiez le SEO de votre site en 60 secondes
            </Link>
            , gratuitement.
          </>
        }
        chiffres={[...CHIFFRES_COMMUNS, { valeur: "3 à 6 mois", libelle: "avant les premiers effets SEO" }]}
        aside={<MockCourbePositions />}
        asideRelief
        asideMobile
      />

      {/* ----------------------------------------------------- Audit gratuit */}
      <SectionOutil
        badge="Audit gratuit"
        titre="Votre site, analysé en 60 secondes : ce qui freine votre référencement"
        accroche="Entrez l'adresse de votre site : l'outil lit vos pages comme Google le fait et vous rend un score par famille (technique, balises, contenu, mobile, données structurées, visibilité IA), avec la liste des points bloquants. Le rapport complet vous est envoyé en PDF."
        obtenez={[
          "Un score global et un score par famille, calculés sur votre site réel",
          "Les points bloquants classés par priorité, et ce qui est déjà en place",
          "Le rapport PDF par email, avec la liste des 30 pages qu'un site de TPE doit avoir",
        ]}
        disposition="large"
      >
        <CarteSeoCheck />
      </SectionOutil>

      {/* ------------------------------------------------------ Le constat */}
      <Reveal>
        <PainPoints
          id="constat"
          surtitre="Le constat"
          titre="Pourquoi Google ne vous envoie-t-il aucune demande ?"
          intro="Trois situations que nous retrouvons dans presque tous les audits. Chacune a une cause précise, et une correction dans notre méthode."
          points={CONSTAT}
        />
      </Reveal>

      {/* ------------------------------------------------ Les cinq leviers */}
      <PoleSection
        id="leviers"
        surtitre="Ce que nous faisons"
        titre="Que comprend notre forfait de référencement naturel ?"
        intro="Cinq leviers qui se renforcent, menés dans cet ordre : la technique d'abord, parce que sans elle le meilleur contenu reste invisible."
      >
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {LEVIERS.map(({ icon: Icon, titre, texte, points, miseEnAvant }, i) => (
            <li key={titre} className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}>
              <Reveal
                delay={i * 0.06}
                y={16}
                className={`relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(124,58,237,0.35)] motion-reduce:transition-none ${
                  miseEnAvant ? "border-primary/40" : "border-border"
                }`}
              >
                {miseEnAvant && <BorderBeam size={90} duration={10} />}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide text-purple-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{titre}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{texte}</p>
                <ul className="mt-4 space-y-2">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Le référencement local et la visibilité dans les IA ont chacun leur page :{" "}
          <Link href={SEO_LOCAL.href} className={lienClasse}>
            fiche Google et avis clients
          </Link>{" "}
          d&apos;un côté,{" "}
          <Link href={VISIBILITE_IA.href} className={lienClasse}>
            être cité par ChatGPT, Perplexity et Google AI Overviews
          </Link>{" "}
          de l&apos;autre. Pour un point complet sur votre site avant de commencer, voyez notre{" "}
          <Link href={AUDIT.href} className={lienClasse}>
            audit SEO complet
          </Link>
          .
        </p>
      </PoleSection>

      {/* ---------------------------------------------------------- Méthode */}
      <SectionSombre
        id="methode"
        surtitre="Notre méthode"
        titre="Comment travaillons-nous votre référencement, mois après mois ?"
        intro="Cinq repères, toujours dans le même ordre, chacun avec un résultat vérifiable dans votre Search Console."
      >
        <Reveal y={16}>
          <Timeline etapes={ETAPES} sombre />
        </Reveal>
      </SectionSombre>

      {/* -------------------------------------------------------- Livrables */}
      <PoleSection
        id="livrables"
        surtitre="Ce que vous obtenez"
        titre="Ce que vous recevez concrètement, chaque mois"
        intro="Ce qui vous appartient et ce que vous voyez, mois après mois."
      >
        <Reveal y={16}>
          <PoleLivrables livrables={LIVRABLES} />
        </Reveal>
        <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Si votre site actuel ne peut pas accueillir ce travail, nous vous le disons lors de l&apos;audit. Vous
          pouvez alors{" "}
          <Link href="/demande-maquette" className={lienClasse}>
            demander une maquette gratuite de nouveau site
          </Link>{" "}
          ou une{" "}
          <Link href="/services/sites-web/refonte-site" className={lienClasse}>
            refonte de site internet
          </Link>{" "}
          conçue pour le référencement.
        </p>
      </PoleSection>

      {/* ----------------------------------------------------------- Preuve */}
      <PolePreuve
        id="preuve"
        surtitre="Ce que vous pouvez vérifier"
        titre="Nous appliquons cette méthode à nos propres pages, et vous pouvez le contrôler"
        texte={[
          "Pas de courbe inventée ni de témoignage écrit pour l'occasion. Sur plusieurs requêtes concurrentielles à Paris, notre propre site apparaît en page 1 ou 2 de Google : ce sont les méthodes décrites sur cette page, appliquées à nous-mêmes.",
          "Nous ne publions pas de résultats chiffrés de clients : une position dépend du métier, de la ville, de la concurrence et de l'âge du site. Lors de l'appel, nous vous montrons notre Search Console, sans chiffre inventé.",
        ]}
        note="Positions moyennes relevées dans notre Search Console sur 90 jours (septembre 2026). Elles évoluent en permanence et ne préjugent pas des résultats de votre site."
        lien={{ href: OUTIL.href, label: "Vérifier le SEO de votre site avec l'outil gratuit" }}
        cas={[
          {
            nom: "JSM Jardinage",
            prestation: "Site vitrine, tunnel de devis et référencement local",
            fait: "« Depuis que j'ai lancé mon site avec ConvertiLab, j'ai embauché d'autres salariés pour pouvoir satisfaire la demande. »",
            siteHref: "https://jsmjardinage.com/",
          },
        ]}
        aside={
          <Reveal y={16}>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.18)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-purple-700">Trois choses à vérifier</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">Sans nous croire sur parole</h3>
              <ul className="mt-5 space-y-4">
                <li className="flex gap-3">
                  <span
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                    aria-hidden="true"
                  >
                    <Globe className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Nos propres pages sur Google</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                      Tapez ces requêtes et cherchez convertilab.com dans les résultats.
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2" aria-label="Requêtes à vérifier sur Google">
                      {REQUETES_VERIFIABLES.map((r) => (
                        <li
                          key={r}
                          className="rounded-full border border-border bg-muted/40 px-3 py-1 font-mono text-xs text-slate-700"
                        >
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                    aria-hidden="true"
                  >
                    <Search className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">L&apos;outil gratuit du site</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                      Il analyse n&apos;importe quelle page en 60 secondes et rend un score avec un rapport PDF.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                    aria-hidden="true"
                  >
                    <FileText className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Cette page elle-même</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                      Un seul H1, des questions en H2, une FAQ balisée, un fil d&apos;Ariane : affichez le code source.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>
        }
      />

      {/* ------------------------------------------------ CTA intermédiaire */}
      <CtaIntermediaire
        id="cta-devis"
        titre="Vous voulez savoir ce que le référencement peut vous apporter ?"
        texte="Décrivez votre objectif en deux clics : vous recevez une première lecture de votre site et un devis écrit sous 24 h, sans engagement."
        bouton={{ href: ANCRE_FORMULAIRE, label: "Demander mon devis SEO écrit" }}
        alternativeLabel="ou appelez-nous au"
      />

      {/* ------------------------------------------------------- Comparatif */}
      <Reveal>
        <Comparatif
          id="comparatif"
          surtitre="Classique ou ConvertiLab"
          titre="Une agence de référencement classique ou ConvertiLab : qu'est-ce qui change pour vous ?"
          gauche={{
            titre: "Une agence SEO classique",
            items: [
              "Une première page « garantie » que Google n'a jamais promise.",
              "Douze mois d'engagement signés avant le premier résultat.",
              "Un rapport de trente pages sur des mots que personne ne tape.",
              "Des accès et des contenus au nom de l'agence.",
            ],
          }}
          droite={{
            titre: "Avec ConvertiLab",
            items: [
              "Aucune position promise : un engagement sur le travail et les corrections.",
              "Six mois minimum, puis libre mois par mois.",
              "Un rapport d'une page : positions, impressions, clics, demandes.",
              "Accès, contenus, audit et fiche Google à votre nom.",
            ],
          }}
          note="Ce tableau décrit des pratiques que nous rencontrons souvent en reprenant des sites, pas une agence en particulier."
        />
      </Reveal>

      {/* ------------------------------------------------------ Engagements */}
      <Reveal>
        <Engagements
          id="engagements"
          surtitre="Nos engagements"
          titre="Ce que nous nous engageons à faire, écrit sur le devis"
          intro="Ils ne promettent pas un classement, mais une façon de travailler."
          items={ENGAGEMENTS}
        />
      </Reveal>

      {/* -------------------------------------------------------------- Prix */}
      <Reveal y={16}>
        <PolePrix
          id="prix"
          surtitre="Prix et engagement"
          titre="Combien coûte le référencement naturel avec notre agence ?"
          intro="Des prix annoncés avant le premier rendez-vous, un engagement limité à ce qu'il faut pour juger du travail."
          lignes={[
            {
              libelle: "Forfait référencement naturel",
              valeur: pole.prix,
              detail:
                "6 mois minimum, puis libre mois par mois. Audit, technique, contenus, liens, fiche Google et visibilité IA compris.",
            },
            {
              libelle: "Audit SEO complet, seul",
              valeur: "Sur devis",
              detail: "Tout votre site passé au crible, avec un plan d'action à suivre seul ou avec nous. Inclus au démarrage du forfait.",
            },
            {
              libelle: "Mission sur mesure",
              valeur: "Sur devis",
              detail: "Un besoin précis (refonte, contenus, données structurées) sans forfait. Prix fixe écrit après un échange de 30 minutes.",
            },
          ]}
          lien={{ href: ANCRE_FORMULAIRE, label: "Recevoir un devis pour mon référencement" }}
          note="TVA non applicable, art. 293 B du CGI. Le devis est écrit et validé avant toute action sur votre site."
        />
      </Reveal>

      {/* -------------------------------------------------------------- FAQ */}
      <PoleFAQ
        id="faq"
        surtitre="Vos questions"
        titre="Vos questions sur le référencement naturel et notre forfait SEO"
        items={FAQ}
        lien={{ href: "/contact", label: "Poser une autre question à l'agence" }}
      />

      {/* ------------------------------------------------- Pages du pôle SEO */}
      <PoleSection
        id="pages-seo"
        surtitre="Le pôle SEO"
        titre="Le référencement naturel s'inscrit dans une méthode SEO complète"
        intro="Contenus, fiche Google, avis, visibilité IA : les pages du pôle se renforcent."
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { icon: Search, titre: pole.nomCourt, lien: { href: pole.href, label: pole.ancre } },
            { icon: MapPin, titre: "Référencement local", lien: SEO_LOCAL },
            { icon: Bot, titre: "Visibilité dans les IA", lien: VISIBILITE_IA },
            { icon: ClipboardList, titre: "Audit SEO complet", lien: AUDIT },
            { icon: FileSearch, titre: "Vérification gratuite en 60 secondes", lien: OUTIL },
          ].map(({ icon: Icon, titre, lien }, i) => (
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
                  <div className="mt-auto pt-4">
                    <LienDiscret {...lien} className="text-sm font-semibold" />
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Nous sommes une{" "}
          <Link href="/agence-web/rueil-malmaison" className={lienClasse}>
            agence web à Rueil-Malmaison
          </Link>{" "}
          et nous intervenons comme{" "}
          <Link href="/agence-web/paris" className={lienClasse}>
            agence web à Paris
          </Link>{" "}
          et à{" "}
          <Link href={pole.pageVille.href} className={lienClasse}>
            La Défense et Puteaux
          </Link>
          . Une question ?{" "}
          <Link href="/contact" className={lienClasse}>
            Écrivez à l&apos;agence
          </Link>
          .
        </p>
      </PoleSection>

      {/* ----------------------------------------------------- Autres pôles */}
      <Reveal>
        <PoleAutresPoles
          id="autres-poles"
          slug="seo"
          surtitre="Les autres leviers"
          titre="Nos trois autres pôles, au même endroit"
          intro="Le référencement envoie des visiteurs. Les trois autres pôles en font des clients."
        />
      </Reveal>

      {/* ------------------------------------------------- Formulaire final */}
      <FormulaireFinal
        id="formulaire"
        pole="seo"
        page={URL_PAGE}
        surtitre="Devis SEO écrit"
        titre="Dites-nous votre objectif, nous vous répondons sous 24 h"
        intro="Une question d'abord, vos coordonnées ensuite. Réponse écrite, sans engagement."
        question={{
          libelle: "Votre objectif",
          aide: "Aucune coordonnée demandée à cette étape.",
          options: OPTIONS_OBJECTIF,
        }}
        titreEtape2="Où vous répondre ?"
        boutonLabel="Recevoir mon devis sous 24 h"
        calendlyLabel="ou réservez 30 min avec le fondateur"
        confirmation={{
          titre: "Merci, votre demande est bien reçue.",
          texte: "Nous regardons votre site et vos requêtes, et nous revenons vers vous sous 24 h avec une première lecture et un devis écrit. Si vous préférez en parler de vive voix, réservez un créneau.",
        }}
      />

      {/* ---------------------------------------------------- Dernier appel */}
      <PoleCTA
        id="contact"
        titre="Une question sur le référencement de votre site ?"
        texte="Réservez 30 minutes, c'est gratuit et vous parlez au fondateur. Vous repartez avec un avis honnête sur ce que le SEO peut vous apporter, et ce qu'il ne peut pas."
        calendlyLabel={LABEL_CALENDLY}
        contactLabel="Écrire à l'agence"
        afficherTelephone
      />

      <StickyCtaBar
        label="Devis SEO écrit sous 24 h"
        href={ANCRE_FORMULAIRE}
        mentions={["Gratuit", "Sans engagement", "Réponse sous 24 h"]}
        formulaireId="formulaire"
      />
    </div>
  );
}
