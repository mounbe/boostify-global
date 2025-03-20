
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
  const { language } = useLanguage();
  
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
              {title === "Sales Boost" || title === "Boost Ventes" ? (
                <div dangerouslySetInnerHTML={{ __html: feature }} />
              ) : (
                <>
                  <span className="absolute left-0 top-2 w-2 h-2 bg-[#8FD14F] rounded-full"></span>
                  <span dangerouslySetInnerHTML={{ __html: feature }} />
                </>
              )}
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
    : "Our \"Website Boost\" service is designed to propel your online presence and maximize your market impact. Here's what we offer:";
    
  const websiteBoostFeatures = language === 'fr'
    ? [
        "<span class='text-[#8FD14F] font-semibold'>Agent IA sur votre site web</span> - Intégrez un agent intelligent capable de parler, entendre et échanger avec vos visiteurs en plusieurs langues, y compris l'anglais, l'allemand, l'arabe et le mandarin.",
        "<span class='text-[#8FD14F] font-semibold'>Chats IA 24/7 avec Voix Humaine</span> - Parlez ou écrivez : Lancez un agent conversationnel avec une simple commande vocale ou texte. <span class='text-[#8FD14F] font-semibold'>Vendez 24/7</span> : Répondez aux questions, négociez et concluez des ventes avec une voix naturelle, sans script rigide.",
        "<span class='text-[#8FD14F] font-semibold'>SEO Localisé</span> - Nous optimisons votre site avec des mots-clés spécifiques à chaque pays, accompagnés de blogs et de contenus pertinents pour améliorer votre référencement.",
        "<span class='text-[#8FD14F] font-semibold'>Création de Landing Pages sur Marketplaces</span>: B2B / B2C - Nous vous aidons à créer des pages d'atterrissage efficaces sur les principales marketplaces."
      ]
    : [
        "<span class='text-[#8FD14F] font-semibold'>AI Agent on your website</span> - Integrate an intelligent agent capable of speaking, hearing, and interacting with your visitors in multiple languages, including English, German, Arabic, and Mandarin.",
        "<span class='text-[#8FD14F] font-semibold'>24/7 AI Chats with Human Voice</span> - Speak or write: Launch a conversational agent with a simple voice or text command. <span class='text-[#8FD14F] font-semibold'>Sell 24/7</span>: Answer questions, negotiate, and close sales with a natural voice, without rigid scripts.",
        "<span class='text-[#8FD14F] font-semibold'>Localized SEO</span> - We optimize your site with country-specific keywords, accompanied by relevant blogs and content to improve your search engine ranking.",
        "<span class='text-[#8FD14F] font-semibold'>Creation of Landing Pages on Marketplaces</span>: B2B / B2C - We help you create effective landing pages on major marketplaces."
      ];
      
  const digitalMarketingDescription = language === 'fr'
    ? "Propulsez votre marque sur les réseaux sociaux. Nous offrons une approche stratégique et personnalisée pour maximiser votre impact et atteindre vos objectifs commerciaux:"
    : "Propel your brand on social media. We offer a strategic and personalized approach to maximize your impact and achieve your business objectives:";
    
  const digitalMarketingFeatures = language === 'fr'
    ? [
        "<span class='text-[#8FD14F] font-semibold'>Génération de Contenu Sur Mesure</span> : Création de contenu adapté à votre marque pour Facebook, Instagram, LinkedIn et Twitter, garantissant un engagement optimal de votre audience.",
        "<span class='text-[#8FD14F] font-semibold'>Éditorial</span> : Élaboration d'un calendrier stratégique pour assurer une présence constante et pertinente sur les réseaux sociaux.",
        "<span class='text-[#8FD14F] font-semibold'>Suggestions de Contenu</span> : Analyse des tendances actuelles pour proposer des idées captivantes qui résonnent avec votre public cible.",
        "<span class='text-[#8FD14F] font-semibold'>Adaptation aux Tendances</span> : Suivi des dernières tendances pour maximiser l'impact de votre contenu.",
        "<span class='text-[#8FD14F] font-semibold'>Analyse et Rapports</span> : Rapports détaillés sur les performances de vos publications, permettant des ajustements en temps réel."
      ]
    : [
        "<span class='text-[#8FD14F] font-semibold'>Custom Content Generation</span>: Creation of content tailored to your brand for Facebook, Instagram, LinkedIn, and Twitter, ensuring optimal audience engagement.",
        "<span class='text-[#8FD14F] font-semibold'>Editorial</span>: Development of a strategic calendar to ensure a consistent and relevant presence on social media.",
        "<span class='text-[#8FD14F] font-semibold'>Content Suggestions</span>: Analysis of current trends to propose captivating ideas that resonate with your target audience.",
        "<span class='text-[#8FD14F] font-semibold'>Trend Adaptation</span>: Monitoring of the latest trends to maximize the impact of your content.",
        "<span class='text-[#8FD14F] font-semibold'>Analysis and Reports</span>: Detailed reports on the performance of your publications, allowing real-time adjustments."
      ];

  const salesBoostDescription = language === 'fr' 
    ? "Grâce à notre système automatisé, vous pouvez non seulement générer des leads de manière efficace et automatisée, mais aussi les fidéliser tout au long de leur parcours d'achat."
    : "Thanks to our automated system, you can not only generate leads efficiently and automatically, but also nurture them throughout their buying journey.";
    
  const salesBoostFeatures = language === 'fr'
    ? [
        "Transformez votre processus de vente avec notre solution de génération de leads alimentée par l'intelligence artificielle.",
        "<span class='text-[#8FD14F] font-semibold'>Solution 1 - Système Automatisé de Génération de Leads Boosté par IA</span>",
        "<span class='text-[#8FD14F] font-semibold'>1 - Génération de Leads:</span> Attirez des prospects qualifiés grâce à des stratégies avancées.",
        "<span class='text-[#8FD14F] font-semibold'>2 - Nurturing des Leads:</span> Automatisez le nurturing avec des séquences personnalisées,",
        "<span class='text-[#8FD14F] font-semibold'>3 - Automatisation du Processus:</span> Concentrez-vous sur la conversion des prospects en clients, tandis que notre système gère l'ensemble du processus de génération de leads.",
        "<span class='text-[#8FD14F] font-semibold'>4 - Rapports Analytics:</span> Recevez des rapports détaillés sur les performances de vos campagnes pour ajuster vos stratégies en temps réel.",
        "<span class='text-[#8FD14F] font-semibold'>OUTILS inclus</span>",
        "<span class='text-[#8FD14F] font-semibold'>CRM :</span> Intégrez votre CRM pour une gestion fluide des leads.",
        "<span class='text-[#8FD14F] font-semibold'>Application Mobile :</span> Accédez à vos données et gérez vos leads où que vous soyez!",
        "<span class='text-[#8FD14F] font-semibold'>Agent Vocal IA :</span> Facilitez la communication avec un agent vocal IA pour la réception et l'émission d'appels.",
        "<span class='text-[#8FD14F] font-semibold'>Solution 2 - Campagnes Emailing/SMS Boostées par IA</span> (1.800 DH/mois)",
        "<span class='text-[#8FD14F] font-semibold'>Création et Optimisation Automatique:</span> Notre système utilise l'IA pour créer et optimiser vos campagnes, garantissant un contenu engageant.",
        "Fonctionnalités Avancées",
        "<span class='text-[#8FD14F] font-semibold'>- Segmentation Automatique :</span> Ciblez vos prospects avec précision.",
        "<span class='text-[#8FD14F] font-semibold'>- A/B Testing :</span> Testez différentes versions de vos emails.",
        "<span class='text-[#8FD14F] font-semibold'>- Optimisation des Heures d'Envoi :</span> Maximisez l'engagement en envoyant vos messages au bon moment."
      ]
    : [
        "Transform your sales process with our AI-powered lead generation solution.",
        "<span class='text-[#8FD14F] font-semibold'>Solution 1 - AI-Boosted Automated Lead Generation System</span>",
        "<span class='text-[#8FD14F] font-semibold'>1 - Lead Generation:</span> Attract qualified prospects with advanced strategies.",
        "<span class='text-[#8FD14F] font-semibold'>2 - Lead Nurturing:</span> Automate nurturing with personalized sequences.",
        "<span class='text-[#8FD14F] font-semibold'>3 - Process Automation:</span> Focus on converting prospects into customers, while our system manages the entire lead generation process.",
        "<span class='text-[#8FD14F] font-semibold'>4 - Analytics Reports:</span> Receive detailed reports on your campaign performance to adjust your strategies in real-time.",
        "<span class='text-[#8FD14F] font-semibold'>Included TOOLS</span>",
        "<span class='text-[#8FD14F] font-semibold'>CRM:</span> Integrate your CRM for seamless lead management.",
        "<span class='text-[#8FD14F] font-semibold'>Mobile App:</span> Access your data and manage your leads wherever you are!",
        "<span class='text-[#8FD14F] font-semibold'>AI Voice Agent:</span> Facilitate communication with an AI voice agent for receiving and making calls.",
        "<span class='text-[#8FD14F] font-semibold'>Solution 2 - AI-Boosted Email/SMS Campaigns</span>",
        "<span class='text-[#8FD14F] font-semibold'>Automatic Creation and Optimization:</span> Our system uses AI to create and optimize your campaigns, ensuring engaging content.",
        "Advanced Features",
        "<span class='text-[#8FD14F] font-semibold'>- Automatic Segmentation:</span> Target your prospects with precision.",
        "<span class='text-[#8FD14F] font-semibold'>- A/B Testing:</span> Test different versions of your emails.",
        "<span class='text-[#8FD14F] font-semibold'>- Send Time Optimization:</span> Maximize engagement by sending your messages at the right time."
      ];

  const solutions = [
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: language === 'fr' ? "Boost Site Web" : "Website Boost",
      description: websiteBoostDescription,
      videoUrl: "https://www.youtube.com/embed/HpsFXML7vVY", 
      features: websiteBoostFeatures
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: language === 'fr' ? "Boost Marketing Digital" : "Digital Marketing Boost",
      description: digitalMarketingDescription,
      videoUrl: "https://www.youtube.com/embed/zQTCdl87xRs",
      features: digitalMarketingFeatures
    },
    {
      icon: <BarChartHorizontal className="h-6 w-6 text-primary" />,
      title: language === 'fr' ? "Boost Ventes" : "Sales Boost",
      description: salesBoostDescription,
      videoUrl: language === 'fr' ? "https://www.youtube.com/embed/r9wXl_Zsu50" : "https://www.youtube.com/embed/-PmM7CchUHE",
      features: salesBoostFeatures
    }
  ];

  return (
    <section id="solutions" className="py-24 px-4 relative section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">{language === 'fr' ? 'Nos Solutions' : 'Our Solutions'}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{language === 'fr' ? 'Solutions IA pour Exportateurs' : 'AI Solutions for Exporters'}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'fr' 
              ? 'Nos solutions d\'intelligence artificielle sont spécifiquement conçues pour aider les exportateurs à se développer sur les marchés internationaux.'
              : 'Our artificial intelligence solutions are specifically designed to help exporters grow in international markets.'}
          </p>
        </div>

        <div className="w-full">
          <Tabs defaultValue="view-cards">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="view-cards">{language === 'fr' ? 'Vue en cartes' : 'Card View'}</TabsTrigger>
                <TabsTrigger value="view-videos">{language === 'fr' ? 'Vue en vidéos' : 'Video View'}</TabsTrigger>
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
                          {language === 'fr' ? 'Voir les fonctionnalités' : 'View features'}
                        </button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <h4 className="font-semibold mb-2">{solution.title}</h4>
                        <ul className="space-y-2 text-sm">
                          {solution.features.map((feature, i) => (
                            <li key={i} className="relative pl-5">
                              <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-[#8FD14F] rounded-full"></span>
                              <span dangerouslySetInnerHTML={{ __html: feature }}></span>
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
