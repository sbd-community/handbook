# Secure-by-Design Handbook – Brand Guidelines

> **Purpose**  This document codifies visual and written conventions so every contributor can present a consistent, credible brand experience across web, slide decks, and social channels.

---

## 1  Brand Essence

* **Tag‑line**  *Cyber‑security guidance for connected‑device makers.*
* **Personality**  Confident, pragmatic, engineer‑friendly, European‑law aware.
* **Voice**  Active, inclusive, plain English; avoid marketing fluff.

---

## 2  Logo Suite

| Variant      | File                                    | Usage                                                        |
| ------------ | --------------------------------------- | ------------------------------------------------------------ |
| Primary mark | `static/img/tech_shield_padlock_v5.svg` | Header (64 px), slide titles, favicons (export 32 × 32 PNG). |
| Monochrome   | Export SVG set to `stroke:black`        | Print docs & dark backgrounds.                               |

**Clear‑space**  ≥ 0.5 × logo height around all sides.
**Minimum size**  24 px height (stroke remains legible).

*Do not* skew, outline, or change stroke thickness.  Use colour overrides only via CSS `currentColor`.

---

## 3  Colour Palette

| Role                    | Hex       | Preview                                                         |
| ----------------------- | --------- | --------------------------------------------------------------- |
| **Primary Cyan**        | `#00C5D8` | ![#00C5D8](https://via.placeholder.com/24/00C5D8/000000?text=+) |
| **Deep Teal (Dark BG)** | `#013B4E` | ![#013B4E](https://via.placeholder.com/24/013B4E/000000?text=+) |
| **Surface Light**       | `#F5FCFD` | ![#F5FCFD](https://via.placeholder.com/24/F5FCFD/000000?text=+) |
| **Mid Grey**            | `#5E6E75` | ![#5E6E75](https://via.placeholder.com/24/5E6E75/000000?text=+) |
| **Highlight Orange**    | `#FF9F45` | ![#FF9F45](https://via.placeholder.com/24/FF9F45/000000?text=+) |

Accessibility AA checked for text on backgrounds.
Light‑mode body text: Mid Grey on Surface Light (AA); Dark‑mode: Surface Light on Deep Teal.

---

## 4  Typography

| Use        | Font family             | CSS sample                                           |
| ---------- | ----------------------- | ---------------------------------------------------- |
| Headings   | **Inter SemiBold 700**  | `font-family: "Inter", sans-serif; font-weight:700;` |
| Body       | **Inter Regular 400**   | `font-family: "Inter", sans-serif;`                  |
| Code / CLI | **Source Code Pro 500** | `font-family: "Source Code Pro", monospace;`         |

Load via Google Fonts or self‑host WOFF2; always include system‑sans fall‑back.

---

## 5  Iconography & Illustrations

* Use simple stroked icons (Lucide React) matching logo stroke width (\~2 px at 24 px).
* Illustrations: flat‑vector, 2‑colour max, primary cyan accent.

---

## 6  UI Components (Docusaurus)

| Component      | Spec                                                               |
| -------------- | ------------------------------------------------------------------ |
| Navbar BG      | `background-color:#013B4E; color:#F5FCFD;`                         |
| Primary Button | Cyan BG, white text; hover → darker teal border.                   |
| Code block     | Deep Teal BG, `font-family: "Source Code Pro"`, cyan line‑numbers. |

---

## 7  Tone of Voice & Writing

Follow `docs/style-guide.md`. Key reminders:

* Active voice, Oxford comma.
* Define acronyms on first use.
* Avoid hyperbole ("world‑class", "ground‑breaking").

---

## 8   Linking Best Practices

All internal links to other documents within the handbook **must** be relative file paths. This ensures that the navigation remains robust and does not break if the site's URL structure is changed in the future.

-   **Good:** `[CRA Overview](../standards/eu/cra-overview.md)`
-   **Bad:** `[CRA Overview](/docs/standards/cra-overview)`

When linking to a specific section, use the markdown file extension and the anchor:

-   **Good:** `[Engineering Benchmarks](../standards/eu/cra-overview.md#annex-i-benchmarks)`
-   **Bad:** `[Engineering Benchmarks](/docs/standards/cra-overview#annex-i-benchmarks)`

---

## 9  Asset Export Cheatsheet

| Asset             | Dimension  | Format                          |
| ----------------- | ---------- | ------------------------------- |
| Website favicon   | 32 × 32    | PNG (optimised)                 |
| Social Open‑Graph | 1200 × 630 | PNG (logo top‑left, title text) |
| Slide title       | 1280 × 200 | SVG (primary mark)              |

---

## 10  Governance

* Brand steward: **{TBD}** reviews logo changes.
* Major palette or logo shifts require PR + two approvals.
