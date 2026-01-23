# MIGRATION-PLAN.md

## Bolt.new → Next.js Migration Plan

**Project:** Air Conditioning Champ  
**Current Stack:** Vite + React + TypeScript + Tailwind (Bolt.new)  
**Target Stack:** Next.js 14 App Router + TypeScript + Tailwind  
**Estimated Time:** 2-3 days  

---

## Phase 0: Pre-Migration Analysis

### Current Project Structure (Bolt.new)

```
Air Conditioning Champ/
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── components/
│   ├── pages/
│   └── assets/
├── .bolt/
└── dist/
```

### Items to Migrate

| Item | Action | Priority |
|------|--------|----------|
| React Components | Convert to Next.js components | High |
| Tailwind Config | Migrate with adjustments | High |
| Assets/Images | Move to public/ | High |
| CSS Styles | Convert to globals.css | Medium |
| TypeScript Config | Update for Next.js | Medium |
| Environment Variables | Rename VITE_ to NEXT_PUBLIC_ | High |
| Routing | Convert from React Router to App Router | High |

### Items to Discard

- `vite.config.ts` - Not needed in Next.js
- `.bolt/` folder - Bolt.new specific
- `index.html` - Next.js handles this
- `main.tsx` - Replaced by Next.js entry points
- `dist/` folder - Build artifacts

---

## Phase 1: Project Setup

### 1.1 Create New Next.js Project

```bash
npx create-next-app@latest airconditioningchamp-nextjs \
  --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

cd airconditioningchamp-nextjs
```

### 1.2 Install Dependencies

```bash
npm install lucide-react react-hook-form @hookform/resolvers zod
```

### 1.3 Environment Variables

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://airconditioningchamp.com
NEXT_PUBLIC_SITE_NAME=Air Conditioning Champ
NEXT_PUBLIC_PHONE=(XXX) XXX-XXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## Phase 2: Directory Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   └── [service]/page.tsx
│   ├── locations/
│   │   ├── page.tsx
│   │   └── [city]/page.tsx
│   ├── blog/
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ui/
│   ├── layout/
│   ├── sections/
│   ├── seo/
│   └── forms/
├── lib/
│   ├── data/
│   ├── schema/
│   └── utils/
└── styles/
```

---

## Phase 3-10: See TASKS.md for Detailed Breakdown

The detailed task breakdown with dependencies is in TASKS.md, designed for use with Claude Code's task management system.

---

## Quick Reference: Key Differences

| Bolt.new (Vite) | Next.js 14 |
|-----------------|------------|
| `main.tsx` entry | `app/layout.tsx` + `app/page.tsx` |
| React Router | App Router (folder-based) |
| `VITE_` env vars | `NEXT_PUBLIC_` env vars |
| Client-side only | SSG/SSR/ISR options |
| Manual SEO | Built-in metadata API |
| `index.html` | Auto-generated |
| `<img>` tags | `<Image>` component |
| `<a>` tags | `<Link>` component |

---

## Post-Migration Verification

1. **Build Test:** `npm run build` passes
2. **All Routes Work:** No 404s on any page
3. **Schema Validates:** Google Rich Results Test passes
4. **Performance:** Lighthouse > 90 all categories
5. **Mobile:** Responsive on all devices
6. **Forms:** Submit correctly
7. **Tracking:** Analytics and call tracking work

---

*See TASKS.md for the complete task breakdown with dependencies.*
