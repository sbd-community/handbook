---
title: "PECR (UK)"
sidebar_label: "PECR"
sidebar_position: 7
tags: [pecr, compliance, uk, privacy, iot]
---
# PECR (Privacy and Electronic Communications Regulations)

## 1. Why PECR matters for Connected Devices

The **Privacy and Electronic Communications Regulations (PECR)** sit alongside the UK GDPR and the Data Protection Act 2018. They provide specific privacy rights in relation to electronic communications.

While the primary focus of this handbook is on the *product security* aspects of regulations like PSTI and the EU CRA, PECR is a critical piece of the UK compliance puzzle for the *services* that surround a connected device. It governs electronic marketing, the use of cookies and tracking technologies, and the security of communications.

For manufacturers, this means that the device itself, its companion apps, and its cloud communications all fall within PECR's scope. In June 2025, the UK's Information Commissioner's Office (ICO) released specific guidance on this topic, making the obligations for IoT device makers clearer.

:::info Official texts
- **PECR - Full Text**: [The Privacy and Electronic Communications (EC Directive) Regulations 2003][pecr_legislation].
- **ICO's General Guide to PECR**: [ICO's official guidance on PECR][ico_guide].
- **ICO's IoT-specific Guidance**: [Guidance for consumer Internet of Things products and services][ico_iot_guide].

The ICO's IoT guidance is the key reference for applying these rules to connected devices.
:::

| PECR milestone | Legal basis | Date |
| :--- | :--- | :--- |
| PECR comes into force | [PECR Reg. 1][pecr_reg1] | **2003-12-11** |
| UK GDPR consent standard applies | [Data Protection Act 2018][dpa_2018] | **2018-05-25** |
| ICO IoT-specific guidance published | [ICO IoT Guidance][ico_iot_guide] | **2025-06-16** |

**Relationship to other laws**

| Law | How it interacts with PECR |
|-----|----------------------------|
| **UK GDPR** | PECR's rules on consent for cookies and marketing are linked to the GDPR's definition of consent. If you need consent under PECR, you **must** meet the high standard of UK GDPR consent. Information collected via IoT devices (e.g. health data from a wearable) may also be 'special category data', requiring an additional legal basis under GDPR. |
| **[PSTI Act](./psti-overview.md)** | The Product Security and Telecommunications Infrastructure (PSTI) Act 2022 focuses on the security of the device itself (e.g., banning default passwords). PECR focuses on the privacy of the communications that use that device. The two are complementary: a PSTI-compliant device helps ensure the confidentiality that PECR requires. |
| **[Cyber-Resilience Act (CRA)](../eu/cra-overview.md)** | For UK manufacturers selling into the EU, the Cyber-Resilience Act will impose product security requirements. Like PSTI, the CRA is complementary to PECR, ensuring the device is secure enough to protect the communications flowing through it. |

## 2. Scope – Which Products are Covered?

PECR applies to any organisation that provides a public electronic communications service or uses such services for marketing. Crucially for IoT, **Regulation 6** applies to anyone who stores information on, or gains access to information stored in, the "terminal equipment" of a user.

The ICO's guidance clarifies that an IoT device connected to a public network (e.g., the internet) **is** considered "terminal equipment". This is true whether the device connects directly or indirectly (e.g., via a smartphone app). This means that if you design an IoT product, you must comply with PECR's rules on consent and transparency when your device, its software, or its companion app reads or writes data.

:::tip Examples of Personal Data Processed by IoT Devices (ICO Guidance)
*   **Provided by user**: Name, email, date of birth, account details.
*   **Observed from user**: How a user interacts with the device or companion app.
*   **Collected from hardware**: Device identifiers, sensor data (temperature, movement), location data, voice recordings, video feeds.
*   **Inferred about user**: Patterns of life, health status, or even presence in a home, derived from combining other data points.
:::

Crucially, some of this data can be **special category data** under UK GDPR, which requires a higher level of protection. For example:
*   A fitness tracker collecting heart rate data is processing **health data**.
*   A smart doorbell with facial recognition capabilities could be processing **biometric data**.

Processing this type of data requires not only consent under PECR for accessing the device, but also a separate, explicit legal basis under Article 9 of the UK GDPR.

## 3. Key PECR Obligations for Device Makers

The ICO's guidance clarifies how PECR's rules apply to consumer IoT products. The key for manufacturers is understanding that the "user's terminal equipment" can be the IoT device itself, not just a phone or computer.

| Obligation & Legal Basis | Interpretation & Engineering Tasks | Implementation Guides |
| :--- | :--- | :--- |
| **Confidentiality of Communications**<br/>[PECR Reg. 5][pecr_reg5] | You must take measures to prevent unauthorised access to communications over public networks. This means protecting data both in-transit and at-rest. | Implement end-to-end encryption using strong, up-to-date protocols (e.g., TLS 1.3) for all data transmitted between the device, apps, and cloud services. See [Key Provisioning & Storage](../../implementation/build-phase/key-provisioning.md). |
| **Consent for Cookies & Trackers**<br/>[PECR Reg. 6][pecr_reg6] | You **must** get consent before storing information on, or accessing information from, a user's device. This includes using SDKs, fingerprinting, or tracking pixels in companion apps or on the device itself. Consent must be opt-in, unbundled, and as easy to withdraw as it is to give. | Design clear, granular, and un-forced consent banners into the device setup process and companion apps. Default all non-essential tracking and advertising features to 'off'. See [Data Privacy & Secure Deletion](../../implementation/build-phase/data-privacy.md). |
| **Marketing Communications**<br/>[PECR Regs. 19-24][pecr_reg19] | You **must** have prior consent before sending marketing emails, texts, or other electronic messages, or making automated marketing calls. | Keep marketing consent separate from functional/service notifications (e.g., security updates). Ensure unsubscribe mechanisms are simple and effective. Provide clear information about who is sending the marketing. See [User Information & Documentation](../../implementation/build-phase/user-documentation.md). |

## 4. Enforcement & Penalties

PECR is enforced by the UK's **Information Commissioner's Office (ICO)**. The ICO has a range of powers to investigate and penalise non-compliance.

- **Audits & Notices**: The ICO can conduct compulsory audits of providers and issue information notices (requiring organisations to provide information) and enforcement notices (requiring them to take specific steps to comply).
- **Fines**: For most breaches, the ICO can issue a fine of up to **£500,000**. However, for serious failures to comply with Regulation 5 (Confidentiality) and Regulation 6 (Consent for cookies), the ICO can use its powers under the UK GDPR. This allows for significantly higher fines of up to **£17.5 million or 4% of total annual worldwide turnover**, whichever is greater.

<!-- Citations -->
[pecr_legislation]: https://www.legislation.gov.uk/uksi/2003/2426 "The Privacy and Electronic Communications (EC Directive) Regulations 2003"
[ico_guide]: https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/ "ICO Guide to PECR"
[ico_iot_guide]: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/online-tracking/guidance-for-consumer-internet-of-things-products-and-services/ "ICO Guidance for consumer Internet of Things products and services"
[pecr_reg1]: https://www.legislation.gov.uk/uksi/2003/2426#regulation-1 "PECR Regulation 1 - Citation and commencement"
[pecr_reg5]: https://www.legislation.gov.uk/uksi/2003/2426#regulation-5 "PECR Regulation 5 - Security of public electronic communications services"
[pecr_reg6]: https://www.legislation.gov.uk/uksi/2003/2426#regulation-6 "PECR Regulation 6 - Confidentiality of communications"
[pecr_reg19]: https://www.legislation.gov.uk/uksi/2003/2426#regulation-19 "PECR Regulations 19-24 - Use of automated calling systems"
[dpa_2018]: https://www.legislation.gov.uk/ukpga/2018/12 "Data Protection Act 2018" 