/**
 * Adapté de Frontend Forever :
 * https://frontendforever.com/frontendforever/button-with-shimmer-sliding-hover-effect,
 * licence MIT.
 *
 * Adaptation : le modèle est un bouton bleu à bordure 2 px, ombre noire et
 * variables de thème clair/sombre ; on n'en garde que le principe, un reflet
 * blanc en biais (pseudo-élément `before`) qui traverse le bouton une seule
 * fois au survol ou au focus clavier. Le fond (dégradé violet vers rose de la
 * charte), la taille et la cible tactile (min-h-11) du bouton d'accueil ne
 * changent pas ; l'ombre, la bordure et les variables du modèle sont retirées.
 *
 * Un seul passage : la durée vaut 0 au repos et 500 ms au survol, si bien que
 * le reflet revient à sa position de départ sans transition (hors du bouton,
 * donc invisible) quand la souris sort ; aucune boucle. Sous
 * `prefers-reduced-motion` et sur écran tactile (`hover: none`), le reflet
 * n'existe pas. Le bouton porte `relative isolate overflow-hidden` : le
 * `-z-10` du reflet le place au-dessus du fond mais sous le libellé.
 *
 * Ce module n'exporte que des chaînes Tailwind (aucun composant) : elles se
 * fusionnent dans `BoutonLien` (pole-ui), `StickyCtaBar` et le bouton Calendly
 * de la navigation, pour un seul motif de bouton primaire sur tout le site.
 */

/** Reflet en biais, un passage au survol ou au focus clavier. À poser avec `group`. */
export const REFLET_BOUTON =
  "relative isolate overflow-hidden active:scale-[0.98] before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:-z-10 before:w-full before:-translate-x-full before:-skew-x-12 before:bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.28)_50%,transparent_70%)] before:transition-transform before:duration-0 before:ease-out hover:before:translate-x-full hover:before:duration-500 focus-visible:before:translate-x-full focus-visible:before:duration-500 motion-reduce:before:hidden [@media(hover:none)]:before:hidden";

/** Flèche interne (`ArrowRight`) : glisse de 2 px vers la droite au survol du `group`. */
export const FLECHE_GLISSE =
  "transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none";

/** Flèche de lien externe (`ExternalLink`) : diagonale haut-droite, « s'ouvre ailleurs ». */
export const FLECHE_EXTERNE_GLISSE =
  "transition-transform duration-300 group-hover:translate-x-px group-hover:-translate-y-px motion-reduce:transition-none";

/** Ombre de survol unique de la charte pour un bouton primaire (violet, portée courte). */
export const OMBRE_BOUTON_PRIMAIRE =
  "shadow-md hover:shadow-[0_12px_24px_-12px_hsl(270_70%_45%_/_0.45)]";
