---
title: "Cryptography under the CRA"
sidebar_label: "Cryptography"
sidebar_position: 1
description: "Practical guidance for connected-product teams assessing cryptographic algorithms, protocols, keys, firmware integrity, data protection, crypto agility, and CRA evidence."
tags: [cra, cryptography, crypto-agility, key-management, secure-boot, firmware-signing, tls, pqc, evidence, technical-documentation, secure-by-design]
---

# Cryptography under the CRA

Use this page to assess whether the cryptography in a connected product is suitable, documented, implemented correctly, and maintainable over the product support period.

The **Cyber Resilience Act (CRA)** does not prescribe a fixed list of algorithms in the regulation itself. It requires products to protect confidentiality and integrity using state-of-the-art mechanisms ([CRA Annex I § 1(2)(e,f)][cra_annexI]; [handbook CRA requirements](../../standards/eu/cra/index.md#annex-i-requirements)). For product teams, that means cryptographic choices need to be standardised where possible, risk-based where necessary, evidence-backed, and reviewed over time.

Using modern algorithms is only part of the work. CRA readiness also depends on key management, secure configuration, firmware integrity, certificate lifecycle management, update verification, vulnerability handling, and evidence that production products match the intended design.

## What This Page Is For

Use this page when you need to:

- inventory where cryptography is used in a connected product;
- assess whether algorithms, protocols, key sizes, and configurations are defensible;
- document cryptographic decisions and exceptions;
- connect cryptographic controls to CRA readiness and technical documentation;
- plan migration, expiry, and crypto agility over the support period.

## What the CRA Actually Requires

The CRA is technology-neutral, but several requirements are directly affected by cryptography. Product teams should pay particular attention to:

- protecting confidentiality of stored, transmitted, or otherwise processed data using state-of-the-art mechanisms ([CRA Annex I § 1(2)(e)][cra_annexI]; [handbook CRA requirements](../../standards/eu/cra/index.md#annex-i-requirements));
- protecting the integrity of data, commands, programs, and configuration against unauthorised modification ([CRA Annex I § 1(2)(f)][cra_annexI]);
- controlling access to devices, services, and data;
- authenticating and protecting software, firmware, and configuration updates;
- supporting vulnerability handling, update distribution, and remediation throughout the support period;
- enabling secure deletion or data removal where required by the product design and user expectations.

Cryptography supports these outcomes, but it does not satisfy them alone. A product can use strong algorithms and still fail because keys are shared, certificates expire without renewal, firmware signatures are not verified on production devices, or weak protocol options remain enabled.

## Where Cryptography Appears in a Connected Product

Start with an inventory. Cryptographic risk is hard to manage if the team cannot say where algorithms, keys, certificates, signatures, and credentials are used.

| Product area | Cryptography usually supports |
|--------------|-------------------------------|
| Device identity | Certificates, keys, credentials, attestation, onboarding. |
| Communications | TLS, mTLS, VPN, MQTT/TLS, API authentication, message integrity. |
| Firmware and software updates | Signing, verification, rollback protection, update authorisation. |
| Secure boot | Code signing, root of trust, measured or verified boot. |
| Configuration and commands | Integrity protection, authentication, authorisation, anti-replay. |
| Data at rest | Encryption, key wrapping, secure storage, key destruction or crypto-erasure support. |
| Manufacturing and provisioning | Key generation, injection, certificate issuance, audit records. |
| Cloud, mobile apps, and services | API authentication, token handling, certificate validation, secrets management, key rotation. |
| Logs and evidence | Integrity protection, timestamps, access control, retention. |

## What "State of the Art" Means in Practice

For CRA readiness, "state of the art" should usually mean:

- standardised, publicly reviewed mechanisms;
- current protocol versions and secure configurations;
- appropriate key sizes and security strength for the product support period;
- no custom cryptographic constructions unless independently justified;
- documented handling of legacy interoperability;
- evidence that chosen mechanisms are implemented and configured correctly;
- a plan to review and update cryptography during the support period.

Using a recognised algorithm is not enough. Teams also need safe key storage, correct library use, secure defaults, tested update paths, certificate lifecycle management, and evidence that production configurations match the design.

## Use Agreed Cryptographic Mechanisms as a Benchmark

The **European Cybersecurity Certification Group (ECCG)** maintains **Agreed Cryptographic Mechanisms (ACM)** material for EU cybersecurity certification. ENISA describes the [EUCC Guidelines on Cryptography][eucc_crypto] as recommendations about cryptographic mechanisms that should preferably be used in ICT products submitted to EUCC certification. [ACM v2][acm_v2] also includes recommendations relevant to post-quantum cryptography.

For CRA work, ACM is best treated as an important benchmark, not as an automatic substitute for the applicable legal text, [harmonised standard](../../standards/eu/cra/index.md#harmonised-standards), certification scheme, or product-specific risk assessment.

Product teams should track ACM, the CRA standardisation process ([M/606][cra_standardisation]), and similar state-of-the-art references when making long-lived cryptographic design decisions, especially for products likely to face [third-party assessment](../../standards/eu/cra/index.md#conformity-assessment-routes), customer assurance review, or certification.

Non-standard, bespoke, proprietary, or legacy mechanisms may increase the justification burden and attract more scrutiny during assessment, customer review, or certification. If they remain necessary, document the reason, scope, compensating controls, and migration path.

## Cryptography Readiness Checklist

| Question | Evidence to retain |
|----------|--------------------|
| Have all cryptographic uses been inventoried? | Crypto inventory, architecture diagram, data-flow diagram. |
| Are algorithms and protocols standardised and publicly reviewed? | Design record, library list, protocol configuration. |
| Are deprecated, legacy, proprietary, or custom mechanisms avoided by default? | Exception record, interoperability rationale, sunset plan. |
| Are keys generated, stored, rotated, revoked, and destroyed appropriately? | Key-management design, provisioning records, certificate inventory. |
| Is random number generation suitable for key generation, nonces, provisioning, and device identity? | RNG design, entropy source evidence, test or certification records. |
| Are firmware and configuration updates signed and verified? | Secure boot/update design, verification test results. |
| Are communications protected with current protocol versions and secure defaults? | TLS/mTLS configuration, test evidence, scan results. |
| Is sensitive data protected at rest where needed? | Data classification, storage encryption design, key-wrapping design. |
| Are certificates and credentials unique per device or deployment where appropriate? | Provisioning records, certificate issuance records, device identity design. |
| Is there a plan for algorithm expiry, certificate expiry, and migration? | Crypto lifecycle plan, review calendar, migration triggers. |
| Are PQC risks assessed for long-lived confidentiality or identity? | PQC readiness note, crypto-agility plan, support-period review. |

## Cryptographic Decision Record

Use a decision record when selecting, retaining, or retiring cryptographic mechanisms.

| Field | Notes |
|-------|-------|
| Product or release | Product name, model, firmware version, software release, hardware revision, or service component. |
| Use case | Data in transit, update signing, device identity, data at rest, command integrity, log integrity, provisioning, or another use. |
| Mechanism selected | Algorithm, protocol, mode, parameter set, certificate profile, or signature scheme. |
| Library or implementation | Library, firmware component, hardware block, cloud service, secure element, HSM, or TPM used. |
| Key size and parameters | Key size, curve, mode, hash function, validity period, certificate lifetime, or protocol profile. |
| Source of recommendation | Harmonised standard, ACM, EUCC guidance, NIST, BSI, ANSSI, sector guidance, customer requirement, or internal policy. |
| Legacy or interoperability constraint | Why the constraint exists and where it applies. |
| Evidence location | Link to design, test, configuration, provisioning, or release evidence. |
| Review date | When this decision should be reviewed. |
| Migration or expiry trigger | Certificate expiry, ACM update, vulnerability, algorithm deprecation, support-period change, customer requirement, or product update. |

## Evidence to Retain

Useful cryptography evidence includes:

- cryptographic inventory;
- architecture and data-flow diagrams;
- key-management design;
- certificate and device-identity design;
- firmware-signing and secure-boot design;
- protocol and cipher-suite configuration;
- library and dependency records;
- SBOM entries for crypto libraries;
- manufacturing and provisioning records;
- certificate issuance, renewal, revocation, and expiry records;
- test evidence for TLS, update verification, rollback protection, secure storage, and production configuration;
- exception records for legacy or interoperability mechanisms;
- crypto review dates and migration plan.

Transfer cryptography evidence, exceptions, owners, and review triggers into the **[Secure-by-Design Evidence Pack](../policy-and-evidence/audit-evidence-pack.md)**.

## Crypto Agility and Lifecycle Review

Crypto agility is the ability to replace algorithms, increase key sizes, rotate certificates, update libraries, and retire legacy mechanisms during the support period without redesigning the whole product.

Review cryptography when:

- a new product or major release is planned;
- a support period is declared or extended;
- a library, protocol, algorithm, or certificate profile is deprecated;
- a vulnerability affects a cryptographic library or implementation;
- a [harmonised standard](../../standards/eu/cra/index.md#harmonised-standards), ACM version, customer requirement, or certification expectation changes;
- a product gains new cloud, mobile app, remote service, or update functionality;
- a device is approaching end of support or end of life.

## Post-Quantum Readiness

Post-quantum readiness is most urgent where the product protects long-lived confidential data, has a long support period, depends on public-key identity, or is difficult to update after deployment.

For many products, the first step is not immediate PQC deployment. It is crypto inventory, protocol and library visibility, certificate lifecycle control, and enough crypto agility to migrate when standards, ecosystems, and product constraints allow.

Track [NIST PQC standards][nist_pqc], EU PQC transition planning, ACM updates, and sector guidance. NIST finalised FIPS 203, FIPS 204, and FIPS 205 in 2024 for ML-KEM, ML-DSA, and SLH-DSA respectively, while [ACM v2][acm_v2] includes recommendations relevant to PQC in EUCC certification contexts.

## Common Gaps

Common cryptography gaps include:

- no inventory of where cryptography is used;
- shared or default keys across devices;
- firmware signing exists but is not verified on production devices;
- TLS is used but weak protocol versions or cipher suites remain enabled;
- certificates expire after deployment with no renewal, revocation, replacement, or recovery path;
- private keys are stored in firmware, source code, images, logs, or configuration files;
- customer-specific keys are not separated from manufacturer signing keys;
- update integrity and update authorisation are confused;
- legacy algorithms are retained without an exception record;
- no plan exists for PQC migration or long-lived confidentiality.

For a real-world example of shared key risk, see the **[Baxter Connex Spot Monitor shared-key case study](../real-world-vulnerabilities/baxter-connex-spot-monitor-shared-key.md)**.

## Related Pages

If you need to:

- assess CRA readiness and retain cryptography evidence, use the **[CRA Readiness Gap Analysis](../checklists-and-worksheets/cra-gap-analysis.md)** and **[Secure-by-Design Evidence Pack](../policy-and-evidence/audit-evidence-pack.md)**;
- understand the regulatory context, use the **[CRA Overview](../../standards/eu/cra/index.md)**;
- create, protect, rotate, or revoke keys and certificates, use **[Key Provisioning & Storage](../../implementation/build-phase/key-provisioning.md)**;
- design device certificates, onboarding, and lifecycle identity, use **[Unique Device Identity](../../implementation/build-phase/unique-device-identity.md)**;
- protect firmware integrity and update verification, use **[Secure Boot](../../implementation/build-phase/secure-boot.md)** and **[Secure OTA Updates](../../implementation/build-phase/ota-updates.md)**;
- understand boot-manager cryptography evidence, use **[ETSI EN 304 623: Boot Managers](../../standards/eu/cra/en-304-623-boot-managers.md)**;
- choose architecture or hardware constraints that affect cryptographic controls, use **[Types of Embedded Device](../reference/types-of-embedded-device.md)**, **[STM32 Hardware Selection](../hardware/stm32.md)**, or **[ESP32 Hardware Selection](../hardware/espressif.md)**;
- define supporting organisation policy, use the **[Secure-by-Design Maturity Model](../checklists-and-worksheets/maturity-model.md)** and **[Secure-by-Design Policy Starter Kit](../policy-and-evidence/policy-templates.md)**.

<!-- Citations -->
[acm_v2]: https://certification.enisa.europa.eu/document/download/a845662b-aee0-484e-9191-890c4cfa7aaa_en?filename=ECCG+Agreed+Cryptographic+Mechanisms+version+2.pdf "ECCG Agreed Cryptographic Mechanisms version 2"
[cra_standardisation]: https://digital-strategy.ec.europa.eu/en/policies/cra-standardisation "European Commission – Cyber Resilience Act standardisation"
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements"
[eucc_crypto]: https://certification.enisa.europa.eu/publications/eucc-guidelines-cryptography_en "ENISA EUCC Guidelines on Cryptography"
[nist_pqc]: https://www.nist.gov/news-events/news/2024/08/announcing-approval-three-federal-information-processing-standards-fips "NIST approval of FIPS 203, 204, and 205 for post-quantum cryptography"
