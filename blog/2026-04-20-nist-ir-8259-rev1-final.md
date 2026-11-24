---
title: "NIST Finalizes IR 8259 Rev. 1 for IoT Product Makers"
authors: [sbd_community]
tags: [standards, us, iot, secure-by-design, supply-chain]
description: "NIST IR 8259 Rev. 1 moves the IoT baseline from devices to products, from pre-market to end of life. Here's what manufacturers should take from it."
---

On 20 April 2026, NIST published the final **NIST IR 8259 Revision 1**,
_Foundational Cybersecurity Activities for IoT Product Manufacturers_
([NIST publication](https://csrc.nist.gov/pubs/ir/8259/r1/final),
[NIST news release](https://www.nist.gov/news-events/news/2026/04/sharpening-focus-product-requirements-and-cybersecurity-risks-updated)).
It replaces the 2020 original and widens the scope from IoT devices to IoT
products, covering the whole journey from pre-market design to post-market
support and end of life.

<!-- truncate -->

NIST IR 8259 is guidance, not regulation. It is not a certification scheme
and has no legal force of its own. But it is the foundation of NIST's IoT
guidance series, and many buyers and security questionnaires use it as a
reference baseline.

## What changed

NIST IR 8259 Rev. 1 supersedes NIST IR 8259, published on 29 May 2020. NIST
describes the revision as a "pivotal change in addressing the full IoT
product scope". Three points stand out from NIST's announcement:

- **Products, not devices.** The activities now address the IoT product as a
  whole, not just the physical device.
- **Pre-market through post-market.** The recommended activities span the
  stages before a product is sold and the period after, so manufacturers can
  build products that meet customers' cybersecurity needs and expectations.
- **Broader customer communication.** The revision expands guidance on
  communicating with customers about cybersecurity, maintenance, support and
  end of life.

The aim is unchanged. NIST says manufacturers can lessen the cybersecurity
effort needed by customers, which in turn can reduce the prevalence and
severity of compromises. The publication was developed by NIST's
Cybersecurity for IoT Program.

## Why this matters for connected-product teams

The shift from device to product matches what customers and regulators now
expect. A connected product is rarely just a board and its firmware. It
usually includes a companion app, cloud services, update infrastructure and
the documentation and support that come with them. Weaknesses in any of
these parts are product weaknesses.

The post-market and end-of-life emphasis matters just as much. Customers need
to know how long a product will receive security updates, how they will be
told about vulnerabilities, and what happens when support ends. Those
commitments are now part of the foundational activities, not an
afterthought.

For teams that sell internationally, this is familiar ground. The
Cyber Resilience Act (CRA) asks for a support period and vulnerability
handling throughout it. The UK's Product Security and Telecommunications
Infrastructure (PSTI) regime requires a published minimum security update
period. NIST IR 8259 Rev. 1 points US-facing teams in the same direction.

## How this relates to the handbook

Our NIST IR 8259 overview describes the series: the foundational activities
in IR 8259, the technical capabilities in IR 8259A and the non-technical
supporting capabilities in IR 8259B. Rev. 1 changes the foundation that the
rest of the series builds on.

If you used the 2020 version to structure your process, review it against
Rev. 1. The main change NIST highlights is how far the activities reach: beyond the
device to the services around it, and beyond the sale to the end of support.

## What to do next

1. Download NIST IR 8259 Rev. 1 and compare its activities with your current
   product security process.
2. Write down your full product boundary: device, firmware, apps, cloud
   services, update infrastructure and support.
3. Check that your customer-facing material covers maintenance, support and
   end of life, not just security features.
4. Make sure you publish a support period and a way for customers and
   researchers to report vulnerabilities.
5. If you reference NIST IR 8259 in contracts, questionnaires or policies,
   update the citation to Rev. 1.

## Handbook resources

- **[NIST IR 8259 Series](/docs/standards/us/nistir8259-overview)**
  explains the series and how its capabilities fit together.
- **[Threat Modeling](/docs/implementation/build-phase/threat-modeling)**
  helps define the product boundary and deployment context.
- **[User Documentation](/docs/implementation/build-phase/user-documentation)**
  covers the customer-facing information on security, support and end of
  life.
- **[Patch Cadence & Rollback Strategy](/docs/implementation/operate-phase/patch-cadence)**
  covers how to deliver on post-market support commitments.
- **[Vulnerability Disclosure](/docs/implementation/operate-phase/vulnerability-disclosure)**
  shows how to run a reporting channel customers can rely on.

## The bigger picture

NIST's foundational IoT guidance now says what product teams have learned in
practice: security belongs to the whole product and lasts as long as the
product is supported. Teams that already plan for support periods and
end-of-life communication will find Rev. 1 confirms their direction.
