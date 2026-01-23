import Link from 'next/link';
import { ArrowRight, Wrench, PlusCircle, Settings, Flame, Gauge, AlertTriangle } from 'lucide-react';
import { Service } from '@/lib/data/services';
import { Card, CardContent } from '@/components/ui/Card';

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  PlusCircle,
  Settings,
  Flame,
  Gauge,
  AlertTriangle,
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Wrench;

  return (
    <Card variant="bordered" padding="lg" className="group hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="bg-primary-100 text-primary-600 p-3 rounded-lg group-hover:bg-primary-600 group-hover:text-white transition-colors">
          <Icon size={28} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
          <CardContent className="mb-4">
            <p className="line-clamp-2">{service.shortDescription}</p>
          </CardContent>
          <div className="flex items-center justify-between">
            <span className="text-primary-600 font-semibold">
              From ${service.pricing.min}
            </span>
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-1 text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              Learn More
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}

interface ServiceGridProps {
  services: Service[];
}

export function ServiceGrid({ services }: ServiceGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  );
}
