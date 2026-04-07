"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight, ArrowLeft, User, Mail, Phone, Building2,
  Loader2, CheckCircle2, TrendingUp, Zap, Search, ChevronDown, Download,
} from "lucide-react";
import { sectors } from "@/data/sectors";

interface ReportResult {
  sectorName: string;
  sectorEmoji: string;
  stats: { label: string; value: string }[];
  painPoints: string[];
  solutions: { title: string; description: string }[];
  checklistCount: number;
  essentialCount: number;
}

const ANALYSIS_STEPS = [
  "Analyse du secteur...",
  "Compilation des donnees...",
  "Diagnostic du marche...",
  "Checklist digitale...",
  "Etude de cas...",
  "Generation du rapport PDF...",
  "Envoi par email...",
];

const POPULAR_COUNT = 20;

export default function SectorReportForm() {
  const [step, setStep] = useState(1);
  const [selectedSector, setSelectedSector] = useState<string>("");
  const [showAll, setShowAll] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [result, setResult] = useState<ReportResult | null>(null);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState("");
  const [pdfBase64, setPdfBase64] = useState<string | null>(null);

  const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const selectedSectorData = sectors.find((s) => s.slug === selectedSector);
  const displayedSectors = showAll ? sectors : sectors.slice(0, POPULAR_COUNT);

  const handleGenerate = async () => {
    setIsAnalyzing(true);
    setError("");
    setAnalysisStep(0);

    const interval = setInterval(() => {
      setAnalysisStep((prev) => {
        if (prev >= ANALYSIS_STEPS.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1800);

    try {
      const res = await fetch("/api/rapport-sectoriel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sectorSlug: selectedSector, name, email, phone, company }),
      });

      clearInterval(interval);
      setAnalysisStep(ANALYSIS_STEPS.length);

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erreur lors de la generation");
      }

      const data = await res.json();
      setResult(data.report);
      setEmailSent(data.emailSent);
      setPdfBase64(data.pdfBase64 || null);
    } catch (err: unknown) {
      clearInterval(interval);
      setIsAnalyzing(false);
      setError(err instanceof Error ? err.message : "Une erreur est survenue. Reessayez.");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress bar */}
      {step < 4 && !isAnalyzing && (
        <div className="flex items-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div className={`h-1.5 rounded-full flex-1 transition-all duration-500 ${s <= step ? "bg-purple-500" : "bg-white/10"}`} />
            </div>
          ))}
          <span className="text-sm text-white/40 ml-2">{step}/3</span>
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* STEP 1: Sector Selection */}
        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <h2 className="text-2xl font-bold text-white mb-2">Quel est votre secteur d&apos;activite ?</h2>
            <p className="text-white/50 mb-6 text-sm">Selectionnez votre secteur pour recevoir un rapport digital personnalise.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-[400px] overflow-y-auto pr-2">
              {displayedSectors.map((sector) => (
                <button
                  key={sector.slug}
                  onClick={() => setSelectedSector(sector.slug)}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                    selectedSector === sector.slug
                      ? "bg-purple-600/20 border-purple-500 text-white"
                      : "bg-white/[0.03] border-white/10 text-white/60 hover:border-white/30 hover:bg-white/[0.05]"
                  }`}
                >
                  <span className="text-2xl mb-1">{sector.emoji}</span>
                  <span className="text-xs font-medium leading-tight">{sector.name}</span>
                </button>
              ))}
            </div>

            {!showAll && sectors.length > POPULAR_COUNT && (
              <button
                onClick={() => setShowAll(true)}
                className="flex items-center gap-2 mx-auto mt-4 text-sm text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
              >
                <ChevronDown className="w-4 h-4" />
                Voir tous les secteurs ({sectors.length})
              </button>
            )}

            <Button
              onClick={() => setStep(2)}
              disabled={!selectedSector}
              className="w-full mt-6 h-13 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl text-base disabled:opacity-30"
            >
              Continuer <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        )}

        {/* STEP 2: Contact info */}
        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <h2 className="text-2xl font-bold text-white mb-2">Ou envoyer votre rapport ?</h2>
            <p className="text-white/50 mb-8 text-sm">Le rapport PDF complet sera envoye a votre adresse email.</p>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <Input placeholder="Votre nom *" value={name} onChange={(e) => setName(e.target.value)} className="pl-10 h-12 bg-white/5 border-white/10 text-white rounded-xl focus:border-purple-500" />
                </div>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <Input placeholder="Entreprise" value={company} onChange={(e) => setCompany(e.target.value)} className="pl-10 h-12 bg-white/5 border-white/10 text-white rounded-xl focus:border-purple-500" />
                </div>
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <Input type="email" placeholder="votre@email.com *" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-10 h-12 bg-white/5 border-white/10 text-white rounded-xl focus:border-purple-500" />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <Input type="tel" placeholder="Telephone (optionnel)" value={phone} onChange={(e) => setPhone(e.target.value)} className="pl-10 h-12 bg-white/5 border-white/10 text-white rounded-xl focus:border-purple-500" />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button onClick={() => setStep(1)} variant="outline" className="h-12 px-6 border-white/10 text-white/60 rounded-xl hover:bg-white/5">
                <ArrowLeft className="w-4 h-4 mr-2" /> Retour
              </Button>
              <Button
                onClick={() => setStep(3)}
                disabled={!name || !isValidEmail(email)}
                className="flex-1 h-12 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl disabled:opacity-30"
              >
                Continuer <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* STEP 3: Confirmation + Generate */}
        {step === 3 && !isAnalyzing && (
          <motion.div key="step3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <h2 className="text-2xl font-bold text-white mb-2">Pret a generer votre rapport ?</h2>
            <p className="text-white/50 mb-8 text-sm">Verification de vos informations avant de demarrer.</p>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="text-3xl">{selectedSectorData?.emoji}</div>
                <div>
                  <p className="text-xs text-white/40">Secteur selectionne</p>
                  <p className="text-white font-medium">{selectedSectorData?.name}</p>
                </div>
              </div>
              <div className="border-t border-white/5" />
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-xs text-white/40">Rapport envoye a</p>
                  <p className="text-white font-medium">{email}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-6">
              {[
                { icon: Search, label: "Diagnostic complet" },
                { icon: CheckCircle2, label: "Checklist digitale" },
                { icon: TrendingUp, label: "Plan d'action" },
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
              <Button onClick={() => setStep(2)} variant="outline" className="h-12 px-6 border-white/10 text-white/60 rounded-xl hover:bg-white/5">
                <ArrowLeft className="w-4 h-4 mr-2" /> Retour
              </Button>
              <Button
                onClick={handleGenerate}
                className="flex-1 h-13 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-xl text-base"
              >
                <Zap className="w-5 h-5 mr-2" /> Generer le rapport
              </Button>
            </div>
          </motion.div>
        )}

        {/* ANALYZING STATE */}
        {isAnalyzing && (
          <motion.div key="analyzing" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
            {analysisStep < ANALYSIS_STEPS.length ? (
              <>
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full border-4 border-white/10" />
                  <div className="absolute inset-0 rounded-full border-4 border-purple-500 border-t-transparent animate-spin" />
                  <Search className="absolute inset-0 m-auto w-8 h-8 text-purple-400" />
                </div>

                <h2 className="text-xl font-bold text-white mb-2">Generation en cours...</h2>
                <p className="text-white/50 text-sm mb-8">{selectedSectorData?.emoji} {selectedSectorData?.name}</p>

                <div className="max-w-md mx-auto space-y-3">
                  {ANALYSIS_STEPS.map((label, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: i <= analysisStep ? 1 : 0.3, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-sm"
                    >
                      {i < analysisStep ? (
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                      ) : i === analysisStep ? (
                        <Loader2 className="w-4 h-4 text-purple-400 animate-spin flex-shrink-0" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-white/20 flex-shrink-0" />
                      )}
                      <span className={i <= analysisStep ? "text-white/80" : "text-white/30"}>{label}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 max-w-md mx-auto">
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: `${((analysisStep + 1) / ANALYSIS_STEPS.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <p className="text-xs text-white/30 mt-2">{Math.round(((analysisStep + 1) / ANALYSIS_STEPS.length) * 100)}%</p>
                </div>
              </>
            ) : (
              <>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", damping: 10 }}>
                  <CheckCircle2 className="w-20 h-20 text-green-400 mx-auto mb-6" />
                </motion.div>

                <h2 className="text-xl font-bold text-white mb-2">Rapport genere !</h2>
                <p className="text-white/50 text-sm mb-6">
                  Vous allez recevoir un <strong className="text-white">rapport PDF de 6 pages</strong> sur votre boite mail{" "}
                  <strong className="text-purple-400">{email}</strong>.
                </p>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4 max-w-md mx-auto text-left mb-6">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium mb-1">Verifiez votre boite de reception</p>
                      <p className="text-white/40 text-xs">
                        Si vous ne recevez pas le rapport d&apos;ici 10 minutes, verifiez vos spams ou contactez-nous a{" "}
                        <a href="mailto:contact@convertilab.com" className="text-purple-400 underline">contact@convertilab.com</a>
                      </p>
                    </div>
                  </div>
                </div>

                <Button onClick={() => { setIsAnalyzing(false); setStep(4); }} className="bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl px-8 py-3">
                  Voir les resultats <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <div className="mt-6 max-w-md mx-auto">
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full w-full" />
                  </div>
                  <p className="text-xs text-green-400 mt-2">100% — Rapport genere</p>
                </div>
              </>
            )}
          </motion.div>
        )}

        {/* STEP 4: Results */}
        {step === 4 && result && (
          <motion.div key="step4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            {/* Sector hero */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 10, delay: 0.2 }}
                className="inline-block"
              >
                <div className="text-6xl mb-2">{result.sectorEmoji}</div>
                <div className="text-2xl font-bold text-white">{result.sectorName}</div>
              </motion.div>
            </div>

            {/* Email notification */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`p-4 rounded-xl mb-6 flex items-center gap-3 ${emailSent ? "bg-green-500/10 border border-green-500/20" : "bg-yellow-500/10 border border-yellow-500/20"}`}
            >
              <CheckCircle2 className={`w-5 h-5 ${emailSent ? "text-green-400" : "text-yellow-400"}`} />
              <p className={`text-sm ${emailSent ? "text-green-300" : "text-yellow-300"}`}>
                {emailSent ? `Rapport PDF de 6 pages envoye a ${email}` : "Le rapport PDF sera disponible prochainement par email."}
              </p>
            </motion.div>

            {/* Download PDF */}
            {pdfBase64 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mb-6 text-center">
                <a
                  href={`data:application/pdf;base64,${pdfBase64}`}
                  download={`rapport-sectoriel-${result.sectorName}.pdf`}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  <Download className="w-4 h-4" /> Telecharger le PDF
                </a>
              </motion.div>
            )}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {result.stats.slice(0, 3).map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
                >
                  <div className="text-xl font-bold text-purple-400">{stat.value}</div>
                  <p className="text-xs text-white/50 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Pain points */}
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-4">
              <h3 className="text-red-400 font-bold text-sm mb-2">
                {result.painPoints.length} problemes identifies dans le secteur
              </h3>
              {result.painPoints.slice(0, 3).map((pp, i) => (
                <p key={i} className="text-red-300/70 text-xs mb-1">{"\u2022"} {pp}</p>
              ))}
            </div>

            {/* Checklist summary */}
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 mb-6">
              <h3 className="text-purple-400 font-bold text-sm mb-2">Checklist digitale incluse</h3>
              <p className="text-purple-300/70 text-xs">
                {result.essentialCount} points essentiels et {result.checklistCount - result.essentialCount} recommandes pour votre presence digitale.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/30 border border-purple-500/30 rounded-xl p-6 text-center">
              <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-bold text-lg mb-1">
                Lancez votre projet digital
              </h3>
              <p className="text-white/50 text-sm mb-4">
                Notre equipe peut creer votre site et mettre en place toute la strategie digitale pour votre secteur.
              </p>
              <a
                href="https://convertilab.com/contact"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-colors"
              >
                Consultation gratuite <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-white/30 text-xs mt-3">
                30 minutes offertes — Sans engagement
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
