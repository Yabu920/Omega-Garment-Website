import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ title, subtitle, centered = false, className }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        'mb-12 md:mb-16',
        centered ? 'text-center' : 'text-left',
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={cn(
        'h-1.5 w-20 bg-primary rounded-full mt-6',
        centered ? 'mx-auto' : 'mr-auto'
      )} />
    </motion.div>
  );
}
