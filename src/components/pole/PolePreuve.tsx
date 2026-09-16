import type { ReactNode } from "react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Conteneur, LienDiscret, Paragraphes, Surtitre, type PoleLienProps } from "./pole-ui";

export interface PoleCas {
  /** Nom du client (ex. « JSM Jardinage »). */
  nom: string;
  /** Prestation livrée (ex. « Site vitrine + landing d'estimation »). */
  prestation: string;
  /** Un fait vérifiable ou la citation réelle du client, jamais un chiffre inventé. */
  fait: string;
  /** Étude de cas interne (/etude-de-cas/[slug]). */
  href?: string;
  /** Site consultable du client. */
  siteHref?: string;
  /** Ancre du lien vers l'étude de cas. */
  ancre?: string;
}

export interface PolePreuveProps {
  id?: string;
  surtitre?: string;
  /** H2 de la section. */
  titre: string;
  /** Ce que nous faisons et ce que le client voit, sans résultat imaginaire. */
  texte: string | string[];
  /** Cas réels (source : src/data/case-studies.ts). */
  cas?: PoleCas[];
  /** Lien de sortie (portfolio, campagne, outil). */
  lien?: PoleLienProps;
  /** Précision honnête en petit (ex. « Campagne lancée le 04/09/2026, 36 €/jour »). */
  note?: string;
  /**
   * Colonne de droite en desktop (carte « ce que vous pouvez vérifier »,
   * tableau de bord d'exemple...). Sans `aside` ni `cas`, le texte est centré
   * pour ne pas laisser la moitié droite de l'écran vide.
   */
  aside?: ReactNode;
}

export default function PolePreuve({ id, surtitre, titre, texte, cas, lien, note, aside }: PolePreuveProps) {
  const avecCas = Boolean(cas && cas.length > 0);
  const centre = !aside && !avecCas;
  return (
    <section id={id} className="bg-muted/30 py-16 sm:py-20">
      <Conteneur>
        <div className={cn(aside && "grid items-center gap-10 lg:grid-cols-12 lg:gap-12")}>
          <div className={cn("max-w-3xl", centre && "mx-auto text-center", aside && "lg:col-span-7")}>
            {surtitre && <Surtitre>{surtitre}</Surtitre>}
            <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">{titre}</h2>
            <div className="mt-4 space-y-3 text-lg">
              <Paragraphes texte={texte} />
            </div>
            {note && <p className="mt-3 text-sm text-muted-foreground">{note}</p>}
            {lien && (
              <div className="mt-5">
                <LienDiscret {...lien} className="font-semibold" />
              </div>
            )}
          </div>
          {aside && <div className="lg:col-span-5">{aside}</div>}
        </div>
        {cas && cas.length > 0 && (
          <ul
            className={cn(
              "mt-10 grid gap-5",
              // Un seul cas : carte en vedette sur toute la largeur (aucune case vide) ; deux : deux colonnes ; trois et plus : trois.
              cas.length === 2 && "sm:grid-cols-2",
              cas.length >= 3 && "sm:grid-cols-2 lg:grid-cols-3",
            )}
          >
            {cas.map((c) => (
              <li
                key={c.nom}
                className={cn("flex flex-col rounded-2xl border border-border bg-card p-6", cas.length === 1 && "sm:p-8")}
              >
                <h3 className="text-lg font-semibold text-foreground">{c.nom}</h3>
                <p className="mt-1 text-sm font-medium text-primary-texte">{c.prestation}</p>
                <p className={cn("mt-3 leading-relaxed text-muted-foreground", cas.length === 1 ? "max-w-3xl text-base" : "text-sm")}>
                  {c.fait}
                </p>
                {(c.href || c.siteHref) && (
                  <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-5 text-sm font-semibold">
                    {c.href && (
                      <Link
                        href={c.href}
                        className="inline-flex min-h-11 items-center rounded-sm text-primary-texte underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {c.ancre ?? c.nom}
                      </Link>
                    )}
                    {c.siteHref && (
                      <a
                        href={c.siteHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-1 rounded-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {/* Libellé réduit au domaine ; le href reste complet. */}
                        {c.siteHref.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "")}
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        <span className="sr-only"> (ouvre dans un nouvel onglet)</span>
                      </a>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </Conteneur>
    </section>
  );
}
