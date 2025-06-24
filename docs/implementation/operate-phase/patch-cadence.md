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
-   The BSI TR-03183-1 clarifies this, requiring a process for addressing vulnerabilities in a timely manner ([REQ_VH 2][bsi_tr_03183_p1]) and for having a published vulnerability disclosure policy ([REQ_VH 5][bsi_tr_03183_p1]).

This policy must be public-facing to set clear expectations for customers about support lifetime and response timelines.

### 1.3. Do I Really Need to Do This?

The **[Cyber-Resilience Act (CRA)](../../standards/eu/cra-overview.md)** requires manufacturers to have a process to handle vulnerabilities "without delay." For any product that has updateable software, a documented policy with a risk-based patch cadence is the only credible way to demonstrate compliance.

The real question is not *if* you need a policy, but **"What does a compliant vulnerability handling policy look like for my specific product?"**

#### Case 1: Standard Updateable Products

For any product that can receive OTA or manual updates, you **must** have a defined process for how you will use that mechanism. This process, documented in your policy, should define the "cadence"—your target timelines for releasing patches based on severity. The specific timelines (e.g., 48 hours for a critical issue vs. 90 days for a medium one) will be determined by your own risk assessment, but the requirement to have a defined process is mandatory.

#### Case 2: Non-Updateable Products

As discussed in the [Secure OTA Updates guide](../build-phase/ota-updates.md), there is a narrow exception for products that cannot be updated due to technical limitations or specific security architecture choices.

-   **Is a policy still required?** Yes. Even if the product cannot be patched, you are still legally required to perform vulnerability management.
-   **What does the policy look like?** Your policy will not include a "patch cadence." Instead, it must document your process for:
    1.  Monitoring for and analyzing vulnerabilities that may affect the product.
    2.  Notifying customers of a significant, unpatchable risk.
    3.  Implementing a recall, replacement, or other mitigation plan "without delay" if a critical vulnerability is discovered.

#### The Bottom Line

You must have a documented vulnerability handling policy. For the vast majority of products, this policy must include a risk-based patch cadence. For the rare products that cannot be updated, the policy must instead define a process for notification and recall. In either case, having a documented, systematic process is a non-negotiable requirement.

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