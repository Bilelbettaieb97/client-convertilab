import type { LucideIcon } from "lucide-react";
import { MessageCircle, Repeat2, Send, ThumbsUp } from "lucide-react";
import { BorderBeam } from "@/components/motion";
import { cn } from "@/lib/utils";

export interface CritereCiblage {
  icon: LucideIcon;
  libelle: string;
  valeur: string;
}

/**
 * Maquette d'un post sponsorisé LinkedIn (cabinet fictif) : en-tête, texte
 * d'accroche, visuel du document proposé, bouton de Lead Gen Form, puis le
 * réglage d'audience qui décide qui voit ce post (poste, secteur, taille,
 * zone). CSS pur, rendu côté serveur : badge « Exemple » et légende
 * obligatoires, aucun chiffre de résultat, aucun logo reproduit. Seule
 * BorderBeam de l'écran du hero.
 *
 * `compact` (aside du hero, colonne de 448 px à côté d'un texte de 700 à
 * 780 px) : mêmes textes, moins de hauteur. Barre J'aime / Commenter
 * masquée, accroche sur trois lignes au plus (LinkedIn coupe aussi les
 * siennes), visuel et marges réduits, critères d'audience resserrés, pour
 * tenir entre 340 et 520 px de haut.
 */
export default function MockPostLinkedin({
  ciblage,
  className,
  compact = false,
}: {
  ciblage: CritereCiblage[];
  className?: string;
  compact?: boolean;
}) {
  const margeX = compact ? "px-4" : "px-4 sm:px-5";
  const retraitX = compact ? "mx-4" : "mx-4 sm:mx-5";
  return (
    <figure className={cn("w-full max-w-md", className)}>
      <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(124,58,237,0.35)]">
        <BorderBeam size={90} duration={10} />
        {/* En-tête du post */}
        <div className={cn("flex items-start justify-between gap-3", margeX, compact ? "pt-3" : "pt-4")}>
          <div className="flex items-center gap-2.5">
            <span
              className={cn(
                "inline-flex shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-pink-600 text-xs font-bold text-white",
                compact ? "h-9 w-9" : "h-10 w-10"
              )}
              aria-hidden="true"
            >
              VC
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-foreground">Votre cabinet</p>
              <p className="text-xs text-muted-foreground">Sponsorisé · Expertise comptable</p>
            </div>
          </div>
          <span className="shrink-0 rounded-full border border-border bg-white px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-slate-700">
            Exemple
          </span>
        </div>
        <p
          className={cn(
            "text-sm text-foreground",
            margeX,
            /* Marges et non padding en mode compact : avec line-clamp (overflow hidden), un
               padding-bottom laisserait apparaître le haut de la 4e ligne coupée. */
            compact ? "line-clamp-3 my-2 leading-snug" : "pb-3 pt-3 leading-relaxed"
          )}
        >
          Vos clients vous demandent des conseils que vous n&apos;avez pas le temps de facturer ? Nous avons écrit la méthode
          que nous appliquons dans notre cabinet, en cinq étapes.
        </p>

        {/* Visuel du document proposé */}
        <div
          className={cn(
            "flex items-end rounded-xl bg-gradient-to-br from-slate-900 to-slate-700",
            retraitX,
            compact ? "min-h-24 p-3" : "h-28 p-4"
          )}
          aria-hidden="true"
        >
          <div>
            <span className="rounded bg-white/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/90">Guide</span>
            <p className={cn("mt-1.5 font-bold leading-snug text-white", compact ? "text-sm" : "text-base")}>
              Facturer le conseil en cabinet : la méthode en 5 étapes
            </p>
          </div>
        </div>

        {/* Bouton du Lead Gen Form */}
        <div
          className={cn(
            "flex items-center justify-between gap-3 rounded-lg bg-muted/60 px-3",
            retraitX,
            compact ? "mb-2 mt-1.5 py-2" : "mb-3 mt-2 py-2.5"
          )}
        >
          <div className="min-w-0 leading-tight">
            <p className="text-[11px] uppercase tracking-wide text-muted-foreground">Lead Gen Form pré-rempli</p>
            <p className="text-xs font-medium leading-snug text-foreground">Prénom, email pro, entreprise, poste</p>
          </div>
          <span className="shrink-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3.5 py-1.5 text-xs font-semibold text-white">
            Demander un échange
          </span>
        </div>
        {!compact && (
          <ul className="flex gap-5 border-t border-border px-4 py-2 text-xs text-muted-foreground sm:px-5" aria-hidden="true">
            <li className="inline-flex items-center gap-1">
              <ThumbsUp className="h-3.5 w-3.5" />
              J&apos;aime
            </li>
            <li className="inline-flex items-center gap-1">
              <MessageCircle className="h-3.5 w-3.5" />
              Commenter
            </li>
            <li className="inline-flex items-center gap-1">
              <Repeat2 className="h-3.5 w-3.5" />
              Republier
            </li>
            <li className="inline-flex items-center gap-1">
              <Send className="h-3.5 w-3.5" />
              Envoyer
            </li>
          </ul>
        )}

        {/* Qui voit ce post : le réglage d'audience */}
        <div className={cn("border-t border-border bg-muted/30", margeX, compact ? "py-3" : "py-4")}>
          <p className="text-xs font-semibold uppercase tracking-wider text-purple-700">Qui voit ce post</p>
          <ul className={cn("grid sm:grid-cols-2", compact ? "mt-2 gap-1.5" : "mt-2.5 gap-2")}>
            {ciblage.map(({ icon: Icon, libelle, valeur }) => (
              <li
                key={libelle}
                className={cn(
                  "flex items-center rounded-xl border border-border bg-background",
                  compact ? "gap-2 px-2.5 py-1.5" : "gap-2.5 px-3 py-2"
                )}
              >
                <span
                  className={cn(
                    "inline-flex shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary",
                    compact ? "h-7 w-7" : "h-8 w-8"
                  )}
                  aria-hidden="true"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">{libelle}</p>
                  <p className={cn("font-semibold leading-snug text-foreground", compact ? "text-[11px]" : "text-xs")}>{valeur}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <figcaption className={cn("text-center text-xs text-muted-foreground", compact ? "mt-2" : "mt-3")}>
        Exemple de post sponsorisé et de réglage d&apos;audience avec un cabinet fictif : les critères se définissent avec vous
        lors du diagnostic, pas un résultat client.
      </figcaption>
    </figure>
  );
}
