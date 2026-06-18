/**
 * SpeakingKit — two dark rows (no cream card): the Speaking Kit row (download)
 * and the "Surviving the SaaSpocalypse" book row. Ported from SpeakingKit.astro.
 * Book blurb from the canonical synopsis.
 */

import { SITE } from '@/lib/site';

export function SpeakingKit() {
  return (
    <section className="cc-kit">
      <img className="cc-kit-ring" src="/assets/ellipse-14.webp" alt="" aria-hidden="true" />
      {/* Speaking Kit row */}
      <div className="cc-kit-row cc-kit-row-speaking">
        <div className="cc-kit-text">
          <h2 className="cc-kit-headline">Speaking Kit</h2>
          <p>
            Want the full overview? Download my speaking kit for my bio, topics, podcast
            appearances, and more.
          </p>
          <div>
            <a
              className="cc-btn"
              href={SITE.links.speakingKit}
              target="_blank"
              rel="noopener"
              download
            >
              Download Speaking Kit
            </a>
          </div>
        </div>
        <div className="cc-kit-mockup">
          <img src="/assets/speaking-media-kit.png" alt="Chris Carolan Speaking & Media Kit cover" />
        </div>
      </div>

      {/* Book row */}
      <div className="cc-kit-row cc-kit-row-book">
        <img
          src="/assets/book-cover.png"
          alt="Surviving the SaaSpocalypse — book cover"
          className="cc-kit-book-cover"
        />
        <div className="cc-kit-text">
          <h2 className="cc-kit-headline cc-kit-book-title">
            Surviving the<br />SaaSpocalypse
          </h2>
          <p>
            Most companies are trying to layer AI onto systems that were never designed to share
            context. The result? Fragmented operations, and technology that can&rsquo;t deliver on
            its promise. Chris Carolan and the Value-First Team break down why this is happening,
            what comes next, and how organizations can rebuild around context, trust, and human-AI
            collaboration.
          </p>
          <div>
            <a
              className="cc-btn-outline"
              href={SITE.links.bookLearnMore}
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
