"use client";

import { motion } from "framer-motion";
import { TestimonialsColumn, type TestimonialItem } from "@/components/ui/testimonials-columns";

const testimonials: TestimonialItem[] = [
  {
    text: "ConvertiLab a transforme notre strategie digitale. Entre le SEO et les campagnes Google Ads, notre chiffre d'affaires en ligne a augmente de 250% en 6 mois !",
    image: "",
    name: "Marie Dubois",
    role: "Directrice Marketing, Boutique Ethique",
  },
  {
    text: "Grace a leur strategie social media et Meta Ads, nous generons maintenant 50+ leads qualifies par mois. Un vrai game changer pour notre cabinet.",
    image: "",
    name: "Thomas Laurent",
    role: "CEO & Fondateur, Cabinet Conseil",
  },
  {
    text: "Le combo site web + SEO + Google Ads a completement change notre acquisition client. On est passe de 5 a 30 demandes de devis par semaine.",
    image: "",
    name: "Sophie Martin",
    role: "Gerante, Agence Immobiliere",
  },
  {
    text: "Leur approche data-driven est redoutable. Chaque euro investi en publicite est tracke et optimise. Notre cout par acquisition a baisse de 60%.",
    image: "",
    name: "Alexandre Chen",
    role: "Directeur Digital, E-commerce Mode",
  },
  {
    text: "Site livre en 2 semaines chrono, design premium, SEO aux petits oignons. L'equipe est ultra professionnelle et reactive. Je recommande sans hesiter.",
    image: "",
    name: "Julie Bernard",
    role: "Fondatrice, Studio de Yoga",
  },
  {
    text: "Nous sommes passes de la page 5 a la 1ere position sur nos mots-cles principaux. Le trafic organique a augmente de 340% en 6 mois.",
    image: "",
    name: "Antoine Collet",
    role: "Directeur, Cabinet d'Avocats",
  },
  {
    text: "Excellente maitrise technique, vision strategique, et des resultats concrets des le premier mois. ConvertiLab sait ce qu'il fait.",
    image: "",
    name: "Laura Petit",
    role: "E-commerce Manager",
  },
  {
    text: "L'audit SEO gratuit m'a convaincue. Depuis, nous travaillons ensemble sur tous nos projets digitaux. Transparents, rapides, efficaces.",
    image: "",
    name: "Camille Rousseau",
    role: "Directrice Communication",
  },
  {
    text: "Une equipe qui comprend les enjeux business. Le site est magnifique, rapide, et genere 3x plus de leads qu'avant. Merci !",
    image: "",
    name: "Nicolas Moreau",
    role: "Dirigeant, PME B2B",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function TestimonialsColumnsSection() {
  return (
    <section className="relative bg-gray-900 py-20 sm:py-28 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-pink-900/20" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-600/15 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-6">
            Temoignages clients
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Pourquoi 150+ entrepreneurs nous font-ils{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
              confiance
            </span>
            {" "}?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Artisans, commerçants, coachs et indépendants nous ont confié la création de leur site web et leur visibilité Google. Voici ce qu&apos;ils en disent.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[640px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={26} />
        </div>
      </div>
    </section>
  );
}
