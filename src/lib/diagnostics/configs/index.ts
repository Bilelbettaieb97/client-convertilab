import type { Diagnostic } from "../types";
import { DIAGNOSTICS_SITES_WEB } from "./sites-web";
import { DIAGNOSTICS_PUBLICITE } from "./publicite";
import { DIAGNOSTICS_SEO } from "./seo";
import { DIAGNOSTICS_CRM } from "./crm";

/** Tous les diagnostics interactifs du site, un fichier par pôle. */
export const DIAGNOSTICS: readonly Diagnostic[] = [
  ...DIAGNOSTICS_SITES_WEB,
  ...DIAGNOSTICS_PUBLICITE,
  ...DIAGNOSTICS_SEO,
  ...DIAGNOSTICS_CRM,
];

const PAR_SLUG = new Map(DIAGNOSTICS.map((d) => [d.slug, d]));
if (PAR_SLUG.size !== DIAGNOSTICS.length) {
  throw new Error("Diagnostics en doublon : " + DIAGNOSTICS.map((d) => d.slug).filter((s, i, a) => a.indexOf(s) !== i).join(", "));
}

export function getDiagnostic(slug: string): Diagnostic | undefined {
  return PAR_SLUG.get(slug);
}
