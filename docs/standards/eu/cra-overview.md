---
title: Cyber-Resilience Act (CRA)
sidebar_position: 1
tags: [cra, compliance, eu, secure-by-design]
---
# Cyber-Resilience Act (CRA)

## 1. Why the CRA matters now

The **Cyber-Resilience Act (CRA)**—Regulation (EU) **2024/2847**—is the EU's first horizontal law that *legally mandates Secure-by-Design* for every **"product with digital elements" (PDE)**.

:::info Official texts
- **Official Journal** – legally binding record as published on 20 Nov 2024: [OJ:L_202402847 HTML][cra_oj].
- **Consolidated Version** – integrates subsequent corrections: [CELEX:02024R2847-20241120 HTML][cra_consolidated].

The consolidated version is easier for clause citations, but in case of doubt the official journal prevails.
:::

:::info Implementation Guidance
While harmonised standards are still under development, Germany's Federal Office for Information Security (BSI) has published a detailed technical guideline that serves as a practical playbook for CRA compliance.

- **BSI TR-03183**: [Cyber Resilience Requirements for Manufacturers and Products][bsi_tr_03183]
:::

| CRA milestone                                        | Legal basis | Date |
| ---------------------------------------------------- | ----------- | ---- |
| Text adopted by Parliament & Council                 | Signing date | **2024-10-23** |
| Published in the *Official Journal* (OJ L 2024/2847) | [CRA Official Journal][cra_oj] | **2024-11-20** |
| Regulation entered into force (Art. 71 § 1 + 20 d)   | [CRA Art. 71 § 1][cra_art71] | **2024-12-10** |
| Notified-body framework applies to importers and distributors ([CRA Ch. IV][cra_chIV]) | [CRA Art. 71 § 2][cra_art71] | **2026-06-11** |
| Vulnerability & incident reporting applies to manufacturers ([CRA Art. 14][cra_art14]) | [CRA Art. 71 § 2][cra_art71] | **2026-09-11** |
| First set of harmonised standards published<br/>*See [The Role of Harmonised Standards](#harmonised-standards)* | [CRA Art. 27][cra_art27] | **Q2 2027 (est.)** |
| All CRA requirements apply (Annex I/II, CE-marking, enforcement) | [CRA Art. 71 § 2][cra_art71] | **2027-12-11** |

**Early duties from 11 Jun 2026**  
*Importers*, *distributors* & *authorised representatives* → must verify that a draft EU Declaration of Conformity and technical file exist, keep conformity documentation for **10 years**, and ensure storage/transport does not compromise firmware integrity ([CRA Ch. IV][cra_chIV]).  
*Market-surveillance authorities* → gain power to sample, test, and order withdrawals or recalls of insecure products ([CRA Arts 35–51][cra_chIV]).

**Early duties from 11 Sep 2026**  
*Manufacturers* → must operate a vulnerability-handling process:  
• Notify ENISA single portal within **24 h** of an actively-exploited vulnerability ([CRA Art. 14 §1][cra_art14] + [CRA Art. 16][cra_art16])  
• Publish a Coordinated Vulnerability Disclosure (CVD) policy ([CRA Annex I Part II § 5][cra_annexI])  
• Issue a mitigation report within **14 days** ([CRA Art. 14 § 6][cra_art14]).

**Grace-period end (11 Dec 2027)** – only Annex I/II-compliant PDEs may bear the CE mark; MSAs may recall or ban non-compliant goods; penalties up to **€ 15 million or 2.5 % of worldwide turnover** ([CRA Art 64 § 2][cra_art64]).

**Relationship to other EU laws**

| Law | How it interacts with CRA |
|-----|---------------------------|
| **[NIS 2 Directive](./nis2-overview.md)** | Governs *organisational* cyber-risk; CRA covers *product* security. Manufacturers that are NIS-2 "essential" entities must comply with both. ([CRA Recital 15][cra_rec15], [NIS 2 Art. 21 § 2][nis2_art21]) |
| **[Radio Equipment Directive (RED)](./red-overview.md)** | Radio device security requirements exist in Art 3 §3 d-f. CRA covers a wider range of products. ([CRA Recital 30][cra_rec30], [RED Directive][red_dir]) |
| **RED Delegated Act** | Makes those security clauses mandatory for certain Bluetooth / Wi-Fi devices by **1 Aug 2025**. Manufacturers must meet both this Act and the CRA. ([RED Delegated Act][red_del]) |
| **CE-marking framework** | CRA **adds** cybersecurity to the CE mark through Articles **28–30** (see Recital 89). A PDE may affix the mark only *after* Annex I/II compliance and completion of the appropriate conformity-assessment route. ([CRA Art 28][cra_art28], [CRA Art 29][cra_art29], [CRA Art 30][cra_art30], [CRA Rec 89][cra_rec89]) |

---

## 2 Scope – which products are in?

### 2.1 Statutory Definition & Interpretation {#statutory-definition}

#### Official Definition
A **product with digital elements (PDE)** is *"any software or hardware product, and its remote data-processing solution, that is directly or indirectly connected to another device or network"* ([CRA Art. 3 § 1][cra_art3]). 

A **remote data-processing solution**, which is also in scope, is the cloud or back-end essential to the PDE's core function and *"designed and developed by, or under the responsibility of, the manufacturer"* ([CRA Art. 3 § 2][cra_art3], see also [CRA Recital 11][cra_rec11]).

#### Interpretation
This broad definition effectively covers almost any modern electronic device or piece of software. It creates a two-part test:

1.  **Does it have "digital elements"?** This means does it contain a microprocessor, firmware, or software?
2.  **Can it connect to something else?** This means does it have a "direct or indirect logical or physical data connection" to another device or network?

Both conditions must be met.

- **Example 1: A "dumb" toaster with a digital timer but no connectivity.**
  - *Digital elements?* **Yes** (firmware for the timer).
  - *Connectable?* **No**.
  - **Result: Out of scope.**

- **Example 2: A "smart" toaster with a Bluetooth app.**
  - *Digital elements?* **Yes** (firmware, app, and the cloud service).
  - *Connectable?* **Yes** (Bluetooth).
  - **Result: In scope.** The manufacturer is responsible for the toaster, the app, and any back-end cloud service they provide that is essential for its function.

- **Example 3: A high-end toaster updated via USB stick.**
  - *Digital elements?* **Yes** (firmware for new toast profiles).
  - *Connectable?* **Yes**. (USB Stick)
  - **Result: In scope.** The USB port is a physical data connection. The overall update process creates an *indirect connection* to the network where the firmware originated.

### 2.2 Out-of-scope & special regimes

| Excluded or separate regime | Legal reason |
|-----------------------------|--------------|
| Medical devices | Already covered by **[MDR 2017/745](./mdr-overview.md)** ([CRA Art. 2 § 2(a)][cra_art2]) |
| Automotive ECUs | Covered by Vehicle Type-Approval rules 2019/2144 ([CRA Art. 2 § 4][cra_art2]) |
| Aviation & drones | EASA cyber rules override 2018/1139 ([CRA Art. 2 § 4(f)][cra_art2]) |
| Defence & national security items | Excluded ([CRA Art. 2 § 5][cra_art2]) |
| Non-commercial OSS distributed "as-is" | Exempt when no commercial support ([CRA Recital 15][cra_rec15], [CRA Recital 18][cra_rec18], [CRA Recital 19][cra_rec19]). *If commercial support is later offered, CRA duties apply.* |
| **Open-source software stewards** (foundations, maintainers) | Light-touch obligations ([CRA Recital 19][cra_rec19] + [CRA Art. 20 § 8][cra_art20]) |
| Commercial FOSS in Annex III classes | May use self-assessment (Module A) if technical documentation is made public ([CRA Art. 32 § 5][cra_art32]). |
| Pure SaaS (no local client) | Distinguished from a PDE's *remote data-processing solution*; general cloud services are covered by NIS 2 ([CRA Recital 12][cra_rec12]). |
| Legacy products placed on the market before 11 Dec 2027 | Exempt **unless** they undergo a *substantial modification* after that date ([CRA Art. 71 § 3][cra_art71]) |

---

## 3 CRA Requirements & How to Implement Them

The CRA's mandatory security obligations are detailed in **[CRA Annex I][cra_annexI]**. This annex is split into two parts:
- **Part I** defines the **product security requirements** that must be designed into the device from the start.
- **Part II** defines the **vulnerability handling requirements** the manufacturer must follow throughout the product's support lifecycle.

The following tables translate those legal requirements into a practical engineering checklist. To provide a more concrete technical interpretation, they also map each CRA clause to the corresponding requirement in Germany's influential **BSI TR-03183** technical guideline. Each row links to the relevant implementation guide in this handbook, providing a clear, actionable path from the legal text to the code and configuration required for compliance.

### 3.1 Risk Assessment & Threat Modeling

Before implementing specific security controls, the CRA requires manufacturers to perform a comprehensive cybersecurity risk assessment ([CRA Art. 13 § 2][cra_art13]). Threat modeling is the core practice for fulfilling this obligation. It is a structured process to identify, analyze, and mitigate potential threats and vulnerabilities early in the design phase.

This proactive approach ensures that security is not an afterthought but a foundational part of the product's architecture. The outcomes of this threat model directly inform the security measures required in the subsequent sections.

| Obligations | Engineering Tasks | Implementation Guides |
|---|---|---|
| **Cybersecurity risk assessment**<br/>[CRA Art. 13 § 2][cra_art13]<br/>[BSI TR-03183-1: REQ_RA 1][bsi_tr_03183_p1] | Perform and document a risk assessment covering the product's intended and reasonably foreseeable use. | [Threat Modeling](../../implementation/build-phase/threat-modeling.md) |

### 3.2 Product security (Annex I Part I)

| Obligations | Engineering Tasks | Implementation Guides |
|---------------|----------------------|-------------------|
| **No known vulnerabilities**<br/>[Annex I § 1 (2)(a)][cra_annexI]<br/>[BSI TR-03183-1: REQ_ER 2][bsi_tr_03183_p1] | Ship without known exploitable vulnerabilities; establish a process to identify vulnerabilities in all product components. | [CI/CD Hardening](../../implementation/operate-phase/cicd-hardening.md)<br/>[Static & Dynamic Analysis](../../tools/static-and-dynamic-analysis.md) |
| **Secure by default configuration**<br/>[Annex I § 1 (2)(b)][cra_annexI]<br/>[BSI TR-03183-1: REQ_ER 3][bsi_tr_03183_p1] | Provide a secure-by-default configuration that supports intended use and can be fully restored via a reset function. | [Secure Configuration & Hardening](../../implementation/build-phase/secure-configuration.md) |
| **Security updates by design**<br/>[Annex I § 1 (2)(c)][cra_annexI]<br/>[BSI TR-03183-1: REQ_ER 4][bsi_tr_03183_p1] | Provide timely, integrity-protected security updates via a secure and automated mechanism (with user opt-out). | [Secure OTA Updates](../../implementation/build-phase/ota-updates.md) |
| **Access control**<br/>[Annex I § 1 (2)(d)][cra_annexI]<br/>[BSI TR-03183-1: REQ_ER 5][bsi_tr_03183_p1] | Implement an access control model based on least privilege; prevent and log unauthorised access attempts. | [Unique Device Identity](../../implementation/build-phase/unique-device-identity.md) |
| **Confidentiality protection**<br/>[Annex I § 1 (2)(e)][cra_annexI]<br/>[BSI TR-03183-1: REQ_ER 6][bsi_tr_03183_p1] | Protect confidentiality of sensitive data at-rest and in-transit using state-of-the-art encryption. | [Key Provisioning & Storage](../../implementation/build-phase/key-provisioning.md) |
| **Integrity protection**<br/>[Annex I § 1 (2)(f)][cra_annexI]<br/>[BSI TR-03183-1: REQ_ER 7][bsi_tr_03183_p1] | Protect integrity of all code, data, and configuration using state-of-the-art mechanisms; detect and handle violations. | [Secure Boot](../../implementation/build-phase/secure-boot.md) |
| **Data minimisation**<br/>[Annex I § 1 (2)(g)][cra_annexI]<br/>[BSI TR-03183-1: REQ_ER 8][bsi_tr_03183_p1] | Limit data collection and processing to only what is necessary for the product's intended purpose. | [Data Privacy & Secure Deletion](../../implementation/build-phase/data-privacy.md) |
| **Resilience & availability**<br/>[Annex I § 1 (2)(h), (i)][cra_annexI]<br/>[BSI TR-03183-1: REQ_ER 9, 10][bsi_tr_03183_p1] | Protect essential functions against DoS attacks and prevent the product being used in attacks against other systems. | [Device Lifecycle Management](../../tools/device-lifecycle-management.md) |
| **Attack surface reduction**<br/>[Annex I § 1 (2)(j)][cra_annexI]<br/>[BSI TR-03183-1: REQ_ER 11][bsi_tr_03183_p1] | Minimise attack surfaces by securing all interfaces and disabling unused physical ports and network services. | [Secure Configuration & Hardening](../../implementation/build-phase/secure-configuration.md) |
| **Exploit mitigation**<br/>[Annex I § 1 (2)(k)][cra_annexI]<br/>[BSI TR-03183-1: REQ_ER 12][bsi_tr_03183_p1] | Use and enable modern exploit mitigation techniques (e.g., ASLR, stack protection, CET). | [Secure Configuration & Hardening](../../implementation/build-phase/secure-configuration.md) |
| **Security logging**<br/>[Annex I § 1 (2)(l)][cra_annexI]<br/>[BSI TR-03183-1: REQ_ER 13][bsi_tr_03183_p1] | Log all security-relevant events by default, including access attempts and setting changes, with a user opt-out. | [Security Logging & Monitoring](../../implementation/operate-phase/security-logging.md) |
| **Secure data deletion**<br/>[Annex I § 1 (2)(m)][cra_annexI]<br/>[BSI TR-03183-1: REQ_ER 14][bsi_tr_03183_p1] | Provide a function for users to securely and completely delete all personal and configuration data. | [Data Privacy & Secure Deletion](../../implementation/build-phase/data-privacy.md) |

### 3.3 Vulnerability handling (Annex I Part II)

| Obligations | Engineering Tasks | Implementation Guides |
|---------------|----------------------|-------------------|
| **Identify components (SBOM)**<br/>[Annex I Part II § 1][cra_annexI]<br/>[BSI TR-03183-1: REQ_VH 1][bsi_tr_03183_p1]<br/>[BSI TR-03183-2 § 5.2][bsi_tr_03183_p2] | Create and maintain an up-to-date, machine-readable Software Bill of Materials (SBOM) for all software components. | [SBOM & VEX Workflows](../../implementation/build-phase/sbom-vex.md) |
| **Handle & remediate vulnerabilities**<br/>[Annex I Part II § 2, 7, 8][cra_annexI]<br/>[BSI TR-03183-1: REQ_ER 4, REQ_VH 6][bsi_tr_03183_p1] | Address and remediate vulnerabilities without undue delay, providing timely security updates via a secure mechanism. | [Secure OTA Updates](../../implementation/build-phase/ota-updates.md)<br/>[Patch Cadence](../../implementation/operate-phase/patch-cadence.md) |
| **Regular security testing**<br/>[Annex I Part II § 3][cra_annexI]<br/>[BSI TR-03183-1: REQ_VH 3][bsi_tr_03183_p1] | Regularly test the product for vulnerabilities using both internal processes and independent experts. | [Static & Dynamic Analysis](../../tools/static-and-dynamic-analysis.md) |
| **Public vulnerability information**<br/>[Annex I Part II § 4, 5][cra_annexI]<br/>[BSI TR-03183-1: REQ_VH 5][bsi_tr_03183_p1]<br/>[BSI TR-03183-3 § 4.3][bsi_tr_03183_p3] | Inform users about fixed vulnerabilities, their impact, and mitigation steps via security advisories. | [Vulnerability Disclosure](../../implementation/operate-phase/vulnerability-disclosure.md) |
| **Coordinated Vulnerability Disclosure**<br/>[Annex I Part II § 6][cra_annexI]<br/>[BSI TR-03183-1: REQ_VH 2][bsi_tr_03183_p1] | Publish a clear vulnerability disclosure policy and provide an easily accessible contact channel for vulnerability reporting. | [Vulnerability Disclosure](../../implementation/operate-phase/vulnerability-disclosure.md) |

### 3.4 Other Key Obligations

Beyond the direct product and vulnerability requirements in Annex I, the CRA imposes several other crucial obligations on manufacturers regarding documentation, conformity, and reporting.

| Obligations | Engineering Tasks | Implementation Guides |
|---|---|---|
| **Technical documentation**<br/>[CRA Art. 31][cra_art31] | Create & maintain technical file with risk assessment, SBOM, design specs, and evidence of Annex I compliance. Keep for **10 years**. **Evidence:** Technical file. | n/a |
| **Conformity & CE mark**<br/>[CRA Art. 28][cra_art28]–[30][cra_art30] | Perform conformity assessment (self-assessment or third-party audit); draw up EU Declaration of Conformity (DoC); affix CE mark. **Evidence:** DoC, Notified Body certificate (if applicable). | n/a |
| **Information to users**<br/>[CRA Art. 13 § 18][cra_art13]<br/>[CRA Annex II][cra_annexII] | Provide clear instructions on intended use, secure configuration, support period end-date, and how to report vulnerabilities. **Evidence:** User manual/documentation. | [User Documentation Guide](../../implementation/build-phase/user-documentation.md) |
| **ENISA reporting**<br/>[CRA Art. 14][cra_art14] | Notify ENISA within **24h** of an actively exploited vulnerability. Submit a mitigation report within **14 days**. **Evidence:** Incident logs. | n/a |

\* *Dates derive from [CRA Art. 71 § 2][cra_art71]: most obligations apply 36 months after entry into force (2024-12-10). Reporting duties under Art. 14 begin earlier, at 21 months.*

---

## 4 Self-Assessment vs. Third-Party Audit? {#conformity-assessment-routes}

### 4.1 Product Risk Classification (The Four Tiers) {#product-risk-classes}

The CRA establishes a four-tier risk classification system. A product's classification determines the conformity assessment procedure it must undergo before receiving a CE mark. The classification depends on whether the product is listed in [CRA Annex III][cra_annexIII] or [CRA Annex IV][cra_annexIV] of the regulation.

- **Default Category (Unclassified):** This is the baseline tier for the vast majority (~90%) of products with digital elements. It covers any product **not listed** in Annex III or Annex IV.
    - **Assessment:** Manufacturers can typically perform a self-assessment (**Module A**).
    - *Example:* A smart toaster, connected toy, or a general-purpose software library.

- **Important Products — Class I:** This tier covers products listed in **[CRA Annex III, Part I][cra_annexIII]**. These products perform functions critical to cybersecurity or pose a significant risk of disruption ([CRA Art. 7 § 2][cra_art7]).
    - **Assessment:** Self-assessment (**Module A**) is possible *if* the manufacturer fully applies relevant harmonised standards. Otherwise, a third-party audit is required ([CRA Art. 32 § 2][cra_art32]).
    - *Examples (from Annex III, Part I):* Identity management systems, password managers, web browsers, smart home products with security functions (e.g., smart locks).

- **Important Products — Class II:** This tier covers a smaller list of higher-risk products defined in **[CRA Annex III.II][cra_annexIII]**.
    - **Assessment:** A third-party audit by a Notified Body is **mandatory** ([CRA Art. 32 § 3][cra_art32]).
    - *Examples (from Annex III, Part II):* Hypervisors, firewalls, industrial intrusion detection systems, tamper-resistant microprocessors.

- **Critical Products:** The highest risk tier, for products listed in **[CRA Annex IV][cra_annexIV]**. These are products upon which the EU's critical infrastructure (as defined in NIS 2) may depend, or whose failure could disrupt critical supply chains ([CRA Art. 8 § 2][cra_art8]).
    - **Assessment:** The Commission may require a mandatory **European cybersecurity certificate** at assurance level 'substantial' or higher. If no such scheme is mandated, these products follow the same rules as Class II ([CRA Art. 32 § 4][cra_art32]).
    - *Examples (from Annex IV):* Hardware Security Modules (HSMs), smart meter gateways, smartcards.

The table below provides a non-exhaustive list of examples mapping product categories to the four risk tiers:

| Product & Category | Default | Important<br/>(Class I) | Important<br/>(Class II) | Critical |
| :--- | :---: | :---: | :---: | :---: |
| **Consumer** |
| Smart speaker (no virtual assistant) | ✅ | | | |
| Smart TV | ✅ | | | |
| Smart thermostat | ✅ | | | |
| Smart refrigerator | ✅ | | | |
| Smart doorbell (with no lock) | ✅ | | | |
| Smart Lighting Controller/Hub | ✅ | | | |
| Smartphone | ✅ | | | |
| Smart speaker with virtual assistant ([CRA Annex III.I.16][cra_annexIII]) | | ✅ | | |
| Smart lock ([CRA Annex III.I.17][cra_annexIII]) | | ✅ | | |
| Home alarm system ([CRA Annex III.I.17][cra_annexIII]) | | ✅ | | |
| Baby monitor ([CRA Annex III.I.17][cra_annexIII]) | | ✅ | | |
| Fitness band ([CRA Annex III.I.19][cra_annexIII]) | | ✅ | | |
| Connected toy ([CRA Annex III.I.19][cra_annexIII]) | | ✅ | | |
| **General IT** |
| Printer | ✅ | | | |
| Office Suite | ✅ | | | |
| Laptop | ✅ | | | |
| Network-Attached Storage (NAS) device | ✅ | | | |
| Digital Signage Display | ✅ | | | |
| Web browser ([CRA Annex III.I.2][cra_annexIII]) | | ✅ | | |
| Password manager ([CRA Annex III.I.3][cra_annexIII]) | | ✅ | | |
| SIEM ([CRA Annex III.I.7][cra_annexIII]) | | ✅ | | |
| Operating System ([CRA Annex III.I.12][cra_annexIII]) | | ✅ | | |
| Router / Modem ([CRA Annex III.I.13][cra_annexIII]) | | ✅ | | |
| Hypervisor / Container runtime ([CRA Annex III.II.1][cra_annexIII]) | | | ✅ | |
| Firewall ([CRA Annex III.II.3][cra_annexIII]) | | | ✅ | |
| Intrusion Detection System ([CRA Annex III.II.2][cra_annexIII]) | | | ✅ | |
| **Specialised H/W** |
| Basic Barcode Scanner / RFID Reader | ✅ | | | |
| Microprocessor w/ security features ([CRA Annex III.I.14][cra_annexIII]) | | ✅ | | |
| Tamper-resistant microprocessor ([CRA Annex III.II.4][cra_annexIII]) | | | ✅ | |
| Tamper-resistant microcontroller ([CRA Annex III.II.5][cra_annexIII]) | | | ✅ | |
| HSM ([CRA Annex IV.1][cra_annexIV]) | | | | ✅ |
| Smartcard / Secure Element ([CRA Annex IV.3][cra_annexIV]) | | | | ✅ |
| **Industrial (OT)** |
| Non-critical IoT sensor | ✅ | | | |
| Industrial IoT Temperature Sensor | ✅ | | | |
| Industrial VPN gateway ([CRA Annex III.I.5][cra_annexIII]) | | ✅ | | |
| Industrial firewall ([CRA Annex III.II.3][cra_annexIII]) | | | ✅ | |
| Industrial IDS ([CRA Annex III.II.2][cra_annexIII]) | | | ✅ | |
| Smart meter gateway ([CRA Annex IV.2][cra_annexIV]) | | | | ✅ |
| **Component** |
| General-purpose library ([CRA Art. 3 § 1][cra_art3]) | ✅ | | | |

### 4.2 Assessment Routes for Each Tier
Once a manufacturer has determined their product's risk class using the tiers above, the next step is to identify the specific conformity assessment procedure required to earn the CE mark. The CRA lays out several distinct 'modules' or routes, and the path you must take is dictated directly by your product's classification.

| Class | Conditions | Assessment Route |
|---|---|---|
| **Default** | All unclassified products. | **Module A** (Internal Control) → Manufacturer performs self-assessment ([CRA Art. 32 § 1][cra_art32]). |
| **Important (Class I)** | Manufacturer fully applies harmonised standards or a relevant certification scheme. | **Module A** (Internal Control) → Manufacturer performs self-assessment. |
| | Manufacturer does **not** fully apply harmonised standards or a scheme. | **Modules B+C** or **Module H** → Mandatory third-party audit by a Notified Body ([CRA Art. 32 § 2][cra_art32]). |
| **Important (Class II)** | All Class II products. | **Modules B+C** or **Module H** → Mandatory third-party audit by a Notified Body ([CRA Art. 32 § 3][cra_art32]). |
| **Critical (Annex IV)** | Commission mandates a specific European Cybersecurity Certification Scheme. | Mandatory certification under the specified scheme. |
| | No scheme is mandated by the Commission. | **Modules B+C** or **Module H** → Mandatory third-party audit by a Notified Body (same as Class II) ([CRA Art. 32 § 4][cra_art32]). |

> **Key takeaway:** For Class I products, following harmonised standards is the express lane to self-assessment. For all higher classes, some form of third-party assessment is either likely or mandatory.

### 4.3 The Role of Harmonised Standards {#harmonised-standards}

A **harmonised standard (hEN)** is a standard created by a European Standardisation Organisation (e.g., ETSI) following a formal request from the European Commission. When a product complies with a relevant hEN, it gains a **"presumption of conformity"** with the CRA's essential requirements ([CRA Art. 27][cra_art27]).

This provides two key benefits for manufacturers:

1.  **Simplified Assessment:** For **Important (Class I)** products, it allows the manufacturer to perform a self-assessment (**Module A**) instead of requiring a third-party audit.
2.  **Simpler Documentation:** The manufacturer can cite the harmonised standard in their EU Declaration of Conformity, rather than documenting compliance with every requirement in Annex I individually.

:::tip Harmonised Standards Timeline
The first harmonised standards for the CRA are expected to be published in the Official Journal around **Q2 2027**. This follows a standardisation request ([Mandate M/606][mandate_m606]) and an 18-24 month drafting period.
:::

*In the absence of a suitable harmonised standard, the Commission may issue a **common specification** to provide the same presumption of conformity ([CRA Art. 27][cra_art27]).*

<!-- Citations -->
[cra_oj]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202402847 "CRA Official Journal – OJ"
[cra_consolidated]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02024R2847-20241120 "CRA consolidated text"
[cra_chIV]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#cpt_IV "CRA Chapter IV – Notification of Conformity Assessment Bodies"
[cra_chV]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#cpt_V "CRA Chapter V – Market surveillance and enforcement"
[cra_art2]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_2 "CRA Article 2 – Scope"
[cra_art3]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_3 "CRA Article 3 – Definitions"
[cra_art7]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_7 "CRA Article 7 – Important products with digital elements"
[cra_art8]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_8 "CRA Article 8 – Critical products with digital elements"
[cra_art11]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02024R2847-20241120#art_11 "CRA Article 11 – More specific Union law"
[cra_art13]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_13 "CRA Article 13 – Obligations of manufacturers"
[cra_art14]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_14 "CRA Article 14 – Reporting obligations of manufacturers"
[cra_art16]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_16 "CRA Article 16 – Establishment of a single reporting platform"
[cra_art18]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_18 "CRA Article 18 – Authorised representatives"
[cra_art19]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_19 "CRA Article 19 – Obligations of importers"
[cra_art20]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_20 "CRA Article 20 – Obligations of distributors"
[cra_art27]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02024R2847-20241120#art_27 "CRA Article 27 - Presumption of conformity"
[cra_art28]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_28 "CRA Article 28 – EU declaration of conformity"
[cra_art29]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_29 "CRA Article 29 – General principles of the CE marking"
[cra_art30]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_30 "CRA Article 30 – Rules and conditions for affixing the CE marking"
[cra_art31]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_31 "CRA Article 31 – Technical documentation"
[cra_art32]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_32 "CRA Article 32 – Conformity assessment procedures for products with digital elements"
[cra_art43]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_43 "CRA Article 43 – Notification procedure"
[cra_art64]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_64 "CRA Article 64 – Penalties"
[cra_art71]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_71 "CRA Article 71 – Entry into force and application"
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements"
[cra_annexII]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_II "CRA Annex II – Information and instructions to the user"
[cra_annexIII]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_III "CRA Annex III – Important products with digital elements"
[cra_annexIV]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_IV "CRA Annex IV – Critical products with digital elements"
[cra_rec9]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202402847#rct_9 "CRA Recital 9 – All connected products as potential attack vectors"
[cra_rec11]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202402847#rct_11 "CRA Recital 11 – Remote data processing"
[cra_rec12]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202402847#rct_12 "CRA Recital 12 – Cloud services vs remote data processing"
[cra_rec15]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202402847#rct_15 "CRA Recital 15 – Definition of commercial activity"
[cra_rec18]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202402847#rct_18 "CRA Recital 18 – Non-commercial free and open-source software"
[cra_rec19]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202402847#rct_19 "CRA Recital 19 – Open-source software stewards"
[cra_rec30]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202402847#rct_30 "CRA Recital 30 – Relationship with Radio Equipment Directive (RED)"
[cra_rec89]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202402847#rct_89 "CRA Recital 89 – General principles of the CE marking"
[nis2_art21]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022L2555#art_21 "Cybersecurity risk-management measures"
[red_dir]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32014L0053 "Directive 2014/53/EU (Radio Equipment Directive) – full text"
[red_del]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R0030 "Delegated Regulation (EU) 2022/30 – security clauses for radio equipment"
[bsi_tr_03183]: https://www.bsi.bund.de/EN/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/Technische-Richtlinien/TR-nach-Thema-sortiert/tr03183/TR-03183_node.html "BSI Technical Guideline TR-03183"
[bsi_tr_03183_p1]: https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI-TR-03183-1-0_9_0.pdf "BSI TR-03183 Part 1: General requirements"
[bsi_tr_03183_p2]: https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI-TR-03183-2-2_0_0.pdf "BSI TR-03183 Part 2: Software Bill of Materials (SBOM)"
[bsi_tr_03183_p3]: https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI-TR-03183-3-0_9_0.pdf "BSI TR-03183 Part 3: Vulnerability Reports and Notifications"
[mandate_m606]: https://ec.europa.eu/growth/tools-databases/enorm/mandate/606_en "Standardisation request M/606"

