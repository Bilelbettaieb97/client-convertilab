import { NextRequest, NextResponse } from "next/server";
import { analyzeSite } from "@/lib/seo/analyzer";

export const maxDuration = 60;
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const { url } = await request.json();
  if (!url) return NextResponse.json({ error: "URL requise" }, { status: 400 });

  try {
    const audit = await analyzeSite(url);
    return NextResponse.json({
      domain: audit.domain,
      score: audit.scores.global,
      grade: audit.grade,
      gradeLabel: audit.gradeLabel,
      topStrengths: audit.strengths.slice(0, 3),
      topIssues: audit.issues.slice(0, 3).map((i) => i.title),
      criticalCount: audit.issues.filter((i) => i.priority === "critical")
        .length,
    });
  } catch {
    return NextResponse.json(
      { error: "Impossible d'analyser ce site" },
      { status: 500 }
    );
  }
}
