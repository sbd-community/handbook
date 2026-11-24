---
title: "ETSI Opens Enquiry on 17 CRA Product Standards"
authors: [sbd_community]
tags: [cra, standards, eu, etsi, boot-managers]
description: "ETSI has put 17 draft CRA product-category standards to public enquiry. Here's which product types they cover and how to use the drafts now."
---

On 13 August 2026, ETSI announced that **17 final draft European Standards**
supporting the **Cyber-Resilience Act (CRA)** are under public enquiry
([ETSI press release](https://www.etsi.org/newsroom/press-releases/etsi-launches-approval-process-for-17-european-standards-supporting-the-cyber-resilience-act/)).
These are the product-category standards for important products, such as
routers, operating systems, smart-home devices and boot managers. They are
the first detailed view of what CRA conformity may look like for each type.

<!-- truncate -->

ETSI says the approval procedures run until mid-September to mid-November
2026, depending on the standard. The drafts are intended to become harmonised
standards, but they give **no presumption of conformity** until they are
finalised and cited in the Official Journal.

## What is under enquiry

ETSI's release does not list the standards by number. Independent trackers
that follow the ETSI drafts group them as follows. Treat this as a guide, not
an official list.

**Annex III Class I (important products):**

| Standard | Product category |
|----------|------------------|
| EN 304 617 | Browsers |
| EN 304 618 | Password managers |
| EN 304 619 | Anti-malware software |
| EN 304 620 | VPN products |
| EN 304 621 | Network management systems |
| EN 304 622 | SIEM systems |
| EN 304 623 | Boot managers |
| EN 304 624 | PKI and certificate issuance software |
| EN 304 625 | Physical and virtual network interfaces |
| EN 304 626 | Operating systems |
| EN 304 627 | Routers, modems and switches |
| EN 304 631 | Smart-home virtual assistants |
| EN 304 632 | Smart-home security products |
| EN 304 633 | Connected toys |
| EN 304 634 | Personal wearables |

**Annex III Class II:**

| Standard | Product category |
|----------|------------------|
| EN 304 635 | Hypervisors and container runtimes |
| EN 304 636 | Firewalls and intrusion detection/prevention systems |

None of the 17 covers the Annex IV critical products.

## Why this matters for connected-product teams

The horizontal CRA standards describe processes. These vertical standards get
specific about what a particular kind of product must do, and how a test lab
or notified body might check it.

For many embedded teams, more than one draft will be relevant. A smart-home
hub touches themes from the operating system, network interface, router and
smart-home drafts, and EN 304 623 is a useful reference for its boot chain.
The CRA's core-functionality principle decides which category, if any, drives
conformity assessment. A product whose main purpose is something else is not
a boot manager just because it contains one. The other drafts are still
useful design checklists.

Class II products cannot rely on self-assessment alone, so for firewalls and
hypervisors the drafts are a first look at what third-party assessment will
examine.

## What to do next

1. Work out which of the 17 categories your products fall into, and which
   one is the product's core function.
2. Download the relevant drafts from ETSI and run a quick gap check against
   your current design and test evidence.
3. If you find requirements that are unclear or unworkable, comment through
   your national standards body or ETSI membership while the enquiry is open.
4. Keep a record of which draft version you assessed against. The final
   texts will change.

## Handbook resources

- **[CRA Harmonised Standards](/docs/standards/eu/cra/harmonised-standards)**
  tracks the standards landscape and how to use drafts.
- **[ETSI EN 304 623: Boot Managers](/docs/standards/eu/cra/en-304-623-boot-managers)**
  is our detailed walkthrough of one of the 17 drafts.
- **[CRA Overview](/docs/standards/eu/cra-overview)** explains product
  classes and conformity assessment routes.
- **[CRA Gap Analysis](/docs/resources/checklists-and-worksheets/cra-gap-analysis)**
  helps turn draft requirements into a backlog.

## The practical takeaway

The vertical drafts are the closest thing yet to a CRA test plan for specific
products. They are not final, but teams that read them now will have far
fewer surprises when the cited versions arrive.
