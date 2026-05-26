import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { createToolHandler } from "@/lib/tools/shared-api-handler";
import { buildToolEmailHtml } from "@/lib/tools/shared-email-template";
import { analyzeDesign } from "@/lib/design/analyzer";
import { DesignAuditPdf } from "@/lib/design/pdf-template";
import type { DesignAuditResult } from "@/lib/design/analyzer";
import type { LeadInfo } from "@/lib/tools/shared-types";

export const maxDuration = 60;
export const dynamic = "force-dynamic";

interface DesignScoreInput {
  url: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
}

export const POST = createToolHandler<DesignScoreInput, DesignAuditResult>({
  toolName: "Design Score",
  tableName: "design_audits",

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
    return analyzeDesign(input.url);
  },

  async generatePdf(audit) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const buffer = await renderToBuffer(React.createElement(DesignAuditPdf, { audit }) as any);
    return Buffer.from(buffer);
  },

  buildEmailSubject(audit) {
    return `Votre Audit Design & UX — ${audit.domain} — Score: ${audit.scores.global}/100 (${audit.grade})`;
  },

  buildEmailHtml(lead: LeadInfo, audit: DesignAuditResult, isPdf: boolean) {
    return buildToolEmailHtml({
      toolLabel: "Audit Design & UX",
      lead,
      domain: audit.domain,
      score: audit.scores.global,
      grade: audit.grade,
      gradeLabel: audit.gradeLabel,
      highlights: audit.strengths.slice(0, 3),
      warnings: audit.issues.slice(0, 3).map(i => i.title),
      isPdf,
    });
  },

  buildSupabaseRow(lead: LeadInfo, audit: DesignAuditResult) {
    return {
      website_url: audit.url,
      domain: audit.domain,
      score_global: audit.scores.global,
      score_cta: audit.scores.cta,
      score_hierarchy: audit.scores.hierarchy,
      score_trust: audit.scores.trust,
      score_mobile: audit.scores.mobile,
      score_images: audit.scores.images,
      score_navigation: audit.scores.navigation,
      grade: audit.grade,
      issues_count: audit.issues.length,
    };
  },

  buildPipedriveFields(audit: DesignAuditResult) {
    return {
      domain: audit.domain,
      score_global: audit.scores.global,
      grade: audit.grade,
      critical_count: audit.issues.filter(i => i.priority === "critical").length,
    };
  },

  buildResponsePayload(audit: DesignAuditResult) {
    return {
      audit: {
        domain: audit.domain,
        scores: audit.scores,
        grade: audit.grade,
        gradeLabel: audit.gradeLabel,
        issues: audit.issues.slice(0, 5),
        strengths: audit.strengths.slice(0, 5),
        totalIssues: audit.issues.length,
        criticalIssues: audit.issues.filter(i => i.priority === "critical").length,
        ctaCount: audit.ctaCount,
        formCount: audit.formCount,
      },
    };
  },
});
