import { createToolHandler } from "@/lib/tools/shared-api-handler";
import { buildToolEmailHtml } from "@/lib/tools/shared-email-template";
import { generateRobotsSitemap } from "@/lib/robots/generator";
import type { RobotsResult } from "@/lib/robots/generator";
import type { LeadInfo } from "@/lib/tools/shared-types";

export const maxDuration = 60;
export const dynamic = "force-dynamic";

interface RobotsApiInput {
  url: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
}

export const POST = createToolHandler<RobotsApiInput, RobotsResult>({
  toolName: "Robots & Sitemap",
  tableName: "robots_generations",

  validate(body) {
    const url = body.url as string;
    const name = body.name as string;
    const email = body.email as string;
    const phone = body.phone as string | undefined;
    const company = body.company as string | undefined;

    if (!url || !name || !email) {
      throw new Error("URL, nom et email sont requis.");
    }

    return { url, name, email, phone, company };
  },

  async analyze(input) {
    return generateRobotsSitemap(input.url);
  },

  async generatePdf() {
    // No PDF for this tool — we use extra attachments instead
    return Buffer.alloc(0);
  },

  buildExtraAttachments(result: RobotsResult) {
    return [
      { filename: "robots.txt", content: Buffer.from(result.robotsTxt, "utf-8") },
      { filename: "sitemap.xml", content: Buffer.from(result.sitemapXml, "utf-8") },
    ];
  },

  buildEmailSubject(result: RobotsResult) {
    return `Vos fichiers robots.txt & sitemap.xml — ${result.domain}`;
  },

  buildEmailHtml(lead: LeadInfo, result: RobotsResult, isPdf: boolean) {
    return buildToolEmailHtml({
      toolLabel: "Generateur robots.txt & sitemap",
      lead,
      domain: result.domain,
      highlights: [
        `${result.urlsDiscovered} URLs decouvertes`,
        "robots.txt optimise avec regles AI bots",
        "sitemap.xml pret a deployer",
      ],
      isPdf,
    });
  },

  buildSupabaseRow(lead: LeadInfo, result: RobotsResult) {
    return {
      website_url: result.url,
      domain: result.domain,
      urls_discovered: result.urlsDiscovered,
    };
  },

  buildResponsePayload(result: RobotsResult) {
    return {
      result: {
        domain: result.domain,
        url: result.url,
        urlsDiscovered: result.urlsDiscovered,
        robotsTxt: result.robotsTxt,
        internalLinks: result.internalLinks,
      },
    };
  },
});
