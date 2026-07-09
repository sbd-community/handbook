---
title: "Operate Phase Guides"
sidebar_label: "Operate Phase"
---

# Implementation Guides: Operate Phase

Once a product is in the hands of customers, the focus shifts from building security in to maintaining, monitoring, updating, and evidencing it during the support period.

The Operate Phase covers the processes and infrastructure needed to receive vulnerability reports, triage findings, release fixes, communicate with customers, monitor security signals, and refresh evidence after product changes.

This section will help you answer questions like:
- How do researchers, customers, or users report vulnerabilities?
- How quickly should we assess, fix, roll out, and communicate security updates?
- How can I detect and respond to attacks on my devices?
- What post-market evidence should we retain?

### Core Topics

-   **[Vulnerability Disclosure](./vulnerability-disclosure.md):** Define public reporting routes, internal triage, vulnerability logs, reporting, customer communication, and retained evidence.
-   **[Patch Cadence & Rollback Strategy](./patch-cadence.md):** Define remediation timing, support-period commitments, rollout controls, rollback rules, and release evidence.
-   **[Security Logging & Monitoring](./security-logging.md):** Implement robust logging on both the device and backend services to detect, investigate, and respond to security incidents in the field.
-   **[CI/CD Hardening](./cicd-hardening.md):** Secure the build and release pipeline that produces, signs, scans, and delivers updates.

Use these guides with **[Secure OTA Updates](../build-phase/ota-updates.md)**, **[SBOM & VEX Workflows](../build-phase/sbom-vex.md)**, and the **[Secure-by-Design Evidence Pack](../../resources/policy-and-evidence/audit-evidence-pack.md)**.