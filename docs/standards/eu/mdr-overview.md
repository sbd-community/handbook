---
title: Medical Device Regulation (MDR)
sidebar_label: 'EU MDR 2017/745'
sidebar_position: 4
tags: [mdr, medical, compliance, eu, security]
---
# Medical Device Regulation (EU) 2017/745

## 1. Why the MDR matters for connected devices

The **Medical Device Regulation (MDR)**—Regulation (EU) **2017/745**—is the comprehensive legal framework for placing medical devices on the EU market. It replaces the previous Medical Device Directive (MDD), establishing a more robust, transparent, and sustainable regulatory system with a strong focus on a lifecycle approach to safety and performance.

A critical feature of the MDR is its emphasis on software and cybersecurity. For any medical device with digital elements—from hospital infusion pumps to consumer wellness apps that qualify as a medical device—the MDR legally mandates a secure-by-design approach. The regulation's requirements are detailed in the **General Safety and Performance Requirements (GSPRs)** of **[Annex I][mdr_annexI]**.

:::info Official Texts
- **Official Journal**: [EUR-Lex 32017R0745][mdr_oj]
- **Consolidated Version**: [EUR-Lex 02017R0745-20250110][mdr_consolidated]
:::

:::info Key Guidance
While the MDR lays down the legal requirements, it does not specify *how* to meet them. The **Medical Device Coordination Group (MDCG)** publishes guidance that represents the "state of the art" for compliance.
- **Cybersecurity**: [MDCG 2019-16 – Guidance on Cybersecurity for medical devices][mdcg_2019_16]
:::

**Timeline of Key Dates**

| Date | Event | Legal Reference |
| :--- | :--- | :--- |
| **2017-05-25** | MDR entered into force. | [MDR Art. 123(1)][mdr_art123] |
| **2021-05-26** | MDR fully applies, replacing the MDD. | [MDR Art. 123(2)][mdr_art123] |
| **2027-12-31** | End of transition for higher-risk (Class III, IIb) devices certified under the old MDD. | [Regulation (EU) 2023/607][mdr_transition_reg] |
| **2028-12-31** | End of transition for lower-risk (Class IIa, I) devices certified under the old MDD. | [Regulation (EU) 2023/607][mdr_transition_reg] |

**Relationship to other EU laws**

| Law | How it interacts with the MDR |
|-----|---------------------------|
| **[Cyber-Resilience Act (CRA)](./cra-overview.md)** | Products qualifying as medical devices under the MDR are **exempt** from the CRA ([CRA Art. 2 § 2(a)][cra_art2]). The MDR is considered *lex specialis*—more specific legislation that provides its own comprehensive set of cybersecurity rules. |
| **[GDPR](https://gdpr-info.eu/)** | Medical devices often process sensitive health data, making compliance with the General Data Protection Regulation essential. The MDR's security requirements provide a foundation for protecting this data. |
| **[IVDR](./ivdr-overview.md)** | The IVDR is a parallel regulation covering in vitro diagnostic devices. Its structure and cybersecurity requirements are nearly identical to the MDR's. |

## 2. Scope & Classification

### 2.1 What is a Medical Device?
The MDR defines a medical device as any instrument, apparatus, software, implant, or other article intended for a specific *medical purpose*, such as:
- Diagnosis, prevention, monitoring, prediction, prognosis, treatment, or alleviation of disease.
- Diagnosis, monitoring, treatment, alleviation of, or compensation for, an injury or disability.
- Investigation, replacement, or modification of the anatomy or of a physiological or pathological process.

Software can be a medical device in its own right (**Software as a Medical Device - SaMD**) or be a component of a physical medical device.

### 2.2 Device Classification
The MDR uses a risk-based classification system. The class determines the strictness of the conformity assessment procedure.

| Class | Risk Level | Examples |
|---|---|---|
| **Class I** | Low | Non-sterile bandages, stethoscopes. If sterile (Is), with measuring function (Im), or reusable surgical instrument (Ir), Notified Body involvement is needed. |
| **Class IIa** | Medium | Hearing aids, dental fillings, surgical clamps. |
| **Class IIb** | Medium-High | Infusion pumps, ventilators, intensive care monitors, most SaMD. |
| **Class III** | High | Pacemakers, heart valves, implantable defibrillators. |

This classification is crucial as it dictates the required level of evidence and the specific conformity assessment procedure the manufacturer must follow, as detailed in Section 4.

## 3. MDR Requirements & How to Implement Them

The following table translates the MDR's General Safety and Performance Requirements (**GSPRs**) and the official **MDCG 2019-16** guidance into a practical engineering checklist. Each row links to the relevant implementation guide in this handbook.

| Obligations & Legal Basis | Engineering Tasks & Interpretation | Implementation Guides |
|---|---|---|
| **Risk Management System**<br/>[MDR Annex I, §3][mdr_annexI_3]<br/>[MDCG 2019-16, §3.2][mdcg_2019_16_s3_2] | Establish a risk management system as a continuous, iterative process across the entire lifecycle. This must explicitly include information security risks alongside safety risks. | [Threat Modeling](../../implementation/build-phase/threat-modeling.md) |
| **Secure Software Lifecycle**<br/>[MDR Annex I, §17.2][mdr_annexI_17_2]<br/>[MDCG 2019-16, §3.1][mdcg_2019_16_s3_1] | Develop and manufacture software according to the state of the art, incorporating a secure development lifecycle (SDL) with security integrated into every phase. | [CI/CD Hardening](../../implementation/operate-phase/cicd-hardening.md) |
| **IT Security Measures**<br/>[MDR Annex I, §17.4][mdr_annexI_17_4]<br/>[MDCG 2019-16, §3.3][mdcg_2019_16_s3_3] | Design and manufacture the device to protect against unauthorised access. Implement fundamental controls like authentication, access control, encryption, and secure-by-default configurations. | [Secure Configuration](../../implementation/build-phase/secure-configuration.md) |
| **Secure Authentication & Access Control**<br/>[MDR Annex I, §17.4][mdr_annexI_17_4]<br/>[MDCG 2019-16, §3.3][mdcg_2019_16_s3_3] | Implement strong, unique user authentication (not shared passwords) and role-based access control (RBAC) to enforce the principle of least privilege. | [Unique Device Identity](../../implementation/build-phase/unique-device-identity.md) |
| **Secure Cryptography & Key Management**<br/>[MDR Annex I, §17.2][mdr_annexI_17_2]<br/>[MDCG 2019-16, §3.3][mdcg_2019_16_s3_3] | Use state-of-the-art encryption to protect data-in-transit and data-at-rest. Protect cryptographic keys in a hardware-backed secure storage environment (e.g., TEE, Secure Element). | [Key Provisioning & Storage](../../implementation/build-phase/key-provisioning.md) |
| **Secure Boot & Integrity Protection**<br/>[MDR Annex I, §17.2][mdr_annexI_17_2]<br/>[MDCG 2019-16, §3.3][mdcg_2019_16_s3_3] | Verify the integrity and authenticity of all software and firmware during the boot process to prevent tampering and ensure the device only runs authorised code. | [Secure Boot](../../implementation/build-phase/secure-boot.md) |
| **Security Logging**<br/>[MDR Annex I, §17.4][mdr_annexI_17_4]<br/>[MDCG 2019-16, §3.3][mdcg_2019_16_s3_3] | Create tamper-resistant event logs for security-relevant events, including access attempts, configuration changes, and errors, with accurate timestamps. | [Security Logging](../../implementation/operate-phase/security-logging.md) |
| **Secure Updates & Patching**<br/>[MDR Annex I, §17.2][mdr_annexI_17_2]<br/>[MDCG 2019-16, §3.8][mdcg_2019_16_s3_8] | Implement a secure update mechanism. All updates must be cryptographically signed to ensure authenticity and integrity, and the device must verify the signature before installation. | [Secure OTA Updates](../../implementation/build-phase/ota-updates.md) |
| **Information to Users**<br/>[MDR Annex I, §23.4][mdr_annexI_23_4]<br/>[MDCG 2019-16, §4.2][mdcg_2019_16_s4_2] | Provide clear, comprehensive instructions for use (IFU), including minimum IT requirements, secure configuration guidance, and details on the update process. | [User Documentation](../../implementation/build-phase/user-documentation.md) |

## 4. Conformity Assessment

To affix a CE mark to a medical device, manufacturers must undergo a conformity assessment procedure. The route depends on the device's risk class. Unlike the CRA, the vast majority of connected medical devices require a **Notified Body**—an independent third-party organisation designated by an EU authority—to audit the device's technical documentation and the manufacturer's Quality Management System (QMS).

| Class | Assessment Route | Notified Body Audit Required? |
|---|---|---|
| **Class I** | Manufacturer prepares technical documentation and declares conformity. | **No**, unless the device is sterile (Is), has a measuring function (Im), or is a reusable surgical instrument (Ir). |
| **Class IIa** | Audit of the QMS and assessment of technical documentation for at least one representative device per category. | ✅ **Yes** |
| **Class IIb** | Audit of the QMS and assessment of technical documentation for at least one representative device per generic group. For implantables, assessment of every device's technical documentation is required. | ✅ **Yes** |
| **Class III** | Full audit of the QMS and scrutiny of every device's technical documentation. May require consultation with expert panels. | ✅ **Yes** |

## 5. Post-Market Surveillance & Vigilance

The MDR establishes a lifecycle approach, making post-market activities a core regulatory requirement.

- **Post-Market Surveillance (PMS) System** ([MDR Art. 83][mdr_art83]): Manufacturers must have a system to proactively collect and review experience gained from their devices on the market. This data is used to continuously update the risk assessment and technical documentation. For Class IIa devices and higher, this is documented in a **Periodic Safety Update Report (PSUR)**.
- **Vigilance Reporting** ([MDR Art. 87][mdr_art87]): Manufacturers must report all **serious incidents** and **Field Safety Corrective Actions (FSCAs)** to the relevant national authorities. A cybersecurity event that could lead to patient harm qualifies as a reportable incident.
- **Vulnerability Management**: The MDCG guidance makes it clear that post-market surveillance must include monitoring for new cybersecurity vulnerabilities in device components and having a process to remediate them in a timely manner.

<!-- Citations -->
[mdr_oj]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32017R0745 "MDR Official Journal"
[mdr_consolidated]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0745-20250110 "MDR Consolidated Version"
[mdr_art83]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0745-20250110#art_83 "MDR Article 83 - Post-market surveillance system"
[mdr_art87]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0745-20250110#art_87 "MDR Article 87 - Reporting of serious incidents"
[mdr_art123]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0745-20250110#art_123 "MDR Article 123 - Entry into force and date of application"
[mdr_transition_reg]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32023R0607 "Regulation (EU) 2023/607 on transitional provisions"
[mdr_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0745-20250110#anx_I "MDR Annex I – General Safety and Performance Requirements"
[mdr_annexI_3]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0745-20250110#anx_I "MDR Annex I, Section 3 - Risk management system"
[mdr_annexI_17_2]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0745-20250110#anx_I "MDR Annex I, Section 17.2 - Secure Software Lifecycle"
[mdr_annexI_17_4]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0745-20250110#anx_I "MDR Annex I, Section 17.4 - IT Security Measures"
[mdr_annexI_23_4]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0745-20250110#anx_I "MDR Annex I, Section 23.4 - Information for Users"
[cra_art2]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_2 "CRA Article 2 – Scope"
[mdcg_2019_16]: https://ec.europa.eu/docsroom/documents/41863/attachments/1/translations/en/renditions/native "MDCG 2019-16 – Guidance on Cybersecurity for medical devices"
[mdcg_2019_16_s3_1]: https://ec.europa.eu/docsroom/documents/41863/attachments/1/translations/en/renditions/native "MDCG 2019-16, Section 3.1 - Secure by design"
[mdcg_2019_16_s3_2]: https://ec.europa.eu/docsroom/documents/41863/attachments/1/translations/en/renditions/native "MDCG 2019-16, Section 3.2 - Security Risk Management"
[mdcg_2019_16_s3_3]: https://ec.europa.eu/docsroom/documents/41863/attachments/1/translations/en/renditions/native "MDCG 2019-16, Section 3.3 - Security Capabilities"
[mdcg_2019_16_s3_8]: https://ec.europa.eu/docsroom/documents/41863/attachments/1/translations/en/renditions/native "MDCG 2019-16, Section 3.8 - Lifecycle Aspects"
[mdcg_2019_16_s4_2]: https://ec.europa.eu/docsroom/documents/41863/attachments/1/translations/en/renditions/native "MDCG 2019-16, Section 4.2 - Instructions for use" 