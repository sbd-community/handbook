---
title: In Vitro Diagnostic Regulation (IVDR)
sidebar_label: 'EU IVDR 2017/746'
sidebar_position: 5
tags: [ivdr, medical, compliance, eu, security]
---
# In Vitro Diagnostic Regulation (EU) 2017/746

## 1. Why the IVDR matters now

The **In Vitro Diagnostic Medical Device Regulation (IVDR)**—Regulation (EU) **2017/746**—is the legal framework for making in vitro diagnostic (IVD) medical devices available on the EU market. It replaces the previous IVD Directive (IVDD) and, like the MDR, significantly raises the bar for quality, safety, and traceability.

The IVDR's scope is broad, covering everything from simple test kits to complex laboratory software and instruments. Any IVD that incorporates software or has a digital component must adhere to the regulation's strict cybersecurity requirements, which are designed to ensure patient safety and data integrity.

:::info Official Texts
- **Official Journal**: [EUR-Lex 32017R0746][ivdr_oj]
- **Consolidated Version**: [EUR-Lex 02017R0746-20250110][ivdr_consolidated]
- **MDCG Guidance**: [MDCG 2019-16 on Cybersecurity][mdcg_2019_16]
:::

**Relationship to other EU laws**

| Law | How it interacts with the IVDR |
|-----|---------------------------|
| **[Cyber-Resilience Act (CRA)](./cra-overview.md)** | Like the MDR, products qualifying as in vitro diagnostic medical devices under the IVDR are **exempt** from the CRA ([CRA Art. 2 § 2(a)][cra_art2]). The IVDR provides its own specific cybersecurity rules. |
| **[GDPR](https://gdpr-info.eu/)** | IVDs can generate and process vast amounts of sensitive personal health data. The security requirements in the IVDR are critical for fulfilling the data protection obligations of the GDPR. |

---

## 2. Key Cybersecurity Requirements ([Annex I][ivdr_annexI])

The IVDR's cybersecurity requirements are detailed in the **General Safety and Performance Requirements (GSPR)** found in **[Annex I][ivdr_annexI]**. Compliance is mandatory for CE marking. The requirements mirror those in the MDR.

### 2.1 Risk Management & Information Security
*Legal hook: [IVDR Annex I, §2, §3, §4][ivdr_annexI]*

The manufacturer must operate a comprehensive risk management system that identifies and mitigates all foreseeable risks, explicitly including those related to information security and the IT environment in which the device operates.

### 2.2 Software Lifecycle
*Legal hook: [IVDR Annex I, §16.2][ivdr_annexI]*

For IVDs containing software, or for software that is itself an IVD, it must be developed according to the state of the art, incorporating principles of:
- Development lifecycle
- Risk management, **including information security**
- Verification and validation

This mandates a secure software development process throughout the product's life.

### 2.3 IT Security
*Legal hook: [IVDR Annex I, §16.4][ivdr_annexI]*

Devices must be "designed and manufactured in such a way as to protect, as far as possible, against unauthorised access that could hamper the device from functioning as intended." This requires foundational security controls to be designed into the device to prevent unauthorized access or manipulation.

---

## 3. Guidance & the State of the Art (MDCG 2019-16)

While the IVDR lays down the legal requirements, it does not specify *how* to meet them. The **Medical Device Coordination Group (MDCG)** publishes guidance documents that explain the consensus view of the European Commission and national competent authorities on how to apply the regulations.

For cybersecurity, the most important of these is **[MDCG 2019-16 – Guidance on Cybersecurity for medical devices][mdcg_2019_16]**, which applies equally to IVDs.

### 3.1 Regulatory Status

Although not legally binding, MDCG guidance is considered to represent the "state of the art". Notified Bodies and market surveillance authorities use it as a benchmark when auditing a manufacturer's technical documentation and quality management system. Following the guidance is the most direct way to demonstrate that a device meets the IVDR's essential cybersecurity requirements.

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
The guidance provides an "indicative list" of security controls. For connected IVDs, manufacturers are expected to implement a risk-based selection of these, such as:
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
[ivdr_oj]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32017R0746 "IVDR Official Journal"
[ivdr_consolidated]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0746-20250110 "IVDR Consolidated Version"
[ivdr_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0746-20250110#anx_I "IVDR Annex I – General Safety and Performance Requirements"
[cra_art2]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_2 "CRA Article 2 – Scope"
[mdcg_2019_16]: https://health.ec.europa.eu/system/files/2020-01/md_mdcg_2019_16_guidance_cybersecurity_en_0.pdf "MDCG 2019-16 – Guidance on Cybersecurity for medical devices" 