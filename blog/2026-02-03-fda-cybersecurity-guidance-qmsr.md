---
title: "FDA Updates Premarket Cybersecurity Guidance for QMSR"
authors: [sbd_community]
tags: [fda, medical, us, 524b, compliance]
description: "FDA's February 2026 final guidance supersedes the June 2025 version and aligns premarket cybersecurity with the QMSR. Here's what device teams should do."
---

On 3 February 2026, the US Food and Drug Administration (FDA) issued final
guidance titled _Cybersecurity in Medical Devices: Quality Management System
Considerations and Content of Premarket Submissions_
([FDA guidance page](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/cybersecurity-medical-devices-quality-management-system-considerations-and-content-premarket)).
It replaces the June 2025 version and aligns FDA's cybersecurity expectations
with the Quality Management System Regulation (QMSR). Device teams should
check that their cybersecurity procedures and submissions cite it.

<!-- truncate -->

This is an update to an existing guidance, not a new regime. It still covers
premarket cybersecurity content and "cyber devices" under section 524B of the
Federal Food, Drug, and Cosmetic (FD&C) Act. The headline change is the
quality-system frame those expectations sit in. This post is not regulatory
advice. Read the guidance itself before you
change a submission.

## What was published

FDA lists the document as **final**, issued on
**3 February 2026** under docket **FDA-2021-D-1158**. It was issued by the
Center for Devices and Radiological Health (CDRH) and the Center for
Biologics Evaluation and Research (CBER).

The page states that it supersedes the final guidance _Cybersecurity in
Medical Devices: Quality System Considerations and Content of Premarket
Submissions_, issued on 27 June 2025. We covered that version in
[FDA Overhauls Medical Device Cybersecurity Guidance](/blog/2025/06/27/fda-publishes-major-update-to-cybersecurity-guidance).

The visible change is in the title: "Quality System" has become "Quality
Management System". That reflects FDA's move from the old Quality System
Regulation to the QMSR. The guidance also continues to address FDA's
recommendations on section 524B for cyber devices.

FDA's page does not summarise the changes section by section. If your team
relies on specific wording in the June 2025 version, compare the two texts
directly rather than assuming the content is unchanged.

## Why this matters for connected-product teams

For medical device manufacturers, cybersecurity is not a separate track from
quality. FDA expects security risk management, design controls, testing and
postmarket vulnerability handling to live inside the quality system, and to
show up as evidence in premarket submissions.

When the quality-system regulation changes, the references in your
cybersecurity procedures, templates and submission content need to follow.
The practical risks are small but real:

- procedures that still cite the old regulation or the superseded guidance;
- premarket cybersecurity sections built from a template that points to the
  June 2025 document;
- traceability that links security controls to quality-system clauses that
  may have changed.

None of these is a security failure. They are the kind of inconsistency that
slows a review and invites additional questions.

## How this relates to the handbook

The handbook treats FDA cybersecurity as one of several regimes that ask for
the same underlying engineering: threat modelling, secure architecture,
software bills of materials (SBOMs), secure updates and coordinated
vulnerability disclosure. The FDA-specific part is how that evidence is
packaged for a premarket submission and maintained under the quality system.

Teams that also sell into the EU will recognise the pattern. The
Cyber-Resilience Act (CRA) and the Medical Device Regulation (MDR) ask for a
documented risk-based process and lifecycle evidence. Keeping one evidence
set, mapped to each regime, is still the most efficient approach.

## What to do next

1. Download the February 2026 final guidance from FDA and file it alongside
   the superseded June 2025 version.
2. Update references in your cybersecurity procedures, design-control
   templates and submission templates to the new guidance and to the QMSR.
3. Compare your premarket cybersecurity content against the new text,
   section by section, and record any differences you act on.
4. Check that your section 524B artefacts, such as the SBOM, postmarket
   vulnerability plan and update process, are still traceable to the
   quality-system procedures that produce them.
5. Brief regulatory affairs and engineering together, so both use the same
   document version in upcoming submissions.

## Handbook resources

- **[FDA Cybersecurity](/docs/standards/us/fda-cybersecurity-overview)**
  explains cyber devices, section 524B and FDA's premarket expectations.
- **[Threat Modeling](/docs/implementation/build-phase/threat-modeling)**
  covers the security risk management FDA expects in a submission.
- **[SBOM & VEX Workflows](/docs/implementation/build-phase/sbom-vex)**
  shows how to produce and maintain the SBOM section 524B requires.
- **[Vulnerability Disclosure](/docs/implementation/operate-phase/vulnerability-disclosure)**
  covers the postmarket process behind your vulnerability plan.
- **[Secure-by-Design Evidence Pack](/docs/resources/policy-and-evidence/audit-evidence-pack)**
  helps keep cybersecurity evidence traceable to your quality system.

## The practical takeaway

This is a maintenance update rather than a new set of demands. Treat it as a
prompt to bring your cybersecurity procedures and submission templates in
line with the QMSR, so your evidence and the regulation it sits under say the
same thing.
