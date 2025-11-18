---
title: "Cryptography under the Cyber-Resilience Act (CRA)"
sidebar_position: 1
tags: [cra, cryptography, standards, eu, secure-by-design]
---

# Cryptography under the Cyber-Resilience Act (CRA)

## 1. Why cryptography matters under CRA

The **Cyber-Resilience Act (CRA)** is deliberately technology-neutral. It does not name specific algorithms, key sizes, or protocol versions. Instead, Annex I requires manufacturers to protect **confidentiality** and **integrity** using *“state-of-the-art mechanisms”* and to maintain those protections throughout the product's lifecycle ([CRA Annex I § 1(2)(e,f)][cra_annexI], [CRA Art. 6][cra_art6]).

For connected devices, that obligation is unachievable without robust cryptography. In practice, cryptographic choices determine whether you can:

- Encrypt sensitive data at rest and in transit.
- Authenticate devices, users, and updates.
- Protect the integrity of firmware, configuration, and commands.

The CRA does not try to freeze a particular cipher-suite or key length in law. Instead, it relies on **harmonised standards** and related guidance to define what “state-of-the-art” means at any given time. Understanding how those standards are evolving is essential for anyone designing, reviewing, or certifying a CRA-compliant product.

## 2. From RED “best practice” to CRA “state-of-the-art”

The main cryptographic model many manufacturers know today comes from the **Radio Equipment Directive (RED)** and its EN 18031 series of harmonised standards. EN 18031 defines *“best practice cryptography”* in a way that can be interpreted very permissively: as long as a method is widely used and there is no **currently feasible** public attack, it may be considered acceptable.

For long-lived connected devices, this is problematic:

- Algorithms are often known to be weak long before attacks are practical.
- A “currently feasible attack” threshold ignores *store-now-decrypt-later* risks, especially for personal or safety-relevant data.
- Vendors may be incentivised to argue that legacy or proprietary mechanisms remain “best practice” to avoid costly redesigns.

In response, CRA standardisation work is moving towards a **stricter, risk-based interpretation** of Annex I's confidentiality and integrity requirements:

- **Confidentiality** ([Annex I § 1(2)(e)][cra_annexI]) must be protected *“by state-of-the-art mechanisms”*, not merely “commonly used” ones.
- **Integrity** ([Annex I § 1(2)(f)][cra_annexI]) requires that commands, programs, and configuration are protected against unauthorised modification, with a way to detect and respond to corruptions.

Rather than leaving “state-of-the-art” undefined, the CRA ecosystem is converging on a more concrete approach: a centrally maintained set of **Agreed Cryptographic Mechanisms (ACM)** that define which algorithms and parameters are considered acceptable defaults for European products.

## 3. ECCG’s Agreed Cryptographic Mechanisms (ACM)

Under the EU Cybersecurity Act, the **European Cybersecurity Certification Group (ECCG)** maintains an **Agreed Cryptographic Mechanisms (ACM)** document. Version 2.0 already plays a central role in EUCC (the European Common Criteria-based certification scheme), and the same mechanisms are expected to underpin CRA harmonised standards.

At a high level, ACM:

- Distinguishes between **recommended** mechanisms (practical state-of-the-art, typically ≥ 125-bit security) and **legacy** mechanisms (still acceptable for some uses, but with defined depreciation or sunset dates).
- Covers symmetric primitives (e.g., AES, SHA-2, SHA-3, MAC modes), traditional asymmetric schemes (RSA, DH, ECDH, ECDSA), and emerging **post-quantum cryptography (PQC)** mechanisms.
- Aligns with NIST’s publicly standardised algorithms while reflecting European risk appetite and migration timelines.

For CRA, the emerging model looks like this:

- **Secure defaults must come from the ACM “recommended” set.** These are the only mechanisms that can safely be used out-of-the-box for Internet-connected devices.
- **Legacy mechanisms remain available**, but typically only for:
  - Interoperability with older systems.
  - Access to historic encrypted or signed data.
  - Transitional scenarios where a complete upgrade in one step is not feasible.
- **Non-listed or bespoke mechanisms** are still possible in principle, but they carry a higher burden of proof. In many cases they will:
  - Push the product into a higher CRA risk class or
  - Require third-party assessment rather than self-assessment.

The practical effect for manufacturers is that cryptographic flexibility is still possible, but the **default path of least resistance** is to use ACM-recommended algorithms and parameters everywhere you can.

## 4. What this means for CRA product classes

The CRA splits products into four risk tiers (Default, Important Class I, Important Class II, and Critical), which in turn determine the expected conformity assessment route. Cryptography interacts with these tiers in two important ways:

- **Default-category products** can usually follow a self-assessment route (**Module A**) if they use standard, ACM-aligned cryptographic libraries and follow the horizontal CRA standards.
- **Important and Critical products** are more likely to face third-party evaluation and formal testing, where any deviation from ACM recommendations or harmonised standards will attract scrutiny.

In practice:

- If you are building a **default-category consumer device**, you should:
  - Use widely deployed, ACM-recommended building blocks (TLS 1.2/1.3 with strong ciphers, standard public-key algorithms, modern hash functions).
  - Avoid custom or obscure cryptographic constructions unless there is a compelling, well-documented reason.
- If you are building an **Important or Critical product** (e.g., VPN, router, smart lock, HSM), you should:
  - Assume that your cryptographic design and implementation will be reviewed against ACM and relevant vertical standards.
  - Plan for **crypto agility** over the product’s support period so you can adopt new recommended algorithms and retire legacy ones as ACM evolves.

## 5. How to use this handbook

This page is a conceptual bridge between CRA’s legal text and the practical engineering work of choosing, implementing, and operating cryptography in connected devices.

To turn these ideas into concrete steps:

- **Understand the obligations:** Start with the [CRA Overview](../../standards/eu/cra-overview.md), especially the Annex I tables mapping confidentiality and integrity requirements to engineering tasks.
- **Design your cryptography stack:** Use the build-phase implementation guides to design and implement cryptography in your product:
  - [Key Provisioning & Storage](../../implementation/build-phase/key-provisioning.md) – how to generate, provision, and protect keys.
  - [Secure Boot](../../implementation/build-phase/secure-boot.md) – how to enforce integrity of firmware and configuration.
  - [Data Privacy & Secure Deletion](../../implementation/build-phase/data-privacy.md) – how to protect long-lived data against store-now-decrypt-later risks.
  - [Secure Configuration & Hardening](../../implementation/build-phase/secure-configuration.md) – how to choose secure-by-default protocol and cipher configurations.
- **Prepare for evolution:** Track updates to ACM and CRA harmonised standards, and design your products with enough agility to swap algorithms or increase key sizes during the support period without a full redesign.

As the CRA standards and ACM guidance mature, we will extend this section with more detailed examples and pointers to post-quantum cryptography (PQC) transition resources.

<!-- Citations -->
[cra_art6]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_6 "CRA Article 6 – Essential requirements"
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements"


