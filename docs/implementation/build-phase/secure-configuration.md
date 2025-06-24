---
title: "Secure Configuration & Hardening"
sidebar_label: "Secure Configuration"
sidebar_position: 1
tags: [secure-default, hardening, attack-surface, cra, secure-by-design]
---
# Guide: Secure Configuration & Hardening

## 1. The 'Why': Secure by Default as a Core Principle

Secure Configuration, also known as hardening, is a foundational element of a Secure-by-Design strategy. It ensures a product is delivered to the customer in its most secure possible state out-of-the-box. This is not merely a best practice but a core legal requirement under the EU's cybersecurity framework.

### 1.1. The Regulatory Requirement

The **[Cyber-Resilience Act (CRA)](./../../standards/eu/cra-overview.md)** explicitly mandates this approach through two key essential requirements in Annex I:

-   **Secure by Default ([§ 1 (2)(b)][cra_annexI])**: The CRA requires that products be "placed on the market with a secure-by-default configuration." This is further detailed in the BSI's technical guideline as requiring a configuration that "can be fully restored via a reset function" ([REQ_ER 3][bsi_tr_03183_p1]).
-   **Attack Surface Reduction ([§ 1 (2)(j)][cra_annexI])**: The act also requires products to be "designed, developed and produced to limit attack surfaces." The BSI guideline reinforces this, stating manufacturers must secure interfaces and disable unused ports and services ([REQ_ER 11][bsi_tr_03183_p1]).

Any insecure setting should require a deliberate, explicit action from the user to enable, and only after being warned of the potential risks.

### 1.2. What is Secure Configuration?

Secure configuration is the practical implementation of the **principle of least privilege**. It is a systematic process to ensure a product only has the permissions, features, and network exposure that are absolutely essential for its core functionality.

This involves reviewing every potential entry point for an attacker—both physical and digital—and disabling or restricting everything that is not critical for the product's intended use.

## 2. Key Hardening Practices

Hardening a device involves a systematic review of every potential entry point for an attacker—both physical and digital—and disabling or restricting everything that is not essential.

### 2.1 Disable Physical Interfaces
Physical access is a powerful vector for attackers. Debug ports that are essential for development can become critical vulnerabilities in a production device.
- **JTAG/SWD:** These powerful debugging interfaces provide low-level access to the CPU and memory. They **must be permanently disabled** on production hardware, for example by blowing a specific eFuse on the SoC.
- **UART/Serial Console:** A serial console often provides direct access to a root shell. This **must be disabled** in the production firmware build.
- **USB Ports:** If a USB port is only for power, it should be configured as a power-only port. If it is for data, it should have robust input validation to prevent malicious inputs.

### 2.2 Minimize Network Services
Every open network port is a potential door for an attacker.
- **Port Scanning:** Scan your device to identify all listening TCP/UDP ports.
- **Service Justification:** For every open port, you must be able to justify why it is essential for the product's operation.
- **Disable Unnecessary Services:** Services like `telnet` or unencrypted `ftp` are insecure and should never be enabled. Administrative services like `SSH` should be disabled by default if not required for the primary user, or configured with strong, unique passwords if they are.

### 2.3 Eliminate Default Passwords
This is one of the most critical requirements of all modern IoT regulations.
- **No Universal Defaults:** The device **must not** ship with a universal default password like `admin`/`admin`.
- **Force User Change:** The device must force the user to set a strong, unique password during the initial setup process.
- **Unique Per-Device:** If a password is required for initial access (e.g., printed on a label), it must be unique for every single device produced.

## 3. Compliance Checklist

To ensure your product is sufficiently hardened to meet regulatory requirements, ensure you can answer "yes" to the following:

- [ ] **No Default Credentials:** Does the device ship without any universal default passwords?
- [ ] **Physical Ports Secured:** Are all hardware debug interfaces (JTAG, UART) permanently disabled in production units?
- [ ] **Minimal Network Exposure:** Have you scanned the device for open ports and disabled all non-essential services?
- [ ] **Secure Services by Default:** Are all enabled network services configured securely (e.g., using TLS, requiring strong authentication)?
- [ ] **Principle of Least Privilege:** Do all software processes on the device run with the minimum permissions necessary to function?
- [ ] **Hardening Guide:** Is the secure configuration of the device (e.g., which ports are open, what services are running) documented in the technical file?

<!-- Citations -->
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements"
[bsi_tr_03183_p1]: https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI-TR-03183-1-0_9_0.pdf "BSI TR-03183 Part 1: General requirements"