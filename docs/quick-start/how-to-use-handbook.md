---
title: "How to Use This Handbook"
sidebar_label: "How to Use Handbook"
sidebar_position: 2
tags: [quick-start, navigation, getting-started]
---

# How to Use This Handbook

The Secure-by-Design Handbook helps teams building connected products turn cybersecurity obligations into engineering, operating, and evidence tasks.

Use this page when you know your role or immediate problem, but not which handbook path to follow.

If you are new to the topic, start with **[What is Secure-by-Design?](./what-is-secure-by-design.md)**. If you need a short action plan, use the **[First-Sprint Checklist](./first-sprint-checklist.md)**.

## Choose By Task

| If you need to... | Start here | Then use |
|-------------------|------------|----------|
| Understand obligations | [CRA 5-Minute Primer](./cra-primer.md) | [CRA Overview](../standards/eu/cra/index.md), [CRA Readiness Gap Analysis](../resources/checklists-and-worksheets/cra-gap-analysis.md) |
| Assess product readiness | [CRA Readiness Gap Analysis](../resources/checklists-and-worksheets/cra-gap-analysis.md) | [Secure-by-Design Evidence Pack](../resources/policy-and-evidence/audit-evidence-pack.md), [Maturity Model](../resources/checklists-and-worksheets/maturity-model.md) |
| Plan the first sprint | [First-Sprint Checklist](./first-sprint-checklist.md) | [Threat Modeling](../implementation/build-phase/threat-modeling.md), [Types of Embedded Device](../resources/reference/types-of-embedded-device.md) |
| Design core product controls | [Threat Modeling](../implementation/build-phase/threat-modeling.md) | [Secure Boot](../implementation/build-phase/secure-boot.md), [Secure OTA Updates](../implementation/build-phase/ota-updates.md), [Key Provisioning & Storage](../implementation/build-phase/key-provisioning.md), [Unique Device Identity](../implementation/build-phase/unique-device-identity.md) |
| Handle vulnerabilities | [Vulnerability Disclosure](../implementation/operate-phase/vulnerability-disclosure.md) | [Patch Cadence](../implementation/operate-phase/patch-cadence.md), [SBOM & VEX Workflows](../implementation/build-phase/sbom-vex.md), [Policy Starter Kit](../resources/policy-and-evidence/policy-templates.md) |
| Assemble evidence | [Secure-by-Design Evidence Pack](../resources/policy-and-evidence/audit-evidence-pack.md) | [CRA Gap Analysis](../resources/checklists-and-worksheets/cra-gap-analysis.md), [Resources](../resources/index.md) |
| Choose hardware or architecture | [Types of Embedded Device](../resources/reference/types-of-embedded-device.md) | [STM32 Hardware Selection](../resources/hardware/stm32.md), [ESP32 Hardware Selection](../resources/hardware/espressif.md) |
| Compare tools | [Tools](../tools/index.md) | Use tools only after the workflow or control is clear. |

## Choose By Role

Different readers usually need different routes through the same material.

### Product Manager Or Team Lead

Your job is to make the work visible, owned, and planned.

Start with:

1. **[What is Secure-by-Design?](./what-is-secure-by-design.md)**
2. **[CRA 5-Minute Primer](./cra-primer.md)**
3. **[First-Sprint Checklist](./first-sprint-checklist.md)**
4. **[CRA Readiness Gap Analysis](../resources/checklists-and-worksheets/cra-gap-analysis.md)**

Expected output: owners, first-sprint backlog, readiness gaps, and evidence owners.

### Firmware Or Embedded Engineer

Your job is to design controls that fit the product architecture.

Start with:

1. **[Types of Embedded Device](../resources/reference/types-of-embedded-device.md)**
2. **[Threat Modeling](../implementation/build-phase/threat-modeling.md)**
3. **[Secure Boot](../implementation/build-phase/secure-boot.md)**
4. **[Key Provisioning & Storage](../implementation/build-phase/key-provisioning.md)**
5. **[Unique Device Identity](../implementation/build-phase/unique-device-identity.md)**
6. **[Secure OTA Updates](../implementation/build-phase/ota-updates.md)**

Expected output: architecture decisions, control design, implementation backlog, and test evidence.

### Cloud, DevOps, Or Security Engineer

Your job is to connect product security to pipelines, services, monitoring, updates, and vulnerability handling.

Start with:

1. **[CI/CD Pipeline Hardening](../implementation/operate-phase/cicd-hardening.md)**
2. **[SBOM & VEX Workflows](../implementation/build-phase/sbom-vex.md)**
3. **[Secure OTA Updates](../implementation/build-phase/ota-updates.md)**
4. **[Vulnerability Disclosure](../implementation/operate-phase/vulnerability-disclosure.md)**
5. **[Security Logging & Monitoring](../implementation/operate-phase/security-logging.md)**

Expected output: pipeline controls, dependency records, vulnerability workflow, update records, and monitoring evidence.

### Compliance Lead Or Auditor

Your job is to understand obligations and check whether product evidence supports the claims.

Start with:

1. **[CRA Overview](../standards/eu/cra/index.md)**
2. **[CRA Readiness Gap Analysis](../resources/checklists-and-worksheets/cra-gap-analysis.md)**
3. **[Secure-by-Design Evidence Pack](../resources/policy-and-evidence/audit-evidence-pack.md)**
4. **[Policy Starter Kit](../resources/policy-and-evidence/policy-templates.md)**
5. **[Resources](../resources/index.md)**

Expected output: scope notes, gap register, evidence register, policy set, and open issues.

### Hardware Selector Or Architect

Your job is to choose hardware that can support the intended security case.

Start with:

1. **[Types of Embedded Device](../resources/reference/types-of-embedded-device.md)**
2. **[STM32 Hardware Selection](../resources/hardware/stm32.md)** or **[ESP32 Hardware Selection](../resources/hardware/espressif.md)**
3. **[Secure Boot](../implementation/build-phase/secure-boot.md)**
4. **[Key Provisioning & Storage](../implementation/build-phase/key-provisioning.md)**
5. **[Cryptography under the CRA](../resources/cryptography/cryptography-under-cra.md)**

Expected output: hardware rationale, security feature mapping, supplier evidence, and lifecycle assumptions.

## How The Sections Fit Together

| Section | Use it for |
|---------|------------|
| Quick Start | Orientation, first actions, and role-based routing. |
| Standards & Regulations | Legal and standards context, including CRA, RED, NIS 2, PSTI, IEC 62443, FDA, and harmonised standards. |
| Implementation Guides | Engineering and operating guides for controls such as secure boot, OTA, identity, provisioning, SBOM/VEX, logging, CVD, and patch cadence. |
| Resources | Checklists, evidence guidance, policy templates, hardware-selection guides, cryptography guidance, examples, and vulnerability case studies. |
| Tools | Product and open-source tools that may support workflows after the requirements are clear. |

## Working Pattern

For most teams, the handbook works best in this order:

1. Define the product boundary and architecture.
2. Run a gap analysis.
3. Pick the highest-risk controls to design or improve.
4. Capture evidence as you go.
5. Review policies, vulnerability handling, updates, and support-period commitments.
6. Use tools to support the workflow, not to replace the workflow.

## Contributing

This handbook is a living document. To suggest a correction or improvement, see the [Contributing Guide](https://github.com/sbd-community/handbook/blob/main/CONTRIBUTING.md) or open an issue on GitHub.
