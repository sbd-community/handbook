---
title: "ETSI EN 304 623: Boot Managers"
sidebar_position: 2
tags: [cra, etsi, boot-managers, secure-boot, harmonised-standards]
---

# ETSI EN 304 623: Boot Managers

## Why this matters now

**ETSI EN 304 623** is the emerging CRA vertical standard for boot managers. It matters because boot managers establish the first software-controlled link in a product's chain of trust. They run before the operating system, before most security agents, and before application-level controls can defend the system.

For product teams, the draft is a strong signal: CRA evidence for secure boot is likely to include more than "we verify firmware signatures." It may require proof of updateability, recovery, anti-rollback protection, trust-anchor management, debug lockdown, measured boot, logging, and assessor-facing test evidence.

Use this page when you need to understand how the draft boot-manager standard affects secure boot, update, key-provisioning, logging, vulnerability-handling, and evidence planning. If you need implementation guidance, start with **[Secure Boot](../../../implementation/build-phase/secure-boot.md)** and **[Secure OTA Updates](../../../implementation/build-phase/ota-updates.md)**.

## Official texts and status

:::warning Draft status
ETSI EN 304 623 is still under development. It does not provide presumption of conformity until finalised and cited in the Official Journal of the EU. Use it as a design and evidence-planning input, not as a final compliance claim.
:::

| Source | What it is |
|--------|------------|
| [ETSI EN 304 623 v0.1.3 draft][etsi_en_304_623] | Public draft of the boot-manager standard |
| [ETSI work item report][etsi_work_item] | Work item status for `DEN/CYBER-EUS-008` / `EN 304 623` |
| [CRA Annex III][cra_annexIII] | Lists boot managers as Important Products — Class I |
| [CRA Article 27][cra_art27] | Explains presumption of conformity through harmonised standards |

The ETSI draft states that it is intended to define technical cybersecurity requirements and assessment criteria for boot managers as products with digital elements under the CRA.

## Timeline

| Date | Event |
|------|-------|
| **2025-03-04** | ETSI work item created for EN 304 623. |
| **2026-06-16 / 2026-06-17** | Version `0.1.3` draft and deliverable approval activity appear in the ETSI work item record. |
| **2026-09-11** | CRA vulnerability and incident reporting obligations begin for manufacturers. |
| **2027-12-11** | Full CRA application date for product requirements, conformity assessment, and CE marking. |

## Scope: which boot managers are covered?

The draft focuses on boot managers in the CRA Annex III Class I category. It describes boot managers as software or firmware that manage initial system startup after power-on or restart by initialising hardware, loading or transferring control to the operating system environment or system resources, and selecting boot options. Examples include UEFI firmware, single-stage bootloaders, and multi-stage bootloaders.

The draft is especially relevant where the boot manager is:

- distinctly identifiable as a product or product component,
- independently updateable,
- responsible for verified or measured boot,
- responsible for boot configuration or trust-anchor management,
- involved in recovery or update flows, or
- providing runtime services that affect boot security after handoff.

## Does this apply to my product?

Not every connected product that contains a bootloader is itself a CRA "boot manager" product. The CRA classification depends on the product's **core functionality**, not every embedded component.

Examples:

- A commercial UEFI implementation, bootloader package, or updateable boot manager sold as a product may fall directly into the boot-manager category.
- A smart camera, toy, appliance, sensor, or industrial device is not automatically a boot-manager product merely because it contains boot firmware.
- Even when the final product is not classified as a boot manager, its boot chain may still need evidence aligned with EN 304 623 to support the product's CRA technical file.

The practical rule: use EN 304 623 directly when boot management is the product category; use it as evidence guidance when boot management is a security-critical subsystem inside another product.

## Requirements and how to implement them

The draft uses three use cases and security profiles.

| Use case | Profile | Characterised by |
|----------|---------|------------------|
| `UC-IMM` | Low | Immutable boot manager code and trust anchors |
| `UC-VER` | Medium | Verified boot, update capability, logging, and key provisioning |
| `UC-HW` | High | `UC-VER` plus hardware-assisted security |

The following themes are the most useful way to read the draft.

| Theme | What to design for | Handbook guide |
|-------|--------------------|----------------|
| Use-case/profile declaration | Declare whether the boot manager is immutable, verified and updateable, or hardware-assisted. | [Threat Modeling](../../../implementation/build-phase/threat-modeling.md) |
| Verified boot and updateability | Verify boot components before execution and maintain a secure update path for remediation. | [Secure Boot](../../../implementation/build-phase/secure-boot.md) |
| Atomic updates and recovery | Prevent interrupted updates from leaving the device bricked or in an insecure fallback state. | [Secure OTA Updates](../../../implementation/build-phase/ota-updates.md) |
| Anti-rollback protection | Prevent downgrade to vulnerable boot firmware, configuration, or trust data. | [Secure OTA Updates](../../../implementation/build-phase/ota-updates.md) |
| Trust anchors, keys, and certificates | Protect trust anchors and authorise key or certificate updates. | [Key Provisioning & Storage](../../../implementation/build-phase/key-provisioning.md) |
| Debug, test, and diagnostic lockdown | Disable, fuse off, or strongly authenticate production debug access. | [Secure Configuration & Hardening](../../../implementation/build-phase/secure-configuration.md) |
| DMA and peripheral attack-surface reduction | Reduce pre-boot attack surfaces before handing control to the boot target. | [Secure Configuration & Hardening](../../../implementation/build-phase/secure-configuration.md) |
| Measured boot, logging, and attestation | Protect measurements and logs so they can support evidence and incident analysis. | [Security Logging & Monitoring](../../../implementation/operate-phase/security-logging.md) |
| State-of-the-art cryptography | Use recognised cryptographic mechanisms and preserve cryptographic agility. | [Cryptography under CRA](../../../resources/cryptography/cryptography-under-cra.md) |
| Vulnerability handling and support-period evidence | Show how boot-manager vulnerabilities are found, triaged, remediated, and communicated during the support period. | [Vulnerability Disclosure](../../../implementation/operate-phase/vulnerability-disclosure.md) |

## Assessment and evidence

The draft includes assessment criteria, not just requirements. That makes it useful for planning technical-file evidence even before the final standard is cited.

[Useful evidence](https://supplychainsecurityhandbook.com/standards-threats/standards-regulations/eu-cyber-resilience-act/etsi-en-304-623-boot-managers/) includes:

- boot architecture diagrams and trust-boundary descriptions,
- use-case/profile declaration and rationale,
- threat model covering pre-boot threats,
- secure boot verification test results,
- measured boot and attestation records, where implemented,
- anti-rollback tests and protected counter design,
- update atomicity and recovery test evidence,
- key and certificate provisioning records,
- debug-lockdown and manufacturing-mode records,
- cryptographic mechanism rationale,
- SBOM entries for boot-manager components,
- support-period and vulnerability-handling records,
- assessor-facing test procedures and results.

## Relationship to Secure Boot guide

The **[Secure Boot Implementation](../../../implementation/build-phase/secure-boot.md)** guide explains the engineering pattern: roots of trust, chain of trust, code signing, verified boot, measured boot, and failure handling.

This page explains the CRA standards context: why boot managers are a Class I category, how EN 304 623 structures its draft requirements, and what evidence teams should start preparing.

Use both together:

- Read this page to understand the emerging CRA conformity expectations.
- Use the Secure Boot guide to design and implement the controls.
- Use the Secure-by-Design Evidence Pack to collect the proof.

## Related Pages

If you need to:

- check the source material, use the **[ETSI EN 304 623 v0.1.3 draft][etsi_en_304_623]** and **[ETSI work item report][etsi_work_item]**;
- understand the CRA context for boot managers and harmonised standards, use the **[CRA Overview](./index.md)** and **[CRA Harmonised Standards](./harmonised-standards.md)**;
- design the boot chain and failure behaviour, use **[Secure Boot](../../../implementation/build-phase/secure-boot.md)**;
- plan update recovery, anti-rollback, and rollout evidence, use **[Secure OTA Updates](../../../implementation/build-phase/ota-updates.md)**;
- protect trust anchors, keys, and certificates, use **[Key Provisioning & Storage](../../../implementation/build-phase/key-provisioning.md)** and **[Cryptography under the CRA](../../../resources/cryptography/cryptography-under-cra.md)**;
- connect boot-manager vulnerabilities to remediation and support-period records, use **[Vulnerability Disclosure](../../../implementation/operate-phase/vulnerability-disclosure.md)** and **[SBOM & VEX Workflows](../../../implementation/build-phase/sbom-vex.md)**;
- retain assessor-facing records, use the **[Secure-by-Design Evidence Pack](../../../resources/policy-and-evidence/audit-evidence-pack.md)**.

<!-- Citations -->
[etsi_en_304_623]: https://www.etsi.org/deliver/etsi_en/304600_304699/304623/00.01.03_20/en_304623v000103ev.pdf "ETSI EN 304 623 v0.1.3 draft – Cybersecurity requirements for boot managers"
[etsi_work_item]: https://portal.etsi.org/webapp/WorkProgram/Report_WorkItem.asp?SearchPage=TRUE&WKI_ID=74414&butExpertSearch=Search&curItemNr=10&includeNonActiveTB=FALSE&includeSubProjectCode=FALSE&optDisplay=10&qCLUSTER_BOOLEAN=OR&qEND_CURRENT_STATUS_CODE=9+AB%3BN24&qETSI_ALL= "ETSI work item report for EN 304 623"
[cra_art27]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02024R2847-20241120#art_27 "CRA Article 27 - Presumption of conformity"
[cra_annexIII]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_III "CRA Annex III – Important products with digital elements"
