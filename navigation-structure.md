# SecureByDesignHandbook.com – Site Navigation

**Aim**: A clear, role-oriented path from landing page to implementation material.

---

## Top-Level Menu

This structure reflects the implemented navigation in the `/docs` folder and the `sidebar_position` metadata within each page.

1.  **Quick Start**
    -   What is Secure-by-Design?
    -   How to use this handbook
    -   CISA Secure by Design Principles
    -   CRA 5-minute primer
    -   First-sprint checklist

2.  **Standards & Regulations**
    -   Overview
    -   **EU**
        -   Cyber-Resilience Act (CRA)
        -   NIS 2 Directive
        -   Radio Equipment Directive (RED)
        -   Medical Device Regulation (MDR)
        -   IVD Regulation (IVDR)
    -   **UK**
        -   Product Security & Telecoms Infrastructure (PSTI) Act
        -   Privacy & Electronic Communications Regulations (PECR)
    -   **US**
        -   FDA Cybersecurity Guidance
        -   FCC Cyber Trust Mark
        -   NISTIR 8259 Series
        -   CTA-2088
    -   **Global**
        -   ETSI EN 303 645
        -   IEC 62443 Series

3.  **Implementation Guides**
    -   **Build Phase** (Ordered by workflow)
        -   Threat Modeling
        -   Unique Device Identity
        -   Secure Boot
        -   Key Provisioning & Storage
        -   Secure Configuration
        -   Data Privacy
        -   Secure OTA Updates
        -   SBOM & VEX Workflows
        -   User Documentation
    -   **Operate Phase**
        -   Vulnerability Disclosure
        -   Patch Cadence
        -   Security Logging
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
        -   Types of Embedded Device
    -   **Example Documents**
        -   Threat Model: Continuous Glucose Monitor
        -   Threat Model: Low-Stakes BLE Sensor
        -   Threat Model: Smart Thermostat
    -   **Real-World Vulnerabilities**
        -   Baxter Connex Spot Monitor
        -   Baxter LIFE2000 Ventilator
        -   Contec Patient Monitor
        -   GE Centricity Viewer
        -   GE Vivid Ultrasound

5.  **Tools** (Ordered by workflow)
    -   Threat Modeling Tools
    -   Hardware Root of Trust & Provisioning
    -   Configuration & Hardening
    -   Static & Dynamic Analysis (SAST / DAST)
    -   Firmware & Binary Analysis
    -   SBOM & Supply Chain Security
    -   PKI & Key Management
    -   Secure Update & OTA Frameworks
    -   Device Lifecycle Management
    -   Vulnerability & Threat Intelligence
    -   Security Logging & Monitoring

### Secondary elements

*   **Search** (global, top-right)
*   **Breadcrumbs** on article pages
*   **Footer quick links**: GitHub repo, Discussions, RSS, Privacy, Licence.

---

## User Journeys

| Persona | Likely Path |
| :--- | :--- |
| **Compliance Lead** | Quick Start → What is Secure-by-Design? → Standards & Regulations → CRA |
| **Firmware Engineer** | Implementation Guides → Build Phase → Unique Device Identity → Secure Boot |
| **DevOps Engineer** | Implementation Guides → Operate Phase → CI/CD Hardening → Tools → SAST / DAST |
| **CTO / Decision-maker** | Quick Start → What is Secure-by-Design? → Resources → Checklists → Maturity Model |

---

**Note**: This document reflects the current "as-built" navigation structure. 