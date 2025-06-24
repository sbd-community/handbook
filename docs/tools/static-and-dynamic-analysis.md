---
title: "Static & Dynamic Analysis (SAST / DAST)"
sidebar_label: "SAST / DAST"
sidebar_position: 2
tags: [tools, sast, dast, security, scanning, open-source, commercial]
---
# Tools: Static & Dynamic Analysis (SAST / DAST)

## 1. The 'Why': Automating Code Security for Compliance

Automated security testing is a cornerstone of any modern, secure development lifecycle. Static and Dynamic Application Security Testing (SAST/DAST) tools provide the continuous, automated analysis needed to find and fix vulnerabilities early, making them essential for meeting the stringent requirements of the **[Cyber-Resilience Act (CRA)](../standards/eu/cra-overview.md)**.

### 1.1. The Regulatory Requirement

These tools directly help manufacturers provide evidence for several of the CRA's essential requirements as detailed in Annex I:

-   **No Known Exploitable Vulnerabilities ([§ 1 (2)(a)][cra_annexI])**: This is the most direct application. SAST and DAST are the primary methods for automatically discovering vulnerabilities in your own code before the product is shipped.
-   **Integrity Protection ([§ 1 (2)(f)][cra_annexI])**: SAST, in particular, helps ensure the integrity of code by identifying weaknesses and potential backdoors that could be used to tamper with software.
-   **Exploit Mitigation ([§ 1 (2)(k)][cra_annexI])**: BSI TR-03183-1 requires that products "use and enable modern exploit mitigation techniques" ([REQ_ER 12][bsi_tr_03183_p1]). SAST tools can verify that compiler-level protections (like stack canaries and ASLR) have been correctly enabled during the build process.

### 1.2. What are SAST & DAST?

-   **SAST (Static Application Security Testing)** tools analyze source code, bytecode, or binaries without executing them. They are excellent at finding issues like SQL injection, buffer overflows, and insecure coding patterns early in the CI/CD pipeline.
-   **DAST (Dynamic Application Security Testing)** tools test a running application from the outside, simulating attacks to find vulnerabilities that only appear at runtime, such as authentication flaws or server misconfigurations.

## 2. SAST & DAST Tooling

The following table provides a non-exhaustive list of popular open-source and commercial tools.

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
[bsi_tr_03183_p1]: https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI-TR-03183-1-0_9_0.pdf "BSI TR-03183 Part 1: General requirements"
