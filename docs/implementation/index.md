---
title: Overview
sidebar_position: 1
---

# Implementation Guides

Use the implementation guides when you need to turn secure-by-design decisions into product controls, release workflows, and post-market operating processes.

The guides are organised around two parts of the product lifecycle:

- **[Build Phase](./build-phase/index.md)**: Engineering controls designed into the product, firmware, software, update path, identity model, configuration, and release artifacts.
- **[Operate Phase](./operate-phase/index.md)**: Processes used after release, including vulnerability intake, patch cadence, logging, monitoring, CI/CD hardening, and support-period evidence.

## Choose By Task

| If you need to... | Start with | Then use |
|-------------------|------------|----------|
| Identify product security risks | [Threat Modeling](./build-phase/threat-modeling.md) | [Types of Embedded Device](../resources/reference/types-of-embedded-device.md), [CRA Readiness Gap Analysis](../resources/checklists-and-worksheets/cra-gap-analysis.md) |
| Protect firmware integrity | [Secure Boot](./build-phase/secure-boot.md) | [Key Provisioning & Storage](./build-phase/key-provisioning.md), [ETSI EN 304 623](../standards/eu/cra/en-304-623-boot-managers.md) |
| Design device identity and credentials | [Unique Device Identity](./build-phase/unique-device-identity.md) | [Key Provisioning & Storage](./build-phase/key-provisioning.md), [Cryptography under the CRA](../resources/cryptography/cryptography-under-cra.md) |
| Deliver security fixes | [Secure OTA Updates](./build-phase/ota-updates.md) | [Patch Cadence & Rollback Strategy](./operate-phase/patch-cadence.md), [Vulnerability Disclosure](./operate-phase/vulnerability-disclosure.md) |
| Manage component and vulnerability evidence | [SBOM & VEX Workflows](./build-phase/sbom-vex.md) | [Secure-by-Design Evidence Pack](../resources/policy-and-evidence/audit-evidence-pack.md) |
| Handle vulnerability reports | [Vulnerability Disclosure](./operate-phase/vulnerability-disclosure.md) | [Patch Cadence & Rollback Strategy](./operate-phase/patch-cadence.md), [Security Logging & Monitoring](./operate-phase/security-logging.md) |
| Retain implementation evidence | [Secure-by-Design Evidence Pack](../resources/policy-and-evidence/audit-evidence-pack.md) | [CRA Readiness Gap Analysis](../resources/checklists-and-worksheets/cra-gap-analysis.md) |

## How To Use These Guides

Start with the product risk and architecture, then choose controls. Most teams should move in this order:

1. Model the product boundary and threats.
2. Decide which device, identity, key, boot, update, configuration, and data controls are needed.
3. Connect those controls to release workflows such as SBOM/VEX, signing, testing, and approval.
4. Define post-market workflows for vulnerability disclosure, patch cadence, logging, monitoring, and evidence refresh.

For a broader route through the site, use **[How to Use This Handbook](../quick-start/how-to-use-handbook.md)**.