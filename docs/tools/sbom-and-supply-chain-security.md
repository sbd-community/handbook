---
title: "SBOM & Supply Chain Security"
sidebar_label: "SBOM & Supply Chain"
sidebar_position: 3
tags: [tools, sbom, sca, supply-chain, security, open-source, commercial]
---
# Tools: SBOM & Supply Chain Security

## 1. Introduction

A Software Bill of Materials (SBOM) is a formal, machine-readable inventory of all software components and dependencies in a product. Software Composition Analysis (SCA) tools are used to automate the creation and analysis of SBOMs.

For a detailed explanation of the compliance requirements for SBOMs, see our guide on **[SBOM & VEX Workflows](../implementation/build-phase/sbom-vex.md)**.

## 2. Tooling Landscape

These tools help automate the creation, management, and analysis of SBOMs. They enable manufacturers to quickly identify which products are affected by a newly discovered vulnerability in a third-party component, a critical capability for meeting the CRA's strict vulnerability handling timelines.

| Tool | Type | Description |
| :--- | :--- | :--- |
| [SPDX Tool](https://tools.spdx.org/app/) | 🐙 | Official command-line tool from the SPDX project for creating and validating SPDX SBOMs. |
| [CycloneDX CLI](https://github.com/CycloneDX/cyclonedx-cli) | 🐙 | Official command-line tool from the CycloneDX project for converting between formats and validating SBOMs. |
| [Trivy](https://github.com/aquasecurity/trivy) | 🐙 | A popular open-source scanner that can find vulnerabilities in container images and filesystems, and also generate SBOMs. |
| [Syft](https://github.com/anchore/syft) | 🐙 | An open-source CLI tool and library from Anchore for generating an SBOM from container images and filesystems. |
| [Grype](https://github.com/anchore/grype) | 🐙 | An open-source vulnerability scanner for container images and filesystems that can use Syft's SBOM output. |
| [Dependency-Track](https://dependencytrack.org/) | 🐙 | An open-source component analysis platform that allows you to manage SBOMs and track vulnerabilities across your portfolio. |
| [FOSSA](https://fossa.com/) | 💰 | A commercial platform for managing open-source license compliance and security vulnerabilities. |
| [Snyk](https://snyk.io/) | 💰 | A developer security platform that provides vulnerability scanning, license compliance, and SCA. |
| [Anchore](https://anchore.com/) | 💰🐙 | Enterprise platform and open-source tools (`Syft`, `Grype`) for SBOM generation, management, and vulnerability scanning. |
| [Finite State](https://finitestate.io/) | 💰 | A product security platform for connected devices that provides advanced binary analysis and comprehensive SBOM management to mitigate supply chain risk. |
| [Sonatype](https://www.sonatype.com/) | 💰 | Offers a range of products for software supply chain management, including dependency checking, and vulnerability detection. |

<!-- vale off -->
*Type: 💰=Commercial, 🐙=Open-Source*
<!-- vale on -->
