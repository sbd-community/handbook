---
title: "SBOM & VEX Workflows"
sidebar_label: "SBOM & VEX"
sidebar_position: 7
tags: [sbom, vex, spdx, cyclonedx, cra, supply-chain]
---

# SBOM & VEX Workflows

A **Software Bill of Materials (SBOM)** records the software components in a product or release. A **Vulnerability Exploitability eXchange (VEX)** record explains whether a known vulnerability in one of those components affects the product.

For connected-product teams, SBOM and VEX are not just files produced by a scanner. They are part of the release and vulnerability-handling workflow: component inventory, vulnerability monitoring, triage, affected-product analysis, remediation, customer communication, and retained evidence.

Use this page to decide how SBOMs are generated, linked to releases, scanned for vulnerabilities, used during triage, and connected to VEX, advisories, updates, and the Secure-by-Design Evidence Pack.

This page is engineering and product-security guidance. It is not legal advice.

## Use This Page When

Use this page when you need to:

- generate an SBOM for firmware, software, cloud, mobile, gateway, or bootloader components;
- decide what component records belong in a release evidence pack;
- scan product components for known vulnerabilities;
- triage whether a CVE actually affects a product or release;
- publish or retain VEX statements, advisories, release notes, or customer notices;
- connect component visibility to vulnerability disclosure, patch cadence, OTA updates, and CRA evidence.

## What Good Looks Like

A mature SBOM and VEX workflow should be able to show:

- each production release has an SBOM or component inventory tied to product, version, build, and release scope;
- SBOMs use a standard machine-readable format such as SPDX or CycloneDX;
- first-party, open-source, commercial, firmware, bootloader, OS, container, cloud, and application components are covered where in scope;
- vulnerability scanning is repeated after release, not only at build time;
- vulnerability findings are triaged against actual product use, configuration, reachability, and exploitability;
- VEX or equivalent status records explain `affected`, `not_affected`, `fixed`, or `under_investigation` decisions;
- SBOM, VEX, vulnerability log, update record, release note, and customer communication records are linked;
- open findings, exceptions, and risk acceptances have owners and review dates.

## Regulatory Context

The **[Cyber Resilience Act (CRA)](../../standards/eu/cra/index.md)** explicitly requires manufacturers to identify and document components, including by drawing up a software bill of materials ([CRA Annex I, Part II § 1][cra_annexI]). It also requires manufacturers to provide information and documentation to market surveillance authorities when requested ([CRA Article 13][cra_art13]).

BSI TR-03183-1 reinforces this with a requirement to document integrated components ([REQ_VH 1][bsi_tr_03183_p1]).

The CRA does not make "VEX" the only permitted communication format. VEX is a practical, standardised way to communicate vulnerability status and exploitability analysis, especially where customers or operators need machine-readable context.

Boot managers and bootloader components should be treated as first-class SBOM entries. The draft **[ETSI EN 304 623](../../standards/eu/cra/en-304-623-boot-managers.md)** makes vulnerability handling and support-period evidence relevant even for low-level firmware that teams may historically have tracked outside the normal software inventory.

## SBOM vs VEX

SBOM and VEX answer different questions.

| Artefact | Question it answers | Typical audience |
|----------|---------------------|------------------|
| SBOM | What components are in this product, release, image, service, or firmware? | Manufacturer, assessor, customer, vulnerability manager, authority on request. |
| VEX | Does this known vulnerability affect this specific product or release? | Manufacturer, customer, operator, vulnerability manager, support or incident-response team. |
| Advisory | What happened, what versions are affected, and what should users do? | Customers, users, distributors, CSIRTs, regulators, researchers. |
| Vulnerability log | What did the manufacturer know, decide, fix, communicate, and retain? | Internal product-security, compliance, support, incident-response, and evidence owners. |

An SBOM without a triage process can create noise. A VEX record without an accurate SBOM and vulnerability log is hard to trust.

## What Belongs In The SBOM?

Coverage should be defined by product scope and release scope.

Common SBOM content includes:

- open-source packages and transitive dependencies;
- commercial libraries, SDKs, BSPs, middleware, drivers, and RTOS components;
- first-party modules where they are meaningful release components;
- firmware images, bootloaders, boot managers, update agents, containers, and services;
- cryptographic libraries and protocol stacks;
- mobile apps, cloud services, web components, and gateway software where they affect product security;
- component names, versions, suppliers, licences, identifiers such as PURL or CPE, hashes, and build metadata.

For [component visibility](https://supplychainsecurityhandbook.com/technology-options/sbom-vex-component-visibility/), the useful question is not just "did we produce an SBOM?" It is "can we quickly identify whether a vulnerability affects a product, version, customer, or support-period decision?"

## Release Workflow

Integrate SBOM generation into the release pipeline.

| Step | What happens | Evidence to retain |
|------|--------------|--------------------|
| Define scope | Decide which product, image, service, app, component, or release the SBOM covers. | SBOM scope note, product boundary, release identifier. |
| Generate SBOM | Produce SPDX, CycloneDX, or another accepted machine-readable format from the build or source. | SBOM file, tool version, generation logs. |
| Validate coverage | Check that expected first-party, third-party, firmware, bootloader, OS, and service components are represented. | Coverage review, known exclusions, exception records. |
| Scan for vulnerabilities | Compare components against vulnerability sources such as NVD, GHSA, vendor advisories, or commercial intelligence. | Scan result, vulnerability feed metadata, triage queue. |
| Triage findings | Determine affected/not affected/under investigation/fixed status for the product context. | Triage notes, reachability or configuration rationale, owner. |
| Gate release | Decide whether to ship, block, patch, mitigate, or accept risk. | Release approval, exception, remediation plan, risk owner. |
| Store evidence | Retain SBOM, scan, triage, release, and communication records together. | Evidence pack entry, retention location, review trigger. |
| Monitor after release | Re-scan SBOMs when new vulnerabilities, advisories, or component updates appear. | Post-release scan records, vulnerability log updates. |

## VEX Workflow

Use VEX or equivalent status records after vulnerability triage.

Common VEX statuses include:

| Status | Meaning | Evidence needed |
|--------|---------|-----------------|
| `under_investigation` | The team is assessing whether the vulnerability affects the product. | Triage owner, start date, affected products under review. |
| `not_affected` | The vulnerable component is present, but the product is not affected. | Rationale such as vulnerable code not present, not reachable, disabled configuration, protected path, or platform not affected. |
| `affected` | The product is affected and needs remediation, mitigation, or customer guidance. | Impact analysis, remediation plan, customer communication plan. |
| `fixed` | The affected product or release has been fixed. | Fixed version, update record, release note, test evidence. |

VEX is most useful when it is connected to the vulnerability log and release records. A bare `not_affected` assertion without rationale is weak evidence.

For practical vulnerability-status analysis, see the Supply Chain Security Handbook's guidance on [software components vulnerability management](https://supplychainsecurityhandbook.com/practices-controls/software-components-vulnerability-management/).

## Vulnerability Triage Questions

When a component vulnerability appears, record the decision path.

| Question | Why it matters |
|----------|----------------|
| Is the component present in this product or release? | Confirms whether the SBOM match is real. |
| Is the vulnerable version present? | Avoids false matches from naming or package confusion. |
| Is the vulnerable code included in the build? | Some builds exclude optional modules or compile-time features. |
| Is the vulnerable code reachable in the product configuration? | Reachability affects exploitability and urgency. |
| Is the affected interface exposed locally, remotely, or only internally? | Exposure changes severity and customer guidance. |
| Are mitigations already present? | Sandboxing, authentication, configuration, or protocol restrictions may change status. |
| Which products, versions, customers, regions, or support periods are affected? | Drives update targeting and communication. |
| Is exploitation known or likely? | May trigger escalation under vulnerability disclosure or incident reporting workflows. |
| What remediation, mitigation, or risk acceptance is planned? | Connects VEX to patch cadence and evidence. |

## Evidence To Retain

Transfer SBOM and VEX evidence into the **[Secure-by-Design Evidence Pack](../../resources/policy-and-evidence/audit-evidence-pack.md)**.

Useful evidence includes:

| Evidence | Why it matters |
|----------|----------------|
| SBOM files for released versions | Shows component inventory tied to product and release scope. |
| SBOM generation method | Shows how the SBOM was produced and whether the process is repeatable. |
| SBOM coverage review | Shows known exclusions, blind spots, and component classes in scope. |
| Vulnerability scan results | Shows what was found and when. |
| Triage records | Shows affected/not-affected decisions and rationale. |
| VEX records | Shows machine-readable vulnerability status where used. |
| Vulnerability log references | Connects component findings to product-security workflow. |
| Remediation and release records | Shows fixes, mitigations, update availability, and release approvals. |
| Customer communication | Shows advisories, release notes, support notices, or direct notifications. |
| Exception and risk-acceptance records | Shows open findings, owner, rationale, expiry, and review date. |

## Common Gaps

Common SBOM and VEX gaps include:

- generating an SBOM once but not tying it to a release;
- scanning source dependencies but missing firmware, bootloader, BSP, RTOS, container, cloud, or mobile components;
- ignoring transitive dependencies or vendored code;
- producing an SBOM but not storing tool version, generation method, or scope;
- treating every scanner finding as equally urgent without product triage;
- publishing `not_affected` VEX statements without rationale;
- fixing a vulnerability but not updating VEX, advisory, release notes, or evidence records;
- retaining SBOMs in CI artifacts that expire before the product support period ends;
- failing to connect SBOM findings to OTA updates, patch cadence, vulnerability disclosure, and customer communication.

## Tooling Options

Manual SBOMs are rarely sustainable beyond very simple products. Most teams need automated generation and scanning in CI/CD, plus a case-management or vulnerability workflow for triage.

Useful tooling categories include:

- SBOM generators such as [Syft](https://github.com/anchore/syft);
- vulnerability scanners such as [Grype](https://github.com/anchore/grype) or Trivy;
- SCA platforms and dependency-management tools;
- VEX authoring, publication, or vulnerability-status tooling;
- artifact repositories that retain SBOMs next to builds;
- vulnerability intelligence and case-management systems.

For product and tooling examples, see **[SBOM & Supply Chain Security](../../tools/sbom-and-supply-chain-security.md)**.

## SBOM & VEX Checklist

Before release, confirm that:

- [ ] **Release scope:** The SBOM is tied to a product, version, build, service, image, or firmware release.
- [ ] **Standard format:** The SBOM uses a machine-readable format such as SPDX or CycloneDX.
- [ ] **Coverage:** First-party, third-party, transitive, firmware, bootloader, OS, service, app, and cloud components are covered where in scope.
- [ ] **Repeatability:** The SBOM generation method, tool version, and build context are retained.
- [ ] **Scanning:** SBOMs are scanned before release and monitored after release.
- [ ] **Triage:** Vulnerability findings have affected/not-affected/fixed/under-investigation decisions and rationale.
- [ ] **VEX or equivalent:** Vulnerability status can be communicated or retained in a structured form where needed.
- [ ] **Workflow linkage:** SBOM/VEX records connect to vulnerability disclosure, patch cadence, OTA updates, advisories, and customer communication.
- [ ] **Evidence retention:** SBOMs, scans, triage, VEX, release records, exceptions, and communications are retained for the support period.

## Related Pages

If you need to:

- operate vulnerability intake and triage, use **[Vulnerability Disclosure](../operate-phase/vulnerability-disclosure.md)**;
- plan remediation timing and release expectations, use **[Patch Cadence & Rollback Strategy](../operate-phase/patch-cadence.md)**;
- deliver fixes safely, use **[Secure OTA Updates](./ota-updates.md)**;
- collect release and vulnerability evidence, use the **[Secure-by-Design Evidence Pack](../../resources/policy-and-evidence/audit-evidence-pack.md)**;
- assess gaps across the product, use the **[CRA Readiness Gap Analysis](../../resources/checklists-and-worksheets/cra-gap-analysis.md)**;
- understand boot-manager component evidence, use **[ETSI EN 304 623: Boot Managers](../../standards/eu/cra/en-304-623-boot-managers.md)**;
- compare supporting tools, use **[SBOM & Supply Chain Security](../../tools/sbom-and-supply-chain-security.md)**.

[cra_art13]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_13 "CRA Article 13 - Obligations of manufacturers"
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I - Essential cybersecurity requirements"
[bsi_tr_03183_p1]: https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI-TR-03183-1-0_9_0.pdf "BSI TR-03183 Part 1: General requirements"
