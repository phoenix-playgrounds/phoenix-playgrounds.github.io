import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

export default function Plans() {
    return (
        <Layout
            title={translate({ id: 'plans.layout.title', message: 'Plans & Pricing' })}
            description={translate({ id: 'plans.layout.description', message: 'Choose the perfect plan for your team. From tutorials to multiplayer environments.' })}
        >
            <section className="placeholder-section">
                <div className="placeholder-inner">
                    <span className="hero-badge">
                        <Translate id="plans.badge">💰 Plans</Translate>
                    </span>
                    <h1 className="hero-title">
                        <Translate id="plans.title.line1">Choose your</Translate>
                        <br />
                        <span className="accent">
                            <Translate id="plans.title.accent">perfect plan</Translate>
                        </span>
                    </h1>
                    <p className="hero-subtitle">
                        <Translate id="plans.subtitle">
                            From solo tutorials to full multiplayer environments — we have a plan that fits your workflow.
                        </Translate>
                    </p>
                    <div className="placeholder-card">
                        <p className="placeholder-card-desc">
                            <Translate id="plans.card.desc">
                                Detailed pricing and plan comparison coming soon. Get started today with our beta access.
                            </Translate>
                        </p>
                        <a className="hero-cta" href="https://my.playgrounds.dev">
                            <Translate id="plans.cta">Get Started →</Translate>
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
