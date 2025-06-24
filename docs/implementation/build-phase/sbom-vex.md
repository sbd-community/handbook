---
title: "SBOM & VEX Workflows"
sidebar_label: "SBOM & VEX"
sidebar_position: 7
tags: [sbom, vex, spdx, cyclonedx, cra, supply-chain]
---
# Guide: SBOM & VEX Workflows

## 1. The 'Why': Supply Chain Transparency as a Mandate

A **Software Bill of Materials (SBOM)** is a formal inventory of the software components in a product. Providing an SBOM is a cornerstone of modern software supply chain security and a mandatory legal requirement under the EU's cybersecurity framework.

While an SBOM tells you *what* is in your software, a **Vulnerability Exploitability eXchange (VEX)** document tells you whether a known vulnerability in a component actually affects your product. Together, they are the key to efficient and transparent vulnerability management.

### 1.1. The Regulatory Requirement

The **[Cyber-Resilience Act (CRA)](./../../standards/eu/cra-overview.md)** establishes the legal obligation for manufacturers to provide an SBOM:

-   **Component Documentation ([Annex I, Part II, § 1][cra_annexI])**: The CRA requires manufacturers to "identify and document components, including by drawing up a software bill of materials".
-   The BSI TR-03183-1 reinforces this, requiring a documented list of all integrated components ([REQ_VH 1][bsi_tr_03183_p1]).
-   Furthermore, the CRA mandates that this SBOM must be provided to national authorities upon request ([Art. 13][cra_art13]).

### 1.2. Do I Really Need to Do This?

**Yes, absolutely.** Providing a Software Bill of Materials is no longer a best practice; it is a legal requirement for placing a product on the EU market.

-   **It's a Legal Mandate:** The **[Cyber-Resilience Act (CRA)](../../standards/eu/cra-overview.md)** explicitly states that manufacturers must "identify and document components, including by drawing up a software bill of materials." This is not optional.
-   **You Can't Secure What You Can't See:** Your product is built on hundreds, if not thousands, of third-party software components. When a new vulnerability like "Log4Shell" is discovered, an SBOM is the only way to know *instantly* if your product is affected. Without it, you are blind to supply chain risks.
-   **Enables Efficient Vulnerability Management:** An SBOM is the input for modern security tools. When combined with a VEX, it allows you to automate vulnerability tracking and communicate precisely to your customers which risks are real and which are false positives, saving everyone time and effort.
-   **Required By Customers:** Beyond EU law, major enterprise and government customers worldwide are now demanding SBOMs as a standard procurement requirement. Not having one is a significant commercial disadvantage.

In short, an SBOM is the foundational element of modern software security and supply chain risk management. It is a legal, security, and commercial necessity.

### 1.3. What are SBOM and VEX?

-   An **SBOM** is analogous to a list of ingredients on a food package. It provides a formal, machine-readable inventory of the software components and dependencies included in a product, enabling rapid identification of components affected by newly discovered vulnerabilities.
-   A **VEX** document is a companion to an SBOM that provides an assertion from the manufacturer about the exploitability of a specific vulnerability in their product. This provides crucial context, allowing asset owners to filter out the noise from scanners and focus on real risks.

## 2. SBOM: The Ingredients List

An SBOM should be comprehensive, accurate, and kept up-to-date.

-   **What it contains:** A complete list of all software components, including open-source libraries, commercial software, and internal modules. For each component, it should list the supplier, version number, and a unique identifier (e.g., a PURL or CPE).
-   **Standard Formats:** To be useful, SBOMs must be machine-readable. The two most widely adopted standards are:
    -   **SPDX (Software Package Data Exchange):** An open standard for communicating software bill of materials information, maintained by the Linux Foundation.
    -   **CycloneDX:** A lightweight SBOM standard designed for use in application security contexts and supply chain component analysis, created by the OWASP community.
-   **Why it's required:** An accurate SBOM allows a manufacturer (or their customer) to instantly determine if they are affected by a new vulnerability disclosure (e.g., "Log4Shell"). Without an SBOM, this process can take weeks of manual effort.

## 3. VEX: The Allergy Information

A VEX document is a companion to an SBOM. It provides an assertion from the manufacturer about the exploitability of a specific vulnerability in their product.

-   **What it contains:** A VEX document links a specific product to a specific vulnerability (e.g., a CVE) and provides a status. Common statuses include:
    -   `not_affected`: The product includes the vulnerable component, but is not affected (e.g., the vulnerable code path is not used).
    -   `affected`: The product is affected, and a patch is forthcoming.
    -   `fixed`: The product has been updated, and this version is no longer affected.
    -   `under_investigation`: The manufacturer is analyzing the impact of the vulnerability.
-   **Why it's essential:** Vulnerability scanners often produce thousands of alerts. A VEX document provides crucial context, allowing asset owners to filter out the noise and focus on real, exploitable risks. This dramatically reduces alert fatigue and prioritizes remediation efforts.

## 4. An Automated SBOM & VEX Workflow

Manually creating and managing these documents is not scalable. They should be integrated directly into your CI/CD pipeline.

| Step | Action | Popular Tools |
| :--- | :--- | :--- |
| **1. Generate SBOM** | In your CI pipeline, after a build is complete, use an SCA tool to scan the build artifact and generate an SBOM in a standard format (e.g., CycloneDX JSON). | `Trivy`, `Syft`, `tern` |
| **2. Scan for Vulns** | Feed the generated SBOM into a vulnerability scanner. This tool compares the component list against public vulnerability databases (NVD, GHSA, etc.). | `Trivy`, `Grype` |
| **3. Triage & Create VEX** | When a new vulnerability is found, the security team investigates its exploitability. Based on the analysis, they create or update a VEX document asserting the status. | `OpenVEX` tools |
| **4. Distribute & Monitor** | The SBOM is stored as a build artifact and included in the product's technical documentation. The VEX is published to customers. The process repeats for every new build and every new vulnerability disclosure. | Artifactory, Company Security Advisories |

## 5. Compliance Checklist

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
[bsi_tr_03183_p1]: https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI-TR-03183-1-0_9_0.pdf "BSI TR-03183 Part 1: General requirements"