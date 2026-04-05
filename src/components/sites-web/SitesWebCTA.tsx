import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { SITE } from '@/lib/constants';

const SitesWebCTA = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
          Pret a booster votre activite en ligne ?
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-lg">
          Recevez un devis personnalise et detaille sous 24h. Consultation gratuite, sans engagement.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6">
            <Link href="/contact">
              Obtenir mon devis gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6">
            <a href={`tel:${SITE.phone}`}>
              <Phone className="mr-2 w-4 h-4" />
              Nous appeler
            </a>
          </Button>
        </div>
        <p className="text-primary-foreground/60 text-sm mt-6">
          Reponse sous 24h - Devis gratuit et sans engagement - Paiement en 3x sans frais
        </p>
      </div>
    </section>
  );
};

export default SitesWebCTA;
