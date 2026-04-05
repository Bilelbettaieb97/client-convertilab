import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import DemandeMaquetteClient from "./DemandeMaquetteClient";

export const metadata: Metadata = {
  title: "Demande de Maquette Gratuite | ConvertiLab",
  description:
    "Demandez une maquette gratuite pour votre futur site web. Remplissez le formulaire et recevez un design personnalise sous 48h.",
  keywords:
    "maquette site web gratuite, design site internet, maquette gratuite Paris",
  alternates: { canonical: `${SITE.url}/demande-maquette` },
};

export default function DemandeMaquettePage() {
  return <DemandeMaquetteClient />;
}
