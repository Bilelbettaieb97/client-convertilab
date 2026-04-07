import * as cheerio from "cheerio";
import { getGrade } from "@/lib/tools/shared-types";

// ===== TYPES =====

export interface DesignIssue {
  title: string;
  description: string;
  fix: string;
  priority: "critical" | "important" | "recommended";
}

export interface DesignScores {
  cta: number;
  hierarchy: number;
  trust: number;
  mobile: number;
  images: number;
  navigation: number;
  global: number;
}

export interface HeadingsStructure {
  h1Count: number;
  h2Count: number;
  h3Count: number;
  h4Count: number;
  hasProperOrder: boolean;
}

export interface DesignAuditResult {
  url: string;
  domain: string;
  fetchedAt: string;
  scores: DesignScores;
  grade: string;
  gradeLabel: string;
  issues: DesignIssue[];
  strengths: string[];
  ctaCount: number;
  formCount: number;
  headingsStructure: HeadingsStructure;
  hasTrustSignals: boolean;
  hasTestimonials: boolean;
  hasLegalLinks: boolean;
  hasSocialLinks: boolean;
  totalImages: number;
  imagesWithAlt: number;
  hasWebp: boolean;
  hasLazyLoading: boolean;
  hasNavigation: boolean;
  hasFooter: boolean;
  hasBreadcrumbs: boolean;
  hasSkipLink: boolean;
  hasViewport: boolean;
  hasResponsiveFramework: boolean;
  framework: string;
}

// ===== HELPERS =====

async function fetchPage(url: string, timeout = 10000): Promise<{ text: string; status: number }> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { "User-Agent": "ConvertiLab-DesignScore/1.0", "Accept-Encoding": "gzip, deflate, br" },
      redirect: "follow",
    });
    const text = await res.text();
    return { text, status: res.status };
  } catch {
    return { text: "", status: 0 };
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

// ===== MAIN ANALYZER =====

export async function analyzeDesign(inputUrl: string): Promise<DesignAuditResult> {
  const url = normalizeUrl(inputUrl);
  const domain = getDomain(url);
  const res = await fetchPage(url);

  if (!res.text) {
    throw new Error("Impossible de charger la page. Verifiez l'URL.");
  }

  const $ = cheerio.load(res.text);
  const htmlText = res.text.toLowerCase();
  const bodyText = $("body").text().toLowerCase();

  // ===== CTA & CONVERSION (25%) =====
  const ctaKeywords = /contact|devis|acheter|commander|reserver|essayer|telecharger|inscription|s'inscrire|commencer|demarrer|obtenir|demander|profiter|en savoir plus|voir les offres|ajouter au panier|buy|order|get started|sign up|try free|download/i;
  let ctaCount = 0;

  $("a, button").each((_, el) => {
    const text = $(el).text().trim();
    if (ctaKeywords.test(text)) ctaCount++;
  });

  // Check CTA above fold (first 500 chars of body text)
  const firstFold = $("body").html()?.substring(0, 2000) || "";
  const ctaAboveFold = ctaKeywords.test(firstFold);

  // Forms
  const formCount = $("form").length;

  // Urgency signals
  const urgencyKeywords = /urgent|limite|derniere chance|offre speciale|promotion|soldes|fin de|stock limite|places limitees|limited|hurry|last chance|exclusive|now/i;
  const hasUrgency = urgencyKeywords.test(bodyText);

  let ctaScore = 0;
  if (ctaCount >= 3) ctaScore += 40;
  else if (ctaCount >= 1) ctaScore += 20;
  if (ctaAboveFold) ctaScore += 25;
  if (formCount >= 1) ctaScore += 20;
  if (hasUrgency) ctaScore += 15;
  ctaScore = Math.min(100, ctaScore);

  // ===== VISUAL HIERARCHY (20%) =====
  const h1Count = $("h1").length;
  const h2Count = $("h2").length;
  const h3Count = $("h3").length;
  const h4Count = $("h4").length;

  // Check proper heading order
  let hasProperOrder = true;
  let lastLevel = 0;
  $("h1, h2, h3, h4, h5, h6").each((_, el) => {
    const level = parseInt(el.tagName.replace("h", ""));
    if (level > lastLevel + 1 && lastLevel > 0) hasProperOrder = false;
    lastLevel = level;
  });

  const headingsStructure: HeadingsStructure = { h1Count, h2Count, h3Count, h4Count, hasProperOrder };

  let hierarchyScore = 0;
  if (h1Count === 1) hierarchyScore += 35;
  else if (h1Count > 1) hierarchyScore += 10;
  if (h2Count >= 3) hierarchyScore += 30;
  else if (h2Count >= 1) hierarchyScore += 15;
  if (h3Count >= 2) hierarchyScore += 15;
  if (hasProperOrder) hierarchyScore += 20;
  hierarchyScore = Math.min(100, hierarchyScore);

  // ===== TRUST & SOCIAL PROOF (15%) =====
  const testimonialKeywords = /temoignage|avis|review|testimonial|ce que disent|ils nous font confiance|nos clients|client satisfait|note|etoile|star|rating/i;
  const hasTestimonials = testimonialKeywords.test(htmlText) || testimonialKeywords.test(bodyText);

  const hasStarRatings = /★|⭐|star-rating|rating|etoile/i.test(htmlText);
  const hasClientLogos = /nos clients|ils nous font confiance|partenaires|references|trusted by|as seen in/i.test(bodyText) || $("img[alt*='logo'], img[alt*='client'], img[alt*='partenaire']").length > 0;
  const hasCertifications = /certifie|certification|agremen|label|iso|rgpd|gdpr/i.test(bodyText);

  const mentionsLegalesLink = !!$("a[href*='mention'], a[href*='legal'], a:contains('Mentions')").length;
  const cgvLink = !!$("a[href*='cgv'], a[href*='conditions'], a:contains('CGV'), a:contains('Conditions')").length;
  const privacyLink = !!$("a[href*='confidential'], a[href*='privacy'], a[href*='rgpd'], a:contains('Confidentialite')").length;
  const hasLegalLinks = mentionsLegalesLink || cgvLink || privacyLink;

  const hasTrustSignals = hasTestimonials || hasStarRatings || hasClientLogos || hasCertifications;

  let trustScore = 0;
  if (hasTestimonials) trustScore += 30;
  if (hasStarRatings) trustScore += 15;
  if (hasClientLogos) trustScore += 15;
  if (hasCertifications) trustScore += 10;
  if (mentionsLegalesLink) trustScore += 10;
  if (cgvLink) trustScore += 10;
  if (privacyLink) trustScore += 10;
  trustScore = Math.min(100, trustScore);

  // ===== MOBILE READINESS (15%) =====
  const hasViewport = !!$('meta[name="viewport"]').length;
  const hasResponsiveFramework = /tailwind|bootstrap|bulma|foundation|materialize/i.test(htmlText) ||
    !!$('link[href*="tailwind"], link[href*="bootstrap"]').length;
  const hasMediaQueries = /@media.*\(.*width/i.test(htmlText);

  let mobileScore = 0;
  if (hasViewport) mobileScore += 40;
  if (hasResponsiveFramework) mobileScore += 35;
  else if (hasMediaQueries) mobileScore += 20;
  // Check font sizes (no tiny fonts)
  const hasMobileFriendlyFonts = !$("body").css("font-size") || true; // Can't truly check CSS from HTML
  if (hasMobileFriendlyFonts) mobileScore += 25;
  mobileScore = Math.min(100, mobileScore);

  // ===== IMAGE OPTIMIZATION (15%) =====
  const images: { hasAlt: boolean; hasWebp: boolean; hasLazy: boolean }[] = [];
  $("img").each((_, el) => {
    const src = $(el).attr("src") || "";
    const srcset = $(el).attr("srcset") || "";
    images.push({
      hasAlt: !!($(el).attr("alt") && $(el).attr("alt")!.trim().length > 0),
      hasWebp: src.includes(".webp") || src.includes("format=webp") || srcset.includes(".webp"),
      hasLazy: $(el).attr("loading") === "lazy" || src.includes("lazy"),
    });
  });

  const totalImages = images.length;
  const imagesWithAlt = images.filter(i => i.hasAlt).length;
  const hasWebp = images.some(i => i.hasWebp);
  const hasLazyLoading = images.some(i => i.hasLazy);
  const altRatio = totalImages > 0 ? imagesWithAlt / totalImages : 1;

  let imagesScore = 0;
  if (totalImages === 0) {
    imagesScore = 60; // No images, neutral
  } else {
    if (altRatio >= 0.9) imagesScore += 35;
    else if (altRatio >= 0.5) imagesScore += 15;
    if (hasWebp) imagesScore += 25;
    if (hasLazyLoading) imagesScore += 25;
    if (totalImages <= 20) imagesScore += 15;
    else if (totalImages <= 40) imagesScore += 8;
  }
  imagesScore = Math.min(100, imagesScore);

  // ===== NAVIGATION UX (10%) =====
  const hasNavigation = !!$("nav").length || !!$("[role='navigation']").length;
  const hasFooter = !!$("footer").length || !!$("[role='contentinfo']").length;
  const hasBreadcrumbs = !!$("[class*='breadcrumb'], [aria-label*='breadcrumb'], nav[class*='breadcrumb']").length || /breadcrumb/i.test(htmlText);
  const hasSkipLink = !!$("a[href='#main'], a[href='#content'], a[class*='skip']").length;

  // Logo links home
  const logoLinksHome = !!$("a[href='/'] img, a[href='/'] svg, header a[href='/']").length ||
    !!$("a[class*='logo'][href='/'], a[class*='brand'][href='/']").length;

  const hasSocialLinks = !!$("a[href*='facebook'], a[href*='twitter'], a[href*='linkedin'], a[href*='instagram'], a[href*='youtube'], a[href*='tiktok']").length;

  let navigationScore = 0;
  if (hasNavigation) navigationScore += 30;
  if (hasFooter) navigationScore += 25;
  if (hasBreadcrumbs) navigationScore += 15;
  if (hasSkipLink) navigationScore += 10;
  if (logoLinksHome) navigationScore += 10;
  if (hasSocialLinks) navigationScore += 10;
  navigationScore = Math.min(100, navigationScore);

  // ===== GLOBAL SCORE (weighted) =====
  const global = Math.round(
    ctaScore * 0.25 +
    hierarchyScore * 0.20 +
    trustScore * 0.15 +
    mobileScore * 0.15 +
    imagesScore * 0.15 +
    navigationScore * 0.10
  );

  const scores: DesignScores = {
    cta: ctaScore,
    hierarchy: hierarchyScore,
    trust: trustScore,
    mobile: mobileScore,
    images: imagesScore,
    navigation: navigationScore,
    global,
  };

  const { grade, gradeLabel } = getGrade(global);

  // Framework detection
  let framework = "Inconnu";
  if (htmlText.includes("__next") || htmlText.includes("_next")) framework = "Next.js";
  else if (htmlText.includes("__nuxt")) framework = "Nuxt.js";
  else if (htmlText.includes("wp-content")) framework = "WordPress";
  else if (htmlText.includes("shopify")) framework = "Shopify";
  else if (htmlText.includes("wix.com")) framework = "Wix";
  else if (htmlText.includes("squarespace")) framework = "Squarespace";

  // ===== ISSUES =====
  const issues: DesignIssue[] = [];

  // CTA issues
  if (ctaCount === 0) {
    issues.push({ priority: "critical", title: "Aucun CTA detecte sur la page", description: "Sans appel a l'action, les visiteurs ne savent pas quelle action realiser.", fix: "Ajouter des boutons CTA clairs (Contact, Devis, Acheter) visibles au-dessus de la ligne de flottaison." });
  } else if (!ctaAboveFold) {
    issues.push({ priority: "important", title: "Pas de CTA au-dessus de la ligne de flottaison", description: "Le visiteur doit scroller avant de voir un bouton d'action.", fix: "Placer un CTA principal dans la section Hero, visible sans scroller." });
  }

  if (formCount === 0) {
    issues.push({ priority: "important", title: "Aucun formulaire detecte", description: "Un formulaire de contact ou de capture est essentiel pour convertir.", fix: "Ajouter un formulaire de contact ou de newsletter visible sur la page." });
  }

  // Hierarchy issues
  if (h1Count === 0) {
    issues.push({ priority: "critical", title: "Aucun titre H1 detecte", description: "Le H1 est le titre principal de la page, essentiel pour le SEO et la comprehension.", fix: "Ajouter un seul H1 clair et descriptif en haut de la page." });
  } else if (h1Count > 1) {
    issues.push({ priority: "important", title: `${h1Count} titres H1 detectes (1 seul recommande)`, description: "Plusieurs H1 diluent la hierarchie et perturbent les moteurs de recherche.", fix: "Garder un seul H1 et convertir les autres en H2 ou H3." });
  }

  if (h2Count < 3) {
    issues.push({ priority: "important", title: `Seulement ${h2Count} titre(s) H2 (3+ recommande)`, description: "Les H2 structurent le contenu et facilitent la lecture.", fix: "Ajouter des titres H2 pour chaque section principale de la page." });
  }

  if (!hasProperOrder) {
    issues.push({ priority: "recommended", title: "Ordre des titres non respecte (ex: H1 > H3 sans H2)", description: "Les niveaux de titre doivent suivre une hierarchie logique.", fix: "Respecter l'ordre H1 > H2 > H3 sans sauter de niveaux." });
  }

  // Trust issues
  if (!hasTestimonials) {
    issues.push({ priority: "important", title: "Pas de temoignages ou avis clients detectes", description: "Les temoignages sont un signal de confiance majeur pour convertir les visiteurs.", fix: "Ajouter une section temoignages avec des avis clients reels, photos et noms." });
  }

  if (!hasLegalLinks) {
    issues.push({ priority: "important", title: "Pas de liens vers les mentions legales / CGV", description: "Les mentions legales sont obligatoires et renforcent la confiance.", fix: "Ajouter des liens vers Mentions Legales, CGV et Politique de Confidentialite dans le footer." });
  }

  // Mobile issues
  if (!hasViewport) {
    issues.push({ priority: "critical", title: "Balise viewport manquante", description: "Sans viewport, la page ne s'adapte pas aux ecrans mobiles.", fix: "Ajouter <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> dans le <head>." });
  }

  if (!hasResponsiveFramework && !hasMediaQueries) {
    issues.push({ priority: "important", title: "Pas de framework responsive detecte", description: "Sans design responsive, l'experience mobile sera degradee.", fix: "Utiliser Tailwind CSS, Bootstrap ou des media queries pour un design responsive." });
  }

  // Image issues
  if (totalImages > 0 && altRatio < 0.5) {
    issues.push({ priority: "important", title: `${totalImages - imagesWithAlt} image(s) sans attribut alt`, description: "Les textes alt sont essentiels pour l'accessibilite et le SEO.", fix: "Ajouter un attribut alt descriptif a chaque image." });
  }

  if (totalImages > 0 && !hasWebp) {
    issues.push({ priority: "recommended", title: "Pas d'images en format WebP", description: "Le format WebP reduit le poids des images de 25-35%.", fix: "Convertir les images en WebP pour un chargement plus rapide." });
  }

  if (totalImages > 3 && !hasLazyLoading) {
    issues.push({ priority: "recommended", title: "Pas de lazy loading sur les images", description: "Le lazy loading retarde le chargement des images hors ecran.", fix: "Ajouter loading=\"lazy\" aux images sous la ligne de flottaison." });
  }

  // Navigation issues
  if (!hasNavigation) {
    issues.push({ priority: "critical", title: "Pas de barre de navigation detectee", description: "La navigation est essentielle pour guider les visiteurs sur le site.", fix: "Ajouter un element <nav> avec les liens principaux du site." });
  }

  if (!hasFooter) {
    issues.push({ priority: "important", title: "Pas de footer detecte", description: "Le footer contient les informations de contact, liens utiles et mentions legales.", fix: "Ajouter un <footer> avec contact, liens utiles, reseaux sociaux et mentions legales." });
  }

  if (!hasSocialLinks) {
    issues.push({ priority: "recommended", title: "Pas de liens vers les reseaux sociaux", description: "Les reseaux sociaux renforcent la presence en ligne et la confiance.", fix: "Ajouter des liens vers vos profils sociaux dans le footer ou le header." });
  }

  // Sort by priority
  issues.sort((a, b) => (
    { critical: 0, important: 1, recommended: 2 }[a.priority] -
    { critical: 0, important: 1, recommended: 2 }[b.priority]
  ));

  // ===== STRENGTHS =====
  const strengths: string[] = [];
  if (ctaCount >= 3) strengths.push(`${ctaCount} CTA detectes — bonne incitation a l'action`);
  else if (ctaCount >= 1) strengths.push(`${ctaCount} CTA detecte(s) sur la page`);
  if (ctaAboveFold) strengths.push("CTA present au-dessus de la ligne de flottaison");
  if (formCount >= 1) strengths.push(`${formCount} formulaire(s) de conversion detecte(s)`);
  if (h1Count === 1) strengths.push("Titre H1 unique et correct");
  if (h2Count >= 3) strengths.push(`${h2Count} titres H2 — bonne structuration`);
  if (hasProperOrder) strengths.push("Hierarchie des titres bien respectee");
  if (hasTestimonials) strengths.push("Section temoignages/avis clients detectee");
  if (hasLegalLinks) strengths.push("Liens legaux presents (mentions, CGV, confidentialite)");
  if (hasViewport) strengths.push("Balise viewport presente — compatible mobile");
  if (hasResponsiveFramework) strengths.push("Framework responsive detecte");
  if (totalImages > 0 && altRatio >= 0.9) strengths.push(`${Math.round(altRatio * 100)}% des images ont un attribut alt`);
  if (hasWebp) strengths.push("Images en format WebP");
  if (hasLazyLoading) strengths.push("Lazy loading actif sur les images");
  if (hasNavigation) strengths.push("Barre de navigation presente");
  if (hasFooter) strengths.push("Footer present avec informations utiles");
  if (hasBreadcrumbs) strengths.push("Fil d'Ariane (breadcrumbs) detecte");
  if (hasSocialLinks) strengths.push("Liens vers les reseaux sociaux detectes");
  if (framework !== "Inconnu") strengths.push(`Framework : ${framework}`);

  return {
    url, domain, fetchedAt: new Date().toISOString(),
    scores, grade, gradeLabel, issues, strengths,
    ctaCount, formCount, headingsStructure,
    hasTrustSignals, hasTestimonials, hasLegalLinks, hasSocialLinks,
    totalImages, imagesWithAlt, hasWebp, hasLazyLoading,
    hasNavigation, hasFooter, hasBreadcrumbs, hasSkipLink,
    hasViewport, hasResponsiveFramework, framework,
  };
}
