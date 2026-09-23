import { Resend } from "resend";

/**
 * Prévenir l'agence d'un nouveau lead, sans qu'une seule adresse puisse tout
 * faire tomber.
 *
 * Constaté le 23/09/2026 : `contact@convertilab.com` était sur la liste de
 * suppression de Resend depuis le 4 juin, à la suite d'un rejet ponctuel.
 * Comme les deux destinataires voyageaient dans le même envoi, Resend
 * supprimait le message entier, y compris vers `convertilab@gmail.com`.
 * Résultat : plus aucune notification de lead pendant trois mois et demi,
 * en silence, alors que le rapport partait normalement au prospect.
 *
 * On envoie donc un message par destinataire. Une adresse bloquée n'empêche
 * plus l'autre d'arriver, et le rejet se lit dans les journaux au lieu de
 * disparaître.
 */
const resend = new Resend(process.env.RESEND_API_KEY);

const DESTINATAIRES = ["convertilab@gmail.com", "contact@convertilab.com"];

export function notifierAgence(sujet: string, html: string, contexte: string) {
  for (const destinataire of DESTINATAIRES) {
    resend.emails
      .send({
        from: "ConvertiLab <contact@convertilab.com>",
        to: destinataire,
        subject: sujet,
        html,
      })
      .then(
        (r) => {
          if (r.error) console.error(`[notif][${contexte}][${destinataire}]`, r.error.message);
        },
        (err) => console.error(`[notif][${contexte}][${destinataire}]`, err instanceof Error ? err.message : err)
      );
  }
}
