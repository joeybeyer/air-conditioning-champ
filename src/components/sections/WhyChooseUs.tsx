import { Clock, Shield, DollarSign, Award, Users, Wrench } from 'lucide-react';
import { COMPANY } from '@/lib/data/company';
import { Container } from '@/components/ui/Container';

const features = [
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: `We're available around the clock for HVAC emergencies. Our typical response time is just ${COMPANY.stats.responseTime}.`,
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: `${COMPANY.licenses.type}. Your home and property are protected when you work with us.`,
  },
  {
    icon: DollarSign,
    title: 'Upfront Pricing',
    description: 'No hidden fees or surprises. We provide clear, written quotes before any work begins.',
  },
  {
    icon: Award,
    title: '90-Day Warranty',
    description: 'All repairs backed by our 90-day warranty. We stand behind our work with a satisfaction guarantee.',
  },
  {
    icon: Users,
    title: `${COMPANY.stats.customersServed} Served`,
    description: `We've helped thousands of West Valley families stay comfortable. Read our ${COMPANY.stats.fiveStarReviews} 5-star reviews.`,
  },
  {
    icon: Wrench,
    title: 'All Brands Serviced',
    description: `Our technicians are trained on all major brands including ${COMPANY.brands.slice(0, 4).join(', ')}, and more.`,
  },
];

interface WhyChooseUsProps {
  title?: string;
}

export function WhyChooseUs({ title = 'Why Choose Air Conditioning Champ?' }: WhyChooseUsProps) {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-primary-100 text-primary-600 p-3 rounded-lg flex-shrink-0">
                <feature.icon size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
