
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, Phone, Globe, ChevronRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' 
          ? "Veuillez entrer une adresse email valide" 
          : "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with actual newsletter subscription API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: language === 'fr' ? "Succès" : "Success",
        description: language === 'fr'
          ? "Merci de vous être abonné à notre newsletter!"
          : "Thank you for subscribing to our newsletter!",
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr'
          ? "Un problème est survenu. Veuillez réessayer plus tard."
          : "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <footer className="bg-background border-t border-border">
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
            <p className="text-muted-foreground text-sm max-w-xs">
              {language === 'fr' 
                ? 'Solutions d\'IA pour aider les exportateurs à conquérir de nouveaux marchés avec la puissance de l\'intelligence artificielle.'
                : 'AI-powered solutions helping exporters conquer new markets with the power of artificial intelligence.'}
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-500" />
                <a href="mailto:contact@boostexportsai.com" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  contact@boostexportsai.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-500" />
                <a href="tel:+2120678636302" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  +212 0678 63 63 02
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-emerald-500" />
                <a href="https://boostexportsai.com" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  boostexportsai.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Services Column */}
          <div>
            <h4 className="text-foreground font-semibold text-base mb-4">
              {language === 'fr' ? 'Nos Solutions' : 'Our Solutions'}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center text-muted-foreground text-sm hover:text-foreground transition-colors">
                  <ChevronRight className="h-3 w-3 mr-2 text-emerald-500" />
                  {language === 'fr' ? 'Boost Site Web' : 'Website Boost'}
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-muted-foreground text-sm hover:text-foreground transition-colors">
                  <ChevronRight className="h-3 w-3 mr-2 text-emerald-500" />
                  {language === 'fr' ? 'Boost Marketing Digital' : 'Digital Marketing Boost'}
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-muted-foreground text-sm hover:text-foreground transition-colors">
                  <ChevronRight className="h-3 w-3 mr-2 text-emerald-500" />
                  {language === 'fr' ? 'Boost Ventes' : 'Sales Boost'}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h4 className="text-foreground font-semibold text-base mb-4">
              {language === 'fr' ? 'Liens Rapides' : 'Quick Links'}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center text-muted-foreground text-sm hover:text-foreground transition-colors">
                  <ChevronRight className="h-3 w-3 mr-2 text-emerald-500" />
                  {language === 'fr' ? 'À Propos' : 'About Us'}
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-muted-foreground text-sm hover:text-foreground transition-colors">
                  <ChevronRight className="h-3 w-3 mr-2 text-emerald-500" />
                  {language === 'fr' ? 'FAQ' : 'FAQs'}
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-muted-foreground text-sm hover:text-foreground transition-colors">
                  <ChevronRight className="h-3 w-3 mr-2 text-emerald-500" />
                  {language === 'fr' ? 'Témoignages' : 'Testimonials'}
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-muted-foreground text-sm hover:text-foreground transition-colors">
                  <ChevronRight className="h-3 w-3 mr-2 text-emerald-500" />
                  {language === 'fr' ? 'Blog' : 'Blog'}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter Column */}
          <div className="md:col-span-3 lg:col-span-1 space-y-4">
            <h4 className="text-foreground font-semibold text-base">
              {language === 'fr' ? 'Restez Informé' : 'Stay Updated'}
            </h4>
            <p className="text-muted-foreground text-sm">
              {language === 'fr' 
                ? 'Abonnez-vous à notre newsletter pour les dernières nouvelles et mises à jour.'
                : 'Subscribe to our newsletter for the latest news and updates.'}
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <Input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={language === 'fr' ? 'Votre email' : 'Your email'} 
                className="bg-card/50 border border-border text-foreground rounded-md px-4 py-2 text-sm flex-grow focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                required
              />
              <Button 
                type="submit" 
                variant="default" 
                className="shrink-0"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {language === 'fr' ? 'Envoi...' : 'Sending...'}
                  </span>
                ) : (
                  language === 'fr' ? 'S\'abonner' : 'Subscribe'
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      <Separator className="max-w-7xl mx-auto opacity-20" />
      
      {/* Copyright section */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          <p>© {currentYear} BoostExportsAI. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
        </div>
        
        <div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <li>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                {language === 'fr' ? 'Confidentialité' : 'Privacy Policy'}
              </a>
            </li>
            <li>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                {language === 'fr' ? 'CGU' : 'Terms of Service'}
              </a>
            </li>
            <li>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                {language === 'fr' ? 'Mentions Légales' : 'Legal Notice'}
              </a>
            </li>
            <li>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
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
