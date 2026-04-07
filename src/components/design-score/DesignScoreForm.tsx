"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Globe, ArrowRight, ArrowLeft, User, Mail, Phone, Building2,
  Search, Loader2, CheckCircle2, AlertTriangle, TrendingUp,
  Shield, Zap, FileText, Download,
} from "lucide-react";

interface DesignResult {
  domain: string;
  scores: {
    cta: number;
    hierarchy: number;
    trust: number;
    mobile: number;
    images: number;
    navigation: number;
    global: number;
  };
  grade: string;
  gradeLabel: string;
  issues: { title: string; priority: string }[];
  strengths: string[];
  totalIssues: number;
  criticalIssues: number;
  ctaCount: number;
  formCount: number;
}

const ANALYSIS_STEPS = [
  "Connexion au site...",
  "Analyse des CTA...",
  "Verification de la hierarchie...",
  "Detection des signaux de confiance...",
  "Test de compatibilite mobile...",
  "Analyse des images...",
  "Verification de la navigation...",
  "Generation du rapport PDF...",
  "Envoi par email...",
];

export default function DesignScoreForm() {
  const [step, setStep] = useState(1);
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [result, setResult] = useState<DesignResult | null>(null);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState("");
  const [pdfBase64, setPdfBase64] = useState<string | null>(null);

  const isValidUrl = (u: string) => {
    const pattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/;
    return pattern.test(u.trim());
  };

  const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const handleAnalyze = async () => {
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
    }, 2500);

    try {
      const res = await fetch("/api/design-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, name, email, phone, company }),
      });

      clearInterval(interval);
      setAnalysisStep(ANALYSIS_STEPS.length);

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erreur lors de l'analyse");
      }

      const data = await res.json();
      setResult(data.audit);
      setEmailSent(data.emailSent);
      setPdfBase64(data.pdfBase64 || null);
    } catch (err: unknown) {
      clearInterval(interval);
      setIsAnalyzing(false);
      setError(err instanceof Error ? err.message : "Une erreur est survenue. Verifiez l&apos;URL et reessayez.");
    }
  };

  const scoreColor = (score: number) => {
    if (score >= 80) return "text-green-400";
    if (score >= 60) return "text-yellow-400";
    if (score >= 40) return "text-orange-400";
    return "text-red-400";
  };

  const scoreBg = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-yellow-500";
    if (score >= 40) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress bar */}
      {step < 4 && !isAnalyzing && (
        <div className="flex items-center gap-2 mb-8">
          {[1, 2, 3].map(s => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div className={`h-1.5 rounded-full flex-1 transition-all duration-500 ${s <= step ? "bg-purple-500" : "bg-white/10"}`} />
            </div>
          ))}
          <span className="text-sm text-white/40 ml-2">{step}/3</span>
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* STEP 1: URL */}
        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <h2 className="text-2xl font-bold text-white mb-2">Quel site voulez-vous evaluer ?</h2>
            <p className="text-white/50 mb-8 text-sm">Entrez l&apos;URL de votre site web pour analyser son design et son experience utilisateur.</p>

            <div className="relative">
              <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <Input
                type="text"
                placeholder="exemple.com"
                value={url}
                onChange={e => setUrl(e.target.value)}
                className="pl-12 h-14 bg-white/5 border-white/10 text-white text-lg rounded-xl focus:border-purple-500 focus:ring-purple-500/20"
                onKeyDown={e => e.key === "Enter" && isValidUrl(url) && setStep(2)}
              />
            </div>
            {url && !isValidUrl(url) && (
              <p className="text-red-400 text-xs mt-2">Entrez une URL valide (ex: monsite.com)</p>
            )}

            <div className="flex items-center gap-3 mt-4 text-xs text-white/30">
              <Shield className="w-4 h-4" />
              <span>Analyse 100% gratuite et confidentielle — Aucune modification sur votre site</span>
            </div>

            <Button
              onClick={() => setStep(2)}
              disabled={!isValidUrl(url)}
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
                  <Input placeholder="Votre nom *" value={name} onChange={e => setName(e.target.value)} className="pl-10 h-12 bg-white/5 border-white/10 text-white rounded-xl focus:border-purple-500" />
                </div>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <Input placeholder="Entreprise" value={company} onChange={e => setCompany(e.target.value)} className="pl-10 h-12 bg-white/5 border-white/10 text-white rounded-xl focus:border-purple-500" />
                </div>
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <Input type="email" placeholder="votre@email.com *" value={email} onChange={e => setEmail(e.target.value)} className="pl-10 h-12 bg-white/5 border-white/10 text-white rounded-xl focus:border-purple-500" />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <Input type="tel" placeholder="Telephone (optionnel)" value={phone} onChange={e => setPhone(e.target.value)} className="pl-10 h-12 bg-white/5 border-white/10 text-white rounded-xl focus:border-purple-500" />
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

        {/* STEP 3: Confirmation + Launch */}
        {step === 3 && !isAnalyzing && (
          <motion.div key="step3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <h2 className="text-2xl font-bold text-white mb-2">Pret a lancer l&apos;evaluation ?</h2>
            <p className="text-white/50 mb-8 text-sm">Verification de vos informations avant de demarrer l&apos;analyse UX.</p>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-xs text-white/40">Site a evaluer</p>
                  <p className="text-white font-medium">{url}</p>
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
                { icon: Search, label: "6 categories UX" },
                { icon: Zap, label: "CTA & Conversion" },
                { icon: FileText, label: "Rapport PDF complet" },
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
                onClick={handleAnalyze}
                className="flex-1 h-13 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-xl text-base"
              >
                <Zap className="w-5 h-5 mr-2" /> Lancer l&apos;audit Design & UX
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

                <h2 className="text-xl font-bold text-white mb-2">Analyse en cours...</h2>
                <p className="text-white/50 text-sm mb-8">{url}</p>

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

                <h2 className="text-xl font-bold text-white mb-2">Analyse terminee !</h2>
                <p className="text-white/50 text-sm mb-6">
                  Vous allez recevoir un <strong className="text-white">rapport PDF complet</strong> sur votre boite mail{" "}
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
                  <p className="text-xs text-green-400 mt-2">100% — Analyse complete</p>
                </div>
              </>
            )}
          </motion.div>
        )}

        {/* STEP 4: Results */}
        {step === 4 && result && (
          <motion.div key="step4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            {/* Score hero */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 10, delay: 0.2 }}
                className="inline-block"
              >
                <div className={`text-7xl font-black ${scoreColor(result.scores.global)}`}>
                  {result.scores.global}
                </div>
                <div className="text-white/50 text-sm">sur 100</div>
              </motion.div>
              <div className={`text-3xl font-bold mt-2 ${scoreColor(result.scores.global)}`}>
                Grade {result.grade} — {result.gradeLabel}
              </div>
              <p className="text-white/40 text-sm mt-2">{result.domain}</p>
            </div>

            {/* Email notification */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`p-4 rounded-xl mb-6 flex items-center gap-3 ${emailSent ? "bg-green-500/10 border border-green-500/20" : "bg-yellow-500/10 border border-yellow-500/20"}`}
            >
              {emailSent ? <CheckCircle2 className="w-5 h-5 text-green-400" /> : <AlertTriangle className="w-5 h-5 text-yellow-400" />}
              <p className={`text-sm ${emailSent ? "text-green-300" : "text-yellow-300"}`}>
                {emailSent ? `Rapport PDF envoye a ${email}` : "Le rapport PDF sera disponible prochainement par email."}
              </p>
            </motion.div>

            {/* Download PDF */}
            {pdfBase64 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mb-6 text-center">
                <a
                  href={`data:application/pdf;base64,${pdfBase64}`}
                  download={`rapport-design-${result.domain}.pdf`}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  <Download className="w-4 h-4" /> Telecharger le PDF
                </a>
              </motion.div>
            )}

            {/* Score grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { label: "CTA & Conversion", score: result.scores.cta },
                { label: "Hierarchie Visuelle", score: result.scores.hierarchy },
                { label: "Signaux de Confiance", score: result.scores.trust },
                { label: "Compatibilite Mobile", score: result.scores.mobile },
                { label: "Images & Medias", score: result.scores.images },
                { label: "Navigation & UX", score: result.scores.navigation },
              ].map((cat, i) => (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3"
                >
                  <div className={`text-2xl font-bold ${scoreColor(cat.score)}`}>{cat.score}</div>
                  <div className="flex-1">
                    <p className="text-sm text-white/70">{cat.label}</p>
                    <div className="h-1.5 bg-white/10 rounded-full mt-1 overflow-hidden">
                      <div className={`h-full rounded-full ${scoreBg(cat.score)}`} style={{ width: `${cat.score}%` }} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Issues summary */}
            {result.criticalIssues > 0 && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-4">
                <h3 className="text-red-400 font-bold text-sm mb-2">
                  {result.criticalIssues} probleme(s) critique(s)
                </h3>
                {result.issues.filter(i => i.priority === "critical").map((issue, i) => (
                  <p key={i} className="text-red-300/70 text-xs mb-1">{"\u2022"} {issue.title}</p>
                ))}
              </div>
            )}

            {/* Strengths */}
            {result.strengths.length > 0 && (
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-6">
                <h3 className="text-green-400 font-bold text-sm mb-2">Points forts</h3>
                {result.strengths.map((s, i) => (
                  <p key={i} className="text-green-300/70 text-xs mb-1">{"\u2713"} {s}</p>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/30 border border-purple-500/30 rounded-xl p-6 text-center">
              <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-bold text-lg mb-1">
                Envie de passer a {result.scores.global >= 80 ? "95+" : result.scores.global >= 60 ? "85+" : "75+"}/100 ?
              </h3>
              <p className="text-white/50 text-sm mb-4">
                Notre equipe peut redesigner votre site pour maximiser les conversions.
              </p>
              <a
                href="https://convertilab.com/contact"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-colors"
              >
                Prendre rendez-vous gratuit <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-white/30 text-xs mt-3">
                Consultation de 30 min offerte — Sans engagement
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
