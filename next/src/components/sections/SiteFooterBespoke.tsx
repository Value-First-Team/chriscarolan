/**
 * SiteFooterBespoke — the personal site's own footer (dark gray, logo row,
 * tagline + email, divider, copyright + 4 social icons). Ported from
 * Footer.astro.
 *
 * NOTE: this is the BODY footer that is part of Chris's distinct visual
 * identity — it sits at the end of the .cc-page canvas, ABOVE the shared
 * constellation SiteFooter (which provides cross-node nav + legal). Preserved
 * faithfully so the personal-site close (the cosmic band → this dark-gray
 * footer) reads exactly as the Astro original; the shared shell footer adds the
 * constellation membership beneath it.
 */

import { CCLogo } from './CCLogo';
import { SITE } from '@/lib/site';

export function SiteFooterBespoke() {
  const year = new Date().getFullYear();

  return (
    <footer className="cc-footer">
      <div className="cc-footer-top">
        <CCLogo height={50} color="cream" />
        <div className="cc-footer-tagline-row">
          <div className="cc-footer-tagline">Helping companies operate in the AI era</div>
          <a className="cc-footer-email" href={`mailto:${SITE.email}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="2 6 12 13 22 6" />
            </svg>
            <span>{SITE.email}</span>
          </a>
        </div>
      </div>

      <hr className="cc-footer-rule" />

      <div className="cc-footer-bottom">
        <div className="cc-footer-copy">© {year} Chris Carolan | Brand Design by Brand Alchemy</div>
        <div className="cc-footer-socials" aria-label="Social links">
          <a href={SITE.social.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.5 3h-17A1.5 1.5 0 002 4.5v15A1.5 1.5 0 003.5 21h17a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0020.5 3zM8.5 17.5h-2.5v-7.5h2.5v7.5zm-1.25-8.6a1.45 1.45 0 11.01-2.9 1.45 1.45 0 010 2.9zm10.75 8.6h-2.5v-3.65c0-.87-.02-2-1.22-2-1.22 0-1.4.95-1.4 1.93v3.72h-2.5v-7.5h2.4v1.03h.03c.34-.64 1.16-1.31 2.38-1.31 2.54 0 3.01 1.67 3.01 3.84v3.94z" />
            </svg>
          </a>
          <a href={SITE.social.x} target="_blank" rel="noopener" aria-label="X (Twitter)">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18 3h3l-7 8 8 10h-6.5l-5-6-5.5 6H1l7.5-8.5L1 3h6.5l4.5 5.5L18 3z" />
            </svg>
          </a>
          <a href={SITE.social.instagram} target="_blank" rel="noopener" aria-label="Instagram">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>
          <a href={SITE.social.youtube} target="_blank" rel="noopener" aria-label="YouTube">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M23 12s0-3.6-.45-5.3a2.78 2.78 0 00-1.95-2C18.85 4.27 12 4.27 12 4.27s-6.85 0-8.6.46a2.78 2.78 0 00-1.95 2C1 8.4 1 12 1 12s0 3.6.45 5.3a2.78 2.78 0 001.95 2c1.75.46 8.6.46 8.6.46s6.85 0 8.6-.46a2.78 2.78 0 001.95-2C23 15.6 23 12 23 12zM9.74 15.27V8.73L15.5 12l-5.76 3.27z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
