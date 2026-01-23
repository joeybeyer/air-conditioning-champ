import Link from 'next/link';
import { Home, Phone, Search } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { COMPANY } from '@/lib/data/company';

export default function NotFound() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or deleted.
            Let us help you find what you need.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button href="/" variant="primary" size="lg">
              <Home size={20} className="mr-2" />
              Go Home
            </Button>
            <Button href={`tel:${COMPANY.phoneRaw}`} variant="outline" size="lg">
              <Phone size={20} className="mr-2" />
              Call Us
            </Button>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="font-bold text-gray-900 mb-4">Looking for something specific?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Popular Services</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/services/ac-repair" className="text-primary-600 hover:text-primary-700">
                      AC Repair
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/ac-installation" className="text-primary-600 hover:text-primary-700">
                      AC Installation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/emergency-service" className="text-primary-600 hover:text-primary-700">
                      Emergency Service
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Service Areas</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/locations/surprise-az" className="text-primary-600 hover:text-primary-700">
                      Surprise, AZ
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/peoria-az" className="text-primary-600 hover:text-primary-700">
                      Peoria, AZ
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations" className="text-primary-600 hover:text-primary-700">
                      All Service Areas
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
