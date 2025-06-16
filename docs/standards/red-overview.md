---
title: Radio Equipment Directive (RED)
sidebar_position: 2
tags: [red, compliance, eu, radio]
---
# Radio Equipment Directive (RED)

## 1. Why the RED cyber rules matter now

The **Radio Equipment Directive (RED)** cybersecurity rules are defined by two key legal acts. First, the main **Directive 2014/53/EU** established the framework and created dormant security clauses in **[RED Art. 3 § 3(d-f)][red_art3]**. Second, a subsequent **Delegated Regulation (EU) 2022/30** *activated* these clauses for a wide range of consumer products, making them legally mandatory.

From **1 August 2025**, any internet-connected radio device, any product that can process personal data, or any connected toy must meet these essential requirements to receive a CE mark. This regulation acts as a precursor to the broader Cyber-Resilience Act (CRA), but with a compliance deadline that is over two years earlier.

:::info Official texts
- **Official Journal (Directive)** – Legally binding text of Directive 2014/53/EU as published on 22 May 2014: [OJ:L:2014:153 HTML][red_dir].
- **Official Journal (Delegated Act)** – Activates the security requirements for specific product classes: [CELEX:32022R0030 HTML][red_del_act].
- **Consolidated Version (RED)** – Integrates subsequent corrections and amendments: [CELEX:02014L0053-20241228 HTML][red_consolidated].


The consolidated version is easier for clause citations, but in case of doubt the official journal prevails.
:::

| RED & CRA milestones | Legal basis | Date |
| --- | --- | --- |
| RED Delegated Act (EU) 2022/30 entered into force | [Delegated Act Art. 3][red_del_act_art3] | **2022-02-01** |
| **RED security requirements become mandatory** | [Delegated Act Art. 3][red_del_act_art3] | **2025-08-01** |
| CRA vulnerability & incident reporting applies to manufacturers | [CRA Art. 71 § 2][cra_art71] | **2026-09-11** |
| All CRA requirements apply | [CRA Art. 71 § 2][cra_art71] | **2027-12-11** |

**The 1 August 2025 Deadline**  
After this date, manufacturers placing relevant radio equipment on the EU market for the first time must demonstrate compliance with the new security requirements. This involves:
*   Updating the EU Declaration of Conformity to reference the harmonised standards for [RED Art. 3 § 3(d-f)][red_art3].
*   Ensuring the product's technical documentation contains evidence of compliance (e.g., test reports).
*   Market Surveillance Authorities (MSAs) will have the power to check products and order non-compliant devices off the market.

**Relationship to other EU laws**

| Law | How it interacts with RED Security Rules |
|-----|---------------------------|
| **Cyber-Resilience Act (CRA)** | The CRA will eventually become the primary horizontal law for product cybersecurity. Once a product complies with the CRA's essential requirements, it will be presumed to comply with RED Art. 3(3)(d), (e), and (f). However, because the RED deadline (Aug 2025) is more than two years earlier than the CRA's (Dec 2027), manufacturers of in-scope radio equipment must first comply with the RED. ([CRA Recital 30][cra_rec30]) |
| **NIS 2 Directive** | NIS 2 governs *organisational* cyber risk for critical sectors, while the RED focuses on *product* security. An organisation might be a NIS 2 "essential entity" and also manufacture products that must comply with the RED. The obligations are cumulative. ([NIS 2 Art. 21 § 2][nis2_art21]) |
| **CE-marking framework** (Reg 765/2008) | The RED security requirements are enforced through the CE-marking framework. A product may only bear the CE mark if it complies with *all* applicable legislation, which, from Aug 2025, includes RED Art. 3(3) for in-scope devices. |

---

A full quick-start guide—including scope, timelines, and overlap with the CRA—will appear here soon.

<!-- Shared links -->
[cra_rec30]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202402847#rct_30 "CRA Recital 30 – Relationship with Radio Equipment Directive (RED)"
[cra_art71]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_71 "CRA Article 71 – Entry into force and application"
[nis2_art21]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022L2555#art_21 "Cybersecurity risk-management measures"

<!-- RED-specific links -->
[red_dir]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32014L0053 "Official Journal of Directive 2014/53/EU"
[red_del_act]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R0030 "Delegated Regulation (EU) 2022/30 – activating security clauses"
[red_consolidated]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20241228 "Consolidated text of Directive 2014/53/EU"
[red_del_act_art3]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R0030#art_3 "Delegated Regulation Article 3 - Entry into force and application"
[red_art3]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20241228#art_3 "RED Article 3 – Essential requirements" 