/**
 * InTheMedia — cream overlay card on the LEFT atop a wide dark VFT-website
 * screenshot card on the RIGHT, with "Watch & Listen" CTA. Ported from
 * InTheMedia.astro. Carries the `media` anchor id (shell nav target).
 */

import { SITE } from '@/lib/site';

export function InTheMedia() {
  return (
    <section className="cc-itm" id="media">
      <img className="cc-itm-ring" src="/assets/ellipse-15.webp" alt="" aria-hidden="true" />
      <div className="cc-itm-frame">
        <div className="cc-itm-photo" aria-hidden="true" />
        <div className="cc-itm-card">
          <img src="/assets/value-first-team-logo.png" alt="Value-First Team" className="cc-itm-logo" />
          <h2 className="cc-itm-headline">In the Media</h2>
          <p>
            I host and join conversations across podcasts and platforms about what&rsquo;s changing
            in business in real-time.
          </p>
          <p>
            Through the <strong>Value-First Media Network</strong>, I share live shows and daily
            insights on AI, technology, leadership, culture, and how companies can adapt to a
            changing landscape.
          </p>
          <div className="cc-itm-cta">
            <a className="cc-btn" href={SITE.links.shows} target="_blank" rel="noopener">
              Watch &amp; Listen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
