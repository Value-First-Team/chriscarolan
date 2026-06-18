/**
 * Navigation surface — chriscarolan.com (the personal authority node).
 *
 * Types come from @vf/site-kit/types (the shared contract); the data lives here
 * so this node's identity stays per-node. The shell (header/footer/nav/theme
 * toggle/mobile bottom bar) is the SHARED constellation frame; everything below
 * is Chris's own.
 *
 * The page is a single scroll (one-page authority site), so primary nav is
 * in-page anchors to the major sections, plus the front door out to the
 * consultancy. The footer mirrors the constellation's anchors/products/shows
 * brand-level map (live/coming flags kept in sync with the registry).
 */

import type { SiteShellConfig } from '@vf/site-kit/types';

export const SHELL_CONFIG: SiteShellConfig = {
  navPrimary: [
    { label: 'How I Help', href: '/#how-i-help' },
    { label: 'Speaking', href: '/#speaking' },
    { label: 'Media', href: '/#media' },
    { label: 'Meet Chris', href: '/#meet' },
    {
      label: 'Book a Call',
      href: 'https://meetings.hubspot.com/chris-carolan1/value-first-team-free-consult',
      external: true,
      featured: true,
    },
  ],

  headerHat: {
    // Rendered by PersonalHeader as a restrained bio credit — a constellation-
    // membership link (Chris IS a node), NOT company chrome. The personal mark
    // owns the brand; this is the "and here's where I do that work" line.
    highlight: {
      label: 'Founder, Value-First Team',
      href: 'https://valuefirstteam.com',
      external: true,
    },
    links: [
      { label: 'The AI-Native Shift', href: 'https://ainativeshift.com', external: true },
    ],
    cta: {
      label: 'Book a Call',
      href: 'https://meetings.hubspot.com/chris-carolan1/value-first-team-free-consult',
      external: true,
    },
  },

  mobileBottomBar: [
    { id: 'top', label: 'Home', href: '/' },
    { id: 'help', label: 'Help', href: '/#how-i-help' },
    { id: 'speaking', label: 'Speaking', href: '/#speaking' },
    { id: 'menu', label: 'Menu', action: 'menu' },
  ],

  footerColumns: [
    {
      id: 'chris',
      heading: 'Chris Carolan',
      items: [
        { label: 'How I Can Help', href: '/#how-i-help' },
        { label: 'Speaking & Media', href: '/#speaking' },
        { label: 'In the Media', href: '/#media' },
        { label: 'Meet Chris', href: '/#meet' },
        { label: 'Speaking Kit', href: '/speaking-media-kit.pdf', external: true },
      ],
    },
    {
      id: 'constellation',
      heading: 'Value-First',
      items: [
        { label: 'Value-First Team', href: 'https://valuefirstteam.com', external: true, live: true },
        { label: 'The AI-Native Shift', href: 'https://ainativeshift.com', external: true, live: true },
        { label: 'Value-First Studios', href: 'https://valuefirststudios.com', external: true, live: true },
        { label: 'Value-First Platform', href: 'https://valuefirstplatform.com', external: true, live: true },
      ],
    },
    {
      id: 'shows',
      heading: 'Shows',
      items: [
        { label: 'The AI-Native Shift Daily', href: 'https://ainativeshift.com', external: true, live: true },
        { label: 'The Road to UNBOUND', href: 'https://theroadtounbound.com', external: true, live: true },
        { label: 'Another Orange Morning', href: 'https://anotherorangemorning.com', external: true, live: true },
      ],
    },
  ],

  footerLegal: [
    { label: 'Privacy', href: 'https://valuefirstteam.com/privacy', external: true },
    { label: 'Terms', href: 'https://valuefirstteam.com/terms', external: true },
  ],

  socialLinks: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/chris-carolan/' },
    { label: 'Twitter/X', href: 'https://x.com/chriscarolan' },
    { label: 'Instagram', href: 'https://www.instagram.com/beardabides/' },
    { label: 'YouTube', href: 'https://www.youtube.com/@Value-First' },
  ],
};
