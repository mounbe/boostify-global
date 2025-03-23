
import { sendEmailNotification } from './emailService';

type CalendarBookingData = {
  name: string;
  email: string;
  date: string;
  time: string;
  purpose: string;
  calendarEmail: string;
};

export const sendCalendarBookingRequest = async (data: CalendarBookingData): Promise<boolean> => {
  try {
    const { name, email, date, time, purpose, calendarEmail } = data;
    
    const emailData = {
      type: 'calendar',
      email: 'contact@boostexportsai.com',
      subject: `Calendar Booking Request - ${name}`,
      message: `
Booking Request Details:

Name: ${name}
Email: ${email}
Date: ${date}
Time: ${time}
Purpose: ${purpose}

Please add this appointment to the calendar: ${calendarEmail}
      `,
      section: 'Chat Widget',
      buttonName: 'Calendar Booking',
    };
    
    const result = await sendEmailNotification(emailData as any);
    return result;
  } catch (error) {
    console.error('Failed to send calendar booking request:', error);
    return false;
  }
};
