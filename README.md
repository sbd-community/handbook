# SecureByDesignHandbook.com

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
