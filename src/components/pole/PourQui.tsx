import { Check, FileSignature, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Conteneur, Paragraphes, Surtitre } from "./pole-ui";

export interface PourQuiListe {
  /** Ex. « C'est fait pour vous si... ». */
  titre: string;
  items: string[];
}

export interface PourQuiEngagement {
  /** Ex. « Notre engagement, écrit noir sur blanc ». */
  titre: string;
  /** Texte de l'engagement : jamais de garantie de remboursement ni de résultat. */
  texte: string | string[];
}

export interface PourQuiProps {
  id?: string;
  surtitre?: string;
  /** H2, ex. « Nous préférons vous dire non que vous faire perdre six mois ». */
  titre: string;
  intro?: string | string[];
  pour: PourQuiListe;
  pasPour: PourQuiListe;
  engagement?: PourQuiEngagement;
  fond?: "blanc" | "gris";
  className?: string;
}

/**
 * « C'est fait pour vous si... / Ce n'est pas pour vous si... » et encadré
 * d'engagement écrit. Serveur, tout en props.
 */
export default function PourQui({
  id,
  surtitre,
  titre,
  intro,
  pour,
  pasPour,
  engagement,
  fond = "blanc",
  className,
}: PourQuiProps) {
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
            <h3 className="text-lg font-semibold text-foreground">{pour.titre}</h3>
            <ul className="mt-5 space-y-3">
              {pour.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <span
                    className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                    aria-hidden="true"
                  >
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-dashed border-border bg-muted/40 p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-foreground">{pasPour.titre}</h3>
            <ul className="mt-5 space-y-3">
              {pasPour.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span
                    className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-slate-500"
                    aria-hidden="true"
                  >
                    <Minus className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {engagement && (
          <div className="mx-auto mt-6 max-w-4xl rounded-2xl border border-primary/25 bg-gradient-to-br from-purple-50 via-white to-pink-50 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary ring-1 ring-primary/20"
                aria-hidden="true"
              >
                <FileSignature className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{engagement.titre}</h3>
                <div className="mt-2 space-y-2">
                  <Paragraphes texte={engagement.texte} className="text-slate-700" />
                </div>
              </div>
            </div>
          </div>
        )}
      </Conteneur>
    </section>
  );
}
