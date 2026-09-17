import { Heart, MessageCircle, Play, Send, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Maquette d'une publication sponsorisée Facebook et Instagram : en-tête de
 * page, texte, vidéo verticale avec sous-titre, bouton d'action, puis le
 * formulaire instantané qui s'ouvre sans quitter l'application. CSS pur,
 * rendu côté serveur, entreprise fictive : badge « Exemple » et légende
 * obligatoires, aucun chiffre de résultat, aucun logo reproduit.
 *
 * `compact` : version pour l'aside du hero (colonne de 448 px, hauteur visée
 * entre 340 et 520 px) : pleine largeur, texte de l'annonce limité à deux
 * lignes, vidéo moins haute avec la lecture et le sous-titre sur une ligne,
 * sans la rangée J'aime / Commenter / Partager, formulaire réduit à ses trois
 * champs et à son bouton. Mêmes textes, rien d'ajouté.
 */

const CHOIX_PROJET = ["Rénovation", "Dépannage", "Installation"];

const CHAMP =
  "flex h-8 items-center overflow-hidden whitespace-nowrap rounded-lg border border-border bg-white px-2 text-xs text-slate-400";

export interface MockPublicationMetaProps {
  className?: string;
  /** Version courte pour le hero : voir le commentaire en tête de fichier. */
  compact?: boolean;
}

export default function MockPublicationMeta({ className, compact = false }: MockPublicationMetaProps) {
  const boutonLecture = (
    <span
      className={cn(
        "flex items-center justify-center rounded-full bg-white/25 text-white ring-1 ring-white/40",
        compact ? "h-9 w-9 shrink-0" : "absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2"
      )}
    >
      <Play className="h-5 w-5 fill-current" />
    </span>
  );

  return (
    <figure className={cn("w-full", !compact && "max-w-sm", className)}>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.2)]">
        {/* En-tête de la publication */}
        <div className="flex items-start justify-between gap-3 px-4 pt-4">
          <div className="flex items-center gap-2.5">
            <span
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-xs font-bold text-white"
              aria-hidden="true"
            >
              V
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-foreground">Votre entreprise</p>
              <p className="text-xs text-muted-foreground">Sponsorisé · Facebook et Instagram</p>
            </div>
          </div>
          <span className="shrink-0 rounded-full border border-border bg-white px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-slate-700">
            Exemple
          </span>
        </div>
        {/* Texte de l'annonce. En compact, la coupe à deux lignes (line-clamp) est posée sur un élément sans
            padding : overflow:hidden coupe au bord du padding, la troisième ligne restait donc visible dans les
            12 px du bas, tronquée par la vidéo. */}
        <div className="px-4 pb-3 pt-3">
          <p className={cn("text-sm text-foreground", compact ? "line-clamp-2 leading-snug" : "leading-relaxed")}>
            Vous attendez un devis depuis dix jours ? Chez nous, il est écrit, détaillé et envoyé sous 48 h. Laissez vos
            coordonnées, nous vous rappelons aujourd&apos;hui.
          </p>
        </div>

        {/* Vidéo verticale : accroche à l'écran et sous-titre (en compact : lecture et sous-titre sur une ligne, en bas) */}
        <div
          className={cn("relative bg-gradient-to-b from-slate-700 via-slate-900 to-slate-950", compact ? "h-36" : "h-56")}
          aria-hidden="true"
        >
          <span className="absolute left-3 top-3 rounded bg-white/90 px-1.5 py-0.5 text-[11px] font-semibold text-slate-800">0:20</span>
          <span className="absolute right-3 top-3 text-white/80">
            <VolumeX className="h-4 w-4" />
          </span>
          <span className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400/30 blur-2xl" />
          {!compact && boutonLecture}
          <p
            className={cn(
              "absolute inset-x-6 text-center font-bold leading-snug text-white drop-shadow",
              compact ? "top-[45%] -translate-y-1/2 text-base" : "top-8 text-lg"
            )}
          >
            Vous attendez un devis depuis dix jours ?
          </p>
          {compact ? (
            <div className="absolute inset-x-3 bottom-3 flex items-center gap-2.5">
              {boutonLecture}
              <span className="min-w-0 flex-1 truncate rounded-md bg-black/70 px-2 py-1 text-center text-xs font-medium text-white">
                Devis écrit, détaillé, envoyé sous 48 h
              </span>
            </div>
          ) : (
            <span className="absolute inset-x-8 bottom-4 rounded-md bg-black/70 px-2 py-1 text-center text-xs font-medium text-white">
              Devis écrit, détaillé, envoyé sous 48 h
            </span>
          )}
        </div>

        {/* Bouton d'action sous la vidéo */}
        <div className="flex items-center justify-between gap-3 border-t border-border bg-muted/40 px-4 py-3">
          <div className="min-w-0 leading-tight">
            {!compact && <p className="text-[11px] uppercase tracking-wide text-muted-foreground">Formulaire</p>}
            <p className="truncate text-sm font-medium text-foreground">Devis écrit sous 48 h</p>
          </div>
          <span className="shrink-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3.5 py-1.5 text-xs font-semibold text-white">
            Demander un devis
          </span>
        </div>
        {!compact && (
          <ul className="flex gap-5 border-t border-border px-4 py-2 text-xs text-muted-foreground" aria-hidden="true">
            <li className="inline-flex items-center gap-1">
              <Heart className="h-3.5 w-3.5" />
              J&apos;aime
            </li>
            <li className="inline-flex items-center gap-1">
              <MessageCircle className="h-3.5 w-3.5" />
              Commenter
            </li>
            <li className="inline-flex items-center gap-1">
              <Send className="h-3.5 w-3.5" />
              Partager
            </li>
          </ul>
        )}

        {/* Formulaire instantané : ce qui s'ouvre au clic, pré-rempli depuis le profil */}
        <div
          className={cn(
            "mx-4 rounded-xl border border-primary/25 bg-gradient-to-br from-purple-50/70 to-pink-50/40 p-3",
            compact ? "mb-3" : "mb-4"
          )}
        >
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-purple-700">Formulaire instantané</p>
            <p className="text-[11px] text-muted-foreground">Pré-rempli depuis le profil</p>
          </div>
          <div className={cn("mt-2 grid gap-2", compact ? "grid-cols-3" : "grid-cols-2")} aria-hidden="true">
            <span className={CHAMP}>Prénom</span>
            <span className={CHAMP}>Téléphone</span>
            <span className={cn(CHAMP, !compact && "col-span-2")}>Email</span>
          </div>
          {!compact && (
            <>
              <p className="mt-2.5 text-xs font-medium text-foreground">Votre projet concerne :</p>
              <ul className="mt-1.5 flex flex-wrap gap-1.5">
                {CHOIX_PROJET.map((c, i) => (
                  <li
                    key={c}
                    className={cn(
                      "rounded-full border px-2.5 py-1 text-xs font-medium",
                      i === 0 ? "border-primary/40 bg-white text-primary-texte" : "border-border bg-white/70 text-muted-foreground"
                    )}
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </>
          )}
          <span className="mt-3 block rounded-full bg-gradient-to-r from-purple-600 to-pink-600 py-2 text-center text-xs font-semibold text-white">
            Envoyer ma demande
          </span>
        </div>
      </div>
      <figcaption className={cn("text-center text-xs text-muted-foreground", compact ? "mt-2" : "mt-3")}>
        Exemple de publication sponsorisée avec une entreprise fictive : vidéo, texte, bouton et formulaire instantané tels
        que nous les préparons, pas un résultat client.
      </figcaption>
    </figure>
  );
}
