import { Resend } from "resend";

/**
 * Accès paresseux au client Resend.
 *
 * `new Resend(...)` lève « Missing API key » dès que la clé est absente. Appelé
 * au niveau module, il s'exécutait pendant `next build` (étape « Collecting page
 * data »), et faisait donc échouer tout build où RESEND_API_KEY n'existe pas —
 * c'est-à-dire tous les déploiements preview, la variable n'étant définie que
 * sur production. Impossible de tester une branche avant de la merger.
 *
 * On ne corrige pas en ajoutant la clé en preview : les déploiements preview
 * sont publics et n'ont aucune protection, un vrai secret n'a rien à y faire.
 * Le client est donc construit à la première requête, quand la clé est
 * réellement nécessaire, et jamais pendant le build.
 */
let client: Resend | null = null;

export function getResend(): Resend {
  if (!client) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY manquant : impossible d'envoyer des emails.");
    }
    client = new Resend(apiKey);
  }
  return client;
}
