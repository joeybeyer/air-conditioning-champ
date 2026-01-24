import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { Hero } from '@/components/sections/Hero';
import { CTASection } from '@/components/sections/CTASection';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { COMPANY } from '@/lib/data/company';
import { LOCATIONS } from '@/lib/data/locations';

export const metadata: Metadata = {
  title: 'Service Areas | Arizona, California, Nevada, Texas',
  description: `${COMPANY.name} provides HVAC services across Arizona, California, Nevada, and Texas. Find your local service area and call ${COMPANY.phone} for fast service!`,
  alternates: {
    canonical: `${COMPANY.url}/locations`,
  },
};

export default function LocationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Service Areas' }]} />

      <Hero
        title="Our Service Areas"
        subtitle="Providing expert HVAC services across Arizona, California, Nevada, and Texas. Fast response times and quality service in every community we serve."
        backgroundImage="/location_page_optimized.webp"
      />

      <section className="py-12">
        <Container>
          <div className="prose max-w-none mb-12">
            <p className="text-lg">
              <Link href="/" className="text-primary-600 hover:text-primary-700 font-medium">
                {COMPANY.name}
              </Link>{' '}
              proudly serves homeowners across Arizona, California, Nevada, and Texas. Our team provides fast, reliable{' '}
              <Link href="/services/ac-repair" className="text-primary-600 hover:text-primary-700">AC repair</Link>,{' '}
              <Link href="/services/ac-installation" className="text-primary-600 hover:text-primary-700">installation</Link>,
              and{' '}
              <Link href="/services/ac-maintenance" className="text-primary-600 hover:text-primary-700">maintenance</Link>{' '}
              services. Our technicians understand the unique HVAC challenges of each region we serve.
            </p>
          </div>

          {/* Arizona */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Arizona</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LOCATIONS.filter(loc => loc.state === 'AZ').map((location) => (
                <Card key={location.slug} variant="bordered" padding="lg" className="hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 text-primary-600 p-3 rounded-lg">
                      <MapPin size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        <Link
                          href={`/locations/${location.slug}`}
                          className="hover:text-primary-600 transition-colors"
                        >
                          {location.city}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        ZIP: {location.zipCodes.slice(0, 2).join(', ')}{location.zipCodes.length > 2 ? '...' : ''}
                      </p>
                      <Link
                        href={`/locations/${location.slug}`}
                        className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                      >
                        View Services →
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* California */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">California</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LOCATIONS.filter(loc => loc.state === 'CA').map((location) => (
                <Card key={location.slug} variant="bordered" padding="lg" className="hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 text-primary-600 p-3 rounded-lg">
                      <MapPin size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        <Link
                          href={`/locations/${location.slug}`}
                          className="hover:text-primary-600 transition-colors"
                        >
                          {location.city}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        ZIP: {location.zipCodes.slice(0, 2).join(', ')}{location.zipCodes.length > 2 ? '...' : ''}
                      </p>
                      <Link
                        href={`/locations/${location.slug}`}
                        className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                      >
                        View Services →
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Nevada */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nevada</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LOCATIONS.filter(loc => loc.state === 'NV').map((location) => (
                <Card key={location.slug} variant="bordered" padding="lg" className="hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 text-primary-600 p-3 rounded-lg">
                      <MapPin size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        <Link
                          href={`/locations/${location.slug}`}
                          className="hover:text-primary-600 transition-colors"
                        >
                          {location.city}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        ZIP: {location.zipCodes.slice(0, 2).join(', ')}{location.zipCodes.length > 2 ? '...' : ''}
                      </p>
                      <Link
                        href={`/locations/${location.slug}`}
                        className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                      >
                        View Services →
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Texas */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Texas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LOCATIONS.filter(loc => loc.state === 'TX').map((location) => (
                <Card key={location.slug} variant="bordered" padding="lg" className="hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 text-primary-600 p-3 rounded-lg">
                      <MapPin size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        <Link
                          href={`/locations/${location.slug}`}
                          className="hover:text-primary-600 transition-colors"
                        >
                          {location.city}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        ZIP: {location.zipCodes.slice(0, 2).join(', ')}{location.zipCodes.length > 2 ? '...' : ''}
                      </p>
                      <Link
                        href={`/locations/${location.slug}`}
                        className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                      >
                        View Services →
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 bg-gray-50">
        <Container>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Coverage by ZIP Code</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Location</th>
                  <th className="px-4 py-3 text-left font-semibold">ZIP Codes</th>
                  <th className="px-4 py-3 text-left font-semibold">Key Areas</th>
                </tr>
              </thead>
              <tbody>
                {['AZ', 'CA', 'NV', 'TX'].map(state => (
                  LOCATIONS.filter(loc => loc.state === state).map((location, index) => (
                    <tr
                      key={location.slug}
                      className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                    >
                      <td className="px-4 py-3">
                        <Link
                          href={`/locations/${location.slug}`}
                          className="font-medium text-primary-600 hover:text-primary-700"
                        >
                          {location.city}, {location.state}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{location.zipCodes.slice(0, 5).join(', ')}{location.zipCodes.length > 5 ? '...' : ''}</td>
                      <td className="px-4 py-3 text-gray-600">{location.neighborhoods.slice(0, 3).join(', ')}</td>
                    </tr>
                  ))
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
