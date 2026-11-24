# Section A – Quick Start (review 2026-11, run date 24 November 2026)

## Sources

| URL | Citing pages | Status | Note |
| --- | --- | --- | --- |
| https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I | docs/quick-start/cra-primer.md | Confirmed | EUR-Lex returned 202 empty; checked via the Publications Office copy of CELEX 02024R2847-20241120, still the latest consolidation. Checked against the primer: Art. 71(2) dates (11 June 2026 / 11 September 2026 / 11 December 2027), Art. 14 (actively exploited vulnerabilities and severe incidents, notified simultaneously to the coordinator CSIRT and ENISA through the single reporting platform, early warning within 24 hours), Art. 64(2) fines (EUR 15 000 000 or 2.5%, whichever is higher), Art. 13(8) five-year minimum support period, Art. 32(2)–(4), Annex III Class I/II and Annex IV lists. The Annex III/IV checks led to two page fixes (see Page changes and Decisions). Note: the `[cra_annexI]` reference definition in the primer is not used anywhere in the page text. |
| https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202502392 | docs/quick-start/cra-primer.md | Confirmed | EUR-Lex returned 202 empty; checked via the Publications Office copy (CELEX 32025R2392). It is Commission Implementing Regulation (EU) 2025/2392 of 28 November 2025 (OJ 1 December 2025), on the technical description of the categories of *important and critical* products. It does not describe all categories, as the page said; page fixed. It also confirms smart speakers with an integrated virtual assistant are Class I (Annex III.I.16) and that HSMs fall under "Hardware Devices with Security Boxes" (Annex IV.1). |
| https://github.com/enisaeu/enisa-sbd-playbook/ | docs/quick-start/cisa-sbd-principles.md | Confirmed | Fetched (200). ENISA's official repo still exists, with the 22 Secure by Design / Secure by Default playbooks (checklist, minimum evidence, release gate), CC-BY-4.0. |
| https://www.cisa.gov/sites/default/files/2023-10/SecureByDesign_1025_508c.pdf | docs/quick-start/cisa-sbd-principles.md | Could not verify | Blocked: 403 Access Denied (Akamai). One issuer alternative route tried, https://www.cisa.gov/resources-tools/resources/secure-by-design, also 403; no more cisa.gov requests made. The wording (three principles, "more secure products, not more security products", seatbelts, "roadmap for attackers") matches `source-material/CISA-principles-and-approaches-for-secure-by-design-software.md`, but that copy cannot confirm the source is current. **Flag for hand-check:** the page cites the October 2023 edition, but the handbook's own post `blog/2026-05-12-cisa-secure-by-design-update.md` reports an updated, further co-sealed edition highlighted by CISA on 12 May 2026. Check whether the PDF URL and the page's description should point to that newer edition. |
| https://www.enisa.europa.eu/publications/enisa-secure-by-design-and-default-playbook | docs/quick-start/cisa-sbd-principles.md, docs/quick-start/first-sprint-checklist.md, docs/quick-start/how-to-use-handbook.md, docs/quick-start/what-is-secure-by-design.md | Confirmed | Fetched (200). The title is "ENISA Secure by Design and Default Playbook: A Practical Guide to Secure by Design and Default Principles for SMEs", published 30 July 2026, and it links the GitHub repo of 22 playbooks. The SME-oriented checklists, minimum evidence, and release gates are confirmed from the repo. The "indicative mapping to CRA Annex I" claim (what-is-secure-by-design, cisa-sbd-principles) is confirmed only from the wording of `source-material/enisa-secure-by-design-and-default-playbook-v1-20260730.md` (Annex C), not from the landing page. |

Counts: Confirmed 4, Updated 0, Replaced 0, Could not verify 1.

## Page changes

- **docs/quick-start/cra-primer.md, §3 intro**: The page said Implementing Regulation (EU) 2025/2392 "provides the official technical descriptions for all product categories". It now says "...of the important and critical product categories". Evidence: the title of the Regulation and Article 1 (Publications Office copy, CELEX 32025R2392). It only describes the Annex III and IV categories.
- **docs/quick-start/cra-primer.md, §3 Default bullet**: The page gave "smart speakers, toys" as Default examples. Smart speakers with an integrated virtual assistant are Class I (CRA Annex III.I.16, and the 2025/2392 description names them). Internet-connected toys with social-interaction or location-tracking features are also Class I (Annex III.I.18). The bullet now reads "smart speakers without a virtual assistant, connected toys without social-interaction or location-tracking features, or general software". This matches the CRA overview's classification table ("Smart speaker (no virtual assistant)" is Default).
- **docs/quick-start/cra-primer.md, §3 Class II bullet**: The page listed "industrial control systems" as Class II. They are not on the CRA Annex III Class II list, which has only hypervisors/container runtimes, firewalls/IDS/IPS, and tamper-resistant microprocessors and microcontrollers (consolidated text 02024R2847-20241120). The bullet now says "firewalls, hypervisors, and tamper-resistant microprocessors and microcontrollers".
- **docs/quick-start/cra-primer.md, §4 timeline intro**: "The clock is ticking. Here are the key deadlines:" presented 11 September 2026 as still to come. It now reads "Reporting obligations already apply; full application follows in December 2027:". Evidence: CRA Art. 71(2).
- **docs/quick-start/cra-primer.md, §4 11 Sep 2026 row**: The row said only that you "must have a process to notify ENISA of actively exploited vulnerabilities without undue delay". That was future-tense and incomplete: it left out severe incidents, the coordinator CSIRT, and the single reporting platform. It now reads: "Vulnerability Reporting is Mandatory (in force). You must notify actively exploited vulnerabilities and severe incidents to the CSIRT designated as coordinator and to ENISA through ENISA's Single Reporting Platform, live since 11 September 2026, with an early warning within 24 hours." Evidence: CRA Art. 14(1)–(3), (7) and Art. 16 (Publications Office copy); brief fact that the SRP has been live since 11 September 2026; matches `blog/2026-09-11-cra-reporting-goes-live.md`. The 11 December 2027 row is unchanged and correct (Art. 71(2)).

## Pages reviewed

- docs/index.md: changed by the coordinator (the duplicate "Resources" heading is now Tools); I made no edit
- docs/quick-start/what-is-secure-by-design.md: changed (Decision 5)
- docs/quick-start/how-to-use-handbook.md: no change
- docs/quick-start/cisa-sbd-principles.md: no change (the CISA source could not be verified; Decision 4 is held back)
- docs/quick-start/cra-primer.md: changed (5 correctness edits above, plus Decisions 2, 3 and 7)
- docs/quick-start/first-sprint-checklist.md: changed (Decision 1). I checked it specifically for dates, timeline, and harmonised-standards status. The page states none, so nothing there conflicts with the brief's facts. Its "vulnerability reporting route" is the CVD intake channel (`security.txt`, policy draft), not CRA Art. 14 reporting. Adding Art. 14 readiness is a coverage change, so it is recorded as Decision 1.

Q3 keyword sweep (recently, new, upcoming, currently, expected, draft, pending, not yet, this/next year, 2025–2027, months, soon, ticking) across all six files. The only time-dependent hit was the primer's "The clock is ticking" deadline framing, now fixed. The other hits ("Expected output", "Draft a public CVD policy", "new legislation", "New to secure-by-design?") are still correct.

6/6 pages reviewed.

## Cross-section issues

- **docs/standards/eu/cra/index.md, line ~307 ("Harmonised Standards Timeline" tip)**: Still says the first harmonised standards are "expected to be published in the Official Journal around Q2 2027". It also gives ESO targets of August 2026 (horizontal) and October 2026 (vertical) as future, and both are now past. EN 40000-1-1 and EN 40000-1-2 were published by CEN-CENELEC on 18 November 2026 and are not yet cited in the OJ. The tip should say so, which would also agree with the page's own timeline row for 18 November 2026.
- **docs/standards/eu/cra/index.md, lines ~21 and ~23**: "While harmonised standards are still under development" and "Several CRA harmonised standards are now available as mature drafts" need updating now that EN 40000-1-1/1-2 are published (not yet OJ-cited).
- **Consistency check, done and agreeing**: The primer's 11 September 2026 and 11 December 2027 dates agree with the CRA overview timeline table. The primer's revised Default examples now match the overview's classification table (smart speaker with/without virtual assistant).

## Decisions

Under the maintainer's "decide and do" rule (periodic-review.md, question 5).

1. **First-sprint checklist: add CRA reporting readiness. Done.**
   - Sprint Output now includes "a CRA reporting route for actively exploited vulnerabilities and severe incidents, if the product is on the EU market".
   - Sprint 2 has a new row, "Confirm the CRA reporting route". Its output is Single Reporting Platform access, the CSIRT designated as coordinator for your main establishment, and an owner for the 24-hour, 72-hour, and final-report deadlines. It notes that reporting has applied since 11 September 2026, including to products already on the market. It routes to the CRA primer and the CRA overview.
   - The backlog template has a matching "CRA reporting route" row.
   - Reason: the checklist covered only CVD intake, but Art. 14 reporting is now in force.
   - Source: CRA Art. 14(2)(a)–(c) and (4)(a)–(c) (24 h / 72 h / 14 days / one month) and Art. 71(2), from the Publications Office copy of 02024R2847-20241120; `blog/2026-09-11-cra-reporting-goes-live.md`.
2. **CRA primer, Class I: add the harmonised-standards status. Done.**
   - The action now says self-assessment is possible if you fully apply harmonised standards, common specifications, or a European cybersecurity certification scheme at assurance level 'substantial' or higher.
   - It adds: "The first CRA standards, EN 40000-1-1 and EN 40000-1-2, were published by CEN-CENELEC in November 2026, but no CRA harmonised standard is yet cited in the Official Journal, so none yet gives a presumption of conformity."
   - I used "November 2026" with no day, matching the CRA overview (the coordinator's instruction; CEN-CENELEC's announcement gives no day).
   - Source: CRA Art. 27 and Art. 32(2); brief facts; the CRA overview §4.3.
3. **CRA primer, §4 timeline: add 11 June 2026. Done.**
   - New row: "**11 Jun 2026** | **Notified Bodies.** Rules for notifying the conformity assessment bodies that carry out third-party assessments apply (Chapter IV), so that they can be in place before full application."
   - The row covers notification of conformity assessment bodies only, not importer or distributor duties. This matches the CRA overview.
   - Source: CRA Art. 71(2).
4. **CISA principles page: re-point to the May 2026 edition. Held back.**
   - Rule: no unverified facts (an official source is unreachable). cisa.gov returned 403 for both the cited PDF and the one alternative route, so I cannot confirm the newer edition's URL, title, or changes from CISA itself.
   - Leave it for the maintainer hand-check. Source: `blog/2026-05-12-cisa-secure-by-design-update.md`.
5. **what-is-secure-by-design.md line 13: unverified CISA quotation. Done.**
   - I replaced the two quoted phrases. Neither appears in the CISA document copy, and the web page they may come from is unreachable.
   - The new quotations appear word for word in `source-material/CISA-principles-and-approaches-for-secure-by-design-software.md`: "the burden of security should not fall solely on the customer" and manufacturers "are encouraged to take ownership of improving the security outcomes of their customers".
   - The sentence now credits "CISA and its partner agencies", because the document is joint.
   - Per periodic-review.md, source-material can confirm wording; the PDF's currency is covered by Decision 4.
6. **docs/index.md: duplicate "Resources" heading. Done (coordinator).** The second entry is now Tools, and the Resources description is corrected. I made no edit.
7. **CRA primer: unused `[cra_annexI]` reference. Done.**
   - I used the reference rather than removing it: §2 now reads "two main sets of duties, set out in [CRA Annex I][cra_annexI]".
   - Annex I Part I covers product properties and Part II covers vulnerability handling, which matches the primer's two lists.
   - Source: Publications Office copy, Annex I.

Not changed, and recorded as decisions:
- I did not link the September or November blog posts from the primer, per the brief's rule against linking individual posts.
- I did not add "last checked" stamps anywhere (style-guide "Dates and freshness").
- The "~90% of products" figure in the primer is unchanged. It agrees with the CRA overview, and checking it is outside this section's sources.

Totals: 6 decisions Done (one of them by the coordinator), 0 Not changed (plus the three recorded non-changes above), 1 Held back.
