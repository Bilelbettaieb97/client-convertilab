import Link from "next/link";
import {
  BarChart3,
  CircleHelp,
  FileText,
  Gauge,
  Globe,
  Heart,
  Inbox,
  KeyRound,
  LayoutTemplate,
  Mail,
  MousePointerClick,
  PenLine,
  PhoneCall,
  Rocket,
  Search,
  Server,
  Smartphone,
  Target,
  Wrench,
} from "lucide-react";
import { PRICING, SITE } from "@/lib/constants";
import type { FaqItem } from "@/lib/faq-schema";
import { CHIFFRES_COMMUNS, getPole, LABEL_CALENDLY, SURTITRE_ZONE } from "@/data/poles";
import { caseStudies, fullCaseStudies, LIVE_SITES } from "@/data/case-studies";
import { Reveal } from "@/components/motion";
import {
  CtaIntermediaire,
  Engagements,
  FilAriane,
  FormulaireFinal,
  SectionOutil,
  PainPoints,
  PoleAutresPoles,
  PoleCTA,
  PoleFAQ,
  PoleHero,
  PoleLivrables,
  PolePreuve,
  PolePrix,
  PoleSection,
  SectionSombre,
  StickyCtaBar,
  Timeline,
  type FilArianeElement,
  type PoleCas,
} from "@/components/pole";
import DesignScoreForm from "@/components/design-score/DesignScoreForm";
import { MockLanding } from "../_illustrations/MockLanding";

/**
 * Sous-page « Landing page » du pôle création de site internet.
 * Tout le texte visible vit ici, rendu côté serveur. Les prix viennent de
 * PRICING, les cas réels de src/data/case-studies.ts, les liens de poles.ts.
 * Aucun chiffre de résultat client, aucune garantie, aucune rareté.
 */

const pole = getPole("sites-web");
const estimateur = pole.outils[0];

/** URL de la page, réutilisée par page.tsx pour le canonical et les JSON-LD. */
export const URL_LANDING_PAGE = "/services/sites-web/landing-page";

/** Ancre du formulaire final : cible des CTA de la page et de la barre collante. */
const ANCRE_FORMULAIRE = "#formulaire";

/* ── Prix : une seule source, PRICING ───────────────────────────────────── */

const euros = (montant: number) => `${montant.toLocaleString("fr-FR")}\u00a0€`;
/** « ou 45€/mois » devient « ou 45 €/mois », sans changer le chiffre. */
const mensualite = (texte: string) => texte.replace(/(\d)€/g, "$1\u00a0€");

const PRIX_LANDING = euros(PRICING.landing.from);
const PRIX_LANDING_DETAIL = `${mensualite(PRICING.landing.monthly)}, paiement étalé, pas d'abonnement`;
const PRIX_VITRINE = euros(PRICING.vitrine.from);
const DELAI_LANDING = "5 à 7 jours";

/** Première lettre en minuscule, pour insérer une ancre au milieu d'une phrase sans casser un nom propre. */
const minuscule = (texte: string) => texte.charAt(0).toLowerCase() + texte.slice(1);

/* ── Sous-pages sœurs et pages du pôle publicité ────────────────────────── */

const sousPage = (chemin: string) => {
  const lien = pole.sousPages.find((s) => s.href.endsWith(chemin));
  if (!lien) throw new Error(`Sous-page inconnue : ${chemin}`);
  return lien;
};

const siteVitrine = sousPage("/site-vitrine");
const refonte = sousPage("/refonte-site");
const publicite = getPole("publicite");
const [googleAds, metaAds] = publicite.sousPages;

export const FIL_ARIANE_LANDING: FilArianeElement[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: pole.nomCourt, href: pole.href },
  { label: "Landing page" },
];

/** Trois points de réassurance du hero, tous tenus sur la page prix. */
const REASSURANCE_HERO = ["Devis écrit sous 24 h", `Livrée en ${DELAI_LANDING}`, "Maquette validée avant le code"] as const;

/** Mots du H1 colorés avec le dégradé de la marque (présents tels quels dans le titre). */
const MOTS_CLES_HERO = ["landing page", "demandes"];

/** Landing page ou site vitrine : comparaison qualitative, sans taux de conversion inventé. */
const COMPARAISON = [
  { critere: "Objectif", vitrine: "Présenter l'activité, être trouvé sur Google", landing: "Une seule action : appel, devis ou réservation" },
  { critere: "Structure", vitrine: "Cinq pages ou plus, avec un menu", landing: "Une page, sans menu ni lien sortant" },
  { critere: "D'où viennent les visiteurs", vitrine: "Google, fiche Google, bouche-à-oreille", landing: "Annonces Google Ads, Meta Ads, emailing, QR code" },
  { critere: "Référencement naturel", vitrine: "Oui, c'est sa force", landing: "Limité : une seule page, souvent non indexée" },
  { critere: "Délai", vitrine: "2 semaines", landing: DELAI_LANDING },
  { critere: "Prix", vitrine: PRIX_VITRINE, landing: PRIX_LANDING },
];

/** Votre landing page en 5 à 7 jours : repères cohérents avec la FAQ et la page prix. */
const METHODE = [
  {
    repere: "Jour 1",
    titre: "Appel de 30 minutes",
    icon: PhoneCall,
    texte:
      "Votre offre, votre campagne, le client que vous voulez attirer et l'action attendue. Si un site vitrine vous servirait mieux qu'une landing page, nous vous le disons.",
  },
  {
    repere: "Sous 48 h",
    titre: "Maquette gratuite et devis écrit",
    icon: LayoutTemplate,
    texte:
      "Vous recevez une maquette de la page et un devis à prix fixe. Rien n'est construit tant que vous n'avez pas validé le design.",
  },
  {
    repere: "Jours 3 à 5",
    titre: "Textes, page et formulaire",
    icon: PenLine,
    texte:
      "Rédaction avec les mots de vos clients, intégration, formulaire relié à votre email ou à votre CRM, suivi des demandes installé. Vous relisez et validez.",
  },
  {
    repere: "Jours 5 à 7",
    titre: "Tests et mise en ligne",
    icon: Rocket,
    texte:
      "Test sur téléphone et ordinateur, envoi d'essai du formulaire, vérification du comptage des demandes, puis mise en ligne et transmission des accès.",
  },
  {
    repere: "Après le lancement",
    titre: "Ajustements avec la campagne",
    icon: Gauge,
    texte:
      "Les premières demandes disent ce qui fonctionne. Un titre, un bouton ou une question à corriger : c'est compris dans le prix.",
  },
];

/* ── Preuve : cas réels depuis case-studies.ts uniquement ───────────────── */

const casReel = (slug: string, prestation: string, ancre: string): PoleCas[] => {
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs || !cs.testimonial) return [];
  return [
    {
      nom: cs.client,
      prestation,
      // Les mots exacts du client, sans réécriture.
      fait: `« ${cs.testimonial} »`,
      // L'étude de cas n'existe que si fullCaseStudies la décrit (sinon 404).
      href: slug in fullCaseStudies ? `/etude-de-cas/${slug}` : undefined,
      siteHref: LIVE_SITES[slug],
      ancre,
    },
  ];
};

const CAS_LANDING: PoleCas[] = [
  ...casReel("papapret", "Landing page avec tunnel de vente pour une formation", "Lire l'étude de cas PapaPrêt"),
  ...casReel("vinoboat", "Landing page pour une expérience nautique à Cannes", "Lire l'étude de cas Vinoboat Prestige"),
  ...casReel("spectacle", "Landing page événementielle avec billetterie", "Lire l'étude de cas du spectacle"),
];

export const FAQ_LANDING: FaqItem[] = [
  {
    q: "Qu'est-ce qu'une landing page, concrètement ?",
    a: "C'est une page web unique, sans menu ni lien vers d'autres pages, conçue pour une seule action : appeler, demander un devis, réserver ou s'inscrire. Le visiteur arrive depuis une annonce Google Ads, une publicité Facebook ou Instagram, un email ou un QR code, trouve la promesse de l'annonce, la preuve, l'offre et le formulaire. Rien ne le distrait de la demande.",
  },
  {
    q: "Combien coûte une landing page ?",
    a: `${PRIX_LANDING}, prix fixe écrit sur le devis, ${PRIX_LANDING_DETAIL}. Ce prix comprend la maquette, les textes, le formulaire relié à votre email ou à votre CRM, le suivi des demandes, l'hébergement et l'adresse configurés, la formation et les corrections après la mise en ligne. Une page supplémentaire pour une autre offre ou une autre ville est chiffrée à part, avant de commencer.`,
  },
  {
    q: "En combien de temps ma landing page est-elle livrée ?",
    a: "En 5 à 7 jours après validation de la maquette, que vous recevez sous 48 h après l'appel de cadrage. Le délai dépend surtout de la rapidité de vos retours sur la maquette et les textes. Il est écrit sur le devis.",
  },
  {
    q: "Landing page ou site vitrine : que choisir ?",
    a: `Une landing page sert une campagne : elle reçoit des visiteurs que vous avez payés ou sollicités et les transforme en demandes. Un site vitrine sert à être trouvé sur Google et à présenter l'ensemble de votre activité. Si vous n'avez encore aucun site, commencez par le site vitrine (${PRIX_VITRINE}, livré en 2 semaines) ; si vous lancez une campagne et que votre site existe déjà, ajoutez une landing page dédiée. Les deux se complètent, et nous vous conseillons franchement lors de l'appel.`,
  },
  {
    q: "Ma landing page fonctionne-t-elle avec Google Ads et Meta Ads ?",
    a: "Oui, c'est son premier usage. Nous installons Google Analytics, la balise de conversion Google Ads et le pixel Meta, puis nous testons que chaque appel et chaque formulaire envoyé est bien compté. Vous savez ainsi combien de demandes chaque campagne vous apporte et ce que chacune vous coûte. Si vous le souhaitez, notre pôle publicité crée et pilote la campagne.",
  },
  {
    q: "Puis-je utiliser une landing page sans campagne publicitaire ?",
    a: "Oui : pour un emailing, un QR code sur un flyer ou une vitrine, un lien dans votre bio Instagram, un salon ou une offre saisonnière. En revanche, une page seule est mal placée pour être trouvée sur Google par des personnes qui ne vous connaissent pas : pour cela, il faut un site vitrine et un travail de référencement.",
  },
  {
    q: "À qui appartient la landing page une fois livrée ?",
    a: "À vous. La page, le nom de domaine ou le sous-domaine, les textes et les images sont votre propriété. Vous recevez les accès à la livraison, avec une courte formation pour modifier vous-même les textes, et vous restez libre de la confier à quelqu'un d'autre.",
  },
  {
    q: "Que se passe-t-il après la mise en ligne ?",
    a: "Les corrections après la mise en ligne sont comprises : un titre, un bouton, une question à ajuster quand les premières demandes arrivent. Vous gardez un seul interlocuteur, le fondateur, joignable par téléphone ou par email. Si la campagne évolue, une seconde page ou une variante est chiffrée à part, par écrit.",
  },
];

export default function LandingPageContent() {
  return (
    <div className="pt-16">
      <FilAriane elements={FIL_ARIANE_LANDING} />

      {/* Hero commun aux pages de service (PoleHero) : H1 et texte rendus côté serveur. À droite, la maquette annotée d'une landing page réduite à trois blocs (promesse, preuve, formulaire), en perspective légère : une structure d'exemple, pas un résultat. Empilée sous lg. */}
      <PoleHero
        surtitre={SURTITRE_ZONE}
        titre="Création de landing page à Rueil-Malmaison et Paris : une page qui transforme vos clics en demandes"
        motsCles={MOTS_CLES_HERO}
        texte={[
          `Une landing page est une page unique, sans menu, avec un seul objectif : que le visiteur venu d'une annonce Google Ads ou Meta Ads vous appelle ou remplisse le formulaire. Nous la concevons, l'écrivons et la mettons en ligne en ${DELAI_LANDING}, pour ${PRIX_LANDING}, prix fixe écrit sur le devis.`,
          "Formulaire relié à votre email ou à votre CRM, suivi des demandes installé avant le lancement : vous savez combien de demandes chaque campagne vous apporte.",
        ]}
        reassurance={REASSURANCE_HERO}
        boutonPrimaire={{ href: ANCRE_FORMULAIRE, label: "Demander mon devis de landing page" }}
        boutonSecondaire={{ href: SITE.calendly, label: LABEL_CALENDLY, external: true }}
        mention={
          <>
            Vous hésitez entre une landing page et un site vitrine ? Commencez par{" "}
            <Link href={estimateur.href} className="font-medium text-primary-texte underline-offset-4 hover:underline">
              estimer le prix de votre projet en 2 minutes
            </Link>{" "}
            avec notre outil gratuit.
          </>
        }
        chiffres={[...CHIFFRES_COMMUNS, { valeur: PRIX_LANDING, libelle: "prix fixe d'une landing page" }]}
        aside={<MockLanding reduit />}
        asideRelief
        asideMobile
      />

      {/* Outil gratuit de la page, juste après le hero (fond blanc, le constat est gris) : score de conversion d'une page existante. */}
      <SectionOutil
        disposition="large"
        badge="Outil gratuit"
        titre="Votre landing page convertit-elle ? Score en 60 secondes"
        accroche="Entrez l'adresse de votre page : l'outil note ce qui fait convertir ou non, la visibilité de l'appel à l'action, la hiérarchie du message, les preuves de confiance et l'affichage sur téléphone, puis liste les corrections dans l'ordre."
        obtenez={[
          "Un score global et six notes : appel à l'action, hiérarchie visuelle, confiance, mobile, images, navigation",
          "Les problèmes trouvés, classés par priorité, et ce qui fonctionne déjà",
          "Le rapport complet en PDF par email, avec un plan d'action",
        ]}
      >
        <div className="mx-auto max-w-3xl rounded-3xl bg-[#0a0a1a] p-6 shadow-[0_24px_48px_-24px_rgba(15,23,42,0.35)] sm:p-10">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <DesignScoreForm />
          </div>
        </div>
      </SectionOutil>

      <Reveal y={16}>
        <PainPoints
          id="constat"
          surtitre="Le constat"
          titre="Si vos annonces envoient vers votre page d'accueil, vous payez des clics pour rien"
          intro="Les trois problèmes que nous rencontrons le plus souvent en regardant un compte publicitaire relié à un site classique."
          points={[
            {
              icon: MousePointerClick,
              titre: "Le clic arrive sur une page qui parle de tout",
              texte:
                "Votre annonce promet un devis de rénovation, la page d'accueil présente l'entreprise, son histoire, le blog et huit entrées de menu. Le visiteur cherche, ne trouve pas, repart.",
            },
            {
              icon: Inbox,
              titre: "Le formulaire est en bas, s'il existe",
              texte:
                "Sur téléphone, il faut défiler longtemps pour trouver comment vous joindre. Chaque écran de plus fait perdre des demandes que vous avez déjà payées.",
            },
            {
              icon: BarChart3,
              titre: "Vous ne savez pas ce que la campagne rapporte",
              texte:
                "Sans suivi des demandes, impossible de dire combien viennent de Google Ads, de Meta Ads ou du bouche-à-oreille. Vous continuez ou arrêtez à l'aveugle.",
            },
          ]}
        />
      </Reveal>

      {/* Landing page ou site vitrine : comparaison qualitative, sans taux de conversion. */}
      <PoleSection
        id="landing-ou-vitrine"
        surtitre="Landing page ou site vitrine"
        titre="Landing page ou site vitrine : quelle différence, et laquelle vous faut-il ?"
        intro="Les deux ne servent pas le même but. Nous préférons vous orienter vers la bonne formule que de vendre une page dont vous n'avez pas besoin."
      >
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-4 leading-relaxed text-muted-foreground lg:col-span-5">
            <p>
              Un site vitrine présente votre entreprise et vos services pour être trouvé sur Google : c&apos;est ce
              qu&apos;il faut en premier quand vous n&apos;avez rien en ligne. Une landing page reçoit des visiteurs que
              vous avez payés (Google Ads, Facebook, Instagram, emailing) et leur propose une seule action, sans menu.
            </p>
            <p>
              Notre conseil : un{" "}
              <Link href={siteVitrine.href} className="font-medium text-primary-texte underline-offset-4 hover:underline">
                {siteVitrine.label.toLowerCase()}
              </Link>{" "}
              pour être trouvé, une landing page par campagne pour convertir. Si votre site existe mais a vieilli, une{" "}
              <Link href={refonte.href} className="font-medium text-primary-texte underline-offset-4 hover:underline">
                {refonte.label.toLowerCase()}
              </Link>{" "}
              peut précéder la page de campagne.
            </p>
          </div>

          <Reveal y={16} className="min-w-0 lg:col-span-7">
            <div className="max-w-full overflow-x-auto rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <table className="w-full min-w-[560px] text-left text-sm">
                <caption className="sr-only">Comparaison entre un site vitrine et une landing page</caption>
                <thead>
                  <tr className="border-b border-border bg-muted/40 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Critère
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Site vitrine
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold text-purple-700">
                      Landing page
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARAISON.map((ligne) => (
                    <tr key={ligne.critere} className="border-b border-border last:border-b-0">
                      <th scope="row" className="px-4 py-3 font-medium text-foreground">
                        {ligne.critere}
                      </th>
                      <td className="px-4 py-3 text-muted-foreground">{ligne.vitrine}</td>
                      <td className="bg-primary/5 px-4 py-3 font-medium text-foreground">{ligne.landing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Prix fixes, écrits sur le devis. Délais comptés après validation de la maquette.
            </p>
          </Reveal>
        </div>
      </PoleSection>

      <PoleSection
        id="contenu"
        fond="gris"
        surtitre="Ce que vous obtenez"
        titre="Que contient une landing page ConvertiLab, concrètement ?"
        intro="Six éléments, tous compris dans le prix. Une belle page sans formulaire relié ni comptage des demandes ne sert à rien."
      >
        <Reveal y={16}>
          <PoleLivrables
            livrables={[
              {
                icon: Target,
                titre: "Une page, un seul objectif",
                texte: "Pas de menu, pas de lien sortant : chaque bloc pousse vers l'appel ou le formulaire.",
              },
              {
                icon: PenLine,
                titre: "Des textes écrits avec les mots de vos clients",
                texte: "Promesse, offre, preuve, réponses aux objections : rédigés à partir du diagnostic, relus et validés par vous.",
              },
              {
                icon: Smartphone,
                titre: "Pensée pour le téléphone d'abord",
                texte: "La plupart des clics publicitaires viennent d'un téléphone : boutons larges, formulaire court, chargement rapide.",
              },
              {
                icon: Inbox,
                titre: "Un formulaire relié à votre email ou à votre CRM",
                texte: "Chaque demande arrive au bon endroit, avec un accusé de réception et, si vous le souhaitez, une relance automatique.",
              },
              {
                icon: Gauge,
                titre: "Le suivi des demandes installé",
                texte: "Google Analytics, balise de conversion Google Ads et pixel Meta posés puis testés : chaque appel et chaque formulaire est compté.",
              },
              {
                icon: Server,
                titre: "Hébergement et adresse configurés",
                texte: "Sur votre nom de domaine, un sous-domaine ou une adresse dédiée à la campagne, prête le jour de la livraison.",
              },
            ]}
          />
        </Reveal>
        <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted-foreground">
          La page est livrée avec ses accès, une courte formation pour modifier les textes et les corrections après la
          mise en ligne. Vous êtes propriétaire de la page, de l&apos;adresse et des contenus. Vous n&apos;avez pas
          encore de campagne ? Notre{" "}
          <Link href={publicite.href} className="font-medium text-primary-texte underline-offset-4 hover:underline">
            agence Google Ads et Meta Ads à Paris
          </Link>{" "}
          peut la créer et la piloter.
        </p>
      </PoleSection>

      {/* Notre méthode : votre landing page en 5 à 7 jours, sur fond sombre (seul bloc sombre de la page). */}
      <SectionSombre
        id="methode"
        surtitre="Notre méthode"
        titre="Votre landing page en 5 à 7 jours : comment travaillons-nous ?"
        intro="Cinq repères dans le temps, toujours dans le même ordre, chacun avec quelque chose que vous validez."
      >
        <Reveal y={16}>
          <Timeline etapes={METHODE} sombre />
        </Reveal>
      </SectionSombre>

      <PolePreuve
        id="preuve"
        surtitre="Ce que vous pouvez vérifier"
        titre="Des landing pages livrées, consultables, avec les mots de leurs clients"
        texte={[
          "Trois landing pages réalisées par l'agence, présentées avec la prestation livrée et ce que le client en dit, avec ses mots. Nous ne publions pas de taux de conversion : il dépend de l'offre, de la campagne et de la saison, et ces chiffres appartiennent à nos clients.",
          "Avec vous : regarder votre campagne et votre page actuelle, puis vous dire par écrit ce qu'une page dédiée changerait, avant de dépenser un euro de plus.",
        ]}
        note="Citations reprises de nos études de cas, sans réécriture."
        lien={{ href: "/portfolio", label: "Voir toutes nos réalisations" }}
        cas={CAS_LANDING}
      />

      <CtaIntermediaire
        id="cta-devis"
        titre="Votre campagne démarre bientôt ?"
        texte="Envoyez-nous l'annonce ou l'offre que vous voulez pousser : nous vous disons sous 24 h ce que la page doit contenir, et à quel prix."
        bouton={{ href: ANCRE_FORMULAIRE, label: "Demander mon devis de landing page" }}
        alternativeLabel="ou appelez-nous au"
      />

      <Reveal y={16}>
        <Engagements
          id="engagements"
          surtitre="Nos engagements"
          titre="Ce que nous nous engageons à faire, écrit sur le devis"
          intro="Six engagements sur la façon de travailler, pas sur un résultat : personne ne peut promettre un taux de conversion."
          items={[
            {
              icon: FileText,
              titre: "Un devis écrit sous 24 h",
              texte: "Prix fixe, contenu de la page, délai : tout est écrit avant de commencer.",
            },
            {
              icon: LayoutTemplate,
              titre: "Une maquette validée avant le code",
              texte: "Vous voyez la page avant qu'elle n'existe. Rien n'est construit sans votre accord.",
            },
            {
              icon: Gauge,
              titre: "Le comptage des demandes avant le lancement",
              texte: "Formulaire testé, appels et envois comptés : vous savez ce que la campagne rapporte dès le premier jour.",
            },
            {
              icon: KeyRound,
              titre: "Vous êtes propriétaire",
              texte: "La page, l'adresse, les textes et les images sont à vous, accès transmis à la livraison.",
            },
            {
              icon: Wrench,
              titre: "Corrections comprises après la mise en ligne",
              texte: "Un titre à changer, un bouton à déplacer, une question à ajouter : c'est compris dans le prix.",
            },
            {
              icon: PhoneCall,
              titre: "Un seul interlocuteur",
              texte: "Le fondateur, qui conçoit, écrit et construit votre page, joignable par téléphone ou par email.",
            },
          ]}
        />
      </Reveal>

      <Reveal y={16}>
        <PolePrix
          id="prix"
          surtitre="Prix et engagement"
          titre="Combien coûte une landing page ?"
          intro="Un prix fixe, écrit sur le devis, qui comprend la conception, les textes, le formulaire relié et le suivi des demandes. Aucun abonnement."
          lignes={[
            {
              libelle: "Landing page",
              valeur: PRIX_LANDING,
              detail: `${PRIX_LANDING_DETAIL}. Livrée en ${DELAI_LANDING} après validation de la maquette.`,
            },
            {
              libelle: "Page supplémentaire ou variante",
              valeur: "Sur devis",
              detail: "Une seconde page pour une autre offre ou une autre ville : chiffrée à part, prix écrit avant de commencer.",
            },
            {
              libelle: "Campagne Google Ads ou Meta Ads",
              valeur: "Sur devis",
              detail: "Frais de gestion sur devis, budget média conseillé dès 500 €/mois par plateforme, via notre pôle publicité.",
            },
          ]}
          engagementsTitre="Compris dans le prix"
          engagements={[
            "Maquette, textes, formulaire relié à votre email ou à votre CRM",
            "Suivi des demandes : Google Analytics, balise Google Ads, pixel Meta",
            "Hébergement et adresse configurés, formation, corrections après la mise en ligne",
          ]}
          lien={{ href: ANCRE_FORMULAIRE, label: "Recevoir mon devis de landing page" }}
          note="TVA non applicable, art. 293 B du CGI. Le devis est écrit et validé avant tout travail."
        />
      </Reveal>

      <PoleFAQ
        id="faq"
        surtitre="FAQ"
        titre="Vos questions sur la création d'une landing page"
        items={FAQ_LANDING}
        lien={{ href: "/contact", label: "Poser une autre question" }}
      />

      {/* Pages sœurs : maillage vers le hub du pôle, les formules voisines et les deux plateformes publicitaires documentées. */}
      <PoleSection
        id="pages-liees"
        fond="gris"
        surtitre="Pour aller plus loin"
        titre="Une landing page s'inscrit dans un ensemble : site vitrine, refonte et publicité"
        intro="La page reçoit les visiteurs, le site vitrine les fait venir depuis Google, la campagne les envoie."
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Globe,
              lien: siteVitrine,
              texte: `Pour être trouvé sur Google et présenter toute votre activité : ${PRIX_VITRINE}, livré en 2 semaines.`,
            },
            {
              icon: Wrench,
              lien: refonte,
              texte: "Votre site existe mais se lit mal sur téléphone ou charge lentement : nous le remettons à niveau.",
            },
            {
              icon: LayoutTemplate,
              lien: { href: pole.href, label: pole.ancre },
              texte: "Les cinq formules du pôle, la méthode, ce qui est compris dans le prix et les cas réels.",
            },
            {
              icon: Search,
              lien: googleAds,
              texte: "Pour capter ceux qui tapent déjà votre métier dans Google et les envoyer vers votre page.",
            },
            {
              icon: Heart,
              lien: metaAds,
              texte: "Facebook et Instagram : faire connaître une offre à un quartier ou une ville, puis la convertir sur la page.",
            },
            {
              icon: LayoutTemplate,
              lien: { href: "/demande-maquette", label: "Demander une maquette gratuite en 48 h" },
              texte: "Vous voulez voir la page avant de décider : nous vous envoyons une maquette, sans engagement.",
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
            {minuscule(pole.pageVille.label)}
          </Link>
          , à Paris et partout en France, en visio. Voir{" "}
          <Link href="/services" className="font-medium text-primary-texte underline-offset-4 hover:underline">
            tous les services de l&apos;agence
          </Link>
          .
        </p>
      </PoleSection>

      <PoleAutresPoles
        slug="sites-web"
        surtitre="Nos autres pôles"
        titre="Nos trois autres pôles pour trouver vos clients"
      />

      <FormulaireFinal
        id="formulaire"
        pole="site"
        page={URL_LANDING_PAGE}
        surtitre="Devis sous 24 h"
        titre="Demandez votre devis de landing page"
        intro="Dites-nous pour quelle campagne la page doit travailler. Vous recevez sous 24 h un devis écrit à prix fixe et, si vous le souhaitez, une maquette gratuite en 48 h. Sans engagement."
        question={{
          libelle: "D'où viendront vos visiteurs ?",
          aide: "Aucune coordonnée demandée à cette étape.",
          options: [
            {
              value: "google-ads",
              label: "Google Ads",
              desc: "Des personnes qui cherchent déjà votre métier",
              icon: <Search className="h-5 w-5" />,
            },
            {
              value: "meta-ads",
              label: "Meta Ads (Facebook, Instagram)",
              desc: "Une offre à faire connaître",
              icon: <Heart className="h-5 w-5" />,
            },
            {
              value: "autre-source",
              label: "Emailing, QR code, salon, réseaux",
              desc: "Une page pour une opération précise",
              icon: <Mail className="h-5 w-5" />,
            },
            {
              value: "je-ne-sais-pas",
              label: "Je ne sais pas encore",
              desc: "Nous en parlons lors de l'appel",
              icon: <CircleHelp className="h-5 w-5" />,
            },
          ],
        }}
        titreEtape2="Où vous envoyer le devis ?"
        boutonLabel="Recevoir mon devis sous 24 h"
        calendlyLabel="ou réservez 30 min avec le fondateur"
        confirmation={{
          titre: "Demande bien reçue",
          texte: "Nous revenons vers vous sous 24 h avec un devis écrit pour votre landing page. Si vous préférez en parler de vive voix, réservez directement un créneau.",
        }}
      />

      <PoleCTA
        titre="Une campagne à lancer, une page qui ne convertit pas ?"
        texte="Réservez 30 minutes, c'est gratuit et vous parlez au fondateur. Vous repartez avec un avis honnête sur votre page et un prix."
        calendlyLabel={LABEL_CALENDLY}
        contactLabel="Écrire à l'agence"
        afficherTelephone
      />

      <StickyCtaBar
        label="Devis landing page sous 24 h"
        href={ANCRE_FORMULAIRE}
        mentions={["Gratuit", "Sans engagement", "Réponse sous 24 h"]}
        formulaireId="formulaire"
      />
    </div>
  );
}
