import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.benefits': 'Benefits',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'cta.bookDemo': 'Book a demo',
    
    // Hero
    'hero.badge': 'Artificial Intelligence for Exporters',
    'hero.title': 'Increase your exports and penetrate new markets with AI',
    'hero.description': 'We help African exporters conquer African, Asian, American, and European markets through technology proven in over 50 countries.',
    'hero.cta.demo': 'Book a demo',
    'hero.cta.learnMore': 'Learn more',
    'hero.users': 'Already used by exporters in',
    'hero.countries': '50+ countries',
    'hero.card.title': 'Develop your international presence',
    'hero.card.subtitle': 'Automate your export processes with our AI solutions',
    'hero.card.markets': 'Target markets',
    'hero.card.languages': 'Languages',
    'hero.card.solutions': 'AI Solutions',
    'hero.card.credits': 'Free credits',
    
    // Why Us
    'whyUs.badge': 'Why Choose Us',
    'whyUs.title': 'Why BoostExportsAI?',
    'whyUs.description': 'We offer much more than just a technology solution, discover our exclusive advantages',
    'whyUs.feature1.title': 'Free Professional Website',
    'whyUs.feature1.description': 'Receive a professional SEO-optimized website, completely free.',
    'whyUs.feature2.title': 'Free Google Ads Credit',
    'whyUs.feature2.description': 'Benefit from 20$ per month credit for your Google Ads campaigns.',
    'whyUs.feature3.title': 'Free Diagnostic',
    'whyUs.feature3.description': 'Complete analysis of your current position and recommendations for your development.',
    'whyUs.feature4.title': 'Branding and Makeover',
    'whyUs.feature4.description': 'Modernization of your logo for better brand recognition.',
    'whyUs.simplify.title': 'Simplify Your Business',
    'whyUs.simplify.description': '<span class="text-white font-bold">We take care of everything</span>: diagnosis, strategy, communication tools, lead generation, nurturing, and deal preparation. <span class="text-white font-bold">You only need to focus on negotiation and closing sales</span> while we manage your marketing and sales activities.',
    'whyUs.simplify.step1.title': 'Business Analysis',
    'whyUs.simplify.step1.description': 'Our AI analyzes your business, products, and current market to identify international opportunities.',
    'whyUs.simplify.step2.title': 'Customized Strategy',
    'whyUs.simplify.step2.description': 'We develop a tailored export strategy adapted to your industry and identified target markets.',
    'whyUs.simplify.step3.title': 'Implementation and Monitoring',
    'whyUs.simplify.step3.description': 'Our team assists you in implementing the strategy and ensures regular monitoring of results.',
    
    // Pricing
    'pricing.badge': 'Offers with 30% discount',
    'pricing.title': 'Our Pricing',
    'pricing.description': 'Choose the offer that best suits your needs. Offer valid until April 7, 2025.',
    'pricing.getStarted': 'Get Started',
    'pricing.popular': 'Popular',
    'pricing.plan1.title': 'Website Boost',
    'pricing.plan1.price': '190$',
    'pricing.plan1.feature1': 'Multilingual AI agent',
    'pricing.plan1.feature2': 'Real-time analysis',
    'pricing.plan1.feature3': 'Localized SEO',
    'pricing.plan1.feature4': 'Landing page creation',
    'pricing.plan1.feature5': 'Free website',
    
    'pricing.plan2.title': 'Digital Marketing Boost',
    'pricing.plan2.price': '290$',
    'pricing.plan2.feature1': 'Content generation',
    'pricing.plan2.feature2': 'Strategic editorial',
    'pricing.plan2.feature3': 'Trend analysis',
    'pricing.plan2.feature4': 'Trend adaptation',
    'pricing.plan2.feature5': 'Detailed reports',
    'pricing.plan2.feature6': 'Free diagnostic',
    
    'pricing.plan3.title': 'Sales Boost',
    'pricing.plan3.price': '790$',
    'pricing.plan3.feature1': 'Automated lead generation',
    'pricing.plan3.feature2': 'Lead nurturing',
    'pricing.plan3.feature3': 'Process automation',
    'pricing.plan3.feature4': 'Analytics reports',
    'pricing.plan3.feature5': 'CRM included',
    'pricing.plan3.feature6': 'Mobile app included',
    'pricing.plan3.feature7': 'AI voice agent included',
    
    // Contact
    'contact.badge': 'Contact',
    'contact.title': 'Contact Us',
    'contact.description': 'Contact our team to discuss your export needs and discover how our solutions can help you.',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.placeholder.name': 'Your name',
    'contact.form.placeholder.email': 'your.email@example.com',
    'contact.form.placeholder.subject': 'Subject of your message',
    'contact.form.placeholder.message': 'How can we help you?',
    'contact.form.submit': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.website': 'Website',
    'contact.info.partners': 'Our Partners',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.legal': 'Legal Notice',
  },
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.benefits': 'Avantages',
    'nav.pricing': 'Tarification',
    'nav.contact': 'Contact',
    'cta.bookDemo': 'Réserver une démo',
    
    // Hero
    'hero.badge': 'Intelligence Artificielle pour Exportateurs',
    'hero.title': 'Augmentez vos exportations et pénétrez de nouveaux marchés avec l\'IA',
    'hero.description': 'Nous accompagnons les exportateurs africains à conquérir les marchés africains, asiatiques, américains et européens grâce à une technologie éprouvée dans plus de 50 pays.',
    'hero.cta.demo': 'Réserver une démo',
    'hero.cta.learnMore': 'En savoir plus',
    'hero.users': 'Déjà utilisé par des exportateurs dans',
    'hero.countries': '50+ pays',
    'hero.card.title': 'Développez votre présence internationale',
    'hero.card.subtitle': 'Automatisez vos processus d\'exportation avec nos solutions d\'IA',
    'hero.card.markets': 'Marchés ciblés',
    'hero.card.languages': 'Langues',
    'hero.card.solutions': 'Solutions IA',
    'hero.card.credits': 'Crédits offerts',
    
    // Why Us
    'whyUs.badge': 'Pourquoi Nous Choisir',
    'whyUs.title': 'Pourquoi BoostExportsAI ?',
    'whyUs.description': 'Nous offrons bien plus qu\'une simple solution technologique, découvrez nos avantages exclusifs',
    'whyUs.feature1.title': 'Site Web Professionnel Gratuit',
    'whyUs.feature1.description': 'Recevez un site web professionnel optimisé pour le SEO, totalement gratuit.',
    'whyUs.feature2.title': 'Crédit Google Ads Gratuit',
    'whyUs.feature2.description': 'Bénéficiez de 20$ par mois de crédit pour vos campagnes Google Ads.',
    'whyUs.feature3.title': 'Diagnostic Gratuit',
    'whyUs.feature3.description': 'Analyse complète de votre position actuelle et recommandations pour votre développement.',
    'whyUs.feature4.title': 'Branding et Relooking',
    'whyUs.feature4.description': 'Modernisation de votre logo pour une meilleure reconnaissance de marque.',
    'whyUs.simplify.title': 'Simplifiez Votre Business',
    'whyUs.simplify.description': '<span class="text-white font-bold">Nous nous occupons de tout</span> : diagnostic, stratégie, outils de communication, génération de leads, nurturing, et préparation des affaires. <span class="text-white font-bold">Vous n\'avez qu\'à vous concentrer sur la négociation et la clôture des ventes</span> pendant que nous gérons votre marketing et vos activités commerciales.',
    'whyUs.simplify.step1.title': 'Analyse de votre entreprise',
    'whyUs.simplify.step1.description': 'Notre IA analyse votre entreprise, vos produits et votre marché actuel pour identifier les opportunités à l\'international.',
    'whyUs.simplify.step2.title': 'Stratégie personnalisée',
    'whyUs.simplify.step2.description': 'Nous élaborons une stratégie d\'exportation sur mesure adaptée à votre secteur et aux marchés cibles identifiés.',
    'whyUs.simplify.step3.title': 'Mise en œuvre et suivi',
    'whyUs.simplify.step3.description': 'Notre équipe vous accompagne dans la mise en œuvre de la stratégie et assure un suivi régulier des résultats.',
    
    // Pricing
    'pricing.badge': 'Offres avec 30% de réduction',
    'pricing.title': 'Nos Tarifs',
    'pricing.description': 'Choisissez l\'offre qui correspond le mieux à vos besoins. Offre valable jusqu\'au 7 avril 2025.',
    'pricing.getStarted': 'Commencer',
    'pricing.popular': 'Populaire',
    'pricing.plan1.title': 'Boost Site Web',
    'pricing.plan1.price': '190$',
    'pricing.plan1.feature1': 'Agent IA multilingue',
    'pricing.plan1.feature2': 'Analyse en temps réel',
    'pricing.plan1.feature3': 'SEO localisé',
    'pricing.plan1.feature4': 'Création de landing page',
    'pricing.plan1.feature5': 'Site web gratuit',
    
    'pricing.plan2.title': 'Boost Marketing Digital',
    'pricing.plan2.price': '290$',
    'pricing.plan2.feature1': 'Génération de contenu',
    'pricing.plan2.feature2': 'Éditorial stratégique',
    'pricing.plan2.feature3': 'Analyse des tendances',
    'pricing.plan2.feature4': 'Adaptation aux tendances',
    'pricing.plan2.feature5': 'Rapports détaillés',
    'pricing.plan2.feature6': 'Diagnostic gratuit',
    
    'pricing.plan3.title': 'Boost Ventes',
    'pricing.plan3.price': '790$',
    'pricing.plan3.feature1': 'Génération automatisée de leads',
    'pricing.plan3.feature2': 'Nurturing de leads',
    'pricing.plan3.feature3': 'Automatisation des processus',
    'pricing.plan3.feature4': 'Rapports analytiques',
    'pricing.plan3.feature5': 'CRM inclus',
    'pricing.plan3.feature6': 'Application mobile incluse',
    'pricing.plan3.feature7': 'Agent vocal IA inclus',
    
    // Contact
    'contact.badge': 'Contact',
    'contact.title': 'Contactez-nous',
    'contact.description': 'Contactez notre équipe pour discuter de vos besoins d\'exportation et découvrir comment nos solutions peuvent vous aider.',
    'contact.form.name': 'Nom Complet',
    'contact.form.email': 'Adresse Email',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.placeholder.name': 'Votre nom',
    'contact.form.placeholder.email': 'votre.email@exemple.com',
    'contact.form.placeholder.subject': 'Sujet de votre message',
    'contact.form.placeholder.message': 'Comment pouvons-nous vous aider ?',
    'contact.form.submit': 'Envoyer le Message',
    'contact.info.title': 'Informations de Contact',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Téléphone',
    'contact.info.website': 'Site Web',
    'contact.info.partners': 'Nos Partenaires',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.privacy': 'Confidentialité',
    'footer.terms': 'CGU',
    'footer.legal': 'Mentions Légales',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
