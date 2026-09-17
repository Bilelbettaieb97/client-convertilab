import Link from "next/link";
import {
  BadgeEuro,
  BarChart3,
  Briefcase,
  Building2,
  CircleHelp,
  ClipboardList,
  Coins,
  FileText,
  Filter,
  GraduationCap,
  Handshake,
  KeyRound,
  Landmark,
  MapPin,
  PenLine,
  Presentation,
  Target,
  UserRound,
  UserSearch,
  Users,
  Wallet,
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
  SectionOutil,
  SectionSombre,
  StickyCtaBar,
  Timeline,
  type FilArianeElement,
} from "@/components/pole";
import { Conteneur, Surtitre } from "@/components/pole/pole-ui";
import { getDiagnostic } from "@/lib/diagnostics/configs";
import MockPostLinkedin from "./MockPostLinkedin";

const DIAGNOSTIC = getDiagnostic("publicite-linkedin-ads-est-il-fait-pour-vous")!;

const pole = getPole("publicite");
const [googleAds, metaAds] = pole.sousPages;
const estimateur = pole.outils[0];

export const URL_LINKEDIN_ADS = "/services/sea/linkedin-ads";

/** Ancre du formulaire final : cible des CTA de la page et de la barre collante. */
const ANCRE_FORMULAIRE = "#formulaire";

export const FIL_ARIANE_LINKEDIN_ADS: FilArianeElement[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: pole.nomCourt, href: pole.href },
  { label: "LinkedIn Ads" },
];

/** Trois points de réassurance du hero, tenus sur la page prix, la méthode (Jour 1) et l'engagement écrit. */
const REASSURANCE_HERO = [
  "Compte et données à votre nom",
  "Sans engagement de durée, 3 mois conseillés",
  "Un avis honnête avant de dépenser",
];

/**
 * Critères de ciblage LinkedIn, présentés comme un exemple de réglage
 * (la carte du hero) : aucun chiffre de résultat, seulement ce que la
 * plateforme permet de choisir.
 */
const CIBLAGE_EXEMPLE = [
  { icon: UserSearch, libelle: "Poste", valeur: "Dirigeant, DAF, DRH, responsable achats" },
  { icon: Building2, libelle: "Secteur", valeur: "Cabinets, industrie, services aux entreprises" },
  { icon: Users, libelle: "Taille d'entreprise", valeur: "11 à 200 salariés" },
  { icon: MapPin, libelle: "Zone", valeur: "Paris, Hauts-de-Seine, Île-de-France" },
];

const POUR_QUI = [
  {
    icon: Handshake,
    titre: "Prestataires B2B, consultants et agences",
    texte: "Un service, un logiciel ou un équipement vendu à des entreprises, avec un contrat qui se chiffre en milliers d'euros et une fonction précise à toucher.",
  },
  {
    icon: Landmark,
    titre: "Cabinets et professions réglementées",
    texte: "Expertise comptable, avocats d'affaires, conseil : toucher les dirigeants d'un secteur précis, pas le grand public.",
  },
  {
    icon: GraduationCap,
    titre: "Organismes de formation",
    texte: "Formations professionnelles ou intra-entreprise : viser les responsables formation et les managers.",
  },
  {
    icon: UserRound,
    titre: "Recrutement",
    texte: "Des profils précis dans une zone donnée, quand les annonces d'emploi classiques ne suffisent plus.",
  },
];

/** Vos 90 premiers jours sur LinkedIn Ads, cohérents avec la FAQ (lecture des premières demandes à partir de la deuxième ou troisième semaine, coût stable après deux mois). */
const QUATRE_VINGT_DIX_JOURS = [
  {
    repere: "Jour 1",
    titre: "Diagnostic : LinkedIn est-il fait pour vous ?",
    texte:
      "Trente minutes, gratuites : ce que vous vendez, à qui, le montant moyen d'un contrat. Si le panier ne justifie pas le coût du clic LinkedIn, nous vous orientons vers Google Ads ou Meta Ads.",
  },
  {
    repere: "Semaine 1",
    titre: "Plan, devis et mise en place",
    texte:
      "Sous 24 h : audiences, formats, budget média, coût par demande visé, frais de gestion. Puis Campaign Manager à votre nom, Insight Tag posé, annonces rédigées, Lead Gen Form préparé.",
  },
  {
    repere: "Semaines 2 à 4",
    titre: "Lancement et premiers tests",
    texte:
      "Deux ou trois audiences et plusieurs annonces tournent en parallèle avec un budget limité. Nous suivons le coût par demande et la qualité des contacts, pas seulement le coût du clic.",
  },
  {
    repere: "Mois 2 et 3",
    titre: "Resserrer le ciblage",
    texte:
      "Exclusion des postes et secteurs qui cliquent sans demander, enchères, nouveaux visuels, relance des visiteurs du site, jusqu'à un coût par demande stable.",
  },
  {
    repere: "Chaque mois",
    titre: "Rapport d'une page et décision",
    texte:
      "Budget dépensé, demandes reçues, coût par demande, et ce qu'elles sont devenues chez vous. Nous décidons ensemble de continuer, d'ajuster ou d'arrêter.",
  },
];

export const FAQ_LINKEDIN_ADS: FaqItem[] = [
  {
    q: "Combien coûte un clic sur LinkedIn Ads ?",
    a: "Nettement plus cher que sur Google Ads ou Meta Ads : selon les audiences, un clic se paie souvent plusieurs euros, parfois plus de dix. C'est le prix d'un ciblage par poste, secteur et taille d'entreprise que les autres plateformes n'offrent pas. LinkedIn n'est donc rentable que si un client vous rapporte assez pour absorber ce coût, d'où notre diagnostic avant tout lancement.",
  },
  {
    q: "Quel budget média prévoir sur LinkedIn ?",
    a: "Comptez un ordre de grandeur de 1 000 € par mois de budget média pour que la plateforme collecte assez de données et que les tests des premières semaines aient un sens. Ce montant est réglé directement à LinkedIn depuis votre compte ; ce n'est pas un prix ConvertiLab. Nos frais de gestion s'ajoutent, fixés sur devis.",
  },
  {
    q: "LinkedIn Ads est-il adapté à une petite entreprise ?",
    a: "Oui, si vous vendez à des entreprises et que votre contrat moyen se chiffre en milliers d'euros. Un cabinet, un consultant, un organisme de formation ou un prestataire industriel peuvent y trouver des contacts qualifiés. Pour vendre à des particuliers ou des produits à petit prix, Google Ads ou Meta Ads seront plus rentables, et nous vous le dirons.",
  },
  {
    q: "Qu'est-ce qu'un Lead Gen Form LinkedIn ?",
    a: "Un formulaire intégré à l'annonce, pré-rempli avec les informations du profil LinkedIn (nom, email, entreprise, poste). La personne demande un contact en deux clics sans quitter LinkedIn. Les demandes sont ensuite transmises dans votre messagerie ou votre CRM. C'est souvent le format qui donne le coût par demande le plus bas sur cette plateforme.",
  },
  {
    q: "Au bout de combien de temps voit-on des demandes ?",
    a: "Les premières visites arrivent dès le lancement. Nous lisons les premières demandes à partir de la deuxième ou troisième semaine : sur LinkedIn, les audiences sont plus petites et les décisions plus longues que sur Google. Il faut ensuite un à deux mois de tests pour stabiliser le coût par demande. Trois mois restent le bon horizon pour juger.",
  },
  {
    q: "Qui s'occupe de mon compte LinkedIn Ads ?",
    a: "Le fondateur de l'agence, qui crée et gère lui-même le Campaign Manager, rédige les annonces, règle les audiences et vous envoie le rapport. Un seul interlocuteur, joignable par téléphone ou par email. Nous n'externalisons pas la gestion des campagnes.",
  },
  {
    q: "Le compte publicitaire et les données m'appartiennent-ils ?",
    a: "Oui. Le Campaign Manager est rattaché à votre page LinkedIn, l'Insight Tag est posé sur votre site, les audiences et l'historique restent à votre nom. Si vous arrêtez, nous retirons nos accès et vous gardez tout.",
  },
  {
    q: "Y a-t-il un engagement de durée ?",
    a: "Non. Vous pouvez mettre en pause ou arrêter quand vous le souhaitez. Nous conseillons trois mois, le temps que les tests produisent un coût par demande stable et que vos premiers contacts avancent dans votre cycle de vente.",
  },
];

export default function LinkedinAdsContent() {
  return (
    <div className="pt-16">
      <FilAriane elements={FIL_ARIANE_LINKEDIN_ADS} />

      {/* Hero commun (PoleHero) : post sponsorisé d'exemple et réglage d'audience en aside, aucun résultat chiffré. */}
      <PoleHero
        surtitre={SURTITRE_ZONE}
        titre="Agence LinkedIn Ads à Paris : toucher les décideurs, par poste, secteur et taille d'entreprise"
        motsCles={["LinkedIn Ads", "décideurs"]}
        texte={[
          "LinkedIn Ads est la seule plateforme qui vous laisse choisir qui voit votre annonce dans une entreprise. Le clic y coûte plus cher : nous la réservons aux activités B2B dont un client rapporte assez pour le justifier, et nous vous le disons avant le premier euro dépensé.",
          "Vous parlez au fondateur, qui règle lui-même vos campagnes et suit un seul chiffre chaque mois : le coût par demande.",
        ]}
        reassurance={REASSURANCE_HERO.slice(0, 3)}
        boutonPrimaire={{ href: ANCRE_FORMULAIRE, label: "Demander mon avis LinkedIn Ads" }}
        boutonSecondaire={{ href: SITE.calendly, label: LABEL_CALENDLY, external: true }}
        mention={
          <>
            Vous hésitez entre plusieurs plateformes ? Revenez à notre page{" "}
            <Link href={pole.href} className="font-medium text-primary-texte underline-offset-4 hover:underline">
              {pole.ancre}
            </Link>
            .
          </>
        }
        chiffres={[...CHIFFRES_COMMUNS, { valeur: "24 h", libelle: "pour un avis et un devis écrits" }]}
        aside={<MockPostLinkedin ciblage={CIBLAGE_EXEMPLE} compact />}
        asideRelief
        asideMobile
      />

      {/* Diagnostic interactif du pôle, juste après le hero (contenu : src/lib/diagnostics/configs/publicite.ts). */}
      <SectionOutil badge="Diagnostic gratuit" titre={DIAGNOSTIC.titre} accroche={DIAGNOSTIC.accroche} obtenez={DIAGNOSTIC.obtenez} fond="gris">
        <DiagnosticInteractif diagnostic={DIAGNOSTIC} page="/services/sea/linkedin-ads" />
      </SectionOutil>

      {/* Pour qui : quatre profils B2B, deux colonnes (aucune case vide). */}
      <PoleSection
        id="pour-qui"
        surtitre="Pour qui"
        titre="À qui LinkedIn Ads convient-il vraiment ?"
        intro="À ceux qui vendent à des entreprises, avec un contrat moyen assez élevé pour absorber un clic plus cher. Voici les quatre profils que nous rencontrons le plus souvent."
      >
        <Reveal y={16}>
          <PoleLivrables livrables={POUR_QUI} colonnes={2} />
        </Reveal>
        <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Nous accompagnons cabinets, consultants et petites équipes depuis Rueil-Malmaison (92) et comme{" "}
          <Link href={pole.pageVille.href} className="font-medium text-primary-texte underline-offset-4 hover:underline">
            agence web à Paris
          </Link>
          . Les campagnes se pilotent à distance, partout en France, en visio.
        </p>
      </PoleSection>

      <Reveal y={16}>
        <PainPoints
          id="constat"
          surtitre="Le constat"
          titre="Pourquoi vos campagnes ne trouvent-elles pas vos clients B2B ?"
          intro="Trois situations que nous retrouvons chez la plupart des entreprises qui vendent à d'autres entreprises."
          points={[
            {
              icon: Target,
              titre: "Vos clients ne vous cherchent pas sur Google",
              texte:
                "Un DAF ou un DRH ne tape pas votre offre dans un moteur de recherche. Google Ads capte une demande qui existe ; LinkedIn la provoque chez la bonne personne.",
            },
            {
              icon: Filter,
              titre: "Meta Ads ne sait pas qui est décideur",
              texte:
                "Facebook et Instagram ciblent des centres d'intérêt et une zone, pas un poste ni une taille d'entreprise. Vous payez des clics de particuliers pour une offre destinée à des dirigeants.",
            },
            {
              icon: Coins,
              titre: "Vous avez testé LinkedIn et le clic coûtait cher pour rien",
              texte:
                "Audience trop large, page lente, aucun suivi des conversions : le budget part sans demande. Le problème est rarement la plateforme, c'est le réglage.",
            },
          ]}
        />
      </Reveal>

      {/* Ce que nous faisons : livrables concrets. */}
      <PoleSection
        id="livrables"
        surtitre="Ce que nous faisons"
        titre="Que comprend la gestion de vos campagnes LinkedIn Ads ?"
        intro="Tout ce qu'il faut pour qu'une annonce arrive devant la bonne personne et se transforme en demande."
      >
        <Reveal y={16}>
          <PoleLivrables
            livrables={[
              {
                icon: UserSearch,
                titre: "Ciblage par poste, secteur et taille",
                texte: "Fonction, niveau hiérarchique, secteur, effectif, zone : l'audience de votre client type, et rien d'autre.",
              },
              {
                icon: ClipboardList,
                titre: "Lead Gen Forms pré-remplis",
                texte: "Un formulaire intégré à l'annonce, rempli depuis le profil LinkedIn : la demande arrive en deux clics dans votre CRM.",
              },
              {
                icon: PenLine,
                titre: "Annonces et visuels rédigés",
                texte: "Image, carrousel, vidéo courte ou document : plusieurs versions testées en parallèle, avec une offre claire.",
              },
              {
                icon: BarChart3,
                titre: "Insight Tag et conversions",
                texte: "La balise LinkedIn posée sur votre site et les conversions définies avant le lancement.",
              },
              {
                icon: Users,
                titre: "Audiences de relance et listes de comptes",
                texte: "Relance des visiteurs de votre site et ciblage d'une liste d'entreprises que vous voulez atteindre.",
              },
              {
                icon: FileText,
                titre: "Un rapport mensuel d'une page",
                texte: "Budget, demandes, coût par demande, qualité des contacts, puis un échange pour décider.",
              },
            ]}
          />
        </Reveal>
        <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Si votre page d&apos;arrivée ne convainc pas un dirigeant, nous le disons avant le lancement : vous pouvez{" "}
          <Link href="/demande-maquette" className="font-medium text-primary-texte underline-offset-4 hover:underline">
            demander une maquette gratuite de landing page
          </Link>
          .
        </p>
      </PoleSection>

      {/* Notre méthode : vos 90 premiers jours, seul bloc sombre de la page. */}
      <SectionSombre
        id="methode"
        surtitre="Notre méthode"
        titre="Vos 90 premiers jours sur LinkedIn Ads : comment travaillons-nous ?"
        intro="Cinq repères dans le temps, avec à chaque fois quelque chose que vous pouvez vérifier."
      >
        <Reveal y={16}>
          <Timeline etapes={QUATRE_VINGT_DIX_JOURS} sombre />
        </Reveal>
      </SectionSombre>

      <Reveal y={16}>
        <PourQui
          id="pour-vous-ou-pas"
          surtitre="Franchement"
          titre="LinkedIn Ads n'est pas fait pour tout le monde, et nous préférons vous le dire avant"
          intro="Le clic coûte plus cher que partout ailleurs. Il faut que ce que rapporte un client le justifie."
          pour={{
            titre: "C'est fait pour vous si...",
            items: [
              "Vous vendez à des entreprises, et un client signe pour plusieurs milliers d'euros ou un contrat récurrent.",
              "Vous savez décrire votre client type par son poste, son secteur ou la taille de sa société.",
              "Vous acceptez trois mois de tests avant de juger, avec un budget média d'environ 1 000 € par mois.",
            ],
          }}
          pasPour={{
            titre: "Ce n'est pas pour vous si...",
            items: [
              "Vous vendez à des particuliers ou des produits à petit prix : Google Ads ou Meta Ads seront plus rentables.",
              "Vos clients tapent déjà votre métier dans Google : capter cette demande coûte moins cher.",
              "Vous attendez des demandes dès la première semaine à quelques euros l'unité.",
            ],
          }}
          engagement={{
            titre: "Notre engagement, écrit noir sur blanc",
            texte:
              "Si, au diagnostic, nous estimons que LinkedIn Ads a peu de chances d'être rentable pour vous, nous vous le disons et nous proposons une autre plateforme, ou rien. Nous ne promettons pas de résultat : nous nous engageons sur une façon de travailler, un compte à votre nom, un rapport clair chaque mois et une réponse sous 24 h.",
          }}
        />
      </Reveal>

      <PolePreuve
        id="preuve"
        surtitre="Ce que vous pouvez vérifier"
        titre="Pas de résultats clients inventés : ce que nous faisons et ce que vous voyez"
        texte={[
          "Nous ne publions pas de coût par demande ni de chiffre de résultat client sur LinkedIn : ils dépendent du secteur, du poste visé, de l'offre et du cycle de vente. Un chiffre sorti de son contexte ne vous apprendrait rien.",
          "Nous testons nos méthodes sur nos propres campagnes avant de les appliquer aux vôtres : depuis le 4 septembre 2026, ConvertiLab fait tourner sa propre campagne Meta Ads à 36 € par jour, dont les demandes arrivent dans notre CRM. Le même pilotage s'applique sur LinkedIn : conversions installées avant le lancement, plusieurs annonces en test, un chiffre suivi chaque semaine, et une règle simple pour couper ce qui coûte trop cher.",
        ]}
        note="Nous vous montrons le gestionnaire de campagnes et le CRM en visio, sans chiffre de résultat client."
        lien={{ href: estimateur.href, label: "Estimer votre budget publicitaire avec notre outil gratuit" }}
        aside={
          <Reveal y={16}>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.18)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-purple-700">Dans votre compte</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">Ce que vous pouvez vérifier vous-même</h3>
              <ul className="mt-5 space-y-4">
                {[
                  { icon: KeyRound, titre: "Le Campaign Manager à votre nom", texte: "Rattaché à votre page LinkedIn, avec vos identifiants, historique compris." },
                  { icon: Presentation, titre: "Chaque demande, avec son contexte", texte: "Poste, entreprise, taille : vous jugez vous-même la qualité des contacts." },
                  { icon: BadgeEuro, titre: "Le coût par demande, chaque mois", texte: "Budget réglé à LinkedIn divisé par le nombre de demandes, sur une page." },
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
        id="cta-avis"
        titre="Vous ne savez pas si LinkedIn Ads vaut le coup pour votre activité ?"
        texte="C'est la première question à laquelle nous répondons, gratuitement, à partir de votre offre, de votre client type et du montant moyen d'un contrat."
        bouton={{ href: ANCRE_FORMULAIRE, label: "Demander mon avis honnête sur LinkedIn Ads" }}
        alternativeLabel="ou appelez-nous au"
      />

      <Reveal y={16}>
        <PolePrix
          id="prix"
          surtitre="Prix et engagement"
          titre="Combien coûte une campagne LinkedIn Ads avec notre agence ?"
          intro="Deux lignes distinctes sur votre devis : le budget média, qui va à LinkedIn, et nos frais de gestion, qui rémunèrent notre travail. Aucune commission sur le budget média."
          lignes={[
            {
              libelle: "Frais de gestion",
              valeur: "Sur devis",
              detail: "Selon les audiences, les formats et le travail de création. Prix fixe écrit après le diagnostic gratuit.",
            },
            {
              libelle: "Budget média conseillé",
              valeur: "Environ 1 000 €/mois",
              detail: "Ordre de grandeur propre à LinkedIn, où le clic coûte plus cher. Réglé à LinkedIn depuis votre compte : ce n'est pas un prix ConvertiLab.",
            },
            {
              libelle: "Engagement",
              valeur: "Sans engagement de durée",
              detail: "Pause ou arrêt quand vous le souhaitez. 3 mois conseillés pour obtenir un coût par demande stable.",
            },
          ]}
          lien={{ href: ANCRE_FORMULAIRE, label: "Recevoir un devis pour vos campagnes LinkedIn" }}
          note="TVA non applicable, art. 293 B du CGI. Le devis est écrit et validé avant tout lancement."
        />
      </Reveal>

      <PoleFAQ
        id="faq"
        surtitre="FAQ"
        titre="Vos questions sur LinkedIn Ads"
        items={FAQ_LINKEDIN_ADS}
        lien={{ href: "/contact", label: "Poser une autre question" }}
      />

      {/* Pages sœurs du pôle Publicité : maillage interne. */}
      <section id="autres-plateformes" className="bg-muted/30 py-16 sm:py-20">
        <Conteneur>
          <div className="mx-auto max-w-3xl text-center">
            <Surtitre>Les autres plateformes</Surtitre>
            <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">
              Google Ads ou Meta Ads plutôt que LinkedIn ? Nos autres pages publicité
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Nous démarrons par une seule plateforme, celle où vos clients sont déjà, et n&apos;en ajoutons une deuxième
              que lorsque la première est rentable.
            </p>
          </div>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
            {[
              {
                lien: googleAds,
                titre: "Google Ads",
                texte: "Capter une demande qui existe déjà : vos clients tapent votre métier dans Google.",
              },
              {
                lien: metaAds,
                titre: "Meta Ads",
                texte: "Facebook et Instagram pour faire connaître une offre à une zone ou des centres d'intérêt.",
              },
              {
                lien: { href: pole.href, label: pole.ancre },
                titre: "Toutes les plateformes",
                texte: "Google, Meta, TikTok, Pinterest et LinkedIn Ads : la page du pôle pour choisir.",
              },
            ].map(({ lien, titre, texte }, i) => (
              <li key={lien.href}>
                <Reveal
                  delay={i * 0.08}
                  y={16}
                  className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_16px_32px_-16px_rgba(15,23,42,0.18)] motion-reduce:transition-none"
                >
                  <h3 className="font-semibold text-foreground">{titre}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{texte}</p>
                  <div className="mt-auto pt-5">
                    <LienDiscret href={lien.href} label={lien.label} className="text-sm font-semibold" />
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Conteneur>
      </section>

      <PoleAutresPoles
        slug="publicite"
        surtitre="Nos autres pôles"
        titre="Nos trois autres pôles pour trouver vos clients"
        intro="Un site qui convainc un dirigeant, un référencement qui dure et une IA qui répond aux demandes la nuit rendent chaque euro dépensé sur LinkedIn plus rentable."
      />

      <FormulaireFinal
        id="formulaire"
        pole="publicite"
        page={URL_LINKEDIN_ADS}
        surtitre="Avis honnête sous 24 h"
        titre="LinkedIn Ads est-il rentable pour vous ? Demandez notre avis"
        intro="Dites-nous ce que vous vendez et à qui : réponse écrite sous 24 h, avec une plateforme conseillée, un ordre de grandeur de budget et, si LinkedIn n'est pas le bon choix, une alternative. Sans engagement."
        question={{
          libelle: "Que rapporte en moyenne un nouveau client à votre entreprise ?",
          aide: "Aucune coordonnée demandée à cette étape. Cette réponse nous dit si le coût du clic LinkedIn est justifié.",
          options: [
            {
              value: "moins-de-1000",
              label: "Moins de 1 000 €",
              desc: "Nous vous dirons franchement si LinkedIn convient",
              icon: <Coins className="h-5 w-5" />,
            },
            {
              value: "1000-a-5000",
              label: "1 000 à 5 000 €",
              desc: "Souvent le bon terrain pour LinkedIn",
              icon: <Wallet className="h-5 w-5" />,
            },
            {
              value: "plus-de-5000",
              label: "Plus de 5 000 €",
              desc: "Contrats élevés ou récurrents",
              icon: <Briefcase className="h-5 w-5" />,
            },
            {
              value: "je-ne-sais-pas",
              label: "Je ne sais pas encore",
              desc: "Nous estimons ensemble",
              icon: <CircleHelp className="h-5 w-5" />,
            },
          ],
        }}
        titreEtape2="Où vous envoyer notre avis ?"
        boutonLabel="Recevoir ma réponse sous 24 h"
        calendlyLabel="ou réservez 30 min avec le fondateur"
        confirmation={{
          titre: "Demande bien reçue",
          texte: "Nous revenons vers vous sous 24 h avec un premier avis écrit. Si vous préférez en parler de vive voix, réservez directement un créneau.",
        }}
      />

      <PoleCTA
        titre="Un projet de campagne LinkedIn, une question sur votre budget ?"
        texte="Réservez 30 minutes, c'est gratuit et vous parlez au fondateur. Vous repartez avec un avis honnête et un ordre de grandeur de budget."
        calendlyLabel={LABEL_CALENDLY}
        contactLabel="Écrire à l'agence"
        afficherTelephone
      />

      <StickyCtaBar
        label="Avis honnête sous 24 h"
        href={ANCRE_FORMULAIRE}
        mentions={["Gratuit", "Sans engagement", "Réponse sous 24 h"]}
        formulaireId="formulaire"
      />
    </div>
  );
}
