import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Hero } from '@/components/sections/Hero';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { COMPANY } from '@/lib/data/company';
import { generateContactPageSchema } from '@/lib/schema/generators';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Contact ${COMPANY.name} for AC repair and HVAC services. Call ${COMPANY.phone} for 24/7 emergency service or schedule online.`,
  alternates: {
    canonical: `${COMPANY.url}/contact`,
  },
};

export default function ContactPage() {
  const contactSchema = generateContactPageSchema();

  return (
    <>
      <JsonLd data={contactSchema} />

      <Breadcrumbs items={[{ label: 'Contact' }]} />

      <Hero
        title="Contact Air Conditioning Champ"
        subtitle="We're here to help with all your heating and cooling needs. Call us 24/7 or schedule service online."
        showCTAs={false}
      />

      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Need{' '}
                <Link href="/services/ac-repair" className="text-primary-600 hover:text-primary-700">
                  AC repair
                </Link>
                ,{' '}
                <Link href="/services/ac-installation" className="text-primary-600 hover:text-primary-700">
                  installation
                </Link>
                , or{' '}
                <Link href="/services/ac-maintenance" className="text-primary-600 hover:text-primary-700">
                  maintenance
                </Link>
                ? We&apos;re here to help! Reach out via phone, email, or fill out the form and we&apos;ll get back to you quickly.
              </p>

              <div className="space-y-6">
                <Card variant="bordered" padding="lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 text-primary-600 p-3 rounded-lg">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Phone (24/7)</h3>
                      <a
                        href={`tel:${COMPANY.phoneRaw}`}
                        className="text-xl text-primary-600 hover:text-primary-700 font-semibold"
                      >
                        {COMPANY.phone}
                      </a>
                      <p className="text-sm text-gray-500 mt-1">For fastest service, call us directly</p>
                    </div>
                  </div>
                </Card>

                <Card variant="bordered" padding="lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 text-primary-600 p-3 rounded-lg">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-primary-600 hover:text-primary-700"
                      >
                        {COMPANY.email}
                      </a>
                      <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                    </div>
                  </div>
                </Card>

                <Card variant="bordered" padding="lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 text-primary-600 p-3 rounded-lg">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Service Area</h3>
                      <p className="text-gray-700">{COMPANY.address.streetAddress}</p>
                      <p className="text-gray-700">
                        {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.postalCode}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">{COMPANY.serviceAreaDescription}</p>
                    </div>
                  </div>
                </Card>

                <Card variant="bordered" padding="lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 text-primary-600 p-3 rounded-lg">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Hours</h3>
                      <p className="text-gray-700 font-semibold">{COMPANY.hours.description}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Emergency service available 365 days a year
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Quote Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote</h2>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Service Areas Quick Links */}
      <section className="py-12 bg-gray-50">
        <Container>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Service Areas</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            We provide HVAC services across Arizona, California, Nevada, and Texas. Click your city for local information.
          </p>
          <div className="text-center">
            <Link href="/locations" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              View All Service Areas
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
