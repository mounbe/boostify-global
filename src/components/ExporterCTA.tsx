
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Globe, Gift, Calendar } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import BookDemoDialog from './BookDemoDialog';

const ExporterCTA = () => {
  const { language } = useLanguage();
  const [bookDemoOpen, setBookDemoOpen] = useState(false);
  
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-emerald-900 to-green-950 section-padding">
      <div className="max-w-7xl mx-auto">
        <Card className="border-0 overflow-hidden shadow-2xl">
          <div className="relative overflow-hidden">
            {/* Free banner in top right corner */}
            <div className="absolute -right-12 top-6 bg-orange-500 text-white py-2 px-10 transform rotate-45 z-10 shadow-lg">
              <span className="font-bold">{language === 'fr' ? 'GRATUIT' : 'FREE'}</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Text content */}
              <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-4 inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                  <Gift size={16} />
                  <span>{language === 'fr' ? 'Offre Spéciale Exportateurs' : 'Special Offer for Exporters'}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-700 to-emerald-500 bg-clip-text text-transparent">
                  {language === 'fr' ? 'Vous êtes exportateur ?' : 'Are you an exporter?'}<br />
                  <span className="text-4xl md:text-5xl">
                    {language === 'fr' 
                      ? 'Commandez votre nouveau site web ' 
                      : 'Order your new website '}
                    <span className="text-orange-500 font-extrabold">{language === 'fr' ? 'GRATUIT' : 'FREE'}</span>
                  </span>
                </h2>
                <p className="text-lg mb-8 text-gray-600">
                  {language === 'fr' 
                    ? 'Augmentez votre présence internationale avec un site web professionnel optimisé pour l\'export. Notre équipe d\'experts vous accompagne dans la conquête des marchés internationaux.'
                    : 'Boost your international presence with a professional website optimized for export. Our team of experts will support you in conquering international markets.'}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-100 p-1 rounded-full">
                      <Globe className="h-5 w-5 text-emerald-700" />
                    </div>
                    <div>
                      <h3 className="font-medium">
                        {language === 'fr' ? 'Site web multilingue' : 'Multilingual website'}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {language === 'fr' 
                          ? 'Choisissez la langue que vous voulez' 
                          : 'Choose the language you want'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-100 p-1 rounded-full">
                      <Globe className="h-5 w-5 text-emerald-700" />
                    </div>
                    <div>
                      <h3 className="font-medium">
                        {language === 'fr' ? 'Optimisé pour l\'export' : 'Optimized for export'}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {language === 'fr' 
                          ? 'Conçu pour attirer des acheteurs internationaux' 
                          : 'Designed to attract international buyers'}
                      </p>
                    </div>
                  </div>
                </div>
                <Button 
                  className="mt-8 bg-gradient-to-r from-emerald-600 to-emerald-800 hover:from-emerald-700 hover:to-emerald-900 text-white font-medium px-6 py-6 rounded-full w-full md:w-auto"
                  onClick={() => setBookDemoOpen(true)}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  <span>{language === 'fr' ? 'Commander mon site gratuit' : 'Order my free website'}</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
              
              {/* Image or illustration */}
              <div className="relative h-64 md:h-auto overflow-hidden bg-emerald-50">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/50 to-emerald-100/50" />
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                  alt={language === 'fr' ? 'Exportateur avec site web' : 'Exporter with website'} 
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="bg-white/90 p-6 rounded-lg shadow-lg max-w-md">
                    <h3 className="text-xl font-bold text-emerald-800 mb-2">
                      {language === 'fr' ? 'Conditions' : 'Terms'}
                    </h3>
                    <p className="text-gray-700">
                      {language === 'fr'
                        ? 'Exclusif pour les Exportateurs, valable jusqu\'au 7 Avril 2025.'
                        : 'Exclusive for Exporters, valid until 7 Avril 2025'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      {/* Book Demo Dialog */}
      <BookDemoDialog open={bookDemoOpen} onOpenChange={setBookDemoOpen} />
    </section>
  );
};

export default ExporterCTA;
