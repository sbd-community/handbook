---
title: "Static & Dynamic Analysis (SAST / DAST)"
sidebar_label: "SAST / DAST"
sidebar_position: 2
tags: [tools, sast, dast, security, scanning, open-source, commercial]
---
# Tools: Static & Dynamic Analysis (SAST / DAST)

**Static Application Security Testing (SAST)** and **Dynamic Application Security Testing (DAST)** are core components of a secure development lifecycle. These tools help manufacturers meet the **[Cyber-Resilience Act's](../standards/eu/cra-overview.md)** requirement to deliver products "without any known exploitable vulnerabilities" ([CRA Annex I.I.2(a)][cra_annexI]) by finding security flaws before a product is shipped.

-   **SAST** tools analyze source code, bytecode, or binaries without executing them. They are excellent at finding issues like SQL injection, buffer overflows, and insecure coding patterns early in the CI/CD pipeline.
-   **DAST** tools test a running application from the outside, simulating attacks to find vulnerabilities that only appear at runtime, such as authentication flaws or server misconfigurations.

| Tool | Type | Description |
| :--- | :--- | :--- |
| [Semgrep](https://semgrep.dev/) | 🐙 | An open-source, fast, and customizable static analysis tool for finding bugs and enforcing code standards. |
| [CodeQL](https://codeql.github.com/) | 🐙 | A powerful semantic code analysis engine, developed by GitHub, for automating security checks. |
| [Bandit](https://bandit.readthedocs.io/) | 🐙 | An open-source tool specifically designed to find common security issues in Python code. |
| [gitleaks](https://github.com/gitleaks/gitleaks) | 🐙 | An open-source tool for scanning git repository history for hardcoded secrets and sensitive data. |
| [OWASP ZAP](https://www.zaproxy.org/) | 🐙 | The world's most widely used open-source web application scanner. Excellent for DAST. |
| [Veracode](https://www.veracode.com/) | 💰 | A commercial application security platform that provides SAST, DAST, and SCA capabilities. |
| [Synopsys Coverity](https://www.synopsys.com/software-integrity/security-testing/static-analysis-sast.html) | 💰 | A commercial static analysis tool known for its low false-positive rates in large C/C++ codebases. |
| [SonarQube](https://www.sonarsource.com/products/sonarqube/) | 💰🐙 | A platform for continuous inspection of code quality and security, with both free (community) and paid editions. |
| [Checkmarx](https://checkmarx.com/) | 💰 | A commercial enterprise platform for SAST, DAST, IAST, and SCA. | Provides a comprehensive suite of tools for securing the entire software development lifecycle. |
| [Finite State](https://finitestate.io/) | 💰 | A comprehensive product security platform that combines source code analysis (SAST) with advanced binary analysis for connected devices. | Provides a unified view of risks from both source code and third-party components, bridging the gap between application security and embedded systems security. |
| [Snyk](https://snyk.io/) | 💰 | A developer security platform focused on finding and fixing vulnerabilities in open-source dependencies and container images. | Integrates directly into developer workflows and CI/CD pipelines to provide early feedback. |

<!-- vale off -->
*Type: 💰=Commercial, 🐙=Open-Source*
<!-- vale on -->

<!-- Citations -->
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements"
