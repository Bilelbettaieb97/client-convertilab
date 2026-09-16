import {
  ClipboardList,
  Hourglass,
  LineChart,
  MousePointerClick,
  PhoneCall,
  SearchX,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { ETAPES_COMMUNES } from "@/data/poles";
import { Conteneur, Paragraphes, Surtitre } from "@/components/pole/pole-ui";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
// Les règles `.ff-frise` / `.ff-puce` (a-frise-active.css) sont importées par globals.css :
// un import depuis ce composant créait une troisième feuille de style bloquante.

const TITRE = "Trois raisons de nous appeler, une seule méthode pour y répondre";
const INTRO =
  "Les entreprises nous contactent pour l'une de ces trois situations. Quel que soit le pôle concerné, nous avançons dans le même ordre, avec un prix et un délai écrits avant de commencer.";

/** Les trois situations rencontrées chez les artisans, commerces et petites équipes. Aucun chiffre, aucune promesse. */
const CONSTATS: { icon: LucideIcon; titre: string; texte: string }[] = [
  {
    icon: SearchX,
    titre: "Personne ne vous trouve",
    texte:
      "Vos clients cherchent sur Google, sur les cartes et maintenant dans ChatGPT, et tombent sur vos concurrents. Un site bien référencé, une fiche Google tenue et une campagne ciblée changent cela.",
  },
  {
    icon: MousePointerClick,
    titre: "Votre site ne convertit pas",
    texte:
      "Des visites, mais peu d'appels et de demandes de devis. Un site lent, un formulaire caché ou une offre floue : nous reprenons la structure pour que chaque visite ait une suite.",
  },
  {
    icon: Hourglass,
    titre: "Vous perdez du temps en tâches répétitives",
    texte:
      "Devis à répondre le soir, avis Google sans réponse, relances oubliées. Nous confions ces tâches à l'IA, avec vos règles et votre ton, pour que vous gardiez les vraies décisions.",
  },
];

/**
 * Repères temporels et icônes des quatre étapes communes (textes : src/data/poles.ts).
 * « Sous 2 semaines » : un site est livré en 2 semaines après validation de la
 * maquette, une campagne ou un premier flux IA démarrent dans le même délai.
 */
const REPERES: { repere: string; icon: LucideIcon }[] = [
  { repere: "Jour 1", icon: PhoneCall },
  { repere: "Semaine 1", icon: ClipboardList },
  { repere: "Sous 2 semaines", icon: Wrench },
  { repere: "Chaque mois", icon: LineChart },
];

const ETAPES = ETAPES_COMMUNES.map((etape, i) => ({ ...etape, ...REPERES[i] }));

/** Une seule ombre de survol sur tout le site (règle du directeur artistique). */
const OMBRE_SURVOL = "hover:shadow-[0_1px_2px_rgba(15,23,42,0.04),0_20px_40px_-24px_hsl(270_70%_45%_/_0.35)]";

/**
 * Cartes qui s'élèvent au survol : Tailwind v4 écrit `translate-*` dans la
 * propriété `translate`, d'où sa présence dans la liste des transitions.
 */
const CARTE_SURVOL = cn(
  "transition-[translate,box-shadow,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/40",
  OMBRE_SURVOL,
  "motion-reduce:transition-none motion-reduce:hover:translate-y-0"
);

/**
 * Frise verticale : un segment par étape (sauf la dernière), du centre de sa
 * puce (44 px, `left` 22 px) au centre de la puce suivante (38 px sous le haut
 * du <li> suivant, padding 16 px + 22 px). La première puce n'a pas de padding
 * haut. Ligne de base grise doublée d'un remplissage violet piloté par le
 * défilement (`.ff-frise`, a-frise-active.css).
 */
function segmentClasses(premier: boolean) {
  return cn("absolute left-[1.375rem] -bottom-[2.375rem] w-px", premier ? "top-[1.375rem]" : "top-[2.375rem]");
}

/**
 * « Le constat » et « Notre méthode » réunis : à gauche les trois situations
 * qui amènent un client, à droite la réponse en quatre étapes datées, reliées
 * par une frise qui se colore au fil de la lecture (CSS pur). Fond gris très
 * clair, aucune animation permanente ; les colonnes s'empilent en mobile
 * (constat puis méthode).
 */
export default function ConstatEtMethode() {
  return (
    <section id="constat" className="bg-muted/40 py-16 sm:py-24">
      <Conteneur>
        <div className="mx-auto max-w-3xl text-center">
          <Surtitre>Le constat, et la méthode</Surtitre>
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl">{TITRE}</h2>
          <div className="mt-4 text-lg">
            <Paragraphes texte={INTRO} />
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Colonne gauche : les trois situations */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-texte">Ce qui bloque</p>
            <ol className="mt-4 space-y-3">
              {CONSTATS.map((c, i) => {
                const Icon = c.icon;
                return (
                  <li key={c.titre}>
                    <Reveal delay={i * 0.08}>
                      <div
                        className={cn(
                          "group flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]",
                          CARTE_SURVOL
                        )}
                      >
                        <span
                          className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-texte transition-colors duration-300 group-hover:bg-primary group-hover:text-white motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          {/* Un seul geste au survol (échelle + légère rotation), pas de rebond ; rien avec animations réduites. */}
                          <Icon
                            className="h-5 w-5 transition-transform duration-300 ease-out group-hover:-rotate-3 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:rotate-0 motion-reduce:group-hover:scale-100"
                            strokeWidth={1.75}
                          />
                        </span>
                        <div>
                          <h3 className="font-semibold text-foreground">{c.titre}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.texte}</p>
                        </div>
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Colonne droite : la méthode, en quatre étapes reliées par une frise qui se remplit au défilement */}
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-texte">Ce que nous faisons, dans l&apos;ordre</p>
            <ol className="relative mt-4">
              {ETAPES.map((e, i) => {
                const Icon = e.icon;
                const dernier = i === ETAPES.length - 1;
                return (
                  <li key={e.titre} className="relative flex gap-5 py-4 first:pt-0 last:pb-0">
                    {/* Segment vers l'étape suivante : ligne de base, puis remplissage violet (origin-top, scaleY piloté par le défilement). */}
                    {!dernier && (
                      <>
                        <span className={cn(segmentClasses(i === 0), "bg-border")} aria-hidden="true" />
                        <span className={cn(segmentClasses(i === 0), "ff-frise origin-top bg-primary")} aria-hidden="true" />
                      </>
                    )}
                    <Reveal delay={0.1 + i * 0.08} className="flex flex-1 gap-5">
                      <span
                        className="ff-puce relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary-texte shadow-[0_1px_2px_rgba(15,23,42,0.06)]"
                        aria-hidden="true"
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <div className={cn("flex-1 rounded-2xl border border-border bg-card p-5", CARTE_SURVOL)}>
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          {/* Contour, pas de dégradé : la couleur de la colonne est portée par la frise. */}
                          <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/5 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary-texte">
                            {e.repere}
                          </span>
                          <h3 className="font-semibold text-foreground">
                            <span className="sr-only">Étape {i + 1} : </span>
                            {e.titre}
                          </h3>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.texte}</p>
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </Conteneur>
    </section>
  );
}
