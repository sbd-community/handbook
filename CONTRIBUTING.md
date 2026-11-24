# Contributing to Secure-by-Design Handbook

Thank you for your interest in contributing to the Secure-by-Design Handbook! This project aims to translate complex cyber-resilience regulations into practical, actionable guidance for connected device manufacturers.

## 🎯 Our Mission

We're building an authoritative, vendor-neutral reference that helps organizations implement security-by-design practices to comply with regulations like the EU Cyber Resilience Act, NIS 2 Directive, ETSI EN 303 645, and IEC 62443.

## 🤝 How to Contribute

### Content Contributions

We welcome contributions in several areas:

- **Standards Breakdowns**: Plain-English explanations of regulatory requirements
- **Implementation Playbooks**: Step-by-step technical guides (secure boot, SBOM, OTA, etc.)
- **Templates & Checklists**: Evidence-ready artifacts and gap-analysis tools
- **Case Studies**: Real-world implementation examples (anonymized)
- **Tool Reviews**: Vendor-neutral evaluations of security tooling

### Types of Contributions

- 📝 **Documentation**: New guides, updates to existing content
- 🐛 **Bug Reports**: Broken links, outdated information, technical errors
- 💡 **Suggestions**: New topics, structural improvements
- 🔧 **Technical**: Website improvements, accessibility fixes
- 📊 **Templates**: Compliance checklists, reference architectures

## 📋 Content Guidelines

Please review our [Style Guide](style-guide.md) before contributing. Key principles:

- **Authoritative**: Cite standards precisely with clause numbers
- **Practical**: Include actionable steps, code samples, templates
- **Vendor-neutral**: Mention multiple solutions, disclose any affiliations
- **Accessible**: Plain language, define acronyms, WCAG AA compliance

## 🚀 Getting Started

### For Content Contributors

1. **Fork** this repository
2. **Review** existing content to avoid duplication
3. **Create** a new branch for your contribution
4. **Write** your content following our style guide
5. **Preview** locally with `npm start`, then check that `npm run typecheck` and `npm run build` pass
6. **Submit** a pull request with a clear description

### For Technical Contributors

1. Check our [Issues](https://github.com/sbd-community/handbook/issues) for open tasks
2. Follow the same fork → branch → PR workflow
3. Include tests for any functionality changes
4. Ensure accessibility compliance

## 📝 Content Structure

### New Standard/Regulation

Add an overview page in the folder for its region, next to the existing ones:

```
docs/standards/
└── <region>/              # eu, uk, us, australia, or global
    └── standard-name-overview.md
```

### New Playbook

Add it to the lifecycle phase it belongs to:

```
docs/implementation/
├── build-phase/
│   └── topic-name.md
└── operate-phase/
    └── topic-name.md
```

## ✅ Submission Checklist

- [ ] Content follows our style guide
- [ ] All links are working
- [ ] Code samples are tested
- [ ] Sensitive information is redacted
- [ ] Proper attribution for any referenced material
- [ ] Clear, descriptive commit messages
- [ ] PR description explains the contribution

## 🔍 Review Process

1. **Automated checks**: Typecheck and site build on every pull request (broken links fail the build)
2. **Technical review**: Accuracy of implementation guidance
3. **Compliance review**: Regulatory interpretation correctness
4. **Editorial review**: Style, clarity, accessibility
5. **Merge & deploy**: Automatic deployment to live site

## 📞 Getting Help

- **Questions, bugs, and suggestions**: Open an [Issue](https://github.com/sbd-community/handbook/issues)
- **Security vulnerabilities**: Report privately as described in [SECURITY.md](SECURITY.md)
- **Style Questions**: Refer to our [Style Guide](style-guide.md)

## 🙋‍♀️ Contributor Recognition

Contributors are acknowledged in:
- Individual page credits (for substantial contributions)
- Project README contributor list
- Annual contributor highlights

## 📜 License

By contributing, you agree that your contributions will be licensed under the same [CC BY-SA 4.0](LICENSE) license that covers the project.

## 🛡️ Code of Conduct

We are committed to providing a welcoming and inclusive environment. Please be respectful in all interactions and focus on constructive collaboration.

---

**Questions?** Don't hesitate to open a discussion or reach out to the maintainers. We appreciate your interest in making connected devices more secure! 🔒 