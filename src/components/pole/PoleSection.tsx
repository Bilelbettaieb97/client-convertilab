import { cn } from "@/lib/utils";
import { Conteneur, Paragraphes, Surtitre } from "./pole-ui";

export interface PoleSectionProps {
  /** Ancre facultative (#offres, #methode...). */
  id?: string;
  surtitre?: string;
  /** H2 en forme de question ou de bénéfice, avec le mot-clé secondaire. */
  titre: string;
  intro?: string | string[];
  /** Fond blanc (par défaut) ou gris très clair pour alterner les écrans. */
  fond?: "blanc" | "gris";
  /** Titre et intro centrés (par défaut) ou alignés à gauche. */
  alignement?: "centre" | "gauche";
  className?: string;
  children?: React.ReactNode;
}

export default function PoleSection({
  id,
  surtitre,
  titre,
  intro,
  fond = "blanc",
  alignement = "centre",
  className,
  children,
}: PoleSectionProps) {
  const centre = alignement === "centre";
  return (
    <section id={id} className={cn("py-16 sm:py-20", fond === "gris" ? "bg-muted/30" : "bg-background", className)}>
      <Conteneur>
        <div className={cn("max-w-3xl", centre ? "mx-auto text-center" : "")}>
          {surtitre && <Surtitre>{surtitre}</Surtitre>}
          <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">{titre}</h2>
          {intro && (
            <div className="mt-4 space-y-3 text-lg">
              <Paragraphes texte={intro} />
            </div>
          )}
        </div>
        {children && <div className="mt-10">{children}</div>}
      </Conteneur>
    </section>
  );
}
