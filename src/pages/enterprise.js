import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

export default function Enterprise() {
    return (
        <Layout
            title={translate({ id: 'enterprise.layout.title', message: 'Enterprise' })}
            description={translate({ id: 'enterprise.layout.description', message: 'Enterprise-grade cloud environments with dedicated infrastructure, SSO, and premium support.' })}
        >
            <section className="placeholder-section">
                <div className="placeholder-inner">
                    <span className="hero-badge">
                        <Translate id="enterprise.badge">🏛️ Enterprise</Translate>
                    </span>
                    <h1 className="hero-title">
                        <Translate id="enterprise.title.line1">Enterprise</Translate>
                        <br />
                        <span className="accent">
                            <Translate id="enterprise.title.accent">grade</Translate>
                        </span>
                    </h1>
                    <p className="hero-subtitle">
                        <Translate id="enterprise.subtitle">
                            Dedicated infrastructure, SSO, priority support, and SLAs for organizations that demand the best.
                        </Translate>
                    </p>
                    <div className="placeholder-card">
                        <p className="placeholder-card-desc">
                            <Translate id="enterprise.card.desc">
                                Enterprise plans and custom pricing coming soon. Contact us for early access and tailored solutions.
                            </Translate>
                        </p>
                        <a className="hero-cta" href="https://my.playgrounds.dev">
                            <Translate id="enterprise.cta">Get Started →</Translate>
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
