import React from 'react';
import { cn } from '@/lib/utils';
interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}
export const NeoButton = React.forwardRef<HTMLButtonElement, NeoButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-pop-blue text-white',
      secondary: 'bg-pop-pink text-white',
      accent: 'bg-pop-yellow text-black',
      outline: 'bg-white text-black',
    };
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-xl',
    };
    return (
      <button
        ref={ref}
        className={cn(
          'relative inline-flex items-center justify-center font-bold border-4 border-black rounded-xl transition-all',
          'shadow-hard active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
NeoButton.displayName = 'NeoButton';