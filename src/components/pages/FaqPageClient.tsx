"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight, Search } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

export interface FaqCategory {
  id: string;
  label: string;
  emoji: string;
  questions: { question: string; answer: string }[];
}

interface Props {
  categories: FaqCategory[];
}

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 text-base leading-snug">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-purple-500 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqPageClient({ categories }: Props) {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [search, setSearch] = useState("");

  const allQuestions = categories.flatMap((c) =>
    c.questions.map((q) => ({ ...q, categoryId: c.id, categoryLabel: c.label }))
  );

  const filteredCategories =
    activeCategory === "all"
      ? categories
      : categories.filter((c) => c.id === activeCategory);

  const searchFiltered = search.trim().length > 1
    ? filteredCategories.map((cat) => ({
        ...cat,
        questions: cat.questions.filter(
          (q) =>
            q.question.toLowerCase().includes(search.toLowerCase()) ||
            q.answer.toLowerCase().includes(search.toLowerCase())
        ),
      })).filter((cat) => cat.questions.length > 0)
    : filteredCategories;

  const toggle = (key: string) => setOpenItem(openItem === key ? null : key);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4" />
            Questions fréquentes
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Toutes vos questions sur{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              la création de site web
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            {allQuestions.length} réponses aux questions les plus posées par nos clients sur la création de site, le SEO, les tarifs et nos services.
          </p>

          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher une question…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 bg-white shadow-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
            />
          </div>
        </div>
      </section>

      {/* Filtres catégories */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            <button
              onClick={() => setActiveCategory("all")}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "all"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-purple-50 hover:text-purple-700"
              }`}
            >
              Toutes ({allQuestions.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-purple-50 hover:text-purple-700"
                }`}
              >
                {cat.emoji} {cat.label} ({cat.questions.length})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ accordions */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {searchFiltered.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <HelpCircle className="w-10 h-10 mx-auto mb-3 opacity-40" />
              <p>Aucune question ne correspond à votre recherche.</p>
              <button
                onClick={() => { setSearch(""); setActiveCategory("all"); }}
                className="mt-4 text-purple-600 text-sm underline"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="space-y-10">
              {searchFiltered.map((cat) => (
                <div key={cat.id}>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span>{cat.emoji}</span>
                    <span>{cat.label}</span>
                  </h2>
                  <div className="space-y-3">
                    {cat.questions.map((q, i) => {
                      const key = `${cat.id}-${i}`;
                      return (
                        <AccordionItem
                          key={key}
                          question={q.question}
                          answer={q.answer}
                          isOpen={openItem === key}
                          onToggle={() => toggle(key)}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA — question sans réponse */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 max-w-3xl text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-6">
            <MessageCircle className="w-4 h-4" />
            Vous ne trouvez pas votre réponse ?
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Parlez directement avec Bilel
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Réponse sous 24h par email, ou directement en visio de 30 minutes pour faire le point sur votre projet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-purple-700 hover:bg-gray-100 font-bold rounded-2xl"
            >
              <Link href="/contact">
                Envoyer un message
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-bold rounded-2xl"
            >
              <a href={SITE.calendly} target="_blank" rel="noopener noreferrer">
                Réserver un appel gratuit
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
