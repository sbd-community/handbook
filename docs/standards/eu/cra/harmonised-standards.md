---
title: "CRA Harmonised Standards"
sidebar_position: 1
tags: [cra, harmonised-standards, compliance, eu]
---

# CRA Harmonised Standards

## Why this matters now

The Cyber-Resilience Act (CRA) sets legal obligations in broad, technology-neutral terms. Harmonised standards are the implementation layer that turns those obligations into more concrete, testable expectations for specific products, processes, and product categories.

For manufacturers, the important point is timing. Several CRA standards are now available as mature drafts, but a draft standard is not the same thing as a presumption-of-conformity route.

:::warning Draft standards
Draft CRA harmonised standards do not provide presumption of conformity until finalised and cited in the Official Journal of the EU. Use them as design and evidence-planning inputs, not as final compliance claims.
:::

## Official texts and status

The CRA allows products that conform to relevant harmonised standards cited in the Official Journal to be presumed compliant with the essential requirements covered by those standards ([CRA Art. 27][cra_art27]).

Until citation happens, draft standards are still useful because they show how regulators, standards bodies, test labs, and notified bodies are likely to think about evidence.

| Source | What it is | Status |
|--------|------------|--------|
| [CRA Article 27][cra_art27] | Legal basis for presumption of conformity | In force |
| [Standardisation request M/606][mandate_m606] | Commission request for CRA harmonised standards | Accepted by European standards organisations |
| [ETSI EN 304 623][etsi_en_304_623] | Draft vertical standard for boot managers | Draft / approval procedure |

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
[etsi_en_304_623]: https://www.etsi.org/deliver/etsi_en/304600_304699/304623/00.01.03_20/en_304623v000103ev.pdf "ETSI EN 304 623 v0.1.3 draft – Cybersecurity requirements for boot managers"
