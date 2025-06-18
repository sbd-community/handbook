---
title: "Firmware & Binary Analysis"
sidebar_label: "Firmware & Binary Analysis"
sidebar_position: 5
tags: [tools, firmware, binary-analysis, reverse-engineering, open-source]
---
# Firmware & Binary Analysis

Firmware and binary analysis tools are essential for performing security assessments when you don't have access to the source code. This is a common scenario when integrating third-party components, such as binary-only drivers or closed-source libraries, into your product. To meet the legal requirement of ensuring the security of the entire product, manufacturers must have the capability to inspect these opaque components.

These tools allow engineers to reverse-engineer compiled firmware images, inspect their contents, extract file systems, and analyze the executable code to find hidden vulnerabilities, hardcoded secrets, or insecure configurations.

| Tool | Type | Description |
| :--- | :--: | :---------- |
| [**Binwalk**](https://github.com/ReFirmLabs/binwalk) | <i class="fa-solid fa-code-branch"></i> | A classic tool for analyzing, reverse engineering, and extracting firmware images. |
| [**Ghidra**](https://ghidra-sre.org/) | <i class="fa-solid fa-code-branch"></i> | A software reverse engineering (SRE) framework developed by the NSA. |
| [**FACT** (Firmware Analysis & Comparison Tool)](https://f-a-c-t.com/) | <i class="fa-solid fa-code-branch"></i> | An automated platform for unpacking firmware, running analyses, and comparing versions. |
| [**EMBA** (Embedded-device MAnufacturer's security check)](https://github.com/e-m-b-a/emba) | <i class="fa-solid fa-code-branch"></i> | A security analyzer for firmware images that can identify vulnerabilities and configuration weaknesses. |
| [**Firmwalker**](https://github.com/craigz28/firmwalker) | <i class="fa-solid fa-code-branch"></i> | A script for searching extracted firmware filesystems for common vulnerabilities and misconfigurations. | 

<!-- Citations -->
