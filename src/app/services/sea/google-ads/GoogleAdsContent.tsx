import Link from "next/link";
import {
  Briefcase,
  CalendarDays,
  Check,
  CircleHelp,
  Coins,
  FileSearch,
  FileText,
  Gauge,
  Inbox,
  KeyRound,
  LayoutTemplate,
  PhoneCall,
  SearchX,
  ShieldCheck,
  ShoppingBag,
  Store,
  TrendingUp,
  Unlock,
  Wallet,
  Wrench,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import type { FaqItem } from "@/lib/faq-schema";
import { CHIFFRES_COMMUNS, getPole, LABEL_CALENDLY, SURTITRE_ZONE } from "@/data/poles";
import { BorderBeam, Reveal } from "@/components/motion";
import {
  CtaIntermediaire,
  DiagnosticInteractif,
  Engagements,
  FilAriane,
  FormulaireFinal,
  LienDiscret,
  PainPoints,
  PoleAutresPoles,
  PoleCTA,
  PoleFAQ,
  PoleHero,
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
import { getDiagnostic } from "@/lib/diagnostics/configs";
import MockSerp from "./MockSerp";

const DIAGNOSTIC = getDiagnostic("publicite-google-ads-pret-pour-google-ads")!;

const pole = getPole("publicite");
const estimateur = pole.outils[0];

/** URL de la page, conservée : mot-clé principal « agence Google Ads Paris ». */
export const URL_GOOGLE_ADS = "/services/sea/google-ads";

/** Pages sœurs du pôle (Meta Ads, et toute sous-page ajoutée dans poles.ts), la page courante exclue. */
const PAGES_SOEURS = pole.sousPages.filter((p) => p.href !== URL_GOOGLE_ADS);

/** Ancre du formulaire final : cible des CTA de la page et de la barre collante. */
const ANCRE_FORMULAIRE = "#formulaire";

export const FIL_ARIANE_GOOGLE_ADS: FilArianeElement[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: pole.nomCourt, href: pole.href },
  { label: "Google Ads" },
];

/** Trois points de réassurance du hero, tous vrais et tenus sur la page prix. */
const REASSURANCE_HERO = [
  "Audit de compte offert",
  "Compte Google Ads à votre nom",
  "Sans engagement de durée, 3 mois conseillés",
];

const SITUATIONS = [
  {
    icon: Wrench,
    titre: "Artisans et dépannage",
    texte:
      "Plombier, électricien, serrurier, chauffagiste : recherche urgente et locale. Le numéro cliquable et la zone au kilomètre font la différence.",
  },
  {
    icon: Briefcase,
    titre: "Cabinets et professions libérales",
    texte:
      "Avocat, expert-comptable, ostéopathe, architecte : la personne compare deux ou trois cabinets. Une page claire et des avis visibles décident.",
  },
  {
    icon: Store,
    titre: "Commerces et services de proximité",
    texte:
      "Garage, pressing, salon, auto-école, institut : des recherches « près de moi » chaque jour. Nous ciblons vos quartiers et vos horaires.",
  },
  {
    icon: ShoppingBag,
    titre: "Boutiques en ligne",
    texte:
      "Google Shopping affiche la photo et le prix avant le clic. Nous suivons le coût par commande et la valeur du panier, pas les clics.",
  },
];

/** Ancre propre à chaque carte (règle des ancres descriptives : pas quatre fois le même libellé). */
const CAMPAGNES: (PoleOffre & { ancre: string })[] = [
  {
    titre: "Campagnes Search",
    description:
      "Vos annonces texte s'affichent au-dessus des résultats quand quelqu'un tape votre métier et votre ville. La campagne de départ.",
    prix: "Sur devis",
    points: [
      "Mots-clés choisis d'après les recherches réelles de votre zone",
      "Extensions : appel, adresse, prix, liens vers vos pages",
    ],
    miseEnAvant: true,
    ancre: "Lancer une campagne Search",
  },
  {
    titre: "Google Shopping",
    description:
      "Pour une boutique en ligne : la photo, le prix et le nom de la boutique apparaissent dans les résultats, avant le clic.",
    prix: "Sur devis",
    points: [
      "Flux produits Merchant Center vérifié et corrigé",
      "Suivi du coût par commande et de la valeur du panier",
    ],
    ancre: "Parler de Google Shopping",
  },
  {
    titre: "Remarketing et Display",
    description:
      "Une bannière rappelle votre offre aux personnes qui ont visité votre site sans appeler.",
    prix: "Sur devis",
    points: [
      "Audiences construites depuis votre site et votre liste clients",
      "Toujours en complément d'une campagne Search",
    ],
    ancre: "Mettre en place le remarketing",
  },
  {
    titre: "Annonces locales et fiche Google",
    description:
      "Pour un commerce avec adresse : vos annonces s'affichent sur Google Maps et dans les recherches « près de moi ».",
    prix: "Sur devis",
    points: [
      "Fiche d'établissement Google reliée au compte",
      "Suivi des appels et des demandes d'itinéraire",
    ],
    ancre: "Relier ma fiche Google aux annonces",
  },
];

/** Vos 90 premiers jours : repères cohérents avec la FAQ (lecture des premières demandes dès la deuxième semaine, coût par demande stable après quatre à huit semaines de tests). */
const QUATRE_VINGT_DIX_JOURS = [
  {
    repere: "Jour 1",
    titre: "Diagnostic et audit de compte",
    texte:
      "Trente minutes, gratuites : votre métier, votre zone, votre panier moyen. Si vous avez déjà un compte, nous lisons ses termes de recherche et ses conversions. Si Google Ads a peu de chances d'être rentable, nous vous le disons.",
  },
  {
    repere: "Semaine 1",
    titre: "Mots-clés, structure et suivi des conversions",
    texte:
      "Sous 24 h, un plan et un devis écrits. Puis : compte à votre nom, mots-clés et exclusions, suivi des appels et des formulaires installé, annonces rédigées, page d'arrivée préparée.",
  },
  {
    repere: "Semaines 2 à 4",
    titre: "Lancement et nettoyage",
    texte:
      "Budget limité au départ. Chaque semaine, nous lisons les termes de recherche réels, excluons ce qui ne vous concerne pas et gardons les annonces qui apportent des demandes. Dès la deuxième semaine, nous lisons les premières demandes et coupons ce qui n'en apporte pas.",
  },
  {
    repere: "Mois 2 et 3",
    titre: "Enchères, horaires, zones",
    texte:
      "Avec des conversions comptées, nous ajustons enchères, horaires, zones et extensions, testons de nouvelles annonces et, si besoin, une page d'arrivée dédiée, jusqu'à un coût par demande stable.",
  },
  {
    repere: "Chaque mois",
    titre: "Rapport d'une page et décision",
    texte:
      "Budget dépensé, demandes reçues, coût par demande, mots-clés qui rapportent. Nous décidons ensemble : continuer, augmenter, ajouter Shopping ou le remarketing, ou arrêter.",
  },
];

export const FAQ_GOOGLE_ADS: FaqItem[] = [
  {
    q: "Quel budget minimum prévoir pour Google Ads ?",
    a: "Un budget média d'au moins 500 € par mois, réglé à Google depuis votre compte. En dessous, les campagnes reçoivent trop peu de clics pour distinguer les mots-clés qui rapportent de ceux qui coûtent. S'y ajoutent nos frais de gestion, fixés sur devis selon le nombre de campagnes et le travail de création.",
  },
  {
    q: "Combien coûte un clic sur Google Ads ?",
    a: "De moins d'un euro à plusieurs dizaines d'euros selon le métier et la ville : un serrurier ou un avocat à Paris paie ses clics bien plus cher qu'un fleuriste. Le coût du clic n'est pourtant pas le chiffre à suivre. Ce qui compte, c'est le coût par demande : le budget dépensé divisé par le nombre d'appels, de formulaires ou de commandes reçus. Notre estimateur gratuit vous en donne un ordre de grandeur avant tout engagement.",
  },
  {
    q: "Google Ads ou référencement naturel : que choisir ?",
    a: "Les deux ne s'opposent pas. Google Ads apporte des demandes dès les premières semaines, mais s'arrête quand le budget s'arrête. Le référencement naturel demande trois à six mois avant les premiers effets, puis apporte un trafic qui dure. Beaucoup de nos clients démarrent par Google Ads pour obtenir des demandes rapidement, et construisent leur SEO en parallèle avec notre pôle référencement.",
  },
  {
    q: "Google Ads ou Meta Ads : par quoi commencer ?",
    a: "Si vos clients tapent déjà votre métier dans Google (dépannage, artisan, avocat, dentiste, commerce), commencez par Google Ads : la demande existe, il faut la capter. Si votre offre se découvre par l'image ou si personne ne la cherche encore (restaurant, esthétique, nouveau produit), Meta Ads est souvent plus efficace. Nous préférons rendre une plateforme rentable avant d'en ajouter une deuxième.",
  },
  {
    q: "Au bout de combien de temps voit-on des demandes ?",
    a: "Les premières visites arrivent dès le lancement. Dès la deuxième semaine, nous lisons les premières demandes et coupons ce qui n'en apporte pas. Il faut ensuite quatre à huit semaines de tests pour nettoyer les termes de recherche, régler les enchères et stabiliser le coût par demande : d'où les trois mois conseillés avant de juger une campagne.",
  },
  {
    q: "Que contient l'audit de compte Google Ads offert ?",
    a: "Nous lisons la structure de vos campagnes, les termes de recherche qui ont réellement déclenché vos annonces, le suivi des conversions, les mots-clés qui dépensent sans apporter de demande et la page d'arrivée. Vous recevez un résumé écrit de ce qui fuit et de ce que nous changerions en premier, sans obligation de nous confier le compte. Sans compte existant, l'audit devient un diagnostic : type de campagne de départ, budget conseillé et ordre de grandeur du coût par demande.",
  },
  {
    q: "Performance Max, est-ce une bonne idée ?",
    a: "Performance Max laisse Google diffuser vos annonces partout (recherche, Shopping, YouTube, Gmail, Display) avec très peu de réglages possibles. C'est efficace pour une boutique en ligne avec un flux produits et des ventes comptées, et risqué pour un artisan ou un cabinet sans suivi fiable des conversions : la campagne optimise alors sur des clics ou des faux formulaires. Nous démarrons par une campagne Search lisible et ne proposons Performance Max qu'une fois les conversions correctement comptées.",
  },
  {
    q: "Le compte Google Ads m'appartient-il, et que se passe-t-il si j'arrête ?",
    a: "Oui. Le compte, l'historique, les audiences, les balises de conversion et la fiche Google reliée sont à votre nom ; nous y accédons par un accès administrateur que vous pouvez retirer à tout moment. Si vous arrêtez, nous mettons les campagnes en pause ou les laissons tourner selon votre choix, puis nous retirons nos accès. Vous pouvez reprendre la main vous-même ou confier le compte à quelqu'un d'autre, sans rien recréer.",
  },
  {
    q: "Qui s'occupe de mon compte concrètement ?",
    a: "Le fondateur de l'agence, qui crée et gère lui-même les comptes Google Ads. Vous avez un seul interlocuteur, qui choisit les mots-clés, rédige les annonces, règle les enchères et vous envoie le rapport. Nous n'externalisons pas la gestion des campagnes.",
  },
  {
    q: "Faut-il un site ou une landing page pour faire du Google Ads ?",
    a: "Oui. L'annonce ne fait que la moitié du travail : la page d'arrivée doit être rapide, parler de la recherche tapée, afficher un numéro cliquable et un formulaire court. Si votre page actuelle ne convertit pas, nous l'adaptons ou nous créons une landing page dédiée via notre pôle création de site internet, avec une maquette gratuite avant tout engagement.",
  },
];

export default function GoogleAdsContent() {
  return (
    <div className="pt-16">
      <FilAriane elements={FIL_ARIANE_GOOGLE_ADS} />

      {/* Hero commun aux pages de service (PoleHero) : H1 et texte rendus côté serveur, page de résultats Google d'exemple en aside (annonce sponsorisée, entreprise fictive). */}
      <PoleHero
        surtitre={SURTITRE_ZONE}
        titre="Agence Google Ads à Paris : captez les clients qui cherchent déjà votre métier"
        motsCles={["Google Ads", "clients"]}
        texte={[
          "Quand quelqu'un tape « plombier Rueil-Malmaison » ou « avocat droit du travail Paris », il cherche un prestataire maintenant. Nos campagnes Google Ads (Search, Shopping, remarketing) placent votre annonce à ce moment précis, avec un suivi qui compte chaque appel et chaque formulaire.",
          "Compte à votre nom, campagnes réglées par le fondateur lui-même, et un seul chiffre à suivre chaque mois : le coût par demande.",
        ]}
        reassurance={REASSURANCE_HERO.slice(0, 3)}
        boutonPrimaire={{ href: ANCRE_FORMULAIRE, label: "Demander mon audit Google Ads gratuit" }}
        boutonSecondaire={{ href: SITE.calendly, label: LABEL_CALENDLY, external: true }}
        mention={
          <>
            Pas encore de compte ? Commencez par{" "}
            <Link href={estimateur.href} className="font-medium text-primary-texte underline-offset-4 hover:underline">
              estimer votre budget Google Ads et votre coût par demande
            </Link>{" "}
            avec notre outil gratuit.
          </>
        }
        chiffres={[...CHIFFRES_COMMUNS, { valeur: "24 h", libelle: "pour un plan et un devis écrits" }]}
        aside={<MockSerp compact />}
        asideRelief
        asideMobile
      />

      {/* Diagnostic interactif du pôle, juste après le hero (contenu : src/lib/diagnostics/configs/publicite.ts). */}
      <SectionOutil badge="Diagnostic gratuit" titre={DIAGNOSTIC.titre} accroche={DIAGNOSTIC.accroche} obtenez={DIAGNOSTIC.obtenez} fond="gris">
        <DiagnosticInteractif diagnostic={DIAGNOSTIC} page="/services/sea/google-ads" />
      </SectionOutil>

      {/* Pour qui : quatre situations où Google Ads est rentable. */}
      <section id="pour-qui" className="bg-background py-16 sm:py-20">
        <Conteneur>
          <div className="mx-auto max-w-3xl text-center">
            <Surtitre>Pour qui, pour quel problème</Surtitre>
            <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">
              Google Ads pour un artisan, un cabinet, un commerce ou une boutique en ligne : quand est-ce rentable ?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Google Ads est rentable quand des gens cherchent déjà ce que vous vendez et qu&apos;une demande vaut nettement
              plus que ce qu&apos;elle coûte. Quatre situations où nous le conseillons le plus souvent.
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
            Nous accompagnons surtout des artisans, des commerces, des indépendants et des petites équipes, depuis
            Rueil-Malmaison (92), dans les Hauts-de-Seine et comme{" "}
            <Link href={pole.pageVille.href} className="font-medium text-primary-texte underline-offset-4 hover:underline">
              agence web à Paris
            </Link>
            . Un compte Google Ads se pilote à distance : nous travaillons aussi partout en France.
          </p>
        </Conteneur>
      </section>

      <Reveal y={16}>
        <PainPoints
          id="constat"
          surtitre="Le constat"
          titre="Trois raisons pour lesquelles un compte Google Ads dépense sans rapporter"
          intro="Ce que nous trouvons le plus souvent en auditant un compte existant, géré par une agence ou par vous-même."
          points={[
            {
              icon: SearchX,
              titre: "Des clics sur des recherches hors sujet",
              texte:
                "Mots-clés en requête large jamais nettoyés : vous payez des clics sur « emploi », « formation », « gratuit » ou une ville où vous n'intervenez pas.",
            },
            {
              icon: Gauge,
              titre: "Aucune conversion comptée",
              texte:
                "Sans suivi des appels et des formulaires, Google optimise sur les clics et vous ne savez pas ce que coûte une demande. Les campagnes automatiques tournent à l'aveugle.",
            },
            {
              icon: LayoutTemplate,
              titre: "Une page d'arrivée qui ne fait rien",
              texte:
                "L'annonce envoie sur la page d'accueil : pas de numéro cliquable, pas de formulaire, un texte qui ne répond pas à la recherche tapée. Le clic est payé, pas la demande.",
            },
          ]}
        />
      </Reveal>

      {/* Les types de campagnes : quatre cartes, une mise en avant (seule BorderBeam de l'écran). */}
      <PoleSection
        id="campagnes"
        surtitre="Ce que nous faisons"
        titre={"Search, Shopping, remarketing ou annonces locales : quel type de campagne Google Ads pour votre activité ?"}
        intro="Nous démarrons avec un seul type de campagne, celui qui correspond à la façon dont vos clients vous cherchent, et n'en ajoutons un second que lorsque le premier est rentable."
      >
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CAMPAGNES.map((offre, i) => (
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
                      Le plus souvent
                    </span>
                  )}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-foreground">{offre.titre}</h3>
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
          Votre page d&apos;arrivée ne convertit pas ? Notre pôle création de site conçoit des{" "}
          <Link
            href="/services/sites-web/landing-page"
            className="font-medium text-primary-texte underline-offset-4 hover:underline"
          >
            landing pages orientées conversion
          </Link>
          , avec une{" "}
          <Link href="/demande-maquette" className="font-medium text-primary-texte underline-offset-4 hover:underline">
            maquette gratuite
          </Link>{" "}
          avant tout engagement.
        </p>
      </PoleSection>

      {/* Notre méthode : vos 90 premiers jours, sur fond sombre (premier des deux blocs sombres). */}
      <SectionSombre
        id="methode"
        surtitre="Notre méthode"
        titre="Vos 90 premiers jours : comment montons-nous une campagne Google Ads ?"
        intro="Cinq repères dans le temps, chacun avec quelque chose que vous pouvez vérifier dans votre compte."
      >
        <Reveal y={16}>
          <Timeline etapes={QUATRE_VINGT_DIX_JOURS} sombre />
        </Reveal>
      </SectionSombre>

      <PolePreuve
        id="preuve"
        surtitre="Ce que vous pouvez vérifier"
        titre="Nous appliquons à nos propres comptes ce que nous vous proposons"
        texte={[
          "Le suivi des conversions Google Ads est installé sur notre propre site, avec Google Tag Manager et le Consent Mode : chaque demande reçue depuis une annonce est comptée, comme chez vous.",
          "Depuis le 4 septembre 2026, ConvertiLab fait aussi tourner sa propre campagne Meta Ads à 36 € par jour. Les demandes arrivent dans notre CRM et nous appliquons la même règle que sur Google Ads : lire les chiffres chaque semaine, couper ce qui coûte trop cher.",
          "Nous ne publions pas de résultats chiffrés de clients : un coût par demande dépend du métier, de la zone, de la concurrence et de la saison. Nous en estimons un ordre de grandeur avec vous avant le premier euro dépensé.",
        ]}
        note="Le suivi des conversions, le gestionnaire de publicités et le CRM peuvent vous être montrés en visio."
        lien={{ href: estimateur.href, label: "Estimer votre coût par demande avec notre estimateur gratuit" }}
        aside={
          <Reveal y={16}>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.18)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-purple-700">Nos propres outils</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">Ce que vous pouvez vérifier lors de l&apos;appel</h3>
              <ul className="mt-5 space-y-4">
                {[
                  {
                    icon: Gauge,
                    titre: "Le suivi des conversions de notre site",
                    texte: "Balise Google Ads, Tag Manager et Consent Mode installés, comme chez vous.",
                  },
                  {
                    icon: CalendarDays,
                    titre: "Notre campagne publicitaire",
                    texte: "Meta Ads, lancée le 4 septembre 2026, 36 € par jour.",
                  },
                  {
                    icon: Inbox,
                    titre: "Les demandes dans notre CRM",
                    texte: "Chaque demande arrive dans Pipedrive et déclenche nos relances.",
                  },
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
            </div>
          </Reveal>
        }
      />

      <CtaIntermediaire
        id="cta-audit"
        titre="Combien vous coûte une demande sur Google Ads aujourd'hui ?"
        texte="Si vous ne savez pas répondre, c'est le premier chiffre que nous établissons ensemble, gratuitement, à partir de votre compte ou de votre marché."
        bouton={{ href: ANCRE_FORMULAIRE, label: "Demander mon audit Google Ads gratuit" }}
        alternativeLabel="ou appelez-nous au"
      />

      {/* Second bloc sombre : les engagements « zéro risque à nous tester ». */}
      <SectionSombre
        id="engagements"
        surtitre="Nos engagements"
        titre="Zéro risque à nous tester : six engagements écrits sur le devis"
        intro="Ils ne promettent pas un résultat mais une façon de travailler."
      >
        <Reveal y={16}>
          <Engagements
            variante="sombre"
            items={[
              {
                icon: FileSearch,
                titre: "Audit de compte offert",
                texte: "Avant tout devis, nous lisons vos termes de recherche et vos conversions.",
              },
              {
                icon: KeyRound,
                titre: "Vous restez propriétaire",
                texte: "Compte, historique, audiences, balises de conversion : tout est à votre nom.",
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
                texte: "Si Google Ads a peu de chances d'être rentable pour vous, nous vous le disons.",
              },
            ]}
          />
        </Reveal>
      </SectionSombre>

      <Reveal y={16}>
        <PolePrix
          id="prix"
          surtitre="Prix et engagement"
          titre="Combien coûte une agence Google Ads à Paris ?"
          intro="Deux lignes distinctes sur votre devis : le budget média, réglé à Google depuis votre compte, et nos frais de gestion, fixes. Aucune commission sur le budget média."
          lignes={[
            {
              libelle: "Frais de gestion",
              valeur: "Sur devis",
              detail: "Selon le nombre de campagnes, le budget et le travail de création. Prix fixe écrit après le diagnostic gratuit.",
            },
            {
              libelle: "Budget média conseillé",
              valeur: "Dès 500 €/mois",
              detail: "Réglé directement à Google. Un clic coûte de moins d'un euro à plusieurs dizaines d'euros selon le métier et la ville.",
            },
            {
              libelle: "Engagement",
              valeur: "Sans engagement de durée",
              detail: "Pause ou arrêt quand vous le souhaitez. 3 mois conseillés pour obtenir un coût par demande stable.",
            },
          ]}
          lien={{ href: ANCRE_FORMULAIRE, label: "Recevoir un devis pour vos campagnes Google Ads" }}
          note="TVA non applicable, art. 293 B du CGI. Le devis est écrit et validé avant tout lancement."
        />
      </Reveal>

      <PoleFAQ
        id="faq"
        surtitre="FAQ"
        titre="Vos questions sur Google Ads et notre agence à Paris"
        items={FAQ_GOOGLE_ADS}
        lien={{ href: "/contact", label: "Poser une autre question" }}
      />

      {/* Maillage : le hub du pôle, les pages sœurs (depuis poles.ts) et l'outil gratuit. */}
      <PoleSection
        id="pole-publicite"
        surtitre="Le pôle publicité en ligne"
        titre="Google Ads fait partie de notre pôle publicité : les autres plateformes et les outils liés"
        intro="Une seule règle : commencer là où vos clients sont déjà, et n'ajouter une deuxième plateforme que lorsque la première est rentable."
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              titre: "Le pôle publicité en ligne",
              texte: "Google Ads, Meta Ads, TikTok, Pinterest et LinkedIn Ads : la vue d'ensemble du pôle.",
              lien: { href: pole.href, label: pole.ancre },
            },
            ...PAGES_SOEURS.map((p) => ({
              titre: p.label,
              texte:
                p.href === "/services/sea/meta-ads"
                  ? "Facebook et Instagram pour toucher des personnes qui ne vous cherchent pas encore."
                  : "Même méthode, même suivi du coût par demande.",
              lien: p,
            })),
            {
              titre: "Estimateur de budget publicitaire",
              texte: "Budget et coût par demande pour votre métier, estimés en 2 minutes.",
              lien: estimateur,
            },
          ].map((carte, i) => (
            <li key={carte.lien.href}>
              <Reveal
                delay={i * 0.06}
                y={16}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_16px_32px_-16px_rgba(15,23,42,0.18)] motion-reduce:transition-none"
              >
                <h3 className="font-semibold text-foreground">{carte.titre}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{carte.texte}</p>
                <div className="mt-auto pt-5">
                  <LienDiscret href={carte.lien.href} label={carte.lien.label} className="text-sm font-semibold" />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </PoleSection>

      <PoleAutresPoles
        slug="publicite"
        surtitre="Nos autres pôles"
        titre="Nos trois autres pôles pour trouver vos clients"
        intro="Un site qui convertit, un référencement qui dure et une IA qui répond la nuit rendent chaque euro de Google Ads plus rentable."
      />

      <FormulaireFinal
        id="formulaire"
        pole="publicite"
        page={URL_GOOGLE_ADS}
        surtitre="Audit Google Ads gratuit"
        titre="Demandez votre audit de compte Google Ads gratuit"
        intro="Vous avez déjà un compte : nous l'auditons. Vous partez de zéro : nous estimons un budget et un coût par demande. Réponse écrite sous 24 h, sans engagement."
        question={{
          libelle: "Quel budget média mensuel envisagez-vous pour Google Ads ?",
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
              desc: "Une campagne Search, bien réglée",
              icon: <Wallet className="h-5 w-5" />,
            },
            {
              value: "plus-de-1500",
              label: "Plus de 1 500 €",
              desc: "Search, Shopping ou remarketing",
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
          texte: "Nous revenons vers vous sous 24 h avec un premier avis écrit. Pour en parler de vive voix, réservez directement un créneau.",
        }}
      />

      <PoleCTA
        titre="Un projet de campagne Google Ads, une question sur votre budget ?"
        texte="Réservez 30 minutes, c'est gratuit et vous parlez au fondateur. Vous repartez avec un avis honnête et un ordre de grandeur de budget."
        calendlyLabel={LABEL_CALENDLY}
        contactLabel="Écrire à l'agence"
        afficherTelephone
      />

      <StickyCtaBar
        label="Audit Google Ads gratuit"
        href={ANCRE_FORMULAIRE}
        mentions={["Gratuit", "Sans engagement", "Réponse sous 24 h"]}
        formulaireId="formulaire"
      />
    </div>
  );
}
