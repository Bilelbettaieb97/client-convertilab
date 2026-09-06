import Link from "next/link";
import { Check, Sparkles, Zap, Crown, ArrowRight, Shield } from "lucide-react";

/**
 * Grille arretee le 06/09/2026. Trois paliers, le site complet en favori.
 *
 * Les noms decrivent OU EN EST LE CLIENT, pas le produit. Un artisan se
 * reconnait dans une phrase et choisit seul, sans qu'on lui vende un "pack".
 *
 * La bascule entre 490 et 890 repose sur un fait, pas sur un argument :
 * une page unique ne peut pas se referencer sur plusieurs metiers.
 *
 * Le mensuel n'est PAS un abonnement, c'est le prix etale. La promesse
 * "Aucun abonnement" de la page d'accueil reste vraie.
 */
const plans = [
  {
    name: "Je me lance",
    icon: Zap,
    price: "490",
    period: "€",
    priceLabel: "Paiement unique",
    description: "Une page qui dit qui vous etes, ce que vous faites, et comment vous joindre.",
    features: [
      "Une page unique, complete",
      "Textes rediges pour vous",
      "Vos realisations et vos avis",
      "Formulaire et telephone cliquable",
      "Responsive mobile et tablette",
      "Livree en 5 a 7 jours",
    ],
    cta: "Choisir cette offre",
    href: "/services/sites-web/landing-page",
    highlight: false,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Je me developpe",
    icon: Sparkles,
    price: "890",
    period: "€",
    priceLabel: "ou 39€/mois sur 24 mois",
    description: "Le site complet, avec une page par metier. C'est ce qui vous fait remonter sur Google.",
    features: [
      "Site complet, 5 pages",
      "Une page par service, c'est la difference",
      "Referencement local sur vos metiers",
      "Fiche Google configuree",
      "Textes rediges et photos sourcees",
      "Formation a la gestion du site",
      "1 an de support inclus",
      "Livre en 2 semaines",
    ],
    cta: "Demarrer mon projet",
    href: "/services/sites-web/site-vitrine",
    highlight: true,
    gradient: "from-purple-500 to-pink-500",
    badge: "Le plus choisi",
  },
  {
    name: "Je prends la place",
    icon: Crown,
    price: "1490",
    period: "€ et +",
    priceLabel: "Devis apres echange",
    description: "Boutique en ligne, reservation, espace client, plusieurs etablissements.",
    features: [
      "E-commerce et paiement securise",
      "Reservation ou prise de rendez-vous",
      "Espace client ou back-office",
      "Multi-etablissements ou multilingue",
      "Integrations sur mesure",
      "Accompagnement dedie",
      "Support prioritaire",
    ],
    cta: "Discuter du projet",
    href: "/contact",
    highlight: false,
    gradient: "from-amber-500 to-orange-500",
  },
];

export default function Pricing() {
  return (
    <section className="relative py-20 sm:py-28 bg-gray-50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.08),transparent_50%)]" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Nos tarifs transparents
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Prix de votre site web : l&apos;offre adaptée{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              à votre projet
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Pas de frais cachés, pas de surprise. Tous nos tarifs incluent le design, le développement, la mise en ligne et le support.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                  plan.highlight
                    ? "bg-gradient-to-b from-gray-900 to-gray-950 text-white shadow-2xl scale-105 lg:scale-110 border-2 border-purple-500"
                    : "bg-white border border-gray-200 shadow-sm hover:shadow-xl"
                }`}
              >
                {/* Badge */}
                {plan.highlight && plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full shadow-lg whitespace-nowrap">
                    ⭐ {plan.badge}
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center shadow-lg mb-6`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Name */}
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.highlight ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    plan.highlight ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-gray-200/20">
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-5xl font-black ${
                        plan.highlight ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-lg font-semibold ${
                        plan.highlight ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>
                  <p
                    className={`text-xs mt-1 ${
                      plan.highlight ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {plan.priceLabel}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.highlight
                            ? "bg-gradient-to-br from-purple-500 to-pink-500"
                            : "bg-green-100"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            plan.highlight ? "text-white" : "text-green-600"
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          plan.highlight ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={plan.href}
                  className={`group flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold transition-all ${
                    plan.highlight
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl hover:shadow-purple-500/50"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Guarantee */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-600" />
            <span className="font-semibold">Garantie satisfait ou remboursé</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-300" />
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-600" />
            <span className="font-semibold">Paiement en 2-4 fois sans frais</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-300" />
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-600" />
            <span className="font-semibold">Support inclus 1 an</span>
          </div>
        </div>
      </div>
    </section>
  );
}
