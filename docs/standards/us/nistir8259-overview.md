---
title: "NIST IR 8259 Series"
sidebar_position: 8
tags: [nist, us, iot, cybersecurity, standards, baseline, manufacturing, guidance]
---
# NIST IR 8259 Series – Foundational IoT Cybersecurity

## 1. Why the NIST IR 8259 Series matters

The **NIST Internal Report (IR) 8259 series** provides the United States' foundational, voluntary guidance for Internet of Things (IoT) device manufacturers. It aims to help manufacturers understand and manage the cybersecurity risks associated with their products. Unlike prescriptive regulations, the 8259 series offers a flexible, risk-based framework that manufacturers can adapt to their specific products and customer needs.

While not a law itself, this document series serves as an authoritative, globally-recognized benchmark for what constitutes a "securable" IoT device. It provided the technical foundation for the **[IoT Cybersecurity Improvement Act of 2020][us_iot_act]** and influences procurement standards for the U.S. government. For manufacturers, aligning with this baseline is a critical step in demonstrating due care and preparing for both regulatory and market demands.

:::info Official Texts
The series includes several key documents that build upon each other:
- **[NIST IR 8259: Foundational Cybersecurity Activities for IoT Device Manufacturers][nistir8259]**: The core document outlining recommended activities for manufacturers to perform before and after their products go to market.
- **[NIST IR 8259A: IoT Device Cybersecurity Capability Core Baseline][nistir8259a]**: Defines a baseline of technical capabilities (e.g., device identity, secure update, data protection) that IoT devices should possess to be considered securable.
- **[NIST IR 8259B: IoT Non-Technical Supporting Capability Core Baseline][nistir8259b]**: Defines the non-technical actions manufacturers should take to support customers, such as documentation and vulnerability disclosure.
- **[NIST IR 8425: Profile for the IoT Core Baseline for Consumer IoT Products][nistir8425]**: The technical profile that underpins the **[FCC Cyber Trust Mark](./fcc-cyber-trust-mark-overview.md)** program.
- **[NIST IR 8562: Workshop Report on Updating Manufacturer Guidance][nistir8562]**: A summary of feedback that indicates the future direction of the 8259 series.
:::

**Relationship to Other Standards & Laws**

| Law / Standard | How it interacts with the NIST IR 8259 Series |
|---|---|
| **[US IoT Cybersecurity Improvement Act][us_iot_act]** | The series provides the technical baseline that underpins this law, which applies to any IoT device sold to the U.S. federal government. |
| **[FCC Cyber Trust Mark](./fcc-cyber-trust-mark-overview.md)** | This voluntary labeling program uses NIST guidance as its technical foundation. The specific requirements for the mark are based on NIST work, making the 8259 series essential reading for any manufacturer seeking the label. |
| **[ETSI EN 303 645](../global/en303645-overview.md)** | Both establish a baseline for IoT security. EN 303 645 is more focused on consumer IoT and has become a harmonised standard for EU law, while the NIST series is more of a technical capabilities inventory applicable to any IoT device. There is significant overlap in their principles. |
| **[Cyber-Resilience Act (CRA)](../eu/cra-overview.md)** | Similar to EN 303 645, the principles in the NIST series align closely with the essential requirements in CRA Annex I. A manufacturer compliant with the NIST baseline would be well-positioned for CRA compliance. |

## 2. Requirements & How to Implement Them

The NIST guidance is split into two main parts: the **technical capabilities** that should be built into a device (from NIST IR 8259A) and the **non-technical support** that a manufacturer should provide (from NIST IR 8259B). Together, they form a comprehensive baseline for creating a securable IoT product.

It's important to understand the concept of **profiling**. The capabilities listed below from 8259A and 8259B represent a *foundational baseline* for any IoT device. For specific sectors, this baseline is tailored into a *profile*. For example, **NIST IR 8425** is the official *consumer profile* of this baseline, and it serves as the technical foundation for the **[FCC Cyber Trust Mark](./fcc-cyber-trust-mark-overview.md)**.

### 2.1 Technical Capabilities (NIST IR 8259A)

This table translates the six core technical capabilities from **NIST IR 8259A** into a practical checklist and maps them to the relevant implementation guides in this handbook.

| Obligations | Engineering Tasks | Implementation Guides |
| :--- | :--- | :--- |
| **Device Identification**<br/>[NIST IR 8259A: Tbl. 1][nistir8259a]<br/>[NIST IR 8425: § 2.2.1][nistir8425] | Assign a unique and immutable identifier to the device, both logically in software and physically on its casing. | [Unique Device Identity](../../implementation/build-phase/unique-device-identity.md) |
| **Device Configuration**<br/>[NIST IR 8259A: Tbl. 1][nistir8259a]<br/>[NIST IR 8425: § 2.2.1][nistir8425] | Provide an interface for authorized entities to change the device's configuration and include a function to restore it to a secure, default state. | [Secure Configuration & Hardening](../../implementation/build-phase/secure-configuration.md) |
| **Data Protection**<br/>[NIST IR 8259A: Tbl. 1][nistir8259a]<br/>[NIST IR 8425: § 2.2.1][nistir8425] | Protect data at-rest and in-transit using state-of-the-art encryption and provide a function for users to securely and completely delete their data. | [Key Provisioning & Storage](../../implementation/build-phase/key-provisioning.md)<br/>[Data Privacy & Secure Deletion](../../implementation/build-phase/data-privacy.md) |
| **Logical Access to Interfaces**<br/>[NIST IR 8259A: Tbl. 1][nistir8259a]<br/>[NIST IR 8425: § 2.2.1][nistir8425] | Restrict access to all local and network interfaces to authorized entities, disabling any unused ports or services. | [Secure Configuration & Hardening](../../implementation/build-phase/secure-configuration.md)<br/>[Unique Device Identity](../../implementation/build-phase/unique-device-identity.md) |
| **Software Update**<br/>[NIST IR 8259A: Tbl. 1][nistir8259a]<br/>[NIST IR 8425: § 2.2.1][nistir8425] | Implement a secure mechanism to deliver software updates, ensuring that the authenticity and integrity of each update is verified before installation. | [Secure OTA Updates](../../implementation/build-phase/ota-updates.md) |
| **Cybersecurity State Awareness**<br/>[NIST IR 8259A: Tbl. 1][nistir8259a]<br/>[NIST IR 8425: § 2.2.1][nistir8425] | Enable the device to log security-relevant events by default and ensure those logs are protected from unauthorized modification or access. | [Security Logging & Monitoring](../../implementation/operate-phase/security-logging.md) |

### 2.2 Non-Technical Supporting Capabilities (NIST IR 8259B)

In addition to the device's technical features, **NIST IR 8259B** outlines the supporting actions and information a manufacturer must provide to help customers maintain security throughout the product lifecycle.

| Obligations | Manufacturer Actions | Implementation Guides |
| :--- | :--- | :--- |
| **Documentation**<br/>[NIST IR 8259B: Tbl. 1][nistir8259b]<br/>[NIST IR 8425: § 2.2.2][nistir8425] | Create and maintain clear documentation for customers, outlining the product's intended use, security features, and support lifetime. | [User Documentation Guide](../../implementation/build-phase/user-documentation.md) |
| **Information & Query Reception**<br/>[NIST IR 8259B: Tbl. 1][nistir8259b]<br/>[NIST IR 8425: § 2.2.2][nistir8425] | Establish and publicise a secure contact channel for receiving vulnerability reports and provide customer support for security-related queries. | [Vulnerability Disclosure](../../implementation/operate-phase/vulnerability-disclosure.md) |
| **Information Dissemination**<br/>[NIST IR 8259B: Tbl. 1][nistir8259b]<br/>[NIST IR 8425: § 2.2.2][nistir8425] | Proactively inform customers about fixed vulnerabilities through security advisories and clearly communicate the product's end-of-support date. | [Vulnerability Disclosure](../../implementation/operate-phase/vulnerability-disclosure.md)<br/>[Patch Cadence](../../implementation/operate-phase/patch-cadence.md) |
| **Education & Awareness**<br/>[NIST IR 8259B: Tbl. 1][nistir8259b]<br/>[NIST IR 8425: § 2.2.2][nistir8425] | Provide customers with guidance on how to securely configure and dispose of the device, clarifying the shared security responsibilities between them and the manufacturer. | [User Documentation Guide](../../implementation/build-phase/user-documentation.md) |

## 3. Assessment & Conformance

While the NIST IR 8259 series is voluntary guidance, conformance with its principles is increasingly becoming a practical requirement for market access, driven by two key initiatives.

- **US IoT Cybersecurity Improvement Act**: This law mandates that U.S. federal government agencies can only procure IoT devices that comply with the NIST baseline. For manufacturers selling to the government, demonstrating conformance is a condition of doing business.
- **FCC Cyber Trust Mark**: This voluntary labeling scheme provides a "presumption of conformity." To earn the mark, a product must be tested by an accredited lab against the criteria defined in **[NIST IR 8425][nistir8425]**. A manufacturer aligned with the foundational 8259 guidance is already well-positioned to meet these specific requirements.

## 4. Future Direction – NIST IR 8562

The cybersecurity landscape is constantly evolving, and so is NIST's guidance. In 2024, NIST held a workshop to discuss the future of the 8259 series, and the key findings were published in **[NIST IR 8562][nistir8562]**. This report signals the direction that future mandatory and voluntary requirements are likely to take in the US.

The key takeaways signal a move towards a more holistic and context-aware approach to IoT security:
- **Software Lifecycle**: Increased focus on the security of the software development lifecycle, not just the final product.
- **Context is Key**: Recognition that security needs vary greatly depending on the product's intended use and operating environment (e.g., consumer vs. industrial vs. medical).
- **Vulnerability Communication**: Emphasis on better, more standardised ways to communicate vulnerability information, such as using the Vulnerability Exploitability eXchange (VEX).
- **Cloud & Backend**: Explicitly including the security of cloud services and backend infrastructure as part of the product's overall security posture.

<!-- Citations -->
[us_iot_act]: https://www.congress.gov/bill/116th-congress/house-bill/1668 "IoT Cybersecurity Improvement Act of 2020"
[nistir8259]: https://doi.org/10.6028/NIST.IR.8259 "NIST IR 8259: Foundational Cybersecurity Activities for IoT Device Manufacturers"
[nistir8259a]: https://doi.org/10.6028/NIST.IR.8259A "NIST IR 8259A: IoT Device Cybersecurity Capability Core Baseline"
[nistir8259b]: https://doi.org/10.6028/NIST.IR.8259B "NIST IR 8259B: IoT Non-Technical Supporting Capability Core Baseline"
[nistir8425]: https://doi.org/10.6028/NIST.IR.8425 "NIST IR 8425: Profile of the IoT Core Baseline for Consumer IoT Products"
[nistir8562]: https://doi.org/10.6028/NIST.IR.8562 "NIST IR 8562: Future of the NIST IoT Cybersecurity Program" 