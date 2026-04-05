"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Save, Trash2, Loader2 } from "lucide-react";

const CATEGORIES = ["Business", "Web Design", "SEO", "Technique"];

interface EditArticlePageProps {
  params: Promise<{ id: string }>;
}

export default function EditArticlePage({ params }: EditArticlePageProps) {
  const { id } = use(params);
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [loadingArticle, setLoadingArticle] = useState(true);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "Business",
    image_url: "",
    meta_description: "",
    read_time: "5 min",
    tags: "",
    published: false,
  });

  // Auth check + fetch article
  useEffect(() => {
    async function init() {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) {
        router.push("/admin");
        return;
      }

      const { data, error: fetchError } = await supabase
        .from("blog_articles")
        .select("*")
        .eq("id", id)
        .single();

      if (fetchError || !data) {
        router.push("/admin");
        return;
      }

      setForm({
        title: data.title || "",
        slug: data.slug || "",
        excerpt: data.excerpt || "",
        content: data.content || "",
        category: data.category || "Business",
        image_url: data.image || "",
        meta_description: data.meta_description || "",
        read_time: data.read_time || "5 min",
        tags: (data.tags || []).join(", "),
        published: data.published ?? false,
      });
      setLoadingArticle(false);
    }
    init();
  }, [id, router]);

  const updateField = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    const tagsArray = form.tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const { error: updateError } = await supabase
      .from("blog_articles")
      .update({
        title: form.title,
        slug: form.slug,
        excerpt: form.excerpt,
        content: form.content,
        category: form.category,
        image: form.image_url,
        meta_description: form.meta_description || form.excerpt,
        read_time: form.read_time,
        tags: tagsArray,
        published: form.published,
        published_at: form.published ? new Date().toISOString() : null,
      })
      .eq("id", id);

    if (updateError) {
      setError(updateError.message);
      setSaving(false);
    } else {
      router.push("/admin");
    }
  };

  const handleDelete = async () => {
    if (!confirm("Supprimer definitivement cet article ?")) return;
    await supabase.from("blog_articles").delete().eq("id", id);
    router.push("/admin");
  };

  if (loadingArticle) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="inline-flex items-center gap-1 text-sm text-white hover:bg-white/20 px-3 py-2 rounded-md transition">
              <ArrowLeft className="w-4 h-4" />
              Retour
            </Link>
            <h1 className="text-xl font-bold">Modifier l&apos;article</h1>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDelete}
            className="text-white hover:bg-red-500/20"
          >
            <Trash2 className="w-4 h-4 mr-1" />
            Supprimer
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Titre *
                </label>
                <Input
                  value={form.title}
                  onChange={(e) => updateField("title", e.target.value)}
                  placeholder="Le titre de votre article"
                  required
                />
              </div>

              {/* Slug */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Slug
                </label>
                <Input
                  value={form.slug}
                  onChange={(e) => updateField("slug", e.target.value)}
                  placeholder="url-de-l-article"
                />
              </div>

              {/* Category */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Categorie
                </label>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((cat) => (
                    <Button
                      key={cat}
                      type="button"
                      variant={form.category === cat ? "default" : "outline"}
                      size="sm"
                      onClick={() => updateField("category", cat)}
                    >
                      {cat}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Excerpt */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Extrait *
                </label>
                <Textarea
                  value={form.excerpt}
                  onChange={(e) => updateField("excerpt", e.target.value)}
                  placeholder="Resume court de l'article"
                  rows={3}
                  required
                />
              </div>

              {/* Meta description */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Meta description (SEO)
                </label>
                <Textarea
                  value={form.meta_description}
                  onChange={(e) =>
                    updateField("meta_description", e.target.value)
                  }
                  placeholder="Description pour Google (155 caracteres max)"
                  rows={2}
                />
              </div>

              {/* Content */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Contenu * (Markdown)
                </label>
                <Textarea
                  value={form.content}
                  onChange={(e) => updateField("content", e.target.value)}
                  placeholder="## Introduction&#10;&#10;Votre contenu ici..."
                  rows={16}
                  required
                  className="font-mono text-sm"
                />
              </div>

              {/* Image URL */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  URL de l&apos;image
                </label>
                <Input
                  value={form.image_url}
                  onChange={(e) => updateField("image_url", e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                />
              </div>

              {/* Tags */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Tags (separes par des virgules)
                </label>
                <Input
                  value={form.tags}
                  onChange={(e) => updateField("tags", e.target.value)}
                  placeholder="SEO, marketing, site web"
                />
              </div>

              {/* Read time */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Temps de lecture
                </label>
                <Input
                  value={form.read_time}
                  onChange={(e) => updateField("read_time", e.target.value)}
                  placeholder="5 min"
                />
              </div>

              {/* Published */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="published"
                  checked={form.published}
                  onChange={(e) => updateField("published", e.target.checked)}
                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                />
                <label
                  htmlFor="published"
                  className="text-sm font-medium text-foreground"
                >
                  Article publie
                </label>
              </div>

              {error && (
                <p className="text-sm text-red-500 bg-red-50 dark:bg-red-950/30 p-3 rounded-lg">
                  {error}
                </p>
              )}

              <div className="flex gap-3">
                <Button
                  type="submit"
                  disabled={saving}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90"
                >
                  {saving ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Enregistrement...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      Sauvegarder
                    </>
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleDelete}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Supprimer
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
