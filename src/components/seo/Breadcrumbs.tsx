import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { Container } from '@/components/ui/Container';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 py-3">
      <Container>
        <ol className="flex items-center flex-wrap gap-2 text-sm">
          <li>
            <Link href="/" className="text-gray-500 hover:text-primary-600 transition-colors">
              <Home size={16} />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight size={14} className="text-gray-400" />
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-gray-500 hover:text-primary-600 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}
