export interface City {
  slug: string;
  name: string;
  department: string;
  region: string;
  postalCode: string;
  lat: string;
  lng: string;
  population: string;
  description: string;
}

export const cities: City[] = [
  {
    slug: "paris",
    name: "Paris",
    department: "Paris",
    region: "Île-de-France",
    postalCode: "75000",
    lat: "48.8566",
    lng: "2.3522",
    population: "2.1 millions",
    description: "Capitale de la France et centre économique européen, Paris regroupe des milliers d'entreprises qui ont besoin d'une présence digitale forte pour se démarquer.",
  },
  {
    slug: "rueil-malmaison",
    name: "Rueil-Malmaison",
    department: "Hauts-de-Seine",
    region: "Île-de-France",
    postalCode: "92500",
    lat: "48.8769",
    lng: "2.1894",
    population: "80 000",
    description: "Ville dynamique des Hauts-de-Seine, Rueil-Malmaison accueille de nombreuses PME et professions libérales qui cherchent à développer leur visibilité en ligne.",
  },
  {
    slug: "boulogne-billancourt",
    name: "Boulogne-Billancourt",
    department: "Hauts-de-Seine",
    region: "Île-de-France",
    postalCode: "92100",
    lat: "48.8397",
    lng: "2.2399",
    population: "120 000",
    description: "Deuxième ville d'Île-de-France par sa population, Boulogne-Billancourt est un pôle économique majeur avec un tissu dense de PME et startups.",
  },
  {
    slug: "nanterre",
    name: "Nanterre",
    department: "Hauts-de-Seine",
    region: "Île-de-France",
    postalCode: "92000",
    lat: "48.8924",
    lng: "2.2071",
    population: "96 000",
    description: "Préfecture des Hauts-de-Seine et porte de La Défense, Nanterre concentre entreprises et commerces qui bénéficient d'une stratégie digitale locale.",
  },
  {
    slug: "neuilly-sur-seine",
    name: "Neuilly-sur-Seine",
    department: "Hauts-de-Seine",
    region: "Île-de-France",
    postalCode: "92200",
    lat: "48.8847",
    lng: "2.2690",
    population: "62 000",
    description: "Ville résidentielle haut de gamme, Neuilly-sur-Seine abrite de nombreux cabinets, professions libérales et commerces premium qui ont besoin d'un site web à la hauteur de leur image.",
  },
];

export const getCityBySlug = (slug: string) => cities.find((c) => c.slug === slug);
