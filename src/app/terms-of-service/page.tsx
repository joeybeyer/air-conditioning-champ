import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { COMPANY } from '@/lib/data/company';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of Service for ${COMPANY.name}. Read our terms and conditions for using our HVAC services.`,
  alternates: {
    canonical: `${COMPANY.url}/terms-of-service`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

      <section className="py-12">
        <Container size="md">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: January 2025
            </p>

            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the services of {COMPANY.name}, you agree to be bound by these Terms of
              Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2>Services</h2>
            <p>
              {COMPANY.name} provides HVAC services including but not limited to air conditioning repair,
              installation, maintenance, heating repair, and emergency services throughout Arizona, California, Nevada, and Texas.
            </p>

            <h2>Service Appointments</h2>
            <ul>
              <li>Service appointments are scheduled based on availability</li>
              <li>We will make reasonable efforts to arrive within the scheduled time window</li>
              <li>Cancellations should be made at least 24 hours in advance when possible</li>
              <li>Missed appointments without notice may result in a service fee</li>
            </ul>

            <h2>Pricing and Payment</h2>
            <ul>
              <li>All prices are quoted in US dollars</li>
              <li>A diagnostic fee may apply and is typically waived with repair service</li>
              <li>Written estimates are provided before work begins</li>
              <li>Payment is due upon completion of service</li>
              <li>We accept cash, check, and major credit cards</li>
              <li>Financing options are available for qualifying customers</li>
            </ul>

            <h2>Warranties</h2>
            <ul>
              <li>Labor is warranted for 90 days from the date of service</li>
              <li>Parts warranties vary by manufacturer</li>
              <li>New equipment installations include manufacturer warranties</li>
              <li>Warranties do not cover damage from misuse, neglect, or acts of nature</li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, {COMPANY.name} shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising out of or related to our services.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless {COMPANY.name}, its officers, employees, and agents
              from any claims, damages, or expenses arising from your use of our services or violation of
              these terms.
            </p>

            <h2>Service Area</h2>
            <p>
              Our services are available throughout Arizona, California, Nevada, and Texas. Visit our
              locations page for a full list of service areas.
            </p>

            <h2>Emergency Services</h2>
            <p>
              Emergency services are available 24/7. Standard rates apply with no overtime charges for
              nights, weekends, or holidays.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, and images, is the property of
              {COMPANY.name} and is protected by copyright and trademark laws.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of
              the State of Arizona.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately
              upon posting to our website.
            </p>

            <h2>Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us:
            </p>
            <ul>
              <li>Phone: {COMPANY.phone}</li>
              <li>Email: {COMPANY.email}</li>
              <li>Address: {COMPANY.address.streetAddress}, {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.postalCode}</li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
