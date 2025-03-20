
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
  section?: string;
  buttonName?: string;
};

/**
 * Sends email data to the specified endpoint
 */
export const sendEmailNotification = async (data: EmailData): Promise<boolean> => {
  try {
    console.log('Sending email notification:', data);
    
    // Create subject line with section and button information
    const sectionInfo = data.section ? `[${data.section}]` : '';
    const buttonInfo = data.buttonName ? `[${data.buttonName}]` : '';
    const formType = `[${data.type}]`;
    
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
        _subject: `${buttonInfo} ${sectionInfo} - ${data.email}`,
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
