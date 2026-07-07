---
title: "Case Study: GE Centricity Viewer Credential Flaw"
sidebar_label: "GE Centricity Credentials"
description: "A secure-by-design case study showing how service credential exposure in a networked medical imaging ecosystem can affect patient-data integrity and availability."
tags: [case-study, real-world-vulnerability, secure-by-design, cra, product-security, evidence, credentials, pacs, medical]
---
# Case Study: GE Centricity Viewer Credential Flaw (2025)

## Why This Case Matters

This case shows that connected-product security is often ecosystem security. A viewer, workstation, PACS, radiology system, service account, and customer network can all become part of the same trust boundary when credentials can be discovered or reused.

## What Happened

In 2025, FDA recall records and international safety notices described a potential security vulnerability affecting GE HealthCare Centricity Universal Viewer, PACS-IW, Radiology RA600, and Cardiology CA1000 systems. The FDA recall record states that service login credentials could be identified, potentially allowing a malicious actor with those credentials to access the system and manipulate patient data.

Published recall and safety-notice materials described customer actions including securing networks, using Active Directory or LDAP where possible, following mitigation guidance, and applying corrections or password-change procedures provided by GE HealthCare.

## What Failed

- Service credentials were discoverable or exposed in a way that could support unauthorized access.
- Privileged access paths in a networked imaging environment were not sufficiently protected.
- Customer mitigations depended on secure local network controls and account-management configuration.
- Credential change, rotation, or correction guidance had to be distributed after deployment.

## Secure-by-Design Lessons

| Lesson | What product teams should do |
|--------|------------------------------|
| Service credentials are product assets | Inventory service accounts, privileged credentials, and machine-to-machine trust paths. |
| Default or discoverable credentials should not survive deployment | Require unique credentials, customer-controlled identity integration, or certificate-based authentication. |
| Ecosystem boundaries need threat models | Include workstations, viewers, servers, remote access, customer directories, and service workflows. |
| Credential rotation must be operable | Provide tested procedures to change, rotate, revoke, and audit credentials. |
| Customer mitigation is not a substitute for design control | Retain evidence that default configurations and service paths were reviewed before release. |

## Evidence That Should Exist

| Evidence | Why it matters |
|----------|----------------|
| Credential inventory | Shows every service, machine, administrator, support, and integration credential. |
| Access-control design | Shows roles, privileges, authentication flows, and customer identity integration. |
| Threat model for the imaging ecosystem | Shows trust boundaries across viewers, PACS, workstations, services, and remote access. |
| Credential rotation test evidence | Shows credentials can be changed without breaking clinical workflow. |
| Secure configuration baseline | Shows default deployment avoids exposed or shared credentials. |
| Audit logging evidence | Shows privileged access and credential changes can be monitored. |
| Customer correction and acknowledgement records | Shows customers received, understood, and applied mitigation or correction instructions. |

## What Product Teams Should Check

- Do we have a complete inventory of service, support, and machine credentials?
- Are any credentials discoverable from local files, clients, installers, logs, manuals, or workstations?
- Can customers rotate or revoke service credentials safely?
- Can the product integrate with customer identity systems such as LDAP, Active Directory, or certificate-based authentication?
- Are privileged actions logged and reviewable?
- If a credential issue is found, can we identify affected versions and send clear mitigation instructions?

## Related Handbook Pages

- [CRA Readiness Gap Analysis](../checklists-and-worksheets/cra-gap-analysis.md)
- [Secure-by-Design Evidence Pack](../policy-and-evidence/audit-evidence-pack.md)
- [Secure-by-Design Policy Starter Kit](../policy-and-evidence/policy-templates.md)
- [Secure-by-Design Maturity Model](../checklists-and-worksheets/maturity-model.md)
- [Threat Modeling](../../implementation/build-phase/threat-modeling.md)
- [Unique Device Identity](../../implementation/build-phase/unique-device-identity.md)
- [Key Provisioning & Storage](../../implementation/build-phase/key-provisioning.md)
- [Secure Configuration & Hardening](../../implementation/build-phase/secure-configuration.md)
- [Security Logging](../../implementation/operate-phase/security-logging.md)
- [User Documentation](../../implementation/build-phase/user-documentation.md)

## Sources

- [FDA Recall: GE Healthcare Centricity systems](https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfres/res.cfm?id=212701)
- [Health Canada Recall: Centricity Universal Viewer, PACS-IW, Radiology and Cardiology Systems](https://recalls-rappels.canada.ca/en/alert-recall/centricitytm-universal-viewer-uv-pacs-iw-radiology-and-cardiology-systems)
