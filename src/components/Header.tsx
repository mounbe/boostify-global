
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronRight } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#solutions' },
    { name: 'Benefits', href: '#why-us' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-lg',
      isScrolled ? 'bg-background/80 shadow-sm' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-primary text-2xl font-display font-bold">Boost</span>
              <span className="text-foreground text-2xl font-display font-bold">ExportsAI</span>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
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
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-white font-medium rounded-full px-6">
              Book a demo
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden flex items-center p-2 rounded-md text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-16 bg-card shadow-lg transition-transform duration-300 ease-in-out z-40",
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
          <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium rounded-full mt-4">
            Book a demo
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
