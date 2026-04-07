import { getAdsBenchmark } from "@/data/ads-benchmarks";

export interface AdsProjectionInput {
  sector: string;
  city: string;
  budgetMonthly: number;
  avgBasket: number;
  platform: "google" | "meta" | "both";
}

export interface AdsProjectionResult {
  sector: string;
  sectorLabel: string;
  city: string;
  budgetMonthly: number;
  avgBasket: number;
  platform: string;
  cpc: number;
  ctr: number;
  conversionRate: number;
  monthlyClicks: number;
  monthlyLeads: number;
  monthlyRevenue: number;
  monthlyRoas: number;
  projections: {
    months: number;
    investment: number;
    clicks: number;
    leads: number;
    revenue: number;
    roas: number;
    profit: number;
  }[];
  monthlyBreakdown: {
    month: number;
    multiplier: number;
    investment: number;
    clicks: number;
    leads: number;
    revenue: number;
    profit: number;
  }[];
  grade: string;
  gradeLabel: string;
}

function getLearningMultiplier(month: number): number {
  if (month === 1) return 0.6;
  if (month === 2) return 0.8;
  return 1.0;
}

function getGradeFromRoas(roas: number): { grade: string; gradeLabel: string } {
  if (roas >= 5) return { grade: "A+", gradeLabel: "Excellent" };
  if (roas >= 3) return { grade: "A", gradeLabel: "Tres bon" };
  if (roas >= 2) return { grade: "B", gradeLabel: "Bon" };
  if (roas >= 1.5) return { grade: "C", gradeLabel: "Correct" };
  if (roas >= 1) return { grade: "D", gradeLabel: "Faible" };
  return { grade: "F", gradeLabel: "Non rentable" };
}

export function calculateAdsProjection(input: AdsProjectionInput): AdsProjectionResult {
  const benchmark = getAdsBenchmark(input.sector);

  // Determine combined CPC, CTR, conversion rate based on platform
  let cpc: number;
  let ctr: number;
  let conversionRate: number;
  let platformLabel: string;

  if (input.platform === "google") {
    cpc = benchmark.google.cpc;
    ctr = benchmark.google.ctr;
    conversionRate = benchmark.google.conversionRate;
    platformLabel = "Google Ads";
  } else if (input.platform === "meta") {
    cpc = benchmark.meta.cpc;
    ctr = benchmark.meta.ctr;
    conversionRate = benchmark.meta.conversionRate;
    platformLabel = "Meta Ads";
  } else {
    // "both" — weighted average (50/50 budget split)
    cpc = (benchmark.google.cpc + benchmark.meta.cpc) / 2;
    ctr = (benchmark.google.ctr + benchmark.meta.ctr) / 2;
    conversionRate = (benchmark.google.conversionRate + benchmark.meta.conversionRate) / 2;
    platformLabel = "Google Ads + Meta Ads";
  }

  // Base monthly metrics (at full performance, multiplier = 1.0)
  // Standard Ads formula: Budget / CPC = Clicks, Clicks * ConversionRate = Leads
  const monthlyClicks = Math.round(input.budgetMonthly / cpc);
  const monthlyLeads = Math.round(monthlyClicks * conversionRate * 100) / 100;
  const monthlyRevenue = Math.round(monthlyLeads * input.avgBasket * 100) / 100;
  const monthlyRoas = Math.round((monthlyRevenue / input.budgetMonthly) * 100) / 100;

  // Monthly breakdown for 12 months
  const monthlyBreakdown: AdsProjectionResult["monthlyBreakdown"] = [];
  for (let m = 1; m <= 12; m++) {
    const multiplier = getLearningMultiplier(m);
    const mClicks = Math.round(monthlyClicks * multiplier);
    const mLeads = Math.round(monthlyClicks * multiplier * conversionRate * 100) / 100;
    const mRevenue = Math.round(mLeads * input.avgBasket * 100) / 100;
    const mProfit = Math.round((mRevenue - input.budgetMonthly) * 100) / 100;

    monthlyBreakdown.push({
      month: m,
      multiplier,
      investment: input.budgetMonthly,
      clicks: mClicks,
      leads: Math.round(mLeads),
      revenue: mRevenue,
      profit: mProfit,
    });
  }

  // Projections for 3, 6, 12 months (cumulative)
  const projectionPeriods = [3, 6, 12];
  const projections = projectionPeriods.map((months) => {
    const relevantMonths = monthlyBreakdown.slice(0, months);
    const totalInvestment = relevantMonths.reduce((sum, m) => sum + m.investment, 0);
    const totalClicks = relevantMonths.reduce((sum, m) => sum + m.clicks, 0);
    const totalLeads = relevantMonths.reduce((sum, m) => sum + m.leads, 0);
    const totalRevenue = relevantMonths.reduce((sum, m) => sum + m.revenue, 0);
    const roas = Math.round((totalRevenue / totalInvestment) * 100) / 100;
    const profit = Math.round((totalRevenue - totalInvestment) * 100) / 100;

    return { months, investment: totalInvestment, clicks: totalClicks, leads: totalLeads, revenue: Math.round(totalRevenue), roas, profit };
  });

  // Grade based on steady-state ROAS (month 3+)
  const { grade, gradeLabel } = getGradeFromRoas(monthlyRoas);

  return {
    sector: input.sector,
    sectorLabel: benchmark.sectorLabel,
    city: input.city,
    budgetMonthly: input.budgetMonthly,
    avgBasket: input.avgBasket,
    platform: platformLabel,
    cpc,
    ctr,
    conversionRate,
    monthlyClicks,
    monthlyLeads: Math.round(monthlyLeads),
    monthlyRevenue: Math.round(monthlyRevenue),
    monthlyRoas,
    projections,
    monthlyBreakdown,
    grade,
    gradeLabel,
  };
}
