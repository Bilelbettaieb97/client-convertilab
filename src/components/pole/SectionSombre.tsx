import { cn } from "@/lib/utils";
import { Conteneur } from "./pole-ui";

export interface SectionSombreProps {
  id?: string;
  surtitre?: string;
  /** H2 de la section. */
  titre: string;
  intro?: string | string[];
  /** Titre et intro centrés (par défaut) ou alignés à gauche. */
  alignement?: "centre" | "gauche";
  className?: string;
  children?: React.ReactNode;
}

/**
 * Enveloppe à fond sombre profond (un ou deux blocs par page, pour le rythme).
 * Les enfants doivent utiliser des couleurs claires (`text-white`,
 * `text-white/70`, `border-white/10`) : voir `Timeline sombre` et
 * `Engagements variante="sombre"`.
 */
export default function SectionSombre({
  id,
  surtitre,
  titre,
  intro,
  alignement = "centre",
  className,
  children,
}: SectionSombreProps) {
  const centre = alignement === "centre";
  const paragraphes = intro ? (Array.isArray(intro) ? intro : [intro]) : [];

  return (
    <section
      id={id}
      className={cn("relative isolate overflow-hidden bg-slate-950 py-16 text-white sm:py-20", className)}
    >
      {/* Un seul accent coloré : halo violet en haut, très discret. */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 mx-auto h-80 w-[80%] max-w-3xl rounded-full bg-[radial-gradient(circle,hsl(270_70%_60%_/_0.28),transparent_65%)] blur-3xl"
        aria-hidden="true"
      />
      <Conteneur>
        <div className={cn("max-w-3xl", centre ? "mx-auto text-center" : "")}>
          {surtitre && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-purple-300">{surtitre}</p>
          )}
          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">{titre}</h2>
          {paragraphes.length > 0 && (
            <div className="mt-4 space-y-3 text-lg">
              {paragraphes.map((p, i) => (
                <p key={i} className="leading-relaxed text-slate-300">
                  {p}
                </p>
              ))}
            </div>
          )}
        </div>
        {children && <div className="mt-10">{children}</div>}
      </Conteneur>
    </section>
  );
}
