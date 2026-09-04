"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { getDevisServiceBySlug, getAllDevisServiceSlugs } from "@/data/devis-pages";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  CheckCircle2,
  Send,
  Clock,
  Shield,
  Gift,
  User,
  ChevronRight,
  HelpCircle,
  ArrowRight,
  Star,
} from "lucide-react";

const advantages = [
  { icon: Gift, label: "100% gratuit", desc: "Aucun frais pour le devis" },
  { icon: Shield, label: "Sans engagement", desc: "Vous etes libre de votre choix" },
  { icon: Clock, label: "Reponse sous 24h", desc: "Devis detaille et personnalise" },
  { icon: User, label: "Sur-mesure", desc: "Adapte a vos besoins precis" },
];

export default function DevisServicePage() {
  const { service } = useParams<{ service: string }>();
  const devisService = getDevisServiceBySlug(service);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    project: service || "",
    message: "",
    main_challenge: "non_specifie",
    timeline: "",
    urgency: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  // Title is set server-side via generateMetadata — no client override needed

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim()) {
      toast({ title: "Nom requis", variant: "destructive" });
      return;
    }
    if (!emailRegex.test(formData.email)) {
      toast({ title: "Email invalide", variant: "destructive" });
      return;
    }
    if (!formData.phone.trim()) {
      toast({ title: "Telephone requis", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("devis_submissions").insert([{
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        sector: formData.project,
        offer: devisService?.name || service,
        message: formData.message,
      }]);
      // Non-bloquant : Pipedrive est la source de verite pour le lead. Une panne
      // d'enregistrement en base ne doit pas faire perdre la demande.
      if (error) console.error("[supabase] devis_submissions:", error.message);

      // Non-bloquant notification
      fetch("/api/notify", {
        method: "POST",
        keepalive: true,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: `Devis - ${service}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          fields: {
            project: formData.project,
            service: devisService?.name || service,
            message: formData.message,
            main_challenge: formData.main_challenge,
            timeline: formData.timeline,
            urgency: formData.urgency,
          },
        }),
      }).catch(() => {});

      if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).trackFormConversion) {
        ((window as unknown as Record<string, unknown>).trackFormConversion as () => void)();
      }

      setIsSubmitted(true);
      toast({ title: "Demande envoyee avec succes !" });
    } catch {
      toast({
        title: "Erreur lors de l'envoi",
        description: "Veuillez reessayer ou nous contacter directement.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!devisService) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Service non trouve
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Ce service n&apos;existe pas. Decouvrez nos autres offres.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors"
            >
              Nous contacter
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Accueil</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/contact">Devis</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Devis {devisService.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-purple-50 to-white dark:from-slate-950 dark:to-slate-900">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold mb-6">
                <CheckCircle2 className="w-4 h-4" />
                Gratuit et sans engagement
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Devis {devisService.name} Gratuit
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                {devisService.description}
              </p>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-12 border-b border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {advantages.map((adv, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-3">
                    <adv.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">
                    {adv.label}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form + Benefits */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
              {/* Form */}
              <div className="lg:col-span-3">
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 shadow-xl border border-slate-200 dark:border-slate-800">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                    Recevez votre devis personnalise
                  </h2>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        Demande envoyee !
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-6">
                        Nous vous recontactons sous 24h avec un devis detaille.
                      </p>
                      <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700"
                      >
                        Retour a l&apos;accueil
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                            Nom complet *
                          </label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Jean Dupont"
                            required
                            className="h-12 rounded-xl"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                            Email *
                          </label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="jean@entreprise.com"
                            required
                            className="h-12 rounded-xl"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                            Entreprise
                          </label>
                          <Input
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Nom de votre entreprise"
                            className="h-12 rounded-xl"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                            Telephone *
                          </label>
                          <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="06 12 34 56 78"
                            required
                            className="h-12 rounded-xl"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Type de projet
                        </label>
                        <div className="px-4 py-3 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 font-medium">
                          {devisService.name}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Decrivez votre projet
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Parlez-nous de votre projet, vos objectifs, vos contraintes..."
                          rows={5}
                          className="rounded-xl resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/20"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                              />
                            </svg>
                            Envoi en cours...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="w-5 h-5" />
                            Recevoir mon devis gratuit
                          </span>
                        )}
                      </Button>

                      <p className="text-xs text-slate-400 text-center">
                        En soumettant ce formulaire, vous acceptez notre{" "}
                        <Link href="/politique-de-confidentialite" className="underline hover:text-purple-500">
                          politique de confidentialite
                        </Link>
                        .
                      </p>
                    </form>
                  )}
                </div>
              </div>

              {/* Benefits sidebar */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-800">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-purple-500" />
                    Avantages
                  </h3>
                  <div className="space-y-3">
                    {devisService.benefits.map((benefit, i) => (
                      <div key={i} className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-slate-600 dark:text-slate-400">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-800">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    Besoin d&apos;en discuter ?
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                    Reservez une consultation gratuite de 30 min avec notre equipe.
                  </p>
                  <a
                    href={SITE.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                  >
                    Reserver un creneau
                  </a>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-800">
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                    Vous pouvez aussi nous contacter directement :
                  </p>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="block text-lg font-bold text-purple-600 hover:text-purple-700 mb-1"
                  >
                    {SITE.phoneDisplay}
                  </a>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-sm text-slate-500 hover:text-purple-500"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro + Décomposition du prix (contenu SEO / information gain) */}
        {(devisService.intro || devisService.priceBreakdown) && (
          <section className="py-16 md:py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-4xl mx-auto">
                {devisService.intro && (
                  <>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      {devisService.name} : combien ça coûte, et pourquoi ?
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                      {devisService.intro}
                    </p>
                  </>
                )}

                {devisService.priceBreakdown && (
                  <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden mb-6">
                    <div className="flex items-center justify-between gap-3 px-6 py-4 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                      <span className="font-bold text-slate-900 dark:text-white">Décomposition du prix</span>
                      {devisService.priceFrom && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-bold">
                          {devisService.priceFrom}
                        </span>
                      )}
                    </div>
                    <div className="divide-y divide-slate-100 dark:divide-slate-800">
                      {devisService.priceBreakdown.map((line, i) => (
                        <div key={i} className="px-6 py-4 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                          <div className="sm:w-56 shrink-0 flex items-center justify-between sm:justify-start gap-3">
                            <span className="font-semibold text-slate-900 dark:text-white">{line.poste}</span>
                            <span className="font-bold text-purple-600 dark:text-purple-400 whitespace-nowrap">{line.prix}</span>
                          </div>
                          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{line.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {devisService.breakdownNote && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 italic mb-4">
                    {devisService.breakdownNote}
                  </p>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Ce qui est inclus + Facteurs de prix */}
        {(devisService.included || devisService.priceFactors) && (
          <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-950">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {devisService.included && (
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                      <Gift className="w-6 h-6 text-purple-500" />
                      Ce qui est inclus
                    </h2>
                    <ul className="space-y-3">
                      {devisService.included.map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-slate-600 dark:text-slate-400">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {devisService.priceFactors && (
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                      <Shield className="w-6 h-6 text-purple-500" />
                      Ce qui fait varier le prix
                    </h2>
                    <ul className="space-y-3">
                      {devisService.priceFactors.map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <ChevronRight className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                          <span className="text-slate-600 dark:text-slate-400">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Étapes du projet */}
        {devisService.steps && (
          <section className="py-16 md:py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">
                  Comment se déroule votre projet {devisService.name.toLowerCase()} ?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {devisService.steps.map((step, i) => (
                    <div key={i} className="relative p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                      <div className="w-9 h-9 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center mb-4">
                        {i + 1}
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                  Questions frequentes
                </h2>
              </div>
              <div className="space-y-4">
                {devisService.faqItems.map((item, i) => (
                  <details
                    key={i}
                    className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
                  >
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <span className="font-semibold text-slate-900 dark:text-white pr-4">
                        {item.question}
                      </span>
                      <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 shrink-0" />
                    </summary>
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
