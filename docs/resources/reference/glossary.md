---
title: Glossary of Terms
sidebar_label: Glossary
tags: [glossary, definitions, cra, sbom, secure-by-design]
---
# Glossary

This glossary defines key terms, acronyms, and concepts used throughout the Secure-by-Design Handbook.

<br/>

<dfn>CE Marking</dfn>
: A mandatory marking for certain products sold within the European Economic Area (EEA), indicating conformity with health, safety, and environmental protection standards. The CRA adds cybersecurity requirements to the CE mark for products with digital elements. See the [CRA Overview](../../standards/cra-overview.md) for more details.

<dfn>Conformity Assessment</dfn>
: The process of demonstrating whether a product meets specified requirements. Under the CRA, this can range from a manufacturer's self-assessment (Module A) to a mandatory third-party audit by a Notified Body, depending on the product's risk classification. See the [CRA Conformity Routes](../../standards/cra-overview.md#conformity-assessment-routes) for more.

<dfn>CRA (Cyber-Resilience Act)</dfn>
: Regulation (EU) 2024/2847, a landmark EU law that legally mandates secure-by-design development and vulnerability management for all "products with digital elements" placed on the EU market. See the [CRA Overview](../../standards/cra-overview.md) for a full breakdown.

<dfn>CVD (Coordinated Vulnerability Disclosure)</dfn>
: A process through which security researchers report vulnerabilities to an organization, which then works to remediate the issue and coordinate public disclosure. A public CVD policy is a requirement under the CRA. See our [CVD Policy Template](../policy-and-evidence/policy-templates.md).

<dfn>ETSI (European Telecommunications Standards Institute)</dfn>
: An independent, not-for-profit standardization organization that develops standards for information and communication technologies in Europe. Its **EN 303 645** standard is the key benchmark for consumer IoT security. See the [ETSI EN 303 645 Overview](../../standards/en303645-overview.md).

<dfn>Harmonised Standard</dfn>
: A standard developed by a recognized European Standards Organisation (like ETSI or CEN-CENELEC) following a request from the European Commission. Using a harmonised standard gives a manufacturer a "presumption of conformity" with the legal requirements of a directive or regulation.

<dfn>HSM (Hardware Security Module)</dfn>
: A dedicated crypto-processor designed for securely managing, processing, and storing cryptographic keys in a tamper-resistant environment. HSMs are commonly used in manufacturing to provision device identities. See the [Key Management Guide](../../implementation/build-phase/key-provisioning.md).

<dfn>IACS (Industrial Automation and Control Systems)</dfn>
: The collection of personnel, hardware, and software that can affect or influence the safe, secure, and reliable operation of an industrial process. Also known as Operational Technology (OT). See the [IEC 62443 Overview](../../standards/iec62443-overview.md).

<dfn>NIS 2 Directive</dfn>
: An EU-wide law on cybersecurity that establishes security obligations for "essential" and "important" entities in critical sectors (e.g., energy, transport, health). It primarily governs *organisational* cyber-risk, whereas the CRA governs *product* security.

<dfn>Notified Body</dfn>
: An independent, third-party organization designated by an EU country to assess the conformity of certain products before they can be placed on the market. They are required for higher-risk products under the CRA. See the [CRA Conformity Routes](../../standards/cra-overview.md#conformity-assessment-routes) for more.

<dfn>OTA (Over-the-Air) Update</dfn>
: The practice of remotely distributing new software, firmware, or configuration to devices. A secure OTA mechanism is essential for delivering security patches throughout a product's lifecycle. See the [Secure OTA Updates Guide](../../implementation/build-phase/ota-updates.md).

<dfn>OT (Operational Technology)</dfn>
: Hardware and software that detects or causes a change through the direct monitoring and/or control of physical devices, processes, and events in an enterprise. The leading security standard for OT is **IEC 62443**. See the [IEC 62443 Overview](../../standards/iec62443-overview.md).

<dfn>PDE (Product with Digital Elements)</dfn>
: The official term used in the CRA for any software or hardware product, and its remote data-processing solution, that is directly or indirectly connected to another device or network. This broad definition covers almost any modern connected device. See the [CRA Scope Definition](../../standards/cra-overview.md#statutory-definition).

<dfn>RED (Radio Equipment Directive)</dfn>
: Directive 2014/53/EU, which sets rules for placing radio equipment on the EU market. A Delegated Act has activated cybersecurity requirements under the RED, which become mandatory from **1 August 2025**, over two years before the CRA. See the [RED Overview](../../standards/red-overview.md).

<dfn>Root of Trust (RoT)</dfn>
: A component or set of components within a system that is inherently trusted. In hardware, this is often a Secure Element or TPM that anchors the device's security guarantees (like secure boot) in a physically protected environment. See the [Key Management Guide](../../implementation/build-phase/key-provisioning.md).

<dfn>SBOM (Software Bill of Materials)</dfn>
: A formal, machine-readable inventory of the software components and dependencies in a codebase. Providing an SBOM is a core transparency requirement of the CRA. See the [SBOM & VEX Guide](../../implementation/build-phase/sbom-vex.md).

<dfn>Secure Boot</dfn>
: A security process that ensures a device only loads and executes cryptographically signed and verified software, starting from an immutable hardware root of trust. This prevents tampering and the loading of malicious code. See the [Secure Boot Guide](../../implementation/build-phase/secure-boot.md).

<dfn>Secure Element (SE)</dfn>
: A dedicated, tamper-resistant microcontroller designed to be a "key vault". It securely hosts applications and stores sensitive cryptographic data. See the [Key Management Guide](../../implementation/build-phase/key-provisioning.md).

<dfn>TEE (Trusted Execution Environment)</dfn>
: A secure area inside a main processor (e.g., Arm TrustZone) that isolates security-critical code and data from the normal ("rich") operating system. It provides confidentiality and integrity for trusted applications. See the [Key Management Guide](../../implementation/build-phase/key-provisioning.md).

<dfn>TPM (Trusted Platform Module)</dfn>
: A standardized crypto-processor that provides secure key storage, cryptographic functions, and platform integrity measurement (attestation). Governed by the Trusted Computing Group (TCG) specification. See the [Key Management Guide](../../implementation/build-phase/key-provisioning.md).

<dfn>VEX (Vulnerability Exploitability eXchange)</dfn>
: A security advisory that clarifies whether a specific product is affected by a known vulnerability in one of its included components. It is a companion document to an SBOM, used to suppress false positives from scanners. See the [SBOM & VEX Guide](../../implementation/build-phase/sbom-vex.md).

---

*This content is being developed. Contribute definitions via our [GitHub repository](https://github.com/sbd-community/handbook).* 