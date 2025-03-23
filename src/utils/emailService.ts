import nodemailer from 'nodemailer';

interface EmailNotificationProps {
  type: 'contact' | 'demo' | 'calendar' | 'transcript';
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
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const { type, email, name, message, subject, section, company, phone, hasWebsite, websiteUrl, buttonName, calendarEvent, transcriptHtml } = props;

  let mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: '',
    html: '',
  };

  if (type === 'contact') {
    mailOptions.subject = `[Contact Form] ${subject}`;
    mailOptions.html = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
  } else if (type === 'demo') {
    mailOptions.subject = `[Demo Request] ${name} - ${company}`;
    mailOptions.html = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Has Website:</strong> ${hasWebsite}</p>
      ${websiteUrl ? `<p><strong>Website URL:</strong> ${websiteUrl}</p>` : ''}
      <p><strong>Section:</strong> ${section}</p>
      <p><strong>Button Name:</strong> ${buttonName}</p>
    `;
  } else if (type === 'calendar') {
    mailOptions.subject = `[Calendar Booking Request] ${name}`;
    mailOptions.html = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Section:</strong> ${section}</p>
      <p><strong>Button Name:</strong> ${buttonName}</p>
    `;
  } else if (type === 'transcript') {
    mailOptions.subject = `[Chat Transcript] ${name}`;
    mailOptions.html = transcriptHtml || '';
  }

  try {
    const emailData: any = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: '',
      html: '',
    };
    
    if (type === 'contact') {
      emailData.subject = `[Contact Form] ${subject}`;
      emailData.html = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;
    } else if (type === 'demo') {
      emailData.subject = `[Demo Request] ${name} - ${company}`;
      emailData.html = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Has Website:</strong> ${hasWebsite}</p>
        ${websiteUrl ? `<p><strong>Website URL:</strong> ${websiteUrl}</p>` : ''}
        <p><strong>Section:</strong> ${section}</p>
        <p><strong>Button Name:</strong> ${buttonName}</p>
      `;
    } else if (type === 'calendar') {
      emailData.subject = `[Calendar Booking Request] ${name}`;
      emailData.html = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Section:</strong> ${section}</p>
        <p><strong>Button Name:</strong> ${buttonName}</p>
      `;
    } else if (type === 'transcript') {
      emailData.subject = `[Chat Transcript] ${name}`;
      emailData.html = transcriptHtml || '';
    }
    
    if (props.calendarEvent) {
      emailData.calendarEvent = props.calendarEvent;
      
      if (props.calendarEvent.calendarEmail === "mounir@benproductions.ma") {
        emailData.addToGoogleCalendar = true;
      }
    }

    await transporter.sendMail(emailData);

    return true;
  } catch (error) {
    console.error('Error sending email notification:', error);
    return false;
  }
};
