import Link from "next/link";
import {
  ArrowRight,
  Check,
  CircleHelp,
  ExternalLink,
  Inbox,
  Layers,
  Smartphone,
  Timer,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import { CHIFFRES_COMMUNS, LABEL_CALENDLY, SURTITRE_ZONE } from "@/data/poles";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion";
import {
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
  PoleLivrables,
  PolePrix,
  PoleSection,
  SectionSombre,
  StickyCtaBar,
  Timeline,
} from "@/components/pole";
import { getDiagnostic } from "@/lib/diagnostics/configs";
import { Conteneur, Surtitre } from "@/components/pole/pole-ui";
import { AvantApres } from "../_illustrations/AvantApres";
import {
  AUDIT_POINTS,
  CAS_REELS,
  CONSTAT,
  ENGAGEMENTS,
  FORMULES,
  INCLUS,
  LIEN_SEO_CHECK,
  LIEN_SEO_FORFAIT,
  LIEN_VITRINE,
  METHODE,
  OPTIONS_GENE,
  OUTIL_DESIGN,
  OUTIL_ESTIMATION,
  PAGES_SOEURS,
  PRIX,
  REASSURANCE_HERO,
  REFONTE_FAQ,
  REFONTE_FIL,
  REFONTE_URL,
  SIGNAUX,
  pole,
  type CasRefonte,
} from "./donnees";

/** Ancre du formulaire final : cible des CTA de la page et de la barre collante. */
const ANCRE_FORMULAIRE = "#formulaire";

const LIEN_TEXTE =
  "rounded-sm font-semibold text-primary-texte underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const CARTE =
  "rounded-3xl border border-border bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-32px_rgba(15,23,42,0.18)]";

const ICONES_GENE: Record<(typeof OPTIONS_GENE)[number]["value"], React.ReactNode> = {
  mobile: <Smartphone className="h-5 w-5" />,
  "lent-date": <Timer className="h-5 w-5" />,
  "aucune-demande": <Inbox className="h-5 w-5" />,
  "tout-revoir": <Layers className="h-5 w-5" />,
  "je-ne-sais-pas": <CircleHelp className="h-5 w-5" />,
};

const domaine = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "");

/* ── Hero : avant / après d'une refonte + ce que nous passons en revue ────── */

/**
 * Aside du hero, rendu par PoleHero dans sa carte en perspective (`asideRelief`) :
 * l'avant / après (deux cadres de même hauteur, voir AvantApres), puis les six
 * points de l'audit offert (AUDIT_POINTS, aucune donnée chiffrée) pour que la
 * carte reste entre 340 et 520 px de haut à 448 px de large, centrée sur la
 * colonne de texte. Le bloc d'audit est masqué sous sm : sur mobile, l'avant /
 * après empilé suffit et le hero reste court.
 */
function IllustrationRefonte() {
  return (
    <div className={cn("w-full p-4 sm:p-5", CARTE)}>
      <AvantApres />
      <div className="mt-4 hidden border-t border-border/70 pt-4 sm:block">
        <p className="text-xs font-semibold uppercase tracking-wide text-purple-700">Ce que nous passons en revue, gratuitement</p>
        <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2.5">
          {AUDIT_POINTS.map(({ icon: Icon, libelle, detail }) => (
            <li key={libelle} className="flex items-start gap-2">
              <span
                className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-purple-50 text-purple-700"
                aria-hidden="true"
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold leading-tight text-foreground">{libelle}</span>
                <span className="block text-[11px] leading-snug text-muted-foreground">{detail}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ── Formules : trois cartes avec cible, inclus, prix PRICING, délai ────── */

function CartesFormules() {
  return (
    <ul className="grid gap-6 lg:grid-cols-3">
      {FORMULES.map((f, i) => (
        <li key={f.titre} className="h-full">
          <Reveal
            delay={i * 0.06}
            y={16}
            className={cn(
              "relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(124,58,237,0.35)] motion-reduce:transition-none",
              f.miseEnAvant ? "border-primary/40" : "border-border"
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-purple-700">
                {String(i + 1).padStart(2, "0")}
              </span>
              {f.badge && (
                <span className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                  {f.badge}
                </span>
              )}
            </div>
            <h3 className="mt-3 text-xl font-semibold text-foreground">{f.titre}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">Pour vous si : </span>
              {f.cible}
            </p>
            <p className="mt-4">
              <span className="text-2xl font-bold text-foreground">{f.prix}</span>
              <span className="block text-sm text-muted-foreground">{f.prixDetail}</span>
            </p>
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
              <Timer className="h-4 w-4 text-primary" aria-hidden="true" />
              {f.delai}
            </p>
            <ul className="mt-4 space-y-2">
              {f.inclus.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <LienDiscret {...f.lien} className="text-sm font-semibold" />
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

/* ── Preuve : deux refontes réelles + ce que vous pouvez vérifier ───────── */

function LiensCas({ cas }: { cas: CasRefonte }) {
  if (!cas.href && !cas.siteHref) return null;
  return (
    <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5 text-sm font-semibold">
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

function SectionPreuve() {
  return (
    <section id="preuve" className="bg-muted/30 py-16 sm:py-20">
      <Conteneur>
        <div className="mx-auto max-w-3xl text-center">
          <Surtitre>Ce que vous pouvez vérifier</Surtitre>
          <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">
            Deux refontes de site racontées par les clients eux-mêmes
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Pas de chiffres de trafic ni de chiffre d&apos;affaires, ils dépendent du métier et de la saison : le
            problème de départ, ce que nous avons fait et les mots exacts du client.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
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
                <LiensCas cas={cas} />
              </article>
            </Reveal>
          ))}

          <Reveal delay={CAS_REELS.length * 0.08} className="h-full">
            <aside className={cn("flex h-full flex-col p-6", CARTE)}>
              <p className="text-xs font-semibold uppercase tracking-wider text-purple-700">Avant de nous appeler</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">Trois choses à vérifier vous-même</h3>
              <ul className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">Nos sites en ligne.</span> Le{" "}
                  <Link href="/portfolio" className={LIEN_TEXTE}>
                    portfolio de nos réalisations
                  </Link>{" "}
                  renvoie vers les sites des clients : ouvrez-les sur votre téléphone.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Les avis.</span> {SITE.reviews.rating.replace(".", ",")}/5
                  sur {SITE.reviews.count} avis Trustpilot, chacun signé.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Votre site.</span>{" "}
                  <Link href={OUTIL_DESIGN.href} className={LIEN_TEXTE}>
                    Testez son design
                  </Link>{" "}
                  et{" "}
                  <Link href={LIEN_SEO_CHECK.href} className={LIEN_TEXTE}>
                    son référencement
                  </Link>{" "}
                  en 60 secondes.
                </li>
              </ul>
            </aside>
          </Reveal>
        </div>
      </Conteneur>
    </section>
  );
}

/* ── Maillage : hub du pôle et pages sœurs ──────────────────────────────── */

function PagesSoeurs() {
  return (
    <section id="pages-soeurs" className="bg-muted/30 py-16 sm:py-20">
      <Conteneur>
        <div className="mx-auto max-w-3xl text-center">
          <Surtitre>Le pôle création de site internet</Surtitre>
          <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">
            Refonte ou nouveau site : les autres formules du pôle
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Si l&apos;audit montre qu&apos;un site neuf est plus simple, voici les quatre autres formules et la page du pôle.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <li className="sm:col-span-2 lg:col-span-1">
            <Link
              href={pole.href}
              className="group flex h-full flex-col justify-between rounded-2xl border border-primary/40 bg-gradient-to-br from-purple-50 to-pink-50 p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-16px_rgba(124,58,237,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-purple-700">Le pôle</span>
              <span className="mt-2 font-semibold text-foreground">{pole.ancre}</span>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-texte">
                Voir toutes les formules
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" aria-hidden="true" />
              </span>
            </Link>
          </li>
          {PAGES_SOEURS.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-5 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_16px_32px_-16px_rgba(15,23,42,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none"
              >
                <span className="font-semibold text-foreground">{s.label}</span>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-texte">
                  Découvrir
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
          Outils gratuits liés :{" "}
          <Link href={OUTIL_ESTIMATION.href} className={LIEN_TEXTE}>
            {OUTIL_ESTIMATION.label.toLowerCase()}
          </Link>
          ,{" "}
          <Link href={OUTIL_DESIGN.href} className={LIEN_TEXTE}>
            {OUTIL_DESIGN.label.toLowerCase()}
          </Link>
          . Vous pouvez aussi{" "}
          <Link href="/demande-maquette" className={LIEN_TEXTE}>
            demander une maquette gratuite
          </Link>{" "}
          de votre futur site ou{" "}
          <Link href="/contact" className={LIEN_TEXTE}>
            écrire à l&apos;agence
          </Link>
          .
        </p>
      </Conteneur>
    </section>
  );
}

/* ── Page ───────────────────────────────────────────────────────────────── */

const DIAGNOSTIC = getDiagnostic("sites-web-refonte-site")!;

export default function RefonteSiteContent() {
  return (
    <div className="pt-16">
      <FilAriane elements={REFONTE_FIL} />

      <PoleHero
        surtitre={SURTITRE_ZONE}
        titre="Refonte de site internet à Paris et Rueil-Malmaison : un site moderne, sans perdre votre référencement"
        motsCles={["Refonte de site internet", "référencement"]}
        texte={[
          "Votre site a vieilli : il se lit mal sur téléphone, il est lent, il ne vous ressemble plus et n'apporte pas de demandes. Nous le reconstruisons en gardant ce qui a de la valeur : votre nom de domaine, vos pages référencées, vos contenus et vos avis.",
          `Prix fixe de ${PRIX.refonte.valeur} pour un site vitrine, ${PRIX.refonte.detail}. Vous parlez au fondateur.`,
        ]}
        reassurance={REASSURANCE_HERO.slice(0, 3)}
        boutonPrimaire={{ href: ANCRE_FORMULAIRE, label: "Demander mon audit de refonte gratuit" }}
        boutonSecondaire={{ href: SITE.calendly, label: LABEL_CALENDLY, external: true }}
        mention={
          <>
            Envie d&apos;un premier avis tout de suite ?{" "}
            <Link href={OUTIL_DESIGN.href} className="font-medium text-primary-texte underline-offset-4 hover:underline">
              Testez le design de votre site actuel
            </Link>{" "}
            avec notre outil gratuit.
          </>
        }
        chiffres={[...CHIFFRES_COMMUNS, { valeur: "2 semaines", libelle: "pour livrer la refonte" }]}
        aside={<IllustrationRefonte />}
        asideRelief
        asideMobile
      />

      {/* Diagnostic gratuit de la page, juste après le hero (fond blanc, le constat est gris). */}
      <SectionOutil badge="Diagnostic gratuit" titre={DIAGNOSTIC.titre} accroche={DIAGNOSTIC.accroche} obtenez={DIAGNOSTIC.obtenez}>
        <DiagnosticInteractif diagnostic={DIAGNOSTIC} page={REFONTE_URL} />
      </SectionOutil>

      <Reveal y={16}>
        <PainPoints
          id="constat"
          surtitre="Le constat"
          titre="Si vous reconnaissez votre site dans l'une de ces situations, il vous coûte des clients"
          intro="Ce sont les trois problèmes que nous trouvons le plus souvent en auditant un site de plus de quelques années."
          points={CONSTAT}
        />
      </Reveal>

      <PoleSection
        id="quand"
        surtitre="Quand refondre"
        titre="Quand faut-il refondre son site web plutôt que le rafistoler ?"
        intro="Un signal isolé se corrige en quelques heures. Deux signaux ou plus, et la refonte coûte moins cher que les rustines."
      >
        <Reveal y={16}>
          <PoleLivrables livrables={SIGNAUX} colonnes={2} />
        </Reveal>
        <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Si votre site n&apos;a que deux pages sans trafic, une refonte n&apos;a pas de sens : un{" "}
          <Link href={LIEN_VITRINE.href} className={LIEN_TEXTE}>
            site vitrine professionnel neuf
          </Link>{" "}
          à {PRIX.vitrine.valeur} sera plus simple. Nous vous le dirons dès le premier appel.
        </p>
      </PoleSection>

      <PoleSection
        id="formules"
        fond="gris"
        surtitre="Nos formules de refonte"
        titre="Refonte de site vitrine, de site e-commerce ou refonte avec référencement : quelle formule pour votre site ?"
        intro="Trois formules, un prix fixe écrit avant de commencer, paiement étalé possible sans abonnement."
      >
        <CartesFormules />
      </PoleSection>

      {/* Notre méthode : cinq repères dans le temps, sur fond sombre (premier des deux blocs sombres). */}
      <SectionSombre
        id="methode"
        surtitre="Notre méthode"
        titre="Comment se déroule une refonte de site internet en 2 semaines, sans perdre vos positions Google ?"
        intro="Cinq repères dans le temps, toujours dans le même ordre, avec à chaque fois quelque chose que vous validez."
      >
        <Reveal y={16}>
          <Timeline etapes={METHODE} sombre />
        </Reveal>
      </SectionSombre>

      <PoleSection
        id="inclus"
        surtitre="Tout est compris dans le prix"
        titre={`Ce que comprend une refonte de site à ${PRIX.refonte.valeur}`}
        intro="Pas d'option cachée ni de supplément en cours de route. Tout est écrit sur le devis."
      >
        <Reveal y={16}>
          <PoleLivrables livrables={INCLUS} />
        </Reveal>
        <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Le référencement de base suffit pour votre nom et des requêtes locales peu disputées. Pour aller plus loin
          après la refonte, notre{" "}
          <Link href={LIEN_SEO_FORFAIT.href} className={LIEN_TEXTE}>
            forfait SEO mensuel
          </Link>{" "}
          prend le relais, {PRIX.seo.valeur}, {PRIX.seo.detail}.
        </p>
      </PoleSection>

      <SectionPreuve />

      <CtaIntermediaire
        id="cta-audit"
        titre="Votre site mérite-t-il une refonte ou un simple rafraîchissement ?"
        texte="C'est la première question à laquelle nous répondons, gratuitement, en trente minutes. Si une refonte n'est pas nécessaire, nous vous le dirons."
        bouton={{ href: ANCRE_FORMULAIRE, label: "Demander mon audit de refonte gratuit" }}
        alternativeLabel="ou appelez-nous au"
      />

      {/* Second bloc sombre : les engagements écrits sur le devis. */}
      <SectionSombre
        id="engagements"
        surtitre="Nos engagements"
        titre="Ce que nous nous engageons à faire pour votre refonte, écrit sur le devis"
        intro="Six engagements sur notre façon de travailler. Aucune promesse de position ni de chiffre d'affaires : personne ne peut la tenir honnêtement."
      >
        <Reveal y={16}>
          <Engagements variante="sombre" items={ENGAGEMENTS} />
        </Reveal>
      </SectionSombre>

      <Reveal y={16}>
        <PolePrix
          id="prix"
          surtitre="Prix et engagement"
          titre="Combien coûte une refonte de site internet ?"
          intro="Des prix fixes, affichés ici et repris tels quels sur le devis. Le mensuel est un paiement étalé du même prix, jamais un abonnement."
          lignes={[
            { libelle: "Refonte de site vitrine", valeur: PRIX.refonte.valeur, detail: PRIX.refonte.detail },
            { libelle: "Refonte de site e-commerce", valeur: PRIX.ecommerce.valeur, detail: `${PRIX.ecommerce.detail}, délai écrit dans le devis` },
            { libelle: "Forfait SEO après la refonte", valeur: PRIX.seo.valeur, detail: PRIX.seo.detail },
          ]}
          engagementsTitre="Ce qui est écrit sur le devis"
          engagements={[
            "Audit de votre site actuel offert, avant tout devis",
            "Prix fixe : il ne bouge pas en cours de projet",
            "Livraison en 2 semaines après validation de la maquette",
            "Domaine, hébergement, contenus et accès à votre nom",
          ]}
          lien={{ href: ANCRE_FORMULAIRE, label: "Recevoir mon devis de refonte sous 24 h" }}
          note="TVA non applicable, art. 293 B du CGI. Le devis est écrit et validé avant tout démarrage."
        />
      </Reveal>

      <PoleFAQ
        id="faq"
        surtitre="FAQ"
        titre="Vos questions sur la refonte de site internet"
        items={REFONTE_FAQ}
        lien={{ href: "/contact", label: "Poser une autre question" }}
      />

      <PoleAutresPoles
        slug="sites-web"
        surtitre="Nos autres pôles"
        titre="Après la refonte : nos trois autres pôles pour trouver vos clients"
        intro="Un site remis à niveau reçoit mieux la publicité, se référence mieux et peut répondre à vos demandes la nuit grâce à l'IA."
      />

      <PagesSoeurs />

      <FormulaireFinal
        id="formulaire"
        pole="site"
        page={REFONTE_URL}
        surtitre="Audit de refonte gratuit"
        titre="Demandez votre audit de refonte gratuit"
        intro="Dites-nous ce qui vous gêne sur votre site actuel. Vous recevez sous 24 h un premier avis écrit : refonte, simple rafraîchissement ou site neuf, avec le prix correspondant."
        question={{
          libelle: "Qu'est-ce qui vous gêne le plus sur votre site actuel ?",
          aide: "Aucune coordonnée demandée à cette étape.",
          options: OPTIONS_GENE.map((o) => ({ ...o, icon: ICONES_GENE[o.value] })),
        }}
        fond="blanc"
        titreEtape2="Où vous envoyer l'avis ?"
        boutonLabel="Recevoir mon avis sous 24 h"
        calendlyLabel="ou réservez 30 min avec le fondateur"
        confirmation={{
          titre: "Demande bien reçue",
          texte: "Nous regardons votre site et revenons vers vous sous 24 h avec un premier avis écrit. Si vous préférez en parler de vive voix, réservez directement un créneau.",
        }}
      />

      <PoleCTA
        titre="Un site qui a vieilli, une question sur la refonte ?"
        texte="Réservez 30 minutes, c'est gratuit et vous parlez au fondateur. Vous repartez avec un avis honnête sur votre site actuel et un prix fixe."
        calendlyLabel={LABEL_CALENDLY}
        contactLabel="Écrire à l'agence"
        afficherTelephone
      />

      <StickyCtaBar
        label="Audit de refonte gratuit"
        href={ANCRE_FORMULAIRE}
        mentions={["Gratuit", "Sans engagement", "Réponse sous 24 h"]}
        formulaireId="formulaire"
      />
    </div>
  );
}
