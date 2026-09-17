import Link from "next/link";
import {
  BarChart3,
  BookOpen,
  Check,
  ClipboardList,
  Clock,
  ExternalLink,
  FileCheck,
  FileText,
  GraduationCap,
  HelpCircle,
  MoonStar,
  PenLine,
  Plug,
  Receipt,
  RefreshCw,
  ScanText,
  Search,
  Send,
  ShieldCheck,
  Star,
  Table2,
  Unplug,
  UserCheck,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import type { FaqItem } from "@/lib/faq-schema";
import { CHIFFRES_COMMUNS, getPole, getSousPage, LABEL_CALENDLY, SURTITRE_ZONE } from "@/data/poles";
import { getDiagnostic } from "@/lib/diagnostics/configs";
import {
  BoutonLien,
  CtaIntermediaire,
  Engagements,
  FilAriane,
  type FilArianeElement,
  FormulaireFinal,
  DiagnosticInteractif,
  LienDiscret,
  PainPoints,
  PoleAutresPoles,
  PoleCTA,
  PoleFAQ,
  PoleHero,
  PoleLivrables,
  PoleSection,
  SectionOutil,
  SectionSombre,
  StickyCtaBar,
  Timeline,
} from "@/components/pole";
import { Conteneur, Paragraphes, Surtitre } from "@/components/pole/pole-ui";
import { BorderBeam, CardBody, CardContainer, CardItem, Reveal } from "@/components/motion";
import CasPratiques from "./CasPratiques";
import OutilsReliesLazy from "./OutilsReliesLazy";

/**
 * Sous-page « Intégration IA » (/services/integration-ia) du pôle 04
 * « CRM et relances automatiques » (/services/crm) : l'URL et les textes
 * propres à l'IA sont conservés, seul le rattachement change.
 * Composant serveur : le H1, les textes et la FAQ sont dans le HTML. Les
 * composants animés (mesh du hero, schéma, filtres, formulaire, barre
 * collante) sont des enfants « use client ».
 * Aucun prix chiffré pour cette prestation : « sur devis » et « prix fixe communiqué sous 24 h ».
 */

/** Pôle parent : 04, CRM et relances automatiques. */
export const pole = getPole("crm");

/** Cette page dans les données du pôle parent (href, ancre descriptive, description). */
export const sousPage = getSousPage("crm", "/services/integration-ia");

/** URL de la page, inchangée : /services/integration-ia. */
export const URL_INTEGRATION_IA = sousPage.href;
/** Diagnostic interactif posé après le hero (src/lib/diagnostics/configs/crm.ts). */
const DIAGNOSTIC = getDiagnostic("crm-ia-entreprise-prete")!;

export const FIL_ARIANE: FilArianeElement[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: pole.nomCourt, href: pole.href },
  { label: "Intégration IA" },
];

const ANCRE_FORMULAIRE = "#formulaire";

const CHECKMARKS_HERO = [
  "Vos outils actuels conservés",
  "Vos données restent chez vous",
  "Un premier flux en service en quelques semaines",
];

const MENTIONS = ["Premier échange gratuit", "Sans engagement", "Réponse sous 24 h"];

export const FAQ_INTEGRATION_IA: FaqItem[] = [
  {
    q: "Qu'est-ce qu'une intégration IA pour une PME ou une TPE ?",
    a: "C'est brancher un modèle d'intelligence artificielle, ici Claude d'Anthropic, sur vos outils du quotidien (boîte mail, agenda, site, facturation, CRM) pour qu'il prenne en charge des tâches répétitives. Ce n'est pas un chatbot posé dans un coin du site : l'IA travaille dans votre organisation, avec des règles que vous fixez.",
  },
  {
    q: "Comment se passe le diagnostic IA d'une journée ?",
    a: "Nous passons une journée avec vous, sur place en Île-de-France ou à distance. Nous listons les tâches répétitives de chaque personne, nous chiffrons le temps qu'elles prennent chaque semaine et nous repérons celles qu'une IA peut réellement reprendre. Vous repartez avec un plan écrit ; le prix fixe de l'intégration suit sous 24 h.",
  },
  {
    q: "Combien coûte une intégration IA ?",
    a: "Le diagnostic d'une journée a son propre prix fixe, communiqué sous 24 h après votre demande ; vous pouvez vous arrêter là. Ensuite, chaque entreprise a des outils et des tâches différents, donc chaque intégration se chiffre après le diagnostic : prix fixe et délai écrits sous 24 h, avant tout engagement. Les coûts d'usage du modèle, facturés par Anthropic, sont indiqués à part dans le devis.",
  },
  {
    q: "Faut-il changer mes logiciels ?",
    a: "Non. Nous branchons Claude sur ce que vous utilisez déjà : votre messagerie, votre agenda, votre site, votre logiciel de devis ou de facturation, votre CRM. Si un outil n'a aucun moyen d'être relié, nous le disons pendant le diagnostic et nous proposons la solution la plus simple, jamais un changement de logiciel pour le principe.",
  },
  {
    q: "Où sont hébergées mes données et que voit l'IA ?",
    a: "Vos outils actuels restent hébergés là où ils le sont aujourd'hui. Le diagnostic précise, tâche par tâche, ce qui est envoyé au modèle et ce qui ne sort pas de l'entreprise, limité au strict nécessaire : le texte d'une demande de devis, pas votre base clients. Les échanges avec Claude passent par l'API d'Anthropic ; selon ses conditions commerciales en vigueur, les données envoyées ne servent pas à entraîner ses modèles, et nous vous renvoyons vers ces conditions plutôt que de nous en porter garants.",
  },
  {
    q: "Est-ce conforme au RGPD ?",
    a: "Nous concevons chaque automatisation avec les principes du RGPD en tête : ne traiter que les données nécessaires, savoir où elles vont, pouvoir les supprimer, informer les personnes concernées, et nous documentons les traitements pour votre registre. Nous ne sommes pas un cabinet juridique : pour une activité sensible (santé, mineurs, données financières), faites relire le dispositif par votre conseil ou votre délégué à la protection des données (DPO).",
  },
  {
    q: "Que se passe-t-il quand l'IA se trompe ?",
    a: "Elle se trompera parfois, comme un nouveau salarié. C'est pourquoi nous plaçons une validation humaine partout où une erreur coûterait cher : un devis, une réponse à un avis négatif, un email à un gros client. Pour les tâches à faible risque, l'IA agit seule et vous gardez un journal de ce qu'elle a produit.",
  },
  {
    q: "L'IA va-t-elle remplacer mes salariés ?",
    a: "Dans les entreprises de 3 à 30 personnes, l'objectif est de rendre du temps aux personnes en place : moins de ressaisie, moins de relances oubliées, moins de soirées à rédiger. Le diagnostic chiffre ce temps par poste ; ce que vous en faites reste votre décision.",
  },
  {
    q: "Et si ça ne donne rien ?",
    a: "Le diagnostic sert justement à le savoir avant d'investir : si aucune tâche ne vaut une automatisation chez vous, nous l'écrivons dans le plan et vous vous arrêtez là. Pendant l'intégration, chaque flux est testé sur vos vrais cas (anciens devis, anciens avis) avant sa mise en service, et vous voyez dans le journal ce qu'il produit. Nous ne promettons pas de résultat chiffré ; nous nous engageons à vous dire franchement, à chaque étape, si cela vaut la peine de continuer.",
  },
  {
    q: "Pourquoi Claude et pas un autre modèle ?",
    a: "Parce que nous l'utilisons tous les jours pour faire tourner notre propre agence et que nous connaissons ses forces et ses limites en français. Nous ne sommes ni partenaire ni revendeur d'Anthropic : nous sommes un client, comme vous le serez. Si votre cas demande un autre outil, nous vous le dirons.",
  },
];

interface Formule {
  titre: string;
  etiquette: string;
  description: string;
  prix: string;
  prixDetail: string;
  points: string[];
  miseEnAvant?: boolean;
}

const FORMULES: Formule[] = [
  {
    titre: "Diagnostic IA d'une journée",
    etiquette: "Première étape",
    description: "Une journée avec vos équipes pour lister les tâches répétitives et chiffrer le temps.",
    prix: "Prix fixe",
    prixDetail: "communiqué sous 24 h après votre demande",
    points: ["Inventaire des tâches, poste par poste", "Temps hebdomadaire chiffré", "Plan écrit, classé par gain"],
    miseEnAvant: true,
  },
  {
    titre: "Intégration sur mesure",
    etiquette: "Deuxième étape",
    description: "Nous branchons Claude sur vos outils réels : boîte mail, agenda, site, CRM, facturation.",
    prix: "Sur devis",
    prixDetail: "prix fixe et délai écrits après le diagnostic",
    points: ["Construit avec Claude (Anthropic)", "Validation humaine là où une erreur coûterait cher", "Tests sur vos vrais cas"],
  },
  {
    titre: "Suivi mensuel optionnel",
    etiquette: "Ensuite, si vous le souhaitez",
    description: "Nous relisons ce que l'IA a produit, nous corrigeons les règles, nous ajoutons les tâches suivantes.",
    prix: "Optionnel",
    prixDetail: "proposé avec le devis d'intégration, jamais imposé",
    points: ["Relecture mensuelle des journaux", "Ajustement des consignes", "Un interlocuteur joignable"],
  },
];

const ENGAGEMENTS_PRIX = [
  "Un devis écrit avant tout engagement",
  "Vous restez propriétaire de vos accès et de vos données",
  "Une validation humaine sur ce qui engage votre entreprise",
  "Un seul interlocuteur, du diagnostic au suivi",
];

const PREUVES = [
  {
    icon: Send,
    titre: "Relances de prospects",
    texte: "Nos relances partent automatiquement pendant trente jours et s'arrêtent dès qu'une personne répond.",
  },
  {
    icon: Receipt,
    titre: "Facturation",
    texte: "Nos devis et nos factures passent par un outil interne construit avec Claude.",
  },
  {
    icon: Star,
    titre: "MerciAvis",
    texte: "Notre produit de collecte d'avis Google utilise Claude pour analyser les avis reçus.",
    lien: { href: "https://merciavis.fr", label: "Voir MerciAvis" },
    miseEnAvant: true,
  },
  {
    icon: BarChart3,
    titre: "Rapports internes",
    texte: "Nos rapports de suivi sont générés de la même façon, à partir de nos propres données.",
  },
];

export default function IntegrationIaContent() {
  return (
    <div className="pt-16">
      <FilAriane elements={FIL_ARIANE} />

      {/* Hero commun aux pages de service (H1, textes et chiffres dans le HTML ; fond animé côté client dans PoleHero). */}
      <PoleHero
        surtitre={SURTITRE_ZONE}
        titre="Intégration IA pour PME et TPE : automatisez le travail répétitif avec Claude"
        motsCles={["Intégration IA", "Claude"]}
        texte={[
          "Devis reçus la nuit, avis Google sans réponse, relances oubliées, comptes rendus repoussés : une IA branchée sur vos outils peut faire ce travail à votre place, avec vos règles et votre ton.",
          "Notre agence IA, à Rueil-Malmaison et Paris, commence par un diagnostic d'une journée, puis intègre Claude, l'intelligence artificielle d'Anthropic, sur mesure dans vos outils. Prix fixe communiqué sous 24 h.",
        ]}
        reassurance={CHECKMARKS_HERO}
        boutonPrimaire={{ href: ANCRE_FORMULAIRE, label: "Demander un diagnostic IA d'une journée" }}
        boutonSecondaire={{ href: SITE.calendly, label: LABEL_CALENDLY, external: true }}
        mention={
          <>
            {MENTIONS.join(" · ")}
            <span aria-hidden="true"> · </span>
            Cette prestation fait partie de notre pôle{" "}
            <Link href={pole.href} className="font-medium text-primary-texte underline-offset-4 hover:underline">
              {pole.nomCourt}
            </Link>
            .
          </>
        }
        chiffres={[...CHIFFRES_COMMUNS, { valeur: "1 journée", libelle: "de diagnostic pour chiffrer votre temps" }]}
        aside={
          /* Carte du schéma « vos outils reliés par Claude » : 380 px de schéma + légendes, soit environ 470 px à 448 px de large.
             Fond blanc à 85 % sans backdrop-blur (un filtre posé sur le mesh animé se recalculerait à chaque image). */
          <div className="relative rounded-3xl border border-border bg-white/85 p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.18)] sm:p-6">
            <BorderBeam size={80} duration={10} />
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Vos outils, reliés par Claude
            </p>
            <OutilsReliesLazy />
            <p className="text-center text-xs text-muted-foreground">
              L&apos;IA lit, prépare, relance ; vous validez ce qui engage votre entreprise.
            </p>
          </div>
        }
        asideRelief
        asideMobile
      />

      {/* Outil gratuit de la sous-page, juste après le hero (fond gris : le hero est clair) : résultat immédiat, rapport complet par email. */}
      <SectionOutil badge="Diagnostic gratuit" titre={DIAGNOSTIC.titre} accroche={DIAGNOSTIC.accroche} obtenez={DIAGNOSTIC.obtenez} fond="gris">
        <DiagnosticInteractif diagnostic={DIAGNOSTIC} page={URL_INTEGRATION_IA} />
      </SectionOutil>

      <Reveal y={16}>
        <PainPoints
          id="constat"
          surtitre="Le constat"
          titre="Vous avez les outils. Il manque ce qui les relie."
          intro="Boîte mail, agenda, site, logiciel de devis : tout est là. Ce qui manque, c'est quelqu'un pour faire circuler l'information entre eux, le soir et le week-end compris."
          fond="blanc"
          points={[
            {
              icon: Clock,
              titre: "Des heures perdues en tâches répétitives",
              texte:
                "Répondre aux mêmes questions, ressaisir les mêmes données, relancer les mêmes devis : ce temps est pris sur le métier, souvent le soir.",
            },
            {
              icon: Unplug,
              titre: "Des outils qui ne se parlent pas",
              texte:
                "La demande arrive par email, le devis se fait dans un logiciel, le rendez-vous dans un agenda, le suivi dans un tableur. Chaque passage se fait à la main.",
            },
            {
              icon: MoonStar,
              titre: "Des demandes qui attendent",
              texte:
                "Un devis reçu la nuit, un avis Google sans réponse, un message Instagram lu trop tard : le client, lui, ne voit que le silence.",
            },
          ]}
        />
      </Reveal>

      <PoleSection
        id="cas-pratiques"
        fond="gris"
        surtitre="Pour qui, pour quoi"
        titre="Que peut faire un agent IA pour votre entreprise, concrètement ?"
        intro={[
          "Pour les structures de 3 à 30 personnes où le dirigeant fait encore l'administratif le soir, sans service informatique : commerces, restaurants, cabinets, artisans avec salariés, boutiques en ligne, associations.",
          "Neuf tâches que nous automatisons le plus souvent, classées par métier, et ce qu'elles vous coûtent aujourd'hui, en ordre de grandeur : le diagnostic mesure les vôtres.",
        ]}
      >
        <CasPratiques />
        <p className="mx-auto mt-10 max-w-3xl text-center text-muted-foreground">
          Pas encore de site pour recevoir ces demandes ? Demandez{" "}
          <Link href="/demande-maquette" className="font-medium text-primary-texte underline-offset-4 hover:underline">
            une maquette gratuite en 48 h
          </Link>
          . Notre agence d&apos;automatisation IA est à Rueil-Malmaison (92) ; nous intervenons à Paris et en Île-de-France (voir notre{" "}
          <Link href={pole.pageVille.href} className="font-medium text-primary-texte underline-offset-4 hover:underline">
            agence web à Paris
          </Link>
          ), et à distance partout en France.
        </p>
      </PoleSection>

      <Reveal y={16}>
        <CtaIntermediaire
          titre="Vous ne voyez pas votre cas ?"
          texte="Chaque entreprise a ses propres tâches répétitives. Décrivez-nous la vôtre : en 30 minutes, nous vous disons si une IA peut la reprendre."
          bouton={{ href: ANCRE_FORMULAIRE, label: "Décrire ma situation" }}
          alternativeLabel="ou appelez-nous au"
        />
      </Reveal>

      <SectionSombre
        id="methode"
        surtitre="Notre méthode"
        titre="Comment automatisons-nous sans casser ce qui marche déjà ?"
        intro={[
          "Pas de projet monstre : nous démarrons par un premier flux, nous vérifions son travail, puis nous ajoutons le suivant.",
          "Comme pour un nouveau collaborateur : nous lui expliquons le métier, nous contrôlons au début, puis nous lui laissons de l'autonomie.",
        ]}
      >
        <Reveal>
          <Timeline
            sombre
            etapes={[
              {
                repere: "Jour 1",
                icon: Search,
                titre: "Diagnostic d'une journée",
                texte:
                  "Sur place ou à distance, nous observons comment le travail se fait vraiment, nous listons les tâches répétitives de chaque poste et nous chiffrons leur temps. Sous 24 h, vous recevez le plan écrit et un prix fixe pour l'intégration.",
              },
              {
                repere: "Les semaines suivantes",
                icon: Plug,
                titre: "Un premier flux en service",
                texte:
                  "Nous branchons Claude sur vos outils réels pour la tâche la plus rentable, nous le testons sur vos anciens devis ou anciens avis, puis nous le mettons en service avec une validation humaine là où une erreur coûterait cher.",
              },
              {
                repere: "Chaque mois",
                icon: RefreshCw,
                titre: "Prise en main, puis suivi optionnel",
                texte:
                  "Votre équipe apprend à valider, corriger et arrêter l'IA. Si vous le souhaitez, nous relisons les journaux chaque mois, nous ajustons les consignes et nous ajoutons la tâche suivante.",
              },
            ]}
          />
        </Reveal>
      </SectionSombre>

      <PoleSection
        id="livrables"
        fond="gris"
        surtitre="Livrables"
        titre="Ce que vous obtenez à la fin de l'intégration"
        intro="Des outils en service dans votre entreprise, et de quoi les contrôler."
      >
        <Reveal>
          <PoleLivrables
            livrables={[
              { icon: ClipboardList, titre: "Le plan écrit du diagnostic", texte: "Tâches, temps chiffré, ordre conseillé, points de vigilance." },
              { icon: Plug, titre: "Des automatisations en production", texte: "Reliées à vos outils actuels, sans changer de logiciel." },
              { icon: UserCheck, titre: "Des points de validation humaine", texte: "Vous gardez la main sur les devis et les réponses sensibles." },
              { icon: Table2, titre: "Un journal de ce que l'IA a traité", texte: "Chaque réponse, relance ou document, consultable à tout moment." },
              { icon: BookOpen, titre: "Une documentation en français", texte: "Comment cela fonctionne, comment corriger, comment tout arrêter." },
              { icon: GraduationCap, titre: "Une prise en main de l'équipe", texte: "Une séance courte, puis un interlocuteur unique pour les questions." },
            ]}
          />
        </Reveal>
      </PoleSection>

      <Reveal y={16}>
        <Engagements
          id="engagements"
          surtitre="Nos engagements"
          titre="Pourquoi l'intégration se passe sans friction ?"
          intro="Quatre règles, écrites dans chaque devis."
          items={[
            {
              icon: Plug,
              titre: "Vos outils conservés",
              texte: "Nous branchons Claude sur votre boîte mail, votre agenda, votre site et votre logiciel actuels. Personne ne change de logiciel.",
            },
            {
              icon: ShieldCheck,
              titre: "Vos données restent chez vous",
              texte: "Vos outils restent hébergés là où ils sont ; quand nous hébergeons une brique, c'est en Europe. Le plan écrit ce qui sort de l'entreprise et ce qui n'en sort pas.",
            },
            {
              icon: GraduationCap,
              titre: "Formation incluse",
              texte: "Une séance de prise en main pour votre équipe et une documentation en français : valider, corriger, arrêter.",
            },
            {
              icon: FileCheck,
              titre: "Devis clair par phase",
              texte: "Un prix fixe écrit avant chaque phase : diagnostic, intégration, suivi. Pas d'abonnement caché, le suivi mensuel reste optionnel.",
            },
          ]}
        />
      </Reveal>

      {/* Preuve honnête : notre propre entreprise, sans label ni chiffre de résultat client. */}
      <section id="preuve" className="bg-muted/30 py-16 sm:py-20">
        <Conteneur>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <Surtitre>Ce que vous pouvez vérifier</Surtitre>
              <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">Notre propre agence tourne avec Claude</h2>
              <div className="mt-4 space-y-3 text-lg">
                <Paragraphes
                  texte={[
                    "ConvertiLab, c'est une seule personne et 150+ clients accompagnés. C'est possible parce que le travail répétitif de l'agence est aujourd'hui automatisé avec Claude.",
                    "Nous ne vous montrons pas un cas client inventé : nous vous montrons ce qui tourne chez nous, tous les jours, et que vous pouvez tester.",
                  ]}
                />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Construit avec Claude (Anthropic), sans label ni certification : notre référence, c&apos;est notre usage quotidien.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-4 sm:grid-cols-2">
                {PREUVES.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <li key={p.titre} className="h-full">
                      <Reveal
                        delay={i * 0.08}
                        className={
                          p.miseEnAvant
                            ? "relative flex h-full flex-col rounded-2xl border border-primary/30 bg-card p-6 shadow-[0_16px_40px_-24px_rgba(124,58,237,0.35)]"
                            : "flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-16px_rgba(15,23,42,0.18)] motion-reduce:transition-none"
                        }
                      >
                        {p.miseEnAvant && <BorderBeam size={70} duration={9} />}
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary" aria-hidden="true">
                          <Icon className="h-5 w-5" strokeWidth={1.75} />
                        </span>
                        <h3 className="mt-4 font-semibold text-foreground">{p.titre}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.texte}</p>
                        {p.lien && (
                          <a
                            href={p.lien.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto inline-flex min-h-11 items-center gap-1.5 pt-3 text-sm font-semibold text-primary-texte underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            {p.lien.label}
                            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                            <span className="sr-only"> (ouvre dans un nouvel onglet)</span>
                          </a>
                        )}
                      </Reveal>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Conteneur>
      </section>

      <Reveal y={16}>
        <CtaIntermediaire
          titre="Vous voulez savoir ce que cela donnerait chez vous ?"
          texte="Un échange de 30 minutes suffit pour savoir si un diagnostic a du sens dans votre cas. Sans engagement."
          bouton={{ href: ANCRE_FORMULAIRE, label: "Demander un diagnostic IA" }}
          alternativeLabel="ou appelez-nous au"
        />
      </Reveal>

      {/* Prix : trois formules sans montant, chacune à prix fixe écrit avant de commencer. */}
      <section id="prix" className="bg-background py-16 sm:py-20">
        <Conteneur>
          <div className="mx-auto max-w-3xl text-center">
            <Surtitre>Prix et engagement</Surtitre>
            <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">Combien coûte une intégration IA pour une PME ?</h2>
            <div className="mt-4 space-y-3 text-lg">
              <Paragraphes texte="Aucun tarif public, parce qu'aucune entreprise n'a les mêmes outils ni les mêmes tâches. Chaque étape a en revanche un prix fixe, écrit avant de commencer, et vous pouvez vous arrêter après le diagnostic." />
            </div>
          </div>

          <ul className="mt-10 grid gap-6 lg:grid-cols-3">
            {FORMULES.map((f, i) => (
              <li key={f.titre} className="h-full">
                <Reveal delay={i * 0.08} className="h-full">
                  <CardContainer containerClassName="h-full" className="h-full w-full" intensite={50}>
                    <CardBody
                      className={
                        f.miseEnAvant
                          ? "flex h-full w-full flex-col rounded-2xl border border-primary bg-card p-6 shadow-[0_24px_48px_-24px_rgba(124,58,237,0.35)] sm:p-7"
                          : "flex h-full w-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-7"
                      }
                    >
                      <CardItem translateZ={20} as="p" className="text-xs font-semibold uppercase tracking-wider text-purple-700">
                        {f.etiquette}
                      </CardItem>
                      <CardItem translateZ={30} as="h3" className="mt-2 text-xl font-semibold text-foreground">
                        {f.titre}
                      </CardItem>
                      <CardItem translateZ={15} as="p" className="mt-2 text-muted-foreground">
                        {f.description}
                      </CardItem>
                      <CardItem translateZ={25} as="p" className="mt-5">
                        <span className="text-2xl font-bold text-foreground">{f.prix}</span>
                        <span className="block text-sm text-muted-foreground">{f.prixDetail}</span>
                      </CardItem>
                      <CardItem translateZ={15} as="ul" className="mt-5 w-full space-y-2">
                        {f.points.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-sm text-foreground">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </CardItem>
                      {/* Chaque carte se termine par une action : bouton dégradé pour le diagnostic, lien secondaire pour les deux autres. */}
                      <CardItem translateZ={30} className="mt-auto w-full pt-6">
                        {f.miseEnAvant ? (
                          <BoutonLien href={ANCRE_FORMULAIRE} label="Demander le diagnostic" variante="primaire" className="w-full" />
                        ) : (
                          <BoutonLien href={ANCRE_FORMULAIRE} label="Décrire ma situation" variante="secondaire" className="w-full" />
                        )}
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </Reveal>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <h3 className="font-semibold text-foreground">Ce que nous nous engageons à faire</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {ENGAGEMENTS_PRIX.map((e) => (
                <li key={e} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-center text-sm text-muted-foreground">
            Les coûts d&apos;usage de Claude sont facturés par Anthropic selon le volume traité ; nous les estimons dans le devis.
          </p>
        </Conteneur>
      </section>

      <PoleFAQ
        id="faq"
        surtitre="Réponses franches"
        titre="Vos questions sur l'automatisation IA en entreprise"
        intro="Sécurité, données, RGPD, prix, erreurs de l'IA, salariés : nous répondons franchement."
        items={FAQ_INTEGRATION_IA}
        lien={{ href: "/contact", label: "Poser une autre question à l'agence" }}
      />

      {/* Rattachement au pôle parent : même motif que la section « autres formules » d'application-web. */}
      <PoleSection
        id="pole-crm"
        surtitre="Le pôle CRM et relances automatiques"
        titre="Pourquoi l'intégration IA fait partie de notre pôle CRM et relances automatiques ?"
        intro={[
          "L'IA reprend le travail répétitif ; le CRM garde la trace de chaque demande et la relance tant qu'elle reste sans réponse. Les deux se complètent : nous mettons en place votre CRM (HubSpot, Salesforce, Pipedrive ou l'outil que vous avez déjà), nous y relions les formulaires de votre site et vos campagnes, et nous automatisons les relances par email et les rappels de rendez-vous.",
          "C'est ce que nous faisons pour notre propre agence : chaque demande restée sans réponse reçoit une séquence d'emails sur trente jours, qui s'arrête dès que la personne répond.",
        ]}
      >
        <Reveal className="text-center">
          <LienDiscret href={pole.href} label={pole.ancre} />
        </Reveal>
      </PoleSection>

      <PoleAutresPoles
        slug="crm"
        surtitre="Nos autres pôles"
        titre="L'IA rend du temps, nos pôles site, publicité et SEO apportent des clients"
        intro="Un site qui reçoit les demandes, de la publicité qui les amène, un référencement sur Google et dans les IA."
      />

      <FormulaireFinal
        pole="ia"
        page={URL_INTEGRATION_IA}
        surtitre="Parlons de votre cas"
        titre="Dites-nous ce qui vous intéresse, nous vous répondons sous 24 h"
        intro="Deux étapes, deux minutes. Nous vous disons si un diagnostic a du sens chez vous, et à quel prix fixe."
        question={{
          libelle: "Ce qui vous intéresse :",
          aide: "Aucune coordonnée demandée à cette étape.",
          options: [
            { value: "devis", label: "Demandes et devis", desc: "Réponses la nuit, relances", icon: <FileText /> },
            { value: "avis", label: "Avis Google et messages", desc: "Instagram, Facebook, site", icon: <Star /> },
            { value: "redaction", label: "Rédaction et emails", desc: "Fiches, articles, tri du matin", icon: <PenLine /> },
            { value: "documents", label: "Documents et comptes rendus", desc: "Factures, réunions, chantiers", icon: <ScanText /> },
            { value: "inconnu", label: "Je ne sais pas encore", desc: "Le diagnostic est fait pour ça", icon: <HelpCircle /> },
          ],
        }}
        titreEtape2="Où vous répondre ?"
        boutonLabel="Recevoir ma réponse sous 24 h"
        calendlyLabel="ou réservez 30 min avec le fondateur"
        confirmation={{
          titre: "Merci, c'est bien reçu.",
          texte: "Nous vous répondons sous 24 h, par email ou par téléphone, pour vous dire si un diagnostic a du sens dans votre cas.",
        }}
      />

      <PoleCTA
        titre="Une journée pour savoir ce que l'IA peut faire chez vous"
        texte="Réservez 30 minutes avec le fondateur : nous vous disons si un diagnostic a du sens dans votre cas."
        calendlyLabel={LABEL_CALENDLY}
        contactLabel="Demander un diagnostic IA"
        afficherTelephone
      />

      <StickyCtaBar label="Réserver un diagnostic" href={ANCRE_FORMULAIRE} mentions={MENTIONS} />
    </div>
  );
}
