---
title: ETSI EN 303 645
sidebar_position: 12
tags: [en303645, iot, consumer, security, etsi, secure-by-design]
---
# ETSI EN 303 645 – Consumer IoT Security

## 1. Why EN 303 645 matters now

**ETSI EN 303 645** is the globally-recognized baseline standard for the security of consumer-facing "Internet of Things" (IoT) devices. It establishes a practical, risk-based set of 13 high-level security provisions and additional data protection provisions that manufacturers can implement to protect their products against common cybersecurity threats.

While it began as a European standard, its straightforward, outcome-focused approach has led to its adoption as the foundation for IoT security regulations and certification schemes worldwide, including in the UK, Singapore, and Australia. For companies selling consumer IoT products globally, complying with EN 303 645 is the single most effective step towards meeting multiple international requirements.

:::info Official Texts & Guidance
- **ETSI EN 303 645 Standard:** [Download from ETSI website][en303645]. This is the core standard defining the security provisions.
- **ETSI TS 103 701:** [Conformance Assessment Specification][ts103701]. This document defines test cases for verifying compliance with EN 303 645.
- **ETSI TR 103 621:** [Implementation Guide][tr103621]. This report provides further guidance and examples for implementing the standard's provisions.
:::

**Timeline of Key Dates**

| Date         | Event                                                              | Reference           |
| :----------- | :----------------------------------------------------------------- | :------------------ |
| **2020-06-12** | First version published as a European Standard (EN).                 | ETSI EN 303 645 V2.1.1 |
| **2024-09-11** | Current version (V3.1.3) adopted.                                  | EN 303 645 Foreword |
| **2025-06-30** | Date of publication for new National Standards endorsing the EN.     | EN 303 645 Foreword |

**Relationship to EU law**

| Law | How it interacts with EN 303 645 |
|-----|---------------------------|
| **[Radio Equipment Directive (RED)](../eu/red-overview.md)** | EN 303 645 is the primary candidate to become the **harmonised standard** for demonstrating compliance with the cybersecurity requirements of the RED Delegated Act (EU) 2022/30. Manufacturers who follow this standard will likely gain a "presumption of conformity" with the RED's essential requirements for network protection, privacy, and fraud prevention when the deadline arrives on 1 August 2025. |
| **[Cyber-Resilience Act (CRA)](../eu/cra-overview.md)** | The CRA's essential security requirements in Annex I are heavily based on the principles in EN 303 645. It is expected that a future version of this standard (or a new standard based on it) will become a harmonised standard for the CRA. For manufacturers of "Default" category consumer products, compliance with EN 303 645 is an excellent way to prepare for future CRA obligations. |

## 2. Scope

The standard applies to **consumer IoT devices**, which are defined as network-connected devices intended for consumer use, typically in a home environment or as wearables. The scope is broad and technology-neutral, focusing on the security outcomes rather than specific implementations.

A non-exhaustive list of in-scope products includes:
- Connected children's toys and baby monitors
- Connected smoke detectors, door locks, and window sensors
- IoT gateways, base stations, and hubs
- Smart cameras, smart speakers, and smart TVs
- Wearable health and fitness trackers
- Connected home automation and alarm systems
- Connected appliances (e.g., washing machines, refrigerators)
- Smart home assistants

The standard also applies to the **associated services** required for the device's functionality, such as mobile apps and cloud backends.

## 3. Requirements & How to Implement Them

The standard's security obligations are detailed in **Section 5 (Cyber security provisions)** and **Section 6 (Data protection provisions)**. These provisions are outcome-focused, giving manufacturers the flexibility to choose the most appropriate technical solutions for their products.

The following tables translate those provisions into a practical engineering checklist. Each row links to the relevant implementation guide in this handbook, providing a clear, actionable path from the standard's text to the code and configuration required for compliance.

### 3.1 Cybersecurity Provisions (Section 5)

| Obligations | Engineering Tasks | Implementation Guides |
|---|---|---|
| **No universal default passwords**<br/>[§ 5.1][en303645] | All device passwords must be unique per device or defined by the user. Brute-force attack mitigations must be implemented. | [Unique Device Identity](../../implementation/build-phase/unique-device-identity.md)<br/>[Secure Configuration](../../implementation/build-phase/secure-configuration.md) |
| **Implement vulnerability disclosure policy**<br/>[§ 5.2][en303645] | Make a public vulnerability disclosure policy available and act on disclosed vulnerabilities in a timely manner. | [Vulnerability Disclosure](../../implementation/operate-phase/vulnerability-disclosure.md) |
| **Keep software updated**<br/>[§ 5.3][en303645] | Provide a secure update mechanism for all non-immutable software components. The defined support period must be published. | [Secure OTA Updates](../../implementation/build-phase/ota-updates.md)<br/>[Patch Cadence](../../implementation/operate-phase/patch-cadence.md) |
| **Securely store sensitive security parameters**<br/>[§ 5.4][en303645] | Store cryptographic keys and other sensitive parameters securely, using hardware-backed storage where appropriate. Do not hard-code credentials in software. | [Key Provisioning & Storage](../../implementation/build-phase/key-provisioning.md) |
| **Communicate securely**<br/>[§ 5.5][en303645] | Use best practice cryptography to protect data in transit. Authenticate all external network connections where appropriate. | [Key Provisioning & Storage](../../implementation/build-phase/key-provisioning.md) |
| **Minimize exposed attack surfaces**<br/>[§ 5.6][en303645] | Disable unused logical and physical interfaces. Run processes with the least privilege necessary. | [Secure Configuration & Hardening](../../implementation/build-phase/secure-configuration.md) |
| **Ensure software integrity**<br/>[§ 5.7][en303645] | Use a secure boot mechanism to verify the integrity of the device's software. | [Secure Boot](../../implementation/build-phase/secure-boot.md) |
| **Ensure personal data is secure**<br/>[§ 5.8][en303645] | Protect the confidentiality of any personal data transmitted from the device to associated services using best practice cryptography. | [Data Privacy & Secure Deletion](../../implementation/build-phase/data-privacy.md) |
| **Make systems resilient to outages**<br/>[§ 5.9][en303645] | Ensure the device remains functional locally during network outages and reconnects in an orderly fashion after power restoration. | [Device Lifecycle Management](../../tools/device-lifecycle-management.md) |
| **Examine system telemetry data**<br/>[§ 5.10][en303645] | If telemetry data is collected, it should be examined for security anomalies. | [Security Logging & Monitoring](../../implementation/operate-phase/security-logging.md) |
| **Make it easy for users to delete user data**<br/>[§ 5.11][en303645] | Provide a simple mechanism for users to erase all their personal data from the device and any associated services. | [Data Privacy & Secure Deletion](../../implementation/build-phase/data-privacy.md) |
| **Make installation and maintenance easy**<br/>[§ 5.12][en303645] | Provide a simple, secure-by-default setup process and clear guidance for secure configuration. | [User Documentation](../../implementation/build-phase/user-documentation.md)<br/>[Secure Configuration & Hardening](../../implementation/build-phase/secure-configuration.md) |
| **Validate input data**<br/>[§ 5.13][en303645] | Validate data received from user interfaces and network interfaces to prevent system manipulation or failure. | [CI/CD Hardening](../../implementation/operate-phase/cicd-hardening.md) |

### 3.2 Data Protection Provisions (Section 6)

| Obligations | Engineering Tasks | Implementation Guides |
|---|---|---|
| **Transparency of personal data processing**<br/>[§ 6-1][en303645] | Provide clear information about what personal data is processed, for what purpose, by whom, and for how long. | [Data Privacy & Secure Deletion](../../implementation/build-phase/data-privacy.md) |
| **Valid consent for data processing**<br/>[§ 6-2, 6-3A, 6-3B][en303645] | Provide a means to acquire, store, and withdraw user consent for personal data processing. | [Data Privacy & Secure Deletion](../../implementation/build-phase/data-privacy.md) |
| **Data minimization**<br/>[§ 6-4, 6-6, 6-7][en303645] | Limit data collection and processing to only what is necessary for the stated purpose. Use aggregation and anonymization techniques where possible. | [Data Privacy & Secure Deletion](../../implementation/build-phase/data-privacy.md) |

## 4. Assessment & Conformance

Compliance with EN 303 645 is voluntary. However, it serves as the primary technical specification for several mandatory regulatory schemes. Conformance provides a **presumption of conformity** with those regulations, simplifying the path to market access.

The standard itself defines the security outcomes, while a separate specification, **[ETSI TS 103 701][ts103701]**, provides the corresponding test cases for third-party assessment. A manufacturer can submit their product to a testing laboratory, which will perform the tests defined in TS 103 701 to verify that each provision in EN 303 645 has been implemented correctly.

This assessment can be used to demonstrate compliance with regulations such as:
- **EU Radio Equipment Directive (RED)**: EN 303 645 is expected to be the harmonised standard used to show compliance with the RED's cybersecurity articles.
- **UK Product Security and Telecommunications Infrastructure (PSTI) regime**: The UK's regulation is directly based on EN 303 645.
- **Other international schemes**: Similar regulations in Singapore, Finland, and Australia are also based on this standard.

<!-- Citations -->
[en303645]: https://www.etsi.org/deliver/etsi_en/303600_303699/303645/03.01.03_60/en_303645v030103p.pdf "ETSI EN 303 645 - Cyber Security for Consumer Internet of Things: Baseline Requirements"
[ts103701]: https://www.etsi.org/deliver/etsi_ts/103700_103799/103701/01.01.01_60/ts_103701v010101p.pdf "ETSI TS 103 701 - Conformance Assessment of Baseline Requirements"
[tr103621]: https://www.etsi.org/deliver/etsi_tr/103600_103699/103621/01.01.01_60/tr_103621v010101p.pdf "ETSI TR 103 621 - Guide to Cyber Security for Consumer Internet of Things"