---
title: "Secure OTA Updates"
sidebar_label: "OTA Updates"
sidebar_position: 6
tags: [ota, secure-update, firmware, cra, integrity, rollback-protection]
---

# Secure OTA Updates

**Secure over-the-air (OTA) updates** let a manufacturer deliver security fixes to deployed products without weakening firmware integrity, bricking devices, or losing evidence of what changed. For connected products, the update mechanism is part of the security architecture, not just a delivery channel.

Use this page to decide how updates are authorised, signed, delivered, verified, recovered, rolled out, communicated, and evidenced over the product support period.

This page is engineering guidance. It helps with secure-by-design planning and technical documentation, but it is not legal advice or a conformity assessment.

## Use This Page When

Use this page when you need to:

- design or review a firmware, software, bootloader, or configuration update path;
- decide whether the product can support security updates during its support period;
- connect OTA design to secure boot, anti-rollback, recovery, signing, vulnerability remediation, and customer communication;
- prepare update evidence for a release review, CRA technical file, customer assurance request, or vulnerability response;
- evaluate whether a product can justify a non-OTA update path.

## What Secure OTA Updates Do

A secure update mechanism protects the update lifecycle from release approval to post-installation verification.

It should answer:

- who is authorised to release an update;
- how the update package is signed, versioned, and protected;
- how the device verifies authenticity and integrity before installation;
- what happens if download, verification, installation, or first boot fails;
- how rollback to a vulnerable version is prevented where downgrade would create risk;
- how rollout, remediation, customer communication, and evidence are recorded.

Secure OTA is tightly coupled to **[Secure Boot](./secure-boot.md)**. The device should not only verify a package before installation; it should also boot only trusted code after the update is applied.

## What Good Looks Like

A secure update capability for a connected product should be able to show:

- a documented update architecture covering device, backend, signing, release approval, and recovery;
- signed update packages verified by the device before installation;
- protected signing keys and release authorisation workflow;
- versioning and anti-rollback controls where downgrade would create risk;
- atomic, power-fail-safe installation or another tested recovery mechanism;
- staged rollout or deployment controls appropriate to fleet size and risk;
- records linking each update to product version, vulnerability status, release approval, and customer communication;
- a declared support period and patch/remediation workflow;
- test evidence for valid update, invalid signature, interrupted update, rollback attempt, and recovery path.

## Regulatory And Standards Context

The **[Cyber Resilience Act (CRA)](../../standards/eu/cra/index.md)** expects manufacturers to support vulnerability handling and secure updates throughout the product lifecycle.

Two CRA Annex I requirements are especially relevant:

- **Security updates by design ([Annex I § 1(2)(c)][cra_annexI]):** products should be designed so security updates can be installed separately from functionality updates where technically feasible.
- **Integrity protection ([Annex I § 1(2)(f)][cra_annexI]):** products should protect the integrity of programs, data, commands, and configuration against unauthorised manipulation.

BSI TR-03183-1 reinforces this by requiring timely, integrity-protected security updates ([REQ_ER 4][bsi_tr_03183_p1]).

For boot managers, update recovery and anti-rollback are also emerging as assessor-facing evidence topics under **[ETSI EN 304 623](../../standards/eu/cra/en-304-623-boot-managers.md)**. Treat bootloader and trust-chain updates as security-critical update flows, not just another firmware payload.

## Do I Need OTA Updates?

For most connected products, the ability to deliver security updates is central to secure-by-design credibility. If the product has updateable software, network connectivity, known vulnerability exposure, or a declared support period, the update path should be designed and evidenced.

The question is usually not whether vulnerabilities will appear. The question is whether the manufacturer can remediate them safely.

### Narrow Exception: Technical Limitation

Some products genuinely cannot support remote updates because of hardware or architectural limits. Examples may include:

- factory-programmed immutable firmware;
- extreme flash, RAM, or power constraints;
- no physical or wireless interface capable of receiving update data.

Even then, the manufacturer should document the limitation, the risk rationale, and any replacement, recall, physical-update, or compensating process.

### Narrow Exception: Security Architecture

Some high-assurance, safety-critical, or air-gapped products may deliberately forbid remote updates because remote modification creates unacceptable risk.

That does not remove the need for vulnerability handling. The manufacturer still needs a documented process for secure physical updates, replacement, recall, mitigation, or customer notification.

## Core Update Controls

### Authenticity And Integrity

Every update package should be cryptographically signed before release and verified by the device before installation.

Signing should be connected to a release authorisation process, not just a build step. Record who approved the release, which product/version it applies to, which signing key was used, and where the signed artefact is stored.

### Versioning And Anti-Rollback

Attackers may try to install an older vulnerable version after a fix is released. Anti-rollback controls prevent unsafe downgrade.

Common patterns include monotonic version counters, rollback indices, protected metadata, eFuses, secure storage, or server-side update eligibility checks. The right design depends on product architecture, update frequency, recovery needs, and support-period commitments.

### Resilience And Atomicity

Updates fail in the real world: power loss, connectivity loss, corrupted downloads, full storage, bad images, and unexpected reboot loops.

The update process should either complete safely or leave the product in a known-good state. Common patterns include:

- A/B slots or dual-bank firmware;
- verified install before activation;
- first-boot health checks;
- automatic rollback to last-known-good image;
- authenticated recovery mode;
- campaign halt controls on the update backend.

### Confidentiality

Encrypting update packages may be useful when firmware contains sensitive intellectual property, credentials, configuration, or other material that should not be exposed in transit or in storage.

Encryption does not replace signing. A confidential but unauthorised update is still unsafe.

### Rollout And Monitoring

Deploying an update to every device at once can turn one mistake into a fleet-wide incident. Use rollout controls proportionate to the product risk and fleet size:

- internal and QA deployment;
- canary or pilot group;
- staged rollout percentages;
- telemetry or support signal monitoring;
- pause and rollback criteria;
- customer or operator communication where action is needed.

## Anatomy Of A Secure OTA Architecture

| Component | Role | Evidence to retain |
|-----------|------|--------------------|
| Device-side update client | Checks for updates, downloads packages, verifies metadata/signatures, installs or triggers installation. | Client design, verification tests, failure and recovery tests. |
| Bootloader or installer | Activates the update and enforces rollback/recovery behaviour. | Boot/update integration design, A/B or recovery test evidence. |
| Update server or campaign service | Hosts update metadata, product targeting, rollout controls, and deployment state. | Campaign records, access controls, rollout logs, halt/rollback records. |
| Code-signing infrastructure | Signs firmware or software artefacts under controlled conditions. | Signing policy, key custody records, release approvals, signed artefact hashes. |
| Vulnerability and release workflow | Links remediation decisions to update content and support commitments. | Vulnerability log, affected-version analysis, release notes, customer communication records. |

## Evidence To Retain

Transfer update evidence into the **[Secure-by-Design Evidence Pack](../../resources/policy-and-evidence/audit-evidence-pack.md)**. Useful evidence includes:

| Evidence | Why it matters |
|----------|----------------|
| Update architecture diagram | Shows device, backend, signing, recovery, and trust boundaries. |
| Update-package format and metadata | Shows how product, version, dependency, and eligibility information is represented. |
| Signing and release approval records | Shows who authorised the update and how authenticity is protected. |
| Verification test results | Shows invalid, tampered, or unauthorised updates are rejected. |
| Interrupted-update tests | Shows power loss, network loss, and reboot scenarios recover safely. |
| Rollback and anti-rollback tests | Shows unsafe downgrades are blocked and safe recovery is possible. |
| Staged rollout records | Shows deployment scope, timing, pause criteria, and fleet state. |
| Vulnerability remediation link | Shows which vulnerability, affected version, VEX/status record, or advisory the update addresses. |
| Customer communication | Shows release notes, security advisories, support statements, or operator instructions where needed. |
| Support-period statement | Shows how long updates will be provided and how that commitment is communicated. |

## Common Gaps

Common OTA update gaps include:

- verifying downloads in the cloud but not on the device;
- signing packages without a controlled release approval process;
- supporting updates but not testing failed-update or interrupted-update paths;
- allowing downgrade to vulnerable firmware;
- treating bootloader updates as ordinary application updates;
- lacking records that connect a security fix to vulnerability triage, release approval, and customer communication;
- having an update server audit trail but no product technical-file evidence;
- publishing support commitments that the update architecture cannot realistically meet;
- relying on manual field updates without a documented secure procedure.

## Tooling And Build-vs-Buy Decisions

Building a secure update mechanism from scratch is possible, but it requires careful design across device code, signing infrastructure, backend rollout, recovery behaviour, and support workflows.

- **Build approach:** teams may integrate open-source update clients, bootloader support, signing workflows, and backend rollout logic themselves. This gives control but requires deep testing of recovery, rollback, and fleet operations.
- **Buy approach:** frameworks and platforms such as [Mender](https://mender.io/) or [QuarkLink](https://quarklink.io/product/) can provide update clients, backend services, signing integration, campaign management, and device lifecycle features. These can reduce implementation risk, but the manufacturer still owns the product security case and evidence.

For more options, see **[Secure Update & OTA Frameworks](../../tools/secure-update-and-ota-frameworks.md)**.

## Secure OTA Checklist

Before release, confirm that:

- [ ] **Signature verification:** Every update is signed and verified by the device before installation.
- [ ] **Release authorisation:** Signing is tied to an approved release workflow.
- [ ] **Version binding:** Update metadata identifies product, version, dependencies, and eligibility.
- [ ] **Anti-rollback:** The product prevents unsafe downgrade to vulnerable firmware or configuration.
- [ ] **Power-fail safety:** Interrupted download, installation, or first boot does not brick the product.
- [ ] **Authenticated recovery:** Recovery mode accepts only authorised images or actions.
- [ ] **Boot integration:** Updated code is still protected by secure boot or equivalent integrity checks.
- [ ] **Staged rollout:** Deployment can be paused, limited, monitored, and resumed safely where fleet risk requires it.
- [ ] **Vulnerability linkage:** Security updates are tied to vulnerability records, affected-version decisions, and remediation status.
- [ ] **Customer communication:** Release notes, advisories, or operator instructions are published where users need to know or act.
- [ ] **Technical documentation:** Update design, tests, release approvals, rollout records, and support commitments are retained.

## Related Pages

If you need to:

- protect boot and recovery after an update, use **[Secure Boot](./secure-boot.md)**;
- define update timing and rollback policy, use **[Patch Cadence & Rollback Strategy](../operate-phase/patch-cadence.md)**;
- receive, triage, and communicate vulnerabilities, use **[Vulnerability Disclosure](../operate-phase/vulnerability-disclosure.md)**;
- manage signing keys and provisioning, use **[Key Provisioning & Storage](./key-provisioning.md)**;
- assess cryptographic mechanisms, use **[Cryptography under the CRA](../../resources/cryptography/cryptography-under-cra.md)**;
- plan boot-manager evidence, use **[ETSI EN 304 623: Boot Managers](../../standards/eu/cra/en-304-623-boot-managers.md)**;
- retain update evidence, use the **[Secure-by-Design Evidence Pack](../../resources/policy-and-evidence/audit-evidence-pack.md)**.

[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I - Essential cybersecurity requirements"
[bsi_tr_03183_p1]: https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI-TR-03183-1-0_9_0.pdf "BSI TR-03183 Part 1: General requirements"
