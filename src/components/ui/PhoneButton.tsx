'use client';

import { Phone } from 'lucide-react';
import { COMPANY } from '@/lib/data/company';

interface PhoneButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  className?: string;
}

const variantClasses = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700',
  secondary: 'bg-secondary-800 text-white hover:bg-secondary-900',
  outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
  ghost: 'text-primary-600 hover:bg-primary-50',
};

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-8 py-3.5 text-lg',
};

const iconSizes = {
  sm: 14,
  md: 18,
  lg: 22,
};

export function PhoneButton({
  variant = 'primary',
  size = 'md',
  showIcon = true,
  className = '',
}: PhoneButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors gap-2';
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <a href={`tel:${COMPANY.phoneRaw}`} className={classes}>
      {showIcon && <Phone size={iconSizes[size]} />}
      {COMPANY.phone}
    </a>
  );
}

export function PhoneLink({ className = '' }: { className?: string }) {
  return (
    <a
      href={`tel:${COMPANY.phoneRaw}`}
      className={`hover:text-primary-600 transition-colors ${className}`}
    >
      {COMPANY.phone}
    </a>
  );
}
