'use client';

import { useState } from 'react';
import { Input, Textarea, Select } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { SERVICES } from '@/lib/data/services';
import { CheckCircle } from 'lucide-react';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = SERVICES.map((service) => ({
    value: service.slug,
    label: service.name,
  }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600">
          We&apos;ve received your message and will contact you shortly.
          For immediate assistance, please call us directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          name="name"
          label="Name"
          placeholder="Your name"
          required
        />
        <Input
          name="phone"
          label="Phone"
          type="tel"
          placeholder="(623) 555-0123"
          required
        />
      </div>

      <Input
        name="email"
        label="Email"
        type="email"
        placeholder="your@email.com"
        required
      />

      <Select
        name="service"
        label="Service Needed"
        options={serviceOptions}
        required
      />

      <Select
        name="urgency"
        label="How urgent is your request?"
        options={[
          { value: 'emergency', label: 'Emergency - Need help today' },
          { value: 'soon', label: 'Soon - Within a few days' },
          { value: 'flexible', label: 'Flexible - Just getting quotes' },
        ]}
        required
      />

      <Textarea
        name="message"
        label="Message"
        placeholder="Tell us about your HVAC needs..."
        rows={4}
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      <p className="text-sm text-gray-500 text-center">
        By submitting this form, you agree to our{' '}
        <a href="/privacy-policy" className="text-primary-600 hover:text-primary-700">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
