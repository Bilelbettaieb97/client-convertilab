/**
 * Signale à Google et à Meta qu'un formulaire d'outil a été rempli.
 *
 * Sans cet appel, aucun événement ne partait quand quelqu'un demandait un
 * rapport : Meta voyait des visites, jamais une demande. Une campagne
 * optimisée « conversion » n'avait donc rien à apprendre, et le coût par
 * demande était impossible à mesurer.
 *
 * `trackFormConversion` est posée par components/Analytics.tsx et ne fait rien
 * tant que le visiteur n'a pas accepté les cookies publicitaires : l'appel est
 * sans effet dans ce cas, il n'y a rien de plus à vérifier ici.
 *
 * `outil` sert à distinguer les demandes dans Meta et GA4 (audit SEO, test de
 * vitesse, score design…) sans créer un événement par outil.
 */
type Conversion = (donnees?: { email?: string; phone?: string; outil?: string }) => void;

export function conversionOutil(outil: string, email?: string) {
  if (typeof window === "undefined") return;
  const w = window as Window & {
    trackFormConversion?: Conversion;
    fbq?: (...args: unknown[]) => void;
    _fbqInitialized?: boolean;
  };
  try {
    w.trackFormConversion?.({ email, outil });
    // Le contenu de l'événement Meta : il permet de bâtir une conversion
    // personnalisée par outil sans toucher au code une seconde fois.
    if (typeof w.fbq === "function" && w._fbqInitialized) {
      w.fbq("trackCustom", "DemandeRapport", { outil });
    }
  } catch {
    // Un bloqueur de publicité ou un refus de cookies : le formulaire doit
    // continuer, la mesure n'est jamais bloquante.
  }
}
