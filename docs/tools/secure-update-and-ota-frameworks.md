---
title: "Secure Update & OTA Frameworks"
sidebar_label: "Secure Update & OTA"
sidebar_position: 8
tags: [tools, ota, secure-update, firmware, open-source, commercial]
---
# Tools: Secure Update & OTA Frameworks

A secure Over-the-Air (OTA) update mechanism is a foundational requirement for any connected device. It is essential for delivering security patches, bug fixes, and new features throughout the product's lifecycle, as mandated by laws like the [CRA Art. 13][cra_art13].

The tools below provide frameworks and platforms for building robust, secure, and reliable update systems.

| Tool | Type | Description |
| :--- | :--- | :--- |
| [QuarkLink](https://www.cryptoquantique.com/products/quarklink/) | 💰 | A full-lifecycle IoT security platform that includes a secure OTA update service for delivering firmware and software updates to deployed devices. |
| [Mender](https://mender.io/) | 🐙💰 | An open-source (Apache 2.0) OTA software update manager for connected Linux devices. Offers both self-hosted and managed commercial options with enterprise features. |
| [SWUpdate](https://swupdate.org/) | 🐙 | A Linux Update agent with a focus on creating a single, monolithic update package. Highly flexible and supports a wide range of hardware and update strategies. |
| [RAUC](https://rauc.io/) | 🐙 | A lightweight update framework for Linux that is fail-safe, secure, and atomic. It works by managing redundant boot slots (A/B). |
| [Thistle Technologies](https://thistle.tech/) | 💰 | A commercial security platform that provides a secure OTA update solution for embedded Linux and Zephyr RTOS, with a focus on fail-safe fallbacks and a memory-safe on-device client. |
| [The Update Framework (TUF)](https://theupdateframework.io/) | 🐙 | A CNCF-graduated project that provides a specification and libraries for securing software update systems, designed to be resilient against sophisticated attacks. |
| [Uptane](https://uptane.github.io/) | 🐙 | An extension of TUF specifically designed for the high-security demands of automotive software updates, protecting against attacks even from a compromised repository. |

<!-- vale off -->
*Type: 💰=Commercial, 🐙=Open-Source*
<!-- vale on -->

<!-- Citations -->
[cra_art13]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_13 "CRA Article 13 – Obligations of manufacturers"
