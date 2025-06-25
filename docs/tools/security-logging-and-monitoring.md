---
title: "Security Logging & Monitoring"
sidebar_label: "Logging & Monitoring"
sidebar_position: 9
tags: [tools, logging, monitoring, siem, security, cra, open-source, commercial]
---
# Tools: Security Logging & Monitoring

## 1. Introduction

Security logging is the process of generating and collecting logs of security-relevant events from a device. Monitoring involves analyzing these logs to detect potential security incidents.

For a detailed explanation of the compliance requirements for security logging, see our guide on **[Security Logging & Monitoring](../implementation/operate-phase/security-logging.md)**.

## 2. Tooling Landscape

The following tools provide the infrastructure for collecting, storing, and analyzing security logs from a fleet of devices. They enable manufacturers to detect and respond to security incidents in the field.

| Tool | Type | Description |
| :--- | :--- | :--- |
| [Memfault](https://memfault.com/) | 💰 | An observability platform for IoT devices that captures logs, metrics, and crash data to help engineers remotely debug and monitor device health and security. |
| [Golioth](https://golioth.io/) | 💰 | An IoT device management cloud that provides infrastructure for collecting and analyzing log data from connected devices. |
| [Elastic Stack (ELK)](https://www.elastic.co/) | 🐙💰 | A popular open-source suite of tools (Elasticsearch, Logstash, Kibana) for collecting, searching, and visualizing log data. Commercial cloud offerings are available. |
| [Splunk](https://www.splunk.com/) | 💰 | A leading commercial platform for searching, monitoring, and analyzing machine-generated data from any source to gain operational intelligence and security insights. |
| [Datadog](https://www.datadoghq.com/) | 💰 | A monitoring and analytics platform for cloud-scale applications, providing monitoring of servers, databases, tools, and services, through a SaaS-based data analytics platform. |
| [Grafana Loki](https://grafana.com/oss/loki/) | 🐙 | A horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus. It is designed to be very cost-effective and easy to operate. |
| [Fluentd](https://www.fluentd.org/) | 🐙 | An open-source data collector for building a unified logging layer. It's highly flexible and has a rich ecosystem of plugins. |
| [Vector](https://vector.dev/) | 🐙 | A high-performance, open-source agent for collecting, transforming, and routing logs, metrics, and events. |
| [Wazuh](https://wazuh.com/) | 🐙 | An open-source security platform that combines SIEM and XDR capabilities, providing log analysis, intrusion detection, and vulnerability detection. |

<!-- vale off -->
*Type: 💰=Commercial, 🐙=Open-Source*
<!-- vale on --> 