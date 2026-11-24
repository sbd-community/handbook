# SecureByDesignHandbook.com – Periodic Review

How the handbook is kept current: a full review of the whole site, run once a month from Claude Code with `/goal`, that finds new developments, rechecks every cited source and page, and leaves a dated report. Mission and audience: [purpose-and-positioning.md](./purpose-and-positioning.md). Sourcing, citation, and post rules: [style-guide.md](./style-guide.md). Placement and structure: [navigation-structure.md](./navigation-structure.md).

**Status**: First run in November 2026 ([report](./reviews/2026-11.md)).

## Principles

- **Full, every month**: Every run reviews every doc page and every source cited in `docs/`. Nothing is skipped because it was fine last month, and nothing is carried forward between runs except the date of the last report and the list of sources that could not be verified.
- **Derived, not maintained**: The source list is built from the pages at the start of each run, and the watchlist from the publishers the handbook already cites, so neither can drift from what is published.
- **Unverified is a status, not a pass**: A source that cannot be fetched is recorded as could not verify, with the reason, and is never counted as confirmed or as broken.
- **Decide and do**: The run makes every change it judges necessary, from correcting a date to revising guidance, adding or removing a page or tool, or upgrading a dependency, and records each decision in the report with its reason and source. A change is held back only when a guide's own rule cannot be met in the run, and then the report says which rule and why. The maintainer reviews the committed result before it is pushed.
- **Existing rules apply**: Posts follow [Blog Posts](./style-guide.md#blog-posts), including the rule that a post ships with its page updates and its source copy in `source-material/`, and the [Freshness](./style-guide.md#freshness) rule for later updates. Harmonised-standard pages follow [CRA Harmonised-Standard Pages](./style-guide.md#cra-harmonised-standard-pages). Citations follow [Citation & References](./style-guide.md#7-citation--references). This guide does not restate them.

## What a Run Covers

A run answers six questions in order. The report has one section for each.

Work in this order, because each step feeds the next:

1. **Developments first**: answer question 1 before any page is reviewed, so the reviewers know what has changed.
2. **Fetch centrally**: build the source list and fetch every document once (see [Fetching Sources](#fetching-sources)), saving each to a local copy with its response code, final URL and title.
3. **Review by section**: give each sidebar section's reviewer its pages, a map of its sources with their local copies, and the question 1 findings that touch it, using the [section brief](#section-brief). A reviewer edits only its own section, and reports anything outside it to the coordinator.
4. **Check the changes**: before committing, run the [independent check](#check-the-changes).

### 1. What is new?

Check each publisher on the watchlist for anything issued since the last report: new or revised publications, drafts that became final, standards cited (or withdrawn) in the Official Journal, new consolidated versions of EU acts, opened or closed consultations, new guidance or FAQs, and changed dates or positions. For the first run, check since 1 January 2026, and confirm that nothing since then that qualifies for a post is missing from `blog/`.

The watchlist is derived from the publishers that `docs/` and `blog/` cite, not kept by hand, so every post's publisher is watched and a later development can trigger its later-update note. On 24 November 2026 it was:

- **EU**: the European Commission (CRA, NIS 2, RED, MDR and IVDR implementing and delegated acts, guidance, FAQs, and the CRA expert group), the Official Journal and EUR-Lex (new acts and consolidated versions), ENISA (including the EUCC scheme and CRA reporting), CEN-CENELEC and ETSI (the EN 40000 series, EN 304 623 and other CRA harmonised standards, and EN 303 645), and the Medical Device Coordination Group;
- **National**: BSI (Technical Guidelines such as TR-03183) and the Bundestag and Bundesrat (Germany's CRA implementation act); the UK government (the PSTI regime, NCSC, and the Ministry of Defence) and the ICO; the White House and OMB (executive orders and memoranda), CISA, NIST (including the CSRC publications listing), FDA, FCC, and the Cyber Trust Mark programme in the US; and the Department of Home Affairs in Australia;
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

Confirm that each source is the document cited and that what the citing pages say about it (title, number, version, status, publication or revision date, and any article, clause, or date quoted) still holds. A landing page that shows status, version, and date is usually enough; read the full text only where a page quotes or paraphrases it. For EU acts, also check whether a newer consolidated version exists than the one cited, and whether the copy in `source-material/` is still the current text. Record dates and statuses as [Dates and freshness](./style-guide.md#dates-and-freshness) requires: the issuer's own publication or issue date, no more precise than the source gives, and any condition, draft status, or pending step that qualifies the fact. Give each source one status:

| Status | Meaning |
| --- | --- |
| **Confirmed** | Fetched this run; it is the cited document and the citing pages match it |
| **Updated** | Fetched this run; the source has changed, and every citing page now matches it |
| **Replaced** | The URL is gone or now points elsewhere; the citation now points to the issuing body's own current copy |
| **Removed** | Checked this run and shown to be gone or no longer what the page describes (for example, a deleted repository, an expired domain, or a withdrawn document) with no official replacement; the citation, and the claim or tool that relied on it, is removed |
| **Could not verify** | Not fetched this run; the reason is recorded (blocked, timed out, or no official copy found) |

Two kinds of page need a different test:

- **Tools pages** (`docs/tools/`) cite products, not documents. Confirm that each product still exists, under the name and owner the page gives, and that the link reaches its official page. Record a product that has been renamed, sold, merged, or discontinued as updated, replaced, or removed. Add, remove, or replace a product where the evidence calls for it (for example, a discontinued product or an expired domain), keeping the page vendor-neutral, and record the decision.
- **Real-world vulnerability pages** cite advisories that are revised after publication. Check the advisory's latest revision, affected versions, and remediation status, not only that it loads.

### 3. Is it still current?

Read every page for text that time alone has made wrong: application dates, reporting deadlines, transition periods, consultation windows, and expected publication dates now in the past; standards described as draft that have since been published or cited in the Official Journal; and words such as *recently*, *new*, *upcoming*, *this year*, *next year*, *currently*, *expected*, and *draft* that no longer hold at the run date. Find them all with a search and judge each in context; most uses of *new* and *draft* are still correct.

Pay particular attention to the CRA timeline: the conformity-assessment body provisions from 11 June 2026, the reporting obligations from 11 September 2026, and full application from 11 December 2027. The pages state these dates in prose (11 September 2026), in ISO form (2026-09-11), and as periods from entry into force (21 months, 36 months), so search for all three forms. Check worked examples, threat models, checklists, and the evidence pack for dates presented as still to come.

Also remove any "last checked", "as of [date]", or "at the time of writing" text that has found its way onto a page; [Dates and freshness](./style-guide.md#dates-and-freshness) explains why the handbook does not use it. The review report, not the pages, records when the site was last checked.

### 4. Is it consistent?

Every date, status, and position that appears on more than one page must agree everywhere: the Standards summaries and harmonised-standards pages, the CRA primer and first-sprint checklist, the Implementation guides, the CRA gap analysis, maturity model, and evidence pack, the threat-model examples, the cryptography and hardware pages, and the glossary. When a run changes one, search for every other statement of it and change those too.

Also check that statements shared with the [Supply Chain Security Handbook](https://supplychainsecurityhandbook.com) do not contradict it, such as the status of EN 304 623 or SBOM requirements. Where this handbook is wrong, fix it here. Where the sister site is wrong, do not edit it from this run; record the conflict in the report for that site's own review.

### 5. Is it still relevant?

Read each section as its audience would, against the developments found in question 1 and the run date. Do the Implementation guides still reflect what the harmonised standards now expect? Does the first-sprint checklist still put the right work first? Do the reader paths in [navigation-structure.md](./navigation-structure.md#user-journeys) still lead each persona to what they need? Is there a regulation, standard, technology, or situation that readers now meet and the handbook does not cover, or a page that no longer earns its place? Where the answer calls for change, make it, following the guide that owns that kind of change: [navigation-structure.md](./navigation-structure.md) for a new, moved, or removed page and for the reader paths, [purpose-and-positioning.md](./purpose-and-positioning.md) for scope and audience, and [style-guide.md](./style-guide.md) for everything written. Record each decision in the report with its reason and the source behind it, including decisions not to change something a reader might expect to have changed.

### 6. Is the site healthy?

- Run `npm run typecheck` and `npm run build`. The build fails on broken internal links (`onBrokenLinks: 'throw'`) but only warns on broken Markdown links, so record every build warning and fix those that point to a broken link.
- Check every link to a sister handbook (`supplychainsecurityhandbook.com` and `pqchandbook.com`) still resolves to the page and section it names.
- Run `npm outdated` and `npm audit`. Apply dependency updates, including major versions and fixes for security advisories, one package or related group at a time. Keep each only if both commands above still pass afterwards, the built site still renders its homepage, a doc page, and a post correctly (the site builds with `trailingSlash: false`, so check `build/index.html`, `build/docs/quick-start/cra-primer.html`, and the newest post's `build/blog/YYYY/MM/DD/<slug>.html`, and confirm that a heading anchor, an admonition, and a post excerpt render), and the updated packages support the Node version in `.github/workflows/deploy.yml`. Where an update needs a newer Node version, raise the workflow's Node version in the same change, to a version the updated packages and the checks pass on. Revert any update that fails, and record it in the report with the failure. The November 2026 run moved the site to Docusaurus 3.10.2 and the deploy workflow to Node 24, and kept MDX 1 compatibility on in `docusaurus.config.ts` so that existing comments, heading anchors and admonitions still work.

### Check the changes

Before committing, have fresh reviewers check the whole diff against primary sources. Give them the diff and these rules, not the run's conclusions, and split the work by area (for example, Standards and Quick Start, and everything else including posts). They look for factual errors in changed text, statuses or dates stated without their conditions, inconsistencies between pages and posts, house-style breaks, and text damaged by an edit. Fix what they confirm, record each finding and its outcome in the report, and treat a finding that rests only on a third-party copy as unconfirmed until checked at the issuer. In November 2026, this check caught errors the run itself had made.

News posts are not rechecked as current, because each is a snapshot at its date. Where a development found in question 1 supersedes what a post reported, add the later-update note described in [Freshness](./style-guide.md#freshness).

## Fetching Sources

Some publishers block automated requests, and which ones do varies by run and by network. On 24 November 2026, EUR-Lex answered an automated request with a `202` and no content, and its ELI links (`data.europa.eu/eli/...`) redirect to the same server. EUR-Lex supplies 106 of the cited URLs, on 19 distinct EUR-Lex pages (official, consolidated, and amending texts counted separately), so it is the largest single source of could-not-verify results.

- **Fetch once, centrally**: The coordinator fetches every document on the source list, one at a time, and saves a local copy of each. Section reviewers read those copies and fetch again only to follow a failed source to an official alternative or replacement.
- **Be polite**: Fetch one page at a time from each site, use the tools' normal behaviour, and never solve a challenge, change the user agent to pose as a browser, rotate addresses, or otherwise try to get past bot protection.
- **Detect blocking by response, not keywords**: Treat a `403`, `429`, `202` with no content, a connection failure, or a page whose title is not the cited document as could not verify. Do not search the page body for words such as *captcha*, which also appear on pages that loaded correctly.
- **Use the issuer's own alternative route**: Where the issuing body offers another official route to the same facts (such as its publication listing, a DOI record, the Official Journal page, or the EU Publications Office's data service), confirming through it counts. A third-party copy, cache, or archive, such as the Wayback Machine, does not. For EU acts, the Publications Office route works: in November 2026, `http://publications.europa.eu/resource/celex/<CELEX>` with the header `Accept: application/xhtml+xml` returned the full text of every act EUR-Lex blocked, and its SPARQL endpoint (`https://publications.europa.eu/webapi/rdf/sparql`) lists the consolidated versions of an act. For CISA advisories, `github.com/cisagov/CSAF` works, and for NVD, the NVD API.
- **Use `source-material/` for wording, not status**: The copies in `source-material/` can confirm that a page quotes an article or clause correctly. They cannot confirm that the text is still current, so a source checked only this way stays could not verify.
- **Hand-check afterwards**: After the goal finishes, a maintainer opens each could-not-verify source in a browser, and Claude records the result in the report as confirmed, updated, replaced, or removed, with "checked by hand" in its note. The quickest way is for the maintainer to open the sources as tabs in the Claude in Chrome tab group, so Claude can read them there; Claude reads what the maintainer opened and does not get past any check the browser shows. Anything still unverified stays so.
- **Escalate what stays unverified**: A source that could not be verified in two consecutive reports is listed at the top of the next report, and the maintainer's hand-check of it is required that month. A blocked or failed fetch says nothing about whether the claim is right, so it is never a reason to change the page: the run leaves the claim as it is and looks for another official route from the same issuer.
- **Change the page only on evidence about the source**: Change a claim when a check, automated or by hand, shows that the source has changed, has moved, or no longer exists with no official replacement. A hand-check that finds the source gone with no official copy is the only case for removing the claim. Do not add a "last confirmed" date to the page.

## Running the Review

1. Start Claude Code in the repository on an up-to-date `main`, in auto mode so the run is not stopped for permission prompts. Auto mode can still refuse an action it judges risky; if it does, the run records the refusal and moves on.
2. Paste the goal below. It uses the current year and month for `YYYY-MM` unless you replace it.
3. When the goal ends, read the closing summary and the report, then do the hand-check of could-not-verify sources and ask Claude to record the results in the report.
4. If you change this guide or the goal during a run, clear the goal with `/goal clear` and paste the new one, because the goal is evaluated against its own text.
5. Review the decisions in the report and the diff, and push the branch and open a pull request yourself. To undo a decision, ask Claude to revert it on the branch and note the reversal in the report. Merging to `main` deploys the site.

### The goal

```text
/goal The YYYY-MM periodic review in periodic-review.md is complete (YYYY-MM is the current year and month unless replaced). Steps: (1) Create branch review/YYYY-MM from main before any edit. (2) Create reviews/YYYY-MM.md with the six sections in periodic-review.md, and reviews/YYYY-MM-work/ for working files, and fill the report as you work, so it is the record if the session compacts or resumes. (3) Check every watchlist publisher for developments since the last report, before reviewing pages. (4) Build the source list with the command in periodic-review.md, fetch each document once, centrally and politely, never bypassing bot protection, and give every listed source exactly one status (confirmed, updated, replaced, removed, or could not verify with a reason). (5) Review every page under docs/ by sidebar section, using the section brief in periodic-review.md; fix what is wrong, out of date, or inconsistent, make the relevance changes you judge necessary under the guide that owns each, and record every decision with its reason. (6) Write any blog posts, page updates, source-material copies and later-update notes that new developments need. (7) Apply dependency updates as periodic-review.md describes, reverting any that fail. (8) Run the independent check of the changes in periodic-review.md and fix what it confirms. Run npm run typecheck and npm run build, and fix failures. (9) Confirm the current branch is review/YYYY-MM, then commit all changes. Do not push. Done when your final message, in one turn, shows: the branch name; the number of sources listed and the count for each status; doc pages reviewed out of the total; the number of new developments, pages changed, posts, relevance decisions, independent-check findings fixed, and dependency updates kept and reverted; both commands with exit code 0 from this session; and the commit hash. Stop and report what remains if not done after 40 turns.
```

The goal stays under the 4,000-character limit. The evaluator that decides whether a goal is met reads only the conversation, not files, so the final message must show the evidence itself. The November 2026 run took well over 40 turns. That run was the first, it reached back to 1 January 2026, and its rules changed mid-run, so a routine month should need far fewer; if later runs still exceed the limit, raise it here.

## The Report

Each run writes `reviews/YYYY-MM.md`, which is the review log. It is not part of the site and is not linked from it. It holds, in order:

- the run date, the branch, the commit, and the closing summary counts;
- sources that could not be verified in the previous report as well as this one, if any;
- one section for each of the six questions, with sources as a table of URL, citing pages, status, and note, and pages listed by sidebar section;
- every decision the run made beyond a straight correction (relevance changes, new, moved, or removed pages and tools, reader-path changes, dependency updates kept or reverted, and changes held back with the rule that held them), each with its reason and source;
- the independent-check findings and what was done about each;
- the hand-check results, added after the goal ends.

Working files go in `reviews/YYYY-MM-work/`: the source list, the fetch index (response code, final URL and title for each document), the final status of every source, the developments found, and each section's results (sources table, page changes, pages reviewed, and decisions). The report summarises them and links to them.

The counts in the report and the closing message mean:

- **Pages changed**: doc pages that differ from `main`, per `git diff --name-only main -- docs`;
- **Relevance decisions**: the items listed under "Decisions" in the section results, plus the coordinator's own decisions;
- **Developments**: the items in the question 1 tables, including those that changed nothing.

Never rewrite an earlier report; correct it in the next one.

## Section Brief

Each section reviewer gets this brief, with its own list of pages, its source map, and the question 1 findings that touch its section:

- **Scope**: Review every page in the section in full, and edit only files in the section. Report anything that needs a change elsewhere as a cross-section issue.
- **Sources**: The source map lists every URL the section cites, with the fetch result and the path to the local copy. Do not fetch a source that returned 200 again. For a failed source, try one official alternative route from the same issuer, or find the issuer's own current copy of a moved document. Never use a third-party copy, cache, or archive as confirmation.
- **Statuses**: Give every row in the source map one status, as defined in question 2, with a short note on what was confirmed, what changed, or why it could not be verified.
- **Pages**: Answer questions 2 to 5 for every page. Fix what is wrong, out of date, or inconsistent, and make the relevance changes the evidence calls for, following the guide that owns each kind of change. Follow [Dates and freshness](./style-guide.md#dates-and-freshness).
- **Results**: Write a results file with five parts: the sources table (URL, citing pages, status, note), page changes (file, what was wrong, what it says now, evidence), pages reviewed, cross-section issues, and decisions (done, not changed, or held back, each with its reason).
