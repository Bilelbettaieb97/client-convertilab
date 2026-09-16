import { Globe, Phone, Route, Search, Star } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Maquette d'un pack local Google (les trois fiches d'établissement affichées
 * avant les autres résultats) : hero de /services/seo/seo-local, et variante
 * compacte dans la carte de la page pôle. CSS pur, composant serveur. Aucune
 * entreprise réelle, aucun logo : les noms, notes et nombres d'avis sont des
 * exemples (badge « Exemple », note). Les boutons sont inertes, comme sur la
 * maquette de fiche précédente.
 */

const REQUETE = "plombier rueil-malmaison";

const FICHES = [
  {
    nom: "Votre établissement",
    note: "4,8",
    avis: 63,
    detail: "Plombier · Rueil-Malmaison",
    statut: "Ouvert · Ferme à 19 h",
    ouvert: true,
    vous: true,
  },
  { nom: "Établissement B", note: "4,6", avis: 41, detail: "Plombier · Nanterre", statut: "Ouvert · Ferme à 18 h 30", ouvert: true },
  { nom: "Établissement C", note: "4,3", avis: 28, detail: "Plombier · Suresnes", statut: "Fermé · Ouvre demain à 8 h", ouvert: false },
];

const BOUTONS = [
  { icon: Route, label: "Itinéraire" },
  { icon: Phone, label: "Appeler" },
  { icon: Globe, label: "Site web" },
];

export interface MockPackLocalProps {
  /** Variante compacte (carte de la page pôle) : boutons sur la première fiche seulement, sans note. */
  compact?: boolean;
  className?: string;
}

export default function MockPackLocal({ compact = false, className }: MockPackLocalProps) {
  return (
    <figure className={cn("w-full max-w-md", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-border bg-card",
          compact ? "p-4" : "p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.2)] sm:p-6"
        )}
      >
        <div className="flex items-center justify-between gap-3">
          <p className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            <span className="min-w-0">
              <span className="sr-only">Recherche Google d&apos;exemple : </span>
              {REQUETE}
            </span>
          </p>
          <span className="shrink-0 rounded-full border border-border bg-white px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-slate-700">
            Exemple
          </span>
        </div>

        <p className={cn("text-xs text-muted-foreground", compact ? "mt-3" : "mt-4")}>
          <span className="font-semibold text-foreground">Établissements</span> · les trois fiches que Google affiche avant les
          autres résultats
        </p>

        <ol className={cn("space-y-2", compact ? "mt-2" : "mt-3")}>
          {FICHES.map(({ nom, note, avis, detail, statut, ouvert, vous }) => (
            <li
              key={nom}
              className={cn(
                "rounded-xl border p-3",
                vous ? "border-primary/40 bg-gradient-to-br from-purple-50 to-pink-50" : "border-border bg-background"
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-semibold leading-tight text-foreground">{nom}</p>
                {vous && (
                  <span className="shrink-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                    Vous
                  </span>
                )}
              </div>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="font-semibold tabular-nums text-foreground">{note}</span>
                <span className="inline-flex items-center text-amber-500" aria-hidden="true">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={1.5} />
                  ))}
                  <Star className="h-3.5 w-3.5" strokeWidth={1.5} />
                </span>
                <span className="tabular-nums">({avis} avis)</span>
                <span className="sr-only">, note d&apos;exemple</span>
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{detail}</p>
              <p className={cn("mt-0.5 text-xs", ouvert ? "text-emerald-700" : "text-muted-foreground")}>{statut}</p>
              {(!compact || vous) && (
                <div className="mt-2.5 grid grid-cols-3 gap-1.5 text-[11px] font-medium text-muted-foreground" aria-hidden="true">
                  {BOUTONS.map(({ icon: Icon, label }) => (
                    <span
                      key={label}
                      className="inline-flex items-center justify-center gap-1 rounded-md border border-border bg-white px-1.5 py-1.5"
                    >
                      <Icon className="h-3 w-3" />
                      {label}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ol>
        {!compact && <p className="mt-3 text-xs text-muted-foreground">Boutons affichés par Google sur chaque fiche : itinéraire, appel, site.</p>}
      </div>
      {!compact && (
        <figcaption className="mt-3 text-center text-xs text-muted-foreground">
          Exemple de pack local : les noms, notes et avis sont fictifs, ce ne sont pas des résultats clients.
        </figcaption>
      )}
    </figure>
  );
}
