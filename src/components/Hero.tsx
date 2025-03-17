
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
  const { language } = useLanguage();
  
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
    const videoElement = document.getElementById('promo-video') as HTMLVideoElement;
    if (videoElement) {
      videoElement.play();
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden section-padding">
      {/* Background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-300/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-10 animate-on-scroll">
            <Badge variant="secondary" className="mb-2 flex items-center gap-1">
              <Globe className="mr-1 h-3 w-3" /> Intelligence Artificielle pour Exportateurs
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight whitespace-normal">
              Augmentez vos exportations et <span className="hero-text-gradient">pénétrez de nouveaux marchés</span> avec l'IA
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 max-w-5xl">
              Nous accompagnons les exportateurs africains à conquérir les marchés africains, asiatiques, 
              américains et européens grâce à une technologie éprouvée dans plus de 50 pays.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
              <div className="space-y-10">
                <div className="space-y-4">
                  {/* Enhanced modern section */}
                  <div className="relative group p-6 bg-gradient-to-br from-background via-secondary/30 to-background rounded-2xl border border-primary/20 shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-500">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-blue-400/50 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                    <div className="relative flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-primary/10 text-primary">
                        <Rocket className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-semibold font-display bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                        Développez votre présence internationale
                      </h3>
                    </div>
                    <p className="text-lg text-foreground/70 pl-12 mb-6">
                      Automatisez vos processus d'exportation avec nos solutions d'IA
                    </p>
                  </div>
                  
                  {/* Video Section */}
                  <div className="mt-6 relative rounded-xl overflow-hidden border border-primary/20 shadow-lg shadow-primary/5">
                    <AspectRatio ratio={16/9} className="bg-black">
                      {!isVideoPlaying ? (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-full h-full">
                            <img 
                              src="/placeholder.svg" 
                              alt="Video thumbnail" 
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
                      ) : null}
                      <video
                        id="promo-video"
                        className="w-full h-full object-cover"
                        controls={isVideoPlaying}
                        poster="/placeholder.svg"
                        playsInline
                      >
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                        Votre navigateur ne supporte pas la lecture de vidéos.
                      </video>
                    </AspectRatio>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <Card className="bg-white/10 hover:bg-white/15 transition-all duration-300 border-primary/10 hover:border-primary/30">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        <h4 className="text-base font-medium text-foreground">Marchés ciblés</h4>
                      </div>
                      <p className="text-4xl font-bold text-primary mb-2">4</p>
                      <p className="text-sm text-muted-foreground">Afrique, Asie, Amérique, Europe</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/10 hover:bg-white/15 transition-all duration-300 border-primary/10 hover:border-primary/30">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Languages className="h-5 w-5 text-primary" />
                        <h4 className="text-base font-medium text-foreground">Langues</h4>
                      </div>
                      <p className="text-4xl font-bold text-primary mb-2">5+</p>
                      <p className="text-sm text-muted-foreground">Support multilingue</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/10 hover:bg-white/15 transition-all duration-300 border-primary/10 hover:border-primary/30">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Lightbulb className="h-5 w-5 text-primary" />
                        <h4 className="text-base font-medium text-foreground">Solutions IA</h4>
                      </div>
                      <p className="text-4xl font-bold text-primary mb-2">3</p>
                      <p className="text-sm text-muted-foreground">Site web, Marketing, Ventes</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/10 hover:bg-white/15 transition-all duration-300 border-primary/10 hover:border-primary/30">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <CreditCard className="h-5 w-5 text-primary" />
                        <h4 className="text-base font-medium text-foreground">Crédits offerts</h4>
                      </div>
                      <p className="text-4xl font-bold text-primary mb-2">200 DH</p>
                      <p className="text-sm text-muted-foreground">Pour Google Ads</p>
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
                    En savoir plus
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <p className="text-base text-muted-foreground">
                    Déjà utilisé par des exportateurs dans 
                    <span className="text-foreground font-semibold"> 50+ pays</span>
                  </p>
                </div>
              </div>
              
              <div className="relative flex items-center justify-center animate-on-scroll">
                <div className="w-full max-w-lg">
                  <Card className="glass-card rounded-2xl overflow-hidden shadow-xl with-border-fade">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-primary"></div>
                    <CardContent className="p-8">
                      <div className="space-y-4 animate-entrance" style={{ animationDelay: '0.1s' }}>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          <h3 className="text-xl font-semibold text-foreground">Accélérez votre croissance internationale</h3>
                        </div>
                        <p className="text-base text-foreground/70">
                          Notre IA simplifie votre expansion et atteint de nouveaux clients partout dans le monde
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Book Demo Dialog */}
      <BookDemoDialog open={bookDemoOpen} onOpenChange={setBookDemoOpen} />
    </section>
  );
};

export default Hero;
