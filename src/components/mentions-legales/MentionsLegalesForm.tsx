"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight, ArrowLeft, User, Mail, Building2,
  MapPin, FileText, Globe, Cookie, Shield,
  CheckCircle2, Loader2, Zap, Server, Phone,
  Hash, UserCircle, Search, Download,
} from "lucide-react";
import AnalysisProgress from "@/components/tools/AnalysisProgress";

interface MentionsLegalesApiResult {
  sections: { title: string; content: string }[];
  companyName: string;
  generatedAt: string;
  totalSections: number;
}

const COMPANY_TYPES = [
  { value: "auto-entrepreneur", label: "Auto-entrepreneur", icon: "👤" },
  { value: "sarl", label: "SARL", icon: "🏢" },
  { value: "sas", label: "SAS", icon: "🏛️" },
  { value: "eurl", label: "EURL", icon: "🏠" },
  { value: "association", label: "Association", icon: "🤝" },
  { value: "autre", label: "Autre", icon: "📋" },
];

const HOSTS = [
  { value: "vercel", label: "Vercel", icon: "▲" },
  { value: "ovh", label: "OVH", icon: "🌐" },
  { value: "o2switch", label: "o2switch", icon: "🔄" },
  { value: "ionos", label: "IONOS", icon: "☁️" },
  { value: "autre", label: "Autre", icon: "🖥️" },
];

const ANALYSIS_STEPS = [
  "Preparation du document...",
  "Generation des mentions legales...",
  "Section editeur...",
  "Section RGPD...",
  "Section cookies...",
  "Mise en forme PDF...",
  "Envoi par email...",
];

export default function MentionsLegalesForm() {
  const [step, setStep] = useState(1);

  // Step 1: Company type & name
  const [companyType, setCompanyType] = useState("");
  const [companyName, setCompanyName] = useState("");

  // Step 2: Company details
  const [address, setAddress] = useState("");
  const [siret, setSiret] = useState("");
  const [directorName, setDirectorName] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");

  // Step 3: Host
  const [host, setHost] = useState("");
  const [hostCustom, setHostCustom] = useState("");

  // Step 4: Cookies & Data
  const [hasCookiesAnalytics, setHasCookiesAnalytics] = useState(false);
  const [hasCookiesMarketing, setHasCookiesMarketing] = useState(false);
  const [hasCookiesFunctional, setHasCookiesFunctional] = useState(false);
  const [hasContactForm, setHasContactForm] = useState(false);

  // Step 5: Contact info
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // State
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [result, setResult] = useState<MentionsLegalesApiResult | null>(null);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState("");
  const [pdfBase64, setPdfBase64] = useState<string | null>(null);

  const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const totalSteps = 6;

  const handleGenerate = async () => {
    setIsAnalyzing(true);
    setError("");
    setAnalysisStep(0);

    const interval = setInterval(() => {
      setAnalysisStep(prev => {
        if (prev >= ANALYSIS_STEPS.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);

    try {
      const res = await fetch("/api/mentions-legales", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          companyType,
          companyName,
          address,
          siret,
          directorName,
          companyEmail: email,
          phone: companyPhone,
          host,
          hostCustom: host === "autre" ? hostCustom : undefined,
          hasCookiesAnalytics,
          hasCookiesMarketing,
          hasCookiesFunctional,
          hasContactForm,
          websiteUrl: websiteUrl || undefined,
        }),
      });

      clearInterval(interval);
      setAnalysisStep(ANALYSIS_STEPS.length);

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erreur lors de la generation");
      }

      const data = await res.json();
      setResult(data.result);
      setEmailSent(data.emailSent);
      setPdfBase64(data.pdfBase64 || null);
    } catch (err: unknown) {
      clearInterval(interval);
      setIsAnalyzing(false);
      setError(err instanceof Error ? err.message : "Une erreur est survenue. Verifiez vos informations et reessayez.");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress bar */}
      {step <= totalSteps && !isAnalyzing && (
        <div className="flex items-center gap-2 mb-8">
          {Array.from({ length: totalSteps }, (_, i) => i + 1).map(s => (
            <div key={s} className="flex-1">
              <div className={`h-1.5 rounded-full transition-all duration-500 ${s <= step ? "bg-purple-500" : "bg-white/10"}`} />
            </div>
          ))}
          <span className="text-sm text-white/40 ml-2">{step}/{totalSteps}</span>
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* STEP 1: Company Type + Name */}
        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <h2 className="text-2xl font-bold text-white mb-2">Quel est le type de votre entreprise ?</h2>
            <p className="text-white/50 mb-6 text-sm">Selectionnez la forme juridique de votre structure.</p>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {COMPANY_TYPES.map(ct => (
                <button
                  key={ct.value}
                  onClick={() => setCompanyType(ct.value)}
                  className={`p-4 rounded-xl border text-center transition-all ${
                    companyType === ct.value
                      ? "border-purple-500 bg-purple-500/10 text-white"
                      : "border-white/10 bg-white/[0.03] text-white/60 hover:border-white/20"
                  }`}
                >
                  <div className="text-2xl mb-2">{ct.icon}</div>
                  <div className="text-sm font-medium">{ct.label}</div>
                </button>
              ))}
            </div>

            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <Input
                type="text"
                placeholder="Nom de l'entreprise *"
                value={companyName}
                onChange={e => setCompanyName(e.target.value)}
                className="pl-12 h-14 bg-white/5 border-white/10 text-white text-lg rounded-xl focus:border-purple-500 focus:ring-purple-500/20"
              />
            </div>

            <Button
              onClick={() => setStep(2)}
              disabled={!companyType || !companyName}
              className="w-full mt-6 h-13 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl text-base disabled:opacity-30"
            >
              Continuer <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        )}

        {/* STEP 2: Company Details */}
        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <h2 className="text-2xl font-bold text-white mb-2">Informations de l&apos;entreprise</h2>
            <p className="text-white/50 mb-6 text-sm">Ces informations apparaitront dans vos mentions legales.</p>

            <div className="space-y-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <Input placeholder="Adresse du siege social *" value={address} onChange={e => setAddress(e.target.value)} className="pl-10 h-12 bg-white/5 border-white/10 text-white rounded-xl focus:border-purple-500" />
              </div>
              <div className="relative">
                <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <Input placeholder="Numero SIRET *" value={siret} onChange={e => setSiret(e.target.value)} className="pl-10 h-12 bg-white/5 border-white/10 text-white rounded-xl focus:border-purple-500" />
              </div>
              <div className="relative">
                <UserCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <Input placeholder="Nom du directeur de publication *" value={directorName} onChange={e => setDirectorName(e.target.value)} className="pl-10 h-12 bg-white/5 border-white/10 text-white rounded-xl focus:border-purple-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <Input placeholder="Telephone (optionnel)" value={companyPhone} onChange={e => setCompanyPhone(e.target.value)} className="pl-10 h-12 bg-white/5 border-white/10 text-white rounded-xl focus:border-purple-500" />
                </div>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <Input placeholder="URL du site (optionnel)" value={websiteUrl} onChange={e => setWebsiteUrl(e.target.value)} className="pl-10 h-12 bg-white/5 border-white/10 text-white rounded-xl focus:border-purple-500" />
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button onClick={() => setStep(1)} variant="outline" className="h-12 px-6 border-white/10 text-white/60 rounded-xl hover:bg-white/5">
                <ArrowLeft className="w-4 h-4 mr-2" /> Retour
              </Button>
              <Button
                onClick={() => setStep(3)}
                disabled={!address || !siret || !directorName}
                className="flex-1 h-12 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl disabled:opacity-30"
              >
                Continuer <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* STEP 3: Host Selection */}
        {step === 3 && (
          <motion.div key="step3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <h2 className="text-2xl font-bold text-white mb-2">Quel est votre hebergeur ?</h2>
            <p className="text-white/50 mb-6 text-sm">Selectionnez l&apos;hebergeur de votre site web.</p>

            <div className="grid grid-cols-3 gap-3 mb-4">
              {HOSTS.map(h => (
                <button
                  key={h.value}
                  onClick={() => setHost(h.value)}
                  className={`p-4 rounded-xl border text-center transition-all ${
                    host === h.value
                      ? "border-purple-500 bg-purple-500/10 text-white"
                      : "border-white/10 bg-white/[0.03] text-white/60 hover:border-white/20"
                  }`}
                >
                  <div className="text-2xl mb-2">{h.icon}</div>
                  <div className="text-sm font-medium">{h.label}</div>
                </button>
              ))}
            </div>

            {host === "autre" && (
              <div className="relative mt-4">
                <Server className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <Input placeholder="Nom de l'hebergeur *" value={hostCustom} onChange={e => setHostCustom(e.target.value)} className="pl-10 h-12 bg-white/5 border-white/10 text-white rounded-xl focus:border-purple-500" />
              </div>
            )}

            <div className="flex gap-3 mt-6">
              <Button onClick={() => setStep(2)} variant="outline" className="h-12 px-6 border-white/10 text-white/60 rounded-xl hover:bg-white/5">
                <ArrowLeft className="w-4 h-4 mr-2" /> Retour
              </Button>
              <Button
                onClick={() => setStep(4)}
                disabled={!host || (host === "autre" && !hostCustom)}
                className="flex-1 h-12 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl disabled:opacity-30"
              >
                Continuer <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* STEP 4: Cookies & Data */}
        {step === 4 && (
          <motion.div key="step4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <h2 className="text-2xl font-bold text-white mb-2">Cookies & Donnees</h2>
            <p className="text-white/50 mb-6 text-sm">Selectionnez les types de cookies utilises sur votre site.</p>

            <div className="space-y-3">
              {[
                { label: "Cookies analytiques", desc: "Google Analytics, Plausible, Matomo...", value: hasCookiesAnalytics, setter: setHasCookiesAnalytics, icon: "📊" },
                { label: "Cookies marketing", desc: "Facebook Pixel, Google Ads, retargeting...", value: hasCookiesMarketing, setter: setHasCookiesMarketing, icon: "📣" },
                { label: "Cookies fonctionnels", desc: "Preferences utilisateur, session...", value: hasCookiesFunctional, setter: setHasCookiesFunctional, icon: "⚙️" },
              ].map(cookie => (
                <button
                  key={cookie.label}
                  onClick={() => cookie.setter(!cookie.value)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${
                    cookie.value
                      ? "border-purple-500 bg-purple-500/10"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20"
                  }`}
                >
                  <div className="text-2xl">{cookie.icon}</div>
                  <div className="flex-1">
                    <div className="text-white font-medium text-sm">{cookie.label}</div>
                    <div className="text-white/40 text-xs">{cookie.desc}</div>
                  </div>
                  <div className={`w-10 h-6 rounded-full transition-all flex items-center ${
                    cookie.value ? "bg-purple-600 justify-end" : "bg-white/10 justify-start"
                  }`}>
                    <div className={`w-4 h-4 rounded-full mx-1 transition-all ${
                      cookie.value ? "bg-white" : "bg-white/30"
                    }`} />
                  </div>
                </button>
              ))}

              <div className="border-t border-white/5 pt-3 mt-3">
                <button
                  onClick={() => setHasContactForm(!hasContactForm)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${
                    hasContactForm
                      ? "border-purple-500 bg-purple-500/10"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20"
                  }`}
                >
                  <div className="text-2xl">📝</div>
                  <div className="flex-1">
                    <div className="text-white font-medium text-sm">Formulaire de contact</div>
                    <div className="text-white/40 text-xs">Votre site dispose d&apos;un formulaire de contact</div>
                  </div>
                  <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${
                    hasContactForm ? "border-purple-500 bg-purple-600" : "border-white/20"
                  }`}>
                    {hasContactForm && <CheckCircle2 className="w-4 h-4 text-white" />}
                  </div>
                </button>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button onClick={() => setStep(3)} variant="outline" className="h-12 px-6 border-white/10 text-white/60 rounded-xl hover:bg-white/5">
                <ArrowLeft className="w-4 h-4 mr-2" /> Retour
              </Button>
              <Button
                onClick={() => setStep(5)}
                className="flex-1 h-12 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl"
              >
                Continuer <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* STEP 5: Contact Info */}
        {step === 5 && (
          <motion.div key="step5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <h2 className="text-2xl font-bold text-white mb-2">Ou envoyer le document ?</h2>
            <p className="text-white/50 mb-6 text-sm">Le PDF sera envoye a votre adresse email.</p>

            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <Input placeholder="Votre nom *" value={name} onChange={e => setName(e.target.value)} className="pl-10 h-12 bg-white/5 border-white/10 text-white rounded-xl focus:border-purple-500" />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <Input type="email" placeholder="votre@email.com *" value={email} onChange={e => setEmail(e.target.value)} className="pl-10 h-12 bg-white/5 border-white/10 text-white rounded-xl focus:border-purple-500" />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button onClick={() => setStep(4)} variant="outline" className="h-12 px-6 border-white/10 text-white/60 rounded-xl hover:bg-white/5">
                <ArrowLeft className="w-4 h-4 mr-2" /> Retour
              </Button>
              <Button
                onClick={() => setStep(6)}
                disabled={!name || !isValidEmail(email)}
                className="flex-1 h-12 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl disabled:opacity-30"
              >
                Continuer <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* STEP 6: Confirmation */}
        {step === 6 && !isAnalyzing && (
          <motion.div key="step6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <h2 className="text-2xl font-bold text-white mb-2">Pret a generer ?</h2>
            <p className="text-white/50 mb-6 text-sm">Verification de vos informations avant de demarrer la generation.</p>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-xs text-white/40">Entreprise</p>
                  <p className="text-white font-medium">{companyName}</p>
                </div>
              </div>
              <div className="border-t border-white/5" />
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-xs text-white/40">Document envoye a</p>
                  <p className="text-white font-medium">{email}</p>
                </div>
              </div>
              <div className="border-t border-white/5" />
              <div className="flex items-center gap-3">
                <Cookie className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-xs text-white/40">Cookies & Donnees</p>
                  <p className="text-white font-medium text-sm">
                    {[
                      hasCookiesAnalytics && "Analytiques",
                      hasCookiesMarketing && "Marketing",
                      hasCookiesFunctional && "Fonctionnels",
                      hasContactForm && "Formulaire",
                    ].filter(Boolean).join(", ") || "Aucun"}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-6">
              {[
                { icon: Shield, label: "Conforme LCEN" },
                { icon: FileText, label: "Conforme RGPD" },
                { icon: Zap, label: "PDF en 30 secondes" },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 rounded-lg p-3 text-center">
                  <item.icon className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                  <p className="text-xs text-white/50">{item.label}</p>
                </div>
              ))}
            </div>

            {error && (
              <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                {error}
              </div>
            )}

            <div className="flex gap-3 mt-6">
              <Button onClick={() => setStep(5)} variant="outline" className="h-12 px-6 border-white/10 text-white/60 rounded-xl hover:bg-white/5">
                <ArrowLeft className="w-4 h-4 mr-2" /> Retour
              </Button>
              <Button
                onClick={handleGenerate}
                className="flex-1 h-13 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-xl text-base"
              >
                <Zap className="w-5 h-5 mr-2" /> Generer mes mentions legales
              </Button>
            </div>
          </motion.div>
        )}

        {/* ANALYZING STATE */}
        {isAnalyzing && (
          <motion.div key="analyzing" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <AnalysisProgress
              steps={ANALYSIS_STEPS}
              currentStep={analysisStep}
              isComplete={analysisStep >= ANALYSIS_STEPS.length}
              email={email}
              onViewResults={() => { setIsAnalyzing(false); setStep(7); }}
            />
          </motion.div>
        )}

        {/* STEP 7: Results */}
        {step === 7 && result && (
          <motion.div key="step7" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            {/* Success header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 10, delay: 0.2 }}
              >
                <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
              </motion.div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Mentions legales generees !
              </h2>
              <p className="text-white/50 text-sm">
                {result.totalSections} sections generees pour <strong className="text-purple-400">{result.companyName}</strong>
              </p>
            </div>

            {/* Email notification */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`p-4 rounded-xl mb-6 flex items-center gap-3 ${emailSent ? "bg-green-500/10 border border-green-500/20" : "bg-yellow-500/10 border border-yellow-500/20"}`}
            >
              {emailSent ? <CheckCircle2 className="w-5 h-5 text-green-400" /> : <Loader2 className="w-5 h-5 text-yellow-400" />}
              <p className={`text-sm ${emailSent ? "text-green-300" : "text-yellow-300"}`}>
                {emailSent ? `Document PDF envoye a ${email}` : "Le document sera disponible prochainement par email."}
              </p>
            </motion.div>

            {/* Download PDF */}
            {pdfBase64 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mb-6 text-center">
                <a
                  href={`data:application/pdf;base64,${pdfBase64}`}
                  download={`mentions-legales-${result.companyName}.pdf`}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  <Download className="w-4 h-4" /> Telecharger le PDF
                </a>
              </motion.div>
            )}

            {/* Preview sections */}
            <div className="space-y-4 mb-6">
              {result.sections.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-5"
                >
                  <h3 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-purple-600 rounded-md flex items-center justify-center text-xs text-white font-bold">{i + 1}</span>
                    {section.title}
                  </h3>
                  <p className="text-white/40 text-xs whitespace-pre-line line-clamp-4">
                    {section.content}
                  </p>
                </motion.div>
              ))}

              {result.totalSections > 3 && (
                <div className="text-center text-white/30 text-sm">
                  + {result.totalSections - 3} autres sections dans le PDF complet
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/30 border border-purple-500/30 rounded-xl p-6 text-center">
              <Shield className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-bold text-lg mb-1">
                Besoin d&apos;aide pour la mise en conformite ?
              </h3>
              <p className="text-white/50 text-sm mb-4">
                Notre equipe peut vous accompagner sur le RGPD, les CGV et la conformite legale de votre site.
              </p>
              <a
                href="https://www.convertilab.com/contact"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-colors"
              >
                Prendre rendez-vous gratuit <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-white/30 text-xs mt-3">
                Consultation de 30 min offerte, sans engagement
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
