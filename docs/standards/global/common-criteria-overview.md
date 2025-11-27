---
title: "Common Criteria (ISO/IEC 15408)"
sidebar_position: 14
tags: [common-criteria, iso15408, certification, assurance, global]
---

# Common Criteria (ISO/IEC 15408) – Global IT Security Evaluation

## 1. Why Common Criteria matters now

**Common Criteria (CC)** is the globally recognised framework for **evaluating and certifying the security of IT products**, formally standardised as the **ISO/IEC 15408** series with the companion evaluation methodology **ISO/IEC 18045**.  
Rather than prescribing a fixed set of security controls, CC provides a **catalogue of security requirements** and an **assurance framework** that lets vendors, customers, and evaluators agree on _what_ will be protected and _how thoroughly_ it will be assessed.

For connected devices and embedded products, CC is most relevant when:

- Customers or regulators require **high assurance** (e.g., secure elements, HSMs, gateways, smart cards, identity & access systems).
- Certification is needed to access **specific markets or procurement schemes** that reference CC or its successors (e.g., national schemes, emerging EU certification under the Cybersecurity Act).
- Vendors want a **structured way to define, implement, and evidence security requirements** that can also support laws like the **Cyber‑Resilience Act (CRA)** or sectoral standards such as **IEC 62443**.

::::info Official Texts

- **Common Criteria v3.1 R5 core documents (freely available):**

  - **CC Part 1: Introduction and general model** – [CCPART1V3.1R5.pdf][cc_part1]
  - **CC Part 2: Security functional components** – [CCPART2V3.1R5.pdf][cc_part2]
  - **CC Part 3: Security assurance components** – [CCPART3V3.1R5.pdf][cc_part3]
  - **CEM: Common Methodology for IT Security Evaluation** – [CEMV3.1R5.pdf][cem_v31r5]

- **ISO/IEC 15408 – Evaluation criteria for IT security (normative, paywalled):**

  - **Part 1: Introduction and general model (2022)** – [ISO/IEC 15408‑1:2022][iso_15408_1]
  - **Part 2: Security functional components (2022)** – [ISO/IEC 15408‑2:2022][iso_15408_2]
  - **Part 3: Security assurance components (2022)** – [ISO/IEC 15408‑3:2022][iso_15408_3]

- **ISO/IEC 18045 – Evaluation criteria for IT security — Methodology for IT security evaluation:**
  - **ISO/IEC 18045:2022** – [Methodology for IT security evaluation][iso_18045]
    ::::

::::info Additional Guidance

- **ISO/IEC TR 15443‑1:2012 – Security assurance framework, Part 1: Introduction and concepts** – [Overview of IT security assurance concepts][iso_15443_1].
- **ISO/IEC TR 15446:2017 – Guidance for the production of Protection Profiles and Security Targets** – [How to write CC Protection Profiles and Security Targets][iso_15446].
  ::::

**Timeline of key dates**

| Year      | Milestone                                         | Why it matters                                                                                 |
| --------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| 1999–2005 | Early ISO/IEC 15408 & 18045 editions              | Established CC and its methodology as the global IT security evaluation framework.             |
| 2017      | CC v3.1 R5 and CEM v3.1 R5                        | Latest public CC and evaluation methodology texts used by most national and regional schemes.  |
| 2022      | ISO/IEC 15408‑1/‑2/‑3:2022 and ISO/IEC 18045:2022 | Updated ISO/IEC editions aligning CC with current practice; useful for clause‑level citations. |

**Relationship to other standards & regulations**

| Law / Standard                                                                                                             | How it interacts with Common Criteria                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[Cyber‑Resilience Act (CRA)](../eu/cra-overview.md)**                                                                    | CRA defines **essential cybersecurity requirements** for products with digital elements, while CC provides a **structured way to specify and evidence** those requirements for a given product. For high‑risk products (e.g., secure elements, gateways), a CC‑style ST and evaluation can support CRA conformity assessment, especially where EU cybersecurity certification schemes adopt CC concepts. |
| **[ETSI EN 303 645](./en303645-overview.md)**                                                                              | EN 303 645 defines a practical **baseline for consumer IoT security**. CC can be used to achieve higher assurance for particularly sensitive consumer devices (e.g., locks, security hubs) by formalising requirements and evidence; many EN 303 645 outcomes map naturally onto CC SFR families.                                                                                                        |
| **[IEC 62443 Series](./iec62443-overview.md)**                                                                             | IEC 62443 focuses on **industrial automation and control systems (OT)**. It and CC share common themes: secure development lifecycle, technical security functions, and assurance. In practice, 62443 may govern the overall system and lifecycle, while CC is used for **high‑assurance components** (e.g., secure gateways, controllers, secure elements) within that system.                          |
| **[NIST SP 800-218 (SSDF)](../us/nist-sp-800-218-ssdf-overview.md) & [NIST IR 8259 Series](../us/nistir8259-overview.md)** | NIST’s Secure Software Development Framework (SSDF) and IoT baselines describe **what good secure engineering looks like**. CC’s SARs can be thought of as a **more formalised, evaluation‑oriented expression** of many of the same practices, especially around documentation, configuration management, testing, and vulnerability handling.                                                          |

## 2. Scope – When should you care about Common Criteria?

### 2.1 What Common Criteria covers

Common Criteria is focused on **TOEs (Targets of Evaluation)** – concrete IT products or systems that can be evaluated against an agreed **Security Target (ST)**.  
Typical examples that matter for connected devices include:

- **Secure components and roots of trust:** secure elements, smart cards, trusted platform modules (TPMs), secure microcontrollers, hardware security modules (HSMs).
- **Network and security appliances:** VPN gateways, firewalls, industrial gateways, identity and access management systems.
- **Embedded and IoT platforms:** device operating systems, security‑critical middleware, and in some cases complete connected products, when high assurance is required.

Each TOE is evaluated against:

- A **Protection Profile (PP)** – a reusable, standardised set of requirements for a class of products, _or_
- A **Security Target (ST)** – the vendor’s specific security problem definition and requirements for that individual product.

### 2.2 When Common Criteria is overkill

For many **commodity consumer IoT products**, laws and standards such as **ETSI EN 303 645**, **PSTI**, **NIST IR 8259**, or the **Cyber‑Resilience Act** provide sufficient direction without formal CC certification.  
CC becomes disproportionately heavy when:

- The device has low risk, short lifetime, and no strong regulatory or market demand for **formal certification**.
- The cost and schedule impact of third‑party evaluation cannot be justified compared to lighter‑weight conformity assessment routes.

In those cases, CC is still useful as a **design reference**, but a full evaluation may not be appropriate.

## 3. Using Common Criteria Requirements in Product Design

From an engineering perspective, CC requirements split into:

- **Security Functional Requirements (SFRs)** – _what_ security features the product must provide.
- **Security Assurance Requirements (SARs)** – _how much evidence_ is needed that those features are correctly implemented and effective.

This section shows how to translate major CC requirement themes into concrete engineering work, and where this handbook provides deeper implementation guidance.

### 3.1 Core functional requirement themes (SFRs)

| CC Theme (examples)                                                                    | What it means in practice                                                                                                                                                                                                                     | Implementation Guides                                                                                                                                                                                                                                                             |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Identification, authentication, and access control**<br/>(e.g., FIA\*, FMT\*, FDP\*) | Every actor (user, device, process) must be uniquely identified and authenticated; access to functions and data is controlled based on roles and least privilege; security‑relevant operations are policy‑driven and auditable.               | [Unique Device Identity](../../implementation/build-phase/unique-device-identity.md)<br/>[Secure Configuration & Hardening](../../implementation/build-phase/secure-configuration.md)<br/>[Security Logging & Monitoring](../../implementation/operate-phase/security-logging.md) |
| **Cryptography and secure communication**<br/>(e.g., FCS\*, FTP\*)                     | Cryptographic operations use approved algorithms and key sizes; keys are generated, stored, and destroyed securely; communications channels are protected (e.g., TLS, authenticated key exchange) with proper certificate and key management. | [Key Provisioning & Storage](../../implementation/build-phase/key-provisioning.md)<br/>[Cryptography under the CRA](../../resources/cryptography/cryptography-under-cra.md)                                                                                                       |
| **Software integrity, secure boot, and updates**<br/>(e.g., FPT\*, FDP\*)              | The TOE verifies the integrity and authenticity of its code and configuration at boot; only authenticated, integrity‑protected updates are accepted; rollback and recovery strategies are defined and implemented.                            | [Secure Boot](../../implementation/build-phase/secure-boot.md)<br/>[Secure OTA Updates](../../implementation/build-phase/ota-updates.md)<br/>[CI/CD Hardening](../../implementation/operate-phase/cicd-hardening.md)                                                              |
| **Audit and monitoring**<br/>(e.g., FAU\*)                                             | Security‑relevant events (authentication, configuration changes, failures, policy decisions) are logged with sufficient detail; logs are protected from tampering and loss; authorised operators can review and export logs for analysis.     | [Security Logging & Monitoring](../../implementation/operate-phase/security-logging.md)                                                                                                                                                                                           |
| **User data protection and privacy**<br/>(e.g., FDP\*)                                 | Personal and sensitive data are protected at rest and in transit; only necessary data is collected and retained; secure deletion mechanisms are available for user data and secrets.                                                          | [Data Privacy & Secure Deletion](../../implementation/build-phase/data-privacy.md)                                                                                                                                                                                                |

> **Design tip:** Even if you never name FCS/FIA/FPT explicitly in your internal documentation, you can treat these themes as a **checklist**: each capability should be clearly specified, implemented, and testable.

### 3.2 Assurance requirements and engineering process (SARs)

CC’s **assurance classes** (ADV, AGD, ALC, ATE, AVA, etc.) are about the **rigour of your engineering and verification process**, not just features.  
The table below maps key assurance expectations to concrete tasks in a secure‑by‑design lifecycle.

| Assurance Area (examples)                                  | Engineering Tasks                                                                                                                                                                                                                     | Implementation Guides                                                                                                                                                                                                                   |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Development documentation (ADV\*)**                      | Maintain clear architectural and design documentation: security architecture, trust boundaries, threat model, interface specifications, and data‑flow diagrams. Ensure that these artefacts are kept in sync with the implementation. | [Threat Modeling](../../implementation/build-phase/threat-modeling.md)<br/>[User Documentation Guide](../../implementation/build-phase/user-documentation.md)                                                                           |
| **Guidance documentation (AGD\*)**                         | Produce and maintain **administrator and user guidance** explaining secure installation, configuration, operation, and decommissioning, including secure defaults and required environmental assumptions.                             | [User Documentation Guide](../../implementation/build-phase/user-documentation.md)<br/>[Secure Configuration & Hardening](../../implementation/build-phase/secure-configuration.md)                                                     |
| **Configuration management & lifecycle (ALC\*)**           | Operate a disciplined **secure development lifecycle (SDL)**: version control, change control, build reproducibility, access control on repos and signing keys, supplier management, and SBOM generation.                             | [SBOM & VEX Workflows](../../implementation/build-phase/sbom-vex.md)<br/>[CI/CD Hardening](../../implementation/operate-phase/cicd-hardening.md)<br/>[Key Provisioning & Storage](../../implementation/build-phase/key-provisioning.md) |
| **Testing and evaluation (ATE\*)**                         | Plan and execute structured testing that covers functional security behaviour, robustness, negative testing, fuzzing, and regression; capture test cases and results as evaluation evidence.                                          | [Static & Dynamic Analysis](../../tools/static-and-dynamic-analysis.md)<br/>[Patch Cadence](../../implementation/operate-phase/patch-cadence.md)                                                                                        |
| **Vulnerability analysis and penetration testing (AVA\*)** | Run an ongoing vulnerability management process: intake, triage, remediation, and disclosure; perform internal and third‑party penetration testing commensurate with the targeted assurance level.                                    | [Vulnerability Disclosure](../../implementation/operate-phase/vulnerability-disclosure.md)<br/>[Secure OTA Updates](../../implementation/build-phase/ota-updates.md)                                                                    |

As your **assurance level (e.g., EAL2 vs EAL4+)** increases, evaluators expect **more depth and formality** in each of these areas, but the underlying engineering tasks remain recognisable as good modern secure‑development practice.

## 4. Assessment & Conformity

### 4.1 Understanding Evaluation Assurance Levels (EALs)

The "level" of a Common Criteria certificate is its **Evaluation Assurance Level (EAL)**, from 1 (lowest) to 7 (highest). The EAL does not measure the security of the product itself, but rather the **rigour and depth of the evaluation process**. A higher EAL means evaluators demanded more formal design documentation, more intrusive testing, and more robust evidence of correctness.

For connected devices, EALs 1 through 4 are the most relevant.

| Level | Summary                                         | Typical Use Case for Connected Devices                                                                                            |
| ----- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| EAL1  | **Functionally Tested**                         | Basic check against functional specs. Rarely used for security products but may be a starting point for legacy systems.           |
| EAL2  | **Structurally Tested**                         | Requires some design information and "white-box" testing. Suitable for low-risk devices where some assurance is needed.           |
| EAL3  | **Methodically Tested and Checked**             | Requires more thorough documentation and testing, including development environment controls. Good for moderate-risk devices.     |
| EAL4  | **Methodically Designed, Tested, and Reviewed** | The most common level for commercial high-security products. Requires a rigorous positive security model and penetration testing. |
| EAL5+ | **Semiformally or Formally Verified**           | EAL5 and above are extremely rigorous and expensive, typically reserved for critical infrastructure, military, and high-risk ICs. |

### 4.2 The Evaluation Process

Common Criteria evaluations are typically performed by **accredited third-party laboratories** under the rules of a national or regional **CC scheme**. At a high level, the steps are:

1.  **Define the Security Target (ST)** – The vendor describes the TOE, its environment, threats, assumptions, and chosen SFR/SAR set (often referencing a Protection Profile where one exists for the product class).
2.  **Implement and document** – Engineering teams build the product and produce the design, guidance, test, and lifecycle evidence required by the chosen assurance level.
3.  **Independent evaluation** – A CC lab analyses the ST, reviews design and process artefacts, repeats or re‑performs tests, and conducts vulnerability analysis and penetration testing according to **ISO/IEC 18045**.
4.  **Certification** – If the evaluation is successful, the scheme issues a certificate noting the TOE, its version, the applicable PPs, and the achieved **EAL** (or equivalent assurance claim).

For secure‑by‑design device teams, the most pragmatic way to use CC is often:

- Treat **CC functional and assurance themes as a structured checklist** during architecture and SDL design.
- Decide early whether you need **formal certification**; if not, you can still reuse CC requirements and artefact expectations to improve your engineering discipline and to support other laws (e.g., CRA, NIS 2, PSTI).

<!-- Citations -->

[cc_part1]: https://www.commoncriteriaportal.org/files/ccfiles/CCPART1V3.1R5.pdf "Common Criteria Part 1: Introduction and general model (v3.1 R5)"
[cc_part2]: https://www.commoncriteriaportal.org/files/ccfiles/CCPART2V3.1R5.pdf "Common Criteria Part 2: Security functional components (v3.1 R5)"
[cc_part3]: https://www.commoncriteriaportal.org/files/ccfiles/CCPART3V3.1R5.pdf "Common Criteria Part 3: Security assurance components (v3.1 R5)"
[cem_v31r5]: https://www.commoncriteriaportal.org/files/ccfiles/CEMV3.1R5.pdf "Common Methodology for IT Security Evaluation (CEM), v3.1 R5)"
[iso_15408_1]: https://www.iso.org/standard/72891.html "ISO/IEC 15408-1:2022 – Evaluation criteria for IT security — Part 1: Introduction and general model"
[iso_15408_2]: https://www.iso.org/standard/72892.html "ISO/IEC 15408-2:2022 – Evaluation criteria for IT security — Part 2: Security functional components"
[iso_15408_3]: https://www.iso.org/standard/72906.html "ISO/IEC 15408-3:2022 – Evaluation criteria for IT security — Part 3: Security assurance components"
[iso_18045]: https://www.iso.org/standard/72889.html "ISO/IEC 18045:2022 – Methodology for IT security evaluation"
[iso_15443_1]: https://www.iso.org/standard/59138.html "ISO/IEC TR 15443-1:2012 – Security assurance framework — Part 1: Introduction and concepts"
[iso_15446]: https://www.iso.org/standard/68904.html "ISO/IEC TR 15446:2017 – Guidance for the production of Protection Profiles and Security Targets"
