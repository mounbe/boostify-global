
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Globe, Gift } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ExporterCTA = () => {
  const { language } = useLanguage();
  
  // Si ce n'est pas français, ne pas afficher ce composant
  if (language !== 'fr') return null;
  
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-900 to-purple-800 section-padding">
      <div className="max-w-7xl mx-auto">
        <Card className="border-0 overflow-hidden shadow-2xl">
          <div className="relative overflow-hidden">
            {/* Bannière "GRATUIT" coin supérieur droit */}
            <div className="absolute -right-12 top-6 bg-orange-500 text-white py-2 px-10 transform rotate-45 z-10 shadow-lg">
              <span className="font-bold">GRATUIT</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Contenu texte */}
              <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-4 inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  <Gift size={16} />
                  <span>Offre Spéciale Exportateurs</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-indigo-500 bg-clip-text text-transparent">
                  Vous êtes exportateur ?<br />
                  <span className="text-4xl md:text-5xl">Commandez votre nouveau site web <span className="text-orange-500 font-extrabold">GRATUIT</span></span>
                </h2>
                <p className="text-lg mb-8 text-gray-600">
                  Augmentez votre présence internationale avec un site web professionnel 
                  optimisé pour l'export. Notre équipe d'experts vous accompagne dans 
                  la conquête des marchés internationaux.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-1 rounded-full">
                      <Globe className="h-5 w-5 text-purple-700" />
                    </div>
                    <div>
                      <h3 className="font-medium">Site web multilingue</h3>
                      <p className="text-sm text-gray-600">En français, anglais, espagnol et arabe</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-1 rounded-full">
                      <Globe className="h-5 w-5 text-purple-700" />
                    </div>
                    <div>
                      <h3 className="font-medium">Optimisé pour l'export</h3>
                      <p className="text-sm text-gray-600">Conçu pour attirer des acheteurs internationaux</p>
                    </div>
                  </div>
                </div>
                <Button className="mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium px-6 py-6 rounded-full w-full md:w-auto">
                  <span>Commandez maintenant</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
              
              {/* Image ou illustration */}
              <div className="relative h-64 md:h-auto overflow-hidden bg-purple-50">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200/50 to-indigo-100/50" />
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                  alt="Exportateur avec site web" 
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="bg-white/90 p-6 rounded-lg shadow-lg max-w-md">
                    <h3 className="text-xl font-bold text-purple-800 mb-2">Témoignage</h3>
                    <p className="italic text-gray-700">
                      "Grâce à mon nouveau site web exportateur, j'ai augmenté mes ventes internationales de 40% en seulement 3 mois."
                    </p>
                    <p className="mt-2 font-semibold text-gray-900">— Mohammed L., Exportateur de produits cosmétiques</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ExporterCTA;
