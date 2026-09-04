import * as cheerio from "cheerio";

// ============ TYPES ============

export interface PageAnalysis {
  url: string;
  statusCode: number;
  responseTime: number;
  title: string;
  titleLength: number;
  metaDescription: string;
  metaDescriptionLength: number;
  h1: string[];
  h2: string[];
  h3: string[];
  canonical: string;
  lang: string;
  viewport: boolean;
  images: { src: string; alt: string; hasAlt: boolean }[];
  imagesWithoutAlt: number;
  totalImages: number;
  internalLinks: number;
  externalLinks: number;
  wordCount: number;
  jsonLd: { type: string; detected: boolean }[];
  ogTags: Record<string, string>;
  twitterCard: Record<string, string>;
  hasPreconnect: boolean;
  hasPrefetch: boolean;
  scriptsAsync: number;
  scriptsDefer: number;
  scriptsBlocking: number;
  hasWebpImages: boolean;
  hasLazyLoading: boolean;
  fontPreload: boolean;
  cssFramework: string;
  jsFramework: string;
}

export interface RobotsTxtAnalysis {
  exists: boolean;
  content: string;
  hasSitemap: boolean;
  sitemapUrl: string;
  blockedPaths: string[];
  aiBots: {
    gptbot: "allowed" | "blocked" | "not_mentioned";
    claudebot: "allowed" | "blocked" | "not_mentioned";
    perplexitybot: "allowed" | "blocked" | "not_mentioned";
    googleExtended: "allowed" | "blocked" | "not_mentioned";
  };
}

export interface SitemapAnalysis {
  exists: boolean;
  urlCount: number;
  hasLastmod: boolean;
}

export interface AuditScores {
  technique: number;
  onPage: number;
  schema: number;
  mobile: number;
  contenu: number;
  geo: number;
  performance: number;
  securite: number;
  global: number;
}

export interface AuditIssue {
  title: string;
  description: string;
  fix: string;
  priority: "critical" | "important" | "recommended";
}

export interface SeoAuditResult {
  url: string;
  domain: string;
  fetchedAt: string;
  homepage: PageAnalysis;
  robotsTxt: RobotsTxtAnalysis;
  sitemap: SitemapAnalysis;
  scores: AuditScores;
  grade: string;
  gradeLabel: string;
  issues: AuditIssue[];
  strengths: string[];
}

// ============ FETCH HELPERS ============

async function fetchWithTimeout(url: string, timeout = 10000): Promise<{ text: string; status: number; time: number; headers: Headers }> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  const start = Date.now();

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { "User-Agent": "ConvertiLab-SEO-Checker/1.0" },
      redirect: "follow",
    });
    const text = await res.text();
    return { text, status: res.status, time: Date.now() - start, headers: res.headers };
  } catch {
    return { text: "", status: 0, time: Date.now() - start, headers: new Headers() };
  } finally {
    clearTimeout(timer);
  }
}

function normalizeUrl(url: string): string {
  let u = url.trim();
  if (!u.startsWith("http://") && !u.startsWith("https://")) u = "https://" + u;
  if (u.endsWith("/")) u = u.slice(0, -1);
  return u;
}

function getDomain(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return url.replace(/https?:\/\//, "").split("/")[0];
  }
}

// ============ PAGE ANALYZER ============

function analyzePage(url: string, html: string, status: number, responseTime: number): PageAnalysis {
  const $ = cheerio.load(html);

  // Title
  const title = $("title").first().text().trim();

  // Meta description
  const metaDescription = $('meta[name="description"]').attr("content")?.trim() || "";

  // Headings
  const h1: string[] = [];
  $("h1").each((_, el) => { h1.push($(el).text().trim()); });
  const h2: string[] = [];
  $("h2").each((_, el) => { h2.push($(el).text().trim()); });
  const h3: string[] = [];
  $("h3").each((_, el) => { h3.push($(el).text().trim()); });

  // Canonical
  const canonical = $('link[rel="canonical"]').attr("href") || "";

  // Lang
  const lang = $("html").attr("lang") || "";

  // Viewport
  const viewport = !!$('meta[name="viewport"]').length;

  // Images
  const images: { src: string; alt: string; hasAlt: boolean }[] = [];
  $("img").each((_, el) => {
    const src = $(el).attr("src") || "";
    const alt = $(el).attr("alt") || "";
    const hasAlt = $(el).attr("alt") !== undefined && alt.length > 0;
    images.push({ src, alt, hasAlt });
  });

  // Links
  const domain = getDomain(url);
  let internalLinks = 0;
  let externalLinks = 0;
  $("a[href]").each((_, el) => {
    const href = $(el).attr("href") || "";
    if (href.startsWith("/") || href.startsWith("#") || href.includes(domain)) {
      internalLinks++;
    } else if (href.startsWith("http")) {
      externalLinks++;
    }
  });

  // Word count
  const bodyText = $("body").text().replace(/\s+/g, " ").trim();
  const wordCount = bodyText.split(/\s+/).filter(w => w.length > 1).length;

  // JSON-LD
  const jsonLdTypes: { type: string; detected: boolean }[] = [];
  const knownTypes = ["Organization", "LocalBusiness", "FAQPage", "Service", "HowTo", "WebSite", "BreadcrumbList", "Person", "BlogPosting", "Article", "Product"];
  const jsonLdScripts: string[] = [];
  $('script[type="application/ld+json"]').each((_, el) => {
    jsonLdScripts.push($(el).html() || "");
  });
  const allJsonLd = jsonLdScripts.join(" ");
  for (const type of knownTypes) {
    jsonLdTypes.push({ type, detected: allJsonLd.includes(`"${type}"`) || allJsonLd.includes(`"@type":"${type}"`) });
  }

  // Open Graph
  const ogTags: Record<string, string> = {};
  $('meta[property^="og:"]').each((_, el) => {
    const prop = $(el).attr("property") || "";
    ogTags[prop] = $(el).attr("content") || "";
  });

  // Twitter Card
  const twitterCard: Record<string, string> = {};
  $('meta[name^="twitter:"]').each((_, el) => {
    const name = $(el).attr("name") || "";
    twitterCard[name] = $(el).attr("content") || "";
  });

  // Performance hints
  const hasPreconnect = !!$('link[rel="preconnect"]').length;
  const hasPrefetch = !!$('link[rel="dns-prefetch"]').length || !!$('link[rel="prefetch"]').length;
  const fontPreload = !!$('link[rel="preload"][as="font"]').length;

  let scriptsAsync = 0, scriptsDefer = 0, scriptsBlocking = 0;
  $("script[src]").each((_, el) => {
    if ($(el).attr("async") !== undefined) scriptsAsync++;
    else if ($(el).attr("defer") !== undefined) scriptsDefer++;
    else scriptsBlocking++;
  });

  // Image formats
  const hasWebpImages = images.some(i => i.src.includes(".webp") || i.src.includes("format=webp"));
  const hasLazyLoading = !!$('img[loading="lazy"]').length || html.includes("lazy");

  // Frameworks
  let cssFramework = "Inconnu";
  if (html.includes("tailwind") || /class="[^"]*(?:flex|grid|px-|py-|bg-|text-)/.test(html)) cssFramework = "Tailwind CSS";
  else if (html.includes("bootstrap")) cssFramework = "Bootstrap";

  let jsFramework = "Inconnu";
  if (html.includes("__next") || html.includes("_next")) jsFramework = "Next.js";
  else if (html.includes("__nuxt")) jsFramework = "Nuxt.js";
  else if (html.includes("react")) jsFramework = "React";

  return {
    url, statusCode: status, responseTime, title, titleLength: title.length,
    metaDescription, metaDescriptionLength: metaDescription.length,
    h1, h2, h3, canonical, lang, viewport, images,
    imagesWithoutAlt: images.filter(i => !i.hasAlt).length,
    totalImages: images.length,
    internalLinks, externalLinks, wordCount, jsonLd: jsonLdTypes,
    ogTags, twitterCard, hasPreconnect, hasPrefetch,
    scriptsAsync, scriptsDefer, scriptsBlocking,
    hasWebpImages, hasLazyLoading, fontPreload,
    cssFramework, jsFramework,
  };
}

// ============ ROBOTS.TXT ANALYZER ============

function analyzeRobotsTxt(content: string, exists: boolean): RobotsTxtAnalysis {
  if (!exists) {
    return {
      exists: false, content: "", hasSitemap: false, sitemapUrl: "",
      blockedPaths: [],
      aiBots: { gptbot: "not_mentioned", claudebot: "not_mentioned", perplexitybot: "not_mentioned", googleExtended: "not_mentioned" },
    };
  }

  const lower = content.toLowerCase();
  const hasSitemap = lower.includes("sitemap:");
  const sitemapMatch = content.match(/Sitemap:\s*(.+)/i);
  const sitemapUrl = sitemapMatch ? sitemapMatch[1].trim() : "";

  const blockedPaths: string[] = [];
  const lines = content.split("\n");
  for (const line of lines) {
    const match = line.match(/^Disallow:\s*(.+)/i);
    if (match && match[1].trim()) blockedPaths.push(match[1].trim());
  }

  function checkBot(botName: string): "allowed" | "blocked" | "not_mentioned" {
    const botLower = botName.toLowerCase();
    const regex = new RegExp(`User-agent:\\s*${botName}`, "i");
    if (!regex.test(content)) return "not_mentioned";
    const idx = content.search(regex);
    const afterBot = content.slice(idx, idx + 200);
    if (/Allow:\s*\//i.test(afterBot) && !/Disallow:\s*\//i.test(afterBot)) return "allowed";
    if (/Disallow:\s*\//i.test(afterBot)) return "blocked";
    return "allowed";
  }

  return {
    exists: true, content, hasSitemap, sitemapUrl, blockedPaths,
    aiBots: {
      gptbot: checkBot("GPTBot"),
      claudebot: checkBot("ClaudeBot"),
      perplexitybot: checkBot("PerplexityBot"),
      googleExtended: checkBot("Google-Extended"),
    },
  };
}

// ============ SITEMAP ANALYZER ============

function analyzeSitemap(content: string, exists: boolean): SitemapAnalysis {
  if (!exists) return { exists: false, urlCount: 0, hasLastmod: false };
  const urlMatches = content.match(/<loc>/g);
  const urlCount = urlMatches ? urlMatches.length : 0;
  const hasLastmod = content.includes("<lastmod>");
  return { exists: true, urlCount, hasLastmod };
}

// ============ SCORING ============

function calculateScores(page: PageAnalysis, robots: RobotsTxtAnalysis, sitemap: SitemapAnalysis): AuditScores {
  // 1. SEO Technique (20%)
  let technique = 100;
  if (!page.url.startsWith("https")) technique = 0;
  else {
    if (!robots.exists) technique -= 25;
    if (!sitemap.exists) technique -= 25;
    if (!page.canonical) technique -= 15;
    if (!robots.hasSitemap) technique -= 10;
  }
  technique = Math.max(0, Math.min(100, technique));

  // 2. On-Page (20%)
  let onPage = 100;
  if (!page.title) onPage -= 30;
  else if (page.titleLength < 30 || page.titleLength > 70) onPage -= 10;
  if (!page.metaDescription) onPage -= 20;
  else if (page.metaDescriptionLength < 100 || page.metaDescriptionLength > 170) onPage -= 10;
  if (page.h1.length === 0) onPage -= 25;
  else if (page.h1.length > 1) onPage -= 15;
  const altPenalty = Math.min(25, page.imagesWithoutAlt * 5);
  onPage -= altPenalty;
  if (page.internalLinks < 3) onPage -= 10;
  if (!page.ogTags["og:title"]) onPage -= 5;
  if (!page.twitterCard["twitter:card"]) onPage -= 5;
  onPage = Math.max(0, Math.min(100, onPage));

  // 3. Schema (10%)
  let schema = 20; // Base if no JSON-LD at all
  const detectedSchemas = page.jsonLd.filter(j => j.detected);
  if (detectedSchemas.length > 0) {
    schema = 40;
    schema += Math.min(60, detectedSchemas.length * 10);
  }
  if (!page.jsonLd.find(j => j.type === "Organization")?.detected) schema -= 15;
  schema = Math.max(0, Math.min(100, schema));

  // 4. Mobile & UX (10%)
  let mobile = 100;
  if (!page.viewport) mobile = 0;
  else {
    if (page.cssFramework === "Inconnu") mobile -= 20;
    if (page.jsFramework === "Inconnu") mobile -= 10;
  }
  mobile = Math.max(0, Math.min(100, mobile));

  // 5. Contenu & E-E-A-T (15%)
  let contenu = 60;
  if (page.wordCount > 500) contenu += 10;
  if (page.wordCount > 1000) contenu += 10;
  if (page.wordCount > 2000) contenu += 10;
  if (page.jsonLd.find(j => j.type === "Person")?.detected) contenu += 10;
  if (page.wordCount < 300) contenu -= 20;
  contenu = Math.max(0, Math.min(100, contenu));

  // 6. GEO / AI Search (10%)
  let geo = 30;
  const botStatuses = Object.values(robots.aiBots);
  const allowedBots = botStatuses.filter(s => s === "allowed").length;
  const blockedBots = botStatuses.filter(s => s === "blocked").length;
  if (blockedBots > 0) geo -= 20;
  geo += allowedBots * 8;
  if (page.jsonLd.find(j => j.type === "FAQPage")?.detected) geo += 15;
  if (page.externalLinks > 0) geo += 5;
  geo = Math.max(0, Math.min(100, geo));

  // 7. Performance (10%)
  let performance = 100;
  if (page.responseTime > 3000) performance -= 40;
  else if (page.responseTime > 1500) performance -= 20;
  else if (page.responseTime > 800) performance -= 10;
  if (!page.hasPreconnect && !page.hasPrefetch) performance -= 10;
  if (page.scriptsBlocking > 2) performance -= 15;
  if (!page.fontPreload) performance -= 5;
  if (!page.hasWebpImages) performance -= 10;
  performance = Math.max(0, Math.min(100, performance));

  // 8. Securite (5%)
  let securite = 100;
  if (!page.url.startsWith("https")) securite = 0;
  else {
    if (!page.lang) securite -= 25;
  }
  securite = Math.max(0, Math.min(100, securite));

  // Global
  const global = Math.round(
    technique * 0.20 + onPage * 0.20 + schema * 0.10 +
    mobile * 0.10 + contenu * 0.15 + geo * 0.10 +
    performance * 0.10 + securite * 0.05
  );

  return {
    technique: Math.round(technique),
    onPage: Math.round(onPage),
    schema: Math.round(schema),
    mobile: Math.round(mobile),
    contenu: Math.round(contenu),
    geo: Math.round(geo),
    performance: Math.round(performance),
    securite: Math.round(securite),
    global,
  };
}

function getGrade(score: number): { grade: string; label: string } {
  if (score >= 90) return { grade: "A+", label: "Excellent" };
  if (score >= 80) return { grade: "A", label: "Tres Bien" };
  if (score >= 70) return { grade: "B", label: "Bien" };
  if (score >= 60) return { grade: "C", label: "Moyen" };
  if (score >= 40) return { grade: "D", label: "Faible" };
  return { grade: "F", label: "Critique" };
}

// ============ ISSUES & STRENGTHS ============

function findIssues(page: PageAnalysis, robots: RobotsTxtAnalysis, sitemap: SitemapAnalysis): AuditIssue[] {
  const issues: AuditIssue[] = [];

  // Critical
  if (!page.url.startsWith("https")) {
    issues.push({ priority: "critical", title: "Le site n'est pas en HTTPS", description: "HTTPS est obligatoire pour la securite, le SEO et la confiance des visiteurs. Google penalise les sites non securises.", fix: "Installer un certificat SSL (gratuit via Let's Encrypt ou Vercel/Netlify). Rediriger tout le HTTP vers HTTPS." });
  }
  if (!page.title) {
    issues.push({ priority: "critical", title: "Balise title manquante", description: "La balise title est le facteur on-page #1 pour Google. Sans elle, votre page n'a pas de titre dans les resultats de recherche.", fix: "Ajouter une balise <title> unique de 50-60 caracteres contenant le mot-cle principal." });
  }
  if (page.h1.length === 0) {
    issues.push({ priority: "critical", title: "Aucune balise H1 detectee", description: "Le H1 est le titre principal de la page. Il aide Google a comprendre le sujet de la page.", fix: "Ajouter un seul H1 par page, contenant le mot-cle principal." });
  }
  if (!robots.exists) {
    issues.push({ priority: "critical", title: "Fichier robots.txt absent", description: "Sans robots.txt, les moteurs de recherche n'ont pas de directives pour explorer votre site.", fix: "Creer un fichier robots.txt a la racine du site avec les directives Allow/Disallow et un lien vers le sitemap." });
  }
  if (!sitemap.exists) {
    issues.push({ priority: "critical", title: "Sitemap XML absent", description: "Le sitemap aide Google a decouvrir et indexer toutes vos pages.", fix: "Generer un sitemap.xml et le referencer dans le robots.txt." });
  }

  // Important
  if (page.imagesWithoutAlt > 0) {
    issues.push({ priority: page.imagesWithoutAlt > 5 ? "critical" : "important", title: `${page.imagesWithoutAlt} image(s) sans attribut alt`, description: "Les images sans texte alternatif sont invisibles pour Google Images et les lecteurs d'ecran (accessibilite).", fix: `Ajouter un attribut alt descriptif a chaque image. Exemple : alt="Description de l'image".` });
  }
  if (!page.metaDescription) {
    issues.push({ priority: "important", title: "Meta description manquante", description: "La meta description est le texte affiche sous votre titre dans Google. Sans elle, Google choisit un extrait au hasard.", fix: "Ajouter une meta description de 150-160 caracteres, incitative, avec le mot-cle principal." });
  }
  if (page.h1.length > 1) {
    issues.push({ priority: "important", title: `${page.h1.length} balises H1 detectees (au lieu de 1)`, description: "Plusieurs H1 diluent le signal SEO. Google ne sait pas quel est le vrai sujet principal.", fix: "Garder un seul H1 par page et convertir les autres en H2." });
  }
  if (!page.canonical) {
    issues.push({ priority: "important", title: "Balise canonical manquante", description: "Sans canonical, Google peut considerer des URLs differentes comme du contenu duplique.", fix: "Ajouter <link rel=\"canonical\" href=\"URL_DE_LA_PAGE\"> dans le <head>." });
  }
  if (page.wordCount < 300) {
    issues.push({ priority: "important", title: "Contenu insuffisant (moins de 300 mots)", description: "Les pages avec peu de contenu ont du mal a se positionner. Google prefere les pages completes et utiles.", fix: "Etoffer le contenu avec des informations utiles, des FAQ, des details sur vos services." });
  }

  // AI/GEO
  const blockedBots = Object.entries(robots.aiBots).filter(([, v]) => v === "blocked");
  if (blockedBots.length > 0) {
    issues.push({ priority: "critical", title: "Bots IA bloques dans robots.txt", description: `${blockedBots.map(([k]) => k).join(", ")} sont bloques. Votre site ne sera pas cite par ces moteurs IA.`, fix: "Ajouter User-agent: [BotName] et Allow: / pour chaque bot IA dans le robots.txt." });
  }
  const notMentioned = Object.entries(robots.aiBots).filter(([, v]) => v === "not_mentioned");
  if (notMentioned.length > 0 && robots.exists) {
    issues.push({ priority: "recommended", title: `${notMentioned.length} bot(s) IA non configures dans robots.txt`, description: "Ces bots ne sont ni autorises ni bloques explicitement. Les autoriser explicitement renforce la visibilite IA.", fix: `Ajouter des regles Allow explicites pour : ${notMentioned.map(([k]) => k).join(", ")}.` });
  }

  // Performance
  if (page.responseTime > 1500) {
    issues.push({ priority: page.responseTime > 3000 ? "critical" : "important", title: `Temps de reponse eleve (${(page.responseTime / 1000).toFixed(1)}s)`, description: "Un site lent perd des visiteurs et est penalise par Google. L'ideal est sous 600ms.", fix: "Optimiser les images, activer la compression, utiliser un CDN, reduire le JavaScript." });
  }
  if (page.scriptsBlocking > 2) {
    issues.push({ priority: "recommended", title: `${page.scriptsBlocking} scripts bloquants detectes`, description: "Les scripts sans async/defer bloquent le rendu de la page.", fix: "Ajouter l'attribut defer ou async aux balises <script> non critiques." });
  }

  // Recommended
  if (!page.ogTags["og:title"]) {
    issues.push({ priority: "recommended", title: "Balises Open Graph manquantes", description: "Sans Open Graph, les partages sur les reseaux sociaux n'affichent pas d'apercu riche.", fix: "Ajouter og:title, og:description, og:image et og:url dans le <head>." });
  }
  if (!page.lang) {
    issues.push({ priority: "important", title: "Attribut lang manquant sur la balise HTML", description: "L'attribut lang aide Google et les lecteurs d'ecran a identifier la langue du contenu.", fix: 'Ajouter lang="fr" (ou la langue appropriee) sur la balise <html>.' });
  }
  if (page.jsonLd.every(j => !j.detected)) {
    issues.push({ priority: "critical", title: "Aucun schema JSON-LD detecte", description: "Les donnees structurees permettent les rich snippets dans Google et augmentent la visibilite IA de +40%.", fix: "Ajouter au minimum Organization et FAQPage en JSON-LD." });
  }
  if (!page.viewport) {
    issues.push({ priority: "critical", title: "Balise viewport manquante", description: "Sans viewport, le site ne s'adapte pas aux mobiles. Google penalise les sites non mobile-friendly.", fix: 'Ajouter <meta name="viewport" content="width=device-width, initial-scale=1"> dans le <head>.' });
  }

  return issues.sort((a, b) => {
    const p = { critical: 0, important: 1, recommended: 2 };
    return p[a.priority] - p[b.priority];
  });
}

function findStrengths(page: PageAnalysis, robots: RobotsTxtAnalysis, sitemap: SitemapAnalysis): string[] {
  const strengths: string[] = [];
  if (page.url.startsWith("https")) strengths.push("Site en HTTPS — securise et conforme");
  if (page.title && page.titleLength >= 30 && page.titleLength <= 70) strengths.push(`Title optimise (${page.titleLength} caracteres)`);
  if (page.metaDescription && page.metaDescriptionLength >= 100) strengths.push("Meta description presente et optimisee");
  if (page.h1.length === 1) strengths.push("Un seul H1 bien structure");
  if (page.viewport) strengths.push("Viewport configure — site mobile-friendly");
  if (page.canonical) strengths.push("Balise canonical presente");
  if (robots.exists && robots.hasSitemap) strengths.push("Robots.txt present avec lien vers le sitemap");
  if (sitemap.exists && sitemap.urlCount > 10) strengths.push(`Sitemap XML complet (${sitemap.urlCount} URLs)`);
  const detectedSchemas = page.jsonLd.filter(j => j.detected);
  if (detectedSchemas.length >= 3) strengths.push(`Schema JSON-LD riche (${detectedSchemas.length} types : ${detectedSchemas.map(j => j.type).join(", ")})`);
  if (page.ogTags["og:title"]) strengths.push("Open Graph configure pour les reseaux sociaux");
  if (page.twitterCard["twitter:card"]) strengths.push("Twitter Card configure");
  if (page.wordCount > 1000) strengths.push(`Contenu riche (${page.wordCount} mots)`);
  if (page.internalLinks > 10) strengths.push(`Bon maillage interne (${page.internalLinks} liens)`);
  if (page.hasWebpImages) strengths.push("Images optimisees en WebP");
  if (page.hasPreconnect) strengths.push("Preconnect/prefetch pour les performances");
  if (page.fontPreload) strengths.push("Fonts preloaded — chargement rapide");
  if (page.jsFramework === "Next.js") strengths.push("Next.js — framework optimise pour le SEO (SSR)");
  if (page.cssFramework === "Tailwind CSS") strengths.push("Tailwind CSS — CSS optimise et leger");
  const allowedBots = Object.entries(robots.aiBots).filter(([, v]) => v === "allowed");
  if (allowedBots.length > 0) strengths.push(`Bots IA autorises : ${allowedBots.map(([k]) => k).join(", ")}`);
  if (page.lang) strengths.push(`Attribut lang="${page.lang}" present`);
  return strengths;
}

// ============ MAIN EXPORT ============

export async function analyzeSite(inputUrl: string): Promise<SeoAuditResult> {
  const url = normalizeUrl(inputUrl);
  const domain = getDomain(url);

  // Fetch in parallel
  const [homepageRes, robotsRes, sitemapRes] = await Promise.all([
    fetchWithTimeout(url),
    fetchWithTimeout(`${url}/robots.txt`),
    fetchWithTimeout(`${url}/sitemap.xml`),
  ]);

  // Site injoignable : sans cette garde on produit un rapport complet sur une page
  // qu'on n'a jamais reussi a charger (et le comparateur declare gagnant le site
  // encore debout). Mieux vaut refuser l'audit que livrer une analyse inventee.
  if (!homepageRes.text || homepageRes.status === 0) {
    throw new Error(`Impossible de charger ${domain}. Verifiez l'URL.`);
  }

  const homepage = analyzePage(url, homepageRes.text, homepageRes.status, homepageRes.time);
  const robotsTxt = analyzeRobotsTxt(robotsRes.text, robotsRes.status === 200);
  const sitemap = analyzeSitemap(sitemapRes.text, sitemapRes.status === 200);

  const scores = calculateScores(homepage, robotsTxt, sitemap);
  const { grade, label } = getGrade(scores.global);
  const issues = findIssues(homepage, robotsTxt, sitemap);
  const strengths = findStrengths(homepage, robotsTxt, sitemap);

  return {
    url, domain,
    fetchedAt: new Date().toISOString(),
    homepage, robotsTxt, sitemap,
    scores, grade, gradeLabel: label,
    issues, strengths,
  };
}
