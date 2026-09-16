import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  CreditCard,
  ExternalLink,
  HelpCircle,
  Quote,
  RefreshCw,
  ShoppingBag,
  ShoppingCart,
  Store,
  Truck,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import { LABEL_CALENDLY, SURTITRE_ZONE } from "@/data/poles";
import { cn } from "@/lib/utils";
import {
  BoutonLien,
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
  PolePrix,
  PoleSection,
  SectionSombre,
  StickyCtaBar,
  Timeline,
} from "@/components/pole";
import { getDiagnostic } from "@/lib/diagnostics/configs";
import { Conteneur, Surtitre } from "@/components/pole/pole-ui";
import { BorderBeam, CardBody, CardContainer, CardItem, HeroMesh, NumberTicker, Reveal, Spotlight } from "@/components/motion";
import { CaptureSite } from "../_illustrations/CaptureSite";
import {
  CAS_REELS,
  CAS_VEDETTE,
  COMPARATIF,
  CONSTAT,
  ENGAGEMENTS,
  FAQ_ECOMMERCE,
  FIL_ARIANE_ECOMMERCE,
  LIVRABLES,
  METHODE,
  OPTIONS_PROJET,
  OUTIL_ESTIMATION,
  PAGES_SOEURS,
  PRIX_ECOMMERCE,
  CHIPS_HERO,
  SITUATIONS,
  URL_SITE_ECOMMERCE,
  pole,
  type CasReel,
} from "./donnees";

/**
 * Sous-page « Site e-commerce » (/services/sites-web/site-ecommerce).
 * Composant serveur : le H1, les textes, la FAQ et le maillage sont dans le
 * HTML. Les composants animés (Reveal, NumberTicker, 3d-card, BorderBeam,
 * HeroMesh, Spotlight, FormulaireFinal, StickyCtaBar) sont des enfants
 * "use client" ; aucun composant WebGL ni mesure du DOM sur cette page.
 */

/** Ancre du formulaire final : cible des CTA de la page et de la barre collante. */
const ANCRE_FORMULAIRE = "#formulaire";

const LIEN_TEXTE =
  "rounded-sm font-semibold text-primary-texte underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const CARTE =
  "rounded-3xl border border-border bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-32px_rgba(15,23,42,0.18)]";

const ICONES_PROJET: Record<(typeof OPTIONS_PROJET)[number]["value"], React.ReactNode> = {
  "ecommerce-zero": <ShoppingCart />,
  "ecommerce-magasin": <Store />,
  "ecommerce-marketplace": <ShoppingBag />,
  "ecommerce-refonte": <RefreshCw />,
  "ecommerce-b2b": <Boxes />,
  "je-ne-sais-pas": <HelpCircle />,
};

const domaine = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "");

/* ── Hero ───────────────────────────────────────────────────────────────── */

function Hero() {
  const note = Number(SITE.reviews.rating);
  return (
    <section className="relative isolate overflow-hidden bg-background py-14 sm:py-20 lg:py-24">
      <HeroMesh intensite={0.9} />
      <Spotlight />
      <Conteneur>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="flex max-w-2xl flex-col">
            <Surtitre>{SURTITRE_ZONE}</Surtitre>
            <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Création de boutique en ligne à Paris et Rueil-Malmaison :{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                un site e-commerce qui vous appartient, {PRIX_ECOMMERCE.valeur}
              </span>
            </h1>
            <div className="mt-6 space-y-3 text-lg">
              <p className="leading-relaxed text-slate-600">
                Catalogue, paiement sécurisé, commandes et stock suivis : nous créons des sites e-commerce pour les
                artisans, les commerces et les marques qui veulent vendre en ligne sans dépendre d&apos;une marketplace.
              </p>
              {/* Masqué sur mobile : le bouton principal doit rester visible sans défilement (390 × 844). */}
              <p className="hidden leading-relaxed text-slate-600 sm:block">
                Prix fixe et délai écrits dans le devis, aucune commission sur vos ventes. Vous parlez au fondateur,
                qui conçoit et construit lui-même votre boutique.
              </p>
            </div>

            {/* Mobile : boutons juste après le texte (order), chips ensuite ; desktop : ordre du DOM (même gabarit que site-vitrine). */}
            <ul className="order-1 mt-6 flex flex-wrap gap-2 sm:order-none sm:mt-8" aria-label="Nos engagements">
              {CHIPS_HERO.map((chip) => {
                const Icon = chip.icon;
                return (
                  <li
                    key={chip.label}
                    className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-border bg-white/80 px-3 py-1.5 text-sm font-medium text-foreground backdrop-blur"
                  >
                    <Icon className="h-4 w-4 text-purple-700" strokeWidth={2} aria-hidden="true" />
                    {chip.label}
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <BoutonLien href={ANCRE_FORMULAIRE} label="Mon devis boutique sous 24 h" variante="primaire" />
              <BoutonLien href={SITE.calendly} label={LABEL_CALENDLY} external variante="secondaire" />
            </div>
            <p className="order-2 mt-4 text-sm text-muted-foreground sm:order-none">
              Vous voulez d&apos;abord un ordre de prix ?{" "}
              <Link href={OUTIL_ESTIMATION.href} className={LIEN_TEXTE}>
                Estimer le prix de votre boutique en 2 minutes
              </Link>{" "}
              avec notre outil gratuit.
            </p>

            {/* Trois chiffres, rendus côté serveur, animés à l'entrée. */}
            <dl className="order-3 mt-8 grid max-w-2xl grid-cols-3 gap-2 sm:order-none sm:mt-10 sm:gap-3">
              <Chiffre libelle="clients accompagnés">
                <NumberTicker value={150} />+
              </Chiffre>
              <Chiffre libelle={`sur ${SITE.reviews.count} avis`}>
                <NumberTicker value={note} decimalPlaces={1} delay={0.15} />
                <span className="text-lg font-semibold text-muted-foreground">/5</span>
              </Chiffre>
              <Chiffre libelle="pour un devis écrit">
                <NumberTicker value={24} delay={0.3} /> h
              </Chiffre>
            </dl>
          </div>

          {/* Illustration : une boutique client réelle dans son navigateur, en perspective légère (masquée sous lg). */}
          <div className="hidden lg:block">
            <MockupBoutique />
          </div>
        </div>
      </Conteneur>
    </section>
  );
}

function Chiffre({ libelle, children }: { libelle: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-white/70 px-3 py-3 backdrop-blur sm:px-5 sm:py-4">
      <dt className="order-2 text-xs text-muted-foreground sm:text-sm">{libelle}</dt>
      <dd className="text-xl font-bold tabular-nums text-foreground sm:text-2xl">{children}</dd>
    </div>
  );
}

/** Une boutique livrée (catalogue professionnel), vue dans son navigateur : vraie capture, domaine réel, deux repères de l'offre. */
function MockupBoutique() {
  return (
    <CardContainer intensite={60} containerClassName="w-full" className="w-full">
      <CardBody className="relative w-full max-w-md">
        <CardItem translateZ={20} className="w-full">
          <CaptureSite
            domaine="funestore.fr"
            src="/images/portfolio/gallery-funestore-catalogue.webp"
            alt="Catalogue de la boutique en ligne Funestore, articles funéraires pour les professionnels, livrée par l'agence"
            width={800}
            height={545}
            mode="couvrir"
            priority
            legende="funestore.fr : boutique en ligne livrée par l'agence, consultable en ligne"
            className="aspect-[16/11] rounded-xl shadow-[0_32px_64px_-32px_rgba(76,29,149,0.35)]"
          />
        </CardItem>
        <CardItem
          translateZ={60}
          className="absolute -left-8 top-14 rounded-2xl border border-border bg-white px-4 py-3 text-sm font-semibold text-foreground shadow-lg"
        >
          <span className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-purple-100 text-purple-700">
              <CreditCard className="h-4 w-4" strokeWidth={2} />
            </span>
            Paiement Stripe ou PayPal
          </span>
        </CardItem>
        <CardItem
          translateZ={50}
          className="absolute -right-4 bottom-10 rounded-2xl border border-border bg-white px-4 py-3 text-sm font-semibold text-foreground shadow-lg"
        >
          <span className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-pink-100 text-pink-600">
              <Truck className="h-4 w-4" strokeWidth={2} />
            </span>
            Commandes et stock suivis
          </span>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

/* ── Pour qui : quatre situations ───────────────────────────────────────── */

function PourQuiSituations() {
  return (
    <section id="pour-qui" className="bg-background py-16 sm:py-20">
      <Conteneur>
        <div className="mx-auto max-w-3xl text-center">
          <Surtitre>Pour qui, pour quel projet</Surtitre>
          <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">
            À qui s&apos;adresse la création d&apos;un site e-commerce sur mesure ?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            À ceux qui ont des produits à vendre et veulent une boutique à eux, plutôt qu&apos;une fiche sur la
            plateforme de quelqu&apos;un d&apos;autre.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {SITUATIONS.map((s, i) => {
            const Icon = s.icon;
            return (
              <li key={s.titre}>
                <Reveal
                  delay={i * 0.08}
                  y={16}
                  className="group flex h-full gap-4 rounded-2xl border border-border bg-card p-5 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_16px_32px_-16px_rgba(15,23,42,0.18)] motion-reduce:transition-none"
                >
                  <span
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{s.titre}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.texte}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Nous recevons à Rueil-Malmaison (92) et travaillons en visio avec les commerces de Paris et d&apos;Île-de-France,
          comme{" "}
          <Link href={pole.pageVille.href} className={LIEN_TEXTE}>
            agence web à Rueil-Malmaison
          </Link>{" "}
          et{" "}
          <Link href="/agence-web/paris" className={LIEN_TEXTE}>
            agence web à Paris
          </Link>
          , et partout en France à distance.
        </p>
      </Conteneur>
    </section>
  );
}

/* ── Ce que contient votre boutique : six livrables ─────────────────────── */

function GrilleLivrables() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {LIVRABLES.map((item, i) => {
        const Icon = item.icon;
        return (
          <li key={item.titre} className="h-full">
            <Reveal delay={i * 0.05} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_16px_32px_-20px_rgba(76,29,149,0.35)] motion-reduce:transition-none">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-semibold text-foreground">{item.titre}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.texte}</p>
              </div>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}

/* ── Preuve : cas réels ─────────────────────────────────────────────────── */

function LiensCas({ cas, className }: { cas: CasReel; className?: string }) {
  if (!cas.href && !cas.siteHref) return null;
  return (
    <div className={cn("flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold", className)}>
      {cas.href && (
        <Link href={cas.href} className={cn("inline-flex min-h-11 items-center gap-1", LIEN_TEXTE)}>
          Lire l&apos;étude de cas {cas.nom}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      )}
      {cas.siteHref && (
        <a
          href={cas.siteHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-1 rounded-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {domaine(cas.siteHref)}
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="sr-only"> (ouvre dans un nouvel onglet)</span>
        </a>
      )}
    </div>
  );
}

function CasVedette({ cas }: { cas: CasReel }) {
  return (
    <Reveal>
      <article className={cn("relative overflow-hidden p-6 sm:p-8 lg:p-10", CARTE)}>
        <BorderBeam size={120} duration={12} />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div>
            <Quote className="h-8 w-8 text-purple-200" strokeWidth={1.5} aria-hidden="true" />
            <blockquote className="mt-3">
              <p className="text-xl font-semibold leading-snug text-foreground sm:text-2xl">« {cas.citation} »</p>
              <footer className="mt-4 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{cas.nom}</span>, {cas.secteur.toLowerCase()}
              </footer>
            </blockquote>
            <LiensCas cas={cas} className="mt-5" />
          </div>
          <dl className="grid gap-5 self-center rounded-2xl bg-muted/40 p-5 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-purple-700">Le problème</dt>
              <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{cas.probleme}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-purple-700">Ce que nous avons fait</dt>
              <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{cas.action}</dd>
            </div>
          </dl>
        </div>
      </article>
    </Reveal>
  );
}

function CartesCas() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {CAS_REELS.map((cas, i) => (
        <Reveal key={cas.slug} delay={i * 0.08} className="h-full">
          <article
            className={cn(
              "flex h-full flex-col p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-24px_rgba(15,23,42,0.2)] motion-reduce:transition-none",
              CARTE
            )}
          >
            <h3 className="text-lg font-semibold text-foreground">{cas.nom}</h3>
            <p className="mt-1 text-sm font-medium text-primary-texte">{cas.secteur}</p>
            <dl className="mt-5 space-y-4">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-purple-700">Le problème</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{cas.probleme}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-purple-700">Ce que nous avons fait</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{cas.action}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-purple-700">Ce que le client dit</dt>
                <dd className="mt-1 text-sm leading-relaxed text-foreground">« {cas.citation} »</dd>
              </div>
            </dl>
            <LiensCas cas={cas} className="mt-auto pt-5" />
          </article>
        </Reveal>
      ))}
    </div>
  );
}

/* ── Pages sœurs du pôle ────────────────────────────────────────────────── */

function PagesSoeurs() {
  return (
    <PoleSection
      id="autres-formules"
      surtitre="Les autres formules du pôle"
      titre="Pas encore sûr qu'une boutique en ligne soit le bon format ?"
      intro="Un site vitrine, une landing page pour un seul produit ou une refonte peut suffire. Nous vous orientons lors de l'appel."
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {PAGES_SOEURS.map((page, i) => (
          <li key={page.href}>
            <Reveal delay={i * 0.05}>
              <Link
                href={page.href}
                className="group flex min-h-11 items-center justify-between gap-4 rounded-2xl border border-border bg-card px-5 py-4 font-medium text-foreground transition-[border-color,box-shadow] duration-300 hover:border-primary/40 hover:shadow-[0_16px_32px_-20px_rgba(76,29,149,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none"
              >
                {page.label}
                <ArrowRight
                  className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
      <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted-foreground">
        Toutes nos formules et leurs prix sont détaillés sur la page{" "}
        <Link href={pole.href} className={LIEN_TEXTE}>
          {pole.ancre}
        </Link>
        .
      </p>
    </PoleSection>
  );
}

/* ── Page ───────────────────────────────────────────────────────────────── */

const DIAGNOSTIC = getDiagnostic("sites-web-site-ecommerce")!;

export default function SiteEcommerceContent() {
  return (
    <div className="pt-16">
      <FilAriane elements={FIL_ARIANE_ECOMMERCE} />

      <Hero />

      {/* Diagnostic gratuit de la page, juste après le hero (fond gris : la section « pour qui » est blanche). */}
      <SectionOutil badge="Diagnostic gratuit" titre={DIAGNOSTIC.titre} accroche={DIAGNOSTIC.accroche} obtenez={DIAGNOSTIC.obtenez} fond="gris">
        <DiagnosticInteractif diagnostic={DIAGNOSTIC} page={URL_SITE_ECOMMERCE} />
      </SectionOutil>

      <PourQuiSituations />

      <Reveal y={16}>
        <PainPoints
          id="constat"
          surtitre="Le constat"
          titre="Pourquoi tant de boutiques en ligne ne vendent-elles pas ?"
          intro="Trois situations que nous voyons chaque semaine chez les commerçants et les créateurs qui nous appellent."
          points={CONSTAT}
        />
      </Reveal>

      <PoleSection
        id="contenu"
        surtitre="Ce que nous faisons"
        titre="Que contient un site e-commerce livré par ConvertiLab ?"
        intro="Six briques, toutes comprises dans le prix écrit sur votre devis."
      >
        <GrilleLivrables />
      </PoleSection>

      <CtaIntermediaire
        titre="Combien coûterait votre boutique en ligne ?"
        texte="Notre estimateur gratuit vous donne un ordre de prix en 2 minutes. Le devis écrit à prix fixe arrive sous 24 h après l'appel."
        bouton={{ href: OUTIL_ESTIMATION.href, label: "Estimer le prix de ma boutique" }}
        alternativeLabel="ou appelez-nous au"
      />

      <SectionSombre
        id="methode"
        surtitre="Notre méthode"
        titre="Comment créons-nous votre site e-commerce ?"
        intro="Quatre étapes, un seul interlocuteur du premier appel aux premières commandes. Le délai est écrit dans le devis."
      >
        <Reveal>
          <Timeline etapes={METHODE} sombre />
        </Reveal>
      </SectionSombre>

      <PoleSection
        id="realisations"
        fond="gris"
        surtitre="Preuve"
        titre="Des boutiques en ligne que vous pouvez consulter, des clients que vous pouvez lire"
        intro="Nous ne publions pas de chiffres de ventes : ils appartiennent à nos clients. Voici des boutiques livrées, ce que nous avons fait et les mots de leurs propriétaires."
      >
        {CAS_VEDETTE && <CasVedette cas={CAS_VEDETTE} />}
        <div className="mt-6">
          <CartesCas />
        </div>
        <Reveal className="mt-10 flex justify-center">
          <LienDiscret href="/portfolio" label="Voir toutes nos réalisations de sites internet" />
        </Reveal>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Citations reprises mot pour mot de nos études de cas. Aucun chiffre d&apos;affaires n&apos;est publié sans
          l&apos;accord écrit du client.
        </p>
      </PoleSection>

      <Reveal y={16}>
        <Comparatif
          id="comparatif"
          surtitre="Marketplace ou boutique à vous"
          titre="Vendre sur une marketplace ou sur votre propre site e-commerce : qu'est-ce qui change ?"
          gauche={COMPARATIF.gauche}
          droite={COMPARATIF.droite}
          note={COMPARATIF.note}
          fond="blanc"
        />
      </Reveal>

      <Reveal y={16}>
        <Engagements
          id="engagements"
          surtitre="Nos engagements"
          titre="Ce à quoi nous nous engageons, écrit sur le devis"
          intro="Six engagements sur notre façon de travailler. Aucun ne promet un chiffre de ventes : il dépend de vos produits, de vos prix et des visiteurs que vous amènerez."
          items={ENGAGEMENTS}
          className="bg-muted/30"
        />
      </Reveal>

      <PolePrix
        id="prix"
        surtitre="Prix et engagement"
        titre="Combien coûte la création d'un site e-commerce ?"
        intro="Le mensuel est un paiement étalé, pas un abonnement : la dernière mensualité réglée, vous ne nous devez plus rien. Aucune commission sur vos ventes."
        lignes={[
          { libelle: "Site e-commerce", valeur: PRIX_ECOMMERCE.valeur, detail: PRIX_ECOMMERCE.detail },
          {
            libelle: "Délai de livraison",
            valeur: PRIX_ECOMMERCE.delai,
            detail: "Selon le nombre de produits, les contenus disponibles et les connexions à vos outils.",
          },
          {
            libelle: "Frais de paiement",
            valeur: "Ceux de votre prestataire",
            detail: "Stripe ou PayPal facturent chaque transaction selon leur grille publique. Rien de notre côté.",
          },
        ]}
        lien={{ href: OUTIL_ESTIMATION.href, label: OUTIL_ESTIMATION.label }}
        note="TVA non applicable, art. 293 B du CGI. Estimation en 2 minutes, devis écrit sous 24 h."
      />

      <PoleFAQ
        id="faq"
        surtitre="FAQ"
        titre="Vos questions sur la création d'une boutique en ligne"
        items={FAQ_ECOMMERCE}
        lien={{ href: "/contact", label: "Poser une autre question" }}
      />

      <PagesSoeurs />

      <PoleAutresPoles
        id="autres-poles"
        slug="sites-web"
        surtitre="Et ensuite"
        titre="Une boutique, et après ? Nos trois autres pôles"
        intro="Google Shopping et Meta Ads pour amener des acheteurs, le référencement pour durer, l'IA pour rédiger vos fiches produits : avec le même interlocuteur."
      />

      <FormulaireFinal
        id="formulaire"
        pole="site"
        page={pole.href}
        surtitre="Devis gratuit"
        titre="Où en est votre projet de boutique en ligne ?"
        intro="Une question, puis vos coordonnées. Vous recevez une réponse écrite sous 24 h, sans engagement."
        question={{
          libelle: "Votre situation aujourd'hui",
          aide: "Aucune coordonnée demandée à cette étape.",
          options: OPTIONS_PROJET.map((o) => ({ ...o, icon: ICONES_PROJET[o.value] })),
        }}
        titreEtape2="Où vous répondre ?"
        boutonLabel="Recevoir ma réponse sous 24 h"
        calendlyLabel="ou réservez 30 min avec le fondateur"
        confirmation={{
          titre: "Merci, votre demande est bien reçue.",
          texte:
            "Nous vous répondons sous 24 h, par email ou par téléphone. Si vous préférez en parler de vive voix, réservez directement un créneau.",
        }}
      />

      <PoleCTA
        titre="Un projet de boutique en ligne, une question ?"
        texte="Réservez 30 minutes, c'est gratuit et vous parlez au fondateur."
        calendlyLabel={LABEL_CALENDLY}
        contactLabel="Écrire à l'agence"
        afficherTelephone
      />

      <StickyCtaBar
        label="Devis boutique sous 24 h"
        href={ANCRE_FORMULAIRE}
        mentions={["Gratuit", "Sans engagement", "Réponse sous 24 h"]}
        formulaireId="formulaire"
      />
    </div>
  );
}
