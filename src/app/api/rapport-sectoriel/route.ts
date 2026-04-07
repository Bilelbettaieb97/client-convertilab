import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { createToolHandler } from "@/lib/tools/shared-api-handler";
import { buildToolEmailHtml } from "@/lib/tools/shared-email-template";
import { generateSectorReport } from "@/lib/sectorial/report";
import { SectorReportPdf } from "@/lib/sectorial/pdf-template";
import type { SectorReportResult } from "@/lib/sectorial/report";
import type { LeadInfo } from "@/lib/tools/shared-types";

export const maxDuration = 60;
export const dynamic = "force-dynamic";

interface SectorReportInput {
  sectorSlug: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
}

export const POST = createToolHandler<SectorReportInput, SectorReportResult>({
  toolName: "Rapport Sectoriel",
  tableName: "sector_reports",

  validate(body) {
    const sectorSlug = body.sectorSlug as string;
    const name = body.name as string;
    const email = body.email as string;
    const phone = body.phone as string | undefined;
    const company = body.company as string | undefined;

    if (!name || !email || !sectorSlug) {
      throw new Error("Nom, email et secteur sont requis.");
    }

    return { sectorSlug, name, email, phone, company };
  },

  async analyze(input) {
    return generateSectorReport(input.sectorSlug);
  },

  async generatePdf(report) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const buffer = await renderToBuffer(React.createElement(SectorReportPdf, { report }) as any);
    return Buffer.from(buffer);
  },

  buildEmailSubject(report) {
    return `Votre Rapport Digital — Secteur ${report.sector.name}`;
  },

  buildEmailHtml(lead: LeadInfo, report: SectorReportResult, isPdf: boolean) {
    return buildToolEmailHtml({
      toolLabel: "Rapport Sectoriel",
      lead,
      highlights: report.painPoints.slice(0, 3),
      isPdf,
      ctaText: "Lancer mon projet digital",
      ctaUrl: "https://convertilab.com/contact",
    });
  },

  buildSupabaseRow(lead: LeadInfo, report: SectorReportResult) {
    return {
      sector_slug: report.sector.slug,
      sector_name: report.sector.name,
    };
  },

  buildResponsePayload(report: SectorReportResult) {
    return {
      report: {
        sectorName: report.sector.name,
        sectorEmoji: report.sector.emoji,
        stats: report.stats,
        painPoints: report.painPoints,
        solutions: report.solutions.slice(0, 3),
        checklistCount: report.checklist.length,
        essentialCount: report.checklist.filter((c) => c.essential).length,
      },
    };
  },
});
