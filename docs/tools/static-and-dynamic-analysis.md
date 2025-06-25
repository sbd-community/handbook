---
title: "Static & Dynamic Analysis (SAST / DAST)"
sidebar_label: "SAST / DAST"
sidebar_position: 2
tags: [tools, sast, dast, security, scanning, open-source, commercial]
---
# Tools: Static & Dynamic Analysis (SAST / DAST)

## 1. Introduction

Static Application Security Testing (SAST) and Dynamic Application Security Testing (DAST) are key components of a secure development lifecycle. SAST tools scan source code to find vulnerabilities before software is compiled, while DAST tools test the running application to find flaws that only appear at runtime.

For a detailed explanation of how these tools fit into a compliant development process, see our guide on **[CI/CD Pipeline Hardening](../implementation/operate-phase/cicd-hardening.md)**.

## 2. Tooling Landscape

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
| [Checkmarx](https://checkmarx.com/) | 💰 | A commercial enterprise platform for SAST, DAST, IAST, and SCA. |
| [Finite State](https://finitestate.io/) | 💰 | A comprehensive product security platform that combines source code analysis (SAST) with advanced binary analysis for connected devices. |
| [Snyk](https://snyk.io/) | 💰 | A developer security platform focused on finding and fixing vulnerabilities in open-source dependencies and container images. |

<!-- vale off -->
*Type: 💰=Commercial, 🐙=Open-Source*
<!-- vale on -->

## 3. Build vs. Buy: Key Considerations

The market for SAST and DAST tooling is mature, with many excellent open-source options. The decision to build a program around these or buy a commercial platform often comes down to integration, correlation, and support.

-   **Integration & Automation**: While tools like `Semgrep` or `OWASP ZAP` are powerful, integrating them into a seamless, automated CI/CD pipeline requires significant engineering effort. Commercial platforms often provide pre-built integrations for popular development tools (e.g., GitHub, Jira) to streamline this process.
-   **False Positive Management**: All SAST/DAST tools produce false positives. Commercial platforms typically invest heavily in features to help manage, triage, and suppress these findings, reducing the noise and allowing developers to focus on real issues.
-   **Breadth of Coverage**: A comprehensive program requires scanning source code (SAST), running applications (DAST), open-source dependencies (SCA), and more. A commercial platform can provide a single, unified view across all these different types of findings, whereas an in-house solution would require integrating and correlating results from multiple, separate tools.
-   **Compliance Reporting**: Commercial vendors often provide pre-built dashboards and reports that can help demonstrate compliance with regulations like the CRA, saving significant time during audits.
