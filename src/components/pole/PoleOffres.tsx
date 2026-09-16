import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { LienDiscret, type PoleLienProps } from "./pole-ui";

export interface PoleOffre {
  titre: string;
  description: string;
  /** Prix affiché tel quel (« 890 € », « sur devis »). Vient de PRICING ou de poles.ts. */
  prix?: string;
  /** Ex. « ou 39 €/mois sur 24 mois, paiement étalé ». */
  prixDetail?: string;
  /** Points inclus, concrets. */
  points: string[];
  /** Lien vers la sous-page quand elle existe, avec une ancre descriptive. */
  lien?: PoleLienProps;
  /** Met la carte en avant (bordure colorée). */
  miseEnAvant?: boolean;
}

export interface PoleOffresProps {
  offres: PoleOffre[];
  colonnes?: 2 | 3;
}

export default function PoleOffres({ offres, colonnes = 3 }: PoleOffresProps) {
  return (
    <ul className={cn("grid gap-6", colonnes === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3")}>
      {offres.map((offre) => (
        <li
          key={offre.titre}
          className={cn(
            "flex flex-col rounded-2xl border bg-card p-6",
            offre.miseEnAvant ? "border-primary shadow-md" : "border-border"
          )}
        >
          <h3 className="text-xl font-semibold text-foreground">{offre.titre}</h3>
          <p className="mt-2 text-muted-foreground">{offre.description}</p>
          {offre.prix && (
            <p className="mt-4">
              <span className="text-2xl font-bold text-foreground">{offre.prix}</span>
              {offre.prixDetail && <span className="block text-sm text-muted-foreground">{offre.prixDetail}</span>}
            </p>
          )}
          {offre.points.length > 0 && (
            <ul className="mt-4 space-y-2">
              {offre.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
          {offre.lien && (
            <div className="mt-auto pt-6">
              <LienDiscret {...offre.lien} className="text-sm font-semibold" />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
