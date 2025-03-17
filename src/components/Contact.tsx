
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <section id="contact" className="py-24 px-4 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Contact</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prenez Contact Avec Nous</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contactez notre équipe pour discuter de vos besoins d'exportation et découvrir comment nos solutions peuvent vous aider.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom Complet
                  </label>
                  <Input id="name" placeholder="Votre nom" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Adresse Email
                  </label>
                  <Input id="email" type="email" placeholder="votre.email@exemple.com" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Sujet
                </label>
                <Input id="subject" placeholder="Sujet de votre message" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Comment pouvons-nous vous aider?" 
                  rows={5} 
                  className="resize-none bg-card/80" 
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-medium rounded-full">
                Envoyer Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          <div className="bg-card/60 p-8 rounded-xl shadow-md with-border-fade animate-on-scroll">
            <h3 className="text-xl font-semibold mb-6">Informations de Contact</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-base">Email</h4>
                  <p className="text-muted-foreground mt-1">contact@boostexportsai.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-base">Téléphone</h4>
                  <p className="text-muted-foreground mt-1">+212 6 78 63 63 02</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium text-base mb-2">Site Web</h4>
              <p className="text-muted-foreground">www.boostexportsAI.com</p>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium text-base mb-2">Nos Partenaires</h4>
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
