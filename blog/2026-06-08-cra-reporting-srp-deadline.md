---
title: "CRA Reporting Starts in September"
authors: [sbd_community]
tags: [cra, compliance, eu, vulnerability-handling]
description: "CRA vulnerability and incident reporting starts on 11 September 2026. Product teams need the reporting process ready before the platform goes live."
---

The **Cyber-Resilience Act (CRA)** reporting clock starts on
**11 September 2026**. From that date, manufacturers must report actively
exploited vulnerabilities and severe incidents affecting the security of
products with digital elements through the ENISA Single Reporting Platform
(SRP) ([Commission reporting guidance](https://digital-strategy.ec.europa.eu/en/policies/cra-reporting),
[ENISA SRP page](https://www.enisa.europa.eu/topics/product-security-and-certification/single-reporting-platform-srp)).

<!-- truncate -->

This is not the same as the full CRA application date in December 2027. Most
product security and CE-marking obligations arrive later. But Article 14
reporting starts earlier, and it is operationally demanding: teams need a
process that can turn a vulnerability signal into a regulatory decision
inside a 24-hour window.

## What has to be reported

The **[reporting obligation][ec-reporting]** covers two tracks:

- **Actively exploited vulnerabilities** in a product with digital elements.
- **Severe incidents** that have an impact on the security of the product.

Manufacturers report through the CRA SRP, which is intended to notify the
relevant national CSIRT and ENISA through a
**[single channel][enisa-srp]**.

## The timing is tight

The Commission describes a **[staged reporting process][ec-reporting]**:

| Step | Timing |
|------|--------|
| Early warning | Within 24 hours of becoming aware |
| Full notification | Within 72 hours of becoming aware |
| Final report for an actively exploited vulnerability | No later than 14 days after a corrective measure is available |
| Final report for a severe incident | Within one month of the 72-hour notification |

The difficult part is not filling in a form. The difficult part is deciding
quickly whether a product issue is reportable, who has authority to submit,
and what facts are good enough for the first notification.

## Why teams should prepare now

ENISA says the SRP is scheduled to be operational by 11 September 2026, with
testing and preparation material before that date
([ENISA SRP page][enisa-srp]). The Commission's reporting page, updated in
June 2026, confirms that reporting will be routed through the SRP
([Commission reporting guidance][ec-reporting]).

Do not wait for September to design the internal workflow. By then, the
first 24-hour clock may already be running.

## What to prepare

Before the deadline, manufacturers should have:

1. A named reporting owner and backup.
2. A vulnerability triage process that identifies possible active
   exploitation.
3. A product inventory that links affected software, firmware, and hardware
   versions to markets where the product is available.
4. A decision tree for when legal, product security, engineering, and
   leadership must be involved.
5. Draft templates for the early warning, 72-hour notification, and final
   report.
6. A recordkeeping process that preserves the evidence behind each
   reporting decision.

## Handbook resources

- **[CRA Overview](/docs/standards/eu/cra-overview)** maps CRA obligations to
  engineering tasks.
- **[Vulnerability Disclosure](/docs/implementation/operate-phase/vulnerability-disclosure)**
  explains how to receive and handle vulnerability reports.
- **[Patch Cadence](/docs/implementation/operate-phase/patch-cadence)** helps
  turn vulnerability decisions into remediation timelines.
- **[Secure-by-Design Evidence Pack](/docs/resources/policy-and-evidence/audit-evidence-pack)**
  shows how to preserve evidence for later inspection.

## The practical takeaway

September 2026 is not a paperwork milestone. It is the point where
regulators start receiving live vulnerability and incident reports under the
CRA. If your product security process cannot answer "is this reportable?"
inside a day, it needs work before the SRP goes live.

[ec-reporting]: https://digital-strategy.ec.europa.eu/en/policies/cra-reporting "European Commission: Cyber Resilience Act reporting obligations"
[enisa-srp]: https://www.enisa.europa.eu/topics/product-security-and-certification/single-reporting-platform-srp "ENISA Single Reporting Platform"
[crowell-alert]: https://www.crowell.com/en/insights/client-alerts/eu-cyber-resilience-act-countdown-11-september-2026-incidentvulnerability-reporting-deadline-is-less-than-100-days-away "Crowell & Moring CRA reporting deadline alert"
