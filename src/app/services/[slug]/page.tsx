import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { KeyTakeaways } from '@/components/sections/KeyTakeaways';
import { PricingTable } from '@/components/sections/PricingTable';
import { FAQ } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTASection';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Card } from '@/components/ui/Card';
import { COMPANY } from '@/lib/data/company';
import { SERVICES, getServiceBySlug, getRelatedServices } from '@/lib/data/services';
import { LOCATIONS } from '@/lib/data/locations';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema/generators';
import { CheckCircle } from 'lucide-react';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `${COMPANY.url}/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(slug);
  const serviceSchema = generateServiceSchema(service, LOCATIONS);
  const faqSchema = generateFAQSchema(service.faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: COMPANY.url },
    { name: 'Services', url: `${COMPANY.url}/services` },
    { name: service.name, url: `${COMPANY.url}/services/${service.slug}` },
  ]);

  return (
    <>
      <JsonLd data={[serviceSchema, faqSchema, breadcrumbSchema].filter(Boolean)} />

      <Breadcrumbs
        items={[
          { label: 'Services', href: '/services' },
          { label: service.name },
        ]}
      />

      <Hero
        title={`${service.name} in West Valley, AZ`}
        subtitle={service.shortDescription}
        backgroundImage="/service_page_optimized.webp"
      />

      <section className="py-12">
        <Container>
          <KeyTakeaways items={service.keyTakeaways} />

          <div className="prose max-w-none">
            <p className="text-lg">
              {service.longDescription.split('.')[0]}.{' '}
              <Link href="/" className="text-primary-600 hover:text-primary-700 font-medium">
                {COMPANY.name}
              </Link>{' '}
              {service.longDescription.split('.').slice(1).join('.')}
            </p>
          </div>

          {/* Service Process */}
          <div className="my-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our {service.name} Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {service.process.map((step) => (
                <Card key={step.step} variant="bordered" padding="md" className="text-center">
                  <div className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Pricing Table */}
          <PricingTable
            items={service.pricingTable}
            title={`${service.name} Pricing in West Valley`}
            note={service.pricing.note}
          />

          {/* Features & Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Service Features</h2>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-primary-600 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Benefits</h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-primary-600 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <FAQ items={service.faqs} title={`Frequently Asked Questions About ${service.name}`} />

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <div className="my-12">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Related Services</h2>
              <div className="flex flex-wrap gap-4">
                {relatedServices.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/services/${related.slug}`}
                    className="bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 px-4 py-2 rounded-lg transition-colors"
                  >
                    {related.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Service Areas */}
          <div className="my-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {service.name} Service Areas in West Valley
            </h2>
            <p className="text-gray-600 mb-4">
              We provide {service.name.toLowerCase()} services throughout the West Valley area. Our technicians serve homeowners in{' '}
              {LOCATIONS.slice(0, 3).map((loc, i) => (
                <span key={loc.slug}>
                  <Link href={`/locations/${loc.slug}`} className="text-primary-600 hover:text-primary-700">
                    {loc.city}
                  </Link>
                  {i < 2 ? ', ' : ''}
                </span>
              ))}{' '}
              and all surrounding communities.
            </p>
            <div className="flex flex-wrap gap-2">
              {LOCATIONS.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="text-sm bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-700 px-3 py-1 rounded-full transition-colors"
                >
                  {location.city}, {location.state}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title={`Need ${service.name}? Call Now!`}
        description={`Our expert technicians are standing by to help with your ${service.name.toLowerCase()} needs. Fast response, upfront pricing, and quality work guaranteed.`}
      />
    </>
  );
}
