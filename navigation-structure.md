# SecureByDesignHandbook.com – Site Navigation

**Aim**: A clear, role-oriented path from landing page to implementation material.

---

## Top-Level Menu

This structure reflects the implemented navigation in the `/docs` folder and the `sidebar_position` metadata within each page.

1.  **Quick Start**
    -   What is Secure by Design?
    -   How to use this handbook
    -   CRA 5-minute primer
    -   First-sprint checklist

2.  **Standards & Regulations**
    -   Overview
    -   Cyber-Resilience Act (CRA)
    -   NIS 2 Directive
    -   Radio Equipment Directive (RED)
    -   ETSI EN 303 645
    -   IEC 62443 Series
    -   UK PSTI Act
    -   EU PECR

3.  **Implementation Guides**
    -   **Build Phase** (Ordered by workflow)
        -   Unique Device Identity
        -   Secure Boot
        -   Key Provisioning & Storage
        -   Secure OTA Updates
        -   SBOM & VEX Workflows
    -   **Operate Phase**
        -   Vulnerability Disclosure
        -   Patch Cadence
        -   CI/CD Hardening

4.  **Resources**
    -   **Checklists & Worksheets**
        -   CRA Gap Analysis
        -   Maturity Model
    -   **Policy & Evidence**
        -   Policy Templates
        -   Audit Evidence Pack
    -   **Reference**
        -   Glossary
    -   **Real-World Vulnerabilities**
        -   *Case studies of security flaws.*

5.  **Tools** (Ordered by workflow)
    -   Static & Dynamic Analysis (SAST / DAST)
    -   SBOM & Supply Chain Security
    -   PKI & Key Management
    -   Secure Update & OTA Frameworks
    -   Firmware & Binary Analysis
    -   Vulnerability & Threat Intelligence

### Secondary elements

*   **Search** (global, top-right)
*   **Breadcrumbs** on article pages
*   **Footer quick links**: GitHub repo, Discussions, RSS, Privacy, Licence.

---

## User Journeys

| Persona | Likely Path |
| :--- | :--- |
| **Compliance Lead** | Quick Start → What is Secure by Design? → Standards & Regulations → CRA |
| **Firmware Engineer** | Implementation Guides → Build Phase → Unique Device Identity → Secure Boot |
| **DevOps Engineer** | Implementation Guides → Operate Phase → CI/CD Hardening → Tools → SAST / DAST |
| **CTO / Decision-maker** | Quick Start → What is Secure by Design? → Resources → Checklists → Maturity Model |

---

**Note**: This document reflects the current "as-built" navigation structure. 