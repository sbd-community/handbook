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

This guide covers two foundational principles of the **[Cyber-Resilience Act (CRA)](./../../standards/eu/cra-overview.md)**: placing products on the market with a **Secure-by-Default Configuration** and ensuring they are designed to **Limit Attack Surfaces**. While these are universal goals, their implementation depends on the nature of your product.

#### Secure-by-Default Configuration ([§ 1 (2)(b)][cra_annexI])

This requirement is about ensuring the product's out-of-the-box state is as secure as possible.

-   **Is there an exception?** Yes, but it's very specific. The BSI guideline for implementing a resettable, secure default configuration ([REQ_ER 3.1][bsi_tr_03183_p1]) includes the condition: "The TOE [product] can be configured." If your product is a fixed-function device with **no user-configurable settings**, then this requirement does not apply in the same way. Its configuration is not "default"; it is constant and immutable.

-   **Example:** A simple industrial sensor that is pre-programmed at the factory with fixed network settings and has no web interface, user accounts, or other configurable parameters.

#### Limiting Attack Surfaces ([§ 1 (2)(j)][cra_annexI])

This requirement is about minimizing the number of entry points for an attacker. The BSI guideline ([REQ_ER 11.1][bsi_tr_03183_p1]) clarifies this means deactivating "interfaces and services not required for usage by default."

-   **Is there an exception?** The exception is built into the rule. You are not required to disable interfaces that are **essential** for the product's core function. The task is to review every interface (physical ports like JTAG/UART, network services like SSH/HTTP) and disable any that are not strictly necessary for the intended use case.

-   **Example:** An enterprise network device might require an SSH port to be open by default for initial administration. In this case, the port should not be disabled, but it **must** be secured (e.g., require a unique, strong password to be set on first login). Conversely, a consumer smart plug has no legitimate need for an open SSH port, so it must be disabled.

#### The Bottom Line

For any product that allows user configuration, a secure default state is **mandatory**. For any product with multiple physical or network interfaces, a systematic process of disabling non-essential services is **mandatory**. The burden is on the manufacturer to document which settings and interfaces are essential and to ensure that all others are disabled by default.

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