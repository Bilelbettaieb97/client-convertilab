export interface LeadInfo {
  name: string;
  email: string;
  phone?: string;
  company?: string;
}

export interface ToolResult {
  score: number;
  grade: string;
  gradeLabel: string;
}

export interface ToolConfig<TInput, TResult> {
  toolName: string;
  tableName: string;
  validate: (body: Record<string, unknown>) => TInput & LeadInfo;
  analyze: (input: TInput) => Promise<TResult>;
  generatePdf: (result: TResult) => Promise<Buffer>;
  buildEmailSubject: (result: TResult) => string;
  buildEmailHtml: (lead: LeadInfo, result: TResult, isPdf: boolean) => string;
  buildSupabaseRow: (lead: LeadInfo, result: TResult) => Record<string, unknown>;
  buildResponsePayload: (result: TResult) => Record<string, unknown>;
  /** File extension for attachment: "pdf" (default) or "html" or "txt" */
  attachmentExt?: string;
  /** Generate extra attachments (e.g. robots.txt + sitemap.xml) */
  buildExtraAttachments?: (result: TResult) => { filename: string; content: Buffer }[];
  /** Extra fields to include in the Pipedrive lead note */
  buildPipedriveFields?: (result: TResult) => Record<string, unknown>;
  /** Tokens for email series (prenom, domaine, score, grade, secteur…) */
  buildSeriesContext?: (result: TResult, lead: LeadInfo) => Record<string, string>;
}

export function getGrade(score: number): { grade: string; gradeLabel: string } {
  if (score >= 90) return { grade: "A+", gradeLabel: "Excellent" };
  if (score >= 80) return { grade: "A", gradeLabel: "Tres Bien" };
  if (score >= 70) return { grade: "B", gradeLabel: "Bien" };
  if (score >= 60) return { grade: "C", gradeLabel: "Moyen" };
  if (score >= 40) return { grade: "D", gradeLabel: "Faible" };
  return { grade: "F", gradeLabel: "Critique" };
}

export function scoreColor(score: number): string {
  if (score >= 80) return "#22c55e";
  if (score >= 60) return "#eab308";
  if (score >= 40) return "#f97316";
  return "#ef4444";
}
