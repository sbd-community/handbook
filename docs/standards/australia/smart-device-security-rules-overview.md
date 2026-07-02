---
title: "Smart Device Security Rules (Australia)"
sidebar_label: "Smart Device Security Rules"
sidebar_position: 1
tags: [australia, smart-devices, iot, cyber-security-act, secure-by-design]
---

# Australian Smart Device Security Rules

## 1. Why the Rules matter now

Australia's **Cyber Security (Security Standards for Smart Devices) Rules 2025** introduce mandatory baseline cyber security requirements for most consumer-grade smart devices supplied in Australia. They are made under Part 2 of the **Cyber Security Act 2024**, which establishes the legal framework for security standards for relevant connectable products.

The Rules commenced on **4 March 2026**, after a 12-month transition period. Products manufactured before that date are not required to comply with the security standards, but in-scope products manufactured on or after that date must meet the new requirements.

::::info Official texts and guidance
- **Cyber Security Act 2024**: [Federal Register of Legislation][au_cyber_security_act].
- **Cyber Security (Security Standards for Smart Devices) Rules 2025**: [Federal Register of Legislation][au_smart_device_rules].
- **Department of Home Affairs guidance**: [Security Standards for Smart Devices][homeaffairs_guidance].
::::

**Timeline of key dates**

| Date | Event |
| :--- | :--- |
| **2024-11-29** | Cyber Security Act 2024 receives assent. |
| **2025-03-04** | Smart Device Security Rules are registered. |
| **2026-03-04** | Security standards commence for in-scope products manufactured on or after this date. |

**Relationship to other standards**

| Standard / law | How it interacts with the Australian Rules |
| :--- | :--- |
| **[UK PSTI Act](../uk/psti-overview.md)** | The Australian Rules are the closest Australian equivalent to the UK's PSTI security requirements. Both focus on baseline consumer-device controls: passwords, vulnerability reporting, and support-period transparency. |
| **[ETSI EN 303 645](../global/en303645-overview.md)** | The Rules reflect the first three core consumer IoT security outcomes in EN 303 645: no universal default passwords, vulnerability disclosure, and software update transparency. |
| **[Cyber-Resilience Act (CRA)](../eu/cra/index.md)** | The CRA is broader and applies to a wider set of products with digital elements. A manufacturer preparing for CRA obligations will usually already be addressing the engineering controls needed for the Australian baseline, but still needs Australia-specific statements of compliance and scope checks. |

## 2. Scope - Which products are in?

The Rules apply to **consumer-grade relevant connectable products**. In practical terms, this means most smart devices manufactured on or after **4 March 2026** that are intended for personal, domestic, or household use and acquired by consumers in Australia.

The Department of Home Affairs guidance lists common excluded products, including:

- Desktop computers
- Laptops
- Smartphones
- Tablet computers

Section 8 of the Rules contains the complete list of exempted products. Manufacturers and suppliers should check that list early, especially for products that may already be regulated under another product-safety or sector-specific regime.

## 3. Requirements and how to implement them

### 3.1 The three core security standards

The Rules impose three practical baseline requirements. Each maps cleanly to existing implementation work in this handbook.

| Requirement | Interpretation and engineering tasks | Implementation guides |
| :--- | :--- | :--- |
| **1. No universal default passwords**<br/>[Rules Schedule 1, Part 1, clause 2][au_smart_device_rules] | Passwords for the device's hardware or pre-installed software must be unique per product or defined by the user, except for permitted factory-default states. Avoid shared admin credentials, hard-coded support passwords, and predictable password generation. | [Unique Device Identity](../../implementation/build-phase/unique-device-identity.md)<br/>[Secure Configuration & Hardening](../../implementation/build-phase/secure-configuration.md) |
| **2. Publish a way to report security issues**<br/>[Rules Schedule 1, Part 1, clause 3][au_smart_device_rules] | Manufacturers must publish a means for security issues to be reported and provide status updates on resolution. Treat this as a coordinated vulnerability disclosure process, not just a generic support inbox. | [Vulnerability Disclosure](../../implementation/operate-phase/vulnerability-disclosure.md) |
| **3. Publish support-period and update information**<br/>[Rules Schedule 1, Part 1, clause 4][au_smart_device_rules] | Manufacturers must publish how long the product will receive security updates, including an end date. Product teams need a defined support period before launch and a process for keeping user-facing support information current. | [User Documentation](../../implementation/build-phase/user-documentation.md)<br/>[Patch Cadence](../../implementation/operate-phase/patch-cadence.md) |

### 3.2 Statement of compliance duties

The Act and Rules also require in-scope products to be supplied with a **statement of compliance**. The statement is the product-level declaration that the relevant security standard has been met.

At minimum, teams should treat the statement as part of the product's release evidence:

- Identify the product, manufacturer, and supplier details used for the Australian market.
- Record which security standard applies and how each requirement was met.
- Link to evidence for password design, vulnerability reporting, and support-period publication.
- Retain the statement for the period required by the Rules.

Use the [Audit Evidence Pack](../../resources/policy-and-evidence/audit-evidence-pack.md) to keep the statement of compliance and supporting artefacts together.

## 4. Practical compliance checklist

Before supplying an in-scope smart device in Australia, confirm that:

- The product is in scope and not exempt under section 8 of the Rules.
- No non-factory-default state uses a universal default password.
- The vulnerability reporting channel is public, monitored, and tied to a triage process.
- Support-period information is public, clear, and includes an end date for security updates.
- The statement of compliance accompanies the product and is retained as required.
- Product, firmware, support, and compliance teams know who owns each ongoing obligation.

## 5. How this fits into a global baseline

For manufacturers already targeting the UK, EU, or broader international markets, the Australian Rules should be treated as another jurisdiction-specific expression of the same baseline Secure-by-Design expectations. The engineering work is familiar; the main local tasks are scope classification, public support-period wording, and statement-of-compliance evidence.

<!-- Citations -->
[au_cyber_security_act]: https://www.legislation.gov.au/C2024A00098/asmade/text "Cyber Security Act 2024"
[au_smart_device_rules]: https://www.legislation.gov.au/F2025L00276/asmade/text "Cyber Security (Security Standards for Smart Devices) Rules 2025"
[homeaffairs_guidance]: https://www.homeaffairs.gov.au/ABOUT-US/OUR-PORTFOLIOS/CYBER-SECURITY/SECURITY-STANDARDS-FOR-SMART-DEVICES "Department of Home Affairs - Security Standards for Smart Devices"
