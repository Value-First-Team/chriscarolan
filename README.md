# chriscarolan.com

Chris Carolan's personal authority site — business transformation advisor for the AI era,
founder of Value-First Team. One page: hero, proof, the problem he addresses, how he helps,
why him, a comparison card, a Value-First Team cross-link, bio, speaking/media reel, podcast
section, a downloadable speaking kit, and a booking CTA.

See `VALUE-PROFILE.md` for what this site is *for* and how its value is tracked.

## Stack

- **Astro 5** + React, on `@vf/design-engine` + `@vf/site-kit` + `@vf/ui` + `@vf/brand`
- **Vercel** for hosting
- **HubSpot** visitor tracking (portal 40810431)

## Structure

```
src/
  components/     One component per homepage section (Hero, ProofRow, WhyChris, MeetChris,
                   SpeakingKit, PodcastSection, ReadyToConnect, …)
  layouts/        BaseLayout
  lib/site.ts     Site constants — name, tagline, social links, booking URLs
  pages/index.astro   The single page, composed in Figma render order
  styles/         Global + brand color/type tokens
```

## Local development

```bash
export GITHUB_TOKEN=$(gh auth token)   # to install the private @vf/* git deps
npm install
npm run dev        # http://localhost:4321
npm run build
```

## Deployment

Push to `main` — Vercel auto-deploys to chriscarolan.com.

## Governance

Site content and copy are Chris's own; new sections or structural changes route through
Showcase (public-facing site builder) to stay on the shared `@vf/*` design system rather than
forking styling inline.
