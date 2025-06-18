
## Table of Contents

- What You’ll Learn From This Report
- Executive Summary
- 1 Part 1: The Growing Threat Landscape
- 1.1 How Leading Medical Device OEMs Are Responding
- 1.2 Medical Device Vulnerabilities (2024-2025)
- 1.2.1 Incident Summary
- 1.2.2 Vulnerability Summary
- 1.3 1. Contec Patient Monitors - Hidden Backdoor and Zero-Day Vulnerabilities (2025)
- 1.4 2. Baxter Welch Allyn Connex Spot Monitor - Default Cryptographic Key (2024)
- 1.5 3. GE Vivid Ultrasound Systems - Local Access Exploits and Malware Risk (2024)
- Recall (2025) 1.6 4. GE Centricity Universal Viewer & CA1000 - Credential Flaw Prompts Class II
- Tampering 1.7 5. Baxter Life2000 Ventilator - Multiple Vulnerabilities Enabling Firmware
- 1.8 Conclusion: Balancing Innovation and Security in Medical Device Development
- 1.9 Key Lessons for Medical Device OEMs
- 1.10 Customer Q&A
- attackers 2 Part 2: Proven cybersecurity best practices to stay ahead of
- 2.1 The Unsustainable Status Quo
- 2.2 The Security Specialization Precedent
- 2.3 Why In-House Security Is Unsustainable
- 2.4 The Economic Reality
- Compromising Security 2.5 Embedded Development Strategies to Boost Delivery Velocity Without
- 2.5.1 Hardware Root of Trust: The Foundation of Device Security
- 2.5.2 Zero-Touch Provisioning: Scaling Secure Manufacturing
- 2.5.3 Secure Lifecycle Management: Beyond Deployment
- 2.5.4 Standards Compliance: Meeting Regulatory Requirements
- 2.5.5 The Make vs. Partner Decision Framework
- 3 Summary and Call to Action
- Ready to Secure Your Medical Devices Without Slowing Innovation?
- References


## What You’ll Learn From This Report

This report provides medical device CTOs and engineering leaders with intelligence on the
rapidly evolving cybersecurity threat landscape and proven strategies to address these
challenges without compromising innovation velocity.

What You'll Find Inside:

- Threat Intelligence: Analysis of five recent (2024-2025) sophisticated attacks
    against medical devices, including vulnerability details and exploitation methods
- Vulnerability Patterns: Common security weaknesses across devices from major
    manufacturers, with technical details on attack vectors and design flaws
- Regulatory Impact: How FDA, EU MDR, and other frameworks are shifting from
    guidance to enforcement
- Economic Analysis: The cost-benefit equation of security partnerships versus in-
    house development
- Implementation Roadmap: Specific technical strategies for accelerating security
    implementation without diverting core engineering resources
- Q&A Section: Direct responses to common security implementation questions from
    our engineering team

This report moves beyond theoretical concerns to provide actionable insights from real-world
medical device security incidents and practical guidance for forward-thinking device
manufacturers.

## Executive Summary

1. Exploding Threat Surface & Regulatory Pressure: The 59% jump in medical
    device vulnerabilities between 2022-2023 and the fact that 99% of healthcare
    organizations have exposed vulnerabilities signals a new reality. Medical devices
    now face nation-state level attacks with compliance requirements (FDA, EU MDR,
    PATCH Act) that demand specialized expertise.
2. Partner With Experts to Succeed: Building device security in-house today is like
    building your own firewall in 2025—technically possible but strategically unwise. As
    threats grow more sophisticated and regulatory requirements more complex, even
    large OEMs are finding specialized security partnerships more effective than
    diverting engineering resources from core innovations.
3. Leading medical device manufacturers are rethinking their allocation of
    engineering resources. By leveraging specialized security partners, organizations
    can reallocate up to 90% of security-focused engineering hours toward patient-
    centric innovations and accelerated time-to-market. This represents a significant
    opportunity to enhance competitive advantage while maintaining robust security
    postures. Transitioning security infrastructure responsibilities to specialized partners
    through 2026, will allow your engineering teams to focus exclusively on differentiating
    medical technologies that drive revenue and market share.


1

In recent years, the number of healthcare cybersecurity incidents has increased
dramatically, with connected medical devices becoming prime targets.

- A 2023 report discovered 993 vulnerabilities across 966 medical devices, a 59%
    jump from the previous year.
- Attackers had already weaponized 16% of those vulnerabilities.
- In March 2025, an analysis of 2.25 million medical IoT devices in 351 hospitals found
    that 99% of healthcare organizations had at least one device with a known exploited
    vulnerability on their network.

Attacks targeting medical devices threaten patient safety, device functionality, and protected
health information. This analysis examines five sophisticated attacks from 2024-2025 that
demonstrate the evolving threat landscape for medical device manufacturers.

These incidents are not edge cases. They’re representative of widespread security issues in
connected medical devices, especially those using embedded systems, external
configuration tools, or legacy software.

McKinsey estimates the median medical-device recall at $60M. Healthcare data-breach
averages exceed $10 M per incident. The financial impact extends beyond direct costs, with
reputational damage often harming manufacturers. OEMs must balance innovation with
cybersecurity requirements across complex ecosystems.

## 1.1 How Leading Medical Device OEMs Are Responding

Forward-thinking manufacturers are implementing multi-layered security strategies:

- Adopting "security by design" principles from initial development phases
- Conducting regular vulnerability assessments and penetration testing
- Establishing formal security incident response processes
- Implementing robust supply chain risk management
- Partnering with specialized security firms to augment internal capabilities and
    accelerate secure development

The vulnerabilities—like hardcoded credentials, unsigned firmware, and insecure ports—
reflect common design patterns in many devices.

If you haven’t audited your firmware, key management, and physical interfaces recently,
assume similar risks exist in your stack.


## 1.2 Medical Device Vulnerabilities (2024-2025)

## 1.2.1 Incident Summary

```
Year Device Vulnerabilities OEM Lessons
2025 Contec CMS
(Patient Monitor)
```
```
Backdoor firmware
update, RCE, plaintext
telemetry (CVE- 2024 -
12248)
```
```
Secure firmware,
encrypted comms,
code audits
```
```
2024 Connex Spot Monitor Default shared
cryptographic key
(CVE- 2024 - 1275)
```
```
Unique keys per device
and secure key
management
2024 Vivid Ultrasound
Systems
```
```
Hardcoded credentials
and OS command
injection (CVE- 2024 -
27107, -1628)
```
```
Remove hardcoded
accounts, encrypt
storage, secure kiosk
mode.
2025 Centricity Universal
Viewer / CA
```
```
Default or discoverable
service credentials
```
```
Credential rotation and
enforce authentication
2024 Life2000 Ventilator Hardcoded credentials,
no firmware checks,
open debug ports
(multiple CVEs)
```
```
Defense in depth,
secure boot, encrypted
comms, eliminate
hardcoded creds,
secure ports, and add
logging.
```
## 1.2.2 Vulnerability Summary

```
Vulnerability Type Description Affected
Hardcoded Credentials Fixed usernames and
passwords, often shared across
devices, embedded in firmware.
```
```
GE Vivid Ultrasound, Life
Ventilator, Centricity Viewer
```
```
Unsigned Firmware Firmware updates accepted
without signature or integrity
checks
```
```
Contec CMS8000 and Life
Ventilator
```
```
Shared Cryptographic Keys Same encryption keys used
across multiple units
```
```
Connex Spot Monitor
```
```
Open Debug/Service Ports Unprotected physical interfaces
allowing firmware access or
extraction
```
```
Life2000 Ventilator
```
```
Insecure Communications Telemetry or control data
transmitted in plaintext
```
```
Contec CMS8000 and Life
Ventilator
Weak Authentication No password rate-limiting and
discoverable service accounts
```
```
Life2000 Ventilator and
Centricity Viewer
Local Privilege Escalation Local access could allow
attackers to escalate to admin-
level privileges.
```
```
GE Vivid Ultrasound
```
```
Missing Logging/Auditing No trace or alerts for critical
access attempts or changes.
```
```
Life2000 Ventilator
```

## 1.3 1. Contec Patient Monitors - Hidden Backdoor and Zero-Day Vulnerabilities (2025)

Vulnerability Summary: In January 2025, the FDA and CISA published advisories
regarding Contec CMS8000 patient monitors (Epsimed MN-120), revealing severe software
flaws. These included an undocumented firmware update mechanism characterized as a
"backdoor," a remote code execution (RCE) vulnerability (CVE- 2024 - 12248), and a data
leak transmitting telemetry in plaintext to an external IP. If network-connected, these
monitors could be remotely hijacked, their firmware overwritten, and sensitive patient data
exfiltrated.

- Timeline: The FDA and CISA disclosed the information on Jan 30, 2025.
    Researchers Claroty Team82 discovered it in 2024.
- Clarification on Intent: While the "backdoor" functionality exists and is critical, some
    analyses suggest it may result from poor design or legacy code rather than
    intentional sabotage. Caution is warranted when assigning malicious intent without
    direct evidence.
- Impact: No known exploitation or patient harm. Devices weren't formally recalled; the
    FDA issued a "Safety Communication," not a recall. Hospitals were advised to
    disconnect or isolate these monitors from clinical networks.
- Scope: Analysts estimate that tens of thousands of affected devices were impacted.
    The FDA didn’t publish exact figures.
- Security Failures: No firmware signing, no encrypted communications, and the
    device could override user-configured network settings.
- OEM Lessons: Highlights the importance of code audits, secure firmware design,
    and scrutinizing third-party components. Unexploited vulnerabilities may cause major
    operational disruptions and regulatory scrutiny.

## 1.4 2. Baxter Welch Allyn Connex Spot Monitor - Default Cryptographic Key (2024)

Vulnerability Summary: In May 2024, CISA disclosed (ICSMA- 24 - 151 - 02) that Baxter’s
Connex Spot Monitor contained a default cryptographic key (CVE- 2024 - 1275) used across
all units. An attacker with network access could exploit this to push malicious firmware or
reconfigure devices without authentication. The flaw was reported by Zerocopter
researchers and patched proactively by Baxter in firmware version 1.52.01.

- Timeline: The patch was released October 2023, and public disclosure May 2024.
    There is no known in-the-wild exploitation.
- Vendor Response: Baxter released the patch ahead of public disclosure and
    removed the affected configuration tool from public distribution. These mitigation
    steps are essential context for assessing vendor responsiveness.
- Impact: Baxter acknowledged the vulnerability could result in incorrect vitals or
    monitor failure, delaying treatment. No incidents were reported.
- Security Failures: Use of shared encryption keys and weak credential hygiene. A
    related vulnerability in a PC-based configuration tool increased risk.


- OEM Lessons: Cryptographic missteps can undermine secure systems. Each
    device should have unique keys or certificates, and vendors must manage secure
    key lifecycles.

## 1.5 3. GE Vivid Ultrasound Systems - Local Access Exploits and Malware Risk (2024)

Vulnerability Summary: In May 2024, Nozomi Networks and GE disclosed 11
vulnerabilities in GE’s ultrasound products (e.g., Vivid T9). These flaws required physical
access and included hard-coded service credentials (CVE- 2024 - 27107), OS command
injection (CVE- 2024 - 1628), and privilege escalation. Researchers demonstrated that an
insider could gain administrative access, break out of kiosk mode, and install malware like
ransomware.

- Timeline: Vulnerabilities disclosed May 14, 2024. GE provided coordinated updates.
- Clarification on Exploitation Risk: Remote exploitation was not feasible; these
    flaws require physical access. GE noted existing access controls and environmental
    protections render the residual risk acceptable.
- Impact: No reported real-world exploitation. Risks were limited to insider or physical
    access scenarios.
- Security Failures: Hard-coded credentials, insecure privilege boundaries,
    unencrypted local storage.
- OEM Lessons: Even "local-only" vulnerabilities can be severe in clinical
    environments. Assume insider threats are plausible. Remove all hardcoded
    accounts, enforce kiosk integrity, and encrypt stored patient data.

## Recall (2025) 1.6 4. GE Centricity Universal Viewer & CA1000 - Credential Flaw Prompts Class II

# Credential Flaw Prompts Class II Recall (2025)

Vulnerability Summary: In February 2025, GE issued an Urgent Medical Device Correction
after discovering that service credentials for Centricity Universal Viewer and associated
PACS systems (e.g., CA1000) could be discovered and misused. This vulnerability,
disclosed through FDA and Health Canada, led to a Class II recall due to risk of
unauthorized access to imaging data.

- Timeline: Correction initiated Feb 19, 2025; FDA recall posted March 2025.
- GE's Proactive Response: GE managed the disclosure through formal coordinated
    vulnerability disclosure (CVD) channels and operates a dedicated Product Security
    Portal. The company's response included advance mitigation guidance to affected
    users.
- Impact: No exploitation or patient harm occurred. Affected systems remained in use
    under enhanced network security guidance.
- Security Failures: Poor credential management, likely involving default or
    discoverable service accounts.


- OEM Lessons: Secure or eliminate service credentials. Network-accessible imaging
    platforms must have authentication reviews and support credential rotation or
    certificate-based access.

## Tampering 1.7 5. Baxter Life2000 Ventilator - Multiple Vulnerabilities Enabling Firmware

# Vulnerabilities Enabling Firmware Tampering

Summary: In November 2024, Baxter disclosed nine critical vulnerabilities in its Life
ventilator, including hard-coded credentials and unsecured interfaces. Physical access could
allow attackers to compromise settings or firmware, potentially disrupting oxygen delivery.
Baxter issued updates and interim security recommendations while no actual attacks were
reported.

- Vulnerability Summary: In November 2024, Baxter disclosed nine critical
    vulnerabilities in its Life2000 ventilator, including hard-coded credentials and
    unsecured interfaces. Attackers could compromise settings or firmware with physical
    access, potentially disrupting oxygen delivery. Baxter issued updates and interim
    security recommendations while no actual attacks were reported.
- Timeline: On November 14, 2024, CISA disclosed the vulnerabilities through CISA
    (ICS Advisory ICSMA- 24 - 319 - 01). Baxter identified the vulnerabilities internally and
    coordinated the disclosure process.
- Device Context: The Life2000 is a portable ventilation system for home use or
    ambulatory patients. It includes a ventilator unit and tethered "Service PC" software
    for configuration. While not network-connected, it features physical interfaces
    (serial/USB) that create attack surfaces, especially challenging to secure in non-
    clinical settings.
- Security Failures: Multiple critical vulnerabilities created a comprehensive security
    breakdown. These vulnerabilities include cleartext communications (CVE- 2024 -
    9834), unlimited password attempts (CVE- 2024 - 9832), hard-coded credentials (CVE-
    2024 - 48971), unsigned firmware updates (CVE- 2024 - 48974), exposed debug ports
    (CVE- 2024 - 48970), unauthenticated access to calibration functions (CVE- 2024 -
    48966), and insufficient logging (CVE- 2024 - 48967).
- Impact: No exploitation or patient harm reported. All Life2000 units up to software
    version 06.08.00.00 were affected, potentially thousands globally. The FDA classified
    this as a voluntary medical device correction rather than a formal recall.
- OEM Lessons: Security requires defense-in-depth, especially for life-sustaining
    devices. Implement secure boot with signed updates, eliminate hard-coded
    credentials, physically secure debug interfaces, encrypt communications, and
    implement basic access logging. Regular security audits of legacy devices are
    essential to identify vulnerabilities before they're exploited.


## 1.8 Conclusion: Balancing Innovation and Security in Medical Device Development

These five cases reflect an industry-wide trend: regulators and researchers are under
increasing scrutiny of cybersecurity vulnerabilities in medical devices. None of these
incidents resulted in reported exploitation or patient harm, but each exposed critical
weaknesses requiring urgent OEM response.

Common themes include insecure firmware, improper credential handling, weak
cryptography, and lack of defense-in-depth. OEMs must prioritize secure-by-design
practices, implement unique authentication credentials, encrypt all patient data, and support
rapid post-market vulnerability response. Part 2 will explore collaboration with specialized
cybersecurity vendors as a regulatory expectation.

## 1.9 Key Lessons for Medical Device OEMs

These five cases demonstrate critical patterns that demand attention from medical device
manufacturers:

1. Supply Chain Integrity is critical, as vulnerabilities may be introduced before
    devices reach healthcare facilities.
2. Cryptographic implementation requires specialized expertise. Even minor flaws
    can undermine security architectures.
3. Defense-in-Depth is essential; devices must remain secure even if physical access
    is obtained or network protections fail.
4. Credential management remains a challenge, especially for devices requiring
    service access.
5. Communication Protocols for wireless medical devices require rigorous security
    analysis and regular updates.

The increasing sophistication of these attacks indicates that basic security measures are no
longer sufficient. As Part 2 will explore, medical device OEMs must adopt comprehensive
security strategies that address the entire device lifecycle without compromising innovation
speed or clinical functionality.

## 1.10 Customer Q&A

After sharing the drafts with customers, a few questions arose repeatedly. Here are our
security engineer’s responses.

Q: Is this level of cryptography necessary? A: Yes — even without exploitation.
Cryptography isn’t a “nice to have”; it’s the foundation of trust in connected medical devices.
Shared keys are a single point of failure — if one device is compromised, the whole fleet is
vulnerable. In healthcare, where safety and data integrity are critical, that’s unacceptable.

“No known exploitation” doesn’t mean “safe.” Most attacks go undetected, especially on
devices without proper logging. The lack of reported incidents often means we’re blind to
what’s happening.


The risk is real. A tampered reading or failed monitor can delay treatment, mislead clinicians,
or harm patients. Even without a breach, the potential for harm justifies proactive security.

Regulators no longer treat cryptographic hygiene as optional. The FDA’s premarket
cybersecurity guidance and EU MDR/IVDR expect unique keys, signed firmware, and
managed credential lifecycles. Falling short can delay market approvals or trigger
postmarket scrutiny.

It’s cheaper to build this now than to retrofit it later. Responding to an incident — patches,
customer support, hospital alerts, and brand damage — costs more than getting crypto right
from the start.

Q: Do we need this level of cryptography? Has there been real-world exploitation that
justifies this as a priority over features? A: Yes, we do. While there may not be
confirmed exploitation, modern device security isn’t about reacting to breaches — it’s about
preventing them. Shared cryptographic keys and unsigned firmware create single points of
failure that scale any compromise. Regulators expect cryptographic hygiene (e.g., per-
device keys, signed updates) as standard. Weak crypto is no longer a theoretical risk — it’s
a blocker to compliance and a liability if exploited.

Q: We don’t allow physical access to our devices post-install? A: Physical access
controls help, but aren’t foolproof — especially in clinical or semi-public settings. Insider
threats, maintenance staff, or misconfigured service tools can open pathways to local
attacks. Recent incidents (e.g., GE Vivid, Life2000) assumed “no one will access the device
physically” — but that’s not always true. Treat local attack surfaces as exploitable and
harden them with basic controls like credential protection, port lockdown, and secure boot.

Q: Is there a middle-ground approach? We rely on service credentials for support
workflows — eliminating them would be a major change. A: Yes, there’s a pragmatic
path forward. Rather than eliminating service access, we can phase in improvements: move
from shared to per-device or per-role credentials, implement credential rotation and expiry
policies, and introduce certificate-based access for critical updates. These changes improve
security while preserving field engineers’ workflows. Long term, we should aim for role-
based access and secure provisioning — but it doesn’t have to be an overnight shift.


2

The cybersecurity landscape for medical devices has changed. As the threat landscape
expands in scope and sophistication, medical device manufacturers face a critical strategic
decision.

## 2.1 The Unsustainable Status Quo

Medical device OEMs face an impossible balancing act. Engineering teams must:

- Develop innovative features that improve patient outcomes.
- Navigate complex regulatory requirements.
- Maintain strong cybersecurity defenses against evolving threats.

This dilemma creates a zero-sum game where resources for security reduce innovation
capacity—when both are increasingly critical.

## 2.2 The Security Specialization Precedent

We've seen this pattern before in enterprise technology. Consider network security:

Building device security in-house today is like building your own firewall in 2025. It is
technically possible, but strategically unwise.

Just 10 years ago, organizations commonly developed their own firewalls, DDoS protection,
and email security systems in-house. As threats grew more complex and attack methods
more sophisticated, even the largest enterprises transitioned to specialized security
providers.

Medical device security is evolving, driven by four accelerating trends:

## 2.3 Why In-House Security Is Unsustainable

1. Expanding Attack Surface: The proliferation of connected medical devices creates
    more vulnerability points. Each wireless connection, remote monitoring capability,
    and interoperability feature introduces new attack vectors.
2. Growing Technical Complexity: Managing security fundamentals—secure boot
    processes, cryptographic key management, OTA update verification—requires
    specialized expertise that diverts critical engineering resources away from core
    device functionality.
3. Escalating Threat Sophistication: Medical devices now face advanced persistent
    threats from state-sponsored actors and organized cybercrime networks targeting
    healthcare infrastructure. These adversaries employ techniques that overwhelm
    traditional security approaches.


4. Mounting Regulatory Requirements: The FDA's pre-market and post-market
    cybersecurity guidance, NHS Digital requirements, and EU MDR/IVDR frameworks
    create an evolving compliance landscape that demands dedicated security expertise.

## 2.4 The Economic Reality

When viewed through an economic lens, the business case for specialized security
partnerships becomes clear:

- Cybersecurity functions like insurance. It is essential for protection but not directly
    revenue-generating.
- Every hour spent on security infrastructure is time not spent on patient-benefiting
    innovations.
- Security expertise is increasingly specialized, requiring continuous education and
    rare talent.

Medical device OEMs can redirect engineering resources toward their core competency:
creating life-saving medical technologies that advance patient care by partnering with
security specialists.

# 2.5 Embedded Development Strategies to Boost

# Delivery Velocity Without Compromising

# Security

Modern medical device development faces a critical challenge: accelerating time-to-market
while maintaining security standards. Forward-thinking OEMs are addressing this by
partnering with security specialists to implement foundational security capabilities, allowing
their engineering teams to focus on core medical functionality.

## 2.5.1 Hardware Root of Trust: The Foundation of Device Security

A Hardware Root of Trust (HRoT) provides the secure foundation for all other security
measures. This is non-negotiable for medical devices:

- Immutable Device Identity: Each device must have a unique, tamper-resistant
    identity anchored in hardware.
- Cryptographic Key Protection: Private keys must be generated on-device and
    never exposed outside secure hardware.
- Attestation Capabilities: Devices must prove their authenticity to backend systems
    before exchanging sensitive data.

Implementation Strategy: OEMs should leverage pre-integrated security SDKs that
support various hardware platforms, rather than designing custom secure elements or
hardware security modules. This approach eliminates the need to develop complex
cryptographic functions in-house while maintaining flexibility in component selection.


## 2.5.2 Zero-Touch Provisioning: Scaling Secure Manufacturing

Medical device security starts at manufacturing and must persist throughout the device
lifecycle. Zero-touch provisioning automates the secure initialization process:

- Automated Identity Creation: Securely generate and register device identities
    without manual intervention
- Scalable Certificate Management: Automate the creation, validation, and renewal
    of device certificates.
- Manufacturing Integration: Seamlessly incorporate security provisioning into
    existing production workflows

Implementation Strategy: Implement a CLI-driven provisioning system that integrates
directly with CI/CD pipelines. This allows security operations to scale linearly with production
volumes without manual bottlenecks. The system should support standard PKI operations
while abstracting cryptographic complexity from manufacturing processes.

## 2.5.3 Secure Lifecycle Management: Beyond Deployment

Medical devices often remain in service for 10+ years, requiring robust security management
beyond initial deployment:

- Secure Firmware Updates: Cryptographically verify and securely deploy firmware
    updates to maintain device integrity.
- Remote Authentication: Implement mutual TLS for secure device-to-cloud
    communications
- Certificate Rotation: Automate certificate renewal to prevent service disruptions
- Vulnerability Response: Enable rapid security updates for new threats

Implementation Strategy: Deploy a centralized device management platform for visibility
and control over the device fleet. This platform should automate routine security operations
like certificate management and firmware signing while providing tools for responding to
emerging threats.

## 2.5.4 Standards Compliance: Meeting Regulatory Requirements

Medical device OEMs must navigate complex and evolving regulatory requirements:

- FDA Pre-Market Guidance: Address cybersecurity requirements during device
    design
- Post-Market Management: Implement ongoing security monitoring and response
    capabilities
- EU MDR Compliance: Meet European device security and data protection
- Cryptographic Standards: Implement NIST-approved algorithms and key lengths

Implementation Strategy: Partner with security specialists with expertise in regulatory
requirements and pre-validated components. This approach reduces compliance burden and
speeds regulatory approval.


## 2.5.5 The Make vs. Partner Decision Framework

When evaluating security capabilities, OEMs should consider:

1. Core Competency Analysis: Is this capability central to your device's medical
    function?
2. Maintenance Burden: Will this capability require ongoing specialized expertise?
3. Regulatory Impact: Does this capability affect regulatory approval timelines?
4. Development Resource Impact: How does in-house development affect time-to-
    market?

For most OEMs, the analysis leads to a clear conclusion: partnering with security specialists
for foundational capabilities allows faster innovation in core medical functions while reducing
overall development risk.

By implementing these strategies, medical device OEMs can accelerate development
timelines without compromising security. The key is recognizing when to build internally
versus when to leverage specialized security expertise through partnerships.

3

## Ready to Secure Your Medical Devices Without Slowing Innovation?

At Crypto Quantique, we reduce the security implementation burden for medical device
manufacturers. Our solution shrinks what typically requires 50 engineering weeks down to
just 5 weeks—a 90% reduction that allows your team to focus on core device innovations
while meeting rigorous security standards. The result: accelerated time-to-market without
compromising the robust security protections your devices demand.

Our specialized expertise allows your engineers to focus on creating innovative medical
technologies that improve patient outcomes, which is what they do best.

Our expertise lets your engineers focus on creating innovative medical technologies that
improve patient outcomes.

Schedule a confidential consultation with our medical device security experts today at
cryptoquantique.com/medical/ or email us at sales@cryptoquantique.com.

Schedule a confidential consultation with our medical device security experts at
cryptoquantique.com/medical/ or email us at sales@cryptoquantique.com.


## References

1. FDA (2025a). Cybersecurity Vulnerabilities with Certain Patient Monitors from

```
Contec and Epsimed – Safety Communication. U.S. Food & Drug Administration, 30
Jan 2025. (Accessed via FDA.gov)
```
2. CISA (2025). ICS Medical Advisory (Update A) – Contec Health CMS8000 Patient

```
Monitor (ICSMA- 25 - 030 - 01). Cybersecurity & Infrastructure Security Agency, revised
25 Feb 2025. (Technical details of Contec monitor vulnerabilities)
```
3. Wirth, A. (2025). “Contec CMS8000 Vulnerability Communication.” MedCrypt Blog,

```
31 Jan 2025. (Summary of Contec backdoor and FDA/CISA alerts)
```
4. CISA (2024a). ICS Medical Advisory – Baxter Welch Allyn Connex Spot Monitor

```
(ICSMA- 24 - 151 - 02). Cybersecurity & Infrastructure Security Agency, 30 May 2024.
(Advisory outlining CVE- 2024 - 1275 default key issue)
```
5. Health Sector Cybersecurity Coordination Center – HC3 (2024). “Sector Alert:

```
Baxter Welch Allyn Vulnerabilities – CVSS 9+ Critical (TLP:CLEAR).” U.S. HHS HC
Bulletin, 04 Jun 2024. (Details on default crypto-key and credential exposure
vulnerabilities in Baxter devices)
```
6. Nozomi Networks (2024). “Vulnerabilities on GE HealthCare Vivid Ultrasound Could

```
Allow Malicious Insiders to Install Ransomware, Access Data.” Nozomi Labs
Research Report, 14 May 2024. (Technical report on the 11 vulnerabilities in GE
Vivid T9 and EchoPAC software)
```
7. Lakshmanan, R. (2024). “Researchers Uncover 11 Security Flaws in GE HealthCare

```
Ultrasound Machines.” The Hacker News, 16 May 2024. (News article summarizing
the GE Vivid ultrasound exploit scenarios and CVEs)
```
8. FDA (2025b). Class 2 Device Recall – GE Healthcare Centricity Universal Viewer &

```
Cardiology CA1000. FDA Recalls Database Entry, Recall ID 96375, posted 28 Mar
```
2025. (Recall notice describing the service credential vulnerability and recommended
actions)
9. Health Canada (2025). Recall Alert: Centricity Universal Viewer (UV), PACS-IW,

```
Radiology and Cardiology Systems – Cybersecurity Vulnerability. Published 13 Mar
2025 by Health Canada. (Canadian recall alert equivalent to the FDA notice for GE
Centricity, detailing the issue and recall class)
```
10. Health-ISAC/Finite State/Securin report on 2023 medical device

```
vulnerabilitiesplantemoran.comfinitestate.io
```
11. Forescout research on newly discovered IoMT device vulnerabilities

```
(2024)industrialcyber.coindustrialcyber.co
```
12. Claroty Team82 analysis of healthcare IoT exposures

```
(2025)industrialcyber.coindustrialcyber.co
```
13. FDA & CISA medical device cybersecurity advisories (2024)cisa.gov; FBI/IC3 alert

```
on device hacking riskstherecord.media
```

