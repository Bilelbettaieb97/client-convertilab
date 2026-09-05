/**
 * Régénère le bloc SERIES du dashboard à partir de src/lib/email-series.ts.
 *
 * Le dashboard recopiait les emails à la main : au 05/09/2026 il ignorait les
 * six accusés de réception et affichait encore un ancien objet d'Estimation
 * Prix. Une copie manuelle dérive toujours ; ce script fait du code la seule
 * source de vérité.
 *
 * À relancer après toute modification des emails :
 *   node scripts/sync-dashboard-series.mjs
 */
import fs from "fs";
import path from "path";

const RACINE = path.resolve(import.meta.dirname, "..");
const SOURCE = path.join(RACINE, "src/lib/email-series.ts");
/**
 * Deux copies du dashboard coexistent sur le Bureau. Celle d'Onboarding est la
 * vivante (connectée à Supabase) ; celle de « notion doc » est une capture plus
 * ancienne, sans données. Les deux affichent les séries : on synchronise les
 * deux, sinon l'une des deux ment.
 */
const DASHBOARDS = [
  "/Users/bilelbettaieb/Desktop/Onboarding-Bras-Droit/04-Marketing-et-Systeme/dashboard-outils.html",
  "/Users/bilelbettaieb/Desktop/Outils/notion doc/dashboard-outils.html",
];

// Le dashboard nomme certaines entrées autrement que le code
const NOMS_DASHBOARD = {
  "Site Internet (Google Ads)": "Google Ads",
  "Mentions Legales": "Mentions Légales",
  "Offre Speciale": "Offre Spéciale",
};

const src = fs.readFileSync(SOURCE, "utf8");

/** Extrait un objet `nom: [ {delay, subject, body}, ... ]` du fichier TypeScript. */
function lireSeries() {
  const a = src.indexOf("const EMAIL_SERIES");
  const b = src.indexOf("\n};", a);
  const bloc = src.slice(a, b);
  const out = {};
  const entetes = [...bloc.matchAll(/^ {2}"([^"]+)": \[/gm)];
  for (const m of entetes) {
    const nom = m[1];
    const deb = m.index + m[0].length;
    const fin = bloc.indexOf("\n  ],", deb);
    const corps = bloc.slice(deb, fin);
    out[nom] = [...corps.matchAll(
      /delay:\s*(\d+),\s*\n\s*subject:\s*"((?:[^"\\]|\\.)*)",\s*\n\s*body:\s*`([\s\S]*?)`,\s*\n\s*\},/g
    )].map((e) => ({ delay: Number(e[1]), subject: e[2], body: e[3] }));
  }
  return out;
}

/** Les accusés de réception, envoyés immédiatement (J+0). */
function lireAccuses() {
  const a = src.indexOf("const ACCUSES_RECEPTION");
  if (a < 0) return {};
  const b = src.indexOf("\n};", a);
  const bloc = src.slice(a, b);
  const out = {};
  for (const m of bloc.matchAll(
    /^ {2}"([^"]+)": \{\s*\n\s*subject: "((?:[^"\\]|\\.)*)",\s*\n\s*body: `([\s\S]*?)`,\s*\n\s*\},/gm
  )) {
    out[m[1]] = { delay: 0, subject: m[2], body: m[3] };
  }
  return out;
}

/**
 * Les outils envoient un email dans la seconde, avec le rapport en pièce jointe.
 * Il ne vit pas dans email-series.ts mais dans la route de l'outil, si bien que
 * le dashboard laissait croire qu'un outil ne donnait aucun signe de vie avant
 * J+1. On le reconstitue ici pour que le tableau dise la vérité.
 */
function lireEmailsImmediats() {
  const routes = path.join(RACINE, "src/app/api");
  const outils = {
    "seo-check": "SEO Check",
    "speed-check": "Speed Check",
    "design-score": "Design Score",
    "estimateur-ads": "Estimateur Ads",
    "comparateur-sites": "Comparateur Sites",
    "robots-generator": "Robots Generator",
    "rapport-sectoriel": "Rapport Sectoriel",
    "mentions-legales": "Mentions Legales",
  };
  const out = {};
  for (const [dossier, nom] of Object.entries(outils)) {
    const f = path.join(routes, dossier, "route.ts");
    if (!fs.existsSync(f)) continue;
    const src = fs.readFileSync(f, "utf8");
    const m =
      src.match(/buildEmailSubject[^{]*\{[\s\S]{0,200}?return `([^`]+)`/) ||
      src.match(/subject: `([^`]+)`/);
    if (!m) continue;
    // ${audit.domain} → {domaine} : lisible pour un humain
    const sujet = m[1]
      .replace(/\$\{[^}]*domain[^}]*\}/gi, "{domaine}")
      .replace(/\$\{[^}]*scores?\.global\}/gi, "{score}")
      .replace(/\$\{[^}]*grade\}/gi, "{grade}")
      .replace(/\$\{[^}]*\}/g, "{…}");
    const joint =
      dossier === "robots-generator"
        ? "robots.txt et sitemap.xml"
        : "le rapport complet en PDF";
    out[nom] = {
      delay: 0,
      immediat: true,
      subject: sujet,
      body: `Cet email part dans la seconde qui suit l'envoi du formulaire. Ce n'est pas une relance : c'est le livrable que le visiteur est venu chercher.

Il contient :
• Le score et le grade, en gros caractères
• Jusqu'à 3 points à améliorer
• Jusqu'à 3 points forts
• ${joint} en pièce jointe
• Un bouton de prise de rendez-vous

C'est pour cette raison qu'un outil n'a pas besoin d'accusé de réception : le prospect ne reçoit pas une promesse, il reçoit la chose demandée.

Ce message est construit par la route de l'outil, pas par la série. Pour le modifier : src/lib/tools/shared-email-template.ts`,
    };
  }
  return out;
}

/** Alias : quelle série un formulaire réutilise-t-il ? */
const ALIAS = { HeroMiniForm: "Contact", "Offre Mensuelle": "Devis" };
function cleDeSerie(f) {
  const n = f.startsWith("Devis - ") ? "Devis" : f.replace(/[éèê]/g, "e");
  return ALIAS[n] ?? n;
}

function slug(v) {
  return v.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

const series = lireSeries();
const accuses = lireAccuses();
const immediats = lireEmailsImmediats();

// Assemble : ce qui part à J+0 en tête (accusé pour un formulaire, rapport pour
// un outil), puis la série de relances.
const assemble = {};
for (const [nom, emails] of Object.entries(series)) {
  const liste = [...emails];
  // un accusé peut être défini sur le formType lui-même ou sur sa série
  const acc = accuses[nom] ?? Object.entries(accuses).find(([k]) => cleDeSerie(k) === nom)?.[1];
  if (acc) liste.unshift(acc);
  else if (immediats[nom]) liste.unshift(immediats[nom]);
  assemble[NOMS_DASHBOARD[nom] ?? nom] = { serieDe: nom, emails: liste };
}

// Génère le JavaScript du dashboard
const echappe = (s) => s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
let js = "const SERIES = {\n";
for (const [nomDash, { serieDe, emails }] of Object.entries(assemble)) {
  js += `  ${JSON.stringify(nomDash)}: {\n    campagne: ${JSON.stringify(slug(serieDe))},\n    emails: [\n`;
  for (const e of emails) {
    const utm = e.immediat ? "immediat" : `j${e.delay}`;
    js += `      {\n        delay: "J+${e.delay}",\n        utm: "${utm}",\n`;
    js += `        subject: ${JSON.stringify(e.subject)},\n`;
    js += "        body: `" + echappe(e.body).replace(/\$\{CALENDLY\\?\}/g, "${CALENDLY}") + "`\n";
    js += "      },\n";
  }
  js += "    ]\n  },\n";
}
js += "};\n";
// restaure l'interpolation du lien Calendly, échappée par sécurité au-dessus
js = js.replace(/\\\$\{CALENDLY\}/g, "${CALENDLY}");

for (const cible of DASHBOARDS) {
  if (!fs.existsSync(cible)) {
    console.log(`  ignoré (absent) : ${cible}`);
    continue;
  }
  const dash = fs.readFileSync(cible, "utf8");
  const debut = dash.indexOf("const SERIES = {");
  if (debut < 0) {
    console.log(`  ignoré (pas de bloc SERIES) : ${cible}`);
    continue;
  }
  // fin du bloc : la ligne "};" en début de colonne qui suit
  const fin = dash.indexOf("\n};", debut) + 3;
  fs.writeFileSync(cible, dash.slice(0, debut) + js.trimEnd() + dash.slice(fin));
  console.log(`  mis à jour : ${path.basename(path.dirname(cible))}/${path.basename(cible)}`);
}

const total = Object.values(assemble).reduce((n, s) => n + s.emails.length, 0);
console.log(`\nSERIES régénéré : ${Object.keys(assemble).length} séries, ${total} emails`);
for (const [n, s] of Object.entries(assemble)) {
  const j0 = s.emails[0].delay === "J+0" || s.emails[0].delay === 0 ? " (avec accusé J+0)" : "";
  console.log(`  ${n.padEnd(28)} ${s.emails.length} emails${j0}`);
}
