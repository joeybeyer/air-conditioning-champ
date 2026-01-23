# Air Conditioning Champ - Next.js Migration

Expert HVAC Services Lead Generation Site for West Valley, Arizona

## 🎯 Project Overview

**Domain:** airconditioningchamp.com  
**Type:** Local Lead Generation Site  
**Service Area:** West Valley Arizona (El Mirage, Surprise, Peoria, Glendale, Goodyear, Avondale, Buckeye, Litchfield Park, Sun City, Sun City West)  
**Industry:** HVAC / Air Conditioning Services  

## 📋 Migration Summary

| Current State | Target State |
|---------------|--------------|
| Bolt.new (Vite + React + TS) | Next.js 14 App Router |
| Client-side rendering | SSG + ISR |
| No SEO optimization | Full AI Overview optimization |
| Single page app | Hub & Spoke architecture |

## 🏗️ Architecture (Hub & Spoke Model)

```
airconditioningchamp.com/
├── / (Homepage - City Hub for West Valley)
├── /services/
│   ├── /ac-repair/
│   ├── /ac-installation/
│   ├── /ac-maintenance/
│   ├── /heating-repair/
│   ├── /hvac-tune-up/
│   └── /emergency-service/
├── /locations/
│   ├── /el-mirage-az/
│   ├── /surprise-az/
│   ├── /peoria-az/
│   ├── /glendale-az/
│   ├── /goodyear-az/
│   ├── /avondale-az/
│   ├── /buckeye-az/
│   ├── /litchfield-park-az/
│   ├── /sun-city-az/
│   └── /sun-city-west-az/
├── /blog/ (PAA/FAQ Content)
├── /about/
├── /contact/
└── /sitemap.xml
```

### ⚠️ Critical Architecture Rules

1. **NEVER** create `/el-mirage-ac-repair/` (City + Service combo pages)
2. **DO** create `/locations/el-mirage-az/` + `/services/ac-repair/` separately
3. Hub pages link DOWN to spokes, spokes link UP to hub + ACROSS to siblings

## 🚀 Quick Start

```bash
# Clone and install
git clone <repo>
cd airconditioningchamp-nextjs
npm install

# Development
npm run dev

# Build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
airconditioningchamp-nextjs/
├── app/
│   ├── layout.tsx              # Root layout with schema
│   ├── page.tsx                # Homepage (West Valley Hub)
│   ├── services/
│   │   ├── page.tsx            # Services index
│   │   └── [service]/
│   │       └── page.tsx        # Dynamic service pages
│   ├── locations/
│   │   ├── page.tsx            # Locations index
│   │   └── [city]/
│   │       └── page.tsx        # Dynamic city pages
│   ├── blog/
│   │   ├── page.tsx            # Blog index
│   │   └── [slug]/
│   │       └── page.tsx        # Blog posts
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── sitemap.ts              # Dynamic sitemap generation
│   └── robots.ts               # Robots.txt generation
├── components/
│   ├── ui/                     # Reusable UI components
│   ├── layout/                 # Header, Footer, Nav
│   ├── sections/               # Page sections (Hero, CTA, etc.)
│   ├── seo/                    # Schema components
│   └── forms/                  # Contact/Quote forms
├── lib/
│   ├── data/                   # Static data (services, cities)
│   ├── schema/                 # JSON-LD schema generators
│   ├── seo/                    # Meta tag utilities
│   └── utils/                  # Helper functions
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── styles/
│   └── globals.css             # Tailwind + custom styles
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🔧 Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Deployment | Vercel / DirectAdmin |
| Analytics | Google Analytics 4 |
| Call Tracking | Retreaver/Ringba |
| Forms | React Hook Form |
| Schema | JSON-LD |

## 📊 SEO Performance Targets

| Metric | Target |
|--------|--------|
| Page Load | < 100ms (Grounding Box) |
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| AI Overview Ranking | 3 days |

## 🎨 Design System

### Brand Colors
```css
--primary: #1E40AF;      /* Blue 800 */
--secondary: #DC2626;    /* Red 600 */
--accent: #F59E0B;       /* Amber 500 */
--background: #FFFFFF;
--text: #1F2937;         /* Gray 800 */
```

### Typography
- **Headings:** Inter (Bold)
- **Body:** Inter (Regular)
- **Accent:** Inter (Medium)

## 📞 Call Tracking Integration

```typescript
// Phone number format for tracking
const TRACKING_NUMBER = "(XXX) XXX-XXXX";
const DISPLAY_NUMBER = "(XXX) XXX-XXXX";

// Retreaver/Ringba pixel integration in layout.tsx
```

## 🔗 Internal Linking Formula

```
1 UP + 2-3 ACROSS = Money
```

- **1 UP:** Every spoke page links to City Hub (first paragraph)
- **2-3 ACROSS:** Link to related service pages
- **2-3 ACROSS:** Link to neighboring locations

## 📋 Content Requirements

### Every Service Page Must Have:
1. ✅ Key Takeaways (3 bullet points) immediately after H1
2. ✅ Service + Geo within 2 tokens in H2s
3. ✅ FAQ section with FAQPage schema
4. ✅ Pricing table (BERT loves tables)
5. ✅ Internal link in first 80-100 words
6. ✅ 80% unique content per page

### Every Location Page Must Have:
1. ✅ Local landmarks and roads mentioned
2. ✅ Microclimate content (Arizona heat specifics)
3. ✅ Community-specific FAQs
4. ✅ Neighborhood cost/time data
5. ✅ Links UP to hub + ACROSS to neighbors

## 📈 Schema Implementation

### Homepage (LocalBusiness)
```json
{
  "@type": "HVACBusiness",
  "name": "Air Conditioning Champ",
  "areaServed": [...West Valley cities],
  "hasOfferCatalog": {...services}
}
```

### Service Pages (Service Schema)
```json
{
  "@type": "Service",
  "provider": {...business},
  "areaServed": [...cities],
  "offers": {...pricing}
}
```

### Location Pages (LocalBusiness + areaServed)
```json
{
  "@type": "HVACBusiness",
  "areaServed": {specific city},
  "address": {...}
}
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel --prod
```

### DirectAdmin Server
```bash
# Build locally
npm run build

# Upload source files (not .next folder)
# Build on server
npm install && npm run build
pm2 start npm --name "ac-champ" -- start
```

## 📝 Environment Variables

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://airconditioningchamp.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_PHONE=XXX-XXX-XXXX
NEXT_PUBLIC_TRACKING_NUMBER=XXX-XXX-XXXX
RETREAVER_CAMPAIGN_KEY=xxx
```

## 🔄 Migration Checklist

- [ ] Extract components from Bolt.new src/
- [ ] Convert to Next.js App Router structure
- [ ] Implement Hub & Spoke architecture
- [ ] Add JSON-LD schema to all pages
- [ ] Implement dynamic sitemap
- [ ] Add robots.txt
- [ ] Set up call tracking pixel
- [ ] Configure analytics
- [ ] Performance optimization
- [ ] Deploy and verify indexing

## 📚 Related Documentation

- [CLAUDE.md](./CLAUDE.md) - AI assistant guidelines
- [SPEC.md](./SPEC.md) - Technical specification
- [MIGRATION-PLAN.md](./MIGRATION-PLAN.md) - Step-by-step migration
- [SEO-CHECKLIST.md](./SEO-CHECKLIST.md) - SEO implementation checklist

## 👥 Team

- **Development:** Claude AI / Joseph
- **SEO Strategy:** SKILL-EXPANDED.md methodology
- **Deployment:** Vercel / DirectAdmin

---

**Air Conditioning Champ** - Expert HVAC Services in West Valley, Arizona  
24/7 Emergency Service Available | Licensed & Insured
