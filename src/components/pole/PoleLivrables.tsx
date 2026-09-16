import type { LucideIcon } from "lucide-react";

export interface PoleLivrable {
  icon: LucideIcon;
  titre: string;
  texte?: string;
}

export interface PoleLivrablesProps {
  livrables: PoleLivrable[];
  /** Colonnes en desktop (3 par défaut) : 2 pour quatre livrables, afin de ne pas laisser une case vide. */
  colonnes?: 2 | 3;
}

export default function PoleLivrables({ livrables, colonnes = 3 }: PoleLivrablesProps) {
  return (
    <ul className={colonnes === 2 ? "grid gap-4 sm:grid-cols-2" : "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"}>
      {livrables.map(({ icon: Icon, titre, texte }) => (
        <li key={titre} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-semibold text-foreground">{titre}</h3>
            {texte && <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{texte}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}
