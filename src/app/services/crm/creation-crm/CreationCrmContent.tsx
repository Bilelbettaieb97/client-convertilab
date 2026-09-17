import Link from "next/link";
import {
  BookOpen,
  CircleHelp,
  Columns3,
  FileCheck,
  FileSpreadsheet,
  GraduationCap,
  Import,
  Inbox,
  Layers,
  ListChecks,
  Mail,
  Plug,
  Search,
  Shuffle,
  Smartphone,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import type { FaqItem } from "@/lib/faq-schema";
import { CHIFFRES_COMMUNS, getPole, getSousPage, LABEL_CALENDLY, SURTITRE_ZONE } from "@/data/poles";
import { getDiagnostic } from "@/lib/diagnostics/configs";
import {
  FilAriane,
  type FilArianeElement,
  FormulaireFinal,
  DiagnosticInteractif,
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
import PipelineConstructionMock from "./PipelineConstructionMock";

/**
 * Sous-page « Création de CRM » (/services/crm/creation-crm) du pôle 04
 * « CRM et relances automatiques ». Composant serveur : le H1, les textes et
 * la FAQ sont dans le HTML. Le hero est le composant partagé PoleHero (mesh,
 * grille, projecteur et carte en perspective sont ses enfants « use client ») ;
 * formulaire et barre collante sont aussi des enfants « use client ».
 * Aucun prix chiffré : « sur devis », « diagnostic d'une journée », « prix
 * fixe communiqué sous 24 h ». Relances par email et rappels uniquement.
 */

export const pole = getPole("crm");
export const sousPage = getSousPage("crm", "/services/crm/creation-crm");
export const URL_PAGE = sousPage.href;
/** Diagnostic interactif posé après le hero (src/lib/diagnostics/configs/crm.ts). */
const DIAGNOSTIC = getDiagnostic("crm-creation-pret-pour-un-crm")!;

export const FIL_ARIANE: FilArianeElement[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: pole.nomCourt, href: pole.href },
  { label: "Création de CRM" },
];

const ANCRE_FORMULAIRE = "#formulaire";
const MENTIONS = ["Premier échange gratuit", "Sans engagement", "Réponse sous 24 h"];

const CHECKMARKS_HERO = [
  "HubSpot, Salesforce, Pipedrive, Zoho CRM ou celui de votre choix",
  "Compte CRM créé à votre nom",
  "Prix fixe écrit avant de commencer",
];

/** Les deux autres sous-pages CRM, pour le maillage interne (ancres descriptives de poles.ts). */
const optimisation = getSousPage("crm", "/services/crm/optimisation-crm");
const nettoyage = getSousPage("crm", "/services/crm/nettoyage-crm");

export const FAQ_CREATION_CRM: FaqItem[] = [
  {
    q: "Quel CRM choisir pour une TPE ou une PME ?",
    a: "Celui que votre équipe remplira vraiment. Pour une petite structure, Pipedrive, HubSpot, Zoho CRM, Brevo, Sellsy, Axonaut ou monday CRM couvrent l'essentiel : un pipeline, des champs, des relances, un lien avec le site. Salesforce se justifie au-delà, ou quand un groupe l'impose. Le diagnostic compare deux ou trois options selon votre taille, vos outils actuels et le coût de l'abonnement, et écrit les raisons du choix. Si vous avez déjà un outil, nous partons de celui-là.",
  },
  {
    q: "Combien de temps prend la création d'un CRM ?",
    a: "Une journée de diagnostic, puis quelques semaines de mise en place selon le nombre de branchements (formulaires du site, campagnes Google Ads et Meta Ads, import des contacts) et de relances à écrire. Le délai exact figure dans le devis, avec le prix fixe, avant tout engagement. Votre activité continue pendant ce temps : rien n'est coupé.",
  },
  {
    q: "Mes contacts sont dans Excel, dans ma boîte mail et dans mon téléphone : comment les récupérer ?",
    a: "Nous rassemblons les sources dans un seul fichier, une ligne par personne, puis nous le nettoyons avant l'import : doublons, adresses invalides, colonnes inutiles, téléphones au même format. Vous validez le fichier avant que quoi que ce soit n'entre dans le CRM. Vos fichiers d'origine restent à vous, datés, et le contenu du CRM est exportable à tout moment.",
  },
  {
    q: "Le CRM sera-t-il relié à mon site et à mes campagnes ?",
    a: "Oui, c'est le cœur de la mise en place. Chaque formulaire du site crée une fiche avec sa source et la page d'origine ; les demandes venues de Google Ads ou de Meta Ads arrivent avec le nom de la campagne. Un formulaire WordPress, Wix, Shopify ou sur mesure peut être relié dans la plupart des cas ; si votre site ne le permet pas, nous le disons pendant le diagnostic et proposons la solution la plus simple.",
  },
  {
    q: "Faut-il former mon équipe ?",
    a: "Une séance de prise en main est incluse, sur place en Île-de-France ou à distance : créer une fiche, faire avancer une carte, lire la liste des prochaines actions. Vous recevez aussi un guide de deux pages avec les règles de votre CRM (étapes, champs obligatoires, format des téléphones). Le but est que l'outil soit rempli sans nous.",
  },
  {
    q: "Que se passe-t-il si nous arrêtons de travailler ensemble ?",
    a: "Rien ne change pour vous : le compte CRM, les accès, l'historique et les contacts sont à votre nom dès le premier jour, et l'abonnement est réglé directement à l'éditeur. Nous ne gardons aucune copie de vos données une fois la mise en place terminée. Le suivi mensuel est facultatif et s'arrête quand vous le décidez.",
  },
];

const ETAPES = [
  {
    repere: "Jour 1",
    icon: Search,
    titre: "Diagnostic d'une journée",
    texte:
      "Sur place ou à distance : d'où viennent vos demandes, où vivent vos contacts, qui traite quoi. Nous regardons vos outils réels (boîte mail, tableur, site, campagnes) et nous comparons deux ou trois CRM adaptés à votre taille.",
  },
  {
    repere: "Sous 24 h",
    icon: FileCheck,
    titre: "Plan écrit et prix fixe",
    texte:
      "Vous recevez le CRM conseillé avec les raisons du choix, les étapes de votre pipeline, la liste des champs, les branchements à faire et un prix fixe. Vous pouvez vous arrêter là : le plan reste à vous.",
  },
  {
    repere: "Les semaines suivantes",
    icon: Plug,
    titre: "Création, import et branchement",
    texte:
      "Compte créé à votre nom, pipeline et champs configurés, contacts importés après nettoyage et validation, formulaires du site et campagnes reliés, premières relances écrites avec vous et testées sur de vrais cas.",
  },
  {
    repere: "Le dernier jour",
    icon: GraduationCap,
    titre: "Prise en main et remise des clés",
    texte:
      "Une séance avec votre équipe, un guide de deux pages, et les accès administrateur entre vos mains. Le suivi mensuel est proposé, jamais imposé.",
  },
];

const LIVRABLES = [
  { icon: Columns3, titre: "Le pipeline de vente à vos étapes", texte: "De la demande à la décision, avec une condition d'entrée et de sortie par étape." },
  { icon: ListChecks, titre: "Les champs utiles, et seulement eux", texte: "Origine, prestation, montant du devis, prochaine action datée, motif de perte : en listes fermées." },
  { icon: Import, titre: "Vos contacts importés et nettoyés", texte: "Un seul fichier validé par vous, dédoublonné, aux formats harmonisés, avant l'import." },
  { icon: Plug, titre: "Le site et les campagnes reliés", texte: "Chaque formulaire crée une fiche avec sa source ; Google Ads et Meta Ads arrivent avec le nom de la campagne." },
  { icon: Mail, titre: "Les premières relances par email", texte: "Accusé de réception, relance du devis sans réponse à J+3, rappel de rendez-vous la veille, dans votre ton." },
  { icon: BookOpen, titre: "Le guide d'équipe et les accès", texte: "Deux pages de règles, une séance de prise en main, un compte à votre nom avec les droits administrateur." },
];

const lienClasse =
  "font-medium text-primary-texte underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm";

export default function CreationCrmContent() {
  return (
    <div className="pt-16">
      <FilAriane elements={FIL_ARIANE} />

      {/* Hero partagé : H1 (mots clés en dégradé), textes, trois coches, deux boutons, mention, trois chiffres ; le pipeline en construction à droite (carte en perspective, sous la colonne sur mobile). */}
      <PoleHero
        surtitre={SURTITRE_ZONE}
        titre="Création de CRM pour TPE et PME à Paris : votre pipeline en place, vos contacts importés"
        motsCles={["Création de CRM", "pipeline"]}
        texte={[
          "Vous partez d'un tableur, d'une boîte mail et d'un téléphone. Nous choisissons avec vous le CRM adapté à votre taille et nous créons le compte à votre nom. Nous montons votre pipeline de vente, vos champs utiles et l'import de vos contacts après nettoyage. Nous relions ensuite le tout à votre site et à vos campagnes.",
          "Notre agence, à Rueil-Malmaison et Paris, travaille sur tous les CRM du marché : HubSpot, Salesforce, Pipedrive, Zoho CRM, Brevo, Sellsy, Axonaut ou monday CRM. Diagnostic d'une journée, plan écrit, prix fixe communiqué sous 24 h.",
        ]}
        reassurance={CHECKMARKS_HERO.slice(0, 3)}
        boutonPrimaire={{ href: ANCRE_FORMULAIRE, label: "Demander un diagnostic CRM" }}
        boutonSecondaire={{ href: SITE.calendly, label: LABEL_CALENDLY, external: true }}
        mention={
          <>
            {MENTIONS.join(" · ")}. Cette prestation fait partie de notre pôle{" "}
            <Link href={pole.href} className={lienClasse}>
              {pole.nomCourt}
            </Link>
            .
          </>
        }
        chiffres={[...CHIFFRES_COMMUNS, { valeur: "24 h", libelle: "pour un plan écrit et un prix fixe" }]}
        aside={<PipelineConstructionMock />}
        asideRelief
        asideMobile
      />

      {/* Outil gratuit, juste après le hero (fond gris : le hero est clair) : résultat immédiat, rapport complet par email. */}
      <SectionOutil badge="Diagnostic gratuit" titre={DIAGNOSTIC.titre} accroche={DIAGNOSTIC.accroche} obtenez={DIAGNOSTIC.obtenez} fond="gris">
        <DiagnosticInteractif diagnostic={DIAGNOSTIC} page={URL_PAGE} />
      </SectionOutil>

      <Reveal y={16}>
        <PainPoints
          id="constat"
          surtitre="Le constat"
          titre="Pourquoi un tableur ne suffit plus dès que les demandes arrivent de plusieurs côtés ?"
          intro="Trois situations que nous retrouvons dans presque toutes les TPE et PME qui n'ont pas encore de CRM. Aucune n'est une question de volonté : c'est l'outil qui manque."
          fond="blanc"
          points={[
            {
              icon: FileSpreadsheet,
              titre: "Trois fichiers, trois versions de la même liste",
              texte:
                "Un tableur sur un ordinateur, les contacts d'un téléphone, l'historique dans une boîte mail : personne n'a la version à jour, et la même personne est notée trois fois avec trois numéros.",
            },
            {
              icon: Inbox,
              titre: "Des demandes qui arrivent partout, sauf au même endroit",
              texte:
                "Le formulaire du site, un message Instagram, un appel manqué, une campagne Google Ads : chaque demande atterrit dans un outil différent, et celle de vendredi soir attend toujours mardi.",
            },
            {
              icon: Shuffle,
              titre: "Aucune prochaine action, donc aucun suivi",
              texte:
                "Un devis part, puis plus rien n'est écrit : ni qui doit relancer, ni quand. Quand une demande devient cliente, personne ne sait par quel canal elle était arrivée.",
            },
          ]}
        />
      </Reveal>

      <PoleSection
        id="livrables"
        fond="gris"
        surtitre="Ce qui est livré"
        titre="Que contient la création d'un CRM, concrètement ?"
        intro="Six livrables, présents dans chaque devis de création. Sur l'outil que vous utiliserez vraiment, avec un compte à votre nom."
      >
        <Reveal>
          <PoleLivrables livrables={LIVRABLES} />
        </Reveal>
        <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Vous avez déjà un CRM ? Deux autres prestations du pôle s&apos;appliquent à l&apos;existant :{" "}
          <Link href={optimisation.href} className={lienClasse}>
            {optimisation.label}
          </Link>{" "}
          et{" "}
          <Link href={nettoyage.href} className={lienClasse}>
            {nettoyage.label}
          </Link>
          . Pas encore de site pour recevoir les demandes ? Demandez{" "}
          <Link href="/demande-maquette" className={lienClasse}>
            une maquette gratuite en 48 h
          </Link>
          .
        </p>
      </PoleSection>

      <SectionSombre
        id="methode"
        surtitre="Notre méthode"
        titre="Comment créons-nous votre CRM sans bloquer votre activité ?"
        intro={[
          "Pas de projet monstre : une journée pour comprendre, un plan écrit, puis une mise en place par étapes, testée sur vos vrais cas avant d'être branchée.",
          "Vous parlez toujours à la même personne, du diagnostic à la remise des clés.",
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
          titre="Combien coûte la création d'un CRM pour une TPE ou une PME ?"
          intro="Aucun tarif public, parce qu'aucune entreprise n'a les mêmes contacts, les mêmes canaux ni le même outil. Chaque étape a en revanche un prix fixe, écrit avant de commencer, et vous pouvez vous arrêter après le diagnostic."
          lignes={[
            {
              libelle: "Diagnostic d'une journée",
              valeur: "Prix fixe",
              detail: "communiqué sous 24 h après votre demande ; vous pouvez vous arrêter là, le plan reste à vous",
            },
            {
              libelle: "Création : compte, pipeline, champs, import, branchements",
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
              detail: "à son tarif public, sur un compte à votre nom",
            },
          ]}
          engagementsTitre="Ce qui est inclus"
          engagements={[
            "Le plan écrit du diagnostic : outil conseillé, étapes du pipeline, liste des champs, branchements",
            "Le compte CRM créé à votre nom et vos contacts importés après nettoyage et validation",
            "Les formulaires du site et vos campagnes reliés, avec la source de chaque demande",
            "Les premières relances par email écrites avec vous et testées avant la mise en service",
            "Une séance de prise en main, un guide de deux pages et un interlocuteur unique",
          ]}
          lien={{ href: ANCRE_FORMULAIRE, label: "Demander le diagnostic CRM" }}
          note="Devis écrit et validé avant tout engagement. L'abonnement à l'outil CRM est facturé par son éditeur, à part."
        />
      </Reveal>

      <PoleSection
        id="preuve"
        fond="gris"
        surtitre="Ce que nous montrons"
        titre="Ce que nous montrons en visio, pas en chiffres"
        intro={[
          "Nous utilisons notre propre CRM pour suivre les demandes de notre site et de nos campagnes, avec le même pipeline et le même type de relances que ce que nous créons chez vous. Nous vous le montrons pendant l'appel, plutôt que de vous donner un chiffre de résultat qui dépend surtout de votre métier et de votre saison.",
          "Notre agence est à Rueil-Malmaison (92) ; nous intervenons à Paris et en Île-de-France, et à distance partout en France : la création de votre CRM se fait en visio.",
        ]}
        alignement="gauche"
      >
        <p className="text-foreground">
          Exemple de pipeline créé pour un client :{" "}
          <Link href="/etude-de-cas/monsieur-arancini" className="font-medium text-primary-texte underline-offset-4 hover:underline">
            Monsieur Arancini
          </Link>
          , producteur d&apos;arancini artisanaux, pipeline de vente en six étapes dans Pipedrive, de la prise de contact jusqu&apos;à la vente.{" "}
          <Link href="/agence-web/paris" className="font-medium text-primary-texte underline-offset-4 hover:underline">
            Notre agence web à Paris
          </Link>{" "}
          intervient aussi sur place.
        </p>
      </PoleSection>

      <PoleFAQ
        id="faq"
        surtitre="Réponses franches"
        titre="Vos questions sur la création d'un CRM"
        intro="Quel outil, les délais, vos contacts, le site, la formation, la suite : nous répondons franchement."
        items={FAQ_CREATION_CRM}
        lien={{ href: "/contact", label: "Poser une autre question à l'agence" }}
      />

      <PoleAutresPoles
        slug="crm"
        surtitre="Nos autres pôles"
        titre="Le CRM suit les demandes, les trois autres pôles les apportent"
        intro="Un site qui reçoit les demandes, de la publicité qui les amène, un référencement sur Google et dans les IA."
      />

      <FormulaireFinal
        id="formulaire"
        pole="crm"
        page={URL_PAGE}
        surtitre="Parlons de vos contacts"
        titre="Dites-nous où sont vos contacts aujourd'hui, nous vous répondons sous 24 h"
        intro="Deux étapes, deux minutes. Nous vous disons si un diagnostic CRM a du sens chez vous, et à quel prix fixe."
        question={{
          libelle: "Vos contacts, aujourd'hui, sont surtout :",
          aide: "Aucune coordonnée demandée à cette étape.",
          options: [
            { value: "tableur", label: "Dans un tableur", desc: "Excel, Google Sheets, Numbers", icon: <FileSpreadsheet /> },
            { value: "mail-telephone", label: "Dans ma boîte mail et mon téléphone", desc: "Sans liste à jour", icon: <Smartphone /> },
            { value: "ancien-outil", label: "Dans un outil que personne ne remplit", desc: "Un ancien CRM ou un logiciel métier", icon: <Layers /> },
            { value: "inconnu", label: "Un peu partout, je ne sais plus", desc: "Le diagnostic est fait pour ça", icon: <CircleHelp /> },
          ],
        }}
        titreEtape2="Où vous répondre ?"
        boutonLabel="Recevoir ma réponse sous 24 h"
        calendlyLabel="ou réservez 30 min avec le fondateur"
        confirmation={{
          titre: "Merci, c'est bien reçu.",
          texte: "Nous vous répondons sous 24 h, par email ou par téléphone, pour vous dire si un diagnostic CRM a du sens dans votre cas.",
        }}
      />

      <PoleCTA
        titre="Une journée pour choisir votre CRM et savoir où se perdent vos demandes"
        texte="Réservez 30 minutes avec le fondateur : nous vous disons si un diagnostic CRM a du sens dans votre cas."
        calendlyLabel={LABEL_CALENDLY}
        contactLabel="Demander un diagnostic CRM"
        afficherTelephone
      />

      <StickyCtaBar label="Réserver un diagnostic CRM" href={ANCRE_FORMULAIRE} mentions={MENTIONS} />
    </div>
  );
}
