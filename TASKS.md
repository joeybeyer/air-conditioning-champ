# TASKS.md - Claude Code Task Management

## Air Conditioning Champ Next.js Migration

**Task List ID:** `airconditioningchamp-migration`  
**Environment Variable:** `export CLAUDE_CODE_TASK_LIST_ID=airconditioningchamp-migration`

---

## Task Overview

```
Total Tasks: 47
Parallel Streams: 4
Estimated Duration: 2-3 days
Critical Path: Setup → Data → Layout → Pages → SEO → Deploy
```

---

## Task Dependency Graph

```
PHASE 1: SETUP (No Dependencies - Start Here)
├── T1.1 Create Next.js project
├── T1.2 Install dependencies
├── T1.3 Configure Tailwind
└── T1.4 Set up environment variables

PHASE 2: DATA LAYER (Depends on: T1.1)
├── T2.1 Create company data
├── T2.2 Create services data
├── T2.3 Create locations data
└── T2.4 Create schema generators

PHASE 3: UI COMPONENTS (Depends on: T1.3)
├── T3.1 Button component
├── T3.2 PhoneButton component
├── T3.3 Card component
├── T3.4 Container component
└── T3.5 Input components

PHASE 4: LAYOUT (Depends on: T3.1, T3.2)
├── T4.1 Root layout
├── T4.2 Header component
├── T4.3 Footer component
├── T4.4 MobileNav component
└── T4.5 Navigation data

PHASE 5: SECTION COMPONENTS (Depends on: T3.*)
├── T5.1 Hero section
├── T5.2 KeyTakeaways section
├── T5.3 ServiceCard component
├── T5.4 PricingTable component
├── T5.5 FAQ component
├── T5.6 CTASection component
├── T5.7 Testimonials section
└── T5.8 WhyChooseUs section

PHASE 6: SEO COMPONENTS (Depends on: T2.4)
├── T6.1 JsonLd component
├── T6.2 Breadcrumbs component
└── T6.3 Meta utilities

PHASE 7: PAGES (Depends on: T4.*, T5.*, T6.*)
├── T7.1 Homepage
├── T7.2 Services index
├── T7.3 Service detail pages
├── T7.4 Locations index
├── T7.5 Location detail pages
├── T7.6 About page
├── T7.7 Contact page
└── T7.8 404 page

PHASE 8: SEO FILES (Depends on: T2.2, T2.3)
├── T8.1 Sitemap generation
├── T8.2 Robots.txt
└── T8.3 Manifest.json

PHASE 9: FORMS (Depends on: T3.5)
├── T9.1 Contact form
├── T9.2 Quote form
└── T9.3 Form validation

PHASE 10: TESTING (Depends on: T7.*)
├── T10.1 Build verification
├── T10.2 Link checking
├── T10.3 Schema validation
├── T10.4 Performance testing
└── T10.5 Mobile testing

PHASE 11: DEPLOYMENT (Depends on: T10.*)
├── T11.1 Production build
├── T11.2 Deploy to Vercel/Server
├── T11.3 DNS configuration
└── T11.4 SSL verification
```

---

## Detailed Task Specifications

### PHASE 1: PROJECT SETUP

#### T1.1 - Create Next.js Project
```yaml
id: T1.1
name: Create Next.js Project
status: pending
priority: critical
dependencies: none
parallel: true
estimated_time: 5min
```
**Commands:**
```bash
npx create-next-app@latest airconditioningchamp-nextjs \
  --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```
**Acceptance Criteria:**
- [ ] Project created successfully
- [ ] `npm run dev` starts without errors
- [ ] Default Next.js page loads at localhost:3000

---

#### T1.2 - Install Dependencies
```yaml
id: T1.2
name: Install Dependencies
status: pending
priority: critical
dependencies: [T1.1]
parallel: false
estimated_time: 3min
```
**Commands:**
```bash
npm install lucide-react react-hook-form @hookform/resolvers zod
```
**Acceptance Criteria:**
- [ ] All packages install without errors
- [ ] No peer dependency warnings

---

#### T1.3 - Configure Tailwind
```yaml
id: T1.3
name: Configure Tailwind
status: pending
priority: high
dependencies: [T1.1]
parallel: true
estimated_time: 10min
```
**Files to Create/Modify:**
- `tailwind.config.ts`

**Acceptance Criteria:**
- [ ] Custom colors defined (primary, secondary)
- [ ] Custom fonts configured
- [ ] Content paths include all component directories

---

#### T1.4 - Set Up Environment Variables
```yaml
id: T1.4
name: Set Up Environment Variables
status: pending
priority: high
dependencies: [T1.1]
parallel: true
estimated_time: 5min
```
**Files to Create:**
- `.env.local`
- `.env.example`

**Acceptance Criteria:**
- [ ] All required env vars defined
- [ ] Example file created for documentation

---

### PHASE 2: DATA LAYER

#### T2.1 - Create Company Data
```yaml
id: T2.1
name: Create Company Data
status: pending
priority: high
dependencies: [T1.1]
parallel: true
estimated_time: 15min
```
**Files to Create:**
- `src/lib/data/company.ts`

**Acceptance Criteria:**
- [ ] Company name, phone, email defined
- [ ] Address with full details
- [ ] Service area description
- [ ] TypeScript types exported

---

#### T2.2 - Create Services Data
```yaml
id: T2.2
name: Create Services Data
status: pending
priority: high
dependencies: [T1.1]
parallel: true
estimated_time: 45min
```
**Files to Create:**
- `src/lib/data/services.ts`

**Services to Define:**
1. AC Repair
2. AC Installation
3. AC Maintenance
4. Heating Repair
5. HVAC Tune-Up
6. Emergency Service

**Acceptance Criteria:**
- [ ] All 6 services defined with full data
- [ ] Each service has slug, name, description, pricing, FAQs
- [ ] TypeScript interface exported

---

#### T2.3 - Create Locations Data
```yaml
id: T2.3
name: Create Locations Data
status: pending
priority: high
dependencies: [T1.1]
parallel: true
estimated_time: 60min
```
**Files to Create:**
- `src/lib/data/locations.ts`

**Locations to Define:**
1. El Mirage, AZ
2. Surprise, AZ
3. Peoria, AZ
4. Glendale, AZ
5. Goodyear, AZ
6. Avondale, AZ
7. Buckeye, AZ
8. Litchfield Park, AZ
9. Sun City, AZ
10. Sun City West, AZ

**Acceptance Criteria:**
- [ ] All 10 locations defined
- [ ] Each has zip codes, neighborhoods, landmarks
- [ ] Each has nearbyLocations for cross-linking
- [ ] 80% unique content per location

---

#### T2.4 - Create Schema Generators
```yaml
id: T2.4
name: Create Schema Generators
status: pending
priority: high
dependencies: [T2.1, T2.2, T2.3]
parallel: false
estimated_time: 30min
```
**Files to Create:**
- `src/lib/schema/generators.ts`

**Schema Types:**
- HVACBusiness (homepage)
- Service (service pages)
- LocalBusiness (location pages)
- FAQPage (FAQ sections)
- BreadcrumbList (all pages)

**Acceptance Criteria:**
- [ ] All schema generators implemented
- [ ] Output validates in Google Rich Results Test

---

### PHASE 3: UI COMPONENTS

#### T3.1 - Button Component
```yaml
id: T3.1
name: Button Component
status: pending
priority: high
dependencies: [T1.3]
parallel: true
estimated_time: 20min
```
**Files to Create:**
- `src/components/ui/Button.tsx`

**Acceptance Criteria:**
- [ ] Variants: primary, secondary, outline
- [ ] Sizes: sm, md, lg
- [ ] Supports href (Link) and onClick

---

#### T3.2 - PhoneButton Component
```yaml
id: T3.2
name: PhoneButton Component
status: pending
priority: high
dependencies: [T1.3]
parallel: true
estimated_time: 15min
```
**Files to Create:**
- `src/components/ui/PhoneButton.tsx`

**Acceptance Criteria:**
- [ ] Clickable tel: link
- [ ] Tracking number support
- [ ] Mobile-friendly tap target

---

#### T3.3 - Card Component
```yaml
id: T3.3
name: Card Component
status: pending
priority: medium
dependencies: [T1.3]
parallel: true
estimated_time: 15min
```
**Files to Create:**
- `src/components/ui/Card.tsx`

---

#### T3.4 - Container Component
```yaml
id: T3.4
name: Container Component
status: pending
priority: medium
dependencies: [T1.3]
parallel: true
estimated_time: 10min
```
**Files to Create:**
- `src/components/ui/Container.tsx`

---

#### T3.5 - Input Components
```yaml
id: T3.5
name: Input Components
status: pending
priority: medium
dependencies: [T1.3]
parallel: true
estimated_time: 30min
```
**Files to Create:**
- `src/components/ui/Input.tsx`
- `src/components/ui/Select.tsx`
- `src/components/ui/Textarea.tsx`

---

### PHASE 4: LAYOUT COMPONENTS

#### T4.1 - Root Layout
```yaml
id: T4.1
name: Root Layout
status: pending
priority: critical
dependencies: [T1.3, T2.1]
parallel: false
estimated_time: 30min
```
**Files to Modify:**
- `src/app/layout.tsx`

**Acceptance Criteria:**
- [ ] Inter font configured
- [ ] Global metadata set
- [ ] Analytics script included
- [ ] Header and Footer rendered

---

#### T4.2 - Header Component
```yaml
id: T4.2
name: Header Component
status: pending
priority: high
dependencies: [T3.1, T3.2, T4.5]
parallel: false
estimated_time: 45min
```
**Files to Create:**
- `src/components/layout/Header.tsx`

**Acceptance Criteria:**
- [ ] Logo with link to home
- [ ] Navigation with dropdowns
- [ ] Phone CTA button
- [ ] Mobile hamburger menu trigger
- [ ] Sticky on scroll

---

#### T4.3 - Footer Component
```yaml
id: T4.3
name: Footer Component
status: pending
priority: high
dependencies: [T2.1, T2.2, T2.3]
parallel: true
estimated_time: 30min
```
**Files to Create:**
- `src/components/layout/Footer.tsx`

**Acceptance Criteria:**
- [ ] Company info section
- [ ] Services links
- [ ] Locations links
- [ ] Contact info
- [ ] Legal links
- [ ] Copyright

---

#### T4.4 - MobileNav Component
```yaml
id: T4.4
name: MobileNav Component
status: pending
priority: high
dependencies: [T4.2]
parallel: false
estimated_time: 30min
```
**Files to Create:**
- `src/components/layout/MobileNav.tsx`

**Acceptance Criteria:**
- [ ] Slide-out menu
- [ ] All navigation items
- [ ] Prominent phone button
- [ ] Close on route change

---

#### T4.5 - Navigation Data
```yaml
id: T4.5
name: Navigation Data
status: pending
priority: high
dependencies: [T2.2, T2.3]
parallel: true
estimated_time: 15min
```
**Files to Create:**
- `src/lib/data/navigation.ts`

---

### PHASE 5: SECTION COMPONENTS

#### T5.1 - Hero Section
```yaml
id: T5.1
name: Hero Section
status: pending
priority: high
dependencies: [T3.1, T3.2]
parallel: true
estimated_time: 30min
```
**Files to Create:**
- `src/components/sections/Hero.tsx`

**Acceptance Criteria:**
- [ ] H1 with target keyword
- [ ] Subheading with value prop
- [ ] Primary CTA (phone)
- [ ] Secondary CTA (quote)
- [ ] Background image/gradient

---

#### T5.2 - KeyTakeaways Section
```yaml
id: T5.2
name: KeyTakeaways Section
status: pending
priority: high
dependencies: [T1.3]
parallel: true
estimated_time: 20min
```
**Files to Create:**
- `src/components/sections/KeyTakeaways.tsx`

**Critical for AI Overview ranking!**

---

#### T5.3 - ServiceCard Component
```yaml
id: T5.3
name: ServiceCard Component
status: pending
priority: high
dependencies: [T3.3]
parallel: true
estimated_time: 20min
```
**Files to Create:**
- `src/components/sections/ServiceCard.tsx`

---

#### T5.4 - PricingTable Component
```yaml
id: T5.4
name: PricingTable Component
status: pending
priority: high
dependencies: [T1.3]
parallel: true
estimated_time: 25min
```
**Files to Create:**
- `src/components/sections/PricingTable.tsx`

**Critical for BERT optimization - tables have EXTREME confidence!**

---

#### T5.5 - FAQ Component
```yaml
id: T5.5
name: FAQ Component
status: pending
priority: high
dependencies: [T1.3]
parallel: true
estimated_time: 30min
```
**Files to Create:**
- `src/components/sections/FAQ.tsx`

**Acceptance Criteria:**
- [ ] Accordion functionality
- [ ] FAQPage schema integration
- [ ] Geo in all questions

---

#### T5.6 - CTASection Component
```yaml
id: T5.6
name: CTASection Component
status: pending
priority: high
dependencies: [T3.1, T3.2]
parallel: true
estimated_time: 20min
```
**Files to Create:**
- `src/components/sections/CTASection.tsx`

---

#### T5.7 - Testimonials Section
```yaml
id: T5.7
name: Testimonials Section
status: pending
priority: medium
dependencies: [T3.3]
parallel: true
estimated_time: 25min
```
**Files to Create:**
- `src/components/sections/Testimonials.tsx`

---

#### T5.8 - WhyChooseUs Section
```yaml
id: T5.8
name: WhyChooseUs Section
status: pending
priority: medium
dependencies: [T1.3]
parallel: true
estimated_time: 20min
```
**Files to Create:**
- `src/components/sections/WhyChooseUs.tsx`

---

### PHASE 6: SEO COMPONENTS

#### T6.1 - JsonLd Component
```yaml
id: T6.1
name: JsonLd Component
status: pending
priority: high
dependencies: [T2.4]
parallel: true
estimated_time: 15min
```
**Files to Create:**
- `src/components/seo/JsonLd.tsx`

---

#### T6.2 - Breadcrumbs Component
```yaml
id: T6.2
name: Breadcrumbs Component
status: pending
priority: medium
dependencies: [T1.3]
parallel: true
estimated_time: 20min
```
**Files to Create:**
- `src/components/seo/Breadcrumbs.tsx`

---

#### T6.3 - Meta Utilities
```yaml
id: T6.3
name: Meta Utilities
status: pending
priority: high
dependencies: [T2.1]
parallel: true
estimated_time: 20min
```
**Files to Create:**
- `src/lib/seo/meta.ts`

---

### PHASE 7: PAGES

#### T7.1 - Homepage
```yaml
id: T7.1
name: Homepage
status: pending
priority: critical
dependencies: [T4.1, T5.*, T6.1]
parallel: false
estimated_time: 60min
```
**Files to Modify:**
- `src/app/page.tsx`

**Acceptance Criteria:**
- [ ] All sections rendered
- [ ] HVACBusiness schema
- [ ] Internal links to services/locations
- [ ] Meta tags optimized

---

#### T7.2 - Services Index
```yaml
id: T7.2
name: Services Index
status: pending
priority: high
dependencies: [T2.2, T5.3]
parallel: true
estimated_time: 30min
```
**Files to Create:**
- `src/app/services/page.tsx`

---

#### T7.3 - Service Detail Pages
```yaml
id: T7.3
name: Service Detail Pages
status: pending
priority: critical
dependencies: [T2.2, T5.*, T6.1]
parallel: false
estimated_time: 90min
```
**Files to Create:**
- `src/app/services/[service]/page.tsx`

**Acceptance Criteria:**
- [ ] Dynamic route with generateStaticParams
- [ ] Service schema
- [ ] FAQ schema
- [ ] Link UP to homepage in first 80 words
- [ ] Links ACROSS to other services
- [ ] Pricing table

---

#### T7.4 - Locations Index
```yaml
id: T7.4
name: Locations Index
status: pending
priority: high
dependencies: [T2.3]
parallel: true
estimated_time: 30min
```
**Files to Create:**
- `src/app/locations/page.tsx`

---

#### T7.5 - Location Detail Pages
```yaml
id: T7.5
name: Location Detail Pages
status: pending
priority: critical
dependencies: [T2.3, T5.*, T6.1]
parallel: false
estimated_time: 120min
```
**Files to Create:**
- `src/app/locations/[city]/page.tsx`

**Acceptance Criteria:**
- [ ] Dynamic route with generateStaticParams
- [ ] LocalBusiness schema (location-specific)
- [ ] FAQ schema with geo
- [ ] Link UP to homepage immediately
- [ ] Links ACROSS to services
- [ ] Links ACROSS to NEIGHBORING locations only
- [ ] 80% unique content per location

---

#### T7.6 - About Page
```yaml
id: T7.6
name: About Page
status: pending
priority: medium
dependencies: [T4.1, T2.1]
parallel: true
estimated_time: 30min
```
**Files to Create:**
- `src/app/about/page.tsx`

---

#### T7.7 - Contact Page
```yaml
id: T7.7
name: Contact Page
status: pending
priority: high
dependencies: [T4.1, T9.1]
parallel: false
estimated_time: 45min
```
**Files to Create:**
- `src/app/contact/page.tsx`

---

#### T7.8 - 404 Page
```yaml
id: T7.8
name: 404 Page
status: pending
priority: low
dependencies: [T4.1]
parallel: true
estimated_time: 15min
```
**Files to Create:**
- `src/app/not-found.tsx`

---

### PHASE 8: SEO FILES

#### T8.1 - Sitemap Generation
```yaml
id: T8.1
name: Sitemap Generation
status: pending
priority: critical
dependencies: [T2.2, T2.3]
parallel: true
estimated_time: 20min
```
**Files to Create:**
- `src/app/sitemap.ts`

**Acceptance Criteria:**
- [ ] All static pages included
- [ ] All service pages included
- [ ] All location pages included
- [ ] Correct priorities set
- [ ] Accessible at /sitemap.xml

---

#### T8.2 - Robots.txt
```yaml
id: T8.2
name: Robots.txt
status: pending
priority: high
dependencies: [T8.1]
parallel: false
estimated_time: 5min
```
**Files to Create:**
- `src/app/robots.ts`

---

#### T8.3 - Manifest.json
```yaml
id: T8.3
name: Manifest.json
status: pending
priority: low
dependencies: [T2.1]
parallel: true
estimated_time: 10min
```
**Files to Create:**
- `src/app/manifest.ts`

---

### PHASE 9: FORMS

#### T9.1 - Contact Form
```yaml
id: T9.1
name: Contact Form
status: pending
priority: high
dependencies: [T3.5, T1.2]
parallel: true
estimated_time: 45min
```
**Files to Create:**
- `src/components/forms/ContactForm.tsx`

---

#### T9.2 - Quote Form
```yaml
id: T9.2
name: Quote Form
status: pending
priority: medium
dependencies: [T3.5, T1.2]
parallel: true
estimated_time: 45min
```
**Files to Create:**
- `src/components/forms/QuoteForm.tsx`

---

#### T9.3 - Form Validation
```yaml
id: T9.3
name: Form Validation
status: pending
priority: high
dependencies: [T1.2]
parallel: true
estimated_time: 20min
```
**Files to Create:**
- `src/lib/validations/forms.ts`

---

### PHASE 10: TESTING

#### T10.1 - Build Verification
```yaml
id: T10.1
name: Build Verification
status: pending
priority: critical
dependencies: [T7.*]
parallel: false
estimated_time: 15min
```
**Commands:**
```bash
npm run build
npm run lint
```

---

#### T10.2 - Link Checking
```yaml
id: T10.2
name: Link Checking
status: pending
priority: high
dependencies: [T10.1]
parallel: true
estimated_time: 20min
```

---

#### T10.3 - Schema Validation
```yaml
id: T10.3
name: Schema Validation
status: pending
priority: high
dependencies: [T10.1]
parallel: true
estimated_time: 30min
```
**Tool:** Google Rich Results Test

---

#### T10.4 - Performance Testing
```yaml
id: T10.4
name: Performance Testing
status: pending
priority: high
dependencies: [T10.1]
parallel: true
estimated_time: 20min
```
**Tool:** Lighthouse CI

---

#### T10.5 - Mobile Testing
```yaml
id: T10.5
name: Mobile Testing
status: pending
priority: high
dependencies: [T10.1]
parallel: true
estimated_time: 20min
```

---

### PHASE 11: DEPLOYMENT

#### T11.1 - Production Build
```yaml
id: T11.1
name: Production Build
status: pending
priority: critical
dependencies: [T10.*]
parallel: false
estimated_time: 10min
```

---

#### T11.2 - Deploy to Server
```yaml
id: T11.2
name: Deploy to Server
status: pending
priority: critical
dependencies: [T11.1]
parallel: false
estimated_time: 30min
```

---

#### T11.3 - DNS Configuration
```yaml
id: T11.3
name: DNS Configuration
status: pending
priority: critical
dependencies: [T11.2]
parallel: false
estimated_time: 15min
```

---

#### T11.4 - SSL Verification
```yaml
id: T11.4
name: SSL Verification
status: pending
priority: critical
dependencies: [T11.3]
parallel: false
estimated_time: 10min
```

---

## Parallel Execution Strategy

### Stream 1: Core Setup + Layout
```
T1.1 → T1.2 → T4.1 → T4.2 → T4.4
```

### Stream 2: Data Layer
```
T1.1 → T2.1 → T2.4
     → T2.2 → T2.4
     → T2.3 → T2.4
```

### Stream 3: UI Components
```
T1.3 → T3.1 → T5.1
     → T3.2 → T5.6
     → T3.3 → T5.3
     → T3.4
     → T3.5 → T9.1
```

### Stream 4: SEO
```
T2.4 → T6.1 → T7.1
     → T6.2
     → T6.3
```

---

## Usage with Claude Code

### Single Session
```bash
export CLAUDE_CODE_TASK_LIST_ID=airconditioningchamp-migration
claude
```

### Multi-Agent Setup
```bash
# Terminal 1 - Layout Agent
export CLAUDE_CODE_TASK_LIST_ID=airconditioningchamp-migration
claude -p "Work on Stream 1: Core Setup + Layout tasks"

# Terminal 2 - Data Agent
export CLAUDE_CODE_TASK_LIST_ID=airconditioningchamp-migration
claude -p "Work on Stream 2: Data Layer tasks"

# Terminal 3 - Components Agent
export CLAUDE_CODE_TASK_LIST_ID=airconditioningchamp-migration
claude -p "Work on Stream 3: UI Components tasks"

# Terminal 4 - SEO Agent
export CLAUDE_CODE_TASK_LIST_ID=airconditioningchamp-migration
claude -p "Work on Stream 4: SEO tasks"
```

### Monitor Progress
Press `Ctrl + T` in any session to toggle task visibility.

---

## Completion Checklist

- [ ] All Phase 1 tasks complete
- [ ] All Phase 2 tasks complete
- [ ] All Phase 3 tasks complete
- [ ] All Phase 4 tasks complete
- [ ] All Phase 5 tasks complete
- [ ] All Phase 6 tasks complete
- [ ] All Phase 7 tasks complete
- [ ] All Phase 8 tasks complete
- [ ] All Phase 9 tasks complete
- [ ] All Phase 10 tasks complete
- [ ] All Phase 11 tasks complete
- [ ] Site live and indexed

---

*This task list is designed for use with Claude Code's task management system.*
