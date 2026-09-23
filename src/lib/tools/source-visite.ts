/**
 * D'où vient la personne qui remplit le formulaire.
 *
 * Constaté le 23/09/2026, au premier lead arrivé pendant la campagne Meta :
 * la notification donnait le nom, le score et le domaine, mais rien sur
 * l'origine. Impossible de dire si la demande venait de la publicité qu'on
 * paie ou du référencement naturel, alors que c'est la seule question qui
 * compte quand une campagne tourne.
 *
 * On lit d'abord les paramètres UTM de l'adresse, posés par la publicité.
 * S'ils manquent, on retombe sur le site d'où vient le clic. S'il n'y a ni
 * l'un ni l'autre, c'est un accès direct ou un favori.
 */
export function sourceVisite(): string {
  if (typeof window === "undefined") return "inconnue";
  try {
    const p = new URLSearchParams(window.location.search);
    const src = p.get("utm_source");
    if (src) {
      const campagne = p.get("utm_campaign");
      const annonce = p.get("utm_content");
      return [src, campagne, annonce].filter(Boolean).join(" · ").slice(0, 200);
    }
    const ref = document.referrer;
    if (!ref) return "direct";
    const hote = new URL(ref).hostname.replace(/^www\./, "");
    if (hote.endsWith("convertilab.com")) return "navigation interne";
    if (/google\./.test(hote)) return "Google (naturel)";
    if (/bing\.|duckduckgo|ecosia|qwant/.test(hote)) return `recherche ${hote}`;
    return hote.slice(0, 200);
  } catch {
    return "inconnue";
  }
}
