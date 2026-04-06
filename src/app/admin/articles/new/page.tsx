"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Save, Loader2 } from "lucide-react";

const CATEGORIES = ["Business", "Web Design", "SEO", "Technique"];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export default function NewArticlePage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [autoSlug, setAutoSlug] = useState(true);

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

  // Auth check
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) router.push("/admin");
    });
  }, [router]);

  const updateField = (field: string, value: string | boolean) => {
    setForm((prev) => {
      const updated = { ...prev, [field]: value };
      if (field === "title" && autoSlug) {
        updated.slug = slugify(value as string);
      }
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) {
      router.push("/admin");
      return;
    }

    const tagsArray = form.tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const { error: insertError } = await supabase.from("blog_articles").insert({
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
      author_name: "ConvertiLab",
      user_id: userData.user.id,
    });

    if (insertError) {
      setError(insertError.message);
      setSaving(false);
    } else {
      router.push("/admin");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20"
          >
            <Link href="/admin">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Retour
            </Link>
          </Button>
          <h1 className="text-xl font-bold">Nouvel article</h1>
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
                <label className="text-sm font-medium text-foreground mb-1 flex items-center gap-2">
                  Slug
                  {autoSlug && (
                    <Badge variant="secondary" className="text-xs">
                      Auto
                    </Badge>
                  )}
                </label>
                <Input
                  value={form.slug}
                  onChange={(e) => {
                    setAutoSlug(false);
                    updateField("slug", e.target.value);
                  }}
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
                  placeholder="Resume court de l'article (affiche dans les cartes)"
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
                  placeholder="## Introduction&#10;&#10;Votre contenu ici...&#10;&#10;## Section 1&#10;&#10;Texte..."
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
                <label htmlFor="published" className="text-sm font-medium text-foreground">
                  Publier immediatement
                </label>
              </div>

              {error && (
                <p className="text-sm text-red-500 bg-red-50 dark:bg-red-950/30 p-3 rounded-lg">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                disabled={saving}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90"
              >
                {saving ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Enregistrement...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Enregistrer l&apos;article
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
