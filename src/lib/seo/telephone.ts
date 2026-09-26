/**
 * Recherche du telephone public d'un prospect a partir de son propre site.
 *
 * Contexte : depuis le 23/09/2026 les formulaires des outils ne demandent plus
 * que l'email et le nom de l'entreprise, pour que l'etape 2 tienne sur un
 * ecran de telephone. On perd donc le numero, alors que le visiteur nous
 * confie lui-meme l'adresse de son site, ou son numero est affiche en clair.
 *
 * On ne va chercher que ce qui est publie sur trois pages publiques du site
 * audite, et uniquement pour rappeler la personne au sujet de l'audit qu'elle
 * vient de demander. Rien d'autre n'est collecte.
 */

import * as cheerio from "cheerio";

/** Pages ou les TPE mettent leur numero, par ordre de rendement observe. */
const PAGES_CONTACT = ["", "/contact", "/mentions-legales"];

/** Mots qui precedent un numero dans le texte d'une page francaise. */
const MOTS_INDICE = /(t[ée]l|telephone|t[ée]l[ée]phone|appel(?:ez)?|portable|mobile|joindre|contact)/i;

/**
 * Formate un numero francais en « 06 16 47 72 45 ».
 * Renvoie null si ce n'est pas un numero francais plausible.
 */
export function normaliserTelephone(brut: string): string | null {
  // Les separateurs decoratifs : espaces (y compris insecables), points,
  // tirets, parentheses, barres obliques.
  let n = brut.replace(/[\s  .\-()/]/g, "");

  if (n.startsWith("+33")) n = "0" + n.slice(3);
  else if (n.startsWith("0033")) n = "0" + n.slice(4);
  else if (n.startsWith("33") && n.length === 11) n = "0" + n.slice(2);

  // Un numero francais : 0, puis un indicatif 1 a 9, puis huit chiffres.
  if (!/^0[1-9]\d{8}$/.test(n)) return null;

  // Numeros a cout majore et services : on ne rappelle pas la-dessus.
  if (/^08[1-9]/.test(n)) return null;

  return n.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
}

/** Tous les numeros plausibles d'une chaine, dans l'ordre d'apparition. */
function numerosDansTexte(texte: string): string[] {
  // Formats acceptes : 06 16 47 72 45, 06.16.47.72.45, 0616477245,
  // +33 6 16 47 72 45, 04-72-00-00-00.
  const motif = /(?:\+33|0033|0)\s?[1-9](?:[\s  .\-]?\d{2}){4}/g;
  const trouves: string[] = [];
  for (const m of texte.match(motif) ?? []) {
    const propre = normaliserTelephone(m);
    if (propre && !trouves.includes(propre)) trouves.push(propre);
  }
  return trouves;
}

/**
 * Le numero d'une page, du signal le plus sur au moins sur :
 * 1. un lien tel:, pose exprès par le site pour etre appele ;
 * 2. le champ telephone des donnees structurees (JSON-LD) ;
 * 3. un numero precede de « Tel », « Appelez », « Portable »… ;
 * 4. a defaut, le premier numero francais du texte visible.
 *
 * Les balises script et style sont retirees avant l'etape 3, sinon un
 * identifiant de suivi ou un horodatage dans du JavaScript passe pour un
 * numero de telephone.
 */
export function extraireTelephone(html: string): string | null {
  if (!html) return null;
  const $ = cheerio.load(html);

  // 1. Liens tel:
  for (const el of $('a[href^="tel:"]').toArray()) {
    const numero = normaliserTelephone(($(el).attr("href") ?? "").replace(/^tel:/i, ""));
    if (numero) return numero;
  }

  // 2. Donnees structurees
  for (const el of $('script[type="application/ld+json"]').toArray()) {
    const brut = $(el).contents().text();
    for (const m of brut.matchAll(/"telephone"\s*:\s*"([^"]+)"/gi)) {
      const numero = normaliserTelephone(m[1]);
      if (numero) return numero;
    }
  }

  $("script, style, noscript").remove();
  const texte = $("body").text().replace(/\s+/g, " ");

  // 3. Numero annonce par un mot indice, dans les 40 caracteres qui precedent
  for (const m of texte.matchAll(/(?:\+33|0033|0)\s?[1-9](?:[\s  .\-]?\d{2}){4}/g)) {
    const avant = texte.slice(Math.max(0, (m.index ?? 0) - 40), m.index);
    if (MOTS_INDICE.test(avant)) {
      const numero = normaliserTelephone(m[0]);
      if (numero) return numero;
    }
  }

  // 4. Premier numero francais de la page
  return numerosDansTexte(texte)[0] ?? null;
}

async function recupererPage(url: string, timeout = 6000): Promise<string> {
  const controleur = new AbortController();
  const minuteur = setTimeout(() => controleur.abort(), timeout);
  try {
    const res = await fetch(url, {
      signal: controleur.signal,
      headers: { "User-Agent": "ConvertiLab-SEO-Checker/1.0" },
      redirect: "follow",
    });
    if (!res.ok) return "";
    return await res.text();
  } catch {
    return "";
  } finally {
    clearTimeout(minuteur);
  }
}

/**
 * Cherche le numero sur l'accueil, la page contact et les mentions legales.
 *
 * Les trois pages sont chargees en parallele et on garde le premier resultat
 * dans cet ordre de priorite : l'accueil affiche souvent un numero de standard
 * a jour, la page contact vient ensuite, les mentions legales en dernier car
 * elles contiennent parfois celui de l'hebergeur.
 *
 * Ne leve jamais : sans numero, on renvoie null et le reste du parcours
 * continue comme avant.
 */
export async function chercherTelephone(urlSite: string): Promise<string | null> {
  let base: string;
  try {
    const u = new URL(urlSite.startsWith("http") ? urlSite : `https://${urlSite}`);
    base = `${u.protocol}//${u.host}`;
  } catch {
    return null;
  }

  const pages = await Promise.all(PAGES_CONTACT.map((chemin) => recupererPage(base + chemin)));
  for (const html of pages) {
    const numero = extraireTelephone(html);
    if (numero) return numero;
  }
  return null;
}
