---
title: "Device Lifecycle Management"
sidebar_label: "Device Lifecycle Management"
sidebar_position: 11
tags: [tools, dlm, device-management, iot, security, cra]
---
# Tools: Device Lifecycle Management

## 1. Introduction

Device Lifecycle Management (DLM) platforms provide the cloud-based infrastructure to manage a fleet of connected devices from initial activation through to end-of-life. They are a crucial component for meeting ongoing compliance and operational security requirements.

For a detailed overview of the different phases of a product's lifecycle, see our **[Implementation Guides](../implementation/index.md)**.

## 2. Tooling Landscape

These platforms typically offer a suite of services, including device monitoring, remote access, OTA updates, and security log collection. They are the operational backbone that enables a manufacturer to fulfill its post-market obligations under regulations like the CRA.

| Tool | Type | Description |
| :--- | :--- | :--- |
| [Golioth](https://golioth.io/) | 💰 | An IoT device management cloud that provides a suite of services for connecting, managing, and collecting data from a fleet of devices. |
| [QuarkLink](https://www.cryptoquantique.com/products/quarklink/) | 💰 | An end-to-end IoT security platform providing secure provisioning, onboarding, and full lifecycle management. |
| [Memfault](https://memfault.com/) | 💰 | An observability platform for IoT that combines remote debugging, monitoring, and OTA update capabilities to help teams proactively manage device health and security. |
| [Balena](https://www.balena.io/) | 💰 | A complete IoT fleet management platform that uses a container-based approach to deploy and manage applications on connected Linux devices. |
| [AWS IoT Device Management](https://aws.amazon.com/iot-device-management/) | 💰 | A suite of services from Amazon Web Services for registering, organizing, monitoring, and remotely managing IoT devices at scale. |
| [Azure IoT Hub](https://azure.microsoft.com/en-us/products/iot-hub) | 💰 | Microsoft's cloud service for bi-directional communication between IoT applications and the devices it manages. Includes device management capabilities. |
| [ThingsBoard](https://thingsboard.io/) | 🐙💰 | An open-source IoT platform for data collection, processing, visualization, and device management. It offers both a community edition and commercial options. |
| [Thistle Technologies](https://thistle.tech/) | 💰 | A commercial security platform providing a device control center for fleet monitoring and management. |
| [Pelion](https://pelion.com/) | 💰 | An Arm-backed platform providing secure device onboarding and lifecycle management for a wide range of IoT devices. |

<!-- vale off -->
*Type: 💰=Commercial, 🐙=Open-Source*
<!-- vale on -->

## 3. Build vs. Buy: A Clear Choice

Unless a company's core business is providing a global IoT cloud platform, the decision is straightforward: **buy a managed service**.

Building a secure, scalable, and reliable device management platform from the ground up is an immense undertaking. It requires dedicated teams of experts in cloud infrastructure, database management, security, and network operations. The cost and complexity are prohibitive for any company whose primary focus is manufacturing a physical product.

The practical and intelligent choice is to leverage one of the mature commercial platforms available. This allows you to focus your resources on your product's unique features and your customers' needs, while offloading the complex, undifferentiated work of cloud infrastructure to a trusted partner.
