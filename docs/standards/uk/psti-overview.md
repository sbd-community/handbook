---
title: "PSTI Act (UK)"
sidebar_label: "PSTI Act"
sidebar_position: 1
tags: [psti, compliance, uk, security, iot, secure-by-design]
---
# UK Product Security and Telecommunications Infrastructure (PSTI) Act

## 1. Why PSTI matters now

The **Product Security and Telecommunications Infrastructure (PSTI) Act 2022** establishes a new regulatory framework for the security of consumer connectable products in the UK. It legally mandates that manufacturers, importers, and distributors meet specific, binding security requirements.

The substantive security rules, detailed in the 2023 Regulations, came into force on **29 April 2024**. From this date, any in-scope product made available to UK consumers must be compliant.

:::info Official texts
- **PSTI Act 2022 (Primary Legislation)**: [Product Security and Telecommunications Infrastructure Act 2022][psti_act_2022].
- **The Security Regulations 2023 (Specific Requirements)**: [The Product Security and Telecommunications Infrastructure (Security Requirements for Relevant Connectable Products) Regulations 2023][psti_regs_2023].
:::

**Timeline of Key Dates**

| Date | Event |
| :--- | :--- |
| **2022-12-06** | PSTI Act receives Royal Assent. |
| **2023-09-14** | Security Requirements Regulations are laid before Parliament. |
| **2024-04-29** | **Compliance is mandatory.** |

**Relationship to other laws**

| Law | How it interacts with PSTI |
|-----|----------------------------|
| **UK GDPR & [PECR](./pecr-overview.md)** | PSTI focuses on the technical security of the device itself. GDPR and PECR focus on the protection of personal data processed by the device. A secure device (PSTI) is a prerequisite for protecting data (GDPR/PECR). |
| **[Cyber-Resilience Act (CRA)](../eu/cra-overview.md)** | The CRA is the EU's equivalent of PSTI but is significantly broader in scope and detail. A product compliant with the CRA will almost certainly meet PSTI's requirements, but manufacturers must formally ensure compliance with both regimes if selling in both markets. |
| **[Radio Equipment Directive (RED)](../eu/red-overview.md)** | The RED's cybersecurity requirements overlap with PSTI, particularly on aspects of network protection and data security. However, PSTI's focus is on a specific, narrow set of baseline security configurations (passwords, CVD, support period). |

---

## 2. Scope – Which products are in?

The PSTI regime applies to "relevant connectable products" made available to consumers in the UK. A product is considered "connectable" if it has an internet-connection capability (e.g., Wi-Fi, Ethernet) or a network-connection capability (e.g., Bluetooth), and is not explicitly exempted.

The 2023 Regulations **exempt** several product categories from the security requirements:
- Products for the Northern Ireland market
- Charge points for electric vehicles
- Medical devices
- Smart meter products
- Computers (desktops, laptops, and tablets that do not have cellular connectivity)

---

## 3. PSTI Requirements & How to Implement Them

### 3.1 The Three Core Security Requirements
The 2023 Regulations impose three main security requirements on manufacturers. The table below translates these legal obligations into practical engineering tasks and links them to the relevant implementation guides in this handbook.

| Requirement & Legal Basis | Interpretation & Engineering Tasks | Implementation Guides |
|---|---|---|
| **1. Ban on universal default passwords**<br/>[Regs. Schedule 1][psti_regs_sched1] | Products must **not** be supplied with a default password that is universal or easily guessable. Passwords must be unique per-device or defined by the user. | [Secure Configuration & Hardening](../../implementation/build-phase/secure-configuration.md) |
| **2. Provide a public point of contact**<br/>[Regs. Schedule 2][psti_regs_sched2] | Manufacturers must provide a public, clear, and accessible contact point for security researchers and others to report vulnerabilities. | [Vulnerability Disclosure](../../implementation/operate-phase/vulnerability-disclosure.md) |
| **3. State the minimum support period**<br/>[Regs. Schedule 3][psti_regs_sched3] | Manufacturers must publish the minimum length of time for which they will provide security updates. This "defined support period" must be made available to consumers. | [User Documentation Guide](../../implementation/build-phase/user-documentation.md)<br/>[Patch Cadence](../../implementation/operate-phase/patch-cadence.md) |

### 3.2 Statement of Compliance & Other Duties
Beyond the direct security requirements, the Act imposes several crucial duties on manufacturers.

| Obligation | Description | Legal Basis |
|---|---|---|
| **Statement of Compliance** | Manufacturers **must** produce a "Statement of Compliance" for their products. This document confirms the product meets the security requirements and must include the defined support period. | [Act Part 1, § 17][psti_act_s17]<br/>[Regs. Schedule 4][psti_regs_sched4] |
| **Duty to Investigate** | If a manufacturer becomes aware of a potential compliance failure, they have a duty to investigate it without undue delay. | [Act Part 1, § 14][psti_act_s14] |
| **Duty to Act & Notify** | Following an investigation, manufacturers must take appropriate action to remedy any failure. If the product presents a serious risk, they must notify the enforcement authority. | [Act Part 1, § 15-16][psti_act_s15] |
| **Record Keeping** | Manufacturers must maintain records of investigations into potential compliance failures for at least 10 years. | [Act Part 1, § 18][psti_act_s18] |

---

## 4. How is PSTI Enforced?

The Act gives the enforcement authority (the Office for Product Safety and Standards) significant powers to ensure compliance. These include issuing compliance, stop, and recall notices.

The authority can also issue significant monetary penalties for non-compliance. The Act sets a maximum penalty of **£10 million** or **4% of the company's qualifying worldwide revenue**, whichever is greater ([Act Part 1, § 37][psti_act_s37]).


<!-- Citations -->
[psti_act_2022]: https://www.legislation.gov.uk/ukpga/2022/46
[psti_regs_2023]: https://www.legislation.gov.uk/uksi/2023/1007
[psti_act_s14]: https://www.legislation.gov.uk/ukpga/2022/46/section/14
[psti_act_s15]: https://www.legislation.gov.uk/ukpga/2022/46/section/15
[psti_act_s17]: https://www.legislation.gov.uk/ukpga/2022/46/section/17
[psti_act_s18]: https://www.legislation.gov.uk/ukpga/2022/46/section/18
[psti_act_s37]: https://www.legislation.gov.uk/ukpga/2022/46/section/37
[psti_regs_sched1]: https://www.legislation.gov.uk/uksi/2023/1007/schedule/1
[psti_regs_sched2]: https://www.legislation.gov.uk/uksi/2023/1007/schedule/2
[psti_regs_sched3]: https://www.legislation.gov.uk/uksi/2023/1007/schedule/3
[psti_regs_sched4]: https://www.legislation.gov.uk/uksi/2023/1007/schedule/4