---
title: "Secure-by-Design Policy Starter Kit"
sidebar_label: "Policy Templates"
sidebar_position: 2
description: "Starter policy templates and outlines for connected-product teams covering coordinated vulnerability disclosure, vulnerability handling, security updates, secure development, and CRA evidence records."
tags: [templates, policy, cvd, vulnerability-disclosure, vulnerability-handling, patch-management, secure-development, cra, technical-documentation, evidence, security-txt]
---
# Secure-by-Design Policy Starter Kit

Use these starter templates and outlines when you need to turn secure-by-design intentions into clear public commitments, internal operating procedures, and retained evidence.

Policies are not evidence by themselves. A policy says what the organisation intends to do; operational records show whether the policy is actually followed. Use this page with the **[CRA Readiness Gap Analysis](../checklists-and-worksheets/cra-gap-analysis.md)** and the **[Secure-by-Design Evidence Pack](./audit-evidence-pack.md)**.

:::warning Legal review
These templates are starting points for product-security policy documentation. They are not legal advice. Review final public commitments, safe-harbor language, support statements, and disclosure wording with appropriate legal and business owners before publishing.
:::

## What This Page Is For

Use this page to:

- draft public product-security policies;
- define internal procedures for handling reports, patches, releases, and support decisions;
- decide what records should be retained in your evidence pack;
- align policy language with product scope, support period, and vulnerability-handling obligations.

The templates are deliberately generic. Adapt them to the product, company size, support model, risk profile, jurisdictions, and customer commitments that apply.

This is not a complete legal template library. It is a starter kit for the policy artefacts connected-product teams commonly need to operate secure-by-design practices and retain evidence.

## Public vs Internal Policies

Some policy material should be public because customers, researchers, integrators, or regulators need to know how to engage with you. Other material should remain internal because it describes operating details, roles, escalation paths, tooling, or incident response processes.

Do not publish operational detail that would help attackers. Do retain enough internal evidence to show that the process exists and is operating.

## Policy Starter Set

Most connected-product teams should maintain a small set of public commitments and internal operating procedures.

| Policy artefact | Public or internal | Why it matters | Evidence to retain |
|-----------------|--------------------|----------------|--------------------|
| Coordinated Vulnerability Disclosure policy | Public | Gives researchers and users a clear reporting route. | Published policy URL, `security.txt`, report acknowledgements, triage records. |
| `security.txt` | Public | Makes the security contact and policy machine-readable. | Current file, expiry date, owner, review reminder. |
| Vulnerability Handling procedure | Internal | Defines intake, triage, severity, remediation, escalation, reporting, and communication. | Vulnerability log, triage records, remediation decisions, reporting runbook. |
| Security Update and Patch policy | Public summary plus internal procedure | Explains support periods, update commitments, patch timing, rollback/recovery, and customer communication. | Patch policy, release notes, update logs, test evidence, support-period records. |
| Secure Development Lifecycle policy | Internal, sometimes customer-shareable | Defines secure-by-design activities across design, build, test, release, and maintenance. | SDL policy, threat models, scan results, release gates, exception records. |
| Product Security Evidence and Technical Documentation policy | Internal | Defines what records are retained, who owns them, and when they are refreshed. | Evidence pack, technical documentation index, evidence register, review records. |

## Template 1: Coordinated Vulnerability Disclosure Policy

A public CVD policy is a practical way to support the CRA's vulnerability-handling requirements ([CRA Annex I, Part II][cra_annexI]). It provides a clear channel for researchers, customers, and users to report potential vulnerabilities and sets expectations for coordinated disclosure.

Host the policy on a stable public URL such as `https://www.example.com/security` or `https://www.example.com/vulnerability-disclosure-policy`, and link to it from `/.well-known/security.txt`.

```markdown
# Security & Vulnerability Disclosure Policy

## Our Commitment

At [Company Name], we are committed to protecting the security of our products, services, and users. We value reports from security researchers, customers, partners, and the wider community.

This policy explains how to report a potential vulnerability to us and what you can expect from our vulnerability handling process.

## Scope

This policy applies to the following products and services:

- [Product, model, firmware, software, cloud service, mobile app, API, or domain in scope]
- [Product, model, firmware, software, cloud service, mobile app, API, or domain in scope]

Security support is provided for in-scope products during their declared support period. Support-period dates and update availability are published at [support-period URL or product documentation location].

The following activities are out of scope unless we have given written permission:

- denial-of-service or resource-exhaustion testing;
- social engineering, phishing, or physical attacks;
- accessing, modifying, deleting, or exfiltrating data that does not belong to you;
- testing third-party services or systems that we do not own or operate;
- actions that intentionally disrupt product availability, safety, or user privacy.

## Authorization and Safe Harbor

If you make a good-faith effort to comply with this policy, we will consider your research authorized. We will not pursue or support legal action against you for accidental, good-faith violations of this policy.

[Optional, subject to legal review:] If legal action is initiated by a third party against you for activities conducted in accordance with this policy, we may confirm, where appropriate, that your report was submitted under this policy.

This authorization applies only to security research that:

- is limited to the products and services in scope;
- avoids harm to users, systems, services, and data;
- stops testing and reports promptly if you encounter sensitive data, unsafe behavior, or service disruption;
- gives us a reasonable opportunity to investigate and remediate before public disclosure.

## How to Report a Vulnerability

Please report vulnerabilities through one of the following channels:

- Email: security@example.com
- Web form: https://www.example.com/security/report
- PGP key: https://www.example.com/.well-known/pgp-key.txt

To help us triage your report, please include:

- the affected product, service, version, model, firmware, software, or configuration;
- a clear description of the vulnerability and potential impact;
- steps to reproduce the issue;
- proof-of-concept code, logs, screenshots, or network traces where appropriate;
- whether you believe the vulnerability is being actively exploited;
- your preferred contact details and whether you want public recognition.

## What You Can Expect From Us

When you report a vulnerability under this policy, we will aim to:

- acknowledge receipt within [example: 3 business days];
- provide an initial triage update within [example: 10 business days];
- keep you informed of material status changes;
- coordinate public disclosure timing where appropriate;
- credit you publicly if you want recognition and the report is valid.

Timelines may vary depending on severity, product complexity, third-party coordination, safety impact, and whether the issue is actively exploited.

## Triage, Escalation, and Coordination

We assess reports based on affected product scope, severity, exploitability, user impact, safety impact, active exploitation, and available mitigations.

If a report may involve active exploitation, severe incident impact, a supplier component, or an upstream open-source project, we may escalate internally and coordinate with affected suppliers, maintainers, customers, or authorities as appropriate.

## Coordinated Disclosure

Please do not publicly disclose the vulnerability until we have had a reasonable opportunity to investigate, remediate, and notify affected users or customers.

If we need additional time because a fix requires hardware changes, supplier coordination, safety review, or staged rollout, we will explain the reason and provide an updated timeline where possible.

Once a fix or mitigation is available, we may publish a security advisory that describes the affected product, affected versions, impact, severity, remediation steps, and any user action required.

## Privacy and Data Handling

We will use information submitted under this policy for defensive purposes, including validation, remediation, customer protection, regulatory reporting, and security improvement. We will not share your name or contact details without your permission unless required by law.

## Internal Records

We retain internal records of vulnerability reports, triage decisions, remediation actions, advisories, customer notifications, and evidence needed for product-security review and technical documentation.

## Questions

If you are unsure whether your research is in scope, contact us before testing: security@example.com
```

## Template 2: `security.txt`

`security.txt` is a machine-readable file defined by [RFC 9116][rfc_9116]. It helps researchers find your vulnerability reporting contact and disclosure policy.

Place it at:

```text
https://www.example.com/.well-known/security.txt
```

At minimum, RFC 9116 requires `Contact` and `Expires`. Add `Policy` so researchers can find the CVD policy above.

```text
Contact: mailto:security@example.com
Contact: https://www.example.com/security/report
Expires: 2027-01-01T00:00:00Z
Policy: https://www.example.com/security
Canonical: https://www.example.com/.well-known/security.txt
Preferred-Languages: en
Encryption: https://www.example.com/.well-known/pgp-key.txt
```

Review the file before it expires. Stale contact details can cause vulnerability reports to be missed or sent to the wrong place.

## Internal Vulnerability Handling Procedure Outline

Use this outline with the **[Vulnerability Disclosure](../../implementation/operate-phase/vulnerability-disclosure.md)** guide.

The procedure should define:

- product, firmware, software, cloud, mobile app, component, and service scope;
- intake sources, including CVD reports, internal findings, customers, suppliers, vulnerability databases, and media reports;
- report acknowledgement process and evidence retained;
- triage owner, severity model, affected/not-affected decision process, and escalation criteria;
- how actively exploited vulnerabilities and severe incidents are escalated;
- who decides whether CRA reporting, customer notification, supplier coordination, or public advisory publication is required;
- how supplier, upstream, and open-source coordination is handled;
- how duplicate, invalid, out-of-scope, and already-known reports are recorded;
- how remediation decisions, exceptions, risk acceptances, and closure are approved;
- what records are retained in the evidence pack.

Useful evidence includes vulnerability log, triage records, severity assessment, affected-version analysis, VEX or vulnerability status records, escalation notes, reporting runbook, supplier coordination records, and closure records.

## Security Update and Patch Policy Outline

Use this outline with the **[Patch Cadence & Rollback Strategy](../../implementation/operate-phase/patch-cadence.md)** guide.

The policy should define:

- product, firmware, software, cloud, mobile app, and service scope;
- declared support period and update commitment;
- target remediation timelines or prioritisation principles by severity;
- which update types are provided, such as security, safety, configuration, or functionality updates;
- whether updates are automatic, manual, staged, customer-managed, or unavailable for specific products;
- how updates are built, signed, tested, rolled out, monitored, and recovered;
- how rollback, recovery, failed update, and phased rollout decisions are made;
- how security advisories, release notes, and customer notifications are approved;
- how exceptions, risk acceptances, unpatchable products, and end-of-support cases are handled;
- what evidence is retained after each vulnerability, patch, advisory, or incident.

Useful evidence includes approved patch policy, release notes, patch log, update test results, signing evidence, rollout records, rollback/recovery evidence, customer notifications, support-period records, and end-of-support decisions.

## Secure Development Lifecycle Policy Outline

Use this outline with the **[CI/CD Pipeline Hardening](../../implementation/operate-phase/cicd-hardening.md)**, **[Threat Modeling](../../implementation/build-phase/threat-modeling.md)**, and **[SBOM & VEX Workflows](../../implementation/build-phase/sbom-vex.md)** guides.

The policy should define:

- when threat modeling, security requirements, and design reviews are required;
- required security checks such as SAST, SCA, secrets scanning, firmware analysis, fuzzing, or penetration testing;
- release gates and blocking criteria;
- SBOM generation and retention requirements;
- secure configuration, hardening, and build-integrity expectations;
- how exceptions are requested, approved, reviewed, and closed;
- how security findings are tracked to remediation or risk acceptance;
- how evidence is retained for product releases.

Useful evidence includes SDL policy, secure design records, threat models, scan configuration, scan results, exception records, SBOMs, release approvals, build logs, artifact signatures, and test reports.

## Product Security Evidence and Technical Documentation Policy Outline

Use this outline with the **[Secure-by-Design Evidence Pack](./audit-evidence-pack.md)** and **[User Documentation](../../implementation/build-phase/user-documentation.md)** guides.

The policy should define:

- which records must be retained for each product, release, support period, or conformity decision;
- who owns the evidence pack and technical documentation index;
- how product scope, version scope, support period, and known exclusions are recorded;
- how policies, risk assessments, threat models, SBOMs, test evidence, vulnerability records, user documentation, and release approvals are stored;
- how evidence quality is checked for scope, ownership, currency, verifiability, decision linkage, exceptions, and retention;
- how evidence is refreshed after updates, vulnerabilities, incidents, architecture changes, supplier changes, support-period changes, or end-of-life decisions;
- how gaps, exceptions, assumptions, and risk acceptances are made visible.

Useful evidence includes evidence pack, technical documentation index, evidence register, release baseline, owner list, review calendar, gap register, exception records, and lifecycle review records.

## Evidence to Retain

A useful policy record shows both the approved commitment and evidence that the commitment is operating.

| Evidence item | Why it matters |
|---------------|----------------|
| Approved policy text | Shows the public or internal commitment in force. |
| Policy owner | Identifies who maintains the policy and handles updates. |
| Public URL or repository location | Shows where the policy is published or retained. |
| Review date and next review date | Shows the policy is current. |
| `security.txt` file and expiry date | Shows the reporting channel is discoverable and maintained. |
| Triage workflow and role assignment | Shows reports can be processed, escalated, and tracked. |
| Vulnerability log and patch log | Shows the policy is operating over time. |
| Advisory and customer notification templates | Supports consistent communication during vulnerability handling. |
| Update test, rollout, and rollback evidence | Shows update commitments can be fulfilled safely. |
| Support-period statement | Shows what users can expect and when obligations change. |
| Exceptions and risk acceptances | Makes unresolved gaps visible. |
| Evidence-pack location | Shows where records are retained for product review, customer assurance, or CRA technical documentation. |

Transfer approved policies, owners, review dates, operating records, and open gaps into the **[Secure-by-Design Evidence Pack](./audit-evidence-pack.md)**.

## Related Pages

- [CRA Readiness Gap Analysis](../checklists-and-worksheets/cra-gap-analysis.md)
- [Secure-by-Design Evidence Pack](./audit-evidence-pack.md)
- [Secure-by-Design Maturity Model](../checklists-and-worksheets/maturity-model.md)
- [Vulnerability Disclosure](../../implementation/operate-phase/vulnerability-disclosure.md)
- [Patch Cadence & Rollback Strategy](../../implementation/operate-phase/patch-cadence.md)
- [CI/CD Pipeline Hardening](../../implementation/operate-phase/cicd-hardening.md)
- [Threat Modeling](../../implementation/build-phase/threat-modeling.md)
- [SBOM & VEX Workflows](../../implementation/build-phase/sbom-vex.md)
- [User Documentation](../../implementation/build-phase/user-documentation.md)

<!-- Citations -->
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements"
[rfc_9116]: https://datatracker.ietf.org/doc/html/rfc9116 "RFC 9116 – A File Format to Aid in Security Vulnerability Disclosure"