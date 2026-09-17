import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ChartLine,
  Check,
  CircleHelp,
  ClipboardList,
  EyeOff,
  FileText,
  MapPin,
  MapPinned,
  MessageCircleQuestion,
  MessageSquareOff,
  MessageSquareQuote,
  Nfc,
  Route,
  Search,
  Smartphone,
  Star,
  Store,
  UserX,
  type LucideIcon,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import type { FaqItem } from "@/lib/faq-schema";
import { CHIFFRES_COMMUNS, getPole, LABEL_CALENDLY, SURTITRE_ZONE } from "@/data/poles";
import {
  BoutonLien,
  CtaIntermediaire,
  FilAriane,
  FormulaireFinal,
  DiagnosticInteractif,
  SectionOutil,
  PainPoints,
  PoleAutresPoles,
  PoleCTA,
  PoleFAQ,
  PoleHero,
  PolePreuve,
  PolePrix,
  PoleSection,
  PourQui,
  SectionSombre,
  StickyCtaBar,
  Timeline,
  type FilArianeElement,
} from "@/components/pole";
import { Conteneur, Surtitre } from "@/components/pole/pole-ui";
import { getDiagnostic } from "@/lib/diagnostics/configs";
import { Reveal } from "@/components/motion";
import MockPackLocal from "../maquettes/MockPackLocal";

/**
 * Sous-page « Référencement local » du pôle SEO : fiche d'établissement Google,
 * avis clients (MerciAvis, notre outil), citations locales et pages villes.
 * Composant serveur : le H1, tout le texte et la FAQ sont dans le HTML rendu.
 * Le hero est le composant partagé PoleHero (src/components/pole) ; les
 * apparitions (Reveal) sont des enfants "use client" importés depuis
 * src/components/motion.
 */

export const pole = getPole("seo");
export const URL_PAGE = "/services/seo/seo-local";

export const FIL: FilArianeElement[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: pole.nomCourt, href: pole.href },
  { label: "Référencement local" },
];

const MERCIAVIS_URL = "https://merciavis.fr";
const OUTIL = pole.outils[0];
const DIAGNOSTIC = getDiagnostic("seo-diagnostic-fiche-google")!;
const [referencement, audit] = pole.sousPages;

/** Ancre du formulaire final : cible des CTA de la page et de la barre collante. */
const ANCRE_FORMULAIRE = "#formulaire";

export const FAQ: FaqItem[] = [
  {
    q: "Qu'est-ce que le référencement local, concrètement ?",
    a: "C'est le travail qui vous fait apparaître quand quelqu'un cherche votre métier avec une ville ou un « près de moi » : « boulangerie Rueil-Malmaison », « ostéopathe près de moi ». Google affiche alors une carte et trois fiches d'établissement avant les résultats classiques. Le référencement local consiste à entrer dans ces trois fiches, puis à y rester, grâce à votre fiche Google, vos avis, vos coordonnées et les pages locales de votre site.",
  },
  {
    q: "Google My Business et fiche d'établissement Google, est-ce la même chose ?",
    a: "Oui. Google My Business est l'ancien nom du service, rebaptisé Google Business Profile, en français « fiche d'établissement Google ». C'est la fiche gratuite qui apparaît sur Google Maps et à droite des résultats de recherche, avec vos horaires, vos photos, vos avis et votre numéro. Sur cette page, nous employons « fiche Google » pour désigner la même chose.",
  },
  {
    q: "Au bout de combien de temps apparaît-on dans les trois fiches ?",
    a: "Cela dépend de votre ville, de votre métier et de la concurrence. Une fiche complète, à votre nom, avec des avis réguliers, progresse souvent en quelques semaines sur les recherches peu disputées. Sur une grande ville et un métier très concurrentiel, comptez plusieurs mois. Personne ne peut promettre une position : nous nous engageons sur le travail réalisé et sur un suivi mensuel des vues, des appels et des itinéraires que Google vous rapporte.",
  },
  {
    q: "Pouvez-vous acheter des avis ou en rédiger à ma place ?",
    a: "Non. Les faux avis sont interdits par Google et par la loi française, et ils exposent votre fiche à une suspension. Ce que nous faisons : rendre la demande d'avis simple pour vos vrais clients, au comptoir ou après une prestation, avec MerciAvis, et vous aider à répondre à chaque avis, bon ou mauvais.",
  },
  {
    q: "Comment fonctionne MerciAvis pour collecter des avis Google ?",
    a: "MerciAvis est notre outil. Une carte NFC ou un QR code est posé au comptoir ou remis en fin de prestation. Votre client approche son téléphone, arrive directement sur le formulaire d'avis de votre fiche Google et écrit son avis en moins d'une minute. Vous suivez les avis reçus dans un tableau de bord. L'outil est proposé aux clients du forfait SEO et fonctionne aussi seul, sans forfait.",
  },
  {
    q: "Ma fiche Google a été créée par un ancien prestataire ou par un salarié : que faire ?",
    a: "Nous commençons par récupérer la propriété de la fiche à votre nom, avec votre compte Google. Si l'ancien propriétaire ne répond pas, Google prévoit une procédure de demande d'accès que nous menons avec vous. Tant que la fiche n'est pas à vous, rien d'autre n'a de sens : c'est la première action de notre méthode.",
  },
  {
    q: "Je n'ai pas de boutique, je me déplace chez mes clients : le SEO local me concerne-t-il ?",
    a: "Oui. Un artisan, un dépanneur ou un prestataire à domicile peut avoir une fiche Google avec une zone desservie plutôt qu'une adresse visible. Nous la configurons pour vos villes d'intervention, et nous créons sur votre site une page par ville importante, pour que Google associe votre activité à chacune d'elles.",
  },
  {
    q: "Combien coûte le référencement local avec ConvertiLab ?",
    a: "Il est inclus dans notre forfait de référencement naturel, à partir de 500 € par mois, 6 mois minimum. Si vous n'avez besoin que de la fiche Google et des avis, nous proposons une mission ponctuelle, sur devis, avec un prix fixe écrit après un échange de 30 minutes. Dans les deux cas, la fiche, les accès et les contenus restent à vous.",
  },
];

/* ------------------------------------------------------------------ */
/* Données de la page                                                  */
/* ------------------------------------------------------------------ */

const REASSURANCE_HERO = [
  "Fiche Google à votre nom, jamais au nôtre",
  "Avis collectés avec MerciAvis, notre outil",
  "Inclus dans le forfait SEO, ou en mission ponctuelle",
];

const CONSTAT = [
  {
    icon: EyeOff,
    titre: "Vous n'êtes pas dans les trois fiches",
    texte:
      "Sur votre métier et votre ville, Google montre trois établissements avec leur note. Vos concurrents y sont, pas vous.",
  },
  {
    icon: UserX,
    titre: "Votre fiche est à moitié vide, ou pas à votre nom",
    texte:
      "Créée par un ancien prestataire, jamais revendiquée, sans photos récentes, horaires faux : Google la classe mal, les clients se méfient.",
  },
  {
    icon: MessageSquareOff,
    titre: "Vos avis datent, ou restent sans réponse",
    texte:
      "Le dernier avis a six mois, un avis négatif est resté sans réponse, et personne ne sollicite les clients satisfaits.",
  },
];

interface Volet {
  icon: LucideIcon;
  numero: string;
  titre: string;
  texte: string;
  points: string[];
}

const VOLETS: Volet[] = [
  {
    icon: Store,
    numero: "01",
    titre: "Votre fiche d'établissement Google",
    texte:
      "Ce que vos clients voient en premier. Dans l'ordre : propriété, exactitude, puis richesse.",
    points: [
      "Propriété récupérée ou vérifiée à votre nom",
      "Catégories, services, zone desservie, horaires, photos réelles",
      "Publications régulières, questions-réponses et messages",
    ],
  },
  {
    icon: MessageSquareQuote,
    numero: "02",
    titre: "Vos avis clients, collectés et suivis",
    texte:
      "La note et le nombre d'avis pèsent dans le classement local et dans la décision d'appeler.",
    points: [
      "Carte NFC ou QR code MerciAvis au comptoir ou remis après la prestation",
      "Réponse à chaque avis, y compris les négatifs, à votre ton",
      "Suivi des avis reçus dans un tableau de bord",
    ],
  },
  {
    icon: MapPinned,
    numero: "03",
    titre: "Vos citations locales",
    texte:
      "Google recoupe votre nom, votre adresse et votre téléphone sur le web : une différence sème le doute.",
    points: [
      "Nom, adresse et téléphone identiques partout",
      "Annuaires utiles à votre métier, doublons supprimés",
      "Données structurées LocalBusiness sur votre site",
    ],
  },
  {
    icon: Route,
    numero: "04",
    titre: "Les pages villes de votre site",
    texte:
      "Une page par ville importante, au contenu propre, pas une copie où seul le nom change.",
    points: [
      "Une page par ville où vous intervenez vraiment",
      "Accès, zone couverte, exemples de prestations sur place",
      "Fiche Google et pages villes reliées entre elles",
    ],
  },
];

const MERCIAVIS_ETAPES = [
  {
    icon: Nfc,
    titre: "Une carte au comptoir",
    texte: "Carte NFC ou QR code, posée à la caisse ou remise à la fin de la prestation.",
  },
  {
    icon: Smartphone,
    titre: "Le client approche son téléphone",
    texte: "Il arrive directement sur le formulaire d'avis de votre fiche Google.",
  },
  {
    icon: Star,
    titre: "L'avis apparaît sur votre fiche",
    texte: "Vous le suivez dans votre tableau de bord, et nous vous aidons à y répondre.",
  },
];

const ETAPES = [
  {
    repere: "Jour 1",
    titre: "Diagnostic de votre fiche et de vos coordonnées",
    icon: ClipboardList,
    texte:
      "Qui possède la fiche, ce qui manque, ce qui est faux, ce que disent vos avis. Résumé écrit sous 24 h.",
  },
  {
    repere: "Semaine 1",
    titre: "Fiche reprise à votre nom et complétée",
    icon: Store,
    texte:
      "Propriété récupérée, catégories, services, horaires, zone desservie, photos : exacte et complète avant tout le reste.",
  },
  {
    repere: "Semaine 2",
    titre: "Collecte d'avis en place et réponses",
    icon: MessageSquareQuote,
    texte:
      "MerciAvis posé au comptoir, réponse aux avis existants, modèles de réponses à votre ton.",
  },
  {
    repere: "Mois 1",
    titre: "Citations locales et pages villes",
    icon: MapPinned,
    texte:
      "Coordonnées harmonisées sur les annuaires, données structurées, première page ville rédigée et reliée à la fiche.",
  },
  {
    repere: "Chaque mois",
    titre: "Suivi et publications",
    icon: ChartLine,
    texte:
      "Vues, appels, itinéraires et clics tirés des statistiques de Google. Nouvelles photos, publications, avis. Ce qui ne bouge pas est corrigé.",
  },
];

const ENGAGEMENTS = [
  "Fiche, accès et contenus restent à votre nom.",
  "Aucun faux avis, aucun avis acheté.",
  "Un diagnostic écrit sous 24 h, avant tout devis.",
  "Un suivi mensuel lisible : vues, appels, itinéraires, avis.",
];

const OPTIONS_SITUATION = [
  {
    value: "pas-de-fiche",
    label: "Je n'ai pas encore de fiche Google",
    icon: <Store className="h-5 w-5" />,
    desc: "Création, vérification, mise en route",
  },
  {
    value: "peu-d-avis",
    label: "J'ai une fiche, mais peu d'avis",
    icon: <MessageSquareQuote className="h-5 w-5" />,
    desc: "Collecte avec MerciAvis, réponses",
  },
  {
    value: "invisible-ville",
    label: "Ma fiche n'apparaît pas dans ma ville",
    icon: <MapPin className="h-5 w-5" />,
    desc: "Diagnostic, fiche, citations, pages villes",
  },
  {
    value: "je-ne-sais-pas",
    label: "Je ne sais pas par où commencer",
    icon: <CircleHelp className="h-5 w-5" />,
    desc: "Nous regardons ensemble",
  },
];

const lienClasse =
  "font-semibold text-primary-texte underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm";

const carteClasse =
  "rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_18px_36px_-18px_rgba(124,58,237,0.28)] motion-reduce:transition-none";

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function SeoLocalContent() {
  return (
    <div className="pt-16">
      <FilAriane elements={FIL} />

      {/* ---------------------------------------------------------- Hero */}
      {/* Hero commun aux pages de service (PoleHero) : H1 et texte rendus côté serveur, pack local d'exemple (les trois fiches de Google, entreprises fictives) en aside. */}
      <PoleHero
        surtitre={SURTITRE_ZONE}
        titre="Référencement local : fiche Google et avis clients pour être trouvé à Rueil-Malmaison, à Paris et dans votre ville"
        motsCles={["Référencement local", "fiche Google", "avis clients"]}
        texte={[
          "Quand un client cherche votre métier avec sa ville, Google affiche trois fiches d'établissement avant tout le reste. Nous travaillons votre fiche Google, vos avis, vos coordonnées et les pages villes de votre site pour que vous y figuriez.",
          "Agence SEO local à Rueil-Malmaison (92), pour les commerces, artisans, cabinets et restaurants de Paris, du 92 et de toute la France.",
        ]}
        reassurance={REASSURANCE_HERO.slice(0, 3)}
        boutonPrimaire={{ href: ANCRE_FORMULAIRE, label: "Diagnostiquer ma fiche Google" }}
        boutonSecondaire={{ href: SITE.calendly, label: LABEL_CALENDLY, external: true }}
        mention={
          <>
            Vous voulez d&apos;abord un état des lieux ?{" "}
            <Link href={OUTIL.href} className={lienClasse}>
              Vérifiez le SEO de votre site en 60 secondes
            </Link>
            , gratuitement.
          </>
        }
        chiffres={[...CHIFFRES_COMMUNS, { valeur: "3", libelle: "fiches affichées par Google avant les autres résultats" }]}
        aside={<MockPackLocal compact />}
        asideRelief
        asideMobile
      />

      {/* ------------------------------------------------------ Diagnostic */}
      <SectionOutil badge="Diagnostic gratuit" titre={DIAGNOSTIC.titre} accroche={DIAGNOSTIC.accroche} obtenez={DIAGNOSTIC.obtenez}>
        <DiagnosticInteractif diagnostic={DIAGNOSTIC} page={URL_PAGE} />
      </SectionOutil>

      {/* ------------------------------------------------------ Le constat */}
      <Reveal>
        <PainPoints
          id="constat"
          surtitre="Le constat"
          titre="Pourquoi vos clients ne vous trouvent-ils pas dans votre ville ?"
          intro="Trois situations que nous rencontrons dans presque tous les diagnostics de fiche Google. Chacune a une correction dans notre méthode."
          points={CONSTAT}
        />
      </Reveal>

      {/* ------------------------------------------------ Les quatre volets */}
      <PoleSection
        id="prestations"
        surtitre="Ce que nous faisons"
        titre="Fiche Google, avis, citations, pages villes : les quatre leviers du SEO local"
        intro="Quatre chantiers qui se renforcent, la fiche d'abord : c'est elle que vos clients voient."
      >
        <ul className="grid gap-6 md:grid-cols-2">
          {VOLETS.map(({ icon: Icon, numero, titre, texte, points }, i) => (
            <li key={titre} className="h-full">
              <Reveal delay={i * 0.08} className="h-full">
                <article className={`${carteClasse} flex h-full flex-col p-6 sm:p-7`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wide text-purple-700">{numero}</span>
                    <span
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15"
                      aria-hidden="true"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">{titre}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{texte}</p>
                  <ul className="mt-4 space-y-2">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Le SEO local fait partie de notre{" "}
          <Link href={referencement.href} className={lienClasse}>
            forfait de référencement naturel
          </Link>
          . Pour un point complet avant de commencer, voyez notre{" "}
          <Link href={audit.href} className={lienClasse}>
            audit SEO complet
          </Link>
          .
        </p>
      </PoleSection>

      {/* -------------------------------------------------------- MerciAvis */}
      <section id="merciavis" className="scroll-mt-24 bg-muted/30 py-16 sm:py-20">
        <Conteneur>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <Surtitre>Notre outil d&apos;avis clients</Surtitre>
              <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                Comment obtenir des avis Google régulièrement ?
              </h2>
              <div className="mt-4 space-y-3 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Vos clients ne sont pas mécontents : on ne leur demande jamais leur avis au bon moment. Pour y
                  remédier, nous avons créé MerciAvis, notre propre outil.
                </p>
                <p>
                  Une carte NFC ou un QR code au comptoir, un geste du client, et l&apos;avis arrive sur votre fiche
                  Google. Aucun faux avis, rien de contraire aux règles de Google.
                </p>
              </div>
              <div className="mt-6">
                <a
                  href={MERCIAVIS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-primary-texte underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Découvrir MerciAvis, notre outil d&apos;avis clients
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only"> (ouvre dans un nouvel onglet)</span>
                </a>
              </div>
            </div>

            <ol className="grid gap-4 lg:col-span-6">
              {MERCIAVIS_ETAPES.map(({ icon: Icon, titre, texte }, i) => (
                <li key={titre}>
                  <Reveal delay={i * 0.08} y={16}>
                    <div className={`${carteClasse} flex gap-4 p-5`}>
                      <span
                        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-pink-600 ring-1 ring-pink-100"
                        aria-hidden="true"
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-purple-700">Étape {i + 1}</p>
                        <h3 className="mt-0.5 font-semibold text-foreground">{titre}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{texte}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </Conteneur>
      </section>

      {/* ---------------------------------------------------------- Méthode */}
      <SectionSombre
        id="methode"
        surtitre="Notre méthode"
        titre="Comment travaillons-nous votre référencement local, semaine après semaine ?"
        intro="Cinq repères dans le temps, chacun avec un résultat que vous pouvez vérifier sur votre fiche."
      >
        <Reveal y={16}>
          <Timeline etapes={ETAPES} sombre />
        </Reveal>
      </SectionSombre>

      {/* ----------------------------------------------------------- Preuve */}
      <PolePreuve
        id="preuve"
        surtitre="Ce que vous pouvez vérifier"
        titre="Nous appliquons cette méthode à notre propre fiche Google et à notre propre outil"
        texte={[
          "ConvertiLab a sa propre fiche d'établissement Google à Rueil-Malmaison, complétée et suivie avec la méthode décrite ici. MerciAvis, l'outil de collecte d'avis, est le nôtre : nous le concevons, l'hébergeons et l'améliorons avec les retours du comptoir.",
          "Nous ne publions pas de résultats chiffrés de clients : la position d'une fiche dépend de la ville, du métier, de la concurrence et de la régularité des avis. Lors de l'appel, nous vous montrons le travail, pas une promesse.",
        ]}
        note="Les statistiques d'une fiche (vues, appels, itinéraires) sont fournies par Google à son propriétaire : vous."
        lien={{ href: OUTIL.href, label: "Vérifier le SEO de votre site avec l'outil gratuit" }}
        aside={
          <Reveal y={16}>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.18)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-purple-700">Sans nous croire sur parole</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">Trois choses à vérifier</h3>
              <ul className="mt-5 space-y-4">
                {[
                  {
                    icon: MapPin,
                    titre: "Notre fiche Google",
                    texte: "La méthode de cette page, appliquée à nous-mêmes.",
                    href: SITE.googleMaps,
                    label: "Ouvrir notre fiche sur Google Maps",
                  },
                  {
                    icon: BadgeCheck,
                    titre: "MerciAvis, notre outil",
                    texte: "Cartes NFC, QR code et tableau de bord, décrits sur le site de l'outil.",
                    href: MERCIAVIS_URL,
                    label: "Voir merciavis.fr",
                  },
                  {
                    icon: FileText,
                    titre: "Cette page elle-même",
                    texte: "Fil d'Ariane, FAQ et données structurées : affichez le code source.",
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
                      {href && label && (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-flex min-h-11 items-center gap-1.5 rounded-sm text-sm font-semibold text-primary-texte underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          {label}
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                          <span className="sr-only"> (ouvre dans un nouvel onglet)</span>
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        }
      />

      {/* ------------------------------------------------ CTA intermédiaire */}
      <CtaIntermediaire
        id="cta-diagnostic"
        titre="Où en est votre fiche Google aujourd'hui ?"
        texte="Décrivez votre situation en deux clics : nous regardons votre fiche et vos avis, et vous recevez un résumé écrit sous 24 h."
        bouton={{ href: ANCRE_FORMULAIRE, label: "Demander le diagnostic de ma fiche Google" }}
        alternativeLabel="ou appelez-nous au"
      />

      {/* ---------------------------------------------------------- Pour qui */}
      <Reveal>
        <PourQui
          id="transparence"
          surtitre="Transparence"
          titre="Le SEO local est-il fait pour votre activité ?"
          intro="Souvent le levier le plus rentable pour un commerce ou un artisan, il ne convient pas à tout le monde."
          pour={{
            titre: "C'est fait pour vous si...",
            items: [
              "Vous recevez des clients dans un lieu, ou vous intervenez dans une zone.",
              "Vos clients cherchent votre métier avec une ville ou un « près de moi ».",
              "Vous pouvez demander un avis à vos clients satisfaits.",
            ],
          }}
          pasPour={{
            titre: "Ce n'est pas pour vous si...",
            items: [
              "Vous vendez uniquement en ligne, sans zone ni lieu : le référencement naturel classique vous servira mieux.",
              "Vous voulez des avis sans clients réels : nous refusons les faux avis.",
              "Vous voulez la première fiche en quelques jours : personne ne peut vous la donner honnêtement.",
            ],
          }}
          engagement={{
            titre: "Notre engagement, écrit noir sur blanc",
            texte:
              "Un diagnostic écrit avant tout devis, une fiche et des accès à votre nom, aucun faux avis, un suivi mensuel. Si votre fiche ne progresse pas, nous vous le disons tel quel et cherchons la cause avec vous. Fiche, avis et pages villes restent à vous.",
          }}
        />
      </Reveal>

      {/* -------------------------------------------------------------- Prix */}
      <Reveal y={16}>
        <PolePrix
          id="prix"
          surtitre="Prix et engagement"
          titre="Combien coûte le référencement local avec notre agence ?"
          lignes={[
            {
              libelle: "Inclus dans le forfait SEO",
              valeur: pole.prix,
              detail: "6 mois minimum. Fiche Google, avis, citations et pages villes compris.",
            },
            {
              libelle: "Mission ponctuelle fiche et avis",
              valeur: "Sur devis",
              detail: "Fiche reprise et complétée, collecte d'avis avec MerciAvis. Prix fixe écrit après un échange de 30 minutes.",
            },
            {
              libelle: "MerciAvis seul",
              valeur: "Sans forfait",
              detail: "L'outil fonctionne aussi sans accompagnement. Conditions sur merciavis.fr.",
            },
          ]}
          engagementsTitre="Ce que nous nous engageons à faire"
          engagements={ENGAGEMENTS}
          lien={{ href: ANCRE_FORMULAIRE, label: "Recevoir un devis pour mon référencement local" }}
          note="TVA non applicable, art. 293 B du CGI. Devis écrit et validé avant toute action."
        />
      </Reveal>

      {/* -------------------------------------------------------------- FAQ */}
      <PoleFAQ
        id="faq"
        surtitre="Vos questions"
        titre="Vos questions sur le référencement local, la fiche Google et les avis"
        items={FAQ}
        lien={{ href: "/contact", label: "Poser une autre question à l'agence" }}
      />

      {/* ------------------------------------------------- Pages du pôle SEO */}
      <PoleSection
        id="pages-seo"
        surtitre="Le pôle SEO"
        titre="Le référencement local s'inscrit dans une méthode SEO complète"
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Search,
              titre: pole.nomCourt,
              lien: { href: pole.href, label: pole.ancre },
            },
            {
              icon: FileText,
              titre: "Référencement naturel",
              lien: referencement,
            },
            {
              icon: ClipboardList,
              titre: "Audit SEO complet",
              lien: audit,
            },
            {
              icon: MessageCircleQuestion,
              titre: "Vérification gratuite en 60 secondes",
              lien: OUTIL,
            },
          ].map(({ icon: Icon, titre, lien }, i) => (
            <li key={titre} className="h-full">
              <Reveal delay={i * 0.08} className="h-full">
                <article className={`${carteClasse} flex h-full flex-col p-6`}>
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 font-semibold text-foreground">{titre}</h3>
                  <div className="mt-auto pt-4">
                    <BoutonLien {...lien} variante="discret" className="text-sm font-semibold" />
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted-foreground">
          <Link href="/agence-web/rueil-malmaison" className={lienClasse}>
            Agence web à Rueil-Malmaison
          </Link>
          , nous intervenons aussi comme{" "}
          <Link href="/agence-web/paris" className={lienClasse}>
            agence web à Paris
          </Link>
          . Pas de site pour vos pages villes ?{" "}
          <Link href="/demande-maquette" className={lienClasse}>
            Demandez une maquette gratuite
          </Link>
          .
        </p>
      </PoleSection>

      {/* ----------------------------------------------------- Autres pôles */}
      <Reveal>
        <PoleAutresPoles
          id="autres-poles"
          slug="seo"
          surtitre="Les autres leviers"
          titre="Nos trois autres pôles, au même endroit"
          intro="Une fiche bien classée envoie des appels. Un site qui convertit, une campagne sur votre ville et une IA qui répond la nuit en font des clients."
        />
      </Reveal>

      {/* ------------------------------------------------- Formulaire final */}
      <FormulaireFinal
        id="formulaire"
        pole="seo"
        page={URL_PAGE}
        surtitre="Diagnostic de votre fiche Google"
        titre="Dites-nous où en est votre fiche, nous vous répondons sous 24 h"
        intro="Une question d'abord, vos coordonnées ensuite. Réponse écrite, sans engagement."
        question={{
          libelle: "Votre situation",
          aide: "Aucune coordonnée demandée à cette étape.",
          options: OPTIONS_SITUATION,
        }}
        titreEtape2="Où vous répondre ?"
        boutonLabel="Recevoir mon diagnostic sous 24 h"
        calendlyLabel="ou réservez 30 min avec le fondateur"
        confirmation={{
          titre: "Merci, votre demande est bien reçue.",
          texte: "Nous regardons votre fiche Google et vos avis, et nous revenons vers vous sous 24 h avec un résumé écrit. Pour en parler de vive voix, réservez un créneau.",
        }}
      />

      {/* ---------------------------------------------------- Dernier appel */}
      <PoleCTA
        id="contact"
        titre="Une question sur votre fiche Google ou vos avis ?"
        texte="Réservez 30 minutes, c'est gratuit et vous parlez au fondateur."
        calendlyLabel={LABEL_CALENDLY}
        contactLabel="Écrire à l'agence"
        afficherTelephone
      />

      <StickyCtaBar
        label="Diagnostic de ma fiche Google"
        href={ANCRE_FORMULAIRE}
        mentions={["Gratuit", "Sans engagement", "Réponse sous 24 h"]}
        formulaireId="formulaire"
      />
    </div>
  );
}
