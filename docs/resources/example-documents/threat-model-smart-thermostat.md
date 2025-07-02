---
title: "Example: Threat Model for a Smart Thermostat"
sidebar_label: "Example: Smart Thermostat Threat Model"
sidebar_position: 1
tags: [threat-modeling, example, risk-assessment, stride]
---
# Example Threat Model: A Wi-Fi Smart Thermostat

This document provides a practical, lightweight example of a threat model for a typical consumer IoT product: a Wi-Fi-connected smart thermostat. It follows the four-step process outlined in the main [Threat Modeling Guide](../../implementation/build-phase/threat-modeling.md).

The goal of this exercise is to proactively identify potential security threats and define concrete engineering requirements to mitigate them. This document serves as a key piece of evidence for a product's technical file, demonstrating that a cybersecurity risk assessment has been performed as required by regulations like the EU's Cyber-Resilience Act.

---

### **Step 1: Decompose the System**

First, we break the system down into its core parts and how they communicate.

*   **Components:**
    *   **Thermostat Device:** The physical unit on the wall with a Wi-Fi chip, firmware, and temperature sensors.
    *   **Cloud Service:** An API backend that stores user data, schedules, and relays commands.
    *   **Mobile App:** The iOS/Android app users interact with.
    *   **Firmware Update Server:** A dedicated server that hosts and delivers new firmware versions.
*   **Data Flows:**
    1.  `Mobile App <--> Cloud Service`: User authenticates and sends commands (e.g., "set temp to 21°C").
    2.  `Thermostat <--> Cloud Service`: The device reports the current temperature and receives commands from the cloud.
    3.  `Thermostat <--> Update Server`: The device periodically checks for and downloads new firmware.
*   **Trust Boundaries:**
    *   Between the user's home network and the public internet.
    *   Between the mobile app and the cloud service.

### **Step 2: Identify Threats (using STRIDE)**

Now, we brainstorm what could go wrong for each data flow.

| STRIDE Category          | Threat Example                                                                                                  |
| :----------------------- | :-------------------------------------------------------------------------------------------------------------- |
| **S**poofing             | An attacker on the local Wi-Fi network impersonates the cloud service to send fake commands to the thermostat.      |
| **T**ampering            | An attacker intercepts and modifies the firmware update while it's in transit, installing malicious code.       |
| **R**epudiation          | A user with shared access denies changing the schedule, and there is no audit log to verify who made the change.  |
| **I**nformation Disclosure | An attacker breaches the cloud database and steals the home/away schedules for thousands of users.              |
| **D**enial of Service    | An attacker floods the thermostat with network traffic, causing it to crash or lose connectivity.               |
| **E**levation of Privilege | A regular user finds a flaw in the mobile app's API requests that lets them gain admin access to another user's account. |

### **Step 3: Rate and Prioritize Threats**

We assign a risk level to focus on what matters most.

| Threat                                      | Risk Rating | Justification                                                                |
| :------------------------------------------ | :---------- | :--------------------------------------------------------------------------- |
| Tampering with firmware update              | **High**    | Complete device takeover, potential for permanent damage or inclusion in a botnet. |
| Information Disclosure of user schedules  | **High**    | Major privacy violation and physical security risk (knowing when homes are empty). |
| Elevation of Privilege via API              | **High**    | Allows an attacker to control another user's device and access their data.   |
| Spoofing commands on local network          | **Medium**  | Requires local network access, but can result in high energy bills or discomfort. |
| Denial of Service against device            | **Medium**  | High annoyance factor, but temporary and doesn't compromise data.          |
| Repudiation of schedule change              | **Low**     | Annoying for users, but low impact in terms of safety or security.           |

### **Step 4: Define Mitigations**

Finally, we turn the high-priority threats into concrete engineering tasks. This is the goal of the exercise.

| Threat                               | Mitigation (Security Requirement)                                                                                             |
| :----------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| Tampering with firmware update       | The device **must** cryptographically verify the signature of any new firmware image before installing it. The update server **must** sign all official firmware. |
| Information Disclosure of schedules  | The cloud service **must** encrypt all sensitive user data at rest. The mobile app **must** use TLS for all communication.    |
| Elevation of Privilege via API       | The cloud API **must** re-verify a user's authorization on every single request to ensure they own the resource they are trying to access. |
| Spoofing commands on local network   | The thermostat **must** use TLS with certificate pinning to ensure it only talks to the legitimate cloud server, preventing man-in-the-middle attacks. |
