/**
 * Hero — orange Kameron headline overlaying a centered portrait of Chris,
 * layered against the Figma ring backdrop. Ported from Hero.astro.
 *
 * Z-stack (back to front):
 *   0. Flat navy hero base (--cc-prune)
 *   1. Ring backdrop image — soft concentric half-arcs, full-bleed
 *   2. Chris portrait, masked so the torso dissolves into the navy
 *   3. Headline + subtitle + CTA + byline (centered, overlays portrait)
 */

import { SITE } from '@/lib/site';

export function Hero() {
  return (
    <section className="cc-hero">
      {/* Ring backdrop — exact Figma export, full-bleed; arcs rise from the baseline */}
      <div className="cc-hero-rings" aria-hidden="true">
        <img src="/assets/hero-rings.webp" alt="" />
      </div>

      {/* Portrait — sits BEHIND the headline. Fade baked into the PNG alpha. */}
      <div className="cc-hero-portrait" aria-hidden="true">
        <img src="/assets/hero-portrait.png" alt="" />
      </div>

      {/* Headline stack — orange Kameron over the portrait */}
      <div className="cc-hero-stack">
        <h1 className="cc-hero-headline">
          Don&rsquo;t Replace Your<br />
          People, Activate Them
        </h1>
        <div className="cc-hero-subtitle">{SITE.tagline}</div>
        <div className="cc-hero-cta">
          <a className="cc-btn" href={SITE.links.bookCall} target="_blank" rel="noopener">
            Book a Call
          </a>
        </div>
        <div className="cc-hero-byline">
          Chris Carolan &nbsp;|&nbsp; Business Transformation Advisor for the AI Era
        </div>
        {/* Luminous divider at the hero's bottom edge */}
        <div className="cc-hero-divider" aria-hidden="true">
          <img src="/assets/hero-divider.webp" alt="" />
        </div>
      </div>
    </section>
  );
}
