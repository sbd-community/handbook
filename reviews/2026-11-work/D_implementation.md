# Section D – Implementation (docs/implementation/, 16 pages)

Reviewed 24 November 2026. Paths below are relative to `docs/implementation/` unless they start with `docs/`.

## Sources

| URL | Citing pages | Status | Note |
|-----|--------------|--------|------|
| https://aka.ms/tmt | build-phase/threat-modeling.md | Replaced | The short link redirects to the Microsoft Learn "Microsoft Threat Modeling Tool overview" page; the product still exists under the Microsoft name. For consistency with the Tools page, threat-modeling.md now links that overview directly: https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool (the final URL of this morning's fetch). |
| https://codeql.github.com/ | operate-phase/cicd-hardening.md | Confirmed | GitHub CodeQL product page. |
| https://digital-strategy.ec.europa.eu/en/library/commission-publishes-new-guidance-support-timely-cyber-resilience-act-implementation | operate-phase/vulnerability-disclosure.md | Confirmed | Published 27 July 2026, C(2026) 6013, covers reporting obligations; says reporting applies from 11 September 2026. The page's "section 9.1" was not checked against the full communication (landing page only), but it matches blog/2026-07-27-commission-cra-guidance.md. ENISA's SRP FAQ (Q13) confirms there is no retrospective reporting of exploitation known before 11 September 2026 (it cites the EC FAQ subsections 5.1 and 5.3). |
| https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I | build-phase/data-privacy.md, key-provisioning.md, ota-updates.md, sbom-vex.md, secure-boot.md, secure-configuration.md, unique-device-identity.md, user-documentation.md; operate-phase/cicd-hardening.md, patch-cadence.md, security-logging.md, vulnerability-disclosure.md | Confirmed | Checked against the Publications Office copy (still the latest consolidation). The point references hold. Five pages quoted or paraphrased Annex I wrongly; these are fixed (see Page changes). user-documentation.md used this definition while its text linked an undefined `[cra_annexII]`, so the definition now points to `#anx_II`. |
| https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_13 | build-phase/sbom-vex.md, threat-modeling.md | Confirmed | Art. 13(2) risk assessment and Art. 13(22) information to market surveillance authorities on reasoned request both hold (Publications Office copy). |
| https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_14 | operate-phase/vulnerability-disclosure.md | Confirmed | Art. 14 notification via the single reporting platform; Art. 71(2) has Art. 14 apply from 11 September 2026, as the page says. The `[cra_art14]` definition is unused in the text (harmless). |
| https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32014L0053 | build-phase/data-privacy.md | Confirmed | Publications Office copy: Art. 3(3)(e) "personal data and privacy of the user and of the subscriber are protected" matches. This cites the base act, not a consolidation, so no update is needed. |
| https://github.com/ReFirmLabs/binwalk | build-phase/secure-configuration.md | Confirmed | Repository live under ReFirmLabs. |
| https://github.com/anchore/grype | build-phase/sbom-vex.md | Confirmed | Repository live under Anchore. |
| https://github.com/anchore/syft | build-phase/sbom-vex.md | Confirmed | Repository live under Anchore. |
| https://github.com/aquasecurity/trivy | operate-phase/cicd-hardening.md | Confirmed | Repository live under Aqua Security. |
| https://github.com/enisaeu/enisa-sbd-playbook/ | index.md | Confirmed | ENISA repository with SME playbooks and release gates. The "mapped indicatively to Annex I" wording matches Annex C of the playbook copy in `source-material/` (wording only). |
| https://github.com/enisaeu/enisa-sbd-playbook/blob/main/playbooks/01-trust-boundaries-and-threat-modelling.md | build-phase/threat-modeling.md | Confirmed | File exists with the cited title. |
| …/playbooks/10-logging-monitoring-and-alerting.md | operate-phase/security-logging.md | Confirmed | File exists with the cited title. |
| …/playbooks/13-vulnerability-and-patch-management.md | operate-phase/patch-cadence.md, vulnerability-disclosure.md | Confirmed | File exists with the cited title. |
| …/playbooks/14-supply-chain-controls.md | build-phase/sbom-vex.md | Confirmed | File exists with the cited title. |
| …/playbooks/15-minimisation-of-default-services.md | build-phase/secure-configuration.md | Confirmed | File exists with the cited title. |
| …/playbooks/16-restrictive-initial-access.md | build-phase/secure-configuration.md | Confirmed | File exists with the cited title. |
| …/playbooks/18-unique-device-identity-and-secrets-by-default.md | build-phase/key-provisioning.md, unique-device-identity.md | Confirmed | File exists with the cited title. |
| …/playbooks/20-automated-maintenance-and-updates.md | build-phase/ota-updates.md | Confirmed | File exists with the cited title. |
| https://mender.io/ | build-phase/ota-updates.md | Confirmed | Mender OTA product page live. |
| https://nmap.org/ | build-phase/secure-configuration.md | Confirmed | Nmap official site. |
| https://quarklink.io/product/ | build-phase/key-provisioning.md, ota-updates.md, secure-boot.md, unique-device-identity.md | Confirmed | QuarkLink product page, now titled "Device-Trust Control Plane for Connected Products". The pages' generic description (provisioning, identity, lifecycle, OTA) still fits. |
| https://thistle.tech/ | build-phase/secure-boot.md | Could not verify | DNS failure ("Could not resolve host"). A web search (secondary only) shows Thistle Technologies still active, with a March 2026 Embedded World interview, so the page is left unchanged. |
| https://wazuh.com/ | operate-phase/security-logging.md | Confirmed | Wazuh open-source SIEM/XDR. |
| https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI-TR-03183-1-0_9_0.pdf | 13 pages: build-phase/data-privacy.md, key-provisioning.md, ota-updates.md, sbom-vex.md, secure-boot.md, secure-configuration.md, threat-modeling.md, unique-device-identity.md, user-documentation.md; operate-phase/cicd-hardening.md, patch-cadence.md, security-logging.md, vulnerability-disclosure.md | Replaced | The old URL returns 404. BSI's TR-03183 page (fetched) lists Part 1 v1.0.0 as current, alongside Part 2 v2.1.0, Part 3 v1.0.0 and Part H v1.1.0. I read v1.0.0, which is a complete restructure: a risk-based approach (RH_RA/RH_RT/RH_DOC/RH_UPD activities), "Adaptable Risk-based Controls" published separately in OSCAL (access on request), and an Annex B table numbering the CRA essential requirements ER.0–ER.x. **It no longer contains the REQ_ER / REQ_UD / REQ_VH / REQ_RA requirement IDs, nor the quoted wording, that every citing page uses.** Pointing those citations at v1.0.0 would make them wrong. They now point to BSI's own archived copy of the cited version, https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI-TR-03183-1_v0_9_0.pdf?__blob=publicationFile (fetched: PDF, v0.9.0, 2024-09-20; listed under "Archiv" on BSI's page). Each page now says "v0.9.0" in the text, and the link title says it is superseded by v1.0.0. I checked every cited REQ ID against v0.9.0: all exist and match their topics. Three quotes did not appear in v0.9.0 and are now corrected (see Page changes). Re-mapping to v1.0.0 is a proposal. No Part 2 or Part 3 URL is cited in this section. |
| https://www.cisa.gov/resources-tools/resources/2026-minimum-elements-software-bill-materials-sbom | build-phase/sbom-vex.md | Could not verify | Blocked (403). No other official CISA route was tried, because cisa.gov blocks automated fetches. The page's claims (July 2026; NSA, FBI and 15 international partners; replaces the 2021 NTIA elements; adds hash, licence, signature and generation-context fields) agree with blog/2026-07-29-cisa-2026-sbom-minimum-elements.md. |
| https://www.cisecurity.org/cis-benchmarks/ | build-phase/secure-configuration.md | Could not verify | Blocked (403, Cloudflare challenge). |
| https://www.enisa.europa.eu/publications/enisa-secure-by-design-and-default-playbook | index.md | Confirmed | ENISA publication page "Secure by Design and Default Playbook", described as a practical guide for SMEs. |
| https://www.enisa.europa.eu/topics/product-security/vulnerability-services/eu-incident-response-and-cyber-crisis-management/single-reporting-platform-srp/frequently-asked-questions | operate-phase/vulnerability-disclosure.md | Confirmed | FAQ Q4: the SRP "has become operational on 11 September 2026". Q13: no retrospective reporting where the manufacturer was aware before 11 September 2026. |
| https://www.fluentd.org/ | operate-phase/security-logging.md | Confirmed | Fluentd official site. |
| https://www.hackerone.com/ | operate-phase/vulnerability-disclosure.md | Confirmed | HackerOne still operates a vulnerability disclosure and bug bounty platform. Its site now leads with "Continuous Threat Exposure Management", but the page's generic use is still accurate. |
| https://www.keyfactor.com/products/ejbca-enterprise/ | build-phase/key-provisioning.md, unique-device-identity.md | Confirmed | EJBCA Enterprise by Keyfactor. |
| https://www.nxp.com/products/security-and-authentication/authentication/edgelock-se050-plug-trust-secure-element-family:SE050 | build-phase/key-provisioning.md | Confirmed | Redirects to the NXP EdgeLock SE050 family page; product current. |

Counts: Confirmed 29, Updated 0, Replaced 2, Could not verify 3 (34 rows).

## Page changes

- **All 13 pages citing TR-03183-1** (listed in the BSI row above): replaced the 404 `[bsi_tr_03183_p1]` URL with BSI's archived v0.9.0 copy (`BSI-TR-03183-1_v0_9_0.pdf?__blob=publicationFile`). The link title is now "BSI TR-03183 Part 1: General requirements, v0.9.0 (archived; superseded by v1.0.0)", and "v0.9.0" was added at the first in-text mention of the guideline on each page. Evidence: BSI's TR-03183 page lists v1.0.0 as current and 0.9.0 under "Archiv". v1.0.0 has no REQ_* IDs; v0.9.0 contains all the cited IDs.
- **build-phase/secure-configuration.md**:
  - The BSI quote "can be fully restored via a reset function" (REQ_ER 3) does not appear in TR-03183-1. It now says the product must "be able to be reset to its original state" (REQ_ER 3.1, verbatim from v0.9.0).
  - The CRA quotes "placed on the market with a secure-by-default configuration" and "...to limit attack surfaces." are now verbatim from Annex I Part I(2)(b) and (j): "made available on the market with a secure by default configuration" and "...limit attack surfaces, including external interfaces".
- **operate-phase/security-logging.md**:
  - The page attributed "log all security-relevant events by default" to the CRA; that is not the Act's text. It now quotes Annex I Part I(2)(l): "provide security related information by recording and monitoring relevant internal activity, including the access to or modification of data, services or functions".
  - The BSI quote "create logs for security-relevant events" (REQ_ER 13) is not in v0.9.0. It now quotes REQ_ER 13.1: "record and monitor all security relevant setting modifications".
- **operate-phase/cicd-hardening.md**: the BSI quote "continuously search for vulnerabilities in their own product" (REQ_VH 2) is not in v0.9.0, and REQ_VH 2 is about addressing vulnerabilities, not finding them. It now cites REQ_VH 1.2: "MUST have a process in place to identify vulnerabilities affecting the TOE", which allows matching SBOM components against vulnerability databases.
- **build-phase/data-privacy.md**:
  - The CRA quotes "to only what is necessary" and "provide a function for users to securely and completely delete all personal and configuration data" are not the Act's text. They now quote Annex I Part I(2)(g) "adequate, relevant and limited to what is necessary in relation to the intended purpose" and (2)(m) "provide the possibility for users to securely and easily remove on a permanent basis all data and settings".
  - "BSI's technical guidelines" is now "BSI's technical guideline TR-03183-1 (v0.9.0)".
- **build-phase/ota-updates.md**: the page said Annex I §1(2)(c) requires security updates to be separable from functionality updates. That duty is in Annex I Part II(2). The bullet now describes (2)(c) correctly (vulnerabilities addressable through security updates, automatic updates by default where applicable, with an opt-out) and attributes the separation rule to Annex I, Part II § 2.
- **build-phase/user-documentation.md**:
  - `[cra_annexII]` was used twice but never defined, so both links were broken. The unused `[cra_annexI]` definition is replaced with `[cra_annexII]` pointing to `#anx_II`.
  - The Annex II title is now verbatim: "Information and instructions to the user".
  - The page listed SBOM/included-software information as mandatory minimum content. Annex II point 9 makes it conditional ("If the manufacturer decides to make available the software bill of materials"), and TR-03183-1 v0.9.0 REQ_UD 6.1 is a MAY recommendation. The bullet and checklist item now say it is optional and state where the SBOM can be found if it is made available.
- Decision edits (see Decisions 2, 3, 5, 6, 7 and 8): threat-modeling.md (EN 40000-1-2 paragraph), vulnerability-disclosure.md (Annex I Part II application date; CISA CVD guidance), user-documentation.md (full Annex II coverage; 11 December 2027 application), cicd-hardening.md (corrected GitHub Actions names and inputs; softened legal claim).
- **build-phase/threat-modeling.md**: the Microsoft Threat Modeling Tool link `https://aka.ms/tmt` is now the Microsoft Learn overview, https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool, matching the Tools page (requested by the coordinator for consistency; the overview is the redirect target fetched this morning).
- No other Q3 date fixes were needed in this section. The 11 September 2026 reporting date and the SRP being live since 11 September 2026 already match the brief, Art. 71(2) and the ENISA FAQ.

## Pages reviewed

- index.md: no change
- build-phase/index.md: no change
- operate-phase/index.md: no change
- build-phase/threat-modeling.md: changed (BSI link/version)
- build-phase/secure-configuration.md: changed
- build-phase/unique-device-identity.md: changed (BSI link/version)
- build-phase/secure-boot.md: changed (BSI link/version)
- build-phase/key-provisioning.md: changed (BSI link/version)
- build-phase/data-privacy.md: changed
- build-phase/ota-updates.md: changed
- build-phase/sbom-vex.md: changed (BSI link/version)
- build-phase/user-documentation.md: changed
- operate-phase/vulnerability-disclosure.md: changed (BSI link/version)
- operate-phase/patch-cadence.md: changed (BSI link/version)
- operate-phase/security-logging.md: changed
- operate-phase/cicd-hardening.md: changed

All 16 of 16 pages were reviewed; 13 changed.

## Cross-section issues

1. **docs/standards/eu/cra/index.md** cites `[bsi_tr_03183_p1]` with REQ_RA / REQ_ER / REQ_VH IDs in its mapping tables. If it uses the same dead `BSI-TR-03183-1-0_9_0.pdf` URL, it needs the same treatment as this section: BSI's archived v0.9.0 copy, `https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI-TR-03183-1_v0_9_0.pdf?__blob=publicationFile`, labelled v0.9.0 and superseded by v1.0.0. v1.0.0 has no REQ_* IDs, so linking the IDs to v1.0.0 would be wrong. Any statement elsewhere that TR-03183-1 is at version 0.9.0, or is the current version, should now say v1.0.0 is current. The same page (lines 367–369) also has the dead Part 2 (`BSI-TR-03183-2-2_0_0.pdf`) and Part 3 (`BSI-TR-03183-3-0_9_0.pdf`) URLs. BSI's TR-03183 page links these copies, which I saw in its download list but did not fetch:
   - current: `/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI-TR-03183-2_v2_1_0.pdf?__blob=publicationFile` (Part 2 v2.1.0, which adds an SPDX/CycloneDX field mapping, a reviewed licence section, and virtual and referenced components);
   - current: `.../BSI-TR-03183-3_v1_0_0.pdf?__blob=publicationFile` (Part 3 v1.0.0, the first final version after comments);
   - archived: `.../BSI-TR-03183-2_v2_0_0.pdf?...` and `.../BSI-TR-03183-3_v0_9_0.pdf?...`.
2. **docs/standards/eu/ivdr-overview.md** line 155: the `[bsi_tr_03183]` URL ends in `TR-03183_node.htm` (missing the final "l"), unlike red-overview.md and mdr-overview.md. It is probably broken.
3. **ETSI EN 304 623 status**: secure-boot.md (warning), sbom-vex.md, vulnerability-disclosure.md and ota-updates.md describe it as a draft, citing v0.1.3. That is still correct, since it is not OJ-cited. However, blog/2026-08-13 reports that a final draft entered ETSI's approval procedure in August 2026, which ran until mid-September to mid-November 2026. If the Standards section updates docs/standards/eu/cra/en-304-623-boot-managers.md to a newer version or status, the secure-boot.md warning ("ETSI EN 304 623 v0.1.3 is an interim draft") should be aligned in the same run. I left it unchanged so that it stays consistent with the standards page as it stands.
4. The coordinator asked whether any implementation page says OMB requires the secure-software attestation form. None does (searched for OMB, M-22-18, M-23-16 and attestation).

## Decisions

1. **Re-map BSI TR-03183-1 references to v1.0.0 or drop the REQ IDs — Not changed.** The pages cite BSI's own archived v0.9.0 copy, labelled as superseded, and every cited REQ ID and quote now matches that text, so the citations are accurate. v1.0.0's detailed controls are published only as OSCAL controls on request from BSI (tr03183@bsi.bund.de), so there is no public current-version text at the same level to map to. Its Annex B "ER.x" rows only restate CRA Annex I, which the pages already cite directly. Dropping the BSI layer across 13 pages would be a guidance rewrite with no new official source behind it. Revisit when BSI publishes the controls openly. Source: BSI TR-03183 page; TR-03183-1 v1.0.0, section 7.
2. **Point threat-modeling.md to EN 40000-1-2 — Done.** Added one paragraph to Regulatory Context. It says EN 40000-1-2 (principles, product risk management and lifecycle activities) was published by CEN-CENELEC in November 2026 (first written as "on 18 November 2026"; changed at the coordinator's request to match the EU pages and primer, because CEN-CENELEC's 19 November 2026 announcement gives no day) as the first horizontal CRA standard for product risk management, and that it is not yet cited in the OJ, so it gives no presumption of conformity yet. The paragraph links to [CRA Harmonised Standards](docs/standards/eu/cra/harmonised-standards.md). I did not add it to the other build-phase guides: risk assessment is threat-modeling.md's subject, and the other guides link there. Source: brief key facts; docs/standards/eu/cra/index.md (CEN-CENELEC announcement); blog/2026-11-19-first-cra-standards-en-40000.md.
3. **Add CISA's joint CVD guidance to vulnerability-disclosure.md — Done.** Added a Related Pages bullet: "Establishing a Coordinated Vulnerability Disclosure Program to Work With Security Researchers" (CISA, the NSA, and international partners, 15 July 2026), linking the cisa.gov resource page. The research agent verified the publication through CISA's own GovDelivery bulletin, which is an issuer route. cisa.gov itself returns 403 here.
4. **ENISA technical advisories (secure update mechanisms, 4 November 2026; SBOM, 22 October 2026) — Done (coordinator).** Added by the coordinator to the Related Pages lists in ota-updates.md and sbom-vex.md. I made no further change.
5. **Complete CRA Annex II coverage in user-documentation.md — Done.** Section 2 now covers every Annex II point:
   - manufacturer email or other digital contact and website (point 1);
   - essential functionalities and security properties (point 4);
   - foreseeable circumstances leading to significant risks (point 5);
   - DoC internet address (point 6);
   - type of technical security support (point 7);
   - commissioning and lifetime secure use (point 8(a)) and how changes affect data security (point 8(b));
   - turning off automatic updates (point 8(e));
   - secure decommissioning and removal of user data (point 8(d));
   - single point of contact for vulnerabilities (point 2).

   The checklist gained matching items. "Do I Really Need to Do This?" now says the requirement applies "From 11 December 2027" (CRA Art. 71(2)). Source: CRA Annex II and Art. 71(2) (Publications Office copy, CELEX 02024R2847-20241120).
6. **Restyle the five older "Guide:" pages — Not changed (partial fix done).** Style guide §5 says Implementation Guides use numbered H2/H3 headings. The five older pages follow that rule; it is the newer guides that do not. A restyle towards the newer pattern would therefore go against the current style guide, and the inconsistency should be settled in the style guide first. I did fix the one overstated legal claim in cicd-hardening.md: "a direct and non-negotiable legal obligation" is now "part of meeting those obligations, even though the CRA does not prescribe CI/CD tooling". I left user-documentation.md's "renders a product non-compliant" unchanged, because Annex II is mandatory.
7. **Fix the GitHub Actions example in cicd-hardening.md — Done.** I fetched the official repositories:
   - `trufflesecurity/truffle-hog@main` is now `trufflesecurity/trufflehog@main` (the repository name is "trufflehog", and the vendor's README uses `@main`). I added a comment to pin a release tag or commit SHA in production, matching the page's pinning advice.
   - `anchore/syft-action@v0` is now `anchore/sbom-action@v0`.
   - `anchore/grype-action@v0` with `fail-on` is now `anchore/scan-action@v7` with `fail-build: true` and `severity-cutoff: 'critical'`, as in Anchore's README.
   - Left unchanged: the CodeQL step (`github/codeql-action/analyze@v3`), which was not checked.
8. **Annex I Part II date wording (coordinator check) — Done.** No page said the CVD policy applies from 11 September 2026. However, vulnerability-disclosure.md said "CRA Annex I, Part II requires … CVD policy" and then "From 11 September 2026, CRA Article 14 also requires…", which suggests Part II already applies. It now adds "Like the rest of Annex I, this applies from 11 December 2027." and opens the next sentence with "Earlier, from 11 September 2026, CRA Article 14 requires…". patch-cadence.md and cicd-hardening.md state Part II duties without a date and do not imply early application, so they are unchanged. Source: CRA Art. 71(2).

### Additional sources cited this run (not in the source map)

| URL | Citing pages | Status | Note |
|-----|--------------|--------|------|
| https://www.cisa.gov/resources-tools/resources/establishing-coordinated-vulnerability-disclosure-program-work-security-researchers | operate-phase/vulnerability-disclosure.md | Could not verify (direct) | cisa.gov returns 403. Publication and date verified by the research agent via CISA's GovDelivery bulletin (issuer route). |
| https://github.com/anchore/sbom-action, https://github.com/anchore/scan-action, https://github.com/trufflesecurity/trufflehog | operate-phase/cicd-hardening.md (YAML example; not linked) | Confirmed | Fetched once each. Action names, versions and inputs match the example. |
