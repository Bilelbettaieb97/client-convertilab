import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { createToolHandler } from "@/lib/tools/shared-api-handler";
import { buildToolEmailHtml } from "@/lib/tools/shared-email-template";
import { compareSites } from "@/lib/comparison/comparator";
import { ComparisonPdf } from "@/lib/comparison/pdf-template";
import type { ComparisonResult } from "@/lib/comparison/comparator";
import type { LeadInfo } from "@/lib/tools/shared-types";

export const maxDuration = 120;
export const dynamic = "force-dynamic";

interface ComparisonInput {
  urlA: string;
  urlB: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
}

export const POST = createToolHandler<ComparisonInput, ComparisonResult>({
  toolName: "Comparateur Sites",
  tableName: "site_comparisons",

  validate(body) {
    const urlA = body.urlA as string;
    const urlB = body.urlB as string;
    const name = body.name as string;
    const email = body.email as string;
    const phone = body.phone as string | undefined;
    const company = body.company as string | undefined;

    if (!name || !email || !urlA || !urlB) {
      throw new Error("Nom, email et les deux URLs sont requis.");
    }

    return { urlA, urlB, name, email, phone, company };
  },

  async analyze(input) {
    return compareSites(input.urlA, input.urlB);
  },

  async generatePdf(result) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const buffer = await renderToBuffer(React.createElement(ComparisonPdf, { result }) as any);
    return Buffer.from(buffer);
  },

  buildEmailSubject(result) {
    return `Comparatif SEO — ${result.siteA.domain} vs ${result.siteB.domain}`;
  },

  buildEmailHtml(lead: LeadInfo, result: ComparisonResult, isPdf: boolean) {
    const winnerDomain = result.winner === "A" ? result.siteA.domain : result.winner === "B" ? result.siteB.domain : "Egalite";
    return buildToolEmailHtml({
      toolLabel: "Comparatif SEO",
      lead,
      highlights: [
        `Site A (${result.siteA.domain}): ${result.siteA.scores.global}/100`,
        `Site B (${result.siteB.domain}): ${result.siteB.scores.global}/100`,
        `Gagnant: ${winnerDomain}`,
      ],
      isPdf,
      ctaText: "Depasser votre concurrent",
      ctaUrl: "https://www.convertilab.com/contact",
    });
  },

  buildSupabaseRow(lead: LeadInfo, result: ComparisonResult) {
    return {
      url_a: result.siteA.url,
      domain_a: result.siteA.domain,
      url_b: result.siteB.url,
      domain_b: result.siteB.domain,
      score_a: result.siteA.scores.global,
      score_b: result.siteB.scores.global,
      winner: result.winner,
    };
  },

  buildResponsePayload(result: ComparisonResult) {
    return {
      comparison: {
        siteA: {
          domain: result.siteA.domain,
          score: result.siteA.scores.global,
          grade: result.siteA.grade,
          gradeLabel: result.siteA.gradeLabel,
          strengths: result.siteA.strengths.slice(0, 3),
          issues: result.siteA.issues.slice(0, 3),
        },
        siteB: {
          domain: result.siteB.domain,
          score: result.siteB.scores.global,
          grade: result.siteB.grade,
          gradeLabel: result.siteB.gradeLabel,
          strengths: result.siteB.strengths.slice(0, 3),
          issues: result.siteB.issues.slice(0, 3),
        },
        winner: result.winner,
        categories: result.categories,
      },
    };
  },
});
