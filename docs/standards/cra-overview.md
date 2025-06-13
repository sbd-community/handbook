---
title: Cyber-Resilience Act (CRA)
sidebar_position: 1
tags: [cra, compliance, eu, secure-by-design]
---
# Cyber-Resilience Act (CRA)

## 1. Why the CRA matters now

The **Cyber-Resilience Act (CRA)**—Regulation (EU) **2024/2847**—is the EU’s first horizontal law that *legally mandates secure-by-design* for every **“product with digital elements” (PDE)**.

| CRA milestone                                        | Legal source | Date                                                            |
| ---------------------------------------------------- | ------------ | --------------------------------------------------------------- |
| Text adopted by Parliament & Council                 | Art. 75      | **2024-10-23**                                                  |
| Published in the *Official Journal* (OJ L 2024/2847) | OJ link      | **2024-11-20** ([eur-lex.europa.eu][1])                         |
| Regulation entered into force (Art. 76 §1 + 20 days) | Art. 76      | **2024-12-10** ([eur-lex.europa.eu][1], [eur-lex.europa.eu][2]) |
| Main obligations apply (24-month “grace” + 20 d)     | Art. 76 §2   | **2027-12-11** ([eur-lex.europa.eu][2])                         |

**What changes on 11 Dec 2027?**

* You may not place *any* new PDE on the EU market unless it conforms to CRA Annex I and Annex II requirements.
* **Market Surveillance Authorities** can force withdrawals or recalls of non-compliant products (Art. 41–45).
* **Penalties**—set by each Member State but capped in the CRA—can reach **€15 000 000** *or* **2.5 % of global annual turnover**, whichever is higher (Art. 53 §2). ([eur-lex.europa.eu][3])

> **Take-away:** If your average embedded design cycle is ≥ 30 months, the 24-month grace period is already half-gone.

**Relationship to other EU laws**

| Law                             | How it interacts with CRA                                                                                                              |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **NIS 2 Directive**             | Governs *organisational* cyber-risk; CRA covers *product* security. Manufacturers of NIS-2 “essential” entities must comply with both. |
| **RED Delegated Act (2022/30)** | Covers *radio* devices; CRA supersedes for broader security scope but RED requirements still apply to RF interfaces.                   |
| **CE marking**                  | CRA adds a new CE presumption—compliance proof now needs security evidence (risk assessment, Annex I mapping).                         |

<small>Authoritative text (consolidated): EUR-Lex ELI [https://data.europa.eu/eli/reg/2024/2847/oj](https://data.europa.eu/eli/reg/2024/2847/oj)</small>

[1]: https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng "Regulation - 2024/2847 - EN - EUR-Lex"
[2]: https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng "Regulation - 2024/2847 - EN - EUR-Lex"
[3]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX%3A52022PC0454 "proposed Cyber Resilience Act - EUR-Lex - European Union"

---

## 2 Scope – which products are in?

> **PDE** = any hardware or software whose core function depends on data processing (CRA Art 3).

| Included | Exempt / special regime |
|----------|------------------------|
| Consumer IoT (smart locks, wearables) | Medical devices (MDR) |
| Industrial controllers, PLCs | Classified defence products |
| Stand-alone software & mobile apps | OSS distributed **without** commercial support |
| Cloud-connected PDEs | Legacy devices placed on the market **before 2025-01-10** |

### 2.1 Conformity-assessment classes

| Class | Example devices | Assessment route |
|-------|-----------------|------------------|
| **Class I** (lower risk) | Smart bulbs, activity trackers | Manufacturer self-assessment |
| **Class II** (critical) | Industrial PLCs, smart meters, routers | Notified-Body security audit |

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
| §1(2)(a) “No exploitable vulnerabilities” | SBOM diff & scan | Issue VEX within 24 h | SBOM + scan report |
| §1(2)(c) “Secure-by-default config” | Hardened defaults | Cust. reset to factory | Config manifest |
| §2(5) “CVD policy” | Publish CVD policy | Track disclosure KPI | CVD log |
| §1(2)(f) “Logging & monitoring” | Enable tamper-proof logs | Retain SIEM ≥ 18 m | Log-pipeline diagram |

*(A full clause-by-clause table will ship in our upcoming CRA Gap-Assessment workbook.)*

---

## 5 Clause-by-clause breakdown — *Coming soon*

## 6 Practical gap-assessment workflow — *Coming soon*

## 7 Ready-to-use templates & checklists — *Coming soon*

## 8 Frequently asked questions — *Coming soon*

## 9 Next steps & further reading — *Coming soon*

---

### Authoritative reference  
Consolidated CRA text on EUR-Lex → [https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847)
