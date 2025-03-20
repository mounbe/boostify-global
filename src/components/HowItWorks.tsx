
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Monitor, Play } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const HowItWorks = () => {
  const { language } = useLanguage();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  const videoUrl = language === 'fr' 
    ? "https://www.youtube.com/embed/r9wXl_Zsu50?autoplay=1"
    : "https://www.youtube.com/embed/-PmM7CchUHE?autoplay=1";

  return (
    <section id="how-it-works" className="py-24 px-4 bg-primary/10 section-padding">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
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
                      data-button-name={language === 'fr' ? 'Regarder la vidéo' : 'Watch video'}
                    >
                      <Play className="h-8 w-8 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <iframe 
                src={videoUrl}
                title="YouTube video" 
                className="w-full h-full absolute inset-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
