/**
 * Root layout — chriscarolan.com (Next.js App Router).
 *
 * React Server Component (no 'use client'). It:
 *   1. Injects the shared --vf-* token CSS (for the constellation shell) + this
 *      site's globals.css (which pulls in the bespoke cc-* brand tokens).
 *   2. Runs the FOUC-free theme init (default dark; honors saved pref / OS) —
 *      the shell's header/footer + theme toggle respond to it.
 *   3. Mounts the SHARED @vf/site-kit SiteShell for the HEADER + nav ONLY — the
 *      global-first constellation frame, carrying Chris's PERSONAL identity:
 *        - headerBrandMark → the personal CCLogo (NOT the VF Team LogoLockup),
 *          via the BrandMark `node` escape hatch (the same approach ainativeshift
 *          used for its text wordmark). Theme-aware: the shell header sits on
 *          --vf-surface, which flips between dark and near-white across themes,
 *          so the wordmark ink flips with it (cream on dark, prune on light) —
 *          the monogram is the orange gradient in both. The mark assets are this
 *          node's identity and are intentionally exempt from --vf-* (per
 *          BrandMarkSlot).
 *        - config={SHELL_CONFIG} → Chris's own nav, social, legal. NO headerHat
 *          (the site never wore the VF utility eyebrow) and showFooter={false}
 *          (the shared constellation footer is suppressed). Chris's own
 *          SiteFooterBespoke, rendered at the END of the page body
 *          (src/app/page.tsx), is the ONE AND ONLY footer. The shell makes both
 *          the hat and the footer opt-out (global-first @vf/site-kit#d306953),
 *          so this node keeps the shared header/nav frame while wearing its own
 *          footer and no eyebrow — not the duplicated VFT chrome a prior pass
 *          wrongly layered on (Chris, 2026-06-18: "There was not a hat on these
 *          sites...nor the footer. And there shouldn't be now.").
 *        - brandLabel / brandTagline → Chris's, not VFT's.
 *   4. Provides all OpenGraph / SEO defaults (ported from BaseLayout.astro).
 *
 * Brand-fidelity history: the original re-platform (b013f35) mounted SiteShell
 * with no brand mark, so it wore the official VFT LogoLockup (company chrome) —
 * wrong for a personal site. The interim fix (a766eaa) forked a bespoke
 * PersonalHeader to carry Chris's mark. With @vf/site-kit#74d8c74 the shell grew
 * a per-node BrandMarkSlot, so the durable global-first fix lands: re-join the
 * shared shell + supply the personal mark via the slot, and retire the fork.
 *
 * NOTE: the site renders NO header hat (utility eyebrow). It never wore one and
 * must not now — the config omits headerHat, so the shared shell renders no
 * eyebrow. Chris's "Founder, Value-First Team" identity lives in the page body
 * (the ValueFirstTeam section), not as chrome.
 */

import type { Metadata, Viewport } from 'next';
// Token CSS must load BEFORE globals.css so hsl(var(--vf-*)) shell utilities
// resolve. JS-layer import respects package exports — CSS @import does not in
// nested setups.
import '@vf/design-engine/tokens.css';
import './globals.css';
import { SiteShell } from '@vf/site-kit';
import { SHELL_CONFIG } from '@/components/navigation/config';
import { CCLogo } from '@/components/sections/CCLogo';
import { SITE } from '@/lib/site';

const FULL_TITLE = `${SITE.name} — Business Transformation Advisor for the AI Era`;

/**
 * The personal brand mark, theme-aware, as a BrandMark `node`. The swap is
 * pure CSS (`hidden dark:flex` / `flex dark:hidden`, Tailwind darkMode:'class'
 * set by the FOUC script + ThemeToggle), so it renders in this RSC with no
 * client boundary. The CCLogo's own `aria-label` is hidden from AT here (the
 * surrounding logo link carries `logoLabel`) to avoid a double announcement.
 */
const HEADER_MARK = {
  alt: 'Chris Carolan',
  node: (
    <span className="flex items-center" aria-hidden="true">
      {/* Dark theme → cream wordmark */}
      <span className="hidden dark:flex">
        <CCLogo height={40} color="cream" />
      </span>
      {/* Light theme → prune (dark) wordmark */}
      <span className="flex dark:hidden">
        <CCLogo height={40} color="dark" />
      </span>
    </span>
  ),
};

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
        {/* HubSpot tracking (portal 40810431 = VF Team). */}
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/40810431.js"
        />
      </head>
      <body className="min-h-screen bg-vf-bg text-vf-text antialiased">
        <SiteShell
          config={SHELL_CONFIG}
          logoLabel="Chris Carolan"
          logoHref="/"
          headerBrandMark={HEADER_MARK}
          brandLabel="Chris Carolan"
          brandTagline="Helping companies operate in the AI era"
          showFooter={false}
          sticky
        >
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
