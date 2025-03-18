
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/context/LanguageContext';
import BookDemoDialog from './BookDemoDialog';

const PricingCard = ({ title, price, features, ctaText, popular = false, onSubscribe }: { 
  title: string, 
  price: string, 
  features: string[], 
  ctaText: string,
  popular?: boolean,
  onSubscribe: () => void 
}) => {
  return (
    <Card className={`flex flex-col h-full ${popular ? 'border-primary shadow-lg shadow-primary/20' : ''}`}>
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Badge variant="default" className="px-3 py-1">Popular</Badge>
        </div>
      )}
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription>
          <span className="text-3xl font-bold mt-4">{price}</span>
          <span className="text-muted-foreground"> / month</span>
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
        <Button 
          className={`w-full rounded-full ${popular ? 'bg-primary' : 'bg-secondary text-foreground'}`}
          onClick={onSubscribe}
        >
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
};

const Pricing = () => {
  const { t, language } = useLanguage();
  const [bookDemoOpen, setBookDemoOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  
  const handleSubscribe = (planTitle: string) => {
    setSelectedPlan(planTitle);
    setBookDemoOpen(true);
  };
  
  const pricingOptions = [
    {
      title: t('pricing.plan1.title'),
      price: "190$",
      features: language === 'fr' ? [
        "Transformer votre site web en un vendeur infatigable, doté d'une IA visionnaire capable d'observer, d'interagir et de conclure des ventes 24h/24!",
        "-Agent multilingue IA (anglais, allemand, arabe, mandarin...)",
        "-Chatbots IA disponibles 24/7",
        "-Analyse en temps réel du comportement des visiteurs",
        "-SEO localisé pour vos marchés cibles",
        "-Création de landing B2B & B2C"
      ] : [
        t('pricing.plan1.feature1'),
        t('pricing.plan1.feature2'),
        t('pricing.plan1.feature3'),
        t('pricing.plan1.feature4'),
        t('pricing.plan1.feature5')
      ],
      ctaText: t('pricing.getStarted'),
      popular: false
    },
    {
      title: t('pricing.plan2.title'),
      price: "290$",
      features: [
        t('pricing.plan2.feature1'),
        t('pricing.plan2.feature2'),
        t('pricing.plan2.feature3'),
        t('pricing.plan2.feature4'),
        t('pricing.plan2.feature5'),
        t('pricing.plan2.feature6')
      ],
      ctaText: t('pricing.getStarted'),
      popular: true
    },
    {
      title: t('pricing.plan3.title'),
      price: "790$",
      features: [
        t('pricing.plan3.feature1'),
        t('pricing.plan3.feature2'),
        t('pricing.plan3.feature3'),
        t('pricing.plan3.feature4'),
        t('pricing.plan3.feature5'),
        t('pricing.plan3.feature6'),
        t('pricing.plan3.feature7')
      ],
      ctaText: t('pricing.getStarted'),
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 section-padding">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <Badge variant="secondary" className="mb-4">{t('pricing.badge')}</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('pricing.title')}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('pricing.description')}
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
            onSubscribe={() => handleSubscribe(option.title)}
          />
        ))}
      </div>
      
      <BookDemoDialog 
        open={bookDemoOpen} 
        onOpenChange={setBookDemoOpen} 
      />
    </section>
  );
};

export default Pricing;
