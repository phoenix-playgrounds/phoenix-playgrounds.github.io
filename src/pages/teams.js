import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

export default function Teams() {
    return (
        <Layout
            title={translate({ id: 'teams.layout.title', message: 'Teams' })}
            description={translate({ id: 'teams.layout.description', message: 'Empower your team with shared cloud environments, collaboration tools, and centralized management.' })}
        >
            <section className="placeholder-section">
                <div className="placeholder-inner">
                    <span className="hero-badge">
                        <Translate id="teams.badge">🏢 Teams</Translate>
                    </span>
                    <h1 className="hero-title">
                        <Translate id="teams.title.line1">Built for</Translate>
                        <br />
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
