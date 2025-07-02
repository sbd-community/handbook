---
title: "Example: Low-Stakes BLE Sensor Threat Model"
sidebar_label: "Example: Low-Stakes BLE Sensor"
sidebar_position: 3
tags: [threat-modeling, example, risk-assessment, stride, proportionality]
---
# Example Threat Model: A Low-Stakes BLE Sensor

This document provides a third example of a threat model for a very simple, low-stakes consumer device: a battery-powered Bluetooth Low Energy (BLE) temperature and humidity sensor.

The primary purpose of this example is to illustrate the principle of **proportionality**. The effort invested in a risk assessment should match the complexity and risk profile of the product. For a low-risk device, the threat model can be a concise document that justifies accepting certain risks, rather than mitigating every theoretical threat.

---

### **Step 1: Decompose the System**

This system is intentionally simple, with no cloud connectivity or complex features.

*   **Components:**
    *   **Sensor Device:** A small, battery-powered device with a temperature/humidity sensor and a BLE radio.
    *   **Smartphone App:** A simple app that listens for and displays the sensor's data.
*   **Data Flows:**
    1.  `Sensor Device --> Smartphone App`: The sensor uses non-connectable BLE advertising packets to broadcast its current temperature and humidity data. There is no pairing and no two-way communication.
*   **Trust Boundaries:**
    *   The only trust boundary is the one-way BLE broadcast from the sensor into the environment.

### **Step 2: Identify Threats (using STRIDE)**

Given the simple architecture, the number of credible threats is very small.

| STRIDE Category          | Threat Example                                                                                                 |
| :----------------------- | :-------------------------------------------------------------------------------------------------------------- |
| **S**poofing             | An attacker could create a fake BLE device that broadcasts counterfeit temperature and humidity readings.         |
| **T**ampering            | Not applicable. Since the data is in a one-way broadcast, an attacker can't modify it. They would just spoof a new broadcast. |
| **R**epudiation          | Not applicable. There are no user actions or commands.                                                          |
| **I**nformation Disclosure | Anyone with a BLE scanner in range can read the broadcasted temperature data.                                   |
| **D**enial of Service    | An attacker could use a radio jammer to block the BLE signal, preventing the app from receiving data.             |
| **E**levation of Privilege | Not applicable. There are no user accounts, roles, or privileges to elevate.                                     |

### **Step 3: Rate and Prioritize Threats**

The risk rating reflects the low-impact nature of the data and device.

| Threat                                      | Risk Rating | Justification                                                                |
| :------------------------------------------ | :---------- | :--------------------------------------------------------------------------- |
| Information Disclosure of temperature       | **Low**     | The temperature of a room is not considered sensitive information. The data is intentionally public. |
| Spoofing fake temperature readings          | **Low**     | The data is non-critical. A false reading has no safety impact and, at worst, causes minor user confusion. |
| Denial of Service via BLE jamming           | **Low**     | Annoying for the user, but causes no harm or data loss. The device continues to function, and the reading will appear when the interference stops. |

### **Step 4: Define Mitigations**

For a low-stakes product, accepting risk is a key part of the process. This demonstrates proportionality.

| Threat                               | Mitigation (Security Requirement)                                                                                             |
| :----------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| Information Disclosure of temperature | **Accept Risk.** This is the intended function of the device. The threat model serves to document this as an intentional design choice. |
| Spoofing fake temperature readings   | **Accept Risk.** For a low-cost consumer product, the cost and battery-life impact of adding cryptographic authentication to non-critical data is not justified by the low risk. This is a documented business and security decision. |
| Denial of Service via BLE jamming    | **Accept Risk.** It is not feasible for a low-cost device to defend against dedicated radio jamming attacks. The user guide should mention that other 2.4GHz devices can cause interference. |
