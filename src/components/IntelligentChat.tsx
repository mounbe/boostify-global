
import React, { useState, useEffect, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, XCircle, Robot, User } from "lucide-react";
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
          'Bonjour ! Comment puis-je vous aider aujourd\'hui ?' : 
          'Hello! How can I assist you today?',
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
    
    // Basic response logic - this will be enhanced based on your further instructions
    if (input.includes('bonjour') || input.includes('salut') || input.includes('hello') || input.includes('hi')) {
      return language === 'fr' ? 
        'Bonjour ! Comment puis-je vous aider aujourd\'hui ?' : 
        'Hello! How can I help you today?';
    }
    
    if (input.includes('merci') || input.includes('thank')) {
      return language === 'fr' ? 
        'De rien ! Y a-t-il autre chose que je puisse faire pour vous ?' : 
        'You\'re welcome! Is there anything else I can do for you?';
    }
    
    if (input.includes('au revoir') || input.includes('bye')) {
      return language === 'fr' ? 
        'Au revoir ! N\'hésitez pas à revenir si vous avez d\'autres questions.' : 
        'Goodbye! Feel free to come back if you have any more questions.';
    }
    
    if (input.includes('service') || input.includes('offre') || input.includes('produit') || input.includes('product')) {
      return language === 'fr' ? 
        'BoostExportsAI propose des solutions avancées d\'IA pour aider les entreprises à optimiser leurs stratégies d\'exportation et à s\'étendre sur les marchés internationaux.' : 
        'BoostExportsAI offers advanced AI solutions to help businesses optimize their export strategies and expand into international markets.';
    }
    
    if (input.includes('prix') || input.includes('cost') || input.includes('price')) {
      return language === 'fr' ? 
        'Nous proposons plusieurs formules tarifaires adaptées à différentes tailles d\'entreprises. Vous pouvez consulter notre page de tarification pour plus de détails ou nous contacter pour une offre personnalisée.' : 
        'We offer several pricing plans suited to different business sizes. You can check our pricing page for more details or contact us for a custom quote.';
    }
    
    if (input.includes('contact') || input.includes('joindre') || input.includes('reach')) {
      return language === 'fr' ? 
        'Vous pouvez nous contacter par email à contact@boostexportsai.com ou utiliser le formulaire de contact sur notre site web.' : 
        'You can contact us by email at contact@boostexportsai.com or use the contact form on our website.';
    }
    
    // Default response
    return language === 'fr' ? 
      'Merci pour votre message. Comment puis-je vous aider davantage à propos de BoostExportsAI et nos solutions d\'exportation basées sur l\'IA ?' : 
      'Thank you for your message. How can I further assist you regarding BoostExportsAI and our AI-based export solutions?';
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
                        <AvatarFallback><Robot className="h-4 w-4" /></AvatarFallback>
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
                      <AvatarFallback><Robot className="h-4 w-4" /></AvatarFallback>
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
