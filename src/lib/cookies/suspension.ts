/**
 * Suspension du recueil de consentement : décision de Bilel, le 23/09/2026.
 *
 * Pendant les dix premiers jours de la campagne Meta « Audit SEO demande », le
 * bandeau ne s'affiche pas et la mesure se comporte comme si le visiteur avait
 * tout accepté : pixel Meta, conversion Google Ads, GA4. Motif : sans cela,
 * Meta ne voit qu'une fraction des demandes et son algorithme n'apprend pas.
 * Bilel a été averti que la CNIL sanctionne ce dépôt sans accord (article 82
 * de la loi Informatique et Libertés) et s'en porte responsable. Même décision
 * que sur merciavis.fr, prise le 21/09.
 *
 * Ce que ça ne change pas :
 *  - un choix déjà enregistré, un refus surtout, reste respecté ;
 *  - rien n'est écrit dans le stockage à la place du visiteur, donc personne
 *    ne portera une trace d'accord qu'il n'a pas donné ;
 *  - le lien « Cookies » du pied de page continue d'ouvrir les réglages ;
 *  - la suspension prend fin toute seule à la date ci-dessous, le bandeau
 *    revenant alors pour tout le monde.
 *
 * Pour l'arrêter plus tôt : mettre la date dans le passé. Pour la prolonger :
 * la reculer. La même date est recopiée dans les deux scripts en ligne de
 * `app/layout.tsx` et `components/Analytics.tsx`, qui lisent le stockage
 * directement et ne peuvent pas importer ce module.
 */
export const SUSPENSION_CONSENTEMENT_JUSQU_AU = Date.parse("2026-10-04T00:00:00+02:00");

export function recueilSuspendu(): boolean {
  return Date.now() < SUSPENSION_CONSENTEMENT_JUSQU_AU;
}
