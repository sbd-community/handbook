---
title: "ICO Finalizes Its Guidance for Consumer IoT Products"
authors: [sbd_community]
tags: [ico, pecr, privacy, uk, iot, consumer]
description: "The ICO has finalized its consumer IoT guidance. Its five expectations include treating security as an ongoing legal obligation. Here's what to do."
---

On 11 June 2026, the UK Information Commissioner's Office (ICO) published its
final guidance for consumer Internet of Things (IoT) products and services
([ICO announcement](https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/06/setting-out-our-expectations-for-the-smart-device-industry/)).
It sets five expectations for manufacturers and developers, including that
security is an ongoing legal obligation. It arrives after stronger UK privacy
enforcement powers took effect on 5 February 2026.

<!-- truncate -->

The final guidance follows the draft the ICO consulted on in 2025, which we
covered in
[ICO Publishes New Guidance for IoT Device Manufacturers](/blog/2025/06/16/ico-iot-guidance).
It explains how data protection law, and the Privacy and Electronic
Communications Regulations (PECR), apply to smart products. This post is a
summary, not legal advice.

## What the ICO published

The ICO says the final guidance reflects feedback from a 12-week public and
industry consultation held in 2025. It covers consumer products such as
smart speakers, connected TVs and fitness trackers. It does not cover smart
meters, connected vehicles, or enterprise and industrial IoT.

The ICO sets out five expectations:

1. **Privacy must be built in from the start, not bolted on afterwards.**
   Protective defaults should be on, and data collection kept to what is
   strictly necessary.
2. **Consent must be real, specific and freely given via a clear opt-in.**
   Withdrawing consent should be just as easy.
3. **Genuine transparency is more than a privacy notice.** Users should get
   plain-language information about data use at relevant points in the
   product.
4. **Most firms will have to do a Data Protection Impact Assessment.** The
   bar is higher where children may use the product.
5. **Security is an ongoing legal obligation, not a one-time
   consideration.** The ICO points to regular updates, encryption and
   multifactor authentication across the product's lifetime.

The ICO also says it is now turning its attention to connected TVs. It will
engage with manufacturers during 2026 to check compliance and whether
consumers have meaningful choice over their data.

## The PECR changes behind it

The guidance arrives as the Data (Use and Access) Act 2025 changes PECR.
The Data (Use and Access) Act 2025 (Commencement No. 6 and Transitional and
Saving Provisions) Regulations 2026 (SI 2026/82) brought the PECR provisions
into force on **5 February 2026**
([legislation.gov.uk](https://www.legislation.gov.uk/uksi/2026/82/regulation/2/made)).
They include new rules on storing information in, and accessing it from, a
user's terminal equipment. These add new exceptions to the consent
requirement, such as for statistical purposes, and spell out that the
"strictly necessary" exception can cover, for example, keeping the user's
terminal equipment secure
([Schedule 12](https://www.legislation.gov.uk/ukpga/2025/18/schedule/12)).
They also include new ICO enforcement powers under PECR.

On 29 April 2026, the ICO also published final guidance on storage and access
technologies, covering cookies, tracking pixels, device fingerprinting and
similar technologies
([ICO](https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/04/final-storage-and-access-technologies-guidance-published/)).

## Why this matters for connected-product teams

Smart products store and read data on devices all the time: identifiers,
telemetry, configuration and analytics. Under PECR, that storage and access
needs consent unless an exception applies. With higher fines now available,
the design question "do we need consent for this?" has real weight.

The fifth expectation is the one security teams should note. The ICO frames
security as a continuing obligation across the product's lifetime. A product that stops receiving updates while still collecting
data is a privacy risk, not just a security one.

## What to do next

1. Map every piece of data your product stores on, or reads from, the device
   and companion apps, and record the PECR basis for each.
2. Review default settings and make sure optional data collection is off
   until the user opts in.
3. Run, or refresh, a Data Protection Impact Assessment, especially if
   children may use the product.
4. Check that your update and support commitments cover the whole period
   the product processes personal data.
5. If you make connected TVs, prepare for ICO engagement now.

## Handbook resources

- **[PECR (UK)](/docs/standards/uk/pecr-overview)** explains how PECR applies
  to connected devices and how it is enforced.
- **[Data Privacy & Secure Deletion](/docs/implementation/build-phase/data-privacy)**
  covers data minimization and deletion in device design.
- **[PSTI Act (UK)](/docs/standards/uk/psti-overview)** covers the UK's
  product security baseline that sits alongside the ICO's expectations.
- **[Secure OTA Updates](/docs/implementation/build-phase/ota-updates)**
  shows how to deliver security as an ongoing obligation.

## The practical takeaway

In the UK, privacy and security for smart products are converging on one
message: design them in from the start and keep them working for the life of
the product. The ICO's final guidance and its new PECR powers give that
message teeth.
