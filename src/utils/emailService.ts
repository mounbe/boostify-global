
// This is a client-side mock of an email service
// In a real application, this would be an API endpoint on your server

interface EmailNotificationProps {
  type: 'contact' | 'demo' | 'calendar' | 'transcript' | 'newsletter' | 'chat';
  email: string;
  name: string;
  message?: string;
  subject?: string;
  section?: string;
  company?: string;
  phone?: string;
  hasWebsite?: string;
  websiteUrl?: string;
  buttonName?: string;
  calendarEvent?: {
    calendarEmail: string;
    eventTitle: string;
    eventDescription: string;
    eventDate: string; // ISO string
    eventDuration: number; // in minutes
    attendees: string[];
  };
  transcriptHtml?: string;
}

export const sendEmailNotification = async (props: EmailNotificationProps): Promise<boolean> => {
  const { type, email, name, message, subject, section, company, phone, hasWebsite, websiteUrl, buttonName, calendarEvent } = props;
  
  // In a real application, you would make an API call to your server here
  // For now, we'll simulate a successful email send
  
  console.log('Email notification request:', {
    type,
    email,
    name,
    subject,
    section,
    company,
    hasWebsite,
    websiteUrl,
    buttonName,
    calendarEvent
  });
  
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // Auto-add calendar event for specific email
      if (calendarEvent && calendarEvent.calendarEmail === "mounir@benproductions.ma") {
        console.log('Auto-adding to Google Calendar for:', calendarEvent.calendarEmail);
        console.log('Event details:', calendarEvent);
      }
      
      // Simulate successful email send (90% success rate)
      const success = Math.random() < 0.9;
      
      if (success) {
        console.log('Email sent successfully');
      } else {
        console.error('Email sending failed (simulated failure)');
      }
      
      resolve(success);
    }, 800); // Simulate network delay
  });
};
