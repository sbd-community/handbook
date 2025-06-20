---
title: "Security Logging & Monitoring Tools"
sidebar_label: "Logging & Monitoring"
sidebar_position: 11
tags: [tools, logging, monitoring, siem, security, operations, open-source, commercial]
---
# Security Logging & Monitoring Tools

Effective **[Security Logging and Monitoring](../implementation/operate-phase/security-logging.md)** is critical for detecting security incidents, responding to them, and conducting post-mortem analysis. For connected devices, this often means collecting logs from the device itself and from the backend services it communicates with.

The tools in this category range from simple log aggregators to full-blown Security Information and Event Management (SIEM) systems that correlate data from multiple sources to identify potential threats.

| Tool | Type | Description |
| :--- | :--: | :---------- |
| [**Fluentd**](https://www.fluentd.org/) | 🐙 | An open-source data collector for building a unified logging layer. It's highly flexible and has a rich ecosystem of plugins. |
| [**Vector**](https://vector.dev/) | 🐙 | A high-performance, open-source agent for collecting, transforming, and routing logs, metrics, and events. Written in Rust. |
| [**Wazuh**](https://wazuh.com/) | 🐙 | An open-source security platform that combines SIEM and XDR capabilities. It provides log analysis, intrusion detection, and vulnerability detection. |
| [**Datadog**](https://www.datadoghq.com/) | 💰 | A commercial monitoring and security platform that provides log management, APM, and cloud security posture management in a single SaaS product. |
| [**Splunk**](https://www.splunk.com/) | 💰 | A market-leading commercial platform for searching, monitoring, and analyzing machine-generated data. Widely used for security and operational intelligence. | 