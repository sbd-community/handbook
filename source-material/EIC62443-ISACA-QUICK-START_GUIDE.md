```
http://www.isagca.org
```
# Security of Industrial Automation

# and Control Systems

## An Overview of ISA/IEC 62443 Standards

## GLOBAL

## CYBERSECURITY

## ALLIANCE


2

###### Executive Summary

```
This document is intended to provide the reader
with a detailed overview of the ISA/IEC 62443
series of standards (series) and technical reports.
The ISA/IEC 62443 series addresses the security
of industrial automation and control systems
(IACS) throughout their lifecycle. These standards
and technical reports were initially developed for
the industrial process sector but have since been
applied to building automation, medical devices
and transportation sectors.
```
```
There are several trends that have made
cybersecurity an essential property of IACS, along
with safety, integrity and reliability. First, over
the last two decades, IACS technologies have
migrated from vendor-proprietary to commercial
off-the-shelf technologies such as Microsoft
Windows™ and TCP/IP networking. Second, the
value of data residing in the IACS for the business
has significantly increased the interconnectivity
of IACS both internal and external to the
```
```
organization. Finally, the means, resources,
skills and motivation of cyber-attackers have
significantly increased. The combination of
these trends has made IACS more vulnerable to
cyberattack. Figure 1 shows some of the notable
cyberattacks that have impacted IACS.
```
```
Initially, the ISA99 committee considered IT
standards and practices for use in the IACS.
However, it was soon found that this was not
sufficient to ensure the safety, integrity, reliability
and security of an IACS. This is because the
consequences of a successful cyberattack on
an IACS are fundamentally different. While
the primary consequences of a successful
cyberattack on IT systems is financial and
privacy loss due to information disclosure, the
consequences for an IACS may additionally
include loss of life or health, damage to the
environment or loss of product integrity. There
are several other differences between IT and
IACS such as performance requirements,
availability requirements, change management,
the time between maintenance windows and
equipment lifetime. [1]
```
```
The International Society of Automation (ISA) and
the International Electrotechnical Commission
(IEC) have joined forces to address the need to
improve the cybersecurity of IACS. The ISA
committee and the IEC Technical Committee 65/
Working Group 10 develop and publish the ISA/
IEC 62443 series. These documents describe a
methodical engineered approach to addressing
the cybersecurity of IACS. They can be purchased
from either organization; the technical content
is identical. The benefits of using a standards-
based approach include reducing the likelihood
of a successful cyberattack, the use of a common
set of requirements among stakeholders,
security throughout the lifecycle and a reduction
in overall lifecycle cost.
```
## Quick Start Guide:

## An Overview of ISA/IEC 62443 Standards

# Security of Industrial Automation

# and Control Systems

```
Date Target Method
2010 Iran Uranium Enrichment Stuxnet
2013 ICS Supply Chain attack Havex
2015 Ukraine Power Grid BlackEnergy, KillDisk
2016 Ukraine Substation CrashOverride
2017 Global shipping company NotPetya
2017 IoT DDos attack BrickerBot
2017 Health care, Automotive,
many others
```
```
WannaCry
```
```
2017 Saudi Arabia Petrochemical TRITON/TRISIS
2017 Multinational Confectionary, Food
& Beverage Company
```
```
NotPetya
```
```
2019 Norwegian Aluminum Company LockerGaga
2021 Critical Infrastructure: Pipeline Ransomware
2023 Asian National Power Grid Chinese malware
```
```
Source: https://www.csis.org/programs/strategic-technologies-program/significant-cyber-incidents
```
```
Table 1: Some notable cyberattacks impacting IACS
```

###### Introduction

This document provides an overview of the ISA/IEC
62443 series and technical reports which specifies
requirements for the security of IACS. The goal of
the ISA/IEC 62443 series is to improve the safety,
reliability, integrity and security of IACS using a risk-
based, methodical and complete process throughout
the entire lifecycle. The ISA/IEC 62443 series
describes a set of common terms and requirements
that can be used by asset owners, product suppliers
and service providers to secure their control systems
and the Equipment Under Control (EUC).

**Scope and Purpose**
The scope of the ISA/IEC 62443 series is the
security of IACS. An IACS is defined as a collection of
personnel, hardware, software and policies involved
in the operation of the industrial process and that
can affect or influence its safe, secure and reliable
operation.

Note that an IACS includes more than the technology
that comprises a control system; it includes the
people and work processes needed to ensure the
safety, integrity, reliability and security of the control
system. Without people who are sufficiently trained,
risk-appropriate technologies, countermeasures and
work processes throughout
the security lifecycle, an IACS
could be more vulnerable
to cyberattack.

Because IACS are
physical-cyber
systems, the impact
of a cyberattack
could be
severe. The
consequences
of a
cyberattack on
an IACS include, but
are not limited to:

```
WWW.ISA.ORG/ISAGCA 3
```
```
Executive Summary .............................................................. 2
```
```
Introduction .......................................................................... 3
Scope and Purpose ......................................................................... 3
ISA/IEC 62443 Series of Standards Development
Organizations ................................................................................... 4
Summary of ISA/IEC 62443 Series of Standards and
Technical Reports ............................................................................ 4
```
```
Fundamental Concepts ........................................................ 6
Security Program ............................................................................. 6
Risk Management ............................................................................ 7
Risk Assessment ......................................................................... 7
Zones and Conduits .................................................................. 7
Cybersecurity Requirements Specification ............................ 7
Threat Modeling ......................................................................... 8
Foundational Requirements .......................................................... 8
Security Levels .................................................................................. 8
Maturity Model ................................................................................. 9
Design Principles .............................................................................. 9
Secure by Design ....................................................................... 9
Reduce Attack Surface .............................................................. 9
Defense in Depth ....................................................................... 9
Essential Functions .................................................................... 9
```
```
Roadmap for the ISA/IEC 62443 Series .............................. 10
Principal Roles ................................................................................ 10
Component, System, Automation Solution and IACS .............. 10
Hierarchical View............................................................................ 11
Lifecycle View .................................................................................. 12
ISA/IEC 62443 Series for Asset Owners ..................................... 12
ISA/IEC 62443 Series for Product Suppliers ............................. 12
ISA/IEC 62443 Series for Service Providers ............................... 12
Integration Service Providers ................................................. 12
Maintenance Service Providers ............................................. 12
```
```
Certification and Training .................................................. 13
ISASecure® Certification ................................................................ 13
ISA Cybersecurity Training ........................................................... 13
ISA Cybersecurity Certificates ...................................................... 14
```
```
Published Standards and Technical Reports .................... 14
```
```
References ........................................................................... 15
```
### Table of Contents

**Security**

```
Figure 1:
The Security Triad
```

4

- Endangerment of public or employee safety
    or health
- Damage to the environment
- Damage to the EUC
- Loss of product integrity
- Loss of public confidence or company
    reputation
- Violation of legal or regulatory requirements
- Loss of proprietary or confidential
    information
- Financial loss
- Impact on entity, local, state or national
    security

```
The first four consequences in the above list
are unique to physical-cyber systems and are
not typically present in traditional IT systems.
Indeed, it is this difference that fundamentally
results in the need for different approaches to
securing physical-cyber systems and caused
standards development organizations to identify
the need for standards that are unique to IACS.
Some other characteristics of IACS that are not
typical in IT systems include: [1]
```
- more predictable failure modes
- tighter time-criticality and determinism
- higher availability
- more rigorous management of change
- longer time periods between maintenance
- significantly longer component lifetimes
- Safety, integrity, availability and
    confidentiality (SIAC) instead of CIA

```
Cyber threat actors include but are not limited
to insiders (accidental or intentional), hacktivists,
cybercriminals, organized crime and state-
sponsored attackers. Types of cyberattacks
include but are not limited to ransomware,
destructive malware, directed remote access
attacks and coordinated attacks on control
systems and associated support infrastructure.
Table 1 lists several noteworthy directed and
non-directed cyberattacks impacting IACS.
```
```
ISA/IEC 62443 Series of Standards
Development Organizations
There are two standards development organizations
involved in the development of the
```
```
ISA/IEC 62443 series of standards and technical
reports:
```
- International Society of Automation – ISA
    Committee
- International Electrotechnical Commission –
    IEC TC65/WG10 Committee

```
There is a formal liaison agreement between
these two standards development organizations.
The ISA/IEC 62443 series of standards and
technical reports are developed primarily by
the ISA99 Committee with input, review, and
simultaneous adoption by both the ISA and IEC.
The one exception is ISA/IEC 62443-2-4, which
was developed by the IEC TC65/WG10 Committee
and adopted by ISA. As a result, whether an
ISA/IEC 62443 document is published by ISA or
IEC, the content is identical except for the non-
normative preface and foreword.
```
```
The United Nations Economic Commission
for Europe (UNECE) confirmed at its annual
meeting in late 2018 that it will integrate the
widely used ISA/IEC 62443 Series into its
forthcoming Common Regulatory Framework
on Cybersecurity (CRF). The CRF will serve as
an official UN policy position statement for
Europe, establishing a common legislative basis
for cybersecurity practices within the European
Union trade markets. [2]
```
```
Refer to the Published Standards and Technical
Reports section at the end of this document for
a complete list of ISA and IEC cybersecurity-
related documents currently available.
```
```
Summary of ISA/IEC 62443 Series of
Standards and Technical Reports
These documents are arranged in four groups,
corresponding to the primary focus and
intended audience. [4]
```
**1. General** —This group includes documents
    that address topics that are common to the
    entire series.
    **- Part 1-1: Terminology, concepts, and**
       **models** introduces the concepts and
       models used throughout the series.
       The intended audience includes anyone
       wishing to become familiar with the
       fundamental concepts that form the
       basis for the series


```
ISAGCA.ORG 5
```
**- Part 1-2: Master glossary of terms**
    **and definitions** is a list of terms and
    abbreviations used throughout the series
**- Part 1-3: System security conformance**
    **metrics** describes a methodology to
    develop quantitative metrics derived from
    the process and technical requirements
    in the standards
**- Part 1-4: IACS security lifecycle and**
    **use cases** provides a more detailed
    description of the underlying lifecycle for
    IACS security, as well as several use cases
    that illustrate various applications
**2. Policies and procedures** —Documents in this
group focus on the policies and procedures
associated with IACS security.
**- Part 2-1: Establishing an IACS security
program** describes what is required to
define and implement an effective IACS
cybersecurity management system. The
intended audience includes asset owners
who have responsibility for the design
and implementation of such a program
**- Part 2-2: IACS security program ratings**
provides a methodology for evaluating
the level of protection provided

```
by an operational IACS against the
requirements in the ISA/IEC 62443 series
of standards
```
**- Part 2-3: Patch management in the**
    **IACS environment** provides guidance
    on patch management for IACS. The
    intended audience includes anyone who
    has responsibility for the design and
    implementation of a patch management
    program
**- Part 2-4: Security program**
    **requirements for IACS service**
    **providers** specifies requirements for
    IACS service providers such as system
    integrators or maintenance providers.
    This standard was developed by IEC
    TC65/WG
**- Part 2-5: Implementation guidance for**
    **IACS asset owners** provides guidance on
    what is required to operate an effective
    IACS cybersecurity program. The intended
    audience includes asset owners who have
    responsibility for the operation of such a
    program
**3. System Requirements** —The documents in
the third group address requirements at the
system level.

```
Figure 2: The ISA/IEC 62443 Series
```
###### ISA/IEC 62443 Series of Standards


6

**- Part 3-1: Security technologies for**
    **IACS** describes the application of
    various security technologies to an IACS
    environment. The intended audience
    includes anyone who wishes to learn
    more about the applicability of specific
    technologies in a control systems
    environment
**- Part 3-2: Security risk assessment for**
    **system design** addresses cybersecurity
    risk assessment and system design for
    IACS. The output of this standard is a
    zone and conduit model, and associated
    risk assessments and target security
    levels. These are documented in the CRS.
    This standard is primarily directed to
    asset owners and system integrators
**- Part 3-3: System security requirements**
    **and security levels** describes the
    requirements for an IACS system based
    on security level. The principal audience
    include suppliers of control systems,
    system integrators and asset owners
**4. Component Requirements** —The fourth and
final group includes documents that provide
information about the more specific and
detailed requirements associated with the
development of IACS products.
**- Part 4-1: Product security
development lifecycle requirements**
describes the requirements for a product
developer’s Security Development

```
Lifecycle (SDL). The principal audience
include suppliers of control systems and
component products
```
**- Part 4-2: Technical security**
    **requirement for IACS components**
    describes the requirements for IACS
    components based on security level.
    Components include embedded devices,
    host devices, network devices and
    software applications. The principal
    audience include suppliers of component
    products that are used in control systems

```
Table 2 shows the complete list of ISA/IEC 62443
standards and technical reports. The “Part” can
be derived from the document number, for
example ISA/IEC 62443-2-1 is referred to as Part
2-1 in this document.
```
```
The document types are:
```
- IS–International standard
- TR–Technical report
- TS–Technical specification

```
Finally, the publication date is shown for each
document as of the publication date of this
document. ISA/IEC standards are on a five-
year update cycle, so many of the published
documents are currently in revision.
```
###### Fundamental Concepts

```
Security Program
Part 2-1 specifies asset owner security program
requirements for the IACS. A security program
consists of the implementation and maintenance
of personnel, policy and procedure, and
technology-based capabilities that reduce the
cybersecurity risk of an IACS.
```
```
In the context of Part 2-1, the asset owner is
also the Operator of the IACS and the EUC. The
security program covers the entire lifecycle of
the IACS. Because the lifetime of an IACS can
be longer than the product supplier support
timeframe, the standard recognizes that not all
requirements can be met by legacy systems, so
compensating countermeasures may be needed
to secure the IACS.
```
```
Although the asset owner is ultimately
accountable for the secure operation of the
IACS, implementation of security capabilities
```
```
Part Type Title Date
1-1 TS Terminology, concepts, and models 2007
1-2 TR Master glossary of terms and abbreviations
1-3 System cybersecurity conformance metrics
1-4 IACS security lifecycle and use cases
2-1 IS Establishing an IACS security program 2009
2-2 IACS security program ratings
2-3 TR Patch management in the IACS environment 2015
2-4 IS Security program requirements for IACS service
providers
```
```
2018
```
```
2-5 TR Implementation guidance for IACS asset owners
3-1 TR Security technologies for IACS
3-2 IS Security risk assessment for system design 2020
3-3 IS System security requirements and security levels 2013
4-1 IS Product security development life-cycle requirements 2018
4-2 IS Technical security requirements for IACS components 2019
```
```
Table 2: ISA/IEC 62443 Series Status
```
```
Component
```
```
Systems
```
```
Policies & Procedures Overview
```

```
ISAGCA.ORG 7
```
requires the support of product suppliers and
service providers. The asset owner must include
requirements for security throughout the supply
chain to meet the overall security program
requirements.

The security program for the IACS must be
coordinated with the overall Information Security
Management System (ISMS) of the organization.
The ISMS sets the overall security governance
and policies for the organization. However,
as mentioned above, the IACS is significantly
different from IT systems, so there are additional
requirements and considerations for its security
program.

**Risk Management**
**_Risk Assessment_**
Part 3-2 describes the requirements
for addressing the cybersecurity risks
in an IACS, including the use of zones
and conduits, and security levels. While
Part 3-2 includes the requirements for
the risk assessment process, it does
not specify the exact methodology to
be used. The methodology used must
be established by the asset owner and
should be consistent with the overall
risk assessment methodology of the
organization. Examples using the risk
matrix methodology are included as
informative content. Figure 3 shows the
risk assessment process.

**_Zones and Conduits_**
A zone is defined as a grouping of logical
or physical assets based upon risk or
other criteria such as criticality of assets,
operational function, physical or logical
location, required access or responsible
organization.

A conduit is defined as a logical grouping
of communication channels that
share common security requirements
connecting two or more zones.

A key step in the risk assessment
process is to partition the System Under
Consideration (SuC) into separate zones
and conduits. The intent is to identify
those assets which share common security
characteristics in order to establish a set
of common security requirements that
reduce cybersecurity risk.

```
Partitioning the SuC into zones and conduits can
also reduce overall risk by limiting the scope of
a successful cyber-attack. Part 3-2 requires or
recommends that some assets are partitioned as
follows should:
```
- business and control system assets
- safety related assets
- temporarily connected devices
- wireless devices
- devices connected via external networks

```
Cybersecurity Requirements Specification
Part 3-2 also requires that required security
countermeasures from the risk assessment as
well as security requirements based on company
```
#### http://www.isa.org/ISAGCA

```
Initial system architecture
diagrams and inventory,
company policies,
regulations, tolerable risk
guidelines, etc.
```
```
Existing PHAs and other
relevant risk assessment
and corporate risk matrix
```
```
Standards and best
practices, policies, supplier
guidelines, criticality
assessments, data flows,
functional
specifications, etc.
```
```
Company policies,
regulations, tolerable risk
guidelines, etc.
```
```
ZCR 1 – Identify the
system under
consideration
(SUC)
```
```
ZCR 2 – Perform an
initial cybersecurity risk
assessment
```
```
ZCR 3 – Partition the
SUC into zones and
conduits
```
```
ZCR 4 – Initial
risk exceeds
tolerable risk?
```
```
ZCR 5 – Perform a
detailed cybersecurity
risk assessment
```
```
ZCR 4 – Document
cybersecurity require-
ments, assumptions, and
constraints
```
```
ZCR 7 – Asset owner
approval
```
```
Start
```
```
Updated system architecture
diagrams and inventory with
IACS external services and
support identified
```
```
Initial evaluation of risk
```
```
Initial or revised zone
and conduit diagram
```
```
Residual cybersecurity risk
and SL-Ts for each zone
and conduit
```
```
Cybersecurity
requirement
specification (CRS)
```
```
No
```
```
Yes
```
```
Figure 3: Risk Assessment Process
```

8

```
or facility-specific policies, standards and relevant
regulations are documented in a CRS. The CRS
does not have to be a standalone document; it
can be included as a section in other relevant
IACS documents.
```
```
The CRS includes information such a description
of the SuC, zone and conduit drawings, threat
environment(s) and countermeasures from risk
assessments.
```
```
Threat Modeling
Part 4-1 describes the requirements for the
security development lifecycle (SDL) of control
system and component products. One of the key
processes in the product SDL is threat modeling
which is a systematic process to identify data flows,
trust boundaries, attack vectors and potential
threats to the control system. The security issues
identified in the threat model must be addressed
in the final release of the product and the threat
model itself must be periodically updated during
the product’s lifecycle.
```
```
Foundational Requirements
Foundational Requirements (FRs) form the basis
for technical requirements throughout the
ISA/IEC 62443 series. All aspects associated with
meeting a desired IACS security level (people,
processes and technology) are derived through
meeting the requirements associated with the
seven following FRs:
```
- FR 1 – Identification and authentication
    control (IAC)
- FR 2 – Use control (UC)
- FR 3 – System integrity (SI)
- FR 4 – Data confidentiality (DC)
- FR 5 – Restricted data flow (RDF)
- FR 6 – Timely response to events (TRE)
- FR 7 – Resource availability (RA)

```
FRs are used to organize the requirements for
IACS Systems (Part 3-3) and components
(Part 4-2).
```
```
The combination of FR 1 and FR 2 is sometimes
called access control; they were split into two FRs
to keep the total number of requirements at a
manageable level.
```
```
Security Levels
Security level is defined as the measure of
confidence that the SuC, zone or conduit is free
from vulnerabilities and functions in the intended
manner.
```
```
Part 3-3 further defines the security level in terms
of the means, resources, skills and motivation of
the threat actor, as shown in Table 3. It is used
as a means to discriminate between requirement
enhancements for systems (Part 3-3) and
components (Part 4-2).
```
```
There are three types of security levels that are
used throughout the ISA/IEC 62443 series:
```
**_- Capability Security Levels (SL-C)_** are the
    security levels that systems (Part 3-3) or
    components (Part 4-2) can provide when
    properly integrated and configured. These
    levels state that a particular system or
    component is capable of meeting the SL-T
    natively without additional compensating
    countermeasures
**_- Target Security Levels (SL-T)_** are the desired
    level of security for a particular automation
    solution. They are determined as the result
    of the risk assessment process (Part 3-2) and
    are documented in the CRS. SL-T are used
    to select products and design additional
    countermeasures during the integration
    phase of the IACS lifecycle
**_- Achieved Security Levels (SL-A)_** are the actual
    levels of security for a particular automation
    solution. These are measured after the

```
Table 3: Security Level Definition
```
```
Security Level Definition Means Resources Skills Motivation
1 Protection against casual or coincidental violation
2 Protection against intentional violation using simple means with low
resources, generic skills, and low motivation
```
```
simple low generic low
```
```
3 Protection against intentional violation using sophisticated means with
moderate resources, IACS-specific skills, and moderate motivation
```
```
sophisticated moderate IACS-specific moderate
```
```
4 Protection against intentional violation using sophisticated means with
extended resources, IACS-specific skills, and high motivation
```
```
sophisticated extended IACS-specific high
```

```
ISAGCA.ORG 9
```
```
automation solution is commissioned and
in operation. Part 2-2 combines SL-A with
operational and maintenance policies and
procedures to form the security program
rating for a particular automation solution
```
**Maturity Model**
While security levels are a measure of the strength
of technical requirements, maturity levels are
a measure of processes (people, policies and
procedures). Parts 2-1, 2-2, 2-4 and 4-1 use
maturity levels to measure how thoroughly
requirements are met.

As shown in Table 4, the maturity model is based
on the Capability Maturity Model Integration
(CMMI), with Levels 4 and 5 combined into Level 4.

**Design Principles**
**_Secure by Design_**
Secure by design is a design principle where
security measures are implemented early
in the lifecycle of the IACS. The intent is that
robust security policies, security architectures
and secure practices are established early in
development and implemented throughout
the lifecycle. This design principle applies to
both product development and automation
solution development. When using a secure by
design philosophy, security measures operate
natively within the control system or component
without requiring the addition of compensating
countermeasures.

**_Reduce Attack Surface_**
Reducing the attack surface is a design principle
where the physical and functional interfaces of
an IACS that can be accessed and exposed to
potential attack are minimized, making it more
difficult for an attack to succeed. Reducing attack

```
surface includes design principles such as:
```
- Access control—restricting physical and logical
    access to IACS systems and networks
- Network segmentation—segmenting IACS
    networks and controlling the traffic between
    them
- Least function—hardening IACS systems and
    networks by removing unneeded functions
- Least privilege—limiting privileges to the
    minimum necessary for the role or function

```
Defense in Depth
Defense in depth is defined as the provision of
multiple security protections, especially in layers, with
the intent to delay or prevent an attack. Defense
in depth implies layers of security and detection,
even on single systems, and requires attackers to
break through or bypass multiple layers without
being detected. The IACS is still protected even if a
vulnerability in one layer is compromised. Special
attention must be paid to a single vulnerability that
allows the potential compromise of multiple layers.
```
```
Essential Functions
Essential functions are defined as functions or
capabilities that are required to maintain health,
safety, the environment and availability of the EUC.
Essential functions include:
```
- the safety instrumented function (SIF)
- the control function
- the ability of the operator to view and
    manipulate the EUC

```
The loss of essential functions is commonly termed:
loss of protection, loss of control and loss of view,
respectively. In some use cases additional functions
such as history may be considered essential.
```
```
Table 4: Maturity Level Definition
```
```
Level CMMI 62443 Description
1 Initial Initial • Product development is typically ad-hoc and often undocumented
```
- Consistency and repeatability may not be possible
2 Managed Managed • Product development managed using written policies
- Personnel have expertise and are trained to follow procedures
- Processes are defined but some may not be in practice
3 Defined Defined (Practiced) • All processes are repeatable across the organization
- All processes are in practice with documented evidence
4 Quantitively Managed Improving • CMMI Levels 4 and 5 are combined
- Process metrics are used control effectiveness and performance
5 Optimizing • Continuous improvement


10

```
Part 3-3 requires that security measures shall
not adversely affect essential functions of a high-
availability IACS unless it is supported by a risk
assessment. The concept of essential functions
places some design constraints on the design of IACS
security measures:
```
- access control shall not prevent the operation
    of essential functions
- essential functions shall be maintained if the
    zone boundary protection (firewall) goes into
    a fail close/island mode
- a denial-of-service event on the control
    system or Safety Instrumented System
    (SIS) network shall not prevent safety
    instrumented functions from acting

###### Roadmap for the ISA/IEC 62443

###### Series

```
Principal Roles
To understand how to use the ISA/IEC 62443
series it is first necessary to understand the
relationship between roles, control system,
automation solution and IACS. Figure 4 visualizes
this relationship. The left-hand side of the figure
shows the roles that are identified in the ISA/IEC
62443 series:
```
**- Asset Owner** is the organization that is
    accountable and responsible for the IACS.
    The asset owner is also the operator of the
    IACS and the EUC
       **- Maintenance Service Provider** is the
          individual or organization that provides
          support activities for an automation solution
       **- Integration Service Provider** is an
          organization that provides integration
          activities for an automation solution including
          design, installation, configuration, testing,
          commissioning and handover to the asset
          owner. The integration service provider may
          also facilitate and assist in the activity to
          partition the SuC into zones and conduits
          and perform the risk assessment
       **- Product Supplier** is the organization that
          manufactures and supports a hardware and/
          or software products. Products may include
          control systems, embedded devices, host
          devices, network devices and/or software
          applications

```
Component, System, Automation Solution and IACS
The right-hand side of the figure shows the types
of systems that are identified in the ISA/IEC 62443
series::
```
**- IACS Components** are provided by a
    product supplier and include the following
    types:
    - Embedded device–special purpose
       device designed to directly monitor or
       control an industrial process
    - Host device–general purpose device
       running an operating system capable
       of hosting one or more software
       applications, data stores or functions
       from one or more suppliers
    - Network device–device that facilitates
       data flow between devices, or restricts
       the data flow, but may not directly
       interact with a control process
    - Software application–one or more software
       programs and their dependencies that are
       used to interface with the process or the
       control system itself
**- The IACS System** consists of an integrated
    set of embedded devices (e.g., PLC), Host
    Devices, network devices and software
    applications provided by one or more
    product suppliers
**- Automation Solution** is the realization
    of a control system at a particular facility.
    It includes essential functions such as
    safety functions and control functions and

```
accountable for
operates
```
```
maintains
commissions
and validates
designs and
deploys
```
```
Components
```
```
Supporting software applicationsEmbedded devices
Network devices Host devices
```
```
CZone Zone
```
```
Roles
Asset Owner
```
```
Service ProviderMaintenance
```
```
Integration
Service Provider
```
```
Industrial automation and control system (IACS)
```
```
Operation and routine maintenance according
to security policies and procedures
```
```
Automation Solution
Essential Functions
```
```
functionsSafety
```
```
Role
```
```
Product
Supplier
```
```
Independent of IACS environment
```
```
IACS environment
```
```
develops
and supports
```
```
Products
Components Control systems
(as a combination of components)
```
```
Includes configured products(control systems and components)
```
```
Zone Zone
```
```
functionsControl functionsSafety Complementary functions
```
```
Supportingsoftware
applications
Networkdevices
```
```
Embeddeddevices
```
```
devicesHosted
```
```
Figure 4: Roles, Products, Automation Solution, and IACS
```

```
ISAGCA.ORG 11
```
```
other supporting functions such as
historization and engineering
```
**- The IACS** includes the automation
    solution and the operational and
    maintenance policies and procedures
    necessary to support it

**Hierarchical View**
Figure 5 shows the hierarchical relationships
among the ISA/IEC 62443 series of standards.
A hierarchical relationship means that one
standard derives its requirements from
the requirements in another standard. The
arrowhead shows the direction of derivation.

**- Part 1-1** introduces the concepts and
    models that are used throughout the ISA/
    IEC 62443 series. In particular, it describes
    the foundational requirements, which are
    used to organize technical requirements
    throughout the series
**- Part 2-1** sets the requirements for the
    security program of an asset owner. All of the
    other standards in the
    ISA/IEC 62443 series derive their
    requirements from Part 2-1 and expand
    upon them in more detail
**- Part 3-2** sets the requirements for the
    partitioning of the SuC into zones and
    conduits and their risk assessment. The risk
    assessment defines the SL-T, which is used
    to procure systems and components that
    have the capabilities defined in Part 3-3 and
    Part 4-2, respectively. Part 3-2 also requires a
    CRS, which is used to create the automation
    solution
       **- Part 4-1** is used by a product supplier to
          establish and sustain a SDL, which is used
          to create control systems and component
          products
       **- Part 2-4** sets the requirements for service
          providers that are involved in support of the
          IACS. Integration service providers provide
          integration services for the automation
          solution, and maintenance service providers
          provide maintenance services for the IACS.
       **- Part 2-3** sets the requirements for the patch
          management process, which is used to
          reduce cybersecurity vulnerabilities in the
          automation solution

```
Patch management in Part 2-
the IACS environment
```
```
Security program Part 2-
requirements for IACS
service providers
```
```
Security risk Part 3-
assessment for system design
```
```
System security Part 3-
requirements and security levels
```
```
Part 4-
development lifecycle Product security
requirements
```
```
IACS security Part 2-
program ratings
```
```
Technical security Part 4-
IACS componentsrequirements for
```
```
Establishing an IACS Part 2-
security program
```
```
Terminology, Part 1-
concepts,
and models
```
```
Legend Derived Requirements
Direct ReferencesAll Parts shall reference Part 1-
```
```
Figure 5: ISA/IEC 62443 Standards – Hierarchical View
```
```
Figure 6: ISA/IEC 62443 Standards - Lifecycle View
```
```
Product Development Lifecycle
```
```
Automation Solution Lifecycle
Integration Operation and Maintenance
Part 1-1: Terminology, Concepts, and Models
Part 2-1: Establishing an IACS Security Program
Part 2-2: IACS Security Program Rating
Part 2-3: Patch Management in the IACS Environment
Part 2-4: Security program requirements for IACS service providers
Part 3-2: Security Risk Assessment for System Design
Part 3-3: System security requirements and Security levels
Part 4-1: Product Security Development Lifecycle
Requirements
Part 4-2: Technical security requirements
for IACs components
```

12

```
Lifecycle View
Another view of the ISA/IEC 62443 series is
the lifecycle view. There are two independent
lifecycles described in the series: the product
development lifecycle, and the automation
solution lifecycle. The automation solution
lifecycle is further divided into an integration
phase and an operation and maintenance
phase. Table 6 shows the relationship between
the parts of the ISA/IEC 62443 series and the
various lifecycles and phases.
```
```
Note that Part 3-3 spans the product
development lifecycle and the integration
phase of the automation solution lifecycle.
This is because while the product supplier
is the main audience for Part 3-3, the
integration service provider may also combine
components to create control systems. An
example would be a SCADA system, where
the integration service provider integrates the
SCADA system with embedded devices (e.g.,
PLC) to create an automation solution.
```
```
ISA/IEC 62443 Series for Asset Owners
Asset owner activities:
```
- establish and sustain a security program
    that includes IACS-specific requirements
- partition zones and conduits and perform
    associated risk assessments
- document IACS requirements in the CRS
- procure products and services that meet
    IACS requirements
- operate and maintain the IACS
- assess the effectiveness of the IACS
    security program

```
Applicable ISA/IEC 62443 standards:
```
- ISA/IEC 62443-2-1, Establishing an IACS
    security program
- ISA/IEC 62443-2-2, Security Program
    ratings
- ISA/IEC 62443-2-3, Patch management in
    the IACS environment
- ISA/IEC 62443-2-4, Requirements for IACS
    service providers
- ISA/IEC 62443-3-2, Security risk
    assessment for system design
- ISA/IEC 62443-3-3, System security
    requirements and security levels

```
ISA/IEC 62443 Series for Product Suppliers
Product supplier activities:
```
- establish and sustain an SDL
- provide control system products that meet
    security level capabilities
- provide component products that meet
    security level capabilities
- provide ongoing lifecycle support for their
    control system and component products

```
Applicable ISA/IEC 62443 standards:
```
- ISA/IEC 62443-4-1, Product SDL
    requirements
- ISA/IEC 62443-3-3, System security
    requirements and security levels
- ISA/IEC 62443-4-2, Technical security
    requirements for IACS components
- ISA/IEC 62443-3-2, Security risk
    assessment for system design

```
ISA/IEC 62443 Series for Service Providers
Integration Service Providers
Integration service provider activities:
```
- establish and sustain a security program
    for automation solution integration
- design and implement automation
    solutions that meet the requirements in
    the CRS
- apply security patches during the
    integration phase of the automation
    solution lifecycle

```
Applicable ISA/IEC 62443 standards:
```
- ISA/IEC 62443-2-1, Establishing an IACS
    security program
- ISA/IEC 62443-2-3, Patch management in
    the IACS environment
- ISA/IEC 62443-2-4, Requirements for IACS
    service providers
- ISA/IEC 62443-3-2, Security risk
    assessment for system design
- ISA/IEC 62443-3-3, System security
    requirements and security levels

```
Maintenance Service Providers
Maintenance service provider activities:
```
- establish and sustain a security program
    for maintenance services


```
ISAGCA.ORG 13
```
- provide services and capabilities that meet
    the IACS security policies and procedures
    specified by the asset owner

Applicable ISA/IEC 62443 standards:

- ISA/IEC 62443-2-3, Patch management in the
    IACS environment
- ISA/IEC 62443-2-2, IACS security program
    ratings
- ISA/IEC 62443-2-4, Requirements for IACS
    service providers

###### Certification and Training

**ISASecure® Certification**
The ISA Security Compliance Institute is a non-
profit organization that has developed several
product certification programs for controls
systems and components. Currently available
ISASecure certification programs are:

- **Security Development Lifecycle Assurance**
    **(SDLA) / ISA/IEC 62443-4-1** certifies that
    the SDL of a product supplier meets the
    requirements in Part 4-
- **IIoT Component Security Assurance (ICSA)**
    **/ ISA/IEC 62443-4-2** is a security certification
    program for IIoT components and IIoT
    gateways
- **System Security Assurance (SSA) /**
    **ISA/IEC 62443-3-3** certifies that control
    system products have the capability to meet
    the requirements in Part 3-3 and have been
    developed in accordance with an SDLA
    program
- **Component Security Assurance (CSA) /**
    **ISA/IEC 62443-4-2** certifies that component
    products have the capability to meet the
    requirements in Part 4-2 and have been
    developed in accordance with an SDLA
    program. Certified component products can
    be embedded devices, host devices, network
    devices and software applications
       - **ISA/IEC 62443 IACS Security Assurance**
          **(IACSSA)** (under development) this program
          aims to offer the world’s first ISA/IEC 62443
          OT site assessment certification

```
ISASecure certification programs can be found at
ISASecure.org.
```
```
ISA Cybersecurity Training
ISA offers the following cybersecurity-related
training courses:
```
- Cybersecurity Awareness training for Water/
    Wastewater Industry Professionals (IC31)
- Using the ISA/IEC 62443 Standards to Secure
    Your Control System (IC32, IC32E, IC32M,
    IC32V)
- Introduction to Industrial Automation Security
    and the ISA/IEC 62443 Standards (IC32C)*
- Assessing the Cybersecurity of New or
    Existing IACS Systems (IC33, IC33E, IC33M,
    IC33V)
- IACS Cybersecurity Design and
    Implementation (IC34, IC34M, IC34V)
- IACS Cybersecurity Operation and
    Maintenance (IC37, IC37M, IC37V)

```
The last letter of the course code designates the
type of course as follows:
```
- **<none> - Classroom training - Our most**
    **robust form of training—many include**
    **hands-on labs.**
- **C – Custom training -** *One-day overview
    course available only through our Custom
    Training Solutions
- **E – Instructor-guided online training -**
    Learn at your own pace when it’s convenient
    for you to complete the assignments by the
    milestone deadline
- **M – Self-paced modular training -** Learn at
    your own pace at a time that is convenient
    for you
- **V – Virtual Classroom training -** covers the
    same material as the classroom course, but
    in a virtual setting so you can attend remotely
Visit our course formats webpage for full details
about each course format.

## ISASecure

```
Certified System
```
## ISASecure

```
Certified Component
```

14

```
ISA Cybersecurity Certificates
```
```
ISA offers the following cybersecurity certificate
courses for students who have completed the
training courses listed above. Certificates are not
to be confused with product certifications offered
by ISASecure.
```
- ISA/IEC 62443 Cybersecurity Fundamentals
    Specialist (IC32) provides a detailed look at
    how the ISA/IEC 62443 standards framework
    can be used to protect critical control
    systems. It also explores the procedural and
    technical differences between the security
    for traditional IT environments and those
    solutions appropriate for SCADA or plant
    floor environments
- ISA/IEC 62443 Cybersecurity Risk Assessment
    Specialist (IC33) focuses on information and
    skills to assess the cybersecurity of a new or
    existing industrial automation and control
    system (IACS); and to develop a cybersecurity
    requirements specification (CRS) that can
    be used to document the cybersecurity
    requirements of the project
- ISA/IEC 62443 Cybersecurity Design Specialist
    (IC34) focuses on the activities associated
    with the design and implementation of
    industrial automation control system (IACS)
    cybersecurity countermeasures
- ISA/IEC 62443 Cybersecurity Maintenance
    Specialist (IC37) focuses on the activities
    associated with the ongoing operations
    and maintenance of IACS cybersecurity
    implemented in the Design & Implementation
    phase
- ISA/IEC 62443 cybersecurity expert, which is
    earned by successful completion of the all
    four cybersecurity certificates

```
ISA Training for Product Suppliers
and Certifying Bodies
ISASecure joined forces with ISA Training to
develop the following ISA/IEC 62443 based
courses specifically designed for product
suppliers, accessors, and certifying bodies.
```
- Overview of ISA/IEC 62443 for Product
    Suppliers (IC46M) is a self-paced modular

```
course that provides an overview of how the
ISA/IEC 62443 series of standards can be
used by the supplier to implement a SDL, and
to develop IACS systems and components
that are secure by design and offer security
by default. It also covers how to suppliers can
independently certify that these systems and
components comply with the relevant ISA/IEC
62443 standards
```
- ISASecure for Product Suppliers and
    Assessors (IC47, IC47V) is intended for
    product suppliers who want to build products
    conforming to 62443 standards that also
    meet ISASecure certification requirements. It
    is also intended for conformance/certification
    assessors of software development
    processes, and system/component products
    who need to understand the ISASecure
    certification programs and the ISA/IEC 62443
    standards on which it is based

###### Published Standards and

###### Technical Reports

```
ISA-62443-1-1-2007 / IEC TS 62443-1-1:2009–
Security for Industrial Automation and Control
Systems, Part 1-1: Terminology, Concepts and
Models
```
```
ISA-62443-2-1-2009 / IEC 62443-2-1:2010–
Security for Industrial Automation and Control
Systems, Part 2-1: Establishing an Industrial
Automation and Control Systems Security
Program
```
```
ANSI/ISA-TR 62443-2-3-2015 / IEC TR 62443-2-
3:2015– Security for Industrial Automation and
Control Systems, Part 2-3: Patch Management in
the IACS Environment
```
```
ANSI/ISA-62443-2-4-2018 / IEC 62443-2-
4:2015+Amd1:2017 CSV– Security for Industrial
Automation and Control Systems, Part 2-4:
Security Program Requirements for IACS Service
Providers
```
```
IEC TR 62443-3-1:2009- Security for Industrial
Automation and Control Systems, Part 3-1:
Security Technologies for Industrial Automation
and Control Systems
```
```
ISA-62443-3-2-2020– Security for Industrial
Automation and Control Systems, Part 3-2:
Security Risk Assessment for System Design
```
```
ISA/IEC^62443
MAINTENANCESPECIALIST
```
```
ISA/IEC^62443
SPECIALISTDESIGN
```
```
ISA/IEC^62443
ASSESSMENTRISK
SPECIALIST
```
```
ISA/IEC^62443
FUNDAMENTALSSPECIALIST
```
```
ISA/IEC^62443
EXPERT
```
```
Certificate 1 Certificate 2 Certificate 3 Certificate 4 Expert
```

```
ISAGCA.ORG 15
```
```
This document contains some information
that is based on ISA99 Committee draft
documents. Please refer to the published
documents for the definitive set of
requirements currently available.
```
**ANSI/ISA-62443-3-3-2013 / IEC 62443-4-2:2013–**
Security for Industrial Automation and Control
Systems, Part 3-3: System Security Requirements
and Security Levels

**ANSI/ISA-62443-4-1-2018 / IEC 62443-4-1:2018–**
Security for Industrial Automation and Control
Systems, Part 4-1: Product Security Development
Lifecycle Requirements

**ANSI/ISA-62443-4-2-2018 / IEC 62443-4-
2:2019–** Security for Industrial Automation and
Control Systems, Part 4-2: Technical Security
Requirements for IACS Components

**IEC TR 63069:2019–** Industrial-Process
Measurement, Control and Automation–
Framework for Functional Safety and Security

**IEC TR 63074:2019–** Safety Of Machinery–Security
Aspects Related to Functional Safety of Safety-
Related Control Systems

###### References

```
NIST SP 800-82 Revision 2, Guide To Industrial
Control Systems (ICS) Security
```
```
United Nations Commission to Integrate ISA/IEC
62443 Into Cybersecurity Regulatory Framework,
ISA InTech magazine, Jan-Feb 2019
```
```
The 62443 Series of Standards: Industrial
Automation and Control Security, ISA
committee
```
```
Frequently Asked Questions: The ISA
Committee and 62443 Standards, ISA
committee
```
```
Instrumentation And Control Systems
Security Explained: the What and the Why,
ISA99 committee
```

16 ©2024 International Society of Automation

##### GLOBAL

CYBERSECURITY

##### ALLIANCE


