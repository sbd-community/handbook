---
title: "Case Study: GE Centricity Viewer Credential Flaw"
tags: [vulnerability, case-study, credentials, pacs, medical]
---
# Case Study: GE Centricity Viewer Credential Flaw (2025)

## 1. The Vulnerability

In February 2025, GE issued an "Urgent Medical Device Correction" after discovering that service credentials for its Centricity Universal Viewer and associated Picture Archiving and Communication Systems (PACS) could be discovered and misused.

This was not a flaw in a single device, but in a networked system for viewing medical images. The risk of unauthorized access to vast amounts of imaging data was so severe that it prompted a Class II recall from the FDA. While no patient harm occurred, the incident required immediate mitigation guidance for all affected healthcare facilities.

## 2. How Secure-by-Design Could Have Helped

This case study highlights the importance of securing not just the device, but the entire ecosystem, especially when dealing with network-accessible platforms that manage sensitive data.

| Secure-by-Design Principle | How It Would Have Prevented This Issue |
| :--- | :--- |
| **No Default or Discoverable Credentials** | The root cause was likely the use of default or easily discoverable service accounts. A secure system must enforce strong, unique credentials for all accounts, especially those with privileged access to data systems. |
| **Implement Credential Rotation** | For any system with service credentials, there must be a policy and a mechanism to regularly rotate them. This limits the window of opportunity for an attacker who manages to acquire a password. |
| **Favor Certificate-Based Authentication** | For machine-to-machine communication, such as between an imaging device, a viewer, and a PACS server, password-based authentication is brittle. Modern systems should use stronger, more manageable methods like mutual TLS (mTLS) with client certificates for authentication. |
| **Regular Security Audits** | A networked platform that handles sensitive patient data is a high-value target. It requires regular, rigorous security auditing and penetration testing to proactively identify and fix authentication and authorization weaknesses before they lead to a recall. | 

<!-- Citations -->
