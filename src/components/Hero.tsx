
import React, { useEffect, useState } from 'react';
import { ChevronRight, Globe, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import BookDemoDialog from './BookDemoDialog';
import { useLanguage } from '@/context/LanguageContext';
import { Card } from './ui/card';

const Hero = () => {
  const [bookDemoOpen, setBookDemoOpen] = useState(false);
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
          <div className="space-y-8 animate-on-scroll">
            <Badge variant="secondary" className="mb-4 flex items-center gap-1">
              <Globe className="mr-1 h-3 w-3" /> Intelligence Artificielle pour Exportateurs
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight whitespace-normal">
              Augmentez vos exportations et <span className="hero-text-gradient">pénétrez de nouveaux marchés</span> avec l'IA
            </h1>
            
            <p className="text-lg text-foreground/80 max-w-none">
              Nous accompagnons les exportateurs africains à conquérir les marchés africains, asiatiques, 
              américains et européens grâce à une technologie éprouvée dans plus de 50 pays.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-4 mb-6">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground">Développez votre présence internationale</h3>
                    <p className="text-sm text-foreground/70">
                      Automatisez vos processus d'exportation avec nos solutions d'IA
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/10 p-4 rounded-lg shadow-sm">
                    <h4 className="text-sm font-medium text-foreground">Marchés ciblés</h4>
                    <p className="text-2xl font-bold text-primary mt-1">4</p>
                    <p className="text-xs text-muted-foreground mt-1">Afrique, Asie, Amérique, Europe</p>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg shadow-sm">
                    <h4 className="text-sm font-medium text-foreground">Langues</h4>
                    <p className="text-2xl font-bold text-primary mt-1">5+</p>
                    <p className="text-xs text-muted-foreground mt-1">Support multilingue</p>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg shadow-sm">
                    <h4 className="text-sm font-medium text-foreground">Solutions IA</h4>
                    <p className="text-2xl font-bold text-primary mt-1">3</p>
                    <p className="text-xs text-muted-foreground mt-1">Site web, Marketing, Ventes</p>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg shadow-sm">
                    <h4 className="text-sm font-medium text-foreground">Crédits offerts</h4>
                    <p className="text-2xl font-bold text-primary mt-1">200 DH</p>
                    <p className="text-xs text-muted-foreground mt-1">Pour Google Ads</p>
                  </div>
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
                
                <div className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    Déjà utilisé par des exportateurs dans 
                    <span className="text-foreground font-semibold"> 50+ pays</span>
                  </p>
                </div>
              </div>
              
              <div className="relative flex items-center justify-center animate-on-scroll">
                <div className="w-full max-w-lg">
                  <div className="relative glass-card rounded-2xl overflow-hidden shadow-xl with-border-fade">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-primary"></div>
                    <div className="p-8">
                      <div className="grid grid-cols-1 gap-6">
                        <div className="space-y-2 animate-entrance" style={{ animationDelay: '0.1s' }}>
                          <h3 className="text-lg font-semibold text-foreground">Accélérez votre croissance internationale</h3>
                          <p className="text-sm text-foreground/70">
                            Notre IA simplifie votre expansion et atteint de nouveaux clients partout dans le monde
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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
