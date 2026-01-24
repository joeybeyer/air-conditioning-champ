# Multi-Location Expansion Plan

## Overview

Expanding Air Conditioning Champ to support multiple GBP (Google Business Profile) locations with location-specific phone numbers, addresses, and map embeds.

---

## Phone Number Strategy

| Context | Phone Number |
|---------|--------------|
| Homepage | (888) 284-1430 |
| Service pages | (888) 284-1430 |
| Header/Footer (non-location pages) | (888) 284-1430 |
| Location pages with GBP | Location-specific number |
| West Valley AZ locations (no GBP) | (623) 301-9085 (Surprise) |

---

## Locations with GBP Listings (9 total)

### Arizona

| Location | Phone | Address | Embed |
|----------|-------|---------|-------|
| Surprise, AZ | (623) 301-9085 | 12801 W Bell Rd, Surprise, AZ 85378 | Has embed |
| Cave Creek, AZ | (480) 866-9234 | 6070 E Cave Creek Rd, Cave Creek, AZ 85331 | Has embed |

### Texas

| Location | Phone | Address | Embed |
|----------|-------|---------|-------|
| San Antonio, TX | (210) 964-1940 | 3103 SE Loop 410 Acc Rd, San Antonio, TX 78222 | Pending |

### Nevada

| Location | Phone | Address | Embed |
|----------|-------|---------|-------|
| North Las Vegas, NV | (702) 725-4220 | 2409 Las Vegas Blvd N, North Las Vegas, NV 89030 | Pending |

### California

| Location | Phone | Address | Embed |
|----------|-------|---------|-------|
| Santee, CA | (619) 649-7174 | 11493 Woodside Ave, Santee, CA 92071 | Pending |
| Carlsbad, CA | (619) 649-7175 | 7147 University Ave, La Mesa, CA 91942 | Pending |
| El Cajon, CA | (619) 649-7221 | 1202 W Main St, El Cajon, CA 92020 | Pending |
| Poway, CA | (858) 256-1901 | 12147 Kirkham Rd, Poway, CA 92064 | Pending |
| Orange, CA | (657) 202-8088 | 383 N Cambridge St, Orange, CA 92866 | Has embed |

---

## West Valley AZ Locations (No Individual GBP - Use Surprise Number)

These location pages exist but don't have their own GBP listings. They will use the Surprise location number **(623) 301-9085** since they're all in the West Valley service area.

- El Mirage, AZ
- Peoria, AZ
- Glendale, AZ
- Goodyear, AZ
- Avondale, AZ
- Buckeye, AZ
- Litchfield Park, AZ
- Sun City, AZ
- Sun City West, AZ

---

## Google Maps Embed Codes

### Surprise, AZ
```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4922.1036633803305!2d-112.3365012!3d33.6371743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b4574338533c7%3A0x71bf2d0ecd377a5a!2sAir%20Conditioning%20Champ!5e1!3m2!1sen!2sus!4v1769277847932!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
```

### Cave Creek, AZ
```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.1940606084963!2d-111.94957099999999!3d33.8331057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b7fcbead6da35%3A0xe24fdad0b5bf6fb5!2sAir%20Conditioning%20Champ!5e0!3m2!1sen!2sus!4v1769277824994!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
```

### Orange, CA
```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4913.178439736143!2d-117.8441653!3d33.7930093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd9004b6a13b5%3A0x5aee7f630d5a41d9!2sAir%20Conditioning%20Champ!5e1!3m2!1sen!2sus!4v1769278849899!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
```

---

## Redirect Required

| From | To | Type |
|------|-----|------|
| `/air-conditioner-repair-cave-creek-az` | `/locations/cave-creek-az` | 301 |

---

## Implementation Changes

### 1. Data Structure Updates

#### Update `src/lib/data/locations.ts`

Add new fields to Location interface:
```typescript
export interface Location {
  // Existing fields...
  slug: string;
  city: string;
  state: string;
  // ...

  // NEW FIELDS
  phone?: string;           // Location-specific phone (formatted)
  phoneRaw?: string;        // Location-specific phone (raw for tel: links)
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  googleMapsEmbed?: string; // GBP embed URL
  hasGBP: boolean;          // Whether this location has a Google Business Profile
  parentGBP?: string;       // Slug of GBP location to use for phone (for non-GBP locations)
}
```

Add 7 new location entries:
- San Antonio, TX
- North Las Vegas, NV
- Santee, CA
- Carlsbad, CA
- El Cajon, CA
- Poway, CA
- Orange, CA

Update existing locations:
- Surprise, AZ - add phone, address, embed, hasGBP: true
- Cave Creek, AZ - add phone, address, embed, hasGBP: true
- Other 9 West Valley AZ locations - hasGBP: false, parentGBP: 'surprise-az'

#### Update `src/lib/data/company.ts`

```typescript
export const COMPANY = {
  // ...existing fields

  // Update main phone to 888 number
  phone: '(888) 284-1430',
  phoneRaw: '+18882841430',

  // Keep AZ address as headquarters
  address: {
    streetAddress: '12801 W Bell Rd',
    city: 'Surprise',
    state: 'AZ',
    // ...
  },
};
```

### 2. Helper Functions

#### Create `src/lib/utils/location-helpers.ts`

```typescript
// Get phone for a location
// - If location has GBP, return its phone
// - If location is in West Valley AZ (no GBP), return Surprise phone
// - Otherwise return main 888 number
export function getPhoneForLocation(location: Location): { phone: string; phoneRaw: string }

// Get address for a location (returns location address or null)
export function getAddressForLocation(location: Location): Address | null

// Check if location has GBP
export function locationHasGBP(location: Location): boolean

// West Valley AZ locations that use Surprise phone
const WEST_VALLEY_LOCATIONS = [
  'el-mirage-az', 'peoria-az', 'glendale-az', 'goodyear-az',
  'avondale-az', 'buckeye-az', 'litchfield-park-az',
  'sun-city-az', 'sun-city-west-az'
];
```

### 3. Component Updates

#### Location Page (`src/app/locations/[slug]/page.tsx`)

- Display location-specific phone number if hasGBP
- Display location address if hasGBP
- Show Google Maps embed if available
- Update schema to use location-specific phone/address

#### Header (`src/components/layout/Header.tsx`)

- Accept optional `location` prop
- Show location phone if on location page with GBP
- Show main (888) number otherwise

#### Footer (`src/components/layout/Footer.tsx`)

- Show main (888) number in main contact section
- Add "Our Locations" section listing GBP locations with their addresses/phones

#### CTASection (`src/components/sections/CTASection.tsx`)

- Accept optional `phone` prop
- Use location phone on location pages, main number elsewhere

### 4. Schema Updates

#### `src/lib/schema/generators.ts`

Update `generateLocationSchema(location)`:
- Use `location.phone` if available
- Use `location.address` if available
- Only generate LocalBusiness schema for locations with GBP

### 5. Redirect Configuration

#### Create/Update `next.config.js`

```javascript
module.exports = {
  async redirects() {
    return [
      {
        source: '/air-conditioner-repair-cave-creek-az',
        destination: '/locations/cave-creek-az',
        permanent: true, // 301
      },
    ];
  },
};
```

---

## Competitive Analysis & Content Strategy

### Market Analysis Summary

**Key Competitors by Market:**

| Market | Top Competitors | Content Depth | Gaps to Exploit |
|--------|-----------------|---------------|-----------------|
| San Antonio, TX | Jon Wayne, Cowboys AC, Goettl, Air & Plumbing Today | 8,000-10,000 words, heavy trust signals | Local climate content, pricing transparency, humidity-specific issues |
| North Las Vegas, NV | NRS Vegas, Air Supply Inc, Buenos Aires AC, Climate Control Solutions | Moderate (2,000-4,000 words) | Desert-specific maintenance tips, dust/heat stress content |
| San Diego County (Santee, El Cajon, Poway, Carlsbad) | Bill Howe, Same Day SD, Precision Temperature, Maximum Comfort | Light-moderate, schema-heavy | Coastal vs inland climate differences, detailed local neighborhoods |
| Orange County (Orange, CA) | AC Cool, Service Champions, Alicia Air, Dial One Sonshine | Moderate, established players since 1980s-90s | Santa Ana wind content, newer service approach |

### Content Requirements to Outrank

**Minimum Content Standards (to compete):**
- 2,500+ words per location page
- 6-8 FAQs with city name in every question
- Pricing table with specific cost ranges
- 5+ trust signals (reviews, certifications, years in business)
- Service area with neighborhoods list

**Content Differentiators (to outrank):**
- Climate-specific AC problems section (unique to each region)
- Detailed pricing breakdown with component costs
- Response time guarantees specific to that city
- Local landmarks/roads for geographic relevance
- Before/after scenarios or case studies
- Emergency-specific content (24/7 prominence)

---

## Location-Specific Content Strategy

### San Antonio, TX

**Primary Keywords:**
- AC repair San Antonio TX
- Air conditioning service San Antonio
- HVAC company San Antonio
- Emergency AC repair San Antonio
- AC repair cost San Antonio

**Climate Content (Unique Angle):**
- Humid subtropical climate (transitional)
- Summer temps frequently exceed 100°F
- High humidity causes: refrigerant leaks, frozen coils, overworked compressors
- Monsoon moisture affects condenser coils and drain lines
- July is most humid month (27+ muggy days)

**Pricing Content:**
| Service | San Antonio Price Range |
|---------|------------------------|
| AC Diagnostic | $75-$150 |
| Minor Repairs | $150-$500 |
| Refrigerant Leak | $500-$1,500 |
| Compressor Replacement | $1,500-$3,500 |
| Full System Replacement | $4,500-$12,000 |

**Neighborhoods to Include:**
- Alamo Heights, Stone Oak, The Dominion, Helotes
- Leon Valley, Castle Hills, Shavano Park, Hollywood Park
- Terrell Hills, Olmos Park, Monte Vista, Southtown

**FAQs (6 minimum):**
1. How much does AC repair cost in San Antonio?
2. Why does San Antonio humidity affect my AC?
3. How quickly can you respond to AC emergencies in San Antonio?
4. What causes AC to freeze up in San Antonio summers?
5. Do you offer 24/7 emergency AC repair in San Antonio?
6. How often should I service my AC in San Antonio's climate?

---

### North Las Vegas, NV

**Primary Keywords:**
- AC repair North Las Vegas NV
- HVAC service North Las Vegas
- Air conditioning North Las Vegas
- Emergency AC repair Las Vegas
- Desert climate AC maintenance

**Climate Content (Unique Angle):**
- Extreme Mojave Desert heat: 115°F+ summers
- Desert dust clogs filters and condenser coils
- Year-round system usage (cooling + heating)
- Low humidity causes different issues than humid climates
- AC systems work harder, lifespan 10-15 years vs 15-20 elsewhere

**Pricing Content:**
| Service | North Las Vegas Price Range |
|---------|----------------------------|
| AC Diagnostic | $75-$150 |
| Capacitor Replacement | $150-$350 |
| Refrigerant Recharge | $200-$400 |
| Compressor Repair | $350-$800 |
| Full Replacement | $4,500-$12,000 |

**Neighborhoods to Include:**
- Aliante, Eldorado, North Valley
- Centennial Hills, Lone Mountain, Tule Springs
- Craig Ranch, Tropical Parkway area

**FAQs (6 minimum):**
1. How long do AC units last in the Las Vegas desert heat?
2. How often should I change my AC filter in North Las Vegas?
3. Why does desert dust affect my AC performance?
4. How much does AC replacement cost in North Las Vegas?
5. Do you offer emergency AC repair in North Las Vegas?
6. What temperature should I set my AC to in Las Vegas summer?

---

### Santee, CA (San Diego County)

**Primary Keywords:**
- AC repair Santee CA
- HVAC service Santee San Diego
- Air conditioning repair Santee
- Heating and cooling Santee

**Climate Content (Unique Angle):**
- Inland San Diego location = hotter than coastal areas
- Summer temps 80-90°F (vs 65-75°F coastal)
- Less humidity than coast, but still present
- 30-degree daily temperature swings possible
- Marine layer influence occasional

**Pricing Content:**
| Service | San Diego County Price Range |
|---------|------------------------------|
| AC Diagnostic | $89-$150 |
| Minor Repairs | $100-$500 |
| Mid-Range Repairs | $300-$800 |
| Major Component | $800-$3,000 |
| Compressor Replacement | $1,500-$3,500 |

**Neighborhoods to Include:**
- Santee Lakes area, Carlton Hills, Carlton Oaks
- West Hills, Prospect Ave corridor, Town Center
- Fanita Ranch, Magnolia, Eucalyptus Hills

**FAQs (6 minimum):**
1. How much does AC repair cost in Santee?
2. Why is Santee hotter than coastal San Diego?
3. Do you offer same-day AC repair in Santee?
4. How often should I service my AC in Santee's climate?
5. What AC brands do you service in Santee?
6. Do you provide emergency AC repair in Santee?

---

### El Cajon, CA

**Primary Keywords:**
- AC repair El Cajon CA
- HVAC service El Cajon
- Air conditioning El Cajon San Diego
- Heating and cooling El Cajon

**Climate Content:**
- East County inland location
- "The Box" nickname = trapped heat in valley
- Significantly hotter than coastal San Diego
- Summer temps regularly 90°F+
- Low humidity compared to coast

**Neighborhoods to Include:**
- Fletcher Hills, Granite Hills, Bostonia
- Greenfield, Winter Gardens, Lakeside adjacent
- Hillsdale, Crest, Harbison Canyon

---

### Poway, CA

**Primary Keywords:**
- AC repair Poway CA
- HVAC service Poway
- Air conditioning Poway San Diego

**Climate Content:**
- Inland North County location
- "City in the Country" character
- Warmer than coastal, cooler than El Cajon
- Mix of older homes and newer developments

**Neighborhoods to Include:**
- Poway Business Park area, Old Poway
- Garden Road corridor, Twin Peaks
- Midland, South Poway, Highland Ranch

---

### Carlsbad, CA

**Primary Keywords:**
- AC repair Carlsbad CA
- HVAC Carlsbad San Diego
- Air conditioning service Carlsbad

**Climate Content:**
- Coastal North County location
- Milder temperatures than inland (65-80°F summer)
- Higher humidity from ocean influence
- Less AC usage = systems may be neglected
- Salt air corrosion concerns for outdoor units

**Neighborhoods to Include:**
- Carlsbad Village, La Costa, Aviara
- Bressi Ranch, Calavera Hills, Rancho Carrillo
- Carlsbad Ranch, The Foothills

---

### Orange, CA (Orange County)

**Primary Keywords:**
- AC repair Orange CA
- HVAC service Orange County
- Air conditioning Orange California
- AC repair Orange County

**Climate Content (Unique Angle):**
- Mediterranean climate with warm, dry summers
- Santa Ana winds: 10-25 events/year bringing extreme heat
- During Santa Ana conditions, temps can reach 104-106°F
- Low humidity during Santa Ana events creates critical conditions
- 284 sunny days annually = high AC demand

**Pricing Content:**
| Service | Orange County Price Range |
|---------|--------------------------|
| AC Diagnostic | $75-$150 |
| Thermostat Replacement | $100-$450 |
| Refrigerant Issues | $300-$1,500 |
| Compressor Replacement | $1,500-$3,500 |

**Neighborhoods to Include:**
- Old Towne Orange, Orange Park Acres
- Villa Park adjacent, Santiago Hills
- El Modena, Olive, Chapman University area
- Orange Hills, Anaheim Hills adjacent

**FAQs (6 minimum):**
1. How much does AC repair cost in Orange, CA?
2. How do Santa Ana winds affect my AC system?
3. Do you offer 24/7 emergency AC repair in Orange?
4. What AC maintenance is needed in Orange County's climate?
5. How long do AC units last in Orange County?
6. Do you service all AC brands in Orange, CA?

---

## Content Gaps to Exploit (Competitor Weaknesses)

Based on competitive analysis, create content competitors are missing:

1. **Climate-Specific Problem Guides**
   - "Why San Antonio Humidity Destroys AC Systems"
   - "Desert Dust: The Hidden Enemy of Las Vegas AC Units"
   - "Coastal vs Inland: How San Diego Microclimates Affect Your AC"
   - "Santa Ana Winds: Preparing Your Orange County AC"

2. **Transparent Pricing Content**
   - Detailed cost breakdowns (most competitors vague)
   - "What's Included in Our $89 Diagnostic"
   - Cost comparison tables

3. **Emergency Response Specifics**
   - Actual response time commitments per city
   - What happens when you call (process transparency)
   - After-hours pricing clarity

4. **Local Trust Signals**
   - Specific neighborhoods served (competitors list generically)
   - Local landmarks as reference points
   - City-specific testimonials

---

## New Location Content Requirements

Each new location needs full content for the location page:

- [ ] `climateNotes` - Local climate info (heat, humidity, etc.)
- [ ] `neighborhoods` - 5-8 neighborhoods served
- [ ] `landmarks` - Local landmarks
- [ ] `majorRoads` - Main highways/roads
- [ ] `nearbyLocations` - Other locations in same region (for ACROSS links)
- [ ] `localInfo` - City history/character
- [ ] `faqs` - 5-6 location-specific FAQs with city name in each
- [ ] `keyTakeaways` - 3-4 bullet points
- [ ] `metaTitle` / `metaDescription`
- [ ] Pricing table with local market rates
- [ ] Climate-specific content (2-3 paragraphs minimum)
- [ ] Trust signals (response time, certifications)

---

## Implementation Order

### Phase 1: Data & Config
1. Update `company.ts` with main (888) number
2. Update Location interface in `locations.ts`
3. Add phone/address/embed to Surprise and Cave Creek
4. Add 7 new location entries with full content
5. Create location helper functions
6. Add 301 redirect in next.config.js

### Phase 2: Components
7. Update location page template to show location-specific info
8. Update Header to support location-aware phone
9. Update Footer with locations section
10. Update CTASection to accept phone prop

### Phase 3: Schema & SEO
11. Update schema generators for location-specific data
12. Update sitemap to include new locations
13. Verify all metadata is correct

### Phase 4: Cleanup
14. Delete `/air-conditioner-repair-cave-creek-az` page (redirect handles it)
15. Test all pages render correctly
16. Verify phone numbers are correct per location

---

## Files to Modify

- `src/lib/data/company.ts` - Main phone number
- `src/lib/data/locations.ts` - Add fields, add 7 new locations
- `src/lib/utils/location-helpers.ts` - New file
- `src/lib/schema/generators.ts` - Location-specific schema
- `src/app/locations/[slug]/page.tsx` - Location page template
- `src/components/layout/Header.tsx` - Location-aware phone
- `src/components/layout/Footer.tsx` - Locations section
- `src/components/sections/CTASection.tsx` - Phone prop
- `next.config.js` or `next.config.ts` - Redirects
- `src/app/sitemap.ts` - New locations

## Files to Delete

- `src/app/air-conditioner-repair-cave-creek-az/page.tsx` - After redirect is in place
