---
title: "What is Secure-by-Design?"
sidebar_position: 1
tags: [secure-by-design, cra, psti, product-security, sbd, sdd]
---

# What is Secure-by-Design?

**Secure-by-Design (SbD)** is a foundational shift in product development. It mandates that security is a core business requirement, integrated from the very first stages of design and maintained throughout the entire product lifecycle. It is not a technical feature to be added on later.

This approach marks a fundamental change in responsibility. As CISA, the US Cybersecurity & Infrastructure Security Agency, states, the goal is to move away from a system where the "cybersecurity burden is placed disproportionately on the shoulders of consumers and small organizations" and towards a future where technology providers "take ownership at theexecutive level to ensure their products are Secure-by-Design" ([CISA](../standards/us/cisa-sbd-principles.md)).

## 1. Why It Matters: The Regulatory & Standards Shift

Secure-by-Design is no longer just a best practice; it is rapidly becoming a legal and commercial requirement for placing products on the market. Major global economies and standards bodies are codifying these principles.

-   The **[EU Cyber-Resilience Act (CRA)](../standards/eu/cra-overview.md)** establishes rigorous security standards for all "products with digital elements" sold in the EU, making SbD the starting point for compliance.
-   The **[UK's Product Security and Telecommunications Infrastructure (PSTI) Act](../standards/uk/psti-overview.md)** legally requires manufacturers of consumer connectable products to follow a set of security principles.
-   The **[EU NIS 2 Directive](../standards/eu/nis2-overview.md)** requires essential service operators to manage supply chain risk, implicitly demanding that their suppliers (i.e., device makers) follow Secure-by-Design practices.
-   The **[IEC 62443 series](../standards/global/iec62443-overview.md)** provides a framework for securing Industrial Automation and Control Systems (IACS) that is rooted in a security lifecycle approach.
-   The **[FDA's Cybersecurity Guidance](../standards/us/fda-cybersecurity-overview.md)** in the US requires medical device manufacturers to implement a Secure Product Development Framework (SPDF) from design to end-of-life.

These regulations signal a clear international trend: manufacturers are now legally accountable for the security of their products.

## 2. Core Principles of Secure-by-Design

While specific requirements vary, the underlying philosophy of Secure-by-Design is consistent across international guidance.

### Principle 1: Take Ownership
The responsibility for the customer's security rests with the manufacturer, not the user.
- **Executive-Level Priority:** Security must be a primary business consideration, on par with features and time-to-market.
- **Radical Transparency:** Be open about security processes, vulnerability management, and end-of-life policies.

### Principle 2: Build for the Long Term
Products must be designed to be secure by default and resilient over their entire operational lifespan.
- **Secure Defaults:** Ship with secure configurations enabled out-of-the-box, without requiring a consumer to be a security expert.
- **Minimize Attack Surface:** Disable all unnecessary ports, services, and features.
- **Enforce Strong Identity:** Eliminate default passwords and implement secure authentication mechanisms.

### Principle 3: Commit to the Lifecycle
Security does not end when a product ships. Manufacturers must plan for ongoing support.
- **Vulnerability Management:** Have robust processes to receive vulnerability reports and assess risk.
- **Timely Updates:** Be capable of delivering security patches to deployed devices without undue burden on the user.
- **Clear End-of-Life:** Be transparent about the product's support window and security retirement plan.

## 3. How This Handbook Helps

Understanding the principles of Secure-by-Design is the first step. Implementing them is the next. This handbook is designed to bridge that gap.

-   **[Standards & Regulations](./../standards/index.md):** Get plain-English breakdowns of the key legal requirements you need to meet.
-   **[Implementation Guides](./../implementation/index.md):** Find concrete, step-by-step guidance for engineering tasks like secure boot, key management, and creating SBOMs.
-   **[Tools](./../tools/index.md):** Discover the platforms and open-source projects that can help you automate and scale your security practices.

<!-- Citations -->
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements"
[uk_psti_law]: https://www.gov.uk/government/news/new-laws-to-protect-consumers-from-cyber-criminals-come-into-force-in-the-uk "UK Government: New laws to protect consumers from cyber criminals come into force in the UK" 