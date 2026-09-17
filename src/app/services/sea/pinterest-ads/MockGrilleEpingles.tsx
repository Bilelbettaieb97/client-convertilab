import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Maquette d'une grille d'épingles Pinterest, façon résultats de recherche :
 * une barre de recherche, sept épingles aux hauteurs variées (fonds dégradés,
 * aucune image), dont une épingle sponsorisée d'une boutique fictive avec son
 * titre et son bouton « Enregistrer ». CSS pur, rendu côté serveur : badge
 * « Exemple » et légende obligatoires, aucun chiffre de résultat, aucun logo.
 *
 * `compact` (hero) : deux épingles par colonne, hauteurs plus basses, réglages
 * sur une ligne et espacements réduits, pour rester sous 520 px de haut dans
 * la colonne de 448 px du hero. Même contenu, aucun chiffre ajouté.
 */

interface Epingle {
  hauteur: string;
  fond: string;
  /** Titre de l'idée, comme sur Pinterest (aucune marque réelle). */
  titre?: string;
  /** Épingle sponsorisée : la seule avec un titre, un nom de boutique et un bouton. */
  sponsorisee?: boolean;
}

/** Trois colonnes, hauteurs alternées pour l'effet mosaïque. */
const COLONNES: Epingle[][] = [
  [
    { hauteur: "h-28", fond: "from-stone-200 to-stone-400", titre: "Salle de bain bois clair" },
    { hauteur: "h-20", fond: "from-slate-100 to-slate-300", titre: "Carrelage zellige blanc" },
    { hauteur: "h-16", fond: "from-emerald-100 to-emerald-300", titre: "Plantes en salle de bain" },
  ],
  [
    { hauteur: "h-32", fond: "from-amber-100 to-amber-300", sponsorisee: true },
    { hauteur: "h-24", fond: "from-rose-100 to-rose-300", titre: "Douche à l'italienne" },
  ],
  [
    { hauteur: "h-20", fond: "from-sky-100 to-sky-300", titre: "Miroir rond laiton" },
    { hauteur: "h-28", fond: "from-stone-100 to-stone-300", titre: "Rangements en chêne" },
    { hauteur: "h-16", fond: "from-slate-200 to-slate-400", titre: "Robinetterie noire" },
  ],
];

/** Version compacte du hero : deux épingles par colonne, l'épingle sponsorisée toujours au centre. */
const COLONNES_COMPACTES: Epingle[][] = [
  [
    { hauteur: "h-24", fond: "from-stone-200 to-stone-400", titre: "Salle de bain bois clair" },
    { hauteur: "h-16", fond: "from-emerald-100 to-emerald-300", titre: "Plantes en salle de bain" },
  ],
  [
    { hauteur: "h-28", fond: "from-amber-100 to-amber-300", sponsorisee: true },
    { hauteur: "h-10", fond: "from-rose-100 to-rose-300", titre: "Douche à l'italienne" },
  ],
  [
    { hauteur: "h-16", fond: "from-sky-100 to-sky-300", titre: "Miroir rond laiton" },
    { hauteur: "h-24", fond: "from-stone-100 to-stone-300", titre: "Rangements en chêne" },
  ],
];

const REGLAGES = ["Mot-clé : salle de bain bois et blanc", "Catalogue relié", "Tag Pinterest posé"];

/** Libellés courts pour tenir sur une ligne à 448 px (le mot-clé complet reste visible dans la barre de recherche). */
const REGLAGES_COMPACTS = ["Mot-clé ciblé", "Catalogue relié", "Tag posé"];

interface MockGrilleEpinglesProps {
  className?: string;
  /** Hero de la page : mosaïque réduite et espacements resserrés (hauteur visée entre 340 et 520 px à 448 px de large). */
  compact?: boolean;
}

export default function MockGrilleEpingles({ className, compact = false }: MockGrilleEpinglesProps) {
  const colonnes = compact ? COLONNES_COMPACTES : COLONNES;
  const reglages = compact ? REGLAGES_COMPACTS : REGLAGES;
  const espace = compact ? "mt-3" : "mt-4";
  return (
    <figure className={cn("w-full max-w-md", className)}>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.2)] sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm font-semibold text-foreground">Votre épingle parmi les idées recherchées</p>
          <span className="shrink-0 rounded-full border border-border bg-white px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-slate-700">
            Exemple
          </span>
        </div>

        {/* Barre de recherche Pinterest */}
        <div className={cn(espace, "flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground")}>
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
          <span>salle de bain bois et blanc</span>
        </div>

        {/* Mosaïque d'épingles */}
        <div className={cn(espace, "grid grid-cols-3 gap-2")} aria-hidden="true">
          {colonnes.map((colonne, c) => (
            <div key={c} className="flex flex-col gap-2">
              {colonne.map((e, i) =>
                e.sponsorisee ? (
                  <div key={i} className="overflow-hidden rounded-xl border border-primary/30 bg-white shadow-sm">
                    <div className={cn("relative bg-gradient-to-br", e.hauteur, e.fond)}>
                      <span className="absolute left-1.5 top-1.5 rounded bg-white/90 px-1.5 py-0.5 text-[9px] font-semibold text-slate-700">
                        Sponsorisé
                      </span>
                      {/* Silhouette d'un meuble vasque : plan blanc, deux tiroirs */}
                      <span className="absolute inset-x-3 bottom-3 h-2/5 rounded-sm bg-white/85 shadow-sm" />
                      <span className="absolute inset-x-5 bottom-[26%] h-px bg-amber-300/70" />
                      <span className="absolute left-1/2 top-7 h-6 w-12 -translate-x-1/2 rounded-full bg-white/40" />
                    </div>
                    <div className="p-2">
                      <p className="text-[11px] font-semibold leading-tight text-foreground">Meuble vasque chêne et blanc, 2 tiroirs</p>
                      <p className="mt-0.5 text-[10px] text-muted-foreground">Votre boutique · prix affiché</p>
                      <span className="mt-1.5 block rounded-full bg-gradient-to-r from-purple-600 to-pink-600 py-1 text-center text-[10px] font-semibold text-white">
                        Enregistrer
                      </span>
                    </div>
                  </div>
                ) : (
                  <div key={i} className="overflow-hidden rounded-xl border border-border/60 bg-white">
                    <span className={cn("relative block bg-gradient-to-br", e.hauteur, e.fond)}>
                      {/* Silhouette : un aplat clair en bas, comme une photo d'ambiance. */}
                      <span className="absolute inset-x-2 bottom-2 h-1/3 rounded-sm bg-white/50" />
                    </span>
                    <div className="p-1.5">
                      <p className="text-[10px] font-medium leading-tight text-foreground">{e.titre}</p>
                      <span className="mt-1 block h-1 w-1/2 rounded-full bg-muted/70" />
                    </div>
                  </div>
                )
              )}
            </div>
          ))}
        </div>

        <ul className={cn(espace, "flex flex-wrap gap-2")} aria-label="Réglages derrière l'épingle">
          {reglages.map((r) => (
            <li key={r} className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground">
              {r}
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted-foreground">
        Exemple de grille d&apos;épingles avec une boutique fictive : l&apos;épingle sponsorisée s&apos;affiche parmi les idées
        recherchées, pas un résultat client.
      </figcaption>
    </figure>
  );
}
