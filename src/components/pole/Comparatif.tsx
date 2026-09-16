import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Conteneur, Paragraphes, Surtitre } from "./pole-ui";

export interface ComparatifColonne {
  /** Ex. « Une agence classique » / « Avec ConvertiLab ». */
  titre: string;
  items: string[];
}

export interface ComparatifProps {
  id?: string;
  surtitre?: string;
  /** H2. */
  titre: string;
  intro?: string | string[];
  /** Colonne gauche : croix. */
  gauche: ComparatifColonne;
  /** Colonne droite : coches, légèrement teintée. */
  droite: ComparatifColonne;
  /** Précision honnête en petit sous le tableau. */
  note?: string;
  fond?: "blanc" | "gris";
  className?: string;
}

/**
 * Deux colonnes « classique » (croix) / « avec nous » (coches). Les items
 * sont lus dans l'ordre : mettre en face les points qui se répondent.
 */
export default function Comparatif({
  id,
  surtitre,
  titre,
  intro,
  gauche,
  droite,
  note,
  fond = "gris",
  className,
}: ComparatifProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20", fond === "gris" ? "bg-muted/30" : "bg-background", className)}>
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

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-muted-foreground">{gauche.titre}</h3>
            <ul className="mt-5 space-y-3">
              {gauche.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span
                    className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-slate-500"
                    aria-hidden="true"
                  >
                    <X className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-2xl border border-primary/30 bg-gradient-to-br from-purple-50 via-white to-pink-50 p-6 shadow-[0_20px_40px_-24px_rgba(124,58,237,0.35)] sm:p-7">
            <h3 className="text-lg font-semibold text-foreground">{droite.titre}</h3>
            <ul className="mt-5 space-y-3">
              {droite.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <span
                    className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    aria-hidden="true"
                  >
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {note && <p className="mx-auto mt-6 max-w-4xl text-center text-sm text-muted-foreground">{note}</p>}
      </Conteneur>
    </section>
  );
}
