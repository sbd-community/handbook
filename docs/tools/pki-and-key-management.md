---
title: "PKI & Key Management"
sidebar_label: "PKI & Key Management"
sidebar_position: 7
tags: [pki, key-management, hsm, certificate-authority, cra, iec62443, tools, certificates, open-source, commercial]
---
# Tools: PKI & Key Management

## 1. Introduction

A Public Key Infrastructure (PKI) is the backbone for managing the lifecycle of digital certificates that enable secure communication and authentication. For a product manufacturer, establishing or integrating with a PKI is essential for securely provisioning device identities.

For a detailed explanation of the compliance requirements for key management, see our guide on **[Key Provisioning & Storage](../implementation/build-phase/key-provisioning.md)**.

## 2. Tooling Landscape

The following platforms provide the infrastructure needed to issue and manage device certificates at scale, often via automated protocols like SCEP, EST, or ACME.

| Tool | Type | Description |
| :--- | :--- | :--- |
| [QuarkLink](https://www.cryptoquantique.com/products/quarklink/) | 💰 | A comprehensive IoT security platform that includes a robust, scalable PKI for issuing and managing device certificates throughout the product lifecycle. |
| [Keyfactor EJBCA & Command](https://www.keyfactor.com/products/ejbca-enterprise/) | 🐙💰 | An open-source, enterprise-grade CA software solution (EJBCA) paired with a commercial Certificate Lifecycle Management (CLM) platform (Command). |
| [Nexus Go IoT](https://www.nexusgroup.com/solutions/online-services/iot/) | 💰 | A PKI service delivered from the cloud, specifically designed for issuing and managing certificates for IoT devices to automate onboarding. |
| [DigiCert IoT Trust Manager](https://www.digicert.com/iot-trust-manager) | 💰 | A comprehensive commercial platform that combines a high-availability CA with device and certificate lifecycle management at large scale. |
| [Kudelski IoT keyStream](https://www.kudelski-iot.com/services-and-systems/keystream-iot-security-system) | 💰 | An end-to-end security solution that provides device-to-cloud data protection, including secure identity provisioning and PKI management. |

<!-- vale off -->
*Type: 💰=Commercial, 🐙=Open-Source*
<!-- vale on --> 

## 3. Build vs. Buy: Key Considerations

Operating a Certificate Authority (CA) is a high-stakes, high-cost endeavor that requires significant cryptographic expertise and robust physical and procedural security. For all but the largest and most mature organizations, buying a PKI service is the recommended approach.

-   **Security & Expertise**: Running a secure CA is a specialized discipline. A single mistake in key management or procedure can compromise your entire device fleet. Commercial providers have dedicated teams and audited infrastructure focused solely on this task.
-   **Cost & Complexity**: The cost of building and maintaining a secure PKI, including Hardware Security Modules (HSMs), secure facilities, and personnel, is extremely high. Commercial services provide a much lower and more predictable TCO.
-   **Compliance & Audits**: Reputable commercial PKI providers are typically already compliant with standards like WebTrust and ETSI, which provides a strong foundation for demonstrating compliance with the CRA.
-   **Scalability & Automation**: Commercial platforms are built to handle certificate issuance and management at IoT scale, with ready-to-use automation protocols (SCEP, EST, ACME) that would require significant engineering effort to build in-house. 