
import { useState } from 'react';
import { sendEmailNotification } from '@/utils/emailService';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/context/LanguageContext';

type BookingRequest = {
  name: string;
  email: string;
  date: Date;
  time: string;
  purpose: string;
};

export const useCalendarBooking = () => {
  const [isBookingMode, setIsBookingMode] = useState(false);
  const [bookingStep, setBookingStep] = useState(0);
  const [bookingData, setBookingData] = useState<Partial<BookingRequest>>({});
  const { toast } = useToast();
  const { t, language } = useLanguage();

  const startBookingProcess = () => {
    setIsBookingMode(true);
    setBookingStep(1);
    setBookingData({});
    return language === 'fr' 
      ? 'Parfait ! Pour réserver votre démo, j\'aurai besoin de quelques informations. Pour commencer, quel est votre nom complet ?'
      : 'Great! To book your demo, I\'ll need a few details. To start, what is your full name?';
  };

  const cancelBooking = () => {
    setIsBookingMode(false);
    setBookingStep(0);
    setBookingData({});
    return language === 'fr'
      ? 'Réservation annulée. Comment puis-je vous aider autrement ?'
      : 'Booking canceled. How else can I help you?';
  };

  const processBookingInput = (input: string): string => {
    if (!isBookingMode) return '';

    // Store the data based on the current step
    switch (bookingStep) {
      case 1: // Name
        setBookingData(prev => ({ ...prev, name: input }));
        setBookingStep(2);
        return language === 'fr'
          ? `Merci ${input}. Quelle est votre adresse email ?`
          : `Thanks ${input}. What is your email address?`;
      
      case 2: // Email
        // Simple email validation
        if (!input.includes('@') || !input.includes('.')) {
          return language === 'fr'
            ? 'Cet email ne semble pas valide. Veuillez réessayer.'
            : 'This email doesn\'t look valid. Please try again.';
        }
        
        setBookingData(prev => ({ ...prev, email: input }));
        setBookingStep(3);
        return language === 'fr'
          ? 'Parfait. Quel est l\'objet principal de votre demande de démo ? (ex: Marketing international, Site web multilingue, etc.)'
          : 'Great. What\'s the main purpose of your demo request? (e.g., International marketing, Multilingual website, etc.)';
      
      case 3: // Purpose
        setBookingData(prev => ({ ...prev, purpose: input }));
        setBookingStep(4);
        
        // Send the booking information via email
        const bookingInfo = {
          name: bookingData.name || '',
          email: bookingData.email || '',
          purpose: input,
          date: new Date()
        };
        
        try {
          sendEmailNotification({
            type: 'calendar',
            name: bookingInfo.name,
            email: bookingInfo.email,
            message: `Demo Request Purpose: ${bookingInfo.purpose}`,
            section: 'Calendar Booking',
            buttonName: 'Chat Demo Request'
          });
          
          toast({
            title: language === 'fr' ? 'Demande reçue' : 'Request received',
            description: language === 'fr'
              ? 'Nous vous contacterons bientôt pour planifier votre démo.'
              : 'We will contact you soon to schedule your demo.',
          });
          
          // Reset booking state
          setIsBookingMode(false);
          setBookingStep(0);
          setBookingData({});
          
          return language === 'fr'
            ? `Merci ! Notre équipe vous contactera bientôt à ${bookingData.email} pour programmer une démo personnalisée concernant ${input}. Avez-vous d'autres questions entre-temps ?`
            : `Thank you! Our team will contact you soon at ${bookingData.email} to schedule a personalized demo regarding ${input}. Do you have any other questions in the meantime?`;
        } catch (error) {
          console.error('Error sending booking email:', error);
          
          // Reset booking state
          setIsBookingMode(false);
          setBookingStep(0);
          
          return language === 'fr'
            ? 'Désolé, nous avons rencontré un problème lors de l\'envoi de votre demande. Veuillez utiliser le formulaire de contact ou réessayer plus tard.'
            : 'Sorry, we encountered an issue sending your request. Please use the contact form or try again later.';
        }
      
      default:
        return language === 'fr'
          ? 'Je ne comprends pas. Pouvez-vous reformuler ?'
          : 'I don\'t understand. Can you rephrase that?';
    }
  };

  return {
    isBookingMode,
    bookingStep,
    bookingData,
    startBookingProcess,
    processBookingInput,
    cancelBooking
  };
};
