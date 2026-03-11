'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { COMPANY } from '@/lib/data/company';
import { mainNavigation } from '@/lib/data/navigation';
import { Container } from '@/components/ui/Container';
import { MobileNav } from './MobileNav';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary-600 text-white py-2">
        <Container>
          <div className="flex justify-center items-center text-sm">
            <div className="flex items-center gap-4">
              <span className="hidden md:inline">{COMPANY.tagline}</span>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-center gap-2 font-semibold hover:text-primary-100 transition-colors"
              >
                <Phone size={16} />
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main nav */}
      <nav>
        <Container>
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/air_conditioning_champ_logo.png"
                alt={COMPANY.name}
                width={280}
                height={84}
                className="h-20 w-auto"
                priority
              />
            </Link>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {mainNavigation.map((item) => (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    <>
                      <button className="flex items-center gap-1 text-gray-700 hover:text-primary-600 font-medium py-2">
                        {item.label}
                        <ChevronDown size={16} />
                      </button>
                      <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="bg-white shadow-lg rounded-lg border border-gray-100 py-2 min-w-[220px]">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2 hover:bg-primary-50 text-gray-700 hover:text-primary-600"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-primary-600 font-medium"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="hidden lg:flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              <Phone size={18} />
              Call Now
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={handleMenuToggle}
              onTouchEnd={(e) => {
                e.stopPropagation();
              }}
              className="lg:hidden text-gray-700 p-2 relative z-[60]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile navigation */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
