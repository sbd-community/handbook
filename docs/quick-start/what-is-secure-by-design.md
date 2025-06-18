---
title: "What is Secure by Design?"
sidebar_position: 1
tags: [secure-by-design, cra, psti, product-security, sbd, sdd]
---

# What is Secure by Design?

**Secure by Design (SbD)** is a foundational shift in product development. It mandates that security is a core business requirement, integrated from the very first stages of design and maintained throughout the entire product lifecycle. It is not a technical feature to be added on later.

This approach marks a fundamental change in responsibility. As CISA, the US Cybersecurity & Infrastructure Security Agency, states, the goal is to move away from a system where the "cybersecurity burden is placed disproportionately on the shoulders of consumers and small organizations" and towards a future where technology providers "take ownership at theexecutive level to ensure their products are secure by design" ([CISA][cisa_sbd]).

## Why It Matters: The Regulatory Shift

Secure by Design is no longer just a best practice; it is rapidly becoming a legal requirement for placing products on the market. Major global economies are enacting legislation that codifies these principles into law.

-   The **[EU Cyber-Resilience Act (CRA)](../standards/cra-overview.md)** establishes rigorous security standards for all "products with digital elements" sold in the European Union, making SbD the starting point for compliance by mandating the essential security requirements laid out in **[CRA Annex I][cra_annexI]**.
-   The **[UK's Product Security and Telecommunications Infrastructure (PSTI) Act](../standards/psti-overview.md)** legally requires manufacturers of consumer connectable products to follow a set of security principles, effectively banning default passwords and mandating transparent vulnerability disclosure ([UK PSTI Act][uk_psti_law]).

These regulations signal a clear international trend: manufacturers are now legally accountable for the security of their products.

## Core Principles of Secure by Design

While specific requirements vary, the underlying philosophy of Secure by Design is consistent across international guidance. Key principles include:

1.  **Take Ownership of Product Security:** The responsibility for the customer's security rests with the manufacturer. Security must be a primary consideration, on par with features and time-to-market.
2.  **Build for the Long Term (Secure by Default):** Products must ship with secure configurations enabled out-of-the-box, without requiring a consumer to be a security expert. This includes enforcing strong, unique passwords and disabling all unnecessary attack surfaces.
3.  **Commit to Security Lifecycle Management:** Security does not end when a product ships. Manufacturers must have processes in place to handle vulnerability reports, deliver security updates in a timely manner, and be transparent about the product's end-of-life support.

## How This Handbook Helps

Understanding the principles of Secure by Design is the first step. Implementing them is the next. This handbook is designed to bridge that gap.

-   **[Standards & Regulations](./../standards/index.md):** Get plain-English breakdowns of the key legal requirements you need to meet.
-   **[Implementation Guides](./../implementation/index.md):** Find concrete, step-by-step guidance for engineering tasks like secure boot, key management, and creating SBOMs.
-   **[Tools](./../tools/index.md):** Discover the platforms and open-source projects that can help you automate and scale your security practices.

<!-- Citations -->
[cisa_sbd]: https://www.cisa.gov/securebydesign "CISA: Secure by Design"
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements"
[uk_psti_law]: https://www.gov.uk/government/news/new-laws-to-protect-consumers-from-cyber-criminals-come-into-force-in-the-uk "UK Government: New laws to protect consumers from cyber criminals come into force in the UK" 