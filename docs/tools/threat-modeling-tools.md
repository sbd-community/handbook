---
title: "Threat Modeling"
sidebar_label: "Threat Modeling"
sidebar_position: 1
tags: [tools, threat-modeling, stride, security, open-source, commercial]
---
# Tools: Threat Modeling

## 1. Introduction

Threat modeling is a structured process for identifying and prioritizing potential threats and vulnerabilities in a system. It is a proactive security practice that helps inform design decisions and security testing efforts.

For a detailed explanation of how threat modeling fits into a compliant development process and what is required, see our guide on **[Threat Modeling & Risk Analysis](../implementation/build-phase/threat-modeling.md)**.

## 2. Build vs. Buy: Key Considerations

Threat modeling can be done with nothing more than a whiteboard or a simple diagramming tool. The decision to adopt a dedicated tool—whether open-source or commercial—is about making the process more structured, repeatable, and integrated into the development lifecycle.

-   **Structure & Methodology**: Dedicated tools enforce a consistent methodology (like STRIDE), ensuring that all teams are analyzing and documenting threats in the same way. This makes the output far more consistent and easier to review than ad-hoc diagrams.
-   **Collaboration & Versioning**: Threat models are living documents. A "build" approach using static diagrams makes collaboration and version control difficult. Dedicated platforms are designed for team collaboration and can track changes to the threat model as the product evolves.
-   **Automation & Integration**: More advanced commercial platforms can automate the generation of threats based on the components in your diagram and can integrate with ticketing systems like Jira to automatically create tasks for mitigation. This turns the threat model from a theoretical exercise into an actionable part of the development workflow.
-   **Audit & Compliance**: A well-maintained threat model from a dedicated tool serves as powerful evidence of a secure-by-design process during an audit. It demonstrates a systematic approach to risk assessment that is a core requirement of the CRA.

## 3. Tooling Landscape

The following tools help teams create, manage, and collaborate on threat models. They provide graphical interfaces for building data flow diagrams (DFDs) and systematically identifying threats using methodologies like STRIDE.

| Tool | Type | Description |
| :--- | :--- | :--- |
| [Microsoft Threat Modeling Tool](https://aka.ms/threatmodelingtool) | 🐙 | A free, downloadable tool for finding threats in the design phase of software projects. It uses the STRIDE methodology and is ideal for Windows-based systems. |
| [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/) | 🐙 | An open-source, web-based threat modeling tool from OWASP. It provides a graphical interface for creating threat models and follows the STRIDE methodology. |
| [IriusRisk](https://www.iriusrisk.com/) | 🐙💰 | An open-source and commercial platform that automates the threat modeling process. It integrates with development tools to create a living threat model that evolves with the product. |
| [Threagile](https://threagile.io/) | 🐙 | An open-source, agile threat modeling toolkit that uses a YAML-based definition file to automatically generate threat models and diagrams. |
| [Tutum](https://www.tutum.tech) | 💰 | A commercial, collaborative threat modeling platform designed for enterprise teams. It focuses on usability and integration with the SDLC. |

<!-- vale off -->
*Type: 💰=Commercial, 🐙=Open-Source*
<!-- vale on -->
