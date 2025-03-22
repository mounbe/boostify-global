
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Send, X, Loader2, MinusCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import ChatBubble from './ChatBubble';
import { sendEmailNotification } from '@/utils/emailService';
import { useToast } from '@/hooks/use-toast';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const ChatWidget = () => {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [askingForEmail, setAskingForEmail] = useState(false);
  const [waitingForEmail, setWaitingForEmail] = useState(false);
  const [chatId, setChatId] = useState(`chat-${Date.now()}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Add welcome message when chat is first opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage = {
        id: 'welcome',
        content: t('chat.welcomeMessage'),
        sender: 'bot' as const,
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length, t]);

  // Auto-scroll to the bottom of messages
  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Focus input when chat is opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Send chat transcript when conversation changes
  useEffect(() => {
    // Only send if there are multiple messages (more than just welcome)
    if (messages.length > 1) {
      sendChatConversation('contact@boostexportsai.com');
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    // Generate a new chat ID whenever the chat is opened
    if (!isOpen) {
      setChatId(`chat-${Date.now()}`);
    }
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!input.trim()) return;

    // If we're waiting for an email address
    if (waitingForEmail) {
      const emailInput = input.trim();
      
      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(emailInput)) {
        setUserEmail(emailInput);
        setWaitingForEmail(false);
        
        // Add user's email to chat
        const userEmailMessage: Message = {
          id: Date.now().toString(),
          content: emailInput,
          sender: 'user',
          timestamp: new Date(),
        };
        
        setMessages(prev => [...prev, userEmailMessage]);
        setInput('');
        
        // Respond that we'll send the conversation
        setTimeout(() => {
          const thankYouMessage: Message = {
            id: Date.now().toString(),
            content: t('chat.emailThanks'),
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages(prev => [...prev, thankYouMessage]);
          
          // Send the conversation via email to both the user and admin
          sendChatConversation(emailInput);
        }, 500);
        
        return;
      } else {
        // Invalid email format
        const invalidEmailMessage: Message = {
          id: Date.now().toString(),
          content: input,
          sender: 'user',
          timestamp: new Date(),
        };
        
        const emailErrorMessage: Message = {
          id: Date.now().toString() + '-error',
          content: t('chat.invalidEmail'),
          sender: 'bot',
          timestamp: new Date(),
        };
        
        setMessages(prev => [...prev, invalidEmailMessage, emailErrorMessage]);
        setInput('');
        return;
      }
    }

    // Add user message to chat
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulated bot response - in a real implementation, this would call an API
    setTimeout(() => {
      handleBotResponse(input);
      setIsLoading(false);
      
      // After a few messages, ask if they want to send the conversation by email
      if (messages.length >= 4 && !askingForEmail && !userEmail) {
        setTimeout(() => {
          askForEmail();
        }, 1000);
      }
    }, 1000);
  };

  const askForEmail = () => {
    setAskingForEmail(true);
    const emailRequestMessage: Message = {
      id: 'email-request',
      content: t('chat.askForEmail'),
      sender: 'bot',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, emailRequestMessage]);
    setWaitingForEmail(true);
  };

  const sendChatConversation = async (email: string) => {
    try {
      // Format conversation for email
      const formattedConversation = messages.map(msg => {
        const role = msg.sender === 'user' ? t('chat.user') : t('chat.bot');
        const time = msg.timestamp.toLocaleTimeString();
        return `${role} (${time}): ${msg.content}`;
      }).join('\n\n');
      
      // Add the latest message if available
      const conversationText = `
        ${t('chat.conversationTranscript')}:
        
        ${formattedConversation}
      `;
      
      // Send email using the existing email service
      const emailData = {
        type: 'chat',
        email: email,
        subject: `${t('chat.conversationSubject')} - ${chatId}`,
        message: conversationText,
        section: 'Chat Widget',
        buttonName: 'Chat Conversation',
      };
      
      await sendEmailNotification(emailData as any);
      
      // Only show toast if the email is for the user
      if (email !== 'contact@boostexportsai.com') {
        toast({
          title: t('chat.emailSentTitle'),
          description: t('chat.emailSentDescription'),
        });
      }
    } catch (error) {
      console.error('Failed to send chat conversation:', error);
      
      // Only show error toast if the email is for the user
      if (email !== 'contact@boostexportsai.com') {
        toast({
          title: t('chat.emailErrorTitle'),
          description: t('chat.emailErrorDescription'),
          variant: 'destructive',
        });
      }
    }
  };

  const handleBotResponse = (userInput: string) => {
    // Simple predefined responses based on user input - in a real implementation, 
    // this would use an AI service like OpenAI, Perplexity, or similar
    let botResponse = '';
    const lowercaseInput = userInput.toLowerCase();

    if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi') || 
        lowercaseInput.includes('bonjour') || lowercaseInput.includes('salut')) {
      botResponse = t('chat.greeting');
    } else if (lowercaseInput.includes('price') || lowercaseInput.includes('pricing') || 
               lowercaseInput.includes('prix') || lowercaseInput.includes('tarif')) {
      botResponse = t('chat.pricingInfo');
    } else if (lowercaseInput.includes('export') || lowercaseInput.includes('international') || 
               lowercaseInput.includes('market') || lowercaseInput.includes('marché')) {
      botResponse = t('chat.exportInfo');
    } else if (lowercaseInput.includes('contact') || lowercaseInput.includes('email') || 
               lowercaseInput.includes('phone') || lowercaseInput.includes('téléphone')) {
      botResponse = t('chat.contactInfo');
    } else if (lowercaseInput.includes('website') || lowercaseInput.includes('site web') || 
               lowercaseInput.includes('site internet')) {
      botResponse = t('chat.websiteInfo');
    } else if (lowercaseInput.includes('ai') || lowercaseInput.includes('artificial intelligence') || 
               lowercaseInput.includes('intelligence artificielle')) {
      botResponse = t('chat.aiInfo');
    } else if (lowercaseInput.includes('transcript') || lowercaseInput.includes('send') || 
               lowercaseInput.includes('email') || lowercaseInput.includes('envoyer') ||
               lowercaseInput.includes('transcription')) {
      if (!userEmail) {
        askForEmail();
        return;
      } else {
        botResponse = t('chat.sendingTranscript');
        setTimeout(() => {
          sendChatConversation(userEmail);
        }, 500);
      }
    } else {
      botResponse = t('chat.defaultResponse');
    }

    const botMessage: Message = {
      id: Date.now().toString(),
      content: botResponse,
      sender: 'bot',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, botMessage]);
  };

  if (!isOpen) {
    return <ChatBubble onClick={toggleChat} />;
  }

  return (
    <Card className="fixed bottom-20 right-4 md:bottom-24 md:right-6 w-80 md:w-96 z-50 shadow-lg border-none rounded-2xl overflow-hidden flex flex-col">
      <CardHeader className="p-4 bg-emerald-600 text-white flex-row justify-between items-center">
        <CardTitle className="text-lg font-bold flex items-center">
          <MessageCircle className="h-5 w-5 mr-2" />
          {t('chat.title')}
        </CardTitle>
        <div className="flex gap-2">
          <MinusCircle className="h-5 w-5 cursor-pointer hover:opacity-80" onClick={toggleChat} />
          <X className="h-5 w-5 cursor-pointer hover:opacity-80" onClick={() => setIsOpen(false)} />
        </div>
      </CardHeader>
      <CardContent className="p-0 overflow-auto max-h-80 min-h-[320px] bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-xl ${
                  message.sender === 'user'
                    ? 'bg-emerald-600 text-white rounded-tr-none'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-tl-none'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] p-3 rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-tl-none">
                <Loader2 className="h-5 w-5 animate-spin" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </CardContent>
      <CardFooter className="p-2">
        <form onSubmit={handleSendMessage} className="flex w-full gap-2">
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={waitingForEmail ? t('chat.emailInputPlaceholder') : t('chat.inputPlaceholder')}
            className="flex-grow"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            size="icon" 
            disabled={isLoading || !input.trim()}
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
};

export default ChatWidget;
