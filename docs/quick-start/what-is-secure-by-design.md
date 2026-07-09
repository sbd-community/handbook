---
title: "What is Secure-by-Design?"
sidebar_position: 1
tags: [secure-by-design, cra, psti, product-security, sbd, sdd]
---

# What is Secure-by-Design?

**Secure-by-design** means making security part of product architecture, defaults, development, update, vulnerability handling, and lifecycle evidence. It is not a final test before release, a feature added by the security team, or a burden passed to the customer.

For connected-product teams, secure-by-design changes the product process. Teams must define the product boundary, assess risk, choose proportionate controls, ship secure defaults, provide secure updates, handle vulnerabilities, and retain evidence showing why security decisions were made.

As CISA puts it, the goal is to move away from placing the "cybersecurity burden" on customers and toward technology providers that "take ownership at the executive level to ensure their products are Secure-by-Design" ([CISA](./cisa-sbd-principles.md)).

## Use This Page When

Use this page when you need to:

- explain secure-by-design to a product, engineering, compliance, or leadership team;
- understand how secure-by-design differs from security testing at the end of a project;
- connect secure-by-design principles to CRA readiness and technical documentation;
- decide which handbook page to use next.

This page is guidance for product and engineering planning. It is not legal advice or a conformity assessment.

## Secure-by-Design vs Secure-by-Default

Secure-by-design and secure-by-default are related, but they are not the same thing.

| Concept | Meaning | Product-team question |
|---------|---------|-----------------------|
| **Secure-by-design** | Security is built into the product lifecycle: requirements, architecture, implementation, release, support, vulnerability handling, and evidence. | Did we design, build, operate, and evidence the product securely? |
| **Secure-by-default** | The product ships in a safe configuration without expecting the customer to harden it first. | Is the safest practical configuration the one users get out of the box? |

Secure-by-default is one outcome of secure-by-design. A product can have secure defaults and still fail secure-by-design if it cannot be updated, lacks vulnerability handling, has no risk assessment, or cannot explain its security decisions.

## What Changes In The Product Process?

Taking secure-by-design seriously changes how a connected product is planned, built, released, and supported.

| Product activity | What changes |
|------------------|--------------|
| **Ownership** | Security becomes a product responsibility with named owners, not an external audit task. |
| **Scope and architecture** | Teams record device, cloud, mobile app, update service, support tool, and supplier boundaries before choosing controls. |
| **Risk assessment** | Threat modeling and risk assessment drive security requirements instead of being paperwork after design is complete. |
| **Secure defaults** | Products avoid default passwords, unnecessary services, weak configuration, and unsafe customer burden. |
| **Core controls** | Secure boot, key provisioning, identity, updates, logging, SBOM/VEX, and vulnerability handling are planned as product capabilities. |
| **Lifecycle support** | The product has a declared support period, security update path, vulnerability intake route, and remediation process. |
| **Evidence** | Architecture decisions, tests, exceptions, release records, vulnerability records, and support commitments are retained and reviewable. |

## What Good Looks Like

A secure-by-design connected product should be able to show:

- a defined product and system boundary;
- a documented threat model or cybersecurity risk assessment;
- secure defaults and minimised attack surface;
- protected identity, credentials, keys, and firmware integrity;
- authenticated update and recovery mechanisms where updates are supported;
- a public vulnerability disclosure route and internal triage process;
- a declared support period and patch/remediation workflow;
- technical documentation and evidence tied to the product version or release.

The exact controls should be proportionate to product risk, architecture, and intended use. A low-stakes BLE sensor and a connected medical device should not have identical evidence packs, but both should be able to explain their decisions.

## Why It Matters: Regulation And Standards

Secure-by-design is no longer only a best practice. Major laws, standards, and guidance now expect manufacturers to own product security outcomes.

- **[EU Cyber Resilience Act (CRA)](../standards/eu/cra/index.md)** makes secure-by-design and vulnerability handling central requirements for products with digital elements.
- **[UK Product Security and Telecommunications Infrastructure (PSTI) Act](../standards/uk/psti-overview.md)** requires baseline security for consumer connectable products.
- **[EU NIS 2 Directive](../standards/eu/nis2-overview.md)** increases pressure on essential and important entities to manage cyber risk, including risk from products and suppliers.
- **[IEC 62443](../standards/global/iec62443-overview.md)** frames industrial security around lifecycle processes and technical security requirements.
- **[FDA cybersecurity guidance](../standards/us/fda-cybersecurity-overview.md)** expects medical device manufacturers to use a Secure Product Development Framework from design through end of support.
- **[CISA secure-by-design principles](./cisa-sbd-principles.md)** explain the broader shift from user-managed security to manufacturer ownership.

The pattern is consistent: manufacturers are expected to build security into the product lifecycle and be able to explain the evidence behind their decisions.

## Quick Self-Check

Use this as a first diagnostic, not as a complete assessment.

| Question | Good next step |
|----------|----------------|
| Do we know whether our product is in CRA scope? | Read the **[CRA 5-Minute Primer](./cra-primer.md)**. |
| Do we know our product boundary, including cloud and companion apps? | Start a **[Threat Model](../implementation/build-phase/threat-modeling.md)** and classify the **[Types of Embedded Device](../resources/reference/types-of-embedded-device.md)**. |
| Do we know our biggest secure-by-design gaps? | Run the **[CRA Readiness Gap Analysis](../resources/checklists-and-worksheets/cra-gap-analysis.md)**. |
| Can we prove firmware integrity and update safety? | Review **[Secure Boot](../implementation/build-phase/secure-boot.md)** and **[Secure OTA Updates](../implementation/build-phase/ota-updates.md)**. |
| Do we have unique identity and protected key material? | Review **[Unique Device Identity](../implementation/build-phase/unique-device-identity.md)** and **[Key Provisioning & Storage](../implementation/build-phase/key-provisioning.md)**. |
| Can researchers report vulnerabilities? | Review **[Vulnerability Disclosure](../implementation/operate-phase/vulnerability-disclosure.md)** and the **[Policy Starter Kit](../resources/policy-and-evidence/policy-templates.md)**. |
| Can we explain what evidence supports our claims? | Start a **[Secure-by-Design Evidence Pack](../resources/policy-and-evidence/audit-evidence-pack.md)**. |

## Where To Go Next

Choose the path closest to your current task:

- **Understand obligations:** start with the **[CRA 5-Minute Primer](./cra-primer.md)**, then use the **[CRA Overview](../standards/eu/cra/index.md)** for detailed regulatory context.
- **Assess readiness:** run the **[CRA Readiness Gap Analysis](../resources/checklists-and-worksheets/cra-gap-analysis.md)**.
- **Plan the first sprint:** use the **[First-Sprint Checklist](./first-sprint-checklist.md)**.
- **Design controls:** start with **[Threat Modeling](../implementation/build-phase/threat-modeling.md)**, **[Secure Boot](../implementation/build-phase/secure-boot.md)**, **[Secure OTA Updates](../implementation/build-phase/ota-updates.md)**, and **[Key Provisioning & Storage](../implementation/build-phase/key-provisioning.md)**.
- **Assemble evidence:** use the **[Secure-by-Design Evidence Pack](../resources/policy-and-evidence/audit-evidence-pack.md)** and **[Secure-by-Design Maturity Model](../resources/checklists-and-worksheets/maturity-model.md)**.
- **Find tools:** use the **[Tools](../tools/index.md)** section after you know which control or workflow you need to support.
