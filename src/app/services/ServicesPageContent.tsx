import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PRICING, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/lib/faq-schema";
import { CHIFFRES_COMMUNS, ETAPES_COMMUNES, getPole, LABEL_CALENDLY, POLES, SURTITRE_ZONE } from "@/data/poles";
import { FilAriane, FormulaireFinal, PoleEtapes, PoleFAQ, PoleHero, PoleSection } from "@/components/pole";
import SectionPolesDefilants from "@/components/pole/SectionPolesDefilants";
import { BESOINS_QUATRE_POLES } from "@/components/pole/besoins";
import { AppelFinal } from "@/components/accueil";
import { Reveal } from "@/components/motion/reveal";
import { BoutonCercle } from "@/components/motion/ff/b-bouton-cercle";

/**
 * Hub /services : les quatre pôles à égalité, rien de plus.
 * Composant serveur : tout le texte est dans le HTML, FAQ comprise.
 * Aucun chiffre en dehors de « 150+ clients accompagnés », « 4,9/5 sur 15 avis »
 * et « livré en 2 semaines » ; les prix viennent de poles.ts (donc de PRICING).
 * Même signature visuelle que l'accueil : mots clés du H1 en dégradé défilant,
 * cartes qui s'élèvent au survol, étapes datées, formulaire final sombre puis
 * les trois portes.
 */

export const FIL_ARIANE_SERVICES = [
  { label: "Accueil", href: "/" },
  { label: "Services" },
];

export const FAQ_SERVICES: FaqItem[] = [
  {
    q: "Par quel pôle commencer si je n'ai encore rien ?",
    a: "Par le site internet. C'est l'endroit où arrivent les visiteurs venus de Google, de la publicité ou des IA. Sans site qui apporte des demandes, les autres leviers coûtent pour rien. Un site vitrine est livré en 2 semaines, une landing page en 5 à 7 jours.",
  },
  {
    q: "Faut-il prendre les quatre pôles ensemble ?",
    a: "Non. Chaque pôle se commande seul. Nous vous disons lors du diagnostic gratuit lequel a le plus d'effet pour votre activité aujourd'hui, et lequel peut attendre.",
  },
  {
    q: "Qui réalise le travail ?",
    a: "Le fondateur de l'agence, qui est aussi votre interlocuteur du premier appel jusqu'au suivi. Vous n'êtes pas transféré d'un service à l'autre.",
  },
  {
    q: "Combien coûtent vos services ?",
    a: `Les sites ont un prix fixe affiché : landing page ${PRICING.landing.from} €, site vitrine ${PRICING.vitrine.from} €, refonte ${PRICING.refonte.from} €, site e-commerce à partir de ${PRICING.ecommerce.from.toLocaleString("fr-FR")} €, avec un paiement étalé possible, pas d'abonnement. Le SEO est un forfait ${getPole("seo").prix}, 6 mois minimum. La publicité et le CRM sont sur devis, avec un prix fixe écrit avant tout engagement.`,
  },
  {
    q: "Travaillez-vous uniquement à Rueil-Malmaison et à Paris ?",
    a: "Nous sommes installés à Rueil-Malmaison (92) et intervenons à Paris et en Île-de-France. Nos clients sont aussi partout en France : le travail se fait à distance, en visio et par téléphone, avec les mêmes délais.",
  },
  {
    q: "Comment savoir si mon site actuel a besoin d'une refonte ou d'un simple SEO ?",
    a: "Passez-le dans nos outils gratuits : l'audit SEO et le score design donnent un point de départ mesuré en 60 secondes. Puis nous en parlons 30 minutes, gratuitement, pour trancher.",
  },
];

const ENGAGEMENTS = [
  "Un diagnostic gratuit de 30 minutes avant tout devis",
  "Un prix fixe écrit dans le devis, sans coût caché",
  "Un délai écrit et tenu : site livré en 2 semaines, landing page en 5 à 7 jours",
  "Un seul interlocuteur, le fondateur, du premier appel au suivi",
  "Vous restez propriétaire de votre site, de vos comptes publicitaires et de vos données",
  "Nous mesurons ce qui compte pour vous : demandes reçues, appels, ventes",
];

/** Repères temporels des quatre étapes communes (mêmes que l'accueil). */
const REPERES = ["Jour 1", "Semaine 1", "Sous 2 semaines", "Chaque mois"];

/** Cartes qui s'élèvent au survol : une seule ombre de survol sur tout le site. */
const CARTE_SURVOL =
  "transition-[translate,box-shadow,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_1px_2px_rgba(15,23,42,0.04),0_20px_40px_-24px_hsl(270_70%_45%_/_0.35)] motion-reduce:transition-none motion-reduce:hover:translate-y-0";

const LIEN_TEXTE =
  "inline-flex min-h-11 items-center gap-1 text-sm font-medium text-primary-texte underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

/**
 * Visuel du hero (lg et plus) : les quatre pôles en tuiles, chacune menant à
 * sa page, et le rappel qu'une seule personne répond (photo sans nom : le nom
 * n'apparaît qu'une fois sur le site, sous la photo du fondateur).
 */
function AsideQuatrePoles() {
  return (
    <div className="relative">
      <div className="rounded-3xl border border-border/80 bg-white/85 p-3 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_30px_60px_-30px_hsl(270_70%_45%_/_0.35)]">
        <ul className="grid grid-cols-2 gap-3">
          {POLES.map((pole) => {
            const Icon = pole.icon;
            return (
              <li key={pole.slug}>
                <Link
                  href={pole.href}
                  className={cn(
                    "group flex h-full flex-col rounded-2xl border border-border bg-card p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    CARTE_SURVOL
                  )}
                >
                  <span className="flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary-texte transition-colors duration-300 group-hover:bg-primary group-hover:text-white motion-reduce:transition-none">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground tabular-nums">{pole.numero}</span>
                  </span>
                  <span className="mt-3 text-sm font-semibold leading-snug text-foreground">{pole.nomCourt}</span>
                  <span className="mt-1 text-xs leading-relaxed text-muted-foreground">{pole.prix}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-3 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3">
          <Image
            src="/images/fondateur-carre.webp"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-full border border-border object-cover"
          />
          <p className="text-sm text-foreground">
            <span className="font-semibold">Un seul interlocuteur, le fondateur.</span>{" "}
            <span className="text-muted-foreground">Réponse sous 24 h, prix fixe écrit avant de commencer.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPageContent() {
  return (
    <div className="pt-16">
      <FilAriane elements={FIL_ARIANE_SERVICES} />

      <PoleHero
        surtitre={SURTITRE_ZONE}
        titre="Services marketing digital à Paris et Rueil-Malmaison : site, publicité, SEO et CRM"
        motsCles={["site", "publicité", "SEO", "CRM"]}
        texte={[
          "Quatre pôles, un seul interlocuteur. Nous créons votre site internet, nous gérons votre publicité en ligne, nous travaillons votre référencement naturel et nous relançons chaque demande grâce à votre CRM et à l'IA.",
          "Chaque pôle se commande seul, avec un prix fixe et un délai écrits avant de commencer.",
        ]}
        boutonPrimaire={{ href: "#formulaire", label: "Décrire mon projet, réponse sous 24 h" }}
        boutonSecondaire={{ href: SITE.calendly, label: LABEL_CALENDLY, external: true }}
        chiffres={[...CHIFFRES_COMMUNS, { valeur: "2 semaines", libelle: "pour livrer un site" }]}
        aside={<AsideQuatrePoles />}
        asideMobile
      />

      <SectionPolesDefilants
        id="poles"
        titre="Quel levier pour trouver vos clients ?"
        intro="Un pôle par écran, avec ce qu'il couvre et par où commencer. Le bon point de départ dépend de votre activité : nous vous le disons lors du diagnostic gratuit."
      />

      <PoleSection
        id="methode"
        fond="gris"
        surtitre="Notre méthode"
        titre="Comment travaillons-nous, quel que soit le pôle ?"
        intro="Les mêmes quatre étapes pour un site, une campagne, un forfait SEO ou un CRM. Vous savez toujours où en est votre projet."
      >
        <PoleEtapes etapes={ETAPES_COMMUNES.map((e, i) => ({ titre: e.titre, texte: e.texte, repere: REPERES[i] }))} />
      </PoleSection>

      <PoleSection
        id="engagements"
        surtitre="Prix et engagement"
        titre="À quoi vous engagez-vous, et à quoi nous nous engageons ?"
        intro="Vous ne vous engagez à rien avant d'avoir lu un devis avec un prix fixe et un délai. De notre côté, voici ce que nous tenons sur chaque projet."
        alignement="gauche"
      >
        <div className="grid gap-8 lg:grid-cols-5">
          <ul className="space-y-3 lg:col-span-3">
            {ENGAGEMENTS.map((e, i) => (
              <li key={e}>
                <Reveal delay={i * 0.05}>
                  <div
                    className={cn(
                      "group flex items-start gap-3 rounded-2xl border border-border bg-card px-5 py-4 text-foreground shadow-[0_1px_2px_rgba(15,23,42,0.04)]",
                      CARTE_SURVOL
                    )}
                  >
                    <span
                      className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary-texte transition-colors duration-300 group-hover:bg-primary group-hover:text-white motion-reduce:transition-none"
                      aria-hidden="true"
                    >
                      <Check className="h-4 w-4" strokeWidth={2.25} />
                    </span>
                    <span className="leading-relaxed">{e}</span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-2xl border border-border bg-muted/30 p-6">
              <h3 className="text-lg font-semibold text-foreground">Mesurez votre point de départ gratuitement</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Avant de nous parler, testez votre site et votre visibilité avec nos outils gratuits, sans inscription.
              </p>
              <ul className="mt-4 space-y-1">
                {POLES.flatMap((pole) => pole.outils.filter((o) => o.href !== "/contact")).map((outil) => (
                  <li key={outil.href}>
                    <Link href={outil.href} className={LIEN_TEXTE}>
                      {outil.label}
                      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <BoutonCercle href="/outils" label="Voir tous les outils gratuits" tonalite="clair" />
              </div>
            </div>
          </Reveal>
        </div>
      </PoleSection>

      <PoleFAQ
        id="faq"
        surtitre="Questions fréquentes"
        titre="Vos questions avant de choisir un service"
        items={FAQ_SERVICES}
        lien={{ href: "/contact", label: "Poser une autre question" }}
      />

      <section className="bg-background py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Nous intervenons depuis Rueil-Malmaison (92) :{" "}
            <Link href="/agence-web/rueil-malmaison" className="font-medium text-primary-texte underline-offset-4 hover:underline">
              agence web à Rueil-Malmaison
            </Link>
            ,{" "}
            <Link href="/agence-web/paris" className="font-medium text-primary-texte underline-offset-4 hover:underline">
              agence web à Paris
            </Link>{" "}
            et{" "}
            <Link href="/agence-web/la-defense-puteaux" className="font-medium text-primary-texte underline-offset-4 hover:underline">
              agence web à La Défense et Puteaux
            </Link>
            . Nous proposons aussi, en dehors des quatre pôles,{" "}
            <Link href="/services/social-media" className="font-medium text-primary-texte underline-offset-4 hover:underline">
              la gestion des réseaux sociaux
            </Link>{" "}
            et{" "}
            <Link href="/services/design" className="font-medium text-primary-texte underline-offset-4 hover:underline">
              le design UI/UX et l&apos;identité visuelle
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Formulaire final sombre (pièce maîtresse, comme sur l'accueil), puis les trois portes. */}
      <FormulaireFinal
        id="formulaire"
        pole="services"
        page="/services"
        fond="sombre"
        motsCles={["24 h"]}
        surtitre="Parlons de votre projet"
        titre="Dites-nous ce que vous voulez, nous vous répondons sous 24 h"
        intro="Deux étapes, deux minutes. Aucune coordonnée à la première."
        question={{
          libelle: "Vous voulez :",
          aide: "Aucune coordonnée demandée à cette étape.",
          options: BESOINS_QUATRE_POLES,
        }}
        titreEtape2="Où vous répondre ?"
        boutonLabel="Recevoir ma réponse sous 24 h"
        calendlyLabel="ou réservez 30 min avec le fondateur"
        confirmation={{
          titre: "Merci, votre demande est bien reçue.",
          texte: "Nous vous répondons sous 24 h, par email ou par téléphone, avec une première recommandation.",
        }}
      />

      <AppelFinal />
    </div>
  );
}
