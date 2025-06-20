---
title: "Secure Update & OTA Frameworks"
sidebar_label: "Secure Update & OTA"
sidebar_position: 9
tags: [tools, ota, secure-update, firmware, open-source, commercial]
---
# Secure Update & OTA Frameworks

A secure **Over-the-Air (OTA)** update mechanism is a critical piece of infrastructure for maintaining product security throughout its lifecycle. The **[Cyber-Resilience Act](../standards/cra-overview.md)** requires manufacturers to handle vulnerabilities "without delay" and provide security updates for a defined support period ([CRA Art. 13 § 8][cra_art13]). An OTA framework is the primary means of fulfilling this obligation.

These tools and frameworks provide the building blocks for creating a robust update system. They handle the complexities of delivering firmware to devices, ensuring updates are properly signed and verified, and managing the update process across a fleet of devices, including rollbacks in case of failure.

| Tool | Type | Description |
| :--- | :--: | :---------- |
| [**QuarkLink**](https://www.cryptoquantique.com/products/quarklink) | 💰 | A commercial IoT security platform for provisioning, onboarding, and lifecycle management, including OTA updates. |
| [**SWUpdate**](https://sbabic.github.io/swupdate/) | 🐙 | A widely-used, feature-rich update framework for embedded Linux devices. |
| [**Mender**](https://mender.io/) | 🐙 | An end-to-end OTA software update platform with both open-source and commercial offerings. |
| [**The Update Framework (TUF)**](https://theupdateframework.io/) | 🐙 | A CNCF-graduated project that provides a specification and libraries for securing software update systems. |
| [**Uptane**](https://uptane.github.io/) | 🐙 | An extension of TUF specifically designed for the high-security demands of automotive software updates. |
| [**Sigstore**](https://www.sigstore.dev/) | 🐙 | A Linux Foundation project for signing, verifying, and proving the provenance of software artifacts. | 

<!-- Citations -->
[cra_art13]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_13 "CRA Article 13 – Obligations of manufacturers"
