"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cookie, Settings, Shield, BarChart3, Target, Sparkles, X, Check } from "lucide-react";
import { getStoredConsent, saveConsent, logConsentToSupabase } from "@/lib/cookies/consent";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    // Vérifier si le consentement existe déjà
    const stored = getStoredConsent();
    if (!stored) {
      // Petit délai pour éviter le flash
      setTimeout(() => setIsVisible(true), 800);
    } else {
      setPreferences({
        necessary: true,
        analytics: stored.analytics,
        marketing: stored.marketing,
        preferences: stored.preferences,
      });
    }
  }, []);

  const handleAcceptAll = async () => {
    const consent = saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    });
    await logConsentToSupabase(consent, "accept_all");
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleRejectAll = async () => {
    const consent = saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    });
    await logConsentToSupabase(consent, "reject_all");
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleSavePreferences = async () => {
    const consent = saveConsent(preferences);
    await logConsentToSupabase(consent, "customize");
    setIsVisible(false);
    setShowPreferences(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Modal des préférences détaillées */}
      {showPreferences && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setShowPreferences(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Préférences cookies</h2>
                  <p className="text-xs text-gray-500">Choisissez ce que vous autorisez</p>
                </div>
              </div>
              <button onClick={() => setShowPreferences(false)} className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">
              {/* Nécessaires */}
              <div className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">Cookies nécessaires</h3>
                      <p className="text-sm text-gray-600">
                        Indispensables au fonctionnement du site (sécurité, authentification, formulaires). Toujours actifs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-green-600 flex-shrink-0">
                    <Check className="w-4 h-4" /> Actifs
                  </div>
                </div>
              </div>

              {/* Analytics */}
              <div className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">Cookies analytiques</h3>
                      <p className="text-sm text-gray-600">
                        Google Analytics, Vercel Analytics. Nous aident à comprendre comment vous utilisez notre site pour l&apos;améliorer.
                      </p>
                    </div>
                  </div>
                  <Toggle
                    checked={preferences.analytics}
                    onChange={(v) => setPreferences({ ...preferences, analytics: v })}
                  />
                </div>
              </div>

              {/* Marketing */}
              <div className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">Cookies marketing</h3>
                      <p className="text-sm text-gray-600">
                        Meta Pixel, Google Ads. Permettent de vous proposer des publicités pertinentes et de mesurer leur efficacité.
                      </p>
                    </div>
                  </div>
                  <Toggle
                    checked={preferences.marketing}
                    onChange={(v) => setPreferences({ ...preferences, marketing: v })}
                  />
                </div>
              </div>

              {/* Préférences */}
              <div className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-pink-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">Cookies de préférences</h3>
                      <p className="text-sm text-gray-600">
                        Mémorisent vos choix (langue, thème) pour personnaliser votre expérience.
                      </p>
                    </div>
                  </div>
                  <Toggle
                    checked={preferences.preferences}
                    onChange={(v) => setPreferences({ ...preferences, preferences: v })}
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-100 px-6 py-4 flex flex-col sm:flex-row gap-3 rounded-b-2xl">
              <Button onClick={handleRejectAll} variant="outline" className="flex-1">
                Tout refuser
              </Button>
              <Button onClick={handleSavePreferences} variant="outline" className="flex-1">
                Enregistrer mes choix
              </Button>
              <Button onClick={handleAcceptAll} className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                Tout accepter
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Bandeau principal */}
      <div className="fixed bottom-0 left-0 right-0 z-[90] p-4 sm:p-6 animate-slide-up">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="p-5 sm:p-6">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5">
                {/* Icon + texte */}
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 mb-1">Nous utilisons des cookies 🍪</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu.
                      En savoir plus dans notre{" "}
                      <Link href="/politique-de-cookies" className="text-purple-600 font-medium hover:underline">
                        politique de cookies
                      </Link>.
                    </p>
                  </div>
                </div>

                {/* Boutons */}
                <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto flex-shrink-0">
                  <Button onClick={() => setShowPreferences(true)} variant="outline" size="sm" className="text-xs">
                    <Settings className="w-3.5 h-3.5 mr-1.5" />
                    Personnaliser
                  </Button>
                  <Button onClick={handleRejectAll} variant="outline" size="sm" className="text-xs">
                    Refuser
                  </Button>
                  <Button onClick={handleAcceptAll} size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs">
                    Tout accepter
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
        checked ? "bg-gradient-to-r from-purple-600 to-pink-600" : "bg-gray-300"
      }`}
      role="switch"
      aria-checked={checked}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}
