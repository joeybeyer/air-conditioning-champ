// src/lib/data/services.ts
// HVAC Services data for Air Conditioning Champ

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServicePricing {
  service: string;
  priceRange: string;
  duration: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  shortDescription: string;
  longDescription: string;
  pricing: {
    min: number;
    max: number;
    unit: string;
    note?: string;
  };
  pricingTable: ServicePricing[];
  duration: string;
  features: string[];
  benefits: string[];
  process: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  faqs: ServiceFAQ[];
  relatedServices: string[];
  metaTitle: string;
  metaDescription: string;
  keyTakeaways: string[];
}

export const SERVICES: Service[] = [
  {
    slug: 'ac-repair',
    name: 'AC Repair',
    shortName: 'Repair',
    icon: 'Wrench',
    shortDescription: '24/7 emergency AC repair services for all makes and models throughout West Valley Arizona.',
    longDescription: `When your air conditioner breaks down in the Arizona heat, every minute counts. Air Conditioning Champ provides fast, reliable AC repair services throughout West Valley Arizona, including El Mirage, Surprise, Peoria, Glendale, and surrounding areas. Our licensed technicians arrive with fully-stocked trucks to diagnose and repair most issues on the first visit.`,
    pricing: {
      min: 89,
      max: 500,
      unit: 'service call',
      note: 'Diagnostic fee waived with repair',
    },
    pricingTable: [
      { service: 'Diagnostic Fee', priceRange: '$89', duration: '30-45 min' },
      { service: 'Capacitor Replacement', priceRange: '$150-$250', duration: '30 min' },
      { service: 'Refrigerant Recharge', priceRange: '$200-$400', duration: '1-2 hours' },
      { service: 'Compressor Repair', priceRange: '$300-$500', duration: '2-3 hours' },
      { service: 'Blower Motor Repair', priceRange: '$250-$450', duration: '1-2 hours' },
    ],
    duration: '1-3 hours',
    features: [
      'Same-day service available',
      'All makes and models serviced',
      'Licensed and insured technicians',
      'Upfront pricing before work begins',
      '90-day warranty on all repairs',
      'Fully-stocked service trucks',
    ],
    benefits: [
      'Fast response times (1-2 hours)',
      'No overtime charges for nights/weekends',
      'Senior and military discounts',
      'Financing available on major repairs',
    ],
    process: [
      { step: 1, title: 'Call Us', description: 'Contact our 24/7 dispatch team to schedule your service call.' },
      { step: 2, title: 'Diagnosis', description: 'Our technician performs a thorough inspection and diagnoses the issue.' },
      { step: 3, title: 'Upfront Quote', description: 'You receive a clear, written quote before any work begins.' },
      { step: 4, title: 'Expert Repair', description: 'We complete the repair using quality parts with warranty coverage.' },
      { step: 5, title: 'Verification', description: 'We test the system and ensure your complete satisfaction.' },
    ],
    faqs: [
      {
        question: 'How much does AC repair cost in West Valley, AZ?',
        answer: 'AC repair in West Valley typically costs between $89-$500 depending on the issue. Our diagnostic fee is $89 and is waived if you proceed with the repair. We provide upfront pricing before any work begins.',
      },
      {
        question: 'How quickly can you respond to an AC emergency in West Valley?',
        answer: 'We offer same-day emergency AC repair throughout West Valley Arizona with typical response times of 1-2 hours. Our technicians are available 24/7, including nights, weekends, and holidays.',
      },
      {
        question: 'Do you repair all AC brands in West Valley?',
        answer: 'Yes, our technicians are trained to repair all major AC brands including Trane, Carrier, Lennox, Rheem, Goodman, and more. We service both residential and light commercial systems.',
      },
      {
        question: 'What is the most common AC problem in Arizona?',
        answer: 'The most common AC issues in Arizona are capacitor failures, refrigerant leaks, and compressor problems—all caused by the extreme heat. Regular maintenance can prevent 80% of these issues.',
      },
      {
        question: 'Is it worth repairing my AC or should I replace it?',
        answer: 'Generally, if your AC is over 10-15 years old and the repair costs more than 50% of a new system, replacement may be more cost-effective. We provide honest assessments and never push unnecessary replacements.',
      },
    ],
    relatedServices: ['ac-maintenance', 'emergency-service', 'ac-installation'],
    metaTitle: 'AC Repair in West Valley AZ | 24/7 Emergency Service | Air Conditioning Champ',
    metaDescription: 'Fast, reliable AC repair in West Valley Arizona. Same-day service, all makes and models, upfront pricing. Call now for 24/7 emergency AC repair in El Mirage, Surprise, Peoria & more.',
    keyTakeaways: [
      'Same-day AC repair available throughout West Valley with 1-2 hour response times',
      'Flat-rate pricing from $89-$500 with no hidden fees or overtime charges',
      '90-day warranty on all repairs with licensed, insured technicians',
    ],
  },
  {
    slug: 'ac-installation',
    name: 'AC Installation',
    shortName: 'Installation',
    icon: 'PlusCircle',
    shortDescription: 'Professional AC installation and replacement services with top brands and financing options.',
    longDescription: `Upgrade your comfort with a new, energy-efficient air conditioning system from Air Conditioning Champ. We offer professional AC installation throughout West Valley Arizona, helping homeowners choose the right system for their needs and budget. Our installations include proper sizing, quality workmanship, and manufacturer warranties.`,
    pricing: {
      min: 4500,
      max: 12000,
      unit: 'complete installation',
      note: 'Financing available',
    },
    pricingTable: [
      { service: '2-Ton System (14 SEER)', priceRange: '$4,500-$5,500', duration: '1 day' },
      { service: '3-Ton System (14 SEER)', priceRange: '$5,500-$6,500', duration: '1 day' },
      { service: '4-Ton System (16 SEER)', priceRange: '$7,000-$8,500', duration: '1-2 days' },
      { service: '5-Ton System (16 SEER)', priceRange: '$8,500-$10,000', duration: '1-2 days' },
      { service: 'High-Efficiency (20+ SEER)', priceRange: '$10,000-$12,000', duration: '1-2 days' },
    ],
    duration: '1-2 days',
    features: [
      'Free in-home estimates',
      'Proper load calculations',
      'Top brand equipment',
      'Manufacturer warranties up to 10 years',
      'Removal of old equipment included',
      'Permit handling included',
    ],
    benefits: [
      'Lower energy bills (up to 40% savings)',
      'Improved indoor comfort',
      'Quieter operation',
      'Better humidity control',
      'Increased home value',
    ],
    process: [
      { step: 1, title: 'Free Consultation', description: 'We assess your home and discuss your comfort needs and budget.' },
      { step: 2, title: 'Load Calculation', description: 'We perform Manual J calculations to properly size your new system.' },
      { step: 3, title: 'Quote & Options', description: 'You receive options at different price points with financing available.' },
      { step: 4, title: 'Professional Installation', description: 'Our team installs your new system to manufacturer specifications.' },
      { step: 5, title: 'Testing & Training', description: 'We test the system and show you how to use your new thermostat.' },
    ],
    faqs: [
      {
        question: 'How much does a new AC system cost in West Valley, AZ?',
        answer: 'A new AC system in West Valley typically costs between $4,500-$12,000 depending on system size, efficiency rating, and features. We offer free estimates and flexible financing options.',
      },
      {
        question: 'What size AC do I need for my West Valley home?',
        answer: 'AC size depends on your home\'s square footage, insulation, windows, and other factors. We perform Manual J load calculations to determine the exact size needed—typically 3-5 tons for most West Valley homes.',
      },
      {
        question: 'What SEER rating should I choose for Arizona?',
        answer: 'For Arizona\'s extreme heat, we recommend a minimum 16 SEER rating. Higher SEER systems (18-26) cost more upfront but save significantly on energy bills over time.',
      },
      {
        question: 'How long does AC installation take in West Valley?',
        answer: 'Most AC installations in West Valley take 1-2 days. A straightforward replacement can often be completed in one day, while installations requiring ductwork modifications may take longer.',
      },
      {
        question: 'Do you offer financing for AC installation in West Valley?',
        answer: 'Yes, we offer flexible financing options with approved credit, including 0% interest plans. We work with multiple lenders to find the best option for your budget.',
      },
    ],
    relatedServices: ['ac-repair', 'ac-maintenance', 'hvac-tune-up'],
    metaTitle: 'AC Installation West Valley AZ | New AC System | Air Conditioning Champ',
    metaDescription: 'Professional AC installation in West Valley Arizona. Free estimates, top brands, financing available. New AC systems from $4,500. Call for a free quote today.',
    keyTakeaways: [
      'New AC systems from $4,500-$12,000 with financing options and manufacturer warranties',
      'Professional installation includes load calculations, permits, and old equipment removal',
      'Energy-efficient systems can reduce cooling costs by up to 40% in Arizona homes',
    ],
  },
  {
    slug: 'ac-maintenance',
    name: 'AC Maintenance',
    shortName: 'Maintenance',
    icon: 'Settings',
    shortDescription: 'Preventive AC maintenance and tune-ups to keep your system running efficiently year-round.',
    longDescription: `Regular AC maintenance is essential in Arizona's extreme climate. Air Conditioning Champ offers comprehensive maintenance services throughout West Valley to keep your air conditioning system running efficiently, prevent costly breakdowns, and extend equipment life. Our tune-up service includes a thorough inspection and cleaning of all components.`,
    pricing: {
      min: 89,
      max: 149,
      unit: 'tune-up',
      note: 'Maintenance plans available',
    },
    pricingTable: [
      { service: 'Basic Tune-Up', priceRange: '$89', duration: '45 min' },
      { service: 'Premium Tune-Up', priceRange: '$129', duration: '60 min' },
      { service: 'Complete System Check', priceRange: '$149', duration: '90 min' },
      { service: 'Maintenance Plan (Annual)', priceRange: '$180/year', duration: '2 visits' },
      { service: 'Maintenance Plan (Bi-Annual)', priceRange: '$299/year', duration: '4 visits' },
    ],
    duration: '45-90 minutes',
    features: [
      'Complete system inspection',
      'Coil cleaning included',
      'Refrigerant level check',
      'Electrical connections tightened',
      'Thermostat calibration',
      'Filter replacement',
    ],
    benefits: [
      'Prevent 80% of breakdowns',
      'Lower energy bills',
      'Extended equipment life',
      'Maintain manufacturer warranty',
      'Priority scheduling',
    ],
    process: [
      { step: 1, title: 'Thermostat Check', description: 'We verify thermostat operation and calibration.' },
      { step: 2, title: 'Electrical Inspection', description: 'We inspect all electrical connections and components.' },
      { step: 3, title: 'Coil Cleaning', description: 'We clean the evaporator and condenser coils for efficiency.' },
      { step: 4, title: 'Refrigerant Check', description: 'We verify proper refrigerant levels and check for leaks.' },
      { step: 5, title: 'Report & Recommendations', description: 'You receive a detailed report with any recommendations.' },
    ],
    faqs: [
      {
        question: 'How often should I have my AC serviced in West Valley?',
        answer: 'In West Valley Arizona, we recommend AC maintenance twice per year—once in spring before cooling season and once in fall. The extreme heat puts extra stress on systems, making regular maintenance crucial.',
      },
      {
        question: 'What does AC maintenance include in Arizona?',
        answer: 'Our AC maintenance includes coil cleaning, refrigerant check, electrical inspection, thermostat calibration, filter replacement, and a 24-point system inspection tailored for Arizona conditions.',
      },
      {
        question: 'Can AC maintenance prevent breakdowns in West Valley?',
        answer: 'Yes, regular maintenance can prevent up to 80% of AC breakdowns. Most emergency repairs we see are due to lack of maintenance—issues that could have been caught early.',
      },
      {
        question: 'Do you offer AC maintenance plans in West Valley?',
        answer: 'Yes, we offer maintenance plans starting at $15/month that include bi-annual tune-ups, priority scheduling, and discounts on repairs. Plans pay for themselves in energy savings alone.',
      },
      {
        question: 'What happens if I skip AC maintenance in Arizona?',
        answer: 'Skipping maintenance in Arizona\'s extreme heat leads to higher energy bills, more frequent breakdowns, and shortened equipment life. We see AC systems fail 5-7 years earlier without regular maintenance.',
      },
    ],
    relatedServices: ['hvac-tune-up', 'ac-repair', 'ac-installation'],
    metaTitle: 'AC Maintenance West Valley AZ | AC Tune-Up | Air Conditioning Champ',
    metaDescription: 'Professional AC maintenance in West Valley Arizona. Prevent breakdowns, lower bills, extend AC life. Tune-ups from $89. Call to schedule your maintenance today.',
    keyTakeaways: [
      'AC tune-ups from $89-$149 include coil cleaning, refrigerant check, and 24-point inspection',
      'Regular maintenance prevents 80% of AC breakdowns and extends equipment life 5-7 years',
      'Bi-annual service recommended in Arizona—spring before cooling season and fall after',
    ],
  },
  {
    slug: 'heating-repair',
    name: 'Heating Repair',
    shortName: 'Heating',
    icon: 'Flame',
    shortDescription: 'Expert furnace and heat pump repair services for West Valley Arizona winters.',
    longDescription: `When Arizona winters bring cold nights, you need reliable heating. Air Conditioning Champ provides expert heating repair services throughout West Valley, including furnace repair, heat pump repair, and electric heater service. Our technicians diagnose and repair all heating systems quickly to restore your comfort.`,
    pricing: {
      min: 89,
      max: 450,
      unit: 'service call',
      note: 'Diagnostic fee waived with repair',
    },
    pricingTable: [
      { service: 'Diagnostic Fee', priceRange: '$89', duration: '30-45 min' },
      { service: 'Ignitor Replacement', priceRange: '$150-$250', duration: '30-60 min' },
      { service: 'Blower Motor Repair', priceRange: '$200-$350', duration: '1-2 hours' },
      { service: 'Heat Exchanger Inspection', priceRange: '$100-$150', duration: '45 min' },
      { service: 'Gas Valve Replacement', priceRange: '$300-$450', duration: '1-2 hours' },
    ],
    duration: '1-3 hours',
    features: [
      'Furnace repair',
      'Heat pump repair',
      'Electric heater service',
      'All brands serviced',
      'Same-day service available',
      '90-day repair warranty',
    ],
    benefits: [
      'Fast response times',
      'Experienced technicians',
      'Upfront pricing',
      'Quality parts with warranty',
    ],
    process: [
      { step: 1, title: 'Schedule Service', description: 'Call us to schedule your heating repair service.' },
      { step: 2, title: 'Diagnosis', description: 'We thoroughly inspect your heating system to identify the problem.' },
      { step: 3, title: 'Upfront Quote', description: 'You receive a clear quote before we begin any repairs.' },
      { step: 4, title: 'Expert Repair', description: 'We repair your heating system using quality replacement parts.' },
      { step: 5, title: 'Safety Check', description: 'We verify safe operation and test all safety controls.' },
    ],
    faqs: [
      {
        question: 'Do you repair furnaces in West Valley, AZ?',
        answer: 'Yes, we repair all types of furnaces in West Valley including gas furnaces, electric furnaces, and dual-fuel systems. Our technicians are trained on all major brands.',
      },
      {
        question: 'How much does heating repair cost in West Valley?',
        answer: 'Heating repair in West Valley typically costs between $89-$450 depending on the issue. Our diagnostic fee is $89 and is waived if you proceed with the repair.',
      },
      {
        question: 'Why is my heater blowing cold air in my West Valley home?',
        answer: 'A heater blowing cold air is often caused by a dirty filter, pilot light issue, or thermostat problem. Our technicians can quickly diagnose and fix the issue.',
      },
      {
        question: 'Do you repair heat pumps in West Valley?',
        answer: 'Yes, we service and repair all types of heat pumps. Heat pumps are popular in West Valley because they provide both heating and cooling efficiently.',
      },
      {
        question: 'When should I call for emergency heating repair in West Valley?',
        answer: 'Call for emergency heating repair if you smell gas, hear unusual noises, or have no heat during cold weather. We offer 24/7 emergency heating service throughout West Valley.',
      },
    ],
    relatedServices: ['ac-repair', 'hvac-tune-up', 'emergency-service'],
    metaTitle: 'Heating Repair West Valley AZ | Furnace Repair | Air Conditioning Champ',
    metaDescription: 'Expert heating and furnace repair in West Valley Arizona. Same-day service, all brands, upfront pricing. Call for fast heating repair in El Mirage, Surprise & more.',
    keyTakeaways: [
      'Furnace and heat pump repair from $89-$450 with same-day service available',
      'All heating system brands serviced by licensed, experienced technicians',
      '90-day warranty on all heating repairs with quality replacement parts',
    ],
  },
  {
    slug: 'hvac-tune-up',
    name: 'HVAC Tune-Up',
    shortName: 'Tune-Up',
    icon: 'Gauge',
    shortDescription: 'Complete HVAC system tune-ups to optimize performance and efficiency.',
    longDescription: `Keep your entire HVAC system running at peak performance with a comprehensive tune-up from Air Conditioning Champ. Our tune-up service covers both your cooling and heating systems, ensuring year-round comfort in your West Valley home. We inspect, clean, and adjust all components for optimal efficiency.`,
    pricing: {
      min: 129,
      max: 199,
      unit: 'complete tune-up',
      note: 'Covers AC and heating',
    },
    pricingTable: [
      { service: 'AC-Only Tune-Up', priceRange: '$89-$129', duration: '45-60 min' },
      { service: 'Heating-Only Tune-Up', priceRange: '$89-$129', duration: '45-60 min' },
      { service: 'Complete HVAC Tune-Up', priceRange: '$149-$199', duration: '90-120 min' },
      { service: 'Add Duct Inspection', priceRange: '+$50', duration: '+30 min' },
      { service: 'Add Air Quality Test', priceRange: '+$75', duration: '+30 min' },
    ],
    duration: '1.5-2 hours',
    features: [
      'Complete AC inspection',
      'Complete heating inspection',
      'Coil cleaning',
      'Filter replacement',
      'Thermostat check',
      'Safety inspection',
    ],
    benefits: [
      'Improved efficiency',
      'Lower energy costs',
      'Fewer breakdowns',
      'Extended system life',
      'Better indoor air quality',
    ],
    process: [
      { step: 1, title: 'Cooling System', description: 'We inspect and service all AC components.' },
      { step: 2, title: 'Heating System', description: 'We inspect and service all heating components.' },
      { step: 3, title: 'Ductwork Check', description: 'We inspect visible ductwork for leaks or damage.' },
      { step: 4, title: 'Thermostat Service', description: 'We calibrate and test thermostat operation.' },
      { step: 5, title: 'Report', description: 'You receive a complete report with recommendations.' },
    ],
    faqs: [
      {
        question: 'What is included in an HVAC tune-up in West Valley?',
        answer: 'Our HVAC tune-up includes complete inspection of both AC and heating systems, coil cleaning, filter replacement, refrigerant check, electrical inspection, and thermostat calibration.',
      },
      {
        question: 'How often should I get an HVAC tune-up in Arizona?',
        answer: 'We recommend a complete HVAC tune-up at least once per year in West Valley, ideally in spring before the intense cooling season begins.',
      },
      {
        question: 'Can a tune-up improve my HVAC efficiency in West Valley?',
        answer: 'Yes, a professional tune-up can improve HVAC efficiency by 10-30%. Dirty coils, low refrigerant, and other issues force your system to work harder and use more energy.',
      },
      {
        question: 'How much does an HVAC tune-up cost in West Valley?',
        answer: 'A complete HVAC tune-up in West Valley costs $129-$199 and covers both your cooling and heating systems. This is a great value compared to separate services.',
      },
      {
        question: 'What if you find problems during my HVAC tune-up?',
        answer: 'If we find issues during your tune-up, we\'ll explain the problem and provide a written quote. You decide whether to proceed—there\'s no pressure.',
      },
    ],
    relatedServices: ['ac-maintenance', 'ac-repair', 'heating-repair'],
    metaTitle: 'HVAC Tune-Up West Valley AZ | AC & Heating Service | Air Conditioning Champ',
    metaDescription: 'Complete HVAC tune-up in West Valley Arizona. AC and heating inspection, cleaning, and service from $129. Improve efficiency and prevent breakdowns.',
    keyTakeaways: [
      'Complete HVAC tune-up covering AC and heating from $129-$199',
      'Improves system efficiency by 10-30% and prevents costly breakdowns',
      'Includes coil cleaning, refrigerant check, filter replacement, and safety inspection',
    ],
  },
  {
    slug: 'emergency-service',
    name: 'Emergency Service',
    shortName: 'Emergency',
    icon: 'AlertTriangle',
    shortDescription: '24/7 emergency HVAC service for urgent AC and heating problems.',
    longDescription: `HVAC emergencies don't wait for business hours, and neither do we. Air Conditioning Champ provides 24/7 emergency service throughout West Valley Arizona. When your AC fails in the summer heat or your heater stops on a cold night, our technicians are ready to respond fast and restore your comfort.`,
    pricing: {
      min: 89,
      max: 500,
      unit: 'emergency service',
      note: 'No overtime charges',
    },
    pricingTable: [
      { service: 'Emergency Diagnostic', priceRange: '$89', duration: '30-45 min' },
      { service: 'After-Hours Service', priceRange: 'Same as regular', duration: 'Varies' },
      { service: 'Weekend/Holiday Service', priceRange: 'Same as regular', duration: 'Varies' },
      { service: 'Emergency Capacitor', priceRange: '$150-$250', duration: '30-45 min' },
      { service: 'Emergency Refrigerant', priceRange: '$200-$400', duration: '1-2 hours' },
    ],
    duration: '1-3 hours',
    features: [
      'Available 24/7/365',
      'No overtime charges',
      'Fast response times',
      'All emergencies handled',
      'Fully-stocked trucks',
      'Licensed technicians',
    ],
    benefits: [
      '1-2 hour response time',
      'Same rates day or night',
      'Most repairs completed same visit',
      'Peace of mind',
    ],
    process: [
      { step: 1, title: 'Call Anytime', description: 'Our dispatch team is available 24/7 to take your call.' },
      { step: 2, title: 'Fast Dispatch', description: 'We dispatch the nearest available technician immediately.' },
      { step: 3, title: 'Quick Response', description: 'Our technician arrives within 1-2 hours in most cases.' },
      { step: 4, title: 'Rapid Diagnosis', description: 'We quickly identify the problem and provide a quote.' },
      { step: 5, title: 'Same-Visit Repair', description: 'Most emergencies are resolved on the first visit.' },
    ],
    faqs: [
      {
        question: 'Do you charge extra for emergency service in West Valley?',
        answer: 'No, we do not charge overtime or extra fees for nights, weekends, or holidays. Our emergency rates are the same as our regular rates throughout West Valley.',
      },
      {
        question: 'How fast can you respond to an HVAC emergency in West Valley?',
        answer: 'Our typical response time for HVAC emergencies in West Valley is 1-2 hours. We prioritize emergencies and dispatch the nearest available technician.',
      },
      {
        question: 'What counts as an HVAC emergency in West Valley?',
        answer: 'An HVAC emergency includes complete AC failure in extreme heat, no heat during cold weather, gas smell or leak, unusual burning smells, or carbon monoxide detector alerts.',
      },
      {
        question: 'Are you available on holidays in West Valley?',
        answer: 'Yes, we provide 24/7 emergency service 365 days a year in West Valley, including all holidays. HVAC emergencies happen any day, and we\'re always ready.',
      },
      {
        question: 'What should I do while waiting for emergency service in West Valley?',
        answer: 'For AC failure, close blinds and avoid using heat-generating appliances. For heating issues, use space heaters safely. For gas smells, evacuate and call us from outside.',
      },
    ],
    relatedServices: ['ac-repair', 'heating-repair', 'ac-maintenance'],
    metaTitle: '24/7 Emergency HVAC Service West Valley AZ | Air Conditioning Champ',
    metaDescription: '24/7 emergency AC and heating repair in West Valley Arizona. No overtime charges, 1-2 hour response. Call now for emergency HVAC service.',
    keyTakeaways: [
      '24/7 emergency HVAC service with no overtime or after-hours charges',
      '1-2 hour average response time throughout West Valley Arizona',
      'Most emergency repairs completed on the first visit with upfront pricing',
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((service) => service.slug);
}

export function getRelatedServices(currentSlug: string): Service[] {
  const current = getServiceBySlug(currentSlug);
  if (!current) return [];

  return current.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter((service): service is Service => service !== undefined);
}
