import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr';

type TranslationKey = string;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

type LanguageProviderProps = {
  children: ReactNode;
  initialLanguage?: Language;
};

export const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Solutions',
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
    'hero.users': 'AI solution already used by businesses in',
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
    'pricing.plan1.feature1': 'Transform your website into a tireless salesperson, equipped with visionary AI capable of interacting and closing sales 24/7!',
    'pricing.plan1.feature2': 'Multilingual AI agent (English, German, Arabic, Mandarin...)',
    'pricing.plan1.feature3': 'AI chatbots available 24/7',
    'pricing.plan1.feature4': 'Localized SEO for your target markets',
    'pricing.plan1.feature5': 'B2B & B2C landing page creation',
    
    'pricing.plan2.title': 'Digital Marketing Boost',
    'pricing.plan2.price': '290$',
    'pricing.plan2.feature1': 'Boost your brand on social media! We analyze your needs and communication to create a tailored strategy that maximizes your impact and achieves your goals.',
    'pricing.plan2.feature2': 'Personalized content: Posts adapted to your brand for Facebook, Instagram, LinkedIn and Twitter.',
    'pricing.plan2.feature3': 'Editorial calendar: Strategic planning for a regular and relevant presence.',
    'pricing.plan2.feature4': 'Trending ideas: Suggestions inspired by the latest trends to captivate your audience.',
    'pricing.plan2.feature5': 'Analysis & optimization: Performance monitoring and real-time adjustments for concrete results.',
    'pricing.plan2.feature6': 'Free diagnostic',
    
    'pricing.plan3.title': 'Sales Boost',
    'pricing.plan3.price': '790$',
    'pricing.plan3.feature1': 'Transform your sales with our AI lead generation solution!',
    'pricing.plan3.feature2': 'Lead Generation: Attract qualified prospects with advanced strategies.',
    'pricing.plan3.feature3': 'Automated Nurturing: Engage your leads with personalized sequences.',
    'pricing.plan3.feature4': 'Complete Automation: Let our system manage the entire process while you focus on conversion.',
    'pricing.plan3.feature5': 'Real-Time Reports: Analyze your performance and adjust your strategies instantly.',
    'pricing.plan3.feature6': 'Included tools:',
    'pricing.plan3.feature7': 'CRM: Seamless integration for simplified management.',
    'pricing.plan3.feature8': 'Mobile App: Access your data wherever you are.',
    'pricing.plan3.feature9': 'AI Voice Agent: Manage your incoming and outgoing calls with AI.',
    'pricing.plan3.feature10': 'AI-Boosted Email/SMS Campaigns',
    'pricing.plan3.feature11': 'Automatic Creation: Engaging campaigns optimized by AI.',
    'pricing.plan3.feature12': 'Precise Segmentation: Target your prospects effectively.',
    'pricing.plan3.feature13': 'A/B Testing: Test and improve your messages.',
    'pricing.plan3.feature14': 'Intelligent Sending: Maximize impact with optimized schedules.',
    
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
    
    // Chat Widget
    'chat.title': 'Chat with us',
    'chat.openChat': 'Open chat',
    'chat.inputPlaceholder': 'Type your message here...',
    'chat.emailInputPlaceholder': 'Enter your email address...',
    'chat.welcomeMessage': 'Hello! 👋 Welcome to BoostExportsAI. How can I help you today?',
    'chat.greeting': 'Hello! I\'m here to help with any questions about our export solutions. How can I assist you?',
    'chat.pricingInfo': 'We offer three packages: Website Boost at $190, Digital Marketing Boost at $290, and Sales Boost at $790. Each includes different features to help grow your exports. Would you like specific details about any of these packages?',
    'chat.exportInfo': 'We specialize in helping businesses expand to international markets with AI tools. Our solutions help you identify opportunities, automate marketing, and generate quality leads in foreign markets. Would you like me to tell you more about a specific aspect?',
    'chat.contactInfo': 'You can reach us at contact@boostexportsai.com or +212 0678 63 63 02. Alternatively, you can fill out the contact form on our website and our team will get back to you as soon as possible.',
    'chat.websiteInfo': 'We offer a free professional website as part of our Website Boost package. This includes SEO optimization, multilingual support, and 24/7 AI chatbots to engage with your customers.',
    'chat.aiInfo': 'Our AI solutions help analyze target markets, automate marketing processes, generate leads, and maintain customer relationships. We use AI to help you expand internationally with less effort and better results.',
    'chat.defaultResponse': 'I appreciate your question. For this specific inquiry, it would be best to speak with our export specialists. Would you like to book a demo or have someone from our team contact you?',
    'chat.askForEmail': 'Would you like me to send you a transcript of our conversation? Please enter your email address.',
    'chat.invalidEmail': 'It seems like the email address you provided is not valid. Please enter a valid email address.',
    'chat.emailThanks': 'Thank you! I\'ll send you the transcript of our conversation to this email address. If you have any other questions, feel free to ask!',
    'chat.sendingTranscript': 'I\'ll send the transcript to your email address right away.',
    'chat.conversationTranscript': 'Conversation Transcript',
    'chat.conversationSubject': 'Your conversation with BoostExportsAI',
    'chat.emailSentTitle': 'Email Sent',
    'chat.emailSentDescription': 'The conversation transcript has been sent to your email address.',
    'chat.emailErrorTitle': 'Email Error',
    'chat.emailErrorDescription': 'There was an error sending the email. Please try again later.',
    'chat.user': 'You',
    'chat.bot': 'BoostExportsAI',
    
    // New business-oriented chat translations
    'chat.businessGreeting': 'Hello! Welcome to BoostExportsAI. We specialize in helping businesses like yours expand internationally with our AI-powered export solutions. How can I assist you today?',
    'chat.businessPricing': 'Our pricing is tailored to your specific business needs. We offer flexible packages starting from $99/month that include market analysis, partner matching, and regulatory guidance. Would you like to schedule a call with our team to discuss a customized solution for your business?',
    'chat.businessExport': 'At BoostExportsAI, we help businesses successfully expand into international markets by identifying prime export opportunities, connecting with reliable distributors, and navigating complex regulations. Our AI-powered platform has helped companies increase their export sales by an average of 35% in the first year. What specific markets are you interested in exploring?',
    'chat.businessProducts': 'We offer a comprehensive suite of export solutions including market opportunity analysis, partner matching, regulatory compliance assistance, and logistics optimization. Our AI platform continuously analyzes global trade data to identify the best opportunities for your products. Would you like to learn more about a specific service?',
    'chat.businessBenefits': 'By working with BoostExportsAI, you\'ll benefit from reduced market entry risks, faster international expansion, data-driven decision making, and access to our network of verified global partners. Our clients typically see ROI within 6 months of implementation. Would you like to see some case studies relevant to your industry?',
    'chat.businessContact': 'You can reach our team at contact@boostexportsai.com or schedule a personalized consultation through our website. Our export specialists are available to answer any specific questions about your international expansion plans. Would you prefer that I arrange for one of our experts to contact you directly?',
    'chat.businessWebsite': 'Our website features detailed information about our services, client success stories, and resources to help with your export journey. Is there a specific aspect of international trade you\'re looking to learn more about that I can direct you to?',
    'chat.businessAi': 'Our proprietary AI technology analyzes millions of data points from global trade databases, market trends, and regulatory requirements to provide you with actionable insights for your export strategy. This means less research time for you and more confidence in your international business decisions. Would you like to see how our AI could help identify opportunities for your specific products?',
    'chat.businessDefault': 'I appreciate your question. To provide you with the most relevant information, could you tell me more about your business and your international expansion goals? This will help us tailor our solutions to your specific needs.',
    'chat.businessGoodbye': 'Thank you for chatting with BoostExportsAI today. If you have any more questions about international expansion, don\'t hesitate to reach out. We\'re here to help your business succeed globally!',
    'chat.offerAppointment': 'It seems like you might have some specific questions that would be better addressed in a personal consultation. Would you like to schedule a 15-minute call with one of our export specialists? They can provide tailored advice for your business situation at no obligation.',
    
    // Calendar booking translations
    'calendar.askName': 'Great! I\'ll help you book an appointment. First, what\'s your full name?',
    'calendar.askEmail': 'Thank you. Now, please provide your email address so we can send you a confirmation.',
    'calendar.askDate': 'What date would you like to schedule your appointment? (Please use format MM/DD/YYYY)',
    'calendar.askTime': 'What time would work best for you? (Please use format HH:MM, for example 14:30)',
    'calendar.askPurpose': 'What is the purpose of this appointment?',
    'calendar.bookingCancelled': 'Booking process cancelled. Is there anything else I can help you with?',
    'calendar.invalidEmail': 'That doesn\'t look like a valid email address. Please try again.',
    'calendar.invalidDate': 'I couldn\'t understand that date format. Please use MM/DD/YYYY format.',
    'calendar.invalidTime': 'I couldn\'t understand that time format. Please use HH:MM format (e.g., 14:30).',
    'calendar.bookingError': 'There was an error with your booking. Please try again.',
    'calendar.bookingConfirmation': 'Thank you! Your appointment has been scheduled for {date} at {time}. We\'ve sent the details to our team who will confirm shortly.',
    'calendar.bookingRequestSubject': 'Calendar Booking Request',
    'calendar.bookingRequestDetails': 'Booking Request Details',
    'calendar.bookingName': 'Name',
    'calendar.bookingEmail': 'Email',
    'calendar.bookingDate': 'Date',
    'calendar.bookingTime': 'Time',
    'calendar.bookingPurpose': 'Purpose',
    'calendar.addToCalendarMessage': 'Please add this appointment to the calendar:',
  },
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.services': 'Solutions',
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
    'hero.users': 'Solution IA déjà utilisée par des entreprises dans',
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
    'whyUs.feature1.title': 'Site Web Professionnel',
    'whyUs.feature1.description': 'Recevez un site web professionnel optimisé pour le SEO, totalement gratuit.',
    'whyUs.feature2.title': 'Crédit Google Ads',
    'whyUs.feature2.description': 'Bénéficiez de 20$ par mois de crédit pour vos campagnes Google Ads.',
    'whyUs.feature3.title': 'Diagnostic',
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
    
    // Chat Widget
    'chat.title': 'Discuter avec nous',
    'chat.openChat': 'Ouvrir le chat',
    'chat.inputPlaceholder': 'Écrivez votre message ici...',
    'chat.emailInputPlaceholder': 'Entrez votre adresse email...',
    'chat.welcomeMessage': 'Bonjour ! 👋 Bienvenue chez BoostExportsAI. Comment puis-je vous aider aujourd\'hui ?',
    'chat.greeting': 'Bonjour ! Je suis là pour répondre à vos questions sur nos solutions d\'exportation. Comment puis-je vous aider ?',
    'chat.pricingInfo': 'Nous proposons trois forfaits : Boost Site Web à 190$, Boost Marketing Digital à 290$ et Boost Ventes à 790$. Chacun comprend différentes fonctionnalités pour développer vos exportations. Souhaitez-vous des détails spécifiques sur l\'un de ces forfaits ?',
    'chat.exportInfo': 'Nous sommes spécialisés dans l\'aide aux entreprises pour se développer sur les marchés internationaux avec des outils d\'IA. Nos solutions vous aident à identifier les opportunités, automatiser le marketing et générer des leads qualifiés sur les marchés étrangers. Voulez-vous en savoir plus sur un aspect spécifique ?',
    'chat.contactInfo': 'Vous pouvez nous joindre à contact@boostexportsai.com ou au +212 0678 63 63 02. Vous pouvez également remplir le formulaire de contact sur notre site web et notre équipe vous répondra dans les plus brefs délais.',
    'chat.websiteInfo': 'Nous offrons un site web professionnel gratuit dans le cadre de notre forfait Boost Site Web. Cela comprend l\'optimisation SEO, le support multilingue et des chatbots IA disponibles 24/7 pour interagir avec vos clients.',
    'chat.aiInfo': 'Nos solutions d\'IA aident à analyser les marchés cibles, automatiser les processus marketing, générer des leads et entretenir les relations clients. Nous utilisons l\'IA pour vous aider à vous développer à l\'international avec moins d\'effort et de meilleurs résultats.',
    'chat.defaultResponse': 'J\'apprécie votre question. Pour cette demande spécifique, il serait préférable de parler à nos spécialistes en exportation. Souhaitez-vous réserver une démo ou qu\'un membre de notre équipe vous contacte ?',
    'chat.askForEmail': 'Souhaitez-vous que je vous envoie une transcription de notre conversation ? Veuillez entrer votre adresse email.',
    'chat.invalidEmail': 'Cela ne ressemble pas à une adresse e-mail valide. Veuillez réessayer avec une adresse email valide.',
    'chat.emailThanks': 'Merci ! Je vais vous envoyer la transcription de notre conversation à cette adresse email. Si vous avez d\'autres questions, n\'hésitez pas à demander !',
    'chat.sendingTranscript': 'Je vais envoyer la transcription à votre adresse email tout de suite.',
    'chat.conversationTranscript': 'Transcription de la Conversation',
    'chat.conversationSubject': 'Votre conversation avec BoostExportsAI',
    'chat.emailSentTitle': 'Email Envoyé',
    'chat.emailSentDescription': 'La transcription de la conversation a été envoyée à votre adresse email.',
    'chat.emailErrorTitle': 'Erreur d\'Email',
    'chat.emailErrorDescription': 'Une erreur s\'est produite lors de l\'envoi de l\'email. Veuillez réessayer plus tard.',
    'chat.user': 'Vous',
    'chat.bot': 'BoostExportsAI',
    
    // New business-oriented chat translations
    'chat.businessGreeting': 'Bonjour ! Bienvenue chez BoostExportsAI. Nous sommes spécialisés dans l\'aide aux entreprises comme la vôtre à se développer à l\'international grâce à nos solutions d\'exportation alimentées par l\'IA. Comment puis-je vous aider aujourd\'hui ?',
    'chat.businessPricing': 'Nos tarifs sont adaptés aux besoins spécifiques de votre entreprise. Nous proposons des forfaits flexibles à partir de 99$/mois qui incluent l\'analyse de marché, la mise en relation avec des partenaires et des conseils réglementaires. Souhaitez-vous planifier un appel avec notre équipe pour discuter d\'une solution personnalisée pour votre entreprise ?',
    'chat.businessExport': 'Chez BoostExportsAI, nous aidons les entreprises à s\'étendre avec succès sur les marchés internationaux en identifiant les meilleures opportunités d\'exportation, en les connectant avec des distributeurs fiables et en navigant à travers les réglementations complexes. Notre plateforme alimentée par l\'IA a aidé des entreprises à augmenter leurs ventes à l\'exportation de 35% en moyenne dès la première année. Quels marchés spécifiques souhaitez-vous explorer ?',
    'chat.businessProducts': 'Nous offrons une suite complète de solutions d\'exportation comprenant l\'analyse des opportunités de marché, la mise en relation avec des partenaires, l\'assistance à la conformité réglementaire et l\'optimisation logistique. Notre plateforme IA analyse en continu les données du commerce mondial pour identifier les meilleures opportunités pour vos produits. Souhaitez-vous en savoir plus sur un service spécifique ?',
    'chat.businessBenefits': 'En travaillant avec BoostExportsAI, vous bénéficierez d\'une réduction des risques d\'entrée sur le marché, d\'une expansion internationale plus rapide, d\'une prise de décision basée sur les données et d\'un accès à notre réseau de partenaires mondiaux vérifiés. Nos clients constatent généralement un retour sur investissement dans les 6 mois suivant la mise en œuvre. Souhaitez-vous voir des études de cas pertinentes pour votre secteur ?',
    'chat.businessContact': 'Vous pouvez contacter notre équipe à contact@boostexportsai.com ou planifier une consultation personnalisée via notre site web. Nos spécialistes de l\'exportation sont disponibles pour répondre à toutes vos questions spécifiques concernant vos plans d\'expansion internationale. Préférez-vous que je demande à l\'un de nos experts de vous contacter directement ?',
    'chat.businessWebsite': 'Notre site web présente des informations détaillées sur nos services, des témoignages de clients et des ressources pour vous aider dans votre parcours d\'exportation. Y a-t-il un aspect spécifique du commerce international sur lequel vous souhaitez en savoir plus et que je peux vous indiquer ?',
    'chat.businessAi': 'Notre technologie IA propriétaire analyse des millions de points de données provenant de bases de données commerciales mondiales, de tendances du marché et d\'exigences réglementaires pour vous fournir des informations exploitables pour votre stratégie d\'exportation. Cela signifie moins de temps de recherche pour vous et plus de confiance dans vos décisions commerciales internationales. Souhaitez-vous voir comment notre IA pourrait vous aider à identifier des opportunités pour vos produits spécifiques ?',
    'chat.businessDefault': 'J\'apprécie votre question. Pour vous fournir les informations les plus pertinentes, pourriez-vous m\'en dire plus sur votre entreprise et vos objectifs d\'expansion internationale ? Cela nous aidera à adapter nos solutions à vos besoins spécifiques.',
    'chat.businessGoodbye': 'Merci d\'avoir discuté avec BoostExportsAI aujourd\'hui. Si vous avez d\'autres questions sur l\'expansion internationale, n\'hésitez pas à nous contacter. Nous sommes là pour aider votre entreprise à réussir à l\'échelle mondiale !',
    'chat.offerAppointment': 'Il semble que vous ayez des questions spécifiques qui seraient mieux traitées lors d\'une consultation personnelle. Souhaitez-vous planifier un appel de 15 minutes avec l\'un de nos spécialistes de l\'exportation ? Ils peuvent vous fournir des conseils adaptés à la situation de votre entreprise, sans aucune obligation.',
    
    // Calendar booking translations
    'calendar.askName': 'Parfait ! Je vais vous aider à prendre rendez-vous. Tout d\'abord, quel est votre nom complet ?',
    'calendar.askEmail': 'Merci. Maintenant, veuillez fournir votre adresse e-mail afin que nous puissions vous envoyer une confirmation.',
    'calendar.askDate': 'Quelle date souhaitez-vous pour votre rendez-vous ? (Veuillez utiliser le format JJ/MM/AAAA)',
    'calendar.askTime': 'Quelle heure vous conviendrait le mieux ? (Veuillez utiliser le format HH:MM, par exemple 14:30)',
    'calendar.askPurpose': 'Quel est l\'objet de ce rendez-vous ?',
    'calendar.bookingCancelled': 'Processus de réservation annulé. Is there anything else I can help you with?',
    'calendar.invalidEmail': 'Cela ne ressemble pas à une adresse e-mail valide. Veuillez réessayer.',
    'calendar.invalidDate': 'Je n\'ai pas pu comprendre ce format de date. Veuillez utiliser le format JJ/MM/AAAA.',
    'calendar.invalidTime': 'Je n\'ai pas pu comprendre ce format d\'heure. Veuillez utiliser le format HH:MM (par exemple, 14:30).',
    'calendar.bookingError': 'Une erreur s\'est produite lors de votre réservation. Veuillez réessayer.',
    'calendar.bookingConfirmation': 'Merci ! Votre rendez-vous a été programmé pour le {date} à {time}. Nous avons envoyé les détails à notre équipe qui vous confirmera rapidement.',
    'calendar.bookingRequestSubject': 'Demande de Rendez-vous Calendrier',
    'calendar.bookingRequestDetails': 'Détails de la Demande de Rendez-vous',
    'calendar.bookingName': 'Nom',
    'calendar.bookingEmail': 'Email',
    'calendar.bookingDate': 'Date',
    'calendar.bookingTime': 'Heure',
    'calendar.bookingPurpose': 'Objet',
    'calendar.addToCalendarMessage': 'Veuillez ajouter ce rendez-vous au calendrier :',
  }
};

export function LanguageProvider({ children, initialLanguage = 'en' }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  
  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
