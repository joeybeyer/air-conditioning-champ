import Link from 'next/link';
import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { KeyTakeaways } from '@/components/sections/KeyTakeaways';
import { ServiceGrid } from '@/components/sections/ServiceCard';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTASection';
import { Container } from '@/components/ui/Container';
import { JsonLd } from '@/components/seo/JsonLd';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { COMPANY } from '@/lib/data/company';
import { SERVICES } from '@/lib/data/services';
import { LOCATIONS } from '@/lib/data/locations';
import { generateHVACBusinessSchema, generateFAQSchema } from '@/lib/schema/generators';

export const metadata: Metadata = {
  title: `Expert AC Repair & HVAC Services | ${COMPANY.name}`,
  description: `${COMPANY.name} provides 24/7 AC repair, installation, and maintenance across Arizona, California, Nevada, and Texas. Licensed technicians, upfront pricing. Call ${COMPANY.phone} for fast service!`,
  alternates: {
    canonical: COMPANY.url,
  },
};

const homeFAQs = [
  {
    question: 'How much does AC repair cost?',
    answer: 'AC repair typically costs between $89-$500 depending on the issue. Our diagnostic fee is $89 and is waived if you proceed with the repair. We provide upfront pricing before any work begins.',
  },
  {
    question: 'Do you offer 24/7 emergency AC service?',
    answer: 'Yes, we provide 24/7 emergency AC repair across all our service areas with no overtime charges. Our typical response time is 1-2 hours, even on nights, weekends, and holidays.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve communities across Arizona, California, Nevada, and Texas. Our locations include the Phoenix metro area, San Diego County, Orange County, Las Vegas, and San Antonio.',
  },
  {
    question: 'How often should I have my AC serviced?',
    answer: 'We recommend AC maintenance twice per year—once in spring before cooling season and once in fall. Regular maintenance prevents 80% of breakdowns and extends equipment life.',
  },
  {
    question: 'Do you offer financing for AC installation?',
    answer: 'Yes, we offer flexible financing options with approved credit, including 0% interest plans. New AC systems range from $4,500-$12,000 depending on size and efficiency.',
  },
];

export default function HomePage() {
  const hvacBusinessSchema = generateHVACBusinessSchema(LOCATIONS);
  const faqSchema = generateFAQSchema(homeFAQs);

  return (
    <>
      <JsonLd data={[hvacBusinessSchema, faqSchema].filter(Boolean)} />

      <Hero
        title="Your Local AC Experts"
        subtitle={`${COMPANY.name} provides fast, reliable air conditioning repair, installation, and maintenance across Arizona, California, Nevada, and Texas. Licensed technicians, upfront pricing, and 24/7 emergency service.`}
      />

      <section className="py-12">
        <Container>
          <KeyTakeaways
            items={[
              '24/7 emergency AC service with 1-2 hour response times across all service areas',
              'Licensed, bonded, and insured technicians with 90-day warranty on all repairs',
              `Serving ${LOCATIONS.length} locations across Arizona, California, Nevada, and Texas`,
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="prose max-w-none">
              <p className="text-lg">
                When temperatures soar and your AC breaks down, you need an{' '}
                <Link href="/services/ac-repair" className="text-primary-600 hover:text-primary-700 font-medium">
                  AC repair service
                </Link>{' '}
                you can trust. <strong>{COMPANY.name}</strong> has been keeping families comfortable since {COMPANY.founded}.
                Our team of licensed HVAC technicians provides fast, affordable service throughout{' '}
                <Link href="/locations" className="text-primary-600 hover:text-primary-700">Arizona</Link>,{' '}
                <Link href="/locations" className="text-primary-600 hover:text-primary-700">California</Link>,{' '}
                <Link href="/locations" className="text-primary-600 hover:text-primary-700">Nevada</Link>, and{' '}
                <Link href="/locations" className="text-primary-600 hover:text-primary-700">Texas</Link>.
              </p>
              <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Why Homeowners Choose Us</h2>
              <ul className="text-gray-600 space-y-2">
                <li><strong>24/7 Emergency Service</strong> - No overtime charges, even on holidays</li>
                <li><strong>Upfront Pricing</strong> - Know the cost before work begins</li>
                <li><strong>Licensed &amp; Insured</strong> - {COMPANY.licenses.type} licensed for your protection</li>
                <li><strong>Local Experts</strong> - We know your climate and AC needs</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 text-center lg:text-left">Get Your Free Quote</h2>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-gray-50">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
            Our HVAC Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From emergency repairs to new system installations, we handle all your heating and cooling needs with expertise and professionalism.
          </p>
          <ServiceGrid services={SERVICES} />
        </Container>
      </section>

      <WhyChooseUs />

      {/* Service Areas Section */}
      <section className="py-12">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
            Areas We Serve
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We provide comprehensive HVAC services across four states, with fast response times to all communities.
          </p>

          {/* Arizona */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Arizona</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {LOCATIONS.filter(loc => loc.state === 'AZ').map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-primary-500 hover:shadow-md transition-all"
                >
                  <span className="font-semibold text-gray-900">{location.city}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* California */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">California</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {LOCATIONS.filter(loc => loc.state === 'CA').map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-primary-500 hover:shadow-md transition-all"
                >
                  <span className="font-semibold text-gray-900">{location.city}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Nevada */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Nevada</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {LOCATIONS.filter(loc => loc.state === 'NV').map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-primary-500 hover:shadow-md transition-all"
                >
                  <span className="font-semibold text-gray-900">{location.city}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Texas */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Texas</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {LOCATIONS.filter(loc => loc.state === 'TX').map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-primary-500 hover:shadow-md transition-all"
                >
                  <span className="font-semibold text-gray-900">{location.city}</span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Testimonials limit={6} />

      <section className="py-12 bg-gray-50">
        <Container>
          <FAQ items={homeFAQs} title="Frequently Asked Questions About HVAC Service" />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
