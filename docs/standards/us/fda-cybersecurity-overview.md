---
title: "FDA Cybersecurity"
sidebar_label: "US FDA Cybersecurity"
sidebar_position: 11
tags: [fda, medical, compliance, us, security, 524b, pma, 510k]
---
# FDA Cybersecurity Requirements for Medical Devices

## 1. Why FDA Cybersecurity Requirements Matter

In the United States, the Food and Drug Administration (FDA) is responsible for ensuring the safety and effectiveness of medical devices. With the increasing connectivity of these devices, cybersecurity has become a critical component of patient safety.

The **Consolidated Appropriations Act, 2023** amended the Federal Food, Drug, and Cosmetic (FD&C) Act by adding **Section 524B, "Ensuring Cybersecurity of Devices."** This section creates a legal mandate for manufacturers of internet-connected medical devices (termed "cyber devices") to implement robust cybersecurity measures and demonstrate them to the agency as part of their premarket review.

Failure to provide the required cybersecurity information will result in the FDA refusing to accept the submission.

:::info Official Texts & Guidance
- **The Law**: The text of the law creating the new cybersecurity requirements.
  - [FD&C Act § 524B][fdc_524b]
- **Premarket Cybersecurity Guidance**: The core FDA guidance detailing the specific documentation and technical controls required.
  - [Cybersecurity in Medical Devices (2025)][fda_guidance]
- **Refuse to Accept (RTA) Policy**: Explains how the FDA will reject incomplete submissions.
  - [Refuse to Accept Policy for 510(k)s][fda_rta_policy]
- **Frequently Asked Questions**: A helpful resource answering common questions.
  - [Cybersecurity in Medical Devices FAQs][fda_faq]
:::

| FDA Milestone | Legal Basis | Date |
| :--- | :--- | :--- |
| Consolidated Appropriations Act enacted | [FDORA § 3305][fdora_3305] | **2022-12-29** |
| Section 524B requirements become effective | [FD&C Act § 524B][fdc_524b] | **2023-03-29** |
| Previous Premarket Guidance Published | Superseded | **2023-09-27** |
| Current Premarket Guidance Published | [FDA Guidance][fda_guidance] | **2025-06-27** |

**Relationship to other regulations**

| Regulation | How it interacts with FDA Requirements |
|---|---|
| **[EU MDR / IVDR](../eu/mdr-overview.md)** | The FDA's rules are the US counterpart to the cybersecurity requirements in the EU's Medical Device Regulation (MDR) and In Vitro Diagnostic Regulation (IVDR). While the legal structures differ, the core principles of secure-by-design, risk management, and lifecycle support are closely aligned. |
| **HIPAA** | The Health Insurance Portability and Accountability Act (HIPAA) focuses on protecting patient health information. FDA cybersecurity rules focus on the safety and effectiveness of the device itself. The two are complementary: a secure device is essential for protecting the data it processes. |

## 2. Scope – Which Products Are Covered?

The requirements of Section 524B apply to any **"cyber device"** for which a premarket submission (e.g., 510(k), PMA, De Novo) is made.

### 2.1 Definition of a "Cyber Device"

A cyber device is any device that meets **all three** of the following criteria ([FD&C Act § 524B(c)][fdc_524b]):
1.  Includes software (including firmware or programmable logic).
2.  Has the ability to connect to the internet.
3.  Contains any technological characteristics that could be vulnerable to cybersecurity threats.

The FDA interprets the "ability to connect to the internet" very broadly. A device is in scope if it can connect, *whether intentionally or unintentionally*, through any means at any point in its lifecycle.

### 2.2 Examples of Connectivity

The following features would bring a device into the scope of being a "cyber device" ([FDA Guidance Sec. VII.B][fda_guidance]):
-   Direct network, server, or cloud connections (e.g., Ethernet, Wi-Fi).
-   Radio-frequency communications (e.g., Cellular, Bluetooth, BLE).
-   Magnetic inductive communications (e.g., used by some programmers for implants).
-   Hardware connectors that *could* be used to connect to the internet (e.g., USB, serial port), even if only used for servicing.

## 3. FDA Requirements & How to Implement Them

The requirements of Section 524B of the FD&C Act are broad, tasking manufacturers with creating plans, implementing processes, and providing evidence of security. The FDA's official guidance, "Cybersecurity in Medical Devices," provides the detailed interpretation and expectations for meeting these requirements.

The obligations can be broken down into two main categories: the overarching governance and lifecycle processes, and the specific security capabilities that must be designed into the device.

### 3.1 Cybersecurity Governance & Lifecycle Requirements

This table outlines the core organizational and process-related requirements mandated by the FDA. These are foundational to ensuring security is considered throughout the total product lifecycle.

| Obligation & Legal Basis | Manufacturer Actions | Implementation Guides |
| :--- | :--- | :--- |
| **Cybersecurity Management Plan**<br/>[FD&C Act § 524B(b)(1)][fdc_524b]<br/>[FDA Guidance Sec. VI.B][fda_guidance] | Create and submit a plan to monitor, identify, and address postmarket vulnerabilities in a reasonable time, including a process for coordinated vulnerability disclosure. | • [Vulnerability Disclosure](../../implementation/operate-phase/vulnerability-disclosure.md)<br/>• [Patch Cadence](../../implementation/operate-phase/patch-cadence.md) |
| **Secure Product Development Framework (SPDF)**<br/>[FD&C Act § 524B(b)(2)][fdc_524b]<br/>[FDA Guidance Sec. V][fda_guidance] | Design, develop, and maintain the device according to a Secure Product Development Framework (SPDF) that encompasses security risk management, security architecture, and security testing. | • [Threat Modeling](../../implementation/build-phase/threat-modeling.md)<br/>• [CI/CD Hardening](../../implementation/operate-phase/cicd-hardening.md) |
| **Software Bill of Materials (SBOM)**<br/>[FD&C Act § 524B(b)(3)][fdc_524b]<br/>[FDA Guidance Sec. V.A.4][fda_guidance] | Provide a complete Software Bill of Materials (SBOM) for the device, including all commercial, open-source, and off-the-shelf software components and their dependencies. | [SBOM & VEX](../../implementation/build-phase/sbom-vex.md) |
| **Labeling & Transparency**<br/>[FD&C Act § 502][fdc_502]<br/>[FDA Guidance Sec. VI.A][fda_guidance] | Provide comprehensive labeling that allows users to understand and manage cybersecurity risks, including instructions for secure configuration and an SBOM. | [User Documentation](../../implementation/build-phase/user-documentation.md) |

### 3.2 Device Security Capabilities

This table outlines the key technical security controls the FDA expects to be implemented in a medical device. The specific controls are detailed in Appendix 1 of the FDA's guidance.

| Obligation & Legal Basis | Engineering Tasks | Implementation Guides |
| :--- | :--- | :--- |
| **Authentication**<br/>[FDA Guidance Appx. 1][fda_guidance] | Implement cryptographically strong methods to verify the identity of users and devices, and to ensure the authenticity and integrity of all data and commands. | • [Unique Device Identity](../../implementation/build-phase/unique-device-identity.md)<br/>• [Key Provisioning](../../implementation/build-phase/key-provisioning.md) |
| **Authorization**<br/>[FDA Guidance Appx. 1][fda_guidance] | Enforce a principle of "least privilege," ensuring that authenticated users and systems can only access the specific data and functions necessary for their role. | [Secure Configuration](../../implementation/build-phase/secure-configuration.md) |
| **Cryptography**<br/>[FDA Guidance Appx. 1][fda_guidance] | Use industry-standard, state-of-the-art cryptographic algorithms and protocols for all security functions, including secure key management and storage. | [Key Provisioning](../../implementation/build-phase/key-provisioning.md) |
| **Code, Data, & Execution Integrity**<br/>[FDA Guidance Appx. 1][fda_guidance] | Protect against unauthorized modification of software, firmware, and configuration data using techniques like secure boot and cryptographically signed firmware. | • [Secure Boot](../../implementation/build-phase/secure-boot.md)<br/>• [Secure Configuration](../../implementation/build-phase/secure-configuration.md) |
| **Confidentiality**<br/>[FDA Guidance Appx. 1][fda_guidance] | Protect the confidentiality of any data whose disclosure could lead to patient harm, such as credentials or sensitive device settings, using strong encryption. | [Data Privacy](../../implementation/build-phase/data-privacy.md) |
| **Event Detection & Logging**<br/>[FDA Guidance Appx. 1][fda_guidance] | Securely log all security-relevant events, such as login attempts, configuration changes, and network anomalies, to enable forensic analysis. | [Security Logging](../../implementation/operate-phase/security-logging.md) |
| **Resiliency & Recovery**<br/>[FDA Guidance Appx. 1][fda_guidance] | Design the device to be resilient to cyber attacks and to provide a method to safely recover to a known good state after a security event. | [Secure Configuration](../../implementation/build-phase/secure-configuration.md) |
| **Secure Updates**<br/>[FD&C Act § 524B(b)(2)][fdc_524b]<br/>[FDA Guidance Appx. 1][fda_guidance] | Provide a mechanism to deliver cryptographically authenticated and validated software and firmware updates to devices in a secure and timely manner. | [OTA Updates](../../implementation/build-phase/ota-updates.md) |

## 4. Assessment & Conformance

The FDA assesses a manufacturer's compliance with cybersecurity requirements during the premarket review process. Unlike EU regulations that may use Notified Bodies, the FDA itself is the sole assessor. The process is direct and enforcement is strict.

| Assessment Step | Description | Key Takeaway for Manufacturers |
| :--- | :--- | :--- |
| **1. Premarket Submission** | The manufacturer submits all required cybersecurity evidence as part of the 510(k), PMA, or De Novo package. This includes the documentation outlined in the tables above. | The burden of proof is on the manufacturer. The submission must be complete and demonstrate a "reasonable assurance of cybersecurity." |
| **2. FDA Triage & Review** | The FDA first checks if the submission is administratively complete. If the required cybersecurity information is missing, the submission is rejected immediately. If complete, it proceeds to a substantive review. | An incomplete cybersecurity package is not a minor deficiency; it is a showstopper. The review will not even begin. |
| **3. "Refuse to Accept" (RTA)** | This is the primary enforcement tool. If the required information is missing, incomplete, or inadequate, the FDA issues an RTA letter, stopping the review clock. | The manufacturer must resolve all deficiencies noted in the RTA letter before the review can resume. This can cause significant delays. |
| **4. Substantive Review** | The FDA's technical reviewers assess the provided evidence against the requirements of the law and the recommendations in the guidance document. | The FDA will scrutinize the threat model, risk assessment, testing results, and the overall security architecture. |
| **5. The Role of Consensus Standards** | The FDA recognizes "consensus standards" like **ANSI/UL 2900-2-1**. | While conformance is voluntary, designing a product in accordance with a recognized standard is a streamlined way for manufacturers to provide strong evidence that their device meets the FDA's expectations. |


<!-- Citations -->
[fdora_3305]: https://www.congress.gov/bill/117th-congress/house-bill/2617/text#H1A3A8E9495E44A179269458983944B4C "Consolidated Appropriations Act, 2023 (FDORA), Section 3305"
[fdc_524b]: https://www.congress.gov/bill/117th-congress/house-bill/2617/text#H1A3A8E9495E44A179269458983944B4C "FD&C Act Section 524B"
[fdc_502]: https://www.govinfo.gov/app/details/USCODE-2010-title21/USCODE-2010-title21-chap9-subchapV-partA-sec352 "FD&C Act Section 502"
[fda_guidance]: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/cybersecurity-medical-devices-quality-system-considerations-and-content-premarket-submissions "Cybersecurity in Medical Devices: Quality System Considerations and Content of Premarket Submissions (2025)"
[fda_rta_policy]: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/refuse-accept-policy-510ks "Refuse to Accept Policy for 510(k)s"
[fda_faq]: https://www.fda.gov/medical-devices/digital-health-center-excellence/cybersecurity-medical-devices-frequently-asked-questions-faqs "Cybersecurity in Medical Devices FAQs"
[ul_2900_std]: https://www.shopulstandards.com/ProductDetail.aspx?productId=UL2900-2-1_1_S_20171030 "UL 2900-2-1 Standard" 