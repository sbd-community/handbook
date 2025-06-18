---
title: "Audit Evidence Pack Template"
sidebar_label: "Audit Evidence Pack"
tags: [templates, audit, compliance, cra, technical-documentation]
---
# Guide: Assembling Your Audit Evidence Pack

An **Audit Evidence Pack** is a structured collection of documents, records, and technical artefacts that demonstrates your product's compliance with a given regulation. For the **Cyber-Resilience Act (CRA)**, this pack constitutes the **technical documentation** that manufacturers are legally required to maintain and provide to market surveillance authorities upon request ([CRA Article 31][cra_art31]).

This is not a one-time task but a "living" collection of evidence that must be updated throughout the product's lifecycle. This guide provides a template for organizing this information.

> **Goal:** To be able to prove, at any time, that your product and processes meet your legal obligations.

---

## Structure of the Evidence Pack

Your evidence pack should be organized logically, making it easy for an auditor or national authority to find the information they need. A good approach is to structure it around the product lifecycle: from high-level governance to specific technical implementation and operational records.

### Section 1: Governance & Risk Management
_This section contains your high-level policies and risk assessment artefacts._

-   [ ] **Cybersecurity Risk Assessment:** The foundational document outlining the product's intended use, key assets, identified threats, and risk mitigation strategies. This is the starting point for your entire security posture. ([CRA Annex I, Part I][cra_annexI_partI])
-   [ ] **Secure Development Lifecycle (SDL) Policy:** Your internal, documented process for how you build security into every stage of development. This should reference your [CI/CD hardening practices](../../implementation/operate-phase/cicd-hardening.md). ([CRA Annex I.II][cra_annexI])
-   [ ] **Vulnerability Handling Policy:** Your public Coordinated Vulnerability Disclosure (CVD) policy and your internal procedures for triaging and managing reported vulnerabilities. ([See CVD Guide](../../implementation/operate-phase/vulnerability-disclosure.md))
-   [ ] **Patch Management Policy:** Your public commitment to providing security updates, including timelines based on severity. ([See Patch Cadence Guide](../../implementation/operate-phase/patch-cadence.md))

### Section 2: Product Technical & User Documentation
_This section details the product's design and the information provided to users._

-   [ ] **Detailed Architecture Diagram:** A diagram showing the product's key hardware and software components, network interfaces, security boundaries, and trust zones.
-   [ ] **Hardware Root of Trust Specification:** Documentation of the hardware used to anchor security (e.g., SE, TPM, TEE) and the process for protecting keys. ([See Key Provisioning Guide](../../implementation/build-phase/key-provisioning.md))
-   [ ] **Software Bill of Materials (SBOM):** A complete, machine-readable SBOM (in SPDX or CycloneDX format) for the specific version of the software placed on the market. ([CAR Annex I.I][cra_annexI])
-   [ ] **User Manual & Secure Configuration Guide:** A copy of the instructions provided to the user, which must include guidance on secure use, the product's support period, and how to report vulnerabilities. ([CRA Annex II][cra_annexII])

### Section 3: Security Verification & Validation
_This section contains the proof that your security controls work as intended._

-   [ ] **Security Test Reports:** Reports from all internal and third-party security testing activities, such as penetration testing, code audits, and hardware security analysis.
-   [ ] **Automated Scan Results:** A summary of the latest reports from the automated security tools in your CI/CD pipeline (SAST, SCA, secrets scanning).
-   [ ] **Conformity Assessment Documentation:**
    -   A copy of the signed **EU Declaration of Conformity**.
    -   If applicable, the certificate and reports from the third-party Notified Body that performed your audit.

### Section 4: Post-Market & Operational Records
_This section contains ongoing records generated after the product is on the market._

-   [ ] **Vulnerability Log:** A complete log of all vulnerabilities reported and discovered, including their source, triage status, severity score, and final resolution.
-   [ ] **Patch Log:** A record of all security patches released, including the release date, CVEs addressed, and the firmware version that contains the fix.
-   [ ] **Incident Response Records:** If you have experienced a breach or an actively exploited vulnerability, this includes copies of the notification reports sent to ENISA and/or other authorities. ([CRA Article 14][cra_art14])

---

*This guide provides a template for the technical documentation required under the CRA. Use it to build a comprehensive and auditable evidence pack.*

<!-- Citations -->
[cra_art14]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_14 "CRA Article 14 – Reporting obligations of manufacturers"
[cra_art31]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_31 "CRA Article 31 – Technical documentation"
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements"
[cra_annexII]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_II "CRA Annex II – Information and instructions to the user"