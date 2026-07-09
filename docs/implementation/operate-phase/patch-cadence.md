---
title: "Patch Cadence & Rollback Strategy"
sidebar_label: "Patch Management"
tags: [patch-management, vulnerability-handling, cra, ota, policy]
sidebar_position: 2
---

# Patch Cadence & Rollback Strategy

**Patch cadence** is the operating commitment for how quickly a manufacturer assesses, remediates, releases, communicates, and evidences fixes for vulnerabilities. **Rollback strategy** defines when reverting an update is safe, when it is dangerous, and how the product recovers without reintroducing known risk.

For connected products, patch management sits between vulnerability handling and update delivery. Vulnerability Disclosure decides what has been reported and triaged. Secure OTA Updates decides how fixes are delivered safely. Patch cadence decides when the team acts, what evidence is retained, and how customers know what to do.

Use this page to define remediation timing, support-period expectations, rollout controls, rollback rules, customer communication, and technical-file evidence.

This page is product-security and operations guidance. It is not legal advice.

## Use This Page When

Use this page when you need to:

- define target remediation timelines by severity, exploitability, and product impact;
- decide how vulnerability triage feeds release planning;
- align patch commitments with OTA capability, manual updates, recall, replacement, or mitigation;
- define when rollback is safe and when anti-rollback must block downgrade;
- publish or update security update and support-period expectations;
- retain evidence for vulnerability handling, release approval, customer communication, and CRA technical documentation.

## What Good Looks Like

A practical patch cadence and rollback strategy should be able to show:

- a declared support period and security update commitment for each product or product family;
- severity and exploitability criteria that drive remediation priority;
- target timelines for triage, mitigation, patch release, communication, and closure;
- an escalation path for actively exploited vulnerabilities and severe incidents;
- release records linking each fix to affected products, versions, SBOM/VEX status, vulnerability log entries, and customer communication;
- rollout controls that can pause, accelerate, or target updates;
- rollback rules that distinguish safe recovery from unsafe downgrade to vulnerable versions;
- evidence for update testing, rollout monitoring, rollback/anti-rollback behavior, and open exceptions;
- a plan for products that cannot be updated remotely.

## Regulatory Context

The **[Cyber Resilience Act (CRA)](../../standards/eu/cra/index.md)** requires manufacturers to handle and remediate vulnerabilities without delay and to securely distribute updates where updates are provided ([CRA Annex I, Part II][cra_annexI]).

BSI TR-03183-1 reinforces this by requiring timely vulnerability handling ([REQ_VH 2][bsi_tr_03183_p1]) and a public vulnerability disclosure policy ([REQ_VH 5][bsi_tr_03183_p1]).

The regulation does not prescribe one universal patch deadline for every product and severity. Product teams need a risk-based process that can explain timing, prioritisation, remediation decisions, communication, and evidence.

## Patch Cadence vs OTA Updates

Patch cadence and OTA are related but different.

| Topic | Main question | Guide |
|-------|---------------|-------|
| Vulnerability disclosure | How do reports arrive, get triaged, and become vulnerability records? | [Vulnerability Disclosure](./vulnerability-disclosure.md) |
| Patch cadence | How quickly do we decide, fix, release, communicate, and retain evidence? | This page |
| OTA updates | How do we securely deliver, verify, recover, roll out, and evidence updates? | [Secure OTA Updates](../build-phase/ota-updates.md) |
| SBOM/VEX | Which components and vulnerabilities are affected, fixed, or not affected? | [SBOM & VEX Workflows](../build-phase/sbom-vex.md) |

Do not publish patch commitments that the update architecture cannot realistically meet.

## Define Support-Period Commitments

Patch cadence depends on the declared support period.

For each product or product family, record:

- support start and end dates;
- supported hardware variants, firmware versions, apps, services, regions, and configurations;
- security update mechanism: OTA, manual update, service visit, replacement, recall, or mitigation-only;
- customer communication channels;
- end-of-support or end-of-life policy;
- exception handling for unsupported, offline, modified, or customer-managed deployments.

Support-period commitments should be discoverable by customers and usable by support, vulnerability handling, release, and compliance teams.

## Risk-Based Cadence

Use severity as an input, not the only decision factor.

| Priority | Typical triggers | Expected response |
|----------|------------------|-------------------|
| Emergency | Active exploitation, remote unauthenticated compromise, safety impact, widespread fleet exposure, severe privacy impact, or regulatory reporting trigger. | Immediate escalation, mitigation guidance where possible, accelerated fix, targeted or out-of-band release, customer notification, close executive and legal/compliance coordination. |
| High | Network-exploitable vulnerability, credential compromise, update bypass, privilege escalation, sensitive data exposure, or significant customer impact. | Prioritised remediation, accelerated release or next suitable security update, VEX/advisory update, customer communication where action is needed. |
| Medium | Exploitability depends on local access, unusual configuration, user interaction, limited exposure, or compensating controls. | Scheduled security or maintenance release with documented triage rationale and owner. |
| Low | Limited impact, hard-to-exploit issue, defence-in-depth fix, or informational exposure with low customer impact. | Opportunistic fix, backlog tracking, periodic review, or accepted risk with rationale. |

Define target timeframes that fit the product risk, sector, customer commitments, update mechanism, and support model. Keep the targets realistic enough to operate and specific enough to audit.

## Remediation Workflow

A patch cadence should connect vulnerability triage to release evidence.

| Step | Action | Evidence to retain |
|------|--------|--------------------|
| Intake | Receive vulnerability report, scanner finding, supplier advisory, customer report, or internal finding. | Vulnerability log entry, source, timestamp. |
| Triage | Confirm affected products, severity, exploitability, and support status. | Affected-version analysis, severity rationale, SBOM/VEX references. |
| Prioritise | Assign cadence, escalation path, and owner. | Priority decision, target dates, escalation record. |
| Mitigate | Decide temporary guidance, configuration change, feature disablement, monitoring, or customer warning if needed. | Mitigation record, communication draft, risk rationale. |
| Fix | Develop, review, test, and approve the security fix. | Change record, test evidence, release approval. |
| Release | Deliver update, advisory, VEX/status update, release notes, or customer notice. | Update record, rollout/campaign record, advisory URL, customer notice. |
| Monitor | Watch update success, failures, telemetry, support cases, and exploit signals. | Rollout dashboard, incident/support records, rollback decision if any. |
| Close | Confirm remediation status and evidence completeness. | Closure note, final vulnerability status, evidence pack entry. |

## Rollout Strategy

Deploying an update to every device at once can turn one defect into a fleet-wide incident. Use rollout controls proportionate to fleet size and product risk.

Typical rollout stages include:

- internal and QA deployment;
- pilot or canary group;
- limited customer or region rollout;
- staged percentages with pause criteria;
- full rollout after monitoring;
- manual or assisted update path for offline or customer-managed devices.

For each rollout, record what would cause the team to pause, accelerate, rollback, block downgrade, or notify customers.

## Rollback Strategy

Rollback can mean several different things. Be precise.

| Rollback type | Use with care because |
|---------------|----------------------|
| Campaign rollback | Stopping the update campaign prevents additional devices from receiving a problematic release, but does not fix devices already updated. |
| Device recovery rollback | A device may revert to a last-known-good image after failed installation or failed first boot. This can protect availability. |
| Security downgrade | Reinstalling an older vulnerable version may restore availability but reintroduce known risk. Anti-rollback controls may need to block it. |
| Server-side eligibility rollback | The backend may stop offering a version or change eligibility rules. This must be recorded and monitored. |
| Customer manual rollback | Customer-driven rollback can create uncontrolled security exposure unless tightly documented and time-limited. |

The safest design usually allows recovery from bad updates while preventing downgrade to vulnerable versions where that would create unacceptable risk.

Use **[Secure OTA Updates](../build-phase/ota-updates.md)** for device-side recovery, anti-rollback, A/B slots, signed packages, and rollout evidence.

## Non-OTA Or Non-Updateable Products

Some products cannot support remote updates because of technical constraints or deliberate security architecture decisions.

That does not remove the need for vulnerability handling. The patch cadence should define how the team will:

- monitor for vulnerabilities affecting the product;
- assess severity and exploitability;
- provide mitigation guidance;
- notify customers, distributors, operators, or authorities where needed;
- provide secure physical update, service visit, replacement, recall, or decommissioning guidance;
- record why remote update is not supported and what compensating process applies.

If a product cannot be updated at all, the support and customer communication obligations become more important, not less.

## Public Policy vs Internal Procedure

Keep public commitments understandable and internal procedures operational.

| Artefact | Audience | Include |
|----------|----------|---------|
| Public security update policy | Customers, users, distributors, researchers, assurance reviewers. | Support period, update availability, vulnerability reporting route, high-level remediation expectations, end-of-support statement. |
| Internal patch procedure | Product security, engineering, release, support, legal/compliance. | Severity criteria, owners, escalation path, target timelines, release gates, rollback rules, authority reporting, customer communication, evidence records. |
| Release record | Internal, sometimes customer-shareable. | Fixed issues, affected versions, tests, approvals, rollout state, VEX/advisory references. |

Use the **[Secure-by-Design Policy Starter Kit](../../resources/policy-and-evidence/policy-templates.md)** for starter policy outlines.

## Evidence To Retain

Transfer patch and rollback evidence into the **[Secure-by-Design Evidence Pack](../../resources/policy-and-evidence/audit-evidence-pack.md)**.

Useful evidence includes:

| Evidence | Why it matters |
|----------|----------------|
| Support-period statement | Shows when security updates or alternatives are provided. |
| Patch cadence policy | Shows severity criteria, target timelines, and responsibilities. |
| Vulnerability log | Shows findings, owners, priority, status, and closure. |
| Affected-version analysis | Shows which products, versions, customers, or configurations are affected. |
| SBOM/VEX records | Shows component and vulnerability status. |
| Remediation plan | Shows fix, mitigation, release, replacement, recall, or risk-acceptance path. |
| Release approval | Shows who approved the fix and when. |
| Update test evidence | Shows the update was verified, recoverable, and rollback-aware. |
| Rollout records | Shows deployment scope, timing, pause criteria, monitoring, and completion. |
| Rollback or anti-rollback evidence | Shows recovery is safe and unsafe downgrade is controlled. |
| Customer communication | Shows advisories, release notes, mitigation guidance, or direct notices. |
| Exception records | Shows deferred issues, accepted risks, unsupported products, or non-OTA rationale. |

## Common Gaps

Common patch cadence and rollback gaps include:

- publishing a vulnerability disclosure route but having no remediation timing model;
- defining severity targets that engineering, QA, signing, OTA, or support teams cannot meet;
- treating rollback as always safe, even when it reintroduces a known vulnerability;
- fixing a vulnerability without updating SBOM/VEX, advisory, release notes, or evidence records;
- missing support-period or end-of-support communication;
- lacking a process for offline, manually updated, customer-managed, or non-updateable devices;
- releasing urgent patches without enough recovery, rollback, or campaign-pause evidence;
- not recording why a finding was deferred, accepted, or judged not affected.

## Patch Cadence Checklist

Before release, confirm that:

- [ ] **Support period:** Product support period and update availability are defined.
- [ ] **Cadence:** Severity, exploitability, product impact, and support status drive target response times.
- [ ] **Workflow:** Vulnerability intake, triage, remediation, release, communication, monitoring, and closure are connected.
- [ ] **Rollback rules:** Recovery rollback, campaign rollback, and unsafe downgrade are distinguished.
- [ ] **OTA alignment:** Update architecture can support the commitments being made.
- [ ] **Non-OTA path:** Manual update, mitigation, replacement, recall, or customer notification paths exist where OTA is unavailable.
- [ ] **Customer communication:** Release notes, advisories, mitigation guidance, and support statements can be issued where needed.
- [ ] **Evidence:** Vulnerability log, SBOM/VEX, release, rollout, rollback, communication, and exception records are retained.

## Related Pages

If you need to:

- receive, triage, and record vulnerability reports, use **[Vulnerability Disclosure](./vulnerability-disclosure.md)**;
- deliver fixes safely, use **[Secure OTA Updates](../build-phase/ota-updates.md)**;
- connect component findings to product status, use **[SBOM & VEX Workflows](../build-phase/sbom-vex.md)**;
- draft public and internal policies, use the **[Secure-by-Design Policy Starter Kit](../../resources/policy-and-evidence/policy-templates.md)**;
- retain remediation and release evidence, use the **[Secure-by-Design Evidence Pack](../../resources/policy-and-evidence/audit-evidence-pack.md)**;
- assess process gaps, use the **[CRA Readiness Gap Analysis](../../resources/checklists-and-worksheets/cra-gap-analysis.md)**;
- log exploitation and rollout signals, use **[Security Logging & Monitoring](./security-logging.md)**.

[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I - Essential cybersecurity requirements"
[bsi_tr_03183_p1]: https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI-TR-03183-1-0_9_0.pdf "BSI TR-03183 Part 1: General requirements"
