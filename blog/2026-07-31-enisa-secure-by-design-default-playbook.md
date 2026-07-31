---
title: "ENISA Publishes Secure by Design and Default Playbook"
authors: [sbd_community]
tags: [secure-by-design, cra, eu, standards, strategy]
description: "ENISA's new playbook gives SMEs practical Secure-by-Design and Secure-by-Default release gates. Here's what connected-product teams should take from it."
---

In July 2026, ENISA published the **Secure by Design and Default Playbook**,
a practical guide aimed at small and medium-sized manufacturers building
products with digital elements
([ENISA publication](https://www.enisa.europa.eu/publications/enisa-secure-by-design-and-default-playbook),
[PDF](https://www.enisa.europa.eu/sites/default/files/2026-07/ENISA_Secure_By_Design_and_Default_Playbook_v1.pdf)).
It is a welcome addition to the CRA guidance landscape: clear principles,
repeatable engineering actions, and release gates that lean teams can
actually use.

<!-- truncate -->

The playbook is not legal advice, and ENISA is careful about that. What it
does offer is something many product teams have been missing: a shared
language for turning Secure-by-Design and Secure-by-Default from slogans
into checklist items, minimum evidence, and go/no-go criteria for a release
review.

## What ENISA published

At the centre of the report are **22 one-page playbooks**:

- **14 Secure-by-Design principles**, covering architectural foundations
  (trust boundaries, least privilege, identity, attack surface, defence in
  depth, open design) and operational integrity (lifecycle, secure coding,
  logging, change management, incident response, vulnerability handling,
  supply chain).
- **8 Secure-by-Default principles**, covering default hardening (services,
  access, communications, unique identity) and guided protection (onboarding,
  automated updates, transparent posture, recovery and ownership).

Each playbook follows the same pattern: objective, checklist, minimum
evidence, and a copy-pasteable **release gate**. Annex C also provides an
indicative mapping from those principles to the essential requirements in
Annex I of the **Cyber-Resilience Act (CRA)**.

ENISA has also published the 22 playbooks in a navigable GitHub repository
([enisaeu/enisa-sbd-playbook](https://github.com/enisaeu/enisa-sbd-playbook/)).

## Why this matters for connected-product teams

Secure-by-Design guidance often stops at principles. ENISA goes one step
further and asks whether the control is still true for *this* release.

That is useful for manufacturers because CRA preparation is not only about
having a security architecture. It is also about being able to show, in
ordinary engineering artefacts, that security decisions were made,
implemented, and checked before shipment.

The playbook is especially helpful for:

- turning Secure-by-Default into product acceptance criteria,
- attaching evidence expectations to release reviews,
- giving lean teams a shared agenda without inventing a heavy process,
- linking engineering practice to CRA Annex I language without pretending
  the mapping is a conformity assessment method.

ENISA also includes progressive adoption guidance. Start with product
context and threat modelling, establish a foundational engineering baseline,
then broaden coverage. Unchanged controls can be recorded as not affected
for a given release. That matters: the value is in using the gates
deliberately, not in re-answering every question on every sprint.

## How this relates to the handbook

ENISA and this handbook sit comfortably next to each other.

ENISA gives SMEs a **principle-to-gate** structure: what to implement, what
minimum evidence looks like, and what to check before release. This
handbook goes deeper on **how connected-device teams implement** the
controls those gates assume — secure boot, key provisioning, unique device
identity, OTA updates, SBOM and VEX workflows, disclosure, and evidence
packs.

In short:

- use ENISA when you need shared release criteria and CRA-aligned principle
  coverage;
- use the handbook when you need device-level design choices, operating
  practice, and implementation detail.

Both are practical. Neither replaces the other.

## What to do next

If you manufacture connected products, treat the playbook as a release
readiness prompt rather than a one-off reading list:

1. Skim the 22 playbooks and mark which ones apply to your product boundary.
2. Start with context and threat modelling, then a baseline around secure
   coding, logging, vulnerability handling, and supply-chain controls.
3. Add the Secure-by-Default playbooks that match your product: restrictive
   access, secure communications, unique identity, and automated updates.
4. Wire the relevant release-gate criteria into your existing release review
   or CI checks.
5. Reuse evidence across playbooks — one SBOM, scan result, or release
   record can support more than one gate.

## Handbook resources

- **[What is Secure-by-Design?](/docs/quick-start/what-is-secure-by-design)**
  explains the shift from user-managed security to manufacturer ownership.
- **[First-Sprint Checklist](/docs/quick-start/first-sprint-checklist)**
  helps turn principles into a near-term engineering backlog.
- **[Threat Modeling](/docs/implementation/build-phase/threat-modeling)**
  covers the product-context work ENISA puts first.
- **[Unique Device Identity](/docs/implementation/build-phase/unique-device-identity)**
  and **[Key Provisioning & Storage](/docs/implementation/build-phase/key-provisioning)**
  go deeper on Secure-by-Default identity and secrets.
- **[Secure OTA Updates](/docs/implementation/build-phase/ota-updates)** and
  **[Vulnerability Disclosure](/docs/implementation/operate-phase/vulnerability-disclosure)**
  cover updateability and vulnerability handling in practice.
- **[Secure-by-Design Evidence Pack](/docs/resources/policy-and-evidence/audit-evidence-pack)**
  shows how to keep the artefacts release gates expect.

## The bigger picture

ENISA's playbook is a strong signal that Secure-by-Design and
Secure-by-Default are moving from policy language into engineering
routines. For connected-product teams, the opportunity is to use those
release gates as a common checklist — and to back them with the deeper
implementation and evidence work that makes the gates meaningful.

[enisa-pub]: https://www.enisa.europa.eu/publications/enisa-secure-by-design-and-default-playbook "ENISA Secure by Design and Default Playbook publication page"
[enisa-pdf]: https://www.enisa.europa.eu/sites/default/files/2026-07/ENISA_Secure_By_Design_and_Default_Playbook_v1.pdf "ENISA Secure by Design and Default Playbook PDF"
[enisa-github]: https://github.com/enisaeu/enisa-sbd-playbook/ "ENISA Secure by Design and Default playbooks on GitHub"
