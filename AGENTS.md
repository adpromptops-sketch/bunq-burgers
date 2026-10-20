# Bun'Q Burgers — Agent Instructions v1.0

## Project identity
Hybrid portfolio prototype intended for possible owner adoption. NOT an official Bun'Q website until authorized. Owner brand assets and menu exist but have not been delivered. Do not invent business facts.

## Locked scope — V1
Primary goal: brand presence. Build one responsive landing page: hero, signature showcase, brand story placeholder, simple menu preview, and visit/contact section. WhatsApp is for contact, not order checkout in V1. Label all dummy contact/location/hours and sample menu content clearly. Do not fabricate reviews, ratings, awards, ingredients, prices, operating hours, or official slogans.

Deferred: interactive menu, product modal, shopping cart, checkout, payments, login, loyalty, admin dashboard, analytics requiring tracking consent. Any addition needs user approval and scope update.

## Locked visual direction
Centerpiece burger: large photorealistic burger center, retro headline around it, single primary CTA. Flat solid warm cream background (#FFF4DE); burgundy (#681D27) for display type; mustard (#F4B942) as restrained accent; charcoal (#24211F) body text. Desktop and mobile must show product first with clear hierarchy. No paper texture, checkerboard, seal/badges, arrows, stickers, scattered captions, decorative icon strips, or unrelated animated objects. Retro-modern editorial, spacious, not template-like. Treat previous generated designs as concepts, not official assets.

## Skills / source references
- Taste Skill: https://github.com/leonxlnx/taste-skill (art direction, source imagery, real browser screenshot checks)
- Anti-Slop: https://github.com/miqdadbadjuber/anti-slop (filter, not art direction). Use core + UI + copywriting + human + layoutmobile + code as relevant. Mode DURING for new builds and AFTER for audit. Apply its current mandatory rules and Delivery Gate from installed source; don't claim installed or passed if not verified.
- Superpowers workflow: clarify -> plan -> write tests -> implement -> run tests -> review.
- Frontend design quality: original brand-aware styling, accessible behavior, mobile-first. Never blindly copy a template.
- Ponytail: do not assume what the skill means; wait for verified link/instructions.

## Coding and architecture
Prioritize learning fundamentals: semantic HTML5, CSS3 custom properties, vanilla JavaScript only when needed. Use simple modular data. Array of product objects for previews: list render O(n), space O(n). Do not introduce React, database or unnecessary dependencies in V1. Use descriptive names, little commentary and no filler comments. Respect reduced-motion, keyboard navigation, semantic landmarks, responsive image dimensions, alt text, contrast, focus states, no horizontal scrolling at 320/375/768/1440 px, 44px touch targets where feasible. Optimize responsive images and font loading. External assets require usage rights and credit when applicable.

## Git and safety workflow
1. Confirm repository identity, access and baseline; never assume it exists.
2. Save working baseline. Create feature branch (never edit main directly); check .gitignore for env, secrets, tokens and local artifacts.
3. Define acceptance tests before each feature. Implement one small change at a time; inspect diff and make focused commits.
4. Push only to feature branch; create draft PR for review.
5. Require lint, relevant tests, build, accessibility check, responsive screenshots, performance and security review before merge. Use mock data. Don't fabricate passing results.
6. Merge only after review and passing checks. Deploy only with approval, verify live URL and rollback path.
7. Report changed files, proof of checks and things NOT tested. Do not claim success, installation or deployment without evidence.

## Anti-Slop Delivery Gate
Before presenting deliverables, report PASS/FAIL/NOT RUN for: (a) UI and originality, (b) honest copy and no invented claims, (c) accessibility / mobile behavior, (d) code and testing. If FAIL, fix before shipping. If NOT RUN, explicitly state why and do not call it production-ready.

## Decision-making
For important choices state rationale, assumptions, alternative, implications, how to test, and request approval. Keep routine implementation short and direct. Ask only for missing information that blocks work. Owner's logo, menu and photos must replace prototypes before public launch; seek owner's authorization before publishing an official-looking website.

<!-- antislop:start -->
## antislop
For UI, copy, people, and mobile layout work, read `antislop.md` (core) and then the relevant skill when its official files are installed:
- UI / visual: `skills/antislop-ui/SKILL.md`
- Copy & text: `skills/antislop-copywriting/SKILL.md`
- People: `skills/antislop-human/SKILL.md`
- Mobile / responsive: `skills/antislop-layoutmobile/SKILL.md`

Before starting, resolve antislop mode in this order: explicit session instruction, global preference, then ask. An explicit session instruction overrides global preference. Announce `antislop active: during (session override).` when this session's mode is selected. For future sessions without an explicit mode, consult the core's "Two Usage Modes" section.

Installation status: core and four selected skill folders copied from the matching user-supplied official release. Reload the agent session to activate the instructions.
<!-- antislop:end -->