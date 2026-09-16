import { cn } from "@/lib/utils";
import { AvantApres } from "./AvantApres";
import { CaptureSite } from "./CaptureSite";
import { MockEspaceClient } from "./MockEspaceClient";
import { MockLanding } from "./MockLanding";

export type TypeOffre = "vitrine" | "landing" | "refonte" | "ecommerce" | "application";

/** Type d'offre déduit du chemin de la sous-page (poles.ts). */
export function typeOffre(href: string): TypeOffre {
  if (href.endsWith("/site-vitrine")) return "vitrine";
  if (href.endsWith("/landing-page")) return "landing";
  if (href.endsWith("/refonte-site")) return "refonte";
  if (href.endsWith("/site-ecommerce")) return "ecommerce";
  return "application";
}

/**
 * Miniature d'une formule sur la page du pôle : vraie capture de site client
 * (vitrine, e-commerce) ou maquette CSS (landing page, avant / après, espace
 * client). Cadre 16/10, le bas est coupé. Composant serveur.
 */
export function MiniatureOffre({ type, className }: { type: TypeOffre; className?: string }) {
  const cadre = cn("relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-muted/40", className);

  switch (type) {
    case "vitrine":
      return (
        <div className={cadre}>
          <CaptureSite
            domaine="monsieurarancini.fr"
            src="/images/portfolio/gallery-arancini-fullpage-1.webp"
            alt="Page d'accueil du site vitrine de Monsieur Arancini, livré par l'agence"
            width={1000}
            height={1295}
            rogner
            sizes="(min-width: 1024px) 400px, 100vw"
            className="h-full"
          />
        </div>
      );
    case "ecommerce":
      return (
        <div className={cadre}>
          <CaptureSite
            domaine="artdesroses.fr"
            src="/images/portfolio/gallery-artdesroses-fullpage-1.webp"
            alt="Page d'accueil de la boutique en ligne Art des Roses, livrée par l'agence"
            width={1000}
            height={1295}
            rogner
            sizes="(min-width: 1024px) 600px, 100vw"
            className="h-full"
          />
        </div>
      );
    case "landing":
      return (
        <div className={cn(cadre, "bg-gradient-to-br from-purple-50 to-pink-50 p-3")}>
          <MockLanding compact className="mx-auto max-w-[280px]" />
        </div>
      );
    case "refonte":
      return (
        <div className={cn(cadre, "bg-gradient-to-br from-purple-50 to-pink-50 p-3")}>
          <AvantApres compact />
        </div>
      );
    case "application":
      return (
        <div className={cn(cadre, "bg-gradient-to-br from-purple-50 to-pink-50 p-3")}>
          <MockEspaceClient compact />
        </div>
      );
  }
}

export default MiniatureOffre;
