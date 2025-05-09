
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronRight, Calendar } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import BookDemoDialog from './BookDemoDialog';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookDemoOpen, setBookDemoOpen] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { name: t('nav.home'), href: '#hero' },
    { name: t('nav.services'), href: '#solutions' },
    { name: t('nav.benefits'), href: '#why-us' },
    { name: t('nav.pricing'), href: '#pricing' },
    { name: t('nav.contact'), href: '#contact' }
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-lg',
      isScrolled ? 'bg-background/80 shadow-sm' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src="/lovable-uploads/ba87be27-859e-4b95-91a5-a1183a638e08.png" 
              alt="BoostExportsAI Logo" 
              className="h-14 md:h-16 w-auto"
            />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <nav className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/90 hover:text-primary transition-colors duration-200 text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Language Toggle & CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle />
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white font-medium rounded-full px-6"
              onClick={() => setBookDemoOpen(true)}
            >
              <Calendar className="mr-2 h-4 w-4" />
              {t('cta.bookDemo')}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageToggle />
            <button 
              onClick={toggleMobileMenu} 
              className="flex items-center p-2 rounded-md text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-16 bg-green-900/95 backdrop-blur-lg shadow-lg transition-transform duration-300 ease-in-out z-40",
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="px-4 py-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-3 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium rounded-full mt-4"
            onClick={() => {
              setMobileMenuOpen(false);
              setBookDemoOpen(true);
            }}
          >
            <Calendar className="mr-2 h-4 w-4" />
            {t('cta.bookDemo')}
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Book Demo Dialog */}
      <BookDemoDialog 
        open={bookDemoOpen} 
        onOpenChange={setBookDemoOpen}
        selectedPlan={language === 'fr' ? 'Démo depuis l\'en-tête' : 'Demo from header'} 
      />
    </header>
  );
};

export default Header;
