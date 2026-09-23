import { createClient } from "@supabase/supabase-js";

/**
 * Dépose le rapport dans Supabase Storage et renvoie son adresse publique.
 *
 * Pourquoi : le rapport part en pièce jointe, mais beaucoup de messageries
 * (Gmail sur téléphone, Outlook en aperçu, une redirection vers une autre
 * boîte) n'affichent pas la pièce jointe de façon évidente, et le lecteur
 * conclut qu'il n'a rien reçu. Un lien dans le corps du message règle le cas :
 * la pièce jointe reste, le lien la double.
 *
 * Le seau `rapports` est public en lecture. Le nom du fichier porte un jeton
 * aléatoire : l'adresse n'est pas devinable à partir du domaine analysé, donc
 * le rapport d'un visiteur ne se retrouve pas par tâtonnement.
 */
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const SEAU = "rapports";

function jeton(): string {
  return Array.from({ length: 16 }, () =>
    "abcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(Math.random() * 36)]
  ).join("");
}

export async function deposerRapport(
  nomFichier: string,
  contenu: Buffer,
  type: "application/pdf" | "text/html" = "application/pdf"
): Promise<string | null> {
  try {
    const extension = type === "application/pdf" ? "pdf" : "html";
    const propre = nomFichier
      .toLowerCase()
      .replace(/\.(pdf|html)$/, "")
      .replace(/[^a-z0-9-]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60) || "rapport";
    const chemin = `${new Date().toISOString().slice(0, 7)}/${propre}-${jeton()}.${extension}`;

    const { error } = await supabase.storage.from(SEAU).upload(chemin, contenu, {
      contentType: type,
      cacheControl: "31536000",
      upsert: false,
    });
    if (error) {
      console.error("[rapport][depot]", error.message);
      return null;
    }
    return supabase.storage.from(SEAU).getPublicUrl(chemin).data.publicUrl;
  } catch (err) {
    // Le dépôt ne doit jamais faire échouer l'envoi : sans lien, l'email garde
    // sa pièce jointe et se contente de ne pas proposer le lien.
    console.error("[rapport][depot]", err instanceof Error ? err.message : err);
    return null;
  }
}
