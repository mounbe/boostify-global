
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  
  return (
    <footer className="bg-emerald-950/90 border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between">
        <div className="flex justify-center md:justify-start">
          <img 
            src="/lovable-uploads/ba87be27-859e-4b95-91a5-a1183a638e08.png" 
            alt="BoostExportsAI Logo" 
            className="h-14 w-auto"
          />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pb-8 px-4 sm:px-6 text-center md:flex md:items-center md:justify-between">
        <div className="mt-8 md:mt-0 text-sm text-emerald-300">
          <p>© {currentYear} BoostExportsAI. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
        </div>
        
        <div className="mt-4 md:mt-0">
          <ul className="flex justify-center md:justify-end space-x-6 text-sm">
            <li>
              <a href="#" className="text-emerald-300 hover:text-emerald-100 transition-colors">
                {language === 'fr' ? 'Confidentialité' : 'Privacy'}
              </a>
            </li>
            <li>
              <a href="#" className="text-emerald-300 hover:text-emerald-100 transition-colors">
                {language === 'fr' ? 'CGU' : 'Terms'}
              </a>
            </li>
            <li>
              <a href="#" className="text-emerald-300 hover:text-emerald-100 transition-colors">
                {language === 'fr' ? 'Mentions Légales' : 'Legal Notice'}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
