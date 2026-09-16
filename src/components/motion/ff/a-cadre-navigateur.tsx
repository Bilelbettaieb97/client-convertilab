import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Adapté de Frontend Forever : https://frontendforever.com/frontendforever/minimal-browser-card-with-traffic-light-dots-and-search, licence MIT.
 * Adaptation : composant serveur, `transition: all` sur `*`, hauteur fixe,
 * ombres internes et variables sombres du modèle retirés ; chevrons et cadenas
 * en lucide ; la barre de recherche devient une barre d'adresse qui affiche le
 * domaine réel du site montré. Seules couleurs hors charte : les trois
 * pastilles rouge / jaune / vert, convention macOS. Rayon `xl` : le cadre vit
 * dans une carte `2xl`, jamais le même rayon que son parent.
 *
 * Le corps (`children`) est `relative` et coupe ce qui dépasse : une `<Image fill>`
 * s'y pose directement, et une capture pleine largeur plus haute que le cadre
 * y est simplement tronquée en bas, comme dans une vraie fenêtre. La barre est décorative (`aria-hidden`) ; l'image et la
 * légende restent lisibles par les lecteurs d'écran.
 */
export interface CadreNavigateurProps {
  /** Domaine affiché dans la barre d'adresse (site réel, consultable). */
  domaine: string;
  children: ReactNode;
  /** Légende facultative sous l'aperçu. */
  legende?: string;
  className?: string;
}

export function CadreNavigateur({ domaine, children, legende, className }: CadreNavigateurProps) {
  return (
    <div className={cn("flex h-full flex-col overflow-hidden rounded-xl border border-border/80 bg-white", className)}>
      <div className="flex items-center gap-2 border-b border-border/60 bg-slate-50 px-3 py-2" aria-hidden="true">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="ml-1 flex items-center gap-0.5 text-slate-300">
          <ChevronLeft className="h-3.5 w-3.5" strokeWidth={2} />
          <ChevronRight className="h-3.5 w-3.5" strokeWidth={2} />
        </span>
        <span className="flex min-w-0 flex-1 items-center gap-1.5 rounded-md border border-border/60 bg-white px-2.5 py-1 text-[11px] text-slate-500">
          <Lock className="h-3 w-3 shrink-0 text-slate-400" strokeWidth={2} />
          <span className="truncate">{domaine}</span>
        </span>
      </div>
      {/* overflow-hidden : une capture plus haute que le cadre est coupée en bas, sans pousser la légende. */}
      <div className="relative min-h-0 flex-1 overflow-hidden">{children}</div>
      {legende && <p className="border-t border-border/60 bg-white px-4 py-2 text-xs text-muted-foreground">{legende}</p>}
    </div>
  );
}

export default CadreNavigateur;
