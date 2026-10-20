# Bun'Q Burgers | Anti-Slop During audit (pre-deployment)

## Design Read
Independent burger branding concept, retro editorial minimalist. ENERGY 2 / RHYTHM 2 / MOTION 1. Keep cream, burgundy and mustard. Brand photos and official business data remain unconfirmed.

## Four-skill findings and changes
- UI: oversized desktop headline and fixed hero minimum height. Improved fluid scale and natural content height; retained the burger focal point.
- Copywriting: generic 'Explore the concept' CTA and arrow replaced by specific 'Lihat konsep Bun’Q'; no business claims added.
- Human: increased nav target area to 44px on narrow screens, retained visible keyboard focus and skip link, kept clearly labeled concept content.
- Layoutmobile: added tablet breakpoint (900px), phone breakpoint (600px), narrow phone (360px); reduced headings and spacing to avoid clipping.
- Brand: maintained palette, flat cream background, minimal decoration. No extra assets created.

## Purpose and hierarchy
- Cream provides whitespace and keeps burger visible.
- Burgundy anchors editorial type and story.
- Mustard is reserved for the primary CTA.
- Serif display creates retro personality, sans-serif handles navigation and practical information.
- Burger photo stays the single hero focal image; no decorative icon grid.
- Sections reflect concept showcase, story, pending menu and contact, with honest placeholders.

## Verification
- Static lint/test/build: executed locally; see assistant report.
- Browser click-through and viewport screenshots: NOT RUN. Chromium navigation was blocked by environment policy, including localhost.
- This is a pre-deployment candidate, NOT a verified final visual release.
- Cloudflare deployment: NOT RUN; pending browser validation.

## Browser verification update, 2026-10-20
- Chromium HTML preview rendered at 320, 375, 768, 1440 px using inline local assets via `page.set_content` because URL navigation was blocked.
- No horizontal overflow at any tested width; hero image loaded at all widths.
- All 9 internal links have existing anchor targets and programmatic click navigation was verified at all widths.
- After a correction, all header navigation and primary CTA targets are at least 44px high.
- Visual screenshots: `/mnt/data/bunq-preview-{320,375,768,1440}.png`.
- Browser URL-based network testing and Cloudflare live-site verification were not possible in this environment.
- Cloudflare: NOT DEPLOYED, as tested local assets are not available to the connector as a deployable bundle. Avoid claiming remote parity.