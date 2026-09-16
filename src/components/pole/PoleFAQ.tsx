import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/faq-schema";
import { BoutonLien, Conteneur, Paragraphes, Surtitre, type PoleLienProps } from "./pole-ui";

export interface PoleFAQProps {
  id?: string;
  surtitre?: string;
  /** H2 de la section. */
  titre: string;
  intro?: string | string[];
  /** La même liste alimente faqPageSchema() dans page.tsx. */
  items: FaqItem[];
  /** Vrai lien de sortie (ex. /contact), jamais un bouton mort. */
  lien?: PoleLienProps;
}

/**
 * Accordéon natif <details>/<summary> : le texte des réponses est présent
 * dans le HTML rendu côté serveur, sans JavaScript ni Radix.
 */
export default function PoleFAQ({ id, surtitre, titre, intro, items, lien }: PoleFAQProps) {
  return (
    <section id={id} className="bg-muted/30 py-16 sm:py-20">
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
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {items.map((item) => (
            <details key={item.q} className="group rounded-2xl border border-border bg-card open:shadow-sm">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-6 py-4 text-left font-medium text-foreground marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
                <h3 className="text-pretty text-base font-medium sm:text-lg">{item.q}</h3>
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-muted-foreground transition-transform motion-reduce:transition-none group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="px-6 pb-5 leading-relaxed text-muted-foreground">
                <Paragraphes texte={item.a} />
              </div>
            </details>
          ))}
        </div>
        {lien && (
          <div className="mt-10 text-center">
            <BoutonLien {...lien} variante="secondaire" />
          </div>
        )}
      </Conteneur>
    </section>
  );
}
