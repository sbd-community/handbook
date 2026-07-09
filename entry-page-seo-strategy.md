# Entry Page Strategy: Secure-by-Design Handbook

## 1. Purpose

This document identifies the Secure-by-Design Handbook pages that should work as entry points for cold visitors arriving from search, AI answer engines, social sharing, GitHub, standards discussions, internal chats, and customer or assessor emails.

The goal is not to create thin keyword landing pages. The goal is to make priority pages useful, specific, structured, citable, and capable of turning confusion into trust, clarity, and a next step.

Use this document to answer:

- Which pages matter most as entry pages?
- What state is each page in?
- What exactly needs to change?
- What format should every priority page follow?
- What should not be disturbed for existing handbook readers?
- What should the team do next?

## 2. Site Positioning

### Primary Job

> How do we design, build, operate, and evidence secure connected products?

### Sharper Positioning

> Secure-by-Design Handbook helps connected-product teams turn CRA and secure-by-design expectations into engineering controls, lifecycle practices, technical documentation, and evidence.

### This Site Should Own

- Connected-product secure-by-design implementation.
- CRA and secure-by-design expectations translated into engineering controls.
- Product architecture, secure defaults, secure boot, updates, vulnerability handling, lifecycle support, and product-level evidence.
- Technical documentation and evidence for connected-product security decisions.
- Practical templates, checklists, examples, and control guidance for product teams.

### This Site Should Not Own

- Generic cybersecurity explainers without connected-product implementation value.
- Generic legal summaries of CRA without implementation guidance.
- Supply-chain evidence exchange topics that belong on a supply-chain assurance site.
- Vendor-neutral supplier assurance workflows unless tied directly to connected-product secure-by-design evidence.
- Generic vendor listings that do not help a product team make or evidence a security decision.

## 3. Entry-Page Principle

A priority entry page must quickly answer:

- Am I in the right place?
- Can I trust this?
- What decision, evidence, or action does this help with?
- What should I do next?

The strongest entry pages include practical value such as:

- checklists;
- decision tables;
- evidence lists;
- templates;
- worked examples;
- role paths;
- source-backed standards interpretation;
- clear caveats and boundaries.

Do not call these "SEO landing pages". Use **entry pages**. The term protects the handbook goal: the page must still be valuable even if search sends it no traffic.

## 4. Entry-Page Tiers

| Tier | Role | Treatment |
| --- | --- | --- |
| Tier 1 | Primary entry pages | Highest editorial priority. Must work for cold visitors and route to deeper pages. |
| Tier 2 | Supporting entry pages | Can receive traffic, but mainly deepen journeys from Tier 1 pages. |
| Tier 3 | Reference, examples, and utility pages | Useful support pages. Optimise only when they have a clear entry role. |
| Tier 4 | Blog, news, archive, and generated utility pages | Useful for freshness or navigation, but not main entry architecture. |

The sitemap may be mechanically flat. Editorial priority is not.

## 5. Priority And Readiness

Separate strategic priority from entry readiness. A page can be strategically important but need major work, or already be strong but lower priority.

| Field | Values | Meaning |
| --- | --- | --- |
| Strategic priority | P1, P2, P3, Later | Importance to the entry-page architecture. |
| Entry readiness | Ready, Light alignment, Medium rewrite, Major rewrite | Amount of work needed before the page works well as a cold-entry page. |
| Content status | Done, Needs edit, Needs rewrite, Not started | Whether the page content itself is entry-ready. |
| Routing status | Done, In progress, Not started, N/A | Whether the page is properly linked into the entry-page journey. |

## 6. Required Tier 1 Page Structure

Every Tier 1 page should include:

1. H1 that matches the reader problem.
2. First paragraph that states who the page is for and what decision or action it helps with.
3. A concise answer in the first 150 to 250 words.
4. "Use this page when..." or an equivalent entry cue.
5. Practical table, checklist, template, decision model, or worked example.
6. "What good looks like" or an equivalent standard.
7. Evidence to retain.
8. Common gaps or mistakes.
9. Related pages grouped by next action.
10. Primary-source citations where standards or regulation are discussed.
11. Clear caveat that the page is guidance, not legal, certification, or conformity-assessment advice where relevant.

Every P1 rewrite must include a **Preserve** field before editing. Do not remove useful handbook depth in order to add entry-page copy.

## 7. Entry-Page Map

| Strategic priority | Entry readiness | Page | URL/source | Entry intent | Page promise | Required work | Owner | Content status | Routing status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P1 | Medium rewrite | Homepage | `src/pages/index.tsx` | I need to understand secure by design for connected products and what to do next. | Route connected-product teams into obligations, readiness, implementation, and evidence. | Four-path routing is in place and local Phase 4 QA confirmed the priority routes. | Editorial + developer/site config | Done | Done |
| P1 | Major rewrite | What is Secure-by-Design? | `docs/quick-start/what-is-secure-by-design.md` | What does secure by design mean for connected-product teams? | Explain how secure by design changes product architecture, defaults, development, updates, vulnerability handling, and evidence. | P1 structure, process-change model, SbD vs secure-by-default distinction, checklist, and next-step routing are in place. | Editorial + product-security reviewer | Done | Done |
| P1 | Light alignment | CRA Primer | `docs/quick-start/cra-primer.md` | What is the CRA and what does it mean for connected products? | Give a short, non-legal first read that routes readers into readiness or detailed reference. | Direct routes to CRA Readiness Gap Analysis, Evidence Pack, and CRA Overview are in place. | Editorial + standards reviewer | Done | Done |
| P1 | Ready | CRA Readiness Gap Analysis | `docs/resources/checklists-and-worksheets/cra-gap-analysis.md` | How do I assess CRA readiness and turn gaps into actions? | Produce a scoped readiness view, evidence map, gap register, and next actions. | Grouped next-action routing to obligations, evidence, maturity, policies, technical controls, release, and post-market pages is in place. | Editorial + standards reviewer + product-security reviewer | Done | Done |
| P1 | Light alignment | Secure-by-Design Evidence Pack | `docs/resources/policy-and-evidence/audit-evidence-pack.md` | What evidence should we retain for secure-by-design and CRA technical documentation? | Give teams a lifecycle evidence structure for product security decisions and CRA technical documentation. | Inbound anchor text is standardised; keep slug stable. | Editorial + standards reviewer | Done | Done |
| P1 | Medium rewrite | Secure Boot | `docs/implementation/build-phase/secure-boot.md` | What secure boot decisions and evidence matter for a CRA-scoped connected product? | Explain secure boot decisions, failure behavior, evidence, and related controls for connected products. | P1 entry structure, good-state model, evidence section, common gaps, and grouped related links are in place. | Editorial + technical reviewer + standards reviewer | Done | Done |
| P1 | Medium rewrite | OTA Updates and Patching | `docs/implementation/build-phase/ota-updates.md` | Can we safely deliver, verify, recover, and evidence security updates over the support period? | Explain the update architecture and lifecycle evidence needed to remediate vulnerabilities safely. | P1 structure, records/customer/remediation/staged-rollout evidence, related links, and checklist fix are in place. | Editorial + technical reviewer | Done | Done |
| P1 | Medium rewrite | Vulnerability Disclosure | `docs/implementation/operate-phase/vulnerability-disclosure.md` | How do we receive, triage, report, fix, evidence, and communicate vulnerabilities? | Explain public CVD, internal triage, CRA reporting, remediation, evidence, and communication responsibilities. | P1 structure, vulnerability log guidance, customer communication, evidence, Policy Starter Kit route, and grouped related links are in place. | Editorial + standards reviewer + product-security reviewer | Done | Done |
| P1 | Medium rewrite | Key Provisioning and Storage | `docs/implementation/build-phase/key-provisioning.md` | How should keys be created, provisioned, protected, rotated, and evidenced? | Explain the provisioning ceremony and evidence needed to avoid shared secrets and weak key handling. | P1 structure, provisioning ceremony, trust-anchor options, evidence, common gaps, and grouped related links are in place. | Editorial + hardware/embedded reviewer + technical reviewer | Done | Done |
| P1 | Medium rewrite | Unique Device Identity | `docs/implementation/build-phase/unique-device-identity.md` | How does a device prove what it is across onboarding, authentication, updates, and support? | Explain product identity design and the evidence needed to prove devices are unique, authentic, and supportable. | P1 structure, lifecycle states, evidence, common gaps, and stronger links to provisioning, crypto, OTA, hardware, and evidence are in place. | Editorial + product-security reviewer + technical reviewer | Done | Done |
| P2 | Ready | Cryptography under the CRA | `docs/resources/cryptography/cryptography-under-cra.md` | What cryptography decisions and evidence matter under the CRA? | Help teams inventory, assess, justify, and retain evidence for cryptography decisions. | Grouped routing from secure boot, OTA, provisioning, hardware, EN 304 623, evidence, and CRA readiness pages is in place. | Editorial + technical reviewer + standards reviewer | Done | Done |
| P2 | Ready | Types of Embedded Device | `docs/resources/reference/types-of-embedded-device.md` | What device architecture are we dealing with and how does it affect controls and evidence? | Classify device architecture and link it to secure-by-design controls, CRA readiness, and evidence. | Grouped task routing to threat modeling, implementation controls, hardware pages, evidence, and examples is in place. | Editorial + hardware/embedded reviewer | Done | Done |
| P2 | Light alignment | First Sprint Checklist | `docs/quick-start/first-sprint-checklist.md` | What should we do in the first sprint? | Give teams a practical first sprint path for secure-by-design work. | Sprint outputs, backlog template, and routing to CRA Gap Analysis, Evidence Pack, Policy Starter Kit, and core controls are in place. | Editorial + product-security reviewer | Done | Done |
| P2 | Light alignment | How to Use Handbook | `docs/quick-start/how-to-use-handbook.md` | Which handbook path should I follow for my role? | Route readers by role, task, and likely next action. | Role and task routing now supports homepage journeys and entry-page paths. | Editorial | Done | Done |
| P2 | Medium rewrite | SBOM & VEX | `docs/implementation/build-phase/sbom-vex.md` | How do SBOM and VEX support release and vulnerability evidence? | Explain how SBOM/VEX support product development, release, and vulnerability handling evidence. | P2 entry structure, release workflow, VEX triage, evidence, common gaps, and routing from Gap Analysis and Evidence Pack are in place. | Editorial + technical reviewer + product-security reviewer | Done | Done |
| P2 | Medium rewrite | Threat Modeling | `docs/implementation/build-phase/threat-modeling.md` | How do we identify and evidence product security risks? | Explain how threat modeling produces risk decisions, mitigations, and evidence. | P2 entry structure, workflow, threat register, evidence, examples, and routing from SbD, Types, examples, and Evidence Pack are in place. | Editorial + product-security reviewer | Done | Done |
| P2 | Medium rewrite | Patch Cadence and Rollback Strategy | `docs/implementation/operate-phase/patch-cadence.md` | How do we plan update timing, rollback, and remediation expectations? | Explain update timing, rollback strategy, remediation expectations, and support-period evidence. | P2 entry structure, remediation workflow, rollback distinctions, support-period commitments, evidence, and routing to OTA and Vulnerability Disclosure are in place. | Editorial + technical reviewer + product-security reviewer | Done | Done |
| P2 | Light alignment | ETSI EN 304 623 Boot Managers | `docs/standards/eu/cra/en-304-623-boot-managers.md` | What does the boot-manager draft imply for secure boot, updates, and evidence? | Translate the draft boot-manager standard into design planning, gap analysis, and evidence considerations. | Entry cue and grouped next-step routing to Secure Boot, OTA, key provisioning, crypto, vulnerability handling, SBOM, and evidence are in place. | Editorial + standards reviewer + technical reviewer | Done | Done |
| P2 | Ready | Resources hub | `docs/resources/index.md` | I know the job I need to do, but not which resource to use. | Route users by task into checklists, evidence, examples, case studies, hardware, crypto, and reference pages. | Task-routing and Evidence Pack naming are aligned. | Editorial | Done | Done |
| P2 | Ready | Secure-by-Design Maturity Model | `docs/resources/checklists-and-worksheets/maturity-model.md` | How mature are our secure-by-design capabilities? | Help teams assess organisational capability and turn gaps into a roadmap. | Grouped routing to CRA readiness, Evidence Pack, risk/design controls, and post-market practices is in place. | Editorial + product-security reviewer | Done | Done |
| P2 | Ready | Policy Starter Kit | `docs/resources/policy-and-evidence/policy-templates.md` | What policies and procedures should we publish or retain? | Provide public policy templates, internal procedure outlines, and retained evidence guidance. | Grouped routing to Gap Analysis, Evidence Pack, Maturity Model, CVD, Patch Cadence, and engineering/release controls is in place. | Editorial + standards reviewer | Done | Done |
| P2 | Ready | STM32 hardware page | `docs/resources/hardware/stm32.md` | How can STM32 hardware support a CRA-scoped security case? | Help teams assess STM32 security capabilities, caveats, and evidence needs. | Opening is explicit and routing now includes architecture classification and key provisioning earlier. | Editorial + hardware/embedded reviewer | Done | Done |
| P2 | Ready | ESP32 hardware page | `docs/resources/hardware/espressif.md` | How can ESP32 hardware support a CRA-scoped security case? | Help teams assess ESP32 security capabilities, caveats, and evidence needs. | Reviewed; caveats and routing remain aligned. | Editorial + hardware/embedded reviewer | Done | Done |
| P3 | Light alignment | Real-world vulnerabilities hub | `docs/resources/real-world-vulnerabilities/index.md` | Which real failures map to which secure-by-design controls? | Route from real failures to failure patterns, controls, evidence, and product-team checks. | Lightweight hub by failure pattern, control area, evidence lesson, and next action is in place without duplicating individual cases. | Editorial + product-security reviewer | Done | Done |
| P3 | Ready | Threat-model examples | `docs/resources/example-documents/` | What does a proportionate threat model look like? | Show concrete, reusable examples of proportionate product threat models. | Example pages now route back to Threat Modeling, Types of Embedded Device, Gap Analysis, Evidence Pack, and relevant implementation controls. | Editorial + product-security reviewer | Done | Done |

## 8. Priority Page Briefs

Use these briefs before rewriting P1 pages. Do not rewrite a P1 page from the map alone.

### Homepage

| Field | Notes |
| --- | --- |
| Tier | Tier 1 |
| Strategic priority | P1 |
| Entry readiness | Medium rewrite |
| Primary audience | Product owners, compliance leads, product-security leads, firmware/embedded/cloud engineers, and contributors. |
| Primary intent | I need to understand what this handbook helps me do and where to start. |
| Likely query / AI prompt cluster | secure by design handbook, connected product security guidance, CRA secure by design guidance, secure by design connected devices. |
| Page promise | This handbook turns secure-by-design and CRA expectations into practical controls, lifecycle practices, and evidence for connected-product teams. |
| What good looks like | A cold visitor can choose between obligations, readiness, implementation, and evidence without reading the whole page. |
| Unique value | Open, practical, connected-product-specific routing from regulation to engineering and evidence. |
| Current problem | The homepage has useful role cards, but it does not make CRA Primer, Evidence Pack, or "assemble evidence" visible enough. |
| Required rewrite | Add four first-contact paths: understand obligations, assess readiness, implement controls, assemble evidence. |
| Preserve | Role-card simplicity, community/GitHub/blog trust signals, and concise hero. |
| Next-step links | CRA Primer, CRA Readiness Gap Analysis, Implementation Guides or Secure Boot, Secure-by-Design Evidence Pack, How to Use Handbook. |
| Success signal | A cold visitor chooses a path within one click. |

#### Rewrite Instructions

- Add visible paths for obligations, readiness, implementation, and evidence.
- Keep role cards, but make evidence and CRA Primer first-class routes.
- Keep the homepage as a trust and routing page, not a detailed article.

#### Do Not

- Turn the homepage into a full sitemap.
- Push community and GitHub trust signals so far down that contributors cannot find them.
- Replace role paths with keyword-stuffed copy.

### What Is Secure-by-Design?

| Field | Notes |
| --- | --- |
| Tier | Tier 1 |
| Strategic priority | P1 |
| Entry readiness | Major rewrite |
| Primary audience | Non-specialist executives, product owners, compliance leads, and engineers asked to "do secure by design". |
| Primary intent | What does secure by design mean for connected-product teams, and what changes in our process? |
| Likely query / AI prompt cluster | what is secure by design, secure by design meaning, secure by design principles, secure by design vs secure by default, secure by design connected products. |
| Page promise | Secure by design means making security part of product architecture, defaults, development, update, vulnerability handling, and lifecycle evidence. |
| What good looks like | Reader understands the process changes required: ownership, secure defaults, threat modeling, implementation controls, update capability, vulnerability handling, and retained evidence. |
| Unique value | Connects principles to concrete product-process changes and next actions. |
| Current problem | Good conceptual primer, but not yet a P1 entry page. It lacks use-when framing, process model, practical checklist, and strong next-step routing. |
| Required rewrite | Add P1 structure, secure-by-design vs secure-by-default distinction, product-process change model, practical checklist, and grouped related links. |
| Preserve | Standards and principles framing; this is the conceptual anchor for non-specialist readers. |
| Next-step links | CRA Primer, First Sprint Checklist, Threat Modeling, Secure Boot, OTA Updates, Evidence Pack, Maturity Model. |
| Success signal | Reader can explain what changes in product work and choose the next action. |

#### Rewrite Instructions

- Open with who the page is for and the process change it explains.
- Add "Use this page when..." and a practical checklist.
- Keep the conceptual framing connected to practical next steps.

#### Do Not

- Remove the regulatory and standards context.
- Turn the page into only a checklist.
- Duplicate the CRA Primer.

### CRA Primer

| Field | Notes |
| --- | --- |
| Tier | Tier 1 |
| Strategic priority | P1 |
| Entry readiness | Light alignment |
| Primary audience | Product owners, compliance leads, founders, and engineers needing a quick CRA first read. |
| Primary intent | What is the CRA and what does it mean for connected-product teams? |
| Likely query / AI prompt cluster | Cyber Resilience Act connected products, CRA primer, CRA product with digital elements, CRA obligations. |
| Page promise | A short, non-legal first read that explains CRA scope, obligations, timing, and next actions. |
| What good looks like | Reader can tell whether CRA likely matters, what kind of obligations to investigate, and whether to move to the overview or readiness checklist. |
| Unique value | Fast route from regulation to practical readiness work. |
| Current problem | Good first read, but should route more directly to CRA Readiness Gap Analysis when the reader is ready to act. |
| Required rewrite | Light CTA and link alignment. |
| Preserve | Brevity and first-read tone. |
| Next-step links | CRA Overview, CRA Readiness Gap Analysis, Evidence Pack, What is Secure-by-Design. |
| Success signal | Reader understands whether CRA likely matters and moves to readiness or reference detail. |

#### Rewrite Instructions

- Add a direct route to CRA Readiness Gap Analysis.
- Add a direct route to the Secure-by-Design Evidence Pack.
- Keep the primer short, practical, and non-legal.

#### Do Not

- Merge with the CRA Overview.
- Add clause-level depth that belongs in the overview.

### CRA Readiness Gap Analysis

| Field | Notes |
| --- | --- |
| Tier | Tier 1 |
| Strategic priority | P1 |
| Entry readiness | Ready |
| Primary audience | Compliance leads, product-security leads, product owners, consultants, and engineering managers. |
| Primary intent | How do we assess CRA readiness and turn gaps into owned actions? |
| Likely query / AI prompt cluster | CRA readiness checklist, Cyber Resilience Act checklist, CRA gap analysis, CRA technical documentation checklist. |
| Page promise | Produces a scoped readiness view, evidence map, gap register, and inputs for the Evidence Pack. |
| What good looks like | A completed run identifies scope, status, evidence locations, owners, next actions, and unresolved gaps for the product or release. |
| Unique value | Evidence, owner, and next-action fields make it more useful than a yes/no checklist. |
| Current problem | Mostly routing, not content. |
| Required rewrite | Maintain; optionally add grouped next-action links and stronger inbound links. |
| Preserve | Status/evidence/owner/next-action workflow. |
| Next-step links | Evidence Pack, CRA Overview, Secure Boot, OTA Updates, SBOM & VEX, Vulnerability Disclosure, Policy Starter Kit. |
| Success signal | Team leaves with gaps, evidence locations, owners, and next actions. |

#### Rewrite Instructions

- Maintain the current readiness workflow.
- Add grouped next-action links only if they improve routing.
- Strengthen inbound links from CRA Primer, Evidence Pack, Homepage, and Resources hub.

#### Do Not

- Simplify it back into a yes/no checklist.
- Remove evidence and ownership columns.

### Secure-by-Design Evidence Pack

| Field | Notes |
| --- | --- |
| Tier | Tier 1 |
| Strategic priority | P1 |
| Entry readiness | Light alignment |
| Primary audience | Compliance leads, product-security leads, audit/assurance stakeholders, and engineering managers. |
| Primary intent | What evidence should we retain to explain secure-by-design decisions and CRA technical documentation? |
| Likely query / AI prompt cluster | CRA evidence pack, secure by design evidence, CRA technical documentation cybersecurity, product security evidence pack. |
| Page promise | Gives a structure for retaining evidence across design, release, update, vulnerability handling, and support. |
| What good looks like | Evidence is scoped, owned, current, verifiable, decision-linked, exception-aware, and retained for the relevant product, release, or support period. |
| Unique value | Treats evidence as lifecycle decision support, not just an audit folder. |
| Current problem | Page is strong; keep inbound anchor text aligned to "Secure-by-Design Evidence Pack". |
| Required rewrite | Standardise display name and inbound anchor text; keep slug stable. |
| Preserve | Audit and customer-assurance use cases. |
| Next-step links | CRA Gap Analysis, Maturity Model, Threat Modeling, Vulnerability Disclosure, Patch Cadence, Types of Embedded Device. |
| Success signal | Team can create or update an evidence register for a product/release. |

#### Do Not

- Rename the slug unless there is a redirect plan.
- Remove audit language entirely.
- Present the pack as making weak evidence strong.

### Secure Boot

| Field | Notes |
| --- | --- |
| Tier | Tier 1 |
| Strategic priority | P1 |
| Entry readiness | Medium rewrite |
| Primary audience | Firmware engineers, security architects, product-security leads, and technical compliance readers. |
| Primary intent | What secure boot decisions and evidence matter for a CRA-scoped connected product? |
| Likely query / AI prompt cluster | secure boot connected devices, secure boot CRA, firmware secure boot evidence, bootloader security CRA. |
| Page promise | Explains secure boot decisions, failure behavior, evidence, and related controls for connected products. |
| What good looks like | A product has a documented boot chain, protected trust anchor, signed firmware verification, rollback/recovery behaviour, debug-control evidence, and production configuration records. |
| Unique value | Links secure boot to CRA integrity, EN 304 623, hardware trust, update recovery, and evidence. |
| Current problem | Strong technical guide, but not yet shaped as a cold-entry page. |
| Required rewrite | Add use-when opening, what-good-looks-like section, evidence to retain, common gaps, and grouped next-step links. |
| Preserve | Chain-of-trust explanation, verified vs measured boot distinction, and implementation detail. |
| Next-step links | Key Provisioning, Unique Device Identity, OTA Updates, Cryptography under CRA, STM32, ESP32, EN 304 623, Evidence Pack. |
| Success signal | Reader can identify secure boot design decisions and evidence needed for the technical file. |

#### Do Not

- Remove engineering depth.
- Overstate secure boot as sufficient by itself.
- Treat draft EN 304 623 as presumption of conformity.

### OTA Updates And Patching

| Field | Notes |
| --- | --- |
| Tier | Tier 1 |
| Strategic priority | P1 |
| Entry readiness | Medium rewrite |
| Primary audience | Firmware, cloud, DevOps, product-security, and compliance teams. |
| Primary intent | Can we safely deliver, authorise, verify, recover, and evidence updates over the support period? |
| Likely query / AI prompt cluster | secure firmware updates CRA, OTA update security connected devices, firmware update evidence, rollback protection firmware. |
| Page promise | Explains the update architecture and lifecycle evidence needed to remediate vulnerabilities safely. |
| What good looks like | Updates are signed, authorised, recoverable, rollback-aware, tested in production-like conditions, logged, communicated where needed, and tied to vulnerability remediation records. |
| Unique value | Connects technical update design with support period, vulnerability remediation, customer communication, and evidence. |
| Current problem | Strong technical core, but missing explicit update records, customer communication, vulnerability remediation, staged-rollout evidence, and evidence retention. |
| Required rewrite | Add entry opening, evidence section, common gaps, lifecycle links, and fix checklist typo `[_]`. |
| Preserve | Technical architecture, signing, rollback, A/B recovery, server security, and resilience sections. |
| Next-step links | Patch Cadence, Vulnerability Disclosure, Secure Boot, Evidence Pack, Secure Update tools, EN 304 623. |
| Success signal | Reader can explain and evidence update integrity, recovery, rollout, and remediation. |

#### Do Not

- Duplicate the full Patch Cadence page.
- Reduce the page to a vendor/tooling discussion.

### Vulnerability Disclosure

| Field | Notes |
| --- | --- |
| Tier | Tier 1 |
| Strategic priority | P1 |
| Entry readiness | Medium rewrite |
| Primary audience | Product security, compliance, legal/governance, support, and incident-response teams. |
| Primary intent | How do we receive, triage, fix, report, evidence, and communicate vulnerabilities? |
| Likely query / AI prompt cluster | vulnerability disclosure policy CRA, coordinated vulnerability disclosure connected products, security.txt CRA, CRA vulnerability handling process. |
| Page promise | Explains public CVD, internal triage, CRA reporting, evidence, and communication responsibilities. |
| What good looks like | Reports have a clear public intake route, triage owner, vulnerability log, severity and remediation workflow, reporting path, customer communication plan, and retained evidence. |
| Unique value | Connects public disclosure, ENISA reporting, product remediation, customer communication, and retained evidence. |
| Current problem | Missing explicit vulnerability-log guidance, customer notification guidance, evidence-to-retain guidance, and Policy Starter Kit route. |
| Required rewrite | Add P1 structure and grouped related pages. |
| Preserve | ENISA reporting timeline and triage workflow. |
| Next-step links | Policy Starter Kit, Evidence Pack, Patch Cadence, Security Logging, CRA Gap Analysis, Vulnerability tools. |
| Success signal | Team can operate and evidence a vulnerability-handling workflow. |

#### Do Not

- Remove proportionate guidance for small companies.
- Hide the CRA reporting timing.

### Key Provisioning And Storage

| Field | Notes |
| --- | --- |
| Tier | Tier 1 |
| Strategic priority | P1 |
| Entry readiness | Medium rewrite |
| Primary audience | Manufacturing, firmware, security architecture, and product-security teams. |
| Primary intent | How should keys be created, provisioned, protected, rotated, and evidenced? |
| Likely query / AI prompt cluster | key provisioning connected devices, secure key storage embedded devices, device certificates manufacturing provisioning, key management CRA. |
| Page promise | Explains the provisioning ceremony and evidence needed to avoid shared secrets and weak key handling. |
| What good looks like | Keys are generated, injected or derived, protected, rotated, revoked, and evidenced through a controlled manufacturing and lifecycle process without shared default secrets. |
| Unique value | Connects manufacturing flow, hardware root of trust, device identity, secure boot, updates, and evidence. |
| Current problem | Useful content, but cold-entry structure and trust-anchor journey are not explicit enough. |
| Required rewrite | Add use-when, what-good-looks-like, evidence to retain, common gaps, and grouped next links. |
| Preserve | Manufacturing workflow, provisioning details, and trust-anchor comparisons. |
| Next-step links | Unique Device Identity, Secure Boot, Cryptography under CRA, OTA Updates, STM32, ESP32, Evidence Pack. |
| Success signal | Team can define and evidence a provisioning process for product/release scope. |

#### Do Not

- Collapse this page into Unique Device Identity.
- Remove manufacturing ceremony detail.

### Unique Device Identity

| Field | Notes |
| --- | --- |
| Tier | Tier 1 |
| Strategic priority | P1 |
| Entry readiness | Medium rewrite |
| Primary audience | Firmware, cloud, manufacturing, product-security, and compliance teams. |
| Primary intent | How does a device prove what it is across onboarding, authentication, updates, support, and evidence? |
| Likely query / AI prompt cluster | unique device identity IoT security, device identity CRA, hardware identity connected devices, device certificates secure by design. |
| Page promise | Explains product identity design and the evidence needed to prove devices are unique, authentic, and supportable. |
| What good looks like | Each device has a unique identity model, protected root or credential material, onboarding and authentication flow, lifecycle state handling, and evidence tying identity to product scope. |
| Unique value | Connects root identity, operational identity, provisioning, onboarding, updates, and support. |
| Current problem | Useful implementation guide, but needs entry framing and stronger cross-routing. |
| Required rewrite | Add P1 structure, evidence section, common gaps, and grouped next links. |
| Preserve | Root vs operational identity distinction and lifecycle detail. |
| Next-step links | Key Provisioning, Secure Boot, Cryptography under CRA, OTA Updates, hardware pages, Evidence Pack. |
| Success signal | Team can describe identity model, provisioning evidence, and lifecycle use. |

#### Do Not

- Treat identity as only a certificate topic.
- Remove distinction between identity design and provisioning process.

### Cryptography Under The CRA

| Field | Notes |
| --- | --- |
| Tier | Tier 2, specialist P1-ready |
| Strategic priority | P2 |
| Entry readiness | Ready |
| Primary audience | Security architects, crypto owners, product-security leads, compliance specialists. |
| Primary intent | What cryptography decisions and evidence matter under the CRA? |
| Likely query / AI prompt cluster | CRA cryptography, state of the art cryptography CRA, crypto agility CRA, post quantum CRA connected products. |
| Page promise | Helps teams inventory, assess, justify, and retain evidence for cryptography decisions. |
| What good looks like | Cryptography use is inventoried, assessed against current benchmarks, justified in decision records, reviewable over time, and supported by agility and migration planning. |
| Unique value | Practical decision records, ACM caveats, crypto agility, PQC readiness, and evidence guidance. |
| Current problem | Mostly routing. |
| Required rewrite | Light alignment only; increase inbound links from technical pages. |
| Preserve | Careful source-backed caveats around "state of the art", ACM, crypto agility, and PQC. |
| Next-step links | Key Provisioning, Secure Boot, OTA Updates, Evidence Pack, hardware pages, CRA Gap Analysis. |
| Success signal | Reader can create a cryptographic decision record and evidence list. |

#### Do Not

- Turn this into a generic cryptography explainer.
- Present ACM or PQC guidance as a substitute for legal, certification, or conformity-assessment advice.
- Duplicate key provisioning or secure boot implementation details.

### Types Of Embedded Device

| Field | Notes |
| --- | --- |
| Tier | Tier 2, possible Tier 1 architecture entry |
| Strategic priority | P2 |
| Entry readiness | Ready |
| Primary audience | Product architects, firmware engineers, product-security leads, compliance readers. |
| Primary intent | What architecture are we dealing with, and how does it affect controls and evidence? |
| Likely query / AI prompt cluster | embedded device security, MCU vs MPU security, embedded Linux security controls, IoT device security architecture. |
| Page promise | Classifies device architecture and links it to secure-by-design controls, CRA readiness, and evidence. |
| What good looks like | Product architecture is classified clearly enough to choose proportionate controls, record constraints, and route to the right implementation and evidence pages. |
| Unique value | Proportionate control guidance based on actual architecture constraints. |
| Current problem | Mostly prominence and inbound routing. |
| Required rewrite | Light alignment only. |
| Preserve | Architecture classification and control comparison detail. |
| Next-step links | Threat Modeling, Secure Boot, OTA Updates, Security Logging, STM32, ESP32, Evidence Pack. |
| Success signal | Team can classify architecture and choose proportionate controls. |

#### Do Not

- Flatten the architecture differences into generic IoT security advice.
- Remove caveats about constrained devices, embedded Linux responsibilities, hybrid systems, or cloud/companion-app scope.
- Duplicate implementation guides; route to them.

### STM32 Hardware Page

| Field | Notes |
| --- | --- |
| Tier | Tier 2 |
| Strategic priority | P2 |
| Entry readiness | Ready |
| Primary audience | Embedded engineers, hardware selectors, product-security leads, compliance readers. |
| Primary intent | Can STM32 hardware support the security case for a CRA-scoped connected product? |
| Likely query / AI prompt cluster | STM32 CRA, STM32 secure boot CRA, STM32Trust CRA, STM32 hardware security. |
| Page promise | Helps teams assess which STM32 capabilities can support secure-by-design controls, what evidence to retain, and what remains the manufacturer's responsibility. |
| What good looks like | The selected STM32 part, security features, configuration, lifecycle support, and retained evidence are documented for the product scope. |
| Unique value | Specific, evidence-led, caveated STM32 guidance. |
| Current problem | Mostly routing and consistency; opening should be as explicit as ESP32. |
| Required rewrite | Light alignment only; make the opening more explicitly entry-oriented and improve routing. |
| Preserve | Caveats that hardware supports the security case but the manufacturer owns CRA readiness. |
| Next-step links | Types of Embedded Device, Secure Boot, Key Provisioning, OTA Updates, Cryptography under CRA, Evidence Pack. |
| Success signal | Reader can decide whether an STM32 part supports the intended controls and what evidence/configuration checks to retain. |

#### Do Not

- Overclaim CRA compliance from hardware features.
- Generalise across STM32 variants without qualification.
- Remove part, configuration, lifecycle support, and manufacturer-responsibility caveats.

### ESP32 Hardware Page

| Field | Notes |
| --- | --- |
| Tier | Tier 2 |
| Strategic priority | P2 |
| Entry readiness | Ready |
| Primary audience | Embedded engineers, hardware selectors, product-security leads, compliance readers. |
| Primary intent | Can ESP32 hardware support the security case for a CRA-scoped connected product? |
| Likely query / AI prompt cluster | ESP32 CRA, ESP32 secure boot flash encryption, ESP32 hardware security, ESP32 secure element. |
| Page promise | Helps teams assess which ESP32 capabilities can support secure-by-design controls, what evidence to retain, and what remains the manufacturer's responsibility. |
| What good looks like | The selected ESP32 family, security features, eFuse/configuration state, lifecycle support, and retained evidence are documented for the product scope. |
| Unique value | Specific, evidence-led, caveated ESP32 guidance. |
| Current problem | Mostly routing; the current opening is already more explicit than STM32. |
| Required rewrite | Light alignment only; maintain caveats and improve routing. |
| Preserve | Caveats that hardware supports the security case but the manufacturer owns CRA readiness. |
| Next-step links | Types of Embedded Device, Secure Boot, Key Provisioning, OTA Updates, Cryptography under CRA, Evidence Pack. |
| Success signal | Reader can decide whether an ESP32 part supports the intended controls and what evidence/configuration checks to retain. |

#### Do Not

- Overclaim CRA compliance from hardware features.
- Generalise across ESP32 variants without qualification.
- Remove eFuse, secure boot, flash encryption, lifecycle support, or manufacturer-responsibility caveats.

### Real-World Vulnerabilities Hub

| Field | Notes |
| --- | --- |
| Tier | Future Tier 2/P3 hub |
| Strategic priority | P3 |
| Entry readiness | Light alignment |
| Primary audience | Product-security leads, engineers, compliance readers, internal advocates. |
| Primary intent | Which real failures map to which secure-by-design controls and evidence? |
| Likely query / AI prompt cluster | secure by design vulnerability examples, medical device cybersecurity case studies, IoT security failure examples. |
| Page promise | Routes real vulnerabilities by failure pattern into secure-by-design controls, evidence, and product-team checks. |
| What good looks like | Cases are grouped by reusable failure pattern, with concise links to the control and evidence pages that would prevent, detect, or explain the issue. |
| Unique value | A curated bridge from real failures to practical handbook guidance. |
| Current problem | Individual pages are strong, but there is no curated hub by failure pattern. |
| Required rewrite | Plan a hub by failure pattern; align related links. |
| Preserve | Individual case-study depth and source-backed narratives. |
| Next-step links | Control pages by pattern: keying, OTA, disclosure, logging, configuration, threat modeling, evidence. |
| Success signal | Reader moves from a real failure to the control and evidence page that would prevent or detect it. |

#### Do Not

- Duplicate full case-study content on the hub.
- Turn the hub into generic vulnerability news.
- Remove source-backed caveats or product-team checks from individual cases.

### Individual Case-Study Alignment

| Field | Notes |
| --- | --- |
| Tier | Tier 3 |
| Strategic priority | P3 |
| Entry readiness | Ready, with light link alignment |
| Primary audience | Product-security leads, engineers, compliance readers, internal advocates. |
| Primary intent | What did this real vulnerability reveal, and what should a product team check? |
| Likely query / AI prompt cluster | Baxter Connex shared key, Contec patient monitor backdoor, GE Vivid vulnerabilities, medical device cybersecurity case study. |
| Page promise | Turns one real vulnerability into failure pattern, secure-by-design lesson, evidence to retain, and product-team checks. |
| What good looks like | Each case links to the most relevant control, evidence, readiness, and policy pages without overloading the reader. |
| Unique value | Source-backed, concrete examples that make handbook controls memorable and citable. |
| Current problem | Related links may not always match the best current control mapping. |
| Required rewrite | Light related-link alignment only unless facts or sources change. |
| Preserve | Case-specific narrative, source citations, failure pattern, evidence table, and product-team checks. |
| Next-step links | Case-specific control pages: keying, OTA, disclosure, logging, configuration, threat modeling, evidence. |
| Success signal | Reader understands the failure and follows the relevant control/evidence path. |

#### Do Not

- Turn worked cases into generic guides.
- Remove source citations or factual caveats.
- Add speculative root causes not supported by the cited sources.

## 9. Cross-Page Routing Rules

Assign separate jobs before editing overlapping pages.

| Topic | This site owns | Route readers to |
| --- | --- | --- |
| CRA first read | Quick connected-product CRA orientation. | CRA Primer, then CRA Gap Analysis or CRA Overview. |
| CRA detailed reference | Clause-level regulatory context and stable preserved URL. | CRA Overview, with up-links to Primer and Gap Analysis. |
| CRA action workflow | Product readiness, evidence map, gap register, owners, and next actions. | CRA Readiness Gap Analysis. |
| Evidence Pack | Product technical documentation and secure-by-design evidence. | Secure-by-Design Evidence Pack. Use this display name even though the slug remains `audit-evidence-pack`. |
| Secure boot | Boot-chain integrity decisions, evidence, and related standards. | Secure Boot, EN 304 623, Key Provisioning, OTA, Evidence Pack. |
| OTA updates | Update architecture, recovery, rollout, remediation, and evidence. | OTA Updates, Patch Cadence, Vulnerability Disclosure, Evidence Pack. |
| Vulnerability handling | CVD, triage, CRA reporting, customer communication, and records. | Vulnerability Disclosure, Policy Starter Kit, Patch Cadence, Security Logging. |
| Device identity and keys | Identity model and provisioning process as separate but linked pages. | Unique Device Identity and Key Provisioning. |
| Cryptography | State-of-the-art assessment, decision records, crypto agility, PQC readiness. | Cryptography under the CRA; do not duplicate the page in secure boot or OTA. |
| Embedded architecture | Proportionate controls based on MCU, MPU/Linux, hybrid, and cloud/app architecture. | Types of Embedded Device, then implementation guides. |
| Hardware selection | What specific platforms can support, with caveats and evidence. | STM32 and ESP32 pages, then Secure Boot, Key Provisioning, OTA, Evidence Pack. |
| Real-world failures | Concrete examples and lessons, not generic vulnerability news. | Case studies and future vulnerability hub by failure pattern. |

## 10. Sitemap And Indexing Rules

- Keep real content pages in the sitemap.
- Exclude generated utility pages unless they are curated and useful.
- Exclude generated tag pages, archive pages, author pages, paginated listing pages, and starter-template pages unless they have a clear purpose.
- Keep stable canonical URLs, including `/docs/standards/eu/cra-overview`.
- Keep `trailingSlash: false` to avoid canonical URL churn.
- Do not rely on sitemap `priority` or `changefreq` as editorial priority.

Current cleanup decisions:

- Default Docusaurus starter pages have been removed from the site and sitemap.
- Generated blog tag pages are excluded.
- Generated docs tag pages are excluded.
- Blog archive and author utility pages are excluded.
- CRA overview and CRA harmonised-standard pages remain included.

## 11. Execution Plan

### Phase 1: Routing And Naming Cleanup

Owner group: Editorial + developer/site config.

- Update homepage routes into obligations, readiness, implementation, and evidence.
- Standardise inbound links to "Secure-by-Design Evidence Pack".
- Confirm sitemap cleanup for generated utility pages.
- Add CRA Primer to the practical journey from homepage and What is Secure-by-Design.
- Add direct CRA Primer to CRA Readiness Gap Analysis routing.

Status: Done. Homepage routing, Evidence Pack naming, sitemap cleanup, CRA Primer routing, and the What is Secure-by-Design route into CRA Primer are complete.

### Phase 2: P1 Conceptual And Engineering Rewrites

Owner group: Editorial + technical reviewer + standards reviewer.

- Rewrite What is Secure-by-Design.
- Apply the P1 structure to Secure Boot.
- Apply the P1 structure to OTA Updates and fix the `[_]` checklist typo.
- Apply the P1 structure to Vulnerability Disclosure.
- Apply the P1 structure to Key Provisioning.
- Apply the P1 structure to Unique Device Identity.

Status: Done. What is Secure-by-Design, Secure Boot, OTA Updates, Vulnerability Disclosure, Key Provisioning, and Unique Device Identity have been rewritten into the P1 entry-page structure.

### Phase 3: P2 Alignment

Owner group: Editorial + relevant technical, product-security, standards, and hardware/embedded reviewers.

- Lightly align Types of Embedded Device and Cryptography under the CRA through stronger inbound routing.
- Align EN 304 623 routing from Secure Boot, OTA, and hardware pages.
- Maintain and route into Maturity Model, Policy Starter Kit, STM32, and ESP32.
- Add or plan a Real-World Vulnerabilities hub if the case-study section becomes a meaningful entry path.
- Review SBOM & VEX, Threat Modeling, Patch Cadence, First Sprint Checklist, How to Use Handbook, and Resources hub against the P2 entry role.

Status: Done. P2 routing alignment is complete for Cryptography under the CRA, Types of Embedded Device, EN 304 623, STM32, ESP32, First Sprint Checklist, How to Use Handbook, SBOM & VEX, Threat Modeling, Patch Cadence, CRA Readiness Gap Analysis, Maturity Model, Policy Starter Kit, threat-model examples, and the real-world vulnerabilities hub.

### Phase 4: SEO And AI Performance Review

Owner group: Editorial + SEO/site analytics.

- Review Search Console data for entry pages.
- Review inbound links, GitHub referrals, and internal navigation paths.
- Watch for AI citations and answer-engine references where possible.
- Check whether P1 pages lead to the intended output: decision, checklist, evidence, template, implementation path, or next-step route.
- Create new pages only after the existing entry architecture is working.

Status: Local QA pass complete. Homepage routes align with the four-path entry strategy; sitemap contains the priority entry pages and new real-world vulnerabilities hub; generated tag/archive/starter utility pages are excluded; implementation landing pages now route readers by task into build, operate, evidence, and support-period workflows. Live Search Console, analytics, inbound referral, and AI citation review remain dependent on deployed-site data.

## 12. Review Checklist

Use this checklist before marking a P1 page complete.

| Review metadata | Value |
| --- | --- |
| Page reviewed |  |
| Reviewer |  |
| Review date |  |
| Decision | Not started / Needs revision / Ready for review / Done |
| Follow-up owner |  |

| Test | Pass / Partial / Fail / N/A | Notes |
| --- | --- | --- |
| H1 matches the reader problem |  |  |
| First 150 to 250 words answer the intent |  |  |
| Page says who it is for |  |  |
| Page gives a practical tool, model, checklist, table, or example |  |  |
| Page explains the decision, evidence, or action output |  |  |
| Page includes "Use this page when..." or equivalent entry cue |  |  |
| Page explains what good looks like |  |  |
| Page identifies evidence to retain |  |  |
| Page lists common gaps or mistakes |  |  |
| Related pages route to next actions |  |  |
| Claims are sourced and caveated |  |  |
| Page avoids duplication or cannibalisation |  |  |
| Preserve field was followed during rewrite |  |  |
| Existing handbook readers still get the depth they need |  |  |

## 13. Source References

- [Secure-by-Design Handbook](https://www.securebydesignhandbook.com/)
- [Google Search: Optimizing your website for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google Search: Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Measuring Google AI Overviews](https://arxiv.org/abs/2605.14021)
