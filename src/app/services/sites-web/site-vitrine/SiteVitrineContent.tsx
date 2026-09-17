import Link from "next/link";
import {
  BarChart3,
  Briefcase,
  Check,
  CircleHelp,
  ClipboardCheck,
  FileText,
  Globe,
  GraduationCap,
  Hourglass,
  Inbox,
  KeyRound,
  LayoutTemplate,
  MessageSquareOff,
  PenLine,
  PhoneCall,
  RefreshCw,
  Rocket,
  Search,
  Server,
  Smartphone,
  Store,
  Timer,
  UserRound,
  Users,
  Wrench,
} from "lucide-react";
import { PRICING, SITE } from "@/lib/constants";
import type { FaqItem } from "@/lib/faq-schema";
import { caseStudies, fullCaseStudies, LIVE_SITES } from "@/data/case-studies";
import { CHIFFRES_COMMUNS, getPole, LABEL_CALENDLY, SURTITRE_ZONE } from "@/data/poles";
import { cn } from "@/lib/utils";
import { BorderBeam, Reveal } from "@/components/motion";
import {
  Comparatif,
  CtaIntermediaire,
  Engagements,
  FilAriane,
  FormulaireFinal,
  SectionOutil,
  DiagnosticInteractif,
  LienDiscret,
  PainPoints,
  PoleAutresPoles,
  PoleCTA,
  PoleFAQ,
  PoleHero,
  PolePreuve,
  PolePrix,
  PoleSection,
  SectionSombre,
  StickyCtaBar,
  Timeline,
  type FilArianeElement,
  type PoleCas,
  type TimelineEtape,
} from "@/components/pole";
import { getDiagnostic } from "@/lib/diagnostics/configs";
import { CaptureSite } from "../_illustrations/CaptureSite";

/**
 * Sous-page « Site vitrine professionnel » (/services/sites-web/site-vitrine).
 * Composant serveur : le H1, les textes, la FAQ et le maillage sont dans le
 * HTML. Les prix viennent de PRICING, les cas réels de src/data/case-studies.ts,
 * les liens de poles.ts. Aucun chiffre de résultat client, aucune garantie.
 */

const pole = getPole("sites-web");

/** URL de la page, conservée : mot-clé principal « création site vitrine Paris ». */
export const URL_SITE_VITRINE = "/services/sites-web/site-vitrine";

/** Pages sœurs du pôle (e-commerce, landing page, refonte, application), la page courante exclue. */
const PAGES_SOEURS = pole.sousPages.filter((p) => p.href !== URL_SITE_VITRINE);
const [outilEstimation, outilDesign] = pole.outils;

/** Ancre du formulaire final : cible des CTA de la page et de la barre collante. */
const ANCRE_FORMULAIRE = "#formulaire";

export const FIL_ARIANE_SITE_VITRINE: FilArianeElement[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: pole.nomCourt, href: pole.href },
  { label: "Site vitrine" },
];

/* ── Prix : une seule source, PRICING ───────────────────────────────────── */

const euros = (montant: number) => `${montant.toLocaleString("fr-FR")}\u00a0€`;
/** « ou 39€/mois » devient « ou 39 €/mois », sans changer le chiffre. */
const mensualite = (texte: string) => texte.replace(/(\d)€/g, "$1\u00a0€");
const ETALE = "paiement étalé, pas d'abonnement";

export const PRIX_VITRINE = euros(PRICING.vitrine.from);
const PRIX_VITRINE_DETAIL = `${mensualite(PRICING.vitrine.monthly)}, ${ETALE}`;
const PRIX_REFONTE = euros(PRICING.refonte.from);
const PRIX_LANDING = euros(PRICING.landing.from);

/* ── Hero : trois coches de réassurance, toutes vraies ──────────────────── */

const REASSURANCE_HERO = ["Devis sous 24 h", "Livré en 2 semaines", "Paiement étalé, pas d'abonnement"] as const;

/* ── Pour qui : quatre profils ──────────────────────────────────────────── */

const PROFILS = [
  {
    icon: Wrench,
    titre: "Artisans du bâtiment et dépannage",
    texte:
      "Plombier, électricien, paysagiste, couvreur : vos clients tapent votre métier et leur ville. Une page par prestation, un bouton devis et vos chantiers en photo.",
  },
  {
    icon: Store,
    titre: "Commerces et restaurants",
    texte:
      "Restaurant, salon, boutique, institut : horaires, adresse, carte ou prestations, avis Google, réservation ou itinéraire en un clic depuis le téléphone.",
  },
  {
    icon: Briefcase,
    titre: "Cabinets et professions libérales",
    texte:
      "Avocat, expert-comptable, ostéopathe, architecte : une présentation sobre, des domaines d'intervention clairs et une prise de rendez-vous en ligne.",
  },
  {
    icon: UserRound,
    titre: "Indépendants, coachs et associations",
    texte:
      "Consultant, formateur, photographe, association : un site qui explique votre offre, montre vos réalisations et inspire confiance avant le premier contact.",
  },
];

/* ── Les cinq pages d'un site vitrine ───────────────────────────────────── */

const PAGES = [
  {
    titre: "Accueil",
    texte:
      "Ce que vous faites, pour qui, où, et le bouton pour vous contacter, visibles sans faire défiler. Vos avis et vos réalisations juste en dessous.",
  },
  {
    titre: "Prestations",
    texte:
      "Une section ou une page par prestation, avec les questions que vos clients posent vraiment et un appel à l'action à chaque fois.",
  },
  {
    titre: "À propos",
    texte:
      "Votre parcours, votre équipe, vos certifications, votre zone d'intervention : tout ce qui rassure avant le premier appel.",
  },
  {
    titre: "Avis et réalisations",
    texte:
      "Vos avis Google reliés à votre fiche, vos chantiers, vos plats ou vos créations en photo. La preuve avant la promesse.",
  },
  {
    titre: "Contact",
    texte:
      "Formulaire relié à votre email ou à votre CRM, numéro cliquable, carte, horaires et, si vous le souhaitez, prise de rendez-vous en ligne.",
  },
];

/* ── Tout est compris dans le prix : huit items vrais ───────────────────── */

const INCLUS = [
  {
    icon: Smartphone,
    titre: "Design sur mesure, mobile d'abord",
    texte: "Pas de gabarit acheté : une mise en page dessinée pour votre activité et lisible sur téléphone.",
  },
  {
    icon: PenLine,
    titre: "Textes écrits avec vos mots",
    texte: "Vos pages rédigées à partir du diagnostic et des questions de vos clients. Vous relisez, vous validez.",
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

/* ── Méthode : quatre étapes avec repère temporel ───────────────────────── */

const METHODE: TimelineEtape[] = [
  {
    repere: "Jour 1",
    titre: "Appel de 30 minutes",
    icon: PhoneCall,
    texte:
      "Votre métier, vos clients, vos prestations phares et ce que le site doit déclencher : appels, devis ou rendez-vous. Vous recevez un devis écrit sous 24 h.",
  },
  {
    repere: "Sous 48 h",
    titre: "Maquette gratuite, validée avant le code",
    icon: LayoutTemplate,
    texte:
      "Vous recevez la maquette de votre page d'accueil. Vous demandez des ajustements, vous validez : rien n'est construit avant votre accord.",
  },
  {
    repere: "Semaines 1 et 2",
    titre: "Réalisation et contenus",
    icon: Wrench,
    texte:
      "Les cinq pages, les textes, vos photos, le formulaire, la fiche Google reliée, le référencement technique. Vous validez page par page.",
  },
  {
    repere: "Mise en ligne",
    titre: "Formation et suivi",
    icon: Rocket,
    texte:
      "Nom de domaine, mise en ligne, formation pour modifier vos textes, puis suivi des demandes reçues pour ajuster ce qui doit l'être.",
  },
];

/* ── Preuve : cas réels depuis case-studies.ts uniquement ───────────────── */

const casVitrine = (slug: string): PoleCas[] => {
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs || cs.category !== "site-vitrine" || !cs.testimonial) return [];
  return [
    {
      nom: cs.client,
      prestation: cs.title,
      fait: `« ${cs.testimonial} »`,
      // L'étude de cas n'existe que si fullCaseStudies la décrit (sinon 404).
      href: slug in fullCaseStudies ? `/etude-de-cas/${slug}` : undefined,
      siteHref: LIVE_SITES[slug],
      ancre: `Lire l'étude de cas ${cs.client}`,
    },
  ];
};

/** Trois sites vitrines livrés, consultables, avec les mots exacts de leurs propriétaires. */
const CAS_VITRINE: PoleCas[] = ["jsm-jardinage", "acb-renovation", "monsieur-arancini"].flatMap(casVitrine);

/* ── Formulaire final : question d'étape 1 propre à cette page ──────────── */

const OPTIONS_SITUATION = [
  { value: "pas-de-site", label: "Je n'ai pas encore de site", desc: "Je pars de zéro", icon: <Globe /> },
  { value: "page-reseaux", label: "J'ai seulement une page Facebook ou Instagram", desc: "Je veux une vraie adresse en ligne", icon: <Users /> },
  { value: "site-a-refaire", label: "J'ai un site à refaire", desc: "Il a vieilli ou se lit mal sur téléphone", icon: <RefreshCw /> },
  { value: "site-sans-demande", label: "J'ai un site, mais aucune demande", desc: "Je veux qu'il serve à quelque chose", icon: <Inbox /> },
  { value: "je-ne-sais-pas", label: "Je ne sais pas encore", desc: "Nous verrons ensemble", icon: <CircleHelp /> },
];

/* ── FAQ : la même liste alimente le JSON-LD dans page.tsx ──────────────── */

export const FAQ_SITE_VITRINE: FaqItem[] = [
  {
    q: "Combien coûte un site vitrine professionnel ?",
    a: `Un site vitrine professionnel coûte ${PRIX_VITRINE}, prix fixe écrit sur le devis avant de commencer, ou ${mensualite(PRICING.vitrine.monthly)} en paiement étalé. Une refonte de site existant coûte ${PRIX_REFONTE} et une landing page d'une seule page ${PRIX_LANDING}. Notre estimateur gratuit vous donne un ordre de prix en 2 minutes.`,
  },
  {
    q: "En combien de temps mon site vitrine est-il livré ?",
    a: "En 2 semaines après validation de la maquette. Le premier appel a lieu dès que vous le souhaitez, la maquette de votre page d'accueil arrive sous 48 h, puis la réalisation prend deux semaines, contenus compris. Le délai est écrit sur le devis.",
  },
  {
    q: "Le paiement mensuel est-il un abonnement ?",
    a: "Non. Le mensuel affiché est un paiement étalé du prix du site sur 24 mois. La dernière mensualité réglée, vous ne nous devez plus rien et le site reste à vous. Vous pouvez aussi régler la totalité au départ.",
  },
  {
    q: "À qui appartient le site une fois livré ?",
    a: "À vous. Le site, le nom de domaine, les textes et les images sont votre propriété. Vous recevez tous les accès à la livraison et vous restez libre de changer de prestataire quand vous le souhaitez.",
  },
  {
    q: "Et si je n'ai ni textes ni photos ?",
    a: "Ce n'est pas un problème. Nous rédigeons les textes à partir du diagnostic et de quelques questions sur votre activité, puis vous les relisez. Pour les images, nous utilisons vos photos si vous en avez, sinon des visuels choisis pour votre secteur.",
  },
  {
    q: "Puis-je modifier le contenu de mon site moi-même ?",
    a: "Oui. À la livraison, une courte formation vous montre comment changer vos textes, vos photos et vos horaires. Pour une modification plus lourde, vous nous écrivez et nous vous répondons sous 24 h.",
  },
  {
    q: "Mon site vitrine sera-t-il trouvé sur Google ?",
    a: "Chaque site vitrine est livré avec les bases du référencement : titres, balises, vitesse, plan du site, données structurées et fiche Google reliée. C'est suffisant pour votre nom et des requêtes locales peu disputées. Personne ne peut promettre une position. Pour aller plus loin, notre pôle SEO propose un forfait mensuel et un audit.",
  },
  {
    q: "Quelle est la différence entre un site vitrine et une landing page ?",
    a: "Un site vitrine comporte plusieurs pages (accueil, prestations, à propos, avis, contact) pour présenter toute votre activité et être trouvé sur Google. Une landing page est une page unique, conçue pour une campagne publicitaire et un seul objectif : la demande de contact. Beaucoup de nos clients ont les deux.",
  },
];

/* ── Briques d'affichage ────────────────────────────────────────────────── */

const LIEN_TEXTE =
  "rounded-sm font-semibold text-primary-texte underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const CARTE =
  "rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_16px_32px_-20px_rgba(76,29,149,0.35)] motion-reduce:transition-none";

/**
 * Illustration du hero : un site vitrine livré (artisan du bâtiment), vu dans
 * son navigateur. Vraie capture, domaine réel, deux repères de l'offre. Le
 * relief en perspective est donné par PoleHero (asideRelief) : ici, aucune
 * carte 3D. Cadre 10/9 : à 448 px de large, environ 400 px de haut, la
 * colonne de texte en face en fait 700 à 780. Les repères débordent moins
 * sous sm : la section coupe ce qui dépasse et le conteneur n'a que 16 px de marge.
 */
function MockupVitrine() {
  return (
    <div className="w-full">
      <div className="relative">
      <CaptureSite
        domaine="acb-renovation.fr"
        src="/images/portfolio/gallery-acb-fullpage-1.webp"
        alt="Page d'accueil du site vitrine d'ACB Rénovation, entreprise de couverture et rénovation, livré par l'agence"
        width={1000}
        height={1295}
        rogner
        priority
        className="aspect-[10/9] rounded-xl shadow-[0_32px_64px_-32px_rgba(76,29,149,0.35)]"
      />
      {/* Repères à cheval sur les bords du cadre : ils ne recouvrent ni le menu ni le titre du site montré. */}
      <div className="absolute -top-4 right-3 rounded-2xl border border-border bg-white px-4 py-3 text-sm font-semibold text-foreground shadow-lg lg:-right-4">
        <span className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-purple-100 text-purple-700">
            <LayoutTemplate className="h-4 w-4" strokeWidth={2} />
          </span>
          Maquette gratuite en 48 h
        </span>
      </div>
      <div className="absolute -bottom-4 left-3 rounded-2xl border border-border bg-white px-4 py-3 text-sm font-semibold text-foreground shadow-lg lg:-left-8">
        <span className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-pink-100 text-pink-600">
            <Check className="h-4 w-4" strokeWidth={2.5} />
          </span>
          {PRIX_VITRINE}, prix fixe
        </span>
      </div>
      </div>
      <p className="mt-7 text-center text-xs text-muted-foreground">acb-renovation.fr : site vitrine livré par l&apos;agence, consultable en ligne</p>
    </div>
  );
}

/* ── Grilles ────────────────────────────────────────────────────────────── */

function GrilleProfils() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {PROFILS.map((p, i) => {
        const Icon = p.icon;
        return (
          <li key={p.titre} className="h-full">
            <Reveal delay={i * 0.06} y={16} className={cn("flex h-full flex-col p-5", CARTE)}>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary" aria-hidden="true">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 font-semibold text-foreground">{p.titre}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.texte}</p>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}

function ListePages() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {PAGES.map((p, i) => (
        <li key={p.titre} className={cn("h-full", i === 0 && "sm:col-span-2 lg:col-span-1")}>
          <Reveal delay={i * 0.06} y={16} className={cn("relative flex h-full flex-col overflow-hidden p-5", CARTE, i === 0 && "border-primary/40")}>
            {i === 0 && <BorderBeam size={80} duration={10} />}
            <span className="text-xs font-semibold uppercase tracking-wide text-purple-700">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 text-lg font-semibold text-foreground">{p.titre}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.texte}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

function GrilleInclus() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {INCLUS.map((item, i) => {
        const Icon = item.icon;
        return (
          <li key={item.titre} className="h-full">
            <Reveal delay={i * 0.05} y={16} className={cn("group flex h-full flex-col p-5", CARTE)}>
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white motion-reduce:transition-none"
                aria-hidden="true"
              >
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 font-semibold text-foreground">{item.titre}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.texte}</p>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}

function PagesSoeurs() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {PAGES_SOEURS.map((p, i) => (
        <Reveal key={p.href} delay={i * 0.06} y={16} className={cn("flex items-center justify-between gap-4 p-5", CARTE)}>
          <LienDiscret href={p.href} label={p.label} className="text-base" />
        </Reveal>
      ))}
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────────────────── */

const DIAGNOSTIC = getDiagnostic("sites-web-site-vitrine")!;

export default function SiteVitrineContent() {
  return (
    <div className="pt-16">
      <FilAriane elements={FIL_ARIANE_SITE_VITRINE} />

      <PoleHero
        surtitre={SURTITRE_ZONE}
        titre={"Création de site vitrine à Paris et Rueil-Malmaison\u00a0: un site professionnel qui apporte des demandes"}
        motsCles={["site vitrine", "demandes"]}
        texte={[
          "Un site vitrine professionnel présente votre activité, vos prestations, vos avis et vos coordonnées aux personnes qui vous cherchent sur Google. Nous le concevons pour les artisans, les commerces, les cabinets et les indépendants, avec un seul objectif : que le visiteur vous appelle ou vous écrive.",
          `Prix fixe de ${PRIX_VITRINE}, écrit avant de commencer, ou ${mensualite(PRICING.vitrine.monthly)} en paiement étalé, pas d'abonnement. Maquette gratuite sous 48 h, livraison en 2 semaines.`,
        ]}
        reassurance={REASSURANCE_HERO}
        boutonPrimaire={{ href: "/demande-maquette", label: "Ma maquette gratuite en 48 h" }}
        boutonSecondaire={{ href: SITE.calendly, label: LABEL_CALENDLY, external: true }}
        mention={
          <>
            Vous hésitez sur le budget ?{" "}
            <Link href={outilEstimation.href} className={LIEN_TEXTE}>
              Estimez le prix de votre site en 2 minutes
            </Link>{" "}
            avec notre outil gratuit.
          </>
        }
        chiffres={[...CHIFFRES_COMMUNS, { valeur: "2 semaines", libelle: "pour livrer votre site vitrine" }]}
        aside={<MockupVitrine />}
        asideRelief
        asideMobile
      />

      {/* Diagnostic gratuit de la page, juste après le hero (fond gris : la section « pour qui » est blanche). */}
      <SectionOutil badge="Diagnostic gratuit" titre={DIAGNOSTIC.titre} accroche={DIAGNOSTIC.accroche} obtenez={DIAGNOSTIC.obtenez} fond="gris">
        <DiagnosticInteractif diagnostic={DIAGNOSTIC} page={URL_SITE_VITRINE} />
      </SectionOutil>

      <PoleSection
        id="pour-qui"
        surtitre="Pour qui"
        titre="À qui s'adresse un site vitrine professionnel ?"
        intro="À toute entreprise dont les clients cherchent un prestataire sur Google avant d'appeler. Quatre profils reviennent le plus souvent."
      >
        <GrilleProfils />
        <Reveal className="mx-auto mt-10 max-w-3xl text-center">
          <p className="leading-relaxed text-muted-foreground">
            Nous recevons à Rueil-Malmaison (92) et nous travaillons en rendez-vous ou en visio avec les entreprises de
            Paris et de toute l&apos;Île-de-France, ainsi que partout en France. Voir notre{" "}
            <Link href={pole.pageVille.href} className={LIEN_TEXTE}>
              agence web à Rueil-Malmaison
            </Link>{" "}
            et notre{" "}
            <Link href="/agence-web/paris" className={LIEN_TEXTE}>
              agence web à Paris
            </Link>
            .
          </p>
        </Reveal>
      </PoleSection>

      <Reveal y={16}>
        <PainPoints
          id="constat"
          surtitre="Le constat"
          titre="Pourquoi votre activité a-t-elle besoin d'un site vitrine professionnel ?"
          intro="Trois situations que nous rencontrons le plus souvent au premier appel."
          points={[
            {
              icon: MessageSquareOff,
              titre: "Une page Facebook à la place d'un site",
              texte:
                "Vos clients tombent sur une page peu mise à jour, sans vos prestations ni vos tarifs, et vous dépendez d'un réseau qui décide qui voit vos publications.",
            },
            {
              icon: Hourglass,
              titre: "Un site fait il y a des années",
              texte:
                "Il se lit mal sur téléphone, charge lentement et affiche des textes datés. Le visiteur repart avant d'avoir trouvé votre numéro.",
            },
            {
              icon: Inbox,
              titre: "Un site qui n'apporte aucune demande",
              texte:
                "Il existe, mais sans formulaire clair, sans avis, sans preuve de votre travail. Le téléphone ne sonne jamais grâce à lui.",
            },
          ]}
        />
      </Reveal>

      <PoleSection
        id="pages"
        surtitre="Ce que nous créons"
        titre="Que contient un site vitrine professionnel livré par ConvertiLab ?"
        intro="Jusqu'à cinq pages, chacune avec un rôle précis, écrites avec vos mots et conçues pour que le visiteur passe à l'action."
      >
        <ListePages />
        <Reveal className="mx-auto mt-10 max-w-3xl text-center">
          <p className="leading-relaxed text-muted-foreground">
            Besoin d&apos;un blog, d&apos;une page par ville ou d&apos;une galerie plus large ? Nous l&apos;ajoutons au devis, à
            prix écrit. Vous avez déjà un site ?{" "}
            <Link href={outilDesign.href} className={LIEN_TEXTE}>
              {outilDesign.label}
            </Link>{" "}
            en 60 secondes : vous saurez s&apos;il faut le retoucher ou le refaire.
          </p>
        </Reveal>
      </PoleSection>

      <PoleSection
        id="inclus"
        fond="gris"
        surtitre="Tout est compris dans le prix"
        titre={`Qu'est-ce qui est inclus dans les ${PRIX_VITRINE} d'un site vitrine ?`}
        intro="Un site vitrine qui convertit ne se résume pas à un joli design. Voici ce qui est compris dans le prix, sans supplément en cours de route."
      >
        <GrilleInclus />
      </PoleSection>

      <CtaIntermediaire
        id="cta-maquette"
        titre="Vous voulez voir votre site vitrine avant de vous engager ?"
        texte="Demandez une maquette gratuite de votre page d'accueil : vous la recevez sous 48 h et vous validez le design avant la moindre ligne de code."
        bouton={{ href: "/demande-maquette", label: "Ma maquette gratuite en 48 h" }}
        alternativeLabel="ou appelez-nous au"
      />

      <SectionSombre
        id="methode"
        surtitre="Notre méthode"
        titre="Comment créons-nous votre site vitrine en 2 semaines ?"
        intro="Quatre étapes, toujours les mêmes, un seul interlocuteur du premier appel à la mise en ligne, et une maquette validée avant le code."
      >
        <Reveal y={16}>
          <Timeline etapes={METHODE} sombre />
        </Reveal>
      </SectionSombre>

      <PolePreuve
        id="preuve"
        surtitre="Preuve"
        titre="Des sites vitrines que vous pouvez consulter, des clients que vous pouvez lire"
        texte={[
          "Nous ne publions pas de chiffres que nous ne pouvons pas prouver. Voici trois sites vitrines livrés, que vous pouvez ouvrir maintenant, avec les mots exacts de leurs propriétaires.",
          "ADSB Wissembourg, en Alsace, en fait aussi partie : nous travaillons partout en France, en visio.",
        ]}
        cas={CAS_VITRINE}
        lien={{ href: "/portfolio", label: "Voir toutes nos réalisations de sites vitrines" }}
        note="Citations reprises mot pour mot de nos études de cas. Aucun chiffre d'affaires n'est publié sans l'accord écrit du client."
      />

      <Reveal y={16}>
        <Comparatif
          id="comparatif"
          surtitre="Site vitrine ou page Facebook"
          titre="Site vitrine professionnel ou simple page sur les réseaux sociaux : qu'est-ce qui change ?"
          fond="blanc"
          gauche={{
            titre: "Une page Facebook ou Instagram seule",
            items: [
              "La page appartient au réseau, pas à vous.",
              "Vos publications sont vues par une partie de vos abonnés, selon l'algorithme.",
              "Pas de page par prestation ni de tarifs : le visiteur pose la question en message.",
              "Peu de chances d'apparaître sur Google pour votre métier et votre ville.",
              "Aucune mesure des demandes reçues.",
            ],
          }}
          droite={{
            titre: "Un site vitrine professionnel",
            items: [
              "Le site, le nom de domaine et les contenus sont à vous.",
              "Visible à toute heure par toute personne qui vous cherche.",
              "Une page par prestation, avec les réponses aux questions de vos clients.",
              "Les bases du référencement local pour être trouvé sur votre ville.",
              "Chaque demande comptée : vous savez ce que le site vous apporte.",
            ],
          }}
          note="Les réseaux sociaux restent utiles : nous les relions au site, et notre pôle publicité s'en sert pour vous faire connaître."
        />
      </Reveal>

      <Reveal y={16}>
        <Engagements
          id="engagements"
          surtitre="Nos engagements"
          titre="Ce que nous nous engageons à faire, écrit sur le devis"
          items={[
            {
              icon: FileText,
              titre: "Un prix fixe écrit avant de commencer",
              texte: `${PRIX_VITRINE} ou ${mensualite(PRICING.vitrine.monthly)}, sans supplément en cours de route.`,
            },
            {
              icon: LayoutTemplate,
              titre: "Une maquette validée avant le code",
              texte: "Vous voyez votre page d'accueil sous 48 h et vous décidez avant que nous construisions.",
            },
            {
              icon: Timer,
              titre: "Livré en 2 semaines",
              texte: "Après validation de la maquette, votre site vitrine est en ligne deux semaines plus tard.",
            },
            {
              icon: PhoneCall,
              titre: "Un seul interlocuteur",
              texte: "Le fondateur, du premier appel à la mise en ligne, joignable par téléphone et par email.",
            },
            {
              icon: KeyRound,
              titre: "Vous êtes propriétaire",
              texte: "Site, nom de domaine, textes et photos vous appartiennent, accès remis à la livraison.",
            },
            {
              icon: ClipboardCheck,
              titre: "Corrections comprises",
              texte: "Les corrections après la mise en ligne sont incluses dans le prix.",
            },
          ]}
        />
      </Reveal>

      <Reveal y={16}>
        <PolePrix
          id="prix"
          surtitre="Prix et engagement"
          titre="Combien coûte un site vitrine professionnel ?"
          intro="Le prix ci-dessous est celui de nos devis. Le mensuel est un paiement étalé, pas un abonnement : la dernière mensualité réglée, vous ne nous devez plus rien."
          lignes={[
            { libelle: "Site vitrine professionnel", valeur: PRIX_VITRINE, detail: PRIX_VITRINE_DETAIL },
            {
              libelle: "Refonte de site internet",
              valeur: PRIX_REFONTE,
              detail: `${mensualite(PRICING.refonte.monthly)}, ${ETALE}. Si vous avez déjà un site à moderniser.`,
            },
            {
              libelle: "Landing page",
              valeur: PRIX_LANDING,
              detail: `${mensualite(PRICING.landing.monthly)}, ${ETALE}. Une seule page, pour une campagne.`,
            },
          ]}
          lien={{ href: ANCRE_FORMULAIRE, label: "Recevoir mon devis sous 24 h" }}
          note="TVA non applicable, art. 293 B du CGI. Le devis est écrit et validé avant tout démarrage."
        />
      </Reveal>

      <PoleFAQ
        id="faq"
        surtitre="FAQ"
        titre="Vos questions sur la création d'un site vitrine"
        items={FAQ_SITE_VITRINE}
        lien={{ href: "/contact", label: "Poser une autre question" }}
      />

      <PoleSection
        id="autres-formules"
        fond="gris"
        surtitre="Nos autres formules"
        titre="Site vitrine, e-commerce, landing page, refonte ou application : quelle formule pour votre projet ?"
        intro="Les quatre autres formules ont leur propre page, avec leur prix et leur délai."
      >
        <PagesSoeurs />
        <Reveal className="mx-auto mt-8 max-w-3xl text-center">
          <p className="leading-relaxed text-muted-foreground">
            Toutes les formules sont comparées sur la page{" "}
            <Link href={pole.href} className={LIEN_TEXTE}>
              {pole.ancre}
            </Link>
            , et notre{" "}
            <Link href="/services" className={LIEN_TEXTE}>
              page des services
            </Link>{" "}
            présente nos quatre pôles.
          </p>
        </Reveal>
      </PoleSection>

      <PoleAutresPoles
        id="autres-poles"
        slug="sites-web"
        surtitre="Et ensuite"
        titre="Un site vitrine, et après ? Nos trois autres pôles"
        intro="Selon votre situation, nous ajoutons publicité, référencement ou automatisation, avec le même interlocuteur."
      />

      <FormulaireFinal
        id="formulaire"
        pole="site"
        page={URL_SITE_VITRINE}
        surtitre="Devis gratuit"
        titre="Votre site vitrine, chiffré sous 24 h"
        intro="Une question, puis vos coordonnées. Vous recevez une réponse écrite sous 24 h, sans engagement."
        question={{
          libelle: "Où en êtes-vous aujourd'hui ?",
          aide: "Aucune coordonnée demandée à cette étape.",
          options: OPTIONS_SITUATION,
        }}
        titreEtape2="Où vous répondre ?"
        boutonLabel="Recevoir ma réponse sous 24 h"
        calendlyLabel="ou réservez 30 min avec le fondateur"
        confirmation={{
          titre: "Merci, votre demande est bien reçue.",
          texte: "Nous vous répondons sous 24 h, par email ou par téléphone. Si vous préférez en parler de vive voix, réservez directement un créneau.",
        }}
      />

      <PoleCTA
        titre="Un projet de site vitrine, une question ?"
        texte="Réservez 30 minutes, c'est gratuit et vous parlez au fondateur."
        calendlyLabel={LABEL_CALENDLY}
        contactLabel="Écrire à l'agence"
        afficherTelephone
      />

      <StickyCtaBar
        label="Devis gratuit sous 24 h"
        href={ANCRE_FORMULAIRE}
        mentions={["Gratuit", "Sans engagement", "Réponse sous 24 h"]}
        formulaireId="formulaire"
      />
    </div>
  );
}
