import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

const RocketIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
);

const DockerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="12" width="4" height="4" rx="0.5" /><rect x="7" y="12" width="4" height="4" rx="0.5" /><rect x="12" y="12" width="4" height="4" rx="0.5" /><rect x="7" y="7" width="4" height="4" rx="0.5" /><rect x="12" y="7" width="4" height="4" rx="0.5" /><rect x="12" y="2" width="4" height="4" rx="0.5" /><path d="M19 13c1.5 0 3-.5 4-2-1-1.5-3-2-5-2h-1c-.5-2-2-3.5-4-4" /></svg>
);

const LinkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
);

const SparkleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3.09 8.26L24 9.27l-6.91 5.52L19.18 24 12 18.9 4.82 24l2.09-9.21L0 9.27l8.91-1.01L12 0z" /></svg>
);

const features = [
  {
    icon: <RocketIcon />,
    titleId: 'homepage.feature.instant.title',
    titleDefault: 'Instant Environments',
    descId: 'homepage.feature.instant.desc',
    descDefault: 'Spin up complete, isolated full-stack environments with a single click. No more "works on my machine."',
    delay: '0s',
  },
  {
    icon: <DockerIcon />,
    titleId: 'homepage.feature.docker.title',
    titleDefault: 'Docker-Powered',
    descId: 'homepage.feature.docker.desc',
    descDefault: 'Built on Docker Compose. Bring your own stack — databases, caches, workers, and services all included.',
    delay: '2s',
  },
  {
    icon: <LinkIcon />,
    titleId: 'homepage.feature.urls.title',
    titleDefault: 'Shareable URLs',
    descId: 'homepage.feature.urls.desc',
    descDefault: 'Every environment gets a unique subdomain. Share live previews with your team, clients, or stakeholders.',
    delay: '4s',
  },
];

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <span className="hero-badge">
          <SparkleIcon />
          <Translate id="homepage.hero.badge">Now in Beta</Translate>
        </span>
        <h1 className="hero-title">
          <Translate id="homepage.hero.title.line1">Launch full-stack</Translate>{' '}
          <Translate id="homepage.hero.title.line2">environments</Translate>{' '}
          <span className="accent">
            <Translate id="homepage.hero.title.accent">in seconds</Translate>
          </span>
        </h1>
        <p className="hero-subtitle">
          <Translate id="homepage.hero.subtitle">
            Playgrounds.dev gives your team instant, isolated cloud
            environments powered by Docker. Deploy previews, run demos,
            and iterate faster — without touching production.
          </Translate>
        </p>
        <a className="hero-cta" href="https://my.playgrounds.dev">
          <Translate id="homepage.hero.cta">Get Started →</Translate>
        </a>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="features-section">
      <h2 className="features-heading">
        <Translate id="homepage.features.heading">Why Playgrounds?</Translate>
      </h2>
      <p className="features-sub">
        <Translate id="homepage.features.sub">
          Everything you need to run isolated cloud environments for your team.
        </Translate>
      </p>
      <div className="features-grid">
        {features.map(({ icon, titleId, titleDefault, descId, descDefault, delay }) => (
          <div className="feature-card" key={titleId} style={{ '--delay': delay }}>
            <div className="feature-icon">{icon}</div>
            <div className="feature-title">
              <Translate id={titleId}>{titleDefault}</Translate>
            </div>
            <div className="feature-desc">
              <Translate id={descId}>{descDefault}</Translate>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title={translate({ id: 'homepage.layout.title', message: 'Launch full-stack environments in seconds' })}
      description={translate({ id: 'homepage.layout.description', message: 'Playgrounds.dev gives your team instant, isolated cloud environments powered by Docker.' })}
    >
      <Hero />
      <Features />
    </Layout>
  );
}
