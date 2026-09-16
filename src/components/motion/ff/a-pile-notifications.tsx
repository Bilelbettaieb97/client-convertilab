import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Adapté de Frontend Forever : https://frontendforever.com/frontendforever/stacked-glass-notification-cards-with-hover-animation, licence MIT.
 * Adaptation : composant serveur, CSS pur ; le verre (`backdrop-filter`), les
 * variables sombres, les heures relatives et le `transition: all` du modèle
 * sont retirés. Les cartes sont opaques (tokens `card` / `border`), la pastille
 * d'icône en violet de la charte. La pile se déploie au survol de la cellule
 * parente (classe `group` du BentoCard) et non carte par carte ; avec
 * prefers-reduced-motion elle est déployée dès le rendu, sans transition.
 * Masquée sous `lg` : aucun poids mobile. Trois éléments maximum.
 *
 * Les textes viennent des props ; la mention « Exemple » rappelle qu'il ne
 * s'agit pas de notifications réelles.
 */
export interface NotificationExemple {
  /** Icône lucide 16 px, passée en nœud React (`<FileText className="h-4 w-4" />`). */
  icon: ReactNode;
  titre: string;
  detail: string;
}

export interface PileNotificationsProps {
  items: NotificationExemple[];
  /** Mention en haut à droite (« Exemple » par défaut). */
  mention?: string;
  className?: string;
}

/**
 * États par carte (index 0, 1, 2). Tailwind v4 : `translate-*` et `scale-*`
 * écrivent les propriétés `translate` / `scale`, d'où `transition-[translate,scale,opacity]`.
 * Repos : décalage i × 12 px (seul le padding bas des cartes du dessous
 * dépasse), échelle 1 - i × 0,04, opacité 1 / 0,85 / 0,7. Les cartes du
 * dessous étant translucides, leur contenu reste invisible tant que la pile
 * est repliée (sinon le texte de la carte encore en dessous transparaît) et
 * apparaît en fondu au déploiement.
 * Déployé (survol en lg, ou animations réduites) : décalage i × 56 px (cartes
 * de 62 px, léger tuilage de 6 px), échelle 1, opacité 1. Conteneur `h-44`
 * (176 px) : la hauteur déployée est réservée, aucun décalage de mise en page.
 */
const ETATS: readonly { carte: string; contenu: string }[] = [
  { carte: "z-30 translate-y-0 scale-100 opacity-100", contenu: "opacity-100" },
  {
    carte: cn(
      "z-20 translate-y-[12px] scale-[0.96] opacity-85",
      "lg:group-hover:translate-y-[56px] lg:group-hover:scale-100 lg:group-hover:opacity-100",
      "motion-reduce:translate-y-[56px] motion-reduce:scale-100 motion-reduce:opacity-100"
    ),
    contenu: "opacity-0 lg:group-hover:opacity-100 motion-reduce:opacity-100",
  },
  {
    carte: cn(
      "z-10 translate-y-[24px] scale-[0.92] opacity-70",
      "lg:group-hover:translate-y-[112px] lg:group-hover:scale-100 lg:group-hover:opacity-100",
      "motion-reduce:translate-y-[112px] motion-reduce:scale-100 motion-reduce:opacity-100"
    ),
    contenu: "opacity-0 lg:group-hover:opacity-100 motion-reduce:opacity-100",
  },
];

export function PileNotifications({ items, mention = "Exemple", className }: PileNotificationsProps) {
  const cartes = items.slice(0, ETATS.length);
  return (
    <div className={cn("relative mt-6 hidden max-w-sm lg:block", className)}>
      <span className="absolute -top-5 right-0 text-[10px] uppercase tracking-wider text-muted-foreground">{mention}</span>
      <ul className="relative h-44">
        {cartes.map((item, i) => (
          <li
            key={item.titre}
            className={cn(
              "absolute inset-x-0 top-0 flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3",
              "shadow-[0_1px_2px_rgba(15,23,42,0.06)]",
              "transition-[translate,scale,opacity] duration-300 ease-out motion-reduce:transition-none",
              ETATS[i].carte
            )}
          >
            <div
              className={cn(
                "flex min-w-0 flex-1 items-center gap-3 transition-opacity duration-300 ease-out motion-reduce:transition-none",
                ETATS[i].contenu
              )}
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary-texte [&>svg]:h-4 [&>svg]:w-4"
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium text-foreground">{item.titre}</span>
                <span className="block truncate text-xs text-muted-foreground">{item.detail}</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PileNotifications;
