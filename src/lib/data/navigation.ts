// src/lib/data/navigation.ts
// Navigation configuration for Air Conditioning Champ

import { SERVICES } from './services';
import { LOCATIONS } from './locations';

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: SERVICES.map((service) => ({
      label: service.name,
      href: `/services/${service.slug}`,
    })),
  },
  {
    label: 'Service Areas',
    href: '/locations',
    children: LOCATIONS.map((location) => ({
      label: location.city,
      href: `/locations/${location.slug}`,
    })),
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const footerNavigation = {
  services: SERVICES.map((service) => ({
    label: service.name,
    href: `/services/${service.slug}`,
  })),
  locations: LOCATIONS.map((location) => ({
    label: location.city,
    href: `/locations/${location.slug}`,
  })),
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
  ],
};
