# Portfolio UI Kit — 星辰 Sin-Cen

A pixel-faithful recreation of the one-page personal portfolio described in the brand brief. Built as click-through React components — minimal logic, faithful visuals.

## Files

```
index.html        ← the full site, top-to-bottom, click-through
Navbar.jsx        ← sticky top nav with sky-underline hover
Hero.jsx          ← left text + right portrait with halo
About.jsx         ← two-column psychology × engineering
ProjectCard.jsx   ← project card (used in the grid)
ProjectModal.jsx  ← right-slide modal "技術深潛區"
Projects.jsx      ← section + grid of ProjectCard
Skills.jsx        ← skill bars + certification badges
LifeCorner.jsx    ← polaroid grid with random rotation
Contact.jsx       ← sky-blue full-bleed contact block
data.js           ← project + cert + life content
```

## Behaviour

- Sticky navbar — opaque white, blurs to frosted on scroll, sky underline tracks the active section.
- Project cards lift on hover; clicking opens the right-side fullscreen modal with the technical deep-dive.
- Modal: slides in from right, scrollable body, close (×) tints pink on hover.
- All other interactions are visual states only — links don't navigate.

## Frame

This is presented as a desktop site (1280×… wide). Mobile sizing is not in scope for this kit.
