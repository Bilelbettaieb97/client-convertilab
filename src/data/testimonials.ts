export interface Testimonial {
  text: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  metric: string;
  avatar: string;
  color: string;
  accent: string;
}

export const testimonials: Testimonial[] = [
  {
    text: "ConvertiLab a transformé notre stratégie digitale. Entre le SEO et les campagnes Google Ads, notre chiffre d'affaires en ligne a augmenté de 250% en 6 mois !",
    author: "Marie Dubois",
    role: "Directrice Marketing",
    company: "Boutique Éthique",
    rating: 5,
    metric: "+250% CA en ligne",
    avatar: "M",
    color: "bg-gradient-to-br from-purple-500 to-violet-600",
    accent: "from-purple-100 to-violet-100",
  },
  {
    text: "Grâce à leur stratégie social media et Meta Ads, nous générons maintenant 50+ leads qualifiés par mois. Un vrai game changer pour notre cabinet.",
    author: "Thomas Laurent",
    role: "CEO & Fondateur",
    company: "Cabinet Conseil",
    rating: 5,
    metric: "+50 leads/mois",
    avatar: "T",
    color: "bg-gradient-to-br from-green-500 to-emerald-600",
    accent: "from-green-100 to-emerald-100",
  },
  {
    text: "Le combo site web + SEO + Google Ads a complètement changé notre acquisition client. On est passé de 5 à 30 demandes de devis par semaine.",
    author: "Sophie Martin",
    role: "Gérante",
    company: "Agence Immobilière",
    rating: 5,
    metric: "x6 demandes de devis",
    avatar: "S",
    color: "bg-gradient-to-br from-pink-500 to-rose-600",
    accent: "from-pink-100 to-rose-100",
  },
  {
    text: "Leur approche data-driven est redoutable. Chaque euro investi en publicité est tracké et optimisé. Notre coût par acquisition a baissé de 60%.",
    author: "Alexandre Chen",
    role: "Directeur Digital",
    company: "E-commerce Mode",
    rating: 5,
    metric: "-60% coût acquisition",
    avatar: "A",
    color: "bg-gradient-to-br from-blue-500 to-cyan-600",
    accent: "from-blue-100 to-cyan-100",
  },
];
