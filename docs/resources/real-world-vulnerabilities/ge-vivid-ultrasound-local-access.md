---
title: "Case Study: GE Vivid Ultrasound Local Access"
sidebar_label: "GE Vivid Local Access"
description: "A secure-by-design case study showing how local access, hard-coded credentials, kiosk escape, and command injection can affect clinical devices."
tags: [case-study, real-world-vulnerability, secure-by-design, cra, product-security, evidence, credentials, local-access, medical]
---
# Case Study: GE Vivid Ultrasound Local Access Flaws (2024)

## Why This Case Matters

This case shows why "local access required" does not mean "low risk". Clinical devices can be touched by many people during use, service, transport, cleaning, and storage. If local access can lead to kiosk escape, command execution, credential misuse, or patient-data access, it needs to be treated as part of the secure-by-design threat model.

## What Happened

In 2024, Nozomi Networks disclosed research into 11 vulnerabilities affecting GE HealthCare Vivid ultrasound systems and associated software, including Vivid T9, Common Service Desktop, and EchoPAC.

The reported weaknesses included hard-coded credentials, command injection, kiosk escape, path traversal, privilege escalation, and credential-protection issues. Nozomi reported that the Vivid T9 attack chain required physical interaction with the device, while EchoPAC scenarios could be exploited from the local network if an attacker could exchange packets with the vulnerable software. Reported impacts included access to or manipulation of patient data and potential installation of malware.

## What Failed

- Kiosk and local-access boundaries could be bypassed in realistic physical-access scenarios.
- Service functions and local applications exposed command execution or privileged access paths.
- Hard-coded or insufficiently protected credentials created avoidable access risk.
- The security model relied too heavily on environmental controls such as restricting physical access.
- Patient data and clinical workflow could be affected if local compromise led to malware or data manipulation.

## Secure-by-Design Lessons

| Lesson | What product teams should do |
|--------|------------------------------|
| Local access belongs in the threat model | Include service technicians, insiders, shared clinical spaces, transport, and unattended device scenarios. |
| Kiosk mode is not a security boundary by itself | Harden the underlying OS, restrict process execution, and prevent shell or application escape paths. |
| Service credentials need lifecycle control | Avoid hard-coded credentials and require unique, auditable, revocable access for support workflows. |
| Input handling matters in service tools | Treat local and service web interfaces as attack surfaces requiring validation, least privilege, and testing. |
| Clinical data needs layered protection | Protect stored and transmitted patient data even if an attacker gains local access. |

## Evidence That Should Exist

| Evidence | Why it matters |
|----------|----------------|
| Threat model for local and service access | Shows physical access assumptions, service workflows, and clinical environment risks. |
| Secure configuration baseline | Shows kiosk, OS hardening, application allow-listing, service accounts, and local interfaces are controlled. |
| Credential design and rotation records | Shows service credentials are unique, protected, and revocable. |
| Security test results for local interfaces | Shows command injection, path traversal, privilege escalation, and kiosk escape were tested. |
| Data protection design | Shows patient data remains protected if local access is obtained. |
| Patch and mitigation records | Shows customers received updates, configuration guidance, or compensating controls. |

## What Product Teams Should Check

- What can a person do with five minutes of physical access to the product?
- Can a kiosk, maintenance screen, service web app, USB port, or local console be used to reach the OS?
- Are USB ports, removable media, keyboards, trackpads, and service peripherals controlled on production devices?
- Are any service credentials hard-coded, shared, or discoverable?
- Do local service tools validate input and run with least privilege?
- Is patient, customer, or operational data protected if local access is obtained?
- Can we patch or provide mitigation guidance for local-access vulnerabilities without disrupting clinical workflow?

## Related Handbook Pages

- [CRA Readiness Gap Analysis](../checklists-and-worksheets/cra-gap-analysis.md)
- [Secure-by-Design Evidence Pack](../policy-and-evidence/audit-evidence-pack.md)
- [Secure-by-Design Policy Starter Kit](../policy-and-evidence/policy-templates.md)
- [Secure-by-Design Maturity Model](../checklists-and-worksheets/maturity-model.md)
- [Threat Modeling](../../implementation/build-phase/threat-modeling.md)
- [Secure Configuration & Hardening](../../implementation/build-phase/secure-configuration.md)
- [Key Provisioning & Storage](../../implementation/build-phase/key-provisioning.md)
- [Security Logging](../../implementation/operate-phase/security-logging.md)
- [Patch Cadence & Rollback Strategy](../../implementation/operate-phase/patch-cadence.md)
- [User Documentation](../../implementation/build-phase/user-documentation.md)

## Sources

- [Nozomi Networks: Vulnerabilities on GE HealthCare Vivid Ultrasound](https://www.nozominetworks.com/blog/ge-healthcare-vivid-ultrasound-vulnerabilities)
