import * as cheerio from "cheerio";

export interface RobotsResult {
  domain: string;
  url: string;
  urlsDiscovered: number;
  robotsTxt: string;
  sitemapXml: string;
  internalLinks: string[];
}

function normalizeUrl(raw: string): string {
  let url = raw.trim();
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = `https://${url}`;
  }
  // Remove trailing slash
  return url.replace(/\/+$/, "");
}

function extractDomain(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return url.replace(/https?:\/\//, "").split("/")[0];
  }
}

export async function generateRobotsSitemap(rawUrl: string): Promise<RobotsResult> {
  const url = normalizeUrl(rawUrl);
  const domain = extractDomain(url);

  // Fetch homepage
  let html = "";
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; ConvertiLabBot/1.0; +https://www.convertilab.com)",
        "Accept": "text/html,application/xhtml+xml",
      },
      signal: AbortSignal.timeout(15000),
    });
    html = await response.text();
  } catch {
    throw new Error(`Impossible de se connecter a ${url}. Verifiez que le site est accessible.`);
  }

  // Parse with cheerio to discover internal links
  const $ = cheerio.load(html);
  const discoveredPaths = new Set<string>();
  discoveredPaths.add("/"); // Always include homepage

  $("a[href]").each((_, el) => {
    const href = $(el).attr("href");
    if (!href) return;

    try {
      // Relative paths
      if (href.startsWith("/") && !href.startsWith("//")) {
        const path = href.split("?")[0].split("#")[0];
        if (path && path !== "/" && !path.match(/\.(jpg|jpeg|png|gif|svg|webp|pdf|zip|css|js|ico|xml|txt|woff|woff2|ttf|eot)$/i)) {
          discoveredPaths.add(path);
        }
        return;
      }

      // Absolute URLs on same domain
      const parsed = new URL(href, url);
      if (parsed.hostname === domain || parsed.hostname === `www.${domain}` || `www.${parsed.hostname}` === domain) {
        const path = parsed.pathname.split("?")[0].split("#")[0];
        if (path && !path.match(/\.(jpg|jpeg|png|gif|svg|webp|pdf|zip|css|js|ico|xml|txt|woff|woff2|ttf|eot)$/i)) {
          discoveredPaths.add(path);
        }
      }
    } catch {
      // Invalid URL, skip
    }
  });

  // Sort and build internal links list
  const internalLinks = Array.from(discoveredPaths).sort((a, b) => {
    // Homepage first, then alphabetical
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  });

  // Generate robots.txt
  const robotsTxt = [
    "# robots.txt genere par ConvertiLab",
    `# Site : ${url}`,
    `# Date : ${new Date().toISOString().split("T")[0]}`,
    "",
    "User-agent: *",
    "Allow: /",
    "Disallow: /admin",
    "Disallow: /api",
    "Disallow: /private",
    "",
    "# AI Bots",
    "User-agent: GPTBot",
    "Allow: /",
    "",
    "User-agent: ClaudeBot",
    "Allow: /",
    "",
    "User-agent: PerplexityBot",
    "Allow: /",
    "",
    "User-agent: Google-Extended",
    "Allow: /",
    "",
    `Sitemap: ${url}/sitemap.xml`,
    "",
  ].join("\n");

  // Generate sitemap.xml
  const today = new Date().toISOString().split("T")[0];
  const sitemapEntries = internalLinks.map((path) => {
    const fullUrl = path === "/" ? url : `${url}${path}`;
    const priority = path === "/" ? "1.0" : path.split("/").filter(Boolean).length === 1 ? "0.8" : "0.6";
    return `  <url>\n    <loc>${fullUrl}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
  });

  const sitemapXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...sitemapEntries,
    "</urlset>",
    "",
  ].join("\n");

  return {
    domain,
    url,
    urlsDiscovered: internalLinks.length,
    robotsTxt,
    sitemapXml,
    internalLinks,
  };
}
