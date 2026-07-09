---
title: "Real-World Vulnerability Lessons"
sidebar_label: "Overview"
sidebar_position: 0
description: "A practical hub for secure-by-design case studies, routing real product vulnerabilities by failure pattern, control area, evidence lesson, and product-team check."
tags: [case-study, real-world-vulnerability, secure-by-design, evidence, product-security, cra]
---

# Real-World Vulnerability Lessons

Use these case studies to translate real product vulnerabilities into secure-by-design checks, evidence expectations, and implementation priorities.

The point is not to collect vulnerability news. The point is to recognise failure patterns that can appear in connected products: shared credentials, weak firmware integrity, exposed service interfaces, hidden functionality, unsafe update behaviour, insufficient logging, and unclear customer communication.

Use this hub when you want to choose a case by failure pattern, control area, or evidence lesson.

## Choose A Failure Pattern

| Failure pattern | Start with | What to look for |
|-----------------|------------|------------------|
| Shared or default cryptographic keys | **[Baxter Connex Spot Monitor shared key](./baxter-connex-spot-monitor-shared-key.md)** | Whether each device, deployment, or customer has unique credential material and auditable provisioning evidence. |
| Hidden functionality or undocumented data flows | **[Contec Patient Monitor backdoor](./contec-patient-monitor-backdoor.md)** | Whether update behaviour, data destinations, service functions, and remote paths are documented and reviewable. |
| Local access, kiosk escape, and service interfaces | **[GE Vivid Ultrasound local access](./ge-vivid-ultrasound-local-access.md)** | Whether physical access, service tooling, local apps, USB, and maintenance modes are in the threat model. |
| Service credential exposure in an ecosystem | **[GE Centricity Viewer credential flaw](./ge-centricity-viewer-credential-flaw.md)** | Whether service credentials, customer identity integration, rotation, and audit logging are controlled across the product ecosystem. |
| Layered firmware, debug, credential, and logging failures | **[Baxter Life2000 ventilator tampering](./baxter-life2000-ventilator-tampering.md)** | Whether debug lockdown, firmware integrity, authentication, logging, update, and recovery evidence work together. |

## Choose By Control Area

| Control area | Useful cases | Related handbook pages |
|--------------|--------------|------------------------|
| Threat modeling and product boundary | Contec, GE Vivid, GE Centricity, Baxter Life2000 | **[Threat Modeling](../../implementation/build-phase/threat-modeling.md)**, **[Types of Embedded Device](../reference/types-of-embedded-device.md)** |
| Device identity, credentials, and key management | Baxter Connex, GE Centricity, GE Vivid, Baxter Life2000 | **[Unique Device Identity](../../implementation/build-phase/unique-device-identity.md)**, **[Key Provisioning & Storage](../../implementation/build-phase/key-provisioning.md)** |
| Firmware integrity and update safety | Contec, Baxter Connex, Baxter Life2000 | **[Secure Boot](../../implementation/build-phase/secure-boot.md)**, **[Secure OTA Updates](../../implementation/build-phase/ota-updates.md)** |
| Secure configuration and local access | GE Vivid, GE Centricity, Baxter Life2000 | **[Secure Configuration & Hardening](../../implementation/build-phase/secure-configuration.md)** |
| Vulnerability handling and customer communication | Contec, Baxter Connex, GE Centricity, Baxter Life2000 | **[Vulnerability Disclosure](../../implementation/operate-phase/vulnerability-disclosure.md)**, **[Patch Cadence & Rollback Strategy](../../implementation/operate-phase/patch-cadence.md)** |
| Logging, audit, and incident evidence | GE Centricity, GE Vivid, Baxter Life2000 | **[Security Logging & Monitoring](../../implementation/operate-phase/security-logging.md)**, **[Secure-by-Design Evidence Pack](../policy-and-evidence/audit-evidence-pack.md)** |

## Evidence Lessons

Across the case studies, the evidence pattern is consistent. Product teams should be able to retain and explain:

- threat models covering realistic physical, local, service, network, cloud, and support scenarios;
- architecture and data-flow diagrams showing where sensitive data, commands, updates, and service paths go;
- credential and key-management records showing uniqueness, protection, rotation, revocation, and provisioning;
- secure boot, update verification, rollback, recovery, and production configuration evidence;
- secure configuration and debug-interface lockdown records;
- SBOM, vulnerability status, affected-version analysis, patch, advisory, and customer communication records;
- logging and audit evidence that supports triage, investigation, and support.

Use the **[Secure-by-Design Evidence Pack](../policy-and-evidence/audit-evidence-pack.md)** to retain these records and the **[CRA Readiness Gap Analysis](../checklists-and-worksheets/cra-gap-analysis.md)** to turn missing evidence into actions.

## Product-Team Check

After reading a case study, ask:

- Could the same failure pattern exist in our product, service, mobile app, update path, support workflow, or manufacturing flow?
- Would our threat model include this scenario?
- Which secure-by-design control would prevent, detect, or limit the issue?
- Could we identify affected products, versions, customers, and support status quickly?
- Would our evidence pack show the design decision, test result, exception, update, advisory, or customer communication?

## Related Pages

If you need to:

- assess product gaps, use the **[CRA Readiness Gap Analysis](../checklists-and-worksheets/cra-gap-analysis.md)**;
- retain evidence from case-study lessons, use the **[Secure-by-Design Evidence Pack](../policy-and-evidence/audit-evidence-pack.md)**;
- model similar risks in your own product, use **[Threat Modeling](../../implementation/build-phase/threat-modeling.md)**;
- improve post-market response, use **[Vulnerability Disclosure](../../implementation/operate-phase/vulnerability-disclosure.md)** and **[Patch Cadence & Rollback Strategy](../../implementation/operate-phase/patch-cadence.md)**.
