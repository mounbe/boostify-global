
import React, { useEffect, useState } from 'react';
import { ChevronRight, Globe, ExternalLink, Calendar, TrendingUp, Users, MapPin, Languages, Lightbulb, CreditCard, Rocket, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import BookDemoDialog from './BookDemoDialog';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent } from './ui/card';
import { AspectRatio } from './ui/aspect-ratio';

const Hero = () => {
  const [bookDemoOpen, setBookDemoOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const { language, t } = useLanguage();
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden section-padding">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-300/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="space-y-10 animate-on-scroll">
            <Badge variant="secondary" className="mb-2 flex items-center gap-1">
              <Globe className="mr-1 h-3 w-3" /> 
              {language === 'fr' ? 'Intelligence Artificielle pour Exportateurs' : 'Artificial Intelligence for Exporters'}
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight whitespace-normal">
              {language === 'fr' ? (
                <>Augmentez vos exportations et <span className="hero-text-gradient">pénétrez de nouveaux marchés</span> avec l'IA</>
              ) : (
                <>Increase your exports and <span className="hero-text-gradient">penetrate new markets</span> with AI</>
              )}
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 max-w-5xl">
              {language === 'fr' ? (
                'Nous accompagnons les exportateurs africains à conquérir les marchés africains, asiatiques, américains et européens grâce à une technologie éprouvée dans plus de 50 pays.'
              ) : (
                'We help African exporters conquer African, Asian, American, and European markets through technology proven in over 50 countries.'
              )}
            </p>
            
            <div className="space-y-10 mt-8">
              <div className="space-y-4">
                <div className="relative group p-6 bg-gradient-to-br from-background via-secondary/30 to-background rounded-2xl border border-primary/20 shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-500">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-blue-400/50 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                  <div className="relative flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <Rocket className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-semibold font-display text-white">
                      {language === 'fr' ? 'Accélérez votre croissance internationale' : 'Accelerate your international growth'}
                    </h3>
                  </div>
                  <p className="text-lg text-foreground/70 pl-12 mb-6">
                    {language === 'fr' ? (
                      'Notre IA simplifie votre expansion et atteint de nouveaux clients partout dans le monde'
                    ) : (
                      'Our AI simplifies your expansion and reaches new customers worldwide'
                    )}
                  </p>
                </div>
                
                <div className="mt-6 relative rounded-xl overflow-hidden border border-primary/20 shadow-lg shadow-primary/5">
                  {!isVideoPlaying ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <img 
                          src="https://img.youtube.com/vi/r9wXl_Zsu50/maxresdefault.jpg" 
                          alt={language === 'fr' ? "Vignette de la vidéo" : "Video thumbnail"} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-primary/30 flex items-center justify-center backdrop-blur-sm">
                          <Button 
                            onClick={handlePlayVideo}
                            variant="ghost" 
                            size="icon" 
                            className="w-20 h-20 rounded-full bg-primary/80 hover:bg-primary hover:scale-105 transition-all duration-300 text-white shadow-lg shadow-primary/40"
                          >
                            <Play className="h-10 w-10 ml-1" />
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
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-white/10 hover:bg-white/15 transition-all duration-300 border-primary/10 hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h4 className="text-base font-medium text-foreground">
                        {language === 'fr' ? 'Marchés ciblés' : 'Target markets'}
                      </h4>
                    </div>
                    <p className="text-4xl font-bold text-primary mb-2">4</p>
                    <p className="text-sm text-muted-foreground">
                      {language === 'fr' ? 'Afrique, Asie, Amérique, Europe' : 'Africa, Asia, America, Europe'}
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 hover:bg-white/15 transition-all duration-300 border-primary/10 hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Languages className="h-5 w-5 text-primary" />
                      <h4 className="text-base font-medium text-foreground">
                        {language === 'fr' ? 'Langues' : 'Languages'}
                      </h4>
                    </div>
                    <p className="text-4xl font-bold text-primary mb-2">7+</p>
                    <p className="text-sm text-muted-foreground">
                      {language === 'fr' ? 'Support multilingue' : 'Multilingual support'}
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 hover:bg-white/15 transition-all duration-300 border-primary/10 hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      <h4 className="text-base font-medium text-foreground">
                        {language === 'fr' ? 'Solutions IA' : 'AI Solutions'}
                      </h4>
                    </div>
                    <p className="text-4xl font-bold text-primary mb-2">3</p>
                    <p className="text-sm text-muted-foreground">
                      {language === 'fr' ? 'Site web, Marketing, Ventes' : 'Website, Marketing, Sales'}
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 hover:bg-white/15 transition-all duration-300 border-primary/10 hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <CreditCard className="h-5 w-5 text-primary" />
                      <h4 className="text-base font-medium text-foreground">
                        {language === 'fr' ? 'Crédits offerts' : 'Free credits'}
                      </h4>
                    </div>
                    <p className="text-4xl font-bold text-primary mb-2">
                      <span className="text-sm inline-block">
                        {language === 'fr' ? '20$/mois' : '20$/month'}
                      </span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {language === 'fr' ? 'Pour Google Ads' : 'For Google Ads'}
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white text-base px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  onClick={() => setBookDemoOpen(true)}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  {language === 'fr' ? 'Réserver une démo' : 'Book a demo'}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button variant="outline" className="text-foreground border-foreground/20 hover:bg-foreground/5 text-base px-8 py-6 rounded-full">
                  {language === 'fr' ? 'En savoir plus' : 'Learn more'}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <p className="text-base text-muted-foreground">
                  {language === 'fr' ? 'Déjà utilisé par des exportateurs dans ' : 'Already used by exporters in '}
                  <span className="text-foreground font-semibold">
                    {language === 'fr' ? '50+ pays' : '50+ countries'}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <BookDemoDialog open={bookDemoOpen} onOpenChange={setBookDemoOpen} />
    </section>
  );
};

export default Hero;
