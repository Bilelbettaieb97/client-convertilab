import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { createToolHandler } from "@/lib/tools/shared-api-handler";
import { buildToolEmailHtml } from "@/lib/tools/shared-email-template";
import { analyzeSpeed } from "@/lib/speed/analyzer";
import { SpeedAuditPdf } from "@/lib/speed/pdf-template";
import type { SpeedAuditResult } from "@/lib/speed/analyzer";
import type { LeadInfo } from "@/lib/tools/shared-types";
import { firstName } from "@/lib/email-series";

export const maxDuration = 60;
export const dynamic = "force-dynamic";

interface SpeedCheckInput {
  url: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
}

export const POST = createToolHandler<SpeedCheckInput, SpeedAuditResult>({
  toolName: "Speed Check",
  tableName: "speed_audits",

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
    return analyzeSpeed(input.url);
  },

  async generatePdf(audit) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const buffer = await renderToBuffer(React.createElement(SpeedAuditPdf, { audit }) as any);
    return Buffer.from(buffer);
  },

  buildEmailSubject(audit) {
    return `Votre Audit Vitesse — ${audit.domain} — Score: ${audit.scores.global}/100 (${audit.grade})`;
  },

  buildEmailHtml(lead: LeadInfo, audit: SpeedAuditResult, isPdf: boolean) {
    return buildToolEmailHtml({
      toolLabel: "Audit de Vitesse",
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

  buildSupabaseRow(lead: LeadInfo, audit: SpeedAuditResult) {
    return {
      website_url: audit.url,
      domain: audit.domain,
      score_global: audit.scores.global,
      score_server: audit.scores.server,
      score_weight: audit.scores.weight,
      score_assets: audit.scores.assets,
      score_blocking: audit.scores.blocking,
      score_practices: audit.scores.practices,
      grade: audit.grade,
      issues_count: audit.issues.length,
    };
  },

  buildPipedriveFields(audit: SpeedAuditResult) {
    return {
      domain: audit.domain,
      score_global: audit.scores.global,
      grade: audit.grade,
      critical_count: audit.issues.filter(i => i.priority === "critical").length,
    };
  },

  buildSeriesContext(audit: SpeedAuditResult, lead: LeadInfo) {
    return {
      prenom: firstName(lead.name),
      domaine: audit.domain,
      score: String(audit.scores.global),
      grade: audit.grade,
    };
  },

  buildResponsePayload(audit: SpeedAuditResult) {
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
        responseTime: audit.responseTime,
        pageWeight: audit.pageWeight,
      },
    };
  },
});
