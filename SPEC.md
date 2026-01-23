# SPEC.md - Technical Specification

## Air Conditioning Champ - Next.js Lead Generation Site

**Version:** 1.0.0  
**Last Updated:** January 2026  
**Platform:** Next.js 14 (App Router)  

---

## 1. Project Overview

### 1.1 Purpose
Build a high-performance, SEO-optimized lead generation website for HVAC services targeting West Valley, Arizona. The site must rank in Google AI Overviews and convert visitors into phone calls.

### 1.2 Success Metrics
| Metric | Target | Measurement |
|--------|--------|-------------|
| Page Load Time | < 100ms | Lighthouse |
| AI Overview Ranking | Top 3 | Manual verification |
| Organic Traffic | +200% in 90 days | GA4 |
| Call Conversion Rate | > 3% | Call tracking |
| Core Web Vitals | All Green | PageSpeed Insights |

### 1.3 Target Audience
- Homeowners in West Valley, AZ needing AC repair
- Property managers with HVAC emergencies
- Residents seeking AC installation/replacement
- Commercial property owners (secondary)

---

## 2. Technical Architecture

### 2.1 Stack Overview

```
┌─────────────────────────────────────────┐
│            Frontend (Next.js)           │
├─────────────────────────────────────────┤
│  App Router │ React 18 │ TypeScript    │
├─────────────────────────────────────────┤
│  Tailwind CSS │ Lucide Icons │ Fonts   │
├─────────────────────────────────────────┤
│         Static Generation (SSG)         │
├─────────────────────────────────────────┤
│    Vercel Edge / DirectAdmin Server     │
└─────────────────────────────────────────┘
```

### 2.2 Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwindcss": "^3.4.0",
    "lucide-react": "^0.300.0",
    "react-hook-form": "^7.48.0",
    "@hookform/resolvers": "^3.3.0",
    "zod": "^3.22.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

### 2.3 Rendering Strategy

| Route Pattern | Rendering | Revalidation |
|---------------|-----------|--------------|
| `/` | SSG | ISR (24h) |
| `/services/*` | SSG | ISR (24h) |
| `/locations/*` | SSG | ISR (24h) |
| `/blog/*` | SSG | ISR (1h) |
| `/contact` | SSG | Static |
| `/sitemap.xml` | Dynamic | On-demand |

---

## 3. URL Structure

### 3.1 Route Definitions

```
/                           → Homepage (West Valley Hub)
/services                   → Services Index
/services/[service]         → Individual Service Page
/locations                  → Locations Index  
/locations/[city]           → Individual City Page
/blog                       → Blog Index
/blog/[slug]                → Individual Blog Post
/about                      → About Page
/contact                    → Contact Page
/privacy-policy             → Privacy Policy
/terms-of-service           → Terms of Service
```

### 3.2 URL Naming Convention

- **Services:** `/services/ac-repair` (lowercase, hyphenated)
- **Locations:** `/locations/el-mirage-az` (city-state format)
- **Blog:** `/blog/how-to-maintain-your-ac-system` (full slug)

### 3.3 Canonical URLs

```typescript
// All pages must have canonical
export const metadata = {
  alternates: {
    canonical: 'https://airconditioningchamp.com/services/ac-repair',
  },
};
```

---

## 4. Page Specifications

### 4.1 Homepage

**Purpose:** Establish authority as West Valley HVAC leader, drive calls

**Sections:**
1. Hero with H1, subhead, CTA (above fold)
2. Key Takeaways (3 bullet points)
3. Services Grid (links to service pages)
4. Service Areas Map (links to location pages)
5. Why Choose Us (trust signals)
6. Testimonials
7. FAQ Section (with schema)
8. Final CTA

**Schema:** HVACBusiness + LocalBusiness

**Word Count:** 1,500-2,000 words

### 4.2 Service Pages

**Purpose:** Rank for "[service] West Valley AZ" queries

**Sections:**
1. H1: "[Service Name] in West Valley, AZ"
2. Key Takeaways (3 points with data)
3. Service Overview (link to hub in first 80 words)
4. Service Process
5. Pricing Table
6. Benefits/Why Choose Us
7. FAQ Section (5-7 questions with geo)
8. Service Areas (contextual links to locations)
9. CTA

**Schema:** Service + FAQPage

**Word Count:** 1,200-1,800 words per page

### 4.3 Location Pages

**Purpose:** Rank for "[city] AC repair" queries

**Sections:**
1. H1: "[City] Air Conditioning Services"
2. Key Takeaways (local data points)
3. Overview (link UP to hub immediately)
4. Services Available (links ACROSS to services)
5. Local Climate Info (Arizona-specific)
6. Areas/Neighborhoods Served
7. Local Landmarks/Directions
8. FAQ Section (city-specific)
9. Nearby Areas (links ACROSS to neighbors only)
10. CTA

**Schema:** LocalBusiness (location-specific) + FAQPage

**Word Count:** 1,000-1,500 words per page

**Unique Content Requirement:** 80% unique per location

### 4.4 Blog Posts

**Purpose:** Capture PAA queries, build topical authority

**Structure:**
1. H1 with target keyword
2. Key Takeaways
3. Content with H2/H3 structure
4. Internal links to services/locations
5. FAQ if applicable
6. CTA

**Schema:** Article + FAQPage (if applicable)

**Word Count:** 800-1,500 words

---

## 5. Component Specifications

### 5.1 Core Components

```typescript
// components/ui/Button.tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

// components/ui/PhoneButton.tsx
interface PhoneButtonProps {
  number: string;
  trackingNumber: string;
  className?: string;
}

// components/seo/JsonLd.tsx
interface JsonLdProps {
  data: Record<string, unknown>;
}

// components/sections/KeyTakeaways.tsx
interface KeyTakeawaysProps {
  items: string[];
}

// components/sections/PricingTable.tsx
interface PricingTableProps {
  items: Array<{
    service: string;
    priceRange: string;
    duration: string;
  }>;
}

// components/sections/FAQ.tsx
interface FAQProps {
  items: Array<{
    question: string;
    answer: string;
  }>;
  includeSchema?: boolean;
}
```

### 5.2 Layout Components

```typescript
// components/layout/Header.tsx
// - Logo
// - Navigation (Services dropdown, Locations dropdown, About, Contact)
// - Phone CTA button (sticky on mobile)

// components/layout/Footer.tsx
// - Company info
// - Service links
// - Location links
// - Contact info
// - Legal links
// - Copyright

// components/layout/MobileNav.tsx
// - Hamburger menu
// - Slide-out navigation
// - Prominent phone button
```

### 5.3 Section Components

```typescript
// components/sections/Hero.tsx
interface HeroProps {
  title: string;
  subtitle: string;
  cta: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
}

// components/sections/ServiceCard.tsx
interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

// components/sections/TestimonialCard.tsx
interface TestimonialProps {
  quote: string;
  author: string;
  location: string;
  rating: number;
}

// components/sections/CTASection.tsx
interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
}
```

---

## 6. Data Models

### 6.1 Service Type

```typescript
interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  pricing: {
    min: number;
    max: number;
    unit: string;
  };
  duration: string;
  features: string[];
  faqs: FAQ[];
  metaTitle: string;
  metaDescription: string;
}
```

### 6.2 Location Type

```typescript
interface Location {
  slug: string;
  city: string;
  state: string;
  zipCodes: string[];
  population: number;
  neighborhoods: string[];
  landmarks: string[];
  majorRoads: string[];
  nearbyLocations: string[]; // slugs of neighboring cities
  climateNotes: string;
  faqs: FAQ[];
  metaTitle: string;
  metaDescription: string;
}
```

### 6.3 FAQ Type

```typescript
interface FAQ {
  question: string;
  answer: string;
}
```

### 6.4 Blog Post Type

```typescript
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  category: string;
  tags: string[];
  relatedServices: string[];
  relatedLocations: string[];
  metaTitle: string;
  metaDescription: string;
}
```

---

## 7. SEO Specifications

### 7.1 Meta Tags

```typescript
// Every page must implement
export const metadata: Metadata = {
  title: 'Page Title | Air Conditioning Champ',
  description: '155 character meta description with keyword',
  alternates: {
    canonical: 'https://airconditioningchamp.com/path',
  },
  openGraph: {
    title: 'OG Title',
    description: 'OG Description',
    url: 'https://airconditioningchamp.com/path',
    siteName: 'Air Conditioning Champ',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter Title',
    description: 'Twitter Description',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

### 7.2 Schema Types by Page

| Page Type | Schema Types |
|-----------|--------------|
| Homepage | HVACBusiness, LocalBusiness, Organization |
| Service Page | Service, FAQPage, BreadcrumbList |
| Location Page | LocalBusiness, FAQPage, BreadcrumbList |
| Blog Post | Article, FAQPage (if applicable), BreadcrumbList |
| Contact | ContactPage, LocalBusiness |

### 7.3 Sitemap Requirements

```typescript
// app/sitemap.ts
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://airconditioningchamp.com';
  
  // Static pages
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];
  
  // Service pages
  const servicePages = HVAC_SERVICES.map(service => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));
  
  // Location pages
  const locationPages = WEST_VALLEY_CITIES.map(city => ({
    url: `${baseUrl}/locations/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));
  
  return [...staticPages, ...servicePages, ...locationPages];
}
```

### 7.4 Robots.txt

```typescript
// app/robots.ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://airconditioningchamp.com/sitemap.xml',
  };
}
```

---

## 8. Performance Specifications

### 8.1 Core Web Vitals Targets

| Metric | Target | Max Acceptable |
|--------|--------|----------------|
| LCP | < 2.5s | < 4.0s |
| FID | < 100ms | < 300ms |
| CLS | < 0.1 | < 0.25 |
| TTFB | < 200ms | < 600ms |

### 8.2 Image Optimization

```typescript
// All images must use Next.js Image component
import Image from 'next/image';

<Image
  src="/images/ac-repair.jpg"
  alt="AC repair technician in El Mirage, AZ"
  width={800}
  height={600}
  loading="lazy" // or "eager" for above-fold
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### 8.3 Font Loading

```typescript
// app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
```

### 8.4 Bundle Optimization

- Dynamic imports for non-critical components
- Tree shaking enabled
- No unused dependencies
- Image optimization via Next.js Image
- CSS purging via Tailwind

---

## 9. Forms & Interactions

### 9.1 Contact Form

```typescript
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  preferredContact: 'phone' | 'email';
  urgency: 'emergency' | 'soon' | 'flexible';
}
```

**Validation:**
- Name: Required, 2-100 characters
- Email: Required, valid format
- Phone: Required, valid US format
- Service: Required, from predefined list
- Message: Optional, max 1000 characters

**Submission:**
- POST to API route or external service
- Show loading state
- Display success/error message
- Track conversion in analytics

### 9.2 Quote Request Form

```typescript
interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  serviceType: string;
  acAge: string;
  homeSize: string;
  preferredDate: string;
  additionalNotes: string;
}
```

---

## 10. Analytics & Tracking

### 10.1 Google Analytics 4

```typescript
// Track page views automatically via Next.js
// Track events:
gtag('event', 'phone_click', {
  event_category: 'engagement',
  event_label: 'header_cta',
});

gtag('event', 'form_submit', {
  event_category: 'conversion',
  event_label: 'contact_form',
});
```

### 10.2 Call Tracking (Retreaver/Ringba)

```typescript
// Dynamic number insertion
// Track call duration, source, keyword
// Qualified call = 90+ seconds
```

### 10.3 Conversion Goals

1. Phone call click (all pages)
2. Form submission (contact, quote)
3. Click to service page (from homepage)
4. Click to location page (from homepage)

---

## 11. Deployment Specifications

### 11.1 Vercel Deployment

```bash
# vercel.json
{
  "framework": "nextjs",
  "regions": ["iad1"], // US East for Arizona users
  "functions": {
    "app/api/**/*": {
      "maxDuration": 10
    }
  }
}
```

### 11.2 DirectAdmin Deployment

```bash
# PM2 ecosystem config
module.exports = {
  apps: [{
    name: 'ac-champ',
    script: 'npm',
    args: 'start',
    cwd: '/path/to/app',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};

# Nginx proxy config
server {
  server_name airconditioningchamp.com;
  
  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

### 11.3 Environment Variables

```env
# Production
NEXT_PUBLIC_SITE_URL=https://airconditioningchamp.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_PHONE=(XXX) XXX-XXXX
NEXT_PUBLIC_TRACKING_NUMBER=(XXX) XXX-XXXX

# Optional
RETREAVER_CAMPAIGN_KEY=xxx
SMTP_HOST=smtp.example.com
SMTP_USER=xxx
SMTP_PASS=xxx
```

---

## 12. Testing Requirements

### 12.1 Pre-Launch Checklist

- [ ] All pages render without errors
- [ ] All internal links work (no 404s)
- [ ] Schema validates in Google Rich Results Test
- [ ] Meta tags present on all pages
- [ ] Sitemap includes all public pages
- [ ] Robots.txt correctly configured
- [ ] Forms submit successfully
- [ ] Phone numbers are clickable
- [ ] Mobile responsive on all pages
- [ ] Core Web Vitals pass
- [ ] SSL certificate active
- [ ] Canonical URLs correct

### 12.2 SEO Verification

- [ ] Google Search Console connected
- [ ] Sitemap submitted
- [ ] No crawl errors
- [ ] Mobile usability passes
- [ ] No security issues

---

*End of Technical Specification*
