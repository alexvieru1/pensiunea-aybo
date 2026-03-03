# Pensiunea Aybo Improvements - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Upgrade Pensiunea Aybo from prototype to production-ready guesthouse website with working contact form, real content, SEO, GDPR compliance, and clean dependencies.

**Architecture:** Single-page Next.js 15 app with App Router. SendGrid API route for contact form. Static pages for terms/privacy. All content in Romanian.

**Tech Stack:** Next.js 15, React 19, TypeScript, TailwindCSS 4, Motion, Tabler Icons, SendGrid, pnpm

---

### Task 1: Dependency Cleanup

**Files:**
- Modify: `package.json`
- Delete: `package-lock.json`
- Delete: `public/file.svg`, `public/globe.svg`, `public/window.svg`, `public/next.svg`, `public/vercel.svg`

**Step 1: Remove stale npm lock file**

```bash
rm package-lock.json
```

**Step 2: Remove unused dependencies**

```bash
pnpm remove framer-motion lucide-react
```

**Step 3: Delete unused default Next.js SVGs**

```bash
rm public/file.svg public/globe.svg public/window.svg public/next.svg public/vercel.svg
```

**Step 4: Verify the app still builds**

```bash
pnpm build
```

Expected: Build succeeds with no import errors.

**Step 5: Commit**

```bash
git add package.json pnpm-lock.yaml
git add -u  # stages the deleted files
git commit -m "chore: remove unused deps (framer-motion, lucide-react) and default SVGs"
```

---

### Task 2: Image Conversion (JPG to WebP)

**Files:**
- Convert: `public/images/1.jpg` → `public/images/1.webp`
- Convert: `public/images/2.jpg` → `public/images/2.webp`
- Convert: `public/images/3.jpg` → `public/images/3.webp`
- Modify: `components/hero-section.tsx` (lines 8-10)
- Modify: `next.config.ts`

**Step 1: Install sharp for conversion (dev tool, not a dep)**

```bash
npx sharp-cli -i public/images/1.jpg -o public/images/1.webp --quality 80
npx sharp-cli -i public/images/2.jpg -o public/images/2.webp --quality 80
npx sharp-cli -i public/images/3.jpg -o public/images/3.webp --quality 80
```

If sharp-cli is not available, use `cwebp` or any other local conversion tool:

```bash
# Alternative with sips (macOS built-in — does not support webp)
# Use ffmpeg if installed:
ffmpeg -i public/images/1.jpg -quality 80 public/images/1.webp
ffmpeg -i public/images/2.jpg -quality 80 public/images/2.webp
ffmpeg -i public/images/3.jpg -quality 80 public/images/3.webp
```

**Step 2: Delete original JPGs**

```bash
rm public/images/1.jpg public/images/2.jpg public/images/3.jpg
```

**Step 3: Update hero-section.tsx image references**

In `components/hero-section.tsx`, change lines 8-10:

```tsx
// OLD
const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
];

// NEW
const images = [
  "/images/1.webp",
  "/images/2.webp",
  "/images/3.webp",
];
```

**Step 4: Configure next.config.ts for image optimization**

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
```

**Step 5: Verify build and images load**

```bash
pnpm build
```

**Step 6: Commit**

```bash
git add -A
git commit -m "perf: convert hero images to WebP and configure image optimization"
```

---

### Task 3: Content Fixes (Address, Social Links, Email)

**Files:**
- Modify: `components/contact-section.tsx` (lines 62-63, 74-79, 91-103)
- Modify: `components/site-footer.tsx` (lines 42, 48-51, 54-59)

**Step 1: Fix address in contact-section.tsx**

Line 62-63, change:
```tsx
// OLD
<p className="text-sm text-neutral-600">
  Str. Exemplu 12, Agigea, Constanța
</p>

// NEW
<p className="text-sm text-neutral-600">
  Str. Brizei 22, 907015 Agigea, România
</p>
```

**Step 2: Uncomment and update email in contact-section.tsx**

Lines 74-79 — uncomment the email block. Replace `rezervari@aybo.ro` with placeholder that client will update:
```tsx
<div className="flex items-center gap-3">
  <IconMail className="h-5 w-5" />
  <a href="mailto:contact@pensiuneaaybo.ro" className="text-sm hover:underline">
    contact@pensiuneaaybo.ro
  </a>
</div>
```

Note: The actual email will be set once the client provides it. Use a sensible placeholder for now.

**Step 3: Mark social links with TODO**

Lines 91-103 — keep the social links but add TODO comments and use `#` as href so they're non-functional:
```tsx
{/* TODO: Replace with actual Facebook page URL */}
<a
  href="#"
  aria-label="Facebook"
  className="rounded-md border border-neutral-200 px-3 py-2 text-sm hover:translate-y-[-2px] transition opacity-50 cursor-default"
>
  <IconBrandFacebook className="h-5 w-5" />
</a>
{/* TODO: Replace with actual Instagram page URL */}
<a
  href="#"
  aria-label="Instagram"
  className="rounded-md border border-neutral-200 px-3 py-2 text-sm hover:translate-y-[-2px] transition opacity-50 cursor-default"
>
  <IconBrandInstagram className="h-5 w-5" />
</a>
```

**Step 4: Fix address in site-footer.tsx**

Line 42, change:
```tsx
// OLD
Str. Exemplu 12, Agigea

// NEW
Str. Brizei 22, 907015 Agigea
```

**Step 5: Uncomment email in site-footer.tsx**

Lines 48-51, uncomment and update:
```tsx
<a href="mailto:contact@pensiuneaaybo.ro" className="flex items-center gap-2 text-sm hover:underline">
  <IconMail className="h-5 w-5" />
  contact@pensiuneaaybo.ro
</a>
```

**Step 6: Mark social links with TODO in footer**

Lines 54-59, same pattern as contact section — `href="#"`, add opacity-50, add TODO comments.

**Step 7: Update footer Terms link**

Line 68, change `href="#"` to `href="/termeni"`.

**Step 8: Commit**

```bash
git add components/contact-section.tsx components/site-footer.tsx
git commit -m "content: fix address, enable email, mark social links as pending"
```

---

### Task 4: Booking Integration (Pricing CTAs + Navbar)

**Files:**
- Modify: `components/pricings-section.tsx` (lines 43, 58, 74)
- Modify: `components/site-navbar.tsx` (line 45)

**Step 1: Update pricing plan CTA hrefs**

In `components/pricings-section.tsx`, update all three plan `ctaHref` values to the booking.com listing:

```tsx
const BOOKING_URL = "https://www.booking.com/hotel/ro/pensiunea-aybo.ro.html";

const plans: Plan[] = [
  {
    // ...Standard
    ctaHref: BOOKING_URL,
  },
  {
    // ...Family
    ctaHref: BOOKING_URL,
  },
  {
    // ...Premium
    ctaHref: BOOKING_URL,
  },
];
```

**Step 2: Make CTA links open in new tab**

In the pricing card render (line 140-142), add `target="_blank"` and `rel="noopener noreferrer"`:

```tsx
<Button asChild className="w-full">
  <a href={plan.ctaHref} target="_blank" rel="noopener noreferrer">
    {plan.ctaLabel}
  </a>
</Button>
```

**Step 3: Verify build**

```bash
pnpm build
```

**Step 4: Commit**

```bash
git add components/pricings-section.tsx components/site-navbar.tsx
git commit -m "feat: link pricing CTAs to booking.com listing"
```

---

### Task 5: Google Maps Embed in Contact Section

**Files:**
- Modify: `components/contact-section.tsx`

**Step 1: Add Google Maps iframe after the contact info card**

After the contact info `</Card>` closing tag (line 105) and before `</motion.div>` (line 106), add a map card below the contact info card. Restructure the left column to include both cards stacked:

```tsx
{/* After the contact info Card, still inside the first motion.div */}
<div className="mt-6 overflow-hidden rounded-lg border border-neutral-200">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.5!2d28.6!3d44.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sStr.+Brizei+22%2C+Agigea+907015!5e0!3m2!1sen!2sro"
    width="100%"
    height="250"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Locația Pensiunea Aybo"
  />
</div>
```

Note: The exact Google Maps embed URL should be generated from Google Maps share → embed. The implementer should search for "Str. Brizei 22, 907015 Agigea" on Google Maps and get the actual embed URL.

**Step 2: Verify the map renders**

```bash
pnpm dev
```

Check localhost — map should show in the contact section.

**Step 3: Commit**

```bash
git add components/contact-section.tsx
git commit -m "feat: add Google Maps embed to contact section"
```

---

### Task 6: SEO & Metadata

**Files:**
- Modify: `app/layout.tsx`
- Create: `public/robots.txt`
- Create: `public/sitemap.xml`
- Create: `app/favicon.ico` (generate from logo)

**Step 1: Update layout.tsx with comprehensive metadata**

Replace the metadata export in `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: {
    default: "Pensiunea Aybo | Cazare Agigea, Constanța",
    template: "%s | Pensiunea Aybo",
  },
  description:
    "Pensiunea Aybo — cazare confortabilă în Agigea, lângă Eforie Nord. Camere cu aer condiționat, parcare gratuită, piscină și acces facil la plajă.",
  keywords: [
    "pensiune Agigea",
    "cazare Agigea",
    "cazare Eforie Nord",
    "pensiune litoralul romanesc",
    "Pensiunea Aybo",
    "hotel Agigea",
  ],
  authors: [{ name: "Pensiunea Aybo" }],
  openGraph: {
    title: "Pensiunea Aybo | Cazare Agigea, Constanța",
    description:
      "Un loc liniștit aproape de mare — camere confortabile, grădină și acces facil la plajă.",
    url: "https://pensiuneaaybo.ro",
    siteName: "Pensiunea Aybo",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/images/1.webp",
        width: 1200,
        height: 630,
        alt: "Pensiunea Aybo - Cazare Agigea",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pensiunea Aybo | Cazare Agigea",
    description:
      "Cazare confortabilă în Agigea, lângă Eforie Nord. Piscină, parcare, mic dejun.",
    images: ["/images/1.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

Also change `lang="en"` to `lang="ro"` on the `<html>` tag.

**Step 2: Add JSON-LD structured data**

In `app/layout.tsx`, inside the `<head>` (or inside `<body>` before `{children}`), add:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      name: "Pensiunea Aybo",
      description:
        "Cazare confortabilă în Agigea, lângă Eforie Nord.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Str. Brizei 22",
        addressLocality: "Agigea",
        postalCode: "907015",
        addressCountry: "RO",
      },
      telephone: "+40785203576",
      priceRange: "199-399 RON",
      starRating: {
        "@type": "Rating",
        ratingValue: "3",
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Wi-Fi gratuit" },
        { "@type": "LocationFeatureSpecification", name: "Parcare gratuită" },
        { "@type": "LocationFeatureSpecification", name: "Piscină" },
        { "@type": "LocationFeatureSpecification", name: "Aer condiționat" },
      ],
    }),
  }}
/>
```

**Step 3: Create robots.txt**

Create `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://pensiuneaaybo.ro/sitemap.xml
```

**Step 4: Create sitemap.xml**

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://pensiuneaaybo.ro</loc>
    <lastmod>2026-03-03</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://pensiuneaaybo.ro/termeni</loc>
    <lastmod>2026-03-03</lastmod>
    <priority>0.3</priority>
  </url>
</urlset>
```

**Step 5: Generate favicon**

Use the existing `aybo-logo.png` to create a favicon. Use sharp or an online tool:

```bash
# Using sharp-cli or sips to resize the logo to favicon
cp public/images/aybo-logo.png app/icon.png
```

Next.js 15 App Router automatically uses `app/icon.png` as the favicon when placed there.

**Step 6: Verify metadata renders**

```bash
pnpm build
```

**Step 7: Commit**

```bash
git add app/layout.tsx public/robots.txt public/sitemap.xml app/icon.png
git commit -m "seo: add metadata, Open Graph, JSON-LD, robots.txt, sitemap, favicon"
```

---

### Task 7: Contact Form Backend (SendGrid)

**Files:**
- Create: `app/api/contact/route.ts`
- Create: `.env.local` (not committed)
- Create: `.env.example`
- Modify: `components/contact-section.tsx`
- Modify: `.gitignore` (ensure .env.local is ignored)

**Step 1: Install SendGrid**

```bash
pnpm add @sendgrid/mail
```

**Step 2: Create .env.example**

```
SENDGRID_API_KEY=your_sendgrid_api_key_here
CONTACT_EMAIL=your_email@example.com
```

**Step 3: Create .env.local (not committed)**

```
SENDGRID_API_KEY=
CONTACT_EMAIL=
```

**Step 4: Verify .gitignore includes .env.local**

Check that `.gitignore` has `.env*.local` — Next.js default gitignore should have it.

**Step 5: Create the API route**

Create `app/api/contact/route.ts`:

```ts
import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const rateLimit = new Map<string, number>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const MAX_REQUESTS = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimit.get(ip);

  if (!timestamps || now - timestamps > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, now);
    return false;
  }

  return true;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Prea multe cereri. Încearcă din nou în curând." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, phone, email, dates, message } = body;

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: "Toate câmpurile obligatorii trebuie completate." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Adresa de email nu este validă." },
        { status: 400 }
      );
    }

    const msg = {
      to: process.env.CONTACT_EMAIL!,
      from: process.env.CONTACT_EMAIL!, // Must be verified sender in SendGrid
      replyTo: email,
      subject: `Mesaj nou de la ${name} — Pensiunea Aybo`,
      text: `Nume: ${name}\nTelefon: ${phone}\nEmail: ${email}\nPerioada: ${dates || "Nespecificată"}\n\nMesaj:\n${message}`,
      html: `
        <h2>Mesaj nou de pe site — Pensiunea Aybo</h2>
        <p><strong>Nume:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Perioada:</strong> ${dates || "Nespecificată"}</p>
        <hr />
        <p><strong>Mesaj:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    await sgMail.send(msg);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("SendGrid error:", error);
    return NextResponse.json(
      { error: "A apărut o eroare. Te rugăm să încerci din nou." },
      { status: 500 }
    );
  }
}
```

**Step 6: Wire up contact-section.tsx with form submission**

Replace the entire `ContactSection` component in `components/contact-section.tsx` with a version that has:
- `useState` for form fields, loading, success, and error states
- `handleSubmit` function that POSTs to `/api/contact`
- Success message after submission
- Error display
- Loading state on button
- All fields required (name, phone, email, message) except dates

The form handler:

```tsx
const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
const [errorMessage, setErrorMessage] = useState("");

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setFormState("loading");
  setErrorMessage("");

  const formData = new FormData(e.currentTarget);
  const data = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    dates: formData.get("dates"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Eroare la trimitere.");
    }

    setFormState("success");
  } catch (err) {
    setFormState("error");
    setErrorMessage(err instanceof Error ? err.message : "Eroare la trimitere.");
  }
}
```

Show success state:
```tsx
{formState === "success" ? (
  <div className="flex h-full flex-col items-center justify-center gap-4 py-12 text-center">
    <IconCheck className="h-12 w-12 text-green-600" />
    <p className="text-lg font-medium">Mesajul a fost trimis!</p>
    <p className="text-sm text-neutral-600">Te vom contacta în cel mai scurt timp.</p>
  </div>
) : (
  <form ...>
    {/* existing form fields */}
    {formState === "error" && (
      <p className="text-sm text-red-600">{errorMessage}</p>
    )}
    <Button type="submit" className="w-full" disabled={formState === "loading"}>
      {formState === "loading" ? "Se trimite..." : "Trimite"}
    </Button>
  </form>
)}
```

**Step 7: Verify build**

```bash
pnpm build
```

**Step 8: Commit**

```bash
git add app/api/contact/route.ts .env.example components/contact-section.tsx
git commit -m "feat: wire contact form to SendGrid API route"
```

---

### Task 8: Terms & Privacy Policy Page

**Files:**
- Create: `app/termeni/page.tsx`

**Step 1: Create the terms page**

Create `app/termeni/page.tsx` with a Romanian template covering:
- Termeni și condiții (Terms & conditions)
- Politica de confidențialitate (Privacy policy)
- GDPR compliance info
- Cookie policy reference
- Contact info for data requests

Use the same design system (max-w-6xl container, same fonts). This is a static server component (no "use client").

Add metadata export:
```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termeni și Condiții",
  description: "Termeni și condiții de utilizare și politica de confidențialitate — Pensiunea Aybo.",
};
```

**Step 2: Verify page renders**

```bash
pnpm dev
```

Navigate to `localhost:3000/termeni`.

**Step 3: Commit**

```bash
git add app/termeni/page.tsx
git commit -m "feat: add terms & privacy policy page (GDPR)"
```

---

### Task 9: Cookie Consent Banner

**Files:**
- Create: `components/cookie-consent.tsx`
- Modify: `app/layout.tsx` (add the component)

**Step 1: Create cookie consent component**

Create `components/cookie-consent.tsx`:

```tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-200 bg-white p-4 shadow-lg"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-neutral-600">
              Acest site folosește cookie-uri pentru a îmbunătăți experiența ta.
              Citește{" "}
              <a href="/termeni" className="underline">
                politica de confidențialitate
              </a>
              .
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={decline}>
                Refuz
              </Button>
              <Button size="sm" onClick={accept}>
                Accept
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

**Step 2: Add to layout.tsx**

Import and render `<CookieConsent />` at the end of `<body>`, after `{children}`.

**Step 3: Verify it shows and persists**

```bash
pnpm dev
```

Check: banner shows, clicking Accept hides it, refreshing page does NOT show it again.

**Step 4: Commit**

```bash
git add components/cookie-consent.tsx app/layout.tsx
git commit -m "feat: add GDPR cookie consent banner"
```

---

### Task 10: Error & Loading States

**Files:**
- Create: `app/not-found.tsx`
- Create: `app/loading.tsx`
- Create: `app/error.tsx`

**Step 1: Create custom 404 page**

Create `app/not-found.tsx`:

```tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <h1 className="text-6xl font-bold text-neutral-800">404</h1>
      <p className="mt-4 text-lg text-neutral-600">
        Pagina pe care o cauți nu există.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-md bg-neutral-900 px-6 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition"
      >
        Înapoi acasă
      </Link>
    </div>
  );
}
```

**Step 2: Create loading skeleton**

Create `app/loading.tsx`:

```tsx
export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-neutral-300 border-t-neutral-800" />
    </div>
  );
}
```

**Step 3: Create error boundary**

Create `app/error.tsx`:

```tsx
"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <h1 className="text-4xl font-bold text-neutral-800">Oops!</h1>
      <p className="mt-4 text-neutral-600">
        A apărut o eroare neașteptată.
      </p>
      <button
        onClick={reset}
        className="mt-6 rounded-md bg-neutral-900 px-6 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition"
      >
        Încearcă din nou
      </button>
    </div>
  );
}
```

**Step 4: Verify 404 page**

```bash
pnpm dev
```

Navigate to `localhost:3000/random-page` — should show custom 404.

**Step 5: Commit**

```bash
git add app/not-found.tsx app/loading.tsx app/error.tsx
git commit -m "feat: add custom 404, loading skeleton, and error boundary"
```

---

### Task 11: Final Build Verification & Cleanup

**Step 1: Full build check**

```bash
pnpm build
```

Expected: No errors, no warnings about missing imports.

**Step 2: Run linter**

```bash
pnpm lint
```

Fix any issues found.

**Step 3: Manual smoke test**

```bash
pnpm dev
```

Check all sections:
- [ ] Navbar works (desktop + mobile)
- [ ] Hero slider shows WebP images
- [ ] About section text animation works
- [ ] Facilities grid renders all 10 items
- [ ] Pricing cards link to booking.com (new tab)
- [ ] Contact form submits (test with SendGrid key if available)
- [ ] Contact info shows correct address
- [ ] Google Maps embed loads
- [ ] Footer address is correct
- [ ] Footer "Termeni" link goes to /termeni
- [ ] /termeni page renders
- [ ] Cookie consent banner shows on first visit
- [ ] 404 page works for unknown routes
- [ ] View page source — check meta tags, OG tags, JSON-LD

**Step 4: Final commit**

```bash
git add -A
git commit -m "chore: final cleanup and build verification"
```
