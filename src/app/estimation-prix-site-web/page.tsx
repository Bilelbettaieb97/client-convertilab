import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import EstimationPrixClient from "./EstimationPrixClient";

export const metadata: Metadata = {
  title: "Combien Coûte un Site Web ? Estimation Gratuite en 2 min",
  description:
    "Estimez gratuitement le prix de votre site web en quelques clics. Site vitrine, e-commerce, landing page ou refonte — obtenez un devis personnalisé sous 24h.",
  keywords:
    "estimation prix site web, devis site internet, combien coute un site web, prix site vitrine, prix site e-commerce",
  alternates: { canonical: `${SITE.url}/estimation-prix-site-web` },
};

export default function EstimationPrixPage() {
  return <EstimationPrixClient />;
}
