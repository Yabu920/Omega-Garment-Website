import { cn } from '@/lib/utils';
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export function Badge({ children, className, variant = 'primary' }: BadgeProps) {
  const variants = {
    primary: 'bg-primary/10 text-primary border-primary/20',
    secondary: 'bg-accent/10 text-accent border-accent/20',
    outline: 'bg-transparent text-gray-600 border-gray-200',
  };

  return (
    <span className={cn(
      'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}
