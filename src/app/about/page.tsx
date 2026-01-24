import { Metadata } from 'next';
import Link from 'next/link';
import { Award, Users, Clock, Shield, CheckCircle, Star } from 'lucide-react';
import { Hero } from '@/components/sections/Hero';
import { CTASection } from '@/components/sections/CTASection';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Card } from '@/components/ui/Card';
import { COMPANY } from '@/lib/data/company';
import { generateAboutPageSchema } from '@/lib/schema/generators';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${COMPANY.name}, your trusted HVAC contractor serving Arizona, California, Nevada, and Texas. ${COMPANY.stats.yearsInBusiness}+ years experience, ${COMPANY.stats.fiveStarReviews} 5-star reviews, licensed and insured.`,
  alternates: {
    canonical: `${COMPANY.url}/about`,
  },
};

const stats = [
  { icon: Clock, value: `${COMPANY.stats.yearsInBusiness}+`, label: 'Years in Business' },
  { icon: Users, value: COMPANY.stats.customersServed, label: 'Customers Served' },
  { icon: Star, value: COMPANY.stats.fiveStarReviews, label: '5-Star Reviews' },
  { icon: Award, value: '100%', label: 'Satisfaction Guarantee' },
];

export default function AboutPage() {
  const aboutSchema = generateAboutPageSchema();

  return (
    <>
      <JsonLd data={aboutSchema} />

      <Breadcrumbs items={[{ label: 'About Us' }]} />

      <Hero
        title={`About ${COMPANY.name}`}
        subtitle="Your trusted HVAC experts since 2020. Committed to quality, honesty, and keeping your family comfortable."
        showCTAs={false}
      />

      <section className="py-12">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} variant="elevated" padding="lg" className="text-center">
                <stat.icon className="mx-auto text-primary-600 mb-2" size={32} />
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="prose max-w-none">
            <p className="text-lg">
              <Link href="/" className="text-primary-600 hover:text-primary-700 font-medium">
                {COMPANY.name}
              </Link>{' '}
              was founded with a simple mission: provide honest, reliable HVAC service at fair prices.
              Based in {COMPANY.address.city}, Arizona, we&apos;ve grown to serve communities across
              Arizona, California, Nevada, and Texas.
            </p>

            <h2>Our Story</h2>
            <p>
              After years of working for large HVAC companies, our founders saw too many homeowners
              being overcharged or sold services they didn&apos;t need. We started {COMPANY.name} to do
              things differently—with transparency, expertise, and a commitment to doing what&apos;s right
              for our customers.
            </p>
            <p>
              Today, we serve thousands of families across{' '}
              <Link href="/locations">our service areas</Link> in Arizona, California, Nevada, and Texas.
              Our team of licensed technicians provides 24/7{' '}
              <Link href="/services/emergency-service">emergency service</Link>,{' '}
              <Link href="/services/ac-repair">AC repair</Link>,{' '}
              <Link href="/services/ac-installation">new system installations</Link>,
              and{' '}
              <Link href="/services/ac-maintenance">preventive maintenance</Link>.
            </p>

            <h2>Why Choose Us?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {COMPANY.guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-6">
                <div className="bg-primary-100 text-primary-600 p-2 rounded-lg">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{guarantee}</h3>
                  <p className="text-gray-600 text-sm">
                    We stand behind every job we do. Your satisfaction is our top priority.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="prose max-w-none">
            <h2>Our Commitment</h2>
            <p>
              Every technician on our team is licensed, insured, and background-checked. We invest
              in ongoing training to stay current with the latest HVAC technology and techniques.
              When you call {COMPANY.name}, you can expect:
            </p>
            <ul>
              <li><strong>Honest assessments</strong> – We&apos;ll tell you what you need, not what makes us the most money</li>
              <li><strong>Upfront pricing</strong> – You&apos;ll know the cost before we start any work</li>
              <li><strong>Quality work</strong> – We use only quality parts and back our repairs with a 90-day warranty</li>
              <li><strong>Respect for your home</strong> – We wear shoe covers, clean up after ourselves, and treat your home like our own</li>
              <li><strong>Fast response</strong> – We know HVAC emergencies can&apos;t wait, so we offer 24/7 service</li>
            </ul>

            <h2>Brands We Service</h2>
            <p>
              Our technicians are trained to work on all major HVAC brands, including:
            </p>
            <div className="flex flex-wrap gap-4 not-prose">
              {COMPANY.brands.map((brand, index) => (
                <span key={index} className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="bordered" padding="lg">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-primary-600" size={28} />
                <h3 className="text-xl font-bold text-gray-900">Licensed & Insured</h3>
              </div>
              <p className="text-gray-600 mb-4">
                {COMPANY.name} is fully licensed, bonded, and insured for your protection.
                Our {COMPANY.licenses.roc} is in good standing with the Arizona Registrar of Contractors.
              </p>
              <p className="text-sm text-gray-500">{COMPANY.licenses.type}</p>
            </Card>

            <Card variant="bordered" padding="lg">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-primary-600" size={28} />
                <h3 className="text-xl font-bold text-gray-900">24/7 Availability</h3>
              </div>
              <p className="text-gray-600 mb-4">
                HVAC emergencies don&apos;t wait for business hours, and neither do we. Our team is
                available around the clock to help when you need us most—with no overtime charges.
              </p>
              <p className="text-sm text-gray-500">{COMPANY.hours.description}</p>
            </Card>
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to Experience the Difference?"
        description="Join the thousands of homeowners who trust Air Conditioning Champ for their HVAC needs."
      />
    </>
  );
}
