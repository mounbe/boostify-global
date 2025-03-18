
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, TrendingUp, BarChartHorizontal, Play } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { useLanguage } from '@/context/LanguageContext';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  videoUrl: string;
}

const SolutionCard = ({ icon, title, description, features, videoUrl }: SolutionCardProps) => {
  return (
    <Card className="glass-card hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <CardHeader>
        <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <div className="mb-6 rounded-lg overflow-hidden border border-primary/20">
          <AspectRatio ratio={16/9}>
            <div className="relative w-full h-full">
              <iframe 
                src={videoUrl} 
                className="absolute inset-0 w-full h-full" 
                title={`Explanatory Video - ${title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
          </AspectRatio>
        </div>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="relative pl-6">
              <span className="absolute left-0 top-2 w-2 h-2 bg-primary rounded-full"></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const Solutions = () => {
  const { language } = useLanguage();
  
  const websiteBoostDescription = language === 'fr' 
    ? "Notre service \"Boost Site Web\" est conçu pour propulser votre présence en ligne et maximiser votre impact sur le marché. Voici ce que nous proposons :"
    : "Optimize your online presence for an international audience";
    
  const websiteBoostFeatures = language === 'fr'
    ? [
        "Agent IA sur votre site web - Intégrez un agent intelligent capable de parler, entendre et échanger avec vos visiteurs en plusieurs langues, y compris l'anglais, l'allemand, l'arabe et le mandarin.",
        "Chats IA 24/7 avec Voix Humaine - Parlez ou écrivez : Lancez un agent conversationnel avec une simple commande vocale ou texte. Vendez 24/7 : Répondez aux questions, négociez et concluez des ventes avec une voix naturelle.",
        "IA Prédictive Hyper-Personnalisée - Anticipez les besoins : Proposez des recommandations sur-mesure.",
        "SEO Localisé - Nous optimisons votre site avec des mots-clés spécifiques à chaque pays, accompagnés de blogs et de contenus pertinents pour améliorer votre référencement.",
        "Création de Landing Pages sur Marketplaces: B2B / B2C - Nous vous aidons à créer des pages d'atterrissage efficaces sur les principales marketplaces."
      ]
    : [
        "Multilingual AI agent (English, German, Arabic, Mandarin)",
        "Real-time visitor behavior analysis",
        "Localized SEO for each target country",
        "Landing page creation on B2B and B2C marketplaces"
      ];
      
  const digitalMarketingDescription = language === 'fr'
    ? "Propulsez votre marque sur les réseaux sociaux. Nous offrons une approche stratégique et personnalisée pour maximiser votre impact et atteindre vos objectifs commerciaux:"
    : "Strategic content adapted to each market";
    
  const digitalMarketingFeatures = language === 'fr'
    ? [
        "Génération de Contenu Sur Mesure : Création de contenu adapté à votre marque pour Facebook, Instagram, LinkedIn et Twitter, garantissant un engagement optimal de votre audience.",
        "Éditorial : Élaboration d'un calendrier stratégique pour assurer une présence constante et pertinente sur les réseaux sociaux.",
        "Suggestions de Contenu : Analyse des tendances actuelles pour proposer des idées captivantes qui résonnent avec votre public cible.",
        "Adaptation aux Tendances : Suivi des dernières tendances pour maximiser l'impact de votre contenu.",
        "Analyse et Rapports : Rapports détaillés sur les performances de vos publications, permettant des ajustements en temps réel."
      ]
    : [
        "Content generation for all social networks",
        "Strategic editorial calendar for publications",
        "Trend analysis for engaging content",
        "Adaptation to market trends for maximum impact",
        "Detailed reports to optimize campaigns"
      ];

  const salesBoostDescription = language === 'fr'
    ? "Grâce à notre système automatisé, vous pouvez non seulement générer des leads de manière efficace et automatisée, mais aussi les fidéliser tout au long de leur parcours d'achat."
    : "Automate your customer acquisition process";
    
  const salesBoostFeatures = language === 'fr'
    ? [
        "Génération de Leads: Nous mettons en place des stratégies avancées pour attirer des prospects qualifiés, augmentant ainsi votre base de clients potentiel.",
        "Nurturing des Leads: Notre système automatise le nurturing des leads avec des séquences personnalisées, garantissant que chaque prospect reçoit le bon message au bon moment.",
        "Automatisation du Processus: L'ensemble du processus de génération de leads est automatisé, ce qui vous permet de vous concentrer sur la conversion des prospects en clients.",
        "Rapports Analytics: Recevez des rapports détaillés sur les performances de vos campagnes, vous permettant d'ajuster vos stratégies en temps réel pour maximiser votre retour sur investissement.",
        "Outils Offerts: Nous proposons la configuration ou l'intégration de votre CRM pour une gestion fluide de vos leads. De plus, un chatbot IA est disponible 24/7 pour interagir avec vos prospects.",
        "CRM: Intégrez votre CRM pour une gestion fluide des prospects.",
        "Application Mobile: Accédez à vos données et gérez vos leads où que vous soyez grâce à notre application mobile intuitive.",
        "Agent Vocal IA: Notre agent vocal IA facilite la réception et l'émission d'appels, optimisant ainsi votre communication avec les clients (crédits inclus)."
      ]
    : [
        "Automated lead generation with advanced strategies",
        "Lead nurturing with personalized sequences",
        "Process automation for centralized management",
        "Analytics reports with detailed data",
        "Included tools: CRM, mobile app, AI voice agent"
      ];

  const solutions = [
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Website Boost",
      description: websiteBoostDescription,
      videoUrl: "https://www.youtube.com/embed/HpsFXML7vVY", 
      features: websiteBoostFeatures
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Digital Marketing Boost",
      description: digitalMarketingDescription,
      videoUrl: "https://www.youtube.com/embed/zQTCdl87xRs",
      features: digitalMarketingFeatures
    },
    {
      icon: <BarChartHorizontal className="h-6 w-6 text-primary" />,
      title: "Sales Boost",
      description: salesBoostDescription,
      videoUrl: "https://www.youtube.com/embed/r9wXl_Zsu50",
      features: salesBoostFeatures
    }
  ];

  return (
    <section id="solutions" className="py-24 px-4 relative section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Our Solutions</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Solutions for Exporters</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our artificial intelligence solutions are specifically designed to help exporters 
            grow in international markets.
          </p>
        </div>

        <div className="w-full">
          <Tabs defaultValue="view-cards">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="view-cards">Card View</TabsTrigger>
                <TabsTrigger value="view-videos">Video View</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="view-cards" className="w-full mt-8">
              <div className="grid md:grid-cols-3 gap-8">
                {solutions.map((solution, index) => (
                  <div key={index}>
                    <SolutionCard
                      icon={solution.icon}
                      title={solution.title}
                      description={solution.description}
                      features={solution.features}
                      videoUrl={solution.videoUrl}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="view-videos" className="w-full mt-8">
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {solutions.map((solution, index) => (
                  <div key={index} className="bg-card/60 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      {solution.icon}
                      {solution.title}
                    </h3>
                    
                    <AspectRatio ratio={16/9} className="mb-4 rounded-md overflow-hidden border border-primary/20">
                      <iframe
                        src={solution.videoUrl}
                        className="w-full h-full"
                        title={`Explanatory Video - ${solution.title}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </AspectRatio>
                    
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <button className="inline-flex items-center text-primary gap-1 hover:underline">
                          <Play className="h-4 w-4" />
                          View features
                        </button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <h4 className="font-semibold mb-2">{solution.title}</h4>
                        <ul className="space-y-2 text-sm">
                          {solution.features.map((feature, i) => (
                            <li key={i} className="relative pl-5">
                              <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-primary rounded-full"></span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
