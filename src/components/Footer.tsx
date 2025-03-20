
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, Phone, Globe, MapPin, ChevronRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language, t } = useLanguage();
  
  return (
    <footer className="bg-emerald-950/90 border-t border-border">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company & Logo Column */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/ba87be27-859e-4b95-91a5-a1183a638e08.png" 
                alt="BoostExportsAI Logo" 
                className="h-14 w-auto"
              />
            </div>
            <p className="text-emerald-300/80 text-sm max-w-xs">
              {language === 'fr' 
                ? 'Solutions d\'IA pour aider les exportateurs à conquérir de nouveaux marchés avec la puissance de l\'intelligence artificielle.'
                : 'AI-powered solutions helping exporters conquer new markets with the power of artificial intelligence.'}
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span className="text-emerald-300/80 text-sm">
                  {language === 'fr' ? 'Dakar, Sénégal' : 'Dakar, Senegal'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-400" />
                <a href="mailto:contact@boostexportsai.com" className="text-emerald-300/80 text-sm hover:text-emerald-300 transition-colors">
                  contact@boostexportsai.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-400" />
                <a href="tel:+221123456789" className="text-emerald-300/80 text-sm hover:text-emerald-300 transition-colors">
                  +221 12 345 6789
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-emerald-400" />
                <a href="https://boostexportsai.com" className="text-emerald-300/80 text-sm hover:text-emerald-300 transition-colors">
                  boostexportsai.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">
              {language === 'fr' ? 'Nos Solutions' : 'Our Solutions'}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center text-emerald-300/80 text-sm hover:text-emerald-300 transition-colors">
                  <ChevronRight className="h-3 w-3 mr-2 text-emerald-400" />
                  {language === 'fr' ? 'Boost Site Web' : 'Website Boost'}
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-emerald-300/80 text-sm hover:text-emerald-300 transition-colors">
                  <ChevronRight className="h-3 w-3 mr-2 text-emerald-400" />
                  {language === 'fr' ? 'Boost Marketing Digital' : 'Digital Marketing Boost'}
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-emerald-300/80 text-sm hover:text-emerald-300 transition-colors">
                  <ChevronRight className="h-3 w-3 mr-2 text-emerald-400" />
                  {language === 'fr' ? 'Boost Ventes' : 'Sales Boost'}
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-emerald-300/80 text-sm hover:text-emerald-300 transition-colors">
                  <ChevronRight className="h-3 w-3 mr-2 text-emerald-400" />
                  {language === 'fr' ? 'Conseil en Exportation' : 'Export Consulting'}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">
              {language === 'fr' ? 'Liens Rapides' : 'Quick Links'}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center text-emerald-300/80 text-sm hover:text-emerald-300 transition-colors">
                  <ChevronRight className="h-3 w-3 mr-2 text-emerald-400" />
                  {language === 'fr' ? 'À Propos' : 'About Us'}
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-emerald-300/80 text-sm hover:text-emerald-300 transition-colors">
                  <ChevronRight className="h-3 w-3 mr-2 text-emerald-400" />
                  {language === 'fr' ? 'FAQ' : 'FAQs'}
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-emerald-300/80 text-sm hover:text-emerald-300 transition-colors">
                  <ChevronRight className="h-3 w-3 mr-2 text-emerald-400" />
                  {language === 'fr' ? 'Témoignages' : 'Testimonials'}
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-emerald-300/80 text-sm hover:text-emerald-300 transition-colors">
                  <ChevronRight className="h-3 w-3 mr-2 text-emerald-400" />
                  {language === 'fr' ? 'Blog' : 'Blog'}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter Column */}
          <div className="md:col-span-3 lg:col-span-1 space-y-4">
            <h4 className="text-white font-semibold text-base">
              {language === 'fr' ? 'Restez Informé' : 'Stay Updated'}
            </h4>
            <p className="text-emerald-300/80 text-sm">
              {language === 'fr' 
                ? 'Abonnez-vous à notre newsletter pour les dernières nouvelles et mises à jour.'
                : 'Subscribe to our newsletter for the latest news and updates.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder={language === 'fr' ? 'Votre email' : 'Your email'} 
                className="bg-emerald-900/50 border border-emerald-800/50 text-emerald-100 rounded-md px-4 py-2 text-sm flex-grow focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
              />
              <Button variant="default" className="shrink-0">
                {language === 'fr' ? 'S\'abonner' : 'Subscribe'}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Separator className="max-w-7xl mx-auto opacity-20" />
      
      {/* Copyright section */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="text-sm text-emerald-300/80">
          <p>© {currentYear} BoostExportsAI. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
        </div>
        
        <div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <li>
              <a href="#" className="text-emerald-300/80 hover:text-emerald-300 transition-colors">
                {language === 'fr' ? 'Confidentialité' : 'Privacy Policy'}
              </a>
            </li>
            <li>
              <a href="#" className="text-emerald-300/80 hover:text-emerald-300 transition-colors">
                {language === 'fr' ? 'CGU' : 'Terms of Service'}
              </a>
            </li>
            <li>
              <a href="#" className="text-emerald-300/80 hover:text-emerald-300 transition-colors">
                {language === 'fr' ? 'Mentions Légales' : 'Legal Notice'}
              </a>
            </li>
            <li>
              <a href="#" className="text-emerald-300/80 hover:text-emerald-300 transition-colors">
                {language === 'fr' ? 'Politique de Cookies' : 'Cookie Policy'}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
