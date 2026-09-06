import { AlertTriangle, TrendingDown, Clock, EyeOff } from "lucide-react";

const pains = [
  {
    icon: EyeOff,
    title: "Personne ne trouve votre site",
    description:
      "Vous êtes invisible sur Google. Vos concurrents captent les clients qui pourraient être à vous.",
  },
  {
    icon: TrendingDown,
    title: "Votre site ne convertit pas",
    description:
      "Les visiteurs arrivent mais ne vous contactent jamais. Chaque jour, vous perdez des prospects qualifiés.",
  },
  {
    icon: Clock,
    title: "Vous perdez un temps fou",
    description:
      "WordPress qui plante, agences qui traînent, freelances injoignables... Votre site est une corvée permanente.",
  },
  {
    icon: AlertTriangle,
    title: "Votre image en ligne fait peur",
    description:
      "Design d'il y a 10 ans, pas mobile, lent. Vos clients potentiels jugent votre sérieux en 3 secondes.",
  },
];

export default function Problem() {
  return (
    <section className="relative py-20 sm:py-28 bg-gray-50 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.03),transparent_70%)]" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-xs font-semibold uppercase tracking-wider mb-6">
            <AlertTriangle className="w-3.5 h-3.5" />
            Vous reconnaissez ces problèmes ?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Chaque jour sans site qui convertit,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              c&apos;est de l&apos;argent qui part ailleurs
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Si vous vivez l&apos;un de ces 4 problèmes, vous n&apos;êtes pas seul. Et c&apos;est exactement pour ça que ConvertiLab existe.
          </p>
        </div>

        {/* Pain points grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {pains.map((pain) => {
            const Icon = pain.icon;
            return (
              <div
                key={pain.title}
                className="group relative bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-red-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">
                  {pain.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{pain.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bridge to solution */}
        <p className="text-center text-lg text-gray-700 mt-14 max-w-2xl mx-auto font-medium">
          La bonne nouvelle ?{" "}
          <span className="text-purple-700 font-bold">Il existe une solution</span>{" "}
          et elle prend moins de 2 semaines à mettre en place.
        </p>
      </div>
    </section>
  );
}
