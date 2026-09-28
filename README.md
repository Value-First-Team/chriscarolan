# chriscarolan.com

> **Where the live app is.** The site is the Next.js app in `next/`; the Vercel project
> builds that folder and nothing else. The retired Astro build that used to sit at the repo
> root was deleted on 2026-09-28, so `next/` is the only tree here.

> **A deploy a visitor would notice gets a `CHANGELOG.md` entry (2026-09-28).** Run
> `npm run check` in `next/` before you push; it runs `npm run assert:changelog`, then the
> typecheck. `CHANGELOG.md` at the repo root says what counts as an entry and what the check
> watches. Outside a MainBrain checkout, set `MAINBRAIN_ROOT` or the check prints SKIPPED.

Chris Carolan's personal authority site — business transformation advisor for the AI era,
founder of Value-First Team. One page: hero, proof, the problem he addresses, how he helps,
why him, a comparison card, a Value-First Team cross-link, bio, speaking/media reel, podcast
section, a downloadable speaking kit, and a booking CTA.

See `VALUE-PROFILE.md` for what this site is *for* and how its value is tracked.

## Stack

- **Next.js** (App Router, static export) + React, on `@vf/design-engine` + `@vf/site-kit` + `@vf/ui` + `@vf/brand`
- **Vercel** for hosting
- **HubSpot** visitor tracking (portal 40810431)

## Structure

```
next/src/
  app/                 The single page, its layout, robots and sitemap
  components/sections/ One component per homepage section (Hero, ProofRow, WhyChris, MeetChris,
                       SpeakingKit, PodcastSection, ReadyToConnect, …)
  lib/site.ts          Site constants — name, tagline, social links, booking URLs
  styles/              Global + brand color/type tokens
```

## Local development

```bash
cd next
export GITHUB_TOKEN=$(gh auth token)   # to install the private @vf/* git deps
npm install
npm run dev        # http://localhost:3000
npm run build      # next build (static export -> next/out)
npm run check      # the CHANGELOG check, then tsc --noEmit
```

## Deployment

Push to `main` — Vercel auto-deploys to chriscarolan.com.

## Governance

Site content and copy are Chris's own; new sections or structural changes route through
Showcase (public-facing site builder) to stay on the shared `@vf/*` design system rather than
forking styling inline.
