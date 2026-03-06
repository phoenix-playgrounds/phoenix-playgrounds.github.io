import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

const features = [
  {
    icon: '🚀',
    titleId: 'homepage.feature.instant.title',
    titleDefault: 'Instant Environments',
    descId: 'homepage.feature.instant.desc',
    descDefault: 'Spin up complete, isolated full-stack environments with a single click. No more "works on my machine."',
    delay: '0s',
  },
  {
    icon: '🐳',
    titleId: 'homepage.feature.docker.title',
    titleDefault: 'Docker-Powered',
    descId: 'homepage.feature.docker.desc',
    descDefault: 'Built on Docker Compose. Bring your own stack — databases, caches, workers, and services all included.',
    delay: '2s',
  },
  {
    icon: '🔗',
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
          <Translate id="homepage.hero.badge">✦ Now in Beta</Translate>
        </span>
        <h1 className="hero-title">
          <Translate id="homepage.hero.title.line1">Launch full-stack</Translate>
          <br />
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
