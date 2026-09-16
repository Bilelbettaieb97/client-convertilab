/**
 * Adapté de Frontend Forever :
 * https://frontendforever.com/frontendforever/smooth-center-expanding-underline-hover-effect,
 * licence MIT.
 *
 * Adaptation : le modèle anime `width` et `left` (deux propriétés de mise en
 * page, recalcul à chaque image) ; ici le trait est toujours en pleine largeur
 * et seul `transform: scaleX()` bouge (composé par le GPU). Trait 2 px, arrondi,
 * violet uni `bg-primary` (le dégradé de l'en-tête reste réservé au bouton
 * Calendly), 300 ms ease-out, déclenché au survol et au focus clavier ; la page
 * courante le garde ouvert (`SOULIGNEMENT_MENU_ACTIF`). Les déclencheurs de
 * menus ajoutent leur propre condition (`data-[state=open]:after:scale-x-100`,
 * `group-hover/outils:after:scale-x-100`...). Aucun composant : ces chaînes se
 * posent sur les liens existants de la barre desktop.
 *
 * Deux familles de soulignement seulement sur le site : ce trait centré 2 px
 * pour le menu, et le filet 1 px `FILET_LIEN_TEXTE` (variante maison du même
 * principe, origine à gauche puis à droite) pour les liens texte.
 */

/** Trait centré 2 px violet sous une entrée de menu (barre desktop). */
export const SOULIGNEMENT_MENU =
  "relative after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-primary after:origin-center after:scale-x-0 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none";

/** Page courante : trait ouvert en permanence. */
export const SOULIGNEMENT_MENU_ACTIF = "after:scale-x-100";

/**
 * Filet 1 px couleur du texte sous un lien texte : se dessine de gauche à
 * droite au survol ou au focus clavier, se retire vers la droite. `bottom`
 * réglé pour poser le filet 2 px sous un texte `text-sm` centré dans une cible
 * de 44 px ; l'ajuster (`after:bottom-3`...) pour une autre taille.
 */
export const FILET_LIEN_TEXTE =
  "relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-[0.6rem] after:h-px after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:origin-left hover:after:scale-x-100 focus-visible:after:origin-left focus-visible:after:scale-x-100 motion-reduce:after:transition-none";
