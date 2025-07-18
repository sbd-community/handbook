---
title: "Data Privacy & Secure Deletion"
sidebar_label: "Data Privacy & Deletion"
sidebar_position: 5
tags: [privacy, data-protection, gdpr, red, cra, secure-by-design]
---
# Guide: Implementing Data Privacy & Secure Deletion

## 1. Introduction to Data Privacy

### 1.1. What is Data Privacy?

Data privacy is the practice of protecting a user's personal information from unauthorized access, use, or disclosure. While cybersecurity focuses on defending the device itself against attacks, data privacy is centered on the user's rights and control over their data.

It involves integrating privacy-enhancing controls into the product's core architecture from the start—a concept known as 'Privacy by Design'. This means giving users clear control over their information and, just as importantly, collecting only the data that is absolutely necessary for the product to function (data minimisation).

### 1.2. The Regulatory Requirement

Several regulations mandate privacy-preserving features. For the **[Cyber-Resilience Act (CRA)](./../../standards/eu/cra-overview.md)**, the key obligations are found in Annex I and clarified by the BSI's technical guidelines:

-   **Data Minimisation ([Annex I § 1 (2)(g)][cra_annexI])**: The CRA requires that data collection and processing is limited "to only what is necessary". The BSI guideline ([REQ_ER 8][bsi_tr_03183_p1]) reinforces this, stating data should only be processed for the product's intended purpose.
-   **Secure Data Deletion ([Annex I § 1 (2)(m)][cra_annexI])**: The CRA mandates that manufacturers must "provide a function for users to securely and completely delete all personal and configuration data." This is mirrored in the BSI's requirement for a secure deletion mechanism ([REQ_ER 14][bsi_tr_03183_p1]).

Beyond the CRA, the **[Radio Equipment Directive (RED)](./../../standards/eu/red-overview.md)** also requires that products incorporate safeguards to ensure that "personal data and privacy of the user... are protected" ([RED Art 3.3.e][red_dir]).

### 1.3. Do I Really Need to Do This?

This guide covers two key privacy obligations from the EU's **[Cyber-Resilience Act (CRA)](./../../standards/eu/cra-overview.md)**: **Data Minimisation** and **Secure Data Deletion**. While these principles have a broad scope, their application depends on the specific nature of your product. Rather than being a simple "yes" or "no", the question is about understanding *which* rules apply.

#### Data Minimisation ([Annex I § 1 (2)(g)][cra_annexI])

The CRA requires that products "process only data, personal or other, that are adequate, relevant and limited to what is necessary".

-   **Is there an exception?** Strictly speaking, the only way this requirement doesn't apply is if your product processes **no data at all**. For any 'product with digital elements', this is exceptionally rare.
-   **What if I don't process personal data?** The principle of data minimisation still applies. You must be able to justify that any non-personal data you collect (e.g., performance metrics, operational logs) is necessary for the product's intended purpose. The BSI guideline ([REQ_ER 8.1][bsi_tr_03183_p1]) is clear on this point.
-   **The Bottom Line:** You almost certainly need to conduct a data minimisation review. The real task is to identify what data you process and justify why it is necessary. If that data includes personal information, additional obligations under regulations like GDPR will also apply.

#### Secure Data Deletion ([Annex I § 1 (2)(m)][cra_annexI])

The CRA mandates that manufacturers must "provide the possibility for users to securely and easily remove on a permanent basis all data and settings".

-   **Exception 1: The Product is Stateless.** If your product does not store *any* user data (personal or otherwise) and has no user-configurable settings saved to persistent memory, there is no data to delete. An example is a simple sensor that only transmits a live reading without ever storing it.
-   **Exception 2: The Product is Not Configurable.** The BSI guideline for implementing a factory reset ([REQ_ER 3.1][bsi_tr_03183_p1]) includes the condition: "The TOE can be configured". If your product genuinely has no user-configurable settings (e.g., no network settings, no user preferences), then a reset function may not be required.
-   **What if I don't store personal data?** If your product stores settings or operational data but no *personal data*, you still need a mechanism to delete that data. You must provide a "factory reset" function that clears all settings and non-personal data, allowing a user to return the device to its original state.
-   **The Bottom Line:** For the vast majority of connected products—which store at least some configuration data like Wi-Fi credentials—a secure reset or deletion function is mandatory. While your threat model will inform *how* you implement it (e.g., simple file deletion vs. cryptographic erasure), the legal requirement for the function itself is rarely exempted.

## 2. Key Privacy-Enhancing Practices

### 2.1 Data Minimisation
The principle of data minimisation means you should only collect and process personal data that is absolutely essential for your product to function.
- **Question Everything:** For every piece of data you collect, ask: "Do we truly need this for the feature to work?"
- **Avoid Over-Collection:** Don't collect data just because you think it might be useful for a future, unplanned feature.
- **Local vs. Cloud Processing:** Whenever possible, process data on the device itself rather than sending it to the cloud. For example, if you need to detect a keyword in audio, do it locally and only send a notification to the cloud, not the raw audio stream.

### 2.2 User Consent
If you do need to process personal data, you must get the user's explicit, informed consent *before* you collect it.
- **Clear Language:** Explain exactly what data you are collecting and what you will do with it in simple, easy-to-understand language.
- **Granular Choices:** Allow users to opt-in to specific data collection features individually, rather than forcing them to accept an all-or-nothing policy.
- **Easy Withdrawal:** Make it just as easy for a user to withdraw their consent as it was to give it.

### 2.3 Secure Deletion
Users have the right to delete their data. You must provide a simple and effective way for them to do so.
- **Device-Level Deletion:** Implement a "factory reset" function that securely erases all user data and configuration from the device's persistent storage. This should overwrite the data, not just mark it as deleted in the filesystem.
- **Service-Level Deletion:** Provide a mechanism in your mobile app or web portal for a user to delete their account and all associated personal data from your cloud services.
- **Clear Confirmation:** When a user deletes their data, the interface should provide clear confirmation that the action was successful.

## 3. Compliance Checklist

To ensure your product's design respects user privacy and meets regulatory requirements, ensure you can answer "yes" to the following:

- [ ] **Data Minimisation Review:** Have you reviewed all data collected by your product and documented the justification for why each piece is necessary?
- [ ] **Informed Consent:** Does your product obtain explicit user consent before collecting any personal data?
- [ ] **Easy Opt-Out:** Can a user easily withdraw their consent at any time?
- [ ] **Secure Factory Reset:** Does the device have a factory reset feature that securely erases all user data from its memory?
- [ ] **Cloud Data Deletion:** Is there a user-accessible function to delete their account and all personal data from your backend services?
- [ ] **Privacy Policy:** Is your privacy policy, explaining your data handling practices, clearly written and easily accessible to users?

<!-- Citations -->
[red_dir]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32014L0053 "Directive 2014/53/EU (Radio Equipment Directive) – full text"
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements"
[bsi_tr_03183_p1]: https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI-TR-03183-1-0_9_0.pdf "BSI TR-03183 Part 1: General requirements"