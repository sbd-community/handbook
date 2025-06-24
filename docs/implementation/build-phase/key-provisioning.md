---
title: "Key Provisioning & Storage"
sidebar_label: "Key Management"
sidebar_position: 4
tags: [keys, provisioning, hsm, tpm, secure-element, root-of-trust]
---
# Guide: Key Provisioning & Storage

## 1. Introduction to Key Provisioning & Storage

### 1.1. What is Key Provisioning & Storage?

Key Provisioning and Management is the process of securely generating, injecting, and managing the cryptographic keys a device uses to perform secure operations. The core challenge is ensuring that secret keys remain secret throughout the entire manufacturing process and the product's operational life. A breach at any stage can compromise the security of every device that shares the compromised key material.

This process is distinct from, but closely related to, establishing a **[Unique Device Identity](./unique-device-identity.md)**.

-   A **Device Identity** proves *who* a device is.
-   **Provisioned Keys** are the tools the device *uses* to act on that identity (e.g., encrypting data, verifying software signatures, authenticating to a network).

### 1.2. The Regulatory Requirement

While regulations may not specify the exact method of key storage, they mandate outcomes that depend entirely on secure key management. The primary driver is:

-   **Confidentiality Protection ([Annex I § 1 (2)(e)][cra_annexI])**: The **[Cyber-Resilience Act (CRA)](./../../standards/eu/cra-overview.md)** requires manufacturers to protect the confidentiality of data "at-rest and in-transit using state-of-the-art encryption." The BSI TR-03183-1 reinforces this, requiring the protection of all "sensitive data and parameters" ([REQ_ER 6][bsi_tr_03183_p1]).

State-of-the-art encryption is only effective if the keys themselves are protected from disclosure and modification. Therefore, a robust key provisioning and storage strategy is an implicit and non-negotiable requirement.

### 1.3. Do I Really Need to Do This?

The need for secure key provisioning and storage is a direct consequence of other security requirements. Rather than asking *if* you need to do it, the better question is: **"Does my product use cryptography for any of its functions?"**

The **[Cyber-Resilience Act (CRA)](./../../standards/eu/cra-overview.md)** mandates several security outcomes that implicitly require the use of cryptography, and therefore keys:

-   **Confidentiality ([Annex I § 1 (2)(e)][cra_annexI])**: If you store or transmit any sensitive data (e.g., user credentials, network passwords, personal information), you must encrypt it. Encryption requires keys.
-   **Integrity of Software Updates ([Annex I § 1 (2)(d)][cra_annexI])**: Your device must be able to address vulnerabilities through security updates. The BSI's guideline ([REQ_ER 4.2][bsi_tr_03183_p1]) clarifies this means verifying the "integrity and authenticity of the update package". This requires cryptographic signatures, which in turn rely on keys.
-   **Access Control ([Annex I § 1 (2)(d)][cra_annexI])**: If your product has user accounts or restricted interfaces, it needs a way to authenticate users. Secure authentication mechanisms often rely on cryptographic credentials.

#### When is key management *not* required?

A product is exempt from these requirements only if it uses **no cryptographic functions at all**. Such a device would have to meet all of the following conditions:

-   It does not store or transmit any sensitive, personal, or secret data that requires encryption.
-   It does not have a secure update mechanism that relies on signature verification.
-   It does not implement any cryptographic access control or authentication methods.
-   It has no other feature that relies on cryptography (e.g., secure boot, remote attestation).

An example of such a device might be a simple, battery-powered sensor that periodically broadcasts non-sensitive data (like a temperature reading) over an unencrypted, local radio protocol.

#### The Bottom Line

For virtually any modern connected product that receives software updates, connects to a network, or handles any user-specific information, the answer is **yes, this is required**. An insecure key management strategy (like hardcoding a key in firmware) is a critical vulnerability that makes compliance with the CRA impossible. The real engineering decision is not *if* you should do it, but *how*—choosing the right hardware and processes to protect your keys throughout their lifecycle.

## 2. The Key Management Lifecycle & Workflow

Effective key management is a continuous process that covers the entire life of a key, from its birth to its eventual retirement. A secure product uses different keys for different purposes, and the provisioning workflow must handle them accordingly.

### 2.1 Key Generation & Provisioning
-   **Hardware Root of Trust Keys:** These form the device's core **Hardware-Based Root Identity**. They are provisioned once, at the silicon level or in a highly secure factory environment, often injected by the chipmaker into a Secure Element (SE) or TPM using a Hardware Security Module (HSM). The private key should never be extractable. Keys must be created using a high-quality entropy source, like a hardware-based True Random Number Generator (TRNG).
-   **Operational Keys & Certificates:** These are application-level credentials used for specific tasks (e.g., connecting to the cloud). They can be provisioned in the factory or later in the lifecycle. The device uses its root private key to sign a Certificate Signing Request (CSR), which is sent to a Certificate Authority (CA) to receive a signed operational certificate. This anchors the trust of the operational key to the hardware root key.

### 2.2 Secure Storage
Keys must be stored in a way that prevents their unauthorized extraction. The ideal storage location is within a hardware-backed secure vault, such as a Trusted Platform Module (TPM), a Secure Element (SE), or a protected region of memory managed by a Trusted Execution Environment (TEE). Storing keys in regular flash memory is less secure as it may be vulnerable to physical attacks.

### 2.3 Usage, Rotation & Revocation
Cryptographic operations (e.g., signing, encrypting) should be performed *inside* the hardware security boundary. The key material itself should never be exposed to the main, non-secure processor. A mature security posture also includes plans for rotating keys over time and revoking them if they are compromised, often leveraging the device's secure update mechanism.

## 3. Hardware Roots of Trust for Key Storage

A "Root of Trust" (RoT) is a component that is inherently trusted within a system. For key management, this trust must be anchored in hardware. Here are common hardware technologies used to build a RoT:

| Technology | Description | Best for... |
| :--- | :--- | :--- |
| **Secure Element (SE)** | A dedicated, tamper-resistant microcontroller designed to be a "key vault". It runs a hardened, specialized OS and exposes crypto services to the main processor via a limited interface (e.g., I2C). | Storing high-value keys that must resist physical extraction. Common in payment and SIM applications but widely available for IoT. |
| **Trusted Platform Module (TPM)** | A standardized component that provides secure key storage, cryptographic functions, and platform integrity measurement (attestation). It is governed by the Trusted Computing Group (TCG) specification. | General-purpose secure storage, remote attestation, and disk encryption. A requirement for many enterprise and industrial systems. |
| **Trusted Execution Environment (TEE)** | A secure area inside the main processor (e.g., ARM TrustZone, Intel SGX) that isolates security-critical code and data from the normal operating system. Keys are protected in memory, not necessarily a separate chip. | Protecting key *operations* when a separate hardware vault is not available. The keys are only as secure as the TEE's software implementation. |
| **Physically Unclonable Function (PUF)** | A circuit that leverages minute physical variations from the manufacturing process to produce a unique, device-specific "fingerprint". This can be used as a root key that is never explicitly stored in memory. | Creating a unique, unclonable device identity and a hardware-derived root key without needing to provision one. |

## 4. Compliance Checklist

To meet the requirements of modern cybersecurity standards, your key management strategy should address the following points:

- [ ] **Hardware-Backed Storage:** Have you selected a hardware RoT (SE, TPM, TEE, or PUF) to protect your most critical keys?
- [ ] **Secure Provisioning Process:** Is your manufacturing line equipped to inject keys securely, ideally using an HSM to communicate with the device's RoT?
- [ ] **No Default Keys:** Is every device provisioned with a unique set of keys? Are there no hardcoded, default, or predictable keys anywhere in your firmware?
- [ ] **Key Hierarchy:** Have you designed a key hierarchy? A hardware-protected root key should be used to protect other, less critical keys (e.g., application keys, communication keys) which can be updated or rotated if needed.
- [ ] **Limited Access:** Does your application code only access cryptographic *functions*? The raw key material should never be directly readable by the non-secure application processor.
- [ ] **Lifecycle Documentation:** Is your key management plan (generation, provisioning, rotation, revocation) documented in your technical file to demonstrate compliance to auditors and authorities?

<!-- Citations -->
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements"
[bsi_tr_03183_p1]: https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI-TR-03183-1-0_9_0.pdf "BSI TR-03183 Part 1: General requirements"