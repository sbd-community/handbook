---
title: "CRA Gap Analysis Checklist"
sidebar_label: "CRA Gap Analysis"
tags: [templates, checklist, cra, compliance, gap-analysis]
---
# Tool: CRA Gap Analysis Checklist

A **Gap Analysis** is a critical first step in your journey to compliance with the **Cyber-Resilience Act (CRA)**. It helps you identify the differences ("gaps") between your current security practices and the legal requirements of the regulation.

Use this checklist to perform a high-level assessment of your organization's readiness. For each requirement, assess your current status and note the location of any existing evidence. This document can form the foundation of your compliance project plan.

> This checklist is a starting point. It should be used in conjunction with the detailed guides in this handbook and a thorough reading of the [full CRA Overview](../../standards/cra-overview.md).

---

## 1. Scoping & Classification

| Question | Status (Yes/No/Partial) | Evidence / Notes |
| :--- | :--- | :--- |
| **Is the product a "Product with Digital Elements" (PDE)?**<br/>([CRA Primer](../../quick-start/cra-primer.md)) | | Justification for in/out of scope. |
| **What is the product's CRA Risk Class?**<br/>(Default, Class I, or Class II)<br/>([CRA Product Risk Classes](../../standards/cra-overview.md#product-risk-classes)) | | Link to product list and classification matrix. |

---

## 2. Process & Vulnerability Handling Requirements
_Based on [CRA Annex I.II][cra_annexI]_

| Question | Status (Yes/No/Partial) | Evidence / Notes |
| :--- | :--- | :--- |
| **Do you have a documented Secure Development Lifecycle?**<br/>([CI/CD Hardening Guide](../../implementation/operate-phase/cicd-hardening.md)) | | Link to internal SDL policy document. |
| **Do you have a public Coordinated Vulnerability Disclosure (CVD) policy?**<br/>([CVD Guide](../../implementation/operate-phase/vulnerability-disclosure.md)) | | URL of the public policy page. |
| **Is there a `security.txt` file on your website pointing to the CVD policy?** | | URL of the `security.txt` file. |
| **Do you have a defined Patch Management Policy / Cadence?**<br/>([Patch Cadence Guide](../../implementation/operate-phase/patch-cadence.md)) | | Link to patch policy; document defining timelines. |
| **Do you have a plan to meet the 24h ENISA reporting deadline for active exploits?**<br/>([CRA Art. 14][cra_art14]) | | Link to internal incident response plan. |

---

## 3. Product Security Requirements
_Based on [CRA Annex I.I][cra_annexI]_

| Question | Status (Yes/No/Partial) | Evidence / Notes |
| :--- | :--- | :--- |
| **Is the product shipped with no known exploitable vulnerabilities?** | | Link to pre-release vulnerability scan reports. |
| **Is the product secure by default?**<br/>(e.g., no default passwords) | | Link to default configuration specification. |
| **Is sensitive data protected at rest and in transit?**<br/>(e.g., via encryption) | | Link to data flow diagram and crypto specification. |
| **Is the integrity of all software, firmware, and data protected?**<br/>([Secure Boot Guide](../../implementation/build-phase/secure-boot.md), [OTA Updates Guide](../../implementation/build-phase/ota-updates.md)) | | Link to secure boot & secure update design documents. |
| **Is access to the device and its data controlled?**<br/>(e.g., authentication, authorization) | | Link to access control design document. |
| **Is the device's attack surface minimized?**<br/>(e.g., no unnecessary ports or services) | | Link to network port list and justification. |
| **Is the device resilient against Denial of Service (DoS) attacks?** | | Link to DoS testing reports. |
| **Are modern exploit mitigation techniques used?**<br/>(e.g., ASLR, stack canaries) | | Link to compiler flags and build configuration. |

---

## 4. Documentation & Conformity Requirements

| Question | Status (Yes/No/Partial) | Evidence / Notes |
| :--- | :--- | :--- |
| **Do you have a documented Cybersecurity Risk Assessment?** | | Link to the risk assessment document. |
| **Is an SBOM generated for every release and included in the technical file?**<br/>([SBOM & VEX Guide](../../implementation/build-phase/sbom-vex.md)) | | Link to SBOM generation job in CI/CD pipeline. |
| **Does user documentation meet all requirements of CRA Annex II?**<br/>(e.g., intended use, support period, secure config info) | | Link to user manual draft. |
| **Is a Technical Documentation file maintained?**<br/>([Audit Evidence Pack](../policy-and-evidence/audit-evidence-pack.md)) | | Link to the location of the evidence pack. |
| **Is there a defined process for creating and signing the EU Declaration of Conformity?** | | Link to release process documentation. |

---

*This checklist provides a starting point. Adapt it to your team's specific needs and integrate these tasks into your project management system.* 

<!-- Citations -->
[cra_art14]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_14 "CRA Article 14 – Reporting obligations of manufacturers"
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements"
