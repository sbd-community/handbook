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

- **Zones & Conduits:** A foundational principle of the standard is to partition the system under consideration into logical **Zones** of assets that share common security requirements. These zones are connected by **Conduits**, which are communication channels that also have defined security properties. This segmentation limits the impact of a security breach.
- **Foundational Requirements (FRs):** The standard defines seven FRs that form the basis for all technical security requirements. These are: Identification and Authentication Control (IAC), Use Control (UC), System Integrity (SI), Data Confidentiality (DC), Restricted Data Flow (RDF), Timely Response to Events (TRE), and Resource Availability (RA).
- **Security Levels (SLs):** A key innovation of the series is the use of Security Levels to specify the required security robustness. There are four levels, from SL 1 (protection against casual or coincidental violation) to SL 4 (protection against nation-state-level attacks). A system must achieve a **Target Security Level (SL-T)** defined by the asset owner's risk assessment.
- **Maturity Levels:** While SLs measure the technical robustness of a system, Maturity Levels are used to measure how well security *processes* (like secure development or patch management) are defined, practiced, and optimized.

## 4. A Role-Based Implementation

The standard defines clear responsibilities for each stakeholder in the IACS ecosystem.

### 4.1 For Asset Owners (Operators)
The asset owner is ultimately accountable for the secure operation of the IACS. Their responsibilities are primarily defined in the `62443-2-x` series.

| Obligation & Key Standard | Description & Engineering Tasks | Implementation Guides |
|---|---|---|
| **Establish Security Program**<br/>[`IEC 62443-2-1`][iec_2_1] | Define, implement, and maintain an IACS Cybersecurity Management System (CSMS), including policies, procedures, and assurance measures. | n/a |
| **Perform Risk Assessment**<br/>[`IEC 62443-3-2`][iec_3_2] | Partition the system into zones and conduits, conduct a risk assessment for each, and define the Target Security Level (SL-T) required. | [Threat Modeling](../../implementation/build-phase/threat-modeling.md) |
| **Operate & Maintain Securely**<br/>[`IEC 62443-2-3`][iec_2_3] | Implement processes for ongoing security, including patch management, incident response, and regular security program audits. | [Patch Cadence](../../implementation/operate-phase/patch-cadence.md) |

### 4.2 For System Integrators & Service Providers
System integrators are responsible for designing and building a secure automation solution that meets the asset owner's requirements. Their duties are covered in the `62443-2-4` and `62443-3-x` documents.

| Obligation & Key Standard | Description & Engineering Tasks | Implementation Guides |
|---|---|---|
| **Secure Integration Process**<br/>[`IEC 62443-2-4`][iec_2_4] | Follow a defined security program for designing, installing, configuring, and testing the automation solution to meet the asset owner's documented requirements (CRS). | n/a |
| **Secure System Design**<br/>[`IEC 62443-3-3`][iec_3_3] | Design the IACS to meet the required Target Security Levels (SL-T) by integrating components and applying compensating countermeasures where needed. | [Secure Configuration & Hardening](../../implementation/build-phase/secure-configuration.md) |

### 4.3 For Product Suppliers (Manufacturers)
Product suppliers must build security into their components and systems from the ground up, as detailed in the `62443-4-x` series. This is the foundation of a secure supply chain.

| Obligation & Key Standard | Description & Engineering Tasks | Implementation Guides |
|---|---|---|
| **Secure Development Lifecycle**<br/>[`IEC 62443-4-1`][iec_4_1] | Establish and follow a mature, audited process for secure product development. This includes threat modeling, secure coding, vulnerability management, and supply chain security. | [CI/CD Hardening](../../implementation/operate-phase/cicd-hardening.md)<br/>[SBOM & VEX Workflows](../../implementation/build-phase/sbom-vex.md) |
| **Secure Component Capabilities**<br/>[`IEC 62443-4-2`][iec_4_2] | Build technical security capabilities into components (e.g., embedded devices, software) to meet the seven Foundational Requirements (FRs) at different Security Levels. | [Secure Boot](../../implementation/build-phase/secure-boot.md)<br/>[Unique Device Identity](../../implementation/build-phase/unique-device-identity.md)<br/>[Key Provisioning & Storage](../../implementation/build-phase/key-provisioning.md) |

## 5. Certification & Conformity

Unlike regulatory frameworks that may allow self-assessment, demonstrating conformity with the IEC 62443 series typically involves formal, third-party certification. The premier certification program is **ISASecure®**, which provides globally recognized assurance that a product or process meets the standard's requirements.

The program offers several certifications mapped directly to the standard:
-   **SDLA (Secure Development Lifecycle Assurance):** Certifies that a supplier's development process conforms to **IEC 62443-4-1**.
-   **CSA (Component Security Assurance):** Certifies that an IACS component (e.g., PLC, sensor) meets the technical requirements of **IEC 62443-4-2**.
-   **SSA (System Security Assurance):** Certifies that an integrated system (e.g., a full DCS or SCADA system) meets the requirements of **IEC 62443-3-3**.

Achieving these certifications provides asset owners with confidence that the products they procure are secure by design and fit for purpose in a critical industrial environment.

<!-- Citations -->
[iec_webstore]: https://webstore.iec.ch/en/iec-search/result?q=62443 "IEC 62443 Series on the IEC Webstore"
[isaca_guide]: https://21577316.fs1.hubspotusercontent-na1.net/hubfs/21577316/2023%20ISA%20Website%20Redesigns/ISAGCA/PDFs/ISAGCA%20Quick%20Start%20Guide%20FINAL.pdf "An Overview of ISA/IEC 62443 Standards"
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