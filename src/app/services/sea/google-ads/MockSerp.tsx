import { MapPin, Phone, Search, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Maquette d'une page de résultats Google : barre de recherche, annonce
 * « Sponsorisé » en tête avec ses extensions (appel, itinéraire, prix, liens
 * annexes), puis deux résultats naturels grisés qui montrent où se place
 * l'annonce. CSS pur, rendu côté serveur, entreprise fictive : le badge
 * « Exemple » et la légende sont obligatoires, aucun chiffre de résultat,
 * aucun logo reproduit (le nom du moteur est écrit en texte).
 *
 * `compact` (aside du hero, colonne de 448 px à côté d'un texte de 700 à
 * 780 px) : mêmes textes, moins de lignes. Onglets et résultats naturels
 * masqués, description sur deux lignes (Google coupe aussi les siennes),
 * deux liens annexes et trois réglages sur une ligne, pour tenir entre 340
 * et 520 px de haut.
 */

const LIENS_ANNEXES = [
  { titre: "Nos tarifs", texte: "Dépannage et chauffe-eau" },
  { titre: "Avis clients", texte: "Visibles sur Google" },
  { titre: "Réalisations", texte: "Photos avant / après" },
  { titre: "Demander un rappel", texte: "Formulaire en 30 secondes" },
];

const REGLAGES = ["Mot clé exact", "Extension d'appel", "Zone : 15 km", "Horaires d'ouverture"];

export default function MockSerp({ className, compact = false }: { className?: string; compact?: boolean }) {
  const liensAnnexes = compact ? LIENS_ANNEXES.slice(0, 2) : LIENS_ANNEXES;
  const reglages = compact ? REGLAGES.slice(0, 3) : REGLAGES;
  return (
    <figure className={cn("w-full max-w-md", className)}>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-24px_rgba(15,23,42,0.2)]">
        {/* Barre du moteur de recherche */}
        <div className="border-b border-border/60 bg-slate-50 px-4 pb-3 pt-4 sm:px-5">
          <div className="flex items-start justify-between gap-3">
            <p className="text-sm font-semibold text-foreground">Résultats Google, tels que vos clients les voient</p>
            <span className="shrink-0 rounded-full border border-border bg-white px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-slate-700">
              Exemple
            </span>
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm text-foreground shadow-sm">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            <span>plombier rueil-malmaison</span>
          </div>
          {!compact && (
            <ul className="mt-3 flex gap-4 text-xs text-muted-foreground" aria-hidden="true">
              <li className="border-b-2 border-primary pb-1 font-medium text-foreground">Tous</li>
              <li>Maps</li>
              <li>Images</li>
              <li>Actualités</li>
            </ul>
          )}
        </div>

        <div className={cn("p-4", !compact && "sm:p-5")}>
          {/* Annonce sponsorisée en première position */}
          <div className="rounded-xl border border-primary/25 bg-gradient-to-br from-purple-50/70 to-pink-50/40 p-4">
            <p className="text-xs font-semibold text-foreground">Sponsorisé</p>
            <div className="mt-2 flex items-center gap-2">
              <span
                className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-xs font-bold text-white"
                aria-hidden="true"
              >
                A
              </span>
              <div className="min-w-0 text-xs leading-tight">
                <p className="font-medium text-foreground">Artisan plombier (exemple)</p>
                <p className="truncate text-muted-foreground">votre-site.fr › depannage</p>
              </div>
            </div>
            <p className="mt-2 text-base font-semibold leading-snug text-primary-texte">
              Plombier à Rueil-Malmaison : devis écrit avant travaux
            </p>
            <p className={cn("mt-1 text-sm leading-relaxed text-muted-foreground", compact && "line-clamp-2")}>
              Fuite, chauffe-eau, débouchage. Artisan local, devis gratuit, rappel dans l&apos;heure. Appelez ou demandez un
              rappel en ligne.
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-primary-texte">
              <li className="inline-flex items-center gap-1">
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                Appeler
              </li>
              <li className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                Itinéraire
              </li>
              <li className="inline-flex items-center gap-1">
                <Tag className="h-3.5 w-3.5" aria-hidden="true" />
                Dès 89 € (exemple)
              </li>
            </ul>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-primary/15 pt-3" aria-label="Liens annexes de l'annonce">
              {liensAnnexes.map((l) => (
                <li key={l.titre} className="min-w-0">
                  <p className="truncate text-xs font-medium text-primary-texte">{l.titre}</p>
                  <p className="truncate text-[11px] text-muted-foreground">{l.texte}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Résultats naturels, grisés : l'annonce s'affiche au-dessus */}
          {!compact && (
            <>
              <p className="mt-4 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">Résultats naturels, en dessous</p>
              <ul className="mt-2 space-y-3" aria-hidden="true">
                {[0, 1].map((i) => (
                  <li key={i} className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="h-5 w-5 rounded-full bg-muted" />
                      <span className="h-2 w-28 rounded-full bg-muted" />
                    </div>
                    <span className="block h-2.5 w-4/5 rounded-full bg-muted" />
                    <span className="block h-2 w-full rounded-full bg-muted/70" />
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Ce que nous réglons derrière l'annonce */}
          <ul className={cn("flex flex-wrap gap-2", compact ? "mt-3" : "mt-4")} aria-label="Réglages derrière l'annonce">
            {reglages.map((r) => (
              <li key={r} className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground">
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted-foreground">
        Exemple de page de résultats avec une entreprise fictive : l&apos;annonce, ses extensions et les réglages que nous
        rédigeons pour vous, pas un résultat client.
      </figcaption>
    </figure>
  );
}
