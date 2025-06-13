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
*Market-surveillance authorities* → gain power to sample, test, and order withdrawals or recalls of insecure products ([CRA Ch. IV][cra_chIV]).

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

### 2.1 Statutory definition

A **product with digital elements (PDE)** is *"any software or hardware product, and its remote data-processing solution, that is directly or indirectly connected to another device or network"* ([Art 3 § 1][cra_art3]).

A **remote data-processing solution** is the cloud or back-end essential to the PDE's core function ([Art 3 § 2][cra_art3]). Stand-alone SaaS without a hardware or software client **is not** a PDE.

### 2.2 In-scope examples (non-exhaustive)

| Category | Example PDE | Why it falls in scope |
|----------|-------------|-----------------------|
| Consumer IoT | Smart lock, robot vacuum, wearable fitness band | Network-connected + embedded software ([Art 3 § 1][cra_art3]) |
| Enterprise & IT | Office router, managed switch, remote-access VPN client | Annex III lists "network management" devices as critical ([Annex III][cra_annexIII]) |
| Industrial | Programmable-logic controller (PLC), smart meter | Critical infrastructure devices fall under Annex III class II ([Annex III][cra_annexIII]) |
| Software-only | Desktop password manager, mobile messaging app | Stand-alone software placed on the market → PDE by definition ([Art 3 § 1][cra_art3]) |
| Firmware | Microcontroller firmware blob sold to OEMs | Firmware is expressly software in scope ([Art 3 § 1][cra_art3]) |

### 2.3 Out-of-scope & special regimes

| Excluded or separate regime | Legal reason |
|-----------------------------|--------------|
| Medical devices | Already covered by **MDR** 2017/745 ([CRA Art 2 § 2 a][cra_art2]) |
| Automotive ECUs | Covered by Vehicle Type-Approval rules ([CRA Art 2 § 4][cra_art2]) |
| Aviation & drones | EASA cyber rules override ([CRA Art 2 § 4 f][cra_art2]) |
| Defence & national security items | Excluded ([CRA Art 2 § 5][cra_art2]) |
| Non-commercial OSS distributed "as is" | Exempt when no commercial support ([CRA Recital 10][cra_rec10]) |
| Pure SaaS (no local client) | Not a PDE – remote data processing alone not sufficient ([Art 3 § 2][cra_art3]) |

### 2.4 Conformity-assessment classes (Annex III)

| Class | Typical devices | Assessment route |
|-------|-----------------|------------------|
| **Class I** (default risk) | Smart bulbs, fitness bands, desktop apps | Self-assessment (Module A) |
| **Class II** (“critical”) | Routers, firewalls, PLCs, smart meters | Notified-Body audit per Annex III ([Annex III][cra_annexIII]) |

> **Shortcut:** If your device is in an Annex III list or has a *direct* network-management function, assume **Class II** until proven otherwise.

---

## 3 Secure-by-design principles baked into the CRA

| Principle | Build-phase activity | Operate-phase activity |
|-----------|---------------------|------------------------|
| **No known exploitable vulns** (Annex I §1(2)(a)) | CVE scan in CI/CD, fail build on CVSS ≥ 7 HIGH | Continuous VEX + 24 h triage |
| **Secure configuration by default** (Annex I §1(2)(c)) | Hardened kernel, services disabled | Remote factory-reset workflow |
| **Cryptographic integrity** | Secure-Boot chain, key injection | Signed OTA with rollback guard |
| **Co-ordinated vulnerability disclosure (CVD)** | Publish `CVD.md` and `security.txt` | 90-day remediation SLA |

---

## 4 Annex I essentials → engineering tasks

| Clause (abridged) | Build-phase action | Operate-phase action | Evidence artefact |
|-------------------|--------------------|----------------------|-------------------|
| §1(2)(a) "No exploitable vulnerabilities" | SBOM diff & scan | Issue VEX within 24 h | SBOM + scan report |
| §1(2)(c) "Secure-by-default config" | Hardened defaults | Cust. reset to factory | Config manifest |
| §2(5) "CVD policy" | Publish CVD policy | Track disclosure KPI | CVD log |
| §1(2)(f) "Logging & monitoring" | Enable tamper-proof logs | Retain SIEM ≥ 18 m | Log-pipeline diagram |

*(A full clause-by-clause table will ship in our upcoming CRA Gap-Assessment workbook.)*

---

## 5 Clause-by-clause breakdown — *Coming soon*

## 6 Practical gap-assessment workflow — *Coming soon*

## 7 Ready-to-use templates & checklists — *Coming soon*

## 8 Frequently asked questions — *Coming soon*

## 9 Next steps & further reading — *Coming soon*

---

### Authoritative reference  
Consolidated CRA text on EUR-Lex → [https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120)


[cra_oj]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02024R2847-20241120 "CRA Official Journal – OJ"
[cra_consolidated]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02024R2847-20241120 "CRA consolidated text"
[cra_chIV]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#cpt_IV "CRA Chapter IV – Notification of Conformity Assessment Bodies"
[cra_art2]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_2 "CRA Article 2 – Scope"
[cra_art3]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_3 "CRA Article 3 – Definitions"
[cra_art14]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_14 "CRA Article 14 – Reporting obligations of manufacturers"
[cra_art16]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_16 "CRA Article 16 – Single reporting platform"
[cra_art18]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_18 "CRA Article 18 – Authorised representatives"
[cra_art19]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_19 "CRA Article 19 – Obligations of importers"
[cra_art20]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_20 "CRA Article 20 – Obligations of distributors"
[cra_art28]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_28 "CRA Article 28 – EU declaration of conformity"
[cra_art29]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_29 "CRA Article 29 – General principles of the CE marking"
[cra_art30]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_30 "CRA Article 30 – Rules and conditions for affixing the CE marking"
[cra_art43]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_43 "CRA Article 43 – Notification procedure"
[cra_art64]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_64 "CRA Article 64 – Penalties"
[cra_art71]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_71 "CRA Article 71 – Entry into force & application"
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements"
[cra_annexIII]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_III "CRA Annex III – Critical product classes"
[cra_rec10]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202402847#rct_10 "CRA Recital 10 – OSS without commercial support"
[cra_rec15]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202402847#rct_15 "CRA Recital 15 – NIS 2 interplay"
[cra_rec19]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202402847#rct_19 "CRA Recital 19 – Software in scope"
[cra_rec30]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202402847#rct_30 "CRA Recital 30 – RED reference"
[cra_rec89]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202402847#rct_89 "CRA Recital 89 – CE reference"
[nis2_art21]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022L2555#art_21 "Cybersecurity risk-management measures"
[red_dir]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32014L0053 "Directive 2014/53/EU (Radio Equipment Directive) – full text"
[red_del]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R0030 "Delegated Regulation (EU) 2022/30 – security clauses for radio equipment"

