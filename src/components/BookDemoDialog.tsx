
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Check, Globe, Mail, User, Briefcase, Phone, Link } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { sendEmailNotification } from '@/utils/emailService';

// Define form schema with fewer required fields
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  phone: z.string().min(6, {
    message: "Phone number must be at least 6 characters.",
  }),
  hasWebsite: z.enum(["yes", "no"]),
  websiteUrl: z.string().url().optional().or(z.literal('')),
});

type FormValues = z.infer<typeof formSchema>;

interface BookDemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedPlan?: string;
}

export function BookDemoDialog({ open, onOpenChange, selectedPlan }: BookDemoDialogProps) {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [showWebsiteField, setShowWebsiteField] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Determine if this is a "Book Demo" context or a "Free Website" context
  const isBookDemo = selectedPlan?.includes('Demo') || selectedPlan?.includes('Démo');
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      hasWebsite: "no",
      websiteUrl: "",
    },
  });

  const watchHasWebsite = form.watch("hasWebsite");
  
  React.useEffect(() => {
    setShowWebsiteField(watchHasWebsite === "yes");
  }, [watchHasWebsite]);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    console.log("Form submitted with data:", data);
    
    try {
      // Dynamically set button label based on context
      const buttonLabel = isBookDemo 
        ? (language === 'fr' ? 'Réserver une démo' : 'Book a demo')
        : (language === 'fr' ? 'Commander mon site gratuit' : 'Order my free website');
      
      const planInfo = selectedPlan ? ` - ${selectedPlan}` : '';
      
      const success = await sendEmailNotification({
        type: 'demo',
        email: data.email,
        name: data.name,
        company: data.company,
        phone: data.phone,
        hasWebsite: data.hasWebsite,
        websiteUrl: data.websiteUrl,
        section: 'Book Demo Dialog',
        buttonName: buttonLabel + planInfo
      });
      
      if (success) {
        toast({
          title: language === 'fr' ? 'Demande envoyée' : 'Request sent',
          description: (
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              <span>
                {isBookDemo
                  ? (language === 'fr' 
                      ? 'Nous vous contacterons bientôt pour planifier votre démo.' 
                      : 'We will contact you soon to schedule your demo.')
                  : (language === 'fr' 
                      ? 'Nous vous contacterons bientôt pour discuter de votre site web gratuit.' 
                      : 'We will contact you soon to discuss your free website.')}
              </span>
            </div>
          ),
        });
        
        onOpenChange(false);
        form.reset();
      } else {
        throw new Error('Failed to send demo request');
      }
    } catch (error) {
      toast({
        title: language === 'fr' ? 'Erreur' : 'Error',
        description: language === 'fr'
          ? 'Un problème est survenu. Veuillez réessayer plus tard.'
          : 'Something went wrong. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex items-center gap-2 text-green-600">
            <Globe className="h-5 w-5" />
            <DialogTitle>
              {isBookDemo
                ? (language === 'fr' ? 'Réserver une démo' : 'Book a Demo')
                : (language === 'fr' ? 'Commander votre site web gratuit' : 'Order your free website')}
            </DialogTitle>
          </div>
          <DialogDescription>
            {isBookDemo
              ? (language === 'fr' 
                  ? 'Remplissez le formulaire ci-dessous pour réserver une démo personnalisée de nos solutions.' 
                  : 'Fill out the form below to schedule a personalized demo of our solutions.')
              : (language === 'fr' 
                  ? 'Remplissez le formulaire ci-dessous pour commander votre site web gratuit optimisé pour l\'export.' 
                  : 'Fill out the form below to order your free website optimized for export.')}
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {language === 'fr' ? 'Nom' : 'Name'}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder={language === 'fr' ? 'Votre nom' : 'Your name'} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="example@company.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      {language === 'fr' ? 'Entreprise' : 'Company'}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder={language === 'fr' ? 'Votre entreprise' : 'Your company'} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      {language === 'fr' ? 'Téléphone' : 'Phone'}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="+33 12 345 6789" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="hasWebsite"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    {language === 'fr' ? 'Avez-vous déjà un site web ?' : 'Do you already have a website?'}
                  </FormLabel>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio"
                        {...field}
                        value="yes"
                        checked={field.value === "yes"}
                        className="h-4 w-4"
                      />
                      {language === 'fr' ? 'Oui' : 'Yes'}
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio"
                        {...field}
                        value="no"
                        checked={field.value === "no"}
                        className="h-4 w-4"
                      />
                      {language === 'fr' ? 'Non' : 'No'}
                    </label>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {showWebsiteField && (
              <FormField
                control={form.control}
                name="websiteUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Link className="h-4 w-4" />
                      {language === 'fr' ? 'Adresse de votre site' : 'Website address'}
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="https://www.example.com" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            
            <DialogFooter className="pt-4">
              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {language === 'fr' ? 'Envoi...' : 'Sending...'}
                  </span>
                ) : (
                  <>
                    <Globe className="mr-2 h-4 w-4" />
                    {isBookDemo
                      ? (language === 'fr' ? 'Réserver ma démo' : 'Book my demo')
                      : (language === 'fr' ? 'Commander mon site gratuit' : 'Order my free website')}
                  </>
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default BookDemoDialog;
