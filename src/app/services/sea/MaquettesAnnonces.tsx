import type { ReactNode } from "react";
import { Heart, MessageCircle, Play, Search, Share2 } from "lucide-react";

/**
 * Cinq maquettes miniatures, une par plateforme du pôle publicité, posées en
 * tête des cartes de la section « Les offres du pôle » (/services/sea) : à
 * quoi ressemble l'annonce type sur chaque plateforme. CSS pur, composants
 * serveur, entreprises fictives, aucun logo reproduit (le nom des plateformes
 * est écrit en texte dans les cartes). Chaque maquette porte la mention
 * « Exemple » et une description pour les lecteurs d'écran ; aucun chiffre.
 */

function Cadre({ children, description }: { children: ReactNode; description: string }) {
  return (
    <div className="relative h-44 overflow-hidden rounded-xl border border-border bg-muted/40 p-3" role="img" aria-label={description}>
      <span className="absolute right-2 top-2 z-10 rounded-full border border-border bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600">
        Exemple
      </span>
      {children}
    </div>
  );
}

const BOUTON = "block rounded-md bg-gradient-to-r from-purple-600 to-pink-600 text-center font-semibold text-white";

/** Annonce Search en tête d'une page de résultats. */
export function MiniAnnonceGoogle() {
  return (
    <Cadre description="Exemple d'annonce Google Search sponsorisée, en tête d'une page de résultats, avec ses extensions.">
      <div className="flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-xs text-foreground">
        <Search className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
        plombier rueil-malmaison
      </div>
      <div className="mt-2 rounded-lg border border-primary/25 bg-white p-2.5">
        <p className="text-[10px] font-semibold text-foreground">Sponsorisé</p>
        <p className="mt-0.5 truncate text-[10px] text-muted-foreground">votre-site.fr › depannage</p>
        <p className="mt-1 text-sm font-semibold leading-snug text-primary-texte">Plombier à Rueil-Malmaison : devis écrit avant travaux</p>
        <p className="mt-1 line-clamp-2 text-[11px] leading-snug text-muted-foreground">
          Fuite, chauffe-eau, débouchage. Artisan local, devis gratuit, rappel dans l&apos;heure.
        </p>
        <ul className="mt-1.5 flex gap-3 text-[10px] font-medium text-primary-texte">
          <li>Appeler</li>
          <li>Itinéraire</li>
          <li>Nos tarifs</li>
        </ul>
      </div>
    </Cadre>
  );
}

/** Publication sponsorisée Facebook et Instagram : vidéo verticale, texte, formulaire instantané. */
export function MiniPublicationMeta() {
  return (
    <Cadre description="Exemple de publication sponsorisée Facebook et Instagram : vidéo verticale, texte et formulaire instantané.">
      <div className="flex h-full gap-3">
        <div className="relative w-20 shrink-0 overflow-hidden rounded-lg bg-gradient-to-b from-slate-700 to-slate-950">
          <span className="absolute left-1 top-1 rounded bg-white/90 px-1 text-[8px] font-semibold text-slate-800">0:20</span>
          <span className="absolute left-1/2 top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 text-white">
            <Play className="h-3.5 w-3.5 fill-current" />
          </span>
          <span className="absolute inset-x-1 bottom-1 rounded bg-black/70 px-1 py-0.5 text-center text-[8px] font-medium leading-tight text-white">
            Devis écrit sous 48 h
          </span>
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-center gap-1.5">
            <span className="h-5 w-5 shrink-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600" />
            <div className="min-w-0 leading-tight">
              <p className="truncate text-[11px] font-semibold text-foreground">Votre entreprise</p>
              <p className="text-[9px] text-muted-foreground">Sponsorisé</p>
            </div>
          </div>
          <p className="mt-1.5 line-clamp-2 text-[11px] leading-snug text-foreground">
            Vous attendez un devis depuis dix jours ? Laissez vos coordonnées, nous vous rappelons aujourd&apos;hui.
          </p>
          <div className="mt-auto rounded-md border border-border bg-white p-1.5">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-purple-700">Formulaire instantané</p>
            <div className="mt-1 flex gap-1">
              <span className="h-4 flex-1 rounded bg-muted" />
              <span className="h-4 flex-1 rounded bg-muted" />
            </div>
            <span className={`${BOUTON} mt-1 py-1 text-[9px]`}>Demander un devis</span>
          </div>
        </div>
      </div>
    </Cadre>
  );
}

/** Vidéo verticale TikTok : accroche à l'écran, sous-titre, boutons du fil, bouton d'action. */
export function MiniVideoTikTok() {
  return (
    <Cadre description="Exemple de vidéo TikTok verticale sponsorisée, avec l'accroche à l'écran, un sous-titre et un bouton.">
      <div className="relative mx-auto h-full w-24 overflow-hidden rounded-xl border-[3px] border-slate-900 bg-gradient-to-b from-slate-800 via-slate-900 to-black">
        <span className="absolute left-1/2 top-[22%] h-9 w-9 -translate-x-1/2 rounded-full bg-orange-400/60 blur-md" />
        <p className="absolute left-1.5 right-5 top-[22%] text-center text-[10px] font-bold leading-tight text-white drop-shadow">
          Samedi soir, c&apos;est ça
        </p>
        <span className="absolute left-1.5 right-6 top-[46%] rounded bg-black/70 px-1 py-0.5 text-center text-[7px] leading-tight text-white">
          « Je cherche un resto »
        </span>
        <div className="absolute right-1 top-[36%] flex flex-col gap-1 text-white">
          <Heart className="h-3 w-3" />
          <MessageCircle className="h-3 w-3" />
          <Share2 className="h-3 w-3" />
        </div>
        <div className="absolute inset-x-1.5 bottom-1.5">
          <p className="truncate text-[8px] font-semibold text-white">@votre-restaurant</p>
          <p className="text-[7px] text-white/70">Sponsorisé</p>
          <span className={`${BOUTON} mt-1 py-0.5 text-[8px]`}>Réserver</span>
        </div>
      </div>
    </Cadre>
  );
}

/** Grille d'épingles Pinterest, avec une épingle sponsorisée au centre. */
export function MiniEpinglePinterest() {
  return (
    <Cadre description="Exemple de grille d'épingles Pinterest, avec une épingle sponsorisée d'une boutique au milieu des idées recherchées.">
      <div className="grid h-full grid-cols-3 gap-1.5">
        <div className="flex flex-col gap-1.5">
          <span className="h-[55%] rounded-lg bg-gradient-to-br from-stone-200 to-stone-400" />
          <span className="flex-1 rounded-lg bg-gradient-to-br from-slate-100 to-slate-300" />
        </div>
        <div className="relative flex flex-col overflow-hidden rounded-lg border border-border bg-white">
          <div className="relative flex-1 bg-gradient-to-br from-amber-100 to-amber-300">
            <span className="absolute left-1 top-1 rounded bg-white/90 px-1 text-[7px] font-semibold text-slate-700">Sponsorisé</span>
            <span className="absolute inset-x-2 bottom-2 h-1/3 rounded-sm bg-white/80" />
          </div>
          <div className="p-1.5">
            <p className="text-[9px] font-semibold leading-tight text-foreground">Meuble vasque chêne</p>
            <p className="text-[8px] text-muted-foreground">Votre boutique</p>
            <span className={`${BOUTON} mt-1 py-0.5 text-[8px]`}>Enregistrer</span>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="flex-1 rounded-lg bg-gradient-to-br from-rose-100 to-rose-300" />
          <span className="h-[40%] rounded-lg bg-gradient-to-br from-emerald-100 to-emerald-300" />
        </div>
      </div>
    </Cadre>
  );
}

/** Post sponsorisé LinkedIn et ses trois critères de ciblage. */
export function MiniPostLinkedin() {
  return (
    <Cadre description="Exemple de post sponsorisé LinkedIn d'un cabinet, avec les critères de ciblage : poste, secteur, taille d'entreprise.">
      <div className="flex h-full flex-col rounded-lg border border-border bg-white p-2">
        <div className="flex items-center gap-1.5">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-gradient-to-r from-purple-600 to-pink-600 text-[8px] font-bold text-white">
            VC
          </span>
          <div className="min-w-0 leading-tight">
            <p className="truncate text-[11px] font-semibold text-foreground">Votre cabinet</p>
            <p className="text-[9px] text-muted-foreground">Sponsorisé</p>
          </div>
        </div>
        <p className="mt-1.5 line-clamp-2 text-[11px] leading-snug text-foreground">
          Vos clients vous demandent des conseils que vous n&apos;avez pas le temps de facturer ?
        </p>
        <div className="mt-1.5 flex flex-1 items-end rounded-md bg-gradient-to-br from-slate-900 to-slate-700 p-2">
          <p className="text-[10px] font-semibold leading-tight text-white">Guide : facturer le conseil en cabinet</p>
        </div>
        <div className="mt-1.5 flex items-center justify-between gap-2">
          <ul className="flex gap-1 text-[8px] font-medium text-muted-foreground">
            <li className="rounded-full bg-muted px-1.5 py-0.5">Poste</li>
            <li className="rounded-full bg-muted px-1.5 py-0.5">Secteur</li>
            <li className="rounded-full bg-muted px-1.5 py-0.5">Taille</li>
          </ul>
          <span className={`${BOUTON} shrink-0 px-2 py-1 text-[8px]`}>Demander un échange</span>
        </div>
      </div>
    </Cadre>
  );
}
