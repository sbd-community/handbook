---
title: "Secure Configuration & Hardening"
sidebar_label: "Secure Configuration"
sidebar_position: 1
tags: [secure-default, hardening, attack-surface, cra, secure-by-design]
---
# Guide: Secure Configuration & Hardening

## 1. Introduction to Secure Configuration

### 1.1. What is Secure Configuration?

Secure Configuration, also known as hardening, is the practical implementation of a Secure-by-Design strategy. It is a systematic process to ensure a product is delivered to the customer in its most secure possible state out-of-the-box by applying the principle of least privilege.

This means reviewing every potential entry point for an attacker—both physical and digital—and disabling or restricting everything that is not absolutely essential for the product's core functionality.

### 1.2. The Regulatory Requirement

The **[Cyber-Resilience Act (CRA)](./../../standards/eu/cra-overview.md)** explicitly mandates this approach through two key essential requirements in Annex I:

-   **Secure by Default ([§ 1 (2)(b)][cra_annexI])**: The CRA requires that products be "placed on the market with a secure-by-default configuration." This is further detailed in the BSI's technical guideline as requiring a configuration that "can be fully restored via a reset function" ([REQ_ER 3][bsi_tr_03183_p1]).
-   **Attack Surface Reduction ([§ 1 (2)(j)][cra_annexI])**: The act also requires products to be "designed, developed and produced to limit attack surfaces." The BSI guideline reinforces this, stating manufacturers must secure interfaces and disable unused ports and services ([REQ_ER 11][bsi_tr_03183_p1]).

Any insecure setting should require a deliberate, explicit action from the user to enable, and only after being warned of the potential risks.

### 1.3. Do I Really Need to Do This?

**Yes. This is one of the most fundamental principles of building a secure product and a direct legal requirement.** Shipping a product with an insecure default configuration is a major source of vulnerabilities and is explicitly forbidden by modern regulations.

-   **It's a Legal Mandate:** The **[Cyber-Resilience Act (CRA)](../../standards/eu/cra-overview.md)** states that products must be "placed on the market with a secure-by-default configuration." Standards like **[ETSI EN 303 645](https://www.etsi.org/deliver/etsi_en/303600_303699/303645/02.01.01_60/en_303645v020101p.pdf)** also ban universal default passwords. This is a clear, non-negotiable requirement for market access.
-   **Protects Non-Expert Users:** Most users are not security experts. They will not change complex settings and will assume the product is secure out of the box. Secure-by-default protects them from being easy targets for automated attacks that scan for devices with weak or default credentials.
-   **Reduces Attack Surface:** Hardening is the practical application of attack surface reduction. By disabling unused ports and services, you give attackers fewer opportunities to gain a foothold on your device. Every open port is a potential vulnerability.
-   **Prevents Simple Mistakes:** A hardened configuration prevents simple but critical mistakes, like leaving a debug port open on a production device, which could give an attacker complete control.

Shipping a product in its most secure state by default is the most effective way to protect your customers and comply with the law. Any insecure setting should require a deliberate, informed action by the user to enable.

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