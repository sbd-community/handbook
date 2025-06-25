---
title: "CI/CD Pipeline Hardening"
sidebar_label: "CI/CD Security"
tags: [cicd, github-actions, devsecops, supply-chain, cra]
sidebar_position: 4
---
# Guide: Hardening the CI/CD Pipeline

## 1. Introduction to CI/CD Hardening

### 1.1. What is CI/CD Hardening?

**CI/CD Hardening** is the process of embedding automated security checks and controls directly into your build and release pipeline. A secure product begins with a secure development process, and the CI/CD (Continuous Integration / Continuous Deployment) pipeline is the factory that builds your product.

Hardening the pipeline is the practical application of "DevSecOps," where security is a shared responsibility integrated from the beginning. A compromised pipeline can be used to inject malicious code, steal credentials, or tamper with build artifacts, making its security paramount for ensuring the integrity of your product.

### 1.2. The Regulatory Requirement

The **[Cyber-Resilience Act (CRA)](./../../standards/eu/cra-overview.md)** mandates secure development lifecycle practices. A hardened CI/CD pipeline directly addresses several key requirements:

-   **No Known Exploitable Vulnerabilities ([Annex I § 1 (2)(a)][cra_annexI])**: The CRA requires products to be delivered "without known exploitable vulnerabilities." An automated scanning process in the CI/CD pipeline is the primary mechanism for identifying and blocking these vulnerabilities before release.
-   **Vulnerability Handling ([Annex I § 2 (2)][cra_annexI])**: The act requires manufacturers to have a process for handling vulnerabilities. BSI TR-03183-1 clarifies this, stating that manufacturers must "continuously search for vulnerabilities in their own product" ([REQ_VH 2][bsi_tr_03183_p1]). A CI/CD pipeline that scans dependencies is a key part of this continuous search.

### 1.3. Do I Really Need to Do This?

The **[Cyber-Resilience Act (CRA)](./../../standards/eu/cra-overview.md)** requires manufacturers to follow best practices for a secure development lifecycle. Hardening your development and release process is therefore a direct and non-negotiable legal obligation.

However, the regulations define the **"what" (the security outcomes)**, not the **"how" (the specific tools)**. The real question is not *if* you need a secure process, but **"What does a compliant secure development process look like for a team of my size and a product of my complexity?"**

#### The "Manual" Exception

A hardened, automated CI/CD pipeline is the state-of-the-art method for achieving compliance. It provides automatic, repeatable, and auditable proof that security checks have been performed.

Could you comply without a formal CI/CD system? Theoretically, yes. For a very simple product with a single developer and infrequent releases, a compliant process might consist of:
-   A documented checklist that a developer must follow before every release.
-   Manually running scanners (for secrets, SAST, and SCA) on the developer's local machine.
-   Manually generating an SBOM.
-   Keeping a signed, dated log of the results of these checks for every release.

This approach is **not recommended**. It is slow, prone to human error, and creates a significant documentation burden. As soon as a team grows to more than one person or releases become more frequent, this manual process becomes untenable and fails to scale.

#### The Bottom Line

You **must** have a documented, secure process for building, testing, and releasing your software. An automated CI/CD pipeline that integrates security scanning is the most effective, efficient, and reliable way to meet this requirement. While a manual process is not explicitly forbidden, it is far more burdensome to manage and much harder to prove to an auditor that it is being followed consistently. For any modern development team, investing in a hardened CI/CD pipeline is a foundational requirement for both security and compliance.

## 2. "Shifting Left": Integrating Security Early

"Shifting left" is the practice of moving security testing and validation as early as possible in the development lifecycle. Instead of waiting for a final security review before release, security checks are automated and run continuously as code is written. This provides immediate feedback to developers, making vulnerabilities faster, cheaper, and easier to fix.

A hardened CI/CD pipeline is the engine that drives the "shift left" model.

## 3. Key Hardening Measures

A secure pipeline is built in layers, with security controls applied at each stage.

| Stage | Security Control | Best Practices & Tools |
| :--- | :--- | :--- |
| **Source Code** | **Branch Protection** | Enforce rules in your SCM (e.g., GitHub, GitLab) that require pull requests, peer reviews, and passing status checks before code can be merged into the main branch. |
| | **Signed Commits** | Require developers to sign their commits with a GPG key to verify the author's identity and prevent impersonation. |
| **Pipeline Trigger** | **Automated Scanning** | On every pull request, automatically run security scanners to check for common issues. <br/>- **SAST (Static Analysis):** Finds bugs in your code. Tools: `CodeQL`, `Semgrep`. <br/>- **Secret Scanning:** Prevents hardcoded credentials. Tools: `git-secrets`, `TruffleHog`. |
| **Build Environment** | **Ephemeral & Isolated** | Use clean, ephemeral runners for each build to prevent state from one build from leaking into another. If using containers, keep them minimal and run them as non-root users. |
| | **Dependency Pinning** | Lock the versions of all dependencies, including build tools and external libraries, to prevent unexpected or malicious updates from being pulled in. Use tools like `Dependabot` for automated, secure updates. |
| **Artifact Generation**| **Software Composition Analysis (SCA)** | Scan all third-party dependencies for known CVEs. This is the core of your vulnerability management and SBOM generation. Tools: `Trivy`, `Grype`. |
| | **SBOM Generation** | Automatically generate a Software Bill of Materials (SBOM) as a build artifact. This is a legal requirement under the CRA. |
| **Artifact Storage**| **Signing & Attestation** | Cryptographically sign all build artifacts to ensure their integrity. Use tools like `sigstore` to generate attestations about how the artifact was built. |
| | **Secure Repository** | Store signed artifacts in a secure, access-controlled repository (e.g., Artifactory, GitHub Packages). |

## 4. Accelerating Compliance with Tooling

A hardened pipeline is created by integrating various security tools. While you could manually run these checks, automating them in the CI/CD pipeline is the only scalable way to ensure they are performed consistently and to provide an auditable trail for compliance.

-   **Static & Dynamic Analysis (SAST/DAST):** Instead of relying solely on manual code reviews, automated tools can continuously scan for bugs. A powerful open-source example that integrates directly into source control is [GitHub CodeQL](https://codeql.github.com/).
-   **Software Composition Analysis (SCA):** Manually tracking third-party dependencies is impossible at scale. An SCA tool like [Trivy](https://github.com/aquasecurity/trivy) can automatically scan for known vulnerabilities and generate the required SBOM.
-   **Secret Scanning:** Automated tools can scan every commit to ensure no developer accidentally includes cryptographic keys, passwords, or other secrets in the codebase.

For a detailed list of tools, see the pages for [Static & Dynamic Analysis](../../tools/static-and-dynamic-analysis.md) and [SBOM & Supply Chain Security](../../tools/sbom-and-supply-chain-security.md).

## 5. Example Secure Workflow (GitHub Actions)

```yaml
jobs:
  build-and-scan:
    # Use minimal, trusted permissions
    permissions:
      contents: read
      id-token: write # For OIDC
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Scan for secrets
        uses: trufflesecurity/truffle-hog@main

      - name: Run SAST scan
        uses: github/codeql-action/analyze@v3

      - name: Build application
        run: |
          # Build steps here
          # ...

      - name: Generate SBOM
        uses: anchore/syft-action@v0
        with:
          format: 'cyclonedx-json'
          output-file: 'sbom.json'
      
      - name: Scan SBOM for CVEs
        uses: anchore/grype-action@v0
        with:
          sbom: 'sbom.json'
          fail-on: 'critical' # Fail build if critical vulns found
```

## 6. Compliance Checklist

- [ ] **Branch Protection:** Are all production branches protected with mandatory reviews and passing checks?
- [ ] **Automated Scanning:** Are SAST, SCA, and secret scanning integrated into your pipeline and run on every pull request?
- [ ] **Fail-on-Vulnerability:** Is your pipeline configured to block builds if a critical vulnerability is detected?
- [ ] **Artifact Signing:** Are all final build artifacts cryptographically signed to ensure their integrity?
- [ ] **SBOM Generation:** Is a comprehensive SBOM automatically generated and stored for every release?
- [ ] **Secrets Management:** Are you using a dedicated secrets manager (e.g., GitHub Secrets, Vault) instead of hardcoding credentials?
- [ ] **Secure Lifecycle Documentation:** Is your CI/CD hardening process documented as part of the evidence for your secure development lifecycle?

<!-- Citations -->
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements"
[bsi_tr_03183_p1]: https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI-TR-03183-1-0_9_0.pdf "BSI TR-03183 Part 1: General requirements"