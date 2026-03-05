import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Thermometer, Clock, Phone, Building } from 'lucide-react';
import { Hero } from '@/components/sections/Hero';
import { KeyTakeaways } from '@/components/sections/KeyTakeaways';
import { FAQ } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTASection';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Card } from '@/components/ui/Card';
import { COMPANY } from '@/lib/data/company';
import { SERVICES } from '@/lib/data/services';
import { LOCATIONS, getLocationBySlug, getNearbyLocations } from '@/lib/data/locations';
import { generateLocationSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema/generators';
import { getPhoneForLocation, getAddressForLocation, formatAddress, getGoogleMapsEmbed } from '@/lib/utils/location-helpers';

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return LOCATIONS.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return { title: 'Location Not Found' };
  }

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: {
      canonical: `${COMPANY.url}/locations/${location.slug}`,
    },
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const nearbyLocations = getNearbyLocations(slug);
  const locationSchema = generateLocationSchema(location);
  const faqSchema = generateFAQSchema(location.faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: COMPANY.url },
    { name: 'Service Areas', url: `${COMPANY.url}/locations` },
    { name: location.city, url: `${COMPANY.url}/locations/${location.slug}` },
  ]);

  // Get location-specific phone and address
  const { phone, phoneRaw } = getPhoneForLocation(location);
  const address = getAddressForLocation(location);
  const mapsEmbed = getGoogleMapsEmbed(location);

  return (
    <>
      <JsonLd data={[locationSchema, faqSchema, breadcrumbSchema].filter(Boolean)} />

      <Breadcrumbs
        items={[
          { label: 'Service Areas', href: '/locations' },
          { label: location.city },
        ]}
      />

      <Hero
        title={`${location.city} Air Conditioning Services`}
        subtitle={`Expert AC repair, installation, and maintenance in ${location.city}, ${location.stateFullName}. Fast response, upfront pricing, and quality service.`}
        backgroundImage="/location_page_optimized.webp"
        phone={phone}
        phoneRaw={phoneRaw}
      />

      <section className="py-12">
        <Container>
          <KeyTakeaways items={location.keyTakeaways} />

          {/* First paragraph with UP link to hub */}
          <div className="prose max-w-none">
            <p className="text-lg">
              <Link href="/" className="text-primary-600 hover:text-primary-700 font-medium">
                {COMPANY.name}
              </Link>{' '}
              is proud to serve {location.city}, {location.stateFullName} with comprehensive HVAC services.
              As a trusted{' '}
              <Link href="/" className="text-primary-600 hover:text-primary-700">
                local HVAC contractor
              </Link>
              , we provide fast, reliable service to all {location.city} neighborhoods including{' '}
              {location.neighborhoods.slice(0, 3).join(', ')}, and surrounding areas.
              Our licensed technicians offer 24/7{' '}
              <Link href="/services/emergency-service" className="text-primary-600 hover:text-primary-700">
                emergency service
              </Link>{' '}
              with typical response times of just {COMPANY.stats.responseTime}.
            </p>
          </div>

          {/* Location Contact Info (for GBP locations) */}
          {location.hasGBP && address && (
            <div className="mt-8 bg-primary-50 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 text-primary-600 p-3 rounded-lg">
                    <Building size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{location.city} Location</h3>
                    <p className="text-gray-600">{formatAddress(address)}</p>
                  </div>
                </div>
                <a
                  href={`tel:${phoneRaw}`}
                  className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  <Phone size={20} />
                  {phone}
                </a>
              </div>
            </div>
          )}

          {/* Google Business Listing Map */}
          {mapsEmbed && (
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={mapsEmbed}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Air Conditioning Champ ${location.city} Location`}
              ></iframe>
            </div>
          )}

          {/* Services in this area - ACROSS links */}
          <div className="my-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">HVAC Services in {location.city}</h2>
            <p className="text-gray-600 mb-6">
              We offer complete heating and cooling services for {location.city} homes and businesses.
              Whether you need emergency{' '}
              <Link href="/services/ac-repair" className="text-primary-600 hover:text-primary-700">AC repair</Link>,
              a new{' '}
              <Link href="/services/ac-installation" className="text-primary-600 hover:text-primary-700">AC installation</Link>,
              or routine{' '}
              <Link href="/services/ac-maintenance" className="text-primary-600 hover:text-primary-700">maintenance</Link>,
              our team is ready to help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-500 hover:shadow-md transition-all"
                >
                  <div className="bg-primary-100 text-primary-600 p-2 rounded-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 block">{service.name}</span>
                    <span className="text-sm text-gray-500">From ${service.pricing.min}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Local Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <Card variant="bordered" padding="lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary-100 text-primary-600 p-2 rounded-lg">
                  <Thermometer size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{location.city} Climate & Your AC</h3>
              </div>
              <p className="text-gray-600">{location.climateNotes}</p>
            </Card>

            <Card variant="bordered" padding="lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary-100 text-primary-600 p-2 rounded-lg">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">About {location.city}</h3>
              </div>
              <p className="text-gray-600">{location.localInfo}</p>
            </Card>
          </div>

          {location.mapEmbed && (
            <div className="my-12 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={location.mapEmbed}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${location.city} Service Area Map`}
              ></iframe>
            </div>
          )}

          {/* Neighborhoods & Service Areas */}
          <div className="my-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{location.city} Neighborhoods We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
              {location.neighborhoods.map((neighborhood, index) => (
                <div key={index} className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700">
                  {neighborhood}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">ZIP Codes</h3>
                <p className="text-gray-600">{location.zipCodes.join(', ')}</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Major Roads</h3>
                <p className="text-gray-600">{location.majorRoads.join(' • ')}</p>
              </div>
            </div>
          </div>

          {/* Local Landmarks */}
          {location.landmarks.length > 0 && (
            <div className="my-12">
              <h2 className="text-xl font-bold text-gray-900 mb-4">{location.city} Landmarks & Areas</h2>
              <p className="text-gray-600">
                We serve all of {location.city} including areas near {location.landmarks.slice(0, 4).join(', ')},
                and everywhere in between. No matter where you are in {location.city}, we can get to you quickly.
              </p>
            </div>
          )}

          {/* FAQ Section */}
          <FAQ items={location.faqs} title={`Frequently Asked Questions - ${location.city} AC Service`} />

          {/* Nearby Areas - ACROSS links to neighbors only */}
          {nearbyLocations.length > 0 && (
            <div className="my-12">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Nearby Areas We Serve</h2>
              <p className="text-gray-600 mb-4">
                In addition to {location.city}, we also provide HVAC services to these neighboring communities:
              </p>
              <div className="flex flex-wrap gap-4">
                {nearbyLocations.map((nearby) => (
                  <Link
                    key={nearby.slug}
                    href={`/locations/${nearby.slug}`}
                    className="bg-white border border-gray-200 rounded-lg px-6 py-3 hover:border-primary-500 hover:shadow-md transition-all"
                  >
                    <span className="font-semibold text-gray-900">{nearby.city}</span>
                    <span className="text-sm text-gray-500 block">{nearby.state}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>

      <CTASection
        title={`Need AC Service in ${location.city}?`}
        description={`Our technicians are ready to help ${location.city} homeowners with all their HVAC needs. Call now for fast, reliable service!`}
        phone={phone}
        phoneRaw={phoneRaw}
      />
    </>
  );
}
