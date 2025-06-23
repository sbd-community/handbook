---
title: "Threat Modeling & Risk Assessment"
sidebar_label: "Threat Modeling"
sidebar_position: 0
tags: [threat-modeling, risk-assessment, stride, cra, secure-by-design]
---
# Guide: Threat Modeling & Risk Assessment

## 1. What is Threat Modeling?

**Threat Modeling** is a structured, systematic process for identifying potential security threats and vulnerabilities in a product, determining their risk, and defining mitigations. It is the foundational activity of a **Secure-by-Design** approach. Instead of waiting for vulnerabilities to be discovered after release, you proactively anticipate how an attacker might try to compromise your system.

This is not just a best practice; it is a core requirement of the EU's cybersecurity legislation. The **[Cyber-Resilience Act (CRA)](./../../standards/eu/cra-overview.md)** is built on the principle of risk management, and Germany's **[BSI TR-03183-1][bsi_tr_03183]** technical guideline explicitly requires manufacturers to perform and document a cybersecurity risk assessment ([REQ_RA 1][bsi_tr_03183]) and to build products that are "secure by design" ([REQ_ER 1][bsi_tr_03183]).

The output of this process is the blueprint for your product's security architecture and the primary evidence for your technical file to demonstrate that you have built security in from the start.

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
[bsi_tr_03183]: https://www.bsi.bund.de/EN/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/Technische-Richtlinien/TR-nach-Thema-sortiert/tr03183/TR-03183_node.html "BSI Technical Guideline TR-03183" 