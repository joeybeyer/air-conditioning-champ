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
  title: `Expert AC Repair & HVAC Services in West Valley AZ | ${COMPANY.name}`,
  description: `${COMPANY.name} provides 24/7 AC repair, installation, and maintenance in West Valley Arizona. Serving El Mirage, Surprise, Peoria, Glendale & more. Call ${COMPANY.phone} for fast service!`,
  alternates: {
    canonical: COMPANY.url,
  },
};

const homeFAQs = [
  {
    question: 'How much does AC repair cost in West Valley, AZ?',
    answer: 'AC repair in West Valley typically costs between $89-$500 depending on the issue. Our diagnostic fee is $89 and is waived if you proceed with the repair. We provide upfront pricing before any work begins.',
  },
  {
    question: 'Do you offer 24/7 emergency AC service in West Valley?',
    answer: 'Yes, we provide 24/7 emergency AC repair throughout West Valley Arizona with no overtime charges. Our typical response time is 1-2 hours, even on nights, weekends, and holidays.',
  },
  {
    question: 'What cities do you serve in the West Valley?',
    answer: 'We serve all of West Valley Arizona including El Mirage, Surprise, Peoria, Glendale, Goodyear, Avondale, Buckeye, Litchfield Park, Sun City, and Sun City West.',
  },
  {
    question: 'How often should I have my AC serviced in Arizona?',
    answer: 'In Arizona\'s extreme climate, we recommend AC maintenance twice per year—once in spring before cooling season and once in fall. Regular maintenance prevents 80% of breakdowns and extends equipment life.',
  },
  {
    question: 'Do you offer financing for AC installation in West Valley?',
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
        title="Expert AC Repair & HVAC Services in West Valley, AZ"
        subtitle={`${COMPANY.name} provides fast, reliable air conditioning repair, installation, and maintenance throughout West Valley Arizona. Licensed technicians, upfront pricing, and 24/7 emergency service.`}
      />

      <section className="py-12">
        <Container>
          <KeyTakeaways
            items={[
              '24/7 emergency AC service with 1-2 hour response times throughout West Valley Arizona',
              'Licensed, bonded, and insured technicians with 90-day warranty on all repairs',
              `Serving ${LOCATIONS.length} West Valley cities: El Mirage, Surprise, Peoria, Glendale, and more`,
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="prose max-w-none">
              <p className="text-lg">
                When Arizona temperatures soar above 110°F, you need an{' '}
                <Link href="/services/ac-repair" className="text-primary-600 hover:text-primary-700 font-medium">
                  AC repair service
                </Link>{' '}
                you can trust. <strong>{COMPANY.name}</strong> has been keeping West Valley families comfortable since {COMPANY.founded}.
                Our team of licensed HVAC technicians provides fast, affordable service throughout{' '}
                <Link href="/locations/el-mirage-az" className="text-primary-600 hover:text-primary-700">El Mirage</Link>,{' '}
                <Link href="/locations/surprise-az" className="text-primary-600 hover:text-primary-700">Surprise</Link>,{' '}
                <Link href="/locations/peoria-az" className="text-primary-600 hover:text-primary-700">Peoria</Link>,{' '}
                and all surrounding areas.
              </p>
              <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Why West Valley Chooses Us</h2>
              <ul className="text-gray-600 space-y-2">
                <li><strong>24/7 Emergency Service</strong> - No overtime charges, even on holidays</li>
                <li><strong>Upfront Pricing</strong> - Know the cost before work begins</li>
                <li><strong>Licensed &amp; Insured</strong> - {COMPANY.licenses.type} licensed for your protection</li>
                <li><strong>Local Experts</strong> - We know West Valley climate and AC needs</li>
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
            Our HVAC Services in West Valley, AZ
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
            West Valley Areas We Serve
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We provide comprehensive HVAC services throughout the West Valley, with fast response times to all communities.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {LOCATIONS.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-primary-500 hover:shadow-md transition-all"
              >
                <span className="font-semibold text-gray-900">{location.city}</span>
                <span className="block text-sm text-gray-500">{location.state}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Testimonials limit={6} />

      <section className="py-12 bg-gray-50">
        <Container>
          <FAQ items={homeFAQs} title="Frequently Asked Questions About HVAC Service in West Valley" />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
