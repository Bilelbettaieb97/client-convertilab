import { Check } from "lucide-react";
import { BoutonLien, Conteneur, Paragraphes, Surtitre, type PoleLienProps } from "./pole-ui";

export interface PolePrixLigne {
  /** Ex. « Site vitrine ». */
  libelle: string;
  /** Ex. « 890 € » ou « sur devis ». Vient de PRICING ou de poles.ts. */
  valeur: string;
  /** Ex. « ou 39 €/mois sur 24 mois, paiement étalé, pas d'abonnement ». */
  detail?: string;
}

export interface PolePrixProps {
  id?: string;
  surtitre?: string;
  /** H2 de la section. */
  titre: string;
  intro?: string | string[];
  /** Grille de prix, transparente. */
  lignes: PolePrixLigne[];
  /** Titre de la colonne engagement (ex. « Ce que nous nous engageons à faire »). */
  engagementsTitre?: string;
  /** Engagements concrets, jamais de garantie « satisfait ou remboursé ». */
  engagements?: string[];
  /** Bouton de sortie (devis, estimation, contact). */
  lien?: PoleLienProps;
  /** Précision en petit (« Prix HT, devis écrit avant tout engagement »). */
  note?: string;
}

export default function PolePrix({
  id,
  surtitre,
  titre,
  intro,
  lignes,
  engagementsTitre,
  engagements,
  lien,
  note,
}: PolePrixProps) {
  const aEngagements = engagements && engagements.length > 0;
  return (
    <section id={id} className="bg-background py-16 sm:py-20">
      <Conteneur>
        <div className="mx-auto max-w-3xl text-center">
          {surtitre && <Surtitre>{surtitre}</Surtitre>}
          <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">{titre}</h2>
          {intro && (
            <div className="mt-4 space-y-3 text-lg">
              <Paragraphes texte={intro} />
            </div>
          )}
        </div>
        <div className={aEngagements ? "mt-10 grid gap-6 lg:grid-cols-5" : "mx-auto mt-10 max-w-3xl"}>
          <dl className={aEngagements ? "divide-y divide-border rounded-2xl border border-border bg-card lg:col-span-3" : "divide-y divide-border rounded-2xl border border-border bg-card"}>
            {lignes.map((ligne) => (
              <div key={ligne.libelle} className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <dt className="font-medium text-foreground">{ligne.libelle}</dt>
                <dd className="sm:text-right">
                  <span className="text-lg font-bold text-foreground">{ligne.valeur}</span>
                  {ligne.detail && <span className="block text-sm text-muted-foreground">{ligne.detail}</span>}
                </dd>
              </div>
            ))}
          </dl>
          {aEngagements && (
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 lg:col-span-2">
              {engagementsTitre && <h3 className="font-semibold text-foreground">{engagementsTitre}</h3>}
              <ul className={engagementsTitre ? "mt-4 space-y-3" : "space-y-3"}>
                {engagements.map((e) => (
                  <li key={e} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {(lien || note) && (
          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-3 text-center">
            {lien && <BoutonLien {...lien} variante="primaire" />}
            {note && <p className="text-sm text-muted-foreground">{note}</p>}
          </div>
        )}
      </Conteneur>
    </section>
  );
}
