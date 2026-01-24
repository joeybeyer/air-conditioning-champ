import { Star } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';

const testimonials = [
  {
    quote: "Air Conditioning Champ saved us during a 115° heat wave. They arrived within an hour and had our AC running perfectly. Highly recommend!",
    author: "Sarah M.",
    location: "Surprise, AZ",
    rating: 5,
  },
  {
    quote: "Professional, honest, and affordable. They explained everything clearly and didn't try to upsell me. I'll definitely use them again.",
    author: "Robert K.",
    location: "Peoria, AZ",
    rating: 5,
  },
  {
    quote: "Best AC service around! They installed our new system and it's running great. The financing made it affordable too.",
    author: "Jennifer L.",
    location: "Glendale, AZ",
    rating: 5,
  },
  {
    quote: "Fast response, fair prices, and quality work. Our maintenance plan has kept our AC running perfectly for 3 years now.",
    author: "David S.",
    location: "Goodyear, AZ",
    rating: 5,
  },
  {
    quote: "As a senior on a fixed income, I appreciate their honest assessments. They fixed my AC without pushing a replacement.",
    author: "Margaret H.",
    location: "Sun City, AZ",
    rating: 5,
  },
  {
    quote: "Emergency service at 2am with no extra charges. They're the real deal. Everyone in Buckeye should know about them.",
    author: "Michael T.",
    location: "Buckeye, AZ",
    rating: 5,
  },
];

interface TestimonialsProps {
  title?: string;
  limit?: number;
}

export function Testimonials({ title = 'What Our Customers Say', limit }: TestimonialsProps) {
  const displayTestimonials = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <section className="py-12 md:py-16">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayTestimonials.map((testimonial, index) => (
            <Card key={index} variant="bordered" padding="lg">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-gray-600 mb-4 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="font-semibold text-gray-900">{testimonial.author}</div>
              <div className="text-sm text-gray-500">{testimonial.location}</div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
