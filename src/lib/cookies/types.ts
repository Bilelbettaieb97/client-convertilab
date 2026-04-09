export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  consentId: string;
  timestamp: number;
  version: string;
}

export const CONSENT_VERSION = "1.0";
export const CONSENT_COOKIE_NAME = "convertilab_consent";
export const CONSENT_LOCALSTORAGE_KEY = "convertilab_consent";
export const CONSENT_DURATION_DAYS = 365;

export const DEFAULT_CONSENT: Omit<CookieConsent, "consentId" | "timestamp"> = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
  version: CONSENT_VERSION,
};
