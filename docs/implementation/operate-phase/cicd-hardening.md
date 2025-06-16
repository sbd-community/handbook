---
title: "CI/CD Pipeline Hardening"
sidebar_label: "CI/CD Security"
tags: [cicd, github-actions, devsecops, supply-chain, cra]
---
# Guide: Hardening the CI/CD Pipeline

A secure product begins with a secure development process. The CI/CD (Continuous Integration / Continuous Deployment) pipeline, which automates the building, testing, and deployment of software, is a high-value target for attackers. A compromised pipeline can be used to inject malicious code, steal credentials, or tamper with build artifacts.

The **Cyber-Resilience Act (CRA)** requires manufacturers to follow secure development lifecycle practices, including implementing automated testing and ensuring the integrity of the final product ([CRA Annex I.II.1 & 6][cra_annexI_partII]). Hardening your CI/CD pipeline is essential for meeting these requirements.

## 1. "Shifting Left": Integrating Security Early

"Shifting left" is the practice of moving security testing and validation as early as possible in the development lifecycle. Instead of waiting for a final security review before release, security checks are automated and run continuously as code is written. This provides immediate feedback to developers, making vulnerabilities faster, cheaper, and easier to fix.

A hardened CI/CD pipeline is the engine that drives the "shift left" model.

## 2. Key Hardening Measures

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

## 3. Example Secure Workflow (GitHub Actions)

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

## 4. Compliance Checklist

- [ ] **Branch Protection:** Are all production branches protected with mandatory reviews and passing checks?
- [ ] **Automated Scanning:** Are SAST, SCA, and secret scanning integrated into your pipeline and run on every pull request?
- [ ] **Fail-on-Vulnerability:** Is your pipeline configured to block builds if a critical vulnerability is detected?
- [ ] **Artifact Signing:** Are all final build artifacts cryptographically signed to ensure their integrity?
- [ ] **SBOM Generation:** Is a comprehensive SBOM automatically generated and stored for every release?
- [ ] **Secrets Management:** Are you using a dedicated secrets manager (e.g., GitHub Secrets, Vault) instead of hardcoding credentials?
- [ ] **Secure Lifecycle Documentation:** Is your CI/CD hardening process documented as part of the evidence for your secure development lifecycle?

---

*This content is being developed. Contribute to this page via our [GitHub repository](https://github.com/sbd-community/handbook).*

<!-- Shared links -->
[cra_annexI_partII]: ../../standards/cra-overview.md#annex-i-benchmarks "CRA Annex I, Part II – Vulnerability handling requirements"
[cra_annexI]: ../../standards/cra-overview.md#annex-i-benchmarks "CRA Annex I – Essential cybersecurity requirements" 