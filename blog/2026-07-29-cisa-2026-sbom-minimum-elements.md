---
title: "CISA Publishes 2026 SBOM Minimum Elements"
authors: [sbd_community]
tags: [sbom, supply-chain, us, standards, cra]
description: "CISA and 17 partner agencies replace the 2021 NTIA SBOM minimum elements, adding hashes, licenses, signatures and generation context."
---

On 29 July 2026, CISA and partner agencies published the
**2026 Minimum Elements for a Software Bill of Materials (SBOM)**
([CISA](https://www.cisa.gov/resources-tools/resources/2026-minimum-elements-software-bill-materials-sbom)).
It replaces the 2021 NTIA minimum elements that most SBOM tooling and
procurement language still points to. For connected-device makers, it sets a
new, internationally backed baseline for what a useful SBOM contains.

<!-- truncate -->

The document is guidance, not regulation. It uses "should" throughout and
sets no deadline. But it is co-authored by the NSA, the FBI and 15
international agencies, including Germany's BSI, France's ANSSI, Italy's ACN,
Japan's METI and the Netherlands' NCSC. Expect buyers and assessors on both
sides of the Atlantic to start quoting it.

## What changed

The 2026 list has **ten new data fields**:

| Area | New fields |
|------|------------|
| Integrity | Component Hash Value, Component Hash Algorithm, SBOM Author Signature |
| Licensing | Component License |
| Provenance of the SBOM itself | SBOM Generation Context, SBOM Tool Name, SBOM Tool Version |
| Document metadata | SBOM Data Format Name, SBOM Data Format Version, SBOM Version |

Several 2021 elements were renamed or tightened. Supplier Name becomes
**Component Producer**, Author of SBOM Data becomes **SBOM Author**, and
Other Identifiers becomes **Component Identifiers**.

The practices and processes elements changed too:

- **Coverage** replaces Depth. An SBOM should include all components,
  including transitive dependencies, and there is no minimum depth.
- **Explicitly Identifying Unknown Information** replaces Known Unknowns.
  Authors should say whether missing data is unknown or deliberately
  withheld.
- **Machine-Processable Data** replaces Automation Support. SPDX and
  CycloneDX are named as the widely used formats, and SWID tags are dropped.
- **Access Control** is removed as a standalone element and folded into
  Distribution and Delivery.

## Why connected-device teams should care

Three of the new fields are hard to fill in by accident:

- **SBOM Generation Context** asks whether the SBOM was produced "before
  build", at "build", or "after build". A firmware SBOM generated from a
  source manifest and one produced by binary analysis can disagree, and
  recipients now expect you to say which they are getting.
- **Component Hash Value** is defined over the executable component artifact.
  For embedded products, that means hashing what actually ships in the
  firmware image, not just naming a package version.
- **SBOM Author Signature** expects a digital signature using an approved
  algorithm. That fits naturally with the signing infrastructure you already
  use for firmware and OTA updates.

The CRA requires an SBOM in the technical documentation but leaves the format
open. In practice, the 2026 elements are a sensible target for a CRA SBOM as
well as a US one.

## What to do next

1. Compare your current SBOM output against the ten new fields and note the
   gaps per product line.
2. Record generation context in your build pipeline, and decide whether you
   need both a build-time and a post-build SBOM for firmware.
3. Hash the shipped artifacts and sign SBOMs with the same key-management
   controls you use for release signing.
4. Update supplier requirements so the SBOMs you receive meet the same
   baseline.

## Handbook resources

- **[SBOM & VEX Workflows](/docs/implementation/build-phase/sbom-vex)**
  covers generating, publishing and maintaining SBOMs alongside VEX.
- **[SBOM & Supply-Chain Security Tools](/docs/tools/sbom-and-supply-chain-security)**
  compares generators and analyzers.
- **[Key Provisioning & Storage](/docs/implementation/build-phase/key-provisioning)**
  helps protect the keys behind SBOM signatures.
- **[Secure-by-Design Evidence Pack](/docs/resources/policy-and-evidence/audit-evidence-pack)**
  shows where SBOMs fit in the technical file.

## The bigger picture

The 2021 minimum elements made SBOMs a thing to ask for. The 2026 version is
about whether you can trust and use what you receive: who made it, when in
the lifecycle, with which tool, and whether it has been tampered with. That
is the level of SBOM regulators and customers will increasingly expect from
connected-product manufacturers.
