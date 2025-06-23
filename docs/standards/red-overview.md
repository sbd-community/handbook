---
title: Radio Equipment Directive (RED)
sidebar_position: 3
tags: [red, compliance, eu, radio]
---
# Radio Equipment Directive (RED)

## 1. Why the RED cyber rules matter now

The **Radio Equipment Directive (RED)** cybersecurity rules are defined by two key legal acts. First, the main **Directive 2014/53/EU** established the framework and created dormant security clauses in **[RED Art. 3 § 3(d-f)][red_art3]**. Second, a subsequent **Delegated Regulation (EU) 2022/30** *activated* these clauses for a wide range of consumer products, making them legally mandatory.

From **1 August 2025**, any internet-connected radio device, any product that can process personal data, or any connected toy must meet these essential requirements to receive a CE mark ([Delegated Act Art. 3][red_del_act_art3]). This regulation acts as a precursor to the broader Cyber-Resilience Act (CRA), but with a compliance deadline that is over two years earlier.

:::info Official texts
- **Official Journal (Directive)** – Legally binding text of Directive 2014/53/EU as published on 22 May 2014: [OJ:L:2014:153 HTML][red_dir].
- **Official Journal (Delegated Act)** – Activates the security requirements for specific product classes: [CELEX:32022R0030 HTML][red_del_act].
- **Consolidated Version (RED)** – Integrates subsequent corrections and amendments: [CELEX:02014L0053-20241228 HTML][red_consolidated].
- **Amendment to Delegated Act** – Postponed the application date to 1 Aug 2025: [OJ:L_202302444 HTML][red_del_act_amend].

The consolidated version is easier for clause citations, but in case of doubt the official journal prevails.
:::

**Timeline of Key Dates**

| Date | Event | Legal/Standard Reference |
| :--- | :--- | :--- |
| **2022-01-12** | Delegated Regulation (EU) 2022/30 is published, activating RED's security articles. | [Delegated Act][red_del_act] |
| **2022-07-12** | A corrigendum is published, postponing the compliance deadline by one year. | [Corrigendum][red_del_act_corr] |
| **2025-01-30** | Harmonised standards (e.g., EN 18031 series) expected to be cited in the OJEU. | [Standardisation Mandate M/585][std_mandate_m585] |
| **2025-08-01** | **Compliance is mandatory.** Products placed on the market must meet the essential requirements. | [Delegated Act Art. 3][red_del_act_art3], [OJ:L_202302444 HTML][red_del_act_amend] |

**The 1 August 2025 Deadline**  
After this date, manufacturers placing relevant radio equipment on the EU market for the first time must demonstrate compliance with the new security requirements. This involves:
*   Updating the EU Declaration of Conformity to reference the harmonised standards for [RED Art. 3 § 3(d-f)][red_art3].
*   Ensuring the product's technical documentation contains evidence of compliance (e.g., test reports).
*   Market Surveillance Authorities (MSAs) will have the power to check products and order non-compliant devices off the market.

**Relationship to other EU laws**

| Law | How it interacts with RED Security Rules |
|-----|---------------------------|
| **[Cyber-Resilience Act (CRA)](./cra-overview.md)** | The CRA will eventually become the primary horizontal law for product cybersecurity. Once a product complies with the CRA's essential requirements, it will be presumed to comply with [RED Art. 3 § 3(d-f)][red_art3] ([CRA Art. 11][cra_art11]). However, because the RED deadline (Aug 2025) is more than two years earlier than the CRA's (Dec 2027), manufacturers of in-scope radio equipment must first comply with the RED. ([CRA Recital 30][cra_rec30]) |
| **[NIS 2 Directive](./nis2-overview.md)** | NIS 2 governs *organisational* cyber risk for critical sectors, while the RED focuses on *product* security. An organisation might be a NIS 2 "essential entity" and also manufacture products that must comply with the RED. The obligations are cumulative. ([NIS 2 Art. 21 § 2][nis2_art21]) |
| **CE-marking framework** | The RED security requirements are enforced through the CE-marking framework. A product may only bear the CE mark if it complies with *all* applicable legislation, which, from Aug 2025, includes [RED Art. 3 § 3(d-f)][red_art3] for in-scope devices. ([Reg. 765/2008 Art. 30][ce_marking_reg]) |

<!-- Citations -->
[cra_rec30]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202402847#rct_30 "CRA Recital 30 – Relationship with Radio Equipment Directive (RED)"
[cra_art11]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02024R2847-20241120#art_11 "CRA Article 11 – More specific Union law"
[cra_art71]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_71 "CRA Article 71 – Entry into force and application"
[nis2_art21]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022L2555#art_21 "Cybersecurity risk-management measures"
[red_dir]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32014L0053 "Official Journal of Directive 2014/53/EU"
[red_del_act]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R0030 "Delegated Regulation (EU) 2022/30 – activating security clauses"
[red_consolidated]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20241228 "Consolidated text of Directive 2014/53/EU"
[red_del_act_art3]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R0030#art_3 "Delegated Regulation Article 3 - Entry into force and application"
[red_art3]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02014L0053-20241228#art_3 "RED Article 3 – Essential requirements"
[red_del_act_amend]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202302444 "Amendment  to Delegated Regulation (EU) 2022/30"
[std_mandate_m585]: https://ec.europa.eu/growth/tools-databases/mandates/index.cfm?fuseaction=search.detail&id=612 "Standardisation Mandate M/585 for Radio Equipment"
[ce_marking_reg]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32008R0765#art_30 "Regulation (EC) No 765/2008 on CE Marking" 