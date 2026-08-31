/**
 * /robots.txt — generated, not hand-written.
 *
 * The site had NO robots.txt before 2026-08-31: https://chriscarolan.com/robots.txt
 * served the 404 page, which is a soft-404 for a file crawlers ask for on every
 * visit. It now exists, and its `Sitemap:` line names the CANONICAL host.
 *
 * The host comes from `@vf/site-kit/identity` — the same constant the JSON-LD
 * graph and the sitemap use — so robots, sitemap and structured data cannot
 * disagree about which host this site is. That disagreement is the exact defect
 * being fixed on the sibling anchor today: valuefirstteam.com's robots.txt sat
 * on the apex and pointed its Sitemap at www.
 */
import type { MetadataRoute } from 'next';
import { CANONICAL_HOSTS } from '@vf/site-kit/identity';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${CANONICAL_HOSTS.chrisCarolan}/sitemap.xml`,
    host: CANONICAL_HOSTS.chrisCarolan,
  };
}
