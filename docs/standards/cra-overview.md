---
title: Cyber-Resilience Act (CRA)
sidebar_position: 1
tags: [cra, compliance, eu, secure-by-design]
---
# Cyber-Resilience Act (CRA)

## 1 Why the CRA matters now

The **Cyber-Resilience Act (CRA)** – Regulation (EU) 2024/2847 – is the first EU-wide law that makes secure-by-design a legal requirement for any **product with digital elements (PDE)**.

| Milestone | Date |
|-----------|------|
| Published in the Official Journal | **2024-11-19** |
| Entered into force | **2024-12-10** |
| Obligations apply | **2027-12-11** |

From 11 Dec 2027, non-compliant products can be withdrawn from the EU market.  Fines reach **€15 million or 2.5 % of global turnover**.

---

## 2 Scope – which products are in?

> **PDE** = any hardware or software whose core function depends on data processing (CRA Art 3).

| Included | Exempt / special regime |
|----------|------------------------|
| Consumer IoT (smart locks, wearables) | Medical devices (MDR) |
| Industrial controllers, PLCs | Classified defence products |
| Stand-alone software & mobile apps | OSS distributed **without** commercial support |
| Cloud-connected PDEs | Legacy devices placed on the market **before 2025-01-10** |

### 2.3 Conformity-assessment classes

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
