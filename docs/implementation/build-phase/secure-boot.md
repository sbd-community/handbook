---
title: "Secure Boot Implementation"
sidebar_label: "Secure Boot"
sidebar_position: 3
tags: [secure-boot, root-of-trust, chain-of-trust, cra, integrity]
---

# Secure Boot for Connected Products

**Secure boot** is the product control that prevents unauthorised firmware or software from running during startup. For connected products, it is one of the main ways to protect firmware integrity, support trustworthy updates, and retain evidence that the released product boots only code approved by the manufacturer.

Use this page to decide what secure boot needs to cover, how it should fail, what evidence to retain, and which related controls matter for a CRA-scoped connected product.

This page is engineering guidance. It helps with secure-by-design planning and technical documentation, but it is not legal advice or a conformity assessment.

## Use This Page When

Use this page when you need to:

- design or review a firmware, bootloader, or operating-system boot chain;
- decide whether secure boot is required or whether an exception needs a documented risk rationale;
- connect secure boot to key provisioning, update recovery, anti-rollback, debug lockdown, or hardware selection;
- prepare evidence for a CRA technical file, product-security review, customer assurance request, or release gate;
- understand how draft CRA boot-manager standards may affect secure boot evidence.

## What Secure Boot Does

Secure boot creates a **chain of trust** from an immutable hardware or ROM anchor through each mutable software component loaded during startup.

At each stage, the device verifies that the next component is authentic and has not been tampered with. If verification fails, the product should refuse to boot unauthorised code or enter a known-good recovery path.

Secure boot does not make a product secure by itself. It must be paired with protected signing keys, secure provisioning, update integrity, rollback protection, debug lockdown, vulnerability handling, and retained evidence.

## What Good Looks Like

A secure boot design for a connected product should be able to show:

- a documented boot chain from hardware reset to application or operating system handoff;
- an immutable or write-protected root of trust;
- protected trust anchors, public-key hashes, certificates, or equivalent verification material;
- signed verification of every mutable boot component in scope;
- defined failure behaviour when verification fails;
- authenticated recovery or rollback-safe fallback behaviour;
- rollback protection for boot firmware, firmware images, configuration, or trust data where downgrade would create risk;
- production debug, test, and manufacturing interfaces disabled, fused off, or strongly authenticated;
- signing-key generation, custody, rotation, and revocation process;
- verification, recovery, rollback, and production-configuration evidence retained in the product technical file.

## Regulatory And Standards Context

The **[Cyber Resilience Act (CRA)](../../standards/eu/cra/index.md)** requires products to protect the integrity of commands, programs, and configuration against unauthorised manipulation ([CRA Annex I § 1(2)(f)][cra_annexI]). Secure boot is a common technical control for meeting that integrity objective.

BSI TR-03183-1 reinforces this pattern by calling for state-of-the-art mechanisms to protect code, data, and configuration integrity, and for violations to be detected ([REQ_ER 7][bsi_tr_03183_p1]).

Boot managers are also listed as Important Class I products under CRA Annex III. The draft **[ETSI EN 304 623](../../standards/eu/cra/en-304-623-boot-managers.md)** shows how CRA expectations may translate into testable boot-manager requirements, including verified boot, measured boot, rollback protection, secure updates, key provisioning, debug interface controls, logging, recovery, and assessment evidence.

:::warning Draft standard
ETSI EN 304 623 v0.1.3 is an interim draft. It is useful for design planning, gap analysis, and supplier due diligence, but it does not confer presumption of conformity until the final standard is cited in the Official Journal.
:::

## Do I Need Secure Boot?

For most connected products with updateable firmware, credentials, cryptographic keys, sensitive data, safety relevance, or network-facing behaviour, secure boot should be treated as a foundational control.

The question is usually not whether firmware integrity matters, but whether the product has a credible, documented way to protect it.

### Narrow Exception: Immutable Firmware

If the product software is physically immutable, for example because it is burned into true ROM or write-enable fuses are permanently disabled at the factory, then post-manufacture firmware modification may not be possible. In that case, a conventional secure boot process may not be necessary.

This is uncommon for connected products, which normally need security updates, recovery, or configuration changes during their support period.

### Narrow Exception: Very Simple, Low-Impact Product

BSI TR-03183-1 frames software integrity verification differently where the product stores no sensitive user or system data. A very simple product might justify a lighter approach if all of the following are true:

- it does not store cryptographic keys, credentials, or security-critical parameters;
- it does not store sensitive personal data;
- it does not store sensitive system data or proprietary configuration;
- compromise of firmware integrity would not create significant safety, privacy, availability, or downstream security risk;
- the manufacturer records the risk rationale and any compensating controls.

**Example:** a simple battery-powered environmental sensor that transmits public readings over a local network may be able to justify a proportionate approach if it stores no secrets and has low impact. Even then, the decision should be recorded in the risk assessment and evidence pack.

## How Secure Boot Works

The secure boot process depends on a single starting point that the attacker cannot rewrite in normal operation.

### Anchoring Trust In Hardware

The chain usually begins with immutable Boot ROM code and a public-key hash, certificate, or verification value stored in one-time-programmable memory, eFuses, ROM, a secure element, TPM, TEE, or another hardware-backed trust anchor.

That trust anchor is closely related to **[Unique Device Identity](./unique-device-identity.md)** and **[Key Provisioning & Storage](./key-provisioning.md)**. The device needs verification material it can trust, and the manufacturer needs a controlled process for creating and protecting signing keys.

### The Links In The Chain

A typical chain has several links:

| Stage | What happens | What to document |
|-------|--------------|------------------|
| Boot ROM | Immutable code starts first and loads the next stage. | Hardware root of trust, Boot ROM behaviour, trust-anchor location. |
| First-stage bootloader | The next boot component is verified before execution. | Verification algorithm, key material, failure behaviour. |
| Later bootloader or firmware stage | Additional components are verified before handoff. | Full chain coverage and component list. |
| Kernel, RTOS, root filesystem, or application | The main runtime environment starts only after verification succeeds. | Scope of verification and any excluded components. |
| Recovery path | Failed verification triggers safe recovery, not weak fallback. | Recovery design, tests, and operator/customer behaviour. |

For CRA evidence, document more than the happy path. Assessors will expect to understand what happens when verification fails, how rollback is prevented, how recovery is authenticated, and how debug or manufacturing modes are disabled before normal operation.

### Code Signing

Secure boot relies on digital signing:

- **Offline signing process:** the manufacturer signs firmware images with a protected private key, ideally generated and used inside an HSM or equivalent controlled signing environment.
- **On-device verification process:** the device verifies the signature using the corresponding public key, key hash, certificate, or trust anchor before executing the next component.

The private signing key is not a device secret. It is a manufacturer asset. Loss or compromise of the signing key can compromise the whole product fleet.

### Verified Boot vs Measured Boot

**Verified boot** enforces policy during startup: each component is cryptographically verified before execution, and the boot process stops or enters recovery if verification fails.

**Measured boot** records cryptographic measurements of boot components for later attestation, diagnostics, incident response, or forensics. Measurement alone does not necessarily prevent unauthorised code from executing.

CRA-oriented boot architectures often need both concepts: enforcement to prevent unauthorised execution and evidence to support diagnostics, incident response, or attestation.

## Evidence To Retain

Transfer secure boot evidence into the **[Secure-by-Design Evidence Pack](../../resources/policy-and-evidence/audit-evidence-pack.md)**. Useful evidence includes:

| Evidence | Why it matters |
|----------|----------------|
| Boot-chain architecture diagram | Shows which components execute and where trust begins and ends. |
| Trust-anchor design | Shows where verification material is stored and how it is protected. |
| Signing-key procedure | Shows who can sign firmware, where keys are held, and how signing is approved. |
| Provisioning records | Shows how public keys, certificates, hashes, or fuses are set in production. |
| Verification test results | Shows valid images boot and modified or unsigned images fail. |
| Failure-behaviour tests | Shows the product refuses unauthorised code or enters authenticated recovery. |
| Rollback-protection evidence | Shows older vulnerable images cannot be reintroduced where that creates risk. |
| Recovery test evidence | Shows interrupted or failed updates recover to a known-good authenticated state. |
| Debug-lockdown records | Shows production debug, test, and manufacturing modes are disabled or controlled. |
| Exception or risk rationale | Shows why secure boot scope is limited or why an alternative control is proportionate. |

## Common Gaps

Common secure boot gaps include:

- verifying only the first bootloader while leaving later firmware, kernel, root filesystem, or applications unchecked;
- relying on secure boot but leaving debug ports, recovery shells, or manufacturing modes open;
- storing signing keys in developer workstations or CI systems without strong controls;
- supporting updates without anti-rollback or recovery tests;
- failing open into a weak recovery mode after verification failure;
- using measured boot where enforcement is required;
- enabling secure boot in development but not recording production fuse, eFuse, OTP, or configuration state;
- treating vendor hardware features as evidence without product-level configuration and test records.

## Tooling And Build-vs-Buy Decisions

Implementing secure boot combines hardware support, bootloader integration, signing infrastructure, provisioning, update design, and release governance.

- **Build approach:** teams may integrate open-source bootloaders and signing workflows directly, such as U-Boot verified boot, MCUboot, FIT images, vendor boot ROM features, HSM-backed signing, and custom recovery logic. This gives control but requires deep low-level and PKI expertise.
- **Buy approach:** commercial platforms such as [QuarkLink](https://quarklink.io/product/) or [Thistle Technologies](https://thistle.tech/) may provide device SDKs, provisioning workflows, signing services, and device lifecycle management. These can reduce integration risk, but the manufacturer still owns the product security case and evidence.

For product and tooling categories, see **[Hardware Root of Trust & Provisioning](../../tools/hardware-root-of-trust-and-provisioning.md)** and **[Secure Update & OTA Frameworks](../../tools/secure-update-and-ota-frameworks.md)**.

## Secure Boot Checklist

Before release, confirm that:

- [ ] **Hardware-anchored root of trust:** The boot chain starts from immutable code or a protected trust anchor.
- [ ] **Full chain verification:** Every mutable boot component in scope is verified before execution.
- [ ] **Protected signing keys:** Private signing keys are generated, stored, used, rotated, and revoked under controlled conditions.
- [ ] **Provisioning evidence:** Public verification material, fuses, certificates, or key hashes are provisioned and recorded for production devices.
- [ ] **Rollback protection:** Version counters, anti-rollback metadata, or equivalent controls prevent unsafe downgrade.
- [ ] **Secure recovery:** Failed boot or update attempts recover to a known-good authenticated state.
- [ ] **Fail-secure behaviour:** Verification failure does not result in unauthorised code execution or weak fallback.
- [ ] **Debug lockdown:** JTAG, SWD, UART, DMA, manufacturing, and diagnostic interfaces are disabled, fused off, or strongly authenticated before production use.
- [ ] **Measurement and logs:** Measurements and boot logs, where implemented, are protected against tampering and sensitive-data leakage.
- [ ] **Technical documentation:** Boot architecture, signing process, provisioning records, tests, exceptions, and release configuration are retained.

## Related Pages

If you need to:

- design trust anchors and signing-key handling, use **[Key Provisioning & Storage](./key-provisioning.md)**;
- define device identity and onboarding, use **[Unique Device Identity](./unique-device-identity.md)**;
- protect update delivery and recovery, use **[Secure OTA Updates](./ota-updates.md)**;
- assess cryptographic mechanisms and agility, use **[Cryptography under the CRA](../../resources/cryptography/cryptography-under-cra.md)**;
- understand architecture constraints, use **[Types of Embedded Device](../../resources/reference/types-of-embedded-device.md)**;
- assess hardware support, use **[STM32](../../resources/hardware/stm32.md)** or **[ESP32](../../resources/hardware/espressif.md)**;
- track boot-manager standards context, use **[ETSI EN 304 623: Boot Managers](../../standards/eu/cra/en-304-623-boot-managers.md)**;
- retain product evidence, use the **[Secure-by-Design Evidence Pack](../../resources/policy-and-evidence/audit-evidence-pack.md)**.

[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I - Essential cybersecurity requirements"
[bsi_tr_03183_p1]: https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI-TR-03183-1-0_9_0.pdf "BSI TR-03183 Part 1: General requirements"
