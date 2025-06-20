---
title: "Build Phase Guides"
sidebar_label: "Build Phase"
---

# Implementation Guides: Build Phase

The "Build Phase" covers the core engineering tasks involved in creating a secure-by-design product, from the earliest stages of manufacturing to the point where software is deployed. These guides provide practical, step-by-step advice for implementing the foundational security controls required by modern regulations.

This section will help you answer questions like:
- How do I establish a hardware root of trust?
- What's the right way to sign and verify firmware?
- How can I automate the creation of an SBOM?

---

### Core Topics

-   **[Threat Modeling & Risk Assessment](./threat-modeling.md):** Adopt a "think like an attacker" mindset to identify and mitigate security risks early in the design phase, before a single line of code is written.
-   **[Secure Configuration & Hardening](./secure-configuration.md):** Learn how to disable non-essential services, close unnecessary ports, and implement the principle of least privilege to minimize the device's attack surface.
-   **[Unique Device Identity](./unique-device-identity.md):** Learn how to establish a hardware-based root of trust, which is the cornerstone of all device security.
-   **[Secure Boot](./secure-boot.md):** Implement a chain of trust to ensure that only authenticated, unmodified software can run on your device.
-   **[Key Provisioning & Storage](./key-provisioning.md):** Master the lifecycle of cryptographic keys, from secure generation and provisioning to hardware-backed storage.
-   **[Data Privacy & Secure Deletion](./data-privacy.md):** Implement mechanisms to protect user privacy and ensure that sensitive data can be securely and completely deleted, a key requirement of both the CRA and GDPR.
-   **[Secure OTA Updates](./ota-updates.md):** Build a resilient and secure Over-the-Air update mechanism to patch vulnerabilities in the field.
-   **[SBOM & VEX Workflows](./sbom-vex.md):** Integrate automated SBOM and VEX generation into your CI/CD pipeline to meet transparency and vulnerability management requirements.
-   **[User Information & Documentation](./user-documentation.md):** Provide users with clear, transparent, and actionable information about how to use and maintain their device securely, as mandated by CRA Annex II.

---

*These implementation guides translate regulatory requirements into concrete engineering practices.* 