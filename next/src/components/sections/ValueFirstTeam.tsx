/**
 * ValueFirstTeam — left image card (logo on dark), right copy + CTA.
 * Ported from ValueFirstTeam.astro. Copy verbatim.
 */

import { SITE } from '@/lib/site';

export function ValueFirstTeam() {
  return (
    <section className="cc-vft">
      <img className="cc-vft-ring" src="/assets/ellipse-16.webp" alt="" aria-hidden="true" />
      <div className="cc-vft-grid">
        <div className="cc-vft-logo-card" aria-hidden="true" />
        <div className="cc-vft-text">
          <h2 className="cc-vft-headline">Value-First Team</h2>
          <div className="cc-vft-body">
            <p>I do this work through my company, Value-First Team.</p>
            <p>
              From free Office Hours to the AI-Native Shift, there are different ways to start
              depending on where you are.
            </p>
            <p>We&rsquo;ll meet you there and help you move forward.</p>
          </div>
          <div>
            <a
              className="cc-btn"
              href={SITE.links.valueFirstTeam}
              target="_blank"
              rel="noopener"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
