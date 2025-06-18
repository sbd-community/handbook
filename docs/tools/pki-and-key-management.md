---
title: "PKI & Key Management"
sidebar_label: "PKI & Key Management"
sidebar_position: 3
tags: [pki, key-management, hsm, certificate-authority, cra, iec62443]
---

# PKI & Key Management Platforms

A **Public Key Infrastructure (PKI)** is the backbone for managing the lifecycle of digital certificates that enable secure communication and authentication. For a product manufacturer, establishing or integrating with a PKI is essential for securely provisioning the **[Operational Identities](../implementation/build-phase/unique-device-identity.md)** of your devices. While the **[Hardware-Based Root Identity](../implementation/build-phase/unique-device-identity.md)** is typically established at the silicon level, the PKI is what allows you to issue, manage, and revoke the operational certificates your devices will use in the field. This is typically achieved via a Certificate Signing Request (CSR) workflow during manufacturing.

The following platforms provide the infrastructure needed to issue and manage device certificates at scale.

| Tool / Provider | Type | Description |
| :--- | :--: | :--- |
| [**Keyfactor EJBCA & Command**](https://www.keyfactor.com/products/ejbca-enterprise/) | <i class="fa-solid fa-code-branch"></i> | An open-source, enterprise-grade CA software solution (EJBCA) paired with a commercial Certificate Lifecycle Management (CLM) platform (Command). Supports a wide range of protocols, including ACME, SCEP, and EST. |
| [**Nexus Go IoT**](https://www.nexusgroup.com/solutions/online-services/iot/) | <i class="fa-solid fa-dollar-sign"></i> | A PKI service delivered from the cloud, specifically designed for issuing and managing certificates for IoT devices. It automates certificate management, allowing devices to be onboarded securely to IoT platforms like Azure IoT Hub and AWS IoT Core. |
| [**DigiCert IoT Trust Manager**](https://www.digicert.com/iot-trust-manager) | <i class="fa-solid fa-dollar-sign"></i> | A comprehensive platform that combines a high-availability CA with device and certificate lifecycle management. It is designed to handle the scale of large IoT deployments and supports flexible deployment models. |
| [**Commscope Sentry PKIWorks**](https://www.commscopesentry.com/solutions/pkiworks-solutions) | <i class="fa-solid fa-dollar-sign"></i> | An on-premise, enterprise-grade PKI from DigiCert for managing device and network element certificates. |
| [**Kudelski IoT keyStream**](https://www.kudelski-iot.com/services-and-systems/keystream-iot-security-system) | <i class="fa-solid fa-dollar-sign"></i> | An end-to-end security solution that provides device-to-cloud data protection. It includes secure identity provisioning, PKI management, and a client library to integrate into device firmware, abstracting much of the complexity from the developer. |
| [**QuarkLink**](https://www.cryptoquantique.com/products/quarklink/) | <i class="fa-solid fa-dollar-sign"></i> | A commercial IoT security platform for provisioning, onboarding, and lifecycle management, including OTA updates. |

### Key Protocols for IoT Certificate Management
These protocols are commonly used to automate the process of enrolling devices and renewing certificates.

-   **SCEP (Simple Certificate Enrollment Protocol):** An older but widely supported protocol for certificate enrollment. It is a simple, request-response protocol.
-   **EST (Enrollment over Secure Transport):** A more modern and secure successor to SCEP. It uses TLS for all communication and has become a popular choice for IoT use cases. `EST-CoaP` is a variant designed for constrained devices using CoAP.
-   **ACME (Automated Certificate Management Environment):** The protocol made famous by Let's Encrypt for automating website certificate issuance. It is increasingly being adopted for IoT devices due to its robust automation capabilities.
-   **CMP (Certificate Management Protocol):** A comprehensive and feature-rich protocol for all aspects of certificate lifecycle management, though its complexity can be a barrier to entry for some use cases.

<!-- Citations --> 