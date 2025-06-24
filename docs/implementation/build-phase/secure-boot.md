---
title: "Secure Boot Implementation"
sidebar_label: "Secure Boot"
sidebar_position: 3
tags: [secure-boot, root-of-trust, chain-of-trust, cra, integrity]
---
# Guide: Implementing Secure Boot

## 1. The 'Why': Guaranteeing Software Integrity

**Secure Boot** is a critical security mechanism that prevents unauthorized code from running on a device. It is the primary technical control for ensuring the integrity of a product's software, from the moment it powers on.

This is a foundational requirement of modern cybersecurity regulations, which mandate that manufacturers take steps to prevent malicious modification of their products.

### 1.1. The Regulatory Requirement

The legal basis for implementing secure boot is clear and direct:

-   **Integrity Protection ([Annex I § 1 (2)(f)][cra_annexI])**: The **[Cyber-Resilience Act (CRA)](./../../standards/eu/cra-overview.md)** requires manufacturers to "protect the integrity of...commands, programs and configuration against any manipulation or modification not authorised by the user."
-   The BSI TR-03183-1 reinforces this, requiring that the integrity of "all code, data, and configuration" be protected by "state-of-the-art mechanisms" and that any violations are detected ([REQ_ER 7][bsi_tr_03183_p1]).

Secure boot is the state-of-the-art mechanism for fulfilling this requirement. It provides auditable proof that only the manufacturer's authentic software is executing on the device.

### 1.2. Do I Really Need to Do This?

This is a fair question. Could the outcome of a threat model ever justify *not* implementing secure boot?

While theoretically possible, the answer for any modern connected device falling under the CRA is almost certainly **no**. Secure boot is considered a foundational, non-negotiable control for several reasons:

-   **State of the Art:** It is the universally accepted state-of-the-art mechanism for ensuring software integrity at boot time. It would be extremely difficult to argue to a regulator that any lesser alternative meets this requirement.
-   **The Root of All Trust:** If the initial boot code can be tampered with, no other security control on the device can be trusted. Encryption, access control, and secure updates all depend on the underlying code being authentic.

A threat model might only conclude that secure boot is unnecessary in a very limited set of circumstances, such as a device with:
-   No updateable software whatsoever (e.g., all code is in a true Read-Only Memory).
-   No sensitive data, no secret keys, and no ability to impact other systems (i.e., it cannot be used in a DDoS attack).

For any product that has firmware that can be updated, stores secrets, or controls sensitive functions, the answer is clear: **Yes, you absolutely need to do this.**

### 1.3. What is Secure Boot?

Secure Boot works by creating a **chain of trust**, starting from an immutable hardware anchor and extending through every piece of software loaded during the boot sequence—from the initial bootloader to the operating system kernel and applications.

The process cryptographically verifies the signature of each software component before it is executed. If any signature is invalid or the software has been tampered with, the boot process is halted.

## 2. Core Concepts: The Chain of Trust

The entire secure boot process depends on a single, unchangeable starting point known as the **Hardware Root of Trust (HRoT)**.

### 2.1 Anchoring Trust in Hardware
The chain begins with a public key that is permanently burned into the device's silicon (e.g., into One-Time-Programmable (OTP) memory). This key corresponds to the private key used by the manufacturer to sign the initial bootloader code. This anchor is part of the device's core **[Hardware-Based Identity](./unique-device-identity.md)**. Most modern System-on-a-Chip (SoC) microcontrollers contain a small piece of code in a read-only memory (ROM), often called the "Boot ROM". When the device powers on, this is the very first code that runs. Its job is to verify the next stage bootloader found in flash memory.

### 2.2 The Links in the Chain
-   **The First Link:** At power-on, the immutable Boot ROM code on the SoC starts. It loads the next-stage bootloader from flash.
-   **Subsequent Links:** If the first bootloader is authentic, it is loaded into memory. It then verifies the signature of the next component (e.g., the operating system kernel) using a key that it has been provisioned with. This process continues until the main application is running.

### 2.3 Code Signing
The mechanism that enables verification is digital signing.
-   **Offline Process:** The manufacturer uses a highly protected **private key** to sign their firmware images. This key must be kept in a secure environment, such as a Hardware Security Module (HSM).
-   **On-Device Process:** A corresponding **public key** is provisioned onto the device. Each software component in the boot chain uses this public key to verify the signature of the next component before executing it.

## 3. The Secure Boot Process in Detail

A typical secure boot flow on an embedded device follows these steps:

| Step | Action | Consequence on Failure |
| :--- | :--- | :--- |
| **1. Power On** | The device is powered on, and the CPU begins executing code from a predefined address. | - |
| **2. Boot ROM Execution** | The immutable Boot ROM code on the SoC starts. It loads the next-stage bootloader from flash. | Cannot fail, as this code is burned into the silicon. |
| **3. Bootloader Verification** | The Boot ROM checks the bootloader's signature using the public key hash stored in OTP fuses. | **Boot Halted.** The device will not proceed, preventing execution of a malicious bootloader. |
| **4. Kernel Verification** | The now-trusted bootloader loads the main OS kernel (e.g., Linux) and verifies its signature. | **Boot Halted.** The device will not proceed, preventing a compromised kernel from running. |
| **5. System & App Verification** | The trusted kernel mounts and verifies the integrity of the root filesystem and key applications. | The specific service or application fails to start. |

## 4. Compliance Checklist

To build a secure boot mechanism that meets regulatory requirements, ensure you can answer "yes" to the following:

- [ ] **Hardware-Anchored RoT:** Is your chain of trust initiated by immutable code (Boot ROM) and a key hash stored in write-once hardware (eFuses/OTP)?
- [ ] **Full Chain Verification:** Is every mutable software component in the boot chain cryptographically verified before execution?
- [ ] **Secure Key Storage:** Are your private signing keys generated, stored, and used exclusively within a Hardware Security Module (HSM)?
- [ ] **Fail-Secure Design:** Does the device refuse to boot or enter a safe recovery mode if any part of the chain of trust is broken?
- [ ] **Process Documentation:** Is your code signing and key management process documented in your technical file?

[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements"
[bsi_tr_03183_p1]: https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI-TR-03183-1-0_9_0.pdf "BSI TR-03183 Part 1: General requirements"