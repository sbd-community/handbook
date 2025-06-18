---
title: "SBOM & Supply Chain Security"
sidebar_label: "SBOM & Supply Chain"
sidebar_position: 2
tags: [tools, sbom, supply-chain, open-source, commercial]
---
# SBOM & Supply Chain Security

A **Software Bill of Materials (SBOM)** is a formal, machine-readable inventory of all the software components, libraries, and dependencies included in a product. Maintaining an SBOM is a cornerstone of modern cybersecurity and a key requirement for the **[Cyber-Resilience Act](../standards/cra-overview.md)**, which mandates that manufacturers provide one as part of their technical documentation ([CRA Art. 13][cra_art13]).

These tools help automate the creation, management, and analysis of SBOMs. They enable manufacturers to quickly identify which products are affected by a newly discovered vulnerability in a third-party component, allowing them to meet the CRA's strict vulnerability handling timelines.

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

<!-- Citations -->
[cra_art13]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_13 "CRA Article 13 – Obligations of manufacturers"
