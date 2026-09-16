import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Illustration du hero « Nettoyage de CRM » : la même liste de contacts avant
 * et après le nettoyage (doublons fusionnés, contact inactif archivé, origine
 * harmonisée). Serveur, CSS pur. Noms et adresses fictifs (domaine réservé
 * example.com), badge « Exemple » et légende : aucune donnée réelle.
 */

interface Ligne {
  nom: string;
  detail: string;
  etiquette: string;
  /** Teinte de l'étiquette : problème (avant) ou résolu (après). */
  ton: "probleme" | "resolu" | "neutre";
  /** Ligne grisée (archivée). */
  estompee?: boolean;
}

const AVANT: Ligne[] = [
  { nom: "DUPONT Marie", detail: "m.dupont@example.com · 06 12 34 56 78", etiquette: "doublon", ton: "probleme" },
  { nom: "Marie Dupont", detail: "marie.dupont@example.com · +33612345678", etiquette: "doublon", ton: "probleme" },
  { nom: "M. Dupont", detail: "email manquant · 0612345678", etiquette: "doublon", ton: "probleme" },
  { nom: "Karim B.", detail: "dernier échange : il y a 19 mois", etiquette: "inactif", ton: "probleme" },
  { nom: "Sophie Martin", detail: "origine : google / G. Ads / Google Ads", etiquette: "3 valeurs", ton: "probleme" },
];

const APRES: Ligne[] = [
  { nom: "Marie Dupont", detail: "marie.dupont@example.com · +33 6 12 34 56 78", etiquette: "3 fusionnées", ton: "resolu" },
  { nom: "Karim B.", detail: "archivé le mois dernier, historique conservé", etiquette: "archivé", ton: "neutre", estompee: true },
  { nom: "Sophie Martin", detail: "origine : Google Ads (liste fermée)", etiquette: "harmonisé", ton: "resolu" },
];

const ETIQUETTE: Record<Ligne["ton"], string> = {
  probleme: "bg-amber-50 text-amber-700 ring-amber-200",
  resolu: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  neutre: "bg-slate-100 text-slate-600 ring-slate-200",
};

function Colonne({ titre, lignes, apres }: { titre: string; lignes: Ligne[]; apres?: boolean }) {
  return (
    <div className={cn("min-w-0 rounded-xl border p-2.5", apres ? "border-primary/25 bg-gradient-to-b from-purple-50 to-pink-50" : "border-border bg-muted/40")}>
      <div className="flex items-center justify-between gap-2">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-foreground">{titre}</p>
        <span className="text-[10px] tabular-nums text-muted-foreground">
          {lignes.length} fiche{lignes.length > 1 ? "s" : ""}
        </span>
      </div>
      <ul className="mt-2 space-y-1.5" aria-label={`Contacts d'exemple, ${titre.toLowerCase()}`}>
        {lignes.map((l) => (
          <li
            key={`${titre}-${l.nom}-${l.etiquette}`}
            className={cn(
              "min-w-0 rounded-lg border border-border bg-white px-2 py-1.5 shadow-[0_1px_2px_rgba(15,23,42,0.05)]",
              l.estompee && "opacity-60"
            )}
          >
            <div className="flex items-start justify-between gap-1.5">
              <p className="min-w-0 truncate text-[11px] font-semibold leading-tight text-foreground">{l.nom}</p>
              <span className={cn("shrink-0 rounded px-1 py-px text-[9px] font-bold uppercase tracking-wide ring-1", ETIQUETTE[l.ton])}>
                {l.etiquette}
              </span>
            </div>
            <p className="mt-0.5 truncate text-[10px] leading-snug text-muted-foreground">{l.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AvantApresMock({ className }: { className?: string }) {
  return (
    <figure className={cn("w-full", className)}>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.2)] sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-foreground">Votre base de contacts</p>
            <p className="text-xs text-muted-foreground">La même liste, avant et après le nettoyage</p>
          </div>
          <span className="shrink-0 rounded-full border border-border bg-white px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-slate-700">
            Exemple
          </span>
        </div>

        {/* Empilé sous sm (flèche vers le bas), côte à côte ensuite (flèche vers la droite). */}
        {/* minmax(0,1fr) : sans le 0, la colonne prend la largeur de son texte le plus long et déborde du cadre. */}
        <div className="mt-4 grid items-start gap-2 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:gap-2">
          <Colonne titre="Avant" lignes={AVANT} />
          <div className="flex items-center justify-center py-0.5 sm:h-full sm:py-0" aria-hidden="true">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md">
              <ArrowDown className="h-4 w-4 sm:hidden" strokeWidth={2.5} />
              <ArrowRight className="hidden h-4 w-4 sm:block" strokeWidth={2.5} />
            </span>
          </div>
          <Colonne titre="Après" lignes={APRES} apres />
        </div>

        <ul className="mt-3 grid gap-1 text-[10px] text-muted-foreground sm:grid-cols-3" aria-label="Règles écrites après le nettoyage">
          {["Règle de doublons écrite", "Règle d'archivage écrite", "Formats imposés à la saisie"].map((r) => (
            <li key={r} className="inline-flex items-center gap-1.5">
              <Check className="h-3 w-3 shrink-0 text-primary" strokeWidth={3} aria-hidden="true" />
              {r}
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted-foreground">
        Exemple de nettoyage : noms, adresses et dates sont fictifs, ce ne sont pas des contacts réels.
      </figcaption>
    </figure>
  );
}
