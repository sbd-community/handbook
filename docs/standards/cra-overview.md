---
title: Cyber-Resilience Act (CRA)
sidebar_position: 1
tags: [cra, compliance, eu, secure-by-design]
---
# Cyber-Resilience Act (CRA)

## 1. Why the CRA matters now

The **Cyber-Resilience Act (CRA)**—Regulation (EU) **2024/2847**—is the EU's first horizontal law that *legally mandates secure-by-design* for every **"product with digital elements" (PDE)**.

:::info Official texts
- **Official Journal** – legally binding record as published on 20 Nov 2024: [OJ:L_202402847 HTML][cra_oj].
- **Consolidated Version** – integrates subsequent corrections: [CELEX:02024R2847-20241120 HTML][cra_consolidated].

The consolidated version is easier for clause citations, but in case of doubt the official journal prevails.
:::

| CRA milestone                                        | Legal basis | Date |
| ---------------------------------------------------- | ----------- | ---- |
| Text adopted by Parliament & Council                 | Signing date | **2024-10-23** |
| Published in the *Official Journal* (OJ L 2024/2847) | [CRA Official Journal][cra_oj] | **2024-11-20** |
| Regulation entered into force (Art. 71 § 1 + 20 d)   | [CRA Art. 71 § 1][cra_art71] | **2024-12-10** |
| Notified-body framework applies to importers and distributors ([CRA Ch. IV][cra_chIV]) | [CRA Art. 71 § 2][cra_art71] | **2026-06-11** |
| Vulnerability & incident reporting applies to manufacturers ([CRA Art. 14][cra_art14]) | [CRA Art. 71 § 2][cra_art71] | **2026-09-11** |
| All CRA requirements apply (Annex I/II, CE-marking, enforcement) | [CRA Art. 71 § 2][cra_art71] | **2027-12-11** |

**Early duties from 11 Jun 2026**  
*Importers*, *distributors* & *authorised representatives* → must verify that a draft EU Declaration of Conformity and technical file exist, keep conformity documentation for **10 years**, and ensure storage/transport does not compromise firmware integrity ([CRA Ch. IV][cra_chIV]).  
*Market-surveillance authorities* → gain power to sample, test, and order withdrawals or recalls of insecure products ([Arts 35–51][cra_chIV]).

**Early duties from 11 Sep 2026**  
*Manufacturers* → must operate a vulnerability-handling process:  
• Notify ENISA single portal within **24 h** of an actively-exploited vulnerability ([CRA Art. 14 §1][cra_art14] + [CRA Art. 16][cra_art16])  
• Publish a Coordinated Vulnerability Disclosure (CVD) policy ([CRA Annex I Part II § 5][cra_annexI])  
• Issue a mitigation report within **14 days** ([CRA Art. 14 § 6][cra_art14]).

**Grace-period end (11 Dec 2027)** – only Annex I/II-compliant PDEs may bear the CE mark; MSAs may recall or ban non-compliant goods; penalties up to **€ 15 million or 2.5 % of worldwide turnover** ([CRA Art 64 § 2][cra_art64]).

**Relationship to other EU laws**

| Law | How it interacts with CRA |
|-----|---------------------------|
| **NIS 2 Directive** (EU 2022/2555) | Governs *organisational* cyber-risk; CRA covers *product* security. Manufacturers that are NIS-2 "essential" entities must comply with both. ([CRA Recital 15][cra_rec15], [NIS 2 Art. 21 § 2][nis2_art21]) |
| **Radio Equipment Directive** (2014/53/EU) | Radio device security requirements exist in Art 3 §3 d-f. CRA covers a wider range of products. ([CRA Recital 30][cra_rec30], [RED Directive][red_dir]) |
| **RED Delegated Act** (EU 2022/30) | Makes those security clauses mandatory for certain Bluetooth / Wi-Fi devices by **1 Aug 2025**. Manufacturers must meet both this Act and the CRA. ([RED Delegated Act][red_del]) |
| **CE-marking framework** (Reg 765/2008) | CRA **adds** cybersecurity to the CE mark through Articles **28–30** (see Recital 89). A PDE may affix the mark only *after* Annex I/II compliance and completion of the appropriate conformity-assessment route. ([CRA Art 28][cra_art28], [CRA Art 29][cra_art29], [CRA Art 30][cra_art30], [CRA Rec 89][cra_rec89]) |

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

### 2.2 Product Risk Classification (The Four Tiers) {#product-risk-classes}

The CRA establishes a four-tier risk classification system. A product's classification determines the conformity assessment procedure it must undergo before receiving a CE mark. The classification depends on whether the product is listed in [Annex III][cra_annexIII] or [Annex IV][cra_annexIV] of the regulation.

- **Default Category (Unclassified):** This is the baseline tier for the vast majority (~90%) of products with digital elements. It covers any product **not listed** in Annex III or Annex IV.
    - **Assessment:** Manufacturers can typically perform a self-assessment (**Module A**).
    - *Example:* A smart toaster, connected toy, or a general-purpose software library.

- **Important Products — Class I:** This tier covers products listed in **[Annex III, Part I][cra_annexIII]**. These products perform functions critical to cybersecurity or pose a significant risk of disruption ([CRA Art. 7 § 2][cra_art7]).
    - **Assessment:** Self-assessment (**Module A**) is possible *if* the manufacturer fully applies relevant harmonised standards. Otherwise, a third-party audit is required ([CRA Art. 32 § 2][cra_art32]).
    - *Examples (from Annex III, Part I):* Identity management systems, password managers, web browsers, smart home products with security functions (e.g., smart locks).

- **Important Products — Class II:** This tier covers a smaller list of higher-risk products defined in **[Annex III, Part II][cra_annexIII]**.
    - **Assessment:** A third-party audit by a Notified Body is **mandatory** ([CRA Art. 32 § 3][cra_art32]).
    - *Examples (from Annex III, Part II):* Hypervisors, firewalls, industrial intrusion detection systems, tamper-resistant microprocessors.

- **Critical Products:** The highest risk tier, for products listed in **[Annex IV][cra_annexIV]**. These are products upon which the EU's critical infrastructure (as defined in NIS 2) may depend, or whose failure could disrupt critical supply chains ([CRA Art. 8 § 2][cra_art8]).
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
| Smart speaker with virtual assistant ([Annex III.I.16][cra_annexIII]) | | ✅ | | |
| Smart lock ([Annex III.I.17][cra_annexIII]) | | ✅ | | |
| Home alarm system ([Annex III.I.17][cra_annexIII]) | | ✅ | | |
| Baby monitor ([Annex III.I.17][cra_annexIII]) | | ✅ | | |
| Fitness band ([Annex III.I.19][cra_annexIII]) | | ✅ | | |
| Connected toy ([Annex III.I.19][cra_annexIII]) | | ✅ | | |
| **General IT** |
| Printer | ✅ | | | |
| Office Suite | ✅ | | | |
| Laptop | ✅ | | | |
| Network-Attached Storage (NAS) device | ✅ | | | |
| Digital Signage Display | ✅ | | | |
| Web browser ([Annex III.I.2][cra_annexIII]) | | ✅ | | |
| Password manager ([Annex III.I.3][cra_annexIII]) | | ✅ | | |
| SIEM ([Annex III.I.7][cra_annexIII]) | | ✅ | | |
| Operating System ([Annex III.I.12][cra_annexIII]) | | ✅ | | |
| Router / Modem ([Annex III.I.13][cra_annexIII]) | | ✅ | | |
| Hypervisor / Container runtime ([Annex III.II.1][cra_annexIII]) | | | ✅ | |
| Firewall ([Annex III.II.3][cra_annexIII]) | | | ✅ | |
| Intrusion Detection System ([Annex III.II.2][cra_annexIII]) | | | ✅ | |
| **Specialised H/W** |
| Basic Barcode Scanner / RFID Reader | ✅ | | | |
| Microprocessor w/ security features ([Annex III.I.14][cra_annexIII]) | | ✅ | | |
| Tamper-resistant microprocessor ([Annex III.II.4][cra_annexIII]) | | | ✅ | |
| Tamper-resistant microcontroller ([Annex III.II.5][cra_annexIII]) | | | ✅ | |
| HSM ([Annex IV.1][cra_annexIV]) | | | | ✅ |
| Smartcard / Secure Element ([Annex IV.3][cra_annexIV]) | | | | ✅ |
| **Industrial (OT)** |
| Non-critical IoT sensor | ✅ | | | |
| Industrial IoT Temperature Sensor | ✅ | | | |
| Industrial VPN gateway ([Annex III.I.5][cra_annexIII]) | | ✅ | | |
| Industrial firewall ([Annex III.II.3][cra_annexIII]) | | | ✅ | |
| Industrial IDS ([Annex III.II.2][cra_annexIII]) | | | ✅ | |
| Smart meter gateway ([Annex IV.2][cra_annexIV]) | | | | ✅ |
| **Component** |
| General-purpose library ([Art. 3 § 1][cra_art3]) | ✅ | | | |

### 2.3 Out-of-scope & special regimes

| Excluded or separate regime | Legal reason |
|-----------------------------|--------------|
| Medical devices | Already covered by **MDR** 2017/745 ([CRA Art. 2 § 2(a)][cra_art2]) |
| Automotive ECUs | Covered by Vehicle Type-Approval rules 2019/2144 ([CRA Art. 2 § 4][cra_art2]) |
| Aviation & drones | EASA cyber rules override 2018/1139 ([CRA Art. 2 § 4(f)][cra_art2]) |
| Defence & national security items | Excluded ([CRA Art. 2 § 5][cra_art2]) |
| Non-commercial OSS distributed "as-is" | Exempt when no commercial support ([CRA Recital 15][cra_rec15], [CRA Recital 18][cra_rec18], [CRA Recital 19][cra_rec19]). *If commercial support is later offered, CRA duties apply.* |
| **Open-source software stewards** (foundations, maintainers) | Light-touch obligations ([CRA Recital 19][cra_rec19] + [CRA Art. 20 § 8][cra_art20]) |
| Commercial FOSS in Annex III classes | May use self-assessment (Module A) if technical documentation is made public ([CRA Art. 32 § 5][cra_art32]). |
| Pure SaaS (no local client) | Distinguished from a PDE's *remote data-processing solution*; general cloud services are covered by NIS 2 ([CRA Recital 12][cra_rec12]). |
| Legacy products placed on the market before 11 Dec 2027 | Exempt **unless** they undergo a *substantial modification* after that date ([CRA Art. 71 § 3][cra_art71]) |

---

## 3 Conformity Assessment Routes {#conformity-assessment-routes}

The specific conformity assessment procedure required by the CRA depends directly on the product's risk class. **Article 32** lays out the possible routes:

| Class | Conditions | Assessment Procedure |
|---|---|---|
| **Default** | All unclassified products. | **Module A** (Internal Control) → Manufacturer performs self-assessment ([CRA Art. 32 § 1][cra_art32]). |
| **Important (Class I)** | Manufacturer fully applies harmonised standards or a relevant certification scheme. | **Module A** (Internal Control) → Manufacturer performs self-assessment. |
| | Manufacturer does **not** fully apply harmonised standards or a scheme. | **Modules B+C** or **Module H** → Mandatory third-party audit by a Notified Body ([CRA Art. 32 § 2][cra_art32]). |
| **Important (Class II)** | All Class II products. | **Modules B+C** or **Module H** → Mandatory third-party audit by a Notified Body ([CRA Art. 32 § 3][cra_art32]). |
| **Critical (Annex IV)** | Commission mandates a specific European Cybersecurity Certification Scheme. | Mandatory certification under the specified scheme. |
| | No scheme is mandated by the Commission. | **Modules B+C** or **Module H** → Mandatory third-party audit by a Notified Body (same as Class II) ([CRA Art. 32 § 4][cra_art32]). |

> **Key takeaway:** For Class I products, following harmonised standards is the express lane to self-assessment. For all higher classes, some form of third-party assessment is either likely or mandatory.

---

## 4 Core manufacturer obligations {#core-manufacturer-obligations}

| Obligation area | CRA trigger | Starts* | Key actions & evidence |
|---|---|---|---|
| **Secure-by-design** | [CRA Art. 13 § 1][cra_art13] + [Annex I][cra_annexI] | 2027-12-11 | Implement essential security requirements from Annex I. See Section 5 for a detailed engineering breakdown. **Evidence:** Risk assessment, test reports. |
| **Vulnerability handling** | [CRA Art. 13 § 8][cra_art13] + [Annex I][cra_annexI] | 2027-12-11 | Establish CVD policy; track & fix vulns "without delay"; provide security updates for the support period (min. 5 years). **Evidence:** Published CVD policy, patch records. |
| **Technical documentation** | [CRA Art. 31][cra_art31] | 2027-12-11 | Create & maintain technical file with risk assessment, SBOM, design specs, and evidence of Annex I compliance. Keep for **10 years**. **Evidence:** Technical file. |
| **Conformity & CE mark** | [CRA Art. 28][cra_art28]–[30][cra_art30] | 2027-12-11 | Perform conformity assessment (self-assessment or third-party audit); draw up EU Declaration of Conformity (DoC); affix CE mark. **Evidence:** DoC, Notified Body certificate (if applicable). |
| **Information to users**| [CRA Art. 13 § 18][cra_art13] + [Annex II][cra_annexII] | 2027-12-11 | Provide clear instructions on intended use, secure configuration, support period end-date, and how to report vulnerabilities. **Evidence:** User manual/documentation. |
| **ENISA reporting** | [CRA Art. 14][cra_art14] | **2026-09-11** | Notify ENISA within **24h** of an actively exploited vulnerability. Submit a mitigation report within **14 days**. **Evidence:** Incident logs. |

\* *Dates derive from [CRA Art. 71 § 2][cra_art71]: most obligations apply 36 months after entry into force (2024-12-10). Reporting duties under Art. 14 begin earlier, at 21 months.*

---

## 5 Secure-by-Design Engineering Benchmarks (Annex I Deep-Dive) {#annex-i-benchmarks}

This section provides a technical deep-dive into the essential secure-by-design requirements mandated by **[Annex I.I][cra_annexI]**. These are the core engineering tasks required to build a compliant product.

### 5.1 No Known Exploitable Vulnerabilities
*Legal hook: [Annex I.I.2(a)][cra_annexI]*

> The product must be "made available on the market without any known exploitable vulnerabilities."

- **Action:** Integrate automated security scanning into your CI/CD pipeline.
- **Tools:** Use static analysis (SAST) tools like `Semgrep` or `CodeQL` to find flaws in your source code, and software composition analysis (SCA) tools like `Trivy`, `Grype`, or `Dependency-Check` to find CVEs in your third-party libraries.
- **Benchmark:** The build must fail if a vulnerability with a CVSS score of 7.0 or higher is detected and a patch is available. Maintain a Software Bill of Materials (SBOM) for all components.

### 5.2 Secure Configuration by Default
*Legal hook: [Annex I.I.2(c)][cra_annexI]*

> The product must be "configured to be secure by default, allowing users to enable, disable or configure functions only where this does not create significant weaknesses."

- **Action:** Ship the product with a hardened configuration.
- **Benchmark:**
    - All non-essential ports and services must be disabled.
    - Strong, randomly generated passwords must be required on first use (no default credentials like `admin`/`admin`).
    - The most secure available protocols (e.g., TLS 1.3, SSHv2) must be enabled by default.
    - Provide a secure factory-reset mechanism that wipes all user data.

### 5.3 Confidentiality & Integrity Protection
*Legal hook: [Annex I.I.2(e) & (f)][cra_annexI]*

> The product must "protect the confidentiality of stored, transmitted or otherwise processed data...by encrypting relevant data at rest or in transit" and "protect the integrity of...commands, programs and configuration against any manipulation or modification not authorised by the user."

- **Action:** Implement end-to-end cryptographic protections.
- **Benchmark:**
    - **Data-in-transit:** All external network communication must be encrypted using standard, state-of-the-art protocols (e.g., TLS).
    - **Data-at-rest:** Sensitive user data and configuration secrets stored on the device must be encrypted.
    - **Code & config integrity:** Use a secure boot chain where each stage (bootloader, kernel, rootfs) is cryptographically signed and verified. Firmware updates must be signed, and the signature must be verified before installation.

### 5.4 Access Control
*Legal hook: [Annex I.I.2(d)][cra_annexI]*

> The product must "protect against unauthorised access by controlling access...through appropriate control mechanisms, including authentication, identity and access management systems."

- **Action:** Enforce the principle of least privilege.
- **Benchmark:**
    - Implement role-based access control (RBAC) to separate user and administrator privileges.
    - System processes should run with the minimum permissions necessary.
    - Protect against brute-force attacks with mechanisms like account lockout or rate limiting.

### 5.5 Attack Surface Reduction
*Legal hook: [Annex I.I.2(j)][cra_annexI]*

> The product must be "designed, developed and produced to limit attack surfaces, including external interfaces."

- **Action:** Minimize the number of exposed entry points.
- **Benchmark:**
    - Disable all physical debug interfaces (e.g., JTAG, UART) on production builds.
    - Minimize open network ports to only what is essential for the product's function.
    - Validate and sanitize all inputs from external sources to prevent injection attacks (e.g., SQLi, command injection).

### 5.6 Resilience & Mitigation
*Legal hook: [Annex I.I.2(h) & (k)][cra_annexI]*

> The product must "protect the availability of essential and basic functions...including through resilience and mitigation measures against denial-of-service attacks" and "reduce the impact of an incident using appropriate exploitation mitigation mechanisms and techniques."

- **Action:** Build in modern memory protections and DoS resistance.
- **Benchmark:**
    - Compile code with exploit mitigations like Address Space Layout Randomization (ASLR), Stack Canaries, and No-eXecute (NX) bit protection.
    - Implement rate limiting on APIs and network services to resist resource exhaustion attacks.

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

