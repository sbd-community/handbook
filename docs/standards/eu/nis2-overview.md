---
title: NIS 2 Directive
sidebar_position: 2
tags: [nis2, compliance, eu, critical-infrastructure, secure-by-design]
---
# NIS 2 Directive

## 1. Why NIS 2 matters now

The **NIS 2 Directive (EU) 2022/2555** is a major overhaul of the EU's cybersecurity rules, replacing the original NIS Directive. It aims to create a higher common level of cybersecurity across the Union by expanding its scope, introducing stricter security and reporting requirements, and strengthening enforcement powers.

Unlike the [Cyber-Resilience Act (CRA)](./cra-overview.md), which focuses on the security of *products*, NIS 2 focuses on the cyber resilience of the *organisations* that provide critical services. These organisations—categorised as **'essential'** or **'important'**—must implement robust risk-management measures and report significant incidents to national authorities.

:::info Official texts
- **Official Journal** – Legally binding record as published on 27 Dec 2022: [OJ:L:2022:333 HTML][nis2_oj].
- **Consolidated Version** – The full text of Directive (EU) 2022/2555: [CELEX:32022L2555 HTML][nis2_consolidated].

The consolidated version is the primary reference for this directive.
:::

**Timeline of Key Dates**

| Date | Event | Legal Basis |
| :--- | :--- | :--- |
| **2023-01-16** | Directive entered into force. | [NIS2 Art. 45][nis2_art45] |
| **2024-10-17** | Member States must adopt and publish national laws (transposition deadline). | [NIS2 Art. 41][nis2_art41] |
| **2024-10-18** | **NIS 2 rules become applicable.** Organisations must be compliant. | [NIS2 Art. 41][nis2_art41] |

**Relationship to other EU laws**

| Law | How it interacts with NIS 2 |
|-----|---------------------------|
| **[Cyber-Resilience Act (CRA)](./cra-overview.md)** | NIS 2 governs *organisational* cyber risk; the CRA governs *product* security. A NIS 2 "essential entity" must ensure its supply chain is secure ([NIS2 Art. 21(2d)][nis2_art21]), which includes procuring CRA-compliant products. The reporting platform used by manufacturers under the CRA is established and operated under the NIS 2 framework, feeding vulnerability data directly into the EU's incident response system. |
| **[Radio Equipment Directive (RED)](./red-overview.md)** | An organisation may be a NIS 2 entity and also manufacture products subject to the RED. The obligations are cumulative; organisational resilience under NIS 2 must be maintained, and products must meet RED requirements. |
| **DORA (Digital Operational Resilience Act)** | DORA is a *lex specialis* (specific law) for the financial sector. Financial entities that fall under DORA are exempt from NIS 2's main provisions, as DORA's requirements are considered at least equivalent ([NIS2 Art. 4][nis2_art4]). |
| **CER Directive** | The Critical Entities Resilience Directive (EU 2022/2557) covers the *physical* resilience of critical infrastructure (e.g., against natural disasters). NIS 2 covers their *cyber* resilience. The two directives are designed to work in parallel. |

---

## 2. Scope – Which Organisations are In?

NIS 2 applies to public and private entities in specific sectors, categorising them as either **Essential Entities (EE)** or **Important Entities (IE)** based on their criticality to the EU's economy and society. The main obligations apply to entities that are medium-sized or larger, though some are in scope regardless of their size ([NIS2 Art. 2][nis2_art2]).

### 2.1 Essential vs. Important Entities

| Category | Annex | Key Characteristics | Supervision |
|---|---|---|---|
| **Essential Entities (EE)** | **Annex I** | Sectors of high criticality, such as energy, transport, health, and digital infrastructure. | **Proactive** supervision by national authorities, including regular audits and inspections. |
| **Important Entities (IE)** | **Annex II** | Other critical sectors, such as postal services, waste management, manufacturing of critical products, and digital providers. | **Reactive** (*ex-post*) supervision. Authorities act if provided with evidence of non-compliance. |

### 2.2 Examples of In-Scope Entities

The table below provides a non-exhaustive list of examples to help organisations identify their likely status.

| Sector | Example Entity | Essential (Annex I) | Important (Annex II) |
| :--- | :--- | :---: | :---: |
| **Digital Infrastructure** |
| | TLD Name Registries, DNS Providers | ✅ | |
| | Cloud Computing Service Providers | ✅ | |
| | Data Centre Service Providers | ✅ | |
| | Content Delivery Networks | ✅ | |
| | Providers of Public Electronic Comms Networks | ✅ | |
| | Trust Service Providers (Qualified) | ✅ | |
| | Trust Service Providers (Non-Qualified) | | ✅ |
| | Online Marketplaces | | ✅ |
| | Online Search Engines | | ✅ |
| | Social Networking Platforms | | ✅ |
| **Health** |
| | Hospitals & Healthcare Providers | ✅ | |
| | EU Reference Laboratories | ✅ | |
| | R&D of Medicinal Products | ✅ | |
| | Manufacturers of Critical Medical Devices | ✅ | |
| | Manufacturers of Pharmaceuticals | ✅ | |
| **Energy** |
| | Electricity, Oil & Gas Suppliers | ✅ | |
| | District Heating & Cooling Operators | ✅ | |
| | Hydrogen Production & Transmission | ✅ | |
| **Transport** |
| | Air, Rail, Water & Road Transport Operators | ✅ | |
| **Manufacturing** |
| | Medical Devices (non-critical) | | ✅ |
| | Computers & Electronics | | ✅ |
| | Machinery & Equipment | | ✅ |
| | Motor Vehicles | | ✅ |
| | Other Transport Equipment | | ✅ |
| **Other Sectors** |
| | Postal & Courier Services | | ✅ |
| | Waste Management | | ✅ |
| | Food Production & Processing | | ✅ |
| | Research Organisations | | ✅ |

---

## 3. How NIS 2 Impacts Product Manufacturers

While NIS 2 directly regulates service providers, it has significant indirect consequences for any company that manufactures products with digital elements. Regulated entities are legally required to secure their supply chains, which means they will pass down strict cybersecurity requirements to their suppliers.

### 3.1 Supply Chain Security Demands

Essential and Important Entities are explicitly required to manage risks in their supply chains. This includes assessing "the overall quality of products and cybersecurity practices of their suppliers and service providers, including their secure development procedures" ([NIS2 Art. 21(3)][nis2_art21]).

This means product manufacturers selling to NIS 2-regulated customers should expect to be asked for:
-   Evidence of secure development practices.
-   Software Bills of Materials (SBOMs).
-   Information about their vulnerability management processes.
-   Contractual security commitments.

### 3.2 Mandatory Product Certification

NIS 2 empowers Member States to *require* regulated entities to use specific ICT products or services that are certified under a **European cybersecurity certification scheme** (established under the EU's Cybersecurity Act). The European Commission can also adopt acts to mandate this for certain categories of entity ([NIS2 Art. 24][nis2_art24]).

For manufacturers, this can turn cybersecurity certification from a market advantage into a **market access requirement**. If a customer in a critical sector is legally obliged to use certified products, uncertified products will be locked out of that segment.

---

## 4. Key Obligations for Management

NIS 2 places direct responsibility on the management bodies of both essential and important entities.

| Obligation | Description | Legal Basis |
|---|---|---|
| **Approve & Oversee** | Management must approve and oversee the implementation of the cybersecurity risk-management measures required by Article 21. | [NIS2 Art. 20(1)][nis2_art20] |
| **Liability** | Management can be held personally liable for infringements of Article 21. | [NIS2 Art. 20(1)][nis2_art20] |
| **Training** | Management members are required to follow cybersecurity training to gain sufficient knowledge to identify and assess risks and management practices. | [NIS2 Art.20(2)][nis2_art20] |

---

## 5. NIS 2 Requirements & How to Implement Them

### 5.1 Cybersecurity Risk-Management Measures

All essential and important entities must take "appropriate and proportionate technical, operational and organisational measures" to manage cybersecurity risks ([NIS2 Art. 21(1)][nis2_art21]). These measures must be based on an all-hazards approach and cover at least the following areas:

| Requirement Area | Interpretation & Engineering Tasks | Implementation Guides |
|---|---|---|
| **Risk Analysis & Security Policies**<br/>[Art. 21(2a)][nis2_art21] | Perform and document a risk assessment; establish and maintain clear information system security policies. | [Threat Modeling](../../implementation/build-phase/threat-modeling.md) |
| **Incident Handling**<br/>[Art. 21(2b)][nis2_art21] | Define and implement a process for detecting, analysing, containing, and responding to security incidents. | [Security Logging & Monitoring](../../implementation/operate-phase/security-logging.md) |
| **Business Continuity & Crisis Management**<br/>[Art. 21(2c)][nis2_art21] | Establish plans for business continuity, backup management, and disaster recovery to ensure operational resilience. | n/a |
| **Supply Chain Security**<br/>[Art. 21(2d)][nis2_art21] | Assess and manage security risks arising from suppliers and service providers, including requiring specific security measures in contracts. | [SBOM & VEX Workflows](../../implementation/build-phase/sbom-vex.md) |
| **Secure Development & Maintenance**<br/>[Art. 21(2e)][nis2_art21] | Implement secure development practices for network and information systems, including a coordinated vulnerability disclosure process. | [Vulnerability Disclosure](../../implementation/operate-phase/vulnerability-disclosure.md)<br/>[CI/CD Hardening](../../implementation/operate-phase/cicd-hardening.md) |
| **Effectiveness Assessment**<br/>[Art. 21(2f)][nis2_art21] | Implement policies and procedures to regularly assess the effectiveness of the cybersecurity risk-management measures. | n/a |
| **Cyber Hygiene & Training**<br/>[Art. 21(2g)][nis2_art21] | Implement basic cyber hygiene practices (e.g., software updates, password policies) and provide regular cybersecurity training for all staff. | [User Documentation Guide](../../implementation/build-phase/user-documentation.md) |
| **Cryptography & Encryption**<br/>[Art. 21(2h)][nis2_art21] | Implement policies on the use of cryptography and, where appropriate, end-to-end encryption to protect data at rest and in transit. | [Key Provisioning & Storage](../../implementation/build-phase/key-provisioning.md) |
| **HR Security & Access Control**<br/>[Art. 21(2i)][nis2_art21] | Define and enforce access control policies based on the principle of least privilege and "need to know". Manage assets and ensure personnel security. | [Unique Device Identity](../../implementation/build-phase/unique-device-identity.md) |
| **Authentication & Secure Comms**<br/>[Art. 21(2j)][nis2_art21] | Use multi-factor authentication (MFA) or continuous authentication solutions. Ensure voice, video, and text communications are secured. | n/a |

### 5.2 Incident Reporting Obligations

Entities must notify their national CSIRT or competent authority of any incident that has a **significant impact** on the provision of their services. A significant incident is one that causes severe operational disruption or financial loss, or affects others by causing considerable material or non-material damage ([NIS2 Art. 23(3)][nis2_art23]).

The notification must follow a multi-stage process:

| Stage | Deadline | Content | Legal Basis |
|---|---|---|---|
| **1. Early Warning** | **Within 24 hours** of becoming aware. | Initial alert. Must indicate if the incident is suspected of being caused by unlawful or malicious acts. | [Art. 23(4a)][nis2_art23] |
| **2. Incident Notification** | **Within 72 hours** of becoming aware. | An update to the early warning, with an initial assessment of the incident's severity, impact, and (if available) indicators of compromise. | [Art. 23(4b)][nis2_art23] |
| **3. Intermediate Report** | **On request** from the CSIRT/authority. | Status updates on the ongoing incident investigation and remediation. | [Art. 23(4c)][nis2_art23] |
| **4. Final Report** | **Within 1 month** of submitting the incident notification. | A detailed description including root cause, mitigation measures applied, and cross-border impact. | [Art. 23(4d)][nis2_art23] |

---

## 6. How is NIS 2 Enforced?

NIS 2 grants national authorities strong powers to supervise and enforce the rules, with different regimes for Essential and Important entities.

### 6.1 Supervisory Powers
-   **Essential Entities** are subject to **proactive supervision**. This includes on-site inspections, regular and targeted security audits, and requests for information to verify compliance.
-   **Important Entities** are subject to **reactive supervision**. Authorities will act *ex-post* if they are provided with evidence or indication of non-compliance.

### 6.2 Penalties for Non-Compliance
Member States must ensure penalties are "effective, proportionate and dissuasive". The Directive sets maximum fines that can be imposed ([NIS2 Art. 34][nis2_art34]):

-   **Essential Entities:** Fines of up to **€10,000,000** or **2%** of the total worldwide annual turnover of the preceding financial year, whichever is higher.
-   **Important Entities:** Fines of up to **€7,000,000** or **1.4%** of the total worldwide annual turnover of the preceding financial year, whichever is higher.

<!-- Citations -->
[nis2_oj]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022L2555 "Official Journal of Directive (EU) 2022/2555"
[nis2_consolidated]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02022L2555-20221227 "Consolidated text of Directive (EU) 2022/2555"
[nis2_art2]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02022L2555-20221227#art_2 "NIS 2 Article 2 – Scope"
[nis2_art4]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02022L2555-20221227#art_4 "NIS 2 Article 4 – Sector-specific Union legal acts"
[nis2_art20]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02022L2555-20221227#art_20 "NIS 2 Article 20 - Governance"
[nis2_art21]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02022L2555-20221227#art_21 "NIS 2 Article 21 – Cybersecurity risk-management measures"
[nis2_art23]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02022L2555-20221227#art_23 "NIS 2 Article 23 – Reporting obligations"
[nis2_art24]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02022L2555-20221227#art_24 "NIS 2 Article 24 – Use of European cybersecurity certification schemes"
[nis2_art32]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02022L2555-20221227#art_32 "NIS 2 Article 32 – Supervisory and enforcement measures in relation to essential entities"
[nis2_art33]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02022L2555-20221227#art_33 "NIS 2 Article 33 – Supervisory and enforcement measures in relation to important entities"
[nis2_art34]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02022L2555-20221227#art_34 "NIS 2 Article 34 – General conditions for imposing administrative fines"
[nis2_art41]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02022L2555-20221227#art_41 "NIS 2 Article 41 – Transposition"
[nis2_art42]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02022L2555-20221227#art_42 "NIS 2 Article 42 – Amendment of Regulation (EU) No 910/2014"
[nis2_art45]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02022L2555-20221227#art_45 "NIS 2 Article 45 – Entry into force" 