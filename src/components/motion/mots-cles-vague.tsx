import { Fragment, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface MotsClesVagueProps {
  /** Phrase complète, rendue caractère pour caractère (rien n'est ajouté ni retiré). */
  texte: string;
  /** Mots à colorer, comparés mot entier (« site » ne colore pas « visite »). */
  mots: readonly string[];
  /** Durée d'un cycle complet du dégradé sur un mot, en secondes. */
  duree?: number;
  /** Retard d'un mot sur le précédent, en secondes : la couleur parcourt les mots dans l'ordre. */
  decalage?: number;
  className?: string;
}

const echapper = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Colore les mots clés d'une phrase avec le dégradé de la marque et fait
 * défiler ce dégradé de gauche à droite, d'un mot au suivant (CSS pur :
 * `.motion-vague` + `animate-motion-vague` dans globals.css, aucun JavaScript
 * côté client). Le texte rendu est strictement `texte` : le H1 reste identique
 * pour Google, les lecteurs d'écran et la sélection. Avec « réduire les
 * animations », le dégradé reste, figé.
 *
 * Les retards sont négatifs (`k × decalage − duree`) : chaque mot démarre déjà
 * dans le cycle, en retard de `decalage` sur le précédent, sans attente au
 * chargement.
 */
export function MotsClesVague({ texte, mots, duree = 6, decalage = 0.6, className }: MotsClesVagueProps) {
  // Frontières de mot compatibles avec les accents (\b ne connaît pas « é »).
  const motif = new RegExp(`(?<![\\p{L}\\p{N}])(${mots.map(echapper).join("|")})(?![\\p{L}\\p{N}])`, "gu");
  const morceaux = texte.split(motif);
  let rang = 0;
  return (
    <>
      {morceaux.map((m, i) => {
        if (!mots.includes(m)) return <Fragment key={i}>{m}</Fragment>;
        const style: CSSProperties = { animationDelay: `${(rang++ * decalage - duree).toFixed(2)}s` };
        return (
          <span key={i} className={cn("motion-vague animate-motion-vague", className)} style={style}>
            {m}
          </span>
        );
      })}
    </>
  );
}

export default MotsClesVague;
