import { Star, Users, TrendingUp, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "150+", label: "clients accompagnés" },
  { icon: Star, value: "4.9/5", label: "15 avis vérifiés" },
  { icon: TrendingUp, value: "+280%", label: "CA moyen généré" },
  { icon: Award, value: "7 jours", label: "délai de livraison" },
];

const logos = [
  "Monsieur Arancini",
  "Funestore",
  "Papapret",
  "Temple Zen",
  "Vinoboat",
  "AH Studio",
  "Eleva",
  "Segermes",
  "Art des Roses",
  "ACB Rénovation",
];

export default function TrustBar() {
  return (
    <section className="relative py-12 sm:py-16 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Headline */}
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
          Ils nous font confiance pour développer leur business
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex items-center gap-3 justify-center lg:justify-start"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-purple-600" />
                </div>
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Logos marquee — défilement infini */}
        <div className="relative">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex shrink-0 animate-marquee gap-12 px-6">
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={`${logo}-${i}`}
                  className="flex items-center justify-center whitespace-nowrap text-lg sm:text-xl font-bold text-gray-500 hover:text-purple-600 transition-colors"
                >
                  {logo}
                </div>
              ))}
            </div>
            <div className="flex shrink-0 animate-marquee gap-12 px-6" aria-hidden="true">
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={`${logo}-dup-${i}`}
                  className="flex items-center justify-center whitespace-nowrap text-lg sm:text-xl font-bold text-gray-500 hover:text-purple-600 transition-colors"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
