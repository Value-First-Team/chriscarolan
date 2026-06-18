/**
 * MeetChris — large bottom-anchored cutout portrait flanked by two WIDE text
 * columns that overlay the shoulders. Ported from MeetChris.astro.
 *
 * Carries the `meet` anchor id (shell nav target).
 */

export function MeetChris() {
  return (
    <section className="cc-meet" id="meet">
      <h2 className="cc-meet-headline">Meet Chris</h2>

      <div className="cc-meet-body">
        <div className="cc-meet-portrait">
          <img src="/assets/meet-portrait.webp" alt="Chris Carolan — portrait" />
        </div>

        <div className="cc-meet-col cc-meet-col-left">
          <p>
            Hey! I&rsquo;m Chris Carolan, and I help leaders and businesses move from industrial-age
            operations to AI-empowered organizations. I do this with a Value-First mindset so you
            can activate your team&rsquo;s capabilities instead of replacing them.
          </p>
          <p>
            What makes my work different isn&rsquo;t just my understanding of HubSpot, AI, or
            business systems. It&rsquo;s how I think.
          </p>
        </div>

        <div className="cc-meet-col cc-meet-col-right">
          <p>
            I see patterns across domains that most people miss. I question assumptions others have
            stopped noticing. And I bring a kind of optimism that makes change feel possible, even
            when the decision in front of you feels impossible.
          </p>
          <p className="cc-meet-emphasis">Most of all, I care.</p>
          <p>
            About the people inside the system. About helping leaders make better decisions. About
            building companies that actually work for the humans inside them, not just the
            spreadsheet.
          </p>
        </div>
      </div>

      {/* Same luminous divider as the hero, at the section's bottom border */}
      <div className="cc-meet-divider" aria-hidden="true">
        <img src="/assets/hero-divider.webp" alt="" />
      </div>
    </section>
  );
}
