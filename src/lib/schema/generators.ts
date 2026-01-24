// src/lib/schema/generators.ts
// Schema.org JSON-LD generators for SEO

import { COMPANY } from '@/lib/data/company';
import { Service } from '@/lib/data/services';
import { Location } from '@/lib/data/locations';
import { getPhoneForLocation, getAddressForLocation } from '@/lib/utils/location-helpers';

// Base organization schema used across pages
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.name,
    url: COMPANY.url,
    logo: `${COMPANY.url}/air_conditioning_champ_logo.png`,
    telephone: COMPANY.phoneRaw,
    email: COMPANY.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.address.streetAddress,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.postalCode,
      addressCountry: COMPANY.address.country,
    },
    sameAs: [
      COMPANY.social.facebook,
      COMPANY.social.instagram,
      COMPANY.social.google,
      COMPANY.social.yelp,
    ],
  };
}

// Homepage HVAC Business schema
export function generateHVACBusinessSchema(locations: Location[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    '@id': `${COMPANY.url}/#hvacbusiness`,
    name: COMPANY.name,
    description: COMPANY.description,
    url: COMPANY.url,
    telephone: COMPANY.phoneRaw,
    email: COMPANY.email,
    image: `${COMPANY.url}/air_conditioning_champ_logo.png`,
    logo: `${COMPANY.url}/air_conditioning_champ_logo.png`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.address.streetAddress,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.postalCode,
      addressCountry: COMPANY.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY.geo.latitude,
      longitude: COMPANY.geo.longitude,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: COMPANY.hours.daysOfWeek,
      opens: COMPANY.hours.opens,
      closes: COMPANY.hours.closes,
    },
    areaServed: locations.map((location) => ({
      '@type': 'City',
      name: location.city,
      '@id': `https://en.wikipedia.org/wiki/${location.city.replace(/ /g, '_')},_${location.stateFullName.replace(/ /g, '_')}`,
    })),
    sameAs: [
      COMPANY.social.facebook,
      COMPANY.social.instagram,
      COMPANY.social.google,
      COMPANY.social.yelp,
    ],
  };
}

// Service page schema
export function generateServiceSchema(service: Service, locations: Location[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${COMPANY.url}/services/${service.slug}/#service`,
    name: service.name,
    description: service.shortDescription,
    provider: {
      '@type': 'HVACBusiness',
      '@id': `${COMPANY.url}/#hvacbusiness`,
      name: COMPANY.name,
      telephone: COMPANY.phoneRaw,
      address: {
        '@type': 'PostalAddress',
        addressLocality: COMPANY.address.city,
        addressRegion: COMPANY.address.state,
        postalCode: COMPANY.address.postalCode,
      },
    },
    areaServed: locations.map((location) => ({
      '@type': 'City',
      name: location.city,
    })),
    offers: {
      '@type': 'Offer',
      priceRange: `$${service.pricing.min} - $${service.pricing.max}`,
      priceCurrency: 'USD',
    },
    serviceType: service.name,
  };
}

// Location-specific LocalBusiness schema
export function generateLocationSchema(location: Location) {
  const { phoneRaw } = getPhoneForLocation(location);
  const address = getAddressForLocation(location);

  return {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    '@id': `${COMPANY.url}/locations/${location.slug}/#localbusiness`,
    name: `${COMPANY.name} - ${location.city}`,
    description: `Expert AC repair and HVAC services in ${location.city}, ${location.state}. ${COMPANY.shortDescription}`,
    url: `${COMPANY.url}/locations/${location.slug}`,
    telephone: phoneRaw,
    email: COMPANY.email,
    image: `${COMPANY.url}/air_conditioning_champ_logo.png`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: address?.street,
      addressLocality: address?.city || location.city,
      addressRegion: address?.state || location.state,
      postalCode: address?.zip || location.zipCodes[0],
      addressCountry: 'US',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: COMPANY.hours.daysOfWeek,
      opens: COMPANY.hours.opens,
      closes: COMPANY.hours.closes,
    },
    areaServed: {
      '@type': 'City',
      name: location.city,
    },
    sameAs: [
      COMPANY.social.facebook,
      COMPANY.social.instagram,
      COMPANY.social.google,
      COMPANY.social.yelp,
    ],
  };
}

// FAQ Page schema
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  if (!faqs || faqs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Breadcrumb schema
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Contact page schema
export function generateContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Air Conditioning Champ',
    description: `Contact ${COMPANY.name} for AC repair and HVAC services in ${COMPANY.serviceArea}.`,
    url: `${COMPANY.url}/contact`,
    mainEntity: {
      '@type': 'HVACBusiness',
      '@id': `${COMPANY.url}/#hvacbusiness`,
      name: COMPANY.name,
      telephone: COMPANY.phoneRaw,
      email: COMPANY.email,
    },
  };
}

// About page schema
export function generateAboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `About ${COMPANY.name}`,
    description: COMPANY.description,
    url: `${COMPANY.url}/about`,
    mainEntity: {
      '@type': 'HVACBusiness',
      '@id': `${COMPANY.url}/#hvacbusiness`,
      name: COMPANY.name,
      foundingDate: COMPANY.founded,
      description: COMPANY.description,
    },
  };
}
