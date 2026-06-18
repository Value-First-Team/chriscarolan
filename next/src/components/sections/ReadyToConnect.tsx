/**
 * ReadyToConnect — closing CTA. Centered headline, short body, primary CTA.
 * Ported from ReadyToConnect.astro. Copy verbatim.
 */

import { SITE } from '@/lib/site';

export function ReadyToConnect() {
  return (
    <section className="cc-ready">
      <h2 className="cc-ready-headline">Ready to Connect?</h2>
      <p className="cc-ready-body">
        If something feels off in how your company is operating, you&rsquo;re probably right.
        Let&rsquo;s have a real conversation and see where you are.
      </p>
      <a className="cc-btn" href={SITE.links.bookCall} target="_blank" rel="noopener">
        Book a Call
      </a>
    </section>
  );
}
