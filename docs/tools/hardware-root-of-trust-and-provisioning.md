---
title: "Hardware Root of Trust & Provisioning"
sidebar_label: "Hardware RoT & Provisioning"
sidebar_position: 5
tags: [tools, hardware, root-of-trust, rot, puf, provisioning, secure-element]
---
# Tools: Hardware Root of Trust & Provisioning

## 1. Introduction

A Hardware Root of Trust (RoT) is a secure, immutable foundation within a device's hardware that the rest of the system can rely on. It is the cornerstone of a zero-trust architecture, providing the basis for critical security functions like secure boot and cryptographic operations.

For a detailed explanation of the compliance requirements that a Hardware RoT helps to meet, see our guide on **[Unique Device Identity](../implementation/build-phase/unique-device-identity.md)**.

## 2. Tooling Landscape

The tools and platforms in this category help manufacturers either create this identity at the point of manufacture or leverage hardware that already contains a secure identity.

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

## 3. Build vs. Buy: A Clear Choice

The decision in this category is straightforward: **you must buy the core silicon**.

A manufacturer cannot "build" their own secure microcontrollers (like a Secure Element or TPM) from scratch. The design, fabrication, and certification of secure silicon is a multi-billion dollar industry requiring immense, specialized expertise.

The only practical path is to **buy** a hardware component that can serve as a Root of Trust. The subsequent decision is whether to build the complex provisioning infrastructure around it or to buy an integrated platform that handles the entire device identity lifecycle. For all but the largest organizations, buying a complete solution that combines the hardware and a management platform is the most secure and cost-effective path to compliance.
