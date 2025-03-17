
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
    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center p-6 rounded-lg bg-card/80 hover:bg-card transition-colors duration-300 shadow-sm hover:shadow-md animate-on-scroll">
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
      title: "Free Professional Website",
      description: "Receive a professional SEO-optimized website, completely free."
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Free Google Ads Credit",
      description: "Benefit from 200 DH per month credit for your Google Ads campaigns."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: "Free Diagnostic",
      description: "Complete analysis of your current position and recommendations for your development."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Branding and Makeover",
      description: "Modernization of your logo for better brand recognition."
    }
  ];

  return (
    <section id="why-us" className="py-24 px-4 bg-gradient-to-b from-background to-card/50 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Why Choose Us</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why BoostExportsAI?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer much more than just a technology solution, discover our exclusive advantages
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
            Simplify Your Business
          </h3>
          <p className="text-center max-w-3xl mx-auto text-muted-foreground">
            We take care of everything: diagnosis, strategy, communication tools, lead generation, 
            nurturing, and deal preparation. You only need to focus on negotiation and 
            closing sales while we manage your digital marketing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
