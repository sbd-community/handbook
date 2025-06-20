---
title: "Secure Boot Implementation"
sidebar_label: "Secure Boot"
sidebar_position: 3
tags: [secure-boot, root-of-trust, chain-of-trust, cra, integrity]
---
# Guide: Implementing Secure Boot

## 1. What is Secure Boot?

**Secure Boot** is a security mechanism that ensures only trusted, authenticated software is allowed to run on a device. It works by creating a **chain of trust**, starting from an immutable hardware anchor and extending through every piece of software loaded during the boot sequence—from the initial bootloader to the operating system kernel and applications.

The process cryptographically verifies the signature of each software component before it is executed. If any signature is invalid or the software has been tampered with, the boot process is halted.

This is a foundational requirement of the **[Cyber-Resilience Act (CRA)](./../../standards/cra-overview.md)**, which mandates that products "protect the integrity of...commands, programs and configuration against any manipulation or modification not authorised by the user" ([CRA Annex I.I.2(f)][cra_annexI]).

## 2. The Chain of Trust

The entire secure boot process depends on a single, unchangeable starting point known as the **Hardware Root of Trust (HRoT)**.

-   **The Anchor:** The chain begins with a public key that is permanently burned into the device's silicon (e.g., into One-Time-Programmable (OTP) memory). This key corresponds to the private key used by the manufacturer to sign the initial bootloader code. This anchor is part of the device's core **[Hardware-Based Identity](./unique-device-identity.md)**.
-   **The First Link:** At power-on, the device's boot ROM—which is immutable—uses this public key to verify the signature of the first-stage bootloader stored in flash memory.
-   **Subsequent Links:** If the first bootloader is authentic, it is loaded into memory. It then verifies the signature of the next component (e.g., the operating system kernel) using a key that it has been provisioned with. This process continues until the main application is running.

## 1. Core Concepts of Secure Boot

### The Chain of Trust
Secure boot works like a chain, where each link verifies the next before handing over control.
1.  An immutable piece of code in the hardware (the "root of trust") verifies the first-stage bootloader.
2.  The first-stage bootloader verifies the main operating system kernel.
3.  The kernel verifies the root filesystem and applications.

If any signature verification fails at any point in this chain, the boot process is halted, preventing the execution of untrusted or malicious code.

### Anchoring Trust in Hardware
The entire chain is only as strong as its first link. This first link—the **Root of Trust (RoT)**—must be anchored in hardware that cannot be modified after manufacturing.

-   **How it works:** Most modern System-on-a-Chip (SoC) microcontrollers contain a small piece of code in a read-only memory (ROM), often called the "Boot ROM". When the device powers on, this is the very first code that runs. Its job is to verify the next stage bootloader found in flash memory. To do this, it compares a hash of the bootloader's public key against a known-good hash that was permanently written into **one-time programmable (OTP) fuses** on the chip during manufacturing.

### Code Signing
The mechanism that enables verification is digital signing.
-   **Offline Process:** The manufacturer uses a highly protected **private key** to sign their firmware images. This key must be kept in a secure environment, such as a Hardware Security Module (HSM).
-   **On-Device Process:** A corresponding **public key** is provisioned onto the device. Each software component in the boot chain uses this public key to verify the signature of the next component before executing it.

## 2. The Secure Boot Process in Detail

A typical secure boot flow on an embedded device follows these steps:

| Step | Action | Consequence on Failure |
| :--- | :--- | :--- |
| **1. Power On** | The device is powered on, and the CPU begins executing code from a predefined address. | - |
| **2. Boot ROM Execution** | The immutable Boot ROM code on the SoC starts. It loads the next-stage bootloader from flash. | Cannot fail, as this code is burned into the silicon. |
| **3. Bootloader Verification** | The Boot ROM checks the bootloader's signature using the public key hash stored in OTP fuses. | **Boot Halted.** The device will not proceed, preventing execution of a malicious bootloader. |
| **4. Kernel Verification** | The now-trusted bootloader loads the main OS kernel (e.g., Linux) and verifies its signature. | **Boot Halted.** The device will not proceed, preventing a compromised kernel from running. |
| **5. System & App Verification** | The trusted kernel mounts and verifies the integrity of the root filesystem and key applications. | The specific service or application fails to start. |

## 3. Compliance Checklist

To build a secure boot mechanism that meets regulatory requirements, ensure you can answer "yes" to the following:

- [ ] **Hardware-Anchored RoT:** Is your chain of trust initiated by immutable code (Boot ROM) and a key hash stored in write-once hardware (eFuses/OTP)?
- [ ] **Full Chain Verification:** Is every mutable software component in the boot chain cryptographically verified before execution?
- [ ] **Secure Key Storage:** Are your private signing keys generated, stored, and used exclusively within a Hardware Security Module (HSM)?
- [ ] **Fail-Secure Design:** Does the device refuse to boot or enter a safe recovery mode if any part of the chain of trust is broken?
- [ ] **Process Documentation:** Is your code signing and key management process documented in your technical file?

<!-- Citations -->
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements"