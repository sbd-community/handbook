---
title: IEC 62443 Series
sidebar_position: 13
tags: [iec62443, industrial, ot, iacs, security]
---
# IEC 62443 – Operational Technology (OT)

## 1. Why IEC 62443 matters now

The **IEC 62443 series**, developed in partnership with the International Society of Automation (ISA) and based on the original ISA-99 standards, is the leading international standard for the cybersecurity of **Industrial Automation and Control Systems (IACS)**, also known as Operational Technology (OT). Unlike general IT security standards, it is specifically designed to address the unique safety, reliability, and performance requirements of industrial environments like manufacturing plants, power grids, and transportation systems.

The standard provides a role-based framework, defining processes and requirements for all three key stakeholders in the industrial ecosystem:
*   **Asset Owners** (the operators of the industrial facility)
*   **System Integrators** (the companies that design and build the control systems)
*   **Product Suppliers** (the manufacturers of hardware and software components)

While compliance with IEC 62443 is voluntary, it provides a crucial pathway for meeting the mandatory requirements of new EU legislation.

:::warning A Commercial Standard
The IEC 62443 documents are not available for free. They must be purchased from the [IEC Webstore][iec_webstore] or an authorized national standards body (e.g., ANSI, BSI, DIN).
:::

**Relationship to EU law**

| Law | How it interacts with IEC 62443 |
|-----|---------------------------|
| **[Cyber-Resilience Act (CRA)](../eu/cra-overview.md)** | For manufacturers of industrial devices (e.g., PLCs, industrial firewalls, gateways), implementing the processes in **IEC 62443-4-1** (Secure Development Lifecycle) and the technical controls in **IEC 62443-4-2** (Technical Security Requirements for IACS Components) is the most direct way to prove compliance with the CRA's essential requirements. Many industrial products are classified as "Important" (Class I or II) under the CRA, making a robust, auditable security framework like 62443 essential. |
| **[NIS 2 Directive](../eu/nis2-overview.md)** | For asset owners in critical sectors (energy, water, transport, etc.), the NIS 2 Directive mandates organisational cyber risk management. Applying the risk assessment, system design, and policy requirements from the **IEC 62443-2-x** and **IEC 62443-3-x** parts of the standard provides a clear methodology for securing their industrial operations and demonstrating compliance to national authorities. |

---

## 2. Structure of the Standard

The IEC 62443 series is organized into four main groups of documents, each targeting a different role or aspect of industrial security. Documents marked with "TR" are Technical Reports that provide information and guidance rather than normative requirements.

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

## 3. A Secure-by-Design Approach for Component Suppliers (IEC 62443-4-2)

For manufacturers of IACS components, Part 4-2 of the standard provides the core technical security requirements. A Secure-by-Design approach, centered on establishing a robust and unique identity for each component, is the most effective way to meet these requirements. This identity, or "root of trust," is the foundation for authentication, integrity, and confidentiality.

### 3.1 The Foundation: Hardware Root of Trust (FR3)

The standard emphasizes the need for a strong foundation for component identity.

-   **Tamper Resistance**: Components must have measures for physical tamper resistance and detection ([`IEC62443-4-2 CR 3.11`][iec_4_2]).
-   **Roots of Trust**: The standard requires mechanisms for provisioning roots of trust from both the product supplier ([`IEC62443-4-2 CR 3.12`][iec_4_2]) and the asset owner ([`IEC62443-4-2 CR 3.13`][iec_4_2]). This establishes an anchor of trust for all other security functions.

### 3.2 Building on Identity: Authentication (FR1) and Confidentiality (FR4)

Once a root of trust is established, it enables critical authentication capabilities which in turn protect data.

-   **Component Authentication**: Every component must be able to identify and authenticate itself to other components ([`IEC62443-4-2 CR 1.2`][iec_4_2]). An authenticator is required to prove this identity ([`IEC62443-4-2 CR 1.5`][iec_4_2]).
-   **Identity Management**: Components must be designed to integrate into a broader system for managing identifiers, often using a Public Key Infrastructure (PKI) ([`IEC62443-4-2 CR 1.4`][iec_4_2], [`CR 1.8`][iec_4_2], & [`CR 1.9`][iec_4_2]). This allows for scalable and secure management of trust across the IACS.
-   **Secure Communication**: This trusted identity is the basis for establishing secure communication channels. For instance, it allows for mutual trust using symmetric keys ([`IEC62443-4-2 CR 1.14`][iec_4_2]) and is a prerequisite for ensuring data confidentiality, which relies on successful mutual authentication ([`IEC62443-4-2 CR 4.1`][iec_4_2]).

<!-- Citations -->
[iec_webstore]: https://webstore.iec.ch/en/iec-search/result?q=62443 "IEC 62443 Series on the IEC Webstore"
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