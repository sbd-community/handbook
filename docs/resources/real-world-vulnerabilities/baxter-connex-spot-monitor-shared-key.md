---
title: "Case Study: Baxter Connex Spot Monitor Shared Key"
sidebar_label: "Baxter Connex Shared Key"
description: "A secure-by-design case study showing how a default cryptographic key created a shared failure domain across connected patient monitors."
tags: [case-study, real-world-vulnerability, secure-by-design, cra, product-security, evidence, cryptography, keys, medical]
---
# Case Study: Baxter Connex Spot Monitor Shared Key (2024)

## Why This Case Matters

This case is a clean example of a shared failure domain. A shared or default cryptographic key is not device identity; it means compromise or discovery of one key can affect many devices, configurations, or update paths.

## What Happened

In May 2024, CISA published an advisory for the Baxter Welch Allyn Connex Spot Monitor. The advisory describes a use of default cryptographic key vulnerability, tracked as CVE-2024-1275, affecting versions 1.52 and prior.

CISA reported that the impacted product used a default cryptographic key for potentially critical functionality. An attacker could potentially modify device configurations and firmware data, with possible impact or delay in patient care. Baxter made an updated version available and recommended upgrading, applying network and physical security controls, and ensuring a unique encryption key is configured.

## What Failed

- A default key created a shared trust anchor across affected devices.
- Device configuration and firmware-related trust depended on key material that was not unique enough for the product risk.
- Key provisioning and configuration evidence was not sufficient to prevent or detect a shared-key condition before release.
- Customers needed mitigation guidance to configure unique keys and reduce exposure.

## Secure-by-Design Lessons

| Lesson | What product teams should do |
|--------|------------------------------|
| Device identity must be unique | Provision each device with unique identity material tied to the device, product, or deployment context. |
| Shared keys create shared failures | Avoid default or common cryptographic keys for critical functionality. |
| Provisioning must be auditable | Record how keys and certificates are generated, injected, protected, rotated, and verified. |
| Update authorization must be separate from device secrets | Firmware signing should rely on well-controlled manufacturer signing keys and robust device verification. |
| Customer configuration matters | If users must configure unique keys, document that clearly and retain evidence that the product can enforce or verify it. |

## Evidence That Should Exist

| Evidence | Why it matters |
|----------|----------------|
| Device identity design | Shows how devices are uniquely identified and authenticated. |
| Key-management design | Shows which keys exist, what they protect, where they are stored, and how they are rotated. |
| Manufacturing provisioning records | Shows unique identity material is generated and applied correctly. |
| Hardware key-protection evidence | Shows private or secret material is not extractable or hard-coded in firmware. |
| Update authorization design | Shows firmware and configuration changes are authenticated and integrity-checked. |
| Release verification evidence | Shows production firmware and configuration do not contain shared default keys for critical functions. |
| Customer mitigation records | Shows affected users were told how to update or configure unique keys. |

## What Product Teams Should Check

- Do any devices share the same cryptographic key, credential, certificate, or token?
- Are any default keys used for critical functions after manufacturing or first boot?
- Can the product detect, reject, or warn about default key material?
- Can manufacturing, service, or customer tooling prove that production devices are no longer using default key material?
- Are firmware updates signed with manufacturer-controlled signing keys and verified on the device?
- Are provisioning records tied to device serial numbers, hardware revisions, firmware versions, and release batches?
- Could we identify which devices are affected if key material or provisioning evidence is questioned?

## Related Handbook Pages

- [CRA Readiness Gap Analysis](../checklists-and-worksheets/cra-gap-analysis.md)
- [Secure-by-Design Evidence Pack](../policy-and-evidence/audit-evidence-pack.md)
- [Secure-by-Design Policy Starter Kit](../policy-and-evidence/policy-templates.md)
- [Secure-by-Design Maturity Model](../checklists-and-worksheets/maturity-model.md)
- [Unique Device Identity](../../implementation/build-phase/unique-device-identity.md)
- [Key Provisioning & Storage](../../implementation/build-phase/key-provisioning.md)
- [Secure Boot](../../implementation/build-phase/secure-boot.md)
- [OTA Updates & Patching](../../implementation/build-phase/ota-updates.md)
- [Cryptography under the CRA](../cryptography/cryptography-under-cra.md)

## Sources

- [CISA: Baxter Welch Allyn Connex Spot Monitor](https://www.cisa.gov/news-events/ics-medical-advisories/icsma-24-151-02)
- [NVD: CVE-2024-1275](https://nvd.nist.gov/vuln/detail/CVE-2024-1275)
