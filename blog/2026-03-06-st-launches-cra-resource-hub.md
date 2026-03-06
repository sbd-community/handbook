---
title: "ST Launches CRA Resource Hub for Developers"
authors: [sbd_community]
tags: [cra, compliance, stm32, stmicroelectronics, secure-by-design, supply-chain]
description: "STMicroelectronics has launched a CRA resource hub for developers. Here's why that matters, and which handbook pages to read next."
---

On 4 March 2026, STMicroelectronics announced a dedicated **Cyber
Resilience Act (CRA)** resource hub for developers and product teams. The
move is notable not just because of ST's size, but because it shows how fast
the market is shifting: component vendors are no longer talking only about
features, performance, and price. They are increasingly talking about
**security lifecycle**, **documentation**, and **compliance support** for
products with digital elements [st-announcement].

<!-- truncate -->

That is good news for product teams. Better supplier documentation,
reference implementations, and public security policies can make it easier
to build a defensible CRA program. But it also creates a new challenge:
manufacturers need to distinguish between **helpful supplier inputs** and
their own non-delegable legal responsibilities.

## Why this announcement matters

ST's new CRA messaging covers the right high-level themes: secure by design,
conformity assessment, vulnerability handling, and long-term maintenance
[st-announcement], [st-cra-page]. That matters because these are exactly the
areas where manufacturers now need stronger evidence from silicon and
software suppliers.

It also signals a broader shift in component procurement. Security teams and
compliance leads will increasingly ask questions such as:

- Does this supplier publish security advisories and lifecycle policies?
- Which security claims apply to the exact part number we are using?
- What documentation can we reuse in our technical file?
- Which reference implementations are mature enough to build on?

Those are supply-chain and evidence questions, not just firmware questions.

## What a supplier can help with, and what it cannot do for you

A vendor like ST can help with a lot:

- Provide MCU features that support secure boot, key protection, and
  cryptography.
- Publish security collateral, application notes, and assurance material.
- Provide reference implementations such as **SBSFU** and related
  **STM32Trust** materials [st-trust], [st-sbsfu-an].

But a supplier page cannot:

- perform your product risk assessment,
- guarantee that your final integration is secure,
- operate your vulnerability handling process,
- define your support commitments, or
- assemble your technical file for you.

That boundary matters. The CRA places the core product obligations on the
manufacturer of the final product, not on the silicon vendor.

## We've updated our STM32 guide

In light of ST's new CRA hub, we have updated our STM32 hardware guide to
make that distinction clearer.

Read:

- **[STM32 Hardware Selection for EU CRA-Compliant Connected Products](/docs/resources/hardware/stm32)** for a more vendor-neutral view of which STM32
  families are the best fit for security-sensitive products, what supplier
  evidence you should collect, and what still remains your responsibility.

## Recommended reading path

If you are building with STM32, or evaluating any supplier's new CRA page,
these handbook pages are the most useful next stops:

- **[CRA Overview](/docs/standards/eu/cra-overview)** for the legal baseline
  and the engineering mapping.
- **[Threat Modeling](/docs/implementation/build-phase/threat-modeling)** for
  the product-level context that no supplier can provide for you.
- **[Secure Boot](/docs/implementation/build-phase/secure-boot)** for the
  trust-chain design work behind vendor secure-boot features.
- **[OTA Updates & Patching](/docs/implementation/build-phase/ota-updates)**
  for the operational side of long-term maintenance.
- **[Audit Evidence Pack](/docs/resources/policy-and-evidence/audit-evidence-pack)**
  for the documentation you need to collect and maintain.

## The bigger picture

Expect to see more announcements like this from semiconductor vendors,
module makers, cloud providers, and tool vendors over the next 18 months.
That is a healthy sign: the ecosystem is adapting to the CRA.

The job for manufacturers is to use those supplier materials wisely.
Supplier hubs can accelerate compliance work, but they are best treated as
**inputs into your own Secure-by-Design program**, not as evidence that the
job is already done.

[st-announcement]: https://community.st.com/t5/developer-news/st-launches-dedicated-resource-hub-to-help-developers-navigate/ba-p/883514 "ST launches dedicated resource hub to help developers navigate the EU Cyber Resilience Act (CRA)"
[st-cra-page]: https://www.st.com/content/st_com/en/about/security-and-privacy/cyber-resilience-act.html "STMicroelectronics Cyber Resilience Act page"
[st-trust]: https://www.st.com/content/st_com/en/ecosystems/stm32trust.html "STMicroelectronics STM32Trust Security Framework"
[st-sbsfu-an]: https://www.st.com/en/embedded-software/x-cube-sbsfu.html "AN5056: STM32 MCUs secure boot and secure firmware update"
