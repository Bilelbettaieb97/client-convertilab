import { CHIFFRES_COMMUNS } from "@/data/poles";
import { SITE } from "@/lib/constants";

export interface ChiffreAccueil {
  /** Valeur affichée telle quelle (« 150+ », « 4,9/5 », « 2 semaines »). */
  valeur: string;
  libelle: string;
  /** Partie numérique, pour le compteur animé (NumberTicker). */
  nombre: number;
  decimales: number;
  /** Ce qui suit le nombre (« + », « /5 », « semaines »). */
  suffixe: string;
}

/**
 * Les trois chiffres de l'accueil, répétés dans le hero (compteurs animés)
 * et la barre de confiance : les deux chiffres communs (src/data/poles.ts,
 * seul chiffre de clients autorisé : « 150+ clients accompagnés ») plus le
 * délai de livraison d'un site.
 */
export const CHIFFRES_ACCUEIL: readonly ChiffreAccueil[] = [
  { ...CHIFFRES_COMMUNS[0], nombre: 150, decimales: 0, suffixe: "+" },
  { ...CHIFFRES_COMMUNS[1], nombre: Number(SITE.reviews.rating), decimales: 1, suffixe: "/5" },
  { valeur: "2 semaines", libelle: "pour livrer votre site", nombre: 2, decimales: 0, suffixe: " semaines" },
];
