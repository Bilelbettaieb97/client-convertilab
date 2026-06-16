import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import OutilsClient from "./OutilsClient";

export const metadata: Metadata = {
  title: "Outils Gratuits SEO, Vitesse & Design",
  description: "8 outils gratuits pour analyser et optimiser votre site web : audit SEO, test de vitesse, score design, estimateur Ads, comparateur de sites. Rapports PDF gratuits envoyés par email.",
  keywords: ["outils SEO gratuits", "audit SEO gratuit", "test vitesse site web", "score design web", "estimateur Google Ads", "comparateur sites"],
  alternates: { canonical: `${SITE.url}/outils` },
  openGraph: {
    title: "Outils Gratuits SEO, Vitesse & Design | ConvertiLab",
    description: "8 outils gratuits pour analyser et optimiser votre site web. Rapports PDF envoyés par email, sans inscription.",
    url: `${SITE.url}/outils`,
  },
};

export default function OutilsPage() {
  return <OutilsClient />;
}
