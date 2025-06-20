---
title: "SBOM & VEX Workflows"
sidebar_label: "SBOM & VEX"
sidebar_position: 7
tags: [sbom, vex, spdx, cyclonedx, cra, supply-chain]
---
# Guide: SBOM & VEX Workflows

A **Software Bill of Materials (SBOM)** is a formal, machine-readable inventory of the software components and dependencies included in a product. It provides essential transparency into the software supply chain, enabling rapid identification of components affected by newly discovered vulnerabilities.

The **Cyber-Resilience Act (CRA)** legally mandates that manufacturers must create and maintain an SBOM for their products ([CRA Art. 13][cra_art13] referencing [CRA Annex I][cra_annexI]). This document must be provided to national authorities upon request. While an SBOM tells you *what* is in your software, a **Vulnerability Exploitability eXchange (VEX)** document tells you whether a known vulnerability in a component actually affects your product. Together, they are the cornerstones of modern vulnerability management.

## 1. SBOM: The Ingredients List

An SBOM is analogous to a list of ingredients on a food package. It should be comprehensive, accurate, and kept up-to-date.

-   **What it contains:** A complete list of all software components, including open-source libraries, commercial software, and internal modules. For each component, it should list the supplier, version number, and a unique identifier (e.g., a PURL or CPE).
-   **Standard Formats:** To be useful, SBOMs must be machine-readable. The two most widely adopted standards are:
    -   **SPDX (Software Package Data Exchange):** An open standard for communicating software bill of materials information, maintained by the Linux Foundation.
    -   **CycloneDX:** A lightweight SBOM standard designed for use in application security contexts and supply chain component analysis, created by the OWASP community.
-   **Why it's required:** An accurate SBOM allows a manufacturer (or their customer) to instantly determine if they are affected by a new vulnerability disclosure (e.g., "Log4Shell"). Without an SBOM, this process can take weeks of manual effort.

## 2. VEX: The Allergy Information

A VEX document is a companion to an SBOM. It provides an assertion from the manufacturer about the exploitability of a specific vulnerability in their product.

-   **What it contains:** A VEX document links a specific product to a specific vulnerability (e.g., a CVE) and provides a status. Common statuses include:
    -   `not_affected`: The product includes the vulnerable component, but is not affected (e.g., the vulnerable code path is not used).
    -   `affected`: The product is affected, and a patch is forthcoming.
    -   `fixed`: The product has been updated, and this version is no longer affected.
    -   `under_investigation`: The manufacturer is analyzing the impact of the vulnerability.
-   **Why it's essential:** Vulnerability scanners often produce thousands of alerts. A VEX document provides crucial context, allowing asset owners to filter out the noise and focus on real, exploitable risks. This dramatically reduces alert fatigue and prioritizes remediation efforts.

## 3. An Automated SBOM & VEX Workflow

Manually creating and managing these documents is not scalable. They should be integrated directly into your CI/CD pipeline.

| Step | Action | Popular Tools |
| :--- | :--- | :--- |
| **1. Generate SBOM** | In your CI pipeline, after a build is complete, use an SCA tool to scan the build artifact and generate an SBOM in a standard format (e.g., CycloneDX JSON). | `Trivy`, `Syft`, `tern` |
| **2. Scan for Vulns** | Feed the generated SBOM into a vulnerability scanner. This tool compares the component list against public vulnerability databases (NVD, GHSA, etc.). | `Trivy`, `Grype` |
| **3. Triage & Create VEX** | When a new vulnerability is found, the security team investigates its exploitability. Based on the analysis, they create or update a VEX document asserting the status. | `OpenVEX` tools |
| **4. Distribute & Monitor** | The SBOM is stored as a build artifact and included in the product's technical documentation. The VEX is published to customers. The process repeats for every new build and every new vulnerability disclosure. | Artifactory, Company Security Advisories |

## 4. Compliance Checklist

To meet modern security requirements, your vulnerability management workflow should include the following:

- [ ] **Automated SBOM Generation:** Is an SBOM automatically generated for every production build?
- [ ] **Standard Format:** Is your SBOM in a standard, machine-readable format like SPDX or CycloneDX?
- [ ] **Comprehensive Coverage:** Does your SBOM include all dependencies, including transitive dependencies?
- [ ] **VEX Process:** Do you have a documented process for analyzing and asserting the exploitability of vulnerabilities (VEX)?
- [ ] **Technical Documentation:** Is the SBOM for the shipped version of your product included in the technical file you maintain for compliance?
- [ ] **Customer Communication:** Do you have a channel for distributing VEX information to your users or customers?

<!-- Citations -->
[cra_art13]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_13 "CRA Article 13 – Obligations of manufacturers"
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements"