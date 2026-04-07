"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Search, Mail } from "lucide-react";

interface AnalysisProgressProps {
  steps: string[];
  currentStep: number;
  isComplete: boolean;
  url?: string;
  email?: string;
}

export default function AnalysisProgress({ steps, currentStep, isComplete, url, email }: AnalysisProgressProps) {
  if (isComplete) {
    return (
      <div className="text-center py-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 10 }}
        >
          <CheckCircle2 className="w-20 h-20 text-green-400 mx-auto mb-6" />
        </motion.div>

        <h2 className="text-xl font-bold text-white mb-2">Analyse terminee !</h2>
        <p className="text-white/50 text-sm mb-6">
          Vous allez recevoir un <strong className="text-white">rapport PDF complet</strong> sur votre boite mail{" "}
          {email && <strong className="text-purple-400">{email}</strong>}.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4 max-w-md mx-auto text-left">
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

        <div className="mt-6 max-w-md mx-auto">
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 rounded-full w-full" />
          </div>
          <p className="text-xs text-green-400 mt-2">100% — Analyse complete</p>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center py-8">
      <div className="relative w-20 h-20 mx-auto mb-6">
        <div className="absolute inset-0 rounded-full border-4 border-white/10" />
        <div className="absolute inset-0 rounded-full border-4 border-purple-500 border-t-transparent animate-spin" />
        <Search className="absolute inset-0 m-auto w-8 h-8 text-purple-400" />
      </div>

      <h2 className="text-xl font-bold text-white mb-2">Analyse en cours...</h2>
      {url && <p className="text-white/50 text-sm mb-8">{url}</p>}

      <div className="max-w-md mx-auto space-y-3">
        {steps.map((label, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: i <= currentStep ? 1 : 0.3, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 text-sm"
          >
            {i < currentStep ? (
              <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
            ) : i === currentStep ? (
              <Loader2 className="w-4 h-4 text-purple-400 animate-spin flex-shrink-0" />
            ) : (
              <div className="w-4 h-4 rounded-full border border-white/20 flex-shrink-0" />
            )}
            <span className={i <= currentStep ? "text-white/80" : "text-white/30"}>{label}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 max-w-md mx-auto">
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <p className="text-xs text-white/30 mt-2">{Math.round(((currentStep + 1) / steps.length) * 100)}%</p>
      </div>
    </div>
  );
}
