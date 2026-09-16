import Link from "next/link";
import {
  Bot,
  CalendarClock,
  Check,
  CircleHelp,
  Database,
  EyeOff,
  FileCheck,
  FileClock,
  Inbox,
  KeyRound,
  Plug,
  RefreshCw,
  Search,
  Send,
  ShieldCheck,
  SquareKanban,
  Unlock,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import type { FaqItem } from "@/lib/faq-schema";
import { CHIFFRES_COMMUNS, getPole, LABEL_CALENDLY, SURTITRE_ZONE } from "@/data/poles";
import { getDiagnostic } from "@/lib/diagnostics/configs";
import {
  BoutonLien,
  CtaIntermediaire,
  Engagements,
  FilAriane,
  FormulaireFinal,
  DiagnosticInteractif,
  PainPoints,
  PoleAutresPoles,
  PoleCTA,
  PoleFAQ,
  PolePreuve,
  PolePrix,
  PoleSection,
  SectionOutil,
  SectionSombre,
  StickyCtaBar,
  Timeline,
} from "@/components/pole";
import { Conteneur, Paragraphes, Surtitre } from "@/components/pole/pole-ui";
import { CardBody, CardContainer, CardItem, HeroMesh, NumberTicker, Reveal, Spotlight } from "@/components/motion";
import PipelineMock from "./PipelineMock";
import SousPagesCrm from "./SousPagesCrm";

/**
 * Page pôle « CRM et relances automatiques » (/services/crm).
 * Composant serveur : le H1, les textes et la FAQ sont dans le HTML. Les
 * composants animés (mesh, compteurs, cartes en perspective, formulaire,
 * barre collante) sont des enfants « use client ».
 * Aucun prix chiffré pour ce pôle : « sur devis », « diagnostic d'une
 * journée », « prix fixe communiqué sous 24 h ». Relances par email et
 * rappels de rendez-vous uniquement : ni SMS ni WhatsApp.
 */

export const pole = getPole("crm");
/** Diagnostic interactif posé après le hero (src/lib/diagnostics/configs/crm.ts). */
const DIAGNOSTIC = getDiagnostic("crm-diagnostic-suivi-demandes")!;

export const FIL_ARIANE = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: pole.nomCourt },
];

const ANCRE_FORMULAIRE = "#formulaire";

/** Étude de cas et site d'un client réel dont nous avons monté le pipeline de vente. */
const ARANCINI = {
  nom: "Monsieur Arancini",
  etudeDeCas: "/etude-de-cas/monsieur-arancini",
  site: "https://monsieurarancini.fr",
};

const CHECKMARKS_HERO = [
  "HubSpot, Salesforce, Pipedrive ou le CRM que vous avez déjà",
  "Vos données restent chez vous",
  "Prix fixe écrit avant de commencer",
];

const MENTIONS = ["Premier échange gratuit", "Sans engagement", "Réponse sous 24 h"];

export const FAQ_CRM: FaqItem[] = [
  {
    q: "Quel CRM mettez-vous en place ?",
    a: "Celui que vous avez déjà, ou celui qui convient à votre activité : nous travaillons sur HubSpot, Salesforce, Pipedrive, Zoho CRM, Brevo, Sellsy, Axonaut ou monday CRM, et sur les autres CRM du marché. Si vous partez de zéro, le diagnostic compare deux ou trois options selon votre taille, vos outils actuels et le coût de l'abonnement, et écrit les raisons du choix. Si vous avez déjà un CRM, nous partons de celui-là plutôt que de vous faire changer d'outil, à condition qu'il puisse être relié à votre site et à vos campagnes.",
  },
  {
    q: "Ai-je besoin d'un CRM avec une équipe de trois personnes ?",
    a: "Souvent oui, dès que les demandes arrivent par plusieurs canaux (site, téléphone, campagnes, réseaux sociaux) et que plusieurs personnes y répondent. Le CRM ne sert pas à produire de gros rapports : il sert à ce qu'aucune demande ne se perde et que chaque devis soit relancé. Pour une personne seule avec peu de demandes, un tableur bien tenu peut suffire ; nous vous le dirons pendant le diagnostic si c'est votre cas.",
  },
  {
    q: "Que deviennent mes contacts dans Excel ou dans ma boîte mail ?",
    a: "Nous les importons dans le CRM après un nettoyage : doublons, adresses invalides, colonnes inutiles. Vous validez le fichier avant l'import. Vos fichiers d'origine restent à vous, et vous pouvez exporter le contenu du CRM à tout moment, puisque le compte est à votre nom.",
  },
  {
    q: "Combien de temps prend la mise en place ?",
    a: "Une journée de diagnostic, puis quelques semaines de mise en place selon le nombre de branchements (formulaires du site, campagnes Google Ads et Meta Ads, import des contacts) et de relances à écrire. Le délai exact est écrit dans le devis, avec le prix fixe, avant tout engagement.",
  },
  {
    q: "Les relances automatiques par email sont-elles conformes au RGPD ?",
    a: "Relancer une personne qui vous a demandé un devis porte sur sa propre demande : c'est le cas le plus simple. Nous limitons la séquence dans le temps, chaque email contient un moyen simple de demander l'arrêt, la séquence s'arrête dès que la personne répond, et nous documentons le traitement pour votre registre. Nous ne sommes pas un cabinet juridique : pour une activité sensible (santé, mineurs, données financières), faites relire le dispositif par votre conseil ou votre délégué à la protection des données.",
  },
  {
    q: "Le CRM fonctionne-t-il avec mon site actuel ?",
    a: "Dans la plupart des cas, oui : un formulaire WordPress, Wix, Shopify ou sur mesure peut envoyer chaque demande dans le CRM avec sa source. Si votre site ne le permet pas, nous le disons pendant le diagnostic et nous proposons la solution la plus simple, un formulaire relié par exemple, jamais une refonte pour le principe.",
  },
  {
    q: "Et l'intelligence artificielle dans tout cela ?",
    a: "Elle vient après le CRM, pas avant. Une fois les demandes au même endroit, Claude, l'intelligence artificielle d'Anthropic, peut préparer une réponse aux devis reçus la nuit, répondre aux avis Google ou rédiger une relance dans votre ton. Une validation humaine reste en place là où une erreur coûterait cher. C'est l'objet de notre page intégration IA, la sous-page de ce pôle.",
  },
];

const ETAPES = [
  {
    repere: "Jour 1",
    icon: Search,
    titre: "Diagnostic d'une journée",
    texte:
      "Sur place ou à distance : d'où viennent vos demandes, où elles atterrissent, qui les traite, combien de devis restent sans réponse. Nous regardons vos outils réels : boîte mail, tableur, site, campagnes.",
  },
  {
    repere: "Sous 24 h",
    icon: FileCheck,
    titre: "Plan écrit et prix fixe",
    texte:
      "Vous recevez les étapes de votre pipeline, les relances prévues avec leur calendrier, les branchements à faire, et un prix fixe. Vous pouvez vous arrêter là : le plan reste à vous.",
  },
  {
    repere: "Les semaines suivantes",
    icon: Plug,
    titre: "Mise en place et branchement",
    texte:
      "Compte CRM créé à votre nom, contacts importés, formulaires du site et campagnes reliés, relances écrites avec vous puis testées sur de vrais cas avant leur mise en service. Une séance de prise en main pour votre équipe.",
  },
  {
    repere: "Chaque mois, si vous le souhaitez",
    icon: RefreshCw,
    titre: "Suivi mensuel facultatif",
    texte:
      "Nous relisons ce qui est passé dans le pipeline, nous ajustons les relances qui ne donnent rien et nous ajoutons l'étape suivante. Jamais imposé, arrêtable quand vous voulez.",
  },
];

const NOS_RELANCES = [
  { icon: Database, titre: "L'outil", texte: "Pipedrive pour notre propre agence ; chez nos clients, le CRM qu'ils ont choisi." },
  { icon: Send, titre: "Le déclencheur", texte: "Une demande reçue sur notre site, puis un appel resté sans réponse." },
  { icon: CalendarClock, titre: "La séquence", texte: "Des emails pendant trente jours, arrêtés dès la première réponse." },
];

const lienClasse =
  "font-medium text-primary-texte underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm";

export default function CrmContent() {
  return (
    <div className="pt-16">
      <FilAriane elements={FIL_ARIANE} />

      {/* Hero : H1 et textes rendus côté serveur ; mesh et spotlight en fond (clients). */}
      <section className="relative isolate overflow-hidden bg-background py-14 sm:py-20 lg:py-24">
        <HeroMesh intensite={0.9} />
        <Spotlight />
        <Conteneur>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Mobile : boutons juste après le premier paragraphe (order), coches ensuite ; desktop : ordre du DOM. */}
            <div className="flex flex-col lg:col-span-7">
              <Surtitre>{SURTITRE_ZONE}</Surtitre>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                CRM et relances automatiques pour TPE et PME à Paris&nbsp;:{" "}
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text pb-1 text-transparent">
                  chaque demande suivie et relancée
                </span>
              </h1>
              <div className="mt-6 max-w-2xl space-y-3 text-lg">
                <Paragraphes
                  className="text-slate-600"
                  texte="Une demande arrive par le formulaire du site, une autre par Google Ads, une troisième par téléphone : sans CRM, elles finissent dans une boîte mail et les devis partent sans jamais être relancés. Nous mettons en place votre CRM, nous y relions votre site et vos campagnes, et chaque devis sans réponse est relancé automatiquement par email."
                />
                {/* Masqué sur mobile : le bouton principal doit rester visible sans défilement (390 × 844). */}
                <Paragraphes
                  className="hidden text-slate-600 sm:block"
                  texte="Notre agence, à Rueil-Malmaison et Paris, travaille sur tous les CRM du marché : HubSpot, Salesforce, Pipedrive, Zoho CRM, Brevo, Sellsy, Axonaut ou monday CRM, ou celui que vous avez déjà. Diagnostic d'une journée, plan écrit, prix fixe communiqué sous 24 h."
                />
              </div>

              <ul className="order-1 mt-6 flex flex-col gap-2.5 sm:order-none sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-x-6">
                {CHECKMARKS_HERO.map((c) => (
                  <li key={c} className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                {/* Libellé court : une seule ligne en 390 px, le bouton reste visible sans défilement. */}
                <BoutonLien href={ANCRE_FORMULAIRE} label="Demander un diagnostic CRM" variante="primaire" />
                <BoutonLien href={SITE.calendly} label={LABEL_CALENDLY} external variante="secondaire" />
              </div>
              <p className="order-2 mt-4 text-sm text-muted-foreground sm:order-none">
                {MENTIONS.map((m, i) => (
                  <span key={m}>
                    {i > 0 && <span aria-hidden="true"> · </span>}
                    {m}
                  </span>
                ))}
              </p>
            </div>

            {/* Pipeline d'exemple, en perspective légère (aucun mouvement au tactile ni en animations réduites). */}
            <div className="lg:col-span-5">
              <CardContainer intensite={60} containerClassName="w-full" className="w-full">
                <CardBody className="w-full">
                  <CardItem translateZ={24} className="w-full">
                    <PipelineMock />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>

          {/* Trois chiffres, valeur finale dans le HTML (NumberTicker n'anime qu'au montage). */}
          <dl className="mt-10 grid max-w-3xl grid-cols-3 gap-2 sm:mt-12 sm:gap-4">
            <div className="flex flex-col rounded-2xl border border-border bg-white/70 px-3 py-3 sm:px-5 sm:py-4">
              <dt className="order-2 text-xs text-muted-foreground sm:text-sm">{CHIFFRES_COMMUNS[0].libelle}</dt>
              <dd className="text-xl font-bold text-foreground sm:text-2xl">
                <NumberTicker value={150} />+
              </dd>
            </div>
            <div className="flex flex-col rounded-2xl border border-border bg-white/70 px-3 py-3 sm:px-5 sm:py-4">
              <dt className="order-2 text-xs text-muted-foreground sm:text-sm">{CHIFFRES_COMMUNS[1].libelle}</dt>
              <dd className="text-xl font-bold text-foreground sm:text-2xl">
                <NumberTicker value={Number(SITE.reviews.rating)} decimalPlaces={1} delay={0.15} />
                /5
              </dd>
            </div>
            <div className="flex flex-col rounded-2xl border border-border bg-white/70 px-3 py-3 sm:px-5 sm:py-4">
              <dt className="order-2 text-xs text-muted-foreground sm:text-sm">pour un plan écrit et un prix fixe</dt>
              <dd className="text-xl font-bold text-foreground sm:text-2xl">
                <NumberTicker value={24} delay={0.2} /> h
              </dd>
            </div>
          </dl>
        </Conteneur>
      </section>

      {/* Outil gratuit du pôle, juste après le hero (fond gris : le hero est clair) : résultat immédiat, rapport complet par email. */}
      <SectionOutil badge="Diagnostic gratuit" titre={DIAGNOSTIC.titre} accroche={DIAGNOSTIC.accroche} obtenez={DIAGNOSTIC.obtenez} fond="gris">
        <DiagnosticInteractif diagnostic={DIAGNOSTIC} page={pole.href} />
      </SectionOutil>

      <Reveal y={16}>
        <PainPoints
          id="constat"
          surtitre="Le constat"
          titre="Vous recevez des demandes. Combien restent sans suite ?"
          intro="Trois situations que nous retrouvons dans presque toutes les TPE et PME que nous rencontrons. Aucune n'est une question de volonté : c'est l'outil qui manque."
          fond="blanc"
          points={[
            {
              icon: Inbox,
              titre: "Des demandes oubliées dans la boîte mail",
              texte:
                "Le formulaire du site, un message Instagram, un appel manqué : chaque demande arrive à un endroit différent, et celle reçue vendredi soir attend toujours une réponse le mardi.",
            },
            {
              icon: FileClock,
              titre: "Des devis jamais relancés",
              texte:
                "Le devis part, puis plus rien. Relancer demande d'y penser, au bon moment, sans paraître insistant : dans les faits, personne ne le fait et le devis reste sans suite.",
            },
            {
              icon: EyeOff,
              titre: "Aucune vue sur ce qui vient de Google ou de Meta",
              texte:
                "Vous payez des campagnes, mais vous ne savez pas quelles demandes elles ont amenées, ni lesquelles sont devenues des clients. Impossible de décider où remettre du budget.",
            },
          ]}
        />
      </Reveal>

      {/* Les quatre sous-pages du pôle : création, optimisation, nettoyage, intégration IA (données de poles.ts). */}
      <PoleSection
        id="offres"
        fond="gris"
        surtitre="Les quatre prestations du pôle"
        titre="Que mettons-nous en place pour une TPE ou une PME ?"
        intro="Quatre prestations, prises ensemble ou séparément, toujours sur l'outil que vous utiliserez vraiment : HubSpot, Salesforce, Pipedrive, Zoho CRM, Brevo, Sellsy, Axonaut, monday CRM, ou le CRM que vous avez déjà. Chacune a sa page, son diagnostic d'une journée et son prix fixe écrit avant de commencer."
      >
        <SousPagesCrm />

        <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Notre agence est à Rueil-Malmaison (92) ; nous intervenons à Paris et en Île-de-France (voir notre{" "}
          <Link href={pole.pageVille.href} className={lienClasse}>
            agence web à Paris
          </Link>
          ), et à distance partout en France : un CRM se met en place en visio. Pas encore de site pour recevoir les demandes ? Demandez{" "}
          <Link href="/demande-maquette" className={lienClasse}>
            une maquette gratuite en 48 h
          </Link>
          .
        </p>
      </PoleSection>

      <SectionSombre
        id="methode"
        surtitre="Notre méthode"
        titre="Comment mettons-nous en place votre CRM sans bloquer votre activité ?"
        intro={[
          "Pas de projet monstre : une journée pour comprendre, un plan écrit, puis une mise en place par étapes, testée sur vos vrais cas avant d'être branchée.",
          "Vous parlez toujours à la même personne, du diagnostic au suivi.",
        ]}
      >
        <Reveal>
          <Timeline sombre etapes={ETAPES} />
        </Reveal>
      </SectionSombre>

      <Reveal y={16}>
        <Engagements
          id="engagements"
          surtitre="Nos engagements"
          titre="Ce qui est écrit dans chaque devis CRM"
          intro="Quatre règles, valables pour toutes les briques, du diagnostic au suivi."
          items={[
            {
              icon: ShieldCheck,
              titre: "Vos données restent chez vous",
              texte: "Vos contacts vivent dans votre compte CRM, hébergé par l'éditeur. Nous n'en gardons aucune copie une fois la mise en place terminée.",
            },
            {
              icon: KeyRound,
              titre: "Un compte CRM à votre nom",
              texte: "Le compte, les accès et l'historique vous appartiennent. Si nous arrêtons de travailler ensemble, vous gardez tout.",
            },
            {
              icon: FileCheck,
              titre: "Un prix fixe écrit",
              texte: "Diagnostic, mise en place, suivi : chaque étape a son prix, écrit avant de commencer. Pas de supplément découvert en cours de route.",
            },
            {
              icon: Unlock,
              titre: "Aucun abonnement imposé par nous",
              texte: "Le suivi mensuel est facultatif. L'abonnement à l'outil CRM se règle directement à son éditeur, à son tarif public.",
            },
          ]}
        />
      </Reveal>

      {/* Preuve honnête : notre propre CRM et un client réel, sans chiffre de résultat. */}
      <PolePreuve
        id="preuve"
        surtitre="Ce que vous pouvez vérifier"
        titre="Nous faisons tourner nos propres relances sur notre CRM"
        texte={[
          "Chaque demande reçue sur notre site ou par nos campagnes entre dans Pipedrive avec sa source. Quand une personne nous écrit puis ne répond pas à notre appel, une séquence d'emails part automatiquement pendant trente jours et s'arrête dès qu'elle répond.",
          "C'est le dispositif que nous installons chez vous : mêmes outils, mêmes règles, même façon d'écrire les relances. Nous vous le montrons en visio, sur notre propre compte.",
          "Nous ne publions pas de chiffres de résultat : un taux de réponse dépend du métier, du prix et de la saison. Nous préférons vous montrer le mécanisme et vous laisser juger.",
        ]}
        note="Nous vous montrons notre pipeline et nos relances en visio, sans chiffre de résultat client."
        cas={[
          {
            nom: ARANCINI.nom,
            prestation: "Pipeline de vente en six étapes dans Pipedrive",
            fait: "Producteur d'arancini artisanaux qui vend aux professionnels : nous avons monté son pipeline de vente en six étapes dans Pipedrive, pour suivre chaque prospect au même endroit, de la prise de contact jusqu'à la vente. Nous avons aussi créé son site.",
            href: ARANCINI.etudeDeCas,
            siteHref: ARANCINI.site,
            ancre: "Voir le site et l'étude de cas du client",
          },
        ]}
        aside={
          <Reveal y={16}>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.18)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-purple-700">Nos relances, en clair</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">Ce que vous pouvez vérifier lors de l&apos;appel</h3>
              <ul className="mt-5 space-y-4">
                {NOS_RELANCES.map(({ icon: Icon, titre, texte }) => (
                  <li key={titre} className="flex gap-3">
                    <span
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                      aria-hidden="true"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">{titre}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{texte}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-muted-foreground">
                Relances par email uniquement : nous ne proposons ni SMS ni WhatsApp.
              </p>
            </div>
          </Reveal>
        }
      />

      <Reveal y={16}>
        <CtaIntermediaire
          titre="Combien de devis restent sans réponse chez vous ?"
          texte="Si vous ne savez pas répondre, c'est la première chose que le diagnostic d'une journée établit. Décrivez-nous votre situation : nous vous disons sous 24 h si un CRM a du sens dans votre cas."
          bouton={{ href: ANCRE_FORMULAIRE, label: "Décrire ma situation" }}
          alternativeLabel="ou appelez-nous au"
        />
      </Reveal>

      <Reveal y={16}>
        <PolePrix
          id="prix"
          surtitre="Prix et engagement"
          titre="Combien coûte la mise en place d'un CRM avec relances automatiques ?"
          intro="Aucun tarif public, parce qu'aucune entreprise n'a les mêmes outils ni le même volume de demandes. Chaque étape a en revanche un prix fixe, écrit avant de commencer, et vous pouvez vous arrêter après le diagnostic."
          lignes={[
            {
              libelle: "Diagnostic d'une journée",
              valeur: "Prix fixe",
              detail: "communiqué sous 24 h après votre demande ; vous pouvez vous arrêter là, le plan reste à vous",
            },
            {
              libelle: "Mise en place : CRM, relances, branchements",
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
            "Le plan écrit du diagnostic : étapes du pipeline, calendrier des relances, branchements à faire",
            "Le compte CRM créé à votre nom et vos contacts importés après nettoyage",
            "Les formulaires du site et vos campagnes reliés, avec la source de chaque demande",
            "Les textes des relances écrits avec vous et testés avant la mise en service",
            "Une séance de prise en main pour votre équipe et un interlocuteur unique",
          ]}
          lien={{ href: ANCRE_FORMULAIRE, label: "Demander le diagnostic CRM" }}
          note="Devis écrit et validé avant tout engagement. L'abonnement à l'outil CRM est facturé par son éditeur, à part."
        />
      </Reveal>

      <PoleFAQ
        id="faq"
        surtitre="Réponses franches"
        titre="Vos questions sur le CRM et les relances automatiques"
        intro="Quel outil, pour quelle taille d'équipe, vos contacts, les délais, le RGPD, votre site, l'IA : nous répondons franchement."
        items={FAQ_CRM}
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
        page={pole.href}
        surtitre="Parlons de vos demandes"
        titre="Dites-nous ce qui vous intéresse, nous vous répondons sous 24 h"
        intro="Deux étapes, deux minutes. Nous vous disons si un diagnostic CRM a du sens chez vous, et à quel prix fixe."
        question={{
          libelle: "Ce qui vous intéresse :",
          aide: "Aucune coordonnée demandée à cette étape.",
          options: [
            { value: "crm", label: "La mise en place d'un CRM", desc: "Pipeline, contacts, prise en main", icon: <SquareKanban /> },
            { value: "relances", label: "Les relances automatiques", desc: "Devis sans réponse, rappels de rendez-vous", icon: <Send /> },
            { value: "ia", label: "L'IA sur les devis et les avis", desc: "Réponses préparées, avis Google", icon: <Bot /> },
            { value: "inconnu", label: "Je ne sais pas encore", desc: "Le diagnostic est fait pour ça", icon: <CircleHelp /> },
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
        titre="Une journée pour savoir où se perdent vos demandes"
        texte="Réservez 30 minutes avec le fondateur : nous vous disons si un diagnostic CRM a du sens dans votre cas."
        calendlyLabel={LABEL_CALENDLY}
        contactLabel="Demander un diagnostic CRM"
        afficherTelephone
      />

      <StickyCtaBar label="Réserver un diagnostic CRM" href={ANCRE_FORMULAIRE} mentions={MENTIONS} />
    </div>
  );
}
