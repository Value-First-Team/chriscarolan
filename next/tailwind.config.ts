/**
 * Tailwind config — chriscarolan.com Next.js app.
 *
 * Uses @vf/site-kit's React config factory, which:
 *   1. Applies the @vf/design-engine preset (--vf-* token colors → Tailwind classes)
 *      — these power the SHARED shell (header/footer/nav/theme toggle).
 *   2. Auto-merges the site-kit package's own content glob so shell component
 *      classes are never purged (the Tailwind purge fix — consume, don't restate).
 *
 * This site's BODY sections are bespoke (the personal `cc-*` brand: prune navy +
 * mirinda orange + chinese lime, Kameron/Roboto/Poppins). Those styles live in
 * src/styles/colors_and_type.css (scoped CSS custom properties + element/component
 * classes) — Tailwind here is layout-only for the shell, exactly as the Astro
 * original kept brand tokens in CSS and Tailwind layout-only.
 */
import { createSiteKitConfig } from '@vf/site-kit/tailwind';

export default createSiteKitConfig({
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
});
