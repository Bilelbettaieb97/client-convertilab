import Link from "next/link";
import {
  BellRing,
  CalendarClock,
  CircleHelp,
  Columns3,
  FileCheck,
  FileClock,
  Gauge,
  ListChecks,
  Mail,
  MailX,
  Plug,
  RefreshCw,
  Search,
  UserX,
  Workflow,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import type { FaqItem } from "@/lib/faq-schema";
import { CHIFFRES_COMMUNS, getPole, getSousPage, LABEL_CALENDLY, SURTITRE_ZONE } from "@/data/poles";
import { getDiagnostic } from "@/lib/diagnostics/configs";
import {
  FilAriane,
  type FilArianeElement,
  FormulaireFinal,
  CalculateurDemandesPerdues,
  PainPoints,
  PoleAutresPoles,
  PoleCTA,
  PoleFAQ,
  PoleHero,
  PoleLivrables,
  PolePrix,
  PoleSection,
  SectionOutil,
  SectionSombre,
  StickyCtaBar,
  Timeline,
} from "@/components/pole";
import { Reveal } from "@/components/motion";
import TableauRelancesMock from "./TableauRelancesMock";

/**
 * Sous-page « Optimisation de CRM » (/services/crm/optimisation-crm) du pôle
 * 04 « CRM et relances automatiques » : un CRM déjà en place mais sous-utilisé.
 * Composant serveur : le H1, les textes et la FAQ sont dans le HTML. Le hero
 * est le composant partagé PoleHero (fond, coches, boutons, chiffres,
 * illustration en perspective) ; formulaire et barre collante sont des
 * enfants « use client ».
 * Aucun prix chiffré : « sur devis », « diagnostic d'une journée », « prix
 * fixe communiqué sous 24 h ». Relances par email et rappels uniquement :
 * ni SMS ni WhatsApp.
 */

export const pole = getPole("crm");
export const sousPage = getSousPage("crm", "/services/crm/optimisation-crm");
export const URL_PAGE = sousPage.href;
/** Calculateur posé après le hero (src/lib/diagnostics/configs/crm.ts). */
const DIAGNOSTIC = getDiagnostic("crm-demandes-perdues")!;

export const FIL_ARIANE: FilArianeElement[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: pole.nomCourt, href: pole.href },
  { label: "Optimisation de CRM" },
];

const ANCRE_FORMULAIRE = "#formulaire";
const MENTIONS = ["Premier échange gratuit", "Sans engagement", "Réponse sous 24 h"];

const CHECKMARKS_HERO = [
  "Sur votre CRM actuel, sans changer d'outil",
  "Relances par email, arrêtées dès la première réponse",
  "Prix fixe écrit avant de commencer",
];

/** Les deux autres sous-pages CRM, pour le maillage interne (ancres descriptives de poles.ts). */
const creation = getSousPage("crm", "/services/crm/creation-crm");
const nettoyage = getSousPage("crm", "/services/crm/nettoyage-crm");
const integrationIa = getSousPage("crm", "/services/integration-ia");

export const FAQ_OPTIMISATION_CRM: FaqItem[] = [
  {
    q: "Mon CRM est en place mais personne ne s'en sert : est-ce que cela se répare ?",
    a: "Dans la plupart des cas, oui, et sans changer d'outil. Les causes sont presque toujours les mêmes : trop d'étapes ou trop de champs, aucune règle écrite sur ce qu'il faut remplir, aucune relance automatique, donc aucun bénéfice visible pour ceux qui saisissent. Le diagnostic d'une journée regarde ce qui est réellement rempli, ce qui ne l'est pas, et pourquoi. Le plan retire ce qui ne sert pas avant d'ajouter quoi que ce soit.",
  },
  {
    q: "Quelles relances automatisez-vous ?",
    a: "Les relances par email d'un devis resté sans réponse (à J+3, puis sur plusieurs semaines, avec un texte différent à chaque fois), l'accusé de réception d'une demande, le rappel de rendez-vous la veille, l'alerte interne quand une fiche n'a pas bougé, et la reprise de contact à date après une vente. Chaque séquence s'arrête dès que la personne répond. Nous ne proposons ni SMS ni WhatsApp : l'email suffit, et il reste sous votre contrôle.",
  },
  {
    q: "Les relances automatiques ne vont-elles pas agacer mes prospects ?",
    a: "Elles agacent quand elles sont répétitives, mal ciblées ou impossibles à arrêter. Nous écrivons les textes avec vous, dans votre ton, avec un élément nouveau à chaque envoi ; la séquence est limitée dans le temps, s'arrête à la première réponse, et chaque email propose un moyen simple de demander l'arrêt. Nous testons tout sur d'anciens dossiers avant la mise en service, en lisant les emails qui seraient partis.",
  },
  {
    q: "Faut-il changer de CRM pour l'optimiser ?",
    a: "Non. Nous travaillons sur l'outil que vous avez : HubSpot, Salesforce, Pipedrive, Zoho CRM, Brevo, Sellsy, Axonaut, monday CRM ou un autre. Si votre outil ne permet pas une automatisation utile, nous le disons pendant le diagnostic, avec la solution la plus simple, et jamais un changement d'outil pour le principe.",
  },
  {
    q: "Que contient le tableau de bord que vous mettez en place ?",
    a: "Ce que vous ouvrez chaque matin en une minute : les devis sans suite à relancer aujourd'hui, les relances parties, les réponses reçues, les rendez-vous rappelés, les cartes sans prochaine action, et ce que chaque canal a apporté. Aucun rapport de vingt pages : quelques chiffres tirés de votre propre CRM, à lire en une minute, et un résumé par email le lundi si vous le souhaitez.",
  },
  {
    q: "Combien coûte l'optimisation d'un CRM ?",
    a: "Le diagnostic d'une journée a son propre prix fixe, communiqué sous 24 h après votre demande ; vous pouvez vous arrêter là, le plan reste à vous. L'optimisation elle-même est chiffrée après le diagnostic : prix fixe et délai écrits avant tout engagement, selon le nombre d'automatisations et de branchements. L'abonnement à votre CRM ne change pas et reste réglé à son éditeur.",
  },
];

const ETAPES = [
  {
    repere: "Jour 1",
    icon: Search,
    titre: "Diagnostic d'une journée",
    texte:
      "Sur place ou à distance : ce qui est rempli dans votre CRM, ce qui ne l'est pas, combien de devis restent sans suite, où les demandes arrivent, ce que votre outil sait automatiser. Nous regardons le vrai compte, pas une démonstration.",
  },
  {
    repere: "Sous 24 h",
    icon: FileCheck,
    titre: "Plan écrit et prix fixe",
    texte:
      "Vous recevez les étapes à revoir, les champs à retirer ou à ajouter, la liste des automatisations avec leur règle de déclenchement, le tableau de bord prévu, et un prix fixe. Vous pouvez vous arrêter là.",
  },
  {
    repere: "Les semaines suivantes",
    icon: Workflow,
    titre: "Réglages, relances, tableau de bord",
    texte:
      "Pipeline allégé, champs obligatoires par étape, séquences de relance écrites avec vous et testées sur d'anciens dossiers, rappels de rendez-vous, alertes internes, tableau de bord. Mise en service progressive, une famille d'automatisations à la fois.",
  },
  {
    repere: "Chaque mois, si vous le souhaitez",
    icon: RefreshCw,
    titre: "Suivi mensuel facultatif",
    texte:
      "Nous relisons ce qui est passé dans le pipeline, nous coupons les relances qui ne donnent rien, nous ajustons les textes et nous ajoutons l'automatisation suivante. Jamais imposé, arrêtable quand vous voulez.",
  },
];

const LIVRABLES = [
  { icon: Columns3, titre: "Un pipeline allégé", texte: "Les étapes que votre équipe utilise vraiment, avec une condition de sortie chacune, et les champs inutiles retirés." },
  { icon: Mail, titre: "Les relances de devis par email", texte: "À J+3 puis sur plusieurs semaines, un texte différent à chaque envoi, arrêt à la première réponse, moyen de demander l'arrêt." },
  { icon: CalendarClock, titre: "Les rappels de rendez-vous", texte: "Confirmation à la réservation, rappel la veille par email, tâche de compte rendu après le rendez-vous." },
  { icon: BellRing, titre: "Les alertes internes", texte: "Nouvelle demande, fiche immobile depuis sept jours, prochaine action en retard : la bonne personne prévenue, sans surveiller l'outil." },
  { icon: Gauge, titre: "Le tableau de bord du matin", texte: "Devis sans suite, relances parties, réponses reçues, cartes sans action, apport de chaque canal. Une minute par jour." },
  { icon: ListChecks, titre: "Les règles écrites et le journal", texte: "Chaque automatisation documentée : déclencheur, action, arrêt. Un journal de ce qui est parti, à qui, et pourquoi." },
];

const lienClasse =
  "font-medium text-primary-texte underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm";

export default function OptimisationCrmContent() {
  return (
    <div className="pt-16">
      <FilAriane elements={FIL_ARIANE} />

      {/* Hero commun aux pages de service (PoleHero) : H1 et textes rendus côté serveur. À droite, le tableau de bord des relances (valeurs d'exemple) en perspective légère, affiché sous la colonne de texte sur mobile. */}
      <PoleHero
        surtitre={SURTITRE_ZONE}
        titre="Optimisation de CRM pour TPE et PME à Paris : chaque devis relancé, chaque rendez-vous rappelé"
        motsCles={["Optimisation de CRM", "relancé", "rappelé"]}
        texte={[
          "Votre CRM existe, mais il sert de carnet d'adresses : les devis partent sans être relancés, les fiches s'arrêtent à la première étape, et personne ne regarde le tableau de bord. Nous revoyons les étapes, nous écrivons les relances automatiques par email et les rappels de rendez-vous, et nous posons un tableau de bord lisible en une minute.",
          "Sur votre outil actuel, quel qu'il soit : HubSpot, Salesforce, Pipedrive, Zoho CRM, Brevo, Sellsy, Axonaut ou monday CRM. Notre agence est à Rueil-Malmaison et Paris. Diagnostic d'une journée, plan écrit, prix fixe communiqué sous 24 h.",
        ]}
        reassurance={CHECKMARKS_HERO}
        boutonPrimaire={{ href: ANCRE_FORMULAIRE, label: "Demander un diagnostic CRM" }}
        boutonSecondaire={{ href: SITE.calendly, label: LABEL_CALENDLY, external: true }}
        mention={MENTIONS.join(" · ")}
        chiffres={[...CHIFFRES_COMMUNS, { valeur: "1 journée", libelle: "de diagnostic sur votre vrai compte CRM" }]}
        aside={<TableauRelancesMock compact />}
        asideRelief
        asideMobile
      />

      {/* Outil gratuit, juste après le hero (fond gris : le hero est clair) : calcul immédiat sur les chiffres de la personne, rapport complet par email. */}
      <SectionOutil
        badge="Calculateur gratuit"
        titre={DIAGNOSTIC.titre}
        accroche={DIAGNOSTIC.accroche}
        obtenez={[
          "Le nombre de demandes qui attendent plus de 24 h, et celles qui ne sont jamais relancées",
          "Ce que ces demandes représentent par mois et par an, avec votre panier moyen",
          "Le rapport complet par email, avec les 20 automatisations classées par temps gagné en bonus",
        ]}
        fond="gris"
      >
        <CalculateurDemandesPerdues slug={DIAGNOSTIC.slug} page={URL_PAGE} />
      </SectionOutil>

      <Reveal y={16}>
        <PainPoints
          id="constat"
          surtitre="Le constat"
          titre="Un CRM en place et pourtant des devis sans suite : pourquoi ?"
          intro="Trois situations que nous retrouvons dans presque toutes les entreprises qui ont déjà un CRM. Aucune n'est une question de volonté : ce sont les règles et les automatisations qui manquent."
          fond="blanc"
          points={[
            {
              icon: FileClock,
              titre: "Les devis partent, personne ne relance",
              texte:
                "Le devis est bien enregistré dans le CRM. Ensuite, relancer demande d'y penser au bon moment, sans paraître insistant : dans les faits, la carte reste à « Devis envoyé » pendant des mois.",
            },
            {
              icon: UserX,
              titre: "L'équipe ne remplit plus les fiches",
              texte:
                "Trop d'étapes, trop de champs, et rien en retour : saisir dans le CRM ne rapporte rien à celui qui saisit. Les fiches s'arrêtent à la première étape et l'outil devient un carnet d'adresses.",
            },
            {
              icon: MailX,
              titre: "Des automatisations jamais activées, ou mal réglées",
              texte:
                "Votre CRM sait envoyer une relance, rappeler un rendez-vous, prévenir quand une fiche ne bouge plus. Ces fonctions dorment, ou tournent avec des textes par défaut qui ne vous ressemblent pas.",
            },
          ]}
        />
      </Reveal>

      <PoleSection
        id="livrables"
        fond="gris"
        surtitre="Ce qui est livré"
        titre="Que contient l'optimisation d'un CRM, concrètement ?"
        intro="Six livrables, présents dans chaque devis d'optimisation. Sur votre outil actuel, mis en service une famille d'automatisations à la fois."
      >
        <Reveal>
          <PoleLivrables livrables={LIVRABLES} />
        </Reveal>
        <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Votre base est encombrée de doublons et de contacts morts ? Commencez par le{" "}
          <Link href={nettoyage.href} className={lienClasse}>
            {nettoyage.label.toLowerCase()}
          </Link>
          . Pas encore de CRM ? Voyez la{" "}
          <Link href={creation.href} className={lienClasse}>
            {creation.label.toLowerCase()}
          </Link>
          . Et pour confier à Claude, l&apos;IA d&apos;Anthropic, la rédaction des réponses et des relances :{" "}
          <Link href={integrationIa.href} className={lienClasse}>
            {integrationIa.label.toLowerCase()}
          </Link>
          .
        </p>
      </PoleSection>

      <SectionSombre
        id="methode"
        surtitre="Notre méthode"
        titre="Comment optimisons-nous votre CRM sans casser ce qui marche déjà ?"
        intro={[
          "Nous commençons par retirer ce qui ne sert pas, puis nous activons les automatisations une famille à la fois, en lisant les emails qui seraient partis avant de les mettre en service.",
          "Vous parlez toujours à la même personne, du diagnostic au suivi.",
        ]}
      >
        <Reveal>
          <Timeline sombre etapes={ETAPES} />
        </Reveal>
      </SectionSombre>

      <Reveal y={16}>
        <PolePrix
          id="prix"
          surtitre="Ce que ça coûte"
          titre="Combien coûte l'optimisation d'un CRM avec relances automatiques ?"
          intro="Aucun tarif public, parce qu'aucun CRM n'est réglé de la même façon ni relié aux mêmes outils. Chaque étape a en revanche un prix fixe, écrit avant de commencer, et vous pouvez vous arrêter après le diagnostic."
          lignes={[
            {
              libelle: "Diagnostic d'une journée",
              valeur: "Prix fixe",
              detail: "communiqué sous 24 h après votre demande ; vous pouvez vous arrêter là, le plan reste à vous",
            },
            {
              libelle: "Optimisation : étapes, relances, rappels, tableau de bord",
              valeur: "Sur devis",
              detail: "prix fixe et délai écrits après le diagnostic, avant tout engagement",
            },
            {
              libelle: "Suivi mensuel",
              valeur: "Facultatif",
              detail: "proposé avec le devis, jamais imposé, arrêtable quand vous voulez",
            },
            {
              libelle: "Abonnement à l'outil CRM",
              valeur: "Réglé à l'éditeur",
              detail: "à son tarif public, sur votre compte actuel, qui ne change pas",
            },
          ]}
          engagementsTitre="Ce qui est inclus"
          engagements={[
            "Le plan écrit du diagnostic : étapes à revoir, champs à retirer, automatisations avec leur règle de déclenchement",
            "Les textes des relances et des rappels écrits avec vous, dans votre ton, et testés sur d'anciens dossiers",
            "Le tableau de bord du matin et, si vous le souhaitez, le résumé du lundi par email",
            "La documentation de chaque automatisation et le journal de ce qui est parti",
            "Une séance de prise en main pour votre équipe et un interlocuteur unique",
          ]}
          lien={{ href: ANCRE_FORMULAIRE, label: "Demander le diagnostic CRM" }}
          note="Devis écrit et validé avant tout engagement. L'abonnement à votre CRM reste facturé par son éditeur, à part."
        />
      </Reveal>

      <PoleFAQ
        id="faq"
        surtitre="Réponses franches"
        titre="Vos questions sur l'optimisation d'un CRM"
        intro="Un CRM délaissé, les relances, le risque d'agacer, l'outil, le tableau de bord, le prix : nous répondons franchement."
        items={FAQ_OPTIMISATION_CRM}
        lien={{ href: "/contact", label: "Poser une autre question à l'agence" }}
      />

      <PoleAutresPoles
        slug="crm"
        surtitre="Nos autres pôles"
        titre="Le CRM relance les demandes, les trois autres pôles les apportent"
        intro="Un site qui reçoit les demandes, de la publicité qui les amène, un référencement sur Google et dans les IA."
      />

      <FormulaireFinal
        id="formulaire"
        pole="crm"
        page={URL_PAGE}
        surtitre="Parlons de votre CRM"
        titre="Dites-nous où en est votre CRM, nous vous répondons sous 24 h"
        intro="Deux étapes, deux minutes. Nous vous disons si un diagnostic a du sens chez vous, et à quel prix fixe."
        question={{
          libelle: "Votre CRM, aujourd'hui :",
          aide: "Aucune coordonnée demandée à cette étape.",
          options: [
            { value: "pas-de-relance", label: "En place, mais personne ne relance", desc: "Les devis restent sans suite", icon: <MailX /> },
            { value: "pas-rempli", label: "En place, mais l'équipe ne le remplit pas", desc: "Les fiches s'arrêtent vite", icon: <UserX /> },
            { value: "rien-automatise", label: "En place, mais rien n'est automatisé", desc: "Tout se fait à la main", icon: <Plug /> },
            { value: "inconnu", label: "Je ne sais pas ce qu'il vaut", desc: "Le diagnostic est fait pour ça", icon: <CircleHelp /> },
          ],
        }}
        titreEtape2="Où vous répondre ?"
        boutonLabel="Recevoir ma réponse sous 24 h"
        calendlyLabel="ou réservez 30 min avec le fondateur"
        confirmation={{
          titre: "Merci, c'est bien reçu.",
          texte: "Nous vous répondons sous 24 h, par email ou par téléphone, pour vous dire si un diagnostic de votre CRM a du sens dans votre cas.",
        }}
      />

      <PoleCTA
        titre="Une journée pour savoir ce que votre CRM pourrait faire tout seul"
        texte="Réservez 30 minutes avec le fondateur : nous vous disons si un diagnostic de votre CRM a du sens dans votre cas."
        calendlyLabel={LABEL_CALENDLY}
        contactLabel="Demander un diagnostic CRM"
        afficherTelephone
      />

      <StickyCtaBar label="Réserver un diagnostic CRM" href={ANCRE_FORMULAIRE} mentions={MENTIONS} />
    </div>
  );
}
