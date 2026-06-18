'use client';

/**
 * PersonalHeader — chriscarolan.com's OWN header (the personal authority node).
 *
 * Why this exists (brand fidelity, 2026-06-18): the shared @vf/site-kit
 * SiteHeader hardcodes the official Value-First Team `LogoLockup` (the company
 * compass-wordmark) with no per-node mark slot, so every node that mounts the
 * shared SiteShell wears the COMPANY brand in its header. This is Chris's
 * PERSONAL site — it must wear HIS mark, not the company's. Until the shared
 * shell grows a per-node BrandMarkSlot (the durable global-first fix, Catalyst-
 * owned), this node assembles its own header at the node level.
 *
 * It faithfully mirrors the shell SiteHeader's STRUCTURE and behavior — the
 * desktop hat, the sticky nav bar, the desktop nav, the ThemeToggle, the mobile
 * hamburger + MobileNav drawer + MobileBottomBar — REUSING the shell's exported
 * client components (ThemeToggle, MobileNav, MobileBottomBar) so behavior stays
 * identical to the constellation grammar. The ONLY substitutions are:
 *   1. the brand mark → the personal CCLogo ("Chris / Carolan" lockup), and
 *   2. the hat highlight → a restrained "Founder, Value-First Team" bio credit
 *      (a node-membership link, not company chrome).
 *
 * Shell tokens via --vf-* only (matches the shared frame); the personal mark
 * carries its own cc-* treatment inside CCLogo.
 */

import { useState } from 'react';
import { ThemeToggle, MobileNav, MobileBottomBar } from '@vf/site-kit';
import type { SiteShellConfig } from '@vf/site-kit/types';
import { CCLogo } from '@/components/sections/CCLogo';

export interface PersonalHeaderProps {
  shellConfig: SiteShellConfig;
  /** aria-label for the brand link. */
  logoLabel?: string;
  /** Where the brand mark links to (default '/'). */
  logoHref?: string;
  /** Current path — drives the active-nav highlight. */
  currentPath?: string;
  /** Sticky header (default true). */
  sticky?: boolean;
  /** Render the fixed mobile bottom bar (default true). */
  showMobileBottomBar?: boolean;
}

export function PersonalHeader({
  shellConfig,
  logoLabel = 'Chris Carolan',
  logoHref = '/',
  currentPath = '/',
  sticky = true,
  showMobileBottomBar = true,
}: PersonalHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { highlight, links, cta } = shellConfig.headerHat;

  return (
    <>
      <header
        className={[
          'z-40 w-full border-b border-vf-border bg-vf-surface/90 backdrop-blur',
          sticky ? 'sticky top-0' : 'relative',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {/* Header hat — utility bar (desktop only). The "highlight" is rendered
            as a restrained bio credit / constellation-membership link, NOT a
            company brand line. */}
        <div className="hidden border-b border-vf-border/50 bg-vf-elevated md:block">
          <div className="container-max flex items-center justify-between py-1.5 text-xs text-vf-text-faint">
            <a
              href={highlight.href}
              target={highlight.external ? '_blank' : undefined}
              rel={highlight.external ? 'noopener noreferrer' : undefined}
              className="hover:text-vf-text transition-colors"
            >
              {highlight.label}
            </a>
            <div className="flex items-center gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="hover:text-vf-text transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={cta.href}
                target={cta.external ? '_blank' : undefined}
                rel={cta.external ? 'noopener noreferrer' : undefined}
                className="font-medium text-vf-brand transition-opacity hover:opacity-80"
              >
                {cta.label}
              </a>
            </div>
          </div>
        </div>

        {/* Main nav bar */}
        <div className="container-max flex h-16 items-center justify-between">
          {/* Brand — the PERSONAL mark (Chris Carolan), not the VFT lockup.
              Theme-aware: the shell header sits on --vf-surface, which is dark
              in dark theme and near-white in light theme, so the wordmark ink
              must flip. We render both variants and toggle by the `.dark` class
              (Tailwind darkMode:'class', set by the theme toggle + FOUC script);
              the monogram is the orange gradient in both. aria-label lives on
              the link, so each CCLogo's own label is hidden from AT to avoid a
              double announcement. */}
          <a
            href={logoHref}
            aria-label={logoLabel}
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vf-brand rounded"
          >
            {/* Dark theme → cream wordmark */}
            <span className="hidden dark:flex" aria-hidden="true">
              <CCLogo height={40} color="cream" />
            </span>
            {/* Light theme → prune (dark) wordmark */}
            <span className="flex dark:hidden" aria-hidden="true">
              <CCLogo height={40} color="dark" />
            </span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
            {shellConfig.navPrimary.map((item) => {
              const isActive = currentPath === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className={[
                    'px-3 py-2 text-sm rounded-md transition-colors',
                    isActive
                      ? 'bg-vf-elevated text-vf-text font-medium'
                      : 'text-vf-text-faint hover:bg-vf-elevated hover:text-vf-text',
                  ].join(' ')}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md text-vf-text-faint hover:bg-vf-elevated hover:text-vf-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vf-brand transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav drawer (the shared shell's — it carries no brand mark). */}
      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        shellConfig={shellConfig}
        currentPath={currentPath}
      />

      {/* Fixed mobile bottom bar — shares the drawer state with the header. */}
      {showMobileBottomBar && shellConfig.mobileBottomBar.length > 0 && (
        <MobileBottomBar
          items={shellConfig.mobileBottomBar}
          currentPath={currentPath}
          menuOpen={mobileOpen}
          onMenuToggle={() => setMobileOpen((o) => !o)}
        />
      )}
    </>
  );
}
