---
title: "Firmware & Binary Analysis"
sidebar_label: "Firmware & Binary Analysis"
sidebar_position: 4
tags: [tools, firmware, binary, analysis, reverse-engineering, open-source, commercial]
---
# Tools: Firmware & Binary Analysis

Firmware and binary analysis tools are essential for performing security assessments when you don't have access to the source code. This is common when integrating third-party components, such as binary-only drivers or closed-source libraries. To meet the legal requirement of ensuring the security of the entire product, manufacturers must have the capability to inspect these opaque components.

These tools allow engineers to reverse-engineer compiled firmware images, inspect their contents, extract file systems, and analyze the executable code to find hidden vulnerabilities, hardcoded secrets, or insecure configurations.

| Tool | Type | Description |
| :--- | :--- | :--- |
| [Binwalk](https://github.com/ReFirmLabs/binwalk) | 🐙 | A fast, easy-to-use tool for analyzing, reverse engineering, and extracting firmware images. |
| [Ghidra](https://ghidra-sre.org/) | 🐙 | A free, open-source software reverse engineering (SRE) suite of tools developed by the NSA. |
| [Radare2](https://radare.org/r/)| 🐙 | An open-source framework for reverse engineering and analyzing binaries. |
| [FACT (Firmware Analysis & Comparison Tool)](https://fkie-cad.github.io/fact_documentation/) | 🐙 | An open-source, extensible platform for performing automated firmware security analysis. |
| [Firmwalker](https://github.com/craigz28/firmwalker) | 🐙 | A script for searching extracted firmware filesystems for common vulnerabilities and interesting files. |
| [IDA Pro](https://hex-rays.com/ida-pro/) | 💰 | A powerful, industry-standard commercial disassembler and debugger for software reverse engineering. |
| [JEB Decompiler](https://www.pnfsoftware.com/) | 💰 | A professional reverse engineering platform for Android, ARM, and MIPS binaries. |

<!-- vale off -->
*Type: 💰=Commercial, 🐙=Open-Source*
<!-- vale on -->
