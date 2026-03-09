import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

const BookIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
);

export default function Tutorial() {
    return (
        <Layout
            title={translate({ id: 'plans.tutorial.layout.title', message: 'Tutorial Plan' })}
            description={translate({ id: 'plans.tutorial.layout.description', message: 'Guided, hands-on environments for learning new technologies step by step.' })}
        >
            <section className="placeholder-section">
                <div className="placeholder-inner">
                    <span className="hero-badge">
                        <BookIcon />
                        <Translate id="plans.tutorial.badge">Tutorial</Translate>
                    </span>
                    <h1 className="hero-title">
                        <Translate id="plans.tutorial.title.line1">Learn by</Translate>{' '}
                        <span className="accent">
                            <Translate id="plans.tutorial.title.accent">doing</Translate>
                        </span>
                    </h1>
                    <p className="hero-subtitle">
                        <Translate id="plans.tutorial.subtitle">
                            Guided, hands-on environments that let you learn new technologies step by step — no setup required.
                        </Translate>
                    </p>
                    <div className="placeholder-card">
                        <p className="placeholder-card-desc">
                            <Translate id="plans.tutorial.card.desc">
                                Tutorial plan details coming soon. Get started today with our beta access.
                            </Translate>
                        </p>
                        <a className="hero-cta" href="https://my.playgrounds.dev">
                            <Translate id="plans.tutorial.cta">Get Started →</Translate>
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
