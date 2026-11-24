---
title: "EU Repeals RED Cybersecurity Delegated Act Before CRA"
authors: [sbd_community]
tags: [red, cra, eu, compliance, iot]
description: "Delegated Regulation (EU) 2026/339 repeals the RED cybersecurity delegated act from 11 December 2027 to avoid CRA overlap. Until then, it still applies."
---

On 29 April 2026, Commission Delegated Regulation (EU) 2026/339 was published
in the Official Journal
([European Commission](https://single-market-economy.ec.europa.eu/sectors/electrical-and-electronic-engineering-industries-eei/radio-equipment-directive-red_en),
[EUR-Lex](https://eur-lex.europa.eu/eli/reg_del/2026/339/oj/eng)). It repeals
the Radio Equipment Directive (RED) cybersecurity Delegated Regulation
(EU) 2022/30 from 11 December 2027, when the Cyber-Resilience Act (CRA)
applies. Until then, the RED rules still bite, so radio product teams must
plan for both regimes at once.

<!-- truncate -->

This is a hand-over, not a relaxation. The Commission adopted the repealing
act on 16 February 2026 so that radio equipment does not face two
overlapping sets of cybersecurity requirements once the CRA's main
obligations apply. This post is a summary, not legal advice.

## What changed

Delegated Regulation (EU) 2022/30 activated the RED's cybersecurity
essential requirements, Articles 3(3)(d), (e) and (f), for certain
categories of radio equipment. It has applied since 1 August 2025. We covered
its adoption in
[RED Delegated Act Activates Mandatory Cyber Requirements](/blog/2022/01/12/red-delegated-act-published).

The Commission's RED page explains what happens next:

- In 2023, it was agreed that cybersecurity requirements would transfer from
  the RED to the CRA.
- To avoid overlapping legislative requirements, the Commission adopted a
  Delegated Regulation repealing the RED cybersecurity delegated act on
  16 February 2026.
- It was published in the Official Journal on 29 April 2026.
- The repeal takes effect on **11 December 2027**, the date the CRA's main
  obligations apply.

## What it means in practice

The repeal is not effective until 11 December 2027. Until then, radio
equipment in scope of Delegated Regulation (EU) 2022/30 must still meet the
RED cybersecurity requirements to be placed on the EU market. From 11 December 2027, cybersecurity for
those products is a CRA matter.

So for the next 19 months, a connected radio product can be subject to the
RED cybersecurity requirements now and the CRA later, depending on when each
unit is placed on the market. Many products will cross that line during
their production life.

## Why this matters for connected-product teams

The good news is the end of a double regime. Without the repeal, a Wi-Fi or
Bluetooth product would have had to meet two sets of cybersecurity essential
requirements, under two laws, from December 2027.

The practical work does not get smaller, though. Teams still need RED
cybersecurity evidence for every unit placed on the market before 11 December 2027, and
CRA conformity for every unit placed on the market after it. The CRA also asks for more
than the RED did, including vulnerability handling for the support period
and reporting of actively exploited vulnerabilities.

The most efficient path is to treat RED work as a subset of CRA work. Threat
models, secure-by-default settings, update mechanisms and access controls
built for RED can carry forward. What needs adding is the CRA's lifecycle
layer.

## What to do next

1. List which of your radio products are in scope of the RED cybersecurity
   requirements and are, or will be, placed on the market before
   11 December 2027.
2. Keep RED cybersecurity evidence current for those products until the
   repeal takes effect.
3. For products still on sale after 11 December 2027, plan the CRA
   conformity assessment now, building on your RED technical file.
4. Check your EU declarations of conformity and technical documentation
   templates, so the right legal basis applies on each side of the date.

## Handbook resources

- **[Radio Equipment Directive (RED)](/docs/standards/eu/red-overview)**
  explains the RED cybersecurity requirements and assessment routes.
- **[Cyber-Resilience Act (CRA)](/docs/standards/eu/cra-overview)** explains
  the CRA obligations that take over from 11 December 2027.
- **[CRA Gap Analysis](/docs/resources/checklists-and-worksheets/cra-gap-analysis)**
  helps turn a RED baseline into a CRA backlog.
- **[Secure-by-Design Evidence Pack](/docs/resources/policy-and-evidence/audit-evidence-pack)**
  shows how to reuse one evidence set across both regimes.

## The bigger picture

The EU is consolidating product cybersecurity under one horizontal law. For
radio products, the RED cybersecurity requirements were the first step and
the CRA is the destination. Teams that built their RED evidence well have a
head start. The work now is to extend it across the whole product lifecycle
before December 2027.
