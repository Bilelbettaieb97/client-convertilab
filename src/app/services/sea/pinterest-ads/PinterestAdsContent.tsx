import Link from "next/link";
import {
  Cake,
  CircleHelp,
  Gem,
  Heart,
  Home,
  Image as ImageIcon,
  PackageSearch,
  Search,
  ShoppingBag,
  Sparkles,
  Store,
  Timer,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import type { FaqItem } from "@/lib/faq-schema";
import { CHIFFRES_COMMUNS, getPole, LABEL_CALENDLY, SURTITRE_ZONE } from "@/data/poles";
import { Reveal } from "@/components/motion";
import {
  CtaIntermediaire,
  DiagnosticInteractif,
  FilAriane,
  FormulaireFinal,
  PainPoints,
  PoleAutresPoles,
  PoleCTA,
  PoleFAQ,
  PoleHero,
  PoleLivrables,
  PoleOffres,
  PolePreuve,
  PolePrix,
  PoleSection,
  PourQui,
  SectionOutil,
  SectionSombre,
  StickyCtaBar,
  Timeline,
  type FilArianeElement,
  type PoleOffre,
} from "@/components/pole";
import { getDiagnostic } from "@/lib/diagnostics/configs";
import MockGrilleEpingles from "./MockGrilleEpingles";

const DIAGNOSTIC = getDiagnostic("publicite-pinterest-ads-est-il-fait-pour-vous")!;

const pole = getPole("publicite");
const [googleAds, metaAds] = pole.sousPages;
const estimateur = pole.outils[0];

/** Chemin de la page, repris par les metadata, le JSON-LD et le formulaire. */
export const URL_PINTEREST_ADS = "/services/sea/pinterest-ads";

/** Ancre du formulaire final : cible des CTA de la page et de la barre collante. */
const ANCRE_FORMULAIRE = "#formulaire";

export const FIL_ARIANE_PINTEREST: FilArianeElement[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: pole.nomCourt, href: pole.href },
  { label: "Pinterest Ads" },
];

/** Trois points de réassurance du hero, tous vrais et repris sur la page prix. */
const REASSURANCE_HERO = [
  "Audit de compte offert",
  "Compte, tag et catalogue à votre nom",
  "Sans engagement de durée, 3 mois conseillés",
];

/** Secteurs pour lesquels Pinterest est un canal cohérent : décoration, mariage, mode, artisanat, DIY, alimentaire, e-commerce visuel. */
const SECTEURS = [
  {
    icon: Home,
    titre: "Décoration, maison, jardin",
    texte: "Mobilier, luminaires, textile : on prépare une pièce entière sur Pinterest avant d'acheter.",
  },
  {
    icon: Heart,
    titre: "Mariage et événements",
    texte: "Robes, alliances, fleurs, photographes : un mariage se planifie des mois à l'avance, épingle par épingle.",
  },
  {
    icon: Gem,
    titre: "Mode, bijoux, beauté",
    texte: "Tenues, accessoires, soins : l'inspiration devient un achat quand l'épingle mène à la fiche produit.",
  },
  {
    icon: ShoppingBag,
    titre: "Artisanat, alimentaire, e-commerce visuel",
    texte: "Céramique, coffrets, épicerie fine : toute boutique dont les produits se choisissent à l'image, avec un catalogue à jour.",
  },
];

const PRESTATIONS: PoleOffre[] = [
  {
    titre: "Épingles sponsorisées",
    description:
      "Images, vidéos courtes, carrousels et collections diffusés dans le fil et dans les résultats de recherche Pinterest.",
    points: [
      "Formats verticaux conçus pour Pinterest, pas des visuels recyclés",
      "Plusieurs épingles testées en parallèle, les plus chères coupées",
      "Textes et titres rédigés autour des mots-clés recherchés",
    ],
    miseEnAvant: true,
  },
  {
    titre: "Catalogue et épingles produit",
    description:
      "Votre catalogue relié à Pinterest : chaque fiche produit devient une épingle achetable, avec prix, disponibilité et lien vers votre boutique.",
    points: [
      "Flux produit depuis Shopify, WooCommerce, PrestaShop ou un fichier",
      "Groupes de produits par collection, saison ou marge",
      "Campagnes shopping et relance des visiteurs d'un produit",
    ],
  },
  {
    titre: "Ciblage par mots-clés et centres d'intérêt",
    description:
      "Pinterest est un moteur de recherche visuel : nous choisissons les mots-clés, les centres d'intérêt et les audiences avant le premier euro dépensé.",
    points: [
      "Requêtes de votre secteur et leur saisonnalité",
      "Audiences de visiteurs, de clients et audiences similaires",
      "Exclusion de ce qui ne vous concerne pas",
    ],
  },
  {
    titre: "Tag Pinterest et suivi des conversions",
    description:
      "Sans mesure, impossible de savoir ce que rapporte une épingle. Tag Pinterest et événements sont installés sur votre site avant tout lancement.",
    points: [
      "Vue produit, ajout au panier, achat ou demande de devis",
      "Coût par commande ou par demande suivi chaque semaine",
      "Rapproché de vos ventes réelles, pas seulement des clics",
    ],
  },
];

/** Vos 90 premiers jours : repères temporels cohérents avec la FAQ (Pinterest met plus de temps que Google Ads à livrer ses premiers résultats). */
const QUATRE_VINGT_DIX_JOURS = [
  {
    repere: "Jour 1",
    titre: "Diagnostic et audit de compte",
    texte:
      "Trente minutes, gratuites : vos produits, votre panier moyen, vos marges, votre saisonnalité. Compte existant audité. Si Pinterest n'est pas fait pour vous, nous le disons.",
  },
  {
    repere: "Semaine 1",
    titre: "Plan et devis écrits, mise en place",
    texte:
      "Sous 24 h : mots-clés de départ, budget média, coût par commande visé, frais de gestion. Puis compte à votre nom, tag, catalogue et premières épingles.",
  },
  {
    repere: "Semaines 2 à 4",
    titre: "Lancement et tests",
    texte:
      "Plusieurs épingles et groupes de mots-clés tournent avec un budget limité. Nous regardons ce qui est enregistré, cliqué et acheté, et coupons ce qui coûte cher.",
  },
  {
    repere: "Mois 2 et 3",
    titre: "Optimisation chaque semaine",
    texte:
      "Enchères, mots-clés à exclure, nouvelles épingles, groupes de produits : ajustés à partir des chiffres réels, jusqu'à un coût par commande stable.",
  },
  {
    repere: "Chaque mois",
    titre: "Rapport d'une page et décision",
    texte:
      "Budget dépensé, commandes reçues, coût par commande. Nous décidons ensemble de continuer, d'augmenter ou d'arrêter.",
  },
];

/** Ce qui change entre Pinterest Ads, Google Ads et Meta Ads : trois moments de la décision d'achat. */
const MOMENTS = [
  {
    icon: Sparkles,
    plateforme: "Pinterest Ads",
    moment: "Avant la décision",
    texte:
      "La personne cherche des idées : « salle de bain bois et blanc », « robe de mariée dos nu ». Aucune marque choisie. Votre épingle entre dans son projet et peut y rester des semaines.",
  },
  {
    icon: Search,
    plateforme: "Google Ads",
    moment: "Au moment de la décision",
    texte:
      "La personne sait ce qu'elle veut et compare : « acheter table chêne massif ». Le clic coûte souvent plus cher, la demande est immédiate.",
  },
  {
    icon: ImageIcon,
    plateforme: "Meta Ads",
    moment: "Sans recherche préalable",
    texte:
      "Facebook et Instagram montrent votre produit à des personnes qui ne cherchaient rien. Utile pour faire connaître une offre, moins pour capter une intention.",
  },
];

export const FAQ_PINTEREST: FaqItem[] = [
  {
    q: "Pinterest Ads est-il fait pour mon activité ?",
    a: "Si vos produits se choisissent à l'image et s'achètent après réflexion (décoration, mariage, mode, bijoux, artisanat, alimentaire, cadeaux), oui. Si vous vendez un service urgent (dépannage, avocat, dentiste) ou à des entreprises, non : Google Ads ou LinkedIn Ads seront plus rentables. Nous vous le disons lors du diagnostic gratuit, avant tout devis.",
  },
  {
    q: "Quel budget prévoir pour des campagnes Pinterest ?",
    a: "Un budget média d'au moins 500 € par mois, réglé directement à Pinterest depuis votre compte. En dessous, la campagne n'a pas assez de données pour que nous puissions couper ce qui ne marche pas. S'y ajoutent nos frais de gestion, fixés sur devis selon le travail de création et le nombre de plateformes.",
  },
  {
    q: "Au bout de combien de temps voit-on des commandes ?",
    a: "Plus tard que sur Google Ads. Pinterest touche des personnes en phase d'inspiration : les premiers clics arrivent dès le lancement, les premières commandes généralement après plusieurs semaines, et une épingle continue souvent de travailler bien après la fin de sa diffusion payante. D'où les trois mois conseillés avant de juger.",
  },
  {
    q: "Faut-il une boutique en ligne pour faire de la publicité sur Pinterest ?",
    a: "Pour les épingles produit et le catalogue, oui. Pour des épingles sponsorisées qui mènent vers une page de demande de devis (photographe de mariage, décorateur, traiteur), une page claire avec un formulaire suffit. Si votre page ne convertit pas, notre pôle création de site internet prépare une landing page dédiée.",
  },
  {
    q: "Devons-nous fournir les visuels ?",
    a: "Vous fournissez vos photos produit et vos droits d'utilisation. Nous adaptons les visuels au format vertical de Pinterest, ajoutons les textes et les titres, montons les vidéos courtes à partir de vos images et testons plusieurs versions. Si vos photos ne sont pas exploitables, nous vous le disons avant de lancer.",
  },
  {
    q: "Le compte Pinterest et le tag m'appartiennent-ils ?",
    a: "Oui. Le compte professionnel, le tag Pinterest, le catalogue et l'historique des campagnes sont créés à votre nom, avec vos identifiants. Nous intervenons avec un accès partenaire que vous pouvez retirer à tout moment, sans rien perdre.",
  },
  {
    q: "Comment mesurez-vous ce que rapporte Pinterest ?",
    a: "Par le tag Pinterest installé sur votre site : vues de produit, ajouts au panier, achats ou demandes. Chaque mois, vous voyez le budget dépensé, le nombre de commandes ou de demandes et le coût par commande, à comparer à votre marge. Nous précisons aussi les conversions attribuées après une simple vue de l'épingle, que Pinterest compte différemment d'un clic.",
  },
  {
    q: "Peut-on combiner Pinterest avec Google Ads ou Meta Ads ?",
    a: "Oui, et c'est souvent la bonne suite : Pinterest fait entrer votre produit dans le projet d'achat, Google Ads capte la recherche au moment de la décision, Meta Ads relance ceux qui ont visité votre boutique. Nous démarrons toutefois avec une seule plateforme et n'en ajoutons une deuxième que lorsque la première est rentable.",
  },
];

export default function PinterestAdsContent() {
  return (
    <div className="pt-16">
      <FilAriane elements={FIL_ARIANE_PINTEREST} />

      {/* Hero commun aux pages de service (src/components/pole/PoleHero.tsx) : H1 dans le HTML, grille d'épingles en aside. */}
      <PoleHero
        surtitre={SURTITRE_ZONE}
        titre="Agence Pinterest Ads : des épingles sponsorisées qui entrent dans le projet d'achat de vos clients"
        motsCles={["Pinterest Ads", "épingles sponsorisées"]}
        texte="Décoration, mariage, mode, artisanat, alimentaire, e-commerce visuel : sur Pinterest, vos clients cherchent des idées des semaines avant d'acheter. Nous plaçons vos produits à ce moment-là, avec un catalogue relié, un tag installé et un seul chiffre à suivre : le coût par commande. Vous parlez au fondateur, qui règle lui-même vos campagnes."
        reassurance={REASSURANCE_HERO}
        boutonPrimaire={{ href: ANCRE_FORMULAIRE, label: "Demander mon audit Pinterest gratuit" }}
        boutonSecondaire={{ href: SITE.calendly, label: LABEL_CALENDLY, external: true }}
        mention={
          <>
            Pas encore de budget en tête ? Commencez par{" "}
            <Link href={estimateur.href} className="font-medium text-primary-texte underline-offset-4 hover:underline">
              estimer votre budget publicitaire
            </Link>{" "}
            avec notre outil gratuit.
          </>
        }
        chiffres={[...CHIFFRES_COMMUNS, { valeur: "24 h", libelle: "pour un plan et un devis écrits" }]}
        aside={<MockGrilleEpingles compact />}
        asideRelief
        asideMobile
      />

      {/* Diagnostic interactif du pôle, juste après le hero (contenu : src/lib/diagnostics/configs/publicite.ts). */}
      <SectionOutil badge="Diagnostic gratuit" titre={DIAGNOSTIC.titre} accroche={DIAGNOSTIC.accroche} obtenez={DIAGNOSTIC.obtenez} fond="blanc">
        <DiagnosticInteractif diagnostic={DIAGNOSTIC} page="/services/sea/pinterest-ads" />
      </SectionOutil>

      <Reveal y={16}>
        <PainPoints
          id="constat"
          surtitre="Le constat"
          titre="Si vos produits se vendent à l'image, ces trois situations vous parlent sûrement"
          intro="Les trois problèmes que nous rencontrons le plus souvent chez les boutiques et les créateurs qui nous parlent de Pinterest."
          points={[
            {
              icon: Timer,
              titre: "Vous arrivez trop tard dans la décision",
              texte:
                "Sur Google, la personne a déjà choisi le style, la matière, parfois la marque. Sur Pinterest, elle compose encore son projet.",
            },
            {
              icon: PackageSearch,
              titre: "Vous publiez des épingles sans rien mesurer",
              texte:
                "Un compte ouvert, quelques épingles, aucun tag sur le site, pas de catalogue relié. Impossible de savoir ce qui a été acheté, donc d'investir.",
            },
            {
              icon: Store,
              titre: "Vous dépendez de Meta et de Google pour vendre",
              texte:
                "Quand le coût par commande grimpe sur Facebook et Instagram, vous n'avez pas d'autre canal. Pinterest en ouvre un, souvent moins disputé.",
            },
          ]}
        />
      </Reveal>

      {/* Pour qui : les secteurs où Pinterest est un canal cohérent. */}
      <PoleSection
        id="pour-qui"
        surtitre="Pour qui, pour quel produit"
        titre="Publicité Pinterest : pour quelles activités est-ce rentable ?"
        intro="Pinterest sert à préparer un achat que l'on réfléchit et que l'on visualise, parfois pendant des mois. Voici les secteurs pour lesquels nous acceptons de lancer une campagne."
      >
        <Reveal y={16}>
          <PoleLivrables livrables={SECTEURS} colonnes={2} />
        </Reveal>
        <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Nous accompagnons surtout des commerces, des créateurs et des petites équipes, depuis Rueil-Malmaison (92) et
          comme{" "}
          <Link href={pole.pageVille.href} className="font-medium text-primary-texte underline-offset-4 hover:underline">
            agence web à Paris
          </Link>
          , et partout en France en visio.
        </p>
      </PoleSection>

      {/* Ce que nous faisons : quatre prestations, une carte mise en avant. */}
      <PoleSection
        id="prestations"
        fond="gris"
        surtitre="Ce que nous faisons"
        titre="Que fait une agence Pinterest Ads pour votre boutique ou votre marque ?"
        intro="Quatre briques : mesurer, relier le catalogue, choisir les mots-clés, créer et tester les épingles. Frais de gestion sur devis, budget média conseillé dès 500 € par mois."
      >
        <Reveal y={16}>
          <PoleOffres offres={PRESTATIONS} colonnes={2} />
        </Reveal>
        <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Si vos fiches produit ne sont pas prêtes à recevoir du trafic payant, nous vous le disons avant tout lancement :
          vous pouvez{" "}
          <Link href="/demande-maquette" className="font-medium text-primary-texte underline-offset-4 hover:underline">
            demander une maquette gratuite de page d&apos;arrivée
          </Link>{" "}
          conçue pour transformer vos visiteurs en commandes.
        </p>
      </PoleSection>

      {/* Notre méthode : vos 90 premiers jours, sur fond sombre (premier des deux blocs sombres). */}
      <SectionSombre
        id="methode"
        surtitre="Notre méthode"
        titre="Vos 90 premiers jours sur Pinterest : comment travaillons-nous vos campagnes ?"
        intro="Cinq repères dans le temps, chacun avec un résultat que vous pouvez vérifier."
      >
        <Reveal y={16}>
          <Timeline etapes={QUATRE_VINGT_DIX_JOURS} sombre />
        </Reveal>
      </SectionSombre>

      {/* Pinterest face à Google et Meta : trois moments de la décision d'achat. */}
      <PoleSection
        id="moments"
        fond="gris"
        surtitre="Pinterest, Google ou Meta"
        titre="Pinterest Ads, Google Ads ou Meta Ads : à quel moment de l'achat intervenez-vous ?"
        intro="Les trois plateformes touchent la même personne à trois moments différents. C'est ce moment qui décide de la plateforme de départ."
      >
        <ul className="grid gap-6 md:grid-cols-3">
          {MOMENTS.map((m, i) => {
            const Icon = m.icon;
            return (
              <li key={m.plateforme}>
                <Reveal
                  delay={i * 0.08}
                  y={16}
                  className={`flex h-full flex-col rounded-2xl border bg-card p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-16px_rgba(15,23,42,0.18)] motion-reduce:transition-none ${
                    i === 0 ? "border-primary/40" : "border-border"
                  }`}
                >
                  <span
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-purple-700">{m.moment}</p>
                  <h3 className="mt-1 text-xl font-semibold text-foreground">{m.plateforme}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.texte}</p>
                </Reveal>
              </li>
            );
          })}
        </ul>
        <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Pinterest est une des cinq plateformes de notre{" "}
          <Link href={pole.href} className="font-medium text-primary-texte underline-offset-4 hover:underline">
            pôle Publicité en ligne
          </Link>
          . Vos clients tapent déjà votre produit dans Google ? Regardez notre{" "}
          <Link href={googleAds.href} className="font-medium text-primary-texte underline-offset-4 hover:underline">
            agence Google Ads à Paris
          </Link>
          . Vous voulez faire connaître une offre à un quartier ou à une ville ? Notre{" "}
          <Link href={metaAds.href} className="font-medium text-primary-texte underline-offset-4 hover:underline">
            agence Meta Ads (Facebook et Instagram)
          </Link>{" "}
          est souvent le bon départ.
        </p>
      </PoleSection>

      <PolePreuve
        id="preuve"
        surtitre="Ce que vous pouvez vérifier"
        titre="Nous testons nos méthodes sur nos propres campagnes avant de les appliquer aux vôtres"
        texte={[
          "Depuis le 4 septembre 2026, ConvertiLab fait tourner sa propre campagne Meta Ads à 36 € par jour. Les demandes arrivent dans notre CRM et déclenchent nos relances, comme pour un client. La règle est la même sur Pinterest : mesurer avant de dépenser, tester plusieurs créations, couper ce qui coûte trop cher.",
          "Nous ne faisons pas de publicité Pinterest pour notre propre agence : nos services ne se choisissent pas à l'image. C'est le même tri que nous faisons pour vous lors du diagnostic.",
          "Nous ne publions pas de résultats chiffrés de clients : un coût par commande dépend du produit, de la marge, de la saison et des visuels. Nous estimons un ordre de grandeur avec vous avant le premier euro dépensé.",
        ]}
        note="Campagne Meta diffusée en France. Les demandes reçues sont visibles dans notre CRM interne."
        lien={{ href: estimateur.href, label: "Estimer votre coût par commande avec notre estimateur gratuit" }}
      />

      <CtaIntermediaire
        id="cta-audit"
        titre="Combien vous coûte une commande aujourd'hui ?"
        texte="Si vous ne savez pas répondre, c'est le premier chiffre que nous établissons ensemble, gratuitement."
        bouton={{ href: ANCRE_FORMULAIRE, label: "Demander mon audit Pinterest gratuit" }}
        alternativeLabel="ou appelez-nous au"
      />

      <Reveal y={16}>
        <PourQui
          id="transparence"
          surtitre="Transparence"
          titre="Nous préférons vous dire non que vous faire dépenser trois mois de budget sur la mauvaise plateforme"
          pour={{
            titre: "C'est fait pour vous si...",
            items: [
              "Vos produits se choisissent à l'image et s'achètent après réflexion.",
              "Vous avez une boutique en ligne ou une page de demande claire, avec de bonnes photos.",
              "Votre marge par commande couvre un coût d'acquisition de plusieurs dizaines d'euros.",
            ],
          }}
          pasPour={{
            titre: "Ce n'est pas pour vous si...",
            items: [
              "Vous vendez un service urgent ou un produit que l'on ne prépare pas (dépannage, fournitures).",
              "Vous vendez à des entreprises : LinkedIn Ads ou Google Ads seront plus adaptés.",
              "Votre budget média est inférieur à 500 € par mois.",
            ],
          }}
          engagement={{
            titre: "Notre engagement, écrit noir sur blanc",
            texte:
              "Avant tout devis, nous vous disons si Pinterest est cohérent pour votre activité. Compte, tag et catalogue sont à votre nom. Le suivi des conversions est installé avant le premier euro dépensé. Chaque mois, vous recevez le budget dépensé, les commandes et le coût par commande. Aucune promesse de résultat : un engagement sur la méthode et la transparence.",
          }}
        />
      </Reveal>

      <Reveal y={16}>
        <PolePrix
          id="prix"
          surtitre="Prix et engagement"
          titre="Combien coûte une campagne Pinterest Ads avec notre agence ?"
          intro="Deux lignes sur votre devis : le budget média, qui va à Pinterest, et les frais de gestion, qui rémunèrent notre travail. Aucune commission sur le budget média."
          lignes={[
            {
              libelle: "Frais de gestion",
              valeur: "Sur devis",
              detail: "Selon le travail de création et la taille du catalogue. Prix fixe écrit après le diagnostic gratuit.",
            },
            {
              libelle: "Budget média conseillé",
              valeur: "Dès 500 €/mois",
              detail: "Réglé directement à Pinterest depuis votre compte.",
            },
            {
              libelle: "Engagement",
              valeur: "Sans engagement de durée",
              detail: "Pause ou arrêt quand vous le souhaitez. 3 mois conseillés pour obtenir un coût par commande stable.",
            },
          ]}
          lien={{ href: ANCRE_FORMULAIRE, label: "Recevoir un devis pour vos campagnes Pinterest" }}
          note="TVA non applicable, art. 293 B du CGI. Le devis est écrit et validé avant tout lancement."
        />
      </Reveal>

      <PoleFAQ
        id="faq"
        surtitre="FAQ"
        titre="Vos questions sur la publicité Pinterest"
        items={FAQ_PINTEREST}
        lien={{ href: "/contact", label: "Poser une autre question" }}
      />

      <PoleAutresPoles
        slug="publicite"
        surtitre="Nos autres pôles"
        titre="Nos trois autres pôles pour trouver vos clients"
        intro="Une boutique qui convertit, un référencement qui dure et une IA qui répond la nuit rendent chaque euro dépensé sur Pinterest plus rentable."
      />

      <FormulaireFinal
        id="formulaire"
        pole="publicite"
        page={URL_PINTEREST_ADS}
        surtitre="Audit Pinterest gratuit"
        titre="Demandez votre audit Pinterest gratuit"
        intro="Compte existant : nous l'auditons. Départ de zéro : nous vous disons si Pinterest est fait pour vos produits et estimons un budget. Réponse écrite sous 24 h, sans engagement."
        question={{
          libelle: "Que vendez-vous ?",
          aide: "Aucune coordonnée demandée à cette étape.",
          options: [
            {
              value: "decoration-maison",
              label: "Décoration, maison, jardin",
              icon: <Home className="h-5 w-5" />,
            },
            {
              value: "mariage-evenement",
              label: "Mariage, événements",
              icon: <Heart className="h-5 w-5" />,
            },
            {
              value: "mode-bijoux-beaute",
              label: "Mode, bijoux, beauté",
              icon: <Gem className="h-5 w-5" />,
            },
            {
              value: "artisanat-alimentaire",
              label: "Artisanat, alimentaire",
              icon: <Cake className="h-5 w-5" />,
            },
            {
              value: "autre-ecommerce",
              label: "Une autre boutique en ligne",
              desc: "Des produits qui se choisissent à l'image",
              icon: <ShoppingBag className="h-5 w-5" />,
            },
            {
              value: "je-ne-sais-pas",
              label: "Je ne sais pas si Pinterest est fait pour moi",
              desc: "Nous vous le dirons franchement",
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
        titre="Un projet de campagne Pinterest, une question sur votre budget ?"
        texte="Réservez 30 minutes, c'est gratuit et vous parlez au fondateur. Vous repartez avec un avis honnête sur Pinterest pour vos produits et un ordre de grandeur de budget."
        calendlyLabel={LABEL_CALENDLY}
        contactLabel="Écrire à l'agence"
        afficherTelephone
      />

      <StickyCtaBar
        label="Audit Pinterest gratuit"
        href={ANCRE_FORMULAIRE}
        mentions={["Gratuit", "Sans engagement", "Réponse sous 24 h"]}
        formulaireId="formulaire"
      />
    </div>
  );
}
