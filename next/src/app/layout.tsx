/**
 * Root layout — chriscarolan.com (Next.js App Router).
 *
 * React Server Component (no 'use client'). It:
 *   1. Injects the shared --vf-* token CSS (for the constellation shell) + this
 *      site's globals.css (which pulls in the bespoke cc-* brand tokens).
 *   2. Runs the FOUC-free theme init (default dark; honors saved pref / OS) —
 *      the shell's header/footer + theme toggle respond to it.
 *   3. Renders the node's OWN PersonalHeader (Chris's mark + nav) above the page
 *      body. The single footer is the bespoke SiteFooterBespoke rendered at the
 *      end of the page body (src/app/page.tsx). We do NOT mount the shared
 *      SiteShell, because its SiteHeader/SiteFooter hardcode the official
 *      Value-First Team LogoLockup (company chrome) with no per-node mark slot —
 *      and this is Chris's PERSONAL site, which must wear HIS brand. (Brand-
 *      fidelity fix, 2026-06-18. The durable global-first fix is a BrandMarkSlot
 *      on the shared shell; until that lands this node carries its own header by
 *      construction.)
 *   4. Provides all OpenGraph / SEO defaults (ported from BaseLayout.astro).
 *
 * The shell's per-node-safe client components (ThemeToggle, MobileNav,
 * MobileBottomBar — none of which carry a brand mark) are reused inside
 * PersonalHeader, so the navigation grammar stays identical to the rest of the
 * constellation; only the brand mark and the hat credit are this node's own.
 */

import type { Metadata, Viewport } from 'next';
// Token CSS must load BEFORE globals.css so hsl(var(--vf-*)) shell utilities
// resolve. JS-layer import respects package exports — CSS @import does not in
// nested setups.
import '@vf/design-engine/tokens.css';
import './globals.css';
import { PersonalHeader } from '@/components/navigation/PersonalHeader';
import { SHELL_CONFIG } from '@/components/navigation/config';
import { SITE } from '@/lib/site';

const FULL_TITLE = `${SITE.name} — Business Transformation Advisor for the AI Era`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    template: `%s — ${SITE.name}`,
    default: FULL_TITLE,
  },
  description: SITE.description,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-32-dark.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-64-dark.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon/favicon-512-dark.png', sizes: '512x512', type: 'image/png' },
      {
        url: '/favicon/favicon-32-light.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon/favicon-64-light.png',
        sizes: '64x64',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
      { url: '/assets/logo-cc-mark-orange.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/favicon/favicon-512-dark.png', sizes: '512x512' }],
  },
  openGraph: {
    type: 'website',
    title: FULL_TITLE,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: '/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: `${SITE.name} — ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: FULL_TITLE,
    description: SITE.description,
    images: ['/assets/og-image.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#1C1B2D',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
         * FOUC-free theme init — runs before paint. Default dark; honors saved
         * pref, then OS preference. suppressHydrationWarning is required on
         * <html> because the class attribute differs between server (no class)
         * and client (after script).
         */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('vf-theme');var p=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;var d=s?s==='dark':p!==false;document.documentElement.classList.toggle('dark',d);}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-vf-bg text-vf-text antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <PersonalHeader
          shellConfig={SHELL_CONFIG}
          logoLabel="Chris Carolan"
          logoHref="/"
          sticky
        />
        {/* The mobile bottom bar (rendered inside PersonalHeader) is fixed, so
            reserve matching bottom padding on small screens. */}
        <main id="main-content" role="main" className="pb-20 md:pb-0">
          {children}
        </main>
      </body>
    </html>
  );
}
