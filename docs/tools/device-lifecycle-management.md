---
title: "Device Lifecycle Management"
sidebar_label: "Device Lifecycle Management"
sidebar_position: 8
tags: [tools, onboarding, bootstrapping, device-management, iot, cloud, dps, monitoring]
---
# Device Lifecycle Management Platforms

A device's security needs don't end after it's manufactured; they extend across its entire operational life. This category covers platforms that manage the device's security posture from its first connection to its last day in the field.

This involves two key phases:
1.  **Secure Onboarding (Bootstrapping):** Automating the complex workflow where a new device uses its factory identity to securely connect to a cloud service, prove its legitimacy, and get provisioned with its operational credentials.
2.  **Operational Management:** Continuously monitoring the device's integrity, managing its credentials (e.g., renewing certificates), and securely handling end-of-life events like revoking access for decommissioned or compromised devices.

| Platform | Type | Description |
| :--- | :--: | :---------- |
| [**Azure IoT Hub DPS**](https://learn.microsoft.com/en-us/azure/iot-dps/about-iot-dps) | 💰 | A helper service for Azure IoT Hub that enables zero-touch, just-in-time provisioning to the right IoT hub without requiring human intervention. |
| [**AWS IoT Core Provisioning**](https://aws.amazon.com/iot-core/features/#Device_provisioning) | 💰 | AWS provides multiple methods for device provisioning, including fleet provisioning and just-in-time provisioning, to securely register devices at scale. |
| [**QuarkLink**](https://www.cryptoquantique.com/products/quarklink/) | 💰 | Automates the secure onboarding of devices with hardware roots of trust to multiple cloud platforms and provides ongoing lifecycle management and monitoring. |
| [**Pelion Device Management**](https://pelion.com/) | 💰 | An Arm-backed platform providing secure device onboarding, lifecycle management, and firmware updates for a wide range of IoT devices. | 