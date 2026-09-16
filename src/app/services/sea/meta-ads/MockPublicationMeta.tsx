import { Heart, MessageCircle, Play, Send, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Maquette d'une publication sponsorisée Facebook et Instagram : en-tête de
 * page, texte, vidéo verticale avec sous-titre, bouton d'action, puis le
 * formulaire instantané qui s'ouvre sans quitter l'application. CSS pur,
 * rendu côté serveur, entreprise fictive : badge « Exemple » et légende
 * obligatoires, aucun chiffre de résultat, aucun logo reproduit.
 */

const CHOIX_PROJET = ["Rénovation", "Dépannage", "Installation"];

export default function MockPublicationMeta({ className }: { className?: string }) {
  return (
    <figure className={cn("w-full max-w-sm", className)}>
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
        <p className="px-4 pb-3 pt-3 text-sm leading-relaxed text-foreground">
          Vous attendez un devis depuis dix jours ? Chez nous, il est écrit, détaillé et envoyé sous 48 h. Laissez vos
          coordonnées, nous vous rappelons aujourd&apos;hui.
        </p>

        {/* Vidéo verticale : accroche à l'écran et sous-titre */}
        <div className="relative h-56 bg-gradient-to-b from-slate-700 via-slate-900 to-slate-950" aria-hidden="true">
          <span className="absolute left-3 top-3 rounded bg-white/90 px-1.5 py-0.5 text-[11px] font-semibold text-slate-800">0:20</span>
          <span className="absolute right-3 top-3 text-white/80">
            <VolumeX className="h-4 w-4" />
          </span>
          <span className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400/30 blur-2xl" />
          <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 text-white ring-1 ring-white/40">
            <Play className="h-5 w-5 fill-current" />
          </span>
          <p className="absolute inset-x-6 top-8 text-center text-lg font-bold leading-snug text-white drop-shadow">
            Vous attendez un devis depuis dix jours ?
          </p>
          <span className="absolute inset-x-8 bottom-4 rounded-md bg-black/70 px-2 py-1 text-center text-xs font-medium text-white">
            Devis écrit, détaillé, envoyé sous 48 h
          </span>
        </div>

        {/* Bouton d'action sous la vidéo */}
        <div className="flex items-center justify-between gap-3 border-t border-border bg-muted/40 px-4 py-3">
          <div className="min-w-0 leading-tight">
            <p className="text-[11px] uppercase tracking-wide text-muted-foreground">Formulaire</p>
            <p className="truncate text-sm font-medium text-foreground">Devis écrit sous 48 h</p>
          </div>
          <span className="shrink-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3.5 py-1.5 text-xs font-semibold text-white">
            Demander un devis
          </span>
        </div>
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

        {/* Formulaire instantané : ce qui s'ouvre au clic, pré-rempli depuis le profil */}
        <div className="mx-4 mb-4 rounded-xl border border-primary/25 bg-gradient-to-br from-purple-50/70 to-pink-50/40 p-3">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-purple-700">Formulaire instantané</p>
            <p className="text-[11px] text-muted-foreground">Pré-rempli depuis le profil</p>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2" aria-hidden="true">
            <span className="flex h-8 items-center rounded-lg border border-border bg-white px-2 text-xs text-slate-400">Prénom</span>
            <span className="flex h-8 items-center rounded-lg border border-border bg-white px-2 text-xs text-slate-400">Téléphone</span>
            <span className="col-span-2 flex h-8 items-center rounded-lg border border-border bg-white px-2 text-xs text-slate-400">Email</span>
          </div>
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
          <span className="mt-3 block rounded-full bg-gradient-to-r from-purple-600 to-pink-600 py-2 text-center text-xs font-semibold text-white">
            Envoyer ma demande
          </span>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted-foreground">
        Exemple de publication sponsorisée avec une entreprise fictive : vidéo, texte, bouton et formulaire instantané tels
        que nous les préparons, pas un résultat client.
      </figcaption>
    </figure>
  );
}
