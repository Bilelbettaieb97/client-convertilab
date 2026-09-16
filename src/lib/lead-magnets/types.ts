import type { PoleSlug } from "@/data/poles";

/** Forme de la ressource : décide de la présentation des points dans le PDF et sur la page. */
export type FormatRessource = "checklist" | "guide" | "modele" | "plan";

export const FORMAT_LIBELLES: Record<FormatRessource, string> = {
  checklist: "Checklist",
  guide: "Guide",
  modele: "Modèle à remplir",
  plan: "Plan d'action",
};

export interface SectionRessource {
  titre: string;
  /** Une ou deux phrases de contexte, facultatives. */
  intro?: string;
  /** Points de la section : cases à cocher (checklist), étapes (plan) ou puces (guide, modèle). */
  points: string[];
}

/**
 * Une ressource gratuite offerte contre une adresse email, propre à une page
 * de service. Le contenu vit ici (une seule source) : la page en montre
 * l'aperçu, le PDF en reprend l'intégralité, l'email l'annonce.
 *
 * Règles d'écriture : concret, actionnable, sans chiffre de résultat inventé,
 * sans garantie, sans tiret long, vouvoiement. Une ressource doit tenir en
 * quatre à huit pages et être utile même sans jamais rappeler l'agence.
 */
export interface Ressource {
  /** Identifiant stable, en kebab-case, envoyé à /api/lead-magnet. */
  slug: string;
  /** Titre complet, ex. « Checklist des 25 points d'un site vitrine qui apporte des demandes ». */
  titre: string;
  /** Une phrase : ce que la personne y gagne. */
  accroche: string;
  format: FormatRessource;
  /** Trois ou quatre puces courtes : ce que l'on reçoit (affichées sur la page et dans l'email). */
  apercu: string[];
  /** Contenu intégral, dans l'ordre de lecture. */
  sections: SectionRessource[];
  /** Phrase de fin du PDF, avant l'appel (« Envie qu'on le fasse avec vous ? »). */
  conclusion?: string;
  /** Pôle et page qui proposent la ressource (pour Pipedrive et le suivi). */
  pole: PoleSlug;
  page: string;
}
