"use client";

import { useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useReducedMotionSafe } from "@/components/motion/use-reduced-motion-safe";
import { cn } from "@/lib/utils";
import { BoutonLien } from "./pole-ui";

export interface PanneauElement {
  href?: string;
  label: string;
  description?: string;
  prix?: string;
}

export interface PanneauPole {
  numero: string;
  nomCourt: string;
  titre: string;
  lignes: readonly [string, string];
  prix: string;
  prixDetail?: string;
  href: string;
  ancre: string;
  /** Icône déjà rendue (nœud React) : la page est un composant serveur. */
  icon: ReactNode;
  /** Sous-pages (ou cas d'usage) montrées à droite. */
  elements: PanneauElement[];
  /** Titre de la colonne de droite, ex. « Cinq façons de commencer ». */
  titreElements: string;
  /** Outil gratuit lié, en bouton secondaire. */
  outil?: { href: string; label: string };
}

export interface PolesDefilantsProps {
  poles: PanneauPole[];
}

/** Hauteur de la barre de navigation fixe (pt-16 des pages), en px pour l'offset de useScroll. */
const NAV = "64px";
/** Défilement consommé par chaque unité (pause ou transition), en vh. */
const UNITE_VH = 55;

/**
 * Les quatre pôles en panneaux plein écran, empilés au défilement (lg et
 * plus) : le premier est posé, chaque suivant glisse depuis la droite et
 * recouvre le précédent, qui recule légèrement. Une pause d'une unité entre
 * deux transitions laisse le temps de lire. Le défilement reste natif (aucun
 * blocage de la molette) : seule la position horizontale des panneaux est
 * pilotée par la progression. Sous lg et avec « réduire les animations »,
 * les panneaux se suivent simplement, sans transformation.
 */
export default function PolesDefilants({ poles }: PolesDefilantsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotionSafe();
  const n = poles.length;
  const unites = 2 * n - 1;
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: [`start ${NAV}`, "end end"] });
  const [actif, setActif] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    // Le panneau i devient « actif » à mi-transition (2i-1 + 0,5 unités).
    let a = 0;
    for (let i = 1; i < n; i++) if (v >= (2 * i - 0.5) / unites) a = i;
    if (a !== actif) setActif(a);
  });
  const statique = reduced;

  return (
    <div
      ref={sectionRef}
      className={cn("relative", !statique && "lg:h-[var(--hauteur)]")}
      style={{ "--hauteur": `calc(100vh - ${NAV} + ${unites * UNITE_VH}vh)` } as React.CSSProperties}
    >
      <div
        className={cn(
          "flex flex-col gap-6",
          !statique && "lg:sticky lg:top-[var(--nav)] lg:block lg:h-[calc(100vh-var(--nav))] lg:overflow-hidden"
        )}
        style={{ "--nav": NAV } as React.CSSProperties}
      >
        {poles.map((pole, i) => (
          <Panneau key={pole.numero} pole={pole} index={i} unites={unites} progress={scrollYProgress} statique={statique} />
        ))}

        {/* Repère de progression : un point par pôle, visible seulement en mode empilé. */}
        {!statique && (
          <ol
            // bottom-24 : au-dessus de la barre d'appel collante de l'accueil (80 px), qui la masquait.
            className="pointer-events-none absolute bottom-24 left-1/2 hidden -translate-x-1/2 items-center gap-2 lg:flex"
            aria-hidden="true"
          >
            {poles.map((pole, i) => (
              <li
                key={pole.numero}
                className={cn(
                  "h-1.5 rounded-full transition-[width,background-color] duration-300",
                  i === actif ? "w-8 bg-gradient-to-r from-purple-500 to-pink-500" : "w-1.5 bg-slate-400/60"
                )}
              />
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

function Panneau({
  pole,
  index,
  unites,
  progress,
  statique,
}: {
  pole: PanneauPole;
  index: number;
  unites: number;
  progress: MotionValue<number>;
  statique: boolean;
}) {
  // Le panneau i glisse pendant l'unité 2i-1 ; il recule pendant l'arrivée du suivant (unité 2i+1).
  const entree = [(2 * index - 1) / unites, (2 * index) / unites];
  const sortie = [(2 * index + 1) / unites, (2 * index + 2) / unites];
  // 110 % et non 100 % : le panneau a des marges latérales (inset-x-4) et une ombre, il dépassait
  // de 16 px sur le bord droit du panneau précédent au repos.
  const x = useTransform(progress, entree, index === 0 ? ["0%", "0%"] : ["110%", "0%"]);
  const scale = useTransform(progress, sortie, [1, 0.94]);
  const sombre = index % 2 === 1;
  const Icone = pole.icon;

  return (
    <motion.article
      style={statique ? undefined : { x, scale }}
      className={cn(
        "relative isolate overflow-hidden rounded-3xl border",
        // Sous lg : dans le flux, aucune transformation (l'inline style est neutralisé), les panneaux se suivent.
        "max-lg:transform-none!",
        !statique && "lg:absolute lg:inset-x-4 lg:top-4 lg:bottom-4 lg:m-0 xl:inset-x-6 xl:top-6 xl:bottom-6",
        sombre
          ? "border-white/10 bg-slate-950 text-white shadow-[0_40px_120px_-40px_rgba(2,6,23,0.8)]"
          : "border-border bg-card text-foreground shadow-[0_40px_120px_-40px_hsl(270_70%_45%_/_0.35)]"
      )}
      aria-labelledby={`pole-${pole.numero}`}
    >
      {/* Fond : halo de la marque et icône du pôle en filigrane. */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div
          className={cn(
            "absolute -top-[30%] -right-[10%] h-[70%] w-[55%] rounded-full blur-3xl",
            sombre
              ? "bg-[radial-gradient(circle,hsl(270_70%_60%_/_0.35),transparent_65%)]"
              : "bg-[radial-gradient(circle,hsl(270_70%_60%_/_0.16),transparent_65%)]"
          )}
        />
        <div
          className={cn(
            "absolute -bottom-[30%] -left-[10%] h-[60%] w-[45%] rounded-full blur-3xl",
            sombre
              ? "bg-[radial-gradient(circle,hsl(330_70%_60%_/_0.22),transparent_65%)]"
              : "bg-[radial-gradient(circle,hsl(330_70%_60%_/_0.12),transparent_65%)]"
          )}
        />
        <div className={cn("absolute -right-10 -bottom-10 [&>svg]:h-72 [&>svg]:w-72", sombre ? "text-white/[0.04]" : "text-primary/[0.06]")}>
          {Icone}
        </div>
      </div>

      <div className="grid h-full gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:items-center lg:gap-10 lg:p-10 xl:p-14">
        {/* Colonne texte */}
        <div className="lg:col-span-5">
          <p className={cn("flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em]", sombre ? "text-purple-300" : "text-primary-texte")}>
            <span
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-xl [&>svg]:h-5 [&>svg]:w-5",
                sombre ? "bg-white/10 text-white" : "bg-primary/10 text-primary-texte"
              )}
              aria-hidden="true"
            >
              {Icone}
            </span>
            <span className="tabular-nums">{pole.numero}</span>
            <span aria-hidden="true">·</span>
            <span>{pole.nomCourt}</span>
          </p>
          {/* Nom du pôle en grand (demande de Bilel : le titre des pôles doit être plus visible), puis la promesse. */}
          <h3 id={`pole-${pole.numero}`} className="mt-5 text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl xl:text-5xl">
            {pole.nomCourt}
          </h3>
          <p className={cn("mt-3 text-lg font-semibold leading-snug sm:text-xl", sombre ? "text-purple-200" : "text-primary-texte")}>
            {pole.titre}
          </p>
          <p className={cn("mt-4 leading-relaxed", sombre ? "text-slate-300" : "text-muted-foreground")}>{pole.lignes[0]}</p>
          <p className={cn("mt-2 leading-relaxed", sombre ? "text-slate-300" : "text-muted-foreground")}>{pole.lignes[1]}</p>
          <p className="mt-4 text-sm">
            <span className="font-semibold">{pole.prix}</span>
            {pole.prixDetail && <span className={sombre ? "text-slate-400" : "text-muted-foreground"}>, {pole.prixDetail}</span>}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BoutonLien href={pole.href} label={pole.ancre} variante="primaire" />
            {pole.outil && (
              <BoutonLien
                href={pole.outil.href}
                label={pole.outil.label}
                variante="secondaire"
                className={sombre ? "border-white/20 bg-white/5 text-white hover:bg-white/10" : undefined}
              />
            )}
          </div>
        </div>

        {/* Colonne sous-pages ou cas d'usage */}
        <div className="lg:col-span-7">
          <p className={cn("text-xs font-semibold uppercase tracking-[0.14em]", sombre ? "text-slate-400" : "text-muted-foreground")}>
            {pole.titreElements}
          </p>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {pole.elements.map((el) => {
              const contenu = (
                <>
                  <span className="flex items-start justify-between gap-3">
                    <span className="font-semibold leading-snug">{el.label}</span>
                    {el.href && (
                      <ArrowRight
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none",
                          sombre ? "text-purple-300" : "text-primary-texte"
                        )}
                        aria-hidden="true"
                      />
                    )}
                  </span>
                  {el.description && (
                    <span className={cn("mt-1.5 block text-sm leading-relaxed", sombre ? "text-slate-300" : "text-muted-foreground")}>
                      {el.description}
                    </span>
                  )}
                  {el.prix && (
                    <span
                      className={cn(
                        "mt-3 inline-flex w-fit items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold",
                        sombre ? "border-white/15 bg-white/5 text-white" : "border-primary/25 bg-primary/5 text-primary-texte"
                      )}
                    >
                      {el.prix}
                    </span>
                  )}
                </>
              );
              const classes = cn(
                "group flex h-full flex-col rounded-2xl border p-4 transition-[translate,border-color,background-color] duration-300 ease-out motion-reduce:transition-none",
                sombre
                  ? "border-white/10 bg-white/[0.04] hover:border-purple-300/50 hover:bg-white/[0.08]"
                  : "border-border bg-background hover:border-primary/40 hover:bg-primary/[0.03]",
                el.href && "hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:hover:translate-y-0"
              );
              return (
                <li key={el.label} className="h-full">
                  {el.href ? (
                    <Link href={el.href} className={classes}>
                      {contenu}
                    </Link>
                  ) : (
                    <div className={classes}>{contenu}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
