import Link from 'next/link';
import { Phone, Mail, Clock, Facebook, Instagram, Building } from 'lucide-react';
import { COMPANY } from '@/lib/data/company';
import { footerNavigation } from '@/lib/data/navigation';
import { Container } from '@/components/ui/Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Main footer */}
      <div className="py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company info */}
            <div>
              <h3 className="text-xl font-bold mb-4">{COMPANY.name}</h3>
              <p className="text-gray-300 mb-4">{COMPANY.shortDescription}</p>
              <div className="space-y-3">
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone size={18} />
                  {COMPANY.phone}
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail size={18} />
                  {COMPANY.email}
                </a>
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock size={18} />
                  {COMPANY.hours.description}
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                {footerNavigation.services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
              <ul className="space-y-2">
                {footerNavigation.locations.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.label}, {item.state}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links & Social */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 mb-6">
                {footerNavigation.company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href={COMPANY.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href={COMPANY.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
              </div>

              <div className="mt-6 text-sm text-gray-400">
                <p>{COMPANY.licenses.type}</p>
                <p>{COMPANY.licenses.roc}</p>
              </div>
            </div>
          </div>

          {/* GBP Locations */}
          {footerNavigation.gbpLocations.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-700">
              <h3 className="text-lg font-semibold mb-6">Our Locations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {footerNavigation.gbpLocations.map((location) => (
                  <div key={location.href} className="text-sm">
                    <Link
                      href={location.href}
                      className="flex items-center gap-2 font-semibold text-white hover:text-primary-400 transition-colors mb-2"
                    >
                      <Building size={16} />
                      {location.city}, {location.state}
                    </Link>
                    {location.address && (
                      <p className="text-gray-400 text-xs mb-1">
                        {location.address.street}<br />
                        {location.address.city}, {location.address.state} {location.address.zip}
                      </p>
                    )}
                    {location.phone && (
                      <a
                        href={`tel:${location.phoneRaw}`}
                        className="text-gray-300 hover:text-white transition-colors text-xs"
                      >
                        {location.phone}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </Container>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 py-6">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} {COMPANY.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
