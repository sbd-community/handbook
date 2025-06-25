---
title: "Hardware Root of Trust & Provisioning"
sidebar_label: "Hardware RoT & Provisioning"
sidebar_position: 5
tags: [tools, hardware, root-of-trust, rot, puf, provisioning, secure-element]
---
# Tools: Hardware Root of Trust & Provisioning

A **Hardware Root of Trust (RoT)** is a secure, immutable foundation within a device's hardware that the rest of the system can rely on. It's the cornerstone of a zero-trust architecture, providing the basis for critical security functions like secure boot and cryptographic operations.

The tools and platforms in this category help manufacturers either create this identity at the point of manufacture or leverage hardware that already contains a secure identity. This process is fundamental to meeting the device integrity requirements of regulations like the [CRA][cra_annexI] and [IEC 62443][iec_62443].

| Tool | Type | Description |
| :--- | :--- | :--- |
| [QuarkLink](https://www.cryptoquantique.com/products/quarklink/) | 💰 | A hardware-agnostic software platform that automates provisioning by integrating with existing Secure Elements (SEs), TPMs, or other hardware security features. |
| [Zymbit](https://www.zymbit.com/) | 💰 | Provides secure compute modules and security supervisors that act as a hardware root of trust, protecting keys and managing critical security functions for single-board computers. |
| [Microchip Trust Platform](https://www.microchip.com/en-us/products/security/trust-platform) | 💰 | A service for securely provisioning Microchip's secure element and crypto-authentication ICs with credentials and keys before they are shipped to the customer's factory. |
| [NXP EdgeLock SE05x](https://www.nxp.com/products/security-and-authentication/authentication/edgelock-se050-plug-trust-secure-element-family:SE050) | 💰 | A family of secure elements that come pre-provisioned or can be securely provisioned to act as a hardware root of trust for IoT devices. |
| [U-Boot](https://www.denx.de/wiki/U-Boot) | 🐙 | A widely-used open-source bootloader for embedded systems that supports verified boot, a key part of a secure boot implementation. |

<!-- vale off -->
*Type: 💰=Commercial, 🐙=Open-Source*
<!-- vale on -->

<!-- Citations -->
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements"
[iec_62443]: ../../docs/standards/global/iec62443-overview.md
