import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { FLECHE_EXTERNE_GLISSE, FLECHE_GLISSE, REFLET_BOUTON } from "@/components/motion/ff/c-bouton-reflet";
import { FILET_LIEN_TEXTE } from "@/components/motion/ff/c-soulignement-centre";

/**
 * Briques internes partagées par les composants de pôle.
 * Composants serveur : aucun état, aucun effet, tout le texte vient des props.
 */

export interface PoleLienProps {
  href: string;
  label: string;
  /** Lien externe (Calendly, site client) : nouvel onglet + rel sécurisé. */
  external?: boolean;
}

// `group` : les icônes (flèche, lien externe) glissent au survol du bouton entier.
const BOUTON_BASE =
  "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-[color,background-color,box-shadow,scale] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

/**
 * Filet des liens texte (variante `discret`, `LienDiscret`, sorties de FAQ et de
 * cartes) : exporté pour être réutilisé (QuatrePoles, Footer). Source :
 * `src/components/motion/ff/c-soulignement-centre.tsx`.
 */
export const FILET_LIEN = FILET_LIEN_TEXTE;

const BOUTON_VARIANTES = {
  // Seul motif de bouton primaire du site : dégradé de la charte + reflet en biais
  // au survol / focus (un passage, jamais de boucle), repris tel quel par
  // StickyCtaBar et le bouton Calendly de la navigation.
  primaire: cn(
    "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md hover:from-purple-700 hover:to-pink-700",
    REFLET_BOUTON
  ),
  secondaire:
    "border border-border bg-background text-foreground hover:bg-muted",
  // min-h-11 de BOUTON_BASE conservé : cible tactile de 44 px même sur une ligne.
  // Filet 1 px couleur du texte qui se dessine de gauche à droite (pas de `underline`).
  discret: cn("text-primary-texte hover:text-primary-texte/80 px-0 rounded-none", FILET_LIEN_TEXTE),
} as const;

export type BoutonVariante = keyof typeof BOUTON_VARIANTES;

interface BoutonLienProps extends PoleLienProps {
  variante?: BoutonVariante;
  className?: string;
  /** Ne pas afficher la flèche (utile pour les boutons secondaires). */
  sansIcone?: boolean;
}

export function BoutonLien({
  href,
  label,
  external = false,
  variante = "primaire",
  className,
  sansIcone = false,
}: BoutonLienProps) {
  const classes = cn(BOUTON_BASE, BOUTON_VARIANTES[variante], className);
  // Flèche interne : glisse de 2 px vers la droite ; lien externe : diagonale haut-droite (« s'ouvre ailleurs »).
  const icone = sansIcone ? null : external ? (
    <ExternalLink className={cn("h-4 w-4 shrink-0", FLECHE_EXTERNE_GLISSE)} aria-hidden="true" />
  ) : (
    <ArrowRight className={cn("h-4 w-4 shrink-0", FLECHE_GLISSE)} aria-hidden="true" />
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {label}
        {icone}
        <span className="sr-only"> (ouvre dans un nouvel onglet)</span>
      </a>
    );
  }

  // Ancre interne (#formulaire, #offres) : un <a> simple. Un next/link vers une ancre de la page courante
  // déclenche un prefetch RSC de la route à chaque variante d'ancre (5 requêtes inutiles par page pôle).
  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes}>
        {label}
        {icone}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {label}
      {icone}
    </Link>
  );
}

/** Lien texte discret avec flèche, pour les cartes et les listes. */
export function LienDiscret({ href, label, external = false, className }: PoleLienProps & { className?: string }) {
  return <BoutonLien href={href} label={label} external={external} variante="discret" className={className} />;
}

/** Conteneur standard des sections de pôle. */
export function Conteneur({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("container mx-auto px-4 sm:px-6", className)}>{children}</div>;
}

/** Surtitre discret au-dessus d'un titre. */
export function Surtitre({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    // text-purple-700 : contraste AA garanti sur les fonds purple-50 / pink-50 des heros (text-primary était sous 4,5:1).
    <p className={cn("mb-3 text-sm font-semibold uppercase tracking-wide text-purple-700", className)}>{children}</p>
  );
}

/** Accepte un paragraphe ou plusieurs, sans jamais écrire de texte. */
export function Paragraphes({
  texte,
  className,
}: {
  texte: string | string[];
  className?: string;
}) {
  const liste = Array.isArray(texte) ? texte : [texte];
  return (
    <>
      {liste.map((p, i) => (
        <p key={i} className={cn("leading-relaxed text-muted-foreground", className)}>
          {p}
        </p>
      ))}
    </>
  );
}
