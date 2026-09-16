"use client";

import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useReducedMotionSafe } from "@/components/motion/use-reduced-motion-safe";
import { cn } from "@/lib/utils";

/**
 * Grille « bento » (les quatre pôles sur l'accueil).
 * Source : Magic UI `bento-grid`, adapté : lucide au lieu de @radix-ui/react-icons,
 * next/link, couleurs de la charte (tokens), icône passée en nœud React
 * (`icon={<Globe />}`) pour rester utilisable depuis une page serveur. Le lien
 * vers la page pôle est toujours visible (le modèle le masquait jusqu'au
 * survol : quatre cellules sans suite annoncée et un vide réservé en bas de
 * carte) ; au survol, seule la flèche glisse et le bloc texte s'élève de 4 px.
 * Tout le texte vient des props.
 */
export interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

export interface BentoCardProps extends Omit<ComponentPropsWithoutRef<"div">, "title" | "content"> {
  /** Titre de la carte (h3). */
  name: string;
  /** Position dans la grille (ex. `lg:col-span-2 lg:row-span-2`). */
  className?: string;
  /** Décor de fond facultatif (icône animée légère, illustration). */
  background?: ReactNode;
  /**
   * Icône rendue, ex. `<Globe className="h-9 w-9" />`. Un nœud React (pas un
   * composant) : une page serveur ne peut pas passer une fonction à ce
   * composant client.
   */
  icon: ReactNode;
  description: string;
  href: string;
  /** Libellé du lien, ancre descriptive. */
  cta: string;
  /** Ligne d'accroche facultative (numéro « 01 », prix d'entrée...). */
  meta?: string;
  /** Ligne sous la description (prix d'entrée, « sur devis »). */
  footer?: string;
  /** Contenu dans le flux entre le texte et le lien (illustration, esquisse) : dimensionne la carte, contrairement à `background`. */
  children?: ReactNode;
  /**
   * Colonne de droite en `lg` (48 % de la largeur, alignée en haut) : pour une
   * illustration moins haute que le texte (pile de notifications). Sous `lg`,
   * l'illustration doit se masquer elle-même (`hidden lg:block`).
   */
  aside?: ReactNode;
}

export function BentoGrid({ children, className, ...props }: BentoGridProps) {
  return (
    <div className={cn("grid w-full auto-rows-[minmax(16rem,auto)] grid-cols-1 gap-4 lg:grid-cols-3", className)} {...props}>
      {children}
    </div>
  );
}

export function BentoCard({
  name,
  className,
  background,
  icon,
  description,
  href,
  cta,
  meta,
  footer,
  children,
  aside,
  ...props
}: BentoCardProps) {
  const reduced = useReducedMotionSafe();

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card",
        "shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_32px_-12px_rgba(15,23,42,0.08)]",
        "transition-[transform,box-shadow,border-color] duration-300 motion-reduce:transition-none",
        "hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_1px_2px_rgba(15,23,42,0.04),0_20px_40px_-16px_rgba(124,58,237,0.25)]",
        "focus-within:border-primary/40",
        className
      )}
      {...props}
    >
      {background && <div className="pointer-events-none absolute inset-0" aria-hidden="true">{background}</div>}

      <div className={cn("relative z-10 flex flex-1 flex-col p-6 sm:p-7", aside && "lg:flex-row lg:gap-6")}>
        <div className="flex flex-1 flex-col">
          {meta && <p className="text-xs font-semibold uppercase tracking-wider text-purple-700">{meta}</p>}
          <div
            className={cn(
              "mt-3 flex flex-col gap-2 transition-transform duration-300 motion-reduce:transition-none",
              !reduced && "lg:group-hover:-translate-y-1"
            )}
          >
            <span className="text-primary [&>svg]:h-9 [&>svg]:w-9" aria-hidden="true">
              {icon}
            </span>
            <h3 className="text-xl font-semibold leading-snug text-foreground">{name}</h3>
            <p className="max-w-lg leading-relaxed text-muted-foreground">{description}</p>
            {footer && <p className="mt-1 text-sm font-medium text-foreground">{footer}</p>}
          </div>

          {children}

          <div className="mt-auto pt-6">
            {/* Lien toujours visible ; la flèche seule glisse au survol de la cellule (même geste que FLECHE_GLISSE). */}
            <Link
              href={href}
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary-texte underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              {cta}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        {aside && <div className="hidden lg:block lg:w-[48%] lg:shrink-0 lg:self-start">{aside}</div>}
      </div>

      <div
        className="pointer-events-none absolute inset-0 transition-colors duration-300 group-hover:bg-primary/[0.03] motion-reduce:transition-none"
        aria-hidden="true"
      />
    </div>
  );
}

export default BentoGrid;
