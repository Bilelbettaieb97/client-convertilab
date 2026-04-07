"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  ArrowLeft,
  User,
  Mail,
  Phone,
  Building2,
  CheckCircle2,
  Search,
  Zap,
  FileText,
  TrendingUp,
  DollarSign,
  Users,
  BarChart3,
  MapPin,
  Target,
  Calendar,
  Download,
} from "lucide-react";
import AnalysisProgress from "@/components/tools/AnalysisProgress";

// Sector list with emoji for selection
const SECTORS = [
  { slug: "restaurant", label: "Restaurant", emoji: "\uD83C\uDF7D\uFE0F" },
  { slug: "avocat", label: "Avocat", emoji: "\u2696\uFE0F" },
  { slug: "coach", label: "Coach", emoji: "\uD83C\uDFAF" },
  { slug: "dentiste", label: "Dentiste", emoji: "\uD83E\uDDB7" },
  { slug: "immobilier", label: "Immobilier", emoji: "\uD83C\uDFE0" },
  { slug: "ecommerce", label: "E-commerce", emoji: "\uD83D\uDED2" },
  { slug: "photographe", label: "Photographe", emoji: "\uD83D\uDCF7" },
  { slug: "artisan", label: "Artisan", emoji: "\uD83D\uDD28" },
  { slug: "startup", label: "Startup / SaaS", emoji: "\uD83D\uDE80" },
  { slug: "fitness", label: "Fitness", emoji: "\uD83D\uDCAA" },
  { slug: "beaute", label: "Institut de beaute", emoji: "\uD83D\uDC85" },
  { slug: "boulangerie", label: "Boulangerie", emoji: "\uD83E\uDD50" },
  { slug: "plombier", label: "Plombier", emoji: "\uD83D\uDD27" },
  { slug: "electricien", label: "Electricien", emoji: "\u26A1" },
  { slug: "architecte", label: "Architecte", emoji: "\uD83C\uDFD7\uFE0F" },
  { slug: "comptable", label: "Comptable", emoji: "\uD83D\uDCCA" },
  { slug: "formation", label: "Formation", emoji: "\uD83C\uDF93" },
  { slug: "veterinaire", label: "Veterinaire", emoji: "\uD83D\uDC3E" },
  { slug: "fleuriste", label: "Fleuriste", emoji: "\uD83C\uDF38" },
  { slug: "coiffeur", label: "Coiffeur", emoji: "\u2702\uFE0F" },
  { slug: "garage", label: "Garage auto", emoji: "\uD83D\uDE97" },
  { slug: "hotel", label: "Hotel", emoji: "\uD83C\uDFE8" },
  { slug: "demenagement", label: "Demenagement", emoji: "\uD83D\uDE9A" },
  { slug: "traiteur", label: "Traiteur", emoji: "\uD83C\uDF72" },
  { slug: "psychologue", label: "Psychologue", emoji: "\uD83E\uDDE0" },
  { slug: "menuisier", label: "Menuisier", emoji: "\uD83E\uDE9A" },
  { slug: "serrurier", label: "Serrurier", emoji: "\uD83D\uDD10" },
  { slug: "paysagiste", label: "Paysagiste", emoji: "\uD83C\uDF3F" },
  { slug: "osteopathe", label: "Osteopathe", emoji: "\uD83E\uDDBD" },
  { slug: "opticien", label: "Opticien", emoji: "\uD83D\uDC53" },
  { slug: "pharmacie", label: "Pharmacie", emoji: "\uD83D\uDC8A" },
  { slug: "agence-immobiliere", label: "Agence immobiliere", emoji: "\uD83C\uDFE2" },
  { slug: "agence-voyage", label: "Agence de voyage", emoji: "\u2708\uFE0F" },
  { slug: "auto-ecole", label: "Auto-ecole", emoji: "\uD83D\uDE97" },
  { slug: "creche", label: "Creche", emoji: "\uD83D\uDC76" },
  { slug: "demenageur", label: "Demenageur", emoji: "\uD83D\uDCE6" },
  { slug: "notaire", label: "Notaire", emoji: "\uD83D\uDCDC" },
  { slug: "expert-comptable", label: "Expert-comptable", emoji: "\uD83D\uDCC8" },
  { slug: "wedding-planner", label: "Wedding Planner", emoji: "\uD83D\uDC8D" },
  { slug: "decorateur", label: "Decorateur d'interieur", emoji: "\uD83C\uDFA8" },
  { slug: "graphiste", label: "Graphiste / Designer", emoji: "\uD83D\uDD8C\uFE0F" },
  { slug: "consultant", label: "Consultant", emoji: "\uD83D\uDCBC" },
  { slug: "formateur", label: "Formateur", emoji: "\uD83C\uDF93" },
  { slug: "nutritionniste", label: "Nutritionniste", emoji: "\uD83E\uDD57" },
  { slug: "kine", label: "Kinesitherapeute", emoji: "\uD83E\uDDD8" },
  { slug: "podologue", label: "Podologue", emoji: "\uD83E\uDDB6" },
  { slug: "dermatologue", label: "Dermatologue", emoji: "\uD83E\uDE7A" },
  { slug: "chirurgien-dentiste", label: "Chirurgien-dentiste", emoji: "\uD83E\uDDB7" },
  { slug: "orthophoniste", label: "Orthophoniste", emoji: "\uD83D\uDDE3\uFE0F" },
  { slug: "sage-femme", label: "Sage-femme", emoji: "\uD83D\uDC76" },
  { slug: "infirmier", label: "Infirmier / IDEL", emoji: "\uD83C\uDFE5" },
  { slug: "taxi", label: "Taxi / VTC", emoji: "\uD83D\uDE95" },
  { slug: "pressing", label: "Pressing / Teinturerie", emoji: "\uD83D\uDC54" },
  { slug: "bijoutier", label: "Bijoutier / Joaillier", emoji: "\uD83D\uDC8E" },
  { slug: "caviste", label: "Caviste", emoji: "\uD83C\uDF77" },
  { slug: "fromagerie", label: "Fromagerie", emoji: "\uD83E\uDDC0" },
  { slug: "chocolatier", label: "Chocolatier", emoji: "\uD83C\uDF6B" },
  { slug: "primeur", label: "Primeur", emoji: "\uD83C\uDF4E" },
  { slug: "epicerie", label: "Epicerie fine", emoji: "\uD83D\uDED2" },
  { slug: "librairie", label: "Librairie", emoji: "\uD83D\uDCDA" },
  { slug: "spa", label: "Spa / Bien-etre", emoji: "\uD83E\uDDD6" },
  { slug: "yoga", label: "Yoga", emoji: "\uD83E\uDDD8" },
  { slug: "pilates", label: "Pilates", emoji: "\uD83E\uDDD8" },
  { slug: "crossfit", label: "CrossFit", emoji: "\uD83C\uDFCB\uFE0F" },
  { slug: "salle-de-sport", label: "Salle de sport", emoji: "\uD83D\uDCAA" },
  { slug: "tatoueur", label: "Tatoueur", emoji: "\uD83C\uDFA8" },
  { slug: "barbier", label: "Barbier", emoji: "\u2702\uFE0F" },
];

const PLATFORMS = [
  { value: "google" as const, label: "Google Ads", desc: "Recherche Google, Shopping, Display" },
  { value: "meta" as const, label: "Meta Ads", desc: "Facebook, Instagram, Messenger" },
  { value: "both" as const, label: "Les deux", desc: "Google Ads + Meta Ads combines" },
];

const ANALYSIS_STEPS = [
  "Analyse du secteur...",
  "Calcul du CPC moyen...",
  "Estimation des clics...",
  "Projection des leads...",
  "Calcul du ROI...",
  "Generation du rapport PDF...",
  "Envoi par email...",
];

interface ProjectionData {
  sectorLabel: string;
  city: string;
  platform: string;
  budgetMonthly: number;
  avgBasket: number;
  cpc: number;
  ctr: number;
  conversionRate: number;
  monthlyClicks: number;
  monthlyLeads: number;
  monthlyRevenue: number;
  monthlyRoas: number;
  projections: {
    months: number;
    investment: number;
    clicks: number;
    leads: number;
    revenue: number;
    roas: number;
    profit: number;
  }[];
  grade: string;
  gradeLabel: string;
}

export default function AdsEstimatorForm() {
  const [step, setStep] = useState(1);
  const [sector, setSector] = useState("");
  const [city, setCity] = useState("");
  const [platform, setPlatform] = useState<"google" | "meta" | "both" | "">("");
  const [budgetMonthly, setBudgetMonthly] = useState("");
  const [avgBasket, setAvgBasket] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [result, setResult] = useState<ProjectionData | null>(null);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState("");
  const [pdfBase64, setPdfBase64] = useState<string | null>(null);
  const [sectorSearch, setSectorSearch] = useState("");

  const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const canProceedStep1 = !!sector && !!platform;
  const canProceedStep2 = Number(budgetMonthly) >= 300 && Number(avgBasket) > 0;
  const canProceedStep3 = !!name && isValidEmail(email);

  const selectedSector = SECTORS.find((s) => s.slug === sector);
  const selectedPlatform = PLATFORMS.find((p) => p.value === platform);

  const filteredSectors = sectorSearch
    ? SECTORS.filter((s) =>
        s.label.toLowerCase().includes(sectorSearch.toLowerCase()) ||
        s.slug.toLowerCase().includes(sectorSearch.toLowerCase())
      )
    : SECTORS;

  const handleAnalyze = async () => {
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
    }, 1500);

    try {
      const res = await fetch("/api/estimateur-ads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          sector,
          city,
          budgetMonthly: Number(budgetMonthly),
          avgBasket: Number(avgBasket),
          platform,
        }),
      });

      clearInterval(interval);
      setAnalysisStep(ANALYSIS_STEPS.length);

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erreur lors de l'analyse");
      }

      const data = await res.json();
      setResult(data.projection);
      setEmailSent(data.emailSent);
      setPdfBase64(data.pdfBase64 || null);
    } catch (err: unknown) {
      clearInterval(interval);
      setIsAnalyzing(false);
      setError(err instanceof Error ? err.message : "Une erreur est survenue. Reessayez.");
    }
  };

  const gradeColor = (grade: string) => {
    if (grade === "A+" || grade === "A") return "text-green-400";
    if (grade === "B") return "text-yellow-400";
    if (grade === "C") return "text-orange-400";
    return "text-red-400";
  };

  const gradeBg = (grade: string) => {
    if (grade === "A+" || grade === "A") return "bg-green-500/10 border-green-500/20";
    if (grade === "B") return "bg-yellow-500/10 border-yellow-500/20";
    if (grade === "C") return "bg-orange-500/10 border-orange-500/20";
    return "bg-red-500/10 border-red-500/20";
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress bar */}
      {step <= 4 && !isAnalyzing && (
        <div className="flex items-center gap-2 mb-8">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div
                className={`h-1.5 rounded-full flex-1 transition-all duration-500 ${
                  s <= step ? "bg-purple-500" : "bg-white/10"
                }`}
              />
            </div>
          ))}
          <span className="text-sm text-white/40 ml-2">{step}/4</span>
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* STEP 1: Sector + City + Platform */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-white mb-2">Votre activite</h2>
            <p className="text-white/50 mb-6 text-sm">
              Selectionnez votre secteur et la plateforme publicitaire souhaitee.
            </p>

            {/* Sector search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <Input
                placeholder="Rechercher un secteur..."
                value={sectorSearch}
                onChange={(e) => setSectorSearch(e.target.value)}
                className="pl-10 h-11 bg-white/5 border-white/10 text-white rounded-xl focus:border-purple-500"
              />
            </div>

            {/* Sector grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-[280px] overflow-y-auto pr-1 mb-6 custom-scrollbar">
              {filteredSectors.map((s) => (
                <button
                  key={s.slug}
                  onClick={() => setSector(s.slug)}
                  className={`flex flex-col items-center gap-1 p-3 rounded-xl border transition-all duration-200 text-center ${
                    sector === s.slug
                      ? "border-purple-500 bg-purple-500/10 shadow-lg shadow-purple-500/10"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/5"
                  }`}
                >
                  <span className="text-xl">{s.emoji}</span>
                  <span className={`text-xs font-medium ${sector === s.slug ? "text-white" : "text-white/60"}`}>
                    {s.label}
                  </span>
                </button>
              ))}
            </div>

            {/* City */}
            <div className="relative mb-6">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <Input
                placeholder="Ville (optionnel, ex: Paris)"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="pl-10 h-11 bg-white/5 border-white/10 text-white rounded-xl focus:border-purple-500"
              />
            </div>

            {/* Platform selection */}
            <p className="text-sm text-white/60 font-medium mb-3">Plateforme publicitaire *</p>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {PLATFORMS.map((p) => (
                <button
                  key={p.value}
                  onClick={() => setPlatform(p.value)}
                  className={`p-4 rounded-xl border transition-all duration-200 text-center ${
                    platform === p.value
                      ? "border-purple-500 bg-purple-500/10 shadow-lg shadow-purple-500/10"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/5"
                  }`}
                >
                  <p className={`text-sm font-semibold ${platform === p.value ? "text-white" : "text-white/70"}`}>
                    {p.label}
                  </p>
                  <p className="text-xs text-white/40 mt-1">{p.desc}</p>
                </button>
              ))}
            </div>

            <Button
              onClick={() => setStep(2)}
              disabled={!canProceedStep1}
              className="w-full h-13 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl text-base disabled:opacity-30"
            >
              Continuer <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        )}

        {/* STEP 2: Budget + Average basket */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-white mb-2">Votre budget et objectifs</h2>
            <p className="text-white/50 mb-8 text-sm">
              Indiquez votre budget publicitaire mensuel et votre panier moyen client.
            </p>

            <div className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-sm text-white/70 font-medium mb-2">
                  <DollarSign className="w-4 h-4 text-purple-400" />
                  Budget mensuel publicitaire *
                </label>
                <div className="relative">
                  <Input
                    type="number"
                    min={300}
                    step={100}
                    placeholder="Ex: 1000"
                    value={budgetMonthly}
                    onChange={(e) => setBudgetMonthly(e.target.value)}
                    className="h-14 bg-white/5 border-white/10 text-white text-lg rounded-xl focus:border-purple-500 pr-12"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 text-sm">
                    {"\u20ac"}/mois
                  </span>
                </div>
                {budgetMonthly && Number(budgetMonthly) < 300 && (
                  <p className="text-orange-400 text-xs mt-2">
                    Budget minimum recommande : 300{"\u00a0"}{"\u20ac"}/mois pour des resultats significatifs.
                  </p>
                )}
                <div className="flex gap-2 mt-3">
                  {[500, 1000, 2000, 5000].map((v) => (
                    <button
                      key={v}
                      onClick={() => setBudgetMonthly(String(v))}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                        budgetMonthly === String(v)
                          ? "border-purple-500 bg-purple-500/20 text-purple-300"
                          : "border-white/10 bg-white/5 text-white/50 hover:border-white/20"
                      }`}
                    >
                      {v.toLocaleString("fr-FR")}{"\u00a0"}{"\u20ac"}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm text-white/70 font-medium mb-2">
                  <Target className="w-4 h-4 text-purple-400" />
                  Panier moyen client *
                </label>
                <div className="relative">
                  <Input
                    type="number"
                    min={1}
                    step={10}
                    placeholder="Ex: 150"
                    value={avgBasket}
                    onChange={(e) => setAvgBasket(e.target.value)}
                    className="h-14 bg-white/5 border-white/10 text-white text-lg rounded-xl focus:border-purple-500 pr-8"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 text-sm">{"\u20ac"}</span>
                </div>
                <p className="text-white/30 text-xs mt-2">
                  Montant moyen que depense un client chez vous (prestation, commande, devis...).
                </p>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <Button
                onClick={() => setStep(1)}
                variant="outline"
                className="h-12 px-6 border-white/10 text-white/60 rounded-xl hover:bg-white/5"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Retour
              </Button>
              <Button
                onClick={() => setStep(3)}
                disabled={!canProceedStep2}
                className="flex-1 h-12 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl disabled:opacity-30"
              >
                Continuer <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* STEP 3: Contact info */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-white mb-2">Ou envoyer votre rapport ?</h2>
            <p className="text-white/50 mb-8 text-sm">
              Le rapport PDF complet avec vos projections sera envoye a votre adresse email.
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <Input
                    placeholder="Votre nom *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 h-12 bg-white/5 border-white/10 text-white rounded-xl focus:border-purple-500"
                  />
                </div>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <Input
                    placeholder="Entreprise"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="pl-10 h-12 bg-white/5 border-white/10 text-white rounded-xl focus:border-purple-500"
                  />
                </div>
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <Input
                  type="email"
                  placeholder="votre@email.com *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 bg-white/5 border-white/10 text-white rounded-xl focus:border-purple-500"
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <Input
                  type="tel"
                  placeholder="Telephone (optionnel)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="pl-10 h-12 bg-white/5 border-white/10 text-white rounded-xl focus:border-purple-500"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button
                onClick={() => setStep(2)}
                variant="outline"
                className="h-12 px-6 border-white/10 text-white/60 rounded-xl hover:bg-white/5"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Retour
              </Button>
              <Button
                onClick={() => setStep(4)}
                disabled={!canProceedStep3}
                className="flex-1 h-12 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl disabled:opacity-30"
              >
                Continuer <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* STEP 4: Confirmation + Launch */}
        {step === 4 && !isAnalyzing && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-white mb-2">Pret a calculer votre ROI ?</h2>
            <p className="text-white/50 mb-8 text-sm">
              Verification de vos informations avant de generer les projections.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="text-xl">{selectedSector?.emoji}</div>
                <div>
                  <p className="text-xs text-white/40">Secteur</p>
                  <p className="text-white font-medium">
                    {selectedSector?.label}
                    {city ? ` — ${city}` : ""}
                  </p>
                </div>
              </div>
              <div className="border-t border-white/5" />
              <div className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-xs text-white/40">Plateforme</p>
                  <p className="text-white font-medium">{selectedPlatform?.label}</p>
                </div>
              </div>
              <div className="border-t border-white/5" />
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-xs text-white/40">Budget mensuel</p>
                    <p className="text-white font-medium">{Number(budgetMonthly).toLocaleString("fr-FR")}{"\u00a0"}{"\u20ac"}/mois</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-xs text-white/40">Panier moyen</p>
                    <p className="text-white font-medium">{Number(avgBasket).toLocaleString("fr-FR")}{"\u00a0"}{"\u20ac"}</p>
                  </div>
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
                { icon: TrendingUp, label: "Projection 12 mois" },
                { icon: FileText, label: "Rapport PDF complet" },
                { icon: Zap, label: "Resultats instantanes" },
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
              <Button
                onClick={() => setStep(3)}
                variant="outline"
                className="h-12 px-6 border-white/10 text-white/60 rounded-xl hover:bg-white/5"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Retour
              </Button>
              <Button
                onClick={handleAnalyze}
                className="flex-1 h-13 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-xl text-base"
              >
                <Zap className="w-5 h-5 mr-2" /> Calculer mon ROI
              </Button>
            </div>
          </motion.div>
        )}

        {/* ANALYZING STATE */}
        {isAnalyzing && (
          <motion.div
            key="analyzing"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <AnalysisProgress
              steps={ANALYSIS_STEPS}
              currentStep={analysisStep}
              isComplete={analysisStep >= ANALYSIS_STEPS.length}
              email={email}
              onViewResults={() => { setIsAnalyzing(false); setStep(5); }}
            />
          </motion.div>
        )}

        {/* STEP 5: Results */}
        {step === 5 && result && (
          <motion.div
            key="step5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Grade header */}
            <div className="text-center mb-8">
              <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl border ${gradeBg(result.grade)}`}>
                <span className={`text-4xl font-black ${gradeColor(result.grade)}`}>{result.grade}</span>
                <div className="text-left">
                  <p className={`text-sm font-semibold ${gradeColor(result.grade)}`}>{result.gradeLabel}</p>
                  <p className="text-xs text-white/40">ROAS: {result.monthlyRoas}x</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-4 mb-2">Vos projections {result.platform}</h2>
              <p className="text-white/50 text-sm">
                {result.sectorLabel}{result.city ? ` a ${result.city}` : ""} — Budget {result.budgetMonthly.toLocaleString("fr-FR")}{"\u00a0"}{"\u20ac"}/mois
              </p>
            </div>

            {/* Monthly summary */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <Users className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">{result.monthlyLeads}</p>
                <p className="text-xs text-white/40">leads/mois</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <TrendingUp className="w-5 h-5 text-green-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-400">
                  {result.monthlyRevenue.toLocaleString("fr-FR")}{"\u00a0"}{"\u20ac"}
                </p>
                <p className="text-xs text-white/40">CA/mois estime</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <BarChart3 className={`w-5 h-5 ${gradeColor(result.grade)} mx-auto mb-2`} />
                <p className={`text-2xl font-bold ${gradeColor(result.grade)}`}>{result.monthlyRoas}x</p>
                <p className="text-xs text-white/40">ROAS</p>
              </div>
            </div>

            {/* Projection cards */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {result.projections.map((proj, i) => (
                <div
                  key={proj.months}
                  className={`rounded-xl border p-4 ${
                    i === 2
                      ? "bg-purple-500/10 border-purple-500/30"
                      : "bg-white/5 border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <p className="text-sm font-semibold text-white">{proj.months} mois</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-white/40">Investissement</span>
                      <span className="text-white/70">{proj.investment.toLocaleString("fr-FR")}{"\u00a0"}{"\u20ac"}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/40">Leads</span>
                      <span className="text-purple-300 font-semibold">{proj.leads.toLocaleString("fr-FR")}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/40">CA estime</span>
                      <span className="text-green-400 font-semibold">{proj.revenue.toLocaleString("fr-FR")}{"\u00a0"}{"\u20ac"}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/40">ROAS</span>
                      <span className={`font-semibold ${gradeColor(result.grade)}`}>{proj.roas}x</span>
                    </div>
                    <div className="border-t border-white/5 pt-2 flex justify-between text-xs">
                      <span className="text-white/40">Profit net</span>
                      <span className={`font-bold ${proj.profit >= 0 ? "text-green-400" : "text-red-400"}`}>
                        {proj.profit >= 0 ? "+" : ""}
                        {proj.profit.toLocaleString("fr-FR")}{"\u00a0"}{"\u20ac"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Email confirmation */}
            {emailSent && (
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-6 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-green-400 font-medium">Rapport PDF envoye !</p>
                  <p className="text-xs text-white/40 mt-1">
                    Un rapport complet avec projections detaillees et plan d&apos;action a ete envoye a{" "}
                    <strong className="text-purple-300">{email}</strong>.
                  </p>
                </div>
              </div>
            )}

            {/* Download PDF */}
            {pdfBase64 && (
              <div className="mb-6 text-center">
                <a
                  href={`data:application/pdf;base64,${pdfBase64}`}
                  download="rapport-estimateur-ads.pdf"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  <Download className="w-4 h-4" /> Telecharger le PDF
                </a>
              </div>
            )}

            {/* Benchmark info */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
              <p className="text-xs text-white/60 font-medium mb-2">Benchmarks utilises pour {result.sectorLabel}</p>
              <div className="grid grid-cols-3 gap-4 text-xs">
                <div>
                  <p className="text-white/30">CPC moyen</p>
                  <p className="text-white font-medium">{result.cpc.toFixed(2)}{"\u00a0"}{"\u20ac"}</p>
                </div>
                <div>
                  <p className="text-white/30">CTR moyen</p>
                  <p className="text-white font-medium">{(result.ctr * 100).toFixed(1)}%</p>
                </div>
                <div>
                  <p className="text-white/30">Taux de conversion</p>
                  <p className="text-white font-medium">{(result.conversionRate * 100).toFixed(1)}%</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6 text-center">
              <h3 className="text-lg font-bold text-white mb-2">
                On gere vos campagnes publicitaires
              </h3>
              <p className="text-white/50 text-sm mb-4">
                Confiez vos campagnes Google Ads et Meta Ads a notre equipe d&apos;experts.
                Premiere consultation gratuite.
              </p>
              <a
                href="https://convertilab.com/contact"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Prendre rendez-vous gratuit <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
