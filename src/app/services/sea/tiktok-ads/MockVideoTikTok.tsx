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
 */

const ANATOMIE_VIDEO = [
  { temps: "0 à 3 s", titre: "L'accroche", texte: "Le plat plein cadre et une phrase que dirait votre client." },
  { temps: "3 à 15 s", titre: "La démonstration", texte: "Trois plats, deux secondes chacun : on montre, on n'explique pas." },
  { temps: "15 à 25 s", titre: "L'offre", texte: "Adresse, quartier, une seule chose à retenir." },
  { temps: "Fin", titre: "L'appel à l'action", texte: "Un bouton : réserver, commander, venir." },
];

export default function MockVideoTikTok({ className }: { className?: string }) {
  return (
    <figure className={cn("w-full max-w-md", className)}>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.25)] sm:p-6">
        <BorderBeam size={90} duration={10} />
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm font-semibold text-foreground">Votre vidéo, telle qu&apos;elle passe dans le fil</p>
          <span className="shrink-0 rounded-full border border-border bg-white px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-slate-700">
            Exemple
          </span>
        </div>

        <div className="mt-4 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
          {/* Téléphone 9:16 */}
          <div
            className="relative w-48 shrink-0 overflow-hidden rounded-[1.6rem] border-[6px] border-slate-900 bg-gradient-to-b from-slate-800 via-slate-900 to-black shadow-lg"
            style={{ aspectRatio: "9 / 16" }}
            aria-hidden="true"
          >
            <span className="absolute left-1/2 top-[20%] h-20 w-20 -translate-x-1/2 rounded-full bg-orange-400/50 blur-xl" />
            <div className="absolute inset-x-3 top-2 flex gap-1">
              <span className="h-0.5 flex-1 rounded-full bg-white" />
              <span className="h-0.5 flex-1 rounded-full bg-white/30" />
              <span className="h-0.5 flex-1 rounded-full bg-white/30" />
            </div>
            <p className="absolute inset-x-3 top-[14%] text-center text-[15px] font-bold leading-tight text-white drop-shadow">
              Samedi soir, c&apos;est ça
            </p>
            <span className="absolute left-1/2 top-[38%] flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white">
              <Play className="h-4 w-4 fill-current" />
            </span>
            <span className="absolute left-3 right-12 top-[50%] rounded-md bg-black/70 px-1.5 py-1 text-center text-[10px] font-medium leading-snug text-white">
              « Je cherche un resto pour samedi soir »
            </span>
            <div className="absolute right-2 top-[48%] flex flex-col items-center gap-2 text-white">
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
            <div className="absolute inset-x-3 bottom-3">
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
          <ol className="min-w-0 flex-1 space-y-3">
            {ANATOMIE_VIDEO.map((etape, i) => (
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
            ))}
          </ol>
        </div>

        <div className="mt-5 flex items-center gap-2 rounded-xl border border-border bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
          <Play className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          Sous-titres et texte à l&apos;écran : la vidéo se comprend sans le son.
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted-foreground">
        Exemple de vidéo verticale avec un restaurant fictif : accroche, sous-titre et bouton tels que nous les
        construisons, pas un résultat client.
      </figcaption>
    </figure>
  );
}
