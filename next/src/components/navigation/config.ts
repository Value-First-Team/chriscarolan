/**
 * Navigation surface — chriscarolan.com (the personal authority node).
 *
 * SINGLE SOURCE: this node's nav / footer columns / mobile-bottom-bar / legal /
 * social links come from the shared constellation registry
 * (CONSTELLATION_PRESETS['chris'].shellConfig in @vf/site-kit), NOT a local
 * literal. The registry entry is byte-for-byte equivalent to the former local
 * SHELL_CONFIG — every field was diffed against the preset in this site's
 * INSTALLED kit on 2026-09-04 (navPrimary, mobileBottomBar, footerColumns,
 * footerLegal, socialLinks: none differed), and the same preset is identical in
 * 0.5.1 (the pin here) and 0.21.0 (the current kit), so consuming it preserves
 * the exact rendering today and after the next repin.
 *
 * The per-node intent the preset carries, and why the shape is what it is:
 *   - The page is a single scroll (one-page authority site), so primary nav is
 *     in-page anchors to the major sections plus the front door out to the
 *     consultancy.
 *   - NO headerHat. This site never wore the Value-First utility eyebrow and
 *     must not now (Chris, 2026-06-18); the shared shell makes the hat opt-in by
 *     config presence, so omitting it renders no eyebrow at all.
 *   - The shared SiteShell footer is OFF here (`showFooter={false}` in
 *     src/app/layout.tsx) — chriscarolan.com paints its own footer. The footer
 *     columns below are still live surface: the shared MobileNav drawer renders
 *     them, so a constellation flag flipped in the kit reaches this site's
 *     mobile menu.
 * When any of that changes, change the PRESET in the kit, not this file.
 *
 * This module stays as the site's stable import point (SiteShell in
 * src/app/layout.tsx imports SHELL_CONFIG from here) — it is now a thin
 * re-export, so there is no local copy to drift out of sync with the registry.
 *
 * Source: constellation registry (@vf/site-kit/registry) — CONSTELLATION_PRESETS['chris']
 */

import { CONSTELLATION_PRESETS } from '@vf/site-kit/registry';
import type { SiteShellConfig } from '@vf/site-kit/types';

const preset = CONSTELLATION_PRESETS['chris'];

if (!preset?.shellConfig) {
  throw new Error(
    "CONSTELLATION_PRESETS['chris'].shellConfig is missing — the chriscarolan.com " +
      'shell cannot render without its registry preset. Bump @vf/site-kit to a ' +
      'commit whose registry carries the chris node shellConfig.'
  );
}

export const SHELL_CONFIG: SiteShellConfig = preset.shellConfig;
