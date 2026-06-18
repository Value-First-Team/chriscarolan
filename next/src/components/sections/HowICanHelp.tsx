/**
 * HowICanHelp — three-step path to working with Chris. Numbered titles + body +
 * CTA. Ported from HowICanHelp.astro. Step copy verbatim (Chris's voice).
 *
 * Carries the `how-i-help` anchor id (shell nav target).
 */

import { SITE } from '@/lib/site';

const steps = [
  {
    n: '1',
    title: 'Start with a\nreal conversation',
    body: 'No pitch deck. No overproduced demo. Just an honest conversation about what feels off, what’s not working, and what may need to change.',
  },
  {
    n: '2',
    title: 'See what’s possible',
    body: 'In a live working session, I’ll help you build something real so the difference becomes obvious fast.',
  },
  {
    n: '3',
    title: 'Build the\nright path forward',
    body: 'From coaching to deep transformation work, the goal is always the same: help your organization work better, think better, and build capability and value that lasts.',
  },
];

export function HowICanHelp() {
  return (
    <section className="cc-how" id="how-i-help">
      {/* Figma ring (Ellipse 15) bleeding off the right */}
      <img className="cc-how-ring" src="/assets/ellipse-15.webp" alt="" aria-hidden="true" />
      <div className="cc-how-inner">
        <h2 className="cc-how-headline">How I Can Help</h2>
        <div className="cc-how-grid">
          {steps.map((s) => (
            <div className="cc-how-step" key={s.n}>
              <div className="cc-how-step-n">{s.n}</div>
              <div className="cc-how-step-title">{s.title}</div>
              <div className="cc-how-step-body">{s.body}</div>
            </div>
          ))}
        </div>
        <a className="cc-btn" href={SITE.links.bookCall} target="_blank" rel="noopener">
          Work With Me
        </a>
      </div>
    </section>
  );
}
