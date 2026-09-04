"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const NewsletterSubscription = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const trimmedEmail = newsletterEmail.trim().toLowerCase();
    if (!trimmedEmail) {
      toast({ title: "Erreur", description: "Veuillez entrer votre email.", variant: "destructive" });
      return;
    }
    if (!emailRegex.test(trimmedEmail) || trimmedEmail.length > 255) {
      toast({ title: "Erreur", description: "Veuillez entrer un email valide.", variant: "destructive" });
      return;
    }

    setIsNewsletterSubmitting(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email: trimmedEmail }]);

      if (error) {
        // Si l'email existe deja, on considere l'inscription comme reussie
        if ((error as any).code === '23505') {
          if (typeof window !== 'undefined' && (window as any).trackFormConversion) {
            (window as any).trackFormConversion();
          }
          setNewsletterEmail("");
          router.push("/newsletter-confirmation");
          return;
        }
        // Non-bloquant : une panne d'enregistrement ne doit pas faire perdre l'inscription.
        console.error("[supabase] newsletter_subscriptions:", (error as any).message);
      }

      // Non-bloquant : si la notification échoue, on continue quand même
      fetch("/api/notify", {
        method: "POST",
        keepalive: true,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "Newsletter",
          email: trimmedEmail,
        }),
      }).catch((err) => console.error("[notify] erreur envoi:", err));

      // Track Google Ads conversion
      if (typeof window !== 'undefined' && (window as any).trackFormConversion) {
        (window as any).trackFormConversion();
      }

      setNewsletterEmail("");
      router.push("/newsletter-confirmation");
    } catch (error) {
      console.log("Newsletter error:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'inscription a la newsletter.",
        variant: "destructive",
      });
    } finally {
      setIsNewsletterSubmitting(false);
    }
  };

  return (
    <Card className="bg-gradient-to-r from-purple-100 to-pink-100 border-purple-200 shadow-lg">
      <CardContent className="p-4 sm:p-6">
        <h3 className="font-bold text-sm sm:text-base mb-2 text-center">Newsletter</h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-3 text-center">
          Recevez nos conseils en conversion directement dans votre boite mail
        </p>
        <form onSubmit={handleNewsletterSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="votre@email.com"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
            required
            className="text-sm"
          />
          <Button
            type="submit"
            disabled={isNewsletterSubmitting}
            className="w-full bg-purple-600 hover:bg-purple-700 text-sm"
          >
            {isNewsletterSubmitting ? "Inscription..." : "S'abonner"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default NewsletterSubscription;
