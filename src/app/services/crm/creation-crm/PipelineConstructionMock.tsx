import { Check, FileSpreadsheet, Globe, Megaphone, Plus, Send, Users } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Illustration du hero « Création de CRM » : un pipeline en cours de mise en
 * place (trois étapes posées, une quatrième à ajouter), les champs créés et
 * l'import des contacts. Serveur, CSS pur, tout est marqué « Exemple » :
 * aucun nom, aucun montant, aucune donnée réelle.
 */

const ETAPES = [
  { nom: "Nouvelle demande", source: "Formulaire du site", icon: Globe },
  { nom: "Devis envoyé", source: "Google Ads", icon: Megaphone },
  { nom: "Relance en cours", source: "Relance par email J+3", icon: Send },
];

const CHAMPS = [
  { nom: "Origine de la demande", type: "liste fermée", fait: true },
  { nom: "Montant du devis", type: "nombre", fait: true },
  { nom: "Prochaine action", type: "liste + date", fait: true },
  { nom: "Motif de perte", type: "liste fermée", fait: false },
];

const COLONNES_IMPORT = ["Prénom", "Nom", "Email", "Téléphone", "Origine"];

export default function PipelineConstructionMock({ className }: { className?: string }) {
  return (
    <figure className={cn("w-full", className)}>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.2)] sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-foreground">Votre CRM, en cours de mise en place</p>
            <p className="text-xs text-muted-foreground">Étapes, champs et contacts, posés dans cet ordre</p>
          </div>
          <span className="shrink-0 rounded-full border border-border bg-white px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-slate-700">
            Exemple
          </span>
        </div>

        {/* 1. Les étapes du pipeline : trois posées, une quatrième à ajouter. Deux par deux sous sm et en lg (colonne étroite). */}
        <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-purple-700">1. Étapes du pipeline</p>
        <ol className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4" aria-label="Étapes du pipeline d'exemple">
          {ETAPES.map(({ nom, source, icon: Icon }) => (
            <li key={nom} className="flex min-h-[5.5rem] flex-col rounded-xl border border-border bg-muted/40 p-2">
              <p className="text-[11px] font-semibold leading-tight text-foreground">{nom}</p>
              <span className="mt-2 inline-flex w-fit items-center gap-1 rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary-texte">
                <Icon className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
                {source}
              </span>
            </li>
          ))}
          <li className="flex min-h-[5.5rem] flex-col items-center justify-center rounded-xl border border-dashed border-primary/40 bg-primary/5 p-2 text-center">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-primary ring-1 ring-primary/30" aria-hidden="true">
              <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
            </span>
            <p className="mt-1.5 text-[10px] font-medium leading-snug text-primary-texte">Étape suivante, à vos règles</p>
          </li>
        </ol>

        {/* 2. Les champs créés, avec leur type : trois faits, un en cours. */}
        <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-purple-700">2. Champs créés</p>
        <ul className="mt-2 grid gap-1.5 sm:grid-cols-2" aria-label="Champs du CRM d'exemple">
          {CHAMPS.map(({ nom, type, fait }) => (
            <li
              key={nom}
              className={cn(
                "flex items-center gap-2 rounded-lg border px-2 py-1.5 text-[11px]",
                fait ? "border-border bg-white" : "border-dashed border-border bg-muted/30"
              )}
            >
              <span
                className={cn(
                  "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded",
                  fait ? "bg-primary text-white" : "border border-border bg-white"
                )}
                aria-hidden="true"
              >
                {fait && <Check className="h-3 w-3" strokeWidth={3} />}
              </span>
              <span className="min-w-0 flex-1 truncate font-medium text-foreground">{nom}</span>
              <span className="shrink-0 text-[10px] text-muted-foreground">{type}</span>
            </li>
          ))}
        </ul>

        {/* 3. L'import des contacts : fichier, colonnes reconnues, doublons vérifiés avant l'import. */}
        <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-purple-700">3. Import des contacts</p>
        <div className="mt-2 rounded-xl border border-border bg-muted/40 p-2.5">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-primary ring-1 ring-border" aria-hidden="true">
              <FileSpreadsheet className="h-4 w-4" strokeWidth={1.75} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-semibold text-foreground">contacts.xlsx, votre tableur actuel</p>
              <p className="text-[10px] text-muted-foreground">Colonnes reconnues et reliées aux champs</p>
            </div>
          </div>
          <ul className="mt-2 flex flex-wrap gap-1" aria-label="Colonnes reconnues">
            {COLONNES_IMPORT.map((c) => (
              <li key={c} className="rounded bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-700 ring-1 ring-border">
                {c}
              </li>
            ))}
          </ul>
          <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-white ring-1 ring-border" aria-hidden="true">
            <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500" />
          </div>
          <p className="mt-1.5 flex items-center gap-1.5 text-[10px] text-muted-foreground">
            <Users className="h-3 w-3 shrink-0 text-primary" aria-hidden="true" />
            Doublons vérifiés avant l&apos;import, fichier d&apos;origine conservé
          </p>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted-foreground">
        Exemple de mise en place : les étapes, les champs et le fichier sont fictifs, à vos règles le jour venu.
      </figcaption>
    </figure>
  );
}
