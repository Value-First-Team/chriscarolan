/**
 * PodcastSection — audio mockup card + description + Listen & Subscribe circular
 * badge. Ported from PodcastSection.astro.
 *
 * Show: The AI-Native Shift Daily · Host: Chris Carolan (solo) ·
 * Cadence: Weekdays, 6:30a CT · Destination: ainativeshift.com.
 */

import { SITE } from '@/lib/site';

export function PodcastSection() {
  return (
    <section className="cc-podcast">
      <div className="cc-podcast-grid">
        {/* Audio mockup */}
        <div className="cc-podcast-mockup">
          <div
            className="cc-podcast-thumb"
            style={{ backgroundImage: "url('/assets/podcast-thumbnail.png')" }}
            aria-hidden="true"
          />
          <div className="cc-podcast-controls" aria-hidden="true">
            <div>1×</div>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11 19 2 12 11 5" />
              <polygon points="22 19 13 12 22 5" />
            </svg>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="2 5 11 12 2 19" />
              <polygon points="13 5 22 12 13 19" />
            </svg>
            <div className="cc-podcast-controls-end">30s</div>
          </div>
          <div className="cc-podcast-now">
            <div className="cc-podcast-date">Weekdays · 6:30a Central</div>
            <div className="cc-podcast-blurb">
              The AI-Native Shift Daily. The wheel spins live every weekday.
            </div>
          </div>
        </div>

        {/* Description column */}
        <div className="cc-podcast-text">
          <div className="cc-podcast-eyebrow">
            Meet one of 87 agents. The wheel spins live every weekday at 6:30 Central.
          </div>
          <h2 className="cc-podcast-headline">The AI-Native Shift Daily</h2>
          <p>
            Each weekday at 6:30a CT, I spin a wheel to introduce one of 87 AI agents running our
            operations. I show what it does — live.
          </p>
          <p>
            It&rsquo;s a working demo, not a pitch. You see the agent, you see what it does, and you
            see how it fits into the broader operating system we&rsquo;re building.
          </p>
          <p>
            If you want to see what AI-native operations actually look like — not in theory, but in
            production — this is the easiest way in.
          </p>

          <div className="cc-podcast-badge-wrap">
            <a
              href={SITE.links.aiDailyShow}
              target="_blank"
              rel="noopener"
              className="cc-podcast-badge"
              aria-label="Listen & Subscribe to The AI-Native Shift Daily"
            >
              <div className="cc-podcast-badge-ring">
                <div className="cc-podcast-badge-art" aria-hidden="true" />
                <div className="cc-podcast-badge-play" aria-hidden="true">
                  <svg width="22" height="26" viewBox="0 0 22 26" aria-hidden="true">
                    <polygon points="2,2 2,24 21,13" fill="var(--cc-pearl)" />
                  </svg>
                </div>
              </div>
              <div className="cc-podcast-badge-label">Listen &amp; Subscribe</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
