---
title: "Threat Modeling"
sidebar_label: "Threat Modeling"
sidebar_position: 0
tags: [threat-modeling, risk-assessment, stride, cra, secure-by-design]
---
# Guide: Threat Modeling

## 1. Introduction to Threat Modeling

### 1.1. What is Threat Modeling?

**Threat Modeling** is a structured, systematic process for identifying potential security threats to a system, analyzing the risks they pose, and defining mitigations to reduce that risk. Instead of waiting for vulnerabilities to be discovered after release, you proactively anticipate how an attacker might try to compromise your product.

It is the foundational activity for building a secure product and the practical implementation of a risk assessment. The process provides the rationale for your security architecture and proves to regulators that you have built security in from the start.

### 1.2. The Regulatory Requirement

The legal basis for threat modeling is established in two key places:

-   **Cyber-Resilience Act ([Art. 13 § 2][cra_art13])**: The CRA mandates that manufacturers must "undertake a cybersecurity risk assessment" and include the documentation of this assessment in their technical file.
-   **BSI TR-03183-1 ([REQ_RA 1][bsi_tr_03183_p1])**: Germany's influential technical guideline, which provides a concrete interpretation of the CRA's essential requirements, explicitly requires a documented "risk assessment covering the product's intended and reasonably foreseeable use."

The output of your threat model is the primary evidence that you have fulfilled this requirement.

### 1.3. Do I Really Need to Do This?

**Yes.** Of all the security activities in this handbook, this is the one that is most explicitly and unambiguously required by the law.

The Cyber-Resilience Act is a **risk-based** regulation. The entire framework is built upon the manufacturer's duty to perform a risk assessment and then implement security controls that are appropriate to the identified risks.

If you have not performed and documented a threat model, you have not met the most fundamental obligation of the CRA. There are no exceptions for connected devices, regardless of their size or perceived simplicity.

## 2. The Threat Modeling Process

A typical threat modeling exercise involves four key steps, often performed in a workshop setting with architects, developers, and security experts.

### Step 1: Decompose Your System
You can't defend what you don't understand. Start by creating a simple architecture diagram of your product.
- **Identify Components:** List all the key hardware and software components (e.g., MCU, mobile app, cloud backend, firmware).
- **Draw Data Flows:** Show how data moves between these components.
- **Define Trust Boundaries:** Draw lines where the level of trust changes (e.g., between the device and the cloud, between user-mode and kernel-mode). Any data crossing a trust boundary is a potential point of attack.

### Step 2: Identify Threats (using STRIDE)
For each component and data flow, systematically brainstorm potential threats. The most common methodology for this is **STRIDE**, a mnemonic for different categories of security threats:
- **S**poofing: Impersonating someone or something else. (*Can an attacker pretend to be a valid device on my network?*)
- **T**ampering: Modifying data or code. (*Can an attacker alter a firmware update in transit?*)
- **R**epudiation: Claiming to have not performed an action. (*Can a user deny having sent a specific command?*)
- **I**nformation Disclosure: Exposing information to someone not authorized to see it. (*Can an attacker read sensitive user data from flash memory?*)
- **D**enial of Service: Making a system or service unavailable. (*Can an attacker flood the device with traffic to make it crash?*)
- **E**levation of Privilege: Gaining capabilities without authorization. (*Can a normal user gain administrator access?*)

### Step 3: Rate and Prioritize Threats
You can't fix everything at once. Each identified threat should be rated to determine its risk level, often using a simple High/Medium/Low scale or a more formal system like DREAD (Damage, Reproducibility, Exploitability, Affected Users, Discoverability). This allows you to prioritize the most significant threats.

### Step 4: Define Mitigations
For each high or medium-priority threat, define a specific technical control or process to mitigate it.
- **Threat:** An attacker can read the firmware from the external flash chip. (Information Disclosure)
- **Mitigation:** Encrypt the firmware on the flash storage. This mitigation now becomes a security requirement for your product.

## 3. Compliance Checklist

To ensure your threat modeling process meets regulatory expectations, you should be able to answer "yes" to the following:

- [ ] **Process in Place:** Do you have a documented process for performing threat modeling on new products and significant feature changes?
- [ ] **System Decomposed:** Have you created a data flow diagram that identifies all components and trust boundaries?
- [ ] **Threats Identified:** Have you used a systematic approach (like STRIDE) to identify threats for your product?
- [ ] **Risks Rated:** Have you assessed the risk of each identified threat to prioritize your efforts?
- [ ] **Mitigations Defined:** For each significant threat, is there a corresponding security requirement or mitigation plan?
- [ ] **Documentation for Audit:** Is the output of your threat model (diagrams, threat list, mitigations) included in the product's technical file as evidence of your risk assessment process?

<!-- Citations -->
[cra_art13]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_13 "CRA Article 13 – Obligations of manufacturers"
[bsi_tr_03183_p1]: https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI-TR-03183-1-0_9_0.pdf "BSI TR-03183 Part 1: General requirements"