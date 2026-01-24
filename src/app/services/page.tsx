import { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { ServiceGrid } from '@/components/sections/ServiceCard';
import { CTASection } from '@/components/sections/CTASection';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { COMPANY } from '@/lib/data/company';
import { SERVICES } from '@/lib/data/services';

export const metadata: Metadata = {
  title: 'HVAC Services',
  description: `${COMPANY.name} offers complete HVAC services including AC repair, installation, maintenance, heating repair, and 24/7 emergency service. Call ${COMPANY.phone}!`,
  alternates: {
    canonical: `${COMPANY.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Services' }]} />

      <Hero
        title="Our HVAC Services"
        subtitle="Complete heating and cooling solutions for your home. From emergency repairs to new installations, our licensed technicians handle it all."
        showCTAs={true}
      />

      <section className="py-12">
        <Container>
          <div className="prose max-w-none mb-12">
            <p className="text-lg">
              <strong>{COMPANY.name}</strong> provides comprehensive{' '}
              <Link href="/" className="text-primary-600 hover:text-primary-700 font-medium">
                HVAC services
              </Link>{' '}
              across Arizona, California, Nevada, and Texas. Whether you need emergency{' '}
              <Link href="/services/ac-repair" className="text-primary-600 hover:text-primary-700">AC repair</Link>,
              a complete{' '}
              <Link href="/services/ac-installation" className="text-primary-600 hover:text-primary-700">system installation</Link>,
              or routine{' '}
              <Link href="/services/ac-maintenance" className="text-primary-600 hover:text-primary-700">maintenance</Link>,
              our team of licensed technicians is ready to help.
            </p>
          </div>

          <ServiceGrid services={SERVICES} />
        </Container>
      </section>

      <section className="py-12 bg-gray-50">
        <Container>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Service Pricing Overview</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Service</th>
                  <th className="px-4 py-3 text-left font-semibold">Starting Price</th>
                  <th className="px-4 py-3 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {SERVICES.map((service, index) => (
                  <tr
                    key={service.slug}
                    className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="px-4 py-3">
                      <Link
                        href={`/services/${service.slug}`}
                        className="font-medium text-primary-600 hover:text-primary-700"
                      >
                        {service.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 font-semibold">${service.pricing.min}</td>
                    <td className="px-4 py-3 text-gray-600">{service.shortDescription}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
