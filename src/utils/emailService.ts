
/**
 * Email service utility to handle form submissions
 */

type EmailData = {
  type: 'contact' | 'newsletter' | 'demo';
  email: string;
  name?: string;
  subject?: string;
  message?: string;
  company?: string;
  phone?: string;
  websiteUrl?: string;
  hasWebsite?: 'yes' | 'no';
};

/**
 * Sends email data to the specified endpoint
 */
export const sendEmailNotification = async (data: EmailData): Promise<boolean> => {
  try {
    console.log('Sending email notification:', data);
    
    // In a real implementation, you would replace this with an actual API call
    // to your email sending service (e.g., SendGrid, AWS SES, custom backend, etc.)
    const response = await fetch('https://formsubmit.co/contact@boostexportsai.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...data,
        _subject: `[BoostExportsAI] New ${data.type} submission from ${data.email}`,
      }),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to send email: ${response.status} ${response.statusText}`);
    }
    
    return true;
  } catch (error) {
    console.error('Error sending email notification:', error);
    return false;
  }
};
