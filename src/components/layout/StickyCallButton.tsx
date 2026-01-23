'use client';

import { Phone } from 'lucide-react';
import { COMPANY } from '@/lib/data/company';

export function StickyCallButton() {
  return (
    <a
      href={`tel:${COMPANY.phoneRaw}`}
      className="fixed bottom-4 right-4 z-50 lg:hidden flex items-center gap-2 bg-primary-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-primary-700 transition-colors"
      aria-label="Call Now"
    >
      <Phone size={20} />
      <span className="font-semibold">Call Now</span>
    </a>
  );
}
