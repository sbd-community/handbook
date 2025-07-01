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

---

## 2. Requirements & How to Implement Them

The NIST guidance is split into two main parts: the **technical capabilities** that should be built into a device (from NIST IR 8259A) and the **non-technical support** that a manufacturer should provide (from NIST IR 8259B). Together, they form a comprehensive baseline for creating a securable IoT product.

### 2.1 Technical Capabilities (NIST IR 8259A)

This table translates the six core technical capabilities from **NIST IR 8259A** into a practical checklist and maps them to the relevant implementation guides in this handbook.

| Capability & Description | Engineering Tasks | Implementation Guides |
| :--- | :--- | :--- |
| **Device Identification**<br/>_The device can be uniquely identified logically (e.g., serial number) and physically (e.g., label on casing)._ | • Assign a unique, immutable logical identifier.<br/>• Affix a unique physical identifier. | [Unique Device Identity](../../implementation/build-phase/unique-device-identity.md) |
| **Device Configuration**<br/>_The device's software configuration can be changed by authorized entities only, and can be restored to a secure default._ | • Provide an interface for authorized configuration changes.<br/>• Implement a factory reset or secure restore function. | [Secure Configuration & Hardening](../../implementation/build-phase/secure-configuration.md) |
| **Data Protection**<br/>_Data stored on the device and transmitted from it is protected from unauthorized access and modification._ | • Use validated cryptography to protect data-in-transit and data-at-rest.<br/>• Provide a function for users to securely wipe all data. | [Key Provisioning & Storage](../../implementation/build-phase/key-provisioning.md)<br/>[Data Privacy & Secure Deletion](../../implementation/build-phase/data-privacy.md) |
| **Logical Access to Interfaces**<br/>_Access to local and network interfaces is restricted to authorized entities._ | • Disable unused physical ports and network services.<br/>• Require authentication for all interfaces. | [Secure Configuration & Hardening](../../implementation/build-phase/secure-configuration.md)<br/>[Unique Device Identity](../../implementation/build-phase/unique-device-identity.md) |
| **Software Update**<br/>_Software can be securely updated by authorized entities only._ | • Implement a mechanism for remote and/or local updates.<br/>• Verify authenticity and integrity of updates (e.g., with code signing). | [Secure OTA Updates](../../implementation/build-phase/ota-updates.md) |
| **Cybersecurity State Awareness**<br/>_The device can report on its security state (e.g., logging events) to authorized entities._ | • Log all security-relevant events by default.<br/>• Protect logs from modification and unauthorized access. | [Security Logging & Monitoring](../../implementation/operate-phase/security-logging.md) |

### 2.2 Non-Technical Supporting Capabilities (NIST IR 8259B)

In addition to the device's technical features, **NIST IR 8259B** outlines the supporting actions and information a manufacturer must provide to help customers maintain security throughout the product lifecycle.

| Capability & Description | Manufacturer Actions | Implementation Guides |
| :--- | :--- | :--- |
| **Documentation**<br/>_Create and store information relevant to the device's cybersecurity._ | • Document the intended use cases, expected lifetime, and term of support.<br/>• Document all technical security capabilities and how to use them. | [User Documentation Guide](../../implementation/build-phase/user-documentation.md) |
| **Information & Query Reception**<br/>_Receive information and queries from customers and security researchers._ | • Establish a secure, public-facing contact for vulnerability reports.<br/>• Provide customer support for security-related queries. | [Vulnerability Disclosure](../../implementation/operate-phase/vulnerability-disclosure.md) |
| **Information Dissemination**<br/>_Broadcast and distribute security information to customers._ | • Publish security advisories for fixed vulnerabilities.<br/>• Inform users about the end-of-support date. | [Vulnerability Disclosure](../../implementation/operate-phase/vulnerability-disclosure.md)<br/>[Patch Cadence](../../implementation/operate-phase/patch-cadence.md) |
| **Education & Awareness**<br/>_Educate customers on their security responsibilities._ | • Provide guidance on secure configuration and disposal.<br/>• Clearly state the shared responsibility model for the device. | [User Documentation Guide](../../implementation/build-phase/user-documentation.md) |

## 3. Assessment & Conformance

While the NIST IR 8259 series is voluntary guidance, conformance with its principles is increasingly becoming a practical requirement for market access, driven by two key initiatives.

- **US IoT Cybersecurity Improvement Act**: This law mandates that U.S. federal government agencies can only procure IoT devices that comply with the NIST baseline. For manufacturers selling to the government, demonstrating conformance is a condition of doing business.
- **FCC Cyber Trust Mark**: This voluntary labeling scheme provides a "presumption of conformity." To earn the mark, a product must be tested by an accredited lab against the criteria in **NIST IR 8425**, which is a direct profile of the 8259A baseline. The mark serves as a visible signal to consumers that a product meets a strong cybersecurity standard.

For manufacturers, aligning with the NIST baseline is the most direct path to preparing for both federal procurement requirements and the consumer-facing trust mark.

## 4. Future Direction: Insights from the Manufacturer Workshop (NIST IR 8562)

The NIST IoT program is continually evolving its guidance. **[NIST IR 8562][nistir8562]**, the *Summary Report for the Workshop on Updating Manufacturer Guidance for Securable Connected Product Development*, documents feedback from a December 2024 workshop and gives strong indicators of where the `8259` series is heading.

The key takeaways signal a move towards a more holistic and context-aware approach to IoT security:

- **Dynamic & Contextual Threat Modeling**: Participants emphasized that threat modeling needs to be more dynamic, with context-aware inputs. Instead of just following a checklist, manufacturers need to consider *who* might be attacking and *why*, and use frameworks like MITRE's EMB3D to get a consistent understanding of threats and mitigations.
- **Full Lifecycle Management & End-of-Life (EOL)**: A major theme was the disconnect between a physical product's lifetime and its software support period. There is a critical need for clear EOL policies, proactive communication to consumers about support end dates, and a plan for securely off-ramping "zombie devices" that no longer receive security updates.
- **Clarifying Shared Responsibility**: The balance of responsibility between manufacturers and users varies by sector (e.g., consumer vs. OT). The discussion highlighted the need for clear communication from manufacturers about what actions users need to take to keep products secure, especially regarding updates.
- **Incentivizing Security**: There's a recognized need for better incentives—both market-driven and potentially regulatory—to encourage manufacturers to invest in long-term security, especially for post-market maintenance and end-of-life support.
- **Integrating Privacy**: While cybersecurity and privacy are related, participants noted the distinct challenges of privacy risk management. Future guidance will likely draw more from frameworks like the NIST Privacy Framework to help manufacturers integrate privacy-enhancing design objectives (predictability, manageability, and disassociability).
- **Coordination and Open Standards**: The report stresses the importance of government and industry coordination on initiatives like the U.S. Cyber Trust Mark. The adoption of open standards is seen as crucial for managing risk, especially in heterogeneous environments like OT.

The feedback summarized in this report will be used to revise the core `NIST IR 8259` publication, providing an early look at the future of U.S. IoT security guidance.

<!-- Citations -->
[nistir8259]: https://csrc.nist.gov/publications/detail/nistir/8259/final
[nistir8259a]: https://doi.org/10.6028/NIST.IR.8259A
[nistir8259b]: https://doi.org/10.6028/NIST.IR.8259B
[nistir8425]: https://nvlpubs.nist.gov/nistpubs/ir/2022/NIST.IR.8425.pdf
[us_iot_act]: https://www.congress.gov/bill/116th-congress/house-bill/1668 "IoT Cybersecurity Improvement Act of 2020"
[nistir8562]: https://doi.org/10.6028/NIST.IR.8562 "NIST IR 8562 - Summary Report for Workshop on Updating Manufacturer Guidance for Securable Connected Product Development" 