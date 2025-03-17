
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <ToggleGroup type="single" value={language} onValueChange={(value) => {
        if (value) setLanguage(value as 'en' | 'fr');
      }}>
        <ToggleGroupItem value="en" className="text-xs px-2 py-1 h-6">EN</ToggleGroupItem>
        <ToggleGroupItem value="fr" className="text-xs px-2 py-1 h-6">FR</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default LanguageToggle;
