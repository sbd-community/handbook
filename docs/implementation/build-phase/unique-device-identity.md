---
title: "Unique Device Identity"
sidebar_position: 1
tags: [identity, secure-by-design, build, root-of-trust, pki]
---

# Guide: Establishing a Unique Device Identity

## 1. What is a Unique Device Identity?

A **Unique Device Identity** is a non-cloneable, permanent, and trustworthy identifier that is cryptographically bound to a single device. It is the foundation of all product security and the first, most critical secret established during the manufacturing process. This identity is often referred to as a **Hardware Root of Trust (HRoT)**.

Unlike a serial number or MAC address, which can often be changed or spoofed, a true device identity is generated and protected by a hardware security element, such as:
- A **Trusted Platform Module (TPM)**
- A **Secure Element (SE)** or **Secure Enclave**
- A **Hardware Security Module (HSM)**-backed provisioning process
- **Physical Unclonable Functions (PUFs)**

This identity allows a device to prove *who it is* cryptographically, which is the prerequisite for all secure operations. Regulations like the **Cyber-Resilience Act (CRA)** and standards like **IEC 62443** depend on a device having a trustworthy identity to enable other security functions like secure boot and authenticated updates ([CRA Annex I.I.2(f)][cra_annexI]).

## 2. Why it matters for Secure-by-Design

Establishing a strong device identity at the build phase is the most effective way to meet a wide range of security requirements mandated by modern regulations and standards. Once a device can prove its identity, it can be trusted. This trust is then extended to authenticating messages, securing connections, and validating software.

A single investment in a robust identity provisioning process enables compliance across multiple domains. By treating identity as the foundational building block, manufacturers can create a scalable and auditable security architecture that is compliant by design.

| Security Function | How Unique Identity Enables It | Related Standards |
| :--- | :--- | :--- |
| **Secure Boot & Updates** | The system can authenticate software and firmware before execution, preventing tampering. | [ETSI EN303645](./../../standards/en303645-overview.md), [CRA](./../../standards/cra-overview.md) |
| **Authenticated Communication** | Enables mutual authentication (e.g., mTLS) to establish secure channels, protecting data confidentiality and integrity. | [IEC62443-4-2](./../../standards/iec62443-overview.md) |
| **Supply Chain Integrity** | Allows downstream customers (e.g., those complying with the [NIS 2 Directive](./../../standards/nis2-overview.md)) to verify the authenticity of the components they receive. |
| **DDoS Resistance** | Cloud services can reject connection attempts from devices that cannot prove their identity, mitigating the risk of denial-of-service attacks. | [ETSI EN303645](./../../standards/en303645-overview.md) |
| **Simplified Onboarding** | Enables automated and secure "zero-touch" provisioning into cloud platforms and management systems. | [IEC62443-4-2](./../../standards/iec62443-overview.md) |

## 3. Compliance Checklist

To meet modern security requirements, your identity provisioning process should satisfy the following:

- [ ] **Hardware-Anchored Identity:** Is the unique identity anchored in a hardware root of trust (e.g., TPM, SE, PUF)?
- [ ] **Unique Per Device:** Is every single device provisioned with a cryptographically unique identity?
- [ ] **Secure Provisioning:** Is the manufacturing process for injecting the identity secure and auditable (e.g., using an HSM)?
- [ ] **No Hardcoded Secrets:** Does your firmware contain no hardcoded, default, or predictable keys that could compromise the identity?
- [ ] **Identity-Driven Security:** Is the unique identity used as the foundation for other security controls like secure boot, secure storage, and authenticated communication?
- [ ] **Process Documentation:** Is your identity management and provisioning plan documented in your technical file for compliance purposes?

<!-- Citations -->
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements" 