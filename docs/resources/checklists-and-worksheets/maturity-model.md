---
title: "Secure-by-Design Maturity Model"
sidebar_label: "Maturity Model"
tags: [maturity-model, assessment, compliance, cra, secure-by-design]
---
# Secure-by-Design Maturity Model

A maturity model is a tool that helps an organization measure the effectiveness and completeness of its practices against a defined standard. This Secure-by-Design (SbD) maturity model is designed to help you assess your product security capabilities, identify gaps, and build a roadmap for continuous improvement.

Using this model, you can benchmark your current state against the practices required by regulations like the **Cyber-Resilience Act (CRA)** and standards like **IEC 62443-4-1**.

## The Maturity Levels

| Level | Name | Description |
| :---: | :--- | :--- |
| **1** | **Initial** | Security practices are ad-hoc, chaotic, and reactive. There are no formal processes, and success depends on individual effort. |
| **2** | **Developing** | Basic processes are established, but they are inconsistent and not well-documented. Security is addressed, but often late in the development cycle. |
| **3** | **Defined** | The organization has a set of documented, standardized security processes that are followed across projects. This is the target level for demonstrating baseline compliance. |
| **4** | **Managed** | The organization actively measures the effectiveness of its security processes using quantitative metrics. There is a focus on continuous improvement. |
| **5** | **Optimizing** | Processes are continuously improved through a feedback loop based on quantitative data. The organization is proactive and anticipates future threats. |

## How to Use This Model

1.  **Gather your team:** Involve stakeholders from engineering, product management, and compliance.
2.  **Assess each capability:** For each row in the table below, honestly assess which description best matches your organization's current practice.
3.  **Identify your level:** Your overall maturity level for a domain is typically the lowest level you consistently achieve across its capabilities.
4.  **Build a roadmap:** Identify high-priority capabilities where you need to advance to the next level. Use the descriptions for **Level 3: Defined** and **Level 4: Managed** as your target state for demonstrating compliance.

---

## Assessment Matrix

### Domain 1: Governance & Risk Management

| Capability | Level 1: Initial | Level 2: Developing | Level 3: Defined | Level 4: Managed | Level 5: Optimizing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Security Policy & Ownership** | No formal policies. Security is "someone else's problem." | Basic security policy exists but is not enforced. Ownership is unclear. | A formal, board-approved Product Security policy exists. A specific role (e.g., PSIRT lead) owns it. | Policy is reviewed annually and updated based on incident metrics. | Policy is a living document, updated proactively based on threat intelligence. |
| **Risk Assessment** | Risks are only considered after a security incident. | Informal risk discussions happen, but are not documented or repeatable. | A documented risk assessment process (e.g., threat modeling) is required for all new major features. | Risk assessments are tracked, and their effectiveness is measured (e.g., % of new vulns that were predicted). | Automated tools are integrated into the design phase to provide continuous risk analysis. |
| **SbD Training** | No security training is provided. | Developers have access to optional, generic security training materials. | All engineers complete annual, role-specific secure development training. | Training effectiveness is measured with assessments. Content is updated based on internal bug data. | Training includes adversarial thinking and is integrated into the developer onboarding process. |

### Domain 2: Secure Development Lifecycle (SDL)

| Capability | Level 1: Initial | Level 2: Developing | Level 3: Defined | Level 4: Managed | Level 5: Optimizing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Threat Modeling** | Not performed. | Performed inconsistently, usually for "high-risk" features, with no formal process. | Threat modeling is a mandatory, documented step for all new products and major changes. | Models are stored in a central repository and reviewed. Mitigation effectiveness is tracked. | Threat models are automatically updated based on code changes and new CVE data. |
| **Security Testing (SAST/SCA)** | No automated scanning. Relies on manual code review, if any. | Scans are run manually by a security team before release. | SAST and SCA scans are integrated into the CI/CD pipeline and block builds on critical findings. | Scan results are tracked over time. False positive rates and fix times are measured. | Custom rules are developed based on internal bug patterns. Scans provide automated fix suggestions. |
| **Hardening & Secure Config** | Default credentials are used. Non-essential ports/services are enabled. | Some hardening is done, but there is no formal baseline. | A documented, version-controlled secure configuration baseline is applied to all products. | The baseline is regularly audited for compliance. Deviations trigger automated alerts. | The baseline is dynamically updated based on threat intelligence. Unused code is stripped from production builds. |

### Domain 3: Supply Chain Security

| Capability | Level 1: Initial | Level 2: Developing | Level 3: Defined | Level 4: Managed | Level 5: Optimizing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **SBOM Generation & Management** | No knowledge of software components. | An informal list of dependencies is kept on a wiki page. | An accurate SBOM is automatically generated in a standard format (e.g., SPDX, CycloneDX) for every release build. | SBOMs are stored in a central repository and used to continuously monitor for new vulnerabilities. | SBOM data is used to drive supplier governance and architectural decisions. |
| **Third-Party Component Vetting** | Any open-source component can be used without approval. | Developers are asked to "use popular" libraries. | A documented policy defines criteria for approving new third-party components (e.g., license, security posture). | The security posture of all suppliers is tracked over time. High-risk suppliers are identified. | Automated tooling blocks the introduction of any unapproved or vulnerable components. |
| **VEX Generation** | No process to analyze vulnerability impact. | Impact analysis is done via email and spreadsheets after a customer asks. | A VEX document is generated for critical vulnerabilities to inform customers if a product is affected. | The VEX generation process is partially automated, linked to the SBOM and vulnerability scanner. | VEX information is provided via a machine-readable API for customer integration. |

### Domain 4: Vulnerability Management & Operations

| Capability | Level 1: Initial | Level 2: Developing | Level 3: Defined | Level 4: Managed | Level 5: Optimizing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Vulnerability Monitoring & Triage** | We learn about vulnerabilities from customers or the media. | A security alias (`security@`) exists, but no formal triage process. | A formal process exists to triage all incoming reports (internal & external) with defined severity levels. | Triage time and accuracy are measured. A dedicated PSIRT manages the process. | Automated enrichment of vulnerability data with product context to speed up triage. |
| **Patch Cadence & SLAs** | Patches are released "when they are ready." | An informal goal exists to patch critical issues. | Formal SLAs for patching vulnerabilities of different severity levels are documented and published. | "Time to patch" metrics are tracked and reported to management. | The organization consistently beats its public SLAs for critical patches. |
| **Secure Update Mechanism** | Updates are delivered via insecure means or require manual installation. | Updates are cryptographically signed, but no rollback protection exists. | Updates are signed, delivered over a secure channel, and include anti-rollback protection. | The update success rate across the device fleet is monitored. | A/B testing of updates is used to ensure stability before full rollout. |
| **Public Disclosure Policy (CVD)** | No public policy. | A `security@` email is listed, but with no commitment. | A formal CVD policy is published, including scope, safe harbor, and response SLAs. | The organization tracks its performance against its public SLAs. | The company actively engages with the research community and offers bug bounties. |

---

*This model is a guide for self-assessment and improvement, not a formal audit checklist. Contribute to this page via our [GitHub repository](https://github.com/sbd-community/handbook).* 