"use client";

import { useId, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useReducedMotionSafe } from "@/components/motion/use-reduced-motion-safe";
import { Timer } from "lucide-react";
import { cn } from "@/lib/utils";
import { CAS_PRATIQUES, SECTEURS, type SecteurSlug } from "./cas-pratiques";

type Filtre = "tous" | SecteurSlug;

/**
 * Cas pratiques filtrables par métier. Le filtre initial est « Tous » : les
 * neuf cartes sont dans le HTML rendu côté serveur. Les transitions de
 * réorganisation sont désactivées avec prefers-reduced-motion.
 */
export default function CasPratiques() {
  const [filtre, setFiltre] = useState<Filtre>("tous");
  const reduced = useReducedMotionSafe();
  const uid = useId();

  const visibles = CAS_PRATIQUES.filter((c) => filtre === "tous" || c.secteurs.includes(filtre));
  const labelSecteur = (slug: SecteurSlug) => SECTEURS.find((s) => s.slug === slug)?.label ?? slug;

  const bouton = (actif: boolean) =>
    cn(
      "inline-flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-full border px-4 text-sm font-medium transition-[background-color,border-color,color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:transition-none",
      actif
        ? "border-transparent bg-foreground text-background shadow-sm"
        : "border-border bg-background text-foreground hover:border-primary/40 hover:bg-muted/60"
    );

  return (
    <div>
      <div
        role="group"
        aria-label="Filtrer les cas pratiques par métier"
        className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
      >
        <button type="button" onClick={() => setFiltre("tous")} aria-pressed={filtre === "tous"} className={bouton(filtre === "tous")}>
          Tous les métiers
        </button>
        {SECTEURS.map((s) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => setFiltre(s.slug)}
            aria-pressed={filtre === s.slug}
            className={bouton(filtre === s.slug)}
          >
            {s.label}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        {visibles.length} cas pratiques affichés.
      </p>

      <LayoutGroup id={uid}>
        <motion.ul layout={!reduced} className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence initial={false} mode="popLayout">
            {visibles.map((cas, i) => {
              const Icon = cas.icon;
              const numero = String(CAS_PRATIQUES.indexOf(cas) + 1).padStart(2, "0");
              return (
                <motion.li
                  key={cas.titre}
                  layout={!reduced}
                  initial={reduced ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? undefined : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, delay: reduced ? 0 : Math.min(i, 5) * 0.03, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_20px_40px_-20px_rgba(124,58,237,0.25)] motion-reduce:transition-none"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      <span className="text-purple-700">{numero}</span>
                      <span aria-hidden="true"> / </span>
                      {cas.tache}
                    </p>
                    <span
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white motion-reduce:transition-none"
                      aria-hidden="true"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground">{cas.titre}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cas.texte}</p>
                  <p className="mt-4 flex items-start gap-2 rounded-xl bg-muted/60 px-4 py-3 text-sm text-foreground">
                    <Timer className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <span className="font-semibold">Ce que cela remplace : </span>
                      {cas.remplace}
                    </span>
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Métiers concernés">
                    {cas.secteurs.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-border bg-background px-2 py-0.5 text-xs font-medium text-muted-foreground"
                      >
                        {labelSecteur(s)}
                      </li>
                    ))}
                  </ul>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </motion.ul>
      </LayoutGroup>
    </div>
  );
}
