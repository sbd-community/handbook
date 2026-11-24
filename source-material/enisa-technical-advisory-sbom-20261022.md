> **Title:** ENISA Technical Advisory for Software Bill of Materials  
> **Issuer:** European Union Agency for Cybersecurity (ENISA)  
> **Date:** October 2026 (publication date on ENISA page: 22 October 2026)  
> **Version:** Not stated in the document (download file name ends "v1.20"); ISBN 978-92-9204-813-6, doi:10.2824/2077129  
> **Source:** <https://www.enisa.europa.eu/sites/default/files/2026-11/ENISA%20Technical%20Advisory%20-%20Software%20Bill%20of%20Materials%20-%20v1.20.pdf>  
> **Landing page:** <https://www.enisa.europa.eu/publications/enisa-technical-advisory-for-software-bill-of-materials>  
> **Licence basis:** Creative Commons Attribution 4.0 International (CC BY 4.0), per the document's copyright notice: "Unless otherwise noted, the reuse of this document is authorised under the Creative Commons Attribution 4.0 International (CC BY 4.0) licence". © European Union Agency for Cybersecurity (ENISA), 2026. Cover image (© Adobe Stock) not reproduced.  
> **Copy notes:** Changes made: converted from PDF to Markdown; cover image, figures, running headers and page numbers omitted; tables kept as fixed-width text; layout reflowed. Wording otherwise unchanged.

---

# ENISA Technical Advisory for Software Bill of Materials

OCTOBER 2026

## About ENISA

The European Union Agency for Cybersecurity, ENISA, is the Union’s agency dedicated to achieving a high common level of cybersecurity across Europe. Established in 2004 and strengthened by the EU Cybersecurity Act, the European Union Agency for Cybersecurity contributes to EU cyber policy, enhances the trustworthiness of ICT products, services and processes with cybersecurity certification schemes, cooperates with Member States and EU bodies, and helps Europe prepare for the cyber challenges of tomorrow. Through knowledge sharing, capacity building and awareness raising, the Agency works together with its key stakeholders to strengthen trust in the connected economy, to boost resilience of the Union’s infrastructure, and, ultimately, to keep Europe’s society and citizens digitally secure. More information about ENISA and its work can be found here: www.enisa.europa.eu. CONTACT To contact the authors, use product_security@enisa.europa.eu.

For media enquiries about this paper, use press@enisa.europa.eu.

AUTHOR ENISA LEGAL NOTICE This publication represents the views and interpretations of ENISA, unless stated otherwise. It does not endorse a regulatory obligation of ENISA or of ENISA bodies pursuant to Regulation (EU) 2019/881.

ENISA has the right to alter, update or remove the publication or any of its contents. It is intended for information purposes only and must be accessible free of charge. All references to it or its use as a whole or in part must contain ENISA as its source.

Third-party sources are quoted as appropriate. ENISA is not responsible or liable for the content of the external sources, including external websites, referenced in this publication. Neither ENISA nor any person acting on its behalf is responsible for the use that might be made of the information contained in this publication.

ENISA maintains its intellectual property rights in relation to this publication. COPYRIGHT NOTICE © European Union Agency for Cybersecurity (ENISA), 2026 Unless otherwise noted, the reuse of this document is authorised under the Creative Commons Attribution 4.0 International (CC BY 4.0) licence (https://creativecommons.org/licenses/by/4.0/). This means that reuse is allowed, provided appropriate credit is given and any changes are indicated. Copyright for the image on the cover: © Adobe Stock For any use or reproduction of photos or other material that is not under the ENISA copyright, permission must be sought directly from the copyright holders.

ISBN 978-92-9204-813-6, ISSN 3094-600X doi: 10.2824/2077129, Catalogue number TP-01-26-022- EN-N Disclaimer: Generative AI was used in a limited capacity to support language refinement and preliminary document screening. All outputs were reviewed and validated by subject-matter experts. No AI generated content was used without substantive human oversight.

Table of contents

```
About ENISA                                                        1
1.    Introduction                                                 3
1.1   Introduction                                                  3
1.2   Scope and Context                                             4
1.3   Note on the current version of the document                   4
2.    SBOM Architecture and Data Flows                             6
2.1   How Software Bill of Materials works                          6
  2.1.1 Data Model                                                  7
  2.1.2 SBOM Formats                                               10
  2.1.3 SBOM Types                                                 11
2.2   SBOM Lifecycle                                               13
  2.2.1 SBOM Lifecycle Phases                                      14
  2.2.2 SBOM as part of a CI/CD Pipeline                           15
  2.2.3 SBOM Open-source Tooling Landscape                         17
3.    SBOM Threats and Risks                                      19
3.1   SBOM Threats                                                 19
3.2   SBOM General Risks                                           21
4.    SBOM Best Practices                                         24
4.1   SBOM Integration and Automation                              24
  4.1.1 Integration Patterns                                       24
  4.1.2 Common Configuration Requirements                          25
4.2   General Security Recommendations                             26
5.    Bibliography                                                28
```

## 1. Introduction

### 1.1 Introduction

Modern software products contain hundreds or thousands of components, each potentially harbouring vulnerabilities that threaten application and operating system security. Without component visibility, organisations operate blindly, discovering exposures only after exploitation occurs. The Software Bill of Materials (SBOM) supports proactive vulnerability tracking by identifying components with potential vulnerabilities, allowing security teams to correlate component inventories against publicly disclosed security vulnerabilities and respond to emerging risks. Beyond immediate vulnerabilities, SBOM data supports the assessment of component viability and supply chain sustainability risks.

An SBOM is a formal record containing details and supply chain relationships of components included in the software elements of a product with digital elements. The SBOM should be drawn in a commonly used and machine-readable format identifying and documenting components contained in the products with digital elements. It can provide those who manufacture, purchase, and operate software with information that enhances their understanding of the supply chain, which has multiple benefits, in particular it helps manufacturers and users to track known newly emerged vulnerabilities and cybersecurity risks ( ).

Core Capabilities

- Transparency. Reveals third-party and open-source components comprising modern software.

- Traceability. Links deployed software to upstream suppliers and downstream consumers.

- Compliance. Provides auditable records for regulatory and contractual requirements.

- Security. Supports vulnerability detection and software provenance verification. SBOMs form a foundational data layer rather than a complete security solution. Their value emerges through integration with security processes such as timely patching, mitigation activities, and documented vulnerability handling decisions, with continuous maintenance, and systematic deployment across the software development lifecycle (SDLC).

This document provides practical guidance on the adoption of SBOM, and it is intended for organizations especially micro-, small and medium enterprises (SMEs) and stewards seeking to set up the initial capabilities to enhance the software supply chain transparency. It aligns with the security principles from the ENISA Secure by Design and Default Playbook ( ), particularly supply chain controls, lifecycle management, and secure coding and verification practices. It introduces key concepts, industry standards, use cases and implementation practices to support organisations initiating their SBOM journey. In particular, this document:

Regulation (EU) 2024/2847 of the European Parliament and of the Council of 23 October 2024 on horizontal cybersecurity requirements for products with digital elements and amending Regulations (EU) No 168/2013 and (EU) 2019/1020 and Directive (EU) 2020/1828 (Cyber Resilience Act) (OJ L, 2024/2847, 20.11.2024, ELI: http://data.europa.eu/eli/reg/2024/2847/oj). ENISA, Secure by Design and Default Playbook, available at https://www.enisa.europa.eu/publications/enisa-secure-by-design-and-default-playbook

- outlines the SBOM implementation architecture and data flows based on a defined lifecycle;

- presents an indicative SBOM threat model along with targeted risks;

- lists measures to address the security issues across the SBOM ecosystem.

This technical advisory considers regulatory requirements such as those set out in the Cyber Resilience Act (CRA) ( ), in particular essential requirements related to SBOM obligations for manufacturers but essentially describes recommended best practices that may go beyond those requirements.

It aims to provide technical context to such requirements by describing common threats across the SBOM lifecycle along with practical recommendations to mitigate them. However, this document should not be considered as a legal interpretation of the CRA.

### 1.2 Scope and Context

This technical advisory is intended for guidance purposes only. The recommendations and best practices described herein are non-mandatory and do not create or modify any legal, regulatory, or compliance obligations.

The scope of this technical advisory is limited to Software Bill of Materials and does not cover other emerging Bill of Materials (BOM), such as Software Bill of Materials for AI, Hardware Bill of Materials (HBOM), Cryptographic Bill of Materials (CBOM) or other variants. While all artifacts may share some common principles, they also have differentiators and therefore are considered out of scope for this advisory.

This technical advisory remains sector-agnostic and applicable across all types of organisations regardless of their operational environment or industry. It is primarily focused on organisations that are at the early stage of SBOM adoption, and it does not provide a framework for assessing and improving organisational maturity. Future editions may cover the topic more extensively.

```
1.3      Note on the current version of the document
The current version of the document is released as a result of the ENISA call for feedback ( ) which
                             th                                 rd
took place between the 17  of December 2025 and the 23  of January 2026 and it is heavily
influenced by the survey results presented at ENISA’s SBOM Adoption State of Play 2026 published
         th                5
```

on the 9 of June 2026 ( ). Via the call for feedback ENISA received 67 contributions from public and private stakeholders, cybersecurity experts, and the open-source community.

Based on this feedback and the survey results, ENISA recognised the need to transform the “SBOM Landscape Analysis: Towards an implementation guide” into a “Technical Advisory for Software Bills of Materials” to better respond to the needs and feedback of the ecosystem. Regulation (EU) 2024/2847 of the European Parliament and of the Council of 23 October 2024 on horizontal cybersecurity requirements for products with digital elements and amending Regulations (EU) No 168/2013 and (EU) 2019/1020 and Directive (EU) 2020/1828 (Cyber Resilience Act) (OJ L, 2024/2847, 20.11.2024, ELI: http://data.europa.eu/eli/reg/2024/2847/oj). ENISA, ‘Call for feedback: Advancing software supply chain security together!’, press release, 17 December 2025. ENISA, SBOM Adoption State of Play – 2026, available at https://www.enisa.europa.eu/publications/sbom-adoption-state-of-play-2026 Finaly, this version also reflects the feedback provided by experts participating in the SBOM Workstrand under the CRA Expert Group as part of the review cycle conducted between 31 July and 11September 2026.

Acknowledgements We would like to publicly thank all stakeholders that provided their views and feedback! All contributions have been reviewed and, to the maximum extent possible, the recommendations and observations have been addressed in this final version. This document may go through regular revisions.

## 2. SBOM Architecture and Data Flows

### 2.1 How Software Bill of Materials works

An SBOM is a structured inventory that captures software components and their dependencies for a given software product. Creating this "list of ingredients” gives manufacturers and users a better understanding and greater visibility into the “ingredients” of their software product, who produced them, where they came from and whether those “ingredients” may pose any risks. The SBOM generators gather information from different sources in order to effectively identify first-party components, open-source libraries, third-party commercial libraries, operating system packages, container images etc. Indicative sources of information are:

- source code repositories,

- build artifacts,

- package manager manifests,

- lock files,

- container images,

- binary analysis.

For each of the identified software components, the SBOM generator then collects and corelates metadata such as component name, component version, component creator, unique identifiers, license information, external references and dependencies. The scope and completeness of the collected metadata depend on its availability, the SBOM generator’s analysis methods, and the selected SBOM data model (e.g. CycloneDX or Software Package Data Exchange (SPDX)). The result is not merely a list of components but also a representation of their dependency relationships. Upon the completion of the software composition analysis, the metadata collection and relationship discovery, an SBOM is generated in a standard machine-readable format, most commonly CycloneDX or SPDX. The SBOM can be generated and stored as JSON, XML, YAML or Tag-Value. It is important to highlight that SBOMs can be generated in different phases of the Software Development Lifecycle (SDLC). SBOMs generated in different SDLC phases serve different needs and contain different information.

The generation of an SBOM provides limited value unless it is actively consumed to support operational and security processes. The benefit of an SBOM lies in its integration into use cases such as vulnerability management, software asset inventory, license compliance, procurement, and regulatory compliance.

The need to treat an SBOM as more than a compliance artifact, is also reflected in the findings of the ENISA SBOM Adoption State of Play 2026, as respondents identified industry consensus on best practices for integrating SBOM production and consumption into software development practices as the highest priority (23%), followed by best practices for integrating SBOMs into risk and compliance processes (19%) and guidance on how SBOM production and consumption methods should evolve over time (19%). These findings highlight that organisations consider the operational integration of SBOMs into existing development, security, and governance workflows as a crucial step for a mature SBOM adoption.

#### 2.1.1 Data Model

With the aim to enable interoperability and consistency throughout the SBOM generation and consumption, authoritative bodies have published guidance on the data fields for SBOMs. The German Federal Office for Information Security (BSI) has published a technical guideline defining the required data fields, while the U.S. Cybersecurity and Infrastructure Security Agency (CISA), building upon the existing work previously published by the National Telecommunications and Information Administration (NTIA), defines the “Minimum Elements for a Software Bill of Materials”. Both publications provide a baseline for generating SBOMs. The table below attempts to map the BSI required data fields with the U.S. CISA defined minimum elements in an effort to support organisations in producing SBOMs that satisfy international interoperability and regulatory requirements.

```
                     Technical Guideline                                       U.S. CISA
Data Fields          BSI TR-03183: Part 2 Software        Data Fields          “Minimum Elements for a
                                        6                                      Software Bill of Materials
                     Bill of Materials ( )                                                7
                                                                               (SBOM)” ( )
SBOM Metadata
                     Email address of the entity that
                     created the SBOM. If no email                             The name of the entity that
Creator of the       address is available this MUST       SBOM Author          creates the SBOM data for the
SBOM                 be a “Uniform Resource Locator                            primary component.
                     (URL)”, e.g. the creator’s home
                     page or the project’s web page.
                                                                               Identifier designated by the
                                                                               SBOM Author to specify a
-                    -                                    SBOM Version         change in the SBOM
                                                                               document from a previously
                                                                               identified version or to indicate
                                                                               that it is the first version.
SBOM-URI             “Uniform Resource Identifier         -                    -
                     (URI)” of this SBOM.
                                                          SBOM Data            The name of the data format
-                    -                                    Format Name          used to represent the SBOM
                                                                               data.
                                                          SBOM Data            Identifier designated by the
-                    -                                    Format Version       SBOM data format to specify
                                                                               the version of the data format.
-                    -                                    SBOM Author          A digital signature attributable
                                                          Signature            to the SBOM Author.
                                                          SBOM Tool            The name of the tool used by
-                    -                                    Name                 the SBOM Author to generate
                                                                               or amend the SBOM.
```

BSI, Technical Guideline BSI TR-03183: Cyber Resilience Requirements for Manufacturers and Products Part 2: Software Bill of Materials, available at https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI- TR-03183-2_v2_1_0.html CISA, 2026 Minimum Elements for a Software Bill of Materials (SBOM), available at https://www.cisa.gov/resources-tools/resources/2026-minimum-elements-software-bill-materials-sbom

```
                                                        SBOM Tool           Identifier for the version of the
-                   -                                   Version             tool identified in the SBOM
                                                                            Tool Name element.
                    Date and time of the SBOM data
                    compilation according to the        SBOM                Record of the date and time of
Timestamp           specification of the formats.       Timestamp           the most recent update to the
                    Note: It is recommended to only                         SBOM data.
                    use timestamps in UTC.
                                                                            The relative software lifecycle
                                                        SBOM                phase and data available at
-                   -                                   Generation          the time the SBOM Author
                                                        Context             generated the SBOM (before
                                                                            build, during build, after build).
```

Component Data Email address of the entity that created and, if applicable,

```
Component           maintains the respective            Component           The name of an entity that
creator             component. If no email address      Producer            creates, defines, and identifies
                    is available this MUST be a                             components.
                    “Uniform Resource Locator
                    (URL)”.
                    Name assigned to the
Component           component by the component
name                creator. If no name is assigned                         The name assigned by the
                    this MUST be the actual             Component           Component Producer to a
                    filename.                           Name                software component.
Filename of the     The actual filename of the
component           component.
                                                                            Identifier used by the
                    Identifier used by the creator to                       Component Creator to specify
Component           specify changes in the              Component           a change in a software
version             component to a previously           Version             component from a previously
                    created version.                                        identified version or to indicate
                                                                            that it is the first version.
                    “Uniform Resource Identifier
                    (URI)” of the source code of the
Source code         component, e.g. the URL of the
URI                 utilised source code version in
                    its repository, or if a version
                    cannot be specified the utilised
                    source code repository itself.
URI of the          “Uniform Resource Identifier
deployable          (URI)”, which points directly to
form of the         the deployable form of the                              Identifier(s) used to identify a
component           component.                          Component           component or serve as a look-
                    Other identifiers that can be       Identifiers         up key for relevant databases.
                    used to identify the component
Other unique        or to look it up in relevant
identifiers         databases, such as Common
                    Platform Enumeration (CPE) or
                    Package URL (purl).
URL of the          Contains the “Uniform Resource
security.txt        Locator (URL)” of the
(optional)          component
                    creator’s security.txt.
 Hash value of       Cryptographically secure
 the deployable      checksum (hash value) of the
 component           deployed/ deployable
                     component.
                     Cryptographically secure                                  The output generated from
                     checksum (hash value) of the         Component            applying a cryptographic hash
 Hash value of       component source code. A             Hash Value           algorithm to an executable
 the source          specific algorithm how to create                          component artifact.
 code of the         a hash value of multiple source
 component           files or a source code tree, and
 (optional)          which hash algorithm is utilised
                     for that has not yet been
                     determined.
                                                                               The cryptographic algorithm
 -                   -                                    Component            used to compute the
                                                          Hash Algorithm       Component Hash Value of the
                                                                               software component.
 Distribution        Distribution licence(s) of the
 licences            component under which it can
                     be used by a licensee.
 Original            The licence(s) that have been                             The identifier(s) for the
 licences            assigned by the creator of the       Component            license(s) under which the
                     component.                           License              software component is
                                                                               available.
 Effective           The licence under which the
 license             component is used by the
 (optional)          licensee that is the creator of the
                     current SBOM.
 Dependencies        Enumeration of all components        Component            The relationship between two
 on other            on which this component is           Dependency           components, given that one
 components          directly dependent, or which this    Relationship         component is necessary for
                     component contains.                                       the operation of the other.
                     Describes whether the
 Executable          component is executable;             -                    -
 property            possible values are “executable”
                     and “non-executable”.
                     Describes whether the
 Archive             component is an archive;             -                    -
 property            possible values are “archive”
                     and “no archive”.
                     Describes whether the
 Structured          component is a structured file,
 property            i.e. metadata of the contents is     -                    -
                     still present; possible values are
                     “structured” and “unstructured”.
                                         Table 1 - Data Models
2.1.2     SBOM Formats
```

The SBOM format is also a determining factor for interoperability across the software supply chain. Standardized formats provide a common data model that enables software producers, consumers, security tools, vulnerability management platforms, and compliance solutions to process and exchange software composition analysis information in a consistent manner. ENISA’s SBOM Adoption State of Play 2026 mentions that almost 73% of the organisations use CycloneDX or SPDX.Table 2 presents the two predominant formats based on their current version.

```
                       SPDX (System Package Data                                     9
                                             8                   CycloneDX V 1.7 ( )
                       Exchange) V 3.0.1 ( )
                       Comprehensive framework for
                       documenting system component              Security-focused approach to software bill
                       information, with a historical focus      of materials, emphasising vulnerability
Description            on supporting detailed software           tracking, cryptographic integrity, and
                       metadata to enable tracking of            comprehensive dependency analysis.
                       vulnerabilities, licensing, and
                       dependencies for product lines.
                       SPDX® Specification v2.2.1 is an
                       ISO-standardised format (ISO/IEC          Ratified as ECMA-424 by ECMA
                       5962:2021).                               International ( ).
Standard/Backing  SPDX 3. in process at ISO to be                Maintains a formal standardisation process
                       listed as an update to ISO/IEC            and governance model through ECMA
                       5962:2021.                                Technical Committee 54 (TC54).
                       SPDX 3.0 has been ratified as an          Currently pursuing ISO JTC1 FastTrack.
                       OMG standard ( ).
                       Risk Analysis: Providing clear,
                       machine-readable metadata to
                       support product line risk analysis,       Vulnerability Management: Enabling precise
                       including vulnerability management        correlation between components and
                       (native CVE & VEX metadata, CSAF          security vulnerabilities with native VEX
                       and other formats, precise license        (Vulnerability Exploitability eXchange)
                       compliance metadata, and                  support.
                       dependency tracking), precise
                       license compliance metadata, and
                       dependency tracking.
Key Requirement        Supply Chain Transparency:
                       Enabling comprehensive component          Security Automation: Facilitating seamless
                       provenance and cryptographic              integration with security tools and CI/CD
                       integrity, together with rich             pipelines through lightweight, efficient
                       relationship options for creation of      formats.
                       knowledge graph.
                       Regulatory Alignment: Meeting             Operational Visibility: Documenting not just
                       increasing demands for software           static components but runtime services,
                       transparency in regulated industries.     APIs, and operational dependencies.
                       Interoperability: Establishing a          Cryptographic Integrity: Providing robust
                       common language for software              verification mechanisms for supply chain
                                                                 attestation and component authentication.
```

The Linux Foundation, The System Package Data Exchange® (SPDX®) Specification Version 3.0.1, available at https://spdx.github.io/spdx-spec/v3.0.1/ OWASP, Authoritative Guide to SBOM – Implement and optimize use of Software Bill of Materials, available at https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-SBOM-en.pdf OMG Standard, available at https://www.omg.org/spec/SPDX/3.0/About-SPDX EXCMA-424, available at https://ecma-international.org/publications-and-standards/standards/ecma-424 composition across diverse toolchains and ecosystems.

Table 2 - SBOM Formats

#### 2.1.3 SBOM Types

It is important to understand that the selection of the SBOM format is not the only decisive factor influencing the information that the SBOM is going to contain. Based on “when” the SBOM is generated, it may contain different forms of information and serve different purposes. The choice of “when” to generate SBOMs should serve the operational needs of the Organization but also align with the applicable regulatory requirements.

In this case, the categorisation of SBOMs derives from the phase of the SDLC under which they are generated. The most recognised SBOM types based on the U.S. CISA types of SBOM ( ) are:

```
SBOM           Definition                Information Potentially              Indicative Use
Type                                     Captured
                                             •    Planned third-party              •    Architectural
                                                  libraries                             decisions
               SBOM of intended              •    Open-source packages             •    Licencing purchase
               design of included            •    Commercial                       •    Threat Modeling
Design         components (some of                components                       •    Regulatory
               which may not exist)          •    External services and                 requirements
               for a new software                 APIs                                  management
               artifact.                     •    Expected versions
                                             •    Intended licensing
                                                  model
               SBOM created                  •    Existing components              •    Dependency visibility
               directly from the                  from the source code             •    Early vulnerability
               development                   •    Direct dependencies                   detection
Source         environment, source                from third-party and
               files, and included                open-source
               dependencies used                  components
               to build a new                •    Exact versions
               product artifact.             •    Licenses
               SBOM generated as             •    Direct dependencies              •    Regulatory
               part of the process of        •    Transitive                            compliance
               building the software              dependencies                     •    Vulnerability
               to create a releasable        •    Linked libraries                      Assessment
               artifact (e.g.,                                                     •    Software
               executable or                 •    Generated artifacts                   transparency
Build          package) from data            •    Build-time packages
               such as source files,
               dependencies, built           •    Operating system
               components, build                  components
               process ephemeral
               data, and other               •    Exact versions
               SBOMs.                        •    Cryptographic hashes
```

U.S. CISA, Types of Software Bill of Materials (SBOM), available at https://www.cisa.gov/resources-tools/resources/types-software-bill-materials-sbom

- Supplier Information

- Dependency graph

- Package URLs

- CPE identifiers

- Licenses

```
                                                     •    Direct Dependencies                   •     License compliance
                 SBOM generated                      •    Transitive                            •     Provenance
                 through analysis of                      dependencies                                verification
                 artifacts (e.g.,                    •    Linked Libraries                      •     Supply chain risk
                 executables,                        •    Generated artifacts                         assessment
                 packages, containers,                                                          •     Security certification /
                 and virtual machine                 •    Versioning                                  verification
Analysed         images) after its                   •    Cryptographic
                 build. Such analysis                     information
                 generally requires a
                 variety of heuristics.              •    Licenses
                 In some contexts, this
                 may also be referred                •    Integrity validation
                 to as a “3rd party”                 •    Software origin
                 SBOM.
                                                     •    Supplier trust
                                                          information
                 SBOM provides an                    •    Installed packages                    •     Enterprise-level asset
                 inventory of software               •    Container images                            inventory
                 that is present on a                                                           •     Patch management
                 system. This may be                 •    Environment-specific
                 an assembly of other                     dependencies                          •     Environment-specific
                 SBOMs that                          •    Platform-specific                           risk assessment
Deployed         combines analysis of                     libraries                             •     Configuration
                 configuration options,                                                               management
                 and examination of
                 execution behavior in
                 a (potentially
                 simulated)
                 deployment
                 environment.
                 SBOM generated                      •    Dynamically loaded                    •     Threat detection
                 through instrumenting                    libraries                             •     Attack surface risk
                 the system running                  •    Plug-ins                                    assessment
                 the software, to
                 capture only                        •    Runtime modules                       •     Runtime monitoring
                 components present                  •    Container sidecars
Runtime          in the system, as well
                 as external call-outs               •    Injected agents
                 or dynamically loaded
                 components. In some                 •    Shared services
                 contexts, this may
                 also be referred to as
                 an “Instrumented” or
                 “Dynamic” SBOM.
                                               Table 3 - SBOM Types
```

### 2.2 SBOM Lifecycle

Having established the key concepts of the SBOM data models, formats and types, this section presents the SBOM lifecycle and architecture. The SBOM provides added value when it is continuously managed throughout the SDLC and follows the software’s evolvement while components are added, updated, altered or deleted through new software releases.

A structured and automated SBOM lifecycle aims at ensuring that SBOMs are properly produced and consumed internally and externally. To highlight the need for this notion, a big gap was identified in the ENISA SBOM Adoption State of Play 2026, between what organisations need from SBOMs and what they actually receive. While 36 % of respondents stated that their organisations need all primary components and direct dependencies with declared known unknowns, only 29 % actually receive them. Furthermore, 24 % need SBOMs with full depth analysis, but only 14 % receive them. Finally, 27 % require SBOMs with depth analysis including declared known unknows, yet only 12 % receive them. This section presents the SBOM lifecycle from both a conceptual and a technical perspective. . It starts by illustrating the SBOM life-cycle phases from generation to consumption and continuous maintenance, then presents how these phases can be integrated and automated into a CI/CD pipeline and finally lists the available open-source tool stack to support all defined phases.

#### 2.2.1 SBOM Lifecycle Phases

Figure 1 depicts the conceptual perspective of the SBOM lifecycle aligned with the key principles of SBOM. The lifecycle begins with the software build and SBOM generation based on the necessary sources of information, progresses to the SBOM validation to assess the quality of the generated SBOM, followed by cryptographic signing to protect its integrity and authenticity, secure storage, operational consumption and continuous maintenance and updates.

Figure 1 - SBOM Lifecycle

#### 2.2.2 SBOM as part of a CI/CD Pipeline

The integration of SBOM generation and consumption into CI/CD pipelines is increasingly adopted and recognised as one of the best practises to achieve completeness, accuracy and trustworthiness. Automation enables organisations to generate, validate, update and consume up-to-date SBOMs. The findings of the SBOM Adoption State of Play 2026 reflect this, as 41 % of the organisations reported that they aim to fully automate SBOM generation for each release/build. However, automation is still a work in progress after the built stage as only 26 % of respondents believe that their organisations will fully automate SBOM updates across the product support period and almost 23 % believe that their organisations will partially automate this process.

While the previous section presented the conceptual perspective of the SBOM lifecycle, this section presents the technical implementation of SBOM as part of a CI/CD pipeline. The architectural diagram in Figure 2 aligned with the defined SBOM lifecycle phases depicts the integration of SBOM into the SDLC and the automation of each phase.

Each phase includes the key elements and processes to be considered successful along with basic failure points. This should not be interpreted as an exhaustive list of steps and aspects to consider when generating and consuming SBOMs but rather as an example of how SBOM integration and automation could be implemented.

The process begins with the source code build which produces the sources of information and then triggers the generation of SBOM. The SBOM generators attempt to identify the software components, extract relevant metadata, analyse dependencies, and produce machine-readable SBOMs in a standardized format (e.g., SPDX or CycloneDX). The generator collects, correlates, and structures metadata from the software build process and associated repositories. Upon the successful generation of the SBOM, the validation process is triggered to assess if the SBOM is syntactically correct, conforms to the selected SBOM specification and contains the required metadata before triggering the next process. It is essential to also validate the component identifiers during this process.

Once validated, the SBOM is cryptographically signed to ensure authenticity and integrity before being stored in a repository or registry, to be consumed by downstream security tools. The SBOM maintenance and update phase depicts the continuous process of keeping the SBOM up-to-date and synchronised with the current version of the software. Indicative automatic triggers are included to reflect the need to re-generate SBOMs and follow the lifecycle phases. Finally, indicative security controls and trust mechanisms are depicted to protect the integrity, authenticity, and availability of SBOMs throughout the pipeline, enabling organisations to produce reliable SBOMs that can be consumed across development, security, operations, procurement and compliance teams.

Figure 2 - SBOM Architectural Diagram

#### 2.2.3 SBOM Open-source Tooling Landscape

Integration and automation are only possible when supported by the necessary tool stack. Based on the SBOM Adoption State of Play 2026, 33% of the organisations rely on open-source tools, thus Table 4 identifies open-source tools that could be integrated into a CI/CD pipeline to support the end-to-end SBOM lifecycle for both CycloneDX and SPDX formats. The tools are categorised based on the SBOM lifecycle phases and should not be considered as an exhaustive, but rather than an indicative list to support the purpose of this document. The following table demonstrates that while some tools are format-agnostic and can support both SBOM formats, certain stages like SBOM generation, schema validation, and/or consumption require format-specific tooling.

```
SBOM           Generation                  Validation                                               Cryptographic             Store              Consumption
Lifecycle                                                                                           Signing
Phase /
Format         Automation                  Schema                                     Quality       Attestation    Keyless    Workflow           Vulnerability Management
                                                                                      Score                                   artifact
               cyclonedx-maven-plugin      CycloneDX CLI                              sbomqs,       GitHub CLI     Cosign,    actions/upload-    Grype,
               (Java/Maven),                                                          sbom-         (gh            Sigstore   artifact@v4        Trivy,
               @cyclonedx/ cyclonedx-                                                 scorecard     attestation                                  OWASP Dependency Check,
               npm (npm),                                                             (eBAY)        generate)                                    OWASP Dependency-Track,
               Cyclonedx-gomod (Go),                                                                                                             GitHub Dependency Review,
CycloneDX
13             Cyclonedx dotnet tool                                                                                                             OWASP dep-scan,
( )            (.NET),                                                                                                                           OSV-Scanner (Go),
               cdxgen,                                                                                                                           CVE Binary Tool,
               Syft,
               SBOMit
               spdx-gradle-plugin,         tools.spdx.org/app/validate/               sbomqs,       GitHub CLI     Cosign,    actions/upload-    Fossology,
               spdx-maven-plugin,          https://tools.spdx.org/app/ntia_checker/   sbom-         (gh            Sigstore   artifact@v4        sbomify,
               spdx/tools-python,                                                     scorecard     attestation                                  sbom-cve-check,
               spdx/tools-java,                                                       (eBAY)        generate)                                    tools.spdx.org/app/spdx3_viz,
SPDX (14)      spdx/tools-golang,                                                                                                                GitHub Dependency Review
               yocto,
               linux (make spdx),
               zephyr (west spdx),
               kubernetes-sigs/bom,
```

https://cyclonedx.org/tool-center/ https://spdx.dev/use/spdx-tools/ GitHub SBOM, Microsoft sbom-tool (.NET), Syft, Trivy, ORT, SBOMit Table 4 - Open-source SBOM Tool Stack The fragmentation of SBOM formats poses a significant challenge to the implementation and tooling landscape. Tooling exists for seamless conversion between the formats, such as OpenSSF's ( ) Protobom.

https://sbom-catalog.openssf.org/catalog/#/Circle/Normalize/HowTo

## 3. SBOM Threats and Risks

### 3.1 SBOM Threats

This section presents an SBOM focused STRIDE threat model to support organisations in the identification and mitigation of threats across the SBOM lifecycle. The STRIDE threat model, developed by Microsoft, provides a structured framework for the continuous assessment of threats. It is divided in six categories: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service and Elevation of privilege.

The identified threats not only focus on the SBOM artifact but rather on the entire SBOM ecosystem (e.g., SBOM generation tools, validation and signing service, repositories, consumption pipelines) (Table 5).

```
STRIDE                 Threat                 Threat Scenario         Potential Impact      Indicative Mitigation
                                                                                            Activities
                                              Impersonation of a
                                              legitimate SBOM
                       Spoofed Identity of    Author or Software      Trust and use         - Digital signatures
                                                                      malicious software
                       SBOM Author or         producer to                                   - Supplier identity
                       Software Producer      distribute              or compromised        verification
                                                                      components.
                                              compromised
                                              SBOM.
                                                                      Gain access to
                                              Impersonation of a      restricted            - Consumer identity
                                              legitimate consumer     information that      verification
                       Spoofed
                       Consumer Identity      to gain unauthorised    assist attacker       - Controlled SBOM
                                              access to restricted    reconnaissance        sharing
                                              SBOM.                   and targeted
                                                                      attacks.
                                              SBOM appears to                               - Build attestations
                       Spoofed CI/CD          be generated from a     Trust in malicious    - Build Attestation
                       pipelines              trusted CI/CD           software              - Authenticated CI/CD
Spoofing                                      pipeline.               provenance.           pipelines
                                              A malicious tool        Trust and use
                       Spoofed SBOM           generates SBOM          malicious or          - Trusted tool use
                       generation tool        that appear to be       compromised           - Code signing
                                              valid.                  SBOM.
                                                                      Trust and use
                                                                                            - Secure key
                       Spoofed                Stolen certificates     malicious SBOM        Management
                       certificates           are used to sign        appearing to be       - Certificate
                                              malicious SBOM.         legitimate from a     revocation
                                                                      trusted source.
                                                                                            - SBOM Signature
                                                                                            verification
                                              Compromised             Trust and use
                                                                                            - Compare
                                              repository mirror       malicious SBOM
                       Spoofed SBOM                                                         cryptographic hashes
                       repository mirror      distributes malicious   appearing to be       against trusted
                                              SBOM appearing to       legitimate from a     metadata
                                              be legitimate.          trusted source.
                                                                                            - Monitor repository
                                                                                            certificates
```

Components,

```
                                              versions or             Incorrect
                                              dependency              dependency            - Integrity verification
                       Tampered SBOM
                       data                   relationships are       analysis and          - Signature
                                              tampered (added,        vulnerability         verification
                                              deleted, or altered)    identification.
                                              after generation.
                                              Component               Inaccurate
                                              versions, hashes,       software
                       Tampered                                                             - Cryptographic
                       metadata               licenses or suppliers   inventories and       integrity check
                                              are tampered before     compliance
                                              SBOM generation.        breach.
                                                                      Lack of proper
                       Tampered hashes        Cryptographic           artifact              - Document Signature
Tampering                                     hashes are altered.     verification.
                                                                      Trust and use
                                                                      malicious SBOM
                       Tampered               Build provenance is     appearing to be       - Signed attestations
                       provenance             altered.
                                                                      from a trusted
                                                                      source.
                                                                      Use and act upon
                                                                      compromised
                                                                      resources
                                                                      appearing as          - Digital signatures
                       Tampered external      PURLs or CPEs are
                       references             altered.                known and trusted     - External references
                                                                      to conduct            verification
                                                                      vulnerability
                                                                      matching and
                                                                      assessment.
                                              Software Producer
                       Software Producer      or SBOM Author                                - Digital signatures
                       or SBOM Author         denies the              Lack of               - Timestamps
                       repudiation            generation or           accountability.       - Audit logs
                                              publication of
Repudiation                                   SBOM.
                                              SBOM Author or
                       Distribution           Software producer       Reduced supply        - Repository logging
                       repudiation            denies the              chain                 - Signed releases
                                              distribution of an      transparency.
                                              SBOM.
                                              Lack of controlled      Assist attacker to
                                              SBOM sharing            conduct               - Controlled SBOM
                       Technology stack       reveals software        reconnaissance        sharing
                       disclosure             frameworks and          and increase          - Access control
                                              versions.               attack surface.
                                              Proprietary software    Intellectual          - Controlled SBOM
                       Component              components              property rights       sharing
                       disclosure             become visible.         breach.               - Access control
                                              Supplier
                       Supplier                                       Increased attack      - Controlled SBOM
                       relationship           relationships           surface and more      sharing
Information            disclosure             become publicly         targeted attacks.     - Access control
Disclosure                                    visible.
                                              Software
                                              architecture and
                                                                      Increased attack      - Controlled SBOM
                       Dependency graph       dependency              surface and more      sharing
                       disclosure             relationships           targeted attacks.     - Access control
                                              become publicly
                                              visible.
                                              Exact software
                                                                      Faster exploitation   - Controlled SBOM
                       Version disclosure     versions enable         using known           sharing
                                              vulnerability           CVEs.                 - Access control
                                              mapping.
```

Embedded

```
                                                  certificates or key       Assist attacker to
                          Cryptographic           identifiers leak trust    conduct                 - Key management
                          material / metadata     relationships.            reconnaissance          - Access control
                          disclosure              Hashes or identifiers     and increase            - Audit Logging
                                                  reveal internal           attack surface.
                                                  release processes.
                                                                            SBOM
                                                                                                    - Redundant
                          SBOM repository         SBOM repositories         unavailable during      infrastructure
                          DoS                     are not available.        incident response       - DDoS protection
                                                                            or procurement.
                                                  Extremely large or
                                                  deeply nested
                                                  SBOM cause                Resource                - SBOM size
                          Parser DoS              excessive                 exhaustion and          limitation
  Denial of Service                               computation and           parser failures.        - Parser hardening
                                                  exhaust parser
                                                  resources.
                                                                            Resource
                                                                            exhaustion and
                                                                                                    - SBOM size and
                                                  Large number of           potential               number limitation.
                          Storage DoS             SBOM exhaust              disruption of the
                                                  repository capacity.      CI/CD pipelines if      - SBOM Retention
                                                                                                    Policy
                                                                            SBOM is a
                                                                            mandatory step.
                                                  Elevated privileges       Corrupted SBOM          - Access control
                          CI/CD pipeline                                    generation that
                          privilege escalation    in the build pipeline     appears to be           - CI/CD pipeline
                                                  generating SBOMs.         legitimate.             hardening
                                                                            Use and
                                                  Unauthorised
  Elevation of            SBOM repository         access to SBOM            distribution of         - Access control
  Privilege               privilege escalation    repository.               compromised
                                                                            SBOM.
                                                  Compromised
                          Signing                 infrastructure            Use and trust of        - Key management
                          Infrastructure          creates trusted           compromised             - Access control
                          privilege escalation    SBOM.                     SBOM.
                                              Table 5 - SBOM Threat Model
3.2       SBOM General Risks
```

Complementary to the identification of threats, this section presents some general risks that jeopardise the SBOM accuracy, integrity and operationalisation. Table 6 lists indicative risk scenarios, their potential impact and suggested mitigation activities.

```
Risk                      Risk Scenario                     Potential impact                  Indicative Mitigation
                                                                                              Activities
                          SBOMs generated using a           Reduced interoperability          - Generate SBOMs using
Non-standardised          proprietary, custom,              between producers and             established standards,
SBOM Format               unstructured, or otherwise        consumers.                        such as SPDX or
                          non-interoperable format.                                           CycloneDX
                                                            Reduced automation and            - SBOMs in a machine-
SBOM in a Non-            SBOMs provided only in a          scalability of SBOM               readable format suitable
Machine-Readable          format intended primarily         consumption and inability to      for automated processing
Format                    for human consumption.            automatically correlate
                                                            components with
                                                            vulnerability databases.
```

    - Automatic generation at release

```
                         Components or                   Vulnerabilities remain          - CI/CD integration
Incomplete SBOM          dependencies are not fully      undiscovered and software
                         covered by the SBOM.            inventory is incomplete.        - Documented treatment
                                                                                         of known unknowns and
                                                                                         missing metadata
                         The SBOM no longer              Insufficient vulnerability      - Regenerate SBOMs
Outdated SBOM            reflects the current version    management and                  based on the above
                         of the software.                inaccurate risk assessment.     identified triggers
                                                                                         Use standardised
                                                                                         ecosystem-aware
                                                                                         component identifiers.
                                                                                           - Use repository URL
                                                                                         from upstream source
                                                                                         repository, OR
                                                                                           - Use Package URL
                                                                                         combined with
                         Components are not                                              namespace, exact
Poor component                                           Inaccurate vulnerability
identification           uniquely identified across      correlation and matching.       version, and
                         ecosystems.                                                     cryptographic hashes
                                                                                         where applicable OR
                                                                                           - Use CPE, following
                                                                                         naming convention
                                                                                         consistently with
                                                                                         namespace, exact
                                                                                         version and
                                                                                         cryptographic hashes
                                                                                         where applicable
                                                                                         - Select appropriate
                         SBOM generation tools
                                                                                         SBOM generation
                         relying on heuristic analysis
                                                                                         techniques according to
                         to identify components and      Excessive vulnerability
                                                                                         the software ecosystem,
                         dependencies, generate          alerts and alert fatigue due
                                                                                         build process, artifact
                         SBOMs that may contain          to false-positive
                                                                                         type, and intended
Insufficient SBOM        components that are not         components, missed              SBOM use case,
Accuracy                 actually present or used        vulnerabilities due to
                                                                                         - Validate generated
                         (false positives), omit         omitted or incorrectly
                                                                                         SBOMs against S/W
                         components that are             identified components and/      artifacts,
                         present (false negatives),      or incorrect vulnerability
                         or incorrectly report           matching.                       - Perform completeness
                                                                                         and accuracy checks,
                         versions, dependency
                         relationships, or identifiers.                                  - Validate component
                                                                                         identifiers
                                                                                         - Cryptographically bind
                         SBOMs not strongly and
                                                         Incorrect SBOM may be           the SBOM to the exact
                         unambiguously associated
                                                         used for vulnerability          artifact using a
Weak SBOM-to-            with the exact software
Artifact Binding                                         analysis increasing false       cryptographic hash or
                         artifact, build, release,       positives or false negatives    immutable digest
                         container image, or             in vulnerability matching.      - Verify the SBOM-to-
                         package that it describes.                                      artifact association
                                                                                         - Consume SBOMs for
Limited SBOM             SBOMs are generated but         Reduced value from SBOM         asset management,
operationalization       not integrated into the         adoption and ineffective        vulnerability
                         SDLC.                           vulnerability management.       management, license
                                                                                         compliance etc.
                                                                                         - Define an SBOM
                         Failure to retain historical    Inability to determine          retention policy
                         SBOMs and their
Insufficient SBOM                                        whether historical or           - Retain SBOMs per
Retention and            associated evidence (e.g.       deployed software versions      release
Lifecycle Evidence       previous SBOM versions,         contain a newly discovered      - Maintain version history
                         build identifiers, artifact     vulnerable component.           - Maintain SBOM-to-
                         digests, signatures, VEX                                        artifact traceability
                          documents) for an                                                - Define lifecycle disposal
                          adequate period.                                                 procedures
                                                                                           - Combine SBOM data
                                                                                           with VEX to assess
                          Every vulnerability                                              exploitability and
Lack of                   identified through the          Vulnerability overflooding       reachability
vulnerability                                             and delayed remediation of
                          SBOM is treated equally                                          - Incorporate asset
prioritization            without considering             highly targeted                  criticality and exposure
                          exploitability.                 vulnerabilities.                 - Establish risk-based
                                                                                           vulnerability prioritization
                                                                                           process
                                          Table 6 - SBOM General Risks
```

## 4. SBOM Best Practices

This section presents indicative best practices for secure SBOM integration and automation based on the defined SBOM lifecycle while also complementing the suggested mitigation activities for the identified threats and general risks presented in the previous section.

### 4.1 SBOM Integration and Automation

For a minimum viable implementation, begin with build-time integration as the foundation. This approach captures dependencies when they are most accurately known and requires minimal infrastructure changes.

Leverage existing continuous integration infrastructure by adding SBOM generation as a pipeline stage. Utilise command-line interfaces compatible with current build environments and store generated SBOMs alongside build artifacts using existing artifact repositories. Finally, implement validation through standard pipeline testing mechanisms. (Figure 3) Figure 3 - Pipeline Integration

#### 4.1.1 Integration Patterns Build-Time Integration Pattern

Integrate generation immediately following successful compilation. Capture both direct and transitive dependencies while build context remains available. Generate supplementary metadata including build environment details and compilation parameters. Many build environments such as Yocto, Kubernetes, Linux, Zephyr, etc. have automatic SBOM generation capabilities already integrated, and the build just needs to enable them.

Event-Triggered Generation Pattern Configure repository webhooks to initiate generation upon specific events. Support multiple trigger types including commit or pull request, and release events. Implement queuing mechanisms to handle concurrent generation requests. Maintain generation history for audit and rollback capabilities.

#### 4.1.2 Common Configuration Requirements Repository Structure Organisation

Establish a dedicated directory for SBOM storage within the repository structure. Maintain separation between source SBOMs and generated outputs. Implement naming conventions correlating SBOMs with their associated components and configure ignore patterns preventing SBOM inclusion in builds.

Pipeline Orchestration Templates Define reusable pipeline segments for SBOM operations. Parameterise templates supporting multiple project types. Include standard validation and implement error handling and retry logic to manage transient failures.

Validation Checkpoints Enforce format validation before artifact publication. Verify licence compatibility against organisational policies. Validate cryptographic signatures when attestation is required. Vulnerability Management Check for known vulnerabilities using configured vulnerability databases. Vulnerabilities identified through SBOM consumption should be linked to defined remediation timelines, severity thresholds and escalation paths. The remediation timelines should consider severity, exploitability, exposure, product criticality, availability of patches and compensating controls. Automation Benefits Automation eliminates manual generation inconsistencies whilst ensuring every build produces corresponding SBOM documentation. This continuous generation enables immediate vulnerability assessment when new threats emerge, while historical SBOM retention supports forensic analysis and compliance demonstration. Finally, automated validation prevents non-compliant SBOMs from entering production environments.

Prerequisites for Success Successful integration requires mature continuous integration infrastructure and standardised build processes. Clear policies regarding generation triggers, storage locations, and retention periods must be established, while monitoring capabilities should track generation success rates and identify systematic failures.

SBOM processes should generate evidence for internal audits, conformity assessments, incident response and supervisory requests. This evidence includes generation logs, validation results, signatures, timestamps, release links and retention records.

Finally, organisations should document known gaps, exceptions and “known unknowns” in SBOM coverage, especially where some dependencies cannot be identified, supplier information is unavailable, or binary-only components cannot be fully analysed.

### 4.2 General Security Recommendations

Security controls should be applied end-to-end across the SBOM CI/CD pipeline to protect the main principles of confidentiality, integrity, availability, authenticity and non-repudiation. Table 7 presents indicative security controls to be taken into consideration when building the CI/CD pipelines and their purpose.

```
Lifecycle Phase               Security control                  Purpose
                                                                Restrict access to repositories, CI/CD workflows,
                              Role-based Access Control
                              (RBAC)                            signing service and SBOM repositories based on
                                                                least privilege.
                              Multi-factor Authentication       Protect developer, administrator and CI/CD
                              (MFA)                             platform accounts from credential compromise.
                              Least Privilege                   Minimize permissions to users, service accounts
                                                                and automation.
                                                                Protect communications between pipeline
                              Secure Transport Layer            components using TLS 1.3 with certificate
                                                                validation.
                              Audit Logging                     Record all pipeline activities, including generation,
All Phases                                                      validation, signing events etc.
                              Security Event Alerting           Generate alerts for failed validations, signature
                                                                failures and unauthorized access.
                                                                Protect CI/CD workflows from unauthorized
                              Pipeline Integrity Protection     modification through code review and branch
                                                                protection.
                                                                Maintain version-controlled and approved
                              Configuration Management          configurations for pipeline components and
                                                                security policies.
                                                                Verify the integrity and provenance of SBOM
                              Tool stack verification           generators, validators and supporting tools before
                                                                execution.
Generation                    Trusted repositories              Retrieve dependencies only from authenticated
                                                                and trusted registries or mirrors.
```

Generate verifiable build provenance linking

```
                          Provenance Generation        source, build process, SBOM and software
                                                       artifact.
Validation, Signing,      Secure Secrets Management  Store signing keys, API tokens and repository
Store                                                  credentials in secure vaults where applicable.
Signing, Store            Artifact Binding             Cryptographically associate the SBOM with the
                                                       software artifact it describes.
                                                       Store SBOMs and artifacts in immutable or
                          Tamper-Evident Storage       version-controlled repositories with integrity
Store                                                  protection.
                          Repository Integrity         Detect unauthorized changes to source code,
                          Monitoring                   artifacts or SBOM repositories.
                          Version control              Maintain version history of software artifacts and
                                                       associated SBOMs.
Store, Maintenance &
Update
                          Backup and Recovery          Ensure SBOM repositories, signing material and
                                                       audit logs can be recovered.
                                Table 7 - Security Recommendations
```

## 5. Bibliography

REGULATION (EU) 2024/2847 OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL, 2024. Horizontal cybersecurity requirements for products with digital elements and amending Regulations (EU) No 168/2013 and (EU) No 2019/1020 and Directive (EU) 2020/1828 (Cyber Resilience Act). European Union Agency for Cybersecurity (ENISA), 2026. SBOM Adoption State of Play - 2026. European Union Agency for Cybersecurity (ENISA), 2026. Secure by Design and Default Playbook Version 1.0.

European Union Agency for Cybersecurity (ENISA), 2026. Technical Advisory for Secure Use of Package Managers Version 1.1.

German Federal Office for Information Security (BSI), 2025. BSI TR-03183-2: Cyber Resilience Requirements for Manufacturers and Products - Part2: Software Bill of Materials (SBOM) Version 2.1.0.

U.S. Cybersecurity and Infrastructure Security Agency (CISA), 2026. Minimum Elements for a Software Bill of Materials (SBOM).

Open Worldwide Application Security Project (OWASP), 2025. Authoritative Guide to SBOM - Implement and optimize use of Software Bill of Materials Third Edition.

The Linux Foundation and its Contributors, 2024. The System Package Data Exchange (SPDX©) Specification Version 3.0.1.

U.S. Cybersecurity and Infrastructure Security Agency (CISA) and SBOM Tooling and Implementation WG Contributors, 2023. Types of Software Bill of Materials.

U.S. Cybersecurity and Infrastructure Security Agency (CISA) and SBOM Tooling and Implementation WG Contributors, 2024. Framing Software Component Transparency: Establishing a Common Software Bill of Materials (SBOM) Third Edition.

SBOM Sharing & Exchanging Working Group, 2024. SBOM Sharing Roles and Considerations Open Source Security Foundation (OpenSSF) Best Practices Working Group, 2023. Source Code Management Platform Configuration Best Practices.

Open Source Security Foundation (OpenSSF) Best Practices Working Group, 2023. Concise Guide for Developing More Secure Software.

Open Source Security Foundation (OpenSSF) and its Contributors, 2025. Supply-chain Levels for Software Artifacts Version 1.2.

Open Source Security Foundation (OpenSSF), 2025. Improving Risk Management Decisions with SBOM Data.

Open Source Security Foundation (OpenSSF) and its Contributors, 2025. Supply-chain Levels for Software Artifacts (SLSA) Version 1.2.

Cloud Native Computing Foundation (CNCF), 2026. in-toto Attestation Framework Spec Version 1.2. Open Worldwide Application Security Project (OWASP), 2020. Software Component Verification Standard Version 1.0.

Open Worldwide Application Security Project (OWASP),2025. Software Supply Chain Security Cheat Sheat.

Open Worldwide Application Security Project (OWASP),2025. Dependency Graph & SBOM Best Practices Cheat Sheat National Telecommunications and Information Administration (NTIA), 2021. How-To Guide for SBOM Generation.

National Telecommunications and Information Administration (NTIA), 2021. Software Suppliers Playbook: SBOM Production and Provision Version 1.0.

Microsoft. The STRIDE Threat Model.

Open Source Security Foundation (OpenSSF) End Users Working Group, 2024. Threat Model of Enterprise Open Source Supply Chains.

U.S. National Institute of Standards and Technology (NIST), 2022. NIST Special Publication 800-218 - Secure Software Development Framework (SSDF) Version 1.1.

Open Worldwide Application Security Project (OWASP), 2026. Dependency Track Documentation Version 4.14.

Sigstore Project. Cosign Documentation.

Open Source Security Foundation (OpenSSF) SBOM Everywhere WG, 2025. SBOM Landscape.

## About ENISA

The European Union Agency for Cybersecurity, ENISA, is the Union’s agency dedicated to achieving a high common level of cybersecurity across Europe.

Established in 2004 and strengthened by the EU Cybersecurity Act, the European Union Agency for Cybersecurity contributes to EU cyber policy, enhances the trustworthiness of ICT products, services and processes with cybersecurity certification schemes, cooperates with Member States and EU bodies, and helps Europe prepare for the cyber challenges of tomorrow. Through knowledge sharing, capacity building and awareness raising, the Agency works together with its key stakeholders to strengthen trust in the connected economy, to boost resilience of the Union’s infrastructure, and, ultimately, to keep Europe’s society and citizens digitally secure. More information about ENISA and its work can be found here: www.enisa.europa.eu.

ENISA European Union Agency for Cybersecurity Athens Office Agamemnonos 14 Chalandri 15231, Attiki, Greece Brussels Office Rue de la Loi 107 1049 Brussels, Belgium enisa.europa.eu ISBN: 978-92-9204-813-6
