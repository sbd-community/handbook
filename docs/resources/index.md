---
title: Resources
sidebar_label: Overview
sidebar_position: 1
description: "Practical secure-by-design resources for CRA readiness, evidence packs, threat-model examples, hardware choices, cryptography guidance, and real-world vulnerability lessons."
---

# Resources

Resources are the practical support layer for product teams turning secure-by-design guidance into readiness checks, evidence packs, reusable examples, hardware choices, and lessons from real vulnerabilities.

Use this section when you need to assess CRA readiness, assemble evidence, reuse example documents, choose secure hardware, understand cryptography expectations, or learn from real product failures.

For legal and regulatory context, use **[Standards](../standards/index.md)**. For engineering guidance, use **[Implementation](../implementation/index.md)**. For product and tooling categories, use **[Tools](../tools/index.md)**.

If you are not sure where to begin, choose the task closest to the decision you are trying to make.

## Choose Your Task

| If you need to... | Start with | Also useful |
|-------------------|------------|-------------|
| Assess CRA readiness | [CRA Gap Analysis](./checklists-and-worksheets/cra-gap-analysis.md) | [Maturity Model](./checklists-and-worksheets/maturity-model.md) |
| Assemble evidence | [Audit Evidence Pack](./policy-and-evidence/audit-evidence-pack.md) | [Policy Templates](./policy-and-evidence/policy-templates.md) |
| Reuse example threat models | [Low-Stakes BLE Sensor](./example-documents/threat-model-low-stakes-ble-sensor.md) | [Continuous Glucose Monitor](./example-documents/threat-model-cgm.md), [Smart Thermostat](./example-documents/threat-model-smart-thermostat.md) |
| Select secure hardware | [Types of Embedded Device](./reference/types-of-embedded-device.md) | [STM32 Selection](./hardware/stm32.md), [ESP32 Selection](./hardware/espressif.md) |
| Understand cryptography under the CRA | [Cryptography under the CRA](./cryptography/cryptography-under-cra.md) | [Key Provisioning & Storage](../implementation/build-phase/key-provisioning.md), [Secure Boot](../implementation/build-phase/secure-boot.md) |
| Learn from real vulnerabilities | [Contec Patient Monitor](./real-world-vulnerabilities/contec-patient-monitor-backdoor.md) | [Baxter LIFE2000](./real-world-vulnerabilities/baxter-life2000-ventilator-tampering.md), [Baxter Connex shared key](./real-world-vulnerabilities/baxter-connex-spot-monitor-shared-key.md) |
| Understand key concepts | [Glossary](./reference/glossary.md) | [Types of Embedded Device](./reference/types-of-embedded-device.md) |

## What Each Resource Group Is For

### Assess Readiness

Use the **[CRA Gap Analysis](./checklists-and-worksheets/cra-gap-analysis.md)** to identify gaps between current practice and CRA expectations. Use the **[Secure-by-Design Maturity Model](./checklists-and-worksheets/maturity-model.md)** to judge how repeatable your product-security practices are.

### Assemble Evidence

Use the **[Audit Evidence Pack](./policy-and-evidence/audit-evidence-pack.md)** to organise technical documentation, test evidence, vulnerability records, and post-market records. Use **[Policy Templates](./policy-and-evidence/policy-templates.md)** as starter material for public and internal policies.

### Reuse Examples

Use the example threat models when you need a concrete starting point rather than a blank page:

- **[Low-Stakes BLE Sensor](./example-documents/threat-model-low-stakes-ble-sensor.md)** for proportionality in simple products.
- **[Continuous Glucose Monitor](./example-documents/threat-model-cgm.md)** for a safety-relevant connected medical example.
- **[Smart Thermostat](./example-documents/threat-model-smart-thermostat.md)** for a common connected consumer product.

### Choose Secure Hardware

Use **[Types of Embedded Device](./reference/types-of-embedded-device.md)** to understand how MCU, MPU, SoC, and hybrid architectures affect security choices. Use the **[STM32](./hardware/stm32.md)** and **[ESP32](./hardware/espressif.md)** guides as hardware-selection examples, not as proof that a part or module makes a product compliant by itself.

### Understand Cryptography Expectations

Use **[Cryptography under the CRA](./cryptography/cryptography-under-cra.md)** when cryptography affects product architecture, update mechanisms, key management, communication security, or technical documentation.

Cryptography guidance can date quickly. Check source dates, draft status, and the exact standard or regulation being referenced before relying on it for a product decision.

### Learn From Real Failures

Use the real-world vulnerability case studies to see how design failures appear in deployed products. Start with **[Baxter LIFE2000](./real-world-vulnerabilities/baxter-life2000-ventilator-tampering.md)**, **[Contec Patient Monitor](./real-world-vulnerabilities/contec-patient-monitor-backdoor.md)**, or **[Baxter Connex shared key](./real-world-vulnerabilities/baxter-connex-spot-monitor-shared-key.md)**.

### Reference and Background

Use **[Glossary](./reference/glossary.md)** for shared terminology and **[Types of Embedded Device](./reference/types-of-embedded-device.md)** for architectural context.

## How This Fits the Handbook

- **Standards** explain the requirements and regulatory context.
- **Implementation** explains how to build and operate secure controls.
- **Tools** lists product and tooling categories that may help.
- **Resources** provides checklists, templates, examples, case studies, hardware-selection guidance, and reference material.
