"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogCard from "@/components/blog/BlogCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, Rocket, CheckCircle, Clock, Flame } from "lucide-react";
import { supabase } from "@/lib/supabase/client";
import { blogArticles as staticArticles } from "@/data/blog-articles";
import type { BlogArticle } from "@/data/blog-articles";

// Articles mis en avant manuellement — les plus stratégiques pour la conversion et le SEO
const FEATURED_SLUGS = [
  "combien-coute-site-web",
  "pourquoi-site-web-indispensable-2024",
  "seo-local-guide-complet",
  "comment-choisir-agence-web-2026",
  "erreurs-site-web-eviter",
  "landing-page-convertir-visiteurs",
];

const categories = ["Tous", "Business", "Web Design", "SEO", "Technique", "Performance", "Design", "Publicité", "Juridique", "Stratégie", "Analyse"];

export default function BlogPageClient() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [articles, setArticles] = useState<BlogArticle[]>(staticArticles);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const { data, error } = await supabase
          .from("blog_articles")
          .select("slug, title, excerpt, image, category, read_time, published_at, author_name")
          .eq("published", true)
          .order("published_at", { ascending: false });

        if (!error && data && data.length > 0) {
          const mapped: BlogArticle[] = data.map((a) => ({
            slug: a.slug,
            title: a.title,
            excerpt: a.excerpt,
            image: a.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
            category: a.category || "Business",
            readTime: a.read_time || "5 min",
            publishedAt: a.published_at || new Date().toISOString(),
            author: { name: a.author_name || "ConvertiLab" },
          }));
          // Fusionner : statiques d'abord (source de vérité pour les titres/contenu à jour),
          // Supabase uniquement pour les articles qui n'ont pas de version statique
          const staticSlugs = new Set(staticArticles.map((a) => a.slug));
          const onlyInSupabase = mapped.filter((a) => !staticSlugs.has(a.slug));
          setArticles([...staticArticles, ...onlyInSupabase]);
        }
      } catch {
        // Fallback to static articles — already set
      }
    }
    fetchArticles();
  }, []);

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "Tous" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Articles en vedette (toujours affichés, indépendants du filtre)
  const featuredArticles = FEATURED_SLUGS
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter((a): a is BlogArticle => Boolean(a));

  const featuredArticle = filteredArticles[0];
  const otherArticles = filteredArticles.slice(1);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const trimmedEmail = newsletterEmail.trim().toLowerCase();
    if (!trimmedEmail || !emailRegex.test(trimmedEmail) || trimmedEmail.length > 255) {
      return;
    }
    setIsSubscribing(true);
    try {
      await supabase.from("newsletter_subscriptions").insert({ email: trimmedEmail });
      setNewsletterEmail("");
    } catch {
      // silent
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Blog</span>
          </nav>

          <BlogHeader />

          {/* ── Articles en vedette ───────────────────────────────────── */}
          {featuredArticles.length > 0 && selectedCategory === "Tous" && !searchQuery && (
            <section className="mb-16">
              <div className="flex items-center gap-2 mb-6">
                <Flame className="w-5 h-5 text-orange-500" />
                <h2 className="text-xl font-bold text-foreground">Articles les plus lus</h2>
                <Badge className="ml-1 bg-orange-100 text-orange-700 border-0 text-xs">Sélection</Badge>
              </div>

              <div className="grid lg:grid-cols-5 gap-6">
                {/* Hero article — colonne gauche 3/5 */}
                {featuredArticles[0] && (
                  <Link
                    href={`/blog/${featuredArticles[0].slug}`}
                    className="lg:col-span-3 group relative rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col min-h-[360px]"
                  >
                    <Image
                      src={featuredArticles[0].image}
                      alt={featuredArticles[0].title}
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="relative mt-auto p-6 text-white">
                      <Badge className="mb-3 bg-purple-600 text-white border-0 text-xs">
                        {featuredArticles[0].category}
                      </Badge>
                      <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-2 group-hover:text-purple-300 transition-colors">
                        {featuredArticles[0].title}
                      </h3>
                      <p className="text-sm text-white/70 line-clamp-2 mb-3">
                        {featuredArticles[0].excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-white/60">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {featuredArticles[0].readTime}
                        </span>
                        <span className="inline-flex items-center gap-1 text-purple-300 font-semibold">
                          Lire l&apos;article <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                )}

                {/* Colonne droite 2/5 — 2 articles empilés */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                  {featuredArticles.slice(1, 3).map((article) => (
                    <Link
                      key={article.slug}
                      href={`/blog/${article.slug}`}
                      className="group relative rounded-2xl overflow-hidden shadow-md border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col flex-1 min-h-[160px]"
                    >
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="relative mt-auto p-4 text-white">
                        <Badge className="mb-2 bg-white/20 text-white border-0 text-xs backdrop-blur-sm">
                          {article.category}
                        </Badge>
                        <h3 className="text-sm sm:text-base font-bold leading-tight group-hover:text-purple-300 transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-2 text-xs text-white/60">
                          <Clock className="w-3 h-3" /> {article.readTime}
                          <span className="ml-auto text-purple-300 font-semibold flex items-center gap-1">
                            Lire <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* 3 articles secondaires en ligne */}
              {featuredArticles.length > 3 && (
                <div className="grid sm:grid-cols-3 gap-4 mt-6">
                  {featuredArticles.slice(3).map((article) => (
                    <Link
                      key={article.slug}
                      href={`/blog/${article.slug}`}
                      className="group flex gap-3 p-4 rounded-xl border border-border hover:border-purple-300 hover:bg-purple-50/50 transition-all duration-200"
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Badge className="mb-1 text-xs bg-gray-100 text-gray-600 border-0">
                          {article.category}
                        </Badge>
                        <p className="text-sm font-semibold text-foreground leading-tight line-clamp-2 group-hover:text-purple-600 transition-colors">
                          {article.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {article.readTime}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* Search & Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground border-0"
                      : ""
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Aucun article trouve pour cette recherche.
              </p>
              <Button
                variant="link"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("Tous");
                }}
                className="text-primary mt-2"
              >
                Reinitialiser les filtres
              </Button>
            </div>
          ) : (
            <>
              {/* Featured Article */}
              {featuredArticle && (
                <div className="mb-12">
                  <Badge className="mb-4 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 border-0">
                    Article a la une
                  </Badge>
                  <BlogCard article={featuredArticle} featured />
                </div>
              )}

              {/* Inline CTA */}
              <div className="mb-12 p-6 sm:p-8 rounded-2xl border border-primary/20 bg-primary/5">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Rocket className="w-7 h-7" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      Besoin d&apos;un site web qui convertit ?
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Site vitrine dès 990€, livré en 7 jours. Prix fixe, satisfait ou remboursé, +150 clients accompagnés.
                    </p>
                  </div>
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground flex-shrink-0"
                  >
                    <Link href="/contact">
                      Devis gratuit
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Articles Grid */}
              {otherArticles.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {otherArticles.map((article, index) => (
                    <div key={article.slug}>
                      <BlogCard article={article} />
                      {/* Lead magnet after 3rd article */}
                      {index === 2 && otherArticles.length > 3 && (
                        <div className="md:col-span-2 lg:col-span-3 p-6 sm:p-8 rounded-2xl bg-muted/50 border border-border my-4">
                          <div className="max-w-2xl mx-auto text-center">
                            <h3 className="text-xl font-bold text-foreground mb-2">
                              Guide gratuit : 10 erreurs qui tuent la conversion de votre site
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                              Rejoignez +2 000 entrepreneurs et recevez notre guide + nos meilleurs articles chaque semaine.
                            </p>
                            <form
                              onSubmit={handleNewsletterSubmit}
                              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                            >
                              <Input
                                type="email"
                                placeholder="Votre email professionnel"
                                value={newsletterEmail}
                                onChange={(e) => setNewsletterEmail(e.target.value)}
                                required
                              />
                              <Button
                                type="submit"
                                disabled={isSubscribing}
                                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 flex-shrink-0"
                              >
                                {isSubscribing ? "..." : "Recevoir le guide"}
                              </Button>
                            </form>
                            <div className="flex flex-wrap justify-center gap-4 mt-3 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <CheckCircle className="w-3 h-3 text-green-500" /> Gratuit
                              </span>
                              <span className="flex items-center gap-1">
                                <CheckCircle className="w-3 h-3 text-green-500" /> Pas de spam
                              </span>
                              <span className="flex items-center gap-1">
                                <CheckCircle className="w-3 h-3 text-green-500" /> Desinscription en 1 clic
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Bottom Newsletter CTA */}
          <div className="mt-16 bg-primary rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
              Ne manquez aucun conseil
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Recevez nos meilleurs articles et guides exclusifs directement dans votre boite mail. Rejoignez +2 000 entrepreneurs.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Votre email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="bg-background text-foreground"
              />
              <Button
                type="submit"
                disabled={isSubscribing}
                className="bg-background text-foreground hover:bg-background/90 font-semibold px-8"
              >
                {isSubscribing ? "..." : "S'inscrire gratuitement"}
              </Button>
            </form>
            <p className="text-primary-foreground/60 text-xs mt-4">
              Gratuit - Pas de spam - 1 email/semaine max
            </p>
          </div>

          {/* Service CTA bottom */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Vous avez un projet web en tete ?
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="/contact">
                Demander un devis gratuit
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
