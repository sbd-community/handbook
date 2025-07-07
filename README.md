# SecureByDesignHandbook.com

This repository contains the source for SecureByDesignHandbook.com, an authoritative, vendor-neutral reference for building secure connected devices. It translates complex regulatory requirements (like the EU's Cyber-Resilience Act) into concrete engineering practices for product security teams.

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Documentation

- [Purpose & Positioning Statement](purpose-and-positioning.md) - Mission, audience, and strategic vision
- [Navigation Structure](navigation-structure.md) - Proposed site structure and user journeys (draft)
- [Content & Brand Style Guide](style-guide.md) - Editorial standards and guidelines for contributors

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions. 

- **Live Site**: [https://securebydesignhandbook.com](https://securebydesignhandbook.com)
- **Trigger**: Any push to the `main` branch automatically triggers deployment
- **Workflow**: See [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) for the deployment configuration
- **Process**: Build → Deploy to GitHub Pages → Live in ~2-3 minutes

## Contributing

We welcome contributions from security practitioners, compliance experts, and engineers building connected devices! 

- **📋 How to contribute**: See our [Contributing Guide](CONTRIBUTING.md)
- **💡 Suggest improvements**: Open an [Issue](https://github.com/sbd-community/handbook/issues)
- **💬 Ask questions**: Start a [Discussion](https://github.com/sbd-community/handbook/discussions)

Whether you want to add implementation guides, fix typos, or suggest new topics, your contributions help make connected devices more secure.
