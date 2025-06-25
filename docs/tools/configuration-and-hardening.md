---
title: "Configuration & Hardening"
sidebar_label: "Configuration & Hardening"
sidebar_position: 6
tags: [tools, configuration, hardening, security, open-source, commercial, cis]
---
# Tools: Configuration & Hardening

## 1. Introduction

Configuration and hardening tools help automate the process of securing a device's operating system and applications. They ensure that systems are built to a known, secure baseline and that this baseline is maintained over time.

For a detailed explanation of the compliance requirements this helps to meet, see our guide on **[Secure Configuration & Hardening](../implementation/build-phase/secure-configuration.md)**.

## 2. Tooling Landscape

These tools can be used to scan for misconfigurations, enforce security policies, and automate the application of hardening guides like the CIS Benchmarks.

| Tool | Type | Description |
| :--- | :--- | :--- |
| [Ansible](https://www.ansible.com/) | 🐙 | An open-source IT automation tool that can be used for configuration management, application deployment, and task automation. It uses human-readable YAML templates. |
| [Puppet](https://www.puppet.com/) | 🐙💰 | A configuration management tool that helps you define the state of your IT infrastructure and then automatically enforces that state. |
| [Chef](https://www.chef.io/) | 🐙💰 | A configuration management tool that uses a pure-Ruby, domain-specific language for writing system configuration "recipes". |
| [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks/) | 🐙 | A set of globally recognized best practices for securing IT systems and data. While not a tool, they are the foundation for many hardening efforts. |
| [Lynis](https://cisofy.com/lynis/) | 🐙 | A security auditing tool for Unix-based systems. It scans for security information, system hardening, and compliance, and provides actionable suggestions. |
| [OpenSCAP](https://www.open-scap.org/) | 🐙 | An open-source framework for maintaining security compliance of enterprise systems. It provides tools to automate checks based on standards like SCAP. |
| [Trivy](https://github.com/aquasecurity/trivy) | 🐙 | A popular open-source scanner that can find misconfigurations in a wide range of environments, including infrastructure-as-code files and container images. |
| [Nmap](https://nmap.org/) | 🐙 | A powerful open-source network scanner for security auditing. It can discover hosts, services, open ports, and operating systems on a network. |
| [Tenable Nessus](https://www.tenable.com/products/nessus) | 💰 | A widely used commercial vulnerability scanner that also provides detailed configuration and compliance auditing. |

<!-- vale off -->
*Type: 💰=Commercial, 🐙=Open-Source*
<!-- vale on -->

## 3. Build vs. Buy: A Strategic Choice

The choice here is not whether to build a new configuration management system from scratch, but how to best use the mature, industry-standard tools that already exist.

It would be an inefficient use of resources to try and create a new version of Ansible or Nmap. The pragmatic decision is to **leverage these existing tools**. The real engineering work is not in building the tools, but in using them to create a robust, automated, and repeatable process for hardening your devices and verifying their configuration against a defined security baseline like the CIS Benchmarks.
