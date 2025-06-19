---
title: Medical Device Regulation (MDR)
sidebar_label: 'EU MDR 2017/745'
sidebar_position: 7
tags: [mdr, medical, compliance, eu, security]
---
# Medical Device Regulation (EU) 2017/745

## 1. Why the MDR matters now

The **Medical Device Regulation (MDR)**—Regulation (EU) **2017/745**—is the comprehensive legal framework governing the placing on the market, making available, and putting into service of medical devices for human use within the European Union. It replaces the previous Medical Device Directive (MDD) and Active Implantable Medical Devices Directive (AIMDD), establishing a more robust, transparent, and sustainable regulatory system.

A critical feature of the MDR is its emphasis on a lifecycle approach to safety, which includes stringent requirements for software and cybersecurity. For any medical device with digital elements—from hospital infusion pumps to consumer wellness apps that qualify as a medical device—the MDR legally mandates a secure-by-design approach.

:::info Official Texts
- **Official Journal**: [EUR-Lex 32017R0745][mdr_oj]
- **Consolidated Version**: [EUR-Lex 02017R0745-20250110][mdr_consolidated]
:::

**Relationship to other EU laws**

| Law | How it interacts with the MDR |
|-----|---------------------------|
| **[Cyber-Resilience Act (CRA)](./cra-overview.md)** | Products qualifying as medical devices under the MDR are **exempt** from the CRA ([CRA Art. 2 § 2(a)][cra_art2]). The MDR is considered *lex specialis*—more specific legislation that provides its own comprehensive set of cybersecurity rules. |
| **[GDPR](https://gdpr-info.eu/)** | Medical devices often process sensitive health data, making compliance with the General Data Protection Regulation essential. The MDR's security requirements provide a foundation for protecting this data. |

---

## 2. Key Cybersecurity Requirements ([Annex I][mdr_annexI])

The MDR's core cybersecurity obligations are embedded within the **General Safety and Performance Requirements (GSPR)** of **[Annex I][mdr_annexI]**. Manufacturers must demonstrate conformity with these requirements to receive a CE marking.

### 2.1 Risk Management & Information Security
*Legal hook: [MDR Annex I, §2, §3, §4][mdr_annexI]*

The manufacturer must establish, implement, document and maintain a risk management system. This system must address all known and foreseeable risks, including those arising from user error and the use of the device in combination with other systems. Crucially, this explicitly includes information security risks.

### 2.2 Software Lifecycle
*Legal hook: [MDR Annex I, §17.2][mdr_annexI]*

For devices that incorporate software, or for software that is itself a medical device, the software must be developed and manufactured according to the state of the art, taking into account the principles of:
- Development lifecycle
- Risk management, **including information security**
- Verification and validation

This effectively mandates a secure software development lifecycle (Secure SDLC), aligning with principles found in standards like IEC 62443-4-1.

### 2.3 IT Security
*Legal hook: [MDR Annex I, §17.4][mdr_annexI]*

Devices must be "designed and manufactured in such a way as to protect, as far as possible, against unauthorised access that could hamper the device from functioning as intended." This requires manufacturers to implement fundamental security controls like authentication, access control, and measures to prevent tampering.

<!-- Citations -->
[mdr_oj]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32017R0745 "MDR Official Journal"
[mdr_consolidated]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0745-20250110 "MDR Consolidated Version"
[mdr_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0745-20250110#anx_I "MDR Annex I – General Safety and Performance Requirements"
[cra_art2]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_2 "CRA Article 2 – Scope" 