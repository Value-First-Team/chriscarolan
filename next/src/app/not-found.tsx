/**
 * 404 — Not found. Rendered by Next.js for any unmatched route.
 * Branded in this node's own voice (cc-* styling), wrapped in .cc-page so it
 * sits on the personal navy canvas inside the shared shell.
 */

import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <div className="cc-page">
      <section className="cc-ready" style={{ paddingTop: 120 }}>
        <h2 className="cc-ready-headline">This page took a different path.</h2>
        <p className="cc-ready-body">
          The page you were looking for isn&rsquo;t here. Let&rsquo;s get you back to the start, or
          straight into a real conversation.
        </p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a className="cc-btn" href="/">
            Back to Home
          </a>
          <a className="cc-btn-outline" href={SITE.links.bookCall} target="_blank" rel="noopener">
            Book a Call
          </a>
        </div>
      </section>
    </div>
  );
}
