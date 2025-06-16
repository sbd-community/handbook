---
title: "First-Sprint Checklist"
sidebar_label: "First Sprint Checklist"
sidebar_position: 2
tags: [quick-start, checklist, agile, cra, compliance]
---
# First-Sprint Checklist

Getting started with a large compliance framework like the Cyber-Resilience Act (CRA) can be daunting. This checklist is designed to be a practical, actionable guide for development teams and product managers. It breaks down the initial work into concrete tasks that can be planned into your first few agile sprints.

The goal is not to achieve full compliance in three sprints, but to build foundational momentum and address the highest-priority items first.

> For each item, we've linked to the relevant deep-dive guide in this handbook for more context.

---

## Sprint 1: Foundational Setup & Policy

This sprint focuses on the essential "paperwork" and process setup. These tasks are critical for establishing a compliant posture and can be done in parallel with development work.

- [ ] **Appoint a Product Security Lead:** Assign one person the formal responsibility for leading the security effort. This person is the point of contact for all things security and compliance.
- [ ] **Classify Your Products:** Inventory all products you ship that have software and connectivity. Use the [CRA Primer](./cra-primer.md) to determine their risk class (most will be "Default"). This dictates your conformity assessment route.
- [ ] **Create a `security.txt` File:** Create a `security.txt` file and place it in the `.well-known` directory of your company website. This is the standard way to direct security researchers.
- [ ] **Draft a Public CVD Policy:** Create a basic Coordinated Vulnerability Disclosure (CVD) policy page on your website. It should include a safe harbor statement and a secure reporting channel (e.g., `security@example.com`). Link to it from your `security.txt` file. ([See CVD Guide](../implementation/operate-phase/vulnerability-disclosure.md))

---

## Sprint 2: Hardening the Build Pipeline ("Shift Left")

This sprint focuses on automating security checks in your CI/CD pipeline. These steps provide the fastest feedback on new and existing security issues.

- [ ] **Add Secret Scanning:** Integrate a tool like `TruffleHog` or `git-secrets` into your CI pipeline to automatically block any commits that contain hardcoded credentials. ([See CI/CD Guide](../implementation/operate-phase/cicd-hardening.md))
- [ ] **Add SAST Scanning:** Add a Static Application Security Testing (SAST) tool like `CodeQL` or `Semgrep` to your pipeline. Configure it to scan on every pull request to find common coding bugs.
- [ ] **Generate an SBOM:** As part of your build process, automatically generate a Software Bill of Materials (SBOM) in a standard format like CycloneDX or SPDX. ([See SBOM & VEX Guide](../implementation/build-phase/sbom-vex.md))
- [ ] **Scan the SBOM for CVEs:** Add a step that scans the generated SBOM for known vulnerabilities (CVEs) using a tool like `Trivy` or `Grype`. Configure the pipeline to fail if a new `Critical` or `High` severity vulnerability is found.

---

## Sprint 3: Core Product Security Features

This sprint focuses on auditing and planning for the most critical on-device security features.

- [ ] **Audit for Default Credentials:** Search your entire codebase and configuration files for any hardcoded, default, or predictable credentials. Replace them with a mechanism that forces a unique, strong password on first use.
- [ ] **Evaluate Hardware Root of Trust:** Analyze the SoC or microcontroller on your device. Does it support secure boot? Does it have a hardware-backed key vault like a TPM, Secure Element, or support for a TEE? This decision impacts your entire security architecture. ([See Key Provisioning Guide](../implementation/build-phase/key-provisioning.md))
- [ ] **Review Secure Update Mechanism:** Review your existing OTA update process against the requirements of a secure system. Does it verify signatures? Does it have anti-rollback protection? Is it power-fail safe? ([See Secure OTA Guide](../implementation/build-phase/ota-updates.md))
- [ ] **Review Secure Boot:** If your hardware supports it, create a plan for enabling and configuring secure boot. This is a foundational control for ensuring firmware integrity. ([See Secure Boot Guide](../implementation/build-phase/secure-boot.md))

---

*This checklist provides a starting point. Adapt it to your team's specific needs and integrate these tasks into your project management system.* 