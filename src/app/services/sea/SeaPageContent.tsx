import type { ReactNode } from "react";
import Link from "next/link";
import {
  BarChart3,
  CalendarDays,
  Check,
  CircleHelp,
  Coins,
  Inbox,
  FileSearch,
  FileText,
  Gauge,
  KeyRound,
  LayoutTemplate,
  MessageSquareWarning,
  PenLine,
  PhoneCall,
  PhoneOff,
  Rocket,
  ShieldCheck,
  Store,
  TrendingDown,
  TrendingUp,
  Unlock,
  UserRound,
  Wallet,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import type { FaqItem } from "@/lib/faq-schema";
import { getPole, getSousPage, LABEL_CALENDLY, SURTITRE_ZONE } from "@/data/poles";
import { BorderBeam, CardBody, CardContainer, CardItem, HeroMesh, NumberTicker, Reveal, Spotlight } from "@/components/motion";
import {
  BoutonLien,
  Comparatif,
  CtaIntermediaire,
  DashboardMock,
  Engagements,
  FilAriane,
  FormulaireFinal,
  LienDiscret,
  PainPoints,
  PoleAutresPoles,
  PoleCTA,
  PoleFAQ,
  PoleLivrables,
  PolePreuve,
  PolePrix,
  PoleSection,
  SectionOutil,
  SectionSombre,
  StickyCtaBar,
  Timeline,
  type FilArianeElement,
  type PoleOffre,
} from "@/components/pole";
import { Conteneur, Surtitre } from "@/components/pole/pole-ui";
import AdsEstimatorForm from "@/components/estimateur-ads/AdsEstimatorForm";
import PlateformesOrbite from "./PlateformesOrbite";
import { MiniAnnonceGoogle, MiniEpinglePinterest, MiniPostLinkedin, MiniPublicationMeta, MiniVideoTikTok } from "./MaquettesAnnonces";

const pole = getPole("publicite");
const [googleAds, metaAds] = pole.sousPages;
const tiktokAds = getSousPage("publicite", "/services/sea/tiktok-ads");
const pinterestAds = getSousPage("publicite", "/services/sea/pinterest-ads");
const linkedinAds = getSousPage("publicite", "/services/sea/linkedin-ads");
const estimateur = pole.outils[0];

/** Ancre du formulaire final : cible des CTA de la page et de la barre collante. */
const ANCRE_FORMULAIRE = "#formulaire";

export const FIL_ARIANE_PUBLICITE: FilArianeElement[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: pole.nomCourt },
];

/** Trois points de réassurance du hero, tous vrais et tenus sur la page prix. */
const REASSURANCE_HERO = [
  "Audit de compte offert",
  "Vous restez propriétaire du compte",
  "Sans engagement de durée, 3 mois conseillés",
];

const SITUATIONS = [
  {
    icon: MessageSquareWarning,
    titre: "Un site, mais presque aucune demande",
    texte: "Le référencement prend des mois. Une campagne Google Ads bien réglée envoie dès la première semaine des visiteurs qui cherchent votre métier.",
  },
  {
    icon: Wallet,
    titre: "Déjà testé la publicité, sans rien en tirer",
    texte: "Souvent, le suivi des conversions manquait ou la page d'arrivée ne donnait pas envie d'appeler. Nous reprenons le compte et corrigeons cela.",
  },
  {
    icon: Rocket,
    titre: "Une activité ou une offre à lancer",
    texte: "Ouverture, nouveau service, nouvelle zone : Meta Ads et TikTok Ads font connaître une offre à un quartier ou une ville en quelques jours.",
  },
  {
    icon: Store,
    titre: "Une boutique en ligne à rentabiliser",
    texte: "Google Shopping, Pinterest et Meta Ads pour vendre en ligne : nous suivons le coût par commande et la valeur du panier.",
  },
];

/** Les cinq plateformes du pôle, chacune avec la maquette de son annonce type et reliée à sa sous-page (source des ancres : poles.ts). */
type Plateforme = PoleOffre & { maquette: ReactNode };

const PLATEFORMES: Plateforme[] = [
  {
    titre: "Google Ads",
    description:
      "Google Ads (anciennement AdWords) affiche vos annonces quand quelqu'un tape « plombier Rueil-Malmaison » ou « avocat Paris ». La personne cherche déjà : il faut être là, au bon prix.",
    prix: "Sur devis",
    points: [
      "Annonces sur les recherches Google qui amènent des demandes",
      "Google Shopping pour les boutiques en ligne",
      "Relance des visiteurs qui n'ont pas encore appelé (remarketing)",
    ],
    lien: googleAds,
    maquette: <MiniAnnonceGoogle />,
    miseEnAvant: true,
  },
  {
    titre: "Meta Ads : Facebook et Instagram",
    description:
      "Facebook et Instagram touchent des personnes qui ne vous cherchent pas encore, autour de votre zone ou selon leurs centres d'intérêt. Notre agence Facebook Ads à Paris mise sur un bon visuel et une offre claire.",
    prix: "Sur devis",
    points: [
      "Facebook Ads et Instagram Ads gérés depuis un seul compte",
      "Formulaires de contact intégrés, sans quitter l'application",
      "Vidéos courtes, carrousels et images testés en parallèle",
    ],
    lien: metaAds,
    maquette: <MiniPublicationMeta />,
  },
  {
    titre: "TikTok Ads",
    description:
      "Le format vidéo court touche une clientèle jeune et locale. Utile pour un restaurant, un salon, une boutique ou un produit à montrer en action.",
    prix: "Sur devis",
    points: ["Vidéos verticales tournées simplement, au téléphone", "Ciblage par ville, âge et centres d'intérêt"],
    lien: tiktokAds,
    maquette: <MiniVideoTikTok />,
  },
  {
    titre: "Pinterest Ads",
    description:
      "Pinterest sert à préparer un achat : décoration, mariage, travaux, mode. Vos épingles sponsorisées apparaissent quand la personne cherche des idées.",
    prix: "Sur devis",
    points: ["Épingles produit ou inspiration reliées à votre site", "Ciblage par mots-clés et centres d'intérêt"],
    lien: pinterestAds,
    maquette: <MiniEpinglePinterest />,
  },
  {
    titre: "LinkedIn Ads",
    description:
      "Pour vendre à des entreprises : cabinets, consultants, prestataires B2B. Le clic coûte plus cher, mais vous choisissez le poste, le secteur et la taille de la société.",
    prix: "Sur devis",
    points: ["Ciblage par fonction, secteur et taille d'entreprise", "Formulaires LinkedIn pré-remplis pour les prises de contact"],
    lien: linkedinAds,
    maquette: <MiniPostLinkedin />,
  },
];

/** Vos 90 premiers jours : repères temporels cohérents avec la FAQ (premières demandes sous deux semaines, coût par demande stable après quatre à huit semaines de tests). */
const QUATRE_VINGT_DIX_JOURS = [
  {
    repere: "Jour 1",
    titre: "Diagnostic et audit de compte",
    texte:
      "Trente minutes, gratuites : votre activité, votre zone, votre panier moyen, les demandes que vous pouvez absorber. Si vous avez déjà un compte, nous l'auditons. Si la publicité a peu de chances d'être rentable, nous vous le disons.",
  },
  {
    repere: "Semaine 1",
    titre: "Plan et devis écrits, mise en place",
    texte:
      "Sous 24 h : plateforme de départ, budget média, coût par demande visé, frais de gestion. Puis compte à votre nom, suivi des conversions installé, annonces rédigées, page d'arrivée préparée.",
  },
  {
    repere: "Semaines 2 à 4",
    titre: "Lancement et tests",
    texte:
      "Plusieurs annonces et audiences tournent en même temps avec un budget limité. Les premières demandes arrivent généralement sous deux semaines. Nous coupons ce qui coûte cher.",
  },
  {
    repere: "Mois 2 et 3",
    titre: "Optimisation chaque semaine",
    texte:
      "Mots-clés à exclure, enchères, horaires, zones, nouveaux visuels : nous ajustons à partir des chiffres réels, jusqu'à un coût par demande stable.",
  },
  {
    repere: "Chaque mois",
    titre: "Rapport d'une page et décision",
    texte:
      "Budget dépensé, demandes reçues, coût par demande. Nous en parlons et décidons ensemble de continuer, d'augmenter, d'ajouter une plateforme ou d'arrêter.",
  },
];

export const FAQ_PUBLICITE: FaqItem[] = [
  {
    q: "Quel budget prévoir pour commencer la publicité en ligne ?",
    a: "Un budget média d'au moins 500 € par mois et par plateforme. En dessous, les campagnes n'ont pas assez de données pour s'améliorer. S'y ajoutent nos frais de gestion, fixés sur devis selon le nombre de plateformes et le travail de création.",
  },
  {
    q: "Google Ads ou Meta Ads : par quoi commencer ?",
    a: "Si vos clients tapent déjà votre métier dans Google (dépannage, artisan, avocat, dentiste), commencez par Google Ads : la demande existe, il faut la capter. Si votre offre se découvre par l'image (restaurant, esthétique, décoration, nouveau produit), Meta Ads est souvent plus efficace. Nous préférons démarrer par une seule plateforme et la rendre rentable avant d'en ajouter une.",
  },
  {
    q: "Au bout de combien de temps voit-on des demandes ?",
    a: "Les premières visites arrivent dès le lancement, les premières demandes généralement sous deux semaines. Il faut ensuite quatre à huit semaines de tests pour stabiliser le coût par demande : d'où les trois mois conseillés avant de juger une campagne.",
  },
  {
    q: "Qu'est-ce que le coût par demande, et pourquoi est-ce le chiffre à suivre ?",
    a: "C'est le budget dépensé divisé par le nombre de demandes reçues (appels, formulaires, messages, commandes), aussi appelé coût par lead. Si une demande vous coûte 25 € et qu'un contact sur trois signe un devis de 900 €, vous savez tout de suite si la campagne est rentable. Les clics ou les impressions ne vous disent rien de tout cela.",
  },
  {
    q: "Que contient l'audit de compte offert ?",
    a: "Nous regardons la structure de vos campagnes, le suivi des conversions, les mots-clés ou audiences qui dépensent sans apporter de demande, et la page d'arrivée. Vous recevez un résumé écrit de ce qui fuit et de ce que nous changerions en premier, sans obligation de nous confier le compte. Si vous n'avez pas encore de compte, l'audit devient un diagnostic : plateforme de départ, budget conseillé et ordre de grandeur du coût par demande.",
  },
  {
    q: "Qui s'occupe de mon compte concrètement ?",
    a: "Le fondateur de l'agence, qui crée et gère lui-même les comptes Google Ads et Meta Ads. Vous avez un seul interlocuteur, qui rédige les annonces, règle les campagnes et vous envoie le rapport. Nous n'externalisons pas la gestion des campagnes.",
  },
  {
    q: "Le compte publicitaire m'appartient-il ?",
    a: "Oui. Le compte Google Ads, le Business Manager Meta, le pixel et les données de conversion sont créés à votre nom. Si vous arrêtez, vous gardez tout l'historique.",
  },
  {
    q: "Y a-t-il un engagement de durée ?",
    a: "Non. Vous pouvez mettre en pause ou arrêter quand vous le souhaitez. Nous conseillons toutefois trois mois, le temps que les tests des premières semaines produisent un coût par demande stable.",
  },
  {
    q: "Comment se passe la sortie si j'arrête ?",
    a: "Vous nous prévenez, nous mettons les campagnes en pause ou les laissons tourner selon votre choix, puis nous retirons nos accès. Le compte, le pixel, les audiences et l'historique restent à votre nom, avec vos identifiants. Vous pouvez reprendre la main vous-même ou confier le compte à quelqu'un d'autre, sans rien recréer.",
  },
  {
    q: "Faut-il un site internet pour faire de la publicité ?",
    a: "Pour Google Ads, oui : une page claire, rapide, avec un numéro et un formulaire. Pour Meta Ads, un formulaire intégré à Facebook ou Instagram peut suffire au départ. Si votre page ne convertit pas, nous créons une landing page dédiée via notre pôle création de site internet.",
  },
];

const NOTE_AVIS = Number(SITE.reviews.rating);

export default function SeaPageContent() {
  return (
    <div className="pt-16">
      <FilAriane elements={FIL_ARIANE_PUBLICITE} />

      {/* Hero : H1 et texte rendus côté serveur, fond mesh + projecteur (seuls décors animés de l'écran). */}
      <section className="relative isolate overflow-hidden py-14 sm:py-20">
        <HeroMesh />
        <Spotlight />
        <Conteneur>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="flex flex-col lg:col-span-7">
              <Surtitre>{SURTITRE_ZONE}</Surtitre>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Agence Google Ads et Meta Ads à Paris : des demandes, pas seulement des clics
              </h1>
              <div className="mt-5 max-w-2xl space-y-3 text-lg leading-relaxed text-slate-600">
                <p>
                  Google Ads, Facebook Ads, Instagram Ads, TikTok, Pinterest, LinkedIn : nous mettons en place et
                  pilotons votre publicité en ligne pour qu&apos;elle vous coûte moins qu&apos;elle ne rapporte. Vous
                  suivez un seul chiffre chaque mois : le coût par demande.
                </p>
                {/* Masqué sur mobile : le bouton principal doit rester visible sans défilement (390 × 844). */}
                <p className="hidden sm:block">
                  Vous parlez au fondateur, qui gère lui-même vos comptes et teste d&apos;abord nos méthodes sur nos
                  propres campagnes.
                </p>
              </div>

              {/* Mobile : boutons juste après le texte (order), coches et chiffres ensuite ; desktop : ordre du DOM. */}
              <ul className="order-1 mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-foreground sm:order-none">
                {REASSURANCE_HERO.map((r) => (
                  <li key={r} className="inline-flex items-center gap-2">
                    <span
                      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      aria-hidden="true"
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {r}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <BoutonLien href={ANCRE_FORMULAIRE} label="Demander mon audit de compte gratuit" variante="primaire" />
                <BoutonLien href={SITE.calendly} label={LABEL_CALENDLY} external variante="secondaire" />
              </div>
              <p className="order-2 mt-4 text-sm text-muted-foreground sm:order-none">
                Pas encore de compte publicitaire ? Commencez par{" "}
                <Link href={estimateur.href} className="font-medium text-primary-texte underline-offset-4 hover:underline">
                  estimer votre budget publicitaire
                </Link>{" "}
                avec notre outil gratuit.
              </p>

              {/* Trois chiffres, valeur finale dans le HTML (NumberTicker n'anime qu'au montage). */}
              <dl className="order-3 mt-8 grid max-w-2xl grid-cols-3 gap-2 sm:order-none sm:mt-10 sm:gap-3">
                <div className="flex flex-col rounded-2xl border border-border bg-white/70 px-3 py-3 backdrop-blur-sm sm:px-5 sm:py-4">
                  <dt className="order-2 text-xs text-muted-foreground sm:text-sm">clients accompagnés</dt>
                  <dd className="text-xl font-bold text-foreground sm:text-2xl">
                    <NumberTicker value={150} />+
                  </dd>
                </div>
                <div className="flex flex-col rounded-2xl border border-border bg-white/70 px-3 py-3 backdrop-blur-sm sm:px-5 sm:py-4">
                  <dt className="order-2 text-xs text-muted-foreground sm:text-sm">sur {SITE.reviews.count} avis</dt>
                  <dd className="text-xl font-bold text-foreground sm:text-2xl">
                    <NumberTicker value={NOTE_AVIS} decimalPlaces={1} delay={0.1} />
                    /5
                  </dd>
                </div>
                <div className="flex flex-col rounded-2xl border border-border bg-white/70 px-3 py-3 backdrop-blur-sm sm:px-5 sm:py-4">
                  <dt className="order-2 text-xs text-muted-foreground sm:text-sm">pour un plan et un devis écrits</dt>
                  <dd className="text-xl font-bold text-foreground sm:text-2xl">
                    <NumberTicker value={24} delay={0.2} /> h
                  </dd>
                </div>
              </dl>
            </div>

            {/* Tableau de bord d'exemple, en perspective légère (aucun mouvement au tactile ni en animations réduites). */}
            <div className="lg:col-span-5">
              <CardContainer intensite={60} containerClassName="w-full" className="w-full max-w-md">
                <CardBody className="w-full">
                  <CardItem translateZ={24} className="w-full">
                    <DashboardMock
                      titre="Vos demandes, 30 derniers jours"
                      mention="Exemple"
                      indicateurs={[
                        { libelle: "Demandes reçues", valeur: "38", detail: "appels, formulaires, messages" },
                        { libelle: "Coût par demande", valeur: "27 €", detail: "budget dépensé ÷ demandes" },
                        { libelle: "Budget dépensé", valeur: "1 026 €", detail: "réglé à la plateforme" },
                        { libelle: "Annonces testées", valeur: "6", detail: "3 coupées, 3 conservées" },
                      ]}
                      ligne={{ libelle: "Meilleure annonce", valeur: "Vidéo « devis sous 24 h »" }}
                      serie={[28, 42, 36, 58, 52, 70, 66, 84]}
                      note="Exemple de tableau de bord : ce que vous verrez chaque mois, pas des résultats clients."
                      className="mx-auto"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </Conteneur>
      </section>

      {/* Outil gratuit du pôle, juste après le hero : simulateur de budget et de demandes (src/components/estimateur-ads). */}
      <SectionOutil
        badge="Outil gratuit"
        titre="Quel budget publicitaire pour combien de demandes ? Simulez-le"
        accroche="Choisissez votre secteur, votre ville et la plateforme (Google Ads, Meta Ads ou les deux), indiquez le budget que vous envisagez et votre panier moyen. Vous voyez tout de suite ce que ce budget peut donner en clics et en demandes."
        obtenez={[
          "Une projection de clics et de demandes par mois, selon votre secteur et la plateforme choisie",
          "Un ordre de grandeur du chiffre d'affaires correspondant, calculé avec votre panier moyen",
          "Le rapport PDF complet avec vos projections dans le temps, envoyé par email",
        ]}
        disposition="large"
        fond="gris"
      >
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a1a] p-6 shadow-[0_24px_48px_-24px_rgba(15,23,42,0.45)] sm:p-10">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(108,92,231,0.18),transparent_60%)]" />
          <div className="relative">
            <AdsEstimatorForm />
          </div>
        </div>
      </SectionOutil>

      {/* Pour qui, pour quel problème : orbite des cinq plateformes + quatre situations. */}
      <section id="pour-qui" className="bg-background py-16 sm:py-20">
        <Conteneur>
          <div className="mx-auto max-w-3xl text-center">
            <Surtitre>Pour qui, pour quel problème</Surtitre>
            <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">
              La publicité en ligne pour une PME, un artisan ou un commerce : dans quels cas est-ce rentable ?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Elle fonctionne quand une demande vaut plus que ce qu&apos;elle coûte et quand vous pouvez répondre vite.
              Cinq plateformes, une seule règle : commencer là où vos clients sont déjà.
            </p>
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <PlateformesOrbite />
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Google Ads, Meta Ads, TikTok, Pinterest et LinkedIn Ads autour d&apos;un compte qui vous appartient.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {SITUATIONS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <li key={s.titre}>
                    <Reveal
                      delay={i * 0.08}
                      y={16}
                      className="group flex h-full gap-4 rounded-2xl border border-border bg-card p-5 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_16px_32px_-16px_rgba(15,23,42,0.18)] motion-reduce:transition-none"
                    >
                      <span
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                        aria-hidden="true"
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <div>
                        <h3 className="font-semibold text-foreground">{s.titre}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.texte}</p>
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted-foreground">
            Nous accompagnons surtout des artisans, des commerces, des indépendants et des petites équipes, depuis
            Rueil-Malmaison (92), dans les Hauts-de-Seine et comme{" "}
            <Link href={pole.pageVille.href} className="font-medium text-primary-texte underline-offset-4 hover:underline">
              agence web à Paris
            </Link>
            . Les campagnes se pilotent à distance : nous travaillons aussi partout en France, en visio.
          </p>
        </Conteneur>
      </section>

      <Reveal y={16}>
        <PainPoints
          id="constat"
          surtitre="Le constat"
          titre="Si vous reconnaissez l'une de ces situations, votre budget publicitaire fuit"
          intro="Ce sont les trois problèmes que nous trouvons le plus souvent en reprenant un compte Google Ads ou Meta Ads."
          points={[
            {
              icon: TrendingDown,
              titre: "Vous dépensez sans savoir ce qui rapporte",
              texte:
                "Des clics, des impressions, un long rapport, mais personne ne sait combien coûte une demande ni d'où viennent les clients qui signent.",
            },
            {
              icon: TrendingUp,
              titre: "Votre coût d'acquisition grimpe",
              texte:
                "Mêmes annonces depuis des mois, mots-clés jamais nettoyés, enchères laissées en automatique : chaque demande coûte plus cher que la précédente.",
            },
            {
              icon: PhoneOff,
              titre: "Votre agence est injoignable",
              texte:
                "Un compte créé au nom de l'agence, un interlocuteur qui change, une réponse dans la semaine : vous payez sans pouvoir reprendre la main.",
            },
          ]}
        />
      </Reveal>

      {/* Les offres du pôle : cinq plateformes, chacune avec la maquette de son annonce type, une carte mise en avant (seule BorderBeam de l'écran). */}
      <PoleSection
        id="plateformes"
        surtitre="Les offres du pôle"
        titre={"Agence Google Ads, Meta Ads, TikTok, Pinterest ou LinkedIn Ads : quelle plateforme pour votre activité\u00a0?"}
        intro="Nous choisissons celle où vos clients sont déjà, nous démarrons avec une seule et n'en ajoutons une deuxième que lorsque la première est rentable. Budget média conseillé : 500 € par mois et par plateforme, plus nos frais de gestion."
      >
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {PLATEFORMES.map((offre, i) => (
            <li key={offre.titre} className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}>
              <Reveal
                delay={i * 0.06}
                y={16}
                className={`relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(124,58,237,0.35)] motion-reduce:transition-none ${
                  offre.miseEnAvant ? "border-primary/40" : "border-border"
                }`}
              >
                {offre.miseEnAvant && <BorderBeam size={90} duration={10} />}
                <div className="flex items-start justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-purple-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {offre.miseEnAvant && (
                    <span className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                      Souvent la première
                    </span>
                  )}
                </div>
                <div className="mt-4">{offre.maquette}</div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{offre.titre}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{offre.description}</p>
                <p className="mt-4">
                  <span className="text-2xl font-bold text-foreground">{offre.prix}</span>
                  <span className="block text-sm text-muted-foreground">frais de gestion + budget média dès 500 €/mois</span>
                </p>
                <ul className="mt-4 space-y-2">
                  {offre.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  {/* Chaque plateforme a sa page dédiée (poles.ts) ; à défaut, le formulaire de la page. */}
                  <LienDiscret
                    {...(offre.lien ?? { href: ANCRE_FORMULAIRE, label: `Parler de ${offre.titre} avec le fondateur` })}
                    className="text-sm font-semibold"
                  />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </PoleSection>

      {/* Notre méthode : vos 90 premiers jours, sur fond sombre (premier des deux blocs sombres). */}
      <SectionSombre
        id="methode"
        surtitre="Notre méthode"
        titre="Vos 90 premiers jours avec nous : comment travaillons-nous vos campagnes publicitaires ?"
        intro="Cinq repères dans le temps, toujours dans le même ordre, chacun avec un résultat que vous pouvez vérifier."
      >
        <Reveal y={16}>
          <Timeline etapes={QUATRE_VINGT_DIX_JOURS} sombre />
        </Reveal>
      </SectionSombre>

      <PoleSection
        id="livrables"
        surtitre="Ce que vous obtenez"
        titre="Ce que vous recevez concrètement quand nous gérons votre publicité en ligne"
        intro="Pas de tableau de bord à déchiffrer. Voici ce qui vous appartient et ce que vous voyez chaque mois."
      >
        <Reveal y={16}>
          <PoleLivrables
            livrables={[
              {
                icon: UserRound,
                titre: "Un compte publicitaire à votre nom",
                texte: "Google Ads, Business Manager Meta, pixel et conversions vous appartiennent, historique compris.",
              },
              {
                icon: Gauge,
                titre: "Le suivi des conversions installé",
                texte: "Appels, formulaires, messages, achats : chaque demande est comptée pour connaître son coût réel.",
              },
              {
                icon: PenLine,
                titre: "Les annonces, visuels et vidéos courtes",
                texte: "Textes rédigés, images et vidéos préparées à partir de vos photos ou de prises de vue simples.",
              },
              {
                icon: LayoutTemplate,
                titre: "Une page d'arrivée qui donne envie d'appeler",
                texte: "Nous adaptons votre page existante ou créons une landing page dédiée si la vôtre fait fuir les visiteurs.",
              },
              {
                icon: BarChart3,
                titre: "Le coût par demande, chaque mois",
                texte: "Budget dépensé, demandes reçues, coût par demande : à comparer à ce que vous rapporte un client.",
              },
              {
                icon: FileText,
                titre: "Un rapport simple, d'une page",
                texte: "Ce qui a marché, ce que nous avons coupé, ce que nous testons ensuite. Puis un échange pour décider.",
              },
            ]}
          />
        </Reveal>
        <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Si votre site n&apos;est pas prêt à recevoir du trafic payant, nous vous le disons avant tout lancement : vous pouvez{" "}
          <Link href="/demande-maquette" className="font-medium text-primary-texte underline-offset-4 hover:underline">
            demander une maquette gratuite de landing page
          </Link>{" "}
          conçue pour transformer vos visiteurs en demandes.
        </p>
      </PoleSection>

      <PolePreuve
        id="preuve"
        surtitre="Ce que vous pouvez vérifier"
        titre="Nous testons nos méthodes sur nos propres campagnes avant de les appliquer aux vôtres"
        texte={[
          "Depuis le 4 septembre 2026, ConvertiLab fait tourner sa propre campagne Meta Ads à 36 € par jour. Les demandes qu'elle génère arrivent dans notre CRM, comme pour n'importe quel client, et déclenchent nos relances automatiques.",
          "Ce que nous faisons pour nous, nous le faisons pour vous : une campagne, trois vidéos testées en parallèle, un formulaire relié au CRM, un suivi hebdomadaire du coût par demande et une règle simple pour couper ce qui coûte trop cher. Les formats et réglages qui tiennent chez nous sont ceux que nous vous proposons.",
          "Nous ne publions pas de résultats chiffrés de clients : un coût par demande dépend du métier, de la zone, du panier moyen et de la saison. Nous pouvons en revanche estimer avec vous un ordre de grandeur avant de dépenser le premier euro.",
        ]}
        note="Diffusée en France. Les demandes reçues sont visibles dans notre CRM interne."
        lien={{ href: estimateur.href, label: "Estimer votre coût par demande avec notre estimateur gratuit" }}
        aside={
          <Reveal y={16}>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.18)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-purple-700">Notre campagne, en clair</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">Ce que vous pouvez vérifier lors de l&apos;appel</h3>
              <ul className="mt-5 space-y-4">
                {[
                  { icon: CalendarDays, titre: "Date de lancement", texte: "4 septembre 2026, campagne toujours active." },
                  { icon: Coins, titre: "Budget quotidien", texte: "36 € par jour, réglés à Meta, trois vidéos en test." },
                  { icon: Inbox, titre: "Demandes dans notre CRM", texte: "Chaque demande arrive dans Pipedrive et déclenche nos relances, comme pour un client." },
                ].map(({ icon: Icon, titre, texte }) => (
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
                Nous vous montrons le gestionnaire de publicités et le CRM en visio, sans chiffre de résultat client.
              </p>
            </div>
          </Reveal>
        }
      />

      <CtaIntermediaire
        id="cta-audit"
        titre="Combien vous coûte une demande aujourd'hui ?"
        texte="Si vous ne savez pas répondre, c'est le premier chiffre que nous établissons ensemble, gratuitement, à partir de votre compte ou de votre marché."
        bouton={{ href: ANCRE_FORMULAIRE, label: "Demander mon audit de compte gratuit" }}
        alternativeLabel="ou appelez-nous au"
      />

      <Reveal y={16}>
        <Comparatif
          id="comparatif"
          surtitre="Classique ou ConvertiLab"
          titre="Une agence publicitaire classique ou ConvertiLab : qu'est-ce qui change pour vous ?"
          gauche={{
            titre: "Une agence publicitaire classique",
            items: [
              "Compte créé au nom de l'agence : l'historique part avec elle.",
              "Un interlocuteur commercial, quelqu'un d'autre aux commandes.",
              "Un long rapport sur les clics et les impressions.",
              "Une commission sur le budget média : plus vous dépensez, plus l'agence gagne.",
              "Six ou douze mois d'engagement signés avant le premier résultat.",
              "Le suivi des conversions installé « plus tard », parfois jamais.",
            ],
          }}
          droite={{
            titre: "Avec ConvertiLab",
            items: [
              "Compte, pixel et données à votre nom : l'historique reste à vous.",
              "Un seul interlocuteur, le fondateur, qui règle lui-même vos campagnes.",
              "Un rapport d'une page : budget, demandes, coût par demande.",
              "Des frais de gestion fixes, écrits sur le devis, sans commission.",
              "Sans engagement de durée, trois mois conseillés.",
              "Le suivi des conversions installé avant le premier euro dépensé.",
            ],
          }}
          note="Ce tableau décrit des pratiques que nous rencontrons souvent en reprenant des comptes, pas une agence en particulier."
        />
      </Reveal>

      {/* Second bloc sombre : les engagements « zéro risque à nous tester ». */}
      <SectionSombre
        id="engagements"
        surtitre="Nos engagements"
        titre="Zéro risque à nous tester : ce que nous nous engageons à faire, écrit sur le devis"
        intro="Six engagements concrets, qui ne promettent pas un résultat mais une façon de travailler."
      >
        <Reveal y={16}>
          <Engagements
            variante="sombre"
            items={[
              {
                icon: FileSearch,
                titre: "Audit de compte offert",
                texte: "Avant tout devis, nous regardons votre compte existant et vous disons ce qui fuit.",
              },
              {
                icon: KeyRound,
                titre: "Vous restez propriétaire",
                texte: "Compte, pixel, audiences, historique : tout est créé à votre nom, avec vos identifiants.",
              },
              {
                icon: Unlock,
                titre: "Sans engagement de durée",
                texte: "Pause ou arrêt quand vous le souhaitez, trois mois conseillés pour juger.",
              },
              {
                icon: PhoneCall,
                titre: "Un interlocuteur joignable",
                texte: "Le fondateur, par téléphone ou par email, avec une réponse sous 24 h.",
              },
              {
                icon: FileText,
                titre: "Un rapport mensuel d'une page",
                texte: "Budget, demandes, coût par demande : rien de plus, rien de caché.",
              },
              {
                icon: ShieldCheck,
                titre: "Un avis honnête avant de dépenser",
                texte: "Si la publicité a peu de chances d'être rentable pour vous, nous vous le disons.",
              },
            ]}
          />
        </Reveal>
      </SectionSombre>

      <Reveal y={16}>
        <PolePrix
          id="prix"
          surtitre="Prix et engagement"
          titre="Combien coûte la publicité en ligne avec une agence Google Ads et Meta Ads ?"
          intro="Deux lignes distinctes sur votre devis : le budget média, qui va à la plateforme, et les frais de gestion, qui rémunèrent notre travail. Aucune commission sur le budget média."
          lignes={[
            {
              libelle: "Frais de gestion",
              valeur: "Sur devis",
              detail: "Selon le nombre de plateformes, le budget et le travail de création. Prix fixe écrit après le diagnostic gratuit.",
            },
            {
              libelle: "Budget média conseillé",
              valeur: "Dès 500 €/mois",
              detail: "Par plateforme, réglé directement à Google, Meta, TikTok, Pinterest ou LinkedIn depuis votre compte.",
            },
            {
              libelle: "Engagement",
              valeur: "Sans engagement de durée",
              detail: "Pause ou arrêt quand vous le souhaitez. 3 mois conseillés pour obtenir un coût par demande stable.",
            },
          ]}
          lien={{ href: ANCRE_FORMULAIRE, label: "Recevoir un devis pour vos campagnes" }}
          note="TVA non applicable, art. 293 B du CGI. Le devis est écrit et validé avant tout lancement."
        />
      </Reveal>

      <PoleFAQ
        id="faq"
        surtitre="FAQ"
        titre="Vos questions sur la publicité en ligne, Google Ads et Meta Ads"
        items={FAQ_PUBLICITE}
        lien={{ href: "/contact", label: "Poser une autre question" }}
      />

      <PoleAutresPoles
        slug="publicite"
        surtitre="Nos autres pôles"
        titre="Nos trois autres pôles pour trouver vos clients"
        intro="Un site qui convertit, un référencement qui dure et une IA qui répond la nuit rendent chaque euro de publicité plus rentable."
      />

      <FormulaireFinal
        id="formulaire"
        pole="publicite"
        page={pole.href}
        surtitre="Audit de compte gratuit"
        titre="Demandez votre audit de compte gratuit"
        intro="Vous avez déjà un compte : nous l'auditons. Vous partez de zéro : nous estimons avec vous un budget et un coût par demande. Dans les deux cas, une réponse écrite sous 24 h, sans engagement."
        question={{
          libelle: "Quel budget média mensuel envisagez-vous ?",
          aide: "Aucune coordonnée demandée à cette étape.",
          options: [
            {
              value: "moins-de-500",
              label: "Moins de 500 €",
              desc: "Nous vous dirons franchement si c'est suffisant",
              icon: <Coins className="h-5 w-5" />,
            },
            {
              value: "500-a-1500",
              label: "500 à 1 500 €",
              desc: "Une plateforme, bien réglée",
              icon: <Wallet className="h-5 w-5" />,
            },
            {
              value: "plus-de-1500",
              label: "Plus de 1 500 €",
              desc: "Une ou deux plateformes",
              icon: <TrendingUp className="h-5 w-5" />,
            },
            {
              value: "je-ne-sais-pas",
              label: "Je ne sais pas encore",
              desc: "Nous estimons ensemble",
              icon: <CircleHelp className="h-5 w-5" />,
            },
          ],
        }}
        titreEtape2="Où vous envoyer l'audit ?"
        boutonLabel="Recevoir ma réponse sous 24 h"
        calendlyLabel="ou réservez 30 min avec le fondateur"
        confirmation={{
          titre: "Demande bien reçue",
          texte: "Nous revenons vers vous sous 24 h avec un premier avis écrit. Si vous préférez en parler de vive voix, réservez directement un créneau.",
        }}
      />

      <PoleCTA
        titre="Un projet de campagne, une question sur votre budget ?"
        texte="Réservez 30 minutes, c'est gratuit et vous parlez au fondateur. Vous repartez avec un avis honnête et un ordre de grandeur de budget."
        calendlyLabel={LABEL_CALENDLY}
        contactLabel="Écrire à l'agence"
        afficherTelephone
      />

      <StickyCtaBar
        label="Audit de compte gratuit"
        href={ANCRE_FORMULAIRE}
        mentions={["Gratuit", "Sans engagement", "Réponse sous 24 h"]}
        formulaireId="formulaire"
      />
    </div>
  );
}
