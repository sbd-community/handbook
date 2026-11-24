---
title: "CRA 5-Minute Primer"
description: "A five-minute introduction to the EU Cyber Resilience Act: which products with digital elements it covers, core manufacturer duties, and CE marking."
sidebar_label: "CRA 5-Minute Primer"
sidebar_position: 4
tags: [cra, quick-start, compliance, primer]
---
# CRA 5-Minute Primer

The EU **Cyber Resilience Act (CRA)** is a landmark law that makes cybersecurity a mandatory, legal requirement for all "products with digital elements" sold in the European Union. For the first time, secure-by-design principles are moving from best practice to a legal obligation, enforced through CE marking.

This primer will help you understand your core obligations in under 5 minutes.

> For a complete breakdown of the regulation, see the [full CRA Overview](../standards/eu/cra/index.md).

---

## 1. Does the CRA affect my product?

If you can answer **yes** to both of these questions, your product is in scope:

1.  **Does it contain software or firmware?** (This includes everything from a complex operating system to a simple microcontroller).
2.  **Can it connect to another device or network?** (This includes physical connections like USB or logical connections like Bluetooth, Wi-Fi, or a cloud API).

If yes, it is considered a **"product with digital elements" (PDE)** and you must comply.

---

## 2. What are my core obligations?

As a manufacturer, you have two main sets of duties, set out in [CRA Annex I][cra_annexI]:

#### Product Requirements (Secure-by-Design)
-   Ship products without any known exploitable vulnerabilities.
-   Protect the integrity and confidentiality of data.
-   Control access with secure authentication.
-   Minimize the attack surface.

#### Process Requirements (Vulnerability Handling)
-   Have a process to handle vulnerabilities as they are discovered.
-   Deliver security updates to users "without delay."
-   Be transparent about your security support period (minimum 5 years for most products).

---

## 3. How is my product classified?

The CRA has four risk classes. Your product's class determines how you prove compliance. **[Implementing Regulation (EU) 2025/2392][cra_impl_oj]** provides the official technical descriptions of the important and critical product categories.

-   **Default (~90% of products):** Standard products like smart speakers without a virtual assistant, connected toys without social-interaction or location-tracking features, or general software.
    -   **Action:** You can perform a **self-assessment** and declare conformity yourself.

-   **Important - Class I:** Products with higher security risk, like password managers, browsers, or smart locks.
    -   **Action:** Self-assessment is possible *if* you fully apply harmonised standards, common specifications, or a European cybersecurity certification scheme at assurance level 'substantial' or higher. Otherwise, a **third-party audit** is required. The first CRA standards, EN 40000-1-1 and EN 40000-1-2, were published by CEN-CENELEC in November 2026, but no CRA harmonised standard is yet cited in the Official Journal, so none yet gives a presumption of conformity.

-   **Important - Class II:** A smaller list of high-risk products like firewalls, hypervisors, and tamper-resistant microprocessors and microcontrollers.
    -   **Action:** A **mandatory third-party audit** by a Notified Body is required.

-   **Critical:** A very small list of products like Hardware Security Modules (HSMs) or smart meter gateways.
    -   **Action:** May require a **mandatory EU cybersecurity certificate**. 

---

## 4. When does this happen?

Reporting obligations already apply; full application follows in December 2027:

| Date | Requirement |
| :--- | :--- |
| **11 June 2026** | **Notified Bodies.** Rules for notifying the conformity assessment bodies that carry out third-party assessments apply (Chapter IV), so that they can be in place before full application. |
| **11 September 2026** | **Vulnerability Reporting is Mandatory (in force).** You must notify actively exploited vulnerabilities and severe incidents to the CSIRT designated as coordinator and to ENISA through ENISA's Single Reporting Platform, live since 11 September 2026, with an early warning within 24 hours. |
| **11 December 2027** | **Full Compliance is Mandatory.** All products placed on the EU market must be fully compliant with all CRA requirements and bear the CE mark. |

---

## 5. What are the penalties?

Non-compliance can result in significant fines, whichever is higher:
-   Up to **€15 million**
-   Up to **2.5% of your company's total worldwide annual turnover**

Market surveillance authorities will also have the power to order product recalls or market withdrawals.

---

## 6. Your 3-Minute Action Plan

1.  **Inventory & Classify (1 min):** List your products with digital elements and determine their risk class (Default, Class I, etc.). Most will be "Default". For examples, see the [Product Risk Classification table](../standards/eu/cra/index.md#product-risk-classes).

2.  **Identify Your Biggest Gap (1 min):** Review the core obligations. Is your biggest gap in product security (e.g., no secure boot) or process (e.g., no public vulnerability disclosure policy)? Use the [engineering benchmarks](../standards/eu/cra/index.md#annex-i-requirements) as a checklist.

3.  **Assign Ownership (1 min):** Assign a person or team to be responsible for leading your CRA compliance effort. Have them run the [CRA Readiness Gap Analysis](../resources/checklists-and-worksheets/cra-gap-analysis.md), start a [Secure-by-Design Evidence Pack](../resources/policy-and-evidence/audit-evidence-pack.md), and use the [full CRA overview](../standards/eu/cra/index.md) for detailed regulatory context.

<!-- Citations -->
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements"
[cra_impl_oj]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202502392 "Implementing Regulation (EU) 2025/2392 – Technical descriptions for product categories"