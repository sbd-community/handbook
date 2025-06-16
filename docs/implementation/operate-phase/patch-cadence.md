---
title: "Patch Cadence & Rollback Strategy"
sidebar_label: "Patch Management"
tags: [patch-management, vulnerability-handling, cra, ota, policy]
---
# Guide: Patch Cadence & Rollback Strategy

Having a secure OTA update mechanism is only the first step; you also need a clear, documented policy for *when* and *how* you will use it. A **Patch Management Policy** is a critical operational document that defines your organization's commitment to fixing vulnerabilities and delivering updates.

The **Cyber-Resilience Act (CRA)** legally requires manufacturers to handle vulnerabilities "without delay" and distribute security updates effectively ([CRA Annex I.II.2 & 4][cra_annexI_partII]). A well-defined patch cadence is how you demonstrate compliance with this obligation.

## 1. Defining Your Patch Management Policy

Your patch management policy should be a public-facing document that sets clear expectations for your customers. It should define:
-   The types of updates you provide (e.g., security, feature).
-   Your target timelines for addressing vulnerabilities based on severity.
-   The product's support lifetime and end-of-life (EOL) date.

This policy is not just a legal requirement; it's a key part of building trust with your users.

## 2. Establishing a Risk-Based Cadence

Not all patches are created equal. A "one size fits all" approach to updates is inefficient and can lead to slow responses for critical issues. A risk-based cadence, tied to vulnerability severity, is the industry best practice.

| Severity | CVSS v3.1 Score | Example | Suggested Patch Cadence |
| :--- | :--- | :--- | :--- |
| **Critical** | 9.0 – 10.0 | Remote Code Execution (RCE) with no user interaction. | **Emergency / Out-of-Band:** Patch developed and deployed as fast as possible, typically within **days or hours**. |
| **High** | 7.0 – 8.9 | Network-exploitable vulnerability that leaks sensitive data. | **Urgent:** Patch deployed in the next scheduled update, or an accelerated update, within **1-4 weeks**. |
| **Medium** | 4.0 – 6.9 | Locally-exploitable vulnerability requiring user interaction. | **Regular:** Addressed in the next **quarterly or biannual** scheduled maintenance release. |
| **Low** | 0.1 – 3.9 | Minor information leak or other low-impact issue. | Addressed opportunistically in a future release. |

## 3. Rollout & Rollback Strategies

### Phased Rollouts
Deploying a new update to your entire device fleet at once is risky. A single bug could brick every device. A **phased rollout** (or "canary release") mitigates this risk by deploying the update to progressively larger groups of devices.

1.  **Internal & QA:** First, deploy to internal test devices.
2.  **Canary Group (1-5%):** Deploy to a small, opt-in group of external users. Monitor for errors and telemetry data.
3.  **Phased Deployment (10-50%):** Gradually increase the deployment percentage, pausing to monitor for issues at each stage.
4.  **Full Deployment (100%):** Once confident, release to all remaining devices.

### Planning for Rollback
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

---

*This content is being developed. Contribute to this page via our [GitHub repository](https://github.com/sbd-community/handbook).*

<!-- Shared links -->
[cra_annexI_partII]: ../../standards/cra-overview.md#annex-i-benchmarks "CRA Annex I, Part II – Vulnerability handling requirements"
[cra_annexI]: ../../standards/cra-overview.md#annex-i-benchmarks "CRA Annex I – Essential cybersecurity requirements" 