---
title: "Tool Directory"
sidebar_label: "Tool Directory"
tags: [tools, sbom, sast, ota, open-source, commercial]
---
# Tool Directory

This page provides a curated list of tools to help you implement secure-by-design practices throughout the product lifecycle. The tools are categorized by their primary function.

---

## 1. SBOM & Supply Chain Security

Tools for generating, managing, and analyzing Software Bills of Materials (SBOMs) and securing your dependencies.

| Tool | Type | Description |
| :--- | :--: | :---------- |
| [**Syft**](https://github.com/anchore/syft) | <i class="fa-solid fa-code-branch"></i> | Generates an SBOM from container images and filesystems. |
| [**SPDX SBOM Generator**](https://github.com/spdx/spdx-sbom-generator) | <i class="fa-solid fa-code-branch"></i> | Official command-line tool for generating SPDX-compliant SBOMs. |
| [**CycloneDX CLI**](https://github.com/CycloneDX/cyclonedx-cli) | <i class="fa-solid fa-code-branch"></i> | Command-line tool for converting between SBOM formats and validating CycloneDX SBOMs. |
| [**Dependency-Track**](https://dependencytrack.org/) | <i class="fa-solid fa-code-branch"></i> | A platform for continuous SBOM analysis that helps identify component-based risks. |
| [**Grype**](https://github.com/anchore/grype) | <i class="fa-solid fa-code-branch"></i> | A vulnerability scanner for container images and filesystems that can use an SBOM as its input. |
| [**OSV-Scanner**](https://github.com/google/osv-scanner) | <i class="fa-solid fa-code-branch"></i> | A Google-maintained scanner that finds vulnerabilities in dependencies by cross-referencing against the OSV.dev database. |
| [**FOSSA**](https://fossa.com/) | <i class="fa-solid fa-dollar-sign"></i> | Commercial platform for license compliance and open source vulnerability management. |
| [**Snyk**](https://snyk.io/) | <i class="fa-solid fa-dollar-sign"></i> | Developer-focused security platform for SAST, SCA, and container scanning. |

## 2. Static & Dynamic Analysis (SAST / DAST)

Tools for analyzing source code and running applications to find security flaws.

| Tool | Type | Description |
| :--- | :--: | :---------- |
| [**CodeQL**](https://codeql.github.com/) | <i class="fa-solid fa-code-branch"></i> | A powerful semantic code analysis engine for finding security vulnerabilities. Free for open source projects. |
| [**Semgrep**](https://semgrep.dev/) | <i class="fa-solid fa-code-branch"></i> | A fast, open-source static analysis tool for finding bugs and enforcing code standards. |
| [**SonarQube**](https://www.sonarsource.com/products/sonarqube/) | <i class="fa-solid fa-code-branch"></i> | A platform for continuous inspection of code quality and security. Community edition is open-source. |
| [**gitleaks**](https://github.com/gitleaks/gitleaks) | <i class="fa-solid fa-code-branch"></i> | Scans git repository history for hardcoded secrets and sensitive data. |
| [**Checkmarx**](https://www.checkmarx.com/) | <i class="fa-solid fa-dollar-sign"></i> | Enterprise-grade platform for static and dynamic application security testing. |
| [**OWASP ZAP**](https://www.zaproxy.org/) | <i class="fa-solid fa-code-branch"></i> | The world's most widely used open-source web application scanner. |

## 3. Firmware & Binary Analysis

Tools for reverse engineering and analyzing compiled firmware images to find vulnerabilities when source code is not available.

| Tool | Type | Description |
| :--- | :--: | :---------- |
| [**Binwalk**](https://github.com/ReFirmLabs/binwalk) | <i class="fa-solid fa-code-branch"></i> | A classic tool for analyzing, reverse engineering, and extracting firmware images. |
| [**Ghidra**](https://ghidra-sre.org/) | <i class="fa-solid fa-code-branch"></i> | A software reverse engineering (SRE) framework developed by the NSA. |
| [**FACT** (Firmware Analysis & Comparison Tool)](https://f-a-c-t.com/) | <i class="fa-solid fa-code-branch"></i> | An automated platform for unpacking firmware, running analyses, and comparing versions. |
| [**EMBA** (Embedded-device MAnufacturer's security check)](https://github.com/e-m-b-a/emba) | <i class="fa-solid fa-code-branch"></i> | A security analyzer for firmware images that can identify vulnerabilities and configuration weaknesses. |
| [**Firmwalker**](https://github.com/craigz28/firmwalker) | <i class="fa-solid fa-code-branch"></i> | A script for searching extracted firmware filesystems for common vulnerabilities and misconfigurations. |

## 4. Secure Update & OTA Frameworks

Tools and frameworks for building robust, secure over-the-air (OTA) update mechanisms for connected devices.

| Tool | Type | Description |
| :--- | :--: | :---------- |
| [**QuarkLink**](https://www.cryptoquantique.com/products/quarklink) | <i class="fa-solid fa-dollar-sign"></i> | A commercial IoT security platform for provisioning, onboarding, and lifecycle management, including OTA updates. |
| [**SWUpdate**](https://sbabic.github.io/swupdate/) | <i class="fa-solid fa-code-branch"></i> | A widely-used, feature-rich update framework for embedded Linux devices. |
| [**Mender**](https://mender.io/) | <i class="fa-solid fa-code-branch"></i> | An end-to-end OTA software update platform with both open-source and commercial offerings. |
| [**The Update Framework (TUF)**](https://theupdateframework.io/) | <i class="fa-solid fa-code-branch"></i> | A CNCF-graduated project that provides a specification and libraries for securing software update systems. |
| [**Uptane**](https://uptane.github.io/) | <i class="fa-solid fa-code-branch"></i> | An extension of TUF specifically designed for the high-security demands of automotive software updates. |
| [**Sigstore**](https://www.sigstore.dev/) | <i class="fa-solid fa-code-branch"></i> | A Linux Foundation project for signing, verifying, and proving the provenance of software artifacts. |

## 5. Vulnerability & Threat Intelligence

Databases and resources for tracking public vulnerabilities and security advisories.

| Resource | Type | Description |
| :--- | :--: | :---------- |
| [**NVD (National Vulnerability Database)**](https://nvd.nist.gov/) | <i class="fa-solid fa-code-branch"></i> | The official U.S. government repository of standards-based vulnerability management data (CVEs). |
| [**OSV.dev**](https://osv.dev/) | <i class="fa-solid fa-code-branch"></i> | A distributed, open-source vulnerability database with a machine-readable API for precise matching. |
| [**FIRST Exploit Prediction Scoring System (EPSS)**](https://www.first.org/epss/) | <i class="fa-solid fa-code-branch"></i> | A data-driven effort to estimate the probability that a software vulnerability will be exploited in the wild. |
| [**CISA Known Exploited Vulnerabilities (KEV) Catalog**](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) | <i class="fa-solid fa-code-branch"></i> | A definitive list of vulnerabilities that have been observed to be actively exploited. |

---

*This directory is not exhaustive and represents a starting point. To suggest additions, please open an issue or pull request on our [GitHub repository](https://github.com/sbd-community/handbook).* 