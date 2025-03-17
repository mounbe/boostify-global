
import React from 'react';
import { cn } from '@/lib/utils';

type BadgeProps = {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'subtle';
  className?: string;
};

export const Badge = ({ 
  children, 
  variant = 'default', 
  className 
}: BadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors',
        variant === 'default' && 'bg-primary text-primary-foreground',
        variant === 'outline' && 'border border-primary text-primary',
        variant === 'subtle' && 'bg-primary/10 text-primary',
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
