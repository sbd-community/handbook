---
title: "Static & Dynamic Analysis (SAST / DAST)"
sidebar_label: "SAST & DAST"
sidebar_position: 1
tags: [tools, sast, dast, open-source, commercial]
---
# Static & Dynamic Analysis (SAST / DAST)

**Static Application Security Testing (SAST)** and **Dynamic Application Security Testing (DAST)** are core components of a secure development lifecycle. These tools help manufacturers meet the **[Cyber-Resilience Act's](../standards/cra-overview.md)** requirement to deliver products "without any known exploitable vulnerabilities" ([CRA Annex I.I.2(a)][cra_annexI]) by finding security flaws before a product is shipped.

-   **SAST** tools analyze source code, bytecode, or binaries without executing the application. They are excellent at finding issues like SQL injection, buffer overflows, and insecure coding patterns early in the CI/CD pipeline.
-   **DAST** tools test a running application from the outside, simulating attacks to find vulnerabilities that only appear at runtime, such as authentication flaws or server misconfigurations.

Tools for analyzing source code and running applications to find security flaws.

| Tool | Type | Description |
| :--- | :--: | :---------- |
| [**CodeQL**](https://codeql.github.com/) | <i class="fa-solid fa-code-branch"></i> | A powerful semantic code analysis engine for finding security vulnerabilities. Free for open source projects. |
| [**Semgrep**](https://semgrep.dev/) | <i class="fa-solid fa-code-branch"></i> | A fast, open-source static analysis tool for finding bugs and enforcing code standards. |
| [**SonarQube**](https://www.sonarsource.com/products/sonarqube/) | <i class="fa-solid fa-code-branch"></i> | A platform for continuous inspection of code quality and security. Community edition is open-source. |
| [**gitleaks**](https://github.com/gitleaks/gitleaks) | <i class="fa-solid fa-code-branch"></i> | Scans git repository history for hardcoded secrets and sensitive data. |
| [**Checkmarx**](https://www.checkmarx.com/) | <i class="fa-solid fa-dollar-sign"></i> | Enterprise-grade platform for static and dynamic application security testing. |
| [**OWASP ZAP**](https://www.zaproxy.org/) | <i class="fa-solid fa-code-branch"></i> | The world's most widely used open-source web application scanner. | 

<!-- Citations -->

[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements"
