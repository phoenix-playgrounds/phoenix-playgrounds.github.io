import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

const BuildingIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /></svg>
);

export default function Teams() {
    return (
        <Layout
            title={translate({ id: 'teams.layout.title', message: 'Teams' })}
            description={translate({ id: 'teams.layout.description', message: 'Empower your team with shared cloud environments, collaboration tools, and centralized management.' })}
        >
            <section className="placeholder-section">
                <div className="placeholder-inner">
                    <span className="hero-badge">
                        <BuildingIcon />
                        <Translate id="teams.badge">Teams</Translate>
                    </span>
                    <h1 className="hero-title">
                        <Translate id="teams.title.line1">Built for</Translate>{' '}
                        <span className="accent">
                            <Translate id="teams.title.accent">teams</Translate>
                        </span>
                    </h1>
                    <p className="hero-subtitle">
                        <Translate id="teams.subtitle">
                            Shared environments, centralized management, and collaboration tools designed for modern development teams.
                        </Translate>
                    </p>
                    <div className="placeholder-card">
                        <p className="placeholder-card-desc">
                            <Translate id="teams.card.desc">
                                Team features and pricing details coming soon. Get started today with our beta access.
                            </Translate>
                        </p>
                        <a className="hero-cta" href="https://my.playgrounds.dev">
                            <Translate id="teams.cta">Get Started →</Translate>
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
