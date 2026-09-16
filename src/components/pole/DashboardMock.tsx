import { cn } from "@/lib/utils";

export interface DashboardIndicateur {
  /** Ex. « Demandes reçues », « Coût par demande », « Budget dépensé ». */
  libelle: string;
  /** Valeur d'exemple, affichée telle quelle. */
  valeur: string;
  /** Petite ligne sous la valeur (ex. « sur 30 jours »). */
  detail?: string;
}

export interface DashboardMockProps {
  /** Titre de la carte, ex. « Vos demandes, 30 derniers jours ». */
  titre: string;
  /** Badge obligatoire qui qualifie les valeurs, ex. « Exemple » ou « Valeurs d'exemple ». */
  mention: string;
  /** Quatre indicateurs (deux colonnes). */
  indicateurs: DashboardIndicateur[];
  /** Ligne supplémentaire, ex. { libelle: « Meilleure annonce », valeur: « Vidéo devis 48 h » }. */
  ligne?: { libelle: string; valeur: string };
  /** Série décorative (barres), valeurs relatives entre 0 et 100. */
  serie?: number[];
  /** Note honnête en petit sous la carte, ex. « Exemple de tableau de bord, ce ne sont pas des résultats clients. ». */
  note?: string;
  className?: string;
}

/**
 * Carte façon tableau de bord : les indicateurs que le client verra chaque
 * mois. Aucune valeur n'est présentée comme un résultat réel : le badge
 * `mention` est obligatoire et la `note` recommandée. Serveur, CSS pur.
 */
export default function DashboardMock({ titre, mention, indicateurs, ligne, serie, note, className }: DashboardMockProps) {
  const max = serie && serie.length > 0 ? Math.max(...serie, 1) : 1;

  return (
    <figure className={cn("w-full max-w-md", className)}>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.2)] sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm font-semibold text-foreground">{titre}</p>
          <span className="shrink-0 rounded-full border border-border bg-white px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-slate-700">
            {mention}
          </span>
        </div>

        <dl className="mt-5 grid grid-cols-2 gap-3">
          {indicateurs.map((ind, i) => (
            <div
              key={ind.libelle}
              className={cn(
                "rounded-xl border p-3.5",
                i === 0 ? "border-primary/25 bg-gradient-to-br from-purple-50 to-pink-50" : "border-border bg-background"
              )}
            >
              <dt className="text-xs text-muted-foreground">{ind.libelle}</dt>
              <dd className="mt-1 text-xl font-bold tabular-nums text-foreground sm:text-2xl">{ind.valeur}</dd>
              {ind.detail && <dd className="text-xs text-muted-foreground">{ind.detail}</dd>}
            </div>
          ))}
        </dl>

        {serie && serie.length > 0 && (
          <div className="mt-5 flex h-16 items-end gap-1.5" aria-hidden="true">
            {serie.map((v, i) => (
              <div
                key={i}
                className={cn(
                  "flex-1 rounded-t-sm",
                  i === serie.length - 1 ? "bg-gradient-to-t from-purple-600 to-pink-500" : "bg-primary/20"
                )}
                style={{ height: `${Math.max(8, Math.round((v / max) * 100))}%` }}
              />
            ))}
          </div>
        )}

        {ligne && (
          <div className="mt-5 flex items-center justify-between gap-3 rounded-xl border border-border bg-muted/40 px-3.5 py-2.5 text-sm">
            <span className="text-muted-foreground">{ligne.libelle}</span>
            <span className="font-semibold text-foreground">{ligne.valeur}</span>
          </div>
        )}
      </div>
      {note && <figcaption className="mt-3 text-center text-xs text-muted-foreground">{note}</figcaption>}
    </figure>
  );
}
