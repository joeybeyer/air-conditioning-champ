# CLAUDE.md - AI Assistant Guidelines

## Project Context

You are working on **Air Conditioning Champ**, a local lead generation website for HVAC services in West Valley, Arizona. This is a Next.js 14 migration from a Bolt.new (Vite + React) build.

## 🎯 Primary Objectives

1. **Generate Leads** - Every page should drive phone calls
2. **Rank in AI Overviews** - Structure content for LLM extraction
3. **Dominate Local SERPs** - Hub & Spoke architecture for geo-targeting
4. **Convert Visitors** - Clear CTAs, trust signals, easy contact

## 🧠 Key SEO Principles (MEMORIZE THESE)

### The Core Formula
```
Performance + Structure + Signal Clarity = AI Era Ranking
```

### BERT Optimization Hierarchy (Ranked by Confidence)
1. **Tables** - EXTREME confidence (use for pricing, comparisons)
2. **Unordered/Ordered Lists** - Very High (bullet summaries at TOP)
3. **H2 and H3 Headings** - High (Service + Geo within 2 tokens)
4. **Definition Lists** - High (rarely used = opportunity)

### Speed Targets
- Page load: **< 100ms** (critical for AI Overview win rate)
- Grounding Box: **< 50ms**
- LCP: **< 2.5s**

## ⚠️ CRITICAL RULES - NEVER BREAK THESE

### ❌ NEVER DO:
1. **NEVER** create City + Service combo pages like `/el-mirage-ac-repair/`
2. **NEVER** use generic anchor text ("click here", "read more", "learn more")
3. **NEVER** put the same schema on every page
4. **NEVER** bury internal links at the bottom of content
5. **NEVER** create orphan pages (0 internal links)
6. **NEVER** use sidebars/footers for primary service links

### ✅ ALWAYS DO:
1. **ALWAYS** add geo to every PAA/FAQ, even if original doesn't have it
2. **ALWAYS** create page-specific schema (not sitewide)
3. **ALWAYS** put bullet summaries at TOP of pages for AI extraction
4. **ALWAYS** link within first 80-100 words
5. **ALWAYS** use contextual links (embedded in paragraph text)
6. **ALWAYS** make service pages non-geo (geo lives in location pages)

## 🏗️ Architecture Pattern

```
CORRECT:
├── /services/ac-repair/          (Non-geo service page)
├── /services/ac-installation/    (Non-geo service page)
├── /locations/el-mirage-az/      (Geo-specific location page)
└── /locations/surprise-az/       (Geo-specific location page)

WRONG:
├── /el-mirage-ac-repair/         ❌ City + Service combo
├── /surprise-ac-installation/    ❌ City + Service combo
```

## 🔗 Internal Linking Formula

```
1 UP + 2-3 ACROSS = Money
```

**For Location Pages (Spokes):**
- **1 UP:** Link to Homepage/Hub in first paragraph, above the fold
- **2-3 ACROSS:** Link to relevant service pages
- **2-3 ACROSS:** Link to NEIGHBORING locations only (not all)

**For Service Pages:**
- **1 UP:** Link to Homepage
- **2-3 ACROSS:** Link to related services
- **Contextual:** Mention locations naturally with links

## 📝 Content Templates

### Service Page Structure
```markdown
# [Service Name] in West Valley, AZ

## Key Takeaways
- [Specific fact with number about this service]
- [Specific fact with number about pricing/timing]
- [Specific fact with number about benefits]

[First paragraph with internal link to Homepage within 80 words]

## [Service] Process
[Content with H3 subheadings]

## [Service] Pricing in West Valley
| Service | Price Range | Time |
|---------|-------------|------|
| ... | ... | ... |

## Why Choose Air Conditioning Champ for [Service]?
[Trust signals, experience, guarantees]

## Frequently Asked Questions About [Service]
### Q: [Question with geo]?
A: [Answer]

### Q: [Question with geo]?
A: [Answer]

## Areas We Serve
[Links to location pages - contextual, not list]

[CTA Section]
```

### Location Page Structure
```markdown
# [City] Air Conditioning Services

## Key Takeaways
- [Specific fact about HVAC in this city]
- [Specific fact about local pricing]
- [Specific fact about response times]

[First paragraph linking UP to West Valley hub]

## HVAC Services in [City]
[Paragraph with links ACROSS to service pages]

## Why [City] Residents Choose Us
[Local landmarks, roads, community specifics]

## [City] Climate & Your AC
[Microclimate content - Arizona heat, monsoon season, dust]

## [City] Service Areas
[Neighborhoods, zip codes, major roads]

## Frequently Asked Questions - [City] AC Service
### Q: [Question specific to city]?
A: [Answer with local context]

## Nearby Areas We Serve
[Links to neighboring cities only - ACROSS links]

[CTA Section]
```

## 🔧 Schema Requirements

### Homepage Schema
```typescript
const homeSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "name": "Air Conditioning Champ",
  "description": "Expert AC repair, installation, and maintenance in West Valley AZ",
  "url": "https://airconditioningchamp.com",
  "telephone": "+1-XXX-XXX-XXXX",
  "areaServed": [
    { "@type": "City", "name": "El Mirage", "sameAs": "https://en.wikipedia.org/wiki/El_Mirage,_Arizona" },
    { "@type": "City", "name": "Surprise" },
    // ... all cities
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "HVAC Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Repair" }},
      // ... all services
    ]
  }
};
```

### Service Page Schema
```typescript
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AC Repair",
  "provider": { /* LocalBusiness reference */ },
  "areaServed": [ /* cities array */ ],
  "offers": {
    "@type": "Offer",
    "priceRange": "$89 - $500"
  }
};
```

### FAQ Schema (Only where FAQs exist)
```typescript
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does AC repair cost in El Mirage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AC repair in El Mirage typically costs..."
      }
    }
  ]
};
```

## 🎨 Component Guidelines

### Phone Number Component
```tsx
// Always use tracking number, display nicely
<a href="tel:+1XXXXXXXXXX" className="...">
  (XXX) XXX-XXXX
</a>
```

### CTA Sections
```tsx
// Every page needs clear CTA
<section className="bg-primary text-white py-12">
  <h2>Ready for Reliable AC Service?</h2>
  <p>24/7 Emergency Service Available</p>
  <a href="tel:..." className="btn-cta">Call Now</a>
</section>
```

### Internal Links
```tsx
// GOOD - Contextual link in paragraph
<p>
  Our expert technicians provide fast{' '}
  <Link href="/services/ac-repair">AC repair services</Link>{' '}
  throughout the West Valley area.
</p>

// BAD - Generic anchor text
<p>
  Learn about our services <Link href="/services">here</Link>.
</p>
```

## 📊 Data Structures

### Cities Array
```typescript
export const WEST_VALLEY_CITIES = [
  { slug: 'el-mirage-az', name: 'El Mirage', state: 'AZ', zip: ['85335'] },
  { slug: 'surprise-az', name: 'Surprise', state: 'AZ', zip: ['85374', '85378', '85379', '85387', '85388'] },
  { slug: 'peoria-az', name: 'Peoria', state: 'AZ', zip: ['85345', '85380', '85381', '85382', '85383'] },
  { slug: 'glendale-az', name: 'Glendale', state: 'AZ', zip: ['85301', '85302', '85303', '85304', '85305', '85306', '85307', '85308', '85310', '85311', '85312', '85318'] },
  { slug: 'goodyear-az', name: 'Goodyear', state: 'AZ', zip: ['85338', '85395'] },
  { slug: 'avondale-az', name: 'Avondale', state: 'AZ', zip: ['85323', '85392'] },
  { slug: 'buckeye-az', name: 'Buckeye', state: 'AZ', zip: ['85326', '85396'] },
  { slug: 'litchfield-park-az', name: 'Litchfield Park', state: 'AZ', zip: ['85340'] },
  { slug: 'sun-city-az', name: 'Sun City', state: 'AZ', zip: ['85351', '85372', '85373'] },
  { slug: 'sun-city-west-az', name: 'Sun City West', state: 'AZ', zip: ['85375', '85376'] },
];
```

### Services Array
```typescript
export const HVAC_SERVICES = [
  { slug: 'ac-repair', name: 'AC Repair', description: '24/7 emergency AC repair services' },
  { slug: 'ac-installation', name: 'AC Installation', description: 'New AC system installation' },
  { slug: 'ac-maintenance', name: 'AC Maintenance', description: 'Preventive AC tune-ups' },
  { slug: 'heating-repair', name: 'Heating Repair', description: 'Furnace and heat pump repair' },
  { slug: 'hvac-tune-up', name: 'HVAC Tune-Up', description: 'Seasonal system maintenance' },
  { slug: 'emergency-service', name: 'Emergency Service', description: '24/7 emergency HVAC service' },
];
```

## 🧪 Quality Checks Before Committing

1. [ ] Does every page have unique schema?
2. [ ] Is there an internal link in the first 80-100 words?
3. [ ] Are Key Takeaways at the TOP after H1?
4. [ ] Do H2s have Service + Geo within 2 tokens where appropriate?
5. [ ] Are there NO City+Service combo URLs?
6. [ ] Does every location page link UP to hub?
7. [ ] Does every location page link ACROSS to neighbors (not all)?
8. [ ] Is anchor text descriptive (not "click here")?
9. [ ] Is there a pricing table where relevant?
10. [ ] Does the FAQ section have FAQPage schema?

## 🚫 Common Mistakes to Avoid

1. **Over-linking:** Don't link every mention of a city/service
2. **Under-linking:** Every page needs internal links in first 100 words
3. **Duplicate content:** Each location needs 80% unique content
4. **Missing schema:** Every page type needs appropriate schema
5. **Slow pages:** Optimize images, minimize JS, use SSG
6. **Generic CTAs:** Make CTAs specific to the page content
7. **Forgetting mobile:** All designs must be mobile-first

## 📞 Call Tracking Notes

- Primary tracking via Retreaver/Ringba
- Use dynamic number insertion where possible
- Track by source (organic, direct, referral)
- Qualified call = 90+ seconds duration

## 🔄 When Making Changes

1. **Test locally** with `npm run dev`
2. **Check build** with `npm run build`
3. **Verify schema** with Google Rich Results Test
4. **Check performance** with Lighthouse
5. **Validate links** - no 404s, no orphan pages

---

*This document should be referenced by AI assistants working on this codebase to ensure consistency with SEO best practices and project requirements.*
