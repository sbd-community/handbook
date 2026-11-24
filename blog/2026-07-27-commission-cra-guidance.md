---
title: "Commission Publishes CRA Guidance for Manufacturers"
authors: [sbd_community]
tags: [cra, compliance, eu, vulnerability-handling, supply-chain]
description: "The Commission's CRA guidance clarifies scope, open source, updates, support periods, cloud back ends and reporting, with 67 worked examples."
---

On 27 July 2026, the European Commission published its guidance on applying
the **Cyber Resilience Act (CRA)**
([Commission announcement](https://digital-strategy.ec.europa.eu/en/library/commission-publishes-new-guidance-support-timely-cyber-resilience-act-implementation)).
It answers many of the scoping and lifecycle questions product teams have been
stuck on, and it lands six weeks before CRA reporting starts on
11 September 2026.

<!-- truncate -->

The guidance is not legally binding. It is the Commission's interpretation,
and the Court of Justice has the final word. It is still the most detailed
official reading of the CRA so far, and market surveillance authorities are
likely to start from it. It includes **67 worked examples**, written mainly
with microenterprises and SMEs in mind.

## What the guidance covers

The document runs through nine topics. The ones with the most direct
engineering impact are:

- **Legacy designs.** A product type designed before 11 December 2027 but
  placed on the market afterwards does not automatically need a redesign.
  The manufacturer must still carry out the Article 13(2) risk assessment,
  show that existing measures are adequate, and complete conformity
  assessment and CE marking (paragraphs 33–38).
- **Free and open-source software.** Obligations follow whoever supplies the
  software in the course of a commercial activity. Contributing code to a
  project you are not responsible for does not make you a manufacturer, and
  the guidance explains when an organization is an open-source steward
  instead (sections 3.1–3.4).
- **Spare parts.** The Article 2(6) exemption only applies when a part is
  supplied specifically to repair or extend the life of a product already on
  the market. "It could technically be used as a replacement" is not enough;
  the repair purpose should be evident from the supply context and documented
  (paragraphs 96–97).
- **Software updates and substantial modification.** An update is a
  substantial modification when it changes cybersecurity risk in ways the
  risk assessment did not consider. New functions that change the product's
  intended purpose generally qualify; functions that were foreseen and
  assessed in advance do not (paragraphs 103–106).
- **Support periods.** Five years is a minimum safeguard, not a default.
  Products expected to be in use for longer should have longer support
  periods, and each substantially modified software version needs its own
  declared support period (paragraphs 125–128).
- **Remote data processing.** The guidance applies a three-part test: is the
  processing at a distance, would its absence stop the product performing a
  function, and was it designed by or for the manufacturer (paragraph 184)?
  Worked examples include a smart thermostat whose cloud back end qualifies,
  and an e-reader whose third-party storage service does not, but still has
  to be treated like a component in the risk assessment.

## What it says about reporting

Section 9.1 is the part most teams need before September:

- Reporting applies from 11 September 2026 to **all** in-scope products,
  including those placed on the market before December 2027, and continues
  after the support period ends (paragraph 210).
- A manufacturer "becomes aware" once an initial assessment gives a
  **reasonable degree of certainty** of active exploitation or a severe
  incident. The guidance aligns this with NIS 2 and GDPR breach-notification
  practice (paragraphs 212–214).
- There is **no retroactive reporting** of vulnerabilities already known to
  be actively exploited before 11 September 2026. A vulnerability known
  before then, but first found to be exploited afterwards, is reportable
  (paragraph 217).
- A vulnerable third-party component is only reportable if the vulnerability
  is actively exploited **in your product**. Unreachable or unexploited
  component vulnerabilities still go through vulnerability handling and
  upstream reporting, not mandatory notification (paragraph 218).

## What to do next

1. Re-run your CRA scoping decision against the guidance, especially for
   cloud back ends, open-source components and spare parts.
2. Write down how your team decides whether an update is a substantial
   modification, and record that decision for each release.
3. Revisit declared support periods. If your products stay in service for
   ten years, a five-year period needs a justification.
4. Put the "becoming aware" test into your vulnerability triage runbook so
   the 24-hour clock has a defined start.

## Handbook resources

- **[CRA Overview](/docs/standards/eu/cra-overview)** maps CRA obligations to
  engineering tasks.
- **[CRA Gap Analysis](/docs/resources/checklists-and-worksheets/cra-gap-analysis)**
  helps re-check scope and obligations product by product.
- **[Threat Modeling](/docs/implementation/build-phase/threat-modeling)**
  supports the Article 13(2) risk assessment the guidance keeps returning to.
- **[Vulnerability Disclosure](/docs/implementation/operate-phase/vulnerability-disclosure)**
  covers intake, triage and reporting workflows.
- **[Patch Cadence](/docs/implementation/operate-phase/patch-cadence)** helps
  plan support periods and update timelines.

## The practical takeaway

The guidance makes the CRA less abstract. Its examples give engineering and
compliance teams a shared reference for scope, update and reporting
decisions, which is what market surveillance authorities will expect to see
in the technical file.

_Update, 17 November 2026: the guidance was published in the Official
Journal as [Communication C/2026/6013](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:C_202606013).
Paragraph numbers in this post refer to that version._
