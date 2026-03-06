---
title: "STMicroelectronics STM32 Selection for EU CRA Compliance"
sidebar_label: "STMicroelectronics (STM32)"
sidebar_position: 2
tags: [hardware, stm32, stmicroelectronics, cra, compliance, mcu]
---

# STM32 Hardware Selection for EU CRA-Compliant Connected Products

The **EU Cyber-Resilience Act (CRA)** raises the bar for connected
products. For microcontroller-based designs, that means choosing hardware
that can support a trustworthy boot chain, strong cryptography, secure
storage for keys, and a maintainable update path over the product's support
lifetime.

STMicroelectronics' **STM32** portfolio provides security features that can
support those goals. But no STM32 part, SDK, or reference design makes a
product compliant by itself. The manufacturer still owns the product-level
risk assessment, secure integration, vulnerability handling process, support
commitments, and technical documentation required by the CRA.

ST's newer CRA pages are useful because they show how the company now
packages its security story for product teams, not just firmware engineers.
Use them as supplier inputs, not as a substitute for your own engineering
and compliance work. See ST's **[CRA resource hub][st-cra-page]** and the
announcement that introduced it in March 2026 [st-announcement].

## 1. What STM32 can and cannot help you with

### STM32 can help with

- Provide a **hardware root of trust** for secure boot and key protection.
- Provide **hardware accelerators** for AES, hashing, public-key
  cryptography, and random-number generation on many families.
- Provide **device identity primitives**, such as the STM32 unique device
  identifier and, on some series, stronger isolation and tamper features.
- Provide **reference implementations** such as **[STM32Trust][st-trust]**
  and **[SBSFU][st-sbsfu-an]** to shorten secure boot and secure update work.
- Provide **supplier documentation and assurance material** that may support
  your technical file and supplier due diligence.

### STM32 cannot do for you

- Perform your **CRA risk assessment** or threat model.
- Prove that your final product is free of known exploitable
  vulnerabilities.
- Operate your **vulnerability disclosure**, triage, and patch process.
- Guarantee that your cloud backend, mobile app, radio configuration, or
  manufacturing flow is secure.
- Replace your obligation to assemble a defensible **technical file** and
  Declaration of Conformity.

For the product-level obligations, start with the
**[CRA Overview](../../standards/eu/cra-overview.md)**,
**[Threat Modeling](../../implementation/build-phase/threat-modeling.md)**,
**[Secure Boot](../../implementation/build-phase/secure-boot.md)**,
**[SBOM & VEX Workflows](../../implementation/build-phase/sbom-vex.md)**,
and **[Audit Evidence Pack](../policy-and-evidence/audit-evidence-pack.md)**.

## 2. STM32 family cheat sheet

The STM32 family is large. For CRA-relevant controls, the series with the
strongest isolation, key-management, and secure boot building blocks are the
most interesting.

- **STM32U5 / STM32L5**: Cortex-M33 devices with **TrustZone** and a richer
  security feature set. These are strong starting points for new low-power,
  security-focused products.
- **STM32H5 / STM32H7**: Higher-performance parts suited to more demanding
  gateways, rich HMIs, and complex industrial designs. The **H5** is the
  more security-forward of the two because it also uses Cortex-M33 and
  TrustZone.
- **STM32WL**: Long-range wireless parts designed for sub-GHz applications,
  useful where radio integration and secure device identity matter.
- **STM32G4 / STM32G0**: Cost-sensitive mainstream parts with a more modest
  security baseline. These can still fit lower-risk products, but they leave
  more of the security architecture to the integrator.

### Table 1 - STM32 series vs. security and fit

| Series | CPU Core | Key hardware security features | Stand-out capability | Typical fit |
|--------|----------|--------------------------------|----------------------|-------------|
| **STM32U5** | Cortex-M33 @ 160 MHz | TrustZone, HUK, AES, PKA, OTFDEC, tamper, secure boot, RDP, unique ID | Broadest security feature set in the low-power range | High-security, power-constrained IoT endpoints |
| **STM32L5** | Cortex-M33 @ 110 MHz | TrustZone, AES, PKA, OTFDEC, tamper, secure boot, RDP, unique ID | Earlier entry point for TrustZone-based STM32 designs | Secure low-power general-purpose products |
| **STM32H5** | Cortex-M33 | TrustZone, secure boot, crypto acceleration, isolation features | Higher performance with a more modern security architecture | Industrial controllers, gateways, rich embedded applications |
| **STM32H7** | Cortex-M7 @ up to 550 MHz | Crypto/hash on some parts, secure boot support, unique ID, optional on-the-fly decryption | Highest MCU performance in the family | Rich HMI, industrial gateways, complex processing |
| **STM32WL** | Cortex-M4 + M0+ | AES, PKA, true RNG, sector protection, secure key management, unique ID | Integrated sub-GHz radio | Long-range wireless sensors and field devices |
| **STM32G4 / G0** | Cortex-M4 / Cortex-M0+ | AES or baseline crypto on some parts, true RNG on some parts, unique ID, MPU | Lower BOM cost | Cost-sensitive industrial and control designs |

## 3. Quick-pick decision matrix

| If your product needs... | Choose | Why |
|--------------------------|--------|-----|
| **State-of-the-art security and ultra-low power** | **STM32U5** | Best low-power choice when you want isolation, crypto acceleration, and a richer security baseline. |
| **A lower-power TrustZone design without the premium U5 profile** | **STM32L5** | A practical way to adopt hardware isolation in secure embedded designs. |
| **Higher performance plus stronger security architecture** | **STM32H5** | Better fit than older high-performance lines when security is a primary requirement. |
| **Maximum compute for gateway, HMI, or edge processing** | **STM32H7** | Strong performance, but check exact part-level security features carefully. |
| **Integrated sub-GHz connectivity** | **STM32WL** | Helps simplify long-range wireless designs where secure identity and radio integration matter. |
| **Lower-cost baseline security** | **STM32G4 / G0** | Suitable for simpler or lower-risk designs, provided your architecture closes the remaining gaps. |

## 4. Mapping STM32 capabilities to CRA-relevant controls

| CRA expectation | STM32 capabilities that can help | What you still own as the manufacturer | Handbook guide |
|-----------------|----------------------------------|----------------------------------------|----------------|
| *Secure boot and authenticated firmware* | **[SBSFU][st-sbsfu-an]**, secure boot building blocks, immutable boot ROM, RDP, key storage features on selected families | Boot-chain design, signing-key governance, secure manufacturing, fail-secure recovery | **[Secure Boot](../../implementation/build-phase/secure-boot.md)** |
| *Cryptographic resilience* | AES, PKA, RNG, OTFDEC, TrustZone, and other hardware features on selected parts | Algorithm choice, protocol design, key lifecycle, crypto agility, cloud-to-device trust model | **[Key Provisioning & Storage](../../implementation/build-phase/key-provisioning.md)** and **[Cryptography under CRA](../cryptography/cryptography-under-cra.md)** |
| *Secure updates and patching* | STM32Cube ecosystem, secure update examples, signed-firmware reference flows | OTA backend, rollback strategy, release signing process, patch SLAs, field support over the declared support period | **[OTA Updates & Patching](../../implementation/build-phase/ota-updates.md)** and **[Patch Cadence](../../implementation/operate-phase/patch-cadence.md)** |
| *Unique device identity* | Factory-programmed UID and, on some devices, stronger isolation and key-derivation options | Certificate issuance, manufacturing provisioning, enrollment, rotation, revocation, device inventory | **[Unique Device Identity](../../implementation/build-phase/unique-device-identity.md)** |
| *Technical documentation and evidence* | ST datasheets, application notes, security collateral, **[STM32Trust assurance materials][st-trust-assurance]** | Risk assessment, architecture rationale, test evidence, supplier records, Declaration of Conformity, technical file | **[Audit Evidence Pack](../policy-and-evidence/audit-evidence-pack.md)** |

## 5. Supplier due-diligence checklist for STM32-based designs

When you evaluate STM32 for a CRA-scoped product, collect evidence from ST
the same way you would from any strategic component supplier.

- **Exact part identification**: Which precise STM32 family and part number
  are you using, and which security features exist on that exact variant?
- **Security lifecycle**: Does ST publish a clear security policy,
  vulnerability channel, and security advisories for the relevant product
  line? [st-cra-page]
- **Reference design maturity**: Are you depending on SBSFU, STM32Cube
  examples, or other collateral? If so, who owns maintenance and validation
  in your final product?
- **Assurance claims**: Are there certifications or assurance schemes
  attached to this line, and what exactly do they cover:
  silicon, reference software, or the full system? [st-trust-assurance]
- **Documentation for the technical file**: Which ST artifacts can you cite:
  datasheets, application notes, security manuals, lifecycle statements, or
  public policies?
- **Support horizon**: Does the component lifecycle align with your declared
  support period under the CRA?
- **Radio obligations**: If you are using wireless STM32 devices, what extra
  evidence is needed for **[RED](../../standards/eu/red-overview.md)** as
  well as the CRA?

## 6. Recommended STM32-based reading path

If you are using ST hardware in a CRA-scoped product, this is a sensible
sequence:

1. Read the **[CRA Overview](../../standards/eu/cra-overview.md)** to map
   the legal obligations.
2. Use **[Threat Modeling](../../implementation/build-phase/threat-modeling.md)**
   to identify the product-level risks your MCU must support.
3. Design your trust architecture using
   **[Unique Device Identity](../../implementation/build-phase/unique-device-identity.md)**
   and **[Secure Boot](../../implementation/build-phase/secure-boot.md)**.
4. Plan the operational path with
   **[OTA Updates & Patching](../../implementation/build-phase/ota-updates.md)**
   and **[Vulnerability Disclosure](../../implementation/operate-phase/vulnerability-disclosure.md)**.
5. Capture supplier artifacts and your own evidence in an
   **[Audit Evidence Pack](../policy-and-evidence/audit-evidence-pack.md)**.

## 7. Takeaways

- For new security-focused STM32 designs, **STM32U5**, **STM32L5**, and
  often **STM32H5** deserve the closest look.
- **STM32Trust** and **SBSFU** can accelerate engineering work, but they do
  not replace product-level CRA responsibilities.
- Treat ST's CRA pages as useful supplier inputs for due diligence and
  technical documentation, not as proof of compliance on their own.
- The right MCU choice is only one layer in the CRA story; your threat
  model, update process, vulnerability handling, and technical file still do
  the heavy lifting.

<!-- Citations -->
[st-announcement]: https://community.st.com/t5/developer-news/st-launches-dedicated-resource-hub-to-help-developers-navigate/ba-p/883514 "ST launches dedicated resource hub to help developers navigate the EU Cyber Resilience Act (CRA)"
[st-cra-page]: https://www.st.com/content/st_com/en/about/security-and-privacy/cyber-resilience-act.html "STMicroelectronics Cyber Resilience Act page"
[st-trust]: https://www.st.com/content/st_com/en/ecosystems/stm32trust.html "STMicroelectronics STM32Trust Security Framework"
[st-trust-assurance]: https://www.st.com/content/st_com/en/ecosystems/stm32trust/security-assurance.html "STM32Trust security assurance"
[st-sbsfu-an]: https://www.st.com/en/embedded-software/x-cube-sbsfu.html "AN5056: STM32 MCUs secure boot and secure firmware update"