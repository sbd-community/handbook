---
title: "Key Provisioning & Storage"
sidebar_label: "Key Management"
sidebar_position: 4
tags: [keys, provisioning, hsm, tpm, secure-element, root-of-trust]
---
# Guide: Key Provisioning & Storage

## 1. What is Key Provisioning?

**Key Provisioning** is the process of securely generating, injecting, and managing cryptographic keys on a device. This process is distinct from, but closely related to, establishing a **[Unique Device Identity](./unique-device-identity.md)**.

While the device identity proves *who* a device is, the keys provisioned onto it are the tools it *uses* to perform cryptographic operations like encrypting data, verifying software signatures, and authenticating to a network.

The core challenge is ensuring that secret keys remain secret throughout the entire manufacturing process and the product's operational life. A breach at any stage can compromise the security of every device that shares the compromised key material. Regulations like the **[Cyber-Resilience Act (CRA)](./../../standards/cra-overview.md)** mandate the protection of integrity and confidentiality ([CRA Annex I.I.2(f)][cra_annexI]), which implicitly requires that cryptographic keys are protected from disclosure and modification.

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