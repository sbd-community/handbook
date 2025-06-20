---
title: Medical Device Regulation (MDR)
sidebar_label: 'EU MDR 2017/745'
sidebar_position: 7
tags: [mdr, medical, compliance, eu, security]
---
# Medical Device Regulation (EU) 2017/745

## 1. Why the MDR matters now

The **Medical Device Regulation (MDR)**—Regulation (EU) **2017/745**—is the comprehensive legal framework governing the placing on the market, making available, and putting into service of medical devices for human use within the European Union. It replaces the previous Medical Device Directive (MDD) and Active Implantable Medical Devices Directive (AIMDD), establishing a more robust, transparent, and sustainable regulatory system.

A critical feature of the MDR is its emphasis on a lifecycle approach to safety, which includes stringent requirements for software and cybersecurity. For any medical device with digital elements—from hospital infusion pumps to consumer wellness apps that qualify as a medical device—the MDR legally mandates a secure-by-design approach.

:::info Official Texts
- **Official Journal**: [EUR-Lex 32017R0745][mdr_oj]
- **Consolidated Version**: [EUR-Lex 02017R0745-20250110][mdr_consolidated]
- **MDCG Guidance**: [MDCG 2019-16 on Cybersecurity][mdcg_2019_16]
:::

**Relationship to other EU laws**

| Law | How it interacts with the MDR |
|-----|---------------------------|
| **[Cyber-Resilience Act (CRA)](./cra-overview.md)** | Products qualifying as medical devices under the MDR are **exempt** from the CRA ([CRA Art. 2 § 2(a)][cra_art2]). The MDR is considered *lex specialis*—more specific legislation that provides its own comprehensive set of cybersecurity rules. |
| **[GDPR](https://gdpr-info.eu/)** | Medical devices often process sensitive health data, making compliance with the General Data Protection Regulation essential. The MDR's security requirements provide a foundation for protecting this data. |

---

## 2. Key Cybersecurity Requirements ([Annex I][mdr_annexI])

The MDR's core cybersecurity obligations are embedded within the **General Safety and Performance Requirements (GSPR)** of **[Annex I][mdr_annexI]**. Manufacturers must demonstrate conformity with these requirements to receive a CE marking.

### 2.1 Risk Management & Information Security
*Legal hook: [MDR Annex I, §2, §3, §4][mdr_annexI]*

The manufacturer must establish, implement, document and maintain a risk management system. This system must address all known and foreseeable risks, including those arising from user error and the use of the device in combination with other systems. Crucially, this explicitly includes information security risks.

### 2.2 Software Lifecycle
*Legal hook: [MDR Annex I, §17.2][mdr_annexI]*

For devices that incorporate software, or for software that is itself a medical device, the software must be developed and manufactured according to the state of the art, taking into account the principles of:
- Development lifecycle
- Risk management, **including information security**
- Verification and validation

This effectively mandates a secure software development lifecycle (Secure SDLC), aligning with principles found in standards like IEC 62443-4-1.

### 2.3 IT Security
*Legal hook: [MDR Annex I, §17.4][mdr_annexI]*

Devices must be "designed and manufactured in such a way as to protect, as far as possible, against unauthorised access that could hamper the device from functioning as intended." This requires manufacturers to implement fundamental security controls like authentication, access control, and measures to prevent tampering.

---

## 3. Guidance & the State of the Art (MDCG 2019-16)

While the MDR lays down the legal requirements, it does not specify *how* to meet them. The **Medical Device Coordination Group (MDCG)** publishes guidance documents that explain the consensus view of the European Commission and national competent authorities on how to apply the regulations.

For cybersecurity, the most important of these is **[MDCG 2019-16 – Guidance on Cybersecurity for medical devices][mdcg_2019_16]**.

### 3.1 Regulatory Status

Although not legally binding, MDCG guidance is considered to represent the "state of the art". Notified Bodies and market surveillance authorities use it as a benchmark when auditing a manufacturer's technical documentation and quality management system. Following the guidance is the most direct way to demonstrate that a device meets the MDR's essential cybersecurity requirements.

### 3.2 "Secure by Design" as a Core Principle

MDCG 2019-16 places strong emphasis on the concept of **"Secure by Design"**. Section 3.1 of the guidance states that security should be "part of the DNA of a device," not an afterthought. It advises manufacturers to:
- Build security in from the earliest design phases.
- Conduct a thorough security risk assessment.
- Implement security controls based on a defence-in-depth strategy.
- Ensure security is maintained throughout the device's entire lifecycle.

This approach, rooted in a robust security risk management process, is presented as the foundation for complying with the GSPRs in Annex I.

### 3.3 Engineering Checklist for Manufacturers
The MDCG guidance translates into a set of practical engineering tasks. The following checklist, based on the guidance, outlines what Notified Bodies expect to see in a device's technical documentation.

#### Secure Development Lifecycle (SDL)
*Guidance hook: [MDCG 2019-16, § 3.1][mdcg_2019_16]*
Manufacturers must adopt and document a Secure Development Lifecycle (SDL) that integrates security into every phase. Key practices include:
- **Security Management**: Defining security policies, roles, and metrics.
- **Requirements Specification**: Specifying security requirements based on the device's intended use and threat model.
- **Secure-by-Design Architecture**: Applying principles like least privilege, defence-in-depth, and using hardware roots of trust.
- **Secure Implementation**: Using secure coding standards and vetted cryptographic libraries.
- **Security V&V**: Performing static/dynamic analysis (SAST/DAST) and penetration testing.
- **Incident & Vulnerability Handling**: Managing vulnerabilities through a coordinated disclosure process.
- **Update Management**: Ensuring a secure process for deploying patches.
- **User Guidance**: Providing clear security guidelines for operators and users.

#### On-Device Security Capabilities
*Guidance hook: [MDCG 2019-16, § 3.3][mdcg_2019_16]*
The guidance provides an "indicative list" of security controls. For connected medical devices, manufacturers are expected to implement a risk-based selection of these, such as:
- **Identity & Access Control**: Unique device identifiers, strong user/node authentication, and role-based access control (RBAC).
- **Data Protection**: Encryption for data-at-rest and data-in-transit, and cryptographic integrity protection.
- **Secure Boot & Execution**: Verifying the integrity of software and firmware during the boot process.
- **Key & Credential Management**: Protecting cryptographic keys in a hardware-backed secure storage environment (e.g., TEE, Secure Element) and managing their lifecycle.
- **Logging & Auditing**: Creating tamper-resistant event logs with accurate timestamps.
- **Hardening**: Disabling all unused ports and services, and enforcing secure-by-default configurations.

#### Secure Updates and Patching
*Guidance hook: [MDCG 2019-16, § 3.8 & 4.2][mdcg_2019_16]*
A robust strategy for managing software updates is critical. This includes:
- **Cryptographically Signed Updates**: All software and firmware updates must be signed to ensure their authenticity and integrity. The device must verify the signature before installation.
- **Timely Remediation**: Having a process to monitor for vulnerabilities (e.g., a PSIRT) and deliver patches in a timely manner.
- **Clear Instructions**: Documenting for users how the update mechanism works and any preconditions required for a successful update.

#### Defining the Operating Environment
*Guidance hook: [MDCG 2019-16, § 3.6][mdcg_2019_16]*
Manufacturers must clearly document the minimum IT and security measures the device relies on to function securely. This information should be in the Instructions for Use (IFU) and might include:
- Required firewall rules or network segmentation.
- Assumptions about physical access controls.
- Required protocols for secure communication (e.g., WPA3, TLS 1.3).

<!-- Citations -->
[mdr_oj]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32017R0745 "MDR Official Journal"
[mdr_consolidated]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0745-20250110 "MDR Consolidated Version"
[mdr_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0745-20250110#anx_I "MDR Annex I – General Safety and Performance Requirements"
[cra_art2]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_2 "CRA Article 2 – Scope"
[mdcg_2019_16]: https://health.ec.europa.eu/system/files/2020-01/md_mdcg_2019_16_guidance_cybersecurity_en_0.pdf "MDCG 2019-16 – Guidance on Cybersecurity for medical devices" 