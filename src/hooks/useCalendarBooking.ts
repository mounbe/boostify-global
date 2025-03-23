
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
  const { t } = useLanguage();

  const startBookingProcess = () => {
    setIsBookingMode(true);
    setBookingStep(1);
    setBookingData({});
    return t('calendar.askName');
  };

  const cancelBooking = () => {
    setIsBookingMode(false);
    setBookingStep(0);
    setBookingData({});
    return t('calendar.bookingCancelled');
  };

  const processBookingInput = (input: string): string => {
    if (input.toLowerCase().includes('cancel') || input.toLowerCase().includes('annuler')) {
      return cancelBooking();
    }

    switch (bookingStep) {
      case 1: // Name
        setBookingData({ ...bookingData, name: input.trim() });
        setBookingStep(2);
        return t('calendar.askEmail');
      
      case 2: // Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.trim())) {
          return t('calendar.invalidEmail');
        }
        setBookingData({ ...bookingData, email: input.trim() });
        setBookingStep(3);
        return t('calendar.askDate');
      
      case 3: // Date
        try {
          const date = parseDate(input.trim());
          setBookingData({ ...bookingData, date });
          setBookingStep(4);
          return t('calendar.askTime');
        } catch (error) {
          return t('calendar.invalidDate');
        }
      
      case 4: // Time
        const timeRegex = /^(0?[0-9]|1[0-9]|2[0-3])[:h][0-5][0-9]$/;
        if (!timeRegex.test(input.trim().replace(' ', ''))) {
          return t('calendar.invalidTime');
        }
        setBookingData({ ...bookingData, time: input.trim() });
        setBookingStep(5);
        return t('calendar.askPurpose');
      
      case 5: // Purpose of call
        setBookingData({ ...bookingData, purpose: input.trim() });
        setBookingStep(6);
        return submitBookingRequest();
      
      default:
        return t('calendar.bookingError');
    }
  };

  const parseDate = (dateString: string): Date => {
    // Support various date formats
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      throw new Error('Invalid date format');
    }
    return date;
  };

  const submitBookingRequest = (): string => {
    const { name, email, date, time, purpose } = bookingData as BookingRequest;
    
    // Format the date and time for display
    const formattedDate = date.toLocaleDateString();
    
    // Send calendar booking request via email
    sendEmailNotification({
      type: 'calendar',
      email: 'contact@boostexportsai.com',
      subject: t('calendar.bookingRequestSubject'),
      message: `
${t('calendar.bookingRequestDetails')}:

${t('calendar.bookingName')}: ${name}
${t('calendar.bookingEmail')}: ${email}
${t('calendar.bookingDate')}: ${formattedDate}
${t('calendar.bookingTime')}: ${time}
${t('calendar.bookingPurpose')}: ${purpose}

${t('calendar.addToCalendarMessage')} mounir@benproductions.ma
      `,
      section: 'Chat Widget',
      buttonName: 'Calendar Booking Request',
    });

    // Reset booking state
    setIsBookingMode(false);
    setBookingStep(0);
    
    // Return confirmation message - Fix error by removing the second argument and using string interpolation
    return t('calendar.bookingConfirmation').replace('{date}', formattedDate).replace('{time}', time);
  };

  return {
    isBookingMode,
    bookingStep,
    startBookingProcess,
    processBookingInput,
    cancelBooking
  };
};
