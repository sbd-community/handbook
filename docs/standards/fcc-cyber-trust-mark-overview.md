---
title: "FCC Cyber Trust Mark"
sidebar_label: "US FCC Cyber Trust Mark"
sidebar_position: 9
tags: [fcc, us, iot, consumer, security, labeling, certification]
---
# US FCC Cyber Trust Mark Program

## 1. Why the Cyber Trust Mark matters

The **U.S. Cyber Trust Mark** is a voluntary cybersecurity labeling program established by the Federal Communications Commission (FCC) for wireless Internet of Things (IoT) products. The program's goal is to provide consumers with a clear and reliable way to identify more secure connected devices, encouraging manufacturers to build security into their products from the start.

Products that meet the program's baseline security standards can display the FCC's official Cyber Trust Mark. The mark is accompanied by a QR code that links consumers to a national registry containing specific, up-to-date security information about the product, such as the support period and whether it has received recent software updates.

:::info Official Texts & Guidance
- **Report and Order**: The full legal text establishing the program and its rules.
  - [FCC-24-26A1: Report and Order and Further Notice of Proposed Rulemaking][fcc_order_txt] (Mar 2024)
- **Program Overview**: The FCC's main page for the Cyber Trust Mark.
  - [FCC Cyber Trust Mark Homepage][fcc_homepage]
:::

## 2. How the Program Works

The Cyber Trust Mark program is designed as a public-private partnership. The FCC sets the rules but delegates the operational management to accredited bodies.

-   **Cybersecurity Label Administrators (CLAs)**: These are third-party organizations authorized by the FCC to manage the application process and grant the authority to use the Cyber Trust Mark.
-   **CyberLABs**: These are the accredited testing laboratories responsible for evaluating whether a product meets the program's technical security requirements.
-   **National Registry**: A publicly accessible database, linked via the on-product QR code, that provides consumers with detailed security information for each certified product.

To obtain the mark, a manufacturer must:
1.  Have their product successfully tested by an accredited CyberLAB.
2.  Submit an application, including the test results, to a CLA for review and approval.
3.  Commit to a defined security support period and keep the product's information in the registry up-to-date.

A key provision of the program is that equipment produced by any entity on the FCC's **[Covered List][fcc_covered_list]** (or other similar government watchlists) is **ineligible** to receive the Cyber Trust Mark.

## 3. Relationship to Other Standards

The technical criteria for the Cyber Trust Mark are based directly on the foundational work done by the National Institute of Standards and Technology (NIST).

| Standard / Law | How it interacts with the FCC Cyber Trust Mark |
| :--- | :--- |
| **[NIST IR 8259 Series](./nistir8259-overview.md)** | The **NIST IR 8425** profile, which defines the specific technical requirements for the Cyber Trust Mark, is built directly upon the foundational capabilities outlined in the **NIST IR 8259** series. A manufacturer already aligned with the NIST baseline is well-prepared for the certification process. |
| **[ANSI/CTA-2088](./cta2088-overview.md)** | This industry-led standard defines a similar set of baseline security capabilities for consumer IoT. Like NIST IR 8259, it serves as an excellent benchmark for manufacturers preparing for the Trust Mark program. |

<!-- Citations -->
[fcc_order_txt]: https://docs.fcc.gov/public/attachments/FCC-24-26A1.txt "FCC Report and Order (FCC 24-26)"
[fcc_homepage]: https://www.fcc.gov/CyberTrustMark "FCC Cyber Trust Mark"
[fcc_covered_list]: https://www.fcc.gov/supplychain/coveredlist "FCC Covered Communications Equipment or Services List" 