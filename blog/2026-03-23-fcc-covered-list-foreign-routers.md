---
title: "FCC Adds Foreign-Produced Routers to the Covered List"
authors: [sbd_community]
tags: [fcc, us, supply-chain, iot, consumer]
description: "FCC notice DA 26-278 puts routers produced abroad on the Covered List, so new models need a Conditional Approval. Here's what router makers should know."
---

On 23 March 2026, the US Federal Communications Commission (FCC) added
routers produced in a foreign country to its Covered List
([Public Notice DA 26-278](https://docs.fcc.gov/public/attachments/DA-26-278A1.pdf)).
Covered equipment cannot receive FCC equipment authorization. The only
exception is for routers granted a Conditional Approval by the Department of
War or the Department of Homeland Security, so router makers selling into the
US need a plan now.

<!-- truncate -->

The notice comes from the FCC's Public Safety and Homeland Security Bureau.
It acts on a national security determination, not a new technical security
standard, and it changes which routers can be authorized rather than how
they must be built. This post summarizes the notice and is not legal advice.

## What was published

On 20 March 2026, the FCC received a National Security Determination from an
Executive Branch interagency body. It found that routers produced in foreign
countries, "regardless of nationality of the producer", pose unacceptable
risks to US national security and to the safety of US persons. The
determination cites attacks on small and home office routers and the Volt,
Flax and Salt Typhoon campaigns.

The Bureau concluded that it was required to act, and updated the Covered
List with a new entry, dated 23 March 2026. DoW is the Department of War and
DHS the Department of Homeland Security:

> "Routers produced in a foreign country, except routers which have been
> granted a Conditional Approval by DoW or DHS."

Two definitions in the determination set the scope:

- **Routers** are defined by reference to NIST IR 8425A: consumer-grade
  networking devices primarily intended for residential use that the
  customer can install.
- **Production** generally includes any major stage of making the device,
  "including manufacturing, assembly, design, and development".

The notice spells out the consequence. Under section 2.903(a) of the FCC's
rules, covered equipment is prohibited from receiving equipment
authorizations, and every application must certify that the equipment is not
covered. Because the routers are identified by place of production rather
than by company, the rules that apply to entities named on the list are not
triggered.

## Conditional Approvals

Producers can ask the Department of War (DoW) and the Department of Homeland
Security (DHS) for a Conditional Approval that exempts their routers. Annex A
to the determination lists what an application must contain, including:

- corporate structure, ownership and any foreign government influence;
- a detailed bill of materials, the country of origin of every component and
  of the design, and the country of origin of onboard software and firmware;
- the entities responsible for software updates;
- a time-bound plan to establish or expand US manufacturing, with quarterly
  progress updates.

Conditional Approvals last for up to 18 months.

## Why this matters for connected-product teams

For consumer router makers, the US market now depends on where the product is
designed and built. A new model produced abroad needs a Conditional Approval
before it can be authorized.

The notice also affects the U.S. Cyber Trust Mark. In its
[2024 Report and Order][fcc_24_26], the FCC decided that any communications
equipment on the Covered List, "now or in the future", is ineligible for the
labeling program and will be denied the mark. Covered routers are
therefore ineligible for the Cyber Trust Mark, however secure they are.

The Annex A questions also show the supply-chain evidence buyers and
regulators are starting to expect: component-level origin, firmware origin,
and a named party responsible for updates.

## How this relates to the handbook

Our Cyber Trust Mark overview explains the program and its eligibility
rules, and now records the router entry on the Covered List. Its technical
basis, the NIST IoT baseline, is unchanged: secure design still matters, but
it no longer decides on its own whether a router can reach the US market.

## What to do next

1. Check whether your products meet the consumer router definition, and map
   where each one is designed, developed, manufactured and assembled.
2. If any stage is outside the US, review Annex A and decide whether to apply
   for a Conditional Approval.
3. Build the evidence Annex A asks for: a bill of materials with component
   origin, the origin of firmware and software, and who maintains updates.
4. If you planned to seek the Cyber Trust Mark for a router, revisit that
   plan.

## Handbook resources

- **[FCC Cyber Trust Mark](/docs/standards/us/fcc-cyber-trust-mark-overview)**
  explains the labeling program and why Covered List equipment is
  ineligible.
- **[SBOM & VEX Workflows](/docs/implementation/build-phase/sbom-vex)**
  covers building and maintaining the component inventory that Annex A-style
  questions rely on.
- **[NIST IR 8259 Series](/docs/standards/us/nistir8259-overview)**
  describes the NIST IoT baseline that the Cyber Trust Mark builds on.

## The bigger picture

US policy now judges routers by where they come from as well as how they are
built. Manufacturers who already know the origin of every component, firmware
image and update process will find a Conditional Approval easier to support.

[fcc_24_26]: https://docs.fcc.gov/public/attachments/FCC-24-26A1.txt "FCC 24-26: Report and Order establishing the IoT labeling program"
