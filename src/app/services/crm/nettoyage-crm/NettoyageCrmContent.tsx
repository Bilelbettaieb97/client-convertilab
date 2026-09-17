import Link from "next/link";
import {
  Archive,
  BookOpen,
  CircleHelp,
  Copy,
  Database,
  FileCheck,
  Filter,
  GitMerge,
  History,
  ListChecks,
  MailWarning,
  Search,
  Shuffle,
  UserX,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import type { FaqItem } from "@/lib/faq-schema";
import { CHIFFRES_COMMUNS, getPole, getSousPage, LABEL_CALENDLY, SURTITRE_ZONE } from "@/data/poles";
import { getDiagnostic } from "@/lib/diagnostics/configs";
import {
  FilAriane,
  type FilArianeElement,
  FormulaireFinal,
  AnalyseurContacts,
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
import AvantApresMock from "./AvantApresMock";

/**
 * Sous-page « Nettoyage de CRM » (/services/crm/nettoyage-crm) du pôle 04
 * « CRM et relances automatiques » : doublons fusionnés, contacts inactifs
 * archivés, champs harmonisés, règles écrites. Le hero est le composant
 * partagé PoleHero (fond, H1 à mots clés en dégradé, coches, boutons,
 * chiffres, carte en perspective autour de l'avant / après). Composant
 * serveur : le H1, les textes et la FAQ sont dans le HTML. Mesh, carte en
 * perspective, formulaire et barre collante sont des enfants « use client ».
 * Aucun prix chiffré : « sur devis », « diagnostic d'une journée », « prix
 * fixe communiqué sous 24 h ». Jamais de suppression sans validation.
 */

export const pole = getPole("crm");
export const sousPage = getSousPage("crm", "/services/crm/nettoyage-crm");
export const URL_PAGE = sousPage.href;
/** Analyseur posé après le hero (src/lib/diagnostics/configs/crm.ts). */
const DIAGNOSTIC = getDiagnostic("crm-analyse-contacts")!;

export const FIL_ARIANE: FilArianeElement[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: pole.nomCourt, href: pole.href },
  { label: "Nettoyage de CRM" },
];

const ANCRE_FORMULAIRE = "#formulaire";
const MENTIONS = ["Premier échange gratuit", "Sans engagement", "Réponse sous 24 h"];

const CHECKMARKS_HERO = [
  "Export complet avant toute action",
  "Aucune suppression sans votre validation",
  "Règles écrites pour que le CRM reste propre",
];

/** Les deux autres sous-pages CRM, pour le maillage interne (ancres descriptives de poles.ts). */
const creation = getSousPage("crm", "/services/crm/creation-crm");
const optimisation = getSousPage("crm", "/services/crm/optimisation-crm");

export const FAQ_NETTOYAGE_CRM: FaqItem[] = [
  {
    q: "Comment savoir si mon CRM a besoin d'un nettoyage ?",
    a: "Quelques signes suffisent : la même personne apparaît deux ou trois fois avec des orthographes différentes, vos emails de relance rebondissent, la moitié des fiches n'ont ni origine ni prochaine action, et l'origine des demandes est écrite de cinq façons pour dire la même chose. Si vous hésitez à envoyer une campagne parce que vous ne savez pas qui est dans la liste, c'est le moment. Le diagnostic d'une journée compte tout cela sur votre vrai compte.",
  },
  {
    q: "Supprimez-vous des contacts ?",
    a: "Le moins possible, et jamais sans vous. Avant toute action, la base entière est exportée dans un fichier daté que vous gardez. Les seules suppressions concernent les fiches inutilisables (ni nom, ni email, ni téléphone, aucune activité), présentées dans une liste que vous validez. Les contacts inactifs sont archivés, pas supprimés : ils gardent leur historique et peuvent revenir.",
  },
  {
    q: "Comment décidez-vous que deux fiches sont un doublon ?",
    a: "Avec des règles écrites avant de commencer, que vous validez : deux fiches avec le même email sont le même contact, sans exception ; même téléphone et même nom de famille, fusion après vérification du prénom ; même téléphone et noms différents, deux personnes à relier, pas à fusionner. La fiche conservée est celle qui a le plus d'historique, et tout ce qui manque y est reporté depuis l'autre avant la fusion. Ces règles restent dans votre guide d'équipe.",
  },
  {
    q: "Combien de temps prend un nettoyage de CRM ?",
    a: "Cela dépend du nombre de fiches, du nombre de sources et de l'état des champs. Le diagnostic d'une journée compte les doublons, les fiches incomplètes et les contacts inactifs, puis le devis fixe le délai et le prix. Pendant le nettoyage lui-même, nous demandons de suspendre les saisies quelques heures ou quelques jours, pour que les doublons ne reviennent pas pendant que nous les fusionnons.",
  },
  {
    q: "Le nettoyage aide-t-il pour le RGPD ?",
    a: "Il y contribue directement : ne garder que les données nécessaires, savoir depuis quand un contact n'a pas été sollicité, respecter les demandes d'arrêt, documenter les durées de conservation. Nous écrivons les règles d'archivage et nous documentons le traitement pour votre registre. Nous ne sommes pas un cabinet juridique : pour une activité sensible, faites relire le dispositif par votre conseil ou votre délégué à la protection des données.",
  },
  {
    q: "Comment éviter que le CRM se salisse à nouveau dans six mois ?",
    a: "Avec quatre habitudes, mises en place à la fin du nettoyage : une seule porte d'entrée pour les nouveaux contacts (formulaires reliés et saisie dans le CRM, plus d'import de tableur sans règles), la détection de doublons de votre CRM activée à la création, un filtre « fiches incomplètes » revu chaque semaine par une personne nommée, et un nettoyage léger chaque trimestre inscrit au calendrier. Le guide de deux pages qui contient ces règles reste dans votre CRM.",
  },
];

const ETAPES = [
  {
    repere: "Jour 1",
    icon: Search,
    titre: "Diagnostic d'une journée",
    texte:
      "Sur votre vrai compte : nombre de fiches, doublons repérés par email puis par téléphone et nom, fiches sans origine ni prochaine action, contacts sans échange depuis longtemps, formats différents pour une même information. Vous recevez les chiffres de départ.",
  },
  {
    repere: "Sous 24 h",
    icon: FileCheck,
    titre: "Règles écrites et prix fixe",
    texte:
      "Les règles de doublons, d'archivage et de format, proposées noir sur blanc pour que vous les validiez, le périmètre du nettoyage, le délai et un prix fixe. Vous pouvez vous arrêter là : les règles restent à vous.",
  },
  {
    repere: "La semaine du nettoyage",
    icon: GitMerge,
    titre: "Export, fusion, archivage, harmonisation",
    texte:
      "Export complet daté, suppression des fiches inutilisables après votre validation, fusion des doublons groupe par groupe, contacts inactifs archivés, formats harmonisés, affaires abandonnées fermées avec un motif. Puis un second comptage, comparé au premier.",
  },
  {
    repere: "Ensuite",
    icon: BookOpen,
    titre: "Garde-fous et guide d'équipe",
    texte:
      "Détection de doublons activée à la création, filtre des fiches incomplètes, nettoyage trimestriel au calendrier, guide de deux pages dans votre CRM. Suivi mensuel proposé, jamais imposé.",
  },
];

const LIVRABLES = [
  { icon: Database, titre: "L'export complet, daté, avant toute action", texte: "Contacts, organisations, affaires, historique : une copie qui vous appartient, hors du CRM." },
  { icon: GitMerge, titre: "Les doublons fusionnés", texte: "Groupe par groupe, selon les règles validées ; la fiche la plus complète est conservée, le reste y est reporté." },
  { icon: Archive, titre: "Les contacts inactifs archivés", texte: "Jamais supprimés : étiquetés, datés, avec leur historique, exclus des envois mais prêts à revenir." },
  { icon: ListChecks, titre: "Les champs harmonisés", texte: "Téléphones au même format, origine et statut en listes fermées, prestations aux intitulés de votre grille." },
  { icon: History, titre: "Le comptage avant et après", texte: "Une note datée avec les chiffres de départ et d'arrivée : ce qui a été fusionné, archivé, corrigé." },
  { icon: BookOpen, titre: "Les règles écrites et les garde-fous", texte: "Guide de deux pages, détection de doublons activée, filtre hebdomadaire, nettoyage trimestriel au calendrier." },
];

const lienClasse =
  "font-medium text-primary-texte underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm";

export default function NettoyageCrmContent() {
  return (
    <div className="pt-16">
      <FilAriane elements={FIL_ARIANE} />

      {/* Hero commun aux pages de service (PoleHero) : H1 et textes rendus côté serveur ; à droite, l'avant / après d'une liste de contacts dans la carte en perspective du composant (asideRelief), affiché sous la colonne de texte sur mobile. */}
      <PoleHero
        surtitre={SURTITRE_ZONE}
        titre="Nettoyage de CRM pour TPE et PME à Paris : doublons fusionnés, contacts à jour, règles écrites"
        motsCles={["Nettoyage de CRM", "contacts à jour"]}
        texte={[
          "La même personne trois fois, des emails qui rebondissent, des contacts sans échange depuis deux ans, l'origine des demandes écrite de cinq façons : un CRM encombré finit par ne plus être ouvert. Nous fusionnons les doublons, nous archivons les contacts inactifs, nous harmonisons les champs, et nous écrivons les règles pour que la base reste propre après nous.",
          "Sur votre outil actuel, quel qu'il soit : HubSpot, Salesforce, Pipedrive, Zoho CRM, Brevo, Sellsy, Axonaut ou monday CRM. Notre agence est à Rueil-Malmaison et Paris. Diagnostic d'une journée, règles écrites, prix fixe communiqué sous 24 h.",
        ]}
        reassurance={CHECKMARKS_HERO.slice(0, 3)}
        boutonPrimaire={{ href: ANCRE_FORMULAIRE, label: "Demander un diagnostic CRM" }}
        boutonSecondaire={{ href: SITE.calendly, label: LABEL_CALENDLY, external: true }}
        mention={MENTIONS.join(" · ")}
        chiffres={[...CHIFFRES_COMMUNS, { valeur: "24 h", libelle: "pour des règles écrites et un prix fixe" }]}
        aside={<AvantApresMock />}
        asideRelief
        asideMobile
      />

      {/* Outil gratuit, juste après le hero (fond gris : le hero est clair) : analyse dans le navigateur, rapport complet par email. */}
      <SectionOutil
        disposition="large"
        badge="Analyseur gratuit"
        titre={DIAGNOSTIC.titre}
        accroche={DIAGNOSTIC.accroche}
        obtenez={[
          "Le nombre de doublons, d'emails invalides et de téléphones manquants dans votre fichier",
          "Un score de propreté sur 100 et le détail des problèmes à corriger en premier",
          "Le rapport complet par email, avec la procédure de nettoyage en 10 étapes en bonus",
        ]}
        fond="gris"
      >
        <AnalyseurContacts slug={DIAGNOSTIC.slug} page={URL_PAGE} />
      </SectionOutil>

      <Reveal y={16}>
        <PainPoints
          id="constat"
          surtitre="Le constat"
          titre="Pourquoi un CRM encombré finit-il par ne plus être ouvert ?"
          intro="Trois situations que nous retrouvons dans presque toutes les bases de contacts qui ont quelques années. Aucune n'est une question de rigueur : sans règle écrite, une base se salit toute seule."
          fond="blanc"
          points={[
            {
              icon: Copy,
              titre: "La même personne, trois fois",
              texte:
                "Créée à la main, puis importée d'un tableur, puis arrivée par un formulaire : trois fiches, trois numéros, l'historique éparpillé. Vous ne savez plus laquelle relancer, et parfois vous relancez les trois.",
            },
            {
              icon: MailWarning,
              titre: "Des envois qui rebondissent, des contacts qui ne répondent plus",
              texte:
                "Des adresses invalides, des personnes parties, des prospects sans échange depuis deux ans dans la même liste que vos clients : chaque campagne part à moitié dans le vide et abîme la réputation de votre domaine d'envoi.",
            },
            {
              icon: Shuffle,
              titre: "Une information, cinq façons de l'écrire",
              texte:
                "« Google », « google », « G. Ads », « Adwords » et « pub » pour la même origine ; des téléphones en quatre formats ; des statuts inventés au fil de l'eau. Impossible de filtrer, donc impossible de savoir ce que chaque canal apporte.",
            },
          ]}
        />
      </Reveal>

      <PoleSection
        id="livrables"
        fond="gris"
        surtitre="Ce qui est livré"
        titre="Que contient le nettoyage d'un CRM, concrètement ?"
        intro="Six livrables, présents dans chaque devis de nettoyage. Sur votre outil actuel, avec un export complet avant toute action et votre validation avant toute suppression."
      >
        <Reveal>
          <PoleLivrables livrables={LIVRABLES} />
        </Reveal>
        <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Une base propre est le point de départ des relances automatiques : voyez l&apos;
          <Link href={optimisation.href} className={lienClasse}>
            {optimisation.label.toLowerCase()}
          </Link>
          . Pas encore de CRM, seulement des tableurs à assainir ? La{" "}
          <Link href={creation.href} className={lienClasse}>
            {creation.label.toLowerCase()}
          </Link>{" "}
          comprend le nettoyage de vos fichiers avant l&apos;import.
        </p>
      </PoleSection>

      <SectionSombre
        id="methode"
        surtitre="Notre méthode"
        titre="Comment nettoyons-nous votre CRM sans rien perdre ?"
        intro={[
          "Un export avant tout, des règles validées par vous avant la première fusion, une liste à valider avant la moindre suppression, et un comptage avant et après pour prouver ce qui a été fait.",
          "Vous parlez toujours à la même personne, du diagnostic à la remise du guide.",
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
          titre="Combien coûte le nettoyage d'un CRM ?"
          intro="Aucun tarif public, parce qu'aucune base n'a le même nombre de fiches, de sources ni de doublons. Chaque étape a en revanche un prix fixe, écrit avant de commencer, et vous pouvez vous arrêter après le diagnostic."
          lignes={[
            {
              libelle: "Diagnostic d'une journée",
              valeur: "Prix fixe",
              detail: "communiqué sous 24 h après votre demande ; vous pouvez vous arrêter là, les règles restent à vous",
            },
            {
              libelle: "Nettoyage : fusion, archivage, harmonisation, garde-fous",
              valeur: "Sur devis",
              detail: "prix fixe et délai écrits après le diagnostic, selon le nombre de fiches et de sources",
            },
            {
              libelle: "Suivi mensuel",
              valeur: "Facultatif",
              detail: "nettoyage léger chaque trimestre et relecture du filtre des fiches incomplètes, jamais imposé",
            },
            {
              libelle: "Abonnement à l'outil CRM",
              valeur: "Réglé à l'éditeur",
              detail: "à son tarif public, sur votre compte actuel, qui ne change pas",
            },
          ]}
          engagementsTitre="Ce qui est inclus"
          engagements={[
            "L'export complet et daté de votre base avant toute action, remis entre vos mains",
            "Les règles de doublons, d'archivage et de format écrites et validées par vous avant la première fusion",
            "La liste des fiches à supprimer, présentée pour validation ; les contacts inactifs archivés, jamais supprimés",
            "Le comptage avant et après, dans une note datée",
            "Le guide d'équipe de deux pages, les garde-fous activés et un interlocuteur unique",
          ]}
          lien={{ href: ANCRE_FORMULAIRE, label: "Demander le diagnostic CRM" }}
          note="Devis écrit et validé avant tout engagement. L'abonnement à votre CRM reste facturé par son éditeur, à part."
        />
      </Reveal>

      <PoleFAQ
        id="faq"
        surtitre="Réponses franches"
        titre="Vos questions sur le nettoyage d'un CRM"
        intro="Les signes, les suppressions, les doublons, le délai, le RGPD, la suite : nous répondons franchement."
        items={FAQ_NETTOYAGE_CRM}
        lien={{ href: "/contact", label: "Poser une autre question à l'agence" }}
      />

      <PoleAutresPoles
        slug="crm"
        surtitre="Nos autres pôles"
        titre="Une base propre suit les demandes, les trois autres pôles les apportent"
        intro="Un site qui reçoit les demandes, de la publicité qui les amène, un référencement sur Google et dans les IA."
      />

      <FormulaireFinal
        id="formulaire"
        pole="crm"
        page={URL_PAGE}
        surtitre="Parlons de votre base"
        titre="Dites-nous ce qui encombre votre CRM, nous vous répondons sous 24 h"
        intro="Deux étapes, deux minutes. Nous vous disons si un diagnostic a du sens chez vous, et à quel prix fixe."
        question={{
          libelle: "Le principal problème de votre base :",
          aide: "Aucune coordonnée demandée à cette étape.",
          options: [
            { value: "doublons", label: "Des doublons partout", desc: "La même personne plusieurs fois", icon: <Copy /> },
            { value: "inactifs", label: "Des contacts qui ne répondent plus", desc: "Rebonds, prospects sans échange depuis longtemps", icon: <UserX /> },
            { value: "champs", label: "Des champs remplis n'importe comment", desc: "Formats, origines, statuts différents", icon: <Filter /> },
            { value: "inconnu", label: "Je ne sais pas ce qu'il y a dedans", desc: "Le diagnostic est fait pour ça", icon: <CircleHelp /> },
          ],
        }}
        titreEtape2="Où vous répondre ?"
        boutonLabel="Recevoir ma réponse sous 24 h"
        calendlyLabel="ou réservez 30 min avec le fondateur"
        confirmation={{
          titre: "Merci, c'est bien reçu.",
          texte: "Nous vous répondons sous 24 h, par email ou par téléphone, pour vous dire si un diagnostic de votre base a du sens dans votre cas.",
        }}
      />

      <PoleCTA
        titre="Une journée pour compter ce qui encombre votre CRM"
        texte="Réservez 30 minutes avec le fondateur : nous vous disons si un nettoyage a du sens dans votre cas."
        calendlyLabel={LABEL_CALENDLY}
        contactLabel="Demander un diagnostic CRM"
        afficherTelephone
      />

      <StickyCtaBar label="Réserver un diagnostic CRM" href={ANCRE_FORMULAIRE} mentions={MENTIONS} />
    </div>
  );
}
