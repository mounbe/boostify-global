
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Gift, Award, Lightbulb, TrendingUp } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center p-6 rounded-lg bg-white/50 hover:bg-white/80 transition-colors duration-300 shadow-sm hover:shadow-md animate-on-scroll">
      <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const WhyUs = () => {
  const features = [
    {
      icon: <Gift className="h-6 w-6 text-primary" />,
      title: "Site Web Professionnel Gratuit",
      description: "Recevez un site web professionnel optimisé pour le référencement, entièrement gratuit."
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Crédit Google Ads Offert",
      description: "Bénéficiez d'un crédit de 200 DH par mois pour vos campagnes Google Ads."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: "Diagnostic Gratuit",
      description: "Analyse complète de votre position actuelle et recommandations pour votre développement."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Branding et Relooking",
      description: "Modernisation de votre logo pour une meilleure reconnaissance de votre marque."
    }
  ];

  return (
    <section id="why-us" className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Pourquoi Nous Choisir</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi BoostExportsAI?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous vous offrons bien plus qu'une simple solution technologique, découvrez nos avantages exclusifs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-primary/5 rounded-xl border border-primary/10 animate-on-scroll">
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-4">
            Simplifiez Votre Business
          </h3>
          <p className="text-center max-w-3xl mx-auto text-muted-foreground">
            Nous nous chargeons de tout : diagnostic, stratégie, outils de communication, génération de leads, 
            nurturing et préparation des deals. Vous n'avez qu'à vous concentrer sur la négociation et 
            la conclusion des ventes pendant que nous gérons votre marketing digital.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
