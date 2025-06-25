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

## 3. Build vs. Buy: Key Considerations

The choice between building your own logging infrastructure with open-source tools versus buying a commercial service is a classic trade-off between control and convenience.

-   **Infrastructure Management**: The "build" approach, using a stack like Grafana Loki or ELK, requires you to manage the deployment, scaling, and maintenance of the entire backend. This can be complex and costly. The "buy" approach, using a SaaS platform like Datadog or Memfault, offloads this entire operational burden.
-   **Agent & Device Integration**: While open-source agents like Fluentd and Vector are powerful, integrating them into a resource-constrained embedded device can be challenging. Commercial platforms designed for IoT often provide lightweight, purpose-built agents and SDKs that are easier to deploy on-device.
-   **Total Cost of Ownership (TCO)**: Self-hosting an open-source stack may have no licensing fees, but the TCO includes server costs, data storage, and the engineering time spent on maintenance and scaling. A commercial service has a clear subscription cost, which can often be lower and more predictable than the hidden costs of a self-hosted solution.
-   **Focus on Core Business**: Buying a managed logging solution allows your team to focus on analyzing the data and improving your product, rather than on managing the underlying infrastructure required to collect that data. 