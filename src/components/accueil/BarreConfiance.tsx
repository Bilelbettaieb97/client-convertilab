import { ExternalLink } from "lucide-react";
import { caseStudies, FEATURED_ORDER, LIVE_SITES } from "@/data/case-studies";
import { Conteneur } from "@/components/pole/pole-ui";
import { Marquee } from "@/components/motion/marquee";

/**
 * Les dix clients dont le site est consultable (LIVE_SITES) : d'abord l'ordre de
 * mise en avant (FEATURED_ORDER, JSM Jardinage en tête), puis les autres.
 */
const CLIENTS_EN_LIGNE = [...new Set([...FEATURED_ORDER, ...caseStudies.map((c) => c.slug)])]
  .filter((slug) => LIVE_SITES[slug])
  .flatMap((slug) => {
    const cs = caseStudies.find((c) => c.slug === slug);
    return cs ? [{ nom: cs.client, href: LIVE_SITES[slug], metier: cs.sector.split(" / ")[0] }] : [];
  });

/**
 * Barre de confiance sous le hero : les dix sites clients en défilement
 * continu (noms cliquables, pause au survol, rangée statique avec animations
 * réduites). Les trois chiffres ne sont pas répétés ici : ils sont dans le
 * hero, juste au-dessus.
 */
export default function BarreConfiance() {
  return (
    <section aria-label="Confiance et clients" className="relative bg-background py-8 sm:py-10">
      {/* Deux filets qui s'effacent aux extrémités, à la place de border-y. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />
      <Conteneur>
        <p className="text-center text-sm text-muted-foreground">Des sites que vous pouvez ouvrir maintenant :</p>
      </Conteneur>

      {/* Masque de fondu sur les bords : le défilement entre et sort en douceur.
          La pause au survol et au focus clavier est gérée par Marquee (pauseOnHover).
          Les pastilles utilisent un groupe nommé (group/pastille) : l'enveloppe Marquee
          est elle-même `group`, un `group-hover` nu réagirait au survol de toute la rangée. */}
      <div className="mt-3 overflow-hidden px-4 motion-safe:px-0 motion-safe:[mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <Marquee pauseOnHover repeat={3} duration={55} gap="0.75rem">
          {CLIENTS_EN_LIGNE.map((client) => (
            <a
              key={client.href}
              href={client.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/pastille inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_1px_2px_rgba(15,23,42,0.04),0_20px_40px_-24px_hsl(270_70%_45%_/_0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              {client.nom}
              <span className="text-xs font-normal text-muted-foreground transition-colors duration-300 group-hover/pastille:text-primary-texte motion-reduce:transition-none">
                {client.metier}
              </span>
              <ExternalLink
                className="h-3.5 w-3.5 text-muted-foreground transition-colors duration-300 group-hover/pastille:text-primary motion-reduce:transition-none"
                aria-hidden="true"
              />
              <span className="sr-only"> (ouvre dans un nouvel onglet)</span>
            </a>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
