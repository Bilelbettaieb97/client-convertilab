import Link from "next/link";
import {
  CalendarDays,
  Check,
  CircleHelp,
  Clapperboard,
  Eye,
  Gauge,
  Heart,
  Inbox,
  LayoutTemplate,
  MessageSquareWarning,
  Repeat,
  Search,
  Sparkles,
  Target,
  Video,
  VideoOff,
  Wallet,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import type { FaqItem } from "@/lib/faq-schema";
import { getPole, LABEL_CALENDLY, SURTITRE_ZONE } from "@/data/poles";
import { CardBody, CardContainer, CardItem, HeroMesh, NumberTicker, Reveal, Spotlight } from "@/components/motion";
import {
  BoutonLien,
  CtaIntermediaire,
  DiagnosticInteractif,
  FilAriane,
  FormulaireFinal,
  LienDiscret,
  PainPoints,
  PoleAutresPoles,
  PoleCTA,
  PoleFAQ,
  PolePreuve,
  PolePrix,
  PoleSection,
  PourQui,
  SectionOutil,
  SectionSombre,
  StickyCtaBar,
  Timeline,
  type FilArianeElement,
} from "@/components/pole";
import { Conteneur, Surtitre } from "@/components/pole/pole-ui";
import { getDiagnostic } from "@/lib/diagnostics/configs";
import MockVideoTikTok from "./MockVideoTikTok";

const DIAGNOSTIC = getDiagnostic("publicite-tiktok-ads-est-il-fait-pour-vous")!;

const pole = getPole("publicite");
const [googleAds, metaAds] = pole.sousPages;
const estimateur = pole.outils[0];

/** URL de la page, réutilisée par page.tsx pour le canonical et les JSON-LD. */
export const URL_TIKTOK_ADS = "/services/sea/tiktok-ads";

/** Ancre du formulaire final : cible des CTA de la page et de la barre collante. */
const ANCRE_FORMULAIRE = "#formulaire";

export const FIL_ARIANE_TIKTOK: FilArianeElement[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: pole.nomCourt, href: pole.href },
  { label: "TikTok Ads" },
];

/** Trois points de réassurance du hero, tous tenus sur la page prix. */
const REASSURANCE_HERO = [
  "Vidéos testées avant d'augmenter le budget",
  "Compte et pixel TikTok à votre nom",
  "Sans engagement de durée, 3 mois conseillés",
];

/** Les quatre briques de la prestation, indissociables. */
const PRESTATIONS = [
  {
    icon: Clapperboard,
    titre: "Formats verticaux et créas testées",
    texte:
      "Trois à cinq vidéos par vague, chacune avec une accroche différente. Les chiffres désignent la gagnante avant toute hausse de budget.",
    points: ["Scripts courts écrits pour le fil, pas pour la télévision", "Montage à partir de vos rushs ou d'un tournage au téléphone"],
    miseEnAvant: true,
  },
  {
    icon: Repeat,
    titre: "Spark Ads depuis votre compte",
    texte:
      "Nous sponsorisons vos vidéos déjà publiées, ou celles d'un créateur avec son accord. La publicité garde le nom du compte et les commentaires : elle ressemble à un contenu du fil.",
    points: ["Autorisation Spark Ads configurée sur votre compte", "Sélection des vidéos qui ont déjà retenu l'attention"],
  },
  {
    icon: Target,
    titre: "Pixel TikTok et événements de conversion",
    texte:
      "Avant le premier euro, nous installons le pixel et les événements qui comptent (demande, ajout au panier, commande). Sans cela, aucune optimisation n'est possible.",
    points: ["Pixel et Events API installés et testés", "Audiences de retargeting créées à votre nom"],
  },
  {
    icon: Wallet,
    titre: "Ciblage, budget et enchères",
    texte:
      "Zone, tranche d'âge, centres d'intérêt, audiences similaires à vos clients : nous démarrons serré, dès 500 € par mois, puis élargissons ce qui coûte le moins cher.",
    points: ["Budget média réglé par vous, directement à TikTok", "Arrêt de ce qui dépense sans rapporter"],
  },
];

/** Vos 90 premiers jours : repères cohérents avec la FAQ (lecture des premières demandes à partir de la deuxième ou troisième semaine, coût stable après un ou deux cycles de vidéos). */
const QUATRE_VINGT_DIX_JOURS = [
  {
    repere: "Jour 1",
    titre: "Diagnostic : TikTok est-il fait pour vous ?",
    texte:
      "Trente minutes, gratuites : l'âge de vos clients, votre produit, ce que vous pouvez filmer. Si TikTok n'est pas la bonne plateforme, nous vous orientons vers Google Ads ou Meta Ads.",
  },
  {
    repere: "Semaine 1",
    titre: "Compte, pixel et premières vidéos",
    texte:
      "Compte TikTok Ads Manager à votre nom, pixel et événements testés. Trois à cinq scripts, puis les vidéos montées et sous-titrées.",
  },
  {
    repere: "Semaines 2 à 4",
    titre: "Lancement et tests de créas",
    texte:
      "Les vidéos tournent en parallèle avec un budget limité. Nous suivons le taux de visionnage et le coût par demande, puis coupons celles qui ne tiennent pas.",
  },
  {
    repere: "Mois 2 et 3",
    titre: "Nouvelles vidéos toutes les deux à trois semaines",
    texte:
      "Sur TikTok, une publicité s'use vite. Nous renouvelons les accroches à partir de ce qui a marché et passons en Spark Ads quand votre compte publie.",
  },
  {
    repere: "Chaque mois",
    titre: "Rapport d'une page et décision",
    texte:
      "Budget dépensé, demandes reçues, coût par demande, meilleure vidéo. Nous décidons ensemble de continuer, d'augmenter ou d'arrêter.",
  },
];

export const FAQ_TIKTOK: FaqItem[] = [
  {
    q: "Quel budget prévoir pour de la publicité TikTok ?",
    a: "Un budget média d'au moins 500 € par mois, réglé directement à TikTok depuis votre compte. En dessous, l'algorithme n'a pas assez de données pour apprendre et le coût par demande reste instable. S'y ajoutent nos frais de gestion, fixés sur devis selon le nombre de vidéos à produire chaque mois.",
  },
  {
    q: "TikTok Ads est-il réservé aux moins de 35 ans ?",
    a: "Non, mais c'est là que la plateforme est la plus forte. Si vos clients ont majoritairement plus de 50 ans, ou si vous vendez à des entreprises, Meta Ads, Google Ads ou LinkedIn Ads seront presque toujours plus rentables. C'est la première question que nous posons lors du diagnostic, avant tout devis.",
  },
  {
    q: "Faut-il avoir un compte TikTok et publier pour faire de la publicité ?",
    a: "Non pour des publicités classiques : un compte TikTok Ads Manager suffit. Oui pour les Spark Ads, qui sponsorisent une vidéo déjà publiée depuis votre compte ou celui d'un créateur avec son accord. Nous commençons souvent par des publicités classiques, puis nous ajoutons les Spark Ads quand votre compte a des vidéos qui fonctionnent.",
  },
  {
    q: "Qui réalise les vidéos ?",
    a: "Nous écrivons les scripts, nous montons et nous sous-titrons les vidéos à partir de vos rushs, ou d'un tournage simple au téléphone dans votre boutique, votre atelier ou votre cuisine. Le nombre de vidéos produites chaque mois est écrit sur le devis. Vous n'avez pas besoin de savoir filmer : il faut seulement accepter que l'on montre votre produit ou votre lieu.",
  },
  {
    q: "Qu'est-ce qu'une Spark Ad ?",
    a: "C'est une publicité qui utilise une vidéo réelle de votre compte TikTok (ou d'un créateur qui vous a donné son autorisation) au lieu d'une vidéo créée uniquement pour la publicité. Elle garde le nom du compte, les likes et les commentaires, et elle ressemble à un contenu normal du fil. C'est souvent le format le moins perçu comme une publicité, donc le plus regardé.",
  },
  {
    q: "Au bout de combien de temps voit-on des demandes ou des commandes ?",
    a: "Les premières vues arrivent dès le lancement. Nous lisons les premières demandes ou commandes à partir de la deuxième ou troisième semaine, une fois qu'une vidéo se détache. Il faut ensuite un ou deux cycles de nouvelles vidéos pour stabiliser le coût par demande : d'où les trois mois conseillés avant de juger.",
  },
  {
    q: "Le compte TikTok Ads et le pixel m'appartiennent-ils ?",
    a: "Oui. Le compte TikTok Ads Manager, le pixel, les événements et les audiences sont créés à votre nom, avec vos identifiants. Nous travaillons dessus avec un accès partenaire. Si vous arrêtez, nous retirons nos accès et vous gardez tout l'historique et toutes les vidéos.",
  },
  {
    q: "TikTok Ads ou Meta Ads : par quoi commencer ?",
    a: "Si votre clientèle a moins de 35 ans et que votre produit se montre en vidéo, TikTok peut être la première plateforme. Si votre clientèle est plus large ou plus âgée, ou si vous avez déjà des visuels qui fonctionnent, nous commençons par Meta Ads (Facebook et Instagram). Nous démarrons toujours par une seule plateforme et n'en ajoutons une deuxième que lorsque la première est rentable.",
  },
];

const NOTE_AVIS = Number(SITE.reviews.rating);

export default function TikTokAdsContent() {
  return (
    <div className="pt-16">
      <FilAriane elements={FIL_ARIANE_TIKTOK} />

      {/* Hero : H1 et texte rendus côté serveur, fond mesh + projecteur (seuls décors animés de l'écran). */}
      <section className="relative isolate overflow-hidden py-14 sm:py-20">
        <HeroMesh />
        <Spotlight />
        <Conteneur>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="flex flex-col lg:col-span-7">
              <Surtitre>{SURTITRE_ZONE}</Surtitre>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Agence TikTok Ads à Paris : des vidéos verticales qui font venir vos clients de moins de 35 ans
              </h1>
              <div className="mt-5 max-w-2xl space-y-3 text-lg leading-relaxed text-slate-600">
                <p>
                  Vidéos verticales écrites pour le fil et testées par petites vagues, Spark Ads depuis votre compte,
                  pixel et événements installés avant le premier euro dépensé. Vous suivez un seul chiffre chaque
                  mois : le coût par demande ou par commande. Et si TikTok n&apos;est pas fait pour vous, nous vous le
                  disons dès le diagnostic.
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
                <BoutonLien href={ANCRE_FORMULAIRE} label="Demander mon diagnostic TikTok gratuit" variante="primaire" />
                <BoutonLien href={SITE.calendly} label={LABEL_CALENDLY} external variante="secondaire" />
              </div>
              <p className="order-2 mt-4 text-sm text-muted-foreground sm:order-none">
                Vous hésitez entre plusieurs plateformes ? Commencez par{" "}
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
                  <dt className="order-2 text-xs text-muted-foreground sm:text-sm">de budget média conseillé par mois</dt>
                  <dd className="text-xl font-bold text-foreground sm:text-2xl">
                    <NumberTicker value={500} delay={0.2} /> €
                  </dd>
                </div>
              </dl>
            </div>

            {/* Vidéo verticale d'exemple (accroche, sous-titres, bouton) et son anatomie, en perspective légère : ce que nous construisons, pas un résultat. */}
            <div className="lg:col-span-5">
              <CardContainer intensite={60} containerClassName="w-full" className="w-full max-w-md">
                <CardBody className="w-full">
                  <CardItem translateZ={24} className="w-full">
                    <MockVideoTikTok className="mx-auto" />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </Conteneur>
      </section>

      {/* Diagnostic interactif du pôle, juste après le hero (contenu : src/lib/diagnostics/configs/publicite.ts). */}
      <SectionOutil badge="Diagnostic gratuit" titre={DIAGNOSTIC.titre} accroche={DIAGNOSTIC.accroche} obtenez={DIAGNOSTIC.obtenez} fond="blanc">
        <DiagnosticInteractif diagnostic={DIAGNOSTIC} page="/services/sea/tiktok-ads" />
      </SectionOutil>

      <Reveal y={16}>
        <PainPoints
          id="constat"
          surtitre="Le constat"
          titre="Si vous reconnaissez l'une de ces situations, TikTok vous coûte sans vous rapporter"
          intro="Les trois problèmes que nous rencontrons le plus souvent chez ceux qui ont déjà essayé TikTok."
          points={[
            {
              icon: MessageSquareWarning,
              titre: "Vous publiez, parfois beaucoup, sans une seule vente",
              texte:
                "Des vues, quelques likes, mais aucun pixel ni offre claire : la vidéo divertit, elle ne vend pas.",
            },
            {
              icon: VideoOff,
              titre: "Vos publicités ressemblent à des publicités",
              texte:
                "Un logo animé, un slogan, une musique de stock : sur TikTok, ce format est passé en moins d'une seconde. Le fil attend un vrai produit.",
            },
            {
              icon: Gauge,
              titre: "Vous avez « boosté » une vidéo, puis plus rien",
              texte:
                "Le bouton Promouvoir dépense sans pixel ni événement de conversion : impossible de savoir ce qu'une commande a coûté.",
            },
          ]}
        />
      </Reveal>

      {/* Ce que nous faisons : quatre briques, une seule mise en avant. */}
      <PoleSection
        id="prestations"
        surtitre="Ce que nous faisons"
        titre="Vidéos verticales, Spark Ads, pixel et ciblage : que comprend notre gestion TikTok Ads ?"
        intro="Quatre briques indissociables : une belle vidéo sans pixel ne s'améliore jamais."
      >
        <ul className="grid gap-6 sm:grid-cols-2">
          {PRESTATIONS.map((b, i) => {
            const Icon = b.icon;
            return (
              <li key={b.titre}>
                <Reveal
                  delay={i * 0.06}
                  y={16}
                  className={`relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(124,58,237,0.35)] motion-reduce:transition-none ${
                    b.miseEnAvant ? "border-primary/40" : "border-border"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                      aria-hidden="true"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-purple-700">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">{b.titre}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{b.texte}</p>
                  <ul className="mt-4 space-y-2">
                    {b.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            );
          })}
        </ul>
        <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Presque tout le trafic TikTok vient d&apos;un téléphone. Si votre page ne convertit pas sur mobile, vous pouvez{" "}
          <Link href="/demande-maquette" className="font-medium text-primary-texte underline-offset-4 hover:underline">
            demander une maquette gratuite de landing page
          </Link>
          .
        </p>
      </PoleSection>

      {/* Notre méthode : vos 90 premiers jours, sur fond sombre (seul bloc sombre de la page). */}
      <SectionSombre
        id="methode"
        surtitre="Notre méthode"
        titre="Vos 90 premiers jours en TikTok Ads : comment travaillons-nous vos campagnes ?"
        intro="Cinq repères dans le temps, toujours dans le même ordre, chacun avec un résultat que vous pouvez vérifier."
      >
        <Reveal y={16}>
          <Timeline etapes={QUATRE_VINGT_DIX_JOURS} sombre />
        </Reveal>
      </SectionSombre>

      <PolePreuve
        id="preuve"
        surtitre="Ce que vous pouvez vérifier"
        titre="Nous produisons nos propres vidéos verticales et testons nos formats sur nos propres campagnes Meta Ads"
        texte={[
          "Depuis le 4 septembre 2026, ConvertiLab fait tourner sa propre campagne vidéo sur Meta Ads (Facebook et Instagram) à 36 € par jour : trois vidéos verticales testées en parallèle, un formulaire relié à notre CRM, un suivi hebdomadaire du coût par demande. Nous n'avons pas de campagne TikTok en cours pour notre propre agence : les règles de format ci-dessus sont celles que nous testons sur nos vidéos verticales.",
          "Nous ne publions pas de résultats chiffrés de clients : un coût par demande dépend du produit, de la zone, de la saison et de la vidéo. Nous estimons en revanche un ordre de grandeur avec vous avant de dépenser le premier euro.",
        ]}
        note="Notre campagne vidéo en cours est diffusée sur Meta Ads, en France, pas sur TikTok. Les demandes reçues sont visibles dans notre CRM interne."
        lien={{ href: estimateur.href, label: "Estimer votre coût par demande avec notre estimateur gratuit" }}
        aside={
          <Reveal y={16}>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.18)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-purple-700">En clair</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">Ce que vous pouvez vérifier lors de l&apos;appel</h3>
              <ul className="mt-5 space-y-4">
                {[
                  { icon: CalendarDays, titre: "Campagne vidéo en cours (Meta Ads)", texte: "Depuis le 4 septembre 2026, 36 € par jour, trois vidéos verticales en test sur Facebook et Instagram." },
                  { icon: Inbox, titre: "Demandes dans notre CRM", texte: "Chaque demande arrive dans Pipedrive, comme pour un client." },
                  { icon: Eye, titre: "Notre compte TikTok", texte: "Public : vous voyez le format vertical que nous proposons." },
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
              <div className="mt-5">
                <LienDiscret href={SITE.social.tiktok} label="Voir le compte TikTok de ConvertiLab" external className="text-sm font-semibold" />
              </div>
            </div>
          </Reveal>
        }
      />

      <CtaIntermediaire
        id="cta-diagnostic"
        titre="Votre clientèle est-elle sur TikTok ?"
        texte="C'est la première chose que nous vérifions ensemble, gratuitement, à partir de l'âge de vos clients."
        bouton={{ href: ANCRE_FORMULAIRE, label: "Demander mon diagnostic TikTok gratuit" }}
        alternativeLabel="ou appelez-nous au"
      />

      <Reveal y={16}>
        <PourQui
          id="pour-qui"
          surtitre="Honnêtement"
          titre="TikTok Ads n'est pas fait pour tout le monde : nous préférons vous le dire avant"
          pour={{
            titre: "C'est fait pour vous si...",
            items: [
              "Vos clients ont surtout moins de 35 ans, ou votre produit se découvre par l'image : restaurant, salon, boutique, cosmétique, mode, e-commerce.",
              "Vous vendez en boutique, en salle ou en ligne une offre qui se décide vite, sans devis.",
              "Vous acceptez que l'on filme votre produit, votre lieu ou votre équipe, simplement, au téléphone.",
              "Vous pouvez engager 500 € par mois de budget média pendant trois mois.",
            ],
          }}
          pasPour={{
            titre: "Ce n'est pas pour vous si...",
            items: [
              "Vous vendez à des entreprises, avec un cycle de décision long : LinkedIn Ads ou Google Ads seront plus rentables.",
              "Votre clientèle a surtout plus de 50 ans : Meta Ads et Google Ads la touchent mieux.",
              "Personne ne peut apparaître en vidéo et vous n'avez rien à montrer.",
              "Vous attendez un retour en deux semaines avec 200 €.",
            ],
          }}
          engagement={{
            titre: "Notre engagement, écrit noir sur blanc",
            texte:
              "Si, au terme du diagnostic gratuit, nous pensons que TikTok n'est pas la bonne plateforme pour votre activité, nous vous le disons et vous orientons vers Google Ads ou Meta Ads. Nous ne lançons pas une campagne pour facturer des frais de gestion. Chaque mois, vous voyez le coût par demande réel : s'il ne se stabilise pas, nous vous proposons d'arrêter.",
          }}
        />
      </Reveal>

      <Reveal y={16}>
        <PolePrix
          id="prix"
          surtitre="Prix et engagement"
          titre="Combien coûte une campagne TikTok Ads avec ConvertiLab ?"
          intro="Deux lignes sur votre devis : le budget média, qui va à TikTok, et les frais de gestion, qui rémunèrent le pilotage et les vidéos. Aucune commission sur le budget média."
          lignes={[
            {
              libelle: "Frais de gestion",
              valeur: "Sur devis",
              detail: "Selon le nombre de vidéos produites chaque mois. Prix fixe écrit après le diagnostic gratuit.",
            },
            {
              libelle: "Budget média conseillé",
              valeur: "Dès 500 €/mois",
              detail: "Réglé directement à TikTok depuis votre compte. En dessous, les tests n'ont pas assez de données.",
            },
            {
              libelle: "Engagement",
              valeur: "Sans engagement de durée",
              detail: "Pause ou arrêt quand vous le souhaitez. 3 mois conseillés, le temps d'un ou deux cycles de vidéos.",
            },
          ]}
          engagementsTitre="Compris dans les frais de gestion"
          engagements={[
            "Compte, pixel et événements à votre nom",
            "Scripts, montage et sous-titres, nombre écrit sur le devis",
            "Rapport mensuel d'une page",
            "Accès complet à votre compte TikTok Ads Manager",
            "Pause ou arrêt à tout moment",
          ]}
          lien={{ href: ANCRE_FORMULAIRE, label: "Recevoir un devis pour vos campagnes TikTok" }}
          note="TVA non applicable, art. 293 B du CGI. Le devis est écrit et validé avant tout lancement."
        />
      </Reveal>

      <PoleFAQ
        id="faq"
        surtitre="FAQ"
        titre="Vos questions sur la publicité TikTok"
        items={FAQ_TIKTOK}
        lien={{ href: "/contact", label: "Poser une autre question" }}
      />

      {/* Pages sœurs du pôle : maillage vers le hub et les deux autres plateformes documentées. */}
      <PoleSection
        id="autres-plateformes"
        fond="gris"
        surtitre="Les autres plateformes"
        titre="TikTok n'est pas la seule plateforme : Google Ads, Meta Ads et le pôle publicité"
        intro="Nous démarrons par une seule plateforme et n'en ajoutons une deuxième que lorsque la première est rentable."
      >
        <ul className="grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: Search,
              lien: googleAds,
              texte: "Pour capter ceux qui tapent déjà votre métier dans Google.",
            },
            {
              icon: Heart,
              lien: metaAds,
              texte: "Facebook et Instagram : une clientèle plus large, vos vidéos réutilisées en Reels.",
            },
            {
              icon: LayoutTemplate,
              lien: { href: pole.href, label: pole.ancre },
              texte: "Comment nous choisissons la plateforme, la méthode et les engagements du devis.",
            },
          ].map(({ icon: Icon, lien, texte }) => (
            <li key={lien.href}>
              <Link
                href={lien.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors motion-reduce:transition-none hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-semibold text-foreground group-hover:text-primary-texte">{lien.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{texte}</p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Depuis Rueil-Malmaison (92), comme{" "}
          <Link href={pole.pageVille.href} className="font-medium text-primary-texte underline-offset-4 hover:underline">
            agence web à Paris
          </Link>{" "}
          et partout en France, en visio. Voir{" "}
          <Link href="/services" className="font-medium text-primary-texte underline-offset-4 hover:underline">
            tous les services de l&apos;agence
          </Link>
          .
        </p>
      </PoleSection>

      <PoleAutresPoles
        slug="publicite"
        surtitre="Nos autres pôles"
        titre="Nos trois autres pôles pour trouver vos clients"
      />

      <FormulaireFinal
        id="formulaire"
        pole="publicite"
        page={URL_TIKTOK_ADS}
        surtitre="Diagnostic TikTok gratuit"
        titre="Demandez votre diagnostic TikTok Ads gratuit"
        intro="Nous regardons votre activité, l'âge de vos clients et ce que vous pouvez filmer, puis nous vous disons par écrit si TikTok a un sens pour vous, avec un ordre de grandeur de budget. Réponse sous 24 h, sans engagement."
        question={{
          libelle: "Où en êtes-vous avec TikTok ?",
          aide: "Aucune coordonnée demandée à cette étape.",
          options: [
            {
              value: "jamais-de-publicite-tiktok",
              label: "Je n'ai jamais fait de publicité TikTok",
              desc: "Nous partons de zéro ensemble",
              icon: <Sparkles className="h-5 w-5" />,
            },
            {
              value: "je-publie-sans-publicite",
              label: "Je publie déjà, sans publicité",
              desc: "Vos vidéos peuvent devenir des Spark Ads",
              icon: <Video className="h-5 w-5" />,
            },
            {
              value: "deja-teste-tiktok-ads",
              label: "J'ai déjà testé TikTok Ads",
              desc: "Nous auditons le compte existant",
              icon: <Gauge className="h-5 w-5" />,
            },
            {
              value: "je-ne-sais-pas",
              label: "Je ne sais pas si TikTok est fait pour moi",
              desc: "Le diagnostic répond à cette question",
              icon: <CircleHelp className="h-5 w-5" />,
            },
          ],
        }}
        titreEtape2="Où vous envoyer le diagnostic ?"
        boutonLabel="Recevoir ma réponse sous 24 h"
        calendlyLabel="ou réservez 30 min avec le fondateur"
        confirmation={{
          titre: "Demande bien reçue",
          texte: "Nous revenons vers vous sous 24 h avec un premier avis écrit sur TikTok Ads pour votre activité. Si vous préférez en parler de vive voix, réservez directement un créneau.",
        }}
      />

      <PoleCTA
        titre="Une question sur TikTok Ads, un doute sur votre clientèle ?"
        texte="Réservez 30 minutes, c'est gratuit et vous parlez au fondateur. Vous repartez avec un avis honnête et un ordre de grandeur de budget."
        calendlyLabel={LABEL_CALENDLY}
        contactLabel="Écrire à l'agence"
        afficherTelephone
      />

      <StickyCtaBar
        label="Diagnostic TikTok gratuit"
        href={ANCRE_FORMULAIRE}
        mentions={["Gratuit", "Sans engagement", "Réponse sous 24 h"]}
        formulaireId="formulaire"
      />
    </div>
  );
}
