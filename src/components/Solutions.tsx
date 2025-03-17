
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, TrendingUp, BarChartHorizontal } from 'lucide-react';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const SolutionCard = ({ icon, title, description, features }: SolutionCardProps) => {
  return (
    <Card className="glass-card hover:shadow-xl transition-shadow duration-300 h-full">
      <CardHeader>
        <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
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

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
              <SolutionCard
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                features={solution.features}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
