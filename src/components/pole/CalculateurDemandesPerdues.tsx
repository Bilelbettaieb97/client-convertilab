"use client";

import { useId, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import LeadMagnetForm from "./LeadMagnetForm";

export interface CalculateurDemandesPerduesProps {
  /** Slug du diagnostic de type « calcul » (src/lib/diagnostics/configs). */
  slug: string;
  page: string;
  className?: string;
}

const fr = (n: number) => Math.round(n).toLocaleString("fr-FR");
const euros = (n: number) => `${fr(n)} €`;

/**
 * Calculateur des demandes perdues : uniquement les chiffres de la personne
 * (demandes par mois, part répondue sous 24 h, part relancée, taux de
 * transformation, panier moyen). Aucune statistique de marché : le résultat
 * est une multiplication de ses propres données, affichée comme un potentiel.
 */
export default function CalculateurDemandesPerdues({ slug, page, className }: CalculateurDemandesPerduesProps) {
  const uid = useId();
  const [demandes, setDemandes] = useState(30);
  const [rapides, setRapides] = useState(50);
  const [relancees, setRelancees] = useState(20);
  const [transformation, setTransformation] = useState(25);
  const [panier, setPanier] = useState(800);
  const [calcule, setCalcule] = useState(false);

  const r = useMemo(() => {
    const d = Math.max(0, demandes);
    const sansReponseRapide = d * (1 - Math.min(100, Math.max(0, rapides)) / 100);
    const jamaisRelancees = sansReponseRapide * (1 - Math.min(100, Math.max(0, relancees)) / 100);
    const clientsPotentiels = jamaisRelancees * (Math.min(100, Math.max(0, transformation)) / 100);
    const caMois = clientsPotentiels * Math.max(0, panier);
    return { sansReponseRapide, jamaisRelancees, clientsPotentiels, caMois, caAn: caMois * 12 };
  }, [demandes, rapides, relancees, transformation, panier]);

  const resume = [
    `${fr(demandes)} demandes reçues par mois, ${rapides} % répondues sous 24 h, ${relancees} % relancées quand elles restent sans réponse.`,
    `${fr(r.sansReponseRapide)} demandes par mois attendent plus de 24 h une première réponse.`,
    `${fr(r.jamaisRelancees)} demandes par mois ne sont jamais relancées, soit ${fr(r.jamaisRelancees * 12)} par an.`,
    `Avec votre taux de transformation de ${transformation} % et un panier moyen de ${euros(panier)}, ces demandes jamais relancées représentent un potentiel de ${euros(r.caMois)} par mois, ${euros(r.caAn)} par an.`,
    "Une relance automatique (J+3, puis sur plusieurs semaines) ramène le nombre de demandes jamais relancées à zéro : ce qui reste dépend ensuite de votre réponse et de votre offre.",
  ];

  const champ = "mt-1.5 block w-full rounded-xl border border-border bg-background px-4 py-2.5 text-base text-foreground tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
  const etiquette = "block text-sm font-medium text-foreground";
  const Champ = ({ id, label, aide, valeur, onChange, suffixe, max }: { id: string; label: string; aide?: string; valeur: number; onChange: (v: number) => void; suffixe: string; max?: number }) => (
    <div>
      <label htmlFor={`${uid}-${id}`} className={etiquette}>
        {label}
      </label>
      {aide && <p className="text-xs text-muted-foreground">{aide}</p>}
      <div className="relative">
        <input
          id={`${uid}-${id}`}
          type="number"
          inputMode="numeric"
          min={0}
          max={max}
          value={Number.isFinite(valeur) ? valeur : 0}
          onChange={(e) => onChange(Number(e.target.value))}
          className={cn(champ, "pr-14")}
        />
        <span className="pointer-events-none absolute inset-y-0 right-4 top-1.5 flex items-center text-sm text-muted-foreground">{suffixe}</span>
      </div>
    </div>
  );

  return (
    <div className={cn("rounded-3xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.18)] sm:p-8", className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-texte">Vos chiffres, rien d&apos;autre</p>
      <p className="mt-2 text-sm text-muted-foreground">Le calcul n&apos;utilise aucune statistique de marché : seulement ce que vous saisissez. Résultat immédiat, sans email.</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Champ id="demandes" label="Demandes reçues par mois" aide="Formulaires, appels, messages, devis demandés" valeur={demandes} onChange={setDemandes} suffixe="/ mois" />
        <Champ id="rapides" label="Part répondue sous 24 h" valeur={rapides} onChange={setRapides} suffixe="%" max={100} />
        <Champ id="relancees" label="Part relancée quand la personne ne répond pas" valeur={relancees} onChange={setRelancees} suffixe="%" max={100} />
        <Champ id="transformation" label="Taux de transformation d'une demande en client" aide="Sur les demandes auxquelles vous répondez" valeur={transformation} onChange={setTransformation} suffixe="%" max={100} />
        <Champ id="panier" label="Panier moyen d'un client" valeur={panier} onChange={setPanier} suffixe="€" />
      </div>
      {!calcule ? (
        <button
          type="button"
          onClick={() => setCalcule(true)}
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 text-sm font-semibold text-white shadow-md transition-colors hover:from-purple-700 hover:to-pink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto"
        >
          Calculer mes demandes perdues
        </button>
      ) : (
        <div className="mt-6" role="status" aria-live="polite">
          <dl className="grid gap-3 sm:grid-cols-3">
            {[
              { v: fr(r.sansReponseRapide), l: "demandes par mois sans réponse sous 24 h" },
              { v: fr(r.jamaisRelancees), l: "demandes par mois jamais relancées" },
              { v: euros(r.caAn), l: "de chiffre d'affaires potentiel par an, avec vos chiffres" },
            ].map((x) => (
              <div key={x.l} className="rounded-2xl border border-border bg-background px-4 py-4">
                <dd className="text-2xl font-bold tabular-nums text-foreground">{x.v}</dd>
                <dt className="mt-1 text-xs leading-snug text-muted-foreground">{x.l}</dt>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Un potentiel, pas une promesse : il dépend de ce que vous répondez et de votre offre. Ce qu&apos;une relance automatique change à coup sûr, c&apos;est le nombre de demandes jamais relancées, qui tombe à zéro.
          </p>
          <div className="mt-6 rounded-2xl border border-border bg-muted/30 p-5">
            <p className="text-lg font-semibold text-foreground">Recevoir le plan de relance par email</p>
            <p className="mt-1 text-sm text-muted-foreground">Votre calcul, la séquence de relance à mettre en place (J+3, puis sur plusieurs semaines) et la ressource bonus en PDF.</p>
            <LeadMagnetForm ressource={slug} page={page} endpoint="/api/diagnostic" donnees={{ resume }} boutonLabel="Recevoir mon plan par email" className="mt-4" />
          </div>
        </div>
      )}
    </div>
  );
}
