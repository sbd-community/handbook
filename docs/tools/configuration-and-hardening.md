---
title: "Configuration & Hardening"
sidebar_label: "Configuration & Hardening"
sidebar_position: 6
tags: [tools, hardening, configuration, compliance, scanning, open-source]
---
# Tools: Configuration & Hardening

Implementing a **[Secure Configuration](../implementation/build-phase/secure-configuration.md)** involves minimizing the attack surface of a device. While many hardening tasks are manual design decisions, several types of tools can help automate the process of verifying a system's configuration and security posture.

These tools can scan for open ports, check for misconfigurations, and help ensure that your production firmware doesn't contain unnecessary files or services. This is a key part of complying with the requirements of [CRA Annex I][cra_annexI].

| Tool | Type | Description |
| :--- | :--- | :--- |
| [Nmap](https://nmap.org/) | 🐙 | The de facto industry standard for network mapping and port scanning. Essential for verifying which network services are exposed on your device. |
| [OpenSCAP](https://www.open-scap.org/) | 🐙 | An open-source ecosystem of tools for implementing and enforcing the Security Content Automation Protocol (SCAP). It can be used to audit a system against a security baseline. |
| [Lynis](https://cisofy.com/lynis/) | 🐙 | A security auditing tool for Unix-based systems. It performs an extensive health scan to detect security issues and provide hardening suggestions. |
| [Trivy](https://github.com/aquasecurity/trivy) | 🐙 | While primarily a vulnerability scanner, Trivy can also detect misconfigurations in Infrastructure as Code (IaC) and other configuration files. |
| [Tenable Nessus](https://www.tenable.com/products/nessus) | 💰 | A widely used commercial vulnerability scanner that also provides detailed configuration and compliance auditing. |

<!-- vale off -->
*Type: 💰=Commercial, 🐙=Open-Source*
<!-- vale on -->

<!-- Citations -->
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements" 