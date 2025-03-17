
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Calendar, Check, CalendarClock } from 'lucide-react';

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

// Define form schema
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
});

type FormValues = z.infer<typeof formSchema>;

interface BookDemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BookDemoDialog({ open, onOpenChange }: BookDemoDialogProps) {
  const { language } = useLanguage();
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // Here you would typically send the data to your backend/API
    console.log("Form submitted with data:", data);
    
    // Show success toast
    toast({
      title: language === 'fr' ? 'Demande envoyée' : 'Request sent',
      description: language === 'fr' 
        ? 'Nous vous contacterons bientôt pour planifier votre démo.' 
        : 'We will contact you soon to schedule your demo.',
      icon: <Check className="h-4 w-4" />,
    });
    
    // Close the dialog
    onOpenChange(false);
    
    // Reset the form
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex items-center gap-2 text-primary">
            <CalendarClock className="h-5 w-5" />
            <DialogTitle>
              {language === 'fr' ? 'Réserver une démo' : 'Book a Demo'}
            </DialogTitle>
          </div>
          <DialogDescription>
            {language === 'fr' 
              ? 'Remplissez le formulaire ci-dessous pour réserver votre démo personnalisée.' 
              : 'Fill out the form below to book your personalized demo.'}
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {language === 'fr' ? 'Nom complet' : 'Full name'}
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="example@company.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {language === 'fr' ? 'Entreprise' : 'Company'}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder={language === 'fr' ? 'Nom de votre entreprise' : 'Your company name'} {...field} />
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
                  <FormLabel>
                    {language === 'fr' ? 'Téléphone' : 'Phone'}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder={language === 'fr' ? 'Votre numéro de téléphone' : 'Your phone number'} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <DialogFooter className="pt-4">
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                <Calendar className="mr-2 h-4 w-4" />
                {language === 'fr' ? 'Demander une démo' : 'Request a Demo'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default BookDemoDialog;
