---
title: "Case Study: GE Vivid Ultrasound Local Access"
tags: [vulnerability, case-study, credentials, local-access, medical]
---
# Case Study: GE Vivid Ultrasound Local Access Flaws (2024)

## 1. The Vulnerability

In May 2024, researchers disclosed 11 vulnerabilities affecting GE Vivid ultrasound systems. Although requiring physical access, the flaws were severe and included:
*   Hard-coded service credentials (CVE-2024-27107).
*   OS command injection (CVE-2024-1628).
*   Privilege escalation vulnerabilities.

An attacker with brief physical access—such as an insider or a malicious actor posing as maintenance staff—could gain administrative access, break out of the device's kiosk mode, and potentially install malware like ransomware.

## 2. How Secure-by-Design Could Have Helped

This case demonstrates that "local-only" vulnerabilities cannot be ignored, especially in a clinical environment where physical access by multiple parties is common.

| Secure-by-Design Principle | How It Would Have Prevented This Issue |
| :--- | :--- |
| **Eliminate Hard-coded Credentials** | Service accounts should never use fixed, hard-coded credentials. Access should be managed through role-based access control (RBAC) with unique, time-limited credentials for service technicians. This simple step would have neutralized the initial access vector. |
| **Harden the Operating Environment** | A "kiosk mode" must be more than just a full-screen application. The underlying operating system should be hardened to prevent unauthorized applications from running and to block attempts to escape the kiosk and access system resources. Techniques like application allow-listing and sandboxing are critical. |
| **Encrypt Data at Rest** | Even if an attacker gains access to the underlying system, sensitive data should remain protected. All stored patient data on the device's local storage must be encrypted. This renders the data useless to an attacker who manages to exfiltrate it. |
| **Assume Insider Threats** | The security model for a device must always account for the possibility of an insider threat or an attacker gaining temporary physical access. Relying solely on the physical security of the hospital environment is insufficient. The device must be able to defend itself. | 