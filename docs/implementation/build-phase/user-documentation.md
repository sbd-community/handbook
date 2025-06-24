---
title: "User Information & Documentation"
sidebar_label: "User Documentation"
sidebar_position: 8
tags: [documentation, user-guide, compliance, cra, annex-ii]
---
# Guide: Creating Compliant User Documentation

## 1. Introduction to User Documentation

### 1.1. What is User Documentation?

**User Documentation** refers to any information provided to the end-user to ensure they can install, use, and maintain a product securely. This includes printed quick-start guides, in-app help sections, and full online user manuals.

Under modern regulations like the CRA, clear and comprehensive documentation is no longer just a "nice-to-have" for a good user experience; it is a mandatory legal deliverable. It serves as key evidence for market surveillance authorities and must be clear, concise, and easy for a non-technical user to understand.

### 1.2. The Regulatory Requirement

The primary legal basis for user documentation is **[Annex II of the CRA][cra_annexII]**, which outlines the "Information and instructions to be provided to the user." The BSI's technical guideline TR-03183-1 provides a corresponding set of requirements ([REQ_UD 1-6][bsi_tr_03183_p1]) that mirror the CRA's list.

Failing to provide this information renders a product non-compliant.

### 1.3. Do I Really Need to Do This?

**Yes.** Providing documentation is a non-negotiable legal requirement for any product with digital elements placed on the EU market. Market surveillance authorities will use the list in **[CRA Annex II][cra_annexII]** as an objective checklist, and missing information can block a product from the market.

However, while the requirement to provide the information is absolute, the **form and audience** of that documentation can differ. The real question is not *if* you must provide it, but **"Who is the 'user' for my product?"**

#### Case 1: Products for End-Users (B2C or B2B)

If your product is sold directly to an end-user (whether a consumer or a business), then you must provide the full, user-friendly documentation described in this guide. The information must be clear, easy to understand for a non-technical audience, and readily accessible (e.g., in the box, in an app, or on a website linked from the product). For these products, there are no exceptions.

#### Case 2: Products for Integration (Components)

If your product is a component intended for integration into another product (e.g., a Wi-Fi module, a communication stack, a software library), you are still legally required to provide the information from Annex II. However, in this scenario, your "user" is the *integrating manufacturer*.

-   **Form of Documentation:** Instead of a glossy user manual, your documentation will likely be a technical data sheet, an integration guide, or API documentation.
-   **Content Requirement:** This technical documentation **must** contain all the security information the integrator needs to produce their own compliant end-user documentation for the final product. The BSI TR-03183-1 makes this clear, requiring documentation for integrators to "comply with the essential requirements" ([REQ_UD 5.1][bsi_tr_03183_p1]). This includes details like:
    -   The component's software bill of materials (SBOM).
    -   The end-of-support date for the component.
    -   Any default configurations that need to be secured.

#### The Bottom Line

You cannot place a product with digital elements on the EU market without providing the information listed in Annex II of the CRA. The only flexibility is in the format. If you sell to end-users, you need a user manual. If you sell to other manufacturers, you need a comprehensive technical datasheet that gives them all the information they need to comply in turn.

## 2. Information Required by CRA Annex II

Your user manual, whether printed or online, must include, at a minimum, the following information.

### 2.1 Product & Manufacturer Information
- **Manufacturer's Details:** Name, registered trade name, and a postal address where they can be contacted. ([REQ_UD 1][bsi_tr_03183_p1])
- **Product Identification:** The product's type, batch, or serial number so it can be uniquely identified. ([REQ_UD 2][bsi_tr_03183_p1])
- **Intended Use:** A clear description of the product's intended use, including the security environment provided by the manufacturer. ([REQ_UD 3][bsi_tr_03183_p1])

### 2.2 Security Properties & Configuration
- **Security Features:** Any security properties of the product (e.g., "This product uses end-to-end encryption").
- **Secure Configuration Guide:** Step-by-step instructions on how to securely install, configure, and operate the product. This should include guidance on changing default passwords. ([REQ_UD 5][bsi_tr_03183_p1])
- **Included Software:** Information on the software components included in the product, including the open-source components. This is most easily accomplished by providing a link to a web page containing the product's SBOM. ([REQ_UD 6][bsi_tr_03183_p1])

### 2.3 Support & Vulnerability Handling
- **Support Period End-Date:** The month and year until which the user can expect to receive security updates. This is a critical requirement. ([REQ_UD 4][bsi_tr_03183_p1])
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
[cra_annexI]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I "CRA Annex I – Essential cybersecurity requirements"
[bsi_tr_03183_p1]: https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI-TR-03183-1-0_9_0.pdf "BSI TR-03183 Part 1: General requirements"