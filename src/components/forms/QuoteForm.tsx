'use client';

import { useState, useEffect } from 'react';
import { Phone, Check, Clock, MessageSquare, Calendar, Loader2, Star } from 'lucide-react';
import { COMPANY } from '@/lib/data/company';

interface FormData {
  zipCode: string;
  city: string;
  state: string;
  serviceType: string;
  issueType: string;
  name: string;
  email: string;
  phone: string;
}

const SERVICE_TYPES = [
  { value: 'ac-repair', label: 'AC Repair' },
  { value: 'ac-installation', label: 'AC Installation' },
  { value: 'ac-maintenance', label: 'AC Maintenance / Tune-Up' },
  { value: 'heating-repair', label: 'Heating Repair' },
  { value: 'emergency', label: 'Emergency Service (24/7)' },
  { value: 'other', label: 'Other / Not Sure' },
];

const ISSUE_TYPES = [
  { value: 'not-cooling', label: 'AC Not Cooling' },
  { value: 'not-turning-on', label: 'AC Won\'t Turn On' },
  { value: 'strange-noises', label: 'Strange Noises' },
  { value: 'high-bills', label: 'High Energy Bills' },
  { value: 'new-system', label: 'Need New System' },
  { value: 'maintenance', label: 'Routine Maintenance' },
  { value: 'other', label: 'Other Issue' },
];

const SUCCESS_TESTIMONIALS = [
  { name: 'Sarah M.', location: 'Surprise, AZ', text: 'They called back in 10 minutes and had someone out same day. AC was fixed within an hour!' },
  { name: 'Robert K.', location: 'Peoria, AZ', text: 'Fast response, fair price. They explained everything before starting work.' },
  { name: 'Jennifer L.', location: 'Glendale, AZ', text: 'Best AC service in the West Valley. Professional and honest.' },
  { name: 'Michael T.', location: 'Buckeye, AZ', text: 'Called at 2am for an emergency. No extra charges and they fixed it fast.' },
  { name: 'Margaret H.', location: 'Sun City, AZ', text: 'Honest assessment - fixed my AC without pushing a replacement.' },
];

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLookingUp, setIsLookingUp] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [formTimestamp, setFormTimestamp] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const [formData, setFormData] = useState<FormData>({
    zipCode: '',
    city: '',
    state: '',
    serviceType: '',
    issueType: '',
    name: '',
    email: '',
    phone: '',
  });

  // Set timestamp on mount
  useEffect(() => {
    setFormTimestamp(Date.now());
  }, []);

  // Rotate testimonials on success
  useEffect(() => {
    if (!isSubmitted) return;
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % SUCCESS_TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isSubmitted]);

  // Zip code auto-lookup
  const lookupZipCode = async (zip: string) => {
    if (zip.length !== 5 || !/^\d{5}$/.test(zip)) return;

    setIsLookingUp(true);
    try {
      const response = await fetch(`https://api.zippopotam.us/us/${zip}`);
      if (response.ok) {
        const data = await response.json();
        if (data.places && data.places.length > 0) {
          const place = data.places[0];
          setFormData((prev) => ({
            ...prev,
            city: place['place name'],
            state: place['state abbreviation'],
          }));
        }
      }
    } catch {
      // Silently fail - user can still proceed
    } finally {
      setIsLookingUp(false);
    }
  };

  const handleZipChange = (value: string) => {
    const cleaned = value.replace(/\D/g, '').slice(0, 5);
    setFormData((prev) => ({ ...prev, zipCode: cleaned }));
    if (cleaned.length === 5) {
      lookupZipCode(cleaned);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          honeypot,
          formTimestamp,
          source: 'quote_form',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError('Something went wrong. Please try again or call us directly.');
      }
    } catch {
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const canProceedStep1 = formData.zipCode.length === 5 && formData.city;
  const canProceedStep2 = formData.serviceType && formData.issueType;
  const canSubmit = formData.name && formData.email && formData.phone;

  // Success state
  if (isSubmitted) {
    const testimonial = SUCCESS_TESTIMONIALS[testimonialIndex];
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
          <p className="text-gray-600">We&apos;re reviewing your request now...</p>
        </div>

        <div className="space-y-4 mb-8">
          <h4 className="font-semibold text-gray-900">What happens next?</h4>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Quote Calculation</p>
              <p className="text-sm text-gray-600">We&apos;re reviewing your service details</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Call From Our Team</p>
              <p className="text-sm text-gray-600">Expect a call within 15 minutes</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Schedule Service</p>
              <p className="text-sm text-gray-600">Same-day service often available</p>
            </div>
          </div>
        </div>

        <div className="bg-primary-50 rounded-lg p-4 mb-6">
          <p className="text-sm font-medium text-primary-800 mb-2">In a rush? Call us now!</p>
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call {COMPANY.phone}
          </a>
        </div>

        <div className="border-t pt-6">
          <div className="flex items-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-sm text-gray-600 ml-2">Rated 4.9/5 by 500+ customers</span>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 min-h-[80px]">
            <p className="text-gray-600 text-sm italic">&ldquo;{testimonial.text}&rdquo;</p>
            <p className="text-sm font-medium text-gray-900 mt-2">
              {testimonial.name} - {testimonial.location}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      {/* Progress indicator */}
      <div className="flex items-center justify-center gap-2 mb-6">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
              s === step
                ? 'bg-primary-600 text-white'
                : s < step
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 text-gray-500'
            }`}
          >
            {s < step ? <Check className="w-4 h-4" /> : s}
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-500 mb-6">
        Step {step} of 3: {step === 1 ? 'Location' : step === 2 ? 'Service' : 'Contact'}
      </p>

      {/* Honeypot field */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {/* Step 1: Location */}
      {step === 1 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 text-center">Enter Your ZIP Code</h3>
          <p className="text-gray-600 text-center text-sm">We&apos;ll check service availability in your area</p>

          <div className="relative">
            <input
              type="text"
              inputMode="numeric"
              placeholder="e.g. 85374"
              value={formData.zipCode}
              onChange={(e) => handleZipChange(e.target.value)}
              className="w-full px-4 py-3 text-lg text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            {isLookingUp && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <Loader2 className="w-5 h-5 animate-spin text-primary-600" />
              </div>
            )}
          </div>

          {formData.city && formData.state && (
            <div className="flex items-center justify-center gap-2 text-green-600">
              <Check className="w-5 h-5" />
              <span>{formData.city}, {formData.state}</span>
            </div>
          )}

          <button
            onClick={() => setStep(2)}
            disabled={!canProceedStep1}
            className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Check Availability
          </button>
        </div>
      )}

      {/* Step 2: Service Details */}
      {step === 2 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 text-center">What do you need?</h3>

          <div className="bg-green-50 text-green-700 text-sm text-center py-2 px-4 rounded-lg">
            <Clock className="w-4 h-4 inline mr-1" />
            Same-day service available in {formData.city}!
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Service Type
            </label>
            <select
              value={formData.serviceType}
              onChange={(e) => setFormData((prev) => ({ ...prev, serviceType: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select service type</option>
              {SERVICE_TYPES.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              What&apos;s the issue?
            </label>
            <select
              value={formData.issueType}
              onChange={(e) => setFormData((prev) => ({ ...prev, issueType: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select issue type</option>
              {ISSUE_TYPES.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setStep(1)}
              className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Back
            </button>
            <button
              onClick={() => setStep(3)}
              disabled={!canProceedStep2}
              className="flex-1 bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Contact Info */}
      {step === 3 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 text-center">Almost done!</h3>
          <p className="text-gray-600 text-center text-sm">Just need your contact info for the quote</p>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              placeholder="Your first name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              placeholder="you@email.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
              placeholder="(555) 123-4567"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          {error && (
            <div className="bg-red-50 text-red-700 text-sm py-2 px-4 rounded-lg">
              {error}
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={() => setStep(2)}
              className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={!canSubmit || isLoading}
              className="flex-1 bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : (
                'Get My Free Quote'
              )}
            </button>
          </div>
        </div>
      )}

      {/* Trust badge */}
      <div className="mt-6 pt-4 border-t text-center">
        <p className="text-xs text-gray-500">
          <span className="text-primary-600">✓</span> {COMPANY.licenses.type} Licensed &amp; Insured
        </p>
      </div>
    </div>
  );
}
