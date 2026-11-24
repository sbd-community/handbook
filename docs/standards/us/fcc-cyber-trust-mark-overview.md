---
title: "FCC Cyber Trust Mark"
description: "The FCC's voluntary U.S. Cyber Trust Mark for wireless IoT products: how the program works, the path to certification, and the QR code label."
sidebar_label: "US FCC Cyber Trust Mark"
sidebar_position: 1
tags: [fcc, us, iot, consumer, security, labeling, certification]
---
# US FCC Cyber Trust Mark Program

## 1. Why the Cyber Trust Mark matters

The **U.S. Cyber Trust Mark** is a voluntary cybersecurity labeling program established by the Federal Communications Commission (FCC) for wireless Internet of Things (IoT) products. The program's goal is to provide consumers with a clear and reliable way to identify more secure connected devices, encouraging manufacturers to build security into their products from the start.

Products that meet the program's baseline security standards can display the FCC's official Cyber Trust Mark. The mark is accompanied by a QR code that links consumers to a national registry containing specific, up-to-date security information about the product, such as its minimum support period and how to obtain security updates.

:::info Official Texts & Guidance
- **Report and Order**: The full legal text establishing the program and its rules, adopted March 2024.
  - [FCC-24-26A1: Report and Order and Further Notice of Proposed Rulemaking][fcc_order_txt]
- **Program Overview**: The FCC's main page for the Cyber Trust Mark.
  - [FCC Cyber Trust Mark Homepage][fcc_homepage]
- **Label, renewal and surveillance proposals**: Public Notice released 27 October 2026, PS Docket No. 23-239.
  - [DA 26-1162: Public Notice][fcc_da_26_1162]
:::

:::note Programme status
In April 2026 the FCC selected the **ioXt Alliance** as Lead Administrator, replacing UL Solutions. In October 2026 it proposed a three-year certification renewal cycle, post-market surveillance, and label rules based on CTA-2120. Technical requirements and testing procedures are still to be finalised. See [FCC Proposes Cyber Trust Mark Renewal and Surveillance Rules](/blog/2026/10/27/fcc-cyber-trust-mark-renewal-surveillance).
:::

**Relationship to Other Standards**

The technical criteria for the Cyber Trust Mark are based directly on the foundational work done by the National Institute of Standards and Technology (NIST).

| Standard / Law | How it interacts with the FCC Cyber Trust Mark |
| :--- | :--- |
| **[NIST IR 8259 Series](./nistir8259-overview.md)** | The **NIST IR 8425** profile, which defines the specific technical requirements for the Cyber Trust Mark, is built directly upon the foundational capabilities outlined in the **NIST IR 8259** series. A manufacturer already aligned with the NIST baseline is well-prepared for the certification process. |
| **[ANSI/CTA-2088](./cta2088-overview.md)** | This industry-led standard defines a similar set of baseline security capabilities for consumer IoT. Like NIST IR 8259, it serves as an excellent benchmark for manufacturers preparing for the Trust Mark program. |

## 2. How the Program Works: Roles & Responsibilities

The Cyber Trust Mark program is designed as a public-private partnership. The FCC sets the rules and provides oversight, but delegates the operational management to accredited third-party bodies.

- **Federal Communications Commission (FCC)**: The FCC establishes the rules for the program, provides federal oversight, and selects and accredits the Cybersecurity Label Administrators (CLAs).
- **Cybersecurity Label Administrators (CLAs)**: A CLA is a third-party organization authorized by the FCC to manage the program. The CLA reviews applications from manufacturers, authorizes the use of the Cyber Trust Mark, and manages the national registry of certified products.
- **Lead Administrator**: One CLA selected by the FCC to act for all CLAs. It interfaces with the FCC, recognises CyberLABs, and recommends the technical standards, testing procedures, post-market surveillance procedures, and label design for FCC approval. The ioXt Alliance has held this role since April 2026.
- **CyberLABs**: These are the accredited testing laboratories responsible for evaluating whether a product meets the program's technical security requirements as defined in **NIST IR 8425**.
- **Manufacturer**: The product manufacturer is responsible for having its product tested, applying to a CLA, and ensuring the information in the national registry remains accurate throughout the product's support period.

## 3. The Path to Certification

To obtain the mark, a manufacturer must follow these steps:
1.  **Product Testing**: Have the product successfully tested by an accredited CyberLAB against the criteria in **NIST IR 8425**.
2.  **Application to a CLA**: Submit an application to a Cybersecurity Label Administrator (CLA), including the positive test results from the CyberLAB.
3.  **Attestation & Support Period**: Provide a formal attestation to the CLA, specifying the product's defined **software security support period**. This is the length of time during which the manufacturer commits to providing security updates.
4.  **Receive the Mark**: Once the CLA approves the application, the manufacturer is authorized to affix the U.S. Cyber Trust Mark to its product packaging and promotional materials, and to link the required QR code to the national registry entry.
5.  **Maintain Registry Information**: Keep the product's information in the registry up-to-date, including the support-period end date and how security updates are delivered.

A key provision of the program is that equipment produced by any entity on the FCC's **[Covered List][fcc_covered_list]** (or other similar government watchlists) is **ineligible** to receive the Cyber Trust Mark. Since 23 March 2026 the Covered List also includes consumer-grade routers produced in a foreign country, unless the Department of War or the Department of Homeland Security has granted them a Conditional Approval ([DA 26-278][fcc_da_26_278]). The list also covers foreign-produced uncrewed aircraft systems and their critical components (from 22 December 2025), and foreign-produced power inverters and advanced robotic devices (from 28 July 2026), each with exceptions such as Conditional Approvals.

## 4. The QR Code & Consumer Information

A central feature of the program is the on-product QR code. This code must link to a publicly accessible entry in the national registry, which the Report and Order requires to provide consumers with the following information:

-   The product name and the manufacturer's name.
-   The date the product was authorised to carry the label, the current status of that authorisation, and the CLA and test lab involved.
-   Instructions on how to change the default password (or a statement that it cannot be changed).
-   Information on how to configure the device securely.
-   Whether software updates are automatic, and how to obtain them if not.
-   The **minimum support period**: the date until which the manufacturer will identify critical vulnerabilities and issue updates, or a statement that the product is unsupported.
-   Whether the manufacturer maintains a software bill of materials (SBOM) and a hardware bill of materials (HBOM). The SBOM itself is not published; it is available to the FCC, CyberLAB, or CLA on request.

<!-- Citations -->
[fcc_order_txt]: https://docs.fcc.gov/public/attachments/FCC-24-26A1.txt "FCC Report and Order (FCC 24-26)"
[fcc_homepage]: https://www.fcc.gov/CyberTrustMark "FCC Cyber Trust Mark"
[fcc_da_26_1162]: https://docs.fcc.gov/public/attachments/DA-26-1162A1.pdf "FCC DA 26-1162: Public Notice on label design, certification renewal, and post-market surveillance"
[fcc_covered_list]: https://www.fcc.gov/supplychain/coveredlist "FCC Covered Communications Equipment or Services List" 
[fcc_da_26_278]: https://docs.fcc.gov/public/attachments/DA-26-278A1.pdf "FCC DA 26-278: Addition of routers produced in foreign countries to the Covered List"
