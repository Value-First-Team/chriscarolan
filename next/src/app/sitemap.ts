/**
 * /sitemap.xml — generated from the canonical host.
 *
 * The site had no sitemap before 2026-08-31; https://chriscarolan.com/sitemap.xml
 * served the 404 page. One public route exists today (`/`), and that is the point
 * of the file: it states, in the one place a crawler is guaranteed to look, WHICH
 * host and which URL form this site claims. A sitemap listing a single canonical
 * URL is a stronger identity signal than no sitemap at all.
 *
 * Routes are NOT hardcoded against a host literal — the origin comes from
 * `@vf/site-kit/identity`, shared with robots.ts and the JSON-LD graph. Add a
 * route to the array when a route is added to src/app.
 */
import type { MetadataRoute } from 'next';
import { CANONICAL_HOSTS } from '@vf/site-kit/identity';

export const dynamic = 'force-static';

/** Every public route on this node. One page today. */
const ROUTES = ['/'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: route === '/' ? CANONICAL_HOSTS.chrisCarolan : `${CANONICAL_HOSTS.chrisCarolan}${route}`,
    changeFrequency: 'monthly' as const,
    priority: route === '/' ? 1 : 0.7,
  }));
}
