import { cn } from "@/lib/utils";

/**
 * Jauge de score et liste de points bloquants d'exemple : hero de
 * /services/seo/audit, et variante compacte dans la carte de la page pôle.
 * SVG et CSS purs, composant serveur. Le score et les points sont des
 * exemples (badge « Exemple », note) : le score réel vient de l'outil gratuit
 * /seo-check ou de l'audit complet.
 */

const SCORE = 58;
const RAYON = 72;
/** Longueur du demi-cercle, pour le tracé partiel de la jauge. */
const ARC = Math.PI * RAYON;

type Gravite = "Bloquant" | "Grave" | "Important";

const POINTS: { texte: string; gravite: Gravite }[] = [
  { texte: "Pages de service en « noindex »", gravite: "Bloquant" },
  { texte: "Un seul titre pour douze pages", gravite: "Grave" },
  { texte: "Aucune donnée structurée", gravite: "Grave" },
  { texte: "Robots d'IA bloqués dans robots.txt", gravite: "Important" },
];

const BADGE: Record<Gravite, string> = {
  Bloquant: "rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-2.5 py-0.5 text-xs font-semibold text-white",
  Grave: "rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-purple-700",
  Important: "rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground",
};

export interface MockJaugeAuditProps {
  /** Variante compacte (carte de la page pôle) : jauge et trois points, sans note. */
  compact?: boolean;
  className?: string;
}

export default function MockJaugeAudit({ compact = false, className }: MockJaugeAuditProps) {
  const gradId = compact ? "jauge-audit-compact" : "jauge-audit";
  const points = compact ? POINTS.slice(0, 3) : POINTS;
  return (
    <figure className={cn("w-full max-w-md", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-border bg-card",
          compact ? "p-4" : "p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.2)] sm:p-6"
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm font-semibold text-foreground">Score de lisibilité SEO</p>
          <span className="shrink-0 rounded-full border border-border bg-white px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-slate-700">
            Exemple
          </span>
        </div>

        <div className={cn("flex items-center gap-4", compact ? "mt-3" : "mt-4 sm:gap-6")}>
          <svg
            viewBox="0 0 180 104"
            className={cn("h-auto shrink-0", compact ? "w-32" : "w-36 sm:w-44")}
            role="img"
            aria-label={`Exemple de jauge : score de ${SCORE} sur 100.`}
          >
            <defs>
              <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="hsl(270 70% 55%)" />
                <stop offset="100%" stopColor="hsl(330 70% 55%)" />
              </linearGradient>
            </defs>
            <path d="M18 92 A72 72 0 0 1 162 92" fill="none" stroke="hsl(215 16% 90%)" strokeWidth="12" strokeLinecap="round" />
            <path
              d="M18 92 A72 72 0 0 1 162 92"
              fill="none"
              stroke={`url(#${gradId})`}
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={`${(ARC * SCORE) / 100} ${ARC}`}
            />
            <text x="90" y="82" textAnchor="middle" fontSize="34" fontWeight="700" fill="hsl(222 47% 11%)">
              {SCORE}
            </text>
            <text x="90" y="98" textAnchor="middle" fontSize="10" fill="hsl(215 14% 45%)">
              sur 100
            </text>
          </svg>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-purple-700">Points bloquants</p>
            <p className="mt-1 text-sm leading-snug text-muted-foreground">Classés par gravité, avec la correction attendue dans le rapport.</p>
          </div>
        </div>

        <ol className={cn("divide-y divide-border", compact ? "mt-3" : "mt-4")}>
          {points.map(({ texte, gravite }, i) => (
            <li key={texte} className="flex items-center justify-between gap-3 py-2">
              <span className="flex min-w-0 items-start gap-2.5 text-sm leading-snug text-foreground">
                <span className="mt-0.5 font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <span className="min-w-0">{texte}</span>
              </span>
              <span className={cn("shrink-0", BADGE[gravite])}>{gravite}</span>
            </li>
          ))}
        </ol>
      </div>
      {!compact && (
        <figcaption className="mt-3 text-center text-xs text-muted-foreground">
          Exemple de score et de points bloquants : les vôtres dépendent de votre site, ce ne sont pas des résultats clients.
        </figcaption>
      )}
    </figure>
  );
}
