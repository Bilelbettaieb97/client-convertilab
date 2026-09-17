import Link from "next/link";
import {
  Bot,
  ChartLine,
  Check,
  CircleHelp,
  ClipboardList,
  FileSearch,
  FileText,
  Globe,
  KeyRound,
  ListChecks,
  MapPin,
  PenLine,
  RefreshCw,
  Search,
  ShieldCheck,
  Shuffle,
  Swords,
  Target,
  TrendingDown,
  Users,
  Video,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import type { FaqItem } from "@/lib/faq-schema";
import { CHIFFRES_COMMUNS, getPole, LABEL_CALENDLY, SURTITRE_ZONE } from "@/data/poles";
import {
  BoutonLien,
  CtaIntermediaire,
  Engagements,
  FilAriane,
  FormulaireFinal,
  SectionOutil,
  PainPoints,
  PoleAutresPoles,
  PoleCTA,
  PoleFAQ,
  PoleHero,
  PoleLivrables,
  PolePreuve,
  PolePrix,
  PoleSection,
  PourQui,
  SectionSombre,
  StickyCtaBar,
  Timeline,
  type FilArianeElement,
} from "@/components/pole";
import CarteSeoCheck from "../CarteSeoCheck";
import { Reveal } from "@/components/motion";
import MockJaugeAudit from "../maquettes/MockJaugeAudit";

/**
 * Sous-page « Audit SEO complet » du pôle SEO. Composant serveur : le H1, tout
 * le texte et la FAQ sont dans le HTML rendu. Le hero est le composant partagé
 * PoleHero (src/components/pole) ; les apparitions sont des enfants "use client"
 * importés depuis src/components/motion.
 *
 * Faits tenus sur la page : l'audit seul est sur devis (aucun montant), il est
 * compris au démarrage du forfait SEO (à partir de 500 €/mois, 6 mois minimum),
 * rapport et plan d'action sous 2 semaines, restitution d'une heure en visio.
 * Aucun chiffre de résultat client, aucune garantie de position.
 */

export const pole = getPole("seo");
export const URL_PAGE = "/services/seo/audit";

export const FIL: FilArianeElement[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: pole.nomCourt, href: pole.href },
  { label: "Audit SEO complet" },
];

const OUTIL = pole.outils[0];
const referencement = pole.sousPages[0];
const SEO_LOCAL = { href: "/services/seo/seo-local", label: "Référencement local : fiche Google et avis clients" };
const VISIBILITE_IA = { href: "/services/seo/visibilite-ia", label: "Visibilité dans ChatGPT, Perplexity et Google AI Overviews" };

/** Ancre du formulaire final : cible des CTA de la page et de la barre collante. */
const ANCRE_FORMULAIRE = "#formulaire";

export const FAQ: FaqItem[] = [
  {
    q: "Que contient un audit SEO complet ?",
    a: "Six volets, sur tout le site et pas seulement la page d'accueil : la technique (vitesse, mobile, indexation, balises, données structurées), le contenu et les mots-clés, vos positions réelles tirées de la Search Console, vos concurrents sur vos requêtes, votre fiche d'établissement Google et l'accès des robots d'IA (ChatGPT, Claude, Perplexity). Vous recevez un rapport écrit en français clair et un plan d'action priorisé : ce qu'il faut corriger cette semaine, ce mois-ci et ce trimestre.",
  },
  {
    q: "Combien coûte un audit SEO ?",
    a: "Commandé seul, l'audit est sur devis : le prix dépend du nombre de pages, du nombre de requêtes à étudier et du nombre de concurrents à comparer. Vous recevez un prix fixe écrit sous 24 h après un échange de 30 minutes. Si vous choisissez notre forfait SEO (à partir de 500 € par mois, 6 mois minimum), l'audit est compris au démarrage.",
  },
  {
    q: "Combien de temps prend un audit SEO ?",
    a: "Le rapport et le plan d'action vous sont remis sous 2 semaines à partir du moment où nous avons vos accès (Search Console, Analytics, fiche Google). Un site de plusieurs centaines de pages peut demander un peu plus : le délai exact est écrit sur le devis.",
  },
  {
    q: "Quelle différence avec la vérification gratuite en 60 secondes ?",
    a: "L'outil gratuit du site analyse une page à la fois et rend un score automatique avec un rapport PDF : balises, vitesse, mobile, données structurées, accès des robots d'IA. L'audit complet est fait par nous, sur tout le site, avec vos positions réelles et vos concurrents, et il se termine par un plan d'action classé par priorité et un échange d'une heure. La vérification gratuite sert à savoir d'où vous partez ; l'audit sert à savoir quoi faire, dans quel ordre.",
  },
  {
    q: "Que se passe-t-il une fois l'audit livré ?",
    a: "Nous parcourons le rapport ensemble pendant une heure, en visio. Vous pouvez ensuite appliquer le plan d'action vous-même, le confier à votre développeur ou à votre agence actuelle, ou nous demander de le mettre en œuvre avec notre forfait SEO. Le rapport est à vous, quel que soit votre choix.",
  },
  {
    q: "Faut-il un audit avant une refonte de site ?",
    a: "Oui, c'est le moment où il est le plus utile. Une refonte sans audit fait souvent perdre les positions acquises : pages supprimées sans redirection, adresses modifiées, contenus réécrits au hasard. L'audit liste les pages qui vous apportent des visites et des demandes, celles à conserver, celles à fusionner, et les redirections à prévoir avant la mise en ligne.",
  },
  {
    q: "L'audit garantit-il de meilleures positions sur Google ?",
    a: "Non, et personne ne peut le promettre. L'audit établit un diagnostic et un plan d'action ; ce sont les corrections et les contenus qui suivent, appliqués dans l'ordre, qui font bouger les positions, en général sur plusieurs mois. Nous nous engageons sur la qualité du diagnostic et sur un plan que vous pouvez suivre, pas sur un classement.",
  },
  {
    q: "L'audit est-il adapté à un petit site ou à un commerce local ?",
    a: "Oui. Pour un artisan, un cabinet ou un commerce, l'audit accorde une large place à la fiche d'établissement Google, aux avis clients et aux recherches locales (« votre métier + votre ville »), là où se jouent la plupart de vos demandes. Le rapport est adapté à votre taille : un site de dix pages ne reçoit pas le même document qu'une boutique de mille produits.",
  },
];

/* ------------------------------------------------------------------ */
/* Données de la page                                                  */
/* ------------------------------------------------------------------ */

const REASSURANCE_HERO = [
  "Tout le site analysé, pas une seule page",
  "Plan d'action priorisé, en français clair",
  "Le rapport reste à vous, à suivre seul ou avec nous",
];

const CONSTAT = [
  {
    icon: Swords,
    titre: "Vos concurrents passent devant, sans que vous sachiez pourquoi",
    texte:
      "Même métier, même ville, un site parfois moins beau que le vôtre : ils sont en première page, vous non. Sans diagnostic, vous devinez.",
  },
  {
    icon: Shuffle,
    titre: "Des corrections faites au hasard depuis des mois",
    texte:
      "Un article par-ci, une balise par-là, un plugin de plus : du temps passé, aucun ordre, rien qui bouge dans la Search Console.",
  },
  {
    icon: RefreshCw,
    titre: "Une refonte prévue sans savoir ce qu'il faut garder",
    texte:
      "Quelles pages apportent des visites aujourd'hui ? Lesquelles rediriger ? Sans audit, la refonte efface souvent ce qui marchait.",
  },
];

interface Volet {
  icon: LucideIcon;
  numero: string;
  titre: string;
  texte: string;
  points: string[];
}

const VOLETS: Volet[] = [
  {
    icon: Wrench,
    numero: "01",
    titre: "Technique et indexation",
    texte: "Ce qui empêche Google de lire et de classer vos pages.",
    points: ["Vitesse et affichage mobile", "Pages indexées, exclues, en double", "Balises, redirections, données structurées"],
  },
  {
    icon: PenLine,
    numero: "02",
    titre: "Contenu et mots-clés",
    texte: "Les requêtes que tapent vos clients, et la page censée y répondre.",
    points: ["Requêtes réellement tapées, à Paris ou dans le 92", "Pages trop courtes, en double ou sans cible", "Sujets manquants à créer"],
  },
  {
    icon: ChartLine,
    numero: "03",
    titre: "Positions et Search Console",
    texte: "Vos chiffres réels : impressions, clics, positions, pages qui décrochent.",
    points: ["Positions par requête et par page", "Pages en page 2 proches de la première", "Baisses datées et expliquées"],
  },
  {
    icon: Target,
    numero: "04",
    titre: "Concurrents",
    texte: "Qui occupe la première page sur vos requêtes, et pourquoi.",
    points: ["Trois à cinq concurrents directs comparés", "Contenus, pages locales, liens entrants", "Ce qui est rattrapable en priorité"],
  },
  {
    icon: MapPin,
    numero: "05",
    titre: "Fiche Google et recherches locales",
    texte: "Pour un commerce, un cabinet ou un artisan, c'est là que se jouent la plupart des demandes.",
    points: ["Fiche d'établissement : propriété, catégories, photos, avis", "Cohérence de vos coordonnées sur le web", "Pages villes à créer ou à corriger"],
  },
  {
    icon: Bot,
    numero: "06",
    titre: "Robots d'IA et contenu citable",
    texte: "ChatGPT, Claude et Perplexity citent des sources : peuvent-ils lire votre site ?",
    points: ["Accès des robots d'IA dans le fichier robots.txt", "Fichier llms.txt, données structurées, pages FAQ", "Passages clairs, datés et sourcés"],
  },
];

const ETAPES = [
  {
    repere: "Jour 1",
    titre: "Appel de 30 minutes et accès",
    icon: Users,
    texte:
      "Votre activité, vos clients, les requêtes qui comptent pour vous. Nous demandons un accès en lecture à votre Search Console, votre Analytics et votre fiche Google.",
  },
  {
    repere: "Semaine 1",
    titre: "Analyse du site, des positions et des concurrents",
    icon: FileSearch,
    texte:
      "Exploration technique de toutes les pages, lecture de vos données réelles, comparaison avec vos concurrents sur vos requêtes.",
  },
  {
    repere: "Semaine 2",
    titre: "Rapport écrit et plan d'action priorisé",
    icon: ClipboardList,
    texte:
      "Un document en français clair : ce qui bloque, ce qui rapporte déjà, et les actions classées par priorité et par effort.",
  },
  {
    repere: "Restitution",
    titre: "Une heure en visio pour tout parcourir",
    icon: Video,
    texte:
      "Nous lisons le rapport ensemble, répondons à vos questions et fixons les trois premières actions.",
  },
  {
    repere: "Ensuite",
    titre: "Seul, avec votre équipe, ou avec nous",
    icon: ListChecks,
    texte:
      "Vous appliquez le plan vous-même, le confiez à votre développeur, ou nous le mettons en œuvre dans le forfait SEO. Le rapport reste à vous.",
  },
];

const LIVRABLES = [
  {
    icon: FileText,
    titre: "Un rapport écrit, en français clair",
    texte: "Chaque constat est expliqué, illustré et relié à son effet sur vos demandes.",
  },
  {
    icon: ListChecks,
    titre: "Un plan d'action en trois horizons",
    texte: "Cette semaine, ce mois-ci, ce trimestre : chaque action avec son effort et qui peut la faire.",
  },
  {
    icon: Search,
    titre: "La liste de vos mots-clés et pages cibles",
    texte: "Les requêtes qui comptent, et pour chacune la page qui doit y répondre, existante ou à créer.",
  },
  {
    icon: Globe,
    titre: "Le plan de redirections si vous refondez",
    texte: "Pages à garder, à fusionner, à supprimer, et redirections à poser avant la mise en ligne.",
  },
  {
    icon: Video,
    titre: "Une heure de restitution en visio",
    texte: "Pour parcourir le rapport ensemble et fixer les trois premières actions.",
  },
];

const REQUETES_VERIFIABLES = ["facebook ads paris", "agence facebook paris", "agence adwords paris"];

const lienClasse =
  "font-semibold text-primary-texte underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm";

const carteClasse =
  "rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_18px_36px_-18px_rgba(124,58,237,0.28)] motion-reduce:transition-none";

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function AuditSeoContent() {
  return (
    <div className="pt-16">
      <FilAriane elements={FIL} />

      {/* ------------------------------------------------------------ Hero */}
      {/* Hero partagé : H1 et texte rendus côté serveur, jauge d'exemple en perspective légère à droite (affichée sous le texte sur mobile). */}
      <PoleHero
        surtitre={SURTITRE_ZONE}
        titre="Audit SEO à Paris et Rueil-Malmaison : ce qui bloque votre site, et par quoi commencer"
        motsCles={["Audit SEO", "votre site"]}
        texte={[
          "Un audit SEO complet passe tout votre site au crible : technique, contenu, positions réelles, concurrents, fiche Google et accès des robots d'IA. Vous recevez un rapport écrit et un plan d'action priorisé, à suivre vous-même ou avec nous.",
          "Vous parlez au fondateur, qui réalise l'audit lui-même et vous le restitue en une heure.",
        ]}
        reassurance={REASSURANCE_HERO}
        boutonPrimaire={{ href: ANCRE_FORMULAIRE, label: "Demander mon audit SEO" }}
        boutonSecondaire={{ href: SITE.calendly, label: LABEL_CALENDLY, external: true }}
        mention={
          <>
            Pas sûr d&apos;avoir besoin d&apos;un audit complet ? Commencez par la{" "}
            <Link href={OUTIL.href} className="font-medium text-primary-texte underline-offset-4 hover:underline">
              vérification SEO gratuite de votre site en 60 secondes
            </Link>
            .
          </>
        }
        chiffres={[...CHIFFRES_COMMUNS, { valeur: "2 semaines", libelle: "pour le rapport et le plan d'action" }]}
        aside={<MockJaugeAudit />}
        asideRelief
        asideMobile
      />

      {/* ----------------------------------------------------- Audit gratuit */}
      <SectionOutil
        badge="Audit gratuit"
        titre="Lancez votre audit SEO gratuit maintenant"
        accroche="C'est l'outil que nous utilisons en premier rendez-vous. Entrez l'adresse de votre site : il analyse vos pages en une minute et vous rend un score par famille, les points bloquants et ce qui est déjà en place. Le rapport complet vous est envoyé en PDF."
        obtenez={[
          "Un score global et huit scores détaillés : technique, balises, données structurées, mobile, contenu, visibilité IA, performance, sécurité",
          "Vos points bloquants classés par priorité, et vos points forts",
          "Le rapport PDF par email, avec la grille d'audit en 40 points classés par gravité",
        ]}
        disposition="large"
      >
        <CarteSeoCheck />
      </SectionOutil>

      {/* --------------------------------------------------------- Constat */}
      <Reveal y={16}>
        <PainPoints
          id="constat"
          surtitre="Le constat"
          titre="Pourquoi votre site ne décolle pas sur Google : trois situations que l'audit met à plat"
          intro="Les trois raisons pour lesquelles on nous demande un audit SEO. Chacune a une cause que l'on peut nommer, puis corriger dans le bon ordre."
          points={CONSTAT}
        />
      </Reveal>

      {/* ------------------------------------------------------ Six volets */}
      <PoleSection
        id="contenu"
        surtitre="Ce que nous analysons"
        titre="Que contient un audit SEO complet ?"
        intro="Six volets, sur tout le site. Chaque point est noté selon son effet sur vos visites et vos demandes : le rapport commence par ce qui rapporte."
      >
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VOLETS.map(({ icon: Icon, numero, titre, texte, points }, i) => (
            <li key={titre} className="h-full">
              <Reveal delay={i * 0.06} y={16} className="h-full">
                <article className={`${carteClasse} flex h-full flex-col p-6`}>
                  <div className="flex items-center justify-between">
                    <span
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"
                      aria-hidden="true"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-purple-700">{numero}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{titre}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{texte}</p>
                  <ul className="mt-4 space-y-2">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Les volets 05 et 06 sont détaillés sur nos pages{" "}
          <Link href={SEO_LOCAL.href} className={lienClasse}>
            référencement local
          </Link>{" "}
          et{" "}
          <Link href={VISIBILITE_IA.href} className={lienClasse}>
            visibilité dans les IA
          </Link>
          . Ils sont compris dans l&apos;audit.
        </p>
      </PoleSection>

      {/* ---------------------------------------------------------- Méthode */}
      <SectionSombre
        id="methode"
        surtitre="Notre méthode"
        titre="Comment se déroule un audit SEO avec ConvertiLab ?"
        intro="Cinq repères dans le temps, toujours dans le même ordre."
      >
        <Reveal y={16}>
          <Timeline etapes={ETAPES} sombre />
        </Reveal>
      </SectionSombre>

      {/* -------------------------------------------------------- Livrables */}
      <PoleSection
        id="livrables"
        surtitre="Ce que vous recevez"
        titre="Que contient le rapport d'audit SEO que vous recevez ?"
        intro="Pas un export automatique que personne ne lit : un document écrit pour être appliqué, par vous ou par la personne qui s'occupe de votre site."
      >
        <Reveal y={16}>
          <PoleLivrables livrables={LIVRABLES} />
        </Reveal>
        <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Le rapport sert aussi de cahier des charges pour une{" "}
          <Link href="/services/sites-web/refonte-site" className={lienClasse}>
            refonte de site internet
          </Link>{" "}
          ou une{" "}
          <Link href="/demande-maquette" className={lienClasse}>
            maquette gratuite
          </Link>
          .
        </p>
      </PoleSection>

      {/* ----------------------------------------------------------- Preuve */}
      <PolePreuve
        id="preuve"
        surtitre="Ce que vous pouvez vérifier"
        titre="Nous appliquons à notre propre site ce que nous écrivons dans vos audits"
        texte={[
          "Nous ne publions pas de résultats chiffrés de clients : une position dépend du métier, de la ville, de la concurrence et de l'ancienneté du site. Nous préférons vous montrer ce que vous pouvez vérifier vous-même.",
          "Notre site est audité avec la même grille que le vôtre : un seul H1 par page, des questions en H2, une FAQ balisée, un fil d'Ariane, un fichier llms.txt, des robots d'IA autorisés. Sur plusieurs requêtes à Paris, listées ci-contre, nos pages apparaissent en page 1 ou 2 de Google. Ce sont les corrections que nous vous recommandons dans le plan d'action.",
        ]}
        note="Positions moyennes relevées dans notre Search Console sur 90 jours (septembre 2026). Elles évoluent en permanence et ne préjugent pas des résultats de votre site."
        lien={{ href: OUTIL.href, label: "Lancer la vérification SEO gratuite de votre site" }}
        aside={
          <Reveal y={16}>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.18)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-purple-700">À vérifier sur Google</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">Trois requêtes où nos pages se classent</h3>
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
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Tapez-les dans Google. Puis affichez le code source de cette page : fil d&apos;Ariane, FAQ et service
                balisés, un seul H1, robots d&apos;IA autorisés.
              </p>
            </div>
          </Reveal>
        }
      />

      {/* ------------------------------------------------- CTA intermédiaire */}
      <CtaIntermediaire
        id="cta-verification"
        titre="Vous ne savez pas si vous avez besoin d'un audit complet ?"
        texte="Lancez d'abord la vérification gratuite : en 60 secondes, vous avez un score et un premier rapport. Si vos concurrents vous dépassent, l'audit complet vous dit quoi faire, dans quel ordre."
        bouton={{ href: OUTIL.href, label: "Vérifier mon site gratuitement" }}
        alternativeLabel="ou appelez-nous au"
      />

      {/* ---------------------------------------------------------- Pour qui */}
      <Reveal y={16}>
        <PourQui
          id="pour-qui"
          surtitre="Transparence"
          titre="Nous préférons vous dire non que vous vendre un audit dont vous n'avez pas besoin"
          intro="Un audit SEO n'est utile que s'il est suivi d'actions."
          pour={{
            titre: "C'est fait pour vous si",
            items: [
              "Vous préparez une refonte et voulez garder ce qui apporte des visites.",
              "Votre trafic ou vos demandes baissent depuis des mois sans explication.",
              "Votre site n'a jamais été travaillé pour Google.",
            ],
          }}
          pasPour={{
            titre: "Ce n'est pas pour vous si",
            items: [
              "Vous attendez la première position sous 30 jours : personne ne peut le promettre.",
              "Personne ne pourra appliquer les actions du rapport.",
              "Votre site n'est pas encore en ligne : commencez par le construire correctement.",
            ],
          }}
          engagement={{
            titre: "Notre engagement, écrit noir sur blanc",
            texte: [
              "Chaque action du rapport est expliquée, classée par priorité et par effort, et relue avec vous pendant une heure.",
              "Si, après l'appel de 30 minutes, un audit complet ne vous servira pas, nous vous le disons et vous orientons vers la vérification gratuite ou une mission plus courte.",
            ],
          }}
        />
      </Reveal>

      {/* ------------------------------------------------------ Engagements */}
      <Reveal y={16}>
        <Engagements
          id="engagements"
          surtitre="Nos engagements"
          titre="Ce que nous nous engageons à faire pour votre audit SEO"
          intro="Quatre engagements sur la façon de travailler, jamais sur un classement."
          items={[
            {
              icon: FileText,
              titre: "Un devis écrit sous 24 h",
              texte: "Prix fixe et délai écrits après l'appel de 30 minutes, avant tout engagement.",
            },
            {
              icon: KeyRound,
              titre: "Vos accès en lecture seule",
              texte: "Search Console, Analytics, fiche Google : nous lisons, nous ne modifions rien sans votre accord.",
            },
            {
              icon: ShieldCheck,
              titre: "Aucune obligation de continuer",
              texte: "Le rapport reste à vous, à appliquer avec qui vous voulez. Si vous choisissez le forfait SEO, l'audit en fait partie.",
            },
            {
              icon: TrendingDown,
              titre: "Un avis honnête sur vos chances",
              texte: "Si vos requêtes sont hors de portée de votre site, nous l'écrivons dans le rapport.",
            },
          ]}
        />
      </Reveal>

      {/* ------------------------------------------------------------- Prix */}
      <Reveal y={16}>
        <PolePrix
          id="prix"
          surtitre="Prix et engagement"
          titre="Combien coûte un audit SEO complet ?"
          intro="Trois façons d'obtenir un diagnostic. Le prix de l'audit seul est fixé par écrit après un échange de 30 minutes, selon le nombre de pages, de requêtes et de concurrents."
          lignes={[
            {
              libelle: "Vérification gratuite en 60 secondes",
              valeur: "0 €",
              detail: "Une page à la fois, score automatique et rapport PDF.",
            },
            {
              libelle: "Audit SEO complet, commandé seul",
              valeur: "Sur devis",
              detail: "Prix fixe écrit sous 24 h. Rapport et plan d'action sous 2 semaines, restitution d'une heure comprise.",
            },
            {
              libelle: "Dans le forfait SEO",
              valeur: "Inclus au démarrage",
              detail: `Forfait de référencement naturel ${pole.prix}, 6 mois minimum : l'audit complet en est la première étape.`,
            },
          ]}
          engagementsTitre="Ce qui est écrit sur le devis"
          engagements={[
            "Le périmètre : pages, requêtes et concurrents étudiés.",
            "Le délai de remise du rapport et la date de restitution.",
            "Un prix fixe, sans supplément en cours de route.",
          ]}
          lien={{ href: ANCRE_FORMULAIRE, label: "Recevoir un devis pour mon audit SEO" }}
          note="TVA non applicable, art. 293 B du CGI. Le devis est écrit et validé avant le début de l'analyse."
        />
      </Reveal>

      {/* -------------------------------------------------------------- FAQ */}
      <PoleFAQ
        id="faq"
        surtitre="Vos questions"
        titre="Vos questions sur l'audit SEO"
        items={FAQ}
        lien={{ href: "/contact", label: "Poser une autre question à l'agence" }}
      />

      {/* ------------------------------------------------- Pages du pôle SEO */}
      <PoleSection
        id="pages-seo"
        surtitre="Le pôle SEO"
        titre="L'audit SEO est la première étape d'une méthode complète"
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Search, titre: pole.nomCourt, lien: { href: pole.href, label: pole.ancre } },
            { icon: FileText, titre: "Référencement naturel et forfait SEO", lien: referencement },
            { icon: MapPin, titre: "Référencement local et fiche Google", lien: SEO_LOCAL },
            { icon: Bot, titre: "Visibilité dans les IA", lien: VISIBILITE_IA },
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
                    <BoutonLien {...lien} variante="discret" className="text-sm font-semibold" />
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted-foreground">
          <Link href="/agence-web/rueil-malmaison" className={lienClasse}>
            Agence web à Rueil-Malmaison
          </Link>
          , nous auditons aussi des sites comme{" "}
          <Link href="/agence-web/paris" className={lienClasse}>
            agence web à Paris
          </Link>{" "}
          et partout en France, en visio.
        </p>
      </PoleSection>

      {/* ----------------------------------------------------- Autres pôles */}
      <Reveal>
        <PoleAutresPoles
          id="autres-poles"
          slug="seo"
          surtitre="Les autres leviers"
          titre="Nos trois autres pôles, au même endroit"
          intro="Un audit dit ce qui bloque. Un site qui convertit, une campagne bien réglée et une IA qui répond la nuit transforment les visites en clients."
        />
      </Reveal>

      {/* ------------------------------------------------- Formulaire final */}
      <FormulaireFinal
        id="formulaire"
        pole="seo"
        page={URL_PAGE}
        surtitre="Demande d'audit SEO"
        titre="Dites-nous où en est votre site, nous vous répondons sous 24 h"
        intro="Une question d'abord, vos coordonnées ensuite. Vous recevez un premier avis écrit et, si l'audit vous est utile, un devis avec périmètre et délai."
        question={{
          libelle: "Votre situation",
          aide: "Aucune coordonnée demandée à cette étape.",
          options: [
            {
              value: "refonte",
              label: "Je prépare une refonte",
              desc: "Savoir quoi garder et quoi rediriger",
              icon: <RefreshCw className="h-5 w-5" />,
            },
            {
              value: "baisse",
              label: "Mon trafic ou mes demandes baissent",
              desc: "Comprendre la cause et la corriger",
              icon: <TrendingDown className="h-5 w-5" />,
            },
            {
              value: "jamais-travaille",
              label: "Mon site n'a jamais été travaillé pour Google",
              desc: "Partir sur de bonnes bases",
              icon: <Search className="h-5 w-5" />,
            },
            {
              value: "je-ne-sais-pas",
              label: "Je ne sais pas encore",
              desc: "Nous regardons ensemble",
              icon: <CircleHelp className="h-5 w-5" />,
            },
          ],
        }}
        titreEtape2="Où vous envoyer la réponse ?"
        boutonLabel="Recevoir ma réponse sous 24 h"
        calendlyLabel="ou réservez 30 min avec le fondateur"
        confirmation={{
          titre: "Demande bien reçue",
          texte: "Nous revenons vers vous sous 24 h avec un premier avis écrit. Si vous préférez en parler de vive voix, réservez directement un créneau.",
        }}
      />

      {/* ----------------------------------------------------- Dernier appel */}
      <PoleCTA
        titre="Une question sur votre site avant de commander l'audit ?"
        texte="Réservez 30 minutes, c'est gratuit et vous parlez au fondateur. Vous repartez avec un avis honnête sur ce dont votre site a besoin."
        calendlyLabel={LABEL_CALENDLY}
        contactLabel="Écrire à l'agence"
        afficherTelephone
      />

      <StickyCtaBar
        label="Demander mon audit SEO"
        href={ANCRE_FORMULAIRE}
        mentions={["Devis écrit", "Sans engagement", "Réponse sous 24 h"]}
        formulaireId="formulaire"
      />
    </div>
  );
}
