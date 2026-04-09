import {
  CONSENT_COOKIE_NAME,
  CONSENT_LOCALSTORAGE_KEY,
  CONSENT_DURATION_DAYS,
  CONSENT_VERSION,
  type CookieConsent,
} from "./types";

export function getStoredConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(CONSENT_LOCALSTORAGE_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored) as CookieConsent;
    // Invalider si la version a changé
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(consent: Omit<CookieConsent, "consentId" | "timestamp" | "version">): CookieConsent {
  const fullConsent: CookieConsent = {
    ...consent,
    consentId: crypto.randomUUID(),
    timestamp: Date.now(),
    version: CONSENT_VERSION,
  };

  if (typeof window !== "undefined") {
    // localStorage
    localStorage.setItem(CONSENT_LOCALSTORAGE_KEY, JSON.stringify(fullConsent));

    // Cookie (pour le serveur si besoin)
    const expires = new Date();
    expires.setDate(expires.getDate() + CONSENT_DURATION_DAYS);
    document.cookie = `${CONSENT_COOKIE_NAME}=${encodeURIComponent(
      JSON.stringify({ a: consent.analytics, m: consent.marketing, p: consent.preferences })
    )}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;

    // Mettre à jour Google Consent Mode v2
    if ((window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("consent", "update", {
        analytics_storage: consent.analytics ? "granted" : "denied",
        ad_storage: consent.marketing ? "granted" : "denied",
        ad_user_data: consent.marketing ? "granted" : "denied",
        ad_personalization: consent.marketing ? "granted" : "denied",
        functionality_storage: consent.preferences ? "granted" : "denied",
        personalization_storage: consent.preferences ? "granted" : "denied",
        security_storage: "granted",
      });
    }

    // Dispatch event pour les composants qui écoutent
    window.dispatchEvent(new CustomEvent("consent-updated", { detail: fullConsent }));
  }

  return fullConsent;
}

export function resetConsent(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CONSENT_LOCALSTORAGE_KEY);
  document.cookie = `${CONSENT_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}

export async function logConsentToSupabase(
  consent: CookieConsent,
  action: "accept_all" | "reject_all" | "customize" | "update"
): Promise<void> {
  try {
    const { supabase } = await import("@/lib/supabase/client");
    await supabase.from("cookie_consents").insert([
      {
        consent_id: consent.consentId,
        necessary: consent.necessary,
        analytics: consent.analytics,
        marketing: consent.marketing,
        preferences: consent.preferences,
        user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
        page_url: typeof window !== "undefined" ? window.location.href : null,
        referrer: typeof document !== "undefined" ? document.referrer || null : null,
        action,
      },
    ]);
  } catch {
    // Non-bloquant
  }
}
