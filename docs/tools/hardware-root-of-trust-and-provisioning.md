---
title: "Hardware Root of Trust & Provisioning"
sidebar_label: "Hardware RoT & Provisioning"
sidebar_position: 5
tags: [tools, hardware, root-of-trust, rot, puf, provisioning, secure-element]
---
# Tools: Hardware Root of Trust & Provisioning

## 1. Introduction

A Hardware Root of Trust (RoT) is a secure, immutable foundation within a device's hardware that the rest of the system can rely on. It is the cornerstone for critical security functions like **[Secure Boot](../implementation/build-phase/secure-boot.md)** and cryptographic operations.

For a detailed explanation of the compliance requirements that a Hardware RoT helps to meet, see our implementation guides on **[Unique Device Identity](../implementation/build-phase/unique-device-identity.md)** and **[Secure Boot](../implementation/build-phase/secure-boot.md)**.

## 2. Build vs. Buy: A Two-Part Decision

The choice in this category breaks down into two distinct parts: the hardware itself, and the software ecosystem required to use it.

### Part 1: The Silicon (The "Must Buy")
The first part of the decision is straightforward: **you must buy a hardware component**. A manufacturer cannot build their own secure microcontrollers from scratch. The design, fabrication, and certification of secure silicon is a multi-billion dollar industry requiring immense, specialized expertise.

### Part 2: The Integration (The Real "Build vs. Buy")
Once you have selected a hardware RoT, the real strategic choice emerges: how do you build the secure processes, like provisioning and boot, that rely on it?

-   **The "Build" Approach**: This involves buying the secure silicon and integrating it yourself. Your team would be responsible for writing the low-level drivers to communicate with the chip, integrating an open-source bootloader like U-Boot, creating a process for signing firmware images, and managing the secure distribution of keys and certificates. This path offers maximum control but requires deep, specialized expertise and significant engineering time.

-   **The "Buy" Approach**: This involves using a commercial platform that provides a full software stack on top of the hardware. These platforms provide an SDK that abstracts away the low-level hardware complexity, along with cloud services to manage the entire identity lifecycle. This path accelerates time-to-market and reduces risk by relying on a vendor's expertise, but involves license costs and vendor lock-in.

For most teams, buying an integrated platform is the most secure and cost-effective path to achieving a compliant Secure Boot implementation.

## 3. Tooling Landscape

The tools and platforms in this category help manufacturers either create this identity at the point of manufacture or leverage hardware that already contains a secure identity, which is the essential first step in building a **Secure Boot** process.

| Tool | Type | Description |
| :--- | :--- | :--- |
| [QuarkLink](https://www.cryptoquantique.com/products/quarklink/) | 💰 | A hardware-agnostic software platform that automates the provisioning of credentials and keys to a hardware RoT. It provides an SDK and tools to simplify the implementation of on-device security features like Secure Boot. |
| [Zymbit](https://www.zymbit.com/) | 💰 | Provides secure compute modules and security supervisors that act as a hardware root of trust, protecting keys and managing critical security functions for single-board computers. |
| [Microchip Trust Platform](https://www.microchip.com/en-us/products/security/trust-platform) | 💰 | A service for securely provisioning Microchip's secure element and crypto-authentication ICs with credentials and keys before they are shipped to the customer's factory. |
| [NXP EdgeLock SE05x](https://www.nxp.com/products/security-and-authentication/authentication/edgelock-se050-plug-trust-secure-element-family:SE050) | 💰 | A family of secure elements that come pre-provisioned or can be securely provisioned to act as a hardware root of trust for IoT devices. |
| [U-Boot](https://www.denx.de/wiki/U-Boot) | 🐙 | A widely-used open-source bootloader for embedded systems. Its 'Verified Boot' feature is a key component for building a compliant Secure Boot implementation. |

<!-- vale off -->
*Type: 💰=Commercial, 🐙=Open-Source*
<!-- vale on -->
