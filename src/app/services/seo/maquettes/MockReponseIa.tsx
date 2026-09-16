import { Bot, Globe, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Maquette d'une réponse d'assistant conversationnel qui cite une entreprise
 * locale avec ses sources : hero de /services/seo/visibilite-ia, et variante
 * compacte dans la carte de la page pôle. CSS pur, composant serveur. Aucun
 * assistant nommé ni logo reproduit, aucune entreprise réelle : la réponse
 * est un exemple (badge « Exemple », note), aucune citation n'est promise.
 */

const QUESTION = "Quel paysagiste recommandez-vous près de Rueil-Malmaison ?";

const SOURCES = [
  { icon: Globe, numero: 1, label: "votre-site.fr/paysagiste-rueil-malmaison" },
  { icon: MapPin, numero: 2, label: "Fiche Google · Votre entreprise" },
];

export interface MockReponseIaProps {
  /** Variante compacte (carte de la page pôle) : réponse courte, une source, sans note. */
  compact?: boolean;
  className?: string;
}

function Citation({ numero }: { numero: number }) {
  return (
    <sup className="ml-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded bg-primary/10 px-1 align-text-top text-[10px] font-semibold text-purple-700">
      {numero}
    </sup>
  );
}

export default function MockReponseIa({ compact = false, className }: MockReponseIaProps) {
  const sources = compact ? SOURCES.slice(0, 1) : SOURCES;
  return (
    <figure className={cn("w-full max-w-md", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-border bg-card",
          compact ? "p-4" : "p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.2)] sm:p-6"
        )}
      >
        <div className="flex items-center justify-between gap-3">
          <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <span
              className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white"
              aria-hidden="true"
            >
              <Bot className="h-4 w-4" strokeWidth={2} />
            </span>
            Assistant IA, avec recherche web
          </p>
          <span className="shrink-0 rounded-full border border-border bg-white px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-slate-700">
            Exemple
          </span>
        </div>

        <div className={cn("space-y-3", compact ? "mt-3" : "mt-4")}>
          <p className="ml-auto w-fit max-w-[88%] rounded-2xl rounded-br-sm bg-gradient-to-r from-purple-600 to-pink-600 px-3.5 py-2.5 text-sm leading-snug text-white">
            <span className="sr-only">Question posée : </span>
            {QUESTION}
          </p>
          <div className="max-w-[94%] rounded-2xl rounded-bl-sm border border-border bg-muted/40 px-3.5 py-3 text-sm leading-relaxed text-foreground">
            <span className="sr-only">Réponse générée : </span>
            {compact ? (
              <>
                D&apos;après les pages consultées, <strong>Votre entreprise</strong>, paysagiste à Rueil-Malmaison, propose la
                création et l&apos;entretien de jardins, avec un devis écrit sous 48 h
                <Citation numero={1} />.
              </>
            ) : (
              <>
                D&apos;après les pages consultées, <strong>Votre entreprise</strong>, paysagiste à Rueil-Malmaison, réalise la
                création et l&apos;entretien de jardins dans les Hauts-de-Seine, avec un devis écrit sous 48 h
                <Citation numero={1} />. Sa fiche Google affiche des avis récents et des photos de réalisations
                <Citation numero={2} />.
              </>
            )}
          </div>
        </div>

        <div className={cn(compact ? "mt-3" : "mt-4")}>
          <p className="text-xs font-semibold uppercase tracking-wide text-purple-700">Sources citées</p>
          <ul className="mt-1.5 space-y-1.5">
            {sources.map(({ icon: Icon, numero, label }) => (
              <li key={numero} className="flex items-center gap-2 text-xs text-foreground">
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded bg-primary/10 font-semibold text-purple-700">
                  {numero}
                </span>
                <Icon className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
                <span className="min-w-0 break-all">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {!compact && (
        <figcaption className="mt-3 text-center text-xs text-muted-foreground">
          Exemple de réponse générée : chaque assistant choisit ses sources, aucune citation n&apos;est promise.
        </figcaption>
      )}
    </figure>
  );
}
