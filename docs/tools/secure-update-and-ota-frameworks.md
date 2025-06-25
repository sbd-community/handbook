---
title: "Secure Update & OTA Frameworks"
sidebar_label: "Secure Update & OTA"
sidebar_position: 8
tags: [tools, ota, secure-update, firmware-update, security, cra, iec62443, open-source, commercial]
---
# Tools: Secure Update & OTA Frameworks

## 1. Introduction

Secure Over-the-Air (OTA) update capabilities are a legal and technical necessity for connected devices. They allow manufacturers to remotely deploy security patches and new features, which is a fundamental requirement of modern cybersecurity regulations.

For a detailed explanation of the compliance requirements for OTA updates, see our guide on **[OTA Updates & Patching](../implementation/build-phase/ota-updates.md)**.

## 2. Tooling Landscape

The following tools provide end-to-end frameworks for deploying OTA updates to a fleet of devices. They handle the complexities of update creation, secure delivery, and on-device installation, ensuring that updates are applied reliably and without introducing new security risks.

| Tool | Type | Description |
| :--- | :--- | :--- |
| [QuarkLink](https://www.cryptoquantique.com/products/quarklink/) | 💰 | A comprehensive IoT security platform that includes a secure OTA update module for creating and deploying signed firmware updates to devices in the field. |
| [Mender](https://mender.io/) | 🐙💰 | An open-source, end-to-end OTA software update manager for connected Linux devices, with both a self-hosted and a managed commercial offering. |
| [The Update Framework (TUF)](https://theupdateframework.io/) | 🐙 | An open-source specification and framework that provides a comprehensive, resilient design for securing software update systems. |
| [swupdate](https://github.com/sbabic/swupdate) | 🐙 | A Linux Update agent with a focus on creating a single, atomic update that is resilient against power loss. It supports signed updates and multiple update strategies. |
| [RAUC](https://rauc.io/) | 🐙 | A lightweight, open-source update framework for embedded Linux systems that is safe, secure, and reliable. It supports cryptographic signatures and atomic updates. |
| [Balena](https://www.balena.io/) | 💰 | A complete IoT fleet management platform that includes robust OTA update capabilities for Linux-based devices, focusing on containerized applications. |
| [Thistle Technologies](https://thistle.tech/) | 💰 | A commercial security platform providing secure OTA updates for embedded Linux and Zephyr, with a memory-safe client and fail-safe fallbacks. |
| [Uptane](https://uptane.github.io/) | 🐙 | An extension of TUF specifically designed for the high-security demands of automotive software updates. |

<!-- vale off -->
*Type: 💰=Commercial, 🐙=Open-Source*
<!-- vale on -->
