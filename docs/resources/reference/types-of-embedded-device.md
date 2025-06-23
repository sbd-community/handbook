---
title: "Types of Embedded Device"
sidebar_label: "Types of Embedded Device"
sidebar_position: 2
tags: [classification, mcu, mpu, embedded-linux, rtos, secure-by-design]
---
# Types of Embedded Device

Not all "Products with Digital Elements" are created equal. The internal architecture of a connected device dramatically influences its security posture, the types of vulnerabilities it is susceptible to, and the kinds of security controls that can be implemented.

As highlighted by Muench et al. in their 2018 paper, ["What You Corrupt Is Not What You Crash,"][ndss18_muench] security analysis and testing techniques that work on desktop computers often fail on embedded systems because the underlying hardware is so different. A memory corruption bug that would cause an obvious crash on a PC might lead to a silent, undetected failure on a constrained microcontroller.

Therefore, understanding your device's classification is a critical first step in performing an accurate risk assessment and building a compliant product. This guide proposes a simple, three-tier model based on a device's processing power and memory management capabilities.

## Class 1: Constrained Microcontrollers (MCUs)

These are the most common type of processor in the IoT world. They are designed for simple, real-time tasks.

- **Characteristics:**
    - **No Memory Management Unit (MMU):** This is the defining characteristic. There is no hardware-enforced separation between processes or between the operating system and applications. All code runs in the same address space.
    - **Limited Resources:** Typically have small amounts of RAM (a few kilobytes to a few megabytes) and Flash storage.
    - **Simple OS:** Often run on "bare-metal" (no OS) or use a simple Real-Time Operating System (RTOS).
- **Security Implications:**
    - **No Process Isolation:** A vulnerability in any single software component (e.g., a third-party sensor driver) can corrupt the memory of the entire system, including the kernel and security-critical functions.
    - **Silent Failures:** Memory corruption bugs often don't cause a clean "crash." The device may simply hang, reboot, or behave erratically, making vulnerabilities difficult to detect with dynamic testing (fuzzing).
    - **Limited Security Features:** The lack of hardware support and limited resources make it difficult to implement advanced exploit mitigations like ASLR.
- **Examples:** Smart light bulbs, simple environmental sensors, connected thermostats, basic motor controllers.

## Class 2: Application Processors (MPUs / SoCs)

These devices are more powerful and behave much more like traditional computers. They are capable of running rich, general-purpose operating systems.

- **Characteristics:**
    - **Memory Management Unit (MMU):** They have hardware support for virtual memory and process isolation.
    - **Rich OS:** Capable of running a full-featured operating system like Linux or Android.
    - **More Resources:** Significantly more RAM and storage than MCUs.
- **Security Implications:**
    - **Process Isolation:** The OS can enforce strict boundaries between processes and between user applications and the kernel. A crash in one application will not typically bring down the entire system.
    - **Better Crash Detection:** Memory violations (e.g., a process trying to write to another's memory) are caught by the MMU and reported by the OS kernel as a segmentation fault, making bugs easier to find.
    - **Advanced Mitigations:** Can support a wide range of modern security features, including Address Space Layout Randomization (ASLR), stack canaries, and detailed logging.
- **Examples:** Smart TVs, home gateways, automotive infotainment systems, high-end smart speakers.

## Class 3: Hybrid & Specialized Systems

This category covers more complex systems that don't fit neatly into the first two classes.

- **Characteristics:**
    - **Heterogeneous Cores:** Often contain multiple processor cores of different types. A common architecture is a powerful application processor (e.g., an ARM Cortex-A) paired with a real-time microcontroller (e.g., an ARM Cortex-M) on the same chip.
    - **Custom Logic:** May include FPGAs (Field-Programmable Gate Arrays) or ASICs (Application-Specific Integrated Circuits) with custom hardware logic.
- **Security Implications:**
    - **Complex Trust Boundaries:** Security depends on managing the interaction between the different cores or hardware blocks. A vulnerability in the "real-time" part of the system could potentially compromise the main application processor.
    - **Specialized Analysis:** Security analysis requires understanding the custom hardware and the communication protocols between the different components.
- **Examples:** Industrial controllers, high-performance network appliances, advanced driver-assistance systems (ADAS) in vehicles.

## Why This Matters for Compliance

Your choice of security controls to meet regulations like the **[Cyber-Resilience Act](../../standards/eu/cra-overview.md)** will be dictated by your device's classification. You cannot claim to provide process isolation if your device is built on an MCU with no MMU. The risk assessment for a simple sensor will be vastly different from that of a Linux-based gateway. Documenting this classification is a key part of justifying your security architecture in your technical file.

<!-- Citations -->
[ndss18_muench]: https://www.s3.eurecom.fr/docs/ndss18_muench.pdf "Muench et al. - What You Corrupt Is Not What You Crash: Challenges in Fuzzing Embedded Devices" 