---
title: "Key Provisioning & Storage"
sidebar_label: "Key Management"
sidebar_position: 4
tags: [keys, provisioning, hsm, tpm, secure-element, root-of-trust]
---

# Key Provisioning & Storage

**Key provisioning and storage** is the process of creating, injecting, deriving, protecting, using, rotating, revoking, and evidencing the cryptographic keys a product depends on.

For connected devices, key management is not a single firmware feature. It is a manufacturing and lifecycle control. A weak provisioning ceremony, shared key, exposed signing credential, or undocumented factory exception can undermine secure boot, OTA updates, device identity, encrypted communications, and CRA evidence.

Use this page to define how keys are generated, protected, linked to device identity, handled during manufacturing, used in operation, and retained as evidence over the support period.

This page is engineering guidance. It supports secure-by-design planning and technical documentation, but it is not legal advice or a conformity assessment.

## Use This Page When

Use this page when you need to:

- design a device key hierarchy or manufacturing provisioning flow;
- decide where root keys, operational keys, certificates, and signing credentials should live;
- choose between a secure element, TPM, TEE, PUF, protected MCU storage, or external provisioning service;
- avoid shared default secrets, hardcoded keys, and extractable credentials;
- connect key management to secure boot, OTA updates, device identity, TLS, data-at-rest protection, and evidence;
- document key generation, injection, rotation, revocation, destruction, and exception handling.

## Key Provisioning vs Device Identity

Key provisioning is closely related to **[Unique Device Identity](./unique-device-identity.md)**, but they are not the same thing.

- **Device identity** answers: *What is this device, and how can another system trust that it is genuine?*
- **Key provisioning and storage** answers: *How are the cryptographic keys, certificates, and credentials created, protected, used, replaced, revoked, and evidenced?*

A device identity may be expressed through a certificate or hardware-bound key. Key provisioning covers the wider process that makes that identity and other cryptographic functions trustworthy.

## What Good Looks Like

A secure key provisioning and storage process should be able to show:

- every security-relevant key has a defined purpose, owner, protection boundary, lifecycle, and evidence record;
- root keys and high-value secrets are generated or derived inside a trusted environment and are not extractable in normal operation;
- each device receives unique credentials where uniqueness is required;
- no production fleet depends on a shared default secret embedded in firmware;
- manufacturing stations, HSMs, secure elements, certificates, manifests, and audit logs are part of a controlled provisioning ceremony;
- operational keys and certificates can be rotated, renewed, revoked, or replaced during the support period;
- firmware signing keys and device operational keys are separated by purpose and authority;
- provisioning failures, rework, scrap, and exception cases are recorded;
- the product evidence pack can tie key-management decisions to product scope, hardware revision, firmware release, manufacturing batch, and support period.

## Regulatory Context

The **[Cyber Resilience Act (CRA)](../../standards/eu/cra/index.md)** does not prescribe a specific key-storage technology. It requires security outcomes that depend on good key management.

Relevant CRA outcomes include:

- protecting confidentiality of data at rest and in transit using state-of-the-art mechanisms ([CRA Annex I § 1(2)(e)][cra_annexI]);
- protecting integrity of data, commands, programs, and configuration against unauthorised modification ([CRA Annex I § 1(2)(f)][cra_annexI]);
- preventing unauthorised access through appropriate control mechanisms;
- enabling secure updates and vulnerability remediation during the support period.

BSI TR-03183-1 reinforces the need to protect sensitive data and parameters ([REQ_ER 6][bsi_tr_03183_p1]) and to verify update package authenticity and integrity.

Strong algorithms are not enough. A product can use current cryptography and still fail if keys are shared, predictable, extractable, expired, or uncontrolled in manufacturing.

## Do I Need Key Provisioning?

If the product uses cryptography, it needs key management. For most connected products, that means a defined provisioning and storage process.

Common triggers include:

- device authentication to a cloud, gateway, mobile app, service, or customer system;
- TLS or mTLS communication;
- firmware signing, secure boot, or OTA update verification;
- data-at-rest encryption or key wrapping;
- command authentication or anti-replay protection;
- secure logging, attestation, license enforcement, or protected configuration;
- certificates, tokens, credentials, or product secrets issued during manufacturing.

A product may avoid key provisioning only if it has no cryptographic functions, no sensitive data, no authenticated update path, no access control, and no trust relationship with another system. That is unusual for a connected product.

## Design The Key Inventory First

Before choosing a chip or platform, list the keys and credentials the product needs.

| Key or credential | Typical purpose | Lifecycle question |
|-------------------|-----------------|--------------------|
| Hardware root key | Anchors device trust or identity. | Is it generated in silicon, injected in factory, or derived from a PUF? |
| Operational device certificate | Authenticates the device to a service. | Can it be renewed, rotated, and revoked? |
| Firmware verification key | Verifies signed boot or update images. | How is it protected and updated if the signing authority changes? |
| Update signing key | Signs firmware, software, or configuration releases. | Is the private key protected in an HSM or controlled signing service? |
| Data-at-rest key | Protects local sensitive data. | Is it unique, wrapped, derived, erasable, and recoverable only as intended? |
| Communication credential | Supports TLS, mTLS, VPN, MQTT/TLS, API, or local pairing. | What happens at expiry, compromise, or ownership transfer? |
| Manufacturing secret | Enables secure provisioning or factory authentication. | Is it temporary, access-controlled, and removed after production? |
| Recovery or service credential | Supports repair, recovery, debug unlock, or support. | Is use tightly controlled, logged, and disabled for production unless justified? |

Record the result in the product cryptographic inventory and decision records. For broader algorithm and lifecycle choices, use **[Cryptography under the CRA](../../resources/cryptography/cryptography-under-cra.md)**.

## Provisioning Ceremony

Treat provisioning as a ceremony: a controlled sequence with defined participants, systems, approvals, records, and failure handling.

| Stage | What happens | Evidence to retain |
|-------|--------------|--------------------|
| Design | Define key purposes, hierarchy, trust anchors, algorithms, storage locations, certificate profiles, and lifecycle rules. | Key-management design, architecture diagram, cryptographic decision records. |
| Supplier handover | Receive chips, modules, public-key manifests, certificates, or attestation material from the silicon or module supplier. | Supplier manifest, chain-of-custody record, verification result. |
| Factory setup | Prepare HSMs, provisioning servers, station credentials, network isolation, access control, and station software versions. | Factory configuration, access approvals, HSM policy, station build record. |
| Device enrolment | Generate, inject, or derive device-specific key material and bind it to a serial number, product identity, batch, and hardware revision. | Provisioning log, serial mapping, certificate issuance record, failure log. |
| Verification | Confirm the device can use the credential without exposing key material. | Functional test, attestation result, certificate validation, secure storage test. |
| Lockdown | Disable debug paths, remove temporary secrets, close provisioning interfaces, and set production configuration. | Production-lock record, debug-disable evidence, final configuration record. |
| Release to inventory | Associate provisioned devices with batch, firmware, region, customer, or distribution channel where needed. | Batch record, device manifest, release approval. |
| Rework or scrap | Handle failed, returned, or reworked devices without leaking or reusing credentials. | Rework record, revocation/destruction record, exception approval. |

The exact workflow can be simple or complex. What matters is that it is controlled, repeatable, and evidenced.

## Trust Anchor Options

The trust anchor is the place where the product's most important secrets or trust decisions are rooted.

| Technology | What it provides | Watch-outs |
|------------|------------------|------------|
| Secure Element (SE) | Dedicated tamper-resistant key storage and cryptographic services over a narrow interface. | Adds BOM, integration, supply-chain, and certificate-profile decisions. |
| Trusted Platform Module (TPM) | Standardised key storage, attestation, measurement, and platform-security functions. | Best fit is often Linux, gateway, industrial, or enterprise-class platforms. |
| Trusted Execution Environment (TEE) | Isolated execution and protected memory inside the main processor. | Security depends on implementation, firmware configuration, and attack surface. |
| Physically Unclonable Function (PUF) | Device-unique secret derived from physical characteristics rather than stored directly. | Needs careful enrolment, helper-data protection, reliability, and recovery design. |
| MCU secure storage | Protected flash, OTP, key slots, debug controls, and cryptographic accelerators. | Protection varies widely by family, configuration, lifecycle state, and threat model. |
| External HSM or signing service | Protects CA, firmware-signing, and provisioning authority keys outside the device. | Operational controls, approvals, logging, backup, and disaster recovery matter. |

Hardware helps, but it does not replace process. A secure element can still be misused if all devices receive the same credential, if certificates are not revocable, or if production lockdown is skipped.

For hardware-selection context, see the **[STM32](../../resources/hardware/stm32.md)** and **[ESP32](../../resources/hardware/espressif.md)** hardware pages.

## Key Lifecycle Decisions

Define the lifecycle for each key class.

| Decision | Questions to answer |
|----------|---------------------|
| Generation | Where is the key generated, what entropy source is used, and who can trigger generation? |
| Injection or derivation | Is the key injected, generated on-device, derived from a hardware secret, or issued by a CA? |
| Storage | Is the private key non-extractable? What hardware or software boundary protects it? |
| Use | Can application code read the key, or only request cryptographic operations? |
| Separation | Are boot, update, identity, communication, data, and service keys separated by role? |
| Rotation and renewal | Can keys or certificates be replaced before expiry or after compromise? |
| Revocation | Can a single device, batch, certificate, service credential, or signing authority be revoked? |
| Destruction | Can keys be erased for decommissioning, repair, return, transfer, or crypto-erasure? |
| Recovery | What happens if a device loses credentials or a signing key is compromised? |
| Evidence | Where are issuance, renewal, revocation, and exception records retained? |

## Common Architecture Patterns

Several patterns are common in connected products.

### Supplier-Rooted Device Identity

The silicon or module supplier creates a hardware-rooted identity and provides public-key or certificate manifests to the manufacturer. The manufacturer verifies the manifest during production and issues operational credentials.

This can reduce factory key-injection risk, but the manufacturer still owns product-scope decisions, certificate issuance, onboarding, lifecycle, and evidence.

### OEM Factory Provisioning

The manufacturer generates or injects root or operational credentials during production using a controlled factory station and HSM-backed provisioning service.

This gives more control, but it increases the need for manufacturing security, station hardening, access control, audit logs, rework handling, and disaster recovery.

### On-Device Key Generation With CSR

The device generates a key pair internally, keeps the private key non-extractable, and sends a certificate signing request to a provisioning or onboarding service.

This avoids moving private keys through the factory, but the service must verify that the request came from a genuine in-scope device and bind it to the correct product record.

### Derived Keys

The device derives working keys from a hardware secret, PUF, unique root, or key-encryption key.

This can reduce stored secret material, but derivation context, salt, labels, anti-rollback state, and destruction behavior need careful design.

## Evidence To Retain

Transfer key-management evidence into the **[Secure-by-Design Evidence Pack](../../resources/policy-and-evidence/audit-evidence-pack.md)**.

Useful evidence includes:

| Evidence | Why it matters |
|----------|----------------|
| Key inventory | Shows what keys exist, why they exist, and who owns them. |
| Key hierarchy and architecture diagram | Explains trust anchors, operational keys, certificate chains, and separation of duties. |
| Provisioning process description | Shows how manufacturing creates, injects, derives, verifies, and locks down credentials. |
| Supplier manifests and verification records | Shows how supplier-rooted identities or modules are checked. |
| HSM, CA, and signing policy | Shows how high-value authority keys are protected. |
| Provisioning logs | Links device, batch, serial number, credential, firmware, hardware revision, and date. |
| Certificate issuance, renewal, and revocation records | Shows lifecycle management and support-period control. |
| Secure storage test evidence | Shows keys are protected and non-extractable as designed. |
| Debug and production-lock evidence | Shows provisioning interfaces and temporary access paths are closed. |
| Rework, scrap, and exception records | Shows failed devices and unusual cases did not leak or reuse secrets. |
| Compromise and recovery runbook | Shows what the team would do if keys, CA, signing service, or batches were compromised. |

## Common Gaps

Common key-management gaps include:

- using one shared secret across a product line or manufacturing batch;
- embedding private keys, API tokens, passwords, or certificates in firmware images;
- generating production keys on an uncontrolled factory PC;
- allowing application code to read raw key material instead of invoking protected operations;
- failing to bind credentials to serial number, product scope, hardware revision, or support period;
- issuing certificates without renewal, expiry, revocation, or replacement planning;
- protecting device keys but leaving firmware signing keys weakly controlled;
- skipping debug lockdown after provisioning;
- losing records for reworked, scrapped, returned, or replacement devices;
- assuming hardware security features are active without production configuration evidence.

## Tooling And Build-vs-Buy Decisions

Some teams can operate a simple provisioning flow using a secure factory station, HSM-backed CA, and device secure storage. Others benefit from specialised platforms.

Useful tooling categories include:

- public key infrastructure for issuing and managing certificates, such as [Keyfactor EJBCA](https://www.keyfactor.com/products/ejbca-enterprise/);
- secure elements and hardware trust anchors, such as [NXP EdgeLock SE05x](https://www.nxp.com/products/security-and-authentication/authentication/edgelock-se050-plug-trust-secure-element-family:SE050);
- HSMs or signing services for CA keys, firmware signing keys, and release approvals;
- factory provisioning systems that bind devices to serial numbers, batches, manifests, and certificates;
- lifecycle platforms such as [QuarkLink](https://quarklink.io/product/) that bundle provisioning, identity management, and related device lifecycle services.

For more details, see **[Hardware Root of Trust & Provisioning](../../tools/hardware-root-of-trust-and-provisioning.md)** and **[PKI & Key Management](../../tools/pki-and-key-management.md)**.

## Key Provisioning Checklist

Before release, confirm that:

- [ ] **Key inventory:** Every key, certificate, credential, token, and signing authority has a defined purpose and owner.
- [ ] **Unique credentials:** Devices use unique credentials where uniqueness is required; no shared default secret protects a fleet.
- [ ] **Protected generation:** Production keys are generated, injected, or derived in a controlled trusted environment.
- [ ] **Hardware-backed storage:** Critical keys are stored or derived using an appropriate trust anchor.
- [ ] **Non-extractable private keys:** Application code cannot read raw high-value key material.
- [ ] **Separation of duties:** Firmware signing, update verification, device identity, communication, and data-protection keys are separated.
- [ ] **Provisioning ceremony:** Manufacturing stations, HSMs, manifests, access control, audit logs, and failure handling are defined.
- [ ] **Lifecycle plan:** Rotation, renewal, revocation, destruction, recovery, and compromise handling are documented.
- [ ] **Production lockdown:** Debug paths, temporary secrets, and provisioning interfaces are removed or disabled for production devices.
- [ ] **Evidence retention:** Provisioning logs, certificate records, supplier records, test evidence, and exceptions are retained.

## Related Pages

If you need to:

- design the identity model that uses these keys, use **[Unique Device Identity](./unique-device-identity.md)**;
- anchor key decisions in boot integrity, use **[Secure Boot](./secure-boot.md)**;
- protect and evidence update verification, use **[Secure OTA Updates](./ota-updates.md)**;
- assess algorithms, certificate profiles, and cryptographic lifecycle, use **[Cryptography under the CRA](../../resources/cryptography/cryptography-under-cra.md)**;
- choose hardware features, use **[STM32](../../resources/hardware/stm32.md)** or **[ESP32](../../resources/hardware/espressif.md)**;
- retain technical documentation, use the **[Secure-by-Design Evidence Pack](../../resources/policy-and-evidence/audit-evidence-pack.md)**;
- compare tooling, use **[Hardware Root of Trust & Provisioning](../../tools/hardware-root-of-trust-and-provisioning.md)** and **[PKI & Key Management](../../tools/pki-and-key-management.md)**.

[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I - Essential cybersecurity requirements"
[bsi_tr_03183_p1]: https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI-TR-03183-1-0_9_0.pdf "BSI TR-03183 Part 1: General requirements"
