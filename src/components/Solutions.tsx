
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, TrendingUp, BarChartHorizontal, Play } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

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
                title={`Vidéo explicative - ${title}`}
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
  const solutions = [
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Boost Site Web",
      description: "Optimisez votre présence en ligne pour une audience internationale",
      videoUrl: "https://www.youtube.com/embed/HpsFXML7vVY", // Mise à jour avec le nouveau lien vidéo
      features: [
        "Agent IA multilingue (anglais, allemand, arabe, mandarin)",
        "Analyse en temps réel du comportement des visiteurs",
        "SEO localisé pour chaque pays ciblé",
        "Création de landing pages sur les marketplaces B2B et B2C"
      ]
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Boost Marketing Digital",
      description: "Contenu stratégique adapté à chaque marché",
      videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0", // Remplacer par une vraie URL de vidéo
      features: [
        "Génération de contenu pour tous réseaux sociaux",
        "Éditorial stratégique avec calendrier de publication",
        "Analyse des tendances pour un contenu captivant",
        "Adaptation aux tendances pour maximiser l'impact",
        "Rapports détaillés pour optimiser les campagnes"
      ]
    },
    {
      icon: <BarChartHorizontal className="h-6 w-6 text-primary" />,
      title: "Boost Ventes",
      description: "Automatisez votre processus d'acquisition de clients",
      videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw", // Remplacer par une vraie URL de vidéo 
      features: [
        "Génération de leads automatisée avec stratégies avancées",
        "Nurturing des leads avec séquences personnalisées",
        "Automatisation du processus pour une gestion centralisée",
        "Rapports analytics avec données détaillées",
        "Outils inclus: CRM, application mobile, agent vocal IA"
      ]
    }
  ];

  return (
    <section id="solutions" className="py-24 px-4 relative section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Nos Solutions</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Solutions IA pour Exportateurs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nos solutions d'intelligence artificielle sont conçues spécifiquement pour aider les exportateurs 
            à se développer sur les marchés internationaux.
          </p>
        </div>

        <Tabs defaultValue="view-cards" className="mb-8 flex flex-col items-center">
          <TabsList className="mb-6">
            <TabsTrigger value="view-cards">Vue Cartes</TabsTrigger>
            <TabsTrigger value="view-videos">Vue Vidéos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="view-cards" className="w-full">
            <div className="grid md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
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
          
          <TabsContent value="view-videos" className="w-full">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {solutions.map((solution, index) => (
                <div key={index} className="animate-on-scroll bg-card/60 p-6 rounded-lg shadow-md" style={{ animationDelay: `${index * 0.2}s` }}>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    {solution.icon}
                    {solution.title}
                  </h3>
                  
                  <AspectRatio ratio={16/9} className="mb-4 rounded-md overflow-hidden border border-primary/20">
                    <iframe
                      src={solution.videoUrl}
                      className="w-full h-full"
                      title={`Vidéo explicative - ${solution.title}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </AspectRatio>
                  
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <button className="inline-flex items-center text-primary gap-1 hover:underline">
                        <Play className="h-4 w-4" />
                        Voir les fonctionnalités
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
    </section>
  );
};

export default Solutions;

