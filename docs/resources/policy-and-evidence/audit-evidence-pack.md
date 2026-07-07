---
title: "Secure-by-Design Evidence Pack"
sidebar_label: "Evidence Pack"
sidebar_position: 1
tags: [templates, audit, compliance, cra, technical-documentation, evidence]
---
# Secure-by-Design Evidence Pack

A **secure-by-design evidence pack** is a structured collection of documents, records, and technical artefacts that helps show how a connected product was designed, built, assessed, released, supported, and maintained.

For the **Cyber-Resilience Act (CRA)**, this evidence supports the **technical documentation** manufacturers must keep and provide to market surveillance authorities when required ([CRA Art. 31][cra_art31]). It can also support customer assurance, internal governance, product-security reviews, conformity assessment, and post-market vulnerability handling.

An evidence pack is not just a folder of documents. It should make the following visible:

- what product, version, release, or support period the evidence applies to;
- which security and regulatory expectations the evidence supports;
- who owns each record;
- when the evidence was created or last reviewed;
- what gaps, exceptions, or assumptions remain;
- how the evidence will be refreshed after updates, vulnerabilities, incidents, or product changes.

:::warning Evidence quality
An evidence pack does not make weak evidence strong. It makes evidence, assumptions, gaps, exceptions, and decisions visible. Unsupported claims should remain visible as gaps, not be repackaged as assurance.
:::

> **Goal:** Be able to explain, at any time, what security work was done, what evidence supports it, what remains unresolved, and who owns the next action.

## When to Use This Template

Use this template when you need to:

- prepare CRA technical documentation;
- support a conformity assessment or self-assessment;
- answer a customer security or compliance request;
- prepare for internal audit or product-security review;
- review readiness before release;
- retain evidence after a vulnerability, update, incident, or product change.

The pack should be maintained throughout the product lifecycle. It is not a one-time compliance exercise.

## Before You Start

Define the scope of the evidence pack before collecting documents.

| Question | What to record |
|----------|----------------|
| Decision or use case | Release readiness, CRA technical documentation, conformity assessment, customer assurance, vulnerability response, product-security review, or post-market support. |
| Product scope | Product name, model, variant, product family, or service component. |
| Version or release scope | Firmware version, software release, hardware revision, configuration, or deployment cohort. |
| Requirement context | CRA, RED, MDR, IVDR, FDA guidance, IEC 62443, ETSI EN 303 645, customer requirement, certification scheme, or internal policy. |
| Support period | Declared support period and security update commitment. |
| Evidence owner | Person or team responsible for maintaining the pack. |
| Review cadence | When the pack is reviewed: release, major change, vulnerability, incident, audit, renewal, or scheduled review. |
| Known exclusions | Features, variants, services, third-party components, or regions not covered by this pack. |

## Evidence Quality Principles

Before relying on evidence, check that it is:

- **Scoped:** tied to the product, version, configuration, release, or support period being assessed.
- **Owned:** maintained by a named person, role, or team.
- **Current:** fresh enough for the decision being made.
- **Verifiable:** backed by a source, method, test, record, or review path.
- **Decision-linked:** connected to release, conformity, remediation, customer assurance, or support decisions.
- **Exception-aware:** clear about gaps, accepted risks, assumptions, and follow-up actions.
- **Retained:** stored somewhere it can be found and explained later.

For a broader evidence-review model, see the Supply Chain Security Handbook's [Evidence Checklist](https://supplychainsecurityhandbook.com/resources/evidence-checklist/).

## Evidence Pack Structure

A useful evidence pack should be organised around how the product is governed, designed, verified, released, and operated.

### 1. Governance and Risk Management

This section explains how security is owned, assessed, and governed.

Include:

- cybersecurity risk assessment;
- threat model or risk analysis;
- secure development lifecycle policy;
- product-security ownership model;
- vulnerability handling process;
- coordinated vulnerability disclosure policy;
- patch and security update policy;
- support-period statement;
- conformity route or assessment rationale;
- risk acceptance or exception records.

Useful handbook pages:

- [CRA Gap Analysis](../checklists-and-worksheets/cra-gap-analysis.md)
- [Secure-by-Design Maturity Model](../checklists-and-worksheets/maturity-model.md)
- [Threat Modeling](../../implementation/build-phase/threat-modeling.md)
- [Vulnerability Disclosure](../../implementation/operate-phase/vulnerability-disclosure.md)
- [Patch Cadence & Rollback Strategy](../../implementation/operate-phase/patch-cadence.md)

### 2. Product Architecture and Technical Documentation

This section explains what the product is, how it is built, and how security-relevant parts fit together.

Include:

- product description and intended use;
- architecture diagram and data-flow diagram;
- trust boundaries and security assumptions;
- hardware and software component list;
- embedded-device classification;
- secure boot and update architecture;
- identity, credential, and key-management design;
- communication security design;
- secure configuration baseline;
- user documentation and secure-use guidance;
- declared support period and update mechanism;
- SBOM or other component transparency records.

Useful handbook pages:

- [Types of Embedded Device](../reference/types-of-embedded-device.md)
- [Secure Boot](../../implementation/build-phase/secure-boot.md)
- [Unique Device Identity](../../implementation/build-phase/unique-device-identity.md)
- [Key Provisioning & Storage](../../implementation/build-phase/key-provisioning.md)
- [Secure Configuration & Hardening](../../implementation/build-phase/secure-configuration.md)
- [SBOM & VEX Workflows](../../implementation/build-phase/sbom-vex.md)
- [User Documentation](../../implementation/build-phase/user-documentation.md)

### 3. Security Verification and Validation

This section shows how the product's security controls were checked.

Include:

- security test plan;
- secure boot verification evidence;
- update and rollback test results;
- vulnerability scan results;
- SAST, SCA, DAST, secrets scanning, or firmware analysis outputs;
- penetration test or independent assessment reports;
- SBOM generation evidence;
- vulnerability triage and remediation evidence;
- secure configuration review;
- release approval records;
- known open findings and remediation plans;
- conformity assessment documentation where applicable.

Useful handbook pages:

- [CI/CD Pipeline Hardening](../../implementation/operate-phase/cicd-hardening.md)
- [OTA Updates & Patching](../../implementation/build-phase/ota-updates.md)
- [SBOM & VEX Workflows](../../implementation/build-phase/sbom-vex.md)
- [Static & Dynamic Analysis](../../tools/static-and-dynamic-analysis.md)
- [Firmware & Binary Analysis](../../tools/firmware-and-binary-analysis.md)
- [Security Logging](../../implementation/operate-phase/security-logging.md)

### 4. Release and Conformity Records

This section captures the evidence needed to explain what was placed on the market and why it was considered ready.

Include:

- release checklist;
- release approval record;
- product version and configuration baseline;
- final SBOM for the release;
- known vulnerability status at release;
- unresolved risk acceptances;
- technical documentation index;
- EU Declaration of Conformity where applicable;
- Notified Body certificate or assessment report where applicable;
- user instructions and safety/security notices issued with the product.

The aim is to show not only that documents exist, but that they apply to the exact product version or release being placed on the market.

### 5. Post-Market and Operational Records

This section keeps the evidence pack useful after release.

Include:

- vulnerability log;
- security advisory records;
- customer notifications;
- patch and update log;
- deployment or update success records where available;
- incident response records;
- ENISA or authority reporting records where applicable ([CRA Art. 14][cra_art14]);
- end-of-support or end-of-life notices;
- superseded versions and known affected-version records;
- evidence refresh history.

Useful handbook pages:

- [Vulnerability Disclosure](../../implementation/operate-phase/vulnerability-disclosure.md)
- [Patch Cadence & Rollback Strategy](../../implementation/operate-phase/patch-cadence.md)
- [Security Logging](../../implementation/operate-phase/security-logging.md)

## Evidence Register Template

Use an evidence register to track what evidence exists, where it is stored, and whether it is current enough to rely on.

| Evidence item | Product or release scope | Requirement or decision supported | Owner | Location | Created or reviewed | Status | Gaps or next action |
|---------------|--------------------------|-----------------------------------|-------|----------|---------------------|--------|---------------------|
| Cybersecurity risk assessment | | | | | | | |
| Threat model | | | | | | | |
| Secure development lifecycle policy | | | | | | | |
| CVD policy | | | | | | | |
| Patch policy | | | | | | | |
| Architecture diagram | | | | | | | |
| Secure boot design | | | | | | | |
| Key-management design | | | | | | | |
| SBOM | | | | | | | |
| Security test results | | | | | | | |
| Release approval | | | | | | | |
| Technical documentation index | | | | | | | |
| Vulnerability status | | | | | | | |
| Update log | | | | | | | |
| Customer notification records | | | | | | | |

## Common Gaps

Common evidence-pack gaps include:

- risk assessment exists but is not tied to the released product version;
- threat model is outdated or does not include cloud, mobile, or update infrastructure;
- SBOM exists but is not generated for every release;
- vulnerability status is not tied to product versions;
- patch policy exists but has no operational records;
- secure boot is described but not verified on the production configuration;
- hardware security claims are copied from a supplier without product-level validation;
- user documentation omits support period, update behaviour, or vulnerability reporting instructions;
- evidence is stored in multiple places with no owner or index.

## Lifecycle Review Triggers

Review the pack whenever the evidence may no longer support the decision being made.

| Lifecycle moment | What to review |
|------------------|----------------|
| New product planning | Scope, risk assessment, device classification, threat model, security requirements. |
| Architecture and design | Secure boot, identity, key management, update architecture, data protection, attack surface. |
| Build and test | SBOM, scans, test reports, security findings, vulnerability triage, release readiness. |
| Release | Technical documentation, user instructions, vulnerability status, release approval, declaration records. |
| Post-market support | Vulnerability log, patch log, customer notifications, incident records, evidence refresh. |
| Major update or hardware change | Risk assessment, threat model, SBOM, secure update evidence, user documentation, support impact. |
| End of support | Customer notice, final vulnerability status, retained records, update availability, lifecycle decision. |

## Related Pages

- [CRA Overview](../../standards/eu/cra/index.md)
- [CRA Gap Analysis](../checklists-and-worksheets/cra-gap-analysis.md)
- [Secure-by-Design Maturity Model](../checklists-and-worksheets/maturity-model.md)
- [Policy Templates](./policy-templates.md)
- [Threat Modeling](../../implementation/build-phase/threat-modeling.md)
- [SBOM & VEX Workflows](../../implementation/build-phase/sbom-vex.md)
- [Vulnerability Disclosure](../../implementation/operate-phase/vulnerability-disclosure.md)
- [Patch Cadence & Rollback Strategy](../../implementation/operate-phase/patch-cadence.md)
- [Security Logging](../../implementation/operate-phase/security-logging.md)

<!-- Citations -->
[cra_art14]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_14 "CRA Article 14 – Reporting obligations of manufacturers"
[cra_art31]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_31 "CRA Article 31 – Technical documentation"
