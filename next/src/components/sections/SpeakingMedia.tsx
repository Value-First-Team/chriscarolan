/**
 * SpeakingMedia — section headline + 5 IconOrb cards in 3+2 grid + "Book to
 * Speak" CTA. Ported from SpeakingMedia.astro.
 *
 * All five signature talks share the orange-glow card treatment, each with a
 * unique IconOrb. Carries the `speaking` anchor id (shell nav target).
 */

import { IconOrb } from './IconOrb';
import { SITE } from '@/lib/site';
import type { ReactNode } from 'react';

const talks: { title: string; body: string; icon: string }[] = [
  {
    title: "Don't Replace Your\nPeople, Activate Them",
    body: 'Why AI should unlock human capability, not erase it.',
    icon: 'people',
  },
  {
    title: 'From the Industrial\nAge to the AI Era',
    body: 'How to rethink the way your company operates before you add more tools.',
    icon: 'grid',
  },
  {
    title: 'Value Over Activity',
    body: 'Why most companies are measuring the wrong things and what to do instead.',
    icon: 'scale',
  },
  {
    title: 'Transformation,\nNot Optimization',
    body: 'Stop improving broken systems. Build the right one.',
    icon: 'route',
  },
  {
    title: 'The 5-Layer Model\nto Become AI-Native',
    body: 'What it takes to rebuild your company for the AI era.',
    icon: 'layers',
  },
];

function talkIcon(icon: string): ReactNode {
  switch (icon) {
    case 'people':
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="8" r="3.2" />
          <circle cx="17" cy="10" r="2.4" />
          <path d="M3 19c0-3 3-5 6-5s6 2 6 5" />
          <path d="M14 19c0-2 2-3.5 4-3.5s3.5 1.5 3.5 3.5" />
        </svg>
      );
    case 'grid':
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      );
    case 'scale':
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v18" />
          <path d="M5 7h14" />
          <path d="M5 7l-3 6a4 4 0 008 0L7 7" />
          <path d="M19 7l-3 6a4 4 0 008 0l-3-6" transform="translate(-2 0)" />
        </svg>
      );
    case 'route':
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="4" x2="8" y2="8" />
          <line x1="8" y1="4" x2="4" y2="8" />
          <circle cx="6" cy="14" r="2" />
          <path d="M8 14c4 0 4 -4 8 -4" />
          <polyline points="14 6 18 6 18 10" />
          <line x1="16" y1="16" x2="20" y2="20" />
          <line x1="20" y1="16" x2="16" y2="20" />
        </svg>
      );
    case 'layers':
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="12 2 22 8.5 12 15 2 8.5 12 2" />
          <polyline points="2 15.5 12 22 22 15.5" />
          <polyline points="2 12 12 18.5 22 12" />
        </svg>
      );
    default:
      return null;
  }
}

export function SpeakingMedia() {
  return (
    <section className="cc-speak" id="speaking">
      <div className="cc-speak-inner">
        <div className="cc-speak-heading">
          <h2 className="cc-speak-headline">Speaking &amp; Media</h2>
          <div className="cc-speak-sub">
            I speak to leaders and teams who know the old way of operating no longer fits and want a
            more human, practical path into the AI era.
          </div>
        </div>

        <div className="cc-speak-grid">
          {talks.map((t) => (
            <div className="cc-speak-card" key={t.title}>
              <IconOrb size={56}>{talkIcon(t.icon)}</IconOrb>
              <div className="cc-speak-card-title">{t.title}</div>
              <div className="cc-speak-card-body">{t.body}</div>
            </div>
          ))}
        </div>

        <a className="cc-btn" href={SITE.links.bookToSpeak} target="_blank" rel="noopener">
          Book to Speak
        </a>
      </div>
    </section>
  );
}
