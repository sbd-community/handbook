---
title: Radio Equipment Directive (RED)
sidebar_position: 3
tags: [red, compliance, eu, radio, secure-by-design]
---
# Radio Equipment Directive (RED)

## 1. Why the RED cyber rules matter now

The **Radio Equipment Directive (RED)** cybersecurity rules are defined by two key legal acts. First, the main **Directive 2014/53/EU** established the framework and created dormant security clauses in **[RED Art. 3 § 3(d-f)][red_art3]**. Second, a subsequent **Delegated Regulation (EU) 2022/30** *activated* these clauses for a wide range of consumer and industrial products, making them legally mandatory.

Since **1 August 2025**, any in-scope device has had to meet these essential requirements to receive a CE mark. This regulation acts as a precursor to the broader [Cyber-Resilience Act (CRA)](./cra/index.md), which applies in full from **11 December 2027**. From that date, **Delegated Regulation (EU) 2026/339** repeals Delegated Regulation (EU) 2022/30 so that the CRA takes over these cybersecurity requirements; radio equipment placed on the market from 1 August 2025 to 10 December 2027 remains subject to the RED requirements.

:::info Official texts
- **Official Journal (Directive)** – Legally binding text of Directive 2014/53/EU as published on 22 May 2014: [OJ:L:2014:153 HTML][red_oj_dir].
- **Consolidated Version (RED)** – Integrates subsequent corrections and amendments: [CELEX:02014L0053-20260530 HTML][red_consolidated].
- **Delegated Act (DA)** – Activates the security requirements for specific product classes: [CELEX:32022R0030 HTML][red_del_act].
- **Amendment to DA** – Postponed the application date to 1 Aug 2025: [OJ:L_202302444 HTML][red_del_act_amend].
- **Repeal of DA** – Repeals the DA with effect from 11 Dec 2027, when the CRA applies in full: [CELEX:32026R0339 HTML][red_del_act_repeal].

The consolidated version is easier for clause citations, but in case of doubt the official journal prevails.
:::

:::info Implementation Guidance
The harmonised standards for the RED cybersecurity requirements (EN 18031-1, -2 and -3) have been cited in the Official Journal, with restrictions, since 30 January 2025 (see [§ 4.2](#42-the-role-of-harmonised-standards)). Germany's Federal Office for Information Security (BSI) has also published a detailed technical guideline that serves as a practical playbook for CRA compliance. Since the security principles overlap significantly, it is a highly recommended resource for implementing the RED's requirements.

- **BSI TR-03183**: [Cyber Resilience Requirements for Manufacturers and Products][bsi_tr_03183]
:::

**Timeline of Key Dates**

| Date | Event | Legal/Standard Reference |
| :--- | :--- | :--- |
| **2022-01-12** | Delegated Regulation (EU) 2022/30 is published, activating RED's security articles. | [Delegated Act][red_del_act] |
| **2023-10-27** | Regulation (EU) 2023/2444 is published, postponing the compliance deadline by 12 months. | [Amendment to Delegated Act][red_del_act_amend] |
| **2025-01-30** | Harmonised standards EN 18031-1, -2 and -3:2024 (CEN-CENELEC) are cited in the OJEU, with restrictions. | [Implementing Decision (EU) 2025/138][red_hs_2025_138] |
| **2025-08-01** | **Compliance is mandatory.** Products placed on the market must meet the essential requirements. | [Delegated Act Art. 3][red_del_act_art3] |
| **2027-12-11** | Delegated Regulation (EU) 2022/30 is repealed and the CRA applies in full. Equipment placed on the market before this date remains subject to the RED requirements. | [Delegated Regulation (EU) 2026/339][red_del_act_repeal] |

**Relationship to other EU laws**

| Law | How it interacts with RED Security Rules |
|-----|---------------------------|
| **[Cyber-Resilience Act (CRA)](./cra/index.md)** | The CRA becomes the primary horizontal law for product cybersecurity from 11 December 2027. Its essential requirements include all the elements of [RED Art. 3 § 3(d-f)][red_art3] ([CRA Recital 30][cra_rec30]), so [Delegated Regulation (EU) 2026/339][red_del_act_repeal] repeals Delegated Regulation (EU) 2022/30 from that date to avoid overlap. Until then, in-scope radio equipment must meet the RED requirements. EU-type examination certificates issued for these RED requirements remain valid until 11 June 2028, unless they expire earlier ([CRA Art. 69 § 1][cra_art69]). Crucially, the CRA does **not** apply to medical devices covered by the MDR or IVDR ([CRA Art. 2 § 2][cra_art2]), and the Delegated Regulation also excludes them ([DA Art. 2][red_del_act_art2]). |
| **[NIS 2 Directive](./nis2-overview.md)** | NIS 2 governs *organisational* cyber risk for critical sectors, while the RED focuses on *product* security. An organisation might be a NIS 2 "essential entity" and also manufacture products that must comply with the RED. The obligations are cumulative. ([NIS 2 Art. 21 § 2][nis2_art21]) |
| **CE-marking framework** | The RED security requirements are enforced through the CE-marking framework. A product may only bear the CE mark if it complies with *all* applicable legislation, which, from Aug 2025, includes [RED Art. 3 § 3(d-f)][red_art3] for in-scope devices. ([Reg. 765/2008 Art. 30][ce_marking_reg]) |

---

## 2. Scope – Which Products are Covered?

The Delegated Regulation (EU) 2022/30 applies the cybersecurity requirements to specific categories of radio equipment. If your product falls into any of the categories below, it has had to comply since **1 August 2025**.

### 2.1 In-Scope Product Categories

| Category | Description | Legal Basis |
|---|---|---|
| **Internet-Connected Radio Equipment** | Any radio equipment that can itself communicate over the internet, whether directly or via other equipment (e.g., a gateway or smartphone). This is the broadest category and covers most modern IoT devices. It must meet (d), and also (e) if it processes personal, traffic, or location data. | [DA Art. 1(1), 1(2)(a)][red_del_act_art1] |
| **Childcare Equipment & Toys** | Radio equipment designed or intended exclusively for childcare (e.g., baby monitors), or that falls under the **Toy Safety Directive 2009/48/EC**. It must meet (e) if it processes personal, traffic, or location data, even without an internet connection. | [DA Art. 1(2)(b), (c)][red_del_act_art1] |
| **Wearables** | Radio equipment designed to be worn on, strapped to, or hung from the body or clothing. It must meet (e) if it processes personal, traffic, or location data, even without an internet connection. | [DA Art. 1(2)(d)][red_del_act_art1] |
| **Money-Transfer Equipment** | Internet-connected radio equipment that enables the holder or user to transfer money, monetary value, or virtual currency. It must meet (f). | [DA Art. 1(3)][red_del_act_art1] |

### 2.2 Examples

| Product Example | Category | In Scope? | Reasoning |
|---|---|---|---|
| **Smart Speaker (e.g. Alexa)** | Internet-Connected Radio | ✅ Yes | Connects directly to the internet to provide services. |
| **Wi-Fi Enabled Baby Monitor** | Internet-Connected Radio, Personal Data Processor | ✅ Yes | Connects to the internet and processes personal video/audio data. |
| **Bluetooth Fitness Tracker** | Wearable, Personal Data Processor | ✅ Yes | Worn by the user and processes health data, syncs with a smartphone that is internet-connected (indirect connection). |
| **Connected Toy Robot** | Toy, Internet-Connected Radio | ✅ Yes | Falls under the Toy Safety Directive and connects to a network. |
| **Industrial IoT Sensor** | Internet-Connected Radio | ✅ Yes | Connects to an industrial network which in turn connects to the internet for monitoring. |
| **Simple Bluetooth Speaker** | Radio Equipment | ❌ No | Does not connect to the internet (directly or indirectly) and does not process personal data beyond a/v streaming. |
| **Automotive Infotainment** | Internet-Connected Radio | ⚠️ Partly | Where vehicle type-approval Regulation (EU) 2019/2144 applies, requirements (e) and (f) do not apply; (d) still applies if it is internet-connected ([DA Art. 2(2)][red_del_act_art2]). |

---

## 3. RED Requirements & How to Implement Them

The Delegated Act activates three key security requirements from the main RED text. While these are the focus for the 2025 deadline, it is important to remember that **[RED Article 3][red_art3]** also contains foundational requirements for all radio equipment, including the protection of health and safety ([Art. 3(1a)][red_art3_1a]) and electromagnetic compatibility (EMC) ([Art. 3(1b)][red_art3_1b]).

Manufacturers of in-scope products must design their devices to comply with the following obligations.

| Obligation & Legal Basis | Interpretation & Engineering Tasks | Implementation Guides |
|---|---|---|
| **(d) No Network Harm**<br/>[RED Art. 3(3)(d)][red_art3_3d]<br/>[DA Recital 9][red_del_act_rec9] | The product must not harm the network or misuse its resources, causing service degradation. This means designing for resilience against DoS attacks and ensuring the device cannot be easily co-opted into a botnet. | [Device Lifecycle Management](../../tools/device-lifecycle-management.md)<br/>[CI/CD Hardening](../../implementation/operate-phase/cicd-hardening.md) |
| **(e) Protect Personal Data & Privacy**<br/>[RED Art. 3(3)(e)][red_art3_3e]<br/>[DA Recitals 10–12][red_del_act_rec10] | The product must include safeguards to protect personal data and user privacy, taking into account the "state of the art". This requires implementing strong access control and modern encryption. Manufacturers must also provide clear user instructions and maintain technical documentation outlining risks and solutions ([RED Art. 10, 21][red_art10_21]). | [Unique Device Identity](../../implementation/build-phase/unique-device-identity.md)<br/>[Key Provisioning & Storage](../../implementation/build-phase/key-provisioning.md)<br/>[Data Privacy & Secure Deletion](../../implementation/build-phase/data-privacy.md) |
| **(f) Protection from Fraud**<br/>[RED Art. 3(3)(f)][red_art3_3f]<br/>[DA Recitals 13–14][red_del_act_rec13] | The product must support features that protect against fraudulent activity (e.g., in electronic payments). This means ensuring the integrity of its software (e.g., via secure boot) and its identity. To aid traceability, manufacturers must ensure products bear a type, batch, or serial number ([RED Art. 10(6)][red_art10_6]). | [Secure Boot](../../implementation/build-phase/secure-boot.md)<br/>[Unique Device Identity](../../implementation/build-phase/unique-device-identity.md) |

---

## 4. Self-Assessment vs. Third-Party Audit?

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
These modules are foundational concepts in EU regulation. For long-term planning, manufacturers should be aware that the CRA, which applies in full from 11 December 2027, builds upon them with a more detailed, risk-based approach. The CRA's conformity route depends on a product's risk classification, which determines whether self-assessment (Module A) is permitted or a third-party audit is required.

See the **[CRA Overview](./cra/index.md#conformity-assessment-routes)** for a full breakdown of its risk classes and assessment routes.
:::

### 4.2 The Role of Harmonised Standards
A **harmonised standard (hEN)** is a standard created by a European Standardisation Organisation (e.g., ETSI) that provides a technical specification for meeting the RED's essential requirements.

When a manufacturer follows a relevant hEN, their product gains a **"presumption of conformity"** with the legal requirements covered by that standard or parts thereof ([RED Art. 16][red_art16]). This is the key that unlocks the simplest path to compliance: self-assessment (Module A).

For the cybersecurity requirements, the key standards are **EN 18031-1, EN 18031-2 and EN 18031-3:2024**, developed by CEN-CENELEC under the standardisation request detailed in **[Mandate M/585][std_mandate_m585]**. Their references were published in the Official Journal on 30 January 2025 with restrictions ([Implementing Decision (EU) 2025/138][red_hs_2025_138]): among others, they give no presumption of conformity if, under clauses 6.2.5.1 and 6.2.5.2, the user is allowed not to set and use any password, and further restrictions apply to parental or guardian access control in EN 18031-2 and to the secure-update assessment criteria in EN 18031-3.

### 4.3 CE Marking
The CE mark signals that a product complies with all applicable EU legislation. For RED, it must be affixed visibly, legibly, and indelibly to the product and its packaging ([RED Art. 20][red_art20]). If the full quality assurance procedure (Module H, Annex IV) was applied, the Notified Body's identification number must follow the CE mark and be the same height.

---

## 5. Maintaining Compliance & Vulnerability Handling
While the RED is less explicit than the CRA about post-market duties, maintaining compliance with the essential requirements over time requires an effective vulnerability management process. The following practices, which are formalised in the CRA, should be considered best practice for any manufacturer placing a product on the EU market:

-   **Vulnerability Remediation:** Address and fix vulnerabilities without undue delay, providing security updates that are free of charge and, where possible, delivered automatically.
-   **Component Inventory:** Identify and document all software components, including by drawing up a Software Bill of Materials (SBOM), to enable vulnerability tracking.
-   **Security Testing:** Regularly test the product for vulnerabilities using both internal processes and independent security researchers.
-   **Coordinated Disclosure:** Establish a clear policy and a secure contact channel for third parties to report vulnerabilities.

Adopting these processes not only ensures that a product remains secure and compliant with the RED's core principles but also prepares the manufacturer for the more extensive requirements of the Cyber Resilience Act.

<!-- Citations -->
[red_oj_dir]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32014L0053 "Official Journal of Directive 2014/53/EU"
[red_consolidated]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20260530 "Consolidated text of Directive 2014/53/EU"
[red_del_act]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R0030 "Delegated Regulation (EU) 2022/30 – activating security clauses"
[red_del_act_amend]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202302444 "Amendment to Delegated Regulation (EU) 2022/30"
[red_del_act_art1]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R0030#art_1 "Delegated Regulation Article 1 - Subject Matter and Scope"
[red_del_act_art2]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R0030#art_2 "Delegated Regulation Article 2 - Derogations"
[red_del_act_art3]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R0030#art_3 "Delegated Regulation Article 3 - Entry into force and application (as amended by Regulation (EU) 2023/2444)"
[red_del_act_repeal]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32026R0339 "Delegated Regulation (EU) 2026/339 repealing Delegated Regulation (EU) 2022/30"
[red_hs_2025_138]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32025D0138 "Implementing Decision (EU) 2025/138 – EN 18031 harmonised standards cited with restrictions"
[red_del_act_rec9]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R0030#rec_9 "Delegated Regulation Recital 9 - Network Harm"
[red_del_act_rec10]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R0030#rec_10 "Delegated Regulation Recitals 10-12 - Personal Data"
[red_del_act_rec13]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R0030#rec_13 "Delegated Regulation Recitals 13-14 - Fraud"
[red_art3]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20260530#art_3 "RED Article 3 – Essential requirements"
[red_art3_1a]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20260530#art_3 "RED Article 3(1a) – Health and Safety"
[red_art3_1b]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20260530#art_3 "RED Article 3(1b) – EMC"
[red_art3_3d]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20260530#art_3 "RED Article 3(3)(d) – Network Harm"
[red_art3_3e]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20260530#art_3 "RED Article 3(3)(e) – Data & Privacy Protection"
[red_art3_3f]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20260530#art_3 "RED Article 3(3)(f) – Fraud Protection"
[red_art10_6]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20260530#art_10 "RED Article 10(6) – Manufacturer obligation for identification"
[red_art10_21]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20260530#art_10 "RED Article 10 & 21 – Manufacturer obligations for instructions and technical documentation"
[red_art16]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20260530#art_16 "RED Article 16 – Presumption of conformity"
[red_art17]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20260530#art_17 "RED Article 17 – Conformity assessment procedures"
[red_art20]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20260530#art_20 "RED Article 20 – Rules and conditions for affixing the CE marking"
[red_annexII]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20260530#anx_II "RED Annex II - Conformity assessment module A"
[red_annexIII]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20260530#anx_III "RED Annex III - Conformity assessment modules B and C"
[red_annexIV]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20260530#anx_IV "RED Annex IV - Conformity assessment module H"
[std_mandate_m585]: https://ec.europa.eu/growth/tools-databases/enorm/mandate/585_en "Standardisation Mandate M/585 for Radio Equipment"
[ce_marking_reg]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32008R0765#art_30 "Regulation (EC) No 765/2008 on CE Marking" 
[cra_rec30]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202402847#rct_30 "CRA Recital 30 – Relationship with Radio Equipment Directive (RED)"
[cra_art69]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02024R2847-20241120#art_69 "CRA Article 69 – Transitional provisions"
[cra_art2]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02024R2847-20241120#art_2 "CRA Article 2 – Scope"
[nis2_art21]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022L2555#art_21 "Cybersecurity risk-management measures"
[bsi_tr_03183]: https://www.bsi.bund.de/EN/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/Technische-Richtlinien/TR-nach-Thema-sortiert/tr03183/TR-03183_node.html "BSI Technical Guideline TR-03183"
