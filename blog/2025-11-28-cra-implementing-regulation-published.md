---
title: "CRA Gets Teeth: Technical Definitions for Product Classes Now Official"
authors: [sbd_community]
tags: [cra, standards, eu, compliance, secure-by-design]
---

The European Commission has published **Implementing Regulation (EU) 2025/2392**, providing the detailed technical descriptions that define exactly which products fall into the CRA's "Important" and "Critical" risk categories. This is the first major piece of secondary legislation under the Cyber-Resilience Act, and it removes much of the ambiguity around product classification.

<!-- truncate -->

### Why This Matters

The Cyber-Resilience Act divides products with digital elements into four risk tiers: Default, Important (Class I), Important (Class II), and Critical. The tier determines your conformity assessment route—self-assessment for most products, but mandatory third-party audits for higher-risk categories.

Until now, the CRA's Annexes III and IV listed product _categories_ (e.g., "identity management systems", "firewalls") without defining exactly what those terms meant. Manufacturers were left to interpret scope based on general descriptions.

**Implementing Regulation (EU) 2025/2392** changes that. It provides precise technical descriptions for all 28 product categories across the three higher-risk tiers, making it clear whether your product is in scope.

### What's in the Regulation

The implementing regulation contains three annexes:

| Annex         | Scope                         | Categories                                                                                                  |
| ------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Annex I**   | Important Products — Class I  | 19 categories (identity management, browsers, VPNs, operating systems, smart home devices, wearables, etc.) |
| **Annex II**  | Important Products — Class II | 6 categories (hypervisors, firewalls, tamper-resistant microprocessors, industrial control systems, etc.)   |
| **Annex III** | Critical Products             | 3 categories (HSMs, smartcards/secure elements, smart meter gateways)                                       |

Each category now has a technical description that clarifies scope. For example:

- **Password managers** are defined as software that "stores, generates, and auto-fills credentials".
- **Smart home security products** explicitly include "smart door locks, camera systems, baby monitoring systems, alarm systems, and sensors" when they have security-related functionality.
- **Industrial automation and control systems** are in Class II only when used by entities identified as critical under the NIS 2 Directive.

### Key Takeaways for Manufacturers

1. **Review your product classification.** If you assumed your product was in the Default category, check the new technical descriptions. You may find it falls within a higher tier.

2. **Class I products have a standards escape hatch.** Self-assessment is still possible for Important Class I products _if_ you fully apply the relevant harmonised standards when they are published.

3. **Class II and Critical products require third-party assessment.** There is no self-assessment route for these tiers. Plan for notified-body audits or, for Critical products, potential European cybersecurity certification.

4. **Industrial products now have clearer boundaries.** The regulation distinguishes between industrial monitoring systems (Class I) and safety-critical control systems used by NIS 2 essential entities (Class II).

### Official Text

- **Official Journal**: [OJ:L_202502392](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202502392)

The regulation entered into force on **29 November 2025**.

### What to Do Next

Use the new technical descriptions to classify your products, then follow the appropriate conformity assessment route. For a complete breakdown of all 28 categories and their assessment requirements, see our updated **[CRA Overview](/docs/standards/eu/cra-overview)**.
