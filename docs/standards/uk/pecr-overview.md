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

**Relationship to other laws**

| Law | How it interacts with PECR |
|-----|----------------------------|
| **UK GDPR** | PECR's rules on consent for cookies and marketing are linked to the GDPR's definition of consent. If you need consent under PECR, you **must** meet the high standard of UK GDPR consent. Information collected via IoT devices (e.g. health data from a wearable) may also be 'special category data', requiring an additional legal basis under GDPR. |
| **[PSTI Act](./psti-overview.md)** | The Product Security and Telecommunications Infrastructure (PSTI) Act 2022 focuses on the security of the device itself (e.g., banning default passwords). PECR focuses on the privacy of the communications that use that device. The two are complementary: a PSTI-compliant device helps ensure the confidentiality that PECR requires. |
| **[Cyber-Resilience Act (CRA)](../eu/cra-overview.md)** | For UK manufacturers selling into the EU, the Cyber-Resilience Act will impose product security requirements. Like PSTI, the CRA is complementary to PECR, ensuring the device is secure enough to protect the communications flowing through it. |

## 2. What is Personal Data in an IoT Context?

The ICO guidance makes it clear that most IoT products process personal information. This isn't just user account data; it includes a wide range of information collected and inferred by the device and its services. Manufacturers **must** consider all data they process, as even seemingly anonymous data can become personal information if it can be combined with other data to identify someone.

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

| Obligation | Relevant PECR Reg | How it applies to IoT Manufacturers | Secure & Privacy by Design in Practice |
| :--- | :--- | :--- | :--- |
| **Consent for Cookies & Trackers** | Reg 6 | You **must** get consent before storing information on, or accessing information from, a user's device. This includes using SDKs, fingerprinting, or tracking pixels in companion apps or on the device itself. | Design clear, granular, and un-forced consent banners into the device setup process and companion apps. Default all non-essential tracking and advertising features to 'off'. |
| **Confidentiality of Communications** | Reg 5 | You must take measures to prevent unauthorised access to communications over public networks. | Implement end-to-end encryption using strong, up-to-date protocols (e.g., TLS 1.3) for all data transmitted between the device, apps, and your cloud services. |
| **Location Data** | Reg 6 | While PECR's strict Regulation 14 rules on network-based location data rarely apply to manufacturers, collecting GPS-based location data **does** require consent under Regulation 6, as it involves accessing information on the device. | Provide specific, separate consent options for location tracking. Allow users to easily enable and disable it. Do not collect location data if it is not essential for a user-facing feature (data minimisation). |
| **Marketing Communications** | Regs 19-24 | You **must** have prior consent before sending marketing emails, texts, or other electronic messages. | Keep marketing consent separate from functional/service notifications (e.g., security updates). Ensure unsubscribe mechanisms are simple and effective. |

:::tip Example: Smart TV Advertising (ICO Guidance)
A smart TV uses Automatic Content Recognition (ACR) to identify what a user is watching and serve personalised ads.

- **PECR Issue**: The ACR technology accesses information on the user's TV (terminal equipment).
- **Compliance Action**: The manufacturer **must** get prior consent. The ICO guidance makes it clear this should be off by default. During setup, the user should be given an active choice with 'Accept' and 'Reject' options of equal prominence.
:::

<!-- Citations -->
[pecr_legislation]: https://www.legislation.gov.uk/uksi/2003/2426
[ico_guide]: https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/
[ico_iot_guide]: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/online-tracking/guidance-for-consumer-internet-of-things-products-and-services/ 