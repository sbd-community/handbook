---
title: "Secure-by-Design Maturity Model"
sidebar_label: "Maturity Model"
sidebar_position: 2
description: "A practical secure-by-design maturity model for connected-product teams assessing CRA readiness, product-security practices, evidence quality, vulnerability handling, secure updates, and lifecycle support."
tags: [maturity-model, assessment, cra, secure-by-design, product-security, evidence, technical-documentation, vulnerability-handling, secure-update]
---
# Secure-by-Design Maturity Model

Use this maturity model to assess how repeatable, evidence-backed, and lifecycle-managed your connected-product security practices are.

The model is designed for product, engineering, security, compliance, and support teams working on connected products. It helps you understand whether secure-by-design practices are ad hoc, partially repeatable, product-scoped, evidence-backed, or maintained throughout the product lifecycle.

It does not prove CRA compliance or product conformity by itself. Use it alongside the **[CRA Readiness Gap Analysis](./cra-gap-analysis.md)** and the **[Secure-by-Design Evidence Pack](../policy-and-evidence/audit-evidence-pack.md)**.

## What This Model Is For

Use this model when you need to answer:

- how repeatable your secure-by-design practices are across products, releases, and teams;
- whether practices are actually applied to the product or release in scope;
- whether the work produces retained, reviewable evidence;
- which domains need stronger ownership, process, tooling, or lifecycle review;
- what maturity gaps should become roadmap actions.

This page is intentionally lighter than broad software-security maturity frameworks. It focuses on connected-product teams that need secure-by-design practices to be practical, evidence-backed, and maintained after release.

## How This Relates to CRA Readiness

| Page | Question it answers |
|------|---------------------|
| **[CRA Readiness Gap Analysis](./cra-gap-analysis.md)** | Where do we stand against CRA-related readiness questions for this product or release? |
| **[Secure-by-Design Evidence Pack](../policy-and-evidence/audit-evidence-pack.md)** | What evidence supports our decisions, where is it retained, and who owns it? |
| **Secure-by-Design Maturity Model** | How repeatable, durable, and evidence-backed are our secure-by-design practices? |

If you need to assess a specific product or release against CRA-related readiness questions, start with the **[CRA Readiness Gap Analysis](./cra-gap-analysis.md)**. Use this maturity model when you need to assess how repeatable and durable your secure-by-design practices are across products, releases, or teams.

:::warning Maturity is not conformity
A maturity score supports planning and internal governance. It does not by itself demonstrate legal compliance, conformity, or product security. Product-specific assessment and evidence still matter.
:::

## Maturity Levels

| Level | Name | Description |
|-------|------|-------------|
| **1** | **Ad hoc** | Security depends on individual effort. Practices may exist, but they are inconsistent, undocumented, or not retained as evidence. |
| **2** | **Repeatable in places** | Some practices are used by some teams or products, but coverage, ownership, and evidence are inconsistent. |
| **3** | **Defined and product-scoped** | Practices are documented, assigned to owners, and applied to products or releases in scope. |
| **4** | **Evidence-backed and measured** | Practices produce retained evidence, are reviewed for quality, and are measured or checked over time. |
| **5** | **Lifecycle-managed** | Practices are refreshed after product changes, vulnerabilities, incidents, support changes, and new regulatory or threat information. |

Level 3 is often a useful planning target for repeatable secure-by-design practice, but it does not by itself demonstrate legal compliance or product conformity.

## How to Use This Model

1. Define the product line, product family, release group, business unit, or engineering organisation being assessed.
2. Work through each domain with product, engineering, security, compliance, support, and operations stakeholders.
3. Pick the maturity level that best describes current practice for that domain.
4. Record the evidence that supports the rating.
5. Identify the target level for the next planning period.
6. Turn gaps into roadmap actions with owners and review dates.

Avoid averaging scores too aggressively. If one critical product or release is still ad hoc, record that clearly rather than hiding it behind a higher organisation-wide average. A low score in a safety-critical or release-blocking domain may matter more than a higher average across the model.

## Outputs

By the end of this exercise, you should have:

- a maturity profile across secure-by-design domains;
- evidence that supports each maturity rating;
- a target level for each domain;
- a roadmap of maturity gaps, owners, and next actions;
- inputs for the **[CRA Readiness Gap Analysis](./cra-gap-analysis.md)** and **[Secure-by-Design Evidence Pack](../policy-and-evidence/audit-evidence-pack.md)**.

## Scorecard Template

Use this template to turn the assessment into a working improvement plan.

| Domain | Current level | Target level | Evidence | Owner | Next action |
|--------|---------------|--------------|----------|-------|-------------|
| Governance, Ownership, and Risk | | | | | |
| Product Architecture and Secure Defaults | | | | | |
| Secure Development and Verification | | | | | |
| Software Components, Suppliers, and Services | | | | | |
| Vulnerability Handling and Secure Updates | | | | | |
| Evidence, Technical Documentation, and Lifecycle Review | | | | | |

## Assessment Domains

### 1. Governance, Ownership, and Risk

This domain covers product-security ownership, risk assessment, threat modeling governance, secure-by-design policy, risk acceptance, and support-period ownership.

| Level | What it looks like |
|-------|--------------------|
| **1** | Product security ownership is unclear. Risk decisions are mostly reactive and rarely retained. |
| **2** | Some owners, policies, or risk reviews exist, but coverage varies by team or product. |
| **3** | Product-security roles, risk assessment, threat modeling expectations, and risk acceptance paths are documented and applied to products or releases in scope. |
| **4** | Governance evidence is retained, reviewed, and used to track risk decisions, exceptions, training coverage, and support commitments. |
| **5** | Ownership and risk practices are refreshed after incidents, vulnerabilities, regulatory changes, supplier changes, and support lifecycle events. |

Evidence may include product-security policy, ownership model, risk assessment, threat model, risk acceptance records, training records, and support-period decisions.

### 2. Product Architecture and Secure Defaults

This domain covers secure-by-default configuration, device identity, credential handling, key management, secure boot or integrity controls, data protection, debug/service interface control, and logging where appropriate.

| Level | What it looks like |
|-------|--------------------|
| **1** | Security architecture depends on informal design choices. Defaults, credentials, debug interfaces, and update paths may be insecure or undocumented. |
| **2** | Some products use secure defaults or hardware security features, but design expectations and evidence are inconsistent. |
| **3** | Architecture, secure defaults, identity, key handling, boot integrity, update integrity, and interface controls are defined for products or releases in scope. |
| **4** | Product-security controls are verified on production-like configurations, with retained evidence and tracked exceptions. |
| **5** | Architecture and defaults are reviewed after product changes, new vulnerabilities, new standards, support changes, and field experience. |

Evidence may include architecture diagrams, data-flow diagrams, secure configuration baselines, key-management design, secure boot design, update architecture, debug-interface controls, and logging design.

### 3. Secure Development and Verification

This domain covers secure development lifecycle, design review, threat modeling, SAST, SCA, secrets scanning, firmware analysis, security testing, release gates, and exception handling.

| Level | What it looks like |
|-------|--------------------|
| **1** | Security testing is manual, late, or absent. Release decisions rely on individual judgement. |
| **2** | Some scanning or review exists, but coverage is inconsistent and exceptions are not always recorded. |
| **3** | Secure development activities, security checks, release gates, and exception handling are documented and applied to products or releases in scope. |
| **4** | Verification evidence is retained, reviewed for quality, and measured using findings, fix times, coverage, or release-readiness checks. |
| **5** | Verification practices are improved using incident data, field vulnerabilities, supplier findings, exploit trends, and lessons from previous releases. |

Evidence may include SDL policy, threat models, CI/CD security configuration, scan results, firmware analysis results, penetration test reports, release approvals, and exception records.

### 4. Software Components, Suppliers, and Services

This domain covers SBOMs, supplier and component review, dependency monitoring, vulnerability status records, open-source approval, third-party services, and cloud dependency visibility.

| Level | What it looks like |
|-------|--------------------|
| **1** | Component and supplier visibility is incomplete. Vulnerability impact is hard to determine. |
| **2** | Some dependency lists, supplier reviews, or SBOMs exist, but they are not consistently tied to releases. |
| **3** | SBOM generation, component approval, supplier review, and vulnerability monitoring are defined for products or releases in scope. |
| **4** | Component and supplier evidence is retained, release-scoped, and used for vulnerability triage and customer assurance. |
| **5** | Component and supplier practices are refreshed after new vulnerabilities, supplier changes, end-of-support events, and architecture changes. |

Evidence may include SBOMs, supplier reviews, dependency monitoring records, open-source approval records, VEX or vulnerability status records, and third-party service inventories.

### 5. Vulnerability Handling and Secure Updates

This domain covers coordinated vulnerability disclosure, security contact routes, triage, severity handling, patch policy, secure update mechanisms, rollback and recovery, post-market monitoring, and CRA reporting readiness.

| Level | What it looks like |
|-------|--------------------|
| **1** | Vulnerabilities are discovered through customers, media, or incidents. Update paths and reporting responsibilities are unclear. |
| **2** | A security contact or update process exists, but triage, ownership, timelines, or customer communication are inconsistent. |
| **3** | CVD, triage, patch policy, secure update, rollback/recovery, and reporting responsibilities are documented and applied to products or releases in scope. |
| **4** | Vulnerability and update performance is tracked using retained evidence such as triage records, patch logs, update results, and customer notifications. |
| **5** | Post-market processes are rehearsed and refreshed after incidents, exploited vulnerabilities, failed updates, support changes, and regulatory changes. |

Evidence may include CVD policy, `security.txt`, vulnerability log, triage workflow, patch policy, update test reports, rollback/recovery evidence, incident response plan, and reporting runbook.

### 6. Evidence, Technical Documentation, and Lifecycle Review

This domain covers evidence packs, technical documentation indexes, release-scoped records, evidence ownership, gap and exception tracking, and review after updates, vulnerabilities, incidents, architecture changes, or end-of-support decisions.

| Level | What it looks like |
|-------|--------------------|
| **1** | Evidence is scattered, incomplete, or created after the fact. It is hard to explain what applies to a product or release. |
| **2** | Some evidence is retained, but scope, ownership, review dates, and gaps are inconsistent. |
| **3** | Evidence expectations, technical documentation indexes, ownership, and release-scoped records are defined for products or releases in scope. |
| **4** | Evidence is reviewed for quality, retained in a known location, linked to decisions, and tracked for gaps or exceptions. |
| **5** | Evidence is refreshed after product changes, vulnerabilities, incidents, regulatory changes, support decisions, and end-of-life events. |

Evidence may include evidence pack, technical documentation index, release baseline, evidence register, review records, gap register, exception records, and lifecycle review triggers.

## Turning Maturity Gaps Into a Roadmap

For each domain below the target level, record:

- the affected product, product family, release group, team, or process;
- the missing practice, owner, evidence, or lifecycle trigger;
- the target maturity level;
- the next action and target date;
- the decision affected, such as release readiness, CRA readiness, customer assurance, support, or post-market vulnerability handling;
- whether the gap should feed into the **[CRA Readiness Gap Analysis](./cra-gap-analysis.md)** or **[Secure-by-Design Evidence Pack](../policy-and-evidence/audit-evidence-pack.md)**.

| Gap pattern | Typical roadmap action |
|-------------|------------------------|
| Practice exists but is not product-scoped | Tie the practice to products, releases, variants, and support periods. |
| Practice exists but evidence is weak | Define evidence expectations, owners, storage location, and review cadence. |
| Evidence exists but is not reviewed | Add quality checks, decision links, exception tracking, and review triggers. |
| Control exists for some products only | Define target coverage and prioritise high-risk or CRA-scoped products first. |
| Policy exists but operation is unclear | Add workflow records, ownership, metrics, and post-market examples. |
| Process works once but is not maintained | Add lifecycle review after updates, vulnerabilities, incidents, supplier changes, and end-of-support decisions. |

## Related Pages

- [CRA Readiness Gap Analysis](./cra-gap-analysis.md)
- [Secure-by-Design Evidence Pack](../policy-and-evidence/audit-evidence-pack.md)
- [CRA Overview](../../standards/eu/cra/index.md)
- [Threat Modeling](../../implementation/build-phase/threat-modeling.md)
- [Secure Configuration & Hardening](../../implementation/build-phase/secure-configuration.md)
- [Secure Boot](../../implementation/build-phase/secure-boot.md)
- [Unique Device Identity](../../implementation/build-phase/unique-device-identity.md)
- [Key Provisioning & Storage](../../implementation/build-phase/key-provisioning.md)
- [OTA Updates & Patching](../../implementation/build-phase/ota-updates.md)
- [SBOM & VEX Workflows](../../implementation/build-phase/sbom-vex.md)
- [Vulnerability Disclosure](../../implementation/operate-phase/vulnerability-disclosure.md)
- [Patch Cadence & Rollback Strategy](../../implementation/operate-phase/patch-cadence.md)
- [Security Logging](../../implementation/operate-phase/security-logging.md)
- [CI/CD Pipeline Hardening](../../implementation/operate-phase/cicd-hardening.md)
