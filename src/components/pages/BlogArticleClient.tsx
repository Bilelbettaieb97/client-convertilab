"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, Share2, ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/blog/BlogCard";
import RelatedServices from "@/components/blog/RelatedServices";
import { getArticleLinks } from "@/data/blog-internal-links";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { FullBlogArticle, BlogArticle } from "@/data/blog-articles";
import React from "react";

interface Props {
  article: FullBlogArticle;
  relatedArticles: BlogArticle[];
}

/** Safe markdown-like renderer -- no dangerouslySetInnerHTML for user content */
function formatContent(content: string): React.ReactNode[] {
  return content.split("\n").map((line, index) => {
    // Headers
    if (line.startsWith("## ")) {
      return (
        <h2
          key={index}
          className="text-2xl sm:text-3xl font-bold text-foreground mt-10 mb-4"
        >
          {line.replace("## ", "")}
        </h2>
      );
    }
    if (line.startsWith("### ")) {
      return (
        <h3 key={index} className="text-xl font-bold text-foreground mt-8 mb-3">
          {line.replace("### ", "")}
        </h3>
      );
    }
    // Blockquote
    if (line.startsWith("> ")) {
      return (
        <blockquote
          key={index}
          className="border-l-4 border-purple-500 pl-4 py-2 my-6 bg-purple-50 dark:bg-purple-950/30 rounded-r-lg italic text-muted-foreground"
        >
          {line.replace("> ", "").replace(/"/g, "")}
        </blockquote>
      );
    }
    // List items
    if (line.startsWith("- ")) {
      return (
        <li key={index} className="ml-6 mb-2 text-muted-foreground list-disc">
          {renderInline(line.replace("- ", ""))}
        </li>
      );
    }
    // Empty lines
    if (line.trim() === "") {
      return <br key={index} />;
    }
    // Regular paragraphs with inline formatting
    return (
      <p key={index} className="text-muted-foreground leading-relaxed mb-4">
        {renderInline(line)}
      </p>
    );
  });
}

/** Render bold and links safely without dangerouslySetInnerHTML */
function renderInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let keyIndex = 0;

  while (remaining.length > 0) {
    // Check for bold
    const boldMatch = remaining.match(/\*\*(.*?)\*\*/);
    // Check for link
    const linkMatch = remaining.match(/\[(.*?)\]\((.*?)\)/);

    if (!boldMatch && !linkMatch) {
      parts.push(remaining);
      break;
    }

    const boldIdx = boldMatch ? remaining.indexOf(boldMatch[0]) : Infinity;
    const linkIdx = linkMatch ? remaining.indexOf(linkMatch[0]) : Infinity;

    if (boldIdx <= linkIdx && boldMatch) {
      // Text before bold
      if (boldIdx > 0) {
        parts.push(remaining.slice(0, boldIdx));
      }
      parts.push(
        <strong key={`b-${keyIndex++}`} className="text-foreground font-semibold">
          {boldMatch[1]}
        </strong>
      );
      remaining = remaining.slice(boldIdx + boldMatch[0].length);
    } else if (linkMatch) {
      // Text before link
      if (linkIdx > 0) {
        parts.push(remaining.slice(0, linkIdx));
      }
      parts.push(
        <Link
          key={`l-${keyIndex++}`}
          href={linkMatch[2]}
          className="text-primary hover:underline"
        >
          {linkMatch[1]}
        </Link>
      );
      remaining = remaining.slice(linkIdx + linkMatch[0].length);
    }
  }

  return parts.length === 1 ? parts[0] : <>{parts}</>;
}

export default function BlogArticleClient({ article, relatedArticles }: Props) {
  const router = useRouter();

  const shareUrl = `https://www.convertilab.com/blog/${article.slug}`;
  const shareText = encodeURIComponent(article.title);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 sm:px-6 mb-4">
          <nav className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground max-w-[200px] truncate inline-block align-bottom">
              {article.title}
            </span>
          </nav>
        </div>

        {/* Hero */}
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <Image
            src={article.image}
            alt={`${article.title}`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12">
            <div className="container mx-auto max-w-4xl">
              <Button
                variant="ghost"
                onClick={() => router.push("/blog")}
                className="text-white hover:bg-white/20 mb-4 -ml-2"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour au blog
              </Button>

              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 mb-4">
                {article.category}
              </Badge>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-white/80">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.publishedAt).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {article.readTime} de lecture
                </span>
                <span className="flex items-center gap-2">
                  Par {article.author.name}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-muted-foreground">
                    #{tag}
                  </Badge>
                ))}
              </div>

              {/* Article Content */}
              <article className="prose prose-lg max-w-none">
                {formatContent(article.content)}
              </article>

              {/* CTA Outil Gratuit — affiché si l'article a le tag "Outil gratuit" */}
              {article.tags.includes("Outil gratuit") && (() => {
                const toolMap: Record<string, { url: string; name: string; emoji: string; desc: string }> = {
                  "audit-seo-gratuit-guide": { url: "/seo-check", name: "Audit SEO Gratuit", emoji: "🔍", desc: "Analysez 60+ points SEO de votre site en 60 secondes" },
                  "tester-vitesse-site-web": { url: "/speed-check", name: "Audit Vitesse", emoji: "⚡", desc: "Testez la performance et les Core Web Vitals de votre site" },
                  "audit-design-ux-site-web": { url: "/design-score", name: "Audit Design & UX", emoji: "🎨", desc: "Évaluez l'expérience utilisateur et le design de votre site" },
                  "estimer-roi-google-ads-meta-ads": { url: "/estimateur-ads", name: "Estimateur ROI Ads", emoji: "📊", desc: "Calculez le retour sur investissement de vos campagnes publicitaires" },
                  "generateur-mentions-legales-gratuit": { url: "/generateur-mentions-legales", name: "Générateur Mentions Légales", emoji: "📋", desc: "Créez vos mentions légales, CGU et politique de confidentialité" },
                  "generateur-robots-txt-sitemap-xml": { url: "/generateur-robots-sitemap", name: "Générateur Robots & Sitemap", emoji: "🤖", desc: "Générez vos fichiers robots.txt et sitemap.xml optimisés" },
                  "rapport-sectoriel-analyse-concurrence": { url: "/rapport-sectoriel", name: "Rapport Sectoriel", emoji: "📈", desc: "Analysez votre marché et la concurrence de votre secteur" },
                  "comparateur-sites-web-concurrent": { url: "/comparateur-sites", name: "Comparateur Sites", emoji: "🔄", desc: "Comparez votre site web avec celui de vos concurrents" },
                };
                const tool = toolMap[article.slug];
                if (!tool) return null;
                return (
                  <div className="my-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-5 h-5" />
                        <span className="text-sm font-semibold text-white/80">Outil 100% gratuit</span>
                      </div>
                      <div className="text-3xl mb-2">{tool.emoji}</div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">{tool.name}</h3>
                      <p className="text-white/80 mb-6">{tool.desc}</p>
                      <Link href={tool.url}>
                        <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 font-bold px-8 py-6 text-base shadow-xl">
                          Essayer maintenant <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                );
              })()}

              {/* Share */}
              <Card className="mt-12 p-6 bg-muted/50 border-0">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Share2 className="w-5 h-5" />
                    <span className="font-medium">Partager cet article</span>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#0077b5] text-white rounded-lg hover:opacity-90 transition"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#1da1f2] text-white rounded-lg hover:opacity-90 transition"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#1877f2] text-white rounded-lg hover:opacity-90 transition"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                  </div>
                </div>
              </Card>

              {/* CTA contextuel — lien vers service prioritaire de cet article */}
              {(() => {
                const links = getArticleLinks(article.slug);
                if (!links) {
                  return (
                    <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white">
                      <h3 className="text-2xl font-bold mb-3">Besoin d&apos;un site web professionnel ?</h3>
                      <p className="text-lg opacity-90 mb-6">Discutons de votre projet et obtenez un devis gratuit sous 24h</p>
                      <Button asChild className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3">
                        <Link href="/contact">Demander un devis gratuit</Link>
                      </Button>
                    </div>
                  );
                }
                return (
                  <div className="mt-12 space-y-4">
                    {/* Primary CTA */}
                    <Link href={links.primary.href} className="group flex items-start gap-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white hover:from-purple-700 hover:to-pink-700 transition-all">
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">Service recommandé</p>
                        <h3 className="text-xl font-bold mb-1">{links.primary.title}</h3>
                        <p className="text-white/80 text-sm">{links.primary.description}</p>
                      </div>
                      <span className="flex-shrink-0 flex items-center gap-1.5 text-sm font-semibold bg-white/20 rounded-xl px-4 py-2 mt-2 group-hover:bg-white/30 transition-all whitespace-nowrap">
                        {links.primary.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                    {/* Secondary CTA */}
                    {links.secondary && (
                      <Link href={links.secondary.href} className="group flex items-start gap-5 bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-purple-300 hover:bg-purple-50/50 transition-all">
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">À découvrir aussi</p>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{links.secondary.title}</h3>
                          <p className="text-gray-600 text-sm">{links.secondary.description}</p>
                        </div>
                        <span className="flex-shrink-0 flex items-center gap-1.5 text-sm font-semibold text-purple-600 bg-purple-100 rounded-xl px-4 py-2 mt-2 group-hover:bg-purple-200 transition-all whitespace-nowrap">
                          {links.secondary.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                    )}
                  </div>
                );
              })()}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <RelatedServices category={article.category} />

                {/* Quick Links */}
                <Card className="p-6 border-border">
                  <h3 className="text-lg font-bold text-foreground mb-4">Liens utiles</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/portfolio"
                        className="text-primary hover:text-primary/80 text-sm flex items-center gap-2"
                      >
                        &rarr; Voir nos realisations
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services"
                        className="text-primary hover:text-primary/80 text-sm flex items-center gap-2"
                      >
                        &rarr; Decouvrir nos offres
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/a-propos"
                        className="text-primary hover:text-primary/80 text-sm flex items-center gap-2"
                      >
                        &rarr; En savoir plus sur nous
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className="text-primary hover:text-primary/80 text-sm flex items-center gap-2"
                      >
                        &rarr; Tous les articles
                      </Link>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="bg-muted/50 py-16 mt-12">
            <div className="container mx-auto px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
                Articles similaires
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {relatedArticles.map((relatedArticle) => (
                  <BlogCard key={relatedArticle.slug} article={relatedArticle} />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
