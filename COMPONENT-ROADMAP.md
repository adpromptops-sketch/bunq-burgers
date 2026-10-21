# Bun'Q component roadmap

## V1.5 (implemented)
- Editorial Carousel Slider in Spotlight: three text-based concept slides, manual controls, no invented photos.
- Expand Details in Menu Preview: native accessible disclosure for verified-information status.
- Step Indicator in Story: navigation between existing concept sections.

These are lightweight vanilla HTML/CSS/JS adaptations of interaction patterns, not installations of the Watermelon shadcn React components.

## V2.0 (planned, not active)
- Shuffle Pinned Item: ordering of real featured menu items, after owner data and editing requirements exist.
- Stepper: ordering workflow only if a legitimate order system is approved.
- Time Undo Action: reversal of cart/editor actions only when such actions exist.

No payment, checkout, official product claims or invented menu data in V1.5.

## QA checklist
- CI lint, test, build.
- Manual browser widths 320, 375, 390, 768 and 1440 px.
- Verify carousel previous/next, keyboard focus, expand/collapse, section links, no horizontal overflow and reduced motion.
- Deploy only after PR CI passes.
