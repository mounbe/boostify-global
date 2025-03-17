
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PricingCard = ({ title, price, features, ctaText, popular = false }: { 
  title: string, 
  price: string, 
  features: string[], 
  ctaText: string,
  popular?: boolean 
}) => {
  return (
    <Card className={`flex flex-col h-full ${popular ? 'border-primary shadow-lg shadow-primary/20' : ''}`}>
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Badge variant="default" className="px-3 py-1">Populaire</Badge>
        </div>
      )}
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription>
          <span className="text-3xl font-bold mt-4">{price}</span>
          <span className="text-muted-foreground"> / mois</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className={`w-full rounded-full ${popular ? 'bg-primary' : 'bg-secondary text-foreground'}`}>
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
};

const Pricing = () => {
  const pricingOptions = [
    {
      title: "Boost Site Web",
      price: "1,600 DH",
      features: [
        "Agent IA multilingue",
        "Analyse en temps réel",
        "SEO localisé",
        "Création de landing pages",
        "Site web offert"
      ],
      ctaText: "Commencer",
      popular: false
    },
    {
      title: "Boost Marketing Digital",
      price: "2,800 DH",
      features: [
        "Génération de contenu",
        "Éditorial stratégique",
        "Analyse des tendances",
        "Adaptation aux tendances",
        "Rapports détaillés",
        "Diagnostic gratuit"
      ],
      ctaText: "Commencer",
      popular: true
    },
    {
      title: "Boost Ventes",
      price: "7,800 DH",
      features: [
        "Génération de leads automatisée",
        "Nurturing des leads",
        "Automatisation du processus",
        "Rapports analytics",
        "CRM inclus",
        "Application mobile incluse",
        "Agent vocal IA inclus"
      ],
      ctaText: "Commencer",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 section-padding">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <Badge variant="secondary" className="mb-4">Offres avec réduction de 30%</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Tarifs</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choisissez l'offre qui correspond le mieux à vos besoins. Offre valable jusqu'au 7 avril 2025.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {pricingOptions.map((option, index) => (
          <PricingCard 
            key={index}
            title={option.title}
            price={option.price}
            features={option.features}
            ctaText={option.ctaText}
            popular={option.popular}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
