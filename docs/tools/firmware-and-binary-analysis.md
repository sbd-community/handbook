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
| [Binwalk](https://github.com/ReFirmLabs/binwalk) | ✅ | Firmware analysis tool for searching a given binary image for embedded files and executable code. | Helps reverse-engineer firmware images by extracting file systems and other embedded content. |
| [Finite State](https://finitestate.io/) | 💰 | A product security platform that performs deep binary analysis on firmware to uncover vulnerabilities and generate SBOMs from compiled code. | Provides detailed insights into firmware composition, including third-party libraries, and correlates findings with over 200 threat intelligence sources. |
| [Ghidra](httpse://ghidra-sre.org/) | ✅ | A software reverse engineering (SRE) framework developed by the NSA. | Includes a suite of full-featured, high-end software analysis tools that enable users to analyze compiled code on a variety of platforms. |
| [radare2](https://rada.re/n/) | ✅ | A complete framework for reverse-engineering and analyzing binaries. | Composed of a set of small utilities that can be used together or independently from the command line. |
| [strings](https://man7.org/linux/man-pages/man1/strings.1.html) | ✅ | A basic utility, standard on most Linux systems, that prints the printable character sequences in a file. | A simple but effective first step for finding hardcoded credentials, IP addresses, or other interesting artifacts in a binary. |
| [FACT (Firmware Analysis & Comparison Tool)](https://fkie-cad.github.io/fact_documentation/) | 🐙 | An open-source, extensible platform for performing automated firmware security analysis. |
| [Firmwalker](https://github.com/craigz28/firmwalker) | 🐙 | A script for searching extracted firmware filesystems for common vulnerabilities and interesting files. |
| [IDA Pro](https://hex-rays.com/ida-pro/) | 💰 | A powerful, industry-standard commercial disassembler and debugger for software reverse engineering. |
| [JEB Decompiler](https://www.pnfsoftware.com/) | 💰 | A professional reverse engineering platform for Android, ARM, and MIPS binaries. |

<!-- vale off -->
*Type: 💰=Commercial, 🐙=Open-Source*
<!-- vale on -->
