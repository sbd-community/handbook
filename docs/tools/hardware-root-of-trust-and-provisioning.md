---
title: "Hardware Root of Trust & Provisioning"
sidebar_label: "Hardware RoT & Provisioning"
sidebar_position: 5
tags: [tools, hardware, root-of-trust, rot, puf, provisioning, secure-element]
---
# Hardware Root of Trust & Provisioning Tools

A **Hardware Root of Trust (RoT)** is a secure, immutable foundation within a device's hardware. It provides the basis for all other security functions, most notably **on-device key creation/storage** and **secure boot**. By anchoring the device's identity in hardware, it becomes the cornerstone of a zero-trust architecture.

The tools and platforms in this category help manufacturers either create this identity at the point of manufacture or leverage hardware that already contains a secure identity. This process, known as **[Key Provisioning](../implementation/build-phase/key-provisioning.md)**, is fundamental to meeting regulatory requirements like those in the CRA and IEC 62443, as it ensures the integrity of the device from its very first instruction.

| Tool / Platform | Type | Description |
| :--- | :--: | :---------- |
| [**QuarkLink**](https://www.cryptoquantique.com/products/quarklink/) | 💰 | A software platform that automates the provisioning of devices by integrating with existing hardware security features like Secure Elements (SEs) or TPMs to manage key generation and storage. |
| [**Zymbit**](https://www.zymbit.com/) | 💰 | Provides secure compute modules and security supervisors that act as a hardware root of trust, protecting keys and managing critical security functions for single-board computers. |
| [**Microchip Trust Platform**](https://www.microchip.com/en-us/products/security/trust-platform) | 💰 | A service for securely provisioning Microchip's secure element and crypto-authentication ICs with credentials and keys before they are shipped to the customer's factory. |
| [**NXP EdgeLock SE05x**](https://www.nxp.com/products/security-and-authentication/authentication/edgelock-se050-plug-trust-secure-element-family:SE050) | 💰 | A family of secure elements that come pre-provisioned or can be securely provisioned to act as a hardware root of trust for IoT devices. |
