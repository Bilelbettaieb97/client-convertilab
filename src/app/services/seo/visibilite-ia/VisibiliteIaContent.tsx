import Link from "next/link";
import {
  Activity,
  BookOpenCheck,
  Bot,
  Braces,
  Building2,
  CircleHelp,
  ClipboardList,
  EyeOff,
  FileCode2,
  FileQuestion,
  FileText,
  Footprints,
  ListChecks,
  MessageCircleQuestion,
  PenLine,
  Radar,
  ScanSearch,
  Search,
  ShieldOff,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import type { FaqItem } from "@/lib/faq-schema";
import { CHIFFRES_COMMUNS, getPole, LABEL_CALENDLY, SURTITRE_ZONE } from "@/data/poles";
import { Reveal } from "@/components/motion";
import {
  CtaIntermediaire,
  FilAriane,
  FormulaireFinal,
  SectionOutil,
  LienDiscret,
  PainPoints,
  PoleAutresPoles,
  PoleCTA,
  PoleFAQ,
  PoleHero,
  PoleLivrables,
  PolePreuve,
  PolePrix,
  PoleSection,
  PourQui,
  SectionSombre,
  StickyCtaBar,
  Timeline,
  type FilArianeElement,
} from "@/components/pole";
import CarteSeoCheck from "../CarteSeoCheck";
import SeoOrbite from "../SeoOrbite";
import MockReponseIa from "../maquettes/MockReponseIa";

/**
 * Sous-page « Visibilité IA » du pôle SEO : être cité par ChatGPT, Perplexity
 * et Google AI Overviews (GEO, référencement IA). Composant serveur : le H1,
 * tout le texte et la FAQ sont dans le HTML. Aucune promesse de position dans
 * une IA : nous nous engageons sur le travail et sur ce que nous mesurons.
 */

const pole = getPole("seo");
const OUTIL = pole.outils[0];
const [referencement, audit] = pole.sousPages;

export const URL_VISIBILITE_IA = "/services/seo/visibilite-ia";

/** Ancre du formulaire final : cible des CTA de la page et de la barre collante. */
const ANCRE_FORMULAIRE = "#formulaire";

export const FIL_ARIANE_VISIBILITE_IA: FilArianeElement[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: pole.nomCourt, href: pole.href },
  { label: "Visibilité IA" },
];

/* ------------------------------------------------------------------ */
/* FAQ : la même liste alimente le JSON-LD FAQPage dans page.tsx       */
/* ------------------------------------------------------------------ */

export const FAQ_VISIBILITE_IA: FaqItem[] = [
  {
    q: "Qu'est-ce que la visibilité IA, ou GEO ?",
    a: "Le GEO (Generative Engine Optimization), aussi appelé référencement IA ou SEO ChatGPT, consiste à rendre un site lisible et citable par les assistants qui génèrent des réponses : ChatGPT, Perplexity, Claude, et les AI Overviews de Google. Ces outils s'appuient sur des pages web pour répondre et citent leurs sources. Le travail vise à faire de votre site l'une de ces sources sur les questions que posent vos clients.",
  },
  {
    q: "Pouvez-vous garantir que mon entreprise apparaîtra dans ChatGPT ou dans les AI Overviews ?",
    a: "Non, et personne ne le peut. Chaque assistant choisit ses sources selon ses propres règles, qui changent souvent, et deux personnes qui posent la même question peuvent obtenir des réponses différentes. Nous nous engageons sur le travail réalisé, sur la lisibilité de votre site par ces outils et sur un relevé honnête de ce que nous observons, jamais sur une position.",
  },
  {
    q: "Combien coûte la visibilité IA ?",
    a: "Rien de plus que le référencement naturel : elle est incluse dans notre forfait SEO, à partir de 500 € par mois, 6 mois minimum, et dans l'audit SEO complet. Une mission ponctuelle (données structurées, llms.txt, pages de questions-réponses) se chiffre sur devis après un échange de 30 minutes.",
  },
  {
    q: "Quelle différence entre le SEO classique et la visibilité dans les IA ?",
    a: "Le socle est le même : un site rapide, bien indexé, avec des pages qui répondent aux questions de vos clients. Les IA ajoutent des exigences : des réponses directes et courtes qu'elles peuvent reprendre, des faits précis (prix, délais, zone), des données structurées propres, des fiches cohérentes partout et des robots d'IA autorisés. Une page bien référencée sur Google n'est pas forcément citable par une IA, d'où un travail spécifique sur chaque page.",
  },
  {
    q: "Faut-il autoriser les robots d'IA sur mon site ?",
    a: "Si vous voulez être cité, oui. GPTBot (OpenAI), ClaudeBot (Anthropic) et PerplexityBot lisent votre site pour alimenter les réponses. Beaucoup de sites les bloquent sans le savoir, par un réglage par défaut ou une extension. Les AI Overviews de Google reposent sur l'index Google classique : y être bien indexé reste la première condition. Notre outil gratuit vérifie ces accès en 60 secondes.",
  },
  {
    q: "À quoi sert un fichier llms.txt ?",
    a: "C'est un fichier texte placé à la racine du site qui résume votre activité, vos services, vos prix et vos pages importantes dans un format simple à lire pour un modèle de langage. C'est une convention récente, gratuite à mettre en place ; son usage par chaque assistant n'est pas garanti, mais il ne coûte rien et clarifie ce que vous faites. Nous en avons un sur notre propre site.",
  },
  {
    q: "Comment mesurez-vous les résultats ?",
    a: "Chaque mois, nous posons aux assistants une liste fixe de questions que vos clients pourraient poser et nous notons si votre site est cité, quelles pages, et avec quelle information. Nous suivons aussi les passages des robots d'IA dans les journaux du serveur et vos impressions dans la Search Console. Ce relevé décrit ce que nous observons : il ne prédit pas la réponse qu'obtiendra un prospect donné.",
  },
  {
    q: "Combien de temps avant d'être cité par une IA ?",
    a: "Nous ne pouvons pas donner de délai. Les assistants qui s'appuient sur une recherche en direct (Perplexity, ChatGPT avec recherche, AI Overviews) peuvent reprendre une page dès qu'elle est indexée et jugée pertinente ; les modèles entraînés sur un instantané du web mettent des mois. Le travail suit le rythme du forfait SEO : premiers effets mesurables sur Google en 3 à 6 mois, relevé des citations chaque mois.",
  },
];

/* ------------------------------------------------------------------ */
/* Données de la page                                                  */
/* ------------------------------------------------------------------ */

const REASSURANCE_HERO = [
  "Inclus dans le forfait SEO, sans supplément",
  "Aucune promesse de position dans une IA",
  "Robots d'IA testés gratuitement en 60 secondes",
];

const ASSISTANTS = [
  {
    icon: MessageCircleQuestion,
    nom: "ChatGPT",
    texte:
      "Avec la recherche web, lit des pages en direct, rédige une réponse et affiche les sites utilisés.",
  },
  {
    icon: Sparkles,
    nom: "Perplexity",
    texte:
      "Cite toujours ses sources, numérotées, et privilégie les pages qui répondent directement.",
  },
  {
    icon: Search,
    nom: "Google AI Overviews",
    texte:
      "Un résumé généré en haut de certains résultats Google, avec les liens des pages utilisées.",
  },
];

const CONSTAT = [
  {
    icon: EyeOff,
    titre: "Vos concurrents sont cités, pas vous",
    texte:
      "Un prospect demande à ChatGPT « quel artisan près de chez moi ? ». Trois noms sortent. Jamais le vôtre, sans que vous sachiez pourquoi.",
  },
  {
    icon: ShieldOff,
    titre: "Les robots d'IA sont bloqués sans que vous le sachiez",
    texte:
      "Un réglage de l'hébergeur ou un robots.txt copié d'ailleurs ferme la porte à GPTBot, ClaudeBot ou PerplexityBot. Votre site n'existe pas pour eux.",
  },
  {
    icon: FileQuestion,
    titre: "Un contenu que personne ne peut reprendre",
    texte:
      "« Une équipe passionnée à votre écoute » ne répond à aucune question. Sans prix, délai ni zone, une IA n'a rien à citer.",
  },
];

const SIGNAUX = [
  {
    icon: MessageCircleQuestion,
    titre: "Une réponse directe à une vraie question",
    texte: "Deux ou trois phrases de réponse en tête de page : c'est ce passage que l'IA reprend.",
  },
  {
    icon: BookOpenCheck,
    titre: "Des faits précis et datés",
    texte: "Prix, délais, zone, horaires : une information vérifiable plutôt qu'un discours.",
  },
  {
    icon: Building2,
    titre: "Une entreprise clairement identifiée",
    texte: "Nom, adresse, activité, avis : les mêmes informations sur le site, la fiche Google et les annuaires.",
  },
  {
    icon: Braces,
    titre: "Des données structurées propres",
    texte: "Le balisage schema.org (Organisation, Service, FAQ) dit aux machines qui vous êtes.",
  },
  {
    icon: FileCode2,
    titre: "Des robots d'IA autorisés et un fichier llms.txt",
    texte: "GPTBot, ClaudeBot et PerplexityBot laissés entrer, et un résumé de votre activité à la racine du site.",
  },
  {
    icon: ListChecks,
    titre: "Des pages de questions-réponses",
    texte: "Une FAQ par service, dans le HTML et balisée en FAQPage : le format le plus simple à citer.",
  },
];

const LIVRABLES = [
  {
    icon: ScanSearch,
    titre: "Un état des lieux, puis le socle technique",
    texte: "Robots d'IA, données structurées, llms.txt, indexation : corrigés en premier.",
  },
  {
    icon: Target,
    titre: "La liste des questions à couvrir",
    texte: "Celles que vos clients posent à une IA, et la page qui doit y répondre.",
  },
  {
    icon: PenLine,
    titre: "Des pages réécrites pour être citables",
    texte: "Réponse directe en tête, faits précis, FAQ par service, fiches mises en cohérence. Vous validez tout.",
  },
  {
    icon: Activity,
    titre: "Un relevé mensuel des citations observées",
    texte: "Question par question, assistant par assistant : cité ou non, quelle page.",
  },
];

const ETAPES = [
  {
    repere: "Semaine 1",
    titre: "Audit de lisibilité IA",
    icon: ClipboardList,
    texte: "Robots d'IA, données structurées, indexation, contenu, premières questions aux assistants.",
  },
  {
    repere: "Semaine 2",
    titre: "Questions clés et plan écrit",
    icon: Target,
    texte: "Les questions de vos clients, la page qui répond à chacune, le devis détaillé.",
  },
  {
    repere: "Mois 1",
    titre: "Socle technique",
    icon: Wrench,
    texte: "Robots.txt corrigé, llms.txt publié, données structurées posées, vitesse vérifiée.",
  },
  {
    repere: "En continu",
    titre: "Contenus citables et fiches",
    icon: FileText,
    texte: "Pages réécrites, FAQ par service, fiches mises en cohérence, contenus validés par vous.",
  },
  {
    repere: "Chaque mois",
    titre: "Relevé et ajustements",
    icon: Activity,
    texte: "Questions reposées aux assistants, passages des robots, Search Console. Ce qui n'est pas repris est retravaillé.",
  },
];

const MESURES = [
  {
    icon: MessageCircleQuestion,
    titre: "Les citations observées",
    texte: "Une liste fixe de questions posée chaque mois à ChatGPT, Perplexity et Google : cité ou non, quelle page.",
  },
  {
    icon: Footprints,
    titre: "Les passages des robots d'IA",
    texte: "GPTBot, ClaudeBot, PerplexityBot dans les journaux du serveur : la preuve qu'ils lisent votre site.",
  },
  {
    icon: Radar,
    titre: "Vos impressions Google",
    texte: "Positions, impressions et clics dans la Search Console : le socle des AI Overviews.",
  },
];

const ENGAGEMENTS_PRIX = [
  "Un devis écrit, avec le détail des actions, avant tout engagement.",
  "Un relevé mensuel des citations observées, contenus validés par vous.",
  "Le llms.txt, les données structurées et l'audit restent à vous si vous arrêtez.",
];

const OPTIONS_SITUATION = [
  {
    value: "lisibilite",
    label: "Savoir si les IA peuvent lire mon site",
    icon: <ScanSearch />,
    desc: "Robots, données structurées, indexation",
  },
  {
    value: "citations",
    label: "Être cité sur les questions de mes clients",
    icon: <Bot />,
    desc: "Contenu citable, FAQ, fiches",
  },
  {
    value: "seo-existant",
    label: "Ajouter l'IA à mon SEO actuel",
    icon: <Search />,
    desc: "Un référencement déjà en cours",
  },
  {
    value: "je-ne-sais-pas",
    label: "Je ne sais pas encore",
    icon: <CircleHelp />,
    desc: "Nous faisons le point ensemble",
  },
];

/** Pages sœurs du pôle SEO : maillage compact, les ancres viennent de poles.ts. */
const PAGES_SOEURS = [
  { href: pole.href, label: pole.ancre },
  { href: referencement.href, label: referencement.label },
  { href: audit.href, label: audit.label },
];

const lienClasse =
  "font-semibold text-primary-texte underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm";

const carteClasse =
  "rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_18px_36px_-18px_rgba(124,58,237,0.28)] motion-reduce:transition-none";

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function VisibiliteIaContent() {
  return (
    <div className="pt-16">
      <FilAriane elements={FIL_ARIANE_VISIBILITE_IA} />

      {/* ---------------------------------------------------------- Hero */}
      {/* Hero commun aux sous-pages : réponse d'IA d'exemple qui cite une entreprise locale et ses sources, à droite à partir de lg, sous la colonne de texte en dessous. */}
      <PoleHero
        surtitre={SURTITRE_ZONE}
        titre="Visibilité IA : être cité par ChatGPT, Perplexity et Google AI Overviews"
        motsCles={["Visibilité IA", "ChatGPT", "Google AI Overviews"]}
        texte={[
          "De plus en plus de vos clients posent leur question à un assistant plutôt qu'à Google. Ces outils répondent en citant quelques sites. Nous rendons le vôtre lisible et citable par eux : c'est le GEO, ou référencement IA, inclus dans notre méthode SEO.",
        ]}
        reassurance={REASSURANCE_HERO}
        boutonPrimaire={{ href: ANCRE_FORMULAIRE, label: "Faire le point sur ma visibilité IA" }}
        boutonSecondaire={{ href: SITE.calendly, label: LABEL_CALENDLY, external: true }}
        mention={
          <>
            Vos robots d&apos;IA sont-ils autorisés ?{" "}
            <Link href={OUTIL.href} className={lienClasse}>
              Testez-les gratuitement en 60 secondes
            </Link>
            , rapport PDF par email.
          </>
        }
        chiffres={[...CHIFFRES_COMMUNS, { valeur: "60", libelle: "secondes pour tester vos robots d'IA" }]}
        aside={<MockReponseIa />}
        asideRelief
        asideMobile
      />

      {/* ------------------------------------------------------ Test gratuit */}
      <SectionOutil
        badge="Test gratuit"
        titre="Votre site est-il prêt à être cité par les IA ?"
        accroche="Entrez l'adresse de votre site : l'outil l'analyse en une minute et le rapport contient un score de visibilité IA, dit GEO. Il vérifie si les robots des IA sont autorisés à lire vos pages, si vos données structurées décrivent votre entreprise, et si vos pages contiennent des questions-réponses qu'une IA peut reprendre."
        obtenez={[
          "Votre score de visibilité IA (GEO) : robots autorisés, données structurées, questions-réponses",
          "Vos scores SEO classiques à côté : technique, balises, contenu, mobile, performance",
          "Le rapport PDF par email, avec les 10 questions à poser aux IA et le modèle de page qui se fait citer",
        ]}
        disposition="large"
        fond="gris"
      >
        <CarteSeoCheck />
      </SectionOutil>

      {/* -------------------------------------- Qu'est-ce qu'une réponse générée */}
      <PoleSection
        id="reponses-generees"
        surtitre="De quoi parle-t-on"
        titre="Qu'est-ce qu'une réponse générée par une IA, et d'où viennent ses sources ?"
        intro="Ces outils ne classent pas dix liens : ils rédigent une réponse à partir de quelques pages et les affichent en source. Être l'une d'elles, c'est tout l'enjeu. Claude, Copilot ou Gemini fonctionnent de même."
      >
        <ul className="grid gap-4 md:grid-cols-3">
          {ASSISTANTS.map(({ icon: Icon, nom, texte }, i) => (
            <li key={nom} className="h-full">
              <Reveal delay={i * 0.08} className="h-full">
                <article className={`${carteClasse} flex h-full flex-col p-6`}>
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{nom}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{texte}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </PoleSection>

      {/* --------------------------------------------------------- Le constat */}
      <Reveal y={16}>
        <PainPoints
          id="constat"
          surtitre="Le constat"
          titre="Pourquoi votre site n'est-il jamais cité par les IA ?"
          intro="Trois causes reviennent dans presque tous les sites que nous auditons, invisibles depuis votre écran."
          points={CONSTAT}
        />
      </Reveal>

      {/* -------------------------------------- Pourquoi les IA citent une page */}
      <PoleSection
        id="signaux"
        surtitre="Ce que les IA regardent"
        titre="Pourquoi les IA citent-elles certaines pages et pas les autres ?"
        intro="Six signaux à votre portée, appliqués à chaque page que nous produisons, y compris celle-ci."
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SIGNAUX.map(({ icon: Icon, titre, texte }, i) => (
            <li key={titre} className="h-full">
              <Reveal delay={i * 0.06} className="h-full">
                <article className={`${carteClasse} flex h-full gap-4 p-5`}>
                  <span
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{titre}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{texte}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </PoleSection>

      {/* ------------------------------------------------- Ce que nous faisons */}
      <PoleSection
        id="livrables"
        fond="gris"
        surtitre="Ce que nous faisons"
        titre="Que faisons-nous concrètement pour votre référencement IA ?"
        intro="Quatre livrables, tous inclus dans le forfait SEO, sans supplément."
      >
        <Reveal y={16}>
          <PoleLivrables livrables={LIVRABLES} colonnes={2} />
        </Reveal>
        <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Le{" "}
          <Link href={`${pole.href}#seo-local`} className={lienClasse}>
            SEO local, fiche Google et avis clients
          </Link>
          , fait partie du même travail : c&apos;est le signal le plus lisible pour une IA qui cherche « près de moi ».
        </p>
      </PoleSection>

      {/* ------------------------------------------------- Ce que nous mesurons */}
      <SectionSombre
        id="mesure"
        surtitre="Ce que nous mesurons"
        titre="Comment savoir si les IA citent votre site, sans promesse ni extrapolation ?"
        intro="Les outils de mesure sont jeunes. Trois relevés, que vous pouvez vérifier vous-même."
      >
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SeoOrbite />
            <p className="mt-2 text-center text-xs text-slate-400">
              Les outils qui citent des sources, et trois signaux que nous travaillons.
            </p>
          </div>
          <ul className="space-y-4 lg:col-span-7">
            {MESURES.map(({ icon: Icon, titre, texte }, i) => (
              <li key={titre}>
                <Reveal delay={i * 0.08}>
                  <article className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors duration-300 hover:border-purple-300/40 hover:bg-white/[0.07] motion-reduce:transition-none">
                    <span
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-400/15 text-purple-200"
                      aria-hidden="true"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="font-semibold text-white">{titre}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-300">{texte}</p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </SectionSombre>

      {/* ------------------------------------------------------------ Méthode */}
      <PoleSection
        id="methode"
        surtitre="Notre méthode"
        titre="Comment travaillons-nous votre visibilité dans les IA, semaine après semaine ?"
        intro="Le même calendrier que le forfait SEO : une exigence de plus sur chaque page, pas un chantier à part."
      >
        <Reveal>
          <Timeline etapes={ETAPES} />
        </Reveal>
      </PoleSection>

      {/* ------------------------------------------------------------- Preuve */}
      <PolePreuve
        id="preuve"
        surtitre="Ce que vous pouvez vérifier"
        titre="Nous appliquons cette méthode à notre propre site avant de vous la proposer"
        texte={[
          "Le site que vous lisez a un llms.txt, un robots.txt qui autorise GPTBot, ClaudeBot, PerplexityBot et Google-Extended, un fil d'Ariane, une FAQ balisée en FAQPage et des données structurées Organisation et Service.",
          "Nous ne publions aucun résultat chiffré de client dans les IA : les réponses varient d'une personne et d'un jour à l'autre. En visio, nous vous montrons notre relevé pour notre propre site.",
        ]}
        note="Le code source de cette page contient le JSON-LD BreadcrumbList, Service et FAQPage."
        lien={{ href: OUTIL.href, label: "Vérifier les robots d'IA de votre site avec l'outil gratuit" }}
        aside={
          <Reveal y={16}>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.18)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-purple-700">Sur notre site, maintenant</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">Trois fichiers à ouvrir pour vérifier</h3>
              <ul className="mt-5 space-y-4">
                {[
                  {
                    icon: FileText,
                    titre: "llms.txt",
                    texte: "Notre activité résumée pour les modèles de langage.",
                    href: "/llms.txt",
                    label: "Ouvrir notre llms.txt",
                  },
                  {
                    icon: Bot,
                    titre: "robots.txt",
                    texte: "Les robots d'IA explicitement autorisés.",
                    href: "/robots.txt",
                    label: "Ouvrir notre robots.txt",
                  },
                  {
                    icon: Braces,
                    titre: "Le code source de cette page",
                    texte: "Un seul H1, des H2 en questions, la FAQ en FAQPage.",
                    href: "#faq",
                    label: "Voir la FAQ balisée de cette page",
                  },
                ].map(({ icon: Icon, titre, texte, href, label }) => (
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
                      <LienDiscret href={href} label={label} className="mt-1 text-sm font-semibold" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        }
      />

      <CtaIntermediaire
        id="cta-diagnostic"
        titre="Votre site est-il lisible par les IA aujourd'hui ?"
        texte="Si vous ne savez pas répondre, c'est la première chose que nous établissons ensemble, gratuitement."
        bouton={{ href: ANCRE_FORMULAIRE, label: "Faire le point sur ma visibilité IA" }}
        alternativeLabel="ou appelez-nous au"
      />

      {/* ------------------------------------------------------------ Pour qui */}
      <Reveal y={16}>
        <PourQui
          id="pour-qui"
          surtitre="Transparence"
          titre="Nous préférons vous dire non que vous vendre une promesse que personne ne contrôle"
          pour={{
            titre: "C'est fait pour vous si...",
            items: [
              "Vos clients posent des questions précises avant d'acheter : prix, délai, zone.",
              "Vous avez un site indexé par Google et pouvez relire un contenu par mois.",
            ],
          }}
          pasPour={{
            titre: "Ce n'est pas pour vous si...",
            items: [
              "Vous cherchez une garantie d'apparaître dans ChatGPT : elle n'existe pas, chez nous ni ailleurs.",
              "Vous voulez une « part de voix IA » chiffrée : nous ne publions pas de chiffre invérifiable.",
            ],
          }}
          engagement={{
            titre: "Notre engagement, écrit noir sur blanc",
            texte:
              "Nous nous engageons sur le travail listé dans le devis, sur la lisibilité de votre site par les robots d'IA et sur un relevé mensuel des citations. Sur aucune position ni aucun délai : ces décisions appartiennent aux assistants.",
          }}
        />
      </Reveal>

      {/* --------------------------------------------------------------- Prix */}
      <Reveal y={16}>
        <PolePrix
          id="prix"
          surtitre="Prix et engagement"
          titre="Combien coûte la visibilité IA avec ConvertiLab ?"
          intro="Rien de plus que le référencement naturel : la visibilité IA fait partie de la méthode. Trois façons d'y accéder."
          lignes={[
            {
              libelle: "Forfait SEO, visibilité IA incluse",
              valeur: pole.prix,
              detail: "6 mois minimum, puis libre mois par mois. Technique, contenus, fiche Google, visibilité IA, relevé mensuel.",
            },
            {
              libelle: "Audit SEO complet",
              valeur: "Sur devis",
              detail: "Comprend l'audit de lisibilité IA : robots, données structurées, contenus citables, plan priorisé.",
            },
            {
              libelle: "Mission ponctuelle",
              valeur: "Sur devis",
              detail: "Fichier llms.txt, données structurées ou pages de questions-réponses. Prix fixe écrit.",
            },
          ]}
          engagementsTitre="Ce que nous nous engageons à faire"
          engagements={ENGAGEMENTS_PRIX}
          lien={{ href: ANCRE_FORMULAIRE, label: "Recevoir un devis écrit sous 24 h" }}
          note="TVA non applicable, art. 293 B du CGI. Le devis est écrit et validé avant tout démarrage."
        />
      </Reveal>

      {/* ---------------------------------------------------------------- FAQ */}
      <PoleFAQ
        id="faq"
        surtitre="FAQ"
        titre="Vos questions sur la visibilité IA, le GEO et le SEO ChatGPT"
        items={FAQ_VISIBILITE_IA}
        lien={{ href: "/contact", label: "Poser une autre question" }}
      />

      {/* -------------------------------------------------------- Pages sœurs */}
      <PoleSection
        id="pages-soeurs"
        fond="gris"
        surtitre="Le pôle SEO"
        titre="Référencement naturel, SEO local, audit : où se construit le socle ?"
        intro="La visibilité IA repose sur un socle SEO solide. Voici les autres pages du pôle."
      >
        <ul className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
          {PAGES_SOEURS.map(({ href, label }) => (
            <li key={href}>
              <LienDiscret
                href={href}
                label={label}
                className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold no-underline hover:border-primary/40 hover:no-underline"
              />
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Installés à Rueil-Malmaison (92), nous intervenons à Paris, en Île-de-France et comme{" "}
          <Link href={pole.pageVille.href} className={lienClasse}>
            agence web à La Défense et Puteaux
          </Link>
          . À distance, partout en France.
        </p>
      </PoleSection>

      <PoleAutresPoles
        slug="seo"
        surtitre="Nos autres pôles"
        titre="Nos trois autres pôles pour trouver vos clients"
        intro="Un site qui convertit, des campagnes rentables et une IA qui répond à vos clients complètent la visibilité gagnée dans les moteurs et les assistants."
      />

      {/* --------------------------------------------------------- Formulaire */}
      <FormulaireFinal
        id="formulaire"
        pole="seo"
        page={URL_VISIBILITE_IA}
        surtitre="Point gratuit sur votre visibilité IA"
        titre="Faites le point sur votre visibilité dans les IA"
        intro="Nous regardons votre site, posons trois questions aux assistants et vous répondons par écrit sous 24 h, sans engagement."
        question={{
          libelle: "Où en êtes-vous aujourd'hui ?",
          aide: "Aucune coordonnée demandée à cette étape.",
          options: OPTIONS_SITUATION,
        }}
        titreEtape2="Où vous envoyer notre réponse ?"
        boutonLabel="Recevoir ma réponse sous 24 h"
        calendlyLabel="ou réservez 30 min avec le fondateur"
        confirmation={{
          titre: "Demande bien reçue",
          texte: "Nous revenons vers vous sous 24 h avec un premier avis écrit. Si vous préférez en parler de vive voix, réservez directement un créneau.",
        }}
      />

      <PoleCTA
        titre="Une question sur les IA, le GEO ou votre référencement ?"
        texte="Réservez 30 minutes, c'est gratuit et vous parlez au fondateur. Vous repartez avec un avis honnête sur ce que les IA lisent de votre site."
        calendlyLabel={LABEL_CALENDLY}
        contactLabel="Écrire à l'agence"
        afficherTelephone
      />

      <StickyCtaBar
        label="Faire le point sur ma visibilité IA"
        href={ANCRE_FORMULAIRE}
        mentions={["Gratuit", "Sans engagement", "Réponse sous 24 h"]}
        formulaireId="formulaire"
      />
    </div>
  );
}
