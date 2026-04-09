import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Cookie, Shield, BarChart3, Target, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de Cookies",
  description: "Politique de cookies de ConvertiLab. Découvrez quels cookies nous utilisons et comment gérer vos préférences.",
  alternates: { canonical: `${SITE.url}/politique-de-cookies` },
};

const categories = [
  {
    icon: Shield,
    color: "green",
    title: "Cookies nécessaires",
    desc: "Indispensables au fonctionnement du site. Ils permettent la navigation, l'authentification, la sécurité et la soumission des formulaires.",
    examples: ["Session utilisateur", "Préférences de consentement cookies", "Sécurité (anti-CSRF)"],
    canDisable: false,
  },
  {
    icon: BarChart3,
    color: "blue",
    title: "Cookies analytiques",
    desc: "Nous aident à comprendre comment vous utilisez notre site pour l'améliorer en continu. Aucune donnée personnelle identifiable.",
    examples: ["Google Analytics 4 (_ga, _gid)", "Vercel Analytics", "Pages visitées et durée"],
    canDisable: true,
  },
  {
    icon: Target,
    color: "purple",
    title: "Cookies marketing",
    desc: "Permettent de vous proposer des publicités pertinentes sur d'autres sites et de mesurer l'efficacité de nos campagnes publicitaires.",
    examples: ["Meta Pixel (Facebook/Instagram)", "Google Ads", "Retargeting"],
    canDisable: true,
  },
  {
    icon: Sparkles,
    color: "pink",
    title: "Cookies de préférences",
    desc: "Mémorisent vos choix et préférences (langue, affichage) pour personnaliser votre expérience à chaque visite.",
    examples: ["Préférences d'affichage", "Choix de langue"],
    canDisable: true,
  },
];

export default function PolitiqueCookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <article className="pt-24 sm:pt-32 pb-16 sm:pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold mb-4">
              <Cookie className="w-3 h-3" />
              Politique de cookies
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Politique de cookies
            </h1>
            <p className="text-lg text-gray-600">
              Mis à jour le 8 avril 2026
            </p>
          </div>

          {/* Intro */}
          <div className="prose prose-gray max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed text-base">
              Cette politique explique comment <strong>{SITE.name}</strong> utilise les cookies et technologies similaires
              sur le site convertilab.com. Nous respectons votre vie privée et nous conformons au RGPD ainsi qu&apos;à
              la directive ePrivacy.
            </p>
          </div>

          {/* Qu'est-ce qu'un cookie */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Qu&apos;est-ce qu&apos;un cookie ?</h2>
            <p className="text-gray-600 leading-relaxed">
              Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, tablette, smartphone)
              lorsque vous visitez un site web. Il permet au site de mémoriser vos actions et préférences pour
              une période donnée, afin que vous n&apos;ayez pas à les saisir à chaque visite.
            </p>
          </section>

          {/* Catégories */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Les cookies que nous utilisons</h2>
            <div className="space-y-4">
              {categories.map((cat, i) => {
                const colorMap: Record<string, { bg: string; text: string; border: string }> = {
                  green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200" },
                  blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
                  purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200" },
                  pink: { bg: "bg-pink-100", text: "text-pink-600", border: "border-pink-200" },
                };
                const colors = colorMap[cat.color];
                const Icon = cat.icon;
                return (
                  <div key={i} className={`border ${colors.border} rounded-2xl p-6`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-gray-900">{cat.title}</h3>
                          {!cat.canDisable && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                              TOUJOURS ACTIF
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">{cat.desc}</p>
                        <div>
                          <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Exemples</p>
                          <ul className="space-y-1">
                            {cat.examples.map((ex, j) => (
                              <li key={j} className="text-sm text-gray-700 flex items-start gap-2">
                                <span className="text-gray-400 mt-1">•</span>
                                <span>{ex}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Gérer ses préférences */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment gérer vos préférences ?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Vous pouvez à tout moment modifier vos préférences en cliquant sur le bouton ci-dessous.
              Vous pouvez également supprimer les cookies déjà stockés depuis les paramètres de votre navigateur.
            </p>
            <button
              onClick={undefined}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              suppressHydrationWarning
              data-cookie-reset
            >
              <Cookie className="w-4 h-4" />
              Modifier mes préférences cookies
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Vous pouvez aussi gérer les cookies dans les paramètres de votre navigateur :{" "}
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">Chrome</a>,{" "}
              <a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies-preferences" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">Firefox</a>,{" "}
              <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">Safari</a>
            </p>
          </section>

          {/* Durée */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Durée de conservation</h2>
            <p className="text-gray-600 leading-relaxed">
              Vos préférences de consentement sont conservées pendant <strong>13 mois</strong>,
              conformément aux recommandations de la CNIL. Passé ce délai, nous vous demanderons à nouveau votre consentement.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-12 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Une question ?</h2>
            <p className="text-gray-600 mb-4">
              Pour toute question concernant cette politique de cookies ou la gestion de vos données personnelles,
              contactez-nous.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700">
                Nous contacter
              </Link>
              <Link href="/politique-de-confidentialite" className="inline-flex items-center justify-center px-4 py-2 bg-white text-purple-600 border border-purple-200 rounded-lg text-sm font-semibold hover:bg-purple-50">
                Politique de confidentialité
              </Link>
            </div>
          </section>
        </div>
      </article>

      <Footer />

      {/* Script pour bouton reset cookies */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              var btn = document.querySelector('[data-cookie-reset]');
              if (btn) {
                btn.addEventListener('click', function() {
                  localStorage.removeItem('convertilab_consent');
                  document.cookie = 'convertilab_consent=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
                  window.location.reload();
                });
              }
            });
          `,
        }}
      />
    </div>
  );
}
