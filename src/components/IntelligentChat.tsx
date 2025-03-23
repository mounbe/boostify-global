
import React, { useState, useEffect, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, XCircle, Bot, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from '@/context/LanguageContext';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

const IntelligentChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const { language, t } = useLanguage();
  
  useEffect(() => {
    // Scroll to the bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    // Show welcome message when chat is opened and no messages exist
    if (isOpen && messages.length === 0) {
      const welcomeMessage = {
        id: generateId(),
        sender: 'bot' as const,
        text: language === 'fr' ? 
          'Bonjour ! Je suis l\'assistant BoostExportsAI, comment puis-je vous aider avec vos besoins d\'exportation aujourd\'hui ?' : 
          'Hello! I\'m the BoostExportsAI assistant, how can I help with your export needs today?',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length, language]);

  const generateId = (): string => {
    return Math.random().toString(36).substring(2, 11);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage = {
      id: generateId(),
      sender: 'user' as const,
      text: inputValue,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Process and generate response with a slight delay to simulate thinking
    setTimeout(() => {
      const response = generateResponse(inputValue);
      const botMessage = {
        id: generateId(),
        sender: 'bot' as const,
        text: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const generateResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Enhanced response logic based on website content
    if (input.includes('bonjour') || input.includes('salut') || input.includes('hello') || input.includes('hi')) {
      return language === 'fr' ? 
        'Bonjour ! Je suis l\'assistant BoostExportsAI. Comment puis-je vous aider à développer vos exportations aujourd\'hui ?' : 
        'Hello! I\'m the BoostExportsAI assistant. How can I help you grow your exports today?';
    }
    
    if (input.includes('services') || input.includes('offre') || input.includes('solution') || input.includes('produit') || input.includes('product')) {
      return language === 'fr' ? 
        'BoostExportsAI propose trois principales solutions basées sur l\'IA pour les exportateurs: 1) IA pour votre site web - amélioration multilingue, 2) IA pour le marketing - automatisation des campagnes internationales, et 3) IA pour les ventes - qualification des leads et suivi clients. Quelle solution vous intéresse le plus ?' : 
        'BoostExportsAI offers three main AI-based solutions for exporters: 1) AI for your website - multilingual enhancement, 2) AI for marketing - international campaign automation, and 3) AI for sales - lead qualification and customer follow-up. Which solution interests you the most?';
    }
    
    if (input.includes('prix') || input.includes('tarif') || input.includes('cost') || input.includes('price') || input.includes('pricing')) {
      return language === 'fr' ? 
        'Nous proposons plusieurs formules tarifaires adaptées aux besoins des exportateurs. Notre forfait Essentiel commence à 199€/mois, notre forfait Pro à 499€/mois, et notre forfait Enterprise est personnalisé. Chaque forfait inclut différents niveaux d\'automatisation et d\'assistance. Vous pouvez consulter la page Tarification pour plus de détails ou réserver une démo pour une offre personnalisée.' : 
        'We offer several pricing plans tailored to exporters\' needs. Our Essential plan starts at €199/month, our Pro plan at €499/month, and our Enterprise plan is customized. Each plan includes different levels of automation and support. You can check the Pricing page for more details or book a demo for a custom quote.';
    }
    
    if (input.includes('demo') || input.includes('démo') || input.includes('démonstration') || input.includes('presentation')) {
      return language === 'fr' ? 
        'Vous pouvez réserver une démonstration personnalisée de nos solutions en cliquant sur le bouton "Réserver une démo" dans l\'en-tête ou sur notre page de tarification. Notre équipe vous contactera rapidement pour organiser une session qui répond à vos besoins spécifiques d\'exportation.' : 
        'You can book a personalized demonstration of our solutions by clicking the "Book a demo" button in the header or on our pricing page. Our team will contact you shortly to arrange a session that addresses your specific export needs.';
    }
    
    if (input.includes('marché') || input.includes('market') || input.includes('pays') || input.includes('country') || input.includes('region')) {
      return language === 'fr' ? 
        'BoostExportsAI aide les exportateurs africains à pénétrer quatre marchés principaux: l\'Afrique, l\'Asie, l\'Amérique et l\'Europe. Notre technologie a été éprouvée dans plus de 50 pays et prend en charge plus de 7 langues pour faciliter votre expansion internationale.' : 
        'BoostExportsAI helps African exporters penetrate four main markets: Africa, Asia, America, and Europe. Our technology has been proven in over 50 countries and supports more than 7 languages to facilitate your international expansion.';
    }
    
    if (input.includes('comment ça marche') || input.includes('fonctionnement') || input.includes('how it works') || input.includes('process')) {
      return language === 'fr' ? 
        'Notre processus se déroule en trois étapes principales: 1) Nous accélérons vos exportations en augmentant votre visibilité sur de nouveaux marchés, 2) Nous automatisons vos processus marketing et ventes pour optimiser vos ressources, et 3) Nous renforçons votre image de marque à l\'international. Vous pouvez consulter la section "Comment ça marche" sur notre site pour plus de détails.' : 
        'Our process unfolds in three main steps: 1) We accelerate your exports by increasing your visibility in new markets, 2) We automate your marketing and sales processes to optimize your resources, and 3) We strengthen your brand image internationally. You can check the "How It Works" section on our site for more details.';
    }
    
    if (input.includes('avantage') || input.includes('pourquoi') || input.includes('bénéfice') || input.includes('benefit') || input.includes('why')) {
      return language === 'fr' ? 
        'Les avantages de BoostExportsAI incluent: une augmentation moyenne des exportations de 30%, une réduction des coûts d\'acquisition client de 40%, une présence multilingue optimisée, et un accompagnement personnalisé par des experts en exportation. Notre technologie a déjà aidé des entreprises dans plus de 50 pays à développer leur présence internationale.' : 
        'The benefits of BoostExportsAI include: an average 30% increase in exports, a 40% reduction in customer acquisition costs, optimized multilingual presence, and personalized support from export experts. Our technology has already helped businesses in over 50 countries develop their international presence.';
    }
    
    if (input.includes('contact') || input.includes('joindre') || input.includes('reach') || input.includes('parler') || input.includes('speak')) {
      return language === 'fr' ? 
        'Vous pouvez nous contacter par email à contact@boostexportsai.com, utiliser le formulaire de contact sur notre site web, ou nous joindre par téléphone au +33 1 23 45 67 89. Notre équipe d\'experts en exportation se fera un plaisir de répondre à toutes vos questions.' : 
        'You can contact us by email at contact@boostexportsai.com, use the contact form on our website, or reach us by phone at +33 1 23 45 67 89. Our team of export experts will be happy to answer all your questions.';
    }
    
    if (input.includes('language') || input.includes('langue') || input.includes('support') || input.includes('multilingual')) {
      return language === 'fr' ? 
        'BoostExportsAI prend en charge plus de 7 langues, facilitant votre communication avec des clients internationaux. Nos solutions incluent la traduction automatique de haute qualité, l\'adaptation culturelle du contenu, et l\'optimisation SEO multilingue pour maximiser votre visibilité sur les marchés étrangers.' : 
        'BoostExportsAI supports more than 7 languages, facilitating your communication with international customers. Our solutions include high-quality automatic translation, cultural content adaptation, and multilingual SEO optimization to maximize your visibility in foreign markets.';
    }
    
    if (input.includes('merci') || input.includes('thank')) {
      return language === 'fr' ? 
        'De rien ! C\'est un plaisir de vous aider dans votre parcours d\'exportation. Y a-t-il autre chose que je puisse faire pour vous concernant nos solutions d\'IA pour l\'exportation ?' : 
        'You\'re welcome! It\'s a pleasure to assist you in your export journey. Is there anything else I can help you with regarding our AI solutions for exporting?';
    }
    
    if (input.includes('au revoir') || input.includes('bye')) {
      return language === 'fr' ? 
        'Au revoir ! N\'hésitez pas à revenir si vous avez d\'autres questions sur BoostExportsAI ou nos solutions pour développer vos exportations. Bonne journée !' : 
        'Goodbye! Feel free to come back if you have any more questions about BoostExportsAI or our solutions to grow your exports. Have a great day!';
    }
    
    // Default response
    return language === 'fr' ? 
      'Merci pour votre message. En tant qu\'assistant BoostExportsAI, je peux vous renseigner sur nos solutions d\'IA pour augmenter vos exportations, automatiser votre marketing international et renforcer votre présence globale. Que souhaitez-vous savoir spécifiquement sur nos services pour les exportateurs ?' : 
      'Thank you for your message. As the BoostExportsAI assistant, I can inform you about our AI solutions to increase your exports, automate your international marketing, and strengthen your global presence. What would you like to know specifically about our services for exporters?';
  };

  const formatTimestamp = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat toggle button */}
      <button
        className="bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
        onClick={toggleChat}
        aria-label={isOpen ? 'Fermer le chat' : 'Ouvrir le chat'}
      >
        {isOpen ? <XCircle className="h-6 w-6" /> : <Avatar><AvatarImage src="/logo.png" alt="BoostExportsAI Chat" /><AvatarFallback>AI</AvatarFallback></Avatar>}
      </button>
      
      {/* Chat panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-background border rounded-lg shadow-xl flex flex-col overflow-hidden max-h-[70vh]">
          {/* Chat header */}
          <div className="p-3 border-b bg-primary/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/logo.png" alt="BoostExportsAI" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <h3 className="font-medium">
                {language === 'fr' ? 'Assistant BoostExportsAI' : 'BoostExportsAI Assistant'}
              </h3>
            </div>
            <button 
              onClick={toggleChat}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Fermer"
            >
              <XCircle className="h-5 w-5" />
            </button>
          </div>
          
          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className="flex gap-2 max-w-[85%]">
                  {message.sender === 'bot' && (
                    <div className="flex-shrink-0 mt-1">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/logo.png" alt="AI" />
                        <AvatarFallback><Bot className="h-4 w-4" /></AvatarFallback>
                      </Avatar>
                    </div>
                  )}
                  <div className="flex flex-col">
                    <div 
                      className={`rounded-lg p-3 ${
                        message.sender === 'user' 
                          ? 'bg-primary text-primary-foreground ml-auto' 
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {message.text}
                    </div>
                    <span className="text-xs text-muted-foreground mt-1">
                      {formatTimestamp(message.timestamp)}
                    </span>
                  </div>
                  {message.sender === 'user' && (
                    <div className="flex-shrink-0 mt-1">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback><User className="h-4 w-4" /></AvatarFallback>
                      </Avatar>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-2 max-w-[85%]">
                  <div className="flex-shrink-0 mt-1">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/logo.png" alt="AI" />
                      <AvatarFallback><Bot className="h-4 w-4" /></AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex flex-col">
                    <div className="rounded-lg p-3 bg-muted">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-current animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-current animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-current animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Auto-scroll target */}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat input */}
          <div className="p-3 border-t">
            <div className="flex gap-2">
              <Input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder={language === 'fr' ? 'Tapez votre message...' : 'Type your message...'}
                className="flex-1"
              />
              <Button 
                onClick={handleSendMessage}
                size="icon"
                disabled={inputValue.trim() === ''}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-2 text-xs text-center text-muted-foreground">
              {language === 'fr' ? 'Propulsé par BoostExportsAI' : 'Powered by BoostExportsAI'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntelligentChat;
