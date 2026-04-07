"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Globe, ArrowRight, ArrowLeft, User, Mail,
  Shield, Zap, CheckCircle2, Search, FileText,
  Bot, Loader2, Download,
} from "lucide-react";
import AnalysisProgress from "@/components/tools/AnalysisProgress";

interface RobotsApiResult {
  domain: string;
  url: string;
  urlsDiscovered: number;
  robotsTxt: string;
  internalLinks: string[];
}

const ANALYSIS_STEPS = [
  "Connexion au site...",
  "Decouverte des pages...",
  "Analyse de la structure...",
  "Generation du robots.txt...",
  "Generation du sitemap.xml...",
  "Envoi par email...",
];

export default function RobotsGeneratorForm() {
  const [step, setStep] = useState(1);

  // Step 1: URL
  const [url, setUrl] = useState("");

  // Step 2: Contact info
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // State
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [result, setResult] = useState<RobotsApiResult | null>(null);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState("");
  const [pdfBase64, setPdfBase64] = useState<string | null>(null);

  const isValidUrl = (u: string) => {
    const pattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/;
    return pattern.test(u.trim());
  };

  const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

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
    }, 2000);

    try {
      const res = await fetch("/api/robots-generator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, name, email }),
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
      setError(err instanceof Error ? err.message : "Une erreur est survenue. Verifiez l'URL et reessayez.");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress bar */}
      {step <= 3 && !isAnalyzing && (
        <div className="flex items-center gap-2 mb-8">
          {[1, 2, 3].map(s => (
            <div key={s} className="flex-1">
              <div className={`h-1.5 rounded-full transition-all duration-500 ${s <= step ? "bg-purple-500" : "bg-white/10"}`} />
            </div>
          ))}
          <span className="text-sm text-white/40 ml-2">{step}/3</span>
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* STEP 1: URL */}
        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <h2 className="text-2xl font-bold text-white mb-2">Quel site voulez-vous analyser ?</h2>
            <p className="text-white/50 mb-8 text-sm">Entrez l&apos;URL de votre site pour generer les fichiers robots.txt et sitemap.xml.</p>

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

        {/* STEP 2: Contact Info */}
        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <h2 className="text-2xl font-bold text-white mb-2">Ou envoyer vos fichiers ?</h2>
            <p className="text-white/50 mb-8 text-sm">Les fichiers robots.txt et sitemap.xml seront envoyes a votre adresse email.</p>

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

        {/* STEP 3: Confirmation */}
        {step === 3 && !isAnalyzing && (
          <motion.div key="step3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <h2 className="text-2xl font-bold text-white mb-2">Pret a generer ?</h2>
            <p className="text-white/50 mb-8 text-sm">Verification de vos informations avant de demarrer.</p>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-xs text-white/40">Site a analyser</p>
                  <p className="text-white font-medium">{url}</p>
                </div>
              </div>
              <div className="border-t border-white/5" />
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-xs text-white/40">Fichiers envoyes a</p>
                  <p className="text-white font-medium">{email}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-6">
              {[
                { icon: FileText, label: "robots.txt optimise" },
                { icon: Search, label: "sitemap.xml auto" },
                { icon: Bot, label: "Regles AI bots" },
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
                <Zap className="w-5 h-5 mr-2" /> Generer robots.txt & sitemap
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
              url={url}
              email={email}
              onViewResults={() => { setIsAnalyzing(false); setStep(4); }}
              completeTitle="Generation terminee !"
              completeMessage={`Vous allez recevoir vos fichiers robots.txt et sitemap.xml sur votre boite mail ${email}.`}
            />
          </motion.div>
        )}

        {/* STEP 4: Results */}
        {step === 4 && result && (
          <motion.div key="step4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
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
                Fichiers generes !
              </h2>
              <p className="text-white/50 text-sm">
                <strong className="text-purple-400">{result.urlsDiscovered} URLs</strong> decouvertes sur{" "}
                <strong className="text-white">{result.domain}</strong>
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
                {emailSent ? `Fichiers envoyes a ${email}` : "Les fichiers seront disponibles prochainement par email."}
              </p>
            </motion.div>

            {/* Download PDF */}
            {pdfBase64 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mb-6 text-center">
                <a
                  href={`data:application/pdf;base64,${pdfBase64}`}
                  download={`rapport-robots-${result.domain}.pdf`}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  <Download className="w-4 h-4" /> Telecharger le PDF
                </a>
              </motion.div>
            )}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-400">{result.urlsDiscovered}</div>
                <div className="text-xs text-white/40">URLs decouvertes</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-400">5</div>
                <div className="text-xs text-white/40">Regles AI bots</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">2</div>
                <div className="text-xs text-white/40">Fichiers generes</div>
              </div>
            </div>

            {/* robots.txt preview */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-6"
            >
              <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-purple-400" />
                Apercu robots.txt
              </h3>
              <div className="bg-[#0d0d24] border border-white/10 rounded-xl p-4 overflow-x-auto">
                <pre className="text-green-400 text-xs font-mono whitespace-pre leading-relaxed">
                  {result.robotsTxt}
                </pre>
              </div>
            </motion.div>

            {/* Discovered URLs */}
            {result.internalLinks.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-6"
              >
                <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                  <Search className="w-4 h-4 text-purple-400" />
                  Pages decouvertes ({result.internalLinks.length})
                </h3>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 max-h-48 overflow-y-auto">
                  {result.internalLinks.slice(0, 20).map((link, i) => (
                    <div key={i} className="text-white/50 text-xs font-mono py-1 border-b border-white/5 last:border-0">
                      {link}
                    </div>
                  ))}
                  {result.internalLinks.length > 20 && (
                    <div className="text-white/30 text-xs mt-2 text-center">
                      + {result.internalLinks.length - 20} autres pages dans les fichiers envoyes par email
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* CTA */}
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/30 border border-purple-500/30 rounded-xl p-6 text-center">
              <Bot className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-bold text-lg mb-1">
                Besoin d&apos;optimiser votre SEO ?
              </h3>
              <p className="text-white/50 text-sm mb-4">
                Notre equipe peut deployer ces fichiers et optimiser l&apos;indexation de votre site.
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
