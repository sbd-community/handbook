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

**Yes. Your CI/CD pipeline is the factory that builds your product. If the factory is compromised, everything it produces is tainted.** A hardened pipeline is not just about development efficiency; it is a critical control for ensuring the integrity of your software supply chain.

-   **Direct Compliance Evidence:** The **[Cyber-Resilience Act (CRA)](../../standards/eu/cra-overview.md)** requires you to implement a secure development lifecycle. A hardened CI/CD pipeline with automated security checks is one of the most powerful pieces of evidence you can provide to demonstrate that you are meeting this obligation.
-   **Defense Against Supply Chain Attacks:** High-profile attacks like SolarWinds and Codecov have shown that CI/CD pipelines are a prime target. Hardening the pipeline is a direct defense against attackers injecting malicious code into your trusted product.
-   **Automated Security:** "Shifting left" by integrating security into the pipeline automates critical checks. It ensures that no release can accidentally ship with a known critical vulnerability or a hardcoded password, which is far more reliable than relying on manual reviews.
-   **Guaranteed Integrity:** Cryptographically signing artifacts and generating attestations in the pipeline provide a verifiable chain of custody, proving that the code your users receive is exactly the code that you intended to ship.

Securing your CI/CD pipeline is a foundational requirement. There is no threat model outcome that would justify leaving your software's "factory" unprotected.

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

## 4. Example Secure Workflow (GitHub Actions)

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

## 5. Compliance Checklist

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