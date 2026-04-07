import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { createToolHandler } from "@/lib/tools/shared-api-handler";
import { buildToolEmailHtml } from "@/lib/tools/shared-email-template";
import { generateMentionsLegales } from "@/lib/legal/generator";
import { MentionsLegalesPdf } from "@/lib/legal/pdf-template";
import type { MentionsLegalesInput, MentionsLegalesResult } from "@/lib/legal/generator";
import type { LeadInfo } from "@/lib/tools/shared-types";

export const maxDuration = 60;
export const dynamic = "force-dynamic";

interface MentionsLegalesApiInput extends MentionsLegalesInput {
  name: string;
  email: string;
}

export const POST = createToolHandler<MentionsLegalesApiInput, MentionsLegalesResult>({
  toolName: "Mentions Legales",
  tableName: "mentions_legales",

  validate(body) {
    const name = body.name as string;
    const email = body.email as string;
    const companyName = body.companyName as string;
    const companyType = body.companyType as MentionsLegalesInput["companyType"];
    const address = body.address as string;
    const siret = body.siret as string;
    const directorName = body.directorName as string;
    const companyEmail = (body.companyEmail as string) || email;
    const phone = body.phone as string | undefined;
    const host = body.host as MentionsLegalesInput["host"];
    const hostCustom = body.hostCustom as string | undefined;
    const hasCookiesAnalytics = !!body.hasCookiesAnalytics;
    const hasCookiesMarketing = !!body.hasCookiesMarketing;
    const hasCookiesFunctional = !!body.hasCookiesFunctional;
    const hasContactForm = !!body.hasContactForm;
    const websiteUrl = body.websiteUrl as string | undefined;

    if (!name || !email || !companyName || !companyType || !address || !siret || !directorName || !host) {
      throw new Error("Tous les champs obligatoires doivent etre remplis.");
    }

    return {
      name,
      email,
      companyType,
      companyName,
      address,
      siret,
      directorName,
      companyEmail,
      phone,
      host,
      hostCustom,
      hasCookiesAnalytics,
      hasCookiesMarketing,
      hasCookiesFunctional,
      hasContactForm,
      websiteUrl,
    } as MentionsLegalesApiInput;
  },

  async analyze(input) {
    return generateMentionsLegales(input);
  },

  async generatePdf(result) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const buffer = await renderToBuffer(React.createElement(MentionsLegalesPdf, { result }) as any);
    return Buffer.from(buffer);
  },

  buildEmailSubject(result) {
    return `Vos Mentions Legales — ${result.companyName}`;
  },

  buildEmailHtml(lead: LeadInfo, result: MentionsLegalesResult, isPdf: boolean) {
    return buildToolEmailHtml({
      toolLabel: "Generateur Mentions Legales",
      lead,
      highlights: [
        "Document conforme LCEN + RGPD",
        "Pret a copier-coller sur votre site",
        `Personnalise pour ${result.companyName}`,
      ],
      isPdf,
    });
  },

  buildSupabaseRow(lead: LeadInfo, result: MentionsLegalesResult) {
    return {
      company_name: result.companyName,
      company_type: result.companyType,
    };
  },

  buildResponsePayload(result: MentionsLegalesResult) {
    return {
      result: {
        sections: result.sections.slice(0, 3),
        companyName: result.companyName,
        generatedAt: result.generatedAt,
        totalSections: result.sections.length,
      },
    };
  },
});
