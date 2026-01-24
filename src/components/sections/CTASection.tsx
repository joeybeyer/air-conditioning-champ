import { Phone, Calendar } from 'lucide-react';
import { COMPANY } from '@/lib/data/company';
import { Container } from '@/components/ui/Container';

interface CTASectionProps {
  title?: string;
  description?: string;
  variant?: 'primary' | 'secondary';
  phone?: string;
  phoneRaw?: string;
}

export function CTASection({
  title = 'Ready for Reliable AC Service?',
  description = '24/7 Emergency Service Available • Same-Day Appointments • Upfront Pricing',
  variant = 'primary',
  phone = COMPANY.phone,
  phoneRaw = COMPANY.phoneRaw,
}: CTASectionProps) {
  const bgClass = variant === 'primary' ? 'bg-primary-600' : 'bg-secondary-900';

  return (
    <section className={`${bgClass} text-white py-12 md:py-16`}>
      <Container>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              <Phone size={22} />
              Call {phone}
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              <Calendar size={22} />
              Schedule Online
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
