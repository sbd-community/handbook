---
title: "Types of Embedded Device"
sidebar_label: "Types of Embedded Device"
sidebar_position: 2
description: "A practical guide to classifying embedded device architectures and understanding how MCUs, embedded Linux systems, and hybrid designs affect secure-by-design controls, CRA readiness, and evidence."
tags: [classification, mcu, mpu, embedded-linux, rtos, secure-by-design, cra, evidence, architecture]
---
# Types of Embedded Device

Use this page to classify the architecture of a connected product and understand how that architecture affects secure-by-design decisions, CRA readiness, and evidence.

Not all **Products with Digital Elements** are built the same way. A constrained sensor, an embedded Linux gateway, and a hybrid industrial controller may all be connected products, but they have different trust boundaries, update constraints, logging capabilities, and realistic security controls.

The goal is not to put every device into a perfect taxonomy. The goal is to record enough architectural context to make proportionate decisions and avoid claiming controls the product cannot actually enforce.

## What This Page Is For

Use this page when you need to answer:

- What kind of embedded architecture are we dealing with?
- What trust boundaries and failure modes are realistic?
- Which secure-by-design controls matter most for this architecture?
- Which controls are not feasible, or need a different implementation?
- What evidence should we retain to justify our architecture and risk decisions?
- Which handbook pages should the team use next?

## Why Device Type Matters

Architecture changes security reality. A product without an MMU cannot provide the same process isolation as a Linux gateway. A Linux device can usually collect richer logs, but it also has a larger software supply chain and a bigger attack surface. A hybrid system may have several processors, each with its own boot chain and update path.

As Muench et al. explain in ["What You Corrupt Is Not What You Crash"][ndss18_muench], security analysis and testing techniques that work on desktop systems often fail on embedded devices because the underlying hardware behaves differently. A memory corruption bug that would crash a desktop process might silently corrupt state, hang a device, or trigger an unclear reset on a constrained microcontroller.

Device type also affects supplier dependency. A secure boot feature, TRNG, debug-lock mechanism, BSP, kernel, RTOS, or radio stack is only useful if it is documented, supportable, and maintained for the product's support period.

For CRA readiness, this classification should feed your threat model, risk assessment, secure boot design, update strategy, logging expectations, vulnerability handling, and technical documentation.

## Quick Classification Table

| Device type | Typical platform | Security implications |
|-------------|------------------|-----------------------|
| **Constrained MCU** | Bare metal or RTOS, usually no MMU | No process isolation, limited logging, tight update and storage constraints. |
| **Application processor / embedded Linux** | Linux, Android, or another rich OS on an MPU/SoC | Process isolation, richer logging, package and component management, larger attack surface. |
| **Hybrid or specialised system** | MCU plus MPU, secure element, FPGA, ASIC, radio coprocessor, safety controller | More trust boundaries, more interfaces, harder evidence and update story. |

## Class 1: Constrained Microcontrollers

Constrained microcontrollers are common in sensors, actuators, controllers, and low-cost connected devices. They are designed for simple, real-time tasks and usually run bare-metal firmware or an RTOS.

Typical characteristics:

- no memory management unit (MMU);
- limited RAM and flash;
- one firmware image or a small number of firmware components;
- simple scheduling and limited process isolation;
- hardware features that vary significantly by part family, such as MPU, TrustZone, secure boot, eFuses, crypto accelerators, true random number generation, or secure debug control.

Security implications:

- A bug in one component can corrupt the whole firmware image or security-critical state.
- Memory corruption may not produce a clean crash or useful diagnostic log.
- Advanced mitigations such as ASLR are often unavailable.
- Logging, forensics, and evidence collection may be limited by storage and connectivity.
- Secure update, rollback, and recovery need careful design because space for multiple images may be limited.

Typical examples include simple environmental sensors, smart lighting, connected thermostats, motor controllers, and low-power wireless endpoints.

An RTOS may add scheduling, drivers, networking stacks, and middleware, but it does not automatically provide the same isolation, user separation, or update model as a rich operating system.

## Class 2: Application Processors and Embedded Linux

Application processors, MPUs, and richer SoCs behave more like conventional computers. They can run Linux, Android, or another general-purpose operating system.

Typical characteristics:

- memory management unit (MMU);
- hardware-supported process isolation and virtual memory;
- more RAM and storage;
- multiple services, users, packages, libraries, and network daemons;
- richer logging, update, and monitoring options.

Security implications:

- Process isolation can limit the impact of some application vulnerabilities.
- Memory violations are often easier to detect because the OS can catch and report them.
- The attack surface is larger because the device may run many services and dependencies.
- SBOM, vulnerability monitoring, hardening, user accounts, package updates, and service configuration become central.
- Secure boot needs to cover bootloader, kernel, root filesystem, and application layers.

Typical examples include home gateways, smart TVs, industrial gateways, high-end smart speakers, medical workstations, and automotive infotainment systems.

A richer operating system can provide stronger isolation and observability, but it also increases patch, configuration, package, service, and account-management responsibilities.

## Class 3: Hybrid and Specialised Systems

Hybrid and specialised systems combine multiple processing or trust domains. They may include an application processor, real-time MCU, radio coprocessor, secure element, FPGA, ASIC, safety controller, or custom accelerator.

Typical characteristics:

- heterogeneous cores or processors;
- multiple boot chains or firmware images;
- inter-core communication channels;
- custom hardware logic or secure elements;
- separate safety, real-time, network, or user-interface domains.

Security implications:

- Trust boundaries are more complex and easier to misunderstand.
- A vulnerability in a low-level component can affect a higher-level system, or vice versa.
- Updates may need to coordinate firmware, OS, radio, secure element, and application components.
- Evidence needs to explain interfaces, assumptions, ownership, and integration decisions.
- Security analysis may require hardware, firmware, software, and protocol expertise.

Typical examples include industrial controllers, medical devices with separate sensing and UI processors, high-performance network appliances, robotics, advanced driver-assistance systems, and products with secure elements or FPGAs.

## Cross-Cutting Pattern: Devices with Cloud or Companion Apps

Many connected products are not just a device. They include mobile apps, cloud services, web portals, brokers, update backends, analytics services, or customer administration tools.

Treat these as part of the product architecture when they affect identity, onboarding, data flows, commands, updates, support, or vulnerability handling.

Evidence should show:

- which cloud, mobile, gateway, and backend components are in scope;
- how devices authenticate to services;
- how users, installers, or administrators authenticate to the product;
- where data flows and where it is stored;
- how updates, commands, certificates, and support-period decisions are controlled.

## What Changes by Device Type

| Topic | Constrained MCU | Embedded Linux / MPU | Hybrid or specialised |
|-------|-----------------|----------------------|-----------------------|
| Threat modeling | Focus on firmware, peripherals, debug, physical access, and update path. | Include services, users, network interfaces, packages, cloud/mobile dependencies, and local privilege boundaries. | Model each trust domain and the interfaces between them. |
| Isolation | Often limited to MPU, TrustZone, privilege levels, or coding discipline. | Process, user, kernel, container, sandbox, and service isolation may be available. | Isolation depends on inter-core boundaries, secure elements, buses, and hardware integration. |
| Secure boot | Usually vendor ROM, fuses, bootloader, and one firmware image. | Boot ROM, bootloader, kernel, initramfs, rootfs, and application integrity. | Several boot chains may need to be verified and sequenced. |
| Updates | Tight storage and power constraints; A/B updates may be hard. | Image, package, container, or filesystem updates may be possible. | Coordinated updates across firmware, OS, radio, secure element, and app components. |
| Logging | Often minimal or event-limited. | Richer local and remote logging is usually feasible. | Logs may be split across domains and need correlation. |
| Evidence | Part selection, configuration, provisioning, secure boot/update tests. | SBOM, hardening baseline, service configuration, logs, scan results. | Interface contracts, integration evidence, trust-boundary rationale, coordinated update tests. |

## Evidence to Retain

Record enough evidence to show that architecture classification informed the product's security decisions.

Useful evidence includes:

- device classification rationale;
- architecture diagram and trust-boundary diagram;
- exact processor, SoC, MCU, module, secure element, radio, FPGA, or ASIC identifiers;
- OS, RTOS, bare-metal, or firmware model;
- memory protection and isolation assumptions;
- boot chain and update architecture;
- rollback, recovery, and storage constraints;
- debug, service, manufacturing, and maintenance interface inventory;
- hardware security feature mapping;
- supplier documentation and lifecycle evidence;
- justification for controls that are not feasible on the selected architecture.

Transfer this evidence into the **[Secure-by-Design Evidence Pack](../policy-and-evidence/audit-evidence-pack.md)** and use it when completing the **[CRA Readiness Gap Analysis](../checklists-and-worksheets/cra-gap-analysis.md)**.

## What Product Teams Should Check

- Does the product have an MMU, MPU, TrustZone, secure element, TPM, hardware root of trust, or secure debug control?
- Are we claiming controls the hardware or OS cannot enforce?
- What happens when memory corruption occurs: clean crash, reset, silent state corruption, or unsafe behaviour?
- How are debug, service, manufacturing, and maintenance interfaces controlled?
- Can the device store useful logs or evidence?
- Can it support authenticated updates, rollback protection, and recovery?
- Are update and support commitments realistic for the available storage, power, connectivity, and supplier lifecycle?
- Are cloud services, mobile apps, gateways, or companion software part of the product boundary?
- Does the declared support period match the hardware, software, component, and supplier lifecycle?

## Related Pages

If you need to:

- turn the architecture classification into a risk assessment, use **[Threat Modeling](../../implementation/build-phase/threat-modeling.md)** and the **[CRA Readiness Gap Analysis](../checklists-and-worksheets/cra-gap-analysis.md)**;
- choose controls for firmware integrity and updates, use **[Secure Boot](../../implementation/build-phase/secure-boot.md)** and **[Secure OTA Updates](../../implementation/build-phase/ota-updates.md)**;
- design identity, provisioning, and cryptography around the selected architecture, use **[Unique Device Identity](../../implementation/build-phase/unique-device-identity.md)**, **[Key Provisioning & Storage](../../implementation/build-phase/key-provisioning.md)**, and **[Cryptography under the CRA](../cryptography/cryptography-under-cra.md)**;
- compare hardware-specific support and evidence, use **[STM32 Hardware Selection](../hardware/stm32.md)** and **[ESP32 Hardware Selection](../hardware/espressif.md)**;
- retain architecture evidence, use the **[Secure-by-Design Evidence Pack](../policy-and-evidence/audit-evidence-pack.md)**;
- compare real-world failure patterns, see the **[Baxter Life2000 case study](../real-world-vulnerabilities/baxter-life2000-ventilator-tampering.md)** and **[GE Vivid local-access case study](../real-world-vulnerabilities/ge-vivid-ultrasound-local-access.md)**;
- assess organisational capability, use the **[Secure-by-Design Maturity Model](../checklists-and-worksheets/maturity-model.md)**.

<!-- Citations -->
[ndss18_muench]: https://www.s3.eurecom.fr/docs/ndss18_muench.pdf "Muench et al. - What You Corrupt Is Not What You Crash: Challenges in Fuzzing Embedded Devices" 