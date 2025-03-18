import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/context/LanguageContext';
import BookDemoDialog from './BookDemoDialog';

const PricingCard = ({ 
  title, 
  price, 
  features, 
  ctaText, 
  popular = false, 
  onSubscribe,
  language,
  translationFunction,
  bonus
}: { 
  title: string, 
  price: string, 
  features: string[], 
  ctaText: string,
  popular?: boolean,
  onSubscribe: () => void,
  language: string,
  translationFunction: (key: string) => string,
  bonus?: string
}) => {
  const shouldHideCheckIcon = (index: number, feature: string) => {
    if (language !== 'fr') return false;
    
    if (index === 0) return true;
    
    if (title === translationFunction('pricing.plan3.title')) {
      if (
        feature.includes("Outils inclus") || 
        feature.includes("Campagnes Emailing/SMS Boostées par IA")
      ) {
        return true;
      }
    }
    
    return false;
  };

  const renderBonusContent = () => {
    if (title === translationFunction('pricing.plan3.title')) {
      return (
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-white">1</span>
            </div>
            <div>
              <h5 className="font-semibold text-sm">Diagnostic & Stratégie</h5>
              <p className="text-sm text-muted-foreground">Analyse de votre positionnement et recommandations pour conquérir de nouveaux marchés et optimiser votre présence internationale.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-white">2</span>
            </div>
            <div>
              <h5 className="font-semibold text-sm">Rebranding & Identité Visuelle</h5>
              <p className="text-sm text-muted-foreground">Modernisation de votre logo pour refléter vos valeurs et renforcer l'impact de votre marque.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-white">3</span>
            </div>
            <div>
              <h5 className="font-semibold text-sm">Site Web Offert</h5>
              <p className="text-sm text-muted-foreground">Création d'un site professionnel, optimisé pour le SEO et conçu pour maximiser l'expérience utilisateur.</p>
            </div>
          </div>
        </div>
      );
    }
    
    return <p className="text-sm">{bonus}</p>;
  };

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
              {!shouldHideCheckIcon(i, feature) && (
                <Check className="h-4 w-4 text-primary flex-shrink-0" />
              )}
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        {bonus && (
          <div className="mt-6 pt-6 border-t border-border">
            <h4 className="font-bold text-primary mb-2">Bonus</h4>
            {renderBonusContent()}
          </div>
        )}
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
  
  const defaultBonusText = "Une chaine youtube pour renforcer votre visibilité, avec 4 vidéos par mois. Ces vidéos sont conçues pour renforcer votre marque à l'international grâce à un contenu de haute valeur ajoutée.";
  const webSiteBonusText = "Mise à jour ou nouveau Site web en langue anglaise offert";
  const salesBoostBonusText = "Diagnostic & Stratégie : Analyse de votre positionnement et recommandations pour conquérir de nouveaux marchés et optimiser votre présence internationale.\nRebranding & Identité Visuelle : Modernisation de votre logo pour refléter vos valeurs et renforcer l'impact de votre marque.\nSite Web Offert : Création d'un site professionnel, optimisé pour le SEO et conçu pour maximiser l'expérience utilisateur";
  
  const pricingOptions = [
    {
      title: t('pricing.plan1.title'),
      price: "190$",
      features: language === 'fr' ? [
        "Transformer votre site web en un vendeur infatigable, doté d'une IA visionnaire capable d'interagir et de conclure des ventes 24h/24!",
        "Agent multilingue IA (anglais, allemand, arabe, mandarin...)",
        "Chatbots IA disponibles 24/7",
        "SEO localisé pour vos marchés cibles",
        "Création de landing B2B & B2C"
      ] : [
        t('pricing.plan1.feature1'),
        t('pricing.plan1.feature2'),
        t('pricing.plan1.feature3'),
        t('pricing.plan1.feature4'),
        t('pricing.plan1.feature5')
      ],
      ctaText: t('pricing.getStarted'),
      popular: false,
      bonus: webSiteBonusText
    },
    {
      title: t('pricing.plan2.title'),
      price: "290$",
      features: language === 'fr' ? [
        "Boostez votre marque sur les réseaux sociaux ! Nous analysons vos besoins et votre communication pour créer une stratégie sur-mesure qui maximise votre impact et atteint vos objectifs.",
        "Contenu personnalisé : Des posts adaptés à votre marque pour Facebook, Instagram, LinkedIn et Twitter.",
        "Calendrier éditorial : Une planification stratégique pour une présence régulière et pertinente.",
        "Idées tendance : Des suggestions inspirées des dernières tendances pour captiver votre audience.",
        "Analyse & optimisation : Suivi des performances et ajustements en temps réel pour des résultats concrets."
      ] : [
        t('pricing.plan2.feature1'),
        t('pricing.plan2.feature2'),
        t('pricing.plan2.feature3'),
        t('pricing.plan2.feature4'),
        t('pricing.plan2.feature5'),
        t('pricing.plan2.feature6')
      ],
      ctaText: t('pricing.getStarted'),
      popular: true,
      bonus: defaultBonusText
    },
    {
      title: t('pricing.plan3.title'),
      price: "790$",
      features: language === 'fr' ? [
        "Transformez vos ventes avec notre solution IA de génération de leads !",
        "Génération de Leads : Attirez des prospects qualifiés grâce à des stratégies avancées.",
        "Nurturing Automatisé : Engagez vos leads avec des séquences personnalisées.",
        "Automatisation Complète : Laissez notre système gérer tout le processus pendant que vous vous concentrez sur la conversion.",
        "Rapports en Temps Réel : Analysez vos performances et ajustez vos stratégies instantanément.",
        "Outils inclus :",
        "CRM : Intégration fluide pour une gestion simplifiée.",
        "Application Mobile : Accédez à vos données où que vous soyez.",
        "Agent Vocal IA : Gérez vos appels entrants et sortants avec l'IA.",
        "Campagnes Emailing/SMS Boostées par IA",
        "Création Automatique : Des campagnes engageantes optimisées par l'IA.",
        "Segmentation Précise : Ciblez vos prospects efficacement.",
        "A/B Testing : Testez et améliorez vos messages.",
        "Envoi Intelligent : Maximisez l'impact avec des horaires optimisés."
      ] : [
        t('pricing.plan3.feature1'),
        t('pricing.plan3.feature2'),
        t('pricing.plan3.feature3'),
        t('pricing.plan3.feature4'),
        t('pricing.plan3.feature5'),
        t('pricing.plan3.feature6'),
        t('pricing.plan3.feature7')
      ],
      ctaText: t('pricing.getStarted'),
      popular: false,
      bonus: salesBoostBonusText
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
            language={language}
            translationFunction={t}
            bonus={option.bonus}
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
