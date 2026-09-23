/**
 * Ce qui décide si un email d'outil arrive en boîte principale ou en Promotions.
 *
 * Mesuré le 11/09/2026 sur la séquence de relance : 4 emails sur 9 en
 * principale avant, 9 sur 9 après, à texte et expéditeur identiques. Les deux
 * seuls changements étaient une signature en texte simple à la place du
 * pied de page habillé, et une version texte à côté du HTML. Gmail ne juge pas
 * le sujet ni le nombre de liens : il juge l'habillage.
 *
 * L'authentification, elle, est en place et vérifiée (DKIM signé par
 * convertilab.com, SPF aligné via send.convertilab.com, domaine vérifié chez
 * Resend, aucun suivi d'ouverture ni de clics). Ce n'est donc jamais de ce
 * côté-là qu'il faut chercher si un email retombe en Promotions.
 */

/**
 * Version texte d'un email HTML.
 *
 * Un message sans partie texte est un signal de publipostage : les vrais
 * échanges en ont toujours une. On la dérive du HTML final, après balisage
 * des liens, pour que les deux versions disent exactement la même chose.
 */
export function htmlVersTexte(html: string): string {
  return html
    // Un lien devient « libellé (adresse) », lisible et vérifiable.
    .replace(/<a[^>]*href="(mailto:|tel:)?([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (_m, p, url, texte) => {
      const t = texte.replace(/<[^>]+>/g, "").trim();
      return p ? t : `${t} (${url})`;
    })
    .replace(/<\/(p|div|tr|h1|h2|h3|li)>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&bull;/g, "·")
    .replace(/&eacute;/g, "é")
    .replace(/&[a-z]+;/gi, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .split("\n").map((l) => l.trim()).join("\n")
    .trim();
}

/**
 * En-têtes de désinscription.
 *
 * Gmail les exige des expéditeurs qui envoient en volume et s'en sert comme
 * signal de sérieux : un expéditeur qui offre une sortie en un clic est
 * classé plus haut qu'un expéditeur qu'on ne peut quitter qu'en le signalant
 * comme spam. `List-Unsubscribe-Post` autorise le clic direct, sans page
 * intermédiaire.
 */
export function entetesDesinscription(email: string): Record<string, string> {
  return {
    "List-Unsubscribe": `<mailto:contact@convertilab.com?subject=Desinscription%20${encodeURIComponent(email)}>, <https://www.convertilab.com/politique-de-confidentialite>`,
    "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
  };
}
