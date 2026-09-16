import Link from "next/link";
import {
  BarChart3,
  CalendarDays,
  Check,
  CircleHelp,
  Coins,
  FileSearch,
  Inbox,
  KeyRound,
  MapPin,
  Megaphone,
  MessageSquareWarning,
  PhoneCall,
  PhoneOff,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  TrendingUp,
  Unlock,
  Users,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import type { FaqItem } from "@/lib/faq-schema";
import { getPole, LABEL_CALENDLY, SURTITRE_ZONE } from "@/data/poles";
import { BorderBeam, CardBody, CardContainer, CardItem, HeroMesh, NumberTicker, Reveal, Spotlight } from "@/components/motion";
import {
  BoutonLien,
  CtaIntermediaire,
  Engagements,
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
import AdsEstimatorForm from "@/components/estimateur-ads/AdsEstimatorForm";
import MockPublicationMeta from "./MockPublicationMeta";

const pole = getPole("publicite");
const estimateur = pole.outils[0];

/** URL de la page, conservée telle quelle (mot-clé principal : agence Meta Ads Paris). */
export const URL_META_ADS = "/services/sea/meta-ads";

/** Pages sœurs du pôle publicité (toutes les sous-pages sauf celle-ci), lues depuis poles.ts. */
const PAGES_SOEURS = pole.sousPages.filter((p) => p.href !== URL_META_ADS);

/** Ancre du formulaire final : cible des CTA de la page et de la barre collante. */
const ANCRE_FORMULAIRE = "#formulaire";

export const FIL_ARIANE_META_ADS: FilArianeElement[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: pole.nomCourt, href: pole.href },
  { label: "Meta Ads" },
];

/** Trois points de réassurance du hero, tous vrais et tenus sur la page prix. */
const REASSURANCE_HERO = [
  "Audit de compte offert",
  "Compte, pixel et Business Manager à votre nom",
  "Sans engagement de durée, 3 mois conseillés",
];

/** Pour qui : quatre situations où Facebook et Instagram sont le bon levier. */
const SITUATIONS = [
  {
    icon: Store,
    titre: "Un commerce, un restaurant, un salon",
    texte:
      "Vos clients vivent à moins de quinze minutes. Meta Ads leur montre votre vitrine ou votre carte avant qu'ils ne cherchent.",
  },
  {
    icon: Sparkles,
    titre: "Une activité qui se découvre par l'image",
    texte:
      "Esthétique, coiffure, décoration, photographie, artisanat d'art : une vidéo de vingt secondes explique mieux votre travail qu'une annonce texte.",
  },
  {
    icon: ShoppingBag,
    titre: "Une boutique en ligne",
    texte:
      "Catalogue relié au compte, visiteurs relancés avec les produits regardés : nous suivons le coût par commande et le panier moyen.",
  },
  {
    icon: Rocket,
    titre: "Une ouverture, une offre, un événement",
    texte:
      "Nouveau local, nouveau service, promotion de saison : une campagne fait connaître une nouveauté à une ville en quelques jours.",
  },
];

/** Trois objectifs de campagne : ce que nous mettons en place selon ce que vous voulez obtenir. */
const OBJECTIFS = [
  {
    titre: "Des demandes de devis ou de rendez-vous",
    description:
      "L'objectif le plus courant chez les artisans et les cabinets : un contact qualifié, pas un simple clic.",
    points: [
      "Formulaire instantané dans Facebook ou Instagram",
      "Questions de qualification pour écarter les curieux",
      "Chaque demande envoyée dans votre CRM",
    ],
    miseEnAvant: true,
    ancre: "Obtenir des demandes de devis",
  },
  {
    titre: "Des ventes en ligne",
    description:
      "Le catalogue est relié au compte, les produits s'affichent aux bonnes personnes et les visiteurs sont relancés.",
    points: [
      "Catalogue produits synchronisé avec votre site",
      "Pixel Meta et API de conversions pour compter chaque achat",
      "Relance des paniers abandonnés et des produits consultés",
    ],
    ancre: "Vendre en ligne avec Meta Ads",
  },
  {
    titre: "Faire connaître un lieu ou une offre",
    description:
      "Ouverture, nouvelle carte, offre de saison : nous touchons une zone précise, puis mesurons visites et messages.",
    points: [
      "Ciblage par ville, quartier ou rayon autour de votre adresse",
      "Vidéos courtes et Reels préparés à partir de vos photos",
      "Bouton d'itinéraire, d'appel ou de message",
    ],
    ancre: "Faire connaître mon lieu",
  },
];

/** Vos 90 premiers jours : repères cohérents avec la FAQ (lecture des premières demandes dès la deuxième semaine, coût stable après quatre à huit semaines). */
const QUATRE_VINGT_DIX_JOURS = [
  {
    repere: "Jour 1",
    titre: "Diagnostic et audit de compte",
    texte:
      "Trente minutes, gratuites : votre activité, votre zone, votre panier moyen. Compte Meta existant audité. Si la publicité a peu de chances d'être rentable, nous vous le disons.",
  },
  {
    repere: "Semaine 1",
    titre: "Plan écrit, compte et suivi installés",
    texte:
      "Sous 24 h : objectif, budget, coût par demande visé, frais de gestion. Puis Business Manager à votre nom, pixel, formulaire relié au CRM, trois premiers visuels.",
  },
  {
    repere: "Semaines 2 à 4",
    titre: "Lancement et tests",
    texte:
      "Trois visuels et deux audiences en parallèle, budget limité. Dès la deuxième semaine, nous lisons les premières demandes et coupons ce qui n'en apporte pas.",
  },
  {
    repere: "Mois 2 et 3",
    titre: "Optimisation chaque semaine",
    texte:
      "Nouveaux visuels avant que les anciens ne s'usent, audiences ajustées, remarketing : à partir des chiffres réels, jusqu'à un coût par demande stable.",
  },
  {
    repere: "Chaque mois",
    titre: "Rapport d'une page et décision",
    texte:
      "Budget dépensé, demandes reçues, coût par demande, meilleur visuel. Nous décidons ensemble : continuer, augmenter, tester un format ou arrêter.",
  },
];

export const FAQ_META_ADS: FaqItem[] = [
  {
    q: "Facebook Ads ou Instagram Ads : faut-il choisir ?",
    a: "Non. Les deux se pilotent depuis le même compte, le Gestionnaire de publicités Meta, avec les mêmes visuels et le même budget. Nous diffusons sur les deux au départ, puis le budget se déplace vers celui qui apporte des demandes au meilleur coût. Selon le métier, c'est souvent Facebook pour les services locaux et Instagram pour les activités qui se vendent par l'image.",
  },
  {
    q: "Quel budget prévoir pour une campagne Meta Ads ?",
    a: "Un budget média d'au moins 500 € par mois, réglé directement à Meta depuis votre compte. En dessous, l'algorithme n'a pas assez de données pour apprendre et les résultats restent aléatoires. S'y ajoutent nos frais de gestion, fixés sur devis selon le travail de création et le nombre de campagnes. Notre propre campagne tourne avec 36 € par jour, soit un peu plus de 1 000 € par mois.",
  },
  {
    q: "Au bout de combien de temps arrivent les premières demandes ?",
    a: "Les premières impressions arrivent dès la validation des annonces, généralement le jour même. Dès la deuxième semaine, nous lisons les premières demandes et coupons ce qui n'en apporte pas. Il faut ensuite quatre à huit semaines de tests pour stabiliser le coût par demande : c'est pour cela que nous conseillons trois mois avant de juger une campagne.",
  },
  {
    q: "Qui crée les visuels et les vidéos ?",
    a: "Nous. À partir de vos photos, de vos réalisations ou de prises de vue simples au téléphone, nous préparons les images, les carrousels et les vidéos courtes, avec les textes et les sous-titres. Vous validez avant diffusion. Si vous avez déjà un photographe ou un vidéaste, nous adaptons ses fichiers aux formats Meta.",
  },
  {
    q: "Formulaire instantané ou page de mon site : lequel choisir ?",
    a: "Le formulaire instantané s'ouvre dans Facebook ou Instagram, se pré-remplit avec les informations du profil et donne plus de demandes, parfois moins qualifiées : nous ajoutons des questions pour trier. La page de votre site donne moins de demandes, mais plus engagées, et sert le remarketing. Nous démarrons souvent par le formulaire instantané, relié à votre CRM, puis nous testons la page si votre site convertit bien.",
  },
  {
    q: "Meta Ads ou Google Ads pour mon activité ?",
    a: "Si vos clients tapent déjà votre métier dans Google, avec une urgence (dépannage, serrurier, avocat, dentiste), commencez par Google Ads : la demande existe. Si votre offre se découvre par l'image ou s'adresse à un quartier (restaurant, esthétique, décoration, ouverture), Meta Ads est souvent plus efficace. Nous démarrons par une seule plateforme et ne passons à la seconde que lorsque la première est rentable.",
  },
  {
    q: "Le compte, le pixel et les audiences m'appartiennent-ils ?",
    a: "Oui. Le Business Manager, le compte publicitaire, le pixel, les audiences et l'historique sont créés à votre nom, avec vos identifiants. Nous intervenons comme partenaire avec un accès que vous pouvez retirer à tout moment. Si vous arrêtez, vous gardez tout.",
  },
  {
    q: "Y a-t-il un engagement, et comment se passe la sortie ?",
    a: "Aucun engagement de durée : vous pouvez mettre en pause ou arrêter quand vous le souhaitez, nous conseillons simplement trois mois pour juger. Si vous arrêtez, nous mettons les campagnes en pause ou les laissons tourner selon votre choix, puis nous retirons notre accès partenaire. Le compte, le pixel, les visuels et l'historique restent à vous.",
  },
];

const NOTE_AVIS = Number(SITE.reviews.rating);

export default function MetaAdsContent() {
  return (
    <div className="pt-16">
      <FilAriane elements={FIL_ARIANE_META_ADS} />

      {/* Hero : H1 et texte rendus côté serveur, fond mesh + projecteur (seuls décors animés de l'écran). */}
      <section className="relative isolate overflow-hidden py-14 sm:py-20">
        <HeroMesh />
        <Spotlight />
        <Conteneur>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="flex flex-col lg:col-span-7">
              <Surtitre>{SURTITRE_ZONE}</Surtitre>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Agence Meta Ads à Paris : des publicités Facebook et Instagram qui apportent des demandes
              </h1>
              <div className="mt-5 max-w-2xl space-y-3 text-lg leading-relaxed text-slate-600">
                <p>
                  Facebook et Instagram touchent des personnes qui ne vous cherchent pas encore, dans votre zone ou
                  selon leurs centres d&apos;intérêt. Notre agence Facebook Ads et Instagram Ads monte vos campagnes,
                  prépare les visuels et suit un seul chiffre chaque mois : le coût par demande.
                </p>
                {/* Masqué sur mobile : le bouton principal doit rester visible sans défilement (390 × 844). */}
                <p className="hidden sm:block">
                  Vous parlez au fondateur, qui règle lui-même votre compte Meta.
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
                avec notre outil gratuit, ou comparez les plateformes sur le{" "}
                <Link href={pole.href} className="font-medium text-primary-texte underline-offset-4 hover:underline">
                  pôle publicité en ligne
                </Link>
                .
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

            {/* Publication sponsorisée d'exemple (vidéo, texte, bouton, formulaire instantané), en perspective légère (aucun mouvement au tactile ni en animations réduites). */}
            <div className="lg:col-span-5">
              <CardContainer intensite={60} containerClassName="w-full" className="w-full max-w-md">
                <CardBody className="w-full">
                  <CardItem translateZ={24} className="w-full">
                    <MockPublicationMeta className="mx-auto" />
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
        titre="Combien de demandes pour votre budget Meta Ads ? Simulez-le"
        accroche="Sélectionnez Meta Ads comme plateforme, votre secteur, le budget mensuel que vous envisagez et votre panier moyen. Le simulateur projette les clics et les demandes que ce budget peut générer sur Facebook et Instagram, et ce que cela représente pour votre activité."
        obtenez={[
          "Une projection de clics et de demandes par mois sur Facebook et Instagram, selon votre secteur",
          "La même simulation possible sur Google Ads ou sur les deux plateformes combinées, pour comparer",
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

      {/* Pour qui : Meta crée la demande là où Google y répond, quatre situations. */}
      <section id="pour-qui" className="bg-background py-16 sm:py-20">
        <Conteneur>
          <div className="mx-auto max-w-3xl text-center">
            <Surtitre>Pour qui, pour quel problème</Surtitre>
            <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">
              Publicité Facebook et Instagram : pour quelles activités est-ce rentable ?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Google Ads répond à une demande qui existe déjà. Meta Ads la crée : il montre votre activité à des
              personnes qui ne la cherchaient pas. Cela fonctionne quand l&apos;offre se comprend en une image et
              quand une demande vaut plus que ce qu&apos;elle coûte.
            </p>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
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

          <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted-foreground">
            Basés à Rueil-Malmaison (92), nous intervenons comme{" "}
            <Link href={pole.pageVille.href} className="font-medium text-primary-texte underline-offset-4 hover:underline">
              agence web à Paris
            </Link>{" "}
            et, à distance, partout en France.
          </p>
        </Conteneur>
      </section>

      <Reveal y={16}>
        <PainPoints
          id="constat"
          surtitre="Le constat"
          titre="Si vous reconnaissez l'une de ces situations, votre budget Facebook et Instagram fuit"
          intro="Les trois problèmes les plus fréquents sur un compte Meta Ads repris."
          points={[
            {
              icon: MessageSquareWarning,
              titre: "Vous boostez des publications sans rien mesurer",
              texte:
                "Le bouton « Booster » diffuse une publication sans objectif, sans pixel ni formulaire : des mentions J'aime, pas des demandes.",
            },
            {
              icon: TrendingUp,
              titre: "Vos visuels s'usent et le coût par demande grimpe",
              texte:
                "Le même visuel depuis trois mois, montré aux mêmes personnes : Meta le diffuse de moins en moins et chaque demande coûte plus cher.",
            },
            {
              icon: PhoneOff,
              titre: "Les formulaires arrivent, mais personne ne rappelle",
              texte:
                "Les demandes restent dans l'application Meta, découvertes trois jours plus tard. Rappelé dans l'heure, un contact répond ; la semaine suivante, il a choisi quelqu'un d'autre.",
            },
          ]}
        />
      </Reveal>

      {/* Les offres : trois objectifs de campagne, une carte mise en avant (seule BorderBeam de l'écran). */}
      <PoleSection
        id="objectifs"
        surtitre="Ce que nous mettons en place"
        titre="Campagnes Facebook et Instagram Ads : demandes, ventes ou notoriété locale, que voulez-vous obtenir ?"
        intro="Une campagne Meta se construit à partir de l'objectif, pas du format. Frais de gestion sur devis, budget média dès 500 € par mois, réglé à Meta depuis votre compte."
      >
        <ul className="grid gap-6 lg:grid-cols-3">
          {OBJECTIFS.map((offre, i) => (
            <li key={offre.titre}>
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
                      Souvent le premier objectif
                    </span>
                  )}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-foreground">{offre.titre}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{offre.description}</p>
                <p className="mt-4">
                  <span className="text-2xl font-bold text-foreground">Sur devis</span>
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
                  <LienDiscret
                    href={ANCRE_FORMULAIRE}
                    label={offre.ancre}
                    className="text-sm font-semibold"
                  />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Si votre page d&apos;arrivée fait fuir les visiteurs, nous vous le disons avant le lancement :{" "}
          <Link href="/demande-maquette" className="font-medium text-primary-texte underline-offset-4 hover:underline">
            demandez une maquette gratuite de landing page
          </Link>
          .
        </p>
      </PoleSection>

      {/* Notre méthode : vos 90 premiers jours, sur fond sombre (premier des deux blocs sombres). */}
      <SectionSombre
        id="methode"
        surtitre="Notre méthode"
        titre="Vos 90 premiers jours en Meta Ads : comment travaillons-nous vos campagnes ?"
        intro="Cinq repères dans le temps, chacun avec un résultat vérifiable dans votre propre compte."
      >
        <Reveal y={16}>
          <Timeline etapes={QUATRE_VINGT_DIX_JOURS} sombre />
        </Reveal>
      </SectionSombre>


      <PolePreuve
        id="preuve"
        surtitre="Ce que vous pouvez vérifier"
        titre="Nous testons nos méthodes sur notre propre campagne Meta avant de les appliquer à la vôtre"
        texte={[
          "Depuis le 4 septembre 2026, ConvertiLab fait tourner sa propre campagne Facebook et Instagram à 36 € par jour : trois vidéos en test, un formulaire instantané relié à notre CRM, un suivi hebdomadaire du coût par demande. Les réglages qui tiennent chez nous sont ceux que nous vous proposons.",
          "Nous ne publions pas de résultats chiffrés de clients : un coût par demande dépend du métier, de la zone et de la saison. Nous pouvons en revanche estimer un ordre de grandeur avec vous avant de dépenser le premier euro.",
        ]}
        note="Diffusée en France. Les demandes reçues sont visibles dans notre CRM interne."
        lien={{ href: estimateur.href, label: "Estimer votre coût par demande avec notre estimateur gratuit" }}
        aside={
          <Reveal y={16}>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.18)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-purple-700">Notre campagne Meta, en clair</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">Ce que vous pouvez vérifier lors de l&apos;appel</h3>
              <ul className="mt-5 space-y-4">
                {[
                  { icon: CalendarDays, titre: "Date de lancement", texte: "4 septembre 2026, campagne toujours active." },
                  { icon: Coins, titre: "Budget quotidien", texte: "36 € par jour, réglés à Meta, trois vidéos en test." },
                  { icon: Inbox, titre: "Demandes dans notre CRM", texte: "Chaque formulaire arrive dans Pipedrive et déclenche nos relances." },
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
                Nous vous montrons le Gestionnaire de publicités et le CRM en visio, sans chiffre de résultat client.
              </p>
            </div>
          </Reveal>
        }
      />

      <CtaIntermediaire
        id="cta-audit"
        titre="Combien vous coûte une demande sur Facebook et Instagram aujourd'hui ?"
        texte="Si vous ne savez pas répondre, c'est le premier chiffre que nous établissons ensemble, gratuitement."
        bouton={{ href: ANCRE_FORMULAIRE, label: "Demander mon audit de compte gratuit" }}
        alternativeLabel="ou appelez-nous au"
      />

      <Reveal y={16}>
        <PourQui
          id="pour-qui-pas-pour-qui"
          surtitre="Transparence"
          titre="Meta Ads n'est pas fait pour tout le monde : nous préférons vous le dire avant"
          fond="gris"
          pour={{
            titre: "C'est fait pour vous si...",
            items: [
              "Votre activité se comprend en une photo ou une vidéo de vingt secondes.",
              "Une demande vous rapporte nettement plus qu'elle ne coûte, et vous rappelez dans la journée.",
              "Vous pouvez tenir un budget média de 500 € par mois pendant trois mois.",
            ],
          }}
          pasPour={{
            titre: "Ce n'est pas pour vous si...",
            items: [
              "Vos clients vous cherchent dans l'urgence (dépannage, serrurier) : Google Ads convient mieux.",
              "Vous ne pouvez pas montrer votre travail, ou vous refusez toute image.",
              "Personne ne peut rappeler les demandes dans les 24 h.",
            ],
          }}
          engagement={{
            titre: "Notre engagement, écrit noir sur blanc",
            texte:
              "Un devis écrit avant tout lancement, un compte à votre nom, un rapport d'une page chaque mois. Si la campagne ne trouve pas son coût par demande après trois mois, nous proposons d'arrêter ou de changer de plateforme.",
          }}
        />
      </Reveal>

      {/* Hub du pôle et pages sœurs : liste lue depuis poles.ts, elle s'étend quand une plateforme reçoit sa page. */}
      <PoleSection
        id="autres-plateformes"
        surtitre="Le pôle publicité"
        titre="Meta Ads n'est pas la seule option : comparez avec les autres plateformes"
        intro="Nous démarrons par une seule plateforme, celle où vos clients sont déjà. Si ce n'est pas Facebook et Instagram, voici les autres."
      >
        {/* Flex centré : la rangée reste équilibrée quel que soit le nombre de pages sœurs. */}
        <ul className="flex flex-wrap justify-center gap-4">
          <li className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)]">
            <Reveal
              y={16}
              className="flex h-full flex-col rounded-2xl border border-primary/30 bg-gradient-to-br from-purple-50 to-pink-50 p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-16px_rgba(124,58,237,0.3)] motion-reduce:transition-none"
            >
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-purple-700 shadow-sm"
                aria-hidden="true"
              >
                <MapPin className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 font-semibold text-foreground">Le hub publicité en ligne</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Les cinq plateformes comparées, la méthode et les prix communs.
              </p>
              <div className="mt-auto pt-4">
                <LienDiscret href={pole.href} label={pole.ancre} className="text-sm font-semibold" />
              </div>
            </Reveal>
          </li>
          {PAGES_SOEURS.map((page, i) => (
            <li key={page.href} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)]">
              <Reveal
                delay={(i + 1) * 0.06}
                y={16}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_16px_32px_-16px_rgba(15,23,42,0.18)] motion-reduce:transition-none"
              >
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"
                  aria-hidden="true"
                >
                  <Megaphone className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-semibold text-foreground">{page.label}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Même méthode, même compte à votre nom : seule la plateforme change.
                </p>
                <div className="mt-auto pt-4">
                  <LienDiscret
                    href={page.href}
                    label={`Voir la page ${page.label.replace(/^Agence /, "")}`}
                    className="text-sm font-semibold"
                  />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </PoleSection>

      {/* Second bloc sombre : les engagements « zéro risque à nous tester ». */}
      <SectionSombre
        id="engagements"
        surtitre="Nos engagements"
        titre="Zéro risque à nous tester : ce que nous nous engageons à faire, écrit sur le devis"
      >
        <Reveal y={16}>
          <Engagements
            variante="sombre"
            items={[
              {
                icon: FileSearch,
                titre: "Audit de compte offert",
                texte: "Avant tout devis, nous regardons votre compte Meta existant et vous disons ce qui fuit.",
              },
              {
                icon: KeyRound,
                titre: "Vous restez propriétaire",
                texte: "Business Manager, pixel, audiences, visuels, historique : tout est créé à votre nom.",
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
                icon: BarChart3,
                titre: "Un rapport mensuel d'une page",
                texte: "Budget, demandes, coût par demande, meilleur visuel : rien de plus, rien de caché.",
              },
              {
                icon: ShieldCheck,
                titre: "Un avis honnête avant de dépenser",
                texte: "Si Facebook et Instagram ont peu de chances d'être rentables pour vous, nous vous le disons.",
              },
            ]}
          />
        </Reveal>
      </SectionSombre>

      <Reveal y={16}>
        <PolePrix
          id="prix"
          surtitre="Prix et engagement"
          titre="Combien coûte une campagne Meta Ads avec notre agence Facebook Ads à Paris ?"
          intro="Deux lignes sur votre devis : le budget média, qui va à Meta, et nos frais de gestion. Aucune commission sur le budget média."
          lignes={[
            {
              libelle: "Frais de gestion",
              valeur: "Sur devis",
              detail: "Selon l'objectif, le nombre de campagnes et la création des visuels. Prix fixe écrit après le diagnostic gratuit.",
            },
            {
              libelle: "Budget média conseillé",
              valeur: "Dès 500 €/mois",
              detail: "Réglé directement à Meta depuis votre compte publicitaire.",
            },
            {
              libelle: "Engagement",
              valeur: "Sans engagement de durée",
              detail: "Pause ou arrêt quand vous le souhaitez, 3 mois conseillés pour un coût par demande stable.",
            },
          ]}
          lien={{ href: ANCRE_FORMULAIRE, label: "Recevoir un devis pour vos campagnes Meta" }}
          note="TVA non applicable, art. 293 B du CGI. Le devis est écrit et validé avant tout lancement."
        />
      </Reveal>

      <PoleFAQ
        id="faq"
        surtitre="FAQ"
        titre="Vos questions sur la publicité Facebook et Instagram"
        items={FAQ_META_ADS}
        lien={{ href: "/contact", label: "Poser une autre question" }}
      />

      <PoleAutresPoles
        slug="publicite"
        surtitre="Nos autres pôles"
        titre="Nos trois autres pôles pour trouver vos clients"
        intro="Un site qui convertit, un référencement qui dure et une IA qui répond la nuit rendent chaque euro publicitaire plus rentable."
      />

      <FormulaireFinal
        id="formulaire"
        pole="publicite"
        page={URL_META_ADS}
        surtitre="Audit de compte gratuit"
        titre="Demandez votre audit de compte Meta gratuit"
        intro="Compte existant : nous l'auditons. Départ de zéro : nous estimons ensemble un budget et un coût par demande. Réponse écrite sous 24 h, sans engagement."
        question={{
          libelle: "Que voulez-vous obtenir avec Facebook et Instagram ?",
          aide: "Aucune coordonnée demandée à cette étape.",
          options: [
            {
              value: "demandes",
              label: "Des demandes de devis ou de rendez-vous",
              desc: "Formulaire instantané relié à votre CRM",
              icon: <Inbox className="h-5 w-5" />,
            },
            {
              value: "ventes",
              label: "Des ventes en ligne",
              desc: "Catalogue, pixel et relance des paniers",
              icon: <ShoppingBag className="h-5 w-5" />,
            },
            {
              value: "notoriete-locale",
              label: "Faire connaître un lieu ou une offre",
              desc: "Une zone précise, une vidéo, un bouton d'action",
              icon: <Users className="h-5 w-5" />,
            },
            {
              value: "je-ne-sais-pas",
              label: "Je ne sais pas encore",
              desc: "Nous choisissons l'objectif ensemble",
              icon: <CircleHelp className="h-5 w-5" />,
            },
          ],
        }}
        titreEtape2="Où vous envoyer l'audit ?"
        boutonLabel="Recevoir ma réponse sous 24 h"
        calendlyLabel="ou réservez 30 min avec le fondateur"
        confirmation={{
          titre: "Demande bien reçue",
          texte: "Nous revenons vers vous sous 24 h avec un premier avis écrit. Pour en parler de vive voix, réservez un créneau.",
        }}
      />

      <PoleCTA
        titre="Un projet de campagne Facebook ou Instagram, une question sur votre budget ?"
        texte="Réservez 30 minutes, c'est gratuit et vous parlez au fondateur. Vous repartez avec un avis honnête et un ordre de grandeur."
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
