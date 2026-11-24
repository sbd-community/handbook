---
title: "ENISA Advisories on Secure Updates and SBOMs"
authors: [sbd_community]
tags: [cra, eu, sbom, supply-chain, secure-by-design]
description: "ENISA has published technical advisories on secure update mechanisms and SBOMs. Here's what connected-product teams should take from them."
---

On 4 November 2026, ENISA published a **Technical Advisory on Secure Update
Mechanisms**
([ENISA publication](https://www.enisa.europa.eu/publications/enisa-technical-advisory-on-secure-update-mechanisms)),
two weeks after its **Technical Advisory for Software Bill of Materials**
of 22 October 2026
([ENISA publication](https://www.enisa.europa.eu/publications/enisa-technical-advisory-for-software-bill-of-materials)).
Both give practical guidance to manufacturers of products with digital
elements, especially small and medium-sized ones, and turn CRA update and
SBOM duties into checks teams can run.

<!-- truncate -->

Neither advisory is a standard or a conformity assessment method. They are
technical guidance, aimed at teams that build and run update and Software
Bill of Materials (SBOM) processes. Both topics sit at the heart of the
Cyber-Resilience Act (CRA): security updates for the support period, and an
SBOM in the technical documentation.

## What ENISA published

### Secure update mechanisms

ENISA says the advisory covers threats across the update life cycle and the
controls that reduce them. It is aimed at teams that design, implement or
operate update mechanisms, especially micro, small and medium-sized
manufacturers.

The advisory models the update life cycle in seven steps: build and
establish trust, publish, check for updates, retrieve, verify, install, and
record status. It groups them into four stages, each with a security
objective and the relevant ENISA Secure by Design principles. It maps the
threats at each step to STRIDE categories, from signing-key compromise at
build time to failures that go undetected after installation.

The recommended controls will be familiar to anyone who has built a secure
over-the-air (OTA) update system:

- signed update metadata, with artefacts cryptographically bound to it;
- controlled release workflows with approval gates and staged roll-out;
- trusted update sources, strong transport security and validated
  redirects, treating CDNs and mirrors as untrusted;
- metadata freshness checks to resist rollback, replay and freeze attacks;
- anti-rollback state, atomic installation and recovery to a known-good
  version;
- automatic security updates by default where feasible, with clear user
  information;
- logging and reporting of update outcomes, and a way to rotate or recover
  trust anchors.

It also recommends separating security updates from functional changes, and
planning how update services stay available, or are securely retired, over
the product's supported lifetime.

### Software Bill of Materials

ENISA's SBOM advisory gives practical guidance on adopting SBOMs. It is
intended for organisations setting up initial SBOM capabilities, especially
SMEs and stewards. It describes an SBOM implementation
architecture and data flows based on a defined lifecycle. It also presents an
indicative SBOM threat model and measures to address security issues across
the SBOM ecosystem.

The advisory compares the data fields in Germany's BSI TR-03183-2 with
CISA's SBOM minimum elements, and describes the SPDX and CycloneDX formats.
It distinguishes SBOM types, from design and source through build and
analysed to deployed and runtime. Its risk table names problems many teams
will recognise: incomplete or outdated SBOMs, poor component identification,
weak binding between an SBOM and the artefact it describes, and SBOMs that
are produced but never used to prioritise vulnerabilities.

## Why this matters for connected-product teams

Updates and SBOMs are where CRA obligations become daily engineering work.
These advisories turn broad requirements into concrete controls and failure
modes that a small team can check against.

The update advisory is a useful review checklist for an existing OTA
pipeline. The SBOM advisory helps teams move from "we can generate an SBOM"
to an SBOM that is accurate, tied to a release and used for vulnerability
handling. It also fits with the SBOM minimum elements we covered in
[CISA Publishes 2026 SBOM Minimum Elements](/blog/2026/07/29/cisa-2026-sbom-minimum-elements).

The update advisory also maps each stage to the principles in ENISA's
[Secure by Design and Default Playbook](/blog/2026/07/31/enisa-secure-by-design-default-playbook),
such as automated maintenance and updates, and supply chain controls.

## What to do next

1. Walk your update pipeline through ENISA's seven steps and note any step
   without a control.
2. Check that your devices reject stale or rolled-back metadata, not just
   unsigned images.
3. Write down how you will rotate signing keys and keep the update service
   running for the whole support period.
4. Review your SBOM against ENISA's risk table, especially accuracy,
   completeness and binding to the released artefact.
5. Connect SBOM output to vulnerability triage, so every new CVE match gets
   a decision.

## Handbook resources

- **[Secure OTA Updates](/docs/implementation/build-phase/ota-updates)**
  covers update architecture, anti-rollback and recovery for devices.
- **[SBOM & VEX Workflows](/docs/implementation/build-phase/sbom-vex)**
  shows how to produce SBOMs per release and pair them with VEX.
- **[Secure Boot](/docs/implementation/build-phase/secure-boot)**
  covers the boot-time verification the update advisory links to.
- **[Patch Cadence & Rollback Strategy](/docs/implementation/operate-phase/patch-cadence)**
  helps plan release timing and safe rollback.

## The practical takeaway

ENISA is filling in the engineering detail behind the CRA's update and SBOM
requirements. For connected-product teams, these advisories are short,
practical checklists. Use them to find the gaps in pipelines you already run.
