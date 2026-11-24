# Secure-by-Design Handbook – Brand Guidelines

These guidelines define the visual identity, brand assets, colour palette, typography, and presentation standards for the Secure-by-Design Handbook across the website, social previews, diagrams, and external materials. CSS tokens and assets live in `src/css/custom.css`, `src/pages/index.module.css`, and `static/img/`.

## Brand Essence

| Element | Guidance |
| --- | --- |
| Name | **Secure-by-Design Handbook** (navbar title: **Secure-by-Design**) |
| Domain | `www.securebydesignhandbook.com` |
| Tagline | Authoritative standards breakdowns and practical playbooks for building cyber-resilient connected devices |
| Personality | Confident, pragmatic, engineer-friendly, and regulation-aware |
| Visual tone | Calm, utilitarian, and readable – an engineering reference, not a marketing site |

The Secure-by-Design Handbook is part of the same open handbook family as the **PQC Handbook** and the **Supply Chain Security Handbook**. They share the teal-and-cyan visual system and shield mark so readers recognise the family, while each keeps its own editorial identity.

## Naming

- Refer to the publication as the **Secure-by-Design Handbook**, and to the practice as **Secure-by-Design** (capital S and D, hyphenated), as set in the style guide's Terminology section. Keep an organisation's own spelling when naming its programme or document (for example, *CISA Secure by Design*).
- Keep naming vendor-neutral and jurisdiction-neutral: avoid phrasing or sub-brands that imply endorsement by a regulator, standards body, notified body, or commercial supplier.
- For editorial tone and prose mechanics, follow [style-guide.md](./style-guide.md).

## Logo and Asset Suite

| Asset | File | Format / Size | Usage |
| --- | --- | --- | --- |
| Header logo | `static/img/logo.svg` | Vector SVG, `200 × 200` viewport, cyan fills | Navbar mark (`alt="Secure-by-Design Handbook Logo"`), slide headers, and compact lockups. |
| Favicon | `static/img/favicon.ico` | ICO with `16 × 16` and `32 × 32` images | Browser tab and bookmark icon. |
| Social preview card | `static/img/sbdc-social-card.png` (source `sbdc-social-card.svg`) | `1200 × 630` PNG | OpenGraph and link-preview card (`themeConfig.image`): the tagline in white Inter on a dark navy gradient with a cyan accent bar. Social platforms do not render SVG previews, so re-export the PNG whenever the SVG changes. |

Logo usage rules:

- Use the shared family shield in `static/img/`; do not create a separate mark or redraw it.
- Keep clear space of at least `0.5×` the logo height on all sides and keep it legible down to `24 px` height.
- Do not stretch, skew, outline, add drop shadows, or recolour it outside the palette.

Known gaps against the family standard: the social card's navy gradient (`#1E3A5F` to `#0F1C2E`) is outside the palette, where the sister sites use Deep Teal; and there is no SVG favicon or Apple touch icon. Fix both together with any other asset change.

## Colour Palette

The site uses the handbook-family teal-and-cyan palette in light and dark modes.

| Role | Hex | Usage |
| --- | --- | --- |
| Primary Cyan | `#00C5D8` | Interactive accents, card hover borders, buttons, and focal highlights (`--ifm-color-primary`); links and active states in dark mode. |
| Link Teal | `#006B78` | Light-mode text links and active states on Surface Light, where Primary Cyan is too pale for text. Not yet set in `custom.css`; see the contrast rules below. |
| Deep Teal | `#013B4E` | Light-mode navbar, footer in both modes, hero background, and dark-mode page background. |
| Darker Teal | `#012A38` | Dark-mode navbar background, for subtle elevation against Deep Teal pages. |
| Surface Light | `#F5FCFD` | Light-mode page background and dark-mode body text and footer links. |
| Mid Grey | `#5E6E75` | Light-mode body text on Surface Light. |
| Code Surface | `#EEF9FB` / `#024C63` | Code backgrounds in light mode (`#EEF9FB`) and dark mode (`#024C63`). |
| Highlight Orange | `#FF9F45` | Warnings or rare emphasis only (`--ifm-color-warning`). |

Colour and accessibility rules:

- Never convey meaning, priority, or status by colour alone; pair colour with text or a structural label.
- Maintain WCAG AA contrast: Mid Grey on Surface Light is about 5.1:1, Surface Light on Deep Teal about 11.6:1, and Primary Cyan on Deep Teal about 5.7:1.
- Never set text in Primary Cyan on Surface Light: it is about 2:1. Use Link Teal (about 6:1) for light-mode links and active states. The site currently breaks this rule, because light-mode links inherit `--ifm-color-primary`; setting `--ifm-link-color` to Link Teal under `[data-theme='light']` fixes it.
- Reference Infima variables in `src/css/custom.css` rather than hardcoding hex values inside components.

## Typography

| Role | Typeface | Weight | CSS reference |
| --- | --- | --- | --- |
| Headings | **Inter** | `700` | `--ifm-font-family-base: 'Inter', sans-serif; --ifm-heading-font-weight: 700;` |
| Body and UI | **Inter** | `400` (`700` strong) | `--ifm-font-family-base: 'Inter', sans-serif;` |
| Code and identifiers | **Source Code Pro** | `500` | `--ifm-font-family-monospace: 'Source Code Pro', monospace; --ifm-code-font-size: 95%;` |

Fonts load from Google Fonts (`stylesheets` in `docusaurus.config.ts`). Always keep system sans-serif and monospace fallbacks. Code blocks use the `github` syntax theme in light mode and `dracula` in dark mode.

## UI Visual Style

| Element | Visual guidance |
| --- | --- |
| Navbar | Deep Teal (`#013B4E` in light mode, `#012A38` in dark mode) with light text and the five section items on one line. |
| Footer | Deep Teal (`#013B4E`) with Surface Light text and links in both modes. |
| Cards | Homepage entry-path and role cards: Infima cards that lift slightly on hover and stack to one column on narrow screens through the grid; hero and community buttons stack below `768px`. |
| Homepage | A calm reference entry point. A Deep Teal hero with the site title, tagline, and two buttons; then the pillars, *Choose your next step*, *Get started by role*, and a closing community and news section (routing in [navigation-structure.md](./navigation-structure.md#homepage-and-footer-routing)). Avoid promotional banners, gradients, and decorative splash graphics. |
| Blog | The listing and posts use the standard page, card, and table styles, with reading time shown. No hero images, per-post illustrations, or promotional banners; posts share the site's social preview card. |
| Tables | Clean borders and scannable density; keep to four columns or fewer so tables stay readable on phones (style guide, Paragraphs & Lists). |
| Icons | The homepage uses emoji as card icons. Do not add an icon library for decoration alone; if icons are needed, use one consistent stroked set at about `2 px` stroke at `24 px`. |

## Diagrams and Illustrations

- Keep diagrams and illustrations functional and low-noise: each should clarify a workflow, timeline, decision, or trust boundary.
- Draw diagrams in Mermaid (`mermaid` code blocks), which uses the `neutral` theme in light mode and `dark` theme in dark mode so diagrams stay legible in both. Follow each diagram with a sentence that states its source, so the diagram is never the only place a fact appears.
- For vector illustrations, prefer flat vector or consistent `~2 px` stroke line work, using Primary Cyan as an accent rather than a fill.
- Avoid stock art, padlock-and-hacker clichés, and seal or badge motifs that suggest certification, CE marking, or regulatory approval.

## Governance

Review visual changes together with `src/css/custom.css`, `src/pages/index.module.css`, and `static/img/`, and check both colour modes and a phone-width layout before merging. Related maintainer guides cover the non-visual side of the handbook:

- [purpose-and-positioning.md](./purpose-and-positioning.md) – mission, audience, editorial thesis, sister-site boundaries, and non-goals
- [navigation-structure.md](./navigation-structure.md) – URL structure, linking, sidebars, and routing
- [style-guide.md](./style-guide.md) – editorial voice, terminology, page patterns, and sourcing
