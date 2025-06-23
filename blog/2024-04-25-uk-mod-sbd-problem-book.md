---
title: "Mind the Gap: UK's MOD on the Real Challenges of Secure-by-Design"
authors: [sbd_community]
tags: [secure-by-design, uk, strategy, security-culture]
---

The UK's Ministry of Defence (MOD) recently published a thought-provoking document via its Defence Science and Technology Laboratory (Dstl) that every product security leader should read: the **Secure by Design Problem Book**.

<!--truncate-->

While its focus is on military capabilities, the paper does an exceptional job of articulating the deep, systemic challenges that any organization faces when trying to implement Secure-by-Design in the real world. These aren't just technical problems; they are challenges of culture, knowledge, and process.

The MOD's central premise, laid out in its **[Secure by Design Problem Book][sbd_problem_book]**, is that simply mandating Secure-by-Design isn't enough. Success requires a "step change in design thinking about security," and they are candid about the gaps that need to be filled. Let's look at the core problems they've identified and see how they apply to the world of commercial connected devices.

## 1. The Skills Gap: How Do We Up-skill Our Teams?

The MOD's first problem is one of people: how do we ensure everyone involved in building a product—from engineers to project managers—is "suitably qualified and experienced" in security?

This isn't just about hiring a few security experts. It's about creating a shared body of knowledge across different disciplines. The document asks:
> "What subset of knowledge and topics from CyBOK... and related literature and standards... are relevant for 'Secure by Design'?"

This is precisely the question this handbook is designed to answer. By providing clear, role-based guidance, we aim to build that cross-functional understanding:
-   **For Engineers:** Our [Implementation Guides](/docs/implementation) translate high-level security requirements into concrete engineering tasks.
-   **For Product Managers:** The [Quick Start](/docs/quick-start/cra-primer) section and [regulatory overviews](/docs/standards) provide the "why" behind the "what," enabling better planning and prioritization.

## 2. The Knowledge Gap: How Do We Work with Unevenly Distributed Information?

This problem is about the practical realities of information silos. In the MOD's world, it might be classified threat models. In the commercial world, it's often sensitive intellectual property (IP).

The problem book highlights the tension:
> "How can suppliers provide MOD with the assurances it requires without the disclosure of information suppliers consider sensitive or competitive?"

This is a daily reality for anyone working with third-party components or contract manufacturers. The solution lies in standardized, evidence-based artifacts that provide assurance without revealing the "secret sauce":
-   **SBOMs & VEX:** A [Software Bill of Materials (SBOM)](/docs/implementation/build-phase/sbom-vex) provides transparency about components without exposing proprietary source code. A Vulnerability-Exploitability eXchange (VEX) document provides assurance about how you've handled a vulnerability.
-   **Standardized Checklists:** Using a common framework like the [First-Sprint Checklist](/docs/quick-start/first-sprint-checklist) creates a shared language for what "done" looks like.

## 3. The Timing Gap: How Do We Start Security at the Very Beginning?

The MOD correctly identifies that "in practice, a military capability's form and functionality is still emerging at such an early stage." It's hard to secure something that isn't fully defined.

The key is to focus on foundational security decisions that enable, rather than restrict, future development. This is about building security *in*, not bolting it *on*. Our guides focus on these early, high-impact decisions:
-   **[Threat Modeling & Risk Assessment](/docs/implementation/build-phase/threat-modeling):** The very first step is to understand what you're trying to protect, even when the design is still fluid.
-   **[Hardware Root of Trust & Key Provisioning](/docs/implementation/build-phase/key-provisioning):** Making the right choice on your SoC's security capabilities is a foundational decision that shapes everything that follows.

## 4. The Longevity Gap: How Do We Support Security Through Life?

Many defense platforms are operational for decades. While most consumer electronics have shorter lifecycles, the core problem is the same: the security landscape will change, and your product must be able to adapt.

The MOD asks:
> "How can information be drawn directly from capabilities in trials or operations, and used to automate a military capability's continuous risk management approach?"

This is the essence of "DevSecOps" and lifecycle management. The answer lies in building the mechanisms for through-life support from day one:
-   **[Secure OTA Updates](/docs/implementation/build-phase/ota-updates):** A robust and secure update mechanism is non-negotiable for delivering security patches.
-   **[Vulnerability Disclosure & Patch Cadence](/docs/implementation/operate-phase/vulnerability-disclosure):** Having a clear, public process for handling vulnerability reports is now a legal requirement under laws like the [CRA](/docs/standards/eu/cra-overview).

## Conclusion: A Shared Challenge

The MOD's "Problem Book" is a valuable contribution to the security community. It honestly lays out the practical hurdles to achieving true Secure-by-Design. While the stakes may be different, the challenges of skills, knowledge, timing, and lifecycle management are universal. By focusing on practical guidance and shared standards, we can begin to build the solutions together.

[sbd_problem_book]: https://www.gov.uk/government/publications/secure-by-design-problem-book/secure-by-design-problem-book "Secure by Design Problem Book on GOV.UK" 