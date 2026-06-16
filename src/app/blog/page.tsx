import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import BlogPageClient from "@/components/pages/BlogPageClient";

export const metadata: Metadata = {
  title: "Blog — Conseils Web, SEO et Business",
  description:
    "Articles et guides pratiques sur la création de sites web, le SEO et le marketing digital. Conseils d'experts pour développer votre business en ligne.",
  keywords: [
    "blog web design",
    "conseils SEO",
    "création site web",
    "marketing digital",
    "business en ligne",
  ],
  openGraph: {
    title: `Blog — Conseils Web, SEO et Business | ${SITE.name}`,
    description:
      "Articles et guides pratiques sur la création de sites web, le SEO et le marketing digital.",
    url: `${SITE.url}/blog`,
    type: "website",
  },
  alternates: {
    canonical: `${SITE.url}/blog`,
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
