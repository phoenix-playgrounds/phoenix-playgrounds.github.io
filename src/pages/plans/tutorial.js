import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

export default function PlansTutorial() {
    return (
        <Layout
            title={translate({ id: 'plans.tutorial.layout.title', message: 'Tutorial Plan' })}
            description={translate({ id: 'plans.tutorial.layout.description', message: 'Learn and experiment with guided tutorial environments on Playgrounds.dev.' })}
        >
            <section className="placeholder-section">
                <div className="placeholder-inner">
                    <span className="hero-badge">
                        <Translate id="plans.tutorial.badge">📖 Tutorial</Translate>
                    </span>
                    <h1 className="hero-title">
                        <Translate id="plans.tutorial.title.line1">Learn by</Translate>
                        <br />
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
                                Tutorial plan details and pricing coming soon. Start exploring with our beta access.
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
