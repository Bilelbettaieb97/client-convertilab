import * as cheerio from "cheerio";
import { getGrade } from "@/lib/tools/shared-types";

// ===== TYPES =====

export interface SpeedIssue {
  title: string;
  description: string;
  fix: string;
  priority: "critical" | "important" | "recommended";
}

export interface SpeedAuditResult {
  url: string;
  domain: string;
  fetchedAt: string;
  responseTime: number;
  pageWeight: number;
  htmlSize: number;
  totalImages: number;
  imagesWithoutLazy: number;
  hasWebp: boolean;
  hasCompression: boolean;
  compressionType: string;
  scriptsTotal: number;
  scriptsBlocking: number;
  scriptsAsync: number;
  scriptsDefer: number;
  stylesheetsTotal: number;
  stylesheetsInline: number;
  hasPreconnect: boolean;
  hasPrefetch: boolean;
  hasFontPreload: boolean;
  hasCriticalCss: boolean;
  thirdPartyScripts: number;
  domDepth: number;
  hasViewport: boolean;
  framework: string;
  scores: SpeedScores;
  grade: string;
  gradeLabel: string;
  issues: SpeedIssue[];
  strengths: string[];
}

export interface SpeedScores {
  server: number;
  weight: number;
  assets: number;
  blocking: number;
  practices: number;
  global: number;
}

// ===== HELPERS =====

async function fetchWithTiming(url: string, timeout = 10000): Promise<{ text: string; status: number; time: number; contentLength: number; compressed: boolean; compressionType: string }> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  const start = Date.now();

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { "User-Agent": "ConvertiLab-SpeedCheck/1.0", "Accept-Encoding": "gzip, deflate, br" },
      redirect: "follow",
    });
    const text = await res.text();
    const encoding = res.headers.get("content-encoding") || "";
    return {
      text, status: res.status, time: Date.now() - start,
      contentLength: text.length,
      compressed: !!encoding,
      compressionType: encoding || "none",
    };
  } catch {
    return { text: "", status: 0, time: Date.now() - start, contentLength: 0, compressed: false, compressionType: "none" };
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
  try { return new URL(url).hostname; } catch { return url.replace(/https?:\/\//, "").split("/")[0]; }
}

function getDomDepth($: cheerio.CheerioAPI): number {
  let maxDepth = 0;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function walk(el: any, depth: number) {
    if (depth > maxDepth) maxDepth = depth;
    if (el.children) {
      for (const child of el.children) {
        if (child.tagName) walk(child, depth + 1);
      }
    }
  }
  const body = $("body")[0];
  if (body) walk(body, 0);
  return Math.min(maxDepth, 50);
}

// ===== MAIN ANALYZER =====

export async function analyzeSpeed(inputUrl: string): Promise<SpeedAuditResult> {
  const url = normalizeUrl(inputUrl);
  const domain = getDomain(url);
  const res = await fetchWithTiming(url);

  // Site injoignable : fetchWithTiming avale l'erreur et renvoie un corps vide,
  // ce qui produisait paradoxalement un excellent score (page ultra legere, aucun
  // script bloquant). On refuse d'auditer plutot que d'annoncer un score invente.
  if (!res.text || res.status === 0) {
    throw new Error("Impossible de charger la page. Verifiez l'URL.");
  }

  const $ = cheerio.load(res.text);

  // Images
  const images: { src: string; hasLazy: boolean; hasWebp: boolean }[] = [];
  $("img").each((_, el) => {
    const src = $(el).attr("src") || "";
    images.push({
      src,
      hasLazy: $(el).attr("loading") === "lazy" || src.includes("lazy"),
      hasWebp: src.includes(".webp") || src.includes("format=webp"),
    });
  });

  // Scripts
  let scriptsBlocking = 0, scriptsAsync = 0, scriptsDefer = 0;
  const scriptDomains = new Set<string>();
  $("script[src]").each((_, el) => {
    const src = $(el).attr("src") || "";
    if ($(el).attr("async") !== undefined) scriptsAsync++;
    else if ($(el).attr("defer") !== undefined) scriptsDefer++;
    else scriptsBlocking++;
    try { const u = new URL(src, url); if (u.hostname !== domain) scriptDomains.add(u.hostname); } catch {}
  });

  // Stylesheets
  let stylesheetsTotal = 0, stylesheetsInline = 0;
  $('link[rel="stylesheet"]').each(() => { stylesheetsTotal++; });
  $("style").each(() => { stylesheetsInline++; });

  // Performance hints
  const hasPreconnect = !!$('link[rel="preconnect"]').length;
  const hasPrefetch = !!$('link[rel="dns-prefetch"], link[rel="prefetch"]').length;
  const hasFontPreload = !!$('link[rel="preload"][as="font"]').length;
  const hasCriticalCss = stylesheetsInline > 0 || !!$('link[rel="preload"][as="style"]').length;
  const hasViewport = !!$('meta[name="viewport"]').length;

  // Framework
  let framework = "Inconnu";
  if (res.text.includes("__next") || res.text.includes("_next")) framework = "Next.js";
  else if (res.text.includes("__nuxt")) framework = "Nuxt.js";
  else if (res.text.includes("wp-content")) framework = "WordPress";

  const domDepth = getDomDepth($);

  // ===== SCORING =====

  // 1. Server Response (20%)
  let server = 100;
  if (res.time > 3000) server = 20;
  else if (res.time > 2000) server = 40;
  else if (res.time > 1000) server = 60;
  else if (res.time > 600) server = 80;

  // 2. Page Weight (25%)
  let weight = 100;
  const weightKb = res.contentLength / 1024;
  if (weightKb > 2000) weight = 20;
  else if (weightKb > 1000) weight = 40;
  else if (weightKb > 500) weight = 60;
  else if (weightKb > 200) weight = 80;

  // 3. Assets Optimization (25%)
  let assets = 100;
  const hasWebp = images.some(i => i.hasWebp);
  const lazyCount = images.filter(i => i.hasLazy).length;
  if (!hasWebp && images.length > 0) assets -= 25;
  if (lazyCount === 0 && images.length > 3) assets -= 25;
  if (!res.compressed) assets -= 30;
  if (!hasFontPreload) assets -= 10;
  assets = Math.max(0, assets);

  // 4. Render Blocking (20%)
  let blocking = 100;
  if (scriptsBlocking > 5) blocking = 20;
  else if (scriptsBlocking > 3) blocking = 50;
  else if (scriptsBlocking > 1) blocking = 70;
  else if (scriptsBlocking === 1) blocking = 85;
  if (!hasCriticalCss) blocking -= 15;
  blocking = Math.max(0, blocking);

  // 5. Best Practices (10%)
  let practices = 100;
  if (!hasViewport) practices -= 30;
  if (!hasPreconnect && !hasPrefetch) practices -= 20;
  if (scriptDomains.size > 5) practices -= 20;
  else if (scriptDomains.size > 3) practices -= 10;
  if (domDepth > 15) practices -= 20;
  practices = Math.max(0, practices);

  const global = Math.round(
    server * 0.20 + weight * 0.25 + assets * 0.25 + blocking * 0.20 + practices * 0.10
  );

  const scores: SpeedScores = { server, weight, assets, blocking, practices, global };
  const { grade, gradeLabel } = getGrade(global);

  // ===== ISSUES =====
  const issues: SpeedIssue[] = [];

  if (res.time > 2000) issues.push({ priority: "critical", title: `Temps de reponse eleve (${(res.time / 1000).toFixed(1)}s)`, description: "Un temps de reponse superieur a 2 secondes fait fuir les visiteurs et penalise le SEO.", fix: "Utiliser un CDN (Cloudflare, Vercel), optimiser le serveur, activer le cache." });
  else if (res.time > 1000) issues.push({ priority: "important", title: `Temps de reponse moyen (${(res.time / 1000).toFixed(1)}s)`, description: "L'ideal est sous 600ms. Un site plus rapide convertit mieux.", fix: "Activer le cache serveur, utiliser un CDN, reduire le TTFB." });

  if (!res.compressed) issues.push({ priority: "critical", title: "Pas de compression activee", description: "Sans gzip/brotli, le navigateur telecharge 2-3x plus de donnees.", fix: "Activer la compression gzip ou brotli dans la configuration du serveur ou de l'hebergeur." });

  if (weightKb > 1000) issues.push({ priority: "critical", title: `Page trop lourde (${Math.round(weightKb)} Ko)`, description: "Une page de plus de 1 Mo est tres lente sur mobile.", fix: "Compresser les images, minifier le CSS/JS, supprimer le code inutilise." });
  else if (weightKb > 500) issues.push({ priority: "important", title: `Page lourde (${Math.round(weightKb)} Ko)`, description: "Viser moins de 500 Ko pour une experience optimale.", fix: "Optimiser les images, utiliser le lazy loading, minifier les assets." });

  if (scriptsBlocking > 2) issues.push({ priority: "important", title: `${scriptsBlocking} scripts bloquants`, description: "Les scripts sans async/defer bloquent le rendu de la page.", fix: "Ajouter defer ou async aux balises <script> non critiques." });

  if (!hasWebp && images.length > 0) issues.push({ priority: "important", title: "Images non optimisees (pas de WebP)", description: "Le format WebP reduit le poids des images de 25-35% par rapport au JPEG/PNG.", fix: "Convertir les images en WebP. Avec Next.js, utiliser le composant Image." });

  if (images.length > 3 && lazyCount === 0) issues.push({ priority: "important", title: "Pas de lazy loading sur les images", description: "Toutes les images se chargent au debut, meme celles hors ecran.", fix: "Ajouter loading=\"lazy\" sur les images sous la ligne de flottaison." });

  if (scriptDomains.size > 3) issues.push({ priority: "recommended", title: `${scriptDomains.size} scripts tiers detectes`, description: "Chaque script tiers ajoute une requete DNS + connexion HTTP.", fix: "Reduire les scripts tiers, utiliser les preconnect, charger en defer." });

  if (!hasFontPreload) issues.push({ priority: "recommended", title: "Fonts non preloaded", description: "Sans preload, les polices se chargent tard et causent un flash de texte (FOIT).", fix: "Ajouter <link rel=\"preload\" as=\"font\" ...> pour les polices principales." });

  if (!hasCriticalCss) issues.push({ priority: "recommended", title: "Pas de CSS critique inline", description: "Le CSS critique inline accelere le First Contentful Paint.", fix: "Inliner le CSS above-the-fold et charger le reste en defer." });

  issues.sort((a, b) => ({ critical: 0, important: 1, recommended: 2 }[a.priority] - { critical: 0, important: 1, recommended: 2 }[b.priority]));

  // ===== STRENGTHS =====
  const strengths: string[] = [];
  if (res.time < 600) strengths.push(`Temps de reponse excellent (${(res.time / 1000).toFixed(1)}s)`);
  else if (res.time < 1000) strengths.push(`Bon temps de reponse (${(res.time / 1000).toFixed(1)}s)`);
  if (res.compressed) strengths.push(`Compression ${res.compressionType} activee`);
  if (hasWebp) strengths.push("Images en format WebP");
  if (lazyCount > 0) strengths.push(`Lazy loading actif (${lazyCount} images)`);
  if (scriptsBlocking <= 1) strengths.push("Scripts bien optimises (async/defer)");
  if (hasPreconnect) strengths.push("Preconnect active pour les ressources externes");
  if (hasFontPreload) strengths.push("Fonts preloaded — pas de flash de texte");
  if (hasCriticalCss) strengths.push("CSS critique inline detecte");
  if (framework !== "Inconnu") strengths.push(`Framework : ${framework}`);
  if (weightKb < 200) strengths.push(`Page legere (${Math.round(weightKb)} Ko)`);

  return {
    url, domain, fetchedAt: new Date().toISOString(),
    responseTime: res.time, pageWeight: res.contentLength, htmlSize: res.contentLength,
    totalImages: images.length, imagesWithoutLazy: images.length - lazyCount,
    hasWebp, hasCompression: res.compressed, compressionType: res.compressionType,
    scriptsTotal: scriptsBlocking + scriptsAsync + scriptsDefer,
    scriptsBlocking, scriptsAsync, scriptsDefer,
    stylesheetsTotal, stylesheetsInline,
    hasPreconnect, hasPrefetch, hasFontPreload, hasCriticalCss,
    thirdPartyScripts: scriptDomains.size, domDepth, hasViewport, framework,
    scores, grade, gradeLabel, issues, strengths,
  };
}
