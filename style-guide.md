# Secure-by-Design Handbook – Style Guide

Editorial standards for voice, terminology, structure, citation, and review. Visual identity lives in [brand-guidelines.md](brand-guidelines.md); URLs, linking, sidebars, and page placement in [navigation-structure.md](navigation-structure.md); mission, audience, sister-site boundaries, and non-goals in [purpose-and-positioning.md](purpose-and-positioning.md); entry-page structure and the job each overlapping page owns in [entry-page-seo-strategy.md](entry-page-seo-strategy.md).

## 1. Purpose

Define a consistent voice, visual language, and editorial standard so every article, guide, and UI element reinforces our mission: turning regulatory security requirements into actionable engineering practices for connected‑device makers.

## 2. Core Audience

| Role | Needs |
|------|-------|
| Product & Platform Owners | Plain‑English interpretation of CRA/NIS 2 and evidence artifacts. |
| Embedded/Firmware Engineers | Clause‑by‑clause implementation steps, code samples, reference configs. |
| Compliance Leads & Auditors | Gap‑analysis checklists, maturity models, audit‑ready templates. |
| Security & DevOps Teams | CI/CD hardening guides, SBOM/VEX pipelines, incident‑response runbooks. |

## 3. Voice & Tone

| Attribute | Guideline | Do | Avoid |
|-----------|-----------|----|----|
| Authoritative | Cite standards precisely; include clause numbers. | "CRA Art. 10‑3 requires…" | Vague claims ("industry best practice says…"). |
| Practical | End with next steps, scripts, or templates. | Provide Makefile snippets, checklist PDFs. | Pure theory without artifacts. |
| Vendor‑neutral | Mention multiple toolchains; disclose affiliations. | "You can use SWUpdate or Mender for OTA…" | Hard sells, single‑vendor bias. |
| Inclusive & Clear | Use plain language, define acronyms on first use. | Spell out "Software Bill of Materials (SBOM)". | Jargon without explanation. |

### Grammar & Mechanics

- Oxford comma required.
- Use active voice ("Validate keys" not "Keys are validated").
- Prefer second‑person orientation in tutorials ("You will…").
- Spell‑out numbers one → nine; 10+ in numerals.
- American spelling (*organization*, *behavior*, *modeling*, *analyze*, *artifact*, *license* as a noun, *program*). The site locale is `en-US`. Keep official names, defined terms, document titles, and quotations as their source spells them: *harmonised standard*, *standardisation request*, *European standardisation organisation*, *authorised representative*, *Official Journal of the European Union*, *National Cyber Security Centre*, *Ministry of Defence*, *Singapore Cybersecurity Labelling Scheme*, *Product Security and Telecommunications Infrastructure Act*. A US term keeps its US spelling (*FCC equipment authorization*, *Cyber Trust Mark program*).
- Dates in prose as day, month, year (*11 December 2027*); ISO 8601 (`2027-12-11`) in front matter and in dense date tables such as a regulation's timeline.

### Authority Language

Overstating an obligation is the most damaging mistake a compliance handbook can make, so keep what the law requires, what a standard or guidance recommends, and what this handbook advises clearly apart:

- **Name who binds whom**: when citing an obligation, name the instrument, the provision, and the party it applies to in the sentence (*"CRA Art. 14 requires manufacturers to…"*, *"ETSI EN 303 645 provision 5.1-1 requires…"*, *"The FDA recommends that sponsors…"*).
- **Calibrate modal verbs**: keep *must* and *shall* for binding legal obligations whose source and audience the sentence names. Use *should*, *recommends*, or a direct instruction (*record*, *verify*, *test*) for standards, guidance, and handbook advice.
- **Status travels with the fact**: say whether a standard is a draft, final, or cited in the Official Journal, and whether a date has applied or is still to come, wherever the fact appears.
- **No compliance verdicts**: never say a control or document "makes a product compliant" or "proves conformity". Say what it helps demonstrate, and to whom.

## 4. Terminology

- **Secure-by-Design**: Always capitalize S and D, and always hyphenate. The abbreviation (SbD) may be used after the first full use, where appropriate.
- **Product with Digital Elements (PDE)**: The formal, legal term from the Cyber Resilience Act. Use this for precision when discussing the CRA's scope. Abbreviate as PDE after the first full mention.
- **Connected Device**: The preferred, general-purpose term for this handbook. It is a plain-English umbrella term covering PDEs, IoT devices, and other network-connected hardware.
- **IoT (Internet of Things)**: Use when discussing consumer-focused products or when referencing specific standards or guidance that use the term (e.g., ETSI EN 303 645, ICO's IoT guidance). Define on first use.
- **Cyber Resilience Act**: no hyphen, as in the regulation's official title; abbreviate as CRA after first mention.
- **NIS 2 Directive**: no hyphen (EU style).
- **SBOM, VEX**: define on first appearance.

Provide a glossary page and link from first usage.

## 5. Structure & Layout

### Headings

| Level | Usage |
|-------|-------|
| # (H1) | Title – one per page, written as the first line after the front matter. |
| ## (H2) | Major sections (e.g., "Implementation Steps"). |
| ### (H3) | Sub‑sections (e.g., "Generate Keys"). |
| #### (H4) | Optional deep sub‑sections; avoid > H4. |

- **Numbered Headings**: For instructional content (especially in the *Quick Start* and *Implementation Guides* sections), use hierarchical numbering for H2 and H3 headings to clarify structure (e.g., `## 1. Title`, `### 1.1. Sub-title`). For narrative or high-level overviews, unnumbered headings are preferred.

### Paragraphs & Lists

- Keep paragraphs ≤ 120 words.
- Break complex sequences into ordered lists.
- Use tables for clause mappings; keep ≤ 4 columns for mobile readability.

### Blog Posts

The blog carries **news and analysis**: short posts that react to a specific publication or deadline and explain what it means for teams building connected products. It is not a venue for standalone opinion pieces. Articles pitched to external trade publications follow the separate [content-marketing style guide](content-marketing/content-marketing-article-style-guide.md).

#### What qualifies for a post

Write a post when **all** of the following hold:

1. **There is a dated, primary-source hook.** One of:
   - a regulation or delegated/implementing act is published (e.g., CRA, RED delegated act, NIS 2);
   - a regulator or government agency issues guidance (e.g., EC FAQ, ENISA, CISA, FDA, ICO, NCSC);
   - a standard is published or a public draft is released (e.g., ETSI EN 304 623, NIST SP 800-213r1);
   - a compliance deadline is approaching and teams need to act now (e.g., CRA reporting from 11 September 2026).
2. **It changes what connected-product teams must do or evidence**, or materially clarifies something they were unsure about.
3. **The handbook has something to say about it**: at least one docs page to link to, and usually one that needs updating as a result.

Vendor announcements qualify only when they change what manufacturers can rely on from their supply chain, and the post must stay vendor-neutral (frame it as what a supplier can and cannot do for you).

#### What ships with a post

A post is normally one commit or PR that also includes:

- the source document converted to Markdown in `/source-material/`, where licensing allows;
- updates to the affected handbook pages (new links, revised guidance, "Further reading" entries);
- any new tags added to `blog/tags.yml`.

#### Front matter

```yaml
---
title: "ENISA Publishes Secure by Design and Default Playbook"
authors: [sbd_community]
tags: [secure-by-design, cra, eu, standards, strategy]
description: "One or two sentences, ≤ 155 chars: the news, then what product teams should take from it."
---
```

- **title**: ≤ 60 characters, headline case, names the publisher and the thing published (or the deadline). No clickbait.
- **tags**: 4–6 existing tags from `blog/tags.yml` — typically one jurisdiction (`eu`, `uk`, `us`), one or more topics, and the instrument (`cra`, `nis2`, `etsi`). Add a new tag to `tags.yml` rather than using an inline tag.
- **description**: required. Common pattern: "X has published Y. Here's what connected-product teams should take from it."
- File name: `blog/YYYY-MM-DD-short-slug.md`, dated to the publication or event, not the writing date.

#### Structure

Target **500–850 words**. Use unnumbered `##` headings in sentence case, in roughly this order:

1. **Teaser** (no heading) – see *Excerpts* below — followed by `<!-- truncate -->` and one context paragraph: what this is and isn't (e.g., "not legal advice", "draft, not yet cited in the OJ", "not the full CRA application date").
2. **What was published / What changed** – the facts, with links to the primary source.
3. **Why this matters for connected-product teams** – the engineering, evidence, or process impact.
4. **How this relates to the handbook / to CRA** – where it fits alongside existing guidance; optional for short news.
5. **What to do next** – a numbered list of 3–5 concrete actions.
6. **Handbook resources** (or **We've updated the handbook**) – bulleted, bold internal links (`/docs/...`), each with a one-line description of what the reader will get.
7. **The practical takeaway** or **The bigger picture** – one short closing paragraph. No call-to-action beyond reading on.

For drafts, state the status clearly near the top and repeat the draft-standard warning used on harmonised-standard pages.

#### Excerpts

- Place `<!-- truncate -->` after the opening teaser for every blog post.
- Keep teaser text between 45 and 75 words, usually as one paragraph.
- The teaser should state the news hook and why it matters to connected-device product, engineering, security, or compliance teams.
- Use inline Markdown links before the truncate marker. Docusaurus excerpts may not resolve reference-style links whose definitions appear later in the post, so avoid raw reference labels like `[source-id]` and avoid `[label][source-id]` links in excerpts.

#### Links and sources

- Link the **primary source** (official publication page, OJ text, PDF) before any secondary commentary.
- Reference-style links (`[label][id]`) are fine after the truncate marker. Define each at the bottom of the post, and **remove any definition that is not used in the text** — don't keep inline-linked sources as duplicate definitions.
- Write dates in full (`11 September 2026`) and spell out acronyms on first use, e.g. "Cyber Resilience Act (CRA)".

#### Freshness

A post is current at its date. Do not rewrite a published post to say something new.

- When writing a post, use only sources dated on or before the post's date, and do not link to later posts. Anything that happened afterwards belongs in a later-update note.

- Where a later development supersedes what a post reported, add a `:::note[Later update]` admonition after the body. Give the date, say in one or two sentences what changed, and link the newer post or the primary source.
- Where a post was wrong at its date, add a `:::note[Correction, <date>]` admonition in the same place instead.
- Update the handbook pages, not the post, to carry the current position.

The [periodic review](periodic-review.md) checks for developments that need a later update.

### CRA Harmonised-Standard Pages

Use this structure for CRA draft or final harmonised standards, especially product-category standards such as ETSI EN 304 623:

1. **Why this matters now** – explain the product category, who should care, and the practical design or evidence impact.
2. **Official texts and status** – link to the official draft/final text, work item, CRA hook, and state clearly whether the standard is draft, final, or OJ-cited.
3. **Timeline** – show key publication, approval, and CRA application dates where known.
4. **Scope** – explain which products are covered and which are not, including the CRA core-functionality principle.
5. **Does this apply to my product?** – give role/product-oriented decision guidance.
6. **Requirements and how to implement them** – group requirements by engineering themes rather than reproducing every clause.
7. **Assessment and evidence** – describe the records, tests, and technical-file artifacts a team should prepare.
8. **Relationship to implementation guides** – link to the relevant handbook playbooks and tools.
9. **Further reading** – include official sources first, then useful external analysis.

Always include a warning callout for drafts: draft standards do not provide presumption of conformity until finalized and cited in the Official Journal. Treat them as design and evidence-planning inputs, not as final compliance claims.

### Call‑outs

- **Note**: supplementary info.
- **Warning**: risk or non‑compliance pitfall.
- **Tip**: productivity or tooling shortcut.

## 6. Code & Configuration Samples

| Standard | Rule |
|----------|------|
| Fenced blocks | Use triple‑backticks with language tag ( \`\`\`bash). |
| Width | ≤ 80 characters per line; wrap with \ where needed. |
| Comments | Precede with # (shell), // (C), explain why—not just what. |
| Sensitive data | Never show real credentials; use `<PLACEHOLDER>`. |

Put full example documents (threat models, policies, worked examples) under `docs/resources/` as pages in their own right, and link them inline.

## 7. Citation & References

- **Standards**: include document number, part, and clause (e.g., EN 303 645 §5.2).
- **Legal citations**: For EU regulations, use the format `[ACRONYM Art. X § Y(z)][link_id]`. Always include the regulation's acronym (e.g., `CRA`), a period after "Art", and the section symbol (§) for paragraphs. Example: `[CRA Art. 71 § 3][cra_art71]`. For Annexes, use the format `[CRA Annex III.I.5][link_id]`, using Roman numerals for the annex number.
- **External links**: Use Markdown footnotes `[^1]` or inline links `[text](url)`. Open external sites in a new tab.
- For long reference tables, link to downloadable CSV/Excel.

### Dates and freshness

Don't stamp handbook pages with when they were checked. Avoid "last checked on [date]", "last verified", "last reviewed", "as of [date]", "correct at the time of writing", and similar text.

- **Why**: Every page is rechecked each month in the [periodic review](periodic-review.md), so a stamp adds nothing while it is right and misleads once it is not. It also invites readers to distrust the rest of the page.
- **Instead**: Date the fact itself, from its source: "published on 1 December 2025", "applies from 11 December 2027", "Version 1.4 (4 September 2026)". These stay true.
- **Which date**: Use the date the document itself gives for its publication or issue (for example, "Document issued on February 3, 2026" in an FDA guidance). Do not use a web page's "last updated" or "content current as of" date, and do not give a date more precisely than the source does: if an announcement gives only the month, write the month.
- **Conditions and status**: State whatever qualifies a fact wherever the fact appears. That includes a draft or proposal not yet adopted, a standard not yet cited in the Official Journal, and a decision that lapses unless a condition is met (for example, amended deadlines that apply unless a standards body rejects the amendment within a month).

Blog posts are the exception: each post is dated, and later changes are recorded with the notes described in [Freshness](#freshness).

## 8. Visual Identity & Branding

All visual elements of the brand—including the logo, color palette, typography, and iconography—are defined in the official **[Brand Guidelines](brand-guidelines.md)**.

That document is the single source of truth for the brand's visual identity. This style guide concerns itself with how to apply that identity to the content and structure of this website.

## 9. Accessibility

- All images require descriptive alt text.
- Don't convey meaning by color alone; pair with icons or text.
- Ensure keyboard navigability & visible focus states.
- Test with screen‑reader (NVDA) before publishing.

## 10. SEO & Metadata

A search result should tell the reader exactly what the page answers, in the words they would search with. No keyword stuffing, clickbait, superlatives, or sales language.

- **Titles**: the browser title is the page `title` followed by ` | Secure-by-Design Handbook`, so do not repeat the brand in the `title`. Name the topic in the reader's terms (*Secure Boot Implementation*, not *Boot Integrity Considerations*) and keep it short enough that the full browser title stays near 60 characters.
- **Descriptions**: every doc page has a `description` in front matter; keep it that way for new pages. Aim for 110–160 characters, because search engines cut longer snippets, and keep each one distinct. Say what the page helps the reader do, and mention *connected devices*, *connected products*, or *products with digital elements* where it fits. Start with the content, not "This page", and quote the value, since most contain a colon.
- **Entry pages**: priority entry pages follow the structure and tiers in [entry-page-seo-strategy.md](entry-page-seo-strategy.md), including *Use this page when*, *What good looks like*, *Evidence to retain*, *Common gaps*, and *Related pages* sections.
- **Social card**: all pages share the site's OpenGraph image (`static/img/sbdc-social-card.png`, 1200 × 630); see the brand guidelines.

## 11. Review & Publishing Workflow

1. Draft in Markdown on a branch and open a pull request.
2. Run `npm run typecheck` and `npm run build` locally; the deploy workflow runs both on every pull request and fails on broken links.
3. Peer review by a technical editor for accuracy and voice, and a compliance review for clause correctness.
4. Merge; GitHub Actions deploys `main` automatically.

### Editorial Review Checklist

Before merging new or revised content, check that the page passes these tests:

- **Audience fit**: Can a product owner, firmware engineer, or compliance lead act on the page without being talked down to?
- **Obligation to control**: Does the page move from what a regulation or standard says to what the team builds, tests, and keeps as evidence?
- **Honest sourcing**: Is every date, requirement, and recommendation attributed to its instrument, provision, and audience, with the primary source linked?
- **Authority language**: Are *must* and *shall* kept for binding obligations, and is each standard's status (draft, final, cited in the OJ) stated where it matters?
- **Freshness**: Is each fact dated from its source, with no "last checked" or "as of" stamp?
- **Evidence**: Does the page say what record or artifact demonstrates the work?
- **Posts**: Does a post that changes a date or obligation ship with the handbook-page change?
- **Search result**: Read out of context, do the title and description say exactly what the page answers?
- **Clean checks**: Do `npm run typecheck` and `npm run build` pass?

After publication, every page and cited source is rechecked once a month in the [periodic review](periodic-review.md).

## 12. Living Document

Re‑evaluate this style guide when major regs are updated, or when the [periodic review](periodic-review.md) proposes a change to it. All contributors may propose edits via pull request to `style-guide.md`. 