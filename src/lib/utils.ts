import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** « landing page 490 €, ... » devient « Landing page 490 €, ... » (prix de poles.ts affichés en début de ligne). */
export function majuscule(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
