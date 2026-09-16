import { CalendarClock, Check, MailCheck } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Illustration du hero « Optimisation de CRM » : le tableau de bord des
 * relances que le client consulte chaque matin (devis sans suite, taux de
 * réponse, relances parties) et la séquence en cours sur un devis. Serveur,
 * CSS pur. Le badge « Exemple » et la légende disent que les valeurs sont
 * fictives : ce ne sont pas des résultats clients.
 */

const INDICATEURS = [
  { libelle: "Devis sans suite", valeur: "5", detail: "à relancer aujourd'hui" },
  { libelle: "Taux de réponse aux relances", valeur: "38 %", detail: "sur 30 jours" },
  { libelle: "Relances parties", valeur: "12", detail: "cette semaine, par email" },
  { libelle: "Rendez-vous rappelés", valeur: "4", detail: "la veille, par email" },
];

const SEQUENCE = [
  { repere: "J+0", libelle: "Devis envoyé", etat: "fait" },
  { repere: "J+3", libelle: "Relance 1", etat: "fait" },
  { repere: "J+7", libelle: "Relance 2", etat: "aujourd'hui" },
  { repere: "J+14", libelle: "Relance 3", etat: "prévue" },
  { repere: "J+30", libelle: "Clôture", etat: "prévue" },
] as const;

export default function TableauRelancesMock({ className }: { className?: string }) {
  return (
    <figure className={cn("w-full", className)}>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.2)] sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-foreground">Vos relances, cette semaine</p>
            <p className="text-xs text-muted-foreground">Ce que vous ouvrez chaque matin, en une minute</p>
          </div>
          <span className="shrink-0 rounded-full border border-border bg-white px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-slate-700">
            Exemple
          </span>
        </div>

        <dl className="mt-4 grid grid-cols-2 gap-2">
          {INDICATEURS.map((ind, i) => (
            <div
              key={ind.libelle}
              className={cn(
                "rounded-xl border p-2.5",
                i === 0 ? "border-primary/25 bg-gradient-to-br from-purple-50 to-pink-50" : "border-border bg-background"
              )}
            >
              <dt className="text-[11px] leading-tight text-muted-foreground">{ind.libelle}</dt>
              <dd className="mt-1 text-lg font-bold tabular-nums text-foreground sm:text-xl">{ind.valeur}</dd>
              <dd className="text-[10px] text-muted-foreground">{ind.detail}</dd>
            </div>
          ))}
        </dl>

        {/* Séquence en cours sur un devis : cinq repères, deux passés, un aujourd'hui, deux à venir. */}
        <div className="mt-4 rounded-xl border border-border bg-muted/40 p-3">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[11px] font-semibold text-foreground">Séquence en cours : devis d&apos;exemple</p>
            <span className="rounded bg-amber-50 px-1 py-px text-[9px] font-bold uppercase tracking-wide text-amber-700 ring-1 ring-amber-200">
              Exemple
            </span>
          </div>
          <ol className="relative mt-3 grid grid-cols-5 gap-1" aria-label="Étapes de la séquence de relance d'exemple">
            <div className="pointer-events-none absolute left-[10%] right-[10%] top-2.5 h-px bg-border" aria-hidden="true" />
            {SEQUENCE.map((s) => (
              <li key={s.repere} className="relative flex flex-col items-center text-center">
                <span
                  className={cn(
                    "inline-flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-bold ring-2 ring-white",
                    s.etat === "fait" && "bg-primary text-white",
                    s.etat === "aujourd'hui" && "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md",
                    s.etat === "prévue" && "border border-dashed border-primary/50 bg-white text-primary-texte"
                  )}
                  aria-hidden="true"
                >
                  {s.etat === "fait" ? <Check className="h-3 w-3" strokeWidth={3} /> : ""}
                </span>
                <span className="mt-1.5 text-[10px] font-semibold tabular-nums text-foreground">{s.repere}</span>
                <span className="text-[9px] leading-tight text-muted-foreground">{s.libelle}</span>
                {s.etat === "aujourd'hui" && (
                  <span className="mt-0.5 text-[9px] font-semibold text-purple-700">aujourd&apos;hui</span>
                )}
              </li>
            ))}
          </ol>
          <p className="mt-3 flex items-start gap-1.5 text-[10px] leading-snug text-muted-foreground">
            <MailCheck className="mt-px h-3 w-3 shrink-0 text-primary" aria-hidden="true" />
            Séquence par email, arrêtée dès que la personne répond ; chaque email propose un moyen de demander l&apos;arrêt.
          </p>
        </div>

        <p className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-border bg-background px-3 py-2 text-[11px]">
          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
            <CalendarClock className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
            Prochain rappel de rendez-vous
          </span>
          <span className="font-semibold text-foreground">demain, par email</span>
        </p>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted-foreground">
        Exemple de tableau de bord : les valeurs sont fictives, ce ne sont pas des résultats clients.
      </figcaption>
    </figure>
  );
}
