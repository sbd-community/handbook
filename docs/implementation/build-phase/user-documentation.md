---
title: "User Information & Documentation"
sidebar_label: "User Documentation"
sidebar_position: 8
tags: [documentation, user-guide, compliance, cra, annex-ii]
---
# Guide: Creating Compliant User Documentation

## 1. Why User Documentation is a Compliance Issue

Clear, comprehensive user documentation is no longer just a "nice-to-have" for a good user experience; it is a mandatory legal requirement under the **[Cyber-Resilience Act (CRA)](./../../standards/cra-overview.md)**. **Annex II** of the CRA provides a detailed list of information that manufacturers **must** provide to users.

This documentation is a key part of the evidence that will be reviewed by market surveillance authorities. Its purpose is to ensure users have all the information they need to install, use, and maintain the product securely throughout its lifecycle. The BSI technical guideline also specifies numerous requirements for user documentation ([REQ_UD 1-6][bsi_tr_03183]).

## 2. Information Required by CRA Annex II

Your user manual, whether printed or online, must be clear, concise, and easy to understand. It must include, at a minimum, the following information.

### 2.1 Product & Manufacturer Information
- **Manufacturer's Details:** Name, registered trade name, and a postal address where they can be contacted. ([REQ_UD 1][bsi_tr_03183])
- **Product Identification:** The product's type, batch, or serial number so it can be uniquely identified. ([REQ_UD 2][bsi_tr_03183])
- **Intended Use:** A clear description of the product's intended use, including the security environment provided by the manufacturer. ([REQ_UD 3][bsi_tr_03183])

### 2.2 Security Properties & Configuration
- **Security Features:** Any security properties of the product (e.g., "This product uses end-to-end encryption").
- **Secure Configuration Guide:** Step-by-step instructions on how to securely install, configure, and operate the product. This should include guidance on changing default passwords. ([REQ_UD 5][bsi_tr_03183])
- **Included Software:** Information on the software components included in the product, including the open-source components. This is most easily accomplished by providing a link to a web page containing the product's SBOM. ([REQ_UD 6][bsi_tr_03183])

### 2.3 Support & Vulnerability Handling
- **Support Period End-Date:** The month and year until which the user can expect to receive security updates. This is a critical requirement. ([REQ_UD 4][bsi_tr_03183])
- **How to Get Updates:** Instructions on how to receive and apply security updates, including whether the process is automatic or manual.
- **How to Report Vulnerabilities:** A link to the manufacturer's Coordinated Vulnerability Disclosure (CVD) policy and instructions on how users can report a potential security issue.

## 3. Compliance Checklist

To ensure your user documentation meets the CRA's requirements, use this checklist before releasing your product.

- [ ] **Manufacturer Identity:** Are your company's name and contact address clearly stated?
- [ ] **Product Identity:** Does the documentation specify how to identify the product's model and version?
- [ ] **Intended Use:** Have you clearly described the product's function and expected security environment?
- [ ] **Secure Setup Guide:** Are there clear, step-by-step instructions for secure installation and configuration?
- [ ] **Support Period Defined:** Is the end-of-support date (at least month and year) explicitly stated?
- [ ] **Vulnerability Reporting:** Is information provided on how to report a security vulnerability?
- [ ] **SBOM/OSS Information:** Is there information on the software components, or a link to where it can be found?
- [ ] **Accessibility:** Is the information provided in a clear and understandable way for a non-technical user?

<!-- Citations -->
[bsi_tr_03183]: https://www.bsi.bund.de/EN/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/Technische-Richtlinien/TR-nach-Thema-sortiert/tr03183/TR-03183_node.html "BSI Technical Guideline TR-03183" 