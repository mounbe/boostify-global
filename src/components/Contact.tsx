
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
  const { language, t } = useLanguage();
  const [hasWebsite, setHasWebsite] = useState<string>('no');
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <section id="contact" className="py-24 px-4 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">{t('contact.badge')}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {language === 'fr' ? 'Nom Complet' : 'Full Name'}
                  </label>
                  <Input id="name" placeholder={language === 'fr' ? 'Votre nom' : 'Your name'} required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {language === 'fr' ? 'Adresse Email' : 'Email Address'}
                  </label>
                  <Input id="email" type="email" placeholder={language === 'fr' ? 'votre.email@exemple.com' : 'your.email@example.com'} required />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  {language === 'fr' ? 'Sujet' : 'Subject'}
                </label>
                <Input id="subject" placeholder={language === 'fr' ? 'Sujet de votre message' : 'Subject of your message'} required />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'fr' ? 'Avez-vous déjà un site web ?' : 'Do you already have a website?'}
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input 
                      type="radio" 
                      name="hasWebsite" 
                      value="yes" 
                      checked={hasWebsite === 'yes'} 
                      onChange={() => setHasWebsite('yes')} 
                      className="h-4 w-4"
                    />
                    {language === 'fr' ? 'Oui' : 'Yes'}
                  </label>
                  <label className="flex items-center gap-2">
                    <input 
                      type="radio" 
                      name="hasWebsite" 
                      value="no" 
                      checked={hasWebsite === 'no'} 
                      onChange={() => setHasWebsite('no')} 
                      className="h-4 w-4"
                    />
                    {language === 'fr' ? 'Non' : 'No'}
                  </label>
                </div>
              </div>
              
              {hasWebsite === 'yes' && (
                <div>
                  <label htmlFor="websiteUrl" className="block text-sm font-medium mb-2">
                    {language === 'fr' ? 'Quelle est l\'adresse de votre site web ?' : 'What is your website address?'}
                  </label>
                  <Input 
                    id="websiteUrl" 
                    type="url" 
                    placeholder={language === 'fr' ? 'https://www.votresite.com' : 'https://www.yourwebsite.com'} 
                  />
                </div>
              )}
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {language === 'fr' ? 'Message' : 'Message'}
                </label>
                <Textarea 
                  id="message" 
                  placeholder={language === 'fr' ? 'Comment pouvons-nous vous aider ?' : 'How can we help you?'} 
                  rows={5} 
                  className="resize-none bg-card/80" 
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-medium rounded-full">
                {language === 'fr' ? 'Envoyer le Message' : 'Send Message'} <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          <div className="bg-card/60 p-8 rounded-xl shadow-md with-border-fade animate-on-scroll">
            <h3 className="text-xl font-semibold mb-6">{language === 'fr' ? 'Informations de Contact' : 'Contact Information'}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-base">{language === 'fr' ? 'Email' : 'Email'}</h4>
                  <p className="text-muted-foreground mt-1">contact@boostexportsai.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-base">{language === 'fr' ? 'Téléphone' : 'Phone'}</h4>
                  <p className="text-muted-foreground mt-1">+212 6 78 63 63 02</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium text-base mb-2">{language === 'fr' ? 'Site Web' : 'Website'}</h4>
              <p className="text-muted-foreground">www.boostexportsAI.com</p>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium text-base mb-2">{language === 'fr' ? 'Nos Partenaires' : 'Our Partners'}</h4>
              <div className="flex flex-wrap gap-2 mt-3">
                <Badge variant="outline">highlevel</Badge>
                <Badge variant="outline">Mymarky AI</Badge>
                <Badge variant="outline">Snow AI</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
