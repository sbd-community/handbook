import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/quick-start/what-is-secure-by-design">
            What is Secure-by-Design?
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/implementation">
            View Implementation Guides
          </Link>
        </div>
      </div>
    </header>
  );
}

function ValuePillars(): ReactNode {
  const pillars = [
    {
      title: 'Comply with confidence',
      description: 'Clause-by-clause mappings for CRA, NIS 2, RED, and IEC 62443. Audit-ready templates and gap-analysis checklists.',
      icon: '📋'
    },
    {
      title: 'Implement securely',
      description: 'Practical guides for secure boot, threat modeling, SBOM/VEX workflows, and hardening OTA update pipelines.',
      icon: '🔧'
    },
    {
      title: 'Operate resiliently',
      description: 'Vulnerability disclosure templates, CI/CD hardening playbooks, and security logging and monitoring guides.',
      icon: '🛡️'
    }
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">Turn regulatory requirements into engineering reality</Heading>
        </div>
        <div className="row">
          {pillars.map((pillar, idx) => (
            <div key={idx} className={clsx('col col--4')}>
              <div className="text--center padding-horiz--md">
                <div className={styles.pillarIcon}>{pillar.icon}</div>
                <Heading as="h3">{pillar.title}</Heading>
                <p>{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoleBasedCards(): ReactNode {
  const roles = [
    {
      title: 'Product Owner',
      description: 'Understand your obligations and plan for compliance.',
      cta: 'Start with the "Why"',
      link: '/docs/quick-start/what-is-secure-by-design',
      icon: '🗺️'
    },
    {
      title: 'Compliance Lead',
      description: 'Start with regulatory gap analysis.',
      cta: 'Get CRA Checklist',
      link: '/docs/resources/checklists-and-worksheets/cra-gap-analysis',
      icon: '⚖️'
    },
    {
      title: 'Firmware Engineer',
      description: 'Jump into secure implementation.',
      cta: 'Secure Boot Guide',
      link: '/docs/implementation/build-phase/secure-boot',
      icon: '⚙️'
    }
  ];

  return (
    <section className={styles.roleCards}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">Get started by role</Heading>
          <p className="margin-bottom--lg">Choose your path based on your primary responsibilities</p>
        </div>
        <div className="row">
          {roles.map((role, idx) => (
            <div key={idx} className={clsx('col col--4')}>
              <div className={clsx('card', styles.roleCard)}>
                <div className="card__header">
                  <div className={styles.roleIcon}>{role.icon}</div>
                  <Heading as="h3">{role.title}</Heading>
                </div>
                <div className="card__body">
                  <p>{role.description}</p>
                </div>
                <div className="card__footer">
                  <Link className="button button--primary button--block" to={role.link}>
                    {role.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommunitySection(): ReactNode {
  return (
    <section className={styles.community}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <Heading as="h2">Open source & community-driven</Heading>
            <p>
              This handbook is developed in the open with contributions from security practitioners, 
              compliance experts, and engineers building connected devices worldwide.
            </p>
            <div className={styles.communityLinks}>
              <Link className="button button--outline button--primary" to="https://github.com/sbd-community/handbook">
                View on GitHub
              </Link>
              <Link className="button button--outline button--secondary" to="https://github.com/sbd-community/handbook/blob/main/CONTRIBUTING.md">
                Contribute
              </Link>
            </div>
          </div>
          <div className="col col--6">
            <Heading as="h2">Stay updated</Heading>
            <p>
              Cyber-resilience regulations are evolving rapidly. Get notified when we publish 
              new implementation guides and regulatory updates.
            </p>
            <Link className="button button--primary" to="/blog">
              Latest News
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Secure-by-Design Handbook"
      description="Authoritative standards breakdowns and practical playbooks for building cyber-resilient connected devices. CRA, NIS 2, ETSI EN 303 645 implementation guidance.">
      <HomepageHeader />
      <main>
        <ValuePillars />
        <RoleBasedCards />
        <CommunitySection />
      </main>
    </Layout>
  );
}
