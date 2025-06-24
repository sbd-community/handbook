---
title: "SBOM & VEX Workflows"
sidebar_label: "SBOM & VEX"
sidebar_position: 7
tags: [sbom, vex, spdx, cyclonedx, cra, supply-chain]
---
# Guide: SBOM & VEX Workflows

## 1. Introduction to SBOM & VEX

### 1.1. What are SBOM & VEX?

A **Software Bill of Materials (SBOM)** is a formal, machine-readable inventory of the software components and dependencies included in a product. It is analogous to a list of ingredients on a food package and is a cornerstone of modern software supply chain security.

A **Vulnerability Exploitability eXchange (VEX)** document is a companion to an SBOM. While an SBOM tells you *what* is in your software, a VEX document provides an assertion from the manufacturer about whether a known vulnerability in a component actually affects their product. This provides crucial context, allowing asset owners to filter out the noise from scanners and focus on real risks.

Together, they are the key to efficient and transparent vulnerability management.

### 1.2. The Regulatory Requirement

The **[Cyber-Resilience Act (CRA)](./../../standards/eu/cra-overview.md)** establishes the legal obligation for manufacturers to provide an SBOM:

-   **Component Documentation ([Annex I, Part II, § 1][cra_annexI])**: The CRA requires manufacturers to "identify and document components, including by drawing up a software bill of materials".
-   The BSI TR-03183-1 reinforces this, requiring a documented list of all integrated components ([REQ_VH 1][bsi_tr_03183_p1]).
-   Furthermore, the CRA mandates that this SBOM must be provided to national authorities upon request ([Art. 13][cra_art13]).

### 1.3. Do I Really Need to Do This?

The legal mandate from the **[Cyber-Resilience Act (CRA)](../../standards/eu/cra-overview.md)** is to "identify and document components, including by drawing up a software bill of materials." This makes the core question for a manufacturer not *if* they need to comply, but rather: **"Does my product contain software components?"**

#### The SBOM Requirement

For any product that runs firmware, uses a real-time operating system (RTOS), includes third-party libraries, or is built with modern development tools, the answer is unequivocally **yes**. An SBOM is mandatory.

-   **What if we write all our own code?** The requirement is to document *components*. This includes your own internal modules, not just third-party dependencies. An SBOM is still the required format for this documentation. This practice is essential for tracking vulnerabilities, even in your own first-party code, and is a core part of a secure development lifecycle.
-   **Is there any exception?** The only credible exception is for a product that contains **no software components at all**. This would be a very simple device where the logic is implemented entirely in a fixed-function hardware chip (an ASIC, or Application-Specific Integrated Circuit) with no associated firmware. For any 'product with digital elements' that uses a microcontroller or a processor, this is extremely rare.

#### The VEX Requirement

While the CRA does not explicitly use the term "VEX", it *does* require manufacturers to:
1.  Address and remediate vulnerabilities "without delay".
2.  Publicly disclose information about fixed vulnerabilities, their impact, and how to remediate them.

A VEX document is the most efficient, standardized way to fulfill this communication requirement. It provides a machine-readable statement of a vulnerability's status, which is essential for managing the "noise" from security scanners.

-   **The Bottom Line:** While you could theoretically communicate vulnerability status in an unstructured way (like a simple text file), a VEX stream is the industry best practice and the only scalable way to manage this process. For practical purposes, implementing a VEX workflow is a necessity for any manufacturer managing an SBOM.

In short, for any product with software, an SBOM is a legal necessity. For any product with an SBOM, a VEX workflow is a practical necessity for efficient vulnerability management and communication.

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