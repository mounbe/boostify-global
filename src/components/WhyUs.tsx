
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Gift, Award, Lightbulb, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center p-6 rounded-lg bg-[#3b82f6]/10 hover:bg-[#3b82f6]/20 transition-colors duration-300 shadow-sm hover:shadow-md animate-on-scroll">
      <div className="bg-[#3b82f6]/20 p-3 rounded-full flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1 text-[#3b82f6]">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const WhyUs = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Gift className="h-6 w-6 text-[#3b82f6]" />,
      title: t('whyUs.feature1.title'),
      description: t('whyUs.feature1.description')
    },
    {
      icon: <Award className="h-6 w-6 text-[#3b82f6]" />,
      title: t('whyUs.feature2.title'),
      description: t('whyUs.feature2.description')
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-[#3b82f6]" />,
      title: t('whyUs.feature3.title'),
      description: t('whyUs.feature3.description')
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-[#3b82f6]" />,
      title: t('whyUs.feature4.title'),
      description: t('whyUs.feature4.description')
    }
  ];

  return (
    <section id="why-us" className="py-24 px-4 bg-gradient-to-b from-background to-[#3b82f6]/10 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-[#3b82f6]/20 text-[#3b82f6] hover:bg-[#3b82f6]/30">{t('whyUs.badge')}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t('whyUs.title')}</h2>
          <p className="text-lg text-blue-600/80 max-w-2xl mx-auto">
            {t('whyUs.description')}
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
        
        <div className="mt-16 p-8 bg-[#3b82f6]/10 rounded-xl border border-[#3b82f6]/20 animate-on-scroll">
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-4 text-white">
            {t('whyUs.simplify.title')}
          </h3>
          <p className="text-center max-w-3xl mx-auto text-blue-600/80">
            {t('whyUs.simplify.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
