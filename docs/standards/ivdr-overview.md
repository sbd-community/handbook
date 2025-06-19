---
title: In Vitro Diagnostic Regulation (IVDR)
sidebar_label: 'EU IVDR 2017/746'
sidebar_position: 8
tags: [ivdr, medical, compliance, eu, security]
---
# In Vitro Diagnostic Regulation (EU) 2017/746

## 1. Why the IVDR matters now

The **In Vitro Diagnostic Medical Device Regulation (IVDR)**—Regulation (EU) **2017/746**—is the legal framework for making in vitro diagnostic (IVD) medical devices available on the EU market. It replaces the previous IVD Directive (IVDD) and, like the MDR, significantly raises the bar for quality, safety, and traceability.

The IVDR's scope is broad, covering everything from simple test kits to complex laboratory software and instruments. Any IVD that incorporates software or has a digital component must adhere to the regulation's strict cybersecurity requirements, which are designed to ensure patient safety and data integrity.

:::info Official Texts
- **Official Journal**: [EUR-Lex 32017R0746][ivdr_oj]
- **Consolidated Version**: [EUR-Lex 02017R0746-20250110][ivdr_consolidated]
:::

**Relationship to other EU laws**

| Law | How it interacts with the IVDR |
|-----|---------------------------|
| **[Cyber-Resilience Act (CRA)](./cra-overview.md)** | Like the MDR, products qualifying as in vitro diagnostic medical devices under the IVDR are **exempt** from the CRA ([CRA Art. 2 § 2(a)][cra_art2]). The IVDR provides its own specific cybersecurity rules. |
| **[GDPR](https://gdpr-info.eu/)** | IVDs can generate and process vast amounts of sensitive personal health data. The security requirements in the IVDR are critical for fulfilling the data protection obligations of the GDPR. |

---

## 2. Key Cybersecurity Requirements ([Annex I][ivdr_annexI])

The IVDR's cybersecurity requirements are detailed in the **General Safety and Performance Requirements (GSPR)** found in **[Annex I][ivdr_annexI]**. Compliance is mandatory for CE marking. The requirements mirror those in the MDR.

### 2.1 Risk Management & Information Security
*Legal hook: [IVDR Annex I, §2, §3, §4][ivdr_annexI]*

The manufacturer must operate a comprehensive risk management system that identifies and mitigates all foreseeable risks, explicitly including those related to information security and the IT environment in which the device operates.

### 2.2 Software Lifecycle
*Legal hook: [IVDR Annex I, §16.2][ivdr_annexI]*

For IVDs containing software, or for software that is itself an IVD, it must be developed according to the state of the art, incorporating principles of:
- Development lifecycle
- Risk management, **including information security**
- Verification and validation

This mandates a secure software development process throughout the product's life.

### 2.3 IT Security
*Legal hook: [IVDR Annex I, §16.4][ivdr_annexI]*

Devices must be "designed and manufactured in such a way as to protect, as far as possible, against unauthorised access that could hamper the device from functioning as intended." This requires foundational security controls to be designed into the device to prevent unauthorized access or manipulation.

<!-- Citations -->
[ivdr_oj]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32017R0746 "IVDR Official Journal"
[ivdr_consolidated]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0746-20250110 "IVDR Consolidated Version"
[ivdr_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0746-20250110#anx_I "IVDR Annex I – General Safety and Performance Requirements"
[cra_art2]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_2 "CRA Article 2 – Scope" 