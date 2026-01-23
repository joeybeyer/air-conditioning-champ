import { NextRequest, NextResponse } from 'next/server';

// Disposable email domains to block
const DISPOSABLE_DOMAINS = new Set([
  'mailinator.com',
  'tempmail.com',
  'throwaway.email',
  'guerrillamail.com',
  '10minutemail.com',
  'trashmail.com',
  'fakeinbox.com',
  'getnada.com',
  'temp-mail.org',
  'yopmail.com',
  'sharklasers.com',
  'maildrop.cc',
  'mailnesia.com',
  'spamgourmet.com',
  'mintemail.com',
  'tempinbox.com',
  'emailondeck.com',
  'dispostable.com',
  'mailcatch.com',
  'mohmal.com',
  'tempail.com',
  'fakemailgenerator.com',
  'emailfake.com',
  'crazymailing.com',
  'tempmailo.com',
  'throwawaymail.com',
  'mailslurp.com',
  'inboxalias.com',
  'emkei.cz',
  'discard.email',
  'mytrashmail.com',
  'mt2009.com',
  'thankyou2010.com',
  'spam4.me',
  'grr.la',
  'guerrillamailblock.com',
  'pokemail.net',
  'spam.la',
  'tempmailaddress.com',
  'burnermail.io',
]);

interface SpamCheckResult {
  isSpam: boolean;
  reasons: string[];
}

interface LeadBody {
  zipCode: string;
  city: string;
  state: string;
  serviceType: string;
  issueType: string;
  name: string;
  email: string;
  phone: string;
  honeypot?: string;
  formTimestamp?: number;
  source?: string;
}

function isDisposableEmail(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase();
  return domain ? DISPOSABLE_DOMAINS.has(domain) : false;
}

function validatePhone(phone: string): { valid: boolean; reason?: string } {
  // Remove all non-digits
  const digits = phone.replace(/\D/g, '');

  // Check length (10 or 11 digits for US)
  if (digits.length < 10 || digits.length > 11) {
    return { valid: false, reason: 'invalid_phone_length' };
  }

  // Get the 10-digit number (remove leading 1 if present)
  const tenDigit = digits.length === 11 && digits[0] === '1' ? digits.slice(1) : digits;

  if (tenDigit.length !== 10) {
    return { valid: false, reason: 'invalid_phone_format' };
  }

  const areaCode = tenDigit.slice(0, 3);
  const exchange = tenDigit.slice(3, 6);

  // Area code can't start with 0 or 1
  if (areaCode[0] === '0' || areaCode[0] === '1') {
    return { valid: false, reason: 'invalid_area_code' };
  }

  // Exchange can't start with 0 or 1
  if (exchange[0] === '0' || exchange[0] === '1') {
    return { valid: false, reason: 'invalid_exchange' };
  }

  // No 555-01xx (reserved for fiction)
  if (exchange === '555' && tenDigit.slice(6, 8) === '01') {
    return { valid: false, reason: 'fictional_number' };
  }

  // No all-same digits
  if (/^(\d)\1{9}$/.test(tenDigit)) {
    return { valid: false, reason: 'all_same_digits' };
  }

  // No sequential digits
  if (tenDigit === '1234567890' || tenDigit === '0987654321') {
    return { valid: false, reason: 'sequential_digits' };
  }

  return { valid: true };
}

function validateName(name: string): { valid: boolean; reason?: string } {
  // Minimum length
  if (name.length < 2) {
    return { valid: false, reason: 'name_too_short' };
  }

  // No URLs
  if (/https?:\/\/|www\./i.test(name)) {
    return { valid: false, reason: 'name_contains_url' };
  }

  // No HTML
  if (/<[^>]*>/.test(name)) {
    return { valid: false, reason: 'name_contains_html' };
  }

  // Must contain vowels (catches gibberish like "xvzqrth")
  if (!/[aeiouAEIOU]/.test(name)) {
    return { valid: false, reason: 'name_no_vowels' };
  }

  // No excessive repeated characters
  if (/(.)\1{4,}/.test(name)) {
    return { valid: false, reason: 'name_repeated_chars' };
  }

  // Can't be only numbers
  if (/^\d+$/.test(name)) {
    return { valid: false, reason: 'name_only_numbers' };
  }

  return { valid: true };
}

function validateEmail(email: string): { valid: boolean; reason?: string } {
  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, reason: 'invalid_email_format' };
  }

  return { valid: true };
}

function checkForSpam(body: LeadBody): SpamCheckResult {
  const reasons: string[] = [];

  // 1. Honeypot check
  if (body.honeypot && body.honeypot.trim() !== '') {
    reasons.push('honeypot_filled');
  }

  // 2. Timing check (< 3 seconds = bot)
  if (body.formTimestamp) {
    const submissionTime = Date.now() - body.formTimestamp;
    if (submissionTime < 3000) {
      reasons.push('submitted_too_fast');
    }
  }

  // 3. Email validation
  const emailValidation = validateEmail(body.email);
  if (!emailValidation.valid && emailValidation.reason) {
    reasons.push(emailValidation.reason);
  }

  // 4. Disposable email check
  if (isDisposableEmail(body.email)) {
    reasons.push('disposable_email');
  }

  // 5. Phone validation
  const phoneCheck = validatePhone(body.phone);
  if (!phoneCheck.valid && phoneCheck.reason) {
    reasons.push(phoneCheck.reason);
  }

  // 6. Name validation (gibberish detection)
  const nameCheck = validateName(body.name);
  if (!nameCheck.valid && nameCheck.reason) {
    reasons.push(nameCheck.reason);
  }

  return { isSpam: reasons.length > 0, reasons };
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadBody = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.zipCode) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check for spam
    const spamCheck = checkForSpam(body);

    // Generate a lead ID
    const leadId = `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Log the lead (in production, save to database)
    console.log('New lead received:', {
      id: leadId,
      name: body.name,
      email: body.email,
      phone: body.phone,
      zipCode: body.zipCode,
      city: body.city,
      state: body.state,
      serviceType: body.serviceType,
      issueType: body.issueType,
      source: body.source,
      isSpam: spamCheck.isSpam,
      spamReasons: spamCheck.reasons,
      timestamp: new Date().toISOString(),
    });

    // If not spam, send notification (implement your email service here)
    if (!spamCheck.isSpam) {
      // TODO: Implement email notification
      // await sendLeadNotification({
      //   to: 'leads@airconditioningchamp.com',
      //   lead: body,
      // });
      console.log('Valid lead - would send notification');
    } else {
      console.log(`Spam lead detected: ${spamCheck.reasons.join(', ')}`);
    }

    // Always return success (don't reveal detection to bots)
    return NextResponse.json(
      { success: true, id: leadId },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({ status: 'ok', endpoint: 'leads' });
}
