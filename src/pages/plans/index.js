import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

const TagIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>
);

export default function Plans() {
    return (
        <Layout
            title={translate({ id: 'plans.layout.title', message: 'Plans & Pricing' })}
            description={translate({ id: 'plans.layout.description', message: 'Choose the perfect plan for your team. From tutorials to multiplayer environments.' })}
        >
            <section className="placeholder-section">
                <div className="placeholder-inner">
                    <span className="hero-badge">
                        <TagIcon />
                        <Translate id="plans.badge">Plans</Translate>
                    </span>
                    <h1 className="hero-title">
                        <Translate id="plans.title.line1">Choose your</Translate>{' '}
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
