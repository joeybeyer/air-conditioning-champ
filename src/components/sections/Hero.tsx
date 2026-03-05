import Image from 'next/image';
import { Phone, Calendar } from 'lucide-react';
import { COMPANY } from '@/lib/data/company';
import { Container } from '@/components/ui/Container';

interface HeroProps {
  title: string;
  subtitle: string;
  showCTAs?: boolean;
  backgroundImage?: string;
  phone?: string;      // Optional local phone for location pages
  phoneRaw?: string;   // Optional local phone raw for tel: links
}

export function Hero({
  title,
  subtitle,
  showCTAs = true,
  backgroundImage = '/hero_image_optimized.webp',
  phone,
  phoneRaw,
}: HeroProps) {
  // Use local phone if provided, otherwise fall back to company phone
  const displayPhone = phone || COMPANY.phone;
  const displayPhoneRaw = phoneRaw || COMPANY.phoneRaw;
  return (
    <section className="relative bg-secondary-900 text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="HVAC service"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/60 to-secondary-900/30" />
      </div>

      <Container>
        <div className="relative py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              {subtitle}
            </p>

            {showCTAs && (
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${displayPhoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors"
                >
                  <Phone size={22} />
                  Call {displayPhone}
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-secondary-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
                >
                  <Calendar size={22} />
                  Schedule Service
                </a>
              </div>
            )}

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <span className="text-primary-400">✓</span> {COMPANY.licenses.type}
              </span>
              <span className="flex items-center gap-2">
                <span className="text-primary-400">✓</span> {COMPANY.stats.fiveStarReviews} 5-Star Reviews
              </span>
              <span className="flex items-center gap-2">
                <span className="text-primary-400">✓</span> {COMPANY.stats.responseTime} Response
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
