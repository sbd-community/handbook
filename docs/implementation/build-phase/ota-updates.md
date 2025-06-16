---
title: "Secure OTA Updates"
sidebar_label: "OTA Updates"
tags: [ota, secure-update, firmware, cra, integrity, rollback-protection]
---
# Guide: Secure Over-the-Air (OTA) Updates

A secure Over-the-Air (OTA) update mechanism is a fundamental requirement for any connected device. It is the only practical way to patch security vulnerabilities discovered after a product has been shipped. Without a robust OTA system, manufacturers cannot fulfill their legal and ethical responsibility to protect users from emerging threats.

The **Cyber-Resilience Act (CRA)** explicitly mandates that manufacturers must provide security updates without delay and have a mechanism to distribute them securely ([CRA Annex I.II.2 & 4][cra_annexI_partII]). Furthermore, the integrity of these updates must be cryptographically protected ([CRA Annex I.I.2(f)][cra_annexI_partI]). This guide outlines the core principles for building a compliant and resilient OTA system.

## 1. Core Principles of a Secure OTA Process

A secure OTA update process is more than just transferring a file. It must defend against attacks at every stage.

### Authenticity and Integrity
The device must be able to prove that a received update package is from a legitimate source (authenticity) and that it has not been tampered with in transit (integrity).

- **How:** This is achieved through **digital signatures**. Before release, the firmware image is signed with a private key, which is kept in a highly secure offline environment (e.g., an HSM). The corresponding public key is provisioned onto every device. When the device receives an update, its bootloader or update client uses the public key to verify the signature. If the signature is invalid, the update is rejected.

### Rollback Protection
An attacker might try to trick a device into installing an older, known-vulnerable version of the firmware to re-exploit a patched vulnerability. This is known as a rollback attack.

- **How:** The system must enforce version monotonicity. The simplest method is to include a version number with the firmware image and store the current version number in a secure, tamper-proof location on the device (e.g., fuses, or a trusted storage area). The device must reject any update with a version number less than or equal to the currently installed version.

### Confidentiality
While not always a strict requirement, encrypting the update package protects the manufacturer's intellectual property (IP) and prevents competitors or attackers from reverse-engineering the firmware.

- **How:** The firmware can be encrypted with a symmetric key. This key can either be shared across a product line or, for higher security, be unique to each device and derived during the provisioning process.

### Resilience and Atomicity
The update process must be resilient to interruptions, especially power loss. A failed update must not leave the device in an unusable ("bricked") state.

- **How:** The update must be **atomic**, meaning it either completes successfully or it has no effect at all. The most common technique is to use an **A/B partition scheme**. The device has two separate slots for firmware (A and B). If the device is currently running from partition A, the update is written to partition B. Only after the new image in B has been fully downloaded and its signature verified does the bootloader switch to booting from B. If the new image fails to boot, the system can automatically revert to the last known-good image in partition A.

## 2. Anatomy of a Secure OTA Architecture

A complete OTA solution consists of three main parts:

| Component | Role | Key Security Functions |
| :--- | :--- | :--- |
| **Device-Side Client** | Software on the device responsible for checking for updates, downloading them, performing verifications, and triggering the installation. | Signature verification, version checking, communication with the bootloader. |
| **Update Server** | A cloud-based service that manages firmware images, deployment campaigns, and device groups. | Securely stores firmware, manages rollout policies (e.g., canary releases), provides an audit trail. |
| **Code-Signing Infrastructure** | The offline, highly-secured process for signing firmware images before they are uploaded to the update server. | Protects the private signing keys in an HSM; provides a formal, audited release process. |

## 3. Compliance Checklist

To meet modern security requirements, your OTA update system should satisfy the following:

- [ ] **Signature Verification:** Is every firmware update cryptographically signed, and is that signature verified by the device before installation?
- [ ] **Anti-Rollback Mechanism:** Does the device prevent the installation of older firmware versions?
- [ ] **Power-Fail Safety:** Can the device fully recover from a power outage or network interruption during an update without being bricked?
- [ ] **Dependency Management:** If your update includes security patches for the bootloader or other immutable components, is there a secure process to update them as well?
- [ ] **Server Security:** Is your update server hardened and protected against unauthorized access that could lead to malicious firmware being distributed?
- [_] **End-to-End Documentation:** Is your entire update process—from code signing to device verification—documented in your technical file?

---

*This content is being developed. Contribute to this page via our [GitHub repository](https://github.com/sbd-community/handbook).*

<!-- Shared links -->
[cra_annexI_partI]: ../../standards/cra-overview.md#5-secure-by-design-engineering-benchmarks-annex-i-deep-dive "CRA Annex I, Part I – Security requirements relating to the properties of products with digital elements"
[cra_annexI_partII]: ../../standards/cra-overview.md#5-secure-by-design-engineering-benchmarks-annex-i-deep-dive "CRA Annex I, Part II – Vulnerability handling requirements" 