---
title: "CRA Gap Analysis Checklist"
sidebar_label: "CRA Gap Analysis"
tags: [templates, checklist, cra, compliance, gap-analysis]
---
# Tool: CRA Gap Analysis Checklist

A **Gap Analysis** is a critical first step in your journey to compliance with the **Cyber-Resilience Act (CRA)**. It helps you identify the differences ("gaps") between your current security practices and the legal requirements of the regulation.

Use this checklist to perform a high-level assessment of your organization's readiness. For each requirement, assess your current status and note the location of any existing evidence. This document can form the foundation of your compliance project plan.

> This checklist is a starting point. It should be used in conjunction with the detailed guides in this handbook and a thorough reading of the [full CRA Overview](/docs/standards/cra-overview).

---

## 1. Scoping & Classification

| Question | Status (Yes/No/Partial) | Evidence / Notes |
| :--- | :--- | :--- |
| **Is the product a "Product with Digital Elements" (PDE)?**<br/>([CRA Primer](/docs/quick-start/cra-primer)) | | Justification for in/out of scope. |
| **What is the product's CRA Risk Class?**<br/>(Default, Class I, or Class II)<br/>([CRA Product Risk Classes](/docs/standards/cra-overview#product-risk-classes)) | | Link to product list and classification matrix. |

---

## 2. Process & Vulnerability Handling Requirements
_Based on [CRA Annex I, Part II](/docs/standards/cra-overview#annex-i-benchmarks)_

| Question | Status (Yes/No/Partial) | Evidence / Notes |
| :--- | :--- | :--- |
| **Do you have a documented Secure Development Lifecycle?**<br/>([CI/CD Hardening Guide](/docs/implementation/operate-phase/cicd-hardening)) | | Link to internal SDL policy document. |
| **Do you have a public Coordinated Vulnerability Disclosure (CVD) policy?**<br/>([CVD Guide](/docs/implementation/operate-phase/vulnerability-disclosure)) | | URL of the public policy page. |
| **Is there a `security.txt` file on your website pointing to the CVD policy?** | | URL of the `security.txt` file. |
| **Do you have a defined Patch Management Policy / Cadence?**<br/>([Patch Cadence Guide](/docs/implementation/operate-phase/patch-cadence)) | | Link to patch policy; document defining timelines. |
| **Do you have a plan to meet the 24h ENISA reporting deadline for active exploits?**<br/>([CRA Art. 14 Reporting](/docs/implementation/operate-phase/vulnerability-disclosure#3-mandatory-enisa-reporting-cra-art-14)) | | Link to internal incident response plan. |

---

## 3. Product Security Requirements
_Based on [CRA Annex I, Part I](/docs/standards/cra-overview#annex-i-benchmarks)_

| Question | Status (Yes/No/Partial) | Evidence / Notes |
| :--- | :--- | :--- |
| **Is the product shipped with no known exploitable vulnerabilities?** | | Link to pre-release vulnerability scan reports. |
| **Is the product secure by default?**<br/>(e.g., no default passwords) | | Link to default configuration specification. |
| **Is sensitive data protected at rest and in transit?**<br/>(e.g., via encryption) | | Link to data flow diagram and crypto specification. |
| **Is the integrity of all software, firmware, and data protected?**<br/>([Secure Boot Guide](/docs/implementation/build-phase/secure-boot), [OTA Updates Guide](/docs/implementation/build-phase/ota-updates)) | | Link to secure boot & secure update design documents. |
| **Is access to the device and its data controlled?**<br/>(e.g., authentication, authorization) | | Link to access control design document. |
| **Is the device's attack surface minimized?**<br/>(e.g., no unnecessary ports or services) | | Link to network port list and justification. |
| **Is the device resilient against Denial of Service (DoS) attacks?** | | Link to DoS testing reports. |
| **Are modern exploit mitigation techniques used?**<br/>(e.g., ASLR, stack canaries) | | Link to compiler flags and build configuration. |

---

## 4. Documentation & Conformity Requirements

| Question | Status (Yes/No/Partial) | Evidence / Notes |
| :--- | :--- | :--- |
| **Do you have a documented Cybersecurity Risk Assessment?** | | Link to the risk assessment document. |
| **Is an SBOM generated for every release and included in the technical file?**<br/>([SBOM & VEX Guide](/docs/implementation/build-phase/sbom-vex)) | | Link to SBOM generation job in CI/CD pipeline. |
| **Does user documentation meet all requirements of CRA Annex II?**<br/>(e.g., intended use, support period, secure config info) | | Link to user manual draft. |
| **Is a Technical Documentation file maintained?**<br/>([Audit Evidence Pack](/docs/templates/audit-evidence-pack)) | | Link to the location of the evidence pack. |
| **Is there a defined process for creating and signing the EU Declaration of Conformity?** | | Link to release process documentation. |

---

*This checklist provides a starting point. Adapt it to your team's specific needs and integrate these tasks into your project management system.* 