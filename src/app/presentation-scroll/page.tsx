import type { Metadata } from "next";
import PresentationClient from "./PresentationClient";

export const metadata: Metadata = {
  title: "ConvertiLab — Votre site web qui ramène des clients",
  description:
    "Découvrez comment ConvertiLab transforme votre site en machine à clients : audit gratuit, calcul de rentabilité en direct, et réservation d'appel en ligne.",
  robots: { index: false, follow: false },
  other: {
    "theme-color": "#0a0a1a",
  },
};

export default function Page() {
  return <PresentationClient />;
}
