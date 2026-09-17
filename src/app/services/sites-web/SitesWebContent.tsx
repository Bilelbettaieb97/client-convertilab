import Link from "next/link";
import {
  ArrowRight,
  Check,
  ExternalLink,
  Globe,
  HelpCircle,
  LayoutTemplate,
  Quote,
  RefreshCw,
  ShoppingCart,
  Workflow,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import { CHIFFRES_COMMUNS, LABEL_CALENDLY, SURTITRE_ZONE } from "@/data/poles";
import { cn } from "@/lib/utils";
import {
  FilAriane,
  PoleHero,
  PoleSection,
  PolePrix,
  PoleFAQ,
  PoleAutresPoles,
  PoleCTA,
  PainPoints,
  Timeline,
  SectionSombre,
  CtaIntermediaire,
  FormulaireFinal,
  StickyCtaBar,
  BoutonLien,
  SectionOutil,
  LienDiscret,
} from "@/components/pole";
import DesignScoreForm from "@/components/design-score/DesignScoreForm";
import { BorderBeam, CardBody, CardContainer, CardItem, Reveal } from "@/components/motion";
import {
  AUTRES_SITES,
  CAS_REELS,
  CAS_VEDETTE,
  CHIPS_HERO,
  CONSTAT,
  FORMULES,
  INCLUS,
  METHODE,
  OPTIONS_PROJET,
  PRIX,
  SITES_WEB_FAQ,
  SITES_WEB_FIL,
  pole,
  type CasReel,
} from "./donnees";
import { CaptureSite } from "./_illustrations/CaptureSite";
import { MiniatureOffre, typeOffre } from "./_illustrations/MiniatureOffre";

/**
 * Page pôle « Création de site internet » (/services/sites-web), phase 2.
 * Composant serveur : le H1, les textes, la FAQ et le maillage sont dans le
 * HTML. Le hero est le composant partagé PoleHero (même fond, coches, boutons
 * et chiffres que le hub /services). Les composants animés (Reveal, 3d-card,
 * BorderBeam, FormulaireFinal, StickyCtaBar) sont des enfants "use client" ;
 * aucun composant WebGL ni mesure du DOM sur cette page.
 */

const LIEN_TEXTE =
  "rounded-sm font-semibold text-primary-texte underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const CARTE =
  "rounded-3xl border border-border bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-32px_rgba(15,23,42,0.18)]";

const ICONES_PROJET: Record<(typeof OPTIONS_PROJET)[number]["value"], React.ReactNode> = {
  "site-vitrine": <Globe />,
  "landing-page": <LayoutTemplate />,
  refonte: <RefreshCw />,
  ecommerce: <ShoppingCart />,
  application: <Workflow />,
  "je-ne-sais-pas": <HelpCircle />,
};

const domaine = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "");

/* ── Hero : illustration ────────────────────────────────────────────────── */

/** Trois coches du hero : les trois premiers engagements des chips, texte inchangé. */
const REASSURANCE_HERO = CHIPS_HERO.slice(0, 3).map((chip) => chip.label);

/**
 * Un site vitrine livré, vu dans son navigateur (vraie capture, domaine réel),
 * avec deux repères de l'offre. La perspective vient de PoleHero (asideRelief) :
 * aucun composant client ici. Cadre 5/4 : environ 360 px de haut pour 448 px de
 * large, la capture (1200 × 750) remplit le cadre sans être rognée.
 */
function MockupSite() {
  return (
    <div className="w-full">
      <div className="relative">
      <CaptureSite
        domaine="jsmjardinage.com"
        src="/images/portfolio/portfolio-jsm-hero.webp"
        alt="Page d'accueil du site vitrine de JSM Jardinage, paysagiste, livré par l'agence"
        width={1200}
        height={750}
        mode="couvrir"
        priority
        className="aspect-[5/4] rounded-xl shadow-[0_32px_64px_-32px_rgba(76,29,149,0.35)]"
      />
      {/* Repères à cheval sur les bords du cadre (barre d'adresse en haut, bord bas) : ils ne recouvrent
          jamais le menu ni le titre du site montré. Légère sortie du cadre à partir de lg. */}
      <div className="absolute -top-4 right-3 rounded-2xl border border-border bg-white px-4 py-3 text-sm font-semibold text-foreground shadow-lg lg:-right-4">
        <span className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-purple-100 text-purple-700">
            <LayoutTemplate className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          </span>
          Maquette gratuite en 48 h
        </span>
      </div>
      <div className="absolute -bottom-4 left-3 rounded-2xl border border-border bg-white px-4 py-3 text-sm font-semibold text-foreground shadow-lg lg:-left-8">
        <span className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-pink-100 text-pink-600">
            <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
          </span>
          Livré en 2 semaines
        </span>
      </div>
      </div>
      <p className="mt-7 text-center text-xs text-muted-foreground">jsmjardinage.com : site vitrine livré par l&apos;agence, consultable en ligne</p>
    </div>
  );
}

/* ── Formules en cartes 3D ──────────────────────────────────────────────── */

function CartesFormules() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
      {FORMULES.map((f, i) => (
        <Reveal
          key={f.titre}
          delay={i * 0.06}
          className={cn("h-full", i < 3 ? "lg:col-span-2" : "lg:col-span-3")}
        >
          <CardContainer intensite={70} containerClassName="h-full" className="h-full w-full">
            <CardBody
              className={cn(
                "relative flex h-full w-full flex-col p-6 sm:p-7 transition-shadow duration-300 hover:shadow-[0_32px_64px_-32px_rgba(76,29,149,0.3)] motion-reduce:transition-none",
                CARTE,
                f.miseEnAvant && "border-primary/40"
              )}
            >
              {f.miseEnAvant && (
                // Le faisceau dépasse la carte pendant sa course : on le clippe ici, sans toucher au preserve-3d de la carte.
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]" aria-hidden="true">
                  <BorderBeam size={90} duration={10} />
                </div>
              )}
              {/* Miniature de la formule : vraie capture de site client ou maquette CSS (mention « Exemple »). */}
              <CardItem translateZ={25} className="mb-5 w-full">
                <MiniatureOffre type={typeOffre(f.lien.href)} />
              </CardItem>
              <div className="flex flex-wrap items-center gap-2">
                {f.badge && (
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-xs font-semibold text-white">
                    {f.badge}
                  </span>
                )}
                <span className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-foreground">
                  {f.delai}
                </span>
              </div>
              <CardItem as="h3" translateZ={30} className="mt-4 w-full text-xl font-semibold text-foreground">
                {f.titre}
              </CardItem>
              <CardItem as="p" translateZ={20} className="mt-2 w-full text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">Pour vous si : </span>
                {f.cible}
              </CardItem>
              <CardItem translateZ={40} className="mt-5 w-full">
                <span className="text-3xl font-bold tracking-tight text-foreground">{f.prix}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{f.prixDetail}</span>
              </CardItem>
              <CardItem as="ul" translateZ={15} className="mt-5 w-full space-y-2">
                {f.inclus.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </CardItem>
              <div className="mt-auto flex flex-col gap-3 pt-7">
                <BoutonLien
                  href={f.chiffrer.href}
                  label={f.chiffrer.label}
                  variante={f.miseEnAvant ? "primaire" : "secondaire"}
                  className="w-full"
                />
                <LienDiscret href={f.lien.href} label={f.lien.label} className="text-sm" />
              </div>
            </CardBody>
          </CardContainer>
        </Reveal>
      ))}
    </div>
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
                <span className="font-semibold text-foreground">{cas.nom}</span>, {cas.prestation.toLowerCase()}
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
    <div className="grid gap-5 md:grid-cols-3">
      {CAS_REELS.map((cas, i) => (
        <Reveal key={cas.slug} delay={i * 0.08} className="h-full">
          <article
            className={cn(
              "flex h-full flex-col p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-24px_rgba(15,23,42,0.2)] motion-reduce:transition-none",
              CARTE
            )}
          >
            <h3 className="text-lg font-semibold text-foreground">{cas.nom}</h3>
            <p className="mt-1 text-sm font-medium text-primary-texte">{cas.prestation}</p>
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

function AutresSites() {
  if (AUTRES_SITES.length === 0) return null;
  return (
    <Reveal className="mt-10 flex flex-col items-start gap-4">
      <ul className="flex flex-wrap gap-2" aria-label="Autres sites livrés, consultables en ligne">
        {AUTRES_SITES.map((s) => (
          <li key={s.slug}>
            <a
              href={s.siteHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none"
            >
              {s.nom}
              <span className="text-muted-foreground">· {s.secteur}</span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
              <span className="sr-only"> (ouvre dans un nouvel onglet)</span>
            </a>
          </li>
        ))}
      </ul>
      <LienDiscret href="/portfolio" label="Voir toutes nos réalisations de sites internet" />
    </Reveal>
  );
}

/* ── Tout est compris dans le prix ──────────────────────────────────────── */

function GrilleInclus() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {INCLUS.map((item, i) => {
        const Icon = item.icon;
        return (
          <Reveal key={item.titre} delay={i * 0.05} className="h-full">
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
        );
      })}
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────────────────── */

export default function SitesWebContent() {
  const outilEstimation = pole.outils[0];
  const outilDesign = pole.outils[1];

  return (
    <div className="pt-16">
      <FilAriane elements={SITES_WEB_FIL} />

      <PoleHero
        surtitre={SURTITRE_ZONE}
        titre="Création de site internet à Rueil-Malmaison et Paris : un site qui convertit vos visiteurs en clients"
        motsCles={["site internet", "clients"]}
        texte={[
          "Nous créons des sites internet pour les artisans, les commerces, les indépendants et les petites équipes : site vitrine professionnel, e-commerce, landing page, refonte ou application web sur mesure. Chaque site est conçu pour vous apporter des demandes.",
          "Prix fixe écrit avant de commencer, paiement étalé, pas d'abonnement, livraison en 2 semaines. Prise de rendez-vous, devis en ligne et relances automatiques s'intègrent dès le départ.",
        ]}
        reassurance={REASSURANCE_HERO}
        boutonPrimaire={{ href: "/demande-maquette", label: "Ma maquette gratuite en 48 h" }}
        boutonSecondaire={{ href: SITE.calendly, label: LABEL_CALENDLY, external: true }}
        mention={
          <>
            Vous voulez d&apos;abord un ordre de prix ?{" "}
            <Link href={outilEstimation.href} className="font-medium text-primary-texte underline-offset-4 hover:underline">
              Estimez le prix de votre site en 2 minutes
            </Link>{" "}
            avec notre outil gratuit.
          </>
        }
        chiffres={[...CHIFFRES_COMMUNS, { valeur: "2 semaines", libelle: "pour livrer votre site" }]}
        aside={<MockupSite />}
        asideRelief
        asideMobile
      />

      {/* Outil gratuit du pôle, juste après le hero (fond blanc, le constat est gris) : score design, confiance et mobile d'un site existant. */}
      <SectionOutil
        disposition="large"
        badge="Outil gratuit"
        titre="Votre site actuel apporte-t-il des demandes ? Testez-le en 60 secondes"
        accroche="Entrez l'adresse de votre site : vous obtenez un score sur son design, sa lisibilité, la confiance qu'il inspire et son affichage sur téléphone, avec les points à corriger en premier."
        obtenez={[
          "Un score global et six notes : appel à l'action, hiérarchie visuelle, confiance, mobile, images, navigation",
          "Les problèmes trouvés, classés par priorité, et ce qui fonctionne déjà",
          "Le rapport complet en PDF par email, avec un plan d'action",
        ]}
      >
        <div className="mx-auto max-w-3xl rounded-3xl bg-[#0a0a1a] p-6 shadow-[0_24px_48px_-24px_rgba(15,23,42,0.35)] sm:p-10">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <DesignScoreForm />
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-muted-foreground">
          Pas encore de site ?{" "}
          <Link href="/estimation-prix-site-web" className="font-semibold text-primary-texte underline underline-offset-4 hover:text-foreground">
            Estimez le prix du vôtre en deux minutes
          </Link>
          , sans engagement.
        </p>
      </SectionOutil>

      <PainPoints
        id="constat"
        surtitre="Le constat"
        titre="Votre site internet vous apporte-t-il vraiment des clients ?"
        intro="Trois situations que nous rencontrons chaque semaine chez les artisans, les commerces et les indépendants. Si vous vous reconnaissez dans l'une d'elles, c'est là que nous commençons."
        points={CONSTAT}
      />

      <PoleSection
        id="offres"
        surtitre="Nos formules"
        titre="Quel type de site internet correspond à votre projet ?"
        intro="Cinq formules, un prix fixe pour chacune, un délai écrit et une page détaillée pour aller plus loin. Notre agence de création de site internet travaille avec des entreprises de 1 à 30 personnes, à Rueil-Malmaison, à Paris et partout en France."
      >
        <CartesFormules />
        <Reveal className="mx-auto mt-12 max-w-3xl space-y-3 text-center">
          <p className="leading-relaxed text-muted-foreground">
            Vous avez déjà un site ?{" "}
            <Link href={outilDesign.href} className={LIEN_TEXTE}>
              {outilDesign.label}
            </Link>{" "}
            en 60 secondes : vous saurez s&apos;il faut le retoucher ou le refaire.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Nous recevons à Rueil-Malmaison (92) et nous travaillons en rendez-vous ou en visio avec les entreprises de
            Paris et de toute l&apos;Île-de-France. Voir notre{" "}
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

      <PoleSection
        id="realisations"
        fond="gris"
        surtitre="Preuve"
        titre="Des sites que vous pouvez consulter, des clients que vous pouvez lire"
        intro="Nous ne publions pas de chiffres que nous ne pouvons pas prouver. Voici des sites livrés que vous pouvez ouvrir maintenant, le problème de départ, ce que nous avons fait, et les mots exacts de leurs propriétaires."
      >
        {CAS_VEDETTE && <CasVedette cas={CAS_VEDETTE} />}
        <div className="mt-6">
          <CartesCas />
        </div>
        <AutresSites />
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Citations reprises mot pour mot de nos études de cas. Aucun chiffre d&apos;affaires n&apos;est publié sans
          l&apos;accord écrit du client.
        </p>
      </PoleSection>

      <CtaIntermediaire
        titre="Vous voulez un site qui vous apporte des demandes ?"
        texte="Recevez une maquette gratuite de votre page d'accueil sous 48 h. Vous validez le design avant que nous écrivions la moindre ligne de code."
        bouton={{ href: "/demande-maquette", label: "Ma maquette gratuite en 48 h" }}
        alternativeLabel="ou appelez-nous au"
      />

      <SectionSombre
        id="methode"
        surtitre="Notre méthode"
        titre="Comment créons-nous votre site internet en 2 semaines ?"
        intro="Quatre étapes, toujours les mêmes, et un seul interlocuteur du premier appel à la mise en ligne. Vous savez à chaque moment où en est votre site."
      >
        <Reveal>
          <Timeline etapes={METHODE} sombre />
        </Reveal>
      </SectionSombre>

      <PoleSection
        id="inclus"
        fond="gris"
        surtitre="Tout est compris dans le prix"
        titre="Que contient un site internet livré par ConvertiLab ?"
        intro="Un site internet qui convertit ne se résume pas à un joli design. Voici ce qui est compris dans le prix, sans supplément en cours de route."
      >
        <GrilleInclus />
      </PoleSection>

      <PolePrix
        id="prix"
        surtitre="Prix et engagement"
        titre="Combien coûte la création d'un site internet ?"
        intro="Les prix ci-dessous sont ceux de nos devis. Le mensuel est un paiement étalé, pas un abonnement : une fois la dernière mensualité réglée, vous ne nous devez plus rien."
        lignes={[
          { libelle: "Landing page", valeur: PRIX.landing.valeur, detail: PRIX.landing.detail },
          { libelle: "Site vitrine professionnel", valeur: PRIX.vitrine.valeur, detail: PRIX.vitrine.detail },
          { libelle: "Refonte de site internet", valeur: PRIX.refonte.valeur, detail: PRIX.refonte.detail },
          { libelle: "Site e-commerce", valeur: PRIX.ecommerce.valeur, detail: PRIX.ecommerce.detail },
          { libelle: "Application web sur mesure", valeur: PRIX.application.valeur, detail: PRIX.application.detail },
        ]}
        engagementsTitre="Ce à quoi nous nous engageons"
        engagements={[
          "Un prix fixe écrit avant de commencer, sans supplément en cours de route",
          "Site vitrine et refonte livrés en 2 semaines, landing page en 5 à 7 jours",
          "Une maquette gratuite de votre page d'accueil sous 48 h",
          "Un seul interlocuteur, le fondateur, du premier appel à la mise en ligne",
          "Vous restez propriétaire du site, du nom de domaine et des contenus",
        ]}
        lien={{ href: outilEstimation.href, label: outilEstimation.label }}
        note="Estimation en 2 minutes, réponse sous 24 h."
      />

      <PoleFAQ
        id="faq"
        surtitre="FAQ"
        titre="Vos questions sur la création de site internet"
        items={SITES_WEB_FAQ}
        lien={{ href: "/contact", label: "Poser une autre question" }}
      />

      <PoleAutresPoles
        id="autres-poles"
        slug="sites-web"
        surtitre="Et ensuite"
        titre="Un site, et après ? Nos trois autres pôles"
        intro="Selon votre situation, nous ajoutons publicité, référencement ou automatisation, avec le même interlocuteur."
      />

      <FormulaireFinal
        pole="site"
        surtitre="Devis gratuit"
        titre="Quel site internet pour votre activité ?"
        intro="Une question, puis vos coordonnées. Vous recevez une réponse écrite sous 24 h, sans engagement."
        question={{
          libelle: "Quel est votre projet ?",
          aide: "Aucune coordonnée demandée à cette étape.",
          options: OPTIONS_PROJET.map((o) => ({ ...o, icon: ICONES_PROJET[o.value] })),
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
        titre="Un projet de site internet, une question ?"
        texte="Réservez 30 minutes, c'est gratuit et vous parlez au fondateur."
        calendlyLabel={LABEL_CALENDLY}
        contactLabel="Écrire à l'agence"
        afficherTelephone
      />

      <StickyCtaBar
        label="Devis gratuit sous 24 h"
        href="#formulaire"
        mentions={["Gratuit", "Sans engagement", "Réponse sous 24 h"]}
      />
    </div>
  );
}
