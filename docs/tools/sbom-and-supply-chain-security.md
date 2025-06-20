---
title: "SBOM & Supply Chain Security"
sidebar_label: "SBOM & Supply Chain"
sidebar_position: 3
tags: [tools, sbom, sca, supply-chain, security, open-source, commercial]
---
# SBOM & Supply Chain Security

A **Software Bill of Materials (SBOM)** is a formal, machine-readable inventory of all the software components, libraries, and dependencies included in a product. Maintaining an SBOM is a cornerstone of modern cybersecurity and a key requirement for the **[Cyber-Resilience Act](../standards/cra-overview.md)**, which mandates that manufacturers provide one as part of their technical documentation ([CRA Art. 13][cra_art13]).

These tools help automate the creation, management, and analysis of SBOMs. They enable manufacturers to quickly identify which products are affected by a newly discovered vulnerability in a third-party component, allowing them to meet the CRA's strict vulnerability handling timelines.

| Tool | Type | Description |
| :--- | :--: | :---------- |
| [**SPDX Tool**](https://tools.spdx.org/app/) | 🐙 | Official command-line tool from the SPDX project for creating and validating SPDX SBOMs. |
| [**CycloneDX CLI**](https://github.com/CycloneDX/cyclonedx-cli) | 🐙 | Official command-line tool from the CycloneDX project for converting between formats and validating SBOMs. |
| [**Trivy**](https://github.com/aquasecurity/trivy) | 🐙 | A popular open-source scanner that can find vulnerabilities in container images, filesystems, and Git repos, and also generate SBOMs. |
| [**Syft**](https://github.com/anchore/syft) | 🐙 | An open-source CLI tool and library from Anchore for generating an SBOM from container images and filesystems. |
| [**Grype**](https://github.com/anchore/grype) | 🐙 | An open-source vulnerability scanner for container images and filesystems that can use Syft's SBOM output. |
| [**Dependency-Track**](https://dependencytrack.org/) | 🐙 | An open-source component analysis platform that allows you to manage SBOMs and track vulnerabilities across your portfolio. |
| [**FOSSA**](https://fossa.com/) | 💰 | A commercial platform for managing open-source license compliance and security vulnerabilities. |
| [**Snyk**](https://snyk.io/) | 💰 | A developer security platform that provides vulnerability scanning, license compliance, and SCA. |

<!-- Citations -->
[cra_art13]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_13 "CRA Article 13 – Obligations of manufacturers"
