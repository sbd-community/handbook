# SecureByDesignHandbook.com – Periodic Review

How the handbook is kept current: a full review of the whole site, run once a month from Claude Code with `/goal`, that finds new developments, rechecks every cited source and page, and leaves a dated report. Mission and audience: [purpose-and-positioning.md](./purpose-and-positioning.md). Sourcing, citation, and post rules: [style-guide.md](./style-guide.md). Placement and structure: [navigation-structure.md](./navigation-structure.md).

**Status**: Proposed on 24 November 2026; not yet run.

## Principles

- **Full, every month**: Every run reviews every doc page and every source cited in `docs/`. Nothing is skipped because it was fine last month, and nothing is carried forward between runs except the date of the last report and the list of sources that could not be verified.
- **Derived, not maintained**: The source list is built from the pages at the start of each run, and the watchlist from the publishers the handbook already cites, so neither can drift from what is published.
- **Unverified is a status, not a pass**: A source that cannot be fetched is recorded as could not verify, with the reason, and is never counted as confirmed or as broken.
- **Correctness is fixed, relevance is proposed**: The run corrects what is wrong or out of date, but changes to guidance, structure, or the reader paths in [navigation-structure.md](./navigation-structure.md#user-journeys) are written up as proposals for a maintainer to decide.
- **Existing rules apply**: Posts follow [Blog Posts](./style-guide.md#blog-posts), including the rule that a post ships with its page updates and its source copy in `source-material/`, and the [Freshness](./style-guide.md#freshness) rule for later updates. Harmonised-standard pages follow [CRA Harmonised-Standard Pages](./style-guide.md#cra-harmonised-standard-pages). Citations follow [Citation & References](./style-guide.md#7-citation--references). This guide does not restate them.

## What a Run Covers

A run answers six questions in order. The report has one section for each.

### 1. What is new?

Check each publisher on the watchlist for anything issued since the last report: new or revised publications, drafts that became final, standards cited (or withdrawn) in the Official Journal, new consolidated versions of EU acts, opened or closed consultations, new guidance or FAQs, and changed dates or positions. For the first run, check since 1 January 2026, and confirm that nothing since then that qualifies for a post is missing from `blog/`.

The watchlist is derived from the publishers that `docs/` and `blog/` cite, not kept by hand, so every post's publisher is watched and a later development can trigger its later-update note. On 24 November 2026 it was:

- **EU**: the European Commission (CRA, NIS 2, RED, MDR and IVDR implementing and delegated acts, guidance, FAQs, and the CRA expert group), the Official Journal and EUR-Lex (new acts and consolidated versions), ENISA (including the EUCC scheme and CRA reporting), CEN-CENELEC and ETSI (the EN 40000 series, EN 304 623 and other CRA harmonised standards, and EN 303 645), and the Medical Device Coordination Group;
- **National**: BSI (Technical Guidelines such as TR-03183) and the Bundestag (Germany's CRA implementation act); the UK government (the PSTI regime, NCSC, and the Ministry of Defence) and the ICO; CISA, NIST (including the CSRC publications listing), FDA, FCC, and the Cyber Trust Mark programme in the US; and the Department of Home Affairs in Australia;
- **Standards and certification**: IEC and the ISA Global Cybersecurity Alliance (IEC 62443), the Common Criteria portal and NIAP, ISO, and CTA;
- **Advisories and vendors**: the CISA advisory, NVD, and manufacturer pages behind each [real-world vulnerability](./docs/resources/real-world-vulnerabilities/index.md) page, and the silicon vendors on the hardware pages (ST and Espressif).

When a run finds a publisher that `docs/` or `blog/` now cites and this list does not name, add it here in the same run. Commentary and social sources cited in posts (news sites, LinkedIn) are not publishers and are not watched.

For each development, decide whether it changes anything the handbook states or should state. If it does and it meets [What qualifies for a post](./style-guide.md#what-qualifies-for-a-post), write the post and make every page change in the same run. If it changes a page but does not qualify for a post, make the page change and record it. If it changes nothing, record it in one line with the reason, so the next run knows it was seen. A publisher whose pages cannot be fetched is recorded as could not verify, like a source.

### 2. Is it still true?

Build the source list, then check every source on it. The list is every external URL cited in `docs/`, with the pages that cite it. It leaves out this site, its repository, the sister handbooks (checked in question 6), and the `example.com` placeholders in the policy templates:

```bash
grep -rnoE "https?://[^][)(<>\"' \`]+" docs \
  | sed -E 's/[.,;:]+$//' \
  | awk -F: '{f=$1; sub(/^[^:]*:[0-9]+:/,""); if ($0 !~ /securebydesignhandbook\.com|github\.com\/sbd-community|supplychainsecurityhandbook\.com|pqchandbook\.com|example\.com/) print $0 "\t" f}' \
  | sort -u \
  | awk -F'\t' '{a[$1]=a[$1] (a[$1]?", ":"") $2} END{for(u in a) print u "\t" a[u]}' \
  | sort
```

On 24 November 2026 this listed 337 URLs, which are 218 distinct documents once `#` fragments are removed. Fetch each document once, then check every fragment-level citation of it against that one copy.

Confirm that each source is the document cited and that what the citing pages say about it (title, number, version, status, publication or revision date, and any article, clause, or date quoted) still holds. A landing page that shows status, version, and date is usually enough; read the full text only where a page quotes or paraphrases it. For EU acts, also check whether a newer consolidated version exists than the one cited, and whether the copy in `source-material/` is still the current text. Give each source one status:

| Status | Meaning |
| --- | --- |
| **Confirmed** | Fetched this run; it is the cited document and the citing pages match it |
| **Updated** | Fetched this run; the source has changed, and every citing page now matches it |
| **Replaced** | The URL is gone or now points elsewhere; the citation now points to the issuing body's own current copy |
| **Could not verify** | Not fetched this run; the reason is recorded (blocked, timed out, or no official copy found) |

Two kinds of page need a different test:

- **Tools pages** (`docs/tools/`) cite products, not documents. Confirm that each product still exists, under the name and owner the page gives, and that the link reaches its official page. Record a product that has been renamed, sold, merged, or discontinued as updated or replaced. Adding or removing a product is a proposal, because it changes the guidance and must stay vendor-neutral.
- **Real-world vulnerability pages** cite advisories that are revised after publication. Check the advisory's latest revision, affected versions, and remediation status, not only that it loads.

### 3. Is it still current?

Read every page for text that time alone has made wrong: application dates, reporting deadlines, transition periods, consultation windows, and expected publication dates now in the past; standards described as draft that have since been published or cited in the Official Journal; and words such as *recently*, *new*, *upcoming*, *this year*, *next year*, *currently*, *expected*, and *draft* that no longer hold at the run date. Find them all with a search and judge each in context; most uses of *new* and *draft* are still correct.

Pay particular attention to the CRA timeline: the conformity-assessment body provisions from 11 June 2026, the reporting obligations from 11 September 2026, and full application from 11 December 2027. The pages state these dates in prose (11 September 2026), in ISO form (2026-09-11), and as periods from entry into force (21 months, 36 months), so search for all three forms. Check worked examples, threat models, checklists, and the evidence pack for dates presented as still to come.

On the [Standards overview](./docs/standards/index.md), add or update the sentence "Status and dates were last checked against the official sources on [run date]." in prose date format (for example, 24 November 2026). The PQC Handbook uses the same sentence.

### 4. Is it consistent?

Every date, status, and position that appears on more than one page must agree everywhere: the Standards summaries and harmonised-standards pages, the CRA primer and first-sprint checklist, the Implementation guides, the CRA gap analysis, maturity model, and evidence pack, the threat-model examples, the cryptography and hardware pages, and the glossary. When a run changes one, search for every other statement of it and change those too.

Also check that statements shared with the [Supply Chain Security Handbook](https://supplychainsecurityhandbook.com) do not contradict it, such as the status of EN 304 623 or SBOM requirements. Record a conflict as a proposal; do not edit the sister site in this run.

### 5. Is it still relevant?

Read each section as its audience would, against the developments found in question 1 and the run date. Do the Implementation guides still reflect what the harmonised standards now expect? Does the first-sprint checklist still put the right work first? Do the reader paths in [navigation-structure.md](./navigation-structure.md#user-journeys) still lead each persona to what they need? Is there a regulation, standard, technology, or situation that readers now meet and the handbook does not cover, or a page that no longer earns its place? Write each answer that calls for change as a proposal in the report, with its reason and the source behind it. Do not make the change in the run.

### 6. Is the site healthy?

- Run `npm run typecheck` and `npm run build`. The build fails on broken internal links (`onBrokenLinks: 'throw'`) but only warns on broken Markdown links, so record every build warning and fix those that point to a broken link.
- Check every link to a sister handbook (`supplychainsecurityhandbook.com` and `pqchandbook.com`) still resolves to the page and section it names.
- Run `npm outdated` and `npm audit`. Apply patch and minor dependency updates only if both commands above still pass afterwards and the updated packages support the Node version in `.github/workflows/deploy.yml`; otherwise record the update as a proposal. Record major updates and security advisories as proposals too. On 24 November 2026 the site ran Docusaurus 3.8.1 and the deploy workflow used Node 18, while Docusaurus 3.9 and later need Node 20, so that minor update must wait for the workflow change.

News posts are not rechecked as current, because each is a snapshot at its date. Where a development found in question 1 supersedes what a post reported, add the later-update note described in [Freshness](./style-guide.md#freshness).

## Fetching Sources

Some publishers block automated requests, and which ones do varies by run and by network. On 24 November 2026, EUR-Lex answered an automated request with a `202` and no content, and its ELI links (`data.europa.eu/eli/...`) redirect to the same server. EUR-Lex supplies 106 of the cited URLs, on 19 distinct EUR-Lex pages (official, consolidated, and amending texts counted separately), so it is the largest single source of could-not-verify results.

- **Be polite**: Fetch one page at a time from each site, use the tools' normal behaviour, and never solve a challenge, change the user agent to pose as a browser, rotate addresses, or otherwise try to get past bot protection.
- **Detect blocking by response, not keywords**: Treat a `403`, `429`, `202` with no content, a connection failure, or a page whose title is not the cited document as could not verify. Do not search the page body for words such as *captcha*, which also appear on pages that loaded correctly.
- **Use the issuer's own alternative route**: Where the issuing body offers another official route to the same facts (such as its publication listing, a DOI record, the Official Journal page, or the EU Publications Office's data service), confirming through it counts. A third-party copy, cache, or archive does not. The first run should try the Publications Office route for EU acts and record here whether it works.
- **Use `source-material/` for wording, not status**: The copies in `source-material/` can confirm that a page quotes an article or clause correctly. They cannot confirm that the text is still current, so a source checked only this way stays could not verify.
- **Hand-check afterwards**: After the goal finishes, a maintainer opens each could-not-verify source in a browser, and Claude records the result in the report as confirmed, updated, or replaced, with "checked by hand" in its note. Anything still unverified stays so.
- **Escalate what stays unverified**: A source that could not be verified in two consecutive reports is listed at the top of the next report. Look for another official copy from the same issuer; if none can be checked, add "last confirmed on [date]" next to the claim on the page, so the handbook never presents an unchecked claim as current.

## Running the Review

1. Start Claude Code in the repository on an up-to-date `main`, in auto mode so the run is not stopped for permission prompts. Auto mode can still refuse an action it judges risky; if it does, the run records the refusal and moves on.
2. Paste the goal below, with `YYYY-MM` replaced by the year and month of the run.
3. When the goal ends, read the closing summary and the report, then do the hand-check of could-not-verify sources and ask Claude to record the results in the report.
4. Decide the proposals, review the diff, and push the branch and open a pull request yourself. Merging to `main` deploys the site.

### The goal

```text
/goal The YYYY-MM periodic review in periodic-review.md is complete. Steps: (1) Create branch review/YYYY-MM from main before any edit. (2) Create reviews/YYYY-MM.md with the six sections in periodic-review.md and fill each section as you work, so the report is the record if the session compacts or resumes. (3) Check every watchlist publisher for developments since the last report. (4) Build the source list with the command in periodic-review.md and give every listed source exactly one status (confirmed, updated, replaced, or could not verify with a reason), fetching each document once, politely, and never bypassing bot protection. (5) Review every page under docs/, split by sidebar section across subagents if useful; fix what is wrong, out of date, or inconsistent, and record relevance changes as proposals without making them. (6) Write any blog posts, page updates, source-material copies and later-update notes that new developments need. (7) Run npm run typecheck and npm run build, and fix failures. (8) Confirm the current branch is review/YYYY-MM, then commit all changes. Do not push. Done when your final message, in one turn, shows: the branch name; the number of sources listed and the count for each status; doc pages reviewed out of the total; the number of new developments, page changes, posts, and proposals; both commands with exit code 0 from this session; and the commit hash. Stop and report what remains if not done after 40 turns.
```

The goal stays under the 4,000-character limit. The evaluator that decides whether a goal is met reads only the conversation, not files, so the final message must show the evidence itself. Until the first run, the goal is untested; adjust it here after that run.

## The Report

Each run writes `reviews/YYYY-MM.md`, which is the review log. It is not part of the site and is not linked from it. It holds, in order:

- the run date, the branch, the commit, and the closing summary counts;
- sources that could not be verified in the previous report as well as this one, if any;
- one section for each of the six questions, with sources as a table of URL, citing pages, status, and note, and pages listed by sidebar section;
- the proposals, each with its reason and source, for a maintainer to decide;
- the hand-check results, added after the goal ends.

Never rewrite an earlier report; correct it in the next one.
