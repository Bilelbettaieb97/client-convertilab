import type { Ressource } from "../types";
import { RESSOURCES_SITES_WEB } from "./sites-web";
import { RESSOURCES_PUBLICITE } from "./publicite";
import { RESSOURCES_SEO } from "./seo";
import { RESSOURCES_CRM } from "./crm";

/** Toutes les ressources gratuites du site, un fichier par pôle. */
export const RESSOURCES: readonly Ressource[] = [
  ...RESSOURCES_SITES_WEB,
  ...RESSOURCES_PUBLICITE,
  ...RESSOURCES_SEO,
  ...RESSOURCES_CRM,
];

const PAR_SLUG = new Map(RESSOURCES.map((r) => [r.slug, r]));

if (PAR_SLUG.size !== RESSOURCES.length) {
  const vus = new Set<string>();
  const doublons = RESSOURCES.map((r) => r.slug).filter((s) => (vus.has(s) ? true : (vus.add(s), false)));
  throw new Error(`Ressources en doublon : ${doublons.join(", ")}`);
}

export function getRessource(slug: string): Ressource | undefined {
  return PAR_SLUG.get(slug);
}
