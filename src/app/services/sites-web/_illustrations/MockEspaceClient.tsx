import { CalendarCheck, FileText, FolderOpen, LayoutDashboard, Plus, Receipt } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Maquette CSS d'un espace client / outil métier : barre latérale, trois
 * indicateurs, liste de dossiers avec leur statut. Tous les noms et chiffres
 * sont fictifs, le badge « Exemple » est obligatoire. Composant serveur.
 */
export interface MockEspaceClientProps {
  /** Version réduite pour une miniature. */
  compact?: boolean;
  className?: string;
}

const MENU = [
  { icon: LayoutDashboard, label: "Accueil", actif: true },
  { icon: FolderOpen, label: "Dossiers" },
  { icon: CalendarCheck, label: "Agenda" },
  { icon: FileText, label: "Devis" },
  { icon: Receipt, label: "Factures" },
];

const INDICATEURS = [
  { libelle: "Rendez-vous cette semaine", valeur: "12" },
  { libelle: "Devis en attente", valeur: "4" },
  { libelle: "Dossiers clos ce mois", valeur: "31" },
];

const DOSSIERS = [
  { objet: "Rénovation cuisine", client: "Mme Martin", statut: "Devis envoyé", couleur: "bg-purple-100 text-purple-800" },
  { objet: "Extension garage", client: "M. Petit", statut: "Visite planifiée", couleur: "bg-sky-100 text-sky-800" },
  { objet: "Isolation des combles", client: "Mme Roux", statut: "En cours", couleur: "bg-amber-100 text-amber-800" },
  { objet: "Réfection toiture", client: "M. Bernard", statut: "Terminé", couleur: "bg-emerald-100 text-emerald-800" },
];

export function MockEspaceClient({ compact = false, className }: MockEspaceClientProps) {
  const dossiers = compact ? DOSSIERS.slice(0, 3) : DOSSIERS;
  return (
    <figure className={cn("w-full", className)}>
      <div
        className={cn(
          "overflow-hidden rounded-2xl border border-border bg-white shadow-[0_32px_64px_-32px_rgba(76,29,149,0.35)]",
          compact && "rounded-xl shadow-none"
        )}
      >
        <div className={cn("flex items-center justify-between gap-2 border-b border-border bg-slate-50", compact ? "px-2.5 py-1.5" : "px-4 py-2.5")}>
          <p className={cn("font-semibold text-slate-900", compact ? "text-[10px]" : "text-sm")}>Espace client</p>
          <span className={cn("shrink-0 rounded-full border border-border bg-white font-semibold uppercase tracking-wide text-slate-700", compact ? "px-1.5 py-px text-[8px]" : "px-2.5 py-0.5 text-xs")}>
            Exemple
          </span>
        </div>
        <div className={cn("grid", compact ? "grid-cols-[64px_1fr]" : "grid-cols-[112px_1fr]")}>
          <nav className={cn("border-r border-border bg-muted/40", compact ? "p-1.5" : "p-3")} aria-label="Menu de l'exemple">
            <span className={cn("mb-3 block rounded-lg bg-gradient-to-r from-purple-600 to-pink-600", compact ? "h-4 w-4" : "h-6 w-6")} aria-hidden="true" />
            <ul className={cn("space-y-1", compact ? "text-[8px]" : "text-[11px]")}>
              {MENU.map(({ icon: Icon, label, actif }) => (
                <li
                  key={label}
                  className={cn(
                    "flex items-center gap-1.5 rounded-md px-1.5 py-1",
                    actif ? "bg-purple-100 font-semibold text-purple-800" : "text-slate-600"
                  )}
                >
                  <Icon className={cn("shrink-0", compact ? "h-2.5 w-2.5" : "h-3.5 w-3.5")} strokeWidth={2} aria-hidden="true" />
                  <span className="truncate">{label}</span>
                </li>
              ))}
            </ul>
          </nav>

          <div className={cn("min-w-0", compact ? "space-y-2 p-2" : "space-y-3 p-4")}>
            {/* Barre de recherche décorative : elle laisse la place aux repères flottants du hero sans couvrir un texte. */}
            {!compact && (
              <span className="block rounded-md border border-border bg-muted/40 px-3 py-1.5 text-[11px] text-slate-400" aria-hidden="true">
                Rechercher un dossier, un client...
              </span>
            )}
            <div className="flex items-center justify-between gap-2">
              <p className={cn("font-semibold text-slate-900", compact ? "text-[10px]" : "text-sm")}>Dossiers en cours</p>
              <span
                className={cn(
                  "inline-flex shrink-0 items-center gap-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 font-semibold text-white",
                  compact ? "px-2 py-0.5 text-[8px]" : "px-2.5 py-1 text-[11px]"
                )}
              >
                <Plus className={compact ? "h-2.5 w-2.5" : "h-3 w-3"} strokeWidth={2.5} aria-hidden="true" />
                Nouveau devis
              </span>
            </div>

            <dl className="grid grid-cols-3 gap-1.5">
              {INDICATEURS.map((ind, i) => (
                <div
                  key={ind.libelle}
                  className={cn(
                    "rounded-lg border",
                    compact ? "px-1.5 py-1" : "px-2.5 py-2",
                    i === 0 ? "border-primary/25 bg-gradient-to-br from-purple-50 to-pink-50" : "border-border bg-white"
                  )}
                >
                  <dt className={cn("text-slate-500", compact ? "text-[7px] leading-tight" : "text-[10px] leading-tight")}>{ind.libelle}</dt>
                  <dd className={cn("font-bold tabular-nums text-slate-900", compact ? "text-xs" : "text-lg")}>{ind.valeur}</dd>
                </div>
              ))}
            </dl>

            <ul className="overflow-hidden rounded-lg border border-border">
              {dossiers.map((d, i) => (
                <li
                  key={d.objet}
                  className={cn(
                    "flex items-center gap-2",
                    compact ? "px-2 py-1 text-[8px]" : "px-3 py-2 text-[11px]",
                    i > 0 && "border-t border-border"
                  )}
                >
                  <span className={cn("shrink-0 rounded-full bg-purple-100", compact ? "h-3 w-3" : "h-5 w-5")} aria-hidden="true" />
                  <span className="min-w-0 flex-1 truncate">
                    <span className="font-medium text-slate-900">{d.objet}</span>
                    <span className="text-slate-500"> · {d.client}</span>
                  </span>
                  <span className={cn("shrink-0 rounded-full font-semibold", d.couleur, compact ? "px-1.5 py-px text-[7px]" : "px-2 py-0.5 text-[10px]")}>
                    {d.statut}
                  </span>
                </li>
              ))}
            </ul>
            {!compact && (
              <p className="pb-4 text-[11px] text-slate-500">
                {DOSSIERS.length} dossiers affichés · <span className="font-medium text-purple-800">Voir tous les dossiers</span>
              </p>
            )}
          </div>
        </div>
      </div>
      {!compact && (
        <figcaption className="mt-3 text-center text-xs text-muted-foreground">
          Exemple d&apos;espace client : la forme des écrans que vous et vos clients utiliseriez, pas des données réelles.
        </figcaption>
      )}
    </figure>
  );
}

export default MockEspaceClient;
