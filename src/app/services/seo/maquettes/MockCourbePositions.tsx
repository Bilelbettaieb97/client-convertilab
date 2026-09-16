import { cn } from "@/lib/utils";

/**
 * Courbe d'exemple « positions et visites sur 6 mois » : hero de
 * /services/seo/referencement, et variante compacte dans la carte de la page
 * pôle. SVG pur, composant serveur, aucune donnée réelle : le badge « Exemple »
 * et la note le rappellent, comme sur DashboardMock (qui ne trace que des
 * barres, d'où ce composant propre à la page).
 */

const MOIS = ["Mois 1", "Mois 2", "Mois 3", "Mois 4", "Mois 5", "Mois 6"];
/** Visites mensuelles depuis Google (valeurs d'exemple). */
const VISITES = [40, 55, 90, 140, 210, 310];
/** Position moyenne sur les requêtes cibles (valeurs d'exemple ; plus petite = mieux classée). */
const POSITIONS = [32, 27, 21, 15, 11, 9];

const LARGEUR = 320;
const HAUTEUR = 160;
const MARGE_X = 20;
const MARGE_HAUT = 18;
const MARGE_BAS = 30;
const INT_L = LARGEUR - 2 * MARGE_X;
const INT_H = HAUTEUR - MARGE_HAUT - MARGE_BAS;
const MAX_V = Math.max(...VISITES);
const MIN_P = Math.min(...POSITIONS);
const MAX_P = Math.max(...POSITIONS);
const DERNIER = VISITES.length - 1;

const f = (n: number) => n.toFixed(1);
const x = (i: number) => MARGE_X + (i * INT_L) / DERNIER;
const yVisites = (v: number) => MARGE_HAUT + (1 - v / MAX_V) * INT_H;
/** Échelle inversée et décalée de 20 % : la meilleure position (9) est en haut, sans se confondre avec le sommet des visites. */
const yPosition = (p: number) => MARGE_HAUT + 0.2 * INT_H + ((p - MIN_P) / (MAX_P - MIN_P)) * 0.8 * INT_H;

const POINTS_VISITES = VISITES.map((v, i) => `${f(x(i))},${f(yVisites(v))}`);
const BAS = f(MARGE_HAUT + INT_H);
const AIRE_VISITES = `M${f(x(0))},${BAS} L${POINTS_VISITES.join(" L")} L${f(x(DERNIER))},${BAS} Z`;
const LIGNE_VISITES = POINTS_VISITES.join(" ");
const LIGNE_POSITIONS = POSITIONS.map((p, i) => `${f(x(i))},${f(yPosition(p))}`).join(" ");

export interface MockCourbePositionsProps {
  /** Variante compacte (carte de la page pôle) : en-tête, courbe et légende seulement. */
  compact?: boolean;
  className?: string;
}

export default function MockCourbePositions({ compact = false, className }: MockCourbePositionsProps) {
  const gradId = compact ? "courbe-seo-compact" : "courbe-seo";
  return (
    <figure className={cn("w-full max-w-md", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-border bg-card",
          compact ? "p-4" : "p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.2)] sm:p-6"
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm font-semibold text-foreground">Positions et visites sur 6 mois</p>
          <span className="shrink-0 rounded-full border border-border bg-white px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-slate-700">
            Exemple
          </span>
        </div>

        {!compact && (
          <dl className="mt-4 grid grid-cols-3 gap-2">
            <div className="rounded-xl border border-primary/25 bg-gradient-to-br from-purple-50 to-pink-50 p-2.5 sm:p-3">
              <dt className="text-xs text-muted-foreground">Position moyenne</dt>
              <dd className="mt-1 text-base font-bold tabular-nums tracking-tight text-foreground sm:text-xl">32 → 9</dd>
            </div>
            <div className="rounded-xl border border-border bg-background p-2.5 sm:p-3">
              <dt className="text-xs text-muted-foreground">Visites par mois</dt>
              <dd className="mt-1 text-base font-bold tabular-nums tracking-tight text-foreground sm:text-xl">40 → 310</dd>
            </div>
            <div className="rounded-xl border border-border bg-background p-2.5 sm:p-3">
              <dt className="text-xs text-muted-foreground">Pages publiées</dt>
              <dd className="mt-1 text-base font-bold tabular-nums tracking-tight text-foreground sm:text-xl">12</dd>
            </div>
          </dl>
        )}

        <svg
          viewBox={`0 0 ${LARGEUR} ${HAUTEUR}`}
          className={cn("h-auto w-full", compact ? "mt-3" : "mt-4")}
          role="img"
          aria-label="Exemple de courbe sur six mois : la position moyenne passe de 32 à 9 et les visites mensuelles de 40 à 310."
        >
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(270 70% 60%)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="hsl(270 70% 60%)" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          {[0, 0.5, 1].map((t) => (
            <line
              key={t}
              x1={MARGE_X}
              x2={LARGEUR - MARGE_X}
              y1={MARGE_HAUT + t * INT_H}
              y2={MARGE_HAUT + t * INT_H}
              stroke="hsl(215 16% 90%)"
              strokeWidth="1"
            />
          ))}
          <path d={AIRE_VISITES} fill={`url(#${gradId})`} />
          <polyline
            points={LIGNE_VISITES}
            fill="none"
            stroke="hsl(270 70% 55%)"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <polyline
            points={LIGNE_POSITIONS}
            fill="none"
            stroke="hsl(330 70% 55%)"
            strokeWidth="2"
            strokeDasharray="5 4"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {POSITIONS.map((p, i) => (
            <circle key={i} cx={x(i)} cy={yPosition(p)} r="3" fill="hsl(330 70% 55%)" />
          ))}
          <text x={x(DERNIER)} y={MARGE_HAUT - 8} fontSize="10" fontWeight="600" fill="hsl(270 60% 40%)" textAnchor="end">
            310 visites
          </text>
          <text x={x(DERNIER) - 4} y={yPosition(POSITIONS[DERNIER]) + 16} fontSize="10" fontWeight="600" fill="hsl(330 60% 40%)" textAnchor="end">
            Pos. 9
          </text>
          <text x={x(0) + 8} y={yPosition(POSITIONS[0]) + 13} fontSize="10" fontWeight="600" fill="hsl(330 60% 40%)">
            Pos. 32
          </text>
          {MOIS.map((m, i) => (
            <text
              key={m}
              x={x(i)}
              y={HAUTEUR - 4}
              fontSize="9"
              fill="hsl(215 14% 45%)"
              textAnchor={i === 0 ? "start" : i === DERNIER ? "end" : "middle"}
            >
              {m}
            </text>
          ))}
        </svg>

        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground" aria-hidden="true">
          <li className="inline-flex items-center gap-1.5">
            <span className="h-0.5 w-4 rounded-full bg-purple-600" />
            Visites depuis Google
          </li>
          <li className="inline-flex items-center gap-1.5">
            <span className="h-0 w-4 border-t-2 border-dashed border-pink-500" />
            Position moyenne (plus haut = mieux classé)
          </li>
        </ul>
      </div>
      {!compact && (
        <figcaption className="mt-3 text-center text-xs text-muted-foreground">
          Exemple de courbe : les chiffres viendront de votre Search Console, ce ne sont pas des résultats clients.
        </figcaption>
      )}
    </figure>
  );
}
