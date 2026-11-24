---
title: "OMB M-26-05 Makes Secure Software Attestation Optional"
authors: [sbd_community]
tags: [us, supply-chain, sbom, secure-by-design, compliance]
description: "OMB memo M-26-05 rescinds M-22-18 and M-23-16. Agencies now set software assurance by risk. Here's what suppliers to US agencies should take from it."
---

On 23 January 2026, the US Office of Management and Budget (OMB) issued
[memorandum M-26-05](https://www.whitehouse.gov/wp-content/uploads/2026/01/M-26-05-Adopting-a-Risk-based-Approach-to-Software-and-Hardware-Security.pdf),
_Adopting a Risk-based Approach to Software and Hardware Security_. It
rescinds M-22-18 and its companion M-23-16. The Secure Software Development
Attestation Form becomes one option among several, and each agency now sets
its own software and hardware assurance requirements based on risk.

<!-- truncate -->

M-26-05 is a memorandum to the heads of US federal departments and agencies.
It sets policy for how agencies buy and assure software and hardware. It
places no direct obligation on manufacturers, and this post is not legal
advice. Suppliers feel its effects through what their federal customers ask
for.

## What changed

The memo, signed by OMB Director Russell T. Vought, makes four moves.

- **Rescission.** OMB says M-22-18, _Enhancing the Security of the Software
  Supply Chain through Secure Software Development Practices_, "imposed
  unproven and burdensome software accounting processes that prioritized
  compliance over genuine security investments", and that it neglected
  threats posed by insecure hardware. M-22-18 and M-23-16 are rescinded.
- **Agency responsibility.** Each agency head is "ultimately responsible"
  for assuring the security of software and hardware permitted on the
  agency's network. Agencies should validate provider security using secure
  development principles and a comprehensive risk assessment. The memo says
  there is "no universal, one-size-fits-all method".
- **Continuing duties.** Agencies must still maintain a complete inventory of
  software and hardware, and develop assurance policies and processes that
  match their risk determinations and mission needs.
- **Optional tools.** Agencies may choose to use the resources developed
  under M-22-18, such as the Secure Software Development Attestation Form.
  They may also adopt contract terms that require a producer to provide a
  current software bill of materials (SBOM) on request. For a cloud platform,
  that SBOM should cover the runtime production environment.

The memo points agencies to three references: NIST SP 800-218, the
Secure Software Development Framework (SSDF), with its appendices; the
Cybersecurity and Infrastructure Security Agency's (CISA) 2025 Minimum
Elements for an SBOM, published in draft on 22 August 2025; and CISA's
Hardware Bill of Materials (HBOM) framework from September 2023.

## Why this matters for connected-product teams

The government-wide attestation requirement no longer exists. In its place, each
agency can ask for something different: a signed attestation form, an SBOM
on request, contract clauses, or evidence drawn from its own risk
assessment. Teams that sell connected devices or embedded software to US
agencies should expect more varied questions, not fewer.

The memo also brings hardware into scope. It names insecure hardware as a
gap in the old policy, asks agencies to inventory hardware as well as
software, and points to an HBOM framework. If your product ships firmware
on your own boards, expect buyers to ask about both layers.

What stays constant is the benchmark. The memo still points agencies to
NIST SP 800-218. A development process you can map to the SSDF remains the
most reusable evidence you can hold, whatever form a given agency asks for.

## How this relates to the handbook

Our SSDF overview describes the framework's four practice groups and how
they map to engineering work. Its conformance section now reflects
M-26-05: the attestation form is optional and agencies decide what to
require. The same SSDF-aligned evidence also supports the secure development
requirements of other regimes, such as the EU Cyber Resilience Act (CRA).

## What to do next

1. Keep your SSDF mapping current. Treat it as the source for any attestation
   or questionnaire a federal customer sends.
2. Be ready to produce a current SBOM on request, and for cloud services,
   one that covers the runtime production environment.
3. Inventory the hardware components in your products, and decide how you
   would answer an HBOM request.
4. Review federal contracts and bids for clauses that cite M-22-18 or
   M-23-16, and agree with the customer what replaces them.

## Handbook resources

- **[NIST SP 800-218 (SSDF)](/docs/standards/us/nist-sp-800-218-ssdf-overview)**
  maps the SSDF practices to engineering tasks and explains the attestation
  position under M-26-05.
- **[SBOM & VEX Workflows](/docs/implementation/build-phase/sbom-vex)**
  shows how to generate and maintain the SBOMs agencies may now request.
- **[CI/CD Hardening](/docs/implementation/operate-phase/cicd-hardening)**
  covers protecting the build environment, one of the SSDF practices behind
  any attestation.
- **[CISA Secure by Design Principles](/docs/quick-start/cisa-sbd-principles)**
  sets out the goals that the SSDF puts into practice.

## The practical takeaway

M-26-05 replaces one form with many conversations. Suppliers who can show
how their development process maps to the SSDF, and who can hand over an
SBOM on request, will be ready for whatever each agency decides to ask.
