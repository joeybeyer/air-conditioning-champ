# SEO-CHECKLIST.md

## Air Conditioning Champ - SEO Implementation Checklist

Based on SKILL-EXPANDED.md methodology for AI Overview domination and local SEO.

---

## 🎯 Core Formula Reminder

```
Performance + Structure + Signal Clarity = AI Era Ranking
```

---

## PHASE 1: TECHNICAL FOUNDATION

### Performance Targets
- [ ] Page load time < 100ms (80% AI Overview win rate)
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] TTFB < 200ms

### Technical Setup
- [ ] SSL certificate active (HTTPS)
- [ ] Mobile-responsive design
- [ ] No render-blocking resources
- [ ] Images optimized (WebP, lazy loading)
- [ ] Fonts preloaded
- [ ] JS minimized and deferred
- [ ] CSS purged and minified

---

## PHASE 2: SITE ARCHITECTURE

### Hub & Spoke Structure
- [ ] Homepage = City Hub (West Valley)
- [ ] Service pages = Non-geo (Tier 1)
- [ ] Location pages = Geo-specific (Tier 2)
- [ ] Blog/PAA content = Supporting (Tier 3)

### Critical Rule Verification
- [ ] ❌ NO City + Service combo pages exist
- [ ] ✅ Services are at /services/[service]/
- [ ] ✅ Locations are at /locations/[city]/
- [ ] ✅ Each service page is non-geo
- [ ] ✅ Each location page is geo-specific

### URL Structure
- [ ] All URLs lowercase
- [ ] Hyphens for word separation
- [ ] No trailing slashes (or consistent)
- [ ] Logical hierarchy
- [ ] Canonical tags on all pages

---

## PHASE 3: INTERNAL LINKING

### The Formula: 1 UP + 2-3 ACROSS

**For Every Location Page:**
- [ ] Link to Homepage (hub) in first paragraph
- [ ] Link is above the fold
- [ ] 2-3 links to service pages
- [ ] 2-3 links to NEIGHBORING locations only (not all)
- [ ] Contextual anchors (in paragraph text)
- [ ] No "click here" or "learn more"

**For Every Service Page:**
- [ ] Link to Homepage in first 80-100 words
- [ ] 2-3 links to related services
- [ ] Contextual mentions of locations
- [ ] Descriptive anchor text

### Anchor Text Distribution
- [ ] Exact match: 1-2x per page max
- [ ] Partial match: Primary method
- [ ] Branded: For homepage/about links
- [ ] Natural phrase: Supporting content
- [ ] Generic: NEVER for SEO links

### Link Audit
- [ ] No orphan pages (0 internal links)
- [ ] Most important pages have most links
- [ ] No broken internal links
- [ ] Links in body content, not just nav/footer

---

## PHASE 4: CONTENT STRUCTURE (BERT Optimization)

### Confidence Hierarchy
1. **TABLES** (Extreme) - Use for:
   - [ ] Pricing tables on service pages
   - [ ] Comparison tables
   - [ ] Service area coverage

2. **LISTS** (Very High) - Use for:
   - [ ] Key Takeaways at TOP of page
   - [ ] Service features
   - [ ] Benefits summaries

3. **H2/H3 HEADINGS** (High) - Ensure:
   - [ ] Service + Geo within 2 tokens
   - [ ] Target keywords in headings
   - [ ] Logical hierarchy

4. **DEFINITION LISTS** (High) - Opportunity:
   - [ ] Glossary terms
   - [ ] Service definitions

### Content Requirements
- [ ] Key Takeaways immediately after H1 (3 points)
- [ ] Direct answer in first 100 characters
- [ ] Quick summary at TOP of pages
- [ ] FAQ sections with geo in questions
- [ ] 80% unique content per location page

### Content Quality
- [ ] No fluff - de-fluffed content
- [ ] Specific data points and numbers
- [ ] Expert quotes where possible
- [ ] Customer stories/testimonials
- [ ] Opening statistics as hooks

---

## PHASE 5: SCHEMA MARKUP

### Homepage Schema
- [ ] @type: HVACBusiness
- [ ] name, description, url
- [ ] telephone (with +1 format)
- [ ] address (PostalAddress)
- [ ] areaServed (array of cities)
- [ ] openingHoursSpecification (24/7)
- [ ] hasOfferCatalog (services)
- [ ] geo (GeoCoordinates)

### Service Page Schema
- [ ] @type: Service
- [ ] name, description
- [ ] provider (HVACBusiness reference)
- [ ] areaServed
- [ ] offers (priceRange)

### Location Page Schema
- [ ] @type: HVACBusiness (location-specific)
- [ ] address for that city
- [ ] areaServed (specific city)
- [ ] Same core business info

### FAQ Page Schema
- [ ] @type: FAQPage
- [ ] Only where FAQ content exists
- [ ] Questions include geo
- [ ] Properly nested Question/Answer

### Breadcrumb Schema
- [ ] @type: BreadcrumbList
- [ ] On all pages except homepage
- [ ] Proper hierarchy

### Schema Validation
- [ ] All schemas pass Google Rich Results Test
- [ ] No errors or warnings
- [ ] Page-specific (not sitewide template)

---

## PHASE 6: META OPTIMIZATION

### Title Tags
- [ ] Unique per page
- [ ] Target keyword + Geo + Brand
- [ ] Under 60 characters
- [ ] Power words for CTR

### Meta Descriptions
- [ ] Unique per page
- [ ] Clear value proposition
- [ ] Call to action
- [ ] 150-160 characters
- [ ] Includes geo

### Open Graph
- [ ] og:title
- [ ] og:description
- [ ] og:image (1200x630)
- [ ] og:url
- [ ] og:type

### Twitter Cards
- [ ] twitter:card
- [ ] twitter:title
- [ ] twitter:description
- [ ] twitter:image

### Canonical URLs
- [ ] Every page has canonical
- [ ] Self-referencing canonicals
- [ ] No duplicate content issues

---

## PHASE 7: LOCAL SEO ELEMENTS

### NAP Consistency
- [ ] Name exactly matches GBP
- [ ] Address exactly matches GBP
- [ ] Phone exactly matches GBP
- [ ] Consistent across all pages

### Geographic Signals
- [ ] City names in content
- [ ] Zip codes mentioned
- [ ] Neighborhoods referenced
- [ ] Major roads/landmarks
- [ ] Local area references

### Service Area Coverage
- [ ] All 10 West Valley cities have pages
- [ ] Each page has unique local content
- [ ] Microclimate content (Arizona heat)
- [ ] Community-specific information

---

## PHASE 8: FAQ OPTIMIZATION

### FAQ Content Rules
- [ ] Geo in EVERY question
- [ ] Even if original PAA doesn't have it
- [ ] Real questions people ask
- [ ] Comprehensive answers
- [ ] Links to relevant pages in answers

### Example Format
```
✅ "How much does AC repair cost in El Mirage, AZ?"
❌ "How much does AC repair cost?"
```

### FAQ Placement
- [ ] Service pages: Service-specific FAQs
- [ ] Location pages: Location-specific FAQs
- [ ] Homepage: General FAQs
- [ ] FAQ schema implemented

---

## PHASE 9: SITEMAP & ROBOTS

### Sitemap
- [ ] sitemap.xml accessible
- [ ] All public pages included
- [ ] Correct lastmod dates
- [ ] Proper priority values
- [ ] changeFrequency set

### Robots.txt
- [ ] Allow all public pages
- [ ] Disallow /api/, /admin/
- [ ] Sitemap URL included
- [ ] No accidental blocks

### Google Search Console
- [ ] Property verified
- [ ] Sitemap submitted
- [ ] No crawl errors
- [ ] Mobile usability passes
- [ ] No security issues

---

## PHASE 10: CONVERSION ELEMENTS

### Phone CTAs
- [ ] Phone number clickable (tel: link)
- [ ] Prominent in header
- [ ] Sticky on mobile
- [ ] On every page
- [ ] In CTA sections

### Trust Signals
- [ ] Licensed & Insured mentioned
- [ ] Years of experience
- [ ] Number of reviews/ratings
- [ ] Service guarantees
- [ ] Response time promises

### Forms
- [ ] Contact form works
- [ ] Form validation
- [ ] Clear submit confirmation
- [ ] Tracking implemented

---

## PHASE 11: AI OVERVIEW TARGETING

### Grounding Box Principles
- [ ] Fast load time (< 50ms if separate)
- [ ] Direct answer first
- [ ] Clean HTML structure
- [ ] Schema inline
- [ ] Target query as H1

### Content for AI Extraction
- [ ] Bullet summaries at TOP
- [ ] Tables for data
- [ ] Clear, factual statements
- [ ] Specific numbers
- [ ] Question-answer format

### Trinity Loop (Optional Advanced)
- [ ] Website content
- [ ] NotebookLM audio
- [ ] YouTube video
- [ ] Cross-linking between all

---

## PHASE 12: PRE-LAUNCH VERIFICATION

### Build Checks
- [ ] `npm run build` passes
- [ ] `npm run lint` passes
- [ ] No console errors
- [ ] No 404s

### Page-by-Page Audit
- [ ] Homepage loads correctly
- [ ] All service pages load
- [ ] All location pages load
- [ ] About page loads
- [ ] Contact page loads
- [ ] Forms submit

### SEO Tools Check
- [ ] Google Rich Results Test passes
- [ ] Lighthouse SEO > 90
- [ ] Mobile-friendly test passes
- [ ] PageSpeed Insights reviewed

---

## PHASE 13: POST-LAUNCH

### Indexing
- [ ] Request indexing in GSC
- [ ] Monitor Index Coverage
- [ ] Check for crawl errors
- [ ] Verify sitemap indexed

### Monitoring
- [ ] Set up rank tracking
- [ ] Monitor Core Web Vitals
- [ ] Track phone calls
- [ ] Monitor form submissions

### Ongoing
- [ ] Weekly GBP posts
- [ ] Content freshness updates
- [ ] Internal link additions
- [ ] New blog content for PAAs

---

## QUICK REFERENCE: NEVER DO

1. ❌ City + Service combo pages
2. ❌ Generic anchor text ("click here")
3. ❌ Same schema on every page
4. ❌ Bury links at bottom
5. ❌ Orphan pages
6. ❌ Use sidebars for service links
7. ❌ Use Gemini for content (watermarked)
8. ❌ Ignore Yelp

---

## QUICK REFERENCE: ALWAYS DO

1. ✅ Geo in every PAA/FAQ
2. ✅ Page-specific schema
3. ✅ Bullet summaries at TOP
4. ✅ Link in first 80-100 words
5. ✅ Contextual links in paragraphs
6. ✅ Tables for pricing/comparisons
7. ✅ 80% unique content per location
8. ✅ Service + Geo within 2 tokens in H2s

---

*Based on SKILL-EXPANDED.md v4.2 methodology*
