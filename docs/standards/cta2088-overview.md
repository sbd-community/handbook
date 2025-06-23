---
title: "ANSI/CTA-2088"
sidebar_position: 10
tags: [cta, ansi, us, iot, consumer, security, standards, baseline]
---
# ANSI/CTA-2088 – US Consumer IoT Security

## 1. Why CTA-2088 matters

The **ANSI/CTA-2088** standard, developed by the Consumer Technology Association (CTA), provides a baseline set of cybersecurity capabilities for consumer Internet of Things (IoT) devices. It offers a clear, actionable list of security requirements that any connected device should meet, from smart thermostats to security cameras.

As a U.S. industry standard, it serves as a crucial benchmark for manufacturers selling into the North American market. It is designed to be a practical, testable standard that can help companies demonstrate due diligence and build more secure products.

:::info Official Text
The standard can be purchased from the CTA webstore. A free version is also available.

- **ANSI/CTA-2088-A Standard:** [shop.cta.tech/products/cta-2088][cta2088_std]
:::

**Relationship to other standards & laws**

| Standard / Law | How it interacts with CTA-2088 |
|---|---|
| **[FCC Cyber Trust Mark](./fcc-cyber-trust-mark-overview.md)** | The Trust Mark's technical requirements are based on NIST guidance, which has significant overlap with CTA-2088. As a practical, testable standard, CTA-2088 provides an excellent framework for manufacturers preparing for the Trust Mark certification process. |
| **[ETSI EN 303 645](./en303645-overview.md)** | CTA-2088 is the closest U.S. counterpart to Europe's EN 303 645. Both are baseline standards for consumer IoT security, and compliance with one provides a strong foundation for compliance with the other. |
| **[NIST IR 8259 Series](./nistir8259-overview.md)** | CTA-2088 complements the foundational guidance from NIST. While NIST provides a high-level framework of activities and capabilities, CTA-2088 defines a specific, testable set of technical requirements for the device itself. |
| **State-level IoT Security Laws** | Several U.S. states (e.g., California, Oregon) have laws requiring "reasonable security features" for IoT devices. CTA-2088 provides a well-defined benchmark that can help manufacturers meet these legal requirements. |

---

## 2. Core Security Capabilities

CTA-2088 is structured around two main sets of capabilities: those built into the device, and those managed by the manufacturer's organization.

### 2.1 Secure Device Capabilities (Baseline)

This is the core of the standard, defining the technical features the device must possess.

-   **Device Identifiers (`DI`):** Every device must have a unique identity, often in the form of a public/private key pair or certificate, to enable secure onboarding and management (`DI-001`, `DI-003`).
-   **Secured Access (`SA`):** The standard mandates strong access controls. This includes requiring unique default credentials (or forcing a change on first use), rate-limiting login attempts to prevent brute-force attacks, and securing all management interfaces (`SA-003`, `SA-005`, `SA-006`).
-   **Data In Transit Protection (`DIT`):** All sensitive data transmitted by the device must be cryptographically protected using industry-standard protocols like TLS 1.2+ (`DIT-005`, `DIT-009`).
-   **Data at Rest Protection (`DAR`):** Sensitive data stored on the device (e.g., credentials, user data) must be protected with encryption. It also recommends secure boot to ensure the integrity of the device's software (`DAR-000`, `DAR-010`).
-   **Cryptography (`CRY`):** Only strong, industry-standard, and publicly reviewed cryptographic algorithms are permitted. The standard explicitly forbids proprietary crypto and deprecated methods (`CRY-001`, `CRY-002`).
-   **Patchability (`PAT`):** Devices must have a secure mechanism to receive and install software updates. These updates must be authenticated to ensure they come from an authorized source (`PAT-001`, `PAT-002`).
-   **Reprovisioning (`REP`):** Users must be provided with a simple and secure way to wipe their data from the device, for example, when selling or disposing of it (`REP-001`).

### 2.2 Product Lifecycle Management Capabilities (Baseline)

These are organizational processes the manufacturer must implement.

-   **Vulnerability Submission and Handling (`VUL`):** Manufacturers must have a publicly available and managed process for researchers to report vulnerabilities (a Coordinated Vulnerability Disclosure or CVD policy) (`VUL-001`, `VUL-002`).
-   **End-of-Life (EoL) Updates and Disclosure:** The manufacturer must have a clear policy for how long a device will receive security updates and what users should do with the device at its end of life (`EOL-001`).
-   **Device Intent Documentation (`DIN`):** The manufacturer must document the device's intended network behavior (e.g., which servers it connects to and on which ports) to help users and network administrators secure it (`DIN-001`).

<!-- Citations -->
[cta2088_std]: https://shop.cta.tech/products/cta-2088 "ANSI/CTA-2088-A Standard" 