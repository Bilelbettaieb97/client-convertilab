import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  ClipboardList,
  ExternalLink,
  FolderOpen,
  GraduationCap,
  HelpCircle,
  Table2,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import { LABEL_CALENDLY, SURTITRE_ZONE } from "@/data/poles";
import { cn } from "@/lib/utils";
import {
  BoutonLien,
  CtaIntermediaire,
  FilAriane,
  FormulaireFinal,
  SectionOutil,
  DiagnosticInteractif,
  LienDiscret,
  PainPoints,
  PoleAutresPoles,
  PoleCTA,
  PoleFAQ,
  PoleLivrables,
  PolePreuve,
  PolePrix,
  PoleSection,
  PourQui,
  SectionSombre,
  StickyCtaBar,
  Timeline,
} from "@/components/pole";
import { getDiagnostic } from "@/lib/diagnostics/configs";
import { Conteneur, Surtitre } from "@/components/pole/pole-ui";
import { CardBody, CardContainer, CardItem, HeroMesh, NumberTicker, Reveal, Spotlight } from "@/components/motion";
import { MockEspaceClient } from "../_illustrations/MockEspaceClient";
import {
  ANCRE_FORMULAIRE,
  APPLICATION_WEB_FAQ,
  APPLICATION_WEB_FIL,
  APPLICATION_WEB_URL,
  CAS_REELS,
  CAS_USAGE,
  CHIPS_HERO,
  CONSTAT,
  ENGAGEMENT_ECRIT,
  ENGAGEMENTS_PRIX,
  LIGNES_PRIX,
  LIVRABLES,
  METHODE,
  NOS_OUTILS,
  OPTIONS_APPLICATION,
  PAGES_SOEURS,
  PAS_POUR,
  POUR,
  pole,
} from "./donnees";

/**
 * Sous-page « Application web sur mesure » (/services/sites-web/application-web).
 * Composant serveur : le H1, les textes, la FAQ et le maillage sont dans le
 * HTML. Les composants animés (Reveal, NumberTicker, 3d-card, HeroMesh,
 * Spotlight, FormulaireFinal, StickyCtaBar) sont des enfants "use client" ;
 * aucun composant WebGL ni mesure du DOM sur cette page.
 */

const LIEN_TEXTE =
  "rounded-sm font-semibold text-primary-texte underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const CARTE =
  "rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-32px_rgba(15,23,42,0.18)]";

const ICONES_APPLICATION: Record<(typeof OPTIONS_APPLICATION)[number]["value"], React.ReactNode> = {
  "portail-client": <FolderOpen className="h-5 w-5" />,
  "rendez-vous": <CalendarCheck className="h-5 w-5" />,
  "devis-en-ligne": <ClipboardList className="h-5 w-5" />,
  "outil-interne": <Table2 className="h-5 w-5" />,
  "espace-membre": <GraduationCap className="h-5 w-5" />,
  "je-ne-sais-pas": <HelpCircle className="h-5 w-5" />,
};

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
              Application web sur mesure à Paris et Rueil-Malmaison :{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                l&apos;outil métier qui remplace vos tableurs et vos ressaisies
              </span>
            </h1>
            <div className="mt-6 space-y-3 text-lg">
              <p className="leading-relaxed text-slate-600">
                Portail client, prise de rendez-vous, devis en ligne, espace membre, tableau de bord : nous concevons
                des applications web sur mesure pour les artisans, les commerces, les cabinets et les PME de 3 à 30
                personnes, reliées aux outils que vous utilisez déjà.
              </p>
              {/* Masqué sur mobile : le bouton principal doit rester visible sans défilement (390 × 844). */}
              <p className="hidden leading-relaxed text-slate-600 sm:block">
                Diagnostic gratuit de 30 minutes, puis devis à prix fixe par phase avec le délai écrit. Le code et les
                données vous appartiennent.
              </p>
            </div>
            {/* Quatre chips de réassurance, toutes vraies et tenues sur la page prix. Mobile : boutons juste après le texte (order), chips ensuite ; desktop : ordre du DOM (même gabarit que site-vitrine). */}
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

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <BoutonLien href={ANCRE_FORMULAIRE} label="Décrire mon projet, réponse sous 24 h" variante="primaire" />
              <BoutonLien href={SITE.calendly} label={LABEL_CALENDLY} external variante="secondaire" />
            </div>
          </div>

          {/* Illustration : un espace client d'exemple en perspective légère, badge « Exemple », aucune donnée réelle (masquée sous lg). */}
          <div className="hidden lg:block">
            <MockupApplication />
          </div>
        </div>

        {/* Trois repères, rendus côté serveur, animés à l'entrée. */}
        <dl className="mt-10 grid max-w-3xl grid-cols-3 gap-2 sm:mt-12 sm:gap-4">
          <Chiffre libelle="clients accompagnés">
            <NumberTicker value={150} />+
          </Chiffre>
          <Chiffre libelle={`sur ${SITE.reviews.count} avis`}>
            <NumberTicker value={note} decimalPlaces={1} delay={0.15} />
            <span className="text-lg font-semibold text-muted-foreground">/5</span>
          </Chiffre>
          <Chiffre libelle="pour une réponse écrite">
            <NumberTicker value={24} delay={0.3} /> h
          </Chiffre>
        </dl>
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

/**
 * Espace client d'exemple (barre latérale, indicateurs, dossiers et statuts),
 * badge « Exemple » : la forme d'un outil métier livré, aucune donnée réelle.
 */
function MockupApplication() {
  return (
    <CardContainer intensite={60} containerClassName="w-full" className="w-full">
      <CardBody className="relative w-full max-w-md">
        <CardItem translateZ={20} className="w-full">
          <MockEspaceClient />
        </CardItem>
        {/* Repères flottants posés sur la barre de recherche et la ligne de pied de la maquette : aucun texte utile couvert. */}
        <CardItem
          translateZ={60}
          className="absolute -left-8 top-12 rounded-2xl border border-border bg-white px-4 py-3 text-sm font-semibold text-foreground shadow-lg"
        >
          <span className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-purple-100 text-purple-700">
              <CalendarCheck className="h-4 w-4" strokeWidth={2} />
            </span>
            Rendez-vous confirmé
          </span>
        </CardItem>
        <CardItem
          translateZ={50}
          className="absolute -right-4 bottom-[3.75rem] rounded-2xl border border-border bg-white px-4 py-3 text-sm font-semibold text-foreground shadow-lg"
        >
          <span className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-pink-100 text-pink-600">
              <Check className="h-4 w-4" strokeWidth={2.5} />
            </span>
            Devis envoyé
          </span>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

/* ── Six cas d'usage ────────────────────────────────────────────────────── */

function CartesCasUsage() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {CAS_USAGE.map((cas, i) => {
        const Icon = cas.icon;
        return (
          <li key={cas.titre} className="h-full">
            <Reveal
              delay={i * 0.06}
              y={16}
              className={cn(
                "group flex h-full flex-col p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_24px_48px_-24px_rgba(76,29,149,0.3)] motion-reduce:transition-none",
                CARTE
              )}
            >
              <div className="flex items-center justify-between">
                <span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-purple-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{cas.titre}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cas.texte}</p>
              <p className="mt-auto pt-4 text-xs font-medium text-foreground">
                <span className="text-muted-foreground">Pour : </span>
                {cas.pourQui}
              </p>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}

/* ── Preuve : nos propres outils (colonne de droite) ────────────────────── */

function NosOutils() {
  return (
    <Reveal y={16}>
      <div className={cn("relative overflow-hidden p-6 sm:p-7", CARTE)}>
        <p className="text-xs font-semibold uppercase tracking-wider text-purple-700">Nos propres applications</p>
        <h3 className="mt-2 text-lg font-semibold text-foreground">Ce que vous pouvez ouvrir maintenant</h3>
        <ul className="mt-5 space-y-4">
          {NOS_OUTILS.map(({ icon: Icon, titre, texte, href, external }) => (
            <li key={titre} className="flex gap-3">
              <span
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                aria-hidden="true"
              >
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn("inline-flex items-center gap-1 text-foreground", LIEN_TEXTE)}
                  >
                    {titre}
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    <span className="sr-only"> (ouvre dans un nouvel onglet)</span>
                  </a>
                ) : (
                  <Link href={href} className={cn("inline-flex items-center gap-1 text-foreground", LIEN_TEXTE)}>
                    {titre}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                )}
                <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{texte}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

/* ── Pages sœurs du pôle ────────────────────────────────────────────────── */

function PagesSoeurs() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {PAGES_SOEURS.map((page, i) => (
        <li key={page.href} className="h-full">
          <Reveal delay={i * 0.05} y={12} className="h-full">
            <Link
              href={page.href}
              className={cn(
                "group flex h-full min-h-11 flex-col justify-between p-5 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_16px_32px_-20px_rgba(76,29,149,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none",
                CARTE
              )}
            >
              <span className="font-semibold text-foreground">{page.label}</span>
              {page.prix && (
                <span className="mt-2 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{page.prix}</span> · {page.delai}
                </span>
              )}
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary-texte">
                Voir la formule
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

/* ── Page ───────────────────────────────────────────────────────────────── */

const DIAGNOSTIC = getDiagnostic("sites-web-application-web")!;

export default function ApplicationWebContent() {
  const outilEstimation = pole.outils[0];

  return (
    <div className="pt-16">
      <FilAriane elements={APPLICATION_WEB_FIL} />

      <Hero />

      {/* Diagnostic gratuit de la page, juste après le hero (fond gris : la section des cas d'usage est blanche). */}
      <SectionOutil badge="Diagnostic gratuit" titre={DIAGNOSTIC.titre} accroche={DIAGNOSTIC.accroche} obtenez={DIAGNOSTIC.obtenez} fond="gris">
        <DiagnosticInteractif diagnostic={DIAGNOSTIC} page={APPLICATION_WEB_URL} />
      </SectionOutil>

      <PoleSection
        id="cas-usage"
        surtitre="Pour qui, pour quel problème"
        titre="Quand un site internet ne suffit plus : six applications web que nous construisons"
        intro="Une application web sur mesure fait travailler des données, elle ne se contente pas de présenter votre activité. Les six formes qu'elle prend le plus souvent chez nos clients."
      >
        <CartesCasUsage />
        <Reveal className="mx-auto mt-12 max-w-3xl space-y-3 text-center">
          <p className="leading-relaxed text-muted-foreground">
            Souvent, l&apos;application est un module ajouté à votre site. Si vous partez de zéro, commencez par{" "}
            <Link href={outilEstimation.href} className={LIEN_TEXTE}>
              estimer le prix de votre site en 2 minutes
            </Link>
            , puis nous chiffrons le module ensemble.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Nous recevons à Rueil-Malmaison (92) et travaillons en visio avec toute l&apos;Île-de-France : voir notre{" "}
            <Link href="/agence-web/paris" className={LIEN_TEXTE}>
              agence web à Paris
            </Link>{" "}
            et notre{" "}
            <Link href={pole.pageVille.href} className={LIEN_TEXTE}>
              agence web à Rueil-Malmaison
            </Link>
            .
          </p>
        </Reveal>
      </PoleSection>

      <Reveal y={16}>
        <PainPoints
          id="constat"
          surtitre="Le constat"
          titre="Trois signes qu'une application web sur mesure vous ferait gagner du temps"
          intro="Les situations que nous rencontrons le plus souvent au diagnostic."
          points={CONSTAT}
        />
      </Reveal>

      <PoleSection
        id="livrables"
        surtitre="Ce que vous obtenez"
        titre="Que contient une application web livrée par ConvertiLab ?"
        intro="Voici ce qui est compris dans le devis."
      >
        <Reveal y={16}>
          <PoleLivrables livrables={LIVRABLES} />
        </Reveal>
        <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Lecture d&apos;emails, réponses aux devis, rédaction :{" "}
          <Link href="/services/integration-ia" className={LIEN_TEXTE}>
            notre intégration IA
          </Link>{" "}
          s&apos;en charge avec Claude, avec vos règles et votre ton.
        </p>
      </PoleSection>

      <CtaIntermediaire
        id="cta-diagnostic"
        titre="Combien d'heures par semaine partent dans les ressaisies ?"
        texte="C'est la première chose que nous mesurons lors du diagnostic gratuit de 30 minutes, avec un avis honnête à la clé."
        bouton={{ href: ANCRE_FORMULAIRE, label: "Décrire mon projet, réponse sous 24 h" }}
        alternativeLabel="ou appelez-nous au"
      />

      <SectionSombre
        id="methode"
        surtitre="Notre méthode"
        titre="Comment développons-nous votre application web sur mesure ?"
        intro="Cinq repères dans le temps, toujours dans le même ordre."
      >
        <Reveal y={16}>
          <Timeline etapes={METHODE} sombre />
        </Reveal>
      </SectionSombre>

      <PolePreuve
        id="preuve"
        surtitre="Ce que vous pouvez vérifier"
        titre="Des applications que vous pouvez ouvrir, des sites où vous pouvez tester les parcours"
        texte={[
          "Nous ne publions aucun gain de productivité ni chiffre d'affaires que nous ne pouvons pas prouver. Nos propres applications web, que nous exploitons chaque jour, sont notre première preuve.",
          "Chez nos clients, l'application est souvent un module intégré au site : devis guidé, espace client, réservation en ligne. Les trois sites ci-dessous sont consultables.",
        ]}
        note="Citations reprises mot pour mot de nos études de cas, aucun chiffre d'affaires publié."
        cas={CAS_REELS}
        lien={{ href: "/portfolio", label: "Voir toutes nos réalisations" }}
        aside={<NosOutils />}
      />

      <Reveal y={16}>
        <PourQui
          id="pour-qui"
          surtitre="Transparence"
          titre="Nous préférons vous dire non que vous faire développer un outil inutile"
          intro="Une application sur mesure n'est pas toujours la bonne réponse."
          pour={POUR}
          pasPour={PAS_POUR}
          engagement={ENGAGEMENT_ECRIT}
        />
      </Reveal>

      <Reveal y={16}>
        <PolePrix
          id="prix"
          surtitre="Prix et engagement"
          titre="Combien coûte une application web sur mesure ?"
          intro="Pas de tarif unique : un module de réservation et un portail client n'ont pas le même périmètre. Chaque devis est écrit à prix fixe par phase."
          lignes={LIGNES_PRIX}
          engagementsTitre="Ce à quoi nous nous engageons"
          engagements={ENGAGEMENTS_PRIX}
          lien={{ href: ANCRE_FORMULAIRE, label: "Recevoir un devis pour mon application" }}
          note="TVA non applicable, art. 293 B du CGI. Le devis est écrit et validé avant toute ligne de code."
        />
      </Reveal>

      <PoleFAQ
        id="faq"
        surtitre="FAQ"
        titre="Vos questions sur le développement d'une application web sur mesure"
        items={APPLICATION_WEB_FAQ}
        lien={{ href: "/contact", label: "Poser une autre question" }}
      />

      <PoleSection
        id="autres-formules"
        fond="gris"
        surtitre="Le pôle création de site"
        titre="Les autres formules de notre pôle création de site internet"
        intro="Une application s'ajoute souvent à un site ou se construit avec lui. Les quatre autres formules du pôle, avec leur prix fixe et leur délai."
      >
        <PagesSoeurs />
        <Reveal className="mt-8 text-center">
          <LienDiscret href={pole.href} label={pole.ancre} />
        </Reveal>
      </PoleSection>

      <PoleAutresPoles
        slug="sites-web"
        surtitre="Nos autres pôles"
        titre="Nos trois autres pôles pour trouver vos clients"
        intro="Publicité, référencement et CRM se branchent naturellement sur une application qui tourne bien."
      />

      <FormulaireFinal
        id="formulaire"
        pole="site"
        page={APPLICATION_WEB_URL}
        surtitre="Diagnostic gratuit"
        titre="Décrivez votre projet d'application web"
        intro="Une question d'abord, vos coordonnées ensuite. Réponse écrite sous 24 h."
        question={{
          libelle: "Quel type d'application vous intéresse ?",
          aide: "Aucune coordonnée demandée à cette étape.",
          options: OPTIONS_APPLICATION.map((o) => ({ ...o, icon: ICONES_APPLICATION[o.value] })),
        }}
        titreEtape2="Où vous répondre ?"
        boutonLabel="Recevoir ma réponse sous 24 h"
        calendlyLabel="ou réservez 30 min avec le fondateur"
        confirmation={{
          titre: "Demande bien reçue",
          texte: "Nous revenons vers vous sous 24 h avec un premier avis écrit. Si vous préférez en parler de vive voix, réservez directement un créneau.",
        }}
      />

      <PoleCTA
        titre="Un projet d'application web, une question sur le prix ?"
        texte="Réservez 30 minutes, c'est gratuit et vous parlez au fondateur."
        calendlyLabel={LABEL_CALENDLY}
        contactLabel="Écrire à l'agence"
        afficherTelephone
      />

      <StickyCtaBar
        label="Décrire mon projet"
        href={ANCRE_FORMULAIRE}
        mentions={["Gratuit", "Sans engagement", "Réponse sous 24 h"]}
        formulaireId="formulaire"
      />
    </div>
  );
}
