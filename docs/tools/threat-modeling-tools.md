---
title: "Threat Modeling"
sidebar_label: "Threat Modeling"
sidebar_position: 1
tags: [tools, threat-modeling, stride, secure-by-design, open-source, commercial]
---
# Tools: Threat Modeling

**[Threat Modeling](../implementation/build-phase/threat-modeling.md)** is a systematic process for identifying and mitigating security risks early in the development lifecycle. While it can be done with a simple whiteboard, dedicated tools can help structure the process, create professional data flow diagrams (DFDs), and maintain a living document of your product's security architecture.

These tools facilitate the key steps of threat modeling: defining what you're building, identifying what can go wrong (threats), and deciding what to do about it (mitigations). This is the first and most critical step in creating a risk assessment, as required by **[CRA Annex I][cra_annexI]**.

| Tool | Type | Description |
| :--- | :--- | :--- |
| [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/) | 🐙 | An open-source, cross-platform threat modeling tool from OWASP. It's a great starting point for teams new to the practice. |
| [Microsoft Threat Modeling Tool](https://aka.ms/tmt) | 🐙 | A free tool from Microsoft that uses the STRIDE methodology to guide users through the process of creating and analyzing threat models. Runs on Windows only. |
| [Threagile](https://threagile.io/) | 🐙 | An open-source, agile threat modeling toolkit that uses a declarative approach, defining the architecture as a YAML file and auto-generating diagrams and threats. |
| [IriusRisk](https://www.iriusrisk.com/) | 💰 | A commercial threat modeling platform that automates the process and integrates with development tools like Jira and version control systems. |
| [Tutum](https://www.tutum.com/) | 💰 | A commercial platform focused on collaborative threat modeling, designed to integrate into the entire SDLC. |

<!-- vale off -->
*Type: 💰=Commercial, 🐙=Open-Source*
<!-- vale on -->

<!-- Citations -->
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements" 