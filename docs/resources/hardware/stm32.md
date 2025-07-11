---
title: "STMicroelectronics STM32 Selection for EU CRA Compliance"
sidebar_label: "STMicroelectronics (STM32)"
sidebar_position: 2
tags: [hardware, stm32, stmicroelectronics, cra, compliance, mcu]
---

# STM32 Hardware Selection for EU CRA‑Compliant Connected Products

The **EU Cyber Resilience Act (CRA)** imposes significant security-by-design requirements on manufacturers. For microcontroller-based products, this means selecting a device with a hardware root-of-trust, robust cryptographic capabilities, and a secure lifecycle management path.

STMicroelectronics' **STM32** portfolio offers a broad range of MCUs that provide the hardware foundations for CRA compliance. Leveraging the **STM32Trust** security framework and the extensive **STM32Cube** ecosystem, developers can build products that meet the CRA's essential requirements.

## 1. STM32 Family Cheat-Sheet

The STM32 family is vast, but can be broadly categorized by performance, power, and features. For CRA compliance, the series with advanced security peripherals are of most interest.

*   **STM32U5/L5 (Ultra-Low-Power)**: Based on the Arm® Cortex®-M33 core, these series feature **TrustZone®** for hardware-level isolation, plus ST's most advanced security feature set. They are the go-to choice for new, secure-by-design IoT products.
*   **STM32H7/H5 (High-Performance)**: These Cortex®-M7/M33 MCUs offer maximum processing power combined with a strong set of security features, including crypto accelerators and secure key storage.
*   **STM32WL (Wireless)**: The world's first LoRaWAN-enabled SoC, this Cortex®-M4/M0+ series includes security features tailored for long-range wireless applications, such as a secure key management service.
*   **STM32G4/G0 (Mainstream)**: Cost-effective MCUs that still include a solid baseline of security features like a hardware crypto engine and a unique device ID, suitable for less critical applications.

ST's **Secure Firmware Update (SFU)** and **Secure Boot (SBSFU)** reference implementations are key enablers for building a compliant update mechanism.

### Table 1 – STM32 Series vs. Security & Key Features

| Series    | CPU Core          | Key HW Security Features                                                                    | Stand-out Capability                           | Typical Fit                                       |
|-----------|-------------------|---------------------------------------------------------------------------------------------|------------------------------------------------|---------------------------------------------------|
| **STM32U5** | Cortex-M33 @ 160MHz | TrustZone®, HUK, AES, PKA, OTFDEC, Tamper, Secure Boot, RDP, Unique ID                       | Best-in-class ultra-low power with full security | Power-constrained, high-security IoT Endpoints     |
| **STM32L5** | Cortex-M33 @ 110MHz | TrustZone®, AES, PKA, OTFDEC, Tamper, Secure Boot, RDP, Unique ID                             | First STM32 with TrustZone®                    | Secure, general-purpose low-power applications   |
| **STM32H7** | Cortex-M7 @ up to 550MHz | Crypto/Hash (some), Secure Boot, Unique ID, optional on-the-fly decryption                 | Highest MCU performance, advanced peripherals  | Industrial gateways, rich HMI, complex processing|
| **STM32WL** | Cortex-M4 + M0+   | AES, PKA, True RNG, Sector Protection, Secure Key Management, Unique ID                      | Integrated Sub-GHz Radio (LoRa, Sigfox, etc.)  | Secure, long-range wireless sensors              |
| **STM32G4** | Cortex-M4 @ 170MHz | AES, True RNG, Unique ID, Memory Protection Unit (MPU)                                      | Cost-effective with rich analog peripherals    | Motor control, industrial control                |

## 2. Quick-Pick Decision Matrix

| If your product needs…                                  | Choose      | Rationale                                                                        |
|---------------------------------------------------------|-------------|----------------------------------------------------------------------------------|
| **State-of-the-art security and ultra-low power**       | **STM32U5** | Arm TrustZone® isolation plus the most complete set of on-chip security IPs from ST. |
| **Integrated LoRaWAN or other Sub-GHz connectivity**    | **STM32WL** | The dual-core architecture allows the radio stack to run isolated from the application. |
| **Maximum computational performance for edge AI/HMI** | **STM32H7** | The fastest Cortex-M7 core, often paired with large internal memory and advanced graphics. |
| **A balance of low-power, cost, and TrustZone security**| **STM32L5** | A solid entry point into hardware-isolated designs without the premium features of the U5. |
| **Cost-sensitive application with baseline crypto**     | **STM32G4** | Provides hardware AES and a unique ID, covering basic cryptographic needs.       |

## 3. CRA Compliance Checklist for STM32 Designs

| CRA expectation                        | How to meet it with STM32                                                                                                                                                             |
|----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| *Secure boot & authenticated firmware* | Implement ST's **Secure Boot and Secure Firmware Update (SBSFU)** reference design. Use it to verify code integrity and authenticity at every startup. [st-sbsfu-an]                   |
| *Cryptographic resilience*             | Utilize on-chip hardware accelerators for AES, PKA (public key), and HASH. Use **On-The-Fly-Decryption (OTFDEC)** to execute code from encrypted external flash. [st-trust]              |
| *Vulnerability patching for 10 years*  | Use the **SFU** mechanism to deliver secure OTA updates. Base firmware on the mature **STM32Cube HAL/LL**, and monitor ST's security advisories.                                         |
| *Unique device identity*               | Use the factory-programmed 96-bit **Unique Device ID (UID)** as a basis for device-specific identity and key derivation.                                                                |
| *CE marking & documentation*           | Leverage ST's extensive application notes and technical documentation on security to build your technical file and justify design choices for the Declaration of Conformity.              |

### 4. Take-aways

*   For new secure designs, start with the **STM32U5** or **STM32L5** series to leverage Arm TrustZone®.
*   ST's **STM32Trust** framework provides a roadmap and reference implementations for security.
*   The **SBSFU** reference design is a critical asset for building a compliant secure boot and update mechanism.
*   Always use the hardware crypto peripherals instead of software libraries for performance and protection.

<!-- Citations -->
[st-trust]: https://www.st.com/content/st_com/en/ecosystems/stm32trust.html "STMicroelectronics STM32Trust Security Framework"
[st-sbsfu-an]: https://www.st.com/en/embedded-software/x-cube-sbsfu.html "AN5056: STM32 MCUs secure boot and secure firmware update"
[st-stm32u5-ds]: https://www.st.com/en/microcontrollers-microprocessors/stm32u5-series.html "STM32U5 Series Datasheet" 