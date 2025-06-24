---
title: "Security Logging & Monitoring"
sidebar_label: "Security Logging"
sidebar_position: 3
tags: [logging, monitoring, audit, forensics, cra, secure-by-design]
---
# Guide: Implementing Security Logging & Monitoring

## 1. The 'Why': Logging as a Forensic Foundation

**Security Logging** is the practice of recording security-relevant events that occur on a device. These logs provide a crucial audit trail for investigating security incidents, debugging issues, and demonstrating compliance.

While much of the **[Cyber-Resilience Act (CRA)](./../../standards/eu/cra-overview.md)** focuses on prevention, the ability to analyze events after they occur is a key part of state-of-the-art security practices. Without logs, you are operating blind when an incident happens.

### 1.1. The Regulatory Requirement

The legal basis for logging comes from the CRA's essential requirements, which are designed to enable forensic analysis:

-   **Security Logging ([Annex I § 1 (2)(l)][cra_annexI])**: The CRA requires that products "log all security-relevant events by default."
-   This is reinforced by the BSI's technical guideline, which requires the capability to "create logs for security-relevant events" ([REQ_ER 13][bsi_tr_03183_p1]).

Effective logging allows you to answer the critical question "What happened?" after a security event has occurred.

### 1.2. What is Security Logging?

Security logging involves systematically recording key events on a device and its associated services. This provides an audit trail that can be used to:
-   Detect and respond to security incidents in real-time.
-   Perform post-incident forensic analysis to understand an attacker's methods.
-   Provide evidence of compliance to auditors and regulators.

## 2. Key Logging Practices

### 2.1 What to Log
You don't need to log everything, but you must log events that are critical for security analysis.
- **Authentication Events:** Log all successful and failed login attempts. Multiple failed attempts from a single IP address could indicate a brute-force attack.
- **Configuration Changes:** Log any changes to security-critical settings (e.g., firewall rules, password changes, user permission changes).
- **Access Control Events:** Log attempts to access restricted resources.
- **Update Events:** Log the start and end of a firmware update, and whether it succeeded or failed.
- **System Faults:** Log crashes and critical errors, as these can sometimes be triggered by malicious inputs.

### 2.2 Protecting the Logs
Logs are a primary target for attackers who want to cover their tracks. Therefore, the integrity and availability of log data are critical.
- **Immutable Storage:** If possible, store logs in write-once or append-only memory to prevent modification.
- **Remote Logging:** For high-value events, send logs to a remote, secure log aggregation server in real-time. This ensures that even if an attacker gains full control of a device, they cannot erase the evidence of their initial intrusion.
- **Time Stamping:** All log entries must have a reliable and accurate timestamp. Use a Network Time Protocol (NTP) service to keep device clocks synchronized.

### 2.3 Monitoring for Anomalies
Simply collecting logs is not enough. You must have a process for reviewing them.
- **Automated Alerts:** Configure your remote logging system to generate automatic alerts for suspicious event patterns (e.g., more than 10 failed login attempts in one minute).
- **Periodic Review:** Have a documented process for periodically reviewing logs for unusual activity.

## 3. Compliance Checklist

To ensure your logging mechanism is robust and meets best practices, ensure you can answer "yes" to the following:

- [ ] **Critical Events Logged:** Are all security-relevant events, including logins, configuration changes, and failures, being logged?
- [ ] **Log Integrity:** Are measures in place to protect logs from being modified or deleted by an attacker (e.g., remote logging, append-only storage)?
- [ ] **Accurate Timestamps:** Are all log entries associated with a synchronized and reliable timestamp?
- [ ] **Sufficient Storage:** Is there enough storage allocated for logs to ensure that recent events are not overwritten too quickly?
- [ ] **Log Analysis Process:** Do you have a process, whether manual or automated, for reviewing logs to detect potential security incidents?
- [ ] **Documentation:** Is the logging mechanism, including what is logged and how logs are protected, documented in your technical file?

<!-- Citations -->
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements"
[bsi_tr_03183_p1]: https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI-TR-03183-1-0_9_0.pdf "BSI TR-03183 Part 1: General requirements"