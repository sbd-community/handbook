---
title: "First-Sprint Checklist"
sidebar_label: "First Sprint Checklist"
sidebar_position: 5
tags: [quick-start, checklist, agile, cra, compliance]
---

# First-Sprint Checklist

Use this checklist when a connected-product team needs to start secure-by-design work quickly and turn it into sprint-sized actions.

The goal is not to become CRA-ready in one sprint. The goal is to create momentum: name owners, understand scope, identify the biggest gaps, start evidence collection, and choose the next implementation work.

This page is a starting route. For a fuller readiness workflow, use the **[CRA Readiness Gap Analysis](../resources/checklists-and-worksheets/cra-gap-analysis.md)**. For retained records, use the **[Secure-by-Design Evidence Pack](../resources/policy-and-evidence/audit-evidence-pack.md)**.

## Sprint Output

By the end of the first sprint, aim to have:

- a named product-security owner;
- a first product boundary and architecture note;
- an initial CRA scope and readiness view;
- a vulnerability reporting route or plan;
- a first evidence register;
- a prioritised backlog for secure boot, identity, provisioning, OTA, SBOM/VEX, logging, and vulnerability handling.

## Sprint 1: Establish Ownership And Scope

Start with the decisions that unblock the rest of the work.

| Task | Output | Handbook route |
|------|--------|----------------|
| Appoint a product-security owner | Named owner and escalation path. | [What is Secure-by-Design?](./what-is-secure-by-design.md) |
| Confirm product scope | Device, cloud, mobile app, update service, support tool, and supplier boundary. | [Types of Embedded Device](../resources/reference/types-of-embedded-device.md) |
| Check CRA relevance | Initial scope note and likely product class. | [CRA 5-Minute Primer](./cra-primer.md), [CRA Overview](../standards/eu/cra/index.md) |
| Start a gap register | First set of gaps, owners, and next actions. | [CRA Readiness Gap Analysis](../resources/checklists-and-worksheets/cra-gap-analysis.md) |
| Start an evidence register | Evidence locations, owners, and missing records. | [Secure-by-Design Evidence Pack](../resources/policy-and-evidence/audit-evidence-pack.md) |

## Sprint 2: Set Up Vulnerability And Supply-Chain Basics

Create the minimum operating routes for reports, dependencies, and security findings.

| Task | Output | Handbook route |
|------|--------|----------------|
| Create or plan `security.txt` | Public security contact route and owner. | [Vulnerability Disclosure](../implementation/operate-phase/vulnerability-disclosure.md), [Policy Starter Kit](../resources/policy-and-evidence/policy-templates.md) |
| Draft a public CVD policy | Policy URL, reporting channel, scope, and response expectations. | [Vulnerability Disclosure](../implementation/operate-phase/vulnerability-disclosure.md) |
| Generate an initial SBOM | SBOM format, build step, and storage location. | [SBOM & VEX Workflows](../implementation/build-phase/sbom-vex.md) |
| Add dependency and secret scanning | CI checks or backlog items with owners. | [CI/CD Pipeline Hardening](../implementation/operate-phase/cicd-hardening.md) |
| Define vulnerability intake handling | Triage owner, case log, severity method, and escalation path. | [Vulnerability Disclosure](../implementation/operate-phase/vulnerability-disclosure.md) |

## Sprint 3: Review Core Product Controls

Use the first evidence and scope work to choose technical priorities.

| Task | Output | Handbook route |
|------|--------|----------------|
| Review device identity | Identity model, onboarding assumptions, and lifecycle gaps. | [Unique Device Identity](../implementation/build-phase/unique-device-identity.md) |
| Review key provisioning | Key inventory, trust-anchor choice, and provisioning gaps. | [Key Provisioning & Storage](../implementation/build-phase/key-provisioning.md) |
| Review secure boot | Boot-chain scope, trust-anchor evidence, and failure behaviour gaps. | [Secure Boot](../implementation/build-phase/secure-boot.md) |
| Review OTA updates | Update verification, rollback, recovery, rollout, and customer communication gaps. | [Secure OTA Updates](../implementation/build-phase/ota-updates.md) |
| Review cryptography | Crypto inventory, certificate lifecycle, and migration concerns. | [Cryptography under the CRA](../resources/cryptography/cryptography-under-cra.md) |

## Backlog Template

Use this simple format for first-sprint secure-by-design work.

| Item | Owner | Evidence | Status | Next action |
|------|-------|----------|--------|-------------|
| Product boundary | | Architecture note | Not started / In progress / Done | |
| CRA scope check | | Scope note | Not started / In progress / Done | |
| Vulnerability reporting route | | `security.txt`, policy draft | Not started / In progress / Done | |
| SBOM generation | | SBOM artifact, CI job | Not started / In progress / Done | |
| Secure boot review | | Boot-chain note, test plan | Not started / In progress / Done | |
| OTA update review | | Update architecture, recovery tests | Not started / In progress / Done | |
| Identity and provisioning review | | Identity model, key inventory | Not started / In progress / Done | |
| Evidence register | | Evidence pack index | Not started / In progress / Done | |

## What Not To Do In The First Sprint

Avoid spending the first sprint trying to:

- buy a tool before defining the workflow it supports;
- declare CRA readiness without a gap register and evidence map;
- treat secure-by-design as only firmware work;
- ignore cloud, mobile app, backend, supplier, update, and support boundaries;
- create policies that no internal process can actually operate.

## Where To Go Next

After the first sprint:

- use the **[CRA Readiness Gap Analysis](../resources/checklists-and-worksheets/cra-gap-analysis.md)** to turn gaps into an action plan;
- use the **[Secure-by-Design Evidence Pack](../resources/policy-and-evidence/audit-evidence-pack.md)** to keep records tied to product scope and release;
- use **[How to Use This Handbook](./how-to-use-handbook.md)** if different teams need role-specific reading paths.
