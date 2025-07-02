---
title: "Example: Threat Model for a CGM System"
sidebar_label: "Example: CGM System Threat Model"
sidebar_position: 2
tags: [threat-modeling, example, risk-assessment, stride, medical, fda]
---
# Example Threat Model: A Bluetooth CGM System

This document provides a second, more advanced example of a threat model for a connected medical device: a Bluetooth-enabled Continuous Glucose Monitor (CGM) system. It follows the four-step process outlined in the main [Threat Modeling Guide](../../implementation/build-phase/threat-modeling.md) and highlights risks directly related to patient safety.

This type of document is critical for demonstrating compliance with medical device regulations, such as the FDA's cybersecurity requirements, where a failure could result in direct patient harm.

---

### **Step 1: Decompose the System**

The system architecture is different from a typical home IoT device, with a focus on wireless personal area networks.

*   **Components:**
    *   **CGM Sensor:** A disposable, body-worn sensor that measures glucose levels in interstitial fluid. Contains the primary firmware.
    *   **Smartphone App:** The primary interface for the patient. It receives data from the sensor, displays trends, triggers alerts, and communicates with the cloud.
    *   **Cloud Backend:** Stores historical glucose data for analysis by the patient and their clinician.
    *   **Clinician Dashboard:** A web portal for healthcare providers to review patient data.
*   **Data Flows:**
    1.  `CGM Sensor <--> Smartphone App`: The sensor broadcasts glucose values every few minutes over a secured Bluetooth Low Energy (BLE) channel.
    2.  `Smartphone App <--> Cloud Backend`: The app uploads historical data to the cloud and downloads user profile settings.
    3.  `Cloud Backend <--> Clinician Dashboard`: The clinician's web app fetches patient data for review.
*   **Trust Boundaries:**
    *   The BLE connection between the sensor (a trusted, single-patient device) and the smartphone (a less-trusted, multi-purpose device).
    *   Between the patient's personal device (smartphone) and the cloud service.
    *   Between the cloud service and the clinician's trusted network.

### **Step 2: Identify Threats (using STRIDE)**

The threats for a medical device are focused on safety and data integrity.

| STRIDE Category          | Threat Example                                                                                                 |
| :----------------------- | :-------------------------------------------------------------------------------------------------------------- |
| **S**poofing             | An attacker spoofs the CGM sensor's identity to inject false, dangerously high glucose readings into the patient's app. |
| **T**ampering            | A man-in-the-middle attacker intercepts the BLE communication and alters a real glucose value of "70" (low) to "120" (normal), preventing a critical alert. |
| **R**epudiation          | A bug in the smartphone app fails to save a record of a manual calibration event, making it impossible to audit why the sensor's readings might have drifted. |
| **I**nformation Disclosure | An attacker in close physical proximity (e.g., on a bus) eavesdrops on the unencrypted BLE broadcast and captures the patient's glucose data. |
| **D**enial of Service    | An attacker intentionally jams the BLE radio frequency, preventing the smartphone from receiving any data from the sensor and silencing critical alerts. |
| **E**levation of Privilege | A malicious app on the smartphone uses an operating system vulnerability to read data from the CGM app's local storage. |

### **Step 3: Rate and Prioritize Threats**

Risk is now rated based on potential for **patient harm**.

| Threat                                      | Risk Rating | Justification                                                                |
| :------------------------------------------ | :---------- | :--------------------------------------------------------------------------- |
| Tampering with glucose data in transit      | **Critical**  | Directly leads to incorrect treatment decisions (e.g., missed insulin dose), which can cause severe injury or death. |
| Spoofing false glucose readings             | **Critical**  | Same as above; a successful spoof could cause a catastrophic medical event. |
| Denial of Service on BLE alerts             | **High**    | Prevents patient from being notified of a real, dangerous hypoglycemic or hyperglycemic event, especially while sleeping. |
| Information Disclosure of glucose data      | **Medium**  | A serious privacy violation, but does not directly cause physical harm.      |
| Elevation of Privilege on smartphone        | **Medium**  | Depends on the OS vulnerability, but could lead to data disclosure. Indirect risk to patient safety. |
| Repudiation of calibration event            | **Low**     | An inconvenience for troubleshooting, but unlikely to cause immediate harm.   |

### **Step 4: Define Mitigations**

The mitigations must be robust enough to ensure patient safety.

| Threat                               | Mitigation (Security Requirement)                                                                                             |
| :----------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| Tampering with / Spoofing glucose data | The sensor and app **must** use BLE Secure Connections pairing with a message authentication code (MAC) on every single data packet to prevent tampering and ensure authenticity. |
| Denial of Service on BLE alerts      | The device **must** have an on-body alerting mechanism (e.g., vibration) that is independent of the smartphone connection for critical alerts like "critically low glucose." |
| Information Disclosure via BLE       | All communication between the sensor and app **must** be encrypted using the authenticated session key established during the BLE pairing process. |
| Elevation of Privilege on smartphone | The mobile app **must** use the operating system's secure storage keychain/keystore to store any sensitive data, such as authentication tokens for the cloud. | 