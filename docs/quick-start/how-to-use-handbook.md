---
title: "How to Use This Handbook"
sidebar_label: "How to Use Handbook"
sidebar_position: 1
tags: [quick-start, navigation, getting-started]
---

# How to Use This Handbook

The Secure-by-Design Handbook is a practical, actionable guide for anyone involved in building and maintaining connected devices. It translates complex regulatory requirements from laws like the **Cyber-Resilience Act (CRA)** into concrete engineering tasks.

This page helps you find the content most relevant to your role and your immediate questions.

---

## Structure of the Handbook

The handbook is organized into four main sections:

-   **[Quick Start](./how-to-use-handbook.md):** For when you need the essentials, fast. Start here if you're new to the topic or need a high-level overview.
-   **[Standards & Regulations](../standards):** Deep-dives into the legal texts like the CRA, RED, and NIS 2. Read these for authoritative context on your legal obligations.
-   **[Implementation Guides](../implementation/build-phase):** Step-by-step technical playbooks for implementing specific security controls like secure boot, OTA updates, and CI/CD hardening.
-   **[Resources](../resources):** Downloadable artefacts like checklists and policy templates to use in your projects.

---

## Paths by Role

Find your role below for a recommended reading path.

### For the Product Manager or Team Lead
_Your goal: Understand what we need to do, why, and how to plan the work._

1.  **Start Here:** Read the [CRA 5-Minute Primer](./cra-primer.md) to grasp the business impact and key deadlines.
2.  **Plan the Work:** Use the [First-Sprint Checklist](./first-sprint-checklist.md) to create an initial project plan and prioritize foundational tasks.
3.  **Understand the Landscape:** Skim the overviews in the [Standards & Regulations](../standards/cra-overview.md) section to understand the legal context your teams are working in.

### For the Firmware or Embedded Engineer
_Your goal: Understand what I need to build on the device._

1.  **Understand Requirements:** Read the [CRA Overview](../standards/cra-overview.md), focusing on the [Secure-by-Design Engineering Benchmarks](../standards/cra-overview.md#annex-i-benchmarks). This is your list of technical requirements.
2.  **Implement Core Features:** Dive into the **[Build Phase](../implementation/build-phase)** implementation guides:
    -   [Key Provisioning & Storage](../implementation/build-phase/key-provisioning.md)
    -   [Secure Boot Implementation](../implementation/build-phase/secure-boot.md)
    -   [Secure OTA Updates](../implementation/build-phase/ota-updates.md)
3.  **Check Radio Requirements:** If your product has Wi-Fi, Bluetooth, or any other radio, read the [Radio Equipment Directive (RED) Overview](../standards/red-overview.md).

### For the DevOps or Security Engineer (SecOps)
_Your goal: Understand how to automate security, manage vulnerabilities, and harden our infrastructure._

1.  **Automate Security:** Start with the [CI/CD Pipeline Hardening guide](../implementation/operate-phase/cicd-hardening.md) to integrate security checks directly into your development workflow.
2.  **Manage Supply Chain Risk:** Read the [SBOM & VEX Workflows guide](../implementation/build-phase/sbom-vex.md) to learn how to automate vulnerability detection in your third-party dependencies.
3.  **Handle Vulnerabilities:** Review the guides for [Vulnerability Disclosure](../implementation/operate-phase/vulnerability-disclosure.md) and establishing a [Patch Cadence](../implementation/operate-phase/patch-cadence.md).

### For the Compliance Lead or Auditor
_Your goal: Understand the legal requirements in detail and find evidence of compliance._

1.  **Know the Law:** Read all the overviews in the **[Standards & Regulations](../standards)** section. These are your primary source of truth for the legal obligations.
2.  **Assess Gaps:** Use the **[Resources](../resources)** section for gap analysis and audit preparation materials.
3.  **Verify Controls:** Review the checklists at the end of each **[Implementation Guide](../implementation/build-phase)** to verify that the required technical controls have been implemented by the engineering teams.

---

## How to Contribute

This handbook is a living document and a community effort. If you see something missing, find an error, or have a suggestion, please see our [Contributing Guide](https://github.com/sbd-community/handbook/blob/main/CONTRIBUTING.md) or open an issue on our GitHub repository.

<!-- Citations -->
