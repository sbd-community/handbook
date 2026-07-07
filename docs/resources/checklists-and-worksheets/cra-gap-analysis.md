---
title: "CRA Readiness Gap Analysis"
sidebar_label: "CRA Readiness"
sidebar_position: 1
description: "A practical CRA readiness checklist for connected-product teams assessing scope, secure-by-design controls, vulnerability handling, technical documentation, evidence gaps, and next actions."
tags: [cra, compliance, checklist, gap-analysis, readiness, secure-by-design, technical-documentation]
---
# CRA Readiness Gap Analysis

Use this CRA readiness checklist to assess where a connected product stands against Cyber Resilience Act expectations for scoping, secure-by-design remediation, technical documentation, release review, self-assessment or conformity assessment, and post-market vulnerability handling.

The aim is not just to answer "yes" or "no". The aim is to identify what evidence exists, what gaps remain, who owns them, and what action is needed next.

Use the completed checklist as an input to your **[Secure-by-Design Evidence Pack](../policy-and-evidence/audit-evidence-pack.md)**. The checklist identifies readiness and gaps; the evidence pack retains the supporting records.

This checklist is a starting point. Use it with the **[CRA Overview](../../standards/eu/cra/index.md)** and the [European Commission's official FAQ][ec_faq]. It does not replace legal advice or a formal conformity assessment.

## How to Use This Checklist

1. Define the product, version, release, or product family in scope.
2. Identify the requirement context: CRA, implementing regulations, harmonised standards or drafts, customer requirements, internal policy, or another applicable regime.
3. Work through each section with product, engineering, security, compliance, and support stakeholders.
4. Record the status, evidence location, owner, and next action for each item.
5. Treat `Partial`, `Not started`, `Planned`, and `Needs review` items as gaps.
6. Transfer evidence locations, gaps, owners, and review dates into the Secure-by-Design Evidence Pack.

## Outputs

By the end of this checklist, you should have:

- a scoped CRA readiness view;
- an evidence map;
- a gap register with owners and next actions;
- inputs for the Secure-by-Design Evidence Pack.

## Readiness Status Key

| Status | Meaning |
|--------|---------|
| `Not started` | No clear owner, plan, control, or evidence exists. |
| `Planned` | Need recognised, but implementation or evidence is not in place yet. |
| `Partial` | Some work exists, but scope, evidence, ownership, or coverage is incomplete. |
| `Implemented` | Control or process exists for the product or release in scope. |
| `Evidence available` | Evidence is scoped, current, owned, verifiable, and retained. |
| `Needs review` | Evidence may be outdated, incomplete, or affected by product, supplier, regulatory, or vulnerability change. |

:::tip Good evidence looks like
A good answer is not just "yes". It identifies the product or release in scope, links to the evidence, names the owner, and records any gaps, assumptions, or next actions.
:::

## 1. Scope the Product

Establish whether the product is in scope and what exactly is being assessed.

| Question | Status | Evidence | Owner | Next action |
|----------|--------|----------|-------|-------------|
| Is the product a **Product with Digital Elements** under the CRA? ([CRA Primer](../../quick-start/cra-primer.md), [EC FAQ 1.1-1.3][ec_faq]) | | Product description, connectivity analysis, scope memo. | | Confirm whether physical or logical data connections bring the product into scope. |
| What product, version, model, product family, hardware revision, firmware release, or service component is in scope? | | Product list, release baseline, variant list. | | Identify any variants or configurations that need separate review. |
| Does the product depend on a remote data-processing solution? | | Architecture diagram, cloud/service description, data-flow diagram. | | Decide whether cloud, mobile app, backend, or broker dependencies are part of the assessed product. |
| Are companion apps, cloud services, configuration tools, modules, or third-party services included? | | System boundary diagram, supplier list, dependency map. | | Record what is included and what is excluded. |
| What is explicitly out of scope? | | Scope statement, exclusion list, rationale. | | Confirm exclusions do not hide security-critical dependencies. |

## 2. Classify the Product and Conformity Route

Understand the likely CRA classification and assessment route. The checklist supports the analysis; it does not determine legal classification by itself.

:::tip Use official technical descriptions
**[Implementing Regulation (EU) 2025/2392][cra_impl_oj]** provides official technical descriptions for Important and Critical product categories. Use those definitions when assessing whether a product falls into an Annex III or IV category.
:::

| Question | Status | Evidence | Owner | Next action |
|----------|--------|----------|-------|-------------|
| What is the product's likely CRA risk class: Default, Important Class I, Important Class II, or Critical? ([Product Risk Classes](../../standards/eu/cra/index.md#product-risk-classes)) | | Product classification matrix, legal/compliance note. | | Confirm whether classification needs legal, Notified Body, or customer review. |
| Does the product fall into an Important or Critical product category? | | Annex III/IV category analysis, implementing-regulation mapping. | | Record category rationale and unresolved questions. |
| Which conformity route appears to apply? ([Conformity Assessment Routes](../../standards/eu/cra/index.md#conformity-assessment-routes)) | | Conformity route rationale, standards/certification plan. | | Decide whether self-assessment, harmonised standards, certification, or third-party assessment is expected. |
| Are relevant harmonised standards, drafts, or common specifications being tracked? | | Standards watch list, gap analysis, supplier evidence. | | Add applicable standards or drafts to the evidence pack. |
| If the product includes boot-manager, secure boot, or firmware-update functionality, have relevant harmonised standards, draft standards, or sector guidance been considered? | | Boot-chain assessment, secure boot/update scope note, standards watch list, **[ETSI EN 304 623](../../standards/eu/cra/en-304-623-boot-managers.md)** where relevant. | | Record whether the source is design intelligence, supplier due-diligence input, or a standard intended to support conformity. |

## 3. Check Secure Development and Vulnerability Handling

Assess whether the organisation has the processes needed to build and maintain a secure product.

| Question | Status | Evidence | Owner | Next action |
|----------|--------|----------|-------|-------------|
| Is there a documented secure development lifecycle? | | SDL policy, engineering process, release gates. | | Link process controls to product release decisions. |
| Is threat modeling required for new products or major changes? | | Threat model, risk assessment, design review records. | | Update model if product architecture, cloud dependencies, or update paths changed. |
| Are SAST, SCA, secrets scanning, firmware analysis, or other checks integrated into development or release? | | CI/CD configuration, scan outputs, exception records. | | Identify missing checks and owners. |
| Is there a public Coordinated Vulnerability Disclosure policy and contact route? | | CVD policy, `security.txt`, security contact page. | | Publish or update reporting channel and safe-harbor wording. |
| Is there a vulnerability triage process with owners, severity handling, and remediation tracking? | | Triage workflow, vulnerability log, SLA/policy. | | Assign owners for intake, triage, engineering, customer communication, and closure. |
| Is there a patch or security update policy? | | Patch policy, support-period statement, release process. | | Define update timing, severity handling, and customer expectations. |
| Is there a process for CRA reporting obligations for actively exploited vulnerabilities and severe incidents? ([CRA Art. 14][cra_art14]) | | Reporting runbook, incident response plan, role assignment. | | Rehearse reporting timeline and escalation path. |

## 4. Check Product Security Controls

Assess product-level secure-by-design controls for the product or release in scope.

| Question | Status | Evidence | Owner | Next action |
|----------|--------|----------|-------|-------------|
| Is the product secure by default? | | Secure configuration baseline, factory settings, reset behaviour. | | Identify insecure defaults, default credentials, or unsupported configuration states. |
| Are default passwords, shared credentials, or hard-coded secrets avoided? | | Credential design, secrets scan, provisioning records. | | Remove shared secrets or document compensating controls and remediation plan. |
| Is access to the device, service, and data controlled? | | Access-control design, authentication model, role definitions. | | Confirm least privilege and logging of unauthorised attempts. |
| Is sensitive data protected at rest and in transit? | | Data-flow diagram, crypto design, protocol configuration. | | Review algorithms, key handling, and sensitive-data scope. |
| Is software or firmware integrity protected? | | Secure boot design, firmware signing process, verification tests. | | Confirm the production configuration verifies mutable code before execution. |
| Is the update mechanism authenticated and protected against rollback where appropriate? | | OTA/update architecture, rollback tests, version-counter design. | | Add recovery and anti-rollback evidence to the evidence pack. |
| Is the attack surface minimised? | | Port/service list, interface inventory, hardening baseline. | | Disable, authenticate, or justify debug, service, and maintenance interfaces. |
| Are security logs available where appropriate? | | Logging design, sample logs, retention policy. | | Confirm logs support vulnerability handling, incident response, and user privacy. |
| Have known vulnerabilities been assessed for the product version being released, and has the affected/not-affected decision been recorded? | | Scan results, affected-version analysis, VEX or vulnerability status record. | | Resolve unknown or affected status before release, or record approved risk acceptance. |

## 5. Check Software Components and Updates

Give SBOM, component transparency, vulnerability status, and update readiness enough visibility.

| Question | Status | Evidence | Owner | Next action |
|----------|--------|----------|-------|-------------|
| Is an SBOM generated for every release? | | SBOM artifact, CI/CD job, generation process. | | Bind each SBOM to product, firmware, and release version. |
| Is the SBOM tied to the product version or firmware release? | | Release record, SBOM metadata, artifact repository. | | Add version binding or release reference if missing. |
| Are software, firmware, cloud, mobile-app, and configuration-tool components monitored for new vulnerabilities? | | Dependency monitoring workflow, advisory sources, supplier notifications. | | Assign owner for supplier, open-source, cloud, and app dependency monitoring. |
| Are affected/not-affected decisions recorded? | | VEX, vulnerability status record, triage notes, affected-product analysis. | | Add status definitions and approval workflow. |
| Is there a VEX or equivalent vulnerability-status process? | | VEX template, advisory workflow, customer status channel. | | Define how status is communicated and refreshed. |
| Is the update mechanism tested? | | Update test report, staged rollout evidence, failed-update test results. | | Test production update path, not just development fixtures. |
| Are rollback, recovery, staged rollout, and failed-update handling considered? | | Recovery test evidence, rollback policy, deployment records. | | Record what happens when update verification or installation fails. |
| Are customers told how long security updates will be provided? | | Support-period statement, user documentation, product page. | | Align public commitment with internal support and update capability. |

## 6. Check Technical Documentation and Evidence

Connect the readiness checklist to evidence preparation.

| Question | Status | Evidence | Owner | Next action |
|----------|--------|----------|-------|-------------|
| Is there a technical documentation index? | | Technical file index, document register. | | Create or update the index for the product/release in scope. |
| Is there a **[Secure-by-Design Evidence Pack](../policy-and-evidence/audit-evidence-pack.md)**? | | Evidence pack, evidence register, repository link. | | Transfer evidence locations, gaps, owners, and next actions from this checklist. |
| Are the risk assessment, architecture, test evidence, SBOM, user documentation, and vulnerability records retained? | | Evidence register, document repository, retention policy. | | Identify missing records and retention owner. |
| Are records tied to the product version or release? | | Release baseline, version metadata, evidence register. | | Update evidence that only refers to a product family or generic process. |
| Are evidence owners and review dates recorded? | | Evidence register, review calendar, ownership matrix. | | Assign owner and next review for each critical evidence item. |
| Are gaps and exceptions visible? | | Gap register, risk acceptance record, remediation backlog. | | Record release impact and approval path for unresolved gaps. |
| Is there a process to refresh evidence after updates, vulnerabilities, incidents, or product changes? | | Review trigger list, lifecycle evidence process. | | Add refresh triggers to release and support workflows. |

## 7. Check Post-Market Support and Reporting

Ensure the product remains supportable after release.

| Question | Status | Evidence | Owner | Next action |
|----------|--------|----------|-------|-------------|
| Is there a vulnerability monitoring process after release? | | Monitoring workflow, advisory feeds, supplier contacts. | | Confirm who reviews new advisories and how often. |
| Is there a patch and update log? | | Patch log, release notes, deployment records. | | Link patches to vulnerabilities, affected versions, and update status. |
| Is there a customer notification process? | | Advisory template, customer communication workflow. | | Define when and how customers are notified. |
| Is there an incident response process? | | Incident response plan, escalation path, tabletop exercise. | | Add product-security and CRA reporting roles. |
| Are CRA reporting obligations assigned to an owner? | | Reporting runbook, owner list, escalation matrix. | | Confirm who makes the notification decision and who submits reports. |
| Are reporting timelines understood and rehearsed? | | Exercise record, timeline checklist, contact list. | | Rehearse actively exploited vulnerability and severe incident scenarios. |
| Are end-of-support and end-of-life processes defined? | | EOL policy, customer notice template, final update plan. | | Record how users will be informed and how evidence is retained. |
| Is evidence refreshed after vulnerabilities, incidents, or major changes? | | Evidence refresh log, review records. | | Update the evidence pack after each significant lifecycle event. |

## Turning Gaps Into Actions

For each item marked `Not started`, `Planned`, `Partial`, or `Needs review`, record:

- the affected product, version, process, or team;
- the missing control or evidence;
- the owner;
- the target date;
- the release, conformity, customer, or post-market decision affected;
- whether the gap blocks release, requires risk acceptance, or can be remediated after release.

| Gap type | Typical priority |
|----------|------------------|
| Scope or classification unclear | High - the team cannot choose the right route or evidence set. |
| No vulnerability disclosure or triage process | High - affects CRA vulnerability-handling readiness. |
| No secure update path | High - affects post-market remediation and support commitments. |
| No SBOM or component inventory | High - weakens vulnerability triage and technical documentation. |
| Evidence exists but is not product- or release-scoped | Medium-high - may not support a release or conformity decision. |
| Policy exists but no operational records | Medium - the process may not be demonstrable. |

## Transfer Evidence Into Your Evidence Pack

The completed checklist is not the evidence pack. Use it to identify readiness, evidence locations, gaps, owners, and next actions.

Copy evidence locations, open gaps, owners, review dates, and release-impact notes into the **[Secure-by-Design Evidence Pack](../policy-and-evidence/audit-evidence-pack.md)**. The evidence pack should retain the supporting records and remain current throughout the product lifecycle.

## Related Pages

- [CRA Overview](../../standards/eu/cra/index.md)
- [Secure-by-Design Evidence Pack](../policy-and-evidence/audit-evidence-pack.md)
- [Secure-by-Design Maturity Model](./maturity-model.md)
- [Policy Templates](../policy-and-evidence/policy-templates.md)
- [Threat Modeling](../../implementation/build-phase/threat-modeling.md)
- [Secure Boot](../../implementation/build-phase/secure-boot.md)
- [Unique Device Identity](../../implementation/build-phase/unique-device-identity.md)
- [Key Provisioning & Storage](../../implementation/build-phase/key-provisioning.md)
- [OTA Updates & Patching](../../implementation/build-phase/ota-updates.md)
- [SBOM & VEX Workflows](../../implementation/build-phase/sbom-vex.md)
- [Vulnerability Disclosure](../../implementation/operate-phase/vulnerability-disclosure.md)
- [Patch Cadence & Rollback Strategy](../../implementation/operate-phase/patch-cadence.md)
- [Security Logging](../../implementation/operate-phase/security-logging.md)
- [User Documentation](../../implementation/build-phase/user-documentation.md)

<!-- Citations -->
[cra_art14]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_14 "CRA Article 14 – Reporting obligations of manufacturers"
[cra_impl_oj]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202502392 "Implementing Regulation (EU) 2025/2392 – Technical descriptions for product categories"
[ec_faq]: https://ec.europa.eu/newsroom/dae/redirection/document/122331 "European Commission – FAQs on the Cyber Resilience Act (Version 1.0, 3 December 2025)"
