---
title: "Unique Device Identity"
sidebar_position: 2
tags: [identity, secure-by-design, build, root-of-trust, pki]
---

# Unique Device Identity

A **unique device identity** is the product design that lets a device prove it is genuine, distinguishable from other devices, and entitled to access the services, updates, commands, data, and support paths assigned to it.

For connected products, identity is not just a certificate. It is the link between hardware, provisioning, onboarding, authentication, secure updates, fleet management, vulnerability response, support, and evidence.

Use this page to define how each device proves what it is, how that proof is anchored, how operational identities are issued and retired, and what records show the identity model is working in production.

This page is engineering guidance. It supports secure-by-design planning and technical documentation, but it is not legal advice or a conformity assessment.

## Use This Page When

Use this page when you need to:

- decide whether each product unit needs a unique identity;
- define the difference between hardware root identity and operational identity;
- design device onboarding, cloud authentication, local pairing, or customer enrolment;
- avoid shared secrets, cloneable identifiers, and unauthenticated devices;
- connect identity to secure boot, key provisioning, OTA updates, logging, support, and evidence;
- document identity lifecycle states such as manufactured, provisioned, activated, transferred, revoked, returned, repaired, or decommissioned.

## Identity Design vs Key Provisioning

Identity design and key provisioning are closely linked, but they answer different questions.

- **Unique device identity** answers: *How does this physical or logical device prove what it is across onboarding, authentication, updates, support, and lifecycle events?*
- **[Key Provisioning & Storage](./key-provisioning.md)** answers: *How are the keys, certificates, and credentials created, protected, rotated, revoked, and evidenced?*

Do not collapse the two. A device can have keys without a well-designed identity model, and an identity model is not credible unless its credentials are securely provisioned and protected.

## What Good Looks Like

A connected-product identity design should be able to show:

- each device has a unique identity model tied to product scope, hardware revision, and support period;
- the root identity or credential material is protected against extraction and cloning;
- operational identities are anchored to the root identity or another documented trust chain;
- onboarding verifies that the device is genuine and in scope before granting service access;
- devices can be authenticated individually, not just as a product family or fleet;
- identity state can change over time, including activation, suspension, transfer, revocation, replacement, repair, and decommissioning;
- certificates, credentials, manifests, serial numbers, batches, and customer or service assignments are traceable;
- identity is used by related controls such as mTLS, command authorisation, OTA update eligibility, logging, and support;
- evidence records can show how identity was created, used, changed, and retired.

## Regulatory Context

The **[Cyber Resilience Act (CRA)](../../standards/eu/cra/index.md)** does not usually use the phrase "unique device identity" directly. It does require security outcomes that often depend on a trustworthy identity model.

Relevant outcomes include:

- preventing unauthorised access through appropriate control mechanisms ([CRA Annex I § 1(2)(d)][cra_annexI]);
- protecting confidentiality and integrity of data, commands, programs, and configuration;
- enabling secure updates and vulnerability remediation over the support period;
- recording and monitoring security-relevant events where applicable;
- retaining technical documentation that explains product security decisions.

BSI TR-03183-1 reinforces access-control and logging expectations, including preventing unauthorised access and logging attempts ([REQ_ER 5][bsi_tr_03183_p1]).

An access-control model is weak if the system cannot reliably tell one genuine device from another, revoke a compromised device, or distinguish a legitimate device from a clone.

## Do I Need Unique Device Identity?

For most connected products, yes.

You should assume a unique identity is needed if the product:

- authenticates to a cloud, gateway, mobile app, backend, customer system, or local controller;
- receives commands or configuration changes;
- receives software, firmware, or configuration updates based on product or device entitlement;
- stores or transmits sensitive, personal, operational, or customer-specific data;
- needs mTLS, remote attestation, secure onboarding, access control, or fleet management;
- needs device-level logging, vulnerability response, revocation, support, repair, or decommissioning.

### Narrow Exception: No Access Control Or Trust Relationship

A unique identity may be unnecessary for a product that has no access control need and no trust relationship with another system.

That is a narrow case. The product would need to have no user accounts, no restricted interfaces, no remote commands, no sensitive data, no device-specific support state, and no authenticated update or service relationship.

**Example:** A simple one-way beacon that broadcasts public non-sensitive data and receives no commands may be able to justify not having a unique identity. The rationale should still be recorded in the risk assessment and evidence pack.

### Shared Secret Anti-Pattern

Using one shared secret across a fleet is not a substitute for unique identity.

If one device, firmware image, factory station, or support process leaks the shared secret, attackers may be able to impersonate the whole fleet. The manufacturer also loses the ability to revoke one device without disrupting others.

## Root Identity And Operational Identity

Most connected products benefit from separating root identity from operational identity.

| Identity layer | Purpose | Typical implementation | Lifecycle |
|----------------|---------|------------------------|-----------|
| Hardware root identity | Proves the device or module is genuine and hardware-bound. | Initial device identifier, non-extractable asymmetric key, secure element credential, TPM key, PUF-derived root, silicon attestation. | Long-lived, rarely changed, used to anchor trust. |
| Operational identity | Authenticates the device to a specific service, customer, tenant, region, or use case. | X.509 certificate, mTLS credential, service certificate, enrolment token, attested credential. | Issued, renewed, rotated, revoked, and replaced during support. |
| Local or relationship identity | Authenticates the device to a local controller, mobile app, installer, owner, or accessory. | Pairing credential, local certificate, passkey, token, or shared relationship key. | Created and removed as ownership, pairing, or deployment changes. |
| Support or recovery identity | Controls repair, recovery, diagnostics, or replacement workflows. | Temporary service credential, signed unlock token, support certificate. | Short-lived, tightly authorised, logged, and revoked after use. |

The root identity should not usually be used directly for every service connection. Operational identities provide separation, revocation, shorter lifetimes, and service-specific control while remaining anchored to the root.

## Identity Lifecycle

Define the identity state model before release.

| State | What to decide | Evidence to retain |
|-------|----------------|--------------------|
| Designed | What identity layers exist, what they prove, and which systems trust them. | Identity architecture, trust model, threat model, decision records. |
| Manufactured | How the physical device, serial number, root credential, and batch are bound. | Supplier manifest, factory record, serial mapping, provisioning log. |
| Provisioned | How operational credentials are issued, stored, and tested. | Certificate issuance record, CSR or attestation record, validation result. |
| Onboarded | How the device is admitted to a cloud, tenant, customer, owner, or local network. | Onboarding event, entitlement check, service assignment. |
| Active | How the device authenticates, receives commands, updates, and support. | Authentication logs, fleet record, update eligibility, support status. |
| Suspended or revoked | How a compromised, stolen, returned, unpaid, or unsupported device is blocked. | Revocation record, status change, customer or service notification. |
| Repaired or replaced | How identity is preserved, replaced, reissued, or retired after repair. | RMA record, rework log, replacement mapping, credential revocation. |
| Transferred | How ownership, tenancy, customer assignment, or service relationship changes. | Transfer approval, reset record, new onboarding event. |
| Decommissioned | How credentials are revoked, data is removed, and records are retained. | Decommissioning record, revocation proof, data-removal evidence. |

Lifecycle state matters because identity is used outside the factory. Support, vulnerability response, customer communication, update eligibility, and incident investigation all depend on knowing which devices are active, affected, trusted, or retired.

## Provisioning And Onboarding Flow

A typical flow separates hardware proof, credential issuance, and service onboarding.

| Step | What happens | Design question |
|------|--------------|-----------------|
| Root identity exists | The device has a hardware-bound identifier or credential from silicon, module, or OEM provisioning. | How do you know the root identity is genuine and unique? |
| Manufacturer verifies scope | The OEM verifies manifest, serial number, product model, batch, and hardware revision. | What prevents an out-of-scope or counterfeit device from enrolling? |
| Device requests operational identity | The device generates or uses a protected key and submits a CSR or attestation. | Is the private key non-extractable and bound to the device? |
| Service issues credential | A CA, onboarding service, or provisioning platform issues an operational certificate or credential. | What profile, lifetime, revocation, and renewal rules apply? |
| Device stores credential | The credential is stored in secure storage and tested. | Can application code export or misuse the secret? |
| Device authenticates | The device uses mTLS, attestation, signed requests, or another mechanism to prove identity. | Can each device be authenticated and revoked individually? |
| Fleet record is updated | The identity is linked to product, batch, firmware, owner, region, support, and service state. | Can you later identify affected devices for updates, incidents, or customer notices? |

For the provisioning controls behind this flow, use **[Key Provisioning & Storage](./key-provisioning.md)**.

## What Identity Enables

A good identity model supports more than login.

| Product area | Identity contribution |
|--------------|----------------------|
| Access control | Distinguishes genuine devices from unauthorised or cloned devices. |
| Secure communications | Enables device-specific TLS, mTLS, API authentication, or local pairing. |
| Secure boot and attestation | Helps report or verify what hardware and software state a device is in. |
| OTA updates | Supports update eligibility, staged rollout, device targeting, and rollback decisions. |
| Vulnerability response | Identifies affected devices, batches, customers, regions, or service assignments. |
| Supply chain assurance | Helps [track and validate components](https://supplychainsecurityhandbook.com/technology-options/trust-anchors-device-identity/) from supplier to final product. |
| Security logging | Lets events be attributed to a specific device, not just an IP address or product family. |
| Support and lifecycle | Supports warranty, repair, transfer, revocation, and decommissioning decisions. |

## Evidence To Retain

Transfer identity evidence into the **[Secure-by-Design Evidence Pack](../../resources/policy-and-evidence/audit-evidence-pack.md)**.

Useful evidence includes:

| Evidence | Why it matters |
|----------|----------------|
| Identity model and trust architecture | Shows what each identity proves and which systems trust it. |
| Root vs operational identity decision | Shows why identities are separated or combined. |
| Device manifest and serial mapping | Links physical units to identifiers, batches, hardware revisions, and credentials. |
| Supplier identity or attestation records | Shows how silicon or module identity is verified. |
| Provisioning and onboarding records | Shows how identities are issued and activated. |
| Certificate profiles and lifecycle rules | Shows validity periods, renewal, revocation, and replacement behavior. |
| Authentication and access-control design | Shows how identity is used to prevent unauthorised access. |
| Revocation and suspension records | Shows compromised, unsupported, returned, or decommissioned devices can be controlled. |
| Transfer, RMA, repair, and decommissioning records | Shows lifecycle state changes are handled safely. |
| Test evidence | Shows clone attempts, invalid credentials, expired certificates, revoked devices, and onboarding failures are handled correctly. |

## Common Gaps

Common identity gaps include:

- using a serial number as if it were a cryptographic identity;
- using the same certificate, key, password, or token across many devices;
- issuing operational credentials without verifying the device is genuine and in scope;
- treating identity as only a cloud certificate topic, ignoring local pairing, support, repair, and decommissioning;
- lacking a way to revoke or suspend a single device;
- losing the link between credential, serial number, batch, firmware, hardware revision, customer, and support status;
- using long-lived certificates without renewal or expiry planning;
- not documenting what happens when ownership transfers or a device is returned;
- assuming supplier-provided identity automatically satisfies the manufacturer's product identity obligations;
- storing evidence in separate manufacturing, cloud, support, and security systems with no shared product record.

## Tooling And Build-vs-Buy Decisions

Identity can be built with a combination of device firmware, secure storage, PKI, onboarding services, fleet management, and support systems. Commercial platforms can reduce integration burden, but they do not remove the need to define the identity model and retain evidence.

Useful tooling categories include:

- hardware trust anchors such as secure elements, TPMs, PUFs, or protected MCU key storage;
- PKI and certificate-management software such as [Keyfactor EJBCA](https://www.keyfactor.com/products/ejbca-enterprise/);
- device onboarding and fleet-management services;
- HSM-backed signing or certificate authority services;
- lifecycle platforms such as [QuarkLink](https://quarklink.io/product/) that combine provisioning, identity management, and related device lifecycle capabilities;
- logging and vulnerability-management systems that can join identity, update, and incident records.

For more detail, see **[Hardware Root of Trust & Provisioning](../../tools/hardware-root-of-trust-and-provisioning.md)** and **[PKI & Key Management](../../tools/pki-and-key-management.md)**.

## Unique Device Identity Checklist

Before release, confirm that:

- [ ] **Identity model:** The product has a documented model for root, operational, local, and support identities where applicable.
- [ ] **Uniqueness:** Devices can be authenticated individually; no fleet-wide shared secret acts as the device identity.
- [ ] **Hardware anchoring:** Root identity or credential material is protected by an appropriate trust anchor.
- [ ] **Provisioning linkage:** Identity records connect serial number, product model, hardware revision, firmware, batch, and credential.
- [ ] **Onboarding control:** Services verify the device is genuine and in scope before granting access.
- [ ] **Lifecycle state:** Activation, suspension, revocation, transfer, repair, replacement, and decommissioning are defined.
- [ ] **Related controls:** Identity is connected to access control, mTLS, OTA update eligibility, logging, support, and vulnerability response.
- [ ] **Revocation:** A single compromised or unsupported device can be blocked without disrupting the whole fleet.
- [ ] **Evidence retention:** Identity design, provisioning records, certificates, lifecycle events, and test results are retained.

## Related Pages

If you need to:

- design the provisioning process behind identity credentials, use **[Key Provisioning & Storage](./key-provisioning.md)**;
- anchor identity in boot integrity or attestation, use **[Secure Boot](./secure-boot.md)**;
- assess algorithms, certificate profiles, and crypto lifecycle, use **[Cryptography under the CRA](../../resources/cryptography/cryptography-under-cra.md)**;
- target and evidence product updates, use **[Secure OTA Updates](./ota-updates.md)**;
- choose hardware features, use **[STM32](../../resources/hardware/stm32.md)** or **[ESP32](../../resources/hardware/espressif.md)**;
- retain technical documentation, use the **[Secure-by-Design Evidence Pack](../../resources/policy-and-evidence/audit-evidence-pack.md)**;
- compare supporting tools, use **[Hardware Root of Trust & Provisioning](../../tools/hardware-root-of-trust-and-provisioning.md)** and **[PKI & Key Management](../../tools/pki-and-key-management.md)**.

[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I - Essential cybersecurity requirements"
[bsi_tr_03183_p1]: https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI-TR-03183-1-0_9_0.pdf "BSI TR-03183 Part 1: General requirements"
