import Image from "next/image";
import { CadreNavigateur } from "@/components/motion/ff/a-cadre-navigateur";
import { cn } from "@/lib/utils";

export interface CaptureSiteProps {
  /** Domaine réel affiché dans la barre d'adresse : un site client consultable (LIVE_SITES). */
  domaine: string;
  /** Capture de public/images/portfolio. */
  src: string;
  alt: string;
  width: number;
  height: number;
  /**
   * « pleine-page » : capture plus haute que le cadre, posée en haut et coupée en
   * bas comme dans une vraie fenêtre (fichiers gallery-*-fullpage). « couvrir » :
   * capture au format écran (portfolio-*-hero), qui remplit le cadre, alignée en haut.
   */
  mode?: "pleine-page" | "couvrir";
  /** Les captures gallery-*-fullpage ont une marge blanche (3,3 % en largeur, 2,55 % en hauteur) : on la rogne. */
  rogner?: boolean;
  legende?: string;
  /** Classe du cadre : lui donner une hauteur (aspect-[4/3], h-[420px]...). */
  className?: string;
  priority?: boolean;
  sizes?: string;
}

/**
 * Vraie capture d'un site client dans un cadre de navigateur (barre d'adresse
 * avec le domaine réel). Composant serveur : aucune donnée, aucun chiffre,
 * juste un site livré que le visiteur peut ouvrir.
 */
export function CaptureSite({
  domaine,
  src,
  alt,
  width,
  height,
  mode = "pleine-page",
  rogner = false,
  legende,
  className,
  priority = false,
  sizes = "(min-width: 1024px) 480px, 100vw",
}: CaptureSiteProps) {
  const classesImage =
    mode === "couvrir"
      ? "absolute inset-0 h-full w-full object-cover object-top"
      : rogner
        ? "absolute left-1/2 top-0 h-auto w-[106.8%] max-w-none -translate-x-1/2 -translate-y-[2.55%]"
        : "absolute inset-x-0 top-0 h-auto w-full";

  return (
    <div className={cn("w-full", className)}>
      <CadreNavigateur domaine={domaine} legende={legende} className="h-full">
        <Image src={src} alt={alt} width={width} height={height} priority={priority} sizes={sizes} className={classesImage} />
      </CadreNavigateur>
    </div>
  );
}

export default CaptureSite;
