---
title: "Build Phase Guides"
sidebar_label: "Overview"
---

# Implementation Guides: Build Phase

The "Build Phase" covers the core engineering tasks involved in creating a secure-by-design product, from the earliest stages of manufacturing to the point where software is deployed. These guides provide practical, step-by-step advice for implementing the foundational security controls required by modern regulations.

This section will help you answer questions like:
- How do I establish a hardware root of trust?
- What's the right way to sign and verify firmware?
- How can I automate the creation of an SBOM?

---

### Core Topics

-   **[Unique Device Identity](./unique-device-identity.md):** Learn how to establish a hardware-based root of trust, which is the cornerstone of all device security.
-   **[Secure Boot](./secure-boot.md):** Implement a chain of trust to ensure that only authenticated, unmodified software can run on your device.
-   **[Key Provisioning & Storage](./key-provisioning.md):** Master the lifecycle of cryptographic keys, from secure generation and provisioning to hardware-backed storage.
-   **[Secure OTA Updates](./ota-updates.md):** Build a resilient and secure Over-the-Air update mechanism to patch vulnerabilities in the field.
-   **[SBOM & VEX Workflows](./sbom-vex.md):** Integrate automated SBOM and VEX generation into your CI/CD pipeline to meet transparency and vulnerability management requirements.

---

*These implementation guides translate regulatory requirements into concrete engineering practices.* 