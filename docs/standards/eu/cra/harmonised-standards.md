---
title: "CRA Harmonised Standards"
sidebar_position: 1
tags: [cra, harmonised-standards, compliance, eu]
---

# CRA Harmonised Standards

## Why this matters now

The Cyber-Resilience Act (CRA) sets legal obligations in broad, technology-neutral terms. Harmonised standards are the implementation layer that turns those obligations into more concrete, testable expectations for specific products, processes, and product categories.

For manufacturers, the important point is timing. The first two horizontal CRA standards, EN 40000-1-1 and EN 40000-1-2, were published in November 2026, and 17 ETSI product-category standards went to public enquiry in August 2026. Under the amended standardisation request, the horizontal standards on secure design and development and on vulnerability handling are due by 30 November 2026, the product-category standards by 31 January 2027, and the product-property standards by 30 October 2027, unless CEN, CENELEC or ETSI reject the amendment within a month of receiving it. But neither a published nor a draft standard is a presumption-of-conformity route until it is cited in the Official Journal.

:::warning Draft standards
Draft CRA harmonised standards do not provide presumption of conformity until finalised and cited in the Official Journal of the EU. Use them as design and evidence-planning inputs, not as final compliance claims.
:::

## Official texts and status

The CRA allows products that conform to relevant harmonised standards cited in the Official Journal to be presumed compliant with the essential requirements covered by those standards ([CRA Art. 27][cra_art27]).

Until citation happens, draft standards are still useful because they show how regulators, standards bodies, test labs, and notified bodies are likely to think about evidence.

| Source | What it is | Status |
|--------|------------|--------|
| [CRA Article 27][cra_art27] | Legal basis for presumption of conformity | In force |
| [Standardisation request M/606][mandate_m606] | Commission request for CRA harmonised standards | Accepted by European standards organisations; deadlines amended by [Commission Implementing Decision C(2026)7861][m606_amendment] of 10 November 2026, unless a European standardisation organisation rejects the amendment within a month |
| [EN 40000-1-1 and EN 40000-1-2][cen_en_40000] | Horizontal standards: vocabulary; principles, product risk management and lifecycle activities | Published November 2026 (announced by CEN-CENELEC on 19 November 2026); OJ citation not yet announced |
| FprEN 40000-1-3 | Horizontal standard: vulnerability handling | Approval stage; publication announced as coming soon; due by 30 November 2026 under amended M/606 |
| [17 ETSI vertical standards (EN 304 6xx)][etsi_17_verticals] | Product-category standards for Annex III Class I and Class II products | Public enquiry announced 13 August 2026; procedures ran until mid-September to mid-November 2026; due by 31 January 2027 under amended M/606 |
| [ETSI EN 304 623][etsi_en_304_623] | Draft vertical standard for boot managers | Final draft (v0.1.3), after public enquiry |

For summaries, see [First CRA Standards Published: EN 40000-1-1 and 1-2](/blog/2026/11/19/first-cra-standards-en-40000) and [ETSI Opens Enquiry on 17 CRA Product Standards](/blog/2026/08/13/etsi-cra-vertical-standards-enquiry).

## How to use this section

This section covers CRA harmonised standards that materially affect product design, security architecture, or technical-file evidence.

We do not intend to create a page for every draft automatically. A standard gets a page when it changes what product, firmware, security, or compliance teams need to build or prove.

## Current pages

| Standard | Product category | Why it matters | Page |
|----------|------------------|----------------|------|
| **ETSI EN 304 623** | Boot managers, CRA Annex III Class I | Secure boot, measured boot, anti-rollback, trust-anchor management, debug lockdown, recovery, and boot evidence | [ETSI EN 304 623: Boot Managers](./en-304-623-boot-managers.md) |

## Relationship to implementation guidance

These pages explain standards and conformity context. They should point into the implementation guides for practical engineering work:

- **[Secure Boot](../../../implementation/build-phase/secure-boot.md)** for trust-chain design.
- **[Secure OTA Updates](../../../implementation/build-phase/ota-updates.md)** for update integrity, rollback protection, and recovery.
- **[Key Provisioning & Storage](../../../implementation/build-phase/key-provisioning.md)** for trust anchors and signing-key handling.
- **[Secure-by-Design Evidence Pack](../../../resources/policy-and-evidence/audit-evidence-pack.md)** for technical-file evidence.

<!-- Citations -->
[cra_art27]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02024R2847-20241120#art_27 "CRA Article 27 - Presumption of conformity"
[mandate_m606]: https://ec.europa.eu/growth/tools-databases/enorm/mandate/606_en "Standardisation request M/606"
[m606_amendment]: https://ec.europa.eu/transparency/documents-register/api/files/C%282026%297861_0/de00000001090398 "Commission Implementing Decision C(2026)7861 amending standardisation request M/606"
[cen_en_40000]: https://www.cencenelec.eu/news-events/news/2026/en-in-the-spotlight/2026-11-19-cra-standards-en-40000-1-1-and-en-40000-1-2/ "CEN-CENELEC: first European standards supporting the CRA"
[etsi_17_verticals]: https://www.etsi.org/newsroom/press-releases/etsi-launches-approval-process-for-17-european-standards-supporting-the-cyber-resilience-act/ "ETSI: approval process for 17 European Standards supporting the CRA"
[etsi_en_304_623]: https://www.etsi.org/deliver/etsi_en/304600_304699/304623/00.01.03_20/en_304623v000103ev.pdf "ETSI EN 304 623 v0.1.3 draft – Cybersecurity requirements for boot managers"
