import { Check, ChevronDown, Image as ImageIcon, MousePointerClick, Phone, ShieldCheck, Star } from "lucide-react";
import { BorderBeam } from "@/components/motion/border-beam";
import { cn } from "@/lib/utils";

/**
 * Maquette CSS d'une landing page annotée : les blocs dans l'ordre de lecture
 * (promesse, preuve, offre en trois blocs, objections, formulaire), chacun
 * repéré par un numéro. Textes d'exemple pour une entreprise d'isolation,
 * mention « Exemple de structure » : aucune donnée réelle. Composant serveur.
 */
export interface MockLandingProps {
  /** Version réduite pour une miniature (hero, preuve, formulaire). */
  compact?: boolean;
  /**
   * Trois blocs seulement (promesse, preuve, formulaire), à taille normale et
   * sans légende : environ 470 px de haut à 448 px de large, pour l'aside du
   * hero de la page. Sans effet si `compact`.
   */
  reduit?: boolean;
  className?: string;
}

function Repere({ n, label, compact }: { n: number; label: string; compact?: boolean }) {
  return (
    <span
      className={cn(
        "absolute left-2 top-2 z-10 inline-flex items-center gap-1 rounded-full bg-slate-900 font-semibold text-white shadow-sm",
        compact ? "px-1.5 py-0.5 text-[8px]" : "px-2 py-0.5 text-[10px]"
      )}
    >
      <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-[8px]">
        {n}
      </span>
      {label}
    </span>
  );
}

export function MockLanding({ compact = false, reduit = false, className }: MockLandingProps) {
  /** Blocs offre et objections masqués, légende retirée : miniature ou aside du hero. */
  const essentiel = compact || reduit;
  const OFFRE = ["Visite gratuite", "Prix fixe écrit", "Chantier en 1 jour"];
  const OBJECTIONS = ["Combien ça coûte ?", "Suis-je éligible à l'aide de l'État ?", "Et si je ne suis pas satisfait ?"];

  return (
    <figure className={cn("w-full", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-border bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.25)]",
          compact && "rounded-xl shadow-none"
        )}
      >
        {!compact && <BorderBeam size={90} duration={10} />}
        {/* Barre de fenêtre : pastilles grises (pas un site réel), badge « Exemple ». */}
        <div className={cn("flex items-center gap-2 border-b border-border bg-slate-50", compact ? "px-2.5 py-1.5" : "px-3.5 py-2")}>
          <span className="flex items-center gap-1" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-slate-300" />
            <span className="h-2 w-2 rounded-full bg-slate-300" />
            <span className="h-2 w-2 rounded-full bg-slate-300" />
          </span>
          <span className="h-4 flex-1 rounded-md bg-white ring-1 ring-border" aria-hidden="true" />
          <span className={cn("shrink-0 rounded-full border border-border bg-white font-semibold uppercase tracking-wide text-slate-700", compact ? "px-1.5 py-px text-[8px]" : "px-2 py-0.5 text-[10px]")}>
            Exemple de structure
          </span>
        </div>

        <div className={cn("space-y-2", compact ? "p-2" : "p-3")}>
          {/* 1. Promesse : titre, sous-titre, bouton, sans menu. */}
          <div className={cn("relative rounded-xl bg-gradient-to-br from-purple-50 via-white to-pink-50 ring-1 ring-border", compact ? "px-3 pb-3 pt-7" : "px-4 pb-4 pt-8")}>
            <Repere n={1} label="Promesse" compact={compact} />
            <p className={cn("font-bold leading-snug text-slate-900", compact ? "text-[11px]" : "text-sm sm:text-base")}>
              Isolation des combles : devis chiffré sous 48 h, aide de l&apos;État déduite
            </p>
            <p className={cn("mt-1 text-slate-600", compact ? "text-[9px]" : "text-[11px] sm:text-xs")}>
              Pour les propriétaires de maison : visite gratuite, chantier réalisé en une journée.
            </p>
            <span
              className={cn(
                "mt-2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 font-semibold text-white",
                compact ? "px-2.5 py-1 text-[9px]" : "px-3 py-1.5 text-[11px]"
              )}
            >
              Recevoir mon devis sous 48 h
              <MousePointerClick className="h-3 w-3" aria-hidden="true" />
            </span>
          </div>

          {/* 2. Preuve rapide : vos avis, votre certification, vos photos. */}
          <div className={cn("relative rounded-xl border border-border", compact ? "px-3 pb-2 pt-7" : "px-4 pb-3 pt-8")}>
            <Repere n={2} label="Preuve" compact={compact} />
            <ul className={cn("flex flex-wrap gap-x-3 gap-y-1 text-slate-700", compact ? "text-[9px]" : "text-[11px]")}>
              <li className="inline-flex items-center gap-1">
                <Star className="h-3 w-3 text-amber-500" aria-hidden="true" />
                Vos avis Google, note et nombre réels
              </li>
              <li className="inline-flex items-center gap-1">
                <ShieldCheck className="h-3 w-3 text-emerald-600" aria-hidden="true" />
                Certification affichée
              </li>
              <li className="inline-flex items-center gap-1">
                <ImageIcon className="h-3 w-3 text-purple-600" aria-hidden="true" />
                Photos de chantiers
              </li>
            </ul>
          </div>

          {!essentiel && (
            <>
              {/* 3. L'offre en trois blocs. */}
              <div className="relative rounded-xl border border-border px-4 pb-3 pt-8">
                <Repere n={3} label="Offre en 3 blocs" />
                <ul className="grid grid-cols-3 gap-2">
                  {OFFRE.map((o) => (
                    <li key={o} className="rounded-lg bg-muted/50 px-2 py-2 text-center text-[11px] font-medium text-slate-800">
                      <Check className="mx-auto mb-1 h-3.5 w-3.5 text-primary" strokeWidth={2.5} aria-hidden="true" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. Objections : trois questions auxquelles la page répond. */}
              <div className="relative rounded-xl border border-border px-4 pb-3 pt-8">
                <Repere n={4} label="Objections" />
                <ul className="divide-y divide-border">
                  {OBJECTIONS.map((q) => (
                    <li key={q} className="flex items-center justify-between py-1.5 text-[11px] font-medium text-slate-800">
                      {q}
                      <ChevronDown className="h-3 w-3 text-slate-400" aria-hidden="true" />
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* 5. Formulaire : trois champs, téléphone en alternative. */}
          <div className={cn("relative rounded-xl border border-primary/30 bg-primary/5", compact ? "px-3 pb-3 pt-7" : "px-4 pb-4 pt-8")}>
            <Repere n={essentiel ? 3 : 5} label="Formulaire" compact={compact} />
            <div className={cn("grid gap-1.5", compact ? "grid-cols-2" : "grid-cols-2")}>
              <span className={cn("rounded-md border border-border bg-white px-2 text-slate-400", compact ? "py-1 text-[9px]" : "py-1.5 text-[11px]")}>Prénom</span>
              <span className={cn("rounded-md border border-border bg-white px-2 text-slate-400", compact ? "py-1 text-[9px]" : "py-1.5 text-[11px]")}>Téléphone</span>
            </div>
            <span
              className={cn(
                "mt-2 block rounded-full bg-slate-900 text-center font-semibold text-white",
                compact ? "py-1 text-[9px]" : "py-1.5 text-[11px]"
              )}
            >
              Être rappelé sous 24 h
            </span>
            {!compact && (
              <p className="mt-2 inline-flex items-center gap-1 text-[10px] text-slate-600">
                <Phone className="h-3 w-3" aria-hidden="true" />
                ou appelez directement : numéro cliquable sur téléphone
              </p>
            )}
          </div>
        </div>
      </div>
      {!essentiel && (
        <figcaption className="mt-3 text-center text-xs text-muted-foreground">
          Exemple de structure : pas de menu, pas de lien sortant, une seule action possible. Textes fictifs, à réécrire avec votre offre.
        </figcaption>
      )}
    </figure>
  );
}

export default MockLanding;
