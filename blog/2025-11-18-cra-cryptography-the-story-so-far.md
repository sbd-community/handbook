---
title: "CRA & Cryptography: The Story So Far"
authors: [sbd_community]
tags: [cra, cryptography, standards, eu, secure-by-design]
description: "What the Cyber-Resilience Act means for cryptography in connected devices, and how emerging EU standards are shaping 'state-of-the-art' crypto."
---

The **Cyber-Resilience Act (CRA)** is the EU's first horizontal law that legally mandates **Secure-by-Design** for products with digital elements. It sets clear obligations for confidentiality and integrity, but it deliberately avoids naming specific algorithms or key sizes. That raises an immediate question for device makers:

> *What exactly counts as “state-of-the-art” cryptography under the CRA?*

Inspired by Markku-Juhani O. Saarinen’s paper *“CRA and Cryptography: The Story Thus Far”* ([IACR ePrint 2025/2092](https://eprint.iacr.org/2025/2092)), this post explains how European standardisation work is answering that question – and what it means for your products.

<!-- truncate -->

## 1. CRA is crypto-agnostic by design

The CRA's essential cybersecurity requirements in Annex I are **objective-oriented** and **technology-neutral**. For cryptography, they focus on outcomes rather than specific ciphers:

- Protect confidentiality of stored and transmitted data using **state-of-the-art mechanisms**.
- Protect the integrity of programs, configuration, and commands, and detect corruptions.

This is intentional. Baking specific algorithms into the regulation would freeze today’s cryptography in law and make future migrations (such as the transition to post-quantum cryptography) harder. Instead, CRA delegates the technical detail to **harmonised standards** and related guidance.

Our [CRA Overview](/docs/standards/eu/cra-overview) explains how those Annex I requirements map to concrete engineering tasks and implementation guides.

## 2. The RED “best practice” loophole – and why CRA needs more

Saarinen uses the Radio Equipment Directive (RED) and its EN 18031 series as a cautionary tale. EN 18031 defines “best practice cryptography” in a way that can be read very generously: a **commonly used** method with no **currently feasible** public attack may be treated as acceptable.

For short-lived web services this is already risky; for long-lived connected devices it is worse:

- Algorithms are often known to be weak long before practical attacks emerge.
- A “currently feasible attack” threshold ignores **store-now-decrypt-later** threats.
- Vendors may be tempted to argue that legacy or proprietary mechanisms are still “best practice” to avoid redesign costs.

For CRA, this model is not good enough. Annex I explicitly requires **state-of-the-art** mechanisms, and the associated standardisation request pushes the European standards bodies to give that phrase real technical content.

## 3. Towards an EU “state-of-the-art” model: ACM and allow lists

Under the EU Cybersecurity Act, the **European Cybersecurity Certification Group (ECCG)** maintains a document called **Agreed Cryptographic Mechanisms (ACM)**. Version 2.0 already underpins the EUCC certification scheme for high-assurance products such as HSMs and smartcards.

The same ACM catalogue is now being used as a reference point for CRA:

- **Recommended mechanisms** are considered practical state-of-the-art (typically ≥ 125-bit security).
- **Legacy mechanisms** remain usable in constrained scenarios, but have **sunset dates**.
- New mechanisms can be added as cryptographic research and PQC standards evolve.

The emerging model for CRA products looks like this:

- **Defaults must come from ACM-recommended algorithms and parameters.**
- **Legacy mechanisms** are only acceptable for well-justified use cases (e.g., accessing historic data or interoperating with legacy systems), and even then only during a limited transition window.
- **Non-listed or bespoke mechanisms** are still possible, but they tend to push products towards higher risk classes and/or require third-party assessment.

In other words: cryptographic freedom is not dead, but the path of least resistance for CRA compliance is to use ACM-recommended building blocks everywhere you can.

## 4. How this affects CRA product classes

The CRA divides products with digital elements into four tiers: **Default**, **Important (Class I)**, **Important (Class II)**, and **Critical**. These classes drive the required conformity assessment route – from self-assessment (Module A) to notified-body audits and, at the top end, European cybersecurity certification schemes.

Cryptography interacts with those tiers in two main ways:

- For **Default-category products**, using well-known, ACM-aligned cryptographic libraries and following the horizontal CRA standards makes it much easier to justify a **self-assessment** route.
- For **Important and Critical products**, any deviation from recommended mechanisms will attract scrutiny from notified bodies or certification labs, and may demand extra evidence or compensating controls.

If you make a consumer device that sits in the Default category, this is good news: you don’t need to invent anything exotic. If you make routers, VPNs, smart locks, or security modules in the higher tiers, you should expect your cryptographic design to be examined in detail.

## 5. What this means if you build connected devices

Putting it all together, Saarinen’s analysis leads to a few practical takeaways for manufacturers and integrators:

- **Use standard, ACM-aligned cryptography by default.** Prefer well-reviewed algorithms and parameters from public standards; avoid proprietary ciphers and home-grown constructions.
- **Design for cryptographic agility.** Your product support period will likely outlive today’s recommendations. Build in the ability to add new mechanisms and retire old ones without a forklift upgrade.
- **Treat RED’s EN 18031 as a floor, not a target.** CRA’s state-of-the-art requirement goes beyond “commonly used and not yet broken.” Aim higher than the bare minimum “best practice” definition.
- **Plan ahead for PQC.** The EU’s post-quantum roadmap will influence ACM and, indirectly, CRA expectations. Products with long support periods should start thinking about hybrid and migration paths now.

## 6. Where to go next

We have started incorporating these insights into the handbook:

- **For a deeper reference on cryptography under CRA**, see our new resource page: [Cryptography under the Cyber-Resilience Act](/docs/resources/cryptography/cryptography-under-cra).
- **For the full legal and engineering context**, read the [CRA Overview](/docs/standards/eu/cra-overview), which maps Annex I requirements to implementation guides.
- **For implementation details**, explore build-phase guides such as:
  - [Key Provisioning & Storage](/docs/implementation/build-phase/key-provisioning)
  - [Secure Boot](/docs/implementation/build-phase/secure-boot)
  - [Data Privacy & Secure Deletion](/docs/implementation/build-phase/data-privacy)
  - [Secure Configuration & Hardening](/docs/implementation/build-phase/secure-configuration)

As the CRA harmonised standards and ACM guidance evolve, we will continue to update these materials – and add more concrete cryptographic patterns and examples for connected-device teams.


