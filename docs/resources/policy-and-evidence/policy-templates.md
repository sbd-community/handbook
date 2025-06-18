---
title: "Policy Templates"
sidebar_label: "Policy Templates"
tags: [templates, policy, cvd, vulnerability-disclosure, cra]
---
# Policy Templates

This section provides ready-to-use templates for common cybersecurity policies required by regulations like the **Cyber-Resilience Act (CRA)**. These are starting points designed to be adapted to your organization's specific needs.

> **Disclaimer:** These templates are for informational purposes only and do not constitute legal advice. You should consult with your own legal counsel to ensure your final policies are fully compliant with all applicable laws and regulations.

---

## 1. Coordinated Vulnerability Disclosure (CVD) Policy

A public CVD policy is a legal requirement under the CRA ([Annex I.II.5][cra_annexI]). It provides a clear, safe channel for security researchers to report vulnerabilities to you.

You can adapt the markdown template below and host it on a dedicated security page on your company website (e.g., `https://www.example.com/security`). You should then link to this page from a `security.txt` file located at `https://www.example.com/.well-known/security.txt`.

### CVD Policy Template

```markdown
# Security & Vulnerability Disclosure Policy

## Our Commitment

At [Your Company Name], we are committed to ensuring the security of our products and services. We value the work of the independent security research community, and we welcome the responsible disclosure of any potential vulnerabilities.

## Safe Harbor

We consider security research conducted under this policy to be authorized and will not pursue or support any legal action against you for good-faith, accidental, non-disruptive violations of this policy. We explicitly waive any claims against you for circumventing the technological measures we have in place to protect our services.

## Scope

This policy applies to the following products and services:
*   [List your in-scope products, e.g., "Product A Firmware version 2.0 and later"]
*   [List your in-scope services, e.g., "api.example.com"]

**Out of Scope:**
*   Any services hosted by third-party providers.
*   Denial of service (DoS or DDoS) testing.
*   Social engineering or phishing of our employees or customers.
*   Physical attacks against our property or data centers.

## How to Report a Vulnerability

Please send a detailed report to our security team at **security@example.com**. If possible, encrypt your message using our [PGP Key](link-to-your-pgp-key.asc).

To help us triage and validate your finding as quickly as possible, your report should include:
*   The product or service affected and the version number.
*   A detailed description of the vulnerability.
*   Step-by-step instructions to reproduce the issue.
*   Any proof-of-concept exploits, scripts, or screenshots.

## Our Commitments (SLAs)

When you report a vulnerability to us under this policy, we will:
*   Acknowledge receipt of your report within **2 business days**.
*   Provide an initial assessment and expected timeline for remediation within **10 business days**.
*   Keep you informed of our progress as we work to resolve the issue.
*   Notify you when the vulnerability has been fixed.

## Public Recognition

We believe in recognizing the valuable contributions of security researchers. With your permission, we will offer public thanks and credit for your discovery on our website or in our release notes once the vulnerability has been remediated.
```

---

## 2. Other Policy Resources

While we don't provide a full template for every policy, the following guides in this handbook provide the framework and key requirements for creating them:

-   **Patch Management Policy:** Use the framework in the [Patch Cadence & Rollback Strategy Guide](../../implementation/operate-phase/patch-cadence.md) to define your update timelines and support periods.
-   **Secure Development Lifecycle (SDL) Policy:** Your SDL policy should document the processes and controls outlined in the [CI/CD Pipeline Hardening Guide](../../implementation/operate-phase/cicd-hardening.md).

---

*This guide provides starting points for your policy documentation. Adapt them to your team's specific needs and integrate them into your compliance workflow.*

<!-- Citations -->
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements"