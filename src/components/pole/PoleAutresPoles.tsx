import Link from "next/link";
import { majuscule } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { autresPoles, type PoleSlug } from "@/data/poles";
import { Conteneur, Paragraphes, Surtitre } from "./pole-ui";

export interface PoleAutresPolesProps {
  id?: string;
  /** Pôle de la page courante : les trois autres sont affichés. */
  slug: PoleSlug;
  surtitre?: string;
  /** H2 de la section (ex. « Nos trois autres pôles »). */
  titre: string;
  intro?: string | string[];
}

export default function PoleAutresPoles({ id, slug, surtitre, titre, intro }: PoleAutresPolesProps) {
  const poles = autresPoles(slug);
  return (
    <section id={id} className="bg-background py-16 sm:py-20">
      <Conteneur>
        <div className="mx-auto max-w-3xl text-center">
          {surtitre && <Surtitre>{surtitre}</Surtitre>}
          <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">{titre}</h2>
          {intro && (
            <div className="mt-4 space-y-3 text-lg">
              <Paragraphes texte={intro} />
            </div>
          )}
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {poles.map((pole) => {
            const Icon = pole.icon;
            return (
              <li key={pole.slug}>
                <Link
                  href={pole.href}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors motion-reduce:transition-none hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary-texte">{pole.numero}</span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">{pole.nomCourt}</p>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">{pole.titre}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pole.lignes[0]}</p>
                  <p className="mt-3 text-sm font-medium text-foreground">{majuscule(pole.prix)}</p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-primary-texte group-hover:underline underline-offset-4">
                    {pole.ancre}
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Conteneur>
    </section>
  );
}
