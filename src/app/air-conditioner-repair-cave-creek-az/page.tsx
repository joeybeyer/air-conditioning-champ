import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Clock, Shield, Award, MapPin, Wrench } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Hero } from '@/components/sections/Hero';
import { KeyTakeaways } from '@/components/sections/KeyTakeaways';
import { PricingTable } from '@/components/sections/PricingTable';
import { FAQ } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTASection';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { COMPANY } from '@/lib/data/company';

export const metadata: Metadata = {
  title: 'Air Conditioner Repair Cave Creek AZ | 24/7 AC Service | Air Conditioning Champ',
  description: 'Expert air conditioner repair in Cave Creek, AZ. 24/7 emergency AC service, same-day repairs, upfront pricing. Serving Cave Creek homes and custom properties. Call now!',
  openGraph: {
    title: 'Air Conditioner Repair Cave Creek AZ | Air Conditioning Champ',
    description: 'Expert air conditioner repair in Cave Creek, AZ. 24/7 emergency AC service, same-day repairs, upfront pricing.',
    type: 'website',
  },
};

const keyTakeaways = [
  'Same-day AC repair service in Cave Creek with 24/7 emergency availability',
  'Experienced with custom homes and unique desert property HVAC systems',
  'Upfront pricing starting at $89 diagnostic fee - waived with repair',
  'Licensed, bonded, and insured technicians serving all Cave Creek areas',
];

const pricingData = [
  { service: 'AC Diagnostic', priceRange: '$89', duration: 'Waived with repair' },
  { service: 'Capacitor Replacement', priceRange: '$150-$300', duration: 'Parts + labor' },
  { service: 'Refrigerant Recharge', priceRange: '$200-$400', duration: 'Depends on type/amount' },
  { service: 'Compressor Repair', priceRange: '$350-$800', duration: 'Major component' },
  { service: 'Full AC Repair', priceRange: '$89-$1,500', duration: 'Depends on issue' },
];

const faqs = [
  {
    question: 'How quickly can you get to Cave Creek for AC repair?',
    answer: 'We typically respond to Cave Creek AC emergencies within 1-2 hours. Our technicians serve the North Valley area and prioritize emergency calls, especially during extreme heat.',
  },
  {
    question: 'Do you repair all AC brands in Cave Creek?',
    answer: 'Yes, we service all major AC brands in Cave Creek including Trane, Carrier, Lennox, Rheem, Goodman, York, and more. Our technicians are trained on both residential and commercial systems.',
  },
  {
    question: 'How much does AC repair cost in Cave Creek, AZ?',
    answer: 'AC repair in Cave Creek typically ranges from $89-$500 for most common issues. Our diagnostic fee is $89 and is waived if you proceed with the repair. We provide upfront pricing before any work begins.',
  },
  {
    question: 'Do you offer emergency AC repair in Cave Creek?',
    answer: 'Yes, we provide 24/7 emergency AC repair in Cave Creek. When temperatures exceed 100°F, we understand that a broken AC is an emergency and respond accordingly.',
  },
  {
    question: 'Can you repair custom home AC systems in Cave Creek?',
    answer: 'Absolutely. Many Cave Creek homes have custom or oversized HVAC systems. Our technicians are experienced with complex installations, zoned systems, and unique configurations common in desert custom homes.',
  },
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  name: 'Air Conditioning Champ - Cave Creek AC Repair',
  image: `${COMPANY.url}/logo.png`,
  '@id': `${COMPANY.url}/air-conditioner-repair-cave-creek-az`,
  url: `${COMPANY.url}/air-conditioner-repair-cave-creek-az`,
  telephone: COMPANY.phoneRaw,
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY.address.streetAddress,
    addressLocality: COMPANY.address.city,
    addressRegion: COMPANY.address.state,
    postalCode: COMPANY.address.postalCode,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.8331,
    longitude: -111.9507,
  },
  areaServed: {
    '@type': 'City',
    name: 'Cave Creek',
    sameAs: 'https://en.wikipedia.org/wiki/Cave_Creek,_Arizona',
  },
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Air Conditioner Repair in Cave Creek, AZ',
  provider: {
    '@type': 'HVACBusiness',
    name: COMPANY.name,
    telephone: COMPANY.phoneRaw,
  },
  areaServed: {
    '@type': 'City',
    name: 'Cave Creek',
    addressRegion: 'AZ',
  },
  description: 'Professional air conditioner repair services in Cave Creek, Arizona. 24/7 emergency service, all brands, upfront pricing.',
  offers: {
    '@type': 'Offer',
    priceRange: '$89-$1500',
    priceCurrency: 'USD',
  },
};

const faqSchema = {
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

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'AC Repair Cave Creek' },
];

export default function CaveCreekACRepairPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema, serviceSchema, faqSchema]} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="Air Conditioner Repair in Cave Creek, AZ"
        subtitle="24/7 emergency AC repair for Cave Creek homes. Fast response, upfront pricing, all brands serviced. Your local HVAC experts."
      />

      <section className="py-8 md:py-12">
        <Container>
          <KeyTakeaways items={keyTakeaways} />

          <div className="prose max-w-none mt-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              When your air conditioner breaks down in Cave Creek, you need fast, reliable repair service.
              <Link href="/" className="text-primary-600 hover:text-primary-700"> Air Conditioning Champ</Link> provides
              expert AC repair throughout Cave Creek and the surrounding North Valley communities. Our licensed
              technicians respond quickly to emergency calls and provide upfront pricing on all{' '}
              <Link href="/services/ac-repair" className="text-primary-600 hover:text-primary-700">AC repair services</Link>.
            </p>
          </div>

          {/* Google Business Listing Map */}
          <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4915.191451865986!2d-111.94957099999999!3d33.8331057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b7fcbead6da35%3A0xe24fdad0b5bf6fb5!2sAir%20Conditioning%20Champ!5e1!3m2!1sen!2sus!4v1769201472240!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Air Conditioning Champ Cave Creek Location"
            ></iframe>
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-12 bg-gray-50">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Cave Creek AC Repair Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="bordered" padding="lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">24/7 Emergency Repair</h3>
                  <p className="text-gray-600 text-sm">Round-the-clock AC repair when you need it most. No extra charges for nights or weekends.</p>
                </div>
              </div>
            </Card>

            <Card variant="bordered" padding="lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <Wrench className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">All Brands Serviced</h3>
                  <p className="text-gray-600 text-sm">Trane, Carrier, Lennox, Rheem, Goodman, and all other major AC brands.</p>
                </div>
              </div>
            </Card>

            <Card variant="bordered" padding="lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <Shield className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
                  <p className="text-gray-600 text-sm">Fully licensed, bonded, and insured for your protection and peace of mind.</p>
                </div>
              </div>
            </Card>

            <Card variant="bordered" padding="lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Upfront Pricing</h3>
                  <p className="text-gray-600 text-sm">Know the cost before we start. No surprises, no hidden fees.</p>
                </div>
              </div>
            </Card>

            <Card variant="bordered" padding="lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Local Cave Creek Service</h3>
                  <p className="text-gray-600 text-sm">Fast response throughout Cave Creek, Carefree, and surrounding areas.</p>
                </div>
              </div>
            </Card>

            <Card variant="bordered" padding="lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Same-Day Service</h3>
                  <p className="text-gray-600 text-sm">Most repairs completed same-day. We stock common parts on our trucks.</p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-12">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Cave Creek AC Repair Pricing
          </h2>
          <PricingTable items={pricingData} />
          <p className="text-sm text-gray-500 mt-4">
            * Prices are estimates and may vary based on specific conditions. We provide exact quotes before starting work.
          </p>
        </Container>
      </section>

      <section className="py-8 md:py-12 bg-gray-50">
        <Container>
          <div className="prose max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Why Cave Creek Homeowners Trust Air Conditioning Champ
            </h2>
            <p className="text-gray-600 mb-4">
              Cave Creek&apos;s unique desert setting presents special challenges for air conditioning systems.
              From custom homes on large lots to properties near the Spur Cross Ranch Conservation Area,
              our technicians understand the local conditions that affect your AC performance.
            </p>
            <p className="text-gray-600 mb-4">
              The combination of intense summer heat, monsoon dust storms, and Cave Creek&apos;s higher elevation
              means your AC works hard. Our technicians are experienced with the high-end systems common in
              Cave Creek&apos;s custom homes, including zoned systems, variable-speed equipment, and smart home integration.
            </p>
            <p className="text-gray-600">
              Whether you&apos;re in town near Frontier Town or in the surrounding desert communities, we provide
              fast, professional AC repair service. Our upfront pricing and honest assessments have earned us
              the trust of Cave Creek homeowners for years.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-12">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions - Cave Creek AC Repair
          </h2>
          <FAQ items={faqs} />
        </Container>
      </section>

      <section className="py-8 md:py-12 bg-gray-50">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Cave Creek Areas We Serve
          </h2>
          <p className="text-gray-600 mb-4">
            We provide AC repair service throughout Cave Creek and surrounding areas including:
          </p>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 text-gray-600">
            <li>Cave Creek Town Center</li>
            <li>Rancho Manana</li>
            <li>Tatum Ranch</li>
            <li>Lone Mountain</li>
            <li>Black Mountain area</li>
            <li>Spur Cross area</li>
            <li>Carefree Highway corridor</li>
            <li>Cave Creek Road communities</li>
            <li>Dynamite Boulevard area</li>
          </ul>
        </Container>
      </section>

      <CTASection
        title="Need AC Repair in Cave Creek?"
        description="Call now for fast, professional service. Available 24/7 for emergencies."
      />
    </>
  );
}
