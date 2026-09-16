/**
 * Hauteur fixe du schéma « vos outils reliés par Claude », partagée par le
 * composant réel (OutilsRelies) et son fallback (OutilsReliesLazy) pour
 * éviter tout décalage de mise en page. Fichier séparé pour que le wrapper
 * dynamique n'importe pas statiquement le composant qu'il charge à la demande.
 */
export const HAUTEUR_SCHEMA = "h-[400px] sm:h-[380px]";
