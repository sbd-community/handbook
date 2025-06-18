---
title: "Case Study: Baxter Connex Spot Monitor Shared Key"
tags: [vulnerability, case-study, cryptography, keys, medical]
---
# Case Study: Baxter Connex Spot Monitor Shared Key (2024)

## 1. The Vulnerability

In May 2024, CISA disclosed that Baxter's Welch Allyn Connex Spot Monitor (firmware version 1.50 and prior) contained a hard-coded, shared cryptographic key (CVE-2024-1275) used across all devices.

An attacker with network access could potentially exploit this shared key to push malicious firmware updates or reconfigure devices without authentication. Baxter acknowledged the vulnerability could result in incorrect patient vitals or device failure, potentially delaying treatment. The vendor proactively released a patch (version 1.52.01) before the public disclosure.

## 2. How Secure-by-Design Could Have Helped

This incident is a classic example of cryptographic malpractice. The use of a shared secret completely undermines the security of the entire product line.

| Secure-by-Design Principle | How It Would Have Prevented This Issue |
| :--- | :--- |
| **Unique, Per-Device Identity** | Every single device that comes off the manufacturing line must be provisioned with a unique identity, anchored in hardware. This identity should be tied to a unique cryptographic key pair that is never shared with any other device. |
| **Hardware-Protected Keys** | Private keys should be generated and stored in a secure, hardware-backed environment on the device (such as a TPM, Secure Element, or TEE). They should never be hard-coded into firmware or be extractable from the device. |
| **Secure Provisioning at Manufacture** | The manufacturing process must include a secure provisioning step to inject these unique identities and certificates into each device. This process should be automated and auditable to ensure no two devices share the same identity. |
| **Authenticated Updates** | Firmware updates should be signed using the manufacturer's private key, and the device should verify the signature using the corresponding public key before installation. The shared key in this case made any such signature process ineffective, as an attacker could use the same key to sign their own malicious update. | 

<!-- Citations -->
