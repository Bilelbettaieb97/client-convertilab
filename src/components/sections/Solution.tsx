import Link from "next/link";
import { Search, Zap, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    number: "01",
    icon: Search,
    title: "Attirer",
    subtitle: "Soyez trouvé par les bons clients",
    description:
      "SEO technique, contenus optimisés, campagnes Google & Meta Ads ciblées. On vous rend visible là où vos clients vous cherchent.",
    benefits: [
      "Position Google en première page",
      "Trafic qualifié en croissance",
      "Publicités rentables dès le 1er mois",
    ],
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    number: "02",
    icon: Zap,
    title: "Convertir",
    subtitle: "Transformez les visiteurs en clients",
    description:
      "Sites ultra-rapides, design persuasif, parcours d&apos;achat optimisé. Chaque pixel est pensé pour déclencher l&apos;action.",
    benefits: [
      "Taux de conversion multiplié par 3",
      "Landing pages qui vendent",
      "Tunnel de vente optimisé",
    ],
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Fidéliser",
    subtitle: "Faites revenir vos clients",
    description:
      "Email marketing, retargeting, automation, social media. On garde vos clients engagés et on les transforme en ambassadeurs.",
    benefits: [
      "Panier moyen en hausse",
      "Clients qui reviennent",
      "Bouche-à-oreille amplifié",
    ],
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
  },
];

export default function Solution() {
  return (
    <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-100/40 via-pink-100/30 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-6">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Notre approche
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Une méthode en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              3 étapes
            </span>{" "}
            qui génère du vrai business
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            On ne fait pas des sites web juste pour faire joli. On construit des machines de conversion qui vous ramènent des clients, mois après mois.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className={`group relative bg-gradient-to-br ${pillar.bgGradient} rounded-3xl p-8 hover:-translate-y-1 transition-all duration-500 border border-white shadow-sm hover:shadow-xl`}
              >
                {/* Number */}
                <div className="absolute top-6 right-6 text-5xl font-black text-white/70 leading-none">
                  {pillar.number}
                </div>

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm font-semibold text-gray-700 mb-4">
                  {pillar.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2">
                  {pillar.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Connector arrow (desktop only, not on last) */}
                {idx < pillars.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-5 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center z-10">
                    <ArrowRight className="w-5 h-5 text-purple-600" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-base font-semibold text-purple-600 hover:text-purple-800 transition-colors group"
          >
            Découvrir notre méthode en détail
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
