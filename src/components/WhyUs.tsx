
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Gift, Award, Lightbulb, TrendingUp, Search, Map, Activity, Play, Monitor } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from './ui/button';

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
  const { t, language } = useLanguage();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
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

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section id="why-us" className="py-24 px-4 bg-gradient-to-b from-background to-[#3b82f6]/10 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-[#3b82f6]/20 text-[#3b82f6] hover:bg-[#3b82f6]/30">{t('whyUs.badge')}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t('whyUs.title')}</h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
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
          <p className="text-center max-w-3xl mx-auto text-blue-600/80 mb-8" 
             dangerouslySetInnerHTML={{ __html: t('whyUs.simplify.description') }}>
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-[#3b82f6]/5 p-6 rounded-lg border border-[#3b82f6]/10 hover:bg-[#3b82f6]/10 transition-colors hover:shadow-lg duration-300 group">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-[#3b82f6]/20 flex items-center justify-center text-[#3b82f6] group-hover:bg-[#3b82f6]/40 transition-colors duration-300 mr-3">
                  <Search className="h-6 w-6 text-[#3b82f6]" />
                </div>
                <h4 className="text-white font-semibold text-lg">{t('whyUs.simplify.step1.title')}</h4>
              </div>
              <div className="pl-2 border-l-2 border-[#3b82f6]/20">
                <p className="text-blue-600/80">{t('whyUs.simplify.step1.description')}</p>
              </div>
            </div>
            
            <div className="bg-[#3b82f6]/5 p-6 rounded-lg border border-[#3b82f6]/10 hover:bg-[#3b82f6]/10 transition-colors hover:shadow-lg duration-300 group">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-[#3b82f6]/20 flex items-center justify-center text-[#3b82f6] group-hover:bg-[#3b82f6]/40 transition-colors duration-300 mr-3">
                  <Map className="h-6 w-6 text-[#3b82f6]" />
                </div>
                <h4 className="text-white font-semibold text-lg">{t('whyUs.simplify.step2.title')}</h4>
              </div>
              <div className="pl-2 border-l-2 border-[#3b82f6]/20">
                <p className="text-blue-600/80">{t('whyUs.simplify.step2.description')}</p>
              </div>
            </div>
            
            <div className="bg-[#3b82f6]/5 p-6 rounded-lg border border-[#3b82f6]/10 hover:bg-[#3b82f6]/10 transition-colors hover:shadow-lg duration-300 group">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-[#3b82f6]/20 flex items-center justify-center text-[#3b82f6] group-hover:bg-[#3b82f6]/40 transition-colors duration-300 mr-3">
                  <Activity className="h-6 w-6 text-[#3b82f6]" />
                </div>
                <h4 className="text-white font-semibold text-lg">{t('whyUs.simplify.step3.title')}</h4>
              </div>
              <div className="pl-2 border-l-2 border-[#3b82f6]/20">
                <p className="text-blue-600/80">{t('whyUs.simplify.step3.description')}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* How it works section */}
        <div className="mt-16 p-8 bg-primary/10 rounded-xl border border-primary/20 animate-on-scroll">
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 text-white">
            {language === 'fr' ? 'Comment ça marche ?' : 'How It Works?'}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-primary/20 p-2 rounded-full flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <span className="text-primary font-bold">1</span>
                </div>
                <p className="text-foreground/90">
                  {language === 'fr' 
                    ? 'Découvrez comment accélérer vos exportations dès aujourd\'hui ! Augmenter les exportations et pénétrer de nouveaux marchés.'
                    : 'Discover how to accelerate your exports today! Increase exports and penetrate new markets.'}
                </p>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-primary/20 p-2 rounded-full flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <span className="text-primary font-bold">2</span>
                </div>
                <p className="text-foreground/90">
                  {language === 'fr' 
                    ? 'Automatiser les processus marketing et ventes pour gagner du temps et optimiser vos ressources.'
                    : 'Automate marketing and sales processes to save time and optimize your resources.'}
                </p>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-primary/20 p-2 rounded-full flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <span className="text-primary font-bold">3</span>
                </div>
                <p className="text-foreground/90">
                  {language === 'fr' 
                    ? 'Renforcer votre image de marque et améliorer la visibilité internationale de votre Marque.'
                    : 'Strengthen your brand image and improve the international visibility of your Brand.'}
                </p>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden border border-primary/20 shadow-lg shadow-primary/5 aspect-video">
              {!isVideoPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="w-full h-full bg-card/50 flex items-center justify-center">
                      <Monitor className="h-16 w-16 text-primary/50" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-primary/10 flex items-center justify-center">
                      <Button 
                        onClick={handlePlayVideo}
                        variant="default" 
                        size="icon" 
                        className="w-16 h-16 rounded-full hover:scale-105 transition-all duration-300 text-white shadow-lg shadow-primary/40"
                      >
                        <Play className="h-8 w-8 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe 
                  src="https://www.youtube.com/embed/r9wXl_Zsu50?autoplay=1" 
                  title="YouTube video" 
                  className="w-full h-full absolute inset-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
