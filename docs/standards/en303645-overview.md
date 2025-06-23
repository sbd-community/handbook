---
title: ETSI EN 303 645
sidebar_position: 11
tags: [en303645, iot, consumer, security, etsi]
---
# ETSI EN 303 645 – Consumer IoT Security

## 1. Why EN 303 645 matters now

**ETSI EN 303 645** is the globally-recognized baseline standard for the security of consumer-facing "Internet of Things" (IoT) devices. It establishes a practical, risk-based set of 13 high-level security and data protection provisions that manufacturers can implement to protect their products against common cybersecurity threats.

While it began as a European standard, its straightforward, non-prescriptive approach has led to its adoption or use as a foundation for IoT security regulations and certification schemes worldwide, including in the UK, Singapore, and Australia. For companies selling consumer IoT products globally, complying with EN 303 645 is the single most effective step towards meeting multiple international requirements.

:::info Official Text
EN 303 645 is available to download for free directly from ETSI.

- **ETSI EN 303 645 Standard:** [Download from ETSI website][en303645]
:::

**Relationship to EU law**

| Law | How it interacts with EN 303 645 |
|-----|---------------------------|
| **[Radio Equipment Directive (RED)](./red-overview.md)** | EN 303 645 is the primary **harmonised standard** for demonstrating compliance with the cybersecurity requirements of the RED Delegated Act (EU) 2022/30. Manufacturers who follow the provisions of this standard can claim a "presumption of conformity" with the RED's essential requirements for network protection, privacy, and fraud prevention when the deadline arrives on 1 August 2025. |
| **[Cyber-Resilience Act (CRA)](./cra-overview.md)** | The CRA's essential security requirements in Annex I are heavily based on the principles in EN 303 645. It is expected that a future version of this standard (or a new standard based on it) will become a harmonised standard for the CRA. For manufacturers of "Default" category consumer products, compliance with EN 303 645 is an excellent way to prepare for future CRA obligations. |

## 2. A Secure-by-Design Approach to EN 303 645

For manufacturers, EN 303 645 is more than a checklist; it's a guide to implementing a Secure-by-Design strategy. A core principle of this approach is establishing a strong, unique, and tamper-resistant identity for every device at the point of manufacture. This single step is the foundation for meeting numerous provisions throughout the standard.

### 2.1 The Cornerstone: Unique and Tamper-Resistant Device Identity

A robust device identity, often called a hardware root of trust, is the starting point for all device security.

-   **Secure Storage**: This identity must be protected from tampering. Storing it in a secure, persistent manner is a baseline requirement ([`EN303645 §5.4.1`][en303645]). Using hardware that resists physical and software attacks is crucial ([`EN303645 §5.4.2`][en303645]).
-   **No Hard-coded Secrets**: With a unique identity, you can derive other keys needed for device operation. This avoids the dangerous and explicitly forbidden practice of embedding shared, hard-coded credentials in device software ([`EN303645 §5.4.3`][en303645]).
-   **Lifecycle Management**: Securely provisioning this identity into the device during manufacturing is the first, critical step in the lifecycle management of all other security credentials ([`EN303645 §5.5.8`][en303645]).

### 2.2 Leveraging Identity for Secure Operations

Once a device has a trustworthy identity, it unlocks capabilities for secure communication and maintenance.

-   **Secure Updates**: A unique identity allows the backend service to authenticate the device before sending a firmware update. This protects your intellectual property and prevents attackers from reverse-engineering updates ([`EN303645 §5.3.10`][en303645]). While the standard requires devices to have a *model* designation ([`EN303645 §5.3.16`][en303645]), a unique per-device identifier is a Secure-by-Design best practice that enables individualized management.
-   **Authenticated Communication**: Secure channels rely on authentication. A unique device identity is essential for mutual authentication protocols like mTLS ([`EN303645 §5.5.1`][en303645]), which in turn protects the confidentiality of critical security parameters and other data sent over the network ([`EN303645 §5.5.6`][en303645], [`§5.5.7`][en303645]).

### 2.3 Enhancing Usability and Resilience

A strong identity framework also improves the user experience and the robustness of the entire system.

-   **Simplified Onboarding**: Uniquely identified devices can be securely and automatically provisioned, which simplifies installation and maintenance for the end-user ([`EN303645 §5.12.1`][en303645]). This "zero-touch" setup is both more secure and more user-friendly.
-   **DDoS Resistance**: By requiring device authentication, your cloud services can reject connection attempts from unauthorized or fraudulent devices. This significantly reduces the attack surface for Distributed Denial of Service (DDoS) attacks, making your system more resilient ([`EN303645 §5.9.3`][en303645]).

<!-- Citations -->
[en303645]: https://www.etsi.org/deliver/etsi_en/303600_303699/303645/03.01.03_60/en_303645v030103p.pdf "ETSI EN 303 645 - Cyber Security for Consumer Internet of Things: Baseline Requirements"