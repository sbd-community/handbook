---
title: IEC 62443 Series
sidebar_position: 13
tags: [iec62443, industrial, ot, iacs, security]
---
# IEC 62443 – Operational Technology (OT) Security

## 1. Why IEC 62443 matters now

The **IEC 62443 series**, developed in partnership with the International Society of Automation (ISA), is the leading international standard for the cybersecurity of **Industrial Automation and Control Systems (IACS)**, commonly known as Operational Technology (OT). Unlike general IT security standards, it is specifically designed to address the unique safety, reliability, and performance requirements of industrial environments like manufacturing plants, power grids, and transportation systems.

The standard provides a role-based framework that methodically addresses security throughout the entire lifecycle, defining processes and requirements for all three key stakeholders in the industrial ecosystem:
*   **Asset Owners** (the operators of the industrial facility)
*   **System Integrators** (the companies that design and build the control systems)
*   **Product Suppliers** (the manufacturers of hardware and software components)

While compliance with IEC 62443 is voluntary, its comprehensive, risk-based approach provides a crucial pathway for meeting the mandatory requirements of new EU legislation, establishing a globally recognized benchmark for industrial cybersecurity.

:::info Official Texts
The IEC 62443 documents are a commercial standard and are not available for free. They must be purchased from the [IEC Webstore][iec_webstore] or an authorized national standards body (e.g., ANSI, BSI, DIN).
:::

:::info Implementation Guidance
The ISA Global Cybersecurity Alliance (ISAGCA), in partnership with ISACA, has published a detailed quick-start guide that provides an excellent overview of the standards, their structure, and their application.

- **ISACA**: [An Overview of ISA/IEC 62443 Standards][isaca_guide]
:::

:::info Advanced Guidance for IIoT
For manufacturers of IIoT devices, the ISAGCA has published a detailed study on adapting the standard for IIoT-specific challenges. It outlines an enhanced certification profile for components with direct internet connectivity.

- **ISAGCA/ISCI**: [IIoT Component Certification Based on the 62443 Standard][iiot_cert_guide]
:::

### Relationship to EU law

| Law | How it interacts with IEC 62443 |
|-----|---------------------------|
| **[Cyber-Resilience Act (CRA)](../eu/cra-overview.md)** | For manufacturers of industrial devices (e.g., PLCs, industrial firewalls, gateways), implementing the processes in **IEC 62443-4-1** (Secure Development Lifecycle) and the technical controls in **IEC 62443-4-2** (Technical Security Requirements for IACS Components) is the most direct way to prove compliance with the CRA's essential requirements. Many industrial products are classified as "Important" (Class I or II) under the CRA, making a robust, auditable security framework like 62443 essential. |
| **[NIS 2 Directive](../eu/nis2-overview.md)** | For asset owners in critical sectors (energy, water, transport, etc.), the NIS 2 Directive mandates organisational cyber risk management. Applying the risk assessment, system design, and policy requirements from the **IEC 62443-2-x** and **IEC 62443-3-x** parts of the standard provides a clear methodology for securing their industrial operations and demonstrating compliance to national authorities. |

## 2. Structure of the Standard

The IEC 62443 series is organized into four main groups of documents, each targeting a different audience or aspect of industrial security. Documents marked with "TR" are Technical Reports that provide information and guidance, while those marked "IS" are International Standards containing normative requirements.

- **General (62443-1-x):** Foundational concepts, models, and terminology.
    - **[62443-1-1][iec_1_1]:** Concepts and Models
    - **[TR 62443-1-3][iec_1_3]:** System Security Conformance Metrics
    - **[TR 62443-1-4][iec_1_4]:** IACS Security Lifecycle and Use-Cases
    - **[62443-1-5][iec_1_5]:** Security for Safety-Instrumented Systems (SIS)

- **Policies & Procedures (62443-2-x):** Focus on the Asset Owner's security program.
    - **[62443-2-1][iec_2_1]:** Establishing an IACS Security Program
    - **[TR 62443-2-3][iec_2_3]:** Patch Management in the IACS Environment
    - **[62443-2-4][iec_2_4]:** Security Program Requirements for IACS Service Providers

- **System (62443-3-x):** Guidance for System Integrators on secure system design.
    - **[TR 62443-3-1][iec_3_1]:** Security Technologies for IACS
    - **[62443-3-2][iec_3_2]:** Security Risk Assessment for System Design
    - **[62443-3-3][iec_3_3]:** System Security Requirements and Security Levels

- **Component (62443-4-x):** Requirements for manufacturers of IACS components.
    - **[62443-4-1][iec_4_1]:** Secure Product Development Lifecycle Requirements
    - **[62443-4-2][iec_4_2]:** Technical Security Requirements for IACS Components

## 3. Key Concepts

To effectively use the standard, it's important to understand its core concepts:

- **Zones & Conduits:** A foundational principle of the standard is to partition the system under consideration into logical **Zones** of assets that share common security requirements. These zones are connected by **Conduits**, which are communication channels that also have defined security properties. This segmentation limits the impact of a security breach. For modern IIoT components, this model is also applied *within* a device to create secure, compartmentalized execution environments for different functions ([IIoT Component Certification Study § 4.3.4][iiot_cert_guide]).
- **Foundational Requirements (FRs):** The standard defines seven FRs that form the basis for all technical security requirements in **[IEC 62443-1-1][iec_1_1]**. These are: Identification and Authentication Control (IAC), Use Control (UC), System Integrity (SI), Data Confidentiality (DC), Restricted Data Flow (RDF), Timely Response to Events (TRE), and Resource Availability (RA).
- **Security Levels (SLs):** A key innovation of the series is the use of Security Levels to specify the required security robustness. There are four levels, from SL 1 (protection against casual or coincidental violation) to SL 4 (protection against nation-state-level attacks). A system must achieve a **Target Security Level (SL-T)** defined by the asset owner's risk assessment.
- **Maturity Levels:** While SLs measure the technical robustness of a system, Maturity Levels are used to measure how well security *processes* (like secure development or patch management) are defined, practiced, and optimized.

## 4. A Role-Based Implementation

The standard defines clear responsibilities for each stakeholder in the IACS ecosystem.

### 4.1 For Product Suppliers
To help manufacturers map their obligations between key regulations, this section organizes the requirements from both **IEC 62443-4-1** (Secure Process) and **IEC 62443-4-2** (Secure Product) into a structure that aligns with the key themes of the EU's Cyber Resilience Act.

#### 4.1.1 Risk Assessment & Threat Modeling
Both frameworks mandate a proactive approach to identifying and mitigating risks early in the development lifecycle. This begins with understanding the product's context and performing a systematic threat analysis to inform all subsequent security work.

| Obligations | Engineering Tasks | Implementation Guides |
|---|---|---|
| **Risk-Based Requirements**<br/>[SR 1, 2, 3][iec_4_1] | Define the product's security context, perform a systematic threat model to identify risks, and derive a comprehensive set of verifiable security requirements based on the findings. | [User Documentation Guide](../../implementation/build-phase/user-documentation.md)<br/>[Threat Modeling](../../implementation/build-phase/threat-modeling.md) |

#### 4.1.2 Product Security
A secure process must result in a secure product. This involves implementing security throughout the design and coding phases, verifying its effectiveness through rigorous testing, and building in the core technical capabilities required by the standard.

| Obligations from **IEC 62443-4-1** (Process) | Engineering Tasks | Implementation Guides |
|---|---|---|
| **Secure Design**<br/>[SD 4][iec_4_1] | Apply established secure design principles throughout the product architecture, including defense-in-depth, least privilege, and attack surface reduction. | [Secure Configuration & Hardening](../../implementation/build-phase/secure-configuration.md) |
| **Secure Implementation**<br/>[SI 1, 2][iec_4_1] | Enforce secure coding standards and conduct rigorous implementation reviews using a combination of static analysis and manual peer review to identify vulnerabilities and deviations from the secure design. | [Static & Dynamic Analysis](../../tools/static-and-dynamic-analysis.md) |

The **IEC 62443-4-2** standard specifies the technical security capabilities that a secure component must possess. These capabilities are the direct result of a secure design, implementation, and verification process.

| Capabilities from **IEC 62443-4-2** (Product) | Engineering Tasks | Implementation Guides |
|---|---|---|
| **Identification & Authentication Control**<br/>[IAC][iec_1_1]<br/>[CRs 1.1-1.3, 1.5, 1.7, 1.11][iec_4_2]<br/>[NDRs 1.6, 1.13][iec_4_2] | Control and audit access by uniquely identifying and authenticating all users (humans, processes, devices). This includes managing accounts, credentials, and session access. Key capabilities include multi-factor authentication, strong password enforcement, and secure management of authenticators. | [Unique Device Identity](../../implementation/build-phase/unique-device-identity.md) |
| **Use Control**<br/>[UC][iec_1_1]<br/>[CRs 2.1, 2.5, 2.8, 2.12][iec_4_2]<br/>[SAR 2.4][iec_4_2]<br/>[EDRs 2.4, 2.13][iec_4_2]<br/>[HDRs 2.4, 2.13][iec_4_2]<br/>[NDRs 2.4, 2.13][iec_4_2] | Enforce assigned privileges and permissions for all users and processes according to the principle of least privilege. This covers authorization based on roles, session control, and generating audit trails for all security-relevant actions. | [Vulnerability Disclosure](../../implementation/operate-phase/vulnerability-disclosure.md) |
| **System Integrity**<br/>[SI][iec_1_1]<br/>[CRs 3.1, 3.4, 3.10, 3.12, 3.14][iec_4_2]<br/>[EDRs 3.2, 3.10-3.14][iec_4_2]<br/>[HDRs 3.2, 3.10-3.14][iec_4_2]<br/>[NDRs 3.2, 3.10-3.14][iec_4_2] | Protect the integrity of software and information at all times. This is achieved through mechanisms like cryptographic verification of firmware and software (secure boot and signed updates), communication integrity checks, and physical tamper resistance. | [Secure Boot](../../implementation/build-phase/secure-boot.md)<br/>[Secure OTA Updates](../../implementation/build-phase/ota-updates.md) |
| **Data Confidentiality**<br/>[DC][iec_1_1]<br/>[CRs 4.1, 4.3][iec_4_2] | Prevent the unauthorized disclosure of information. This requires protecting data at rest and data in transit using strong, standardized cryptographic protocols like TLS. | [Key Provisioning & Storage](../../implementation/build-phase/key-provisioning.md)<br/>[Data Privacy & Secure Deletion](../../implementation/build-phase/data-privacy.md) |
| **Restricted Data Flow**<br/>[RDF][iec_1_1]<br/>[CRs 5.1, 5.2][iec_4_2]<br/>[NDRs 5.2, 5.3][iec_4_2] | Control and restrict the flow of data between different network zones. This is a primary method of network defense, limiting the lateral spread of an attack by enforcing rules on traffic at zone boundaries. | [Secure Configuration & Hardening](../../implementation/build-phase/secure-configuration.md) |
| **Resource Availability**<br/>[RA][iec_1_1]<br/>[CRs 7.1, 7.3, 7.4, 7.7][iec_4_2] | Ensure the component is resilient against denial-of-service attacks. This includes robust resource management, the ability to be backed up and restored, and minimizing the attack surface by disabling all unnecessary functions, ports, and services. | [Secure Configuration & Hardening](../../implementation/build-phase/secure-configuration.md) |

#### 4.1.3 Vulnerability Handling
A manufacturer's responsibility does not end at shipment. Both frameworks require robust processes for managing vulnerabilities and delivering security updates throughout the product's supported lifecycle. This includes not only fixing flaws but proactively searching for them and ensuring the product has the technical means to report events.

| Obligations from **IEC 62443-4-1** (Process) | Engineering Tasks | Implementation Guides |
|---|---|---|
| **Defect & Update Management**<br/>[DM 1-5; SUM 1, 4, 5][iec_4_1] | Establish a formal process for vulnerability handling and disclosure, and maintain a secure mechanism for delivering timely, cryptographically signed security updates to end-users. | [Vulnerability Disclosure](../../implementation/operate-phase/vulnerability-disclosure.md)<br/>[Secure OTA Updates](../../implementation/build-phase/ota-updates.md)<br/>[Patch Cadence](../../implementation/operate-phase/patch-cadence.md) |
| **Security Verification & Validation**<br/>[SVV 1, 2, 3, 4][iec_4_1] | Conduct a comprehensive suite of tests, including functional security testing, threat mitigation validation, fuzzing, software composition analysis, and independent penetration testing to proactively discover and eliminate vulnerabilities. | [Static & Dynamic Analysis](../../tools/static-and-dynamic-analysis.md) |

A key part of vulnerability handling is ensuring the product has the built-in technical capability to detect and report security events.

| Capabilities from **IEC 62443-4-2** (Product) | Engineering Tasks | Implementation Guides |
|---|---|---|
| **Timely Response to Events**<br/>[TRE][iec_1_1]<br/>[CRs 6.1, 6.2][iec_4_2] | Respond to security violations in a timely manner. Components must have the capability to be monitored for security events and must make their audit logs securely available for analysis. | [Vulnerability Disclosure](../../implementation/operate-phase/vulnerability-disclosure.md) |

#### 4.1.4 Other Key Obligations
This section covers the remaining governance and documentation-related duties required for a compliant secure development process.

| Obligations | Engineering Tasks | Implementation Guides |
|---|---|---|
| **Security Management**<br/>[SM 1, 2, 4, 7, 8, 9, 13][iec_4_1] | Establish and maintain a comprehensive secure development lifecycle, including defining roles and responsibilities, ensuring personnel have appropriate security expertise, managing third-party component risks, securing the development environment, protecting private keys, and continuously improving the process. | [SBOM & VEX Workflows](../../implementation/build-phase/sbom-vex.md)<br/>[CI/CD Hardening](../../implementation/operate-phase/cicd-hardening.md)<br/>[Key Provisioning & Storage](../../implementation/build-phase/key-provisioning.md) |
| **Security Guidelines**<br/>[SG 1-6][iec_4_1] | Create and maintain comprehensive documentation covering the product's security features, hardening procedures, and instructions for secure decommissioning and data disposal. | [User Documentation Guide](../../implementation/build-phase/user-documentation.md)<br/>[Secure Configuration & Hardening](../../implementation/build-phase/secure-configuration.md)<br/>[Data Privacy & Secure Deletion](../../implementation/build-phase/data-privacy.md) |

### 4.2 For Asset Owners (Operators)
The asset owner is ultimately accountable for the secure operation of the IACS. Their responsibilities are primarily defined in the **62443-2-x** series.

| Obligations | Engineering Tasks | Implementation Guides |
|---|---|---|
| **Establish Security Program**<br/>[IEC 62443-2-1][iec_2_1] | Define, implement, and continuously maintain a comprehensive IACS Cybersecurity Management System (CSMS). This program must establish a risk-management framework, define clear security policies and procedures, assign roles and responsibilities, and include a robust incident response plan. | [Security Program Development](https://www.isagca.org/l/security-program-development) |
| **Perform Risk Assessment**<br/>[IEC 62443-3-2][iec_3_2] | Systematically partition the entire IACS into logical zones and conduits. For each, conduct a detailed cybersecurity risk assessment to identify vulnerabilities, assess potential impacts, and determine the required Target Security Level (SL-T) for all assets. | [Threat Modeling](../../implementation/build-phase/threat-modeling.md) |
| **Operate & Maintain Securely**<br/>[IEC 62443-2-3][iec_2_3] | Implement and document rigorous processes for the ongoing secure operation of the IACS. This includes timely **Patch Management** as guided by [TR 62443-2-3][iec_2_3], proactive **Incident Response**, and regular **Program Audits** as mandated by the CSMS ([IEC 62443-2-1][iec_2_1]). | [Patch Cadence](../../implementation/operate-phase/patch-cadence.md) |

### 4.3 For System Integrators & Service Providers
System integrators are responsible for designing and building a secure automation solution that meets the asset owner's requirements. Their duties are covered in the **62443-2-4** and **62443-3-x** documents.

| Obligations | Engineering Tasks | Implementation Guides |
|---|---|---|
| **Secure Integration Process**<br/>[IEC 62443-2-4][iec_2_4] | Adhere to a defined and documented security program for the delivery of IACS solutions. This requires demonstrating robust capabilities for secure solution design, installation, commissioning, ongoing maintenance, secure remote access, and incident management. | [Secure Integration Practices](https://www.isagca.org/l/secure-integration-practices) |
| **Secure System Design**<br/>[IEC 62443-3-3][iec_3_3] | Design and engineer the integrated IACS to meet the asset owner's specified Target Security Levels (SL-T). This involves correctly applying the seven **Foundational Requirements (FRs)** at the system level, selecting and integrating components with the appropriate **Security Level capabilities (SL-C)**, and implementing **compensating countermeasures** to address any identified gaps. | [Secure Configuration & Hardening](../../implementation/build-phase/secure-configuration.md) |

## 5. Certification & Conformity

Unlike regulatory frameworks that may allow self-assessment, demonstrating conformity with the IEC 62443 series typically involves formal, third-party certification. The premier certification program is **ISASecure®**, which provides globally recognized assurance that a product or process meets the standard's requirements.

Demonstrating this conformity is more than a simple feature checklist. A typical assessment for a component against **IEC 62443-4-2** involves a multi-faceted evaluation:

*   **Documentation Review**: Auditors examine the manufacturer's design documents, security architecture, and user guides. This step verifies that security was designed-in from the start, leveraging the processes and artifacts required by **IEC 62443-4-1**.
*   **Conformity Testing**: The component's security functions are actively tested against specific acceptance criteria to ensure they are implemented correctly.
*   **Vulnerability Analysis**: Finally, auditors perform penetration testing to assess the component's **attack resistance**. This crucial step ensures the component can withstand an attacker with the skills and resources defined for its target Security Level (SL). Achieving a given SL is therefore not just about implementing the required features, but also proving the product is robust against the corresponding threat level.

The program offers several certifications mapped directly to the standard:
-   **SDLA (Secure Development Lifecycle Assurance):** Certifies that a supplier's development process conforms to **IEC 62443-4-1**.
-   **CSA (Component Security Assurance):** Certifies that an IACS component (e.g., PLC, sensor) meets the technical requirements of **IEC 62443-4-2**.
-   **SSA (System Security Assurance):** Certifies that an integrated system (e.g., a full DCS or SCADA system) meets the requirements of **IEC 62443-3-3**.

Achieving these certifications provides asset owners with confidence that the products they procure are secure by design and fit for purpose in a critical industrial environment.

### 5.1 Certification for IIoT Components

Recognizing the unique challenges of IIoT devices (e.g., direct internet connectivity, remote physical locations), the ISAGCA and ISCI have defined an enhanced certification profile based on **IEC 62443-4-2**. This profile adds new functional requirements and defines two tiers of assurance ([IIoT Component Certification Study § 4.1][iiot_cert_guide]):

| Tier | Basis & Key additions |
|---|---|
| **Core** | Based on **Security Level 2 (SL 2)**, but adds selected requirements from SL 3 and SL 4 to address the threat of an untrusted network connection. It also includes new requirements for compartmentalization, secure default configuration, and remote updates. |
| **Advanced** | Based on **Security Level 4 (SL 4)**. It includes all Core requirements and adds further protections against sophisticated attacks, such as mitigations against reverse-engineering. |

This tiered approach allows manufacturers to certify their IIoT components against a security baseline that is explicitly designed for their specific risk posture.

<!-- Citations -->
[iec_webstore]: https://webstore.iec.ch/en/iec-search/result?q=62443 "IEC 62443 Series on the IEC Webstore"
[isaca_guide]: https://21577316.fs1.hubspotusercontent-na1.net/hubfs/21577316/2023%20ISA%20Website%20Redesigns/ISAGCA/PDFs/ISAGCA%20Quick%20Start%20Guide%20FINAL.pdf "An Overview of ISA/IEC 62443 Standards"
[iiot_cert_guide]: https://gca.isa.org/blog/study-preview-iiot-component-certification-based-on-62443 "IIoT Component Certification Based on the 62443 Standard"
[iec_1_1]: https://webstore.iec.ch/en/publication/7029 "IEC 62443-1-1:2009"
[iec_1_3]: https://webstore.iec.ch/en/iec-search/result?q=62443 "IEC TR 62443-1-3:2011"
[iec_1_4]: https://webstore.iec.ch/en/iec-search/result?q=62443 "IEC TR 62443-1-4:2018"
[iec_1_5]: https://webstore.iec.ch/en/publication/67461 "IEC TS 62443-1-5:2023"
[iec_2_1]: https://webstore.iec.ch/en/publication/62883 "IEC 62443-2-1:2024"
[iec_2_2]: https://webstore.iec.ch/en/publication/63886 "IEC PAS 62443-2-2:2025"
[iec_2_3]: https://webstore.iec.ch/en/publication/22811 "IEC TR 62443-2-3:2015"
[iec_2_4]: https://webstore.iec.ch/en/publication/67631 "IEC 62443-2-4:2023"
[iec_3_1]: https://webstore.iec.ch/en/publication/7031 "IEC TR 62443-3-1:2009"
[iec_3_2]: https://webstore.iec.ch/en/publication/30727 "IEC 62443-3-2:2020"
[iec_3_3]: https://webstore.iec.ch/en/publication/7033 "IEC 62443-3-3:2013"
[iec_4_1]: https://webstore.iec.ch/en/publication/33615 "IEC 62443-4-1:2018"
[iec_4_2]: https://webstore.iec.ch/en/publication/34421 "IEC 62443-4-2:2019" 
[iec_6_1]: https://webstore.iec.ch/en/publication/67462 "IEC TS 62443-6-1:2024" 
[iec_6_2]: https://webstore.iec.ch/en/publication/67463 "IEC TS 62443-6-2:2025" 