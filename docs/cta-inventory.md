# chriscarolan.com — CTA / Link Inventory

Every clickable destination on the one-page site, where it points, and where to edit it.
Verified against the live site on **2026-06-09** (commit `da36e46`, deploy `tGZgsc_G`).

**How destinations are wired:** almost every URL is centralized in **`src/lib/site.ts`** under
`SITE.links`, `SITE.social`, and `SITE.email`. To change a destination, edit the value there —
it propagates to every button that uses that key. Two exceptions are hardcoded in components
(noted below). After any edit: rebuild, push to `main` (auto-deploys via Vercel), and update
the change log at the bottom of this file.

⚠️ **Shared key — read before changing:** `SITE.links.bookCall` powers **four** buttons (Top Nav,
Hero, How I Can Help, Ready to Connect). Editing it moves **all four**. To repoint just one of
them, give that button its own new key in `site.ts` (don't hardcode inline) and update this table.

## Primary CTAs & links

| # | Section | Button label | Destination | New tab | Source key (`site.ts`) | Component:line |
|---|---------|--------------|-------------|:------:|------------------------|----------------|
| 1 | Top Nav | **Chris Carolan** (brand) | `/` (home) | no | — *hardcoded* | `TopNav.astro:11` |
| 2 | Top Nav | **Book a Call** | `meetings.hubspot.com/chris-carolan1/value-first-team-free-consult` | yes | `links.bookCall` ⚠️shared | `TopNav.astro:14` |
| 3 | Hero | **Book a Call** | `…/value-first-team-free-consult` | yes | `links.bookCall` ⚠️shared | `Hero.astro:40` |
| 4 | How I Can Help | **Work With Me** | `…/value-first-team-free-consult` | yes | `links.bookCall` ⚠️shared | `HowICanHelp.astro:43` |
| 5 | Value-First Team | **Learn More** | `https://www.valuefirstteam.com` | yes | `links.valueFirstTeam` | `ValueFirstTeam.astro:23` |
| 6 | Speaking & Media | **Book to Speak** | `meetings.hubspot.com/chris-carolan1/public-speaking` | yes | `links.bookToSpeak` | `SpeakingMedia.astro:106` |
| 7 | In the Media | **Watch & Listen** | `https://www.valuefirstteam.com/shows` | yes | `links.shows` | `InTheMedia.astro:27` |
| 8 | Podcast (AI-Native Shift Daily) | **Listen & Subscribe** | `https://ainativeshift.com` | yes | `links.aiDailyShow` | `PodcastSection.astro:63` |
| 9 | Speaking Kit | **Download Speaking Kit** | `/speaking-media-kit.pdf` (hosted) | yes (download) | `links.speakingKit` | `SpeakingKit.astro:25` |
| 10 | Speaking Kit (book row) | **Learn More** (Surviving the SaaSpocalypse) | `https://www.valuefirstteam.com/book/saaspocalypse` | yes | `links.bookLearnMore` | `SpeakingKit.astro:48` |
| 11 | Ready to Connect | **Book a Call** | `…/value-first-team-free-consult` | yes | `links.bookCall` ⚠️shared | `ReadyToConnect.astro:14` |
| 12 | Footer | **Email** (chris.carolan@valuefirstteam.com) | `mailto:chris.carolan@valuefirstteam.com` | no | `SITE.email` | `Footer.astro:17` |
| 13 | Footer | **LinkedIn** (icon) | `https://www.linkedin.com/in/chris-carolan/` | yes | `social.linkedin` | `Footer.astro:40` |
| 14 | Footer | **X (Twitter)** (icon) | `https://x.com/chriscarolan` | yes | `social.x` | `Footer.astro:47` |
| 15 | Footer | **Instagram** (icon) | `https://www.instagram.com/beardabides/` | yes | `social.instagram` | `Footer.astro:52` |
| 16 | Footer | **YouTube** (icon) | `https://www.youtube.com/@Value-First` | yes | `social.youtube` | `Footer.astro:67` |

## Destinations grouped (what shares a URL)

- **`value-first-team-free-consult`** (HubSpot Meetings) ← #2, #3, #4, #11 *(via the one shared `bookCall` key)*
- **`public-speaking`** (HubSpot Meetings) ← #6 (`bookToSpeak`)
- **`valuefirstteam.com`** ← #5 (`valueFirstTeam`)
- **`valuefirstteam.com/book/saaspocalypse`** ← #10 (`bookLearnMore`) — Surviving the SaaSpocalypse book CTA (temporary target set 2026-06-09)
- **`valuefirstteam.com/shows`** ← #7 (`shows`)
- **`ainativeshift.com`** ← #8 (`aiDailyShow`)
- **`/speaking-media-kit.pdf`** ← #9 (`speakingKit`)
- **Personal social** ← #13–16 (`social.*`)
- **Internal** ← #1 home `/`, #12 `mailto`

## Notes

- All external CTAs open in a new tab (`target="_blank" rel="noopener"`). The Top Nav brand (#1) and footer email (#12) stay in-tab.
- #9 also carries the `download` attribute (saves the PDF rather than navigating).
- The four `bookCall` buttons still share one key — plan a new `site.ts` key before repointing just one of them. (#10's Learn More was repointed to the SaaSpocalypse book page on 2026-06-09; #5 still → valuefirstteam.com.)

## Change log

Record each CTA change here (date · what changed · old → new · commit). Keeps edits auditable.

| Date | # / Button | Change (old → new) | Commit |
|------|-----------|--------------------|--------|
| 2026-06-09 | — | Inventory created (baseline) | `da36e46` |
| 2026-06-09 | #10 Learn More (SaaSpocalypse book) | `valuefirstteam.com` → `valuefirstteam.com/book/saaspocalypse` (temporary) | `a05284c` |
