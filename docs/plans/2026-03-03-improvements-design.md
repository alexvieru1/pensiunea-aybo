# Pensiunea Aybo - Improvements Design

**Date:** 2026-03-03
**Status:** Approved

## Overview

Upgrade the Pensiunea Aybo guesthouse landing site from prototype to production-ready. Covers: contact form backend (SendGrid), real content, booking integration, SEO, image optimization, GDPR compliance, dependency cleanup, and error handling.

## 1. Contact Form Backend (SendGrid)

- Install `@sendgrid/mail` via pnpm
- Create `app/api/contact/route.ts` — POST handler
  - Validate: name (required), phone (required), email (required), dates (optional), message (required)
  - Send via SendGrid to client email (from env var `CONTACT_EMAIL`)
  - Return JSON response with success/error
- Environment variables: `SENDGRID_API_KEY`, `CONTACT_EMAIL` in `.env.local`
- Update `contact-section.tsx`:
  - Re-enable email field
  - Wire form to `POST /api/contact` with fetch
  - Add loading, success, and error UI states
- Basic in-memory rate limiting (no external deps)

## 2. Content Fixes

- Replace placeholder address with: **Str. Brizei 22, 907015 Agigea, Romania**
  - In `contact-section.tsx`
  - In `site-footer.tsx`
- Social links: keep icons but mark with TODO for real URLs, leave as non-functional until provided
- Add interactive Google Maps embed (iframe) in contact section for real address

## 3. Booking Integration

- Pricing section CTA buttons: link to booking.com listing
- Booking.com URL (canonical): `https://www.booking.com/hotel/ro/pensiunea-aybo.ro.html`
- Navbar "Rezerva o camera" button: keep `tel:` as primary action
- Add booking.com as secondary option in pricing cards

## 4. SEO & Metadata

- `layout.tsx` metadata:
  - Title: "Pensiunea Aybo | Cazare Agigea, Constanta"
  - Description: Romanian description of guesthouse
  - Open Graph: title, description, image (hero image)
  - Twitter card
- Static `robots.txt` in `/public`
- Static `sitemap.xml` in `/public`
- Generate favicon from `aybo-logo.png` (favicon.ico + apple-touch-icon)
- JSON-LD structured data for `LodgingBusiness` schema

## 5. Image Optimization

- Convert `1.jpg`, `2.jpg`, `3.jpg` to WebP
- Delete original JPGs
- Update references in `hero-section.tsx`
- Configure `next.config.ts` with image optimization settings

## 6. Dependency Cleanup

- Delete `package-lock.json` (pnpm only)
- Remove `framer-motion` (keep `motion` — same library rebranded)
- Remove `lucide-react` (keep `@tabler/icons-react`)
- Update any imports that used lucide to use tabler equivalents
- Delete unused default Next.js SVGs from `/public` (file.svg, globe.svg, window.svg, next.svg, vercel.svg)

## 7. GDPR Compliance

- Create `app/termeni/page.tsx` — Romanian terms & privacy policy template
- Cookie consent banner component:
  - Bottom bar with Accept/Decline
  - Stores preference in localStorage
  - Conditionally loads analytics (future-proofed)

## 8. Error & Loading States

- `app/not-found.tsx` — custom 404 matching site design
- `app/loading.tsx` — loading skeleton
- `app/error.tsx` — error boundary with retry

## 9. Misc Cleanup

- Remove commented-out code in contact section
- Clean unused imports
- Ensure all CTA buttons have proper destinations
