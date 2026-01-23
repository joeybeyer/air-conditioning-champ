// src/lib/data/company.ts
// Company information constants for Air Conditioning Champ

export const COMPANY = {
  name: 'Air Conditioning Champ',
  legalName: 'Air Conditioning Champ LLC',
  phone: '(623) 301-9085',
  phoneRaw: '+16233019085',
  trackingPhone: '(623) 301-9085',
  email: 'info@airconditioningchamp.com',
  url: 'https://airconditioningchamp.com',

  address: {
    streetAddress: '12801 W Bell Rd',
    city: 'Surprise',
    state: 'AZ',
    stateFullName: 'Arizona',
    postalCode: '85378',
    country: 'US',
    countryFullName: 'United States',
  },

  geo: {
    latitude: 33.6396,
    longitude: -112.3686,
  },

  serviceArea: 'West Valley Arizona',
  serviceAreaDescription: 'Serving El Mirage, Surprise, Peoria, Glendale, Goodyear, Avondale, Buckeye, Litchfield Park, Sun City, and Sun City West',

  hours: {
    description: 'Open 24/7',
    opens: '00:00',
    closes: '23:59',
    daysOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  },

  founded: '2020',

  description: 'Air Conditioning Champ provides expert AC repair, installation, and maintenance services throughout West Valley Arizona. Our licensed technicians offer 24/7 emergency service with fast response times and upfront pricing.',

  shortDescription: 'Expert HVAC services in West Valley AZ. 24/7 emergency AC repair.',

  slogan: 'Your West Valley AC Experts',
  tagline: '24/7 Emergency Service • Licensed & Insured • Upfront Pricing',

  social: {
    facebook: 'https://facebook.com/airconditioningchamp',
    instagram: 'https://instagram.com/airconditioningchamp',
    google: 'https://g.page/airconditioningchamp',
    yelp: 'https://yelp.com/biz/air-conditioning-champ',
  },

  licenses: {
    roc: 'ROC #XXXXXX',
    type: 'Licensed, Bonded & Insured',
  },

  stats: {
    yearsInBusiness: 5,
    customersServed: '5,000+',
    fiveStarReviews: '500+',
    responseTime: '1-2 hours',
    satisfaction: '100%',
  },

  guarantees: [
    '100% Satisfaction Guarantee',
    '90-Day Warranty on Repairs',
    'Upfront Pricing - No Hidden Fees',
    'On-Time Arrival or Service is Free',
  ],

  payments: [
    'Cash',
    'Check',
    'Credit Card',
    'Financing Available',
  ],

  brands: [
    'Trane',
    'Carrier',
    'Lennox',
    'Rheem',
    'Goodman',
    'American Standard',
    'York',
    'Daikin',
  ],
} as const;

export type CompanyInfo = typeof COMPANY;
