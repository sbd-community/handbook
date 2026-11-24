# Secure-by-Design Handbook – Purpose & Positioning

Mission, audience, editorial stance, sister-site boundaries, and scope exclusions. Structure: [navigation-structure.md](./navigation-structure.md). Voice: [style-guide.md](./style-guide.md). Visual identity: [brand-guidelines.md](./brand-guidelines.md). Which pages are entry points from search, and what this site owns topic by topic: [entry-page-seo-strategy.md](./entry-page-seo-strategy.md).

## What We Are Building

**Authoritative standards breakdowns and practical playbooks for building cyber-resilient connected devices.**

A vendor-neutral reference and how-to manual (`https://www.securebydesignhandbook.com`) for organisations that make, integrate, or operate products with digital elements, from IoT sensors and industrial controllers to connected consumer and medical devices. It answers one question: *how do we design, build, operate, and evidence secure connected products?*

- **Promise**: Regulatory obligations (EU Cyber Resilience Act, NIS 2, RED, ETSI EN 303 645, IEC 62443, FDA, PSTI, and others) translated into concrete engineering controls, lifecycle practices, technical documentation, and evidence that a product team can adopt without guesswork.
- **Limit**: Guidance, not legal advice, certification, or a conformity assessment. Pages say so where a reader might take them that way, and route decisions that need one to the manufacturer's legal adviser, notified body, or market surveillance authority.
- **News**: Dated blog posts that report a publication or deadline and say what it means for connected-product teams, linking to the handbook pages that hold the lasting guidance. Scope is in [News](#news); the writing rules are in the style guide's Blog Posts section.

## Audience

| Stakeholder | Needs we address |
|-------------|------------------|
| Product & Platform Owners (OEMs, ODMs, brand labels) | Understand obligations, justify security investment, plan release roadmaps. |
| Embedded / Firmware Engineers & Architects | Clause-by-clause implementation guidance: secure boot flows, key storage, SBOM and VEX generation, OTA update hardening. |
| Compliance & Certification Leads | Gap-analysis checklists, evidence templates, audit-ready mappings between requirements and artefacts. |
| Security & DevOps Teams | Practical runbooks for CI/CD, vulnerability disclosure, SBOM lifecycle, and incident response. |

Readers are experienced engineers and product professionals. They need regulatory text made concrete, not security basics explained from scratch, and not simplified prose.

## Editorial Thesis

Secure by Design is a product property that has to be built in and then evidenced for the product's whole support period, not a certificate bought at the end:

- **Obligations become controls** – every page should move from what a regulation or standard says to what the team builds, tests, and keeps as evidence.
- **A standard is not a deadline** – a harmonised standard gives presumption of conformity only once cited in the Official Journal, a draft gives none, and dates belong to the instrument and audience that set them. Never present one regime's date as universal.
- **Proportionate to the product** – controls scale with the product's risk class and architecture (microcontroller, Linux-class, hybrid, cloud-connected); the [Types of Embedded Device](./docs/resources/reference/types-of-embedded-device.md) page sets the vocabulary.
- **Evidence is part of the work** – a control nobody can show was designed, tested, released, and maintained does not help at conformity assessment or after an incident.

## Content Pillars

1. **Regulatory explainers** – breakdowns of CRA, NIS 2, RED, EN 303 645, IEC 62443, FDA, PSTI, and other regimes (`/docs/standards/`).
2. **Implementation playbooks** – build-phase and operate-phase guides such as secure boot, key provisioning, OTA updates, and vulnerability disclosure (`/docs/implementation/`).
3. **Resources** – gap analysis and maturity worksheets, policy templates, the evidence pack, example threat models, hardware notes, and real-world vulnerability lessons (`/docs/resources/`).
4. **Tools** – vendor-neutral landscapes of tooling by security task (`/docs/tools/`).

## Sister Sites

| Handbook | Owns | To Secure-by-Design Handbook |
| --- | --- | --- |
| **Secure-by-Design Handbook** | Connected-product secure-by-design engineering: secure boot, identity and keys, SBOM/VEX, OTA, vulnerability handling, CRA engineering and evidence | Primary source for these topics |
| **PQC Handbook** | Post-quantum cryptography discovery, prioritisation, authority timelines, long-lived verifiers, migration records | Onward reading for post-quantum migration; the authority for PQC dates, never this site |
| **Supply Chain Security Handbook** | Supplier assurance, acceptance, attestation, provenance, lifecycle evidence exchange | Onward reading for supplier assurance; supply-chain evidence exchange belongs there |

Each handbook runs its own news feed. A post here that touches post-quantum cryptography (such as one on CRA cryptography) links to the PQC Handbook for PQC dates and positions.

## News

The blog (`/blog/`) is for the same audience and in the same register as the handbook. It reports a development and explains what it means for connected-product teams; it is not a commentary stream or a way into the handbook's structure.

- **In scope**: regulations, delegated and implementing acts, and their guidance (CRA, RED, NIS 2, and national implementing laws); regulator and agency guidance (European Commission, ENISA, CISA, FDA, FCC, ICO, NCSC); published standards and public drafts; approaching compliance deadlines; and supplier developments only where they change what manufacturers can rely on from their supply chain.
- **Out of scope**: product launches and vendor claims, funding and market news, breach news without a product-security lesson, and opinion pieces without a dated primary-source hook.
- **Never the only home**: a post is never the only place a date or obligation appears. A development that changes one ships with the change to the handbook pages that state it.

## Non-Goals

Do not publish or centre:

- Legal opinions, or statements that a product "is compliant" or "complies with the CRA"
- Generic cybersecurity explainers with no connected-product implementation value
- Generic legal summaries of a regulation without implementation guidance
- Product catalogues, vendor rankings, or endorsements
- Reproductions of paywalled standards beyond what is needed to explain and cite them
- Post-quantum migration programmes (the PQC Handbook's job) or supplier assurance workflows (the Supply Chain Security Handbook's job)
- Unsourced survey figures or invented deadlines

Do not cite `.ai-helper-files/` (local drafting aids only), and cite official publications rather than the reference copies in `source-material/`.
