---
title: "Unique Device Identity"
sidebar_position: 2
tags: [identity, secure-by-design, build, root-of-trust, pki]
---

# Guide: Establishing a Unique Device Identity

A **Unique Device Identity** is a non-cloneable, permanent, and trustworthy identifier that is cryptographically bound to a single device. It is the foundation of all product security and the first, most critical secret established during the manufacturing process.

A robust identity framework is a prerequisite for meeting the security requirements of the **[Cyber-Resilience Act (CRA)](./../../standards/cra-overview.md)**, **[ETSI EN 303 645](./../../standards/en303645-overview.md)**, and **[IEC 62443](./../../standards/iec62443-overview.md)**.

## 1. Core Concepts: Root vs. Operational Identity

A mature security model distinguishes between two types of identity.

### Hardware-Based Root Identity
This is the foundational, unchangeable identity of the device, often called the **Hardware Root of Trust (HRoT)**.
-   **Purpose:** To guarantee the authenticity and uniqueness of the hardware itself.
-   **Characteristics:** It is permanent and cannot be cloned. It is established during chip manufacturing and protected by a hardware security element (e.g., TPM, SE, PUF).
-   **Implementation:** It typically consists of a unique asymmetric key pair where the private key never leaves the secure hardware. It is sometimes referred to as an Initial Device Identifier (`IDevID`) as defined in the IEEE 802.1AR standard.

### Operational Identity
This is a secondary identity used to authenticate the device to a specific service, such as your cloud backend.
-   **Purpose:** To identify and authenticate the device for a particular operational context (e.g., connecting to a cloud MQTT broker).
-   **Characteristics:** It must be anchored cryptographically to the Hardware Root Identity. It is often shorter-lived and can be rotated or revoked. A device can have multiple operational identities for different services to maintain separation.
-   **Implementation:** It is typically an X.509 certificate, created when the device uses its root private key to sign a Certificate Signing Request (CSR) that is sent to a Certificate Authority (CA).

## 2. The Provisioning Workflow

Securely provisioning these identities involves a multi-step process across the supply chain.

| Step | Who | Action |
| :--- | :--- | :--- |
| **1. Create Root Identity** | **Chipmaker** | At the silicon factory, a unique asymmetric keypair (the HRoT) is generated inside or injected into each chip's secure hardware. The private key is never exposed. |
| **2. Secure Handover** | **Chipmaker to OEM** | The chipmaker provides the device manufacturer (OEM) with a secure manifest of the public keys and unique IDs for the batch of chips. |
| **3. Issue Operational Certificate** | **OEM / Service Operator** | In a secure manufacturing environment, the device is powered on. It uses its root private key to sign a CSR. The OEM's manufacturing software (acting as or on behalf of a CA) validates the CSR against the manifest and issues a signed operational certificate back to the device. |
| **4. On-device Storage** | **Device Firmware** | The device stores this new operational certificate in its secure storage for use in the field. |

## 3. Why a Unique Identity Matters

Establishing a strong identity is the cornerstone of a secure-by-design approach because it enables:
-   **Authentication:** Proves a device is genuine and prevents unauthorized access.
-   **Prevention of Cloning:** A hardware-backed identity makes it computationally infeasible to clone or spoof devices, a critical requirement of `ETSI EN 303 645`.
-   **Secure Communication:** Enables robust mutual authentication (mTLS) for encrypted channels, as required by `IEC 62443-4-2`.
-   **Supply Chain Integrity:** Allows you to track and validate components from the chipmaker to the final product, and allows your customers (e.g., those complying with the `NIS 2 Directive`) to verify the authenticity of your device.
-   **Traceability & Accountability:** Creates an auditable trail for device actions and simplifies incident response.
-   **Simplified & Secure Onboarding:** Enables automated and secure "zero-touch" provisioning into cloud platforms and management systems.

## 4. Compliance Checklist

To meet modern security requirements, your identity provisioning process should satisfy the following:

- [ ] **Hardware-Anchored Identity:** Is the unique identity anchored in a hardware root of trust (e.g., TPM, SE, PUF)?
- [ ] **Supply Chain Security:** Do you have a secure process to receive and verify the identity manifest from your chip supplier?
- [ ] **Secure Provisioning:** Is your manufacturing process for issuing operational certificates secure, isolated, and auditable (e.g., using an HSM)?
- [ ] **Separation of Identities:** Does your architecture separate the foundational hardware identity from the operational identities used for cloud services?
- [ ] **Identity-Driven Security:** Is the unique identity used as the foundation for other security controls like secure boot, secure storage, and authenticated communication?
- [ ] **Process Documentation:** Is your identity management and provisioning plan documented in your technical file for compliance purposes?

<!-- Citations -->
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements" 