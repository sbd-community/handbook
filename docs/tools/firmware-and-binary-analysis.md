---
title: "Firmware & Binary Analysis"
sidebar_label: "Firmware & Binary Analysis"
sidebar_position: 4
tags: [tools, firmware, binary, analysis, reverse-engineering, open-source, commercial]
---
# Tools: Firmware & Binary Analysis

## 1. Introduction

Firmware and binary analysis tools are essential for performing security assessments when you don't have access to the source code, such as when integrating third-party components or verifying production firmware. They allow engineers to inspect compiled firmware images to find vulnerabilities, hardcoded secrets, or insecure configurations.

For a detailed explanation of the compliance requirements this helps to meet, see our guide on **[Secure Configuration & Hardening](../implementation/build-phase/secure-configuration.md)**.

## 2. Tooling Landscape

These tools allow engineers to reverse-engineer compiled firmware images, inspect their contents, extract file systems, and analyze the executable code to find hidden vulnerabilities.

| Tool | Type | Description |
| :--- | :--- | :--- |
| [Binwalk](https://github.com/ReFirmLabs/binwalk) | 🐙 | A fast, easy-to-use tool for analyzing, reverse engineering, and extracting firmware images. |
| [Ghidra](https://ghidra-sre.org/) | 🐙 | A full-featured, high-end software reverse engineering (SRE) framework developed by the NSA. |
| [radare2](https://rada.re/n/) | 🐙 | A complete framework for reverse-engineering and analyzing binaries, composed of a set of small, scriptable utilities. |
| [strings](https://man7.org/linux/man-pages/man1/strings.1.html) | 🐙 | A basic utility that prints the printable character sequences in a file. A simple but effective first step for finding hardcoded secrets. |
| [FACT (Firmware Analysis & Comparison Tool)](https://fkie-cad.github.io/fact_documentation/) | 🐙 | An extensible platform for performing automated firmware security analysis and comparing firmware versions. |
| [Firmwalker](https://github.com/craigz28/firmwalker) | 🐙 | A script for searching extracted firmware filesystems for common vulnerabilities and interesting artifacts. |
| [Finite State](https://finitestate.io/) | 💰 | A commercial product security platform that performs deep binary analysis on firmware to uncover vulnerabilities and generate SBOMs from compiled code. |
| [IDA Pro](https://hex-rays.com/ida-pro/) | 💰 | A powerful, industry-standard commercial disassembler and debugger for software reverse engineering. |
| [JEB Decompiler](https://www.pnfsoftware.com/) | 💰 | A professional reverse engineering platform for Android, ARM, and MIPS binaries. |

<!-- vale off -->
*Type: 💰=Commercial, 🐙=Open-Source*
<!-- vale on -->

## 3. Build vs. Buy: A Strategic Choice

The choice in this category is not whether to build your own analysis tools from scratch, but how to best leverage the powerful tools that already exist.

Developing a software reverse-engineering framework like Ghidra or radare2, or a disassembler like IDA Pro, is a monumental task that requires years of specialized research and development. It is not a practical or value-adding activity for a product manufacturer.

The most effective path is to integrate these industry-standard tools into your security testing workflow and train your team to use them effectively, rather than attempting to reinvent them.
