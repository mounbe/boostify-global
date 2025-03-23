import React, { useState, useEffect, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, XCircle, Copy, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from '@/context/LanguageContext';
import { useCalendarBooking } from '@/hooks/useCalendarBooking';

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

interface ChatWidgetProps {
  initialMessages?: ChatMessage[];
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ initialMessages = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const chatBodyRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const { language, t } = useLanguage();
  const [consecutiveDefaultResponses, setConsecutiveDefaultResponses] = useState(0);
  const { isBookingMode, bookingStep, startBookingProcess, processBookingInput, cancelBooking } = useCalendarBooking();

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    // Greet the user when the chat widget is opened
    if (isOpen && messages.length === 0) {
      addMessage('bot', t('chat.greeting'));
    }
  }, [isOpen, t, messages.length]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const addMessage = (sender: 'user' | 'bot', text: string) => {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages(prevMessages => [...prevMessages, { sender, text, timestamp }]);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      addMessage('user', newMessage);
      handleBotResponse(newMessage);
      setNewMessage('');
    }
  };

  const sendTranscript = () => {
    const transcriptText = messages.map(msg => `${msg.sender.toUpperCase()}: ${msg.text} (${msg.timestamp})`).join('\n');
    
    // Create a mailto link
    const mailtoLink = `mailto:contact@boostexportsai.com?subject=Chat Transcript&body=${encodeURIComponent(transcriptText)}`;
    
    // Open the email client
    window.location.href = mailtoLink;
  };

  const handleBotResponse = (userInput: string) => {
    // Business-oriented chat logic based on website content
    let botResponse = '';
    const lowercaseInput = userInput.toLowerCase();
    let isDefaultResponse = false;
    
    // Check if user wants to book a calendar appointment
    if (
      lowercaseInput.includes('book') || lowercaseInput.includes('schedule') ||
      lowercaseInput.includes('appointment') || lowercaseInput.includes('call') ||
      lowercaseInput.includes('rendez-vous') || lowercaseInput.includes('appel') ||
      lowercaseInput.includes('réserver') || lowercaseInput.includes('planifier')
    ) {
      if (isBookingMode) {
        // Already in booking mode, so continue with the booking process
        botResponse = processBookingInput(userInput);
      } else {
        // Start the booking process
        botResponse = startBookingProcess();
      }
    } else if (lowercaseInput.includes('price') || lowercaseInput.includes('pricing') || 
               lowercaseInput.includes('prix') || lowercaseInput.includes('tarif') ||
               lowercaseInput.includes('coût') || lowercaseInput.includes('cost')) {
      botResponse = t('chat.websitePricing');
      setConsecutiveDefaultResponses(0);
    } else if (lowercaseInput.includes('export') || lowercaseInput.includes('international') || 
               lowercaseInput.includes('market') || lowercaseInput.includes('marché')) {
      botResponse = t('chat.websiteExport');
      setConsecutiveDefaultResponses(0);
    } else if (lowercaseInput.includes('product') || lowercaseInput.includes('produit') || 
               lowercaseInput.includes('service') || lowercaseInput.includes('offre') ||
               lowercaseInput.includes('offer')) {
      botResponse = t('chat.websiteProducts');
      setConsecutiveDefaultResponses(0);
    } else if (lowercaseInput.includes('benefit') || lowercaseInput.includes('avantage') || 
               lowercaseInput.includes('advantage') || lowercaseInput.includes('why') ||
               lowercaseInput.includes('pourquoi')) {
      botResponse = t('chat.websiteBenefits');
      setConsecutiveDefaultResponses(0);
    } else if (lowercaseInput.includes('contact') || lowercaseInput.includes('email') || 
               lowercaseInput.includes('phone') || lowercaseInput.includes('téléphone')) {
      botResponse = t('chat.websiteContact');
      setConsecutiveDefaultResponses(0);
    } else if (lowercaseInput.includes('website') || lowercaseInput.includes('site web') || 
               lowercaseInput.includes('site internet')) {
      botResponse = t('chat.websiteInfo');
      setConsecutiveDefaultResponses(0);
    } else if (lowercaseInput.includes('ai') || lowercaseInput.includes('artificial intelligence') || 
               lowercaseInput.includes('intelligence artificielle')) {
      botResponse = t('chat.websiteAi');
      setConsecutiveDefaultResponses(0);
    } else if (lowercaseInput.includes('solution') || lowercaseInput.includes('boost') || 
               lowercaseInput.includes('digital marketing') || lowercaseInput.includes('marketing digital')) {
      botResponse = t('chat.websiteSolutions');
      setConsecutiveDefaultResponses(0);
    } else if (lowercaseInput.includes('transcript') || lowercaseInput.includes('send') || 
               lowercaseInput.includes('email') || lowercaseInput.includes('envoyer') ||
               lowercaseInput.includes('courriel')) {
      // Handle transcript sending
      sendTranscript();
      botResponse = language === 'fr' 
        ? 'Merci ! La transcription a été envoyée à notre équipe.'
        : 'Thank you! The transcript has been sent to our team.';
      setConsecutiveDefaultResponses(0);
    } else if (isBookingMode) {
      // If we're in booking mode, process the booking
      botResponse = processBookingInput(userInput);
    } else if (lowercaseInput.includes('bye') || lowercaseInput.includes('au revoir') || 
               lowercaseInput.includes('goodbye') || lowercaseInput.includes('thanks') || 
               lowercaseInput.includes('merci')) {
      botResponse = t('chat.farewell');
      setConsecutiveDefaultResponses(0);
    } else {
      // Default response for unrecognized queries
      botResponse = t('chat.default');
      isDefaultResponse = true;
      setConsecutiveDefaultResponses(prev => prev + 1);
      
      // If consecutive default responses reach threshold (2), suggest scheduling
      if (consecutiveDefaultResponses >= 1) {
        botResponse = t('chat.defaultFollowUp');
      }
    }
    
    // Add response to chat
    addMessage('bot', botResponse);
    
    // If the user is about to leave (farewell) or we've given multiple default responses,
    // suggest scheduling an appointment (but only if we're not already in booking mode)
    if ((lowercaseInput.includes('bye') || lowercaseInput.includes('au revoir') || 
        lowercaseInput.includes('goodbye') || consecutiveDefaultResponses >= 2) && 
        !isBookingMode) {
      setTimeout(() => {
        const schedulingOffer = t('chat.schedulingOffer');
        addMessage('bot', schedulingOffer);
      }, 2000);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Open/Close Button */}
      <button
        className="bg-primary text-primary-foreground p-3 rounded-full shadow-md hover:bg-primary/80 transition-colors duration-300"
        onClick={toggleChat}
        aria-label={isOpen ? t('chat.closeChat') : t('chat.openChat')}
        title={isOpen ? t('chat.closeChat') : t('chat.openChat')}
      >
        {isOpen ? <XCircle className="h-6 w-6" /> : <Avatar><AvatarImage src="/logo.png" alt="BoostExportsAI Chat" /><AvatarFallback>AI</AvatarFallback></Avatar>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="w-96 bg-background border rounded-lg shadow-lg flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="border-b p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/logo.png" alt="BoostExportsAI" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold">{t('chat.title')}</h3>
            </div>
          </div>

          {/* Chat Body */}
          <div ref={chatBodyRef} className="p-4 overflow-y-auto flex-grow">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[75%] rounded-xl p-3 ${message.sender === 'user' ? 'bg-muted' : 'bg-primary/10'}`}>
                  {message.text}
                </div>
                <span className="text-xs text-muted-foreground mt-1">{message.timestamp}</span>
              </div>
            ))}
          </div>

          {/* Chat Footer */}
          <div className="m-2 p-4 border-t">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder={t('chat.messagePlaceholder')}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage();
                  }
                }}
              />
              <Button onClick={handleSendMessage} aria-label={t('chat.sendMessage')} title={t('chat.sendMessage')}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between mt-2">
              <Button variant="ghost" size="sm" onClick={sendTranscript} aria-label={t('chat.sendTranscript')} title={t('chat.sendTranscript')}>
                <Mail className="h-4 w-4 mr-2" />
                {t('chat.sendTranscript')}
              </Button>
              <span className="text-xs text-muted-foreground">{t('chat.poweredBy')}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
