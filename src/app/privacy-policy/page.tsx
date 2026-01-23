import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { COMPANY } from '@/lib/data/company';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${COMPANY.name}. Learn how we collect, use, and protect your personal information.`,
  alternates: {
    canonical: `${COMPANY.url}/privacy-policy`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <section className="py-12">
        <Container size="md">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: January 2025
            </p>

            <h2>Introduction</h2>
            <p>
              {COMPANY.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting
              your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Fill out a contact form</li>
              <li>Request a quote or schedule service</li>
              <li>Call our phone number</li>
              <li>Subscribe to our newsletter</li>
              <li>Interact with us on social media</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Physical address</li>
              <li>Service details and preferences</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information about your device,
              including information about your web browser, IP address, time zone, and some of the cookies
              that are installed on your device.
            </p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Schedule and confirm appointments</li>
              <li>Send you service reminders and updates</li>
              <li>Process transactions</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Analyze website usage to improve user experience</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your
              information with:
            </p>
            <ul>
              <li>Service providers who assist in our operations</li>
              <li>Professional advisors (lawyers, accountants)</li>
              <li>Government authorities when required by law</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. You can set your browser to
              refuse all or some browser cookies, but this may affect your ability to use certain features
              of our website.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy
              practices of these websites and encourage you to read their privacy policies.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under 18 years of age. We do not knowingly
              collect personal information from children.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by
              posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
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
