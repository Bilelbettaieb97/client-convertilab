import { analyzeSite } from "@/lib/seo/analyzer";
import type { SeoAuditResult, AuditScores } from "@/lib/seo/analyzer";

// ============ TYPES ============

export interface SiteData {
  url: string;
  domain: string;
  scores: AuditScores;
  grade: string;
  gradeLabel: string;
  strengths: string[];
  issues: string[];
}

export interface CategoryComparison {
  name: string;
  scoreA: number;
  scoreB: number;
  winner: "A" | "B" | "tie";
  gap: number;
}

export interface ComparisonResult {
  siteA: SiteData;
  siteB: SiteData;
  winner: "A" | "B" | "tie";
  categories: CategoryComparison[];
  fetchedAt: string;
}

// ============ HELPERS ============

const CATEGORY_NAMES: Record<keyof Omit<AuditScores, "global">, string> = {
  technique: "SEO Technique",
  onPage: "On-Page",
  schema: "Donnees Structurees",
  mobile: "Mobile",
  contenu: "Contenu",
  geo: "Visibilite IA (GEO)",
  performance: "Performance",
  securite: "Securite",
};

function extractSiteData(audit: SeoAuditResult): SiteData {
  return {
    url: audit.url,
    domain: audit.domain,
    scores: audit.scores,
    grade: audit.grade,
    gradeLabel: audit.gradeLabel,
    strengths: audit.strengths.slice(0, 5),
    issues: audit.issues.slice(0, 5).map((i) => i.title),
  };
}

function determineWinner(a: number, b: number): "A" | "B" | "tie" {
  if (a > b) return "A";
  if (b > a) return "B";
  return "tie";
}

// ============ MAIN COMPARATOR ============

export async function compareSites(urlA: string, urlB: string): Promise<ComparisonResult> {
  // Run both analyses in parallel
  const [auditA, auditB] = await Promise.all([
    analyzeSite(urlA),
    analyzeSite(urlB),
  ]);

  const siteA = extractSiteData(auditA);
  const siteB = extractSiteData(auditB);

  // Compare category by category
  const categoryKeys = Object.keys(CATEGORY_NAMES) as (keyof Omit<AuditScores, "global">)[];

  const categories: CategoryComparison[] = categoryKeys.map((key) => {
    const scoreA = siteA.scores[key];
    const scoreB = siteB.scores[key];
    return {
      name: CATEGORY_NAMES[key],
      scoreA,
      scoreB,
      winner: determineWinner(scoreA, scoreB),
      gap: Math.abs(scoreA - scoreB),
    };
  });

  // Overall winner based on global score
  const winner = determineWinner(siteA.scores.global, siteB.scores.global);

  return {
    siteA,
    siteB,
    winner,
    categories,
    fetchedAt: new Date().toISOString(),
  };
}
