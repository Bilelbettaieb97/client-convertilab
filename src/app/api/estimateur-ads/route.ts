import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { createToolHandler } from "@/lib/tools/shared-api-handler";
import { buildToolEmailHtml } from "@/lib/tools/shared-email-template";
import { calculateAdsProjection } from "@/lib/ads/calculator";
import { AdsEstimatorPdf } from "@/lib/ads/pdf-template";
import type { AdsProjectionResult } from "@/lib/ads/calculator";
import type { LeadInfo } from "@/lib/tools/shared-types";

export const maxDuration = 60;
export const dynamic = "force-dynamic";

interface AdsEstimatorInput {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  sector: string;
  city: string;
  budgetMonthly: number;
  avgBasket: number;
  platform: "google" | "meta" | "both";
}

export const POST = createToolHandler<AdsEstimatorInput, AdsProjectionResult>({
  toolName: "Estimateur Ads",
  tableName: "ads_estimations",

  validate(body) {
    const name = body.name as string;
    const email = body.email as string;
    const phone = body.phone as string | undefined;
    const company = body.company as string | undefined;
    const sector = body.sector as string;
    const city = (body.city as string) || "";
    const budgetMonthly = Number(body.budgetMonthly);
    const avgBasket = Number(body.avgBasket);
    const platform = body.platform as "google" | "meta" | "both";

    if (!name || !email || !sector || !budgetMonthly || !avgBasket || !platform) {
      throw new Error("Nom, email, secteur, budget mensuel, panier moyen et plateforme sont requis.");
    }

    if (budgetMonthly < 100) {
      throw new Error("Le budget mensuel minimum est de 100 euros.");
    }

    if (avgBasket < 1) {
      throw new Error("Le panier moyen doit etre superieur a 0.");
    }

    return { name, email, phone, company, sector, city, budgetMonthly, avgBasket, platform };
  },

  async analyze(input) {
    return calculateAdsProjection({
      sector: input.sector,
      city: input.city,
      budgetMonthly: input.budgetMonthly,
      avgBasket: input.avgBasket,
      platform: input.platform,
    });
  },

  async generatePdf(result) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const buffer = await renderToBuffer(React.createElement(AdsEstimatorPdf, { data: result }) as any);
    return Buffer.from(buffer);
  },

  buildEmailSubject(result) {
    return `Votre Estimation ROI Ads — ${result.sectorLabel} — ROAS: ${result.monthlyRoas}x`;
  },

  buildEmailHtml(lead: LeadInfo, result: AdsProjectionResult, isPdf: boolean) {
    return buildToolEmailHtml({
      toolLabel: "Estimation ROI Ads",
      lead,
      highlights: [
        `Budget mensuel: ${result.budgetMonthly}\u00a0\u20ac`,
        `Leads estimes: ${result.monthlyLeads}/mois`,
        `ROAS projete: ${result.monthlyRoas}x`,
      ],
      isPdf,
    });
  },

  buildSupabaseRow(lead: LeadInfo, result: AdsProjectionResult) {
    return {
      sector: result.sector,
      city: result.city || null,
      budget_monthly: result.budgetMonthly,
      avg_basket: result.avgBasket,
      platform: result.platform,
      estimated_clicks: result.monthlyClicks,
      estimated_leads: result.monthlyLeads,
      estimated_revenue: result.monthlyRevenue,
      estimated_roas: result.monthlyRoas,
    };
  },

  buildResponsePayload(result: AdsProjectionResult) {
    return {
      projection: {
        sectorLabel: result.sectorLabel,
        city: result.city,
        platform: result.platform,
        budgetMonthly: result.budgetMonthly,
        avgBasket: result.avgBasket,
        cpc: result.cpc,
        ctr: result.ctr,
        conversionRate: result.conversionRate,
        monthlyClicks: result.monthlyClicks,
        monthlyLeads: result.monthlyLeads,
        monthlyRevenue: result.monthlyRevenue,
        monthlyRoas: result.monthlyRoas,
        projections: result.projections,
        grade: result.grade,
        gradeLabel: result.gradeLabel,
      },
    };
  },
});
