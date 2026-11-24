---
title: "CRA Reporting Is Now Live"
authors: [sbd_community]
tags: [cra, compliance, eu, vulnerability-handling]
description: "From 11 September 2026, manufacturers must report actively exploited vulnerabilities and severe incidents through ENISA's Single Reporting Platform."
---

As of today, 11 September 2026, **Cyber-Resilience Act (CRA)** reporting is
mandatory. Manufacturers must notify actively exploited vulnerabilities and
severe incidents affecting their products through ENISA's Single Reporting
Platform (SRP), which is now operational
([Commission reporting page](https://digital-strategy.ec.europa.eu/en/policies/cra-reporting),
[ENISA SRP FAQ](https://www.enisa.europa.eu/topics/product-security/vulnerability-services/eu-incident-response-and-cyber-crisis-management/single-reporting-platform-srp/frequently-asked-questions)).
From now on, the 24-hour clock starts as soon as you become aware.

<!-- truncate -->

We covered the run-up in
[CRA Reporting Starts in September](/blog/2026/06/08/cra-reporting-srp-deadline).
This post is the short version for teams who need to know what changed today.

## What applies from today

Article 14 obligations now apply to every product with digital elements in
scope of the CRA. That includes products placed on the market long before the
CRA's main application date of 11 December 2027. Reporting also continues
after a product's support period has ended.

Manufacturers must report:

- **actively exploited vulnerabilities** contained in their product, and
- **severe incidents** having an impact on the security of their product.

One notification through the SRP goes to the CSIRT designated as coordinator
for your main establishment and to ENISA at the same time.

## The reporting clock

| Stage | Deadline |
|-------|----------|
| Early warning | Within 24 hours of becoming aware |
| Notification | Within 72 hours of becoming aware |
| Final report, actively exploited vulnerability | Within 14 days of a corrective or mitigating measure being available |
| Final report, severe incident | Within one month of the notification |

The Commission's July guidance explains when the clock starts. A manufacturer
"becomes aware" once an initial assessment gives a reasonable degree of
certainty that exploitation or a severe incident is real. It also confirms
there is no retroactive reporting of exploitation you already knew about
before today. See our post on
[the Commission's CRA guidance](/blog/2026/07/27/commission-cra-guidance)
for the details.

## What to check this week

1. Make sure your reporting owner and backup know how to reach the SRP, have
   EU Login accounts they can use at short notice, and know who will act as
   your primary representative.
2. Confirm which Member State is your main establishment. That decides which
   CSIRT receives your notifications.
3. Run a tabletop exercise: take a recent vulnerability, assume it is being
   exploited, and walk through the 24-hour early warning.
4. Check that your product inventory can say which versions are affected and
   where they are sold.

## Update: what we learned after launch

_Added November 2026, from ENISA's FAQ as updated on 17 November 2026._

- Each person submitting reports needs an individual **EU Login account with
  multi-factor authentication**. One primary assigned representative per
  manufacturer can add up to 20 secondary representatives. ENISA advises
  registering when you first need to submit rather than in advance.
- You choose the receiving CSIRT based on your **main establishment**, where
  cybersecurity decisions are predominantly taken. A report sent to the wrong
  CSIRT may be invalidated and need resubmitting.
- The initial release has **no API** and the platform is **English only**.
  Voluntary reporting under Article 15 is not implemented yet.
- ENISA notes that the SRP's 72-hour counter currently shows a due date
  48 hours after the early warning, so a report can show as overdue before
  the legal deadline.

## Handbook resources

- **[Vulnerability Disclosure](/docs/implementation/operate-phase/vulnerability-disclosure)**
  covers intake, triage and reporting workflows.
- **[Security Logging](/docs/implementation/operate-phase/security-logging)**
  helps detect exploitation in the first place.
- **[Patch Cadence](/docs/implementation/operate-phase/patch-cadence)** links
  reporting to remediation timelines.
- **[CRA Overview](/docs/standards/eu/cra-overview)** maps the rest of the CRA
  timeline.

## The practical takeaway

The CRA is no longer only a future compliance project. From today, a missed
exploitation signal can become a missed legal deadline. The teams in the best
position are the ones that can decide "is this reportable?" within hours,
not days.
