---
title: "European Commission Publishes First Official CRA FAQ"
authors: [sbd_community]
tags: [cra, compliance, eu, secure-by-design, vulnerability-handling]
description: "The European Commission has released official guidance on the Cyber Resilience Act. Here's what product teams need to know."
---

On 3 December 2025, the European Commission published its first **Frequently Asked Questions** document on the Cyber Resilience Act (CRA). This is the first official implementation guidance since the regulation was published in November 2024, and it provides important clarifications on how manufacturers should approach compliance.

The FAQ is a substantial document covering scope, product classification, manufacturer obligations, vulnerability reporting, conformity assessment, and timelines. For product teams preparing for the December 2027 deadline, Chapters 4 (Manufacturer Obligations) and 5 (Reporting) contain the most actionable guidance.

<!-- truncate -->

This post highlights five clarifications from the FAQ that are most relevant to engineering and product teams, along with what's still missing.

:::info Official Document
**[FAQs on the Cyber Resilience Act](https://ec.europa.eu/newsroom/dae/redirection/document/122331)** — European Commission, Version 1.0, 3 December 2025
:::

---

## Who Should Read This

| Role | Key Sections |
|------|--------------|
| **Product Manager** | Risk assessment scope, support period rules |
| **Firmware / Embedded Engineer** | Exploitability standard, secure-by-default clarification |
| **DevOps / Security Engineer** | Vulnerability handling, no active scanning requirement |
| **Supply Chain / Procurement** | Component integration, due diligence obligations |

---

## 1. Risk Assessment Must Be Context-Specific — and Forward-Looking

The FAQ confirms that CRA risk assessments are comprehensive and demanding. There is no single framework you can adopt and be done. Instead, manufacturers must tailor their assessments to the **specific context** in which their product will be used.

A sensor module destined for industrial control systems operated by trained personnel has a different risk profile than the same module sold as a consumer product. The FAQ expects you to account for these differences.

**What this means for your threat model:**

- Consider both **intended use** and **reasonably foreseeable misuse** (the FAQ even cites ethical hacking by users as an example).
- If your product is a component that others will integrate, you must consider downstream integration scenarios.
- The FAQ suggests you should make **reasonable projections** about how the threat landscape might evolve over your product's support period.

This is a significant analytical burden, especially for component manufacturers whose modules might end up in many different products. But it also aligns with good security practice: threat modeling should be contextual, not generic.

➡️ **Handbook resource:** [Threat Modeling Guide](/docs/implementation/build-phase/threat-modeling)

---

## 2. "No Known Exploitable Vulnerabilities" Has a Practical Definition

One of the CRA's headline requirements is that products must be placed on the market **without known exploitable vulnerabilities**. The FAQ provides welcome clarity on what "exploitable" actually means.

**What counts as exploitable:**
- Vulnerabilities that can be exploited in the product's **actual operational environment**.

**What does NOT count:**
- Vulnerabilities that exist only in theoretical conditions (lab settings, simulations).
- Vulnerabilities that would not occur in the product's real-world deployment context.

The FAQ also clarifies that if a vulnerability is discovered **after** you place a product on the market but **before** the end user puts it into operation (e.g., while it sits on a store shelf), you are not required to issue a fix before sale. Your vulnerability handling obligations begin when the product enters its support period.

**Caveat:** Given the broad interpretation of "reasonably foreseeable use and misuse" (see above), your product's operational environment may be wider than you initially assume.

➡️ **Handbook resource:** [CRA Overview — Essential Requirements](/docs/standards/eu/cra-overview#annex-i-requirements)

---

## 3. Component Integration Creates New Responsibilities

If you integrate third-party components into your product, the FAQ places the compliance burden squarely on **you** as the integrating manufacturer.

**Key clarifications:**

| Scenario | Who is responsible? |
|----------|---------------------|
| Component placed on EU market separately | Component manufacturer must meet CRA requirements (including secure-by-default) |
| Component integrated into your product before being placed on EU market | You (the integrator) are responsible for the final product's compliance |
| Component's support period ends before your product's support period | You must handle vulnerabilities in that component yourself |
| Component was placed on market before CRA applied | You must address its vulnerabilities; the original manufacturer has no CRA obligation |

The **"secure by default"** requirement only applies to components placed on the market as standalone products. If you integrate a component internally before placing your final product on the market, that component does not need to independently meet the secure-by-default requirement — but your final product does.

**What this means in practice:**
- Conduct thorough **due diligence** when selecting components.
- Understand the support period and end-of-life plans for every component in your bill of materials.
- Be prepared to take over vulnerability management for components whose original manufacturers are no longer supporting them.

➡️ **Handbook resource:** [SBOM & VEX Workflows](/docs/implementation/build-phase/sbom-vex)

---

## 4. Not Every Vulnerability Requires a Patch

The FAQ takes a pragmatic, **risk-based approach** to vulnerability remediation. This is good news for teams worried about being forced to patch every CVE regardless of context.

**Key points:**

- Manufacturers are **not required to provide a patch for every discovered vulnerability**.
- If a vulnerability has very low exploitability in practice, documenting it and providing user guidance may be sufficient remediation.
- Product recalls due to unfixable vulnerabilities should be **exceptional**, reserved for cases with very significant risk of compromise.

Every vulnerability must be *remediated* somehow, but remediation does not always mean a software update. The appropriate response depends on the actual risk.

**What this means for your patch cadence:**
- Prioritize based on exploitability and impact, not just CVSS score.
- Document your risk-based rationale for remediation decisions.
- For low-risk issues, clear user documentation may be an acceptable response.

➡️ **Handbook resource:** [Patch Cadence Guide](/docs/implementation/operate-phase/patch-cadence)

---

## 5. No Obligation to Actively Scan for Vulnerabilities

One area where the FAQ provides clear relief: **manufacturers have no duty to carry out continuous monitoring or actively scan for vulnerabilities**.

You must handle vulnerabilities responsibly when you become aware of them, but there is no legal requirement to maintain constant surveillance or subscribe to every threat intelligence feed.

That said, once you *do* become aware of an actively exploited vulnerability, reporting obligations kick in quickly. From 11 September 2026, you must notify ENISA **without undue delay** (interpreted as within 24 hours for actively exploited vulnerabilities).

**Practical takeaway:** You don't need to build a SOC, but you do need a clear process for triaging and escalating vulnerability reports when they come in.

➡️ **Handbook resource:** [Vulnerability Disclosure Guide](/docs/implementation/operate-phase/vulnerability-disclosure)

---

## What's Still Missing

The FAQ does not cover everything. Notably absent:

| Topic | Status |
|-------|--------|
| **Free and open-source software** | Expected in future Article 26 guidance |
| **Remote data processing / cloud backends** | Expected in future Article 26 guidance |
| **Substantial modification** (when does an update trigger re-assessment?) | Expected in future guidance |
| **Interplay with Machinery Regulation** | Partially addressed, but gaps remain |

The Commission is required to publish additional guidance under Article 26 of the CRA. We expect this to arrive in 2026.

---

## We've Updated the Handbook

We have reviewed the full FAQ and added citations throughout our CRA documentation. The following pages now reference the relevant FAQ sections:

- **[CRA Overview](/docs/standards/eu/cra-overview)** — Comprehensive citations across risk assessment, essential requirements, and conformity assessment
- **[CRA Gap Analysis Checklist](/docs/resources/checklists-and-worksheets/cra-gap-analysis)** — Citations added to each checklist question
- **[Cryptography under CRA](/docs/resources/cryptography/cryptography-under-cra)** — Updated with FAQ context

---

## What to Do Next

1. **Read the FAQ.** It's long, but Chapters 4 and 5 are essential reading for anyone involved in product development.
2. **Review your threat model.** Does it account for foreseeable misuse and downstream integration scenarios?
3. **Audit your component supply chain.** Understand the support periods and vulnerability handling capabilities of your key suppliers.
4. **Check your vulnerability handling process.** Make sure you have a clear path from "vulnerability reported" to "remediation decision" — the September 2026 reporting deadline is approaching.

For a complete breakdown of CRA requirements, see our **[CRA Overview](/docs/standards/eu/cra-overview)**.
