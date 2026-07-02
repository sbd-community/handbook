---
title: "ETSI Draft Puts Boot Managers Under CRA Scrutiny"
authors: [sbd_community]
tags: [cra, standards, eu, secure-by-design, boot-managers, etsi]
description: "ETSI's draft EN 304 623 shows how CRA expectations may become testable requirements for boot managers, secure boot, and hardware roots of trust."
---

On 17 June 2026, ETSI's work item for **EN 304 623**, _Cybersecurity
requirements for boot managers_, entered the deliverable approval procedure.
The [public draft](https://www.etsi.org/deliver/etsi_en/304600_304699/304623/00.01.03_20/en_304623v000103ev.pdf)
shows how the Cyber-Resilience Act (CRA) is reaching below operating systems
and applications into the firmware that establishes the first chain of trust.

<!-- truncate -->

The **[draft][etsi_en_304_623]** is not final, and it does not yet confer
presumption of conformity. But it is still important: the
**[ETSI work item][etsi_work_item]** shows the direction of travel for boot
managers listed as Important Products under the CRA.

## Why boot managers matter

Boot managers run before the operating system and before most product
security controls are available. They decide what code starts, which boot
target is trusted, whether recovery is allowed, and which configuration or
measurement data survives handoff.

If that layer is compromised, later controls may not matter. A device can
have good application hardening and strong cloud authentication, but still
boot attacker-controlled firmware if the trust chain is weak.

That is why the CRA lists boot managers as **Important Products — Class I**,
and why a dedicated vertical standard is emerging for them.

## What the draft covers

The draft uses three boot-manager use cases:

| Use case | Security profile | Characterised by |
|----------|------------------|------------------|
| `UC-IMM` | Low | Immutable code and trust anchors |
| `UC-VER` | Medium | Verified boot, update capability, logging, and key provisioning |
| `UC-HW` | High | Verified boot plus hardware-assisted security |

That structure matters because it is risk-based. An immutable, non-updateable
boot manager is not treated the same way as a hardware-assisted boot manager
with update, logging, key provisioning, and recovery capabilities.

The draft covers topics including:

- verified boot and measured boot,
- anti-rollback protection,
- secure update and recovery behaviour,
- trust anchors and key provisioning,
- debug-interface control,
- boot logging and attestation data,
- configuration protection,
- availability and recovery,
- security testing and assessment evidence.

## What this means for embedded teams

For embedded-device manufacturers, the key lesson is that secure boot is not
just a checkbox. A credible CRA story may need evidence that the full boot
architecture works under failure, update, recovery, and manufacturing
conditions.

Teams should be asking:

1. Are trust anchors immutable or otherwise hardware-protected?
2. Are anti-rollback counters protected against downgrade attacks?
3. What happens if an update fails halfway through?
4. Are debug interfaces disabled, fused off, or authenticated in production?
5. Can boot measurements, logs, and recovery events be trusted?
6. Which evidence proves these properties on the exact production hardware?

These questions affect MCU and SoC selection, not just bootloader code.

## We've updated the handbook

We have updated several handbook pages to reflect the draft:

- **[ETSI EN 304 623: Boot Managers](/docs/standards/eu/cra/en-304-623-boot-managers)** is now the canonical handbook page for the draft, its scope, and the evidence themes it raises.
- **[CRA Overview](/docs/standards/eu/cra-overview)** now explains why boot
  managers are an Important Class I category and how EN 304 623 fits into the
  harmonised-standards picture.
- **[Secure Boot](/docs/implementation/build-phase/secure-boot)** now calls
  out verified boot, measured boot, rollback protection, debug lockdown, and
  recovery evidence.
- **[STM32 Hardware Selection](/docs/resources/hardware/stm32)** and
  **[ESP32 Hardware Selection](/docs/resources/hardware/espressif)** now ask
  whether the chosen MCU or SoC can support boot-manager-style evidence.

## The practical takeaway

EN 304 623 is still a draft, but it is a strong signal. CRA implementation is
not stopping at application software or cloud services. It is reaching the
bottom of the stack, where hardware roots of trust, boot ROMs, update
recovery, and debug controls determine whether the rest of the product can
be trusted.

[etsi_work_item]: https://portal.etsi.org/webapp/WorkProgram/Report_WorkItem.asp?SearchPage=TRUE&WKI_ID=74414&butExpertSearch=Search&curItemNr=10&includeNonActiveTB=FALSE&includeSubProjectCode=FALSE&optDisplay=10&qCLUSTER_BOOLEAN=OR&qEND_CURRENT_STATUS_CODE=9+AB%3BN24&qETSI_ALL= "ETSI work item report for EN 304 623"
[etsi_en_304_623]: https://www.etsi.org/deliver/etsi_en/304600_304699/304623/00.01.03_20/en_304623v000103ev.pdf "ETSI EN 304 623 v0.1.3 draft – Cybersecurity requirements for boot managers"
