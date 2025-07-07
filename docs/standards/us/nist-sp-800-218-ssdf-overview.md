---
title: NIST SP 800-218 (SSDF)
sidebar_position: 4
tags: [nist, ssdf, secure-development, sdlc, us, secure-by-design]
---
# NIST SP 800-218: Secure Software Development Framework (SSDF)

## 1. Why the SSDF matters

The **Secure Software Development Framework (SSDF)**, detailed in **NIST Special Publication 800-218**, is a set of fundamental, high-level practices for building secure software. It was developed in response to US Executive Order 14028, "Improving the Nation's Cybersecurity," and serves as a common language for software producers and consumers to talk about security.

Unlike a prescriptive standard, the SSDF is a flexible framework. It focuses on the *outcomes* of security practices rather than specific tools or methods.

:::info Official Text
The full text of the framework is available from NIST:
- **NIST SP 800-218**: [Secure Software Development Framework (SSDF) Version 1.1][nist_sp_800-218]
:::

| SSDF Milestone | Document | Date |
| :--- | :--- | :--- |
| Original SSDF Published | NIST White Paper | **April 2020** |
| US Executive Order 14028 released | "Improving the Nation's Cybersecurity" | **May 2021** |
| Public Draft of SSDF v1.1 released | Draft for public comment | **September 2021** |
| Current Version Published | **NIST SP 800-218 v1.1** | **February 2022** |

**Relationship to Other Standards**

The SSDF does not exist in a vacuum. It serves as a foundational process framework that enables organizations to meet the requirements of more specific regulations and standards.

| Standard / Framework | How it interacts with the SSDF |
| :--- | :--- |
| **[CISA SBD Principles](../../quick-start/cisa-sbd-principles.md)** | CISA provides the high-level philosophy and goals for Secure by Design. The SSDF provides the concrete, structured framework of practices and tasks—the "how-to"—for implementing those principles within a software development lifecycle. |
| **[NISTIR 8259 Series](./nistir8259-overview.md)** | The SSDF is a generic framework for any software. NISTIR 8259 provides specific, device-centric cybersecurity capabilities and baselines for IoT products. Manufacturers use the SSDF process to build products that meet the NISTIR 8259 technical requirements. |
| **[EU Cyber-Resilience Act (CRA)](../eu/cra-overview.md)** | The CRA legally mandates a secure development lifecycle and vulnerability handling processes. The SSDF provides a comprehensive set of practices that can be used as a direct blueprint for meeting the CRA's essential requirements in Annex I. |
| **[IEC 62443 Series](../global/iec62443-overview.md)** | Similar to NISTIR 8259, IEC 62443 provides detailed technical requirements, but for Industrial Automation and Control Systems (IACS). The SSDF provides the process framework that an IACS manufacturer would use to implement the required security levels from IEC 62443-4-1 (secure product development). |

## 2. Scope – Who is it for?

The SSDF is intentionally broad. It is designed to be used by any organization that develops, produces, acquires, or uses software, regardless of their size, industry sector, or level of security maturity. The framework is technology-neutral and can be applied to any kind of software, including:
- Information Technology (IT) systems
- Industrial Control Systems (ICS)
- Cyber-Physical Systems (CPS)
- Internet of Things (IoT) devices

### From Generic Software to Connected Devices

While the SSDF applies to all software, this handbook focuses on its application for manufacturers of **Products with Digital Elements (PDEs)**, or "connected devices." For this audience, the SSDF provides the foundational "what" of a secure development lifecycle.

However, it does not provide the specific "how" for the unique challenges of embedded systems. This is where more specific standards come in. Standards like **[ETSI EN 303 645](../global/etsi-en-303-645-overview.md)** and **[NISTIR 8259](./nistir8259-overview.md)** provide concrete, device-centric controls that align with the SSDF's high-level principles.

| High-Level SSDF Practice | Concrete Connected Device Control |
|---|---|
| **PW.9**: Configure Software to Have Secure Settings by Default | **ETSI EN 303 645 §4.5**: No universal default passwords. |
| **PS.2**: Provide a Mechanism for Verifying Software Release Integrity | **NISTIR 8259A §4.2-3**: Software/firmware update mechanism is secure. |
| **RV.1**: Identify and Confirm Vulnerabilities on an Ongoing Basis | **CRA Annex I, Part II §5, 6**: Publish a Coordinated Vulnerability Disclosure policy. |

This handbook uses the SSDF as a structuring principle to connect high-level goals to the on-the-ground engineering work needed to secure a connected device.

## 3. The Four Pillars of the SSDF

The SSDF organizes secure development practices into four groups, or pillars:

1.  **Prepare the Organization (PO)**: Ensure people, processes, and technology are ready to perform secure development. This includes defining requirements, assigning roles, training staff, and securing the development environment itself.
2.  **Protect the Software (PS)**: Protect all software components from tampering and unauthorized access. This covers source code, executables, and the integrity of software releases.
3.  **Produce Well-Secured Software (PW)**: Produce software with minimal security vulnerabilities. This is the core "build" phase, covering everything from secure design and threat modeling, to secure coding, testing, and configuration.
4.  **Respond to Vulnerabilities (RV)**: Identify and remediate vulnerabilities in released software. This covers ongoing vulnerability management, root cause analysis, and patching.

## 4. SSDF Practices & Implementation

The following tables remap the SSDF's practices into a structure that aligns with the key phases of a product security program, similar to how we present regulations like the [Cyber-Resilience Act](../eu/cra-overview.md). This provides a clear, task-oriented path from the framework's principles to engineering reality.

### 4.1 Risk Assessment & Threat Modeling
Before any code is written, the SSDF mandates a proactive approach to identifying and mitigating risks. This begins with understanding the product's context and performing a systematic threat analysis to inform all subsequent security work.

| SSDF Practice | Key Engineering Tasks | Implementation Guides |
|---|---|---|
| **Define Security Requirements**<br/>[SSDF PO.1](#appendix-prepare-the-organization-po-practices--tasks) | Gather requirements from regulations (CRA, FDA) and standards; perform a risk assessment to define product-specific requirements; and communicate security requirements to suppliers for all third-party components. | [Threat Modeling](../../implementation/build-phase/threat-modeling.md)<br/>[SBOM & VEX Workflows](../../implementation/build-phase/sbom-vex.md) |
| **Secure Design**<br/>[SSDF PW.1](#appendix-produce-well-secured-software-pw-practices--tasks) | Use threat modeling to assess security risks; design the software architecture to mitigate those risks based on the identified threats. | [Threat Modeling](../../implementation/build-phase/threat-modeling.md) |
| **Review the Design**<br/>[SSDF PW.2](#appendix-produce-well-secured-software-pw-practices--tasks) | Have a qualified person or automated tool review the software design and architecture to confirm it meets security requirements and mitigates identified risks. | n/a (Process-oriented) |

### 4.2 Product Security
This covers the core "build-time" practices for creating a secure product, ensuring the integrity of its components, and shipping it in a secure state.

| SSDF Practice | Key Engineering Tasks | Implementation Guides |
|---|---|---|
| **Protect Code**<br/>[SSDF PS.1](#appendix-protect-the-software-ps-practices--tasks) | Use version control with commit signing; restrict access to code repositories based on least privilege. | [CI/CD Hardening](../../implementation/operate-phase/cicd-hardening.md) |
| **Verify Release Integrity**<br/>[SSDF PS.2](#appendix-protect-the-software-ps-practices--tasks) | Use code signing to protect the integrity of executables; provide cryptographic hashes for release files. | [Secure OTA Updates](../../implementation/build-phase/ota-updates.md)<br/>[Secure Boot](../../implementation/build-phase/secure-boot.md) |
| **Archive & Protect Releases**<br/>[SSDF PS.3](#appendix-protect-the-software-ps-practices--tasks) | Securely archive release files and provenance data; create and maintain an SBOM for all software components. | [SBOM & VEX Workflows](../../implementation/build-phase/sbom-vex.md) |
| **Reuse Well-Secured Software**<br/>[SSDF PW.4](#appendix-produce-well-secured-software-pw-practices--tasks) | Acquire and maintain well-secured third-party components; track provenance via SBOMs; monitor components for new vulnerabilities. | [SBOM & VEX Workflows](../../implementation/build-phase/sbom-vex.md) |
| **Secure Coding**<br/>[SSDF PW.5](#appendix-produce-well-secured-software-pw-practices--tasks) | Follow secure coding practices appropriate to the language and environment, such as validating all inputs and properly encoding all outputs. | n/a (Process-oriented) |
| **Secure Build Process**<br/>[SSDF PW.6](#appendix-produce-well-secured-software-pw-practices--tasks) | Use up-to-date compilers and build tools with security features enabled (e.g., ASLR, stack canaries). | [Secure Configuration & Hardening](../../implementation/build-phase/secure-configuration.md) |
| **Secure by Default**<br/>[SSDF PW.9](#appendix-produce-well-secured-software-pw-practices--tasks) | Define and implement a secure baseline configuration for the product, disabling unused services and ports. | [Secure Configuration & Hardening](../../implementation/build-phase/secure-configuration.md) |

### 4.3 Vulnerability Handling
A manufacturer's responsibility does not end at shipment. This involves both proactively finding flaws before they can be exploited and reactively handling vulnerabilities that are discovered in the field.

| SSDF Practice | Key Engineering Tasks | Implementation Guides |
|---|---|---|
| **Code Analysis & Testing**<br/>[SSDF PW.7 & PW.8](#appendix-produce-well-secured-software-pw-practices--tasks) | Proactively find vulnerabilities by using static analysis (SAST) on source code and dynamic analysis (DAST) on executables. | [Static & Dynamic Analysis](../../tools/static-and-dynamic-analysis.md) |
| **Identify & Confirm Vulnerabilities**<br/>[SSDF RV.1](#appendix-respond-to-vulnerabilities-rv-practices--tasks) | Establish a vulnerability disclosure program; monitor public vulnerability databases and threat intelligence for new issues. | [Vulnerability Disclosure](../../implementation/operate-phase/vulnerability-disclosure.md) |
| **Remediate Vulnerabilities**<br/>[SSDF RV.2](#appendix-respond-to-vulnerabilities-rv-practices--tasks) | Prioritize vulnerabilities based on risk; develop and deliver patches via a secure, automated mechanism. | [Patch Cadence](../../implementation/operate-phase/patch-cadence.md)<br/>[Secure OTA Updates](../../implementation/build-phase/ota-updates.md) |
| **Root Cause Analysis**<br/>[SSDF RV.3](#appendix-respond-to-vulnerabilities-rv-practices--tasks) | Analyze vulnerabilities to find their root cause, review the codebase for similar weaknesses to eradicate the bug class, and update the development process to prevent recurrence. | n/a (Process-oriented) |

### 4.4 Governance & Supporting Processes
These high-level practices establish the organizational foundation for a successful product security program.

| SSDF Practice | Key Engineering Tasks | Implementation Guides |
|---|---|---|
| **Implement Roles & Responsibilities**<br/>[SSDF PO.2](#appendix-prepare-the-organization-po-practices--tasks) | Define security roles (e.g., PSIRT); provide role-based training to engineers and product owners; secure management buy-in for security initiatives. | n/a (Process-oriented) |
| **Implement Supporting Toolchains**<br/>[SSDF PO.3](#appendix-prepare-the-organization-po-practices--tasks) | Integrate security tools into developer toolchains; secure the build pipeline; ensure reproducible builds. | [CI/CD Hardening](../../implementation/operate-phase/cicd-hardening.md) |
| **Define Security Checks**<br/>[SSDF PO.4](#appendix-prepare-the-organization-po-practices--tasks) | Establish criteria for security gates in the development process (e.g., no 'critical' vulnerabilities in SBOM scans before release). | [CI/CD Hardening](../../implementation/operate-phase/cicd-hardening.md) |
| **Maintain Secure Environments**<br/>[SSDF PO.5](#appendix-prepare-the-organization-po-practices--tasks) | Separate and protect development, build, test, and distribution environments; harden developer endpoints. | [CI/CD Hardening](../../implementation/operate-phase/cicd-hardening.md) |

## Appendix: Prepare the Organization (PO) Practices & Tasks

This section provides a summary of the practices and tasks for the "Prepare the Organization" (PO) group from the SSDF.

| ID | Requirement |
|:---|:---|
| **PO.1** | **Define Security Requirements for Software Development:** Ensure that security requirements for software development are known at all times so that they can be taken into account throughout the SDLC and duplication of effort can be minimized because the requirements information can be collected once and shared. |
| PO.1.1 | Identify and document all security requirements for the organization's software development infrastructures and processes, and maintain the requirements over time. |
| PO.1.2 | Identify and document all security requirements for organization-developed software to meet, and maintain the requirements over time. |
| PO.1.3 | Communicate requirements to all third parties who will provide commercial software components to the organization for reuse by the organization's own software. |
| **PO.2** | **Implement Roles and Responsibilities:** Ensure that everyone inside and outside of the organization involved in the SDLC is prepared to perform their SDLC-related roles and responsibilities throughout the SDLC. |
| PO.2.1 | Create new roles and alter responsibilities for existing roles as needed to encompass all parts of the SDLC. Periodically review and maintain the defined roles and responsibilities, updating them as needed. |
| PO.2.2 | Provide role-based training for all personnel with responsibilities that contribute to secure development. Periodically review personnel proficiency and role-based training, and update the training as needed. |
| PO.2.3 | Obtain upper management or authorizing official commitment to secure development, and convey that commitment to all with development-related roles and responsibilities. |
| **PO.3** | **Implement Supporting Toolchains:** Use automation to reduce human effort and improve the accuracy, reproducibility, usability, and comprehensiveness of security practices throughout the SDLC, as well as provide a way to document and demonstrate the use of these practices. |
| PO.3.1 | Specify which tools or tool types must or should be included in each toolchain to mitigate identified risks, as well as how the toolchain components are to be integrated with each other. |
| PO.3.2 | Follow recommended security practices to deploy, operate, and maintain tools and toolchains. |
| PO.3.3 | Configure tools to generate artifacts of their support of secure software development practices as defined by the organization. |
| **PO.4** | **Define and Use Criteria for Software Security Checks:** Help ensure that the software resulting from the SDLC meets the organization's expectations by defining and using criteria for checking the software's security during development. |
| PO.4.1 | Define criteria for software security checks and track throughout the SDLC. |
| PO.4.2 | Implement processes, mechanisms, etc. to gather and safeguard the necessary information in support of the criteria. |
| **PO.5** | **Implement and Maintain Secure Environments for Software Development:** Ensure that all components of the environments for software development are strongly protected from internal and external threats to prevent compromises of the environments or the software being developed or maintained within them. |
| PO.5.1 | Separate and protect each environment involved in software development. |
| PO.5.2 | Secure and harden development endpoints (i.e., endpoints for software designers, developers, testers, builders, etc.) to perform development-related tasks using a risk-based approach. |

## Appendix: Protect the Software (PS) Practices & Tasks

This section provides a summary of the practices and tasks for the "Protect the Software" (PS) group from the SSDF.

| ID | Requirement |
|:---|:---|
| **PS.1** | **Protect All Forms of Code from Unauthorized Access and Tampering:** Help prevent unauthorized changes to code, both inadvertent and intentional, which could circumvent or negate the intended security characteristics of the software. |
| PS.1.1 | Store all forms of code – including source code, executable code, and configuration-as-code – based on the principle of least privilege so that only authorized personnel, tools, services, etc. have access. |
| **PS.2** | **Provide a Mechanism for Verifying Software Release Integrity:** Help software acquirers ensure that the software they acquire is legitimate and has not been tampered with. |
| PS.2.1 | Make software integrity verification information available to software acquirers. |
| **PS.3** | **Archive and Protect Each Software Release:** Preserve software releases in order to help identify, analyze, and eliminate vulnerabilities discovered in the software after release. |
| PS.3.1 | Securely archive the necessary files and supporting data (e.g., integrity verification information, provenance data) to be retained for each software release. |
| PS.3.2 | Collect, safeguard, maintain, and share provenance data for all components of each software release (e.g., in a software bill of materials [SBOM]). |

## Appendix: Produce Well-Secured Software (PW) Practices & Tasks

This section provides a summary of the practices and tasks for the "Produce Well-Secured Software" (PW) group from the SSDF.

| ID | Requirement |
|:---|:---|
| **PW.1** | **Design Software to Meet Security Requirements and Mitigate Security Risks:** Identify and evaluate the security requirements for the software; determine what security risks the software is likely to face during operation and how the software's design and architecture should mitigate those risks. |
| PW.1.1 | Use forms of risk modeling – such as threat modeling, attack modeling, or attack surface mapping – to help assess the security risk for the software. |
| PW.1.2 | Track and maintain the software's security requirements, risks, and design decisions. |
| PW.1.3 | Where appropriate, build in support for using standardized security features and services instead of creating proprietary implementations. |
| **PW.2** | **Review the Software Design to Verify Compliance with Security Requirements and Risk Information:** Help ensure that the software will meet the security requirements and satisfactorily address the identified risk information. |
| PW.2.1 | Have a qualified person (or people) who were not involved with the design and/or automated processes review the software design to confirm and enforce that it meets all of the security requirements and satisfactorily addresses the identified risk information. |
| **PW.4** | **Reuse Existing, Well-Secured Software When Feasible Instead of Duplicating Functionality:** Lower the costs of software development, expedite software development, and decrease the likelihood of introducing additional security vulnerabilities into the software by reusing software modules and services. |
| PW.4.1 | Acquire and maintain well-secured software components (e.g., software libraries, modules, middleware, frameworks) from commercial, open-source, and other third-party developers for use by the organization's software. |
| PW.4.2 | Create and maintain well-secured software components in-house following SDLC processes to meet common internal software development needs that cannot be better met by third-party software components. |
| PW.4.4 | Verify that acquired commercial, open-source, and all other third-party software components comply with the requirements, as defined by the organization, throughout their life cycles. |
| **PW.5** | **Create Source Code by Adhering to Secure Coding Practices:** Decrease the number of security vulnerabilities in the software, and reduce costs by minimizing vulnerabilities introduced during source code creation. |
| PW.5.1 | Follow all secure coding practices that are appropriate to the development languages and environment to meet the organization's requirements. |
| **PW.6** | **Configure the Compilation, Interpreter, and Build Processes to Improve Executable Security:** Decrease the number of security vulnerabilities in the software and reduce costs by eliminating vulnerabilities before testing occurs. |
| PW.6.1 | Use compiler, interpreter, and build tools that offer features to improve executable security. |
| PW.6.2 | Determine which compiler, interpreter, and build tool features should be used and how each should be configured, then implement and use the approved configurations. |
| **PW.7** | **Review and/or Analyze Human-Readable Code to Identify Vulnerabilities and Verify Compliance with Security Requirements:** Help identify vulnerabilities so that they can be corrected before the software is released to prevent exploitation. |
| PW.7.1 | Determine whether code review (a person looks directly at the code to find issues) and/or code analysis (tools are used to find issues in code) should be used. |
| PW.7.2 | Perform the code review and/or code analysis based on the organization's secure coding standards, and record and triage all discovered issues. |
| **PW.8** | **Test Executable Code to Identify Vulnerabilities and Verify Compliance with Security Requirements:** Help identify vulnerabilities so that they can be corrected before the software is released in order to prevent exploitation. |
| PW.8.1 | Determine whether executable code testing should be performed to find vulnerabilities not identified by previous reviews, analysis, or testing and, if so, which types of testing should be used. |
| PW.8.2 | Scope the testing, design the tests, perform the testing, and document the results, including recording and triaging all discovered issues. |
| **PW.9** | **Configure Software to Have Secure Settings by Default:** Help improve the security of the software at the time of installation to reduce the likelihood of the software being deployed with weak security settings. |
| PW.9.1 | Define a secure baseline by determining how to configure each setting that has an effect on security so that the default settings are secure. |
| PW.9.2 | Implement the default settings, and document each setting for software administrators. |

## Appendix: Respond to Vulnerabilities (RV) Practices & Tasks

This section provides a summary of the practices and tasks for the "Respond to Vulnerabilities" (RV) group from the SSDF.

| ID | Requirement |
|:---|:---|
| **RV.1** | **Identify and Confirm Vulnerabilities on an Ongoing Basis:** Help ensure that vulnerabilities are identified more quickly so that they can be remediated more quickly in accordance with risk, reducing the window of opportunity for attackers. |
| RV.1.1 | Gather information from software acquirers, users, and public sources on potential vulnerabilities in the software and third-party components that the software uses, and investigate all credible reports. |
| RV.1.2 | Review, analyze, and/or test the software's code to identify or confirm the presence of previously undetected vulnerabilities. |
| RV.1.3 | Have a policy that addresses vulnerability disclosure and remediation, and implement the roles, responsibilities, and processes needed to support that policy. |
| **RV.2** | **Assess, Prioritize, and Remediate Vulnerabilities:** Help ensure that vulnerabilities are remediated in accordance with risk to reduce the window of opportunity for attackers. |
| RV.2.1 | Analyze each vulnerability to gather sufficient information about risk to plan its remediation or other risk response. |
| RV.2.2 | Plan and implement risk responses for vulnerabilities. |
| **RV.3** | **Analyze Vulnerabilities to Identify Their Root Causes:** Help reduce the frequency of vulnerabilities in the future. |
| RV.3.1 | Analyze identified vulnerabilities to determine their root causes. |
| RV.3.2 | Analyze the root causes over time to identify patterns, such as a particular secure coding practice not being followed consistently. |
| RV.3.3 | Review the software for similar vulnerabilities to eradicate a class of vulnerabilities, and proactively fix them rather than waiting for external reports. |
| RV.3.4 | Review the SDLC process, and update it if appropriate to prevent (or reduce the likelihood of) the root cause recurring in updates to the software or in new software that is created. |

<!-- Citations -->
[nist_sp_800-218]: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf "NIST Special Publication 800-218: Secure Software Development Framework (SSDF) Version 1.1" 