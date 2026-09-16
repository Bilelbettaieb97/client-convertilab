import { ArrowRight, Bot, Check, Plus } from "lucide-react";
import { getPole, type PoleLien } from "@/data/poles";
import { BoutonLien } from "@/components/pole";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/**
 * Les quatre sous-pages du pôle CRM (section « Les quatre prestations du pôle » de CrmContent) (création, optimisation, nettoyage,
 * intégration IA), une carte chacune avec une illustration propre, la
 * description de poles.ts et un lien descriptif. Serveur, CSS pur : les
 * illustrations sont décoratives (aria-hidden), sans donnée ni chiffre.
 */

const pole = getPole("crm");

interface Fiche {
  numero: string;
  titre: string;
  ancre: string;
  illustration: () => React.ReactNode;
}

/** Colonnes d'un pipeline en construction : trois posées, une à ajouter. */
function IllustrationCreation() {
  return (
    <div className="grid h-full grid-cols-4 gap-1.5">
      {["Nouvelle demande", "Devis envoyé", "Relance en cours"].map((nom, i) => (
        <div key={nom} className="flex flex-col rounded-lg border border-border bg-white p-1.5">
          <span className="line-clamp-2 text-[9px] font-semibold leading-tight text-foreground">{nom}</span>
          <span className={cn("mt-1.5 h-6 rounded border border-border bg-muted/60", i === 1 && "border-dashed bg-transparent")} />
          {i !== 1 && <span className="mt-1 h-6 rounded border border-border bg-muted/60" />}
        </div>
      ))}
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-primary/40 bg-primary/5 p-1.5 text-center">
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-primary ring-1 ring-primary/30">
          <Plus className="h-3 w-3" strokeWidth={2.5} />
        </span>
        <span className="mt-1 text-[9px] font-medium leading-tight text-primary-texte">Votre étape</span>
      </div>
    </div>
  );
}

/** Séquence de relance : deux envois faits, un aujourd'hui, arrêt dès réponse. */
function IllustrationOptimisation() {
  const etapes = [
    { repere: "J+3", etat: "fait" },
    { repere: "J+7", etat: "fait" },
    { repere: "J+14", etat: "aujourd'hui" },
    { repere: "J+30", etat: "prévue" },
  ] as const;
  return (
    <div className="flex h-full flex-col justify-center">
      <div className="relative grid grid-cols-4 gap-1">
        <span className="absolute left-[12%] right-[12%] top-2.5 h-px bg-border" />
        {etapes.map((e) => (
          <div key={e.repere} className="relative flex flex-col items-center">
            <span
              className={cn(
                "inline-flex h-5 w-5 items-center justify-center rounded-full ring-2 ring-white",
                e.etat === "fait" && "bg-primary text-white",
                e.etat === "aujourd'hui" && "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md",
                e.etat === "prévue" && "border border-dashed border-primary/50 bg-white"
              )}
            >
              {e.etat === "fait" && <Check className="h-3 w-3" strokeWidth={3} />}
            </span>
            <span className="mt-1.5 text-[10px] font-semibold tabular-nums text-foreground">{e.repere}</span>
            <span className="text-[9px] text-muted-foreground">{e.etat === "aujourd'hui" ? "aujourd'hui" : e.etat === "fait" ? "envoyée" : "prévue"}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 rounded-lg border border-border bg-white px-2 py-1.5 text-center text-[10px] text-muted-foreground">
        Relance par email, arrêtée dès la première réponse
      </p>
    </div>
  );
}

/** Trois fiches en doublon qui deviennent une seule, un contact archivé. */
function IllustrationNettoyage() {
  return (
    <div className="grid h-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-1.5">
      <div className="min-w-0 space-y-1">
        {["DUPONT M.", "Marie Dupont", "M. Dupont"].map((n) => (
          <div key={n} className="flex items-center justify-between rounded-md border border-border bg-white px-1.5 py-1">
            <span className="truncate text-[9px] font-medium text-foreground">{n}</span>
            <span className="ml-1 shrink-0 rounded bg-amber-50 px-1 text-[8px] font-bold uppercase text-amber-700 ring-1 ring-amber-200">doublon</span>
          </div>
        ))}
      </div>
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md">
        <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
      <div className="min-w-0 space-y-1">
        <div className="flex items-center justify-between rounded-md border border-primary/30 bg-white px-1.5 py-1">
          <span className="truncate text-[9px] font-medium text-foreground">Marie Dupont</span>
          <span className="ml-1 shrink-0 rounded bg-emerald-50 px-1 text-[8px] font-bold uppercase text-emerald-700 ring-1 ring-emerald-200">1 fiche</span>
        </div>
        <div className="flex items-center justify-between rounded-md border border-border bg-white px-1.5 py-1 opacity-60">
          <span className="truncate text-[9px] font-medium text-foreground">Karim B.</span>
          <span className="ml-1 shrink-0 rounded bg-slate-100 px-1 text-[8px] font-bold uppercase text-slate-600 ring-1 ring-slate-200">archivé</span>
        </div>
        <p className="px-0.5 text-[9px] text-muted-foreground">Règles écrites</p>
      </div>
    </div>
  );
}

/** Une demande reçue la nuit, une réponse préparée par Claude, à valider. */
function IllustrationIa() {
  return (
    <div className="flex h-full flex-col justify-center gap-1.5">
      <div className="max-w-[85%] rounded-xl rounded-bl-sm border border-border bg-white px-2.5 py-1.5">
        <p className="text-[9px] font-semibold uppercase tracking-wide text-muted-foreground">Demande reçue, 23 h 12</p>
        <p className="mt-0.5 text-[10px] leading-snug text-foreground">« Bonjour, pouvez-vous me faire un devis pour... »</p>
      </div>
      <div className="ml-auto max-w-[85%] rounded-xl rounded-br-sm border border-primary/30 bg-gradient-to-br from-purple-50 to-pink-50 px-2.5 py-1.5">
        <p className="inline-flex items-center gap-1 text-[9px] font-semibold uppercase tracking-wide text-purple-700">
          <Bot className="h-3 w-3" strokeWidth={2} />
          Réponse préparée par Claude
        </p>
        <p className="mt-0.5 text-[10px] leading-snug text-foreground">Devis pré-rempli, dans votre ton. À valider avant envoi.</p>
      </div>
    </div>
  );
}

const FICHES: Record<string, Fiche> = {
  "/services/crm/creation-crm": {
    numero: "01",
    titre: "Création de CRM",
    ancre: "Voir la création de CRM",
    illustration: IllustrationCreation,
  },
  "/services/crm/optimisation-crm": {
    numero: "02",
    titre: "Optimisation du CRM",
    ancre: "Voir l'optimisation du CRM",
    illustration: IllustrationOptimisation,
  },
  "/services/crm/nettoyage-crm": {
    numero: "03",
    titre: "Nettoyage du CRM",
    ancre: "Voir le nettoyage du CRM",
    illustration: IllustrationNettoyage,
  },
  "/services/integration-ia": {
    numero: "04",
    titre: "Intégration IA avec Claude",
    ancre: "Voir l'intégration IA",
    illustration: IllustrationIa,
  },
};

function fiche(lien: PoleLien): Fiche {
  const f = FICHES[lien.href];
  if (!f) throw new Error(`Sous-page CRM sans fiche : ${lien.href}`);
  return f;
}

export default function SousPagesCrm({ className }: { className?: string }) {
  return (
    <ul className={cn("grid gap-6 md:grid-cols-2", className)}>
      {pole.sousPages.map((lien, i) => {
        const f = fiche(lien);
        const Illustration = f.illustration;
        return (
          <li key={lien.href} className="h-full">
            <Reveal delay={i * 0.08} className="h-full">
              <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_20px_40px_-24px_rgba(15,23,42,0.2)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/40 motion-reduce:transition-none sm:p-6">
                {/* Illustration décorative ; le badge « Exemple » qualifie les noms et repères fictifs. */}
                <div className="relative h-36 rounded-2xl border border-border bg-muted/40 p-3 pt-7" aria-hidden="true">
                  <Illustration />
                  <span className="absolute right-2 top-2 rounded-full border border-border bg-white px-1.5 py-px text-[9px] font-semibold uppercase tracking-wide text-slate-600">
                    Exemple
                  </span>
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-purple-700">Prestation {f.numero}</p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{f.titre}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{lien.description}</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Sur devis</span> · {pole.prixDetail}
                </p>
                <div className="mt-auto pt-5">
                  <BoutonLien href={lien.href} label={f.ancre} variante="discret" className="text-sm font-semibold" />
                </div>
              </article>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
