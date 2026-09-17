import { Heart, MessageCircle, Play, Share2 } from "lucide-react";
import { BorderBeam } from "@/components/motion";
import { cn } from "@/lib/utils";

/**
 * Maquette d'une vidéo TikTok verticale sponsorisée : téléphone 9:16 avec
 * l'accroche à l'écran, le sous-titre, les boutons du fil et le bouton
 * d'action, accompagné de l'anatomie de la vidéo seconde par seconde. CSS
 * pur, rendu côté serveur, commerce fictif : badge « Exemple » et légende
 * obligatoires, aucun chiffre de résultat, aucun logo reproduit. Seule
 * BorderBeam de l'écran du hero.
 *
 * `compact` : version pour l'aside du hero (colonne de 448 px, hauteur visée
 * entre 340 et 520 px) : téléphone moins large (176 px à toutes les tailles :
 * en dessous, « @votre-resto » est tronqué à côté de « Sponsorisé ») et
 * toujours à côté de l'anatomie (même sous 640 px), étapes sans pastille avec le repère de temps
 * au-dessus du titre, détail de chaque étape affiché à partir de lg seulement,
 * sans le rappel sur les sous-titres. Mêmes textes, rien d'ajouté.
 */

const ANATOMIE_VIDEO = [
  { temps: "0 à 3 s", titre: "L'accroche", texte: "Le plat plein cadre et une phrase que dirait votre client." },
  { temps: "3 à 15 s", titre: "La démonstration", texte: "Trois plats, deux secondes chacun : on montre, on n'explique pas." },
  { temps: "15 à 25 s", titre: "L'offre", texte: "Adresse, quartier, une seule chose à retenir." },
  { temps: "Fin", titre: "L'appel à l'action", texte: "Un bouton : réserver, commander, venir." },
];

export interface MockVideoTikTokProps {
  className?: string;
  /** Version courte pour le hero : voir le commentaire en tête de fichier. */
  compact?: boolean;
}

export default function MockVideoTikTok({ className, compact = false }: MockVideoTikTokProps) {
  return (
    <figure className={cn("w-full max-w-md", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.25)]",
          compact ? "p-4 sm:p-5" : "p-5 sm:p-6"
        )}
      >
        <BorderBeam size={90} duration={10} />
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm font-semibold text-foreground">Votre vidéo, telle qu&apos;elle passe dans le fil</p>
          <span className="shrink-0 rounded-full border border-border bg-white px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-slate-700">
            Exemple
          </span>
        </div>

        <div
          className={cn(
            "mt-4 flex",
            compact ? "items-start gap-3 sm:gap-4" : "flex-col items-center gap-5 sm:flex-row sm:items-start"
          )}
        >
          {/* Téléphone 9:16 : contenu en flux (accroche, lecture, sous-titre, puis le bas de l'écran), aucun chevauchement quelle que soit la largeur. */}
          <div
            className={cn(
              "relative flex shrink-0 flex-col overflow-hidden rounded-[1.6rem] border-[6px] border-slate-900 bg-gradient-to-b from-slate-800 via-slate-900 to-black px-3 pb-3 pt-6 shadow-lg",
              compact ? "w-44" : "w-48"
            )}
            style={{ aspectRatio: "9 / 16" }}
            aria-hidden="true"
          >
            <span className="absolute left-1/2 top-[20%] h-20 w-20 -translate-x-1/2 rounded-full bg-orange-400/50 blur-xl" />
            <div className="absolute inset-x-3 top-2 flex gap-1">
              <span className="h-0.5 flex-1 rounded-full bg-white" />
              <span className="h-0.5 flex-1 rounded-full bg-white/30" />
              <span className="h-0.5 flex-1 rounded-full bg-white/30" />
            </div>
            <p className="relative text-center text-[15px] font-bold leading-tight text-white drop-shadow">
              Samedi soir, c&apos;est ça
            </p>
            <span className="relative mx-auto mt-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white">
              <Play className="h-4 w-4 fill-current" />
            </span>
            {/* mr-10 : laisse la colonne des boutons du fil libre à droite. */}
            <span className="relative mr-10 mt-3 rounded-md bg-black/70 px-1.5 py-1 text-center text-[10px] font-medium leading-snug text-white">
              « Je cherche un resto pour samedi soir »
            </span>
            <div className="absolute bottom-[34%] right-2 flex flex-col items-center gap-2 text-white">
              <span className="rounded-full bg-white/15 p-1.5">
                <Heart className="h-3.5 w-3.5" />
              </span>
              <span className="rounded-full bg-white/15 p-1.5">
                <MessageCircle className="h-3.5 w-3.5" />
              </span>
              <span className="rounded-full bg-white/15 p-1.5">
                <Share2 className="h-3.5 w-3.5" />
              </span>
            </div>
            <div className="relative mt-auto">
              <p className="flex items-baseline justify-between gap-2 text-xs font-semibold text-white">
                <span className="truncate">@votre-resto</span>
                <span className="shrink-0 text-[9px] font-normal text-white/70">Sponsorisé</span>
              </p>
              <p className="mt-0.5 truncate text-[10px] text-white/90">Le plat du samedi soir, sorti de cuisine.</p>
              <span className="mt-2 block rounded-md bg-gradient-to-r from-purple-600 to-pink-600 py-1.5 text-center text-[11px] font-semibold text-white">
                Réserver une table
              </span>
            </div>
          </div>

          {/* Anatomie : ce que nous construisons, pas un résultat */}
          <ol className={cn("min-w-0 flex-1", compact ? "space-y-2.5 sm:space-y-3" : "space-y-3")}>
            {ANATOMIE_VIDEO.map((etape, i) =>
              compact ? (
                <li key={etape.titre} className="border-l-2 border-primary/20 pl-3">
                  <p className="text-[11px] font-semibold text-purple-700">{etape.temps}</p>
                  <p className="text-sm font-semibold leading-snug text-foreground">{etape.titre}</p>
                  <p className="mt-0.5 hidden text-xs leading-snug text-muted-foreground lg:block">{etape.texte}</p>
                </li>
              ) : (
                <li key={etape.titre} className="flex gap-2.5">
                  <span
                    className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground">
                      {etape.titre}
                      <span className="ml-2 text-xs font-medium text-muted-foreground">{etape.temps}</span>
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{etape.texte}</p>
                  </div>
                </li>
              )
            )}
          </ol>
        </div>

        {!compact && (
          <div className="mt-5 flex items-center gap-2 rounded-xl border border-border bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
            <Play className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            Sous-titres et texte à l&apos;écran : la vidéo se comprend sans le son.
          </div>
        )}
      </div>
      <figcaption className={cn("text-center text-xs text-muted-foreground", compact ? "mt-2" : "mt-3")}>
        Exemple de vidéo verticale avec un restaurant fictif : accroche, sous-titre et bouton tels que nous les
        construisons, pas un résultat client.
      </figcaption>
    </figure>
  );
}
