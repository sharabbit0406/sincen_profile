# 星辰 Design System

> 一份結合「心理學底蘊」與「AI 硬實力」的個人品牌設計系統
> A personal-brand design system for **黃心岑 Sin-Cen Huang** — *AI 應用工程師 ｜數位心理建築師*

This design system powers a one-page personal portfolio that introduces Sin-Cen Huang: an AI Application Engineer with a Psychology background who specializes in LLM systems, RAG architectures, and Agentic Workflows. The product is a single-page scrolling website — Hero, About, Featured Projects, Skills & Certifications, Life Corner, Contact — designed to feel calm, trustworthy, and quietly cute, in the spirit of Sanrio's Cinnamoroll (大耳狗).

---

## Sources

There is **no upstream codebase, Figma, or slide deck** for this brand. The system was authored from a written brief (Chinese + English) provided by the brand owner. All visual decisions — palette, type, motifs — derive from that brief plus the explicit Cinnamoroll-inspired healing aesthetic the owner asked for.

If/when a Figma or codebase exists, drop the link here and re-run the design-system pass.

---

## Index

```
README.md                ← you are here
SKILL.md                 ← skill manifest for Claude Code / agent skills
colors_and_type.css      ← color + type CSS variables (base + semantic)
fonts/                   ← (Google Fonts loaded via CDN — no local files yet)
assets/
  └─ cloud.svg, sparkle.svg, halo.svg, logo-mark.svg, …
preview/                 ← Design-System-tab cards (one HTML file per card)
ui_kits/
  └─ portfolio/          ← the personal-portfolio site UI kit
       ├─ README.md
       ├─ index.html     ← interactive click-through of the whole site
       └─ *.jsx          ← Navbar, Hero, About, ProjectCard, ProjectModal, …
```

---

## Brand essence

**Tagline** —「最好的科技不只要高效解決問題，更要能真正理解並承載使用者的心。」
*The best technology doesn't just solve problems efficiently — it must truly understand and hold the user's heart.*

Two halves, one person:

| 心理學 Psychology | AI 工程 AI Engineering |
|---|---|
| 溫度 · 同理 · 倫理 | 嚴謹 · 架構 · 可落地 |
| Soft pink · rounded · gentle | Sky blue · structured · trustworthy |
| 「承載使用者的心」 | 「LLM、RAG、Agentic Workflows」 |

The visual system holds these two in balance — never letting cute overwhelm credible, and never letting tech feel cold.

---

## CONTENT FUNDAMENTALS

### Voice & tone
- **First person, warm-professional.**「我」not「本人」. Direct and grounded — never bragging, never apologetic.
- **Mandarin-primary, English-savvy.** Body copy is Traditional Chinese (zh-TW). Technical terms (LLM, RAG, LangGraph, MCP, Rerank, Webhook) stay in English mid-sentence; this signals fluency rather than translation friction.
- **Two registers, switchable:**
  - *Psychology register* — humane, observational, gentle. e.g.「我相信，最好的科技不只要高效解決問題，更要能真正理解並承載使用者的心。」
  - *Engineering register* — declarative, measurable, concrete. e.g.「導入二階段 Rerank 機制解決精確數值查找痛點」.
  - A single sentence often pivots between them — that pivot **is** the brand.

### Casing & punctuation
- Section headers use **mixed Chinese + parenthetical English**: 「精選專案 (Featured Projects)」, 「關於我 (About Me)」.
- Body Chinese uses **full-width punctuation** (，。！？「」) — never half-width inside Chinese paragraphs.
- A **single half-width space** flanks inline English / numerics inside Chinese: 「使用 Python 開發」, not 「使用Python開發」.
- Tech stack labels are bare PascalCase / lowercase as the tech ships: `Python`, `LangGraph`, `Gemini`, `MCP`, `n8n`, `Vertex AI`.

### Copy patterns
- **Hero pitch:** title → three-cert badges → 2–3 sentence positioning → two CTAs.
- **Project blurb:** one-line problem, then bolded technique names threaded into prose. Always cite the *mechanism*, never just the buzzword. Bad: 「使用 RAG」. Good: 「導入二階段 Rerank 重排序機制，解決精確數值查找問題」.
- **Quantified outcomes** end project sections when available. (證照成績：94 / 929 / 97.5).
- **No emoji in serious copy.** Reserved for the Life Corner section and the Tweaks/UI affordances — 🐰 for the rabbit, ☁️ for Cinnamoroll cameos, occasional ✨ as a section divider.
- **CTAs are short and verb-led:**「查看實戰專案」「聯絡我」「查看 GitHub 程式碼」「觀看 Demo 影片」.

### Vibe
Calm, confident, lightly whimsical. The page should feel like a well-kept notebook — clean white margins, sky behind the photo, a tiny cloud in the corner — not a flashy portfolio reel.

---

## VISUAL FOUNDATIONS

### Colors

| Token | Hex | Use |
|---|---|---|
| **`--sky-500`** Cinnamoroll Sky | `#A6D8F5` | Primary CTA fill, link underline, focused nav, hero halo core |
| `--sky-300` | `#C9E7F8` | Section divider tints, card hover border |
| `--sky-100` | `#EAF6FD` | Subtle backgrounds, hover surfaces |
| `--sky-700` | `#4B9CD3` | Deep accent on text-over-sky, icon strokes |
| **`--pink-500`** Soft Pink | `#F8BBD0` | Accent — tags, secondary buttons, hover on close icons |
| `--pink-300` | `#F8CBDC` | Tag fills (soft variant) |
| `--pink-100` | `#FDE9F0` | Hover surfaces for pink affordances |
| `--pink-700` | `#D17E9F` | Pink text on white when contrast is needed |
| **`--white`** Pure | `#FFFFFF` | Page background |
| `--cream` | `#FAFBFD` | Section alternation — barely-there off-white |
| `--ink-900` | `#1F2A37` | Body text |
| `--ink-700` | `#3B4858` | Sub-heads |
| `--ink-500` | `#6B7785` | Captions, meta |
| `--ink-300` | `#C7CED6` | Hairline borders |
| `--ink-100` | `#EEF1F4` | Disabled / subtle fills |
| `--mint-500` | `#B8E6D2` | (rare) success / "live" indicators |

### Signature gradient (frame fill)

Every framed shape — buttons, tags, chips, cards, icon containers, badges, inputs, polaroids — is filled with the same horizontal sky→pink gradient. This is the brand's most distinctive surface treatment.

| Token | Stops | Use |
|---|---|---|
| `--gradient-frame-soft` | `#F6FAFD → #FDF7FA` | Resting card / input / polaroid surfaces |
| **`--gradient-frame`** | `#ECF4FB → #FAF0F6` | Canonical — buttons, tags, chips, icon frames, hero certs |
| `--gradient-frame-strong` | `#DEEDF8 → #F7E4EC` | Hover/emphasis only — never the resting state |

Direction is always `90deg` (left = sky, right = pink) for consistency across the system. Borders match the dominant edge — sky-tinted on the left half, pink-tinted on the right.

Color usage is **calm and asymmetric** — sky carries 60%+ of accents, pink the next 25%, everything else trims. Never use sky and pink at full saturation in the same component cluster; one leads, the other supports.

### Typography

- **Display / Headings — `Quicksand`** (Google Fonts). Rounded terminals echo Cinnamoroll's silhouette without being cartoony. Weights 500/600/700.
- **Body / UI — `Plus Jakarta Sans`** (Google Fonts). A humanist geometric sans with quiet warmth; reads as modern and trustworthy. Weights 400/500/600.
- **Traditional Chinese — `Noto Sans TC`** (Google Fonts) for body, **`LXGW WenKai TC`** for decorative Chinese pulls (optional, used sparingly). Weights 400/500/700.
- **Monospace — `JetBrains Mono`** for tech-stack chips, code-style accents. Weight 500.

Type scale uses a 1.250 (major-third) ratio: 12 / 14 / 16 / 20 / 24 / 30 / 36 / 48 / 60. Body is 16, hero h1 is 60 desktop / 40 mobile. Line-height is generous on Chinese (1.7+) for breathing room; tightened to 1.1 on display.

> **Font substitution flag:** All fonts are Google Fonts CDN — no licensed/custom files are shipped here. If the brand later locks down a paid display face, replace `Quicksand` first.

### Spacing & layout

- **4px base unit.** Scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128.
- **Page max-width 1200px**, content max-width 880px for prose-heavy sections (About, project modal body).
- **Section vertical rhythm:** 96px (desktop) / 64px (mobile) padding top/bottom.
- **Grid:** 12-col desktop, 4-col mobile, 24px gutter.
- **Generous whitespace is non-negotiable.** Cinnamoroll-clean means we'd rather under-fill a section than crowd it.

### Corners

- **Cards & buttons: 16px** (`--radius-md`). This is the brand's default — friendly but not bubbly.
- **Tags / chips: 999px** (`--radius-pill`).
- **Modal: 20–24px** at the visible corners; the modal is the largest rounded surface so it gets one tick more roundness.
- **Inputs: 12px** (`--radius-sm`).
- **Never a sharp 0px corner anywhere in the system** — the absence of sharp edges is part of the calming feel.

### Shadows / elevation

Two systems, never mixed.

```
--shadow-soft  : 0 4px 16px -4px rgba(166, 216, 245, 0.35),
                 0 1px 2px rgba(31, 42, 55, 0.04);
--shadow-lift  : 0 16px 40px -12px rgba(166, 216, 245, 0.45),
                 0 4px 8px rgba(31, 42, 55, 0.06);
--shadow-pink  : 0 4px 16px -4px rgba(248, 187, 208, 0.45);
```

- `soft` — resting card. `lift` — hovered/active card. `pink` — pink button focus ring.
- Shadows are **always tinted** with sky (or pink, for pink elements). Neutral gray shadow is forbidden — it kills the airy feel.

### Borders

- 1px hairlines in `--ink-300` for inputs and dividers.
- Cards default **borderless** — they live on `soft` shadow alone — but a 1px `--sky-300` border appears on hover to underline the lift.
- Pink secondary buttons use a 1.5px `--pink-500` border on white.

### Backgrounds

- **Default: pure white**, full-bleed.
- **Section alternation:** every other section gets `--cream` or `--sky-100` at ~40% opacity — barely there.
- **Hero halo:** a soft radial gradient behind the portrait — `radial-gradient(circle, var(--sky-300) 0%, transparent 70%)` — sized larger than the photo so it bleeds past the silhouette.
- **Contact section is the exception:** full `--sky-500` background with white text, the one bold color block of the page.
- **Cloud motifs:** small `cloud.svg` decorations float in corners — opacity 0.5, never overlapping copy. See ICONOGRAPHY.

### Animation

- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (a gentle ease-out) for everything UI. Save `cubic-bezier(0.34, 1.56, 0.64, 1)` (mild overshoot) for the project-card hover lift only.
- **Durations:** 150ms micro (button hover), 250ms standard (card lift, color tween), 400ms staged (modal slide-in from right), 600ms hero entry.
- **Motion patterns:** fade + 8px translateY for scroll-in reveals; never spin, bounce hard, or use parallax depth tricks.
- **Modal:** slides from the right (`transform: translateX(100%) → 0`) over 400ms, white panel with `shadow-lift`.

### Hover & press states

| Element | Hover | Press |
|---|---|---|
| Primary button (sky) | shade darker (`--sky-700` border tint, +2% darken) + 2px lift + `shadow-pink` glow optional | 1px translate-down, no shadow |
| Secondary button (pink outline) | fill `--pink-100`, border stays `--pink-500` | fill `--pink-300` |
| Nav link | sky underline animates left→right (200ms) | underline stays full-width |
| Card | translateY(-4px) + `shadow-lift` + `--sky-300` 1px border fades in | translateY(-1px) |
| Close (×) icon | color shifts to `--pink-500`, rotates 90° | scale(0.92) |

### Transparency & blur

- **Sticky navbar:** white with `backdrop-filter: blur(12px)` and `background: rgba(255,255,255,0.78)` once the page scrolls past 80px. Above the fold it's solid white.
- **No frosted-glass cards.** The system uses opacity for halos and section tints only — not on interactive surfaces.

### Imagery vibe

- **Cool, airy, low-saturation.** Photos tinted slightly cyan in their cool channel.
- **Portraits:** background-removed (去背) with the sky halo behind. Treat the cut-out as the focal element, not a framed photo.
- **Polaroid grid** for the Life Corner — physical-feeling cards with a tiny white border and a subtle 2–4° random rotation per item; resting `shadow-soft`, hover removes rotation and lifts.
- **No stock illustrations of "AI" (robots, neural-net hairballs).** Tech is communicated through clean diagrams and tags, never gradient-purple AI clichés.

---

## ICONOGRAPHY

The brand uses **two distinct icon registers**, deliberately kept apart:

1. **Lucide icons (CDN: `lucide@latest`)** — outline, 1.5px stroke, 24px default, `currentColor`. This is the workhorse: navbar, buttons, footer links, project metadata. The "professional" face.
   - Used in: Navbar links, button leading/trailing icons, contact list (`mail`, `github`, `linkedin`, `instagram`), project meta (`calendar`, `code`, `git-branch`).
   - **Substitution flag:** Lucide is loaded from CDN. If the brand prefers Phosphor or Heroicons, swap the import — semantics are the same.

2. **Custom Cinnamoroll-inspired marks** — small SVGs in `assets/`: `cloud.svg`, `sparkle.svg`, `halo.svg`, `bunny.svg`. These are decorative-only — they live in the corners of sections, behind hero text, as section dividers. **Never inside a button or as a functional icon.** They sit at 0.4–0.6 opacity and use `--sky-300` or `--pink-300` fills.

**Emoji:** used sparingly and only in the Life Corner section and in chat-style/Tweaks copy. The rabbit (🐰), cloud (☁️), and sparkle (✨) are the canon trio. Tech sections stay emoji-free.

**Unicode chars as icons:** not used. The brand reads "polished" — Unicode glyphs read "improvised". Always prefer a real Lucide SVG.

**Tech-stack chips** are typography-only — no icon prefix — to stay legible at small sizes.

---

## Using this system

- Generating mocks / slides / throwaway prototypes: import `colors_and_type.css`, copy the relevant `ui_kits/portfolio/*.jsx` components, lift assets from `assets/`.
- For Claude Code / Agent Skill usage, see `SKILL.md`.
