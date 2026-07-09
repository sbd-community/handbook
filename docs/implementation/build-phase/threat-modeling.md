---
title: "Threat Modeling"
sidebar_label: "Threat Modeling"
sidebar_position: 0
tags: [threat-modeling, risk-assessment, stride, cra, secure-by-design]
---

# Threat Modeling

**Threat modeling** is the structured process for understanding how a connected product could be attacked, what risks matter most, which mitigations are needed, and what evidence supports those decisions.

For secure-by-design work, the output is not just a diagram or workshop notes. A useful threat model produces security requirements, risk decisions, mitigations, test priorities, release gates, and evidence for the product technical file.

Use this page to run a proportionate threat model for a product, release, feature, architecture change, vulnerability response, or conformity-assessment preparation.

This page is engineering and product-security guidance. It is not legal advice.

## Use This Page When

Use this page when you need to:

- define the product boundary and trust boundaries;
- identify threats across device, firmware, cloud, mobile app, update service, support tooling, and suppliers;
- turn security concerns into product requirements and mitigations;
- justify why a control is required, not required, deferred, or implemented differently;
- create evidence for CRA risk assessment, release review, customer assurance, or internal governance;
- refresh the risk model after a major update, new feature, vulnerability, incident, or architecture change.

## What Good Looks Like

A useful threat model should be able to show:

- the product, release, architecture, or feature scope being assessed;
- a diagram or description of components, data flows, trust boundaries, and assumptions;
- important assets, security goals, users, attackers, and misuse cases;
- threats identified using a repeatable method such as STRIDE, attack trees, misuse cases, or scenario review;
- risk ratings or prioritisation criteria;
- mitigations linked to threats and product requirements;
- accepted risks, deferred work, and exceptions with owners and review dates;
- test, verification, and evidence actions linked to the mitigations;
- a review trigger for future updates, vulnerabilities, incidents, or architecture changes.

## Regulatory Context

The **[Cyber Resilience Act (CRA)](../../standards/eu/cra/index.md)** requires manufacturers to undertake a cybersecurity risk assessment and account for the result during product planning, design, development, production, delivery, and maintenance ([CRA Article 13 § 2][cra_art13]).

BSI TR-03183-1 provides practical interpretation by requiring a documented risk assessment covering the product's intended and reasonably foreseeable use ([REQ_RA 1][bsi_tr_03183_p1]).

Threat modeling is not the only way to perform a risk assessment, but it is one of the most practical ways for engineering teams to produce the decisions and evidence the risk assessment needs.

## How Much Threat Modeling Is Enough?

Scale the effort to product risk and complexity.

| Product type | Proportionate approach | Typical output |
|--------------|------------------------|----------------|
| Simple low-impact device | Short workshop or written review focused on product boundary, obvious assets, update path, physical access, and misuse cases. | One-page model, key risks, rationale for lightweight controls, evidence note. |
| Standard connected product | Structured review of device, cloud, app, update service, identity, provisioning, and vulnerability handling. | Architecture diagram, threat register, mitigations, test actions, evidence map. |
| High-impact or regulated product | Formal method, multi-team workshops, safety/privacy analysis, detailed risk scoring, traceability to requirements and verification. | Full threat model, risk register, security requirements, verification plan, release gates, evidence package. |
| Major update or new feature | Delta review against the existing model. | Changed data flows, new threats, updated mitigations, release evidence. |

The important question is not "did we use a particular tool?" It is "can we explain the risks we considered, the decisions we made, and the evidence behind those decisions?"

## Threat Modeling Workflow

Use a repeatable workflow that turns analysis into decisions.

| Step | What to do | Output |
|------|------------|--------|
| Define scope | State the product, feature, release, variant, service, or support-period decision being assessed. | Scope note, assumptions, exclusions. |
| Map architecture | Identify device, hardware, firmware, OS, cloud, app, APIs, update service, manufacturing, support, and supplier components. | Architecture and trust-boundary diagram. |
| Identify assets and goals | Identify data, credentials, keys, firmware, commands, safety functions, availability, privacy, and customer operations that need protection. | Asset list and security goals. |
| Identify threats | Use STRIDE, misuse cases, attack trees, known failure patterns, vulnerability history, or architecture-specific prompts. | Threat list or threat register. |
| Rate and prioritise | Estimate likelihood, impact, exposure, exploitability, safety/privacy effect, support burden, and customer impact. | Risk rating and priority. |
| Define mitigations | Choose controls, design changes, operational processes, tests, or customer guidance. | Security requirements and mitigation plan. |
| Record decisions | Mark risks as mitigated, accepted, deferred, transferred, or under investigation. | Decision record with owner and review date. |
| Connect evidence | Decide what tests, records, policies, release artifacts, or monitoring prove the mitigation exists. | Evidence map and release gate actions. |
| Review and refresh | Update the model after changes, vulnerabilities, incidents, supplier changes, or support-period decisions. | Review log and updated risk register. |

## Start With Architecture

A threat model is only as good as the system boundary it uses.

Before identifying threats, record:

- device type and architecture class;
- hardware trust anchors, secure elements, TPMs, TEEs, MCUs, MPUs, radios, gateways, and coprocessors;
- firmware, bootloader, operating system, application, cloud, mobile app, and update-service components;
- data flows, commands, credentials, certificates, logs, update packages, and support access paths;
- trust boundaries between device, user, installer, cloud, customer network, manufacturer, distributor, and supplier systems;
- assumptions about physical access, network exposure, customer operation, support period, and intended use.

Use **[Types of Embedded Device](../../resources/reference/types-of-embedded-device.md)** to classify the architecture before choosing controls.

## STRIDE Prompt Set

STRIDE is a practical way to prompt threat discovery.

| Category | Product-team question | Example connected-product threat |
|----------|-----------------------|----------------------------------|
| Spoofing | Can an attacker pretend to be a user, device, cloud service, update server, installer, or support tool? | A cloned device authenticates to the backend. |
| Tampering | Can an attacker modify firmware, configuration, commands, logs, update packages, or sensor data? | A firmware update is altered before installation. |
| Repudiation | Can a user, device, service, or operator deny an important action? | A privileged command has no reliable audit trail. |
| Information disclosure | Can sensitive data, credentials, keys, logs, or telemetry be exposed? | Private keys are readable from flash or debug access. |
| Denial of service | Can the product, update path, cloud dependency, battery, storage, or safety function be made unavailable? | Repeated malformed packets crash the device. |
| Elevation of privilege | Can a low-privilege user, process, device, or network actor gain higher privilege? | A local API allows unauthorised admin configuration. |

STRIDE is not mandatory. Use it when it helps. For some products, misuse cases, attack trees, safety hazard analysis, privacy review, or sector-specific prompts may be more effective.

## Threat Register Template

Use a threat register to connect findings to action.

| Field | Notes |
|-------|-------|
| ID | Stable identifier for the threat or risk. |
| Scope | Product, release, component, data flow, feature, or architecture area. |
| Threat | What could happen and who could cause it. |
| Asset or goal | What would be harmed: safety, data, integrity, availability, privacy, support, customer operation. |
| Scenario | How the threat could occur in realistic use or foreseeable misuse. |
| Impact | Consequence if the threat is realised. |
| Likelihood or exposure | Practical chance, accessibility, attacker capability, known exploitation, or exposure. |
| Risk rating | High, medium, low, or the team's chosen scale. |
| Mitigation | Control, design change, test, process, monitoring, or customer guidance. |
| Status | Open, mitigated, accepted, deferred, under investigation, or closed. |
| Owner | Person or team responsible for the next action. |
| Evidence | Link to design record, test result, release gate, policy, log, or evidence pack entry. |
| Review trigger | Release, architecture change, vulnerability, incident, support-period change, or review date. |

## Turning Threats Into Requirements

Threat modeling becomes valuable when findings change product work.

| Threat finding | Possible requirement or mitigation | Related guide |
|----------------|------------------------------------|---------------|
| Device can be impersonated | Unique device identity and protected credentials. | [Unique Device Identity](./unique-device-identity.md), [Key Provisioning & Storage](./key-provisioning.md) |
| Firmware can be modified | Secure boot and signed update verification. | [Secure Boot](./secure-boot.md), [Secure OTA Updates](./ota-updates.md) |
| Update interruption can brick device | Atomic update, recovery partition, rollback-safe design. | [Secure OTA Updates](./ota-updates.md) |
| Vulnerable dependency may affect release | SBOM scanning and vulnerability triage. | [SBOM & VEX Workflows](./sbom-vex.md) |
| Security events cannot be investigated | Security logging and monitoring. | [Security Logging & Monitoring](../operate-phase/security-logging.md) |
| Vulnerability reports have no owner | CVD policy and vulnerability log. | [Vulnerability Disclosure](../operate-phase/vulnerability-disclosure.md) |
| Cryptographic choice may age poorly | Crypto inventory and migration trigger. | [Cryptography under the CRA](../../resources/cryptography/cryptography-under-cra.md) |

## Evidence To Retain

Transfer threat-model evidence into the **[Secure-by-Design Evidence Pack](../../resources/policy-and-evidence/audit-evidence-pack.md)**.

Useful evidence includes:

| Evidence | Why it matters |
|----------|----------------|
| Scope and assumptions | Shows what product, release, feature, or architecture was assessed. |
| Architecture and trust-boundary diagram | Shows what was analysed and where trust changes. |
| Asset and security-goal list | Shows what the team intended to protect. |
| Threat register | Shows identified threats, risks, mitigations, owners, and status. |
| Risk rating method | Shows how priorities were decided. |
| Mitigation mapping | Links threats to security requirements, design controls, tests, or policies. |
| Accepted-risk records | Shows rationale, owner, review date, and conditions. |
| Review log | Shows the model was updated after changes, vulnerabilities, or incidents. |
| Release-gate evidence | Shows high-priority risks were resolved or consciously accepted before release. |

## Examples

Use examples to calibrate proportionality:

- **[Low-Stakes BLE Sensor Threat Model](../../resources/example-documents/threat-model-low-stakes-ble-sensor.md)**: shows a lightweight model for a low-risk device.
- **[Smart Thermostat Threat Model](../../resources/example-documents/threat-model-smart-thermostat.md)**: shows a common consumer IoT product with device, app, and cloud concerns.
- **[CGM System Threat Model](../../resources/example-documents/threat-model-cgm.md)**: shows a higher-impact connected medical product where safety and patient data change the depth needed.

## Common Gaps

Common threat-modeling gaps include:

- doing a workshop but not recording decisions, owners, or evidence;
- drawing a diagram that omits cloud services, mobile apps, update backend, support tooling, or suppliers;
- treating the threat model as finished after design instead of refreshing it during maintenance;
- rating risks without explaining the scoring method;
- identifying threats but not turning them into requirements, tests, or backlog items;
- accepting risk without an owner, rationale, expiry, or review trigger;
- claiming controls that the selected architecture cannot enforce;
- failing to connect the threat model to the CRA gap register, evidence pack, or release gate.

## Tooling Options

Threat modeling can start with a whiteboard, architecture diagram, and spreadsheet. Dedicated tools help when the model needs to be maintained over several releases, components, or teams.

Useful tooling categories include:

- diagramming tools for data-flow and trust-boundary diagrams;
- threat-modeling tools such as the [Microsoft Threat Modeling Tool](https://aka.ms/tmt);
- risk-register or issue-tracking systems;
- requirements-management tools that link threats to mitigations and tests;
- evidence repositories that preserve diagrams, decisions, reviews, and release gates.

For more examples, see **[Threat Modeling Tools](../../tools/threat-modeling-tools.md)**.

## Threat Modeling Checklist

Before release, confirm that:

- [ ] **Scope:** The threat model identifies the product, release, feature, or architecture area assessed.
- [ ] **Boundary:** Device, firmware, cloud, mobile app, update service, support tooling, and supplier dependencies are considered where relevant.
- [ ] **Architecture:** Components, data flows, trust boundaries, and assumptions are documented.
- [ ] **Threat discovery:** A repeatable method such as STRIDE, misuse cases, or attack trees was used.
- [ ] **Risk decisions:** Threats are prioritised with a documented method.
- [ ] **Mitigations:** High-priority threats map to requirements, controls, tests, or operational processes.
- [ ] **Evidence:** Threats, mitigations, release gates, accepted risks, and review records are retained.
- [ ] **Refresh:** Review triggers are defined for major changes, vulnerabilities, incidents, and support-period decisions.

## Related Pages

If you need to:

- understand why secure-by-design changes the product process, use **[What is Secure-by-Design?](../../quick-start/what-is-secure-by-design.md)**;
- classify product architecture and constraints, use **[Types of Embedded Device](../../resources/reference/types-of-embedded-device.md)**;
- turn risks into an action plan, use the **[CRA Readiness Gap Analysis](../../resources/checklists-and-worksheets/cra-gap-analysis.md)**;
- retain risk and mitigation evidence, use the **[Secure-by-Design Evidence Pack](../../resources/policy-and-evidence/audit-evidence-pack.md)**;
- compare example models, use the **[Low-Stakes BLE Sensor](../../resources/example-documents/threat-model-low-stakes-ble-sensor.md)**, **[Smart Thermostat](../../resources/example-documents/threat-model-smart-thermostat.md)**, and **[CGM System](../../resources/example-documents/threat-model-cgm.md)** examples;
- choose technical mitigations, use **[Secure Boot](./secure-boot.md)**, **[Secure OTA Updates](./ota-updates.md)**, **[Unique Device Identity](./unique-device-identity.md)**, and **[Key Provisioning & Storage](./key-provisioning.md)**.

[cra_art13]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_13 "CRA Article 13 - Obligations of manufacturers"
[bsi_tr_03183_p1]: https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI-TR-03183-1-0_9_0.pdf "BSI TR-03183 Part 1: General requirements"
