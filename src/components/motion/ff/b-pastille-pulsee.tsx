/**
 * Adapté de Frontend Forever :
 * https://frontendforever.com/frontendforever/interactive-location-card-with-pulsing-map-pin,
 * licence MIT.
 *
 * Adaptation : seul le point pulsé du modèle est repris (ni carte, ni nuages,
 * ni avatars). L'anneau utilise la keyframe `ping` native de Tailwind ralentie
 * à 3 s (aucune keyframe ajoutée dans globals.css), en `bg-primary` (violet de
 * la charte, lisible sur slate-950), alpha 50 % au maximum. Avec
 * prefers-reduced-motion : anneau fixe et pâle, aucun mouvement. Composant
 * serveur, décoratif (`aria-hidden`) : à poser devant un libellé de lieu.
 * Une seule instance par écran, jamais à côté d'un autre mouvement permanent.
 */
import { cn } from "@/lib/utils";

export interface PastillePulseeProps {
  className?: string;
}

export function PastillePulsee({ className }: PastillePulseeProps) {
  return (
    <span aria-hidden="true" className={cn("relative inline-flex h-2 w-2 shrink-0", className)}>
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/50 [animation-duration:3s] motion-reduce:animate-none motion-reduce:scale-[1.8] motion-reduce:opacity-30" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
    </span>
  );
}

export default PastillePulsee;
