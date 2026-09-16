import { CalendarCheck, Globe, Megaphone, Send, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Maquette de pipeline CRM pour le hero de la page « CRM et relances
 * automatiques ». Serveur, CSS pur : quatre colonnes, trois cartes fictives
 * marquées « Exemple ». Aucun nom de client, aucun montant : ce que le
 * client verra dans son CRM, pas des demandes réelles.
 */

interface Carte {
  titre: string;
  /** Canal d'origine de la demande, affiché avec son icône. */
  source: string;
  icon: LucideIcon;
  detail: string;
}

interface Colonne {
  nom: string;
  cartes: Carte[];
  /** Texte de l'emplacement vide (colonne sans carte). */
  vide?: string;
  /** Colonne d'arrivée, teintée. */
  accent?: boolean;
}

const COLONNES: Colonne[] = [
  {
    nom: "Nouvelle demande",
    cartes: [
      {
        titre: "Demande de devis",
        source: "Formulaire du site",
        icon: Globe,
        detail: "Reçue il y a 12 min, accusé de réception envoyé",
      },
    ],
  },
  {
    nom: "Devis envoyé",
    cartes: [],
    vide: "Vous glissez la carte ici quand le devis part",
  },
  {
    nom: "Relancé J+3",
    cartes: [
      {
        titre: "Devis sans réponse",
        source: "Google Ads",
        icon: Megaphone,
        detail: "Email de relance parti tout seul, 3 jours après le devis",
      },
    ],
  },
  {
    nom: "Rendez‑vous pris",
    cartes: [
      {
        titre: "Rendez-vous confirmé",
        source: "Meta Ads",
        icon: CalendarCheck,
        detail: "Rappel envoyé la veille par email",
      },
    ],
    accent: true,
  },
];

export default function PipelineMock({ className }: { className?: string }) {
  return (
    <figure className={cn("w-full", className)}>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.2)] sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-foreground">Votre pipeline de vente</p>
            <p className="text-xs text-muted-foreground">Chaque demande, avec sa source et sa prochaine action</p>
          </div>
          <span className="shrink-0 rounded-full border border-border bg-white px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-slate-700">
            Exemple
          </span>
        </div>

        {/* Quatre colonnes en pleine largeur (sm, md) et dès xl ; deux par deux sur mobile et en lg, où la colonne du hero fait moins de 400 px. */}
        <ol className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4" aria-label="Étapes du pipeline d'exemple">
          {COLONNES.map((colonne) => (
            <li
              key={colonne.nom}
              className={cn(
                "flex min-h-[9.5rem] flex-col rounded-xl border p-2",
                colonne.accent ? "border-primary/25 bg-gradient-to-b from-purple-50 to-pink-50" : "border-border bg-muted/40"
              )}
            >
              <div className="flex items-center justify-between gap-1 px-0.5">
                <p className="text-[11px] font-semibold leading-tight text-foreground">{colonne.nom}</p>
                <span
                  className="inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-white px-1 text-[10px] font-semibold tabular-nums text-slate-600 ring-1 ring-border"
                  aria-label={`${colonne.cartes.length} carte${colonne.cartes.length > 1 ? "s" : ""}`}
                >
                  {colonne.cartes.length}
                </span>
              </div>

              <div className="mt-2 flex flex-1 flex-col gap-2">
                {colonne.cartes.map((carte) => {
                  const Icon = carte.icon;
                  return (
                    <article
                      key={carte.titre}
                      className="rounded-lg border border-border bg-white p-2 shadow-[0_1px_2px_rgba(15,23,42,0.06)]"
                    >
                      {/* Un seul badge « Exemple » sur la carte du pipeline, plus la légende : pas un par demande. */}
                      <p className="text-[11px] font-semibold leading-tight text-foreground">{carte.titre}</p>
                      <p className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary-texte">
                        <Icon className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
                        {carte.source}
                      </p>
                      <p className="mt-1.5 text-[10px] leading-snug text-muted-foreground">{carte.detail}</p>
                    </article>
                  );
                })}
                {colonne.cartes.length === 0 && colonne.vide && (
                  <p className="flex flex-1 items-center justify-center rounded-lg border border-dashed border-border px-2 py-3 text-center text-[10px] leading-snug text-muted-foreground">
                    {colonne.vide}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-4 flex items-start gap-2 rounded-xl border border-border bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
          <Send className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
          <span>
            Relance par email à J+3, puis sur plusieurs semaines, arrêtée dès que la personne répond. Rappel de rendez-vous la veille.
          </span>
        </p>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted-foreground">
        Exemple de pipeline : les étapes et les cartes sont fictives, ce ne sont pas des demandes réelles.
      </figcaption>
    </figure>
  );
}
