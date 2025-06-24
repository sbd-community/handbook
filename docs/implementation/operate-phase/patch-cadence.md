---
title: "Patch Cadence & Rollback Strategy"
sidebar_label: "Patch Management"
tags: [patch-management, vulnerability-handling, cra, ota, policy]
sidebar_position: 2
---
# Guide: Patch Cadence & Rollback Strategy

## 1. Introduction to Patch Management

### 1.1. What is a Patch Management Policy?

A **Patch Management Policy** is a public, documented commitment that defines *when* and *how* you will use your secure OTA update mechanism to respond to vulnerabilities. It is a critical operational document that outlines:
-   The types of updates you provide (e.g., security, feature).
-   Your target timelines for addressing vulnerabilities based on their severity (your "patch cadence").
-   The product's support lifetime and its official end-of-life (EOL) date.

This policy is not just a technical document; it's a key part of building customer trust and a core legal requirement.

### 1.2. The Regulatory Requirement

The **[Cyber-Resilience Act (CRA)](./../../standards/eu/cra-overview.md)** mandates that manufacturers must address and remediate vulnerabilities "without delay." A patch management policy is the primary way to demonstrate compliance. Key requirements include:

-   **Handling Vulnerabilities ([Annex I, Part II, § 2][cra_annexI])**: Manufacturers must have processes to "handle and remediate vulnerabilities without delay".
-   **Distribution of Updates ([Annex I, Part II, § 4][cra_annexI])**: Manufacturers must have a mechanism to "securely distribute updates".
-   The BSI TR-03183-1 clarifies this, requiring a process for providing timely security updates ([REQ_ER 4][bsi_tr_03183_p1]) and a public policy for vulnerability handling ([REQ_VH 6][bsi_tr_03183_p1]).

This policy must be public-facing to set clear expectations for customers about support lifetime and response timelines.

### 1.3. Do I Really Need to Do This?

**Yes. A public, defined patch management policy is a direct legal requirement and a critical part of customer trust.** Simply having an OTA mechanism is not enough; you must have a documented process for how you will use it.

-   **Legal Mandate:** The **[Cyber-Resilience Act (CRA)](../../standards/eu/cra-overview.md)** requires that you handle vulnerabilities "without delay." A patch cadence based on severity is the only credible way to demonstrate to regulators that you have a systematic process for meeting this obligation.
-   **Builds Trust:** When customers know you have a clear, time-bound commitment to fixing security issues, it builds enormous trust. A public policy shows maturity and a serious commitment to security.
-   **Manages Expectations:** A clear policy, especially one with a defined End-of-Life (EOL) date, manages customer expectations and prevents ambiguity about your responsibilities.
-   **Drives Internal Process:** A public commitment to a patch cadence forces your internal teams to be prepared, ensuring you can meet deadlines when a critical vulnerability appears.

While your threat model will inform the *severity* of vulnerabilities, the requirement to have a policy for addressing them is universal for any product with updateable software under the CRA. Without a defined policy, your response will be ad-hoc, slow, and non-compliant.

## 2. Establishing a Risk-Based Cadence

Not all patches are created equal. A "one size fits all" approach to updates is inefficient and can lead to slow responses for critical issues. A risk-based cadence, tied to vulnerability severity, is the industry best practice.

| Severity | CVSS v3.1 Score | Example | Suggested Patch Cadence |
| :--- | :--- | :--- | :--- |
| **Critical** | 9.0 – 10.0 | Remote Code Execution (RCE) with no user interaction. | **Emergency / Out-of-Band:** Patch developed and deployed as fast as possible, typically within **days or hours**. |
| **High** | 7.0 – 8.9 | Network-exploitable vulnerability that leaks sensitive data. | **Urgent:** Patch deployed in the next scheduled update, or an accelerated update, within **1-4 weeks**. |
| **Medium** | 4.0 – 6.9 | Locally-exploitable vulnerability requiring user interaction. | **Regular:** Addressed in the next **quarterly or biannual** scheduled maintenance release. |
| **Low** | 0.1 – 3.9 | Minor information leak or other low-impact issue. | Addressed opportunistically in a future release. |

## 3. Rollout & Rollback Strategies

### 3.1 Phased Rollouts
Deploying a new update to your entire device fleet at once is risky. A single bug could brick every device. A **phased rollout** (or "canary release") mitigates this risk by deploying the update to progressively larger groups of devices.

1.  **Internal & QA:** First, deploy to internal test devices.
2.  **Canary Group (1-5%):** Deploy to a small, opt-in group of external users. Monitor for errors and telemetry data.
3.  **Phased Deployment (10-50%):** Gradually increase the deployment percentage, pausing to monitor for issues at each stage.
4.  **Full Deployment (100%):** Once confident, release to all remaining devices.

### 3.2 Planning for Rollback
Even with a phased rollout, a critical bug might slip through. You must have a plan to recover.

-   **Server-Side Rollback:** The simplest approach is to halt the deployment campaign on your update server. This prevents any more devices from downloading the faulty update.
-   **Client-Side Rollback:** A robust device must be able to recover from a bad update. As described in the [Secure OTA Updates guide](../build-phase/ota-updates.md), an **A/B partition scheme** is the gold standard. If the new firmware in partition B fails to boot or is unstable, the device should automatically revert to the last known-good version in partition A.

## 4. Compliance Checklist

- [ ] **Public Policy:** Do you have a public, easily accessible vulnerability handling and patch management policy?
- [ ] **Defined Cadence:** Does your policy define clear target timelines for patching based on vulnerability severity?
- [ ] **Phased Rollouts:** Is your OTA system configured to support phased rollouts to minimize risk?
- [ ] **Atomic Updates:** Is your on-device update mechanism atomic and power-fail safe (e.g., A/B partitions)?
- [ ] **EOL Communication:** Does your policy clearly state the support lifetime for your product, after which security updates will no longer be provided?
- [ ] **Process Documentation:** Is your patch management process—from vulnerability report to deployment and monitoring—fully documented in your technical file?

<!-- Citations -->
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements"
[bsi_tr_03183_p1]: https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI-TR-03183-1-0_9_0.pdf "BSI TR-03183 Part 1: General requirements"