'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Phone, X } from 'lucide-react';
import { COMPANY } from '@/lib/data/company';
import { mainNavigation } from '@/lib/data/navigation';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const prevPathname = useRef<string | null>(null);

  // Close menu on route change (but not on initial mount)
  useEffect(() => {
    if (prevPathname.current && prevPathname.current !== pathname) {
      onClose();
    }
    prevPathname.current = pathname;
  }, [pathname, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Menu */}
      <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 lg:hidden shadow-xl overflow-y-auto">
        {/* Close button */}
        <div className="flex justify-end p-4 border-b">
          <button
            onClick={onClose}
            className="p-2 text-gray-700 hover:text-primary-600"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        
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
                          onClick={onClose}
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
                  onClick={onClose}
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
    </>
  );
}
