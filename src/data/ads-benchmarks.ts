export interface AdsBenchmark {
  sector: string;
  sectorLabel: string;
  google: { cpc: number; ctr: number; conversionRate: number };
  meta: { cpc: number; ctr: number; conversionRate: number };
}

export const adsBenchmarks: AdsBenchmark[] = [
  {
    sector: "restaurant",
    sectorLabel: "Restaurant",
    google: { cpc: 0.80, ctr: 0.055, conversionRate: 0.055 },
    meta: { cpc: 0.45, ctr: 0.022, conversionRate: 0.04 },
  },
  {
    sector: "avocat",
    sectorLabel: "Avocat",
    google: { cpc: 3.50, ctr: 0.04, conversionRate: 0.035 },
    meta: { cpc: 2.10, ctr: 0.012, conversionRate: 0.025 },
  },
  {
    sector: "coach",
    sectorLabel: "Coach",
    google: { cpc: 1.20, ctr: 0.045, conversionRate: 0.05 },
    meta: { cpc: 0.70, ctr: 0.025, conversionRate: 0.04 },
  },
  {
    sector: "dentiste",
    sectorLabel: "Dentiste",
    google: { cpc: 2.80, ctr: 0.045, conversionRate: 0.04 },
    meta: { cpc: 1.70, ctr: 0.014, conversionRate: 0.03 },
  },
  {
    sector: "immobilier",
    sectorLabel: "Immobilier",
    google: { cpc: 1.50, ctr: 0.04, conversionRate: 0.03 },
    meta: { cpc: 0.85, ctr: 0.018, conversionRate: 0.025 },
  },
  {
    sector: "ecommerce",
    sectorLabel: "E-commerce",
    google: { cpc: 0.60, ctr: 0.05, conversionRate: 0.035 },
    meta: { cpc: 0.35, ctr: 0.025, conversionRate: 0.03 },
  },
  {
    sector: "photographe",
    sectorLabel: "Photographe",
    google: { cpc: 0.90, ctr: 0.042, conversionRate: 0.045 },
    meta: { cpc: 0.50, ctr: 0.028, conversionRate: 0.038 },
  },
  {
    sector: "artisan",
    sectorLabel: "Artisan",
    google: { cpc: 0.70, ctr: 0.05, conversionRate: 0.06 },
    meta: { cpc: 0.40, ctr: 0.02, conversionRate: 0.04 },
  },
  {
    sector: "startup",
    sectorLabel: "Startup / SaaS",
    google: { cpc: 1.80, ctr: 0.038, conversionRate: 0.03 },
    meta: { cpc: 1.00, ctr: 0.015, conversionRate: 0.022 },
  },
  {
    sector: "fitness",
    sectorLabel: "Fitness / Salle de sport",
    google: { cpc: 0.95, ctr: 0.048, conversionRate: 0.055 },
    meta: { cpc: 0.55, ctr: 0.026, conversionRate: 0.045 },
  },
  {
    sector: "beaute",
    sectorLabel: "Institut de beaute",
    google: { cpc: 0.85, ctr: 0.05, conversionRate: 0.06 },
    meta: { cpc: 0.48, ctr: 0.03, conversionRate: 0.05 },
  },
  {
    sector: "boulangerie",
    sectorLabel: "Boulangerie / Patisserie",
    google: { cpc: 0.55, ctr: 0.058, conversionRate: 0.065 },
    meta: { cpc: 0.30, ctr: 0.025, conversionRate: 0.05 },
  },
  {
    sector: "plombier",
    sectorLabel: "Plombier",
    google: { cpc: 2.20, ctr: 0.055, conversionRate: 0.07 },
    meta: { cpc: 1.30, ctr: 0.015, conversionRate: 0.035 },
  },
  {
    sector: "electricien",
    sectorLabel: "Electricien",
    google: { cpc: 2.00, ctr: 0.052, conversionRate: 0.065 },
    meta: { cpc: 1.20, ctr: 0.014, conversionRate: 0.035 },
  },
  {
    sector: "architecte",
    sectorLabel: "Architecte",
    google: { cpc: 1.60, ctr: 0.038, conversionRate: 0.03 },
    meta: { cpc: 0.90, ctr: 0.016, conversionRate: 0.022 },
  },
  {
    sector: "comptable",
    sectorLabel: "Comptable / Expert-comptable",
    google: { cpc: 2.50, ctr: 0.04, conversionRate: 0.035 },
    meta: { cpc: 1.50, ctr: 0.012, conversionRate: 0.025 },
  },
  {
    sector: "formation",
    sectorLabel: "Formation / E-learning",
    google: { cpc: 1.40, ctr: 0.042, conversionRate: 0.04 },
    meta: { cpc: 0.80, ctr: 0.02, conversionRate: 0.035 },
  },
  {
    sector: "veterinaire",
    sectorLabel: "Veterinaire",
    google: { cpc: 1.80, ctr: 0.048, conversionRate: 0.05 },
    meta: { cpc: 1.05, ctr: 0.018, conversionRate: 0.035 },
  },
  {
    sector: "fleuriste",
    sectorLabel: "Fleuriste",
    google: { cpc: 0.50, ctr: 0.055, conversionRate: 0.06 },
    meta: { cpc: 0.30, ctr: 0.028, conversionRate: 0.05 },
  },
  {
    sector: "coiffeur",
    sectorLabel: "Coiffeur",
    google: { cpc: 0.65, ctr: 0.052, conversionRate: 0.06 },
    meta: { cpc: 0.38, ctr: 0.028, conversionRate: 0.05 },
  },
  {
    sector: "garage",
    sectorLabel: "Garage / Mecanique auto",
    google: { cpc: 1.10, ctr: 0.05, conversionRate: 0.055 },
    meta: { cpc: 0.65, ctr: 0.016, conversionRate: 0.03 },
  },
  {
    sector: "hotel",
    sectorLabel: "Hotel / Hebergement",
    google: { cpc: 0.90, ctr: 0.045, conversionRate: 0.04 },
    meta: { cpc: 0.55, ctr: 0.022, conversionRate: 0.035 },
  },
  {
    sector: "demenagement",
    sectorLabel: "Demenagement",
    google: { cpc: 1.30, ctr: 0.05, conversionRate: 0.06 },
    meta: { cpc: 0.75, ctr: 0.015, conversionRate: 0.035 },
  },
  {
    sector: "traiteur",
    sectorLabel: "Traiteur",
    google: { cpc: 0.75, ctr: 0.048, conversionRate: 0.055 },
    meta: { cpc: 0.42, ctr: 0.024, conversionRate: 0.045 },
  },
  {
    sector: "psychologue",
    sectorLabel: "Psychologue",
    google: { cpc: 1.50, ctr: 0.042, conversionRate: 0.04 },
    meta: { cpc: 0.85, ctr: 0.018, conversionRate: 0.03 },
  },
];

const defaultBenchmark: AdsBenchmark = {
  sector: "default",
  sectorLabel: "Autre secteur",
  google: { cpc: 1.20, ctr: 0.045, conversionRate: 0.04 },
  meta: { cpc: 0.70, ctr: 0.02, conversionRate: 0.03 },
};

export function getAdsBenchmark(sector: string): AdsBenchmark {
  return adsBenchmarks.find((b) => b.sector === sector) || defaultBenchmark;
}
