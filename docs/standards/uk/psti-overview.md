---
title: "PSTI Act (UK)"
sidebar_label: "PSTI Act"
sidebar_position: 6
tags: [psti, compliance, uk, security, iot]
---
# UK Product Security and Telecommunications Infrastructure (PSTI) Act 2022

## 1. Why PSTI matters

The **Product Security and Telecommunications Infrastructure (PSTI) Act 2022** establishes a new regulatory framework for the security of consumer connectable products in the UK. The Act gives the government powers to create regulations setting out specific security requirements.

It legally mandates that not just manufacturers, but also other businesses in the supply chain (such as importers and distributors), meet certain obligations. The aim is to protect consumers from insecure technology by ensuring products are secure-by-design. The substantive security requirements came into force on **29 April 2025**.

:::info Official texts
- **PSTI Act 2022 - Full Text**: [Product Security and Telecommunications Infrastructure Act 2022][psti_act_2022].
- **The Product Security and Telecommunications Infrastructure (Security Requirements for Relevant Connectable Products) Regulations 2023**: [The PSTI Security Requirements Regulations 2023][psti_regs_2023].
:::

## 2. Scope & Exceptions

The PSTI regime applies to "relevant connectable products" sold to UK consumers. This is a broad category, but the 2023 Regulations explicitly **exempt** several product types, including:
*   Products made available to be supplied in Northern Ireland
*   Charge points for electric vehicles
*   Medical devices
*   Smart meter products
*   Computers (desktops and laptops)

## 3. Key Security Requirements (from the 2023 Regulations)

The PSTI regime sets out three key security requirements that manufacturers must comply with.

| Requirement | Description | Secure-by-Design in Practice |
| :--- | :--- | :--- |
| **Ban on universal default passwords** | Products must not be supplied with a default password that is universal or easily guessable. | Implement unique, per-device passwords at the point of manufacture. Require users to set a strong password during the initial setup process. |
| **Provide a public point of contact** | Manufacturers must provide a public point of contact so that security researchers and others can report security issues. | Publish a clear and accessible Coordinated Vulnerability Disclosure (CVD) policy. Ensure the contact details are easy to find on your website. |
| **State the minimum support period** | Manufacturers must explicitly state the minimum length of time for which they will provide security updates for the product. | Define a clear support lifecycle for the product and publish this information for consumers at the point of sale and in the product documentation. |

## 4. Key Manufacturer Duties (from the 2022 Act)

Beyond the specific security requirements, the Act itself places several key duties on manufacturers:

- **Statement of Compliance**: Manufacturers **must** produce a "Statement of Compliance" for their products. This document must accompany the product and, according to Schedule 4 of the 2023 regulations, must include:
    - The product type and name
    - The manufacturer's name and address
    - A declaration of conformity with the security requirements
    - The defined support period for the product
- **Duty to Investigate**: If a manufacturer becomes aware of a potential compliance failure, they have a duty to investigate it.
- **Duty to Act**: Following an investigation, manufacturers must take appropriate action to remedy any compliance failure and, if necessary, notify the enforcement authority.
- **Record Keeping**: Manufacturers must maintain records of any investigations into potential compliance failures for at least 10 years.

## 5. Enforcement

The Act gives an enforcement authority (the Office for Product Safety and Standards) significant powers to ensure compliance. These include:

- **Compliance Notices**: Requiring a person to remedy a compliance failure.
- **Stop Notices**: Prohibiting a person from supplying a product.
- **Recall Notices**: Requiring a person to recall a product from the market.
- **Monetary Penalties**: The authority can issue significant fines for non-compliance. The Act sets a maximum penalty of **£10 million** or **4% of qualifying worldwide revenue**, whichever is greater.

## 6. Relationship to other laws

| Law | How it interacts with PSTI |
|-----|----------------------------|
| **UK GDPR & [PECR](./pecr-overview.md)** | PSTI focuses on the technical security of the device itself. GDPR and PECR focus on the protection of personal data processed by the device and its services. A secure device (PSTI) is a prerequisite for protecting data (GDPR/PECR). |
| **[Cyber-Resilience Act (CRA)](../eu/cra-overview.md)** | The Cyber-Resilience Act is the EU's equivalent of PSTI, but with a broader scope and more detailed requirements. A product compliant with the CRA will likely meet PSTI's requirements, but manufacturers selling in both markets must ensure compliance with both regimes. |
| **[Radio Equipment Directive (RED)](../eu/red-overview.md)** | The Radio Equipment Directive's cybersecurity requirements (under Delegated Act 2022/30) overlap with PSTI, particularly on aspects of network protection. However, PSTI's focus is more on the baseline security configuration of the device itself. |

<!-- Citations -->
[psti_act_2022]: https://www.legislation.gov.uk/ukpga/2022/46/contents
[psti_regs_2023]: https://www.legislation.gov.uk/uksi/2023/1007/contents 