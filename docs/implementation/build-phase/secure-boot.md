---
title: "Secure Boot Implementation"
sidebar_label: "Secure Boot"
sidebar_position: 3
tags: [secure-boot, root-of-trust, chain-of-trust, cra, integrity]
---
# Guide: Implementing Secure Boot

## 1. Introduction to Secure Boot

### 1.1. What is Secure Boot?

**Secure Boot** is a critical security mechanism that prevents unauthorized code from running on a device. It works by creating a **chain of trust**, starting from an immutable hardware anchor and extending through every piece of software loaded during the boot sequence.

The process cryptographically verifies the signature of each software component before it is executed. If any signature is invalid or the software has been tampered with, the boot process is halted. This ensures the integrity of a product's software from the moment it powers on.

### 1.2. The Regulatory Requirement

The legal basis for implementing secure boot is clear and direct. Secure boot is the state-of-the-art mechanism for fulfilling the integrity requirements of modern regulations.

-   **Integrity Protection ([Annex I § 1 (2)(f)][cra_annexI])**: The **[Cyber-Resilience Act (CRA)](./../../standards/eu/cra-overview.md)** requires manufacturers to "protect the integrity of...commands, programs and configuration against any manipulation or modification not authorised by the user."
-   The BSI TR-03183-1 reinforces this, requiring that the integrity of "all code, data, and configuration" be protected by "state-of-the-art mechanisms" and that any violations are detected ([REQ_ER 7][bsi_tr_03183_p1]).

Implementing secure boot provides auditable proof that only the manufacturer's authentic software is executing on the device.

### 1.3. Do I Really Need to Do This?

Secure boot is the state-of-the-art technical solution for meeting the software integrity requirement of the **[Cyber-Resilience Act (CRA)](./../../standards/eu/cra-overview.md)**. For the majority of connected products, it is a mandatory, foundational security control.

However, the question is not whether you can ignore the integrity requirement, but whether there are circumstances where it can be met without a full secure boot implementation. The BSI's technical guideline ([REC_ER 7.1][bsi_tr_03183_p1]) provides a specific condition: the recommendation to verify software integrity applies if "The TOE [product] stores sensitive user or system data."

This provides two clear, but very narrow, grounds for exemption:

#### Exception 1: The Product's Firmware Cannot Be Modified

If your product's software is physically immutable—for example, it is burned into a true Read-Only Memory (ROM) or the write-enable fuses are permanently disabled at the factory—then its integrity cannot be modified after it is produced. In this case, a secure boot process is not necessary because the software cannot be changed. This is extremely rare for connected products, which almost always require the ability to be updated.

#### Exception 2: The Product is Simple and Stores No Sensitive Data

This is the most likely exception, but it requires careful justification. According to the BSI guideline, if a product does *not* store any sensitive data, the need to verify its own integrity is a recommendation (`SHOULD`) rather than a strict mandate (`MUST`). To qualify, a product would need to meet all of the following criteria:
-   It does not store any cryptographic keys, credentials, or other security-critical parameters.
-   It does not store any sensitive personal data (e.g., health data, private messages).
-   It does not store any sensitive system data (e.g., proprietary configuration, business information).
-   A compromise of its software integrity would not create a significant safety risk or a risk to other systems (e.g., it could not be used as part of a DDoS attack).

**Example:** A simple, battery-powered environmental sensor that transmits public data (like air quality readings) over a local network. It has updateable firmware but stores no keys or sensitive configuration. While a compromise is possible, the impact is low. In this case, a manufacturer could argue in their risk assessment that while secure boot is best practice, its absence does not create a significant risk.

#### The Bottom Line

For any product that receives software updates **and** handles any kind of secret key, credential, or sensitive user data, secure boot is **mandatory**. If an attacker can modify the software on a device that holds secrets, no other security control can be trusted. The burden is on the manufacturer to document a compelling justification for why their product's limited functionality and simple data-handling model makes it eligible for an exception.

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

## 4. Accelerating Compliance with Tooling

Implementing secure boot requires a combination of hardware capabilities and software components. While these can be built from scratch, leveraging existing open-source solutions can significantly reduce development time.

-   **Hardware Root of Trust:** The foundation of secure boot is a feature of the microcontroller (SoC) itself. Choosing a chip with built-in support for secure boot (e.g., Boot ROM, eFuses) is the most direct path to compliance.
-   **Code-Signing Tools:** The process of signing firmware images requires a secure offline process. Protecting the private signing key is paramount, and using a **Hardware Security Module (HSM)** is the industry-standard approach.
-   **Secure Bootloaders:** Developing a secure bootloader is a complex task. For devices running a full OS like Linux, adapting a widely-used open-source bootloader that already supports verified boot, such as [U-Boot](https://www.denx.de/wiki/U-Boot), is often more secure and efficient than creating one from scratch.

For more details on the hardware that enables secure boot, see the [Hardware Root of Trust & Provisioning](../../tools/hardware-root-of-trust-and-provisioning.md) tools page.

## 5. Compliance Checklist

To build a secure boot mechanism that meets regulatory requirements, ensure you can answer "yes" to the following:

- [ ] **Hardware-Anchored RoT:** Is your chain of trust initiated by immutable code (Boot ROM) and a key hash stored in write-once hardware (eFuses/OTP)?
- [ ] **Full Chain Verification:** Is every mutable software component in the boot chain cryptographically verified before execution?
- [ ] **Secure Key Storage:** Are your private signing keys generated, stored, and used exclusively within a Hardware Security Module (HSM)?
- [ ] **Fail-Secure Design:** Does the device refuse to boot or enter a safe recovery mode if any part of the chain of trust is broken?
- [ ] **Process Documentation:** Is your code signing and key management process documented in your technical file?

[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements"
[bsi_tr_03183_p1]: https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI-TR-03183-1-0_9_0.pdf "BSI TR-03183 Part 1: General requirements"