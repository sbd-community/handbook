---
title: "CISA Secure by Design Principles"
sidebar_position: 3
tags: [cisa, secure-by-design, sbd, principles, us, guidance]
---
# CISA Secure by Design Principles

## 1. Why this guidance matters

While not a formal standard or regulation, the **[Principles and Approaches for Secure by Design Software][cisa_pdf]** is arguably the most important foundational document for the modern product security movement. Published by the US Cybersecurity & Infrastructure Security Agency (CISA) and co-authored by national cybersecurity agencies from across the globe, it represents a unified international consensus on the philosophy that underpins new legislation like the [EU's Cyber-Resilience Act](../standards/eu/cra-overview.md).

It serves as a manifesto for a fundamental shift in responsibility: moving the burden of security from the consumer to the manufacturer. While the CISA guidance applies broadly to all software manufacturers, this handbook focuses on applying these core principles to the specific challenges of building **connected products**. For any team working with hardware and firmware, this document explains the "why" behind the specific engineering tasks detailed in this handbook.

:::info Official Source
This page provides a summary and interpretation. The full document can be downloaded from CISA:
- **Shifting the Balance of Cybersecurity Risk**: [Principles and Approaches for Secure by Design Software (PDF)][cisa_pdf]
:::

## 2. The Three Core Principles

The guidance is built on three core principles that call on manufacturers to radically rethink their approach to product development.

### Principle 1: Take Ownership of Customer Security Outcomes
The central message is that the responsibility for a customer's security rests with the manufacturer, not the user. Security must be a core business priority, not a feature that can be "bolted on" later or left to the customer to configure.

- **Security is not a luxury:** Features essential for security (like SSO integration or security logs) should not be sold as premium, add-on features. Just as a car includes seatbelts in the base price, security features must be considered a fundamental right for the customer.
- **Invest in safety:** Manufacturers must invest in eliminating entire classes of vulnerabilities (e.g., through memory-safe languages) and robust application hardening, rather than just patching individual bugs as they are discovered.
- **Secure by Default:** Products must be secure out-of-the-box. This means shipping with secure configurations enabled by default, without requiring a customer to be a security expert to protect themselves.

### Principle 2: Embrace Radical Transparency and Accountability
To drive industry-wide improvement, manufacturers should be transparent about their security processes and accountable for their outcomes. The guidance argues that the benefit to defenders from this transparency far outweighs the risk of providing a "roadmap for attackers."

- **Publish security data:** Share aggregate, anonymized data on topics like MFA adoption rates or the use of unsafe legacy protocols to create benchmarks for what "good" looks like.
- **Vulnerability transparency:** Ensure CVEs are complete and accurate, including root cause information (CWE), to help the entire ecosystem learn from security flaws.
- **Be open about processes:** Publish details about your Secure Software Development Lifecycle (SDLC), vulnerability disclosure policies, and roadmaps for security improvements (e.g., memory safety adoption).

### Principle 3: Lead from the Top
For security to become a core business requirement, it must be driven by executive leadership. It is a business priority that must be managed with the same rigour as financial objectives.

- **Executive sponsorship:** A top business executive should be empowered to oversee and drive the Secure-by-Design program.
- **Board-level accountability:** Product security status and customer risk metrics should be reported to the company's board of directors, treating customer safety as a key indicator of corporate performance.
- **Incentivise security:** Reward systems (promotions, bonuses) should be aligned to value and incentivise improvements in customer security, just as they do for feature development or performance goals.

## 3. Next Steps

These principles provide the foundational "why" for the Secure-by-Design movement. The rest of this handbook is dedicated to the "how," with concrete [Implementation Guides](../implementation/index.md) and [Tools](../tools/index.md) to help you apply this philosophy to your connected products.

<!-- Citations -->
[cisa_pdf]: https://www.cisa.gov/sites/default/files/2023-10/SecureByDesign_1025_508c.pdf "Shifting the Balance of Cybersecurity Risk: Principles and Approaches for Secure by Design Software" 