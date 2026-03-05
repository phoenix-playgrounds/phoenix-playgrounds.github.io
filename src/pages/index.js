import React from 'react';
import Layout from '@theme/Layout';

const features = [
  {
    icon: '🚀',
    title: 'Instant Environments',
    description: 'Spin up complete, isolated full-stack environments with a single click. No more "works on my machine."',
    delay: '0s',
  },
  {
    icon: '🐳',
    title: 'Docker-Powered',
    description: 'Built on Docker Compose. Bring your own stack — databases, caches, workers, and services all included.',
    delay: '2s',
  },
  {
    icon: '🔗',
    title: 'Shareable URLs',
    description: 'Every environment gets a unique subdomain. Share live previews with your team, clients, or stakeholders.',
    delay: '4s',
  },
];

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <span className="hero-badge">✦ Now in Beta</span>
        <h1 className="hero-title">
          Launch full-stack<br />
          environments <span className="accent">in seconds</span>
        </h1>
        <p className="hero-subtitle">
          Playgrounds.dev gives your team instant, isolated cloud
          environments powered by Docker. Deploy previews, run demos,
          and iterate faster — without touching production.
        </p>
        <a className="hero-cta" href="https://my.playgrounds.dev">
          Get Started →
        </a>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="features-section">
      <h2 className="features-heading">Why Playgrounds?</h2>
      <p className="features-sub">
        Everything you need to run isolated cloud environments for your team.
      </p>
      <div className="features-grid">
        {features.map(({ icon, title, description, delay }) => (
          <div className="feature-card" key={title} style={{ '--delay': delay }}>
            <div className="feature-icon">{icon}</div>
            <div className="feature-title">{title}</div>
            <div className="feature-desc">{description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Launch full-stack environments in seconds"
      description="Playgrounds.dev gives your team instant, isolated cloud environments powered by Docker."
    >
      <Hero />
      <Features />
    </Layout>
  );
}
