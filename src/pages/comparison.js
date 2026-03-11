import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { translate } from '@docusaurus/Translate';

/* ─── SVG Icons ─── */

const SparkleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3.09 8.26L24 9.27l-6.91 5.52L19.18 24 12 18.9 4.82 24l2.09-9.21L0 9.27l8.91-1.01L12 0z" /></svg>
);

const CheckIcon = () => (
  <svg className="compare-icon compare-icon--check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);

const CrossIcon = () => (
  <svg className="compare-icon compare-icon--cross" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
);

const PartialIcon = () => (
  <svg className="compare-icon compare-icon--partial" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
);

/* ─── Data ─── */

const COMPETITORS = [
  { key: 'playgrounds', name: 'Playgrounds.dev', highlight: true },
  { key: 'codespaces',  name: 'GitHub Codespaces' },
  { key: 'gitpod',      name: 'Gitpod' },
  { key: 'replit',      name: 'Replit' },
  { key: 'vercel',      name: 'Vercel' },
  { key: 'shipyard',    name: 'Shipyard.build' },
  { key: 'bolt',        name: 'Bolt.new' },
  { key: 'lovable',     name: 'Lovable' },
];

// true = ✅, false = ✗, 'partial' = ◐, string = label
const CATEGORIES = [
  {
    title: 'Core Platform',
    tag: 'platform',
    features: [
      {
        name: 'Docker Compose Native',
        tooltip: 'Run any multi-service stack with a real docker-compose.yml',
        values: { playgrounds: true, codespaces: 'partial', gitpod: 'partial', replit: false, vercel: false, shipyard: true, bolt: false, lovable: false },
      },
      {
        name: 'Full-Stack Environments',
        tooltip: 'Databases, caches, workers, and services — all included',
        values: { playgrounds: true, codespaces: true, gitpod: true, replit: 'partial', vercel: false, shipyard: true, bolt: 'partial', lovable: 'partial' },
      },
      {
        name: 'One-Click Spin-Up',
        tooltip: 'Launch a complete environment with a single action',
        values: { playgrounds: true, codespaces: true, gitpod: true, replit: true, vercel: true, shipyard: false, bolt: true, lovable: true },
      },
      {
        name: 'Persistent Volumes',
        tooltip: 'Data survives across environment restarts',
        values: { playgrounds: true, codespaces: true, gitpod: 'partial', replit: true, vercel: false, shipyard: 'partial', bolt: false, lovable: false },
      },
      {
        name: 'Private Container Registries',
        tooltip: 'Pull images from your own DockerHub, GCR, ECR, etc.',
        values: { playgrounds: true, codespaces: true, gitpod: true, replit: false, vercel: false, shipyard: true, bolt: false, lovable: false },
      },
      {
        name: 'Multi-Architecture Builds',
        tooltip: 'Build for AMD64, ARM64, or both',
        values: { playgrounds: true, codespaces: 'partial', gitpod: false, replit: false, vercel: false, shipyard: 'partial', bolt: false, lovable: false },
      },
    ],
  },
  {
    title: 'Developer Experience',
    tag: 'devex',
    features: [
      {
        name: 'Browser-Based IDE',
        tooltip: 'Full VS Code experience in the browser',
        values: { playgrounds: true, codespaces: true, gitpod: true, replit: true, vercel: false, shipyard: false, bolt: true, lovable: true },
      },
      {
        name: 'Unique Subdomain per Environment',
        tooltip: 'Every environment gets a dedicated *.domain URL with automatic HTTPS',
        values: { playgrounds: true, codespaces: false, gitpod: 'partial', replit: 'partial', vercel: true, shipyard: 'partial', bolt: false, lovable: false },
      },
      {
        name: 'Shareable Live Previews',
        tooltip: 'Share a URL to let anyone see a running environment',
        values: { playgrounds: true, codespaces: 'partial', gitpod: true, replit: true, vercel: true, shipyard: true, bolt: 'partial', lovable: 'partial' },
      },
      {
        name: 'Git Branch Integration',
        tooltip: 'Each service can track a specific branch from a Git repo',
        values: { playgrounds: true, codespaces: true, gitpod: true, replit: 'partial', vercel: true, shipyard: true, bolt: false, lovable: false },
      },
      {
        name: 'Custom Domains',
        tooltip: 'Map your own domain to environments',
        values: { playgrounds: true, codespaces: false, gitpod: 'partial', replit: 'partial', vercel: true, shipyard: 'partial', bolt: false, lovable: false },
      },
      {
        name: 'Mounted File System',
        tooltip: 'Upload and mount files (up to 500 MB) directly into your containers',
        values: { playgrounds: true, codespaces: 'partial', gitpod: false, replit: false, vercel: false, shipyard: false, bolt: false, lovable: false },
      },
    ],
  },
  {
    title: 'AI & Automation',
    tag: 'ai',
    features: [
      {
        name: 'AI Coding Agents',
        tooltip: 'Attach Gemini, Claude Code, or OpenAI Codex to edit your running environment',
        values: { playgrounds: true, codespaces: 'partial', gitpod: false, replit: true, vercel: false, shipyard: false, bolt: true, lovable: true },
      },
      {
        name: 'Bring-Your-Own AI Credentials',
        tooltip: 'Use your own API keys — keep your quota, features, and pricing',
        values: { playgrounds: true, codespaces: false, gitpod: false, replit: false, vercel: false, shipyard: false, bolt: false, lovable: false },
      },
      {
        name: 'Multi-Provider AI Support',
        tooltip: 'Register agents from Gemini, Claude Code, and OpenAI Codex simultaneously',
        values: { playgrounds: true, codespaces: false, gitpod: false, replit: false, vercel: false, shipyard: false, bolt: false, lovable: false },
      },
      {
        name: 'REST API',
        tooltip: 'Full programmatic control with fine-grained scoped API keys',
        values: { playgrounds: true, codespaces: true, gitpod: true, replit: 'partial', vercel: true, shipyard: true, bolt: false, lovable: false },
      },
      {
        name: 'CI/CD Job Mode',
        tooltip: 'Run environments as one-shot CI jobs with watched services and result capture',
        values: { playgrounds: true, codespaces: false, gitpod: false, replit: false, vercel: false, shipyard: 'partial', bolt: false, lovable: false },
      },
    ],
  },
  {
    title: 'Sharing & Ecosystem',
    tag: 'sharing',
    features: [
      {
        name: 'Template Marketplace',
        tooltip: 'Publish, discover, and fork environment templates with versioning',
        values: { playgrounds: true, codespaces: 'partial', gitpod: false, replit: true, vercel: true, shipyard: false, bolt: true, lovable: 'partial' },
      },
      {
        name: 'Template Forking',
        tooltip: 'Fork any public template and customize it for your team',
        values: { playgrounds: true, codespaces: false, gitpod: false, replit: true, vercel: false, shipyard: false, bolt: false, lovable: false },
      },
      {
        name: 'Terraform-Managed Infra',
        tooltip: 'Auto-provision cloud infrastructure for your environments',
        values: { playgrounds: true, codespaces: false, gitpod: false, replit: false, vercel: false, shipyard: false, bolt: false, lovable: false },
      },
      {
        name: 'Environment Expiration & TTL',
        tooltip: 'Auto-cleanup with configurable TTL, extendable or permanent',
        values: { playgrounds: true, codespaces: true, gitpod: true, replit: false, vercel: false, shipyard: true, bolt: false, lovable: false },
      },
    ],
  },
];

const TAGS = ['all', 'platform', 'devex', 'ai', 'sharing'];
const TAG_LABELS = { all: 'All Features', platform: 'Core Platform', devex: 'Developer Experience', ai: 'AI & Automation', sharing: 'Sharing & Ecosystem' };

/* ─── Render helpers ─── */

function CellValue({ value }) {
  if (value === true) return <CheckIcon />;
  if (value === false) return <CrossIcon />;
  if (value === 'partial') return <PartialIcon />;
  return <span className="compare-label">{value}</span>;
}

function countScore(categories, competitorKey) {
  let total = 0;
  categories.forEach(cat => {
    cat.features.forEach(f => {
      const v = f.values[competitorKey];
      if (v === true) total += 1;
      else if (v === 'partial') total += 0.5;
    });
  });
  return total;
}

/* ─── Page ─── */

export default function Comparison() {
  const [activeTag, setActiveTag] = useState('all');

  const filteredCategories = activeTag === 'all'
    ? CATEGORIES
    : CATEGORIES.filter(c => c.tag === activeTag);

  const totalFeatures = CATEGORIES.reduce((s, c) => s + c.features.length, 0);

  return (
    <Layout
      title={translate({ id: 'comparison.layout.title', message: 'Compare Playgrounds.dev' })}
      description={translate({ id: 'comparison.layout.description', message: 'See how Playgrounds.dev compares to GitHub Codespaces, Gitpod, Vercel, Replit, Bolt.new, and more.' })}
    >
      {/* Hero */}
      <section className="comparison-hero">
        <div className="comparison-hero__inner">
          <span className="hero-badge">
            <SparkleIcon />
            Feature Comparison
          </span>
          <h1 className="hero-title">
            See how we{' '}
            <span className="accent">compare</span>
          </h1>
          <p className="hero-subtitle">
            An honest, feature-by-feature breakdown of Playgrounds.dev
            against the tools developers use every day.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="comparison-filters">
        <div className="comparison-tabs">
          {TAGS.map(tag => (
            <button
              key={tag}
              className={`comparison-tab ${activeTag === tag ? 'comparison-tab--active' : ''}`}
              onClick={() => setActiveTag(tag)}
            >
              {TAG_LABELS[tag]}
            </button>
          ))}
        </div>
      </section>

      {/* Table */}
      <section className="comparison-table-section">
        <div className="comparison-table-wrapper">
          <table className="comparison-table" id="comparison-table">
            <thead>
              <tr>
                <th className="comparison-table__feature-col">Feature</th>
                {COMPETITORS.map(c => (
                  <th
                    key={c.key}
                    className={c.highlight ? 'compare-highlight-col' : ''}
                  >
                    <span className="compare-col-name">{c.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredCategories.map(cat => (
                <React.Fragment key={cat.tag}>
                  <tr className="comparison-table__group-row">
                    <td colSpan={COMPETITORS.length + 1}>{cat.title}</td>
                  </tr>
                  {cat.features.map(feature => (
                    <tr key={feature.name}>
                      <td
                        className="comparison-table__feature-cell"
                        title={feature.tooltip}
                      >
                        <span className="compare-feature-name">{feature.name}</span>
                        <span className="compare-feature-tooltip">{feature.tooltip}</span>
                      </td>
                      {COMPETITORS.map(c => (
                        <td
                          key={c.key}
                          className={c.highlight ? 'compare-highlight-col' : ''}
                        >
                          <CellValue value={feature.values[c.key]} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr className="comparison-table__score-row">
                <td>Score</td>
                {COMPETITORS.map(c => (
                  <td
                    key={c.key}
                    className={c.highlight ? 'compare-highlight-col' : ''}
                  >
                    <span className="compare-score">
                      {countScore(CATEGORIES, c.key)}<span className="compare-score-total">/{totalFeatures}</span>
                    </span>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* Honest note */}
      <section className="comparison-honesty">
        <div className="comparison-honesty__inner">
          <h3 className="comparison-honesty__title">Where others shine</h3>
          <p className="comparison-honesty__subtitle">
            We believe in transparency. Here&rsquo;s where competitors have a genuine edge:
          </p>
          <div className="comparison-honesty__grid">
            <div className="honesty-card">
              <span className="honesty-card__name">AWS / GCP</span>
              <span className="honesty-card__note">Unmatched global scale, compliance certifications, and enterprise ecosystem breadth.</span>
            </div>
            <div className="honesty-card">
              <span className="honesty-card__name">Vercel</span>
              <span className="honesty-card__note">Best-in-class Next.js optimization with global edge network and serverless functions.</span>
            </div>
            <div className="honesty-card">
              <span className="honesty-card__name">GitHub Codespaces</span>
              <span className="honesty-card__note">Deepest GitHub integration with broader IDE ecosystem (VS Code Desktop, JetBrains).</span>
            </div>
            <div className="honesty-card">
              <span className="honesty-card__name">Bolt.new / Lovable</span>
              <span className="honesty-card__note">AI-powered full app generation from natural language — we provide AI coding agents, not generators.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="comparison-cta-section">
        <div className="comparison-cta__inner">
          <h2 className="comparison-cta__title">
            Ready to see the{' '}
            <span className="accent">difference</span>?
          </h2>
          <p className="comparison-cta__subtitle">
            Launch your first full-stack environment in under 60 seconds.
          </p>
          <a className="hero-cta" href="https://my.playgrounds.dev">
            Get Started Free →
          </a>
        </div>
      </section>
    </Layout>
  );
}
