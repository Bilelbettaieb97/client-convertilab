/**
 * Balisage UTM des liens sortants des emails.
 *
 * Sans ces paramètres, un prospect qui clique dans une relance arrive dans GA4
 * en direct ou en referral, mélangé au reste : impossible de savoir quelle série
 * — ni quel email de la série — ramène réellement des rendez-vous.
 *
 * `utm_source=email` est ce qui déclenche le canal « Email » dans la
 * classification par défaut de GA4 (la règle est un OU sur la source OU le
 * medium), quel que soit le medium retenu ensuite.
 *
 * Une URL portant déjà un `utm_source` est laissée intacte : un lien balisé à la
 * main pour une campagne publicitaire garde sa propre attribution.
 */

/** Seuls NOS domaines sont balisés : jamais le site d'un client, ni Trustpilot. */
const DOMAINES_SUIVIS = [
  "convertilab.com",
  "convertilab.fr",
  "calendly.com",
];

export type Utm = {
  /** relance (série email) · rapport (email d'outil) · workflow (funnel Meta) */
  medium: string;
  /** la série ou l'outil concerné, en minuscules-tirets */
  campaign: string;
  /** l'email précis dans la séquence : j1, j3, j7… */
  content?: string;
};

/** "SEO Check" → "seo-check", "Devis - site-vitrine" → "devis-site-vitrine". */
export function slug(valeur: string): string {
  return valeur
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function estSuivi(hote: string): boolean {
  const h = hote.toLowerCase();
  return DOMAINES_SUIVIS.some((d) => h === d || h.endsWith(`.${d}`));
}

/**
 * Ajoute les paramètres à une URL. Ne touche ni aux mailto:, ni aux tel:, ni aux
 * ancres, ni aux domaines hors liste. Un lien déjà balisé est laissé tel quel :
 * une campagne posée à la main doit rester prioritaire.
 */
export function ajouterUtm(url: string, utm: Utm): string {
  if (!url || !/^https?:\/\//i.test(url)) return url;

  let u: URL;
  try {
    u = new URL(url);
  } catch {
    return url;
  }

  if (!estSuivi(u.hostname)) return url;
  if (u.searchParams.has("utm_source")) return url;

  u.searchParams.set("utm_source", "email");
  u.searchParams.set("utm_medium", utm.medium);
  u.searchParams.set("utm_campaign", utm.campaign);
  if (utm.content) u.searchParams.set("utm_content", utm.content);

  return u.toString();
}

/**
 * Balise tous les href d'un fragment HTML.
 *
 * Le séparateur est écrit `&amp;` : dans un attribut HTML, un `&` nu est une
 * référence d'entité mal formée. Les clients mail le décodent avant d'ouvrir
 * l'URL, le lien reçu est donc bien `?utm_source=email&utm_medium=…`.
 */
export function baliserLiens(html: string, utm: Utm): string {
  return html.replace(/href="([^"]*)"/gi, (entier, lien: string) => {
    const propre = lien.replace(/&amp;/g, "&");
    const balise = ajouterUtm(propre, utm);
    if (balise === propre) return entier;
    return `href="${balise.replace(/&/g, "&amp;")}"`;
  });
}
