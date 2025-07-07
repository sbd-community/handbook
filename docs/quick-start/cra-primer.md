---
title: "CRA 5-Minute Primer"
sidebar_label: "CRA 5-Minute Primer"
sidebar_position: 4
tags: [cra, quick-start, compliance, primer]
---
# CRA 5-Minute Primer

The EU **Cyber-Resilience Act (CRA)** is a landmark law that makes cybersecurity a mandatory, legal requirement for all "products with digital elements" sold in the European Union. For the first time, secure-by-design principles are moving from best practice to a legal obligation, enforced through CE marking.

This primer will help you understand your core obligations in under 5 minutes.

> For a complete breakdown of the regulation, see the [full CRA Overview](../standards/eu/cra-overview.md).

---

## 1. Does the CRA affect my product?

If you can answer **yes** to both of these questions, your product is in scope:

1.  **Does it contain software or firmware?** (This includes everything from a complex operating system to a simple microcontroller).
2.  **Can it connect to another device or network?** (This includes physical connections like USB or logical connections like Bluetooth, Wi-Fi, or a cloud API).

If yes, it is considered a **"product with digital elements" (PDE)** and you must comply.

---

## 2. What are my core obligations?

As a manufacturer, you have two main sets of duties:

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

The CRA has four risk classes. Your product's class determines how you prove compliance.

-   **Default (~90% of products):** Standard products like smart speakers, toys, or general software.
    -   **Action:** You can perform a **self-assessment** and declare conformity yourself.

-   **Important - Class I:** Products with higher security risk, like password managers, browsers, or smart locks.
    -   **Action:** Self-assessment is possible *if* you use harmonised standards. Otherwise, a **third-party audit** is required.

-   **Important - Class II:** A smaller list of high-risk products like firewalls, hypervisors, and industrial control systems.
    -   **Action:** A **mandatory third-party audit** by a Notified Body is required.

-   **Critical:** A very small list of products like Hardware Security Modules (HSMs) or smart meter gateways.
    -   **Action:** May require a **mandatory EU cybersecurity certificate**. 

---

## 4. When does this happen?

The clock is ticking. Here are the key deadlines:

| Date | Requirement |
| :--- | :--- |
| **11 Sep 2026** | **Vulnerability Reporting is Mandatory.** You must have a process to notify ENISA of actively exploited vulnerabilities within 24 hours. |
| **11 Dec 2027** | **Full Compliance is Mandatory.** All products placed on the EU market must be fully compliant with all CRA requirements and bear the CE mark. |

---

## 5. What are the penalties?

Non-compliance can result in significant fines, whichever is higher:
-   Up to **€15 million**
-   Up to **2.5% of your company's total worldwide annual turnover**

Market surveillance authorities will also have the power to order product recalls or market withdrawals.

---

## 6. Your 3-Minute Action Plan

1.  **Inventory & Classify (1 min):** List your products with digital elements and determine their risk class (Default, Class I, etc.). Most will be "Default". For examples, see the [Product Risk Classification table](../standards/eu/cra-overview.md#product-risk-classes).

2.  **Identify Your Biggest Gap (1 min):** Review the core obligations. Is your biggest gap in product security (e.g., no secure boot) or process (e.g., no public vulnerability disclosure policy)? Use the [engineering benchmarks](../standards/eu/cra-overview.md#annex-i-requirements) as a checklist.

3.  **Assign Ownership (1 min):** Assign a person or team to be responsible for leading your CRA compliance effort. Have them read the [full CRA overview](../standards/eu/cra-overview.md) and start a detailed gap analysis.

<!-- Citations -->
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements"