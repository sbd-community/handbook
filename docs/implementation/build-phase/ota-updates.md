---
title: "Secure OTA Updates"
sidebar_label: "OTA Updates"
sidebar_position: 6
tags: [ota, secure-update, firmware, cra, integrity, rollback-protection]
---
# Guide: Secure Over-the-Air (OTA) Updates

## 1. The 'Why': OTA as a Critical Compliance Function

A secure Over-the-Air (OTA) update mechanism is a fundamental requirement for any connected device. It is the only practical way to patch security vulnerabilities discovered after a product has been shipped. Without a robust OTA system, manufacturers cannot fulfill their legal and ethical responsibility to protect users from emerging threats.

### 1.1. The Regulatory Requirement

The **[Cyber-Resilience Act (CRA)](./../../standards/eu/cra-overview.md)** places a heavy emphasis on the manufacturer's ability to provide timely and secure updates. A compliant OTA system is essential for meeting several key requirements:

-   **Security Updates by Design ([Annex I § 1 (2)(c)][cra_annexI])**: The CRA mandates that products be designed to ensure that security updates "can be installed separately from functionality updates." The BSI TR-03183-1 clarifies this, requiring a mechanism for "timely, integrity-protected security updates" ([REQ_ER 4][bsi_tr_03183_p1]).
-   **Integrity Protection ([Annex I § 1 (2)(f)][cra_annexI])**: The act requires manufacturers to protect the integrity of all code and data. For OTA, this means the update package itself must be cryptographically protected to prevent tampering.

### 1.2. What are Secure OTA Updates?

A secure OTA update process is a multi-stage defense system designed to deliver new firmware to a device without introducing new vulnerabilities. It is more than just transferring a file; it must defend against attacks at every step of the process, from the code signing server to the device's final boot.

## 2. Core Principles of a Secure OTA Process

A secure OTA update process is more than just transferring a file. It must defend against attacks at every stage.

### 2.1 Authenticity and Integrity
The device must be able to prove that a received update package is from a legitimate source (authenticity) and that it has not been tampered with in transit (integrity).

- **How:** This is achieved through **digital signatures**. Before release, the firmware image is signed with a private key, which is kept in a highly secure offline environment (e.g., an HSM). The corresponding public key is provisioned onto every device. When the device receives an update, its bootloader or update client uses the public key to verify the signature. If the signature is invalid, the update is rejected.

### 2.2 Rollback Protection
An attacker might try to trick a device into installing an older, known-vulnerable version of the firmware to re-exploit a patched vulnerability. This is known as a rollback attack.

- **How:** The system must enforce version monotonicity. The simplest method is to include a version number with the firmware image and store the current version number in a secure, tamper-proof location on the device (e.g., fuses, or a trusted storage area). The device must reject any update with a version number less than or equal to the currently installed version.

### 2.3 Confidentiality
While not always a strict requirement, encrypting the update package protects the manufacturer's intellectual property (IP) and prevents competitors or attackers from reverse-engineering the firmware.

- **How:** The firmware can be encrypted with a symmetric key. This key can either be shared across a product line or, for higher security, be unique to each device and derived during the provisioning process.

### 2.4 Resilience and Atomicity
The update process must be resilient to interruptions, especially power loss. A failed update must not leave the device in an unusable ("bricked") state.

- **How:** The update must be **atomic**, meaning it either completes successfully or it has no effect at all. The most common technique is to use an **A/B partition scheme**. The device has two separate slots for firmware (A and B). If the device is currently running from partition A, the update is written to partition B. Only after the new image in B has been fully downloaded and its signature verified does the bootloader switch to booting from B. If the new image fails to boot, the system can automatically revert to the last known-good image in partition A.

## 3. Anatomy of a Secure OTA Architecture

A complete OTA solution consists of three main parts:

| Component | Role | Key Security Functions |
| :--- | :--- | :--- |
| **Device-Side Client** | Software on the device responsible for checking for updates, downloading them, performing verifications, and triggering the installation. | Signature verification, version checking, communication with the bootloader. |
| **Update Server** | A cloud-based service that manages firmware images, deployment campaigns, and device groups. | Securely stores firmware, manages rollout policies (e.g., canary releases), provides an audit trail. |
| **Code-Signing Infrastructure** | The offline, highly-secured process for signing firmware images before they are uploaded to the update server. | Protects the private signing keys in an HSM; provides a formal, audited release process. |

## 4. Compliance Checklist

To meet modern security requirements, your OTA update system should satisfy the following:

- [ ] **Signature Verification:** Is every firmware update cryptographically signed, and is that signature verified by the device before installation?
- [ ] **Anti-Rollback Mechanism:** Does the device prevent the installation of older firmware versions?
- [ ] **Power-Fail Safety:** Can the device fully recover from a power outage or network interruption during an update without being bricked?
- [ ] **Dependency Management:** If your update includes security patches for the bootloader or other immutable components, is there a secure process to update them as well?
- [ ] **Server Security:** Is your update server hardened and protected against unauthorized access that could lead to malicious firmware being distributed?
- [_] **End-to-End Documentation:** Is your entire update process—from code signing to device verification—documented in your technical file?

<!-- Citations -->
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements"
[bsi_tr_03183_p1]: https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI-TR-03183-1-0_9_0.pdf "BSI TR-03183 Part 1: General requirements"