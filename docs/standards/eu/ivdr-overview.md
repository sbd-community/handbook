---
title: In Vitro Diagnostic Regulation (IVDR)
sidebar_label: 'EU IVDR 2017/746'
sidebar_position: 5
tags: [ivdr, medical, compliance, eu, security]
---
# In Vitro Diagnostic Regulation (EU) 2017/746

## 1. Why the IVDR matters for connected devices

The **In Vitro Diagnostic Medical Device Regulation (IVDR)**—Regulation (EU) **2017/746**—is the legal framework for making in vitro diagnostic (IVD) medical devices available on the EU market. It replaces the previous IVD Directive (IVDD) and, like the MDR, significantly raises the bar for quality, safety, and traceability with a strong focus on a lifecycle approach.

The IVDR's scope is broad, covering everything from simple test kits to complex laboratory software and instruments. Any IVD that incorporates software or has a digital component must adhere to the regulation's strict cybersecurity requirements, designing and building according to the **"state of the art"** to ensure patient safety and data integrity. These requirements are detailed in the **General Safety and Performance Requirements (GSPRs)** of **[Annex I][ivdr_annexI]**.

:::info Official Texts
- **Official Journal**: [EUR-Lex 32017R0746][ivdr_oj]
- **Consolidated Version**: [EUR-Lex 02017R0746-20250110][ivdr_consolidated]
:::

:::info Key Guidance & State of the Art
While the IVDR lays down the legal requirements, the **Medical Device Coordination Group (MDCG)** publishes guidance that represents the "state of the art" for compliance. The key cybersecurity guidance for the MDR applies equally to the IVDR.
- **Cybersecurity**: [MDCG 2019-16 – Guidance on Cybersecurity for medical devices][mdcg_2019_16]

Because the "state of the art" in cybersecurity evolves rapidly, guidance from other modern regulations can be highly valuable. While primarily a playbook for the [Cyber-Resilience Act](./cra-overview.md), Germany's BSI technical guideline is an excellent resource for implementing best practices that support IVDR compliance.
- **Best Practice Reference**: [BSI TR-03183 – Cyber Resilience Requirements for Manufacturers and Products][bsi_tr_03183]
:::

**Timeline of Key Dates**

| Date | Event | Legal Reference |
| :--- | :--- | :--- |
| **2017-05-25** | IVDR entered into force. | [IVDR Art. 113(1)][ivdr_art113] |
| **2022-05-26** | IVDR fully applies, replacing the IVDD. | [IVDR Art. 113(2)][ivdr_art113] |
| **2025-05-26** | End of transition for high-risk (Class D) devices certified under the old IVDD. | [Regulation (EU) 2022/112][ivdr_transition_reg] |
| **2026-05-26** | End of transition for Class C devices certified under the old IVDD. | [Regulation (EU) 2022/112][ivdr_transition_reg] |
| **2027-05-26** | End of transition for Class B and sterile Class A devices certified under the old IVDD. | [Regulation (EU) 2022/112][ivdr_transition_reg] |

**Relationship to other EU laws**

| Law | How it interacts with the IVDR |
|-----|---------------------------|
| **[Cyber-Resilience Act (CRA)](./cra-overview.md)** | Like the MDR, products qualifying as in vitro diagnostic medical devices under the IVDR are **exempt** from the CRA ([CRA Art. 2 § 2(a)][cra_art2]). The IVDR provides its own specific cybersecurity rules. |
| **[GDPR](https://gdpr-info.eu/)** | IVDs can generate and process vast amounts of sensitive personal health data. The security requirements in the IVDR are critical for fulfilling the data protection obligations of the GDPR. |
| **[MDR](./mdr-overview.md)** | The MDR is a parallel regulation covering medical devices. Its structure and cybersecurity requirements are nearly identical to the IVDR's. |

## 2. Scope & Classification

### 2.1 What is an In Vitro Diagnostic (IVD) Device?
The IVDR defines an IVD as any medical device which is a reagent, calibrator, control material, kit, instrument, or software, intended to be used *in vitro* for the examination of specimens derived from the human body (e.g., blood, tissue) to provide information on:
- A physiological or pathological process or state.
- A congenital physical or mental impairment.
- The predisposition to a medical condition or a disease.
- The safety and compatibility with potential recipients.
- The prediction or monitoring of treatment response.

Software can be an IVD in its own right (**Software as an IVD**) or be a component of a physical IVD instrument.

### 2.2 Device Classification
The IVDR uses a risk-based classification system based on the potential public and personal health risk. The class determines the strictness of the conformity assessment procedure.

| Class | Risk Level | Examples |
|---|---|---|
| **Class A** | Low individual & low public health risk | Specimen receptacles, laboratory instruments, buffer solutions. If sterile, requires Notified Body involvement. |
| **Class B** | Moderate individual & low public health risk | Self-tests for pregnancy or cholesterol, clinical chemistry analysers. |
| **Class C** | High individual & moderate public health risk | Tests for cancer markers (e.g., PSA), genetic testing, tests for infectious agents like influenza or herpes. |
| **Class D** | High individual & high public health risk | Tests for transmissible agents in blood for transfusion (e.g., Hepatitis C, HIV), tests for life-threatening infectious diseases (e.g., Ebola). |

This classification is crucial as it dictates the required level of evidence and the specific conformity assessment procedure the manufacturer must follow, as detailed in Section 4.

## 3. IVDR Requirements & How to Implement Them

The following table translates the IVDR's General Safety and Performance Requirements (**GSPRs**) and the official **MDCG 2019-16** guidance into a practical engineering checklist. Requirements marked with a `(*)` are not explicitly mandated by the IVDR but represent the "state of the art" based on modern cybersecurity practices and related regulations like the CRA. Each row links to the relevant implementation guide in this handbook.

| Obligations & Legal Basis | Engineering Tasks & Interpretation | Implementation Guides |
|---|---|---|
| **Risk Management System**<br/>[IVDR Annex I, §3][ivdr_annexI_3]<br/>[MDCG 2019-16, §3.2][mdcg_2019_16_s3_2] | Establish a risk management system as a continuous, iterative process across the entire lifecycle. This must explicitly include information security risks alongside safety risks. | [Threat Modeling](../../implementation/build-phase/threat-modeling.md) |
| **Secure Software Lifecycle**<br/>[IVDR Annex I, §16.2][ivdr_annexI_16_2]<br/>[MDCG 2019-16, §3.1][mdcg_2019_16_s3_1] | Develop and manufacture software according to the state of the art, incorporating a secure development lifecycle (SDL) with security integrated into every phase. | [CI/CD Hardening](../../implementation/operate-phase/cicd-hardening.md) |
| **IT Security Measures**<br/>[IVDR Annex I, §16.4][ivdr_annexI_16_4]<br/>[MDCG 2019-16, §3.3][mdcg_2019_16_s3_3] | Define and implement minimum requirements for hardware, IT network characteristics, and IT security measures to protect against unauthorised access and ensure the device can be run as intended. | [Secure Configuration](../../implementation/build-phase/secure-configuration.md) |
| **Secure Authentication & Access Control**<br/>[IVDR Annex I, §16.4][ivdr_annexI_16_4]<br/>[MDCG 2019-16, §3.3][mdcg_2019_16_s3_3] | Implement strong, unique user authentication (not shared passwords) and role-based access control (RBAC) to enforce the principle of least privilege. | [Unique Device Identity](../../implementation/build-phase/unique-device-identity.md) |
| **Secure Cryptography & Key Management**<br/>[IVDR Annex I, §16.2][ivdr_annexI_16_2]<br/>[MDCG 2019-16, §3.3][mdcg_2019_16_s3_3] | Use state-of-the-art encryption to protect data-in-transit and data-at-rest. Protect cryptographic keys in a hardware-backed secure storage environment (e.g., TEE, Secure Element). | [Key Provisioning & Storage](../../implementation/build-phase/key-provisioning.md) |
| **Secure Boot & Integrity Protection**<br/>[IVDR Annex I, §16.2][ivdr_annexI_16_2]<br/>[MDCG 2019-16, §3.3][mdcg_2019_16_s3_3] | Verify the integrity and authenticity of all software and firmware during the boot process to prevent tampering and ensure the device only runs authorised code. | [Secure Boot](../../implementation/build-phase/secure-boot.md) |
| **Security Logging**<br/>[IVDR Annex I, §16.4][ivdr_annexI_16_4]<br/>[MDCG 2019-16, §3.3][mdcg_2019_16_s3_3] | Create tamper-resistant event logs for security-relevant events, including access attempts, configuration changes, and errors, with accurate timestamps. | [Security Logging](../../implementation/operate-phase/security-logging.md) |
| **Secure Updates & Patching**<br/>[IVDR Annex I, §16.2][ivdr_annexI_16_2]<br/>[MDCG 2019-16, §3.8][mdcg_2019_16_s3_8] | Implement a secure update mechanism. All updates must be cryptographically signed to ensure authenticity and integrity, and the device must verify the signature before installation. | [Secure OTA Updates](../../implementation/build-phase/ota-updates.md) |
| **Information to Users**<br/>[IVDR Annex I, §20.4.1][ivdr_annexI_20_4_1]<br/>[MDCG 2019-16, §4.2][mdcg_2019_16_s4_2] | Provide clear Instructions for Use (IFU) including: minimum IT requirements; secure configuration guidance; network port/protocol details; instructions for secure deployment and updates; and details of backup/restore features. Maintain security information in an electronic form to allow for dynamic updates. | [User Documentation](../../implementation/build-phase/user-documentation.md) |
| **No Known Vulnerabilities (*)**<br/>[CRA Annex I §1(2)(a)][cra_annexI] | Ship without known exploitable vulnerabilities. Establish a process to identify vulnerabilities in all product components, including third-party software. | [CI/CD Hardening](../../implementation/operate-phase/cicd-hardening.md) |
| **Regular Security Testing (*)**<br/>[CRA Annex I, Part II, §3][cra_annexI] | Regularly test the product for vulnerabilities using both internal processes (e.g., SAST/DAST) and independent experts (e.g., penetration testing). | [Static & Dynamic Analysis](../../tools/static-and-dynamic-analysis.md) |
| **Identify Components (SBOM) (*)**<br/>[CRA Art. 13 §3][cra_art13] | Create and maintain an up-to-date, machine-readable Software Bill of Materials (SBOM) for all software components to facilitate vulnerability management. | [SBOM & VEX Workflows](../../implementation/build-phase/sbom-vex.md) |
| **Coordinated Vulnerability Disclosure (*)**<br/>[CRA Art. 13(8)][cra_art13] | Publish a clear Coordinated Vulnerability Disclosure (CVD) policy and provide an easily accessible contact channel for third parties to report vulnerabilities. | [Vulnerability Disclosure](../../implementation/operate-phase/vulnerability-disclosure.md) |
| **Minimum Support Period (*)**<br/>[CRA Art. 13(8)][cra_art13] | Define and publish the minimum length of time security updates will be provided. This support period should be appropriate for the device type and its expected lifetime. | [Patch Cadence](../../implementation/operate-phase/patch-cadence.md) |

## 4. Conformity Assessment & Notified Bodies

To affix a CE mark, manufacturers must undergo a conformity assessment. For most IVDs, this requires a **Notified Body** to audit the device's technical documentation and the manufacturer's Quality Management System (QMS).

The role of the Notified Body includes:
- **Auditing the QMS:** Conducting on-site audits (including unannounced audits) of the manufacturer's processes.
- **Reviewing Technical Documentation:** Assessing the technical file, including performance evaluation and cybersecurity evidence, based on the device's risk class.
- **Testing:** Performing or ordering physical or laboratory tests to verify conformity.
- **Issuing Certificates:** Granting, suspending, or withdrawing CE certificates.

| Class | Assessment Route | Notified Body Audit Required? |
|---|---|---|
| **Class A** | Manufacturer prepares technical documentation and declares conformity. | **No**, unless the device is sterile. |
| **Class B** | Audit of the QMS and assessment of technical documentation for at least one representative device per category. | ✅ **Yes** |
| **Class C** | Audit of the QMS and assessment of technical documentation for at least one representative device. May require batch-verification by the Notified Body. | ✅ **Yes** |
| **Class D** | Full audit of the QMS, scrutiny of all technical documentation, and batch-verification by a Notified Body or EU reference laboratory. | ✅ **Yes** |

## 5. Post-Market Surveillance & Vigilance

The IVDR establishes a lifecycle approach, making post-market activities a core regulatory requirement. Manufacturers have an ongoing duty to keep their devices safe and secure after they are placed on the market.

- **Post-Market Surveillance (PMS) System** ([IVDR Art. 78][ivdr_art78]): Manufacturers must have a system to proactively collect and review data from their devices on the market. This data is used to continuously update the risk assessment and technical documentation.
- **Periodic Safety Update Report (PSUR)** ([IVDR Art. 81][ivdr_art81]): For Class C and D devices, the results of the PMS are documented in a PSUR, which must be updated at least annually.
- **Vigilance Reporting** ([IVDR Art. 82][ivdr_art82]): Manufacturers must report all **serious incidents** and **Field Safety Corrective Actions (FSCAs)** to the relevant national authorities. A cybersecurity event that could lead to an incorrect test result and patient harm qualifies as a reportable incident. Reporting must follow strict timelines:
    - **No later than 2 days** after awareness of a serious public health threat.
    - **No later than 10 days** after awareness of a death or unanticipated serious deterioration in health.
    - **No later than 15 days** for all other serious incidents.

## 6. Technical Documentation

Manufacturers must draw up and maintain comprehensive technical documentation as laid out in **[Annex II][ivdr_annexII]** and **[Annex III][ivdr_annexIII]** of the IVDR. This is a living document that must be kept up to date throughout the device's lifecycle.

For cybersecurity, the technical documentation must include:
- A detailed cybersecurity risk assessment.
- A description of the vulnerability management plan.
- A Software Bill of Materials (SBOM).
- All verification and validation results, including security test reports (e.g., penetration testing).
- The full Instructions for Use (IFU) and any other user-facing security documentation.

<!-- Citations -->
[ivdr_oj]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32017R0746 "IVDR Official Journal"
[ivdr_consolidated]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0746-20250110 "IVDR Consolidated Version"
[ivdr_art48]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0746-20250110#art_48 "IVDR Article 48 - Conformity assessment procedures"
[ivdr_art78]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0746-20250110#art_78 "IVDR Article 78 - Post-market surveillance system"
[ivdr_art81]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0746-20250110#art_81 "IVDR Article 81 - Periodic safety update report"
[ivdr_art82]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0746-20250110#art_82 "IVDR Article 82 - Reporting of serious incidents"
[ivdr_art113]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0746-20250110#art_113 "IVDR Article 113 - Entry into force and date of application"
[ivdr_transition_reg]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R0112 "Regulation (EU) 2022/112 on transitional provisions"
[ivdr_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0746-20250110#anx_I "IVDR Annex I – General Safety and Performance Requirements"
[ivdr_annexII]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0746-20250110#anx_II "IVDR Annex II - Technical Documentation"
[ivdr_annexIII]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0746-20250110#anx_III "IVDR Annex III - Technical Documentation on Post-Market Surveillance"
[ivdr_annexI_3]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0746-20250110#anx_I "IVDR Annex I, Section 3 - Risk management system"
[ivdr_annexI_16_2]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0746-20250110#anx_I "IVDR Annex I, Section 16.2 - Secure Software Lifecycle"
[ivdr_annexI_16_4]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0746-20250110#anx_I "IVDR Annex I, Section 16.4 - IT Security Measures"
[ivdr_annexI_20_4_1]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0746-20250110#anx_I "IVDR Annex I, Section 20.4.1 - Information for Users"
[cra_art2]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_2 "CRA Article 2 – Scope"
[cra_art13]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_13 "CRA Article 13 – Obligations of manufacturers"
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements"
[mdcg_2019_16]: https://ec.europa.eu/docsroom/documents/41863/attachments/1/translations/en/renditions/native "MDCG 2019-16 – Guidance on Cybersecurity for medical devices"
[mdcg_2019_16_s3_1]: https://ec.europa.eu/docsroom/documents/41863/attachments/1/translations/en/renditions/native "MDCG 2019-16, Section 3.1 - Secure by design"
[mdcg_2019_16_s3_2]: https://ec.europa.eu/docsroom/documents/41863/attachments/1/translations/en/renditions/native "MDCG 2019-16, Section 3.2 - Security Risk Management"
[mdcg_2019_16_s3_3]: https://ec.europa.eu/docsroom/documents/41863/attachments/1/translations/en/renditions/native "MDCG 2019-16, Section 3.3 - Security Capabilities"
[mdcg_2019_16_s3_8]: https://ec.europa.eu/docsroom/documents/41863/attachments/1/translations/en/renditions/native "MDCG 2019-16, Section 3.8 - Lifecycle Aspects"
[mdcg_2019_16_s4_2]: https://ec.europa.eu/docsroom/documents/41863/attachments/1/translations/en/renditions/native "MDCG 2019-16, Section 4.2 - Instructions for use"
[bsi_tr_03183]: https://www.bsi.bund.de/EN/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/Technische-Richtlinien/TR-nach-Thema-sortiert/tr03183/TR-03183_node.html "BSI Technical Guideline TR-03183" 