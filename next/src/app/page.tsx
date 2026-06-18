/**
 * / — chriscarolan.com home (the one-page authority site).
 *
 * React Server Component (SSG — statically generated at build time, output:
 * 'export'). Composed from this node's own bespoke sections in the exact order
 * of the Astro original (src/pages/index.astro):
 *
 *   Hero → ProofRow → ProblemStatement → HowICanHelp → WhyChris
 *   → ComparisonCard → ValueFirstTeam → MeetChris → SpeakingMedia → InTheMedia
 *   → PodcastSection → SpeakingKit → [bottom cosmic band: JustForFun
 *   → ReadyToConnect] → SiteFooterBespoke
 *
 * The whole body sits on .cc-page (the personal navy canvas), nested INSIDE the
 * shared constellation shell (header above, SiteFooter below) from layout.tsx.
 * The site's own TopNav is intentionally NOT re-rendered — the shared shell
 * header now carries navigation (the constellation-membership upgrade); every
 * in-body CTA (Book a Call, etc.) is preserved.
 *
 * Ported faithfully from the Astro version; no content dropped, nothing
 * genericized.
 */

import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { ProofRow } from '@/components/sections/ProofRow';
import { ProblemStatement } from '@/components/sections/ProblemStatement';
import { HowICanHelp } from '@/components/sections/HowICanHelp';
import { WhyChris } from '@/components/sections/WhyChris';
import { ComparisonCard } from '@/components/sections/ComparisonCard';
import { ValueFirstTeam } from '@/components/sections/ValueFirstTeam';
import { MeetChris } from '@/components/sections/MeetChris';
import { SpeakingMedia } from '@/components/sections/SpeakingMedia';
import { InTheMedia } from '@/components/sections/InTheMedia';
import { PodcastSection } from '@/components/sections/PodcastSection';
import { SpeakingKit } from '@/components/sections/SpeakingKit';
import { JustForFun } from '@/components/sections/JustForFun';
import { ReadyToConnect } from '@/components/sections/ReadyToConnect';
import { SiteFooterBespoke } from '@/components/sections/SiteFooterBespoke';

export const metadata: Metadata = {
  title: 'Chris Carolan — Business Transformation Advisor for the AI Era',
  description:
    'Chris Carolan — business transformation advisor for the AI era. Founder of Value-First Team. Helping leaders rethink how their companies operate.',
  alternates: { canonical: '/' },
  openGraph: { url: 'https://chriscarolan.com/' },
};

export default function HomePage() {
  return (
    <div className="cc-page">
      <Hero />
      <ProofRow />
      <ProblemStatement />
      <HowICanHelp />
      <WhyChris />
      <ComparisonCard />
      <ValueFirstTeam />
      <MeetChris />
      <SpeakingMedia />
      <InTheMedia />
      <PodcastSection />
      <SpeakingKit />
      {/* Bottom cosmic band — one image, two sections sitting on it
          (JustForFun + ReadyToConnect), veiled top + bottom into navy. */}
      <section className="cc-bottom-band">
        <JustForFun />
        <ReadyToConnect />
      </section>
      <SiteFooterBespoke />
    </div>
  );
}
