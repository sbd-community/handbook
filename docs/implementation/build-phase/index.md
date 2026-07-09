---
title: "Build Phase Guides"
sidebar_label: "Build Phase"
---

# Implementation Guides: Build Phase

The Build Phase covers the engineering tasks involved in designing, implementing, testing, and evidencing secure-by-design controls before and during release.

This section will help you answer questions like:
- What risks and trust boundaries does the product have?
- How should device identity, keys, boot integrity, updates, and configuration be designed?
- What evidence should be retained for release and technical documentation?

### Core Topics

-   **[Threat Modeling](./threat-modeling.md):** Identify product risks, mitigations, decisions, and evidence.
-   **[Secure Configuration & Hardening](./secure-configuration.md):** Reduce attack surface and lock down production configuration.
-   **[Unique Device Identity](./unique-device-identity.md):** Define how each device proves what it is across onboarding, authentication, updates, and support.
-   **[Secure Boot](./secure-boot.md):** Protect the boot chain so only authorised firmware or software runs.
-   **[Key Provisioning & Storage](./key-provisioning.md):** Define how keys are created, protected, rotated, revoked, and evidenced.
-   **[Data Privacy & Secure Deletion](./data-privacy.md):** Protect sensitive data and define deletion or removal behaviour.
-   **[Secure OTA Updates](./ota-updates.md):** Deliver, verify, recover, roll out, and evidence security updates.
-   **[SBOM & VEX Workflows](./sbom-vex.md):** Connect component inventory to release evidence and vulnerability status.
-   **[User Information & Documentation](./user-documentation.md):** Provide users with security, update, support, and vulnerability-reporting information.

Use these guides with the **[Secure-by-Design Evidence Pack](../../resources/policy-and-evidence/audit-evidence-pack.md)** to retain design, test, release, and exception records.