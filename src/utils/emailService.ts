
/**
 * Email service utility to handle form submissions
 */

type EmailData = {
  type: 'contact' | 'newsletter' | 'demo' | 'chat' | 'calendar';
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
    
    // FormSubmit requires additional fields for proper submission
    const formData = new FormData();
    
    // Add all data fields to FormData
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, value.toString());
      }
    });
    
    // Add required FormSubmit fields
    formData.append('_subject', `${formType} ${buttonInfo} ${sectionInfo} - ${data.email}`);
    formData.append('_captcha', 'false'); // Disable captcha for testing
    formData.append('_template', 'table'); // Use table template for better readability
    
    // Use direct form submission (FormSubmit works better with FormData than JSON for cross-origin)
    const response = await fetch('https://formsubmit.co/contact@boostexportsai.com', {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      throw new Error(`Failed to send email: ${response.status} ${response.statusText}`);
    }
    
    return true;
  } catch (error) {
    console.error('Error sending email notification:', error);
    
    // Fallback method using mailto link for development/testing
    try {
      // Create a basic email body
      const subject = `${data.type === 'chat' ? 'Chat Conversation' : `Contact from ${data.name || 'Website Visitor'}`} - ${data.type}`;
      const body = `
        Type: ${data.type}
        ${data.name ? `Name: ${data.name}` : ''}
        Email: ${data.email}
        ${data.company ? `Company: ${data.company}` : ''}
        ${data.phone ? `Phone: ${data.phone}` : ''}
        ${data.hasWebsite ? `Has Website: ${data.hasWebsite}` : ''}
        ${data.websiteUrl ? `Website URL: ${data.websiteUrl}` : ''}
        ${data.message ? `Message: ${data.message}` : ''}
        ${data.section ? `Section: ${data.section}` : ''}
        ${data.buttonName ? `Button: ${data.buttonName}` : ''}
      `;
      
      // Create mailTo link (for testing in development)
      const mailtoLink = `mailto:contact@boostexportsai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open mailto link (this will work in development but might be blocked in production)
      window.open(mailtoLink, '_blank');
      
      console.log('Email form data sent via mailto fallback');
      return true;
    } catch (fallbackError) {
      console.error('Fallback email method also failed:', fallbackError);
      return false;
    }
  }
};
