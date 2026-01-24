// src/lib/data/navigation.ts
// Navigation configuration for Air Conditioning Champ

import { SERVICES } from './services';
import { LOCATIONS } from './locations';

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Group locations by state for organized navigation
const locationsByState = LOCATIONS.reduce((acc, location) => {
  const state = location.stateFullName;
  if (!acc[state]) {
    acc[state] = [];
  }
  acc[state].push(location);
  return acc;
}, {} as Record<string, typeof LOCATIONS>);

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
    children: Object.entries(locationsByState).flatMap(([state, locations]) =>
      locations.map((location) => ({
        label: `${location.city}, ${location.state}`,
        href: `/locations/${location.slug}`,
      }))
    ),
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
    state: location.state,
    href: `/locations/${location.slug}`,
  })),
  // GBP locations for the footer's "Our Locations" section
  gbpLocations: LOCATIONS.filter((location) => location.hasGBP).map((location) => ({
    city: location.city,
    state: location.state,
    href: `/locations/${location.slug}`,
    phone: location.phone,
    phoneRaw: location.phoneRaw,
    address: location.address,
  })),
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
  ],
};
