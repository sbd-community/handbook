---
title: Radio Equipment Directive (RED)
sidebar_position: 3
tags: [red, compliance, eu, radio, secure-by-design]
---
# Radio Equipment Directive (RED)

## 1. Why the RED cyber rules matter now

The **Radio Equipment Directive (RED)** cybersecurity rules are defined by two key legal acts. First, the main **Directive 2014/53/EU** established the framework and created dormant security clauses in **[RED Art. 3 § 3(d-f)][red_art3]**. Second, a subsequent **Delegated Regulation (EU) 2022/30** *activated* these clauses for a wide range of consumer and industrial products, making them legally mandatory.

From **1 August 2025**, any in-scope device must meet these essential requirements to receive a CE mark. This regulation acts as a precursor to the broader [Cyber-Resilience Act (CRA)](./cra-overview.md), but with a compliance deadline that is over two years earlier. Manufacturers of products covered by both must meet the RED's deadline first.

:::info Official texts
- **Official Journal (Directive)** – Legally binding text of Directive 2014/53/EU as published on 22 May 2014: [OJ:L:2014:153 HTML][red_oj_dir].
- **Consolidated Version (RED)** – Integrates subsequent corrections and amendments: [CELEX:02014L0053-20241228 HTML][red_consolidated].
- **Delegated Act (DA)** – Activates the security requirements for specific product classes: [CELEX:32022R0030 HTML][red_del_act].
- **Amendment to DA** – Postponed the application date to 1 Aug 2025: [OJ:L_202302444 HTML][red_del_act_amend].

The consolidated version is easier for clause citations, but in case of doubt the official journal prevails.
:::

:::info Implementation Guidance
While harmonised standards are still under development, Germany's Federal Office for Information Security (BSI) has published a detailed technical guideline that serves as a practical playbook for CRA compliance. Since the security principles overlap significantly, it is a highly recommended resource for implementing the RED's requirements.

- **BSI TR-03183**: [Cyber Resilience Requirements for Manufacturers and Products][bsi_tr_03183]
:::

**Timeline of Key Dates**

| Date | Event | Legal/Standard Reference |
| :--- | :--- | :--- |
| **2022-01-12** | Delegated Regulation (EU) 2022/30 is published, activating RED's security articles. | [Delegated Act][red_del_act] |
| **2023-10-18** | Regulation (EU) 2023/2444 is published, postponing the compliance deadline by 12 months. | [Amendment to Delegated Act][red_del_act_amend] |
| **2025-01-30** | **Anticipated** Harmonised standards (e.g., ETSI EN 18031 series) expected to be cited in the OJEU.<br/>*Note: This date may change, as standardisation bodies have noted the complexity of the work.* | [Standardisation Mandate M/585][std_mandate_m585] |
| **2025-08-01** | **Compliance is mandatory.** Products placed on the market must meet the essential requirements. | [Delegated Act Art. 2][red_del_act_art2] |

**Relationship to other EU laws**

| Law | How it interacts with RED Security Rules |
|-----|---------------------------|
| **[Cyber-Resilience Act (CRA)](./cra-overview.md)** | The CRA will become the primary horizontal law for product cybersecurity. Its essential requirements include and build upon those in the RED. Once a product complies with the CRA, it will be presumed to comply with [RED Art. 3 § 3(d-f)][red_art3] ([CRA Art. 11][cra_art11]). However, since the RED deadline (Aug 2025) is earlier, manufacturers must comply with it first. Crucially, the CRA does **not** apply to medical devices covered by the MDR or IVDR. ([CRA Recital 30][cra_rec30]) |
| **[NIS 2 Directive](./nis2-overview.md)** | NIS 2 governs *organisational* cyber risk for critical sectors, while the RED focuses on *product* security. An organisation might be a NIS 2 "essential entity" and also manufacture products that must comply with the RED. The obligations are cumulative. ([NIS 2 Art. 21 § 2][nis2_art21]) |
| **CE-marking framework** | The RED security requirements are enforced through the CE-marking framework. A product may only bear the CE mark if it complies with *all* applicable legislation, which, from Aug 2025, includes [RED Art. 3 § 3(d-f)][red_art3] for in-scope devices. ([Reg. 765/2008 Art. 30][ce_marking_reg]) |

---

## 2. Scope – Which Products are Covered?

The Delegated Regulation (EU) 2022/30 applies the cybersecurity requirements to specific categories of radio equipment. If your product falls into any of the categories below, it must comply by **1 August 2025**.

### 2.1 In-Scope Product Categories

| Category | Description | Legal Basis |
|---|---|---|
| **Internet-Connected Radio Equipment** | Any radio equipment that is capable of communicating over the internet, whether directly or indirectly (e.g., via a gateway or smartphone). This is the broadest category and covers most modern IoT devices. | [DA Art. 1(a)][red_del_act_art1] |
| **Toys** | Any radio equipment that falls under the scope of the **Toy Safety Directive 2009/48/EC**. This includes connected toys that can communicate with other devices. | [DA Art. 1(b)][red_del_act_art1] |
| **Wearables & Personal Data Processors** | Any radio equipment designed to be worn by a person (wearable) or that processes certain categories of personal data as defined by GDPR. | [DA Art. 1(c)][red_del_act_art1] |

### 2.2 Examples

| Product Example | Category | In Scope? | Reasoning |
|---|---|---|---|
| **Smart Speaker (e.g. Alexa)** | Internet-Connected Radio | ✅ Yes | Connects directly to the internet to provide services. |
| **Wi-Fi Enabled Baby Monitor** | Internet-Connected Radio, Personal Data Processor | ✅ Yes | Connects to the internet and processes personal video/audio data. |
| **Bluetooth Fitness Tracker** | Wearable, Personal Data Processor | ✅ Yes | Worn by the user and processes health data, syncs with a smartphone that is internet-connected (indirect connection). |
| **Connected Toy Robot** | Toy, Internet-Connected Radio | ✅ Yes | Falls under the Toy Safety Directive and connects to a network. |
| **Industrial IoT Sensor** | Internet-Connected Radio | ✅ Yes | Connects to an industrial network which in turn connects to the internet for monitoring. |
| **Simple Bluetooth Speaker** | Radio Equipment | ❌ No | Does not connect to the internet (directly or indirectly) and does not process personal data beyond a/v streaming. |
| **Automotive Infotainment** | Radio Equipment | ❌ No | Excluded from the RED as it is covered by vehicle type-approval rules (Regulation 2018/858). |

---

## 3. The Essential Requirements (Article 3.3 d, e, f)

The Delegated Act activates three key security requirements from the main RED text. While these are the focus for the 2025 deadline, it is important to remember that **[RED Article 3][red_art3]** also contains foundational requirements for all radio equipment, including the protection of health and safety ([Art. 3(1a)][red_art3_1a]) and electromagnetic compatibility (EMC) ([Art. 3(1b)][red_art3_1b]).

Manufacturers of in-scope products must design their devices to comply with the following obligations.

| Obligation & Legal Basis | Interpretation & Engineering Tasks | Implementation Guides |
|---|---|---|
| **(d) No Network Harm**<br/>[RED Art. 3(3)(d)][red_art3_3d]<br/>[DA Recital 7][red_del_act_rec7] | The product must not harm the network or misuse its resources, causing service degradation. This means designing for resilience against DoS attacks and ensuring the device cannot be easily co-opted into a botnet. | [Device Lifecycle Management](../../tools/device-lifecycle-management.md)<br/>[CI/CD Hardening](../../implementation/operate-phase/cicd-hardening.md) |
| **(e) Protect Personal Data & Privacy**<br/>[RED Art. 3(3)(e)][red_art3_3e]<br/>[DA Recital 8][red_del_act_rec8] | The product must include safeguards to protect personal data and user privacy, taking into account the "state of the art". This requires implementing strong access control and modern encryption. Manufacturers must also provide clear user instructions and maintain technical documentation outlining risks and solutions ([RED Art. 10, 21][red_art10_21]). | [Unique Device Identity](../../implementation/build-phase/unique-device-identity.md)<br/>[Key Provisioning & Storage](../../implementation/build-phase/key-provisioning.md)<br/>[Data Privacy & Secure Deletion](../../implementation/build-phase/data-privacy.md) |
| **(f) Protection from Fraud**<br/>[RED Art. 3(3)(f)][red_art3_3f]<br/>[DA Recital 9][red_del_act_rec9] | The product must support features that protect against fraudulent activity (e.g., in electronic payments). This means ensuring the integrity of its software (e.g., via secure boot) and its identity. To aid traceability, manufacturers must ensure products bear a type, batch, or serial number ([RED Art. 10(6)][red_art10_6]). | [Secure Boot](../../implementation/build-phase/secure-boot.md)<br/>[Unique Device Identity](../../implementation/build-phase/unique-device-identity.md) |

---

## 4. Conformity Assessment & Harmonised Standards

### 4.1 Assessment Routes
To demonstrate compliance and affix the CE mark, manufacturers must follow a conformity assessment procedure laid out in the RED ([RED Art. 17][red_art17]). The route depends on whether they fully apply **harmonised standards**.

| Condition | Assessment Route |
|---|---|
| Manufacturer fully applies relevant harmonised standards. | **Module A** (Internal Production Control) → Manufacturer performs self-assessment. |
| Manufacturer does **not** fully apply harmonised standards (or they don't exist). | **Modules B+C** or **Module H** → Mandatory third-party audit by a Notified Body. |

- **Module A** ([RED Annex II][red_annexII]): The manufacturer handles all testing and documentation internally.
- **Module B+C** ([RED Annex III][red_annexIII]): A Notified Body performs an "EU-type examination" of the technical design (Module B), and the manufacturer ensures ongoing production conforms to that approved type (Module C).
- **Module H** ([RED Annex IV][red_annexIV]): A Notified Body approves a full quality assurance system covering the design, manufacture, and testing of the product.

:::info Planning for the Cyber Resilience Act (CRA)
These modules are foundational concepts in EU regulation. For long-term planning, manufacturers should be aware that the upcoming CRA builds upon them with a more detailed, risk-based approach. The CRA's conformity route depends on a product's risk classification, which determines whether self-assessment (Module A) is permitted or a third-party audit is required.

See the **[CRA Overview](./cra-overview.md#conformity-assessment-routes)** for a full breakdown of its risk classes and assessment routes.
:::

### 4.2 The Role of Harmonised Standards
A **harmonised standard (hEN)** is a standard created by a European Standardisation Organisation (e.g., ETSI) that provides a technical specification for meeting the RED's essential requirements.

When a manufacturer follows a relevant hEN, their product gains a **"presumption of conformity"** with the legal requirements covered by that standard or parts thereof ([RED Art. 16][red_art16]). This is the key that unlocks the simplest path to compliance: self-assessment (Module A).

For the cybersecurity requirements, the key standards are the **ETSI EN 18031** series. The standardisation request from the Commission is detailed in **[Mandate M/585][std_mandate_m585]**.

### 4.3 CE Marking
The CE mark signals that a product complies with all applicable EU legislation. For RED, it must be affixed visibly, legibly, and indelibly to the product and its packaging ([RED Art. 20][red_art20]). If a Notified Body was involved in the assessment (e.g., Modules B+C or H), their four-digit identification number must be placed after the CE mark and be the same height.

---

## 5. Maintaining Compliance & Vulnerability Handling
While the RED is less explicit than the CRA about post-market duties, maintaining compliance with the essential requirements over time requires an effective vulnerability management process. The following practices, which are formalised in the CRA, should be considered best practice for any manufacturer placing a product on the EU market:

-   **Vulnerability Remediation:** Address and fix vulnerabilities without undue delay, providing security updates that are free of charge and, where possible, delivered automatically.
-   **Component Inventory:** Identify and document all software components, including by drawing up a Software Bill of Materials (SBOM), to enable vulnerability tracking.
-   **Security Testing:** Regularly test the product for vulnerabilities using both internal processes and independent security researchers.
-   **Coordinated Disclosure:** Establish a clear policy and a secure contact channel for third parties to report vulnerabilities.

Adopting these processes not only ensures that a product remains secure and compliant with the RED's core principles but also prepares the manufacturer for the more extensive requirements of the upcoming Cyber Resilience Act.

<!-- Citations -->
[red_oj_dir]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32014L0053 "Official Journal of Directive 2014/53/EU"
[red_consolidated]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20241228 "Consolidated text of Directive 2014/53/EU"
[red_del_act]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R0030 "Delegated Regulation (EU) 2022/30 – activating security clauses"
[red_del_act_amend]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202302444 "Amendment to Delegated Regulation (EU) 2022/30"
[red_del_act_art1]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R0030#art_1 "Delegated Regulation Article 1 - Subject Matter and Scope"
[red_del_act_art2]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R0030#art_2 "Delegated Regulation Article 2 - Compliance of radio equipment"
[red_del_act_rec7]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R0030#rec_7 "Delegated Regulation Recital 7 - Network Harm"
[red_del_act_rec8]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R0030#rec_8 "Delegated Regulation Recital 8 - Personal Data"
[red_del_act_rec9]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R0030#rec_9 "Delegated Regulation Recital 9 - Fraud"
[red_art3]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20241228#art_3 "RED Article 3 – Essential requirements"
[red_art3_1a]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20241228#art_3 "RED Article 3(1a) – Health and Safety"
[red_art3_1b]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20241228#art_3 "RED Article 3(1b) – EMC"
[red_art3_3d]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20241228#art_3 "RED Article 3(3)(d) – Network Harm"
[red_art3_3e]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20241228#art_3 "RED Article 3(3)(e) – Data & Privacy Protection"
[red_art3_3f]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20241228#art_3 "RED Article 3(3)(f) – Fraud Protection"
[red_art10_6]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20241228#art_10 "RED Article 10(6) – Manufacturer obligation for identification"
[red_art10_21]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20241228#art_10 "RED Article 10 & 21 – Manufacturer obligations for instructions and technical documentation"
[red_art16]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20241228#art_16 "RED Article 16 – Presumption of conformity"
[red_art17]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20241228#art_17 "RED Article 17 – Conformity assessment procedures"
[red_art20]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20241228#art_20 "RED Article 20 – Rules and conditions for affixing the CE marking"
[red_annexII]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20241228#anx_II "RED Annex II - Conformity assessment module A"
[red_annexIII]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20241228#anx_III "RED Annex III - Conformity assessment modules B and C"
[red_annexIV]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20241228#anx_IV "RED Annex IV - Conformity assessment module H"
[std_mandate_m585]: https://ec.europa.eu/growth/tools-databases/mandates/index.cfm?fuseaction=search.detail&id=612 "Standardisation Mandate M/585 for Radio Equipment"
[ce_marking_reg]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32008R0765#art_30 "Regulation (EC) No 765/2008 on CE Marking" 
[cra_rec30]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202402847#rct_30 "CRA Recital 30 – Relationship with Radio Equipment Directive (RED)"
[cra_art11]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02024R2847-20241120#art_11 "CRA Article 11 – More specific Union law"
[nis2_art21]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022L2555#art_21 "Cybersecurity risk-management measures"
[bsi_tr_03183]: https://www.bsi.bund.de/EN/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/Technische-Richtlinien/TR-nach-Thema-sortiert/tr03183/TR-03183_node.html "BSI Technical Guideline TR-03183"
