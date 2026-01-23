'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Phone } from 'lucide-react';
import { COMPANY } from '@/lib/data/company';
import { mainNavigation } from '@/lib/data/navigation';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  // Close menu on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-white border-t">
      <div className="px-4 py-4 space-y-4">
        {mainNavigation.map((item) => (
          <div key={item.label}>
            {item.children ? (
              <>
                <button
                  onClick={() => toggleExpanded(item.label)}
                  className="flex items-center justify-between w-full font-semibold text-gray-900 py-2"
                >
                  {item.label}
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${
                      expandedItems.includes(item.label) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedItems.includes(item.label) && (
                  <div className="pl-4 space-y-2 mt-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block text-gray-700 hover:text-primary-600 py-1"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href}
                className="block font-semibold text-gray-900 py-2 hover:text-primary-600"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}

        {/* Mobile CTA */}
        <a
          href={`tel:${COMPANY.phoneRaw}`}
          className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors w-full mt-4"
        >
          <Phone size={18} />
          Call Now - {COMPANY.phone}
        </a>
      </div>
    </div>
  );
}
