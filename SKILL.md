---
name: sin-cen-design
description: Use this skill to generate well-branded interfaces and assets for 星辰 (Sin-Cen Huang's personal portfolio brand), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping a calm, Cinnamoroll-inspired AI × Psychology personal site.
user-invocable: true
---

# 星辰 · Sin-Cen design skill

Read `README.md` for the full brand brief — voice, palette, type, motifs, content rules.
Then explore:

- `colors_and_type.css` — drop-in CSS variables (sky / pink / ink, type ramps, shadows, motion). Every component in this kit inherits from these tokens; new work should too.
- `assets/` — logo mark, lockup, cloud, sparkle, halo, bunny, portrait placeholder. Copy these out into your artifact; never re-draw them.
- `ui_kits/portfolio/` — React components for the personal site (Navbar, Hero, About, ProjectCard, ProjectModal, Skills, LifeCorner, Contact) plus the orchestrating `index.html`. Use these as the source of truth for visual fidelity.
- `preview/*.html` — small specimen cards (colors, type, components, brand). Useful as quick references and as paste-able snippets.

## How to use

**If creating visual artifacts** (slides, throwaway prototypes, mocks, social posts):
1. Copy `colors_and_type.css` and the SVGs in `assets/` into your project. Reference them with `<link rel="stylesheet">` and `<img src="...">`.
2. Pull the matching component from `ui_kits/portfolio/`. The components are intentionally simple JSX — copy, don't try to npm-install.
3. Match the **voice & tone rules** in `README.md` → "CONTENT FUNDAMENTALS". The brand only works when copy pivots between psychology-warmth and engineering-rigor; keep both halves alive.

**If working on production code** (e.g. building a real version of this portfolio):
- Adopt the tokens in `colors_and_type.css` as your design tokens.
- Read every section of `README.md` → "VISUAL FOUNDATIONS" — the rules on shadow tinting, motion easing, hover states, and "no neutral-gray shadows" are non-negotiable to keep the airy feel.
- Match the iconography rules in "ICONOGRAPHY" — Lucide outline for function, Cinnamoroll cloud/sparkle/bunny SVGs only as decoration.

## When invoked without other guidance

Ask the user what they want to build or design. Likely answers:
- A new section / page for the portfolio (e.g. blog, case-study deep-dive, talks list).
- An off-portfolio artifact in the same brand (e.g. resume, slide deck, business-card-style social post, email signature).
- A variant of an existing section (e.g. "what if the Hero used a denser two-column with stats?").

Then act as an expert designer who outputs HTML artifacts **or** production code, depending on the need. Always ask whether they want variations and what tweak dimensions matter (visual / interaction / copy / iconography) before building.

## Hard rules

- Sky leads, pink supports. Never both at full saturation in the same cluster.
- All shadows are tinted (sky or pink) — never neutral gray.
- No sharp 0px corners anywhere.
- No AI-cliché purple gradients, no neural-network hairball illustrations.
- Emoji **only** in the Life Corner section and Tweaks UI — never in serious tech copy.
- Inline English / numerics inside Chinese always get a single half-width space around them.
